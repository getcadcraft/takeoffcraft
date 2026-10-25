/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadcount.js — exact counting from a CAD drawing (0.7 TD.3, TD.5). DOM-free, import-light: bin/test-takeoffcraft.mjs runs it in
 * Node on the same model the browser gets (cc-dwg's readDwg for DWG, dxf-model.js for DXF; docs/DWG-LIB-SPEC.md "Model").
 *
 *   const ix = indexDrawing(model, { xrefs });      every block reference (INSERT, MINSERT expanded, nested), every top-level
 *                                                   shape with a point, every text — once, with its place in the drawing
 *   catalog(ix, refs)                               what a person can pick: blocks (dynamic variants apart), layer × type, texts
 *   countBlocks(ix, refs, query)                    by block name (+ dynamic variant, layer, nested or top level)
 *   countShapes(ix, refs, query)                    by layer + entity type
 *   countTexts(ix, refs, query)                     by text (TEXT, MTEXT, attribute values, multileader text)
 *   hiddenLayers(ix)                                layers that are off or frozen (not counted unless chosen)
 *
 * `refs` is the list to count among: `ix.all` (the whole drawing, every object once) or the objects one sheet shows
 * (`cadset.js` → `sheet.refs(ix)`: model-space objects seen through a layout's viewports, minus the layers that viewport freezes).
 *
 * A reference ("ref") is `{ id, kind: 'insert'|'shape'|'text', type, name (block's true name, lower case in `key`), variant, layer,
 * x, y (the drawing's own coordinates in its space), space ('model' | 'layout:<handle>'), depth (0 = placed directly in the space),
 * via ([names of the blocks it sits inside]), hidden (layer off or frozen), handle, rot, attribs { TAG: value }, text }`.
 *
 * Layers (TD.5): a layer that is off or frozen in the file is "hidden"; `ix.override` (Map name → true shown | false hidden, shared with the
 * page's layer panel) overrides the file either way, and `ix.isHidden(name)` is the one answer. Hidden layers are not counted unless the
 * query says `hidden: 'include'`; the count says how many it left out. Linked drawings (xrefs) count where they are inserted when their
 * model is passed in (`xrefs`); `ix.xrefs` lists each with whether it was loaded. Objects that cannot be placed (proxy / unknown
 * classes, no usable point) are listed by type in `ix.unplacedBy` and `ix.unknown` — never dropped without a word.
 *
 * Counting is exact and honest: nothing is guessed, an object that cannot be placed is reported (`unplaced`), the walk stops at
 * its caps and says so (`truncated`), a block that is missing or too deeply nested is listed (`skipped`). Drawing content is
 * untrusted: every number is checked, nothing here evaluates anything.
 */

import { dynamicDefs, dynamicOf } from './dwg-dynamic.js';
import { plainText, mtextLines, planOcs } from './dwg-compile.js';

export const LIMITS = Object.freeze({ depth: 20, refs: 1_500_000, array: 1_000_000 });

/** INSUNITS → feet per drawing unit (DXF reference, $INSUNITS). Codes with no entry have no usable length. */
const FT = { 1: 1 / 12, 2: 1, 3: 5280, 4: 0.001 / 0.3048, 5: 0.01 / 0.3048, 6: 1 / 0.3048, 7: 1000 / 0.3048, 8: 1e-6 / 12, 9: 0.001 / 12, 10: 3,
  14: 0.1 / 0.3048, 15: 10 / 0.3048, 16: 100 / 0.3048, 21: 1200 / 3937, 22: 100 / 3937 / 12, 23: 3600 / 3937, 24: 5280 * 1200 / 3937 };
/** INSUNITS → the unit's key (words come from the language file as `cad.unit.<key>`; `unitKey(units)` below). */
export const UNIT_NAMES = { 1: 'inches', 2: 'feet', 3: 'miles', 4: 'millimeters', 5: 'centimeters', 6: 'meters', 7: 'kilometers', 8: 'microinches', 9: 'mils',   // i18n-ignore: language keys
  10: 'yards', 14: 'decimeters', 15: 'decameters', 16: 'hectometers', 21: 'us_survey_feet', 22: 'us_survey_inches', 23: 'us_survey_yards', 24: 'us_survey_miles' };   // i18n-ignore: language keys

/** The drawing's length unit: `{ code, name, feetPerUnit }`; feetPerUnit is null for "unitless" and units that are not lengths we know. */
export function drawingUnits(model) {
  const code = Number(model?.header?.INSUNITS);
  const ft = Number.isInteger(code) ? FT[code] : undefined;
  return { code: Number.isInteger(code) ? code : 0, name: UNIT_NAMES[code] || '', feetPerUnit: ft && Number.isFinite(ft) && ft > 0 ? ft : null };
}

// ---- affine matrices [a, b, c, d, e, f] as dwg-compile.js uses them
const IDENT = [1, 0, 0, 1, 0, 0];
const mul = (p, q) => [
  p[0] * q[0] + p[2] * q[1], p[1] * q[0] + p[3] * q[1],
  p[0] * q[2] + p[2] * q[3], p[1] * q[2] + p[3] * q[3],
  p[0] * q[4] + p[2] * q[5] + p[4], p[1] * q[4] + p[3] * q[5] + p[5],
];
const translate = (x, y) => [1, 0, 0, 1, x, y];
const scaleM = (sx, sy) => [sx, 0, 0, sy, 0, 0];
const rotM = (r) => { const c = Math.cos(r), s = Math.sin(r); return [c, s, -s, c, 0, 0]; };
const ocs = (m, ext) => (ext && ext.z < -0.5 ? mul(m, scaleM(-1, 1)) : m);   // a -Z extrusion mirrors X (as dwg-compile.js)
// A block reference with a tilted extrusion (neither +Z nor -Z: 3D blocks such as Plans.dwg's insulators) is placed by the full
// arbitrary-axis rule seen from above, its OCS z included (dwg-compile.js planOcs, DWG-PLANS-TK 2026-10-24); others as `ocs`.
const insertOcs = (m, e) => { const tilt = planOcs(e.extrusion, num(e.insert?.z, 0)); return tilt ? mul(m, tilt) : ocs(m, e.extrusion); };
const at = (m, x, y) => ({ x: m[0] * x + m[2] * y + m[4], y: m[1] * x + m[3] * y + m[5] });
const num = (v, d = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
const isPt = (p) => p && Number.isFinite(p.x) && Number.isFinite(p.y);

const SHAPE_SKIP = new Set(['INSERT', 'MINSERT', 'VIEWPORT', 'ATTDEF', 'ATTRIB', 'SEQEND', 'POINT_CLOUD']);
const isDim = (t) => t.startsWith('DIMENSION') || t === 'ARC_DIMENSION' || t === 'LARGE_RADIAL_DIMENSION';
const typeName = (e) => (e.type === 'UNKNOWN' ? e.dxfName || e.className || 'UNKNOWN' : e.type);

/** A point that stands for a shape (centre, middle, centre of its box); null when it has none. */
export function shapePoint(e) {
  const mid = (a, b) => (isPt(a) && isPt(b) ? { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } : null);
  const box = (vs) => {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const v of vs || []) if (isPt(v)) { x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y); }
    return x0 <= x1 ? { x: (x0 + x1) / 2, y: (y0 + y1) / 2 } : null;
  };
  switch (e.type) {
    case 'LINE': return mid(e.start, e.end);
    case 'CIRCLE': case 'ARC': case 'ELLIPSE': return isPt(e.center) ? { x: e.center.x, y: e.center.y } : null;
    case 'POINT': return isPt(e.position) ? { x: e.position.x, y: e.position.y } : null;
    case 'LWPOLYLINE': case 'POLYLINE_2D': case 'POLYLINE_3D': case 'POLYLINE_PFACE': case 'POLYLINE_MESH': return box(e.vertices);
    case 'TEXT': case 'MTEXT': return isPt(e.insert) ? { x: e.insert.x, y: e.insert.y } : null;
    case 'SOLID': case 'TRACE': case '3DFACE': return box(e.points);
    case 'SPLINE': return box(e.fit?.length ? e.fit : e.control);
    case 'HATCH': { const l = (e.loops || [])[0]; return l ? box(l.polyline ? l.polyline.vertices : (l.edges || []).flatMap((d) => [d.start, d.end, d.center].filter(Boolean))) : null; }
    case 'LEADER': return box(e.vertices);
    case 'MULTILEADER': { const t = e.context?.text?.location || e.context?.block?.location; return isPt(t) ? { x: t.x, y: t.y } : null; }
    default:
      if (isDim(e.type)) return isPt(e.textMid) ? { x: e.textMid.x, y: e.textMid.y } : isPt(e.defPoint) ? { x: e.defPoint.x, y: e.defPoint.y } : null;
      for (const k of ['insert', 'position', 'center', 'start']) if (isPt(e[k])) return { x: e[k].x, y: e[k].y };
      return null;
  }
}

const textOf = (s) => String(plainText(String(s ?? ''))).replace(/\s+/g, ' ').trim();
const mtextOf = (s) => mtextLines(String(s ?? '')).join(' ').replace(/\s+/g, ' ').trim();   // format codes dropped, line breaks as spaces
/** What a text entity reads, with format codes dropped; '' when it reads nothing. */
export function readText(e) {
  if (e.type === 'TEXT' || e.type === 'ATTRIB' || e.type === 'ATTDEF') return e.attType > 1 && e.mtext ? mtextOf(e.mtext.value) : textOf(e.value);
  if (e.type === 'MTEXT') return mtextOf(e.value);
  if (e.type === 'MULTILEADER') return mtextOf(e.context?.text?.label);
  return '';
}

/**
 * Walk the drawing once and index what can be counted.
 * `xrefs` (Map, key = xref block name in lower case → a read model) draws and counts linked drawings where they are inserted.
 */
export function indexDrawing(model, { xrefs = new Map(), limits = {}, override = new Map() } = {}) {
  const cap = { ...LIMITS, ...limits };
  const blocks = new Map(), byRecord = new Map();
  for (const b of model.blocks || []) { blocks.set(b.name, b); if (b.record) byRecord.set(b.record, b); }
  const modelSpace = (model.blocks || []).find((b) => /^\*model_space$/i.test(b.name)) || null;
  const defs = dynamicDefs(model);
  const layerInfo = new Map();
  for (const l of model.tables?.layers || []) layerInfo.set(l.name, { name: l.name, handle: l.handle || '', on: !l.off, frozen: !!l.frozen, off: !!l.off });
  const layerOf = (name) => layerInfo.get(name) || { name, handle: '', on: true, frozen: false, off: false };

  const out = { refs: [], all: null, units: drawingUnits(model), layers: layerInfo, skipped: {}, truncated: false, unplaced: 0, unplacedBy: {}, unknown: {}, spaces: [], xrefs: [], override };
  const noPlace = (e) => { out.unplaced++; const k = typeName(e); out.unplacedBy[k] = (out.unplacedBy[k] || 0) + 1; };
  const skip = (why, n = 1) => { out.skipped[why] = (out.skipped[why] || 0) + n; };
  let seq = 0;

  // xref blocks (flag 4): the model-space contents of the loaded drawing, in its own block table
  const xdata = new Map();
  for (const [key, xm] of xrefs) {
    const bl = new Map(); for (const b of xm.blocks || []) bl.set(b.name, b);
    const ms = (xm.blocks || []).find((b) => /^\*model_space$/i.test(b.name));
    const xdefs = dynamicDefs(xm);
    xdata.set(key, { model: xm, blocks: bl, byRecord: new Map((xm.blocks || []).filter((b) => b.record).map((b) => [b.record, b])), entities: ms ? ms.entities || [] : [], base: xm.header?.INSBASE || { x: 0, y: 0 }, defs: xdefs, layers: new Map((xm.tables?.layers || []).map((l) => [l.name, l])) });
  }
  for (const b of model.blocks || []) if (b.flags & 4) out.xrefs.push({ name: b.name, loaded: xdata.has(String(b.name).toLowerCase()) });
  // one answer to "is this layer hidden": the page's override, else the file (off or frozen), also for a linked drawing's layers ("<xref>|<layer>")
  const fileLayer = (name) => {
    const l = layerInfo.get(name);
    if (l) return l;
    const i = String(name).indexOf('|');
    const x = i > 0 ? xdata.get(name.slice(0, i).toLowerCase()) : null;
    const xl = x?.layers.get(name.slice(i + 1));
    return xl ? { off: !!xl.off, frozen: !!xl.frozen } : null;
  };
  const hiddenLayer = (name) => (override.has(name) ? !override.get(name) : !!(fileLayer(name)?.off || fileLayer(name)?.frozen));
  out.isHidden = hiddenLayer;

  /** ctx: { m, layer (inherited by layer "0"), depth, via[], space, blocks, defs, model, xp (xref prefix) } */
  function walk(entities, ctx) {
    for (const e of entities) {
      if (out.refs.length >= cap.refs) { out.truncated = true; return; }
      if (!e || e.invisible) continue;
      const src = e.layer || '0';
      const layer = src === '0' && ctx.layer ? ctx.layer : (ctx.xp ? ctx.xp + src : src);
      if (e.type === 'INSERT' || e.type === 'MINSERT') { insert(e, ctx, layer); continue; }
      if (SHAPE_SKIP.has(e.type)) continue;
      if (e.type === 'UNKNOWN') { const k = typeName(e); out.unknown[k] = (out.unknown[k] || 0) + 1; }   // a proxy / class we cannot read: listed
      const m = ocs(ctx.m, e.extrusion);
      const txt = readText(e);
      const p0 = shapePoint(e);
      if (!p0) { noPlace(e); continue; }
      const p = at(m, p0.x, p0.y);
      const base = { id: seq++, layer, x: p.x, y: p.y, space: ctx.space, depth: ctx.depth, via: ctx.via, hidden: hiddenLayer(src === '0' && ctx.layer ? ctx.layer : src), handle: e.handle || '' };
      if (txt && (e.type === 'TEXT' || e.type === 'MTEXT' || e.type === 'MULTILEADER')) out.refs.push({ ...base, kind: 'text', type: e.type, text: txt });
      // text is a shape too (layer + type "TEXT" is a fair question), but only at the top level: nested copies would multiply
      if (ctx.depth === 0 || ctx.deepShapes) out.refs.push({ ...base, id: seq++, kind: 'shape', type: typeName(e) });
    }
  }

  function insert(e, ctx, layer) {
    const blk = ctx.blocks.get(e.block);
    if (!blk) { skip('missing block ' + e.block); return; }   // i18n-ignore: a code the page words (cad.count.skipped.*)
    if (ctx.depth >= cap.depth) { skip('nested too deep'); return; }   // i18n-ignore: a code the page words (cad.count.skipped.*)
    const isX = !!(blk.flags & 4);
    const x = isX ? xdata.get(String(e.block).toLowerCase()) : null;
    if (isX && !x) return;   // a linked drawing that was not loaded: listed in out.xrefs
    const m = insertOcs(ctx.m, e);
    const sx = num(e.scale?.x, 1) || 1, sy = num(e.scale?.y, 1) || 1;
    const cols = Math.max(1, Math.min(cap.array, Math.floor(num(e.cols, 1)))), rows = Math.max(1, Math.min(cap.array, Math.floor(num(e.rows, 1))));
    if (cols * rows > cap.array) { skip('array too large'); return; }   // i18n-ignore: a code the page words (cad.count.skipped.*)
    if (!isPt(e.insert)) { noPlace(e); return; }
    // a dynamic block's reference points at an anonymous copy (*U…); its true name and shown state are the thing to count by
    let dyn = dynamicOf(ctx.model, e, ctx.defs);
    // A dynamic block's reference points at an anonymous copy (*U…, *B…) that names its definition (`dynamicOf` = the definition's record). Some
    // files (and some versions of the reader) carry no parameter graph: the state is then unknown, but the block's true name still is known —
    // and a count must be under the true name, never split over the anonymous copies.
    if (!dyn && blk.dynamicOf && ctx.byRecord) { const def = ctx.byRecord.get(String(blk.dynamicOf)); if (def && def !== blk) dyn = { name: String(def.name), label: null, state: null, states: [], others: [] }; }
    const name = dyn ? dyn.name : (isX ? e.block : (blk.trueName && !String(blk.trueName).startsWith('*') ? blk.trueName : e.block));
    const attribs = {};
    for (const a of e.attribs || []) if (a?.tag) attribs[String(a.tag).toUpperCase()] = readText(a);
    const rot = num(e.rotation, 0);
    const rc = Math.cos(rot), rs = Math.sin(rot);
    const content = x ? x.entities : (blk.entities || []);
    const bp = x ? x.base : (blk.base || { x: 0, y: 0 });
    const hiddenSelf = hiddenLayer(ctx.layer && (e.layer || '0') === '0' ? ctx.layer : (e.layer || '0'));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (out.refs.length >= cap.refs) { out.truncated = true; return; }
        const dx = c * num(e.colSpacing, 0), dy = r * num(e.rowSpacing, 0);
        const p = at(m, e.insert.x + rc * dx - rs * dy, e.insert.y + rs * dx + rc * dy);
        out.refs.push({
          id: seq++, kind: 'insert', type: 'INSERT', name, key: name.toLowerCase(), anon: !dyn && String(e.block).startsWith('*') ? e.block : '', variant: dyn ? (dyn.state ?? '') : null, dynamic: !!dyn,
          layer, x: p.x, y: p.y, space: ctx.space, depth: ctx.depth, via: ctx.via, hidden: hiddenSelf, handle: e.handle || '', rot: rot + (m[1] || m[0] ? Math.atan2(m[1], m[0]) : 0),
          attribs, cell: cols * rows > 1 ? [r, c] : null,
        });
        // its content, one level down, at this copy's place
        const local = mul(mul(translate(e.insert.x, e.insert.y), rotM(rot)), mul(scaleM(sx, sy), translate(-bp.x + dx / sx, -bp.y + dy / sy)));
        const sub = { ...ctx, m: mul(m, local), layer, depth: ctx.depth + 1, via: ctx.via.concat(name), blocks: x ? x.blocks : ctx.blocks, byRecord: x ? x.byRecord : ctx.byRecord, xp: x ? e.block + '|' : ctx.xp, model: x ? x.model : ctx.model, defs: x ? x.defs : ctx.defs };
        // only block references and texts go on: nested INSERTs are counted at depth + 1; shapes inside blocks are walked on demand
        walkInserts(content, sub);
      }
    }
  }

  /** Inside a block: its INSERTs (every depth) are indexed; its other entities are not (see `walkShapes`). */
  function walkInserts(entities, ctx) {
    for (const e of entities) {
      if (out.refs.length >= cap.refs) { out.truncated = true; return; }
      if (!e || e.invisible) continue;
      if (e.type === 'INSERT' || e.type === 'MINSERT') {
        const src = e.layer || '0';
        insert(e, ctx, src === '0' && ctx.layer ? ctx.layer : (ctx.xp ? ctx.xp + src : src));
      } else if (e.type === 'TEXT' || e.type === 'MTEXT') {
        const t = readText(e);
        if (!t || !isPt(e.insert)) continue;
        const m = ocs(ctx.m, e.extrusion), p = at(m, e.insert.x, e.insert.y), src = e.layer || '0';
        const layer = src === '0' && ctx.layer ? ctx.layer : (ctx.xp ? ctx.xp + src : src);
        out.refs.push({ id: seq++, kind: 'text', type: e.type, layer, x: p.x, y: p.y, space: ctx.space, depth: ctx.depth, via: ctx.via, hidden: hiddenLayer(layer), handle: e.handle || '', text: t });
      }
    }
  }

  // ---- the spaces: model first, then every layout in tab order (the same order cadset.js lists sheets)
  const base = { m: IDENT, layer: null, depth: 0, via: [], blocks, byRecord, xp: '', model, defs };
  if (modelSpace) { out.spaces.push({ key: 'model', name: 'Model' }); walk(modelSpace.entities || [], { ...base, space: 'model' }); }
  const layouts = (model.layouts || []).filter((l) => !/^model$/i.test(l.name || '')).sort((a, b) => (a.tabOrder ?? 0) - (b.tabOrder ?? 0));
  for (const l of layouts) {
    const rec = byRecord.get(l.block);
    if (!rec || rec === modelSpace) continue;
    const key = 'layout:' + l.handle;
    out.spaces.push({ key, name: l.name });
    walk(rec.entities || [], { ...base, space: key });
  }
  out.all = out.refs;
  out.layerOf = layerOf;
  return out;
}

