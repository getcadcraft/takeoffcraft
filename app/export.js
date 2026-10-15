/* SPDX-License-Identifier: Apache-2.0 */
/**
 * export.js — the estimate as CSV and XLSX, and a project's quantities as rows. DOM-free.
 *
 * The XLSX "Estimate" sheet carries live formulas (qty + waste, ROUND(… , 2) extensions, SUM
 * totals) with the values TakeoffCraft computed cached in them, so the workbook reads right
 * before and after a recalculation and the estimator can keep pricing in the spreadsheet.
 * The app rounds every extension to the cent exactly as ROUND(x, 2) does, so the two agree.
 */

import { writeXlsx, ref } from './xlsx.js';
import { estimate, baseEstimate, alternates, quantities, sheetBreakdown, measureMark, TYPE_LABELS, areaEstimates, unitOf } from './model.js';
import { UNITS, formatFtIn, describeScale, roundTo, formatPitch } from './units.js';
import { t } from './i18n.js';
import { bidSummary, bidUsed, normalBid } from './bid.js';

/** The estimate's column headers (CSV and the Estimate worksheet), in the language the page runs in. */
export const estimateHead = () => ['item', 'type', 'unit', 'qty', 'waste', 'qtyw', 'matu', 'labu', 'mat', 'lab', 'total', 'notes'].map((k) => t('x.head.' + k));

const rowNote = (r) => {
  const n = [];
  if (r.error) n.push(t('x.note.error', { error: r.error }));
  if (r.formula !== undefined && !r.error) n.push(t('x.note.formula', { formula: r.formula }));
  if (r.unscaled) n.push(t('x.note.unscaled', { n: r.unscaled }));
  if (r.wallArea) n.push(t('x.note.wall', { value: roundTo(r.wallArea.value, 2), unit: r.wallArea.unit }));
  if (r.perimeter) n.push(t('x.note.perimeter', { value: roundTo(r.perimeter.value, 2), unit: r.perimeter.unit }));
  if (r.backout) n.push(t('export.backout.note', { value: roundTo(r.backout.value, 2), unit: r.backout.unit }));
  if (r.kind === 'condition') n.push(t('export.cond.note', { type: TYPE_LABELS[r.cond].toLowerCase() }));
  if (r.work) n.push(t('export.crew.note', { hours: roundTo(r.work.hours, 2), size: r.crew.size, wh: roundTo(r.work.workerHours, 2), days: roundTo(r.work.days, 2), prod: roundTo(r.crew.prod, 4), unit: r.unit, wage: roundTo(r.crew.wage / 10000, 4) }));
  return n.join('; ');
};

/** CSV cell: quoted when needed; text that a spreadsheet would run as a formula gets a leading '. */
export function csvCell(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'number') return Number.isFinite(v) ? String(v) : '';
  let s = String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
export const csvLine = (cells) => cells.map(csvCell).join(',');

const q4 = (v) => (Number.isFinite(v) ? roundTo(v, 4) : null);
const dollars = (cents) => roundTo(cents / 100, 2);
const rate = (r4) => r4 / 10000;

/**
 * Add-on columns after Notes (0.5 AO.6, the add-on API's export.column): [{ name, value(row, item) }] — row = an estimate row
 * (kind item | condition | component, itemId, qty, total …), item = its item. A throwing value is an empty cell.
 */
function colCells(columns, r, state) {
  if (!columns.length) return [];
  const it = state.items.find((i) => i.id === r.itemId) || null;
  return columns.map((c) => { try { const v = c.value(r, it); return v === undefined || v === '' ? null : v; } catch { return null; } });
}

