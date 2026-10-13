---
title: Compare a revised sheet and move the takeoff
summary: Lay the old sheet over its revision, line them up, see what changed, and move the takeoff onto the new sheet with the marks to check flagged.
section: tasks
order: 115
keywords: revision, revised, compare, overlay, old, new, changes, addendum, bulletin, reissue, move takeoff, transfer, carry over, align, flagged, check
---

When a sheet is reissued, you do not have to take it off again. Open the old PDF and the new one, compare the two sheets, and move the takeoff across. TakeoffCraft flags every mark where the drawing changed, so you check those and keep the rest.

## Compare

1. Open both PDFs: the old set and the revised one ({{ui:Open PDFs}}; they can be in one file or several).
2. Show the **new** sheet.
3. Choose {{ui:Compare}} on the sheet bar under the drawing.
4. Pick the old sheet in the list. TakeoffCraft suggests the sheet with the same number in the other PDF, or the same page. Choose **Compare**.

The old drawing now lies over the new one in red. Where the two agree, the red lines sit on the black ones; where they differ, you see red lines alone (removed) and black lines alone (added). A bar at the bottom of the sheet holds the steps below; {{key:Esc}} or {{ui:Close}} ends comparing.

## Line them up

Reissued sheets are often plotted a little off: moved on the page, or at a slightly different size. If the red drawing does not sit on the black one, choose **Align by two points** and click four times:

1. a point on the old (red) drawing, such as a column center or a building corner,
2. the same point on the new (black) drawing,
3. a second point on the red drawing, far from the first,
4. the same point on the black drawing.

The red drawing moves, turns and scales onto the black one. The status bar says how much bigger the new drawing is ("size × 1.000" when it is the same). Zoom in for the picks: the closer you click, the better the fit.

## Find what changed

Choose **Find changes**. TakeoffCraft compares the two drawings' ink: ink only on the old sheet turns red, ink only on the new sheet turns blue, and the status bar counts them. Lines that moved by a hair (a re-plot) are not counted as changes.

It also looks at every mark on the old sheet and counts the ones that sit where the drawing changed:

- a run or an area when the drawing changed at one of its ends or corners, or along at least about a sixth of its length;
- a count when anything changed right next to it.

## Move the takeoff

Choose **Move takeoff here**. Every mark on the old sheet moves to the new one, through the alignment, in one undo step. The ones next to a change are flagged: they are drawn with an orange halo, and the sheet bar shows "(n) to check".

If the new sheet had no scale, it takes the old sheet's scale (adjusted when the drawings had to be scaled to line up). If it already had a different scale, TakeoffCraft asks first: moved marks are measured at the new sheet's scale.

## Check the flagged marks

1. Choose "(n) to check" on the sheet bar. It zooms to the next flagged mark and selects it; its panel says why it is flagged.
2. Fix the mark if the drawing changed under it (drag its corners, add or delete marks, or take it off again).
3. Choose **Checked** in its panel. The flag goes, and the count on the sheet bar drops.

The flags are saved with the takeoff, so you can check them later.

:::note
Comparing works on vector PDFs and on scans alike, because it compares what is drawn. A scan that is skewed or stretched may line up only roughly with two points; check more marks by eye then.
:::
