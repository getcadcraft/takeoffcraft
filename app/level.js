/* SPDX-License-Identifier: Apache-2.0 */
/**
 * level.js — bid packages and bid leveling (0.6 LC.13 B1 + B2, spike docs/spikes/LC.13_PART_2.md). DOM-free (tested in Node).
 *
 * A bid package is the estimate's scope for one trade: the items of one CSI division (items without a CSI number make their
 * own package, key ''). Its scope lines are the items (quantity, unit, our own cost = the item's estimate rows — item, second
 * conditions, assembly parts — before markups) and the sheets their marks are on.
 *
 *   state.bids = [{ id 'v<n>', pkg ('' | '03' …), bidder, amount (cents), excl: [item ids the bid leaves out], note,
 *                   src? { p: package uuid, r: response uuid, v: revision, late } — a bid that came back through the website (0.7 B4) }]
 *   state.bidreqs = [{ uuid, pkg, title, at, due, opens, n }] — the packages sent to the site (0.7 B4); mergeReview() pulls their bids in
 *
 * Leveling puts a package's bids side by side on the same scope: each left-out item is filled with a plug at our own cost of
 * it, so leveled = amount + Σ plugs. The low bid is the lowest leveled one (the first entered on a tie).
 *
 *   bidPackages(state, est, { title }) → [{ key, title, items: [{ itemId, name, csi, qty, unit, cost, sheets }], sheets: [key], cost }]
 *   leveling(state, est, { title }) → [{ pkg, ours, bids: [{ bid, plugs: [{ itemId, name, cost }], plug, leveled, diff }], low }]
 *   packageCsv(pkg, sheetLabel) → CSV text (no prices): what to send a subcontractor
 *   cleanBid(raw, items) · cleanBids(list, items) · addBid(model, fields) · updateBid(model, id, patch) · removeBid(model, id)
 * est is model.baseEstimate(state, { awards: false }) (the base bid without the awards: add alternates left out, every item at our
 * own price), so a package's "ours" never moves when a bid is chosen.
 *
 * Awards (0.7 LC.13 B3): state.awards = [{ pkg, bid }] — the bid chosen for a package. In the base bid the chosen bid is the
 * package's price: the package's items stay as quantities but their own pricing (item, second conditions, assembly parts)
 * drops out, except the items the bid leaves out, which stay at our own cost (the leveling's plugs). One subcontract row per
 * award carries the bid's amount. Choosing another bid, or none, is one undo step.
 *
 *   applyAwards(state, est) → est with the awarded packages' rows at zero + a `kind: 'subcontract'` row each, `subTotal`
 *   setAward(model, pkg, bidId | null) · cleanAwards(list, bids)
 */

import { t } from './i18n.js';

export const BID_LIMITS = { bids: 500, bidder: 120, note: 400, requests: 200 };
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
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
  const out = { id: String(raw.id), pkg, bidder, amount, excl, note: str(raw.note, BID_LIMITS.note) };
  const sr = raw.src;
  if (sr && typeof sr === 'object' && UUID_RE.test(sr.p) && UUID_RE.test(sr.r)) out.src = { p: sr.p, r: sr.r, v: Number.isInteger(sr.v) && sr.v >= 1 && sr.v < 1e6 ? sr.v : 1, late: sr.late === true };
  return out;
}

/** The packages sent to the site, clean (an untrusted file): [{ uuid, pkg, title, at (ISO), due, opens, n }]. */
export function cleanRequests(list) {
  const out = [], seen = new Set();
  const iso = (v) => (typeof v === 'string' && v.length <= 40 && !Number.isNaN(Date.parse(v)) ? v : '');
  for (const r of (Array.isArray(list) ? list : []).slice(0, BID_LIMITS.requests)) {
    if (!r || typeof r !== 'object' || !UUID_RE.test(r.uuid) || seen.has(r.uuid) || typeof r.pkg !== 'string' || !/^(\d{2})?$/.test(r.pkg)) continue;
    seen.add(r.uuid);
    out.push({ uuid: r.uuid, pkg: r.pkg, title: str(r.title, 160), at: iso(r.at), due: iso(r.due), opens: iso(r.opens), n: Number.isInteger(r.n) && r.n >= 0 && r.n < 1e4 ? r.n : 0 });
  }
  return out;
}
/** Record a package sent to the site (one undo step); invitations added later bump `n`. */
export function addRequest(model, req) {
  return model.change(t('undo.bidreq'), (s) => {
    const c = cleanRequests([req])[0];
    if (!c) return false;
    s.bidreqs ??= [];
    const i = s.bidreqs.findIndex((x) => x.uuid === c.uuid);
    if (i >= 0) s.bidreqs[i] = { ...s.bidreqs[i], ...c, n: Math.max(s.bidreqs[i].n, c.n) };
    else { if (s.bidreqs.length >= BID_LIMITS.requests) throw new Error(t('err.bids.many')); s.bidreqs.push(c); }
  });
}
/**
 * Pull the prices that came back for one package (the API's review: GET /api/v1/bids/packages/<uuid>) into the takeoff's bids.
 * A response is matched by its uuid (src.r): new → added; known and its revision grew → amount, left-out lines and note replaced;
 * known and unchanged → left alone (so the estimator's own edits to a bid stay until the bidder sends a new price). Declined
 * answers are counted, not added. One undo step, none when nothing changed. → { added, updated, declined, late, sealed, waiting }
 */
