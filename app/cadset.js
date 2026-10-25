/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadset.js — a DWG / DXF drawing as a set of sheets (0.7 TD.1, TD.2). Mirrors pdfset.js: `openCad` returns the record `openPdf`
 * returns (`hash`, `name`, `size`, `doc.getPage(n)`, `pages[]`), so everything keyed by a file's hash and a sheet's
 * "<hash>:<index>" works for drawings as it does for PDFs. The page object implements the slice of the pdf.js page interface the
 * app uses (getViewport, render, getTextContent), so viewer.js, rasterizing for Auto count and thumbnails are untouched.
 *
 *   const set = await openCad(bytes, name, { readers, hash });   sheets: Model first, then every layout in tab order
 *   set.cad = { model, drawing (dwg-compile.js), format, version, units, sheets[], index() (cadcount.js, built once), warnings[] }
 *
 * Sheet geometry. Page user space is y-up like a PDF's (info.transform flips it for the screen).
 *   layout sheet  paper units → points (72 per inch), origin at the paper's lower left corner
 *   model sheet   drawing units × k (the longest side is about SIZE points), plus a PAD margin
 * Scale (TD.2): ftPerUnit = real feet per page unit. A layout takes it from its biggest viewport (paper units per model unit) and
 * the drawing's INSUNITS; a model sheet from INSUNITS and k. No usable units = no scale ("No scale" in the app), never zero.
 *
 * Drawing content is untrusted: size caps, a file that is neither DWG nor ASCII DXF is refused with a reason, a reader that throws
 * becomes an error message, never a half-open sheet.
 */

import { compileDrawing } from './dwg-compile.js';
import { indexDrawing, drawingUnits, UNIT_NAMES } from './cadcount.js';
import { t } from './i18n.js';

export const CAD_RE = /\.(dwg|dxf)$/i;
export const LIMITS = Object.freeze({ dwgBytes: 300e6, dxfBytes: 200e6, spaces: 200 });
const SIZE = 2000, PAD = 24;                 // model sheet: longest side (points) and margin
const PT_IN = 72, PT_MM = 72 / 25.4;

/** What the bytes are: 'dwg' | 'dxf' | 'binary-dxf' | null. The extension is a hint only. */
export function sniff(bytes) {
  if (bytes.length >= 6 && bytes[0] === 0x41 && bytes[1] === 0x43 && bytes[2] === 0x31 && bytes[3] === 0x30) return 'dwg';   // "AC10…" / "AC1.."
  if (bytes.length >= 6 && bytes[0] === 0x41 && bytes[1] === 0x43 && bytes[2] === 0x31) return 'dwg';
  const head = new TextDecoder('latin1').decode(bytes.subarray(0, Math.min(bytes.length, 22)));
  if (/^AutoCAD Binary DXF/.test(head)) return 'binary-dxf';
  const text = new TextDecoder('latin1').decode(bytes.subarray(0, Math.min(bytes.length, 4096)));
  if (/^\s*(0|999)\s*\r?\n/.test(text) && /\bSECTION\b|\bHEADER\b|\bENTITIES\b/.test(text)) return 'dxf';
  return null;
}

/** Readers the page hands over: `{ dwg(bytes) → model, dxf(bytes) → model }`. Node tests build their own with the plain readers. */
export async function defaultReaders() {
  return {
    dwg: async (bytes) => (await import('./dwg/read-async.js')).readDwgAsync(bytes),
    dxf: async (bytes) => {
      const [{ readDxfModel }, { decodeDxfBytes }] = await Promise.all([import('./dxf-model.js'), import('./dxf-decode.js')]);
      return readDxfModel(decodeDxfBytes(bytes).text);
    },
  };
}

const mul = (p, q) => [
  p[0] * q[0] + p[2] * q[1], p[1] * q[0] + p[3] * q[1],
  p[0] * q[2] + p[2] * q[3], p[1] * q[2] + p[3] * q[3],
  p[0] * q[4] + p[2] * q[5] + p[4], p[1] * q[4] + p[3] * q[5] + p[5],
];
const fin = (v) => typeof v === 'number' && Number.isFinite(v);

