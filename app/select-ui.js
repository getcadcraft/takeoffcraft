/* SPDX-License-Identifier: Apache-2.0 */
/**
 * select-ui.js: takeoffcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSelect(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as G from './geom.js';
import * as CMK from './countmarker.js';
import { t } from './i18n.js';

export function mountSelect(ctx) {
  const { ST, ui, model, app, selMore, selIds, isSel, setSelection, status } = ctx;

  // ---- selecting and editing marks ----
  function markAt(p) {
    const tol = ctx.hitPx() / ctx.view.z;
    const list = model.marksOn(ST.cur.key);
    for (let i = list.length - 1; i >= 0; i--) {
      const m = list[i];
      if (m.kind === 'count' && G.dist(p, m.pts[0]) <= Math.max(tol * 1.3, CMK.markerPx(ctx.settings.marker) / ctx.view.z)) return m;
      if (m.kind === 'linear' && G.distToPath(p, m.pts) <= tol) return m;
    }
    for (let i = list.length - 1; i >= 0; i--) {
      const m = list[i];
      if (m.kind !== 'area') continue;
      if (G.distToPath(p, m.pts, true) <= tol || m.holes.some((h) => G.distToPath(p, h, true) <= tol)) return m;
      if (G.pointInPolygon(p, m.pts) && !m.holes.some((h) => G.pointInPolygon(p, h))) return m;
    }
    return null;
  }
  /** Click with Select: select the mark under the pointer; with Shift, add it to the selection or take it out. */
  function selectAt(p, additive = false) {
    const n = !additive && ctx.noteHit(p);                        // T22: a markup on top of the marks
    if (n) { app.sel = null; app.selNote = n.id; ctx.renderMarkProps(); ctx.renderNoteProps(); ui.noteSec.scrollIntoView({ block: 'nearest' }); status(t('note.selected', { kind: t('tool.' + n.kind).toLowerCase() })); ctx.view.overlayOnly(); return; }
    if (app.selNote) { app.selNote = null; ctx.renderNoteProps(); }
    const m = markAt(p);
    if (additive && (ST.selMain || selMore.size)) {
      if (!m) return;
      if (isSel(m.id)) {
        if (m.id === ST.selMain) { const rest = [...selMore]; setSelection(rest); } else selMore.delete(m.id);
      } else selMore.add(m.id);
      const n = selIds().length;
      status(t('sel.several', { n, mod: ctx.modKey }));
    } else {
      app.sel = m?.id || null;
      if (m) { ctx.setActive(m.item, false); status(t('sel.one.' + m.kind, { item: model.item(m.item).name, mod: ctx.modKey })); }
    }
    ctx.renderMarkProps(); ctx.renderItems(); ctx.renderItemProps();
    ctx.view.overlayOnly();
  }
  /** A corner of the selected mark under the pointer. */
  function handleAt(s) {
    const m = app.sel && !selMore.size && model.mark(app.sel);
    if (!m || m.sheet !== ST.cur.key) return null;
    const rings = [m.pts, ...(m.holes || [])];
    for (let r = 0; r < rings.length; r++) {
      for (let i = 0; i < rings[r].length; i++) {
        const q = ctx.view.toScreen(rings[r][i]);
        if (Math.hypot(q.x - s.x, q.y - s.y) <= ctx.hitPx()) {
          const ring = rings[r];
          const anchor = m.kind === 'count' ? null : ring[(i - 1 + ring.length) % ring.length];
          return { id: m.id, ring: r, i, pts: m.pts.map((p) => ({ ...p })), holes: m.holes.map((h) => h.map((p) => ({ ...p }))), anchor: m.kind === 'linear' && i === 0 ? ring[1] : anchor };
        }
      }
    }
    // T11: the middle of an arc — drag it to change how much the arc bows
    for (const h of arcHandles(m)) {
      const q = ctx.view.toScreen(h.at);
      if (Math.hypot(q.x - s.x, q.y - s.y) <= ctx.hitPx()) return { id: m.id, ring: h.ring, i: h.i, arc: true, pts: m.pts.map((p) => ({ ...p })), holes: m.holes.map((x) => x.map((p) => ({ ...p }))), anchor: null };
    }
    return null;
  }
  /** The arcs of a mark, each with its middle point: [{ ring, i (its start point), at }]. */
  function arcHandles(m) {
    const out = [];
    if (m.kind === 'count') return out;
    const rings = [m.pts, ...(m.holes || [])];
    rings.forEach((ring, r) => {
      const closed = m.kind === 'area';
      for (let i = 0; i < ring.length; i++) {
        if (!ring[i].b || (!closed && i === ring.length - 1)) continue;
        out.push({ ring: r, i, at: ctx.segMid(ring[i], ring[(i + 1) % ring.length]) });
      }
    });
    return out;
  }
  function dragTo(p) {
    const g = app.drag;
    const ring = g.ring === 0 ? g.pts : g.holes[g.ring - 1];
    if (g.arc) {                                  // T11: the arc through the dragged point (a straight line drops the arc)
      const a = ring[g.i], z = ring[(g.i + 1) % ring.length];
      const b = G.bulgeThrough(a, p, z);
      ring[g.i] = Math.abs(b) > 1e-6 && Math.abs(b) < 1e3 ? { x: a.x, y: a.y, b } : { x: a.x, y: a.y };
    } else ring[g.i] = ring[g.i].b ? { x: p.x, y: p.y, b: ring[g.i].b } : { x: p.x, y: p.y };
    g.moved = true;
  }
  function commitDrag(g) {
    const m = model.mark(g.id);
    if (!m || !g.moved) { ctx.view.overlayOnly(); return; }
    if (m.kind === 'area') {
      const why = G.outlineProblem(g.pts) || g.holes.map((h, i) => G.holeProblem(g.pts, g.holes.filter((_, j) => j !== i), h)).find(Boolean);
      if (why) { status(why + ' ' + t('drag.back'), 9000); ctx.view.overlayOnly(); return; }
    }
    model.updateMark(g.id, { pts: g.pts, holes: g.holes }, g.arc ? t('undo.arc.bend') : t('undo.point.move'));
  }

  return { selectAt, handleAt, arcHandles, dragTo, commitDrag };
}