export function mergeReview(model, review) {
  const out = { added: 0, updated: 0, declined: 0, late: 0, sealed: !!review?.sealed, waiting: 0 };
  const pkgKey = typeof review?.package?.pkg === 'string' ? review.package.pkg : null;
  const puuid = review?.package?.uuid;
  if (pkgKey === null || !UUID_RE.test(puuid)) return out;
  out.waiting = (review.invitations || []).filter((i) => !i.answered).length;
  if (out.sealed) return out;
  const list = (Array.isArray(review.bids) ? review.bids : []).slice(0, BID_LIMITS.bids);
  out.declined = list.filter((b) => b.declined).length;
  model.change(t('undo.bid.sync'), (s) => {
    s.bids ??= [];
    const items = itemsMap(s);
    for (const b of list) {
      if (b.declined || !UUID_RE.test(b.response)) continue;
      const src = { p: puuid, r: b.response, v: Math.max(1, Number(b.revision) | 0), late: b.late === true };
      const fields = { pkg: pkgKey, bidder: b.bidder, amount: b.amount_cents, excl: b.excl, note: b.note, src };
      const i = s.bids.findIndex((x) => x.src?.r === b.response);
      if (i >= 0) {
        if (src.v <= s.bids[i].src.v) continue;
        const c = cleanBid({ ...fields, id: s.bids[i].id }, items);
        if (c) { s.bids[i] = c; out.updated++; }
      } else {
        if (s.bids.length >= BID_LIMITS.bids) break;
        const c = cleanBid({ ...fields, id: 'x' }, items);
        if (c) { s.bids.push({ ...c, id: model.nextId('v') }); out.added++; }
      }
      if (src.late) out.late++;
    }
    if (!out.added && !out.updated) return false;
  });
  return out;
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

/** The awards, clean: one per package, the bid must exist and belong to the package. */
export function cleanAwards(list, bids) {
  const out = [], seen = new Set();
  for (const a of Array.isArray(list) ? list : []) {
    if (!a || typeof a.pkg !== 'string' || typeof a.bid !== 'string' || seen.has(a.pkg)) continue;
    const b = (bids || []).find((x) => x.id === a.bid);
    if (!b || b.pkg !== a.pkg) continue;
    seen.add(a.pkg);
    out.push({ pkg: a.pkg, bid: a.bid });
  }
  return out;
}

/** The base bid with the chosen bids in it (see the header). Without awards, est itself. */
export function applyAwards(state, est) {
  const awards = cleanAwards(state.awards, state.bids);
  if (!awards.length) return est;
  const byPkg = new Map(awards.map((a) => [a.pkg, state.bids.find((b) => b.id === a.bid)]));
  const items = new Map(state.items.map((i) => [i.id, i]));
  const gone = new Set();                                     // items whose own pricing the bid replaced
  for (const it of state.items) {
    const b = byPkg.get(pkgOf(it));
    if (b && !b.excl.includes(it.id)) gone.add(it.id);
  }
  const rows = est.rows.map((r) => {
    if (r.error || !gone.has(r.itemId)) return r;
    const bidder = byPkg.get(pkgOf(items.get(r.itemId))).bidder;
    const { work, ...rest } = r;                              // our rates stay (the table shows them); only the extensions drop out
    return { ...rest, matExt: 0, labExt: 0, total: 0, awarded: bidder, ownTotal: r.total };
  });
  let sub = 0;
  for (const [pkg, b] of [...byPkg].sort((x, y) => (x[0] || '99').localeCompare(y[0] || '99'))) {
    sub += b.amount;
    rows.push({ kind: 'subcontract', itemId: null, pkg, bidId: b.id, bidder: b.bidder, name: b.bidder, unit: 'LS', qty: 1, qtyW: 1, waste: 0, mat: 0, lab: 0, matExt: 0, labExt: 0, subExt: b.amount, total: b.amount, type: 'sub', marks: 0 });
  }
  let mat = 0, lab = 0, errors = 0, hours = 0, workerHours = 0;
  for (const r of rows) {
    if (r.error) { errors++; continue; }
    mat += r.matExt; lab += r.labExt;
    if (r.work) { hours += r.work.hours; workerHours += r.work.workerHours; }
  }
  return { ...est, rows, matTotal: mat, labTotal: lab, subTotal: sub, total: mat + lab + sub, errors, incomplete: errors > 0 || est.unscaled > 0, hours, workerHours, days: hours / 8 };   // 8 = model.CREW_DAY (level.js can't import model.js: model imports it)
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
    if (s.awards) { s.awards = s.awards.filter((a) => a.bid !== id); if (!s.awards.length) delete s.awards; }   // B3: no award without its bid
  });
}
/** Choose the bid for a package (or none): replaces any earlier choice for that package, one undo step. */
export function setAward(model, pkg, bidId, label = bidId ? t('undo.award.set') : t('undo.award.clear')) {
  return model.change(label, (s) => {
    const cur = s.awards || [];
    const next = !bidId ? cur.filter((a) => a.pkg !== pkg) : cur.some((a) => a.pkg === pkg) ? cur.map((a) => (a.pkg === pkg ? { pkg, bid: bidId } : a)) : [...cur, { pkg, bid: bidId }];   // a switch keeps its place
    if (bidId && cleanAwards(next, s.bids).length !== next.length) return false;      // not a bid of that package
    if (JSON.stringify(next) === JSON.stringify(s.awards || [])) return false;
    if (next.length) s.awards = next; else delete s.awards;
  });
}
