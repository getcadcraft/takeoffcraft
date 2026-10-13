/* SPDX-License-Identifier: Apache-2.0 */

import { t } from './i18n.js';
/**
 * units.js — lengths, scales and money for TakeoffCraft. DOM-free (tested in Node).
 *
 * The canonical length is the FOOT (areas in square feet). Everything typed or shown converts
 * at the edge: feet-inches with fractions, decimal feet, inches, m, cm, mm. PDF user space is
 * 72 units per inch (× the page's /UserUnit), so a sheet's scale is stored as ftPerUnit: real
 * feet per PDF user-space unit. Presets and two-point calibrations both end up there.
 *
 * Money: unit rates are integers in 1/10000 of a dollar (rate4: 38500 = $3.85), extended
 * amounts are integer cents, waste is integer basis points (1000 = 10%). Floats never sum money.
 */

export const M_PER_FT = 0.3048;
export const SQM_PER_SQFT = 0.09290304;

// ---------------------------------------------------------------------------
// Parsing lengths

const WORDS = [
  [/(?<![a-z])(feet|foot|ft)(?![a-z])\.?/g, "'"],
  [/(?<![a-z])(inches|inch|in)(?![a-z])\.?/g, '"'],
];

/**
 * Parse a typed distance into feet.
 *   24'-0"  12' 6 1/2"  12'-6-1/2"  6 1/2"  3/4"  24.5'  24.5 (→ defaultUnit)  24 ft 6 in
 *   3.2 m   3200 mm   320 cm
 * Returns { ok: true, ft } or { ok: false, error }. Negative and zero values are refused.
 */
