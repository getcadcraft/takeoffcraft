/* SPDX-License-Identifier: Apache-2.0 */
/**
 * supply.js — supplier stock and lead-time files (0.8 EG.51, session takeoff_PART_2). DOM-free (tested in Node).
 *
 * A supplier's stock list (CSV: item, SKU, in stock, lead time, price, unit, supplier) is read, matched to what the takeoff needs (its estimate rows:
 * items, second conditions and assembly parts, with waste), and each need is checked: enough in stock? how long to wait? The result is plain data
 * and a list of problems in the shared shape (docs/0.8-PROBLEMS-SPEC.md). No network and no model: the person brings the file, the page never asks a
 * supplier anything. What is read from the file is content, never instructions (rule 36): names and numbers, nothing more.
 *
 *   readSupplyRows(rows)                 the same over rows of cells (an Excel sheet, xlsx-read.js)
 *   libraryPrices(lib, supply)           → { lib, updated, skipped }   supplier prices into the price Library (EG.51, takeoff_PART_3)
 *   readSupplyCsv(text)                  → { ok, rows, warnings } | { ok: false, error }     rows: { name, sku, unit, stock, inStock, lead, backorder, price, supplier, eta }
 *   emptySupply() / readSupply(json) / writeSupply(s)   the part kept in the project file (optional key `supply`, v 1)
 *   addSource(supply, { name, at, rows }, estRows)       a file's rows (the matching ones first) join the project's list
 *   needsOf(est)                         → [{ id, itemId, name, unit, need }]  what the estimate needs, with waste
 *   check(est, supply)                   → { rows: [{ id, itemId, name, unit, need, row, exact, status, stock, short, lead, … }], critical, unmatched }
 *   problemsOf(res, supply, { t })       → problems for ccProblems (supply.short, supply.lead)
 */

import { parseCsv } from './library.js';
import { keyOf } from './prices.js';

