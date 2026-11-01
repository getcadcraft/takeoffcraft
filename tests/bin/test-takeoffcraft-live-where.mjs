#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** 0.8 round 3 (takeoff_PART_3): TakeoffCraft's live adapter answers where(ops) for EG.41. Run: node bin/test-takeoffcraft-live-where.mjs */
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(REPO, 'public_html/assets/apps/takeoffcraft/dev');
const mod = (f) => import(pathToFileURL(path.join(APP, f)).href);
const { Takeoff } = await mod('model.js');
const { createLive } = await mod('live.js');
let pass = 0, fail = 0;
const ok = (c, m, x) => { if (c) pass++; else { fail++; console.log('FAIL ' + m + (x !== undefined ? ' — ' + JSON.stringify(x) : '')); } };
const H = 'a'.repeat(64), K = H + ':0', K2 = H + ':1';
const m = new Takeoff();
m.addFile({ hash: H, name: 'a.pdf', size: 1, pages: 2 });
m.change('item', (s) => { s.items.push({ id: 'i1', name: 'Wall', type: 'linear', unit: 'LF' }); });
m.change('marks', (s) => { s.marks.push({ id: 'm1', item: 'i1', sheet: K, kind: 'linear', pts: [{ x: 10, y: 20 }, { x: 110, y: 20 }] }, { id: 'm2', item: 'i1', sheet: K2, kind: 'linear', pts: [{ x: 5, y: 5 }, { x: 6, y: 9 }] }); });
const lv = createLive(m, { sheetTitle: (k) => (k === K ? 'A-101' : '') });
ok(typeof lv.where === 'function', 'where exists');
ok(lv.sheetLabel(K) === 'A-101' && lv.sheetLabel(K2) === K2, 'sheet label falls back to the key');
let w = lv.where([{ o: 'g', g: 's1' }, { o: 'set', c: 'marks', id: 'm1', f: 'item', v: 'i1' }]);
ok(w && w.sheet === K && JSON.stringify(w.box) === '[10,20,110,20]', 'a change to a mark is located by its points', w);
w = lv.where([{ o: 'add', c: 'marks', id: 'm9', v: { id: 'm9', sheet: K2, pts: [[1, 2], [3, 4]] }, at: 2 }]);
ok(w.sheet === K2 && JSON.stringify(w.box) === '[1,2,3,4]', 'an added mark (points as pairs)', w);
w = lv.where([{ o: 'set', c: 'marks', id: 'm1', f: 'x', v: 1 }, { o: 'set', c: 'marks', id: 'm2', f: 'x', v: 1 }]);
ok(w.sheet === '\u0000mixed', 'two sheets are mixed', w);
w = lv.where([{ o: 'del', c: 'marks', id: 'm1' }]);
ok(w.sheet === K && w.box === null, 'a removal has a sheet and no box', w);
w = lv.where([{ o: 'key', c: 'sheets', k: K, v: { scale: null } }]);
ok(w.sheet === K && w.box === null, 'a scale change is on its sheet, unbounded', w);
ok(lv.where([{ o: 'set', c: 'items', id: 'i1', f: 'name', v: 'x' }]) === null, 'an item is on no sheet');
ok(lv.where([{ o: 'top', f: 'name', v: 'x' }]) === null && lv.where([]) === null, 'top-level and empty are null');
w = lv.where([{ o: 'set', c: 'marks', id: 'gone', f: 'x', v: 1 }]);
ok(w === null || w.box === null, 'an unknown mark is unbounded or unplaced', w);
console.log(pass + ' passed, ' + fail + ' failed'); process.exit(fail ? 1 : 0);
