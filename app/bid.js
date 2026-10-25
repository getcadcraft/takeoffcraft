/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bid.js — the bid summary and the proposal PDF (0.4 item T19). DOM-free (tested in Node; the PDF is drawn with pdf-lib).
 *
 *   normalBid(raw)                      → the takeoff's bid settings, clean (state.bid in the file)
 *   bidSummary(est, bid, alts)          → { lines: [{ key, label, pct?, cents }], total, alts: [{ name, alt, amount, withMarkup }] }
 *   proposalPdf(PDFLib, input)          → Promise<Uint8Array>   input = { state, est, alts, date, items? }
 *
 * The summary, on the base bid's cost (est: model.baseEstimate):
 *   material + labor + labor burden (burden % × labor: payroll taxes, insurance; 0.5 TK.4) + chosen sub bids (0.7 B3) = cost
 *   + sales tax       = tax % × material
 *   + overhead        = overhead % × (cost + tax)
 *   + profit          = profit % × (cost + tax + overhead)
 *   + bond            = bond % × (everything above)
 *   = bid
 * Each line is rounded to the cent; the bid is their sum. An alternate gets the same markups on its own cost
 * (`withMarkup`), so the owner sees what taking it really changes.
 */

import { t } from './i18n.js';
import { formatCents } from './units.js';

