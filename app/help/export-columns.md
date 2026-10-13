---
title: Export columns
summary: Every worksheet and column of the XLSX export and the CSV, with the formulas the Estimate worksheet carries.
section: reference
order: 60
keywords: export, columns, xlsx, csv, worksheet, estimate sheet, by sheet, marks, scales, formulas, fields
---

## Estimate (XLSX worksheet and CSV)

One row per item, followed by a row per component of its assembly (indented). Then an empty row and the job total.

| Column | Contents | In the XLSX |
|---|---|---|
| A Item | Item name (bold) or component name (indented) | Text |
| B Type | Linear, Area, Count or Component | Text |
| C Unit | LF, m, SF, SY, m², EA, or the component's unit | Text |
| D Quantity | Measured total, or the formula result | Number |
| E Waste % | Waste | Percent (0.10 = 10%) |
| F Qty with waste | Quantity × (1 + waste) | Formula `D*(1+E)` |
| G Material per unit | Material rate | Number |
| H Labor per unit | Labor rate | Number |
| I Material | Extended material | Formula `ROUND(F*G,2)` |
| J Labor | Extended labor | Formula `ROUND(F*H,2)` |
| K Total | Material + labor | Formula `I+J` |
| L Notes | Formula used, formula error, marks on sheets with no scale, wall area, perimeter | Text |

Job total row: `SUM` of columns I, J and K over every row above, and "Incomplete: see the notes above" in Notes when something was left out.

A row with a formula error has no quantity or amounts; its note gives the error. The header row is frozen.

In the CSV, the same columns hold plain values, Waste % is a number of percent (10 for 10%), and money is in dollars with two decimals. Text that a spreadsheet might take for a formula (starting with `=`, `+`, `-` or `@`) gets a leading `'` so it stays text.

## By sheet (XLSX only)

| Column | Contents |
|---|---|
| Sheet | Sheet name (with the PDF name when it is not open) |
| Item | Item name |
| Quantity | That item's quantity on that sheet, in its unit |
| Unit | The item's unit |
| Marks | Number of marks |

## Marks (XLSX only)

One row per mark.

| Column | Contents |
|---|---|
| Sheet | Sheet name |
| Item | Item name |
| Type | Linear, Area or Count |
| Quantity | Length, net area, or 1 |
| Unit | LF or m; SF, SY or m²; EA |
| Detail | Linear: the segment lengths, deducted ones marked "(deduct)", and "deducts (length) of (length) drawn". Area: gross and cut-out areas when there are cut-outs, and the perimeter. "Sheet has no scale" for unscaled marks. |
| Bid area | Only when the takeoff has bid areas: the mark's area, or "No bid area" |

## By bid area (XLSX only, when the takeoff has bid areas)

| Column | What |
|---|---|
| Bid area | The area's name, or "No bid area" |
| Item | The item, or an indented component under it |
| Unit | The item's or component's unit |
| Quantity | Measured in that area (components: the formula on the area's totals) |
| Qty with waste | Quantity × (1 + waste) |
| Material, Labor, Total | Extended to the cent, as on Estimate |
| Notes | Formula, errors and unscaled marks, as on Estimate |

Each area ends with a "(name) subtotal" row whose costs are `SUM` formulas over its rows; the last row, **All bid areas**, adds the subtotals. The **Marks** worksheet then has a seventh column, **Bid area**.

## Scales (XLSX only)

One row per sheet that has a scale or marks.

| Column | Contents |
|---|---|
| Sheet | Sheet name |
| Scale | The preset's name, or the calibrated scale, or "No scale" |
| How | "Preset", or "Calibrated on (the distance you typed)" |
| Feet per PDF unit | The exact scale factor TakeoffCraft uses |

## File names

- `(name).xlsx` and `(name).csv`, where the name comes from the first PDF opened in the takeoff.
- The CSV is UTF-8 with a byte order mark and Windows line endings, which spreadsheet programs on every platform read.
