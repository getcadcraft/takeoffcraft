/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pdfmarks.js — a copy of a PDF with the takeoff drawn in (pdf-lib). DOM-free: the caller
 * passes the pdf-lib module in (the browser imports it on first use; the Node test loads the
 * vendored file), so this file has no bare imports.
 *
 * Marks are already in PDF user space, so they are drawn as they are (arcs as cubic Béziers): linear runs as stroked
 * paths, areas filled at 22% (cut-outs left open: even-odd) with a solid outline, counts as
 * dots. pdf-lib wraps the page's own content in q … Q, so a page that leaves its graphics
 * state changed cannot shift the marks. Each marked page gets a small legend (item, colour,
 * quantity on that sheet) in its visual bottom-left corner, upright whatever /Rotate says.
 * The original file is never changed: this returns new bytes.
 */

import { quantities, itemQty, condQty } from './model.js';
import { UNITS, fixed } from './units.js';
import { pathOps, spans } from './geom.js';
import { t } from './i18n.js';

/** Helvetica (WinAnsi) can't draw every character; anything else prints as "?". */
export const winAnsi = (s) => String(s).replace(/[^\x20-\x7E\xA0-\xFF€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, '?');

const hexRgb = (PDFLib, hex) => {
  const n = parseInt(hex.slice(1), 16);
  return PDFLib.rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
};

/**
 * @param PDFLib     the pdf-lib module
 * @param bytes      the original PDF
 * @param fileHash   which project file this is (marks are keyed "<hash>:<page>")
 * @param state      Takeoff state
 * @param opts.legend  draw the per-page legend (default true)
 * @returns { bytes, pages: number of pages marked, marks: number of marks drawn }
 */
export async function pdfWithMarks(PDFLib, bytes, fileHash, state, { legend = true } = {}) {
  const { PDFDocument, StandardFonts, PDFOperator, PDFOperatorNames: Ops, pushGraphicsState, popGraphicsState, moveTo, lineTo,
    closePath, stroke, setLineWidth, setStrokingColor, setFillingColor, setGraphicsState, setLineCap, setLineJoin, appendBezierCurve, fill, degrees, rgb, setDashPattern } = PDFLib;
  const doc = await PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
  if (doc.isEncrypted) throw new Error(t('pdf.err.encrypted'));
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const items = new Map(state.items.map((i) => [i.id, i]));
  const q = quantities(state);
  const pages = doc.getPages();
  const fillGs = doc.context.obj({ Type: 'ExtGState', ca: 0.22, CA: 1 });
  const dotGs = doc.context.obj({ Type: 'ExtGState', ca: 0.85, CA: 1 });
  let marked = 0, drawn = 0;

  for (let p = 0; p < pages.length; p++) {
    const key = fileHash + ':' + p;
    const marks = state.marks.filter((m) => m.sheet === key && items.has(m.item));
    const notes = (state.notes || []).filter((n) => n.sheet === key);
    if (!marks.length && !notes.length) continue;
    const page = pages[p];
    const box = page.getCropBox();
    const w = Math.max(0.75, Math.min(box.width, box.height) / 600);
    const fillName = page.node.newExtGState('TcFill', doc.context.register(fillGs));
    const dotName = page.node.newExtGState('TcDot', doc.context.register(dotGs));
    const ops = [pushGraphicsState(), setLineCap(1), setLineJoin(1), setLineWidth(w)];
    const path = (pts, close) => {
      for (const op of pathOps(pts, close)) {
        if (op[0] === 'M') ops.push(moveTo(op[1].x, op[1].y));
        else if (op[0] === 'L') ops.push(lineTo(op[1].x, op[1].y));
        else if (op[0] === 'C') ops.push(appendBezierCurve(op[1].x, op[1].y, op[2].x, op[2].y, op[3].x, op[3].y));
        else ops.push(closePath());
      }
    };
    for (const m of marks) {
      const color = hexRgb(PDFLib, items.get(m.item).color);
      ops.push(setStrokingColor(color), setFillingColor(color));
      if (m.kind === 'linear') {
        // deduct segments (T2) dashed and thin: drawn, not counted
        for (const sp of spans(m.pts, new Set(m.deducts || []))) {
          if (sp.deduct) ops.push(pushGraphicsState(), setLineWidth(w * 0.6), setDashPattern([w * 4, w * 3], 0));
          path(sp.pts, false); ops.push(stroke());
          if (sp.deduct) ops.push(popGraphicsState());
        }
      }
      else if (m.kind === 'area') {
        ops.push(pushGraphicsState(), setGraphicsState(fillName));
        path(m.pts, true);
        for (const h of m.holes) path(h, true);
        ops.push(PDFOperator.of(Ops.FillEvenOdd), popGraphicsState());
        path(m.pts, true);
        for (const h of m.holes) path(h, true);
        ops.push(stroke());
      } else {
        const r = w * 3.5, k = 0.5523 * r, { x, y } = m.pts[0];
        ops.push(pushGraphicsState(), setGraphicsState(dotName), moveTo(x + r, y),
          appendBezierCurve(x + r, y + k, x + k, y + r, x, y + r), appendBezierCurve(x - k, y + r, x - r, y + k, x - r, y),
          appendBezierCurve(x - r, y - k, x - k, y - r, x, y - r), appendBezierCurve(x + k, y - r, x + r, y - k, x + r, y), closePath(), fill(), popGraphicsState());
      }
      drawn++;
    }
    ops.push(popGraphicsState());
    page.pushOperators(...ops);
    if (notes.length) drawNotes(PDFLib, doc, page, notes, w, font, bold);
    if (legend && marks.length) drawLegend(PDFLib, page, box, font, bold, marks, items, q, key, { rgb, degrees });
    marked++;
  }
  doc.setProducer('TakeoffCraft (pdf-lib)');
  const out = await doc.save({ useObjectStreams: false });
  return { bytes: out, pages: marked, marks: drawn };
}

/** Markup colours (T22): a note by its status; clouds red; highlights yellow. */
export const NOTE_COLORS = { open: '#D9480F', answered: '#1F6FEB', closed: '#6E7781', cloud: '#D62728', highlight: '#FFD400' };

/** Markups (T22): highlights under see-through yellow, clouds scalloped, notes as a pin with their text and status. */
function drawNotes(PDFLib, doc, page, notes, w, font, bold) {
  const { pushGraphicsState, popGraphicsState, moveTo, appendBezierCurve, closePath, stroke, fill, setLineWidth, setStrokingColor, setFillingColor, setGraphicsState } = PDFLib;
  const hl = page.node.newExtGState('TcHl', doc.context.register(doc.context.obj({ Type: 'ExtGState', ca: 0.35, CA: 1 })));
  const ops = [pushGraphicsState()];
  const label = (n, x, y) => {
    const head = t('note.status.' + n.status).toUpperCase();
    const lines = [head, ...String(n.text || '').split('\n').flatMap((l) => l.match(/.{1,48}(\s|$)|\S+/g) || ['']).slice(0, 8)].map((l) => winAnsi(l.trim()));
    const size = w * 7, lh = size * 1.3;
    const width = Math.max(...lines.map((l, i) => (i ? font : bold).widthOfTextAtSize(l, size))) + size;
    const h = lines.length * lh + size * 0.4;
    page.drawRectangle({ x, y: y - h, width, height: h, color: PDFLib.rgb(1, 1, 1), borderColor: hexRgb(PDFLib, NOTE_COLORS[n.kind === 'note' ? n.status : n.kind === 'cloud' ? 'cloud' : n.status]), borderWidth: w * 0.8, opacity: 0.92 });
    lines.forEach((l, i) => page.drawText(l, { x: x + size / 2, y: y - (i + 1) * lh + size * 0.15, size, font: i ? font : bold, color: PDFLib.rgb(0.1, 0.1, 0.12) }));
  };
  const post = [];
  for (const n of notes) {
    if (n.kind === 'highlight') {
      const [a, b] = n.pts, x0 = Math.min(a.x, b.x), y0 = Math.min(a.y, b.y), x1 = Math.max(a.x, b.x), y1 = Math.max(a.y, b.y);
      ops.push(pushGraphicsState(), setGraphicsState(hl), setFillingColor(hexRgb(PDFLib, NOTE_COLORS.highlight)),
        moveTo(x0, y0), PDFLib.lineTo(x1, y0), PDFLib.lineTo(x1, y1), PDFLib.lineTo(x0, y1), closePath(), fill(), popGraphicsState());
      if (n.text) post.push(() => label(n, x1 + w * 3, y1));
    } else if (n.kind === 'cloud') {
      const [a, b] = n.pts, x0 = Math.min(a.x, b.x), y0 = Math.min(a.y, b.y), x1 = Math.max(a.x, b.x), y1 = Math.max(a.y, b.y);
      ops.push(pushGraphicsState(), setLineWidth(w * 1.4), setStrokingColor(hexRgb(PDFLib, NOTE_COLORS.cloud)));
      cloudPath(x0, y0, x1, y1, w * 9, (op, ...v) => ops.push(op === 'M' ? moveTo(...v) : appendBezierCurve(...v)));
      ops.push(closePath(), stroke(), popGraphicsState());
      post.push(() => label(n, x1 + w * 6, y1));
    } else {
      const { x, y } = n.pts[0], r = w * 5, k = 0.5523 * r;
      ops.push(pushGraphicsState(), setFillingColor(hexRgb(PDFLib, NOTE_COLORS[n.status])), moveTo(x + r, y),
        appendBezierCurve(x + r, y + k, x + k, y + r, x, y + r), appendBezierCurve(x - k, y + r, x - r, y + k, x - r, y),
        appendBezierCurve(x - r, y - k, x - k, y - r, x, y - r), appendBezierCurve(x + k, y - r, x + r, y - k, x + r, y), closePath(), fill(), popGraphicsState());
      post.push(() => label(n, x + r * 1.6, y + r));
    }
  }
  ops.push(popGraphicsState());
  page.pushOperators(...ops);
  for (const f of post) f();
}

/** A revision cloud round a rectangle: scallops of about `d` along each side, bulging out. op('M', x, y) / op('C', 6 numbers). */
export function cloudPath(x0, y0, x1, y1, d, op) {
  const corners = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  op('M', x0, y0);
  for (let e = 0; e < 4; e++) {
    const [ax, ay] = corners[e], [bx, by] = corners[(e + 1) % 4];
    const len = Math.hypot(bx - ax, by - ay), n = Math.max(1, Math.round(len / d));
    let nx = -(by - ay) / len, ny = (bx - ax) / len;
    const mx = (ax + bx) / 2, my = (ay + by) / 2;
    if (nx * (mx - cx) + ny * (my - cy) < 0) { nx = -nx; ny = -ny; }        // outwards, away from the middle
    const hgt = (len / n) * 0.55;
    for (let i = 0; i < n; i++) {
      const px = ax + (bx - ax) * i / n, py = ay + (by - ay) * i / n, qx = ax + (bx - ax) * (i + 1) / n, qy = ay + (by - ay) * (i + 1) / n;
      op('C', px + nx * hgt, py + ny * hgt, qx + nx * hgt, qy + ny * hgt, qx, qy);
    }
  }
}

function drawLegend(PDFLib, page, box, font, bold, marks, items, q, key, { rgb, degrees }) {
  const rot = ((page.getRotation().angle % 360) + 360) % 360;
  const x0 = box.x, y0 = box.y, x1 = box.x + box.width, y1 = box.y + box.height;
  // visual (vx, vy from the visual bottom-left, y up) → user space
  const toUser = {
    0: (vx, vy) => ({ x: x0 + vx, y: y0 + vy }),
    90: (vx, vy) => ({ x: x1 - vy, y: y0 + vx }),
    180: (vx, vy) => ({ x: x1 - vx, y: y1 - vy }),
    270: (vx, vy) => ({ x: x0 + vy, y: y1 - vx }),
  }[rot] || ((vx, vy) => ({ x: x0 + vx, y: y0 + vy }));
  const fs = Math.max(6, Math.min(box.width, box.height) / 120);
  const lines = [];
  const seen = new Set();
  for (const m of marks) {
    if (seen.has(m.item)) continue;
    seen.add(m.item);
    const it = items.get(m.item);
    const tq = q.get(it.id).bySheet.get(key);
    const qty = tq ? [fixed(itemQty(it, tq), it.type === 'count' ? 0 : 2) + ' ' + UNITS[it.unit].label,         // T8: + each condition's
      ...(it.conds || []).filter((c) => tq.conds?.[c.kind]).map((c) => fixed(condQty(c, tq.conds[c.kind]), c.kind === 'count' ? 0 : 2) + ' ' + UNITS[c.unit].label)].join(' + ') : t('pdf.legend.noscale');
    lines.push({ color: it.color, text: winAnsi(it.name.length > 60 ? it.name.slice(0, 59) + '…' : it.name) + '  ' + winAnsi(qty) });
  }
  const title = winAnsi(t('pdf.legend.title'));
  const pad = fs * 0.8, lh = fs * 1.45, sw = fs * 0.9;
  const width = Math.min(Math.max(bold.widthOfTextAtSize(title, fs), ...lines.map((l) => sw + fs * 0.5 + font.widthOfTextAtSize(l.text, fs))) + pad * 2, (rot % 180 ? box.height : box.width) * 0.6);
  const height = pad * 2 + lh * (lines.length + 1);
  const m = fs * 1.5;
  const rect = (vx, vy, w, h, opt) => {
    const o = toUser(vx, vy);
    page.drawRectangle({ x: o.x, y: o.y, width: w, height: h, rotate: degrees(rot), ...opt });
  };
  rect(m, m, width, height, { color: rgb(1, 1, 1), opacity: 0.92, borderColor: rgb(0.1, 0.12, 0.17), borderWidth: 0.75 });
  let vy = m + height - pad - fs;
  const text = (s, vx, f, color = rgb(0.1, 0.12, 0.17)) => { const o = toUser(vx, vy); page.drawText(s, { x: o.x, y: o.y, size: fs, font: f, color, rotate: degrees(rot) }); };
  text(title, m + pad, bold);
  for (const l of lines) {
    vy -= lh;
    rect(m + pad, vy - fs * 0.05, sw, sw * 0.8, { color: hexRgb(PDFLib, l.color) });
    text(l.text, m + pad + sw + fs * 0.5, font);
  }
}