/**
 * Shapes (and the text/attributes) inside blocks, on demand: every non-INSERT entity of every block reference, at the place it is
 * drawn. Used when a count asks for "inside blocks too" by layer + type or by text. `visit(kind, e, info)`.
 */
export function walkInside(model, ix, visit, { limits = {} } = {}) {
  const cap = { ...LIMITS, ...limits };
  const blocks = new Map(); for (const b of model.blocks || []) blocks.set(b.name, b);
  let n = 0;
  const run = (entities, ctx) => {
    for (const e of entities) {
      if (!e || e.invisible) continue;
      if (e.type === 'INSERT' || e.type === 'MINSERT') {
        const blk = blocks.get(e.block);
        if (!blk || blk.flags & 4 || ctx.depth >= cap.depth || !isPt(e.insert)) continue;
        const m = insertOcs(ctx.m, e), sx = num(e.scale?.x, 1) || 1, sy = num(e.scale?.y, 1) || 1, rot = num(e.rotation, 0);
        const cols = Math.max(1, Math.floor(num(e.cols, 1))), rows = Math.max(1, Math.floor(num(e.rows, 1)));
        const layer = (e.layer || '0') === '0' && ctx.layer ? ctx.layer : e.layer || '0';
        const bp = blk.base || { x: 0, y: 0 };
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
          if (n++ > cap.refs) { ix.truncated = true; return; }
          const dx = c * num(e.colSpacing, 0), dy = r * num(e.rowSpacing, 0);
          const local = mul(mul(translate(e.insert.x, e.insert.y), rotM(rot)), mul(scaleM(sx, sy), translate(-bp.x + dx / sx, -bp.y + dy / sy)));
          run(blk.entities || [], { m: mul(m, local), layer, depth: ctx.depth + 1, space: ctx.space });
          for (const a of e.attribs || []) if (!(a.flags & 1)) visit('attrib', a, { m: ocs(ctx.m, e.extrusion), layer, depth: ctx.depth + 1, space: ctx.space, insert: e });
        }
      } else if (ctx.depth > 0 && !SHAPE_SKIP.has(e.type)) visit('shape', e, ctx);
    }
  };
  const byRecord = new Map(); for (const b of model.blocks || []) if (b.record) byRecord.set(b.record, b);
  const ms = (model.blocks || []).find((b) => /^\*model_space$/i.test(b.name));
  if (ms) run(ms.entities || [], { m: IDENT, layer: null, depth: 0, space: 'model' });
  for (const l of model.layouts || []) { const rec = byRecord.get(l.block); if (rec && rec !== ms && !/^model$/i.test(l.name || '')) run(rec.entities || [], { m: IDENT, layer: null, depth: 0, space: 'layout:' + l.handle }); }
}

