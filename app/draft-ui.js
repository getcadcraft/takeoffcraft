/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draft-ui.js: takeoffcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountDraft(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import * as AM from './arcmethods.js';
import * as G from './geom.js';
import * as U from './units.js';

export function mountDraft(ctx) {
  const { ST, ui, model, app, selectAt, status, setTool, closeTypeIn, pickClick } = ctx;

  function click(p, screen, typed = false) {
    const tool = app.tool;
    if (app.cmp?.align) { ctx.alignPick(p); return; }
    if (app.paste) { ctx.placePaste(p); return; }
    if (tool === 'select') { selectAt(p, app.shift); return; }
    // the sheet may have changed (or its scale been undone) since the tool was picked
    if (tool === 'autocount' || tool === 'legend') return;
    if ((tool === 'linear' || tool === 'area' || tool === 'count' || tool === 'circle' || tool === 'room') && !model.item(app.active)) { setTool('select'); status(t('tool.err.item')); return; }
    if ((tool === 'linear' || tool === 'area' || tool === 'cutout' || tool === 'circle' || tool === 'cutcircle' || tool === 'room' || tool === 'path') && !model.scaleOf(ST.cur.key)) {
      app.draft = null;
      status(t('tool.err.noscale.measure'), 9000);
      ctx.view.overlayOnly();
      return;
    }
    if ((tool === 'cutout' || tool === 'cutcircle') && model.mark(app.sel)?.sheet !== ST.cur.key) { setTool('select'); return; }
    if (tool === 'count') {
      const id = model.addMark({ item: app.active, sheet: ST.cur.key, pts: [p], kind: 'count', ...ctx.inArea() });
      app.sel = id;
      return;
    }
    if (tool === 'room') { ctx.fillRoom(p); return; }
    if (tool === 'path') { pickClick(p); return; }
    if (tool === 'note') { ctx.noteAt(p); return; }
    if (tool === 'cloud' || tool === 'highlight') {          // T22: two corners
      if (!app.noteStart) { app.noteStart = p; status(t('help.' + tool + '.2'), 0); ctx.view.overlayOnly(); return; }
      const a = app.noteStart;
      app.noteStart = null;
      ctx.boxNote(tool, a, p);
      return;
    }
    if (!app.draft) app.draft = { pts: [] };
    // a double-click's second click lands where the first did: it finishes, it adds no point (with 45° snapping
    // the snapped point could otherwise differ from the first and leave a short stub)
    const ls = app.draft.lastScreen;
    if (!typed && ls && (tool === 'linear' || tool === 'area' || tool === 'cutout') && Math.hypot(ls.x - screen.x, ls.y - screen.y) <= 3) return;
    app.draft.lastScreen = { x: screen.x, y: screen.y };
    const pts = app.draft.pts;
    if (tool === 'circle' || tool === 'cutcircle') {
      if (!pts.length) { pts.push(p); ctx.view.overlayOnly(); return; }
      finishCircle(pts[0], p);
      return;
    }
    // arc mode: the first click after a point is on the curve, the second is where it ends (FX.137: or the chosen method's steps)
    if (app.arc && pts.length && app.arcMethod !== '3P' && (tool === 'linear' || tool === 'area' || tool === 'cutout')) { ctx.arcStep(AM.clickValue(app.arcMethod, pts.at(-1), app.draft.arcGot ??= [], p, ctx.arcSign())); return; }
    if (app.arc && pts.length && (tool === 'linear' || tool === 'area' || tool === 'cutout')) {
      if (!app.draft.mid) { app.draft.mid = p; liveMeasure(); ctx.view.overlayOnly(); return; }
      const last = pts.at(-1), mid = app.draft.mid;
      app.draft.mid = null;
      let end = p, closing = false;
      if ((tool === 'area' || tool === 'cutout') && pts.length >= 2) {
        const s0 = ctx.view.toScreen(pts[0]);
        if (Math.hypot(s0.x - screen.x, s0.y - screen.y) <= ctx.closePx()) { closing = true; end = pts[0]; }
      }
      const b = G.bulgeThrough(last, mid, end);
      pts[pts.length - 1] = b ? { x: last.x, y: last.y, b } : { x: last.x, y: last.y };
      if (closing) { finishDraft(); return; }
      pts.push({ x: end.x, y: end.y });
      noteDeduct(app.draft);
      liveMeasure();
      ctx.view.overlayOnly();
      return;
    }
    if ((tool === 'area' || tool === 'cutout') && pts.length >= 3) {
      const s0 = ctx.view.toScreen(pts[0]);
      if (Math.hypot(s0.x - screen.x, s0.y - screen.y) <= ctx.closePx()) { finishDraft(); return; }
    }
    pts.push(p);
    noteDeduct(app.draft);
    if ((tool === 'calibrate' || tool === 'check') && pts.length === 2) { finishDraft(); return; }
    liveMeasure();
    ctx.view.overlayOnly();
  }

  /** In deduct mode (T2), the segment a linear run just gained is a deduct. */
  function noteDeduct(d) {
    if (!d || app.tool !== 'linear' || d.pts.length < 2) return;
    d.ded ??= new Set();
    if (app.deduct) d.ded.add(d.pts.length - 2); else d.ded.delete(d.pts.length - 2);
  }
  /** dedupe() for a run, keeping its deducts on the right segments: `out` gets the new segment numbers. */
  function dedupeRun(pts, ded, out) {
    const tol = 2 / ctx.view.z;
    const kept = [];
    pts.forEach((p, j) => {
      if (kept.length && G.dist(kept.at(-1), p) <= tol) return;
      kept.push(p);
      if (j > 0 && kept.length > 1 && ded.has(j - 1)) out.add(kept.length - 2);
    });
    return kept;
  }
  /** Drop points that sit on the one before (a double-click adds two). */
  function dedupe(pts) {
    const tol = 2 / ctx.view.z;
    const out = [];
    for (const p of pts) if (!out.length || G.dist(out.at(-1), p) > tol) out.push(p);
    return out;
  }

  async function finishDraft() {
    const d = app.draft;
    if (!d) return;
    const tool = app.tool;
    let ded = new Set();
    let pts = tool === 'linear' ? dedupeRun(d.pts, d.ded || new Set(), ded) : dedupe(d.pts);
    if (tool === 'area' || tool === 'cutout') while (pts.length > 3 && !pts.at(-2).b && G.dist(pts[0], pts.at(-1)) <= 2 / ctx.view.z) pts.pop();
    if (tool === 'linear') pts = pts.map((q, i) => (i === pts.length - 1 && q.b ? { x: q.x, y: q.y } : q));   // a run's last point starts nothing
    app.draft = null;
    closeTypeIn();
    ui.measure.textContent = '';
    if (tool === 'linear') {
      if (pts.length < 2) { status(t('run.err.points')); return; }
      if (ded.size && ded.size >= pts.length - 1) { status(t('deduct.all'), 9000); ctx.view.overlayOnly(); return; }
      app.sel = model.addMark({ item: app.active, sheet: ST.cur.key, pts, kind: 'linear', ...(ded.size ? { deducts: [...ded] } : {}), ...ctx.inArea() });
    } else if (tool === 'area') {
      const why = G.outlineProblem(pts);
      if (why) { status(why, 9000); ctx.view.overlayOnly(); return; }
      if (model.item(app.active)?.backout && !G.isConvex(pts)) { status(t('backout.convex'), 12000); ctx.view.overlayOnly(); return; }
      app.sel = model.addMark({ item: app.active, sheet: ST.cur.key, pts, kind: 'area', ...ctx.inArea() });
    } else if (tool === 'cutout') {
      const m = model.mark(app.sel);
      if (!m) return;
      const why = G.holeProblem(m.pts, m.holes, pts);
      if (why) { status(why, 9000); ctx.view.overlayOnly(); return; }
      model.updateMark(m.id, { holes: [...m.holes, pts] }, 'Cut-out');
      status(t('cutout.added'));
    } else if (tool === 'calibrate') {
      if (pts.length < 2) return;
      await ctx.calibrateDialog(pts[0], pts[1]);
    } else if (tool === 'check') {
      if (pts.length < 2) return;
      const sc = model.scaleOf(ST.cur.key);
      if (!sc) { status(t('check.noscale')); app.check = null; return; }
      const ft = G.dist(pts[0], pts[1]) * sc.ftPerUnit;
      app.check = { a: pts[0], b: pts[1], text: ctx.ftIn(ft) };
      ui.measure.textContent = t('check.result', { len: ctx.ftIn(ft), ft: U.fixed(ft, 3), m: U.fixed(ft * U.M_PER_FT, 3) });
      status(t('check.hint'), 0);
    }
    ctx.renderMarkProps();                 // the new mark is selected: show it
    ctx.view.overlayOnly();
  }

  /** A circle as two half-circle arcs (exact area and perimeter): a new area, or a round cut-out. */
  function finishCircle(c, edge) {
    app.draft = null;
    closeTypeIn();
    ui.measure.textContent = '';
    const r = G.dist(c, edge);
    if (r * ctx.view.z < 3) { status(t('circle.err.small')); ctx.view.overlayOnly(); return; }
    const pts = [{ x: c.x + r, y: c.y, b: 1 }, { x: c.x - r, y: c.y, b: 1 }];
    if (app.tool === 'cutcircle') {
      const m = model.mark(app.sel);
      if (!m) return;
      const why = G.holeProblem(m.pts, m.holes, pts);
      if (why) { status(why, 9000); ctx.view.overlayOnly(); return; }
      model.updateMark(m.id, { holes: [...m.holes, pts] }, t('undo.cutout.round'));
      status(t('cutout.round.added'));
      return;
    }
    app.sel = model.addMark({ item: app.active, sheet: ST.cur.key, pts, kind: 'area', ...ctx.inArea() });
    ctx.renderMarkProps();
  }

  /** The run or outline being drawn, with the pending arc (or straight segment) to the cursor. */
  function previewPts() {
    const d = app.draft;
    if (!d) return [];
    const pts = d.pts.map((p) => ({ ...p }));
    if (!app.cursor || !pts.length) return pts;
    if (d.mid) { const b = G.bulgeThrough(pts.at(-1), d.mid, app.cursor); if (b) pts[pts.length - 1].b = b; }
    const ap = ctx.arcPending();
    if (ap) {                                       // FX.137: the arc the pointer would give for the last input
      const r = AM.preview(ap.id, pts.at(-1), ap.got, app.cursor, ctx.arcSign());
      if (r) { pts[pts.length - 1].b = r.b; pts.push(r.end); return pts; }
    }
    pts.push({ x: app.cursor.x, y: app.cursor.y });
    return pts;
  }

  function liveMeasure() {
    const d = app.draft;
    if (!d || !ST.cur || !app.cursor) return;
    const sc = model.scaleOf(ST.cur.key);
    const pts = previewPts();
    if (app.tool === 'calibrate') { ui.measure.textContent = d.pts.length ? t('cal.second') : ''; return; }
    if (!sc) { ui.measure.textContent = ''; return; }
    const k = sc.ftPerUnit;
    const lastSeg = pts.length >= 2 ? G.segLength(pts.at(-2), pts.at(-1), pts.at(-2).b) * k : 0;
    const ar = ctx.arcRole();
    const arcNote = d.mid ? '   ' + t('measure.arc') : ar ? '   ' + t('arc.ask.' + ar) : '';
    if (app.tool === 'circle' || app.tool === 'cutcircle') {
      const r = G.dist(d.pts[0], app.cursor) * k;
      ui.measure.textContent = t('measure.circle.u', { r: ctx.ftIn(r), area: ctx.measureArea(Math.PI * r * r) });
    } else if (app.tool === 'linear' || app.tool === 'check') {
      if (app.tool === 'linear') {
        // deduct segments (T2) are left out of the run's length; the one under way follows the Deduct button
        const segs = G.segmentLengths(pts);
        const net = segs.reduce((n, len, i) => n + ((i === segs.length - 1 ? app.deduct : d.ded?.has(i)) ? 0 : len), 0);
        ui.measure.textContent = t('measure.run', { len: ctx.ftIn(net * k), seg: app.deduct ? t('deduct.seg', { len: ctx.ftIn(lastSeg) }) : ctx.ftIn(lastSeg) }) + arcNote;
      } else ui.measure.textContent = ctx.ftIn(lastSeg) + arcNote;
    } else if (app.tool === 'area' || app.tool === 'cutout') {
      ui.measure.textContent = (pts.length >= 3 || G.hasArcs(pts) ? t('measure.area.u', { area: ctx.measureArea(G.polygonArea(pts) * k * k), p: ctx.ftIn(G.perimeter(pts) * k) }) : t('measure.side', { len: ctx.ftIn(lastSeg) })) + arcNote;
    }
  }

  return { click, noteDeduct, finishDraft, previewPts, liveMeasure };
}
