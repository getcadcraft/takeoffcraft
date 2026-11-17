#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-takeoffcraft-countmarker.mjs — count marker size in the marked PDF against the screen (0.9.1, suggestion 1494).
 *
 *   node bin/test-takeoffcraft-countmarker.mjs [--build dev|x.y] [--shots <dir>]
 *
 * The rule under test (countmarker.js): the setting is the dot's radius on screen in CSS px (extra small 3, small 4.5,
 * medium 6 = the default, large 8); the PDF draws px × 0.75 pt ÷ /UserUnit, whatever the page size; a page whose dots
 * would touch gets smaller dots (0.45 × the 10th-percentile nearest-neighbour distance, never under a third).
 *
 * It first prints the numbers of the old rule (3.5 × max(0.75, shorter side / 600)) on a Letter page and a 24" × 36"
 * sheet, then exports real PDFs with pdf-lib, reads the dot radius back out of the page's content stream, and — when
 * poppler's pdftoppm is there — rasterises the pages at 96 dpi (= 100%) and measures the dot in pixels.
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import zlib from 'node:zlib';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const APP = path.join(ROOT, 'public_html/assets/apps/takeoffcraft', opt('--build', 'dev'));
const SHOTS = opt('--shots', null);
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
const M = await load('model.js');
const P = await load('pdfmarks.js');
const CM = await load('countmarker.js');
const I18N = await load('i18n.js');
I18N.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const PDFLib = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/pdf-lib/current/pdf-lib.esm.js')).href);

let pass = 0, fail = 0;
const ok = (c, name, extra = '') => { if (c) { pass++; console.log('  ok   ' + name); } else { fail++; console.log('  FAIL ' + name + (extra !== '' ? ' — ' + extra : '')); } };
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
const HASH = 'c'.repeat(64);
const RED = '#D62728';

/** A PDF of one blank page (optionally with /UserUnit). */
async function blank(w, h, userUnit) {
  const doc = await PDFLib.PDFDocument.create();
  const page = doc.addPage([w, h]);
  if (userUnit) page.node.set(PDFLib.PDFName.of('UserUnit'), PDFLib.PDFNumber.of(userUnit));
  return doc.save();
}
/** A takeoff with one count item and a dot at each point. */
function takeoff(points, pages = 1) {
  const t = new M.Takeoff();
  t.addFile({ hash: HASH, name: 'sheet.pdf', size: 1, pages });
  const item = t.addItem({ name: 'Outlets', type: 'count', color: RED });
  for (const p of points) t.addMark({ item, sheet: M.sheetKey(HASH, 0), pts: [p] });
  return t;
}
/** Every dot the marked PDF draws on page 1: { x, y, r, outline } read from the content stream ("x+r y m" then four curves, then B). */
async function dots(bytes) {
  const d = await PDFLib.PDFDocument.load(bytes);
  const c = d.getPages()[0].node.Contents();
  const text = (c.asArray ? c.asArray() : [c]).map((r) => {
    const o = d.context.lookup(r);
    try { return Buffer.from(PDFLib.decodePDFRawStream(o).decode()).toString('latin1'); } catch { try { return zlib.inflateSync(Buffer.from(o.contents)).toString('latin1'); } catch { return Buffer.from(o.contents).toString('latin1'); } }
  }).join('\n');
  const num = '(-?[\\d.]+(?:e-?\\d+)?)';
  const re = new RegExp(`${num} w\\s+${num} ${num} m\\s+${num} ${num} ${num} ${num} ${num} ${num} c\\s+(?:${num} ){6}c\\s+(?:${num} ){6}c\\s+(?:${num} ){6}c\\s+h\\s+B\\b`, 'g');
  const out = [];
  for (const m of text.matchAll(re)) {
    const [w, mx, my, , , , , tx, ty] = m.slice(1).map(Number);   // first curve ends at the top of the circle (x, y + r)
    out.push({ x: tx, y: my, r: mx - tx, outline: w, top: ty - my });
  }
  return { out, text };
}

