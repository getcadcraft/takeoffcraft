/* SPDX-License-Identifier: Apache-2.0 */
/**
 * qty-ui.js: takeoffcraft.js's 11 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountQty(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import * as U from './units.js';
import { layoutQtyTable } from './estimate-layout-ui.js';
import { sheetBreakdown, TYPE_LABELS, wallArea, methodNote } from './model.js';
import { el, safeName, frame } from './ui-util.js';
import { divisionTitle, estimateXlsx, estimateCsv, materialList, materialCsv, spotElevationsCsv } from './export.js';
import { columnsNow } from './addons/takeoffcraft-api.js';
import { pdfWithMarks } from './pdfmarks.js';
import { embedTakeoff } from './embed.js';

export function mountQty(ctx) {
  const { ST, ui, model, files, isCad, app, status, busy, settings, ftIn, areaShow, sheetLabel, showSheet, host, pageSizeRows, setActive, focusItem, keepFocus, buildAreaTable, root } = ctx;

  for (const b of root.querySelectorAll('[data-qty-mode]')) b.addEventListener('click', () => {
    app.qtyMode = b.dataset.qtyMode;
    for (const x of root.querySelectorAll('[data-qty-mode]')) x.setAttribute('aria-selected', String(x === b));
    renderQty();
  });
  // 0.11 UI.17 (owner 2026-11-21): the person's open / closed choice is kept (tc-qty); with no choice yet the table starts closed on a
  // window under 900 px tall, so the drawing keeps its height. The header and its total stay; one click opens it.
  const QTY_KEY = 'tc-qty';
  ST.qtyPick = null;
  try { ST.qtyPick = localStorage.getItem(QTY_KEY); } catch (e) { /* private window */ }
  ST.qtyAuto = ST.qtyPick !== 'open' && ST.qtyPick !== 'closed';   // no choice yet: follow the window height until the person (or code) opens or closes it
  const qtySet = (closed) => { root.classList.toggle('is-qty-closed', closed); ui.qtyToggle.setAttribute('aria-expanded', String(!closed)); };
  if (ST.qtyPick === 'closed' || (ST.qtyAuto && window.innerHeight < 900)) qtySet(true);
  if (ST.qtyAuto) window.addEventListener('resize', () => { if (ST.qtyAuto) qtySet(window.innerHeight < 900); });
  ui.qtyToggle.addEventListener('click', () => {
    const closed = root.classList.toggle('is-qty-closed');
    ui.qtyToggle.setAttribute('aria-expanded', String(!closed));
    ST.qtyAuto = false;
    try { localStorage.setItem(QTY_KEY, closed ? 'closed' : 'open'); } catch (e) { /* private window */ }
  });

  function renderQty() {
    const warn = [];
    if (ST.est.errors) warn.push(t('qty.warn.errors', { n: ST.est.errors }));
    if (ST.est.unscaled) warn.push(t('qty.warn.unscaled', { n: ST.est.unscaled }));
    ui.qtyWarn.textContent = warn.length ? t('qty.warn', { list: warn.join(', ') }) : '';
    ui.jobTotal.textContent = model.state.items.length ? t((model.state.areas || []).some((a) => a.alt) ? 'qty.total.base' : 'qty.total', { total: U.formatCents(ST.est.total) }) + (ST.est.hours > 0 ? ' · ' + t('crew.total', { wh: U.fixed(ST.est.workerHours, 1), days: U.fixed(ST.est.days, 1) }) : '') : '';
    keepFocus(ui.qtyTable, () => (app.qtyMode === 'sheet' ? buildSheetTable() : app.qtyMode === 'area' ? buildAreaTable() : buildItemTable()));
    ST.signoffUi?.decorate();   // 0.10 BK.62 / BK.142: no-rate flags, the sign-off bar, figures that select their marks
    layoutQtyTable({ table: ui.qtyTable, mode: app.qtyMode, state: model.state, est: ST.est, sheetRows: app.qtyMode === 'sheet' ? sheetBreakdown(model.state, ST.qmap) : [], sheetLabel });   // 0.10 BK.149: after the flags, so moved rows keep them
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
    const body = ST.est.rows.map((r) => {
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
      const tq = isItem && !r.error && it.type === 'linear' && it.heightFt > 0 ? ST.qmap.get(r.itemId) : null;
      if (tq && tq.lengthFt > 0) return [tr, el('tr', { className: 'is-note', dataset: { qtyWall: r.itemId } }, el('td', { colSpan: 10, className: 'tl' }, (tq.openSqft > 0 ? t('qty.wall.notenet', { item: r.name, area: areaShow(wallArea(it, tq).net, it), gross: areaShow(wallArea(it, tq).gross, it), ded: areaShow(wallArea(it, tq).deductions, it), h: ftIn(it.heightFt) }) : t('qty.wall.note', { item: r.name, area: areaShow(wallArea(it, tq).net, it), h: ftIn(it.heightFt) })) + (tq.juncSqft > 0 ? ' ' + t('qty.wall.junc', { area: areaShow(tq.juncSqft, it) }) : '') + (methodNote(model.state) ? ' ' + methodNote(model.state) : '')))];
      return tr;
    }).flat();
    const foot = model.state.items.length ? el('tfoot', {}, el('tr', {}, el('td', {}, t('x.total')), el('td', { colSpan: 6 }), el('td', {}, U.formatCents(ST.est.matTotal)), el('td', {}, U.formatCents(ST.est.labTotal)), el('td', {}, U.formatCents(ST.est.total)))) : null;
    ui.qtyTable.replaceChildren(el('thead', {}, el('tr', {}, head.map((h) => el('th', { scope: 'col' }, h)))),
      el('tbody', {}, body.length ? body : el('tr', {}, el('td', { colSpan: head.length, className: 'tl' }, t('qty.empty.items')))), ...(foot ? [foot] : []));
  }

  function buildSheetTable() {
    const rows = sheetBreakdown(model.state, ST.qmap);
    const items = new Map(model.state.items.map((i) => [i.id, i]));
    const body = rows.map((r) => {
      const it = items.get(r.itemId);
      const tr = el('tr', { className: 'is-item' + (app.hl === r.itemId ? ' is-hl' : ''), dataset: { qtyRow: r.itemId } },
        el('td', {}, sheetLabel(r.sheet)), el('td', { className: 'tl' }, el('span', { className: 'tc-chip', style: { background: it.color } }), r.cond ? t('qty.cond.name', { item: r.name, type: TYPE_LABELS[r.cond].toLowerCase() }) : r.name),
        el('td', {}, U.fixed(r.qty, (r.cond || it.type) === 'count' ? 0 : 2)), el('td', { className: 'tl' }, r.unit), el('td', {}, String(r.marks)));
      tr.addEventListener('click', () => { setActive(r.itemId); if (r.sheet !== ST.cur?.key) showSheet(r.sheet); });
      return tr;
    });
    ui.qtyTable.replaceChildren(el('thead', {}, el('tr', {}, ['sheet', 'item', 'qty', 'unit', 'marks'].map((k) => el('th', { scope: 'col' }, t('x.head.' + k))))),
      el('tbody', {}, body.length ? body : el('tr', {}, el('td', { colSpan: 5, className: 'tl' }, t('qty.empty.sheets')))));
  }

  async function exportXlsx() {
    if (!model.state.items.length) { status(t('export.empty')); return; }
    const bytesOut = await estimateXlsx(model.state, sheetLabel, { columns: columnsNow(), pageSizes: pageSizeRows() });
    host.download(bytesOut, safeName(model.state.name) + '.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    status(t('export.xlsx', { file: safeName(model.state.name) + '.xlsx' }) + (ST.est.incomplete ? ' ' + t('export.incomplete') : ''), 9000);
  }
  function exportCsv() {
    if (!model.state.items.length) { status(t('export.empty')); return; }
    host.download('\uFEFF' + estimateCsv(model.state, ST.est, columnsNow()), safeName(model.state.name) + '.csv', 'text/csv;charset=utf-8');   // BOM: spreadsheets read m² right
    status(t('export.csv', { file: safeName(model.state.name) + '.csv' }));
  }
  function exportMaterials() {                      // TK.4: the material list, every assembly part added up
    if (!materialList(model.state, ST.est).length) { status(t('mat.empty')); return; }
    const file = safeName(t('mat.file', { name: model.state.name || 'Takeoff' })) + '.csv';
    host.download('\uFEFF' + materialCsv(model.state, ST.est), file, 'text/csv;charset=utf-8');
    status(t('mat.done', { file }));
  }
  function exportSpots() {                          // TK.5: the open sheet's spot elevations, as a point file CivilCraft opens
    if (!ST.cur) { status(t('spots.nosheet')); return; }
    const r = spotElevationsCsv(model.state, ST.cur.key, sheetLabel);
    if (!r.ok) { status(r.why, 9000); return; }
    const file = safeName(t('spots.file', { sheet: sheetLabel(ST.cur.key) })) + '.csv';
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

  return { qtySet, renderQty, exportXlsx, exportCsv, exportMaterials, exportSpots, exportPdf, exportEmbed };
}
