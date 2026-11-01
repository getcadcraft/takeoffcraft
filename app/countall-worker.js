/* SPDX-License-Identifier: Apache-2.0 */
/**
 * countall-worker.js — searches one rendered sheet for every symbol of a legend (0.8 EG.67, legend.js searchSheet) off the page's
 * thread. A few of these run side by side. In: { id, legendUrl, img: {data, w, h}, jobs: [{ key, tpl, floor, turns }] }.
 * Out: { id, type: 'done', res: { [key]: [{ x, y, w, h, rot, score }] } } or { id, type: 'error', message }. Cancel = the page terminates it.
 * legendUrl is the page's cache-busted URL of legend.js (it imports match.js itself).
 */
let lib = null;
self.onmessage = async (e) => {
  const { id, legendUrl, img, jobs } = e.data;
  try {
    lib ??= await import(legendUrl);
    self.postMessage({ id, type: 'done', res: lib.searchSheet(img, jobs) });
  } catch (err) {
    self.postMessage({ id, type: 'error', message: String(err?.message || err) });
  }
};
