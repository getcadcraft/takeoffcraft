/* SPDX-License-Identifier: Apache-2.0 */

import { t } from './i18n.js';
/**
 * pdfset.js — the open plan set: PDFs read with pdf.js, their sheets, and how a project file
 * finds its PDFs again. DOM-free apart from what pdf.js itself needs; the pdf.js module is
 * passed in (the browser imports the vendored build, the Node test the legacy build).
 *
 * A file is identified by the SHA-256 of its bytes (+ name and size for people). A sheet is
 * "<hash>:<page index>". PDF content is untrusted: no eval, no scripting, text only as text.
 */

export async function sha256Hex(bytes) {
  let d;
  if (globalThis.crypto && globalThis.crypto.subtle) d = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  else d = (await import('@noble/hashes/sha2.js')).sha256(bytes);   // a page a Studio Live host serves on the LAN: no crypto.subtle (0.5 LV.12/LV.16)
  return Array.from(d, (b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Open one PDF. `urls` = { cmaps, fonts, wasm, icc } base URLs (browser) — optional in Node.
 * Returns { hash, name, size, doc, pages: [{ index, label, number, view, rotate, userUnit, width, height }] }.
 */
export async function openPdf(pdfjs, bytes, name, urls = {}) {
  const hash = await sha256Hex(bytes);
  const size = bytes.byteLength;
  const task = pdfjs.getDocument({
    data: bytes.slice(0),              // pdf.js transfers the buffer to its worker; keep ours
    isEvalSupported: false,
    enableScripting: false,
    enableXfa: false,
    stopAtErrors: false,
    ...(urls.cmaps ? { cMapUrl: urls.cmaps, cMapPacked: true } : {}),
    ...(urls.fonts ? { standardFontDataUrl: urls.fonts } : {}),
    ...(urls.wasm ? { wasmUrl: urls.wasm } : {}),
    ...(urls.icc ? { iccUrl: urls.icc } : {}),
  });
  let doc;
  try { doc = await task.promise; } catch (err) {
    if (err?.name === 'PasswordException') throw new Error(t('pdf.err.password', { file: name }));
    throw new Error(t('pdf.err.read', { file: name, reason: err?.message || t('pdf.err.unknown') }));
  }
  let labels = null;
  try { labels = await doc.getPageLabels(); } catch { labels = null; }
  const pages = [];
  for (let i = 0; i < doc.numPages; i++) {
    const p = await doc.getPage(i + 1);
    const vp = p.getViewport({ scale: 1 });
    const label = labels?.[i] ? String(labels[i]).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, 80) : '';
    pages.push({
      index: i, label,
      number: sheetNumber(label, i),
      view: p.view.slice(), rotate: p.rotate, userUnit: p.userUnit || 1,
      width: vp.width, height: vp.height,           // display size in user units (rotation applied)
      transform: vp.transform.slice(),              // user space → display (y down, rotation applied)
    });
  }
  return { hash, name, size, doc, pages };
}

/** A page label that is more than the page's own number is taken as the sheet number (A-101). */
export function sheetNumber(label, index) {
  if (!label) return '';
  if (label === String(index + 1)) return '';
  return label;
}

/** The name a sheet goes by: "A-101", "A-101 — Set B" (several files open), or "Set B, page 3". */
export function sheetTitle(file, page, multiFile) {
  const fname = file.name.replace(/\.pdf$/i, '');
  if (!page.number) return fname + ', page ' + (page.index + 1);
  return multiFile ? page.number + ' — ' + fname : page.number;
}

/**
 * Match a project's files to the open PDFs. Hash decides; name + size only explain a miss.
 * → { matched: Map(hash → open file), missing: [project file], changed: [{ want, have }] }
 */
export function matchFiles(projectFiles, openFiles) {
  const byHash = new Map(openFiles.map((f) => [f.hash, f]));
  const matched = new Map(), missing = [], changed = [];
  for (const pf of projectFiles) {
    const f = byHash.get(pf.hash);
    if (f) { matched.set(pf.hash, f); continue; }
    const same = openFiles.find((o) => o.name === pf.name);
    if (same) changed.push({ want: pf, have: same });
    else missing.push(pf);
  }
  return { matched, missing, changed };
}
