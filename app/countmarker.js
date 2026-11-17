/* SPDX-License-Identifier: Apache-2.0 */
/**
 * countmarker.js — one size rule for count markers (the dots), on screen and in the marked PDF (0.9.1, suggestion 1494).
 * DOM-free: takeoffcraft.js (the screen), pdfmarks.js (the PDF) and the Node tests import it.
 *
 * What was wrong: the screen drew a count as a dot of 6 CSS px radius at every zoom, while the PDF drew it at
 * 3.5 × max(0.75, shorter page side / 600) points — a share of the PAGE. On a Letter page that is 3.6 pt, on a 24" × 36" sheet
 * 10.1 pt (a dot 0.28" across on paper), so counts that sat apart on screen ran into each other in the export.
 *
 * The rule now:
 *   - The setting is the dot's radius on screen in CSS px (Settings › TakeoffCraft › Count marker size): extra small 3,
 *     small 4.5, medium 6 (the default: what the screen always drew), large 8. The screen keeps that size at every zoom.
 *   - The PDF draws the same dot at that size on paper: 1 CSS px = 1/96 inch = 0.75 pt, so radius = px × 0.75 pt
 *     (medium: 4.5 pt), divided by the page's /UserUnit. A viewer showing the PDF at 100% therefore shows the dot exactly as big
 *     as the screen does, whatever the sheet size. The white outline is a quarter of the radius in both places.
 *   - Dense counts: when the dots on one page would still touch (centres closer than two radii), every dot on that page
 *     shrinks to 0.45 × the 10th-percentile nearest-neighbour distance, never below a third of the set size.
 */

export const MARKER_SIZES = { xsmall: 3, small: 4.5, medium: 6, large: 8 };
export const MARKER_DEFAULT = 'medium';
/** CSS reference pixel in PDF points (1/96 in ÷ 1/72 in). */
export const PT_PER_PX = 0.75;
/** The white outline, as a share of the radius (the screen's 1.5 px on a 6 px dot). */
export const OUTLINE = 0.25;
/** A selected dot on screen (7.5 px on a 6 px dot). */
export const SELECTED = 1.25;

export const markerKey = (k) => (Object.prototype.hasOwnProperty.call(MARKER_SIZES, k) ? k : MARKER_DEFAULT);
/** Radius on screen, CSS px. */
export const markerPx = (k) => MARKER_SIZES[markerKey(k)];
/** Radius in the PDF, in the page's user units (points ÷ /UserUnit), before the dense-page limit. */
export const markerPdfRadius = (k, userUnit = 1) => (markerPx(k) * PT_PER_PX) / (userUnit > 0 ? userUnit : 1);

/**
 * The 10th-percentile nearest-neighbour distance of a page's count centres (same units as the points); Infinity with fewer
 * than two distinct spots. Dots stacked on the very same spot (closer than `same`) are one spot.
 */
export function crowding(pts, same = 0.01) {
  const p = pts.map((q) => ({ x: q.x, y: q.y })).sort((a, b) => a.x - b.x || a.y - b.y);
  const n = p.length;
  if (n < 2) return Infinity;
  const near = new Float64Array(n).fill(Infinity);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx = p[j].x - p[i].x;
      if (dx >= near[i]) break;                       // sorted by x: nothing further right can be nearer
      const d = Math.hypot(dx, p[j].y - p[i].y);
      if (d < same) continue;
      if (d < near[i]) near[i] = d;
      if (d < near[j]) near[j] = d;
    }
  }
  const d = [...near].filter(Number.isFinite).sort((a, b) => a - b);
  return d.length ? d[Math.floor((d.length - 1) * 0.1)] : Infinity;
}

/** The radius every count dot on one PDF page gets: the set size, less when the page's dots would touch. */
export function pageMarkerRadius(k, pts, userUnit = 1) {
  const r = markerPdfRadius(k, userUnit);
  const d = crowding(pts, r / 100);
  return d >= 2 * r ? r : Math.max(r / 3, 0.45 * d);
}
