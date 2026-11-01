/* SPDX-License-Identifier: Apache-2.0 */
/**
 * carbon-ui.js — the page side of embodied carbon (0.8 EG.14) and the 5D price table (EG.17), TakeoffCraft's side (session takeoff_PART_3): the toolbar's
 * Carbon button and its dialog. The maths and the files are carbon.js (DOM-free). The person's factor rows and choices are kept in the takeoff's file
 * (optional key `carbon`); nothing is sent anywhere. Mounted by takeoffcraft.js: mountCarbon(ctx) → { open, drive }.
 */
import { el } from './ui-util.js';
import { calcCarbon, carbonCsv, tableOf, readCarbon, writeCarbon, emptyCarbon, MODULES, STARTER_LABEL, tableJson, readTableJson, tableCsv, readTableCsv, priceRows, priceTableJson, priceTableCsv, LIMIT } from './carbon.js';
import { safeName } from './ui-util.js';
import { t } from './i18n.js';

const num = (n) => String(Math.round(n * 100) / 100);

/** ctx: { root, model, status(text, ms), host, estimate() → the current estimate, setActive(id) } */
export function mountCarbon(ctx) {
  const { root, model } = ctx;
  const btn = root.querySelector('[data-act="carbon"]');
  btn?.addEventListener('click', () => open());
  const cur = () => model.state.carbon || null;
  const res = () => calcCarbon(ctx.estimate(), model.state.items, cur());
  const edit = (label, fn) => model.change(label, (s) => { const next = fn(s.carbon ? readCarbon(writeCarbon(s.carbon)) || emptyCarbon() : emptyCarbon()); const c = next && readCarbon(next); if (c) s.carbon = c; else delete s.carbon; });
  const badge = () => btn?.setAttribute('title', t('eg14.tool.title'));
  badge();
  model.on(() => { if (dlg?.open) render(); });

  let dlg = null, fileIn = null;
  function open() {
    if (!dlg) { dlg = el('dialog', { className: 'tc-dialog tc-learn', 'aria-labelledby': 'tc-carbon-h', dataset: { carbonDialog: '' } }); dlg.addEventListener('close', () => dlg.remove()); }
    render();
    if (!dlg.isConnected) root.append(dlg);
    if (!dlg.open) dlg.showModal();
  }
  const small = (label, on, data = {}, disabled = false) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: on, dataset: data, disabled }, label);
  const file = (name) => safeName(model.state.name || 'Takeoff') + ' - ' + name;

  async function importFactors(f) {
    let text;
    try { text = await f.text(); } catch { ctx.status(t('eg14.file.bad', { file: f.name }), 10000); return; }
    const r = /\.csv$/i.test(f.name) ? readTableCsv(text) : readTableJson(text);
    if (!r.rows.length) { ctx.status(t('eg14.file.none', { file: f.name, why: r.errors[0]?.code || 'empty' }), 12000); return; }
    edit(t('eg14.undo.import', { file: f.name }), (c) => { const rows = new Map(c.rows.map((x) => [x.id, x])); for (const x of r.rows.slice(0, LIMIT.rows)) rows.set(x.id, x); return { ...c, rows: [...rows.values()].slice(0, LIMIT.rows) }; });
    ctx.status(t('eg14.file.done', { n: r.rows.length, file: f.name }) + (r.errors.length ? ' ' + t('eg14.file.skipped', { n: r.errors.length }) : ''), 12000);
  }
  const mine = () => tableOf(cur()).filter((r) => r.origin !== 'starter');
  const prices = () => priceRows(ctx.estimate(), model.state.items);

  function render() {
    if (!dlg) return;
    const r = res(), c = cur(), rows = tableOf(c);
    fileIn ??= el('input', { type: 'file', accept: '.json,.csv,text/csv,application/json', hidden: true, dataset: { carbonFile: '' }, onchange: async (e) => { for (const f of [...e.target.files]) await importFactors(f); e.target.value = ''; } });
    const mods = el('div', { className: 'tc-learn-top', dataset: { carbonModules: '' } }, ...MODULES.map((m) => el('label', { className: 'tc-learn-field' }, el('input', { type: 'checkbox', checked: r.modules.includes(m), disabled: m === 'a1a3',
      onchange: (e) => edit(t('eg14.undo.modules'), (x) => ({ ...x, modules: MODULES.filter((k) => k === 'a1a3' || (k === m ? e.target.checked : x.modules.includes(k))) })) }), ' ' + t('eg14.mod.' + m))));
    const pickOf = (l) => (c?.pick?.[l.key] || '');
    const lines = r.lines.map((l) => {
      const sel = el('select', { className: 'tc-input', 'aria-label': t('eg14.factor.for', { name: l.name }), dataset: { carbonPick: l.key },
        onchange: (e) => edit(t('eg14.undo.pick', { name: l.name }), (x) => { const pick = { ...x.pick }; if (e.target.value) pick[l.key] = e.target.value; else delete pick[l.key]; return { ...x, pick }; }) },
        el('option', { value: '' }, t('eg14.auto', { row: l.auto ? l.row : '…' })), el('option', { value: 'none' }, t('eg14.none')), ...rows.map((x) => el('option', { value: x.id }, x.id + ' (' + x.basis + ')')));
      sel.value = pickOf(l) || '';
      return el('li', { className: 'tc-learn-row', dataset: { carbonRow: l.key } },
        el('div', { className: 'tc-learn-main' }, el('span', { className: 'tc-learn-name' }, l.name, ' ', el('strong', {}, t('eg14.kg', { kg: num(l.kg) }))),
          el('span', { className: 'tc-learn-sub' }, t('eg14.row', { qty: num(l.qtyW), unit: l.unit, row: l.row }) + (l.checked ? '' : ' ' + t('eg14.unchecked')))),
        el('div', { className: 'tc-learn-acts' }, sel, small(t('eg51.select'), () => { dlg.close(); ctx.setActive(l.itemId); }, { carbonSelect: l.key })));
    });
    const left = r.left.map((l) => el('li', { className: 'tc-learn-row', dataset: { carbonLeft: l.key, carbonWhy: l.why } },
      el('div', { className: 'tc-learn-main' }, el('span', { className: 'tc-learn-name' }, l.name), el('span', { className: 'tc-learn-sub' }, t('eg14.why.' + l.why, { need: l.need || '' }))),
      el('div', { className: 'tc-learn-acts' }, small(t('eg51.select'), () => { dlg.close(); ctx.setActive(l.itemId); }, { carbonSelect: l.key }))));
    const sec = (key, title, intro, list, empty) => el('section', { className: 'tc-learn-sec', dataset: { carbonSec: key } }, el('h3', { className: 'tc-learn-h3' }, title), intro ? el('p', { className: 'tc-learn-intro' }, intro) : null, list.length ? el('ul', { className: 'tc-learn-list' }, list) : el('p', { className: 'tc-learn-empty' }, empty));
    const pr = prices();
    dlg.replaceChildren(
      el('div', { className: 'tc-dialog-head' }, el('h2', { className: 'tc-h', id: 'tc-carbon-h' }, t('eg14.h'))),
      el('div', { className: 'tc-learn-body' },
        el('p', { className: 'tc-learn-lead' }, t('eg14.lead.text')),
        el('p', { className: 'tc-learn-note', role: 'note', dataset: { carbonStarter: '' } }, STARTER_LABEL),
        mods,
        el('div', { className: 'tc-learn-top' }, small(t('eg14.import'), () => fileIn.click(), { carbonImport: '' }), fileIn),
        el('p', { className: 'tc-learn-note', role: 'note', dataset: { carbonSummary: '' } }, r.lines.length ? t('eg14.summary', { kg: num(r.total), n: r.lines.length, left: r.left.length }) : t('eg14.summary.none')),
        sec('lines', t('eg14.lines.h'), '', lines, t('eg14.lines.empty')),
        sec('left', t('eg14.left.h'), t('eg14.left.intro'), left, t('eg14.left.empty'))),
      el('div', { className: 'tc-dialog-foot' },
        small(t('eg14.csv'), () => ctx.host.download('﻿' + carbonCsv(r, { head: [t('eg14.col.item'), t('eg14.col.qty'), t('eg14.col.unit'), t('eg14.col.factor'), t('eg14.col.kg')] }), file(t('eg14.file.carbon')) + '.csv', 'text/csv;charset=utf-8'), { carbonCsv: '' }, !r.lines.length),
        small(t('eg14.export'), () => ctx.host.download(tableJson(mine().length ? mine() : tableOf(null)), file(t('eg14.file.factors')) + '.json', 'application/json'), { carbonExport: '' }),
        small(t('eg17.json'), () => ctx.host.download(priceTableJson(pr.rows), file(t('eg17.file')) + '.json', 'application/json'), { priceJson: '' }, !pr.rows.length),
        small(t('eg17.csv'), () => ctx.host.download('﻿' + priceTableCsv(pr.rows), file(t('eg17.file')) + '.csv', 'text/csv;charset=utf-8'), { priceCsv: '' }, !pr.rows.length),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: () => dlg.close() }, t('btn.close'))));
  }

  /** What the assistant's tool reads (the same check). */
  const drive = {
    check: ({ limit = 100 } = {}) => {
      const r = res(), p = prices();
      return { totalKgCO2e: Math.round(r.total * 100) / 100, modules: r.modules, factorsNote: STARTER_LABEL, linesUsingUncheckedFactors: r.unchecked,
        lines: r.lines.slice(0, limit).map((l) => ({ item: l.name, quantity: Math.round(l.qtyW * 100) / 100, unit: l.unit, factor: l.row, basis: l.basis, kgCO2e: Math.round(l.kg * 100) / 100, chosenByPerson: !l.auto })),
        leftOut: r.left.slice(0, limit).map((l) => ({ item: l.name, why: l.why, needs: l.need || null })),
        priceTable: { rows: p.rows.length, skipped: p.skipped.length } };
    },
  };
  return { open, drive };
}
