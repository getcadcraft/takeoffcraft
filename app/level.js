/* SPDX-License-Identifier: Apache-2.0 */
/**
 * level.js — bid packages and bid leveling (0.6 LC.13 B1 + B2, spike docs/spikes/LC.13_PART_2.md). DOM-free (tested in Node).
 *
 * A bid package is the estimate's scope for one trade: the items of one CSI division (items without a CSI number make their
 * own package, key ''). Its scope lines are the items (quantity, unit, our own cost = the item's estimate rows — item, second
 * conditions, assembly parts — before markups) and the sheets their marks are on.
 *
 *   state.bids = [{ id 'v<n>', pkg ('' | '03' …), bidder, amount (cents), excl: [item ids the bid leaves out], note }]
 *
 * Leveling puts a package's bids side by side on the same scope: each left-out item is filled with a plug at our own cost of
 * it, so leveled = amount + Σ plugs. The low bid is the lowest leveled one (the first entered on a tie).
 *
 *   bidPackages(state, est, { title }) → [{ key, title, items: [{ itemId, name, csi, qty, unit, cost, sheets }], sheets: [key], cost }]
 *   leveling(state, est, { title }) → [{ pkg, ours, bids: [{ bid, plugs: [{ itemId, name, cost }], plug, leveled, diff }], low }]
 *   packageCsv(pkg, sheetLabel) → CSV text (no prices): what to send a subcontractor
 *   cleanBid(raw, items) · cleanBids(list, items) · addBid(model, fields) · updateBid(model, id, patch) · removeBid(model, id)
 * est is model.baseEstimate(state) (the base bid: add alternates left out), as the bid summary uses.
 */

import { t } from './i18n.js';

export const BID_LIMITS = { bids: 500, bidder: 120, note: 400 };
export const pkgOf = (it) => (it?.csi ? it.csi.slice(0, 2) : '');
const str = (v, max) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

/** A bid, clean, or null. `items`: Map(id → item) of the takeoff (left-out items must be in the bid's package). */
export function cleanBid(raw, items) {
  if (!raw || typeof raw !== 'object') return null;
  const pkg = typeof raw.pkg === 'string' && /^(\d{2})?$/.test(raw.pkg) ? raw.pkg : null;
  const bidder = str(raw.bidder, BID_LIMITS.bidder);
  if (pkg === null || !bidder) return null;
  const amount = Number.isInteger(raw.amount) && raw.amount >= 0 && raw.amount <= 1e13 ? raw.amount : 0;
  const excl = [...new Set((Array.isArray(raw.excl) ? raw.excl : []).filter((id) => typeof id === 'string' && items.has(id) && pkgOf(items.get(id)) === pkg))];
  return { id: String(raw.id), pkg, bidder, amount, excl, note: str(raw.note, BID_LIMITS.note) };
}
export function cleanBids(list, items) {
  const out = [], ids = new Set();
  for (const raw of (Array.isArray(list) ? list : []).slice(0, BID_LIMITS.bids)) {
    if (!raw || typeof raw.id !== 'string' || !/^[A-Za-z0-9_-]{1,40}$/.test(raw.id) || ids.has(raw.id)) continue;
    const b = cleanBid(raw, items);
    if (b) { ids.add(b.id); out.push(b); }
  }
  return out;
}

/** Our own cost of each item: the sum of its estimate rows (item, conditions, assembly parts), errors left out. */
function itemCosts(est) {
  const m = new Map();
  for (const r of est.rows) if (!r.error) m.set(r.itemId, (m.get(r.itemId) || 0) + r.total);
  return m;
}

