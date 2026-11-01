/* SPDX-License-Identifier: Apache-2.0 */
/**
 * learn.js — what TakeoffCraft learns from your takeoffs (0.8 SU.811, session sx-learn). DOM-free, no imports but the
 * language file: tested in Node (tools/takeoffcraft-test/learn.mjs).
 *
 * The owner's condition: no trained model, no network. Nothing here is sent anywhere. It learns ONLY from what the person
 * accepts, and all of it is kept in the takeoff's own project file (the optional top-level key `learn`):
 *
 *   learn = {
 *     v: 1,                         this section's own version (LEARN_VERSION). A newer one is ignored (with a warning), never the whole file.
 *     off?: true,                   "Learn from this takeoff" switched off: nothing new is learned (what is kept stays until deleted)
 *     symbols: [{ id, item: { name, color, unit }, tpl: { w, h, ink }, px, ft, th, found, runs, at, last }]
 *              symbol templates from automatic counts the person accepted: tpl = the boxed symbol as an ink raster
 *              (0 paper … 255 black, base64, w × h ≤ 160 px) at px pixels per page unit, ft = that sheet's feet per PDF
 *              unit (null: no scale), th = the match level the person accepted at, found = marks accepted, runs = searches accepted
 *     sets:    [{ id, name, at, items: [item fields without id] }]   condition sets saved by the person ("Same as last job")
 *     asm:     [{ name, type, uses, jobs: [job keys], last, item }]  assemblies (items with assembly parts) the person used, one use
 *              per job (job = the set of plan files, jobKey): ranked by uses, then by the last time
 *     repeats: [{ id, name, clip, uses, at }]                       patterns repeated on every page: clip = clipboard.js's copy of
 *              the marks (kept as data here; clipboard.js readClip validates it every time it is used)
 *   }
 *
 * File compatibility: the project format stays `takeoffcraft-project` version 1. `learn` is one more optional key; model.js
 * readProject reads only the keys it knows, so a file with `learn` opens in older TakeoffCraft builds unchanged (they leave
 * the section out when they save it again), and a file without `learn` opens here with nothing learned.
 */

import { t } from "./i18n.js";

export const LEARN_VERSION = 1;
export const LEARN_LIMITS = { symbols: 100, sets: 50, setItems: 500, asm: 500, jobs: 200, repeats: 50, repeatMarks: 2000, repeatBytes: 512 * 1024, tplMax: 160, tplMin: 4, name: 200 };
/** Two templates of the same item are one learned symbol when they are this alike (NCC on their overlap) and within 2 px in size. */
export const SAME_SYMBOL = 0.9;

const str = (v, max = LEARN_LIMITS.name) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
const isoOk = (v) => typeof v === 'string' && v.length <= 40 && /^\d{4}-\d{2}-\d{2}T[\d:.]+Z$/.test(v);
const idOk = (v) => typeof v === 'string' && /^[A-Za-z0-9_-]{1,40}$/.test(v);
const numIn = (v, lo, hi) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;
const intIn = (v, lo, hi) => Number.isInteger(v) && v >= lo && v <= hi;
const colorOk = (c) => typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c);
const sameName = (a, b) => String(a).trim().toLowerCase() === String(b).trim().toLowerCase();
const now = () => new Date().toISOString();

/** An empty learn section. */
export const emptyLearn = () => ({ v: LEARN_VERSION, symbols: [], sets: [], asm: [], repeats: [] });
/** How many things are learned (the dialog's count; 0 = nothing to show). */
export const learnedCount = (l) => (l ? l.symbols.length + l.sets.length + l.asm.length + l.repeats.length : 0);

