#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-takeoffcraft-cad.mjs — TakeoffCraft opens a DWG / DXF and counts straight from it (0.7 Track TD). DOM-free: the same
 * modules the browser loads (takeoffcraft/<build>/cadset.js, cadcount.js, cadmarks.js, model.js), the shared readers
 * (dwg/read.js = lib/dwg, dxf-model.js = CadCraft's), no browser. The browser run is tools/takeoffcraft-test/browser-cad.mjs.
 *
 *   node bin/test-takeoffcraft-cad.mjs [--build dev] [--verbose]
 *
 * Fixtures: fixtures/cad/ (made once by tools/takeoffcraft-test/make-cad-fixtures.mjs; every number asserted is the hand count the
 * generator placed: kitchen-count.truth.json), fixtures/dwg/dyn-attrs-visibility.dwg (a dynamic block with three states),
 * fixtures/dwg/kitchen-equipment.* (a real kitchen equipment drawing: DWG and DXF read the same).
 *
 * TD.4 (measure from geometry) and TD.6 (the marked PDF from a drawing) are the last two sections before "Words".
 *
 * What it checks: the copies are byte-identical (no second parser); the same drawing as DWG 2000, DWG 2018 and DXF counts the same
 * everywhere; counts by block (top level, nested, hidden layers, dynamic variants, arrays), by layer + type, by text and by
 * attribute equal the hand count; the count on sheet K-101 equals the PDF auto-count of that sheet plotted to PDF; scales (INSUNITS,
 * viewport, none); marks, one undo step, counting again adds only what is new; the saved takeoff keeps the CAD file's hash and
 * name; untrusted input (truncation fuzz, bit flips, a binary DXF, not a drawing, a recursive block, a huge MINSERT, caps).
 */
import path from 'node:path';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const VERBOSE = args.includes('--verbose');
const APP = path.join(ROOT, 'public_html/assets/apps/takeoffcraft', BUILD);
const FIX = path.join(ROOT, 'fixtures/cad');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const eq = (a, b, name) => ok(Object.is(a, b) || a === b, name, 'got ' + JSON.stringify(a) + ', want ' + JSON.stringify(b));
const near = (a, b, t = 1e-9) => Math.abs(a - b) <= t * Math.max(1, Math.abs(a), Math.abs(b));
const section = (s) => console.log('\n' + s);

if (!fs.existsSync(path.join(FIX, 'kitchen-count.dwg'))) execFileSync('node', [path.join(ROOT, 'tools/takeoffcraft-test/make-cad-fixtures.mjs')], { stdio: 'inherit' });
const TRUTH = JSON.parse(fs.readFileSync(path.join(FIX, 'kitchen-count.truth.json'), 'utf8'));

const I18N = await load('i18n.js');
const EN = JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8'));
I18N.init({ strings: EN });
const U = await load('units.js');
const M = await load('model.js');
const Set_ = await load('cadset.js');
const Cc = await load('cadcount.js');
const Cm = await load('cadmarks.js');
const Geo = await load('cadgeom.js');
const G = await load('geom.js');
const Pm = await load('pdfmarks.js');
const Cp = await load('cadpdf.js');
const PDFLib = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/pdf-lib/current/pdf-lib.esm.js')).href);
const Pdfset = await load('pdfset.js');
const E = await load('export.js');
const { readDwg } = await load('dwg/read.js');
const { readDxfModel } = await load('dxf-model.js');
const { decodeDxfBytes } = await load('dxf-decode.js');
const readers = { dwg: async (b) => readDwg(b), dxf: async (b) => readDxfModel(decodeDxfBytes(b).text) };
const bytesOf = (f) => new Uint8Array(fs.readFileSync(path.join(FIX, f)));
async function open(f, o = {}) {
  const b = typeof f === 'string' ? bytesOf(f) : f;
  return Set_.openCad(b, typeof f === 'string' ? f : 'x.dwg', { hash: await Pdfset.sha256Hex(b), readers, ...o });
}
const refsOf = (set, sheet = null) => { const ix = set.cad.index(); return sheet ? Set_.sheetRefs(sheet, ix).map((e) => e.ref) : ix.all; };

// ---------------------------------------------------------------------------
section('No second parser: the CAD modules are byte-identical copies');
{
  const a = execFileSync('node', [path.join(ROOT, 'tools/dwg-test/writer-sync.mjs'), '--check', 'takeoffcraft'], { encoding: 'utf8' });
  ok(/all copies identical/.test(a), 'dwg/ is lib/dwg (tools/dwg-test/writer-sync.mjs --check takeoffcraft)', a.trim().split('\n').pop());
  const b = execFileSync('node', [path.join(ROOT, 'tools/takeoffcraft-test/cad-sync.mjs'), '--check'], { encoding: 'utf8' });
  ok(/all copies identical/.test(b), 'dxf-model.js, dxf-decode.js (CadCraft) and dwg-compile.js, dwg-dynamic.js (BimCraft) are copies', b.trim().split('\n').pop());
  const imports = ['cadset.js', 'cadcount.js', 'cadmarks.js', 'cadcount-ui.js'].flatMap((f) => [...fs.readFileSync(path.join(APP, f), 'utf8').matchAll(/from '(\.\/[^']+)'/g)].map((m) => m[1]));
  ok(imports.every((i) => fs.existsSync(path.join(APP, i))), 'every import of the CAD modules resolves inside takeoffcraft/' + BUILD);
}

// ---------------------------------------------------------------------------
section('One drawing, three files: DWG 2018, DWG 2000 and DXF read and count the same');
const kitchen = {};
for (const f of ['kitchen-count.dwg', 'kitchen-count-r2000.dwg', 'kitchen-count.dxf']) kitchen[f] = await open(f);
{
  const names = Object.keys(kitchen);
  for (const f of names) {
    const set = kitchen[f];
    eq(set.pages.map((p) => p.label).join('|'), 'Model|K-101', f + ': sheets are Model, then the layout');
    eq(set.cad.format, f.endsWith('.dxf') ? 'dxf' : 'dwg', f + ': read as ' + (f.endsWith('.dxf') ? 'DXF' : 'DWG'));
    eq(set.cad.units.name, 'inches', f + ': INSUNITS says inches');
    ok(set.cad.warnings.length === 0, f + ': no warnings', set.cad.warnings.join(' '));
    ok(set.pages.every((p) => p.width > 0 && p.height > 0 && p.transform[3] === -1 && p.rotate === 0), f + ': every sheet has a page size and the y-up transform');
  }
  const cat = (f) => Cc.catalog(set0(f).cad.index(), set0(f).cad.index().all);
  const set0 = (f) => kitchen[f];
  const sig = (f) => JSON.stringify(cat(f).blocks.map((b) => [b.name, b.count, b.top, b.nested])) + '|' + JSON.stringify(cat(f).shapes) + '|' + JSON.stringify(cat(f).texts);
  ok(sig(names[0]) === sig(names[1]) && sig(names[0]) === sig(names[2]), 'the three catalogs (blocks, layer × type, texts) are identical', sig(names[0]).slice(0, 160));
  // sheet K-101 is 36 × 24 in = 2592 × 1728 pt, like the PDF plotted from it
  const k = kitchen[names[0]].pages[1];
  ok(near(k.width, 2592, 1e-6) && near(k.height, 1728, 1e-6), 'sheet K-101 is 36 × 24 in: 2592 × 1728 points', k.width + ' × ' + k.height);
}

// ---------------------------------------------------------------------------
section('Counting by block equals the hand count');
for (const [f, set] of Object.entries(kitchen)) {
  const ix = set.cad.index(), all = ix.all;
  const n = (q, refs = all) => Cc.countBlocks(ix, refs, q);
  eq(n({ names: ['SHELF-18X48'] }).total, TRUTH.shelves, f + ': shelves = 22 (the 3 on the frozen layer are not counted)');
  eq(n({ names: ['SHELF-18X48'] }).hiddenSkipped, TRUTH.shelvesFrozen, f + ': and the 3 frozen ones are reported, not hidden');
  eq(n({ names: ['SHELF-18X48'], hidden: 'include' }).total, TRUTH.shelves + TRUTH.shelvesFrozen, f + ': counted when the frozen layer is chosen: 25');
  eq(n({ names: ['shelf-18x48'] }).total, TRUTH.shelves, f + ': block names do not care about case');
  eq(n({ names: ['TABLE-30X60'], nested: 'top' }).total, TRUTH.tablesTop, f + ': tables placed directly = 4');
  eq(n({ names: ['TABLE-30X60'], nested: 'inside' }).total, TRUTH.tablesNested, f + ': tables inside PREP-ZONE = 6 (3 zones × 2)');
  eq(n({ names: ['TABLE-30X60'] }).total, TRUTH.tablesTop + TRUTH.tablesNested, f + ': tables at every depth = 10');
  eq(n({ names: ['TABLE-30X60'], hidden: 'include' }).total, TRUTH.tablesTop + TRUTH.tablesNested + TRUTH.tablesHidden, f + ': with the layer that is off = 12');
  eq(n({ names: ['SINK-3COMP'] }).total, TRUTH.sinks, f + ': sinks (only ever inside a zone) = 3');
  eq(n({ names: ['SINK-3COMP'], nested: 'top' }).total, 0, f + ': none at the top level');
  eq(n({ names: ['PREP-ZONE'] }).total, TRUTH.prepZones, f + ': prep zones = 3');
  eq(n({ names: ['LIGHT'] }).total, TRUTH.lights, f + ': lights = 6');
  eq(n({ names: ['SHELF-18X48'], layers: ['K-EQPM'] }).total, TRUTH.shelves, f + ': a layer filter that matches changes nothing');
  eq(n({ names: ['SHELF-18X48'], layers: ['K-OLD'] }).total, 0, f + ': a layer filter on the frozen layer finds none unless hidden layers are chosen');
  eq(n({ names: ['SHELF-18X48'], layers: ['K-OLD'], hidden: 'include' }).total, TRUTH.shelvesFrozen, f + ': …and the 3 with it');
  eq(n({ names: ['NO-SUCH-BLOCK'] }).total, 0, f + ': a block that is not there counts 0');
  const r = n({ names: ['TABLE-30X60'] });
  eq(JSON.stringify(r.byLayer), JSON.stringify([['K-EQPM', 10]]), f + ': tables sit on K-EQPM (inside the zone they take the zone\'s layer)');
  // blocks in the catalog, most numerous first
  const cat = Cc.catalog(ix, all);
  eq(cat.blocks[0].name, 'SHELF-18X48', f + ': the catalog lists the most numerous block first');
}

// ---------------------------------------------------------------------------
section('By layer + entity type, by text and by attribute');
for (const [f, set] of Object.entries(kitchen)) {
  const ix = set.cad.index(), all = ix.all;
  eq(Cc.countShapes(ix, all, { layer: 'E-LITE', type: 'CIRCLE' }).total, TRUTH.circlesLite, f + ': circles on E-LITE = 12');
  eq(Cc.countShapes(ix, all, { layer: 'E-LITE', type: 'CIRCLE', inside: { model: set.cad.model } }).total, TRUTH.circlesLite + TRUTH.lights, f + ': and the 6 inside the LIGHT blocks = 18');
  eq(Cc.countShapes(ix, all, { layer: 'e-lite', type: 'circle' }).total, TRUTH.circlesLite, f + ': layer and type names do not care about case');
  eq(Cc.countShapes(ix, all, { layer: 'A-WALL', type: 'LWPOLYLINE' }).total, 1, f + ': the freezer room is one polyline on A-WALL');
  eq(Cc.countTexts(ix, all, { text: 'A3' }).total, TRUTH.textA3 + TRUTH.tagA3, f + ': text "A3" = 5 texts + 3 attribute values = 8');
  eq(Cc.countTexts(ix, all, { text: 'A3', attribute: 'ITEM' }).total, TRUTH.tagA3, f + ': only the attribute ITEM = 3');
  eq(Cc.countTexts(ix, all, { text: 'C7', attribute: 'ITEM' }).total, TRUTH.tagC7, f + ': attribute C7 = 2');
  eq(Cc.countTexts(ix, all, { text: 'B1' }).total, TRUTH.textB1, f + ': text "B1" = 2');
  eq(Cc.countTexts(ix, all, { text: 'b1' }).total, TRUTH.textB1, f + ': text matching ignores case by default');
  eq(Cc.countTexts(ix, all, { text: 'b1', caseSensitive: true }).total, 0, f + ': …and can be exact about it');
  eq(Cc.countTexts(ix, all, { text: 'FREEZER', mode: 'contains' }).total, 1, f + ': "contains" finds FREEZER ROOM');
  eq(Cc.countTexts(ix, all, { text: 'ROOM', mode: 'word' }).total, 1, f + ': "whole word" finds ROOM');
  eq(Cc.countTexts(ix, all, { text: 'OOM', mode: 'word' }).total, 0, f + ': …and not a piece of a word');
  eq(Cc.countTexts(ix, all, { text: '' }).total, 0, f + ': an empty text counts nothing');
}

// ---------------------------------------------------------------------------
section('Sheets: what a layout shows, and the scale each starts with');
{
  const set = kitchen['kitchen-count.dwg'], ix = set.cad.index();
  const [model, k101] = set.cad.sheets;
  const onModel = refsOf(set, model), onK = refsOf(set, k101);
  eq(Cc.countBlocks(ix, onModel, { names: ['SHELF-18X48'] }).total, TRUTH.shelves, 'Model shows all 22 shelves');
  eq(Cc.countBlocks(ix, onK, { names: ['SHELF-18X48'] }).total, TRUTH.shelves, 'K-101 (its viewport on the model) shows the same 22');
  eq(Cc.countBlocks(ix, onK, { names: ['TABLE-30X60'] }).total, TRUTH.tablesTop + TRUTH.tablesNested, 'and the 10 tables');
  ok(onK.some((r) => r.space !== 'model'), 'K-101 also has its own paper-space objects (title block)');
  ok(!onModel.some((r) => r.space !== 'model'), 'Model has none from the layout');
  // every shelf lands inside the viewport window on the page
  const pts = Set_.sheetRefs(k101, ix).filter((e) => e.ref.name === 'SHELF-18X48');
  const vp = k101.viewports[0], t0 = k101.toPage;
  const inside = pts.every((e) => e.x >= t0[0] * vp.rect.x0 + t0[4] && e.x <= t0[0] * vp.rect.x1 + t0[4] && e.y >= t0[3] * vp.rect.y0 + t0[5] && e.y <= t0[3] * vp.rect.y1 + t0[5]);
  ok(inside && pts.length === TRUTH.shelves + TRUTH.shelvesFrozen, 'every shelf the sheet shows sits inside the viewport on the page (25: the 3 on the frozen layer are placed too, and flagged hidden)', pts.length);
  // scale (TD.2)
  const sm = model.scale, sk = k101.scale;
  ok(sm && sm.method === 'drawing' && near(sm.ftPerUnit, (1 / 12) / model.k, 1e-12), 'Model: feet per page unit = (1/12 ft per inch) / k, from INSUNITS', JSON.stringify(sm));
  ok(sk && near(sk.ftPerUnit, 2 / 72, 1e-9), 'K-101: 1/2" = 1\'-0" is 2 ft per paper inch: 2/72 ft per point, from the viewport', JSON.stringify(sk));
  eq(U.matchPreset(sk.ftPerUnit)?.label, TRUTH.scale, 'and the app names it: ' + TRUTH.scale);
  // a tape on the sheet: two page points 2592 pt apart (36 in of paper) are 72 ft
  ok(near(sk.ftPerUnit * 2592, 72, 1e-9), 'the sheet\'s full width (36 in of paper) is 72 ft at that scale');
  // model: a shelf is 18 in wide; k page units per inch
  ok(near(18 * model.k * sm.ftPerUnit, 1.5, 1e-9), 'on Model a shelf\'s 18 in measure 1.5 ft through the scale');
  // a drawing whose viewport scale does not match a preset is still a scale, named from the sheet
  eq(k101.mixed, false, 'one viewport scale on K-101: not "mixed"');
}

// ---------------------------------------------------------------------------
section('No units: "No scale", never zero, and counting still works');
for (const f of ['no-units.dwg', 'no-units.dxf']) {
  const set = await open(f), ix = set.cad.index();
  ok(set.cad.sheets.every((s) => s.scale === null), f + ': no sheet gets a scale');
  eq(set.cad.sheets[0].note, 'nounits', f + ': and the model sheet says why: no units');
  eq(Cc.countBlocks(ix, ix.all, { names: ['POST'] }).total, 7, f + ': 7 posts still count');
  // a takeoff on it: count items need no scale; a linear item on the sheet is "unscaled", never 0 ft
  const t = new M.Takeoff();
  t.addFile({ hash: set.hash, name: set.name, size: set.size, pages: set.pages.length });
  const plan = Cm.planMarks({ set, sheetIndex: 0, scope: 'sheet', found: Cc.countBlocks(ix, ix.all, { names: ['POST'] }).found });
  const out = t.addCounted({ create: { name: 'Post', type: 'count' }, list: plan.list, label: 'Count' });
  const q = M.quantities(t.state).get(out.item);
  ok(q.count === 7 && q.unscaled === 0, f + ': the count item totals 7 with nothing unscaled', JSON.stringify([q.count, q.unscaled]));
  const lin = t.addItem({ name: 'Run', type: 'linear' });
  t.addMark({ item: lin, sheet: M.sheetKey(set.hash, 0), pts: [[0, 0], [100, 0]], kind: 'linear' });
  const ql = M.quantities(t.state).get(lin);
  ok(ql.unscaled === 1 && ql.lengthFt === 0, f + ': a linear run on that sheet is reported unscaled (not measured as zero)', JSON.stringify([ql.unscaled, ql.lengthFt]));
  // Calibrate wins: a scale set by hand replaces what the drawing gave (none here)
  t.setScale(M.sheetKey(set.hash, 0), U.scaleRecord({ method: 'calibrated', ftPerUnit: 0.5, label: 'x', cal: null }));
  const ql2 = M.quantities(t.state).get(lin);
  ok(ql2.unscaled === 0 && near(ql2.lengthFt, 50, 1e-9), 'a calibrated scale is used from then on: 100 page units at 0.5 ft = 50 ft', JSON.stringify([ql2.unscaled, ql2.lengthFt]));
}
{
  // Calibrate overrides a scale that came from the drawing
  const set = kitchen['kitchen-count.dwg'], key = M.sheetKey(set.hash, 1);
  const t = new M.Takeoff();
  t.addFile({ hash: set.hash, name: set.name, size: set.size, pages: 2 });
  t.setScale(key, U.scaleRecord({ method: 'preset', preset: '1/4', ftPerUnit: set.cad.sheets[1].scale.ftPerUnit, label: 'a' }));
  t.setScale(key, U.scaleRecord({ method: 'calibrated', ftPerUnit: 0.1, label: 'cal', cal: null }));
  eq(t.scaleOf(key).ftPerUnit, 0.1, 'Calibrate replaces the scale the drawing gave');
  const t2 = new M.Takeoff(); t2.addFile({ hash: set.hash, name: set.name, size: set.size, pages: 2 }); t2.setScale(key, U.scaleRecord({ method: 'drawing', ftPerUnit: 0.0556, label: 'From the drawing' }));
  const back = new M.Takeoff(); back.addFile({ hash: set.hash, name: set.name, size: set.size, pages: 2 });
  const res = back.load(t2.toJSON());
  ok(res.ok === true, 'a project holding a "drawing" scale loads');
  eq(back.scaleOf(key)?.method, 'drawing', '…and keeps the scale\'s method');
}

// ---------------------------------------------------------------------------
section('Dynamic blocks: the variants are listed apart');
{
  const set = await open('../dwg/dyn-attrs-visibility.dwg'), ix = set.cad.index();
  const cat = Cc.catalog(ix, ix.all), b = cat.blocks.find((x) => x.name === 'CC-SOCKET');
  ok(b && b.dynamic && b.count === 3, 'CC-SOCKET is one dynamic block placed 3 times (its anonymous copies *B1, *B2 are not separate blocks)', JSON.stringify(cat.blocks.map((x) => [x.name, x.count])));
  eq(JSON.stringify(b.variants.map((v) => v.state).sort()), JSON.stringify(['Double', 'Outdoor', 'Single']), 'its three states: Single, Double, Outdoor');
  eq(Cc.countBlocks(ix, ix.all, { names: ['CC-SOCKET'] }).total, 3, 'counted together: 3');
  for (const s of ['Single', 'Double', 'Outdoor']) eq(Cc.countBlocks(ix, ix.all, { names: ['CC-SOCKET'], variant: s }).total, 1, 'counted apart: ' + s + ' = 1');
  eq(Cc.countBlocks(ix, ix.all, { names: ['CC-SOCKET'], variant: 'Triple' }).total, 0, 'a state it does not have: 0');
  eq(JSON.stringify(Cc.countBlocks(ix, ix.all, { names: ['CC-SOCKET'] }).byVariant.map((x) => x[0]).sort()), JSON.stringify(['Double', 'Outdoor', 'Single']), 'the result lists the states with their counts');
}

// ---------------------------------------------------------------------------
section('Block arrays (MINSERT) are expanded');
for (const f of ['block-array.dxf', 'block-array.dwg']) {
  const set = await open(f), ix = set.cad.index();
  const r = Cc.countBlocks(ix, ix.all, { names: ['POST'] });
  eq(r.total, 20 + 6 + 1, f + ': 4 × 5 + 3 × 2 + 1 single = 27');
  const pts = r.found.map((x) => [x.x, x.y]);
  const grid = pts.filter((p) => p[0] < 200);
  eq(grid.length, 20, f + ': the first array is 20 posts');
  ok(grid.every(([x, y]) => near((x / 24) % 1, 0, 1e-6) && near((y / 30) % 1, 0, 1e-6)) && new Set(grid.map((p) => p.join())).size === 20, f + ': on a 24 × 30 grid, all distinct');
  const turned = pts.filter((p) => p[0] > 300 && p[0] < 700);
  eq(turned.length, 6, f + ': the second array is 6 posts');
  const c = Math.cos(Math.PI / 6), s = Math.sin(Math.PI / 6);
  const want = [];
  for (let rr = 0; rr < 2; rr++) for (let cc = 0; cc < 3; cc++) want.push([400 + c * cc * 20 - s * rr * 20, 0 + s * cc * 20 + c * rr * 20]);
  ok(want.every(([x, y]) => turned.some((p) => near(p[0], x, 1e-6) && near(p[1], y, 1e-6))), f + ': turned 30°, along the turned axes (columns 20 apart, rows 20 apart)');
  eq(pts.filter((p) => p[0] > 700).length, 1, f + ': and the single insert');
  eq(r.found.filter((x) => x.cell).length, 26, f + ': array copies know their cell');
}

// ---------------------------------------------------------------------------
section('Marks: one undo step, counting again adds only what is new, stacked objects stay two');
{
  const set = kitchen['kitchen-count.dwg'], ix = set.cad.index();
  const t = new M.Takeoff();
  t.addFile({ hash: set.hash, name: set.name, size: set.size, pages: set.pages.length });
  const k101 = set.cad.sheets[1];
  const res = Cc.countBlocks(ix, refsOf(set, k101), { names: ['SHELF-18X48'] });
  const plan = Cm.planMarks({ set, sheetIndex: 1, scope: 'sheet', found: res.found });
  eq(plan.list.length, 22, 'planMarks: 22 marks for the 22 shelves on K-101');
  eq(plan.already + plan.stacked + plan.unplaced, 0, '…none already counted, stacked or unplaced');
  eq(new Set(plan.list.map((m) => m.sheet)).size, 1, '…all on one sheet: ' + plan.list[0].sheet.slice(-3));
  const before = t.undoStack.length;
  const out = t.addCounted({ create: { name: 'Shelf', type: 'count' }, list: plan.list, label: 'Count 22' });
  eq(t.undoStack.length, before + 1, 'adding a NEW item with its 22 marks is one undo step');
  const q = M.quantities(t.state).get(out.item);
  eq(q.count, 22, 'the item totals 22 EA');
  eq(t.state.marks.every((m) => m.kind === 'count' && m.pts.length === 1), true, 'every mark is a one-point count mark');
  t.undo();
  ok(t.state.items.length === 0 && t.state.marks.length === 0, 'one undo takes the item and its marks away');
  t.redo();
  eq(t.state.marks.length, 22, 'redo brings them back');
  // again: nothing new
  const plan2 = Cm.planMarks({ set, sheetIndex: 1, scope: 'sheet', found: res.found, existing: t.state.marks.filter((m) => m.item === out.item) });
  eq(plan2.list.length, 0, 'counting the same shelves again adds 0');
  eq(plan2.already, 22, '…and says 22 are already counted');
  const same = t.addCounted({ item: out.item, list: plan2.list, label: 'x' });
  eq(t.undoStack.length, before + 1, 'adding nothing is not an undo step');
  void same;
  // the whole drawing, every object once: marks go on the Model sheet
  const all = Cc.countBlocks(ix, ix.all, { names: ['SHELF-18X48'] });
  const planAll = Cm.planMarks({ set, sheetIndex: 1, scope: 'drawing', found: all.found });
  eq(planAll.list.length, 22, 'scope "whole drawing": 22 once');
  eq(new Set(planAll.list.map((m) => m.sheet)).size === 1 && planAll.list[0].sheet === M.sheetKey(set.hash, 0), true, '…on the Model sheet');
  // the same item, now counting the whole drawing after K-101: the marks are on another sheet, so they are new there
  const planOther = Cm.planMarks({ set, sheetIndex: 1, scope: 'drawing', found: all.found, existing: t.state.marks.filter((m) => m.item === out.item) });
  eq(planOther.list.length, 22, 'marks counted on K-101 do not stand for the Model sheet\'s (a mark is on one sheet)');
  // two objects on top of each other are two objects
  const dup = JSON.parse(JSON.stringify(res.found.slice(0, 2)));
  dup[1].x = dup[0].x; dup[1].y = dup[0].y; dup[1].id = dup[0].id;
  const planDup = Cm.planMarks({ set, sheetIndex: 1, scope: 'sheet', found: dup });
  eq(planDup.list.length, 2, 'two block references at the same point are two marks');
  eq(planDup.stacked, 1, '…and the plan says one sits on another');
  // the item that exists takes marks; a linear item refuses count marks
  const lin = t.addItem({ name: 'Run', type: 'linear' });
  let refused = false; try { t.addCounted({ item: lin, list: plan.list, label: 'x' }); } catch { refused = true; }
  ok(refused, 'a linear item refuses count marks (one condition per item)');
  // estimate rows and CSV carry the count like any other
  const est = M.baseEstimate(t.state);
  const row = est.rows.find((r) => r.kind === 'item' && r.itemId === out.item);
  eq(row.qty, 22, 'the estimate row says 22');
  const csv = E.estimateCsv(t.state);
  ok(/^Shelf,Count,EA,22/m.test(csv), 'and so does the estimate CSV: a normal count item', csv.split('\n')[1]);
}

// ---------------------------------------------------------------------------
section('The takeoff file keeps the drawing\'s hash and name');
{
  const set = kitchen['kitchen-count.dwg'];
  const bytes = bytesOf('kitchen-count.dwg');
  eq(set.hash, await Pdfset.sha256Hex(bytes), 'a drawing\'s hash is the SHA-256 of its bytes, as a PDF\'s is');
  const t = new M.Takeoff();
  t.addFile({ hash: set.hash, name: set.name, size: set.size, pages: set.pages.length });
  const ix = set.cad.index();
  const plan = Cm.planMarks({ set, sheetIndex: 1, scope: 'sheet', found: Cc.countBlocks(ix, refsOf(set, set.cad.sheets[1]), { names: ['SHELF-18X48'] }).found });
  t.addCounted({ create: { name: 'Shelf', type: 'count' }, list: plan.list, label: 'c' });
  const json = JSON.parse(JSON.stringify(t.toJSON()));
  eq(json.files[0].name, 'kitchen-count.dwg', 'the saved takeoff names the CAD file');
  eq(json.files[0].hash, set.hash, '…and its hash');
  eq(json.files[0].pages, 2, '…and its two sheets');
  const back = new M.Takeoff();
  const r = back.load(json);
  ok(r.ok, 'it reloads');
  eq(back.state.marks.length, 22, 'the 22 marks come back, on sheet ' + back.state.marks[0].sheet.slice(-3));
  // reopened: the files match by hash, as for PDFs
  const reopened = await open('kitchen-count.dwg');
  const m = Pdfset.matchFiles(back.state.files, [reopened]);
  ok(m.matched.size === 1 && m.missing.length === 0 && m.changed.length === 0, 'the reopened drawing matches by hash');
  const other = await open('kitchen-count-r2000.dwg');
  const m2 = Pdfset.matchFiles(back.state.files, [other]);
  ok(m2.matched.size === 0 && m2.missing.length === 1, 'a different file (the R2000 copy) does not match');
  eq(Pdfset.sheetTitle(reopened, reopened.pages[1], false), 'K-101', 'a layout sheet is titled by its name');
  eq(Pdfset.sheetTitle(reopened, reopened.pages[1], true), 'K-101 — kitchen-count', 'with several files open, by its name and the file\'s, without .dwg');
  eq(Pdfset.sheetTitle(reopened, reopened.pages[0], false), 'Model', 'model space is the sheet called Model');
}

// ---------------------------------------------------------------------------
section('The count on K-101 equals the PDF auto-count of the plotted sheet');
{
  const legacy = path.join(ROOT, 'tools/takeoffcraft-test/node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  if (!fs.existsSync(legacy)) { console.log('  (pdf.js legacy build not installed: cd tools/takeoffcraft-test && npm install) — skipped'); }
  else {
    const pdfjs = await import(pathToFileURL(legacy).href);
    pdfjs.GlobalWorkerOptions.workerSrc = pathToFileURL(path.join(ROOT, 'tools/takeoffcraft-test/node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs')).href;
    const Mt = await load('match.js');
    const doc = await pdfjs.getDocument({ data: bytesOf('kitchen-count-k101.pdf'), standardFontDataUrl: path.join(ROOT, 'tools/takeoffcraft-test/node_modules/pdfjs-dist/standard_fonts') + '/' }).promise;
    const page = await doc.getPage(1), vp1 = page.getViewport({ scale: 1 });
    const set = kitchen['kitchen-count.dwg'], ix = set.cad.index(), k101 = set.cad.sheets[1];
    ok(near(vp1.width, k101.width, 1e-6) && near(vp1.height, k101.height, 1e-6), 'the plotted PDF page is the same size as sheet K-101', vp1.width + ' × ' + vp1.height);
    const cad = Cc.countBlocks(ix, refsOf(set, k101), { names: ['SHELF-18X48'] });
    const plan = Cm.planMarks({ set, sheetIndex: 1, scope: 'sheet', found: cad.found });
    // the template: a box round the first shelf. A block's point is its base point (the shelf's lower left corner), so the shelf's middle
    // is 27 × 72 pt (half of 18 × 48 in at 1/2" = 1'-0": 54 × 144 pt on paper) up and to the right of the mark; the shelves are 72 pt apart
    const first = plan.list[0].pts[0], pad = 6, mid = [first[0] + 27, first[1] + 72];
    const box = { minX: mid[0] - 27 - pad, maxX: mid[0] + 27 + pad, minY: mid[1] - 72 - pad, maxY: mid[1] + 72 + pad };
    const raster = async (w) => {
      const vp = page.getViewport({ scale: w });
      const { canvas, context } = doc.canvasFactory.create(Math.ceil(vp.width), Math.ceil(vp.height));
      context.fillStyle = '#ffffff'; context.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvasContext: context, viewport: vp }).promise;
      return { data: Mt.toInk(context.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height), w: canvas.width, h: canvas.height };
    };
    const ds = [[box.minX, box.minY], [box.maxX, box.maxY], [box.minX, box.maxY], [box.maxX, box.minY]].map(([x, y]) => vp1.convertToViewportPoint(x, y));
    const minX = Math.min(...ds.map((p) => p[0])), maxX = Math.max(...ds.map((p) => p[0])), minY = Math.min(...ds.map((p) => p[1])), maxY = Math.max(...ds.map((p) => p[1]));
    const w = Mt.workScale(maxX - minX, maxY - minY);
    const src = await raster(w);
    const tpl = Mt.trim(Mt.crop(src, minX * w, minY * w, (maxX - minX) * w, (maxY - minY) * w));
    ok(!Mt.templateProblem(tpl), 'the template cut from the plotted PDF is usable');
    const cands = Mt.suppress(Mt.findSymbol(src, tpl, { floor: 0.5 }), 0.75);
    const centers = cands.map((c) => vp1.convertToPdfPoint((c.x + c.w / 2) / w, (c.y + c.h / 2) / w));
    eq(cands.length, 22, 'the PDF auto-count of the plotted sheet finds 22');
    eq(cands.length, cad.total, '…the same as the CAD count of K-101: ' + cad.total);
    const used = new Set();
    let matched = 0;
    for (const m of plan.list) {
      const i = centers.findIndex((c, j) => !used.has(j) && Math.hypot(c[0] - (m.pts[0][0] + 27), c[1] - (m.pts[0][1] + 72)) <= 4);
      if (i >= 0) { used.add(i); matched++; }
    }
    eq(matched, 22, 'and every CAD mark (at the block\'s base point) sits within 4 points of a PDF match once the shelf\'s half size is added: the same 22 shelves');
  }
}

// ---------------------------------------------------------------------------
section('A real equipment drawing: DWG and DXF read the same (fixtures/dwg/kitchen-equipment)');
{
  const a = await open('../dwg/kitchen-equipment.dwg'), b = await open('../dwg/kitchen-equipment.dxf');
  const sig = (s) => { const ix = s.cad.index(); const c = Cc.catalog(ix, ix.all); return JSON.stringify([c.blocks.map((x) => [x.name, x.count, x.top, x.nested]), c.shapes, c.texts.length]); };
  eq(sig(a), sig(b), 'blocks, shapes and texts agree between the DWG and the DXF');
  const ix = a.cad.index();
  eq(Cc.countBlocks(ix, ix.all, { names: ['BalloonEllipse', 'ITEMTAG-RECT'] }).total, 114, 'item tags: 93 + 21 = 114, the tag count in fixtures/facts.json');
  const sheets = a.cad.sheets.map((s) => s.name).join('|');
  eq(sheets, 'Model|K-101 EQUIPMENT|K-102 ELECTRICAL|K-501 DETAILS', 'sheets: Model and the three layouts');
  ok(a.cad.xrefs.length === 1 && !a.cad.xrefs[0].loaded && a.cad.warnings.some((w) => /1 linked drawing/.test(w)), 'its linked drawing is listed as missing, with a warning');
}

// ---------------------------------------------------------------------------
section('Untrusted input: truncated, flipped, wrong, huge');
{
  const good = bytesOf('kitchen-count.dwg');
  const total = (set) => Cc.countBlocks(set.cad.index(), set.cad.index().all, { names: ['SHELF-18X48'], hidden: 'include' }).total;
  let crashed = 0, opened = 0, refused = 0, over = 0;
  for (let i = 1; i <= 24; i++) {
    const cut = Math.floor(good.length * i / 25);
    try { const set = await open(good.slice(0, cut)); opened++; if (total(set) > TRUTH.shelves + TRUTH.shelvesFrozen) over++; }
    catch (err) { if (/could not be read|not a DWG/.test(err.message)) refused++; else { crashed++; console.log('    ! cut ' + cut + ': ' + err.message); } }
  }
  eq(crashed, 0, 'a DWG cut off at 24 places never crashes: ' + opened + ' open (with what was recoverable), ' + refused + ' refused with a message');
  eq(over, 0, '…and no cut file ever counts more than the whole one');
  const dxf = bytesOf('kitchen-count.dxf');
  crashed = 0; over = 0; opened = 0;
  for (let i = 1; i <= 24; i++) {
    try { const set = await open(dxf.slice(0, Math.floor(dxf.length * i / 25))); opened++; if (total(set) > TRUTH.shelves + TRUTH.shelvesFrozen) over++; }
    catch (err) { if (!/could not be read|not a DWG/.test(err.message)) { crashed++; console.log('    ! ' + err.message); } }
  }
  eq(crashed, 0, 'a DXF cut off at 24 places never crashes (' + opened + ' open)');
  eq(over, 0, '…and never counts more than the whole file');
  // bit flips
  let rng = 12345; const rand = () => (rng = (rng * 1664525 + 1013904223) >>> 0) / 4294967296;
  crashed = 0;
  for (let i = 0; i < 40; i++) {
    const b = good.slice(); for (let k = 0; k < 6; k++) b[Math.floor(rand() * b.length)] ^= 1 << Math.floor(rand() * 8);
    try { const set = await open(b); set.cad.index(); Cc.catalog(set.cad.index(), set.cad.index().all); } catch (err) { if (!/could not be read|not a DWG/.test(err.message)) { crashed++; console.log('    ! flip: ' + err.message); } }
  }
  eq(crashed, 0, '40 DWG files with six flipped bits each: opened or refused with a message, never a crash');
  // what the file is
  let msg = ''; try { await open(new TextEncoder().encode('AutoCAD Binary DXF\r\n\x1a\0' + 'x'.repeat(100))); } catch (e) { msg = e.message; }
  ok(/binary DXF/.test(msg), 'a binary DXF is refused and says so', msg);
  msg = ''; try { await open(new Uint8Array(500).fill(7)); } catch (e) { msg = e.message; }
  ok(/not a DWG or an ASCII DXF/.test(msg), 'bytes that are no drawing are refused', msg);
  msg = ''; try { await open(new TextEncoder().encode('%PDF-1.7\n' + 'x'.repeat(200))); } catch (e) { msg = e.message; }
  ok(/not a DWG or an ASCII DXF/.test(msg), 'a PDF given as a drawing is refused', msg);
  msg = ''; try { await open(good, { limits: { dwgBytes: 1000 } }); } catch (e) { msg = e.message; }
  ok(/MB, more than TakeoffCraft opens as a drawing/.test(msg), 'the size cap refuses a file over it, with the size', msg);
  msg = ''; try { await Set_.openCad(good, 'x.dwg', { hash: 'a'.repeat(64), readers: { dwg: async () => { throw new Error('boom'); }, dxf: readers.dxf } }); } catch (e) { msg = e.message; }
  ok(/could not be read as a drawing \(boom\)/.test(msg), 'a reader that throws becomes a message', msg);
  msg = ''; try { await Set_.openCad(good, 'x.dwg', { hash: 'a'.repeat(64), readers: { dwg: async () => ({ nope: 1 }), dxf: readers.dxf } }); } catch (e) { msg = e.message; }
  ok(/could not be read/.test(msg), 'a reader that returns something that is no drawing becomes a message', msg);
  ok(!/<|\n/.test(msg), 'messages are one plain line (they go in as text)');
}
{
  // hostile models handed straight to the counter
  const mk = (blocks, ents) => ({ version: 'AC1032', header: { INSUNITS: 1 }, tables: { layers: [{ name: '0' }] }, layouts: [], blocks: [{ name: '*Model_Space', record: 'M', entities: ents }, ...blocks], objects: [], report: {} });
  const ins = (block, extra = {}) => ({ type: 'INSERT', handle: 'A', layer: '0', block, insert: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 }, rotation: 0, attribs: [], ...extra });
  // a block that inserts itself
  const rec = mk([{ name: 'LOOP', record: 'L', entities: [ins('LOOP'), ins('LOOP')] }], [ins('LOOP')]);
  let ix; const t0 = Date.now();
  try { ix = Cc.indexDrawing(rec); } catch (e) { ix = null; console.log('    ! ' + e.message); }
  ok(ix && ix.skipped['nested too deep'] > 0 && Date.now() - t0 < 5000 || (ix && ix.truncated), 'a block that inserts itself stops at the depth cap (or the object cap), quickly', JSON.stringify(ix?.skipped) + ' trunc=' + ix?.truncated + ' ' + (Date.now() - t0) + 'ms');
  ok(ix.all.length <= Cc.LIMITS.refs, 'and the number of objects stays under the cap: ' + ix.all.length);
  // a huge MINSERT
  const big = mk([{ name: 'P', record: 'P', entities: [] }], [ins('P', { type: 'MINSERT', cols: 1e9, rows: 1e9, colSpacing: 1, rowSpacing: 1 })]);
  const t1 = Date.now(); const ix2 = Cc.indexDrawing(big);
  ok(Date.now() - t1 < 2000 && ix2.all.length === 0 && ix2.skipped['array too large'] === 1, 'a 1e9 × 1e9 MINSERT is refused without allocating', JSON.stringify(ix2.skipped));
  const med = mk([{ name: 'P', record: 'P', entities: [] }], [ins('P', { type: 'MINSERT', cols: 700, rows: 700, colSpacing: 1, rowSpacing: 1 })]);
  const ix3 = Cc.indexDrawing(med, { limits: { refs: 1000 } });
  ok(ix3.truncated && ix3.all.length <= 1000, 'a big array stops at the object cap and says so (truncated)', ix3.all.length + ' ' + ix3.truncated);
  // missing block, NaN numbers, no layers table
  const odd = mk([], [ins('GONE'), ins('P', { insert: { x: NaN, y: 0 } }), { type: 'CIRCLE', layer: '0', center: { x: Infinity, y: 0 }, radius: 1 }, { type: 'TEXT', layer: '0', insert: { x: 0, y: 0 }, value: 'ok', height: 1 }]);
  odd.tables = {};
  const ix4 = Cc.indexDrawing(odd);
  ok(ix4.skipped['missing block GONE'] === 1, 'a missing block is listed, not hidden', JSON.stringify(ix4.skipped));
  ok(ix4.all.every((r) => Number.isFinite(r.x) && Number.isFinite(r.y)), 'no object has a position that is not a number');
  eq(Cc.countTexts(ix4, ix4.all, { text: 'ok' }).total, 1, 'the sound objects around the broken ones still count');
}

