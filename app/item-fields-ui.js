/* SPDX-License-Identifier: Apache-2.0 */
/**
 * item-fields-ui.js: takeoffcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountItemFields(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as U from './units.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { TYPES, TYPE_LABELS, backouts, VARS } from './model.js';
import { originText } from './fixedqty.js';
import { parse, evaluate } from './formula.js';

export function mountItemFields(ctx) {
  const { ST, model, status, tempMode, fieldUnit, lenField, lenHint, fieldRow, textInput, renderItemProps } = ctx;

  /** T18: labor by crew — production per crew-hour, crew size, wage per worker-hour — and what it comes to. */
  function crewFields(it, commit, fail) {
    const unit = U.UNITS[it.unit].label;
    const on = el('input', { type: 'checkbox', id: 'tc-i-crew', dataset: { field: 'crew' }, checked: !!it.crew });
    on.addEventListener('change', () => commit(on.checked ? { crew: { prod: 10, size: 2, wage: it.crew?.wage ?? 0 } } : { crew: null }, t('undo.crew')));
    const out = [el('span', { className: 'k' }, t('crew.h')), el('label', { className: 'tc-check', title: t('crew.title') }, on, ' ' + t('crew.on'))];
    if (!it.crew) return out;
    const c = it.crew;
    const num = (v) => { const s2 = String(v).trim().replace(/,/g, ''); return /^\d*\.?\d+$/.test(s2) ? Number(s2) : NaN; };
    const prod = textInput('tc-i-crew-prod', 'crew-prod', String(+c.prod.toFixed(4)), (v, n) => { const x = num(v); if (!(x > 0 && x < 1e7)) return fail(n, t('crew.err.prod')); commit({ crew: { ...c, prod: x } }, t('undo.crew')); }, { inputmode: 'decimal' });
    const size = textInput('tc-i-crew-size', 'crew-size', String(c.size), (v, n) => { const x = num(v); if (!(Number.isInteger(x) && x >= 1 && x <= 1000)) return fail(n, t('crew.err.size')); commit({ crew: { ...c, size: x } }, t('undo.crew')); }, { inputmode: 'numeric' });
    const wage = textInput('tc-i-crew-wage', 'crew-wage', U.rateInput(c.wage), (v, n) => { const r = U.parseRate(v); if (!r.ok) return fail(n, r.error); commit({ crew: { ...c, wage: r.rate4 } }, t('undo.crew')); }, { inputmode: 'decimal' });
    out.push(...fieldRow(t('crew.prod', { unit }), prod), ...fieldRow(t('crew.size'), size), ...fieldRow(t('crew.wage'), wage));
    const row = ST.est.rows.find((r) => r.kind === 'item' && r.itemId === it.id);
    if (row?.work) out.push(el('p', { className: 'tc-note span', dataset: { crewSum: '' } }, t('crew.sum', { hours: U.fixed(row.work.hours, 1), wh: U.fixed(row.work.workerHours, 1), days: U.fixed(row.work.days, 1), lab: U.formatCents(row.labExt), rate: U.formatRate(row.lab), unit })));
    return out;
  }

  /** T8: the item's second conditions — a check box per other kind of mark, and its unit when on. */
  function condFields(it) {
    const box = el('div', { className: 'tc-also', role: 'group', 'aria-labelledby': 'tc-i-also-l' });
    for (const k of TYPES.filter((x) => x !== it.type)) {
      const c = it.conds?.find((x) => x.kind === k);
      const n = c ? model.state.marks.filter((m) => m.item === it.id && m.kind === k).length : 0;
      const cb = el('input', { type: 'checkbox', id: 'tc-i-also-' + k, dataset: { field: 'cond:' + k }, checked: !!c, disabled: n > 0 });
      cb.addEventListener('change', () => { try { model.setCond(it.id, k, cb.checked); } catch (err) { status(err.message); renderItemProps(); } });
      const row = el('div', { className: 'tc-also-row' }, el('label', { className: 'tc-check', title: n ? t('item.cond.locked', { n }) : t('item.cond.title', { type: TYPE_LABELS[k].toLowerCase() }) }, cb, ' ' + TYPE_LABELS[k]));
      if (c) {
        const u = el('select', { className: 'tc-select', id: 'tc-i-also-unit-' + k, dataset: { field: 'cond-unit:' + k }, 'aria-label': t('item.cond.unit', { type: TYPE_LABELS[k] }) },
          U.unitsFor(k, [c.unit]).map((x) => el('option', { value: x, selected: x === c.unit }, U.UNITS[x].label)));   // 0.7 UNITS: the units turned on + its own
        u.addEventListener('change', () => model.updateCond(it.id, k, { unit: u.value }, t('undo.item.unit')));
        row.append(u);
      }
      box.append(row);
    }
    return box;
  }

  /** TK.5+: a typed quantity's own fields — the quantity, its bid area, and where it came from when it was imported. */
  function fixedFields(it, commit, fail) {
    const q = textInput('tc-i-qty', 'qty', it.qty ? String(+it.qty.toFixed(6)) : '0', (v, n) => {
      const s2 = String(v).trim().replace(/,/g, '');
      const x = /^\d*\.?\d+$/.test(s2) ? Number(s2) : NaN;
      if (!(x >= 0 && x <= 1e12)) return fail(n, t('item.qty.err'));
      commit({ qty: x }, t('undo.item.qty'));
    }, { inputmode: 'decimal' });
    const out = [...fieldRow(t('item.f.qty', { unit: U.UNITS[it.unit].label }), q)];
    const areas = model.state.areas || [];
    if (areas.length) {
      const sel = el('select', { className: 'tc-select', id: 'tc-i-area', dataset: { field: 'area' } },
        el('option', { value: '' }, t('area.none')), areas.map((a) => el('option', { value: a.id, selected: a.id === it.area }, a.name)));
      sel.addEventListener('change', () => commit({ area: sel.value || undefined }, t('undo.item.area')));
      out.push(...fieldRow(t('item.f.area'), sel));
    }
    out.push(el('span', { className: 'k' }), el('p', { className: 'tc-note', dataset: { itemOrigin: '' } }, it.origin ? originText(it.origin) : t('item.typed.note')));
    return out;
  }

  /** 0.9: the item's temperature (a spec: lowest pour or install temperature, a curing or service temperature). Typed in °C or °F
   *  (a bare number is in the display unit), kept in kelvin, shown in the display unit; blank = none. */
  function tempFields(it, commit, fail, GP, gridApply) {
    const tm = tempMode();
    const text = Number.isFinite(it.tempK) ? U.formatTemp(it.tempK, tm) : '';
    const apply = (v, n) => {
      if (!v.trim()) return commit({ tempK: 0 }, t('undo.item.temp'));
      const r = U.parseTemp(v, tm);
      if (!r.ok) return fail(n, t(r.error));
      commit({ tempK: r.kelvin }, t('undo.item.temp'));
    };
    const hint = tm === 'degc' ? '5 °C' : '40 °F';
    if (GP) { GP.push({ id: 'temp', category: t('item.grid.measure'), label: t('item.f.temp'), type: 'text', value: text, hint }); gridApply.temp = apply; return []; }
    return fieldRow(t('item.f.temp'), textInput('tc-i-temp', 'temp', text, apply, { placeholder: hint, inputmode: 'text', title: t('item.f.temp.title') }));
  }

  /** T5: fields that only shape the 3D view — a wall's thickness, base height and opening head; an area's base height. */
  function shapeFields(it, lu, fail) {
    const fu = fieldUnit(lu);
    const lenInput = (id, field, ft, ph, onCommit) => textInput(id, field, ft ? lenField(ft, fu) : '', (v, n) => {
      if (!v.trim()) return onCommit(0);
      const r = U.parseLength(v, { defaultUnit: fu });
      if (!r.ok) return fail(n, r.error);
      onCommit(r.ft);
    }, { placeholder: ph });
    const set = (k) => (ft) => model.updateItem(it.id, { [k]: ft }, t('undo.item.3d'));
    const out = [el('p', { className: 'tc-props-sub' }, t('item.f.3d'))];
    if (it.type === 'linear') {
      out.push(...fieldRow(t('item.f.thick'), lenInput('tc-i-thick', 'thick', it.thickFt, lenHint(fu, 'thick'), set('thickFt'))));
      out.push(...fieldRow(t('item.f.head'), lenInput('tc-i-head', 'head', it.headFt, lenHint(fu, 'head'), set('headFt'))));
    }
    out.push(...fieldRow(t('item.f.base'), lenInput('tc-i-base', 'base', it.baseFt, lenHint(fu, 'base'), set('baseFt'))));
    return out;
  }

  /** Pitch (T15): an area item's surface, a linear item's rakes or hips. Blank = flat. */
  function pitchFields(it) {
    const out = [];
    const pitchInput = (id, field, value, placeholder, onCommit) => textInput(id, field, value, (v, n) => {
      const r = U.parsePitch(v);
      if (!r.ok) { n.classList.add('is-invalid'); status(t(r.error), 9000); return; }
      onCommit(r.rise);
    }, { placeholder, inputmode: 'decimal', title: t('pitch.title') });
    if (it.type === 'linear') {
      const sel = el('select', { className: 'tc-select', id: 'tc-i-slope', dataset: { field: 'slope' } },
        [['flat', t('slope.flat')], ['rake', t('slope.rake')], ['hip', t('slope.hip')]].map(([v, l]) => el('option', { value: v, selected: (it.slope || 'flat') === v }, l)));
      sel.addEventListener('change', () => model.updateItem(it.id, { slope: sel.value }, t('slope.undo')));
      out.push(...fieldRow(t('slope.label'), sel));
      if (!it.slope) return out;
    }
    out.push(...fieldRow(t('pitch.label'), pitchInput('tc-i-pitch', 'pitch', U.formatPitch(it.pitch || 0), t('pitch.placeholder'), (rise) => model.updateItem(it.id, { pitch: rise }, t('pitch.undo')))));
    return out;
  }

  /** Back-out (T14): this area item's marks take their area out of the chosen area items' marks they overlap. */
  function backoutFields(it) {
    const box = el('input', { type: 'checkbox', id: 'tc-i-backout', checked: !!it.backout, dataset: { field: 'backout' } });
    box.addEventListener('change', () => {
      if (box.checked) {
        const others = model.state.items.filter((x) => x.type === 'area' && x.id !== it.id && !x.backout).map((x) => x.id);
        model.updateItem(it.id, { backout: true, backoutOf: others }, t('backout.undo.on'));
      } else model.updateItem(it.id, { backout: false }, t('backout.undo.off'));
    });
    const out = [el('span', { className: 'k' }), el('label', { className: 'tc-check', for: 'tc-i-backout' }, box, ' ', t('item.backout'))];
    if (!it.backout) return out;
    const targets = model.state.items.filter((x) => x.type === 'area' && x.id !== it.id && !x.backout);
    const of = new Set(it.backoutOf || []);
    const list = targets.length ? el('ul', { className: 'tc-bo-list' }, targets.map((x) => {
      const cb = el('input', { type: 'checkbox', checked: of.has(x.id), dataset: { field: 'bo:' + x.id, backoutOf: x.id } });
      cb.addEventListener('change', () => {
        const next = new Set(it.backoutOf || []);
        if (cb.checked) next.add(x.id); else next.delete(x.id);
        model.updateItem(it.id, { backoutOf: [...next] }, t('backout.undo.of'));
      });
      return el('li', {}, el('label', { className: 'tc-check' }, cb, ' ', el('span', { className: 'tc-chip', style: { background: x.color } }), ' ', x.name));
    })) : el('p', { className: 'tc-note' }, t('item.backout.none'));
    const bad = backouts(model.state).bad.filter((id) => model.mark(id)?.item === it.id).length;
    out.push(el('span', { className: 'k' }, t('item.backout.of')), list);
    if (bad) out.push(el('span', { className: 'k' }), el('p', { className: 'tc-field-err' }, t('item.backout.bad', { n: bad })));
    return out;
  }

  function compEditor(it, c, vars) {
    const key = (f) => 'c:' + c.id + ':' + f;
    const commit = (patch) => model.updateComponent(it.id, c.id, patch);
    const outEl = el('p', { className: 'tc-comp-out' });
    const show = (src) => {
      const p = parse(src, VARS[it.type]);
      let txt, bad = false;
      if (!p.ok) { txt = p.error; bad = true; }
      else { try { txt = '= ' + U.fixed(evaluate(p.ast, vars), 3).replace(/\.?0+$/, '') + ' ' + c.unit; } catch (err) { txt = err.message; bad = true; } }
      outEl.textContent = txt; outEl.classList.toggle('is-err', bad);
    };
    show(c.formula);
    const name = textInput('tc-' + key('name'), key('name'), c.name, (v) => commit({ name: v }), { maxlength: 200 });
    const unit = textInput('tc-' + key('unit'), key('unit'), c.unit, (v) => commit({ unit: v }), { maxlength: 20 });
    const formula = textInput('tc-' + key('formula'), key('formula'), c.formula, (v) => commit({ formula: v }), { maxlength: 500, 'aria-describedby': 'tc-' + key('out') });
    formula.addEventListener('input', () => show(formula.value));
    outEl.id = 'tc-' + key('out');
    const num = (f, v, parser, prop) => textInput('tc-' + key(f), key(f), v, (val, n) => { const r = parser(val); if (!r.ok) { n.classList.add('is-invalid'); status(r.error); return; } commit({ [f]: r[prop] }); }, { inputmode: 'decimal' });
    return el('div', { className: 'tc-comp' },
      el('label', { className: 'wide' }, t('item.f.name'), name), el('label', {}, t('item.f.unit'), unit),
      el('label', { className: 'full' }, t('comp.formula'), formula), outEl,
      el('label', {}, t('item.f.waste'), num('waste', U.percentInput(c.waste), U.parsePercent, 'bp')),
      el('label', {}, t('comp.mat'), num('mat', U.rateInput(c.mat), U.parseRate, 'rate4')),
      el('label', {}, t('comp.lab'), num('lab', U.rateInput(c.lab), U.parseRate, 'rate4')),
      el('button', { type: 'button', className: 'tc-linkbtn is-danger full', onclick: () => model.removeComponent(it.id, c.id) }, t('comp.remove')));
  }

  return { crewFields, condFields, fixedFields, tempFields, shapeFields, pitchFields, backoutFields, compEditor };
}