/** A viewport's model → paper transform: about the view centre, scaled to the viewport, twisted, moved to its centre (as dwg-view.js). */
export function vpMatrix(vp) {
  const k = vp.h / vp.viewHeight, c = Math.cos(vp.twist || 0), sn = Math.sin(vp.twist || 0);
  return [k * c, k * sn, -k * sn, k * c, vp.cx - k * (c * vp.vx - sn * vp.vy), vp.cy - k * (sn * vp.vx + c * vp.vy)];
}

/**
 * Open a drawing. `readers` from defaultReaders() (browser) or made by the caller (Node); `hash` the file's SHA-256 (pdfset.sha256Hex).
 * Throws an Error with a message fit to show.
 */
export async function openCad(bytes, name, { readers, hash, xrefs = new Map(), limits = {} }) {
  const lim = { ...LIMITS, ...limits };
  const kind = sniff(bytes);
  if (kind === 'binary-dxf') throw new Error(t('cad.err.binary', { file: name }));
  if (!kind) throw new Error(t('cad.err.type', { file: name }));
  if (bytes.byteLength > (kind === 'dwg' ? lim.dwgBytes : lim.dxfBytes)) throw new Error(t('cad.err.big', { file: name, mb: Math.round(bytes.byteLength / 1e6) }));
  let model;
  try { model = await (kind === 'dwg' ? readers.dwg(bytes) : readers.dxf(bytes)); }
  catch (err) { throw new Error(t('cad.err.read', { file: name, reason: String(err?.message || t('pdf.err.unknown')).slice(0, 300) })); }
  if (!model || !Array.isArray(model.blocks)) throw new Error(t('cad.err.read', { file: name, reason: t('pdf.err.unknown') }));
  try { return buildSet(model, { name, hash, size: bytes.byteLength, format: kind, xrefs }); }
  catch (err) {   // a damaged file can give the reader a model the sheet compiler cannot follow: a message, never a crash
    throw new Error(t('cad.err.read', { file: name, reason: String(err?.message || t('pdf.err.unknown')).replace(/\s+/g, ' ').slice(0, 300) }));
  }
}

/**
 * Is this layer shown on the sheets (drawn, and counted without asking)? The layer panel's choice first, else the file: off and frozen
 * layers are hidden, and a layer that never plots (DEFPOINTS, viewport frames) is not drawn.
 */
export function layerShown(cad, name) {
  if (cad.layerOverride.has(name)) return cad.layerOverride.get(name);
  const l = cad.layerByName.get(name);
  return !l || (l.on && l.plot !== false);
}

/** The same drawing with linked drawings (xrefs) loaded: `models` = Map(block name in lower case → a read model). A new set with the same hash. */
export function withXrefs(set, models) {
  const next = buildSet(set.cad.model, { name: set.name, hash: set.hash, size: set.size, format: set.cad.format, xrefs: models });
  next.cad.layerOverride = set.cad.layerOverride;              // the layer panel's choices stay
  return next;
}

/**
 * Which of `candidates` ([{ name (the file's), model }]) are the drawing's linked drawings: an xref block's file is its path's last part
 * (else its own name), without the extension, compared without case. → Map(block name in lower case → model), only the ones found.
 */
export function matchXrefs(model, candidates) {
  const base = (s) => String(s || '').split(/[\\/]/).pop().replace(/\.(dwg|dxf)$/i, '').toLowerCase();
  const out = new Map();
  for (const b of model.blocks || []) {
    if (!(b.flags & 4)) continue;
    const want = [base(b.xrefPath), String(b.name).toLowerCase()].filter(Boolean);
    const hit = candidates.find((c) => want.includes(base(c.name)) && c.model !== model);
    if (hit) out.set(String(b.name).toLowerCase(), hit.model);
  }
  return out;
}

