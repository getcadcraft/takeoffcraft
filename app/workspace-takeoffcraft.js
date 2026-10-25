/* SPDX-License-Identifier: Apache-2.0 */
/**
 * workspace-takeoffcraft.js — TakeoffCraft's adapter for the shell's workspace layout engine (assets/js/app-workspace.js; 0.7 WS.11,
 * session ws-takeoffcraft; contract docs/0.7-PART9.md, adapter map docs/apps/app-workspace.md, log docs/0.7-sessions/ws-takeoffcraft.md).
 * The engine builds the blocks a layout file names; this file fills them with TakeoffCraft's own things, starting from fromInput()
 * (the registry in input-takeoffcraft.js: every tool clicks the app's own button):
 *
 *   ribbon     the Takeoff ribbon menu style (tabs Takeoff, Edit, View, Markup, Estimate)
 *   toolbox    the takeoff tools in groups: measure, shape, scale, from the drawing, notes, view
 *   views      the open sheets — PDF pages and a DWG / DXF drawing's Model and layouts alike (a drawing stays in the layout as
 *              sheets, contract point 9); the 3D check view is not a sheet: while it shows, the sheet tabs and view bar step aside
 *   palettes   properties (the selected condition, note or mark), browser (Sheets, Conditions, Estimate), panel (the sheet
 *              thumbnails: the left panel's own content)
 *   slots      scale (the preset list) and fit for the view bar; level (the bid area) and document (the sheet bar) for the info box;
 *              layout (snap) and units (zoom) for the quick bar
 *
 *   mountTakeoffcraftWorkspace(host) → { engine, changed(), sheetShown(key) } or null (no registry)
 *   host (takeoffcraft.js): root, stage, panels, status, sheets(), current(), show(key), tool(), selection(), name(), dirty(), busy(),
 *     hasFiles(), is3d(), endTool(), conditions(), estimate(), focusItem(id), openQty(), reason(cmd, button), presetLabel, placePreset(),
 *     propSections [Node], areaRow, sheetbar, snap, zoom
 */
import { mountWorkspaces } from 'cc-workspace';
import { fromInput } from '/assets/js/app-workspace-input.js';
import { t } from './i18n.js';
import { el } from './ui-util.js';

// the well-known actions (titlebar, File menu, options bar) → TakeoffCraft's registry
const MAP = { open: 'file.open-pdf', save: 'file.save', undo: 'edit.undo', redo: 'edit.redo', select: 'takeoff.select', clear: 'edit.select-none', fit: 'view.fit-page' };
const TOOLBOX = [
  ['measure', ['takeoff.select', 'takeoff.linear', 'takeoff.area', 'takeoff.count', 'takeoff.circle', 'takeoff.room', 'takeoff.autocount']],
  ['shape', ['takeoff.arc', 'takeoff.deduct', 'takeoff.cutout']],
  ['scale', ['scale.calibrate', 'scale.check']],
  ['drawing', ['takeoff.cad-count', 'takeoff.cad-geom']],
  ['notes', ['markup.note', 'markup.cloud', 'markup.highlight']],
  ['view', ['view.fit-page', 'view.fit-width', 'view.3d', 'view.compare']],
];
// the app's tool name (app.tool) → its command
const TOOL_CMD = { select: 'takeoff.select', linear: 'takeoff.linear', area: 'takeoff.area', circle: 'takeoff.circle', room: 'takeoff.room', cutout: 'takeoff.cutout',
  cutcircle: 'takeoff.cutout', count: 'takeoff.count', autocount: 'takeoff.autocount', calibrate: 'scale.calibrate', check: 'scale.check', cadgeom: 'takeoff.cad-geom',
  note: 'markup.note', cloud: 'markup.cloud', highlight: 'markup.highlight' };

