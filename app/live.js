/* SPDX-License-Identifier: Apache-2.0 */
/**
 * live.js — TakeoffCraft's Studio Live adapter (0.5 LV.16, session live-apps; spec docs/STUDIO-LIVE-SPEC.md § 4, keys and
 * `touched` rules docs/LIVE-PROTOCOL.md § 6). DOM-free: tools/live-apps-test/test-markup-takeoff.mjs drives it in Node
 * against the real session server.
 *
 *   const live = createLive(model, { files })   → the adapter (spec § 4); files() = the open PDFs [{name, bytes}]
 *   live.bind(client) / live.unbind()
 *   createLiveAdapter({ host })                 → Studio's entry point (studio/hub/window.js), for window.takeoffcraft
 *
 * The model keeps a whole copy of the takeoff before each step (model.js change()), so a step's ops are the difference
 * between that copy and the takeoff after it, per object:
 *   {o:'add', c, id, v, at}     an item / mark / bid area / typical group / note created     key e:<c>/<id> (c)
 *   {o:'del', c, id}            …removed                                                   (d)
 *   {o:'set', c, id, f, v|x:1}  one of its fields (an item's assembly travels as one field)  (p)
 *   {o:'key', c, k, v|x:1}      one entry of a keyed table: a sheet's scale and settings      key meta:<c>/<k> (p)
 *   {o:'top', f, v|x:1}         the takeoff's name, the bid…                                  key meta:<f> (p)
 *   {o:'ord', c, v:[id…]}       the order of a list (items moved up or down)                  key meta:<c>.order (p)
 *   {o:'file', v}               a PDF listed in the takeoff (never removed while live)        key meta:file/<hash> (c)
 *   {o:'g', g}                  no effect (marks one step)
 * Totals, quantities and the estimate are never sent: every window works them out from the marks (spec § 4). Ids: each
 * person's new objects number from their own range (client c: c × 1e6 + 1…), so two people never make the same id; `seq`
 * is personal. A mark reads its item (r), so a mark made on an item someone deleted is refused, not orphaned.
 */

import { pack, unpack } from './live-client.js';
import { t } from './i18n.js';
import { kindsOf } from './model.js';

export const SCHEMA = 1;
export const ID_BLOCK = 1e6;
const LISTS = ['items', 'marks', 'areas', 'groups', 'notes'];
const TABLES = ['sheets'];
const PERSONAL = new Set(['seq']);
const clone = (v) => (v === undefined || v === null || typeof v !== 'object' ? v : JSON.parse(JSON.stringify(v)));
const same = (a, b) => a === b || JSON.stringify(a) === JSON.stringify(b);

