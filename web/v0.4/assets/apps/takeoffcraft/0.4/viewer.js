/* SPDX-License-Identifier: Apache-2.0 */
/**
 * viewer.js — one PDF page on screen: pan/zoom, pdf.js rendering, and an overlay canvas the
 * app draws its marks on in PDF user space.
 *
 * Screen = zoom × display(p) + offset, where display() is the page's own viewport transform at
 * scale 1 (user space → top-left origin, /Rotate applied). Only the visible part of the page
 * is rendered, at zoom × devicePixelRatio, so a 36" × 48" sheet at 800% never asks for a
 * canvas larger than the window. While the view moves, the last render is stretched into
 * place at once; a fresh render follows when the view settles (stale render tasks are
 * cancelled). A low-resolution render of the whole page fills in around it while panning.
 */

import { apply, invert, multiply } from './geom.js';

export class PageView {
  constructor(base, over, { onOverlay, onView, onRendered } = {}) {
    this.base = base; this.over = over;
    this.onOverlay = onOverlay || (() => {}); this.onView = onView || (() => {}); this.onRendered = onRendered || (() => {});
    this.page = null; this.info = null;
    this.z = 1; this.ox = 0; this.oy = 0;
    this.w = 0; this.h = 0; this.dpr = 1;
    this.full = null;     // { canvas, z, ox, oy } — last sharp render
    this.whole = null;    // { canvas, s } — whole page at low resolution
    this.task = null; this.timer = 0; this.frameReq = 0; this.renders = 0; this.gen = 0;
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(base.parentElement);
    this.resize();
  }

