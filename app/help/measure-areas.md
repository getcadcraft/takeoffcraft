---
title: Measure areas with cut-outs
summary: Outline floors, ceilings and slabs, cut holes out of them, add curved edges, circles and round cut-outs, and read area and perimeter.
section: tasks
order: 50
keywords: room fill, flood fill, paint bucket, click inside a room, auto area, back-out, backout, column, shaft, deduct from several items, area, polygon, outline, square feet, sf, cut-out, hole, deduct, circle, round, arc, perimeter, floor, ceiling, slab
---

An area item measures enclosed area. Each outline can have holes cut out of it (a shaft, a column, a planter), and its edges can be straight or curved.

Before you start: the sheet needs a scale ([Set the scale](topic:set-the-scale)) and you need an area item ([Create takeoff items](topic:create-items)).

## Outline an area

1. Click the area item under {{ui:Items}}.
2. Choose {{ui:Area}} in the toolbar, or press {{key:A}}.
3. Click each corner of the room or slab in turn. Hold {{key:Shift}} for 0°, 45° and 90° edges.
   From the third point on, the outline fills in and the status bar shows "Area" and "perimeter". A small ring appears round the first point.
4. Close the outline: click the first point (inside its ring), press {{key:Enter}}, double-click, or right-click.
   The area is filled lightly in the item's color, labeled with its square feet, and becomes the selected mark.

{{key:Backspace}} removes the last corner; {{key:Esc}} throws the outline away.

An outline that crosses itself is refused: "The outline crosses itself, so its area would be wrong. Draw it again without crossing." Draw a figure-eight shape as two areas instead.

## Curved edges

While outlining, turn on arc mode ({{ui:Arc}} or {{key:R}}). After a corner, click a point along the curve, then where the curve ends. To close the outline with a curve, make that last click on the first point. The area and perimeter use the exact curve. Press {{key:R}} again for straight edges. To change a curve afterwards, select the area and drag the round handle in the middle of the arc. See [Measure linear runs](topic:measure-linear#arcs-and-curved-walls).

## A circle

1. With an area item, choose {{ui:Circle}} or press {{key:O}}.
2. Click the center.
3. Click any point on the edge.
   While you move, the status bar shows the radius and area. The circle is added as an area mark with an exact area and perimeter.

## Fill a room with one click

When the rooms are drawn as closed walls, {{ui:Room}} ({{key:B}}) takes a floor off in one click:

1. Pick an area item (a floor finish, say) and give the sheet its scale.
2. Choose {{ui:Room}} in the {{ui:Takeoff}} group, or press {{key:B}}.
3. Click inside a room, in the open floor (not on a line or a label).

TakeoffCraft reads the sheet's lines, finds the space around the click and outlines it along the walls' inner faces, as an area of the current item. Door openings up to **4'-0"** are treated as closed, so the outline runs straight across the doorway; **Settings › TakeoffCraft › Room fill closes openings up to** changes that width (3'-0" to 8'-0"). Room names, furniture and fixtures inside the room do not make holes.

It refuses, saying why, when:

- the click is on a line ("That is on a line");
- the space is not closed: an opening wider than the setting lets it run out to the sheet's edge. Raise the setting, or outline that room by hand with {{ui:Area}};
- the space is tiny (a symbol, not a room).

When a door is wider than the setting, the fill runs into the next room and outlines both together: undo ({{key:Mod+Z}}), raise the setting, and click again. Check the outline like any area: drag its corners to fix it. A scanned sheet works the same, but its lines must be dark enough; light grey linework may not stop the fill.

## Cut a hole out of an area

1. Choose {{ui:Select}} ({{key:V}}) and click the area. It shows square handles at its corners.
2. Choose {{ui:Cut-out}} in the toolbar (or press {{key:X}}), or {{ui:Add a cut-out}} under **Selected mark**.
3. Click the corners of the hole, inside the area. Arc mode works here too.
4. Close it like an area: click its first point, press {{key:Enter}}, double-click or right-click.
   The hole is left unfilled, and the status bar says "Cut-out added. Draw another, or press Esc."
5. Draw more holes in the same area, or press {{key:Esc}}.

For a round hole, choose {{ui:Add a round cut-out}} under **Selected mark**, click its center, then a point on its edge.

A cut-out must sit fully inside the area and must not overlap another cut-out. Otherwise TakeoffCraft refuses it: "A cut-out has to sit fully inside the area." or "Cut-outs cannot overlap each other."

To take the last hole out again, choose {{ui:Remove last cut-out}}.

## Back-outs: columns, shafts and openings taken out of several items

A cut-out belongs to one area mark. A **back-out** is drawn once and comes out of every area it overlaps, for the items you choose: draw the columns once, and they come off the floor finish, the ceiling and the slab together.

1. Make an area item for them, such as "Columns".
2. In its item settings, tick **Back-out: its marks take their area out of other items**. A list of your other area items appears, all ticked: untick the ones the back-outs should not touch (paint on the walls, say).
3. Take off the columns with {{ui:Area}} or {{ui:Circle}}, as usual. Each one is drawn dashed.

Every area mark of a ticked item on the same sheet loses the part a back-out covers: the whole back-out when it sits inside, only the overlapping part when it crosses the edge, and nothing inside a cut-out. The selected area's panel shows **Back-outs** and the area left. The item's quantity, its assembly formulas, the costs, the 3D check view and the export all use the area left; the estimate's notes say how much back-outs took out. The back-out item itself counts its own area (leave its costs at zero if you do not price it).

A back-out has to be **convex**: a rectangle, a circle or any outline without an inward corner. TakeoffCraft refuses to draw one that is not; draw an L-shaped shaft as two back-outs. Back-outs cannot have cut-outs, and two back-outs that overlap each other both count.

The perimeter (`P`) does not change: back-outs take out area only.

## Read the area

Select the area. **Selected mark** shows:

| Line | Meaning |
|---|---|
| Area | The net area: outline minus cut-outs. This is what the item counts. |
| Outline | The gross area inside the outline (shown when there are cut-outs). |
| Cut-outs | How many holes, and their total area. |
| Perimeter | The outline's edge length, **plus** the edges of every cut-out ("with cut-outs"). |

The perimeter includes cut-out edges on purpose, for things like edge forms or base that run round a hole as well. If you need only the outer edge, keep holes out of that item or measure the outer edge as a linear run.

The item's {{ui:Unit}} decides how the total is reported: SF, SY or m². The **Selected mark** panel and the status bar always show square feet.

## Fix an area

- **Move a corner**: select the area and drag a corner handle (holes have handles too). If the new shape would cross itself or push a hole outside, the corner is put back: "The point was put back."
- **Move to another item**: pick another area item in the **Item** list under **Selected mark**.
- **Delete**: {{key:Delete}}, {{ui:Delete}} in the toolbar's {{ui:More}} menu, or {{ui:Delete mark}}.

## Depth for volumes

Give the area item a {{ui:Depth}} (for example `0'-4"` for a slab) and use `A * H / 27` in an assembly component to get cubic yards. See [Assemblies and formulas](topic:assemblies).
