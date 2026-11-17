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
import { Takeoff, FORMAT, TYPES, TYPE_LABELS, VARS, VAR_HELP, sheetKey, quantities, estimate, itemVars, itemQty, wallArea, wallRule, methodNote, measureMark, sheetBreakdown, areaEstimates, baseEstimate, alternates, backouts, segSlope, kindsOf, unitOf, condQty, csiOk } from './model.js';
import * as U from './units.js';
import { onUnitsChange, starOf } from './unit-prefs.js';   // 0.7 UNITS: Settings › General › Units
import * as G from './geom.js';
import { parse, evaluate } from './formula.js';
import { openPdf, sheetTitle, matchFiles, sha256Hex } from './pdfset.js';
import { pageSize, sizeText, groupBySize } from './pagesize.js';
import { SheetWindow } from './sheetlist.js';
import { estimateCsv, estimateXlsx, materialList, materialCsv, spotElevationsCsv, divisionTitle } from './export.js';
import { bidPackages, leveling, packageCsv, addBid, updateBid, removeBid, setAward } from './level.js';
import { createBidsUi } from './bids-ui.js';
import { pdfWithMarks, cloudPath, NOTE_COLORS } from './pdfmarks.js';
import * as CMK from './countmarker.js';
import { toInk, crop, trim, templateProblem, suppress, workScale, ANY_ANGLES } from './match.js';
import { copyMarks, copyItems, readClip, scaleProblem, sizeProblem, pasteClip, measured } from './clipboard.js';
import { Autosave } from './app-autosave.js';
import { objectJournal, recoverState, recoverExtras } from "./history/index.js";   // 0.10 PERF.24: autosave that writes what changed
import { handoffParam, takeHandoff, sendHandoff } from './handoff.js';
import { getHost } from './host.js';
import { pageLinework, SnapIndex, MAX_SEGS } from './snap.js';
import * as PP from './pickpath.js';   // 0.8 SU.880: pick the PDF's own linework
import { parseEntry } from './typein.js';
import * as AM from './arcmethods.js';   // 0.9 FX.137: the ten ways of drawing an arc (lib/arcs through arcs/arcs.js)
import { IDENTITY, fitTwoPoints, scaleOf, pixelMap, warp, changeMask, markChange, changed, movePts } from './overlay.js';
import { readLibraryCsv, libraryCsv, mergeEntries, entryFromItem, itemFromEntry, readStored, repricePatches } from './library.js';
import { readPack, installPack, removePack, installedPacks, libraryPack, rateUnset, PACK_EXT, PACK_LIMITS, PACK_SYSTEMS } from './packs.js';
import { bidSummary, proposalPdf } from './bid.js';
import { sheetScale, pageText } from './scaletext.js';
import { roomAt } from './roomfill.js';
import { embedTakeoff, readEmbedded } from './embed.js';
import { isQuantities, readQuantities, importQuantities, originText } from './fixedqty.js';
import { t } from './i18n.js';
import { installAgents } from './agents.js';
import { mountTakeoffShell } from './shell-mount.js';   // 0.8 round 3: the shell's seven modules (calc, reasons, totals, lessons, Suggest, activity, Ask)
import { calcCarbon } from './carbon.js';
import { mountCarbon } from './carbon-ui.js';
import { mountTagQty } from './tagqty-ui.js';   // 0.8 EG.14
import { PadDetector } from './wheel-pad.js';   // 0.7 D7.56 (CadCraft's copy, byte-identical): a trackpad's two-finger swipe pans
import { panButton, wheelFactor } from './input-mouse.js';   // 0.5 IP.3: the menu style's wheel and pan buttons (input-takeoffcraft.js)
import { startAddons, columnsNow } from './addons/takeoffcraft-api.js';
import { mountSignoff, estimateTsv } from './estimate-signoff-ui.js';
import { mountTakeoffIssues } from './issues-takeoff.js';   // 0.10 BK.48 (bk-r3-stages-10): the shared issue history; takeoff sheets against an issue
import { layoutQtyTable } from './estimate-layout-ui.js';   // 0.10 BK.149 (bk-r3-schedules-10): the Quantities tables in the office layout (Default Policies)
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

