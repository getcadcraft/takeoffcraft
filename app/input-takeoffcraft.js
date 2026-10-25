/* SPDX-License-Identifier: Apache-2.0 */
/**
 * input-takeoffcraft.js — TakeoffCraft's command registry for the shell's input engine (0.5 track IP.3; engine
 * assets/js/app-input.js + app-input-ui.js, map docs/apps/app-input.md; manifest "input": "input-takeoffcraft.js").
 * DOM-free data, plus hooks() which runs only on the page.
 *
 * COMMANDS: every toolbar command (ui.inc $__tools: File, the Export menu, Scale, Takeoff, Edit + its More menu, View), the
 * sheet bar's tools (markup notes, Compare, the next changed mark, 3D, the hand-off to the review app), the Items panel's
 * New item / Library, and the status bar's Snap toggle.
 *   id       stable id (people's own styles and .ccinput.json files name it — never rename one)
 *   sel      the app's own button the shell clicks (one code path for every style)
 *   sheet    the button is on the sheet bar, which shows once a PDF is open
 *   defKeys  TakeoffCraft's own keys (takeoffcraft.js's keydown handler): the TakeoffCraft style
 *   optional the button exists only sometimes (the hand-off, when the review app takes one; the next changed mark)
 * The Scale group's preset list is a <select>, not a command: while a menu style hides the toolbar, takeoffcraft.js moves
 * it onto the sheet bar beside the sheet's scale (and back for the toolbar style).
 * Labels are text keys `input.cmd.<id>` in lang/en.json.
 *
 * STYLES: TakeoffCraft (today's toolbar), Takeoff desk (a menu bar laid out like the on-screen takeoff programs:
 * File, Edit, View, Scale, Takeoff, Items, Markup, Export, with a row of the takeoff tools) and Takeoff ribbon (0.7 WS.11: tabs
 * Takeoff, Edit, View, Markup, Estimate; also the workspace layouts' ribbon, workspace-takeoffcraft.js). Named for a way of
 * working, never for a product.
 */

import { setMouse } from './input-mouse.js';

const C = (id, group, icon, sel, more = {}) => ({ id, group, icon, sel, label: 'input.cmd.' + id, defKeys: [], ...more });
const T = (grp, attr) => `[data-tb-key="${grp}"] [${attr}]`;   // a toolbar button inside its group
const sheet = { sheet: true };

