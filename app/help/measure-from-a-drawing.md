---
title: Measure from a drawing
summary: Take lengths and areas from the drawing's own lines, arcs, polylines and hatches by picking them, with exact arcs and holes, instead of tracing by clicks.
section: tasks
order: 33
keywords: measure drawing, geometry, polyline, arc, circle, hatch, bulge, exact length, exact area, pick, window, trace, from cad, linear, area
---

{{ui:Measure drawing}} on the sheet bar of a DWG or DXF sheet takes the drawing's own objects as marks, so you do not trace them by clicks. A polyline's length, an arc's length, a circle's area and a hatch's area with its holes come out exact, from the arithmetic the takeoff uses for every mark.

## Take objects as a linear or area item

1. Make or click a **linear** or an **area** item under {{ui:Items}}. The sheet needs a scale.
2. Choose {{ui:Measure drawing}}.
3. Click the objects on the sheet to pick them, or drag a window round them: everything entirely inside it is picked. {{key:Shift}} adds a window to what is picked; click a picked object again to drop it. The bar shows the total: "6 runs: 108'-9 1/8" in all."
4. Choose the add button, which names the number and the item, such as {{ui:Add 6 to Edge}} (or press {{key:Enter}}). Each object becomes one mark of the item, in one undo step. {{key:Esc}} clears what you picked.

## What each kind of item takes

- A **linear** item takes lines, arcs, polylines, circles and splines by length. A closed shape counts by its perimeter. A hatch is left out: it has an area, not a length, and the bar says so.
- An **area** item takes closed shapes: closed polylines, circles, 2D solids, and hatches with their holes. Open runs are left out, and the bar says so.

## Exact, and nearly exact

Lines, arcs (any bulge), polylines with bulges and circles are exact: lengths and areas use the arc's radius and sweep, not a picture of it. Ellipses, splines and hatches whose boundary is made of edges are measured in chords of one degree or finer, which is within a hundredth of a percent for ellipses and a tenth for the rest; the bar says how many of what you picked are curves of this kind.

## What it takes from where

- **Model**: objects in model space. **A layout**: its own lines, and the model objects inside a viewport, scaled through it. An object that crosses a viewport's edge is not offered (it plots clipped); an object two viewports both show is taken once.
- Only layers the sheet shows. Blocks are counted, not measured: see [Count from a drawing](topic:count-from-a-drawing). 3D polylines, meshes, solids and regions are not offered.