export function parseLength(text, { defaultUnit = 'ft' } = {}) {
  let s = String(text ?? '').trim().toLowerCase();
  if (!s) return { ok: false, error: t('len.err.empty') };
  s = s.replace(/[′’‘`]/g, "'").replace(/[″“”]/g, '"').replace(/''/g, '"').replace(/[−–—]/g, '-').replace(/,/g, '');
  for (const [re, to] of WORDS) s = s.replace(re, to);
  s = s.replace(/\s+/g, ' ').trim();
  if (s.startsWith('-')) return { ok: false, error: t('len.err.positive') };

  // metric: one number and a unit
  const m = s.match(/^(\d+(?:\.\d*)?|\.\d+)\s*(mm|cm|m)$/);
  if (m) {
    const v = parseFloat(m[1]);
    const meters = m[2] === 'mm' ? v / 1000 : m[2] === 'cm' ? v / 100 : v;
    return positive(meters / M_PER_FT);
  }
  if (/[a-z]/.test(s)) return { ok: false, error: t('len.err.units') };

  const tokens = tokenize(s);
  if (!tokens) return { ok: false, error: t('len.err.read') };
  const r = imperial(tokens, defaultUnit);
  if (!r.ok) return r;
  return positive(r.ft);
}

function positive(ft) {
  if (!Number.isFinite(ft)) return { ok: false, error: t('len.err.read.short') };
  if (ft <= 0) return { ok: false, error: t('len.err.positive') };
  return { ok: true, ft };
}

/** Numbers, fractions (a/b), foot and inch marks. Dashes and spaces only separate. */
function tokenize(s) {
  const out = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === ' ' || c === '-') { i++; continue; }
    if (c === "'" || c === '"') { out.push({ t: c }); i++; continue; }
    const m = s.slice(i).match(/^(\d+(?:\.\d*)?|\.\d+)(?:\s*\/\s*(\d+(?:\.\d*)?|\.\d+))?/);
    if (!m) return null;
    if (m[2] !== undefined) {
      if (m[1].includes('.') || m[2].includes('.')) return null;
      const den = parseInt(m[2], 10);
      if (den === 0) return null;
      out.push({ t: 'frac', v: parseInt(m[1], 10) / den });
    } else out.push({ t: 'num', v: parseFloat(m[1]), int: !m[1].includes('.') });
    i += m[0].length;
  }
  return out;
}

/** [num]['] [num][frac]["]  — a feet part, an inches part, or a bare value in the default unit. */
function imperial(tk, defaultUnit) {
  let i = 0;
  const value = () => {
    // a number, optionally followed by a fraction (whole + fraction), or a lone fraction
    const a = tk[i];
    if (!a) return null;
    if (a.t === 'frac') { i++; return a.v; }
    if (a.t !== 'num') return null;
    i++;
    if (tk[i]?.t === 'frac') {
      if (!a.int) return null;              // 6.5 1/2 is not a number
      return a.v + tk[i++].v;
    }
    return a.v;
  };
  const bad = { ok: false, error: t('len.err.read') };
  const first = value();
  if (first === null) return bad;
  if (tk[i]?.t === "'") {
    i++;
    let inches = 0;
    if (i < tk.length) {
      const v = value();
      if (v === null) return bad;
      inches = v;
      if (tk[i]?.t === '"') i++;
    }
    if (i !== tk.length) return bad;
    return { ok: true, ft: first + inches / 12 };
  }
  if (tk[i]?.t === '"') {
    i++;
    if (i !== tk.length) return bad;
    return { ok: true, ft: first / 12 };
  }
  if (i !== tk.length) return bad;
  return { ok: true, ft: toFt(first, defaultUnit) };
}

export function toFt(v, unit) {
  switch (unit) {
    case 'ft': return v;
    case 'in': return v / 12;
    case 'm': return v / M_PER_FT;
    case 'cm': return v / 100 / M_PER_FT;
    case 'mm': return v / 1000 / M_PER_FT;
    default: throw new Error('Unknown unit ' + unit);   // i18n-ignore: a programming error
  }
}

// ---------------------------------------------------------------------------
// Formatting lengths

/** Feet-inches to the nearest 1/denom inch: 12'-6 1/2", 0'-3/4" is written 0'-0 3/4". */
export function formatFtIn(ft, denom = 16) {
  if (!Number.isFinite(ft)) return '';
  const neg = ft < 0;
  const n = Math.round(Math.abs(ft) * 12 * denom + 1e-9);   // whole 1/denom inches
  const perFoot = 12 * denom;
  const feet = Math.floor(n / perFoot);
  const rem = n - feet * perFoot;
  const inch = Math.floor(rem / denom);
  let num = rem - inch * denom, den = denom;
  while (num && num % 2 === 0 && den % 2 === 0) { num /= 2; den /= 2; }
  const zero = feet === 0 && inch === 0 && num === 0;
  return (neg && !zero ? '-' : '') + feet + "'-" + inch + (num ? ' ' + num + '/' + den : '') + '"';
}

/** A length for display in a chosen unit: 'ftin', 'ft' (decimal), 'in', 'm', 'mm'. */
export function formatLength(ft, unit = 'ftin', digits = 2) {
  if (!Number.isFinite(ft)) return '';
  switch (unit) {
    case 'ftin': return formatFtIn(ft);
    case 'ft': return fixed(ft, digits) + "'";
    case 'in': return fixed(ft * 12, digits) + '"';
    case 'm': return fixed(ft * M_PER_FT, 3) + ' m';
    case 'mm': return fixed(ft * M_PER_FT * 1000, 0) + ' mm';
    default: return fixed(ft, digits);
  }
}

/** Grouped fixed-point number: 1234.5 → "1,234.50". */
export function fixed(v, digits = 2) {
  if (!Number.isFinite(v)) return '';
  const r = roundTo(v, digits);
  const [i, f] = Math.abs(r).toFixed(digits).split('.');
  return (r < 0 ? '-' : '') + i.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (f ? '.' + f : '');
}

/** Half away from zero, tolerant of binary noise (1.005 → 1.01, 2.675 → 2.68). */
export function roundTo(v, digits = 0) {
  const f = 10 ** digits;
  const y = Math.abs(v) * f;
  const r = Math.floor(y + 0.5 + 1e-9 * Math.max(1, y));
  return (v < 0 ? -r : r) / f;
}

// ---------------------------------------------------------------------------
// Item units: what a quantity is reported in

export const UNITS = {
  LF:   { kind: 'linear', label: 'LF', get name() { return t('unit.lf.name'); }, perFt: 1, system: 'imperial' },
  m:    { kind: 'linear', label: 'm', get name() { return t('unit.m.name'); }, perFt: M_PER_FT, system: 'metric' },
  SF:   { kind: 'area', label: 'SF', get name() { return t('unit.sf.name'); }, perSqFt: 1, system: 'imperial' },
  SY:   { kind: 'area', label: 'SY', get name() { return t('unit.sy.name'); }, perSqFt: 1 / 9, system: 'imperial' },
  'm²': { kind: 'area', label: 'm²', get name() { return t('unit.m2.name'); }, perSqFt: SQM_PER_SQFT, system: 'metric' },
  EA:   { kind: 'count', label: 'EA', get name() { return t('unit.ea.name'); }, system: 'any' },
};
export const UNITS_FOR = { linear: ['LF', 'm'], area: ['SF', 'SY', 'm²'], count: ['EA'] };
export const DEFAULT_UNIT = { linear: 'LF', area: 'SF', count: 'EA' };

/** The length unit that goes with an item unit (for P, L and H): LF/SF/SY → ft, m/m² → m. */
export function lengthUnitOf(unit) { return UNITS[unit]?.system === 'metric' ? 'm' : 'ft'; }
/** The area unit that goes with an item unit (for a linear item's wall area): LF → SF, m → m². */
export function areaUnitOf(unit) { return UNITS[unit]?.system === 'metric' ? 'm²' : 'SF'; }
export const ftTo = (ft, lu) => (lu === 'm' ? ft * M_PER_FT : ft);
export const sqftTo = (sf, au) => sf * (UNITS[au]?.perSqFt ?? 1);

// ---------------------------------------------------------------------------
// Scales

/** Preset drawing scales. ratio = real inches per paper inch. */
export const SCALE_GROUPS = [
  ['Architectural', [
    ['a1/16', '1/16" = 1\'-0"', 192], ['a3/32', '3/32" = 1\'-0"', 128], ['a1/8', '1/8" = 1\'-0"', 96],
    ['a3/16', '3/16" = 1\'-0"', 64], ['a1/4', '1/4" = 1\'-0"', 48], ['a3/8', '3/8" = 1\'-0"', 32],
    ['a1/2', '1/2" = 1\'-0"', 24], ['a3/4', '3/4" = 1\'-0"', 16], ['a1', '1" = 1\'-0"', 12],
    ['a1-1/2', '1 1/2" = 1\'-0"', 8], ['a3', '3" = 1\'-0"', 4],
  ]],
  ['Engineering', [
    ['e10', '1" = 10\'', 120], ['e20', '1" = 20\'', 240], ['e30', '1" = 30\'', 360], ['e40', '1" = 40\'', 480],
    ['e50', '1" = 50\'', 600], ['e60', '1" = 60\'', 720], ['e100', '1" = 100\'', 1200],
  ]],
  ['Metric', [
    ['m1', '1:1', 1], ['m2', '1:2', 2], ['m5', '1:5', 5], ['m10', '1:10', 10], ['m20', '1:20', 20], ['m25', '1:25', 25],
    ['m50', '1:50', 50], ['m100', '1:100', 100], ['m200', '1:200', 200], ['m250', '1:250', 250], ['m500', '1:500', 500],
    ['m1000', '1:1000', 1000],
  ]],
];
export const PRESETS = new Map(SCALE_GROUPS.flatMap(([group, list]) => list.map(([key, label, ratio]) => [key, { key, label, ratio, group }])));

/** Real feet per PDF user-space unit for a preset (a unit is 1/72 in × userUnit on paper). */
export function presetFtPerUnit(key, userUnit = 1) {
  const p = PRESETS.get(key);
  if (!p) throw new Error('Unknown scale ' + key);   // i18n-ignore: a programming error
  return (userUnit / 72) * p.ratio / 12;
}

/** Two picked points (user space) and the real distance between them → ftPerUnit. */
export function calibrate(a, b, realFt) {
  const d = Math.hypot(b.x - a.x, b.y - a.y);
  if (!(d > 0.5)) return { ok: false, error: t('cal.err.near') };
  if (!(realFt > 0) || !Number.isFinite(realFt)) return { ok: false, error: t('len.err.positive') };
  return { ok: true, ftPerUnit: realFt / d, units: d };
}

/** The preset a scale matches within tol (relative), or null. */
export function matchPreset(ftPerUnit, userUnit = 1, tol = 0.005) {
  let best = null;
  for (const p of PRESETS.values()) {
    const s = presetFtPerUnit(p.key, userUnit);
    const err = Math.abs(ftPerUnit - s) / s;
    if (err <= tol && (!best || err < best.err)) best = { ...p, err };
  }
  return best;
}

/** "1" = 4.000'" style ratio for any scale: real feet per paper inch. */
export function describeScale(ftPerUnit, userUnit = 1) {
  const ftPerPaperInch = ftPerUnit * 72 / userUnit;
  return '1" = ' + fixed(ftPerPaperInch, 3).replace(/\.?0+$/, '') + "'";
}

/** A sheet's scale record. method 'preset' | 'calibrated'. */
export function scaleRecord({ method, ftPerUnit, preset = null, label = '', cal = null }) {
  return { method, ftPerUnit, preset, label, cal };
}

// ---------------------------------------------------------------------------
// Money and percentages

/** "$1,234.5" → 12345000 (1/10000 dollar). Up to 4 decimals; more are rounded. */
export function parseRate(text) {
  const s = String(text ?? '').trim().replace(/[$,\s]/g, '');
  if (s === '') return { ok: true, rate4: 0 };
  if (!/^\d*(\.\d*)?$/.test(s) || s === '.') return { ok: false, error: t('rate.err.read') };
  const v = Number(s);
  if (!Number.isFinite(v) || v > 1e9) return { ok: false, error: t('rate.err.big') };
  return { ok: true, rate4: Math.round(roundTo(v, 4) * 10000) };
}
/** "7.5" or "7.5%" → 750 basis points. 0–1000%. */
export function parsePercent(text) {
  const s = String(text ?? '').trim().replace(/[%\s]/g, '');
  if (s === '') return { ok: true, bp: 0 };
  if (!/^\d*(\.\d*)?$/.test(s) || s === '.') return { ok: false, error: t('pct.err.read') };
  const v = Number(s);
  if (v > 1000) return { ok: false, error: t('pct.err.big') };
  return { ok: true, bp: Math.round(roundTo(v, 2) * 100) };
}
/** Integer cents → "$1,234.56". */
export function formatCents(c) {
  const neg = c < 0;
  const a = Math.abs(Math.round(c));
  return (neg ? '-' : '') + '$' + String(Math.floor(a / 100)).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + String(a % 100).padStart(2, '0');
}
/** A unit rate (1/10000 $) → "$3.85", "$0.385", "$0.3851". At least two decimals. */
export function formatRate(rate4) {
  const s = (rate4 / 10000).toFixed(4).replace(/(\.\d\d\d*?)0+$/, '$1');
  return '$' + s.replace(/^(\d+)/, (m) => m.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
}
export const rateInput = (rate4) => (rate4 / 10000).toFixed(4).replace(/(\.\d\d\d*?)0+$/, '$1');
export const percentInput = (bp) => String(bp / 100);
export const formatPercent = (bp) => String(bp / 100) + '%';

/** Extended amount in cents: quantity × unit rate, rounded half away from zero to the cent. */
export function extendCents(qty, rate4) {
  return Math.round(roundTo(qty * rate4 / 100, 0));
}
/** Quantity with waste: qty × (1 + bp / 10000). */
export const withWaste = (qty, bp) => qty * (1 + bp / 10000);

// ---- roof pitch (T15): rise in inches per 12 inches of run ----
export const MAX_PITCH = 144;          // 12:1 rise — steeper is a wall
/**
 * Read a pitch: "6:12", "6/12", "6 in 12", "6" (rise per 12), "4:10" (any run), "26.57°" or "26.57 deg" (an angle),
 * "0" or "" (flat). → { ok, rise } (rise per 12) | { ok: false, error: key }
 */
export function parsePitch(text) {
  const s = String(text ?? '').trim().toLowerCase().replace(/,/g, '.');
  if (!s) return { ok: true, rise: 0 };
  let m = s.match(/^(\d+(?:\.\d+)?|\.\d+)\s*(?:°|deg|degrees?)$/);
  if (m) {
    const a = parseFloat(m[1]);
    if (!(a >= 0 && a < 85)) return { ok: false, error: 'pitch.err.angle' };
    return { ok: true, rise: Math.tan(a * Math.PI / 180) * 12 };
  }
  m = s.match(/^(\d+(?:\.\d+)?|\.\d+)(?:\s*(?::|\/|in)\s*(\d+(?:\.\d+)?))?$/);
  if (!m) return { ok: false, error: 'pitch.err.read' };
  const rise = parseFloat(m[1]), run = m[2] === undefined ? 12 : parseFloat(m[2]);
  if (!(run > 0)) return { ok: false, error: 'pitch.err.read' };
  const r12 = rise / run * 12;
  if (!(r12 <= MAX_PITCH)) return { ok: false, error: 'pitch.err.steep' };
  return { ok: true, rise: r12 };
}
/** "6:12", "6.5:12", "" for flat. */
export const formatPitch = (rise) => (rise > 0 ? (Math.round(rise * 100) / 100) + ':12' : '');
/** A plane at this pitch: surface length or area per plan unit (rakes, roof areas). */
export const slopeFactor = (rise) => Math.sqrt(1 + (rise / 12) ** 2);
/** A hip or valley between two planes of this pitch, its plan line at 45° to the eaves: true length per plan length. */
export const hipFactor = (rise) => Math.sqrt(1 + (rise / 12) ** 2 / 2);
