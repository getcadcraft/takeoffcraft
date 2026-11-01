---
title: Check supplier stock and lead times
summary: Add a supplier's stock list (CSV or spreadsheet) and TakeoffCraft checks what the takeoff needs, with waste, against it: enough in stock, and how long the wait is. Shortages and long waits show in the Problems panel.
section: tasks
order: 74
keywords: supplier, stock, in stock, lead time, availability, shortage, backorder, order list, csv, sku, vendor, materials, supply, problems
---

{{ui:Supply}} on the toolbar (the truck) checks what your takeoff needs against a supplier's stock list. The supplier's rows that matter are kept in the takeoff's own file. Nothing is sent anywhere and nothing asks a supplier: you bring the file.

## The file

A CSV file with a header row. It needs a name or SKU column and a stock or lead-time column. These headers are recognised (any order, any case): Item, Name, Description or Product; SKU, Part or Item #; In stock, On hand, Available or Quantity; Lead time or Delivery days; Unit or UOM; Price or Cost; Supplier or Vendor.

- Stock can be a number (1,200), "In stock" or "Out of stock".
- A lead time can be "5 days", "2 weeks", "2-3 weeks" (the longer is used), "3 months", "same day" or "backorder". A plain number is in the header's unit (days, unless the header says weeks or months).
- Excel files are not read: save the sheet as CSV first.

## Check the takeoff

1. Choose {{ui:Supply}}, then {{ui:Add a supplier file…}} and pick the CSV. Add more than one: up to five files, 2,000 rows kept in all, those that match your items first.
2. Each item, second condition and assembly part with a quantity is matched to a row by name, or by SKU in its name. A similar name (one inside the other) is used when there is no exact one, and says so.
3. Under {{ui:What the takeoff needs}}, short ones come first: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" or "In stock". The need includes waste. A supplier unit that is not the estimate's (a ton against a foot) is reported and never compared. Each row has {{ui:Select the item}}, which jumps to the item.
4. Set {{ui:Longest wait wanted (days)}} (default 14). An item that is not in stock and waits longer than that is flagged, and the summary names the longest wait that matters.
5. {{ui:Order list (CSV)}} downloads the short items with the amount short, the supplier and the lead time. {{ui:Leave out}} takes a need out of the check (it is an undo step).

## Spreadsheet files and the price Library

A supplier's list can be an Excel workbook (.xlsx) as well as a CSV: the first sheet is read, with the same column names. Formulas are never run; the value the file holds is what is read.

Once a file with prices has been added, {{ui:Prices into the Library}} in the dialog sets the material price of each [Library](topic:price-library) entry the file prices: same name, and a unit that is the same (or not said). Labour, waste, height and assemblies stay as they are, and the entry's note says which file the price came from. An entry in metres is not priced from a list in feet, and one with no matching name is left alone; the status line says how many were skipped for the unit. Reprice from the Library to bring the new prices into this takeoff.

## In the Problems panel

A shortage is a warning and a long wait is a note, in the shared Problems panel ("Supplier stock"), so they sit with every other check. You can accept one with a reason, and the acceptance is saved in the takeoff.

## With your assistant

If you allow assistants in Settings, they can read the check (supply_check). Adding a supplier file is yours to do.

## Good to know

Stock figures are only as current as the file you add. Add the file again to refresh it: a file with the same name replaces the earlier one.