export function bidPackages(state, est, { title = (k) => k } = {}) {
  const cost = itemCosts(est), qrow = new Map(est.rows.filter((r) => r.kind === 'item').map((r) => [r.itemId, r]));
  const sheets = new Map();
  for (const m of state.marks) { if (!sheets.has(m.item)) sheets.set(m.item, new Set()); sheets.get(m.item).add(m.sheet); }
  const by = new Map();
  for (const it of state.items) {
    const k = pkgOf(it);
    const p = by.get(k) || { key: k, title: title(k), items: [], sheets: new Set(), cost: 0 };
    const r = qrow.get(it.id);
    p.items.push({ itemId: it.id, name: it.name, csi: it.csi || '', qty: r && !r.error ? r.qty : null, unit: r?.unit || '', cost: cost.get(it.id) || 0, sheets: [...(sheets.get(it.id) || [])] });
    p.cost += cost.get(it.id) || 0;
    for (const s of sheets.get(it.id) || []) p.sheets.add(s);
    by.set(k, p);
  }
  return [...by.values()].sort((a, b) => (a.key || '99').localeCompare(b.key || '99')).map((p) => ({ ...p, sheets: [...p.sheets] }));
}

export function leveling(state, est, opts = {}) {
  const pk = new Map(bidPackages(state, est, opts).map((p) => [p.key, p]));
  const out = [];
  for (const [key, pkg] of pk) {
    const bids = (state.bids || []).filter((b) => b.pkg === key);
    if (!bids.length) continue;
    const inPkg = new Map(pkg.items.map((x) => [x.itemId, x]));
    const rows = bids.map((bid) => {
      const plugs = bid.excl.filter((id) => inPkg.has(id)).map((id) => ({ itemId: id, name: inPkg.get(id).name, cost: inPkg.get(id).cost }));
      const plug = plugs.reduce((n, x) => n + x.cost, 0), leveled = bid.amount + plug;
      return { bid, plugs, plug, leveled, diff: leveled - pkg.cost };
    });
    let low = null;
    for (const r of rows) if (!low || r.leveled < low.leveled) low = r;
    out.push({ pkg, ours: pkg.cost, bids: rows, low: low.bid.id });
  }
  return out;
}

const cell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
/** A package's scope for a subcontractor: item, CSI number, quantity, unit, the sheets its marks are on. No prices. */
export function packageCsv(pkg, sheetLabel = (k) => k) {
  const lines = [[t('pkg.csv.title', { pkg: pkg.title })], ['item', 'csi', 'qty', 'unit', 'sheets'].map((k) => t('pkg.csv.' + k))];
  for (const x of pkg.items) lines.push([x.name, x.csi, x.qty === null ? '' : Math.round(x.qty * 10000) / 10000, x.unit, x.sheets.map(sheetLabel).join('; ')]);
  lines.push([], [t('pkg.csv.sheets'), pkg.sheets.map(sheetLabel).join('; ')]);
  return lines.map((l) => l.map(cell).join(',')).join('\r\n') + '\r\n';
}

// ---- edits, each one undo step ----
const itemsMap = (s) => new Map(s.items.map((i) => [i.id, i]));
export function addBid(model, fields) {
  let id = null;
  model.change(t('undo.bid.add'), (s) => {
    s.bids ??= [];
    if (s.bids.length >= BID_LIMITS.bids) throw new Error(t('err.bids.many'));
    const b = cleanBid({ ...fields, id: 'x' }, itemsMap(s));
    if (!b) return false;
    id = model.nextId('v');
    s.bids.push({ ...b, id });
  });
  return id;
}
export function updateBid(model, id, patch, label = t('undo.bid.edit')) {
  return model.change(label, (s) => {
    const i = (s.bids || []).findIndex((b) => b.id === id);
    if (i < 0) return false;
    const b = cleanBid({ ...s.bids[i], ...patch, id, pkg: s.bids[i].pkg }, itemsMap(s));
    if (!b || JSON.stringify(b) === JSON.stringify(s.bids[i])) return false;
    s.bids[i] = b;
  });
}
export function removeBid(model, id) {
  return model.change(t('undo.bid.remove'), (s) => {
    const n = (s.bids || []).length;
    s.bids = (s.bids || []).filter((b) => b.id !== id);
    if (s.bids.length === n) return false;
  });
}
