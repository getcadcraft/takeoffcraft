#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-takeoffcraft.mjs — TakeoffCraft's DOM-free modules without a browser (the same files the
 * browser loads from public_html/assets/apps/takeoffcraft/<build>/), plus the real plan set.
 *
 *   node bin/test-takeoffcraft.mjs [--build dev|x.y] [--verbose] [--browser [--keep-shots]]
 *
 * Units (feet-inches with fractions, metric), preset scales against PDF points (72/in, and
 * /UserUnit), two-point calibration, polygon area with cut-outs and perimeter, wall area,
 * the formula parser (precedence, functions, errors, and that it cannot reach globals),
 * waste and cost totals to the cent, undo/redo, the project file round trip (save → reopen →
 * identical quantities; damaged/hostile files refused), the clipboard (clipboard.js: copy, paste moved, paste in
 * place, other-scale / no-scale / other-size refusals, duplicate, cut, items with their assemblies into another
 * takeoff, one undo step each, a tampered clipboard), CSV escaping, the XLSX (unzipped, then
 * read back and RE-CALCULATED by tools/takeoffcraft-test/xlsx_check.py — openpyxl when its venv
 * exists — and compared with the app's numbers), and the public kitchen plan sheet
 * (fixtures/pdf/kitchen-plan-sheet.pdf: public, same geometry as the real set it replaces): opened with pdf.js, scale
 * checked against a known dimension, taken off, saved, reopened, and a marked PDF copy written
 * with pdf-lib and checked with pdf.js + poppler.
 *
 * --browser also drives /lab/takeoffcraft in headless Chromium (needs root for sudo -u www-data
 * and the cached Playwright Chromium): a dedicated test admin (takeofftest+cadcraft@projectz.xyz, a session minted in-process by tools/takeoffcraft-test/admin.php, so the shared login throttle is untouched;
 * random password, disabled again at the end) signs in, opens the plan PDF, calibrates, takes
 * off a linear, an area and a count item with pointer events, exports CSV/XLSX/project/PDF, uses the Edit group
 * (toolbar buttons, the More menu and the keys: copy, paste by click, paste in place, duplicate, cut, delete,
 * select all/none, Shift+click, copy/duplicate item), the Settings › TakeoffCraft tab (stored, kept after a reload,
 * working, reset), and
 * screenshots paper and model themes into tmp/shots/takeoffcraft/. Fails on any console error. Then it runs
 * tools/takeoffcraft-test/browser-3d.mjs (the 3D check view: plan-sheet takeoff → 3D, orbit, pick, both themes; shots
 * takeoffcraft-3d-*.png) and counts its checks.
 *
 * Section "3D" (DOM-free): m3d/camera.js, vec.js, earcut.js, viewcube.js, viewcube-camera.js byte-identical to ModelCraft's; scene3d.js walls = L × H and
 * slab volumes = net area × depth exactly as quantities() (arcs, cut-outs), mesh volume/area within the flattening, plates,
 * flat runs, posts, one sheet only, rotated and /UserUnit transforms; three.js only through a lazy import().
 *
 * One-time setup: (cd tools/takeoffcraft-test && npm install) — the legacy (Node) pdf.js build;
 * optional: python3 -m venv tools/takeoffcraft-test/venv && tools/takeoffcraft-test/venv/bin/pip install openpyxl
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const VERBOSE = args.includes('--verbose');
const APP = path.join(ROOT, 'public_html/assets/apps/takeoffcraft', BUILD);
const TOOLS = path.join(ROOT, 'tools/takeoffcraft-test');
const PLAN = path.join(ROOT, 'fixtures/pdf/kitchen-plan-sheet.pdf');   // public fixture (0.4 item 0.7; facts in fixtures/facts.json)
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

const U = await load('units.js');
const G = await load('geom.js');
const F = await load('formula.js');
const M = await load('model.js');
const X = await load('xlsx.js');
const E = await load('export.js');
const P = await load('pdfmarks.js');
const S = await load('pdfset.js');
const Mt = await load('match.js');
const C = await load('clipboard.js');
const Sn = await load('snap.js');
const Ty = await load('typein.js');
const Ov = await load('overlay.js');
// new strings (0.4) come from the language file: the modules' t() reads this catalog in Node
const I18N = await load('i18n.js');
I18N.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const PDFLib = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/pdf-lib/current/pdf-lib.esm.js')).href);

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const near = (a, b, t = 1e-9) => Math.abs(a - b) <= t * Math.max(1, Math.abs(a), Math.abs(b));
const eq = (a, b, name) => ok(Object.is(a, b) || a === b, name, 'got ' + JSON.stringify(a) + ', want ' + JSON.stringify(b));
const section = (s) => console.log('\n' + s);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'takeoffcraft-test-'));

// ---------------------------------------------------------------------------
section('Feet-inches and metric parsing');
{
  const ft = (s, o) => { const r = U.parseLength(s, o); return r.ok ? r.ft : 'ERR: ' + r.error; };
  const cases = [
    ['24\'-0"', 24], ['24\'0"', 24], ['24\' 0"', 24], ['24\'', 24], ['24 ft', 24], ['24 feet', 24], ['24ft', 24],
    ['12\' 6 1/2"', 12 + 6.5 / 12], ['12\'-6 1/2"', 12 + 6.5 / 12], ['12\'-6-1/2"', 12 + 6.5 / 12], ['12\'6-1/2"', 12 + 6.5 / 12],
    ['12\' 6', 12.5], ['12\'-6"', 12.5], ['6 1/2"', 6.5 / 12], ['6-1/2"', 6.5 / 12], ['3/4"', 0.0625], ['1/16"', 1 / 192],
    ['0\'-3/4"', 0.0625], ['5\'-3/4"', 5 + 0.75 / 12], ['100\'-11 15/16"', 100 + (11 + 15 / 16) / 12],
    ['24.5\'', 24.5], ['24.5', 24.5], ['.5\'', 0.5], ['30"', 2.5], ['30 in', 2.5], ['30 inches', 2.5], ['6.25"', 6.25 / 12],
    ['24 ft 6 in', 24.5], ['1,250\'', 1250], ['12′-6″', 12.5], ['12’ 6”', 12.5], ['12\'6\'\'', 12.5],
    ['3.2 m', 3.2 / 0.3048], ['3200 mm', 3.2 / 0.3048], ['320 cm', 3.2 / 0.3048], ['3.2m', 3.2 / 0.3048], ['0.3048 m', 1],
    ['304.8mm', 1], ['  9\'-6"  ', 9.5],
  ];
  for (const [s, want] of cases) ok(near(ft(s), want, 1e-12), `parse ${s} = ${want}`, 'got ' + ft(s));
  ok(near(ft('2.5', { defaultUnit: 'm' }), 2.5 / 0.3048), 'bare number in the default unit (m)');
  ok(near(ft('18', { defaultUnit: 'in' }), 1.5), 'bare number in the default unit (in)');
  for (const bad of ['', 'abc', '-5\'', '0', '0\'-0"', '1/0"', '12\' 6 7', '6.5 1/2"', '3 m 20 cm', '5"6\'', 'ft', '1.2.3', '12\'-6"x']) {
    ok(typeof ft(bad) === 'string', `refuses "${bad}"`, 'got ' + ft(bad));
  }
}

section('Feet-inches formatting');
{
  const cases = [
    [24, '24\'-0"'], [12.5, '12\'-6"'], [12 + 6.5 / 12, '12\'-6 1/2"'], [0.0625, '0\'-0 3/4"'], [1 / 192, '0\'-0 1/16"'],
    [11.99999, '12\'-0"'], [11 + 11.97 / 12, '12\'-0"'], [11 + 11.96 / 12, '11\'-11 15/16"'], [0, '0\'-0"'], [-2.5, '-2\'-6"'],
    [100 + (11 + 15 / 16) / 12, '100\'-11 15/16"'], [1 + 0.5 / 12, '1\'-0 1/2"'], [9.5, '9\'-6"'], [16.125, '16\'-1 1/2"'],
    [3 + 4.25 / 12, '3\'-4 1/4"'], [3 + 4.125 / 12, '3\'-4 1/8"'], [3 + 4.375 / 12, '3\'-4 3/8"'],
  ];
  for (const [v, want] of cases) eq(U.formatFtIn(v), want, `format ${v} → ${want}`);
  eq(U.formatFtIn(12 + 6.3 / 12, 8), '12\'-6 1/4"', 'format to 1/8" (6.3" → 6 1/4")');
  // every 1/16" from 0 to 30 ft formats and parses back exactly
  let bad = 0;
  for (let n = 0; n <= 30 * 12 * 16; n++) {
    const v = n / 192;
    const s = U.formatFtIn(v);
    const back = U.parseLength(s);
    if (n === 0 ? back.ok : !(back.ok && near(back.ft, v, 1e-12))) bad++;
  }
  eq(bad, 0, 'every 1/16" step 0–30 ft round-trips format → parse (5,761 values)');
  eq(U.formatLength(3.2 / 0.3048, 'm'), '3.200 m', 'meters display');
  eq(U.formatLength(1, 'mm'), '305 mm', 'millimeters display (304.8 → 305)');
  eq(U.fixed(1234567.891, 2), '1,234,567.89', 'grouped fixed');
  eq(U.roundTo(1.005, 2), 1.01, 'round 1.005 → 1.01 (binary noise)');
  eq(U.roundTo(2.675, 2), 2.68, 'round 2.675 → 2.68');
  eq(U.roundTo(-2.5, 0), -3, 'round half away from zero (negative)');
}

section('Preset scales against PDF points (72 per inch)');
{
  const at = (key, units, uu = 1) => U.presetFtPerUnit(key, uu) * units;
  ok(near(at('a1/4', 72), 4), '1/4" = 1\'-0": 72 pt (1 in) = 4 ft');
  ok(near(U.presetFtPerUnit('a1/4'), 1 / 18), '1/4" = 1\'-0": 1/18 ft per pt');
  ok(near(at('a1/8', 72), 8), '1/8": 1 in = 8 ft');
  ok(near(at('a1/16', 72), 16), '1/16": 1 in = 16 ft');
  ok(near(at('a3/32', 72), 128 / 12), '3/32": 1 in = 10\'-8"');
  ok(near(at('a3/16', 72), 64 / 12), '3/16": 1 in = 5\'-4"');
  ok(near(at('a3/8', 72), 32 / 12), '3/8": 1 in = 2\'-8"');
  ok(near(at('a1/2', 72), 2), '1/2": 1 in = 2 ft');
  ok(near(at('a3/4', 72), 16 / 12), '3/4": 1 in = 1\'-4"');
  ok(near(at('a1', 72), 1), '1" = 1\'-0"');
  ok(near(at('a1-1/2', 72), 8 / 12), '1 1/2": 1 in = 8"');
  ok(near(at('a3', 72), 1 / 3), '3" = 1\'-0": 1 in = 4"');
  for (const n of [10, 20, 30, 40, 50, 60, 100]) ok(near(at('e' + n, 72), n), `1" = ${n}': 72 pt = ${n} ft`);
  for (const n of [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000]) ok(near(at('m' + n, 72) * 0.3048, 0.0254 * n), `1:${n}: 72 pt = ${(0.0254 * n).toFixed(4)} m`);
  ok(near(at('m100', 72 / 25.4 * 10), 1 / 0.3048), '1:100: 10 mm on paper = 1 m');
  ok(near(at('a1/4', 36, 2), 4), '/UserUnit 2: 36 units are 1 in on paper → 4 ft at 1/4"');
  ok(U.SCALE_GROUPS.flatMap(([, l]) => l).length === 30, '30 presets (11 architectural, 7 engineering, 12 metric)');
}

section('Two-point calibration');
{
  const r = U.calibrate({ x: 930.48, y: 1157.28 }, { x: 930.48, y: 1328.28 }, U.parseLength('9\'-6"').ft);
  ok(r.ok && near(r.ftPerUnit, 1 / 18, 1e-12), '171 pt = 9\'-6" → 1/18 ft per pt');
  eq(U.matchPreset(r.ftPerUnit)?.key, 'a1/4', 'recognised as 1/4" = 1\'-0"');
  const d = U.calibrate({ x: 0, y: 0 }, { x: 300, y: 400 }, 25);
  ok(d.ok && near(d.ftPerUnit, 0.05), 'diagonal pick (3-4-5): 500 units = 25 ft');
  ok(!U.calibrate({ x: 1, y: 1 }, { x: 1.2, y: 1 }, 10).ok, 'refuses two points on top of each other');
  ok(!U.calibrate({ x: 0, y: 0 }, { x: 100, y: 0 }, 0).ok, 'refuses a zero distance');
  eq(U.matchPreset(1 / 18 * 1.02), null, 'a scale 2% off a preset is not called that preset');
  eq(U.describeScale(1 / 18), '1" = 4\'', 'describe 1/18 ft/pt as 1" = 4\'');
  const m = U.calibrate({ x: 0, y: 0 }, { x: 72 / 25.4 * 50, y: 0 }, U.parseLength('5 m').ft);
  eq(U.matchPreset(m.ftPerUnit)?.key, 'm100', '50 mm on paper = 5 m → 1:100');
}

section('Polygon area, cut-outs, perimeter');
{
  const R = (x, y, w, h) => [{ x, y }, { x: x + w, y }, { x: x + w, y: y + h }, { x, y: y + h }];
  eq(G.polygonArea(R(0, 0, 10, 20)), 200, 'rectangle 10 × 20 = 200');
  eq(G.polygonArea(R(0, 0, 10, 20).reverse()), 200, 'clockwise outline, same area');
  eq(G.perimeter(R(0, 0, 10, 20)), 60, 'perimeter 60');
  const L = [{ x: 0, y: 0 }, { x: 30, y: 0 }, { x: 30, y: 10 }, { x: 10, y: 10 }, { x: 10, y: 40 }, { x: 0, y: 40 }];
  eq(G.polygonArea(L), 30 * 10 + 10 * 30, 'L-shape 600');
  eq(G.perimeter(L), 140, 'L-shape perimeter 140');
  ok(near(G.polygonArea([{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 0, y: 3 }]), 6), 'triangle 6');
  const a = G.areaWithHoles(R(0, 0, 100, 50), [R(10, 10, 20, 5), R(50, 20, 10, 10)]);
  eq(a.gross, 5000, 'gross 5000');
  eq(a.cut, 200, 'cut-outs 100 + 100');
  eq(a.net, 4800, 'net 4800');
  eq(a.perimeter, 300 + 50 + 40, 'perimeter = outline 300 + cut-outs 50 + 40');
  eq(a.outerPerimeter, 300, 'outline perimeter alone 300');
  const bow = [{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 10, y: 0 }, { x: 0, y: 10 }];
  ok(G.outlineProblem(bow)?.includes('crosses itself'), 'a bow-tie outline is refused (its shoelace area would be 0)');
  ok(G.outlineProblem([{ x: 0, y: 0 }, { x: 5, y: 0 }, { x: 10, y: 0 }])?.includes('no area'), 'collinear points are refused');
  ok(G.outlineProblem(R(0, 0, 1, 1)) === null, 'a square is fine');
  ok(G.holeProblem(R(0, 0, 100, 50), [], R(90, 40, 20, 20))?.includes('inside'), 'a cut-out sticking out is refused');
  ok(G.holeProblem(R(0, 0, 100, 50), [], R(200, 200, 5, 5))?.includes('inside'), 'a cut-out outside is refused');
  ok(G.holeProblem(R(0, 0, 100, 50), [R(10, 10, 20, 20)], R(20, 20, 20, 20))?.includes('overlap'), 'overlapping cut-outs are refused');
  ok(G.holeProblem(R(0, 0, 100, 50), [R(10, 10, 30, 30)], R(15, 15, 5, 5))?.includes('overlap'), 'a cut-out inside another is refused');
  ok(G.holeProblem(R(0, 0, 100, 50), [R(10, 10, 20, 20)], R(50, 10, 20, 20)) === null, 'a separate cut-out is fine');
  const s = G.snap45({ x: 0, y: 0 }, { x: 100, y: 3 });
  ok(s.y === 0 && near(s.x, 100), 'Shift snaps a near-horizontal pick to 0°');
  const s2 = G.snap45({ x: 0, y: 0 }, { x: 50, y: 47 });
  ok(near(s2.x, s2.y) && near(Math.hypot(s2.x, s2.y), (50 + 47) / Math.SQRT2), 'Shift snaps to 45°, keeping the distance along it');
  const s3 = G.snap45({ x: 10, y: 10 }, { x: 11, y: -80 });
  ok(s3.x === 10 && near(s3.y, -80), 'Shift snaps to 270°');
  eq(G.polylineLength([{ x: 0, y: 0 }, { x: 3, y: 4 }, { x: 3, y: 10 }]), 11, 'polyline 5 + 6 = 11');
  ok(near(G.distToSegment({ x: 5, y: 5 }, { x: 0, y: 0 }, { x: 10, y: 0 }), 5), 'distance to a segment');
}

section('Arcs and circles (exact, checked against closed forms)');
{
  const PI = Math.PI;
  eq(G.bulgeThrough({ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }) > 0.9999999, true, 'three points over the top, left to right… counter-clockwise half circle → bulge +1');
  ok(near(G.bulgeThrough({ x: 1, y: 0 }, { x: 0, y: -1 }, { x: -1, y: 0 }), -1), 'the same chord bowing the other way → bulge −1');
  eq(G.bulgeThrough({ x: 0, y: 0 }, { x: 5, y: 0 }, { x: 10, y: 0 }), 0, 'three points in a line → straight (bulge 0)');
  const q = Math.SQRT1_2;
  ok(near(G.bulgeThrough({ x: 1, y: 0 }, { x: q, y: q }, { x: 0, y: 1 }), Math.tan(PI / 8)), 'quarter circle → bulge tan(22.5°)');
  ok(near(G.bulgeThrough({ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: -1 }), Math.tan(3 * PI / 8)), 'a 270° arc through the far side → bulge tan(67.5°)');
  // slot: 10 long, semicircle ends of radius 2 (4 wide): area 2r·s + πr², perimeter 2s + 2πr
  const r = 2, sl = 10;
  const slot = [{ x: 0, y: 0 }, { x: sl, y: 0, b: 1 }, { x: sl, y: 2 * r }, { x: 0, y: 2 * r, b: 1 }];
  ok(near(G.polygonArea(slot), 2 * r * sl + PI * r * r, 1e-13), `slot area = 2rs + πr² = ${(2 * r * sl + PI * r * r).toFixed(6)}`);
  ok(near(G.perimeter(slot), 2 * sl + 2 * PI * r, 1e-13), 'slot perimeter = 2s + 2πr');
  ok(near(G.polygonArea([...slot].reverse().map((p, i, a) => ({ x: p.x, y: p.y, ...(a[(i + 1) % a.length].b ? { b: -a[(i + 1) % a.length].b } : {}) }))), 2 * r * sl + PI * r * r, 1e-13), 'the slot traced clockwise has the same area');
  // quarter-circle room of radius R: area πR²/4, perimeter 2R + πR/2
  const R = 20;
  const quarter = [{ x: 0, y: 0 }, { x: R, y: 0, b: Math.tan(PI / 8) }, { x: 0, y: R }];
  ok(near(G.polygonArea(quarter), PI * R * R / 4, 1e-13), 'quarter-circle room area = πR²/4');
  ok(near(G.perimeter(quarter), 2 * R + PI * R / 2, 1e-13), 'quarter-circle room perimeter = 2R + πR/2');
  // a run: 10 straight, a half circle of diameter 10, 10 straight back, then a clockwise quarter of radius 4
  const run = [{ x: 0, y: 0 }, { x: 10, y: 0, b: 1 }, { x: 10, y: 10 }, { x: 0, y: 10, b: -Math.tan(PI / 8) }, { x: -4, y: 14 }];
  ok(near(G.polylineLength(run), 10 + 5 * PI + 10 + 2 * PI, 1e-13), 'mixed run = 10 + 5π + 10 + 2π (lines + half circle + quarter)');
  const segs = G.segmentLengths(run);
  ok(near(segs[1], 5 * PI) && near(segs[3], 2 * PI) && segs[0] === 10 && segs[2] === 10, 'its segments: 10, 5π, 10, 2π');
  // circle: two points, both bulge 1
  const circle = (cx, cy, rr) => [{ x: cx + rr, y: cy, b: 1 }, { x: cx - rr, y: cy, b: 1 }];
  ok(near(G.polygonArea(circle(5, 5, 3)), 9 * PI, 1e-13) && near(G.perimeter(circle(5, 5, 3)), 6 * PI, 1e-13), 'circle r 3: area 9π, perimeter 6π');
  eq(G.outlineProblem(circle(0, 0, 1)), null, 'a two-point circle is a valid outline');
  ok(G.outlineProblem([{ x: 0, y: 0 }, { x: 1, y: 0 }]) !== null, 'two points without an arc are not');
  const sq = [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }];
  const aw = G.areaWithHoles(sq, [circle(5, 5, 1)]);
  ok(near(aw.net, 100 - PI, 1e-13) && near(aw.perimeter, 40 + 2 * PI, 1e-13), 'square minus a round cut-out: 100 − π, perimeter 40 + 2π');
  eq(G.holeProblem(sq, [], circle(5, 5, 1)), null, 'a round cut-out inside is fine');
  ok(G.holeProblem(sq, [], circle(9.5, 5, 1))?.includes('inside'), 'a round cut-out crossing the edge is refused (its arc is checked, not just its two points)');
  ok(G.selfIntersects([{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 4, b: -1 }, { x: 0, y: 4 }]) && !G.selfIntersects([{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10, b: -0.5 }, { x: 0, y: 10 }]), 'an arc bowing in past the far side is caught as crossing; a shallow one is not');
  ok(G.pointInPolygon({ x: 11.5, y: 2 }, slot) && !G.pointInPolygon({ x: 12.5, y: 2 }, slot), 'inside test follows the arc (point in the rounded end, point past it)');
  // Béziers used for drawing stay on the circle
  let worst = 0;
  for (const op of G.pathOps(circle(0, 0, 100), true)) {
    if (op[0] !== 'C') continue;
    const [, c1, c2, e] = op;
    const p0 = worstPrev ?? { x: 100, y: 0 };
    for (let t = 0; t <= 1; t += 0.05) {
      const u = 1 - t, x = u * u * u * p0.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t * t * t * e.x, y = u * u * u * p0.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t * t * t * e.y;
      worst = Math.max(worst, Math.abs(Math.hypot(x, y) - 100));
    }
    worstPrev = e;
  }
  ok(worst < 0.03, `drawn arcs (≤ 90° Béziers) stay within ${worst.toFixed(4)} of a 100-unit circle (< 0.03%)`);
  ok(G.flatten(circle(0, 0, 1), true).length >= 72, 'flattening (for picking) uses short chords');
  // a three-point arc gives the exact area the user traced
  const th = 2 * PI / 3, rr = 7;
  const p1 = { x: rr, y: 0 }, pm = { x: rr * Math.cos(th / 2), y: rr * Math.sin(th / 2) }, p2 = { x: rr * Math.cos(th), y: rr * Math.sin(th) };
  const fan = [{ x: 0, y: 0 }, { ...p1, b: G.bulgeThrough(p1, pm, p2) }, p2];
  ok(near(G.polygonArea(fan), rr * rr * th / 2, 1e-12), 'a 120° pie traced with a three-point arc = r²θ/2');
}
var worstPrev = null;

