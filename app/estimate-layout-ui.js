/* SPDX-License-Identifier: Apache-2.0 */
/**
 * estimate-layout-ui.js — the Quantities tables in the office layout (0.10 BK.149; session bk-r3-schedules-10). After
 * takeoffcraft.js has drawn Quantities › By item or By sheet, this lays the same rows out as the office standard says
 * (estimate-layout.js over tables/table.js): group headings, the rows of each group (an item keeps its components, second
 * conditions and its wall-area note under it), a subtotal under each group, the heading case, a title. The rows themselves
 * (their boxes, clicks and flags) are the page's own, only moved. With no standard set nothing here touches the table.
 *
 *   layoutQtyTable({ table, mode: 'item' | 'sheet' | 'area', state, est, sheetRows, sheetLabel }) → the layout used | null
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { formatCents } from './units.js';
import { estimateLayout, sheetLayout } from './estimate-layout.js';

export function layoutQtyTable({ table, mode, state, est, sheetRows = [], sheetLabel = (k) => k }) {
  const host = table.parentElement;
  for (const old of host.querySelectorAll('[data-qty-title], [data-qty-standard]')) old.remove();
  if (mode !== 'item' && mode !== 'sheet') return null;   // By area states its own grouping: it keeps it
  const L = mode === 'item' ? estimateLayout(state, est) : sheetLayout(sheetRows, sheetLabel);
  if (!L.active) return L;
  const body = table.tBodies[0];
  if (!body) return L;
  const focus = document.activeElement && table.contains(document.activeElement) ? document.activeElement : null;
  // the page's rows, in the order it drew them: a row of the table, then the notes that belong to it
  const units = [];
  for (const tr of [...body.rows]) { if (tr.classList.contains('is-note') && units.length) units[units.length - 1].push(tr); else units.push([tr]); }
  const n = table.tHead ? table.tHead.rows[0].cells.length : 1;
  const want = mode === 'item' ? est.rows.length : sheetRows.length;
  if (units.length === want && L.plan.some((p) => p.kind !== 'row')) {
    const out = [];
    for (const p of L.plan) {
      if (p.kind === 'row') out.push(...units[p.index]);
      else if (p.kind === 'group') out.push(el('tr', { className: 'tc-lay-group', dataset: { layGroup: '' } }, el('th', { colSpan: n, scope: 'colgroup', className: 'tl' }, p.label)));
      else if (mode === 'item') out.push(el('tr', { className: 'tc-lay-sub', dataset: { laySubtotal: '' } }, el('td', { className: 'tl', colSpan: n - 3 }, p.label), el('td', {}, formatCents(p.sums.mat || 0)), el('td', {}, formatCents(p.sums.lab || 0)), el('td', {}, formatCents(p.sums.total || 0))));
      else out.push(el('tr', { className: 'tc-lay-sub', dataset: { laySubtotal: '' } }, el('td', { className: 'tl', colSpan: n - 1 }, p.label), el('td', {}, String(p.sums.marks ?? ''))));
    }
    body.replaceChildren(...out);
  }
  if (L.from.headings && table.tHead) for (const th of table.tHead.rows[0].cells) th.textContent = L.caseOf(th.textContent);
  const words = Object.keys(L.from).map((k) => t('lay.from.' + k.toLowerCase())).join(', ');
  table.before(...[L.title ? el('p', { className: 'tc-lay-title', dataset: { qtyTitle: '' } }, el('strong', {}, L.title)) : null, el('p', { className: 'tc-lay-note', dataset: { qtyStandard: Object.keys(L.from).join(' ') } }, t('lay.standard', { what: words }))].filter(Boolean));
  if (focus && focus.isConnected) focus.focus();
  return L;
}
