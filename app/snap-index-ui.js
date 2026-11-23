/* SPDX-License-Identifier: Apache-2.0 */
/**
 * snap-index-ui.js: takeoffcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSnapIndex(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { pageLinework, SnapIndex, MAX_SEGS } from './snap.js';
import { t } from './i18n.js';

export function mountSnapIndex(ctx) {
  const { ST, isCad, app, status } = ctx;

  // ---- snapping to the PDF's own linework (T1) ----
  const snaps = new Map();     // sheet key → { idx: SnapIndex | null, n, truncated, pending: Promise }
  /** Read the sheet's vector paths once (pdf.js's operator list) and index them; a few sheets are kept. */
  function loadSnap(s) {
    if (snaps.has(s.key)) return snaps.get(s.key).pending;
    const rec = { idx: null, n: 0, truncated: false, pending: null };
    snaps.set(s.key, rec);
    rec.pending = (async () => {
      try {
        const page = await s.file.doc.getPage(s.info.index + 1);
        const lw = isCad(s.file) ? ST.cadMod.cadLinework(s.file.cad, s.info.index) : await pageLinework(ST.pdfjs, page);   // a drawing's own lines (cadset.js)
        rec.n = lw.n; rec.truncated = lw.truncated;
        rec.idx = lw.n ? new SnapIndex(lw, await gridInWorker(lw)) : null;   // the grid is built off the page's thread (0.10 PERF.34)
        if (ST.cur?.key === s.key && ctx.settings.snap && rec.truncated) status(t('snap.truncated', { n: MAX_SEGS.toLocaleString() }), 9000);
      } catch (err) { console.warn(err); }
      while (snaps.size > 4) snaps.delete(snaps.keys().next().value);
    })();
    return rec.pending;
  }
  ST.snapWorker = null; ST.snapJobs = 0;
  /**
   * The snap grid of a sheet's segments, built in snap-worker.js (a copy of the segments goes over; the two arrays come back by transfer).
   * null when a worker cannot run (the SnapIndex then builds it here, as it always did): small sheets are not worth the hop.
   */
  function gridInWorker(lw) {
    if (lw.n < 20000 || typeof Worker === 'undefined') return Promise.resolve(null);
    return new Promise((resolve) => {
      try {
        ST.snapWorker ??= new Worker(import.meta.resolve('./snap-worker.js'), { type: 'module' });
        const id = ++ST.snapJobs, w = ST.snapWorker;
        const done = (g) => { w.removeEventListener('message', on); w.removeEventListener('error', fail); resolve(g); };
        const on = (e) => { if (e.data?.id === id) done(e.data.type === 'done' ? e.data.grid : null); };
        const fail = () => { if (ST.snapWorker === w) { w.terminate(); ST.snapWorker = null; } done(null); };
        w.addEventListener('message', on); w.addEventListener('error', fail);
        const segs = lw.segs.slice(0, lw.n * 4);
        w.postMessage({ id, snapUrl: import.meta.resolve('./snap.js'), segs, n: lw.n }, [segs.buffer]);
      } catch { resolve(null); }
    });
  }
  function snapHit(raw) {
    if (!ctx.settings.snap || !ST.cur || !(ctx.SNAP_TOOLS.has(app.tool) || app.drag)) return null;
    const rec = snaps.get(ST.cur.key);
    if (!rec?.idx) return null;
    return rec.idx.snap(raw, ctx.snapPx() / ctx.view.z);
  }

  return { snaps, loadSnap, snapHit };
}
