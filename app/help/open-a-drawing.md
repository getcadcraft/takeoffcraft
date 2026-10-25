---
title: Open a DWG or DXF drawing
summary: Open a drawing file as sheets (model space and every layout), start with the scale the drawing gives, show or hide its layers, and bring in linked drawings.
section: tasks
order: 12
keywords: dwg, dxf, cad, drawing, open a drawing, layouts, model space, paper space, sheets, units, insunits, viewport scale, xref, linked drawing, layers, frozen, no pdf, plot, without plotting
---

TakeoffCraft opens a DWG or DXF drawing as it opens a PDF: you do not have to plot it to PDF first. Counting from the drawing itself is exact, because the drawing knows what each object is. See [Count from a drawing](topic:count-from-a-drawing).

## Open the drawing

1. Choose {{ui:Open plans}} in the {{ui:File}} group, or press {{key:Mod+O}}.
2. Select the DWG or DXF file. You can select several, and PDFs with them.
3. Choose Open.

You can also drop drawing files on TakeoffCraft, like PDFs. Nothing is uploaded: the browser reads the file on your computer.

TakeoffCraft reads DWG from AutoCAD 2000 to 2018 and ASCII DXF from R12 to 2018. It refuses a binary DXF (save it as ASCII, or as a DWG) and a file that is neither, and says why. A damaged file opens with what could be read, and a message says so; its counts may be incomplete.

## Sheets

- **Model** is the drawing's model space.
- **Each layout** (paper space tab) is a sheet, named by its tab, in tab order. A layout shows the model through its viewports, as it plots.

Zoom, pan, snapping to the drawing's own lines, marks, notes, {{ui:Calibrate}} and the rest work as on a PDF. A drawing's sheets are saved in the takeoff by the file's name and a fingerprint of its contents, like a PDF: open the same file again and the marks are on its sheets.

## The scale

A sheet starts with the scale the drawing gives:

- **A layout** takes the scale of its biggest viewport. A scale such as 1/2" = 1'-0" is named as the preset it is; any other is shown as "From the drawing's viewport: 1" = 2.5'". If a layout has viewports at other scales, the biggest sets the sheet's scale: check the others with {{ui:Check}}.
- **Model** takes the drawing's units (inches, millimeters, feet…) as its scale, "Drawing units (inches)".
- **A drawing with no units** (the drawing never said whether a unit is an inch or a millimeter) has no scale: the sheet says "No scale", and measuring on it is refused, as on a PDF with no scale. Counting needs no scale. Give it one with {{ui:Calibrate}}.

{{ui:Calibrate}}, {{ui:Check}} and the {{ui:Preset}} list change a scale at any time and win over the drawing's. The preset list is off on Model, which has no paper size.

## Layers

{{ui:Layers}} on the sheet bar lists the drawing's layers with how many objects each has on this sheet. Layers the file turned off or froze start hidden. Untick a layer to hide it, or tick a hidden one to show it: the sheet draws again, and what is hidden is left out of counts and of the objects offered to {{ui:Measure drawing}}, unless you ask to count hidden layers too. {{ui:Show all}} shows every layer; {{ui:Back to the file's layers}} undoes your changes. Layer choices belong to this session, not to the takeoff file.

## Linked drawings (xrefs)

A drawing that links other drawings shows them where they are inserted. TakeoffCraft finds a linked drawing among the **open files**, by its file name: open the host drawing and its linked drawing together (or one after the other). Until then the status bar says how many linked drawings were not found, what they draw is missing, and counts say so.

## Limits

- Objects TakeoffCraft cannot read or place (proxy objects, unknown classes) are listed in the count window by type; they are never dropped without a word.
- Very large drawings are drawn in part, and counts stop at a cap, saying so. Open a PDF plot of such a drawing instead.
- A drawing is drawn in black and in its own colors, darkened for white paper. Plot style tables and pen assignments are not applied.