const TYPE_ICONS = { linear: 'bezier2', area: 'pentagon', count: 'plus-circle', fixed: '123' };
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
  let cadMod = null;                                       // cadset.js, loaded the first time a drawing is opened
  let geomMod = null;                                      // cadgeom.js (0.7 TD.4), loaded with it
  const isCad = (f) => f?.kind === 'cad';
  let sheets = [];           // [{ key, file, info, title }]
  let cur = null;            // the sheet on screen
  const views = new Map();   // sheet key → { z, ox, oy }
  const thumbs = new Map();  // sheet key → canvas
  const app = { cmp: null, curArea: null, deduct: false, tool: 'select', active: null, hl: null, draft: null, cursor: null, shift: false, check: null, qtyMode: 'item', drag: null, space: false, arc: false, arcMethod: '3P', box: null, ac: null, paste: null };
  // the selection: app.sel is the main selected mark (its corners can be dragged, its panel shows); selMore holds the
  // others (Select all, Shift+click). Setting app.sel starts a new selection.
  let selMain = null;
  const selMore = new Set();
  const selListeners = new Set();     // the shell's design reasons listen for the selection (shell-mount.js)
  let pickRow = null, pickLast = '', pickQueued = false;   // SC.5: the quantity row picked, what was last announced (pickRefs / announcePick below)
  const selChanged = () => { for (const fn of selListeners) { try { fn(); } catch (err) { console.error(err); } } };
  Object.defineProperty(app, 'sel', { enumerable: true, get: () => selMain, set: (v) => { selMain = v || null; selMore.clear(); selChanged(); } });
  const selIds = () => [selMain, ...selMore].filter((id) => id && model.mark(id));
  const isSel = (id) => id === selMain || selMore.has(id);
  function setSelection(ids) { app.sel = ids[0] || null; for (const id of ids.slice(1)) selMore.add(id); }
  let pdfjs = null;
  let carbonUi = null, tagQtyUi = null;   // 0.8 takeoff_PART_3
  let signoffUi = null;                // 0.10 BK.62 / BK.142 (estimate-signoff-ui.js)
  let shellMount = null;               // the shell's seven modules (shell-mount.js), attached after the assistants' tools exist
  let est = baseEstimate(model.state), qmap = quantities(model.state);
  // the 3D check view (scene3d.js + view3d.js, loaded on first use): on, the module, the view, the sheet it shows, sheet textures
  const d3 = { on: false, mod: null, view: null, sheet: null, scene: null, grounds: new Map(), ground: null, stack: false };
  // 0.7 WS.11: the workspace layouts (workspace-takeoffcraft.js; mounted near the end of init when the build lists them): told of every change
  let ws = null;
  const wsChanged = () => ws?.changed();

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
  function busy(text) { ui.busy.hidden = !text; if (text) ui.busyText.textContent = text; wsChanged(); }

  // ---- settings (Settings › TakeoffCraft; per viewer conveniences, localStorage only) ----
  const SET_KEY = 'takeoffcraft.settings';
  const LEN_SHOWS = ['follow', 'ftin', 'm', 'cm', 'mm'];
  const TEMP_SHOWS = ['follow', 'degc', 'degf'];   // 0.9: how temperatures read and what a bare number means
  const SET_DEFAULTS = { currency: '$', lenShow: 'follow', tempShow: 'follow', denom: 16, waste: 0, threshold: 0.75, snap45: false, corner: 'cube', snap: true, roomGap: 4, pickGap: PP.GAP_DEFAULT, marker: CMK.MARKER_DEFAULT };
  const ROOM_GAPS = [3, 3.5, 4, 5, 6, 8];
  const WASTE_CHOICES = [0, 200, 300, 500, 750, 1000, 1500, 2000];
  const settings = { ...SET_DEFAULTS };
  function loadSettings() {
    Object.assign(settings, SET_DEFAULTS);
    try {
      const v = JSON.parse(localStorage.getItem(SET_KEY) || '{}');
      if ([16, 8, 4].includes(v.denom)) settings.denom = v.denom;
      if (LEN_SHOWS.includes(v.lenShow)) settings.lenShow = v.lenShow;
      if (TEMP_SHOWS.includes(v.tempShow)) settings.tempShow = v.tempShow;
      if (U.CURRENCIES.includes(v.currency)) settings.currency = v.currency;
      if (WASTE_CHOICES.includes(v.waste)) settings.waste = v.waste;
      if (typeof v.threshold === 'number' && v.threshold >= 0.5 && v.threshold <= 0.95) settings.threshold = Math.round(v.threshold * 100) / 100;
      if (typeof v.snap45 === 'boolean') settings.snap45 = v.snap45;
      if (typeof v.snap === 'boolean') settings.snap = v.snap;
      if (['cube', 'axes', 'none'].includes(v.corner)) settings.corner = v.corner;
      if (ROOM_GAPS.includes(v.roomGap)) settings.roomGap = v.roomGap;
      if (typeof v.marker === 'string') settings.marker = CMK.markerKey(v.marker);   // 0.9.1: count marker size, screen and PDF alike (countmarker.js)
      if (typeof v.pickGap === 'number' && v.pickGap >= PP.GAP_MIN && v.pickGap <= PP.GAP_MAX) settings.pickGap = v.pickGap;
    } catch { /* private window or damaged: the defaults */ }
  }
  loadSettings(); U.setCurrency(settings.currency);
  const saveSettings = () => { try { localStorage.setItem(SET_KEY, JSON.stringify(settings)); } catch { /* fine: this tab keeps them */ } };
  /** How lengths read on screen: the TakeoffCraft choice, or (Follow Global) the metric unit starred in Settings › Global › Units; else feet-inches. */
  const lenMode = () => { const m = settings.lenShow === 'follow' ? starOf('length') : settings.lenShow; return m === 'm' || m === 'cm' || m === 'mm' ? m : 'ftin'; };
  /** How temperatures read: the TakeoffCraft choice, or (Follow Global) the temperature unit starred in Settings › Global › Units; else °C when lengths show metric, °F otherwise. */
  const tempMode = () => { const m = settings.tempShow === 'follow' ? starOf('temperature') : settings.tempShow; return m === 'degc' || m === 'degf' ? m : (lenMode() !== 'ftin' ? 'degc' : 'degf'); };
  /** The unit a typed length field uses: the display unit when it is metric, else the item's own (m for a metric item, ft otherwise). */
  const fieldUnit = (lu) => { const m = lenMode(); return m !== 'ftin' ? m : (lu === 'm' ? 'm' : 'ft'); };
  const METRIC_K = { m: [1, 3], cm: [100, 1], mm: [1000, 0] };
  /** The text of a length field in unit u ('ft' = feet-inches): plain numbers, no thousands commas, so it parses back. */
  const lenField = (ft, u) => { if (u === 'ft') return U.formatFtIn(ft, settings.denom); const [k, d] = METRIC_K[u]; return String(Number((ft * U.M_PER_FT * k).toFixed(d))) + ' ' + u; };
  const lenHint = (u, kind) => u === 'ft' ? ({ height: "9'-0\"", thick: "0'-6\"", head: "7'-0\"", base: "0'-0\"" })[kind] : ({ m: { height: '3.0 m', thick: '0.2 m', head: '2.1 m', base: '0 m' }, cm: { height: '300 cm', thick: '20 cm', head: '210 cm', base: '0 cm' }, mm: { height: '3000 mm', thick: '200 mm', head: '2100 mm', base: '0 mm' } })[u][kind];
  /** A length for the screen (quantities are never rounded): meters / cm / mm, or feet-inches to the fraction picked in Settings. */
  const ftIn = (ft) => { const m = lenMode(); if (m === 'ftin') return U.formatFtIn(ft, settings.denom); if (!Number.isFinite(ft)) return ''; return m === 'cm' ? U.fixed(ft * U.M_PER_FT * 100, 1) + ' cm' : U.formatLength(ft, m); };
  /** An area for the screen: m² when lengths show metric or the item is priced in metric, else SF. Quantities are never rounded. */
  const areaShow = (sqft, it) => (lenMode() !== 'ftin' || U.UNITS[it?.unit]?.system === 'metric' ? U.fixed(sqft * U.SQM_PER_SQFT, 2) + ' m²' : U.fixed(sqft, 2) + ' SF');
  const settingsDlg = document.querySelector('[data-app-settings]');
  function syncSettingsForm() {
    if (!settingsDlg) return;
    const q = (s) => settingsDlg.querySelector(s);
    settingsDlg.querySelectorAll('input[name="tcLenShow"]').forEach((r) => { r.checked = r.value === settings.lenShow; });
    settingsDlg.querySelectorAll('input[name="tcTempShow"]').forEach((r) => { r.checked = r.value === settings.tempShow; });
    const dn = q('[data-tc-denom]'); if (dn) dn.hidden = lenMode() !== 'ftin';
    settingsDlg.querySelectorAll('input[name="tcDenom"]').forEach((r) => { r.checked = Number(r.value) === settings.denom; });
    const w = q('select[name="tcWaste"]'); if (w) w.value = String(settings.waste);
    const cu = q('select[name="tcCurrency"]'); if (cu) cu.value = settings.currency;
    const rg = q('select[name="tcRoomGap"]'); if (rg) rg.value = String(settings.roomGap);
    settingsDlg.querySelectorAll('input[name="tcMarker"]').forEach((r) => { r.checked = r.value === settings.marker; });
    const pg = q('input[name="tcPickGap"]'); if (pg && document.activeElement !== pg) pg.value = String(Math.round(settings.pickGap * 100) / 100);
    const th = q('input[name="tcThreshold"]'); if (th) th.value = String(settings.threshold);
    const out = q('[data-tc-th-out]'); if (out) out.textContent = Math.round(settings.threshold * 100) + '%';
    const sn = q('input[name="tcSnap45"]'); if (sn) sn.checked = settings.snap45;
    const so = q('input[name="tcSnap"]'); if (so) so.checked = settings.snap;
    settingsDlg.querySelectorAll('input[name="tcCorner"]').forEach((r) => { r.checked = r.value === settings.corner; });
  }
  function applySettings() {
    const hint = root.querySelector('[data-snap-hint]');
    if (hint) hint.textContent = settings.snap45 ? t('snap45.on') : t('snap45.hint');
    U.setCurrency(settings.currency);
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
      if (t.name === 'tcLenShow') settings.lenShow = LEN_SHOWS.includes(t.value) ? t.value : 'follow';
      else if (t.name === 'tcTempShow') settings.tempShow = TEMP_SHOWS.includes(t.value) ? t.value : 'follow';
      else if (t.name === 'tcDenom') settings.denom = Number(t.value);
      else if (t.name === 'tcCurrency') settings.currency = U.CURRENCIES.includes(t.value) ? t.value : '$';
      else if (t.name === 'tcWaste') settings.waste = WASTE_CHOICES.includes(Number(t.value)) ? Number(t.value) : 0;
      else if (t.name === 'tcMarker') settings.marker = CMK.markerKey(t.value);
      else if (t.name === 'tcRoomGap') settings.roomGap = ROOM_GAPS.includes(Number(t.value)) ? Number(t.value) : 4;
      else if (t.name === 'tcThreshold') settings.threshold = Number(t.value);
      else if (t.name === 'tcPickGap') { const v = Number(t.value); settings.pickGap = Number.isFinite(v) ? Math.min(PP.GAP_MAX, Math.max(PP.GAP_MIN, v)) : PP.GAP_DEFAULT; t.value = String(Math.round(settings.pickGap * 100) / 100); }   // 0.8 takeoff_PART_3: the Path tool's gap, also on [ and ]
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
    let all = [...list];
    if (all.some((f) => /\.ccbundle$|ccbundle\.zip$/i.test(f.name || ''))) {   // 0.8 BIM-BUNDLE-OPEN: a project bundle opens as its sheets (shared reader, ./bundle/plan.js)
      const r = await (await import('./bundle/plan.js')).expandBundles(all, 'takeoffcraft', { prefer: ['pdf', 'dwg'] });
      for (const n of r.notes) status(n.code === 'bundle' ? t('bundle.sheets', { file: n.file, n: n.n }) : n.code === 'empty' ? t('bundle.nosheets', { file: n.file }) : t('bundle.failed', { file: n.file, why: n.why }));
      all = r.files;
    }
    const cads = all.filter((f) => CAD_RE.test(f.name));
    const pdfs = all.filter((f) => !cads.includes(f) && (/\.pdf$/i.test(f.name) || f.type === 'application/pdf'));
    const projects = all.filter((f) => /\.json$/i.test(f.name));
    const ifcs = all.filter((f) => /\.ifc$/i.test(f.name));     // 0.8 SU.882: an IFC file's infrastructure quantities join the takeoff as typed quantities
    const other = all.filter((f) => !pdfs.includes(f) && !cads.includes(f) && !projects.includes(f) && !ifcs.includes(f));
    if (other.length) status(t('open.skipped', { files: other.map((f) => f.name).join(', ') }));
    let first = null, embedded = null;
    for (const f of [...pdfs, ...cads]) {
      busy(t('open.busy', { file: f.name }));
      await frame();
      try {
        const data = new Uint8Array(await f.arrayBuffer());
        if (cads.includes(f)) {          // 0.7 TD.1: a drawing opens as sheets (model space and every layout), read by the shared readers
          cadMod ??= await import('./cadset.js');
          geomMod ??= await import('./cadgeom.js');
          const hash = await sha256Hex(data);
          if (files.some((x) => x.hash === hash)) { status(t('open.already', { file: f.name })); continue; }
          const set = await cadMod.openCad(data, f.name, { hash, readers: await cadMod.defaultReaders() });
          files.push({ ...set, bytes: data });
          model.addFile({ hash: set.hash, name: set.name, size: set.size, pages: set.pages.length });
          if (model.state.name === 'Takeoff' && !model.state.items.length) model.state.name = f.name.replace(CAD_RE, '');   // i18n-ignore
          applyDrawingScales(set);
          if (set.cad.warnings.length) status(set.cad.warnings.join(' '), 12000);
          first ??= sheetKey(set.hash, 0);
          continue;
        }
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
    if (pdfs.length || cads.length) {
      const resolved = cads.length ? resolveXrefs() : [];
      rebuildSheets();
      if (resolved.length && cur) { const k = cur.key; cur = sheets.find((x) => x.key === k) || null; if (cur) await showSheet(k); }
      if (resolved.length) status(t('cad.xref.resolved', { n: resolved.length, list: resolved.join(', ') }), 12000);
      if (first && (!cur || !projects.length)) await showSheet(first);
      if (files.length) ui.hint.hidden = true;
    }
    for (const f of ifcs) await importIfcFile(f);
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

  /**
   * TD.5: a drawing's linked drawings (xrefs) are found among the open drawings by file name (an xref's path's last part, else its
   * name); found ones are drawn and counted where they are inserted. → the linked files' names that were found now
   */
  function resolveXrefs() {
    const cads = files.filter(isCad), now = [];
    const cands = cads.map((f) => ({ name: f.name, model: f.cad.model }));
    for (const f of cads) {
      if (!f.cad.xrefs.some((x) => !x.loaded)) continue;
      const found = cadMod.matchXrefs(f.cad.model, cands);
      if (!found.size) continue;
      const next = cadMod.withXrefs(f, found);
      if (next.cad.xrefs.filter((x) => !x.loaded).length >= f.cad.xrefs.filter((x) => !x.loaded).length) continue;   // nothing new loaded
      for (const x of next.cad.xrefs) if (x.loaded) now.push(x.name);
      Object.assign(f, { cad: next.cad, doc: next.doc, pages: next.pages });
      snaps.clear();
    }
    return [...new Set(now)];
  }

  /**
   * TD.2: a drawing's sheets start with the scale the drawing itself gives (INSUNITS, a layout's viewport scale), for the sheets that have
   * none yet — one undo step. A sheet with no usable units stays "No scale"; Calibrate and the scale menu override at any time.
   */
  function applyDrawingScales(set) {
    const map = {};
    for (const sh of set.cad.sheets) {
      const key = sheetKey(set.hash, sh.index);
      if (!sh.scale || model.scaleOf(key)) continue;
      const sc = sh.scale;
      if (sh.kind === 'model') map[key] = U.scaleRecord({ method: 'drawing', ftPerUnit: sc.ftPerUnit, label: t('cad.scale.units', { units: cadMod.unitLabel(set.cad.units) }) });
      else {
        const pm = U.matchPreset(sc.ftPerUnit);
        map[key] = pm ? U.scaleRecord({ method: 'preset', preset: pm.key, ftPerUnit: U.presetFtPerUnit(pm.key), label: pm.label })
          : U.scaleRecord({ method: 'drawing', ftPerUnit: sc.ftPerUnit, label: t('cad.scale.viewport', { scale: U.describeScale(sc.ftPerUnit) }) });
      }
    }
    if (Object.keys(map).length) model.setScales(map, t('cad.scale.undo', { file: set.name }));
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
    return t('sheet.page', { file: f ? f.name.replace(/\.(pdf|dwg|dxf)$/i, '') : t('sheet.unknown'), n: Number(idx) + 1 });
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
    markCurrentSheet();   // 0.10 PERF.35: two buttons change; the whole list was rebuilt here for every switch
    renderMarkProps();
    ws?.sheetShown(key);
    learnUi?.sheetShown(key);   // 0.8 SU.811: offer what it learned on this page
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
  const PDF_TYPES = [{ description: 'PDF, DWG, DXF', extensions: ['.pdf', '.dwg', '.dxf'] }];                       // i18n-ignore: a file type the OS shows
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

  // 2026-11-12: the start card's "Try a sample file" opens the kitchen plan and its takeoff through the normal open path (PDF first, then the project); also in the command palette (Ctrl+K)
  async function openSample() {
    try {
      const get = async (name, type) => { const r = await fetch(new URL('./samples/' + name, import.meta.url)); if (!r.ok) throw new Error('HTTP ' + r.status); return new File([await r.blob()], name, { type }); };   // i18n-ignore: file names
      await openFiles([await get('kitchen-plan-sheet.pdf', 'application/pdf'), await get('kitchen-bid.takeoff.json', 'application/json')]);
    } catch (err) { busy(null); status(t('hint.sample.noload', { why: err.message })); }
  }
  for (const b of root.querySelectorAll('[data-hint-sample]')) b.addEventListener('click', openSample);
  { const regSample = () => window.ccPalette?.register?.([{ id: 'takeoffcraft-sample', label: t('hint.trysample'), group: 'file', keywords: 'sample example demo try', run: openSample }]); if (window.ccPalette) regSample(); else window.addEventListener('load', regSample); }

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
    if (isQuantities(json)) { importQuantityFile(json, file.name); return; }     // TK.5+: quantities from another app join this takeoff
    if (!(await confirmDiscard('open', { file: file.name }))) return;
    const r = await loadProject(json);
    if (!r.ok) { status(r.error, 10000); return; }
    const m = matchFiles(model.state.files, files);
    const msg = [t('open.project.done', { file: file.name, items: t('n.items', { n: model.state.items.length }), marks: t('n.marks', { n: model.state.marks.length }) })];
    if (m.missing.length || m.changed.length) msg.push(t('open.project.pdfs'));
    for (const w of r.warnings) msg.push(w);
    status(msg.join(' '), 12000);
  }
  /** 0.8 SU.882: an IFC 4.3 file (roads, rails, bridges, earthworks …) becomes a quantities file: a count per class and predefined type, and the lengths, areas and volumes the file states. */
  async function importIfcFile(f) {
    busy(t('open.busy', { file: f.name }));
    try {
      const [{ IfcFile }, I43] = await Promise.all([import('./ifc/model.js'), import('./ifc/ifc43.js')]);
      const r = I43.read43(IfcFile.open(new Uint8Array(await f.arrayBuffer())));
      if (!r.elements.length) { status(t('ifc43.none', { file: f.name, schema: r.schema }), 12000); return; }
      importQuantityFile(I43.quantitiesFile(r, { project: f.name.replace(/\.ifc$/i, ''), app: 'IFC' }), f.name);   // i18n-ignore: the origin label
    } catch (err) {
      status(t('ifc43.failed', { file: f.name, error: String(err?.message || err) }), 12000);
    } finally { busy(null); }
  }

  /** A quantities file (fixedqty.js, e.g. CivilCraft's cut and fill): its items join the takeoff as typed quantities, one undo step. */
  function importQuantityFile(json, name) {
    const r = readQuantities(json);
    if (!r.ok) { status(t('qty.in.failed', { file: name, error: r.error }), 12000); return; }
    let o;
    try { o = importQuantities(model, r); } catch (err) { status(err.message, 12000); return; }
    const msg = [t('qty.in.done', { file: name, app: r.app, added: o.added, updated: o.updated, same: o.same })];
    if (o.unitChanged.length) msg.push(t('qty.in.unit', { items: itemList(o.unitChanged) }));
    if (r.skipped) msg.push(t('qty.in.skipped', { n: r.skipped }));
    if (o.ids.length) setActive(o.ids[0], false);
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
    pricesUi?.saved();   // 0.8 EG.68: this job's prices are remembered
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

  // ---- page sizes (0.10 SU.1805): mm and inches with the nearest named paper size; a drawing's sheets have no paper, so none
  const sizeCache = new WeakMap();
  /** A PDF sheet's size as shown (rotation applied), or null for a drawing's sheet: { wMm, hMm, wIn, hIn, orient, name, custom, near }. */
  function sizeOf(s) {
    if (isCad(s.file)) return null;
    let z = sizeCache.get(s.info);
    if (!z) { z = pageSize({ width: s.info.width, height: s.info.height, userUnit: s.info.userUnit || 1 }); sizeCache.set(s.info, z); }
    return z;
  }
  const sizeName = (z) => z.name || t('psize.custom');
  const sizeNameOrient = (z) => t('psize.named', { name: sizeName(z), orient: t('psize.orient.' + z.orient) });
  const sizeGroups = () => groupBySize(sheets.map((s) => ({ key: s.key, info: sizeOf(s) })));
  let bySize = false;
  /** Every PDF page of the open set with its size and group (the estimate workbook's "Page sizes" sheet). */
  function pageSizeRows() {
    const groups = sizeGroups(), groupOf = new Map(groups.flatMap((g) => g.keys.map((k) => [k, g])));
    return sheets.filter((s) => sizeOf(s)).map((s) => { const z = sizeOf(s); return { title: s.title, file: s.file.name, page: s.info.index + 1, size: sizeName(z), mm: sizeText(z), orient: t('psize.orient.' + z.orient), wMm: Math.round(z.wMm * 10) / 10, hMm: Math.round(z.hMm * 10) / 10, odd: !!groupOf.get(s.key)?.odd }; });
  }

  function visibleSheets() {
    const q = ui.sheetQ.value.trim().toLowerCase();
    return q ? sheets.filter((s) => (s.title + ' ' + s.file.name + ' ' + s.info.label).toLowerCase().includes(q)) : sheets;
  }
  ui.sheetQ.addEventListener('input', () => renderSheets());
  ui.bySize?.addEventListener('click', () => {
    bySize = !bySize;
    ui.bySize.setAttribute('aria-pressed', String(bySize));
    renderSheets();
    status(bySize ? t('psize.by.on', { n: sizeGroups().length }) : t('psize.by.off'));
  });

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
      const s = sheetByKey(c.dataset.key);
      if (!s || c.dataset.done) continue;
      try {
        const pg = await s.file.doc.getPage(s.info.index + 1);
        await renderThumb(pg, s.info, c, 200);
        c.dataset.done = '1';
        if (s !== cur) pg.cleanup();   // 0.10 PERF.35: the page's operator list and glyphs are let go; the open sheet keeps its own
      } catch { /* a broken page keeps a blank thumbnail */ }
    }
    thumbBusy = false;
  }
  /** A sheet by its key (a Map rebuilt when the set changes; the list was scanned for each lookup). */
  let sheetMap = null, sheetMapOf = null;
  function sheetByKey(key) {
    if (sheetMapOf !== sheets || sheetMap.size !== sheets.length) { sheetMap = new Map(sheets.map((x) => [x.key, x])); sheetMapOf = sheets; }
    return sheetMap.get(key) || null;
  }
  // The list is windowed (0.10 PERF.35): a 2,000-sheet set draws the rows near the view, not 2,000 rows; thumbnails are kept for the newest 160.
  const THUMBS_KEPT = 160;
  const sheetWin = new SheetWindow({
    list: ui.sheets,
    estimate: (e) => (e.group ? 30 : (Math.max(120, (ui.sheets.clientWidth || 260) - 20) / (e.ar || 0.75)) + 78),
    renderRow: (e) => (e.group ? groupRow(e.group) : sheetListRow(sheetByKey(e.id))),
  });
  let sheetStats = { mark: new Map(), hl: new Map() }, rowOf = new Map();
  function groupRow(gz) {
    return el('li', { className: 'tc-sheet-group' + (gz.odd ? ' is-odd' : ''), dataset: { sizeGroup: gz.id } },
      el('span', { className: 'tc-sheet-group-name' }, gz.name || t('psize.custom')),
      el('span', {}, sizeText({ wMm: gz.wMm, hMm: gz.hMm, wIn: gz.wMm / 25.4, hIn: gz.hMm / 25.4 })),
      el('span', {}, t('psize.group.n', { n: gz.keys.length })),
      gz.odd ? el('span', { className: 'tc-sheet-group-odd' }, t('psize.odd')) : null);
  }
  function thumbFor(s) {
    let c = thumbs.get(s.key);
    if (c) { thumbs.delete(s.key); thumbs.set(s.key, c); return c; }
    c = el('canvas', { className: 'tc-thumb', dataset: { key: s.key }, 'aria-hidden': 'true' });
    c.style.setProperty('--ar', String(s.info.width / s.info.height));
    thumbs.set(s.key, c); io.observe(c);
    while (thumbs.size > THUMBS_KEPT) { const [k, old] = thumbs.entries().next().value; thumbs.delete(k); io.unobserve(old); }
    return c;
  }
  function sheetListRow(s) {
    const zs = sizeOf(s), sc = model.scaleOf(s.key);
    const n = sheetStats.mark.get(s.key) || 0, h = sheetStats.hl.get(s.key) || 0;
    return el('li', {}, el('button', { type: 'button', className: 'tc-sheet', 'aria-current': cur?.key === s.key ? 'true' : 'false', dataset: { sheet: s.key }, onclick: () => showSheet(s.key) },
      thumbFor(s),
      el('span', { className: 'tc-sheet-title' }, s.title),
      zs ? el('span', { className: 'tc-sheet-size', title: sizeText(zs) }, sizeName(zs) + ' · ' + sizeText(zs).replace(/ \(.*/, '')) : null,
      el('span', { className: 'tc-sheet-meta' },
        el('span', { className: sc ? '' : 'is-unscaled' }, sc ? scaleText(sc, s.info.userUnit, true) : t('x.noscale')),
        app.hl ? el('span', { className: 'tc-sheet-hits' }, h ? t('sheets.hits', { n: h }) : '') : el('span', {}, n ? t('n.marks', { n }) : ''))));
  }
  /** The list again: its rows, its order (by size), and the counts on each row. Switching sheets does not call this (markCurrentSheet). */
  function renderSheets() {
    const list = visibleSheets();
    ui.sheetsEmpty.hidden = sheets.length > 0;
    ui.sheetCount.textContent = sheets.length ? (list.length === sheets.length ? t('sheets.count', { n: sheets.length }) : t('sheets.count.filtered', { n: list.length, total: sheets.length })) : '';
    sheetStats = { mark: new Map(), hl: new Map() };
    if (app.hl) for (const m of model.state.marks) if (m.item === app.hl) sheetStats.hl.set(m.sheet, (sheetStats.hl.get(m.sheet) || 0) + 1);
    for (const m of model.state.marks) sheetStats.mark.set(m.sheet, (sheetStats.mark.get(m.sheet) || 0) + 1);
    const groups = bySize ? sizeGroups() : null;
    const groupOf = groups ? new Map(groups.flatMap((g) => g.keys.map((k) => [k, g]))) : null;
    const ordered = groups ? list.map((s, i) => [s, i]).sort((a, b) => groups.indexOf(groupOf.get(a[0].key)) - groups.indexOf(groupOf.get(b[0].key)) || a[1] - b[1]).map((x) => x[0]) : list;
    const entries = [];
    let lastGroup = null;
    rowOf = new Map();
    for (const s of ordered) {
      if (groups && groupOf.get(s.key) !== lastGroup) { lastGroup = groupOf.get(s.key); entries.push({ id: 'g:' + lastGroup.id, group: lastGroup }); }
      rowOf.set(s.key, entries.length);
      entries.push({ id: s.key, ar: s.info.width / s.info.height });
    }
    thumbQueue.length = 0;
    sheetWin.set(entries);
  }
  /** The open sheet's row marked (two buttons change, not the list) and scrolled into the panel's view. */
  function markCurrentSheet() {
    if (!cur) return;
    for (const b of ui.sheets.querySelectorAll('.tc-sheet[aria-current="true"]')) if (b.dataset.sheet !== cur.key) b.setAttribute('aria-current', 'false');
    if (rowOf.has(cur.key)) sheetWin.reveal(rowOf.get(cur.key));
    for (const b of ui.sheets.querySelectorAll('.tc-sheet')) if (b.dataset.sheet === cur.key) b.setAttribute('aria-current', 'true');
  }

  function scaleText(sc, userUnit = 1, short = false) {
    if (sc.method === 'preset') return sc.label;
    if (sc.method === 'drawing') return sc.label;                  // 0.7 TD.2: read from the drawing (units, a layout's viewport)
    const m = U.matchPreset(sc.ftPerUnit, userUnit);
    if (short) return m ? m.label : U.describeScale(sc.ftPerUnit, userUnit);
    return t(sc.cal?.text ? 'scale.cal.on' : 'scale.cal', { scale: U.describeScale(sc.ftPerUnit, userUnit), text: sc.cal?.text || '' }) + (m ? ' ' + t('scale.matches', { preset: m.label }) : '');
  }

  function renderSheetBar() {
    renderToolbar();
    wsChanged();
    ui.sheetbar.hidden = !cur;
    const handoff = root.querySelector('[data-handoff-pdf]');
    if (handoff) handoff.hidden = !!cur && isCad(cur.file);   // the hand-over to the review app is for PDFs
    renderLayers();
    renderGeomBar();
    const geomBtn = root.querySelector('[data-tool="cadgeom"]');
    if (geomBtn) geomBtn.hidden = !(cur && isCad(cur.file));    // 0.7 TD.4
    if (app.tool === 'cadgeom' && !(cur && isCad(cur.file))) setTool('select');
    const cadBtn = root.querySelector('[data-act="cad-count"]');
    if (cadBtn) cadBtn.hidden = !(cur && isCad(cur.file));      // 0.7 TD.3: counting from a drawing is for a drawing's sheet
    ui.preset.disabled = !cur || (isCad(cur.file) && cur.info.cad.kind === 'model');   // a model sheet has no paper: its scale is the drawing's units, or Calibrate
    if (!cur) return;
    ui.sheetName.textContent = cur.title;
    const sc = model.scaleOf(cur.key);
    ui.sheetScale.textContent = sc ? t('sheetbar.scale', { scale: scaleText(sc, cur.info.userUnit) }) : t('sheetbar.noscale');
    ui.sheetScale.classList.toggle('is-unscaled', !sc);
    const zc = sizeOf(cur);
    ui.sheetSize.hidden = !zc;
    ui.sheetSize.textContent = zc ? sizeNameOrient(zc) + ' · ' + sizeText(zc) : '';
    ui.sheetSize.title = zc && zc.custom && zc.near ? t('psize.near', { name: zc.near.name, mm: zc.near.deltaMm }) : '';
    ui.preset.value = sc?.method === 'preset' && sc.preset ? sc.preset : (sc ? (sc.method === 'drawing' ? 'drawing' : 'cal') : '');
  }

  // ---- a drawing's layers (0.7 TD.5): on and off, the file's choice respected; what is hidden is not counted unless chosen
  const layersMenu = root.querySelector('[data-layers-menu]');
  function renderLayers() {
    if (!layersMenu) return;
    const isDwg = !!cur && isCad(cur.file);
    layersMenu.hidden = !isDwg;
    if (!isDwg || !layersMenu.open) return;
    const box = layersMenu.querySelector('[data-layers-list]');
    const cad = cur.file.cad, ix = cad.index(), here = cad.sheets[cur.info.index];
    const counts = new Map();
    for (const e of cadMod.sheetRefs(here, ix)) counts.set(e.ref.layer, (counts.get(e.ref.layer) || 0) + 1);
    const names = [...new Set([...cad.drawing.layers.map((l) => l.name), ...counts.keys()])].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const change = (name, on) => {
      const fileHidden = !!(ix.layers.get(name)?.off || ix.layers.get(name)?.frozen);
      if (on === !fileHidden) cad.layerOverride.delete(name); else cad.layerOverride.set(name, on);
      view.rerender(); renderLayers();
    };
    box.replaceChildren(
      el('div', { className: 'tc-layers-actions' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { for (const n of names) if (!cadMod.layerShown(cad, n)) cad.layerOverride.set(n, true); view.rerender(); renderLayers(); } }, t('cad.layers.showall')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', disabled: !cad.layerOverride.size, onclick: () => { cad.layerOverride.clear(); view.rerender(); renderLayers(); } }, t('cad.layers.reset'))),
      el('p', { className: 'tc-layers-note' }, t('cad.layers.note')),
      el('ul', { className: 'tc-layers-list' }, names.map((n) => {
        const f = ix.layers.get(n), shown = cadMod.layerShown(cad, n);
        const state = f?.frozen ? t('cad.layers.frozen') : f?.off ? t('cad.layers.off') : '';
        const lay = cad.layerByName.get(n);
        return el('li', {}, el('label', { className: 'tc-layers-row' },
          el('input', { type: 'checkbox', checked: shown, dataset: { layer: n }, onchange: (e) => change(n, e.target.checked) }),
          el('span', { className: 'tc-layers-sw', style: { background: lay && lay.color !== 'ink' ? lay.color : 'currentColor' }, 'aria-hidden': 'true' }),
          el('span', { className: 'tc-layers-name' }, n),
          el('span', { className: 'tc-layers-state' }, [state, cad.layerOverride.has(n) ? t('cad.layers.here') : ''].filter(Boolean).join(', ')),
          el('span', { className: 'tc-layers-n' }, counts.has(n) ? t('cad.layers.n', { n: counts.get(n) }) : '')));
      })));
  }
  layersMenu?.addEventListener('toggle', renderLayers);

  // preset scales
  ui.preset.append(el('option', { value: 'cal', disabled: true, hidden: true }, t('x.calibrated')));
  ui.preset.append(el('option', { value: 'drawing', disabled: true, hidden: true }, t('cad.scale.fromdrawing')));
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
        try { r = isCad(s.file) && s.info.cad.kind === 'model' ? { preset: null, why: 'none', others: [] } : sheetScale(pageText(await (await s.file.doc.getPage(s.info.index + 1)).getTextContent())); } catch { r = { preset: null, why: 'none', others: [] }; }
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
    if ((tool === 'linear' || tool === 'area' || tool === 'circle' || tool === 'room' || tool === 'path') && !model.scaleOf(cur.key)) {
      status(t('tool.err.noscale'), 9000);
      return false;
    }
    if (tool === 'linear' || tool === 'area' || tool === 'count' || tool === 'circle' || tool === 'autocount' || tool === 'room') {
      if (!ensureItem(tool === 'circle' || tool === 'room' ? 'area' : tool === 'autocount' ? 'count' : tool)) return false;
    }
    if (tool === 'cadgeom') {                                // 0.7 TD.4: needs a drawing's sheet, a scale and a linear or area item
      if (!isCad(cur.file) || !geomMod) { status(t('cad.count.needs')); return false; }
      if (!model.scaleOf(cur.key)) { status(t('tool.err.noscale'), 9000); return false; }
      if (!geomKind()) { status(t('cad.geom.item'), 9000); return false; }
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
    if (tool !== 'legend') countAllUi?.close();
    app.geom = tool === 'cadgeom' ? { sel: new Set(), tag: '' } : null;
    app.tool = tool;
    app.check = tool === 'check' ? app.check : null;
    for (const b of toolButtons) b.setAttribute('aria-pressed', String(b.dataset.tool === tool || (tool === 'cutcircle' && b.dataset.tool === 'cutout')));
    ui.over.dataset.tool = tool;
    app.pick = tool === 'path' ? { staged: [], hover: [], hi: 0, sheet: cur.key } : null;
    if (tool === 'path') loadSnap(cur).then(() => { const r = cur && snaps.get(cur.key); if (app.tool === 'path' && r && !r.n) status(t('sx.su880.nolines'), 9000); });
    renderAcBar();
    renderGeomBar();
    const help = tool === 'legend' ? t('help.legend') : tool === 'room' ? t('help.room', { gap: ftIn(settings.roomGap) }) : tool === 'path' ? t('help.path', { gap: pickGapText() }) : t('help.' + tool);
    status(help, 0);
    view.overlayOnly();
    wsChanged();
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

  function cancelDraft() { app.draft = null; app.drag = null; if (app.pick) app.pick.staged = []; app.noteStart = null; ui.measure.textContent = ''; closeTypeIn(); view.overlayOnly(); }

  /** Backspace / the touch bar's Back: the pending arc point first, then the last point (and the arc that led to it). */
  function dropLastPoint() {
    if (app.draft?.mid) { app.draft.mid = null; liveMeasure(); view.overlayOnly(); return; }
    if (app.draft?.arcGot?.length) { app.draft.arcGot.pop(); arcPrompt(); liveMeasure(); view.overlayOnly(); return; }   // FX.137: the arc's last input
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
    const show = coarse && ((!!app.draft?.pts.length && ['linear', 'area', 'cutout', 'circle', 'cutcircle', 'calibrate', 'check'].includes(app.tool)) || (app.tool === 'path' && !!app.pick?.staged.length));   // 0.8 SU.880: Path has no keys on a tablet
    if (touchBar.hidden === !show) return;
    touchBar.hidden = !show;
  }
  touchBar?.addEventListener('click', (e) => {
    const b = e.target.closest('[data-touch]');
    if (!b) return;
    if (app.tool === 'path') { if (b.dataset.touch === 'finish') pickCommit(); else if (b.dataset.touch === 'back') pickTrim(); else if (b.dataset.touch === 'cancel') pickClear(); }
    else if (b.dataset.touch === 'finish') finishDraft();
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
    const ar = arcRole();
    status(t(ar && AM.SCALAR.has(ar) ? 'arc.type.' + ar : app.tool === 'circle' || app.tool === 'cutcircle' ? 'typein.hint.circle' : 'typein.hint'), 0);
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
    const ar = arcRole();
    if (ar && AM.SCALAR.has(ar)) {                       // FX.137: an angle, length, radius or direction for the arc under way
      const v = AM.typedValue(ar, text, { ftPerUnit: sc?.ftPerUnit, linear: view.matrix.slice(0, 4) });
      if (!v.ok) { typeBox.classList.add('is-invalid'); status(t(v.error), 12000); return; }
      typeBox.value = '';
      typeBox.classList.remove('is-invalid');
      arcStep(v.value);
      if (!app.draft) closeTypeIn(); else { liveMeasure(); view.overlayOnly(); }
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
    if ((e.button === 1 && panButton(1)) || (e.button === 0 && app.space)) { e.preventDefault(); panning = p; ui.over.classList.add('is-panning'); return; }   // IP.3: middle pans unless the style took it away
    if (e.button === 1) { e.preventDefault(); return; }
    down = { ...p, button: e.button, moved: false, touch: e.pointerType === 'touch', t: performance.now() };
    if (down.touch) {
      longTimer = setTimeout(() => {                    // a long press = the right button: finish the run or the outline
        if (!down || down.moved || touches.size !== 1) return;
        down.long = true;
        if (app.draft) { navigator.vibrate?.(15); finishDraft(); }
      }, 550);
    }
    if (e.button === 0 && app.tool === 'select' && !app.paste) app.drag = handleAt(p);
    if (e.button === 0 && app.tool === 'legend' && !app.ca?.running) app.box = { a: view.toUser(p), b: view.toUser(p), sa: p };
    if (e.button === 0 && app.tool === 'autocount' && !app.ac?.running) app.box = { a: view.toUser(p), b: view.toUser(p), sa: p };
    if (e.button === 0 && app.tool === 'cadgeom') app.box = { a: view.toUser(p), b: view.toUser(p), sa: p, geom: true };   // a window takes everything inside it; a click, one object
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
      if (!app.drag && !app.box && (down.button === 0 || panButton(down.button))) { panning = p; ui.over.classList.add('is-panning'); return; }   // IP.3: a right drag pans only where the style says so
    }
    if (app.box && down) { app.box.b = view.toUser(p); view.overlayOnly(); return; }
    if (!cur) return;
    app.cursor = pointFor(view.toUser(p));
    if (app.tool === 'path') pickHover(app.cursor);
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
    if (app.box?.geom) {
      const bx = app.box; app.box = null;
      if (d.moved && Math.hypot(p.x - bx.sa.x, p.y - bx.sa.y) > 6) geomWindow(bx.a, view.toUser(p), app.shift);
      else geomClick(view.toUser(p), app.shift);
      return;
    }
    if (app.box) {
      const bx = app.box; app.box = null;
      if (d.moved && Math.hypot(p.x - bx.sa.x, p.y - bx.sa.y) > 6) { if (app.tool === 'legend') countAllUi?.boxed(bx.a, view.toUser(p)); else runAutoCount(bx.a, view.toUser(p)); return; }
      view.overlayOnly();
      if (app.tool === 'legend') { if (!countAllUi?.toggleAt(view.toUser(p))) status(t('help.legend')); return; }
      if (app.ac && !app.ac.running) { toggleCandidate(view.toUser(p)); return; }
      status(t('ac.start.short'));
      return;
    }
    if (d.button === 2) { if (!d.moved) { if (app.tool === 'path') pickCommit(); else finishDraft(); } return; }
    if (d.button !== 0 || d.moved) return;
    click(pointFor(view.toUser(p)), p);
  });
  ui.over.addEventListener('pointerleave', () => { app.cursor = null; if (app.pick) app.pick.hover = []; view.overlayOnly(); });
  ui.over.addEventListener('dblclick', (e) => { e.preventDefault(); if (app.tool === 'path') { pickCommit(); return; } if (app.draft && !app.draft.mid && (app.tool === 'linear' || app.tool === 'area' || app.tool === 'cutout')) finishDraft(); });
  const padDetector = new PadDetector();
  ui.over.addEventListener('wheel', (e) => {
    if (!cur) return;
    e.preventDefault();
    if (padDetector.isSwipe(e)) { view.panBy(-e.deltaX, -e.deltaY); return; }   // D7.56: two fingers pan (the sheet follows them); a pinch and a mouse wheel zoom
    const p = pos(e);
    const step = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
    view.zoomAt(p.x, p.y, Math.pow(1.0018, -step * (e.ctrlKey ? 1 : wheelFactor())));   // IP.3: the style's wheel (a pinch stays as it is)
  }, { passive: false });
  // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — the middle drag's pan, the wheel's zoom at (x, y),
  // Fit page; nothing without a sheet, as the wheel. While the 3D view is open the sheet's canvases are only visibility-hidden (their box
  // still counts as "under the pointer"), so each move goes on to the 3D view's own (view3d.js devView) with (x, y) moved into its box.
  const dev3d = () => (d3.on && d3.view?.devView) || null;
  const devAt3d = (x, y) => { const a = ui.over.getBoundingClientRect(), b = dev3d().el.getBoundingClientRect(); return [x + a.left - b.left, y + a.top - b.top]; };
  (window.ccViews ||= []).push({
    el: ui.over, kind: '2d',
    pan(dx, dy) { if (dev3d()) return dev3d().pan(dx, dy); if (cur) view.panBy(dx, dy); },
    zoom(f, x = view.w / 2, y = view.h / 2) { if (!(f > 0)) return; if (dev3d()) return dev3d().zoom(f, ...devAt3d(x, y)); if (cur) view.zoomAt(x, y, f); },
    orbit(dx, dy) { dev3d()?.orbit(dx, dy); },   // the sheet is flat: only the 3D view turns
    fit() { if (dev3d()) return dev3d().fit(); if (cur) view.fit('page'); },
  });

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
    if (app.arc && app.draft?.pts.length && (app.arcMethod !== '3P' || !app.draft.mid)) return raw;
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
        const lw = isCad(s.file) ? cadMod.cadLinework(s.file.cad, s.info.index) : await pageLinework(pdfjs, page);   // a drawing's own lines (cadset.js)
        rec.n = lw.n; rec.truncated = lw.truncated;
        rec.idx = lw.n ? new SnapIndex(lw, await gridInWorker(lw)) : null;   // the grid is built off the page's thread (0.10 PERF.34)
        if (cur?.key === s.key && settings.snap && rec.truncated) status(t('snap.truncated', { n: MAX_SEGS.toLocaleString() }), 9000);
      } catch (err) { console.warn(err); }
      while (snaps.size > 4) snaps.delete(snaps.keys().next().value);
    })();
    return rec.pending;
  }
  let snapWorker = null, snapJobs = 0;
  /**
   * The snap grid of a sheet's segments, built in snap-worker.js (a copy of the segments goes over; the two arrays come back by transfer).
   * null when a worker cannot run (the SnapIndex then builds it here, as it always did): small sheets are not worth the hop.
   */
  function gridInWorker(lw) {
    if (lw.n < 20000 || typeof Worker === 'undefined') return Promise.resolve(null);
    return new Promise((resolve) => {
      try {
        snapWorker ??= new Worker(import.meta.resolve('./snap-worker.js'), { type: 'module' });
        const id = ++snapJobs, w = snapWorker;
        const done = (g) => { w.removeEventListener('message', on); w.removeEventListener('error', fail); resolve(g); };
        const on = (e) => { if (e.data?.id === id) done(e.data.type === 'done' ? e.data.grid : null); };
        const fail = () => { if (snapWorker === w) { w.terminate(); snapWorker = null; } done(null); };
        w.addEventListener('message', on); w.addEventListener('error', fail);
        const segs = lw.segs.slice(0, lw.n * 4);
        w.postMessage({ id, snapUrl: import.meta.resolve('./snap.js'), segs, n: lw.n }, [segs.buffer]);
      } catch { resolve(null); }
    });
  }
  function snapHit(raw) {
    if (!settings.snap || !cur || !(SNAP_TOOLS.has(app.tool) || app.drag)) return null;
    const rec = snaps.get(cur.key);
    if (!rec?.idx) return null;
    return rec.idx.snap(raw, snapPx() / view.z);
  }
  // ---- pick the PDF's own linework (0.8 SU.880; pickpath.js) ----
  // Click a line: the whole path joined to it end to end within the gap tolerance. Click inside a closed outline: its area.
  // Shift adds, Tab tries the next path, Backspace (or Ctrl+Z) takes the last segment off, [ ] set the tolerance, Enter adds the marks.
  const pickIdx = () => { const r = cur && snaps.get(cur.key); return r?.idx || null; };
  const pickTolUnits = () => (coarse ? 14 : 8) / view.z;                        // how close a click must be to a line
  const pickGapText = () => { const sc = cur && model.scaleOf(cur.key); return sc ? ftIn(settings.pickGap * sc.ftPerUnit) : U.fixed(settings.pickGap, 2) + ' pt'; };
  let pickChains = { key: '', idx: null, map: new Map() };                       // the chains of the sheet at this tolerance, so hovering stays quick
  function pickChain(idx, seed, gap) {
    const key = (cur?.key || '') + '|' + gap;
    if (pickChains.key !== key || pickChains.idx !== idx) pickChains = { key, idx, map: new Map() };
    let c = pickChains.map.get(seed);
    if (!c) {
      c = PP.chainFrom(idx, seed, gap);
      if (pickChains.map.size > 400) pickChains.map.clear();
      for (const e of c.segs) if (!pickChains.map.has(e.s)) pickChains.map.set(e.s, c);
      pickChains.map.set(seed, c);
    }
    return c;
  }
  function pickCands(p) {
    const idx = pickIdx();
    return idx ? PP.candidatesAt(idx, p, pickTolUnits(), settings.pickGap, 6, pickChain) : [];
  }
  function pickHover(p) {
    const pk = app.pick;
    if (!pk || !cur) return;
    const cands = pickCands(p);
    const same = cands[0] && pk.hover[0] && cands[0].seed === pk.hover[0].seed;
    if (!same) pk.hi = 0;
    pk.hover = cands;
    if (cands.length) {
      const sc = model.scaleOf(cur.key), i = Math.min(pk.hi, cands.length - 1), c = cands[i];
      if (sc && !pk.staged.length) ui.measure.textContent = t('sx.su880.measure.hover', { segs: t('sx.su880.seg', { n: c.segs.length }), len: ftIn(PP.pathLength(c) * sc.ftPerUnit), i: i + 1, n: cands.length, tol: t('sx.su880.tol', { gap: pickGapText() }) });
    } else if (!pk.staged.length) ui.measure.textContent = '';
  }
  function pickClick(p) {
    const idx = pickIdx(), pk = app.pick;
    if (!pk || !cur) return;
    if (!idx) { status(t('sx.su880.nolines'), 9000); return; }
    if (pk.sheet !== cur.key) { pk.sheet = cur.key; pk.staged = []; }
    const cands = pickCands(p);
    let entry;
    if (cands.length) entry = { kind: 'line', path: cands[Math.min(pk.hi, cands.length - 1)] };
    else {
      const loops = PP.loopsAround(idx, p, settings.pickGap);
      if (!loops.length) { status(t(pk.staged.length ? 'sx.su880.none' : 'sx.su880.noloop', { gap: pickGapText() }), 9000); return; }
      entry = { kind: 'loop', path: loops[0], alts: loops, ai: 0 };
    }
    if (app.shift) { if (!pk.staged.some((e) => e.path.segs.some((x) => x.s === entry.path.seed))) pk.staged.push(entry); }
    else pk.staged = [entry];
    pickReport(); view.overlayOnly();
  }
  /** The live text under the toolbar: lengths and areas of what is picked, the tolerance, how many gaps were bridged. */
  function pickReport() {
    const pk = app.pick, sc = cur && model.scaleOf(cur.key);
    if (!pk?.staged.length || !sc) return;
    const k = sc.ftPerUnit, tol = t('sx.su880.tol', { gap: pickGapText() });
    const bridged = (e) => (e.path.gaps.length ? t('sx.su880.bridged', { n: e.path.gaps.length }) : '');
    if (pk.staged.length === 1) {
      const e = pk.staged[0], segs = t('sx.su880.seg', { n: e.path.segs.length }), len = ftIn(PP.pathLength(e.path) * k);
      ui.measure.textContent = e.kind === 'loop' ? t('sx.su880.measure.area', { area: U.fixed(PP.pathArea(e.path) * k * k, 2), len, segs, tol, bridged: bridged(e) })
        : t(e.path.closed ? 'sx.su880.measure.closed' : 'sx.su880.measure.line', { segs, len, tol, bridged: bridged(e) });
    } else {
      let len = 0, area = 0;
      for (const e of pk.staged) { if (e.kind === 'loop') area += PP.pathArea(e.path) * k * k; else len += PP.pathLength(e.path) * k; }
      ui.measure.textContent = t('sx.su880.measure.many', { n: pk.staged.length, len: ftIn(len), area: U.fixed(area, 2), tol });
    }
  }
  function pickTrim() {
    const pk = app.pick;
    if (!pk?.staged.length) return;
    const last = pk.staged.at(-1), np = PP.trimLast(last.path);
    if (!np) pk.staged.pop(); else { last.path = np; last.kind = 'line'; last.alts = null; }
    if (pk.staged.length) pickReport(); else ui.measure.textContent = '';
    status(t('sx.su880.trim'));
    view.overlayOnly();
  }
  function pickGapStep(dir) {
    const pk = app.pick;
    settings.pickGap = PP.stepGap(settings.pickGap, dir);
    saveSettings(); syncSettingsForm();
    const idx = pickIdx();
    if (pk?.staged.length && idx) {                                       // the same picks, joined again at the new tolerance
      pk.staged = pk.staged.map((e) => {
        const path = PP.chainFrom(idx, e.path.seed, settings.pickGap);
        return e.kind === 'loop' && path.closed ? { ...e, path, alts: [path], ai: 0 } : { kind: 'line', path };
      });
      pickReport();
    }
    if (app.cursor) pickHover(app.cursor);
    status(t('sx.su880.tol.set', { gap: pickGapText(), pt: U.fixed(settings.pickGap, 2) }), 7000);
    view.overlayOnly();
  }
  function pickCycle() {
    const pk = app.pick;
    if (!pk) return;
    if (pk.hover.length > 1) { pk.hi = (pk.hi + 1) % pk.hover.length; status(t('sx.su880.cycle', { i: pk.hi + 1, n: pk.hover.length })); }
    else {
      const e = pk.staged.at(-1);
      if (e?.alts?.length > 1) { e.ai = (e.ai + 1) % e.alts.length; e.path = e.alts[e.ai]; pickReport(); status(t('sx.su880.cycle.loop', { i: e.ai + 1, n: e.alts.length })); }
    }
    view.overlayOnly();
  }
  function pickClear() { if (app.pick) app.pick.staged = []; ui.measure.textContent = ''; status(t('sx.su880.cleared')); view.overlayOnly(); }
  /** Keys of the Path tool; true when one was taken. */
  function pickKey(e) {
    if (e.key === 'Tab') { e.preventDefault(); pickCycle(); return true; }
    if (e.key === '[' || e.key === ']') { e.preventDefault(); pickGapStep(e.key === ']' ? 1 : -1); return true; }
    if (e.key === 'Enter') { e.preventDefault(); pickCommit(); return true; }
    if ((e.key === 'Backspace' || e.key === 'Delete') && app.pick?.staged.length) { e.preventDefault(); pickTrim(); return true; }
    if (e.key === 'Escape' && app.pick?.staged.length) { pickClear(); return true; }
    return false;
  }
  /** An item of `type` for the picked marks: the active one, else the newest; none → the new-item form opens. */
  function pickItem(type) {
    const a = app.active && model.item(app.active);
    if (a && kindsOf(a).includes(type)) return a;
    const last = [...model.state.items].reverse().find((i) => i.type === type);
    if (last) return last;
    openItemForm(type);
    status(t('sx.su880.item.' + type), 9000);
    return null;
  }
  function pickCommit() {
    const pk = app.pick;
    if (!pk?.staged.length || !cur) return;
    const sc = model.scaleOf(cur.key);
    if (!sc) { status(t('tool.err.noscale.measure'), 9000); return; }
    const lines = pk.staged.filter((e) => e.kind === 'line'), loops = pk.staged.filter((e) => e.kind === 'loop');
    const itL = lines.length ? pickItem('linear') : null, itA = loops.length ? pickItem('area') : null;
    if ((lines.length && !itL) || (loops.length && !itA)) return;          // the item form is open; Enter again once it exists
    for (const e of loops) { const why = G.outlineProblem(PP.pathPoints(e.path)); if (why) { status(why, 9000); return; } }
    let ids = [];
    try {
      if (lines.length) ids = ids.concat(model.addMarks(itL.id, lines.map((e) => {
        const pts = PP.pathPoints(e.path);
        return { sheet: cur.key, pts: e.path.closed ? [...pts, pts[0]] : pts, ...inArea() };
      }), t('sx.su880.undo.linear'), 'linear'));
      if (loops.length) ids = ids.concat(model.addMarks(itA.id, loops.map((e) => ({ sheet: cur.key, pts: PP.pathPoints(e.path), ...inArea() })), t('sx.su880.undo.area'), 'area'));
    } catch (err) { status(err.message, 9000); return; }
    pk.staged = [];
    ui.measure.textContent = '';
    app.sel = ids.at(-1) ?? app.sel;
    status(t('sx.su880.added', { n: ids.length }), 8000);
    renderMarkProps();
    view.overlayOnly();
  }
  /** The overlay: the path under the pointer (dashed; the others it could be, thin), what is picked (solid), bridged gaps and the tolerance. */
  function drawPick(ctx, S) {
    const pk = app.pick;
    if (!pk || app.tool !== 'path' || !cur) return;
    if (pk.sheet !== cur.key) { pk.sheet = cur.key; pk.staged = []; pk.hover = []; }
    const trace = (pts, close) => { ctx.beginPath(); pts.forEach((q, i) => { const s = S(q); if (i) ctx.lineTo(s.x, s.y); else ctx.moveTo(s.x, s.y); }); if (close) ctx.closePath(); };
    const tolR = Math.max(3, settings.pickGap * view.z);
    ctx.save();
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    if (!pk.staged.length || app.shift) {
      const hotI = Math.min(pk.hi, pk.hover.length - 1);
      pk.hover.forEach((c, i) => {
        const hot = i === hotI;
        ctx.strokeStyle = colors.action; ctx.globalAlpha = hot ? 0.8 : 0.3; ctx.lineWidth = hot ? 3 : 1.5; ctx.setLineDash(hot ? [8, 5] : [3, 4]);
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
      ctx.strokeStyle = colors.action; ctx.fillStyle = colors.action; ctx.lineWidth = 4;
      if (e.kind === 'loop') { ctx.globalAlpha = 0.16; trace(pts, true); ctx.fill(); }
      ctx.globalAlpha = 0.85; trace(pts, e.path.closed); ctx.stroke();
      ctx.globalAlpha = 1; ctx.lineWidth = 1;
      if (pts.length <= 300) for (const q of pts) { const s = S(q); ctx.fillRect(s.x - 2.5, s.y - 2.5, 5, 5); }
      ctx.strokeStyle = FLAG_COLOR; ctx.lineWidth = 2;                // the holes that were bridged: a ring as wide as the tolerance
      for (const g of e.path.gaps) { const s = S(g); ctx.beginPath(); ctx.arc(s.x, s.y, tolR, 0, Math.PI * 2); ctx.stroke(); }
    }
    if (app.cursor) {                                                  // the tolerance at the pointer
      const s = S(app.cursor);
      ctx.strokeStyle = colors.layer; ctx.globalAlpha = 0.8; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.arc(s.x, s.y, tolR, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.restore();
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
    if (tool === 'autocount' || tool === 'legend') return;
    if ((tool === 'linear' || tool === 'area' || tool === 'count' || tool === 'circle' || tool === 'room') && !model.item(app.active)) { setTool('select'); status(t('tool.err.item')); return; }
    if ((tool === 'linear' || tool === 'area' || tool === 'cutout' || tool === 'circle' || tool === 'cutcircle' || tool === 'room' || tool === 'path') && !model.scaleOf(cur.key)) {
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
    if (tool === 'path') { pickClick(p); return; }
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
    // arc mode: the first click after a point is on the curve, the second is where it ends (FX.137: or the chosen method's steps)
    if (app.arc && pts.length && app.arcMethod !== '3P' && (tool === 'linear' || tool === 'area' || tool === 'cutout')) { arcStep(AM.clickValue(app.arcMethod, pts.at(-1), app.draft.arcGot ??= [], p, arcSign())); return; }
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
    const ap = arcPending();
    if (ap) {                                       // FX.137: the arc the pointer would give for the last input
      const r = AM.preview(ap.id, pts.at(-1), ap.got, app.cursor, arcSign());
      if (r) { pts[pts.length - 1].b = r.b; pts.push(r.end); return pts; }
    }
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
    const ar = arcRole();
    const arcNote = d.mid ? '   ' + t('measure.arc') : ar ? '   ' + t('arc.ask.' + ar) : '';
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
      if (m.kind === 'count' && G.dist(p, m.pts[0]) <= Math.max(tol * 1.3, CMK.markerPx(settings.marker) / view.z)) return m;
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
    const dotPx = CMK.markerPx(settings.marker);        // 0.9.1: the count marker size set in Settings (6 px unless changed); the PDF draws the same size on paper
    for (const m0 of model.marksOn(cur.key)) {
      const it = items.get(m0.item);
      if (!it) continue;
      const m = drag && drag.id === m0.id ? { ...m0, pts: drag.pts, holes: drag.holes } : m0;
      const dim = (app.hl && app.hl !== m.item) || (app.curArea && m.area !== app.curArea);
      ctx.globalAlpha = dim ? 0.22 : 1;
      if (m.flag) {                       // T13: the drawing changed under it in the revision — an orange halo until checked
        ctx.save(); ctx.globalAlpha = 0.9; ctx.strokeStyle = FLAG_COLOR; ctx.lineWidth = 9; ctx.setLineDash([8, 6]);
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
      if (sc && m.kind === 'area') { const r = measureMark(m, sc.ftPerUnit, model.item(m.item)); tag(ctx, S(G.centroid(m.pts)), areaShow(r.areaSqft, model.item(m.item))); }
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
        for (const g of d.arcGot || []) if (typeof g !== 'number') { const s = S(g); ctx.beginPath(); ctx.arc(s.x, s.y, 4, 0, Math.PI * 2); ctx.stroke(); }   // FX.137: the centre / end given so far
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
    countAllUi?.draw(ctx, S, line);
    drawCadGeom(ctx, S, trace);
    drawPaste(ctx, trace);
    drawPick(ctx, S);
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
    // an add-on's item type (0.5 AO.6): "addon:<add-on id>:<kind>", made with that type's defaults
    const id = type.startsWith('addon:') ? addonsApi?.createFromSelect(type, { name }) : model.addItem({ name, type, waste: settings.waste, unit: U.defaultUnitFor(type) });
    if (!id) return;
    ui.itemForm.reset(); ui.itemForm.elements.type.value = type; ui.itemForm.hidden = true;
    setActive(id);
    status(t('item.ready.' + model.item(id).type, { item: name }));
  });
  ui.itemForm.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); ui.itemForm.hidden = true; } });

  function setActive(id, highlight = true) {
    app.active = id;
    if (highlight) pickRow = id;   // SC.5: a quantity row chosen by a person (or shown from another panel) is the pick when no mark is selected
    selChanged();
    if (highlight) app.hl = id;
    renderItems(); renderItemProps(); renderSheets(); renderQty();
    view.overlayOnly();
  }
  /** Click an item: highlight its marks everywhere (again: stop) and jump to a sheet that has them. */
  function focusItem(id) {
    if (app.hl === id && app.active === id) { app.hl = null; pickRow = null; announcePick(); renderItems(); renderSheets(); renderQty(); view.overlayOnly(); return; }
    setActive(id);
    const marks = model.state.marks.filter((m) => m.item === id);
    if (marks.length && !marks.some((m) => m.sheet === cur?.key)) {
      const target = sheets.find((s) => marks.some((m) => m.sheet === s.key));
      if (target) showSheet(target.key);
      else status(t('item.marks.closed'));
    }
  }

  /** 0.10 BK.142: select the marks an item's figures came from (its marks on the sheet shown, else on the first sheet that has some). → how many */
  async function selectMarks(id) {
    const marks = model.state.marks.filter((m) => m.item === id);
    if (!marks.length) return 0;
    if (!marks.some((m) => m.sheet === cur?.key)) { const target = sheets.find((s) => marks.some((m) => m.sheet === s.key)); if (!target) { status(t('item.marks.closed')); return 0; } await showSheet(target.key); }
    const here = marks.filter((m) => m.sheet === cur?.key).map((m) => m.id);
    if (app.active !== id) setActive(id);
    if (app.tool !== 'select') setTool('select');
    setSelection(here);
    renderMarkProps(); view.overlayOnly();
    return here.length;
  }

  const qtyLabel = (it) => {
    const tq0 = qmap.get(it.id);
    if (!tq0) return '';
    const main = U.fixed(itemQty(it, tq0), it.type === 'count' ? 0 : 2) + ' ' + U.UNITS[it.unit].label;
    // T8: a second condition's quantity follows the main one ("120.00 SF + 4 EA")
    const wall = it.type === 'linear' && it.heightFt > 0 && tq0.lengthFt > 0 ? ' · ' + t('qty.wall.short', { area: areaShow(wallArea(it, tq0).net, it) }) : '';
    return [main + wall, ...(it.conds || []).map((c) => U.fixed(condQty(c, tq0.conds?.[c.kind]), c.kind === 'count' ? 0 : 2) + ' ' + U.UNITS[c.unit].label)].join(' + ');
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

  onUnitsChange(() => { renderItemProps(); syncSettingsForm(); if (typeof refresh === 'function' && booted) refresh(); });   // 0.7 UNITS: the unit lists changed in Settings
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
          U.unitsFor(k, [c.unit]).map((x) => el('option', { value: x, selected: x === c.unit }, U.UNITS[x].label)));   // 0.7 UNITS: the units turned on + its own
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

    const gridApply = {};   // grid row id → (text, node) the same handlers the old form used
    const GP = window.ccPropGrid ? [] : null;   // 0.8 PANEL-COMPACT: the simple fields go in the shared grid where the shell has it
    let rows = [];
    if (GP) {
      const typeLocked = nMarks > 0;
      GP.push({ id: 'name', category: t('item.grid.item'), label: t('item.f.name'), type: 'text', value: it.name, maxLength: 200 },
        { id: 'type', category: t('item.grid.item'), label: t('item.f.type'), type: 'select', value: it.type, readonly: typeLocked, hint: typeLocked ? t('item.type.locked') : '', options: TYPES.map((ty) => ({ value: ty, label: TYPE_LABELS[ty] })) },
        { id: 'color', category: t('item.grid.item'), label: t('item.f.color'), type: 'color', value: it.color.toLowerCase() },
        { id: 'unit', category: t('item.grid.item'), label: t('item.f.unit'), type: 'select', value: it.unit, options: U.unitsFor(it.type, [it.unit]).map((u) => ({ value: u, label: t('unit.option', { unit: U.UNITS[u].label, name: U.UNITS[u].name }) })) });
    } else {
      const name = textInput('tc-i-name', 'name', it.name, (v, n) => { if (!v.trim()) return fail(n, t('item.err.name')); commit({ name: v }, t('undo.item.rename')); }, { maxlength: 200 });
      const type = el('select', { className: 'tc-select', id: 'tc-i-type', dataset: { field: 'type' }, disabled: nMarks > 0, title: nMarks ? t('item.type.locked') : '' },
        TYPES.map((ty) => el('option', { value: ty, selected: ty === it.type }, TYPE_LABELS[ty])));
      type.addEventListener('change', () => commit({ type: type.value, unit: U.defaultUnitFor(type.value) }, t('undo.item.type')));
      const color = el('input', { type: 'color', className: 'tc-input', id: 'tc-i-color', dataset: { field: 'color' }, value: it.color.toLowerCase() });
      color.addEventListener('change', () => commit({ color: color.value }, t('undo.item.color')));
      const unit = el('select', { className: 'tc-select', id: 'tc-i-unit', dataset: { field: 'unit' } }, U.unitsFor(it.type, [it.unit]).map((u) => el('option', { value: u, selected: u === it.unit }, t('unit.option', { unit: U.UNITS[u].label, name: U.UNITS[u].name }))));
      unit.addEventListener('change', () => commit({ unit: unit.value }, t('undo.item.unit')));
      rows = [...fieldRow(t('item.f.name'), name), ...fieldRow(t('item.f.type'), type), ...fieldRow(t('item.f.color'), color), ...fieldRow(t('item.f.unit'), unit)];
    }
    const typed = it.type === 'fixed';
    if (typed) rows.push(...fixedFields(it, commit, fail));                 // TK.5+: typed, not drawn
    else rows.push(el('span', { className: 'k', id: 'tc-i-also-l' }, t('item.f.also')), condFields(it));
    if (it.type !== 'count' && !typed) {
      const fu = fieldUnit(lu), hv = it.heightFt ? lenField(it.heightFt, fu) : '';
      const applyHeight = (v, n) => {
        if (!v.trim()) return commit({ heightFt: 0 }, t('undo.item.height'));
        const r = U.parseLength(v, { defaultUnit: fu });
        if (!r.ok) return fail(n, r.error);
        commit({ heightFt: r.ft }, t('undo.item.height'));
      };
      if (GP) GP.push({ id: 'height', category: t('item.grid.measure'), label: it.type === 'linear' ? t('item.f.height') : t('item.f.depth'), type: 'text', value: hv, hint: lenHint(fu, 'height') });
      else rows.push(...fieldRow(it.type === 'linear' ? t('item.f.height') : t('item.f.depth'), textInput('tc-i-height', 'height', hv, applyHeight, { placeholder: lenHint(fu, 'height') })));
      gridApply.height = applyHeight;
    }
    if (it.type === 'area') rows.push(...backoutFields(it));
    if (it.type !== 'count' && !typed) rows.push(...pitchFields(it));
    rows.push(...tempFields(it, commit, fail, GP, gridApply));               // 0.9: a temperature spec on any item (a grid row beside the height, else a form row)
    const shape = it.type !== 'count' && !typed ? el('div', { className: 'tc-props' }, shapeFields(it, lu, fail)) : null;
    const crewLab = it.crew ? U.rateInput(est.rows.find((r) => r.kind === 'item' && r.itemId === it.id)?.lab ?? 0) : null;
    const ul = U.UNITS[it.unit].label;
    const applyWaste = (v, n) => { const r = U.parsePercent(v); if (!r.ok) return fail(n, r.error); commit({ waste: r.bp }, t('undo.item.waste')); };
    const applyMat = (v, n) => { const r = U.parseRate(v); if (!r.ok) return fail(n, r.error); commit({ mat: r.rate4 }, t('undo.item.mat')); };
    const applyLab = (v, n) => { const r = U.parseRate(v); if (!r.ok) return fail(n, r.error); commit({ lab: r.rate4 }, t('undo.item.lab')); };
    const applyCsi = (v, n) => {           // TK.4: groups the workbook's "By division"
      const x = v.trim().replace(/\s+/g, ' ');
      if (x && !csiOk(x)) return fail(n, t('item.csi.err'));
      commit({ csi: x || undefined }, t('undo.item.csi'));
    };
    if (GP) {
      const C = t('item.grid.cost');
      GP.push({ id: 'waste', category: C, label: t('item.f.waste'), type: 'text', value: U.percentInput(it.waste) },
        { id: 'mat', category: C, label: t('item.f.mat', { unit: ul }), type: 'text', value: U.rateInput(it.mat) },
        { id: 'lab', category: C, label: t('item.f.lab', { unit: ul }), type: 'text', value: it.crew ? crewLab : U.rateInput(it.lab), readonly: !!it.crew, hint: it.crew ? t('crew.lab.locked') : '' },
        { id: 'csi', category: C, label: t('item.f.csi'), type: 'text', value: it.csi || '', maxLength: 11, hint: t('item.csi.ph') });
      Object.assign(gridApply, { waste: applyWaste, mat: applyMat, lab: applyLab, csi: applyCsi, name: (v, n) => { if (!v.trim()) return fail(n, t('item.err.name')); commit({ name: v }, t('undo.item.rename')); } });
    } else {
      const waste = textInput('tc-i-waste', 'waste', U.percentInput(it.waste), applyWaste, { inputmode: 'decimal' });
      const mat = textInput('tc-i-mat', 'mat', U.rateInput(it.mat), applyMat, { inputmode: 'decimal' });
      const lab = textInput('tc-i-lab', 'lab', U.rateInput(it.lab), applyLab, { inputmode: 'decimal' });
      if (it.crew) { lab.disabled = true; lab.title = t('crew.lab.locked'); lab.value = crewLab; }
      rows.push(...fieldRow(t('item.f.waste'), waste), ...fieldRow(t('item.f.mat', { unit: ul }), mat), ...fieldRow(t('item.f.lab', { unit: ul }), lab));
    }
    rows.push(...crewFields(it, commit, fail));
    if (!GP) rows.push(...fieldRow(t('item.f.csi'), textInput('tc-i-csi', 'csi', it.csi || '', applyCsi, { placeholder: t('item.csi.ph'), maxlength: 11 })));

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
    } else if (typed) out[0].textContent = t('item.typed.sub');            // nothing measured: the quantity is the one typed above
    else out.push(...kv(t('item.m.count'), String(v.N)));
    if (tq.unscaled) out.push(el('p', { className: 'tc-field-err' }, t('item.unscaled', { n: tq.unscaled })));

    // assembly
    const comps = el('div', { className: 'tc-comps' },
      el('div', { className: 'tc-comps-head' }, el('h3', { className: 'tc-h' }, t('asm.h')),
        el('button', { type: 'button', className: 'tc-linkbtn', dataset: { compAdd: id }, onclick: () => { const c = model.addComponent(id, { name: t('comp.default'), unit: 'EA', formula: VARS[it.type][0] }); setTimeout(() => ui.itemProps.querySelector('[data-field="c:' + c + ':name"]')?.select(), 0); } }, icon('plus-lg'), ' ' + t('asm.add'))),
      el('p', { className: 'tc-vars' }, t('asm.vars.a'), ' ', VARS[it.type].flatMap((k, i) => [i ? ', ' : '', el('code', {}, k), ' ' + VAR_HELP[it.type][k]]), t('asm.vars.b'), ' ',
        el('code', {}, it.type === 'linear' ? 'ceil(L / 1.333) + N' : it.type === 'area' ? 'ceil(A / 32 * 1.1)' : typed ? 'Q * 1.25' : 'N * 2'), '.'),
      it.components.map((c) => compEditor(it, c, v)));

    const actions = el('div', { className: 'tc-actions' },
      el('button', { type: 'button', className: 'tc-linkbtn', dataset: { itemCopy: id }, onclick: () => copyItem(id) }, t('item.copy')),
      el('button', { type: 'button', className: 'tc-linkbtn', dataset: { itemDup: id }, onclick: () => duplicateItem(id) }, t('item.dup')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => model.moveItem(id, -1) }, t('item.up')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => model.moveItem(id, 1) }, t('item.down')),
      el('button', { type: 'button', className: 'tc-linkbtn is-danger', onclick: () => deleteItem(it) }, t('item.delete')));
    let gridHost = null;
    if (GP) {
      gridHost = el('div', { className: 'tc-grid' });
      ccPropGrid.create(gridHost, { label: t('item.grid.label'), key: 'item', rows: GP, onChange: (rid, val) => {
        // the person's text goes through the same readers as the form; a refusal marks the box and says why in the status line
        const node = gridHost.querySelector('[data-pg-row="' + rid + '"]');
        if (rid === 'type') return commit({ type: val, unit: U.defaultUnitFor(val) }, t('undo.item.type'));
        if (rid === 'color') return commit({ color: val }, t('undo.item.color'));
        if (rid === 'unit') return commit({ unit: val }, t('undo.item.unit'));
        const fn = gridApply[rid]; if (fn) fn(String(val), node || { classList: { add() {} } });
      } });
      gridHost.querySelectorAll('[data-pg-row]').forEach((n) => { n.dataset.field = n.dataset.pgRow; });   // keepFocus finds the box again by it
    }
    ui.itemProps.replaceChildren(...(gridHost ? [gridHost] : []), el('div', { className: 'tc-props' }, rows), ...(shape ? [shape] : []), el('div', { className: 'tc-props' }, out), comps, actions);
  }

  /** TK.5+: a typed quantity's own fields — the quantity, its bid area, and where it came from when it was imported. */
  function fixedFields(it, commit, fail) {
    const q = textInput('tc-i-qty', 'qty', it.qty ? String(+it.qty.toFixed(6)) : '0', (v, n) => {
      const s2 = String(v).trim().replace(/,/g, '');
      const x = /^\d*\.?\d+$/.test(s2) ? Number(s2) : NaN;
      if (!(x >= 0 && x <= 1e12)) return fail(n, t('item.qty.err'));
      commit({ qty: x }, t('undo.item.qty'));
    }, { inputmode: 'decimal' });
    const out = [...fieldRow(t('item.f.qty', { unit: U.UNITS[it.unit].label }), q)];
    const areas = model.state.areas || [];
    if (areas.length) {
      const sel = el('select', { className: 'tc-select', id: 'tc-i-area', dataset: { field: 'area' } },
        el('option', { value: '' }, t('area.none')), areas.map((a) => el('option', { value: a.id, selected: a.id === it.area }, a.name)));
      sel.addEventListener('change', () => commit({ area: sel.value || undefined }, t('undo.item.area')));
      out.push(...fieldRow(t('item.f.area'), sel));
    }
    out.push(el('span', { className: 'k' }), el('p', { className: 'tc-note', dataset: { itemOrigin: '' } }, it.origin ? originText(it.origin) : t('item.typed.note')));
    return out;
  }

  /** 0.9: the item's temperature (a spec: lowest pour or install temperature, a curing or service temperature). Typed in °C or °F
   *  (a bare number is in the display unit), kept in kelvin, shown in the display unit; blank = none. */
  function tempFields(it, commit, fail, GP, gridApply) {
    const tm = tempMode();
    const text = Number.isFinite(it.tempK) ? U.formatTemp(it.tempK, tm) : '';
    const apply = (v, n) => {
      if (!v.trim()) return commit({ tempK: 0 }, t('undo.item.temp'));
      const r = U.parseTemp(v, tm);
      if (!r.ok) return fail(n, t(r.error));
      commit({ tempK: r.kelvin }, t('undo.item.temp'));
    };
    const hint = tm === 'degc' ? '5 °C' : '40 °F';
    if (GP) { GP.push({ id: 'temp', category: t('item.grid.measure'), label: t('item.f.temp'), type: 'text', value: text, hint }); gridApply.temp = apply; return []; }
    return fieldRow(t('item.f.temp'), textInput('tc-i-temp', 'temp', text, apply, { placeholder: hint, inputmode: 'text', title: t('item.f.temp.title') }));
  }

  /** T5: fields that only shape the 3D view — a wall's thickness, base height and opening head; an area's base height. */
  function shapeFields(it, lu, fail) {
    const fu = fieldUnit(lu);
    const lenInput = (id, field, ft, ph, onCommit) => textInput(id, field, ft ? lenField(ft, fu) : '', (v, n) => {
      if (!v.trim()) return onCommit(0);
      const r = U.parseLength(v, { defaultUnit: fu });
      if (!r.ok) return fail(n, r.error);
      onCommit(r.ft);
    }, { placeholder: ph });
    const set = (k) => (ft) => model.updateItem(it.id, { [k]: ft }, t('undo.item.3d'));
    const out = [el('p', { className: 'tc-props-sub' }, t('item.f.3d'))];
    if (it.type === 'linear') {
      out.push(...fieldRow(t('item.f.thick'), lenInput('tc-i-thick', 'thick', it.thickFt, lenHint(fu, 'thick'), set('thickFt'))));
      out.push(...fieldRow(t('item.f.head'), lenInput('tc-i-head', 'head', it.headFt, lenHint(fu, 'head'), set('headFt'))));
    }
    out.push(...fieldRow(t('item.f.base'), lenInput('tc-i-base', 'base', it.baseFt, lenHint(fu, 'base'), set('baseFt'))));
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
    announcePick();   // SC.5: every change of the selected marks ends here (Shift+click changes the set without a new main mark)
    wsChanged();
    renderToolbar();
    if (d3.on) d3.view?.setSelection(selIds());
    const m = app.sel && model.mark(app.sel);
    ui.markSec.hidden = !m;
    if (!m) { ui.markProps.replaceChildren(); return; }
    ui.markSec.querySelector('.tc-h').textContent = selMore.size ? t('mark.h.many') : t('mark.h');
    if (selMore.size) { renderMultiProps(); return; }
    const it = model.item(m.item);
    const sc = model.scaleOf(m.sheet);
    const r = measureMark(m, sc?.ftPerUnit, it, wallRule(model.state));   // 0.10 BK.42: by the takeoff's measurement method
    const G = window.ccPropGrid ? [] : null;   // 0.8 PANEL-COMPACT: the mark's facts and its item go in the shared grid where the shell has it
    let kvn = 0;
    const kv = (k, val) => G ? (G.push({ id: 'v' + (kvn++), category: t('mark.grid.measured'), label: k, type: 'readonly', value: val }), []) : [el('span', { className: 'k' }, k), el('span', { className: 'v' }, val)];
    const itemOpts = model.state.items.filter((i) => kindsOf(i).includes(m.kind));
    const moveTo = (v) => { model.updateMark(m.id, { item: v }, t('undo.mark.item')); setActive(v, false); };
    let rows, applyZ = null;
    if (G) {
      G.push({ id: 'item', category: t('mark.grid.mark'), label: t('mark.f.item'), type: 'select', value: m.item, options: itemOpts.map((i) => ({ value: i.id, label: i.name })) },
        { id: 'sheet', category: t('mark.grid.mark'), label: t('mark.f.sheet'), type: 'readonly', value: sheetLabel(m.sheet) });
      rows = [...areaField([m.id]), ...groupField([m.id])];
    } else {
      const move = el('select', { className: 'tc-select', id: 'tc-m-item', dataset: { field: 'm-item' } }, itemOpts.map((i) => el('option', { value: i.id, selected: i.id === m.item }, i.name)));
      move.addEventListener('change', () => moveTo(move.value));
      rows = [el('label', { for: 'tc-m-item' }, t('mark.f.item')), move, ...kv(t('mark.f.sheet'), sheetLabel(m.sheet)), ...areaField([m.id]), ...groupField([m.id])];
    }
    const extra = [];
    if (!r) rows.push(...kv(t('item.measured'), t('mark.noscale')));
    else if (m.kind === 'linear') {
      rows.push(...kv(t('mark.f.length'), t('mark.length', { len: ftIn(r.lengthFt), lf: U.fixed(r.lengthFt, 2) })), ...kv(t('mark.f.segments'), String(r.segmentsFt.length)));
      if (r.deducts.length) rows.push(...kv(t('props.deducts'), ftIn(r.deductFt)), ...kv(t('props.drawn'), ftIn(r.grossFt)));
      if (it.heightFt > 0 && it.type === m.kind) {
        const wa = wallArea(it, r);   // 0.10 BK.11: the net wall area; a run with openings (from a BimCraft takeoff) says what was taken out
        rows.push(...kv(t('mark.f.wall'), areaShow(wa.net, it)));
        if (wa.deductions > 0) rows.push(...kv(t('mark.f.wallgross'), areaShow(wa.gross, it)), ...kv(t('mark.f.wallopens', { n: r.openN }), areaShow(wa.deductions, it)));
        if (r.openKeptSqft > 0) rows.push(...kv(t('mark.f.wallkept', { n: m.opens.length - r.openN }), areaShow(r.openKeptSqft, it)));   // 0.10 BK.42: openings the method does not deduct
        if (wa.junctions > 0) rows.push(...kv(t('mark.f.walljunc'), areaShow(wa.junctions, it)));
        const mn = methodNote(model.state); if (mn) rows.push(...kv(t('mark.f.method'), mn));
      }
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
      rows.push(...kv(t('mark.f.area'), areaShow(Math.max(0, r.areaSqft - cut), it)));
      if (cut > 0) rows.push(...kv(t('props.backouts'), '−' + areaShow(cut, it)));
      if (r.factor > 1) rows.push(...kv(t('props.plan_area'), areaShow(Math.max(0, r.planSqft - cut / r.factor), it)), ...kv(t('props.slope_factor'), U.fixed(r.factor, 4)));
      rows.push(...markPitchField(m, it));
      if (it.backout && !G.isConvex(m.pts)) extra.push(el('p', { className: 'tc-field-err' }, t('backout.mark.convex')));
      if (m.holes.length) rows.push(...kv(t('mark.f.outline'), areaShow(r.grossSqft, it)), ...kv(t('mark.f.cutouts'), t('mark.cutouts.a', { n: m.holes.length, area: areaShow(r.cutSqft, it) })));
      rows.push(...kv(t('mark.f.perimeter'), m.holes.length ? t('mark.perimeter.holes', { len: ftIn(r.perimeterFt) }) : ftIn(r.perimeterFt)));
    } else {
      rows.push(...kv(t('mark.f.count'), '1'));
      // TK.5: a spot elevation on a count mark, handed to CivilCraft (Export › Spot elevations); decimal feet, ft-in or metres
      applyZ = (raw, z) => {
        const v = raw.trim();
        if (!v) { model.updateMark(m.id, { z: undefined }, t('undo.mark.z')); return; }
        const num = /^-?\d+(?:\.\d+)?$/.test(v) ? Number(v) : null;
        const r = num === null ? U.parseLength(v.replace(/^-/, ''), { defaultUnit: 'ft' }) : null;
        const ft = num !== null ? num : r.ok ? (v.startsWith('-') ? -r.ft : r.ft) : null;
        if (ft === null || !(Math.abs(ft) < 1e5)) { z.classList.add('is-invalid'); status(t('spots.err')); return; }
        model.updateMark(m.id, { z: ft }, t('undo.mark.z'));
      };
      const zv = typeof m.z === 'number' ? String(U.roundTo(m.z, 4)) : '';
      if (G) G.push({ id: 'z', category: t('mark.grid.measured'), label: t('spots.field'), type: 'text', value: zv, hint: t('spots.field.title') });
      else {
        const z = el('input', { type: 'text', className: 'tc-input', id: 'tc-m-z', dataset: { field: 'm-z' }, value: zv, placeholder: t('spots.ph'), autocomplete: 'off', title: t('spots.field.title') });
        z.addEventListener('change', () => applyZ(z.value, z));
        z.addEventListener('keydown', (e) => { if (e.key === 'Enter') z.blur(); });
        rows.push(el('label', { for: 'tc-m-z' }, t('spots.field')), z);
      }

    }
    if (m.flag) extra.unshift(el('div', { className: 'tc-flag-note' }, el('p', {}, t('flag.note')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { flagChecked: m.id }, onclick: () => { model.clearFlags([m.id]); } }, t('flag.checked'))));
    const actions = el('div', { className: 'tc-actions' },
      m.kind === 'area' ? el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => setTool('cutout') }, t('mark.cutout.add')) : null,
      m.kind === 'area' ? el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => setTool('cutcircle') }, t('mark.cutout.round')) : null,
      m.kind === 'area' && m.holes.length ? el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => model.updateMark(m.id, { holes: m.holes.slice(0, -1) }, t('undo.cutout.remove')) }, t('mark.cutout.remove')) : null,
      el('button', { type: 'button', className: 'tc-linkbtn is-danger', onclick: () => deleteSelected() }, t('mark.delete')));
    keepFocus(ui.markProps, () => {
      let gridHost = null;
      if (G) {
        gridHost = el('div', { className: 'tc-grid' });
        ccPropGrid.create(gridHost, { label: t('mark.grid.label'), key: 'mark', rows: G, onChange: (rid, val) => {
          if (rid === 'item') moveTo(val);
          else if (rid === 'z') applyZ(String(val), gridHost.querySelector('[data-pg-row="z"]'));
        } });
        gridHost.querySelectorAll('[data-pg-row]').forEach((n) => { n.dataset.field = n.dataset.pgRow; });
      }
      ui.markProps.replaceChildren(...(gridHost ? [gridHost] : []), el('div', { className: 'tc-props' }, rows), ...extra, actions);
    });
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

  const { isMac, modKey, currentClip, itemList, copySelection, cutSelection, copyItem, duplicateItem, startPaste, duplicateSelection, placePaste, endPaste, selectAll, selectNone, drawPaste } = mountClipboard({
    ui, model, app, selIds, setSelection, d3, view, status, settings, scaleText, setTool, setActive, renderMarkProps, discardAutoCount, close3d, refresh,
    get cur() { return cur; },
    get sheets() { return sheets; },
    get colors() { return colors; },
  });
  if (isMac) for (const k of root.querySelectorAll('.tc-menu-list kbd')) k.textContent = k.textContent.replace('Ctrl+', 'Cmd+');



  // =========================================================================
  // Bid areas (T12): the picker on top of the Items panel, the manage dialog, the mark field, the By area table

  const { areaSel, inArea, renderAreas, setCurArea, newArea, manageAreas, areaField, groupField, renderGroups, buildAreaTable } = mountAreas({
    ui, model, app, setSelection, view, status, showSheet, setTool, setActive, keepFocus, textInput, renderMarkProps, root,
    get cur() { return cur; },
    get est() { return est; },
  });
  areaSel.addEventListener('change', async () => {
    const v = areaSel.value;
    if (v === '__new') { areaSel.value = app.curArea || ''; const id = await newArea(); if (id) setCurArea(id); return; }
    if (v === '__manage') { areaSel.value = app.curArea || ''; await manageAreas(); return; }
    setCurArea(v || null);
  });
  const { NOTE_TOOLS, noteAt, boxNote, noteHit, renderNoteProps, renderNotes, drawNotesLayer } = mountNotes({
    ui, model, app, view, status, sheetLabel, showSheet, hitPx, tag, keepFocus, renderMarkProps, root,
    get cur() { return cur; },
    get colors() { return colors; },
  });
  ui.notesOpen.addEventListener('change', renderNotes);



  // =========================================================================
  // Revision overlay (T13; overlay.js): the older sheet in red over this one, aligned; changes found by comparing their
  // ink; the old sheet's takeoff moved here with the marks whose drawing changed flagged for review.

  const { openCompare, startCompare, closeCompare, drawCompare, renderCmp, startAlign, alignPick, findChanges, moveTakeoff, renderFlags, nextFlag } = mountCompare({
    $, model, app, d3, view, status, busy, showSheet, scaleText, setTool, cancelDraft, setActive, renderMarkProps, endPaste, discardAutoCount, rasterize, close3d, refresh, root,
    get cur() { return cur; },
    get sheets() { return sheets; },
    get colors() { return colors; },
  });
  $('[data-cmp-align]').addEventListener('click', () => startAlign());
  $('[data-cmp-find]').addEventListener('click', () => findChanges());
  $('[data-cmp-move]').addEventListener('click', () => moveTakeoff());
  $('[data-cmp-close]').addEventListener('click', () => closeCompare());


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
    signoffUi?.decorate();   // 0.10 BK.62 / BK.142: no-rate flags, the sign-off bar, figures that select their marks
    layoutQtyTable({ table: ui.qtyTable, mode: app.qtyMode, state: model.state, est, sheetRows: app.qtyMode === 'sheet' ? sheetBreakdown(model.state, qmap) : [], sheetLabel });   // 0.10 BK.149: after the flags, so moved rows keep them
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
      if (r.kind === 'subcontract') {                       // 0.7 B3: the chosen bid, standing in for its package's own pricing
        return el('tr', { className: 'is-sub', dataset: { qtySub: r.pkg } }, el('td', { colSpan: 7 }, t('qty.sub.row', { bidder: r.bidder, pkg: (r.pkg ? r.pkg + ' ' : '') + (r.pkg ? divisionTitle(r.pkg) : t('csi.div.none')) })),
          el('td', {}), el('td', {}), el('td', {}, U.formatCents(r.total)));
      }
      const it = items.get(r.itemId);
      const isItem = r.kind === 'item', isCond = r.kind === 'condition';
      const first = el('td', {}, isItem || isCond ? el('span', { className: 'tc-chip', style: { background: it.color } }) : null, isCond ? t('qty.cond.name', { item: r.name, type: TYPE_LABELS[r.cond].toLowerCase() }) : r.name,
        isItem && r.unscaled ? el('span', { className: 'tc-flag', title: t('qty.unscaled.title') }, t('qty.unscaled', { n: r.unscaled })) : null,
        isItem && r.awarded ? el('span', { className: 'tc-flag', dataset: { qtyAwarded: r.itemId }, title: t('qty.awarded.title', { own: U.formatCents(r.ownTotal) }) }, t('qty.awarded', { bidder: r.awarded })) : null);
      const dec = (isItem && it.type === 'count') || (isCond && r.cond === 'count') ? 0 : 2;
      const tr = el('tr', { className: (isItem ? 'is-item' : isCond ? 'is-item is-cond' : 'is-comp') + (app.hl === r.itemId && isItem ? ' is-hl' : ''), dataset: isItem ? { qtyRow: r.itemId } : isCond ? { qtyCond: r.itemId + ':' + r.cond } : { qtyComp: r.itemId + ':' + r.compId } }, first,
        r.error ? el('td', { className: 'is-err', colSpan: 2 }, t('x.note.error', { error: r.error })) : [el('td', {}, U.fixed(r.qty, dec)), el('td', { className: 'tl' }, r.unit)],
        cell(r, 'waste', U.percentInput(r.waste), U.parsePercent, 'bp'),
        el('td', {}, r.error ? '' : U.fixed(r.qtyW, dec === 0 && r.waste === 0 ? 0 : 2)),
        cell(r, 'mat', U.rateInput(r.mat), U.parseRate, 'rate4'),
        r.crew ? el('td', { title: t('crew.lab.locked') }, U.rateInput(r.lab)) : cell(r, 'lab', U.rateInput(r.lab), U.parseRate, 'rate4'),
        el('td', {}, r.error ? '' : U.formatCents(r.matExt)), el('td', {}, r.error ? '' : U.formatCents(r.labExt)), el('td', {}, r.error ? '' : U.formatCents(r.total)));
      if (isItem || isCond) tr.addEventListener('click', () => focusItem(r.itemId));
      // TK.1 feedback: a linear item with a height also measures wall area (length × height); show it, so tiling a bathroom's walls needs no formula
      const tq = isItem && !r.error && it.type === 'linear' && it.heightFt > 0 ? qmap.get(r.itemId) : null;
      if (tq && tq.lengthFt > 0) return [tr, el('tr', { className: 'is-note', dataset: { qtyWall: r.itemId } }, el('td', { colSpan: 10, className: 'tl' }, (tq.openSqft > 0 ? t('qty.wall.notenet', { item: r.name, area: areaShow(wallArea(it, tq).net, it), gross: areaShow(wallArea(it, tq).gross, it), ded: areaShow(wallArea(it, tq).deductions, it), h: ftIn(it.heightFt) }) : t('qty.wall.note', { item: r.name, area: areaShow(wallArea(it, tq).net, it), h: ftIn(it.heightFt) })) + (tq.juncSqft > 0 ? ' ' + t('qty.wall.junc', { area: areaShow(tq.juncSqft, it) }) : '') + (methodNote(model.state) ? ' ' + methodNote(model.state) : '')))];
      return tr;
    }).flat();
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
    const bytesOut = await estimateXlsx(model.state, sheetLabel, { columns: columnsNow(), pageSizes: pageSizeRows() });
    host.download(bytesOut, safeName(model.state.name) + '.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    status(t('export.xlsx', { file: safeName(model.state.name) + '.xlsx' }) + (est.incomplete ? ' ' + t('export.incomplete') : ''), 9000);
  }
  function exportCsv() {
    if (!model.state.items.length) { status(t('export.empty')); return; }
    host.download('\uFEFF' + estimateCsv(model.state, est, columnsNow()), safeName(model.state.name) + '.csv', 'text/csv;charset=utf-8');   // BOM: spreadsheets read m² right
    status(t('export.csv', { file: safeName(model.state.name) + '.csv' }));
  }
  function exportMaterials() {                      // TK.4: the material list, every assembly part added up
    if (!materialList(model.state, est).length) { status(t('mat.empty')); return; }
    const file = safeName(t('mat.file', { name: model.state.name || 'Takeoff' })) + '.csv';
    host.download('\uFEFF' + materialCsv(model.state, est), file, 'text/csv;charset=utf-8');
    status(t('mat.done', { file }));
  }
  function exportSpots() {                          // TK.5: the open sheet's spot elevations, as a point file CivilCraft opens
    if (!cur) { status(t('spots.nosheet')); return; }
    const r = spotElevationsCsv(model.state, cur.key, sheetLabel);
    if (!r.ok) { status(r.why, 9000); return; }
    const file = safeName(t('spots.file', { sheet: sheetLabel(cur.key) })) + '.csv';
    host.download(r.csv, file, 'text/csv;charset=utf-8');
    status(t('spots.done', { file, n: r.n }), 9000);
  }
  async function exportPdf() {
    const withMarks = files.filter((f) => model.state.marks.some((m) => m.sheet.startsWith(f.hash + ':')) || (model.state.notes || []).some((n) => n.sheet.startsWith(f.hash + ':')));
    if (!withMarks.length) { status(t('export.pdf.none')); return; }
    busy(t('export.pdf.busy'));
    await frame();
    try {
      const PDFLib = await import('pdf-lib');
      for (const f of withMarks) {
        let src = f.bytes, state = model.state;
        if (isCad(f)) {                    // 0.7 TD.6: a drawing's sheets with marks are drawn as a PDF first (cadpdf.js), no plotting step for anyone
          const { cadSheetsPdf, remapState } = await import('./cadpdf.js');
          const used = new Set([...model.state.marks, ...(model.state.notes || [])].filter((m) => m.sheet.startsWith(f.hash + ':')).map((m) => Number(m.sheet.split(':')[1])));
          const made = await cadSheetsPdf(PDFLib, f, [...used].sort((x, y) => x - y));
          src = made.bytes; state = remapState(model.state, f.hash, made.pages);
        }
        const out = await pdfWithMarks(PDFLib, src, f.hash, state, { marker: settings.marker });
        host.download(out.bytes, safeName(f.name.replace(/\.(pdf|dwg|dxf)$/i, '')) + ' (takeoff).pdf', 'application/pdf');
      }
      status(t('export.pdf.done', { n: withMarks.length }));
    } catch (err) {
      console.error(err);
      status(t('export.pdf.failed', { reason: err.message }), 12000);
    } finally { busy(null); }
  }

  /** T10: each open PDF as a copy with the takeoff inside (its pages untouched), to reopen the takeoff from the PDF alone. */
  async function exportEmbed() {
    if (!files.some((f) => !isCad(f))) { status(t('handoff.nopdf')); return; }
    if (!model.state.items.length) { status(t('embed.none')); return; }
    busy(t('embed.busy'));
    await frame();
    try {
      const PDFLib = await import('pdf-lib');
      const json = model.toJSON();
      const pdfFiles = files.filter((f) => !isCad(f));          // a drawing cannot carry a takeoff inside it: the PDFs do
      for (const f of pdfFiles) {
        const out = await embedTakeoff(PDFLib, f.bytes, json, f.hash);
        host.download(out, t('embed.file', { name: safeName(f.name.replace(/\.pdf$/i, '')) }) + '.pdf', 'application/pdf');
      }
      status(t('embed.done', { n: pdfFiles.length }), 9000);
    } catch (err) {
      console.error(err);
      status(t('embed.failed', { reason: err.message }), 12000);
    } finally { busy(null); }
  }

  // =========================================================================
  // Count from the drawing (0.7 TD.3): by block, by layer + entity type, by text — exact, from the DWG / DXF itself

  const countItems = () => model.state.items.filter((i) => kindsOf(i).includes('count'));
  /** The counting pieces (cadcount.js, cadmarks.js), loaded the first time a drawing is counted. */
  let cadCountMods = null;
  const loadCadCount = async () => (cadCountMods ??= { cc: await import('./cadcount.js'), cm: await import('./cadmarks.js'), ui: await import('./cadcount-ui.js') });
  const countDone = (r) => status(t('cad.count.done', { n: r.n, item: model.item(r.item)?.name || '', already: r.already, mod: modKey }), 12000);

  async function cadCount(preset = null) {
    const s = cur;
    if (!s || !isCad(s.file)) { status(t('cad.count.needs')); return; }
    busy(t('cad.count.busy'));
    await frame();
    let mods;
    try { mods = await loadCadCount(); s.file.cad.index(); } catch (err) { console.error(err); busy(null); status(t('cad.count.failed', { reason: err.message }), 12000); return; }
    busy(null);
    const r = await mods.ui.openCadCount({
      root, ask, t, set: s.file, sheetIndex: s.info.index, preset,
      items: countItems().map((i) => ({ id: i.id, name: i.name, marks: model.state.marks.filter((m) => m.item === i.id).length })),
      activeId: app.active,
      existingFor: (id) => model.state.marks.filter((m) => m.item === id && m.kind === 'count'),
      commit: (a) => model.addCounted({ ...a, list: a.list.map((m) => ({ ...m, ...inArea() })) }),
    });
    if (!r) return;
    setActive(r.item, true);
    countDone(r);
  }

  // =========================================================================
  // Measure from geometry (0.7 TD.4): pick the drawing's own lines, arcs, polylines and hatches, take them as a linear or area item

  const geomCache = new Map();                                // sheet key → { tag, items, skipped, clipped }
  const geomBar = root.querySelector('[data-geombar]');
  function geomList(s) {
    const tag = [...s.file.cad.layerOverride].join(';');     // the layer panel changes what is offered
    let c = geomCache.get(s.key);
    if (!c || c.tag !== tag) { c = { tag, ...geomMod.collectGeometry(s.file, s.info.index) }; geomCache.set(s.key, c); if (app.geom) app.geom.sel.clear(); }
    return c;
  }
  const geomItems = () => (cur && isCad(cur.file) && geomMod ? geomList(cur).items : []);
  /** The kind the active item measures by: 'linear' or 'area' (its own type, else a second condition it has), else null. */
  function geomKind() {
    const it = model.item(app.active);
    if (!it) return null;
    if (it.type === 'linear' || it.type === 'area') return it.type;
    const ks = kindsOf(it);
    return ks.includes('area') ? 'area' : ks.includes('linear') ? 'linear' : null;
  }
  const geomSelected = () => (app.geom ? geomItems().filter((i) => app.geom.sel.has(i.id)) : []);
  function geomClick(p, additive) {
    const hit = geomMod.hitTest(geomItems(), p, hitPx() / view.z);
    if (!app.geom) return;
    if (!hit) { if (!additive) geomClear(); return; }
    if (app.geom.sel.has(hit.id)) app.geom.sel.delete(hit.id);
    else app.geom.sel.add(hit.id);                           // a click adds: several objects, one after another
    renderGeomBar(); view.overlayOnly();
  }
  function geomWindow(a, b, additive) {
    if (!app.geom) return;
    if (!additive) app.geom.sel.clear();
    for (const it of geomMod.inWindow(geomItems(), a, b)) app.geom.sel.add(it.id);
    renderGeomBar(); view.overlayOnly();
  }
  function geomClear() { if (app.geom) app.geom.sel.clear(); renderGeomBar(); view.overlayOnly(); }
  function renderGeomBar() {
    if (!geomBar) return;
    geomBar.hidden = app.tool !== 'cadgeom';
    if (geomBar.hidden) return;
    const kind = geomKind(), sel = geomSelected(), sc = cur && model.scaleOf(cur.key);
    const it = model.item(app.active);
    const sum = geomBar.querySelector('[data-geom-summary]'), add = geomBar.querySelector('[data-geom-add]'), clr = geomBar.querySelector('[data-geom-clear]');
    if (!sel.length) sum.textContent = t(kind === 'area' ? 'cad.geom.hint.area' : 'cad.geom.hint.linear', { item: it?.name || '' });
    else if (sc && kind) {
      const tot = geomMod.totals(sel, kind);
      const marks = geomMod.marksFor(sel, kind);
      sum.textContent = (kind === 'area' ? t('cad.geom.sel.area', { n: marks.list.length, area: U.fixed(tot.area * sc.ftPerUnit * sc.ftPerUnit, 2) }) : t('cad.geom.sel.linear', { n: marks.list.length, len: ftIn(tot.len * sc.ftPerUnit) }))
        + (marks.skipped.open ? ' ' + t('cad.geom.left.open', { n: marks.skipped.open }) : '') + (marks.skipped.hatch ? ' ' + t('cad.geom.left.hatch', { n: marks.skipped.hatch }) : '')
        + (marks.approx ? ' ' + t('cad.geom.approx', { n: marks.approx }) : '');
    }
    add.textContent = t('cad.geom.add', { n: geomMod && kind ? geomMod.marksFor(sel, kind).list.length : 0, item: it?.name || '' });
    add.disabled = !sel.length || !kind || !geomMod.marksFor(sel, kind).list.length;
    clr.disabled = !sel.length;
  }
  geomBar?.querySelector('[data-geom-add]').addEventListener('click', () => addGeometry());
  geomBar?.querySelector('[data-geom-clear]').addEventListener('click', () => geomClear());
  /** Take the picked objects as marks of the active item: a run for each line, arc or polyline (a closed one by its perimeter) or an outline for each closed shape — ONE undo step. */
  function addGeometry() {
    const kind = geomKind(), it = model.item(app.active), sel = geomSelected();
    if (!kind || !it || !sel.length || !cur) return;
    if (!model.scaleOf(cur.key)) { status(t('tool.err.noscale.measure'), 9000); return; }
    const r = geomMod.marksFor(sel, kind);
    if (!r.list.length) { status(t(kind === 'area' ? 'cad.geom.none.area' : 'cad.geom.none.linear'), 9000); return; }
    const ids = model.addMarks(it.id, r.list.map((m) => ({ sheet: cur.key, pts: m.pts, holes: m.holes, ...inArea() })), t('cad.geom.undo', { n: r.list.length, item: it.name }), kind);
    const sc = model.scaleOf(cur.key);
    const qty = ids.reduce((n, id) => { const m = measureMark(model.mark(id), sc.ftPerUnit, it); return n + (kind === 'area' ? m.areaSqft : m.lengthFt); }, 0);
    app.geom.sel.clear();
    app.sel = ids[0] || null;
    status(t('cad.geom.done', { n: r.list.length, item: it.name, qty: kind === 'area' ? U.fixed(qty, 2) + ' ' + t('cad.geom.sf') : ftIn(qty), mod: modKey }) + (r.approx ? ' ' + t('cad.geom.approx', { n: r.approx }) : ''), 12000);
    renderGeomBar(); view.overlayOnly();
  }
  function drawCadGeom(ctx, S, trace) {
    if (app.tool !== 'cadgeom' || !app.geom || !cur || !isCad(cur.file)) return;
    const it = model.item(app.active), color = it?.color || colors.action;
    const items = geomItems();
    const sel = app.geom.sel;
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    const hover = app.cursor && !app.box ? geomMod.hitTest(items, app.cursor, hitPx() / view.z) : null;
    const draw = (g, w, alpha, fillA) => {
      ctx.beginPath(); trace(g.pts, g.closed);
      for (const h of g.holes) trace(h, true);
      ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = w;
      if (g.closed && fillA) { ctx.save(); ctx.globalAlpha = fillA; ctx.fillStyle = color; ctx.fill('evenodd'); ctx.restore(); }
      ctx.stroke();
    };
    if (hover && !sel.has(hover.id)) draw(hover, 2, 0.55, 0);
    for (const g of items) if (sel.has(g.id)) draw(g, 3, 1, 0.18);
    ctx.restore();
  }

  const { bidDialog, levelDialog, loadLib, saveLib, libraryDialog, packsDialog, levelsDialog } = mountDialogs({
    model, files, status, settings, fieldUnit, lenField, lenHint, sheetLabel, host, setActive, root, TYPE_ICONS,
    get est() { return est; },
    get sheets() { return sheets; },
  });
  const actions = {
    'cad-count': () => cadCount(),
    'open-pdf': async () => { const l = await host.openFile({ types: PDF_TYPES, multiple: true }); if (l.length) await openHostFiles(l); },
    'open-project': async () => { const l = await host.openFile({ types: PROJECT_TYPES }); if (l.length) await openHostFiles(l); },
    'save-project': saveProject,
    'export-xlsx': exportXlsx,
    'export-csv': exportCsv,
    'export-materials': exportMaterials,
    'export-spots': exportSpots,
    'export-pdf': exportPdf,
    'export-bid': bidDialog,
    'export-level': levelDialog,
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
  let learnUi = null;   // 0.8 SU.811: mounted near the end of init
  let countAllUi = null;   // 0.8 EG.67: mounted right after it
  let pricesUi = null;   // 0.8 EG.68
  let supplyUi = null;   // 0.8 EG.51

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
      if (!r.ok) { status(t('room.err.' + r.why, { gap: ftIn(settings.roomGap) }), 9000); return; }
      const inv = G.invert(T);
      const pts = r.ring.map((q) => G.apply(inv, { x: q.x / w, y: q.y / w }));
      const why = G.outlineProblem(pts);
      if (why) { status(why, 9000); return; }
      app.sel = model.addMark({ item: it.id, sheet: sheet.key, pts, kind: 'area', ...inArea() });
      const m = measureMark(model.mark(app.sel), sc.ftPerUnit, it);
      status(t('room.done', { sf: U.fixed(m.areaSqft, 2), n: pts.length, mod: modKey }), 9000);
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
    ac.learn = { tpl, px: w, ft: model.scaleOf(cur.key)?.ftPerUnit || null };   // 0.8 SU.811: kept if the person accepts
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
    if (learnUi?.acceptLearned(ac, on)) return;   // 0.8 SU.811: a learned symbol's search (may add its item)
    const it = model.item(ac.item);
    app.ac = null;
    renderAcBar();
    if (!it || !on.length) { view.overlayOnly(); return; }
    model.addMarks(it.id, on.map((c) => ({ sheet: c.sheet, pts: [c.center], ...inArea() })), t('undo.ac', { n: on.length, item: it.name }), 'count');
    status(t('ac.added', { n: on.length, item: it.name, mod: modKey }), 9000);
    learnUi?.confirmed(ac, on.length, it);   // 0.8 SU.811: remember the symbol the person just confirmed
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
    wsChanged();
  }

  function close3d() {
    if (!d3.on) return;
    d3.on = false;
    ui3d.root.hidden = true;
    ui.stage.classList.remove('is-3d');
    ui3d.btn?.setAttribute('aria-pressed', 'false');
    view.invalidate(true);
    wsChanged();
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







  async function exportGlb() {
    if (!d3.scene?.objects?.some((o) => o.kind !== 'frame' && (o.tris.length || o.kind === 'run'))) { status(t('d3.glb.empty')); return; }
    const { sceneToGlb } = await import('./glb.js');
    const name = safeName(model.state.name || 'Takeoff') + (d3.stack ? '' : ' - ' + safeName(cur.title)) + '.glb';   // i18n-ignore: a file name
    const bytes = sceneToGlb(d3.scene, { name: model.state.name });
    host.download(bytes, name, 'model/gltf-binary');
    status(t('d3.glb.done', { file: name, n: d3.scene.objects.filter((o) => o.kind !== 'frame').length }), 9000);
  }

  /** The 3D check view as a USD package (.usdz; usd-takeoffcraft.js on cc-usd, ./usd/; 0.7 XF.8). */
  async function exportUsd() {
    if (!d3.scene?.objects?.some((o) => o.kind !== 'frame' && (o.tris.length || o.kind === 'run'))) { status(t('d3.glb.empty')); return; }
    const { checkUsd } = await import('./usd-takeoffcraft.js');
    const name = safeName(model.state.name || 'Takeoff') + (d3.stack ? '' : ' - ' + safeName(cur.title)) + '.usdz';   // i18n-ignore: a file name
    const r = checkUsd(d3.scene, { format: 'usdz', name: model.state.name });
    host.download(r.data, name, 'model/vnd.usdz+zip');
    status(t('usd.done', { name, n: r.report.objects }), 9000);
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
  $('[data-3d-usd]')?.addEventListener('click', () => exportUsd());   // 0.7 XF.8
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
      if (k === 'z' && !e.shiftKey && app.tool === 'path' && app.pick?.staged.length) { e.preventDefault(); pickTrim(); return; }   // undo per segment while a path is picked
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
    if (app.tool === 'path' && pickKey(e)) return;
    if (canType() && !mod && /^[0-9.@#]$/.test(e.key)) { e.preventDefault(); openTypeIn(e.key); return; }
    if (e.key === 'Shift') { app.shift = true; if (app.cursor && app.draft) { view.overlayOnly(); } return; }
    if (e.key === ' ') { e.preventDefault(); app.space = true; return; }
    if (e.key === 'Escape' && app.cmp) { if (app.cmp.align) { app.cmp.align = null; status(''); view.overlayOnly(); } else closeCompare(); return; }
    if (e.key === 'Escape' && app.tool === 'cadgeom' && app.geom?.sel.size) { geomClear(); return; }
    if (e.key === 'Enter' && app.tool === 'cadgeom') { e.preventDefault(); addGeometry(); return; }
    if (e.key === 'Escape') { if (app.paste) endPaste(); else if (app.ac?.running) cancelAutoCount(); else if (app.ac) { discardAutoCount(); status(t('ac.discarded')); } else if (app.draft?.mid) { app.draft.mid = null; liveMeasure(); view.overlayOnly(); } else if (app.draft?.arcGot?.length) { app.draft.arcGot = []; arcPrompt(); liveMeasure(); view.overlayOnly(); } else if (app.draft) cancelDraft(); else if (app.tool !== 'select') setTool('select'); else selectNone(); return; }
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
    const tool = { v: 'select', l: 'linear', a: 'area', o: 'circle', b: 'room', p: 'path', x: 'cutout', c: 'count', s: 'autocount', k: 'calibrate', d: 'check' }[key];
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
  // Toolbar availability: a button that cannot do anything right now is greyed out

  const NEEDS_SHEET = new Set(['fit-page', 'fit-width', 'arc', 'deduct', 'select-all', 'paste', 'paste-in-place']);
  const NEEDS_SELECTION = new Set(['copy', 'cut', 'duplicate', 'delete', 'select-none']);
  const NEEDS_PDF = new Set(['export-pdf', 'export-embed']);
  const NEEDS_CAD = new Set(['cad-count']);                   // counting from a drawing needs a drawing's sheet on screen
  const NEEDS_WORK = new Set(['save-project', 'export-xlsx', 'export-csv', 'export-materials', 'export-spots', 'export-bid', 'export-level']);
  const exportSummary = root.querySelector('[data-export-menu] > summary');
  function renderToolbar() {
    const st = model.state;
    const hasPdf = files.length > 0;
    const hasWork = hasPdf || st.items.length > 0;
    const hasSel = !!app.sel || selMore.size > 0;
    for (const b of root.querySelectorAll('[data-act]')) {
      const a = b.dataset.act;
      if (a === 'new-takeoff') b.disabled = !(hasWork || st.marks.length || model.dirty);
      else if (NEEDS_SHEET.has(a)) b.disabled = !cur;
      else if (NEEDS_SELECTION.has(a)) b.disabled = !hasSel;
      else if (NEEDS_PDF.has(a)) b.disabled = !hasPdf;
      else if (NEEDS_CAD.has(a)) b.disabled = !(cur && isCad(cur.file));
      else if (NEEDS_WORK.has(a)) b.disabled = !hasWork;
    }
    for (const b of root.querySelectorAll('button[data-tool]')) if (b.dataset.tool !== 'select') b.disabled = !cur;
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
    projectTarget = null;              // a recovered copy has no file of its own: Save asks where (desktop) or downloads
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
  const placePreset = () => {
    if (!presetLabel || !presetHome || presetLabel.closest('.ws-block')) return;   // a workspace layout holds it in its view bar (0.7 WS.11)
    const styled = !!root.querySelector(':scope > [role="toolbar"].cc-in-styled');
    if (styled && presetLabel.parentElement !== ui.sheetbar) ui.sheetScale.after(presetLabel);
    else if (!styled && presetLabel.parentElement !== presetHome) presetHome.append(presetLabel);
  };
  window.addEventListener('cc-input-mouse', () => requestAnimationFrame(placePreset));

  // ---- 0.7 WS.11: the workspace layouts (Settings › Global › Layout): the shell's engine, filled by workspace-takeoffcraft.js ----
  /** Why a command's own button can't run now, in words (the layouts grey the tool with it); '' = no better reason than its own. */
  function whyOff(c, b) {
    const a = b.dataset.act, tool = b.dataset.tool;
    if ((c.sheet || NEEDS_SHEET.has(a) || (tool && tool !== 'select')) && !cur) return t('input.why.pdf');
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
    if (marks.length) { pickRow = null; return marks.map((id) => ({ id: 'mark:' + id })); }
    const it = pickRow && model.item(pickRow);
    return it ? [{ id: String(it.id), ...(it.origin && it.origin.key ? { key: String(it.origin.key) } : {}) }] : [];
  }
  function announcePick() {
    if (pickQueued) return;
    pickQueued = true;
    queueMicrotask(() => {   // once per change: the main mark and the others are set one after another
      pickQueued = false;
      const refs = pickRefs(), key = refs.map((r) => r.id).join(',');
      if (key === pickLast) return;
      pickLast = key;
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
      if (!marks.some((m) => m.sheet === cur?.key)) { const target = sheets.find((x) => marks.some((m) => m.sheet === x.key)); if (!target) return false; await showSheet(target.key); }
      const here = marks.filter((m) => m.sheet === cur?.key).map((m) => m.id);
      if (!here.length) return false;
      if (app.active !== marks[0].item) setActive(marks[0].item, false);
      setSelection(here); renderMarkProps(); renderItems(); renderItemProps(); view.overlayOnly();
    } else if (items.length) {
      if (selIds().length) { app.sel = null; renderMarkProps(); }
      setActive(items[0].id, true);
    } else return false;
    const now = pickRefs();
    pickLast = now.map((r) => r.id).join(',');   // shown from elsewhere: not a new pick of this panel
    return now.map((r) => r.id);
  }
  function pickClear() {
    if (selIds().length) { app.sel = null; renderMarkProps(); }
    pickRow = null; pickLast = '';
    if (app.hl) { app.hl = null; renderItems(); renderSheets(); renderQty(); }
    view.overlayOnly();
    return true;
  }
  (window.ccPickers = window.ccPickers || {}).takeoffcraft = { apply: pickApply, clear: pickClear, get: () => { const refs = pickRefs(); return { ids: refs.map((r) => r.id), refs }; } };

  const wsHost = {
    root, stage: ui.stage, panels: { left: $('.tc-left'), right: $('.tc-right') }, status: ui.status,
    say: (text, bad) => status(text || '', bad ? 8000 : 6000),
    sheets: () => sheets.map((s) => { const sc = model.scaleOf(s.key); return { key: s.key, title: s.title, cad: isCad(s.file), scale: sc ? scaleText(sc, s.info.userUnit, true) : '' }; }),
    current: () => cur?.key || null,
    show: (key) => showSheet(key),
    tool: () => app.tool,
    selection: () => selIds(),
    name: () => model.state.name || '',
    dirty: () => !!model.dirty,
    busy: () => !ui.busy.hidden,
    hasFiles: () => files.length > 0,
    is3d: () => d3.on,
    endTool: () => { if (app.tool !== 'select') setTool('select'); },
    conditions: () => model.state.items.map((it) => ({ id: it.id, name: it.name, color: it.color, qty: qtyLabel(it), active: app.active === it.id })),
    estimate: () => ({ rows: est.rows.filter((r) => r.kind === 'item').map((r) => ({ id: r.itemId, name: r.name, total: Number.isFinite(r.total) ? U.formatCents(r.total) : '' })),
      total: model.state.items.length ? ui.jobTotal.textContent : '' }),
    focusItem: (id) => focusItem(id),
    openQty: () => { if (root.classList.contains('is-qty-closed')) ui.qtyToggle.click(); },
    reason: whyOff, presetLabel, placePreset: () => placePreset(),
    propSections: [ui.itemSec, ui.noteSec, ui.markSec],
    areaRow: $('.tc-area-row'), sheetbar: ui.sheetbar, snap: $('[data-snap-toggle]'), zoom: ui.zoom,
    resized: () => view.resize(),
  };
  if (document.getElementById('cc-workspace')) {   // the build lists layouts (manifest "workspaces"); the engine is in the import map then
    import('./workspace-takeoffcraft.js').then((m) => m.mountTakeoffcraftWorkspace(wsHost)).then((w) => { ws = w; if (!w) document.documentElement.removeAttribute('data-cc-ws-boot'); })
      .catch((err) => { console.error(err); document.documentElement.removeAttribute('data-cc-ws-boot'); });   // a failed start shows the page in classic
  }

  // ---- API for tests and the console ----
  window.takeoffcraft = {
    model, view,
    files, openFiles, status: (s) => status(s),   // Studio Live (live.js): the PDFs a joiner gets, opening them, its messages
    ready: false,
    sheets: () => sheets.map((s) => ({ key: s.key, title: s.title })),
    sheet: () => (cur ? cur.key : ''),   // 0.9 SU.1112: the sheet on screen (live.js presenceView: others' cursors on it)
    showSheet: (key) => (sheets.some((s) => s.key === key) ? showSheet(key) : null),   // 0.9 ED.1: a follower opens the leader's sheet (live.js presenceView goSpace)
    rendered: () => view.renders,
    toScreen: (p) => { const s = view.toScreen(p); const r = ui.over.getBoundingClientRect(); return { x: r.left + s.x, y: r.top + s.y }; },
    zoomTo: (r) => view.zoomTo(r),
    scale: () => (cur ? model.scaleOf(cur.key) : null),
    quantities: () => est.rows.filter((r) => r.kind === 'item').map((r) => ({ itemId: r.itemId, name: r.name, qty: r.qty, unit: r.unit, total: r.total })),
    estimate: () => est,
    countall: () => countAllUi?.api.state() || null,   // 0.8 EG.67 (tools/takeoffcraft-test/browser-countall.mjs)
    autocount: () => (app.ac ? { running: app.ac.running, found: acVisible().length, adding: acVisible().filter((c) => !c.rejected).length, threshold: app.ac.threshold,
      boxes: acVisible().filter((c) => c.sheet === cur?.key).map((c) => ({ center: c.center, score: c.score, rejected: c.rejected })) } : null),
    selection: () => selIds(),
    pick: () => (app.pick ? { gap: settings.pickGap, hover: app.pick.hover.length, staged: app.pick.staged.map((e) => ({ kind: e.kind, segs: e.path.segs.length, closed: e.path.closed, gaps: e.path.gaps.length, len: PP.pathLength(e.path), area: PP.pathArea(e.path) })) } : null),   // 0.8 SU.880 (tools/takeoffcraft-test/browser-pickpath.mjs)
    signoff: () => signoffUi?.api || null,   // 0.10 BK.62 (tools/takeoffcraft-test/browser-signoff.mjs)
    carbonDrive: () => carbonUi?.drive, tagQty: () => tagQtyUi?.drive,   // tools/takeoffcraft-test/browser-eg14.mjs
    shell: () => shellMount?.host || null,   // 0.8 round 3 (tools/takeoffcraft-test/browser-mount.mjs)
    tool: () => app.tool,   // 0.7 WS.11: the running tool (tools/workspace-test/apps/takeoffcraft.mjs)
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
    cad: {                                                   // 0.7 TD.3: counts without the dialog (tests; same code path as the dialog)
      info: () => (cur && isCad(cur.file) ? { file: cur.file.name, format: cur.file.cad.format, sheet: { ...cur.info.cad, name: cur.info.label }, scale: model.scaleOf(cur.key), warnings: cur.file.cad.warnings, units: cur.file.cad.units } : null),
      sheets: () => files.filter(isCad).flatMap((f) => f.cad.sheets.map((s) => ({ key: sheetKey(f.hash, s.index), name: s.name, kind: s.kind, scale: model.scaleOf(sheetKey(f.hash, s.index)), viewports: s.viewports.length, note: s.note }))),
      geometry: () => { const l = geomItems(); return { n: l.length, selected: app.geom ? [...app.geom.sel] : null, types: l.reduce((o, i) => ((o[i.type] = (o[i.type] || 0) + 1), o), {}), bbox: l.length ? { minX: Math.min(...l.map((i) => i.bbox.minX)), maxX: Math.max(...l.map((i) => i.bbox.maxX)), minY: Math.min(...l.map((i) => i.bbox.minY)), maxY: Math.max(...l.map((i) => i.bbox.maxY)) } : null, page: cur ? { w: cur.info.width, h: cur.info.height } : null }; },
      pick: (a, b, additive = false) => geomWindow(a, b, additive),
      catalog: async (scope = 'sheet') => { const { cc } = await loadCadCount(); const ix = cur.file.cad.index(); return cc.catalog(ix, scope === 'sheet' ? cadMod.sheetRefs(cur.file.cad.sheets[cur.info.index], ix).map((e) => e.ref) : ix.all); },
      count: async (kind, query, scope = 'sheet') => {
        const { cc } = await loadCadCount(); const ix = cur.file.cad.index();
        const refs = scope === 'sheet' ? cadMod.sheetRefs(cur.file.cad.sheets[cur.info.index], ix).map((e) => e.ref) : ix.all;
        const r = kind === 'block' ? cc.countBlocks(ix, refs, query) : kind === 'shape' ? cc.countShapes(ix, refs, { ...query, inside: query.inside ? { model: cur.file.cad.model } : null }) : cc.countTexts(ix, refs, query);
        return { total: r.total, hiddenSkipped: r.hiddenSkipped, byVariant: r.byVariant, byLayer: r.byLayer, points: r.found.map((x) => [x.x, x.y]) };
      },
      add: async (kind, query, { scope = 'sheet', item = null, name = '' } = {}) => {
        const { cc, cm } = await loadCadCount(); const set = cur.file, ix = set.cad.index();
        const refs = scope === 'sheet' ? cadMod.sheetRefs(set.cad.sheets[cur.info.index], ix).map((e) => e.ref) : ix.all;
        const r = kind === 'block' ? cc.countBlocks(ix, refs, query) : kind === 'shape' ? cc.countShapes(ix, refs, { ...query, inside: query.inside ? { model: set.cad.model } : null }) : cc.countTexts(ix, refs, query);
        const plan = cm.planMarks({ set, sheetIndex: cur.info.index, scope, found: r.found, existing: item ? model.state.marks.filter((m) => m.item === item && m.kind === 'count') : [] });
        const out = model.addCounted({ item, create: item ? null : { name: name || 'Count', type: 'count' }, list: plan.list.map((m) => ({ ...m, ...inArea() })), label: t('cad.count.undo', { n: plan.list.length, what: name || query.name || query.text || '' }) });
        setActive(out.item, true);
        return { added: plan.list.length, already: plan.already, stacked: plan.stacked, item: out.item };
      },
    },
    reset: () => { model.load({ format: 'takeoffcraft-project', version: 1, files: [], items: [], marks: [] }); for (const f of files) model.addFile({ hash: f.hash, name: f.name, size: f.size, pages: f.pages.length }); app.active = app.sel = app.hl = null; refresh(); },
  };

  // 0.8 SU.811 (sx-learn, learn-ui.js): the Learned button and dialog, the offer bar, finding learned symbols through the Auto count review
  learnUi = mountLearn({ root, model, app, status, sheets: () => sheets, cur: () => cur, rasterize, searchInWorker, stopWorker: () => { acWorker?.terminate(); acWorker = null; }, renderAcBar, discardAutoCount,
    overlay: () => view.overlayOnly(), setActive: (id) => setActive(id, true), selIds, inArea, host, projectTypes: PROJECT_TYPES });

  // 0.8 EG.67 (takeoff_PART_2, countall-ui.js): Count everything — box a legend, count each symbol on every open sheet, review, add
  countAllUi = mountCountAll({ root, model, app, status, sheets: () => sheets, cur: () => cur, rasterize, overlay: () => view.overlayOnly(), inArea, modKey,
    page: (s) => s.file.doc.getPage(s.info.index + 1),
    viewport: (page, s, w) => page.getViewport({ scale: w, rotation: s.info.rotate }),
    unit: (s, wt) => { const inv = G.invert(s.info.transform); return (x, y) => G.apply(inv, { x: x / wt, y: y / wt }); },
    showSheet: (key) => showSheet(key), setActive: (id) => setActive(id, true), ftOf: (key) => model.scaleOf(key)?.ftPerUnit || null,
    threshold: () => settings.threshold, color: () => colors.action,
    learn: (ac, n, it, th) => learnUi?.confirmed({ learn: ac, threshold: th }, n, it) });

  // 0.8 EG.68 (takeoff_PART_2, prices-ui.js): price memory — the rates of your past jobs, in this browser beside the Library
  pricesUi = mountPrices({ root, model, status, host, projectTypes: PROJECT_TYPES, modKey });

  // 0.8 EG.51 (takeoff_PART_2, supply-ui.js): supplier stock and lead-time files checked against what the takeoff needs; Problems source takeoffcraft.supply
  supplyUi = mountSupply({ root, model, status, host, control: host.control, estimate: () => est, setActive: (id) => setActive(id, true), modKey, library: { load: loadLib, save: saveLib } });

  // 0.8 EG.14 + EG.17 (takeoff_PART_3, carbon-ui.js): embodied carbon from the quantities, and the takeoff's rates as a 5D price table
  carbonUi = mountCarbon({ root, model, status, host, estimate: () => est, setActive: (id) => setActive(id, true) });
  // 0.10 BK.62 / BK.142 (estimate-signoff-ui.js): missing rates flagged, the estimate signed off by a person (recorded in the file), figures select their marks
  window.takeoffcraftIssues = mountTakeoffIssues({ root, t, model, sheets: () => sheets.map((x) => ({ key: x.key, title: x.title })), goTo: (key) => showSheet(key), download: (text, name, type) => host.download(text, name, type) });   // 0.10 BK.48; tests
  signoffUi = mountSignoff({ root, model, status, estimate: () => est, selectMarks, selectAll: () => { selectAll(); return selIds().length; }, columns: () => columnsNow(), download: (text, name, type) => host.download(text, name, type) });
  renderQty();
  // 0.8 SU.915 (takeoff_PART_3, tagqty-ui.js): a tag schedule from the building model as typed quantities
  tagQtyUi = mountTagQty({ root, model, status, importFile: (json, name) => importQuantityFile(json, name) });

  // ---- AI assistants and scripts (0.4 part 2 X.7, session agents; agents.js on host.js's control channel): off until Settings › Assistants ----
  // ---- 0.8 round 3 (takeoff_PART_3): the shell's seven modules, attached once host.control has its tools
  shellMount = mountTakeoffShell({
    model, control: host.control, estimate: () => est, carbon: () => calcCarbon(est, model.state.items, model.state.carbon),
    selection: () => {
      const id = (selMain && model.mark(selMain)?.item) || app.active, it = id && model.item(id);
      return it ? { kind: 'item', id: it.id, label: it.name } : null;
    },
    onSelection: (fn) => { selListeners.add(fn); return () => selListeners.delete(fn); },
    select: (id) => { if (model.item(id)) setActive(id, true); },
    name: () => model.state.name || '', path: () => projectTarget?.name || '',
  });
  // ---- drafting without sight (0.8 round 3, EG.52; assets/js/app-access.js): the takeoff's items in order, each said with its quantity; the job total on D ----
  {
    const rows = () => model.state.items.map((it) => ({ id: it.id, kind: 'object', label: t('access.item', { name: it.name, type: t('access.type.' + (it.type === 'fixed' ? 'fixed' : it.type)), qty: qtyLabel(it), marks: qmap.get(it.id)?.marks || 0 }) }));
    const goAccess = () => window.ccAccess.mount({
      stage: ui.over, label: () => t('access.stage'),
      walk: rows,
      describe: () => { const n = model.state.items.length; return n ? t('access.job', { name: model.state.name || '', n, marks: model.state.marks.length, total: U.formatCents(est.total) }) : t('access.empty'); },
      selection: () => { const id = (selMain && model.mark(selMain)?.item) || app.active, it = id && model.item(id); return it ? t('access.selected', { what: rows().find((r) => r.id === it.id)?.label || it.name }) : t('access.nosel'); },
      pick: (p, item) => { if (item) { setActive(item.id, true); window.ccAccess.say(t('access.selected', { what: item.label })); } else window.ccAccess.say(t('access.nosel')); },
    });
    const goStatus = () => window.ccAccess.follow(ui.status, { max: 240 });
    for (const f of [goAccess, goStatus]) { if (window.ccAccess) f(); else document.addEventListener('cc-access-ready', f, { once: true }); }
  }
  onDefaults(() => { try { renderQty(); } catch (e) { /* not drawn yet */ } });   // 0.10 BK.149: an office policy changed (or the add-on was switched): the tables follow at once
  // ---- add-ons (0.5 AO.6, session addons; docs/ADDONS-SPEC.md §5.6): TakeoffCraft's own loader and API 1.0 (manifest "addons": "own") ----
  let addonsApi = null;
  startAddons({ model, status, setActive: (id) => setActive(id), typeSelect: ui.itemForm.elements.type, rightPanel: root.querySelector('.tc-right'),
    refresh: () => { renderItems(); renderItemProps(); renderQty(); } })
    .then((a) => { addonsApi = a; }).catch((err) => console.warn('add-ons did not start:', err));   // i18n-ignore (developer message)

  installAgents({ model, sheetLabel, countAll: () => countAllUi?.drive, prices: () => pricesUi?.drive, supply: () => supplyUi?.drive, carbon: () => carbonUi?.drive, sheetByKey: (key) => sheets.find((s) => s.key === key), sheets: () => sheets.map((s) => ({ key: s.key, title: s.title, view: s.info.view })), current: () => (cur ? cur.key : null), exportCsv, exportXlsx, selectMarks, estimateTsv: () => estimateTsv(model.state, est, columnsNow()),
    cadSets: () => files.filter(isCad),   // 0.7 AS.6 (assistants-gaps): the open DWG / DXF drawings for cad_count, cad_measure
    usd: async (key, format) => {   // 0.7 AS.6: the sheet's 3D check view as OpenUSD, as exportUsd makes it (needs a scaled sheet; the 3D view need not be open)
      const s = sheets.find((x) => x.key === key);
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
    if (!f || isCad(f)) { status(t('handoff.nopdf')); return; }    // the hand-over is for PDFs
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
    // TK.6: ?pack=<id> (the add-on directory's Install link, behind the owner's go) opens Trade packs pointing at that pack;
    // installing still takes the person's click
    const packParam = new URLSearchParams(location.search).get('pack');
    if (packParam && /^[a-z][a-z0-9.-]{1,63}$/.test(packParam)) {
      const u = new URL(location.href);
      u.searchParams.delete('pack');
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
      packsDialog({ offer: packParam });
    }
    if (pdfjs) { const launched = await host.launchFiles(); if (launched.length) await openHostFiles(launched); }   // desktop: files it was started with
    // Studio Live from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the takeoff and its PDFs come from the host
    if (pdfjs && /[#&]live=|[?&]live=/.test(location.hash + location.search)) import('./live.js').then((m) => m.joinFromPage(window.takeoffcraft, host), (err) => status(err.message, 12000));
    // "Recover your work?" when a page that stopped left a takeoff behind (`recovery` tells tests: none | asking | done)
    autosave.orphans().then((list) => {
      window.takeoffcraft.recovery = list.length ? 'asking' : 'none';
      if (list.length) return autosave.offer({ list, onRecover: recoverCopy }).then(() => { window.takeoffcraft.recovery = 'done'; });
    }).catch(() => { window.takeoffcraft.recovery = 'none'; });
  });
}
