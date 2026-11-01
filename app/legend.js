/* SPDX-License-Identifier: Apache-2.0 */
/**
 * legend.js — "Count everything" (0.8 EG.67, session takeoff_PART_2): read a symbol legend, then count every symbol in it
 * across the whole plan set in one run. DOM-free (the worker, the page and the Node tests all import it).
 *
 * No trained model and no network (rule 35): the legend is read with rules — the text pdf.js reads from the legend box says what each
 * row is, and the ink next to each text is that row's symbol — and the symbols are found with match.js's template matching, the same
 * search Auto count runs. What is read from a drawing is content, never instructions (rule 36): a legend label becomes an item name
 * and nothing else.
 *
 * Pieces:
 *   groupLabels(items)            text pieces → one label per legend row (pieces on a line joined, a wrapped line joined)
 *   readLegend(ink, labels, opt)  → { side, entries: [{ label, box, tpl, problem }] }
 *   searchSheet(img, jobs, opt)   every symbol on one rendered sheet (one integral image, mass gate, right angles only when they differ)
 *   keepBest(hits)                a spot two symbols both match goes to the better one (reports the mix-ups)
 *   tally(hits, entries, sheets)  counts per symbol and per sheet
 */

import { crop, trim, templateProblem, rotate, findSymbol, integrals, suppress, blur, ANY_ANGLES } from './match.js';

const clean = (s) => String(s).replace(/[\u0000-\u001f\u007f-\u009f‪-‮⁦-⁩]/g, ' ').replace(/\s+/g, ' ').trim();

/** pdf.js text pieces ({ str, x0, y0, x1, y1 } in px, y down) → one label per legend row, in reading order. */
export function groupLabels(items) {
  const its = items.map((i) => ({ ...i, str: clean(i.str) })).filter((i) => i.str && i.x1 > i.x0 && i.y1 > i.y0);
  its.sort((a, b) => (a.y0 + a.y1) / 2 - (b.y0 + b.y1) / 2 || a.x0 - b.x0);
  // 1. pieces on one line: close in height and a short gap between them
  const lines = [];
  for (const it of its) {
    const h = it.y1 - it.y0, cy = (it.y0 + it.y1) / 2;
    const line = lines.find((l) => Math.abs((l.y0 + l.y1) / 2 - cy) < 0.5 * Math.max(h, l.y1 - l.y0) && it.x0 - l.x1 < 1.2 * h && it.x0 >= l.x0 - h);
    if (line) { line.text += ' ' + it.str; line.x1 = Math.max(line.x1, it.x1); line.y0 = Math.min(line.y0, it.y0); line.y1 = Math.max(line.y1, it.y1); }
    else lines.push({ text: it.str, x0: it.x0, y0: it.y0, x1: it.x1, y1: it.y1 });
  }
  // 2. a wrapped label: the next line starts under this one's start, with less than a line's gap between
  lines.sort((a, b) => a.y0 - b.y0 || a.x0 - b.x0);
  const labels = [];
  for (const l of lines) {
    const h = l.y1 - l.y0;
    const up = labels.find((m) => Math.abs(m.x0 - l.x0) < 0.6 * h && l.y0 - m.y1 >= -0.2 * h && l.y0 - m.y1 < 0.55 * h && m.lines < 4);
    if (up) { up.text += ' ' + l.text; up.y1 = Math.max(up.y1, l.y1); up.x1 = Math.max(up.x1, l.x1); up.lines++; }
    else labels.push({ ...l, lines: 1 });
  }
  return labels.map(({ lines: _, text, ...b }) => ({ ...b, text: text.slice(0, 80) }));
}

const inkRows = (img, x0, x1, y0, y1) => {
  const r = [];
  for (let y = y0; y < y1; y++) { let on = false; for (let x = x0; x < x1 && !on; x++) on = img.data[y * img.w + x] > 0.15; r.push(on); }
  return r;
};
const inkCols = (img, x0, x1, y0, y1) => {
  const c = [];
  for (let x = x0; x < x1; x++) { let on = false; for (let y = y0; y < y1 && !on; y++) on = img.data[y * img.w + x] > 0.15; c.push(on); }
  return c;
};

