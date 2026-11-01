/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — reasons for a line left out are codes (unit, noqty, nofactor); the page words them from its language file (eg14.why.<code>) */
/**
 * carbon.js — embodied carbon and the 5D price table from a takeoff (0.8 EG.14 and EG.17, TakeoffCraft's side; session takeoff_PART_3). DOM-free (tested in Node).
 *
 * EG.14: each item's quantity (with waste) is turned into the factor table's basis (m, m², m³, item; kg when the factor has a density and the quantity is a volume)
 * and multiplied by the matching factor row's figures (A1–A3 product stage, A4 transport, A5 site waste, per the modules the person counts). The factor table is
 * BimCraft's open one (carbon-factors.js, a byte-identical copy: the same rows, the same CSV/JSON files, so one table serves both apps). THE SHIPPED ROWS ARE STARTER
 * VALUES, generic and unchecked (STARTER_LABEL goes beside every figure). Nothing here is a certified figure or an assessment.
 * Kept in the takeoff's file under an optional key `carbon` (v 1): { rows: the person's own rows, pick: { itemId: rowId | 'none' }, modules: ['a1a3', …] }.
 *
 * EG.17: the takeoff's rates as a price table (`cadcraft-price-table` v 1, the file BimCraft's 5D pane reads), one row per priced item, so the same prices that make
 * the bid price the building model's tasks. The table is the item's own rates and waste; crew labour travels as the rate it comes to.
 *
 *   readCarbon(json) / writeCarbon(s)     the part kept in the file
 *   calcCarbon(est, items, carbon)        → { lines: [{ itemId, name, unit, qty, qtyW, basis, row, rowName, a1a3, a4, a5, kg, auto }], left: [{ itemId, name, why }], total, modules, unchecked }
 *   carbonCsv(res)                        → text (formula-looking cells guarded)
 *   priceRows(est, items)                 → { rows, skipped: [{ name, why }] } rows in the price-table shape
 *   priceTableJson(rows) / priceTableCsv(rows)
 */
import { STARTER, STARTER_LABEL, mergeTable, matchRow, cleanRow, norm, cell } from './carbon-factors.js';
export { STARTER_LABEL, mergeTable, tableJson, readTableJson, tableCsv, readTableCsv } from './carbon-factors.js';

export const LIMIT = { rows: 200, picks: 2000 };
export const MODULES = Object.freeze(['a1a3', 'a4', 'a5']);
/** A TakeoffCraft unit → the factor table's basis and how many basis units one of it is. */
export const BASIS_OF = Object.freeze({ LF: ['m', 0.3048], m: ['m', 1], SF: ['m2', 0.09290304], SY: ['m2', 0.83612736], SQ: ['m2', 9.290304], ac: ['m2', 4046.8564224], 'm²': ['m2', 1], ha: ['m2', 10000], EA: ['item', 1], CY: ['m3', 0.764554858], 'm³': ['m3', 1] });
const ID_RE = /^[a-z0-9][a-z0-9._-]{0,63}$/;

export const emptyCarbon = () => ({ v: 1, rows: [], pick: {}, modules: ['a1a3'] });
export function readCarbon(json) {
  if (!json || typeof json !== 'object' || json.v !== 1) return null;
  const c = emptyCarbon();
  for (const raw of (Array.isArray(json.rows) ? json.rows : []).slice(0, LIMIT.rows)) { const r = cleanRow(raw).row; if (r && !c.rows.some((x) => x.id === r.id)) c.rows.push(r); }
  for (const [k, v] of Object.entries(json.pick && typeof json.pick === 'object' ? json.pick : {}).slice(0, LIMIT.picks)) if (typeof k === 'string' && k.length <= 40 && typeof v === 'string' && (v === 'none' || ID_RE.test(v))) c.pick[k] = v;
  const mods = (Array.isArray(json.modules) ? json.modules : []).filter((m) => MODULES.includes(m));
  if (mods.length) c.modules = MODULES.filter((m) => m === 'a1a3' || mods.includes(m));
  const used = c.rows.length || Object.keys(c.pick).length || c.modules.join() !== 'a1a3';
  return used ? c : null;
}
export const writeCarbon = (c) => JSON.parse(JSON.stringify(c));

/** The table in force: starter rows with the person's laid over (each row has `origin`). */
export const tableOf = (carbon) => mergeTable(carbon?.rows || []);

/** The quantity of an est row in the row's basis: { qty } or { why: 'unit' | 'noqty' }. */
function inBasis(r, row) {
  const b = BASIS_OF[r.unit];
  if (!b) return { why: 'unit' };
  if (b[0] === row.basis) return { qty: r.qtyW * b[1] };
  if (row.basis === 'm2' && r.wallArea && BASIS_OF[r.wallArea.unit] && BASIS_OF[r.wallArea.unit][0] === 'm2') return { qty: r.wallArea.value * (r.qtyW / (r.qty || 1)) * BASIS_OF[r.wallArea.unit][1], wall: true };   // a wall line with a height
  if (row.basis === 'kg' && b[0] === 'm3' && row.density > 0) return { qty: r.qtyW * b[1] * row.density };
  return { why: 'noqty' };
}