  resize() {
    const r = this.base.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
    if (w === this.w && h === this.h && dpr === this.dpr) return;
    const first = !this.w;
    this.w = w; this.h = h; this.dpr = dpr;
    for (const c of [this.base, this.over]) { c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); }
    if (this.page && first) this.fit('page');
    this.invalidate(true);
  }

  /** Show a page (pdf.js PDFPageProxy + pdfset page info). Keeps the view if `view` is given. */
  setPage(page, info, view = null) {
    this.task?.cancel(); this.task = null;
    this.page = page; this.info = info;
    this.T = info.transform;                     // user → display (scale 1)
    this.full = null; this.whole = null;
    this.gen++;
    if (view) { this.z = view.z; this.ox = view.ox; this.oy = view.oy; this.invalidate(true); }
    else this.fit('page');
    this.renderWhole();
  }
  clear() { this.task?.cancel(); this.page = null; this.info = null; this.full = null; this.whole = null; this.invalidate(); }
  get view() { return { z: this.z, ox: this.ox, oy: this.oy }; }

  // ---- coordinates ----
  get matrix() { return multiply([this.z, 0, 0, this.z, this.ox, this.oy], this.T); }   // user → screen (CSS px)
  toScreen(p) { return apply(this.matrix, p); }
  toUser(s) { return apply(invert(this.matrix), s); }
  /** Screen pixels per user unit (rotation-free). */
  get pxPerUnit() { return this.z; }

  // ---- view changes ----
  fit(mode = 'page') {
    if (!this.info) return;
    const pad = 16, W = this.info.width, H = this.info.height;
    const zw = (this.w - pad * 2) / W, zh = (this.h - pad * 2) / H;
    this.z = mode === 'width' ? zw : Math.min(zw, zh);
    this.ox = (this.w - W * this.z) / 2;
    this.oy = mode === 'width' ? pad : (this.h - H * this.z) / 2;
    this.invalidate(true);
  }
  /** Fit a rectangle given in user space. */
  zoomTo(r, pad = 24) {
    const pts = [{ x: r.minX, y: r.minY }, { x: r.maxX, y: r.maxY }, { x: r.minX, y: r.maxY }, { x: r.maxX, y: r.minY }].map((p) => apply(this.T, p));
    const minX = Math.min(...pts.map((p) => p.x)), maxX = Math.max(...pts.map((p) => p.x)), minY = Math.min(...pts.map((p) => p.y)), maxY = Math.max(...pts.map((p) => p.y));
    this.z = clampZ(Math.min((this.w - pad * 2) / Math.max(maxX - minX, 1e-6), (this.h - pad * 2) / Math.max(maxY - minY, 1e-6)));
    this.ox = this.w / 2 - this.z * (minX + maxX) / 2;
    this.oy = this.h / 2 - this.z * (minY + maxY) / 2;
    this.invalidate(true);
  }
  zoomAt(sx, sy, factor) {
    const z = clampZ(this.z * factor);
    const k = z / this.z;
    this.ox = sx - (sx - this.ox) * k; this.oy = sy - (sy - this.oy) * k; this.z = z;
    this.invalidate(true);
  }
  panBy(dx, dy) { this.ox += dx; this.oy += dy; this.invalidate(true); }

  // ---- drawing ----
  /** Redraw now (cheap: stretched bitmaps + overlay); with `viewChanged`, schedule a sharp render. */
  invalidate(viewChanged = false) {
    if (viewChanged) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.renderSharp(), 140);
      this.onView(this.view);
    }
    if (this.frameReq) return;
    this.frameReq = requestAnimationFrame(() => { this.frameReq = 0; this.paint(); });
  }
  overlayOnly() {
    if (this.frameReq) return;
    this.frameReq = requestAnimationFrame(() => { this.frameReq = 0; this.paintOverlay(); });
  }

  paint() { this.paintBase(); this.paintOverlay(); }

  paintBase() {
    const ctx = this.base.getContext('2d');
    const d = this.dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.base.width, this.base.height);
    if (!this.info) return;
    // the paper
    ctx.setTransform(d, 0, 0, d, 0, 0);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(this.ox, this.oy, this.info.width * this.z, this.info.height * this.z);
    ctx.imageSmoothingEnabled = true;
    if (this.whole) {
      const k = this.z / this.whole.s;
      ctx.drawImage(this.whole.canvas, this.ox, this.oy, this.whole.canvas.width * k, this.whole.canvas.height * k);
    }
    if (this.full) {
      const f = this.full, k = this.z / f.z;
      // f.canvas shows display coords at zoom f.z with origin f.ox/f.oy (CSS px), in device pixels
      ctx.drawImage(f.canvas, this.ox + (0 - f.ox) * k, this.oy + (0 - f.oy) * k, (f.canvas.width / d) * k, (f.canvas.height / d) * k);
    }
  }

  paintOverlay() {
    const ctx = this.over.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.over.width, this.over.height);
    if (!this.info) return;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.onOverlay(ctx, this);
  }

  /** Render the visible part of the page sharp. */
  async renderSharp() {
    if (!this.page) return;
    this.task?.cancel();
    const d = this.dpr, gen = this.gen;
    const view = { z: this.z, ox: this.ox, oy: this.oy };
    // only the part of the window the page covers
    const x0 = Math.max(0, Math.floor(view.ox)), y0 = Math.max(0, Math.floor(view.oy));
    const x1 = Math.min(this.w, Math.ceil(view.ox + this.info.width * view.z)), y1 = Math.min(this.h, Math.ceil(view.oy + this.info.height * view.z));
    if (x1 <= x0 || y1 <= y0) return;
    const c = document.createElement('canvas');
    c.width = Math.round((x1 - x0) * d); c.height = Math.round((y1 - y0) * d);
    const vp = this.page.getViewport({ scale: view.z * d, rotation: this.info.rotate });
    const task = this.page.render({ canvas: c, viewport: vp, transform: [1, 0, 0, 1, (view.ox - x0) * d, (view.oy - y0) * d], background: '#ffffff' });
    this.task = task;
    try { await task.promise; } catch (err) { if (err?.name !== 'RenderingCancelledException') console.warn(err); return; }
    if (this.task === task) this.task = null;
    if (gen !== this.gen) return;
    // keep the bitmap with the origin it was drawn for (its own top-left = screen x0, y0)
    this.full = { canvas: c, z: view.z, ox: view.ox - x0, oy: view.oy - y0 };
    // paintBase places it: screen = ox + (0 - f.ox)·k for the canvas's left edge
    this.renders++;
    this.invalidate();
    this.onRendered(this.renders);
  }

  /** The whole page at about 1.5 screen pixels per point at most (fills in while panning). */
  async renderWhole() {
    const page = this.page, gen = this.gen;
    const s = Math.min(1.5, 2400 / Math.max(this.info.width, this.info.height)) * Math.min(this.dpr, 2);
    const c = document.createElement('canvas');
    c.width = Math.ceil(this.info.width * s); c.height = Math.ceil(this.info.height * s);
    const vp = page.getViewport({ scale: s, rotation: this.info.rotate });
    try { await page.render({ canvas: c, viewport: vp, background: '#ffffff' }).promise; } catch { return; }
    if (gen !== this.gen) return;
    this.whole = { canvas: c, s };
    this.invalidate();
  }

  destroy() { this.ro.disconnect(); this.task?.cancel(); }
}

const clampZ = (z) => Math.min(64, Math.max(0.02, z));

/** A thumbnail of a page into a canvas, `w` CSS pixels wide. */
export async function renderThumb(page, info, canvas, w) {
  const d = Math.min(window.devicePixelRatio || 1, 2);
  const s = (w / info.width) * d;
  canvas.width = Math.ceil(info.width * s); canvas.height = Math.ceil(info.height * s);
  const vp = page.getViewport({ scale: s, rotation: info.rotate });
  await page.render({ canvas, viewport: vp, background: '#ffffff' }).promise;
}