/** The ink run next to a label, on one side: → { x0, x1 } in px or null. `gap` = blank columns that still belong to one symbol. */
function runBeside(img, band, from, dir, gap, reach) {
  const lo = dir < 0 ? Math.max(0, from - reach) : from, hi = dir < 0 ? from : Math.min(img.w, from + reach);
  const cols = inkCols(img, lo, hi, band.y0, band.y1);
  const idx = (i) => (dir < 0 ? cols.length - 1 - i : i);            // walk away from the label
  let i = 0;
  while (i < cols.length && !cols[idx(i)]) i++;
  if (i >= cols.length) return null;
  const start = i;
  let end = i, blank = 0;
  for (; i < cols.length; i++) {
    if (cols[idx(i)]) { end = i; blank = 0; } else if (++blank > gap) break;
  }
  const a = lo + (dir < 0 ? cols.length - 1 - end : start), b = lo + (dir < 0 ? cols.length - 1 - start : end) + 1;
  return { x0: a, x1: b };
}

/** Blank the long straight rules of a boxed legend (its frame, an underline under the title): a run of ink longer than `frac` of the box. A symbol is never that long. */
export function stripRules(img, frac = 0.5) {
  const minH = Math.max(12, Math.round(frac * img.w)), minV = Math.max(12, Math.round(frac * img.h));
  const src = img.data.slice(), hit = (v) => v > 0.15;       // runs are found on the picture as drawn, so a rule crossing a frame does not cut the frame short
  for (let y = 0; y < img.h; y++) {
    let x = 0;
    while (x < img.w) {
      if (!hit(src[y * img.w + x])) { x++; continue; }
      let e = x;
      while (e < img.w && hit(src[y * img.w + e])) e++;
      if (e - x >= minH) for (let k = x; k < e; k++) img.data[y * img.w + k] = 0;
      x = e;
    }
  }
  for (let x = 0; x < img.w; x++) {
    let y = 0;
    while (y < img.h) {
      if (!hit(src[y * img.w + x])) { y++; continue; }
      let e = y;
      while (e < img.h && hit(src[e * img.w + x])) e++;
      if (e - y >= minV) for (let k = y; k < e; k++) img.data[k * img.w + x] = 0;
      y = e;
    }
  }
}

/**
 * Read the legend. `ink` = the legend box as ink darkness (match.js toInk); `labels` = groupLabels' rows in the same pixels.
 * opt: side 'auto' | 'left' | 'right' (which side of its text a row's symbol sits; auto = the side most rows have ink on).
 * → { side, entries: [{ label, box: {x,y,w,h}, tpl, problem }] } (`problem` = why a symbol cannot be searched, else null).
 */
