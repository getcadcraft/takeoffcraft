/* SPDX-License-Identifier: Apache-2.0 */

import { t } from './i18n.js';
/**
 * match.js — symbol search for automatic counting. DOM-free (runs in a Web Worker in the browser
 * and in Node for the tests).
 *
 * Template matching by normalized cross-correlation (NCC) on grayscale "ink" rasters (0 = paper,
 * 1 = black) rendered at one fixed scale for the template and every sheet (the caller renders a sheet drawn at another
 * scale larger or smaller, so the symbol has the same size in pixels — T7). The template is tried at 0°, 90°, 180° and
 * 270° (exact), or at every `ANY_ANGLES` step when asked (rotated with bilinear sampling, paper outside — T7). Window sums come from integral images, so each position costs one
 * dot product; windows with almost no ink variation (blank paper) are skipped outright, which is
 * most of a drawing. Peaks are 3 × 3 local maxima above `floor`; the caller filters them by a
 * threshold and removes overlaps (`suppress`), so moving the threshold slider never re-runs the search.
 */

/** RGBA (canvas ImageData) → ink darkness 0..1. */
export function toInk(rgba, w, h) {
  const out = new Float32Array(w * h);
  for (let i = 0, j = 0; i < out.length; i++, j += 4) {
    const a = rgba[j + 3] / 255;
    const lum = (0.299 * rgba[j] + 0.587 * rgba[j + 1] + 0.114 * rgba[j + 2]) / 255;
    out[i] = 1 - (lum * a + (1 - a));       // transparent = paper
  }
  return out;
}

export function crop(img, x0, y0, cw, ch) {
  x0 = Math.max(0, Math.round(x0)); y0 = Math.max(0, Math.round(y0));
  cw = Math.min(img.w - x0, Math.round(cw)); ch = Math.min(img.h - y0, Math.round(ch));
  const data = new Float32Array(Math.max(0, cw) * Math.max(0, ch));
  for (let y = 0; y < ch; y++) data.set(img.data.subarray((y0 + y) * img.w + x0, (y0 + y) * img.w + x0 + cw), y * cw);
  return { data, w: Math.max(0, cw), h: Math.max(0, ch) };
}

/** Rotate a raster 90° clockwise (as seen on screen, y down). */
export function rot90(t) {
  const out = new Float32Array(t.data.length);
  for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) out[x * t.h + (t.h - 1 - y)] = t.data[y * t.w + x];
  return { data: out, w: t.h, h: t.w };
}

/**
 * Rotate a raster by `deg` clockwise (as seen on screen, y down) about its middle, into the box that holds it all;
 * bilinear, paper (0) outside. Right angles go through rot90 (exact).
 */
export function rotate(t, deg) {
  const r = ((deg % 360) + 360) % 360;
  if (r === 0) return t;
  if (r % 90 === 0) { let o = t; for (let k = 0; k < r / 90; k++) o = rot90(o); return o; }
  const a = r * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
  const w = Math.ceil(Math.abs(t.w * c) + Math.abs(t.h * s)), h = Math.ceil(Math.abs(t.w * s) + Math.abs(t.h * c));
  const out = new Float32Array(w * h);
  const cx0 = t.w / 2, cy0 = t.h / 2, cx1 = w / 2, cy1 = h / 2;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    // the destination pixel's middle, turned back into the source
    const dx = x + 0.5 - cx1, dy = y + 0.5 - cy1;
    const u = c * dx + s * dy + cx0 - 0.5, v = -s * dx + c * dy + cy0 - 0.5;
    const x0 = Math.floor(u), y0 = Math.floor(v), fx = u - x0, fy = v - y0;
    const at = (xx, yy) => (xx >= 0 && yy >= 0 && xx < t.w && yy < t.h ? t.data[yy * t.w + xx] : 0);
    out[y * w + x] = (at(x0, y0) * (1 - fx) + at(x0 + 1, y0) * fx) * (1 - fy) + (at(x0, y0 + 1) * (1 - fx) + at(x0 + 1, y0 + 1) * fx) * fy;
  }
  return { data: out, w, h };
}
/** Every 15°: a symbol at any angle is at most 7.5° from one of them. */
export const ANY_ANGLES = Array.from({ length: 24 }, (_, i) => i * 15);

