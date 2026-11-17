/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clipboard-ui.js: takeoffcraft.js's 24 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountClipboard(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { readClip, copyMarks, copyItems, pasteClip, scaleProblem, sizeProblem } from './clipboard.js';
import { t } from './i18n.js';
import * as G from './geom.js';
import * as CMK from './countmarker.js';

export function mountClipboard(mc) {
  const { ui, model, app, selIds, setSelection, d3, view, status, settings, scaleText, setTool, setActive, renderMarkProps, discardAutoCount, close3d, refresh } = mc;

  const CLIP_KEY = 'takeoffcraft.clipboard';
  const tabId = Math.random().toString(36).slice(2, 10);
  let clipMem = null;          // { wire, clip }: this tab's last copy
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || '');
  const modKey = isMac ? 'Cmd' : 'Ctrl';

  function sheetCtx(s = mc.cur) { return s ? { view: s.info.view, userUnit: s.info.userUnit, source: tabId } : { source: tabId }; }
  function storeClip(wire) {
    const r = readClip(JSON.parse(JSON.stringify(wire)));
    if (!r.ok) { status(r.error); return false; }
    clipMem = { wire, clip: r.clip };
    try { localStorage.setItem(CLIP_KEY, JSON.stringify(wire)); } catch { /* too big or a private window: this tab still has it */ }
    return true;
  }
  /** The newest clip: this tab's, or one another tab copied since (checked like a file). */
  function currentClip() {
    let shared = null;
    try {
      const raw = localStorage.getItem(CLIP_KEY);
      if (raw) { const r = readClip(JSON.parse(raw)); if (r.ok) shared = r.clip; }
    } catch { /* unreadable: ignore it */ }
    if (shared && (!clipMem || shared.copiedAt > clipMem.clip.copiedAt)) return shared;
    return clipMem?.clip || shared;
  }
  const itemList = (names) => names.map((n) => '"' + n + '"').join(', ');   // i18n-ignore: quotes around names

  function copySelection(quiet = false) {
    endPaste();
    const ids = selIds();
    if (!ids.length) { status(t('copy.none', { mod: modKey })); return false; }
    const wire = copyMarks(model.state, ids, sheetCtx(mc.sheets.find((x) => x.key === model.mark(ids[0]).sheet) || mc.cur));
    if (!wire || !storeClip(wire)) return false;
    if (!quiet) status(t('copy.done', { n: wire.marks.length, items: itemList(wire.items.map((i) => i.name)), mod: modKey }), 9000);
    return true;
  }
  function cutSelection() {
    const ids = selIds();
    if (!copySelection(true)) return;
    const set = new Set(ids);
    model.change(t('undo.cut', { n: ids.length }), (s) => { s.marks = s.marks.filter((m) => !set.has(m.id)); });
    app.sel = null;
    status(t('cut.done', { n: ids.length, mod: modKey }), 9000);
  }
  function copyItem(id) {
    const wire = copyItems(model.state, [id], { source: tabId });
    if (!wire || !storeClip(wire)) return;
    status(t('copy.item', { item: wire.items[0].name, mod: modKey }), 9000);
  }
  function duplicateItem(id) {
    const wire = copyItems(model.state, [id], { source: tabId });
    const r = wire && readClip(wire);
    if (!r?.ok) return;
    const out = pasteClip(model, r.clip, { label: t('undo.item.dup') });
    if (out?.items?.length) { setActive(out.items[0]); status(t('item.dup.done', { item: model.item(out.items[0]).name })); }
  }
  /** Can these marks go on the open sheet? Says why not. */
  function pasteRefused(clip, inPlace) {
    if (!clip.marks.length) return null;
    if (!mc.cur) return t('clip.err.nosheet');
    const sc = model.scaleOf(mc.cur.key);
    const why = scaleProblem(clip, sc ? { ftPerUnit: sc.ftPerUnit, label: scaleText(sc, mc.cur.info.userUnit, true) } : null);
    if (why) return why;
    if (inPlace) return sizeProblem(clip, { view: mc.cur.info.view, userUnit: mc.cur.info.userUnit });
    return null;
  }
  function pasteItemsOnly(clip) {
    const out = pasteClip(model, clip, { label: t('undo.item.paste') });
    if (!out?.items?.length) return;
    setActive(out.items[0]);
    status(t('paste.items', { n: out.items.length, items: itemList(out.items.map((id) => model.item(id).name)) }));
  }
  function startPaste(inPlace) {
    if (d3.on) close3d();            // a paste is put down on the flat sheet
    endPaste();
    const clip = currentClip();
    if (!clip) { status(t('paste.empty', { mod: modKey })); return; }
    if (!clip.marks.length) { pasteItemsOnly(clip); return; }
    const why = pasteRefused(clip, inPlace);
    if (why) { status(why, 12000); return; }
    if (inPlace) { finishPaste(clip, 0, 0, 'inplace'); return; }
    beginPlacing(clip, 'paste');
  }
  function duplicateSelection() {
    endPaste();
    const ids = selIds();
    if (!ids.length) { status(t('dup.none')); return; }
    const wire = copyMarks(model.state, ids, sheetCtx());
    const r = wire && readClip(wire);
    if (!r?.ok) return;
    if (model.mark(ids[0]).sheet !== mc.cur?.key) { status(t('dup.sheet')); return; }
    beginPlacing(r.clip, 'duplicate');
  }
  /** kind: paste | duplicate (and finishPaste's inplace) — the undo label and the status words follow it. */
  function beginPlacing(clip, kind) {
    if (app.tool !== 'select') setTool('select');
    if (app.ac) discardAutoCount();
    app.paste = { clip, kind };
    ui.over.dataset.tool = 'paste';
    status(t('paste.pointer', { n: clip.marks.length }), 0);
    view.overlayOnly();
  }
  function placePaste(p) {
    const ps = app.paste;
    if (!ps) return;
    const why = pasteRefused(ps.clip, false);      // the sheet may have changed since
    if (why) { endPaste(); status(why, 12000); return; }
    endPaste(true);
    finishPaste(ps.clip, p.x - ps.clip.anchor.x, p.y - ps.clip.anchor.y, ps.kind);
  }
  function finishPaste(clip, dx, dy, kind) {
    const label = t('undo.' + kind);
    let out;
    try { out = pasteClip(model, clip, { sheet: mc.cur.key, dx, dy, label, area: app.curArea }); } catch (err) { status(t('paste.failed', { reason: err.message }), 9000); return; }
    if (!out) { status(t('paste.nothing')); return; }
    setSelection(out.marks);
    const added = out.items.length ? ' ' + t('paste.items', { n: out.items.length, items: itemList(out.items.map((id) => model.item(id).name)) }) : '';
    status(t('paste.done.' + kind, { n: out.marks.length }) + added + ' ' + t('undo.hint', { mod: modKey }), 9000);
    refresh();
  }
  /** Stop carrying a paste (Esc, another command). Nothing is added. */
  function endPaste(quiet = false) {
    if (!app.paste) return;
    app.paste = null;
    ui.over.dataset.tool = app.tool;
    if (!quiet) status(t('paste.canceled'));
    view.overlayOnly();
  }
  function selectAll() {
    endPaste();
    if (!mc.cur) { status(t('handoff.nopdf')); return; }
    const ids = model.marksOn(mc.cur.key).map((m) => m.id);
    if (app.tool !== 'select') setTool('select');
    setSelection(ids);
    status(ids.length ? t('sel.all', { n: ids.length }) : t('sel.all.none'));
    renderMarkProps(); view.overlayOnly();
  }
  function selectNone() {
    endPaste(true);
    app.sel = null; app.check = null;
    renderMarkProps(); view.overlayOnly();
  }
  /** The marks on the pointer, drawn dashed where a click would put them. */
  function drawPaste(ctx, trace) {
    const ps = app.paste;
    if (!ps || !app.cursor) return;
    const dx = app.cursor.x - ps.clip.anchor.x, dy = app.cursor.y - ps.clip.anchor.y;
    const mv = (r) => r.map((p) => ({ ...p, x: p.x + dx, y: p.y + dy }));
    const color = new Map(ps.clip.items.map((i) => [i.id, i.color]));
    ctx.save();
    ctx.globalAlpha = 0.75; ctx.setLineDash([6, 4]); ctx.lineWidth = 2;
    for (const m of ps.clip.marks) {
      ctx.strokeStyle = ctx.fillStyle = color.get(m.item) || mc.colors.action;
      if (m.kind === 'count') { const s = G.apply(view.matrix, mv(m.pts)[0]); ctx.beginPath(); ctx.arc(s.x, s.y, CMK.markerPx(settings.marker), 0, Math.PI * 2); ctx.stroke(); continue; }
      ctx.beginPath();
      for (const ring of [m.pts, ...(m.kind === 'area' ? m.holes : [])]) trace(mv(ring), m.kind === 'area');
      ctx.stroke();
    }
    ctx.restore();
  }

  return { isMac, modKey, currentClip, itemList, copySelection, cutSelection, copyItem, duplicateItem, startPaste, duplicateSelection, placePaste, endPaste, selectAll, selectNone, drawPaste };
}