console.log('\nThe old rule, in numbers (what suggestion 1494 saw)');
{
  const old = (w, h) => 3.5 * Math.max(0.75, Math.min(w, h) / 600);
  const letter = old(612, 792), archD = old(2592, 1728), a1 = old(2384, 1684);
  console.log(`    screen: 6 CSS px radius at every zoom = 4.5 pt on paper at 100% (96 px per inch)`);
  console.log(`    old PDF, Letter 612 × 792 pt:        radius ${letter.toFixed(2)} pt (${(letter / 4.5).toFixed(2)} × the screen at 100%)`);
  console.log(`    old PDF, 24" × 36" 2592 × 1728 pt:   radius ${archD.toFixed(2)} pt (${(archD / 4.5).toFixed(2)} ×), a dot ${(2 * archD / 72).toFixed(2)}" across`);
  console.log(`    old PDF, A1 2384 × 1684 pt:          radius ${a1.toFixed(2)} pt (${(a1 / 4.5).toFixed(2)} ×)`);
  ok(near(letter, 3.57, 0.01) && near(archD, 10.08, 0.01), 'the old PDF dot was a share of the page: 3.57 pt on Letter, 10.08 pt on a 24" × 36" sheet');
  ok(archD * 2 > 18 && 4.5 * 2 < 18, 'two outlets 18 pt apart (1/4" on paper) overlapped in the old 24" × 36" export and do not at the screen\'s size');
}

console.log('\nThe size table');
ok(CM.markerPx() === 6 && CM.markerPx('medium') === 6 && CM.markerPx('nonsense') === 6 && CM.MARKER_DEFAULT === 'medium', 'medium = 6 px is the default (what the screen always drew); an unknown value falls back to it');
ok(CM.markerPx('xsmall') === 3 && CM.markerPx('small') === 4.5 && CM.markerPx('large') === 8, 'extra small 3, small 4.5, large 8 px');
ok(CM.markerPdfRadius('medium') === 4.5 && CM.markerPdfRadius('large') === 6 && CM.markerPdfRadius('xsmall') === 2.25 && CM.markerPdfRadius('medium', 2) === 2.25, 'PDF radius = px × 0.75 pt, ÷ /UserUnit');
ok(CM.crowding([{ x: 0, y: 0 }]) === Infinity && near(CM.crowding([{ x: 0, y: 0 }, { x: 3, y: 4 }]), 5) && CM.crowding([{ x: 1, y: 1 }, { x: 1, y: 1 }]) === Infinity, 'crowding: nearest-neighbour distance; one spot (or dots stacked on one spot) has none');

console.log('\nThe marked PDF: same dot on a small and a large page');
const PAGES = [['Letter', 612, 792], ['24" × 36" sheet', 2592, 1728], ['A1', 2384, 1684], ['36" × 48" sheet', 3456, 2592]];
const made = [];
for (const [name, w, h] of PAGES) {
  const src = await blank(w, h);
  const pts = [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: w - 100, y: h - 100 }];
  const t = takeoff(pts);
  for (const key of ['medium', 'xsmall', 'small', 'large']) {
    const out = await P.pdfWithMarks(PDFLib, src, HASH, t.state, { legend: false, marker: key });
    const { out: ds } = await dots(out.bytes);
    const want = CM.markerPx(key) * 0.75;
    ok(out.marks === 4 && ds.length === 4 && ds.every((d) => near(d.r, want, 1e-3) && near(d.top, want, 1e-3)), `${name}, ${key}: 4 dots of radius ${want} pt (= ${CM.markerPx(key)} px at 100%)`, JSON.stringify(ds.map((d) => d.r)));
    if (key === 'medium') {
      ok(ds.every((d, i) => near(d.x, pts[i].x, 1e-3) && near(d.y, pts[i].y, 1e-3)), `${name}: each dot is centred on its count`);
      ok(ds.every((d) => near(d.outline, want * 0.25, 1e-3)), `${name}: the white outline is a quarter of the radius (${want * 0.25} pt), as on screen (1.5 px on 6 px)`);
      made.push({ name, w, h, bytes: out.bytes, pts });
    }
  }
  const dflt = await dots((await P.pdfWithMarks(PDFLib, src, HASH, t.state, { legend: false })).bytes);
  ok(dflt.out.length === 4 && dflt.out.every((d) => near(d.r, 4.5, 1e-3)), `${name}: with no size given the PDF draws medium (4.5 pt)`);
}
{
  const [a, b] = [made[0], made[1]];
  const ra = (await dots(a.bytes)).out[0].r, rb = (await dots(b.bytes)).out[0].r;
  ok(near(ra, rb, 1e-6), `the Letter page and the 24" × 36" sheet get the same dot (${ra} pt and ${rb} pt); the old rule gave 3.57 and 10.08`);
}

