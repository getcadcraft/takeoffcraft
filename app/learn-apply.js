/* SPDX-License-Identifier: Apache-2.0 */
/**
 * learn-apply.js — the edits SU.811 makes on a takeoff (0.8, session sx-learn): repeat a pattern of marks on every page,
 * add a condition set, add a suggested assembly. DOM-free (tested in Node: tools/takeoffcraft-test/learn.mjs). Each one
 * is ONE undo step, and what it learns goes into the same step, so Undo takes both back.
 */

import { normalItem, readExtras, kindsOf, LIMITS } from "./model.js";
import { readClip, scaleProblem, sizeProblem, freeName } from "./clipboard.js";
import { saveRepeat, repeatUsed, setPlan, emptyLearn } from "./learn.js";
import { t } from "./i18n.js";

/** How near (PDF units) a mark's first point must be to count as "already there" on a page. */
export const SAME_SPOT = 0.5;
const clone = (v) => JSON.parse(JSON.stringify(v));
const sameName = (a, b) => String(a).trim().toLowerCase() === String(b).trim().toLowerCase();

/**
 * Where a pattern can be repeated. clip: a validated clip (readClip(...).clip); targets: [{ key, view, userUnit, ftPerUnit,
 * label }] = the pages to try (the page it came from may be among them: it is skipped as "already there"). A page is used
 * when it is the same size (paste in place), has the same scale for lengths and areas (counts go anywhere) and does not
 * already hold every mark of the pattern.
 * → { sheets: [keys], skipped: [{ key, why }] }   (why: words for the person)
 */
export function repeatPlan(clip, targets, state) {
  const sheets = [], skipped = [];
  for (const tg of targets) {
    const why = sizeProblem(clip, { view: tg.view, userUnit: tg.userUnit }) || scaleProblem(clip, tg.ftPerUnit > 0 ? { ftPerUnit: tg.ftPerUnit, label: tg.label || '' } : null);
    if (why) { skipped.push({ key: tg.key, why }); continue; }
    if (alreadyThere(clip, tg.key, state)) { skipped.push({ key: tg.key, why: t('sx.su811.rep.already') }); continue; }
    sheets.push(tg.key);
  }
  return { sheets, skipped };
}
/** Every mark of the pattern is on that page already (an item of the same name and type, same kind, first point within SAME_SPOT). */
export function alreadyThere(clip, key, state) {
  const names = new Map(clip.items.map((i) => [i.id, i]));
  return clip.marks.every((m) => {
    const ci = names.get(m.item);
    return state.marks.some((x) => {
      if (x.sheet !== key || x.kind !== m.kind) return false;
      const it = state.items.find((i) => i.id === x.item);
      return it && ci && it.type === ci.type && sameName(it.name, ci.name) && Math.hypot(x.pts[0].x - m.pts[0].x, x.pts[0].y - m.pts[0].y) <= SAME_SPOT;
    });
  });
}

/**
 * Put the pattern on these pages in place (same PDF coordinates), as ONE undo step. Marks go onto the takeoff's item of
 * the same name and type; a missing item is added once with its assembly. learn: { name } saves the pattern (`wire` = the
 * clip as clipboard.js copied it) under that name in the takeoff's learn section, in the same step; { id } counts a
 * learned pattern used again. → { marks: n, sheets: n, items: [added item ids] } | false
 */
export function repeatOnSheets(model, clip, keys, { wire = null, learn = null, label = t('sx.su811.rep.undo', { n: keys.length }), area } = {}) {
  if (!clip?.marks?.length || !keys.length) return false;
  return model.change(label, (s) => {
    const map = new Map(), added = [];
    for (const ci of clip.items) {
      const target = s.items.find((i) => i.name === ci.name && i.type === ci.type) || s.items.find((i) => i.type === ci.type && sameName(i.name, ci.name));
      if (target) { map.set(ci.id, target.id); continue; }
      if (s.items.length >= LIMITS.items) throw new Error(t('err.items.many'));
      const id = model.nextId('i');
      const ni = normalItem({ ...clone(ci), id, name: freeName(ci.name, s.items), components: (ci.components || []).map((c) => ({ ...clone(c), id: model.nextId('c') })) });
      delete ni.origin; delete ni.area;
      s.items.push(ni);
      map.set(ci.id, id);
      added.push(id);
    }
    if (s.marks.length + clip.marks.length * keys.length > LIMITS.marks) throw new Error(t('err.marks.many'));
    const areas = new Set((s.areas || []).map((a) => a.id));
    let n = 0;
    for (const key of keys) {
      for (const m of clip.marks) {
        const item = map.get(m.item);
        const it = s.items.find((i) => i.id === item);
        if (!it || !kindsOf(it).includes(m.kind)) continue;
        const cp = (p) => (p.b ? { x: p.x, y: p.y, b: p.b } : { x: p.x, y: p.y });
        const nm = { id: model.nextId('m'), item, sheet: key, kind: m.kind, pts: m.pts.map(cp), holes: m.kind === 'area' ? (m.holes || []).map((h) => h.map(cp)) : [] };
        const extras = { ...m };
        delete extras.group; delete extras.flag;                          // a typical group / a revision flag belong to the page it came from
        if (area !== undefined) extras.area = area;
        s.marks.push(Object.assign(nm, readExtras(extras, nm, { areas })));
        n++;
      }
    }
    if (learn?.name && wire) { s.learn ??= emptyLearn(); saveRepeat(s.learn, learn.name, wire); }
    else if (learn?.id && s.learn) repeatUsed(s.learn, learn.id);
    if (!n && !added.length) return false;
    return { marks: n, sheets: keys.length, items: added };
  });
}

/** A learned pattern's clip, validated as clipboard.js validates any clip. → { ok, clip } | { ok: false, error } */
export const patternClip = (rep) => readClip(clone(rep.clip));

/** Add a condition set's items this takeoff does not have yet, ONE undo step. → { ids, have: [names] } */
export function applySet(model, set, label = t('sx.su811.set.undo', { name: set.name })) {
  const plan = setPlan(set, model.state.items);
  const ids = plan.add.length ? model.addItems(plan.add.map(clone), label) : [];
  return { ids, have: plan.have };
}

/** Add a suggested assembly (the item with its parts, as last used), ONE undo step. → the new item's id | null */
export function applyAssembly(model, a) {
  if (model.state.items.some((i) => i.type === a.type && sameName(i.name, a.name))) return null;
  const [id] = model.addItems([clone(a.item)], t('sx.su811.asm.undo', { name: a.name }));
  return id || null;
}

/** Change the learn section as ONE undo step (deleting, Clear all, the off switch, saving a set). fn(learn) → false cancels. */
export function changeLearn(model, label, fn) {
  return model.change(label, (s) => {
    s.learn ??= emptyLearn();
    return fn(s.learn);
  });
}