/** The estimate as CSV text (values, not formulas). */
export function estimateCsv(state, est = baseEstimate(state), columns = []) {
  const lines = [csvLine([...estimateHead(), ...columns.map((c) => c.name)])];
  for (const r of est.rows) {
    const name = r.kind === 'component' ? '  ' + r.name : r.name;
    const type = r.kind === 'component' ? t('x.component') : TYPE_LABELS[r.type];
    if (r.error) lines.push(csvLine([name, type, r.unit, null, r.waste / 100, null, rate(r.mat), rate(r.lab), null, null, null, rowNote(r), ...colCells(columns, r, state)]));
    else lines.push(csvLine([name, type, r.unit, q4(r.qty), r.waste / 100, q4(r.qtyW), rate(r.mat), rate(r.lab), dollars(r.matExt), dollars(r.labExt), dollars(r.total), rowNote(r), ...colCells(columns, r, state)]));
  }
  const alts = alternates(state);
  lines.push(csvLine([alts.length ? t('export.alt.base') : t('x.total'), null, null, null, null, null, null, null, dollars(est.matTotal), dollars(est.labTotal), dollars(est.total), est.incomplete ? t('x.incomplete') : '']));
  if (alts.length) {                                       // T17: each alternate and what it does to the base bid
    lines.push('', csvLine([t('export.alt.h'), t('export.alt.kind'), null, null, null, null, null, null, null, null, t('export.alt.amount'), null]));
    for (const a of alts) lines.push(csvLine([a.area.name, t('alt.' + a.alt), null, null, null, null, null, null, dollars(a.est.matTotal * Math.sign(a.amount || 1)), dollars(a.est.labTotal * Math.sign(a.amount || 1)), dollars(a.amount), a.est.incomplete ? t('x.incomplete') : '']));
  }
  if (bidUsed(state.bid)) {                                 // T19: the bid summary (markups on the base bid)
    const b = bidSummary(est, state.bid, alts);
    lines.push('', csvLine([t('bid.h')]));
    for (const l of b.lines) lines.push(csvLine([l.label, l.pct ? (l.pct / 100) + '%' : null, null, null, null, null, null, null, null, null, dollars(l.cents), null]));
    for (const a of b.alts) lines.push(csvLine([t('bid.pdf.alt', { name: a.name, kind: t('alt.' + a.alt).toLowerCase() }), null, null, null, null, null, null, null, null, null, dollars(a.withMarkup), t('bid.alt.note')]));
  }
  return lines.join('\r\n') + '\r\n';
}

/** Per-sheet quantities as CSV. sheetLabel(key) names a sheet. */
export function sheetsCsv(state, sheetLabel) {
  const lines = [csvLine(['sheet', 'item', 'qty', 'unit', 'marks'].map((k) => t('x.head.' + k)))];
  for (const r of sheetBreakdown(state)) lines.push(csvLine([sheetLabel(r.sheet), r.name, q4(r.qty), r.unit, r.marks]));
  return lines.join('\r\n') + '\r\n';
}

// ---------------------------------------------------------------------------
// Reports a general contractor's estimate needs (0.5 TK.4): material list, quote request, takeoff summary, by CSI division

/**
 * The material list: every assembly part (component row) and every item or condition row that carries a material rate,
 * added up by name and unit across the takeoff. → [{ name, unit, qty, qtyW, matExt (cents), csi, items: [item names] }],
 * sorted by CSI number (none last), then name. Rows whose formula failed are left out (the estimate says it is incomplete).
 */
export function materialList(state, est = baseEstimate(state)) {
  const items = new Map(state.items.map((i) => [i.id, i]));
  const by = new Map();
  for (const r of est.rows) {
    if (r.error || !(r.qty > 0)) continue;
    if (r.kind !== 'component' && !(r.mat > 0)) continue;
    const it = items.get(r.itemId);
    const name = String(r.name).trim();
    const k = name.toLowerCase() + '\u0000' + r.unit;
    const g = by.get(k) || { name, unit: r.unit, qty: 0, qtyW: 0, matExt: 0, csi: it?.csi || '', items: [] };
    g.qty += r.qty; g.qtyW += r.qtyW; g.matExt += r.matExt;
    if (!g.csi && it?.csi) g.csi = it.csi;
    if (it && !g.items.includes(it.name)) g.items.push(it.name);
    by.set(k, g);
  }
  return [...by.values()].sort((a, b) => (a.csi || '99').localeCompare(b.csi || '99') || a.name.localeCompare(b.name));
}

