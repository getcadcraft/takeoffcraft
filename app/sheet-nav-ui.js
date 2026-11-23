/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheet-nav-ui.js: takeoffcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSheetNav(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { sheetKey } from './model.js';
import { sheetTitle } from './pdfset.js';
import { t } from './i18n.js';

export function mountSheetNav(ctx) {
  const { ST, model, files, views, app, d3, cancelDraft, loadSnap, view, settings } = ctx;

  function rebuildSheets() {
    const multi = files.length > 1;
    ST.sheets = files.flatMap((f) => f.pages.map((p) => ({ key: sheetKey(f.hash, p.index), file: f, info: p, title: sheetTitle(f, p, multi) })));
    ctx.renderSheets();
    ctx.renderMissing();
  }

  /** A sheet's name for exports, even when its PDF isn't open. */
  function sheetLabel(key) {
    const s = ST.sheets.find((x) => x.key === key);
    if (s) return s.title;
    const [hash, idx] = key.split(':');
    const f = model.state.files.find((x) => x.hash === hash);
    return t('sheet.page', { file: f ? f.name.replace(/\.(pdf|dwg|dxf)$/i, '') : t('sheet.unknown'), n: Number(idx) + 1 });
  }

  async function showSheet(key) {
    const s = ST.sheets.find((x) => x.key === key);
    if (!s) return;
    if (ST.cur) views.set(ST.cur.key, view.view);
    cancelDraft();
    app.check = null;
    if (app.cmp && app.cmp.sheet !== key) ctx.closeCompare();
    ST.cur = s;
    const page = await s.file.doc.getPage(s.info.index + 1);
    if (ST.cur !== s) return;
    view.setPage(page, s.info, views.get(key) || null);
    if (settings.snap) loadSnap(s);
    if (d3.on) ctx.update3d();
    if (app.sel && model.mark(app.sel)?.sheet !== key) app.sel = null;
    ctx.renderSheetBar();
    ctx.markCurrentSheet();   // 0.10 PERF.35: two buttons change; the whole list was rebuilt here for every switch
    ctx.renderMarkProps();
    ST.ws?.sheetShown(key);
    ST.learnUi?.sheetShown(key);   // 0.8 SU.811: offer what it learned on this page
  }

  function moveSheet(dir) {
    const list = ctx.visibleSheets();
    if (!list.length) return;
    const i = Math.max(0, list.findIndex((s) => s.key === ST.cur?.key));
    const next = list[Math.min(list.length - 1, Math.max(0, i + dir))];
    if (next && next.key !== ST.cur?.key) showSheet(next.key);
  }

  return { rebuildSheets, sheetLabel, showSheet, moveSheet };
}
