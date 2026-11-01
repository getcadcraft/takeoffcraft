/* SPDX-License-Identifier: Apache-2.0 */
/**
 * prices.js — price memory from your own jobs (0.8 EG.68, session takeoff_PART_2). DOM-free (tested in Node).
 *
 * TakeoffCraft remembers the rates you actually used on past takeoffs, item by item, so a new takeoff starts from what you paid
 * last time instead of an empty price. It is a plain list: for each item name the rates of up to the last 12 jobs. No model, no
 * network: it reads only your saved takeoffs (or a past takeoff file you point it at) and the page keeps the list in this browser
 * or Studio's storage next to the price Library (library.js), where you can see it, change a price, forget a name or clear it all.
 *
 *   emptyStore()                                   → { v: 1, off: false, names: { key: { name, type, unit, obs: [{ job, at, mat, lab, waste, unit }] } } }
 *   readStore(json) / writeStore(store)            validated both ways (untrusted storage)
 *   recordJob(store, state, jobKey, at)            → { store, seen, changed }  the takeoff's priced, used items become this job's observations
 *   statsOf(rec)                                   → { last, median, min, max, jobs, at }  rates in the model's integer rate units
 *   find(store, item)                              → { exact, similar: [rec] }  the same name and type; similar = one name inside the other
 *   plan(store, items, { mode, only, similar })    → [{ id, name, patch, from, jobs }]  what applying the memory to the takeoff's items would set
 *   forget(store, key) / clear(store)
 */

const NAME_MAX = 200, OBS_MAX = 12, NAMES_MAX = 2000, JOB_RE = /^j[0-9a-f]{16}$/;
export const LIMIT = { names: NAMES_MAX, obs: OBS_MAX };
const num = (v) => (Number.isInteger(v) && v >= 0 && v <= 1e13 ? v : 0);
const clean = (s) => String(s ?? '').replace(/[\u0000-\u001f\u007f-\u009f‪-‮⁦-⁩]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, NAME_MAX);

/** The key an item name is remembered under: lower case, letters and digits only, one space between words. */
export const keyOf = (name) => String(name ?? '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

export const emptyStore = () => ({ v: 1, off: false, names: {} });

export function readStore(json) {
  const s = emptyStore();
  if (!json || typeof json !== 'object' || json.v !== 1) return s;
  s.off = json.off === true;
  let n = 0;
  for (const [k, r] of Object.entries(json.names && typeof json.names === 'object' ? json.names : {})) {
    if (n >= NAMES_MAX) break;
    const name = clean(r?.name), key = keyOf(name);
    if (!name || !key || key !== k || !['linear', 'area', 'count', 'fixed'].includes(r.type) || !Array.isArray(r.obs)) continue;
    const obs = [];
    for (const o of r.obs.slice(-OBS_MAX)) {
      if (!o || typeof o !== 'object' || !JOB_RE.test(o.job) || !(num(o.mat) || num(o.lab))) continue;
      obs.push({ job: o.job, at: typeof o.at === 'string' ? o.at.slice(0, 24) : '', mat: num(o.mat), lab: num(o.lab), waste: num(o.waste), unit: typeof o.unit === 'string' ? o.unit.slice(0, 8) : '' });
    }
    if (!obs.length) continue;
    s.names[key] = { name, type: r.type, unit: typeof r.unit === 'string' ? r.unit.slice(0, 8) : obs[obs.length - 1].unit, obs };
    n++;
  }
  return s;
}
export const writeStore = (s) => JSON.parse(JSON.stringify(s));

/** Items worth remembering: priced, and used (a mark, or a typed quantity above zero). */
export function usedPriced(state) {
  const marked = new Set(state.marks.map((m) => m.item));
  return state.items.filter((it) => (it.mat > 0 || it.lab > 0) && (marked.has(it.id) || (it.type === 'fixed' && it.qty > 0)));
}

/** This takeoff (one job, `jobKey` from learn.js: its plan files) becomes observations; saving it again replaces its own. */
export function recordJob(store, state, jobKey, at = new Date().toISOString()) {
  const out = readStore(writeStore(store));
  if (out.off || !JOB_RE.test(jobKey || '')) return { store: out, seen: 0, changed: 0 };
  let seen = 0, changed = 0;
  for (const it of usedPriced(state)) {
    const key = keyOf(it.name);
    if (!key) continue;
    let rec = out.names[key];
    if (!rec) {
      if (Object.keys(out.names).length >= NAMES_MAX) continue;
      rec = out.names[key] = { name: clean(it.name), type: it.type, unit: it.unit, obs: [] };
    }
    if (rec.type !== it.type) continue;                                  // the same words for another kind of item: not the same price
    seen++;
    const o = { job: jobKey, at, mat: num(it.mat), lab: num(it.lab), waste: num(it.waste), unit: it.unit };
    const i = rec.obs.findIndex((x) => x.job === jobKey);
    if (i >= 0) { const p = rec.obs[i]; if (p.mat === o.mat && p.lab === o.lab && p.waste === o.waste && p.unit === o.unit) continue; rec.obs.splice(i, 1); }
    rec.obs.push(o); changed++;
    rec.obs.sort((a, b) => (a.at < b.at ? -1 : a.at > b.at ? 1 : 0));
    while (rec.obs.length > OBS_MAX) rec.obs.shift();
    rec.name = clean(it.name); rec.unit = it.unit;
  }
  return { store: out, seen, changed };
}

const median = (xs) => { const s = xs.slice().sort((a, b) => a - b), m = s.length >> 1; return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2); };
export function statsOf(rec) {
  const o = rec.obs, last = o[o.length - 1], tot = o.map((x) => x.mat + x.lab);
  return { last: { mat: last.mat, lab: last.lab, waste: last.waste, unit: last.unit }, median: { mat: median(o.map((x) => x.mat)), lab: median(o.map((x) => x.lab)), waste: median(o.map((x) => x.waste)) },
    min: Math.min(...tot), max: Math.max(...tot), jobs: o.length, at: last.at };
}