// =====================================================================================================================
// Counting

const fold = (s) => String(s ?? '').trim().toLowerCase();
const layerOk = (r, q) => !q.layers || !q.layers.size || q.layers.has(r.layer) || q.layers.has(fold(r.layer));
const hiddenOk = (r, q, ix) => q.hidden === 'include' || !ix.isHidden(r.layer);

/** Pick the refs the query is about, counting the ones left out for being on hidden layers. */
function select(ix, refs, q, test) {
  const found = []; let hiddenSkipped = 0;
  for (const r of refs) {
    if (!test(r)) continue;
    if (!layerOk(r, q)) continue;
    if (!hiddenOk(r, q, ix)) { hiddenSkipped++; continue; }
    found.push(r);
  }
  return { found, hiddenSkipped };
}

/**
 * Count block references. query: `{ names: ['SHELF-18X42', …] (case does not matter), variant: undefined (all) | 'Open' | '' (state not
 * known), nested: 'all' (default) | 'top' | 'inside', layers: [names] | null, hidden: 'skip' (default) | 'include' }`.
 * → `{ total, found: [ref], byVariant: [[state, n]…], byLayer: [[layer, n]…], hiddenSkipped }`
 */
export function countBlocks(ix, refs, query = {}) {
  const names = new Set((query.names || (query.name ? [query.name] : [])).map(fold));
  const nested = query.nested || 'all';
  const layers = query.layers ? new Set(query.layers) : null;
  const q = { ...query, layers };
  const { found, hiddenSkipped } = select(ix, refs, q, (r) => r.kind === 'insert' && names.has(r.key)
    && (nested === 'all' || (nested === 'top' ? r.depth === 0 : r.depth > 0))
    && (query.variant === undefined || query.variant === null || (r.dynamic && (r.variant ?? '') === query.variant)));
  const tally = (f) => { const m = new Map(); for (const r of found) { const k = f(r); m.set(k, (m.get(k) || 0) + 1); } return [...m].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]))); };
  return { total: found.length, found, byVariant: tally((r) => (r.dynamic ? r.variant ?? '' : null)).filter(([k]) => k !== null), byLayer: tally((r) => r.layer), hiddenSkipped };
}

