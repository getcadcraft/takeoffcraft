/* SPDX-License-Identifier: Apache-2.0 */
/**
 * autocount-worker.js — runs the symbol search (match.js) off the page's thread, so the app stays
 * responsive. Messages in: { id, matchUrl, img: {data, w, h}, template: {data, w, h}, floor, rotations? }.
 * Out: { id, type: 'progress', f } … { id, type: 'done', cands } or { id, type: 'error', message }.
 * Cancel = the page terminates the worker. matchUrl is the page's cache-busted URL of match.js.
 */
let lib = null;
self.onmessage = async (e) => {
  const { id, matchUrl, img, template, floor, rotations } = e.data;
  try {
    lib ??= await import(matchUrl);
    let last = 0;
    const cands = lib.findSymbol(img, template, {
      floor,
      ...(rotations ? { rotations } : {}),
      progress: (f) => { const now = Date.now(); if (now - last > 80 || f === 1) { last = now; self.postMessage({ id, type: 'progress', f }); } },
    });
    self.postMessage({ id, type: 'done', cands });
  } catch (err) {
    self.postMessage({ id, type: 'error', message: String(err?.message || err) });
  }
};