export function createLive(model, opts = {}) {
  let client = null, emitQueued = false, own = false, g = 0;
  const files = () => (typeof opts.files === 'function' ? opts.files() : opts.files) || [];
  const S = () => model.state;

  // ---- before / after → ops ----------------------------------------------------------------------------------------
  function diff(a, b) {
    const head = [], out = [], tail = [];
    // PDFs listed in the takeoff: added only (opening one is not an edit; a joiner gets every one in the snapshot)
    const had = new Set((a.files || []).map((f) => f.hash));
    for (const f of b.files || []) if (!had.has(f.hash)) head.push({ o: 'file', v: clone(f) });
    // per list: removals, then additions at their final places (ascending), then fields; that rebuilds b exactly
    for (const c of LISTS) {
      const A = new Map((a[c] || []).map((x) => [x.id, x])), B = new Map((b[c] || []).map((x) => [x.id, x]));
      for (const [id, x] of A) if (!B.has(id)) out.push({ o: 'del', c, id, ...dep(c, x) });
      (b[c] || []).forEach((x, at) => { if (!A.has(x.id)) out.push({ o: 'add', c, id: x.id, v: clone(x), at }); });
      for (const x of b[c] || []) {
        const was = A.get(x.id);
        if (!was) continue;
        for (const f of new Set([...Object.keys(was), ...Object.keys(x)])) if (f !== 'id' && !same(was[f], x[f])) out.push(x[f] === undefined ? { o: 'set', c, id: x.id, f, x: 1, ...dep(c, x) } : { o: 'set', c, id: x.id, f, v: clone(x[f]), ...dep(c, x) });
      }
      const before = (a[c] || []).map((x) => x.id).filter((id) => B.has(id)), after = (b[c] || []).map((x) => x.id).filter((id) => A.has(id));
      if (before.join('\n') !== after.join('\n')) tail.push({ o: 'ord', c, v: (b[c] || []).map((x) => x.id) });
    }
    for (const c of TABLES) {
      const A = a[c] || {}, B = b[c] || {};
      for (const k of new Set([...Object.keys(A), ...Object.keys(B)])) if (!same(A[k], B[k])) out.push(B[k] === undefined ? { o: 'key', c, k, x: 1 } : { o: 'key', c, k, v: clone(B[k]) });
    }
    for (const f of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (LISTS.includes(f) || TABLES.includes(f) || f === 'files' || PERSONAL.has(f) || same(a[f], b[f])) continue;
      out.push(b[f] === undefined ? { o: 'top', f, x: 1 } : { o: 'top', f, v: clone(b[f]) });
    }
    return head.concat(out, tail);
  }
  /** What an object depends on: a mark its item, bid area and group; a mark's or note's sheet. */
  const dep = (c, x) => (c === 'marks' ? { it: x.item, ar: x.area, gr: x.group } : {});

  // ---- applying -----------------------------------------------------------------------------------------------------
  function applyOp(op) {
    const s = S();
    switch (op.o) {
      case 'file': if (!(s.files || []).some((f) => f.hash === op.v.hash)) (s.files = s.files || []).push(clone(op.v)); return;
      case 'add': {
        const list = (s[op.c] = s[op.c] || []);
        const i = list.findIndex((x) => x.id === op.id);
        if (i >= 0) list[i] = clone(op.v);
        else list.splice(Number.isInteger(op.at) ? Math.min(op.at, list.length) : list.length, 0, clone(op.v));
        return;
      }
      case 'del': { const list = s[op.c] || []; const i = list.findIndex((x) => x.id === op.id); if (i >= 0) list.splice(i, 1); return; }
      case 'set': {
        const x = (s[op.c] || []).find((y) => y.id === op.id);
        if (!x) return;
        if (op.x) delete x[op.f]; else x[op.f] = clone(op.v);
        return;
      }
      case 'key': { const tb = (s[op.c] = s[op.c] || {}); if (op.x) delete tb[op.k]; else tb[op.k] = clone(op.v); return; }
      case 'top': if (op.x) delete s[op.f]; else s[op.f] = clone(op.v); return;
      case 'ord': {
        const list = s[op.c] || [], by = new Map(list.map((x) => [x.id, x]));
        const next = op.v.map((id) => by.get(id)).filter(Boolean);
        for (const x of list) if (!next.includes(x)) next.push(x);
        s[op.c] = next;
        return;
      }
      default: return;
    }
  }
  /** The inverse of one op on the state as it is before that op. `ids(c)` = the list's ids at that point (invert() walks
   *  the ops in order, so an op's put-back lands where the object was before *that* op, not before the whole step). */
  function invertOp(op, ids) {
    const s = S();
    const find = (c, id) => (s[c] || []).find((x) => x.id === id);
    switch (op.o) {
      case 'file': return null;   // a PDF stays listed (opening one is not an edit)
      case 'add': case 'del': {
        const list = ids(op.c), i = list.indexOf(op.id), x = i >= 0 ? find(op.c, op.id) : null;
        return x ? { o: 'add', c: op.c, id: op.id, v: clone(x), at: i } : { o: 'del', c: op.c, id: op.id, ...(op.v ? dep(op.c, op.v) : {}) };
      }
      case 'set': { const x = find(op.c, op.id); if (!x) return null; return x[op.f] === undefined ? { o: 'set', c: op.c, id: op.id, f: op.f, x: 1, ...dep(op.c, x) } : { o: 'set', c: op.c, id: op.id, f: op.f, v: clone(x[op.f]), ...dep(op.c, x) }; }
      case 'key': { const v = (s[op.c] || {})[op.k]; return v === undefined ? { o: 'key', c: op.c, k: op.k, x: 1 } : { o: 'key', c: op.c, k: op.k, v: clone(v) }; }
      case 'top': return s[op.f] === undefined ? { o: 'top', f: op.f, x: 1 } : { o: 'top', f: op.f, v: clone(s[op.f]) };
      case 'ord': return { o: 'ord', c: op.c, v: ids(op.c).slice() };
      case 'g': return { o: 'g', g: op.g };
      default: return null;
    }
  }
  /** What an op does to a list's ids (the same rules as applyOp). */
  function walk(op, list) {
    if (op.o === 'add') { const i = list.indexOf(op.id); if (i < 0) list.splice(Number.isInteger(op.at) ? Math.min(op.at, list.length) : list.length, 0, op.id); }
    else if (op.o === 'del') { const i = list.indexOf(op.id); if (i >= 0) list.splice(i, 1); }
    else if (op.o === 'ord') { const next = op.v.filter((id) => list.includes(id)); for (const id of list) if (!next.includes(id)) next.push(id); list.splice(0, list.length, ...next); }
  }
  function changed() {
    model.version++;
    if (emitQueued) return;
    emitQueued = true;
    Promise.resolve().then(() => { emitQueued = false; own = true; try { model.emit('change'); } finally { own = false; } live.onApplied?.(); });
  }

  function touched(ops) {
    const out = [], seen = new Set();
    const add = (x) => { const k = x.k + '\u0000' + x.m + '\u0000' + (x.f || ''); if (!seen.has(k)) { seen.add(k); out.push(x); } };
    const reads = (op) => {
      const it = op.it ?? (op.v && op.c === 'marks' ? op.v.item : undefined), ar = op.ar ?? (op.v && op.c === 'marks' ? op.v.area : undefined), gr = op.gr ?? (op.v && op.c === 'marks' ? op.v.group : undefined);
      if (it) add({ k: 'e:items/' + it, m: 'r' });
      if (ar) add({ k: 'e:areas/' + ar, m: 'r' });
      if (gr) add({ k: 'e:groups/' + gr, m: 'r' });
    };
    for (const op of ops) {
      switch (op.o) {
        case 'file': add({ k: 'meta:file/' + op.v.hash, m: 'p', f: 'v' }); break;
        case 'add': add({ k: 'e:' + op.c + '/' + op.id, m: 'c' }); reads(op); break;
        case 'del': add({ k: 'e:' + op.c + '/' + op.id, m: 'd' }); reads(op); break;
        case 'set':
          add({ k: 'e:' + op.c + '/' + op.id, m: 'p', f: op.f }); reads(op);
          if (op.c === 'marks' && op.f === 'item' && op.v) add({ k: 'e:items/' + op.v, m: 'r' });
          break;
        case 'key': add({ k: 'meta:' + op.c + '/' + op.k, m: 'p', f: 'v' }); break;
        case 'top': add({ k: 'meta:' + op.f, m: 'p', f: 'v' }); break;
        case 'ord': add({ k: 'meta:' + op.c + '.order', m: 'p', f: 'v' }); break;
        default: break;
      }
    }
    return out;
  }

  /** The host's checks: a mark needs its item, and its kind must be one the item takes; no list over the file limits. */
  function validate(ops) {
    const s = S();
    const items = new Map((s.items || []).map((x) => [x.id, x]));
    for (const op of ops) {
      if (op.o === 'add' && op.c === 'items') items.set(op.id, op.v);
      if (op.o === 'del' && op.c === 'items') items.delete(op.id);
      if (op.o === 'set' && op.c === 'items') { const x = items.get(op.id); if (x) items.set(op.id, { ...x, [op.f]: op.v }); }
    }
    for (const op of ops) {
      if (op.o === 'add' && op.c === 'marks') {
        const m = op.v, it = m && items.get(m.item);
        if (!m || !it || !Array.isArray(m.pts) || !m.pts.length) return 'invalid';
        if (!kindsOf(it).includes(m.kind)) return 'invalid';
      }
      if (op.o === 'set' && op.c === 'marks' && op.f === 'item' && !items.has(op.v)) return 'invalid';
      if (op.o === 'del' && op.c === 'items' && (s.marks || []).some((m) => m.item === op.id && !ops.some((x) => x.o === 'del' && x.c === 'marks' && x.id === m.id))) return 'invalid';
    }
    return null;
  }

  // ---- whole takeoff ------------------------------------------------------------------------------------------------
  function shared() { const s = clone(S()); for (const k of PERSONAL) delete s[k]; return s; }
  function state() { return { v: SCHEMA, takeoff: shared(), pdfs: files().map((f) => ({ name: f.name, bytes: f.bytes })) }; }
  function loadState(x) {
    if (!x || x.v !== SCHEMA || !x.takeoff) throw new Error('live snapshot: unknown format');   // i18n-ignore (protocol)
    const seq = S().seq || 0;
    model.state = Object.assign(x.takeoff, { seq });
    model.undoStack = []; model.redoStack = [];
    model.version++;
    claimIds();
    own = true; try { model.emit('load'); } finally { own = false; }
    live.onFiles?.(x.pdfs || []);
  }
  function claimIds() {
    if (!client || !client.c) return;
    const lo = client.c * ID_BLOCK, hi = lo + ID_BLOCK, s = S();
    let next = lo;
    for (const c of LISTS) for (const x of s[c] || []) { const n = +String(x.id).replace(/^\D+/, ''); if (n > next && n < hi) next = n; for (const k of x.components || []) { const m = +String(k.id).replace(/^\D+/, ''); if (m > next && m < hi) next = m; } }
    if (!(s.seq >= lo && s.seq < hi)) s.seq = next; else s.seq = Math.max(s.seq, next);
  }
  /** After the session: numbering goes on above every id in the takeoff (as reading a file does). */
  function releaseIds() {
    const s = S();
    let max = 0;
    for (const c of LISTS) for (const x of s[c] || []) { const n = +String(x.id).replace(/^\D+/, ''); if (Number.isFinite(n) && n > max) max = n; }
    s.seq = Math.max(s.seq || 0, max);
  }

  const orig = {};
  const live = {
    app: 'takeoffcraft', schema: SCHEMA, model, onApplied: null, onFiles: null,
    get client() { return client; },
    onLocalChange(cb) { live.report = cb; },
    apply(ops) { for (const op of ops) applyOp(op); changed(); },
    /** After a batch: your own edits confirmed change nothing on screen but what Undo can do. */
    afterApply() { if (!emitQueued) { emitQueued = true; Promise.resolve().then(() => { emitQueued = false; own = true; try { model.emit('change'); } finally { own = false; } }); } },
    invert(ops) {
      const lists = new Map(), ids = (c) => { if (!lists.has(c)) lists.set(c, (S()[c] || []).map((x) => x.id)); return lists.get(c); };
      const inv = [];
      for (const op of ops) { inv.push(invertOp(op, ids)); if (op.c && LISTS.includes(op.c)) walk(op, ids(op.c)); }
      const out = inv.reverse().filter(Boolean);
      const gi = out.findIndex((o) => o.o === 'g'); if (gi > 0) out.unshift(out.splice(gi, 1)[0]);
      return out;
    },
    touched, validate, diff,
    snapshot() { return pack(state()); },
    load(bytes) { loadState(unpack(bytes)); },
    hash() { return JSON.stringify(shared()); },
    bind(c) {
      client = c;
      model.undoStack = []; model.redoStack = [];
      claimIds();
      c.on('welcome', () => claimIds());
      // each step: the copy model.change() kept (the top of its undo stack) against the takeoff now
      orig.change = model.change;
      model.change = function (label, fn) {
        const r = orig.change.call(model, label, fn);
        const top = model.undoStack[model.undoStack.length - 1];
        if (client && r !== false && top && !top.live) {
          top.live = true;
          const ops = diff(top.before, model.state);
          if (ops.length) {
            const mark = { o: 'g', g: 's' + (++g) };
            client.localChange({ label, ops: [mark, ...ops], inverse: [mark, ...diff(model.state, top.before)] });
          }
        }
        return r;
      };
      // the toolbar's Undo / Redo follow your own history in the session
      Object.defineProperty(model, 'canUndo', { configurable: true, get: () => !!client && (client.canUndo() || client.pending.some((p) => p.kind === 'do')) });
      Object.defineProperty(model, 'canRedo', { configurable: true, get: () => !!client && client.canRedo() });
      const topLabel = (st) => (st.length ? st[st.length - 1].label || '' : '');
      orig.undo = model.undo; orig.redo = model.redo;
      model.undo = () => { if (!client) return orig.undo.call(model); const l = topLabel(client.undoStack); return client.undo() ? l : null; };
      model.redo = () => { if (!client) return orig.redo.call(model); const l = topLabel(client.redoStack); return client.redo() ? l : null; };
      return live;
    },
    unbind() {
      if (orig.change) { model.change = orig.change; model.undo = orig.undo; model.redo = orig.redo; }
      delete model.canUndo; delete model.canRedo;
      model.undoStack = []; model.redoStack = [];
      releaseIds();
      client = null;
    },
  };
  return live;
}