/** The drawing's length unit in words (the language file's), or '' when it has none. */
export function unitLabel(units) { return units?.name ? t('cad.unit.' + units.name) : ''; }

/** The sheets of a read drawing (also what the tests call with a model they built). */
export function buildSet(model, { name, hash, size, format = 'dwg', xrefs = new Map() }) {
  const drawing = compileDrawing(model, { versionTag: model.version || '', xrefs });
  const units = drawingUnits(model);
  const spaces = drawing.spaces.slice(0, LIMITS.spaces);
  const model0 = spaces.find((s) => s.kind === 'model') || null;
  const warnings = [];
  const cad = { model, drawing, format, version: model.version || '', release: drawing.release || '', units, sheets: [], warnings, name, xrefs: drawing.xrefs,
    layerOverride: new Map(),                                  // the layer panel: name → true (shown) | false (hidden), over what the file says
    layerByName: new Map(drawing.layers.map((l) => [l.name, l])),
    layerHandles: new Map((model.tables?.layers || []).map((l) => [l.name, l.handle || ''])) };
  let ix = null;
  cad.index = () => (ix ??= indexDrawing(model, { xrefs, override: cad.layerOverride }));
  // sheets
  const pages = [];
  for (const sp of spaces) {
    const sheet = makeSheet(sp, cad, model0, pages.length);
    cad.sheets.push(sheet);
    pages.push(sheet.info);
  }
  if (!pages.length) warnings.push(t('cad.warn.empty'));
  const rep = model.report || {};
  if (rep.truncated || rep.damaged || (Array.isArray(rep.notes) && rep.notes.some((n) => /damag|truncat|recover/i.test(String(n))))) warnings.push(t('cad.warn.damaged'));
  if (drawing.stats?.truncated) warnings.push(t('cad.warn.big'));
  if (drawing.xrefs.some((x) => !x.loaded)) warnings.push(t('cad.warn.xref', { n: drawing.xrefs.filter((x) => !x.loaded).length }));
  const doc = {
    numPages: pages.length,
    getPage: async (n) => { const s = cad.sheets[n - 1]; if (!s) throw new Error('No such sheet'); return s.page; },   // i18n-ignore: a programming error
    destroy: () => { for (const s of cad.sheets) s.page.destroy(); },
    kind: 'cad',
  };
  return { kind: 'cad', hash, name, size, doc, pages, cad };
}

function makeSheet(sp, cad, model0, index) {
  const { units } = cad;
  const sheet = { index, key: sp.key, name: sp.name, kind: sp.kind, space: sp, viewports: [], scale: null, note: '' };
  let b = sp.bounds;
  if (sp.kind === 'paper') {
    const ptU = sp.paperUnit === 'mm' ? PT_MM : PT_IN;
    const r = sp.paper || (b && fin(b.minX) && b.maxX > b.minX ? b : { minX: 0, minY: 0, maxX: 36, maxY: 24 });
    const w = Math.max(1, (r.maxX - r.minX) * ptU), h = Math.max(1, (r.maxY - r.minY) * ptU);
    sheet.toPage = [ptU, 0, 0, ptU, -r.minX * ptU, -r.minY * ptU];
    sheet.width = w; sheet.height = h;
    sheet.ptU = ptU;
    sheet.viewports = (sp.viewports || []).filter((v) => [v.cx, v.cy, v.w, v.h, v.vx, v.vy, v.viewHeight].every(fin) && v.viewHeight > 0)
      .map((v) => ({ ...v, m: mul(sheet.toPage, vpMatrix(v)), rect: { x0: v.cx - v.w / 2, y0: v.cy - v.h / 2, x1: v.cx + v.w / 2, y1: v.cy + v.h / 2 } }));
  } else {
    const ok = b && fin(b.minX) && fin(b.maxX) && b.maxX >= b.minX && b.maxY >= b.minY;
    if (!ok) b = { minX: 0, minY: 0, maxX: 100, maxY: 100 };
    const ext = Math.max(b.maxX - b.minX, b.maxY - b.minY, 1e-9);
    const k = SIZE / ext;
    sheet.k = k;
    sheet.toPage = [k, 0, 0, k, -b.minX * k + PAD, -b.minY * k + PAD];
    sheet.width = (b.maxX - b.minX) * k + PAD * 2; sheet.height = (b.maxY - b.minY) * k + PAD * 2;
  }
  // the scale (TD.2)
  sheet.scale = sheetScale(sheet, units);
  const label = sp.kind === 'model' ? (sp.name || 'Model') : sp.name;
  sheet.info = {
    index, label, number: label,                         // a drawing's sheets are always named: the layout's tab name
    view: [0, 0, sheet.width, sheet.height], rotate: 0, userUnit: 1,
    width: sheet.width, height: sheet.height,
    transform: [1, 0, 0, -1, 0, sheet.height],           // user space (y up) → display (y down)
    cad: { key: sp.key, kind: sp.kind },
  };
  sheet.page = new CadPage(sheet, cad);
  return sheet;
}

