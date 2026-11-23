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

import { safeName } from './ui-util.js';
import { PageView } from './viewer.js';
import { Takeoff, sheetKey, quantities, baseEstimate } from './model.js';
import * as U from './units.js';
import * as G from './geom.js';
import { Autosave } from './app-autosave.js';
import { objectJournal, recoverState, recoverExtras } from "./history/index.js";   // 0.10 PERF.24: autosave that writes what changed
import { handoffParam, takeHandoff, sendHandoff } from './handoff.js';
import { getHost } from './host.js';
import * as PP from './pickpath.js';   // 0.8 SU.880: pick the PDF's own linework
import { t } from './i18n.js';
import { installAgents } from './agents.js';
import { mountTakeoffShell } from './shell-mount.js';   // 0.8 round 3: the shell's seven modules (calc, reasons, totals, lessons, Suggest, activity, Ask)
import { calcCarbon } from './carbon.js';
import { mountCarbon } from './carbon-ui.js';
import { mountModelTakeoff } from './modeltakeoff-takeoff.js';   // 0.11 MT.1: quantities from a building model (IFC; .rvt in the lab)
import { mountTagQty } from './tagqty-ui.js';   // 0.8 EG.14
import { startAddons, columnsNow } from './addons/takeoffcraft-api.js';
import { mountSignoff, estimateTsv } from './estimate-signoff-ui.js';
import { mountTakeoffIssues } from './issues-takeoff.js';   // 0.10 BK.48 (bk-r3-stages-10): the shared issue history; takeoff sheets against an issue
import { onDefaults } from './defaults-hook.js';   // 0.10 BK.62 / BK.142 (bk-r3-schedules-10): missing rates, the sign-off, figures that select their marks
import { mountSupply } from './supply-ui.js';   // 0.8 EG.51 (takeoff_PART_2): supplier stock and lead-time files
import { mountPrices } from './prices-ui.js';   // 0.8 EG.68 (takeoff_PART_2): price memory from your own jobs
import { mountCountAll } from './countall-ui.js';   // 0.8 EG.67 (takeoff_PART_2): count every symbol of a legend across the whole set
import { mountLearn } from './learn-ui.js';   // 0.8 SU.811 (sx-learn): what it learned from your takeoffs
import { mountUndoHook } from './undo-hook.js';   // 0.9 EG.77: tells Studio each finished step
import { mountDialogs } from './dialogs-ui.js';
import { mountClipboard } from './clipboard-ui.js';
import { mountCompare } from './compare-ui.js';
import { mountNotes } from './notes-ui.js';
import { mountAreas } from './areas-ui.js';
import { mountKeys } from './keys-ui.js';
import { mountView3d } from './view3d-ui.js';
import { mountAutoCount } from './autocount-ui.js';
import { mountArcMode } from './arc-mode-ui.js';
import { mountActions } from './act-ui.js';
import { mountCadGeom } from './cad-geom-ui.js';
import { mountQty } from './qty-ui.js';
import { mountMarkProps } from './mark-props-ui.js';
import { mountItemFields } from './item-fields-ui.js';
import { mountItemProps } from './item-props-ui.js';
import { mountItemList } from './item-list-ui.js';
import { mountOverlay } from './overlay-ui.js';
import { mountSelect } from './select-ui.js';
import { mountCalibrate } from './calibrate-ui.js';
import { mountDraft } from './draft-ui.js';
import { mountSnap } from './snap-ui.js';
import { mountPick } from './pick-ui.js';
import { mountSnapIndex } from './snap-index-ui.js';
import { mountPointer } from './pointer-ui.js';
import { mountTools } from './tools-ui.js';
import { mountScales } from './scales-ui.js';
import { mountLayers } from './layers-ui.js';
import { mountSheetList } from './sheet-list-ui.js';
import { mountProject } from './project-ui.js';
import { mountSheetNav } from './sheet-nav-ui.js';
import { mountFiles } from './files-ui.js';
import { mountSettings } from './settings-ui.js';

const TYPE_ICONS = { linear: 'bezier2', area: 'pentagon', count: 'plus-circle', fixed: '123' };
const HIT = 7;          // screen px for picking marks and handles
const CLOSE = 9;        // screen px: clicking this near the first point closes an outline
const FLAG_COLOR = '#FF7F0E';   // marks to check after a revision (T13)
const SNAP = 10;        // screen px: how near a line of the drawing a point snaps to it (T1)
const SNAP_TOOLS = new Set(['linear', 'area', 'cutout', 'circle', 'cutcircle', 'calibrate', 'check']);

const root = document.querySelector('[data-takeoffcraft]');
if (root) init(root);

