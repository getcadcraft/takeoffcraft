/* SPDX-License-Identifier: Apache-2.0 */
/**
 * estimate-signoff-ui.js — the estimate's missing-rate flags, its sign-off by a person, and figures that select their marks
 * (0.10 BK.62, BK.142; session bk-r3-schedules-10). A thin adapter: the rules are model.js (flagNoRate, signOff, signoffHolds,
 * over tables/signoff.js, the record shared with the other apps).
 *
 *   - Quantities table: a line with a quantity and no rate carries "no rate"; the bar above the table counts them.
 *   - "Sign off the estimate": a person types their name (and role); the file then records who, when and what total. The
 *     sign-off is cleared by any change to a quantity, a rate or a line, and the bar says so. No assistant tool signs.
 *   - A figure of a line (quantity, with waste, material, labor, total) selects the marks it came from; the total row selects
 *     every mark on the sheet.
 *
 *   - "Copy for Google Sheets": the estimate on the clipboard as tab-separated text, to paste into a sheet. Nothing is sent to Google.
 *
 *   mountSignoff({ root, model, status, estimate(), selectMarks(itemId) → n, selectAll(), columns(), download(text, name, type) }) → { decorate(), api }
 *   estimateTsv(state, est, columns) → text
 */
import { el, icon } from './ui-util.js';
import { t } from './i18n.js';
import { formatCents } from './units.js';
import { missingRates } from './model.js';
import { estimateCsv } from './export.js';
import { parseCsv } from './library.js';

/** The estimate as tab-separated text, for pasting into a spreadsheet (0.10 BK.39 / BK.61): the same lines as the CSV export. */
export const estimateTsv = (state, est, columns = []) => parseCsv(estimateCsv(state, est, columns)).map((r) => r.map((c) => String(c ?? '').replace(/[\t\r\n]+/g, ' ')).join('\t')).join('\n') + '\n';

const NAME_KEY = 'takeoffcraft.signoff.name';
const remembered = () => { try { return JSON.parse(localStorage.getItem(NAME_KEY) || '{}') || {}; } catch (e) { return {}; } };
const remember = (v) => { try { localStorage.setItem(NAME_KEY, JSON.stringify(v)); } catch (e) { /* a private window: not remembered */ } };