// ---------------------------------------------------------------------------
section('Layers, linked drawings and objects that cannot be placed (TD.5)');
{
  const set = await open('kitchen-count.dwg'), cad = set.cad, ix = cad.index();
  const shelves = (q = {}) => Cc.countBlocks(ix, ix.all, { names: ['SHELF-18X48'], ...q });
  ok(!Set_.layerShown(cad, 'K-OLD') && !Set_.layerShown(cad, 'A-HIDDEN') && Set_.layerShown(cad, 'K-EQPM'), 'a layer frozen or off in the file starts hidden; the others shown');
  eq(JSON.stringify(Cc.hiddenLayers(ix).map((l) => [l.name, l.count]).sort()), JSON.stringify([['A-HIDDEN', 2], ['K-OLD', 3]]), 'the hidden layers are listed with what sits on them: K-OLD 3, A-HIDDEN 2');
  eq(shelves().total, 22, 'default: 22 shelves, the 3 on the frozen layer left out');
  cad.layerOverride.set('K-OLD', true);
  eq(shelves().total, 25, 'the layer panel turns K-OLD on: its 3 are counted without asking');
  eq(shelves().hiddenSkipped, 0, '…and nothing is left out');
  ok(Set_.layerShown(cad, 'K-OLD'), '…and the sheets draw it');
  cad.layerOverride.set('K-EQPM', false);
  eq(shelves().total, 3, 'turning K-EQPM off: the 22 on it are left out (only the 3 on K-OLD count)');
  eq(shelves().hiddenSkipped, 22, '…and the count says it left 22 out');
  eq(shelves({ hidden: 'include' }).total, 25, 'counting hidden layers too: 25');
  eq(Cc.countBlocks(ix, ix.all, { names: ['TABLE-30X60'] }).total, 0, 'the tables sit on K-EQPM too (inside the zone they take its layer): all hidden');
  ok(Cc.catalog(ix, ix.all).layers.find((l) => l.name === 'K-EQPM').hidden === true, 'the catalog marks the layer hidden');
  cad.layerOverride.clear();
  eq(shelves().total, 22, 'Back to the file\'s layers: 22 again');
  eq(Cc.countShapes(ix, ix.all, { layer: 'E-LITE', type: 'CIRCLE' }).total, 12, 'layer + type counts are unaffected');
  // a layer on in the file and turned off by the panel: the sheets stop drawing it too
  cad.layerOverride.set('A-WALL', false);
  ok(!Set_.layerShown(cad, 'A-WALL'), 'a panel choice beats the file in the other direction too');
  const lw = Set_.cadLinework(cad, 0);
  cad.layerOverride.clear();
  const lw2 = Set_.cadLinework(cad, 0);
  ok(lw.n < lw2.n && lw2.n > 0, 'snapping linework follows the layer panel (A-WALL off: fewer segments)', lw.n + ' vs ' + lw2.n);
}
{
  // linked drawings: hand-built models, so every count is a hand count
  const mk = (blocks, ents, extra = {}) => ({ version: 'AC1032', header: { INSUNITS: 1 }, tables: { layers: [{ name: '0' }, ...(extra.layers || [])] }, layouts: [], blocks: [{ name: '*Model_Space', record: 'M', entities: ents }, ...blocks], objects: [], report: {} });
  const ins = (block, x = 0, y = 0, extra = {}) => ({ type: 'INSERT', handle: 'H' + Math.random().toString(16).slice(2, 6), layer: '0', block, insert: { x, y, z: 0 }, scale: { x: 1, y: 1, z: 1 }, rotation: 0, attribs: [], ...extra });
  const door = { name: 'DOOR', record: 'D', base: { x: 0, y: 0 }, entities: [] };
  const base = mk([door], [0, 1, 2, 3, 4].map((i) => ins('DOOR', i * 10, 5)));
  const host = mk([door, { name: 'base', record: 'X', flags: 4, xrefPath: 'C:\\projects\\Base.DWG', base: { x: 0, y: 0 }, entities: [] }], [ins('base', 100, 0), ins('DOOR', 0, 0), ins('DOOR', 10, 0), ins('DOOR', 20, 0)]);
  const hostSet = Set_.buildSet(host, { name: 'host.dwg', hash: 'a'.repeat(64), size: 1 });
  const ix0 = hostSet.cad.index();
  eq(Cc.countBlocks(ix0, ix0.all, { names: ['DOOR'] }).total, 3, 'xref not loaded: the host\'s own 3 doors');
  ok(ix0.xrefs.length === 1 && ix0.xrefs[0].loaded === false && hostSet.cad.warnings.length === 1, 'the missing xref is listed and warned about');
  eq(Set_.matchXrefs(host, [{ name: 'other.dwg', model: base }]).size, 0, 'an open file with another name is not the xref');
  const found = Set_.matchXrefs(host, [{ name: 'host.dwg', model: host }, { name: 'base.dwg', model: base }]);
  eq([...found.keys()].join(), 'base', 'the xref is found by its path\'s file name, without the extension and the case (C:\\projects\\Base.DWG → base.dwg)');
  const withX = Set_.withXrefs(hostSet, found), ix1 = withX.cad.index();
  ok(ix1.xrefs[0].loaded && withX.cad.warnings.length === 0, 'with it loaded the warning is gone');
  const r = Cc.countBlocks(ix1, ix1.all, { names: ['DOOR'] });
  eq(r.total, 3 + 5, 'DOOR counts 3 + 5 = 8 once the linked drawing is in');
  const pts = r.found.map((x) => x.x + ',' + x.y).sort().join(' ');
  eq(pts, ['0,0', '10,0', '20,0', '100,5', '110,5', '120,5', '130,5', '140,5'].sort().join(' '), 'the xref\'s doors sit where the xref is inserted: (100,0) + their own places');
  eq(Cc.countBlocks(ix1, ix1.all, { names: ['DOOR'], nested: 'top' }).total, 3, 'the 5 inside the xref are "inside another block" (depth 1)');
  eq(withX.hash, hostSet.hash, 'the rebuilt set keeps the file\'s hash (marks stay on their sheets)');
  // an xref's own layers: "<xref>|<layer>"
  const base2 = mk([door], [ins('DOOR', 0, 0, { layer: 'A-DOOR' })], { layers: [{ name: 'A-DOOR', off: true }] });
  const h2 = Set_.withXrefs(hostSet, new Map([['base', base2]])).cad.index();
  const d = Cc.countBlocks(h2, h2.all, { names: ['DOOR'], layers: ['base|A-DOOR'] });
  eq(d.total + d.hiddenSkipped, 1, 'a linked drawing\'s layer is "base|A-DOOR"');
  eq(d.hiddenSkipped, 1, '…and its own off layer keeps that object hidden');
}
{
  // objects that cannot be placed are listed by type, not dropped silently
  const mk = (ents) => ({ version: 'AC1032', header: { INSUNITS: 1 }, tables: { layers: [{ name: '0' }] }, layouts: [], blocks: [{ name: '*Model_Space', record: 'M', entities: ents }], objects: [], report: {} });
  const ix = Cc.indexDrawing(mk([{ type: 'UNKNOWN', className: 'AcDbProxyThing', layer: '0' }, { type: 'UNKNOWN', className: 'AcDbProxyThing', layer: '0' }, { type: 'WIPEOUT', layer: '0' }, { type: 'CIRCLE', layer: '0', center: { x: 1, y: 1 }, radius: 1 }]));
  eq(ix.unknown.AcDbProxyThing, 2, 'proxy / unknown classes are listed by name: AcDbProxyThing × 2');
  eq(ix.unplacedBy.AcDbProxyThing, 2, '…and counted as not placeable');
  eq(ix.unplaced, 3, 'three objects could not be placed (2 proxies, a WIPEOUT with no point)');
  eq(Cc.countShapes(ix, ix.all, { type: 'CIRCLE' }).total, 1, 'the circle next to them still counts');
}