/**
 * The scale a sheet starts with, or null (and a reason in `sheet.note`). → { method: 'preset'|'drawing', ftPerUnit, preset?, label }
 * `ftPerUnit` is real feet per page unit. A scale the app can name (1/4" = 1'-0", 1:100…) becomes that preset.
 */
function sheetScale(sheet, units) {
  const ft = units.feetPerUnit;
  if (!ft) { sheet.note = units.code === 0 ? 'nounits' : 'badunits'; return null; }
  if (sheet.kind === 'model') {
    const f = ft / sheet.k;
    return { method: 'drawing', ftPerUnit: f, preset: null, label: t('cad.scale.units', { units: unitLabel(units) }) };
  }
  if (!sheet.viewports.length) { sheet.note = 'noviewport'; return null; }
  // the biggest viewport sets the sheet's scale; a sheet with viewports at other scales says so
  const biggest = [...sheet.viewports].sort((a, c) => c.w * c.h - a.w * a.h)[0];
  const s = biggest.h / biggest.viewHeight;                 // paper units per model unit
  if (!fin(s) || s <= 0) { sheet.note = 'noviewport'; return null; }
  const f = (1 / sheet.ptU) / s * ft;                       // feet per point
  sheet.mixed = sheet.viewports.some((v) => Math.abs(v.h / v.viewHeight / s - 1) > 0.01);
  return { method: 'drawing', ftPerUnit: f, preset: null, label: '', viewportScale: s };
}

// =====================================================================================================================
// Which objects a sheet shows (TD.3, TD.5) — model objects through the layout's viewports, paper-space objects directly

/** Where a drawing object (in its own space) sits on this sheet, as a page point {x, y}; null when the sheet does not show it. */
export function placeRef(sheet, ref, ix) {
  const m = sheet.toPage;
  if (sheet.kind === 'model') return ref.space === 'model' ? { x: m[0] * ref.x + m[4], y: m[3] * ref.y + m[5] } : null;
  if (ref.space === sheet.key) return { x: m[0] * ref.x + m[4], y: m[3] * ref.y + m[5] };
  if (ref.space !== 'model') return null;
  const handle = ix?.layers.get(ref.layer)?.handle;
  for (const v of sheet.viewports) {
    const vm = vpMatrix(v);
    const px = vm[0] * ref.x + vm[2] * ref.y + vm[4], py = vm[1] * ref.x + vm[3] * ref.y + vm[5];
    if (px < v.rect.x0 || px > v.rect.x1 || py < v.rect.y0 || py > v.rect.y1) continue;
    if (handle && v.frozen && v.frozen.has(handle)) return { hidden: true };   // frozen in this viewport only
    return { x: sheet.toPage[0] * px + sheet.toPage[4], y: sheet.toPage[3] * py + sheet.toPage[5] };
  }
  return null;
}

