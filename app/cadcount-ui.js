/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadcount-ui.js — "Count from the drawing" (0.7 TD.3): the dialog that counts the open drawing exactly, by block, by layer + entity type
 * or by text, and adds the result as marks on a count item — one undo step. The counting is cadcount.js, the marks cadmarks.js; this
 * file is only the dialog. Everything shown comes from the drawing (untrusted), so it goes in through el() as text, never as HTML.
 *
 *   await openCadCount({ root, ask, t, set, sheetIndex, items, activeId, existingFor, commit, status })
 *     set          the open drawing's file record (cadset.js: set.cad)
 *     items        [{ id, name, marks }] the takeoff's count-capable items
 *     existingFor  (itemId) → that item's marks ([{ sheet, pts }]), so counting again adds only what is new
 *     commit       ({ item, create, list, label }) → { item, ids }   (model.addCounted + the page's refresh)
 */

import { el } from './ui-util.js';
import { catalog, countBlocks, countShapes, countTexts, hiddenLayers } from './cadcount.js';
import { sheetRefs, placeRef } from './cadset.js';
import { planMarks } from './cadmarks.js';

const LIST_MAX = 400;   // rows shown in a list; the search narrows it

export async function openCadCount({ root, ask, t, set, sheetIndex, items, activeId, existingFor, commit, status, preset = null }) {
  const cad = set.cad, ix = cad.index();
  const sheet = cad.sheets[sheetIndex];
  const S = { tab: 'block', scope: 'sheet', block: null, variant: undefined, nested: true, layer: '', hidden: false, q: '',
    shapeLayer: '', shapeType: '', inside: false, text: '', mode: 'exact', attr: '', target: '', newName: '', ...(preset || {}) };
  const refsOf = (scope) => (scope === 'sheet' ? sheetRefs(sheet, ix).map((e) => e.ref) : ix.all);
  const cats = new Map();
  const catFor = (scope) => { if (!cats.has(scope)) cats.set(scope, catalog(ix, refsOf(scope))); return cats.get(scope); };
  const hiddenIn = (scope) => hiddenLayers(ix, refsOf(scope));

  const count = () => {
    const refs = refsOf(S.scope);
    const hidden = S.hidden ? 'include' : 'skip';
    if (S.tab === 'block') {
      if (!S.block) return null;
      return countBlocks(ix, refs, { names: [S.block], variant: S.variant, nested: S.nested ? 'all' : 'top', layers: S.layer ? [S.layer] : null, hidden });
    }
    if (S.tab === 'shape') {
      if (!S.shapeLayer && !S.shapeType) return null;
      const accept = S.scope === 'sheet' ? (r) => { const p = placeRef(sheet, r, ix); return !!p && !p.hidden; } : null;   // inside blocks: only what this sheet shows
      return countShapes(ix, refs, { layer: S.shapeLayer, type: S.shapeType, hidden, inside: S.inside ? { model: cad.model, accept } : null });
    }
    if (!S.text.trim()) return null;
    return countTexts(ix, refs, { text: S.text, mode: S.mode, attribute: S.attr || null, hidden });
  };
  const nameFor = () => {
    if (S.newName) return S.newName;
    if (S.tab === 'block') { const b = catFor(S.scope).blocks.find((x) => x.key === S.block); return (b ? b.name : '') + (S.variant ? ' – ' + S.variant : ''); }
    if (S.tab === 'shape') return [S.shapeLayer, S.shapeType].filter(Boolean).join(' ');
    return S.text.trim();
  };

  // ---- pieces
  const radio = (name, value, checked, onchange, ...kids) => el('label', { className: 'tc-cc-opt' }, el('input', { type: 'radio', name, value, checked, onchange }), ...kids);
  const check = (checked, onchange, ...kids) => el('label', { className: 'tc-cc-opt' }, el('input', { type: 'checkbox', checked, onchange }), ...kids);

  const result = el('p', { className: 'tc-cc-result', role: 'status', 'aria-live': 'polite' });
  const notes = el('ul', { className: 'tc-cc-notes' });
  const panel = el('div', { className: 'tc-cc-panel' });
  const targetBox = el('div', { className: 'tc-cc-target' });
  let okBtn = null, lastPlan = null;

  const tabs = el('div', { className: 'tc-cc-tabs', role: 'tablist' }, [['block', 'cad.count.tab.block'], ['shape', 'cad.count.tab.shape'], ['text', 'cad.count.tab.text']].map(([k, key]) =>
    el('button', { type: 'button', role: 'tab', className: 'tc-cc-tab', dataset: { ccTab: k }, 'aria-selected': S.tab === k ? 'true' : 'false', onclick: () => { S.tab = k; S.newName = ''; draw(); } }, t(key))));
  const scopeBox = el('div', { className: 'tc-cc-scope', role: 'radiogroup', 'aria-label': t('cad.count.scope') },
    radio('cc-scope', 'sheet', S.scope === 'sheet', () => { S.scope = 'sheet'; S.newName = ''; draw(); }, t('cad.count.scope.sheet', { sheet: sheet.name })),
    radio('cc-scope', 'drawing', S.scope === 'drawing', () => { S.scope = 'drawing'; S.newName = ''; draw(); }, t('cad.count.scope.drawing')));

  function blockPanel() {
    const cat = catFor(S.scope);
    const q = S.q.trim().toLowerCase();
    const rows = cat.blocks.filter((b) => !q || b.name.toLowerCase().includes(q));
    const search = el('input', { type: 'search', className: 'tc-input tc-cc-search', placeholder: t('cad.count.search'), value: S.q, 'aria-label': t('cad.count.search'),
      oninput: (e) => { S.q = e.target.value; const pos = e.target.selectionStart; draw(); const n = panel.querySelector('.tc-cc-search'); n?.focus(); n?.setSelectionRange(pos, pos); } });
    const list = el('ul', { className: 'tc-cc-list', role: 'radiogroup', 'aria-label': t('cad.count.tab.block') }, rows.slice(0, LIST_MAX).map((b) => {
      const on = S.block === b.key;
      const sub = on && b.dynamic ? el('ul', { className: 'tc-cc-variants' },
        el('li', {}, radio('cc-var', '', S.variant === undefined, () => { S.variant = undefined; S.newName = ''; draw(); }, t('cad.count.variant.all'), el('span', { className: 'tc-cc-n' }, String(b.count)))),
        b.variants.map((v) => el('li', {}, radio('cc-var', v.state, S.variant === v.state, () => { S.variant = v.state; S.newName = ''; draw(); }, v.state || t('cad.count.variant.unknown'), el('span', { className: 'tc-cc-n' }, String(v.count)))))) : null;
      return el('li', { className: on ? 'is-on' : '' },
        radio('cc-block', b.key, on, () => { S.block = b.key; S.variant = undefined; S.layer = ''; S.newName = ''; draw(); },
          el('span', { className: 'tc-cc-name' }, b.name || b.anon),
          b.dynamic ? el('span', { className: 'tc-cc-tag' }, t('cad.count.dynamic')) : null,
          b.nested ? el('span', { className: 'tc-cc-sub' }, t('cad.count.nested', { n: b.nested })) : null,
          el('span', { className: 'tc-cc-n' }, String(b.count))),
        sub);
    }));
    const more = rows.length > LIST_MAX ? el('p', { className: 'tc-cc-more' }, t('cad.count.more', { n: rows.length - LIST_MAX })) : null;
    const none = !rows.length ? el('p', { className: 'tc-cc-more' }, t(cat.blocks.length ? 'cad.count.nomatch' : 'cad.count.noblocks')) : null;
    const cur = cat.blocks.find((b) => b.key === S.block);
    const layerSel = cur && cur.layers.length > 1 ? el('label', { className: 'tc-cc-field' }, t('cad.count.layer'),
      el('select', { className: 'select-cc', onchange: (e) => { S.layer = e.target.value; S.newName = ''; draw(); } },
        el('option', { value: '' }, t('cad.count.layer.all')),
        cur.layers.map((l) => el('option', { value: l.name, selected: S.layer === l.name }, `${l.name} (${l.count})`)))) : null;
    return [search, list, more, none, el('div', { className: 'tc-cc-opts' }, check(S.nested, (e) => { S.nested = e.target.checked; draw(); }, t('cad.count.nested.on')), layerSel)];
  }

  function shapePanel() {
    const cat = catFor(S.scope);
    const layers = [...new Map(cat.shapes.map((s) => [s.layer, 0])).keys()].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const types = [...new Map(cat.shapes.filter((s) => !S.shapeLayer || s.layer === S.shapeLayer).map((s) => [s.type, 0])).keys()].sort();
    const n = (f) => cat.shapes.filter(f).reduce((a, s) => a + s.count, 0);
    return [
      el('label', { className: 'tc-cc-field' }, t('cad.count.layer'),
        el('select', { className: 'select-cc', dataset: { ccLayer: '' }, onchange: (e) => { S.shapeLayer = e.target.value; if (S.shapeType && !cat.shapes.some((s) => s.type === S.shapeType && (!S.shapeLayer || s.layer === S.shapeLayer))) S.shapeType = ''; S.newName = ''; draw(); } },
          el('option', { value: '' }, t('cad.count.layer.all')), layers.map((l) => el('option', { value: l, selected: S.shapeLayer === l }, `${l} (${n((s) => s.layer === l)})`)))),
      el('label', { className: 'tc-cc-field' }, t('cad.count.type'),
        el('select', { className: 'select-cc', dataset: { ccType: '' }, onchange: (e) => { S.shapeType = e.target.value; S.newName = ''; draw(); } },
          el('option', { value: '' }, t('cad.count.type.all')), types.map((ty) => el('option', { value: ty, selected: S.shapeType === ty }, `${ty} (${n((s) => s.type === ty && (!S.shapeLayer || s.layer === S.shapeLayer))})`)))),
      el('div', { className: 'tc-cc-opts' }, check(S.inside, (e) => { S.inside = e.target.checked; draw(); }, t('cad.count.inside'))),
    ];
  }

  function textPanel() {
    const cat = catFor(S.scope);
    const tags = [...new Set(cat.attributes.map((a) => a.tag))].sort();
    const top = (S.attr ? cat.attributes.filter((a) => a.tag === S.attr).map((a) => ({ text: a.value, count: a.count })) : cat.texts).slice(0, 12);
    return [
      el('label', { className: 'tc-cc-field' }, t('cad.count.text'),
        el('input', { type: 'text', className: 'tc-input tc-cc-text', value: S.text, maxLength: 200, dataset: { ccText: '' },
          oninput: (e) => { S.text = e.target.value; S.newName = ''; const pos = e.target.selectionStart; draw(); const n = panel.querySelector('.tc-cc-text'); n?.focus(); n?.setSelectionRange(pos, pos); } })),
      el('div', { className: 'tc-cc-opts' },
        el('label', { className: 'tc-cc-field' }, t('cad.count.mode'),
          el('select', { className: 'select-cc', onchange: (e) => { S.mode = e.target.value; draw(); } },
            [['exact', 'cad.count.mode.exact'], ['contains', 'cad.count.mode.contains'], ['word', 'cad.count.mode.word']].map(([v, k]) => el('option', { value: v, selected: S.mode === v }, t(k))))),
        tags.length ? el('label', { className: 'tc-cc-field' }, t('cad.count.attr'),
          el('select', { className: 'select-cc', onchange: (e) => { S.attr = e.target.value; draw(); } },
            el('option', { value: '' }, t('cad.count.attr.any')), tags.map((g) => el('option', { value: g, selected: S.attr === g }, g)))) : null),
      top.length ? el('div', { className: 'tc-cc-chips', 'aria-label': t('cad.count.common') }, top.map((x) => el('button', { type: 'button', className: 'tc-cc-chip', onclick: () => { S.text = x.text; S.mode = 'exact'; S.newName = ''; draw(); } }, `${x.text} (${x.count})`))) : null,
    ];
  }

  function targetPanel() {
    const sel = el('select', { className: 'select-cc', 'aria-label': t('cad.count.target'), dataset: { ccTarget: '' }, onchange: (e) => { S.target = e.target.value; draw(true); } },
      el('option', { value: '' }, t('cad.count.target.new')), items.map((i) => el('option', { value: i.id, selected: S.target === i.id }, `${i.name} (${t('n.marks', { n: i.marks })})`)));
    const name = !S.target ? el('input', { type: 'text', className: 'tc-input tc-cc-newname', value: nameFor(), maxLength: 120, 'aria-label': t('cad.count.newname'), dataset: { ccNewName: '' }, oninput: (e) => { S.newName = e.target.value; } }) : null;
    return [el('label', { className: 'tc-cc-field' }, t('cad.count.target'), sel), name];
  }

  function draw(keepTarget = false) {
    for (const b of tabs.children) b.setAttribute('aria-selected', b.dataset.ccTab === S.tab ? 'true' : 'false');
    panel.replaceChildren(...(S.tab === 'block' ? blockPanel() : S.tab === 'shape' ? shapePanel() : textPanel()).filter(Boolean));
    // hidden layers: said, and a choice
    const hid = hiddenIn(S.scope);
    const hcount = hid.reduce((a, l) => a + l.count, 0);
    const res = count();
    notes.replaceChildren();
    if (hcount) notes.append(el('li', {}, check(S.hidden, (e) => { S.hidden = e.target.checked; draw(); }, t('cad.count.hidden', { n: hcount, layers: hid.slice(0, 4).map((l) => l.name).join(', ') }))));
    if (cad.xrefs.some((x) => !x.loaded)) notes.append(el('li', { className: 'is-warn' }, t('cad.count.xref', { n: cad.xrefs.filter((x) => !x.loaded).length })));
    const gone = Object.keys(ix.skipped).filter((k) => k.startsWith('missing block ')).map((k) => k.slice('missing block '.length));   // i18n-ignore: a code made in cadcount.js
    if (gone.length) notes.append(el('li', {}, t('cad.count.skipped.missing', { n: gone.length, list: gone.slice(0, 4).join(', ') })));
    if (ix.skipped['nested too deep']) notes.append(el('li', {}, t('cad.count.skipped.deep', { n: ix.skipped['nested too deep'] })));   // i18n-ignore: a code made in cadcount.js
    if (ix.skipped['array too large']) notes.append(el('li', {}, t('cad.count.skipped.array', { n: ix.skipped['array too large'] })));   // i18n-ignore: a code made in cadcount.js
    if (ix.truncated) notes.append(el('li', { className: 'is-warn' }, t('cad.count.truncated')));
    if (ix.unplaced) notes.append(el('li', {}, t('cad.count.unplaced.by', { n: ix.unplaced, list: Object.entries(ix.unplacedBy).sort((x, y) => y[1] - x[1]).slice(0, 5).map(([k, v]) => `${k} × ${v}`).join(', ') })));
    // the plan
    if (!res) { lastPlan = null; result.textContent = t('cad.count.pick'); }
    else {
      const target = S.target || null;
      lastPlan = planMarks({ set, sheetIndex, scope: S.scope, found: res.found, existing: target ? existingFor(target) : [] });
      const nested = res.found.filter((r) => r.depth > 0).length;
      result.textContent = t('cad.count.found', { n: res.found.length, add: lastPlan.list.length })
        + (lastPlan.already ? ' ' + t('cad.count.already', { n: lastPlan.already }) : '')
        + (nested && S.tab === 'block' ? ' ' + t('cad.count.insideblocks', { n: nested }) : '')
        + (res.hiddenSkipped ? ' ' + t('cad.count.hiddenskipped', { n: res.hiddenSkipped }) : '')
        + (lastPlan.stacked ? ' ' + t('cad.count.stacked', { n: lastPlan.stacked }) : '');
    }
    if (!keepTarget) targetBox.replaceChildren(...targetPanel().filter(Boolean));
    if (okBtn) { okBtn.disabled = !lastPlan || !lastPlan.list.length; okBtn.textContent = lastPlan?.list.length ? t('cad.count.add', { n: lastPlan.list.length }) : t('cad.count.add.none'); }
  }

  S.target = activeId && items.some((i) => i.id === activeId) ? activeId : '';
  const body = el('div', { className: 'tc-cc' }, scopeBox, tabs, panel, notes, result, targetBox);
  setTimeout(() => { okBtn = body.closest('dialog')?.querySelector('[data-key="ok"]') || null; draw(); }, 0);
  draw();

  let outcome = null;
  const choice = await ask(root, {
    title: t('cad.count.title', { file: set.name }), body,
    buttons: [['cancel', t('btn.cancel'), 'btn-line'], ['ok', t('cad.count.add.none'), 'btn-plot']],
    focus: '.tc-cc-search, .tc-cc-text, [data-cc-layer]',
    onOk: () => {
      if (!lastPlan || !lastPlan.list.length) return t('cad.count.nothing');
      const name = (S.target ? '' : (S.newName || nameFor())).trim().slice(0, 120);
      if (!S.target && !name) return t('cad.count.noname');
      try {
        outcome = commit({ item: S.target || null, create: S.target ? null : { name, type: 'count' }, list: lastPlan.list, label: t('cad.count.undo', { n: lastPlan.list.length, what: nameFor() }) });
        outcome.n = lastPlan.list.length; outcome.already = lastPlan.already;
      } catch (err) { return err.message; }
      return null;
    },
  });
  return choice === 'ok' ? outcome : null;
}