export function mountSignoff({ root, model, status, estimate, selectMarks, selectAll, columns = () => [], download = null }) {
  const table = root.querySelector('[data-qty-table]'), total = root.querySelector('[data-job-total]');
  if (!table || !total) return null;
  const bar = el('div', { className: 'tc-signoff', dataset: { signoff: '' } });
  table.before(bar);
  let dlg = null;
  const when = (iso) => { try { return new Date(iso).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }); } catch (e) { return iso; } };

  function renderBar() {
    const est = estimate(), so = model.signoff(), miss = est.rows.filter((r) => r.noRate).length;
    const has = model.state.items.length > 0;
    bar.hidden = !has;
    if (!has) return;
    bar.dataset.state = so ? 'signed' : 'open';
    bar.replaceChildren(
      miss ? el('span', { className: 'tc-flag', dataset: { norateCount: String(miss) } }, t('signoff.norate.count', { n: miss })) : null,
      so ? el('span', { className: 'tc-signoff-text', dataset: { signoffBy: so.by } }, icon('patch-check'), ' ', t('signoff.line', { by: so.by + (so.role ? ', ' + so.role : ''), when: when(so.at), total: formatCents(so.total) }) + (so.missing ? ' ' + t('signoff.line.missing', { n: so.missing }) : ''))
        : el('span', { className: 'tc-signoff-text' }, t('signoff.none')),
      so ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { signoffClear: '' }, onclick: () => { model.clearSignoff(); status(t('signoff.removed')); } }, t('signoff.remove'))
        : el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { signoffOpen: '' }, onclick: open }, t('signoff.open')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { estSheets: '' }, title: t('x.sheets.title'), onclick: copySheets }, t('x.sheets.copy')));
  }
  let lastTsv = null;
  async function copySheets() {
    const text = estimateTsv(model.state, estimate(), columns());
    lastTsv = text;
    try { await navigator.clipboard.writeText(text); status(t('x.sheets.copied'), 9000); }
    catch (e) { if (download) { download(text, 'estimate.tsv', 'text/tab-separated-values'); status(t('x.sheets.file'), 9000); } }
  }

  function open() {
    const est = estimate(), miss = missingRates(est), last = remembered();
    const name = el('input', { type: 'text', className: 'tc-input', maxLength: 120, value: last.by || '', dataset: { signoffName: '' }, 'aria-label': t('signoff.name'), autocomplete: 'name' });
    const role = el('input', { type: 'text', className: 'tc-input', maxLength: 80, value: last.role || '', dataset: { signoffRole: '' }, 'aria-label': t('signoff.role'), autocomplete: 'organization-title' });
    const err = el('p', { className: 'tc-flag', role: 'alert', hidden: true, dataset: { signoffError: '' } });
    const sign = () => {
      const r = model.signOff({ by: name.value, role: role.value });
      if (!r.ok) { err.textContent = t('signoff.err.' + r.error); err.hidden = false; name.focus(); return; }
      remember({ by: r.signoff.by, role: r.signoff.role });
      status(t('signoff.done', { by: r.signoff.by, total: formatCents(r.signoff.total) }));
      dlg.close();
    };
    for (const i of [name, role]) i.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') sign(); });
    dlg = el('dialog', { className: 'tc-dialog', 'aria-labelledby': 'tc-signoff-h', dataset: { signoffDialog: '' } },
      el('div', { className: 'tc-dialog-head' }, el('h2', { className: 'tc-h', id: 'tc-signoff-h' }, t('signoff.h'))),
      el('div', { className: 'tc-learn-body' },
        el('p', {}, t('signoff.lead', { total: formatCents(est.total), n: est.rows.length })),
        est.incomplete ? el('p', { className: 'tc-flag', dataset: { signoffIncomplete: '' } }, t('signoff.incomplete')) : null,
        miss.length ? el('div', { className: 'tc-flag-note', dataset: { signoffMissing: String(miss.length) } }, el('p', {}, t('signoff.missing', { n: miss.length })),
          el('ul', {}, miss.slice(0, 12).map((m) => el('li', {}, m.name + ' (' + m.unit + ')')), miss.length > 12 ? el('li', {}, t('signoff.missing.more', { n: miss.length - 12 })) : null)) : null,
        el('label', { className: 'tc-field' }, el('span', {}, t('signoff.name')), name), el('label', { className: 'tc-field' }, el('span', {}, t('signoff.role')), role),
        el('p', { className: 'tc-learn-note' }, t('signoff.note')), err),
      el('div', { className: 'tc-dialog-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => dlg.close() }, t('btn.cancel')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { signoffSign: '' }, onclick: sign }, t('signoff.sign'))));
    dlg.addEventListener('close', () => { dlg.remove(); dlg = null; });
    root.append(dlg);
    dlg.showModal();
    name.focus();
  }

  /** After the Quantities table is drawn: the no-rate flags, and figures that select their marks. */
  function decorate() {
    renderBar();
    const est = estimate();
    const flagged = new Set(est.rows.filter((r) => r.noRate).map((r) => r.kind + ':' + r.itemId + ':' + (r.compId || r.cond || '')));
    for (const tr of table.querySelectorAll('tbody tr')) {
      const d = tr.dataset;
      const key = d.qtyRow ? 'item:' + d.qtyRow + ':' : d.qtyCond ? 'condition:' + d.qtyCond : d.qtyComp ? 'component:' + d.qtyComp : null;
      if (!key) continue;
      const itemId = d.qtyRow || (d.qtyCond || d.qtyComp).split(':')[0];
      if (flagged.has(key) && tr.firstElementChild && !tr.querySelector('[data-norate]')) tr.firstElementChild.append(el('span', { className: 'tc-flag', dataset: { norate: '' }, title: t('signoff.norate.title') }, t('signoff.norate')));
      [...tr.children].forEach((td, j) => {
        if (j === 0 || td.querySelector('input') || !td.textContent.trim() || td.dataset.fig) return;
        td.dataset.fig = itemId;
        td.title = t('signoff.fig.title');
        td.addEventListener('click', async (e) => { e.stopPropagation(); const n = await selectMarks(itemId); status(n ? t('signoff.fig.selected', { n }) : t('signoff.fig.none')); });
      });
    }
    const foot = table.querySelector('tfoot tr');
    if (foot) for (const td of [...foot.children].slice(1)) { if (!td.textContent.trim() || td.dataset.fig) continue; td.dataset.fig = '*'; td.title = t('signoff.fig.title'); td.addEventListener('click', () => { const n = selectAll(); status(n ? t('signoff.fig.selected', { n }) : t('signoff.fig.none')); }); }
  }
  model.on((why) => {
    if (why === 'change' && model.cleared) { status(t('signoff.cleared', { by: model.cleared.by }), 9000); model.cleared = null; }
    if (why === 'load') renderBar();
  });
  renderBar();
  return { decorate, api: { open, copySheets, tsv: () => lastTsv, state: () => ({ signoff: model.signoff(), missing: missingRates(estimate()).length }), dialog: () => dlg } };
}