const pct = (v) => (Number.isInteger(v) && v >= 0 && v <= 100000 ? v : 0);              // basis points, 0–1000 %
const text = (v, max = 4000) => String(v ?? '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, ' ').slice(0, max);

/** The markups after the cost, in order. `burden` (on labor, part of the cost) comes before them (0.5 TK.4). */
export const BID_FIELDS = ['tax', 'overhead', 'profit', 'bond'];
export const BID_PCTS = ['burden', ...BID_FIELDS];

export function normalBid(raw) {
  const b = raw && typeof raw === 'object' ? raw : {};
  return {
    burden: pct(b.burden), tax: pct(b.tax), overhead: pct(b.overhead), profit: pct(b.profit), bond: pct(b.bond),
    to: text(b.to, 400), project: text(b.project, 200), by: text(b.by, 400),
    incl: text(b.incl), excl: text(b.excl), terms: text(b.terms),
    items: b.items === false ? false : true,
  };
}
export const bidUsed = (b) => !!b && (BID_PCTS.some((k) => b[k] > 0) || ['to', 'project', 'by', 'incl', 'excl', 'terms'].some((k) => b[k]));

const share = (cents, bp) => Math.round(cents * bp / 10000);

/** The markups on a cost of `mat` + `lab` cents (+ the labor burden). */
export function markup(mat, lab, b, subcontract = 0) {
  const burden = share(lab, b.burden || 0);
  const cost = mat + lab + burden + subcontract;      // a chosen sub bid (0.7 B3): no tax on it, no burden; overhead, profit and bond do apply
  const tax = share(mat, b.tax);
  const overhead = share(cost + tax, b.overhead);
  const profit = share(cost + tax + overhead, b.profit);
  const bond = share(cost + tax + overhead + profit, b.bond);
  return { burden, cost, tax, overhead, profit, bond, total: cost + tax + overhead + profit + bond };
}

export function bidSummary(est, bidRaw, alts = []) {
  const b = normalBid(bidRaw);
  const subc = est.subTotal || 0;
  const m = markup(est.matTotal, est.labTotal, b, subc);
  const lines = [
    { key: 'mat', label: t('bid.l.mat'), cents: est.matTotal },
    { key: 'lab', label: t('bid.l.lab'), cents: est.labTotal },
    ...(b.burden > 0 ? [{ key: 'burden', label: t('bid.l.burden'), pct: b.burden, cents: m.burden }] : []),
    ...(subc > 0 ? [{ key: 'sub', label: t('bid.l.sub'), cents: subc }] : []),
    { key: 'cost', label: t('bid.l.cost'), cents: m.cost, sub: true },
  ];
  for (const k of BID_FIELDS) if (b[k] > 0) lines.push({ key: k, label: t('bid.l.' + k), pct: b[k], cents: m[k] });
  lines.push({ key: 'total', label: t('bid.l.total'), cents: m.total, sub: true });
  const altOut = alts.map((a) => {
    const am = markup(a.est.matTotal, a.est.labTotal, b);
    return { name: a.area.name, alt: a.alt, amount: a.amount, withMarkup: a.alt === 'add' ? am.total : -am.total };
  });
  return { lines, total: m.total, alts: altOut, incomplete: !!est.incomplete };
}

// ---------------------------------------------------------------------------
// The proposal PDF

/** Helvetica (WinAnsi) can't draw every character; anything else prints as "?". */
const winAnsi = (s) => String(s).replace(/[^\x20-\x7E\xA0-\xFF€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ\n]/g, '?');
const pctText = (bp) => (bp / 100).toFixed(2).replace(/\.?0+$/, '') + ' %';

/** Words → lines no wider than `w` points. */
function wrap(str, font, size, w) {
  const out = [];
  for (const para of winAnsi(str).split('\n')) {
    let line = '';
    for (const word of para.split(/\s+/).filter(Boolean)) {
      const next = line ? line + ' ' + word : word;
      if (font.widthOfTextAtSize(next, size) <= w || !line) line = next;
      else { out.push(line); line = word; }
      while (font.widthOfTextAtSize(line, size) > w && line.length > 1) {        // one word wider than the line
        let k = line.length - 1;
        while (k > 1 && font.widthOfTextAtSize(line.slice(0, k), size) > w) k--;
        out.push(line.slice(0, k)); line = line.slice(k);
      }
    }
    out.push(line);
  }
  return out;
}

export async function proposalPdf(PDFLib, { state, est, alts = [], date = new Date(), items = null }) {
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const b = normalBid(state.bid);
  const sum = bidSummary(est, b, alts);
  const doc = await PDFDocument.create();
  doc.setTitle(winAnsi(t('bid.pdf.title', { name: state.name || 'Takeoff' })));
  doc.setCreator('TakeoffCraft');
  doc.setProducer('TakeoffCraft (pdf-lib)');
  const font = await doc.embedFont(StandardFonts.Helvetica), bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const W = 612, H = 792, M = 54, ink = rgb(0.1, 0.1, 0.12), grey = rgb(0.38, 0.38, 0.42), rule = rgb(0.75, 0.75, 0.78);
  let page = doc.addPage([W, H]), y = H - M, pageNo = 1;
  const need = (h) => { if (y - h < M + 24) { foot(); page = doc.addPage([W, H]); y = H - M; pageNo++; } };
  const foot = () => page.drawText(winAnsi(t('bid.pdf.page', { n: pageNo })), { x: W - M - font.widthOfTextAtSize(winAnsi(t('bid.pdf.page', { n: pageNo })), 8), y: M - 18, size: 8, font, color: grey });
  const textAt = (s, x, size = 10, f = font, color = ink) => page.drawText(winAnsi(s), { x, y, size, font: f, color });
  const right = (s, xr, size = 10, f = font, color = ink) => { const w = f.widthOfTextAtSize(winAnsi(s), size); page.drawText(winAnsi(s), { x: xr - w, y, size, font: f, color }); };
  const para = (s, size = 10, f = font, color = ink, indent = 0) => { for (const line of wrap(s, f, size, W - 2 * M - indent)) { need(size * 1.4); textAt(line, M + indent, size, f, color); y -= size * 1.4; } };
  const hr = () => { page.drawLine({ start: { x: M, y: y + 4 }, end: { x: W - M, y: y + 4 }, thickness: 0.6, color: rule }); y -= 8; };
  const heading = (s) => { y -= 6; need(30); textAt(s, M, 12, bold); y -= 16; hr(); };

  // head
  textAt(t('bid.pdf.h'), M, 22, bold); y -= 30;
  const when = date.toISOString().slice(0, 10);
  const meta = [[t('bid.pdf.project'), b.project || state.name || ''], [t('bid.pdf.to'), b.to], [t('bid.pdf.from'), b.by], [t('bid.pdf.date'), when]];
  for (const [k, v] of meta) {
    if (!v) continue;
    const lines = wrap(v, font, 10, W - 2 * M - 90);
    need(lines.length * 14);
    textAt(k, M, 10, bold, grey);
    for (const line of lines) { textAt(line, M + 90, 10); y -= 14; }
  }
  y -= 4;

  // the price
  heading(t('bid.pdf.price'));
  for (const l of sum.lines) {
    need(16);
    const label = l.pct ? t('bid.l.pct', { label: l.label, pct: pctText(l.pct) }) : l.label;
    textAt(label, M + (l.sub ? 0 : 12), l.key === 'total' ? 12 : 10, l.sub ? bold : font);
    right(formatCents(l.cents), W - M, l.key === 'total' ? 12 : 10, l.sub ? bold : font);
    y -= l.key === 'total' ? 20 : 15;
  }
  if (sum.incomplete) para(t('bid.pdf.incomplete'), 9, font, grey);

  // alternates
  if (sum.alts.length) {
    heading(t('bid.pdf.alts'));
    for (const a of sum.alts) {
      need(15);
      textAt(t('bid.pdf.alt', { name: a.name, kind: t('alt.' + a.alt).toLowerCase() }), M, 10);
      right((a.withMarkup >= 0 ? '+' : '-') + formatCents(Math.abs(a.withMarkup)), W - M, 10, bold);
      y -= 15;
    }
    para(t('bid.pdf.alts.note'), 9, font, grey);
  }

  // scope: the items and their quantities (no prices)
  const rows = items ?? est.rows.filter((r) => (r.kind === 'item' || r.kind === 'condition') && r.marks > 0);
  if (b.items && rows.length) {
    heading(t('bid.pdf.scope'));
    for (const r of rows) {
      const q = (Math.round(r.qty * 100) / 100).toLocaleString('en-US', { maximumFractionDigits: 2 }) + ' ' + r.unit;
      const name = r.kind === 'condition' ? t('qty.cond.name', { item: r.name, type: t('type.' + r.cond).toLowerCase() }) : r.name;
      const lines = wrap(name, font, 10, W - 2 * M - 120);
      need(lines.length * 14);
      right(q, W - M, 10, font, grey);
      for (const line of lines) { textAt(line, M + 12, 10); y -= 14; }
    }
  }

  // inclusions, exclusions, terms
  const list = (title, body) => {
    const items2 = body.split('\n').map((s) => s.replace(/^\s*[-*•]\s*/, '').trim()).filter(Boolean);
    if (!items2.length) return;
    heading(title);
    for (const it of items2) {
      const lines = wrap(it, font, 10, W - 2 * M - 16);
      need(lines.length * 14);
      textAt('•', M + 2, 10);
      for (const line of lines) { textAt(line, M + 16, 10); y -= 14; }
    }
  };
  list(t('bid.pdf.incl'), b.incl);
  list(t('bid.pdf.excl'), b.excl);
  if (b.terms.trim()) { heading(t('bid.pdf.terms')); para(b.terms); }

  // acceptance
  y -= 10;
  need(80);
  heading(t('bid.pdf.accept'));
  para(t('bid.pdf.accept.text', { total: formatCents(sum.total) }), 10);
  y -= 26;
  need(30);
  for (const [x, label] of [[M, t('bid.pdf.sign')], [M + 300, t('bid.pdf.date')]]) {
    page.drawLine({ start: { x, y: y + 12 }, end: { x: x + 220, y: y + 12 }, thickness: 0.6, color: ink });
    page.drawText(winAnsi(label), { x, y, size: 8, font, color: grey });
  }
  foot();
  return doc.save();
}
