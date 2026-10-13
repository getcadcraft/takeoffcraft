---
title: TakeoffCraft settings
summary: Show inches to 1/16, 1/8 or 1/4, start new items with a waste percentage, choose where the Auto count slider starts, snap to the drawing's lines or to 45° without holding Shift, set how wide a door Room fill closes, and pick the 3D view's corner indicator.
section: reference
order: 5
keywords: settings, preferences, options, precision, fractions, inches, rounding, waste, default waste, auto count, threshold, match, slider, snap, 45, angle, shift, view cube, axis icon, corner indicator, 3d
---

Open {{ui:Settings}} with the gear in the app bar or {{key:Mod+,}}. The first tab, {{ui:TakeoffCraft}}, holds the settings that belong to this app; {{ui:General}} holds the ones every CadCraft app shares (theme, panels, toolbar). TakeoffCraft's settings exist only in the app: you change them here, and this browser remembers them. {{ui:Reset TakeoffCraft settings}} puts them back to the start.

## Feet and inches

Show lengths to the nearest **1/16"** (the start), **1/8"** or **1/4"**. This changes how lengths read on the sheet, in the panels, in the quantities and in the status bar.

Only the display is rounded. Quantities, costs and the exports are worked out from the exact lengths, and the exports always show 1/16".

## Waste to start with

The waste percentage every new item starts with: 0% (the start), 2%, 3%, 5%, 7.5%, 10%, 15% or 20%. You can still type another waste for each item, in the item editor or straight in the quantities table. Items you already have keep their own waste.

## Auto count: where the match slider starts

Where the {{ui:Match}} slider sits when an [Auto count](topic:auto-count) search finishes, from 50% to 95%; 75% is the start. Lower offers more look-alikes for you to reject; higher offers fewer. You can still move the slider during each review.

## Snap to the drawing's own lines

On at the start. While you measure or calibrate, a point near a line of the PDF jumps to its end, its midpoint, a crossing or the nearest point on it. {{key:F3}} and {{ui:Snap}} in the status bar turn it on and off too. More: [Snap to the drawing's lines](topic:snap-to-the-drawing).

## Room fill: how wide an opening it closes

{{ui:Room fill closes openings up to}} sets how wide a door opening or gap the {{ui:Room}} tool treats as closed: 3'-0" to 8'-0", 4'-0" at the start. Wider than your widest door lets a room run into the next one; narrower than a door leaves the room open. See [Fill a room with one click](topic:measure-areas#fill-a-room-with-one-click).

## Snap to 45° without holding Shift

Off at the start. When it is on, runs, outlines, cut-outs and dragged corners go at 0°, 45°, 90° or 135° from the last point without holding {{key:Shift}}; hold {{key:Shift}} to click at any angle. The status bar then reads "Snaps to 45°; Shift frees the angle". The point you click on an arc's curve and circles are never snapped; an arc's end is.

## Corner indicator

For the [3D check view](topic:check-in-3d) only: {{ui:View cube}} (the start: a cube at the top right to click, drag and turn), {{ui:Axis icon}} (a small X, Y, Z marker at the bottom right) or {{ui:None}}. It changes at once and is kept in this browser. The flat sheet never shows one.