export function find(store, item) {
  const key = keyOf(item.name), rec = store.names[key];
  const exact = rec && rec.type === item.type ? rec : null;
  const words = new Set(key.split(' ').filter(Boolean));
  const similar = [];
  if (key && !exact) for (const [k, r] of Object.entries(store.names)) {
    if (r.type !== item.type || k === key) continue;
    const w = new Set(k.split(' '));
    const a = [...words].every((x) => w.has(x)), b = [...w].every((x) => words.has(x));
    if ((a || b) && Math.min(words.size, w.size) >= 1) similar.push(r);
    if (similar.length >= 3) break;
  }
  return { exact, similar };
}

/**
 * What the memory would set on the takeoff's items. mode 'last' | 'median'; only 'unpriced' (items with no material and no labor rate: default) | 'all';
 * similar = also use a similar name when there is no exact one. Waste is taken only where the item has none. Items of a different unit are skipped
 * (a price per EA is not a price per LF) and reported.
 */
export function plan(store, items, { mode = 'last', only = 'unpriced', similar = false } = {}) {
  const out = [], skipped = [];
  for (const it of items) {
    if (it.type === 'fixed' || (only === 'unpriced' && (it.mat > 0 || it.lab > 0))) continue;
    const f = find(store, it), rec = f.exact || (similar ? f.similar[0] : null);
    if (!rec) continue;
    const st = statsOf(rec), pick = mode === 'median' ? st.median : st.last;
    if (st.last.unit && st.last.unit !== it.unit) { skipped.push({ id: it.id, name: it.name, why: 'unit', was: st.last.unit, is: it.unit }); continue; }
    const patch = { mat: pick.mat, lab: pick.lab, ...(it.waste === 0 && pick.waste > 0 ? { waste: pick.waste } : {}) };
    if (patch.mat === it.mat && patch.lab === it.lab && patch.waste === undefined) continue;
    out.push({ id: it.id, name: it.name, from: rec.name, exact: !!f.exact, patch, jobs: st.jobs });
  }
  out.skipped = skipped;
  return out;
}

export function forget(store, key) { const out = readStore(writeStore(store)); delete out.names[key]; return out; }
export function clear(store) { const out = emptyStore(); out.off = store.off; return out; }
export const count = (store) => Object.keys(store.names).length;
