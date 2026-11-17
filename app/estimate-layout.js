/* SPDX-License-Identifier: Apache-2.0 */
/**
 * estimate-layout.js — TakeoffCraft's tables in the office layout (0.10 BK.149; session bk-r3-schedules-10). No DOM:
 * tools/takeoffcraft-test/layout-test.mjs runs it in Node. A thin adapter over tables/table.js, the ONE layout engine (shared
 * with BimCraft's schedules), and defaults-hook.js scheduleStandard(), the ONE reading of the office standard (the four
 * all.schedule.* policies of the Default Policies add-on, kept in one store for every app on the computer).
 *
 * What takes the standard: the estimate (Quantities › By item, the CSV and XLSX exports, takeoff_estimate) and the quantities
 * by sheet (Quantities › By sheet, takeoff_quantities by sheet). What keeps its own: Quantities › By area states its own
 * grouping (by bid area); the job total always stays (the estimate is its total); the markups and alternates are not regrouped.
 *
 *   The standard's "type" groups the estimate by item type (Linear, Area, Count, Typed quantity; a component or second condition
 *   stays under its item; a package given to a subcontractor is its own group). Its "level" groups the quantities by sheet by
 *   their sheet. A grouping the table has no column for (room; level for the estimate) is left out, as in BimCraft.
 *
 *   estimateTable(state, est) / sheetTable(rows, sheetLabel)   → a table of tables/table.js (ids = the row's index in est.rows / rows)
 *   layOut(table, layout = {}, standard = scheduleStandard()) → { laid, from, active, plan, title, caseOf(text) }
 *       plan = [{ kind: 'group', label } | { kind: 'row', index } | { kind: 'subtotal', label, count, sums: { col id: number } }]
 *       active = the standard changed something (false = the table exactly as it always was: plan is the rows in order)
 *   estimateLayout(state, est) · sheetLayout(rows, sheetLabel)   the two above in one call
 *   layoutAnswer(L, sumKeys) → what the assistant tools add to their answer, or null when nothing is set
 */
import { withStandard, applyLayout, headingCase } from './tables/table.js';
import { scheduleStandard } from './defaults-hook.js';
import { TYPES, TYPE_LABELS } from './model.js';
import { formatCents } from './units.js';
import { t } from './i18n.js';

export const officeStandard = () => scheduleStandard();

export function estimateTable(state, est) {
  const typeOf = new Map(state.items.map((i) => [i.id, i.type]));
  const group = (r) => (r.kind === 'subcontract' ? t('x.sub') : TYPE_LABELS[typeOf.get(r.itemId)] || TYPE_LABELS[r.type] || '');
  const cents = (r, k) => (r.error || typeof r[k] !== 'number' ? null : r[k]);
  return {
    key: 'estimate', title: t('lay.estimate'),
    head: [t('x.head.item'), t('x.head.type'), t('x.head.mat'), t('x.head.lab'), t('x.head.total')],
    cols: [{ id: 'item', kind: 'text' }, { id: 'type', kind: 'text', role: 'type', order: [...TYPES.map((k) => TYPE_LABELS[k]), t('x.sub')] }, { id: 'mat', kind: 'money' }, { id: 'lab', kind: 'money' }, { id: 'total', kind: 'money' }],
    rows: est.rows.map((r) => [r.name, group(r), r.error ? '' : formatCents(r.matExt || 0), r.error ? '' : formatCents(r.labExt || 0), r.error ? '' : formatCents(r.total || 0)]),
    vals: est.rows.map((r) => [null, null, cents(r, 'matExt'), cents(r, 'labExt'), cents(r, 'total')]),
    ids: est.rows.map((_, i) => [i]), total: null, note: '',
  };
}
export function sheetTable(rows, sheetLabel = (k) => k) {
  return {
    key: 'sheets', title: t('lay.sheets'),
    head: ['sheet', 'item', 'qty', 'unit', 'marks'].map((k) => t('x.head.' + k)),
    cols: [{ id: 'sheet', kind: 'text', role: 'level', order: [...new Set(rows.map((r) => sheetLabel(r.sheet)))] }, { id: 'item', kind: 'text' }, { id: 'qty', kind: 'number' }, { id: 'unit', kind: 'text' }, { id: 'marks', kind: 'count' }],
    rows: rows.map((r) => [sheetLabel(r.sheet), r.name, String(r.qty), r.unit, String(r.marks)]),
    vals: rows.map((r) => [null, null, r.qty, null, r.marks]),
    ids: rows.map((_, i) => [i]), total: null, note: '',
  };
}
export function layOut(table, layout = {}, standard = scheduleStandard()) {
  const s = withStandard(layout, standard, table);
  const laid = applyLayout(table, s.layout, { fmt: { money: formatCents, count: (n) => String(n) }, words: { total: t('x.total'), subtotal: t('lay.subtotal'), none: t('lay.novalue') }, vars: { schedule: table.title, project: '' } });
  const plan = [];
  for (const l of laid.lines) {
    if (l.kind === 'group') plan.push({ kind: 'group', label: l.label, count: l.count });
    else if (l.kind === 'row') plan.push({ kind: 'row', index: l.ids[0] });
    else if (l.kind === 'subtotal') plan.push({ kind: 'subtotal', label: l.cells[0], count: l.count, sums: Object.fromEntries(laid.colIds.map((id, j) => [id, l.vals[j]]).filter(([, v]) => typeof v === 'number')) });
  }
  const mode = s.layout.headings?.case || 'asis';
  return { laid, from: s.from, active: Object.keys(s.from).length > 0, plan, title: s.from.title ? laid.title : '', caseOf: (text) => headingCase(text, mode), groupedBy: laid.groupBy };
}
export const estimateLayout = (state, est, standard) => layOut(estimateTable(state, est), {}, standard);
export const sheetLayout = (rows, sheetLabel, standard) => layOut(sheetTable(rows, sheetLabel), {}, standard);

const WORD = { groupBy: 'grouping', totals: 'totals', title: 'title', headings: 'headings' };
/** For the assistant tools: the same rows in the office layout (rows by their index in the answer's own list). Null when no standard is set. */
export function layoutAnswer(L, sums = {}) {
  if (!L.active) return null;
  return { title: L.title || L.laid.title, groupedBy: L.groupedBy, fromOfficeStandard: Object.keys(L.from).map((k) => WORD[k]),
    lines: L.plan.map((p) => (p.kind === 'row' ? { kind: 'row', row: p.index } : p.kind === 'group' ? { kind: 'group', label: p.label, rows: p.count } : { kind: 'subtotal', label: p.label, ...Object.fromEntries(Object.entries(sums).filter(([id]) => typeof p.sums[id] === 'number').map(([id, name]) => [name, p.sums[id]])) })),
    note: 'The office standard (Default Policies) lays the table out this way; rows are named by their index in this answer. The job total is unchanged.' };   // i18n-ignore: read by the assistant program, not shown to the person
}