/**
 * Count shapes by layer + entity type. query: `{ layer: 'E-LITE' | null, type: 'CIRCLE' | null, inside: false, hidden }`.
 * Needs `model` for `inside` (shapes inside blocks are walked on demand): pass it as `query.model`.
 */
export function countShapes(ix, refs, query = {}) {
  const lay = query.layer == null || query.layer === '' ? null : fold(query.layer), typ = query.type ? String(query.type).toUpperCase() : null;
  const test = (r) => r.kind === 'shape' && (!lay || fold(r.layer) === lay) && (!typ || r.type === typ);
  const { found, hiddenSkipped: hs } = select(ix, refs, { ...query, layers: null }, test);
  let hiddenSkipped = hs;
  const inside = query.inside;   // { model, accept(ref) → bool }: also the shapes inside block references
  if (inside?.model) {
    const seen = [];
    walkInside(inside.model, ix, (kind, e, ctx) => {
      if (kind !== 'shape') return;
      const p0 = shapePoint(e); if (!p0) return;
      const p = at(ocs(ctx.m, e.extrusion), p0.x, p0.y);
      const layer = (e.layer || '0') === '0' && ctx.layer ? ctx.layer : e.layer || '0';
      const r = { id: -1, kind: 'shape', type: typeName(e), layer, x: p.x, y: p.y, space: ctx.space, depth: ctx.depth, via: [], hidden: ix.isHidden(layer), handle: e.handle || '' };
      if (!test(r) || (inside.accept && !inside.accept(r))) return;
      seen.push(r);
    });
    for (const r of seen) { if (!hiddenOk(r, query, ix)) hiddenSkipped++; else found.push(r); }
  }
  return { total: found.length, found, hiddenSkipped };
}