/** A 3 × 3 binomial blur (twice = ~σ 1 px): makes the score forgiving of sub-pixel placement. */
export function blur(t, passes = 1) {
  let a = t.data;
  for (let k = 0; k < passes; k++) {
    const b = new Float32Array(a.length), c = new Float32Array(a.length);
    for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) {
      const i = y * t.w + x, l = x ? a[i - 1] : a[i], r = x < t.w - 1 ? a[i + 1] : a[i];
      b[i] = (l + 2 * a[i] + r) / 4;
    }
    for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) {
      const i = y * t.w + x, u = y ? b[i - t.w] : b[i], d = y < t.h - 1 ? b[i + t.w] : b[i];
      c[i] = (u + 2 * b[i] + d) / 4;
    }
    a = c;
  }
  return { ...t, data: a };
}

/** Trim blank paper around the template (keeps a 1 px margin) so the user's loose box doesn't matter. */
export function trim(t, ink = 0.08) {
  let x0 = t.w, y0 = t.h, x1 = -1, y1 = -1;
  for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) if (t.data[y * t.w + x] > ink) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  if (x1 < 0) return { ...t, ox: 0, oy: 0 };
  x0 = Math.max(0, x0 - 1); y0 = Math.max(0, y0 - 1); x1 = Math.min(t.w - 1, x1 + 1); y1 = Math.min(t.h - 1, y1 + 1);
  return { ...crop(t, x0, y0, x1 - x0 + 1, y1 - y0 + 1), ox: x0, oy: y0 };
}

function stats(t) {
  const n = t.data.length;
  let s = 0, s2 = 0;
  for (let i = 0; i < n; i++) { s += t.data[i]; s2 += t.data[i] * t.data[i]; }
  const mean = s / n, v = s2 / n - mean * mean;
  return { mean, std: Math.sqrt(Math.max(0, v)) };
}

/** Why a template can't be searched for, or null. */
export function templateProblem(tpl) {
  if (tpl.w < 4 || tpl.h < 4) return t('ac.err.small');
  if (stats(tpl).std < 0.03) return t('ac.err.empty');
  return null;
}

function integrals(img) {
  const W = img.w + 1;
  const s = new Float64Array(W * (img.h + 1)), s2 = new Float64Array(W * (img.h + 1));
  for (let y = 0; y < img.h; y++) {
    let r = 0, r2 = 0;
    for (let x = 0; x < img.w; x++) {
      const v = img.data[y * img.w + x];
      r += v; r2 += v * v;
      s[(y + 1) * W + x + 1] = s[y * W + x + 1] + r;
      s2[(y + 1) * W + x + 1] = s2[y * W + x + 1] + r2;
    }
  }
  return { s, s2, W };
}

/**
 * NCC of one template over the image → local peaks ≥ floor: [{ x, y, score }] (top-left, px).
 * `tick(rowsDone)` is called now and then; returning true from `stop()` aborts (returns null).
 */
export function nccPeaks(img, t, { floor = 0.5, minStd = 0.02, I = integrals(img), tick = null, stop = null } = {}) {
  const { mean: tm, std: ts } = stats(t);
  const n = t.w * t.h;
  const tz = new Float32Array(n);
  for (let i = 0; i < n; i++) tz[i] = t.data[i] - tm;
  const tnorm = ts * Math.sqrt(n);
  const W = img.w - t.w + 1, H = img.h - t.h + 1;
  if (W <= 0 || H <= 0) return [];
  const score = new Float32Array(W * H);
  const { s, s2, W: IW } = I;
  const d = img.data, iw = img.w;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const a = y * IW + x, b = a + t.w, c = (y + t.h) * IW + x, e = c + t.w;
      const sum = s[e] - s[b] - s[c] + s[a], sum2 = s2[e] - s2[b] - s2[c] + s2[a];
      const v = sum2 / n - (sum / n) * (sum / n);
      if (v < minStd * minStd) continue;                  // blank (or solid) paper: no match
      let dot = 0;
      for (let ty = 0, k = 0; ty < t.h; ty++) {
        const row = (y + ty) * iw + x;
        for (let tx = 0; tx < t.w; tx++, k++) dot += tz[k] * d[row + tx];
      }
      score[y * W + x] = dot / (tnorm * Math.sqrt(v * n));
    }
    if (tick && (y & 15) === 15) { if (stop?.()) return null; tick(y + 1, H); }
  }
  const peaks = [];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const v = score[y * W + x];
      if (v < floor) continue;
      let best = true;
      for (let dy = -1; dy <= 1 && best; dy++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const xx = x + dx, yy = y + dy;
        if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue;
        const u = score[yy * W + xx];
        if (u > v || (u === v && (dy < 0 || (dy === 0 && dx < 0)))) { best = false; break; }
      }
      if (best) {
        // the true peak usually sits between pixels: fit a parabola through the neighbours on each axis
        const at = (xx, yy) => (xx < 0 || yy < 0 || xx >= W || yy >= H ? v : score[yy * W + xx]);
        const fit = (a, c) => { const den = a - 2 * v + c; if (den >= 0) return [0, 0]; const d = Math.max(-0.5, Math.min(0.5, (a - c) / (2 * den))); return [d, -(a - c) * d / 4]; };
        const [dx, gx] = fit(at(x - 1, y), at(x + 1, y)), [dy, gy] = fit(at(x, y - 1), at(x, y + 1));
        peaks.push({ x, y, dx, dy, score: Math.min(1, v + Math.max(0, gx) + Math.max(0, gy)), raw: v });
      }
    }
  }
  return peaks;
}