// ---------------------------------------------------------------------------
section('Measure from geometry: exact lengths and areas from the drawing itself (TD.4)');
{
  const PI = Math.PI;
  const sums = {};
  for (const f of ['geometry-measure.dwg', 'geometry-measure.dxf']) {
    const set = await open(f), sheet = set.cad.sheets[0], k = sheet.k;
    const geo = Geo.collectGeometry(set, 0);
    const by = {}; for (const it of geo.items) (by[it.type] ||= []).push(it);
    eq(Object.entries(by).map(([t, l]) => t + ':' + l.length).sort().join(' '), 'ARC:1 CIRCLE:1 ELLIPSE:1 HATCH:1 LINE:1 LWPOLYLINE:3', f + ': the 8 objects (the hidden layer\'s line and the text are not offered)');
    const inch = (v) => v / k;                                   // page units → drawing inches
    const len = (it) => inch(it.closed ? G.perimeter(it.pts) : G.polylineLength(it.pts));
    const area = (it) => inch(inch(G.areaWithHoles(it.pts, it.holes).net));
    const poly = by.LWPOLYLINE;
    const sq = poly.find((p) => p.closed && !G.hasArcs(p.pts)), sl = poly.find((p) => p.closed && G.hasArcs(p.pts)), rn = poly.find((p) => !p.closed);
    ok(near(len(by.LINE[0]), 120, 1e-9), f + ': the line is 120 in', len(by.LINE[0]));
    ok(near(len(by.ARC[0]), 25 * PI, 1e-9), f + ': a 90° arc of radius 50 is 25π = 78.54 in (exact, not chords)', len(by.ARC[0]));
    ok(near(len(by.CIRCLE[0]), 60 * PI, 1e-9) && near(area(by.CIRCLE[0]), 900 * PI, 1e-9), f + ': the circle of radius 30: 60π long, 900π area', len(by.CIRCLE[0]) + ' ' + area(by.CIRCLE[0]));
    ok(near(len(sq), 400, 1e-9) && near(area(sq), 10000, 1e-9), f + ': the 100 × 100 square: perimeter 400, area 10000');
    ok(near(len(sl), 200 + 20 * PI, 1e-9) && near(area(sl), 2000 + 100 * PI, 1e-9), f + ': the slot with two outward half circles (bulge 1 kept): perimeter 200 + 20π, area 2000 + 100π', len(sl) + ' ' + area(sl));
    ok(near(len(rn), 250, 1e-9) && rn.closed === false, f + ': the open run: 100 + 50 + 100 = 250 in');
    const h = by.HATCH[0];
    ok(h.holes.length === 1 && near(area(h), 9600, 1e-9) && !h.approx, f + ': the hatch (100 × 100 with a 20 × 20 hole): area 10000 − 400 = 9600, hole kept', h.holes.length + ' ' + area(h));
    const el = by.ELLIPSE[0];
    ok(el.approx === true && near(area(el), PI * 40 * 20, 1e-5), f + ': the ellipse is flagged approximate, and its area π·a·b is within 0.001 %', area(el) + ' vs ' + PI * 800);
    sums[f] = Geo.collectGeometry(set, 0).items.map((i) => [i.type, +len(i).toFixed(3)].join(':')).sort().join();
    // marks for a linear item and an area item
    const lin = Geo.marksFor(geo.items, 'linear'), ar = Geo.marksFor(geo.items, 'area');
    eq(lin.list.length, 7, f + ': a linear item takes 7 (the hatch has an area, not a length)');
    eq(lin.skipped.hatch, 1, f + ': and says it left the hatch');
    eq(ar.list.length, 5, f + ': an area item takes the 5 closed shapes (circle, square, slot, hatch, ellipse)');
    eq(ar.skipped.open, 3, f + ': and says it left the 3 open ones (line, arc, run)');
    eq(lin.approx + 0, 1, f + ': one approximate shape among the linear ones (the ellipse)');
    // through the takeoff: feet and square feet to the scale of the drawing's units
    const t = new M.Takeoff();
    t.addFile({ hash: set.hash, name: set.name, size: set.size, pages: set.pages.length });
    const key = M.sheetKey(set.hash, 0);
    t.setScale(key, U.scaleRecord({ method: 'drawing', ftPerUnit: sheet.scale.ftPerUnit, label: 'x' }));
    const li = t.addItem({ name: 'Run', type: 'linear', unit: 'LF' }), ai = t.addItem({ name: 'Slab', type: 'area', unit: 'SF' });
    t.addMarks(li, lin.list.map((m) => ({ sheet: key, pts: m.pts })), 'x', 'linear');
    t.addMarks(ai, ar.list.map((m) => ({ sheet: key, pts: m.pts, holes: m.holes })), 'x', 'area');
    const q = M.quantities(t.state);
    const wantFt = (120 + 25 * PI + 60 * PI + 400 + 200 + 20 * PI + 250 + ellipsePerimeter(40, 20)) / 12;
    ok(Math.abs(q.get(li).lengthFt - wantFt) / wantFt < 2e-5, f + ': the linear item totals ' + wantFt.toFixed(4) + ' ft (the ellipse within 0.002 %)', q.get(li).lengthFt);
    const wantSf = (900 * PI + 10000 + 2000 + 100 * PI + 9600 + PI * 800) / 144;
    ok(Math.abs(q.get(ai).areaSqft - wantSf) / wantSf < 2e-5, f + ': the area item totals ' + wantSf.toFixed(4) + ' sf', q.get(ai).areaSqft);
    // picking on the sheet
    const T = sheet.toPage, P = (x, y) => ({ x: T[0] * x + T[4], y: T[3] * y + T[5] });
    eq(Geo.hitTest(geo.items, P(310, 110), 1)?.type, 'LWPOLYLINE', f + ': a click on the slot\'s bulged end picks the slot');
    eq(Geo.hitTest(geo.items, P(310, 110), 1)?.pts.some((p) => p.b === 1), true, f + ': …the one with the bulges');
    eq(Geo.hitTest(geo.items, P(60, 0), 1)?.type, 'LINE', f + ': a click on the line picks the line');
    eq(Geo.hitTest(geo.items, P(420, 120), 0.0001)?.type, 'HATCH', f + ': a click inside the hatch picks it');
    eq(Geo.hitTest(geo.items, P(450, 150), 0.0001), null, f + ': …but not inside its hole');
    eq(Geo.hitTest(geo.items, P(1000, 1000), 1), null, f + ': nothing on empty paper');
    const win = Geo.inWindow(geo.items, P(-5, 95), P(105, 205));
    eq(win.length, 1, f + ': a window round the square takes only the square');
    eq(Geo.inWindow(geo.items, P(-1000, -1000), P(2000, 2000)).length, 8, f + ': a window round everything takes all 8');
    const tot = Geo.totals(win, 'linear');
    ok(near(inch(tot.len), 400, 1e-9), f + ': the window\'s total length is 400 in');
  }
  eq(sums['geometry-measure.dwg'], sums['geometry-measure.dxf'], 'DWG and DXF give the same objects and lengths');
  // a layout: the freezer room through K-101's viewport at 1/2" = 1'-0"
  const set = kitchen['kitchen-count.dwg'], geo = Geo.collectGeometry(set, 1);
  const room = geo.items.find((i) => i.layer === 'A-WALL' && i.type === 'LWPOLYLINE');
  const sk = set.cad.sheets[1].scale.ftPerUnit;
  ok(room && near(G.perimeter(room.pts) * sk, 73, 1e-9), 'on K-101 the freezer room measures 73 ft round (2 × (216 + 222) in), through the sheet\'s scale', room && G.perimeter(room.pts) * sk);
  ok(room && near(G.areaWithHoles(room.pts, room.holes).net * sk * sk, 333, 1e-9), '…and 333 sf (18 ft × 18.5 ft)');
  ok(geo.items.some((i) => i.layer !== 'A-WALL' && i.layer !== '0' ) || geo.items.length > 1, 'the sheet also offers its own border and title block (paper space)');
  const inVp = Geo.collectGeometry(set, 1).items.filter((i) => i.layer === 'K-EQPM');
  eq(inVp.length, 0, 'blocks are counted, not measured: no shelf is offered as geometry');
  const hid = Geo.collectGeometry(set, 0).items.filter((i) => i.layer === 'K-OLD' || i.layer === 'A-HIDDEN');
  eq(hid.length, 0, 'objects on hidden layers are not offered');
  set.cad.layerOverride.set('A-WALL', false);
  eq(Geo.collectGeometry(set, 1).items.some((i) => i.layer === 'A-WALL'), false, 'a layer the panel turned off is not offered either');
  set.cad.layerOverride.clear();
}
function ellipsePerimeter(a, b) { // Ramanujan's second approximation (error ~1e-8 for this ratio)
  const h = ((a - b) / (a + b)) ** 2;
  return Math.PI * (a + b) * (1 + 3 * h / (10 + Math.sqrt(4 - 3 * h)));
}