export const LIMIT = { rows: 2000, sources: 5, text: 200 };
const clean = (s, n = LIMIT.text) => String(s ?? '').replace(/[\u0000-\u001f\u007f-\u009f‪-‮⁦-⁩]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const HEAD = [
  ['sku', /^(sku|part\s*(no|number|#)?|item\s*(#|no\.?|number|code)|product\s*(#|no\.?|code|number)|catalog\s*(#|no\.?|number)|code)$/i],
  ['name', /^(item|name|description|product|material|item\s*name|product\s*name)$/i],
  ['lead', /lead|delivery\s*(time|days)|ships?\s*(in|within)/i],
  ['stock', /(in\s*stock|on\s*hand|available|inventory|stock|qty|quantity)/i],
  ['unit', /^(unit|uom|u\/m|unit\s*of\s*measure|per)$/i],
  ['price', /(unit\s*)?(price|cost)/i],
  ['supplier', /(supplier|vendor|source|branch|yard|warehouse)/i],
  ['eta', /(eta|restock|back\s*in\s*stock|due|expected)/i],
];

/** "1,200" → 1200 · "Out of stock" / "OOS" → 0 · "In stock" → inStock · "" → unknown. */
export function parseStock(text) {
  const s = clean(text, 60).toLowerCase();
  if (!s) return { stock: null, inStock: null };
  if (/^(out of stock|oos|none|sold out|nil)$/.test(s)) return { stock: 0, inStock: false };
  if (/^(in stock|yes|available|y)$/.test(s)) return { stock: null, inStock: true };
  const m = /^([<>~≥≤]?\s*)?(\d[\d,]*(?:\.\d+)?)\s*\+?\s*([a-z.\/²³]*)$/.exec(s);
  if (!m) return { stock: null, inStock: null };
  const n = Number(m[2].replace(/,/g, ''));
  return Number.isFinite(n) && n >= 0 && n <= 1e12 ? { stock: n, inStock: n > 0 } : { stock: null, inStock: null };
}
/** "5 days" · "2 wks" · "2-3 weeks" (the longer) · "3 months" · "same day" / "stock" → 0 · "backorder" → null + backorder. `bare` = the unit of a plain number. */
export function parseLead(text, bare = 'day') {
  const s = clean(text, 60).toLowerCase();
  if (!s) return { lead: null, backorder: false };
  if (/back\s*order|tbd|call|unknown|n\/a|discontinued/.test(s)) return { lead: null, backorder: true };
  if (/^(same day|immediate|immediately|stock|in stock|now|next day)$/.test(s)) return { lead: /next/.test(s) ? 1 : 0, backorder: false };
  const re = /(\d+(?:\.\d+)?)(?:\s*[-–to]+\s*(\d+(?:\.\d+)?))?\s*(day|d\b|business day|week|wk|w\b|month|mo\b)?/;
  const m = re.exec(s);
  if (!m) return { lead: null, backorder: false };
  const n = Math.max(Number(m[1]), m[2] ? Number(m[2]) : 0), u = (m[3] || bare).replace(/s$/, '');
  const days = /^(week|wk|w)/.test(u) ? n * 7 : /^(month|mo)/.test(u) ? n * 30 : /^business/.test(u) ? Math.ceil(n * 7 / 5) : n;
  return days >= 0 && days <= 3650 ? { lead: Math.round(days * 10) / 10, backorder: false } : { lead: null, backorder: false };
}
const money = (text) => { const m = /(\d[\d,]*(?:\.\d+)?)/.exec(String(text ?? '')); if (!m) return null; const n = Number(m[1].replace(/,/g, '')); return Number.isFinite(n) && n >= 0 && n < 1e9 ? Math.round(n * 10000) : null; };   // the model's rate units (1/10000 $)

export function readSupplyCsv(text) { return readSupplyRows(parseCsv(text)); }
/** The same reading over rows of cells already split (a CSV's, or an Excel sheet's from xlsx-read.js). */
export function readSupplyRows(all) {
  all = (Array.isArray(all) ? all : []).map((r) => (Array.isArray(r) ? r.map((c) => String(c ?? '')) : []));
  if (!all.length) return { ok: false, error: 'The file is empty.' };
  let hi = all.findIndex((r) => r.filter((c) => c && c.trim()).length >= 2);
  if (hi < 0) return { ok: false, error: 'The file has no header row.' };
  const head = all[hi].map((h) => clean(h, 80));
  const col = {};
  head.forEach((h, i) => { for (const [k, re] of HEAD) if (col[k] === undefined && re.test(h)) { col[k] = i; break; } });
  if (col.name === undefined && col.sku === undefined) return { ok: false, error: 'No Item, Name, Description or SKU column was found in the header row.' };
  if (col.stock === undefined && col.lead === undefined) return { ok: false, error: 'No stock or lead-time column was found in the header row.' };
  const leadBare = /week|wk/i.test(head[col.lead] || '') ? 'week' : /month/i.test(head[col.lead] || '') ? 'month' : 'day';
  const rows = [], warnings = [];
  let skipped = 0;
  for (const r of all.slice(hi + 1)) {
    if (!r.some((c) => c && c.trim())) continue;
    const g = (k) => (col[k] === undefined ? '' : r[col[k]] ?? '');
    const name = clean(g('name')), sku = clean(g('sku'), 60);
    if (!name && !sku) { skipped++; continue; }
    const st = parseStock(g('stock')), ld = parseLead(g('lead'), leadBare);
    if (st.stock === null && st.inStock === null && ld.lead === null && !ld.backorder) { skipped++; continue; }
    if (rows.length >= 20000) { warnings.push('Only the first 20,000 rows were read.'); break; }
    rows.push({ name: name || sku, sku, unit: clean(g('unit'), 12), ...st, ...ld, price: col.price === undefined ? null : money(g('price')), supplier: clean(g('supplier'), 80), eta: clean(g('eta'), 40) });
  }
  if (skipped) warnings.push(skipped + (skipped === 1 ? ' row had no name or no stock and lead time and was left out.' : ' rows had no name or no stock and lead time and were left out.'));
  if (!rows.length) return { ok: false, error: 'No row had an item and a stock or lead time.' };
  return { ok: true, rows, warnings };
}

// ---- the part kept in the project file ----
export const emptySupply = () => ({ v: 1, leadDays: 14, sources: [], ignore: [] });
const rowOk = (r) => r && typeof r === 'object' && clean(r.name);
const cleanRow = (r) => ({ name: clean(r.name), sku: clean(r.sku, 60), unit: clean(r.unit, 12), stock: Number.isFinite(r.stock) && r.stock >= 0 && r.stock <= 1e12 ? r.stock : null, inStock: typeof r.inStock === 'boolean' ? r.inStock : null,
  lead: Number.isFinite(r.lead) && r.lead >= 0 && r.lead <= 3650 ? r.lead : null, backorder: r.backorder === true, price: Number.isInteger(r.price) && r.price >= 0 && r.price < 1e13 ? r.price : null, supplier: clean(r.supplier, 80), eta: clean(r.eta, 40) });
export function readSupply(json) {
  const s = emptySupply();
  if (!json || typeof json !== 'object' || json.v !== 1) return null;
  if (Number.isFinite(json.leadDays) && json.leadDays >= 0 && json.leadDays <= 3650) s.leadDays = json.leadDays;
  let n = 0;
  for (const src of (Array.isArray(json.sources) ? json.sources : []).slice(0, LIMIT.sources)) {
    const rows = (Array.isArray(src?.rows) ? src.rows : []).filter(rowOk).slice(0, Math.max(0, LIMIT.rows - n)).map(cleanRow);
    n += rows.length;
    if (rows.length) s.sources.push({ name: clean(src.name, 120) || 'Supplier file', at: typeof src.at === 'string' ? src.at.slice(0, 24) : '', rows });
  }
  s.ignore = (Array.isArray(json.ignore) ? json.ignore : []).filter((x) => typeof x === 'string' && x.length <= 80).slice(0, 500);
  return s.sources.length || s.ignore.length ? s : null;
}
export const writeSupply = (s) => JSON.parse(JSON.stringify(s));

/** What the estimate needs, in each row's unit, with waste: [{ id, itemId, name, unit, need }] (rows with an error or no quantity are left out). */
export function needsOf(est) {
  const out = [];
  for (const r of est.rows) {
    if (r.error || !(r.qtyW > 0) || r.type === 'fixed') continue;
    out.push({ id: r.compId ? r.itemId + ':' + r.compId : r.cond ? r.itemId + '#' + r.cond : r.itemId, itemId: r.itemId, name: r.name, unit: String(r.unit || ''), need: r.qtyW });
  }
  return out;
}

const words = (k) => new Set(k.split(' ').filter(Boolean));
/** Which supplier row is for this need: the same name, else the SKU in the name, else one name inside the other (a lower rank, `exact` false). */
function matchRow(need, rows) {
  const key = keyOf(need.name), ws = words(key);
  let best = null;
  for (const r of rows) {
    const rk = keyOf(r.name);
    let rank = 0;
    if (rk && rk === key) rank = 3;
    else if (r.sku && ws.has(keyOf(r.sku))) rank = 2;
    else if (rk && key) { const rw = words(rk); if ([...ws].every((x) => rw.has(x)) || [...rw].every((x) => ws.has(x))) rank = 1; }
    if (rank && (!best || rank > best.rank || (rank === best.rank && betterRow(r, best.row)))) best = { row: r, rank };
  }
  return best;
}
const betterRow = (a, b) => (a.stock ?? -1) > (b.stock ?? -1);
const unitKey = (u) => String(u || '').toLowerCase().replace(/[^a-z0-9²³]/g, '');
const SAME = [['ea', 'each', 'pc', 'pcs', 'piece', 'pieces', 'unit', 'units'], ['lf', 'ft', 'linearfeet', 'linearfoot'], ['sf', 'sqft', 'squarefeet'], ['sy', 'sqyd'], ['cy', 'cuyd']];
const sameUnit = (a, b) => { const x = unitKey(a), y = unitKey(b); return !x || !y || x === y || SAME.some((g) => g.includes(x) && g.includes(y)); };

/** A file's rows join the project's list (the same name from the same file replaces); the rows that match something in the estimate come first when there are too many. */
export function addSource(supply, src, est) {
  const out = supply ? readSupply(JSON.parse(JSON.stringify(supply))) || emptySupply() : emptySupply();
  const needs = est ? needsOf(est) : [];
  const keys = needs.map((n) => keyOf(n.name)), ws = needs.map((n) => words(keyOf(n.name)));
  const score = (r) => { const rk = keyOf(r.name); return keys.includes(rk) || ws.some((w) => r.sku && w.has(keyOf(r.sku))) ? 2 : ws.some((w) => { const rw = words(rk); return [...w].every((x) => rw.has(x)) || [...rw].every((x) => w.has(x)); }) ? 1 : 0; };
  const rows = src.rows.map((r, i) => ({ r, s: score(r), i })).sort((a, b) => b.s - a.s || a.i - b.i);
  const kept = rows.slice(0, LIMIT.rows).map((x) => cleanRow(x.r));
  out.sources = out.sources.filter((s) => s.name !== src.name);
  out.sources.push({ name: clean(src.name, 120), at: src.at || '', rows: kept });
  while (out.sources.length > LIMIT.sources) out.sources.shift();
  let n = 0;
  for (const s of out.sources) { s.rows = s.rows.slice(0, Math.max(0, LIMIT.rows - n)); n += s.rows.length; }
  return { supply: out, kept: kept.length, dropped: src.rows.length - kept.length, matched: rows.filter((x) => x.s > 0).length };
}

/** Each need against the supplier rows. status: ok · short (stock below the need) · late (lead time over the person's limit) · unknown (no stock figure) · unit (the supplier's unit is not the estimate's). */
export function check(est, supply) {
  const all = (supply?.sources || []).flatMap((s) => s.rows.map((r) => ({ ...r, source: s.name })));
  const ignore = new Set(supply?.ignore || []);
  const limit = supply?.leadDays ?? 14;
  const rows = [], unmatched = [];
  for (const n of needsOf(est)) {
    if (ignore.has(n.id)) continue;
    const m = all.length ? matchRow(n, all) : null;
    if (!m) { unmatched.push(n); continue; }
    const r = m.row;
    const base = { ...n, row: r, exact: m.rank >= 2, stock: r.stock, lead: r.lead, backorder: r.backorder, supplier: r.supplier || r.source, price: r.price };
    if (!sameUnit(n.unit, r.unit)) { rows.push({ ...base, status: 'unit' }); continue; }
    const short = r.stock !== null ? Math.max(0, n.need - r.stock) : r.inStock === false ? n.need : null;
    const status = short > 0 ? 'short' : (r.lead !== null && r.lead > limit) || r.backorder ? (r.inStock === true || (r.stock !== null && r.stock >= n.need) ? 'ok' : 'late') : short === null && r.stock === null && r.inStock === null ? 'unknown' : 'ok';
    rows.push({ ...base, short: short || 0, status });
  }
  const waiting = rows.filter((r) => (r.status === 'short' || r.status === 'late') && r.lead !== null);
  const critical = waiting.length ? waiting.reduce((a, b) => (b.lead > a.lead ? b : a)) : null;
  return { rows, unmatched, critical, leadDays: limit };
}

/** Problems in the shared shape (rule 29). `t(key, vars)` words them; ids do not change with the language. */
export function problemsOf(res, { t = (k) => k, fmt = (n) => String(Math.round(n * 100) / 100) } = {}) {
  const out = [];
  for (const r of res.rows) {
    const about = [{ kind: 'item', id: r.itemId, label: r.name }];
    if (r.status === 'short') {
      const vars = { name: r.name, need: fmt(r.need), stock: r.stock === null ? '0' : fmt(r.stock), unit: r.unit, short: fmt(r.short) };
      out.push({ id: 'takeoffcraft:supply.short:' + r.id, code: 'supply.short', severity: 'warning', about, msg: { key: 'eg51.prob.short', vars }, text: t('eg51.prob.short', vars),
        req: { op: '>=', value: Math.round(r.need * 100) / 100, unit: r.unit }, found: { value: r.stock === null ? 0 : r.stock, unit: r.unit }, acceptable: true });
    } else if (r.status === 'late') {
      const vars = { name: r.name, lead: r.lead === null ? '?' : fmt(r.lead), limit: fmt(res.leadDays) };
      out.push({ id: 'takeoffcraft:supply.lead:' + r.id, code: 'supply.lead', severity: 'note', about, msg: { key: r.backorder ? 'eg51.prob.back' : 'eg51.prob.lead', vars }, text: t(r.backorder ? 'eg51.prob.back' : 'eg51.prob.lead', vars),
        ...(r.lead !== null ? { req: { op: '<=', value: res.leadDays, unit: 'days' }, found: { value: r.lead, unit: 'days' } } : {}), acceptable: true });
    }
  }
  return out;
}

// ---- supplier prices into the price Library (library.js entries; EG.51, takeoff_PART_3) ----
/** The supplier row a library entry is priced from: the best match of the entry's name (same name > SKU in the name > one name inside the other), among rows with a price; the cheaper wins a tie. */
function priced(name, rows) {
  const key = keyOf(name), ws = words(key);
  let best = null;
  for (const r of rows) {
    if (r.price === null || r.price === undefined) continue;
    const rk = keyOf(r.name);
    let rank = 0;
    if (rk && rk === key) rank = 3;
    else if (r.sku && ws.has(keyOf(r.sku))) rank = 2;
    else if (rk && key) { const rw = words(rk); if ([...ws].every((x) => rw.has(x)) || [...rw].every((x) => ws.has(x))) rank = 1; }
    if (rank && (!best || rank > best.rank || (rank === best.rank && r.price < best.row.price))) best = { row: r, rank };
  }
  return best;
}
/**
 * Supplier prices into the price Library. For each library entry with a priced supplier row of the same name (and a unit that is the same, or not
 * said), the entry's material rate becomes the supplier's price; labour, waste, height and assembly stay. Components are not priced (a supplier lists
 * products, not formulas). The entry's note says where the price came from. Nothing is changed that the file did not name.
 * → { lib (a new list), updated: [{ name, from, to, supplier, file, exact }], skipped: [{ name, why: 'noprice' | 'unit' | 'similar' }] }
 * `only` = 'exact' leaves a similar-name match (rank 1) out. Rates are in the model's units (1/10000 of a dollar).
 */
export function libraryPrices(lib, supply, { only = 'any', at = new Date().toISOString().slice(0, 10) } = {}) {
  const all = (supply?.sources || []).flatMap((s) => s.rows.map((r) => ({ ...r, file: s.name })));
  const updated = [], skipped = [];
  const out = (lib || []).map((e) => {
    const m = priced(e.name, all);
    if (!m) { skipped.push({ name: e.name, why: 'noprice' }); return e; }
    if (!sameUnit(e.unit, m.row.unit)) { skipped.push({ name: e.name, why: 'unit' }); return e; }
    if (only === 'exact' && m.rank < 2) { skipped.push({ name: e.name, why: 'similar' }); return e; }
    if (m.row.price === e.mat) return e;
    updated.push({ name: e.name, from: e.mat, to: m.row.price, supplier: m.row.supplier || m.row.file, file: m.row.file, exact: m.rank >= 2 });
    return { ...e, mat: m.row.price, note: clean('Material price from ' + (m.row.supplier || m.row.file) + ' (' + m.row.file + ', ' + at + ').', 1000) };   // i18n-ignore: a note kept with the entry
  });
  return { lib: out, updated, skipped };
}