/**
 * Count texts. query: `{ text: 'A3', mode: 'exact' (default) | 'contains' | 'word', caseSensitive: false, attribute: 'KCL-ITEM' | null,
 * layers, hidden }`. Texts are TEXT, MTEXT, multileader labels and the values of block attributes (`attribute` narrows to one tag).
 */
export function countTexts(ix, refs, query = {}) {
  const want0 = textOf(query.text ?? '');
  if (!want0) return { total: 0, found: [], hiddenSkipped: 0 };
  const cs = !!query.caseSensitive, mode = query.mode || 'exact';
  const want = cs ? want0 : want0.toLowerCase();
  const word = mode === 'word' ? new RegExp('(^|[^\\p{L}\\p{N}])' + want.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|[^\\p{L}\\p{N}])', 'u') : null;
  const match = (s0) => {
    const s = cs ? s0 : s0.toLowerCase();
    return mode === 'contains' ? s.includes(want) : mode === 'word' ? word.test(s) : s === want;
  };
  const tag = query.attribute ? String(query.attribute).toUpperCase() : null;
  const layers = query.layers ? new Set(query.layers) : null;
  const out = []; let hiddenSkipped = 0;
  const take = (r, text) => {
    if (!layerOk(r, { layers })) return;
    if (!hiddenOk(r, query, ix)) { hiddenSkipped++; return; }
    out.push({ ...r, text });
  };
  for (const r of refs) {
    if (r.kind === 'text' && !tag && match(r.text)) take(r, r.text);
    else if (r.kind === 'insert') {
      for (const [k, v] of Object.entries(r.attribs || {})) if ((!tag || k === tag) && v && match(v)) take(r, v);   // an attribute sits where its block is placed
    }
  }
  return { total: out.length, found: out, hiddenSkipped };
}