// ---------------------------------------------------------------------------
section('The marked PDF works from a drawing, no plotting step (TD.6)');
{
  const legacy = path.join(ROOT, 'tools/takeoffcraft-test/node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  const pdfjs = fs.existsSync(legacy) ? await import(pathToFileURL(legacy).href) : null;
  if (pdfjs) pdfjs.GlobalWorkerOptions.workerSrc = pathToFileURL(path.join(ROOT, 'tools/takeoffcraft-test/node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs')).href;
  const std = path.join(ROOT, 'tools/takeoffcraft-test/node_modules/pdfjs-dist/standard_fonts') + '/';
  const set = await open('kitchen-count.dwg'), ix = set.cad.index();
  const made = await Cp.cadSheetsPdf(PDFLib, set, [1]);
  eq(made.pages.join(), '1', 'sheet K-101 is drawn as one PDF page');
  if (pdfjs) {
    const doc = await pdfjs.getDocument({ data: made.bytes.slice(), standardFontDataUrl: std }).promise;
    eq(doc.numPages, 1, 'pdf.js reads it: 1 page');
    const page = await doc.getPage(1), vp = page.getViewport({ scale: 1 });
    ok(near(vp.width, 2592, 1e-6) && near(vp.height, 1728, 1e-6), 'the page is the sheet: 36 × 24 in', vp.width + ' × ' + vp.height);
    const text = (await page.getTextContent()).items.map((i) => i.str).join(' ');
    ok(/KITCHEN COUNT/.test(text) && /FREEZER ROOM/.test(text), 'the drawing\'s text is real text (searchable): KITCHEN COUNT, FREEZER ROOM', text.slice(0, 120));
    ok(!/NO-SUCH/.test(text), 'and only what the sheet shows');
    // the generated sheet auto-counts like the plotted one: 22 shelves
    const Mt = await load('match.js');
    const k101 = set.cad.sheets[1];
    const plan = Cm.planMarks({ set, sheetIndex: 1, scope: 'sheet', found: Cc.countBlocks(ix, refsOf(set, k101), { names: ['SHELF-18X48'] }).found });
    const first = plan.list[0].pts[0], mid = [first[0] + 27, first[1] + 72], pad = 6;
    const box = { minX: mid[0] - 27 - pad, maxX: mid[0] + 27 + pad, minY: mid[1] - 72 - pad, maxY: mid[1] + 72 + pad };
    const raster = async (w) => {
      const v = page.getViewport({ scale: w });
      const { canvas, context } = doc.canvasFactory.create(Math.ceil(v.width), Math.ceil(v.height));
      context.fillStyle = '#ffffff'; context.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvasContext: context, viewport: v }).promise;
      return { data: Mt.toInk(context.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height), w: canvas.width, h: canvas.height };
    };
    const ds = [[box.minX, box.minY], [box.maxX, box.maxY]].map(([x, y]) => vp.convertToViewportPoint(x, y));
    const minX = Math.min(ds[0][0], ds[1][0]), maxX = Math.max(ds[0][0], ds[1][0]), minY = Math.min(ds[0][1], ds[1][1]), maxY = Math.max(ds[0][1], ds[1][1]);
    const w = Mt.workScale(maxX - minX, maxY - minY), src = await raster(w);
    const tpl = Mt.trim(Mt.crop(src, minX * w, minY * w, (maxX - minX) * w, (maxY - minY) * w));
    const cands = Mt.suppress(Mt.findSymbol(src, tpl, { floor: 0.5 }), 0.75);
    eq(cands.length, 22, 'the PDF TakeoffCraft draws from the drawing auto-counts 22 shelves too, like the plotted one');
  }
  // marks → the marked PDF
  const t = new M.Takeoff();
  t.addFile({ hash: set.hash, name: set.name, size: set.size, pages: 2 });
  const found = (n) => Cc.countBlocks(ix, refsOf(set, set.cad.sheets[n]), { names: ['SHELF-18X48'] }).found;
  const p1 = Cm.planMarks({ set, sheetIndex: 1, scope: 'sheet', found: found(1) }), p0 = Cm.planMarks({ set, sheetIndex: 0, scope: 'sheet', found: found(0) });
  const item = t.addCounted({ create: { name: 'Shelf', type: 'count' }, list: [...p0.list, ...p1.list], label: 'c' }).item;
  const lin = t.addItem({ name: 'Wall', type: 'linear', unit: 'LF' });
  t.setScale(M.sheetKey(set.hash, 1), U.scaleRecord({ method: 'preset', preset: '1/2', ftPerUnit: set.cad.sheets[1].scale.ftPerUnit, label: 'x' }));
  t.addMark({ item: lin, sheet: M.sheetKey(set.hash, 1), pts: [[100, 100], [900, 100]], kind: 'linear' });
  const both = await Cp.cadSheetsPdf(PDFLib, set, [0, 1]);
  eq(both.pages.join(), '0,1', 'marks on the Model and on K-101: both sheets are drawn, in order');
  const st = Cp.remapState(t.state, set.hash, both.pages);
  eq(st.marks.length, t.state.marks.length, 'the remapped state keeps every mark');
  ok(st.marks.every((m) => /:[01]$/.test(m.sheet)), '…on pages 0 and 1');
  const only1 = Cp.remapState(t.state, set.hash, [1]);
  ok(only1.marks.length === p1.list.length + 1 && only1.marks.every((m) => m.sheet === set.hash + ':0'), 'only sheet K-101 drawn: its marks move to page 0, the Model\'s are left out', only1.marks.length);
  ok(only1.sheets[set.hash + ':0']?.scale?.ftPerUnit === set.cad.sheets[1].scale.ftPerUnit, '…and its scale goes with it');
  eq(t.state.marks.every((m) => m.sheet.startsWith(set.hash + ':')) && t.state.marks.some((m) => m.sheet.endsWith(':1')), true, 'the takeoff itself is not changed');
  const out = await Pm.pdfWithMarks(PDFLib, both.bytes, set.hash, st);
  ok(out.pages === 2 && out.marks === t.state.marks.length, 'the marked PDF has the marks on 2 pages: ' + out.marks, JSON.stringify([out.pages, out.marks]));
  if (pdfjs) {
    const doc = await pdfjs.getDocument({ data: out.bytes.slice(), standardFontDataUrl: std }).promise;
    eq(doc.numPages, 2, 'pdf.js reads the marked PDF: 2 pages');
    const txt = (await (await doc.getPage(2)).getTextContent()).items.map((i) => i.str).join(' ');
    ok(/Shelf/.test(txt) && /22/.test(txt), 'the legend on K-101 says Shelf and 22', txt.slice(-160));
    const m1 = (await (await doc.getPage(1)).getTextContent()).items.map((i) => i.str).join(' ');
    ok(/Shelf/.test(m1) && /22/.test(m1), 'and on the Model sheet', m1.slice(-160));
  }
  // layers off in the panel are left out of the PDF too
  set.cad.layerOverride.set('A-ANNO', false);
  if (pdfjs) {
    const g = await Cp.cadSheetsPdf(PDFLib, set, [1]);
    const d2 = await pdfjs.getDocument({ data: g.bytes.slice(), standardFontDataUrl: std }).promise;
    const x = (await (await d2.getPage(1)).getTextContent()).items.map((i) => i.str).join(' ');
    ok(!/FREEZER ROOM/.test(x) && /KITCHEN COUNT/.test(x), 'a layer the panel turned off (A-ANNO) is not in the PDF; the title block stays', x.slice(0, 100));
  }
  set.cad.layerOverride.clear();
  // a drawing with nothing marked is not exported; a PDF file is unchanged by all this
  const none = Cp.remapState(t.state, set.hash, []);
  eq(none.marks.length + (none.notes || []).length, 0, 'no sheets drawn: nothing remains');
}

