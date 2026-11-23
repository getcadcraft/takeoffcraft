/* SPDX-License-Identifier: Apache-2.0 */
/**
 * files-ui.js: takeoffcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountFiles(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { frame, ask } from './ui-util.js';
import { sha256Hex, openPdf } from './pdfset.js';
import { sheetKey } from './model.js';
import { readEmbedded } from './embed.js';
import * as U from './units.js';

export function mountFiles(ctx) {
  const { ST, ui, urls, model, files, CAD_RE, isCad, snaps, status, busy, ready, refresh, root } = ctx;

  async function openFiles(list) {
    await ready;
    if (!ST.pdfjs) return;
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
    const rvts = all.filter((f) => /\.rvt$/i.test(f.name));     // 0.11 MT.2: an .rvt project goes to model takeoff (read in the lab only; elsewhere the status line asks for an IFC export)
    const other = all.filter((f) => !pdfs.includes(f) && !cads.includes(f) && !projects.includes(f) && !ifcs.includes(f) && !rvts.includes(f));
    if (other.length) status(t('open.skipped', { files: other.map((f) => f.name).join(', ') }));
    let first = null, embedded = null;
    for (const f of [...pdfs, ...cads]) {
      busy(t('open.busy', { file: f.name }));
      await frame();
      try {
        const data = new Uint8Array(await f.arrayBuffer());
        if (cads.includes(f)) {          // 0.7 TD.1: a drawing opens as sheets (model space and every layout), read by the shared readers
          ST.cadMod ??= await import('./cadset.js');
          ST.geomMod ??= await import('./cadgeom.js');
          const hash = await sha256Hex(data);
          if (files.some((x) => x.hash === hash)) { status(t('open.already', { file: f.name })); continue; }
          const set = await ST.cadMod.openCad(data, f.name, { hash, readers: await ST.cadMod.defaultReaders() });
          files.push({ ...set, bytes: data });
          model.addFile({ hash: set.hash, name: set.name, size: set.size, pages: set.pages.length });
          if (model.state.name === 'Takeoff' && !model.state.items.length) model.state.name = f.name.replace(CAD_RE, '');   // i18n-ignore
          applyDrawingScales(set);
          if (set.cad.warnings.length) status(set.cad.warnings.join(' '), 12000);
          first ??= sheetKey(set.hash, 0);
          continue;
        }
        const set = await openPdf(ST.pdfjs, data, f.name, urls);
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
      ctx.rebuildSheets();
      if (resolved.length && ST.cur) { const k = ST.cur.key; ST.cur = ST.sheets.find((x) => x.key === k) || null; if (ST.cur) await ctx.showSheet(k); }
      if (resolved.length) status(t('cad.xref.resolved', { n: resolved.length, list: resolved.join(', ') }), 12000);
      if (first && (!ST.cur || !projects.length)) await ctx.showSheet(first);
      if (files.length) ui.hint.hidden = true;
    }
    for (const f of ifcs) await ctx.importIfcFile(f);
    if (rvts.length) await ST.modelUi?.openFile(rvts[0]);
    if (projects.length) await ctx.openProject(projects[0]);
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
    if (choice !== 'ok' || !(await ctx.confirmDiscard('open', { file: emb.file }))) return;
    const r = await ctx.loadProject(emb.takeoff);
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
      const found = ST.cadMod.matchXrefs(f.cad.model, cands);
      if (!found.size) continue;
      const next = ST.cadMod.withXrefs(f, found);
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
      if (sh.kind === 'model') map[key] = U.scaleRecord({ method: 'drawing', ftPerUnit: sc.ftPerUnit, label: t('cad.scale.units', { units: ST.cadMod.unitLabel(set.cad.units) }) });
      else {
        const pm = U.matchPreset(sc.ftPerUnit);
        map[key] = pm ? U.scaleRecord({ method: 'preset', preset: pm.key, ftPerUnit: U.presetFtPerUnit(pm.key), label: pm.label })
          : U.scaleRecord({ method: 'drawing', ftPerUnit: sc.ftPerUnit, label: t('cad.scale.viewport', { scale: U.describeScale(sc.ftPerUnit) }) });
      }
    }
    if (Object.keys(map).length) model.setScales(map, t('cad.scale.undo', { file: set.name }));
  }

  return { openFiles };
}