/** Quantities only, no prices: one row per item and second condition → [{ name, csi, type, qty, unit, marks, sheets }]. */
export function takeoffSummary(state, est = baseEstimate(state)) {
  const sheetsOf = new Map();
  for (const m of state.marks) { const k = m.item + '\u0000' + m.kind; if (!sheetsOf.has(k)) sheetsOf.set(k, new Set()); sheetsOf.get(k).add(m.sheet); }
  const items = new Map(state.items.map((i) => [i.id, i]));
  return est.rows.filter((r) => r.kind === 'item' || r.kind === 'condition').map((r) => {
    const it = items.get(r.itemId);
    const kind = r.kind === 'condition' ? r.cond : it.type;
    return { name: r.kind === 'condition' ? t('qty.cond.name', { item: r.name, type: TYPE_LABELS[r.cond].toLowerCase() }) : r.name, csi: it?.csi || '', type: TYPE_LABELS[kind], qty: r.qty, unit: r.unit, marks: r.marks || 0, sheets: sheetsOf.get(r.itemId + '\u0000' + kind)?.size || 0 };
  });
}

/** The CSI MasterFormat division titles (2018 edition) the estimate groups by; keys `csi.div.NN` in the language file. */
export const CSI_DIVISIONS = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '21', '22', '23', '25', '26', '27', '28', '31', '32', '33', '34', '35', '40', '41', '42', '43', '44', '45', '46', '48'];
export const divisionTitle = (d) => (CSI_DIVISIONS.includes(d) ? t('csi.div.' + d) : t('csi.div.other'));

/** The estimate by CSI division: [{ div ('03' | '' for items without a number), title, mat, lab, total (cents), items }]. */
export function byDivision(state, est = baseEstimate(state)) {
  const items = new Map(state.items.map((i) => [i.id, i]));
  const by = new Map();
  for (const r of est.rows) {
    if (r.error) continue;
    const it = items.get(r.itemId);
    const div = it?.csi ? it.csi.slice(0, 2) : '';
    const g = by.get(div) || { div, title: div ? divisionTitle(div) : t('csi.div.none'), mat: 0, lab: 0, total: 0, items: new Set() };
    g.mat += r.matExt; g.lab += r.labExt; g.total += r.total; g.items.add(r.itemId);
    by.set(div, g);
  }
  return [...by.values()].sort((a, b) => (a.div || '99').localeCompare(b.div || '99')).map((g) => ({ ...g, items: g.items.size }));
}

/**
 * Spot elevations for CivilCraft (0.5 TK.5): the count marks of one sheet that carry an elevation (`z`), as a point file
 * CivilCraft opens (points.js: a header naming Point, Northing, Easting, Elevation, Description). Northing and easting are
 * the sheet's own coordinates in feet (PDF user space × its scale: y up = north on an unrotated sheet), so distances and
 * volumes between the points are true; place them on site coordinates in CivilCraft. → { ok, csv, n } | { ok: false, why }
 */
export function spotElevationsCsv(state, sheet, sheetLabel = (k) => k) {
  const sc = state.sheets[sheet]?.scale;
  const marks = state.marks.filter((m) => m.sheet === sheet && m.kind === 'count' && typeof m.z === 'number');
  if (!marks.length) return { ok: false, why: t('spots.none') };
  if (!sc) return { ok: false, why: t('spots.noscale', { sheet: sheetLabel(sheet) }) };
  const k = sc.ftPerUnit;
  const items = new Map(state.items.map((i) => [i.id, i]));
  const lines = [csvLine(['Point', 'Northing', 'Easting', 'Elevation', 'Description'])];   // i18n-ignore: CivilCraft reads these column names
  marks.forEach((m, i) => lines.push(csvLine([i + 1, roundTo(m.pts[0].y * k, 4), roundTo(m.pts[0].x * k, 4), roundTo(m.z, 4), items.get(m.item)?.name || ''])));
  return { ok: true, csv: lines.join('\r\n') + '\r\n', n: marks.length };
}

/** The material list as CSV (values). */
export function materialCsv(state, est = baseEstimate(state)) {
  const lines = [csvLine(['part', 'csi', 'unit', 'qty', 'qtyw', 'mat', 'items'].map((k) => t('mat.head.' + k)))];
  const list = materialList(state, est);
  for (const g of list) lines.push(csvLine([g.name, g.csi, g.unit, q4(g.qty), q4(g.qtyW), dollars(g.matExt), g.items.join('; ')]));
  lines.push(csvLine([t('x.total'), null, null, null, null, dollars(list.reduce((n, g) => n + g.matExt, 0)), est.incomplete ? t('x.incomplete') : '']));
  return lines.join('\r\n') + '\r\n';
}