// ---------------------------------------------------------------------------
section('A dynamic block without its parameter graph still counts under its true name');
{
  const mk = (blocks, ents) => ({ version: 'AC1032', header: { INSUNITS: 1 }, tables: { layers: [{ name: '0' }] }, layouts: [], blocks: [{ name: '*Model_Space', record: 'M', entities: ents }, ...blocks], objects: [], report: {} });
  const ins = (block, x) => ({ type: 'INSERT', handle: 'H' + x, layer: '0', block, insert: { x, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 }, rotation: 0, attribs: [] });
  const m = mk([{ name: 'Receptacle', record: 'D', entities: [] }, { name: '*U5', record: 'U5', dynamicOf: 'D', entities: [] }, { name: '*U6', record: 'U6', dynamicOf: 'D', entities: [] }, { name: '*U7', record: 'U7', entities: [] }],
    [ins('Receptacle', 0), ins('*U5', 10), ins('*U6', 20), ins('*U7', 30)]);
  const ix = Cc.indexDrawing(m), cat = Cc.catalog(ix, ix.all);
  eq(Cc.countBlocks(ix, ix.all, { names: ['Receptacle'] }).total, 3, 'the definition and its two anonymous copies (*U5, *U6) are one block: 3 receptacles, not 1 + 2 odd names');
  eq(cat.blocks.find((b) => b.name === 'Receptacle').count, 3, 'the catalog lists them together');
  eq(cat.blocks.some((b) => b.name === '*U5' || b.name === '*U6'), false, 'no anonymous copy is listed as a block of its own');
  eq(cat.blocks.find((b) => b.name === '*U7')?.count, 1, 'an anonymous block that is not a dynamic copy keeps its own name');
  const r = Cc.countBlocks(ix, ix.all, { names: ['Receptacle'], variant: '' });
  eq(r.total, 2, 'their state is not known (no parameter graph): the two copies are the "state not known" variant');
}
if (fs.existsSync('/var/www/CADCRAFT/testfiles/dwg-corpus/AC1032')) {
  section('The real sample drawings count the same in all six DWG versions (testfiles/dwg-corpus, outside git)');
  const D = '/var/www/CADCRAFT/testfiles/dwg-corpus/';
  const vers = fs.readdirSync(D).filter((x) => /^AC10/.test(x)).sort();
  let n = 0;
  for (const name of fs.readdirSync(D + 'AC1032').filter((f) => /\.dwg$/i.test(f))) {
    const sigs = new Map();
    for (const v of vers) {
      const f = D + v + '/' + name;
      if (!fs.existsSync(f)) continue;
      const b = new Uint8Array(fs.readFileSync(f));
      let set;
      try { set = await Set_.openCad(b, name, { hash: await Pdfset.sha256Hex(b), readers }); } catch (e) { sigs.set(v, 'ERROR ' + e.message); continue; }
      const ix = set.cad.index(), cat = Cc.catalog(ix, ix.all);
      let geo = 0; for (let i = 0; i < set.cad.sheets.length; i++) geo += Geo.collectGeometry(set, i).items.length;   // (every sheet's geometry is collected: none throws)
      void geo;
      sigs.set(v, JSON.stringify([set.cad.sheets.map((s) => s.name), cat.blocks.map((x) => [x.name, x.count])]));   // objects an older format cannot hold (multileaders, annotative scales) differ by design: the sheets and the blocks must not
    }
    const distinct = new Set(sigs.values());
    ok(distinct.size === 1 && ![...distinct][0].startsWith('ERROR'), name + ': sheets and block counts agree in ' + sigs.size + ' versions', [...sigs].filter(([, x]) => x !== [...distinct][0]).map(([v]) => v).join(' '));
    n++;
  }
  ok(n >= 8, 'checked ' + n + ' sample drawings');
}

