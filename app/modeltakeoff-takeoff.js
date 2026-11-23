/* SPDX-License-Identifier: Apache-2.0 */
/**
 * modeltakeoff-takeoff.js — TakeoffCraft's side of model takeoff (0.11 MT.1, MT.2). The reader, the rows and the panel are the shared lib's
 * (modeltakeoff/, canonical in lib/modeltakeoff: `node tools/modeltakeoff/sync.mjs takeoffcraft`); this file opens the file, shows the panel in
 * a dialog and hands the picked quantities to the takeoff's own import (fixedqty.js: typed quantities, one undo step; a newer copy of the model
 * under the same model name updates them). Nothing is sent anywhere: the model is read on this computer.
 *
 *   IFC (IFC2X3, IFC4, IFC4X3)  read by cc-ifc (./ifc/), every build.
 *   .rvt                        LAB ONLY (MT.2): ui.inc hands the pinned reader over as data-rvt-model in the lab; the file is converted to IFC4
 *                               in a worker by the `rvt` library BimCraft's preview uses (rvt-convert.js, a byte-identical copy of BimCraft's;
 *                               docs/spikes/rvt-preview.md) and then read like any IFC. Projects saved in 2023 to 2026 only; it can miss elements,
 *                               and the panel says so. Without the lab switch the status line asks for an IFC export.
 *
 *   mountModelTakeoff({ root, model, status(text, ms), busy(text | null), importFile(json, name), units() → 'imperial' | 'metric' })
 *     → { open(), openFile(file) → Promise<bool>, drive: { state(), panel() } }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';

export const MODEL_APP = 'Model';                      // i18n-ignore: the origin label kept on each quantity
export const MODEL_RE = /\.(ifc|rvt)$/i;               // i18n-ignore: file name extensions

const sizeLabel = (n) => (n >= 1048576 ? (n / 1048576).toFixed(n >= 10485760 ? 0 : 1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' kB');   // i18n-ignore: unit symbols

export function mountModelTakeoff(ctx) {
  const { root, model } = ctx;
  const fileIn = root.querySelector('[data-file-model]');
  let dlg = null, panel = null, last = null;
  root.querySelector('[data-act="model-takeoff"]')?.addEventListener('click', () => open());
  fileIn?.addEventListener('change', async (e) => { const f = e.target.files[0]; e.target.value = ''; if (f) await openFile(f); });

  /** The button: back to the model that is still read, else pick a file. */
  function open() {
    if (last && dlg) { show(); return; }
    fileIn?.click();
  }

  async function rvtToIfc(file) {
    const libPath = root.dataset.rvtModel;
    if (!libPath) { ctx.status(t('mt.rvt.off', { file: file.name }), 15000); return null; }
    const [{ readRevit }, { previewSupport, convertRevit }] = await Promise.all([import('./rvt-reader.js'), import('./rvt-convert.js')]);
    let info = null;
    try { info = await readRevit(file, file.name, { partial: true }); } catch (e) { ctx.status(t('mt.rvt.failed', { file: file.name, error: String(e?.message || e) }), 15000); return null; }
    const sup = previewSupport(info, file.name);
    if (!sup.ok) { ctx.status(t('mt.rvt.why.' + sup.why, { file: file.name, release: sup.release || '' }), 15000); return null; }
    ctx.busy(t('mt.busy.rvt.load'));
    let out;
    try {
      out = await convertRevit(new Uint8Array(await file.arrayBuffer()), {
        libUrl: new URL(libPath, location.href).href, convertUrl: import.meta.resolve('./rvt-convert.js'), workerUrl: import.meta.resolve('./rvt-convert-worker.js'),
        onPhase: (p) => ctx.busy(p === 'loading' ? t('mt.busy.rvt.load') : t('mt.busy.rvt.convert', { file: file.name, size: sizeLabel(file.size) })),
      });
    } catch (e) { ctx.status(t('mt.rvt.failed', { file: file.name, error: String(e?.message || e) }), 15000); return null; }
    if (!out.summary.elements) { ctx.status(t('mt.rvt.empty', { file: file.name }), 15000); return null; }
    return { bytes: out.ifc, source: { kind: 'rvt', release: out.summary.release || sup.release, boxes: out.summary.boxes, fabric: out.summary.fabric, elements: out.summary.elements, summary: out.summary } };
  }

  /** Read a model file and show the panel. → true when the panel opened. */
  async function openFile(file) {
    const isRvt = /\.rvt$/i.test(file.name);
    ctx.busy(t('mt.busy.read', { file: file.name }));
    try {
      let bytes, source = null;
      if (isRvt) {
        const r = await rvtToIfc(file);
        if (!r) return false;
        bytes = r.bytes; source = r.source;
      } else bytes = new Uint8Array(await file.arrayBuffer());
      ctx.busy(t('mt.busy.read', { file: file.name }));
      const [WebIFC, { openIfcAsync }, { readModel }] = await Promise.all([import('./ifc/api.js'), import('./ifc/open-async.js'), import('./modeltakeoff/read.js')]);
      let read;
      try {
        read = await readModel(WebIFC, bytes, { openAsync: openIfcAsync, transfer: true, onProgress: (done, total) => ctx.busy(t('mt.busy.measure', { file: file.name, done, total })) });
      } catch (e) { ctx.status(t('mt.err.read', { file: file.name, error: String(e?.message || e) }), 15000); return false; }
      if (!read.elements.length) { ctx.status(t('mt.err.empty', { file: file.name }), 12000); return false; }
      last = { file: file.name, read, source };
      window.takeoffcraftModel = { file: file.name, elements: read.elements.length, spaces: read.spaces, tris: read.tris, source };   // for tests
      panel = null;
      show();
      return true;
    } finally { ctx.busy(null); }
  }

  function show() {
    if (!dlg) {
      dlg = el('dialog', { className: 'tc-dialog tc-learn tc-mt', 'aria-labelledby': 'tc-mt-h', dataset: { modelDialog: '' } });
      dlg.addEventListener('close', () => dlg.remove());
    }
    const body = el('div', { className: 'tc-learn-body', dataset: { modelBody: '' } });
    dlg.replaceChildren(el('div', { className: 'tc-dialog-head' }, el('h2', { className: 'tc-h', id: 'tc-mt-h' }, t('mt.h')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { modelOther: '' }, onclick: () => fileIn?.click() }, t('mt.other'))), body);
    if (!dlg.isConnected) root.append(dlg);
    import('./modeltakeoff/panel.js').then(({ mountModelPanel }) => {
      panel = mountModelPanel(body, {
        t, model: last.read, fileName: last.file, source: last.source, booleans: last.read.booleans, units: ctx.units?.() || 'imperial', app: MODEL_APP,
        names: () => model.state.items.filter((it) => it.type === 'fixed' && it.origin?.app === MODEL_APP).map((it) => it.origin.project),
        existing: () => model.state.items.filter((it) => it.type === 'fixed' && it.origin).map((it) => ({ name: it.name, unit: it.unit, qty: it.qty, origin: it.origin })),
        add: (file) => ctx.importFile(file, last.file),
        close: () => dlg.close(),
        cls: { button: 'btn-line btn-sm-cc', primary: 'btn-plot btn-sm-cc', input: 'tc-input', table: 'tc-table', note: 'tc-learn-note' },
        locale: document.documentElement.lang || undefined,
      });
    });
    if (!dlg.open) dlg.showModal();
  }

  return { open, openFile, drive: { state: () => (last ? { file: last.file, elements: last.read.elements.length, source: last.source } : null), panel: () => panel, read: () => last?.read || null } };
}
