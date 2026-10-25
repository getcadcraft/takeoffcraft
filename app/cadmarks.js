/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadmarks.js — from objects counted in a drawing (cadcount.js) to the count marks the takeoff takes (0.7 TD.3). DOM-free; Node tests.
 *
 *   planMarks({ set, sheetIndex, scope, found, existing, tol }) → { list, already, stacked, unplaced }
 *
 * scope 'sheet'   the objects are the ones sheet `sheetIndex` shows; each mark sits at the point the sheet shows it at
 * scope 'drawing' every object once: a model-space object's mark goes on the Model sheet, a paper-space object's on its own layout
 * `list` = [{ sheet: '<hash>:<index>', pts: [[x, y]] }] in page user space, ready for model.addCounted.
 * `existing` = the item's marks already on those sheets ([{ sheet, pts }]): each one stands for one counted object (matched once, by
 * place), so counting again adds only what is new — and two objects drawn on top of each other are two objects, never merged.
 * `stacked` is how many objects sit exactly on another of the same block (a drafting slip worth a look), reported, not hidden.
 */

import { placeRef } from './cadset.js';

export function planMarks({ set, sheetIndex = 0, scope = 'sheet', found, existing = [], tol = 0.25, key = (i) => set.hash + ':' + i }) {
  const cad = set.cad, ix = cad.index();
  const sheetOf = new Map(cad.sheets.map((s) => [s.key, s]));
  const here = cad.sheets[sheetIndex];
  const left = new Map();                                   // existing marks by sheet, each used once
  for (const m of existing) {
    const p = m.pts?.[0]; if (!p) continue;                  // a mark's point is {x, y} (state) or [x, y] (a file)
    (left.get(m.sheet) || left.set(m.sheet, []).get(m.sheet)).push({ x: Array.isArray(p) ? p[0] : p.x, y: Array.isArray(p) ? p[1] : p.y, used: false });
  }
  const list = [], seen = new Map();
  let already = 0, stacked = 0, unplaced = 0;
  for (const r of found) {
    let sheet, x, y;
    if (scope === 'sheet') {
      const p = here ? placeRef(here, r, ix) : null;     // where THIS sheet shows it (through a viewport on a layout)
      if (!p || p.hidden) { unplaced++; continue; }
      sheet = here; x = p.x; y = p.y;
    } else {
      sheet = r.space === 'model' ? cad.sheets.find((s) => s.kind === 'model') : sheetOf.get(r.space);
      const p = sheet ? placeRef(sheet, r, ix) : null;
      if (!p || p.hidden) { unplaced++; continue; }
      x = p.x; y = p.y;
    }
    const skey = key(sheet.index);
    const mine = left.get(skey);
    const hit = mine?.find((m) => !m.used && Math.abs(m.x - x) <= tol && Math.abs(m.y - y) <= tol);
    if (hit) { hit.used = true; already++; continue; }
    const k = (r.key || r.type) + '|' + skey + '|' + x.toFixed(3) + '|' + y.toFixed(3);
    if (seen.has(k)) stacked++; else seen.set(k, 1);
    list.push({ sheet: skey, pts: [[x, y]] });
  }
  return { list, already, stacked, unplaced };
}
