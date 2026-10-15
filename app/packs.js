/* SPDX-License-Identifier: Apache-2.0 */
/**
 * packs.js — trade packs (0.5 TK.1): a data-only kind of add-on for TakeoffCraft. A pack is one JSON file of items with
 * their assemblies (components, formulas, waste), CSI MasterFormat numbers, imperial and metric twins and the public
 * references each assembly was written from. It carries no code, so it is never run, only read — as untrusted as a project
 * file (`readProject`): every field is checked, bad parts are dropped with a warning, anything malformed is refused.
 * DOM-free (tested in Node). The spec: docs/ADDONS-SPEC.md § 13.
 *
 *   readPack(json)                        → { ok, pack, warnings } | { ok: false, error }
 *   packEntries(pack, { system, samples }) → library entries (system: 'imperial' | 'metric' | 'both'; samples: take the
 *                                          pack's labelled sample rates instead of empty ones)
 *   installPack(lib, pack, opts)          → { lib, added, updated, kept }   into the price library, one step
 *   removePack(lib, id)                   → { lib, removed }                 every entry that came from that pack
 *   installedPacks(lib)                   → [{ id, name, version, count }]
 *   libraryPack(entries, meta)            → a pack (JSON-ready) made of your own library ("Export as pack")
 *   rateUnset(entry)                      true when neither the entry nor any component has a rate ("Set your rate")
 *   packSystemOf(item)                    'imperial' | 'metric' | 'any' (count items)
 *
 * Honesty: rates are the estimator's. A pack's items install with EMPTY rates; a pack may carry sample rates only as a
 * labelled block with a region and a date (`samples`), and they install only when the person ticks them.
 */

import { t } from './i18n.js';
import { TYPES, VARS, normalItem, csiOk } from './model.js';
import { UNITS } from './units.js';
import { parse } from './formula.js';
import { entryFromItem, entryMeta, mergeEntries, PACK_ID_RE, SEMVER_RE, LIBRARY_MAX } from './library.js';

export const PACK_FORMAT = 'takeoffcraft-pack';
export const PACK_VERSION = 1;
export const PACK_EXT = '.ccpack.json';
export const PACK_LIMITS = { bytes: 5e6, items: 2000, sources: 200, text: 1000, assume: 20 };
export const PACK_STATUS = ['starter', 'reviewed'];
export const PACK_SYSTEMS = ['imperial', 'metric', 'both'];
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const KEY_RE = /^[a-z0-9][a-z0-9_.-]{0,79}$/;
const SRC_ID_RE = /^[a-z0-9][a-z0-9_.-]{0,39}$/;