export function calcCarbon(est, items, carbon) {
  const modules = carbon?.modules?.length ? carbon.modules : ['a1a3'];
  const rows = tableOf(carbon);
  const byId = new Map(rows.map((r) => [r.id, r]));
  const item = new Map((items || []).map((i) => [i.id, i]));
  const lines = [], left = [];
  let total = 0, unchecked = 0;
  for (const r of est.rows) {
    if ((r.kind !== 'item' && r.kind !== 'condition') || r.error || !(r.qtyW > 0)) continue;
    const it = item.get(r.itemId);
    const name = r.kind === 'condition' ? r.name + ' (' + r.type + ')' : r.name;
    const key = r.kind === 'condition' ? r.itemId + '#' + r.cond : r.itemId;
    const pick = carbon?.pick?.[key];
    if (pick === 'none') continue;
    const row = pick && byId.get(pick) ? byId.get(pick) : matchRow(rows, { name: it ? it.name : r.name });
    if (!row) { left.push({ itemId: r.itemId, key, name, why: 'nofactor' }); continue; }
    const q = inBasis(r, row);
    if (q.why) { left.push({ itemId: r.itemId, key, name, why: q.why, need: row.basis, row: row.id }); continue; }
    const a1a3 = q.qty * row.a1a3, a4 = modules.includes('a4') && Number.isFinite(row.a4) ? q.qty * row.a4 : 0, a5 = modules.includes('a5') && Number.isFinite(row.a5) ? q.qty * row.a5 : 0;
    const kg = a1a3 + a4 + a5;
    total += kg;
    if (!row.checked) unchecked++;
    lines.push({ itemId: r.itemId, key, name, unit: r.unit, qty: r.qty, qtyW: r.qtyW, basis: row.basis, row: row.id, rowName: row.match[0], a1a3, a4, a5, kg, auto: !(pick && byId.get(pick)), checked: row.checked });
  }
  lines.sort((a, b) => b.kg - a.kg);
  return { lines, left, total, modules, unchecked, label: STARTER_LABEL };
}

export function carbonCsv(res, { head = ['Item', 'Quantity', 'Unit', 'Factor', 'kgCO2e'] } = {}) {
  const n = (v) => String(Math.round(v * 100) / 100);
  const out = [head.map(cell).join(',')];
  for (const l of res.lines) out.push([cell(l.name), n(l.qtyW), cell(l.unit), cell(l.row), n(l.kg)].join(','));
  return out.join('\r\n') + '\r\n';
}

// ---- EG.17: the takeoff's rates as a price table ----
const PRICE_UNIT = Object.freeze({ LF: ['lf', 1], m: ['m', 1], SF: ['sf', 1], SY: ['sf', 1 / 9], SQ: ['sf', 1 / 100], 'm²': ['m2', 1], EA: ['item', 1], CY: ['cy', 1], 'm³': ['m3', 1] });
const slug = (s) => norm(s).replace(/ /g, '-').slice(0, 56) || 'item';
export const PRICE_FORMAT = 'cadcraft-price-table';
export function priceRows(est, items) {
  const rows = [], skipped = [], seen = new Set();
  const nameOf = new Map((items || []).map((i) => [i.id, i.name]));
  for (const r of est.rows) {
    if ((r.kind !== 'item' && r.kind !== 'condition') || r.error) continue;
    const name = nameOf.get(r.itemId) || r.name;
    const label = r.kind === 'condition' ? name + ' ' + r.type : name;
    const u = PRICE_UNIT[r.unit];
    const mat = (Number(r.mat) || 0) / 10000, lab = (Number(r.lab) || 0) / 10000;
    if (!u) { skipped.push({ name: label, why: 'unit' }); continue; }
    if (!(mat > 0 || lab > 0)) { skipped.push({ name: label, why: 'norate' }); continue; }
    let id = slug(label), n = 2;
    while (seen.has(id)) id = slug(label).slice(0, 52) + '-' + n++;
    seen.add(id);
    rows.push({ id, match: [norm(name).slice(0, 60)].filter(Boolean), classes: [], unit: u[0], density: null, mat: Math.round(mat * u[1] * 1e6) / 1e6, lab: Math.round(lab * u[1] * 1e6) / 1e6, waste: Math.min(5, Math.max(0, (Number(r.waste) || 0) / 10000)), source: 'TakeoffCraft rates', note: '' });
  }
  return { rows: rows.filter((x) => x.match.length), skipped };
}
export const priceTableJson = (rows) => JSON.stringify({ format: PRICE_FORMAT, version: 1, rows }, null, 2);
export const PRICE_HEADER = Object.freeze(['id', 'match', 'classes', 'unit', 'density', 'mat', 'lab', 'waste', 'source', 'note']);
export function priceTableCsv(rows) {
  const lines = [PRICE_HEADER.join(',')];
  for (const r of rows) lines.push([cell(r.id), cell(r.match.join('|')), cell(r.classes.join('|')), r.unit, Number.isFinite(r.density) ? r.density : '', r.mat, r.lab, r.waste, cell(r.source), cell(r.note)].join(','));
  return lines.join('\r\n') + '\r\n';
}
