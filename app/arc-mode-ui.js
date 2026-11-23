/* SPDX-License-Identifier: Apache-2.0 */
/**
 * arc-mode-ui.js: takeoffcraft.js's 12 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountArcMode(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import * as AM from './arcmethods.js';
import { el } from './ui-util.js';
import * as G from './geom.js';
import { FORMAT } from './model.js';

export function mountArcMode(ctx) {
  const { ST, ui, model, files, views, thumbs, app, view, status, rebuildSheets, confirmDiscard, thumbQueue, setTool, closePx, snaps, noteDeduct, finishDraft, liveMeasure, cancelAutoCount, discardAutoCount, endPaste, closeCompare, refresh, root } = ctx;

  const deductBtn = root.querySelector('[data-act="deduct"]');
  /** Deduct mode (T2): the segments a linear run gains next are drawn but not counted. */
  function toggleDeduct(on = !app.deduct) {
    app.deduct = on;
    deductBtn?.setAttribute('aria-pressed', String(on));
    status(on ? t('deduct.on') : t('deduct.off'));
    liveMeasure(); view.overlayOnly();
  }
  const arcBtn = root.querySelector('[data-act="arc"]');
  function toggleArc(on = !app.arc) {
    app.arc = on;
    arcBtn.setAttribute('aria-pressed', String(on));
    if (!on && app.draft) { app.draft.mid = null; app.draft.arcGot = []; }
    if (arcWrap) arcWrap.hidden = !on;
    status(on ? (app.arcMethod === '3P' ? t('arc.on') : t('arc.on.method', { method: t('arc.m.' + app.arcMethod.toLowerCase()) })) : t('arc.off'));
    liveMeasure(); view.overlayOnly();
  }

  // ---- the ten arc methods (0.9 FX.137; arcmethods.js over lib/arcs): the chooser sits in the sheet bar while Arc is on ----
  const arcWrap = root.querySelector('[data-arc-wrap]'), arcSel = root.querySelector('[data-arc-method]');
  if (arcSel) {
    for (const id of AM.METHOD_ORDER) arcSel.append(el('option', { value: id }, t('arc.m.' + id.toLowerCase())));
    arcSel.value = app.arcMethod;
    arcSel.addEventListener('change', () => {
      app.arcMethod = arcSel.value;
      if (app.draft) { app.draft.mid = null; app.draft.arcGot = []; }
      status(app.arcMethod === '3P' ? t('arc.on') : t('arc.on.method', { method: t('arc.m.' + app.arcMethod.toLowerCase()) }));
      arcPrompt(); liveMeasure(); view.overlayOnly();
    });
  }
  /** +1 / -1: whether counter-clockwise in sheet units looks counter-clockwise (a mirrored user space flips it). */
  function arcSign() { return AM.handedness(view.matrix.slice(0, 4)); }
  /** The chosen method's state while a run, outline or cut-out has a point to start from: { id, got } or null (3-Point keeps its own two clicks). */
  function arcPending() {
    const d = app.draft;
    if (!app.arc || app.arcMethod === '3P' || !d?.pts.length || !(app.tool === 'linear' || app.tool === 'area' || app.tool === 'cutout')) return null;
    return { id: app.arcMethod, got: (d.arcGot ??= []) };
  }
  /** The step the arc waits for ('center' | 'end' | 'angle' | 'length' | 'direction' | 'radius') or null. */
  function arcRole() { const ap = arcPending(); return ap ? AM.nextRole(ap.id, ap.got) : null; }
  function arcPrompt() { const r = arcRole(); if (r) status(t('arc.ask.' + r), 0); }
  /** One input given (a point, or a number from a click or the typing box): the next prompt, or the finished arc added to the run. */
  function arcStep(value) {
    const ap = arcPending();
    if (!ap || !app.draft) return;
    const d = app.draft, pts = d.pts, tool = app.tool, sg = arcSign(), last = pts.at(-1);
    ap.got.push(value);
    if (AM.nextRole(ap.id, ap.got) !== null) { arcPrompt(); liveMeasure(); view.overlayOnly(); return; }
    const r = AM.finish(ap.id, last, ap.got, sg);
    if (!r.ok) { ap.got.pop(); status(t('arc.err.' + r.error), 9000); liveMeasure(); view.overlayOnly(); return; }
    d.arcGot = [];
    let end = r.end, b = r.b, closing = false;
    if ((tool === 'area' || tool === 'cutout') && pts.length >= 2) {
      const s0 = view.toScreen(pts[0]), se = view.toScreen(end);
      if (Math.hypot(s0.x - se.x, s0.y - se.y) <= closePx()) { closing = true; end = pts[0]; b = G.bulgeThrough(last, r.mid, end) || b; }
    }
    pts[pts.length - 1] = { x: last.x, y: last.y, b };
    if (closing) { finishDraft(); return; }
    pts.push({ x: end.x, y: end.y });
    noteDeduct(d);
    status('');
    liveMeasure(); view.overlayOnly();
  }

  /** Back to the empty state (asks first when there is unsaved work). Not a page reload. */
  async function newTakeoff() {
    if (!(await confirmDiscard('new'))) return;
    cancelAutoCount(); discardAutoCount(); endPaste(true); closeCompare();
    for (const f of files) { try { f.doc.destroy(); } catch { /* already gone */ } }
    files.length = 0; ST.sheets = []; ST.cur = null;
    views.clear(); thumbs.clear(); thumbQueue.length = 0; snaps.clear();
    view.clear();
    model.load({ format: FORMAT, version: 1, files: [], items: [], marks: [] });
    ST.projectTarget = null;
    Object.assign(app, { active: null, hl: null, sel: null, draft: null, cursor: null, check: null, drag: null, box: null, curArea: null });
    ui.sheetQ.value = '';
    ui.hint.hidden = false;
    ui.zoom.textContent = '';
    setTool('select');
    if (app.arc) toggleArc(false);
    if (app.deduct) toggleDeduct(false);
    rebuildSheets();
    refresh();
    status(t('new.done'));
  }

  return { toggleDeduct, toggleArc, arcSign, arcPending, arcRole, arcPrompt, arcStep, newTakeoff };
}