console.log('\n/UserUnit (a sheet whose units are bigger than a point)');
{
  const src = await blank(1296, 864, 2);            // 2592 × 1728 pt of paper in units of 2 pt
  const t = takeoff([{ x: 100, y: 100 }, { x: 400, y: 300 }]);
  const { out: ds } = await dots((await P.pdfWithMarks(PDFLib, src, HASH, t.state, { legend: false, marker: 'medium' })).bytes);
  ok(ds.length === 2 && ds.every((d) => near(d.r, 2.25, 1e-3)), '/UserUnit 2: radius 2.25 units = 4.5 pt on paper', JSON.stringify(ds.map((d) => d.r)));
}

console.log('\nDense counts');
{
  const src = await blank(2592, 1728);
  // a row of receptacles 18 pt apart (1/4" on paper): apart on screen at the zoom they were counted, on top of each other in the old export
  const row = Array.from({ length: 12 }, (_, i) => ({ x: 300 + i * 18, y: 400 }));
  let r = (await dots((await P.pdfWithMarks(PDFLib, src, HASH, takeoff(row).state, { legend: false })).bytes)).out;
  ok(r.length === 12 && r.every((d) => near(d.r, 4.5, 1e-3)) && 2 * 4.5 * 1.125 < 18, '18 pt apart: full size (4.5 pt), and the dots with their outlines (10.1 pt across) stay clear of each other');
  // 6 pt apart: full-size dots (9 pt across) would overlap → shrunk to 0.45 × 6 = 2.7 pt
  const tight = Array.from({ length: 12 }, (_, i) => ({ x: 300 + i * 6, y: 400 }));
  r = (await dots((await P.pdfWithMarks(PDFLib, src, HASH, takeoff(tight).state, { legend: false })).bytes)).out;
  ok(r.length === 12 && r.every((d) => near(d.r, 2.7, 1e-3)), '6 pt apart: every dot on the page shrinks to 2.7 pt (0.45 × the spacing), so none overlaps', JSON.stringify(r[0]));
  ok(r.every((d) => 2 * d.r * 1.125 < 6.1), 'shrunk dots with their outlines fit the spacing');
  // absurdly tight: never below a third
  const stack = Array.from({ length: 12 }, (_, i) => ({ x: 300 + i * 0.5, y: 400 }));
  r = (await dots((await P.pdfWithMarks(PDFLib, src, HASH, takeoff(stack).state, { legend: false })).bytes)).out;
  ok(r.every((d) => near(d.r, 1.5, 1e-3)), '0.5 pt apart: the dots stop shrinking at a third of the set size (1.5 pt)');
  // one accidental double click among well-spaced counts does not shrink the page
  const grid = []; for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) grid.push({ x: 300 + i * 40, y: 300 + j * 40 });
  grid.push({ x: 301, y: 300.5 });
  r = (await dots((await P.pdfWithMarks(PDFLib, src, HASH, takeoff(grid).state, { legend: false })).bytes)).out;
  ok(r.length === 37 && r.every((d) => near(d.r, 4.5, 1e-3)), 'one double click among 36 well-spaced counts leaves the page at full size (10th percentile, not the minimum)');
  // a large setting on a dense page is limited the same way
  r = (await dots((await P.pdfWithMarks(PDFLib, src, HASH, takeoff(Array.from({ length: 12 }, (_, i) => ({ x: 300 + i * 10, y: 400 }))).state, { legend: false, marker: 'large' })).bytes)).out;
  ok(r.every((d) => near(d.r, 4.5, 1e-3)), 'large (6 pt) on counts 10 pt apart: 4.5 pt');
  // 20 000 counts stay fast
  const many = Array.from({ length: 20000 }, (_, i) => ({ x: 50 + (i % 200) * 12, y: 50 + Math.floor(i / 200) * 12 }));
  const t0 = Date.now(); const c = CM.crowding(many); const ms = Date.now() - t0;
  ok(near(c, 12) && ms < 2000, `crowding of 20 000 counts in ${ms} ms`);
}

