---
title: Page sizes and paper names
summary: See each sheet's size in millimetres and inches and its paper name (A, B and C series, ANSI, ARCH), and group a mixed set by size to find the odd sheets.
section: tasks
order: 141
keywords: page size, paper size, paper name, a0, a1, a2, a3, a4, b series, c series, ansi, arch, architectural, mm, inches, custom size, by size, odd size, mixed set, scale, plan set, mediabox, rotation
---

A scale only means something on the right paper. {{ui:TakeoffCraft}} reads each PDF sheet's size and names the paper, so you can see a sheet that was printed at a different size before you trust a measurement on it.

## What you'll do

Look at the size of the open sheet, then group the whole set by size.

## Steps

1. Open the plans ({{ui:Open plans}}).
2. The sheet bar above the drawing shows the open sheet's paper name and its size, for example "A1 · 594 × 841 mm".
3. Every row of the {{ui:Sheets}} list has a size line under the sheet name.
4. Choose {{ui:By size}} in the {{ui:Sheets}} header. The list gathers the sheets under one heading per size, the biggest group first, and marks a size with only a few sheets as an odd one out.
5. Choose {{ui:By size}} again to go back to the set's own order.

A DWG or DXF sheet has no paper, so no size is shown for it.

## How the name is chosen

- The size comes from the page's box in the PDF with its rotation applied.
- The names are the A and B series (ISO 216), the C series (ISO 269), ANSI A to E and ARCH A to E.
- A page within 2 mm of a named size takes that name. Any other page says custom, with the nearest named size and how far off it is.

## In the estimate

The estimate workbook has a {{ui:Page sizes}} worksheet with the count of each size.

:::note
The ANSI and ARCH inch values were typed from the published tables and have not been compared with the printed standards.
:::
