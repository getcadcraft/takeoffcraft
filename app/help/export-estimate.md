---
title: Export the estimate and a marked PDF
summary: Download the estimate as an XLSX workbook with live formulas or as CSV, and copies of your PDFs with the takeoff drawn in.
section: tasks
order: 100
keywords: proposal, bid summary, export, xlsx, spreadsheet, workbook, csv, marked pdf, print takeoff, report, share, send, legend
---

Exports are downloads. They are made on your computer from the takeoff and the open PDFs; nothing is sent anywhere.

## The estimate as a spreadsheet (XLSX)

1. Open the {{ui:Export}} menu in the toolbar and choose {{ui:XLSX}}.
   Your browser downloads `(name).xlsx`. The status bar says "Exported (name).xlsx (estimate with live formulas, by sheet, marks, scales)." and adds a warning when the estimate is incomplete.
2. Open it in your spreadsheet program.

The workbook has four worksheets:

| Worksheet | What it holds |
|---|---|
| Estimate | A row per item and per component: quantity, waste, quantity with waste, rates, material, labor, total, notes. The job total at the bottom. |
| By sheet | Each item's quantity on each sheet, with the number of marks. |
| Marks | Every mark: sheet, item, type, quantity, and detail (segment lengths, gross and cut-out areas, perimeter). |
| Scales | Each sheet that has a scale or marks: its scale, how it was set (preset, or calibrated on which distance), and feet per PDF unit. |

The Estimate worksheet keeps **live formulas**: quantity with waste, the rounded material and labor amounts, each row's total and the job total. Spreadsheet programs recalculate them, so you can change a rate or waste in the spreadsheet and the totals follow. The numbers TakeoffCraft computed are stored in the cells as well, and match to the cent.

The notes column lists each component's formula, formula errors, marks on sheets with no scale, wall area and perimeter. When anything is left out, the job total row says "Incomplete: see the notes above".

The workbook has been checked in LibreOffice Calc, which recalculated it to the same totals. It has not been opened in Excel yet. Column by column details are in [Export columns](topic:export-columns).

## The estimate as CSV

Open the {{ui:Export}} menu and choose {{ui:CSV}}. You get `(name).csv`: the same rows and columns as the Estimate worksheet, as plain values (no formulas), and the job total. Use it to paste into another estimating or accounting system.

The CSV has only the estimate; for quantities by sheet and the mark list, use XLSX.

## A marked PDF

1. Open the PDFs whose marks you want drawn.
2. Open the {{ui:Export}} menu and choose {{ui:Marked PDF}}.
   "Writing the marked PDF…" shows, then your browser downloads one file per marked PDF, named `(PDF name) (takeoff).pdf`.

In the copy:

- runs are drawn as lines in their item's color,
- areas are filled lightly with a solid outline, and cut-outs left open,
- counts are dots,
- each page with marks gets a small legend in its bottom-left corner: each item's color, name and quantity on that page.

Your original PDFs are not changed.

Notes:

- Only PDFs that are open are written. Marks on PDFs that are not open stay in the totals but are not drawn; open those PDFs first.
- Names in the legend use a standard PDF font. Letters it cannot show print as "?".
- An encrypted PDF cannot be copied with marks: "This PDF is password-protected or encrypted, so a marked copy cannot be written. The takeoff itself is fine; export the spreadsheet instead."
- The first {{ui:Marked PDF}} in a tab loads the PDF writer. Offline, it is there only if the app bar shows {{ui:Offline ready}}; see [Working offline](common:offline).

:::chromium
With several marked PDFs, Chrome and Edge may ask once whether this site may download multiple files. Choose Allow, or you get only the first file.
:::

## Nothing to export?

- {{ui:XLSX}} and {{ui:CSV}} need at least one item: "Nothing to export yet: make an item and take it off."
- {{ui:Marked PDF}} needs marks on an open PDF: "No marks on the open PDFs yet."

## Save the takeoff too

An export is a report. To keep working on the takeoff later, also choose {{ui:Save takeoff}}: see [Save and reopen a takeoff](topic:save-and-reopen).

To add overhead, profit, tax and bond and send a proposal, see [Bid summary and proposal](topic:bid-summary).
