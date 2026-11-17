/* SPDX-License-Identifier: Apache-2.0 */
/**
 * snap-worker.js: builds a sheet's snap grid off the page's thread (0.10 PERF.34). Message in: { id, snapUrl, segs: Float64Array (transferred),
 * n }. Out: { id, type: 'done', grid } (its two Int32Arrays transferred back) or { id, type: 'error', message }. snapUrl is the page's
 * cache-busted URL of snap.js; the page falls back to building the grid itself when a worker cannot start.
 */
let lib = null;
self.onmessage = async (e) => {
  const { id, snapUrl, segs, n } = e.data;
  try {
    lib ??= await import(snapUrl);
    const grid = lib.buildGrid({ segs, n });
    self.postMessage({ id, type: 'done', grid }, [grid.start.buffer, grid.items.buffer]);
  } catch (err) {
    self.postMessage({ id, type: 'error', message: String(err?.message || err) });
  }
};