/** The refs (from cadcount.indexDrawing) a sheet shows, each with its page point: [{ ref, x, y }]. Cached per sheet. */
export function sheetRefs(sheet, ix) {
  if (sheet._refs && sheet._refsOf === ix) return sheet._refs;
  const out = [];
  for (const r of ix.all) {
    const p = placeRef(sheet, r, ix);
    if (p && !p.hidden) out.push({ ref: r, x: p.x, y: p.y });
  }
  sheet._refs = out; sheet._refsOf = ix;
  return out;
}

/** Page coordinates → the drawing's own coordinates in the sheet's space (inverse of toPage for a direct sheet). */
export function toDrawing(sheet, x, y) {
  const m = sheet.toPage;
  return { x: (x - m[4]) / m[0], y: (y - m[5]) / m[3] };
}

// =====================================================================================================================
// Linework for snapping (snap.js SnapIndex input) — the drawing's own lines in page user space

/** → { segs: Float64Array [x1,y1,x2,y2…], curve: Uint8Array, n, truncated }. Arcs are already flattened by the compiler: all segments are "straight". */
export function cadLinework(cad, index, { max = 400000 } = {}) {
  const sheet = cad.sheets[index];
  let segs = new Float64Array(4096 * 4), n = 0, truncated = false;
  const push = (ax, ay, bx, by) => {
    if (n >= max) { truncated = true; return; }
    if (!(fin(ax) && fin(ay) && fin(bx) && fin(by)) || (ax === bx && ay === by)) return;
    if (n * 4 >= segs.length) { const g = new Float64Array(Math.min(max * 4, segs.length * 2)); g.set(segs); segs = g; }
    segs[n * 4] = ax; segs[n * 4 + 1] = ay; segs[n * 4 + 2] = bx; segs[n * 4 + 3] = by; n++;
  };
  const shown = (b, vp) => layerShown(cad, b.layer) && !(vp?.frozen?.size && vp.frozen.has(cad.layerHandles.get(b.layer)));
  const take = (space, m, vp = null) => {
    for (const b of space.batches.values()) {
      if (!shown(b, vp)) continue;
      for (const pl of b.lines) {
        for (let i = 0; i + 3 < pl.length && !truncated; i += 2) {
          const ax = m[0] * pl[i] + m[2] * pl[i + 1] + m[4], ay = m[1] * pl[i] + m[3] * pl[i + 1] + m[5];
          const bx = m[0] * pl[i + 2] + m[2] * pl[i + 3] + m[4], by = m[1] * pl[i + 2] + m[3] * pl[i + 3] + m[5];
          if (vp) {   // only what the viewport shows: its middle must be inside the window (page units)
            const r = vp.pageRect, mx = (ax + bx) / 2, my = (ay + by) / 2;
            if (mx < r.x0 || mx > r.x1 || my < r.y0 || my > r.y1) continue;
          }
          push(ax, ay, bx, by);
        }
      }
    }
  };
  if (sheet.kind === 'model') take(sheet.space, sheet.toPage);
  else {
    const model = cad.drawing.spaces.find((s) => s.kind === 'model');
    for (const v of sheet.viewports) if (model) {
      const t0 = sheet.toPage;
      take(model, v.m, { ...v, pageRect: { x0: t0[0] * v.rect.x0 + t0[4], x1: t0[0] * v.rect.x1 + t0[4], y0: t0[3] * v.rect.y0 + t0[5], y1: t0[3] * v.rect.y1 + t0[5] } });
    }
    take(sheet.space, sheet.toPage);
  }
  return { segs: segs.subarray(0, n * 4), curve: new Uint8Array(n), n, truncated };
}

// =====================================================================================================================
// The page object (the slice of pdf.js's PDFPageProxy the app uses)

