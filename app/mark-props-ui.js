/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mark-props-ui.js: takeoffcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountMarkProps(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { measureMark, wallRule, kindsOf, wallArea, methodNote, backouts } from './model.js';
import { el } from './ui-util.js';
import * as U from './units.js';

export function mountMarkProps(ctx) {
  const { ui, model, app, selMore, selIds, d3, wsChanged, status, ftIn, areaShow, sheetLabel, setTool, setActive, keepFocus, fieldRow, textInput, renderToolbar, announcePick } = ctx;

  // ---- the selected mark ----
  function renderMarkProps() {
    announcePick();   // SC.5: every change of the selected marks ends here (Shift+click changes the set without a new main mark)
    wsChanged();
    renderToolbar();
    if (d3.on) d3.view?.setSelection(selIds());
    const m = app.sel && model.mark(app.sel);
    ui.markSec.hidden = !m;
    if (!m) { ui.markProps.replaceChildren(); return; }
    ui.markSec.querySelector('.tc-h').textContent = selMore.size ? t('mark.h.many') : t('mark.h');
    if (selMore.size) { renderMultiProps(); return; }
    const it = model.item(m.item);
    const sc = model.scaleOf(m.sheet);
    const r = measureMark(m, sc?.ftPerUnit, it, wallRule(model.state));   // 0.10 BK.42: by the takeoff's measurement method
    const G = window.ccPropGrid ? [] : null;   // 0.8 PANEL-COMPACT: the mark's facts and its item go in the shared grid where the shell has it
    let kvn = 0;
    const kv = (k, val) => G ? (G.push({ id: 'v' + (kvn++), category: t('mark.grid.measured'), label: k, type: 'readonly', value: val }), []) : [el('span', { className: 'k' }, k), el('span', { className: 'v' }, val)];
    const itemOpts = model.state.items.filter((i) => kindsOf(i).includes(m.kind));
    const moveTo = (v) => { model.updateMark(m.id, { item: v }, t('undo.mark.item')); setActive(v, false); };
    let rows, applyZ = null;
    if (G) {
      G.push({ id: 'item', category: t('mark.grid.mark'), label: t('mark.f.item'), type: 'select', value: m.item, options: itemOpts.map((i) => ({ value: i.id, label: i.name })) },
        { id: 'sheet', category: t('mark.grid.mark'), label: t('mark.f.sheet'), type: 'readonly', value: sheetLabel(m.sheet) });
      rows = [...ctx.areaField([m.id]), ...ctx.groupField([m.id])];
    } else {
      const move = el('select', { className: 'tc-select', id: 'tc-m-item', dataset: { field: 'm-item' } }, itemOpts.map((i) => el('option', { value: i.id, selected: i.id === m.item }, i.name)));
      move.addEventListener('change', () => moveTo(move.value));
      rows = [el('label', { for: 'tc-m-item' }, t('mark.f.item')), move, ...kv(t('mark.f.sheet'), sheetLabel(m.sheet)), ...ctx.areaField([m.id]), ...ctx.groupField([m.id])];
    }
    const extra = [];
    if (!r) rows.push(...kv(t('item.measured'), t('mark.noscale')));
    else if (m.kind === 'linear') {
      rows.push(...kv(t('mark.f.length'), t('mark.length', { len: ftIn(r.lengthFt), lf: U.fixed(r.lengthFt, 2) })), ...kv(t('mark.f.segments'), String(r.segmentsFt.length)));
      if (r.deducts.length) rows.push(...kv(t('props.deducts'), ftIn(r.deductFt)), ...kv(t('props.drawn'), ftIn(r.grossFt)));
      if (it.heightFt > 0 && it.type === m.kind) {
        const wa = wallArea(it, r);   // 0.10 BK.11: the net wall area; a run with openings (from a BimCraft takeoff) says what was taken out
        rows.push(...kv(t('mark.f.wall'), areaShow(wa.net, it)));
        if (wa.deductions > 0) rows.push(...kv(t('mark.f.wallgross'), areaShow(wa.gross, it)), ...kv(t('mark.f.wallopens', { n: r.openN }), areaShow(wa.deductions, it)));
        if (r.openKeptSqft > 0) rows.push(...kv(t('mark.f.wallkept', { n: m.opens.length - r.openN }), areaShow(r.openKeptSqft, it)));   // 0.10 BK.42: openings the method does not deduct
        if (wa.junctions > 0) rows.push(...kv(t('mark.f.walljunc'), areaShow(wa.junctions, it)));
        const mn = methodNote(model.state); if (mn) rows.push(...kv(t('mark.f.method'), mn));
      }
      const ded = new Set(r.deducts);
      const sloped = r.slopes.some((x) => x.k !== 'flat');
      if (sloped) rows.push(...kv(t('props.plan_length'), ftIn(r.planFt)));
      rows.push(...markPitchField(m, it));
      extra.push(el('ol', { className: 'tc-segs' }, r.segmentsFt.map((s, i) => {
        const box = el('input', { type: 'checkbox', checked: ded.has(i), dataset: { field: 'ded:' + i, deductSeg: String(i) } });
        box.addEventListener('change', () => setDeduct(m.id, i, box.checked));
        const own = m.slopes?.[i] || null;
        const kind = el('select', { className: 'tc-select tc-seg-slope', dataset: { field: 'sl:' + i, segSlope: String(i) }, 'aria-label': t('slope.seg.label', { n: i + 1 }) },
          [['', t('slope.item', { kind: t('slope.' + (it.slope || 'flat')) })], ['flat', t('slope.flat')], ['rake', t('slope.rake')], ['hip', t('slope.hip')]].map(([v, l]) => el('option', { value: v, selected: (own?.k || '') === v }, l)));
        kind.addEventListener('change', () => setSegSlope(m.id, i, kind.value || null));
        const len = r.slopes[i].k === 'flat' ? ftIn(s) : t('slope.seg.len', { len: ftIn(r.slopedFt[i]), kind: t('slope.' + r.slopes[i].k).toLowerCase(), pitch: U.formatPitch(r.slopes[i].p) });
        return el('li', { className: ded.has(i) ? 'is-deduct' : '' }, el('span', {}, len + (m.pts[i].b ? ' ' + t('mark.arc') : '')), kind, el('label', { className: 'tc-ded' }, box, ' ', t('props.deduct')));
      })));
    } else if (m.kind === 'area') {
      const cut = it.backout ? 0 : backouts(model.state).cut(m, sc.ftPerUnit) * r.factor;
      rows.push(...kv(t('mark.f.area'), areaShow(Math.max(0, r.areaSqft - cut), it)));
      if (cut > 0) rows.push(...kv(t('props.backouts'), '−' + areaShow(cut, it)));
      if (r.factor > 1) rows.push(...kv(t('props.plan_area'), areaShow(Math.max(0, r.planSqft - cut / r.factor), it)), ...kv(t('props.slope_factor'), U.fixed(r.factor, 4)));
      rows.push(...markPitchField(m, it));
      if (it.backout && !G.isConvex(m.pts)) extra.push(el('p', { className: 'tc-field-err' }, t('backout.mark.convex')));
      if (m.holes.length) rows.push(...kv(t('mark.f.outline'), areaShow(r.grossSqft, it)), ...kv(t('mark.f.cutouts'), t('mark.cutouts.a', { n: m.holes.length, area: areaShow(r.cutSqft, it) })));
      rows.push(...kv(t('mark.f.perimeter'), m.holes.length ? t('mark.perimeter.holes', { len: ftIn(r.perimeterFt) }) : ftIn(r.perimeterFt)));
    } else {
      rows.push(...kv(t('mark.f.count'), '1'));
      // TK.5: a spot elevation on a count mark, handed to CivilCraft (Export › Spot elevations); decimal feet, ft-in or metres
      applyZ = (raw, z) => {
        const v = raw.trim();
        if (!v) { model.updateMark(m.id, { z: undefined }, t('undo.mark.z')); return; }
        const num = /^-?\d+(?:\.\d+)?$/.test(v) ? Number(v) : null;
        const r = num === null ? U.parseLength(v.replace(/^-/, ''), { defaultUnit: 'ft' }) : null;
        const ft = num !== null ? num : r.ok ? (v.startsWith('-') ? -r.ft : r.ft) : null;
        if (ft === null || !(Math.abs(ft) < 1e5)) { z.classList.add('is-invalid'); status(t('spots.err')); return; }
        model.updateMark(m.id, { z: ft }, t('undo.mark.z'));
      };
      const zv = typeof m.z === 'number' ? String(U.roundTo(m.z, 4)) : '';
      if (G) G.push({ id: 'z', category: t('mark.grid.measured'), label: t('spots.field'), type: 'text', value: zv, hint: t('spots.field.title') });
      else {
        const z = el('input', { type: 'text', className: 'tc-input', id: 'tc-m-z', dataset: { field: 'm-z' }, value: zv, placeholder: t('spots.ph'), autocomplete: 'off', title: t('spots.field.title') });
        z.addEventListener('change', () => applyZ(z.value, z));
        z.addEventListener('keydown', (e) => { if (e.key === 'Enter') z.blur(); });
        rows.push(el('label', { for: 'tc-m-z' }, t('spots.field')), z);
      }

    }
    if (m.flag) extra.unshift(el('div', { className: 'tc-flag-note' }, el('p', {}, t('flag.note')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { flagChecked: m.id }, onclick: () => { model.clearFlags([m.id]); } }, t('flag.checked'))));
    const actions = el('div', { className: 'tc-actions' },
      m.kind === 'area' ? el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => setTool('cutout') }, t('mark.cutout.add')) : null,
      m.kind === 'area' ? el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => setTool('cutcircle') }, t('mark.cutout.round')) : null,
      m.kind === 'area' && m.holes.length ? el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => model.updateMark(m.id, { holes: m.holes.slice(0, -1) }, t('undo.cutout.remove')) }, t('mark.cutout.remove')) : null,
      el('button', { type: 'button', className: 'tc-linkbtn is-danger', onclick: deleteSelected }, t('mark.delete')));
    keepFocus(ui.markProps, () => {
      let gridHost = null;
      if (G) {
        gridHost = el('div', { className: 'tc-grid' });
        ccPropGrid.create(gridHost, { label: t('mark.grid.label'), key: 'mark', rows: G, onChange: (rid, val) => {
          if (rid === 'item') moveTo(val);
          else if (rid === 'z') applyZ(String(val), gridHost.querySelector('[data-pg-row="z"]'));
        } });
        gridHost.querySelectorAll('[data-pg-row]').forEach((n) => { n.dataset.field = n.dataset.pgRow; });
      }
      ui.markProps.replaceChildren(...(gridHost ? [gridHost] : []), el('div', { className: 'tc-props' }, rows), ...extra, actions);
    });
  }

  /** Make segment i of a run a deduct, or count it again (one undo step). A run keeps one counted segment. */
  function setDeduct(id, i, on) {
    const m = model.mark(id);
    if (!m || m.kind !== 'linear') return;
    const ded = new Set(m.deducts || []);
    if (on) ded.add(i); else ded.delete(i);
    if (ded.size >= m.pts.length - 1) { status(t('deduct.all'), 9000); renderMarkProps(); return; }
    model.updateMark(id, { deducts: [...ded].sort((a, b) => a - b) }, on ? t('deduct.undo.on') : t('deduct.undo.off'));
  }

  /** A mark's own pitch (T15): blank = its item's. */
  function markPitchField(m, it) {
    if (m.kind === 'linear' && !it.slope && !m.slopes?.some((x) => x && x.k !== 'flat')) return [];
    const n = textInput('tc-m-pitch', 'm-pitch', m.pitch !== undefined ? U.formatPitch(m.pitch) || '0' : '', (v, inp) => {
      if (!v.trim()) { model.updateMark(m.id, { pitch: undefined }, t('pitch.undo')); return; }
      const r = U.parsePitch(v);
      if (!r.ok) { inp.classList.add('is-invalid'); status(t(r.error), 9000); return; }
      model.updateMark(m.id, { pitch: r.rise }, t('pitch.undo'));
    }, { placeholder: it.pitch ? t('pitch.item', { pitch: U.formatPitch(it.pitch) }) : t('pitch.flat'), inputmode: 'decimal', title: t('pitch.title') });
    return [...fieldRow(t('pitch.mark'), n)];
  }
  /** One run segment's slope kind (T15): null = the item's. */
  function setSegSlope(id, i, k) {
    const m = model.mark(id);
    if (!m || m.kind !== 'linear') return;
    const sl = Array.from({ length: m.pts.length - 1 }, (_, j) => m.slopes?.[j] || null);
    sl[i] = k ? { k } : null;
    model.updateMark(id, { slopes: sl }, t('slope.undo'));
  }

  /** Several marks selected: how many of each item, and what can be done with them. */
  function renderMultiProps() {
    const ids = selIds();
    const by = new Map();
    for (const id of ids) { const m = model.mark(id); by.set(m.item, (by.get(m.item) || 0) + 1); }
    const kv = (k, val) => [el('span', { className: 'k' }, k), el('span', { className: 'v' }, val)];
    const rows = [...kv(t('mark.f.marks'), String(ids.length)), ...[...by].flatMap(([item, n]) => kv(model.item(item)?.name || t('mark.f.item'), String(n))), ...ctx.areaField(ids), ...ctx.groupField(ids)];
    const actions = el('div', { className: 'tc-actions' },
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => ctx.copySelection() }, t('edit.copy')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => ctx.duplicateSelection() }, t('edit.duplicate')),
      el('button', { type: 'button', className: 'tc-linkbtn', onclick: () => ctx.cutSelection() }, t('edit.cut')),
      el('button', { type: 'button', className: 'tc-linkbtn is-danger', onclick: deleteSelected }, t('mark.delete.many')));
    ui.markProps.replaceChildren(el('div', { className: 'tc-props' }, rows), actions);
  }

  function deleteSelected() {
    if (app.selNote) { const k = model.note(app.selNote)?.kind; model.removeNote(app.selNote); app.selNote = null; status(t('note.deleted', { kind: t('tool.' + (k || 'note')).toLowerCase(), mod: ctx.modKey })); return; }
    const ids = selIds();
    if (!ids.length) { status(t('del.none')); return; }
    model.removeMarks(ids);
    app.sel = null;
    status(t('del.done', { n: ids.length, mod: ctx.modKey }));
  }

  return { renderMarkProps, deleteSelected };
}