function init(root) {
  // PERF.71 round two (perf-finish-11 code): the closure's mutable state in one object (tools/perf/main-state.mjs); was one `let` each
  const ST = { cadMod: undefined, geomMod: undefined, sheets: undefined, cur: undefined, selMain: undefined, pickRow: undefined, pickLast: undefined, pickQueued: undefined, pdfjs: undefined, carbonUi: undefined, tagQtyUi: undefined, modelUi: undefined, signoffUi: undefined, shellMount: undefined, est: undefined, qmap: undefined, ws: undefined, colors: undefined, statusTimer: undefined, booted: undefined, projectTarget: undefined, dragDepth: undefined, bySize: undefined, thumbBusy: undefined, sheetMap: undefined, sheetMapOf: undefined, sheetStats: undefined, rowOf: undefined, down: undefined, panning: undefined, coarse: undefined, pinch: undefined, longTimer: undefined, lastTap: undefined, snapWorker: undefined, snapJobs: undefined, pickChains: undefined, qtyPick: undefined, qtyAuto: undefined, cadCountMods: undefined, acWorker: undefined, acPending: undefined, learnUi: undefined, countAllUi: undefined, pricesUi: undefined, supplyUi: undefined, roomInk: undefined, roomBusy: undefined, leaving: undefined, addonsApi: undefined };
  const $ = (s) => root.querySelector(s);
  const ui = {
    base: $('[data-base]'), over: $('[data-over]'), stage: $('[data-stage]'), hint: $('[data-hint]'), drop: $('[data-drop]'),
    busy: $('[data-busy]'), busyText: $('[data-busy-text]'), sheetbar: $('[data-sheetbar]'), sheetName: $('[data-sheet-name]'), sheetScale: $('[data-sheet-scale]'), sheetSize: $('[data-sheet-size]'), bySize: $('[data-sheets-by-size]'),
    filePdf: $('[data-file-pdf]'), fileProject: $('[data-file-project]'), preset: $('[data-scale-preset]'),
    sheets: $('[data-sheets]'), sheetsEmpty: $('[data-sheets-empty]'), sheetQ: $('[data-sheet-q]'), sheetCount: $('[data-sheet-count]'), missing: $('[data-missing]'),
    items: $('[data-items]'), itemsEmpty: $('[data-items-empty]'), itemNew: $('[data-item-new]'), library: $('[data-library]'), itemForm: $('[data-item-form]'),
    itemSec: $('[data-item-sec]'), itemH: $('[data-item-h]'), itemProps: $('[data-item-props]'), markSec: $('[data-mark-sec]'), markProps: $('[data-mark-props]'), groupsSec: $('[data-groups-sec]'), groups: $('[data-groups]'), noteSec: $('[data-note-sec]'), noteProps: $('[data-note-props]'), notesSec: $('[data-notes-sec]'), notes: $('[data-notes]'), notesH: $('[data-notes-h]'), notesOpen: $('[data-notes-open]'),
    qty: $('[data-qty]'), qtyTable: $('[data-qty-table]'), qtyWarn: $('[data-qty-warn]'), jobTotal: $('[data-job-total]'), qtyToggle: $('[data-qty-toggle]'),
    measure: $('[data-measure]'), status: $('[data-status]'), zoom: $('[data-zoom]'),
  };
  const urls = { cmaps: root.dataset.pdfCmaps, fonts: root.dataset.pdfFonts, wasm: root.dataset.pdfWasm, icc: root.dataset.pdfIcc };

  const model = new Takeoff();
  mountUndoHook({ getModel: () => model });   // 0.9 EG.77 undo across apps
  const files = [];          // open plan files: PDFs and (0.7 TD.1) DWG / DXF drawings: { hash, name, size, doc, pages, bytes, kind? ('cad' for a drawing; its `cad` is cadset.js's) }
  const CAD_RE = /\.(dwg|dxf)$/i;                           // i18n-ignore: file name extensions
  ST.cadMod = null;                                       // cadset.js, loaded the first time a drawing is opened
  ST.geomMod = null;                                      // cadgeom.js (0.7 TD.4), loaded with it
  const isCad = (f) => f?.kind === 'cad';
  ST.sheets = [];           // [{ key, file, info, title }]
  ST.cur = null;            // the sheet on screen
  const views = new Map();   // sheet key → { z, ox, oy }
  const thumbs = new Map();  // sheet key → canvas
  const app = { cmp: null, curArea: null, deduct: false, tool: 'select', active: null, hl: null, draft: null, cursor: null, shift: false, check: null, qtyMode: 'item', drag: null, space: false, arc: false, arcMethod: '3P', box: null, ac: null, paste: null };
  // the selection: app.sel is the main selected mark (its corners can be dragged, its panel shows); selMore holds the
  // others (Select all, Shift+click). Setting app.sel starts a new selection.
  ST.selMain = null;
  const selMore = new Set();
  const selListeners = new Set();     // the shell's design reasons listen for the selection (shell-mount.js)
  ST.pickRow = null; ST.pickLast = ''; ST.pickQueued = false;   // SC.5: the quantity row picked, what was last announced (pickRefs / announcePick below)
  const selChanged = () => { for (const fn of selListeners) { try { fn(); } catch (err) { console.error(err); } } };
  Object.defineProperty(app, 'sel', { enumerable: true, get: () => ST.selMain, set: (v) => { ST.selMain = v || null; selMore.clear(); selChanged(); } });
  function selIds() { return [ST.selMain, ...selMore].filter((id) => id && model.mark(id)); }
  const isSel = (id) => id === ST.selMain || selMore.has(id);
  function setSelection(ids) { app.sel = ids[0] || null; for (const id of ids.slice(1)) selMore.add(id); }
  ST.pdfjs = null;
  ST.carbonUi = null; ST.tagQtyUi = null; ST.modelUi = null;   // 0.8 takeoff_PART_3
  ST.signoffUi = null;                // 0.10 BK.62 / BK.142 (estimate-signoff-ui.js)
  ST.shellMount = null;               // the shell's seven modules (shell-mount.js), attached after the assistants' tools exist
  ST.est = baseEstimate(model.state); ST.qmap = quantities(model.state);
  // the 3D check view (scene3d.js + view3d.js, loaded on first use): on, the module, the view, the sheet it shows, sheet textures
  const d3 = { on: false, mod: null, view: null, sheet: null, scene: null, grounds: new Map(), ground: null, stack: false };
  // 0.7 WS.11: the workspace layouts (workspace-takeoffcraft.js; mounted near the end of init when the build lists them): told of every change
  ST.ws = null;
  const wsChanged = () => ST.ws?.changed();

  const { selectAt, handleAt, arcHandles, dragTo, commitDrag } = mountSelect({
    ST, ui, model, app, selMore, selIds, isSel, setSelection, status,
    get hitPx() { return hitPx; },
    get view() { return view; },
    get settings() { return settings; },
    get noteHit() { return noteHit; },
    get renderMarkProps() { return renderMarkProps; },
    get renderNoteProps() { return renderNoteProps; },
    get modKey() { return modKey; },
    get setActive() { return setActive; },
    get renderItems() { return renderItems; },
    get renderItemProps() { return renderItemProps; },
    get segMid() { return segMid; },
  });
  const { settings, saveSettings, lenMode, tempMode, fieldUnit, lenField, lenHint, ftIn, areaShow, measureArea, syncSettingsForm, applySettings } = mountSettings({
    ST, model, app, d3, refresh, root,
    get loadSnap() { return loadSnap; },
  });
  const { pickGapText, pickHover, pickClick, pickTrim, pickKey, pickCommit, pickClearStaged, drawPick } = mountPick({
    ST, ui, model, app, status, syncSettingsForm,
    get snaps() { return snaps; },
    get view() { return view; },
    get ftIn() { return ftIn; },
    get settings() { return settings; },
    get measureArea() { return measureArea; },
    get saveSettings() { return saveSettings; },
    get openItemForm() { return openItemForm; },
    get inArea() { return inArea; },
    get renderMarkProps() { return renderMarkProps; },
    get FLAG_COLOR() { return FLAG_COLOR; },
  });
  const { setTool, cancelDraft, dropLastPoint, touchBar, renderTouchBar, canType, openTypeIn, closeTypeIn } = mountTools({
    ST, ui, model, isCad, app, d3, wsChanged, pickGapText, pickCommit, pickTrim, pickClearStaged, status, pickClear, root,
    get close3d() { return close3d; },
    get endPaste() { return endPaste; },
    get geomKind() { return geomKind; },
    get NOTE_TOOLS() { return NOTE_TOOLS; },
    get renderNoteProps() { return renderNoteProps; },
    get discardAutoCount() { return discardAutoCount; },
    get loadSnap() { return loadSnap; },
    get snaps() { return snaps; },
    get renderAcBar() { return renderAcBar; },
    get renderGeomBar() { return renderGeomBar; },
    get ftIn() { return ftIn; },
    get settings() { return settings; },
    get view() { return view; },
    get setActive() { return setActive; },
    get openItemForm() { return openItemForm; },
    get liveMeasure() { return liveMeasure; },
    get arcPrompt() { return arcPrompt; },
    get finishDraft() { return finishDraft; },
    get arcRole() { return arcRole; },
    get arcStep() { return arcStep; },
    get click() { return click; },
  });
  const { click, noteDeduct, finishDraft, previewPts, liveMeasure } = mountDraft({
    ST, ui, model, app, selectAt, status, setTool, closeTypeIn, pickClick,
    get alignPick() { return alignPick; },
    get placePaste() { return placePaste; },
    get view() { return view; },
    get inArea() { return inArea; },
    get fillRoom() { return fillRoom; },
    get noteAt() { return noteAt; },
    get boxNote() { return boxNote; },
    get arcStep() { return arcStep; },
    get arcSign() { return arcSign; },
    get closePx() { return closePx; },
    get calibrateDialog() { return calibrateDialog; },
    get ftIn() { return ftIn; },
    get renderMarkProps() { return renderMarkProps; },
    get arcPending() { return arcPending; },
    get arcRole() { return arcRole; },
    get measureArea() { return measureArea; },
  });
  const { snaps, loadSnap, snapHit } = mountSnapIndex({
    ST, isCad, app, status,
    get settings() { return settings; },
    get snapPx() { return snapPx; },
    get view() { return view; },
    get SNAP_TOOLS() { return SNAP_TOOLS; },
  });
  const { toggleSnap, drawSnap } = mountSnap({
    ST, app, status, applySettings, loadSnap, root,
    get settings() { return settings; },
    get saveSettings() { return saveSettings; },
    get snaps() { return snaps; },
    get view() { return view; },
  });
  const { drawOverlay, segMid, tag } = mountOverlay({
    ST, model, app, selMore, selIds, isSel, renderTouchBar, drawPick, drawSnap, previewPts, arcHandles,
    get view() { return view; },
    get drawCompare() { return drawCompare; },
    get settings() { return settings; },
    get drawNotesLayer() { return drawNotesLayer; },
    get ftIn() { return ftIn; },
    get areaShow() { return areaShow; },
    get closePx() { return closePx; },
    get drawAutoCount() { return drawAutoCount; },
    get drawCadGeom() { return drawCadGeom; },
    get drawPaste() { return drawPaste; },
    get FLAG_COLOR() { return FLAG_COLOR; },
  });
  const view = new PageView(ui.base, ui.over, {
    onOverlay: drawOverlay,
    onView: (v) => { if (ST.cur) views.set(ST.cur.key, v); ui.zoom.textContent = ST.cur ? Math.round(v.z / (96 / 72) * 100) + '%' : ''; },
  });

  // ---- theme colours for the overlay (read from the tokens) ----
  ST.colors = {};
  const readColors = () => {
    const cs = getComputedStyle(root);
    ST.colors = { action: cs.getPropertyValue('--action').trim() || '#1E48C8', ink: cs.getPropertyValue('--ink').trim() || '#17202B', sheet: cs.getPropertyValue('--sheet-2').trim() || '#fff', layer: cs.getPropertyValue('--layer').trim() || '#8A6200' };
    view.invalidate();
  };
  new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', readColors);   // i18n-ignore: a media query

  // ---- status ----
  ST.statusTimer = 0;
  function status(s, ms = 6000) { ui.status.textContent = s; clearTimeout(ST.statusTimer); if (ms) ST.statusTimer = setTimeout(() => { ui.status.textContent = ''; }, ms); }
  function busy(text) { ui.busy.hidden = !text; if (text) ui.busyText.textContent = text; wsChanged(); }

  // ---- pdf.js ----
  const ready = (async () => {
    try {
      ST.pdfjs = await import('pdfjs-dist');
      ST.pdfjs.GlobalWorkerOptions.workerSrc = root.dataset.pdfWorker;
    } catch (err) {
      console.error(err);
      status(t('pdf.err.reader'), 0);
    }
  })();

  // =========================================================================
  // Files

  const { openFiles } = mountFiles({
    ST, ui, urls, model, files, CAD_RE, isCad, snaps, status, busy, ready, refresh, root,
    get rebuildSheets() { return rebuildSheets; },
    get showSheet() { return showSheet; },
    get importIfcFile() { return importIfcFile; },
    get openProject() { return openProject; },
    get confirmDiscard() { return confirmDiscard; },
    get loadProject() { return loadProject; },
  });

  const { rebuildSheets, sheetLabel, showSheet, moveSheet } = mountSheetNav({
    ST, model, files, views, app, d3, cancelDraft, loadSnap, view, settings,
    get renderSheets() { return renderSheets; },
    get renderMissing() { return renderMissing; },
    get closeCompare() { return closeCompare; },
    get update3d() { return update3d; },
    get renderSheetBar() { return renderSheetBar; },
    get markCurrentSheet() { return markCurrentSheet; },
    get renderMarkProps() { return renderMarkProps; },
    get visibleSheets() { return visibleSheets; },
  });

  // Files through the shell's host adapter (host.js; 0.4 W.2 / 1.4, desktop W.4): the browser's picker or the desktop's
  // dialogs, drops, the recent list on the start screen, files handed over at launch or double-clicked while running.
  // Saving the takeoff writes it in place on the desktop (the .takeoff.json it was opened from) and downloads in the browser.
  const host = getHost({ app: 'takeoffcraft' });
  const PDF_TYPES = [{ description: 'PDF, DWG, DXF', extensions: ['.pdf', '.dwg', '.dxf'] }];                       // i18n-ignore: a file type the OS shows
  const PROJECT_TYPES = [{ description: 'TakeoffCraft', extensions: ['.json'] }];          // i18n-ignore: a file type the OS shows
  ST.projectTarget = null;      // the HostFile the takeoff was opened from, when it can be written in place
  async function openHostFiles(list) {
    const named = await Promise.all(list.map(async (hf) => { const f = await hf.file(); return f instanceof File ? f : new File([f], hf.name, { type: hf.type || '' }); }));
    const proj = list.find((hf) => /\.json$/i.test(hf.name));
    const before = model.version;
    await openFiles(named);
    if (proj && model.version !== before && !model.dirty) ST.projectTarget = proj.writable ? proj : null;   // opened (not refused)
  }
  ui.filePdf.addEventListener('change', () => { const l = [...ui.filePdf.files]; ui.filePdf.value = ''; if (l.length) host.fromDrop(l).then(openHostFiles); });
  ui.fileProject.addEventListener('change', () => { const l = [...ui.fileProject.files]; ui.fileProject.value = ''; if (l.length) host.fromDrop(l.slice(0, 1)).then(openHostFiles); });
  host.onOpenFiles((list) => openHostFiles(list));

  // 2026-11-12: the start card's "Try a sample file" opens the kitchen plan and its takeoff through the normal open path (PDF first, then the project); also in the command palette (Ctrl+K)
  async function openSample() {
    try {
      const get = async (name, type) => { const r = await fetch(new URL('./samples/' + name, import.meta.url)); if (!r.ok) throw new Error('HTTP ' + r.status); return new File([await r.blob()], name, { type }); };   // i18n-ignore: file names
      await openFiles([await get('kitchen-plan-sheet.pdf', 'application/pdf'), await get('kitchen-bid.takeoff.json', 'application/json')]);
    } catch (err) { busy(null); status(t('hint.sample.noload', { why: err.message })); }
  }
  for (const b of root.querySelectorAll('[data-hint-sample]')) b.addEventListener('click', openSample);
  // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
  { const regSample = () => window.ccPalette?.register?.([{ id: 'takeoffcraft-sample', label: t('hint.trysample'), group: 'file', keywords: 'sample example demo try', run: openSample }]); if (window.ccPalette) regSample(); else window.addEventListener('load', regSample); }

  // drop PDFs (and/or a project) anywhere on the app
  ST.dragDepth = 0;
  root.addEventListener('dragenter', (e) => { if (e.dataTransfer?.types?.includes('Files')) { e.preventDefault(); ST.dragDepth++; ui.drop.hidden = false; } });
  root.addEventListener('dragover', (e) => { if (e.dataTransfer?.types?.includes('Files')) e.preventDefault(); });
  root.addEventListener('dragleave', () => { if (--ST.dragDepth <= 0) { ST.dragDepth = 0; ui.drop.hidden = true; } });
  root.addEventListener('drop', (e) => {
    if (!e.dataTransfer?.files?.length) return;
    e.preventDefault(); ST.dragDepth = 0; ui.drop.hidden = true;
    host.fromDrop(e.dataTransfer).then(openHostFiles);     // fromDrop reads the drop's handles before its first await
  });

  const { confirmDiscard, openProject, importIfcFile, importQuantityFile, loadProject, saveProject, saveOlder, renderMissing } = mountProject({
    ST, ui, model, files, app, view, status, busy, rebuildSheets, showSheet, host, PROJECT_TYPES, root,
    get itemList() { return itemList; },
    get setActive() { return setActive; },
    get renderSheetBar() { return renderSheetBar; },
  });

  // =========================================================================
  // Sheets list

  const { pageSizeRows, visibleSheets, thumbQueue, renderSheets, markCurrentSheet, scaleText, renderSheetBar } = mountSheetList({
    ST, ui, model, isCad, thumbs, app, wsChanged, setTool, status, showSheet, renderToolbar, root,
    get renderLayers() { return renderLayers; },
    get renderGeomBar() { return renderGeomBar; },
  });

  const { renderLayers } = mountLayers({
    ST, isCad, view, root,
  });

  const { confirmRescale } = mountScales({
    ST, ui, model, isCad, status, busy, scaleText, renderSheetBar, root,
  });

  // =========================================================================
  // Pointer

  const { hitPx, closePx, snapPx, touches } = mountPointer({
    ST, ui, app, d3, handleAt, dragTo, commitDrag, pickHover, pickCommit, finishDraft, liveMeasure, click, snapHit, view, status, settings, renderTouchBar, root,
    get geomWindow() { return geomWindow; },
    get geomClick() { return geomClick; },
    get runAutoCount() { return runAutoCount; },
    get toggleCandidate() { return toggleCandidate; },
    get HIT() { return HIT; },
    get CLOSE() { return CLOSE; },
    get SNAP() { return SNAP; },
  });

  const { calibrateDialog } = mountCalibrate({
    ST, model, status, confirmRescale, setTool, root,
  });

  // =========================================================================
  // Items

  const { openItemForm, setActive, focusItem, selectMarks, qtyLabel, renderItems, keepFocus, fieldRow, textInput } = mountItemList({
    ST, ui, model, app, selChanged, setSelection, view, status, settings, areaShow, syncSettingsForm, showSheet, renderSheets, setTool, refresh, announcePick,
    get libraryDialog() { return libraryDialog; },
    get renderItemProps() { return renderItemProps; },
    get renderQty() { return renderQty; },
    get renderMarkProps() { return renderMarkProps; },
    get TYPE_ICONS() { return TYPE_ICONS; },
  });

  const { renderItemProps } = mountItemProps({
    ST, ui, model, app, status, fieldUnit, lenField, lenHint, ftIn, keepFocus, fieldRow, textInput, refresh, root,
    get fixedFields() { return fixedFields; },
    get condFields() { return condFields; },
    get backoutFields() { return backoutFields; },
    get pitchFields() { return pitchFields; },
    get tempFields() { return tempFields; },
    get shapeFields() { return shapeFields; },
    get crewFields() { return crewFields; },
    get compEditor() { return compEditor; },
    get copyItem() { return copyItem; },
    get duplicateItem() { return duplicateItem; },
  });

  const { crewFields, condFields, fixedFields, tempFields, shapeFields, pitchFields, backoutFields, compEditor } = mountItemFields({
    ST, model, status, tempMode, fieldUnit, lenField, lenHint, fieldRow, textInput, renderItemProps,
  });

  const { renderMarkProps, deleteSelected } = mountMarkProps({
    ui, model, app, selMore, selIds, d3, wsChanged, status, ftIn, areaShow, sheetLabel, setTool, setActive, keepFocus, fieldRow, textInput, renderToolbar, announcePick,
    get areaField() { return areaField; },
    get groupField() { return groupField; },
    get copySelection() { return copySelection; },
    get duplicateSelection() { return duplicateSelection; },
    get cutSelection() { return cutSelection; },
    get modKey() { return modKey; },
  });

  // =========================================================================
  // Clipboard: copy, cut, paste (follows the pointer), paste in place, duplicate, select all / none

  // automatic counting (autocount-ui.js) and the 3D check view (view3d-ui.js) are mounted here, above the clipboard, which is handed
  // discardAutoCount and close3d (PERF.71 round two; their text kept its order inside each module)
  const { renderAcBar, acVisible, cancelAutoCount, discardAutoCount, fillRoom, rasterize, searchInWorker, runAutoCount, toggleCandidate, drawAutoCount } = mountAutoCount({
    ST, $, model, app, view, status, busy, settings, ftIn, setTool, renderMarkProps,
    get inArea() { return inArea; },
    get modKey() { return modKey; },
  });
  const { toggle3d, close3d, update3d, toggleStack, state3d } = mountView3d({
    ST, $, ui, model, app, selMore, selIds, isSel, setSelection, d3, wsChanged, view, status, busy, settings, ftIn, host, setTool, cancelDraft, setActive, renderItems, renderItemProps, renderMarkProps, discardAutoCount, root,
    get endPaste() { return endPaste; },
    get modKey() { return modKey; },
    get levelsDialog() { return levelsDialog; },
  });
  const { isMac, modKey, currentClip, itemList, copySelection, cutSelection, copyItem, duplicateItem, startPaste, duplicateSelection, placePaste, endPaste, selectAll, selectNone, drawPaste } = mountClipboard({
    ui, model, app, selIds, setSelection, d3, view, status, settings, scaleText, setTool, setActive, renderMarkProps, discardAutoCount, close3d, refresh,
    get cur() { return ST.cur; },
    get sheets() { return ST.sheets; },
    get colors() { return ST.colors; },
  });
  if (isMac) for (const k of root.querySelectorAll('.tc-menu-list kbd')) k.textContent = k.textContent.replace('Ctrl+', 'Cmd+');

  // =========================================================================
  // Bid areas (T12): the picker on top of the Items panel, the manage dialog, the mark field, the By area table

  const { areaSel, inArea, renderAreas, setCurArea, newArea, manageAreas, areaField, groupField, renderGroups, buildAreaTable } = mountAreas({
    ui, model, app, setSelection, view, status, showSheet, setTool, setActive, keepFocus, textInput, renderMarkProps, root,
    get cur() { return ST.cur; },
    get est() { return ST.est; },
  });
  areaSel.addEventListener('change', async () => {
    const v = areaSel.value;
    if (v === '__new') { areaSel.value = app.curArea || ''; const id = await newArea(); if (id) setCurArea(id); return; }
    if (v === '__manage') { areaSel.value = app.curArea || ''; await manageAreas(); return; }
    setCurArea(v || null);
  });
  const { NOTE_TOOLS, noteAt, boxNote, noteHit, renderNoteProps, renderNotes, drawNotesLayer } = mountNotes({
    ui, model, app, view, status, sheetLabel, showSheet, hitPx, tag, keepFocus, renderMarkProps, root,
    get cur() { return ST.cur; },
    get colors() { return ST.colors; },
  });
  ui.notesOpen.addEventListener('change', renderNotes);

  // =========================================================================
  // Revision overlay (T13; overlay.js): the older sheet in red over this one, aligned; changes found by comparing their
  // ink; the old sheet's takeoff moved here with the marks whose drawing changed flagged for review.

  const { openCompare, startCompare, closeCompare, drawCompare, renderCmp, startAlign, alignPick, findChanges, moveTakeoff, renderFlags, nextFlag } = mountCompare({
    $, model, app, d3, view, status, busy, showSheet, scaleText, setTool, cancelDraft, setActive, renderMarkProps, endPaste, discardAutoCount, rasterize, close3d, refresh, root,
    get cur() { return ST.cur; },
    get sheets() { return ST.sheets; },
    get colors() { return ST.colors; },
  });
  $('[data-cmp-align]').addEventListener('click', () => startAlign());
  $('[data-cmp-find]').addEventListener('click', () => findChanges());
  $('[data-cmp-move]').addEventListener('click', () => moveTakeoff());
  $('[data-cmp-close]').addEventListener('click', () => closeCompare());

  // =========================================================================
  // Quantities table

  const { qtySet, renderQty, exportXlsx, exportCsv, exportMaterials, exportSpots, exportPdf, exportEmbed } = mountQty({
    ST, ui, model, files, isCad, app, status, busy, settings, ftIn, areaShow, sheetLabel, showSheet, host, pageSizeRows, setActive, focusItem, keepFocus, buildAreaTable, root,
  });

  // =========================================================================
  // Count from the drawing (0.7 TD.3): by block, by layer + entity type, by text — exact, from the DWG / DXF itself

  const { loadCadCount, cadCount, geomItems, geomKind, geomClick, geomWindow, geomClear, renderGeomBar, addGeometry, drawCadGeom } = mountCadGeom({
    ST, model, isCad, app, view, status, busy, ftIn, areaShow, hitPx, setActive, modKey, inArea, root,
  });

  // =========================================================================
  // Measure from geometry (0.7 TD.4): pick the drawing's own lines, arcs, polylines and hatches, take them as a linear or area item

  const { bidDialog, levelDialog, loadLib, saveLib, libraryDialog, packsDialog, levelsDialog } = mountDialogs({
    model, files, status, settings, fieldUnit, lenField, lenHint, sheetLabel, host, setActive, root, TYPE_ICONS,
    get est() { return ST.est; },
    get sheets() { return ST.sheets; },
  });
  const { toggleDeduct, toggleArc, arcSign, arcPending, arcRole, arcPrompt, arcStep, newTakeoff } = mountArcMode({
    ST, ui, model, files, views, thumbs, app, view, status, rebuildSheets, confirmDiscard, thumbQueue, setTool, closePx, snaps, noteDeduct, finishDraft, liveMeasure, cancelAutoCount, discardAutoCount, endPaste, closeCompare, refresh, root,
  });
  const { actions } = mountActions({
    model, view, status, host, PDF_TYPES, PROJECT_TYPES, openHostFiles, saveProject, saveOlder, cancelDraft, deleteSelected, toggle3d, endPaste, copySelection, cutSelection, startPaste, duplicateSelection, selectAll, selectNone, openCompare, nextFlag, exportXlsx, exportCsv, exportMaterials, exportSpots, exportPdf, exportEmbed, cadCount, bidDialog, levelDialog, newTakeoff, toggleArc, toggleDeduct, root,
  });

  // =========================================================================
  // Keyboard

  mountKeys({
    app, d3, view, status, moveSheet, saveProject, setTool, cancelDraft, dropLastPoint, canType, openTypeIn, pickTrim, pickKey, toggleSnap, finishDraft, liveMeasure, deleteSelected, startPaste, endPaste, selectNone, closeCompare, geomClear, addGeometry, actions, toggleDeduct, toggleArc, arcPrompt, cancelAutoCount, discardAutoCount, toggle3d,
  });
  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  ST.leaving = false;
  window.addEventListener('beforeunload', (e) => { if (model.dirty && !ST.leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !model.dirty || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmDiscard('leave'))) return;
    ST.leaving = true;
    setTimeout(() => location.assign(url.href), model.dirty ? 0 : 800);
  });

  // =========================================================================
  // Toolbar availability: a button that cannot do anything right now is greyed out

  const NEEDS_SHEET = new Set(['fit-page', 'fit-width', 'arc', 'deduct', 'select-all', 'paste', 'paste-in-place']);
  const NEEDS_SELECTION = new Set(['copy', 'cut', 'duplicate', 'delete', 'select-none']);
  const NEEDS_PDF = new Set(['export-pdf', 'export-embed']);
  const NEEDS_CAD = new Set(['cad-count']);                   // counting from a drawing needs a drawing's sheet on screen
  const NEEDS_WORK = new Set(['save-project', 'save-older', 'export-xlsx', 'export-csv', 'export-materials', 'export-spots', 'export-bid', 'export-level']);
  const exportSummary = root.querySelector('[data-export-menu] > summary');
  function renderToolbar() {
    const st = model.state;
    const hasPdf = files.length > 0;
    const hasWork = hasPdf || st.items.length > 0;
    const hasSel = !!app.sel || selMore.size > 0;
    for (const b of root.querySelectorAll('[data-act]')) {
      const a = b.dataset.act;
      if (a === 'new-takeoff') b.disabled = !(hasWork || st.marks.length || model.dirty);
      else if (NEEDS_SHEET.has(a)) b.disabled = !ST.cur;
      else if (NEEDS_SELECTION.has(a)) b.disabled = !hasSel;
      else if (NEEDS_PDF.has(a)) b.disabled = !hasPdf;
      else if (NEEDS_CAD.has(a)) b.disabled = !(ST.cur && isCad(ST.cur.file));
      else if (NEEDS_WORK.has(a)) b.disabled = !hasWork;
    }
    for (const b of root.querySelectorAll('button[data-tool]')) if (b.dataset.tool !== 'select') b.disabled = !ST.cur;
    if (exportSummary) {
      const off = !hasWork;
      exportSummary.setAttribute('aria-disabled', String(off));
      exportSummary.tabIndex = off ? -1 : 0;
      if (off) exportSummary.parentElement.open = false;
    }
  }
  renderToolbar();

  // =========================================================================
  // Refresh on every change

  function refresh() {
    ST.est = baseEstimate(model.state);           // without the add alternates (T17)
    ST.qmap = quantities(model.state);
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
  // 0.10 PERF.24: the first copy has the project and the PDFs, then only what changed; each PDF is an extra chunk written once (again only when its bytes are replaced)
  const pdfBlob = (f) => { if (!f.blob || f.blobOf !== f.bytes) { f.blob = new Blob([f.bytes], { type: isCad(f) ? 'application/octet-stream' : 'application/pdf' }); f.blobOf = f.bytes; } return f.blob; };
  const adoc = autosave.doc({ id: 'takeoff', name: model.state.name, journal: objectJournal({
    spec: { autoArrays: 'id' }, identity: () => model,
    get: () => model.toJSON(),
    extras: (h) => {
      const keep = files.reduce((n, f) => n + f.size, 0) <= AUTOSAVE_PDF_MAX;   // over the cap the PDFs stay out of the copy (listed by name in meta; opened again by hand)
      files.forEach((f, i) => { h.setExtra('x:pdf:' + i, keep ? pdfBlob(f) : null); h.setExtra('x:name:' + i, f.name); });
      for (const k of h.extraKeys()) { const i = Number(k.split(':')[2]); if (i >= files.length) h.setExtra(k, null); }
    },
    meta: () => ({ name: model.state.name, pdfs: files.map((f) => f.name), kept: files.reduce((n, f) => n + f.size, 0) <= AUTOSAVE_PDF_MAX ? files.length : 0 }),
  }) });
  model.on(() => {
    if (!model.dirty) { adoc.clean(); return; }
    adoc.rename(model.state.name);
    adoc.changed();
  });
  async function recoverCopy(rec) {
    let d = rec.data;
    if (d && d.kind === 'chunks') {   // 0.10: a base and its changes
      const x = recoverExtras(rec), pdfs = [];
      for (let i = 0; x.has('x:name:' + i); i++) if (x.get('x:pdf:' + i) instanceof Blob) pdfs.push({ name: x.get('x:name:' + i), blob: x.get('x:pdf:' + i) });
      d = { project: recoverState(rec, { autoArrays: 'id' }), pdfs };
    }
    if (!d || !d.project || typeof d.project !== 'object') throw new Error(t('autosave.empty'));
    await ready;
    const pdfs = Array.isArray(d.pdfs) ? d.pdfs.filter((p) => p && p.blob instanceof Blob) : [];
    if (pdfs.length) await openFiles(pdfs.map((p) => new File([p.blob], String(p.name || 'drawing.pdf'), { type: 'application/pdf' })));
    const r = await loadProject(d.project);
    if (!r.ok) throw new Error(r.error);
    ST.projectTarget = null;              // a recovered copy has no file of its own: Save asks where (desktop) or downloads
    model.markUnsaved();
    adoc.rename(model.state.name);
    adoc.changed();
    const total = Array.isArray(rec.meta?.pdfs) ? rec.meta.pdfs.length : 0;
    status(t('autosave.recovered', { name: model.state.name }) + ' ' + (pdfs.length ? t('autosave.recovered.pdfs', { n: pdfs.length }) : total ? t('autosave.recovered.nopdfs') : ''), 12000);
    refresh();
  }

  // the menu styles (0.5 IP.3, input-takeoffcraft.js + the shell's app-input-ui.js): their messages go to the status line,
  // and letters stay TakeoffCraft's while a run, an outline, a paste or an auto count is under way
  window.ccInputHooks = { status: (text, bad) => status(text || '', bad ? 8000 : 6000), busy: () => !!(app.draft || app.paste || app.ac || app.box) };
  // a menu style hides the toolbar, and with it the Scale group's preset list: the presets then sit on the sheet bar, beside the
  // sheet's scale, and go back when the style is the toolbar again (the shell fires cc-input-mouse on every style change)
  const presetLabel = ui.preset.closest('label'), presetHome = presetLabel?.parentElement;
  function placePreset() {
    if (!presetLabel || !presetHome || presetLabel.closest('.ws-block')) return;   // a workspace layout holds it in its view bar (0.7 WS.11)
    const styled = !!root.querySelector(':scope > [role="toolbar"].cc-in-styled');
    if (styled && presetLabel.parentElement !== ui.sheetbar) ui.sheetScale.after(presetLabel);
    else if (!styled && presetLabel.parentElement !== presetHome) presetHome.append(presetLabel);
  }
  window.addEventListener('cc-input-mouse', () => requestAnimationFrame(placePreset));

  // ---- 0.7 WS.11: the workspace layouts (Settings › Global › Layout): the shell's engine, filled by workspace-takeoffcraft.js ----
  /** Why a command's own button can't run now, in words (the layouts grey the tool with it); '' = no better reason than its own. */
  function whyOff(c, b) {
    const a = b.dataset.act, tool = b.dataset.tool;
    if ((c.sheet || NEEDS_SHEET.has(a) || (tool && tool !== 'select')) && !ST.cur) return t('input.why.pdf');
    if (NEEDS_CAD.has(a) || tool === 'cadgeom') return t('ws.why.cad');
    if (a === 'next-flag') return t('ws.why.flag');
    if (b.hasAttribute('data-handoff-pdf')) return t('handoff.nopdf');
    if (NEEDS_SELECTION.has(a)) return t('ws.why.sel');
    if (NEEDS_PDF.has(a)) return t('ws.why.pdffile');
    if (NEEDS_WORK.has(a) || b.closest('[data-export-menu]')) return t('ws.why.work');
    if (a === 'undo') return t('ws.why.undo');
    if (a === 'redo') return t('ws.why.redo');
    if (a === 'new-takeoff') return t('ws.why.new');
    return '';
  }
  // ---- SC.5 (sc-r5-select): the pick is announced to the page (SuperCad Studio hears `cc-pick` and keeps one selection across its panels) and a pick from
  // another panel comes back through window.ccPickers.takeoffcraft. Both are inert outside Super. The pick is the selected marks (`mark:<id>`, as the project's
  // object registry names them) or, with no mark selected, the quantity row a person chose (its id; `key` = the sender's key of a quantity that came from a model).
  function pickRefs() {
    const marks = selIds();
    if (marks.length) { ST.pickRow = null; return marks.map((id) => ({ id: 'mark:' + id })); }
    const it = ST.pickRow && model.item(ST.pickRow);
    return it ? [{ id: String(it.id), ...(it.origin && it.origin.key ? { key: String(it.origin.key) } : {}) }] : [];
  }
  function announcePick() {
    if (ST.pickQueued) return;
    ST.pickQueued = true;
    queueMicrotask(() => {   // once per change: the main mark and the others are set one after another
      ST.pickQueued = false;
      const refs = pickRefs(), key = refs.map((r) => r.id).join(',');
      if (key === ST.pickLast) return;
      ST.pickLast = key;
      try { window.dispatchEvent(new CustomEvent('cc-pick', { detail: { app: 'takeoffcraft', ids: refs.map((r) => r.id), refs } })); } catch { /* no window */ }
    });
  }
  selListeners.add(announcePick);
  /** Show a pick from another panel: marks by `mark:<id>` (on the sheet that has them), else the first quantity row named by its id or by its sender's key. → the ids shown, or false */
  async function pickApply(refs) {
    const marks = [], items = [];
    for (const r of (refs || []).slice(0, 5000)) {
      const id = String(r && r.id != null ? r.id : '');
      if (id.startsWith('mark:')) { const m = model.mark(id.slice(5)); if (m) marks.push(m); continue; }
      const it = model.item(id) || model.state.items.find((i) => i.origin && typeof i.origin.key === 'string' && i.origin.key.toLowerCase() === id.toLowerCase());
      if (it) items.push(it);
    }
    if (marks.length) {
      if (!marks.some((m) => m.sheet === ST.cur?.key)) { const target = ST.sheets.find((x) => marks.some((m) => m.sheet === x.key)); if (!target) return false; await showSheet(target.key); }
      const here = marks.filter((m) => m.sheet === ST.cur?.key).map((m) => m.id);
      if (!here.length) return false;
      if (app.active !== marks[0].item) setActive(marks[0].item, false);
      setSelection(here); renderMarkProps(); renderItems(); renderItemProps(); view.overlayOnly();
    } else if (items.length) {
      if (selIds().length) { app.sel = null; renderMarkProps(); }
      setActive(items[0].id, true);
    } else return false;
    const now = pickRefs();
    ST.pickLast = now.map((r) => r.id).join(',');   // shown from elsewhere: not a new pick of this panel
    return now.map((r) => r.id);
  }
  function pickClear() {
    if (selIds().length) { app.sel = null; renderMarkProps(); }
    ST.pickRow = null; ST.pickLast = '';
    if (app.hl) { app.hl = null; renderItems(); renderSheets(); renderQty(); }
    view.overlayOnly();
    return true;
  }
  (window.ccPickers = window.ccPickers || {}).takeoffcraft = { apply: pickApply, clear: pickClear, get: () => { const refs = pickRefs(); return { ids: refs.map((r) => r.id), refs }; } };

  const wsHost = {
    root, stage: ui.stage, panels: { left: $('.tc-left'), right: $('.tc-right') }, status: ui.status,
    say: (text, bad) => status(text || '', bad ? 8000 : 6000),
    sheets: () => ST.sheets.map((s) => { const sc = model.scaleOf(s.key); return { key: s.key, title: s.title, cad: isCad(s.file), scale: sc ? scaleText(sc, s.info.userUnit, true) : '' }; }),
    current: () => ST.cur?.key || null,
    show: showSheet,
    tool: () => app.tool,
    selection: selIds,
    selectionKinds: () => [...new Set(selIds().map((id) => model.mark(id)?.kind).filter(Boolean))],   // 0.11 UI.25: linear | area | count … for ccState
    isMark: (id) => !!model.mark(id), isItem: (id) => !!model.item(id),
    pick: pickApply,   // 0.11 UI.25: the reverse channel (ccState.select) takes the same path as SuperCad's picker
    name: () => model.state.name || '',
    dirty: () => !!model.dirty,
    busy: () => !ui.busy.hidden,
    hasFiles: () => files.length > 0,
    is3d: () => d3.on,
    endTool: () => { if (app.tool !== 'select') setTool('select'); },
    conditions: () => model.state.items.map((it) => ({ id: it.id, name: it.name, color: it.color, qty: qtyLabel(it), active: app.active === it.id })),
    estimate: () => ({ rows: ST.est.rows.filter((r) => r.kind === 'item').map((r) => ({ id: r.itemId, name: r.name, total: Number.isFinite(r.total) ? U.formatCents(r.total) : '' })),
      total: model.state.items.length ? ui.jobTotal.textContent : '' }),
    focusItem,
    openQty: () => { ST.qtyAuto = false; if (root.classList.contains('is-qty-closed')) qtySet(false); },   // opened by code: not the person's pick (tc-qty)
    reason: whyOff, presetLabel, placePreset,
    propSections: [ui.itemSec, ui.noteSec, ui.markSec],
    areaRow: $('.tc-area-row'), sheetbar: ui.sheetbar, snap: $('[data-snap-toggle]'), zoom: ui.zoom,
    resized: () => view.resize(),
  };
  if (document.getElementById('cc-workspace')) {   // the build lists layouts (manifest "workspaces"); the engine is in the import map then
    import('./workspace-takeoffcraft.js').then((m) => m.mountTakeoffcraftWorkspace(wsHost)).then((w) => { ST.ws = w; if (!w) document.documentElement.removeAttribute('data-cc-ws-boot'); })
      .catch((err) => { console.error(err); document.documentElement.removeAttribute('data-cc-ws-boot'); });   // a failed start shows the page in classic
  }

  // ---- API for tests and the console ----
  window.takeoffcraft = {
    model, view,
    importQuantities: (json, name) => importQuantityFile(json, String(name || 'quantities.json')) === true,   // 0.11 MT.4: another app's quantities file (SuperCad Studio's Model takeoff) joins this takeoff in place
    files, openFiles, status: (s) => status(s),   // Studio Live (live.js): the PDFs a joiner gets, opening them, its messages
    ready: false,
    sheets: () => ST.sheets.map((s) => ({ key: s.key, title: s.title })),
    sheet: () => (ST.cur ? ST.cur.key : ''),   // 0.9 SU.1112: the sheet on screen (live.js presenceView: others' cursors on it)
    showSheet: (key) => (ST.sheets.some((s) => s.key === key) ? showSheet(key) : null),   // 0.9 ED.1: a follower opens the leader's sheet (live.js presenceView goSpace)
    rendered: () => view.renders,
    toScreen: (p) => { const s = view.toScreen(p); const r = ui.over.getBoundingClientRect(); return { x: r.left + s.x, y: r.top + s.y }; },
    zoomTo: (r) => view.zoomTo(r),
    scale: () => (ST.cur ? model.scaleOf(ST.cur.key) : null),
    quantities: () => ST.est.rows.filter((r) => r.kind === 'item').map((r) => ({ itemId: r.itemId, name: r.name, qty: r.qty, unit: r.unit, total: r.total })),
    estimate: () => ST.est,
    countall: () => ST.countAllUi?.api.state() || null,   // 0.8 EG.67 (tools/takeoffcraft-test/browser-countall.mjs)
    autocount: () => (app.ac ? { running: app.ac.running, found: acVisible().length, adding: acVisible().filter((c) => !c.rejected).length, threshold: app.ac.threshold,
      boxes: acVisible().filter((c) => c.sheet === ST.cur?.key).map((c) => ({ center: c.center, score: c.score, rejected: c.rejected })) } : null),
    selection: selIds,
    pick: () => (app.pick ? { gap: settings.pickGap, hover: app.pick.hover.length, staged: app.pick.staged.map((e) => ({ kind: e.kind, segs: e.path.segs.length, closed: e.path.closed, gaps: e.path.gaps.length, len: PP.pathLength(e.path), area: PP.pathArea(e.path) })) } : null),   // 0.8 SU.880 (tools/takeoffcraft-test/browser-pickpath.mjs)
    signoff: () => ST.signoffUi?.api || null,   // 0.10 BK.62 (tools/takeoffcraft-test/browser-signoff.mjs)
    carbonDrive: () => ST.carbonUi?.drive, tagQty: () => ST.tagQtyUi?.drive, modelTakeoff: () => ST.modelUi,   // modelTakeoff: tools/takeoffcraft-test/browser-model.mjs   // tools/takeoffcraft-test/browser-eg14.mjs
    shell: () => ST.shellMount?.host || null,   // 0.8 round 3 (tools/takeoffcraft-test/browser-mount.mjs)
    tool: () => app.tool,   // 0.7 WS.11: the running tool (tools/workspace-test/apps/takeoffcraft.mjs)
    view3d: state3d,
    clip: currentClip,
    autosave: () => ({ autosave, doc: adoc }),
    recovery: null,
    stack3d: toggleStack,
    touch: () => ({ coarse: ST.coarse, pinch: !!ST.pinch, fingers: touches.size, bar: touchBar ? !touchBar.hidden : null }),
    compare: () => (app.cmp ? { old: app.cmp.old.key, A: app.cmp.A.slice(), aligning: app.cmp.align?.picks.length ?? null, changes: app.cmp.chg ? { removed: app.cmp.chg.removed, added: app.cmp.chg.added, flagged: [...app.cmp.chg.flagged] } : null } : null),
    startCompare: (oldKey) => startCompare(ST.sheets.find((x) => x.key === oldKey)),
    curArea: () => app.curArea,
    setArea: setCurArea,
    snap: () => (ST.cur ? { ready: !!snaps.get(ST.cur.key)?.idx, n: snaps.get(ST.cur.key)?.n ?? null, hit: app.snap } : null),
    snapLoaded: () => (ST.cur ? loadSnap(ST.cur).then(() => snaps.get(ST.cur.key)?.n ?? 0) : Promise.resolve(0)),
    pasting: () => !!app.paste,
    settings,
    cad: {                                                   // 0.7 TD.3: counts without the dialog (tests; same code path as the dialog)
      info: () => (ST.cur && isCad(ST.cur.file) ? { file: ST.cur.file.name, format: ST.cur.file.cad.format, sheet: { ...ST.cur.info.cad, name: ST.cur.info.label }, scale: model.scaleOf(ST.cur.key), warnings: ST.cur.file.cad.warnings, units: ST.cur.file.cad.units } : null),
      sheets: () => files.filter(isCad).flatMap((f) => f.cad.sheets.map((s) => ({ key: sheetKey(f.hash, s.index), name: s.name, kind: s.kind, scale: model.scaleOf(sheetKey(f.hash, s.index)), viewports: s.viewports.length, note: s.note }))),
      geometry: () => { const l = geomItems(); return { n: l.length, selected: app.geom ? [...app.geom.sel] : null, types: l.reduce((o, i) => ((o[i.type] = (o[i.type] || 0) + 1), o), {}), bbox: l.length ? { minX: Math.min(...l.map((i) => i.bbox.minX)), maxX: Math.max(...l.map((i) => i.bbox.maxX)), minY: Math.min(...l.map((i) => i.bbox.minY)), maxY: Math.max(...l.map((i) => i.bbox.maxY)) } : null, page: ST.cur ? { w: ST.cur.info.width, h: ST.cur.info.height } : null }; },
      pick: (a, b, additive = false) => geomWindow(a, b, additive),
      catalog: async (scope = 'sheet') => { const { cc } = await loadCadCount(); const ix = ST.cur.file.cad.index(); return cc.catalog(ix, scope === 'sheet' ? ST.cadMod.sheetRefs(ST.cur.file.cad.sheets[ST.cur.info.index], ix).map((e) => e.ref) : ix.all); },
      count: async (kind, query, scope = 'sheet') => {
        const { cc } = await loadCadCount(); const ix = ST.cur.file.cad.index();
        const refs = scope === 'sheet' ? ST.cadMod.sheetRefs(ST.cur.file.cad.sheets[ST.cur.info.index], ix).map((e) => e.ref) : ix.all;
        const r = kind === 'block' ? cc.countBlocks(ix, refs, query) : kind === 'shape' ? cc.countShapes(ix, refs, { ...query, inside: query.inside ? { model: ST.cur.file.cad.model } : null }) : cc.countTexts(ix, refs, query);
        return { total: r.total, hiddenSkipped: r.hiddenSkipped, byVariant: r.byVariant, byLayer: r.byLayer, points: r.found.map((x) => [x.x, x.y]) };
      },
      add: async (kind, query, { scope = 'sheet', item = null, name = '' } = {}) => {
        const { cc, cm } = await loadCadCount(); const set = ST.cur.file, ix = set.cad.index();
        const refs = scope === 'sheet' ? ST.cadMod.sheetRefs(set.cad.sheets[ST.cur.info.index], ix).map((e) => e.ref) : ix.all;
        const r = kind === 'block' ? cc.countBlocks(ix, refs, query) : kind === 'shape' ? cc.countShapes(ix, refs, { ...query, inside: query.inside ? { model: set.cad.model } : null }) : cc.countTexts(ix, refs, query);
        const plan = cm.planMarks({ set, sheetIndex: ST.cur.info.index, scope, found: r.found, existing: item ? model.state.marks.filter((m) => m.item === item && m.kind === 'count') : [] });
        const out = model.addCounted({ item, create: item ? null : { name: name || 'Count', type: 'count' }, list: plan.list.map((m) => ({ ...m, ...inArea() })), label: t('cad.count.undo', { n: plan.list.length, what: name || query.name || query.text || '' }) });
        setActive(out.item, true);
        return { added: plan.list.length, already: plan.already, stacked: plan.stacked, item: out.item };
      },
    },
    reset: () => { model.load({ format: 'takeoffcraft-project', version: 1, files: [], items: [], marks: [] }); for (const f of files) model.addFile({ hash: f.hash, name: f.name, size: f.size, pages: f.pages.length }); app.active = app.sel = app.hl = null; refresh(); },
  };

  // 0.8 SU.811 (sx-learn, learn-ui.js): the Learned button and dialog, the offer bar, finding learned symbols through the Auto count review
  ST.learnUi = mountLearn({ root, model, app, status, sheets: () => ST.sheets, cur: () => ST.cur, rasterize, searchInWorker, stopWorker: () => { ST.acWorker?.terminate(); ST.acWorker = null; }, renderAcBar, discardAutoCount,
    overlay: () => view.overlayOnly(), setActive: (id) => setActive(id, true), selIds, inArea, host, projectTypes: PROJECT_TYPES });

  // 0.8 EG.67 (takeoff_PART_2, countall-ui.js): Count everything — box a legend, count each symbol on every open sheet, review, add
  ST.countAllUi = mountCountAll({ root, model, app, status, sheets: () => ST.sheets, cur: () => ST.cur, rasterize, overlay: () => view.overlayOnly(), inArea, modKey,
    page: (s) => s.file.doc.getPage(s.info.index + 1),
    viewport: (page, s, w) => page.getViewport({ scale: w, rotation: s.info.rotate }),
    unit: (s, wt) => { const inv = G.invert(s.info.transform); return (x, y) => G.apply(inv, { x: x / wt, y: y / wt }); },
    showSheet, setActive: (id) => setActive(id, true), ftOf: (key) => model.scaleOf(key)?.ftPerUnit || null,
    threshold: () => settings.threshold, color: () => ST.colors.action,
    learn: (ac, n, it, th) => ST.learnUi?.confirmed({ learn: ac, threshold: th }, n, it) });

  // 0.8 EG.68 (takeoff_PART_2, prices-ui.js): price memory — the rates of your past jobs, in this browser beside the Library
  ST.pricesUi = mountPrices({ root, model, status, host, projectTypes: PROJECT_TYPES, modKey });

  // 0.8 EG.51 (takeoff_PART_2, supply-ui.js): supplier stock and lead-time files checked against what the takeoff needs; Problems source takeoffcraft.supply
  ST.supplyUi = mountSupply({ root, model, status, host, control: host.control, estimate: () => ST.est, setActive: (id) => setActive(id, true), modKey, library: { load: loadLib, save: saveLib } });

  // 0.8 EG.14 + EG.17 (takeoff_PART_3, carbon-ui.js): embodied carbon from the quantities, and the takeoff's rates as a 5D price table
  ST.carbonUi = mountCarbon({ root, model, status, host, estimate: () => ST.est, setActive: (id) => setActive(id, true) });
  // 0.10 BK.62 / BK.142 (estimate-signoff-ui.js): missing rates flagged, the estimate signed off by a person (recorded in the file), figures select their marks
  window.takeoffcraftIssues = mountTakeoffIssues({ root, t, model, sheets: () => ST.sheets.map((x) => ({ key: x.key, title: x.title })), goTo: showSheet, download: (text, name, type) => host.download(text, name, type) });   // 0.10 BK.48; tests
  ST.signoffUi = mountSignoff({ root, model, status, estimate: () => ST.est, selectMarks, selectAll: () => { selectAll(); return selIds().length; }, columns: () => columnsNow(), download: (text, name, type) => host.download(text, name, type) });
  renderQty();
  // 0.8 SU.915 (takeoff_PART_3, tagqty-ui.js): a tag schedule from the building model as typed quantities
  // 0.11 MT.1 / MT.2 (modeltakeoff-takeoff.js): quantities from a building model; feet unless lengths show metric
  ST.modelUi = mountModelTakeoff({ root, model, status, busy, importFile: importQuantityFile, units: () => (lenMode() !== 'ftin' ? 'metric' : 'imperial') });
  ST.tagQtyUi = mountTagQty({ root, model, status, importFile: importQuantityFile });

  // ---- AI assistants and scripts (0.4 part 2 X.7, session agents; agents.js on host.js's control channel): off until Settings › Assistants ----
  // ---- 0.8 round 3 (takeoff_PART_3): the shell's seven modules, attached once host.control has its tools
  ST.shellMount = mountTakeoffShell({
    model, control: host.control, estimate: () => ST.est, carbon: () => calcCarbon(ST.est, model.state.items, model.state.carbon),
    selection: () => {
      const id = (ST.selMain && model.mark(ST.selMain)?.item) || app.active, it = id && model.item(id);
      return it ? { kind: 'item', id: it.id, label: it.name } : null;
    },
    onSelection: (fn) => { selListeners.add(fn); return () => selListeners.delete(fn); },
    select: (id) => { if (model.item(id)) setActive(id, true); },
    name: () => model.state.name || '', path: () => ST.projectTarget?.name || '',
  });
  // ---- drafting without sight (0.8 round 3, EG.52; assets/js/app-access.js): the takeoff's items in order, each said with its quantity; the job total on D ----
  {
    const rows = () => model.state.items.map((it) => ({ id: it.id, kind: 'object', label: t('access.item', { name: it.name, type: t('access.type.' + (it.type === 'fixed' ? 'fixed' : it.type)), qty: qtyLabel(it), marks: ST.qmap.get(it.id)?.marks || 0 }) }));
    const goAccess = () => window.ccAccess.mount({
      stage: ui.over, label: () => t('access.stage'),
      walk: rows,
      describe: () => { const n = model.state.items.length; return n ? t('access.job', { name: model.state.name || '', n, marks: model.state.marks.length, total: U.formatCents(ST.est.total) }) : t('access.empty'); },
      selection: () => { const id = (ST.selMain && model.mark(ST.selMain)?.item) || app.active, it = id && model.item(id); return it ? t('access.selected', { what: rows().find((r) => r.id === it.id)?.label || it.name }) : t('access.nosel'); },
      pick: (p, item) => { if (item) { setActive(item.id, true); window.ccAccess.say(t('access.selected', { what: item.label })); } else window.ccAccess.say(t('access.nosel')); },
    });
    const goStatus = () => window.ccAccess.follow(ui.status, { max: 240 });
    for (const f of [goAccess, goStatus]) { if (window.ccAccess) f(); else document.addEventListener('cc-access-ready', f, { once: true }); }
  }
  onDefaults(() => { try { renderQty(); } catch (e) { /* not drawn yet */ } });   // 0.10 BK.149: an office policy changed (or the add-on was switched): the tables follow at once
  // ---- add-ons (0.5 AO.6, session addons; docs/ADDONS-SPEC.md §5.6): TakeoffCraft's own loader and API 1.0 (manifest "addons": "own") ----
  ST.addonsApi = null;
  startAddons({ model, status, setActive: (id) => setActive(id), typeSelect: ui.itemForm.elements.type, rightPanel: root.querySelector('.tc-right'),
    refresh: () => { renderItems(); renderItemProps(); renderQty(); } })
    .then((a) => { ST.addonsApi = a; }).catch((err) => console.warn('add-ons did not start:', err));   // i18n-ignore (developer message)

  installAgents({ model, sheetLabel, countAll: () => ST.countAllUi?.drive, prices: () => ST.pricesUi?.drive, supply: () => ST.supplyUi?.drive, carbon: () => ST.carbonUi?.drive, sheetByKey: (key) => ST.sheets.find((s) => s.key === key), sheets: () => ST.sheets.map((s) => ({ key: s.key, title: s.title, view: s.info.view })), current: () => (ST.cur ? ST.cur.key : null), exportCsv, exportXlsx, selectMarks, estimateTsv: () => estimateTsv(model.state, ST.est, columnsNow()),
    cadSets: () => files.filter(isCad),   // 0.7 AS.6 (assistants-gaps): the open DWG / DXF drawings for cad_count, cad_measure
    usd: async (key, format) => {   // 0.7 AS.6: the sheet's 3D check view as OpenUSD, as exportUsd makes it (needs a scaled sheet; the 3D view need not be open)
      const s = ST.sheets.find((x) => x.key === key);
      if (!s) throw new Error('No such sheet.');   // i18n-ignore: read by the assistant
      const { buildScene } = await import('./scene3d.js');
      const r = buildScene(model.state, s.key, { transform: s.info.transform, width: s.info.width, height: s.info.height });
      if (!r.ok) throw new Error(r.reason);
      if (!r.objects?.some((o) => o.kind !== 'frame' && (o.tris.length || o.kind === 'run'))) throw new Error('Nothing is measured on this sheet to show in 3D.');   // i18n-ignore: read by the assistant
      const { checkUsd } = await import('./usd-takeoffcraft.js');
      const u = checkUsd(r, { format, name: model.state.name });
      return { data: u.data, report: u.report, name: safeName(model.state.name || 'Takeoff') + ' - ' + safeName(s.title), type: format === 'usda' ? 'model/vnd.usda' : format === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream' };
    },
    download: (data, name, type) => host.download(data, name, type) });   // view: 0.7 AS.5 (marks as fractions of the page)

  readColors();
  ST.booted = true;
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
    const f = ST.cur?.file;
    if (!f || isCad(f)) { status(t('handoff.nopdf')); return; }    // the hand-over is for PDFs
    const app = handoffBtn.dataset.handoffApp;
    // sendHandoff opens the tab inside the click (pop-up blockers); the new page waits for the file to arrive
    sendHandoff(handoffBtn.dataset.handoffUrl, new File([f.bytes], f.name, { type: 'application/pdf' }), 'takeoffcraft').then(
      () => status(t('handoff.sent', { file: f.name, app })),
      (err) => { console.error(err); status(err.code === 'blocked' ? t('handoff.blocked') : err.code === 'storage' ? t('handoff.storage') : t('handoff.failed', { reason: err.message }), 12000); });
  });

  ready.then(async () => {
    window.takeoffcraft.ready = !!ST.pdfjs;
    if (ST.pdfjs) status(t('start.status'), 0);
    if (ST.pdfjs) await receiveHandoff();
    // TK.6: ?pack=<id> (the add-on directory's Install link, behind the owner's go) opens Trade packs pointing at that pack;
    // installing still takes the person's click
    const packParam = new URLSearchParams(location.search).get('pack');
    if (packParam && /^[a-z][a-z0-9.-]{1,63}$/.test(packParam)) {
      const u = new URL(location.href);
      u.searchParams.delete('pack');
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
      packsDialog({ offer: packParam });
    }
    if (ST.pdfjs) { const launched = await host.launchFiles(); if (launched.length) await openHostFiles(launched); }   // desktop: files it was started with
    // Studio Live from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the takeoff and its PDFs come from the host
    if (ST.pdfjs && /[#&]live=|[?&]live=/.test(location.hash + location.search)) import('./live.js').then((m) => m.joinFromPage(window.takeoffcraft, host), (err) => status(err.message, 12000));
    // "Recover your work?" when a page that stopped left a takeoff behind (`recovery` tells tests: none | asking | done)
    autosave.orphans().then((list) => {
      window.takeoffcraft.recovery = list.length ? 'asking' : 'none';
      if (list.length) return autosave.offer({ list, onRecover: recoverCopy }).then(() => { window.takeoffcraft.recovery = 'done'; });
    }).catch(() => { window.takeoffcraft.recovery = 'none'; });
  });
}