/**
 * Search one image for a template at each of `rotations` (degrees clockwise; 0/90/180/270 by default, ANY_ANGLES for any
 * angle). → [{ x, y, w, h, rot, score }] in image px. progress(fraction) is called as it goes; stop() → true aborts (null).
 */
export function findSymbol(img0, template0, { rotations = [0, 90, 180, 270], floor = 0.5, smooth = BLUR, progress = null, stop = null } = {}) {
  const img = smooth ? blur(img0, smooth) : img0, template = smooth ? blur(template0, smooth) : template0;
  const I = integrals(img);
  const out = [];
  const list = [...new Set(rotations.map((r) => ((Math.round(r) % 360) + 360) % 360))];
  // any angle: a coarse pass at a lower floor, then each candidate's angle refined on a small window around it
  const fine = list.some((r) => r % 90 !== 0);
  const coarseFloor = fine ? Math.max(0.3, floor - 0.2) : floor;
  for (let i = 0; i < list.length; i++) {
    const r = list[i], tt = rotate(template, r);
    const peaks = nccPeaks(img, tt, { floor: coarseFloor, I, stop, tick: progress ? (done, total) => progress((i + done / total) / list.length * (fine ? 0.8 : 1)) : null });
    if (!peaks) return null;
    for (const p of peaks) out.push({ x: p.x, y: p.y, w: tt.w, h: tt.h, rot: r, score: p.score });
  }
  if (!fine) { progress?.(1); return out; }
  const best = suppress(out, coarseFloor, 0.25).slice(0, 400);
  const refined = [];
  for (let k = 0; k < best.length; k++) {
    if (stop?.()) return null;
    const r = refineAngle(img, template, best[k]);
    if (r.score >= floor) refined.push(r);
    progress?.(0.8 + 0.2 * (k + 1) / best.length);
  }
  progress?.(1);
  return refined;
}

/** Try angles within ±7.5° of a candidate's (1.5° steps) on a window around it; the best fit. */
export function refineAngle(img, template, c) {
  const cx = c.x + c.w / 2, cy = c.y + c.h / 2;
  let best = c;
  for (let d = -7.5; d <= 7.5 + 1e-9; d += 1.5) {
    const r = ((c.rot + d) % 360 + 360) % 360, tt = rotate(template, r);
    const pad = 3;
    const x0 = Math.max(0, Math.floor(cx - tt.w / 2) - pad), y0 = Math.max(0, Math.floor(cy - tt.h / 2) - pad);
    const win = crop(img, x0, y0, tt.w + 2 * pad, tt.h + 2 * pad);
    if (win.w < tt.w || win.h < tt.h) continue;
    for (const p of nccPeaks(win, tt, { floor: 0 }) || []) {
      if (p.score > best.score + 1e-9) best = { x: x0 + p.x, y: y0 + p.y, w: tt.w, h: tt.h, rot: r, score: p.score };
    }
  }
  return best;
}

export const BLUR = 0;

const iou = (a, b) => {
  const ix = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const iy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  const i = ix * iy;
  return i / (a.w * a.h + b.w * b.h - i);
};

/** Keep candidates ≥ threshold, best first, dropping any that overlaps a kept one by IoU > maxOverlap. */
export function suppress(cands, threshold, maxOverlap = 0.25) {
  const keep = [];
  for (const c of cands.filter((c) => c.score >= threshold).sort((a, b) => b.score - a.score)) {
    if (!keep.some((k) => k.sheet === c.sheet && iou(k, c) > maxOverlap)) keep.push(c);
  }
  return keep;
}

/** Working scale (px per PDF unit) that makes the template's longer side about `target` px. */
export function workScale(boxW, boxH, target = 40) {
  return Math.min(4, Math.max(0.2, target / Math.max(boxW, boxH)));
}