/** Studio's entry point: the adapter for the takeoff open in this window (window.takeoffcraft), or null. */
export function createLiveAdapter({ host } = {}) {
  const app = globalThis.takeoffcraft;
  if (!app || !app.model) return null;
  const a = createLive(app.model, { files: () => app.files || [] });
  a.onFiles = (list) => {
    if (!list.length || !app.openFiles) return;
    app.openFiles(list.map((f) => new File([f.bytes], f.name, { type: 'application/pdf' })));
  };
  const lv = host && host.live;
  if (lv && lv.on) {
    let offs = [];
    const say = (s) => { try { app.status && app.status(s); } catch { /* no status bar */ } };
    const off = lv.on((c) => {
      if (c && c.adapter === a) {
        a.bind(c);
        offs = [
          c.on('refused', (r) => say(t(r.reason === 'locked' ? 'live.refused.locked' : r.reason === 'role' ? 'live.refused.role' : 'live.refused', { what: r.label || '', name: r.byName || t('live.someone') }))),
          c.on('undo-skipped', (r) => say(t('live.undo_skipped', { what: r.label || '', name: r.byName || t('live.someone') }))),
          c.on('ended', () => say(t('live.ended'))),
          c.on('status', ({ status, first }) => {
      // a drop that heals within a moment (or the socket closing as the host ends) is not worth a message
      if (status === 'live') { if (first !== false || c.toldDrop) say(t('live.status.live')); c.toldDrop = false; }
      else if (status === 'reconnecting') setTimeout(() => { if (c.status === 'reconnecting') { c.toldDrop = true; say(t('live.status.reconnecting')); } }, 1500);
      else if (status === 'waiting') say(t('live.status.waiting'));
    }),
        ];
        app.live = a;
      } else if (!c && a.client) { offs.forEach((f) => f()); a.unbind(); app.live = null; off(); }
    });
  }
  return a;
}

/** A browser opening a link with #live=<code> (a page a host serves on the LAN) or ?live=<ROOM>#<secret> joins. */
export async function joinFromPage(app, fileHost, w = globalThis) {
  const lv = fileHost && fileHost.live;
  if (!lv || !app) return false;
  let code = null, link = null, url;
  try { code = lv.pageCode(); } catch { code = null; }
  if (!code && w.location) {
    const q = new URLSearchParams(w.location.search), room = (q.get('live') || '').toUpperCase(), secret = (w.location.hash || '').slice(1);
    if (/^[0-9A-Z]{8}$/.test(room) && /^[A-Za-z0-9_-]{22,43}$/.test(secret)) {
      link = { room, secret };
      url = (w.location.protocol === 'https:' ? 'wss://' : 'ws://') + w.location.host + '/live/relay/join/' + room;
      q.delete('live');
      try { w.history.replaceState(w.history.state, '', w.location.pathname + (q.toString() ? '?' + q : '')); } catch { /* no history */ }
    }
  }
  if (!code && !link) return false;
  const adapter = createLiveAdapter({ host: fileHost });
  if (!adapter) return false;
  await lv.join({ adapter, name: t('live.guest'), code: code || undefined, link: link || undefined, url });
  return true;
}
