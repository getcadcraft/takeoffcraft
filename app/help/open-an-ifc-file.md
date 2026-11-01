---
title: Bring in quantities from an IFC 4.3 file
summary: Open an IFC 4.3 file of a road, railway, bridge or earthworks and get a count per class, with the lengths, areas and volumes the file states, as typed quantities.
section: tasks
order: 13
keywords: ifc, ifc4x3, ifc 4.3, road, railway, bridge, pavement, kerb, course, earthworks, bearing, infrastructure, quantities, bim, civil, typed quantities
---

An IFC 4.3 file can hold roads, railways, bridges, marine works and the parts they are made of: pavements, courses, kerbs, rails, earthworks, bearings, piles and more. TakeoffCraft reads those and turns them into typed quantities you can price.

## Open the file

1. Choose {{ui:Open plans}} in the {{ui:File}} group, or press {{key:Mod+O}}.
2. Select the IFC file (you can select it with PDFs), or drop it on TakeoffCraft.

One typed quantity is made for each class and predefined type, for example "Pavement (flexible): count", and, when the file states them, "length" in m, "area" in m² and "volume" in m³. The note on each item says how many elements were counted and how many stated no quantity. Opening a newer file of the same name updates those quantities instead of adding more.

## What it does not do

- It reads the quantity sets (IfcElementQuantity) the file carries. It does not measure the 3D shapes, so an element with no quantity set is counted but adds no length, area or volume.
- Only the infrastructure classes of IFC 4.3 are read. A building file (walls, doors, slabs) is not turned into quantities here; a file that is not IFC 4.3 says so and brings nothing in.
- The units are the file's own, converted to metres.
