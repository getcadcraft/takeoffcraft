/* SPDX-License-Identifier: Apache-2.0 */
/**
 * takeoffcraft.js — TakeoffCraft in the browser: quantity takeoff and estimating on PDF plan sets.
 * Wires the page (ui.inc) to the plan set (pdfset.js + pdf.js), the sheet view (viewer.js), the
 * takeoff project (model.js) and the exports (export.js, xlsx.js, pdfmarks.js + pdf-lib).
 *
 * Mouse: click = pick a point (or a mark, with Select); drag (any button), the wheel button or
 * Space + drag pans; the wheel zooms at the cursor; double-click, Enter or a right click finishes
 * a run or an outline; Shift snaps to 45°. Keys: V L A X C select/linear/area/cut-out/count,
 * K calibrate, D check, F/W fit page/width, Backspace removes the last point, Esc cancels,
 * Delete deletes the selected marks, Ctrl+Z/Y undo/redo, Ctrl+S save, Ctrl+O open, PageUp/Down sheets.
 * Edit (clipboard.js): Ctrl+C copy, Ctrl+X cut, Ctrl+V paste (the copy follows the pointer, a click puts it
 * down), Ctrl+Shift+V paste in place (same PDF coordinates; same-size sheet, same scale), Ctrl+D duplicate,
 * Ctrl+A select every mark on the sheet, Esc select none; Shift+click adds a mark to the selection or takes
 * it out. The clipboard is kept in memory and in localStorage "takeoffcraft.clipboard" (another tab can paste).
 * Settings › TakeoffCraft (settings.inc; localStorage "takeoffcraft.settings"): inch fractions on screen,
 * waste for new items, where the auto-count slider starts, snap to 45° without Shift.
 *
 * Files never leave the computer: PDFs and projects are read here; saving is a download in the browser and a write in
 * place in the desktop app (host.js).
 * PDF and project text reaches the page only through el() (text nodes). `window.takeoffcraft`
 * exposes a small API for tests and the console.
 */

import { el, icon, bytes, frame, safeName, ask } from './ui-util.js';
import { PageView, renderThumb } from './viewer.js';
import { Takeoff, FORMAT, TYPES, TYPE_LABELS, VARS, VAR_HELP, sheetKey, quantities, estimate, itemVars, itemQty, measureMark, sheetBreakdown, areaEstimates, baseEstimate, alternates, backouts, segSlope, kindsOf, unitOf, condQty } from './model.js';
import * as U from './units.js';
import * as G from './geom.js';
import { parse, evaluate } from './formula.js';
import { openPdf, sheetTitle, matchFiles } from './pdfset.js';
import { estimateCsv, estimateXlsx } from './export.js';
import { pdfWithMarks, cloudPath, NOTE_COLORS } from './pdfmarks.js';
import { toInk, crop, trim, templateProblem, suppress, workScale, ANY_ANGLES } from './match.js';
import { copyMarks, copyItems, readClip, scaleProblem, sizeProblem, pasteClip, measured } from './clipboard.js';
import { Autosave } from './app-autosave.js';
import { handoffParam, takeHandoff, sendHandoff } from './handoff.js';
import { getHost } from './host.js';
import { pageLinework, SnapIndex, MAX_SEGS } from './snap.js';
import { parseEntry } from './typein.js';
import { IDENTITY, fitTwoPoints, scaleOf, pixelMap, warp, changeMask, markChange, changed, movePts } from './overlay.js';
import { readLibraryCsv, libraryCsv, mergeEntries, entryFromItem, itemFromEntry, readStored, repricePatches } from './library.js';
import { bidSummary, proposalPdf } from './bid.js';
import { sheetScale, pageText } from './scaletext.js';
import { roomAt } from './roomfill.js';
import { embedTakeoff, readEmbedded } from './embed.js';
import { t } from './i18n.js';
import { installAgents } from './agents.js';

const TYPE_ICONS = { linear: 'bezier2', area: 'pentagon', count: 'plus-circle' };
const HIT = 7;          // screen px for picking marks and handles
const CLOSE = 9;        // screen px: clicking this near the first point closes an outline
const FLAG_COLOR = '#FF7F0E';   // marks to check after a revision (T13)
const SNAP = 10;        // screen px: how near a line of the drawing a point snaps to it (T1)
const SNAP_TOOLS = new Set(['linear', 'area', 'cutout', 'circle', 'cutcircle', 'calibrate', 'check']);

const root = document.querySelector('[data-takeoffcraft]');
if (root) init(root);

