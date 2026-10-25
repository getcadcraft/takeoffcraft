/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bids-ui.js — the dialogs for sending a bid package to the website and pulling the prices back (0.7 LC.13 B4 + B6). The
 * leveling dialog (takeoffcraft.js) calls into this; the logic is bidsend.js and level.js (DOM-free, tested in Node).
 *
 *   const bids = createBidsUi({ root, model, status, files, sheetLabel, divisionTitle, loadPdfLib, loadCad? , transport? })
 *   bids.sendDialog(pkg)         — the "Send for bids" dialog for one package (bidPackages() entry)
 *   bids.getPrices(pkgKey?)      — pull the prices of this package's (or every) sent request into the leveling sheet
 *   bids.requests(pkgKey)        — [{ req, text, info }] for the dialog's rows
 *   bids.connected()             — true when a token (or the desktop bridge) is there
 *
 * Who is signed in: Studio and the desktop apps go through `cadcraftDesktop.cloud.request` (the shell adds the sign-in; this file never sees a
 * token). A browser tab opens /account/bids-connect?app=takeoffcraft, which posts a 30-day, bids-only token back to this tab; it is kept in
 * sessionStorage (gone when the tab closes). Nothing is sent anywhere until the person presses Send.
 */

import { el, icon, ask } from './ui-util.js';
import { t } from './i18n.js';
import { BidsClient, BidsError, CONNECT_AGAIN, browserTransport, desktopTransport, packagePayload, parseInvitees, packageSheetsPdf, requestText } from './bidsend.js';
import { addRequest, mergeReview } from './level.js';

const KEY = 'takeoffcraft.bids';
const CONNECT_PATH = '/account/bids-connect?app=takeoffcraft';
const pad = (n) => String(n).padStart(2, '0');
/** A Date as a datetime-local value, in the computer's own zone. */
export const toLocalInput = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;