// =====================================================================================================================
// What a person can pick

/** Blocks, layer × type and texts in `refs`, most numerous first. */
export function catalog(ix, refs) {
  const blocks = new Map(), shapes = new Map(), layers = new Map(), texts = new Map(), attrs = new Map();
  for (const r of refs) {
    if (r.kind === 'insert') {
      let b = blocks.get(r.key);
      if (!b) { b = { name: r.name, key: r.key, count: 0, top: 0, nested: 0, dynamic: false, variants: new Map(), layers: new Map(), anon: r.anon || '' }; blocks.set(r.key, b); }
      b.count++; r.depth === 0 ? b.top++ : b.nested++;
      if (r.dynamic) { b.dynamic = true; b.variants.set(r.variant ?? '', (b.variants.get(r.variant ?? '') || 0) + 1); }
      b.layers.set(r.layer, (b.layers.get(r.layer) || 0) + 1);
      for (const [tag, v] of Object.entries(r.attribs || {})) if (v) { const k = tag + '\u0000' + v; attrs.set(k, (attrs.get(k) || 0) + 1); }
    } else if (r.kind === 'shape') {
      const k = r.layer + '\u0000' + r.type;
      shapes.set(k, (shapes.get(k) || 0) + 1);
    } else if (r.kind === 'text') {
      texts.set(r.text, (texts.get(r.text) || 0) + 1);
    }
    layers.set(r.layer, (layers.get(r.layer) || 0) + 1);
  }
  const desc = (a, b) => b.count - a.count || String(a.name ?? a.text ?? a.layer).localeCompare(String(b.name ?? b.text ?? b.layer), undefined, { numeric: true });
  return {
    blocks: [...blocks.values()].map((b) => ({ ...b, variants: [...b.variants].map(([state, count]) => ({ state, count })).sort((a, c) => c.count - a.count || a.state.localeCompare(c.state)), layers: [...b.layers].map(([name, count]) => ({ name, count })).sort(desc) })).sort(desc),
    shapes: [...shapes].map(([k, count]) => { const [layer, type] = k.split('\u0000'); return { layer, type, count }; }).sort(desc),
    layers: [...layers].map(([name, count]) => ({ name, count, ...(ix.layerOf(name)), hidden: ix.isHidden(name) })).sort(desc),
    texts: [...texts].map(([text, count]) => ({ text, count })).sort(desc),
    attributes: [...attrs].map(([k, count]) => { const [tag, value] = k.split('\u0000'); return { tag, value, count }; }).sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag) || a.value.localeCompare(b.value, undefined, { numeric: true })),
  };
}

/** Layers that are off or frozen, with how many indexed objects sit on them. */
export function hiddenLayers(ix, refs = ix.all) {
  const n = new Map();
  for (const r of refs) if (ix.isHidden(r.layer)) n.set(r.layer, (n.get(r.layer) || 0) + 1);
  return [...n].map(([name, count]) => ({ name, count, ...ix.layerOf(name), hidden: true })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/** The nearest block reference (or shape) to a point within `tol` drawing units, for "pick one on the sheet". */
export function nearestRef(refs, x, y, tol, kinds = ['insert']) {
  let best = null, bd = tol * tol;
  for (const r of refs) {
    if (!kinds.includes(r.kind)) continue;
    const d = (r.x - x) ** 2 + (r.y - y) ** 2;
    if (d <= bd) { bd = d; best = r; }
  }
  return best;
}