export const COMMANDS = [
  C('file.new', 'file', 'bi-file-earmark-plus', T('File', 'data-act="new-takeoff"')),
  C('file.open-pdf', 'file', 'bi-folder2-open', T('File', 'data-act="open-pdf"'), { defKeys: ['Ctrl+O'] }),
  C('file.open-project', 'file', 'bi-file-earmark-arrow-up', T('File', 'data-act="open-project"')),
  C('file.save', 'file', 'bi-download', T('File', 'data-act="save-project"'), { defKeys: ['Ctrl+S'] }),

  C('export.xlsx', 'export', 'bi-file-earmark-spreadsheet', '[data-export-menu] [data-act="export-xlsx"]'),
  C('export.csv', 'export', 'bi-filetype-csv', '[data-export-menu] [data-act="export-csv"]'),
  C('export.materials', 'export', 'bi-list-check', '[data-export-menu] [data-act="export-materials"]'),
  C('export.spots', 'export', 'bi-geo-alt', '[data-export-menu] [data-act="export-spots"]'),
  C('export.pdf', 'export', 'bi-file-earmark-pdf', '[data-export-menu] [data-act="export-pdf"]'),
  C('export.embed', 'export', 'bi-file-earmark-zip', '[data-export-menu] [data-act="export-embed"]'),
  C('export.bid', 'export', 'bi-file-earmark-text', '[data-export-menu] [data-act="export-bid"]'),
  C('export.level', 'export', 'bi-people', '[data-export-menu] [data-act="export-level"]'),   // 0.6 LC.13

  C('scale.calibrate', 'scale', 'bi-rulers', T('Scale', 'data-tool="calibrate"'), { defKeys: ['K'] }),
  C('scale.check', 'scale', 'bi-arrows-expand-vertical', T('Scale', 'data-tool="check"'), { defKeys: ['D'] }),

  C('takeoff.select', 'takeoff', 'bi-cursor', T('Takeoff', 'data-tool="select"'), { defKeys: ['V'] }),
  C('takeoff.linear', 'takeoff', 'bi-bezier2', T('Takeoff', 'data-tool="linear"'), { defKeys: ['L'] }),
  C('takeoff.area', 'takeoff', 'bi-pentagon', T('Takeoff', 'data-tool="area"'), { defKeys: ['A'] }),
  C('takeoff.circle', 'takeoff', 'bi-circle', T('Takeoff', 'data-tool="circle"'), { defKeys: ['O'] }),
  C('takeoff.room', 'takeoff', 'bi-paint-bucket', T('Takeoff', 'data-tool="room"'), { defKeys: ['B'] }),
  C('takeoff.arc', 'takeoff', 'bi-bezier', T('Takeoff', 'data-act="arc"'), { defKeys: ['R'] }),
  C('takeoff.deduct', 'takeoff', 'bi-dash-square-dotted', T('Takeoff', 'data-act="deduct"'), { defKeys: ['E'] }),
  C('takeoff.cutout', 'takeoff', 'bi-scissors', T('Takeoff', 'data-tool="cutout"'), { defKeys: ['X'] }),
  C('takeoff.count', 'takeoff', 'bi-plus-circle', T('Takeoff', 'data-tool="count"'), { defKeys: ['C'] }),
  C('takeoff.autocount', 'takeoff', 'bi-grid-3x3-gap', T('Takeoff', 'data-tool="autocount"'), { defKeys: ['S'] }),

  C('edit.undo', 'edit', 'bi-arrow-counterclockwise', T('Edit', 'data-act="undo"'), { defKeys: ['Ctrl+Z'] }),
  C('edit.redo', 'edit', 'bi-arrow-clockwise', T('Edit', 'data-act="redo"'), { defKeys: ['Ctrl+Y', 'Ctrl+Shift+Z'] }),
  C('edit.copy', 'edit', 'bi-copy', T('Edit', 'data-act="copy"'), { defKeys: ['Ctrl+C'] }),
  C('edit.paste', 'edit', 'bi-clipboard-plus', T('Edit', 'data-act="paste"'), { defKeys: ['Ctrl+V'] }),
  C('edit.cut', 'edit', 'bi-scissors', '[data-edit-menu] [data-act="cut"]', { defKeys: ['Ctrl+X'] }),
  C('edit.paste-in-place', 'edit', 'bi-clipboard-check', '[data-edit-menu] [data-act="paste-in-place"]', { defKeys: ['Ctrl+Shift+V'] }),
  C('edit.duplicate', 'edit', 'bi-files', '[data-edit-menu] [data-act="duplicate"]', { defKeys: ['Ctrl+D'] }),
  C('edit.delete', 'edit', 'bi-trash', '[data-edit-menu] [data-act="delete"]', { defKeys: ['Delete'], fixed: true }),
  C('edit.select-all', 'edit', 'bi-check2-all', '[data-edit-menu] [data-act="select-all"]', { defKeys: ['Ctrl+A'] }),
  C('edit.select-none', 'edit', 'bi-x-square', '[data-edit-menu] [data-act="select-none"]', { defKeys: ['Escape'], fixed: true }),

  C('view.fit-page', 'view', 'bi-arrows-fullscreen', T('View', 'data-act="fit-page"'), { defKeys: ['F'] }),
  C('view.fit-width', 'view', 'bi-arrows', T('View', 'data-act="fit-width"'), { defKeys: ['W'] }),
  C('view.3d', 'view', 'bi-box', '[data-sheetbar] [data-act="view-3d"]', { ...sheet, defKeys: ['3'] }),
  C('view.compare', 'view', 'bi-layers-half', '[data-sheetbar] [data-act="compare"]', sheet),
  C('takeoff.cad-geom', 'takeoff', 'bi-bounding-box', '[data-sheetbar] [data-tool="cadgeom"]', { ...sheet, optional: true }),   // 0.7 TD.4: measure from the drawing's geometry
  C('takeoff.cad-count', 'takeoff', 'bi-diagram-3', '[data-sheetbar] [data-act="cad-count"]', { ...sheet, optional: true }),   // 0.7 TD.3: count from the drawing (a DWG / DXF sheet's bar)
  C('view.next-flag', 'view', 'bi-flag', '[data-sheetbar] [data-act="next-flag"]', { ...sheet, optional: true }),
  C('view.snap', 'view', 'bi-magnet', '[data-snap-toggle]', { defKeys: ['F3'] }),

  C('markup.note', 'markup', 'bi-chat-left-text', '[data-markup-menu] [data-tool="note"]', sheet),
  C('markup.cloud', 'markup', 'bi-cloud', '[data-markup-menu] [data-tool="cloud"]', sheet),
  C('markup.highlight', 'markup', 'bi-highlighter', '[data-markup-menu] [data-tool="highlight"]', sheet),
  C('markup.handoff', 'markup', 'bi-box-arrow-up-right', '[data-sheetbar] [data-handoff-pdf]', { ...sheet, optional: true }),   // i18n-ignore: a CSS selector

  C('items.new', 'items', 'bi-plus-lg', '[data-item-new]'),
  C('items.library', 'items', 'bi-journal-bookmark', '[data-library]'),

  C('app.settings', 'app', 'bi-gear', '[data-settings-open]', { defKeys: ['Ctrl+,'], keyOnly: true }),
  C('app.palette', 'app', 'bi-search', '[data-palette-open]', { defKeys: ['Ctrl+K'], keyOnly: true }),
  C('app.help', 'app', 'bi-question-circle', '[data-help-open]', { defKeys: ['F1'], keyOnly: true }),
];
export const GROUPS = ['file', 'export', 'scale', 'takeoff', 'edit', 'view', 'markup', 'items', 'app'];