console.log('\nLines and areas are drawn as before');
{
  const src = await blank(2592, 1728);
  const t = new M.Takeoff();
  t.addFile({ hash: HASH, name: 'sheet.pdf', size: 1, pages: 1 });
  const wall = t.addItem({ name: 'Wall', type: 'linear' });
  t.addMark({ item: wall, sheet: M.sheetKey(HASH, 0), pts: [{ x: 100, y: 100 }, { x: 500, y: 100 }] });
  const out = await P.pdfWithMarks(PDFLib, src, HASH, t.state, { legend: false });
  const { text, out: ds } = await dots(out.bytes);
  ok(ds.length === 0 && /\b2\.88 w\b/.test(text), 'a run on a 24" × 36" sheet keeps its line width (2.88 pt = shorter side / 600): not part of this fix');
}

console.log('\nRasterised at 96 dpi (100%): the dot in pixels');
let poppler = true;
try { execFileSync('pdftoppm', ['-v'], { stdio: 'ignore' }); } catch { poppler = false; }
if (!poppler) console.log('    pdftoppm (poppler) not found: skipped');
else {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'tc-marker-'));
  for (const m of made.slice(0, 2)) {
    const pf = path.join(tmp, 'p.pdf'); fs.writeFileSync(pf, m.bytes);
    // a 48 × 48 px window centred on the first count (100, 100 pt from the bottom-left)
    const cx = Math.round(100 * 96 / 72), cy = Math.round((m.h - 100) * 96 / 72);
    execFileSync('pdftoppm', ['-r', '96', '-x', String(cx - 24), '-y', String(cy - 24), '-W', '48', '-H', '48', '-gray', pf, path.join(tmp, 'crop')]);
    const pgm = fs.readFileSync(path.join(tmp, fs.readdirSync(tmp).find((n) => n.startsWith('crop'))));
    // P5 header: "P5\n48 48\n255\n"
    const head = pgm.subarray(0, 20).toString('latin1').match(/^P5\s+(\d+)\s+(\d+)\s+(\d+)\s/);
    const W = Number(head[1]), data = pgm.subarray(head[0].length);
    let minX = W, maxX = 0;
    for (let x = 0; x < W; x++) { const v = data[24 * W + x]; if (v < 200) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); } }
    const across = maxX - minX + 1;
    ok(Math.abs(across - 10.5) <= 1.5, `${m.name}: the coloured dot is ${across} px across at 100% (the screen's is 10.5 px: 12 px less half the white outline each side)`);
    for (const f of fs.readdirSync(tmp)) if (f.startsWith('crop')) fs.unlinkSync(path.join(tmp, f));
    if (SHOTS) {
      fs.mkdirSync(SHOTS, { recursive: true });
      const base = path.join(SHOTS, 'countmarker-pdf-' + m.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase());
      execFileSync('pdftoppm', ['-r', '96', '-x', String(cx - 100), '-y', String(cy - 200), '-W', '300', '-H', '300', '-png', '-singlefile', pf, base]);
    }
  }
  fs.rmSync(tmp, { recursive: true, force: true });
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
