---
title: Measure linear runs
summary: Take off walls, piping, trim and other lengths as runs, with straight segments, arcs and the Shift 45-degree snap.
section: tasks
order: 40
keywords: linear, length, run, polyline, walls, lf, linear feet, arc, curve, 45 degrees, ortho, snap, segments, polylength, deduct, opening, door, gap, type, typed, coordinates, distance, direct distance, polar
---

A linear item measures length. Each run is a chain of points: straight segments, and arcs where you turn arc mode on. An item can have any number of runs on any number of sheets.

Before you start: the sheet needs a scale ([Set the scale](topic:set-the-scale)) and you need a linear item ([Create takeoff items](topic:create-items)).

On a vector PDF, your clicks snap onto the drawing's own lines: ends, midpoints and crossings ([Snap to the drawing's lines](topic:snap-to-the-drawing); {{key:F3}} turns it off).

## Draw a run

1. Click the linear item under {{ui:Items}}.
2. Choose {{ui:Linear}} in the toolbar, or press {{key:L}}.
3. Click the start of the run.
4. Click each corner along it.
   The status bar shows "Length" (the run so far, to the pointer) and "segment" (the segment you are drawing), in feet and inches.
5. Finish the run: double-click the last point, press {{key:Enter}}, or right-click.
   The run is drawn in the item's color and becomes the selected mark. The item's length in the {{ui:Items}} list and the {{ui:Quantities}} table goes up.

The tool stays on {{ui:Linear}}, so you can start the next run straight away. Press {{key:Esc}} to go back to {{ui:Select}}.

While drawing:

- {{key:Backspace}} (or {{key:Delete}}) removes the last point.
- {{key:Esc}} throws the unfinished run away.
- Dragging pans the sheet and the wheel zooms, without adding points.

:::mac
On a Mac trackpad, right-click is a two-finger click (turn on secondary click in System Settings, under Trackpad). TakeoffCraft reads only the secondary button, so a Control-click may be taken as a plain click and add a point. Double-click or {{key:Enter}} always finish.
:::

:::touch
On a touch screen, tap to place points, drag one finger to pan and pinch with two to zoom. Finish with a long press, a double tap, or {{ui:Finish}} in the bar under the sheet ({{ui:Back}} takes the last point back). See [Troubleshooting](topic:troubleshooting#touch-screens).
:::

## Straight lines at 45° steps

Hold {{key:Shift}} while you place a point. The segment from the last point snaps to the nearest 0°, 45°, 90° or 135° direction, keeping the length you dragged along it. The status bar reminds you: "Shift snaps to 45°".

In arc mode it applies to where an arc ends: the arc's chord goes at 45° steps from where it starts. The point you click on the curve is never snapped.

## Arcs and curved walls

1. While drawing a run, place the point where the curve starts.
2. Turn on arc mode: choose {{ui:Arc}} in the toolbar or press {{key:R}}. The button stays pressed.
3. Click any point on the curve, somewhere along the middle of it.
   The status bar adds "(arc: click where it ends)" and the preview bends through your point.
4. Click where the curve ends.
   The arc is added. Its length is the exact arc length, not a string of short chords.
5. Click another point on the next curve and its end to keep drawing arcs, or press {{key:R}} again to go back to straight segments.

{{key:Backspace}} or {{key:Esc}} first drop the pending point on the curve; press again to remove points as usual.

## Type lengths and coordinates

After the first point, you can type where the next one goes instead of clicking. Type a digit, `@` or `#`: a {{ui:Type}} box opens in the status bar with what you typed. Press {{key:Enter}} to place the point; the box stays open for the next one.

| Type | The next point goes |
|---|---|
| `12'6"` | 12'-6" from the last point, toward the pointer (point the way, then type the length) |
| `12'6"<45` | 12'-6" at 45°, counted counter-clockwise from the screen's right (`<90` is up, `<-90` down) |
| `@6',-4'` | 6' right and 4' down from the last point |
| `6',4'` (or `#6',4'`) | 6' right and 4' up from the first point of this run |

Lengths are typed as everywhere in TakeoffCraft ([Entry formats](topic:entry-formats)): `12'-6 1/2"`, `12.5` (feet), `30"`, `3.2 m`. "Right" and "up" are as you see the sheet, also when the PDF page is turned.

{{key:Enter}} on an empty box finishes the run, like {{key:Enter}} on the sheet; {{key:Esc}} closes the box and keeps the run going. Typed points go through the same rules as clicks: deducts, arcs and closing an area all work. The same box works in {{ui:Area}} and {{ui:Cut-out}}; after a circle's center it takes the radius.

## Deduct a part of a run

A wall run that passes a door or a storefront can be drawn straight through and still count only the wall: the segments across the opening are **deducts**. They are drawn dashed and thin, and not counted.

While drawing:

1. Place the point where the opening starts.
2. Choose {{ui:Deduct}} in the toolbar or press {{key:E}}. The button stays pressed and the status bar says the next segments are deducts.
3. Click where the opening ends. The segment is drawn dashed; "Length" in the status bar leaves it out.
4. Press {{key:E}} again and carry on along the wall.

After drawing: select the run. Under **Selected mark**, each segment has a {{ui:Deduct}} box: tick it to deduct that segment, untick it to count it again. Each change is one undo step.

A run always keeps at least one segment that counts. The panel then shows **Deducts** (the deducted length) and **Drawn** (the whole run); **Length**, the item's quantity, the wall area and the costs all use the length without the deducts. The 3D check view leaves a gap in the wall, the marked PDF draws the deducts dashed, and the exported **Marks** sheet lists them.

Moving a corner keeps the deducts. Adding or removing points (by drawing the run again) starts without them.

## Look at a run's details

Choose {{ui:Select}} ({{key:V}}) and click the run. **Selected mark** on the right shows:

- the item it belongs to (pick another linear item in the list to move the run there),
- the sheet,
- **Length** in feet and inches and in LF,
- the number of **Segments**, and the **Wall area** when the item has a height,
- each segment's length, with "(arc)" after arcs, and its {{ui:Deduct}} box.

On the sheet, each segment of the selected run is labeled with its length.

## Fix a run

- **Move a point**: select the run, then drag one of its square corner handles. Hold {{key:Shift}} to snap the moved segment to 45° steps. An arc keeps its bulge.
- **Bend an arc**: a selected run shows a round handle in the middle of each arc. Drag it: the arc passes through where you let go, so it bows more, less, or the other way. Dragged onto the straight line between its ends, it becomes a straight segment. {{key:Mod+Z}} undoes it ("Bend arc").
- **Delete a run**: select it and press {{key:Delete}}, choose {{ui:Delete}} in the toolbar's {{ui:More}} menu, or {{ui:Delete mark}} in the panel.
- **Undo**: {{key:Mod+Z}}; redo with {{key:Mod+Y}}.

You cannot insert a point in the middle of a run yet. Delete the run and draw it again.

## Wall area

Give the linear item a {{ui:Height}} (for example `9'-0"`). It then reports **Wall area (A)** = length × height, in SF (or m² for a metric item), and the wall area goes into the notes column of the spreadsheet export. Use it in assemblies for board, paint or insulation: see [Assemblies and formulas](topic:assemblies).
