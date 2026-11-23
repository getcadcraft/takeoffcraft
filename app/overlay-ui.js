/* SPDX-License-Identifier: Apache-2.0 */
/**
 * overlay-ui.js: takeoffcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountOverlay(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as G from './geom.js';
import * as CMK from './countmarker.js';
import { t } from './i18n.js';
import { measureMark } from './model.js';

export function mountOverlay(mc) {
  const { ST, model, app, selMore, selIds, isSel, renderTouchBar, drawPick, drawSnap, previewPts, arcHandles } = mc;

  function drawOverlay(ctx) {
    renderTouchBar();
    if (!ST.cur) return;
    const items = new Map(model.state.items.map((i) => [i.id, i]));
    const M = mc.view.matrix;
    const S = (p) => G.apply(M, p);
    const trace = (pts, close) => {
      for (const op of G.pathOps(pts, close)) {
        if (op[0] === 'M') { const s = S(op[1]); ctx.moveTo(s.x, s.y); }
        else if (op[0] === 'L') { const s = S(op[1]); ctx.lineTo(s.x, s.y); }
        else if (op[0] === 'C') { const a = S(op[1]), b = S(op[2]), c = S(op[3]); ctx.bezierCurveTo(a.x, a.y, b.x, b.y, c.x, c.y); }
        else ctx.closePath();
      }
    };
    const line = (pts, close) => { ctx.beginPath(); trace(pts, close); };
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    mc.drawCompare(ctx);
    const drag = app.drag?.moved ? app.drag : null;
    const dotPx = CMK.markerPx(mc.settings.marker);        // 0.9.1: the count marker size set in Settings (6 px unless changed); the PDF draws the same size on paper
    for (const m0 of model.marksOn(ST.cur.key)) {
      const it = items.get(m0.item);
      if (!it) continue;
      const m = drag && drag.id === m0.id ? { ...m0, pts: drag.pts, holes: drag.holes } : m0;
      const dim = (app.hl && app.hl !== m.item) || (app.curArea && m.area !== app.curArea);
      ctx.globalAlpha = dim ? 0.22 : 1;
      if (m.flag) {                       // T13: the drawing changed under it in the revision — an orange halo until checked
        ctx.save(); ctx.globalAlpha = 0.9; ctx.strokeStyle = mc.FLAG_COLOR; ctx.lineWidth = 9; ctx.setLineDash([8, 6]);
        if (m.kind === 'count') { const s = S(m.pts[0]); ctx.beginPath(); ctx.arc(s.x, s.y, dotPx * 2, 0, Math.PI * 2); ctx.stroke(); }
        else { ctx.beginPath(); for (const ring of [m.pts, ...(m.kind === 'area' ? m.holes : [])]) trace(ring, m.kind === 'area'); ctx.stroke(); }
        ctx.restore();
      }
      ctx.strokeStyle = it.color; ctx.fillStyle = it.color;
      const selected = isSel(m.id);
      if (m.kind === 'linear') {
        for (const sp of G.spans(m.pts, new Set(m.deducts || []))) {
          ctx.lineWidth = (selected ? 4 : 2.5) * (sp.deduct ? 0.6 : 1);
          if (sp.deduct) ctx.setLineDash([7, 5]);
          line(sp.pts, false); ctx.stroke();
          ctx.setLineDash([]);
        }
      } else if (m.kind === 'area') {
        ctx.beginPath();
        for (const ring of [m.pts, ...m.holes]) trace(ring, true);
        ctx.globalAlpha = dim ? 0.06 : it.backout ? 0.1 : 0.2; ctx.fill('evenodd');
        ctx.globalAlpha = dim ? 0.22 : 1;
        if (it.backout) ctx.setLineDash([4, 4]);          // a back-out (T14): dashed, lighter
        ctx.lineWidth = selected ? 3.5 : 2; ctx.stroke();
        ctx.setLineDash([]);
      } else {
        const s = S(m.pts[0]);
        ctx.beginPath(); ctx.arc(s.x, s.y, selected ? dotPx * CMK.SELECTED : dotPx, 0, Math.PI * 2); ctx.fill();
        ctx.lineWidth = dotPx * CMK.OUTLINE; ctx.strokeStyle = '#ffffff'; ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    mc.drawNotesLayer(ctx, S);
    // typical groups (T16): a dashed box round each group's marks on this sheet, with its name and repeat count
    const gbox = new Map();
    for (const m of model.marksOn(ST.cur.key)) {
      if (!m.group) continue;
      let b = gbox.get(m.group);
      if (!b) gbox.set(m.group, (b = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }));
      for (const p of m.pts) { const q = S(p); b.minX = Math.min(b.minX, q.x); b.minY = Math.min(b.minY, q.y); b.maxX = Math.max(b.maxX, q.x); b.maxY = Math.max(b.maxY, q.y); }
    }
    for (const [gid, b] of gbox) {
      const g = model.group(gid);
      if (!g) continue;
      const pad = 10;
      ctx.save(); ctx.globalAlpha = 0.7; ctx.strokeStyle = ST.colors.ink; ctx.lineWidth = 1; ctx.setLineDash([6, 4]);
      ctx.strokeRect(b.minX - pad, b.minY - pad, b.maxX - b.minX + 2 * pad, b.maxY - b.minY + 2 * pad);
      ctx.restore();
      tag(ctx, { x: (b.minX + b.maxX) / 2, y: b.minY - pad - 10 }, t('group.tag', { name: g.name, n: g.repeat }));
    }
    // several selected: a small square on every corner, no handles to drag
    if (selMore.size) {
      ctx.lineWidth = 1.5; ctx.strokeStyle = ST.colors.action; ctx.fillStyle = ST.colors.sheet;
      for (const id of selIds()) {
        const m = model.mark(id);
        if (m.sheet !== ST.cur.key) continue;
        for (const ring of [m.pts, ...m.holes]) for (const p of ring) { const s = S(p); ctx.fillRect(s.x - 3, s.y - 3, 6, 6); ctx.strokeRect(s.x - 3, s.y - 3, 6, 6); }
      }
    }
    // the selected mark: corner handles and its measurements
    const sm = app.sel && !selMore.size && model.mark(app.sel);
    if (sm && sm.sheet === ST.cur.key) {
      const m = drag && drag.id === sm.id ? { ...sm, pts: drag.pts, holes: drag.holes } : sm;
      ctx.lineWidth = 1.5; ctx.strokeStyle = ST.colors.action; ctx.fillStyle = ST.colors.sheet;
      const hs = ST.coarse ? 7 : 4;                       // corner handles: bigger for fingers (S.8)
      for (const ring of [m.pts, ...m.holes]) for (const p of ring) { const s = S(p); ctx.fillRect(s.x - hs, s.y - hs, 2 * hs, 2 * hs); ctx.strokeRect(s.x - hs, s.y - hs, 2 * hs, 2 * hs); }
      const sc = model.scaleOf(ST.cur.key);
      if (sc && m.kind === 'linear') {
        const r = measureMark(m, sc.ftPerUnit, model.item(m.item));          // rakes and hips read along their slope (T15)
        for (let i = 1; i < m.pts.length; i++) {
          let at = S(segMid(m.pts[i - 1], m.pts[i]));
          if (m.pts[i - 1].b) {                       // an arc: its label sits outside the curve, clear of the bend handle (T11)
            const a = S(m.pts[i - 1]), z = S(m.pts[i]), vx = at.x - (a.x + z.x) / 2, vy = at.y - (a.y + z.y) / 2, l = Math.hypot(vx, vy);
            if (l > 1e-6) at = { x: at.x + vx / l * 18, y: at.y + vy / l * 18 };
          }
          label(ctx, S(m.pts[i - 1]), S(m.pts[i]), mc.ftIn(r.slopedFt[i - 1]), at);
        }
      }
      if (sc && m.kind === 'area') { const r = measureMark(m, sc.ftPerUnit, model.item(m.item)); tag(ctx, S(G.centroid(m.pts)), mc.areaShow(r.areaSqft, model.item(m.item))); }
      // T11: a round handle in the middle of each arc (drag to bend), over the labels
      ctx.lineWidth = 1.5; ctx.strokeStyle = ST.colors.action; ctx.fillStyle = ST.colors.sheet;
      for (const h of arcHandles(m)) { const s = S(h.at); ctx.beginPath(); ctx.arc(s.x, s.y, hs + 1, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
    }
    // the draft
    const d = app.draft;
    if (d && d.pts.length) {
      const it = items.get(app.active);
      const hole = app.tool === 'cutout' || app.tool === 'cutcircle';
      const c = app.tool === 'calibrate' || app.tool === 'check' ? ST.colors.layer : hole ? ST.colors.ink : it?.color || ST.colors.ink;
      ctx.strokeStyle = c; ctx.fillStyle = c; ctx.lineWidth = 2;
      if ((app.tool === 'circle' || app.tool === 'cutcircle') && app.cursor) {
        const r = G.dist(d.pts[0], app.cursor);
        const ring = [{ x: d.pts[0].x + r, y: d.pts[0].y, b: 1 }, { x: d.pts[0].x - r, y: d.pts[0].y, b: 1 }];
        line(ring, true); ctx.globalAlpha = 0.15; ctx.fill(); ctx.globalAlpha = 1; ctx.stroke();
        line([d.pts[0], app.cursor], false); ctx.setLineDash([6, 4]); ctx.stroke(); ctx.setLineDash([]);
      } else {
        const pts = previewPts();
        if ((app.tool === 'area' || app.tool === 'cutout') && (pts.length >= 3 || G.hasArcs(pts))) { line(pts, true); ctx.globalAlpha = 0.15; ctx.fill(); ctx.globalAlpha = 1; }
        if (app.tool === 'linear' && d.ded?.size) {
          for (const sp of G.spans(pts.slice(0, d.pts.length), d.ded)) { ctx.lineWidth = sp.deduct ? 1.2 : 2; if (sp.deduct) ctx.setLineDash([7, 5]); line(sp.pts, false); ctx.stroke(); ctx.setLineDash([]); }
          ctx.lineWidth = 2;
        } else { line(pts.slice(0, d.pts.length), false); ctx.stroke(); }
        if (app.cursor && pts.length >= 2) { ctx.setLineDash([6, 4]); line(pts.slice(-2), false); ctx.stroke(); ctx.setLineDash([]); }
        if (d.mid) { const s = S(d.mid); ctx.beginPath(); ctx.arc(s.x, s.y, 4, 0, Math.PI * 2); ctx.stroke(); }
        for (const g of d.arcGot || []) if (typeof g !== 'number') { const s = S(g); ctx.beginPath(); ctx.arc(s.x, s.y, 4, 0, Math.PI * 2); ctx.stroke(); }   // FX.137: the centre / end given so far
      }
      for (const p of d.pts) { const s = S(p); ctx.fillRect(s.x - 3, s.y - 3, 6, 6); }
      if ((app.tool === 'area' || app.tool === 'cutout') && d.pts.length >= 3) { const s = S(d.pts[0]); ctx.beginPath(); ctx.arc(s.x, s.y, mc.closePx(), 0, Math.PI * 2); ctx.lineWidth = 1; ctx.stroke(); }
    }
    if (app.check) {
      ctx.strokeStyle = ST.colors.layer; ctx.lineWidth = 2;
      const a = S(app.check.a), b = S(app.check.b);
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      for (const p of [a, b]) { ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.stroke(); }
      label(ctx, a, b, app.check.text);
    }
    mc.drawAutoCount(ctx, S, line);
    ST.countAllUi?.draw(ctx, S, line);
    mc.drawCadGeom(ctx, S, trace);
    mc.drawPaste(ctx, trace);
    drawPick(ctx, S);
    drawSnap(ctx, S);
    // the cursor's crosshair while picking points
    if (app.cursor && app.tool !== 'select') {
      const s = S(app.cursor);
      ctx.strokeStyle = ST.colors.action; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(s.x - 10, s.y); ctx.lineTo(s.x + 10, s.y); ctx.moveTo(s.x, s.y - 10); ctx.lineTo(s.x, s.y + 10); ctx.stroke();
    }
  }
  /** A dimension-style label at the middle of a segment (our own computed text). */
  function label(ctx, a, b, text, at = null) {
    if (Math.hypot(b.x - a.x, b.y - a.y) < 40) return;
    tag(ctx, at || { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, text);
  }
  /** The middle of a segment, on the arc when it is one. */
  function segMid(p, q) {
    const a = G.arcOf(p, q, p.b);
    if (!a) return { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 };
    const t = a.a0 + a.sweep / 2;
    return { x: a.cx + a.r * Math.cos(t), y: a.cy + a.r * Math.sin(t) };
  }
  function tag(ctx, at, text) {
    ctx.font = '600 12px Archivo, system-ui, sans-serif';
    const w = ctx.measureText(text).width + 10;
    ctx.fillStyle = ST.colors.sheet; ctx.strokeStyle = ST.colors.ink; ctx.lineWidth = 1;
    ctx.fillRect(at.x - w / 2, at.y - 9, w, 18); ctx.strokeRect(at.x - w / 2, at.y - 9, w, 18);
    ctx.fillStyle = ST.colors.ink; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, at.x, at.y + 0.5);
  }

  return { drawOverlay, segMid, tag };
}
