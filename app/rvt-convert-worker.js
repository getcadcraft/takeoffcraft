/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rvt-convert-worker.js — runs the RVT preview conversion off the page (0.5 SG.8 b, lab only; see rvt-convert.js).
 * The page sends { libUrl, convertUrl, bytes } (the vendor's rvt.js and rvt-convert.js as the page resolved them, so the
 * build's version-busted and offline copies are used: workers do not see the page's import map) and gets { phase }
 * messages, then { ifc, summary } (the IFC bytes transferred) or { error }. One file per worker: the page ends it after.
 */
self.onmessage = async (e) => {
  const { libUrl, convertUrl, bytes } = e.data;
  try {
    self.postMessage({ phase: 'loading' });
    const { convertInProcess } = await import(convertUrl);
    const lib = await import(libUrl);
    await lib.default();   // loads rvt_bg.wasm from beside rvt.js (same origin; the wasm itself has no network calls)
    self.postMessage({ phase: 'converting' });
    const { ifc, summary } = convertInProcess(lib, bytes);
    self.postMessage({ ifc, summary }, [ifc.buffer]);
  } catch (err) {
    self.postMessage({ error: String(err && err.message || err) });   // i18n-ignore: a decoder failure, shown inside a translated sentence
  }
};
