---
title: Check the takeoff in 3D
summary: See the open sheet's walls, slabs and counts standing on the drawing, orbit round them, and click one to select its mark.
section: tasks
order: 95
keywords: png, image, picture, screenshot, stack, floors, levels, elevation, glb, gltf, export 3d, wall thickness, base height, opening, door head, 3d, three d, check, view, walls, wall height, slab, depth, volume, orbit, model, picking, isometric, perspective
---

The 3D view is a check, not a second drawing: it stands the takeoff of the sheet on screen up on the sheet itself, so a missing wall, a doubled slab or a stray count shows at a glance.

Before you start: the sheet needs a scale ([Set the scale](topic:set-the-scale)). Heights and depths need real feet, so on a sheet with no scale {{ui:3D}} says so and stays on the flat sheet.

## Open the 3D view

1. Show the sheet you want to check.
2. Choose {{ui:3D}} on the bar that shows the sheet's name and scale, or press {{key:3}}.
   The first time, the 3D view takes a moment to load. The sheet is drawn on the ground, and the takeoff stands on it in each item's color.
3. To go back, choose {{ui:3D}} again, {{ui:Back to the sheet}}, or press {{key:3}}. Choosing a drawing tool (Linear, Area, Count and so on) also goes back, since marks are drawn on the flat sheet.

It shows the sheet on screen; change sheets in the sheets list, or with {{key:PageDown}} and {{key:PageUp}}, and the 3D view follows. To see several floors at once, stack them (below).

## What you see

| Mark | In 3D |
|---|---|
| Linear run, item with a height | A wall of that height along the run. Curved runs follow the curve. |
| Linear run, item with no height | A line on the sheet. Give the item a height under **Item** to stand it up. |
| Area, item with a depth | A slab of that depth, with its cut-outs open. |
| Area, item with no depth | A thin 2" plate, so it still shows. |
| Count | A small post on each counted point. |

The height is a linear item's {{ui:Height}} field and the depth an area item's {{ui:Depth}} field, under **Item** (see [Create takeoff items](topic:create-items)). Change it, and the 3D view updates at once. The note under the sheet name says what the sheet holds, for example "This sheet in 3D: 2 walls, 1 slab, 3 counts", and how many runs or areas have no height or depth. Clicks pass through it to the view.

The numbers do not change in 3D: a wall's area is its exact length times its height, and a slab's volume is its net area (outline minus cut-outs, curves exact) times its depth. Curves are drawn as short straight pieces only on screen.

## Look around

| Action | What it does |
|---|---|
| Drag, or drag with the middle button | Orbit round the takeoff. |
| {{key:Shift}} + drag, or drag with the right button | Pan. |
| Mouse wheel | Zoom in and out at the pointer. |
| Two-finger swipe on a trackpad | Orbit ({{key:Shift}} pans). A pinch zooms. |
| {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}, {{ui:Bottom}} | Standard views, framed on the takeoff. The 3D view opens in {{ui:Iso}}. |
| {{ui:Perspective}} | Perspective on or off (parallel when off). |
| {{ui:Zoom extents}} or {{key:F}} | The whole sheet. |
| {{ui:Sheet}} | Show or hide the drawing on the ground. |
| The view cube, top right | Click a face, edge or corner to look from there; drag it to orbit; drag its compass ring to turn; the house button goes back to {{ui:Iso}}. |

The corner shows a view cube, a small X, Y, Z axis icon, or nothing: choose in {{ui:Settings}}, on the TakeoffCraft tab, under **Corner indicator** ([TakeoffCraft settings](topic:settings)). The flat sheet has no corner indicator.

:::touch
One finger orbits; two fingers pinch to zoom and move to pan. A tap selects.
:::

## Walls with a thickness, a base and openings

A linear item with a height stands as a thin strip. To see it as a real wall, give the item its shape under **In 3D** in its settings:

- **Wall thickness** (8", 0.2 m): the wall becomes a solid, centred on the line you drew, with mitred corners.
- **Base height**: the wall starts that far above the floor (a soffit, an upper cabinet run). Area items have it too: a ceiling at 9'-0".
- **Opening head**: a deducted segment (a door, [Deduct a part of a run](topic:measure-linear#deduct-a-part-of-a-run)) keeps the wall above that height, so a door shows as a door. Without it, a deducted segment leaves a gap to the top.

These only shape the 3D view: the quantities (length, wall area, costs) stay as they were.

## Stack the floors

1. Open the PDFs of every floor.
2. In the 3D view, choose {{ui:Levels…}} and type each floor's elevation, such as `0` for the ground floor and `12'` for the next. Blank leaves a sheet out.
3. Choose {{ui:Stack}}. Every sheet with a level shows its takeoff at its height; the sheet on screen lies under its own floor, the others are outlined. The note says how many floors are stacked.

Sheets line up by their place on the page, so this works for floor plans plotted alike (the same sheet size and position). A sheet with a level but no scale is left out, and the note says so. Choose {{ui:Stack}} again for one sheet at a time. The levels are saved with the takeoff.

## Save the 3D view as an image

Choose {{ui:PNG}} on the 3D bar for a picture of the view as it is on screen (`… 3D.png`); {{key:Shift}} + click {{ui:PNG}} makes it twice the size (`… 3D@2x.png`), for print.

## Save the 3D view as a model

Choose {{ui:GLB}} on the 3D bar. You get a `.glb` file (glTF, binary) of what the view shows — the floor on screen, or every stacked floor — that other 3D programs open: one object per mark, named after its item, in the item's colour, in metres with Y up. The sheet itself and the outlines are not in it.

## Select a mark from 3D

Click a wall, slab, plate or post. Its mark becomes the selected mark, exactly as if you had clicked it on the sheet: it shows under **Selected mark**, its item becomes current, and the status bar gives its length and height, or its area, depth and cubic yards. {{key:Shift}} + click adds marks to the selection or takes them out. {{key:Delete}} deletes the selected marks and {{key:Mod+Z}} brings them back; {{key:Esc}} selects none. Back on the sheet, the same marks stay selected.

:::tip
The drawing follows the theme: in Model, the sheet on the ground goes dark like the flat view.
:::
