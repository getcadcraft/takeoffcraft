/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bidsend.js — sending a bid package to the website and reading the prices back (0.7 LC.13 B4 + B6). DOM-free (tested in Node).
 *
 * The website does the mailing, the bidder's page and the sealing (class Bids behind /api/v1/bids/); this file is the app's side:
 *
 *   scopeLines(pkg, sheetLabel)            → the package's lines as the site wants them: [{ key, name, csi, qty, unit, sheets }] — no prices
 *   packagePayload(pkg, form)              → the body of POST /api/v1/bids/packages (title, project, due, opens, tz, message, lines …)
 *   parseInvitees(text)                    → { people: [{ email, name }], bad: [text] } from "Name <a@b.c>", "a@b.c", commas, semicolons, lines
 *   BidsClient(transport)                  → status() · subcontractors() · createPackage(body) · invite(uuid, people) · uploadSheets(uuid, bytes)
 *                                            · review(uuid) · setStatus(uuid, status) · remind(uuid, invitation)  — each throws BidsError
 *   browserTransport({ token, fetchFn })   → a transport for a tab on the website (Bearer from /account/bids-connect)
 *   desktopTransport(cloud)                → a transport for Studio / the desktop apps (cadcraftDesktop.cloud.request: the shell adds the Bearer)
 *   packageSheetsPdf(PDFLib, input)        → the sheets that hold the package's marks, marks drawn in, as one PDF (or null)
 *
 * A transport is `async ({ method, path, body, contentType }) → { status, json, headers }` (body: a string or bytes). The pages never see
 * the shell's token; a browser tab holds its own in sessionStorage (bids-ui.js).
 */

import { t } from './i18n.js';

export class BidsError extends Error {
  constructor(code, status = 0, extra = {}) { super(extra.message || code); this.code = code; this.status = status; Object.assign(this, extra); }
}
/** Errors that mean "sign in / connect again". */
export const CONNECT_AGAIN = new Set(['invalid_token', 'token_revoked', 'token_expired', 'account_inactive']);

const money = (v) => (typeof v === 'number' && Number.isFinite(v) ? Math.round(v * 10000) / 10000 : null);

/** The package's lines for the site. sheetLabel(sheetKey) names a sheet. */
export function scopeLines(pkg, sheetLabel = (k) => k) {
  return pkg.items.map((x) => ({ key: x.itemId, name: x.name, csi: x.csi || '', qty: money(x.qty), unit: x.unit || '', sheets: x.sheets.map(sheetLabel).join('; ').slice(0, 200) }));
}

/**
 * The create-package body. form: { title, project, message, due (Date | ISO string), opens (Date | ISO | '' = show prices as they arrive),
 * senderName, takeoff, trade, tz }.
 */
export function packagePayload(pkg, form, sheetLabel) {
  const iso = (v) => (v instanceof Date ? v.toISOString() : v ? new Date(v).toISOString() : '');
  return {
    title: String(form.title || '').trim(), project: String(form.project || '').trim(), pkg: pkg.key, trade: form.trade || pkg.title,
    takeoff: form.takeoff || '', sender_name: form.senderName || '', message: String(form.message || '').trim(),
    due: iso(form.due), opens: form.opens ? iso(form.opens) : '', tz: form.tz || 'UTC',
    lines: scopeLines(pkg, sheetLabel),
  };
}