// TakeoffCraft's own keys = the registry's (what the app does with no profile at all)
const DEFAULT_KEYS = Object.fromEntries(COMMANDS.filter((c) => c.defKeys.length && !c.fixed).map((c) => [c.id, c.defKeys.slice()]));

const m = (label, items) => ({ label: 'input.m.' + label, items });
// a ribbon tab: [panel name, items]; an item is lg(id) / sm(id) (small, stacked three high); in a mixed panel a bare id is large
// only when first — 0.7 RIBBON-COMPACT
const tab = (label, panels) => ({ label: 'input.m.' + label, panels: panels.map(([l, items]) => ({ label: 'input.m.' + l, items })) });
const sm = (id) => ({ id, size: 'sm' }), lg = (id) => ({ id, size: 'lg' });
const EXPORTS = ['export.xlsx', 'export.csv', 'export.materials', 'export.spots', '-', 'export.pdf', 'export.embed', '-', 'export.bid', 'export.level'];

export const STYLES = {
  takeoffcraft: {
    format: 'cadcraft-input', version: 1, id: 'takeoffcraft', name: 'input.style.takeoffcraft', builtin: true, layout: 'toolbar',
    keys: DEFAULT_KEYS,
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },   // null: the 3D check view keeps its own buttons
  },
  desk: {
    format: 'cadcraft-input', version: 1, id: 'desk', name: 'input.style.desk', builtin: true, layout: 'menubar',
    menus: [
      m('file', ['file.new', 'file.open-pdf', 'file.open-project', '-', 'file.save', '-', 'app.settings', 'app.palette', 'app.help']),
      m('edit', ['edit.undo', 'edit.redo', '-', 'edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', 'edit.duplicate', 'edit.delete', '-', 'edit.select-all', 'edit.select-none']),
      m('view', ['view.fit-page', 'view.fit-width', '-', 'view.3d', 'view.compare', 'view.next-flag', '-', 'view.snap']),
      m('scale', ['scale.calibrate', 'scale.check']),
      m('takeoff', ['takeoff.select', '-', 'takeoff.linear', 'takeoff.area', 'takeoff.circle', 'takeoff.room', 'takeoff.count', 'takeoff.autocount', 'takeoff.cad-count', 'takeoff.cad-geom', '-', 'takeoff.arc', 'takeoff.deduct', 'takeoff.cutout']),
      m('items', ['items.new', 'items.library']),
      m('markup', ['markup.note', 'markup.cloud', 'markup.highlight', '-', 'markup.handoff']),
      m('export', EXPORTS),
    ],
    bar: ['file.open-pdf', 'file.save', '-', 'scale.calibrate', '-', 'takeoff.select', 'takeoff.linear', 'takeoff.area', 'takeoff.count', 'takeoff.autocount', 'takeoff.cad-count', 'takeoff.cad-geom', 'takeoff.cutout', '-', 'edit.undo', 'edit.redo', '-', 'view.fit-page'],
    labels: { 'items.new': 'input.lbl.desk.newitem', 'takeoff.linear': 'input.lbl.desk.linear', 'takeoff.area': 'input.lbl.desk.area', 'takeoff.count': 'input.lbl.desk.count',
      'file.open-pdf': 'input.lbl.desk.open', 'file.save': 'input.lbl.desk.save', 'scale.calibrate': 'input.lbl.desk.calibrate', 'takeoff.select': 'input.lbl.desk.select', 'view.fit-page': 'input.lbl.desk.fit' },
    keys: { ...DEFAULT_KEYS, 'items.new': ['N'] },   // N: a new item (condition), the one key the takeoff desk adds
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },
  },
  // 0.7 WS.11: a ribbon named for the work (Takeoff, Edit, View, Markup, Estimate), sizes per RIBBON-COMPACT (docs/apps/app-input.md):
  // the tools used all day large, their neighbours small and stacked three high. The workspace layouts' ribbon is this style.
  ribbon: {
    format: 'cadcraft-input', version: 1, id: 'ribbon', name: 'input.style.ribbon', builtin: true, layout: 'ribbon',
    menus: [m('file', ['file.new', 'file.open-pdf', 'file.open-project', '-', 'file.save', '-', 'export.xlsx', 'export.pdf', '-', 'app.settings', 'app.palette', 'app.help'])],
    quick: ['file.open-pdf', 'file.save', 'edit.undo', 'edit.redo'],
    tabs: [
      tab('takeoff', [
        ['measure', [lg('takeoff.select'), lg('takeoff.linear'), lg('takeoff.area'), lg('takeoff.count'), sm('takeoff.circle'), sm('takeoff.room'), sm('takeoff.autocount')]],
        ['shape', [sm('takeoff.arc'), sm('takeoff.deduct'), sm('takeoff.cutout')]],
        ['scale', ['scale.calibrate', sm('scale.check')]],
        ['drawing', ['takeoff.cad-count', sm('takeoff.cad-geom')]],
        ['conditions', ['items.new', sm('items.library')]],
      ]),
      tab('edit', [
        ['clipboard', ['edit.paste', sm('edit.cut'), sm('edit.copy'), sm('edit.paste-in-place')]],
        ['modify', [sm('edit.duplicate'), sm('edit.delete')]],
        ['selection', [sm('edit.select-all'), sm('edit.select-none')]],
        ['history', [sm('edit.undo'), sm('edit.redo')]],
      ]),
      tab('view', [
        ['navigate', ['view.fit-page', sm('view.fit-width')]],
        ['check', [lg('view.3d'), lg('view.compare'), sm('view.next-flag'), sm('view.snap')]],
      ]),
      tab('markup', [
        ['notes', ['markup.note', sm('markup.cloud'), sm('markup.highlight')]],
        ['share', ['markup.handoff']],
      ]),
      tab('estimate', [
        ['workbook', ['export.xlsx', sm('export.csv'), sm('export.materials'), sm('export.spots')]],
        ['sheets', ['export.pdf', sm('export.embed')]],
        ['bid', ['export.bid', sm('export.level')]],
      ]),
    ],
    labels: {
      'takeoff.select': 'input.lbl.desk.select', 'takeoff.linear': 'input.lbl.desk.linear', 'takeoff.area': 'input.lbl.desk.area', 'takeoff.count': 'input.lbl.desk.count',
      'takeoff.circle': 'input.lbl.ribbon.circle', 'takeoff.room': 'input.lbl.ribbon.room', 'takeoff.arc': 'input.lbl.ribbon.arc', 'takeoff.deduct': 'input.lbl.ribbon.deduct',
      'scale.calibrate': 'input.lbl.desk.calibrate', 'scale.check': 'input.lbl.ribbon.check', 'takeoff.cad-count': 'input.lbl.ribbon.cadcount', 'takeoff.cad-geom': 'input.lbl.ribbon.cadgeom',
      'items.new': 'input.lbl.desk.newitem', 'view.fit-page': 'input.lbl.desk.fit', 'view.fit-width': 'input.lbl.ribbon.fitwidth', 'view.3d': 'input.lbl.ribbon.3d',
      'view.compare': 'input.lbl.ribbon.compare', 'view.next-flag': 'input.lbl.ribbon.nextflag', 'view.snap': 'input.lbl.ribbon.snap', 'markup.handoff': 'input.lbl.ribbon.handoff',
      'export.xlsx': 'input.lbl.ribbon.xlsx', 'export.csv': 'input.lbl.ribbon.csv', 'export.materials': 'input.lbl.ribbon.materials', 'export.spots': 'input.lbl.ribbon.spots',
      'export.pdf': 'input.lbl.ribbon.pdf', 'export.embed': 'input.lbl.ribbon.embed', 'export.bid': 'input.lbl.ribbon.bid', 'export.level': 'input.lbl.ribbon.level',
    },
    keys: { ...DEFAULT_KEYS },
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },
  },
};
export const STYLE_ORDER = ['takeoffcraft', 'desk', 'ribbon'];

/** IP.4: each style's family ("use this style in every app"). TakeoffCraft has no classic (command line) style: that family keeps its own. */
export const FAMILY = { takeoffcraft: 'own', desk: 'menus', ribbon: 'ribbon' };
export const STORE = 'takeoffcraft.input';

/**
 * The page side the shell asks for (app-input-ui.js). The sheet bar's tools wait for an open PDF; a run, an outline, a paste
 * or an auto count in progress keeps its own keys (takeoffcraft.js sets window.ccInputHooks.busy), and so do the digits
 * that start a typed length while drawing.
 */
export function hooks({ root, t }) {
  return {
    why(c, b, generic) {
      if (c.sheet && b && b.closest('[data-sheetbar][hidden]')) return t('input.why.pdf');
      return generic(c, b);
    },
    keepKey: (combo, plain) => plain && /^[0-9.]$/.test(combo) && !!window.ccInputHooks?.busy?.(),
    mouse: (mm) => setMouse(mm),
  };
}