function init(root) {
  const $ = (s) => root.querySelector(s);
  const ui = {
    base: $('[data-base]'), over: $('[data-over]'), stage: $('[data-stage]'), hint: $('[data-hint]'), drop: $('[data-drop]'),
    busy: $('[data-busy]'), busyText: $('[data-busy-text]'), sheetbar: $('[data-sheetbar]'), sheetName: $('[data-sheet-name]'), sheetScale: $('[data-sheet-scale]'),
    filePdf: $('[data-file-pdf]'), fileProject: $('[data-file-project]'), preset: $('[data-scale-preset]'),
    sheets: $('[data-sheets]'), sheetsEmpty: $('[data-sheets-empty]'), sheetQ: $('[data-sheet-q]'), sheetCount: $('[data-sheet-count]'), missing: $('[data-missing]'),
    items: $('[data-items]'), itemsEmpty: $('[data-items-empty]'), itemNew: $('[data-item-new]'), library: $('[data-library]'), itemForm: $('[data-item-form]'),
    itemSec: $('[data-item-sec]'), itemH: $('[data-item-h]'), itemProps: $('[data-item-props]'), markSec: $('[data-mark-sec]'), markProps: $('[data-mark-props]'), groupsSec: $('[data-groups-sec]'), groups: $('[data-groups]'), noteSec: $('[data-note-sec]'), noteProps: $('[data-note-props]'), notesSec: $('[data-notes-sec]'), notes: $('[data-notes]'), notesH: $('[data-notes-h]'), notesOpen: $('[data-notes-open]'),
    qty: $('[data-qty]'), qtyTable: $('[data-qty-table]'), qtyWarn: $('[data-qty-warn]'), jobTotal: $('[data-job-total]'), qtyToggle: $('[data-qty-toggle]'),
    measure: $('[data-measure]'), status: $('[data-status]'), zoom: $('[data-zoom]'),
  };
  const urls = { cmaps: root.dataset.pdfCmaps, fonts: root.dataset.pdfFonts, wasm: root.dataset.pdfWasm, icc: root.dataset.pdfIcc };

  const model = new Takeoff();
  const files = [];          // open PDFs: { hash, name, size, doc, pages, bytes }
  let sheets = [];           // [{ key, file, info, title }]
  let cur = null;            // the sheet on screen
  const views = new Map();   // sheet key → { z, ox, oy }
  const thumbs = new Map();  // sheet key → canvas
  const app = { cmp: null, curArea: null, deduct: false, tool: 'select', active: null, hl: null, draft: null, cursor: null, shift: false, check: null, qtyMode: 'item', drag: null, space: false, arc: false, box: null, ac: null, paste: null };
  // the selection: app.sel is the main selected mark (its corners can be dragged, its panel shows); selMore holds the
  // others (Select all, Shift+click). Setting app.sel starts a new selection.
  let selMain = null;
  const selMore = new Set();
  Object.defineProperty(app, 'sel', { enumerable: true, get: () => selMain, set: (v) => { selMain = v || null; selMore.clear(); } });
  const selIds = () => [selMain, ...selMore].filter((id) => id && model.mark(id));
  const isSel = (id) => id === selMain || selMore.has(id);
  function setSelection(ids) { app.sel = ids[0] || null; for (const id of ids.slice(1)) selMore.add(id); }
  let pdfjs = null;
  let est = baseEstimate(model.state), qmap = quantities(model.state);
  // the 3D check view (scene3d.js + view3d.js, loaded on first use): on, the module, the view, the sheet it shows, sheet textures
  const d3 = { on: false, mod: null, view: null, sheet: null, scene: null, grounds: new Map(), ground: null, stack: false };

  const view = new PageView(ui.base, ui.over, {
    onOverlay: drawOverlay,
    onView: (v) => { if (cur) views.set(cur.key, v); ui.zoom.textContent = cur ? Math.round(v.z / (96 / 72) * 100) + '%' : ''; },
  });

  // ---- theme colours for the overlay (read from the tokens) ----
  let colors = {};
  const readColors = () => {
    const cs = getComputedStyle(root);
    colors = { action: cs.getPropertyValue('--action').trim() || '#1E48C8', ink: cs.getPropertyValue('--ink').trim() || '#17202B', sheet: cs.getPropertyValue('--sheet-2').trim() || '#fff', layer: cs.getPropertyValue('--layer').trim() || '#8A6200' };
    view.invalidate();
  };
  new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', readColors);   // i18n-ignore: a media query

  // ---- status ----
  let statusTimer = 0;
  function status(s, ms = 6000) { ui.status.textContent = s; clearTimeout(statusTimer); if (ms) statusTimer = setTimeout(() => { ui.status.textContent = ''; }, ms); }
  function busy(text) { ui.busy.hidden = !text; if (text) ui.busyText.textContent = text; }

  // ---- settings (Settings › TakeoffCraft; per viewer conveniences, localStorage only) ----
  const SET_KEY = 'takeoffcraft.settings';
  const SET_DEFAULTS = { denom: 16, waste: 0, threshold: 0.75, snap45: false, corner: 'cube', snap: true, roomGap: 4 };
  const ROOM_GAPS = [3, 3.5, 4, 5, 6, 8];
  const WASTE_CHOICES = [0, 200, 300, 500, 750, 1000, 1500, 2000];
  const settings = { ...SET_DEFAULTS };
  function loadSettings() {
    Object.assign(settings, SET_DEFAULTS);
    try {
      const v = JSON.parse(localStorage.getItem(SET_KEY) || '{}');
      if ([16, 8, 4].includes(v.denom)) settings.denom = v.denom;
      if (WASTE_CHOICES.includes(v.waste)) settings.waste = v.waste;
      if (typeof v.threshold === 'number' && v.threshold >= 0.5 && v.threshold <= 0.95) settings.threshold = Math.round(v.threshold * 100) / 100;
      if (typeof v.snap45 === 'boolean') settings.snap45 = v.snap45;
      if (typeof v.snap === 'boolean') settings.snap = v.snap;
      if (['cube', 'axes', 'none'].includes(v.corner)) settings.corner = v.corner;
      if (ROOM_GAPS.includes(v.roomGap)) settings.roomGap = v.roomGap;
    } catch { /* private window or damaged: the defaults */ }
  }
  loadSettings();
  const saveSettings = () => { try { localStorage.setItem(SET_KEY, JSON.stringify(settings)); } catch { /* fine: this tab keeps them */ } };
  /** Feet-inches for the screen, to the fraction picked in Settings (quantities are never rounded). */
  const ftIn = (ft) => U.formatFtIn(ft, settings.denom);
  const settingsDlg = document.querySelector('[data-app-settings]');
  function syncSettingsForm() {
    if (!settingsDlg) return;
    const q = (s) => settingsDlg.querySelector(s);
    settingsDlg.querySelectorAll('input[name="tcDenom"]').forEach((r) => { r.checked = Number(r.value) === settings.denom; });
    const w = q('select[name="tcWaste"]'); if (w) w.value = String(settings.waste);
    const rg = q('select[name="tcRoomGap"]'); if (rg) rg.value = String(settings.roomGap);
    const th = q('input[name="tcThreshold"]'); if (th) th.value = String(settings.threshold);
    const out = q('[data-tc-th-out]'); if (out) out.textContent = Math.round(settings.threshold * 100) + '%';
    const sn = q('input[name="tcSnap45"]'); if (sn) sn.checked = settings.snap45;
    const so = q('input[name="tcSnap"]'); if (so) so.checked = settings.snap;
    settingsDlg.querySelectorAll('input[name="tcCorner"]').forEach((r) => { r.checked = r.value === settings.corner; });
  }
  function applySettings() {
    const hint = root.querySelector('[data-snap-hint]');
    if (hint) hint.textContent = settings.snap45 ? t('snap45.on') : t('snap45.hint');
    syncSettingsForm();
    root.querySelector('[data-snap-toggle]')?.setAttribute('aria-pressed', String(settings.snap));
    if (settings.snap && cur) loadSnap(cur);
    d3.view?.setCorner(settings.corner);
    if (typeof refresh === 'function' && booted) refresh();
  }
  let booted = false;
  if (settingsDlg) {
    settingsDlg.addEventListener('change', (e) => {
      const t = e.target;
      if (t.name === 'tcDenom') settings.denom = Number(t.value);
      else if (t.name === 'tcWaste') settings.waste = WASTE_CHOICES.includes(Number(t.value)) ? Number(t.value) : 0;
      else if (t.name === 'tcRoomGap') settings.roomGap = ROOM_GAPS.includes(Number(t.value)) ? Number(t.value) : 4;
      else if (t.name === 'tcThreshold') settings.threshold = Number(t.value);
      else if (t.name === 'tcSnap45') settings.snap45 = t.checked;
      else if (t.name === 'tcSnap') settings.snap = t.checked;
      else if (t.name === 'tcCorner') settings.corner = ['cube', 'axes', 'none'].includes(t.value) ? t.value : 'cube';
      else return;
      saveSettings();
      applySettings();
    });
    settingsDlg.addEventListener('input', (e) => {
      if (e.target.name !== 'tcThreshold') return;
      const out = settingsDlg.querySelector('[data-tc-th-out]');
      if (out) out.textContent = Math.round(Number(e.target.value) * 100) + '%';
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { Object.assign(settings, SET_DEFAULTS); try { localStorage.removeItem(SET_KEY); } catch { /* fine */ } applySettings(); });
    // fill the fields in each time the dialog opens (another tab may have changed them)
    new MutationObserver(() => { if (settingsDlg.open) { loadSettings(); applySettings(); } }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
  }

  // ---- pdf.js ----
  const ready = (async () => {
    try {
      pdfjs = await import('pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = root.dataset.pdfWorker;
    } catch (err) {
      console.error(err);
      status(t('pdf.err.reader'), 0);
    }
  })();

  // =========================================================================
  // Files

  async function openFiles(list) {
    await ready;
    if (!pdfjs) return;
    const all = [...list];
    const pdfs = all.filter((f) => /\.pdf$/i.test(f.name) || f.type === 'application/pdf');
    const projects = all.filter((f) => /\.json$/i.test(f.name));
    const other = all.filter((f) => !pdfs.includes(f) && !projects.includes(f));
    if (other.length) status(t('open.skipped', { files: other.map((f) => f.name).join(', ') }));
    let first = null, embedded = null;
    for (const f of pdfs) {
      busy(t('open.busy', { file: f.name }));
      await frame();
      try {
        const data = new Uint8Array(await f.arrayBuffer());
        const set = await openPdf(pdfjs, data, f.name, urls);
        // T10: a PDF saved with its takeoff inside stands for the PDF it was made from (its marks are keyed by that one)
        const emb = await readEmbedded(set.doc);
        if (emb) { set.hash = emb.standsFor; embedded ??= { ...emb, file: f.name }; }
        if (files.some((x) => x.hash === set.hash)) { status(t('open.already', { file: f.name })); set.doc.destroy(); continue; }
        files.push({ ...set, bytes: data });
        model.addFile({ hash: set.hash, name: set.name, size: set.size, pages: set.pages.length });
        // 'Takeoff' is the default name a new takeoff carries in its file (not a UI string)
        if (model.state.name === 'Takeoff' && !model.state.items.length) model.state.name = f.name.replace(/\.pdf$/i, '');   // i18n-ignore
        first ??= sheetKey(set.hash, 0);
      } catch (err) {
        console.error(err);
        status(err.message, 12000);
      }
    }
    busy(null);
    if (pdfs.length) {
      rebuildSheets();
      if (first && (!cur || !projects.length)) await showSheet(first);
      if (files.length) ui.hint.hidden = true;
    }
    if (projects.length) await openProject(projects[0]);
    else if (embedded) await openEmbedded(embedded);
    refresh();
  }
  /** A takeoff found inside a PDF (T10): offer to open it. */
  async function openEmbedded(emb) {
    const n = { items: t('n.items', { n: Array.isArray(emb.takeoff.items) ? emb.takeoff.items.length : 0 }), marks: t('n.marks', { n: Array.isArray(emb.takeoff.marks) ? emb.takeoff.marks.length : 0 }) };
    const choice = await ask(root, {
      title: t('embed.found.title'), text: t('embed.found.text', { file: emb.file, ...n }),
      buttons: [['cancel', t('embed.found.pdf'), 'btn-line'], ['ok', t('embed.found.open'), 'btn-plot']],
    });
    if (choice !== 'ok' || !(await confirmDiscard('open', { file: emb.file }))) return;
    const r = await loadProject(emb.takeoff);
    if (!r.ok) { status(r.error, 10000); return; }
    status([t('embed.opened', { file: emb.file, ...n }), ...r.warnings].join(' '), 12000);
  }

  function rebuildSheets() {
    const multi = files.length > 1;
    sheets = files.flatMap((f) => f.pages.map((p) => ({ key: sheetKey(f.hash, p.index), file: f, info: p, title: sheetTitle(f, p, multi) })));
    renderSheets();
    renderMissing();
  }

  /** A sheet's name for exports, even when its PDF isn't open. */
  function sheetLabel(key) {
    const s = sheets.find((x) => x.key === key);
    if (s) return s.title;
    const [hash, idx] = key.split(':');
    const f = model.state.files.find((x) => x.hash === hash);
    return t('sheet.page', { file: f ? f.name.replace(/\.pdf$/i, '') : t('sheet.unknown'), n: Number(idx) + 1 });
  }

  async function showSheet(key) {
    const s = sheets.find((x) => x.key === key);
    if (!s) return;
    if (cur) views.set(cur.key, view.view);
    cancelDraft();
    app.check = null;
    if (app.cmp && app.cmp.sheet !== key) closeCompare();
    cur = s;
    const page = await s.file.doc.getPage(s.info.index + 1);
    if (cur !== s) return;
    view.setPage(page, s.info, views.get(key) || null);
    if (settings.snap) loadSnap(s);
    if (d3.on) update3d();
    if (app.sel && model.mark(app.sel)?.sheet !== key) app.sel = null;
    renderSheetBar();
    renderSheets();
    renderMarkProps();
    ui.sheets.querySelector('[aria-current="true"]')?.scrollIntoView({ block: 'nearest' });
  }

  function moveSheet(dir) {
    const list = visibleSheets();
    if (!list.length) return;
    const i = Math.max(0, list.findIndex((s) => s.key === cur?.key));
    const next = list[Math.min(list.length - 1, Math.max(0, i + dir))];
    if (next && next.key !== cur?.key) showSheet(next.key);
  }

  // Files through the shell's host adapter (host.js; 0.4 W.2 / 1.4, desktop W.4): the browser's picker or the desktop's
  // dialogs, drops, the recent list on the start screen, files handed over at launch or double-clicked while running.
  // Saving the takeoff writes it in place on the desktop (the .takeoff.json it was opened from) and downloads in the browser.
  const host = getHost({ app: 'takeoffcraft' });
  const PDF_TYPES = [{ description: 'PDF', extensions: ['.pdf'] }];                       // i18n-ignore: a file type the OS shows
  const PROJECT_TYPES = [{ description: 'TakeoffCraft', extensions: ['.json'] }];          // i18n-ignore: a file type the OS shows
  let projectTarget = null;      // the HostFile the takeoff was opened from, when it can be written in place
  async function openHostFiles(list) {
    const named = await Promise.all(list.map(async (hf) => { const f = await hf.file(); return f instanceof File ? f : new File([f], hf.name, { type: hf.type || '' }); }));
    const proj = list.find((hf) => /\.json$/i.test(hf.name));
    const before = model.version;
    await openFiles(named);
    if (proj && model.version !== before && !model.dirty) projectTarget = proj.writable ? proj : null;   // opened (not refused)
  }
  ui.filePdf.addEventListener('change', () => { const l = [...ui.filePdf.files]; ui.filePdf.value = ''; if (l.length) host.fromDrop(l).then(openHostFiles); });
  ui.fileProject.addEventListener('change', () => { const l = [...ui.fileProject.files]; ui.fileProject.value = ''; if (l.length) host.fromDrop(l.slice(0, 1)).then(openHostFiles); });
  host.onOpenFiles((list) => openHostFiles(list));

  // drop PDFs (and/or a project) anywhere on the app
  let dragDepth = 0;
  root.addEventListener('dragenter', (e) => { if (e.dataTransfer?.types?.includes('Files')) { e.preventDefault(); dragDepth++; ui.drop.hidden = false; } });
  root.addEventListener('dragover', (e) => { if (e.dataTransfer?.types?.includes('Files')) e.preventDefault(); });
  root.addEventListener('dragleave', () => { if (--dragDepth <= 0) { dragDepth = 0; ui.drop.hidden = true; } });
  root.addEventListener('drop', (e) => {
    if (!e.dataTransfer?.files?.length) return;
    e.preventDefault(); dragDepth = 0; ui.drop.hidden = true;
    host.fromDrop(e.dataTransfer).then(openHostFiles);     // fromDrop reads the drop's handles before its first await
  });

  // ---- project files ----
  /** Ask before work is thrown away. `what`: open | new | leave (+ fills, e.g. {file}). */
  async function confirmDiscard(what, fills = {}) {
    if (!model.dirty) return true;
    const choice = await ask(root, {
      title: t('discard.title'),
      text: t('discard.text.' + what, fills),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['discard', t('discard.discard'), 'btn-line'], ['save', t('discard.save'), 'btn-plot']],
    });
    if (choice === 'save') return saveProject();
    return choice === 'discard';
  }

  async function openProject(file) {
    let json;
    try { json = JSON.parse(await file.text()); } catch { status(t('open.notjson', { file: file.name }), 10000); return; }
    if (!(await confirmDiscard('open', { file: file.name }))) return;
    const r = await loadProject(json);
    if (!r.ok) { status(r.error, 10000); return; }
    const m = matchFiles(model.state.files, files);
    const msg = [t('open.project.done', { file: file.name, items: t('n.items', { n: model.state.items.length }), marks: t('n.marks', { n: model.state.marks.length }) })];
    if (m.missing.length || m.changed.length) msg.push(t('open.project.pdfs'));
    for (const w of r.warnings) msg.push(w);
    status(msg.join(' '), 12000);
  }
  /** Replace the takeoff with a parsed project (a file, or an autosaved copy); the open PDFs stay open. */
  async function loadProject(json) {
    const r = model.load(json);
    if (!r.ok) return r;
    for (const f of files) model.addFile({ hash: f.hash, name: f.name, size: f.size, pages: f.pages.length });
    app.sel = null; app.hl = null; app.draft = null; app.check = null;
    app.active = model.state.items[0]?.id || null;
    rebuildSheets();
    if (!cur && sheets.length) await showSheet(sheets[0].key);
    else if (cur) { renderSheetBar(); view.invalidate(); }
    return r;
  }

  /** Save the takeoff (host.save: in place on the desktop, a download in the browser). → true when it was saved. */
  async function saveProject() {
    const name = safeName(model.state.name || 'Takeoff') + '.takeoff.json';   // i18n-ignore: a file name
    const r = await host.save({ target: projectTarget, data: JSON.stringify(model.toJSON(), null, 1), name, types: PROJECT_TYPES, type: 'application/json' });
    if (!r.ok) { if (!r.cancelled) status(t('file.save_failed', { error: String(r.error?.message || r.error || '') }), 12000); return false; }
    if (r.target?.writable) projectTarget = r.target;
    model.markSaved();
    status(r.how === 'written' ? t('file.written', { file: r.path || r.name || name }) : t('file.saved', { file: name }));
    return true;
  }

  function renderMissing() {
    ui.missing.replaceChildren();
    const open = new Set(files.map((f) => f.hash));
    const used = new Set([...model.state.marks.map((m) => m.sheet.split(':')[0]), ...Object.keys(model.state.sheets).filter((k) => model.state.sheets[k]?.scale).map((k) => k.split(':')[0])]);
    const missing = model.state.files.filter((f) => !open.has(f.hash) && used.has(f.hash));
    if (!missing.length) return;
    const m = matchFiles(missing, files);
    ui.missing.append(el('div', { className: 'tc-missing' },
      el('p', {}, t('missing.text')),
      el('ul', {}, missing.map((f) => el('li', {}, t(m.changed.some((c) => c.want.hash === f.hash) ? 'missing.file.changed' : 'missing.file', { file: f.name, size: bytes(f.size) }))))));
  }

  // =========================================================================
  // Sheets list

  function visibleSheets() {
    const q = ui.sheetQ.value.trim().toLowerCase();
    return q ? sheets.filter((s) => (s.title + ' ' + s.file.name + ' ' + s.info.label).toLowerCase().includes(q)) : sheets;
  }
  ui.sheetQ.addEventListener('input', () => renderSheets());

  const thumbQueue = [];
  let thumbBusy = false;
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { io.unobserve(en.target); thumbQueue.push(en.target); }
    pumpThumbs();
  }, { root: ui.sheets.closest('.tc-panel') });
  async function pumpThumbs() {
    if (thumbBusy) return;
    thumbBusy = true;
    while (thumbQueue.length) {
      const c = thumbQueue.shift();
      const s = sheets.find((x) => x.key === c.dataset.key);
      if (!s || c.dataset.done) continue;
      try { await renderThumb(await s.file.doc.getPage(s.info.index + 1), s.info, c, 200); c.dataset.done = '1'; } catch { /* a broken page keeps a blank thumbnail */ }
    }
    thumbBusy = false;
  }

  function renderSheets() {
    const list = visibleSheets();
    ui.sheetsEmpty.hidden = sheets.length > 0;
    ui.sheetCount.textContent = sheets.length ? (list.length === sheets.length ? t('sheets.count', { n: sheets.length }) : t('sheets.count.filtered', { n: list.length, total: sheets.length })) : '';
    const hlCount = new Map();
    if (app.hl) for (const m of model.state.marks) if (m.item === app.hl) hlCount.set(m.sheet, (hlCount.get(m.sheet) || 0) + 1);
    const markCount = new Map();
    for (const m of model.state.marks) markCount.set(m.sheet, (markCount.get(m.sheet) || 0) + 1);
    ui.sheets.replaceChildren(...list.map((s) => {
      let c = thumbs.get(s.key);
      if (!c) { c = el('canvas', { className: 'tc-thumb', dataset: { key: s.key }, 'aria-hidden': 'true' }); c.style.setProperty('--ar', String(s.info.width / s.info.height)); thumbs.set(s.key, c); io.observe(c); }
      const sc = model.scaleOf(s.key);
      const n = markCount.get(s.key) || 0, h = hlCount.get(s.key) || 0;
      return el('li', {}, el('button', { type: 'button', className: 'tc-sheet', 'aria-current': cur?.key === s.key ? 'true' : 'false', dataset: { sheet: s.key }, onclick: () => showSheet(s.key) },
        c,
        el('span', { className: 'tc-sheet-title' }, s.title),
        el('span', { className: 'tc-sheet-meta' },
          el('span', { className: sc ? '' : 'is-unscaled' }, sc ? scaleText(sc, s.info.userUnit, true) : t('x.noscale')),
          app.hl ? el('span', { className: 'tc-sheet-hits' }, h ? t('sheets.hits', { n: h }) : '') : el('span', {}, n ? t('n.marks', { n }) : ''))));
    }));
  }

  function scaleText(sc, userUnit = 1, short = false) {
    if (sc.method === 'preset') return sc.label;
    const m = U.matchPreset(sc.ftPerUnit, userUnit);
    if (short) return m ? m.label : U.describeScale(sc.ftPerUnit, userUnit);
    return t(sc.cal?.text ? 'scale.cal.on' : 'scale.cal', { scale: U.describeScale(sc.ftPerUnit, userUnit), text: sc.cal?.text || '' }) + (m ? ' ' + t('scale.matches', { preset: m.label }) : '');
  }

  function renderSheetBar() {
    ui.sheetbar.hidden = !cur;
    ui.preset.disabled = !cur;
    if (!cur) return;
    ui.sheetName.textContent = cur.title;
    const sc = model.scaleOf(cur.key);
    ui.sheetScale.textContent = sc ? t('sheetbar.scale', { scale: scaleText(sc, cur.info.userUnit) }) : t('sheetbar.noscale');
    ui.sheetScale.classList.toggle('is-unscaled', !sc);
    ui.preset.value = sc?.method === 'preset' && sc.preset ? sc.preset : (sc ? 'cal' : '');
  }

  // preset scales
  ui.preset.append(el('option', { value: 'cal', disabled: true, hidden: true }, t('x.calibrated')));
  ui.preset.append(el('option', { value: '__detect' }, t('scale.detect')));
  for (const [group, list] of U.SCALE_GROUPS) ui.preset.append(el('optgroup', { label: group }, list.map(([key, label]) => el('option', { value: key }, label))));
  ui.preset.addEventListener('change', async () => {
    if (!cur) return;
    const key = ui.preset.value;
    if (key === '__detect') { renderSheetBar(); await detectScales(); return; }
    if (!U.PRESETS.has(key)) return;
    if (!(await confirmRescale())) { renderSheetBar(); return; }
    const p = U.PRESETS.get(key);
    model.setScale(cur.key, U.scaleRecord({ method: 'preset', preset: key, ftPerUnit: U.presetFtPerUnit(key, cur.info.userUnit), label: p.label }), t('sheetbar.scale', { scale: p.label }));
    status(t('scale.set', { scale: p.label }));
  });

  /** T20: read every sheet's text for its scale ("1/4" = 1'-0"", "1:100"); a dialog to apply them, one undo step. */
  async function detectScales() {
    if (!sheets.length) return;
    busy(t('scale.detect.busy'));
    const found = [];
    try {
      for (const s of sheets) {
        let r;
        try { r = sheetScale(pageText(await (await s.file.doc.getPage(s.info.index + 1)).getTextContent())); } catch { r = { preset: null, why: 'none', others: [] }; }
        found.push({ s, r, cur: model.scaleOf(s.key) });
      }
    } finally { busy(null); }
    const rows = found.map(({ s, r, cur: sc }) => {
      const same = sc?.method === 'preset' && sc.preset === r.preset;
      const marks = r.preset && sc && !same ? model.marksOn(s.key).filter((m) => m.kind !== 'count').length : 0;
      const cb = el('input', { type: 'checkbox', disabled: !r.preset || same, checked: !!r.preset && !sc, dataset: { detectFor: s.key } });
      const what = !r.preset ? t(r.why === 'nts' ? 'scale.detect.nts' : 'scale.detect.none') : same ? t('scale.detect.same', { scale: r.label })
        : t('scale.detect.found', { scale: r.label }) + (r.others.length ? ' ' + t('scale.detect.others', { list: r.others.map((k) => U.PRESETS.get(k).label).join(', ') }) : '') + (marks ? ' ' + t('scale.detect.remeasure', { n: marks }) : '');
      return { s, r, cb, li: el('li', {}, el('label', { className: 'tc-detect-row' }, cb, el('span', { className: 'tc-detect-name' }, s.title),
        el('span', { className: 'tc-detect-now' }, sc ? scaleText(sc, s.info.userUnit) : t('x.noscale')), el('span', { className: 'tc-detect-what' + (r.others.length ? ' is-warn' : '') }, what))) };
    });
    const n = found.filter((f) => f.r.preset).length;
    const choice = await ask(root, {
      title: t('scale.detect.title'), text: n ? t('scale.detect.text', { n, total: sheets.length }) : t('scale.detect.nothing'),
      body: el('ul', { className: 'tc-detect' }, rows.map((x) => x.li)),
      buttons: n ? [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('scale.detect.apply'), 'btn-plot']] : [['cancel', t('btn.close'), 'btn-plot']],
    });
    if (choice !== 'ok') return;
    const map = {};
    for (const x of rows) if (x.cb.checked && x.r.preset) {
      const p = U.PRESETS.get(x.r.preset);
      map[x.s.key] = U.scaleRecord({ method: 'preset', preset: p.key, ftPerUnit: U.presetFtPerUnit(p.key, x.s.info.userUnit), label: p.label });
    }
    if (model.setScales(map)) status(t('scale.detect.done', { n: Object.keys(map).length }), 9000);
  }

  async function confirmRescale() {
    const sc = model.scaleOf(cur.key);
    const n = model.marksOn(cur.key).filter((m) => m.kind !== 'count').length;
    if (!sc || !n) return true;
    return (await ask(root, {
      title: t('rescale.title'),
      text: t('rescale.text', { n }),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('rescale.ok'), 'btn-plot']],
    })) === 'ok';
  }

  // =========================================================================
  // Tools

  const toolButtons = [...root.querySelectorAll('[data-tool]')];
  for (const b of toolButtons) b.addEventListener('click', () => { setTool(b.dataset.tool); b.closest('details')?.removeAttribute('open'); });

  function setTool(tool) {
    if (d3.on && tool !== 'select') close3d();         // drawing happens on the flat sheet
    if (tool !== 'select' && !cur) { status(t('handoff.nopdf')); return false; }
    endPaste(true);
    if ((tool === 'linear' || tool === 'area' || tool === 'circle' || tool === 'room') && !model.scaleOf(cur.key)) {
      status(t('tool.err.noscale'), 9000);
      return false;
    }
    if (tool === 'linear' || tool === 'area' || tool === 'count' || tool === 'circle' || tool === 'autocount' || tool === 'room') {
      if (!ensureItem(tool === 'circle' || tool === 'room' ? 'area' : tool === 'autocount' ? 'count' : tool)) return false;
    }
    if (NOTE_TOOLS.has(tool)) { app.selNote = null; renderNoteProps(); }
    if (tool === 'cutout' || tool === 'cutcircle') {
      const m = app.sel && model.mark(app.sel);
      if (!m || m.kind !== 'area') { status(t('tool.err.cutout')); return false; }
      if (model.item(m.item)?.backout) { status(t('backout.noholes'), 9000); return false; }
      if (!model.scaleOf(cur.key)) { status(t('tool.err.noscale.short')); return false; }
    }
    cancelDraft();
    if (app.ac && tool !== 'autocount') discardAutoCount();
    app.tool = tool;
    app.check = tool === 'check' ? app.check : null;
    for (const b of toolButtons) b.setAttribute('aria-pressed', String(b.dataset.tool === tool || (tool === 'cutcircle' && b.dataset.tool === 'cutout')));
    ui.over.dataset.tool = tool;
    renderAcBar();
    const help = tool === 'room' ? t('help.room', { gap: U.formatFtIn(settings.roomGap) }) : t('help.' + tool);
    status(help, 0);
    view.overlayOnly();
    return true;
  }

  /** Make sure the active item is of `type`: switch to one, or ask for a new one. */
  function ensureItem(type) {
    const a = app.active && model.item(app.active);
    if (a && kindsOf(a).includes(type)) return true;        // its main condition, or a second one (T8)
    const last = [...model.state.items].reverse().find((i) => i.type === type);
    if (last) { setActive(last.id); status(t('tool.taking', { item: last.name })); return true; }
    openItemForm(type);
    status(t('tool.make.' + type), 9000);
    return false;
  }

  function cancelDraft() { app.draft = null; app.drag = null; app.noteStart = null; ui.measure.textContent = ''; closeTypeIn(); view.overlayOnly(); }

  /** Backspace / the touch bar's Back: the pending arc point first, then the last point (and the arc that led to it). */
  function dropLastPoint() {
    if (app.draft?.mid) { app.draft.mid = null; liveMeasure(); view.overlayOnly(); return; }
    if (!app.draft?.pts.length) return;
    app.draft.pts.pop();
    app.draft.ded?.delete(app.draft.pts.length - 1);
    const last = app.draft.pts.at(-1);
    if (last?.b) delete last.b;
    if (!app.draft.pts.length) app.draft = null;
    liveMeasure(); view.overlayOnly();
  }

  // the touch bar (S.8): Finish / Back / Cancel while a run, an outline or a cut-out is under way on a touch screen
  const touchBar = root.querySelector('[data-touchbar]');
  function renderTouchBar() {
    if (!touchBar) return;
    const show = coarse && !!app.draft?.pts.length && ['linear', 'area', 'cutout', 'circle', 'cutcircle', 'calibrate', 'check'].includes(app.tool);
    if (touchBar.hidden === !show) return;
    touchBar.hidden = !show;
  }
  touchBar?.addEventListener('click', (e) => {
    const b = e.target.closest('[data-touch]');
    if (!b) return;
    if (b.dataset.touch === 'finish') finishDraft();
    else if (b.dataset.touch === 'back') { dropLastPoint(); }
    else if (b.dataset.touch === 'cancel') cancelDraft();
    renderTouchBar();
  });

  // ---- typed lengths and coordinates (T3; typein.js): a digit, @ or # during a run opens the box in the status bar ----
  const TYPE_TOOLS = new Set(['linear', 'area', 'cutout', 'circle', 'cutcircle']);
  const typeIn = root.querySelector('[data-typein]'), typeBox = root.querySelector('[data-typein-box]');
  const canType = () => !!(cur && TYPE_TOOLS.has(app.tool) && app.draft?.pts.length && !app.paste);
  function openTypeIn(ch = '') {
    if (!typeIn) return;
    typeIn.hidden = false;
    typeBox.value = ch;
    typeBox.classList.remove('is-invalid');
    typeBox.focus();
    status(t(app.tool === 'circle' || app.tool === 'cutcircle' ? 'typein.hint.circle' : 'typein.hint'), 0);
  }
  function closeTypeIn() {
    if (!typeIn || typeIn.hidden) return;
    typeIn.hidden = true;
    typeBox.value = '';
    if (typeIn.contains(document.activeElement)) typeBox.blur();
  }
  function applyTyped() {
    const d = app.draft, sc = cur && model.scaleOf(cur.key);
    if (!d?.pts.length) { closeTypeIn(); return; }
    const text = typeBox.value;
    let res;
    if (app.tool === 'circle' || app.tool === 'cutcircle') {
      const r = U.parseLength(text);
      const c = d.pts[0], to = app.cursor && G.dist(app.cursor, c) > 0 ? app.cursor : { x: c.x + 1, y: c.y };
      const n = G.dist(to, c);
      res = !r.ok ? { ok: false, error: 'typein.err.read' } : !sc ? { ok: false, error: 'typein.err.noscale' }
        : { ok: true, point: { x: c.x + (to.x - c.x) / n * r.ft / sc.ftPerUnit, y: c.y + (to.y - c.y) / n * r.ft / sc.ftPerUnit } };
    } else {
      res = parseEntry(text, { first: d.pts[0], last: d.pts.at(-1), cursor: app.cursor, ftPerUnit: sc?.ftPerUnit, linear: view.matrix.slice(0, 4) });
    }
    if (!res.ok) { typeBox.classList.add('is-invalid'); status(t(res.error), 12000); return; }
    typeBox.value = '';
    typeBox.classList.remove('is-invalid');
    click(res.point, view.toScreen(res.point), true);
    if (!app.draft) closeTypeIn(); else { liveMeasure(); view.overlayOnly(); }
  }
  typeBox?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (typeBox.value.trim()) applyTyped();
      else { closeTypeIn(); finishDraft(); }
    } else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeTypeIn(); status(''); }
  });

  // =========================================================================
  // Pointer

  let down = null, panning = null;
  const pos = (e) => { const r = ui.over.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };

  // ---- touch (S.8): fingers get bigger targets; two fingers pinch and pan (and cancel what the first one began);
  // a long press is the right click (finish); a double tap finishes too; a small bar gives Finish / Back / Cancel ----
  let coarse = window.matchMedia?.('(pointer: coarse)').matches || false;   // i18n-ignore: a media query
  const hitPx = () => (coarse ? 16 : HIT), closePx = () => (coarse ? 22 : CLOSE), snapPx = () => (coarse ? 18 : SNAP);
  const setCoarse = (on) => { if (on === coarse) return; coarse = on; root.classList.toggle('is-touch', on); renderTouchBar(); };
  root.classList.toggle('is-touch', coarse);
  const touches = new Map();
  let pinch = null, longTimer = 0, lastTap = null;
  const twoFingers = () => { const [a, b] = [...touches.values()]; return { d: Math.hypot(b.x - a.x, b.y - a.y), m: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } }; };

  ui.over.addEventListener('contextmenu', (e) => e.preventDefault());
  ui.over.addEventListener('pointerdown', (e) => {
    if (!cur) return;
    ui.over.setPointerCapture(e.pointerId);
    const p = pos(e);
    app.shift = e.shiftKey;
    setCoarse(e.pointerType === 'touch' || (e.pointerType === 'pen' && coarse));
    if (e.pointerType === 'touch') {
      touches.set(e.pointerId, p);
      if (touches.size === 2) {                         // a second finger: pinch, and nothing the first one began
        clearTimeout(longTimer);
        down = null; panning = null; app.drag = null; app.box = null;
        ui.over.classList.remove('is-panning');
        pinch = twoFingers();
        view.overlayOnly();
        return;
      }
      if (touches.size > 2) return;
    }
    if (e.button === 1 || (e.button === 0 && app.space)) { e.preventDefault(); panning = p; ui.over.classList.add('is-panning'); return; }
    down = { ...p, button: e.button, moved: false, touch: e.pointerType === 'touch', t: performance.now() };
    if (down.touch) {
      longTimer = setTimeout(() => {                    // a long press = the right button: finish the run or the outline
        if (!down || down.moved || touches.size !== 1) return;
        down.long = true;
        if (app.draft) { navigator.vibrate?.(15); finishDraft(); }
      }, 550);
    }
    if (e.button === 0 && app.tool === 'select' && !app.paste) app.drag = handleAt(p);
    if (e.button === 0 && app.tool === 'autocount' && !app.ac?.running) app.box = { a: view.toUser(p), b: view.toUser(p), sa: p };
  });
  ui.over.addEventListener('pointermove', (e) => {
    const p = pos(e);
    app.shift = e.shiftKey;
    if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
      touches.set(e.pointerId, p);
      if (pinch && touches.size >= 2) {
        const now = twoFingers();
        if (pinch.d > 0 && now.d > 0) view.zoomAt(pinch.m.x, pinch.m.y, now.d / pinch.d);
        view.panBy(now.m.x - pinch.m.x, now.m.y - pinch.m.y);
        pinch = now;
        return;
      }
    }
    if (panning) { view.panBy(p.x - panning.x, p.y - panning.y); panning = p; return; }
    if (down && !down.moved && Math.hypot(p.x - down.x, p.y - down.y) > (down.touch ? 10 : 4)) {
      down.moved = true;
      clearTimeout(longTimer);
      if (!app.drag && !app.box) { panning = p; ui.over.classList.add('is-panning'); return; }
    }
    if (app.box && down) { app.box.b = view.toUser(p); view.overlayOnly(); return; }
    if (!cur) return;
    app.cursor = pointFor(view.toUser(p));
    if (app.drag && down?.moved) dragTo(app.cursor);
    liveMeasure();
    view.overlayOnly();
  });
  const liftTouch = (e) => {
    if (e.pointerType !== 'touch') return;
    touches.delete(e.pointerId);
    if (pinch && touches.size < 2) { pinch = null; down = null; }   // the finger left after a pinch acts on nothing
  };
  ui.over.addEventListener('pointercancel', (e) => { liftTouch(e); clearTimeout(longTimer); down = null; panning = null; ui.over.classList.remove('is-panning'); });
  ui.over.addEventListener('pointerup', (e) => {
    const p = pos(e);
    const wasPinch = !!pinch;
    liftTouch(e);
    clearTimeout(longTimer);
    if (wasPinch) return;
    if (panning) { panning = null; ui.over.classList.remove('is-panning'); down = null; return; }
    if (!down || !cur) return;
    const d = down; down = null;
    if (d.long) return;                                 // the long press already acted
    if (d.touch && !d.moved) {
      // a double tap finishes a run or an outline (the first tap placed its point)
      const tap = { x: p.x, y: p.y, t: performance.now() };
      const dbl = lastTap && tap.t - lastTap.t < 350 && Math.hypot(tap.x - lastTap.x, tap.y - lastTap.y) < 24;
      lastTap = dbl ? null : tap;
      if (dbl && app.draft && !app.draft.mid && (app.tool === 'linear' || app.tool === 'area' || app.tool === 'cutout')) { finishDraft(); return; }
    }
    if (app.drag) { const g = app.drag; app.drag = null; if (d.moved) { commitDrag(g); return; } }
    if (app.box) {
      const bx = app.box; app.box = null;
      if (d.moved && Math.hypot(p.x - bx.sa.x, p.y - bx.sa.y) > 6) { runAutoCount(bx.a, view.toUser(p)); return; }
      view.overlayOnly();
      if (app.ac && !app.ac.running) { toggleCandidate(view.toUser(p)); return; }
      status(t('ac.start.short'));
      return;
    }
    if (d.button === 2) { if (!d.moved) finishDraft(); return; }
    if (d.button !== 0 || d.moved) return;
    click(pointFor(view.toUser(p)), p);
  });
  ui.over.addEventListener('pointerleave', () => { app.cursor = null; view.overlayOnly(); });
  ui.over.addEventListener('dblclick', (e) => { e.preventDefault(); if (app.draft && !app.draft.mid && (app.tool === 'linear' || app.tool === 'area' || app.tool === 'cutout')) finishDraft(); });
  ui.over.addEventListener('wheel', (e) => {
    if (!cur) return;
    e.preventDefault();
    const p = pos(e);
    const step = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
    view.zoomAt(p.x, p.y, Math.pow(1.0018, -step));
  }, { passive: false });

  /**
   * Where a pick lands: on the drawing's own linework when Snap is on and it is near (T1; snap.js), else 45° from the
   * last picked point with Shift (Settings: always, and Shift frees the angle). `app.snap` keeps the hit for the marker.
   */
  function pointFor(raw) {
    app.snap = null;
    if (app.paste) return raw;
    const hit = snapHit(raw);
    if (hit) { app.snap = hit; return { x: hit.x, y: hit.y }; }
    if (app.tool === 'circle' || app.tool === 'cutcircle' || app.drag?.arc) return raw;
    // arc mode (T11): the point on the curve goes anywhere; the arc's end snaps 45° from where the arc starts
    if (app.arc && app.draft?.pts.length && !app.draft.mid) return raw;
    const last = app.draft?.pts.at(-1) ?? (app.drag?.anchor || null);
    const snap = settings.snap45 ? !app.shift : app.shift;
    return snap && last ? G.snap45(last, raw) : raw;
  }

  // ---- snapping to the PDF's own linework (T1) ----
  const snaps = new Map();     // sheet key → { idx: SnapIndex | null, n, truncated, pending: Promise }
  /** Read the sheet's vector paths once (pdf.js's operator list) and index them; a few sheets are kept. */
  function loadSnap(s) {
    if (snaps.has(s.key)) return snaps.get(s.key).pending;
    const rec = { idx: null, n: 0, truncated: false, pending: null };
    snaps.set(s.key, rec);
    rec.pending = (async () => {
      try {
        const page = await s.file.doc.getPage(s.info.index + 1);
        const lw = await pageLinework(pdfjs, page);
        rec.n = lw.n; rec.truncated = lw.truncated;
        rec.idx = lw.n ? new SnapIndex(lw) : null;
        if (cur?.key === s.key && settings.snap && rec.truncated) status(t('snap.truncated', { n: MAX_SEGS.toLocaleString() }), 9000);
      } catch (err) { console.warn(err); }
      while (snaps.size > 4) snaps.delete(snaps.keys().next().value);
    })();
    return rec.pending;
  }
  function snapHit(raw) {
    if (!settings.snap || !cur || !(SNAP_TOOLS.has(app.tool) || app.drag)) return null;
    const rec = snaps.get(cur.key);
    if (!rec?.idx) return null;
    return rec.idx.snap(raw, snapPx() / view.z);
  }
  function toggleSnap(on = !settings.snap) {
    settings.snap = on;
    saveSettings();
    applySettings();
    status(on ? t('snap.on') : t('snap.off'));
    if (on && cur) loadSnap(cur).then(() => { const r = cur && snaps.get(cur.key); if (settings.snap && r && !r.n) status(t('snap.none'), 9000); });
    if (app.cursor) view.overlayOnly();
  }
  root.querySelector('[data-snap-toggle]')?.addEventListener('click', () => toggleSnap());
  /** The snap marker: square = end, triangle = midpoint, X = crossing, hourglass = on the line; with its name. */
  function drawSnap(ctx, S) {
    const h = app.snap;
    if (!h || !app.cursor) return;
    const s = S(h), r = 6;
    ctx.save();
    ctx.strokeStyle = colors.action; ctx.lineWidth = 2; ctx.beginPath();
    if (h.kind === 'end') ctx.rect(s.x - r, s.y - r, 2 * r, 2 * r);
    else if (h.kind === 'mid') { ctx.moveTo(s.x, s.y - r); ctx.lineTo(s.x + r, s.y + r * 0.8); ctx.lineTo(s.x - r, s.y + r * 0.8); ctx.closePath(); }
    else if (h.kind === 'int') { ctx.moveTo(s.x - r, s.y - r); ctx.lineTo(s.x + r, s.y + r); ctx.moveTo(s.x + r, s.y - r); ctx.lineTo(s.x - r, s.y + r); }
    else { ctx.moveTo(s.x - r, s.y - r); ctx.lineTo(s.x + r, s.y - r); ctx.lineTo(s.x - r, s.y + r); ctx.lineTo(s.x + r, s.y + r); ctx.closePath(); }
    ctx.stroke();
    ctx.font = '600 11px Archivo, system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
    const txt = t('snap.' + h.kind), w = ctx.measureText(txt).width + 8;
    ctx.fillStyle = colors.sheet; ctx.fillRect(s.x + r + 4, s.y + r + 2, w, 16);
    ctx.lineWidth = 1; ctx.strokeRect(s.x + r + 4, s.y + r + 2, w, 16);
    ctx.fillStyle = colors.action; ctx.fillText(txt, s.x + r + 8, s.y + r + 4);
    ctx.restore();
  }

  function click(p, screen, typed = false) {
    const tool = app.tool;
    if (app.cmp?.align) { alignPick(p); return; }
    if (app.paste) { placePaste(p); return; }
    if (tool === 'select') { selectAt(p, app.shift); return; }
    // the sheet may have changed (or its scale been undone) since the tool was picked
    if (tool === 'autocount') return;
    if ((tool === 'linear' || tool === 'area' || tool === 'count' || tool === 'circle' || tool === 'room') && !model.item(app.active)) { setTool('select'); status(t('tool.err.item')); return; }
    if ((tool === 'linear' || tool === 'area' || tool === 'cutout' || tool === 'circle' || tool === 'cutcircle' || tool === 'room') && !model.scaleOf(cur.key)) {
      app.draft = null;
      status(t('tool.err.noscale.measure'), 9000);
      view.overlayOnly();
      return;
    }
    if ((tool === 'cutout' || tool === 'cutcircle') && model.mark(app.sel)?.sheet !== cur.key) { setTool('select'); return; }
    if (tool === 'count') {
      const id = model.addMark({ item: app.active, sheet: cur.key, pts: [p], kind: 'count', ...inArea() });
      app.sel = id;
      return;
    }
    if (tool === 'room') { fillRoom(p); return; }
    if (tool === 'note') { noteAt(p); return; }
    if (tool === 'cloud' || tool === 'highlight') {          // T22: two corners
      if (!app.noteStart) { app.noteStart = p; status(t('help.' + tool + '.2'), 0); view.overlayOnly(); return; }
      const a = app.noteStart;
      app.noteStart = null;
      boxNote(tool, a, p);
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
      if (!pts.length) { pts.push(p); view.overlayOnly(); return; }
      finishCircle(pts[0], p);
      return;
    }
    // arc mode: the first click after a point is on the curve, the second is where it ends
    if (app.arc && pts.length && (tool === 'linear' || tool === 'area' || tool === 'cutout')) {
      if (!app.draft.mid) { app.draft.mid = p; liveMeasure(); view.overlayOnly(); return; }
      const last = pts.at(-1), mid = app.draft.mid;
      app.draft.mid = null;
      let end = p, closing = false;
      if ((tool === 'area' || tool === 'cutout') && pts.length >= 2) {
        const s0 = view.toScreen(pts[0]);
        if (Math.hypot(s0.x - screen.x, s0.y - screen.y) <= closePx()) { closing = true; end = pts[0]; }
      }
      const b = G.bulgeThrough(last, mid, end);
      pts[pts.length - 1] = b ? { x: last.x, y: last.y, b } : { x: last.x, y: last.y };
      if (closing) { finishDraft(); return; }
      pts.push({ x: end.x, y: end.y });
      noteDeduct(app.draft);
      liveMeasure();
      view.overlayOnly();
      return;
    }
    if ((tool === 'area' || tool === 'cutout') && pts.length >= 3) {
      const s0 = view.toScreen(pts[0]);
      if (Math.hypot(s0.x - screen.x, s0.y - screen.y) <= closePx()) { finishDraft(); return; }
    }
    pts.push(p);
    noteDeduct(app.draft);
    if ((tool === 'calibrate' || tool === 'check') && pts.length === 2) { finishDraft(); return; }
    liveMeasure();
    view.overlayOnly();
  }

  /** In deduct mode (T2), the segment a linear run just gained is a deduct. */
  function noteDeduct(d) {
    if (!d || app.tool !== 'linear' || d.pts.length < 2) return;
    d.ded ??= new Set();
    if (app.deduct) d.ded.add(d.pts.length - 2); else d.ded.delete(d.pts.length - 2);
  }
  /** dedupe() for a run, keeping its deducts on the right segments: `out` gets the new segment numbers. */
  function dedupeRun(pts, ded, out) {
    const tol = 2 / view.z;
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
    const tol = 2 / view.z;
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
    if (tool === 'area' || tool === 'cutout') while (pts.length > 3 && !pts.at(-2).b && G.dist(pts[0], pts.at(-1)) <= 2 / view.z) pts.pop();
    if (tool === 'linear') pts = pts.map((q, i) => (i === pts.length - 1 && q.b ? { x: q.x, y: q.y } : q));   // a run's last point starts nothing
    app.draft = null;
    closeTypeIn();
    ui.measure.textContent = '';
    if (tool === 'linear') {
      if (pts.length < 2) { status(t('run.err.points')); return; }
      if (ded.size && ded.size >= pts.length - 1) { status(t('deduct.all'), 9000); view.overlayOnly(); return; }
      app.sel = model.addMark({ item: app.active, sheet: cur.key, pts, kind: 'linear', ...(ded.size ? { deducts: [...ded] } : {}), ...inArea() });
    } else if (tool === 'area') {
      const why = G.outlineProblem(pts);
      if (why) { status(why, 9000); view.overlayOnly(); return; }
      if (model.item(app.active)?.backout && !G.isConvex(pts)) { status(t('backout.convex'), 12000); view.overlayOnly(); return; }
      app.sel = model.addMark({ item: app.active, sheet: cur.key, pts, kind: 'area', ...inArea() });
    } else if (tool === 'cutout') {
      const m = model.mark(app.sel);
      if (!m) return;
      const why = G.holeProblem(m.pts, m.holes, pts);
      if (why) { status(why, 9000); view.overlayOnly(); return; }
      model.updateMark(m.id, { holes: [...m.holes, pts] }, 'Cut-out');
      status(t('cutout.added'));
    } else if (tool === 'calibrate') {
      if (pts.length < 2) return;
      await calibrateDialog(pts[0], pts[1]);
    } else if (tool === 'check') {
      if (pts.length < 2) return;
      const sc = model.scaleOf(cur.key);
      if (!sc) { status(t('check.noscale')); app.check = null; return; }
      const ft = G.dist(pts[0], pts[1]) * sc.ftPerUnit;
      app.check = { a: pts[0], b: pts[1], text: ftIn(ft) };
      ui.measure.textContent = t('check.result', { len: ftIn(ft), ft: U.fixed(ft, 3), m: U.fixed(ft * U.M_PER_FT, 3) });
      status(t('check.hint'), 0);
    }
    renderMarkProps();                 // the new mark is selected: show it
    view.overlayOnly();
  }

  /** A circle as two half-circle arcs (exact area and perimeter): a new area, or a round cut-out. */
  function finishCircle(c, edge) {
    app.draft = null;
    closeTypeIn();
    ui.measure.textContent = '';
    const r = G.dist(c, edge);
    if (r * view.z < 3) { status(t('circle.err.small')); view.overlayOnly(); return; }
    const pts = [{ x: c.x + r, y: c.y, b: 1 }, { x: c.x - r, y: c.y, b: 1 }];
    if (app.tool === 'cutcircle') {
      const m = model.mark(app.sel);
      if (!m) return;
      const why = G.holeProblem(m.pts, m.holes, pts);
      if (why) { status(why, 9000); view.overlayOnly(); return; }
      model.updateMark(m.id, { holes: [...m.holes, pts] }, t('undo.cutout.round'));
      status(t('cutout.round.added'));
      return;
    }
    app.sel = model.addMark({ item: app.active, sheet: cur.key, pts, kind: 'area', ...inArea() });
    renderMarkProps();
  }

  /** The run or outline being drawn, with the pending arc (or straight segment) to the cursor. */
  function previewPts() {
    const d = app.draft;
    if (!d) return [];
    const pts = d.pts.map((p) => ({ ...p }));
    if (!app.cursor || !pts.length) return pts;
    if (d.mid) { const b = G.bulgeThrough(pts.at(-1), d.mid, app.cursor); if (b) pts[pts.length - 1].b = b; }
    pts.push({ x: app.cursor.x, y: app.cursor.y });
    return pts;
  }

  async function calibrateDialog(a, b) {
    const sc = model.scaleOf(cur.key);
    const input = el('input', { type: 'text', className: 'tc-input', id: 'tc-cal', autocomplete: 'off', spellcheck: false, placeholder: '24\'-6 1/2", 24.5, 7.5 m', dataset: { calInput: '' }, value: sc?.cal?.text || '' });
    let parsed = null;
    const choice = await ask(root, {
      title: t('cal.title'),
      text: t('cal.text'),
      body: el('div', { className: 'tc-ask-field' }, el('label', { for: 'tc-cal' }, t('cal.label')), input,
        el('p', { className: 'tc-note' }, t('cal.note'))),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('cal.ok'), 'btn-plot']],
      focus: '[data-cal-input]',
      onOk: () => {
        const r = U.parseLength(input.value);
        if (!r.ok) return r.error;
        const c = U.calibrate(a, b, r.ft);
        if (!c.ok) return c.error;
        parsed = { ...c, ft: r.ft, text: input.value.trim() };
        return null;
      },
    });
    if (choice !== 'ok' || !parsed) { status(t('cal.canceled')); return; }
    if (!(await confirmRescale())) return;
    const m = U.matchPreset(parsed.ftPerUnit, cur.info.userUnit);
    model.setScale(cur.key, U.scaleRecord({ method: 'calibrated', ftPerUnit: parsed.ftPerUnit, label: U.describeScale(parsed.ftPerUnit, cur.info.userUnit), cal: { a: [a.x, a.y], b: [b.x, b.y], ft: parsed.ft, text: parsed.text } }), 'Calibrate');
    status(m ? t('cal.done.match', { scale: U.describeScale(parsed.ftPerUnit, cur.info.userUnit), preset: m.label }) : t('cal.done', { scale: U.describeScale(parsed.ftPerUnit, cur.info.userUnit) }), 12000);
    setTool('select');
  }

  function liveMeasure() {
    const d = app.draft;
    if (!d || !cur || !app.cursor) return;
    const sc = model.scaleOf(cur.key);
    const pts = previewPts();
    if (app.tool === 'calibrate') { ui.measure.textContent = d.pts.length ? t('cal.second') : ''; return; }
    if (!sc) { ui.measure.textContent = ''; return; }
    const k = sc.ftPerUnit;
    const lastSeg = pts.length >= 2 ? G.segLength(pts.at(-2), pts.at(-1), pts.at(-2).b) * k : 0;
    const arcNote = d.mid ? '   ' + t('measure.arc') : '';
    if (app.tool === 'circle' || app.tool === 'cutcircle') {
      const r = G.dist(d.pts[0], app.cursor) * k;
      ui.measure.textContent = t('measure.circle', { r: ftIn(r), area: U.fixed(Math.PI * r * r, 2) });
    } else if (app.tool === 'linear' || app.tool === 'check') {
      if (app.tool === 'linear') {
        // deduct segments (T2) are left out of the run's length; the one under way follows the Deduct button
        const segs = G.segmentLengths(pts);
        const net = segs.reduce((n, len, i) => n + ((i === segs.length - 1 ? app.deduct : d.ded?.has(i)) ? 0 : len), 0);
        ui.measure.textContent = t('measure.run', { len: ftIn(net * k), seg: app.deduct ? t('deduct.seg', { len: ftIn(lastSeg) }) : ftIn(lastSeg) }) + arcNote;
      } else ui.measure.textContent = ftIn(lastSeg) + arcNote;
    } else if (app.tool === 'area' || app.tool === 'cutout') {
      ui.measure.textContent = (pts.length >= 3 || G.hasArcs(pts) ? t('measure.area', { area: U.fixed(G.polygonArea(pts) * k * k, 2), p: ftIn(G.perimeter(pts) * k) }) : t('measure.side', { len: ftIn(lastSeg) })) + arcNote;
    }
  }

  // ---- selecting and editing marks ----
  function markAt(p) {
    const tol = hitPx() / view.z;
    const list = model.marksOn(cur.key);
    for (let i = list.length - 1; i >= 0; i--) {
      const m = list[i];
      if (m.kind === 'count' && G.dist(p, m.pts[0]) <= tol * 1.3) return m;
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
    const n = !additive && noteHit(p);                        // T22: a markup on top of the marks
    if (n) { app.sel = null; app.selNote = n.id; renderMarkProps(); renderNoteProps(); ui.noteSec.scrollIntoView({ block: 'nearest' }); status(t('note.selected', { kind: t('tool.' + n.kind).toLowerCase() })); view.overlayOnly(); return; }
    if (app.selNote) { app.selNote = null; renderNoteProps(); }
    const m = markAt(p);
    if (additive && (selMain || selMore.size)) {
      if (!m) return;
      if (isSel(m.id)) {
        if (m.id === selMain) { const rest = [...selMore]; setSelection(rest); } else selMore.delete(m.id);
      } else selMore.add(m.id);
      const n = selIds().length;
      status(t('sel.several', { n, mod: modKey }));
    } else {
      app.sel = m?.id || null;
      if (m) { setActive(m.item, false); status(t('sel.one.' + m.kind, { item: model.item(m.item).name, mod: modKey })); }
    }
    renderMarkProps(); renderItems(); renderItemProps();
    view.overlayOnly();
  }
  /** A corner of the selected mark under the pointer. */
  function handleAt(s) {
    const m = app.sel && !selMore.size && model.mark(app.sel);
    if (!m || m.sheet !== cur.key) return null;
    const rings = [m.pts, ...(m.holes || [])];
    for (let r = 0; r < rings.length; r++) {
      for (let i = 0; i < rings[r].length; i++) {
        const q = view.toScreen(rings[r][i]);
        if (Math.hypot(q.x - s.x, q.y - s.y) <= hitPx()) {
          const ring = rings[r];
          const anchor = m.kind === 'count' ? null : ring[(i - 1 + ring.length) % ring.length];
          return { id: m.id, ring: r, i, pts: m.pts.map((p) => ({ ...p })), holes: m.holes.map((h) => h.map((p) => ({ ...p }))), anchor: m.kind === 'linear' && i === 0 ? ring[1] : anchor };
        }
      }
    }
    // T11: the middle of an arc — drag it to change how much the arc bows
    for (const h of arcHandles(m)) {
      const q = view.toScreen(h.at);
      if (Math.hypot(q.x - s.x, q.y - s.y) <= hitPx()) return { id: m.id, ring: h.ring, i: h.i, arc: true, pts: m.pts.map((p) => ({ ...p })), holes: m.holes.map((x) => x.map((p) => ({ ...p }))), anchor: null };
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
        out.push({ ring: r, i, at: segMid(ring[i], ring[(i + 1) % ring.length]) });
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
    if (!m || !g.moved) { view.overlayOnly(); return; }
    if (m.kind === 'area') {
      const why = G.outlineProblem(g.pts) || g.holes.map((h, i) => G.holeProblem(g.pts, g.holes.filter((_, j) => j !== i), h)).find(Boolean);
      if (why) { status(why + ' ' + t('drag.back'), 9000); view.overlayOnly(); return; }
    }
    model.updateMark(g.id, { pts: g.pts, holes: g.holes }, g.arc ? t('undo.arc.bend') : t('undo.point.move'));
  }

  // =========================================================================
  // Overlay

  function drawOverlay(ctx) {
    renderTouchBar();
    if (!cur) return;
    const items = new Map(model.state.items.map((i) => [i.id, i]));
    const M = view.matrix;
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
    drawCompare(ctx);
    const drag = app.drag?.moved ? app.drag : null;
    for (const m0 of model.marksOn(cur.key)) {
      const it = items.get(m0.item);
      if (!it) continue;
      const m = drag && drag.id === m0.id ? { ...m0, pts: drag.pts, holes: drag.holes } : m0;
      const dim = (app.hl && app.hl !== m.item) || (app.curArea && m.area !== app.curArea);
      ctx.globalAlpha = dim ? 0.22 : 1;
      if (m.flag) {                       // T13: the drawing changed under it in the revision — an orange halo until checked
        ctx.save(); ctx.globalAlpha = 0.9; ctx.strokeStyle = FLAG_COLOR; ctx.lineWidth = 9; ctx.setLineDash([8, 6]);
        if (m.kind === 'count') { const s = S(m.pts[0]); ctx.beginPath(); ctx.arc(s.x, s.y, 12, 0, Math.PI * 2); ctx.stroke(); }
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
        ctx.beginPath(); ctx.arc(s.x, s.y, selected ? 7.5 : 6, 0, Math.PI * 2); ctx.fill();
        ctx.lineWidth = 1.5; ctx.strokeStyle = '#ffffff'; ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    drawNotesLayer(ctx, S);
    // typical groups (T16): a dashed box round each group's marks on this sheet, with its name and repeat count
    const gbox = new Map();
    for (const m of model.marksOn(cur.key)) {
      if (!m.group) continue;
      let b = gbox.get(m.group);
      if (!b) gbox.set(m.group, (b = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }));
      for (const p of m.pts) { const q = S(p); b.minX = Math.min(b.minX, q.x); b.minY = Math.min(b.minY, q.y); b.maxX = Math.max(b.maxX, q.x); b.maxY = Math.max(b.maxY, q.y); }
    }
    for (const [gid, b] of gbox) {
      const g = model.group(gid);
      if (!g) continue;
      const pad = 10;
      ctx.save(); ctx.globalAlpha = 0.7; ctx.strokeStyle = colors.ink; ctx.lineWidth = 1; ctx.setLineDash([6, 4]);
      ctx.strokeRect(b.minX - pad, b.minY - pad, b.maxX - b.minX + 2 * pad, b.maxY - b.minY + 2 * pad);
      ctx.restore();
      tag(ctx, { x: (b.minX + b.maxX) / 2, y: b.minY - pad - 10 }, t('group.tag', { name: g.name, n: g.repeat }));
    }
    // several selected: a small square on every corner, no handles to drag
    if (selMore.size) {
      ctx.lineWidth = 1.5; ctx.strokeStyle = colors.action; ctx.fillStyle = colors.sheet;
      for (const id of selIds()) {
        const m = model.mark(id);
        if (m.sheet !== cur.key) continue;
        for (const ring of [m.pts, ...m.holes]) for (const p of ring) { const s = S(p); ctx.fillRect(s.x - 3, s.y - 3, 6, 6); ctx.strokeRect(s.x - 3, s.y - 3, 6, 6); }
      }
    }
    // the selected mark: corner handles and its measurements
    const sm = app.sel && !selMore.size && model.mark(app.sel);
    if (sm && sm.sheet === cur.key) {
      const m = drag && drag.id === sm.id ? { ...sm, pts: drag.pts, holes: drag.holes } : sm;
      ctx.lineWidth = 1.5; ctx.strokeStyle = colors.action; ctx.fillStyle = colors.sheet;
      const hs = coarse ? 7 : 4;                       // corner handles: bigger for fingers (S.8)
      for (const ring of [m.pts, ...m.holes]) for (const p of ring) { const s = S(p); ctx.fillRect(s.x - hs, s.y - hs, 2 * hs, 2 * hs); ctx.strokeRect(s.x - hs, s.y - hs, 2 * hs, 2 * hs); }
      const sc = model.scaleOf(cur.key);
      if (sc && m.kind === 'linear') {
        const r = measureMark(m, sc.ftPerUnit, model.item(m.item));          // rakes and hips read along their slope (T15)
        for (let i = 1; i < m.pts.length; i++) {
          let at = S(segMid(m.pts[i - 1], m.pts[i]));
          if (m.pts[i - 1].b) {                       // an arc: its label sits outside the curve, clear of the bend handle (T11)
            const a = S(m.pts[i - 1]), z = S(m.pts[i]), vx = at.x - (a.x + z.x) / 2, vy = at.y - (a.y + z.y) / 2, l = Math.hypot(vx, vy);
            if (l > 1e-6) at = { x: at.x + vx / l * 18, y: at.y + vy / l * 18 };
          }
          label(ctx, S(m.pts[i - 1]), S(m.pts[i]), ftIn(r.slopedFt[i - 1]), at);
        }
      }
      if (sc && m.kind === 'area') { const r = measureMark(m, sc.ftPerUnit, model.item(m.item)); tag(ctx, S(G.centroid(m.pts)), U.fixed(r.areaSqft, 2) + ' SF'); }
      // T11: a round handle in the middle of each arc (drag to bend), over the labels
      ctx.lineWidth = 1.5; ctx.strokeStyle = colors.action; ctx.fillStyle = colors.sheet;
      for (const h of arcHandles(m)) { const s = S(h.at); ctx.beginPath(); ctx.arc(s.x, s.y, hs + 1, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
    }
    // the draft
    const d = app.draft;
    if (d && d.pts.length) {
      const it = items.get(app.active);
      const hole = app.tool === 'cutout' || app.tool === 'cutcircle';
      const c = app.tool === 'calibrate' || app.tool === 'check' ? colors.layer : hole ? colors.ink : it?.color || colors.ink;
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
      }
      for (const p of d.pts) { const s = S(p); ctx.fillRect(s.x - 3, s.y - 3, 6, 6); }
      if ((app.tool === 'area' || app.tool === 'cutout') && d.pts.length >= 3) { const s = S(d.pts[0]); ctx.beginPath(); ctx.arc(s.x, s.y, closePx(), 0, Math.PI * 2); ctx.lineWidth = 1; ctx.stroke(); }
    }
    if (app.check) {
      ctx.strokeStyle = colors.layer; ctx.lineWidth = 2;
      const a = S(app.check.a), b = S(app.check.b);
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      for (const p of [a, b]) { ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.stroke(); }
      label(ctx, a, b, app.check.text);
    }
    drawAutoCount(ctx, S, line);
    drawPaste(ctx, trace);
    drawSnap(ctx, S);
    // the cursor's crosshair while picking points
    if (app.cursor && app.tool !== 'select') {
      const s = S(app.cursor);
      ctx.strokeStyle = colors.action; ctx.lineWidth = 1;
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
    ctx.fillStyle = colors.sheet; ctx.strokeStyle = colors.ink; ctx.lineWidth = 1;
    ctx.fillRect(at.x - w / 2, at.y - 9, w, 18); ctx.strokeRect(at.x - w / 2, at.y - 9, w, 18);
    ctx.fillStyle = colors.ink; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, at.x, at.y + 0.5);
  }

  // =========================================================================
  // Items

  ui.itemNew.addEventListener('click', () => openItemForm());
  ui.library.addEventListener('click', () => libraryDialog());
  function openItemForm(type) {
    ui.itemForm.hidden = false;
    if (type) ui.itemForm.elements.type.value = type;
    ui.itemForm.elements.name.focus();
  }
  ui.itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = ui.itemForm.elements.name.value.trim();
    if (!name) { ui.itemForm.elements.name.focus(); return; }
    const type = ui.itemForm.elements.type.value;
    const id = model.addItem({ name, type, waste: settings.waste });
    ui.itemForm.reset(); ui.itemForm.elements.type.value = type; ui.itemForm.hidden = true;
    setActive(id);
    status(t('item.ready.' + type, { item: name }));
  });
  ui.itemForm.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); ui.itemForm.hidden = true; } });

  function setActive(id, highlight = true) {
    app.active = id;
    if (highlight) app.hl = id;
    renderItems(); renderItemProps(); renderSheets(); renderQty();
    view.overlayOnly();
  }
  /** Click an item: highlight its marks everywhere (again: stop) and jump to a sheet that has them. */
  function focusItem(id) {
    if (app.hl === id && app.active === id) { app.hl = null; renderItems(); renderSheets(); renderQty(); view.overlayOnly(); return; }
    setActive(id);
    const marks = model.state.marks.filter((m) => m.item === id);
    if (marks.length && !marks.some((m) => m.sheet === cur?.key)) {
      const target = sheets.find((s) => marks.some((m) => m.sheet === s.key));
      if (target) showSheet(target.key);
      else status(t('item.marks.closed'));
    }
  }

  const qtyLabel = (it) => {
    const t = qmap.get(it.id);
    if (!t) return '';
    const main = U.fixed(itemQty(it, t), it.type === 'count' ? 0 : 2) + ' ' + U.UNITS[it.unit].label;
    // T8: a second condition's quantity follows the main one ("120.00 SF + 4 EA")
    return [main, ...(it.conds || []).map((c) => U.fixed(condQty(c, t.conds?.[c.kind]), c.kind === 'count' ? 0 : 2) + ' ' + U.UNITS[c.unit].label)].join(' + ');
  };

  function renderItems() {
    ui.itemsEmpty.hidden = model.state.items.length > 0;
    ui.items.replaceChildren(...model.state.items.map((it) => el('li', {},
      el('button', { type: 'button', className: 'tc-item' + (app.hl === it.id ? ' is-hl' : ''), 'aria-pressed': String(app.active === it.id), dataset: { item: it.id }, title: t('item.button.title'), onclick: () => focusItem(it.id) },
        el('span', { className: 'tc-chip', style: { background: it.color } }),
        icon(TYPE_ICONS[it.type]),
        el('span', { className: 'tc-item-name' }, it.name),
        el('span', { className: 'tc-item-qty' }, qtyLabel(it))))));
  }

  /** Keep focus (and the caret) in a re-rendered panel. */
  function keepFocus(container, render) {
    const a = container.ownerDocument.activeElement;   // the panel may be in the panels window
    const key = a && container.contains(a) ? a.dataset.field : null;
    const sel = key && 'selectionStart' in a ? [a.selectionStart, a.selectionEnd] : null;
    render();
    if (!key) return;
    const n = container.querySelector('[data-field="' + CSS.escape(key) + '"]');
    if (n) { n.focus({ preventScroll: true }); if (sel && n.setSelectionRange) try { n.setSelectionRange(...sel); } catch { /* not a text field */ } }
  }

  const fieldRow = (label, input, err) => [el('label', { for: input.id }, label), input, err ? el('p', { className: 'tc-field-err' }, err) : null];
  const textInput = (id, field, value, onCommit, extra = {}) => {
    const n = el('input', { type: 'text', className: 'tc-input', id, dataset: { field }, value, autocomplete: 'off', spellcheck: false, ...extra });
    n.addEventListener('change', () => onCommit(n.value, n));
    n.addEventListener('keydown', (e) => { if (e.key === 'Enter') n.blur(); });
    return n;
  };

  function renderItemProps() {
    const it = app.active && model.item(app.active);
    ui.itemSec.hidden = !it;
    if (!it) { ui.itemProps.replaceChildren(); return; }
    keepFocus(ui.itemProps, () => buildItemProps(it));
  }

  /** T18: labor by crew — production per crew-hour, crew size, wage per worker-hour — and what it comes to. */
  function crewFields(it, commit, fail) {
    const unit = U.UNITS[it.unit].label;
    const on = el('input', { type: 'checkbox', id: 'tc-i-crew', dataset: { field: 'crew' }, checked: !!it.crew });
    on.addEventListener('change', () => commit(on.checked ? { crew: { prod: 10, size: 2, wage: it.crew?.wage ?? 0 } } : { crew: null }, t('undo.crew')));
    const out = [el('span', { className: 'k' }, t('crew.h')), el('label', { className: 'tc-check', title: t('crew.title') }, on, ' ' + t('crew.on'))];
    if (!it.crew) return out;
    const c = it.crew;
    const num = (v) => { const s2 = String(v).trim().replace(/,/g, ''); return /^\d*\.?\d+$/.test(s2) ? Number(s2) : NaN; };
    const prod = textInput('tc-i-crew-prod', 'crew-prod', String(+c.prod.toFixed(4)), (v, n) => { const x = num(v); if (!(x > 0 && x < 1e7)) return fail(n, t('crew.err.prod')); commit({ crew: { ...c, prod: x } }, t('undo.crew')); }, { inputmode: 'decimal' });
    const size = textInput('tc-i-crew-size', 'crew-size', String(c.size), (v, n) => { const x = num(v); if (!(Number.isInteger(x) && x >= 1 && x <= 1000)) return fail(n, t('crew.err.size')); commit({ crew: { ...c, size: x } }, t('undo.crew')); }, { inputmode: 'numeric' });
    const wage = textInput('tc-i-crew-wage', 'crew-wage', U.rateInput(c.wage), (v, n) => { const r = U.parseRate(v); if (!r.ok) return fail(n, r.error); commit({ crew: { ...c, wage: r.rate4 } }, t('undo.crew')); }, { inputmode: 'decimal' });
    out.push(...fieldRow(t('crew.prod', { unit }), prod), ...fieldRow(t('crew.size'), size), ...fieldRow(t('crew.wage'), wage));
    const row = est.rows.find((r) => r.kind === 'item' && r.itemId === it.id);
    if (row?.work) out.push(el('p', { className: 'tc-note span', dataset: { crewSum: '' } }, t('crew.sum', { hours: U.fixed(row.work.hours, 1), wh: U.fixed(row.work.workerHours, 1), days: U.fixed(row.work.days, 1), lab: U.formatCents(row.labExt), rate: U.formatRate(row.lab), unit })));
    return out;
  }

  /** T8: the item's second conditions — a check box per other kind of mark, and its unit when on. */
  function condFields(it) {
    const box = el('div', { className: 'tc-also', role: 'group', 'aria-labelledby': 'tc-i-also-l' });
    for (const k of TYPES.filter((x) => x !== it.type)) {
      const c = it.conds?.find((x) => x.kind === k);
      const n = c ? model.state.marks.filter((m) => m.item === it.id && m.kind === k).length : 0;
      const cb = el('input', { type: 'checkbox', id: 'tc-i-also-' + k, dataset: { field: 'cond:' + k }, checked: !!c, disabled: n > 0 });
      cb.addEventListener('change', () => { try { model.setCond(it.id, k, cb.checked); } catch (err) { status(err.message); renderItemProps(); } });
      const row = el('div', { className: 'tc-also-row' }, el('label', { className: 'tc-check', title: n ? t('item.cond.locked', { n }) : t('item.cond.title', { type: TYPE_LABELS[k].toLowerCase() }) }, cb, ' ' + TYPE_LABELS[k]));
      if (c) {
        const u = el('select', { className: 'tc-select', id: 'tc-i-also-unit-' + k, dataset: { field: 'cond-unit:' + k }, 'aria-label': t('item.cond.unit', { type: TYPE_LABELS[k] }) },
          U.UNITS_FOR[k].map((x) => el('option', { value: x, selected: x === c.unit }, U.UNITS[x].label)));
        u.addEventListener('change', () => model.updateCond(it.id, k, { unit: u.value }, t('undo.item.unit')));
        row.append(u);
      }
      box.append(row);
    }
    return box;
  }

  function buildItemProps(it) {
    ui.itemH.textContent = t('item.h.name', { item: it.name });
    const id = it.id;
    const nMarks = model.state.marks.filter((m) => m.item === id && m.kind === it.type).length;
    const lu = U.lengthUnitOf(it.unit);
    const fail = (input, msg) => { input.classList.add('is-invalid'); status(msg, 8000); };
    const commit = (patch, label) => { try { model.updateItem(id, patch, label); } catch (err) { status(err.message); renderItemProps(); } };

    const name = textInput('tc-i-name', 'name', it.name, (v, n) => { if (!v.trim()) return fail(n, t('item.err.name')); commit({ name: v }, t('undo.item.rename')); }, { maxlength: 200 });
    const type = el('select', { className: 'tc-select', id: 'tc-i-type', dataset: { field: 'type' }, disabled: nMarks > 0, title: nMarks ? t('item.type.locked') : '' },
      TYPES.map((ty) => el('option', { value: ty, selected: ty === it.type }, TYPE_LABELS[ty])));
    type.addEventListener('change', () => commit({ type: type.value, unit: U.DEFAULT_UNIT[type.value] }, t('undo.item.type')));
    const color = el('input', { type: 'color', className: 'tc-input', id: 'tc-i-color', dataset: { field: 'color' }, value: it.color.toLowerCase() });
    color.addEventListener('change', () => commit({ color: color.value }, t('undo.item.color')));
    const unit = el('select', { className: 'tc-select', id: 'tc-i-unit', dataset: { field: 'unit' } }, U.UNITS_FOR[it.type].map((u) => el('option', { value: u, selected: u === it.unit }, t('unit.option', { unit: U.UNITS[u].label, name: U.UNITS[u].name }))));
    unit.addEventListener('change', () => commit({ unit: unit.value }, t('undo.item.unit')));

    const rows = [...fieldRow(t('item.f.name'), name), ...fieldRow(t('item.f.type'), type), ...fieldRow(t('item.f.color'), color), ...fieldRow(t('item.f.unit'), unit)];
    rows.push(el('span', { className: 'k', id: 'tc-i-also-l' }, t('item.f.also')), condFields(it));
    if (it.type !== 'count') {
      const hv = it.heightFt ? (lu === 'm' ? U.fixed(it.heightFt * U.M_PER_FT, 3) + ' m' : U.formatFtIn(it.heightFt)) : '';
      const h = textInput('tc-i-height', 'height', hv, (v, n) => {
        if (!v.trim()) return commit({ heightFt: 0 }, t('undo.item.height'));
        const r = U.parseLength(v, { defaultUnit: lu });
        if (!r.ok) return fail(n, r.error);
        commit({ heightFt: r.ft }, t('undo.item.height'));
      }, { placeholder: lu === 'm' ? '3.0 m' : '9\'-0"' });
      rows.push(...fieldRow(it.type === 'linear' ? t('item.f.height') : t('item.f.depth'), h));
    }
    if (it.type === 'area') rows.push(...backoutFields(it));
    if (it.type !== 'count') rows.push(...pitchFields(it));
    const shape = it.type !== 'count' ? el('div', { className: 'tc-props' }, shapeFields(it, lu, fail)) : null;
    const waste = textInput('tc-i-waste', 'waste', U.percentInput(it.waste), (v, n) => { const r = U.parsePercent(v); if (!r.ok) return fail(n, r.error); commit({ waste: r.bp }, t('undo.item.waste')); }, { inputmode: 'decimal' });
    const mat = textInput('tc-i-mat', 'mat', U.rateInput(it.mat), (v, n) => { const r = U.parseRate(v); if (!r.ok) return fail(n, r.error); commit({ mat: r.rate4 }, t('undo.item.mat')); }, { inputmode: 'decimal' });
    const lab = textInput('tc-i-lab', 'lab', U.rateInput(it.lab), (v, n) => { const r = U.parseRate(v); if (!r.ok) return fail(n, r.error); commit({ lab: r.rate4 }, t('undo.item.lab')); }, { inputmode: 'decimal' });
    if (it.crew) { lab.disabled = true; lab.title = t('crew.lab.locked'); lab.value = U.rateInput(est.rows.find((r) => r.kind === 'item' && r.itemId === it.id)?.lab ?? 0); }
    rows.push(...fieldRow(t('item.f.waste'), waste), ...fieldRow(t('item.f.mat', { unit: U.UNITS[it.unit].label }), mat), ...fieldRow(t('item.f.lab', { unit: U.UNITS[it.unit].label }), lab));
    rows.push(...crewFields(it, commit, fail));

    // measured values
    const tq = qmap.get(id);
    const v = itemVars(it, tq);
    const out = [el('p', { className: 'tc-props-sub' }, t('item.measured'))];
    const kv = (k, val) => [el('span', { className: 'k' }, k), el('span', { className: 'v' }, val)];
    const lunit = lu === 'm' ? 'm' : 'LF';
    if (it.type === 'linear') {
      out.push(...kv(t('item.m.length'), U.fixed(v.L, 2) + ' ' + lunit + (lu === 'ft' ? '  (' + ftIn(tq.lengthFt) + ')' : '')), ...kv(t('item.m.runs'), String(v.N)));
      if (it.heightFt > 0) out.push(...kv(t('item.m.wall'), U.fixed(v.A, 2) + ' ' + U.areaUnitOf(it.unit)));
    } else if (it.type === 'area') {
      out.push(...kv(t('item.m.area'), U.fixed(v.A, 2) + ' ' + U.UNITS[it.unit].label), ...kv(t('item.m.perimeter'), U.fixed(v.P, 2) + ' ' + lunit), ...kv(t('item.m.areas'), String(v.N)));
    } else out.push(...kv(t('item.m.count'), String(v.N)));
    if (tq.unscaled) out.push(el('p', { className: 'tc-field-err' }, t('item.unscaled', { n: tq.unscaled })));

    // assembly
    const comps = el('div', { className: 'tc-comps' },
      el('div', { className: 'tc-comps-head' }, el('h3', { className: 'tc-h' }, t('asm.h')),
        el('button', { type: 'button', className: 'tc-linkbtn', dataset: { compAdd: id }, onclick: () => { const c = model.addComponent(id, { name: t('comp.default'), unit: 'EA', formula: VARS[it.type][0] }); setTimeout(() => ui.itemProps.querySelector('[data-field="c:' + c + ':name"]')?.select(), 0); } }, icon('plus-lg'), ' ' + t('asm.add'))),
      el('p', { className: 'tc-vars' }, t('asm.vars.a'), ' ', VARS[it.type].flatMap((k, i) => [i ? ', ' : '', el('code', {}, k), ' ' + VAR_HELP[it.type][k]]), t('asm.vars.b'), ' ',
        el('code', {}, it.type === 'linear' ? 'ceil(L / 1.333) + N' : it.type === 'area' ? 'ceil(A / 32 * 1.1)' : 'N * 2'), '.'),
      it.components.map((c) => compEditor(it, c, v)));

    const actions = el('div', { className: 'tc-actions' },
      el('button', { type: 'button', className: 'tc-linkbtn', dataset: { itemCopy: id }, onclick: () => copyItem(id) }, t('item.copy')),
      el('button', { type: 'button', className: 'tc-linkbtn', dataset: { itemDup: id }, onclick: () => duplicateItem(id) }, t('item.dup')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => model.moveItem(id, -1) }, t('item.up')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => model.moveItem(id, 1) }, t('item.down')),
      el('button', { type: 'button', className: 'tc-linkbtn is-danger', onclick: () => deleteItem(it) }, t('item.delete')));
    ui.itemProps.replaceChildren(el('div', { className: 'tc-props' }, rows), ...(shape ? [shape] : []), el('div', { className: 'tc-props' }, out), comps, actions);
  }

  /** T5: fields that only shape the 3D view — a wall's thickness, base height and opening head; an area's base height. */
  function shapeFields(it, lu, fail) {
    const lenInput = (id, field, ft, ph, onCommit) => textInput(id, field, ft ? (lu === 'm' ? U.fixed(ft * U.M_PER_FT, 3) + ' m' : U.formatFtIn(ft)) : '', (v, n) => {
      if (!v.trim()) return onCommit(0);
      const r = U.parseLength(v, { defaultUnit: lu });
      if (!r.ok) return fail(n, r.error);
      onCommit(r.ft);
    }, { placeholder: ph });
    const set = (k) => (ft) => model.updateItem(it.id, { [k]: ft }, t('undo.item.3d'));
    const out = [el('p', { className: 'tc-props-sub' }, t('item.f.3d'))];
    if (it.type === 'linear') {
      out.push(...fieldRow(t('item.f.thick'), lenInput('tc-i-thick', 'thick', it.thickFt, lu === 'm' ? '0.2 m' : '0\'-6"', set('thickFt'))));
      out.push(...fieldRow(t('item.f.head'), lenInput('tc-i-head', 'head', it.headFt, lu === 'm' ? '2.1 m' : '7\'-0"', set('headFt'))));
    }
    out.push(...fieldRow(t('item.f.base'), lenInput('tc-i-base', 'base', it.baseFt, lu === 'm' ? '0 m' : '0\'-0"', set('baseFt'))));
    return out;
  }

  /** Pitch (T15): an area item's surface, a linear item's rakes or hips. Blank = flat. */
  function pitchFields(it) {
    const out = [];
    const pitchInput = (id, field, value, placeholder, onCommit) => textInput(id, field, value, (v, n) => {
      const r = U.parsePitch(v);
      if (!r.ok) { n.classList.add('is-invalid'); status(t(r.error), 9000); return; }
      onCommit(r.rise);
    }, { placeholder, inputmode: 'decimal', title: t('pitch.title') });
    if (it.type === 'linear') {
      const sel = el('select', { className: 'tc-select', id: 'tc-i-slope', dataset: { field: 'slope' } },
        [['flat', t('slope.flat')], ['rake', t('slope.rake')], ['hip', t('slope.hip')]].map(([v, l]) => el('option', { value: v, selected: (it.slope || 'flat') === v }, l)));
      sel.addEventListener('change', () => model.updateItem(it.id, { slope: sel.value }, t('slope.undo')));
      out.push(...fieldRow(t('slope.label'), sel));
      if (!it.slope) return out;
    }
    out.push(...fieldRow(t('pitch.label'), pitchInput('tc-i-pitch', 'pitch', U.formatPitch(it.pitch || 0), t('pitch.placeholder'), (rise) => model.updateItem(it.id, { pitch: rise }, t('pitch.undo')))));
    return out;
  }

  /** Back-out (T14): this area item's marks take their area out of the chosen area items' marks they overlap. */
  function backoutFields(it) {
    const box = el('input', { type: 'checkbox', id: 'tc-i-backout', checked: !!it.backout, dataset: { field: 'backout' } });
    box.addEventListener('change', () => {
      if (box.checked) {
        const others = model.state.items.filter((x) => x.type === 'area' && x.id !== it.id && !x.backout).map((x) => x.id);
        model.updateItem(it.id, { backout: true, backoutOf: others }, t('backout.undo.on'));
      } else model.updateItem(it.id, { backout: false }, t('backout.undo.off'));
    });
    const out = [el('span', { className: 'k' }), el('label', { className: 'tc-check', for: 'tc-i-backout' }, box, ' ', t('item.backout'))];
    if (!it.backout) return out;
    const targets = model.state.items.filter((x) => x.type === 'area' && x.id !== it.id && !x.backout);
    const of = new Set(it.backoutOf || []);
    const list = targets.length ? el('ul', { className: 'tc-bo-list' }, targets.map((x) => {
      const cb = el('input', { type: 'checkbox', checked: of.has(x.id), dataset: { field: 'bo:' + x.id, backoutOf: x.id } });
      cb.addEventListener('change', () => {
        const next = new Set(it.backoutOf || []);
        if (cb.checked) next.add(x.id); else next.delete(x.id);
        model.updateItem(it.id, { backoutOf: [...next] }, t('backout.undo.of'));
      });
      return el('li', {}, el('label', { className: 'tc-check' }, cb, ' ', el('span', { className: 'tc-chip', style: { background: x.color } }), ' ', x.name));
    })) : el('p', { className: 'tc-note' }, t('item.backout.none'));
    const bad = backouts(model.state).bad.filter((id) => model.mark(id)?.item === it.id).length;
    out.push(el('span', { className: 'k' }, t('item.backout.of')), list);
    if (bad) out.push(el('span', { className: 'k' }), el('p', { className: 'tc-field-err' }, t('item.backout.bad', { n: bad })));
    return out;
  }

  function compEditor(it, c, vars) {
    const key = (f) => 'c:' + c.id + ':' + f;
    const commit = (patch) => model.updateComponent(it.id, c.id, patch);
    const outEl = el('p', { className: 'tc-comp-out' });
    const show = (src) => {
      const p = parse(src, VARS[it.type]);
      let txt, bad = false;
      if (!p.ok) { txt = p.error; bad = true; }
      else { try { txt = '= ' + U.fixed(evaluate(p.ast, vars), 3).replace(/\.?0+$/, '') + ' ' + c.unit; } catch (err) { txt = err.message; bad = true; } }
      outEl.textContent = txt; outEl.classList.toggle('is-err', bad);
    };
    show(c.formula);
    const name = textInput('tc-' + key('name'), key('name'), c.name, (v) => commit({ name: v }), { maxlength: 200 });
    const unit = textInput('tc-' + key('unit'), key('unit'), c.unit, (v) => commit({ unit: v }), { maxlength: 20 });
    const formula = textInput('tc-' + key('formula'), key('formula'), c.formula, (v) => commit({ formula: v }), { maxlength: 500, 'aria-describedby': 'tc-' + key('out') });
    formula.addEventListener('input', () => show(formula.value));
    outEl.id = 'tc-' + key('out');
    const num = (f, v, parser, prop) => textInput('tc-' + key(f), key(f), v, (val, n) => { const r = parser(val); if (!r.ok) { n.classList.add('is-invalid'); status(r.error); return; } commit({ [f]: r[prop] }); }, { inputmode: 'decimal' });
    return el('div', { className: 'tc-comp' },
      el('label', { className: 'wide' }, t('item.f.name'), name), el('label', {}, t('item.f.unit'), unit),
      el('label', { className: 'full' }, t('comp.formula'), formula), outEl,
      el('label', {}, t('item.f.waste'), num('waste', U.percentInput(c.waste), U.parsePercent, 'bp')),
      el('label', {}, t('comp.mat'), num('mat', U.rateInput(c.mat), U.parseRate, 'rate4')),
      el('label', {}, t('comp.lab'), num('lab', U.rateInput(c.lab), U.parseRate, 'rate4')),
      el('button', { type: 'button', className: 'tc-linkbtn is-danger full', onclick: () => model.removeComponent(it.id, c.id) }, t('comp.remove')));
  }

  async function deleteItem(it) {
    const n = model.state.marks.filter((m) => m.item === it.id).length;
    const ok = (await ask(root, {
      title: t('item.del.title', { item: it.name }),
      text: t('item.del.text', { n }),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('item.delete'), 'btn-plot']],
    })) === 'ok';
    if (!ok) return;
    model.removeItem(it.id);
    if (app.active === it.id) app.active = model.state.items[0]?.id || null;
    if (app.hl === it.id) app.hl = null;
    refresh();
  }

  // ---- the selected mark ----
  function renderMarkProps() {
    if (d3.on) d3.view?.setSelection(selIds());
    const m = app.sel && model.mark(app.sel);
    ui.markSec.hidden = !m;
    if (!m) { ui.markProps.replaceChildren(); return; }
    ui.markSec.querySelector('.tc-h').textContent = selMore.size ? t('mark.h.many') : t('mark.h');
    if (selMore.size) { renderMultiProps(); return; }
    const it = model.item(m.item);
    const sc = model.scaleOf(m.sheet);
    const r = measureMark(m, sc?.ftPerUnit, it);
    const kv = (k, val) => [el('span', { className: 'k' }, k), el('span', { className: 'v' }, val)];
    const move = el('select', { className: 'tc-select', id: 'tc-m-item', dataset: { field: 'm-item' } }, model.state.items.filter((i) => kindsOf(i).includes(m.kind)).map((i) => el('option', { value: i.id, selected: i.id === m.item }, i.name)));
    move.addEventListener('change', () => { model.updateMark(m.id, { item: move.value }, t('undo.mark.item')); setActive(move.value, false); });
    const rows = [el('label', { for: 'tc-m-item' }, t('mark.f.item')), move, ...kv(t('mark.f.sheet'), sheetLabel(m.sheet)), ...areaField([m.id]), ...groupField([m.id])];
    const extra = [];
    if (!r) rows.push(...kv(t('item.measured'), t('mark.noscale')));
    else if (m.kind === 'linear') {
      rows.push(...kv(t('mark.f.length'), t('mark.length', { len: ftIn(r.lengthFt), lf: U.fixed(r.lengthFt, 2) })), ...kv(t('mark.f.segments'), String(r.segmentsFt.length)));
      if (r.deducts.length) rows.push(...kv(t('props.deducts'), ftIn(r.deductFt)), ...kv(t('props.drawn'), ftIn(r.grossFt)));
      if (it.heightFt > 0 && it.type === m.kind) rows.push(...kv(t('mark.f.wall'), U.fixed(r.lengthFt * it.heightFt, 2) + ' SF'));
      const ded = new Set(r.deducts);
      const sloped = r.slopes.some((x) => x.k !== 'flat');
      if (sloped) rows.push(...kv(t('props.plan_length'), ftIn(r.planFt)));
      rows.push(...markPitchField(m, it));
      extra.push(el('ol', { className: 'tc-segs' }, r.segmentsFt.map((s, i) => {
        const box = el('input', { type: 'checkbox', checked: ded.has(i), dataset: { field: 'ded:' + i, deductSeg: String(i) } });
        box.addEventListener('change', () => setDeduct(m.id, i, box.checked));
        const own = m.slopes?.[i] || null;
        const kind = el('select', { className: 'tc-select tc-seg-slope', dataset: { field: 'sl:' + i, segSlope: String(i) }, 'aria-label': t('slope.seg.label', { n: i + 1 }) },
          [['', t('slope.item', { kind: t('slope.' + (it.slope || 'flat')) })], ['flat', t('slope.flat')], ['rake', t('slope.rake')], ['hip', t('slope.hip')]].map(([v, l]) => el('option', { value: v, selected: (own?.k || '') === v }, l)));
        kind.addEventListener('change', () => setSegSlope(m.id, i, kind.value || null));
        const len = r.slopes[i].k === 'flat' ? ftIn(s) : t('slope.seg.len', { len: ftIn(r.slopedFt[i]), kind: t('slope.' + r.slopes[i].k).toLowerCase(), pitch: U.formatPitch(r.slopes[i].p) });
        return el('li', { className: ded.has(i) ? 'is-deduct' : '' }, el('span', {}, len + (m.pts[i].b ? ' ' + t('mark.arc') : '')), kind, el('label', { className: 'tc-ded' }, box, ' ', t('props.deduct')));
      })));
    } else if (m.kind === 'area') {
      const cut = it.backout ? 0 : backouts(model.state).cut(m, sc.ftPerUnit) * r.factor;
      rows.push(...kv(t('mark.f.area'), U.fixed(Math.max(0, r.areaSqft - cut), 2) + ' SF'));
      if (cut > 0) rows.push(...kv(t('props.backouts'), '−' + U.fixed(cut, 2) + ' SF'));
      if (r.factor > 1) rows.push(...kv(t('props.plan_area'), U.fixed(Math.max(0, r.planSqft - cut / r.factor), 2) + ' SF'), ...kv(t('props.slope_factor'), U.fixed(r.factor, 4)));
      rows.push(...markPitchField(m, it));
      if (it.backout && !G.isConvex(m.pts)) extra.push(el('p', { className: 'tc-field-err' }, t('backout.mark.convex')));
      if (m.holes.length) rows.push(...kv(t('mark.f.outline'), U.fixed(r.grossSqft, 2) + ' SF'), ...kv(t('mark.f.cutouts'), t('mark.cutouts', { n: m.holes.length, sf: U.fixed(r.cutSqft, 2) })));
      rows.push(...kv(t('mark.f.perimeter'), m.holes.length ? t('mark.perimeter.holes', { len: ftIn(r.perimeterFt) }) : ftIn(r.perimeterFt)));
    } else rows.push(...kv(t('mark.f.count'), '1'));
    if (m.flag) extra.unshift(el('div', { className: 'tc-flag-note' }, el('p', {}, t('flag.note')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { flagChecked: m.id }, onclick: () => { model.clearFlags([m.id]); } }, t('flag.checked'))));
    const actions = el('div', { className: 'tc-actions' },
      m.kind === 'area' ? el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => setTool('cutout') }, t('mark.cutout.add')) : null,
      m.kind === 'area' ? el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => setTool('cutcircle') }, t('mark.cutout.round')) : null,
      m.kind === 'area' && m.holes.length ? el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => model.updateMark(m.id, { holes: m.holes.slice(0, -1) }, t('undo.cutout.remove')) }, t('mark.cutout.remove')) : null,
      el('button', { type: 'button', className: 'tc-linkbtn is-danger', onclick: () => deleteSelected() }, t('mark.delete')));
    keepFocus(ui.markProps, () => ui.markProps.replaceChildren(el('div', { className: 'tc-props' }, rows), ...extra, actions));
  }

  /** Make segment i of a run a deduct, or count it again (one undo step). A run keeps one counted segment. */
  function setDeduct(id, i, on) {
    const m = model.mark(id);
    if (!m || m.kind !== 'linear') return;
    const ded = new Set(m.deducts || []);
    if (on) ded.add(i); else ded.delete(i);
    if (ded.size >= m.pts.length - 1) { status(t('deduct.all'), 9000); renderMarkProps(); return; }
    model.updateMark(id, { deducts: [...ded].sort((a, b) => a - b) }, on ? t('deduct.undo.on') : t('deduct.undo.off'));
  }

  /** A mark's own pitch (T15): blank = its item's. */
  function markPitchField(m, it) {
    if (m.kind === 'linear' && !it.slope && !m.slopes?.some((x) => x && x.k !== 'flat')) return [];
    const n = textInput('tc-m-pitch', 'm-pitch', m.pitch !== undefined ? U.formatPitch(m.pitch) || '0' : '', (v, inp) => {
      if (!v.trim()) { model.updateMark(m.id, { pitch: undefined }, t('pitch.undo')); return; }
      const r = U.parsePitch(v);
      if (!r.ok) { inp.classList.add('is-invalid'); status(t(r.error), 9000); return; }
      model.updateMark(m.id, { pitch: r.rise }, t('pitch.undo'));
    }, { placeholder: it.pitch ? t('pitch.item', { pitch: U.formatPitch(it.pitch) }) : t('pitch.flat'), inputmode: 'decimal', title: t('pitch.title') });
    return [...fieldRow(t('pitch.mark'), n)];
  }
  /** One run segment's slope kind (T15): null = the item's. */
  function setSegSlope(id, i, k) {
    const m = model.mark(id);
    if (!m || m.kind !== 'linear') return;
    const sl = Array.from({ length: m.pts.length - 1 }, (_, j) => m.slopes?.[j] || null);
    sl[i] = k ? { k } : null;
    model.updateMark(id, { slopes: sl }, t('slope.undo'));
  }

  /** Several marks selected: how many of each item, and what can be done with them. */
  function renderMultiProps() {
    const ids = selIds();
    const by = new Map();
    for (const id of ids) { const m = model.mark(id); by.set(m.item, (by.get(m.item) || 0) + 1); }
    const kv = (k, val) => [el('span', { className: 'k' }, k), el('span', { className: 'v' }, val)];
    const rows = [...kv(t('mark.f.marks'), String(ids.length)), ...[...by].flatMap(([item, n]) => kv(model.item(item)?.name || t('mark.f.item'), String(n))), ...areaField(ids), ...groupField(ids)];
    const actions = el('div', { className: 'tc-actions' },
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => copySelection() }, t('edit.copy')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => duplicateSelection() }, t('edit.duplicate')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => cutSelection() }, t('edit.cut')),
      el('button', { type: 'button', className: 'tc-linkbtn is-danger', onclick: () => deleteSelected() }, t('mark.delete.many')));
    ui.markProps.replaceChildren(el('div', { className: 'tc-props' }, rows), actions);
  }

  function deleteSelected() {
    if (app.selNote) { const k = model.note(app.selNote)?.kind; model.removeNote(app.selNote); app.selNote = null; status(t('note.deleted', { kind: t('tool.' + (k || 'note')).toLowerCase(), mod: modKey })); return; }
    const ids = selIds();
    if (!ids.length) { status(t('del.none')); return; }
    model.removeMarks(ids);
    app.sel = null;
    status(t('del.done', { n: ids.length, mod: modKey }));
  }

  // =========================================================================
  // Clipboard: copy, cut, paste (follows the pointer), paste in place, duplicate, select all / none

  const CLIP_KEY = 'takeoffcraft.clipboard';
  const tabId = Math.random().toString(36).slice(2, 10);
  let clipMem = null;          // { wire, clip }: this tab's last copy
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || '');
  const modKey = isMac ? 'Cmd' : 'Ctrl';
  if (isMac) for (const k of root.querySelectorAll('.tc-menu-list kbd')) k.textContent = k.textContent.replace('Ctrl+', 'Cmd+');

  function sheetCtx(s = cur) { return s ? { view: s.info.view, userUnit: s.info.userUnit, source: tabId } : { source: tabId }; }
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
    const wire = copyMarks(model.state, ids, sheetCtx(sheets.find((x) => x.key === model.mark(ids[0]).sheet) || cur));
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
    if (!cur) return t('clip.err.nosheet');
    const sc = model.scaleOf(cur.key);
    const why = scaleProblem(clip, sc ? { ftPerUnit: sc.ftPerUnit, label: scaleText(sc, cur.info.userUnit, true) } : null);
    if (why) return why;
    if (inPlace) return sizeProblem(clip, { view: cur.info.view, userUnit: cur.info.userUnit });
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
    if (model.mark(ids[0]).sheet !== cur?.key) { status(t('dup.sheet')); return; }
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
    try { out = pasteClip(model, clip, { sheet: cur.key, dx, dy, label, area: app.curArea }); } catch (err) { status(t('paste.failed', { reason: err.message }), 9000); return; }
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
    if (!cur) { status(t('handoff.nopdf')); return; }
    const ids = model.marksOn(cur.key).map((m) => m.id);
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
      ctx.strokeStyle = ctx.fillStyle = color.get(m.item) || colors.action;
      if (m.kind === 'count') { const s = G.apply(view.matrix, mv(m.pts)[0]); ctx.beginPath(); ctx.arc(s.x, s.y, 6, 0, Math.PI * 2); ctx.stroke(); continue; }
      ctx.beginPath();
      for (const ring of [m.pts, ...(m.kind === 'area' ? m.holes : [])]) trace(mv(ring), m.kind === 'area');
      ctx.stroke();
    }
    ctx.restore();
  }

  // =========================================================================
  // Bid areas (T12): the picker on top of the Items panel, the manage dialog, the mark field, the By area table

  const areaSel = root.querySelector('[data-area-cur]');
  /** What a new mark carries: the current bid area, when one is chosen. */
  const inArea = () => (app.curArea && model.area(app.curArea) ? { area: app.curArea } : {});
  function renderAreas() {
    if (app.curArea && !model.area(app.curArea)) app.curArea = null;
    const areas = model.state.areas || [];
    areaSel.replaceChildren(
      el('option', { value: '' }, t('area.none')),
      ...areas.map((a) => el('option', { value: a.id }, a.alt ? t('qty.alt.row', { name: a.name, kind: t('alt.' + a.alt).toLowerCase() }) : a.name)),
      el('option', { value: '__new' }, t('area.new')),
      ...(areas.length ? [el('option', { value: '__manage' }, t('area.manage'))] : []));
    areaSel.value = app.curArea || '';
    root.querySelector('[data-qty-mode="area"]').hidden = !areas.length;
    if (!areas.length && app.qtyMode === 'area') root.querySelector('[data-qty-mode="item"]').click();
  }
  areaSel.addEventListener('change', async () => {
    const v = areaSel.value;
    if (v === '__new') { areaSel.value = app.curArea || ''; const id = await newArea(); if (id) setCurArea(id); return; }
    if (v === '__manage') { areaSel.value = app.curArea || ''; await manageAreas(); return; }
    setCurArea(v || null);
  });
  function setCurArea(id) {
    app.curArea = id && model.area(id) ? id : null;
    areaSel.value = app.curArea || '';
    status(app.curArea ? t('area.cur', { area: model.area(app.curArea).name }) : t('area.cur.none'));
    view.overlayOnly();
  }
  async function newArea() {
    const input = el('input', { type: 'text', className: 'tc-input', id: 'tc-area-name', maxlength: 200, autocomplete: 'off', placeholder: t('area.name.placeholder'), dataset: { areaName: '' } });
    let id = null;
    const choice = await ask(root, {
      title: t('area.new.title'), text: t('area.new.text'),
      body: el('div', { className: 'tc-ask-field' }, el('label', { for: 'tc-area-name' }, t('area.name')), input),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('btn.create'), 'btn-plot']],
      focus: '[data-area-name]',
      onOk: () => (input.value.trim() ? null : t('area.name.empty')),
    });
    if (choice === 'ok') { try { id = model.addArea(input.value); } catch (err) { status(err.message, 9000); } }
    return id;
  }
  async function manageAreas() {
    const list = el('ol', { className: 'tc-area-list', dataset: { areaList: '' } });
    const fill = () => {
      const areas = model.state.areas || [];
      list.replaceChildren(...(areas.length ? areas.map((a, i) => {
        const name = el('input', { type: 'text', className: 'tc-input', value: a.name, maxlength: 200, 'aria-label': t('area.name'), dataset: { areaRename: a.id } });
        name.addEventListener('change', () => { if (name.value.trim()) model.renameArea(a.id, name.value); else name.value = a.name; });
        const btn = (icn, label, fn, off = false) => el('button', { type: 'button', className: 'tc-linkbtn', title: label, 'aria-label': label, disabled: off, onclick: () => { fn(); fill(); } }, icon(icn));
        const alt = el('select', { className: 'tc-select', 'aria-label': t('alt.label', { name: a.name }), title: t('alt.title'), dataset: { areaAlt: a.id } },
          ['', 'add', 'deduct'].map((v) => el('option', { value: v, selected: (a.alt || '') === v }, t(v ? 'alt.' + v + '.long' : 'alt.base'))));
        alt.addEventListener('change', () => model.setAreaAlt(a.id, alt.value || null));
        return el('li', {}, name, alt, btn('arrow-up', t('area.up'), () => model.moveArea(a.id, -1), i === 0), btn('arrow-down', t('area.down'), () => model.moveArea(a.id, 1), i === areas.length - 1),
          el('button', { type: 'button', className: 'tc-linkbtn is-danger', title: t('area.delete'), 'aria-label': t('area.delete'), dataset: { areaDelete: a.id }, onclick: () => { model.removeArea(a.id); fill(); } }, icon('trash')));
      }) : [el('li', { className: 'tc-note' }, t('area.manage.none'))]));
    };
    fill();
    const add = el('input', { type: 'text', className: 'tc-input', maxlength: 200, placeholder: t('area.name.placeholder'), 'aria-label': t('area.name'), dataset: { areaAdd: '' } });
    const addBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { if (add.value.trim()) { model.addArea(add.value); add.value = ''; fill(); add.focus(); } } }, t('area.add'));
    add.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addBtn.click(); } });
    await ask(root, {
      title: t('area.manage.title'), text: t('area.manage.text'),
      body: el('div', {}, list, el('div', { className: 'tc-area-add' }, add, addBtn)),
      buttons: [['ok', t('area.done'), 'btn-plot']],
      focus: '[data-area-add]',
    });
    renderAreas();
  }
  /** The selected marks' bid area field (props panel): a select that moves them (one undo step). */
  function areaField(ids) {
    const areas = model.state.areas || [];
    if (!areas.length) return [];
    const marks = ids.map((id) => model.mark(id)).filter(Boolean);
    const one = new Set(marks.map((m) => m.area || '')).size === 1 ? (marks[0]?.area || '') : null;
    const sel = el('select', { className: 'tc-select', id: 'tc-m-area', dataset: { field: 'm-area' } },
      one === null ? el('option', { value: '__mixed', selected: true, disabled: true }, '—') : null,
      el('option', { value: '', selected: one === '' }, t('area.none')),
      areas.map((a) => el('option', { value: a.id, selected: one === a.id }, a.name)));
    sel.addEventListener('change', () => {
      const area = sel.value || null;
      if (model.setMarksArea(marks.map((m) => m.id), area)) status(t('area.moved', { n: marks.length, area: area ? model.area(area).name : t('area.none') }));
    });
    return [el('label', { for: 'tc-m-area' }, t('props.area')), sel];
  }
  // ---- markups (T22): notes, clouds and highlights with a status; never counted ----
  const NOTE_TOOLS = new Set(['note', 'cloud', 'highlight']);
  async function askNoteText(title, value = '') {
    const ta = el('textarea', { className: 'tc-input', rows: 4, maxlength: 2000, id: 'tc-note-text', dataset: { noteText: '' } });
    ta.value = value;
    let text = null;
    const choice = await ask(root, {
      title, body: el('div', {}, el('label', { for: 'tc-note-text' }, t('note.f.text')), ta),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('note.add'), 'btn-plot']], focus: '#tc-note-text',
      onOk: () => { text = ta.value; return null; },
    });
    return choice === 'ok' ? text : null;
  }
  async function noteAt(p) {
    const sheet = cur;
    const text = await askNoteText(t('note.new.note'));
    if (text === null || cur !== sheet) return;
    if (!text.trim()) { status(t('note.err.empty')); return; }
    app.selNote = model.addNote({ kind: 'note', sheet: sheet.key, pts: [p], text });
    renderNoteProps();
    status(t('note.added.note'));
  }
  async function boxNote(kind, a, b) {
    const sheet = cur;
    const sa = view.toScreen(a), sb = view.toScreen(b);
    if (Math.abs(sa.x - sb.x) < 4 || Math.abs(sa.y - sb.y) < 4) { status(t('note.err.small')); view.overlayOnly(); return; }
    const text = await askNoteText(t('note.new.' + kind));
    if (text === null || cur !== sheet) { view.overlayOnly(); return; }
    app.selNote = model.addNote({ kind, sheet: sheet.key, pts: [a, b], text });
    renderNoteProps();
    status(t('note.added.' + kind));
  }
  /** The markup under a point (the topmost): a note's pin, or inside a cloud's or highlight's box. */
  function noteHit(p) {
    if (!cur) return null;
    const s = view.toScreen(p);
    const list = model.notesOn(cur.key);
    for (let i = list.length - 1; i >= 0; i--) {
      const n = list[i];
      if (n.kind === 'note') { const q = view.toScreen(n.pts[0]); if (Math.hypot(q.x - s.x, q.y - s.y) <= hitPx() + 4) return n; continue; }
      const a = view.toScreen(n.pts[0]), b = view.toScreen(n.pts[1]);
      if (s.x >= Math.min(a.x, b.x) - 3 && s.x <= Math.max(a.x, b.x) + 3 && s.y >= Math.min(a.y, b.y) - 3 && s.y <= Math.max(a.y, b.y) + 3) return n;
    }
    return null;
  }
  function renderNoteProps() {
    const n = app.selNote && model.note(app.selNote);
    if (app.selNote && !n) app.selNote = null;
    ui.noteSec.hidden = !n;
    if (!n) { ui.noteProps.replaceChildren(); return; }
    keepFocus(ui.noteProps, () => {
      const ta = el('textarea', { className: 'tc-input', id: 'tc-n-text', rows: 4, maxlength: 2000, dataset: { field: 'note-text' } });
      ta.value = n.text;
      ta.addEventListener('change', () => model.updateNote(n.id, { text: ta.value }));
      const st = el('select', { className: 'tc-select', id: 'tc-n-status', dataset: { field: 'note-status' } }, ['open', 'answered', 'closed'].map((k) => el('option', { value: k, selected: n.status === k }, t('note.status.' + k))));
      st.addEventListener('change', () => model.updateNote(n.id, { status: st.value }, t('undo.note.status')));
      const del = el('button', { type: 'button', className: 'tc-linkbtn is-danger', dataset: { noteDelete: n.id } }, icon('trash'), ' ' + t('note.delete'));
      del.addEventListener('click', () => { model.removeNote(n.id); app.selNote = null; });
      ui.noteProps.replaceChildren(el('div', { className: 'tc-props' },
        el('span', { className: 'k' }, t('note.f.kind')), el('span', { className: 'v' }, t('tool.' + n.kind)),
        el('span', { className: 'k' }, t('mark.f.sheet')), el('span', { className: 'v' }, sheetLabel(n.sheet)),
        el('label', { for: 'tc-n-status' }, t('note.f.status')), st,
        el('label', { for: 'tc-n-text', className: 'span' }, t('note.f.text')), el('div', { className: 'span' }, ta)), el('p', {}, del));
    });
  }
  function renderNotes() {
    const all = model.state.notes || [];
    ui.notesSec.hidden = !all.length;
    if (!all.length) { ui.notes.replaceChildren(); return; }
    const open = all.filter((n) => n.status === 'open').length;
    ui.notesH.textContent = t('notes.h.n', { n: all.length, open });
    const list = ui.notesOpen.checked ? all.filter((n) => n.status === 'open') : all;
    ui.notes.replaceChildren(...list.map((n) => {
      const b = el('button', { type: 'button', className: 'tc-note-row' + (app.selNote === n.id ? ' is-sel' : ''), dataset: { noteRow: n.id } },
        el('span', { className: 'tc-note-dot', style: { background: NOTE_COLORS[n.kind === 'note' ? n.status : n.kind] } }),
        icon(n.kind === 'note' ? 'chat-left-text' : n.kind === 'cloud' ? 'cloud' : 'highlighter'),
        el('span', { className: 'tc-note-text' }, (n.text.split('\n')[0] || t('note.untitled')).slice(0, 80)),
        el('span', { className: 'tc-note-st is-' + n.status }, t('note.status.' + n.status)));
      b.addEventListener('click', async () => { if (n.sheet !== cur?.key) await showSheet(n.sheet); app.sel = null; app.selNote = n.id; renderMarkProps(); renderNoteProps(); renderNotes(); view.overlayOnly(); });
      return el('li', {}, b);
    }));
  }
  ui.notesOpen.addEventListener('change', renderNotes);
  /** Markups on the open sheet, under the marks' handles (drawOverlay). */
  function drawNotesLayer(ctx, S) {
    for (const n of model.notesOn(cur.key)) {
      const sel = app.selNote === n.id;
      ctx.save();
      if (n.kind === 'note') {
        const s = S(n.pts[0]);
        ctx.fillStyle = NOTE_COLORS[n.status];
        ctx.beginPath(); ctx.arc(s.x, s.y, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffffff'; ctx.font = '700 11px Archivo, system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('!', s.x, s.y + 0.5);   // i18n-ignore: a symbol
        const line = (n.text.split('\n')[0] || '').slice(0, 40);
        if (line) { ctx.font = '600 12px Archivo, system-ui, sans-serif'; const w = ctx.measureText(line).width + 10; ctx.fillStyle = colors.sheet; ctx.strokeStyle = NOTE_COLORS[n.status]; ctx.lineWidth = 1; ctx.fillRect(s.x + 12, s.y - 9, w, 18); ctx.strokeRect(s.x + 12, s.y - 9, w, 18); ctx.fillStyle = colors.ink; ctx.textAlign = 'left'; ctx.fillText(line, s.x + 17, s.y + 0.5); }
        if (sel) { ctx.strokeStyle = colors.action; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(s.x, s.y, 12, 0, Math.PI * 2); ctx.stroke(); }
      } else {
        const a = S(n.pts[0]), b = S(n.pts[1]);
        const x0 = Math.min(a.x, b.x), y0 = Math.min(a.y, b.y), x1 = Math.max(a.x, b.x), y1 = Math.max(a.y, b.y);
        if (n.kind === 'highlight') { ctx.globalAlpha = 0.35; ctx.fillStyle = NOTE_COLORS.highlight; ctx.fillRect(x0, y0, x1 - x0, y1 - y0); ctx.globalAlpha = 1; }
        else {
          ctx.strokeStyle = n.status === 'closed' ? NOTE_COLORS.closed : NOTE_COLORS.cloud; ctx.lineWidth = 2;
          ctx.beginPath();
          cloudPath(x0, y0, x1, y1, Math.max(10, Math.min(24, Math.min(x1 - x0, y1 - y0) / 4)), (op, ...v) => (op === 'M' ? ctx.moveTo(...v) : ctx.bezierCurveTo(...v)));
          ctx.closePath(); ctx.stroke();
        }
        const line = (n.text.split('\n')[0] || '').slice(0, 40);
        if (line) tag(ctx, { x: (x0 + x1) / 2, y: y0 - 16 }, line);
        if (sel) { ctx.strokeStyle = colors.action; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]); ctx.strokeRect(x0 - 6, y0 - 6, x1 - x0 + 12, y1 - y0 + 12); }
      }
      ctx.restore();
    }
    if (app.noteStart && app.cursor && (app.tool === 'cloud' || app.tool === 'highlight')) {
      const a = S(app.noteStart), b = S(app.cursor);
      ctx.save(); ctx.strokeStyle = app.tool === 'cloud' ? NOTE_COLORS.cloud : colors.ink; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4]);
      ctx.strokeRect(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.abs(a.x - b.x), Math.abs(a.y - b.y)); ctx.restore();
    }
  }

  // ---- typical groups (T16): marks taken off once, counted `repeat` times ----
  function groupField(ids) {
    const groups = model.state.groups || [];
    const marks = ids.map((id) => model.mark(id)).filter(Boolean);
    const one = new Set(marks.map((m) => m.group || '')).size === 1 ? (marks[0]?.group || '') : null;
    const sel = el('select', { className: 'tc-select', id: 'tc-m-group', dataset: { field: 'm-group' }, title: t('group.field.title') },
      one === null ? el('option', { value: '__mixed', selected: true, disabled: true }, '—') : null,
      el('option', { value: '', selected: one === '' }, t('group.none')),
      groups.map((g) => el('option', { value: g.id, selected: one === g.id }, t('group.option', { name: g.name, n: g.repeat }))),
      el('option', { value: '__new' }, t('group.new')));
    sel.addEventListener('change', async () => {
      if (sel.value === '__new') { await newGroup(marks.map((m) => m.id)); renderMarkProps(); return; }
      const g = sel.value || null;
      if (model.setMarksGroup(marks.map((m) => m.id), g)) status(g ? t('group.moved', { n: marks.length, name: model.group(g).name, k: model.group(g).repeat }) : t('group.left', { n: marks.length }));
    });
    return [el('label', { for: 'tc-m-group' }, t('props.group')), sel];
  }
  /** Ask a name and a repeat count; make the group with these marks in it. */
  async function newGroup(ids) {
    const name = el('input', { type: 'text', className: 'tc-input', id: 'tc-g-name', maxlength: 200, value: t('group.default', { n: (model.state.groups || []).length + 1 }), autocomplete: 'off', dataset: { groupName: '' } });
    const rep = el('input', { type: 'text', className: 'tc-input', id: 'tc-g-repeat', inputmode: 'numeric', value: '2', autocomplete: 'off', dataset: { groupRepeat: '' } });
    let made = null;
    await ask(root, {
      title: t('group.dlg'), text: t('group.dlg.text', { n: ids.length }),
      body: el('div', { className: 'tc-props' }, el('label', { for: 'tc-g-name' }, t('group.f.name')), name, el('label', { for: 'tc-g-repeat' }, t('group.f.repeat')), rep),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('group.dlg.ok'), 'btn-plot']],
      focus: '#tc-g-name',
      onOk: () => {
        const n = readRepeat(rep.value);
        if (!name.value.trim()) return t('group.err.name');
        if (n === null) return t('err.group.repeat', { max: 10000 });
        try { made = model.addGroup(name.value, n, ids); } catch (err) { return err.message; }
        return null;
      },
    });
    if (made) status(t('group.made', { name: model.group(made).name, n: ids.length, k: model.group(made).repeat }), 9000);
    return made;
  }
  const readRepeat = (v) => { const s = String(v).trim().replace(/^[x×]\s*/i, ''); return /^\d{1,5}$/.test(s) && +s >= 1 && +s <= 10000 ? +s : null; };
  function renderGroups() {
    const groups = model.state.groups || [];
    ui.groupsSec.hidden = !groups.length;
    if (!groups.length) { ui.groups.replaceChildren(); return; }
    const count = new Map();
    for (const m of model.state.marks) if (m.group) count.set(m.group, (count.get(m.group) || 0) + 1);
    keepFocus(ui.groups, () => ui.groups.replaceChildren(...groups.map((g) => {
      const name = textInput('tc-g-' + g.id + '-name', 'g:' + g.id + ':name', g.name, (v, n) => { if (!v.trim()) { n.classList.add('is-invalid'); status(t('group.err.name')); return; } model.updateGroup(g.id, { name: v }); }, { maxlength: 200, 'aria-label': t('group.f.name') });
      const rep = textInput('tc-g-' + g.id + '-repeat', 'g:' + g.id + ':repeat', String(g.repeat), (v, n) => { const k = readRepeat(v); if (k === null) { n.classList.add('is-invalid'); status(t('err.group.repeat', { max: 10000 })); return; } model.updateGroup(g.id, { repeat: k }); }, { inputmode: 'numeric', className: 'tc-input tc-g-rep', 'aria-label': t('group.f.repeat.of', { name: g.name }) });
      const pick = el('button', { type: 'button', className: 'tc-linkbtn', title: t('group.select'), 'aria-label': t('group.select'), dataset: { groupSelect: g.id } }, icon('bounding-box'));
      pick.addEventListener('click', () => selectGroup(g.id));
      const del = el('button', { type: 'button', className: 'tc-linkbtn is-danger', title: t('group.delete'), 'aria-label': t('group.delete.of', { name: g.name }), dataset: { groupDelete: g.id } }, icon('trash'));
      del.addEventListener('click', () => { model.removeGroup(g.id); status(t('group.deleted', { name: g.name })); });
      return el('li', { className: 'tc-group', dataset: { group: g.id } }, name, el('span', { className: 'tc-g-x', 'aria-hidden': 'true' }, '×'), rep,
        el('span', { className: 'tc-g-n' }, t('group.marks', { n: count.get(g.id) || 0 })), pick, del);
    })));
  }
  /** Select a group's marks: on this sheet if it has some, else on the first sheet that has. */
  function selectGroup(id) {
    const all = model.state.marks.filter((m) => m.group === id);
    if (!all.length) { status(t('group.empty')); return; }
    const sheet = all.some((m) => m.sheet === cur?.key) ? cur.key : all[0].sheet;
    if (sheet !== cur?.key) showSheet(sheet);
    if (app.tool !== 'select') setTool('select');
    setSelection(all.filter((m) => m.sheet === sheet).map((m) => m.id));
    renderMarkProps(); view.overlayOnly();
  }

  /** Quantities by bid area: each area's items (its own totals and costs) and a subtotal row. */
  function buildAreaTable() {
    const head = [t('qty.area.col'), t('qty.col.item'), t('qty.col.qty'), t('qty.col.unit'), t('qty.col.total')];
    const items = new Map(model.state.items.map((i) => [i.id, i]));
    const body = [];
    for (const { area, est: e } of areaEstimates(model.state)) {
      const name = area ? (area.alt ? t('qty.alt.row', { name: area.name, kind: t('alt.' + area.alt).toLowerCase() }) : area.name) : t('area.none');
      for (const r of e.rows) {
        if ((r.kind !== 'item' && r.kind !== 'condition') || !r.marks) continue;      // a second condition (T8) on its own row
        const it = items.get(r.itemId);
        const tr = el('tr', { className: 'is-item' + (app.hl === r.itemId ? ' is-hl' : ''), dataset: { qtyRow: r.itemId, qtyArea: area?.id || '' } },
          el('td', { className: 'tl' }, name), el('td', { className: 'tl' }, el('span', { className: 'tc-chip', style: { background: it.color } }), r.cond ? t('qty.cond.name', { item: r.name, type: TYPE_LABELS[r.cond].toLowerCase() }) : r.name),
          el('td', {}, U.fixed(r.qty, (r.cond || it.type) === 'count' ? 0 : 2)), el('td', { className: 'tl' }, r.unit), el('td', {}, U.formatCents(r.total)));
        tr.addEventListener('click', () => { setActive(r.itemId); if (area) setCurArea(area.id); });
        body.push(tr);
      }
      body.push(el('tr', { className: 'is-sub', dataset: { qtyAreaTotal: area?.id || '' } }, el('td', { className: 'tl', colSpan: 4 }, t('qty.area.subtotal', { area: name })), el('td', {}, U.formatCents(e.total))));
    }
    // T17: the alternates and what each does to the base bid
    const alts = alternates(model.state);
    if (alts.length) {
      body.push(el('tr', { className: 'is-sub', dataset: { qtyBase: '' } }, el('td', { className: 'tl', colSpan: 4 }, t('qty.alt.base')), el('td', {}, U.formatCents(est.total))));
      for (const a of alts) body.push(el('tr', { className: 'is-alt', dataset: { qtyAlt: a.area.id } }, el('td', { className: 'tl', colSpan: 4 }, t('qty.alt.row', { name: a.area.name, kind: t('alt.' + a.alt).toLowerCase() })), el('td', {}, (a.amount > 0 ? '+' : a.amount < 0 ? '−' : '') + U.formatCents(Math.abs(a.amount)))));
    }
    ui.qtyTable.replaceChildren(el('thead', {}, el('tr', {}, head.map((h, i) => el('th', { scope: 'col', className: [0, 1, 3].includes(i) ? 'tl' : '' }, h)))),
      el('tbody', {}, body.length ? body : el('tr', {}, el('td', { colSpan: head.length, className: 'tl' }, t('qty.area.empty')))));
  }

  // =========================================================================
  // Revision overlay (T13; overlay.js): the older sheet in red over this one, aligned; changes found by comparing their
  // ink; the old sheet's takeoff moved here with the marks whose drawing changed flagged for review.

  const cmpUi = { bar: $('[data-cmpbar]'), summary: $('[data-cmp-summary]'), btn: root.querySelector('[data-act="compare"]'), flagBtn: root.querySelector('[data-act="next-flag"]'), flagCount: root.querySelector('[data-flag-count]') };
  const OLD_RGB = [214, 39, 40], NEW_RGB = [31, 119, 180];       // removed (old only) red, added (new only) blue
  async function openCompare() {
    if (app.cmp) { closeCompare(); return; }
    if (!cur) { status(t('handoff.nopdf')); return; }
    const others = sheets.filter((x) => x.key !== cur.key);
    if (!others.length) { status(t('cmp.pick.none'), 9000); return; }
    const def = others.find((x) => cur.info.number && x.info.number === cur.info.number && x.file !== cur.file) || others.find((x) => x.file !== cur.file && x.info.index === cur.info.index) || others[0];
    const sel = el('select', { className: 'tc-select', id: 'tc-cmp-old', dataset: { cmpOld: '' } }, others.map((x) => el('option', { value: x.key, selected: x === def }, x.title)));
    const choice = await ask(root, {
      title: t('cmp.pick.title'), text: t('cmp.pick.text', { sheet: cur.title }),
      body: el('div', { className: 'tc-ask-field' }, el('label', { for: 'tc-cmp-old' }, t('cmp.pick.label')), sel),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('cmp.pick.ok'), 'btn-plot']], focus: '[data-cmp-old]',
    });
    if (choice !== 'ok') return;
    const old = sheets.find((x) => x.key === sel.value);
    if (!old || old.key === cur.key) { status(t('cmp.same_sheet')); return; }
    await startCompare(old);
  }
  async function startCompare(old, A = IDENTITY) {
    if (d3.on) close3d();
    endPaste(true); cancelDraft();
    if (app.ac) discardAutoCount();
    if (app.tool !== 'select') setTool('select');
    busy(t('cmp.finding'));
    await frame();
    try { app.cmp = { old, A, sheet: cur.key, tint: await tintOf(old), chg: null, align: null }; }
    catch (err) { console.error(err); status(err.message, 9000); return; }
    finally { busy(null); }
    cmpUi.bar.hidden = false;
    cmpUi.btn?.setAttribute('aria-pressed', 'true');
    renderCmp();
    view.overlayOnly();
  }
  function closeCompare() {
    app.cmp = null;
    cmpUi.bar.hidden = true;
    cmpUi.btn?.setAttribute('aria-pressed', 'false');
    view.overlayOnly();
  }
  /** The old sheet rendered once (≤ 4096 px), its ink turned red and see-through: what the overlay draws. */
  async function tintOf(s) {
    const page = await s.file.doc.getPage(s.info.index + 1);
    const px = Math.min(2, 4096 / Math.max(s.info.width, s.info.height));
    const vp = page.getViewport({ scale: px, rotation: s.info.rotate });
    const c = document.createElement('canvas');
    c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
    await page.render({ canvas: c, viewport: vp, background: '#ffffff' }).promise;
    const g = c.getContext('2d', { willReadFrequently: true });
    const im = g.getImageData(0, 0, c.width, c.height), d = im.data;
    for (let i = 0; i < d.length; i += 4) {
      const ink = 1 - (0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]) / 255;
      d[i] = OLD_RGB[0]; d[i + 1] = OLD_RGB[1]; d[i + 2] = OLD_RGB[2]; d[i + 3] = Math.round(Math.min(1, ink * 1.2) * 230);
    }
    g.putImageData(im, 0, 0);
    return { canvas: c, px, T: s.info.transform };
  }
  function drawCompare(ctx) {
    const c = app.cmp;
    if (!c || c.sheet !== cur?.key) return;
    const place = (M, img) => { ctx.save(); ctx.transform(...M); ctx.imageSmoothingEnabled = true; ctx.drawImage(img, 0, 0); ctx.restore(); };
    // screen ← this sheet's user space ← (A) ← the old sheet's user space ← its display ← its raster pixels
    place(G.multiply(view.matrix, G.multiply(c.A, G.multiply(G.invert(c.tint.T), [1 / c.tint.px, 0, 0, 1 / c.tint.px, 0, 0]))), c.tint.canvas);
    if (c.chg?.canvas) place(G.multiply(view.matrix, G.multiply(G.invert(cur.info.transform), [1 / c.chg.px, 0, 0, 1 / c.chg.px, 0, 0])), c.chg.canvas);
    for (const [i, q] of (c.align?.picks || []).entries()) {
      const s = G.apply(view.matrix, i % 2 === 0 ? G.apply(c.A, q) : q);
      ctx.save(); ctx.strokeStyle = i % 2 === 0 ? 'rgb(' + OLD_RGB + ')' : colors.ink; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(s.x, s.y, 7, 0, Math.PI * 2); ctx.moveTo(s.x - 11, s.y); ctx.lineTo(s.x + 11, s.y); ctx.moveTo(s.x, s.y - 11); ctx.lineTo(s.x, s.y + 11); ctx.stroke();
      ctx.restore();
    }
  }
  function renderCmp() {
    const c = app.cmp;
    if (!c) return;
    const n = model.marksOn(c.old.key).length;
    cmpUi.summary.replaceChildren(t('cmp.summary', { old: c.old.title }), c.chg ? ' ' + t('cmp.summary.changes', { n, f: c.chg.flagged.size }) : '');
    cmpUi.summary.title = cmpUi.summary.textContent;     // the bar is one line: the whole text on hover
  }
  // align: four picks (old, new, old, new); an old pick is taken back through the current alignment into old user space
  function startAlign() {
    if (!app.cmp) return;
    app.cmp.align = { picks: [] };
    status(t('cmp.align.step1'), 0);
  }
  function alignPick(p) {
    const c = app.cmp, a = c.align, i = a.picks.length;
    a.picks.push(i % 2 === 0 ? G.apply(G.invert(c.A), p) : p);
    if (a.picks.length < 4) { status(t('cmp.align.step' + (a.picks.length + 1)), 0); view.overlayOnly(); return; }
    const [o1, n1, o2, n2] = a.picks;
    const A = fitTwoPoints(o1, o2, n1, n2);
    c.align = null;
    if (!A) { status(t('cmp.align.bad'), 9000); view.overlayOnly(); return; }
    c.A = A; c.chg = null;
    status(t('cmp.align.done', { scale: scaleOf(A).toFixed(3) }), 9000);
    renderCmp(); view.overlayOnly();
  }
  /** Rasterize both sheets in the new sheet's display space, compare their ink, and find the marks it touches. */
  async function findChanges() {
    const c = app.cmp;
    if (!c) return null;
    busy(t('cmp.finding'));
    await frame();
    try {
      const px = Math.min(2, Math.sqrt(12e6 / (cur.info.width * cur.info.height)));
      const pxOld = Math.min(2, Math.sqrt(12e6 / (c.old.info.width * c.old.info.height)));
      const [nw, ol] = [await rasterize(cur, px), await rasterize(c.old, pxOld)];
      const M = pixelMap(cur.info.transform, c.old.info.transform, c.A, 1);
      // pixelMap at 1 px per unit; the two rasters have their own pixel sizes
      const Mpx = G.multiply([pxOld, 0, 0, pxOld, 0, 0], G.multiply(M, [1 / px, 0, 0, 1 / px, 0, 0]));
      const cm = changeMask(warp(ol, Mpx, nw.w, nw.h), nw, { r: Math.max(1, Math.round(px * 1.5)) });
      const toPx = (q) => { const d = G.apply(cur.info.transform, G.apply(c.A, q)); return { x: d.x * px, y: d.y * px }; };
      const flagged = new Set();
      for (const m of model.marksOn(c.old.key)) if (changed(markChange(m, cm, toPx, { buffer: Math.max(3, px * 4) }), m.kind)) flagged.add(m.id);
      const canvas = document.createElement('canvas');
      canvas.width = cm.w; canvas.height = cm.h;
      const g = canvas.getContext('2d'), im = g.createImageData(cm.w, cm.h);
      for (let i = 0; i < cm.mask.length; i++) {
        const v = cm.mask[i];
        if (!v) continue;
        const rgb = v === 1 ? OLD_RGB : NEW_RGB;
        im.data[i * 4] = rgb[0]; im.data[i * 4 + 1] = rgb[1]; im.data[i * 4 + 2] = rgb[2]; im.data[i * 4 + 3] = 255;
      }
      g.putImageData(im, 0, 0);
      c.chg = { canvas, px, removed: cm.removed, added: cm.added, flagged };
      status(cm.removed + cm.added ? t('cmp.found', { removed: cm.removed.toLocaleString(), added: cm.added.toLocaleString() }) + ' ' + t('cmp.flagged.found', { n: flagged.size }) : t('cmp.same'), 12000);
      renderCmp(); view.overlayOnly();
      return c.chg;
    } catch (err) { console.error(err); status(err.message, 9000); return null; }
    finally { busy(null); }
  }
  /** Move the old sheet's marks here (one undo step), flagging those the changes touch. */
  async function moveTakeoff() {
    const c = app.cmp;
    if (!c) return;
    const ids = model.marksOn(c.old.key).map((m) => m.id);
    if (!ids.length) { status(t('cmp.nomarks'), 9000); return; }
    const chg = c.chg || await findChanges();
    if (!chg || app.cmp !== c) return;
    const oldSc = model.scaleOf(c.old.key);
    const carried = oldSc ? U.scaleRecord({ ...oldSc, method: 'calibrated', preset: null, ftPerUnit: oldSc.ftPerUnit / scaleOf(c.A), label: U.describeScale(oldSc.ftPerUnit / scaleOf(c.A), cur.info.userUnit), cal: null }) : null;
    const asIs = oldSc && Math.abs(scaleOf(c.A) - 1) < 1e-6 ? oldSc : carried;
    const newSc = model.scaleOf(cur.key);
    if (asIs && newSc && Math.abs(newSc.ftPerUnit - asIs.ftPerUnit) / asIs.ftPerUnit > 0.001) {
      const ch = await ask(root, { title: t('cmp.scale.title'), text: t('cmp.scale.text', { old: scaleText(asIs, cur.info.userUnit, true), new: scaleText(newSc, cur.info.userUnit, true) }), buttons: [['cancel', t('cmp.scale.cancel'), 'btn-line'], ['ok', t('cmp.scale.keep'), 'btn-plot']] });
      if (ch !== 'ok') return;
    }
    const n = model.carryMarks(ids, cur.key, (pts) => movePts(pts, c.A), { flagged: chg.flagged, scale: asIs });
    app.sel = null;
    closeCompare();
    status(t('cmp.moved', { n }) + ' ' + t('cmp.flagged', { n: chg.flagged.size }), 15000);
    refresh();
  }
  $('[data-cmp-align]').addEventListener('click', () => startAlign());
  $('[data-cmp-find]').addEventListener('click', () => findChanges());
  $('[data-cmp-move]').addEventListener('click', () => moveTakeoff());
  $('[data-cmp-close]').addEventListener('click', () => closeCompare());

  // ---- flagged marks: count on the sheet bar, next, Checked ----
  function renderFlags() {
    const n = model.state.marks.filter((m) => m.flag).length;
    cmpUi.flagBtn.hidden = !n;
    cmpUi.flagCount.textContent = n ? t('flag.count', { n }) : '';
  }
  async function nextFlag() {
    const list = model.state.marks.filter((m) => m.flag);
    if (!list.length) { status(t('flag.none')); return; }
    const m = list[(list.findIndex((x) => x.id === app.sel) + 1) % list.length];   // the one after the selected (or the first)
    if (m.sheet !== cur?.key) await showSheet(m.sheet);
    const b = G.bounds([...m.pts, ...(m.holes || []).flat()]);
    const pad = Math.max(30, (b.maxX - b.minX + b.maxY - b.minY) * 0.3);
    view.zoomTo({ minX: b.minX - pad, minY: b.minY - pad, maxX: b.maxX + pad, maxY: b.maxY + pad });
    if (app.tool !== 'select') setTool('select');
    app.sel = m.id;
    setActive(m.item, false);
    renderMarkProps();
    status(t('flag.at', { i: list.indexOf(m) + 1, n: list.length }));
  }

  // =========================================================================
  // Quantities table

  for (const b of root.querySelectorAll('[data-qty-mode]')) b.addEventListener('click', () => {
    app.qtyMode = b.dataset.qtyMode;
    for (const x of root.querySelectorAll('[data-qty-mode]')) x.setAttribute('aria-selected', String(x === b));
    renderQty();
  });
  ui.qtyToggle.addEventListener('click', () => {
    const closed = root.classList.toggle('is-qty-closed');
    ui.qtyToggle.setAttribute('aria-expanded', String(!closed));
  });

  function renderQty() {
    const warn = [];
    if (est.errors) warn.push(t('qty.warn.errors', { n: est.errors }));
    if (est.unscaled) warn.push(t('qty.warn.unscaled', { n: est.unscaled }));
    ui.qtyWarn.textContent = warn.length ? t('qty.warn', { list: warn.join(', ') }) : '';
    ui.jobTotal.textContent = model.state.items.length ? t((model.state.areas || []).some((a) => a.alt) ? 'qty.total.base' : 'qty.total', { total: U.formatCents(est.total) }) + (est.hours > 0 ? ' · ' + t('crew.total', { wh: U.fixed(est.workerHours, 1), days: U.fixed(est.days, 1) }) : '') : '';
    keepFocus(ui.qtyTable, () => (app.qtyMode === 'sheet' ? buildSheetTable() : app.qtyMode === 'area' ? buildAreaTable() : buildItemTable()));
  }

  function buildItemTable() {
    const head = ['item', 'qty', 'unit', 'waste', 'withwaste', 'matu', 'labu', 'mat', 'lab', 'total'].map((k) => t('qty.col.' + k));
    const items = new Map(model.state.items.map((i) => [i.id, i]));
    const cell = (r, f, v, parser, prop) => {
      const key = 'q:' + r.itemId + ':' + (r.compId || r.cond || '') + ':' + f;
      const n = el('input', { type: 'text', className: 'tc-input' + (f === 'waste' ? ' pct' : ''), dataset: { field: key }, value: v, inputmode: 'decimal', 'aria-label': t('qty.cell.' + f, { item: r.name }) });
      n.addEventListener('click', (e) => e.stopPropagation());
      n.addEventListener('keydown', (e) => { if (e.key === 'Enter') n.blur(); });
      n.addEventListener('change', () => {
        const p = parser(n.value);
        if (!p.ok) { n.classList.add('is-invalid'); status(p.error); return; }
        if (r.compId) model.updateComponent(r.itemId, r.compId, { [f]: p[prop] });
        else if (r.cond) model.updateCond(r.itemId, r.cond, { [f]: p[prop] }, t('undo.qty.' + f));
        else model.updateItem(r.itemId, { [f]: p[prop] }, t('undo.qty.' + f));
      });
      return el('td', {}, n);
    };
    const body = est.rows.map((r) => {
      const it = items.get(r.itemId);
      const isItem = r.kind === 'item', isCond = r.kind === 'condition';
      const first = el('td', {}, isItem || isCond ? el('span', { className: 'tc-chip', style: { background: it.color } }) : null, isCond ? t('qty.cond.name', { item: r.name, type: TYPE_LABELS[r.cond].toLowerCase() }) : r.name,
        isItem && r.unscaled ? el('span', { className: 'tc-flag', title: t('qty.unscaled.title') }, t('qty.unscaled', { n: r.unscaled })) : null);
      const dec = (isItem && it.type === 'count') || (isCond && r.cond === 'count') ? 0 : 2;
      const tr = el('tr', { className: (isItem ? 'is-item' : isCond ? 'is-item is-cond' : 'is-comp') + (app.hl === r.itemId && isItem ? ' is-hl' : ''), dataset: isItem ? { qtyRow: r.itemId } : isCond ? { qtyCond: r.itemId + ':' + r.cond } : {} }, first,
        r.error ? el('td', { className: 'is-err', colSpan: 2 }, t('x.note.error', { error: r.error })) : [el('td', {}, U.fixed(r.qty, dec)), el('td', { className: 'tl' }, r.unit)],
        cell(r, 'waste', U.percentInput(r.waste), U.parsePercent, 'bp'),
        el('td', {}, r.error ? '' : U.fixed(r.qtyW, dec === 0 && r.waste === 0 ? 0 : 2)),
        cell(r, 'mat', U.rateInput(r.mat), U.parseRate, 'rate4'),
        r.crew ? el('td', { title: t('crew.lab.locked') }, U.rateInput(r.lab)) : cell(r, 'lab', U.rateInput(r.lab), U.parseRate, 'rate4'),
        el('td', {}, r.error ? '' : U.formatCents(r.matExt)), el('td', {}, r.error ? '' : U.formatCents(r.labExt)), el('td', {}, r.error ? '' : U.formatCents(r.total)));
      if (isItem || isCond) tr.addEventListener('click', () => focusItem(r.itemId));
      return tr;
    });
    const foot = model.state.items.length ? el('tfoot', {}, el('tr', {}, el('td', {}, t('x.total')), el('td', { colSpan: 6 }), el('td', {}, U.formatCents(est.matTotal)), el('td', {}, U.formatCents(est.labTotal)), el('td', {}, U.formatCents(est.total)))) : null;
    ui.qtyTable.replaceChildren(el('thead', {}, el('tr', {}, head.map((h) => el('th', { scope: 'col' }, h)))),
      el('tbody', {}, body.length ? body : el('tr', {}, el('td', { colSpan: head.length, className: 'tl' }, t('qty.empty.items')))), ...(foot ? [foot] : []));
  }

  function buildSheetTable() {
    const rows = sheetBreakdown(model.state, qmap);
    const items = new Map(model.state.items.map((i) => [i.id, i]));
    const body = rows.map((r) => {
      const it = items.get(r.itemId);
      const tr = el('tr', { className: 'is-item' + (app.hl === r.itemId ? ' is-hl' : ''), dataset: { qtyRow: r.itemId } },
        el('td', {}, sheetLabel(r.sheet)), el('td', { className: 'tl' }, el('span', { className: 'tc-chip', style: { background: it.color } }), r.cond ? t('qty.cond.name', { item: r.name, type: TYPE_LABELS[r.cond].toLowerCase() }) : r.name),
        el('td', {}, U.fixed(r.qty, (r.cond || it.type) === 'count' ? 0 : 2)), el('td', { className: 'tl' }, r.unit), el('td', {}, String(r.marks)));
      tr.addEventListener('click', () => { setActive(r.itemId); if (r.sheet !== cur?.key) showSheet(r.sheet); });
      return tr;
    });
    ui.qtyTable.replaceChildren(el('thead', {}, el('tr', {}, ['sheet', 'item', 'qty', 'unit', 'marks'].map((k) => el('th', { scope: 'col' }, t('x.head.' + k))))),
      el('tbody', {}, body.length ? body : el('tr', {}, el('td', { colSpan: 5, className: 'tl' }, t('qty.empty.sheets')))));
  }

  // =========================================================================
  // Exports

  async function exportXlsx() {
    if (!model.state.items.length) { status(t('export.empty')); return; }
    const bytesOut = await estimateXlsx(model.state, sheetLabel);
    host.download(bytesOut, safeName(model.state.name) + '.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    status(t('export.xlsx', { file: safeName(model.state.name) + '.xlsx' }) + (est.incomplete ? ' ' + t('export.incomplete') : ''), 9000);
  }
  function exportCsv() {
    if (!model.state.items.length) { status(t('export.empty')); return; }
    host.download('\uFEFF' + estimateCsv(model.state, est), safeName(model.state.name) + '.csv', 'text/csv;charset=utf-8');   // BOM: spreadsheets read m² right
    status(t('export.csv', { file: safeName(model.state.name) + '.csv' }));
  }
  async function exportPdf() {
    const withMarks = files.filter((f) => model.state.marks.some((m) => m.sheet.startsWith(f.hash + ':')) || (model.state.notes || []).some((n) => n.sheet.startsWith(f.hash + ':')));
    if (!withMarks.length) { status(t('export.pdf.none')); return; }
    busy(t('export.pdf.busy'));
    await frame();
    try {
      const PDFLib = await import('pdf-lib');
      for (const f of withMarks) {
        const out = await pdfWithMarks(PDFLib, f.bytes, f.hash, model.state);
        host.download(out.bytes, safeName(f.name.replace(/\.pdf$/i, '')) + ' (takeoff).pdf', 'application/pdf');
      }
      status(t('export.pdf.done', { n: withMarks.length }));
    } catch (err) {
      console.error(err);
      status(t('export.pdf.failed', { reason: err.message }), 12000);
    } finally { busy(null); }
  }

  /** T10: each open PDF as a copy with the takeoff inside (its pages untouched), to reopen the takeoff from the PDF alone. */
  async function exportEmbed() {
    if (!files.length) { status(t('handoff.nopdf')); return; }
    if (!model.state.items.length) { status(t('embed.none')); return; }
    busy(t('embed.busy'));
    await frame();
    try {
      const PDFLib = await import('pdf-lib');
      const json = model.toJSON();
      for (const f of files) {
        const out = await embedTakeoff(PDFLib, f.bytes, json, f.hash);
        host.download(out, t('embed.file', { name: safeName(f.name.replace(/\.pdf$/i, '')) }) + '.pdf', 'application/pdf');
      }
      status(t('embed.done', { n: files.length }), 9000);
    } catch (err) {
      console.error(err);
      status(t('embed.failed', { reason: err.message }), 12000);
    } finally { busy(null); }
  }

  const actions = {
    'open-pdf': async () => { const l = await host.openFile({ types: PDF_TYPES, multiple: true }); if (l.length) await openHostFiles(l); },
    'open-project': async () => { const l = await host.openFile({ types: PROJECT_TYPES }); if (l.length) await openHostFiles(l); },
    'save-project': saveProject,
    'export-xlsx': exportXlsx,
    'export-csv': exportCsv,
    'export-pdf': exportPdf,
    'export-bid': bidDialog,
    'export-embed': exportEmbed,
    undo: () => { endPaste(true); cancelDraft(); const l = model.undo(); status(l ? t('undo.did', { what: l }) : t('undo.nothing')); },
    redo: () => { endPaste(true); cancelDraft(); const l = model.redo(); status(l ? t('redo.did', { what: l }) : t('redo.nothing')); },
    delete: () => { endPaste(true); deleteSelected(); },
    copy: () => copySelection(),
    cut: () => { endPaste(true); cutSelection(); },
    paste: () => startPaste(false),
    'paste-in-place': () => startPaste(true),
    duplicate: () => duplicateSelection(),
    'select-all': () => selectAll(),
    'select-none': () => { selectNone(); status(t('sel.none')); },
    'fit-page': () => view.fit('page'),
    'fit-width': () => view.fit('width'),
    'new-takeoff': newTakeoff,
    arc: () => toggleArc(),
    deduct: () => toggleDeduct(),
    compare: () => openCompare(),
    'next-flag': () => nextFlag(),
    'view-3d': () => toggle3d(),
  };
  const closeMenus = () => { for (const d of root.querySelectorAll('details.tc-menu[open]')) d.open = false; };
  for (const b of root.querySelectorAll('[data-act]')) b.addEventListener('click', () => { closeMenus(); actions[b.dataset.act]?.(); });
  document.addEventListener('click', (e) => { for (const d of root.querySelectorAll('details.tc-menu[open]')) if (!d.contains(e.target)) d.open = false; });
  root.addEventListener('keydown', (e) => { if (e.key === 'Escape' && root.querySelector('details.tc-menu[open]')) { e.stopPropagation(); const d = root.querySelector('details.tc-menu[open]'); d.open = false; d.querySelector('summary').focus(); } }, true);

  // =========================================================================
  // Arc mode, New takeoff

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
    if (!on && app.draft) app.draft.mid = null;
    status(on ? t('arc.on') : t('arc.off'));
    liveMeasure(); view.overlayOnly();
  }

  /** Back to the empty state (asks first when there is unsaved work). Not a page reload. */
  async function newTakeoff() {
    if (!(await confirmDiscard('new'))) return;
    cancelAutoCount(); discardAutoCount(); endPaste(true); closeCompare();
    for (const f of files) { try { f.doc.destroy(); } catch { /* already gone */ } }
    files.length = 0; sheets = []; cur = null;
    views.clear(); thumbs.clear(); thumbQueue.length = 0; snaps.clear();
    view.clear();
    model.load({ format: FORMAT, version: 1, files: [], items: [], marks: [] });
    projectTarget = null;
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

  // =========================================================================
  // Automatic counting: box one symbol → search (Web Worker) → review → accept as one undo step

  const acUi = {
    bar: $('[data-acbar]'), start: $('[data-ac-start]'), run: $('[data-ac-run]'), runText: $('[data-ac-run-text]'), progress: $('[data-ac-progress]'),
    review: $('[data-ac-review]'), summary: $('[data-ac-summary]'), threshold: $('[data-ac-threshold]'), th: $('[data-ac-th]'), all: $('[data-ac-all]'), angle: $('[data-ac-angle]'),
  };
  const AC_FLOOR = 0.5;      // the slider's start comes from Settings (settings.threshold, 75% unless changed)
  let acWorker = null, acPending = null;

  function renderAcBar() {
    acUi.bar.hidden = app.tool !== 'autocount' && !app.ac;
    const ac = app.ac;
    acUi.start.hidden = !!ac;
    acUi.run.hidden = !ac?.running;
    acUi.review.hidden = !ac || ac.running;
    if (!ac || ac.running) return;
    const vis = acVisible();
    const on = vis.filter((c) => !c.rejected);
    const sheetsWith = new Set(vis.map((c) => c.sheet)).size;
    const dups = vis.filter((c) => c.dup && c.rejected).length;
    acUi.summary.textContent = (ac.all ? t('ac.found.sheets', { n: vis.length, sheets: t('ac.sheets', { n: sheetsWith }) }) : t('ac.found', { n: vis.length })) +
      ', ' + (dups ? t('ac.adding.dups', { n: on.length, dups }) : t('ac.adding', { n: on.length })) + ' ' + t('ac.review') + (ac.skipped ? ' ' + ac.skipped : '');
    acUi.th.textContent = Math.round(ac.threshold * 100) + '%';
    acUi.threshold.value = String(ac.threshold);
    $('[data-ac-accept]').textContent = t('ac.accept', { n: on.length });
    $('[data-ac-accept]').disabled = !on.length;
  }
  acUi.threshold.addEventListener('input', () => { if (!app.ac) return; app.ac.threshold = Number(acUi.threshold.value); renderAcBar(); view.overlayOnly(); });
  $('[data-ac-cancel]').addEventListener('click', () => cancelAutoCount());
  $('[data-ac-discard]').addEventListener('click', () => { discardAutoCount(); status(t('ac.discarded')); });
  $('[data-ac-accept]').addEventListener('click', () => acceptAutoCount());

  const acVisible = () => (app.ac && !app.ac.running ? suppress(app.ac.cands, app.ac.threshold) : []);

  function cancelAutoCount() {
    if (!app.ac?.running) return;
    acWorker?.terminate(); acWorker = null;
    acPending?.(null); acPending = null;
    app.ac = null;
    renderAcBar(); view.overlayOnly();
    status(t('ac.canceled'));
  }
  function discardAutoCount() { if (app.ac?.running) cancelAutoCount(); app.ac = null; renderAcBar(); view.overlayOnly(); }

  /** A sheet rendered as ink darkness at `w` pixels per display unit (white paper = 0). */
  // ---- room fill (T21): click inside a room → its outline as an area mark, door openings closed ----
  let roomInk = null;                                   // { key, w, ink } of the last sheet read (the PDF does not change)
  let roomBusy = false;
  async function fillRoom(p) {
    if (roomBusy) return;
    const sheet = cur, sc = model.scaleOf(sheet.key), it = model.item(app.active);
    if (!sc || !it) return;
    roomBusy = true;
    try {
      const w = Math.min(2, 3000 / Math.max(sheet.info.width, sheet.info.height));
      if (!roomInk || roomInk.key !== sheet.key || roomInk.w !== w) {
        busy(t('room.reading'));
        try { roomInk = { key: sheet.key, w, ink: await rasterize(sheet, w) }; } finally { busy(null); }
      }
      if (cur !== sheet) return;
      const T = sheet.info.transform, per = Math.hypot(T[0], T[1]);        // display units per user unit
      const seed = G.apply(T, p);
      const gapPx = settings.roomGap / sc.ftPerUnit * per * w;
      const r = roomAt(roomInk.ink, { x: seed.x * w, y: seed.y * w }, { gapPx });
      if (!r.ok) { status(t('room.err.' + r.why, { gap: U.formatFtIn(settings.roomGap) }), 9000); return; }
      const inv = G.invert(T);
      const pts = r.ring.map((q) => G.apply(inv, { x: q.x / w, y: q.y / w }));
      const why = G.outlineProblem(pts);
      if (why) { status(why, 9000); return; }
      app.sel = model.addMark({ item: it.id, sheet: sheet.key, pts, kind: 'area', ...inArea() });
      const m = measureMark(model.mark(app.sel), sc.ftPerUnit, it);
      status(t('room.done', { sf: U.fixed(m.areaSqft, 2), n: pts.length }), 9000);
      renderMarkProps();
    } finally { roomBusy = false; }
  }

  async function rasterize(sheet, w) {
    const page = await sheet.file.doc.getPage(sheet.info.index + 1);
    const vp = page.getViewport({ scale: w, rotation: sheet.info.rotate });
    const c = document.createElement('canvas');
    c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
    await page.render({ canvas: c, viewport: vp, background: '#ffffff' }).promise;
    const id = c.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, c.width, c.height);
    return { data: toInk(id.data, c.width, c.height), w: c.width, h: c.height };
  }

  function searchInWorker(img, template, onProgress, rotations = null) {
    acWorker ??= new Worker(import.meta.resolve('./autocount-worker.js'), { type: 'module' });
    return new Promise((resolve) => {
      const id = Math.random();
      acPending = resolve;
      acWorker.onmessage = (e) => {
        const m = e.data;
        if (m.id !== id) return;
        if (m.type === 'progress') onProgress(m.f);
        else { acPending = null; resolve(m.type === 'done' ? m.cands : { error: m.message }); }
      };
      acWorker.onerror = (e) => { acPending = null; resolve({ error: e.message || t('ac.stopped') }); };
      acWorker.postMessage({ id, matchUrl: import.meta.resolve('./match.js'), img, template, floor: AC_FLOOR, ...(rotations ? { rotations } : {}) }, [img.data.buffer]);
    });
  }

  async function runAutoCount(a, b) {
    const it = model.item(app.active);
    if (!it || !kindsOf(it).includes('count')) { setTool('autocount'); return; }
    const T = cur.info.transform;
    const ds = [a, b, { x: a.x, y: b.y }, { x: b.x, y: a.y }].map((p) => G.apply(T, p));    // display coords (y down)
    const minX = Math.min(...ds.map((p) => p.x)), maxX = Math.max(...ds.map((p) => p.x)), minY = Math.min(...ds.map((p) => p.y)), maxY = Math.max(...ds.map((p) => p.y));
    const w = workScale(maxX - minX, maxY - minY);
    const targets = acUi.all.checked ? sheets.slice() : [cur];
    const ac = app.ac = { item: it.id, running: true, all: acUi.all.checked, threshold: settings.threshold, cands: [], skipped: '' };
    renderAcBar();
    acUi.progress.value = 0;
    acUi.runText.textContent = t('ac.reading');
    view.overlayOnly();
    const src = await rasterize(cur, w);
    if (app.ac !== ac) return;
    const tpl = trim(crop(src, minX * w, minY * w, (maxX - minX) * w, (maxY - minY) * w));
    const why = templateProblem(tpl);
    if (why) { app.ac = null; renderAcBar(); status(why, 9000); return; }
    let big = 0;
    const rotations = acUi.angle?.checked ? ANY_ANGLES : null;          // T7: any angle (15° steps), else the right angles
    const srcScale = model.scaleOf(cur.key)?.ftPerUnit;
    for (let i = 0; i < targets.length; i++) {
      const sh = targets[i];
      acUi.runText.textContent = targets.length > 1 ? t('ac.searching.n', { i: i + 1, n: targets.length }) : t('ac.searching.one');
      // T7: a sheet at another scale draws a symbol drawn to scale bigger or smaller — render it so the symbol has the same
      // pixel size; tags drawn at one paper size do not change, so such a sheet is searched at both sizes
      const tgtScale = model.scaleOf(sh.key)?.ftPerUnit;
      const ws = srcScale && tgtScale && Math.abs(tgtScale / srcScale - 1) > 0.01 ? [w * tgtScale / srcScale, w] : [w];
      for (let j = 0; j < ws.length; j++) {
        const wt = ws[j];
        if (sh.info.width * sh.info.height * wt * wt > 40e6) { big++; continue; }        // too large at this symbol size
        const img = sh === cur && wt === w ? { ...src, data: src.data.slice() } : await rasterize(sh, wt);
        if (app.ac !== ac) return;
        const res = await searchInWorker(img, tpl, (f) => { acUi.progress.value = (i + (j + f) / ws.length) / targets.length; }, rotations);
        if (app.ac !== ac || res === null) return;
        if (res.error) { app.ac = null; renderAcBar(); status(t('ac.failed', { reason: res.error }), 12000); return; }
        const inv = G.invert(sh.info.transform);
        const toUser = (x, y) => G.apply(inv, { x: x / wt, y: y / wt });
        const own = model.state.marks.filter((m) => m.item === it.id && m.sheet === sh.key);
        for (const c of res) {
          const corners = [toUser(c.x, c.y), toUser(c.x + c.w, c.y), toUser(c.x + c.w, c.y + c.h), toUser(c.x, c.y + c.h)];
          const dup = own.some((m) => G.pointInPolygon(m.pts[0], corners));
          // boxes in sheet units, so suppress() compares candidates found at two pixel sizes
          const bx = Math.min(...corners.map((q) => q.x)), by = Math.min(...corners.map((q) => q.y));
          ac.cands.push({ ...c, x: bx, y: by, w: Math.max(...corners.map((q) => q.x)) - bx, h: Math.max(...corners.map((q) => q.y)) - by, sheet: sh.key, center: toUser(c.x + c.w / 2, c.y + c.h / 2), corners, dup, rejected: dup });
        }
      }
    }
    acWorker?.terminate(); acWorker = null;
    ac.running = false;
    if (big) ac.skipped = t('ac.skipped', { n: big });
    renderAcBar();
    view.overlayOnly();
    status(acVisible().length ? t('ac.done') : t('ac.none'), 0);
  }

  function toggleCandidate(p) {
    const c = acVisible().find((x) => x.sheet === cur.key && G.pointInPolygon(p, x.corners));
    if (!c) return;
    c.rejected = !c.rejected;
    renderAcBar(); view.overlayOnly();
  }

  function acceptAutoCount() {
    const ac = app.ac;
    if (!ac || ac.running) return;
    const on = acVisible().filter((c) => !c.rejected);
    const it = model.item(ac.item);
    app.ac = null;
    renderAcBar();
    if (!it || !on.length) { view.overlayOnly(); return; }
    model.addMarks(it.id, on.map((c) => ({ sheet: c.sheet, pts: [c.center], ...inArea() })), t('undo.ac', { n: on.length, item: it.name }), 'count');
    status(t('ac.added', { n: on.length, item: it.name, mod: modKey }), 9000);
  }

  function drawAutoCount(ctx, S, line) {
    if (app.box) {
      const a = S(app.box.a), b = S(app.box.b);
      ctx.strokeStyle = colors.action; ctx.lineWidth = 1.5; ctx.setLineDash([5, 3]);
      ctx.strokeRect(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.abs(b.x - a.x), Math.abs(b.y - a.y));
      ctx.setLineDash([]);
    }
    if (!app.ac || app.ac.running) return;
    const color = model.item(app.ac.item)?.color || colors.action;
    for (const c of acVisible()) {
      if (c.sheet !== cur.key) continue;
      line(c.corners, true);
      if (c.rejected) {
        ctx.strokeStyle = colors.ink; ctx.globalAlpha = 0.5; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]); ctx.stroke(); ctx.setLineDash([]);
        const p = c.corners.map(S);
        ctx.beginPath(); ctx.moveTo(p[0].x, p[0].y); ctx.lineTo(p[2].x, p[2].y); ctx.moveTo(p[1].x, p[1].y); ctx.lineTo(p[3].x, p[3].y); ctx.stroke();
        ctx.globalAlpha = 1;
      } else {
        ctx.fillStyle = color; ctx.globalAlpha = 0.15; ctx.fill(); ctx.globalAlpha = 1;
        ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
      }
    }
  }

  // =========================================================================
  // 3D check view: the sheet on screen, its takeoff standing on it (scene3d.js + view3d.js, loaded on first use)

  const ui3d = {
    root: $('[data-3d]'), host: $('[data-3d-host]'), note: $('[data-3d-note]'), persp: $('[data-3d-persp]'),
    ground: $('[data-3d-ground]'), btn: root.querySelector('[data-act="view-3d"]'),
  };
  const NO_SCALE_3D = () => t('d3.err.noscale');

  function toggle3d() { if (d3.on) close3d(); else open3d(); }

  async function open3d() {
    if (!cur) { status(t('d3.err.nopdf')); return; }
    if (!model.scaleOf(cur.key)) { status(NO_SCALE_3D(), 9000); return; }
    endPaste(true); cancelDraft();
    if (app.ac) discardAutoCount();
    if (app.tool !== 'select') setTool('select');
    if (!d3.view) {
      busy(t('d3.loading'));
      await frame();
      try {
        if (!d3.mod) {
          const [a, b] = await Promise.all([import('./scene3d.js'), import('./view3d.js')]);
          d3.mod = { ...a, ...b };
        }
        d3.view = new d3.mod.TakeoffView3D(ui3d.host, { onPick: pick3d, corner: settings.corner });
      } catch (err) {
        console.warn(err);
        status(t('d3.err.webgl', { reason: err.message }), 12000);
        return;
      } finally { busy(null); }
    }
    d3.on = true;
    d3.sheet = null;
    ui3d.root.hidden = false;
    ui.stage.classList.add('is-3d');
    ui3d.btn?.setAttribute('aria-pressed', 'true');
    update3d();
    if (d3.on) d3.view.canvas.focus({ preventScroll: true });
  }

  function close3d() {
    if (!d3.on) return;
    d3.on = false;
    ui3d.root.hidden = true;
    ui.stage.classList.remove('is-3d');
    ui3d.btn?.setAttribute('aria-pressed', 'false');
    view.invalidate(true);
  }

  /** Rebuild from the model (after any edit, a new sheet or a selection made elsewhere). */
  function update3d() {
    if (!d3.on || !d3.view) return;
    if (!cur) { close3d(); return; }
    const r = d3.stack ? d3.mod.buildStack(model.state, stackLevels()) : d3.mod.buildScene(model.state, cur.key, { transform: cur.info.transform, width: cur.info.width, height: cur.info.height });
    if (!r.ok) { close3d(); status(r.reason, 9000); return; }
    const sameSheet = d3.sheet === cur.key && d3.stacked === d3.stack;
    d3.stacked = d3.stack;
    d3.scene = r;
    d3.view.setScene(r, { keepCamera: sameSheet });
    d3.view.setSelection(selIds());
    if (!sameSheet) {
      d3.sheet = cur.key;
      d3.ground = null;
      d3.view.setGround(null);
      loadGround(cur);
    }
    renderNote3d(r);
  }

  /** T4: the sheet on screen first, then every other open sheet that has a level, at its elevation. */
  function stackLevels() {
    const lv = (s) => ({ key: s.key, elevFt: model.levelOf(s.key) ?? 0, transform: s.info.transform, width: s.info.width, height: s.info.height });
    return [lv(cur), ...sheets.filter((s) => s.key !== cur.key && model.levelOf(s.key) !== null).map(lv)];
  }
  function toggleStack(on = !d3.stack) {
    d3.stack = on;
    $('[data-3d-stack]')?.setAttribute('aria-pressed', String(on));
    update3d();
    if (on) status(stackLevels().length > 1 ? t('d3.stack.on', { n: stackLevels().length }) : t('d3.stack.none'), 9000);
    else status(t('d3.stack.off'));
  }
  // ---- the bid summary and proposal PDF (T19) ----
  async function bidDialog() {
    if (!model.state.items.length) { status(t('bid.empty')); return; }
    const b = model.bid();
    const pctIn = (k) => {
      const n = el('input', { type: 'text', className: 'tc-input pct', id: 'tc-bid-' + k, inputmode: 'decimal', value: U.percentInput(b[k]), dataset: { bid: k } });
      n.addEventListener('change', () => { const r = U.parsePercent(n.value); if (!r.ok) { n.classList.add('is-invalid'); say(r.error); return; } n.classList.remove('is-invalid'); model.setBid({ [k]: r.bp }); draw(); });
      n.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); n.dispatchEvent(new Event('change')); } });   // Enter: take it, don't make the PDF
      return n;
    };
    const textIn = (k, area = false, rows = 3) => {
      const n = area ? el('textarea', { className: 'tc-input', id: 'tc-bid-' + k, rows, dataset: { bid: k }, placeholder: t('bid.f.' + k + '.ph') }) : el('input', { type: 'text', className: 'tc-input', id: 'tc-bid-' + k, dataset: { bid: k }, placeholder: t('bid.f.' + k + '.ph') });
      n.value = b[k];
      n.addEventListener('change', () => { model.setBid({ [k]: n.value }); });
      if (!area) n.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); n.dispatchEvent(new Event('change')); } });
      return n;
    };
    const msg = el('p', { className: 'tc-lib-msg', role: 'status' });
    const say = (s2) => { msg.textContent = s2; };
    const table = el('table', { className: 'tc-bid-sum', dataset: { bidSum: '' } });
    const draw = () => {
      const sum = bidSummary(est, model.bid(), alternates(model.state));
      table.replaceChildren(el('tbody', {}, ...sum.lines.map((l) => el('tr', { className: l.sub ? 'is-sub' : '', dataset: { bidLine: l.key } },
        el('td', {}, l.pct ? t('bid.l.pct', { label: l.label, pct: U.percentInput(l.pct) + ' %' }) : l.label), el('td', {}, U.formatCents(l.cents)))),
      ...sum.alts.map((a) => el('tr', { className: 'is-alt' }, el('td', {}, t('bid.pdf.alt', { name: a.name, kind: t('alt.' + a.alt).toLowerCase() })), el('td', {}, (a.withMarkup >= 0 ? '+' : '−') + U.formatCents(Math.abs(a.withMarkup)))))));
    };
    draw();
    const items = el('input', { type: 'checkbox', id: 'tc-bid-items', checked: b.items, dataset: { bid: 'items' } });
    items.addEventListener('change', () => model.setBid({ items: items.checked }));
    const f = (k, input) => [el('label', { for: input.id }, t('bid.f.' + k)), input];
    const asked = ask(root, {
      title: t('bid.h'), text: t('bid.text'),
      body: el('div', { className: 'tc-bid' },
        el('div', { className: 'tc-props' }, ...f('tax', pctIn('tax')), ...f('overhead', pctIn('overhead')), ...f('profit', pctIn('profit')), ...f('bond', pctIn('bond'))),
        table, msg,
        el('div', { className: 'tc-props' }, ...f('project', textIn('project')), ...f('to', textIn('to', true, 2)), ...f('by', textIn('by', true, 2)),
          ...f('incl', textIn('incl', true)), ...f('excl', textIn('excl', true)), ...f('terms', textIn('terms', true, 2))),
        el('label', { className: 'tc-check' }, items, ' ' + t('bid.f.items'))),
      buttons: [['cancel', t('btn.close'), 'btn-line'], ['ok', t('bid.pdf.btn'), 'btn-plot']],
      focus: '#tc-bid-overhead',
    });
    root.querySelector('dialog.tc-dialog[open]')?.classList.add('is-wide');
    const choice = await asked;
    if (choice !== 'ok') return;
    for (const n of root.querySelectorAll('dialog [data-bid]')) n.dispatchEvent(new Event('change'));   // a field still being typed in
    try {
      const PDFLib = await import('pdf-lib');
      const bytesOut = await proposalPdf(PDFLib, { state: model.state, est, alts: alternates(model.state) });
      const file = t('bid.pdf.file', { name: safeName(model.state.name || 'Takeoff') }) + '.pdf';
      host.download(bytesOut, file, 'application/pdf');
      status(t('bid.pdf.done', { file, total: U.formatCents(bidSummary(est, model.bid(), alternates(model.state)).total) }), 9000);
    } catch (err) { status(t('bid.pdf.failed', { reason: err.message }), 12000); }
  }

  // ---- the assembly and price library (T9): per viewer, kept in this browser for every takeoff ----
  const LIB_KEY = 'takeoffcraft.library';
  const loadLib = () => { try { return readStored(JSON.parse(localStorage.getItem(LIB_KEY) || '[]')); } catch { return []; } };
  const saveLib = (lib) => { try { localStorage.setItem(LIB_KEY, JSON.stringify(lib)); return true; } catch { return false; } };

  async function libraryDialog() {
    let lib = loadLib();
    const picked = new Set();
    const msg = el('p', { className: 'tc-lib-msg', role: 'status', dataset: { libMsg: '' } });
    const say = (text) => { msg.textContent = text; };
    const store = (next, text) => { lib = next; say(saveLib(lib) ? text : t('lib.err.store')); picked.clear(); draw(); };
    const search = el('input', { type: 'search', className: 'tc-input', placeholder: t('lib.search'), 'aria-label': t('lib.search'), dataset: { libSearch: '' } });
    const list = el('ul', { className: 'tc-lib-list', dataset: { libList: '' } });
    const count = el('p', { className: 'tc-note' });
    const money = U.formatRate;
    function draw() {
      const q = search.value.trim().toLowerCase();
      count.textContent = t('lib.count', { n: lib.length });
      list.replaceChildren(...lib.map((e, i) => [e, i]).filter(([e]) => !q || e.name.toLowerCase().includes(q)).slice(0, 300).map(([e, i]) => {
        const cb = el('input', { type: 'checkbox', checked: picked.has(i), dataset: { libEntry: String(i) } });
        cb.addEventListener('change', () => { if (cb.checked) picked.add(i); else picked.delete(i); });
        const unit = U.UNITS[e.unit].label;
        return el('li', {}, el('label', { className: 'tc-lib-row' }, cb, icon(TYPE_ICONS[e.type]), el('span', { className: 'tc-lib-name' }, e.name),
          el('span', { className: 'tc-lib-meta' }, t('lib.meta', { unit, mat: money(e.mat), lab: money(e.lab) }) + (e.components.length ? ' · ' + t('lib.parts', { n: e.components.length }) : ''))));
      }));
      if (!lib.length) list.replaceChildren(el('li', { className: 'tc-note' }, t('lib.empty')));
    }
    search.addEventListener('input', draw);
    const file = el('input', { type: 'file', accept: '.csv,.txt,text/csv', hidden: true, dataset: { libFile: '' } });
    file.addEventListener('change', async () => {
      const f = file.files[0];
      file.value = '';
      if (!f) return;
      if (f.size > 20e6) { say(t('lib.err.big')); return; }
      const r = readLibraryCsv(await f.text());
      if (!r.ok) { say(t('lib.err.read', { file: f.name, why: r.error })); return; }
      const m = mergeEntries(lib, r.entries);
      store(m.lib, t('lib.imported', { file: f.name, added: m.added, updated: m.updated }) + (r.warnings.length ? ' ' + t('lib.skipped', { n: r.warnings.length, first: r.warnings[0] }) : ''));
    });
    const btn = (label, data, fn, ic) => { const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: data }, ic ? icon(ic) : null, ic ? ' ' + label : label); b.addEventListener('click', fn); return b; };
    const clear = btn(t('lib.clear'), { libClear: '' }, () => {
      if (!lib.length) return;
      if (clear.dataset.armed !== '1') { clear.dataset.armed = '1'; clear.textContent = t('lib.clear.sure', { n: lib.length }); return; }
      clear.dataset.armed = ''; clear.textContent = t('lib.clear');
      store([], t('lib.cleared'));
    });
    const tools = el('div', { className: 'tc-lib-tools' },
      btn(t('lib.import'), { libImport: '' }, () => file.click(), 'upload'),
      btn(t('lib.save'), { libSave: '' }, () => {
        if (!model.state.items.length) { say(t('lib.save.none')); return; }
        const m = mergeEntries(lib, model.state.items.map(entryFromItem));
        store(m.lib, t('lib.saved', { added: m.added, updated: m.updated }));
      }, 'box-arrow-in-down'),
      btn(t('lib.export'), { libExport: '' }, () => {
        if (!lib.length) { say(t('lib.empty')); return; }
        host.download('\uFEFF' + libraryCsv(lib), t('lib.file') + '.csv', 'text/csv;charset=utf-8');
      }, 'download'),
      clear, file);
    draw();
    const asked = ask(root, {
      title: t('lib.title'), text: t('lib.text'),
      body: el('div', { className: 'tc-lib' }, tools, msg, search, count, list),
      buttons: [['cancel', t('btn.close'), 'btn-line'], ['reprice', t('lib.reprice'), 'btn-line'], ['ok', t('lib.add'), 'btn-plot']],
      focus: '[data-lib-search]',
      onOk: () => (picked.size ? null : t('lib.err.pick')),
    });
    root.querySelector('dialog.tc-dialog[open]')?.classList.add('is-wide');
    const choice = await asked;
    if (choice === 'ok') {
      const list2 = [...picked].sort((a, b) => a - b).map((i) => lib[i]).filter(Boolean);
      const taken = new Set(model.state.items.map((i) => i.name.toLowerCase()));
      const fields = list2.map((e) => { const f = itemFromEntry(e); let n = f.name, k = 2; while (taken.has(n.toLowerCase())) n = f.name + ' (' + k++ + ')'; taken.add(n.toLowerCase()); return { ...f, name: n }; });
      try {
        const ids = model.addItems(fields);
        if (ids.length) setActive(ids.at(-1));
        status(t('lib.added', { n: ids.length }));
      } catch (err) { status(err.message, 9000); }
    } else if (choice === 'reprice') {
      const patches = repricePatches(model.state.items, lib);
      if (!patches.length) { status(t('lib.repriced.none')); return; }
      model.updateItems(patches);
      status(t('lib.repriced', { n: patches.length }), 9000);
    }
  }

  async function levelsDialog() {
    if (!sheets.length) return;
    const inputs = sheets.map((s) => {
      const v = model.levelOf(s.key);
      return { s, input: el('input', { type: 'text', className: 'tc-input', value: v === null ? '' : U.formatFtIn(v), placeholder: '0\'-0"', dataset: { levelFor: s.key }, 'aria-label': s.title }) };
    });
    let map = null;
    const choice = await ask(root, {
      title: t('d3.levels.dlg'), text: t('d3.levels.text'),
      body: el('div', { className: 'tc-levels' }, inputs.map(({ s, input }) => el('label', { className: 'tc-level-row' }, el('span', {}, s.title), input))),
      buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('d3.levels.ok'), 'btn-plot']],
      focus: '[data-level-for]',
      onOk: () => {
        const m = {};
        for (const { s, input } of inputs) {
          const txt = input.value.trim();
          if (!txt) { m[s.key] = null; continue; }
          const neg = /^[-−]/.test(txt);
          const r = /^[-−]?0+(\.0*)?\s*('|"|ft|m)?$/.test(txt) ? { ok: true, ft: 0 } : U.parseLength(txt.replace(/^[-−]/, ''));
          if (!r.ok) { input.classList.add('is-invalid'); return s.title + ': ' + r.error; }
          m[s.key] = neg ? -r.ft : r.ft;
        }
        map = m;
        return null;
      },
    });
    if (choice === 'ok' && map) model.setLevels(map);
  }
  async function exportGlb() {
    if (!d3.scene?.objects?.some((o) => o.kind !== 'frame' && (o.tris.length || o.kind === 'run'))) { status(t('d3.glb.empty')); return; }
    const { sceneToGlb } = await import('./glb.js');
    const name = safeName(model.state.name || 'Takeoff') + (d3.stack ? '' : ' - ' + safeName(cur.title)) + '.glb';   // i18n-ignore: a file name
    const bytes = sceneToGlb(d3.scene, { name: model.state.name });
    host.download(bytes, name, 'model/gltf-binary');
    status(t('d3.glb.done', { file: name, n: d3.scene.objects.filter((o) => o.kind !== 'frame').length }), 9000);
  }

  /** The 3D view as a PNG (model 1.7); Shift + click: twice the size. */
  async function exportPng(scale) {
    if (!d3.view) return;
    const name = (safeName(model.state.name || 'Takeoff') + (d3.stack ? '' : ' - ' + safeName(cur.title)) + ' 3D').trim();   // i18n-ignore: a file name
    const { pngName } = await import('./viewimage.js');
    try {
      const blob = await d3.view.png(scale);
      const file = pngName(name, scale);
      host.download(new Uint8Array(await blob.arrayBuffer()), file, 'image/png');
      status(t('d3.png.done', { file }), 9000);
    } catch (err) { status(t('d3.png.failed', { reason: err.message }), 9000); }
  }

  function renderNote3d(r) {
    const tt = r.totals, parts = [];
    for (const [k, n] of [['walls', tt.walls], ['slabs', tt.slabs], ['plates', tt.plates], ['runs', tt.runs], ['markers', tt.markers]]) if (n) parts.push(t('d3.part.' + k, { n }));
    const head = r.stacked ? t('d3.note.stacked', { list: parts.join(', ') || '—', n: r.levels.length }) : parts.length ? t('d3.note', { list: parts.join(', ') }) : t('d3.note.none');
    ui3d.note.replaceChildren(el('p', {}, head), ...r.notes.map((s) => el('p', {}, s)));
  }

  /** The page rendered once per sheet at a modest size (≤ 2048 px), laid on the ground. */
  async function loadGround(s) {
    const key = s.key;
    let c = d3.grounds.get(key);
    if (!c) {
      try {
        const page = await s.file.doc.getPage(s.info.index + 1);
        const max = Math.min(2048, d3.view.renderer.capabilities.maxTextureSize || 2048);
        const sc = Math.min(2, max / Math.max(s.info.width, s.info.height));
        const vp = page.getViewport({ scale: sc, rotation: s.info.rotate });
        c = document.createElement('canvas');
        c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
        await page.render({ canvas: c, viewport: vp, background: '#ffffff' }).promise;
      } catch (err) {
        console.warn(err);
        status(t('d3.err.ground'), 8000);
        return;
      }
      d3.grounds.set(key, c);
      if (d3.grounds.size > 4) d3.grounds.delete(d3.grounds.keys().next().value);
    }
    if (d3.on && d3.sheet === key) { d3.ground = key; d3.view.setGround(c); }
  }

  /** A click in 3D selects the mark (the same selection as on the sheet; Shift adds or takes out). */
  function pick3d(id, { shift } = {}) {
    const m = id && model.mark(id);
    if (shift && (selMain || selMore.size)) {
      if (!m) return;
      if (isSel(m.id)) { if (m.id === selMain) setSelection([...selMore]); else selMore.delete(m.id); }
      else selMore.add(m.id);
      const k = selIds().length;
      status(t('sel.several', { n: k, mod: modKey }));
    } else {
      app.sel = m?.id || null;
      if (m) {
        setActive(m.item, false);
        const o = d3.scene?.objects.find((x) => x.id === m.id);
        const it = model.item(m.item);
        const ms = o?.measure;
        const fills = { item: it.name, mod: modKey, len: ms ? ftIn(ms.lengthFt) : '', h: ms?.heightFt ? ftIn(ms.heightFt) : '', sf: ms ? U.fixed(o.kind === 'wall' ? ms.wallSqft : ms.netSqft ?? 0, 2) : '', depth: ms?.depthFt ? ftIn(ms.depthFt) : '', cy: ms?.volumeCuft ? U.fixed(ms.volumeCuft / 27, 2) : '' };
        status(t(o && ['wall', 'slab', 'plate', 'run'].includes(o.kind) ? 'd3.pick.' + o.kind : 'd3.pick.' + m.kind, fills), 9000);
      } else status(t('sel.none'));
    }
    renderMarkProps(); renderItems(); renderItemProps();
    view.overlayOnly();
  }

  for (const b of root.querySelectorAll('[data-3d-view]')) b.addEventListener('click', () => { d3.view?.standard(b.getAttribute('data-3d-view')); d3.view?.canvas.focus({ preventScroll: true }); });
  ui3d.persp?.addEventListener('click', () => {
    const on = ui3d.persp.getAttribute('aria-pressed') !== 'true';
    ui3d.persp.setAttribute('aria-pressed', String(on));
    d3.view?.setPersp(on);
  });
  $('[data-3d-extents]')?.addEventListener('click', () => d3.view?.extents());
  $('[data-3d-close]')?.addEventListener('click', () => close3d());
  $('[data-3d-stack]')?.addEventListener('click', () => toggleStack());
  $('[data-3d-levels]')?.addEventListener('click', () => levelsDialog());
  $('[data-3d-glb]')?.addEventListener('click', () => exportGlb());
  $('[data-3d-png]')?.addEventListener('click', (e) => exportPng(e.shiftKey ? 2 : 1));
  ui3d.ground?.addEventListener('change', () => d3.view?.showGround(ui3d.ground.checked));

  /** For tests: what the 3D view shows, with each object's anchor on screen (page pixels). */
  function state3d() {
    if (!d3.on || !d3.view || !d3.scene) return { open: d3.on, loaded: !!d3.mod };
    const r = d3.view.canvas.getBoundingClientRect();
    return {
      open: true, loaded: true, sheet: d3.sheet, ground: d3.ground === d3.sheet, frames: d3.view.frames || 0,
      corner: d3.view.corner, persp: d3.view.cam.persp, eye: d3.view.cam.eye.slice(), target: d3.view.cam.target.slice(),
      totals: { ...d3.scene.totals }, selected: [...d3.view.sel],
      objects: d3.scene.objects.map((o) => {
        const s = d3.view.screenOf(o.anchor);
        return { id: o.id, item: o.item, kind: o.kind, measure: o.measure, screen: s ? { x: r.left + s.x, y: r.top + s.y } : null };
      }),
    };
  }

  // =========================================================================
  // Keyboard

  // keys go to the app unless a person is typing; a ticked checkbox or radio keeps Ctrl+Z, Delete… for the app
  const typing = (el) => el && (el.closest('input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), textarea, select, [contenteditable="true"]') || el.closest('dialog'));
  window.addEventListener('keydown', (e) => {
    if (document.querySelector('dialog[open]')) return;
    const mod = e.ctrlKey || e.metaKey;
    if (mod && !e.altKey) {
      const k = e.key.toLowerCase();
      if (k === 's') { e.preventDefault(); saveProject(); return; }
      if (k === 'o') { e.preventDefault(); actions['open-pdf'](); return; }
      if (typing(e.target)) return;
      if (k === 'z' && !e.shiftKey) { e.preventDefault(); actions.undo(); return; }
      if (k === 'y' || (k === 'z' && e.shiftKey)) { e.preventDefault(); actions.redo(); return; }
      if (e.shiftKey && k !== 'v') return;
      if (k === 'c') { e.preventDefault(); actions.copy(); return; }
      if (k === 'x') { e.preventDefault(); actions.cut(); return; }
      if (k === 'v') { e.preventDefault(); startPaste(e.shiftKey); return; }
      if (k === 'd') { e.preventDefault(); actions.duplicate(); return; }
      if (k === 'a') { e.preventDefault(); actions['select-all'](); return; }
      return;
    }
    if (typing(e.target)) return;
    if (canType() && !mod && /^[0-9.@#]$/.test(e.key)) { e.preventDefault(); openTypeIn(e.key); return; }
    if (e.key === 'Shift') { app.shift = true; if (app.cursor && app.draft) { view.overlayOnly(); } return; }
    if (e.key === ' ') { e.preventDefault(); app.space = true; return; }
    if (e.key === 'Escape' && app.cmp) { if (app.cmp.align) { app.cmp.align = null; status(''); view.overlayOnly(); } else closeCompare(); return; }
    if (e.key === 'Escape') { if (app.paste) endPaste(); else if (app.ac?.running) cancelAutoCount(); else if (app.ac) { discardAutoCount(); status(t('ac.discarded')); } else if (app.draft?.mid) { app.draft.mid = null; liveMeasure(); view.overlayOnly(); } else if (app.draft) cancelDraft(); else if (app.tool !== 'select') setTool('select'); else selectNone(); return; }
    if (e.key === 'Enter') { if (app.draft) { e.preventDefault(); finishDraft(); } return; }
    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      if (app.draft?.mid || app.draft?.pts.length) dropLastPoint();
      else { endPaste(true); deleteSelected(); }
      return;
    }
    if (e.key === 'F3') { e.preventDefault(); toggleSnap(); return; }
    if (e.key === 'PageDown') { e.preventDefault(); moveSheet(1); return; }
    if (e.key === 'PageUp') { e.preventDefault(); moveSheet(-1); return; }
    if (e.altKey) return;
    const key = e.key.toLowerCase();
    if (key === '3') { toggle3d(); return; }
    if (d3.on && (key === 'f' || key === 'w')) { d3.view?.extents(); return; }
    const tool = { v: 'select', l: 'linear', a: 'area', o: 'circle', b: 'room', x: 'cutout', c: 'count', s: 'autocount', k: 'calibrate', d: 'check' }[key];
    if (tool) { setTool(tool); return; }
    if (key === 'r') { toggleArc(); return; }
    if (key === 'e') { toggleDeduct(); return; }
    if (key === 'f') view.fit('page');
    else if (key === 'w') view.fit('width');
    else if (key === '+' || key === '=') view.zoomAt(view.w / 2, view.h / 2, 1.25);
    else if (key === '-') view.zoomAt(view.w / 2, view.h / 2, 0.8);
  });
  window.addEventListener('keyup', (e) => {
    if (e.key === ' ') app.space = false;
    if (e.key === 'Shift') app.shift = false;
  });
  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  let leaving = false;
  window.addEventListener('beforeunload', (e) => { if (model.dirty && !leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !model.dirty || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmDiscard('leave'))) return;
    leaving = true;
    setTimeout(() => location.assign(url.href), model.dirty ? 0 : 800);
  });

  // =========================================================================
  // Refresh on every change

  function refresh() {
    est = baseEstimate(model.state);           // without the add alternates (T17)
    qmap = quantities(model.state);
    if (app.active && !model.item(app.active)) app.active = null;
    for (const id of selMore) if (!model.mark(id)) selMore.delete(id);
    if (app.sel && !model.mark(app.sel)) setSelection([...selMore]);
    renderAreas(); renderGroups(); renderNotes(); renderNoteProps(); renderFlags(); renderCmp(); renderItems(); renderItemProps(); renderMarkProps(); renderQty(); renderSheetBar(); renderSheets(); renderMissing();
    root.querySelector('[data-act="undo"]').disabled = !model.canUndo;
    root.querySelector('[data-act="redo"]').disabled = !model.canRedo;
    view.overlayOnly();
  }
  model.on(() => refresh());
  model.on(() => { if (d3.on) update3d(); });

  // =========================================================================
  // Autosave and crash recovery (0.4 item 1.2; the shell's app-autosave.js). The takeoff is the one document: every edit
  // goes through model.change (or undo/redo), so `dirty` says when a copy is needed; saving, opening a project and New
  // make it clean again and the copy goes. The PDFs travel in the copy while they are small enough (AUTOSAVE_PDF_MAX
  // together): a recovered takeoff then opens on its sheets; bigger sets are opened again by hand (listed under Sheets).

  const AUTOSAVE_PDF_MAX = 64 * 1024 * 1024;
  const autosave = new Autosave({ app: 'takeoffcraft' });
  const adoc = autosave.doc({ id: 'takeoff', name: model.state.name, snapshot: async () => {
    const total = files.reduce((n, f) => n + f.size, 0);
    const pdfs = total <= AUTOSAVE_PDF_MAX ? files.map((f) => ({ name: f.name, blob: (f.blob ??= new Blob([f.bytes], { type: 'application/pdf' })) })) : [];
    return { data: { project: model.toJSON(), pdfs }, meta: { name: model.state.name, pdfs: files.map((f) => f.name), kept: pdfs.length } };
  } });
  model.on(() => {
    if (!model.dirty) { adoc.clean(); return; }
    adoc.rename(model.state.name);
    adoc.changed();
  });
  async function recoverCopy(rec) {
    const d = rec.data;
    if (!d || !d.project || typeof d.project !== 'object') throw new Error(t('autosave.empty'));
    await ready;
    const pdfs = Array.isArray(d.pdfs) ? d.pdfs.filter((p) => p && p.blob instanceof Blob) : [];
    if (pdfs.length) await openFiles(pdfs.map((p) => new File([p.blob], String(p.name || 'drawing.pdf'), { type: 'application/pdf' })));
    const r = await loadProject(d.project);
    if (!r.ok) throw new Error(r.error);
    projectTarget = null;              // a recovered copy has no file of its own: Save asks where (desktop) or downloads
    model.markUnsaved();
    adoc.rename(model.state.name);
    adoc.changed();
    const total = Array.isArray(rec.meta?.pdfs) ? rec.meta.pdfs.length : 0;
    status(t('autosave.recovered', { name: model.state.name }) + ' ' + (pdfs.length ? t('autosave.recovered.pdfs', { n: pdfs.length }) : total ? t('autosave.recovered.nopdfs') : ''), 12000);
    refresh();
  }

  // ---- API for tests and the console ----
  window.takeoffcraft = {
    model, view,
    ready: false,
    sheets: () => sheets.map((s) => ({ key: s.key, title: s.title })),
    rendered: () => view.renders,
    toScreen: (p) => { const s = view.toScreen(p); const r = ui.over.getBoundingClientRect(); return { x: r.left + s.x, y: r.top + s.y }; },
    zoomTo: (r) => view.zoomTo(r),
    scale: () => (cur ? model.scaleOf(cur.key) : null),
    quantities: () => est.rows.filter((r) => r.kind === 'item').map((r) => ({ itemId: r.itemId, name: r.name, qty: r.qty, unit: r.unit, total: r.total })),
    estimate: () => est,
    autocount: () => (app.ac ? { running: app.ac.running, found: acVisible().length, adding: acVisible().filter((c) => !c.rejected).length, threshold: app.ac.threshold,
      boxes: acVisible().filter((c) => c.sheet === cur?.key).map((c) => ({ center: c.center, score: c.score, rejected: c.rejected })) } : null),
    selection: () => selIds(),
    view3d: () => state3d(),
    clip: () => currentClip(),
    autosave: () => ({ autosave, doc: adoc }),
    recovery: null,
    stack3d: (on) => toggleStack(on),
    touch: () => ({ coarse, pinch: !!pinch, fingers: touches.size, bar: touchBar ? !touchBar.hidden : null }),
    compare: () => (app.cmp ? { old: app.cmp.old.key, A: app.cmp.A.slice(), aligning: app.cmp.align?.picks.length ?? null, changes: app.cmp.chg ? { removed: app.cmp.chg.removed, added: app.cmp.chg.added, flagged: [...app.cmp.chg.flagged] } : null } : null),
    startCompare: (oldKey) => startCompare(sheets.find((x) => x.key === oldKey)),
    curArea: () => app.curArea,
    setArea: (id) => setCurArea(id),
    snap: () => (cur ? { ready: !!snaps.get(cur.key)?.idx, n: snaps.get(cur.key)?.n ?? null, hit: app.snap } : null),
    snapLoaded: () => (cur ? loadSnap(cur).then(() => snaps.get(cur.key)?.n ?? 0) : Promise.resolve(0)),
    pasting: () => !!app.paste,
    settings,
    reset: () => { model.load({ format: 'takeoffcraft-project', version: 1, files: [], items: [], marks: [] }); for (const f of files) model.addFile({ hash: f.hash, name: f.name, size: f.size, pages: f.pages.length }); app.active = app.sel = app.hl = null; refresh(); },
  };

  // ---- AI assistants and scripts (0.4 part 2 X.7, session agents; agents.js on host.js's control channel): off until Settings › Assistants ----
  installAgents({ model, sheetLabel, sheets: () => sheets.map((s) => ({ key: s.key, title: s.title })), current: () => (cur ? cur.key : null), exportCsv, exportXlsx });

  readColors();
  booted = true;
  applySettings();
  // =========================================================================
  // Handoff (handoff.js; same-origin IndexedDB, nothing uploaded): ?handoff=<id> opens the PDF another app left for this
  // tab; the sheet bar's "<review app>" button (ui.inc shows it only when that app here takes a handoff) sends one.

  const appNames = (() => { try { return JSON.parse(root.dataset.appNames || '{}'); } catch { return {}; } })();
  async function receiveHandoff() {
    const id = handoffParam(location.search);
    if (!id) return;
    const u = new URL(location.href);
    u.searchParams.delete('handoff');
    history.replaceState(history.state, '', u.pathname + u.search + u.hash);   // a reload must not look for it again
    busy(t('handoff.receiving'));
    let got = null;
    try { got = await takeHandoff(id); } catch (err) { busy(null); console.error(err); status(t('handoff.failed', { reason: err.message }), 12000); return; }
    busy(null);
    if (!got?.file) { status(t('handoff.gone'), 12000); return; }
    await openFiles([got.file]);
    if (files.some((f) => f.name === got.file.name)) status(t('handoff.received', { file: got.file.name, app: appNames[got.from] || t('handoff.from.other') }), 12000);
  }
  const handoffBtn = root.querySelector('[data-handoff-pdf]');
  handoffBtn?.addEventListener('click', () => {
    const f = cur?.file;
    if (!f) { status(t('handoff.nopdf')); return; }
    const app = handoffBtn.dataset.handoffApp;
    // sendHandoff opens the tab inside the click (pop-up blockers); the new page waits for the file to arrive
    sendHandoff(handoffBtn.dataset.handoffUrl, new File([f.bytes], f.name, { type: 'application/pdf' }), 'takeoffcraft').then(
      () => status(t('handoff.sent', { file: f.name, app })),
      (err) => { console.error(err); status(err.code === 'blocked' ? t('handoff.blocked') : err.code === 'storage' ? t('handoff.storage') : t('handoff.failed', { reason: err.message }), 12000); });
  });

  ready.then(async () => {
    window.takeoffcraft.ready = !!pdfjs;
    if (pdfjs) status(t('start.status'), 0);
    if (pdfjs) await receiveHandoff();
    if (pdfjs) { const launched = await host.launchFiles(); if (launched.length) await openHostFiles(launched); }   // desktop: files it was started with
    // "Recover your work?" when a page that stopped left a takeoff behind (`recovery` tells tests: none | asking | done)
    autosave.orphans().then((list) => {
      window.takeoffcraft.recovery = list.length ? 'asking' : 'none';
      if (list.length) return autosave.offer({ list, onRecover: recoverCopy }).then(() => { window.takeoffcraft.recovery = 'done'; });
    }).catch(() => { window.takeoffcraft.recovery = 'none'; });
  });
}
