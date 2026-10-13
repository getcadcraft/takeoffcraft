/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scaletext.js — find a sheet's scale in its own text (0.4 item T20). DOM-free (tested in Node).
 *
 *   scalesInText(text)       → [{ preset, label, index, scaleWord }]   every scale notation, in order
 *   sheetScale(text)         → { preset, label, n, others: [preset], nts, why }   what to apply to a sheet, or why not
 *
 * It reads the notations drawings use — 1/4" = 1'-0", 1/8"=1', 3/16" = 1'-0", 1 1/2" = 1'-0", 1" = 20', 1:100 — and keeps
 * only those that are one of TakeoffCraft's preset scales. A sheet says "1/4" = 1'-0"" once in its title block and again
 * under each view; the most frequent wins, and one written after "SCALE" counts double. Several different scales (a plan
 * with enlarged details) are reported in `others` so the person can check. "NTS" / "NOT TO SCALE" is reported as `nts`.
 */

import { PRESETS } from './units.js';

// quote marks as drawings type them: " '' ″ ” and ' ′ ’
const IN = String.raw`(?:"|''|″|”|\s?in\.?|\s?inch(?:es)?)`;
const FT = String.raw`(?:'|′|’|\s?ft\.?|\s?feet|\s?foot)`;
const NUM = String.raw`\d+(?:\s*[- ]\s*\d+\s*\/\s*\d+|\s*\/\s*\d+|\.\d+)?`;            // 1/4 · 1-1/2 · 1 1/2 · 0.25 · 3
const IMPERIAL = new RegExp(String.raw`(${NUM})\s*${IN}\s*=\s*(\d+(?:\.\d+)?)\s*${FT}(?:\s*-?\s*(\d+(?:\.\d+)?)\s*${IN})?`, 'gi');
const METRIC = /(?<![\d.:/])1\s*:\s*(\d{1,5})(?![\d:/]|\.\d)/g;
const NTS = /\bN\.?\s?T\.?\s?S\.?(?![a-z])|\bNOT\s+TO\s+SCALE\b/i;

/** "1/4" → 0.25, "1-1/2" / "1 1/2" → 1.5, "0.25" → 0.25 */
function inches(s) {
  const m = /^(\d+)\s*[- ]\s*(\d+)\s*\/\s*(\d+)$/.exec(s.trim());
  if (m) return +m[1] + +m[2] / +m[3];
  const f = /^(\d+)\s*\/\s*(\d+)$/.exec(s.trim());
  if (f) return +f[2] ? +f[1] / +f[2] : NaN;
  return Number(s.trim());
}
const byRatio = new Map();
for (const p of PRESETS.values()) {
  const k = (p.group === 'Metric' ? 'm' : 'i') + p.ratio;          // i18n-ignore: a lookup key
  if (!byRatio.has(k)) byRatio.set(k, p);
}

export function scalesInText(text) {
  const s = String(text || '');
  const out = [];
  const before = (i) => /\bscale\b\s*[:=]?\s*$/i.test(s.slice(Math.max(0, i - 16), i));
  for (const m of s.matchAll(IMPERIAL)) {
    const paper = inches(m[1]), real = +m[2] * 12 + (m[3] ? +m[3] : 0);
    if (!(paper > 0) || !(real > 0)) continue;
    const ratio = Math.round(real / paper * 1000) / 1000;
    const p = byRatio.get('i' + ratio);
    if (!p || p.group === 'Metric') continue;
    // 1" = 1'-0" is architectural (12); 1" = 10' and up engineering — both are imperial presets by ratio
    out.push({ preset: p.key, label: p.label, index: m.index, scaleWord: before(m.index) });
  }
  for (const m of s.matchAll(METRIC)) {
    const p = byRatio.get('m' + +m[1]);
    if (!p) continue;
    out.push({ preset: p.key, label: p.label, index: m.index, scaleWord: before(m.index) });
  }
  return out.sort((a, b) => a.index - b.index);
}

export function sheetScale(text) {
  const found = scalesInText(text);
  const nts = NTS.test(String(text || ''));
  if (!found.length) return { preset: null, n: 0, others: [], nts, why: nts ? 'nts' : 'none' };
  const score = new Map();
  for (const f of found) score.set(f.preset, (score.get(f.preset) || 0) + (f.scaleWord ? 2 : 1));
  const ranked = [...score.entries()].sort((a, b) => b[1] - a[1] || found.findIndex((f) => f.preset === a[0]) - found.findIndex((f) => f.preset === b[0]));
  const [preset] = ranked[0];
  return { preset, label: PRESETS.get(preset).label, n: found.filter((f) => f.preset === preset).length, others: ranked.slice(1).map(([k]) => k), nts, why: ranked.length > 1 ? 'several' : 'one' };
}

/** pdf.js text content → one string (items joined by spaces, so "1/4"" "=" "1'-0"" reads as one notation). */
export const pageText = (content) => (content?.items || []).map((i) => i.str).join(' ');
