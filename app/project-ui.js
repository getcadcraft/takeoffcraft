/* SPDX-License-Identifier: Apache-2.0 */
/**
 * project-ui.js: takeoffcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountProject(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { ask, safeName, el, bytes } from './ui-util.js';
import { t } from './i18n.js';
import { isQuantities, readQuantities, importQuantities } from './fixedqty.js';
import { matchFiles } from './pdfset.js';
import { olderCopy } from './model.js';

export function mountProject(ctx) {
  const { ST, ui, model, files, app, view, status, busy, rebuildSheets, showSheet, host, PROJECT_TYPES, root } = ctx;

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
      if (!r.elements.length) {          // 0.11 MT.1: a building model (no roads, rails or bridges): its elements are measured and picked in the model takeoff panel
        busy(null);
        if (ST.modelUi) { await ST.modelUi.openFile(f); return; }
        status(t('ifc43.none', { file: f.name, schema: r.schema }), 12000); return;
      }
      importQuantityFile(I43.quantitiesFile(r, { project: f.name.replace(/\.ifc$/i, ''), app: 'IFC' }), f.name);   // i18n-ignore: the origin label
    } catch (err) {
      status(t('ifc43.failed', { file: f.name, error: String(err?.message || err) }), 12000);
    } finally { busy(null); }
  }

  /** A quantities file (fixedqty.js, e.g. CivilCraft's cut and fill): its items join the takeoff as typed quantities, one undo step. */
  function importQuantityFile(json, name) {
    const r = readQuantities(json);
    if (!r.ok) { status(t('qty.in.failed', { file: name, error: r.error }), 12000); return false; }
    let o;
    try { o = importQuantities(model, r); } catch (err) { status(err.message, 12000); return false; }
    const msg = [t('qty.in.done', { file: name, app: r.app, added: o.added, updated: o.updated, same: o.same })];
    if (o.unitChanged.length) msg.push(t('qty.in.unit', { items: ctx.itemList(o.unitChanged) }));
    if (r.skipped) msg.push(t('qty.in.skipped', { n: r.skipped }));
    if (o.ids.length) ctx.setActive(o.ids[0], false);
    status(msg.join(' '), 12000);
    return true;   // 0.11 MT.4: window.takeoffcraft.importQuantities says whether the file joined the takeoff
  }

  /** Replace the takeoff with a parsed project (a file, or an autosaved copy); the open PDFs stay open. */
  async function loadProject(json) {
    const r = model.load(json);
    if (!r.ok) return r;
    model.takeIdBlock();   // 0.11 DC.27: this session's new ids come from a block of its own
    for (const f of files) model.addFile({ hash: f.hash, name: f.name, size: f.size, pages: f.pages.length });
    app.sel = null; app.hl = null; app.draft = null; app.check = null;
    app.active = model.state.items[0]?.id || null;
    rebuildSheets();
    if (!ST.cur && ST.sheets.length) await showSheet(ST.sheets[0].key);
    else if (ST.cur) { ctx.renderSheetBar(); view.invalidate(); }
    return r;
  }

  /** Save the takeoff (host.save: in place on the desktop, a download in the browser). → true when it was saved. */
  async function saveProject() {
    const name = safeName(model.state.name || 'Takeoff') + '.takeoff.json';   // i18n-ignore: a file name
    const r = await host.save({ target: ST.projectTarget, data: JSON.stringify(model.toJSON(), null, 1), name, types: PROJECT_TYPES, type: 'application/json' });
    if (!r.ok) { if (!r.cancelled) status(t('file.save_failed', { error: String(r.error?.message || r.error || '') }), 12000); return false; }
    if (r.target?.writable) ST.projectTarget = r.target;
    model.markSaved();
    ST.pricesUi?.saved();   // 0.8 EG.68: this job's prices are remembered
    status(r.how === 'written' ? t('file.written', { file: r.path || r.name || name }) : t('file.saved', { file: name }));
    return true;
  }

  /** 0.11 DC.27: Save for 0.10: a copy whose new ids are numbered again into the range 0.10 and older read (model.js olderCopy).
   *  Only when someone picks it; Save (Ctrl+S) always writes the file as it is. The copy is not this takeoff's file. */
  async function saveOlder() {
    let data;
    try { data = olderCopy(model.toJSON()); } catch { status(t('file.older.full'), 12000); return false; }
    const name = safeName(model.state.name || 'Takeoff') + ' (0.10).takeoff.json';   // i18n-ignore: a file name
    const r = await host.save({ target: null, data: JSON.stringify(data, null, 1), name, types: PROJECT_TYPES, type: 'application/json' });
    if (!r.ok) { if (!r.cancelled) status(t('file.save_failed', { error: String(r.error?.message || r.error || '') }), 12000); return false; }
    status(t('file.older.saved', { file: r.path || r.name || name }), 12000);
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

  return { confirmDiscard, openProject, importIfcFile, importQuantityFile, loadProject, saveProject, saveOlder, renderMissing };
}