/**
 * The markups block under the Estimate sheet's total (TK.4), with live formulas: each markup's base in column I, its percent
 * in E, its amount = ROUND(I × E, 2) in K; the cost and the bid add up column K. Cached values are bidSummary's to the cent.
 */
function markupRows(est, bid, totalRow, firstRow) {
  const b = normalBid(bid);
  const sum = bidSummary(est, b);
  const L = (key) => sum.lines.find((l) => l.key === key);
  const rows = [];
  const at = {};                                   // key → 1-based row of its amount (column K)
  let r = firstRow;
  const push = (cells, key) => { rows.push(cells); if (key) at[key] = r; r++; };
  push([{ v: t('bid.h'), s: 'bold' }]);
  const pctRow = (key, baseF, baseV) => push([L(key).label, null, null, null, { v: L(key).pct / 10000, s: 'pct' }, null, null, null,
    { v: dollars(baseV), f: baseF, s: 'money' }, null, { v: dollars(L(key).cents), f: 'ROUND(I' + r + '*E' + r + ',2)', s: 'money' }, t('bid.x.base')], key);
  const I = 'I' + totalRow, J = 'J' + totalRow;
  if (L('burden')) pctRow('burden', J, est.labTotal);
  push([{ v: L('cost').label, s: 'bold' }, null, null, null, null, null, null, null, null, null,
    { v: dollars(L('cost').cents), f: [I, J, ...(at.burden ? ['K' + at.burden] : [])].join('+'), s: 'boldMoney' }, ''], 'cost');
  const above = ['cost'];
  const refs = () => above.filter((k) => at[k]).map((k) => 'K' + at[k]).join('+');
  const cents = () => above.reduce((n, k) => n + (L(k)?.cents || 0), 0);
  if (L('tax')) { pctRow('tax', I, est.matTotal); above.push('tax'); }
  for (const k of ['overhead', 'profit', 'bond']) if (L(k)) { pctRow(k, refs(), cents()); above.push(k); }
  push([{ v: L('total').label, s: 'bold' }, null, null, null, null, null, null, null, null, null, { v: dollars(L('total').cents), f: refs(), s: 'boldMoney' }, ''], 'total');
  return rows;
}