// ---------------------------------------------------------------------------
section('Tilted blocks and twisted viewports land where AutoCAD puts them (DWG-PLANS-TK, as BimCraft DWG-PLANS)');
{
  // The arbitrary-axis rule in 3D (DXF reference), written out here so the check does not lean on dwg-compile.js planOcs
  const unit = (v) => { const k = Math.hypot(...v); return v.map((c) => c / k); };
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const ocsToWcs = (N, p) => {
    N = unit(N);
    const Ax = unit(Math.abs(N[0]) < 1 / 64 && Math.abs(N[1]) < 1 / 64 ? cross([0, 1, 0], N) : cross([0, 0, 1], N)), Ay = cross(N, Ax);
    return [0, 1, 2].map((i) => p[0] * Ax[i] + p[1] * Ay[i] + p[2] * N[i]);
  };
  const N = [0.2, -0.1, 0.97], ip = { x: 10, y: 20, z: 300 };
  const want = ocsToWcs(N, [ip.x, ip.y, ip.z]);
  // a twisted viewport: its view centre is in display coordinates (the model turned by the twist about the target)
  const tw = 0.3, target = { x: 5, y: -5 }, look = { x: 50, y: 40 };
  const dx = look.x - target.x, dy = look.y - target.y;
  const dcs = { x: Math.cos(tw) * dx - Math.sin(tw) * dy, y: Math.sin(tw) * dx + Math.cos(tw) * dy };
  const VP = (h, id, x, y, w, hh, vh, viewCenter, viewTarget, twist) => ({ type: 'VIEWPORT', handle: h, layer: '0', id, center: { x, y, z: 0 }, width: w, height: hh, viewHeight: vh, viewCenter, viewTarget: { ...viewTarget, z: 0 }, twist, status: 0 });
  const model = {
    version: 'AC1032', header: { INSUNITS: 4 }, tables: { layers: [{ name: '0' }] }, objects: [], report: {},
    layouts: [{ name: 'A1', handle: 'L1', block: 'P', tabOrder: 1, limits: { min: { x: 0, y: 0 }, max: { x: 420, y: 297 } } }],
    blocks: [
      { name: '*Model_Space', record: 'M', entities: [
        { type: 'LINE', handle: 'A1', layer: '0', start: { x: -200, y: -200, z: 0 }, end: { x: 200, y: 200, z: 0 } },
        { type: 'INSERT', handle: 'A2', layer: '0', block: 'POST', insert: ip, extrusion: { x: N[0], y: N[1], z: N[2] }, scale: { x: 1, y: 1, z: 1 }, rotation: 0, attribs: [] },
        { type: 'INSERT', handle: 'A3', layer: '0', block: 'MARK', insert: { x: look.x, y: look.y, z: 0 }, scale: { x: 1, y: 1, z: 1 }, rotation: 0, attribs: [] },
      ] },
      { name: 'POST', record: 'B1', base: { x: 0, y: 0 }, entities: [{ type: 'LINE', handle: 'B2', layer: '0', start: { x: -0.5, y: 0, z: 0 }, end: { x: 0.5, y: 0, z: 0 } }] },
      { name: 'MARK', record: 'B3', base: { x: 0, y: 0 }, entities: [] },
      { name: '*Paper_Space', record: 'P', entities: [
        VP('V1', 1, 210, 148.5, 420, 297, 297, { x: 210, y: 148.5 }, { x: 0, y: 0 }, 0),          // the sheet itself
        VP('V2', 2, 200, 150, 200, 150, 150, dcs, target, tw),                                       // looks at (50, 40), turned 0.3 rad
        VP('V3', 3, 380, 40, 40, 40, 40, { x: 1e6, y: 1e6 }, { x: 0, y: 0 }, 0),                    // looks at an empty part of the model
      ] },
    ],
  };
  const fake = new TextEncoder().encode('AC1032' + ' '.repeat(64));
  const set = await Set_.openCad(fake, 'tilt-twist.dwg', { hash: 'x', readers: { dwg: async () => model, dxf: async () => model } });
  const ix = set.cad.index();
  const post = ix.all.find((r) => r.kind === 'insert' && r.name === 'POST');
  ok(post && near(post.x, want[0], 1e-9) && near(post.y, want[1], 1e-9), 'cadcount.js: a block with a tilted extrusion is counted at its true place (OCS z included), not at its OCS x, y',
    JSON.stringify(post && [post.x, post.y]) + ' want ' + JSON.stringify(want.slice(0, 2)));
  ok(Math.hypot(want[0] - ip.x, want[1] - ip.y) > 30, '(the test is worth something: the true place is far from the OCS x, y)');
  const ms = set.cad.drawing.spaces.find((s) => s.kind === 'model');
  const mids = [...ms.batches.values()].flatMap((bt) => bt.lines).filter((l) => l.length === 4).map((l) => [(l[0] + l[2]) / 2, (l[1] + l[3]) / 2]);
  ok(mids.some(([x, y]) => near(x, want[0], 1e-9) && near(y, want[1], 1e-9)), 'dwg-compile.js: the tilted block is drawn there too (its line is centred on that point)', JSON.stringify(mids));
  const sheet = set.cad.sheets.find((s) => s.kind === 'paper');
  const v2 = sheet.viewports.find((v) => near(v.cx, 200)), v3 = sheet.viewports.find((v) => near(v.cx, 380));
  ok(v2 && near(v2.vx, look.x, 1e-9) && near(v2.vy, look.y, 1e-9) && near(v2.twist, tw), 'a twisted viewport is centred on the model point AutoCAD shows there (view centre turned back by the twist)',
    JSON.stringify(v2 && [v2.vx, v2.vy]));
  const mark = Set_.sheetRefs(sheet, ix).find((p) => p.ref.name === 'MARK');
  const T = sheet.toPage, centre = { x: T[0] * 200 + T[4], y: T[3] * 150 + T[5] };
  ok(mark && near(mark.x, centre.x, 1e-9) && near(mark.y, centre.y, 1e-9), 'a block at that model point sits at the viewport centre on the sheet (counts, marks and the PDF follow)', JSON.stringify(mark && [mark.x, mark.y]) + ' want ' + JSON.stringify(centre));
  ok(v2 && v2.blank === false && v3 && v3.blank === true, 'a viewport that shows none of the model is marked blank (drawn as a dashed frame), the other is not');
}
if (fs.existsSync('/var/www/CADCRAFT/testfiles/powerline-plans/Plans.dwg')) {
  section('Plans.dwg: the power-line drawing (testfiles/powerline-plans, outside git)');
  const b = new Uint8Array(fs.readFileSync('/var/www/CADCRAFT/testfiles/powerline-plans/Plans.dwg'));
  const set = await Set_.openCad(b, 'Plans.dwg', { hash: await Pdfset.sha256Hex(b), readers });
  const ms = set.cad.drawing.spaces.find((s) => s.kind === 'model'), bb = ms.bounds;
  ok(bb.maxX - bb.minX < 1000 && bb.maxY - bb.minY < 1000, 'the model is the drawing (about 700 × 220), not stretched kilometres by the tilted insulators (5035 × 5244 before)', JSON.stringify(bb));
  const ins = set.cad.index().all.filter((r) => r.kind === 'insert' && /izolatoru_virt_3d/i.test(r.name) && r.depth === 0);
  ok(ins.length >= 12 && ins.every((r) => r.x >= bb.minX - 1e-6 && r.x <= bb.maxX + 1e-6 && r.y >= bb.minY - 1e-6 && r.y <= bb.maxY + 1e-6), ins.length + ' insulators counted inside the drawing, where the plan shows them');
  const lay = set.cad.sheets.find((s) => s.kind === 'paper');
  ok(lay && lay.viewports.length === 1 && lay.viewports[0].blank === true, 'Layout1\'s viewport looks at an empty part of the model (the drawing was moved): marked blank');
}