class CadPage {
  constructor(sheet, cad) {
    this.sheet = sheet; this.cad = cad;
    this.view = [0, 0, sheet.width, sheet.height]; this.rotate = 0; this.userUnit = 1;
    this.paths = new WeakMap();
  }
  destroy() { this.paths = new WeakMap(); }
  getViewport({ scale = 1 } = {}) {
    const W = this.sheet.width, H = this.sheet.height;
    return { scale, rotation: 0, width: W * scale, height: H * scale, transform: [scale, 0, 0, -scale, 0, H * scale], viewBox: [0, 0, W, H] };
  }
  /** The sheet's own text (title block notes, dimensions' words) for scales written on the sheet. */
  async getTextContent() {
    const items = [];
    const take = (space, m) => { for (const b of space.batches.values()) for (const tx of b.texts) items.push({ str: tx.s, transform: [1, 0, 0, 1, m[0] * tx.x + m[4], m[3] * tx.y + m[5]], width: 0, height: tx.h }); };
    take(this.sheet.space, this.sheet.toPage);
    return { items };
  }
  render({ canvas, viewport, transform = [1, 0, 0, 1, 0, 0], background = null }) {
    const job = { cancelled: false };
    const promise = draw(this, job, canvas, mul(transform, viewport.transform), background);
    return { promise, cancel() { job.cancelled = true; } };
  }
}

const cancelled = () => Object.assign(new Error('Rendering cancelled'), { name: 'RenderingCancelledException' });   // i18n-ignore: pdf.js's own name
const yieldTo = () => new Promise((r) => setTimeout(r, 0));