export function readLegend(ink, labels, { side = 'auto' } = {}) {
  const img = { data: Float32Array.from(ink.data), w: ink.w, h: ink.h };
  stripRules(img);                                                   // a box round the legend is not a symbol
  for (const l of labels) {                                          // the words are not symbols
    const pad = 1.5;
    for (let y = Math.max(0, Math.floor(l.y0 - pad)); y < Math.min(img.h, Math.ceil(l.y1 + pad)); y++) for (let x = Math.max(0, Math.floor(l.x0 - pad)); x < Math.min(img.w, Math.ceil(l.x1 + pad)); x++) img.data[y * img.w + x] = 0;
  }
  const rows = labels.length ? labels.map((l) => ({ ...l })) : inkBands(img);
  const sorted = rows.slice().sort((a, b) => a.y0 - b.y0);
  // each row's band: halfway to the neighbouring rows (the symbol is often taller than its words)
  for (const r of rows) {
    const cy = (r.y0 + r.y1) / 2, h = r.y1 - r.y0;
    const near = sorted.filter((o) => o !== r && o.x0 < r.x1 && o.x1 > r.x0 - 4 * h);       // same column, roughly
    const above = near.filter((o) => (o.y0 + o.y1) / 2 < cy).map((o) => (o.y0 + o.y1) / 2).sort((a, b) => b - a)[0];
    const below = near.filter((o) => (o.y0 + o.y1) / 2 > cy).map((o) => (o.y0 + o.y1) / 2).sort((a, b) => a - b)[0];
    const up = above === undefined ? 1.6 * h : (cy - above) / 2, dn = below === undefined ? 1.6 * h : (below - cy) / 2;
    r.band = { y0: Math.max(0, Math.floor(cy - Math.max(up, h * 0.6))), y1: Math.min(img.h, Math.ceil(cy + Math.max(dn, h * 0.6))) };
    r.gap = Math.max(3, Math.round((r.band.y1 - r.band.y0) * 0.22));
    r.reach = Math.round(Math.max(12 * h, (r.band.y1 - r.band.y0) * 4));
  }
  const look = (r, dir) => runBeside(img, r.band, dir < 0 ? Math.floor(r.x0) : Math.ceil(r.x1), dir, r.gap, r.reach);
  let use = side;
  if (side === 'auto') {
    let l = 0, rt = 0;
    for (const r of rows) { if (look(r, -1)) l++; if (look(r, 1)) rt++; }
    use = l >= rt ? 'left' : 'right';
  }
  const entries = [];
  rows.sort((a, b) => a.y0 - b.y0 || a.x0 - b.x0);
  for (const r of rows) {
    const run = look(r, use === 'left' ? -1 : 1);
    if (!run) continue;                                                // a title or note: no symbol next to it
    const rowsOn = inkRows(img, run.x0, run.x1, r.band.y0, r.band.y1);
    const first = rowsOn.indexOf(true), last = rowsOn.lastIndexOf(true);
    if (first < 0) continue;
    const box = { x: run.x0, y: r.band.y0 + first, w: run.x1 - run.x0, h: last - first + 1 };
    const pad = 2;
    const raw = crop(ink, box.x - pad, box.y - pad, box.w + 2 * pad, box.h + 2 * pad);          // the original ink, words nearby are outside the run
    const tpl = trim(raw);
    entries.push({ label: r.text || '', box, tpl: { data: tpl.data, w: tpl.w, h: tpl.h }, problem: templateProblem(tpl) });
  }
  return { side: use, entries };
}

/** No words in the box (a scan): rows of ink, the first cluster of each is a symbol. */
function inkBands(img) {
  const rows = inkRows(img, 0, img.w, 0, img.h);
  const out = [];
  let y = 0;
  while (y < img.h) {
    while (y < img.h && !rows[y]) y++;
    if (y >= img.h) break;
    const a = y;
    while (y < img.h && rows[y]) y++;
    if (y - a >= 4) out.push({ text: '', x0: 0, y0: a, x1: 0, y1: y });
  }
  return out;
}

/** How alike two symbols are (0..1): the best normalized correlation over shifts of up to a pixel, at the larger of their sizes. */
export function likeness(a, b) {
  const w = Math.max(a.w, b.w) + 2, h = Math.max(a.h, b.h) + 2;
  const put = (t, dx, dy) => { const o = new Float32Array(w * h); const ox = Math.floor((w - t.w) / 2) + dx, oy = Math.floor((h - t.h) / 2) + dy; for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) { const X = x + ox, Y = y + oy; if (X >= 0 && Y >= 0 && X < w && Y < h) o[Y * w + X] = t.data[y * t.w + x]; } return o; };
  const q = put(b, 0, 0);
  let mq = 0;
  for (let i = 0; i < q.length; i++) mq += q[i];
  mq /= q.length;
  let vq = 0;
  for (let i = 0; i < q.length; i++) vq += (q[i] - mq) ** 2;
  let best = 0;
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    const p = put(a, dx, dy);
    let mp = 0;
    for (let i = 0; i < p.length; i++) mp += p[i];
    mp /= p.length;
    let dot = 0, vp = 0;
    for (let i = 0; i < p.length; i++) { const x = p[i] - mp; dot += x * (q[i] - mq); vp += x * x; }
    if (vp > 0 && vq > 0) best = Math.max(best, dot / Math.sqrt(vp * vq));
  }
  return best;
}

/** Which of the right-angle turns give a different picture (a circle or a square needs one search, not four); `any`: every 15° instead. */
export function distinctTurns(tpl, any = false) {
  if (any) {      // 0.8 takeoff_PART_3: symbols at any angle — every 15°, less the turns that give a picture already searched (a circle needs one)
    const out = [0], seen = [tpl];
    for (const deg of ANY_ANGLES.slice(1)) {
      const r = rotate(tpl, deg);
      if (seen.some((q) => likeness(q, r) > 0.8)) continue;   // resampling blurs a thin outline, so "the same picture" is a little looser than for right angles
      out.push(deg); seen.push(r);
    }
    return out;
  }
  const turns = [0];
  const same = (deg) => likeness(tpl, rotate(tpl, deg)) > 0.9;
  if (!same(180)) turns.push(180);
  if (!same(90)) { turns.push(90); if (!same(270)) turns.push(270); }
  return turns;
}

