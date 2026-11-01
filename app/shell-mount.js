/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shell-mount.js — TakeoffCraft attaches the shell's seven modules (0.8 round 3, takeoff_PART_3; docs/apps/shell-modules.md § Mounting):
 * calc sheets (EG.18), design reasons (EG.34), running totals (EG.30: cost and embodied carbon), lessons (EG.23), Suggest (AC.12), the
 * activity log (AC.13) and the Ask box (AC.8). The block in mountShellModules is the doc's, unchanged; takeoffHost() is what TakeoffCraft hands over.
 *
 *   mountTakeoffShell(tc) — tc = { model, control, estimate(), carbon(), selection(), onSelection(fn) → off, select(id), name(), path() }
 * Calc sheets and reasons are saved in the takeoff's file under `calcs` and `reasons` (model.js readProject keeps them; null removes the key).
 */
import { assistantPrefs, ASSIST_KEY, getHost } from './host.js';
import { t as tr } from './i18n.js';

/** The doc's block (shell-modules.md § Mounting 2). Kept as the doc has it; browser-mount-kit.mjs compares them. */
export function mountShellModules(host) {
  const when = (api, name, go) => (window[api] ? go() : document.addEventListener('cc-' + name + '-ready', go, { once: true }));
  // EG.18 calc sheets — parameters in, drives out, saved inside the app's own file
  when('ccCalc', 'calc', () => {
    ccCalc.attach({ units: host.units /* the build's unit-table.js, optional */, params: host.params /* { get, set, list } */,
                    step: host.step, persist: (json) => host.file.set('calcs', json) });
    ccCalc.registerTools(host.control);
  });
  // EG.34 design reasons — the selection, optionally the elements that should have a reason
  when('ccReasons', 'reasons', () => {
    ccReasons.attach({ selection: host.selection, onSelection: host.onSelection, select: host.select, expected: host.expected /* optional */,
                       step: host.step, persist: (json) => host.file.set('reasons', json) });
    ccReasons.registerTools(host.control);
  });
  // EG.30 running totals — one source per kind of number the app can stand behind (null until it has one)
  when('ccTotals', 'totals', () => {
    for (const s of host.totals || []) ccTotals.source(s);              // { id, measure: cost|carbon|weight|time, label, read: () => number | null }
    if (host.statusBar) ccTotals.mount(host.statusBar);                 // optional: the app's own status bar element
    ccTotals.registerTools(host.control);
  });
  // EG.23 lessons — the app's lessons, and where it already knows something happened
  when('ccLessons', 'lessons', () => {
    for (const l of host.lessons || []) ccLessons.register(l);          // { id, title, steps: [{ id, text, hints, done: { event, match } | { probe } }] }
    for (const [name, fn] of Object.entries(host.probes || {})) ccLessons.probe(name, fn);
    ccLessons.registerTools(host.control);
    host.emit = (event, data) => ccLessons.emit(event, data);           // the app calls host.emit('tool', { name: 'line' }) where it runs a command
  });
  // AC.12 Suggest, AC.13 activity log, AC.8 Ask box — they ride on host.control, so the app hands over very little
  when('ccSuggest', 'suggest', () => {
    ccSuggest.attach({ control: host.control, rev: host.rev, step: host.step, document: host.document, perms: host.perms, ghost: host.ghost });
    ccSuggest.registerTools(host.control);
    host.fileOpened = (why) => ccSuggest.reset(why || 'A file was opened.');   // call when another file opens  // i18n-ignore: the doc's block, unchanged; modelChanged passes the translated words
  });
  when('ccActivity', 'activity', () => {
    ccActivity.attach({ control: host.control, rev: host.rev, document: host.document, undoTo: host.undoTo, history: host.history, version: host.version });
  });
  when('ccAsk', 'ask', () => {
    ccAsk.attach({ control: host.control, context: host.askContext, system: host.skillPack /* the app's skill pack text, AC.5 */ });
    ccAsk.registerTools(host.control);
  });
  // when a file opens / saves (the app's own two places):  open: ccCalc.load(file.calcs); ccReasons.load(file.reasons);
  //                                                        save: file.calcs = ccCalc.save(); file.reasons = ccReasons.save();
}


/** A calc sheet reads a quantity as @Name: an item's name with every run of other characters made one underscore. */
const pname = (s) => String(s).replace(/[^\p{L}\p{N}]+/gu, '_').replace(/^_+|_+$/g, '');

/** The first lesson: steps the takeoff itself can answer (probes), so nothing is taken on trust. */
function lessonsOf(tc) {
  const st = () => tc.model.state;
  return {
    lessons: [{
      id: 'first-takeoff', title: tr('lesson.takeoff.title'), intro: tr('lesson.takeoff.intro'), level: 'beginner',
      steps: [
        { id: 'scale', text: tr('lesson.takeoff.scale'), hints: [tr('lesson.takeoff.scale.h1')], done: { probe: 'tc-scale' } },
        { id: 'item', text: tr('lesson.takeoff.item'), hints: [tr('lesson.takeoff.item.h1'), tr('lesson.takeoff.item.h2')], done: { probe: 'tc-item' } },
        { id: 'measure', text: tr('lesson.takeoff.measure'), hints: [tr('lesson.takeoff.measure.h1')], done: { probe: 'tc-marks' } },
        { id: 'save', text: tr('lesson.takeoff.save'), hints: [tr('lesson.takeoff.save.h1')], done: { probe: 'tc-saved' } },
      ],
      badge: { title: tr('lesson.takeoff.badge') },
    }],
    probes: {
      'tc-scale': () => Object.values(st().sheets || {}).some((s) => s && s.scale),
      'tc-item': () => st().items.length > 0,
      'tc-marks': () => st().marks.length > 0,
      'tc-saved': () => !tc.model.dirty && st().items.length > 0,
    },
  };
}

