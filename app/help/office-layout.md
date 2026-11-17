---
title: "The office layout: grouping, subtotals, title and headings from your Default Policies"
summary: Switch on the Default Policies add-on and the estimate, the quantities by sheet, the exports and what an assistant reads take your office's schedule layout, the same one BimCraft's schedules take.
section: tasks
order: 47
keywords: office standard, office layout, default policies, add-on, schedule layout, group by type, group by sheet, subtotal, totals, title, headings, capitals, estimate layout, export layout, settings
---

## What you'll do

Have TakeoffCraft lay its tables out the way your office issues them, without setting it up in each takeoff. The layout is set once, in Default Policies, and holds for every app on this computer: what you set in BimCraft or CadCraft is what TakeoffCraft uses, and the other way round.

## Steps

1. Open **Settings › Add-ons** and switch on **Default Policies**. It is off until you do; with it off, or with nothing set, TakeoffCraft is exactly as it was.
2. Open **Settings › Global › Default Policies** and find **Schedule layout (the office standard)**:

| Policy | What it does in TakeoffCraft |
|---|---|
| Group schedules by | **Type** groups the estimate by item type (Linear, Area, Count, Typed quantity). **Level** groups the quantities by sheet by their sheet. **Room** and **No grouping** leave both ungrouped |
| Totals in schedules | **A subtotal under each group and a total** adds a subtotal under each group. The job total always stays |
| Schedule title | A line over the table, for example `{schedule}: office layout` |
| Column headings | As written, IN CAPITALS or With Capitals |

3. Close Settings. The tables follow at once.

## What takes the layout

- **Quantities › By item** and **By sheet**: group headings, a subtotal under each group, the title and the heading case. A line under the title says which parts your office standard set. The rows are the same rows: you still type rates and waste in them and click figures to select their marks. A component or a second condition stays under its item.
- **The exported estimate** (CSV and XLSX): the same groups and subtotals. In the workbook a subtotal is a `SUBTOTAL` formula over its group, and the job total is one too, so nothing is counted twice.
- **What an assistant reads**: `takeoff_estimate` and `takeoff_quantities` (by sheet) add a `layout` block with the groups, the rows and the subtotals, and say which parts the office set.

## What keeps its own

- **Quantities › By area** states its own grouping (by bid area) and keeps it.
- The **job total**, the markups of the bid summary and the alternates are not regrouped.
- A grouping the table has no column for is left out: the estimate has no level, the quantities by sheet have no type.

## Good to know

- The policies are kept in this browser for every CadCraft app and travel in the Default Policies file (**Save to a file** / **Load from a file** in the same place), so an office shares one file.
- An estimate exported as CSV with groups in it is for reading. To bring an estimate back in as a price library, export it with no grouping set.
- BimCraft's side of the same standard: schedules, set-ups and exports. TakeoffCraft has no policies of its own yet, so there is no Default Policies section under Settings › TakeoffCraft.
