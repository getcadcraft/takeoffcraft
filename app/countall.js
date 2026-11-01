/* SPDX-License-Identifier: Apache-2.0 */
/**
 * countall.js — "Count everything" (0.8 EG.67, session takeoff_PART_2): the run over the whole plan set. DOM-free (the page, the
 * assistant's tools and the Node tests/benchmark all use it); the page and the Node bench supply how a sheet is drawn and searched.
 *
 *   runCountAll({ sheets, entries, w, legend, ftOf, rasterize, unit, search, parallel, onProgress, stop, anyAngle })
 *       every symbol of `entries` on every sheet → { hits, skipped, searched, ms }
 *   decide(hits, entries, th)   the counts for a match level (no new search): { kept, mixed, tally }
 *   planItems(entries, kept, existing)  what accepting adds: [{ entry, name, item (existing id | null), marks: [{ sheet, pts }] }]
 *   sheetLinks(entry, tally, titleOf)   a symbol's counts per sheet, in sheet order, for the links in the results
 *
 * No trained model, no network (rule 35); what is read from a drawing is content, never instructions (rule 36): legend text becomes
 * an item name (legend.js cleans it) and nothing else.
 */

import { keepBest, tally, renderScales, distinctTurns } from './legend.js';

export const FLOOR = 0.5;                 // searches keep every find from here up; the match level only filters them
export const MAX_PIXELS = 40e6;           // a sheet drawn larger than this at the working scale is skipped and said so

/**
 * sheets: [{ key, width, height }] (display units); entries: [{ id, name, tpl, problem }] (include = entry.on !== false);
 * w = px per display unit for the working scale; legend = { key, box: {x,y,w,h} in px at w } (blanked on its own sheet) or null;
 * ftOf(key) → feet per unit or null; rasterize(sheet, wt) → ink image; unit(sheet, wt) → (x, y) → sheet user point;
 * search(img, jobs) → Promise<{ [entryId]: [{x,y,w,h,rot,score}] }>.
 */
export async function runCountAll({ sheets, entries, w, legend = null, ftOf = () => null, rasterize, unit, search, parallel = 1, onProgress = () => {}, stop = () => false, anyAngle = false }) {
  const t0 = Date.now();
  const use = entries.filter((e) => e.on !== false && !e.problem);
  const jobs = use.map((e) => ({ key: e.id, tpl: e.tpl, floor: FLOOR, turns: e.turns || distinctTurns(e.tpl, anyAngle) }));
  const srcFt = legend ? ftOf(legend.key) : null;
  const hits = [], skipped = [];
  let done = 0, searched = 0;
  const pending = new Set();
  const take = async (p) => { pending.delete(p); await p; };
  for (const sh of sheets) {
    if (stop()) break;
    const tgtFt = ftOf(sh.key);
    for (const wt of renderScales(w, srcFt, tgtFt)) {
      if (sh.width * sh.height * wt * wt > MAX_PIXELS) { skipped.push({ key: sh.key, why: 'large' }); continue; }
      const img = await rasterize(sh, wt);
      if (stop()) break;
      if (legend && sh.key === legend.key && wt === w) blank(img, legend.box);
      const to = unit(sh, wt);
      const p = search(img, jobs).then((res) => {
        searched++;
        for (const j of jobs) for (const c of res[j.key] || []) {
          const a = to(c.x, c.y), b = to(c.x + c.w, c.y + c.h), cc = to(c.x + c.w / 2, c.y + c.h / 2);
          hits.push({ entry: j.key, sheet: sh.key, x: Math.min(a.x, b.x), y: Math.min(a.y, b.y), w: Math.abs(b.x - a.x), h: Math.abs(b.y - a.y), score: c.score, rot: c.rot, center: [cc.x, cc.y] });
        }
      });
      const tracked = p.then(() => { pending.delete(tracked); onProgress(++done / sheets.length, sh.key); });
      pending.add(tracked);
      if (pending.size >= parallel) await Promise.race([...pending]);
    }
  }
  await Promise.all([...pending]);
  return { hits, skipped, searched, ms: Date.now() - t0, stopped: !!stop() };
}

/** Blank the legend's own box on its sheet (its symbols are the templates, not finds); a little paper around it too. */
function blank(img, box, pad = 3) {
  const x0 = Math.max(0, Math.floor(box.x - pad)), y0 = Math.max(0, Math.floor(box.y - pad)), x1 = Math.min(img.w, Math.ceil(box.x + box.w + pad)), y1 = Math.min(img.h, Math.ceil(box.y + box.h + pad));
  for (let y = y0; y < y1; y++) img.data.fill(0, y * img.w + x0, y * img.w + x1);
}

/** The counts at a match level: the symbols' own finds, mix-ups settled, per symbol and per sheet. th(entryId) or a number. */
export function decide(hits, th) {
  const at = typeof th === 'function' ? th : () => th;
  const { kept, mixed } = keepBest(hits.filter((h) => h.score >= at(h.entry)), at);
  return { kept, mixed, tally: tally(kept) };
}

/** Marks a person turned off in the review (by index in `kept`) leave the counts. */
export const without = (kept, off) => kept.filter((h) => !off.has(h));

/**
 * What accepting adds. existing = the takeoff's items [{ id, name, type }]: a symbol whose name is an existing COUNT item goes
 * onto it (case ignored), else a new count item named after the symbol. A hand mark already within `near` units of a find on
 * the same sheet is not added twice (marks = the takeoff's count marks [{ item, sheet, pts }]).
 */
export function planItems(entries, kept, existing = [], marks = [], near = 0) {
  const out = [];
  for (const e of entries) {
    if (e.on === false || e.problem) continue;
    const mine = kept.filter((h) => h.entry === e.id);
    if (!mine.length) continue;
    const name = String(e.name || '').trim() || 'Symbol ' + e.id;
    const it = existing.find((x) => x.type === 'count' && x.name.toLowerCase() === name.toLowerCase()) || null;
    const have = it ? marks.filter((m) => m.item === it.id && m.pts?.length) : [];
    let dup = 0;
    const list = [];
    for (const h of mine) {
      const hit = have.some((m) => m.sheet === h.sheet && m.pts[0][0] >= h.x - near && m.pts[0][0] <= h.x + h.w + near && m.pts[0][1] >= h.y - near && m.pts[0][1] <= h.y + h.h + near);
      if (hit) { dup++; continue; }
      list.push({ sheet: h.sheet, pts: [h.center] });
    }
    out.push({ entry: e.id, name: it ? it.name : name, item: it ? it.id : null, marks: list, already: dup });
  }
  return out;
}

/** A symbol's counts by sheet, in the order the sheets are open: [{ sheet, title, n }]. */
export function sheetLinks(entryId, tal, order, titleOf = (k) => k) {
  const by = tal.bySheet[entryId] || {};
  return order.filter((k) => by[k]).map((k) => ({ sheet: k, title: titleOf(k), n: by[k] }));
}