const str = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max) : '');
const int = (v, lo, hi) => (Number.isInteger(v) && v >= lo && v <= hi ? v : null);
const httpsUrl = (v) => (typeof v === 'string' && /^https:\/\/[^\s"<>]{3,500}$/.test(v) ? v : null);

/** 'imperial' (LF, SF, SY), 'metric' (m, m²) or 'any' (EA). */
export const packSystemOf = (it) => (UNITS[it.unit]?.system === 'any' ? 'any' : UNITS[it.unit]?.system || 'imperial');

function readSource(raw) {
  if (!raw || typeof raw !== 'object' || typeof raw.id !== 'string' || !SRC_ID_RE.test(raw.id)) return null;
  const title = str(raw.title, 300);
  if (!title) return null;
  const s = { id: raw.id, title };
  for (const k of ['publisher', 'edition', 'note']) { const v = str(raw[k], 300); if (v) s[k] = v; }
  const url = httpsUrl(raw.url);
  if (url) s.url = url;
  return s;
}

/** Validate a pack file's JSON (untrusted). */
export function readPack(json) {
  const fail = (e) => ({ ok: false, error: e });
  if (!json || typeof json !== 'object' || Array.isArray(json) || json.format !== PACK_FORMAT) return fail(t('pack.err.format'));
  if (!(json.version >= 1)) return fail(t('pack.err.version'));
  if (json.version > PACK_VERSION) return fail(t('pack.err.newer'));
  if (typeof json.id !== 'string' || !PACK_ID_RE.test(json.id)) return fail(t('pack.err.id'));
  const name = str(json.name, 80);
  if (!name) return fail(t('pack.err.name'));
  const version = typeof json.packVersion === 'string' && SEMVER_RE.test(json.packVersion) ? json.packVersion : null;
  if (!version) return fail(t('pack.err.semver'));
  const warnings = [];
  const pack = {
    format: PACK_FORMAT, version: PACK_VERSION, id: json.id, name, packVersion: version,
    trade: str(json.trade, 80), description: str(json.description, 600), author: str(json.author, 200),
    license: str(json.license, 80) || 'CC0-1.0',
    status: PACK_STATUS.includes(json.status) ? json.status : 'starter',
    csi: (Array.isArray(json.csi) ? json.csi : []).filter(csiOk).slice(0, 60),
    sources: [], items: [],
  };
  if (pack.status === 'reviewed') {                        // "reviewed" needs who and when; otherwise it stays a starter
    const by = str(json.reviewedBy, 200), on = typeof json.reviewedOn === 'string' && DATE_RE.test(json.reviewedOn) ? json.reviewedOn : '';
    if (by && on) Object.assign(pack, { reviewedBy: by, reviewedOn: on });
    else { pack.status = 'starter'; warnings.push(t('pack.warn.reviewed')); }
  }
  const homepage = httpsUrl(json.homepage);
  if (homepage) pack.homepage = homepage;
  const srcIds = new Set();
  for (const raw of Array.isArray(json.sources) ? json.sources.slice(0, PACK_LIMITS.sources) : []) {
    const s = readSource(raw);
    if (!s || srcIds.has(s.id)) { warnings.push(t('pack.warn.source')); continue; }
    srcIds.add(s.id); pack.sources.push(s);
  }
  const keys = new Set();
  const names = new Set();
  let badItems = 0, badComps = 0;
  for (const raw of Array.isArray(json.items) ? json.items.slice(0, PACK_LIMITS.items) : []) {
    if (!raw || typeof raw !== 'object' || typeof raw.key !== 'string' || !KEY_RE.test(raw.key) || keys.has(raw.key) || !TYPES.includes(raw.type)) { badItems++; continue; }
    const it = normalItem({ ...raw, id: 'x', mat: 0, lab: 0, xd: undefined, components: (Array.isArray(raw.components) ? raw.components : []).map((c, i) => ({ ...c, id: 'c' + (i + 1), mat: 0, lab: 0 })) });
    if (!raw.name || names.has(it.type + '\u0000' + it.name.toLowerCase())) { badItems++; continue; }
    const comps = it.components.filter((c) => {                      // a formula that does not parse would price nothing: dropped
      const ok = c.formula && parse(c.formula, VARS[it.type]).ok;
      if (!ok) badComps++;
      return ok;
    });
    keys.add(raw.key); names.add(it.type + '\u0000' + it.name.toLowerCase());
    const item = { key: raw.key, ...entryFromItem({ ...it, components: comps }), mat: 0, lab: 0 };
    const sources = (Array.isArray(raw.sources) ? raw.sources : []).filter((id) => srcIds.has(id));
    if (sources.length) item.sources = [...new Set(sources)];
    const assume = (Array.isArray(raw.assume) ? raw.assume : []).map((a) => str(a, 300)).filter(Boolean).slice(0, PACK_LIMITS.assume);
    if (assume.length) item.assume = assume;
    const note = str(raw.note, PACK_LIMITS.text);
    if (note) item.note = note;
    const group = str(raw.group, 80);
    if (group) item.group = group;
    if (typeof raw.twin === 'string' && KEY_RE.test(raw.twin)) item.twin = raw.twin;
    pack.items.push(item);
  }
  if (badItems) warnings.push(t('pack.warn.items', { n: badItems }));
  if (badComps) warnings.push(t('pack.warn.comps', { n: badComps }));
  for (const it of pack.items) if (it.twin && !keys.has(it.twin)) delete it.twin;
  if (!pack.items.length) return fail(t('pack.err.empty'));
  const sm = readSamples(json.samples, keys, pack.items);
  if (sm.samples) pack.samples = sm.samples;
  if (sm.warning) warnings.push(sm.warning);
  return { ok: true, pack, warnings };
}

/**
 * Sample rates: { label, region, date (YYYY-MM-DD), currency, rates: { <item key>: { mat, lab, components: { <name>: {mat, lab} } } } }
 * (rates in 1/10000 of the currency unit, like the library). Without a label, a region and a date they are dropped.
 */
function readSamples(raw, keys, items) {
  if (raw === undefined || raw === null) return {};
  const label = str(raw?.label, 200), region = str(raw?.region, 120), date = typeof raw?.date === 'string' && DATE_RE.test(raw.date) ? raw.date : '';
  const currency = typeof raw?.currency === 'string' && /^[A-Z]{3}$/.test(raw.currency) ? raw.currency : '';
  if (!label || !region || !date || !currency || !raw.rates || typeof raw.rates !== 'object') return { warning: t('pack.warn.samples') };
  const rates = {};
  for (const [k, v] of Object.entries(raw.rates)) {
    if (!keys.has(k) || !v || typeof v !== 'object') continue;
    const it = items.find((x) => x.key === k);
    const r = { mat: int(v.mat, 0, 1e13) ?? 0, lab: int(v.lab, 0, 1e13) ?? 0 };
    const comps = {};
    for (const [cn, cv] of Object.entries(v.components && typeof v.components === 'object' ? v.components : {})) {
      if (!it.components.some((c) => c.name === cn) || !cv || typeof cv !== 'object') continue;
      comps[cn] = { mat: int(cv.mat, 0, 1e13) ?? 0, lab: int(cv.lab, 0, 1e13) ?? 0 };
    }
    if (Object.keys(comps).length) r.components = comps;
    rates[k] = r;
  }
  return { samples: { label, region, date, currency, rates } };
}

/** The pack's items as library entries for the chosen unit system; rates empty unless `samples` (and the pack has them). */
export function packEntries(pack, { system = 'both', samples = false } = {}) {
  const want = (it) => { const s = packSystemOf(it); return system === 'both' || s === 'any' || s === system; };
  const sm = samples && pack.samples ? pack.samples : null;
  const srcText = (it) => (it.sources || []).map((id) => pack.sources.find((s) => s.id === id)).filter(Boolean)
    .map((s) => [s.title, s.edition, s.publisher].filter(Boolean).join(', ')).join('; ');
  return pack.items.filter(want).map((it) => {
    const r = sm?.rates[it.key];
    const e = {
      name: it.name, type: it.type, unit: it.unit, heightFt: it.heightFt || 0, waste: it.waste, mat: r?.mat || 0, lab: r?.lab || 0,
      ...(it.crew ? { crew: { ...it.crew } } : {}),
      ...(it.csi ? { csi: it.csi } : {}),
      components: it.components.map((c) => ({ ...c, mat: r?.components?.[c.name]?.mat || 0, lab: r?.components?.[c.name]?.lab || 0 })),
      ...entryMeta({ pack: { id: pack.id, version: pack.packVersion, name: pack.name }, src: srcText(it), note: [it.note, ...(it.assume || [])].filter(Boolean).join(' ') }),
    };
    if (sm && r) e.sample = { region: sm.region, date: sm.date, currency: sm.currency };
    return e;
  });
}

const fromPack = (e, id) => e.pack?.id === id;
const sameEntry = (a, b) => a.type === b.type && a.name.trim().toLowerCase() === b.name.trim().toLowerCase();

/**
 * Install a pack into the library. An entry of the same name and type that came from this pack (an older version) is
 * replaced in its place; one that is the person's own is KEPT (never overwritten by a pack) and that pack item skipped.
 */
export function installPack(lib, pack, opts = {}) {
  const entries = packEntries(pack, opts);
  const fresh = [];
  let kept = 0;
  for (const e of entries) {
    const mine = lib.find((x) => sameEntry(x, e) && !fromPack(x, pack.id));
    if (mine) kept++; else fresh.push(e);
  }
  const room = LIBRARY_MAX - lib.length;
  const m = mergeEntries(lib, fresh);
  return { lib: m.lib, added: m.added, updated: m.updated, kept, full: fresh.length - m.updated > room };
}

/** Take every entry that came from pack `id` out of the library. */
export function removePack(lib, id) {
  const out = lib.filter((e) => !fromPack(e, id));
  return { lib: out, removed: lib.length - out.length };
}

/** The packs the library holds entries of, in the order they first appear. */
export function installedPacks(lib) {
  const by = new Map();
  for (const e of lib) {
    if (!e.pack) continue;
    const p = by.get(e.pack.id) || { id: e.pack.id, name: e.pack.name, version: e.pack.version, count: 0 };
    p.count++;
    by.set(e.pack.id, p);
  }
  return [...by.values()];
}

export const rateUnset = (e) => !e.mat && !e.lab && !e.crew && (e.components || []).every((c) => !c.mat && !c.lab);

/**
 * Your own library as a pack. meta = { id, name, version, author, description, rates: bool, region, date, currency }.
 * Rates go out only when asked, and then as labelled sample rates (region and date required — else none go out).
 */
export function libraryPack(entries, meta = {}) {
  const id = typeof meta.id === 'string' && PACK_ID_RE.test(meta.id) ? meta.id : 'my-library';
  const items = [];
  const keys = new Set();
  const rates = {};
  for (const e of entries.slice(0, PACK_LIMITS.items)) {
    let key = (e.name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'item').slice(0, 60);
    for (let k = 2; keys.has(key); k++) key = key.replace(/-\d+$/, '') + '-' + k;
    keys.add(key);
    items.push({
      key, name: e.name, type: e.type, unit: e.unit, ...(e.heightFt ? { heightFt: e.heightFt } : {}), waste: e.waste,
      ...(e.csi ? { csi: e.csi } : {}), ...(e.note ? { note: e.note } : {}),
      components: (e.components || []).map((c) => ({ name: c.name, unit: c.unit, formula: c.formula, waste: c.waste })),
    });
    if (meta.rates && !rateUnset(e)) {
      const comps = {};
      for (const c of e.components || []) if (c.mat || c.lab) comps[c.name] = { mat: c.mat, lab: c.lab };
      rates[key] = { mat: e.mat, lab: e.lab, ...(Object.keys(comps).length ? { components: comps } : {}) };
    }
  }
  const pack = {
    format: PACK_FORMAT, version: PACK_VERSION, id, name: str(meta.name, 80) || t('pack.export.name'),
    packVersion: typeof meta.version === 'string' && SEMVER_RE.test(meta.version) ? meta.version : '1.0.0',
    description: str(meta.description, 600), author: str(meta.author, 200), license: str(meta.license, 80) || 'CC0-1.0', status: 'starter',
    sources: [], items,
  };
  const region = str(meta.region, 120), date = typeof meta.date === 'string' && DATE_RE.test(meta.date) ? meta.date : '';
  if (meta.rates && region && date && Object.keys(rates).length) {
    pack.samples = { label: t('pack.export.samples', { name: pack.name }), region, date, currency: /^[A-Z]{3}$/.test(meta.currency || '') ? meta.currency : 'USD', rates };
  }
  return pack;
}
