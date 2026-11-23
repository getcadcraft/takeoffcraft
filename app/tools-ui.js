/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tools-ui.js: takeoffcraft.js's 14 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountTools(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { kindsOf } from './model.js';
import * as AM from './arcmethods.js';
import * as U from './units.js';
import * as G from './geom.js';
import { parseEntry } from './typein.js';

export function mountTools(ctx) {
  const { ST, ui, model, isCad, app, d3, wsChanged, pickGapText, pickCommit, pickTrim, pickClearStaged, status, pickClear, root } = ctx;

  const toolButtons = [...root.querySelectorAll('[data-tool]')];
  for (const b of toolButtons) b.addEventListener('click', () => { setTool(b.dataset.tool); b.closest('details')?.removeAttribute('open'); });

  function setTool(tool) {
    if (d3.on && tool !== 'select') ctx.close3d();         // drawing happens on the flat sheet
    if (tool !== 'select' && !ST.cur) { status(t('handoff.nopdf')); return false; }
    ctx.endPaste(true);
    if ((tool === 'linear' || tool === 'area' || tool === 'circle' || tool === 'room' || tool === 'path') && !model.scaleOf(ST.cur.key)) {
      status(t('tool.err.noscale'), 9000);
      return false;
    }
    if (tool === 'linear' || tool === 'area' || tool === 'count' || tool === 'circle' || tool === 'autocount' || tool === 'room') {
      if (!ensureItem(tool === 'circle' || tool === 'room' ? 'area' : tool === 'autocount' ? 'count' : tool)) return false;
    }
    if (tool === 'cadgeom') {                                // 0.7 TD.4: needs a drawing's sheet, a scale and a linear or area item
      if (!isCad(ST.cur.file) || !ST.geomMod) { status(t('cad.count.needs')); return false; }
      if (!model.scaleOf(ST.cur.key)) { status(t('tool.err.noscale'), 9000); return false; }
      if (!ctx.geomKind()) { status(t('cad.geom.item'), 9000); return false; }
    }
    if (ctx.NOTE_TOOLS.has(tool)) { app.selNote = null; ctx.renderNoteProps(); }
    if (tool === 'cutout' || tool === 'cutcircle') {
      const m = app.sel && model.mark(app.sel);
      if (!m || m.kind !== 'area') { status(t('tool.err.cutout')); return false; }
      if (model.item(m.item)?.backout) { status(t('backout.noholes'), 9000); return false; }
      if (!model.scaleOf(ST.cur.key)) { status(t('tool.err.noscale.short')); return false; }
    }
    cancelDraft();
    if (app.ac && tool !== 'autocount') ctx.discardAutoCount();
    if (tool !== 'legend') ST.countAllUi?.close();
    app.geom = tool === 'cadgeom' ? { sel: new Set(), tag: '' } : null;
    app.tool = tool;
    app.check = tool === 'check' ? app.check : null;
    for (const b of toolButtons) b.setAttribute('aria-pressed', String(b.dataset.tool === tool || (tool === 'cutcircle' && b.dataset.tool === 'cutout')));
    ui.over.dataset.tool = tool;
    app.pick = tool === 'path' ? { staged: [], hover: [], hi: 0, sheet: ST.cur.key } : null;
    if (tool === 'path') ctx.loadSnap(ST.cur).then(() => { const r = ST.cur && ctx.snaps.get(ST.cur.key); if (app.tool === 'path' && r && !r.n) status(t('sx.su880.nolines'), 9000); });
    ctx.renderAcBar();
    ctx.renderGeomBar();
    const help = tool === 'legend' ? t('help.legend') : tool === 'room' ? t('help.room', { gap: ctx.ftIn(ctx.settings.roomGap) }) : tool === 'path' ? t('help.path', { gap: pickGapText() }) : t('help.' + tool);
    status(help, 0);
    ctx.view.overlayOnly();
    wsChanged();
    return true;
  }

  /** Make sure the active item is of `type`: switch to one, or ask for a new one. */
  function ensureItem(type) {
    const a = app.active && model.item(app.active);
    if (a && kindsOf(a).includes(type)) return true;        // its main condition, or a second one (T8)
    const last = [...model.state.items].reverse().find((i) => i.type === type);
    if (last) { ctx.setActive(last.id); status(t('tool.taking', { item: last.name })); return true; }
    ctx.openItemForm(type);
    status(t('tool.make.' + type), 9000);
    return false;
  }

  function cancelDraft() { app.draft = null; app.drag = null; if (app.pick) app.pick.staged = []; app.noteStart = null; ui.measure.textContent = ''; closeTypeIn(); ctx.view.overlayOnly(); }

  /** Backspace / the touch bar's Back: the pending arc point first, then the last point (and the arc that led to it). */
  function dropLastPoint() {
    if (app.draft?.mid) { app.draft.mid = null; ctx.liveMeasure(); ctx.view.overlayOnly(); return; }
    if (app.draft?.arcGot?.length) { app.draft.arcGot.pop(); ctx.arcPrompt(); ctx.liveMeasure(); ctx.view.overlayOnly(); return; }   // FX.137: the arc's last input
    if (!app.draft?.pts.length) return;
    app.draft.pts.pop();
    app.draft.ded?.delete(app.draft.pts.length - 1);
    const last = app.draft.pts.at(-1);
    if (last?.b) delete last.b;
    if (!app.draft.pts.length) app.draft = null;
    ctx.liveMeasure(); ctx.view.overlayOnly();
  }

  // the touch bar (S.8): Finish / Back / Cancel while a run, an outline or a cut-out is under way on a touch screen
  const touchBar = root.querySelector('[data-touchbar]');
  function renderTouchBar() {
    if (!touchBar) return;
    const show = ST.coarse && ((!!app.draft?.pts.length && ['linear', 'area', 'cutout', 'circle', 'cutcircle', 'calibrate', 'check'].includes(app.tool)) || (app.tool === 'path' && !!app.pick?.staged.length));   // 0.8 SU.880: Path has no keys on a tablet
    if (touchBar.hidden === !show) return;
    touchBar.hidden = !show;
  }
  touchBar?.addEventListener('click', (e) => {
    const b = e.target.closest('[data-touch]');
    if (!b) return;
    if (app.tool === 'path') { if (b.dataset.touch === 'finish') pickCommit(); else if (b.dataset.touch === 'back') pickTrim(); else if (b.dataset.touch === 'cancel') { if (app.pick?.staged.length) pickClearStaged(); else pickClear(); } }
    else if (b.dataset.touch === 'finish') ctx.finishDraft();
    else if (b.dataset.touch === 'back') { dropLastPoint(); }
    else if (b.dataset.touch === 'cancel') cancelDraft();
    renderTouchBar();
  });

  // ---- typed lengths and coordinates (T3; typein.js): a digit, @ or # during a run opens the box in the status bar ----
  const TYPE_TOOLS = new Set(['linear', 'area', 'cutout', 'circle', 'cutcircle']);
  const typeIn = root.querySelector('[data-typein]'), typeBox = root.querySelector('[data-typein-box]');
  const canType = () => !!(ST.cur && TYPE_TOOLS.has(app.tool) && app.draft?.pts.length && !app.paste);
  function openTypeIn(ch = '') {
    if (!typeIn) return;
    typeIn.hidden = false;
    typeBox.value = ch;
    typeBox.classList.remove('is-invalid');
    typeBox.focus();
    const ar = ctx.arcRole();
    status(t(ar && AM.SCALAR.has(ar) ? 'arc.type.' + ar : app.tool === 'circle' || app.tool === 'cutcircle' ? 'typein.hint.circle' : 'typein.hint'), 0);
  }
  function closeTypeIn() {
    if (!typeIn || typeIn.hidden) return;
    typeIn.hidden = true;
    typeBox.value = '';
    if (typeIn.contains(document.activeElement)) typeBox.blur();
  }
  function applyTyped() {
    const d = app.draft, sc = ST.cur && model.scaleOf(ST.cur.key);
    if (!d?.pts.length) { closeTypeIn(); return; }
    const text = typeBox.value;
    const ar = ctx.arcRole();
    if (ar && AM.SCALAR.has(ar)) {                       // FX.137: an angle, length, radius or direction for the arc under way
      const v = AM.typedValue(ar, text, { ftPerUnit: sc?.ftPerUnit, linear: ctx.view.matrix.slice(0, 4) });
      if (!v.ok) { typeBox.classList.add('is-invalid'); status(t(v.error), 12000); return; }
      typeBox.value = '';
      typeBox.classList.remove('is-invalid');
      ctx.arcStep(v.value);
      if (!app.draft) closeTypeIn(); else { ctx.liveMeasure(); ctx.view.overlayOnly(); }
      return;
    }
    let res;
    if (app.tool === 'circle' || app.tool === 'cutcircle') {
      const r = U.parseLength(text);
      const c = d.pts[0], to = app.cursor && G.dist(app.cursor, c) > 0 ? app.cursor : { x: c.x + 1, y: c.y };
      const n = G.dist(to, c);
      res = !r.ok ? { ok: false, error: 'typein.err.read' } : !sc ? { ok: false, error: 'typein.err.noscale' }
        : { ok: true, point: { x: c.x + (to.x - c.x) / n * r.ft / sc.ftPerUnit, y: c.y + (to.y - c.y) / n * r.ft / sc.ftPerUnit } };
    } else {
      res = parseEntry(text, { first: d.pts[0], last: d.pts.at(-1), cursor: app.cursor, ftPerUnit: sc?.ftPerUnit, linear: ctx.view.matrix.slice(0, 4) });
    }
    if (!res.ok) { typeBox.classList.add('is-invalid'); status(t(res.error), 12000); return; }
    typeBox.value = '';
    typeBox.classList.remove('is-invalid');
    ctx.click(res.point, ctx.view.toScreen(res.point), true);
    if (!app.draft) closeTypeIn(); else { ctx.liveMeasure(); ctx.view.overlayOnly(); }
  }
  typeBox?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (typeBox.value.trim()) applyTyped();
      else { closeTypeIn(); ctx.finishDraft(); }
    } else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeTypeIn(); status(''); }
  });

  return { setTool, cancelDraft, dropLastPoint, touchBar, renderTouchBar, canType, openTypeIn, closeTypeIn };
}
