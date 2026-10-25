/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadpdf.js — a drawing's sheets as a vector PDF, so the marked PDF works from a DWG / DXF without anyone plotting first (0.7 TD.6). The
 * result goes through pdfmarks.js (`pdfWithMarks`) like any PDF: same marks, same legends, same quantities. DOM-free; the caller passes
 * pdf-lib in (the browser imports it on first use; Node tests load the vendored file).
 *
 *   const { bytes, pages } = await cadSheetsPdf(PDFLib, set, [sheetIndex, …])   page j of the PDF is sheet pages[j]
 *   const remapped = remapState(state, set.hash, pages)                           the takeoff's marks, notes and scales, keyed to those pages
 *
 * Each page is the sheet's page (points, y up: the same user space the marks are in), drawn from the same compiled content the sheet
 * shows on screen (dwg-compile.js batches): lines and fills as vector paths, text in Helvetica (characters it has no glyph for print as
 * "?"), a layout's viewports clipped, the layers the layer panel hides left out. It is not CadCraft's plot: no plot style tables, pen
 * assignments or CTB; lines are black or the drawing's colour darkened for white paper, weights from the drawing's own (lineweights).
 */

import { layerShown } from './cadset.js';
import { winAnsi } from './pdfmarks.js';

const PT_MM = 72 / 25.4;
const mul = (p, q) => [
  p[0] * q[0] + p[2] * q[1], p[1] * q[0] + p[3] * q[1],
  p[0] * q[2] + p[2] * q[3], p[1] * q[2] + p[3] * q[3],
  p[0] * q[4] + p[2] * q[5] + p[4], p[1] * q[4] + p[3] * q[5] + p[5],
];
const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
/** 'ink' → black; other colours darkened when pale (as the sheet on screen does), as 0..1 rgb. */
function colorOf(c) {
  if (c === 'ink' || !/^#[0-9a-f]{6}$/i.test(c)) return [0, 0, 0];
  const v = [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
  const L = 0.2126 * lin(v[0]) + 0.7152 * lin(v[1]) + 0.0722 * lin(v[2]);
  return (L > 0.6 ? v.map((x) => x * 0.55) : v).map((x) => x / 255);
}

/** Sheets `indexes` of the drawing as one PDF. → { bytes, pages: [sheet index] } */
export async function cadSheetsPdf(PDFLib, set, indexes) {
  const { PDFDocument, StandardFonts, PDFOperator, PDFOperatorNames: Ops, pushGraphicsState, popGraphicsState, moveTo, lineTo, closePath, stroke, fill, clip, endPath, rectangle,
    concatTransformationMatrix, setLineWidth, setStrokingColor, setFillingColor, setLineJoin, setLineCap, setGraphicsState, rgb, degrees } = PDFLib;
  const cad = set.cad;
  const doc = await PDFDocument.create({ updateMetadata: false });
  doc.setTitle(String(set.name).replace(/\.(dwg|dxf)$/i, ''));
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fillGs = doc.context.obj({ Type: 'ExtGState', ca: 0.18, CA: 1 });
  const pages = [];
  for (const idx of indexes) {
    const sheet = cad.sheets[idx];
    if (!sheet) continue;
    const page = doc.addPage([Math.max(1, sheet.width), Math.max(1, sheet.height)]);
    pages.push(idx);
    const patName = page.node.newExtGState('TcPat', doc.context.register(fillGs));
    const modelSpace = cad.drawing.spaces.find((s) => s.kind === 'model');
    const evenOdd = () => PDFOperator.of(Ops.FillEvenOdd);
    /** Draw one space: M = its world → page matrix; `paper` = the layout's own lines (their weights are paper millimetres), else hairlines. */
    const space = (sp, M, vp, paper = false) => {
      const s = Math.hypot(M[0], M[1]) || 1;
      const texts = [];
      for (const b of sp.batches.values()) {
        if (!layerShown(cad, b.layer)) continue;
        if (vp?.frozen?.size && vp.frozen.has(cad.layerHandles.get(b.layer))) continue;
        const [r, g, bl] = colorOf(b.color);
        const ops = [pushGraphicsState(), concatTransformationMatrix(M[0], M[1], M[2], M[3], M[4], M[5]), setLineJoin(1), setLineCap(1), setStrokingColor(rgb(r, g, bl)), setFillingColor(rgb(r, g, bl))];
        let any = false;
        for (const f of b.fills) {
          ops.push(pushGraphicsState());
          if (f.pattern) ops.push(setGraphicsState(patName));
          for (const ring of f.rings) { if (ring.length < 6) continue; ops.push(moveTo(ring[0], ring[1])); for (let i = 2; i + 1 < ring.length; i += 2) ops.push(lineTo(ring[i], ring[i + 1])); ops.push(closePath()); }
          ops.push(evenOdd(), popGraphicsState()); any = true;
        }
        if (b.lines.length) {
          const lw = Math.max(0.25, paper ? (b.lw ?? 0.25) * PT_MM : (b.lw ?? 0.25) * PT_MM * 0.5) / s;   // points, then into the space's own units
          ops.push(setLineWidth(lw));
          for (const pl of b.lines) { if (pl.length < 4) continue; ops.push(moveTo(pl[0], pl[1])); for (let i = 2; i + 1 < pl.length; i += 2) ops.push(lineTo(pl[i], pl[i + 1])); }
          ops.push(stroke()); any = true;
        }
        ops.push(popGraphicsState());
        if (any) page.pushOperators(...ops);
        if (b.texts.length) texts.push([b, [r, g, bl]]);
      }
      for (const [b, [r, g, bl]] of texts) for (const t of b.texts) {
        const X = M[0] * t.x + M[2] * t.y + M[4], Y = M[1] * t.x + M[3] * t.y + M[5];
        const size = t.h * s;
        if (!(size >= 0.5) || size > 2000 || !t.s) continue;
        const ang = Math.atan2(M[1], M[0]) + t.rot, text = winAnsi(t.s);
        const w = font.widthOfTextAtSize(text, size);
        const dx = t.ha === 1 ? -w / 2 : t.ha === 2 ? -w : 0, dy = t.va === 3 ? -size * 0.75 : t.va === 2 ? -size * 0.35 : 0;
        const c = Math.cos(ang), sn = Math.sin(ang);
        page.drawText(text, { x: X + dx * c - dy * sn, y: Y + dx * sn + dy * c, size, font, rotate: degrees(ang * 180 / Math.PI), color: rgb(r, g, bl) });
      }
    };
    if (sheet.kind === 'model') space(sheet.space, sheet.toPage, null, false);
    else {
      for (const v of sheet.viewports) {
        if (!modelSpace) break;
        const t0 = sheet.toPage;
        const x0 = t0[0] * v.rect.x0 + t0[4], y0 = t0[3] * v.rect.y0 + t0[5], x1 = t0[0] * v.rect.x1 + t0[4], y1 = t0[3] * v.rect.y1 + t0[5];
        page.pushOperators(pushGraphicsState(), rectangle(Math.min(x0, x1), Math.min(y0, y1), Math.abs(x1 - x0), Math.abs(y1 - y0)), clip(), endPath());
        space(modelSpace, v.m, v);
        page.pushOperators(popGraphicsState());
      }
      space(sheet.space, sheet.toPage, null, true);
    }
  }
  return { bytes: await doc.save(), pages };
}

/**
 * The takeoff's state for the PDF `cadSheetsPdf` made: sheets "<hash>:<index>" become "<hash>:<page>" (page j = the j-th sheet drawn);
 * marks, notes and scales of sheets that were not drawn are left out. A new object: the takeoff itself is untouched.
 */
export function remapState(state, hash, pages) {
  const to = new Map(pages.map((idx, j) => [hash + ':' + idx, hash + ':' + j]));
  const sheets = {};
  for (const [k, v] of Object.entries(state.sheets || {})) if (to.has(k)) sheets[to.get(k)] = v;
  return {
    ...state, sheets,
    marks: state.marks.filter((m) => to.has(m.sheet)).map((m) => ({ ...m, sheet: to.get(m.sheet) })),
    notes: (state.notes || []).filter((n) => to.has(n.sheet)).map((n) => ({ ...n, sheet: to.get(n.sheet) })),
  };
}