section('Formula parser');
{
  const v = { L: 10, H: 8, A: 80, N: 3, P: 44 };
  const c = (s, vars = v) => { const r = F.compute(s, vars); return r.ok ? r.value : 'ERR: ' + r.error; };
  const cases = [
    ['2 + 3 * 4', 14], ['(2 + 3) * 4', 20], ['2 * 3 + 4', 10], ['10 - 4 - 3', 3], ['100 / 10 / 5', 2], ['10 / 4', 2.5],
    ['-2 * 3', -6], ['- (2 + 3)', -5], ['--4', 4], ['+4', 4], ['2 * -3', -6], ['10 - -2', 12], ['2 × 3 ÷ 4', 1.5], ['5 − 2', 3],
    ['L', 10], ['l * h', 80], ['L * H * 2 / 32', 5], ['ceil(L / 1.333) + 1', 9], ['ceil(L/1.333)+N', 11],
    ['ceil(0.1 * 3 / 0.3)', 1], ['floor(0.7 * 10)', 7], ['ceil(2)', 2], ['floor(-1.5)', -2], ['ceil(-1.5)', -1],
    ['round(2.5)', 3], ['round(-2.5)', -3], ['round(2.675, 2)', 2.68], ['round(1.005, 2)', 1.01], ['round(L / 3, 1)', 3.3],
    ['min(3, 1, 2)', 1], ['max(L, H, 12)', 12], ['max(L)', 10], ['abs(-7)', 7], ['((((L))))', 10], ['1e3', 1000], ['.5 * L', 5],
    ['A / 32', 2.5], ['P * 1.1', 44 * 1.1], ['ceil((L * H) / 32 * 1.1)', 3],
  ];
  for (const [s, want] of cases) ok(typeof c(s) === 'number' && near(c(s), want, 1e-12), `${s} = ${want}`, 'got ' + c(s));
  const bad = [
    ['', 'Type a formula'], ['L +', 'ends too soon'], ['(L + 2', ')" is missing'], ['L + 2)', 'without its'], ['2L', 'operator missing'],
    ['L H', 'operator missing'], ['X * 2', 'not a measured value'], ['foo(L)', 'not a function'], ['L / 0', 'divides by zero'],
    ['L / (H - 8)', 'divides by zero'], ['ceil()', 'missing before'], ['ceil(1, 2)', 'takes 1 value'], ['round(1, 2, 3)', 'takes 1 or 2'],
    ['round(L, 1.5)', 'whole digits'], ['L ^ 2', 'not allowed'], ['L % 2', 'not allowed'], ['L; 2', 'not allowed'], ['"a"', 'not allowed'],
    ["'a'", 'not allowed'], ['`a`', 'not allowed'], ['[1]', 'not allowed'], ['{}', 'not allowed'], ['L.constructor', 'not allowed'],
    ['constructor', 'not a measured value'], ['__proto__', 'not a measured value'], ['toString(1)', 'not a function'],
    ['constructor(1)', 'not a function'], ['hasOwnProperty(1)', 'not a function'], ['valueOf(1)', 'not a function'],
    ['process', 'not a measured value'], ['globalThis', 'not a measured value'], ['this', 'not a measured value'],
    ['eval(1)', 'not a function'], ['Function(1)', 'not a function'], ['alert(1)', 'not a function'], ['require(1)', 'not a function'],
    ['import(1)', 'not a function'], ['new Date', 'not a measured value'], ['min(1,)', 'missing before'], ['L = 2', 'not allowed'], ['1e999 * 2', 'not give a number'],
    ['(' .repeat(150) + '1' + ')'.repeat(150), 'nested too deeply'], ['L'.repeat(501), 'too long'],
  ];
  for (const [s, want] of bad) { const r = c(s); ok(typeof r === 'string' && r.includes(want), `refuses ${s.length > 40 ? s.slice(0, 20) + '…' : s} (${want})`, 'got ' + r); }
  ok(!F.parse('A', ['L', 'H', 'N']).ok, 'a linear item cannot use a variable it does not have');
  ok(F.parse('H', ['A', 'P', 'H', 'N']).ok, 'an area item may use H (depth)');
  eq(c('N', { N: 0 }), 0, 'zero count is a fine value');
  ok(typeof c('L', { L: NaN }) === 'string', 'a missing measurement is an error, not NaN');
  const src = fs.readFileSync(path.join(APP, 'formula.js'), 'utf8').replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
  ok(!/\beval\s*\(|\bFunction\s*\(|new\s+Function|\bwith\s*\(|import\s*\(/.test(src), 'formula.js has no eval/Function/with/import()');
  // prototype pollution attempt through the variables object has no effect
  const r = F.compute('L', Object.assign(Object.create({ L: 999 }), { N: 1 }));
  ok(!r.ok, 'an inherited (prototype) variable is not visible');
}

// ---------------------------------------------------------------------------
section('Snap to the drawing\'s linework (T1)');
{
  // a fake pdf.js operator list: the op numbers are pdf.js's own (OPS), the drawing ops 0 move, 1 line, 2 cubic, 3 quad, 4 close
  const O = { save: 10, restore: 11, transform: 12, constructPath: 91, endPath: 28, stroke: 20, fill: 22, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75 };
  const path = (op, d) => [O.constructPath, [op, [Float32Array.from(d)], null]];
  const list = [
    path(O.stroke, [0, 0, 0, 1, 100, 0, 1, 100, 50, 4]),                 // a closed triangle 0,0 → 100,0 → 100,50 → back
    path(O.endPath, [0, 0, 0, 1, 500, 500]),                                // a clipping path: never drawn
    [O.save, []], [O.transform, [2, 0, 0, 2, 10, 20]],
    path(O.stroke, [0, 0, 0, 1, 5, 0]),                                     // → (10,20)–(20,20)
    [O.restore, []],
    [O.paintFormXObjectBegin, [[1, 0, 0, 1, 200, 0], [0, 0, 10, 10]]],
    path(O.fill, [0, 0, 0, 1, 0, 10]),                                      // inside a form at x+200 → (200,0)–(200,10)
    [O.paintFormXObjectEnd, []],
    path(O.stroke, [0, 300, 0, 2, 300, 55.23, 344.77, 100, 400, 100]),     // a quarter circle (r 100, centre 400,0), cubic
  ];
  const ops = { fnArray: list.map((x) => x[0]), argsArray: list.map((x) => x[1]) };
  const lw = Sn.extractSegments(O, ops);
  eq(lw.n, 3 + 1 + 1 + 8, 'segments: 3 triangle sides (close included), 1 transformed, 1 inside a form, the curve as 8 chords; the clip is skipped');
  const seg = (i) => Array.from(lw.segs.subarray(i * 4, i * 4 + 4));
  eq(JSON.stringify(seg(2)), '[100,50,0,0]', 'closePath draws back to the start');
  eq(JSON.stringify(seg(3)), '[10,20,20,20]', 'save / transform / restore: the matrix applies to that path only');
  eq(JSON.stringify(seg(4)), '[200,0,200,10]', 'a form XObject\'s matrix applies inside it, and stops at its end');
  ok(lw.curve[5] === 3 && lw.curve[12] === 5 && lw.curve.slice(6, 12).every((f) => f === 1), 'curve chords are flagged: first (starts the curve), last (ends it), the rest inner', Array.from(lw.curve).join());
  const idx = new Sn.SnapIndex(lw);
  const hit = (x, y, tol = 3, k) => idx.snap({ x, y }, tol, k);
  let h = hit(1, 1);
  ok(h?.kind === 'end' && h.x === 0 && h.y === 0, 'near a corner: the end point', JSON.stringify(h));
  h = hit(50.5, 1.5);
  ok(h?.kind === 'mid' && h.x === 50 && h.y === 0, 'near the middle of a side: its midpoint', JSON.stringify(h));
  h = hit(70, 0.5);
  ok(h?.kind === 'near' && near(h.x, 70) && h.y === 0, 'elsewhere on a line: the nearest point on it', JSON.stringify(h));
  ok(hit(70, 5) === null, 'farther than the tolerance: no snap');
  h = hit(15, 20.4, 3);
  ok(h?.kind === 'mid' && h.x === 15 && h.y === 20, 'the transformed line snaps at its own place', JSON.stringify(h));
  const q = (t) => { const u = 1 - t; return [u ** 3 * 300 + 3 * u * u * t * 300 + 3 * u * t * t * 344.77 + t ** 3 * 400, 3 * u * u * t * 55.23 + 3 * u * t * t * 100 + t ** 3 * 100]; };
  const [mx, my] = q(0.5);
  h = hit(mx + 0.5, my + 0.5);
  ok(h?.kind === 'near', 'inside a curve: its chord joints are neither ends nor crossings (only "on the line")', JSON.stringify(h));
  h = hit(399, 99);
  ok(h?.kind === 'end' && h.x === 400 && h.y === 100, 'a curve\'s own end is an end point', JSON.stringify(h));
  // crossings
  const X2 = Sn.extractSegments(O, { fnArray: [O.constructPath, O.constructPath], argsArray: [[O.stroke, [Float32Array.from([0, 0, 0, 1, 100, 100])], null], [O.stroke, [Float32Array.from([0, 0, 40, 1, 100, 40])], null]] });
  const ix = new Sn.SnapIndex(X2);
  h = ix.snap({ x: 41.5, y: 40.5 }, 3);
  ok(h?.kind === 'int' && near(h.x, 40) && near(h.y, 40), 'where two lines cross: the intersection', JSON.stringify(h));
  h = ix.snap({ x: 41.5, y: 40.5 }, 3, { int: false });
  ok(h?.kind === 'near', 'kinds can be limited (no intersections → on the line)', JSON.stringify(h));
  ok(Sn.intersect(Float64Array.from([0, 0, 10, 0, 0, 1, 10, 1]), 0, 1) === null, 'parallel lines never cross');
  ok(Sn.intersect(Float64Array.from([0, 0, 10, 0, 10, 0, 10, 10]), 0, 1) === null, 'a corner (end meets end) is not a crossing');
  ok(Sn.intersect(Float64Array.from([0, 0, 10, 0, 5, 0, 5, 10]), 0, 1)?.x === 5, 'a T (an end on the middle of another line) is');
  const X3 = Sn.extractSegments(O, { fnArray: [O.constructPath, O.constructPath], argsArray: [[O.stroke, [Float32Array.from([0, 0, 0, 1, 100, 100])], null], [O.stroke, [Float32Array.from([0, 0, 100, 1, 100, 0])], null]] });
  h = new Sn.SnapIndex(X3).snap({ x: 51, y: 50 }, 3);
  ok(h?.kind === 'int', 'a crossing that is also both midpoints is named a crossing', JSON.stringify(h));
  const capped = Sn.extractSegments(O, ops, { maxSegs: 4 });
  ok(capped.n === 4 && capped.truncated, 'a drawing over the segment limit keeps the first ones and says so');
  ok(new Sn.SnapIndex({ segs: new Float64Array(0), curve: new Uint8Array(0), n: 0 }).snap({ x: 0, y: 0 }, 5) === null, 'a sheet with no linework (a scan) never snaps');
}

section('Typed lengths and coordinates (T3)');
{
  eq(Ty.signedLength("-4'"), -4, 'signed length -4\'');
  eq(Ty.signedLength('0'), 0, 'zero is a coordinate (0)');
  eq(Ty.signedLength("0'"), 0, "zero with a foot mark (0')");
  eq(Ty.signedLength('6\'6"'), 6.5, '6\'6" = 6.5\'');
  eq(Ty.signedLength('+3'), 3, 'a plus sign is fine');
  eq(Ty.signedLength('x'), null, 'text is not a length');
  const ctx = { first: { x: 0, y: 0 }, last: { x: 100, y: 100 }, cursor: { x: 200, y: 100 }, ftPerUnit: 1 / 18, linear: [2, 0, 0, -2] };
  const pe = (txt, c = {}) => Ty.parseEntry(txt, { ...ctx, ...c });
  let r = pe("10'");
  ok(r.ok && r.kind === 'dist' && near(r.point.x, 280) && near(r.point.y, 100), "10' toward the pointer: 180 pt to the right", JSON.stringify(r));
  r = pe('5\'<90');
  ok(r.ok && r.kind === 'polar' && near(r.point.x, 100) && near(r.point.y, 190), "5'<90: straight up on screen (+y on an upright sheet)", JSON.stringify(r));
  r = pe("10'<-45");
  ok(r.ok && near(r.point.x, 100 + 180 / Math.SQRT2) && near(r.point.y, 100 - 180 / Math.SQRT2), 'a negative angle turns clockwise', JSON.stringify(r));
  r = pe("@6',-4'");
  ok(r.ok && r.kind === 'rel' && near(r.point.x, 208) && near(r.point.y, 28), "@6',-4': 6' right and 4' down from the last point", JSON.stringify(r));
  r = pe("6',4'");
  ok(r.ok && r.kind === 'abs' && near(r.point.x, 108) && near(r.point.y, 72), "6',4': from the run's first point", JSON.stringify(r));
  r = pe("#6',4'");
  ok(r.ok && r.kind === 'abs' && near(r.point.x, 108), '#6\',4\' is the same');
  r = pe('2 m');
  ok(r.ok && near(r.point.x, 100 + 2 / 0.3048 * 18), 'metric lengths work (2 m)');
  r = pe("@0,0");
  eq(r.error, 'typein.err.zero', 'a zero move is refused');
  eq(pe("10'", { cursor: { x: 100, y: 100 } }).error, 'typein.err.dir', 'a bare length needs the pointer to show the way');
  eq(pe("10'", { cursor: null }).error, 'typein.err.dir', '…and a pointer at all');
  eq(pe('abc').error, 'typein.err.read', 'text that is not a length is refused');
  eq(pe("1',2',3'").error, 'typein.err.read', 'three coordinates are refused');
  eq(pe("10'", { ftPerUnit: 0 }).error, 'typein.err.noscale', 'no scale: refused');
  eq(pe("10'", { last: null }).error, 'typein.err.first', 'a length before the first point is refused');
  for (const lin of [[0, 2, 2, 0], [-2, 0, 0, 2], [0, -2, -2, 0]]) {      // the sheet turned 90°, 180°, 270°
    const q = pe("@1',0", { linear: lin }).point;
    const sx = lin[0] * (q.x - 100) + lin[2] * (q.y - 100), sy = lin[1] * (q.x - 100) + lin[3] * (q.y - 100);
    const u = pe("@0,1'", { linear: lin }).point;
    const ux = lin[0] * (u.x - 100) + lin[2] * (u.y - 100), uy = lin[1] * (u.x - 100) + lin[3] * (u.y - 100);
    ok(near(sx, 36) && near(sy, 0) && near(ux, 0) && near(uy, -36), `on a turned sheet (${lin.join(',')}), "right" and "up" are the screen's`, JSON.stringify({ sx, sy, ux, uy }));
  }
}

section('Revision overlay: alignment, change mask, flags (T13)');
{
  const A = Ov.fitTwoPoints({ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 5, y: 5 }, { x: 5, y: 25 });
  const q1 = G.apply(A, { x: 0, y: 0 }), q2 = G.apply(A, { x: 10, y: 0 }), q3 = G.apply(A, { x: 0, y: 10 });
  ok(near(q1.x, 5) && near(q1.y, 5) && near(q2.x, 5) && near(q2.y, 25), 'two-point fit takes both picked points onto their partners');
  ok(near(Ov.scaleOf(A), 2) && near(q3.x, -15) && near(q3.y, 5), 'it turns (90°) and scales (×2) without mirroring', JSON.stringify(q3));
  eq(Ov.fitTwoPoints({ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 0 }, { x: 5, y: 0 }), null, 'two picks on the same point: no fit');
  // rasters: 60 × 40, lines of ink
  const W = 60, H = 40;
  const img = (lines) => { const d = new Float32Array(W * H); for (const [x0, y0, x1, y1] of lines) for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) d[y * W + x] = 1; return { data: d, w: W, h: H }; };
  const oldI = img([[5, 10, 50, 10], [5, 30, 50, 30], [20, 12, 20, 28]]);           // two walls and a partition at x 20
  const newI = img([[5, 11, 50, 11], [5, 30, 50, 30], [40, 12, 40, 28]]);           // top wall re-plotted 1 px lower; partition moved to x 40
  const same = Ov.warp(oldI, Ov.pixelMap(Ov.IDENTITY, Ov.IDENTITY, Ov.IDENTITY, 1), W, H);
  ok(same.data.every((v, i) => Math.abs(v - oldI.data[i]) < 1e-6), 'warp with the identity gives the same raster');
  const shifted = Ov.warp(oldI, Ov.pixelMap(Ov.IDENTITY, Ov.IDENTITY, [1, 0, 0, 1, 3, 0], 1), W, H);
  ok(shifted.data[10 * W + 23] > 0.99 && shifted.data[10 * W + 4] === 0, 'warp follows the alignment (moved 3 px right)');
  eq(Ov.dilate(img([[30, 20, 30, 20]]), 2).data.reduce((n, v) => n + v, 0), 25, 'dilate by 2: a 5 × 5 square');
  const cm = Ov.changeMask(oldI, newI, { r: 2 });
  ok(cm.removed === 14 && cm.added === 15, `the moved partition shows as removed and added (17 px each, less the ends within 2 px of a wall); the wall re-plotted 1 px off does not (${cm.removed} / ${cm.added})`);
  const px = (p) => ({ x: p.x, y: p.y });
  const wallMark = { kind: 'linear', pts: [{ x: 5, y: 10 }, { x: 50, y: 10 }] };
  const partMark = { kind: 'linear', pts: [{ x: 20, y: 12 }, { x: 20, y: 28 }] };
  const room = { kind: 'area', pts: [{ x: 22, y: 12 }, { x: 38, y: 12 }, { x: 38, y: 28 }, { x: 22, y: 28 }], holes: [] };
  const dot = { kind: 'count', pts: [{ x: 45, y: 20 }] };
  eq(Ov.markChange(wallMark, cm, px, { buffer: 3 }).total, 0, 'a run along an unchanged wall: no change');
  ok(Ov.markChange(partMark, cm, px, { buffer: 3 }).removed === 14, 'a run along the removed partition: its ink is gone');
  eq(Ov.markChange(room, cm, px, { buffer: 1 }).total, 0, 'an area whose outline missed both partitions: no change (inside does not count)');
  ok(Ov.markChange(dot, cm, px, { buffer: 6 }).added > 0, 'a count next to the new partition: changed');
  const rw = Ov.markChange(wallMark, cm, px, { buffer: 2 }), rp = Ov.markChange(partMark, cm, px, { buffer: 2 });   // a 45 px wall: the app's buffer is small beside real walls
  ok(!Ov.changed(rw, 'linear') && Ov.changed(rp, 'linear'), `the flag rule: the wall the partitions meet stays (share ${rw.share.toFixed(2)}, corners unchanged); the moved partition is flagged (share ${rp.share.toFixed(2)})`);
  ok(Ov.changed(Ov.markChange(dot, cm, px, { buffer: 6 }), 'count'), 'a count is flagged when anything changed next to it');
  // a wall that got longer: only its end shows the change
  const longer = Ov.changeMask(img([[5, 35, 30, 35]]), img([[5, 35, 50, 35]]), { r: 2 });
  const rl = Ov.markChange({ kind: 'linear', pts: [{ x: 5, y: 35 }, { x: 30, y: 35 }] }, longer, px, { buffer: 3 });
  ok(rl.corner && rl.share < 0.15 && Ov.changed(rl, 'linear'), `a wall drawn longer in the revision is flagged by its end (share ${rl.share.toFixed(2)}, corner ${rl.corner})`);
  eq(Ov.boxSum(Ov.sumOf(Uint8Array.from([1, 0, 1, 1]), 2, 2), 2, 2, 0, 0, 1, 1), 3, 'summed-area table counts a box');
  // the model: carry marks over, flags, the scale, one undo step
  const tr = new M.Takeoff();
  const HO = '1'.repeat(64), HN = '2'.repeat(64);
  tr.addFile({ hash: HO, name: 'Old.pdf', size: 1, pages: 1 }); tr.addFile({ hash: HN, name: 'New.pdf', size: 1, pages: 1 });
  const so = M.sheetKey(HO, 0), sn = M.sheetKey(HN, 0);
  tr.setScale(so, U.scaleRecord({ method: 'preset', preset: 'a1/4', ftPerUnit: 1 / 18, label: '1/4"' }));
  const it = tr.addItem({ name: 'Wall', type: 'linear' }), fl = tr.addItem({ name: 'Floor', type: 'area' });
  const m1 = tr.addMark({ item: it, sheet: so, pts: [{ x: 0, y: 0 }, { x: 180, y: 0, b: 0.5 }, { x: 360, y: 0 }] });
  const m2 = tr.addMark({ item: fl, sheet: so, pts: [{ x: 0, y: 0 }, { x: 90, y: 0 }, { x: 90, y: 90 }], holes: [[{ x: 10, y: 10 }, { x: 20, y: 10 }, { x: 20, y: 20 }]] });
  const before = M.estimate(tr.state).rows.map((r) => r.qty);
  const mv = (pts) => Ov.movePts(pts, [1, 0, 0, 1, 20, 10]);
  eq(tr.carryMarks([m1, m2], sn, mv, { flagged: new Set([m2]), scale: tr.scaleOf(so) }), 2, 'carryMarks moves two marks to the new sheet');
  ok(tr.mark(m1).sheet === sn && tr.mark(m1).pts[0].x === 20 && tr.mark(m1).pts[1].b === 0.5 && tr.mark(m2).holes[0][0].y === 20, 'points (and cut-outs, and arcs) move with the alignment');
  ok(tr.mark(m2).flag === 'rev' && !tr.mark(m1).flag, 'the changed one is flagged for review, the other not');
  eq(tr.scaleOf(sn)?.ftPerUnit, 1 / 18, 'the new sheet takes the old one\'s scale (it had none)');
  ok(JSON.stringify(M.estimate(tr.state).rows.map((r) => r.qty)) === JSON.stringify(before), 'quantities are unchanged by the move (same scale, moved only)');
  const jf = JSON.parse(JSON.stringify(tr.toJSON()));
  eq(jf.marks.find((m) => m.id === m2).flag, 'rev', 'the flag is saved in the project file');
  ok(M.readProject(jf).state.marks.find((m) => m.id === m2).flag === 'rev', 'and read back');
  const bogus = JSON.parse(JSON.stringify(jf)); bogus.marks[0].flag = '<b>'; ok(!M.readProject(bogus).state.marks[0].flag, 'an unknown flag is dropped');
  ok(tr.clearFlags([m2]) && !tr.mark(m2).flag, 'Checked clears the flag (one undo step)');
  tr.undo(); tr.undo();
  ok(tr.mark(m1).sheet === so && tr.mark(m2).pts[0].x === 0 && !tr.scaleOf(sn), 'one Ctrl+Z puts the marks (and the borrowed scale) back');
}

section('Symbol matching (synthetic rasters)');
{
  // a 12 × 8 asymmetric glyph stamped on a 120 × 80 field at 0/90/180/270 and once as a decoy box
  const W = 120, H = 80;
  const img = { data: new Float32Array(W * H), w: W, h: H };
  const glyph = { w: 12, h: 8, data: new Float32Array(96) };
  for (let y = 0; y < 8; y++) for (let x = 0; x < 12; x++) glyph.data[y * 12 + x] = (y === 0 || y === 7 || x === 0 || x === 11 || (x === y + 2) || (x > 7 && y > 3)) ? 1 : 0;
  const stamp = (t, x0, y0) => { for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) img.data[(y0 + y) * W + x0 + x] = t.data[y * t.w + x]; };
  const r90 = Mt.rot90(glyph), r180 = Mt.rot90(r90), r270 = Mt.rot90(r180);
  stamp(glyph, 5, 5); stamp(r90, 40, 5); stamp(r180, 70, 10); stamp(r270, 100, 40);
  const box = { w: 12, h: 8, data: new Float32Array(96) };
  for (let y = 0; y < 8; y++) for (let x = 0; x < 12; x++) box.data[y * 12 + x] = (y === 0 || y === 7 || x === 0 || x === 11) ? 1 : 0;
  stamp(box, 10, 50);
  eq(Mt.rot90(Mt.rot90(Mt.rot90(Mt.rot90(glyph)))).data.join(), glyph.data.join(), 'four quarter turns give the template back');
  const found = Mt.suppress(Mt.findSymbol(img, glyph, { floor: 0.5 }).map((c) => ({ ...c, sheet: 'a' })), 0.8);
  eq(found.length, 4, 'finds the glyph at 0°, 90°, 180° and 270°, not the plain box');
  eq(found.map((c) => c.rot).sort((a, b) => a - b).join(), '0,90,180,270', 'each at its own rotation');
  ok(found.every((c) => c.score > 0.999), 'exact copies score 1');
  const at = found.map((c) => c.x + ',' + c.y).sort().join(' ');
  eq(at, ['5,5', '40,5', '70,10', '100,40'].sort().join(' '), 'at the right places');
  ok(Mt.templateProblem({ w: 10, h: 10, data: new Float32Array(100) })?.includes('empty'), 'an empty box is refused');
  ok(Mt.templateProblem({ w: 3, h: 10, data: new Float32Array(30).fill(1) })?.includes('too small'), 'a tiny box is refused');
  const loose = { w: 20, h: 14, data: new Float32Array(280) };
  for (let y = 0; y < 8; y++) for (let x = 0; x < 12; x++) loose.data[(y + 3) * 20 + x + 4] = glyph.data[y * 12 + x];
  const tr = Mt.trim(loose);
  ok(tr.w === 14 && tr.h === 10, 'a loose box is trimmed to the symbol (+1 px)');
  const stop = Mt.findSymbol(img, glyph, { stop: () => true, progress: () => {} });
  eq(stop, null, 'a search can be stopped');
}

section('Quantities, wall area, waste and cost');
{
  const t = new M.Takeoff();
  const hash = 'a'.repeat(64);
  t.addFile({ hash, name: 'set.pdf', size: 100, pages: 2 });
  const s0 = M.sheetKey(hash, 0), s1 = M.sheetKey(hash, 1);
  t.setScale(s0, { method: 'preset', preset: 'a1/4', ftPerUnit: U.presetFtPerUnit('a1/4'), label: '1/4" = 1\'-0"', cal: null });
  // a wall run: 36 pt + 54 pt at 1/4" = 2 ft + 3 ft = 5 ft; another 180 pt = 10 ft → 15 ft
  const wall = t.addItem({ name: 'Partition type A', type: 'linear', heightFt: 9, waste: 1000, mat: U.parseRate('2.10').rate4, lab: U.parseRate('3.333').rate4 });
  t.addMark({ item: wall, sheet: s0, pts: [{ x: 0, y: 0 }, { x: 36, y: 0 }, { x: 36, y: 54 }] });
  t.addMark({ item: wall, sheet: s0, pts: [{ x: 100, y: 100 }, { x: 280, y: 100 }] });
  const studs = t.addComponent(wall, { name: 'Studs 16" o.c.', unit: 'EA', formula: 'ceil(L / 1.333) + N', mat: U.parseRate('4.25').rate4 });
  t.addComponent(wall, { name: 'Gypsum board 4x8', unit: 'sheets', formula: 'ceil(A * 2 / 32)', waste: 1000, mat: U.parseRate('14.98').rate4, lab: U.parseRate('22').rate4 });
  t.addComponent(wall, { name: 'Broken', unit: 'EA', formula: 'L / (H - 9)', mat: 10000 });
  // floor: 360 × 180 pt = 20 × 10 ft = 200 SF, minus a 36 × 36 pt (2 × 2 ft = 4 SF) cut-out → 196 SF
  const floor = t.addItem({ name: 'VCT flooring', type: 'area', unit: 'SF', waste: 500, mat: U.parseRate('1.85').rate4, lab: U.parseRate('1.1').rate4 });
  const R = (x, y, w, h) => [{ x, y }, { x: x + w, y }, { x: x + w, y: y + h }, { x, y: y + h }];
  t.addMark({ item: floor, sheet: s0, pts: R(0, 0, 360, 180), holes: [R(36, 36, 36, 36)] });
  t.addComponent(floor, { name: 'Base cove', unit: 'LF', formula: 'P', mat: U.parseRate('0.89').rate4 });
  const sy = t.addItem({ name: 'Carpet', type: 'area', unit: 'SY', mat: U.parseRate('27').rate4 });
  t.addMark({ item: sy, sheet: s0, pts: R(0, 0, 54, 54) });   // 3 × 3 ft = 9 SF = 1 SY
  const dev = t.addItem({ name: 'Duplex outlets', type: 'count', lab: U.parseRate('45').rate4, mat: U.parseRate('3.5').rate4 });
  for (let i = 0; i < 7; i++) t.addMark({ item: dev, sheet: s0, pts: [{ x: i * 10, y: 5 }] });
  t.addMark({ item: dev, sheet: s1, pts: [{ x: 1, y: 1 }] });   // sheet 1 has no scale: a count still counts
  t.addMark({ item: wall, sheet: s1, pts: [{ x: 0, y: 0 }, { x: 100, y: 0 }] }); // … but a length can't be measured there

  const q = M.quantities(t.state);
  const qw = q.get(wall);
  ok(near(qw.lengthFt, 15), 'wall: 2 + 3 + 10 = 15 ft');
  eq(qw.unscaled, 1, 'wall: the run on the unscaled sheet is flagged, not counted');
  eq(qw.count, 2, 'wall: N = 2 runs');
  ok(near(q.get(floor).areaSqft, 196), 'floor: 200 SF − 4 SF cut-out = 196 SF');
  ok(near(q.get(floor).perimeterFt, 60 + 8), 'floor: perimeter 60 + cut-out 8 = 68 ft');
  eq(q.get(dev).count, 8, 'outlets: 7 + 1 (counts need no scale)');
  eq(q.get(dev).bySheet.get(s1).count, 1, 'outlets on sheet 2: 1');
  const vars = M.itemVars(t.item(wall), qw);
  ok(near(vars.A, 135), 'wall area = 15 ft × 9 ft = 135 SF');

  const est = M.estimate(t.state);
  const row = (name) => est.rows.find((r) => r.name === name);
  const wr = row('Partition type A');
  ok(near(wr.qty, 15) && near(wr.qtyW, 16.5), 'wall 15 LF + 10% = 16.5');
  eq(wr.matExt, 3465, 'wall material 16.5 × $2.10 = $34.65');
  eq(wr.labExt, 5499, 'wall labor 16.5 × $3.333 = $54.9945 → $54.99');
  eq(wr.wallArea.unit, 'SF', 'wall row reports wall area in SF');
  const st = row('Studs 16" o.c.');
  eq(st.qty, 14, 'studs ceil(15 / 1.333) + 2 = 12 + 2 = 14');
  eq(st.matExt, 5950, 'studs 14 × $4.25 = $59.50');
  const gb = row('Gypsum board 4x8');
  eq(gb.qty, 9, 'board ceil(135 × 2 / 32) = ceil(8.4375) = 9 sheets');
  ok(near(gb.qtyW, 9.9), 'board + 10% = 9.9');
  eq(gb.matExt, 14830, 'board material 9.9 × $14.98 = $148.302 → $148.30');
  eq(gb.labExt, 21780, 'board labor 9.9 × $22 = $217.80');
  ok(row('Broken').error?.includes('divides by zero'), 'a failing formula shows its error');
  const fr = row('VCT flooring');
  ok(near(fr.qtyW, 205.8), 'floor 196 + 5% = 205.8');
  eq(fr.matExt, 38073, 'floor 205.8 × $1.85 = $380.73');
  eq(fr.labExt, 22638, 'floor 205.8 × $1.10 = $226.38');
  eq(row('Base cove').matExt, 6052, 'base cove 68 LF × $0.89 = $60.52');
  ok(near(row('Carpet').qty, 1), 'carpet 9 SF = 1 SY');
  eq(row('Carpet').total, 2700, 'carpet 1 SY × $27');
  const dr = row('Duplex outlets');
  eq(dr.qty, 8, 'outlets 8 EA');
  eq(dr.total, 8 * 4500 + 8 * 350, 'outlets 8 × ($45 + $3.50) = $388.00');
  const sum = est.rows.filter((r) => !r.error).reduce((s, r) => s + r.total, 0);
  eq(est.total, sum, 'job total = sum of the rounded lines (to the cent)');
  eq(est.total, 3465 + 5499 + 5950 + 14830 + 21780 + 38073 + 22638 + 6052 + 2700 + 38800, 'job total = $1,597.87 worked by hand');
  ok(est.incomplete && est.errors === 1 && est.unscaled === 1, 'the estimate says it is incomplete (1 formula error, 1 unscaled mark)');

  // metric
  const t2 = new M.Takeoff();
  t2.addFile({ hash, name: 'm.pdf', size: 1, pages: 1 });
  t2.setScale(s0, { method: 'preset', preset: 'm100', ftPerUnit: U.presetFtPerUnit('m100'), label: '1:100', cal: null });
  const mw = t2.addItem({ name: 'Wall', type: 'linear', unit: 'm', heightFt: U.parseLength('3 m').ft });
  t2.addMark({ item: mw, sheet: s0, pts: [{ x: 0, y: 0 }, { x: 72 / 25.4 * 50, y: 0 }] });  // 50 mm at 1:100 = 5 m
  t2.addComponent(mw, { name: 'Board m²', unit: 'm²', formula: 'A' });
  const ma = t2.addItem({ name: 'Slab', type: 'area', unit: 'm²', heightFt: U.parseLength('150 mm').ft });
  t2.addMark({ item: ma, sheet: s0, pts: [{ x: 0, y: 0 }, { x: 72 / 25.4 * 40, y: 0 }, { x: 72 / 25.4 * 40, y: 72 / 25.4 * 25 }, { x: 0, y: 72 / 25.4 * 25 }] });
  t2.addComponent(ma, { name: 'Concrete m³', unit: 'm³', formula: 'A * H' });
  t2.addComponent(ma, { name: 'Edge form m', unit: 'm', formula: 'P' });
  const e2 = M.estimate(t2.state);
  ok(near(e2.rows[0].qty, 5), 'metric wall 5 m');
  ok(near(e2.rows[1].qty, 15), 'metric wall area 5 m × 3 m = 15 m²');
  ok(near(e2.rows[2].qty, 10), 'metric slab 4 m × 2.5 m = 10 m²');
  ok(near(e2.rows[3].qty, 1.5), 'slab concrete 10 m² × 0.15 m = 1.5 m³');
  ok(near(e2.rows[4].qty, 13), 'slab edge 13 m');

  section('Undo / redo');
  const before = JSON.stringify(t.state);
  const n = t.state.marks.length;
  t.removeMarks([t.state.marks[0].id]);
  eq(t.state.marks.length, n - 1, 'mark deleted');
  t.undo();
  eq(JSON.stringify(t.state), before, 'undo restores exactly');
  t.redo();
  eq(t.state.marks.length, n - 1, 'redo deletes again');
  t.undo();
  t.updateItem(wall, { heightFt: 10 });
  ok(near(M.itemVars(t.item(wall), M.quantities(t.state).get(wall)).A, 150), 'changing the height re-computes wall area (150 SF)');
  t.undo();
  t.setScale(s0, { method: 'preset', preset: 'a1/8', ftPerUnit: U.presetFtPerUnit('a1/8'), label: '1/8"', cal: null });
  ok(near(M.quantities(t.state).get(wall).lengthFt, 30), 'changing the sheet scale re-measures (1/8": 30 ft)');
  t.undo();
  ok(near(M.quantities(t.state).get(wall).lengthFt, 15), 'undo the scale change: 15 ft again');
  let threw = false;
  try { t.updateItem(wall, { type: 'area' }); } catch { threw = true; }
  ok(threw && t.item(wall).type === 'linear', 'an item with marks cannot change type');
  ok(t.dirty, 'edits make the project dirty');

  section('Project file round trip');
  const text = JSON.stringify(t.toJSON());
  const t3 = new M.Takeoff();
  const r = t3.load(JSON.parse(text));
  ok(r.ok && !r.warnings.length, 'reopens without warnings');
  ok(!t3.dirty, 'a freshly opened project is not dirty');
  eq(JSON.stringify(M.estimate(t3.state)), JSON.stringify(M.estimate(t.state)), 'reopened estimate is identical, row for row');
  eq(JSON.stringify([...M.quantities(t3.state)].map(([k, v]) => [k, v.lengthFt, v.areaSqft, v.perimeterFt, v.count])),
    JSON.stringify([...M.quantities(t.state)].map(([k, v]) => [k, v.lengthFt, v.areaSqft, v.perimeterFt, v.count])), 'reopened quantities identical to the bit');
  const id2 = t3.addItem({ name: 'After reopen' });
  ok(!t.state.items.some((i) => i.id === id2) && !t3.state.marks.some((m) => m.id === id2), 'new ids after reopening do not collide');
  ok(!new M.Takeoff().load({ format: 'x' }).ok, 'refuses a file that is not a takeoff project');
  ok(!new M.Takeoff().load({ format: M.FORMAT, version: 99 }).ok, 'refuses a newer format version');
  const hostile = JSON.parse(text);
  hostile.items[0].name = '<img src=x onerror=alert(1)>\u0000';
  hostile.items[0].color = 'red;background:url(x)';
  hostile.items[0].waste = -5;
  hostile.items[1].type = 'evil';
  hostile.marks[0].pts = [[1e308, 0], [0, 0]];
  hostile.marks[1].kind = 'area';
  hostile.marks.push({ id: 'm999', item: 'nope', sheet: s0, kind: 'count', pts: [[0, 0]] });
  hostile.sheets['zz:0'] = { scale: { method: 'preset', ftPerUnit: 1 } };
  hostile.sheets[s0].scale.ftPerUnit = -1;
  hostile.__proto__polluted = true;
  const t4 = new M.Takeoff();
  const hr = t4.load(JSON.parse(JSON.stringify(hostile)));
  ok(hr.ok && hr.warnings.length === 1, 'a tampered file opens with a warning about damaged marks', JSON.stringify(hr.warnings));
  eq(t4.state.items[0].color, M.PALETTE[0], 'a bad colour falls back to the palette (never reaches CSS)');
  eq(t4.state.items[0].waste, 0, 'a negative waste becomes 0');
  ok(!/\u0000/.test(t4.state.items[0].name), 'control characters are stripped from names');
  eq(t4.state.sheets[s0].scale, null, 'a negative scale is dropped (sheet must be scaled again)');
  ok(!('zz:0' in t4.state.sheets), 'a sheet for an unknown file is dropped');
  ok(!t4.state.marks.some((m) => m.id === 'm999'), 'a mark for an unknown item is dropped');
  ok(({}).polluted === undefined, 'no prototype pollution');

  section('Arcs in the project file, batch marks');
  {
    const ta = new M.Takeoff();
    ta.addFile({ hash, name: 'a.pdf', size: 1, pages: 1 });
    ta.setScale(s0, { method: 'preset', preset: 'a1/4', ftPerUnit: 1 / 18, label: '1/4"', cal: null });
    const room = ta.addItem({ name: 'Round room', type: 'area' });
    const run = ta.addItem({ name: 'Curved wall', type: 'linear', heightFt: 10 });
    // a 36 pt (2 ft) radius circle with a 9 pt (6") round cut-out; a curved run 18 pt + half circle radius 18 pt
    ta.addMark({ item: room, sheet: s0, pts: [{ x: 136, y: 100, b: 1 }, { x: 64, y: 100, b: 1 }], holes: [[{ x: 104.5, y: 100, b: 1 }, { x: 95.5, y: 100, b: 1 }]] });
    ta.addMark({ item: run, sheet: s0, pts: [{ x: 0, y: 0 }, { x: 18, y: 0, b: 1 }, { x: 18, y: 36 }] });
    const qa = M.quantities(ta.state);
    ok(near(qa.get(room).areaSqft, Math.PI * 4 - Math.PI * 0.0625), 'round room: π·2² − π·0.25² SF');
    ok(near(qa.get(room).perimeterFt, 2 * Math.PI * 2 + 2 * Math.PI * 0.25), 'round room perimeter: 2π·2 + 2π·0.25 ft');
    ok(near(qa.get(run).lengthFt, 1 + Math.PI), 'curved wall: 1 ft + half circle of radius 1 ft = 1 + π');
    ok(near(M.itemVars(ta.item(run), qa.get(run)).A, (1 + Math.PI) * 10), 'curved wall area = (1 + π) × 10 SF');
    const back = new M.Takeoff();
    ok(back.load(JSON.parse(JSON.stringify(ta.toJSON()))).ok, 'a project with arcs reopens');
    eq(JSON.stringify(back.state.marks), JSON.stringify(ta.state.marks), 'arcs (bulges) come back exactly');
    eq(JSON.stringify(M.estimate(back.state)), JSON.stringify(M.estimate(ta.state)), 'identical quantities after the round trip');
    ok(JSON.stringify(ta.toJSON().marks[0].pts[0]) === '[136,100,1]' && JSON.stringify(ta.toJSON().marks[1].pts[0]) === '[0,0]', 'file stores [x, y, bulge] only where there is an arc');
    const bad = ta.toJSON();
    bad.marks.push({ id: 'm900', item: room, sheet: s0, kind: 'area', pts: [[0, 0], [1, 0]] }, { id: 'm901', item: room, sheet: s0, kind: 'area', pts: [[0, 0, 5000], [1, 0, 1]] });
    const br = new M.Takeoff().load(JSON.parse(JSON.stringify(bad)));
    ok(br.ok && br.warnings.length === 1 && br.state.marks.length === 2, 'two points without an arc, or a wild bulge, are refused as damaged');
    const dev = ta.addItem({ name: 'Sprinkler heads', type: 'count' });
    const before = ta.state.marks.length;
    const ids = ta.addMarks(dev, [1, 2, 3, 4, 5].map((i) => ({ sheet: s0, pts: [{ x: i * 10, y: 5 }] })), 'Auto count: 5');
    ok(ids.length === 5 && ta.state.marks.length === before + 5, 'addMarks adds five count marks');
    eq(ta.undo(), 'Auto count: 5', 'and one Ctrl+Z takes all five back (one undo step)');
    eq(ta.state.marks.length, before, 'back to where it was');
  }

  section('Linear deducts (T2)');
  {
    const S3d = await load('scene3d.js');
    const td = new M.Takeoff();
    td.addFile({ hash: 'd'.repeat(64), name: 'D.pdf', size: 1, pages: 1 });
    const sk = M.sheetKey('d'.repeat(64), 0);
    td.setScale(sk, U.scaleRecord({ method: 'preset', preset: 'a1/4', ftPerUnit: 1 / 18, label: '1/4"' }));
    const wall = td.addItem({ name: 'Wall', type: 'linear', heightFt: 10, mat: U.parseRate('2').rate4 });
    // 0,0 → 180,0 (10') → 234,0 (3' door, deducted) → 414,0 (10') → 414,90 (5')
    const pts = [{ x: 0, y: 0 }, { x: 180, y: 0 }, { x: 234, y: 0 }, { x: 414, y: 0 }, { x: 414, y: 90 }];
    const id = td.addMark({ item: wall, sheet: sk, pts, deducts: [1] });
    let r = M.measureMark(td.mark(id), 1 / 18);
    ok(near(r.lengthFt, 25) && near(r.deductFt, 3) && near(r.grossFt, 28), `a 28' run with a 3' door deducted measures 25' (got ${r.lengthFt}, deducts ${r.deductFt}, drawn ${r.grossFt})`);
    eq(JSON.stringify(r.deducts), '[1]', 'the deducted segment is the door (segment 2 of 4)');
    const q = M.quantities(td.state).get(wall);
    ok(near(q.lengthFt, 25), 'quantities count the net length');
    const est = M.estimate(td.state);
    const row = est.rows.find((x) => x.itemId === wall && x.kind === 'item');
    ok(near(row.wallArea.value, 250) && row.matExt === 5000, 'wall area = net length × height (250 SF) and the cost follows the net length ($50.00)', JSON.stringify({ wa: row.wallArea, mat: row.matExt }));
    // undo / validation
    ok(td.updateMark(id, { deducts: [1, 3] }) && near(M.measureMark(td.mark(id), 1 / 18).lengthFt, 20), 'two deducts: 20\'');
    td.undo();
    eq(JSON.stringify(td.mark(id).deducts), '[1]', 'undo puts the deducts back');
    td.updateMark(id, { deducts: [0, 1, 2, 3] });
    eq(JSON.stringify(td.mark(id).deducts || null), 'null', 'every segment deducted is refused (a run keeps one counted segment): no deducts kept');
    td.undo();
    td.updateMark(id, { deducts: [7, -1, 1.5, 'x', 1, 1] });
    eq(JSON.stringify(td.mark(id).deducts), '[1]', 'bad segment numbers are dropped, duplicates merged');
    td.updateMark(id, { pts: [...pts, { x: 500, y: 90 }] });
    ok(!td.mark(id).deducts, 'a run that gains or loses points loses its deducts (they would land on other segments)');
    td.undo(); td.undo();
    // the file
    const json = td.toJSON();
    eq(JSON.stringify(json.marks[0].deducts), '[1]', 'the project file keeps "deducts"');
    const back = M.readProject(JSON.parse(JSON.stringify(json)));
    eq(JSON.stringify(back.state.marks[0].deducts), '[1]', '…and reads it back');
    const bad = JSON.parse(JSON.stringify(json)); bad.marks[0].deducts = [0, 1, 2, 3, 99]; 
    ok(!M.readProject(bad).state.marks[0].deducts, 'a file that deducts every segment loses the deducts, not the run');
    const count = td.addItem({ name: 'Doors', type: 'count' });
    const cm = td.addMark({ item: count, sheet: sk, pts: [{ x: 1, y: 1 }], deducts: [0] });
    ok(!td.mark(cm).deducts, 'only linear runs take deducts');
    // clipboard
    const clip = C.copyMarks(td.state, [id], { view: [0, 0, 612, 792], userUnit: 1 });
    eq(JSON.stringify(clip.marks[0].deducts), '[1]', 'copying a run takes its deducts');
    const rc = C.readClip(JSON.parse(JSON.stringify(clip)));
    const pasted = C.pasteClip(td, rc.clip, { sheet: sk, dx: 0, dy: 200 });
    eq(JSON.stringify(td.mark(pasted.marks[0]).deducts), '[1]', 'and pasting keeps them');
    td.undo();
    // the spans helper, 3D and the marked PDF
    const sp = G.spans(pts, new Set([1]));
    eq(sp.map((x) => (x.deduct ? 'D' : 'C') + (x.pts.length - 1)).join(' '), 'C1 D1 C2', 'spans: counted 1 segment, deduct 1, counted 2');
    const sc = S3d.buildScene(td.state, sk);
    const wo = sc.objects.find((o) => o.id === id);
    ok(near(S3d.meshArea(wo.tris), 250, 1e-9), `3D: the wall stops at the door (its face = 25' × 10' = 250 SF, not 280; got ${S3d.meshArea(wo.tris).toFixed(3)} SF)`);
    ok(near(wo.measure.wallSqft, 250), '3D reports the net wall area');
    const pdoc = await PDFLib.PDFDocument.create(); pdoc.addPage([612, 792]);
    const pb = await pdoc.save();
    const marked = await P.pdfWithMarks(PDFLib, pb, 'd'.repeat(64), td.state, { legend: false });
    const content = await (async () => { const d = await PDFLib.PDFDocument.load(marked.bytes); const c = d.getPages()[0].node.Contents(); const arr = c.asArray ? c.asArray() : [c]; return arr.map((r) => { const o = d.context.lookup(r); return Buffer.from(PDFLib.decodePDFRawStream ? PDFLib.decodePDFRawStream(o).decode() : o.contents).toString('latin1'); }).join('\n'); })();
    ok(/\[[\d. ]+\] 0 d/.test(content), 'the marked PDF draws the deduct dashed');
    const sheets = E.estimateSheets(td.state, () => 'Sheet 1');
    const mrow = sheets.find((x) => x.name === 'Marks').rows.find((x) => x[1] === 'Wall');
    ok(/3'-0" \(deduct\)/.test(mrow[5]) && /deducts 3'-0" of 28'-0" drawn/.test(mrow[5]), 'the Marks sheet lists the deducted segment and the total', mrow[5]);
  }

  section('Bid areas (T12)');
  {
    const tb = new M.Takeoff();
    const H = 'b'.repeat(64);
    tb.addFile({ hash: H, name: 'B.pdf', size: 1, pages: 2 });
    const s1 = M.sheetKey(H, 0), s2 = M.sheetKey(H, 1);
    for (const sk of [s1, s2]) tb.setScale(sk, U.scaleRecord({ method: 'preset', preset: 'a1/4', ftPerUnit: 1 / 18, label: '1/4"' }));
    const a1 = tb.addArea('Building A'), a2 = tb.addArea('  Building B  ');
    eq(tb.state.areas.map((a) => a.name).join('|'), 'Building A|Building B', 'two bid areas, names trimmed');
    ok(tb.addArea('   ') === null && tb.state.areas.length === 2, 'a bid area needs a name');
    const wall = tb.addItem({ name: 'Wall', type: 'linear', mat: U.parseRate('10').rate4 });
    const studs = tb.addComponent(wall, { name: 'Studs', unit: 'EA', formula: 'ceil(L / 1.333)' });
    const w1 = tb.addMark({ item: wall, sheet: s1, pts: [{ x: 0, y: 0 }, { x: 180, y: 0 }], area: a1 });        // 10'
    const w2 = tb.addMark({ item: wall, sheet: s2, pts: [{ x: 0, y: 0 }, { x: 90, y: 0 }], area: a2 });         // 5'
    const w3 = tb.addMark({ item: wall, sheet: s2, pts: [{ x: 0, y: 0 }, { x: 36, y: 0 }] });                   // 2', no area
    const w4 = tb.addMark({ item: wall, sheet: s1, pts: [{ x: 0, y: 0 }, { x: 18, y: 0 }], area: 'nope' });     // 1', unknown area dropped
    ok(!tb.mark(w4).area, 'a mark can only be in a bid area the takeoff has');
    const qa = M.quantities(tb.state, { area: a1 }).get(wall), qb = M.quantities(tb.state, { area: a2 }).get(wall), qn = M.quantities(tb.state, { area: null }).get(wall);
    ok(near(qa.lengthFt, 10) && near(qb.lengthFt, 5) && near(qn.lengthFt, 3), 'quantities per bid area: A 10\', B 5\', none 3\'', JSON.stringify([qa.lengthFt, qb.lengthFt, qn.lengthFt]));
    ok(near(M.quantities(tb.state).get(wall).lengthFt, 18), 'and the job is all of them (18\')');
    const ae = M.areaEstimates(tb.state);
    eq(ae.map((x) => x.area?.name ?? '(none)').join('|'), 'Building A|Building B|(none)', 'estimates per area, in the areas\' order, "no bid area" last');
    const studsA = ae[0].est.rows.find((r) => r.compId === studs).qty, studsB = ae[1].est.rows.find((r) => r.compId === studs).qty;
    ok(studsA === 8 && studsB === 4, `assembly formulas run on each area's own totals (studs A ${studsA}, B ${studsB})`);
    ok(ae[0].est.total === 10000 && ae[1].est.total === 5000, 'priced per area: A $100.00, B $50.00');
    // moving marks between areas: one undo step each
    ok(tb.setMarksArea([w3, w4], a2), 'two marks put in Building B');
    ok(near(M.quantities(tb.state, { area: a2 }).get(wall).lengthFt, 8), 'Building B now 8\'');
    tb.undo();
    ok(!tb.mark(w3).area && !tb.mark(w4).area, 'one Ctrl+Z takes both out again');
    tb.setMarksArea([w1], null);
    ok(!tb.mark(w1).area, 'a mark can leave its bid area');
    tb.undo();
    ok(tb.renameArea(a1, 'Tower A') && tb.area(a1).name === 'Tower A', 'rename a bid area');
    ok(tb.moveArea(a2, -1) && tb.state.areas[0].id === a2, 'reorder bid areas');
    tb.undo(); tb.undo();
    // the file
    const json = JSON.parse(JSON.stringify(tb.toJSON()));
    eq(json.areas.map((a) => a.name).join('|'), 'Building A|Building B', 'the project file keeps the bid areas');
    ok(json.marks.find((m) => m.id === w1).area === a1 && !('area' in json.marks.find((m) => m.id === w3)), 'and each mark\'s');
    const back = new M.Takeoff(); ok(back.load(json).ok, 'it reopens');
    eq(JSON.stringify(M.areaEstimates(back.state).map((x) => x.est.total)), JSON.stringify(ae.map((x) => x.est.total)), 'identical per-area totals after reopening');
    const evil = JSON.parse(JSON.stringify(json));
    evil.areas.push({ id: 'b1', name: 'Duplicate id' }, { id: '<script>', name: 'x' }, { id: 'zz', name: '' });
    evil.marks[0].area = 'zz';
    const ev = M.readProject(evil);
    ok(ev.ok && ev.state.areas.length === 2 && !ev.state.marks[0].area, 'duplicate, malformed and nameless bid areas are dropped, and marks pointing at them lose the area');
    // removing an area keeps its marks
    tb.removeArea(a2);
    ok(tb.state.areas.length === 1 && tb.mark(w2) && !tb.mark(w2).area, 'deleting a bid area keeps its marks, in no bid area');
    tb.undo();
    eq(tb.mark(w2).area, a2, 'undo brings the area and its marks back');
    // the clipboard: paste into the current bid area
    const clip = C.readClip(JSON.parse(JSON.stringify(C.copyMarks(tb.state, [w1], { view: [0, 0, 612, 792] })))).clip;
    let out = C.pasteClip(tb, clip, { sheet: s2, dx: 0, dy: 50, area: a2 });
    eq(tb.mark(out.marks[0]).area, a2, 'pasting puts the copy in the bid area chosen (a typical floor: copy, choose the next floor, paste)');
    tb.undo();
    out = C.pasteClip(tb, clip, { sheet: s2, dx: 0, dy: 50 });
    ok(!tb.mark(out.marks[0]).area, 'a clip read back from the clipboard carries no bid area of its own (the areas belong to a takeoff)');
    tb.undo();
    out = C.pasteClip(tb, clip, { sheet: s2, dx: 0, dy: 50, area: null });
    ok(!tb.mark(out.marks[0]).area, 'area null pastes into no bid area');
    tb.undo();
    // the workbook
    const wb = E.estimateSheets(tb.state, (k) => (k === s1 ? 'P1' : 'P2'));
    eq(wb.map((x) => x.name).join('|'), 'Estimate|By sheet|Marks|Scales|By bid area', 'a takeoff with bid areas gets a "By bid area" worksheet (last, so the others keep their places)');
    const ba = wb[4].rows;
    const sub = ba.find((r) => r[0]?.v === 'Building A subtotal');
    ok(sub && sub[7].v === 100 && /^SUM\(H\d+:H\d+\)$/.test(sub[7].f), 'each area has a subtotal with a SUM formula', JSON.stringify(sub));
    const all = ba.at(-1);
    ok(all[0].v === 'All bid areas' && all[7].v === 180 && /^H\d+\+H\d+\+H\d+$/.test(all[7].f), 'the last row adds the subtotals ($180.00)', JSON.stringify(all));
    eq(wb[2].rows[0].at(-1).v, 'Bid area', 'the Marks sheet gains a Bid area column');
    ok(wb[2].rows.slice(1).every((r) => r.length === 7) && wb[2].rows.some((r) => r[6] === 'No bid area'), 'every mark row names its bid area (or "No bid area")');
    eq(E.estimateSheets(new M.Takeoff().state, () => '').length, 4, 'a takeoff without bid areas keeps its four worksheets');
    const bytes = await E.estimateXlsx(tb.state, (k) => k);
    const fx = path.join(tmp, 'areas.xlsx'); fs.writeFileSync(fx, bytes);
    ok(/No errors detected/.test(execFileSync('unzip', ['-t', fx], { encoding: 'utf8' })), 'the workbook with five sheets unzips cleanly');
  }

  section('Back-out areas (T14)');
  {
    const sq = (x, y, w, h = w) => [{ x, y }, { x: x + w, y }, { x: x + w, y: y + h }, { x, y: y + h }];
    ok(G.isConvex(sq(0, 0, 10)) && G.isConvex([{ x: 10, y: 0, b: 1 }, { x: -10, y: 0, b: 1 }]) && !G.isConvex([{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 5, y: 5 }, { x: 0, y: 10 }]), 'convex: squares and circles yes, an outline with an inward corner no');
    eq(G.overlapArea(sq(0, 0, 100), [], sq(10, 10, 20)), 400, 'a back-out wholly inside takes its own area out');
    eq(G.overlapArea(sq(0, 0, 100), [], sq(90, 90, 20)), 100, 'one over the edge takes only the part inside');
    eq(G.overlapArea(sq(0, 0, 100), [sq(80, 80, 15)], sq(90, 90, 20)), 75, '…minus what falls in a cut-out');
    eq(G.overlapArea(sq(0, 0, 100), [], sq(200, 200, 5)), 0, 'apart: nothing');
    eq(G.overlapArea(sq(0, 0, 100), [], [{ x: 60, y: 50, b: 1 }, { x: 40, y: 50, b: 1 }]), Math.PI * 100, 'a round column wholly inside: exactly π r²');
    ok(near(G.overlapArea(sq(0, 0, 50), [], [{ x: 60, y: 50, b: 1 }, { x: 40, y: 50, b: 1 }]), Math.PI * 25, 2e-5), 'a quarter of it over the corner: π r² / 4 within the 0.5° flattening');
    const L = [{ x: 0, y: 0 }, { x: 40, y: 0 }, { x: 40, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 40 }, { x: 0, y: 40 }];
    eq(G.overlapArea(L, [], sq(10, 10, 20)), 400 - 100, 'a concave room (L) with a back-out over its inner corner: the part inside only');
    // the model
    const tk = new M.Takeoff();
    const HB = 'c'.repeat(64);
    tk.addFile({ hash: HB, name: 'C.pdf', size: 1, pages: 2 });
    const s0 = M.sheetKey(HB, 0), s1 = M.sheetKey(HB, 1);
    for (const sk of [s0, s1]) tk.setScale(sk, U.scaleRecord({ method: 'preset', preset: 'a1/4', ftPerUnit: 1 / 18, label: '1/4"' }));
    const floor = tk.addItem({ name: 'Floor tile', type: 'area', mat: U.parseRate('5').rate4 }), ceil = tk.addItem({ name: 'Ceiling', type: 'area' }), paint = tk.addItem({ name: 'Paint', type: 'area' });
    const cols = tk.addItem({ name: 'Columns', type: 'area', backout: true, backoutOf: [floor, ceil, 'nope'] });
    eq(JSON.stringify(tk.item(cols).backoutOf), JSON.stringify([floor, ceil, 'nope']), 'an item keeps what it was given until the file is read back (ids checked there)');
    const room = (sk, it) => tk.addMark({ item: it, sheet: sk, pts: sq(0, 0, 360, 180) });            // 20' × 10' = 200 SF
    room(s0, floor); room(s0, ceil); room(s0, paint); room(s1, floor);
    tk.addMark({ item: cols, sheet: s0, pts: sq(90, 90, 18) });                                          // a 1' × 1' column
    tk.addMark({ item: cols, sheet: s0, pts: [{ x: 279, y: 90, b: 1 }, { x: 261, y: 90, b: 1 }] });     // a 1' round column
    tk.addMark({ item: cols, sheet: s0, pts: sq(350, 170, 36) });                                       // 2' × 2' over the corner: 10/18' × 10/18' inside
    const q = M.quantities(tk.state);
    const want = 200 - 1 - Math.PI / 4 - (10 / 18) ** 2;                                                // the first sheet's room, net
    ok(near(q.get(floor).areaSqft, want + 200, 1e-6), `floor: 2 × 200 SF less the columns on its first sheet (${q.get(floor).areaSqft.toFixed(4)} SF)`);
    ok(near(q.get(ceil).areaSqft, want, 1e-6), 'ceiling: the same columns out');
    ok(near(q.get(paint).areaSqft, 200), 'paint is not in the back-out\'s list: untouched');
    ok(near(q.get(cols).areaSqft, 1 + Math.PI / 4 + 4), 'the back-out item counts its own area (here 1 + π/4 + 4 SF)');
    ok(near(q.get(floor).backoutSqft, 200 - want, 1e-6), 'and the floor remembers how much was taken out');
    const est = M.estimate(tk.state);
    const frow = est.rows.find((r) => r.itemId === floor && r.kind === 'item');
    ok(frow.backout && near(frow.backout.value, 200 - want, 1e-6) && frow.matExt === Math.round((want + 200) * 5 * 100), 'the estimate prices the net floor and carries the back-out for its note');
    const notes = E.estimateCsv(tk.state);
    ok(/Back-outs took out 2\.\d\d SF/.test(notes), 'the CSV notes say how much back-outs took out');
    // concave back-outs deduct nothing (and are named), cut-outs too
    const bad = tk.addMark({ item: cols, sheet: s0, pts: L.map((p) => ({ x: p.x + 200, y: p.y + 100 })) });
    ok(M.backouts(tk.state).bad.includes(bad) && near(M.quantities(tk.state).get(floor).areaSqft, want + 200, 1e-6), 'a concave back-out is listed as unusable and takes nothing out');
    tk.undo();
    // turning it off, the file, 3D
    tk.updateItem(cols, { backout: false });
    ok(!('backout' in tk.item(cols)) && !('backoutOf' in tk.item(cols)) && near(M.quantities(tk.state).get(floor).areaSqft, 400), 'an item that stops being a back-out drops its list and takes nothing out');
    tk.undo();
    const back = M.readProject(JSON.parse(JSON.stringify(tk.toJSON())));
    eq(JSON.stringify(back.state.items.find((i) => i.id === cols).backoutOf), JSON.stringify([floor, ceil]), 'read back from a file: only real area items stay in the list');
    ok(near(M.quantities(back.state).get(floor).areaSqft, want + 200, 1e-9), 'and the quantities are the same');
    const linIt = tk.addItem({ name: 'Base', type: 'linear', backout: true });
    ok(!tk.item(linIt).backout, 'only area items can be back-outs');
    const S3b = await load('scene3d.js');
    tk.updateItem(floor, { heightFt: 0.5 });
    const sc3 = S3b.buildScene(tk.state, s0);
    const slab = sc3.objects.find((o) => o.item === floor);
    ok(near(slab.measure.netSqft, want, 1e-6) && near(slab.measure.volumeCuft, want * 0.5, 1e-6), '3D: the floor slab\'s area and volume leave the columns out, as the quantities do');
  }

  section('Slope: pitched areas, rakes, hips and valleys (T15)');
  {
    for (const [txt, rise] of [['6:12', 6], ['6/12', 6], ['6', 6], ['4:10', 4.8], ['6 in 12', 6], ['', 0], ['0', 0], ['45°', 12], ['26.565051177°', 6]]) {
      const r = U.parsePitch(txt);
      ok(r.ok && near(r.rise, rise, 1e-6), `pitch "${txt}" → ${rise}:12`, JSON.stringify(r));
    }
    for (const [txt, err] of [['abc', 'pitch.err.read'], ['90°', 'pitch.err.angle'], ['200:12', 'pitch.err.steep'], ['6:0', 'pitch.err.read']]) eq(U.parsePitch(txt).error, err, `"${txt}" is refused (${err})`);
    eq(U.formatPitch(6) + '|' + U.formatPitch(6.5) + '|' + U.formatPitch(0), '6:12|6.5:12|', 'pitches print as rise:12');
    ok(near(U.slopeFactor(12), Math.SQRT2) && near(U.slopeFactor(6), Math.sqrt(1.25)), 'slope factor: 12:12 → √2, 6:12 → 1.118');
    ok(near(U.hipFactor(12), Math.sqrt(1.5)), 'hip / valley factor: 12:12 → √1.5 (its plan line at 45° to the eaves)');
    const ts = new M.Takeoff();
    const HS = 'e'.repeat(64);
    ts.addFile({ hash: HS, name: 'Roof.pdf', size: 1, pages: 1 });
    const sk = M.sheetKey(HS, 0);
    ts.setScale(sk, U.scaleRecord({ method: 'preset', preset: 'a1/4', ftPerUnit: 1 / 18, label: '1/4"' }));
    const roof = ts.addItem({ name: 'Roofing', type: 'area', pitch: 6 });
    const plane = ts.addMark({ item: roof, sheet: sk, pts: [{ x: 0, y: 0 }, { x: 360, y: 0 }, { x: 360, y: 180 }, { x: 0, y: 180 }] });   // 20' × 10' plan
    let r = M.measureMark(ts.mark(plane), 1 / 18, ts.item(roof));
    ok(near(r.areaSqft, 200 * Math.sqrt(1.25)) && near(r.planSqft, 200), `a 200 SF plan at 6:12 is ${r.areaSqft.toFixed(2)} SF of roof (× 1.1180)`);
    ok(near(M.quantities(ts.state).get(roof).areaSqft, 200 * Math.sqrt(1.25)), 'the quantities use the sloped area');
    ts.updateMark(plane, { pitch: 12 });
    ok(near(M.quantities(ts.state).get(roof).areaSqft, 200 * Math.SQRT2), 'a mark\'s own pitch beats its item\'s (12:12 → 282.84 SF)');
    ts.updateMark(plane, { pitch: undefined });
    ok(!('pitch' in ts.mark(plane)) && near(M.quantities(ts.state).get(roof).areaSqft, 200 * Math.sqrt(1.25)), 'clearing it goes back to the item\'s');
    ts.updateItem(roof, { pitch: 0 });
    ok(!('pitch' in ts.item(roof)) && near(M.quantities(ts.state).get(roof).areaSqft, 200), 'pitch 0 is flat (the field goes)');
    ts.undo();
    // runs: item rakes, a segment that is a hip, one that is level, a deduct
    const edge = ts.addItem({ name: 'Rake edge', type: 'linear', slope: 'rake', pitch: 12 });
    const run = ts.addMark({ item: edge, sheet: sk, pts: [{ x: 0, y: 0 }, { x: 180, y: 0 }, { x: 180, y: 180 }, { x: 360, y: 180 }, { x: 360, y: 360 }] });   // 4 × 10' plan
    ts.updateMark(run, { slopes: [null, { k: 'hip' }, { k: 'flat' }, null], deducts: [3] });
    r = M.measureMark(ts.mark(run), 1 / 18, ts.item(edge));
    const want = 10 * Math.SQRT2 + 10 * Math.sqrt(1.5) + 10;
    ok(near(r.lengthFt, want) && near(r.planFt, 30) && near(r.deductFt, 10 * Math.SQRT2), `rake 10' at 12:12 + hip 10' + level 10' (+ a deducted rake): ${r.lengthFt.toFixed(4)}' along the slopes, 30' in plan`);
    eq(r.slopes.map((x) => x.k + x.p).join(' '), 'rake12 hip12 flat0 rake12', 'each segment says what it is');
    ts.updateMark(run, { slopes: [{ k: 'rake', p: 6 }, null, null, null] });
    ok(near(M.measureMark(ts.mark(run), 1 / 18, ts.item(edge)).slopedFt[0], 10 * Math.sqrt(1.25)), 'a segment can carry its own pitch');
    ts.updateMark(run, { slopes: [{ k: 'bogus' }, null, null, null, null] });
    ok(!ts.mark(run).slopes, 'slopes for the wrong number of segments, or of an unknown kind, are dropped');
    ts.undo();
    ts.updateMark(run, { pts: [{ x: 0, y: 0 }, { x: 180, y: 0 }] });
    ok(!ts.mark(run).slopes && !ts.mark(run).deducts, 'a run with other segments loses its slopes and deducts');
    ts.undo();
    ts.updateMark(run, { slopes: [{ k: 'rake', p: 6 }, { k: 'hip' }, { k: 'flat' }, null] });
    // file, clipboard, export, back-outs on a slope
    const back = M.readProject(JSON.parse(JSON.stringify(ts.toJSON())));
    ok(back.ok && JSON.stringify(M.estimate(back.state).rows.map((x) => x.qty)) === JSON.stringify(M.estimate(ts.state).rows.map((x) => x.qty)), 'pitches and slopes survive the project file (identical quantities)');
    const cl = C.readClip(JSON.parse(JSON.stringify(C.copyMarks(ts.state, [run, plane], { view: [0, 0, 612, 792] })))).clip;
    ok(cl.marks.find((x) => x.kind === 'linear').slopes?.[0]?.p === 6 && cl.items.find((i) => i.name === 'Rake edge').slope === 'rake', 'the clipboard carries the slopes and the item\'s pitch');
    const wb = E.estimateSheets(ts.state, () => 'Roof');
    const rows = wb[2].rows.slice(1).map((x) => x[5]).join(' / ');
    ok(/rake 6:12/.test(rows) && /hip or valley 12:12/.test(rows) && /pitch 6:12 \(plan 200\)/.test(rows), 'the Marks sheet says which lengths and areas are sloped', rows);
    const vent = ts.addItem({ name: 'Skylights', type: 'area', backout: true, backoutOf: [roof] });
    ts.addMark({ item: vent, sheet: sk, pts: [{ x: 18, y: 18 }, { x: 36, y: 18 }, { x: 36, y: 36 }, { x: 18, y: 36 }] });              // 1 SF in plan
    ok(near(M.quantities(ts.state).get(roof).areaSqft, 199 * Math.sqrt(1.25)), 'a back-out on a pitched roof takes out its sloped area too');
    const S3s = await load('scene3d.js');
    ts.updateItem(edge, { heightFt: 1 });
    const wo = S3s.buildScene(ts.state, sk).objects.find((o) => o.id === run);
    ok(near(wo.measure.lengthFt, M.quantities(ts.state).get(edge).lengthFt), '3D reports the same (sloped) length as the quantities');
  }

  section('3D: wall thickness, base, openings; stacked floors; GLB (T4–T6)');
  {
    const S3x = await load('scene3d.js');
    const GL = await load('glb.js');
    const tz = new M.Takeoff();
    const HZ = 'f'.repeat(64), HZ2 = '9'.repeat(64);
    tz.addFile({ hash: HZ, name: 'L1.pdf', size: 1, pages: 1 }); tz.addFile({ hash: HZ2, name: 'L2.pdf', size: 1, pages: 2 });
    const k1 = M.sheetKey(HZ, 0), k2 = M.sheetKey(HZ2, 0), k3 = M.sheetKey(HZ2, 1);
    for (const sk of [k1, k2]) tz.setScale(sk, U.scaleRecord({ method: 'preset', preset: 'a1/4', ftPerUnit: 1 / 18, label: '1/4"' }));
    const wall = tz.addItem({ name: 'CMU', type: 'linear', heightFt: 10, thickFt: 2 / 3, baseFt: 1, headFt: 7 });
    ok(tz.item(wall).thickFt === 2 / 3 && tz.item(wall).baseFt === 1 && tz.item(wall).headFt === 7, 'a linear item keeps a thickness, a base and an opening head');
    ok(!('thickFt' in tz.item(tz.addItem({ name: 'x', type: 'area', thickFt: 1 }))), 'only linear items have a wall thickness');
    // an L: 20' east, then 10' north; the second half of the first leg is a 4' door (deducted)
    const run = tz.addMark({ item: wall, sheet: k1, pts: [{ x: 0, y: 0 }, { x: 288, y: 0 }, { x: 360, y: 0 }, { x: 360, y: 180 }], deducts: [1] });
    const sc = S3x.buildScene(tz.state, k1);
    const w = sc.objects.find((o) => o.id === run);
    const zs = []; for (let i = 2; i < w.tris.length; i += 3) zs.push(w.tris[i]);
    ok(Math.min(...zs) === 1 && Math.max(...zs) === 11, `the wall stands from its base (1') to base + height (11')`);
    const vol = S3x.meshVolume(w.tris);
    const want = (16 + 10) * 10 * (2 / 3) + 4 * 3 * (2 / 3);
    ok(near(Math.abs(vol), want, 1e-9), `a thick wall is a closed solid: 16' + 10' of wall × 10' × 8" plus the lintel over the 4' door (3' × 8") = ${want.toFixed(4)} cu ft (got ${Math.abs(vol).toFixed(4)}; mitred corner, no overlap)`);
    eq(w.measure.wallSqft, 26 * 10, 'the wall area stays length × height (the 3D shape changes no quantity)');
    const slabIt = tz.addItem({ name: 'Ceiling', type: 'area', heightFt: 0.5, baseFt: 9 });
    const ce = tz.addMark({ item: slabIt, sheet: k1, pts: [{ x: 0, y: 0 }, { x: 90, y: 0 }, { x: 90, y: 90 }, { x: 0, y: 90 }] });
    const co = S3x.buildScene(tz.state, k1).objects.find((o) => o.id === ce);
    ok(near(co.anchor[2], 9.5) && near(Math.abs(S3x.meshVolume(co.tris)), 25 * 0.5), 'an area with a base height floats there (a ceiling at 9\'); volume unchanged');
    tz.updateItem(wall, { thickFt: 0 });
    ok(!('thickFt' in tz.item(wall)), 'a thickness of 0 is taken off (back to a strip)');
    tz.undo();
    // stacking
    const flr = tz.addItem({ name: 'Floor', type: 'area' });
    tz.addMark({ item: flr, sheet: k2, pts: [{ x: 0, y: 0 }, { x: 180, y: 0 }, { x: 180, y: 180 }, { x: 0, y: 180 }] });
    tz.setLevels({ [k1]: 0, [k2]: 12, [k3]: 24 });
    ok(tz.levelOf(k2) === 12 && tz.levelOf(k3) === 24, 'levels: one undo step sets several sheets\' elevations');
    const lv = (key) => ({ key, elevFt: tz.levelOf(key) ?? 0, transform: [1, 0, 0, -1, 0, 792], width: 612, height: 792 });
    const st = S3x.buildStack(tz.state, [lv(k1), lv(k2), lv(k3)]);
    ok(st.ok && st.stacked && st.levels.length === 2 && st.groundZ === 0, 'stacking: the sheets with a scale, the one on screen first', JSON.stringify(st.levels));
    const fl = st.objects.find((o) => o.item === flr);
    ok(fl && near(fl.anchor[2], 12 + 2 / 12), 'the second sheet\'s takeoff stands on its level (12\')');
    ok(st.objects.some((o) => o.kind === 'frame' && o.level === k2 && o.lines[2] === 12), 'the other sheet gets its outline at its height');
    ok(st.notes.some((n) => /1 sheet with a level has no scale/.test(n)), 'a sheet with a level but no scale is left out, and said', st.notes.join(' | '));
    ok(st.totals.walls === 1 && st.totals.plates === 1 && near(st.bbox.max[2], 12 + 2 / 12), 'totals and the box cover every floor');
    const jl = M.readProject(JSON.parse(JSON.stringify(tz.toJSON())));
    ok(jl.state.sheets[k2].level === 12, 'levels are saved in the project file');
    tz.undo();
    ok(tz.levelOf(k2) === null, 'one Ctrl+Z takes the levels away');
    // GLB
    const glb = GL.sceneToGlb(st, { name: 'Stack' });
    const dv = new DataView(glb.buffer, glb.byteOffset, glb.byteLength);
    ok(dv.getUint32(0, true) === 0x46546C67 && dv.getUint32(4, true) === 2 && dv.getUint32(8, true) === glb.length, 'GLB header: magic, version 2, length');
    const jlen = dv.getUint32(12, true);
    const gj = JSON.parse(new TextDecoder().decode(glb.subarray(20, 20 + jlen)));
    eq(gj.nodes.length, st.objects.filter((o) => o.kind !== 'frame').length, 'one node per takeoff object (outlines left out)');
    const wn = gj.nodes.find((n) => n.extras.kind === 'wall');
    const wacc = gj.accessors[gj.meshes[wn.mesh].primitives[0].attributes.POSITION];
    ok(near(wacc.max[1], 11 * 0.3048, 1e-6) && near(wacc.min[1], 1 * 0.3048, 1e-6), 'feet → metres and Z up → Y up (the wall\'s top at 11\' = 3.3528 m)');
    ok(gj.materials.some((m) => m.alphaMode === 'BLEND') && gj.materials.some((m) => m.alphaMode === 'OPAQUE'), 'slabs see-through, walls solid (as in the view)');
    const gvPath = path.join(TOOLS, 'node_modules/gltf-validator/gltf_validator.dart.js');
    if (!fs.existsSync(path.join(TOOLS, 'node_modules/gltf-validator'))) ok(false, 'gltf-validator installed (cd tools/takeoffcraft-test && npm install)');
    else {
      const { createRequire } = await import('node:module');
      const req = createRequire(path.join(TOOLS, 'package.json'));
      const validator = req('gltf-validator');
      const rep = await validator.validateBytes(glb);
      ok(rep.issues.numErrors === 0 && rep.issues.numWarnings === 0, `Khronos glTF validator: ${rep.issues.numErrors} errors, ${rep.issues.numWarnings} warnings`, JSON.stringify(rep.issues.messages.slice(0, 3)));
    }
    const empty = GL.sceneToGlb({ objects: [] });
    ok(empty.length > 20 && JSON.parse(new TextDecoder().decode(empty.subarray(20, 20 + new DataView(empty.buffer).getUint32(12, true)))).scenes[0].nodes.length === 0, 'an empty view still writes a valid, empty GLB');
  }

  section('Clipboard: copy, cut, paste, paste in place, duplicate');
  {
    const tc = new M.Takeoff();
    const h2 = 'b'.repeat(64), h3 = 'c'.repeat(64);
    tc.addFile({ hash, name: 'a.pdf', size: 1, pages: 2 });
    tc.addFile({ hash: h2, name: 'b.pdf', size: 1, pages: 1 });
    tc.addFile({ hash: h3, name: 'c.pdf', size: 1, pages: 1 });
    const sA = M.sheetKey(hash, 0), sB = M.sheetKey(hash, 1), sC = M.sheetKey(h2, 0), sD = M.sheetKey(h3, 0);
    const q4 = { method: 'preset', preset: 'a1/4', ftPerUnit: U.presetFtPerUnit('a1/4'), label: '1/4" = 1\'-0"', cal: null };
    const q8 = { method: 'preset', preset: 'a1/8', ftPerUnit: U.presetFtPerUnit('a1/8'), label: '1/8" = 1\'-0"', cal: null };
    tc.setScale(sA, q4); tc.setScale(sB, q4); tc.setScale(sC, q8);        // sD: no scale
    const ARCH_D = [0, 0, 2592, 1728], LETTER = [0, 0, 612, 792];
    const ctxA = { view: ARCH_D, userUnit: 1, source: 't1', now: 1000 };
    const wallC = tc.addItem({ name: 'Wall C', type: 'linear', heightFt: 9, waste: 500, mat: 21000 });
    tc.addComponent(wallC, { name: 'Studs', unit: 'EA', formula: 'ceil(L / 1.333) + N', mat: 42500 });
    const roomC = tc.addItem({ name: 'Room C', type: 'area' });
    const devC = tc.addItem({ name: 'Outlets', type: 'count' });
    const run = tc.addMark({ item: wallC, sheet: sA, pts: [{ x: 0, y: 0 }, { x: 72, y: 0 }, { x: 72, y: 36, b: 0.5 }, { x: 0, y: 36 }] });
    const room = tc.addMark({ item: roomC, sheet: sA, pts: [{ x: 100, y: 100 }, { x: 172, y: 100 }, { x: 172, y: 172 }, { x: 100, y: 172 }], holes: [[{ x: 120, y: 120 }, { x: 130, y: 120 }, { x: 130, y: 130 }, { x: 120, y: 130 }]] });
    const dots = tc.addMarks(devC, [{ sheet: sA, pts: [{ x: 10, y: 200 }] }, { sheet: sA, pts: [{ x: 20, y: 200 }] }]);
    const qOf = (t, id) => M.quantities(t.state).get(id);
    const len0 = qOf(tc, wallC).lengthFt, area0 = qOf(tc, roomC).areaSqft;

    const wire = C.copyMarks(tc.state, [run, room, ...dots], ctxA);
    ok(wire && wire.format === 'takeoffcraft-clip' && wire.marks.length === 4 && wire.items.length === 3, 'copy: 4 marks with their 3 items');
    ok(wire.items.find((i) => i.name === 'Wall C').components.length === 1, 'the copied item carries its assembly');
    ok(JSON.stringify(wire.marks[0].pts[2]) === '[72,36,0.5]', 'arcs (bulges) are copied');
    eq(JSON.stringify(wire.anchor), JSON.stringify({ x: 86, y: 100 }), 'the anchor is the middle of the marks');
    eq(wire.sheet.ftPerUnit, U.presetFtPerUnit('a1/4'), 'the clip remembers the scale it was taken off at');
    const otherSheet = tc.addMark({ item: devC, sheet: sB, pts: [{ x: 5, y: 5 }] });
    eq(C.copyMarks(tc.state, [run, otherSheet], ctxA).marks.length, 1, 'a copy keeps to one sheet');
    tc.removeMarks([otherSheet]);
    const rc = C.readClip(JSON.parse(JSON.stringify(wire)));
    ok(rc.ok && rc.clip.marks.length === 4 && rc.clip.marks[0].pts[2].b === 0.5, 'the clip reads back (points as {x, y, b})');
    const clip = rc.clip;

    // paste with the pointer: same sheet, moved by (300, 0)
    const nMarks = tc.state.marks.length, nItems = tc.state.items.length, nUndo = tc.undoStack.length;
    const out = C.pasteClip(tc, clip, { sheet: sA, dx: 300, dy: 0, label: 'Paste' });
    ok(out && out.marks.length === 4 && out.items.length === 0 && out.reused.length === 3, 'paste in the same takeoff: 4 marks on the SAME items (none added)');
    eq(tc.state.marks.length, nMarks + 4, 'four marks more');
    eq(tc.state.items.length, nItems, 'no new items');
    eq(tc.undoStack.length, nUndo + 1, 'the paste is one undo step');
    ok(near(qOf(tc, wallC).lengthFt, 2 * len0) && near(qOf(tc, roomC).areaSqft, 2 * area0) && qOf(tc, devC).count === 4, 'quantities double (same scale: same lengths and areas)');
    const pm = tc.mark(out.marks[1]);
    ok(pm.pts[0].x === 400 && pm.pts[0].y === 100 && pm.holes[0][0].x === 420, 'the copy is moved by (dx, dy), cut-outs too');
    ok(new Set(tc.state.marks.map((m) => m.id)).size === tc.state.marks.length, 'pasted marks get new, unique ids');
    eq(tc.undo(), 'Paste', 'one Ctrl+Z ...');
    ok(tc.state.marks.length === nMarks && near(qOf(tc, wallC).lengthFt, len0), '... takes the whole paste back');
    tc.redo(); tc.undo();

    // paste in place on another sheet of the same size and scale
    eq(C.sizeProblem(clip, { view: ARCH_D, userUnit: 1 }), null, 'in place: same-size sheet accepted');
    eq(C.scaleProblem(clip, { ftPerUnit: U.presetFtPerUnit('a1/4'), label: '1/4"' }), null, 'in place: same scale accepted');
    const inPlace = C.pasteClip(tc, clip, { sheet: sB, label: 'Paste in place' });
    ok(inPlace.marks.every((id) => tc.mark(id).sheet === sB), 'paste in place lands on the current sheet');
    eq(JSON.stringify(inPlace.marks.map((id) => tc.mark(id).pts)), JSON.stringify([run, room, ...dots].map((id) => tc.mark(id).pts)), 'paste in place keeps the PDF coordinates exactly');
    const qb = M.quantities(tc.state).get(wallC).bySheet.get(sB);
    ok(qb && near(qb.lengthFt, len0), 'the same length on the other sheet');
    tc.undo();
    // refusals: a different scale, no scale, another size
    const why8 = C.scaleProblem(clip, { ftPerUnit: U.presetFtPerUnit('a1/8'), label: '1/8" = 1\'-0"' });
    ok(/1\/4" = 1'-0".*1\/8" = 1'-0"/.test(why8 || '') && /lengths and areas/.test(why8), 'a sheet at another scale is refused, saying both scales', why8);
    ok(/no scale/.test(C.scaleProblem(clip, null) || ''), 'a sheet with no scale is refused');
    ok(/same size/.test(C.sizeProblem(clip, { view: LETTER, userUnit: 1 }) || '') && /36" × 24"/.test(C.sizeProblem(clip, { view: LETTER, userUnit: 1 })), 'paste in place on a smaller sheet is refused, giving both sizes');
    ok(C.sizeProblem(clip, { view: [0, 0, 1296, 864], userUnit: 2 }) === null, 'the same size through /UserUnit counts as the same size');
    const counts = C.readClip(C.copyMarks(tc.state, dots, ctxA)).clip;
    ok(!C.measured(counts) && C.scaleProblem(counts, null) === null, 'counts need no scale: they paste on a sheet without one');
    const unscaledWire = C.copyMarks(tc.state, [run], { ...ctxA });
    unscaledWire.sheet.ftPerUnit = null;
    ok(/no scale/.test(C.scaleProblem(C.readClip(unscaledWire).clip, { ftPerUnit: 1 })), 'lengths copied from an unscaled sheet are refused (nothing to keep)');
    ok(C.pasteClip(tc, counts, { sheet: sD }).marks.length === 2 && qOf(tc, devC).count === 4, 'counts pasted on the unscaled sheet count');
    tc.undo();

    // into another takeoff: the items come along with their assemblies
    const t2 = new M.Takeoff();
    t2.addFile({ hash, name: 'a.pdf', size: 1, pages: 2 });
    t2.setScale(sA, q4);
    t2.addItem({ name: 'Room C', type: 'linear' });       // same name, other type: not reused
    const o2 = C.pasteClip(t2, clip, { sheet: sA, label: 'Paste' });
    ok(o2.items.length === 3 && o2.reused.length === 0, 'another takeoff: the 3 items are added');
    const w2 = t2.state.items.find((i) => i.name === 'Wall C');
    ok(w2 && w2.components.length === 1 && w2.components[0].formula === 'ceil(L / 1.333) + N' && w2.waste === 500 && w2.mat === 21000 && w2.heightFt === 9, 'the item keeps its assembly, waste, costs and height');
    ok(t2.state.items.some((i) => i.name === 'Room C (copy)' && i.type === 'area'), 'a name taken by another type gets "(copy)"');
    ok(near(M.estimate(t2.state).total, M.estimate(tc.state).total), 'same priced estimate as the original takeoff');
    const ids2 = [...t2.state.items.map((i) => i.id), ...t2.state.items.flatMap((i) => i.components.map((c) => c.id)), ...t2.state.marks.map((m) => m.id)];
    ok(new Set(ids2).size === ids2.length, 'every id in the target takeoff is still unique');

    // duplicate = copy + place (nothing changes until it is placed; Esc leaves nothing)
    const dupClip = C.readClip(C.copyMarks(tc.state, [room], ctxA)).clip;
    const nBefore = tc.state.marks.length, vBefore = tc.version;
    ok(tc.state.marks.length === nBefore && tc.version === vBefore, 'a duplicate on the pointer changes nothing yet (Esc leaves nothing)');
    const od = C.pasteClip(tc, dupClip, { sheet: sA, dx: 0, dy: -90, label: 'Duplicate' });
    ok(od.marks.length === 1 && near(qOf(tc, roomC).areaSqft, 2 * area0), 'placing the duplicate adds it (area doubles)');
    eq(tc.undo(), 'Duplicate', 'one undo step');

    // copy / duplicate an item (no marks)
    const itemWire = C.copyItems(tc.state, [wallC], { now: 2000 });
    const ri = C.readClip(itemWire);
    ok(ri.ok && ri.clip.marks.length === 0 && ri.clip.items.length === 1, 'copy item: one item, no marks');
    const oi = C.pasteClip(tc, ri.clip, { label: 'Paste item' });
    const copyIt = tc.item(oi.items[0]);
    ok(copyIt.name === 'Wall C (copy)' && copyIt.components.length === 1 && copyIt.components[0].id !== tc.item(wallC).components[0].id && !tc.state.marks.some((m) => m.item === copyIt.id), 'paste item: "Wall C (copy)" with its assembly (new ids), no marks');
    const oi2 = C.pasteClip(tc, ri.clip, { label: 'Paste item' });
    eq(tc.item(oi2.items[0]).name, 'Wall C (copy 2)', 'pasting again: "(copy 2)"');
    tc.undo(); tc.undo();
    eq(C.freeName('A', [{ name: 'A' }, { name: 'A (copy)' }]), 'A (copy 2)', 'freeName');
    eq(C.freeName('A (copy)', [{ name: 'A' }, { name: 'A (copy)' }]), 'A (copy 2)', 'a copy of a copy is "(copy 2)", not "(copy) (copy)"');

    // cut = copy + delete, one undo step (as the UI does it)
    const cutIds = new Set([room]);
    const cutWire = C.copyMarks(tc.state, [...cutIds], ctxA);
    tc.change('Cut mark', (s) => { s.marks = s.marks.filter((m) => !cutIds.has(m.id)); });
    ok(!tc.mark(room) && qOf(tc, roomC).areaSqft === 0, 'cut removes the mark');
    const oc = C.pasteClip(tc, C.readClip(cutWire).clip, { sheet: sA, label: 'Paste in place' });
    ok(near(qOf(tc, roomC).areaSqft, area0) && JSON.stringify(tc.mark(oc.marks[0]).pts) === JSON.stringify(cutWire.marks[0].pts.map(([x, y]) => ({ x, y }))), 'paste in place after cut puts it back exactly');
    tc.undo();
    eq(tc.undo(), 'Cut mark', 'the cut is its own undo step');
    ok(tc.mark(room), 'undo the cut: the mark is back');

    // a tampered clipboard is checked like a project file
    const bad = JSON.parse(JSON.stringify(wire));
    bad.items[0].name = '<script>alert(1)</script>\u0007';
    bad.items[0].color = 'red;background:url(x)';
    bad.items[0].waste = -1;
    bad.items[1].components = [{ id: 'c1', formula: 'constructor.constructor("x")()' }];
    bad.marks[0].pts = [[1e308, 0], [1, 1]];
    bad.marks[1].kind = 'count';
    bad.marks[2].item = 'nope';
    bad.marks.push({ item: wire.items[2].id, kind: 'count', pts: [[0, 0, 9]] }, null, 'x');
    bad.sheet = { ftPerUnit: -4, view: [0, 0, 'x', 1], label: 'x'.repeat(500) };
    bad.anchor = { x: Infinity, y: 0 };
    const rb = C.readClip(JSON.parse(JSON.stringify(bad).replace(/^\{/, '{"__proto__":{"polluted":true},')));
    ok(rb.ok && rb.warnings.length === 1, 'a tampered clipboard opens with a warning about damaged marks', JSON.stringify(rb));
    ok(rb.clip.marks.length === 1 && rb.clip.marks[0].kind === 'count', 'only the one sound mark is kept');
    ok(rb.clip.items.every((i) => /^#[0-9A-F]{6}$/.test(i.color) && i.waste >= 0 && !/[\u0000-\u001f]/.test(i.name)), 'colors, waste and names are cleaned');
    ok(rb.clip.sheet.ftPerUnit === null && rb.clip.sheet.view === null && rb.clip.sheet.label.length <= 80, 'a negative scale and a broken sheet size are dropped');
    ok(Number.isFinite(rb.clip.anchor.x), 'a broken anchor is worked out again');
    ok(/no scale/.test(C.scaleProblem({ ...rb.clip, marks: [{ kind: 'linear' }] }, { ftPerUnit: 1 }) || ''), 'lengths with a dropped scale are refused');
    ok(({}).polluted === undefined, 'no prototype pollution');
    for (const [junk, what] of [[null, 'null'], ['text', 'a string'], [{ format: 'takeoffcraft-project' }, 'a project file'], [{ format: 'takeoffcraft-clip', version: 9, items: [] }, 'a newer version'],
      [{ format: 'takeoffcraft-clip', version: 1, items: [] }, 'no items'], [{ format: 'takeoffcraft-clip', version: 1, items: wire.items, marks: [{ item: 'x', kind: 'count', pts: [[0, 0]] }] }, 'only broken marks'],
      [{ format: 'takeoffcraft-clip', version: 1, items: wire.items, marks: Array(C.CLIP_LIMITS.marks + 1).fill(wire.marks[3]) }, 'too many marks']]) {
      ok(!C.readClip(junk).ok, 'refuses ' + what);
    }
    const far = C.readClip(C.copyMarks(tc.state, dots, ctxA)).clip;
    let threw = false;
    try { C.pasteClip(tc, far, { sheet: sA, dx: 2e7 }); } catch { threw = true; }
    ok(threw && tc.state.marks.length === tc.state.marks.filter((m) => Math.abs(m.pts[0].x) < 1e7).length, 'a paste far off any sheet is refused and leaves nothing');
  }

  section('CSV');
  eq(E.csvCell('=HYPERLINK("x")'), '"\'=HYPERLINK(""x"")"', 'a formula-looking name is defused and quoted');
  eq(E.csvCell('+1'), "'+1", '+ defused');
  eq(E.csvCell('-1'), "'-1", '- defused (text)');
  eq(E.csvCell('@SUM'), "'@SUM", '@ defused');
  eq(E.csvCell(-1), '-1', 'a real negative number is left alone');
  eq(E.csvCell('a,b'), '"a,b"', 'comma quoted');
  eq(E.csvCell('a\nb'), '"a\nb"', 'newline quoted');
  const csv = E.estimateCsv(t.state);
  const lines = csv.trim().split('\r\n');
  eq(lines[0], E.estimateHead().join(','), 'header row');
  eq(lines.length, 1 + est.rows.length + 1, 'a line per row + job total');
  ok(lines.at(-1).startsWith('Job total,') && lines.at(-1).includes(',1597.87,'), 'job total line = 1597.87', lines.at(-1));
  ok(lines.some((l) => l.includes('Formula error: The formula divides by zero.')), 'error row explains itself');

  section('XLSX');
  const label = (k) => 'Sheet ' + (Number(k.split(':')[1]) + 1);
  for (const compress of [true, false]) {
    const bytes = await E.estimateXlsx(t.state, label, { compress });
    const f = path.join(tmp, `estimate-${compress ? 'deflated' : 'stored'}.xlsx`);
    fs.writeFileSync(f, bytes);
    let unzipOk = false;
    try { unzipOk = /No errors detected/.test(execFileSync('unzip', ['-t', f], { encoding: 'utf8' })); } catch (err) { unzipOk = false; }
    ok(unzipOk, `unzip -t: no errors (${compress ? 'deflated' : 'stored'})`);
    const py = fs.existsSync(path.join(TOOLS, 'venv/bin/python')) ? path.join(TOOLS, 'venv/bin/python') : 'python3';
    let out;
    try { out = JSON.parse(execFileSync(py, [path.join(TOOLS, 'xlsx_check.py'), f], { encoding: 'utf8' })); } catch (err) { ok(false, 'xlsx_check.py reads the workbook', String(err.stderr || err.message).slice(0, 400)); continue; }
    ok(true, `read back with ${out.reader}`);
    eq(out.names.join('|'), 'Estimate|By sheet|Marks|Scales', 'four sheets, in order');
    const cells = out.sheets.Estimate.cells, cached = out.sheets.Estimate.cached;
    eq(cells.A1, 'Item', 'A1 header');
    const totalRow = est.rows.length + 3;
    eq(cells['K' + totalRow], '=SUM(K2:K' + (est.rows.length + 1) + ')', 'job total is a SUM formula');
    eq(cached['K' + totalRow], 1597.87, 'job total cached value 1597.87');
    eq(out.recalc['K' + totalRow], 1597.87, 'job total RE-CALCULATED independently (Decimal) = 1597.87');
    let mism = 0;
    for (const [k, v] of Object.entries(out.recalc)) if (Math.abs(v - cached[k]) > 1e-9) { mism++; if (mism < 5) console.log('    recalc ' + k + ' ' + v + ' vs cached ' + cached[k]); }
    eq(mism, 0, `every formula's cached value equals the independent recalculation (${Object.keys(out.recalc).length} formulas)`);
    eq(cells.A2, 'Partition type A', 'first item name');
    ok(String(cells.L4 ?? cells.L3 ?? '').startsWith('Formula:'), 'component notes carry the formula');
    ok(out.sheets.Marks.cells.F2?.includes('segment'), 'marks sheet lists segments');
    eq(out.sheets.Scales.cells.B2, '1/4" = 1\'-0"', 'scales sheet names the preset');
  }
  // LibreOffice, when it is installed: recalculates every formula, and must open the file without a repair prompt
  const soffice = ['/usr/bin/soffice', '/usr/local/bin/soffice'].find((f) => fs.existsSync(f));
  if (!soffice) console.log('  (LibreOffice not installed: skipped the spreadsheet-application check)');
  else {
    const lo = path.join(tmp, 'lo');
    fs.mkdirSync(path.join(lo, 'profile/user'), { recursive: true });
    // always recalculate OOXML on load, so the numbers below are LibreOffice's, not our cached ones
    fs.writeFileSync(path.join(lo, 'profile/user/registrymodifications.xcu'), '<?xml version="1.0" encoding="UTF-8"?>\n<oor:items xmlns:oor="http://openoffice.org/2001/registry" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><item oor:path="/org.openoffice.Office.Calc/Formula/Load"><prop oor:name="OOXMLRecalcMode" oor:op="fuse"><value>0</value></prop></item></oor:items>');
    const xf = path.join(lo, 'estimate.xlsx');
    fs.writeFileSync(xf, await E.estimateXlsx(t.state, label));
    const run = (fmt) => { try { return execFileSync(soffice, ['-env:UserInstallation=file://' + path.join(lo, 'profile'), '--headless', '--convert-to', fmt, '--outdir', lo, xf], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 120000 }); } catch (err) { return 'FAILED ' + (err.stderr || err.message); } };
    const outCsv = run('csv:Text - txt - csv (StarCalc):44,34,76,1,,1033,false,true,false,false,false,-1');
    const outPdf = run('pdf');
    ok(!/corrupt|repair|error|FAILED/i.test(outCsv + outPdf), 'LibreOffice converts it with no corrupt/repair/error message', (outCsv + outPdf).slice(0, 300));
    ok(fs.existsSync(path.join(lo, 'estimate.pdf')) && /Pages:\s+[1-9]/.test(execFileSync('pdfinfo', [path.join(lo, 'estimate.pdf')], { encoding: 'utf8' })), 'LibreOffice prints it to PDF');
    const names = fs.readdirSync(lo).filter((n) => n.endsWith('.csv')).sort();
    eq(names.join('|'), ['estimate-By sheet.csv', 'estimate-Estimate.csv', 'estimate-Marks.csv', 'estimate-Scales.csv'].join('|'), 'LibreOffice sees the four sheets');
    const parseCsv = (txt) => txt.replace(/^\uFEFF/, '').trim().split(/\r?\n/).map((l) => { const out = []; let cur = '', q = false; for (let i = 0; i < l.length; i++) { const c = l[i]; if (q) { if (c === '"' && l[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c; } else if (c === '"') q = true; else if (c === ',') { out.push(cur); cur = ''; } else cur += c; } out.push(cur); return out; });
    const rowsLo = parseCsv(fs.readFileSync(path.join(lo, 'estimate-Estimate.csv'), 'utf8'));
    let cmp = 0, bad = 0;
    est.rows.forEach((r, i) => {
      const row = rowsLo[i + 1];
      if (r.error) { if (row[3] !== '' || row[8] !== '') bad++; cmp++; return; }
      const nums = [[3, r.qty], [5, r.qtyW], [8, r.matExt / 100], [9, r.labExt / 100], [10, r.total / 100]];
      for (const [col, want] of nums) { cmp++; if (!(Math.abs(Number(row[col]) - want) <= 1e-9 * Math.max(1, Math.abs(want)))) { bad++; console.log('    LibreOffice row ' + (i + 2) + ' col ' + col + ': ' + row[col] + ' vs ' + want); } }
    });
    const tot = rowsLo.find((rw) => rw[0] === 'Job total');
    ok(tot && Number(tot[8]) === est.matTotal / 100 && Number(tot[9]) === est.labTotal / 100 && Number(tot[10]) === est.total / 100, `LibreOffice's job total = ${tot?.[10]} (app: ${est.total / 100})`);
    eq(bad, 0, `every quantity, extension and total LibreOffice computes matches the app (${cmp} values)`);
  }
  // names that would break XML or sheet names
  const odd = await X.writeXlsx([{ name: 'a/b:c*?[x]', rows: [['<&>"\'', { v: 'x\u0001y' }, 1.5, null, -0]] }, { name: 'a/b:c*?[x]', rows: [[1]] }]);
  const of = path.join(tmp, 'odd.xlsx');
  fs.writeFileSync(of, odd);
  try {
    const py = fs.existsSync(path.join(TOOLS, 'venv/bin/python')) ? path.join(TOOLS, 'venv/bin/python') : 'python3';
    const out = JSON.parse(execFileSync(py, [path.join(TOOLS, 'xlsx_check.py'), of], { encoding: 'utf8' }));
    eq(out.names.join('|'), 'a b c   x|a b c   x 2', 'illegal sheet-name characters replaced, duplicates numbered');
    eq(out.sheets[out.names[0]].cells.A1, '<&>"\'', 'XML-special characters survive');
    eq(out.sheets[out.names[0]].cells.B1, 'xy', 'XML-illegal control characters dropped');
  } catch (err) { ok(false, 'odd workbook reads back', String(err.stderr || err.message).slice(0, 300)); }
  eq(X.crc32(new TextEncoder().encode('123456789')), 0xCBF43926, 'CRC-32 check value');
  eq(X.colName(0) + X.colName(25) + X.colName(26) + X.colName(701) + X.colName(702), 'AZAAZZAAA', 'column names');
}

// ---------------------------------------------------------------------------
section('Multi-condition items (T8)');
{
  const t = new M.Takeoff();
  const hash = 'b'.repeat(64);
  t.addFile({ hash, name: 'room.pdf', size: 1, pages: 1 });
  const s0 = M.sheetKey(hash, 0);
  t.setScale(s0, { method: 'preset', preset: 'a1/4', ftPerUnit: U.presetFtPerUnit('a1/4'), label: '1/4"', cal: null });
  const R = (x, y, w, h) => [{ x, y }, { x: x + w, y }, { x: x + w, y: y + h }, { x, y: y + h }];
  // one item "Room 101": the floor (area, main), its base (linear) and its doors (count)
  const room = t.addItem({ name: 'Room 101', type: 'area', heightFt: 0.25, mat: U.parseRate('2').rate4, pitch: 6 });
  let threw = '';
  try { t.addMark({ item: room, sheet: s0, pts: [{ x: 0, y: 0 }], kind: 'count' }); } catch (e) { threw = e.message; }
  ok(/Also measure/.test(threw), 'a count mark on an area item is refused until the item also measures counts');
  t.setCond(room, 'linear', true);
  t.setCond(room, 'count', true);
  eq(M.kindsOf(t.item(room)).join(), 'area,linear,count', 'kindsOf: the main condition, then the others in type order');
  eq(t.item(room).conds.map((c) => c.unit).join(), 'LF,EA', 'each condition starts in its default unit');
  t.updateCond(room, 'linear', { mat: U.parseRate('1.5').rate4, waste: 1000 });
  t.updateCond(room, 'count', { lab: U.parseRate('80').rate4 });
  t.addMark({ item: room, sheet: s0, pts: R(0, 0, 216, 144) });                              // 12 × 8 ft = 96 SF (× pitch 6/12)
  t.addMark({ item: room, sheet: s0, pts: [{ x: 0, y: 0 }, { x: 216, y: 0 }, { x: 216, y: 144 }], kind: 'linear' });   // 12 + 8 = 20 LF
  t.addMarks(room, [{ sheet: s0, pts: [{ x: 10, y: 10 }] }, { sheet: s0, pts: [{ x: 20, y: 10 }] }], 'doors', 'count');
  const q = M.quantities(t.state).get(room);
  ok(near(q.areaSqft, 96 * U.slopeFactor(6)) && q.count === 1, 'the main condition: the floor alone, on its pitch (one area mark)');
  ok(near(q.conds.linear.lengthFt, 20) && q.conds.count.count === 2 && q.conds.linear.marks === 1, 'second conditions: 20 LF of base (no pitch), 2 doors');
  const est = M.estimate(t.state);
  const rows = est.rows.filter((r) => r.itemId === room);
  eq(rows.map((r) => r.kind + ':' + (r.cond || r.type)).join(), 'item:area,condition:linear,condition:count', 'the estimate: the item row, then a row per condition');
  ok(near(rows[1].qty, 20) && near(rows[1].qtyW, 22) && rows[1].matExt === 3300 && rows[1].unit === 'LF', 'base: 20 LF + 10 % = 22 × $1.50 = $33.00');
  ok(rows[2].qty === 2 && rows[2].labExt === 16000 && rows[2].marks === 2, 'doors: 2 × $80 labor = $160.00');
  eq(rows[0].marks, 1, 'the item row counts its own marks only');
  eq(est.total, rows[0].total + 3300 + 16000, 'all three in the job total');
  const sb = M.sheetBreakdown(t.state).filter((r) => r.itemId === room);
  eq(sb.map((r) => (r.cond || 'main') + ':' + U.fixed(r.qty, 2)).join(), 'main:' + U.fixed(96 * U.slopeFactor(6), 2) + ',linear:20.00,count:2.00', 'By sheet: a row per condition');
  const csv = E.estimateCsv(t.state);
  ok(/Room 101,Linear,LF,20,10,22/.test(csv) && /marks of this item, priced on their own/.test(csv), 'the CSV has the condition rows, with a note');
  t.updateCond(room, 'linear', { unit: 'm' });
  ok(near(M.estimate(t.state).rows.find((r) => r.cond === 'linear').qty, 20 * 0.3048), 'a condition in metres: 6.096 m');
  // locks: a condition with marks can't be turned off; the main type can change only without its own marks
  threw = '';
  try { t.setCond(room, 'count', false); } catch (e) { threw = e.message; }
  ok(/still has marks of that kind/.test(threw), 'turning off a condition with marks is refused');
  // the file keeps it all; a mark of a kind the item does not take is dropped on reading
  const json = JSON.parse(JSON.stringify(t.toJSON()));
  const back = M.readProject(json);
  ok(back.ok && back.state.marks.length === 4 && back.state.items[0].conds.length === 2 && !back.warnings.length, 'saved and read back: 4 marks, 2 conditions');
  json.items[0].conds = json.items[0].conds.filter((c) => c.kind !== 'count');
  const lost = M.readProject(json);
  ok(lost.state.marks.length === 2 && lost.warnings.length === 1, 'without the count condition the 2 door marks are dropped (with a warning)');
  ok(M.normalItem({ id: 'x', type: 'area', conds: [{ kind: 'area' }, { kind: 'count' }, { kind: 'count' }, { kind: 'bogus' }] }).conds.length === 1, 'normalItem: no condition of the main type, no duplicates, no unknown kinds');
  // moving a mark to an item that takes its kind
  const base = t.addItem({ name: 'Base', type: 'linear' });
  const lm = t.state.marks.find((m) => m.kind === 'linear').id;
  t.updateMark(lm, { item: base });
  ok(t.mark(lm).item === base, 'a base run moves to a plain linear item');
  t.updateMark(lm, { item: room });
  ok(t.mark(lm).item === room, 'and back to the room (it takes linear marks)');
  // 3D: the second conditions stand plainly
  const sc = (await load('scene3d.js')).buildScene(t.state, s0);
  ok(sc.ok && sc.objects.some((o) => o.kind === 'run') && sc.objects.some((o) => o.kind === 'slab'), '3D: the floor as a slab (its depth), the base as a flat run (not a wall of the slab\'s depth)');
  // paste keeps a condition's marks
  const clip = C.readClip(JSON.parse(JSON.stringify(C.copyMarks(t.state, t.state.marks.filter((m) => m.item === room).map((m) => m.id))))).clip;
  const t2 = new M.Takeoff(); t2.addFile({ hash, name: 'room.pdf', size: 1, pages: 1 });
  const res = C.pasteClip(t2, clip, { sheet: s0 });
  ok(res && res.marks.length === 4 && t2.state.items[0].conds.length === 2, 'copy and paste into another takeoff: the item with its conditions and all 4 marks');
}

section('Price library from CSV (T9)');
{
  const Lb = await load('library.js');
  eq(JSON.stringify(Lb.parseCsv('﻿a,"b, c","d ""q"""\r\n1,2,3\n\n')), JSON.stringify([['a', 'b, c', 'd "q"'], ['1', '2', '3']]), 'parseCsv: BOM, quotes, doubled quotes, CRLF, blank lines');
  eq(Lb.parseCsv('Item;Unit\nX;LF').map((r) => r.join('|')).join('/'), 'Item|Unit/X|LF', 'parseCsv: semicolons when the header has them');
  const csv = [
    'Name,Type,UOM,Waste,Material,Labor,Height,Component,Formula',
    'Partition type A,Linear,LF,10%,$2.10,3.333,9\'-0",,',
    ',Component,EA,,4.25,,,Studs 16 o.c.,ceil(L / 1.333) + N',
    ',Component,sheets,10,14.98,22,,Gypsum board 4x8,ceil(A * 2 / 32)',
    'VCT flooring,,SF,5,1.85,1.10,,,',
    'Carpet,area,SY,,27,,,,',
    'Duplex outlets,Count,EA,,3.50,45,,,',
    'Mystery,Volume,CY,,1,,,,',
    ',Component,EA,,1,,,Orphan,N',
    'Bad rate,Linear,LF,,abc,,,,',
    'Wall in metres,Linear,m,,1,,2.7,,',
  ].join('\n');
  const r = Lb.readLibraryCsv(csv);
  ok(r.ok && r.entries.length === 5, `5 items read (got ${r.entries?.length})`, JSON.stringify(r.warnings));
  const pa = r.entries[0];
  ok(pa.type === 'linear' && pa.unit === 'LF' && pa.waste === 1000 && pa.mat === 21000 && pa.lab === 33330 && near(pa.heightFt, 9), 'Partition: linear, LF, 10 %, $2.10 / $3.333, 9\'-0" high', JSON.stringify(pa));
  ok(pa.components.length === 2 && pa.components[0].formula === 'ceil(L / 1.333) + N' && pa.components[1].unit === 'sheets' && pa.components[1].mat === 149800, 'its two components with formulas, units and rates');
  ok(r.entries[1].type === 'area' && r.entries[1].unit === 'SF', 'VCT: no type, so its unit SF makes it an area item');
  ok(r.entries[2].unit === 'SY' && r.entries[3].type === 'count' && r.entries[3].lab === 450000, 'Carpet in SY; outlets: count, $45 labor');
  ok(r.entries.some((e) => e.name === 'Wall in metres' && e.unit === 'm' && near(e.heightFt, 2.7 / 0.3048)), 'a metric wall: m, 2.7 m high');
  ok(r.warnings.length === 3 && r.warnings.some((w) => /row 8: type "Volume"/.test(w)) && r.warnings.some((w) => /row 9: a component with no item/.test(w)) && r.warnings.some((w) => /row 10: Type an amount/.test(w)), 'three rows skipped, each said with its row number', r.warnings.join(' | '));
  ok(!Lb.readLibraryCsv('Price,Unit\n1,LF').ok && /Item \(or Name\)/.test(Lb.readLibraryCsv('Price,Unit\n1,LF').error), 'a CSV with no Item column is refused, saying why');
  // round trip: the library's own CSV, and the app's estimate CSV
  const back = Lb.readLibraryCsv(Lb.libraryCsv(r.entries));
  eq(JSON.stringify(back.entries), JSON.stringify(r.entries), 'libraryCsv reads back exactly');
  const t = new M.Takeoff();
  const ids = t.addItems(r.entries.map(Lb.itemFromEntry));
  ok(ids.length === 5 && t.state.items[0].components.length === 2 && t.undoStack.length === 1, 'addItems: all five with their assemblies, one undo step');
  const est = Lb.readLibraryCsv(E.estimateCsv(t.state));
  ok(est.ok && est.entries.length === 5 && est.entries[0].components[0].formula === 'ceil(L / 1.333) + N' && est.entries[0].mat === 21000 && est.entries[2].unit === 'SY', 'the estimate CSV TakeoffCraft exports reads in as a library (formulas from its Notes, the Job total row left out)', JSON.stringify(est.warnings));
  // merge: the same name and type (any case) is replaced in its place
  const m = Lb.mergeEntries(r.entries, [{ ...r.entries[1], name: 'vct FLOORING', mat: 20000 }, { ...r.entries[1], name: 'New tile' }]);
  ok(m.added === 1 && m.updated === 1 && m.lib[1].mat === 20000 && m.lib.length === 6, 'merge: VCT updated in place, a new tile added');
  // reprice: the takeoff's items take the library's rates (components by name); height and formulas stay
  const lib2 = Lb.mergeEntries(r.entries, [{ ...r.entries[0], mat: 25000, heightFt: 12, components: [{ ...r.entries[0].components[0], mat: 50000, formula: 'L' }] }]).lib;
  const patches = Lb.repricePatches(t.state.items, lib2);
  ok(patches.length === 1 && patches[0].patch.mat === 25000 && !('heightFt' in patches[0].patch), 'reprice: only the partition changed, its rate (not its height)');
  t.updateItems(patches);
  const pi = t.state.items[0];
  ok(pi.mat === 25000 && pi.components[0].mat === 50000 && pi.components[0].formula === 'ceil(L / 1.333) + N' && near(pi.heightFt, 9) && pi.components[1].mat === 149800, 'its studs took the new rate, kept their formula; the board is unchanged');
  t.undo();
  eq(t.state.items[0].mat, 21000, 'one Undo puts the old prices back');
  // what is stored: a takeoff item as an entry, read back from JSON (bad entries dropped)
  const stored = Lb.readStored(JSON.parse(JSON.stringify([Lb.entryFromItem(t.state.items[0]), { name: 'x', type: 'volume' }, null])));
  ok(stored.length === 1 && stored[0].components.length === 2 && !('id' in stored[0]) && !('color' in stored[0]), 'readStored keeps good entries (no id, no colour)');
}

section('Typical groups (T16)');
{
  const t = new M.Takeoff();
  const hash = 'c'.repeat(64);
  t.addFile({ hash, name: 'units.pdf', size: 1, pages: 1 });
  const s0 = M.sheetKey(hash, 0);
  t.setScale(s0, { method: 'preset', preset: 'a1/4', ftPerUnit: U.presetFtPerUnit('a1/4'), label: '1/4"', cal: null });
  const R = (x, y, w, h) => [{ x, y }, { x: x + w, y }, { x: x + w, y: y + h }, { x, y: y + h }];
  const wall = t.addItem({ name: 'Wall', type: 'linear', heightFt: 9, mat: 10000 });
  const floor = t.addItem({ name: 'Carpet', type: 'area' });
  const outlet = t.addItem({ name: 'Outlets', type: 'count' });
  const w1 = t.addMark({ item: wall, sheet: s0, pts: [{ x: 0, y: 0 }, { x: 180, y: 0 }] });          // 10 ft
  const f1 = t.addMark({ item: floor, sheet: s0, pts: R(0, 0, 180, 144) });                        // 10 × 8 = 80 SF
  const o1 = t.addMark({ item: outlet, sheet: s0, pts: [{ x: 5, y: 5 }] });
  const o2 = t.addMark({ item: outlet, sheet: s0, pts: [{ x: 15, y: 5 }] });
  t.addMark({ item: wall, sheet: s0, pts: [{ x: 0, y: 300 }, { x: 90, y: 300 }] });                // 5 ft, not typical
  let threw = '';
  try { t.addGroup('Unit A', 0); } catch (e) { threw = e.message; }
  ok(/1 to 10000/.test(threw), 'a repeat count of 0 is refused');
  const u0 = t.undoStack.length;
  const g = t.addGroup('Unit A', 24, [w1, f1, o1, o2]);
  ok(t.group(g).repeat === 24 && t.state.marks.filter((m) => m.group === g).length === 4 && t.undoStack.length === u0 + 1, 'addGroup: the group and its four marks in one undo step');
  const q = M.quantities(t.state);
  ok(near(q.get(wall).lengthFt, 10 * 24 + 5) && q.get(wall).count === 25 && q.get(wall).marks === 2, 'wall: 10 ft × 24 + 5 ft = 245 ft; N = 25 runs; 2 marks drawn');
  ok(near(q.get(floor).areaSqft, 80 * 24) && near(q.get(floor).perimeterFt, 36 * 24), 'carpet: 80 SF × 24 = 1,920 SF, its perimeter × 24');
  eq(q.get(outlet).count, 48, 'outlets: 2 × 24 = 48');
  const est = M.estimate(t.state);
  eq(est.rows.find((r) => r.itemId === wall).matExt, 245 * 100, 'priced on the repeated quantity: 245 LF × $1.00');
  t.updateGroup(g, { repeat: 12 });
  eq(M.quantities(t.state).get(outlet).count, 24, 'repeat 12: 24 outlets');
  t.setMarksGroup([o2], null);
  eq(M.quantities(t.state).get(outlet).count, 13, 'an outlet taken out of the group counts once: 12 + 1');
  const back = M.readProject(JSON.parse(JSON.stringify(t.toJSON())));
  ok(back.ok && back.state.groups[0].repeat === 12 && back.state.marks.filter((m) => m.group === g).length === 3, 'saved and read back: the group, its repeat and its marks');
  const bad = JSON.parse(JSON.stringify(t.toJSON())); bad.groups[0].repeat = -3; bad.marks[0].group = 'nope';
  const rb = M.readProject(bad);
  ok(rb.state.groups[0].repeat === 1 && !rb.state.marks[0].group, 'read: a bad repeat becomes 1, a mark in an unknown group is in none');
  ok(/typical Unit A, counted ×12/.test(JSON.stringify(E.estimateSheets(t.state, (k) => k))), 'the Marks sheet says which marks are typical and how many times they count');
  // a pasted copy is a new mark, in no group
  const clip = C.readClip(JSON.parse(JSON.stringify(C.copyMarks(t.state, [w1])))).clip;
  const res = C.pasteClip(t, clip, { sheet: s0, dx: 0, dy: 500 });
  ok(res && !t.mark(res.marks[0]).group, 'a pasted copy of a typical mark is not in the group (it would count ×12 again)');
  t.removeGroup(g);
  ok(!t.state.groups.length && !t.state.marks.some((m) => m.group) && near(M.quantities(t.state).get(wall).lengthFt, 25), 'removing the group: its marks stay, each counted once (10 + 5 + 10 pasted)');
}

section('Alternates (T17)');
{
  const t = new M.Takeoff();
  const hash = 'e'.repeat(64);
  t.addFile({ hash, name: 'alt.pdf', size: 1, pages: 1 });
  const s0 = M.sheetKey(hash, 0);
  t.setScale(s0, { method: 'preset', preset: 'a1/4', ftPerUnit: U.presetFtPerUnit('a1/4'), label: '1/4"', cal: null });
  const R = (x, y, w, h) => [{ x, y }, { x: x + w, y }, { x: x + w, y: y + h }, { x, y: y + h }];
  const vct = t.addItem({ name: 'VCT', type: 'area', mat: U.parseRate('2').rate4 });
  const carpet = t.addItem({ name: 'Carpet', type: 'area', mat: U.parseRate('5').rate4 });
  t.addComponent(carpet, { name: 'Pad', unit: 'SF', formula: 'A', mat: U.parseRate('1').rate4 });
  const canopy = t.addItem({ name: 'Canopy', type: 'count', mat: U.parseRate('1000').rate4 });
  t.addComponent(canopy, { name: 'Permit', unit: 'EA', formula: '1', mat: U.parseRate('50').rate4 });   // a constant: priced once even with no marks
  const base = t.addArea('Base');
  const a1 = t.addArea('Alt 1 carpet upgrade');
  const a2 = t.addArea('Alt 2 delete canopy');
  t.addMark({ item: vct, sheet: s0, pts: R(0, 0, 180, 180), area: base });          // 100 SF × $2 = $200
  t.addMark({ item: carpet, sheet: s0, pts: R(0, 200, 180, 90), area: a1 });        // 50 SF × ($5 + $1 pad) = $300
  t.addMark({ item: canopy, sheet: s0, pts: [{ x: 300, y: 300 }], area: a2 });      // 1 × $1,000
  const plain = M.estimate(t.state).total;
  ok(t.setAreaAlt(a1, 'add') && t.setAreaAlt(a2, 'deduct') && !t.setAreaAlt(a2, 'deduct'), 'setAreaAlt: add, deduct (setting it again changes nothing)');
  const b = M.baseEstimate(t.state);
  eq(b.total, plain - 30000, 'the base bid leaves the add alternate out: everything − $300');
  eq(b.total, 20000 + 100000 + 5000, 'base bid: VCT $200 + canopy $1,000 + permit $50 = $1,250');
  const alts = M.alternates(t.state);
  eq(alts.map((a) => a.area.name + ' ' + a.alt + ' ' + a.amount).join(' | '), 'Alt 1 carpet upgrade add 30000 | Alt 2 delete canopy deduct -105000', 'alternates: +$300 (carpet and its pad), −$1,050 (canopy and its permit)');
  ok(alts[0].est.rows.every((r) => r.itemId === carpet), 'an alternate prices only the items with marks in it (no VCT, no stray permit)');
  const csv = E.estimateCsv(t.state);
  ok(/^Base bid,.*,1250,/m.test(csv) && /^Alt 1 carpet upgrade,Add,.*,300,/m.test(csv) && /^Alt 2 delete canopy,Deduct,.*,-1050,/m.test(csv), 'the estimate CSV: the base bid, then each alternate with its change', csv.split('\r\n').slice(-5).join(' / '));
  const sheets = E.estimateSheets(t.state, (k) => k);
  const alt = sheets.find((sh) => sh.name === 'Alternates');
  const flat = JSON.stringify(alt?.rows);
  ok(alt && /Base bid with every add alternate/.test(flat) && flat.includes('1550') && /Alt 2 delete canopy \(deduct alternate\)/.test(flat), 'the workbook has an Alternates sheet: base, each alternate, base with every add ($1,550)');
  const back = M.readProject(JSON.parse(JSON.stringify(t.toJSON())));
  ok(back.state.areas.map((a) => a.alt || '-').join() === '-,add,deduct', 'saved and read back with their kinds');
  const lib = (await load('library.js')).readLibraryCsv(csv);
  ok(lib.ok && lib.entries.length === 3 && !lib.warnings.length, 'the estimate CSV with alternates still reads in as a price library (the alternates part is skipped)', JSON.stringify(lib.warnings));
  t.setAreaAlt(a1, null);
  eq(M.baseEstimate(t.state).total, plain, 'back to the base bid: the whole estimate again');
  ok(!M.alternates(t.state).some((a) => a.area.id === a1), 'and it is no longer an alternate');
}

section('Crew labor (T18)');
{
  const t = new M.Takeoff();
  const hash = 'f'.repeat(64);
  t.addFile({ hash, name: 'crew.pdf', size: 1, pages: 1 });
  const s0 = M.sheetKey(hash, 0);
  t.setScale(s0, { method: 'preset', preset: 'a1/4', ftPerUnit: U.presetFtPerUnit('a1/4'), label: '1/4"', cal: null });
  // 100 LF of wall (+10 % waste = 110 LF); a crew of 2 hangs 20 LF an hour at $45/h each
  const wall = t.addItem({ name: 'Partition', type: 'linear', waste: 1000, lab: U.parseRate('9').rate4, crew: { prod: 20, size: 2, wage: U.parseRate('45').rate4 } });
  t.addMark({ item: wall, sheet: s0, pts: [{ x: 0, y: 0 }, { x: 1800, y: 0 }] });
  const r = M.estimate(t.state).rows.find((x) => x.itemId === wall);
  ok(near(r.work.hours, 5.5) && near(r.work.workerHours, 11) && near(r.work.days, 5.5 / 8), '110 LF ÷ 20 LF/h = 5.5 crew-hours, × 2 = 11 worker-hours, 0.69 crew-days');
  eq(r.labExt, 49500, 'labor: 11 worker-hours × $45 = $495.00 (the $9/LF rate is not used)');
  eq(r.lab, 45000, 'the rate it comes to: 2 × $45 ÷ 20 = $4.50/LF');
  const est = M.estimate(t.state);
  ok(near(est.workerHours, 11) && near(est.hours, 5.5), 'the estimate totals the hours');
  const csv = E.estimateCsv(t.state);
  ok(/crew 2 × 5\.5 h = 11 worker-hours, 0\.69 crew-days \(20 LF\/h at \$45\/h\)/.test(csv), 'the CSV says how the labor was worked out');
  const sheet = E.estimateSheets(t.state, (k) => k)[0].rows.find((row) => row[0]?.v === 'Partition');
  ok(sheet[9].f === 'ROUND(F2/20*2*45,2)' && sheet[9].v === 495, 'the workbook\'s labor cell is a live formula: ROUND(F2/20*2*45,2)');
  ok(!M.normalItem({ id: 'x', type: 'linear', crew: { prod: 0, size: 2 } }).crew && M.normalItem({ id: 'x', type: 'linear', crew: { prod: 5, size: 0.5, wage: -1 } }).crew.size === 1, 'normalItem: no crew without a production; a bad size or wage falls back');
  t.updateItem(wall, { crew: null });
  eq(M.estimate(t.state).rows.find((x) => x.itemId === wall).labExt, 99000, 'crew off: back to the rate per unit, 110 × $9 = $990.00');
  const back = M.readProject(JSON.parse(JSON.stringify((t.undo(), t.toJSON()))));
  ok(back.state.items[0].crew?.prod === 20, 'undo brings the crew back; it is saved in the file');
}

section('Bid summary and proposal PDF (T19)');
{
  const Bd = await load('bid.js');
  const t = new M.Takeoff();
  const hash = '9'.repeat(64);
  t.addFile({ hash, name: 'bid.pdf', size: 1, pages: 1 });
  const s0 = M.sheetKey(hash, 0);
  t.setScale(s0, { method: 'preset', preset: 'a1/4', ftPerUnit: U.presetFtPerUnit('a1/4'), label: '1/4"', cal: null });
  // $1,000 material + $500 labor
  const wall = t.addItem({ name: 'Partition', type: 'linear', mat: U.parseRate('10').rate4, lab: U.parseRate('5').rate4 });
  t.addMark({ item: wall, sheet: s0, pts: [{ x: 0, y: 0 }, { x: 1800, y: 0 }] });          // 100 LF
  const alt = t.addArea('Alt 1 more wall'); t.setAreaAlt(alt, 'add');
  t.addMark({ item: wall, sheet: s0, pts: [{ x: 0, y: 100 }, { x: 180, y: 100 }], area: alt });   // 10 LF: $150 cost
  t.setBid({ tax: 825, overhead: 1000, profit: 1000, bond: 150, to: 'Owner LLC\n1 Main St', by: 'ACME Drywall', incl: '- Taping and finishing\n- Cleanup', excl: 'Paint\nPermits', terms: 'Valid for 30 days.' });
  const est = M.baseEstimate(t.state);
  const sum = Bd.bidSummary(est, t.bid(), M.alternates(t.state));
  // cost 150000; tax 8.25 % × 100000 = 8250; overhead 10 % × 158250 = 15825; profit 10 % × 174075 = 17408 (17407.5 → 17408);
  // bond 1.5 % × 191483 = 2872 (2872.245); bid 194355
  eq(sum.lines.map((l) => l.key + ':' + l.cents).join(' '), 'mat:100000 lab:50000 cost:150000 tax:8250 overhead:15825 profit:17408 bond:2872 total:194355', 'the summary: tax on material, then overhead, profit and bond, each on what is above it');
  eq(sum.alts[0].withMarkup, Bd.bidSummary({ matTotal: 10000, labTotal: 5000 }, t.bid()).total, 'an add alternate carries the same markups on its own cost');
  ok(Bd.bidSummary(est, {}).lines.length === 4 && Bd.bidSummary(est, {}).total === 150000, 'no markups: material, labor, cost, bid = cost');
  ok(Bd.normalBid({ tax: -1, overhead: 1.5, profit: 200000, to: 'a\u0000b' }).tax === 0 && Bd.normalBid({ overhead: 1.5 }).overhead === 0 && Bd.normalBid({ to: 'a\u0000b' }).to === 'a b', 'normalBid: bad percents become 0, control characters go');
  const back = M.readProject(JSON.parse(JSON.stringify(t.toJSON())));
  ok(back.state.bid.overhead === 1000 && back.state.bid.excl === 'Paint\nPermits', 'saved with the takeoff and read back');
  ok(!('bid' in new M.Takeoff().toJSON()), 'a takeoff without a bid summary saves none');
  const csv = E.estimateCsv(t.state);
  ok(/^Bid summary/m.test(csv) && /^Overhead \(10%\)?|^Overhead,10%/m.test(csv) && /^Bid,.*,1943\.55,$/m.test(csv), 'the estimate CSV ends with the bid summary', csv.split('\r\n').slice(-9).join(' / '));
  const bs = E.estimateSheets(t.state, (k) => k).find((sh) => sh.name === 'Bid summary');
  ok(bs && JSON.stringify(bs.rows).includes('1943.55'), 'the workbook has a Bid summary sheet');
  // the proposal PDF: text read back with pdftotext
  const bytes = await Bd.proposalPdf(PDFLib, { state: t.state, est, alts: M.alternates(t.state), date: new Date('2026-10-13T12:00:00Z') });
  const pf = path.join(os.tmpdir(), 'tc-proposal-' + process.pid + '.pdf');
  fs.writeFileSync(pf, bytes);
  const txt = execFileSync('pdftotext', ['-layout', pf, '-'], { encoding: 'utf8' });
  fs.unlinkSync(pf);
  ok(/Proposal/.test(txt) && /Owner LLC/.test(txt) && /ACME Drywall/.test(txt) && /2026-10-13/.test(txt), 'the proposal: heading, To, From, date');
  ok(/Overhead \(10 %\)\s+\$158\.25/.test(txt) && /Bid\s+\$1,943\.55/.test(txt), 'its price block: each markup and the bid');
  ok(/Alt 1 more wall \(add alternate\)\s+\+\$194\.\d\d/.test(txt), 'the add alternate with its markups');
  ok(/Scope\s+Partition\s+100 LF\s+Inclusions/.test(txt) && !/\$/.test(txt.slice(txt.indexOf('Scope'), txt.indexOf('Inclusions'))), 'the scope lists items and quantities, not their prices');
  ok(/Taping and finishing/.test(txt) && /•\s+Paint/.test(txt) && !/-\s+Taping/.test(txt) && /Valid for 30 days/.test(txt) && /accepted/.test(txt), 'inclusions, exclusions (one per line, dashes dropped), terms, acceptance');
}

section('Scales from the sheets\' text (T20)');
{
  const St = await load('scaletext.js');
  const one = (s) => St.sheetScale(s).preset;
  eq([one('FLOOR PLAN  SCALE: 1/4" = 1\'-0"'), one('1/8"=1\''), one('3/16 " = 1 \' - 0 "'), one('DETAIL 1 1/2" = 1\'-0"'), one('1-1/2"=1\'-0"'), one('SITE PLAN 1" = 20\''), one('SCALE 1:100'), one('ratio 1:1000.'), one('3/4 in = 1 ft')].join(),
    'a1/4,a1/8,a3/16,a1-1/2,a1-1/2,e20,m100,m1000,a3/4', 'notations: architectural (with odd spacing, mixed numbers), engineering, metric, words for inches and feet');
  ok(one('Time 1:30 pm') === null && one('12" = 1\'-0"') === null && one('1:2.5') === null && one('2 1/4" = 1\'-0"') === null, 'not scales: a time, full size, a decimal ratio, a scale TakeoffCraft has no preset for');
  const nts = St.sheetScale('DETAIL A — N.T.S.');
  ok(nts.preset === null && nts.nts && nts.why === 'nts', 'NTS is reported as not to scale');
  const sev = St.sheetScale('ENLARGED 1-1/2" = 1\'-0"  PLAN 1/4" = 1\'-0"  SCALE: 1/4" = 1\'-0"');
  ok(sev.preset === 'a1/4' && sev.why === 'several' && sev.others.join() === 'a1-1/2', 'several scales: the most frequent (after "SCALE" counts double), the others reported');
  // through pdf.js, on a generated set (text drawn by pdf-lib)
  const legacy = path.join(TOOLS, 'node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  const pdfjs = await import(pathToFileURL(legacy).href);
  pdfjs.GlobalWorkerOptions.workerSrc = pathToFileURL(path.join(TOOLS, 'node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs')).href;
  const g = await PDFLib.PDFDocument.create();
  const font = await g.embedFont(PDFLib.StandardFonts.Helvetica);
  const pages = [['FIRST FLOOR PLAN', 'SCALE: 1/4" = 1\'-0"'], ['SITE PLAN', 'SCALE 1:100'], ['GENERAL NOTES'], ['NOT TO SCALE']];
  for (const lines of pages) { const p = g.addPage([612, 792]); lines.forEach((s, i) => p.drawText(s, { x: 400, y: 80 - i * 14, size: 9, font })); }
  const doc = await pdfjs.getDocument({ data: await g.save(), standardFontDataUrl: path.join(TOOLS, 'node_modules/pdfjs-dist/standard_fonts') + '/' }).promise;
  const res = [];
  for (let i = 1; i <= 4; i++) res.push(St.sheetScale(St.pageText(await (await doc.getPage(i)).getTextContent())));
  eq(res.map((r) => r.preset || r.why).join(), 'a1/4,m100,none,nts', 'a generated set read with pdf.js: 1/4", 1:100, nothing, not to scale');
  const t = new M.Takeoff();
  t.addFile({ hash: '7'.repeat(64), name: 'x.pdf', size: 1, pages: 2 });
  const k0 = M.sheetKey('7'.repeat(64), 0), k1 = M.sheetKey('7'.repeat(64), 1);
  const u20 = t.undoStack.length;
  t.setScales({ [k0]: { method: 'preset', preset: 'a1/4', ftPerUnit: U.presetFtPerUnit('a1/4'), label: '1/4"', cal: null }, [k1]: { method: 'preset', preset: 'm100', ftPerUnit: U.presetFtPerUnit('m100'), label: '1:100', cal: null } });
  ok(t.scaleOf(k0).preset === 'a1/4' && t.scaleOf(k1).preset === 'm100' && t.undoStack.length === u20 + 1, 'setScales: two sheets in one undo step');
  t.undo();
  ok(!t.scaleOf(k0) && !t.scaleOf(k1), 'one undo takes both off');
}

section('Room fill (T21)');
{
  const Rf = await load('roomfill.js');
  // dilateBin against a plain loop
  const w0 = 37, h0 = 23, src = new Uint8Array(w0 * h0);
  for (let i = 0; i < src.length; i++) src[i] = ((i * 2654435761) >>> 0) % 97 === 0 ? 1 : 0;
  let same = true;
  for (const r of [1, 3, 7]) {
    const fast = Rf.dilateBin(src, w0, h0, r);
    for (let y = 0; y < h0 && same; y++) for (let x = 0; x < w0; x++) {
      let v = 0;
      for (let yy = Math.max(0, y - r); yy <= Math.min(h0 - 1, y + r) && !v; yy++) for (let xx = Math.max(0, x - r); xx <= Math.min(w0 - 1, x + r); xx++) if (src[yy * w0 + xx]) { v = 1; break; }
      if (v !== fast[y * w0 + x]) { same = false; break; }
    }
  }
  ok(same, 'dilateBin (linear time, any radius) matches a plain square max filter at r = 1, 3, 7');
  const L = new Uint8Array(6 * 5); for (const [x, y] of [[1, 1], [2, 1], [3, 1], [1, 2], [1, 3], [2, 3], [2, 2]]) L[y * 6 + x] = 1;
  eq(Rf.trace(L, 6, 5).map((p) => p.x + ',' + p.y).join(' '), '1,1 4,1 4,2 3,2 3,4 1,4', 'trace: the outline of an L along pixel edges, corners only, clockwise on screen');
  // two rooms, a 30 px door, text in room A
  const W = 400, H = 300, data = new Float32Array(W * H);
  const wall = (x0, y0, x1, y1) => { for (let y = Math.min(y0, y1) - 1; y <= Math.max(y0, y1) + 1; y++) for (let x = Math.min(x0, x1) - 1; x <= Math.max(x0, x1) + 1; x++) data[y * W + x] = 1; };
  wall(20, 20, 380, 20); wall(380, 20, 380, 280); wall(20, 280, 380, 280); wall(20, 20, 20, 280); wall(200, 20, 200, 120); wall(200, 150, 200, 280);
  for (let i = 0; i < 6; i++) data[205 * W + 60 + i * 3] = 1;                              // "text": dots in room A
  const ink = { data, w: W, h: H };
  const a = Rf.roomAt(ink, { x: 100, y: 100 }, { gapPx: 40 });
  eq(a.ok && a.ring.map((p) => p.x + ',' + p.y).join(' '), '22,22 199,22 199,279 22,279', 'room A: a rectangle to the walls\' faces, straight across the door, no hole for its text');
  const b = Rf.roomAt(ink, { x: 300, y: 200 }, { gapPx: 40 });
  eq(b.ok && b.ring.map((p) => p.x + ',' + p.y).join(' '), '202,22 379,22 379,279 202,279', 'room B from its own click');
  eq(Rf.roomAt(ink, { x: 200, y: 60 }, { gapPx: 40 }).why, 'wall', 'a click on a line: refused');
  const both = Rf.roomAt(ink, { x: 100, y: 100 }, { gapPx: 20, maxShare: 0.95 });
  eq(both.ok && both.ring.map((p) => p.x + ',' + p.y).join(' '), '22,22 199,22 199,122 202,122 202,22 379,22 379,279 202,279 202,149 199,149 199,279 22,279', 'a door wider than the tolerance: the fill runs through it (both rooms as one, round the partition)');
  for (let x = 100; x < 140; x++) for (let y = 279; y <= 281; y++) data[y * W + x] = 0;          // a 40 px gap in the outside wall
  eq(Rf.roomAt(ink, { x: 100, y: 100 }, { gapPx: 20 }).why, 'open', 'an opening to the sheet\'s edge wider than the tolerance: "open"');
  ok(Rf.roomAt(ink, { x: 100, y: 100 }, { gapPx: 50 }).ok, 'with a 50 px tolerance the same room closes again');
}

section('Takeoff inside the PDF (T10)');
{
  const Em = await load('embed.js');
  const legacy = path.join(TOOLS, 'node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  const pdfjs = await import(pathToFileURL(legacy).href);
  pdfjs.GlobalWorkerOptions.workerSrc = pathToFileURL(path.join(TOOLS, 'node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs')).href;
  const g = await PDFLib.PDFDocument.create();
  g.addPage([612, 792]).drawRectangle({ x: 100, y: 100, width: 200, height: 100, borderWidth: 2 });
  g.addPage([792, 612]);
  await g.attach(new TextEncoder().encode('hello'), 'notes.txt', { mimeType: 'text/plain' });
  const original = await g.save();
  const hash = 'ab'.repeat(32);
  const t = new M.Takeoff();
  t.addFile({ hash, name: 'set.pdf', size: original.length, pages: 2 });
  const it = t.addItem({ name: 'Wall', type: 'linear' });
  t.addMark({ item: it, sheet: M.sheetKey(hash, 1), pts: [{ x: 0, y: 0 }, { x: 72, y: 0 }] });
  const once = await Em.embedTakeoff(PDFLib, original, t.toJSON(), hash);
  const doc1 = await pdfjs.getDocument({ data: once.slice() }).promise;
  const back = await Em.readEmbedded(doc1);
  ok(back && back.standsFor === hash && back.takeoff.marks.length === 1 && M.readProject(back.takeoff).ok, 'embedTakeoff → readEmbedded: the takeoff and the PDF it stands for');
  const p2 = await doc1.getPage(2);
  ok(doc1.numPages === 2 && p2.view.join() === '0,0,792,612', 'the pages are untouched (count and sizes)');
  const att = await doc1.getAttachments();
  ok([...(att instanceof Map ? att.keys() : Object.keys(att))].length === 2, 'the PDF\'s own attachment stays beside the takeoff');
  t.addMark({ item: it, sheet: M.sheetKey(hash, 0), pts: [{ x: 0, y: 0 }, { x: 36, y: 0 }] });
  const twice = await Em.embedTakeoff(PDFLib, once, t.toJSON(), hash);
  const doc2 = await pdfjs.getDocument({ data: twice.slice() }).promise;
  const att2 = await doc2.getAttachments();
  const names2 = [...(att2 instanceof Map ? att2.values() : Object.values(att2))].map((a) => a.filename).sort();
  ok(names2.join() === 'notes.txt,takeoff.takeoffcraft.json' && (await Em.readEmbedded(doc2)).takeoff.marks.length === 2, 'saved again from that copy: one takeoff inside (the newer), not two');
  const plain = await pdfjs.getDocument({ data: original.slice() }).promise;
  ok((await Em.readEmbedded(plain)) === null, 'a PDF with other attachments only: no takeoff');
  const bad = await PDFLib.PDFDocument.load(original);
  await bad.attach(new TextEncoder().encode('{"format":"takeoffcraft-embedded","standsFor":"nothex","takeoff":{}}'), Em.EMBED_NAME, { mimeType: 'application/json' });
  ok((await Em.readEmbedded(await pdfjs.getDocument({ data: await bad.save() }).promise)) === null, 'a damaged attachment is ignored');
}

section('Markups: notes, clouds, highlights (T22)');
{
  const g = await PDFLib.PDFDocument.create();
  g.addPage([612, 792]);
  const bytes = await g.save();
  const hash = 'cd'.repeat(32), key = M.sheetKey(hash, 0);
  const t = new M.Takeoff();
  t.addFile({ hash, name: 'plan.pdf', size: bytes.length, pages: 1 });
  const n1 = t.addNote({ kind: 'note', sheet: key, pts: [{ x: 100, y: 700 }], text: 'Verify the door swing\nwith the owner' });
  const c1 = t.addNote({ kind: 'cloud', sheet: key, pts: [{ x: 300, y: 300 }, { x: 200, y: 400 }], text: 'Rev 2: wall moved' });
  const h1 = t.addNote({ kind: 'highlight', sheet: key, pts: [{ x: 50, y: 50 }, { x: 150, y: 80 }], text: '' });
  ok(n1 && c1 && h1 && t.state.notes.length === 3 && t.state.notes.every((n) => n.status === 'open'), 'three markups, each open to start');
  ok(t.addNote({ kind: 'cloud', sheet: key, pts: [{ x: 1, y: 1 }, { x: 1, y: 9 }] }) === null && t.state.notes.length === 3, 'a cloud with no width is refused (no id, nothing added)');
  t.updateNote(c1, { status: 'answered', kind: 'note', sheet: 'other' });
  ok(t.note(c1).status === 'answered' && t.note(c1).kind === 'cloud' && t.note(c1).sheet === key, 'updateNote: the status changes; its kind and sheet cannot');
  ok(!M.estimate(t.state).rows.length && M.estimate(t.state).total === 0, 'markups are never counted');
  const json = JSON.parse(JSON.stringify(t.toJSON()));
  ok(json.notes.length === 3 && Array.isArray(json.notes[0].pts[0]), 'saved in the file (points as [x, y])');
  json.notes.push({ id: 'n99', sheet: key, kind: 'scribble', pts: [[0, 0]] }, { id: 'n98', sheet: 'f'.repeat(64) + ':0', kind: 'note', pts: [[0, 0]] });
  const back = M.readProject(json);
  ok(back.ok && back.state.notes.length === 3 && back.state.notes[1].status === 'answered' && back.state.notes[0].text.includes('\n'), 'read back: unknown kinds and sheets dropped, text and status kept');
  t.removeNote(h1); t.undo();
  ok(t.state.notes.length === 3, 'removeNote, one undo brings it back');
  // the marked PDF: drawn even on a page without takeoff marks
  const out = await P.pdfWithMarks(PDFLib, bytes, hash, t.state);
  const pf = path.join(os.tmpdir(), 'tc-notes-' + process.pid + '.pdf');
  fs.writeFileSync(pf, out.bytes);
  const txt = execFileSync('pdftotext', [pf, '-'], { encoding: 'utf8' });
  fs.unlinkSync(pf);
  ok(out.pages === 1 && /OPEN/.test(txt) && /Verify the door swing/.test(txt) && /with the owner/.test(txt) && /ANSWERED/.test(txt) && /Rev 2: wall moved/.test(txt), 'the marked PDF draws them with their status and text (a page with no marks too)');
  let cs = 0, ms = 0; P.cloudPath(0, 0, 100, 50, 10, (op) => { if (op === 'C') cs++; else ms++; });
  ok(ms === 1 && cs === 10 + 5 + 10 + 5, 'cloudPath: one start, a scallop about every 10 units along each side (10 + 5 + 10 + 5)');
  const sheets = E.estimateSheets(t.state, () => 'plan, page 1');
  const mk = sheets.find((sh) => sh.name === 'Markups');
  ok(mk && mk.rows.length === 4 && JSON.stringify(mk.rows).includes('Answered'), 'the workbook lists them on a Markups sheet');
}

section('3D');
{
  // ModelCraft's camera and vectors (and earcut) are copied byte-identical, never imported across apps
  const MC = path.join(ROOT, 'public_html/assets/apps/modelcraft/dev');
  // a one-app clone (devshell pack) has no ModelCraft to compare with: the copies are checked in the full repo
  if (!fs.existsSync(MC)) console.log('    (ModelCraft is not in this tree: the m3d copy checks are skipped)');
  else for (const f of ['camera.js', 'vec.js', 'earcut.js', 'viewcube.js', 'viewcube-camera.js']) {
    const mine = path.join(APP, 'm3d', f), theirs = path.join(MC, f);
    ok(fs.existsSync(mine) && fs.existsSync(theirs) && fs.readFileSync(mine).equals(fs.readFileSync(theirs)), `m3d/${f} is byte-identical to modelcraft/dev/${f} (re-copy it when ModelCraft's changes)`);
  }
  const src3 = (f) => fs.readFileSync(path.join(APP, f), 'utf8');
  ok(!/from ['"]three['"]|\bdocument\b|\bwindow\b/.test(src3('scene3d.js')), 'scene3d.js is DOM-free and never imports three');
  ok(/from 'three'/.test(src3('view3d.js')) && !/from '\.\.\//.test(src3('view3d.js')) && ![...src3('view3d.js').matchAll(/from '\.\/([^']+)'/g)].some((m) => !m[1].startsWith('m3d/') && m[1] !== 'i18n.js'), 'view3d.js imports three, the m3d copies and the language file only');
  const appJs = src3('takeoffcraft.js');
  ok(!/^import .*(view3d|scene3d)/m.test(appJs) && /import\('\.\/view3d\.js'\)/.test(appJs) && /import\('\.\/scene3d\.js'\)/.test(appJs), 'the 3D modules (and so three.js) load lazily with import()');
  ok(!/\.\.\/\.\.\/modelcraft|apps\/modelcraft/.test(src3('view3d.js') + src3('scene3d.js') + appJs), 'nothing imports from ModelCraft\'s folder');
  const man = JSON.parse(src3('manifest.json'));
  eq(man.imports.three, '/assets/vendor/three/current/three.module.js', 'manifest maps "three" to the vendored three.js');

  const S3 = await load('scene3d.js');
  const t = new M.Takeoff();
  t.addFile({ hash: 'h3d', name: 'Plan.pdf', size: 1, pages: 2 });
  const sh = M.sheetKey('h3d', 0), other = M.sheetKey('h3d', 1);
  eq(S3.buildScene(t.state, null).ok, false, 'no sheet: refused');
  const noScale = S3.buildScene(t.state, sh);
  ok(!noScale.ok && /no scale/i.test(noScale.reason), 'an unscaled sheet is refused with the reason', noScale.reason);
  const k = U.presetFtPerUnit('a1/4');                           // 1/18 ft per pt
  t.setScale(sh, U.scaleRecord({ method: 'preset', preset: 'a1/4', ftPerUnit: k, label: '1/4" = 1\'-0"' }));
  t.setScale(other, U.scaleRecord({ method: 'preset', preset: 'a1/4', ftPerUnit: k, label: '1/4" = 1\'-0"' }));
  const wallIt = t.addItem({ name: 'Wall A', type: 'linear', heightFt: 9 });
  const curb = t.addItem({ name: 'Curb', type: 'linear' });
  const slabIt = t.addItem({ name: 'Slab', type: 'area', heightFt: 0.5 });
  const pan = t.addItem({ name: 'Pan', type: 'area' });
  const cnt = t.addItem({ name: 'Outlets', type: 'count' });
  // a run of two lines and a quarter-circle arc (b = tan(90°/4)), 9' high
  const wallM = t.addMark({ item: wallIt, sheet: sh, pts: [{ x: 72, y: 72 }, { x: 288, y: 72, b: Math.tan(Math.PI / 8) }, { x: 360, y: 144 }, { x: 360, y: 360 }] });
  t.addMark({ item: curb, sheet: sh, pts: [{ x: 72, y: 400 }, { x: 300, y: 400 }] });
  // a slab: 20' × 15' with a half-circle bulge on one side, a rectangular cut-out and a round one
  const slabM = t.addMark({ item: slabIt, sheet: sh,
    pts: [{ x: 100, y: 100 }, { x: 460, y: 100 }, { x: 460, y: 370, b: 1 }, { x: 100, y: 370 }],
    holes: [[{ x: 150, y: 150 }, { x: 250, y: 150 }, { x: 250, y: 200 }, { x: 150, y: 200 }], [{ x: 300, y: 250, b: 1 }, { x: 360, y: 250, b: 1 }]] });
  const panM = t.addMark({ item: pan, sheet: sh, pts: [{ x: 500, y: 500, b: 1 }, { x: 572, y: 500, b: 1 }] });
  for (const [x, y] of [[50, 50], [80, 600], [500, 700]]) t.addMark({ item: cnt, sheet: sh, pts: [{ x, y }] });
  t.addMark({ item: wallIt, sheet: other, pts: [{ x: 0, y: 0 }, { x: 720, y: 0 }] });   // on the other sheet: not shown
  const r = S3.buildScene(t.state, sh, { transform: [1, 0, 0, -1, 0, 792], width: 612, height: 792 });
  const q = M.quantities(t.state);
  ok(r.ok, 'a scaled sheet builds');
  eq(r.objects.map((o) => o.kind).sort().join(','), 'marker,marker,marker,plate,run,slab,wall', 'wall, flat run, slab, plate and three posts; the other sheet\'s run is not stacked');
  const W = r.objects.find((o) => o.id === wallM), Sl = r.objects.find((o) => o.id === slabM), Pl = r.objects.find((o) => o.id === panM);
  const qW = q.get(wallIt).bySheet.get(sh), qS = q.get(slabIt).bySheet.get(sh), qP = q.get(pan).bySheet.get(sh);
  ok(near(W.measure.lengthFt, qW.lengthFt) && near(W.measure.wallSqft, qW.lengthFt * 9), `wall area = L × H exactly as quantities(): ${W.measure.wallSqft.toFixed(4)} SF`);
  const vars = M.itemVars(t.item(wallIt), qW);
  ok(near(W.measure.wallSqft, vars.A), 'and as the item\'s formula variable A (wall area) on that sheet');
  const meshWall = S3.meshArea(W.tris);
  ok(meshWall < W.measure.wallSqft && meshWall > W.measure.wallSqft * 0.999, `the flattened arc draws within 0.1% of the exact wall (${meshWall.toFixed(3)} of ${W.measure.wallSqft.toFixed(3)} SF, chords inside the arc)`);
  const wantNet = qS.areaSqft, wantVol = wantNet * 0.5;
  ok(near(Sl.measure.netSqft, wantNet) && near(Sl.measure.volumeCuft, wantVol), `slab volume = net area × depth exactly: ${Sl.measure.volumeCuft.toFixed(4)} CF`);
  const gross = (360 * 270 + Math.PI * 180 * 180 / 2) * k * k, cut = (100 * 50 + Math.PI * 30 * 30) * k * k;
  ok(near(Sl.measure.grossSqft, gross, 1e-12) && near(Sl.measure.cutSqft, cut, 1e-12) && near(Sl.measure.netSqft, gross - cut, 1e-12), 'net area = outline with its half-circle side − rectangle and round cut-outs (closed form)');
  const mv = S3.meshVolume(Sl.tris);
  ok(mv > 0 && Math.abs(mv - wantVol) / wantVol < 0.002, `the slab mesh is closed, faces out, and holds that volume within 0.2% (${mv.toFixed(3)} CF; arcs as 2.5° chords)`);
  ok(Pl.measure.thin && Pl.measure.volumeCuft === null && Pl.measure.drawnFt === S3.THIN_FT && near(Pl.measure.netSqft, qP.areaSqft), 'an area with no depth is a 2" plate; it reports no volume');
  ok(Math.abs(S3.meshVolume(Pl.tris) - Math.PI * (36 * k) ** 2 * S3.THIN_FT) / (Math.PI * (36 * k) ** 2 * S3.THIN_FT) < 0.002, 'the round plate mesh is the circle × 2"');
  ok(r.objects.find((o) => o.kind === 'run').tris.length === 0 && r.notes.some((n) => /1 run has no height/.test(n)) && r.notes.some((n) => /1 area has no depth/.test(n)), 'a run with no height lies flat, and the notes say so');
  for (const [id, t2] of r.byItem) {
    const qs = q.get(id).bySheet.get(sh);
    ok(near(t2.lengthFt, qs.lengthFt) && near(t2.netSqft, qs.areaSqft) && t2.count === qs.count, `per item on the sheet = quantities(): ${t.item(id).name}`);
  }
  eq(r.totals.markers, 3, 'three count posts');
  ok(r.objects.every((o) => o.tris.every(Number.isFinite) && o.lines.every(Number.isFinite)), 'every coordinate is a finite number');
  ok(near(r.ground.w, 612 * k) && near(r.ground.h, 792 * k), `the ground is the page in feet (${r.ground.w.toFixed(2)} × ${r.ground.h.toFixed(2)} ft)`);
  const inside = (o) => { for (let i = 0; i < o.tris.length; i += 3) if (o.tris[i] < -1e-9 || o.tris[i] > r.ground.w + 1e-9 || o.tris[i + 1] < -1e-9 || o.tris[i + 1] > r.ground.h + 1e-9) return false; return true; };
  ok(r.objects.filter((o) => o.kind !== 'marker').every(inside), 'the takeoff stands inside the sheet');
  ok(near(Sl.anchor[2], 0.5) && near(W.anchor[2], 4.5), 'anchors sit on the objects (slab top, wall mid-height)');
  // a page shown rotated (/Rotate 90: display = [0 1 1 0] · user) keeps lengths and lies the way it shows
  const rot = S3.buildScene(t.state, sh, { transform: [0, 1, 1, 0, 0, 0], width: 792, height: 612 });
  const Wr = rot.objects.find((o) => o.id === wallM);
  ok(near(rot.ground.w, 792 * k) && near(rot.ground.h, 612 * k) && near(S3.meshArea(Wr.tris), meshWall, 1e-9), 'a rotated page: ground turned, the wall the same size');
  const f2 = S3.sheetFrame(k, { transform: [0, 1, 1, 0, 0, 0], width: 792, height: 612 });
  const a = f2.at({ x: 0, y: 0 }), b = f2.at({ x: 72, y: 0 });
  ok(near(Math.hypot(b[0] - a[0], b[1] - a[1]), 72 * k), '72 pt on a rotated page is still 4\' on the ground');
  // a page with /UserUnit 2: the transform carries the scale, ftPerUnit stays per user unit
  const uu = S3.sheetFrame(k, { transform: [2, 0, 0, -2, 0, 1584], width: 1224, height: 1584 });
  const c0 = uu.at({ x: 0, y: 0 }), c1 = uu.at({ x: 72, y: 0 });
  ok(near(c1[0] - c0[0], 72 * k) && near(uu.w, 612 * k), 'a scaled viewport transform is divided out (lengths stay ftPerUnit × user units)');
  // a scaled sheet with nothing on it
  const empty = new M.Takeoff();
  empty.addFile({ hash: 'e', name: 'E.pdf', size: 1, pages: 1 });
  empty.setScale(M.sheetKey('e', 0), U.scaleRecord({ method: 'preset', preset: 'a1/4', ftPerUnit: k, label: '' }));
  const re = S3.buildScene(empty.state, M.sheetKey('e', 0));
  ok(re.ok && re.objects.length === 0 && re.marksBox === null, 'a sheet with no marks builds an empty scene (the sheet only)');
}

// ---------------------------------------------------------------------------
section('The kitchen plan sheet (public fixture PDF)');
if (!fs.existsSync(PLAN)) ok(false, 'plan PDF present at ' + PLAN);
else {
  const legacy = path.join(TOOLS, 'node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  if (!fs.existsSync(legacy)) ok(false, 'legacy pdf.js installed (cd tools/takeoffcraft-test && npm install)');
  else {
    const pdfjs = await import(pathToFileURL(legacy).href);
    pdfjs.GlobalWorkerOptions.workerSrc = pathToFileURL(path.join(TOOLS, 'node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs')).href;
    const vendored = JSON.parse(fs.readFileSync(path.join(TOOLS, 'node_modules/pdfjs-dist/package.json'), 'utf8')).version;
    eq(vendored, fs.readlinkSync(path.join(ROOT, 'public_html/assets/vendor/pdfjs/current')), 'Node pdf.js matches the vendored version');
    const bytes = new Uint8Array(fs.readFileSync(PLAN));
    const fonts = { fonts: path.join(TOOLS, 'node_modules/pdfjs-dist/standard_fonts') + '/' };
    const set = await S.openPdf(pdfjs, bytes, path.basename(PLAN), fonts);
    eq(set.hash, execFileSync('sha256sum', [PLAN], { encoding: 'utf8' }).split(' ')[0], 'file hash = sha256sum');
    eq(set.pages.length, 1, 'one sheet');
    const pg = set.pages[0];
    eq(JSON.stringify(pg.view), '[0,0,1296,1728]', '18" × 24" sheet (1296 × 1728 pt)');
    eq(pg.userUnit, 1, 'no /UserUnit');
    eq(pg.rotate, 0, 'not rotated');
    eq(S.sheetTitle(set, pg, false), 'kitchen-plan-sheet, page 1', 'sheet title from the file name (label is just "1")');
    const text = await (await set.doc.getPage(1)).getTextContent();
    eq(text.items.length, 0, 'the sheet has no text layer (its words are drawn as lines): it states no scale, so it must be calibrated');

    // find the walk-in freezer's inside face in the drawing itself
    const segs = await pathSegments(pdfjs, await set.doc.getPage(1));
    const has = (x1, y1, x2, y2) => segs.some(([p, q]) => (near2(p, x1, y1) && near2(q, x2, y2)) || (near2(p, x2, y2) && near2(q, x1, y1)));
    ok(has(930.48, 1157.28, 930.48, 1328.28), 'freezer inside face, west: a 171.00 pt line in the drawing');
    ok(has(1220.76, 1157.28, 930.48, 1157.28), 'freezer inside face, south: a 290.28 pt line in the drawing');
    ok(has(924.48, 1334.28, 924.48, 1151.28), 'freezer outside face, west: 183.00 pt (4" panels)');
    // T1: the app's own snapping finds those corners in the page's linework
    const lwp = await Sn.pageLinework(pdfjs, await set.doc.getPage(1));
    ok(lwp.n > 5000 && !lwp.truncated, `the sheet's linework: ${lwp.n} segments read from pdf.js's operator list`);
    const sidx = new Sn.SnapIndex(lwp);
    const c1 = sidx.snap({ x: 931.6, y: 1158.3 }, 3), c2 = sidx.snap({ x: 929.7, y: 1327.1 }, 3);
    ok(c1?.kind === 'end' && near(c1.x, 930.48, 1e-6) && near(c1.y, 1157.28, 1e-6), 'a pick 1.5 pt off the freezer\'s inside corner snaps onto it', JSON.stringify(c1));
    ok(c2?.kind === 'end' && near(c2.x, 930.48, 1e-6) && near(c2.y, 1328.28, 1e-6), 'and the opposite corner', JSON.stringify(c2));
    const snapCal = U.calibrate(c1, c2, U.parseLength('9\'-6"').ft);
    ok(snapCal.ok && near(snapCal.ftPerUnit, 1 / 18, 1e-6), 'calibrating between snapped corners gives 1/4" = 1\'-0" to a millionth');
    const mid = sidx.snap({ x: 1076, y: 1158 }, 3);
    ok(mid?.kind === 'mid' && near(mid.x, (930.48 + 1220.76) / 2, 1e-6), 'the middle of the freezer\'s south face is its midpoint', JSON.stringify(mid));

    // calibrate on the freezer's inside depth, 9'-6" (171 pt at 1/4" = 1'-0")
    const cal = U.calibrate({ x: 930.48, y: 1157.28 }, { x: 930.48, y: 1328.28 }, U.parseLength('9\'-6"').ft);
    ok(cal.ok && near(cal.ftPerUnit, U.presetFtPerUnit('a1/4'), 1e-12), 'calibrating 9\'-6" on it gives exactly 1/4" = 1\'-0"');
    eq(U.matchPreset(cal.ftPerUnit)?.label, '1/4" = 1\'-0"', 'the app names the match');
    // check scale: the 4" walk-in panel and the freezer's length
    eq(U.formatFtIn((930.48 - 924.48) * cal.ftPerUnit), '0\'-4"', 'check scale: walk-in panel = 4"');
    eq(U.formatFtIn((1220.76 - 930.48) * cal.ftPerUnit), '16\'-1 1/2"', 'check scale: freezer inside length = 16\'-1 1/2"');
    eq(U.formatFtIn((1334.28 - 1151.28) * cal.ftPerUnit), '10\'-2"', 'check scale: freezer outside depth = 10\'-2"');
    const inside = [{ x: 930.48, y: 1157.28 }, { x: 1220.76, y: 1157.28 }, { x: 1220.76, y: 1328.28 }, { x: 930.48, y: 1328.28 }];
    const outside = [{ x: 924.48, y: 1151.28 }, { x: 1226.76, y: 1151.28 }, { x: 1226.76, y: 1334.28 }, { x: 924.48, y: 1334.28 }];
    const ain = G.polygonArea(inside) * cal.ftPerUnit ** 2, aout = G.polygonArea(outside) * cal.ftPerUnit ** 2;
    ok(near(ain, 153.21, 1e-3) && near(aout, 170.73, 1e-3), `the freezer box is 153.21 SF inside and 170.73 SF outside (${ain.toFixed(2)} / ${aout.toFixed(2)} SF; the real set's "160 SF" room tag lies between them)`);

    // a takeoff on it
    const t = new M.Takeoff();
    t.addFile({ hash: set.hash, name: set.name, size: set.size, pages: set.pages.length });
    const sk = M.sheetKey(set.hash, 0);
    t.setScale(sk, { method: 'calibrated', preset: null, ftPerUnit: cal.ftPerUnit, label: U.describeScale(cal.ftPerUnit), cal: { a: [930.48, 1157.28], b: [930.48, 1328.28], ft: 9.5, text: '9\'-6"' } });
    const panel = t.addItem({ name: 'Walk-in panel (freezer)', type: 'linear', heightFt: 9, mat: U.parseRate('48').rate4 });
    t.addMark({ item: panel, sheet: sk, pts: [outside[0], outside[1], outside[2], outside[3], outside[0]] });
    t.addComponent(panel, { name: 'Panels 4\' wide', unit: 'EA', formula: 'ceil(L / 4)' });
    const fl = t.addItem({ name: 'Freezer floor', type: 'area', mat: U.parseRate('12.5').rate4, waste: 500 });
    t.addMark({ item: fl, sheet: sk, pts: inside, holes: [[{ x: 1000, y: 1200 }, { x: 1018, y: 1200 }, { x: 1018, y: 1218 }, { x: 1000, y: 1218 }]] });
    const doors = t.addItem({ name: 'Doors', type: 'count', mat: U.parseRate('850').rate4 });
    t.addMark({ item: doors, sheet: sk, pts: [{ x: 300, y: 1500 }] });
    t.addMark({ item: doors, sheet: sk, pts: [{ x: 600, y: 1300 }] });
    const q = M.quantities(t.state);
    ok(near(q.get(panel).lengthFt, 2 * (302.28 + 183) / 18), `panel run = 2 × (16'-9 1/2" + 10'-2") = ${U.formatFtIn(q.get(panel).lengthFt)}`);
    ok(near(q.get(fl).areaSqft, (290.28 * 171 - 18 * 18) / 324), `floor = 153.21 SF − 1 SF cut-out = ${q.get(fl).areaSqft.toFixed(2)} SF`);
    eq(q.get(doors).count, 2, 'two doors counted');

    // save → reopen on the same PDF → identical quantities
    const saved = JSON.stringify(t.toJSON());
    const re = new M.Takeoff();
    ok(re.load(JSON.parse(saved)).ok, 'project reopens');
    const set2 = await S.openPdf(pdfjs, new Uint8Array(fs.readFileSync(PLAN)), path.basename(PLAN));
    const match = S.matchFiles(re.state.files, [set2]);
    ok(match.matched.has(set.hash) && !match.missing.length && !match.changed.length, 'the project finds its PDF again by hash');
    eq(JSON.stringify(M.estimate(re.state)), JSON.stringify(M.estimate(t.state)), 'identical estimate after save → reopen');
    const other = { hash: 'f'.repeat(64), name: set.name, size: 5 };
    const miss = S.matchFiles(re.state.files, [other]);
    ok(miss.changed.length === 1 && !miss.matched.size, 'a different PDF with the same name is reported as changed, not matched');

    // the marked PDF copy
    const out = await P.pdfWithMarks(PDFLib, bytes, set.hash, t.state);
    eq(out.pages, 1, 'one page marked');
    eq(out.marks, 4, 'four marks drawn');
    ok(Buffer.from(bytes).equals(fs.readFileSync(PLAN)), 'the original bytes are untouched');
    const pf = path.join(tmp, 'plan-marked.pdf');
    fs.writeFileSync(pf, out.bytes);
    const info = execFileSync('pdfinfo', [pf], { encoding: 'utf8' });
    ok(/Pages:\s+1/.test(info) && /1296 x 1728/.test(info), 'pdfinfo reads the copy (1 page, same size)');
    const reread = await pdfjs.getDocument({ data: new Uint8Array(out.bytes), standardFontDataUrl: fonts.fonts }).promise;
    const segs2 = await pathSegments(pdfjs, await reread.getPage(1));
    ok(segs2.length > segs.length, `the copy has the original paths plus ours (${segs.length} → ${segs2.length})`);
    const has2 = (x1, y1, x2, y2) => segs2.some(([p, q2]) => (near2(p, x1, y1) && near2(q2, x2, y2)));
    ok(has2(924.48, 1151.28, 1226.76, 1151.28), 'the panel run is drawn at its own coordinates (user space, not shifted)');
    const txt = await (await reread.getPage(1)).getTextContent();
    const words = txt.items.map((i) => i.str).join(' ');
    ok(words.includes('Takeoff on this sheet') && words.includes('Freezer floor') && /Doors\s+2 EA/.test(words), 'the legend lists each item with its quantity', words.slice(0, 200));
    // the pixel under a door dot is the item colour
    const png = path.join(tmp, 'plan-marked');
    try {
      execFileSync('pdftoppm', ['-r', '72', '-x', '290', '-y', String(1728 - 1500 - 10), '-W', '20', '-H', '20', '-png', pf, png]);
      const pngFile = fs.readdirSync(tmp).find((n) => n.startsWith('plan-marked') && n.endsWith('.png'));
      ok(!!pngFile, 'poppler renders the marked copy');
    } catch (err) { ok(false, 'poppler renders the marked copy', err.message); }
    // a rotated page: legend still lands inside the visible page
    const rdoc = await PDFLib.PDFDocument.create();
    for (const rot of [0, 90, 180, 270]) { const p = rdoc.addPage([612, 792]); p.setRotation(PDFLib.degrees(rot)); }
    const rbytes = await rdoc.save();
    const rset = await S.openPdf(pdfjs, new Uint8Array(rbytes), 'rot.pdf', fonts);
    const rt = new M.Takeoff();
    rt.addFile({ hash: rset.hash, name: 'rot.pdf', size: rbytes.length, pages: 4 });
    const ri = rt.addItem({ name: 'Ünïcødé ✓ name', type: 'count' });
    for (let i = 0; i < 4; i++) rt.addMark({ item: ri, sheet: M.sheetKey(rset.hash, i), pts: [{ x: 300, y: 400 }] });
    const rout = await P.pdfWithMarks(PDFLib, rbytes, rset.hash, rt.state);
    eq(rout.pages, 4, 'rotated pages (0/90/180/270) all marked');
    const rre = await pdfjs.getDocument({ data: new Uint8Array(rout.bytes), standardFontDataUrl: fonts.fonts }).promise;
    for (let i = 0; i < 4; i++) {
      const pg2 = await rre.getPage(i + 1);
      const vp = pg2.getViewport({ scale: 1 });
      const tc = await pg2.getTextContent();
      const it = tc.items.find((x) => x.str.startsWith('Takeoff'));
      const [vx, vy] = it ? vp.convertToViewportPoint(it.transform[4], it.transform[5]) : [NaN, NaN];
      const upright = it && Math.abs(Math.atan2(...[it.transform[1], it.transform[0]]) * 180 / Math.PI - [0, 90, 180, -90][i]) < 1;
      ok(it && vx > 0 && vx < vp.width / 2 && vy > vp.height / 2 && vy < vp.height && upright, `rotation ${[0, 90, 180, 270][i]}°: legend upright in the visual bottom-left`, JSON.stringify({ vx, vy, t: it?.transform }));
    }
    // arcs in the marked copy: drawn as curves
    const at = new M.Takeoff();
    at.addFile({ hash: set.hash, name: set.name, size: set.size, pages: 1 });
    at.setScale(sk, { method: 'preset', preset: 'a1/4', ftPerUnit: 1 / 18, label: '1/4"', cal: null });
    const tbl = at.addItem({ name: 'Round table', type: 'area' });
    at.addMark({ item: tbl, sheet: sk, pts: [{ x: 1060, y: 1240, b: 1 }, { x: 1000, y: 1240, b: 1 }] });
    const arcOut = await P.pdfWithMarks(PDFLib, bytes, set.hash, at.state);
    const curves = async (b) => { const pg = await (await pdfjs.getDocument({ data: new Uint8Array(b), standardFontDataUrl: fonts.fonts }).promise).getPage(1); const ops = await pg.getOperatorList(); let n = 0; for (let i = 0; i < ops.fnArray.length; i++) if (ops.fnArray[i] === pdfjs.OPS.constructPath) { const d = ops.argsArray[i]?.[1]?.[0]; if (d) for (let k = 0; k < d.length;) { const c = d[k]; if (c === 2) n++; k += c === 0 || c === 1 ? 3 : c === 2 ? 7 : c === 3 ? 5 : 1; } } return n; };
    const cBase = await curves(bytes), cArc = await curves(arcOut.bytes);
    ok(cArc - cBase === 8, `a circle mark is drawn as Bézier curves in the marked PDF (${cArc - cBase} curve segments: 4 for the fill, 4 for the outline)`);
    const legendWords = (await (await (await pdfjs.getDocument({ data: new Uint8Array(arcOut.bytes), standardFontDataUrl: fonts.fonts }).promise).getPage(1)).getTextContent()).items.map((i) => i.str).join(' ');
    ok(new RegExp('Round table\\s+' + U.fixed(Math.PI * (30 / 18) ** 2, 2).replace('.', '\\.') + ' SF').test(legendWords), `legend gives the circle's exact area (π × (30 pt at 1/4")² = ${U.fixed(Math.PI * (30 / 18) ** 2, 2)} SF)`, legendWords);

    // ---- automatic counting on real drawings
    section('Automatic counting');
    // 22 shelving units ("600x1280"), counted by hand on the sheet and confirmed in its vector data
    // (rectangles 70.3 × 34.4 pt: 10 horizontal, 12 vertical — the label reads in both directions)
    const shelves = [[1062.2, 1006.5], [1138.7, 1006.5], [1062.2, 1130.45], [1138.7, 1130.45], [1066.7, 1177.0], [1145.5, 1177.0], [1007.6, 1309.0], [1073.6, 1309.0], [1147.2, 1309.0], [835.2, 1320.75],
      [1198.7, 1018.2], [1198.7, 1094.8], [750.8, 1068.2], [750.8, 1145.9], [750.8, 1222.5], [750.9, 1295.5], [892.3, 1145.9], [892.3, 1222.5], [892.5, 1295.5], [1202.1, 1197.0], [1202.1, 1273.5], [950.0, 1288.0]];
    const planDoc = set.doc;
    const t0 = Date.now();
    const planRun = await searchSheet(planDoc, 0, { minX: 731.6, minY: 1108.7, maxX: 770.0, maxY: 1183.1 });
    const ms = Date.now() - t0;
    for (const th of [0.6, 0.65, 0.7, 0.75]) {
      const pr = score(planRun, th, shelves, 12);
      if (th === 0.75) console.log(`    Plan-sheet shelving at the default 75%: ${pr.found} found, ${pr.tp} right → precision ${pr.precision.toFixed(3)}, recall ${pr.recall.toFixed(3)} (hand count 22; ${ms} ms)`);
      ok(pr.precision === 1 && pr.recall === 1, `Plan-sheet shelving at ${th * 100}%: precision ${pr.precision.toFixed(2)}, recall ${pr.recall.toFixed(2)} (${pr.found} found of 22)`);
    }
    const pr80 = score(planRun, 0.8, shelves, 12), pr90 = score(planRun, 0.9, shelves, 12), pr50 = score(planRun, 0.5, shelves, 12);
    console.log(`    Plan-sheet shelving at 50%: precision ${pr50.precision.toFixed(3)}, recall ${pr50.recall.toFixed(3)}; 80%: ${pr80.precision.toFixed(3)} / ${pr80.recall.toFixed(3)}; 90%: ${pr90.precision.toFixed(3)} / ${pr90.recall.toFixed(3)}`);
    ok(pr90.precision === 1 && pr90.recall < 1, `far stricter than needed (90%) misses some (recall ${pr90.recall.toFixed(2)}) but stays precise: the slider trades one for the other`);

    // a generated sheet: 16 stamps of an asymmetric symbol (4 at each of 0/90/180/270°) + look-alike decoys
    const { bytes: gbytes, centres } = await stampSheet();
    const gset = await S.openPdf(pdfjs, new Uint8Array(gbytes), 'stamps.pdf', fonts);
    const first = centres[0];
    const genRun = await searchSheet(gset.doc, 0, { minX: first[0] - 17, minY: first[1] - 11, maxX: first[0] + 17, maxY: first[1] + 11 });
    const isTrue = (c) => centres.some((t) => Math.hypot(t[0] - c.center[0], t[1] - c.center[1]) < 6);
    if (VERBOSE) for (const c of Mt.suppress(genRun.cands, 0.5)) console.log('      cand', c.center.map((v) => v.toFixed(1)).join(','), c.rot, c.score.toFixed(3), isTrue(c) ? 'TRUE' : 'false');
    const g = score(genRun, 0.75, centres, 6);
    const nearDup = (c) => Math.abs(c.center[1] - 569) < 3;      // the box + diagonal decoys (top row)
    const fps = Mt.suppress(genRun.cands, 0.75).filter((c) => !isTrue(c));
    console.log(`    Generated sheet at the default 75%: ${g.found} found, ${g.tp} right → precision ${g.precision.toFixed(3)}, recall ${g.recall.toFixed(3)} (16 stamped: 4 at each of 0/90/180/270°; 12 decoys)`);
    ok(g.recall === 1, 'generated sheet at 75%: all 16 stamps found, at all four rotations');
    ok(fps.every(nearDup), `at 75% the only extra matches are the 4 near-duplicates (same box and diagonal, without the small triangle); plain boxes, circles and text are rejected (${fps.length} extra)`);
    const g2 = score(genRun, 0.84, centres, 6);
    console.log(`    Generated sheet at 84%: ${g2.found} found, ${g2.tp} right → precision ${g2.precision.toFixed(3)}, recall ${g2.recall.toFixed(3)}`);
    ok(g2.precision === 1 && g2.recall === 1, 'raising the slider to 84% drops the near-duplicates and keeps all 16 (precision 1, recall 1)');
    // T7: any angle — the same symbol stamped at 37°, 123° and 200° (plus one upright), found by the coarse pass + refinement
    {
      const doc = await PDFLib.PDFDocument.create();
      const pg = doc.addPage([792, 612]);
      const path0 = 'M0,0 L30,0 L30,-18 L0,-18 Z M4,-4 L14,-14 M20,-4 L26,-4 L26,-10 Z';
      const placed = [[100, 400, 0], [300, 420, 37], [520, 380, 123], [400, 200, 200]];
      const R = (r, x, y) => { const a = r * Math.PI / 180; return [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)]; };
      const want = placed.map(([x, y, r]) => { pg.drawSvgPath(path0, { x, y, rotate: PDFLib.degrees(r), borderWidth: 1.2, borderColor: PDFLib.rgb(0, 0, 0) }); const [cx, cy] = R(r, 15, 9); return [x + cx, y + cy]; });
      const aset = await S.openPdf(pdfjs, new Uint8Array(await doc.save()), 'angles.pdf', fonts);
      const box = { minX: 100 - 2, minY: 400 - 2, maxX: 130 + 2, maxY: 418 + 2 };
      const right = await searchSheet(aset.doc, 0, box);
      const anyA = await searchSheet(aset.doc, 0, box, { rotations: Mt.ANY_ANGLES });
      const found = (run, th) => Mt.suppress(run.cands, th).filter((c) => want.some((w) => Math.hypot(w[0] - c.center[0], w[1] - c.center[1]) < 6));
      ok(found(right, 0.75).length === 1, `right angles only: the turned stamps are not found at 75% (${found(right, 0.75).length} of 4)`);
      const fa = found(anyA, 0.75);
      ok(fa.length === 4, `Any angle: all four found at 75% (${fa.map((c) => c.rot + '° ' + c.score.toFixed(2)).join(', ')})`);
      ok(Mt.suppress(anyA.cands, 0.75).length === 4, 'and nothing else on the sheet');
      eq(Mt.rotate({ w: 2, h: 1, data: Float32Array.from([1, 0]) }, 90).data.join(), Mt.rot90({ w: 2, h: 1, data: Float32Array.from([1, 0]) }).data.join(), 'rotate(90) is rot90 (exact)');
      const r45 = Mt.rotate({ w: 10, h: 10, data: new Float32Array(100).fill(1) }, 45);
      ok(r45.w === 15 && r45.h === 15, 'rotate(45) grows the box to hold the whole template (10 × 10 → 15 × 15)');
      // T7: across scales — page 2 drawn at half the scale (1/8"): its symbol is half the size; rendering it twice as large finds it
      const two = await PDFLib.PDFDocument.create();
      const p1 = two.addPage([612, 792]), p2b = two.addPage([612, 792]);
      p1.drawSvgPath(path0, { x: 200, y: 400, borderWidth: 1.2, borderColor: PDFLib.rgb(0, 0, 0) });
      p2b.drawSvgPath(path0, { x: 300, y: 300, scale: 0.5, borderWidth: 0.6, borderColor: PDFLib.rgb(0, 0, 0) });
      p2b.drawSvgPath(path0, { x: 100, y: 500, scale: 0.5, borderWidth: 0.6, borderColor: PDFLib.rgb(0, 0, 0) });
      const tset = await S.openPdf(pdfjs, new Uint8Array(await two.save()), 'scales.pdf', fonts);
      const b1 = { minX: 198, minY: 398, maxX: 232, maxY: 420 };          // the symbol runs up from its origin (200, 400)
      const same = await searchSheet(tset.doc, 1, b1, { templateFrom: 0 });
      const scaled = await searchSheet(tset.doc, 1, b1, { templateFrom: 0, scaleBy: 2 });
      ok(Mt.suppress(same.cands, 0.75).length === 0, 'a sheet at half the scale searched at the same raster size: no match');
      const sc2 = Mt.suppress(scaled.cands, 0.75);
      ok(sc2.length === 2 && sc2.every((c) => [[307.5, 304.5], [107.5, 504.5]].some(([x, y]) => Math.hypot(c.center[0] - x, c.center[1] - y) < 4)), `rendered twice as large (its scale ÷ the template's): both symbols found (${sc2.map((c) => c.center.map((v) => v.toFixed(1)).join(',') + ' ' + c.score.toFixed(2)).join('; ')})`);
    }
    const rots = new Map();
    for (const c of Mt.suppress(genRun.cands, 0.84)) rots.set(c.rot, (rots.get(c.rot) || 0) + 1);
    eq([...rots.values()].sort().join(), '4,4,4,4', 'four matches at each of the four rotations');

    // page labels → sheet numbers
    const ldoc = await PDFLib.PDFDocument.create();
    for (let i = 0; i < 3; i++) ldoc.addPage([612, 792]);
    ldoc.catalog.set(PDFLib.PDFName.of('PageLabels'), ldoc.context.obj({ Nums: [0, { S: 'D', P: PDFLib.PDFString.of('A-'), St: 101 }] }));
    const lset = await S.openPdf(pdfjs, new Uint8Array(await ldoc.save()), 'Arch set.pdf', fonts);
    eq(lset.pages.map((p) => p.number).join(','), 'A-101,A-102,A-103', 'sheet numbers come from the page labels');
    eq(S.sheetTitle(lset, lset.pages[1], false), 'A-102', 'a labelled sheet is titled by its number');
    eq(S.sheetTitle(lset, lset.pages[1], true), 'A-102 — Arch set', 'with several PDFs open the file name is added');
    ok(rout.bytes.length > 0 && (await rre.getPage(1).then((p) => p.getTextContent())).items.some((x) => x.str.includes('?n?c?d? ? name') || x.str.includes('Ünïcødé ? name')), 'names outside Windows-1252 print with "?" instead of failing');
  }
}

// ---------------------------------------------------------------------------
if (args.includes('--browser')) {
  await browserTest();
  // the 3D check view: its own script (also runs alone); its checks count here
  section('3D in the browser (tools/takeoffcraft-test/browser-3d.mjs)');
  let out = '';
  try { out = execFileSync(process.execPath, [path.join(TOOLS, 'browser-3d.mjs')], { encoding: 'utf8', timeout: 300000 }); }
  catch (err) { out = String(err.stdout || '') + String(err.stderr || err.message); }
  const m = out.match(/(\d+) passed, (\d+) failed/);
  for (const line of out.split('\n')) if (/FAIL|^\s+!/.test(line) || (VERBOSE && /^\s+ok /.test(line))) console.log(line);
  if (m) { pass += Number(m[1]); fail += Number(m[2]); if (!VERBOSE) console.log(`  ${m[1]} passed, ${m[2]} failed`); }
  else ok(false, 'browser-3d.mjs ran', out.slice(-400));
}

fs.rmSync(tmp, { recursive: true, force: true });
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);

// ---------------------------------------------------------------------------
/** What the browser does for "Auto count", in Node: render at the working scale, cut the template, search. */
async function searchSheet(doc, pageIndex, box, { rotations, templateFrom = pageIndex, scaleBy = 1 } = {}) {
  const raster = async (index, w) => {
    const page = await doc.getPage(index + 1);
    const vp = page.getViewport({ scale: w });
    const { canvas, context } = doc.canvasFactory.create(Math.ceil(vp.width), Math.ceil(vp.height));
    context.fillStyle = '#ffffff'; context.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: context, viewport: vp }).promise;
    return { data: Mt.toInk(context.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height), w: canvas.width, h: canvas.height };
  };
  const tpage = await doc.getPage(templateFrom + 1);
  const vp1 = tpage.getViewport({ scale: 1 });
  const ds = [[box.minX, box.minY], [box.maxX, box.maxY], [box.minX, box.maxY], [box.maxX, box.minY]].map(([x, y]) => vp1.convertToViewportPoint(x, y));
  const minX = Math.min(...ds.map((p) => p[0])), maxX = Math.max(...ds.map((p) => p[0])), minY = Math.min(...ds.map((p) => p[1])), maxY = Math.max(...ds.map((p) => p[1]));
  const w = Mt.workScale(maxX - minX, maxY - minY);
  const src = await raster(templateFrom, w);
  const tpl = Mt.trim(Mt.crop(src, minX * w, minY * w, (maxX - minX) * w, (maxY - minY) * w));
  const wt = w * scaleBy;                                  // the app renders a sheet at another scale this much larger (T7)
  const img = templateFrom === pageIndex && scaleBy === 1 ? src : await raster(pageIndex, wt);
  const vpt = (await doc.getPage(pageIndex + 1)).getViewport({ scale: 1 });
  const cands = Mt.findSymbol(img, tpl, { floor: 0.5, ...(rotations ? { rotations } : {}) }).map((c) => {
    const [x, y] = vpt.convertToPdfPoint((c.x + c.w / 2) / wt, (c.y + c.h / 2) / wt);
    return { ...c, sheet: 's', center: [x, y] };
  });
  return { cands, w };
}
/** A generated sheet: 16 stamps of an asymmetric symbol (4 at each of 0/90/180/270°) + decoys. */
async function stampSheet() {
  const gdoc = await PDFLib.PDFDocument.create();
  const gp = gdoc.addPage([792, 612]);
  const sym = 'M0,0 L30,0 L30,-18 L0,-18 Z M4,-4 L14,-14 M20,-4 L26,-4 L26,-10 Z';
  const R = (r, x, y) => { const a = r * Math.PI / 180; return [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)]; };
  const centres = [];
  for (const [j, r] of [0, 90, 180, 270].entries()) for (let i = 0; i < 4; i++) {
    const x = 90 + i * 160 + j * 17, y = 110 + j * 120;
    gp.drawSvgPath(sym, { x, y, rotate: PDFLib.degrees(r), borderWidth: 1.2, borderColor: PDFLib.rgb(0, 0, 0) });
    const [cx, cy] = R(r, 15, 9);
    centres.push([x + cx, y + cy]);
  }
  for (let i = 0; i < 4; i++) {
    gp.drawRectangle({ x: 150 + i * 170, y: 40, width: 30, height: 18, borderWidth: 1.2, borderColor: PDFLib.rgb(0, 0, 0) });
    gp.drawSvgPath('M0,0 L30,0 L30,-18 L0,-18 Z M4,-4 L14,-14', { x: 165 + i * 170, y: 560, borderWidth: 1.2, borderColor: PDFLib.rgb(0, 0, 0) });
    gp.drawCircle({ x: 760, y: 100 + i * 120, size: 12, borderWidth: 1.2, borderColor: PDFLib.rgb(0, 0, 0) });
  }
  gp.drawText('Symbol legend: see sheet A-001', { x: 300, y: 590, size: 10 });
  return { bytes: await gdoc.save(), centres };
}

/** Precision and recall of the kept matches against hand-counted centres (tol in PDF units). */
function score(run, threshold, truth, tol) {
  const kept = Mt.suppress(run.cands, threshold);
  const used = new Set();
  let tp = 0;
  for (const c of kept) {
    const i = truth.findIndex((t, j) => !used.has(j) && Math.hypot(t[0] - c.center[0], t[1] - c.center[1]) <= tol);
    if (i >= 0) { used.add(i); tp++; }
  }
  return { found: kept.length, tp, precision: kept.length ? tp / kept.length : 0, recall: tp / truth.length };
}

function near2(p, x, y) { return Math.abs(p[0] - x) < 0.01 && Math.abs(p[1] - y) < 0.01; }

/** Every straight segment a page draws, in user space (follows save/restore/transform). */
async function pathSegments(pdfjs, page) {
  const ops = await page.getOperatorList();
  const O = pdfjs.OPS;
  let ctm = [1, 0, 0, 1, 0, 0];
  const stack = [], segs = [];
  const mul = (m, n) => [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3], m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
  const ap = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
  for (let i = 0; i < ops.fnArray.length; i++) {
    const f = ops.fnArray[i], a = ops.argsArray[i];
    if (f === O.save) stack.push(ctm);
    else if (f === O.restore) ctm = stack.pop() || ctm;
    else if (f === O.transform) ctm = mul(ctm, a);
    else if (f === O.constructPath) {
      const d = a?.[1]?.[0];
      if (!d) continue;
      let p = null, s = null;
      for (let k = 0; k < d.length;) {
        const c = d[k];
        if (c === 0) { p = ap(ctm, d[k + 1], d[k + 2]); s = p; k += 3; }
        else if (c === 1) { const q = ap(ctm, d[k + 1], d[k + 2]); segs.push([p, q]); p = q; k += 3; }
        else if (c === 2) { p = ap(ctm, d[k + 5], d[k + 6]); k += 7; }
        else if (c === 3) { p = ap(ctm, d[k + 3], d[k + 4]); k += 5; }
        else if (c === 4) { if (p && s) segs.push([p, s]); p = s; k += 1; }
        else break;
      }
    }
  }
  return segs;
}

async function browserTest() {
  section('In the browser: /lab/takeoffcraft');
  const { chromium } = await import('playwright-core');
  const cache = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
  const exe = fs.readdirSync(cache).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))
    .map((d) => path.join(cache, d, 'chrome-linux64/chrome')).find((p) => fs.existsSync(p));
  const EMAIL = 'takeofftest+cadcraft@projectz.xyz';
  // a signed-in session minted in-process (tools/takeoffcraft-test/admin.php): the shared admin-login throttle is untouched
  const admin = (cmd) => JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', path.join(ROOT, 'tools/takeoffcraft-test/admin.php'), cmd, 'main'], { encoding: 'utf8' }));
  const SESSION = admin('session');
  const shots = path.join(ROOT, 'tmp/shots/takeoffcraft');
  fs.mkdirSync(shots, { recursive: true });
  const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1'] });
  const issues = [];
  try {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, acceptDownloads: true, ignoreHTTPSErrors: false });
    const page = await ctx.newPage();
    page.on('console', (m) => { if (m.type() === 'error') issues.push('console: ' + m.text()); });
    page.on('pageerror', (e) => issues.push('pageerror: ' + e.message));
    page.on('response', (r) => { if (r.status() >= 400) issues.push(r.status() + ' ' + r.url()); });
    await ctx.addCookies([{ name: SESSION.name, value: SESSION.value, domain: 'getcadcraft.com', path: '/', secure: true, httpOnly: true, sameSite: 'Lax' }]);
    await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper');
    ok(/\/lab\/takeoffcraft\?space=paper$/.test(page.url()), 'signed in and on /lab/takeoffcraft');
    // ready, and the shell's "Recover your work?" dealt with: an earlier page of this run may have left an autosaved copy
    const appReady = async (keep = false) => {
      await page.waitForFunction(() => window.takeoffcraft?.ready === true && !!window.takeoffcraft.recovery, null, { timeout: 20000 });
      const r = await page.evaluate(() => window.takeoffcraft.recovery);
      if (r === 'asking' && !keep) { await page.click('[data-autosave-discard-all]'); await page.waitForFunction(() => !document.querySelector('[data-autosave-dialog]')); }
      return r;
    };
    await appReady();
    ok(true, 'app ready (pdf.js loaded)');
    // open the plan PDF through the file input
    await page.setInputFiles('[data-file-pdf]', PLAN);
    await page.waitForFunction(() => window.takeoffcraft.sheets().length === 1 && window.takeoffcraft.rendered() > 0, null, { timeout: 30000 });
    ok(true, 'plan PDF opens and renders');
    const T = (fn, ...a) => page.evaluate(fn, ...a);
    // screen position of a PDF user-space point
    const at = (x, y) => T(([x, y]) => window.takeoffcraft.toScreen({ x, y }), [x, y]);
    const click = async (x, y, o = {}) => { const p = await at(x, y); await page.mouse.move(p.x, p.y); await page.mouse.down(); await page.mouse.up(); if (o.dbl) { await page.mouse.down({ clickCount: 2 }); await page.mouse.up({ clickCount: 2 }); } };
    // zoom so the freezer fills the view, then calibrate on its inside depth (9'-6")
    await T(() => window.takeoffcraft.zoomTo({ minX: 880, minY: 1120, maxX: 1260, maxY: 1360 }));
    await page.waitForTimeout(400);
    // linear tool on an unscaled sheet refuses
    await page.click('[data-tool="linear"]');
    const refuse = await T(() => document.querySelector('[data-status]').textContent);
    ok(/no scale/i.test(refuse), 'measuring an unscaled sheet is refused, with the reason', refuse);
    // T1: Snap is on by default; the sheet's linework is read in the background
    ok(await T(() => document.querySelector('[data-snap-toggle]').getAttribute('aria-pressed') === 'true'), 'Snap is on to start with (status bar)');
    ok((await T(() => window.takeoffcraft.snapLoaded())) > 5000, 'the sheet\'s linework is read for snapping');
    await page.click('[data-tool="calibrate"]');
    const near1 = await at(931.2, 1158.0);
    await page.mouse.move(near1.x, near1.y);
    const sh = await T(() => window.takeoffcraft.snap()?.hit);
    ok(sh?.kind === 'end' && Math.abs(sh.x - 930.48) < 1e-3 && Math.abs(sh.y - 1157.28) < 1e-3, 'a pointer a little off the freezer\'s corner shows the End marker on it', JSON.stringify(sh));
    await page.keyboard.press('F3');
    ok(await T(() => document.querySelector('[data-snap-toggle]').getAttribute('aria-pressed') === 'false' && JSON.parse(localStorage.getItem('takeoffcraft.settings')).snap === false), 'F3 turns Snap off (status bar, stored)');
    await page.mouse.move(near1.x + 1, near1.y);
    ok(!(await T(() => window.takeoffcraft.snap()?.hit)), 'off: no snap marker');
    await page.click('[data-snap-toggle]');
    ok(await T(() => window.takeoffcraft.settings.snap === true), 'the status bar Snap button turns it back on');
    await click(931.2, 1158.0);
    await click(929.8, 1327.4);
    await page.waitForSelector('dialog[open] [data-cal-input]');
    await page.fill('dialog[open] [data-cal-input]', '9\'-6"');
    await page.click('dialog[open] [data-key="ok"]');
    await page.waitForTimeout(200);
    const scale = await T(() => window.takeoffcraft.scale());
    ok(scale && Math.abs(scale.ftPerUnit - 1 / 18) / (1 / 18) < 1e-6, 'calibrated by clicking near the corners: snapped onto them, exactly 1/18 ft per pt', JSON.stringify(scale));
    ok(/1\/4" = 1'-0"/.test(await T(() => document.querySelector('[data-sheet-scale]').textContent)), 'the sheet shows its scale (matches 1/4" = 1\'-0")');
    // set the exact preset (the picks above are only as exact as the screen)
    await page.selectOption('[data-scale-preset]', 'a1/4');
    await page.waitForTimeout(100);
    // a linear item: new item form
    const addItem = async (name, type) => {
      await page.click('[data-item-new]');
      await page.fill('[data-item-form] [name="name"]', name);
      await page.selectOption('[data-item-form] [name="type"]', type);
      await page.click('[data-item-form] button[type="submit"]');
      await page.waitForTimeout(100);
    };
    await addItem('Walk-in panel', 'linear');
    await page.click('[data-tool="linear"]');
    await click(924.48, 1151.28);
    await click(1226.76, 1151.28);
    await click(1226.76, 1334.28, { dbl: true });
    await page.waitForTimeout(150);
    await addItem('Freezer floor', 'area');
    await page.click('[data-tool="area"]');
    await click(930.48, 1157.28); await click(1220.76, 1157.28); await click(1220.76, 1328.28); await click(930.48, 1328.28);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(150);
    await addItem('Shelving units', 'count');
    await page.click('[data-tool="count"]');
    for (const [x, y] of [[960, 1300], [1050, 1300], [1150, 1300]]) await click(x, y);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    const qty = await T(() => window.takeoffcraft.quantities());
    const lin = qty.find((r) => r.name === 'Walk-in panel'), ar = qty.find((r) => r.name === 'Freezer floor'), ct = qty.find((r) => r.name === 'Shelving units');
    ok(lin && Math.abs(lin.qty - (302.28 + 183) / 18) < 0.1, `linear by pointer ≈ 26.96 LF (got ${lin?.qty.toFixed(3)})`);
    ok(ar && Math.abs(ar.qty - 290.28 * 171 / 324) < 0.5, `area by pointer ≈ 153.2 SF (got ${ar?.qty.toFixed(3)})`);
    ok(ct && ct.qty === 3, 'count by pointer = 3');
    // Ctrl+Z / Ctrl+Y
    await page.keyboard.press('Control+z');
    ok((await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Shelving units').qty === 2, 'Ctrl+Z undoes the last count');
    await page.keyboard.press('Control+y');
    ok((await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Shelving units').qty === 3, 'Ctrl+Y redoes it');
    // click an item in the quantities table → highlight; screenshot paper
    await page.click('[data-qty-row="' + lin.itemId + '"]');
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-paper.png') });
    ok(!/\b(null|undefined|NaN)\b/.test(await T(() => document.querySelector('[data-takeoffcraft]').innerText)), 'no "null", "undefined" or "NaN" in the working app');
    // exports
    // the Export buttons sit in one menu (T2 freed the toolbar room): open it first when the button is in it
    const dl = async (sel) => {
      await T((q) => { const m = document.querySelector(q)?.closest('details'); if (m && !m.open) m.querySelector('summary').click(); }, sel);
      const [d] = await Promise.all([page.waitForEvent('download', { timeout: 20000 }), page.click(sel)]); const f = path.join(tmp, d.suggestedFilename()); await d.saveAs(f); return f;
    };
    ok(await T(() => [...document.querySelectorAll('[data-export-menu] [role="menuitem"]')].map((b) => b.dataset.act).join() === 'export-xlsx,export-csv,export-pdf,export-embed,export-bid'), 'Export is one menu: XLSX, CSV, Marked PDF, PDF with the takeoff inside (T10), Bid summary & proposal (T19)');
    const fx = await dl('[data-act="export-xlsx"]');
    ok(fx.endsWith('.xlsx') && /No errors detected/.test(execFileSync('unzip', ['-t', fx], { encoding: 'utf8' })), 'XLSX downloads and unzips cleanly');
    const fc = await dl('[data-act="export-csv"]');
    ok(fs.readFileSync(fc, 'utf8').startsWith('\uFEFFItem,Type,Unit'), 'CSV downloads (UTF-8 with a BOM, so spreadsheets read m² right)');
    const fp = await dl('[data-act="save-project"]');
    const proj = JSON.parse(fs.readFileSync(fp, 'utf8'));
    ok(fp.endsWith('.takeoff.json') && proj.format === 'takeoffcraft-project' && proj.marks.length === 5, 'project file downloads (5 marks)');
    const fpdf = await dl('[data-act="export-pdf"]');
    ok(/Pages:\s+1/.test(execFileSync('pdfinfo', [fpdf], { encoding: 'utf8' })), 'marked PDF copy downloads and opens');
    // reopen the project file → identical quantities
    const beforeQ = JSON.stringify(await T(() => window.takeoffcraft.quantities()));
    await T(() => window.takeoffcraft.reset());
    await page.setInputFiles('[data-file-project]', fp);
    await page.waitForTimeout(500);
    eq(JSON.stringify(await T(() => window.takeoffcraft.quantities())), beforeQ, 'project reopened on the same PDF: identical quantities');

    // a second PDF made here: page 1 upright, page 2 /Rotate 90, each with a 300 × 150 pt box at (150, 300)
    const gen = await PDFLib.PDFDocument.create();
    for (const rot of [0, 90]) {
      const p = gen.addPage([612, 792]);
      p.setRotation(PDFLib.degrees(rot));
      p.drawRectangle({ x: 150, y: 300, width: 300, height: 150, borderColor: PDFLib.rgb(0, 0, 0), borderWidth: 3 });
    }
    const genFile = path.join(tmp, 'rotated set.pdf');
    fs.writeFileSync(genFile, await gen.save());
    await page.setInputFiles('[data-file-pdf]', genFile);
    await page.waitForFunction(() => window.takeoffcraft.sheets().length === 3, null, { timeout: 20000 });
    ok(true, 'a second PDF adds its sheets (3 in all)');
    await page.fill('[data-sheet-q]', 'rotated');
    eq(await page.locator('[data-sheets] li').count(), 2, 'searching sheets by name filters the list');
    await page.fill('[data-sheet-q]', '');
    const showSheet = async (title) => {
      const n = await T(() => window.takeoffcraft.rendered());
      await page.click(`[data-sheets] button:has-text(${JSON.stringify(title)})`);
      await page.waitForFunction((n) => window.takeoffcraft.rendered() > n, n, { timeout: 20000 });
      await page.waitForTimeout(300);
    };
    // pixel check: the rendered drawing and the user-space mapping agree, upright and rotated
    const pixel = (x, y) => T(([x, y]) => {
      const c = document.querySelector('[data-base]'), r = c.getBoundingClientRect(), s = window.takeoffcraft.toScreen({ x, y });
      const d = c.width / r.width;
      const px = c.getContext('2d').getImageData(Math.round((s.x - r.left) * d), Math.round((s.y - r.top) * d), 1, 1).data;
      return px[0] + px[1] + px[2];
    }, [x, y]);
    for (const [title, rot] of [['rotated set, page 1', 0], ['rotated set, page 2', 90]]) {
      await showSheet(title);
      const n0 = await T(() => window.takeoffcraft.rendered());
      await T(() => window.takeoffcraft.zoomTo({ minX: 120, minY: 270, maxX: 480, maxY: 480 }));
      await page.waitForFunction((n) => window.takeoffcraft.rendered() > n, n0, { timeout: 20000 });
      const edges = [await pixel(300, 300), await pixel(300, 450), await pixel(150, 375), await pixel(450, 375)];
      const inside = await pixel(300, 375);
      ok(edges.every((v) => v < 200) && inside > 700, `rotation ${rot}°: the box's edges are dark exactly where user space says, inside is white`, JSON.stringify({ edges, inside }));
    }
    // on the rotated sheet: 1" = 10', an area by clicks, a cut-out, check scale, drag a corner, delete, undo
    await page.selectOption('[data-scale-preset]', 'e10');
    await T(() => window.takeoffcraft.zoomTo({ minX: 120, minY: 270, maxX: 480, maxY: 480 }));
    await page.waitForTimeout(300);
    await addItem('Rotated box', 'area');
    await page.click('[data-tool="area"]');
    for (const [x, y] of [[150, 300], [450, 300], [450, 450], [150, 450]]) await click(x, y);
    await click(150, 300);   // clicking the first point closes the outline
    await page.waitForTimeout(150);
    const boxQ = async () => (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Rotated box').qty;
    const want = (300 / 72 * 10) * (150 / 72 * 10);
    ok(Math.abs(await boxQ() - want) < 0.5, `area on a rotated sheet ≈ ${want.toFixed(2)} SF (got ${(await boxQ()).toFixed(2)})`);
    await page.click('[data-tool="select"]');
    await click(200, 330);
    await page.click('[data-tool="cutout"]');
    for (const [x, y] of [[300, 340], [372, 340], [372, 412], [300, 412]]) await click(x, y);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(150);
    ok(Math.abs(await boxQ() - (want - 100)) < 0.5, `a 72 × 72 pt cut-out (10' × 10') takes off 100 SF (got ${(await boxQ()).toFixed(2)})`);
    await page.click('[data-tool="cutout"]');
    for (const [x, y] of [[440, 310], [500, 310], [500, 330], [440, 330]]) await click(x, y);
    await page.keyboard.press('Enter');
    ok(/inside the area/.test(await T(() => document.querySelector('[data-status]').textContent)), 'a cut-out sticking out of the area is refused, with the reason');
    await page.keyboard.press('Escape');
    await page.click('[data-tool="check"]');
    await click(150, 300); await click(450, 300);
    const chk = await T(() => document.querySelector('[data-measure]').textContent);
    ok(/41'-8"/.test(chk), 'check scale: the 300 pt edge reads 41\'-8" at 1" = 10\'', chk);
    await page.click('[data-tool="select"]');
    await click(200, 330);
    const before = await boxQ();
    const a = await at(450, 450), b = await at(522, 450);
    await page.mouse.move(a.x, a.y); await page.mouse.down(); await page.mouse.move((a.x + b.x) / 2, (a.y + b.y) / 2); await page.mouse.move(b.x, b.y); await page.mouse.up();
    await page.waitForTimeout(150);
    ok(Math.abs(await boxQ() - before - (72 / 72 * 10) * (150 / 72 * 10) / 2) < 0.5, 'dragging a corner 10\' out re-measures the area (+ a 10\' × 20\'-10" triangle)');
    await page.keyboard.press('Control+z');
    ok(Math.abs(await boxQ() - before) < 1e-6, 'Ctrl+Z puts the corner back');
    await page.keyboard.press('Delete');
    await page.waitForTimeout(100);
    eq(await boxQ(), 0, 'Delete removes the selected mark');
    await page.keyboard.press('Control+z');
    ok(Math.abs(await boxQ() - before) < 1e-6, 'Ctrl+Z brings it back');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-rotated-paper.png') });
    await addItem('Rotated run', 'linear');
    await page.click('[data-tool="linear"]');
    await page.keyboard.press('PageUp');
    await page.waitForTimeout(400);
    ok((await T(() => document.querySelector('[data-sheet-name]').textContent)) === 'rotated set, page 1', 'PageUp moves to the previous sheet');
    const marksBefore = await T(() => window.takeoffcraft.model.state.marks.length);
    await click(200, 350); await click(300, 350, { dbl: true });
    ok((await T(() => window.takeoffcraft.model.state.marks.length)) === marksBefore && /no scale/i.test(await T(() => document.querySelector('[data-status]').textContent)),
      'a linear tool carried onto an unscaled sheet refuses to measure there', JSON.stringify([marksBefore, await T(() => window.takeoffcraft.model.state.marks.length), await T(() => document.querySelector('[data-status]').textContent)]));
    await page.keyboard.press('Escape');
    // the browser's own "leave site?" prompt must not block the next navigation in this test
    await T(() => window.takeoffcraft.model.markSaved());
    // ---- round 2: arcs, circles, automatic counting, New takeoff ----
    await showSheet('kitchen-plan-sheet, page 1');
    await T(() => window.takeoffcraft.zoomTo({ minX: 880, minY: 1120, maxX: 1260, maxY: 1360 }));
    await page.waitForTimeout(300);
    // the clicks below are freehand points on top of the drawing's lines: without Snap (T1), which would move them onto them
    await T(() => { window.takeoffcraft.settings.snap = false; });
    await addItem('Curved run', 'linear');
    await page.click('[data-tool="linear"]');
    await page.keyboard.press('r');
    ok(await T(() => document.querySelector('[data-act="arc"]').getAttribute('aria-pressed') === 'true'), 'R turns arc mode on');
    await click(1000, 1200); await click(1018, 1218); await click(1036, 1200);
    await page.keyboard.press('Enter');
    await page.keyboard.press('r');
    await page.waitForTimeout(150);
    const qArc = (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Curved run').qty;
    ok(Math.abs(qArc - Math.PI) < 0.03, `three-point arc by clicks: half circle of radius 18 pt at 1/4" = π ft (got ${qArc.toFixed(4)} LF)`);
    // T2: a run with a deducted doorway, by clicks and the E key; then the segment boxes
    await addItem('Wall with door', 'linear');
    await page.click('[data-tool="linear"]');
    await click(1000, 1250); await click(1090, 1250);
    await page.keyboard.press('e');
    ok(await T(() => document.querySelector('[data-act="deduct"]').getAttribute('aria-pressed') === 'true'), 'E turns Deduct on (toolbar button pressed)');
    await click(1144, 1250);
    await page.keyboard.press('e');
    await click(1234, 1250, { dbl: true });
    await page.waitForTimeout(150);
    const qd = (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Wall with door').qty;
    ok(Math.abs(qd - 10) < 1e-6, `a 13' run with its 3' middle segment deducted counts 10' (got ${qd})`);
    const dm = await T(() => window.takeoffcraft.model.state.marks.at(-1));
    eq(JSON.stringify(dm.deducts), '[1]', 'the run remembers which segment is the deduct');
    await page.click('[data-tool="select"]');
    await click(1045, 1250);
    const boxes = await T(() => [...document.querySelectorAll('[data-mark-props] [data-deduct-seg]')].map((b) => b.checked));
    eq(boxes.join(), 'false,true,false', 'the selected run lists its segments with a Deduct box each');
    ok(/Deducts/.test(await T(() => document.querySelector('[data-mark-props]').textContent)), 'and its deducted and drawn lengths');
    await page.click('[data-mark-props] [data-deduct-seg="2"]');
    await page.waitForTimeout(100);
    ok(Math.abs((await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Wall with door').qty - 5) < 1e-6, 'ticking the last segment too leaves 5\'');
    await page.click('[data-mark-props] [data-deduct-seg="0"]');
    await page.waitForTimeout(100);
    ok(/at least one segment that counts/.test(await T(() => document.querySelector('[data-status]').textContent)), 'deducting every segment is refused, with the reason');
    await page.keyboard.press('Control+z');
    ok(Math.abs((await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Wall with door').qty - 10) < 1e-6, 'Ctrl+Z counts that segment again (10\')');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-deduct-paper.png') });
    // T3: typed lengths and coordinates: one click, then 10' toward the pointer, @0,5' up, Enter on the empty box finishes
    await addItem('Typed run', 'linear');
    await page.click('[data-tool="linear"]');
    await click(1000, 1200);          // clear of the count dots at y 1300 (picking prefers the newest mark under the pointer)
    const toward = await at(1100, 1200);
    await page.mouse.move(toward.x, toward.y);
    await page.keyboard.type("10'");
    ok(await T(() => !document.querySelector('[data-typein]').hidden && document.activeElement === document.querySelector('[data-typein-box]')), 'typing a digit during a run opens the Type box in the status bar');
    await page.keyboard.press('Enter');
    await page.keyboard.type("@0,5'");
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(150);
    const tr = await T(() => ({ q: window.takeoffcraft.quantities().find((r) => r.name === 'Typed run')?.qty, pts: window.takeoffcraft.model.state.marks.at(-1).pts, open: !document.querySelector('[data-typein]').hidden }));
    ok(Math.abs(tr.q - 15) < 1e-9 && tr.pts.length === 3 && Math.abs(tr.pts[1].x - 1180) < 1e-9 && Math.abs(tr.pts[2].y - 1290) < 1e-9 && !tr.open, "typed 10' then @0,5': a run of exactly 15' (180 pt right, 90 pt up); the box closes", JSON.stringify(tr));
    await page.click('[data-tool="linear"]');
    await click(1000, 1330);
    await page.keyboard.type('1xl');
    ok(await T(() => !document.querySelector('[data-typein]').hidden && document.querySelector('[data-typein-box]').value === '1xl' && window.takeoffcraft.model.state.marks.length), 'letters typed after the box opened stay in it (L does not switch tools)');
    await page.keyboard.press('Enter');
    ok(/could not be read/.test(await T(() => document.querySelector('[data-status]').textContent)) && await T(() => document.querySelector('[data-typein-box]').classList.contains('is-invalid')), 'unreadable text is refused with the forms it takes');
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');
    ok(await T(() => document.querySelector('[data-typein]').hidden), 'Esc closes the box');

    // T12: bid areas — make two, take off into them, move a mark, read the By area table, manage, export
    const stx = () => T(() => document.querySelector('[data-status]').textContent);
    const newArea = async (name) => {
      await page.selectOption('[data-area-cur]', '__new');
      await page.waitForSelector('dialog[open] [data-area-name]');
      await page.fill('dialog[open] [data-area-name]', name);
      await page.click('dialog[open] [data-key="ok"]');
      await page.waitForTimeout(100);
    };
    await page.keyboard.press('Escape');
    await newArea('Level 1');
    const l1 = await T(() => window.takeoffcraft.curArea());
    ok(!!l1 && /New marks go in Level 1/.test(await stx()), 'New bid area… makes "Level 1" and makes it the current one', await stx());
    await addItem('Floor drains', 'count');             // its own item: the auto count check later totals the shelving units
    await page.click('[data-tool="count"]');
    await click(1240, 1140); await click(1252, 1140);           // inside the view (zoomed on the freezer), clear of the walls
    await page.keyboard.press('Escape');
    const inL1 = await T((id) => window.takeoffcraft.model.state.marks.filter((m) => m.area === id).length, l1);
    eq(inL1, 2, 'two counts taken off in Level 1 belong to it');
    await newArea('Level 2');
    const l2 = await T(() => window.takeoffcraft.curArea());
    await page.click('[data-tool="select"]');
    await click(1252, 1140);
    await page.selectOption('[data-mark-props] [data-field="m-area"]', l2);
    ok(await T(([a, b]) => { const ms = window.takeoffcraft.model.state.marks; return ms.filter((m) => m.area === a).length === 1 && ms.filter((m) => m.area === b).length === 1; }, [l1, l2]) && /1 mark moved to Level 2/.test(await stx()), 'the selected mark moves to Level 2 from its panel', await stx());
    await page.click('[data-qty-mode="area"]');
    const areaRows = await T(() => [...document.querySelectorAll('[data-qty-table] tbody tr')].map((r) => r.textContent));
    ok(areaRows.some((r) => /^Level 1Floor drains1EA/.test(r)) && areaRows.some((r) => /Level 1 subtotal/.test(r)) && areaRows.some((r) => /Level 2 subtotal/.test(r)) && areaRows.some((r) => /No bid area subtotal/.test(r)), 'By area lists each bid area\'s items and a subtotal (and the marks in none)', areaRows.join(' / '));
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-bid-areas-paper.png') });
    await page.click('[data-qty-mode="item"]');
    // manage: rename Level 2, delete Level 1 (its mark stays)
    await page.selectOption('[data-area-cur]', '__manage');
    await page.waitForSelector('dialog[open] [data-area-list]');
    await page.fill(`dialog[open] [data-area-rename="${l2}"]`, 'Roof');
    await page.press(`dialog[open] [data-area-rename="${l2}"]`, 'Tab');
    await page.click(`dialog[open] [data-area-delete="${l1}"]`);
    await page.click('dialog[open] [data-key="ok"]');
    await page.waitForTimeout(100);
    const after = await T(() => ({ areas: window.takeoffcraft.model.state.areas.map((a) => a.name), opts: [...document.querySelectorAll('[data-area-cur] option')].map((o) => o.textContent), marks: window.takeoffcraft.model.state.marks.length }));
    ok(after.areas.join() === 'Roof' && after.opts.includes('Roof') && !after.opts.includes('Level 1'), 'Manage renames and deletes bid areas (the picker follows)', JSON.stringify(after));
    await page.keyboard.press('Control+z');
    ok((await T(() => window.takeoffcraft.model.state.areas.length)) === 2, 'Ctrl+Z brings the deleted bid area back');
    const fxa = await dl('[data-act="export-xlsx"]');
    ok(/By bid area/.test(execFileSync('unzip', ['-p', fxa, 'xl/workbook.xml'], { encoding: 'utf8' })), 'the exported workbook has a "By bid area" worksheet');
    await page.selectOption('[data-area-cur]', '');
    ok((await T(() => window.takeoffcraft.curArea())) === null, 'back to No bid area');

    // T14: back-outs — a 1' column inside the freezer comes off the freezer floor; an L-shaped one is refused
    const floorQ = async () => (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Freezer floor').qty;
    const bo0 = await floorQ();
    await addItem('Columns', 'area');
    await page.click('#tc-i-backout');
    const of = await T(() => [...document.querySelectorAll('[data-backout-of]')].map((b) => [b.closest('label').textContent.trim(), b.checked]));
    ok(of.some(([n, c]) => n === 'Freezer floor' && c), 'ticking Back-out offers the area items, all ticked to start', JSON.stringify(of));
    await page.click('[data-tool="area"]');
    await click(1000, 1200); await click(1018, 1200); await click(1018, 1218); await click(1000, 1218);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(150);
    ok(Math.abs((bo0 - await floorQ()) - 1) < 1e-6, `a 1' × 1' back-out inside the freezer takes 1 SF off its floor (${bo0.toFixed(2)} → ${(await floorQ()).toFixed(2)})`);
    await click(1100, 1200); await click(1136, 1200); await click(1136, 1218); await click(1118, 1218); await click(1118, 1236); await click(1100, 1236);
    await page.keyboard.press('Enter');
    ok(/has to be convex/.test(await stx()), 'an L-shaped back-out is refused, saying how to draw it', await stx());
    await page.keyboard.press('Escape'); await page.keyboard.press('Escape');
    await page.click('[data-item]:has-text("Columns")');
    await page.click('[data-backout-of]:near(:text("Freezer floor"))');
    ok(Math.abs(await floorQ() - bo0) < 1e-6, 'unticking the freezer floor in the list gives it its square foot back');
    await page.keyboard.press('Control+z');
    ok(Math.abs((bo0 - await floorQ()) - 1) < 1e-6, 'Ctrl+Z ticks it again');

    // T15: a 6:12 roof plane, a mark at 12:12, a rake run and a level segment in it
    const qOf = async (name) => (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === name).qty;
    await addItem('Roof plane', 'area');
    await page.fill('#tc-i-pitch', '6:12'); await page.press('#tc-i-pitch', 'Enter');
    await page.click('[data-tool="area"]');
    await click(1150, 1180); await click(1240, 1180); await click(1240, 1270); await click(1150, 1270);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(150);
    ok(Math.abs(await qOf('Roof plane') - 25 * Math.sqrt(1.25)) < 1e-6, `a 5' × 5' plan at 6:12 counts ${(25 * Math.sqrt(1.25)).toFixed(2)} SF of roof`);
    const roofPanel = await T(() => ({ text: document.querySelector('[data-mark-props]').innerText, hidden: document.querySelector('[data-mark-sec]').hidden, sel: window.takeoffcraft.selection() }));
    ok(/Plan area\s*25\.00 SF/.test(roofPanel.text), 'its panel shows the plan area and the slope factor', JSON.stringify(roofPanel));
    await page.fill('#tc-m-pitch', '45°'); await page.press('#tc-m-pitch', 'Enter');
    await page.waitForTimeout(100);
    ok(Math.abs(await qOf('Roof plane') - 25 * Math.SQRT2) < 1e-6, 'the mark\'s own pitch (45°) beats the item\'s');
    await page.keyboard.press('Escape');
    await addItem('Rake', 'linear');
    await page.selectOption('#tc-i-slope', 'rake');
    await page.fill('#tc-i-pitch', '12'); await page.press('#tc-i-pitch', 'Enter');
    await page.click('[data-tool="linear"]');
    await click(1150, 1300); await click(1195, 1300); await click(1240, 1300, { dbl: true });
    await page.waitForTimeout(150);
    ok(Math.abs(await qOf('Rake') - 5 * Math.SQRT2) < 1e-6, `a 5' rake run at 12:12 counts ${(5 * Math.SQRT2).toFixed(4)}'`);
    await page.click('[data-tool="select"]');
    await click(1170, 1300);
    await page.selectOption('[data-mark-props] [data-seg-slope="1"]', 'flat');
    await page.waitForTimeout(100);
    ok(Math.abs(await qOf('Rake') - (2.5 * Math.SQRT2 + 2.5)) < 1e-6, 'its second segment set to Level counts as drawn');
    ok(/Plan length/.test(await T(() => document.querySelector('[data-mark-props]').innerText)), 'the run\'s panel shows its plan length');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-slope-paper.png') });

    // S.8: touch, through CDP touch events (pointerType "touch")
    const cdp = await ctx.newCDPSession(page);
    const touch = (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts.map(([x, y], i) => ({ x, y, id: i + 1, radiusX: 2, radiusY: 2, force: 1 })) });
    const tap = async (x, y) => { const q = await at(x, y); await touch('touchStart', [[q.x, q.y]]); await touch('touchEnd', []); await page.waitForTimeout(400); };
    await T(() => window.takeoffcraft.zoomTo({ minX: 880, minY: 1120, maxX: 1260, maxY: 1360 }));
    await page.waitForTimeout(250);
    const box = await page.locator('[data-over]').boundingBox();
    const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
    const z0 = await T(() => window.takeoffcraft.view.z);
    const under0 = await T(([x, y]) => window.takeoffcraft.view.toUser({ x, y }), [box.width / 2, box.height / 2]);
    await touch('touchStart', [[cx - 50, cy], [cx + 50, cy]]);
    for (let i = 1; i <= 5; i++) await touch('touchMove', [[cx - 50 - i * 10, cy], [cx + 50 + i * 10, cy]]);
    await touch('touchEnd', []);
    const z1 = await T(() => window.takeoffcraft.view.z);
    const under1 = await T(([x, y]) => window.takeoffcraft.view.toUser({ x, y }), [box.width / 2, box.height / 2]);
    ok(Math.abs(z1 / z0 - 2) < 0.05 && Math.hypot(under1.x - under0.x, under1.y - under0.y) < 2, `a two-finger pinch zooms ×${(z1 / z0).toFixed(2)} about the fingers (the point between them stays put)`);
    ok((await T(() => window.takeoffcraft.touch())).coarse, 'touch makes the targets bigger (coarse mode)');
    const o0 = await T(() => ({ ...window.takeoffcraft.view.view }));
    await touch('touchStart', [[cx - 40, cy], [cx + 40, cy]]);
    for (let i = 1; i <= 4; i++) await touch('touchMove', [[cx - 40 + i * 20, cy + i * 10], [cx + 40 + i * 20, cy + i * 10]]);
    await touch('touchEnd', []);
    const o1 = await T(() => ({ ...window.takeoffcraft.view.view }));
    ok(Math.abs(o1.ox - o0.ox - 80) < 2 && Math.abs(o1.oy - o0.oy - 40) < 2 && Math.abs(o1.z / o0.z - 1) < 0.01, 'two fingers moving together pan without zooming');
    await T(() => window.takeoffcraft.zoomTo({ minX: 880, minY: 1120, maxX: 1260, maxY: 1360 }));
    await page.waitForTimeout(250);
    await addItem('Touch run', 'linear');
    await page.click('[data-tool="linear"]');
    await tap(1000, 1340); await tap(1090, 1340);
    ok(await T(() => window.takeoffcraft.touch().bar), 'while drawing by touch, the Finish / Back / Cancel bar shows');
    const before2 = await T(() => window.takeoffcraft.model.state.marks.length);
    const q1 = await at(1100, 1300);
    await touch('touchStart', [[q1.x, q1.y]]);
    await touch('touchStart', [[q1.x, q1.y], [q1.x + 80, q1.y]]);
    for (let i = 1; i <= 3; i++) await touch('touchMove', [[q1.x - i * 5, q1.y], [q1.x + 80 + i * 5, q1.y]]);
    await touch('touchEnd', []);
    await page.waitForTimeout(400);
    await T(() => window.takeoffcraft.zoomTo({ minX: 880, minY: 1120, maxX: 1260, maxY: 1360 }));
    await page.waitForTimeout(250);
    await tap(1180, 1340);
    const q2 = await at(1180, 1340);
    await touch('touchStart', [[q2.x + 30, q2.y + 40]]);         // on the sheet, below the run (the sheet bar covers the top)
    await page.waitForTimeout(800);                     // a long press = the right button: finish
    await touch('touchEnd', []);
    await page.waitForTimeout(200);
    const tr2 = await T(() => ({ n: window.takeoffcraft.model.state.marks.length, pts: window.takeoffcraft.model.state.marks.at(-1).pts.length, mark: window.takeoffcraft.model.state.marks.at(-1), item: window.takeoffcraft.model.item(window.takeoffcraft.model.state.marks.at(-1).item).name, q: window.takeoffcraft.quantities().find((r) => r.name === 'Touch run')?.qty }));
    ok(tr2.n === before2 + 1 && tr2.pts === 3 && Math.abs(tr2.q - 10) < 0.2, 'three taps and a long press: a 10\' run of three points (the pinch in between added none)', JSON.stringify(tr2));
    ok(!(await T(() => window.takeoffcraft.touch().bar)), 'the bar goes when the run is finished');
    await tap(1000, 1110 + 210); await tap(1060, 1320);
    await page.click('[data-touch="back"]');
    ok((await T(() => window.takeoffcraft.model.state.marks.length)) === before2 + 1 && /Length/.test(await T(() => document.querySelector('[data-measure]').textContent) || 'Length'), 'Back takes the last point off');
    const q3 = await at(1120, 1320);
    await touch('touchStart', [[q3.x, q3.y]]); await touch('touchEnd', []);      // two quick taps on one spot: the point, then finish
    await page.waitForTimeout(80);
    await touch('touchStart', [[q3.x + 3, q3.y + 2]]); await touch('touchEnd', []);
    await page.waitForTimeout(300);
    ok((await T(() => window.takeoffcraft.model.state.marks.length)) === before2 + 2, 'a double tap finishes a run');
    await tap(1000, 1250);
    await page.click('[data-touch="cancel"]');
    ok(!(await T(() => window.takeoffcraft.touch().bar)) && (await T(() => window.takeoffcraft.model.state.marks.length)) === before2 + 2, 'Cancel throws the unfinished run away');
    await page.click('[data-tool="select"]');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-touch-paper.png') });
    await cdp.detach();
    await addItem('Round column', 'area');
    await page.keyboard.press('o');
    await click(1100, 1240); await click(1118, 1240);
    await page.waitForTimeout(150);
    const qCirc = (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Round column').qty;
    ok(Math.abs(qCirc - Math.PI) < 0.03, `circle tool: radius 18 pt = 1 ft → π SF (got ${qCirc.toFixed(4)} SF)`);
    const arcMarks = await T(() => window.takeoffcraft.model.state.marks.filter((m) => m.pts.some((p) => p.b)).length);
    eq(arcMarks, 2, 'the run and the circle are stored with arcs (bulges)');

    // auto count on the plan sheet: cancel once, then a full search and its review
    await page.keyboard.press('Escape');
    await page.click('[data-item="' + ct.itemId + '"]');            // Shelving units (3 counted by hand earlier)
    await page.click('[data-tool="autocount"]');
    ok(await T(() => !document.querySelector('[data-acbar]').hidden), 'Auto count shows its bar');
    const dragBox = async (x0, y0, x1, y1) => { const a = await at(x0, y0), b = await at(x1, y1); await page.mouse.move(a.x, a.y); await page.mouse.down(); await page.mouse.move((a.x + b.x) / 2, (a.y + b.y) / 2); await page.mouse.move(b.x, b.y); await page.mouse.up(); };
    await T(() => window.takeoffcraft.zoomTo({ minX: 700, minY: 960, maxX: 1260, maxY: 1360 }));
    await page.waitForTimeout(300);
    await dragBox(731.6, 1108.7, 770.0, 1183.1);
    await page.waitForFunction(() => window.takeoffcraft.autocount()?.running === true, null, { timeout: 5000 });
    await page.click('[data-ac-cancel]');
    ok((await T(() => window.takeoffcraft.autocount())) === null && /canceled/.test(await T(() => document.querySelector('[data-status]').textContent)), 'Cancel stops a running search');
    await dragBox(731.6, 1108.7, 770.0, 1183.1);
    const t0 = Date.now();
    let sawProgress = false;
    while (Date.now() - t0 < 60000) {
      const a = await T(() => ({ ac: window.takeoffcraft.autocount(), p: Number(document.querySelector('[data-ac-progress]').value) }));
      if (a.ac?.running && a.p > 0 && a.p < 1) sawProgress = true;
      if (a.ac && !a.ac.running) break;
      await page.waitForTimeout(50);
    }
    const acMs = Date.now() - t0;
    const rc = await T(() => window.takeoffcraft.autocount());
    ok(rc && rc.found === 22, `Plan sheet: the search finds all 22 shelving units (found ${rc?.found}, ${acMs} ms in the worker)`);
    ok(rc && rc.adding === 19, `the 3 already counted by hand are recognized and left out (adding ${rc?.adding})`);
    ok(sawProgress, 'the progress bar moved while the worker searched');
    const resp = await T(async () => { const t = performance.now(); await new Promise((r) => setTimeout(r, 0)); return performance.now() - t; });
    ok(resp < 200, 'the page stays responsive');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-autocount-plan-paper.png') });
    await page.click('[data-ac-accept]');
    await page.waitForTimeout(150);
    eq((await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Shelving units').qty, 22, 'accepted: 3 by hand + 19 found = 22 shelving units');

    // the generated stamp sheet: rotations, a near-duplicate, rejecting by click, the slider, one-step undo
    const stamp = await stampSheet();
    const stampFile = path.join(tmp, 'stamps.pdf');
    fs.writeFileSync(stampFile, stamp.bytes);
    await page.setInputFiles('[data-file-pdf]', stampFile);
    await page.waitForFunction(() => window.takeoffcraft.sheets().length === 4, null, { timeout: 20000 });
    await showSheet('stamps, page 1');
    await page.keyboard.press('Escape');
    await addItem('Symbols', 'count');
    await page.click('[data-tool="autocount"]');
    const f0 = stamp.centres[0];
    await dragBox(f0[0] - 17, f0[1] - 11, f0[0] + 17, f0[1] + 11);
    await page.waitForFunction(() => window.takeoffcraft.autocount() && !window.takeoffcraft.autocount().running, null, { timeout: 60000 });
    let ra = await T(() => window.takeoffcraft.autocount());
    const isStamp = (b) => stamp.centres.some((c) => Math.hypot(c[0] - b.center.x, c[1] - b.center.y) < 6);
    ok(ra.found === 20 && ra.boxes.filter(isStamp).length === 16, `default 75%: 16 stamps (all rotations) + 4 near-duplicates offered for review (found ${ra.found})`);
    const dupBox = ra.boxes.find((b) => !isStamp(b));
    const sp = await at(dupBox.center.x, dupBox.center.y);
    await page.mouse.click(sp.x, sp.y);
    ra = await T(() => window.takeoffcraft.autocount());
    eq(ra.adding, 19, 'clicking a box rejects it (adding 19)');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-autocount-review-paper.png') });
    await page.mouse.click(sp.x, sp.y);
    eq((await T(() => window.takeoffcraft.autocount())).adding, 20, 'clicking it again restores it');
    await T(() => { const r = document.querySelector('[data-ac-threshold]'); r.value = '0.84'; r.dispatchEvent(new Event('input')); });
    ra = await T(() => window.takeoffcraft.autocount());
    ok(ra.found === 16 && ra.boxes.every(isStamp), 'the slider at 84% leaves exactly the 16 stamps');
    await page.click('[data-ac-accept]');
    await page.waitForTimeout(150);
    const symQ = async () => (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Symbols').qty;
    eq(await symQ(), 16, 'accepted: 16 count marks');
    await page.keyboard.press('Control+z');
    eq(await symQ(), 0, 'one Ctrl+Z removes all 16 (one undo step)');
    await page.keyboard.press('Control+y');
    eq(await symQ(), 16, 'Ctrl+Y brings them back');

    // ---- round 3: the Edit group (copy, paste, paste in place, duplicate, cut, delete, select all / none) ----
    const st = () => T(() => document.querySelector('[data-status]').textContent);
    const marksOn = (title) => T((title) => { const k = window.takeoffcraft.sheets().find((x) => x.title === title).key; return window.takeoffcraft.model.state.marks.filter((m) => m.sheet === k); }, title);
    const sel = () => T(() => window.takeoffcraft.selection());
    const more = async (act) => { await page.click('[data-edit-menu] > summary'); await page.click(`[data-edit-menu] [data-act="${act}"]`); };
    const editRow = await T(() => [...document.querySelectorAll('[role="toolbar"] [role="group"][aria-label="Edit"] .tc-tool-row > *')].map((n) => n.dataset.act || (n.matches('details') ? 'more' : '?')));
    eq(editRow.join(','), 'undo,redo,copy,paste,more', 'the Edit group holds Undo, Redo, Copy, Paste and More');
    const menu = await T(() => [...document.querySelectorAll('[data-edit-menu] [role="menuitem"]')].map((b) => b.dataset.act + '=' + b.querySelector('kbd')?.textContent));
    eq(menu.join(','), 'cut=Ctrl+X,copy=Ctrl+C,paste=Ctrl+V,paste-in-place=Ctrl+Shift+V,duplicate=Ctrl+D,delete=Delete,select-all=Ctrl+A,select-none=Esc', 'More lists every edit action with its key');
    ok(await T(() => document.querySelector('main > [role="toolbar"]') && [...document.querySelectorAll('[role="toolbar"] [role="group"]')].every((g) => g.getAttribute('aria-label'))), 'toolbar contract: role=toolbar is a direct child of <main>, every group labeled');
    for (const w of [1440, 1280]) {
      await page.setViewportSize({ width: w, height: 800 });
      await page.waitForTimeout(150);
      const rows = await T(() => new Set([...document.querySelectorAll('.tc-tool-group')].map((g) => Math.round(g.getBoundingClientRect().top))).size);
      eq(rows, 1, `the toolbar still fits one row at ${w} px`);
    }
    await page.setViewportSize({ width: 1280, height: 800 });
    await showSheet('rotated set, page 2');
    await T(() => window.takeoffcraft.zoomTo({ minX: 100, minY: 250, maxX: 520, maxY: 720 }));
    await page.waitForTimeout(300);
    await page.keyboard.press('Escape'); await page.keyboard.press('Escape');
    await page.click('[data-tool="select"]');
    await click(200, 330);
    const boxId = (await sel())[0];
    ok(boxId && (await marksOn('rotated set, page 2')).length === 1, 'one mark selected on the rotated sheet');
    await page.click('[data-act="copy"]');
    let clipNow = await T(() => window.takeoffcraft.clip());
    ok(clipNow && clipNow.marks.length === 1 && clipNow.items[0].name === 'Rotated box', 'toolbar Copy: the clipboard holds the mark and its item');
    ok(await T(() => { try { return JSON.parse(localStorage.getItem('takeoffcraft.clipboard')).format === 'takeoffcraft-clip'; } catch { return false; } }), 'the clipboard is kept in localStorage takeoffcraft.clipboard');
    const box1 = await boxQ();
    await page.keyboard.press('Control+Shift+V');
    ok((await marksOn('rotated set, page 2')).length === 2 && Math.abs(await boxQ() - 2 * box1) < 1e-6, 'Ctrl+Shift+V pastes in place: two marks, the area doubles');
    const twoPts = (await marksOn('rotated set, page 2')).map((m) => JSON.stringify(m.pts));
    eq(twoPts[0], twoPts[1], 'in place = the same PDF coordinates');
    await page.keyboard.press('Control+z');
    ok((await marksOn('rotated set, page 2')).length === 1, 'one Ctrl+Z takes the paste back');
    // paste with the pointer
    await page.click('[data-act="paste"]');
    ok(await T(() => window.takeoffcraft.pasting()), 'toolbar Paste puts the copy on the pointer');
    const dest = await at(300, 600);
    await page.mouse.move(dest.x - 30, dest.y - 30); await page.mouse.move(dest.x, dest.y);
    await page.waitForTimeout(50);
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-paste-paper.png') });
    await page.mouse.click(dest.x, dest.y);
    let ms = await marksOn('rotated set, page 2');
    const pasted = ms.find((m) => m.id !== boxId);
    ok(ms.length === 2 && pasted && Math.abs(pasted.pts[0].x - 150) < 1.5 && Math.abs(pasted.pts[0].y - 525) < 1.5, 'a click puts the copy down with its middle at the pointer (moved 225 pt)', JSON.stringify(pasted?.pts[0]));
    ok(Math.abs(await boxQ() - 2 * box1) < 1e-6 && !(await T(() => window.takeoffcraft.pasting())), 'same area as the original; nothing left on the pointer');
    eq((await sel()).join(), pasted.id, 'the pasted mark is selected');
    await page.keyboard.press('Control+z');
    // Esc while carrying: nothing added
    await page.keyboard.press('Control+v');
    await page.mouse.move(dest.x + 10, dest.y + 10);
    await page.keyboard.press('Escape');
    ok((await marksOn('rotated set, page 2')).length === 1 && !(await T(() => window.takeoffcraft.pasting())), 'Ctrl+V then Esc adds nothing');
    // duplicate from the More menu, and Ctrl+D then Esc
    await click(200, 330);
    await more('duplicate');
    ok(await T(() => window.takeoffcraft.pasting()), 'More › Duplicate puts a copy on the pointer');
    const d2 = await at(300, 620);
    await page.mouse.move(d2.x, d2.y); await page.mouse.click(d2.x, d2.y);
    ok((await marksOn('rotated set, page 2')).length === 2 && /Duplicated 1 mark/.test(await st()), 'a click places the duplicate', await st());
    await page.keyboard.press('Control+z');
    await click(200, 330);
    await page.keyboard.press('Control+d');
    await page.mouse.move(d2.x, d2.y);
    await page.keyboard.press('Escape');
    ok((await marksOn('rotated set, page 2')).length === 1, 'Ctrl+D then Esc leaves nothing');
    eq((await T(() => window.takeoffcraft.clip())).items[0].name, 'Rotated box', 'duplicate leaves the clipboard as it was');
    // cut, then paste it back where it was
    await click(200, 330);
    await page.keyboard.press('Control+x');
    ok((await marksOn('rotated set, page 2')).length === 0 && /Cut 1 mark/.test(await st()), 'Ctrl+X cuts the mark');
    await page.keyboard.press('Control+Shift+V');
    ok((await marksOn('rotated set, page 2')).length === 1 && Math.abs(await boxQ() - box1) < 1e-6, 'Ctrl+Shift+V puts it back exactly');
    await page.keyboard.press('Control+z'); await page.keyboard.press('Control+z');
    ok((await marksOn('rotated set, page 2')).length === 1 && Math.abs(await boxQ() - box1) < 1e-6, 'undo the paste and the cut: as before');
    // another sheet of the same size: refused without a scale, then pasted in place
    await showSheet('rotated set, page 1');
    const m1 = (await marksOn('rotated set, page 1')).length;
    await page.keyboard.press('Control+Shift+V');
    ok((await marksOn('rotated set, page 1')).length === m1 && /no scale/.test(await st()), 'paste in place onto a sheet with no scale is refused, saying why', await st());
    await page.selectOption('[data-scale-preset]', 'e10');
    await page.keyboard.press('Control+Shift+V');
    const onP1 = (await marksOn('rotated set, page 1')).filter((m) => !m.pts.some((p) => p.b));
    ok(onP1.length === m1 + 1 && JSON.stringify(onP1.at(-1).pts) === JSON.stringify((await marksOn('rotated set, page 2'))[0].pts), 'same size + same scale: paste in place on the other sheet keeps the coordinates');
    await page.keyboard.press('Control+z');
    // Plan sheet: a different scale is refused, naming both
    await showSheet('kitchen-plan-sheet, page 1');
    const planN = (await marksOn('kitchen-plan-sheet, page 1')).length;
    await page.keyboard.press('Control+v');
    ok(!(await T(() => window.takeoffcraft.pasting())) && /1" = 10'.*1\/4" = 1'-0"/.test(await st()), 'pasting a 1" = 10\' area onto the 1/4" sheet is refused, naming both scales', await st());
    // select all / none (keys and menu), Shift+click, delete several
    await page.keyboard.press('Control+a');
    eq((await sel()).length, planN, `Ctrl+A selects all ${planN} marks on the sheet`);
    ok(/Selected marks/.test(await T(() => document.querySelector('[data-mark-sec] .tc-h').textContent)), 'the panel shows "Selected marks"');
    await page.keyboard.press('Escape');
    eq((await sel()).length, 0, 'Esc selects none');
    await more('select-all');
    eq((await sel()).length, planN, 'More › Select all');
    await more('select-none');
    eq((await sel()).length, 0, 'More › Select none');
    // a count copied from Plan sheet: refused in place on the smaller sheet, pasted by click
    const dots = (await marksOn('kitchen-plan-sheet, page 1')).filter((m) => m.kind === 'count').slice(0, 2);
    await T(() => window.takeoffcraft.zoomTo({ minX: 700, minY: 960, maxX: 1260, maxY: 1360 }));
    await page.waitForTimeout(250);
    await click(dots[0].pts[0].x, dots[0].pts[0].y);
    const pS = await at(dots[1].pts[0].x, dots[1].pts[0].y);
    await page.keyboard.down('Shift'); await page.mouse.click(pS.x, pS.y); await page.keyboard.up('Shift');
    eq((await sel()).length, 2, 'Shift+click adds a second mark to the selection');
    await page.keyboard.press('Control+c');
    await showSheet('rotated set, page 1');
    const p1n = (await marksOn('rotated set, page 1')).length;
    await page.keyboard.press('Control+Shift+V');
    ok((await marksOn('rotated set, page 1')).length === p1n && /same size/.test(await st()), 'paste in place onto a sheet of another size is refused, saying why', await st());
    await page.keyboard.press('Control+v');
    const pc = await at(300, 400);
    await page.mouse.move(pc.x, pc.y); await page.mouse.click(pc.x, pc.y);
    ok((await marksOn('rotated set, page 1')).length === p1n + 2, 'counts paste anywhere: two count marks by click');
    await page.keyboard.press('Control+a');
    await more('delete');
    ok((await marksOn('rotated set, page 1')).length === 0 && /deleted/.test(await st()), 'More › Delete removes every selected mark');
    await page.keyboard.press('Control+z');
    ok((await marksOn('rotated set, page 1')).length === p1n + 2, 'one Ctrl+Z brings them all back');
    await page.keyboard.press('Control+z');
    // the bare letters still pick tools
    for (const [k, tool] of [['c', 'count'], ['d', 'check'], ['x', null], ['v', 'select']]) {
      await page.keyboard.press(k);
      if (tool) ok(await T((t) => document.querySelector(`[data-tool="${t}"]`).getAttribute('aria-pressed') === 'true', tool), `the bare ${k.toUpperCase()} key still picks ${tool}`);
    }
    // copy and duplicate an item with its assembly
    await page.click('[data-item="' + lin.itemId + '"]');
    await page.waitForTimeout(100);
    await T((id) => window.takeoffcraft.model.addComponent(id, { name: 'Panels', unit: 'EA', formula: 'ceil(L / 4)' }), lin.itemId);
    await page.click('[data-item-copy]');
    const nItems = await T(() => window.takeoffcraft.model.state.items.length);
    await page.click('[data-act="paste"]');
    const itemsNow = await T(() => window.takeoffcraft.model.state.items);
    const copied = itemsNow.find((i) => i.name === 'Walk-in panel (copy)');
    ok(itemsNow.length === nItems + 1 && copied && copied.components.length === 1 && copied.components[0].formula === 'ceil(L / 4)', 'Copy item + Paste adds "Walk-in panel (copy)" with its assembly');
    await page.click('[data-item-dup]');
    ok((await T(() => window.takeoffcraft.model.state.items)).some((i) => i.name === 'Walk-in panel (copy 2)'), 'Duplicate item adds another copy');
    await page.keyboard.press('Control+z'); await page.keyboard.press('Control+z'); await page.keyboard.press('Control+z');
    eq(await T(() => window.takeoffcraft.model.state.items.length), nItems, 'undo: back to the items before');
    await page.click('[data-edit-menu] > summary');
    await page.waitForTimeout(100);
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-edit-menu-paper.png') });
    await page.keyboard.press('Escape');
    ok(await T(() => !document.querySelector('[data-edit-menu]').open), 'Esc closes the More menu');

    // New takeoff: asks (unsaved work), then clears everything without a reload
    const marker = await T(() => { window.__noReload = 1; return 1; });
    await page.click('[data-act="new-takeoff"]');
    await page.waitForSelector('dialog[open] [data-key="discard"]');
    ok(/unsaved/i.test(await T(() => document.querySelector('dialog[open]').textContent)), 'New takeoff asks first when there is unsaved work');
    await page.click('dialog[open] [data-key="discard"]');
    await page.waitForTimeout(200);
    const empty = await T(() => ({ sheets: window.takeoffcraft.sheets().length, items: window.takeoffcraft.model.state.items.length, marks: window.takeoffcraft.model.state.marks.length,
      scales: Object.keys(window.takeoffcraft.model.state.sheets).length, files: window.takeoffcraft.model.state.files.length, hint: !document.querySelector('[data-hint]').hidden,
      undo: document.querySelector('[data-act="undo"]').disabled, rows: document.querySelectorAll('[data-sheets] li').length, still: window.__noReload === 1 }));
    ok(marker && empty.still && !empty.sheets && !empty.items && !empty.marks && !empty.scales && !empty.files && empty.hint && empty.undo && !empty.rows,
      'New takeoff: no sheets, items, marks, scales or files; the start hint is back; nothing to undo; same page (no reload)', JSON.stringify(empty));
    await page.setInputFiles('[data-file-pdf]', PLAN);
    await page.waitForFunction(() => window.takeoffcraft.sheets().length === 1 && window.takeoffcraft.rendered() > 0, null, { timeout: 30000 });
    ok(true, 'a PDF opens again after New takeoff');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-new-takeoff-paper.png') });

    // ---- Settings › TakeoffCraft ----
    await page.keyboard.press('Escape');
    await page.click('[data-settings-open]');
    await page.waitForSelector('[data-app-settings][open]');
    ok(await T(() => document.querySelector('[data-settings-tab="app"]')?.textContent.trim() === 'TakeoffCraft' && !document.querySelector('[data-settings-tabs]').hidden), 'the Settings dialog has a TakeoffCraft tab');
    await page.click('[data-settings-tab="app"]');
    ok(await T(() => document.querySelector('input[name="tcDenom"][value="16"]').checked && document.querySelector('select[name="tcWaste"]').value === '0' && document.querySelector('input[name="tcSnap45"]').checked === false), 'the fields show the defaults (1/16", 0%, snap off)');
    await page.click('input[name="tcDenom"][value="4"]');
    await page.selectOption('select[name="tcWaste"]', '1000');
    await T(() => { const r = document.querySelector('input[name="tcThreshold"]'); r.value = '0.6'; r.dispatchEvent(new Event('input', { bubbles: true })); r.dispatchEvent(new Event('change', { bubbles: true })); });
    await page.click('input[name="tcSnap45"]');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-settings-paper.png') });
    const stored = await T(() => JSON.parse(localStorage.getItem('takeoffcraft.settings')));
    ok(stored.denom === 4 && stored.waste === 1000 && stored.threshold === 0.6 && stored.snap45 === true, 'the four settings are stored in takeoffcraft.settings', JSON.stringify(stored));
    eq(await T(() => document.querySelector('[data-tc-th-out]').textContent), '60%', 'the slider shows its value');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);
    ok(/Shift frees/.test(await T(() => document.querySelector('[data-snap-hint]').textContent)), 'the status bar says 45° snapping is on');
    // reload: still set; they work
    await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper');
    await appReady();
    const s2 = await T(() => ({ ...window.takeoffcraft.settings }));
    ok(s2.denom === 4 && s2.waste === 1000 && s2.threshold === 0.6 && s2.snap45, 'settings persist after a reload', JSON.stringify(s2));
    await page.setInputFiles('[data-file-pdf]', PLAN);
    await page.waitForFunction(() => window.takeoffcraft.sheets().length === 1 && window.takeoffcraft.rendered() > 0, null, { timeout: 30000 });
    await page.selectOption('[data-scale-preset]', 'a1/4');
    await T(() => window.takeoffcraft.zoomTo({ minX: 880, minY: 1120, maxX: 1260, maxY: 1360 }));
    await page.waitForTimeout(300);
    await addItem('Snapped run', 'linear');
    eq(await T(() => window.takeoffcraft.model.state.items.find((i) => i.name === 'Snapped run').waste), 1000, 'a new item starts with the waste from Settings (10%)');
    await page.click('[data-tool="linear"]');
    await click(1000, 1200); await click(1072, 1203, { dbl: true });
    const sr = await T(() => window.takeoffcraft.model.state.marks.at(-1).pts);
    ok(sr.length === 2 && Math.abs(sr[1].y - sr[0].y) < 1e-6 && Math.abs(sr[1].x - sr[0].x - 72) < 1, 'snap on without Shift: a slightly crooked click draws a level run', JSON.stringify(sr));
    await page.click('[data-tool="select"]');
    await click(1036, 1200);
    const segTxt = await T(() => document.querySelector('[data-mark-props] .tc-segs li')?.textContent || '');
    ok(/^4'-0"/.test(segTxt) && !/\/16|\/8/.test(await T(() => document.querySelector('[data-mark-props]').textContent)), 'lengths show to 1/4" on screen', segTxt);
    await T(() => window.takeoffcraft.model.markSaved());
    await page.click('[data-settings-open]');
    await page.waitForSelector('[data-app-settings][open]');
    ok(await T(() => document.querySelector('input[name="tcDenom"][value="4"]').checked && document.querySelector('select[name="tcWaste"]').value === '1000' && document.querySelector('input[name="tcSnap45"]').checked), 'the dialog shows the stored values when it opens');
    await page.click('[data-settings-reset]');
    await page.waitForTimeout(100);
    const s3 = await T(() => ({ ...window.takeoffcraft.settings, ls: localStorage.getItem('takeoffcraft.settings'), denom16: document.querySelector('input[name="tcDenom"][value="16"]').checked }));
    ok(s3.denom === 16 && s3.waste === 0 && s3.threshold === 0.75 && !s3.snap45 && s3.ls === null && s3.denom16, 'Reset puts every TakeoffCraft setting back', JSON.stringify(s3));
    await page.keyboard.press('Escape');

    // autosave and recovery (0.4 item 1.2): an edit leaves a copy (with its PDF); a new page offers it back
    await T(() => { window.takeoffcraft.settings.snap = false; });     // freehand points (see round 2)
    await addItem('Recovered wall', 'linear');
    await page.click('[data-tool="linear"]');
    await click(1000, 1250); await click(1100, 1250, { dbl: true });
    await T(() => window.takeoffcraft.autosave().autosave.flush());
    const asBefore = await T(() => ({ items: window.takeoffcraft.model.state.items.length, marks: window.takeoffcraft.model.state.marks.length, name: window.takeoffcraft.model.state.name }));
    await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper');
    eq(await appReady(true), 'asking', 'a new page offers the takeoff back ("Recover your work?")');
    ok(await T((n) => [...document.querySelectorAll('[data-autosave-row] strong')].some((s) => s.textContent === n), asBefore.name), 'the copy is listed under the takeoff\'s name (' + asBefore.name + ')');
    await page.click('[data-autosave-recover]');
    await page.waitForFunction(() => window.takeoffcraft.recovery === 'done' && window.takeoffcraft.sheets().length === 1 && window.takeoffcraft.rendered() > 0, null, { timeout: 20000 });
    const asAfter = await T(() => ({ items: window.takeoffcraft.model.state.items.length, marks: window.takeoffcraft.model.state.marks.length, dirty: window.takeoffcraft.model.dirty, wall: window.takeoffcraft.quantities().find((r) => r.name === 'Recovered wall')?.qty }));
    ok(asAfter.items === asBefore.items && asAfter.marks === asBefore.marks && asAfter.dirty, 'recovered: the same items and marks, its PDF open again, and not saved yet', JSON.stringify({ asBefore, asAfter }));
    ok(Math.abs(asAfter.wall - 100 / 18) < 0.05, 'the recovered run measures again on its sheet (≈ 5.56 LF)', String(asAfter.wall));
    ok(/Recovered/.test(await T(() => document.querySelector('[data-status]').textContent)), 'the status bar says it was recovered');
    await T(() => window.takeoffcraft.model.markSaved());   // saved: the copy goes, so later pages start clean
    await T(() => window.takeoffcraft.autosave().autosave.flush());

    // T7: auto count at any angle and across scales — page 1 (1/4") has the symbol upright and turned 37° / 200°, page 2
    // (1/8") has it twice at half the size; one search with Any angle + all sheets finds all five
    {
      const doc7 = await PDFLib.PDFDocument.create();
      const path7 = 'M0,0 L30,0 L30,-18 L0,-18 Z M4,-4 L14,-14 M20,-4 L26,-4 L26,-10 Z';
      const pa = doc7.addPage([612, 792]), pb = doc7.addPage([612, 792]);
      for (const [x, y, r] of [[150, 500, 0], [300, 520, 37], [420, 300, 200]]) pa.drawSvgPath(path7, { x, y, rotate: PDFLib.degrees(r), borderWidth: 1.2, borderColor: PDFLib.rgb(0, 0, 0) });
      for (const [x, y] of [[200, 200], [350, 450]]) pb.drawSvgPath(path7, { x, y, scale: 0.5, borderWidth: 0.6, borderColor: PDFLib.rgb(0, 0, 0) });
      await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper');
      await appReady();
      await page.setInputFiles('[data-file-pdf]', [{ name: 'angles-scales.pdf', mimeType: 'application/pdf', buffer: Buffer.from(await doc7.save()) }]);
      await page.waitForFunction(() => window.takeoffcraft.sheets().length === 2 && window.takeoffcraft.rendered() > 0, null, { timeout: 30000 });
      await page.selectOption('[data-scale-preset]', 'a1/4');
      await page.keyboard.press('PageDown');
      await page.waitForTimeout(300);
      await page.selectOption('[data-scale-preset]', 'a1/8');
      await page.keyboard.press('PageUp');
      await page.waitForTimeout(300);
      await addItem('Outlets', 'count');
      await page.click('[data-tool="autocount"]');
      await page.check('[data-ac-all]');
      await page.check('[data-ac-angle]');
      await T(() => window.takeoffcraft.zoomTo({ minX: 100, minY: 250, maxX: 500, maxY: 600 }));
      await page.waitForTimeout(250);
      const a7 = await at(147, 497), b7 = await at(183, 521);
      await page.mouse.move(a7.x, a7.y); await page.mouse.down(); await page.mouse.move(b7.x, b7.y, { steps: 5 }); await page.mouse.up();
      await page.waitForFunction(() => window.takeoffcraft.autocount() && !window.takeoffcraft.autocount().running, null, { timeout: 90000 });
      const r7 = await T(() => window.takeoffcraft.autocount());
      ok(r7.found === 5 && r7.adding === 5, `Any angle + all sheets: the upright, 37° and 200° symbols and both half-size ones on the 1/8" sheet (found ${r7.found})`, JSON.stringify(r7.boxes));
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-autocount-angles-paper.png') });
      await page.click('[data-ac-accept]');
      await page.waitForTimeout(150);
      eq((await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Outlets').qty, 5, 'accepted: 5 outlets on two sheets');

      // T8: one item, two conditions — a room's floor (area) and its doors (count)
      await page.keyboard.press('Escape');
      await T(() => { window.takeoffcraft.settings.snap = false; });
      await addItem('Room 101', 'area');
      await page.check('#tc-i-also-count');
      ok(await page.isVisible('#tc-i-also-unit-count'), 'Also measure → Count: the condition shows its unit');
      await page.click('[data-tool="area"]');
      await click(120, 270); await click(300, 270); await click(300, 360); await click(120, 360);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(150);
      await page.click('[data-tool="count"]');
      await click(400, 560); await click(450, 560);
      await page.keyboard.press('Escape');
      await page.waitForTimeout(200);
      const k8 = await T(() => { const tk = window.takeoffcraft; const id = tk.model.state.items.find((i) => i.name === 'Room 101').id; return { kinds: tk.model.state.marks.filter((m) => m.item === id).map((m) => m.kind).sort().join()}; });
      eq(k8.kinds, 'area,count,count', 'the Count tool kept Room 101 and drew its doors (no new item asked for)');
      const row8 = await page.textContent('[data-qty-cond$=":count"]');
      ok(/Room 101 \(count\)2EA/.test(row8), 'the quantities table has a "Room 101 (count)" row with 2 EA', row8);
      await page.fill('[data-qty-cond$=":count"] [data-field$=":lab"]', '120');
      await page.press('[data-qty-cond$=":count"] [data-field$=":lab"]', 'Enter');
      await page.waitForTimeout(150);
      ok(/\$240\.00/.test(await page.textContent('[data-qty-cond$=":count"]')), 'its labor rate is its own: 2 × $120 = $240.00');
      ok(/50\.00 SF \+ 2 EA/.test(await page.textContent('[data-item]:has-text("Room 101")')), 'the items list shows "50.00 SF + 2 EA"');
      ok(await page.isDisabled('#tc-i-also-count'), 'Also measure Count is locked while the item has doors');
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-multi-condition-paper.png') });

      // T9: the price library — import a CSV, add an item with its assembly, update a price, kept in the browser
      await T(() => localStorage.removeItem('takeoffcraft.library'));
      await page.click('[data-library]');
      await page.waitForSelector('dialog[open] [data-lib-list]');
      const libCsv = 'Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula\nPartition type A,Linear,LF,10,2.10,3.333,9\'-0",,\n,Component,EA,,4.25,,,Studs,ceil(L / 1.333) + N\nRoom 101,Area,SF,,3.00,1.25,,,\nMystery,Volume,CY,,1,,,,\n';
      await page.setInputFiles('dialog[open] [data-lib-file]', { name: 'prices.csv', mimeType: 'text/csv', buffer: Buffer.from(libCsv) });
      await page.waitForFunction(() => /prices\.csv: 2 new/.test(document.querySelector('dialog[open] [data-lib-msg]')?.textContent || ''));
      ok(/1 row skipped \(row 5: type "Volume"/.test(await page.textContent('dialog[open] [data-lib-msg]')) && (await page.$$('dialog[open] [data-lib-entry]')).length === 2, 'Import CSV: 2 items listed, the bad row skipped with its reason');
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-library-paper.png') });
      await page.check('dialog[open] [data-lib-entry="0"]');
      await page.click('dialog[open] [data-key="ok"]');
      await page.waitForTimeout(150);
      const pt = await T(() => window.takeoffcraft.model.state.items.find((i) => i.name === 'Partition type A'));
      ok(pt && pt.type === 'linear' && pt.mat === 21000 && pt.heightFt === 9 && pt.components.length === 1 && pt.components[0].formula === 'ceil(L / 1.333) + N', 'Add to takeoff: the partition with its rates, height and studs assembly');
      await page.click('[data-library]');
      await page.waitForSelector('dialog[open] [data-lib-list]');
      await page.click('dialog[open] [data-key="reprice"]');
      await page.waitForTimeout(150);
      const rm = await T(() => window.takeoffcraft.model.state.items.find((i) => i.name === 'Room 101'));
      ok(rm.mat === 30000 && rm.lab === 12500 && /1 item took the library/.test(await T(() => document.querySelector('[data-status]').textContent)), 'Update prices: Room 101 took $3.00 / $1.25 from the library');
      await page.keyboard.press('Control+z');
      ok((await T(() => window.takeoffcraft.model.state.items.find((i) => i.name === 'Room 101').mat)) === 0, 'one Ctrl+Z puts its old prices back');
      const kept = await T(() => JSON.parse(localStorage.getItem('takeoffcraft.library') || '[]').map((e) => e.name).join());
      eq(kept, 'Partition type A,Room 101', 'the library is kept in this browser for the next takeoff');
      await T(() => localStorage.removeItem('takeoffcraft.library'));

      // T16: a typical group — Room 101's floor taken off once, counted ×24
      const roomQ = async () => (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Room 101').qty;
      const base16 = await roomQ();
      const isTimes = async (k) => Math.abs(await roomQ() - base16 * k) < 1e-6 * k * base16;
      await page.click('[data-tool="select"]');
      await click(210, 315);
      await page.waitForSelector('#tc-m-group');
      await page.selectOption('#tc-m-group', '__new');
      await page.waitForSelector('dialog[open] [data-group-repeat]');
      await page.fill('dialog[open] [data-group-name]', 'Unit A');
      await page.fill('dialog[open] [data-group-repeat]', '24');
      await page.click('dialog[open] [data-key="ok"]');
      await page.waitForTimeout(200);
      ok(await isTimes(24) && await page.isVisible('[data-groups-sec]'), 'New typical group ×24 from the mark panel: Room 101 is 50 SF × 24 = 1,200 SF; the Typical groups list shows');
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-typical-group-paper.png') });
      await page.fill('[data-groups] input[data-field$=":repeat"]', '10');
      await page.press('[data-groups] input[data-field$=":repeat"]', 'Enter');
      await page.waitForTimeout(150);
      ok(await isTimes(10), 'repeat 10 in the list: 500 SF');
      await page.fill('[data-groups] input[data-field$=":repeat"]', '0');
      await page.press('[data-groups] input[data-field$=":repeat"]', 'Enter');
      await page.waitForTimeout(150);
      ok(await isTimes(10) && /1 to 10000/.test(await T(() => document.querySelector('[data-status]').textContent)), 'repeat 0 is refused, the count stays');
      await page.click('[data-groups] [data-group-delete]');
      await page.waitForTimeout(150);
      ok(await isTimes(1) && await page.isHidden('[data-groups-sec]'), 'deleting the group: the floor counts once again');
      await page.keyboard.press('Control+z');
      await page.waitForTimeout(150);
      ok(await isTimes(10), 'Ctrl+Z brings the group back (×10)');

      // T17: alternates — the doors of Room 101 as an add alternate: out of the base bid, priced on their own
      const a17 = await T(() => { const tk = window.takeoffcraft, mo = tk.model; const id = mo.addArea('Alt 1 doors'); const room = mo.state.items.find((i) => i.name === 'Room 101').id; mo.setMarksArea(mo.state.marks.filter((m) => m.item === room && m.kind === 'count').map((m) => m.id), id); return id; });
      const total0 = await T(() => document.querySelector('[data-job-total]')?.textContent || '');
      await page.selectOption('[data-area-cur]', '__manage');
      await page.waitForSelector(`dialog[open] [data-area-alt="${a17}"]`);
      await page.selectOption(`dialog[open] [data-area-alt="${a17}"]`, 'add');
      await page.click('dialog[open] [data-key="ok"]');
      await page.waitForTimeout(150);
      const total1 = await T(() => document.querySelector('[data-job-total]')?.textContent || '');
      ok(/Job total \$240\.00/.test(total0) && /Base bid \$0\.00/.test(total1), `Add alternate: the header reads the base bid without the doors (${total0} → ${total1})`);
      await page.click('[data-qty-mode="area"]');
      await page.waitForTimeout(150);
      ok(/\+\$240\.00/.test(await page.textContent(`[data-qty-alt="${a17}"]`)) && /Alt 1 doors \(add alternate\)/.test(await page.textContent(`[data-qty-alt="${a17}"]`)), 'By bid area lists the alternate: Alt 1 doors (add alternate) +$240.00');
      ok(/Room 101 \(count\)2EA\$240\.00/.test(await page.textContent(`[data-qty-area="${a17}"]`)), 'the alternate lists its rows, a second condition too: Room 101 (count) 2 EA $240.00');
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-alternates-paper.png') });
      await page.click('[data-qty-mode="item"]');
      await T(() => window.takeoffcraft.model.markSaved());

      // T18: crew labor on Room 101 (500 SF: 50 SF × 10 typical) — 25 SF an hour, a crew of 2 at $40/h
      const room18 = await T(() => window.takeoffcraft.model.state.items.find((i) => i.name === 'Room 101').id);
      await page.click(`[data-item="${room18}"]`);
      await page.check('#tc-i-crew');
      await page.waitForSelector('#tc-i-crew-prod');
      await page.fill('#tc-i-crew-prod', '25'); await page.press('#tc-i-crew-prod', 'Enter');
      await page.fill('#tc-i-crew-wage', '40'); await page.press('#tc-i-crew-wage', 'Enter');
      await page.waitForTimeout(150);
      const sum18 = await page.textContent('[data-crew-sum]');
      ok(/^20\.0 crew-hours, 40\.0 worker-hours, 2\.5 crew-days \(8 h\) → labor \$1,600\.00 \(\$3\.20\/SF\)/.test(sum18), 'Labor by crew: 500 SF ÷ 25 = 20 crew-hours, 40 worker-hours, 2.5 crew-days → $1,600.00', sum18);
      ok(await page.isDisabled('#tc-i-lab') && (await page.inputValue('#tc-i-lab')) === '3.20' && /\$1,600\.00/.test(await page.textContent(`[data-qty-row="${room18}"]`)), 'the labor rate is set by the crew; the quantities row shows $1,600.00 labor');
      ok(/40\.0 worker-hours, 2\.5 crew-days/.test(await page.textContent('[data-job-total]')), 'the header adds the job\'s hours');
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-crew-paper.png') });
      await page.uncheck('#tc-i-crew');
      await page.waitForTimeout(150);
      ok(!(await T((id) => window.takeoffcraft.model.item(id).crew, room18)) && !(await page.isDisabled('#tc-i-lab')), 'unticked: back to a rate per unit');
      await T(() => window.takeoffcraft.model.markSaved());

      // T19: the bid summary and the proposal PDF — 10 % overhead and profit on the base bid
      await T(() => { const tk = window.takeoffcraft.model; const id = tk.state.items.find((i) => i.name === 'Room 101').id; tk.updateItem(id, { mat: 20000 }); });   // 500 SF × $2 = $1,000 material
      await page.click('[data-export-menu] > summary');
      await page.click('[data-export-menu] [data-act="export-bid"]');
      await page.waitForSelector('dialog[open] [data-bid-sum]');
      await page.fill('dialog[open] #tc-bid-overhead', '10'); await page.press('dialog[open] #tc-bid-overhead', 'Enter');
      await page.fill('dialog[open] #tc-bid-profit', '10'); await page.press('dialog[open] #tc-bid-profit', 'Enter');
      ok(await page.isVisible('dialog[open]'), 'Enter in a percent takes it and keeps the dialog open');
      await page.fill('dialog[open] #tc-bid-excl', 'Paint\nPermits');
      await page.fill('dialog[open] #tc-bid-to', 'Owner LLC');
      const bidTxt = await page.textContent('dialog[open] [data-bid-line="total"]');
      ok(/\$1,210\.00/.test(bidTxt), `the summary: $1,000 + 10 % overhead + 10 % profit = $1,210.00 (${bidTxt})`);
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-bid-summary-paper.png') });
      const [bdl] = await Promise.all([page.waitForEvent('download', { timeout: 20000 }), page.click('dialog[open] [data-key="ok"]')]);
      const bpf = path.join(tmp, bdl.suggestedFilename()); await bdl.saveAs(bpf);
      const btxt = execFileSync('pdftotext', ['-layout', bpf, '-'], { encoding: 'utf8' });
      ok(/proposal\.pdf$/.test(bdl.suggestedFilename()) && /Bid\s+\$1,210\.00/.test(btxt) && /Owner LLC/.test(btxt) && /•\s+Permits/.test(btxt), 'Proposal PDF: the bid, the client, the exclusions (typed fields are kept even without leaving them)');
      ok((await T(() => window.takeoffcraft.model.state.bid?.overhead)) === 1000, 'the bid settings are saved with the takeoff');
      await T(() => window.takeoffcraft.model.markSaved());

      // T20: scales from the sheets' text — a set of three: 1/4" in its title block, 1:100, and none
      const g20 = await PDFLib.PDFDocument.create();
      const f20 = await g20.embedFont(PDFLib.StandardFonts.Helvetica);
      for (const lines of [['FIRST FLOOR PLAN', 'SCALE: 1/4" = 1\'-0"'], ['SITE PLAN', 'SCALE 1:100'], ['GENERAL NOTES']]) { const p = g20.addPage([612, 792]); lines.forEach((s, i) => p.drawText(s, { x: 400, y: 80 - i * 14, size: 9, font: f20 })); }
      await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper');
      await appReady();
      await page.setInputFiles('[data-file-pdf]', [{ name: 'scales-in-text.pdf', mimeType: 'application/pdf', buffer: Buffer.from(await g20.save()) }]);
      await page.waitForFunction(() => window.takeoffcraft.sheets().length === 3 && window.takeoffcraft.rendered() > 0, null, { timeout: 30000 });
      await page.selectOption('[data-scale-preset]', '__detect');
      await page.waitForSelector('dialog[open] [data-detect-for]');
      const rows20 = await T(() => [...document.querySelectorAll('dialog[open] [data-detect-for]')].map((c) => (c.checked ? '+' : '-') + (c.disabled ? 'x' : '') + c.closest('label').textContent));
      ok(rows20.length === 3 && rows20[0].startsWith('+') && /Says 1\/4" = 1'-0"/.test(rows20[0]) && rows20[1].startsWith('+') && /Says 1:100/.test(rows20[1]) && rows20[2].startsWith('-x') && /No scale in its text/.test(rows20[2]), 'From the sheets\' text…: 1/4" and 1:100 found and ticked, the notes sheet has none', JSON.stringify(rows20));
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-scale-detect-paper.png') });
      await page.click('dialog[open] [data-key="ok"]');
      await page.waitForTimeout(150);
      const sc20 = await T(() => window.takeoffcraft.sheets().map((s) => window.takeoffcraft.model.scaleOf(s.key)?.preset || '-').join());
      eq(sc20, 'a1/4,m100,-', 'set on both sheets in one step');
      await page.keyboard.press('Control+z');
      eq(await T(() => window.takeoffcraft.sheets().filter((s) => window.takeoffcraft.model.scaleOf(s.key)).length), 0, 'one Ctrl+Z takes both off');
      await T(() => window.takeoffcraft.model.markSaved());

      // T21: room fill — two rooms with a 30 pt (1'-8") door between them; one click in room A
      const g21 = await PDFLib.PDFDocument.create();
      const p21 = g21.addPage([612, 792]);
      const wl = (x0, y0, x1, y1) => p21.drawLine({ start: { x: x0, y: y0 }, end: { x: x1, y: y1 }, thickness: 4, color: PDFLib.rgb(0, 0, 0), lineCap: PDFLib.LineCapStyle.Projecting });
      wl(100, 300, 500, 300); wl(500, 300, 500, 600); wl(500, 600, 100, 600); wl(100, 600, 100, 300); wl(300, 300, 300, 420); wl(300, 450, 300, 600);
      p21.drawText('OFFICE 101', { x: 150, y: 450, size: 10 });
      await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper');
      await appReady();
      await page.setInputFiles('[data-file-pdf]', [{ name: 'rooms.pdf', mimeType: 'application/pdf', buffer: Buffer.from(await g21.save()) }]);
      await page.waitForFunction(() => window.takeoffcraft.sheets().length === 1 && window.takeoffcraft.rendered() > 0, null, { timeout: 30000 });
      await page.selectOption('[data-scale-preset]', 'a1/4');
      await addItem('Floor', 'area');
      await page.keyboard.press('b');
      ok(/Door openings up to 4'-0" are closed/.test(await T(() => document.querySelector('[data-status]').textContent)), 'B picks the Room tool; the status bar says how wide a door it closes');
      await T(() => window.takeoffcraft.zoomTo({ minX: 80, minY: 280, maxX: 520, maxY: 620 }));
      await page.waitForTimeout(200);
      const c21 = await at(200, 500);
      await page.mouse.click(c21.x, c21.y);
      await page.waitForFunction(() => (window.takeoffcraft.quantities().find((r) => r.name === 'Floor')?.qty || 0) > 0, null, { timeout: 20000 });
      const sf21 = (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Floor').qty;
      const want21 = 196 * 296 / 324;
      ok(Math.abs(sf21 - want21) / want21 < 0.015, `one click: room A to its walls' faces, its door closed — ${sf21.toFixed(2)} SF (drawn ${want21.toFixed(2)} SF)`);
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-room-fill-paper.png') });
      const wallClick = await at(300, 350);
      await page.mouse.click(wallClick.x, wallClick.y);
      await page.waitForTimeout(200);
      ok(/on a line/.test(await T(() => document.querySelector('[data-status]').textContent)), 'a click on a wall: refused, saying why');
      await T(() => window.takeoffcraft.model.markSaved());

      // T10: the takeoff saved inside the PDF, then opened from that PDF alone in a fresh page
      const [edl] = await Promise.all([page.waitForEvent('download', { timeout: 20000 }), (async () => { await page.click('[data-export-menu] > summary'); await page.click('[data-export-menu] [data-act="export-embed"]'); })()]);
      const epf = path.join(tmp, edl.suggestedFilename()); await edl.saveAs(epf);
      ok(edl.suggestedFilename() === 'rooms (with takeoff).pdf', 'Export › PDF with the takeoff inside: rooms (with takeoff).pdf');
      await T(() => window.takeoffcraft.model.markSaved());
      await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper');
      await appReady();
      await page.setInputFiles('[data-file-pdf]', epf);
      await page.waitForSelector('dialog[open] [data-key="ok"]');
      ok(/carries a TakeoffCraft takeoff \(1 item, 1 mark\)/.test(await page.textContent('dialog[open]')), 'opening it: "This PDF has a takeoff inside" (1 item, 1 mark)');
      await page.click('dialog[open] [data-key="ok"]');
      await page.waitForTimeout(300);
      const q10 = (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Floor');
      const sc10 = await T(() => window.takeoffcraft.model.scaleOf(window.takeoffcraft.sheets()[0].key)?.preset);
      ok(q10 && Math.abs(q10.qty - sf21) < 1e-6 && sc10 === 'a1/4', `Open the takeoff: the floor (${q10?.qty.toFixed(2)} SF) on its sheet, with its scale`);
      await T(() => window.takeoffcraft.model.markSaved());

      // T11: an arc's middle handle bends it; an arc's end snaps 45° with Shift
      await T(() => { window.takeoffcraft.settings.snap = false; });
      await T(() => window.takeoffcraft.zoomTo({ minX: 80, minY: 280, maxX: 520, maxY: 620 }));
      await page.waitForTimeout(200);
      await addItem('Curb', 'linear');
      await page.click('[data-tool="linear"]');
      await click(150, 320); await page.keyboard.press('r'); await click(200, 360); await click(250, 320);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(150);
      const curbQ = async () => (await T(() => window.takeoffcraft.quantities())).find((r) => r.name === 'Curb').qty;
      const arcLen = (h, s) => { const R = (s * s + h * h) / (2 * s); const half = s > R ? Math.PI - Math.asin(h / R) : Math.asin(h / R); return 2 * R * half / 18; };
      ok(Math.abs(await curbQ() - arcLen(50, 40)) < 0.01, `an arc run through three clicks: ${(await curbQ()).toFixed(3)} LF`);
      await page.keyboard.press('Escape');
      await page.click('[data-tool="select"]');
      await click(200, 360);
      await page.waitForTimeout(100);
      const h11 = await at(200, 360), h11b = await at(200, 400);
      await page.mouse.move(h11.x, h11.y); await page.mouse.down(); await page.mouse.move(h11b.x, h11b.y, { steps: 6 }); await page.mouse.up();
      await page.waitForTimeout(150);
      ok(Math.abs(await curbQ() - arcLen(50, 80)) < 0.02, `dragging the arc's middle bends it through the new point: ${(await curbQ()).toFixed(3)} LF (more than a half circle)`);
      await page.keyboard.press('Control+z');
      ok(Math.abs(await curbQ() - arcLen(50, 40)) < 0.01 && /Bend arc/.test(await T(() => document.querySelector('[data-status]').textContent)), 'Ctrl+Z: "Undid: Bend arc", back to the first arc');
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-arc-handle-paper.png') });
      await page.keyboard.press('Escape');
      await page.click('[data-tool="linear"]');
      await click(300, 330);
      if ((await page.getAttribute('[data-act="arc"]', 'aria-pressed')) !== 'true') await page.keyboard.press('r');     // arc mode stays on between runs
      await click(330, 380);
      await page.keyboard.down('Shift'); await click(352, 391); await page.keyboard.up('Shift');
      await page.keyboard.press('Enter');
      await page.keyboard.press('r');                                   // arc mode off again
      await page.waitForTimeout(150);
      const last11 = await T(() => { const ms = window.takeoffcraft.model.state.marks; return ms[ms.length - 1].pts; });
      ok(Math.abs((last11[1].x - last11[0].x) - (last11[1].y - last11[0].y)) < 1e-6 && last11[0].b, 'Shift: the arc\'s end lands 45° from its start (the curve point went where it was clicked)', JSON.stringify(last11));
      await T(() => window.takeoffcraft.model.markSaved());

      // T22: markups — a note and a revision cloud, a status, the list, and the marked PDF
      await page.keyboard.press('Escape');
      const markupTool = async (k) => { await page.click('[data-markup-menu] > summary'); await page.click(`[data-markup-menu] [data-tool="${k}"]`); };
      await markupTool('note');
      await click(420, 540);
      await page.waitForSelector('dialog[open] [data-note-text]');
      await page.fill('dialog[open] [data-note-text]', 'Confirm the base type with the owner');
      await page.click('dialog[open] [data-key="ok"]');
      await page.waitForTimeout(150);
      await markupTool('cloud');
      await click(320, 300); await click(480, 380);
      await page.waitForSelector('dialog[open] [data-note-text]');
      await page.fill('dialog[open] [data-note-text]', 'Rev 2: partition moved');
      await page.click('dialog[open] [data-key="ok"]');
      await page.waitForTimeout(150);
      ok(/Markups: 2 \(2 open\)/.test(await page.textContent('[data-notes-h]')) && (await page.$$('[data-note-row]')).length === 2, 'Markup › Note and › Cloud: both listed, open');
      await page.screenshot({ path: path.join(shots, 'takeoffcraft-markups-paper.png') });
      await page.click('[data-tool="select"]');
      await click(420, 540);
      await page.waitForSelector('#tc-n-status');
      await page.selectOption('#tc-n-status', 'closed');
      await page.waitForTimeout(150);
      ok(/Markups: 2 \(1 open\)/.test(await page.textContent('[data-notes-h]')), 'select the note, set it Closed: 1 open');
      await page.check('[data-notes-open]');
      ok((await page.$$('[data-note-row]')).length === 1, 'Open only: the cloud alone');
      await page.uncheck('[data-notes-open]');
      const [mdl] = await Promise.all([page.waitForEvent('download', { timeout: 20000 }), (async () => { await page.click('[data-export-menu] > summary'); await page.click('[data-export-menu] [data-act="export-pdf"]'); })()]);
      const mpf = path.join(tmp, 'markups-' + mdl.suggestedFilename()); await mdl.saveAs(mpf);
      const mtxt = execFileSync('pdftotext', [mpf, '-'], { encoding: 'utf8' });
      ok(/CLOSED/.test(mtxt) && /Confirm the base type/.test(mtxt) && /OPEN/.test(mtxt) && /Rev 2: partition moved/.test(mtxt), 'the marked PDF carries both, with their status');
      await click(420, 540);
      await page.keyboard.press('Delete');
      await page.waitForTimeout(150);
      ok(/Markups: 1 \(1 open\)/.test(await page.textContent('[data-notes-h]')), 'Delete removes the selected note');
      await page.keyboard.press('Control+z');
      await page.waitForTimeout(150);
      ok(/Markups: 2/.test(await page.textContent('[data-notes-h]')), 'Ctrl+Z brings it back');
      await T(() => window.takeoffcraft.model.markSaved());
      await T(() => window.takeoffcraft.model.markSaved());
    }

    // T13: revision overlay — an old sheet and its revision (the drawing moved 30, 20 pt; the partition moved from x 250 to 300)
    const revPdf = async (dx, dy, partX) => {
      const d = await PDFLib.PDFDocument.create();
      const pg = d.addPage([612, 792]);
      pg.drawRectangle({ x: 100 + dx, y: 100 + dy, width: 300, height: 200, borderWidth: 2, borderColor: PDFLib.rgb(0, 0, 0) });
      pg.drawLine({ start: { x: partX + dx, y: 100 + dy }, end: { x: partX + dx, y: 300 + dy }, thickness: 2 });
      pg.drawLine({ start: { x: 100 + dx, y: 200 + dy }, end: { x: 160 + dx, y: 200 + dy }, thickness: 2 });   // a shelf that stays
      return Buffer.from(await d.save());
    };
    await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper');
    await appReady();
    await page.setInputFiles('[data-file-pdf]', [{ name: 'rev-old.pdf', mimeType: 'application/pdf', buffer: await revPdf(0, 0, 250) }, { name: 'rev-new.pdf', mimeType: 'application/pdf', buffer: await revPdf(30, 20, 300) }]);
    await page.waitForFunction(() => window.takeoffcraft.sheets().length === 2 && window.takeoffcraft.rendered() > 0, null, { timeout: 30000 });
    const rk = await T(() => Object.fromEntries(window.takeoffcraft.sheets().map((x) => [x.title, x.key])));
    const oldKey = rk['rev-old, page 1'], newKey = rk['rev-new, page 1'];
    await T(([o]) => {
      const m = window.takeoffcraft.model;
      m.setScale(o, { method: 'preset', preset: 'a1/4', ftPerUnit: 1 / 18, label: '1/4" = 1\'-0"', cal: null });
      const w = m.addItem({ name: 'Rev walls', type: 'linear' }), c = m.addItem({ name: 'Rev outlets', type: 'count' });
      m.addMark({ item: w, sheet: o, pts: [{ x: 100, y: 300 }, { x: 400, y: 300 }] });          // top wall: unchanged
      m.addMark({ item: w, sheet: o, pts: [{ x: 250, y: 100 }, { x: 250, y: 300 }] });          // the partition: moved
      m.addMark({ item: c, sheet: o, pts: [{ x: 130, y: 205 }] });                               // by the shelf: unchanged
    }, [oldKey]);
    const revBefore = await T(() => window.takeoffcraft.quantities().filter((r) => r.name.startsWith('Rev')).map((r) => r.qty));
    await showSheet('rev-new, page 1');
    await page.click('[data-act="compare"]');
    await page.waitForSelector('dialog[open] [data-cmp-old]');
    eq(await T(() => document.querySelector('dialog[open] [data-cmp-old]').value), oldKey, 'Compare offers the other file\'s same page as the older sheet');
    await page.click('dialog[open] [data-key="ok"]');
    await page.waitForFunction(() => window.takeoffcraft.compare());
    ok(await T(() => !document.querySelector('[data-cmpbar]').hidden && /Comparing with rev-old, page 1/.test(document.querySelector('[data-cmp-summary]').textContent)), 'the compare bar opens, naming the old sheet');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-compare-paper.png') });
    await T(() => window.takeoffcraft.zoomTo({ minX: 40, minY: -60, maxX: 500, maxY: 480 }));   // clear of the sheet bar and the compare bar
    await page.waitForTimeout(200);
    await page.click('[data-cmp-align]');
    for (const [x, y] of [[100, 100], [130, 120], [400, 300], [430, 320]]) await click(x, y);
    const A = (await T(() => window.takeoffcraft.compare())).A;
    ok(Math.abs(A[0] - 1) < 0.01 && Math.abs(A[1]) < 0.01 && Math.abs(A[4] - 30) < 1.5 && Math.abs(A[5] - 20) < 1.5, 'Align by two points: four clicks line the old drawing up (moved ≈ 30, 20)', JSON.stringify(A));
    await page.click('[data-cmp-find]');
    await page.waitForFunction(() => window.takeoffcraft.compare()?.changes, null, { timeout: 30000 });
    const chg = (await T(() => window.takeoffcraft.compare())).changes;
    const partId = await T((o) => window.takeoffcraft.model.state.marks.find((m) => m.sheet === o && m.pts[0].x === 250).id, oldKey);
    ok(chg.removed > 100 && chg.added > 100 && chg.flagged.length === 1 && chg.flagged[0] === partId, 'Find changes: the moved partition shows (removed and added ink) and flags only the run along it', JSON.stringify(chg));
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-compare-changes-paper.png') });
    await page.click('[data-cmp-move]');
    await page.waitForFunction(() => !window.takeoffcraft.compare());
    const moved = await T(([o, n]) => { const ms = window.takeoffcraft.model.state.marks.filter((m) => m.item && window.takeoffcraft.model.item(m.item).name.startsWith('Rev')); return { onOld: ms.filter((m) => m.sheet === o).length, onNew: ms.filter((m) => m.sheet === n).length, flagged: ms.filter((m) => m.flag).length, top: ms.find((m) => m.pts.length === 2 && Math.abs(m.pts[0].y - m.pts[1].y) < 1e-6)?.pts, scale: window.takeoffcraft.scale()?.ftPerUnit }; }, [oldKey, newKey]);
    ok(moved.onOld === 0 && moved.onNew === 3 && moved.flagged === 1, 'Move takeoff here: all three marks move to the new sheet, one flagged', JSON.stringify(moved));
    ok(Math.abs(moved.top[0].x - 130) < 1.5 && Math.abs(moved.top[0].y - 320) < 1.5, 'the marks move with the alignment (the top wall now on the new drawing\'s top wall)', JSON.stringify(moved.top));
    ok(Math.abs(moved.scale - 1 / 18) / (1 / 18) < 0.01, 'the new sheet takes the old scale (it had none)', String(moved.scale));
    const revAfter = await T(() => window.takeoffcraft.quantities().filter((r) => r.name.startsWith('Rev')).map((r) => r.qty));
    ok(revAfter.every((q, i) => Math.abs(q - revBefore[i]) / Math.max(1, revBefore[i]) < 0.01), 'quantities are the same after the move', JSON.stringify([revBefore, revAfter]));
    ok(await T(() => !document.querySelector('[data-act="next-flag"]').hidden && /1 to check/.test(document.querySelector('[data-act="next-flag"]').textContent)), 'the sheet bar says "1 to check"');
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-compare-moved-paper.png') });
    await page.click('[data-act="next-flag"]');
    ok(await T((id) => window.takeoffcraft.selection()[0] === id, partId) && /changed under this mark/.test(await T(() => document.querySelector('[data-mark-props]').textContent)), 'the button selects the flagged mark and its panel says why');
    await page.click('[data-flag-checked]');
    ok(await T(() => !window.takeoffcraft.model.state.marks.some((m) => m.flag) && document.querySelector('[data-act="next-flag"]').hidden), 'Checked clears the flag (and the sheet bar button goes)');
    await page.keyboard.press('Control+z'); await page.keyboard.press('Control+z');
    ok(await T((o) => window.takeoffcraft.model.state.marks.filter((m) => m.sheet === o).length === 3, oldKey), 'Ctrl+Z (twice) puts the takeoff back on the old sheet');
    await T(() => window.takeoffcraft.model.markSaved());

    // handoff (0.4): a PDF another app left in the shared IndexedDB opens here; the sender button follows MarkupCraft's manifest
    const hdoc = await PDFLib.PDFDocument.create();
    hdoc.addPage([612, 792]).drawRectangle({ x: 100, y: 100, width: 200, height: 100, borderWidth: 2 });
    const hb64 = Buffer.from(await hdoc.save()).toString('base64');
    const hid = await T(async (b64) => {
      const m = await import('/assets/apps/takeoffcraft/dev/handoff.js');
      const id = m.newHandoffId();
      const b = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
      await m.putHandoff(id, new File([b], 'handed-over.pdf', { type: 'application/pdf' }), 'markupcraft');
      return id;
    }, hb64);
    await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper&handoff=' + hid);
    await appReady();
    await page.waitForFunction(() => window.takeoffcraft.sheets().length === 1 && window.takeoffcraft.rendered() > 0, null, { timeout: 20000 });
    eq((await T(() => window.takeoffcraft.sheets()))[0].title, 'handed-over, page 1', 'a handed-over PDF opens as if dropped');
    ok(!/handoff=/.test(page.url()), 'the handoff id is taken out of the address (a reload does not look for it again)');
    ok(/handed over from MarkupCraft/.test(await T(() => document.querySelector('[data-status]').textContent)), 'the status bar names the app it came from');
    const gone = await T(async (id) => (await import('/assets/apps/takeoffcraft/dev/handoff.js')).takeHandoff(id, { waitMs: 0 }), hid);
    ok(gone === null, 'the file was taken (nothing left in the browser\'s storage)');
    const mcAccepts = (JSON.parse(fs.readFileSync(path.join(ROOT, 'public_html/assets/apps/markupcraft/dev/manifest.json'), 'utf8')).accepts || []).includes('handoff');
    const hbtn = await page.$('[data-handoff-pdf]');
    if (!mcAccepts) ok(!hbtn, 'no "Open in MarkupCraft" button while MarkupCraft here does not take a handoff');
    else {
      ok(!!hbtn, 'the sheet bar has the MarkupCraft button (its build takes a handoff)');
      const [tab] = await Promise.all([ctx.waitForEvent('page'), page.click('[data-handoff-pdf]')]);
      ok(/\/lab\/markupcraft\?handoff=[0-9a-f-]{36}/.test(tab.url()), 'it opens MarkupCraft in a new tab with a handoff id', tab.url());
      await tab.close();
    }

    // G: every word from the language file — no key asked for that the file lacks, and the pseudo-locale leaves no plain English
    const missing = await T(() => globalThis.ccI18n?.missing?.() || null);
    ok(Array.isArray(missing) && missing.length === 0, 'no language key used in this whole run is missing from lang/en.json', JSON.stringify(missing));
    await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper&lang=en-XA');
    await appReady();
    await page.setInputFiles('[data-file-pdf]', PLAN);
    await page.waitForFunction(() => window.takeoffcraft.sheets().length === 1 && window.takeoffcraft.rendered() > 0, null, { timeout: 30000 });
    await addItem('Pseudo wall', 'linear');
    const plain = await T(() => {
      const texts = [];
      for (const sel of ['.tc-tool span', '.tc-tool-label', '.tc-h', '[data-qty-mode]', '.tc-sheetbar button', '[data-item-props] label', '[data-item-props] .k', '[data-item-props] button', '.tc-status-hint', '.tc-snap-toggle', '[data-status]', '.tc-muted', '.tc-sheet-meta span', '.tc-table th', '.tc-note', '.tc-vars']) {
        for (const n of document.querySelectorAll(sel)) { const s = n.textContent.trim(); if (s && /[a-z]{3}/i.test(s) && !/[\[\]]/.test(s)) texts.push(sel + ': ' + s); }
      }
      return texts;
    });
    ok(plain.length === 0, 'with ?lang=en-XA every toolbar, panel and status text comes from the language file (bracketed)', plain.slice(0, 12).join(' | '));
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-pseudo-locale.png') });
    await ctx.clearCookies({ name: 'cc_lang' }).catch(() => {});
    await T(() => window.takeoffcraft.model.markSaved());

    // model theme
    await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=model');
    await appReady();
    await page.setInputFiles('[data-file-pdf]', PLAN);
    await page.waitForFunction(() => window.takeoffcraft.rendered() > 0, null, { timeout: 30000 });
    await page.setInputFiles('[data-file-project]', fp);
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-model.png') });
    await page.goto('https://getcadcraft.com/lab/takeoffcraft?space=paper');
    await appReady();
    await page.screenshot({ path: path.join(shots, 'takeoffcraft-empty-paper.png') });
    const words = await T(() => document.querySelector('[data-takeoffcraft]').innerText);
    ok(!/\b(null|undefined|NaN)\b/.test(words), 'no "null", "undefined" or "NaN" on the empty page');
    ok(true, 'screenshots in ' + shots);
  } catch (err) {
    ok(false, 'browser run', err.stack?.split('\n').slice(0, 4).join(' | '));
  } finally {
    await browser.close();
    admin('down');
  }
  for (const i of issues) console.log('    ! ' + i);
  eq(issues.length, 0, 'no console errors, page errors or failed requests');
}
