/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — a file that cannot be read is told as `code` plus a plain-English fallback; the page words the code from its language file (eg51.xlsx.<code>) */
/**
 * xlsx-read.js — read the first worksheet of an Excel (.xlsx) workbook as rows of text (0.8 EG.51, takeoff_PART_3: XLSX supplier files).
 * No library, DOM-free (tested in Node): a zip reader over the central directory, DecompressionStream('deflate-raw') for the entries, then the
 * shared-strings table and the sheet's cells read with small, strict patterns. A workbook is an untrusted file: sizes are bounded before anything is
 * inflated, a formula is never run (the cached value is what is read), and nothing in it is followed (no links, no macros, no external data).
 *
 *   await readXlsxRows(bytes)  → { ok: true, rows: [[string…]…], sheet } | { ok: false, code, error }
 *                                code: zip | big | empty | sheet | unsupported
 */
const dec = new TextDecoder('utf-8');
export const XLSX_LIMIT = { entry: 40e6, cells: 400000, rows: 100000, cols: 200 };

async function inflateRaw(bytes, max) {
  const out = new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw')));
  const reader = out.body.getReader(), parts = [];
  let n = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; n += value.length; if (n > max) { await reader.cancel(); throw Object.assign(new Error('big'), { code: 'big' }); } parts.push(value); }
  const all = new Uint8Array(n); let o = 0;
  for (const p of parts) { all.set(p, o); o += p.length; }
  return all;
}
/** The entries of a zip by name: { name → { method, csize, usize, offset } }, read from the central directory. */
export function zipEntries(bytes) {
  const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let e = -1;
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 22 - 65535); i--) if (v.getUint32(i, true) === 0x06054b50) { e = i; break; }
  if (e < 0) return null;
  const count = v.getUint16(e + 10, true);
  let p = v.getUint32(e + 16, true);
  const out = new Map();
  for (let i = 0; i < count && p + 46 <= bytes.length; i++) {
    if (v.getUint32(p, true) !== 0x02014b50) return null;
    const method = v.getUint16(p + 10, true), csize = v.getUint32(p + 20, true), usize = v.getUint32(p + 24, true);
    const nl = v.getUint16(p + 28, true), xl = v.getUint16(p + 30, true), cl = v.getUint16(p + 32, true), off = v.getUint32(p + 42, true);
    out.set(dec.decode(bytes.subarray(p + 46, p + 46 + nl)), { method, csize, usize, offset: off });
    p += 46 + nl + xl + cl;
  }
  return out;
}
async function entryText(bytes, ent) {
  if (!ent) return null;
  if (ent.usize > XLSX_LIMIT.entry) throw Object.assign(new Error('big'), { code: 'big' });
  const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (ent.offset + 30 > bytes.length || v.getUint32(ent.offset, true) !== 0x04034b50) throw Object.assign(new Error('zip'), { code: 'zip' });
  const start = ent.offset + 30 + v.getUint16(ent.offset + 26, true) + v.getUint16(ent.offset + 28, true);
  const body = bytes.subarray(start, start + ent.csize);
  if (ent.method === 0) return dec.decode(body);
  if (ent.method === 8) return dec.decode(await inflateRaw(body, XLSX_LIMIT.entry));
  throw Object.assign(new Error('unsupported'), { code: 'unsupported' });
}
const unxml = (s) => String(s).replace(/&(#x[0-9a-f]+|#\d+|lt|gt|amp|quot|apos);/gi, (m, g) => {
  if (g[0] === '#') { const cp = g[1].toLowerCase() === 'x' ? parseInt(g.slice(2), 16) : parseInt(g.slice(1), 10); return cp > 0 && cp < 0x110000 ? String.fromCodePoint(cp) : ''; }
  return { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" }[g.toLowerCase()];
});
/** All the <t>…</t> text of a string item or inline string (rich text runs are joined; phonetic runs <rPh> are left out). */
const textOf = (xml) => { let s = xml.replace(/<rPh\b[\s\S]*?<\/rPh>/g, ''), o = ''; for (const m of s.matchAll(/<t\b[^>]*>([\s\S]*?)<\/t>/g)) o += unxml(m[1]); return o; };
const colIndex = (ref) => { let n = 0; for (const ch of /^[A-Z]+/i.exec(ref)?.[0] || '') n = n * 26 + (ch.toUpperCase().charCodeAt(0) - 64); return n - 1; };

export async function readXlsxRows(input) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  if (typeof DecompressionStream === 'undefined') return { ok: false, code: 'unsupported', error: 'This browser cannot open Excel files; save the sheet as CSV.' };
  try {
    const ents = zipEntries(bytes);
    if (!ents || !ents.has('xl/workbook.xml')) return { ok: false, code: 'zip', error: 'This is not an Excel (.xlsx) workbook.' };
    // the first sheet in the workbook's order → its file, through the relationship part
    const wb = await entryText(bytes, ents.get('xl/workbook.xml'));
    const rels = (await entryText(bytes, ents.get('xl/_rels/workbook.xml.rels'))) || '';
    const first = /<sheet\b[^>]*>/.exec(wb || '');
    const rid = first && /r:id="([^"]+)"/.exec(first[0])?.[1];
    const sheetName = first && /name="([^"]*)"/.exec(first[0])?.[1];
    let target = null;
    if (rid) for (const m of rels.matchAll(/<Relationship\b[^>]*>/g)) if (new RegExp('Id="' + rid.replace(/[^\w.-]/g, '') + '"').test(m[0])) target = /Target="([^"]+)"/.exec(m[0])?.[1];
    let path = target ? (target.startsWith('/') ? target.slice(1) : 'xl/' + target.replace(/^\.\//, '')) : 'xl/worksheets/sheet1.xml';
    if (!ents.has(path)) path = 'xl/worksheets/sheet1.xml';
    if (!ents.has(path)) return { ok: false, code: 'sheet', error: 'The workbook has no worksheet.' };
    const shared = [];
    const sst = await entryText(bytes, ents.get('xl/sharedStrings.xml'));
    if (sst) for (const m of sst.matchAll(/<si\b[^>]*>([\s\S]*?)<\/si>/g)) { shared.push(textOf(m[1])); if (shared.length > XLSX_LIMIT.cells) break; }
    const xml = await entryText(bytes, ents.get(path));
    const rows = [];
    let cells = 0;
    for (const rm of xml.matchAll(/<row\b([^>]*?)(?:\/>|>([\s\S]*?)<\/row>)/g)) {
      const rn = +(/\br="(\d+)"/.exec(rm[1])?.[1] || rows.length + 1) - 1;
      if (rn < 0 || rn >= XLSX_LIMIT.rows) continue;
      const row = [];
      for (const cm of (rm[2] || '').matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
        if (++cells > XLSX_LIMIT.cells) return { ok: false, code: 'big', error: 'The sheet is too large to read.' };
        const at = /\br="([A-Z]+\d+)"/i.exec(cm[1])?.[1], ty = /\bt="(\w+)"/.exec(cm[1])?.[1];
        const ci = at ? colIndex(at) : row.length;
        if (ci < 0 || ci >= XLSX_LIMIT.cols) continue;
        const body = cm[2] || '';
        let val = '';
        if (ty === 'inlineStr') val = textOf(body);
        else {
          const raw = /<v>([\s\S]*?)<\/v>/.exec(body)?.[1];
          if (raw !== undefined) val = ty === 's' ? shared[+raw] ?? '' : ty === 'b' ? (raw === '1' ? 'TRUE' : 'FALSE') : unxml(raw);
        }
        row[ci] = val;
      }
      while (rows.length < rn) rows.push([]);
      rows[rn] = Array.from(row, (c) => c ?? '');
    }
    if (!rows.some((r) => r.some((c) => c !== ''))) return { ok: false, code: 'empty', error: 'The first sheet is empty.' };
    return { ok: true, rows, sheet: sheetName ? unxml(sheetName) : '' };
  } catch (err) {
    return { ok: false, code: err.code || 'zip', error: err.code === 'big' ? 'The workbook is too large to read.' : 'This is not a readable Excel (.xlsx) workbook.' };
  }
}