/** Draw the sheet on `canvas`; `M` = page user space → device pixels. A drawing prints black on white: ink is black, pale colours darken. */
async function draw(page, job, canvas, M, background) {
  const ctx = canvas.getContext('2d');
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (background) { ctx.fillStyle = background; ctx.fillRect(0, 0, canvas.width, canvas.height); }
  const { sheet, cad } = page;
  let n = 0;
  const step = async () => { if (job.cancelled) throw cancelled(); if (++n % 24 === 0) { await yieldTo(); if (job.cancelled) throw cancelled(); } };
  const drawSpace = async (space, m, pxPerUnit, pxPerMm, vp = null) => {
    const texts = [];
    for (const im of space.images || []) {            // a picture the drawing points at is only framed (its file is not here)
      ctx.setTransform(...mul(m, im.m)); ctx.strokeStyle = '#808890'; ctx.lineWidth = 1 / (Math.hypot(im.m[0], im.m[1]) * pxPerUnit || 1); ctx.strokeRect(0, 0, im.w, im.h);
    }
    for (const b of space.batches.values()) {
      await step();
      if (!layerShown(cad, b.layer)) continue;                                       // off / frozen in the file, or turned off in the layer panel
      if (vp?.frozen?.size && vp.frozen.has(cad.layerHandles.get(b.layer))) continue;   // frozen in this viewport only
      const p = pathsFor(page, b);
      const color = ink(b.color);
      ctx.setTransform(...mul(m, [1, 0, 0, 1, p.origin[0], p.origin[1]]));
      for (const f of p.fills) { ctx.globalAlpha = f.pattern ? 0.18 : 1; ctx.fillStyle = color; ctx.fill(f.path, 'evenodd'); }
      ctx.globalAlpha = 1;
      if (p.lines) {
        ctx.strokeStyle = color;
        ctx.lineWidth = Math.max(1, (b.lw ?? 0.25) * (pxPerMm || 0)) / pxPerUnit;
        ctx.lineJoin = 'round';
        ctx.stroke(p.lines);
      }
      if (b.texts.length) texts.push([b, color]);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (const [b, color] of texts) {
      ctx.fillStyle = color;
      for (const tx of b.texts) {
        const px = tx.h * pxPerUnit;
        if (px < 2 || px > 4000) continue;
        const X = m[0] * tx.x + m[2] * tx.y + m[4], Y = m[1] * tx.x + m[3] * tx.y + m[5];
        const ang = Math.atan2(-(m[1] * Math.cos(tx.rot) + m[3] * Math.sin(tx.rot)), m[0] * Math.cos(tx.rot) + m[2] * Math.sin(tx.rot));
        ctx.save(); ctx.translate(X, Y); ctx.rotate(-ang);
        if (tx.mirror) ctx.scale(-1, 1);
        ctx.font = (px * 1.1).toFixed(2) + 'px "Archivo Narrow", "Arial Narrow", Arial, sans-serif';   // i18n-ignore: CSS font list
        ctx.textAlign = ['left', 'center', 'right'][tx.ha] || 'left';
        ctx.textBaseline = ['alphabetic', 'bottom', 'middle', 'top'][tx.va] || 'alphabetic';
        ctx.fillText(tx.s, 0, 0);
        ctx.restore();
      }
    }
  };
  const sp = sheet.space;
  const scalePx = Math.hypot(M[0], M[1]);                 // device px per page unit
  if (sheet.kind === 'model') {
    await drawSpace(sp, mul(M, sheet.toPage), scalePx * sheet.k, 0);
  } else {
    const model = cad.drawing.spaces.find((s) => s.kind === 'model');
    const pxPerMm = scalePx * PT_MM;                      // device px per millimetre of paper
    for (const v of sheet.viewports) {
      if (!model) break;
      await step();
      ctx.save();
      ctx.setTransform(...mul(M, sheet.toPage));
      ctx.beginPath(); ctx.rect(v.rect.x0, v.rect.y0, v.rect.x1 - v.rect.x0, v.rect.y1 - v.rect.y0); ctx.clip();
      await drawSpace(model, mul(M, v.m), scalePx * sheet.ptU * (v.h / v.viewHeight), 0, v);
      if (v.blank) {   // the viewport looks at an empty part of the model (dwg-compile.js vp.blank): its frame, dashed, so the sheet doesn't look broken
        const k = scalePx * sheet.ptU || 1;
        ctx.setTransform(...mul(M, sheet.toPage));
        ctx.lineWidth = 1 / k; ctx.setLineDash([6 / k, 4 / k]); ctx.strokeStyle = '#808890';
        ctx.strokeRect(v.rect.x0, v.rect.y0, v.rect.x1 - v.rect.x0, v.rect.y1 - v.rect.y0);
        ctx.setLineDash([]);
      }
      ctx.restore();
    }
    await drawSpace(sp, mul(M, sheet.toPage), scalePx * sheet.ptU, pxPerMm);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

/** Path2D for a batch, relative to an origin near its data (keeps float precision when zoomed in). */
function pathsFor(page, b) {
  let p = page.paths.get(b);
  if (p) return p;
  const first = b.lines[0] || b.fills[0]?.rings[0] || [0, 0];
  const ox = first[0] || 0, oy = first[1] || 0;
  let lines = null;
  if (b.lines.length) {
    lines = new Path2D();
    for (const pl of b.lines) {
      lines.moveTo(pl[0] - ox, pl[1] - oy);
      for (let i = 2; i < pl.length; i += 2) lines.lineTo(pl[i] - ox, pl[i + 1] - oy);
    }
  }
  const fills = b.fills.map((f) => {
    const path = new Path2D();
    for (const r of f.rings) { path.moveTo(r[0] - ox, r[1] - oy); for (let i = 2; i < r.length; i += 2) path.lineTo(r[i] - ox, r[i + 1] - oy); path.closePath(); }
    return { path, pattern: f.pattern };
  });
  p = { origin: [ox, oy], lines, fills };
  page.paths.set(b, p);
  return p;
}

const inkCache = new Map();
/** 'ink' → black; other colours darkened when pale, so yellow stays readable on white. */
function ink(c) {
  let v = inkCache.get(c);
  if (v) return v;
  if (c === 'ink' || !/^#[0-9a-f]{6}$/i.test(c)) v = '#000000';
  else {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
    const L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    v = L > 0.6 ? '#' + [r, g, b].map((x) => Math.round(x * 0.55).toString(16).padStart(2, '0')).join('') : c;
  }
  inkCache.set(c, v);
  return v;
}
function lin(v) { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }

export { UNIT_NAMES };