/**
 * Every symbol of `jobs` on one rendered sheet. jobs: [{ key, tpl, floor, turns? }]. The integral image is made once; `gate` skips
 * windows whose ink is far from the symbol's (a blank sheet, a long line) before the correlation is computed.
 * → { [key]: [{ x, y, w, h, rot, score }] }
 */
export function searchSheet(img0, jobs, { rotations = null, gate = [0.4, 2.5], soften = 1 } = {}) {
  // a light blur on the sheet and on each symbol (a symbol drawn a fraction of a pixel off from the legend's copy still scores high)
  const img = soften ? blur(img0, soften) : img0;
  const I = integrals(img);
  const out = {};
  for (const j of jobs) {
    if (j.problem) { out[j.key] = []; continue; }
    const tpl = soften ? blur(j.tpl, soften) : j.tpl;
    out[j.key] = findSymbol(img, tpl, { floor: j.floor, rotations: rotations || j.turns || distinctTurns(j.tpl), I, gate }) || [];
  }
  return out;
}

const iou = (a, b) => {
  const ix = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)), iy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  const i = ix * iy;
  return i / (a.w * a.h + b.w * b.h - i || 1);
};

/**
 * Hits (one per find, in sheet units): { entry, sheet, x, y, w, h, score, … }. Within one symbol, finds that overlap are one find (match.js
 * suppress, at that symbol's threshold); between symbols, a spot two of them match goes to the higher score.
 * `th(entry)` = that symbol's threshold. → { kept, mixed: Map("a|b" → count) }
 */
export function keepBest(hits, th) {
  const bySymbol = new Map();
  for (const h of hits) { const k = h.entry + '|' + h.sheet; (bySymbol.get(k) || bySymbol.set(k, []).get(k)).push(h); }
  let first = [];
  for (const list of bySymbol.values()) first = first.concat(suppress(list.map((h) => ({ ...h, sheet: h.sheet })), th(list[0].entry), 0.25));
  first.sort((a, b) => b.score - a.score);
  const kept = [], mixed = new Map(), bySheet = new Map();
  for (const h of first) {
    const here = bySheet.get(h.sheet) || bySheet.set(h.sheet, []).get(h.sheet);
    const clash = here.find((k) => k.entry !== h.entry && iou(k, h) > 0.5);
    if (clash) { const key = [clash.entry, h.entry].sort().join('|'); mixed.set(key, (mixed.get(key) || 0) + 1); continue; }
    here.push(h); kept.push(h);
  }
  return { kept, mixed };
}

/** Counts: { total: {entry → n}, bySheet: {entry → {sheet → n}}, sheets: [sheet keys that have any], all } from the kept hits. */
export function tally(kept) {
  const total = {}, bySheet = {}, sheets = new Set();
  for (const h of kept) {
    if (h.rejected) continue;
    total[h.entry] = (total[h.entry] || 0) + 1;
    const s = bySheet[h.entry] || (bySheet[h.entry] = {});
    s[h.sheet] = (s[h.sheet] || 0) + 1;
    sheets.add(h.sheet);
  }
  return { total, bySheet, sheets: [...sheets], all: kept.filter((h) => !h.rejected).length };
}

/** Render sizes for a sheet: the symbol's pixel size at the legend's scale, and (when the scales differ) at this sheet's. */
export function renderScales(w, srcFt, tgtFt) {
  return srcFt && tgtFt && Math.abs(tgtFt / srcFt - 1) > 0.01 ? [w * tgtFt / srcFt, w] : [w];
}

/** Working scale for a legend run: the SMALLEST symbol is ~`target` px on its longer side (a 200-sheet run is about speed). */
export function runScale(boxes, target = 18) {
  const longest = boxes.map((b) => Math.max(b.w, b.h)).filter((n) => n > 0);
  if (!longest.length) return 1;
  const small = Math.min(...longest);
  return Math.min(4, Math.max(0.2, target / small));
}