// ---------------------------------------------------------------------------
// base64 (no Buffer / btoa: the same code in Node, the page and a worker)

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
export function toBase64(bytes) {
  let s = '';
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i], b = bytes[i + 1], c = bytes[i + 2];
    s += B64[a >> 2] + B64[((a & 3) << 4) | ((b ?? 0) >> 4)] + (b === undefined ? '=' : B64[((b & 15) << 2) | ((c ?? 0) >> 6)]) + (c === undefined ? '=' : B64[c & 63]);
  }
  return s;
}
export function fromBase64(s) {
  if (typeof s !== 'string' || s.length % 4 || !/^[A-Za-z0-9+/]*={0,2}$/.test(s)) return null;
  const pad = s.endsWith('==') ? 2 : s.endsWith('=') ? 1 : 0;
  const out = new Uint8Array(s.length / 4 * 3 - pad);
  let o = 0;
  for (let i = 0; i < s.length; i += 4) {
    const n = (B64.indexOf(s[i]) << 18) | (B64.indexOf(s[i + 1]) << 12) | ((s[i + 2] === '=' ? 0 : B64.indexOf(s[i + 2])) << 6) | (s[i + 3] === '=' ? 0 : B64.indexOf(s[i + 3]));
    if (o < out.length) out[o++] = (n >> 16) & 255;
    if (o < out.length) out[o++] = (n >> 8) & 255;
    if (o < out.length) out[o++] = n & 255;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Symbol templates (from automatic counts the person accepted; match.js does the searching)

/** match.js's template ({ data: 0…1 ink, w, h }) → what the file keeps ({ w, h, ink: base64 of 0…255 }). */
export function packTemplate(tpl) {
  const n = tpl.w * tpl.h, b = new Uint8Array(n);
  for (let i = 0; i < n; i++) b[i] = Math.max(0, Math.min(255, Math.round((tpl.data[i] || 0) * 255)));
  return { w: tpl.w, h: tpl.h, ink: toBase64(b) };
}
/** …and back, for match.js (Float32Array 0…1). Null when damaged. */
export function unpackTemplate(p) {
  if (!p || !intIn(p.w, LEARN_LIMITS.tplMin, LEARN_LIMITS.tplMax) || !intIn(p.h, LEARN_LIMITS.tplMin, LEARN_LIMITS.tplMax)) return null;
  const b = fromBase64(p.ink);
  if (!b || b.length !== p.w * p.h) return null;
  const data = new Float32Array(b.length);
  for (let i = 0; i < b.length; i++) data[i] = b[i] / 255;
  return { data, w: p.w, h: p.h };
}

/** Normalized cross-correlation of two templates over their common top-left overlap (−1 … 1; 0 when one is blank). */
export function templateNcc(a, b) {
  const w = Math.min(a.w, b.w), h = Math.min(a.h, b.h), n = w * h;
  let sa = 0, sb = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { sa += a.data[y * a.w + x]; sb += b.data[y * b.w + x]; }
  const ma = sa / n, mb = sb / n;
  let num = 0, da = 0, db = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = a.data[y * a.w + x] - ma, q = b.data[y * b.w + x] - mb;
    num += p * q; da += p * p; db += q * q;
  }
  return da > 1e-9 && db > 1e-9 ? num / Math.sqrt(da * db) : 0;
}

let seqN = 0;
const newId = (prefix, list) => {
  const used = new Set(list.map((x) => x.id));
  for (;;) { const id = prefix + (++seqN).toString(36) + Math.floor(Math.random() * 1296).toString(36); if (!used.has(id)) return id; }
};

/**
 * Remember a symbol the person just accepted from an automatic count. Mutates `learn`.
 *   run: { item: { name, color, unit }, tpl (match.js template), px, ft, th, n (marks accepted), at? }
 * The same item with a template this alike (SAME_SYMBOL, ±2 px) adds to the symbol it already knows (found += n, runs + 1,
 * th = this run's); otherwise a new symbol. Over the limit, the least-found one goes. → { id, merged } | null (nothing to learn)
 */
export function learnSymbol(learn, run) {
  if (!learn || learn.off || !(run?.n > 0) || !run.tpl || !str(run.item?.name)) return null;
  const tpl = run.tpl;
  if (!intIn(tpl.w, LEARN_LIMITS.tplMin, LEARN_LIMITS.tplMax) || !intIn(tpl.h, LEARN_LIMITS.tplMin, LEARN_LIMITS.tplMax)) return null;
  const at = isoOk(run.at) ? run.at : now();
  const th = numIn(run.th, 0.5, 0.99) ? Math.round(run.th * 100) / 100 : 0.75;
  for (const s of learn.symbols) {
    if (!sameName(s.item.name, run.item.name) || Math.abs(s.tpl.w - tpl.w) > 2 || Math.abs(s.tpl.h - tpl.h) > 2) continue;
    const known = unpackTemplate(s.tpl);
    if (!known || templateNcc(known, tpl) < SAME_SYMBOL) continue;
    s.found += run.n; s.runs += 1; s.th = th; s.last = at;
    return { id: s.id, merged: true };
  }
  const sym = {
    id: newId('s', learn.symbols),
    item: { name: str(run.item.name), color: colorOk(run.item.color) ? run.item.color.toUpperCase() : '#1F77B4', unit: str(run.item.unit, 20) || 'EA' },
    tpl: packTemplate(tpl), px: numIn(run.px, 0.01, 100) ? run.px : 1, ft: numIn(run.ft, 1e-9, 1e6) ? run.ft : null,
    th, found: run.n, runs: 1, at, last: at,
  };
  learn.symbols.push(sym);
  if (learn.symbols.length > LEARN_LIMITS.symbols) {
    let low = 0;
    learn.symbols.forEach((s, i) => { if (s.found < learn.symbols[low].found) low = i; });
    learn.symbols.splice(low, 1);
  }
  return { id: sym.id, merged: false };
}
/** A learned symbol's search was accepted again: count it. Mutates. */
export function symbolUsed(learn, id, n, th, at = now()) {
  const s = learn?.symbols.find((x) => x.id === id);
  if (!s || !(n > 0) || learn.off) return false;
  s.found += n; s.runs += 1; s.last = isoOk(at) ? at : now();
  if (numIn(th, 0.5, 0.99)) s.th = Math.round(th * 100) / 100;
  return true;
}
/**
 * The pixel sizes to search a sheet at so a learned symbol keeps its size: the template's own, and — when both sheets have
 * a scale and they differ — the one that keeps a symbol drawn to scale the same size (tags printed at one paper size do not
 * change, so both are searched, as Auto count does across scales).
 */
export function searchScales(sym, targetFt) {
  const px = sym.px;
  if (sym.ft > 0 && targetFt > 0 && Math.abs(targetFt / sym.ft - 1) > 0.01) return [px * targetFt / sym.ft, px];
  return [px];
}

// ---------------------------------------------------------------------------
// Condition sets ("Same as last job")

/** The fields of an item worth keeping in a set (no id, no marks): what a library entry keeps, plus colour, conditions and CSI. */
export function setItem(it) {
  const o = { name: it.name, type: it.type, color: it.color, unit: it.unit, heightFt: it.heightFt || 0, waste: it.waste || 0, mat: it.mat || 0, lab: it.lab || 0 };
  for (const k of ['conds', 'crew', 'csi', 'pitch', 'slope', 'thickFt', 'baseFt', 'headFt', 'backout']) if (it[k] !== undefined) o[k] = JSON.parse(JSON.stringify(it[k]));
  o.components = (it.components || []).map((c, i) => ({ id: 'c' + (i + 1), name: c.name, unit: c.unit, formula: c.formula, waste: c.waste, mat: c.mat, lab: c.lab }));
  return o;
}
/** Save these items as a named set (a set of the same name is replaced in place). Mutates. → the set's id | null */
export function saveSet(learn, name, items, at = now()) {
  const n = str(name);
  const list = items.filter((i) => i && i.type).slice(0, LEARN_LIMITS.setItems).map(setItem);
  if (!learn || !n || !list.length) return null;
  const old = learn.sets.find((s) => sameName(s.name, n));
  if (old) { old.items = list; old.at = at; old.name = n; return old.id; }
  if (learn.sets.length >= LEARN_LIMITS.sets) return null;
  const set = { id: newId('k', learn.sets), name: n, at, items: list };
  learn.sets.push(set);
  return set.id;
}
/**
 * Which of a set's items a takeoff does not have yet (same name and type = has it). → { add: [item fields], have: [names] }
 */
export function setPlan(set, items) {
  const has = (f) => items.some((i) => i.type === f.type && sameName(i.name, f.name));
  return { add: set.items.filter((f) => !has(f)), have: set.items.filter(has).map((f) => f.name) };
}

// ---------------------------------------------------------------------------
// Assemblies, ranked by how often the person used them

/**
 * A job's key: the plan files it is taken off (their content hashes, in any order), so saving the same takeoff again counts
 * once, and the same assemblies on new plans count again. No plans → '' (not a job yet). FNV-1a 64, hex.
 */
export function jobKey(state) {
  const hs = (state?.files || []).map((f) => f.hash).filter((h) => typeof h === 'string').sort();
  if (!hs.length) return '';
  let h1 = 0x811c9dc5, h2 = 0xcbf29ce4;
  for (const ch of hs.join('|')) {
    const c = ch.charCodeAt(0);
    h1 = Math.imul(h1 ^ c, 0x01000193) >>> 0;
    h2 = Math.imul(h2 ^ c, 0x01000193 ^ 0x5bd1e995) >>> 0;
  }
  return 'j' + h1.toString(16).padStart(8, '0') + h2.toString(16).padStart(8, '0');
}
/** Items of this takeoff that count as an assembly used: assembly parts and a quantity (a mark, or a typed quantity). */
export function usedAssemblies(state) {
  const marked = new Set(state.marks.map((m) => m.item));
  return state.items.filter((it) => it.components?.length && (marked.has(it.id) || (it.type === 'fixed' && it.qty > 0)));
}
/**
 * The assembly list with this takeoff counted (pure: returns a new list). Each item with parts and a quantity adds one use
 * the first time its job is seen; the stored copy of the item becomes this one (the latest wins).
 */
export function withJob(asm, state, at = now()) {
  const out = asm.map((a) => ({ ...a, jobs: a.jobs.slice() }));
  const key = jobKey(state);
  if (!key) return out;
  for (const it of usedAssemblies(state)) {
    let a = out.find((x) => x.type === it.type && sameName(x.name, it.name));
    if (!a) {
      if (out.length >= LEARN_LIMITS.asm) continue;
      out.push((a = { name: str(it.name), type: it.type, uses: 0, jobs: [], last: at, item: setItem(it) }));
    }
    a.item = setItem(it);
    if (!a.jobs.includes(key)) {
      a.uses += 1; a.last = at;
      a.jobs.push(key);
      if (a.jobs.length > LEARN_LIMITS.jobs) a.jobs.shift();
    }
  }
  return out;
}
/**
 * Assembly suggestions: most used first, then the most recent; with `state`, this takeoff counts and the ones it already
 * has are left out. opts: { type, q (words in the name), state, limit }.
 */
export function rankAssemblies(learn, { type = null, q = '', state = null, limit = 50 } = {}) {
  if (!learn) return [];
  const list = learn.off || !state ? learn.asm.map((a) => ({ ...a })) : withJob(learn.asm, state);
  const words = str(q).toLowerCase().split(/\s+/).filter(Boolean);
  return list
    .filter((a) => (!type || a.type === type) && words.every((w) => a.name.toLowerCase().includes(w)))
    .filter((a) => !state || !state.items.some((i) => i.type === a.type && sameName(i.name, a.name)))
    .sort((a, b) => b.uses - a.uses || (a.last < b.last ? 1 : a.last > b.last ? -1 : 0) || a.name.localeCompare(b.name))
    .slice(0, limit);
}

// ---------------------------------------------------------------------------
// Repeat on every page

/** Remember a pattern (a clipboard.js copy of marks) that was repeated. Same name → replaced in place, uses + 1. Mutates. → id | null */
export function saveRepeat(learn, name, clip, at = now()) {
  const n = str(name);
  if (!learn || !n || !clip?.marks?.length || clip.marks.length > LEARN_LIMITS.repeatMarks) return null;
  const data = JSON.parse(JSON.stringify(clip));
  if (JSON.stringify(data).length > LEARN_LIMITS.repeatBytes) return null;
  const old = learn.repeats.find((r) => sameName(r.name, n));
  if (old) { old.clip = data; old.uses += 1; old.at = at; return old.id; }
  if (learn.repeats.length >= LEARN_LIMITS.repeats) return null;
  const r = { id: newId('r', learn.repeats), name: n, clip: data, uses: 1, at };
  learn.repeats.push(r);
  return r.id;
}
/** count a repeat used again (on new pages). Mutates. */
export function repeatUsed(learn, id, at = now()) {
  const r = learn?.repeats.find((x) => x.id === id);
  if (!r) return false;
  r.uses += 1; r.at = at;
  return true;
}

// ---------------------------------------------------------------------------
// Seeing and deleting what it learned

export const KINDS = ['symbols', 'sets', 'asm', 'repeats'];
/**
 * Everything learned, as rows for the "What it learned" list: { kind, id, name, detail: {…numbers for the words} }.
 * asm rows use "<type>:<name>" as their id (they have no id of their own).
 */
export function learnedRows(learn) {
  if (!learn) return [];
  return [
    ...learn.symbols.map((s) => ({ kind: 'symbols', id: s.id, name: s.item.name, detail: { found: s.found, runs: s.runs, th: Math.round(s.th * 100), at: s.at, last: s.last } })),
    ...learn.sets.map((s) => ({ kind: 'sets', id: s.id, name: s.name, detail: { n: s.items.length, at: s.at } })),
    ...learn.asm.map((a) => ({ kind: 'asm', id: asmId(a), name: a.name, detail: { uses: a.uses, type: a.type, parts: a.item.components.length, last: a.last } })),
    ...learn.repeats.map((r) => ({ kind: 'repeats', id: r.id, name: r.name, detail: { n: r.clip.marks.length, uses: r.uses, at: r.at } })),
  ];
}
export const asmId = (a) => a.type + ':' + a.name.toLowerCase();
/** Delete one learned thing. Mutates. → true when something went */
export function forget(learn, kind, id) {
  if (!learn || !KINDS.includes(kind)) return false;
  const list = learn[kind];
  const i = list.findIndex((x) => (kind === 'asm' ? asmId(x) : x.id) === id);
  if (i < 0) return false;
  list.splice(i, 1);
  return true;
}
/** Clear all: everything learned goes (the off switch stays as it is). Mutates. → how many went */
export function forgetAll(learn) {
  if (!learn) return 0;
  const n = learnedCount(learn);
  for (const k of KINDS) learn[k] = [];
  return n;
}

/**
 * Bring in what another takeoff learned (its file's `learn`, already read by readLearn): symbols and repeats it has that
 * this one does not (by id, then by name), sets by name (theirs added only when the name is free), assemblies merged (uses:
 * the larger count, jobs joined). Mutates `learn`. → { symbols, sets, asm, repeats } added counts
 */
export function mergeLearn(learn, other) {
  const n = { symbols: 0, sets: 0, asm: 0, repeats: 0 };
  if (!learn || !other) return n;
  for (const s of other.symbols) {
    if (learn.symbols.length >= LEARN_LIMITS.symbols) break;
    if (learn.symbols.some((x) => x.id === s.id || (sameName(x.item.name, s.item.name) && x.tpl.ink === s.tpl.ink))) continue;
    learn.symbols.push({ ...JSON.parse(JSON.stringify(s)), id: learn.symbols.some((x) => x.id === s.id) ? newId('s', learn.symbols) : s.id });
    n.symbols++;
  }
  for (const s of other.sets) {
    if (learn.sets.length >= LEARN_LIMITS.sets || learn.sets.some((x) => sameName(x.name, s.name))) continue;
    learn.sets.push({ ...JSON.parse(JSON.stringify(s)), id: learn.sets.some((x) => x.id === s.id) ? newId('k', learn.sets) : s.id });
    n.sets++;
  }
  for (const a of other.asm) {
    const mine = learn.asm.find((x) => x.type === a.type && sameName(x.name, a.name));
    if (mine) {
      const jobs = [...new Set([...mine.jobs, ...a.jobs])].slice(-LEARN_LIMITS.jobs);
      mine.uses = Math.max(mine.uses, a.uses, jobs.length);
      mine.jobs = jobs;
      if (a.last > mine.last) { mine.last = a.last; mine.item = JSON.parse(JSON.stringify(a.item)); }
    } else if (learn.asm.length < LEARN_LIMITS.asm) { learn.asm.push(JSON.parse(JSON.stringify(a))); n.asm++; }
  }
  for (const r of other.repeats) {
    if (learn.repeats.length >= LEARN_LIMITS.repeats || learn.repeats.some((x) => sameName(x.name, r.name))) continue;
    learn.repeats.push({ ...JSON.parse(JSON.stringify(r)), id: learn.repeats.some((x) => x.id === r.id) ? newId('r', learn.repeats) : r.id });
    n.repeats++;
  }
  return n;
}

// ---------------------------------------------------------------------------
// The file (model.js calls these two: readProject → readLearn, toJSON → writeLearn)

/**
 * Validate an untrusted `learn` section. `normalItem` is model.js's (passed in, so this module imports nothing of the
 * model). → { learn, warnings } — learn null when there is none or it is unusable.
 */
export function readLearn(raw, normalItem) {
  const warnings = [];
  if (raw === undefined || raw === null) return { learn: null, warnings };
  if (typeof raw !== 'object' || Array.isArray(raw) || !intIn(raw.v, 1, 1e6)) return { learn: null, warnings: [t('sx.su811.file.bad')] };
  if (raw.v > LEARN_VERSION) return { learn: null, warnings: [t('sx.su811.file.newer')] };
  const l = emptyLearn();
  if (raw.off === true) l.off = true;
  let dropped = 0;
  const arr = (v, max) => (Array.isArray(v) ? v.slice(0, max) : []);
  const item = (f) => { try { const it = normalItem({ ...f, id: 'x', components: arr(f?.components, 50).filter((c) => c && typeof c === 'object').map((c, i) => ({ ...c, id: 'c' + (i + 1) })) }); delete it.id; return it; } catch { return null; } };
  for (const s of arr(raw.symbols, LEARN_LIMITS.symbols)) {
    const tpl = s && unpackTemplate(s.tpl);
    if (!tpl || !idOk(s.id) || l.symbols.some((x) => x.id === s.id) || !str(s.item?.name) || !numIn(s.px, 0.01, 100)) { dropped++; continue; }
    l.symbols.push({
      id: s.id, item: { name: str(s.item.name), color: colorOk(s.item.color) ? s.item.color.toUpperCase() : '#1F77B4', unit: str(s.item.unit, 20) || 'EA' },
      tpl: { w: tpl.w, h: tpl.h, ink: s.tpl.ink }, px: s.px, ft: numIn(s.ft, 1e-9, 1e6) ? s.ft : null,
      th: numIn(s.th, 0.5, 0.99) ? s.th : 0.75, found: intIn(s.found, 0, 1e9) ? s.found : 0, runs: intIn(s.runs, 0, 1e9) ? s.runs : 0,
      at: isoOk(s.at) ? s.at : '', last: isoOk(s.last) ? s.last : '',
    });
  }
  for (const s of arr(raw.sets, LEARN_LIMITS.sets)) {
    if (!s || !idOk(s.id) || l.sets.some((x) => x.id === s.id) || !str(s.name)) { dropped++; continue; }
    const items = arr(s.items, LEARN_LIMITS.setItems).filter((f) => f && typeof f === 'object' && typeof f.type === 'string').map(item).filter(Boolean).map(setItem);
    if (!items.length) { dropped++; continue; }
    l.sets.push({ id: s.id, name: str(s.name), at: isoOk(s.at) ? s.at : '', items });
  }
  for (const a of arr(raw.asm, LEARN_LIMITS.asm)) {
    const it = a && a.item && typeof a.item === 'object' ? item(a.item) : null;
    if (!it || !it.components.length || l.asm.some((x) => x.type === it.type && sameName(x.name, it.name))) { dropped++; continue; }
    const jobs = arr(a.jobs, LEARN_LIMITS.jobs).filter((j) => typeof j === 'string' && /^j[0-9a-f]{16}$/.test(j));
    l.asm.push({ name: it.name, type: it.type, uses: intIn(a.uses, 0, 1e9) ? Math.max(a.uses, jobs.length) : jobs.length, jobs: [...new Set(jobs)], last: isoOk(a.last) ? a.last : '', item: setItem(it) });
  }
  for (const r of arr(raw.repeats, LEARN_LIMITS.repeats)) {
    const ok = r && idOk(r.id) && !l.repeats.some((x) => x.id === r.id) && str(r.name) && r.clip && typeof r.clip === 'object' && Array.isArray(r.clip.marks) && r.clip.marks.length && r.clip.marks.length <= LEARN_LIMITS.repeatMarks && Array.isArray(r.clip.items);
    let size = Infinity;
    if (ok) { try { size = JSON.stringify(r.clip).length; } catch { size = Infinity; } }
    if (!ok || size > LEARN_LIMITS.repeatBytes) { dropped++; continue; }
    l.repeats.push({ id: r.id, name: str(r.name), clip: JSON.parse(JSON.stringify(r.clip)), uses: intIn(r.uses, 0, 1e9) ? r.uses : 0, at: isoOk(r.at) ? r.at : '' });
  }
  if (dropped) warnings.push(t('sx.su811.file.dropped', { n: dropped }));
  return { learn: l, warnings };
}

/** The section as the file keeps it; `state` = the takeoff, so this job's assemblies are counted (not when learning is off). */
export function writeLearn(learn, state) {
  const out = { v: LEARN_VERSION };
  if (learn.off) out.off = true;
  out.symbols = learn.symbols.map((s) => ({ ...s, item: { ...s.item }, tpl: { ...s.tpl } }));
  out.sets = learn.sets.map((s) => JSON.parse(JSON.stringify(s)));
  out.asm = learn.off || !state ? learn.asm.map((a) => JSON.parse(JSON.stringify(a))) : withJob(learn.asm, state);
  out.repeats = learn.repeats.map((r) => JSON.parse(JSON.stringify(r)));
  return out;
}
