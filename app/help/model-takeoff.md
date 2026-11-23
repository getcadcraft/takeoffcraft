---
title: Take quantities off a building model
summary: Open the architect's IFC model, see it in 3D, pick walls, floors, doors and the rest by type, material, layer or size, and bring their counts, lengths, areas and volumes into the takeoff. A newer copy of the model updates the same quantities.
section: tasks
order: 86
keywords: model, model takeoff, 3d view, click a part, find the row, material, layer, wall layers, drywall, insulation, door sizes, window sizes, openings schedule, csv, 3d, bim, ifc, rvt, building model, quantities, walls, floors, doors, windows, columns, rooms, by type, by level, update, newer model, design development
---

You do not have to wait for the next drawing set. When the architect sends the building model, open it here and take the quantities straight from it. The model is read on your computer; nothing is sent anywhere.

## Steps

1. Choose {{ui:Model}} on the toolbar and pick the model's `.ifc` file, or open it with {{ui:Open plans}} like any other file.
2. {{ui:Model takeoff}} opens with one row per category and type: walls by wall type, floors by floor type, doors by door type, and so on. Each row shows its count and what that category is measured in.
3. Set {{ui:Group by}} to {{ui:Category}} for a quick total, or to {{ui:Category, type and level}} to split every type by floor.
4. Untick the rows you do not want. {{ui:Find}} narrows the list. Unticking a row also hides its parts in the 3D picture.
5. Give the model a {{ui:Model name}} you will keep for the whole job, for example the project's name.
6. Choose {{ui:Add to the takeoff}}. Each quantity becomes a typed quantity in the items list. Name it, price it and attach assemblies like any other item.

## See the model in 3D

{{ui:Show the model in 3D}} draws the model above the table, one colour for each row (the colour chip beside the row's name). Drag to turn it, hold {{key:Shift}} and drag to move it, use the wheel to zoom, and choose {{ui:Fit}} or {{ui:Reset}} to come back.

- **Click a part** in the picture and its row is selected in the table, with all the parts of that row lit and the rest pale. Click the same part again and, if it sits in several rows (a wall in its layers), the next row is selected.
- **Click a row** in the table to light its parts. Click it again, or click empty space in the picture, to clear it.
- Rooms are not drawn, because a room's volume would hide the building.
- A very large model keeps only a box for some parts so that it fits in memory; the panel says how many. The numbers do not change.

If this computer cannot draw 3D, the table works as before.

## Group by material, layer or size

{{ui:Group by}} has three more choices:

- {{ui:Category and material}}: a wall, floor or roof built of layers gives each layer's material its own row, so drywall, studs and insulation can be priced apart. A part of the building with one material gets that material's row, and a part with none is kept in a row called "No material named".
- {{ui:Category and layer}}: the same, with the layer's thickness in the row ("Insulation, 100 mm").
- {{ui:Category, type and door or window size}}: doors and windows are split by their width and height (for example 3'-0" × 6'-8" or 914 × 2,032 mm).

For a layer, the area is the wall's own face (or the floor's or roof's plan or surface area) and the volume is that area times the layer's thickness. The row's note says how many numbers came from a layer. The layers of one wall add up to the volume the model states for it.

## Save the rows or the openings as CSV

{{ui:Save rows as CSV}} saves the rows you have ticked, with the units in each heading, for a spreadsheet. {{ui:Save openings schedule as CSV}} (only when the model has doors or windows) saves every door and window by type, level and size with its count.

## What is measured

| Category | Quantities |
|---|---|
| Walls | count, length, wall area (one face, openings taken out), volume |
| Floors, slabs, ceilings and other coverings | count, plan area, volume |
| Roofs | count, plan area, roof surface, volume |
| Footings | count, plan area, volume |
| Columns, beams and members | count, length along the member, volume |
| Railings, pipes, ducts and cable runs | count, length |
| Stairs | count, volume |
| Rooms | count, floor area, volume |
| Doors, windows and everything else | count |

Where the model's author stated a quantity in the file, that number is used. Otherwise the number is measured from the element's shape. Each quantity keeps a note that says which, and how many elements gave a number.

:::note
A wall's length measured from its shape runs end to end, so two walls that overlap at a corner both include the corner. A volume needs a closed shape: an element whose shape is not closed is counted and gives no volume. A curved or cornered wall element is measured as half of all its upright faces, and its note says so.
:::

## When a newer model arrives

Open the newer file and type the same {{ui:Model name}}. Before you add anything, the panel says how many quantities are new, how many changed and from what to what, and which quantities from the earlier copy are no longer in the model. Choose {{ui:Add to the takeoff}}: the changed quantities take their new numbers, and your names, rates, waste and assemblies stay. Quantities that are gone from the model keep their old numbers; remove them yourself if the design dropped them.

Type and level names are how a quantity is recognized. If the architect renames a wall type, it arrives as a new quantity and the old one is listed as gone.

## Files this reads

IFC files (IFC2x3, IFC4 and IFC4.3). An IFC file with roads, rails or bridges still brings in its infrastructure quantities directly, as before.

TakeoffCraft does not read `.rvt` files in this release. If the architect works in Revit, ask for an IFC export of the model (File, Export, IFC) and open that.

One model can bring in up to 500 quantities at a time. If there are more, untick rows or group by category.