/** What TakeoffCraft hands over (the doc's table, § 3). */
export function takeoffHost(tc) {
  const model = tc.model;
  let inStep = false;
  const seen = tc.seen;            // what the file holds for each shell key, as the modules last wrote or read it (see mountTakeoffShell)
  const ASSIST = () => assistantPrefs(getHost({ app: 'takeoffcraft' }));
  const host = {
    control: tc.control,
    // one undo step: the module's changes (and what file.set writes) are kept in the model's snapshot
    step: (label, fn) => { inStep = true; try { return model.change(label, () => fn()); } finally { inStep = false; } },
    file: {
      set: (key, json) => {
        seen[key] = JSON.stringify(json ?? null);
        if (json == null) { if (!(key in model.state)) return; delete model.state[key]; } else model.state[key] = json;
        if (!inStep) { model.version++; model.emit('change'); }   // a key set outside a step still makes the takeoff "unsaved"
      },
    },
    // a calc sheet can read each item's quantity (with waste) as @Name; quantities are measured, so nothing is driven
    params: {
      list: () => tc.estimate().rows.filter((r) => r.kind === 'item' && !r.error).map((r) => pname(r.name)),
      get: (n) => { const r = tc.estimate().rows.find((x) => x.kind === 'item' && !x.error && pname(x.name) === n); return r ? { value: r.qtyW, unit: r.unit } : null; },
      set: () => false,
    },
    selection: () => tc.selection(),
    onSelection: (fn) => tc.onSelection(fn),
    select: (el) => { if (el && el.id) tc.select(el.id); },
    totals: [
      { id: 'takeoff.cost', measure: 'cost', label: tr('totals.cost'), read: () => {
        const e = tc.estimate();
        if (!model.state.items.length || !e.rows.some((r) => r.kind === 'item')) return null;
        return { value: e.total / 100, ...(e.incomplete ? { note: tr('totals.cost.incomplete') } : {}) };   // the cents of the estimate; the currency is the shell's default
      } },
      { id: 'takeoff.carbon', measure: 'carbon', label: tr('totals.carbon'), read: () => {
        const c = tc.carbon();
        if (!c || !c.lines.length) return null;
        const bits = [c.left.length ? tr('totals.carbon.left', { n: c.left.length }) : '', c.unchecked ? tr('totals.carbon.starter') : ''].filter(Boolean);
        return { value: c.total, ...(bits.length ? { note: bits.join(' ') } : {}) };
      } },
    ],
    ...lessonsOf(tc),
    rev: () => model.version,
    document: () => ({ docId: tc.name(), path: tc.path() || '', name: tc.name() }),
    perms: {
      get: () => ASSIST(),
      set: (rec) => { try { localStorage.setItem(ASSIST_KEY + 'takeoffcraft', JSON.stringify(rec)); } catch { /* private mode */ } },
    },
    undoTo: (i) => { while (model.undoStack.length > i && model.canUndo) model.undo(); },
    version: () => String(model.version),
    askContext: () => ({ file: tc.name(), selection: host.selection() }),
  };
  return host;
}

/** Mounts everything and keeps the calc sheets and reasons in step with the takeoff (open, undo, redo). */
export function mountTakeoffShell(tc) {
  const seen = {};
  const host = takeoffHost({ ...tc, seen });
  mountShellModules(host);
  // The modules own their sheets and reasons; the file holds a copy they write after each edit. When the file's copy is not the one they last wrote
  // (an undo, a redo, another file opened) they load it. An edit not yet written is never wiped by an unrelated change.
  const reload = () => {
    const s = tc.model.state;
    for (const [k, api] of [['calcs', window.ccCalc], ['reasons', window.ccReasons]]) {
      if (!api) continue;
      const cur = JSON.stringify(s[k] ?? null);
      if (cur !== seen[k]) { seen[k] = cur; api.load(s[k] || null); }
    }
  };
  tc.model.on((why) => {
    if (why === 'load') { seen.calcs = seen.reasons = undefined; reload(); } else if (why === 'change') reload();
    if (why === 'load' && host.fileOpened) host.fileOpened(tr('lesson.file.opened'));
    if (window.ccLessons) ccLessons.emit('model', {});
    if (window.ccTotals) ccTotals.invalidate();
  });
  // whoever writes the file (Save, autosave, a hand-over, Studio Live) gets the sheets and reasons as they are now
  const toJSON = tc.model.toJSON.bind(tc.model);
  tc.model.toJSON = (...a) => {
    const s = tc.model.state;
    for (const [k, api] of [['calcs', window.ccCalc], ['reasons', window.ccReasons]]) if (api) { const j = api.save(); if (j) s[k] = j; else delete s[k]; seen[k] = JSON.stringify(j ?? null); }
    return toJSON(...a);
  };
  reload();
  document.addEventListener('cc-calc-ready', reload, { once: true });
  document.addEventListener('cc-reasons-ready', reload, { once: true });
  return {
    host,
    /** The page calls this after a new or opened file. */
    fileOpened() { reload(); if (host.fileOpened) host.fileOpened(tr('lesson.file.opened')); },
  };
}
