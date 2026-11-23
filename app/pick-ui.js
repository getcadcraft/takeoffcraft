/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pick-ui.js: takeoffcraft.js's 16 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountPick(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as U from './units.js';
import * as PP from './pickpath.js';
import { t } from './i18n.js';
import { kindsOf } from './model.js';
import * as G from './geom.js';

export function mountPick(mc) {
  const { ST, ui, model, app, status, syncSettingsForm } = mc;

  // ---- pick the PDF's own linework (0.8 SU.880; pickpath.js) ----
  // Click a line: the whole path joined to it end to end within the gap tolerance. Click inside a closed outline: its area.
  // Shift adds, Tab tries the next path, Backspace (or Ctrl+Z) takes the last segment off, [ ] set the tolerance, Enter adds the marks.
  const pickIdx = () => { const r = ST.cur && mc.snaps.get(ST.cur.key); return r?.idx || null; };
  const pickTolUnits = () => (ST.coarse ? 14 : 8) / mc.view.z;                        // how close a click must be to a line
  const pickGapText = () => { const sc = ST.cur && model.scaleOf(ST.cur.key); return sc ? mc.ftIn(mc.settings.pickGap * sc.ftPerUnit) : U.fixed(mc.settings.pickGap, 2) + ' pt'; };
  ST.pickChains = { key: '', idx: null, map: new Map() };                       // the chains of the sheet at this tolerance, so hovering stays quick
  function pickChain(idx, seed, gap) {
    const key = (ST.cur?.key || '') + '|' + gap;
    if (ST.pickChains.key !== key || ST.pickChains.idx !== idx) ST.pickChains = { key, idx, map: new Map() };
    let c = ST.pickChains.map.get(seed);
    if (!c) {
      c = PP.chainFrom(idx, seed, gap);
      if (ST.pickChains.map.size > 400) ST.pickChains.map.clear();
      for (const e of c.segs) if (!ST.pickChains.map.has(e.s)) ST.pickChains.map.set(e.s, c);
      ST.pickChains.map.set(seed, c);
    }
    return c;
  }
  function pickCands(p) {
    const idx = pickIdx();
    return idx ? PP.candidatesAt(idx, p, pickTolUnits(), mc.settings.pickGap, 6, pickChain) : [];
  }
  function pickHover(p) {
    const pk = app.pick;
    if (!pk || !ST.cur) return;
    const cands = pickCands(p);
    const same = cands[0] && pk.hover[0] && cands[0].seed === pk.hover[0].seed;
    if (!same) pk.hi = 0;
    pk.hover = cands;
    if (cands.length) {
      const sc = model.scaleOf(ST.cur.key), i = Math.min(pk.hi, cands.length - 1), c = cands[i];
      if (sc && !pk.staged.length) ui.measure.textContent = t('sx.su880.measure.hover', { segs: t('sx.su880.seg', { n: c.segs.length }), len: mc.ftIn(PP.pathLength(c) * sc.ftPerUnit), i: i + 1, n: cands.length, tol: t('sx.su880.tol', { gap: pickGapText() }) });
    } else if (!pk.staged.length) ui.measure.textContent = '';
  }
  function pickClick(p) {
    const idx = pickIdx(), pk = app.pick;
    if (!pk || !ST.cur) return;
    if (!idx) { status(t('sx.su880.nolines'), 9000); return; }
    if (pk.sheet !== ST.cur.key) { pk.sheet = ST.cur.key; pk.staged = []; }
    const cands = pickCands(p);
    let entry;
    if (cands.length) entry = { kind: 'line', path: cands[Math.min(pk.hi, cands.length - 1)] };
    else {
      const loops = PP.loopsAround(idx, p, mc.settings.pickGap);
      if (!loops.length) { status(t(pk.staged.length ? 'sx.su880.none' : 'sx.su880.noloop', { gap: pickGapText() }), 9000); return; }
      entry = { kind: 'loop', path: loops[0], alts: loops, ai: 0 };
    }
    if (app.shift) { if (!pk.staged.some((e) => e.path.segs.some((x) => x.s === entry.path.seed))) pk.staged.push(entry); }
    else pk.staged = [entry];
    pickReport(); mc.view.overlayOnly();
  }
  /** The live text under the toolbar: lengths and areas of what is picked, the tolerance, how many gaps were bridged. */
  function pickReport() {
    const pk = app.pick, sc = ST.cur && model.scaleOf(ST.cur.key);
    if (!pk?.staged.length || !sc) return;
    const k = sc.ftPerUnit, tol = t('sx.su880.tol', { gap: pickGapText() });
    const bridged = (e) => (e.path.gaps.length ? t('sx.su880.bridged', { n: e.path.gaps.length }) : '');
    if (pk.staged.length === 1) {
      const e = pk.staged[0], segs = t('sx.su880.seg', { n: e.path.segs.length }), len = mc.ftIn(PP.pathLength(e.path) * k);
      ui.measure.textContent = e.kind === 'loop' ? t('sx.su880.measure.area.u', { area: mc.measureArea(PP.pathArea(e.path) * k * k), len, segs, tol, bridged: bridged(e) })
        : t(e.path.closed ? 'sx.su880.measure.closed' : 'sx.su880.measure.line', { segs, len, tol, bridged: bridged(e) });
    } else {
      let len = 0, area = 0;
      for (const e of pk.staged) { if (e.kind === 'loop') area += PP.pathArea(e.path) * k * k; else len += PP.pathLength(e.path) * k; }
      ui.measure.textContent = t('sx.su880.measure.many.u', { n: pk.staged.length, len: mc.ftIn(len), area: mc.measureArea(area), tol });
    }
  }
  function pickTrim() {
    const pk = app.pick;
    if (!pk?.staged.length) return;
    const last = pk.staged.at(-1), np = PP.trimLast(last.path);
    if (!np) pk.staged.pop(); else { last.path = np; last.kind = 'line'; last.alts = null; }
    if (pk.staged.length) pickReport(); else ui.measure.textContent = '';
    status(t('sx.su880.trim'));
    mc.view.overlayOnly();
  }
  function pickGapStep(dir) {
    const pk = app.pick;
    mc.settings.pickGap = PP.stepGap(mc.settings.pickGap, dir);
    mc.saveSettings(); syncSettingsForm();
    const idx = pickIdx();
    if (pk?.staged.length && idx) {                                       // the same picks, joined again at the new tolerance
      pk.staged = pk.staged.map((e) => {
        const path = PP.chainFrom(idx, e.path.seed, mc.settings.pickGap);
        return e.kind === 'loop' && path.closed ? { ...e, path, alts: [path], ai: 0 } : { kind: 'line', path };
      });
      pickReport();
    }
    if (app.cursor) pickHover(app.cursor);
    status(t('sx.su880.tol.set', { gap: pickGapText(), pt: U.fixed(mc.settings.pickGap, 2) }), 7000);
    mc.view.overlayOnly();
  }
  function pickCycle() {
    const pk = app.pick;
    if (!pk) return;
    if (pk.hover.length > 1) { pk.hi = (pk.hi + 1) % pk.hover.length; status(t('sx.su880.cycle', { i: pk.hi + 1, n: pk.hover.length })); }
    else {
      const e = pk.staged.at(-1);
      if (e?.alts?.length > 1) { e.ai = (e.ai + 1) % e.alts.length; e.path = e.alts[e.ai]; pickReport(); status(t('sx.su880.cycle.loop', { i: e.ai + 1, n: e.alts.length })); }
    }
    mc.view.overlayOnly();
  }
  // Clear the staged segments (Esc, the touch bar's Cancel). Until 0.11 FX (owner 2026-11-22) both reached the cross-app picker's
  // pickClear instead (takeoffcraft.js declared `pickClear` twice and the later one won), which dropped the selection and left
  // the staged path on screen. The selection is left alone here.
  function pickClearStaged() { if (app.pick) app.pick.staged = []; ui.measure.textContent = ''; status(t('sx.su880.cleared')); mc.view.overlayOnly(); }
  /** Keys of the Path tool; true when one was taken. */
  function pickKey(e) {
    if (e.key === 'Tab') { e.preventDefault(); pickCycle(); return true; }
    if (e.key === '[' || e.key === ']') { e.preventDefault(); pickGapStep(e.key === ']' ? 1 : -1); return true; }
    if (e.key === 'Enter') { e.preventDefault(); pickCommit(); return true; }
    if ((e.key === 'Backspace' || e.key === 'Delete') && app.pick?.staged.length) { e.preventDefault(); pickTrim(); return true; }
    if (e.key === 'Escape' && app.pick?.staged.length) { pickClearStaged(); return true; }   // nothing staged: Esc goes on to the app's own (Select tool, then select none)
    return false;
  }
  /** An item of `type` for the picked marks: the active one, else the newest; none → the new-item form opens. */
  function pickItem(type) {
    const a = app.active && model.item(app.active);
    if (a && kindsOf(a).includes(type)) return a;
    const last = [...model.state.items].reverse().find((i) => i.type === type);
    if (last) return last;
    mc.openItemForm(type);
    status(t('sx.su880.item.' + type), 9000);
    return null;
  }
  function pickCommit() {
    const pk = app.pick;
    if (!pk?.staged.length || !ST.cur) return;
    const sc = model.scaleOf(ST.cur.key);
    if (!sc) { status(t('tool.err.noscale.measure'), 9000); return; }
    const lines = pk.staged.filter((e) => e.kind === 'line'), loops = pk.staged.filter((e) => e.kind === 'loop');
    const itL = lines.length ? pickItem('linear') : null, itA = loops.length ? pickItem('area') : null;
    if ((lines.length && !itL) || (loops.length && !itA)) return;          // the item form is open; Enter again once it exists
    for (const e of loops) { const why = G.outlineProblem(PP.pathPoints(e.path)); if (why) { status(why, 9000); return; } }
    let ids = [];
    try {
      if (lines.length) ids = ids.concat(model.addMarks(itL.id, lines.map((e) => {
        const pts = PP.pathPoints(e.path);
        return { sheet: ST.cur.key, pts: e.path.closed ? [...pts, pts[0]] : pts, ...mc.inArea() };
      }), t('sx.su880.undo.linear'), 'linear'));
      if (loops.length) ids = ids.concat(model.addMarks(itA.id, loops.map((e) => ({ sheet: ST.cur.key, pts: PP.pathPoints(e.path), ...mc.inArea() })), t('sx.su880.undo.area'), 'area'));
    } catch (err) { status(err.message, 9000); return; }
    pk.staged = [];
    ui.measure.textContent = '';
    app.sel = ids.at(-1) ?? app.sel;
    status(t('sx.su880.added', { n: ids.length }), 8000);
    mc.renderMarkProps();
    mc.view.overlayOnly();
  }
  /** The overlay: the path under the pointer (dashed; the others it could be, thin), what is picked (solid), bridged gaps and the tolerance. */
  function drawPick(ctx, S) {
    const pk = app.pick;
    if (!pk || app.tool !== 'path' || !ST.cur) return;
    if (pk.sheet !== ST.cur.key) { pk.sheet = ST.cur.key; pk.staged = []; pk.hover = []; }
    const trace = (pts, close) => { ctx.beginPath(); pts.forEach((q, i) => { const s = S(q); if (i) ctx.lineTo(s.x, s.y); else ctx.moveTo(s.x, s.y); }); if (close) ctx.closePath(); };
    const tolR = Math.max(3, mc.settings.pickGap * mc.view.z);
    ctx.save();
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    if (!pk.staged.length || app.shift) {
      const hotI = Math.min(pk.hi, pk.hover.length - 1);
      pk.hover.forEach((c, i) => {
        const hot = i === hotI;
        ctx.strokeStyle = ST.colors.action; ctx.globalAlpha = hot ? 0.8 : 0.3; ctx.lineWidth = hot ? 3 : 1.5; ctx.setLineDash(hot ? [8, 5] : [3, 4]);
        trace(PP.pathPoints(c), c.closed); ctx.stroke();
      });
      ctx.setLineDash([]);
      const hot = pk.hover[hotI];
      if (hot && !hot.closed) {                                       // where the path was searched on, so the tolerance can be seen
        const pts = PP.pathPoints(hot);
        ctx.globalAlpha = 0.9; ctx.lineWidth = 1; ctx.setLineDash([2, 3]);
        for (const q of [pts[0], pts.at(-1)]) { const s = S(q); ctx.beginPath(); ctx.arc(s.x, s.y, tolR, 0, Math.PI * 2); ctx.stroke(); }
      }
    }
    ctx.setLineDash([]);
    for (const e of pk.staged) {
      const pts = PP.pathPoints(e.path);
      ctx.strokeStyle = ST.colors.action; ctx.fillStyle = ST.colors.action; ctx.lineWidth = 4;
      if (e.kind === 'loop') { ctx.globalAlpha = 0.16; trace(pts, true); ctx.fill(); }
      ctx.globalAlpha = 0.85; trace(pts, e.path.closed); ctx.stroke();
      ctx.globalAlpha = 1; ctx.lineWidth = 1;
      if (pts.length <= 300) for (const q of pts) { const s = S(q); ctx.fillRect(s.x - 2.5, s.y - 2.5, 5, 5); }
      ctx.strokeStyle = mc.FLAG_COLOR; ctx.lineWidth = 2;                // the holes that were bridged: a ring as wide as the tolerance
      for (const g of e.path.gaps) { const s = S(g); ctx.beginPath(); ctx.arc(s.x, s.y, tolR, 0, Math.PI * 2); ctx.stroke(); }
    }
    if (app.cursor) {                                                  // the tolerance at the pointer
      const s = S(app.cursor);
      ctx.strokeStyle = ST.colors.layer; ctx.globalAlpha = 0.8; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.arc(s.x, s.y, tolR, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.restore();
  }

  return { pickGapText, pickHover, pickClick, pickTrim, pickKey, pickCommit, pickClearStaged, drawPick };
}