// ---------------------------------------------------------------------------
section('Words: every key the CAD code uses is in the language file (and drafted in es-MX)');
{
  const ES = JSON.parse(fs.readFileSync(path.join(APP, 'lang/es-MX.json'), 'utf8'));
  const used = new Set();
  for (const f of ['cadset.js', 'cadcount.js', 'cadmarks.js', 'cadcount-ui.js']) for (const m of fs.readFileSync(path.join(APP, f), 'utf8').matchAll(/\bt\('([a-z0-9._-]+)'/g)) used.add(m[1]);
  for (const m of fs.readFileSync(path.join(APP, 'takeoffcraft.js'), 'utf8').matchAll(/\bt\('(cad\.[a-z0-9._-]+)'/g)) used.add(m[1]);
  ok(used.size > 40, 'found the keys the CAD code asks for: ' + used.size);
  for (const name of Object.values(Cc.UNIT_NAMES)) used.add('cad.unit.' + name);   // the unit words are looked up by name (cad.unit.<name>)
  used.delete('cad.unit.');
  const missing = [...used].filter((k) => !(k in EN)), draft = [...used].filter((k) => !(k in ES));
  eq(missing.join(', '), '', 'every key is in lang/en.json');
  eq(draft.join(', '), '', 'and has a Spanish (Mexico) draft');
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