/** Workbook sheets for writeXlsx: Estimate (with formulas), By sheet, Marks, Scales. */
export function estimateSheets(state, sheetLabel, est = baseEstimate(state), columns = []) {
  const rows = [[...estimateHead(), ...columns.map((c) => c.name)].map((h) => ({ v: h, s: 'head' }))];
  for (const r of est.rows) {
    const n = rows.length; // 0-based row index of this row
    const name = r.kind === 'component' ? { v: '    ' + r.name } : { v: r.name, s: 'bold' };
    const type = r.kind === 'component' ? t('x.component') : TYPE_LABELS[r.type];
    if (r.error) {
      rows.push([name, type, r.unit, null, { v: r.waste / 10000, s: 'pct' }, null, { v: rate(r.mat), s: 'rate' }, { v: rate(r.lab), s: 'rate' }, null, null, null, rowNote(r), ...colCells(columns, r, state)]);
      continue;
    }
    const D = ref(n, 3), E = ref(n, 4), F = ref(n, 5), G = ref(n, 6), H = ref(n, 7), I = ref(n, 8), J = ref(n, 9);
    rows.push([
      name, type, r.unit,
      { v: r.qty, s: 'qty' },
      { v: r.waste / 10000, s: 'pct' },
      { v: r.qtyW, f: D + '*(1+' + E + ')', s: 'qty' },
      { v: rate(r.mat), s: 'rate' },
      { v: rate(r.lab), s: 'rate' },
      { v: dollars(r.matExt), f: 'ROUND(' + F + '*' + G + ',2)', s: 'money' },
      { v: dollars(r.labExt), f: r.work ? 'ROUND(' + F + '/' + r.crew.prod + '*' + r.crew.size + '*' + rate(r.crew.wage) + ',2)' : 'ROUND(' + F + '*' + H + ',2)', s: 'money' },   // T18: a crew's hours × wage
      { v: dollars(r.total), f: I + '+' + J, s: 'money' },
      rowNote(r),
      ...colCells(columns, r, state),
    ]);
  }
  const last = rows.length; // 1-based number of the last data row
  rows.push([]);
  rows.push([{ v: (state.areas || []).some((a) => a.alt) ? t('export.alt.base') : t('x.total'), s: 'bold' }, null, null, null, null, null, null, null,
    { v: dollars(est.matTotal), f: 'SUM(I2:I' + last + ')', s: 'boldMoney' },
    { v: dollars(est.labTotal), f: 'SUM(J2:J' + last + ')', s: 'boldMoney' },
    { v: dollars(est.total), f: 'SUM(K2:K' + last + ')', s: 'boldMoney' },
    est.incomplete ? t('x.incomplete') : '']);
  if (bidUsed(state.bid)) {                                 // TK.4: the markups on the estimate itself, live
    rows.push([]);
    rows.push(...markupRows(est, state.bid, rows.length - 1, rows.length + 1));
  }

  const q = quantities(state);
  const bySheet = [['sheet', 'item', 'qty', 'unit', 'marks'].map((k) => ({ v: t('x.head.' + k), s: 'head' }))];
  for (const r of sheetBreakdown(state, q)) bySheet.push([sheetLabel(r.sheet), r.name, { v: r.qty, s: 'qty' }, r.unit, { v: r.marks, s: 'int' }]);

  const withAreas = state.areas?.length > 0;      // T12: a Bid area column when the takeoff has bid areas
  const areaName = new Map((state.areas || []).map((a) => [a.id, a.name]));
  const marks = [['sheet', 'item', 'type', 'qty', 'unit', 'detail'].map((k) => ({ v: t('x.head.' + k), s: 'head' }))];
  if (withAreas) marks[0].push({ v: t('export.areas.area'), s: 'head' });
  const markRow = marks.push.bind(marks);
  const groupOf = new Map((state.groups || []).map((g) => [g.id, g]));
  const addArea = (m, row) => {
    const g = m.group && groupOf.get(m.group);            // T16: a typical group's mark says it counts ×N
    if (g) row = [...row.slice(0, 5), [row[5], t('export.group.note', { name: g.name, n: g.repeat })].filter(Boolean).join('; '), ...row.slice(6)];
    return withAreas ? [...row, ...Array(Math.max(0, 6 - row.length)).fill(null), m.area ? areaName.get(m.area) : t('export.areas.none')] : row;
  };
  const items = new Map(state.items.map((i) => [i.id, i]));
  for (const m of state.marks) {
    const it = items.get(m.item);
    const sc = state.sheets[m.sheet]?.scale;
    const r = measureMark(m, sc?.ftPerUnit, it);
    const row = [sheetLabel(m.sheet), it.name, TYPE_LABELS[m.kind]];
    const unit = unitOf(it, m.kind);                      // a second condition's mark (T8) in that condition's unit
    if (!r) { markRow(addArea(m, [...row, null, null, t('x.noscale.sheet')])); continue; }
    if (m.kind === 'count') markRow(addArea(m, [...row, { v: 1, s: 'int' }, 'EA', typeof m.z === 'number' ? t('spots.detail', { z: roundTo(m.z, 4) }) : '']));
    else if (m.kind === 'linear') {
      const k = UNITS[unit].system === 'metric' ? 0.3048 : 1;
      const ded = new Set(r.deducts);
      const segLen = (i) => (r.slopes[i].k === 'flat' ? formatFtIn(r.segmentsFt[i]) : t('export.slope.seg', { len: formatFtIn(r.slopedFt[i]), kind: r.slopes[i].k === 'hip' ? t('slope.hip').toLowerCase() : t('slope.rake').toLowerCase(), pitch: formatPitch(r.slopes[i].p) }));
      const segs = r.segmentsFt.map((s, i) => (ded.has(i) ? t('export.deduct.seg', { len: segLen(i) }) : segLen(i))).join(', ');
      markRow(addArea(m, [...row, { v: r.lengthFt * k, s: 'qty' }, k === 1 ? 'LF' : 'm', t('x.segments', { n: r.segmentsFt.length, list: segs }) +
        (ded.size ? '; ' + t('export.deduct.total', { cut: formatFtIn(r.deductFt), gross: formatFtIn(r.grossFt) }) : '')]));
    } else {
      const k = UNITS[unit].perSqFt;
      const slopeNote = r.factor > 1 ? t('export.slope.area', { pitch: formatPitch(r.pitch), plan: roundTo(r.planSqft * k, 2) }) + '; ' : '';
      markRow(addArea(m, [...row, { v: r.areaSqft * k, s: 'qty' }, UNITS[unit].label, slopeNote + (m.holes.length ? t('x.gross', { gross: roundTo(r.grossSqft * k, 2), cut: roundTo(r.cutSqft * k, 2) }) + '; ' : '') + t('x.perimeter', { len: formatFtIn(r.perimeterFt) })]));
    }
  }

  const scales = [['sheet', 'scale', 'how', 'ftpu'].map((k) => ({ v: t('x.head.' + k), s: 'head' }))];
  for (const f of state.files) {
    for (let p = 0; p < (f.pages || 0); p++) {
      const key = f.hash + ':' + p;
      const sc = state.sheets[key]?.scale;
      if (!sc && !state.marks.some((m) => m.sheet === key)) continue;
      scales.push([sheetLabel(key), sc ? sc.label || describeScale(sc.ftPerUnit) : t('x.noscale'), sc ? (sc.method === 'preset' ? t('x.preset') : sc.cal ? t('x.calibrated.on', { text: sc.cal.text }) : t('x.calibrated')) : '', sc ? sc.ftPerUnit : null]);
    }
  }
  const out = [
    { name: t('x.sheet.estimate'), rows, cols: [34, 10, 7, 12, 9, 14, 16, 14, 14, 14, 14, 48], freeze: 1 },
    { name: t('x.sheet.bysheet'), rows: bySheet, cols: [40, 34, 12, 7, 8], freeze: 1 },
    { name: t('x.sheet.marks'), rows: marks, cols: [40, 34, 9, 12, 7, 60], freeze: 1 },
    { name: t('x.sheet.scales'), rows: scales, cols: [40, 18, 30, 18], freeze: 1 },
  ];
  if (state.areas?.length) out.push({ name: t('export.areas.sheet'), rows: areaRows(state), cols: [30, 34, 7, 12, 14, 14, 14, 14, 40], freeze: 1 });
  const alts = alternates(state);
  if (alts.length) out.push({ name: t('export.alt.sheet'), rows: alternateRows(state, est, alts), cols: [34, 34, 7, 12, 14, 40], freeze: 1 });
  if (state.notes?.length) {                                // T22: the markups, as a list to work through
    const rowsN = [['x.head.sheet', 'note.f.kind', 'note.f.status', 'note.f.text'].map((k) => ({ v: t(k), s: 'head' }))];
    for (const n of state.notes) rowsN.push([sheetLabel(n.sheet), t('tool.' + n.kind), t('note.status.' + n.status), n.text]);
    out.push({ name: t('notes.sheet'), rows: rowsN, cols: [40, 12, 12, 80], freeze: 1 });
  }
  if (bidUsed(state.bid)) {                                 // T19: the bid summary
    const b = bidSummary(est, state.bid, alts);
    const rowsB = [[{ v: t('bid.h'), s: 'head' }, { v: t('bid.col.pct'), s: 'head' }, { v: t('bid.col.amount'), s: 'head' }]];
    for (const l of b.lines) rowsB.push([l.sub ? { v: l.label, s: 'bold' } : l.label, l.pct ? { v: l.pct / 10000, s: 'pct' } : null, { v: dollars(l.cents), s: l.sub ? 'boldMoney' : 'money' }]);
    if (b.alts.length) { rowsB.push([]); for (const a of b.alts) rowsB.push([t('bid.pdf.alt', { name: a.name, kind: t('alt.' + a.alt).toLowerCase() }), null, { v: dollars(a.withMarkup), s: 'money' }]); }
    out.push({ name: t('bid.sheet'), rows: rowsB, cols: [40, 10, 16], freeze: 1 });
  }
  // TK.4 (after every sheet it had, so they keep their places): takeoff summary (quantities, no prices), material list and the quote request for suppliers, by CSI division
  const ts = takeoffSummary(state, est);
  if (ts.length) {
    const rowsT = [['item', 'csi', 'type', 'qty', 'unit', 'marks', 'sheets'].map((k) => ({ v: t('sum.head.' + k), s: 'head' }))];
    for (const x of ts) rowsT.push([{ v: x.name, s: 'bold' }, x.csi, x.type, { v: x.qty, s: 'qty' }, x.unit, { v: x.marks, s: 'int' }, { v: x.sheets, s: 'int' }]);
    out.push({ name: t('sum.sheet'), rows: rowsT, cols: [40, 11, 9, 12, 7, 8, 8], freeze: 1 });
  }
  const ml = materialList(state, est);
  if (ml.length) {
    const rowsM = [['part', 'csi', 'unit', 'qty', 'qtyw', 'mat', 'items'].map((k) => ({ v: t('mat.head.' + k), s: 'head' }))];
    for (const g of ml) rowsM.push([{ v: g.name, s: 'bold' }, g.csi, g.unit, { v: g.qty, s: 'qty' }, { v: g.qtyW, s: 'qty' }, { v: dollars(g.matExt), s: 'money' }, g.items.join('; ')]);
    rowsM.push([]);
    rowsM.push([{ v: t('x.total'), s: 'bold' }, null, null, null, null, { v: dollars(ml.reduce((n, g) => n + g.matExt, 0)), f: 'SUM(F2:F' + (ml.length + 1) + ')', s: 'boldMoney' }, est.incomplete ? t('x.incomplete') : '']);
    out.push({ name: t('mat.sheet'), rows: rowsM, cols: [40, 11, 8, 12, 14, 14, 50], freeze: 1 });
    // the quote request: what to send a supplier — quantities with waste, an empty price column, live extensions
    const rowsQ = [[{ v: t('quote.title', { name: state.name || 'Takeoff' }), s: 'bold' }], [t('quote.note')], ['part', 'unit', 'qty', 'price', 'ext'].map((k) => ({ v: t('quote.head.' + k), s: 'head' }))];
    for (const g of ml) { const n = rowsQ.length + 1; rowsQ.push([g.name, g.unit, { v: g.qtyW, s: 'qty' }, { v: 0, s: 'rate' }, { v: 0, f: 'ROUND(C' + n + '*D' + n + ',2)', s: 'money' }]); }
    rowsQ.push([]);
    rowsQ.push([{ v: t('x.total'), s: 'bold' }, null, null, null, { v: 0, f: 'SUM(E4:E' + (ml.length + 3) + ')', s: 'boldMoney' }]);
    out.push({ name: t('quote.sheet'), rows: rowsQ, cols: [44, 8, 14, 14, 16], freeze: 3 });
  }
  if (state.items.some((i) => i.csi)) {
    const bd = byDivision(state, est);
    const rowsD = [['div', 'title', 'items', 'mat', 'lab', 'total'].map((k) => ({ v: t('div.head.' + k), s: 'head' }))];
    for (const g of bd) rowsD.push([g.div, { v: g.title, s: 'bold' }, { v: g.items, s: 'int' }, { v: dollars(g.mat), s: 'money' }, { v: dollars(g.lab), s: 'money' }, { v: dollars(g.total), s: 'money' }]);
    rowsD.push([]);
    const n = bd.length + 1;
    rowsD.push([null, { v: t('x.total'), s: 'bold' }, null, { v: dollars(est.matTotal), f: 'SUM(D2:D' + n + ')', s: 'boldMoney' }, { v: dollars(est.labTotal), f: 'SUM(E2:E' + n + ')', s: 'boldMoney' }, { v: dollars(est.total), f: 'SUM(F2:F' + n + ')', s: 'boldMoney' }]);
    out.push({ name: t('div.sheet'), rows: rowsD, cols: [8, 48, 8, 14, 14, 14], freeze: 1 });
  }
  return out;
}