export function createBidsUi({ root, model, status, files, sheetLabel, divisionTitle, loadPdfLib, loadCad = null, transport = null, win = globalThis.window, now = () => new Date() }) {
  const info = new Map();                                   // request uuid → the last review's summary (sealed, answered, waiting …)
  const listeners = new Set();
  let token = null;

  const readToken = () => {
    try {
      const j = JSON.parse(win?.sessionStorage?.getItem(KEY) || 'null');
      if (j && typeof j.token === 'string' && /^ccu_[A-Za-z0-9]{40}$/.test(j.token) && Date.parse(j.exp) > Date.now()) return j.token;
    } catch { /* storage blocked: connect again each time */ }
    return null;
  };
  token = readToken();
  const desktop = () => win?.cadcraftDesktop?.cloud && typeof win.cadcraftDesktop.cloud.request === 'function' ? win.cadcraftDesktop.cloud : null;
  const connected = () => !!(transport || desktop() || token);
  const dropToken = () => { token = null; try { win?.sessionStorage?.removeItem(KEY); } catch { /* ignore */ } for (const f of listeners) f(); };

  // the connect tab posts {type, app, token, expires_at} to this one (same origin only)
  if (win?.addEventListener) {
    win.addEventListener('message', (ev) => {
      const d = ev.data;
      if (ev.origin !== win.location.origin || !d || d.type !== 'cadcraft-bids-token' || d.app !== 'takeoffcraft') return;
      if (typeof d.token !== 'string' || !/^ccu_[A-Za-z0-9]{40}$/.test(d.token)) return;
      token = d.token;
      try { win.sessionStorage.setItem(KEY, JSON.stringify({ token: d.token, exp: d.expires_at })); } catch { /* ignore */ }
      for (const f of listeners) f();
    });
  }

  const client = () => {
    const tr = transport || (desktop() ? desktopTransport(desktop()) : token ? browserTransport({ token }) : null);
    if (!tr) throw new BidsError('invalid_token', 401);
    return new BidsClient(tr);
  };
  /** Words for an error, and drop a dead sign-in. */
  const say = (err) => {
    if (!(err instanceof BidsError)) return String(err && err.message ? err.message : err);
    if (CONNECT_AGAIN.has(err.code)) { dropToken(); return t('bids.err.connect'); }
    if (err.code === 'offline') return t('bids.err.offline');
    if (err.code === 'not_allowed') return t('bids.err.studio');
    if (err.code === 'bids_closed') return t('bids.err.closed');
    if (err.code === 'throttled' || err.code === 'busy') return t('bids.err.slow');
    const first = err.errors && Object.values(err.errors)[0];
    return first ? String(first) : err.message || err.code;
  };

  const requests = (pkgKey) => (model.state.bidreqs || []).filter((r) => pkgKey === undefined || r.pkg === pkgKey).map((req) => ({ req, text: requestText(req), info: info.get(req.uuid) || null }));

  /** Pull the prices of one package's requests (or all) into the bids. → { added, updated, declined, late, sealed, waiting, failed } */
  async function getPrices(pkgKey, { quiet = false } = {}) {
    const list = (model.state.bidreqs || []).filter((r) => pkgKey === undefined || r.pkg === pkgKey);
    const out = { added: 0, updated: 0, declined: 0, late: 0, sealed: 0, waiting: 0, failed: 0, requests: list.length };
    if (!list.length) return out;
    if (!connected()) { if (!quiet) status(t('bids.err.connect'), 9000); return { ...out, failed: list.length, needConnect: true }; }
    let c;
    try { c = client(); } catch (e) { return { ...out, failed: list.length }; }
    for (const r of list) {
      try {
        const review = await c.review(r.uuid);
        const m = mergeReview(model, review);
        info.set(r.uuid, { sealed: m.sealed, sealedUntil: review.sealed_until, waiting: m.waiting, status: review.package.status, answered: (review.invitations || []).filter((i) => i.answered).length, invited: (review.invitations || []).length });
        out.added += m.added; out.updated += m.updated; out.declined += m.declined; out.late += m.late; out.waiting += m.waiting; if (m.sealed) out.sealed++;
      } catch (e) {
        out.failed++;
        if (!quiet) status(say(e), 9000);
        if (e instanceof BidsError && CONNECT_AGAIN.has(e.code)) break;
      }
    }
    return out;
  }

  async function sendDialog(pkg) {
    const state = model.state;
    const d0 = now(); d0.setDate(d0.getDate() + 7); d0.setHours(17, 0, 0, 0);
    const inp = (props) => el('input', { className: 'tc-input', ...props });
    const lab = (text, ctl, hint) => el('div', { className: 'tc-field' }, el('label', { className: 'tc-label' }, text, ctl), hint ? el('span', { className: 'tc-note' }, hint) : null);
    const f = {
      title: inp({ type: 'text', maxLength: 160, value: `${state.name || 'Takeoff'}: ${(pkg.key ? pkg.key + ' ' : '') + pkg.title}`, dataset: { bidTitle: '' } }),
      project: inp({ type: 'text', maxLength: 200, value: model.bid().project || state.name || '', dataset: { bidProject: '' } }),
      message: el('textarea', { className: 'tc-input', rows: 3, maxLength: 2000, dataset: { bidMessage: '' } }),
      due: inp({ type: 'datetime-local', value: toLocalInput(d0), dataset: { bidDue: '' } }),
      seal: el('input', { type: 'checkbox', checked: true, dataset: { bidSeal: '' } }),
      opens: inp({ type: 'datetime-local', value: toLocalInput(d0), dataset: { bidOpens: '' } }),
      sheets: el('input', { type: 'checkbox', checked: true, dataset: { bidSheets: '' } }),
      people: el('textarea', { className: 'tc-input', rows: 4, placeholder: t('bids.people.ph'), dataset: { bidPeople: '' } }),
    };
    const hasMarks = state.marks.some((m) => pkg.items.some((x) => x.itemId === m.item));
    f.sheets.checked = hasMarks; f.sheets.disabled = !hasMarks;
    const msg = el('p', { className: 'tc-lib-msg', role: 'status', dataset: { bidMsg: '' } });
    const conn = el('div', { className: 'tc-bids-conn', dataset: { bidConn: '' } });
    const subsBox = el('div', { className: 'tc-bids-subs', dataset: { bidSubs: '' } });
    const picked = new Set();
    let subs = null, created = null, busy = false;
    const sendBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { bidSend: '' } }, icon('send'), ' ' + t('bids.send'));

    const drawConn = () => {
      conn.replaceChildren();
      if (connected()) {
        conn.append(el('span', { className: 'tc-note' }, icon('check-circle'), ' ' + (desktop() ? t('bids.conn.studio') : t('bids.conn.ok'))));
        if (!subs) loadSubs();
      } else {
        conn.append(el('span', { className: 'tc-note' }, t('bids.conn.need')), ' ',
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { bidConnect: '' }, onclick: () => { win.open(CONNECT_PATH, '_blank'); msg.textContent = t('bids.conn.opened'); } }, icon('box-arrow-up-right'), ' ' + t('bids.conn.btn')));
      }
    };
    const drawSubs = () => {
      subsBox.replaceChildren();
      if (!subs) return;
      if (!subs.length) { subsBox.append(el('p', { className: 'tc-note' }, t('bids.subs.none'))); return; }
      const mine = (s) => (pkg.key && String(s.trades || '').includes(pkg.key)) ? 0 : 1;
      subsBox.append(el('p', { className: 'tc-note' }, t('bids.subs.h')));
      for (const s of [...subs].sort((a, b) => mine(a) - mine(b) || a.company.localeCompare(b.company))) {
        const cs = (s.contacts || []).filter((c) => c.email);
        if (!cs.length) continue;
        subsBox.append(el('div', { className: 'tc-bids-sub', dataset: { bidSub: s.uuid } }, el('strong', {}, s.company), s.trades ? el('span', { className: 'tc-note' }, ' · ' + s.trades) : null,
          s.flag === 'expired' ? el('span', { className: 'tc-flag' }, t('bids.subs.expired')) : s.flag === 'soon' ? el('span', { className: 'tc-flag' }, t('bids.subs.soon')) : null,
          ...cs.map((c) => {
            const k = s.uuid + ':' + c.email;
            const cb = el('input', { type: 'checkbox', checked: picked.has(k), dataset: { bidPick: c.email } });
            cb.addEventListener('change', () => { if (cb.checked) picked.add(k); else picked.delete(k); });
            return el('label', { className: 'tc-check' }, cb, ' ' + (c.name ? c.name + ' ' : '') + '<' + c.email + '>');
          })));
      }
    };
    async function loadSubs() {
      try { subs = await client().subcontractors(); } catch (e) { subs = []; msg.textContent = say(e); }
      drawSubs();
    }
    const refresh = () => drawConn();
    listeners.add(refresh);

    const body = el('div', { className: 'tc-bids' },
      el('p', { className: 'tc-note' }, t('bids.send.lead', { pkg: (pkg.key ? pkg.key + ' ' : '') + pkg.title, n: pkg.items.length })),
      conn,
      lab(t('bids.f.title'), f.title), lab(t('bids.f.project'), f.project), lab(t('bids.f.message'), f.message, t('bids.f.message.hint')),
      lab(t('bids.f.due'), f.due, t('bids.f.due.hint', { zone: Intl.DateTimeFormat().resolvedOptions().timeZone })),
      el('label', { className: 'tc-check' }, f.seal, ' ' + t('bids.f.seal')), lab(t('bids.f.opens'), f.opens, t('bids.f.opens.hint')),
      el('label', { className: 'tc-check' }, f.sheets, ' ' + t('bids.f.sheets')),
      lab(t('bids.f.people'), f.people, t('bids.f.people.hint')), subsBox,
      el('p', { className: 'tc-note' }, t('bids.send.privacy')),
      el('div', {}, sendBtn), msg);
    f.seal.addEventListener('change', () => { f.opens.disabled = !f.seal.checked; });
    drawConn();

    async function send() {
      if (busy) return;
      msg.textContent = '';
      const due = f.due.value ? new Date(f.due.value) : null;
      const opens = f.seal.checked ? (f.opens.value ? new Date(f.opens.value) : due) : null;
      const typed = parseInvitees(f.people.value);
      const people = [...typed.people];
      for (const k of picked) {
        const [uuid, email] = [k.slice(0, 36), k.slice(37)];
        const s = (subs || []).find((x) => x.uuid === uuid), c = s && (s.contacts || []).find((x) => x.email === email);
        if (c && !people.some((p) => p.email === email)) people.push({ email, name: c.name, company: s.company, subcontractor: uuid });
      }
      const problem = !connected() ? t('bids.err.connect')
        : !f.title.value.trim() ? t('bids.err.title')
        : !due || Number.isNaN(due.getTime()) || due.getTime() < Date.now() ? t('bids.err.due')
        : opens && (Number.isNaN(opens.getTime()) || opens.getTime() < due.getTime()) ? t('bids.err.opens')
        : typed.bad.length ? t('bids.err.bad', { list: typed.bad.slice(0, 3).join(', ') })
        : !people.length ? t('bids.err.nobody') : null;
      if (problem) { msg.textContent = problem; return; }
      busy = true; sendBtn.disabled = true;
      try {
        const c = client();
        if (!created) {
          msg.textContent = t('bids.step.create');
          created = await c.createPackage(packagePayload(pkg, { title: f.title.value, project: f.project.value, message: f.message.value, due, opens, senderName: win?.cadcraftAccountName || '', takeoff: state.name || '', trade: pkg.title,
            tz: Intl.DateTimeFormat().resolvedOptions().timeZone }, sheetLabel));
        }
        if (f.sheets.checked && !created.sheetsDone) {
          msg.textContent = t('bids.step.sheets');
          const PDFLib = await loadPdfLib();
          const cad = loadCad ? await loadCad() : {};
          const made = await packageSheetsPdf(PDFLib, { files: files(), state, itemIds: pkg.items.map((x) => x.itemId), pdfWithMarks: (await import('./pdfmarks.js')).pdfWithMarks, ...cad });
          if (made) { await c.uploadSheets(created.uuid, made.bytes); created.sheetsDone = made.pages; }
          else created.sheetsDone = 0;
        }
        msg.textContent = t('bids.step.invite');
        const results = await c.invite(created.uuid, people.slice(0, 60));
        const ok = results.filter((r) => r.state === 'invited').length;
        addRequest(model, { uuid: created.uuid, pkg: pkg.key, title: created.title, at: now().toISOString(), due: created.due, opens: created.opens || '', n: ok });
        const notes = [];
        for (const [st, key] of [['already', 'bids.res.already'], ['optout', 'bids.res.optout'], ['invalid', 'bids.res.invalid'], ['limit', 'bids.res.limit'], ['busy', 'bids.res.busy'], ['failed', 'bids.res.failed']]) {
          const n = results.filter((r) => r.state === st).length;
          if (n) notes.push(t(key, { n }));
        }
        msg.textContent = t('bids.sent', { n: ok }) + (notes.length ? ' ' + notes.join(' ') : '');
        status(t('bids.sent', { n: ok }), 9000);
        f.people.value = ''; picked.clear(); drawSubs();
        if (ok === people.length) sendBtn.hidden = true;
      } catch (e) { msg.textContent = say(e); } finally { busy = false; sendBtn.disabled = false; }
    }
    sendBtn.addEventListener('click', send);
    const asked = ask(root, { title: t('bids.send.h'), body, buttons: [['cancel', t('btn.close'), 'btn-line']], focus: '[data-bid-title]' });
    root.querySelector('dialog.tc-dialog[open]')?.classList.add('is-wide');
    await asked;
    listeners.delete(refresh);
  }

  return { sendDialog, getPrices, requests, connected, connectPath: CONNECT_PATH, onConnectionChange: (fn) => { listeners.add(fn); return () => listeners.delete(fn); } };
}
