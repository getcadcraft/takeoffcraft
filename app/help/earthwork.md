---
title: Earthwork and spot elevations
summary: Mark spot elevations on a site plan, hand them to CivilCraft for the surface and cut and fill, and take simple excavation quantities here.
section: tasks
order: 84
keywords: earthwork, excavation, cut, fill, cut and fill, grading, spot elevation, elevations, topo, surface, triangulation, civilcraft, points, pnezd, trench
---

TakeoffCraft measures what is drawn on a sheet. Earthwork needs a ground surface, so it is shared with CivilCraft, which builds surfaces from points, grades them and works out cut and fill and haul.

## Simple excavation here

For a footprint dug to one depth, an area item with a **depth** is enough: the volume is area × depth. The general contractor [trade pack](topic:trade-packs) has a bulk excavation item (bank volume, loose volume and truck loads) and a utility trench item (excavation, bedding and backfill by length and depth).

## Spot elevations for CivilCraft

1. Set the site sheet's scale.
2. Make a **Count** item, for example "Existing grade", and click each spot elevation on the sheet.
3. Select a mark and type its {{ui:Elevation}} in the Selected mark panel: `102.5`, `102'-6"` or `31.24 m`. Negative and zero elevations are fine.
4. Open the {{ui:Export}} menu and choose {{ui:Spot elevations}}. You get a points file (`.csv`) with Point, Northing, Easting, Elevation and Description, one row per marked point of the open sheet.
5. Open that file in CivilCraft (see [Import points](app:civilcraft/import-points)). It builds the surface from the points ([Build a surface](app:civilcraft/build-surface)); from there it compares surfaces and gives cut and fill ([Volumes](app:civilcraft/volumes)).

Northing and easting are the sheet's own coordinates in feet, measured from the page's corner at its scale: distances and volumes between the points are true, but they are not your site's survey coordinates. Move them onto the site's coordinates in CivilCraft when you need to.

:::note
Points from different sheets do not share coordinates, so the export takes the open sheet only. Elevations are saved with the takeoff and carried by copy and paste.
:::

## Cut and fill from CivilCraft

CivilCraft's earthwork comes back as two items you can price:

1. In CivilCraft, grade your pads and corridors, then choose {{ui:Send to TakeoffCraft}} under **Earthwork** ([Earthwork volumes](app:civilcraft/volumes)). It saves a quantities file (`.quantities.json`).
2. In TakeoffCraft, open it with {{ui:Open takeoff}}, or drop it on the app. Your takeoff stays open: the file adds **Earthwork: cut** and **Earthwork: fill** as [typed quantities](topic:create-items#typed-quantities-no-drawing) in cubic yards (CY) for a feet project, or cubic metres (m³) for a metre project. It is one step: {{key:Mod+Z}} takes it back.
3. Rename them, set waste, rates and assemblies as you like.

When the design changes, send again from CivilCraft and open the new file: the same two items get the new quantities. Their names, rates, waste and assemblies stay as you set them. If the project's unit changed, the status bar says so: check the rates. A file from another CivilCraft project adds its own two items.

The quantities are bank volumes, as CivilCraft measured them (grid method): no shrink or swell. Add those as waste, or with a formula such as `Q * 1.25` for loose volume. The item editor shows where each one came from and when; the estimate's notes column says it too.

:::note
The quantities file is plain JSON (`"format": "cadcraft-quantities"`), so a script or another program can write one too: an app name, a project, and items with a key, a name, a unit and a quantity.
:::