/**
 * The "Alternates" worksheet (T17): the base bid, then each alternate's items (its own quantities and costs) and what it
 * does to the base bid (+ an add, − a deduct), and the base bid with every add taken.
 */
export function alternateRows(state, base = baseEstimate(state), alts = alternates(state)) {
  const rows = [['export.alt.h', 'export.areas.item', 'export.areas.unit', 'export.areas.qty', 'export.alt.amount', 'export.areas.notes'].map((k) => ({ v: t(k), s: 'head' }))];
  rows.push([{ v: t('export.alt.base'), s: 'bold' }, null, null, null, { v: dollars(base.total), s: 'boldMoney' }, base.incomplete ? t('x.incomplete') : '']);
  rows.push([]);
  for (const a of alts) {
    const name = t('export.alt.name', { name: a.area.name, kind: t('alt.' + a.alt).toLowerCase() });
    for (const r of a.est.rows) {
      const label = r.kind === 'component' ? { v: '    ' + r.name } : { v: r.name, s: 'bold' };
      rows.push([name, label, r.unit, r.error ? null : { v: r.qty, s: 'qty' }, r.error ? null : { v: dollars(r.total), s: 'money' }, rowNote(r)]);
    }
    rows.push([{ v: name, s: 'bold' }, null, null, null, { v: dollars(a.amount), s: 'boldMoney' }, a.alt === 'add' ? t('export.alt.add.note') : t('export.alt.deduct.note')]);
    rows.push([]);
  }
  const adds = alts.filter((a) => a.alt === 'add').reduce((n, a) => n + a.amount, 0);
  rows.push([{ v: t('export.alt.withadds'), s: 'bold' }, null, null, null, { v: dollars(base.total + adds), s: 'boldMoney' }, '']);
  return rows;
}