const EMAIL_RE = /^[^\s@<>(),;:"]+@[^\s@<>(),;:"]+\.[^\s@<>(),;:"]{2,}$/;
/**
 * "Sam Sub <sam@sub.example>", "sam@sub.example", several per line or separated by commas / semicolons (a name with a comma goes in
 * quotes: "Doe, Jane" <jane@doe.example>). Duplicates (any case) once; what is not an address comes back in `bad`.
 */
export function parseInvitees(text) {
  const chunks = [];
  let cur = '', quote = false, angle = false;
  for (const ch of String(text || '')) {
    if (ch === '"' && !angle) quote = !quote;
    else if (ch === '<' && !quote) angle = true;
    else if (ch === '>' && !quote) angle = false;
    if (!quote && !angle && (ch === '\n' || ch === ';' || ch === ',')) { chunks.push(cur); cur = ''; } else cur += ch;
  }
  chunks.push(cur);
  const people = [], bad = [], seen = new Set();
  for (const chunk of chunks) {
    const c = chunk.trim();
    if (!c) continue;
    let name = '', email = c;
    const m = /^(.*?)<\s*([^<>]*?)\s*>$/.exec(c);
    if (m) { name = m[1].replace(/^["'\s]+|["'\s]+$/g, ''); email = m[2]; }
    email = email.trim().toLowerCase();
    if (!EMAIL_RE.test(email) || email.length > 190) { bad.push(c); continue; }
    if (seen.has(email)) continue;
    seen.add(email);
    people.push({ email, name: name.slice(0, 120) });
  }
  return { people, bad };
}

export class BidsClient {
  constructor(transport) { this.transport = transport; }
  async call(method, path, body, contentType = 'application/json') {
    let res;
    try { res = await this.transport({ method, path, body: body === undefined || typeof body === 'string' || body instanceof Uint8Array ? body : JSON.stringify(body), contentType }); }
    catch (e) { throw new BidsError(e && e.code === 'not_allowed' ? 'not_allowed' : 'offline', 0, { cause: e }); }
    const j = res.json ?? null;
    if (res.status >= 200 && res.status < 300 && j && j.status === 'success') return j.data || {};
    const code = (j && (j.code || j.error)) || (res.status === 429 ? 'throttled' : res.status >= 500 ? 'server' : 'error');
    throw new BidsError(String(code), res.status, { errors: (j && j.errors) || {}, message: (j && (j.error || j.message)) || String(code), retryAfter: Number(res.headers && (res.headers['retry-after'] || res.headers['Retry-After'])) || null });
  }
  status() { return this.call('GET', '/api/v1/bids/status'); }
  async subcontractors() { return (await this.call('GET', '/api/v1/bids/subcontractors')).subcontractors || []; }
  async createPackage(body) { return (await this.call('POST', '/api/v1/bids/packages', body)).package; }
  async invite(uuid, invitees) { return (await this.call('POST', `/api/v1/bids/packages/${uuid}/invite`, { invitees })).results || []; }
  uploadSheets(uuid, bytes) { return this.call('POST', `/api/v1/bids/packages/${uuid}/sheets`, bytes, 'application/pdf'); }
  review(uuid) { return this.call('GET', `/api/v1/bids/packages/${uuid}`); }
  setStatus(uuid, status) { return this.call('POST', `/api/v1/bids/packages/${uuid}/status`, { status }); }
  remind(uuid, invitation) { return this.call('POST', `/api/v1/bids/packages/${uuid}/remind`, { invitation }); }
}

/** A transport over fetch with a Bearer token (a browser tab on the website; paths are same-origin). */
export function browserTransport({ token, fetchFn = (...a) => globalThis.fetch(...a) }) {
  return async ({ method, path, body, contentType }) => {
    const headers = { Authorization: 'Bearer ' + token, Accept: 'application/json' };
    if (body !== undefined) headers['Content-Type'] = contentType;
    const r = await fetchFn(path, { method, headers, body: body === undefined ? undefined : body, credentials: 'omit', cache: 'no-store' });
    let json = null;
    try { json = await r.json(); } catch { json = null; }
    const h = {};
    if (r.headers && typeof r.headers.get === 'function') { const ra = r.headers.get('retry-after'); if (ra) h['retry-after'] = ra; }
    return { status: r.status, json, headers: h };
  };
}

/** A transport over the desktop shell's cloud bridge (cadcraftDesktop.cloud.request: it adds the Bearer; the page never sees it). */
export function desktopTransport(cloud) {
  return async ({ method, path, body, contentType }) => {
    const res = await cloud.request({ method, path, body: typeof body === 'string' ? new TextEncoder().encode(body) : body, contentType });
    let json = null;
    try { json = typeof res.json === 'function' ? res.json() : res.json; } catch { json = null; }
    return { status: res.status, json, headers: res.headers || {} };
  };
}

/**
 * The sheets that hold the package's marks, with those marks drawn in, as one PDF. input: { files: [{ hash, name, bytes, kind?, cad? }],
 * state (the takeoff), itemIds (the package's items), pdfWithMarks, cadSheetsPdf?, remapState? }. → { bytes, pages } | null when no mark of
 * the package is on any sheet. A drawing (DWG / DXF) is drawn as a PDF first (cadpdf.js), as Export › Marked PDF does.
 */
export async function packageSheetsPdf(PDFLib, { files, state, itemIds, pdfWithMarks, cadSheetsPdf, remapState }) {
  const ids = new Set(itemIds);
  const marks = state.marks.filter((m) => ids.has(m.item));
  if (!marks.length) return null;
  const out = await PDFLib.PDFDocument.create({ updateMetadata: false });
  out.setCreator('TakeoffCraft'); out.setProducer('TakeoffCraft (pdf-lib)');
  let pages = 0;
  for (const f of files) {
    const mine = marks.filter((m) => m.sheet.startsWith(f.hash + ':'));
    if (!mine.length) continue;
    const used = [...new Set(mine.map((m) => Number(m.sheet.split(':')[1])))].sort((a, b) => a - b);
    let src = f.bytes, st = { ...state, marks: mine, notes: [] };
    let pick = used;
    if (f.kind === 'cad') {
      if (!cadSheetsPdf || !remapState) continue;
      const made = await cadSheetsPdf(PDFLib, f, used);
      src = made.bytes; st = remapState({ ...state, marks: mine, notes: [] }, f.hash, made.pages); pick = made.pages.map((_, j) => j);
    }
    const marked = await pdfWithMarks(PDFLib, src, f.hash, st, { legend: true });
    const doc = await PDFLib.PDFDocument.load(marked.bytes, { ignoreEncryption: true, updateMetadata: false });
    const copied = await out.copyPages(doc, pick.filter((i) => i >= 0 && i < doc.getPageCount()));
    for (const p of copied) { out.addPage(p); pages++; }
  }
  if (!pages) return null;
  return { bytes: await out.save(), pages };
}

/** The words for a request line under a package: "Sent to 3 people; due Oct 30, sealed until Oct 30". */
export function requestText(req, locale = 'en-US') {
  const d = (v) => (v ? new Date(v).toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' }) : '');
  return t(req.opens ? 'bids.req.sealed' : 'bids.req.open', { n: req.n, due: d(req.due), opens: d(req.opens) });
}
