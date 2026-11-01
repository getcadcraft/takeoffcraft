/* SPDX-License-Identifier: Apache-2.0 */
/**
 * supply-ui.js — the page side of supplier stock and lead-time files (0.8 EG.51, session takeoff_PART_2): the toolbar's Supply button and its
 * dialog, and the Problems source (the shell's ⚠ panel). The file reading and the checks are supply.js (DOM-free). The supplier rows that matter
 * are kept in the takeoff's file (optional key `supply`); nothing is sent anywhere and the page never asks a supplier anything.
 * Mounted by takeoffcraft.js: mountSupply(ctx) → { open, drive }.
 */

import { el, icon } from './ui-util.js';
import { readSupplyCsv, readSupplyRows, addSource, check, problemsOf, emptySupply, readSupply, writeSupply, libraryPrices } from './supply.js';
import { readXlsxRows } from './xlsx-read.js';   // 0.8 takeoff_PART_3: Excel supplier files
import { csvLine } from './export.js';
import { formatRate } from './units.js';
import { t } from './i18n.js';

const num = (n) => String(Math.round(n * 100) / 100);

/** ctx: { root, model, status(text, ms), host, estimate() → the current estimate, setActive(id), modKey, library: { load() → entries, save(entries) → bool } } */
export function mountSupply(ctx) {
  const { root, model } = ctx;
  const sup = () => model.state.supply || null;
  const btn = root.querySelector('[data-act="supply"]');
  btn?.addEventListener('click', () => open());
  const res = () => check(ctx.estimate(), sup());
  const edit = (label, fn) => model.change(label, (s) => { const next = fn(s.supply ? readSupply(writeSupply(s.supply)) || emptySupply() : emptySupply()); if (next && (next.sources.length || next.ignore.length)) s.supply = next; else delete s.supply; });
  const badge = () => { const r = sup() ? res() : null, bad = r ? r.rows.filter((x) => x.status === 'short' || x.status === 'late').length : 0; btn?.setAttribute('title', t('eg51.tool.title') + (bad ? ' ' + t('eg51.tool.bad', { n: bad }) : '')); };
  badge();

  // ---- the Problems source (rule 29): a stock shortage is a warning, a long wait a note ----
  // Registered only once the takeoff has a supplier file: a registered source puts the shell's ⚠ button in the app bar, which a person who never
  // uses Supply should not pay for (the bar is tight at phone widths).
  let src = null;
  const wire = () => {
    if (src || !sup() || !document.getElementById('cc-problems')) return;
    const go = () => {
      const P = window.ccProblems;
      if (!P || src) return;
      src = P.source({ id: 'takeoffcraft.supply', kind: 'check', label: t('eg51.prob.src'), run: () => (sup() ? problemsOf(res(), { t, fmt: num }) : []), fix: () => false });
      const loadAcc = () => P.store.loadAccepted(model.state.problems?.accepted || []);
      model.on(() => { loadAcc(); src.invalidate(); });
      P.adapter({ t, file: () => model.state.name, select: (p) => { const r = p.about?.[0]; if (r?.kind === 'item' && model.item(r.id)) ctx.setActive(r.id); }, focus: () => {},
        saveAccepted: (list) => { model.change(t('eg51.prob.accept'), (s) => { if (list.length) s.problems = { accepted: list }; else delete s.problems; }); } });
      if (ctx.control) window.ccProblems?.registerTools?.(ctx.control);   // the Problems tools for assistants (problems-08's mount line)
      loadAcc(); src.recheck();
    };
    if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true });
  };
  wire();
  model.on(() => { wire(); badge(); if (dlg?.open) render(); });

  // ---- the dialog ----
  let dlg = null, fileIn = null;
  function open() {
    if (!dlg) { dlg = el('dialog', { className: 'tc-dialog tc-learn', 'aria-labelledby': 'tc-supply-h', dataset: { supplyDialog: '' } }); dlg.addEventListener('close', () => dlg.remove()); }
    render();
    if (!dlg.isConnected) root.append(dlg);
    if (!dlg.open) dlg.showModal();
  }
  const small = (label, on, data = {}, disabled = false) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: on, dataset: data, disabled }, label);

  async function addFile(file) {
    let r;
    try {
      if (/\.xlsx$/i.test(file.name)) {
        const x = await readXlsxRows(new Uint8Array(await file.arrayBuffer()));
        if (!x.ok) { ctx.status(t('eg51.file.err', { file: file.name, why: t('eg51.xlsx.' + x.code) }), 12000); return; }
        r = readSupplyRows(x.rows);
      } else r = readSupplyCsv(await file.text());
    } catch { ctx.status(t('eg51.file.bad', { file: file.name }), 10000); return; }
    if (!r.ok) { ctx.status(t('eg51.file.err', { file: file.name, why: r.error }), 12000); return; }
    let info;
    edit(t('eg51.undo.add', { file: file.name }), (s) => { const o = addSource(s, { name: file.name, at: new Date().toISOString(), rows: r.rows }, ctx.estimate()); info = o; return o.supply; });
    ctx.status(t('eg51.file.done', { n: r.rows.length, file: file.name, matched: info.matched }) + (info.dropped ? ' ' + t('eg51.file.dropped', { n: info.dropped }) : '') + (r.warnings.length ? ' ' + r.warnings[0] : ''), 12000);
    render();
  }
  function orderCsv() {
    const rows = res().rows.filter((x) => x.status === 'short');
    const lines = [csvLine([t('eg51.col.item'), t('eg51.col.need'), t('eg51.col.stock'), t('eg51.col.short'), t('eg51.col.unit'), t('eg51.col.supplier'), t('eg51.col.lead'), t('eg51.col.price')])];
    for (const x of rows) lines.push(csvLine([x.name, num(x.need), x.stock === null ? '' : num(x.stock), num(x.short), x.unit, x.supplier || '', x.lead === null ? '' : num(x.lead), x.price === null ? '' : formatRate(x.price)]));
    ctx.host.download('﻿' + lines.join('\r\n') + '\r\n', t('eg51.order.file') + '.csv', 'text/csv;charset=utf-8');
  }

  /** Supplier prices into the price Library (library.js entries): the material rate of each entry the file prices; a plain summary says what moved. */
  function toLibrary() {
    const lib = ctx.library?.load() || [];
    if (!lib.length) { ctx.status(t('eg51.lib.empty'), 9000); return null; }
    const r = libraryPrices(lib, sup());
    if (r.updated.length && !ctx.library.save(r.lib)) { ctx.status(t('eg51.lib.nosave'), 9000); return null; }
    const unit = r.skipped.filter((x) => x.why === 'unit').length;
    ctx.status(r.updated.length ? t('eg51.lib.done', { n: r.updated.length, of: lib.length }) + (unit ? ' ' + t('eg51.lib.unit', { n: unit }) : '') : t('eg51.lib.none'), 12000);
    return r;
  }

  function render() {
    if (!dlg) return;
    const s = sup(), r = s ? res() : { rows: [], unmatched: [], critical: null, leadDays: 14 };
    const order = { short: 0, late: 1, unknown: 2, unit: 3, ok: 4 };
    const rows = r.rows.slice().sort((a, b) => order[a.status] - order[b.status] || a.name.localeCompare(b.name));
    fileIn ??= el('input', { type: 'file', accept: '.csv,.txt,.xlsx,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', hidden: true, dataset: { supplyFile: '' }, onchange: async (e) => { for (const f of [...e.target.files]) await addFile(f); e.target.value = ''; } });
    const lead = el('input', { className: 'tc-input', type: 'number', min: '0', max: '3650', step: '1', value: String(s?.leadDays ?? 14), 'aria-label': t('eg51.lead'), dataset: { supplyLead: '' }, style: { width: '6rem' },
      onchange: (e) => { const v = Math.max(0, Math.min(3650, Math.round(Number(e.target.value) || 0))); edit(t('eg51.undo.lead', { n: v }), (x) => ({ ...x, leadDays: v })); } });
    const summary = !s ? t('eg51.none') : t('eg51.summary', { short: r.rows.filter((x) => x.status === 'short').length, late: r.rows.filter((x) => x.status === 'late').length, ok: r.rows.filter((x) => x.status === 'ok').length, un: r.unmatched.length }) +
      (r.critical ? ' ' + t('eg51.critical', { name: r.critical.name, days: num(r.critical.lead) }) : '');
    const word = (x) => (x.status === 'short' ? t('eg51.st.short', { short: num(x.short), unit: x.unit }) : x.status === 'late' ? (x.backorder ? t('eg51.st.back') : t('eg51.st.late', { days: num(x.lead) })) : x.status === 'unit' ? t('eg51.st.unit', { was: x.row.unit || '?', is: x.unit }) : x.status === 'unknown' ? t('eg51.st.unknown') : t('eg51.st.ok'));
    const items = rows.map((x) => el('li', { className: 'tc-learn-row', dataset: { supplyRow: x.id, supplyStatus: x.status } },
      el('div', { className: 'tc-learn-main' }, el('span', { className: 'tc-learn-name' }, x.name, ' ', el('strong', {}, word(x))),
        el('span', { className: 'tc-learn-sub' }, [t('eg51.row', { need: num(x.need), unit: x.unit, stock: x.stock === null ? (x.row.inStock ? t('eg51.instock') : '?') : num(x.stock) }), x.lead !== null ? t('eg51.row.lead', { days: num(x.lead) }) : '', x.supplier || '', x.exact ? '' : t('eg51.similar', { name: x.row.name })].filter(Boolean).join(' '))),
      el('div', { className: 'tc-learn-acts' }, small(t('eg51.select'), () => { dlg.close(); ctx.setActive(x.itemId); }, { supplySelect: x.id }), small(t('eg51.leave'), () => edit(t('eg51.undo.leave', { name: x.name }), (z) => ({ ...z, ignore: [...z.ignore, x.id] })), { supplyLeave: x.id }))));
    const srcRows = (s?.sources || []).map((x) => el('li', { className: 'tc-learn-row', dataset: { supplySource: x.name } },
      el('div', { className: 'tc-learn-main' }, el('span', { className: 'tc-learn-name' }, x.name), el('span', { className: 'tc-learn-sub' }, t('eg51.source.sub', { n: x.rows.length, date: (x.at || '').slice(0, 10) }))),
      el('div', { className: 'tc-learn-acts' }, el('button', { type: 'button', className: 'tc-iconbtn', title: t('eg51.source.remove', { file: x.name }), 'aria-label': t('eg51.source.remove', { file: x.name }), dataset: { supplyRemove: x.name }, onclick: () => edit(t('eg51.undo.remove', { file: x.name }), (z) => ({ ...z, sources: z.sources.filter((q) => q.name !== x.name) })) }, icon('trash')))));
    const sec = (key, title, intro, list, empty, extra = null) => el('section', { className: 'tc-learn-sec', dataset: { supplySec: key } }, el('h3', { className: 'tc-learn-h3' }, title), intro ? el('p', { className: 'tc-learn-intro' }, intro) : null, extra, list.length ? el('ul', { className: 'tc-learn-list' }, list) : el('p', { className: 'tc-learn-empty' }, empty));
    dlg.replaceChildren(
      el('div', { className: 'tc-dialog-head' }, el('h2', { className: 'tc-h', id: 'tc-supply-h' }, t('eg51.h'))),
      el('div', { className: 'tc-learn-body' },
        el('p', { className: 'tc-learn-lead' }, t('eg51.lead.text')),
        el('div', { className: 'tc-learn-top' }, small(t('eg51.add'), () => fileIn.click(), { supplyAdd: '' }), fileIn, el('label', { className: 'tc-learn-field' }, t('eg51.lead'), lead)),
        el('p', { className: 'tc-learn-note', role: 'note', dataset: { supplySummary: '' } }, summary),
        sec('needs', t('eg51.needs.h'), t('eg51.needs.intro'), items, s ? t('eg51.needs.empty') : t('eg51.none')),
        sec('files', t('eg51.files.h'), t('eg51.files.intro'), srcRows, t('eg51.files.empty'))),
      el('div', { className: 'tc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { supplyLibrary: '' }, title: t('eg51.lib.title'), disabled: !(s && s.sources.some((q) => q.rows.some((x) => x.price !== null))) || !ctx.library, onclick: () => toLibrary() }, t('eg51.lib')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { supplyOrder: '' }, disabled: !rows.some((x) => x.status === 'short'), onclick: () => orderCsv() }, t('eg51.order')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: () => dlg.close() }, t('btn.close'))));
  }

  /** What the assistant's tool reads (the same check). */
  const drive = {
    check: () => { const s = sup(); if (!s) return null; const r = res(); return { leadDays: r.leadDays, critical: r.critical && { name: r.critical.name, days: r.critical.lead }, rows: r.rows.map((x) => ({ id: x.id, name: x.name, unit: x.unit, need: Math.round(x.need * 100) / 100, status: x.status, stock: x.stock, short: x.short ?? 0, leadDays: x.lead, backorder: x.backorder, supplier: x.supplier, exact: x.exact, matchedTo: x.row.name })), unmatched: r.unmatched.length, files: s.sources.map((q) => ({ name: q.name, rows: q.rows.length })) }; },
  };
  return { open, drive, toLibrary, addFile };
}