/**
 * The "By bid area" worksheet (T12): each bid area's estimate (formulas on that area's own totals), a subtotal per
 * area (SUM over its rows) and the sum of the subtotals. Marks in no bid area come last.
 */
export function areaRows(state) {
  const head = ['export.areas.area', 'export.areas.item', 'export.areas.unit', 'export.areas.qty', 'export.areas.qtyw', 'export.areas.mat', 'export.areas.lab', 'export.areas.total', 'export.areas.notes'];
  const rows = [head.map((k) => ({ v: t(k), s: 'head' }))];
  const subs = [];
  for (const { area, est } of areaEstimates(state)) {
    const name = area ? (area.alt ? t('export.alt.name', { name: area.name, kind: t('alt.' + area.alt).toLowerCase() }) : area.name) : t('export.areas.none');
    const first = rows.length + 1;                // 1-based first row of this area's block
    for (const r of est.rows) {
      const label = r.kind === 'component' ? { v: '    ' + r.name } : { v: r.name, s: 'bold' };
      if (r.error) { rows.push([name, label, r.unit, null, null, null, null, null, rowNote(r)]); continue; }
      rows.push([name, label, r.unit, { v: r.qty, s: 'qty' }, { v: r.qtyW, s: 'qty' }, { v: dollars(r.matExt), s: 'money' }, { v: dollars(r.labExt), s: 'money' }, { v: dollars(r.total), s: 'money' }, rowNote(r)]);
    }
    const last = rows.length;
    rows.push([{ v: t('export.areas.subtotal', { area: name }), s: 'bold' }, null, null, null, null,
      { v: dollars(est.matTotal), f: 'SUM(F' + first + ':F' + last + ')', s: 'boldMoney' },
      { v: dollars(est.labTotal), f: 'SUM(G' + first + ':G' + last + ')', s: 'boldMoney' },
      { v: dollars(est.total), f: 'SUM(H' + first + ':H' + last + ')', s: 'boldMoney' },
      est.incomplete ? t('export.areas.incomplete') : '']);
    subs.push({ row: rows.length, est });
    rows.push([]);
  }
  if (subs.length) {
    const sum = (col) => subs.map((x) => col + x.row).join('+');
    const tot = (k) => subs.reduce((n, x) => n + x.est[k], 0);
    rows.push([{ v: t('export.areas.all'), s: 'bold' }, null, null, null, null,
      { v: dollars(tot('matTotal')), f: sum('F'), s: 'boldMoney' }, { v: dollars(tot('labTotal')), f: sum('G'), s: 'boldMoney' }, { v: dollars(tot('total')), f: sum('H'), s: 'boldMoney' },
      t('export.areas.all.note')]);
  }
  return rows;
}

export async function estimateXlsx(state, sheetLabel, opts = {}) {
  const { columns = [], ...rest } = opts;
  return writeXlsx(estimateSheets(state, sheetLabel, undefined, columns), { title: state.name, ...rest });
}
