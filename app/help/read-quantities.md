---
title: Read quantities and the estimate
summary: Use the Quantities table by item and by sheet, the job total, highlighting, and the Incomplete warning.
section: tasks
order: 90
keywords: quantities, totals, by item, by sheet, job total, estimate, summary, report, highlight, incomplete, costs
---

The {{ui:Quantities}} table at the bottom of the window is your live estimate. It changes the moment you draw, delete, rescale or edit a rate. Quantities are never stored; they are measured again from the marks every time, so they cannot drift out of date.

## By item

Choose {{ui:By item}} (the default). Each item has a row, and each of its assembly components a row under it.

| Column | Meaning |
|---|---|
| Item | Name, with the item's color. "+(n) unscaled" means some marks are on sheets with no scale. |
| Quantity | The measured total in the item's unit (components: the formula result). |
| Unit | LF, m, SF, SY, m², EA, or the component's unit. |
| Waste % | Typed here or in the item editor. |
| With waste | Quantity × (1 + waste). |
| Material/unit, Labor/unit | Rates; you can type them here. |
| Material, Labor | With waste × rate, rounded to the cent. |
| Total | Material + labor. |

The last row, **Job total**, adds the material, labor and total columns. The same total shows at the right of the table's header.

Type into a waste or rate cell and press {{key:Enter}} or click away to apply it. A value TakeoffCraft cannot read is outlined in red and the status bar says why, for example "Type an amount like 12.50."

Click an item's row to highlight its marks on every sheet and jump to a sheet that has them (the same as clicking it under {{ui:Items}}).

## By sheet

Choose {{ui:By sheet}} to see each item's quantity on each sheet, with the number of marks. Click a row to open that sheet with the item highlighted. Use it to check that every sheet was taken off, or to split quantities by floor or area of work.

## By area

When the takeoff has bid areas, {{ui:By area}} lists each area's items and a subtotal. See [Bid areas](topic:bid-areas).

## The Incomplete warning

When something is left out of the totals, the header shows a warning, for example:

"Incomplete: 1 formula error, 6 marks on sheets with no scale (not in the totals)"

- **Formula errors**: an assembly component's formula cannot be worked out. Its row says "Formula error: …". See [Assemblies and formulas](topic:assemblies#when-a-formula-is-wrong).
- **Marks on sheets with no scale**: give those sheets a scale. See [Set the scale](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

The same notes go into the exported spreadsheet, so an incomplete estimate never looks complete.

## Highlight an item

Click an item under {{ui:Items}} or in the table. Its marks stay at full strength on every sheet and the rest fade. The sheets list shows "(n) highlighted" on each sheet with its marks. Click the item again to stop highlighting.

## Item totals in the side panel

Each item in the {{ui:Items}} list shows its quantity too. The item editor's **Measured** block shows the values its formulas use: length, runs and wall area; area, perimeter and number of areas; or count.

## Marks on PDFs that are not open

A takeoff can include marks on PDFs you have not opened this time. They still count in every total; the sheets list names those PDFs. See [Save and reopen a takeoff](topic:save-and-reopen).

## More room

The arrow button at the right of the {{ui:Quantities}} header hides the table so the sheet gets more room. Choose it again to bring the table back.