export async function mountTakeoffcraftWorkspace(host) {
  const { root, stage } = host;
  const base = await fromInput({ app: 'takeoffcraft', root, stage, panels: host.panels, status: host.status, map: MAP,
    say: (text, bad) => host.say(text, bad) });
  if (!base) return null;
  const I = window.ccInput;
  const cid = (id) => MAP[id] || id;
  const cmd = (id) => I.commands.find((c) => c.id === cid(id)) || null;
  const button = (c) => (c?.sel ? root.querySelector(c.sel) || document.querySelector(c.sel) : null);
  let engine = null, ctx = null;

  // ---- the views: one per open sheet ----
  const listViews = () => host.sheets().map((s) => ({ id: s.key, kind: s.cad ? 'drawing' : 'sheet', name: s.title, icon: s.cad ? 'bi-bounding-box' : 'bi-file-earmark' }));
  const openMode = () => ctx?.block('viewtabs')?.mode === 'open';

  // ---- Properties: the selected condition, note or mark (the right panel's own sections, moved in and back) ----
  const propsNote = el('p', { className: 'tc-ws-note', dataset: { tcWsPropsNote: '' } }, t('ws.props.none'));
  const propsBody = el('div', { className: 'tc-ws-props' }, propsNote);
  const sectionHomes = [];
  function takeSections() {
    for (const s of host.propSections) { const h = document.createComment('workspace: properties home'); s.before(h); sectionHomes.push([s, h]); propsBody.append(s); }   // i18n-ignore: a comment node
  }
  function giveSections() { while (sectionHomes.length) { const [s, h] = sectionHomes.pop(); h.after(s); h.remove(); } }

  // ---- the browser: Sheets, Conditions, Estimate ----
  const group = (key, label) => {
    const list = el('ul', { className: 'tc-pb-list' });
    const sum = el('summary', {}, label);
    const d = el('details', { className: 'tc-pb-group', open: true, dataset: { pbGroup: key } }, sum, list);
    return { d, sum, list, label };
  };
  const G = { sheets: group('sheets', t('ws.pb.sheets')), conditions: group('conditions', t('ws.pb.conditions')), estimate: group('estimate', t('ws.pb.estimate')) };
  const estFoot = el('p', { className: 'tc-pb-total', dataset: { pbTotal: '' } });
  const qtyBtn = el('button', { type: 'button', className: 'tc-linkbtn', dataset: { pbQty: '' } }, t('ws.pb.showqty'));
  G.estimate.d.append(estFoot, qtyBtn);
  const browserEl = el('div', { className: 'tc-pb', dataset: { tcBrowser: '' } }, G.sheets.d, G.conditions.d, G.estimate.d);
  const empty = (text) => el('li', { className: 'tc-pb-empty' }, text);
  let browserSig = '';
  function renderBrowser() {
    const sheets = host.sheets(), conds = host.conditions(), est = host.estimate(), now = host.current();
    const sig = JSON.stringify([sheets, conds, est, now]);
    if (sig === browserSig || browserEl.contains(browserEl.ownerDocument.activeElement) && browserEl.ownerDocument.activeElement.matches('input')) return;
    browserSig = sig;
    G.sheets.sum.textContent = t('ws.pb.n', { name: G.sheets.label, n: sheets.length });
    G.sheets.list.replaceChildren(...(sheets.length ? sheets.map((s) => el('li', {}, el('button', { type: 'button', className: 'tc-pb-go', 'aria-current': s.key === now ? 'true' : 'false', title: s.title + ' · ' + (s.scale || t('x.noscale')), dataset: { pbSheet: s.key } },
      el('i', { className: 'bi ' + (s.cad ? 'bi-bounding-box' : 'bi-file-earmark'), 'aria-hidden': 'true' }), el('span', { className: 'tc-pb-name' }, s.title),
      el('span', { className: 'tc-pb-meta' + (s.scale ? '' : ' is-unscaled') }, s.scale || t('x.noscale'))))) : [empty(t('ws.pb.nosheets'))]));
    G.conditions.sum.textContent = t('ws.pb.n', { name: G.conditions.label, n: conds.length });
    G.conditions.list.replaceChildren(...(conds.length ? conds.map((c) => el('li', {}, el('button', { type: 'button', className: 'tc-pb-go', 'aria-pressed': String(c.active), title: c.name + (c.qty ? ' · ' + c.qty : ''), dataset: { pbItem: c.id } },
      el('span', { className: 'tc-chip', style: { background: c.color } }), el('span', { className: 'tc-pb-name' }, c.name), el('span', { className: 'tc-pb-meta' }, c.qty)))) : [empty(t('ws.pb.noconds'))]));
    G.estimate.list.replaceChildren(...(est.rows.length ? est.rows.map((r) => el('li', {}, el('button', { type: 'button', className: 'tc-pb-go', dataset: { pbEst: r.id } },
      el('span', { className: 'tc-pb-name' }, r.name), el('span', { className: 'tc-pb-meta tc-pb-money' }, r.total)))) : [empty(t('ws.pb.noest'))]));
    estFoot.textContent = est.total; estFoot.hidden = !est.total;
  }
  browserEl.addEventListener('click', (e) => {
    const b = e.target.closest?.('button'); if (!b) return;
    if (b.dataset.pbSheet) { if (ctx) ctx.open(b.dataset.pbSheet); else host.show(b.dataset.pbSheet); return; }
    if (b.dataset.pbItem) { host.focusItem(b.dataset.pbItem); return; }
    if (b.dataset.pbEst) { host.focusItem(b.dataset.pbEst); host.openQty(); return; }
    if (b.hasAttribute('data-pb-qty')) host.openQty();
  });

  // ---- the view bar's controls ----
  const fitNodes = (c) => [c.tool('fit', 'viewbar', true), c.tool('view.fit-width', 'viewbar', true)];

  const adapter = {
    ...base,
    t: (k, v) => t(k, v),
    actions: Object.keys(MAP).filter((a) => !!cmd(a)),
    fill: ':is(.tc-canvases, .tc-3d)',   // i18n-ignore: selectors
    state() {
      const tool = host.tool(), c = cmd(TOOL_CMD[tool] || 'takeoff.select');
      return { document: host.hasFiles() ? 'takeoff' : null, name: host.name(), dirty: host.dirty(), busy: host.busy(), selection: host.selection(), other: host.is3d(),
        tool, toolLabel: tool !== 'select' && c ? base.tool(c.id).label : '' };
    },
    endTool: () => host.endTool(),
    // the ribbon's panel names, short enough for the toolbox's icon column (a group is never narrower than its name)
    toolbox: () => TOOLBOX.map(([g, tools]) => ({ id: g, label: t(g === 'drawing' ? 'ws.tbx.drawing' : 'input.m.' + g), tools: tools.filter((id) => !!cmd(id)) })),
    can(id, block, s) {
      const a = base.can(id, block, s), c = cmd(id);
      if (a.enabled) return c?.sheet && !host.current() ? { enabled: false, reason: t('input.why.pdf') } : a;   // a sheet bar menu's tools wait for a sheet
      const b = button(c);
      if (!b) return a;
      const why = host.reason(c, b);
      return why ? { enabled: false, reason: why } : a;
    },
    options(s) {
      if (s.other) return { title: t('ws.opt.3d.title'), text: t('ws.opt.3d') };
      const running = s.tool && s.tool !== 'select';
      return { title: running ? s.toolLabel : t('ws.opt.title'),
        text: s.busy ? t('ws.opt.busy') : running ? '' : !s.document ? t('ws.opt.open') : s.selection.length ? t('ws.opt.sel', { n: s.selection.length }) : t('ws.opt.select') };
    },
    slots: {
      scale: { label: t('ws.slot.scale'), nodes: () => [host.presetLabel].filter(Boolean) },
      fit: { label: t('ws.slot.fit'), nodes: fitNodes },
      level: { label: t('ws.slot.area'), nodes: () => [host.areaRow].filter(Boolean) },   // the built-ins' slot names: level, document
      document: { label: t('ws.slot.sheet'), nodes: () => [host.sheetbar].filter(Boolean) },
      layout: { label: t('ws.slot.snap'), nodes: () => [host.snap].filter(Boolean) },
      units: { label: t('ws.slot.zoom'), nodes: () => [host.zoom].filter(Boolean) },
    },
    palettes: {
      properties: { label: t('ws.props'), body: () => propsBody },
      browser: { label: t('ws.browser'), hint: t('ws.browser.hint'), body: () => browserEl },
      panel: { label: t('ws.panel') },
    },
    views: {
      list: listViews,
      current: () => host.current(),
      go: (id) => { if (host.current() !== id) host.show(id); },
      token: () => (host.hasFiles() ? 'takeoff' : null),
      initial: () => host.current() || listViews()[0]?.id || null,
    },
    showProperties: () => ctx?.palette('properties'),
    entered(c) {
      ctx = c;
      if (c.has('palettes')) { takeSections(); renderBrowser(); }
    },
    leaving(c) { if (c.has('palettes')) giveSections(); },
    left() { ctx = null; browserSig = ''; host.placePreset(); },
    resized: () => host.resized(),
    refresh(c) {
      if (!c.has('palettes')) return;
      propsNote.hidden = host.propSections.some((s) => !s.hidden);
      renderBrowser();
    },
  };
  // the app's own toolbar block keeps the base's (its <main>'s role=toolbar); the toolbox is the takeoff tools, not the whole toolbar
  engine = mountWorkspaces(adapter);
  return {
    engine,
    changed: () => engine.refresh(),
    /** The app showed a sheet by itself (the thumbnails, PageUp / PageDown, a condition's marks): its tab opens too. */
    sheetShown(key) { if (engine.layout && openMode() && engine.view()?.id !== key) ctx?.open(key); else engine.refresh(); },
  };
}
