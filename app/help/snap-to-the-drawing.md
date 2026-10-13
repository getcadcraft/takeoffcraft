---
title: Snap to the drawing's lines
summary: Points jump onto the PDF's own linework while you measure or calibrate: ends, midpoints, crossings or anywhere on a line, with a marker that says which.
section: tasks
order: 35
keywords: snap, osnap, object snap, endpoint, midpoint, intersection, nearest, vector, linework, lines, precise, exact, f3, magnet, corner
---

Most plan sets are vector PDFs: their walls and edges are real lines, not pixels. While you measure, TakeoffCraft snaps your clicks onto those lines, so a run starts exactly at a wall's corner and a calibration reads the dimension the drafter drew, not the pixel you hit.

Snap is on when you start. Turn it off and on with {{ui:Snap}} in the status bar or {{key:F3}}; the setting is kept in this browser (it is also under [Settings](topic:settings)).

## What it snaps to

When the pointer comes within about 10 screen pixels of a line, a marker shows where the click will land, with its name:

| Marker | Name | Where |
|---|---|---|
| Square | **End** | The end of a line, or a corner where lines meet. A curve's two ends count; the points along it do not. |
| Triangle | **Midpoint** | The middle of a straight line. |
| Cross | **Intersection** | Where two lines cross, or where one ends on another. |
| Hourglass | **On the line** | The nearest point on a line, when no end, midpoint or crossing is close. |

The nearest end, midpoint or crossing wins. Only when none is close does the point go onto the line itself. Zoom in to choose between points that sit close together: the 10 pixels are screen pixels, so at a higher zoom they cover less of the sheet.

## Where it works

Snap works in {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}}, {{ui:Cut-out}}, {{ui:Calibrate}} and {{ui:Check}}, and when you drag a selected mark's corner. It also places arc points. {{ui:Count}}, {{ui:Auto count}} and pasting are not snapped.

A snapped point wins over the 45° snap of {{key:Shift}}: to draw at 45° away from the lines, turn Snap off with {{key:F3}} first.

:::tip
Calibrate with Snap on. Click near the two ends of a dimension line or a wall you know: both points land exactly on the drawing, and the scale comes out exact (the status bar then names the preset it matches).
:::

## Sheets it cannot snap on

- **Scanned sheets** are pictures with no lines to snap to. The status bar says "This sheet has no lines to snap to (a scanned page is a picture)." and points go where you click.
- **Very large drawings**: snapping reads up to 400,000 line segments per sheet. On a sheet with more, it says so and snaps to the first ones only.
- **Text** is not snapped to, unless the PDF draws its letters as lines (some plotters do).

The sheet's lines are read the first time you open it, in the background; a big sheet can take a second before the markers appear.
