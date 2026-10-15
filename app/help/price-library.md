---
title: Price library
summary: Keep your items, rates and assemblies in a library, import it from a CSV or a past estimate, add items from it to any takeoff, and update a takeoff's prices from it.
section: tasks
order: 82
keywords: library, trade packs, price list, price book, cost database, import csv, rates, assemblies, reuse, template items, update prices, reprice
---

The **price library** holds items you use on job after job: their type, unit, height, waste, material and labor rates, and their assembly. It is kept in this browser, apart from any takeoff, so every takeoff you open here can use it.

Open it with {{ui:Library}} at the top of the {{ui:Items}} panel.

## Fill the library

- {{ui:Import CSV…}} reads a spreadsheet saved as CSV (see the columns below). Items whose name and type are already in the library are replaced; the rest are added. Rows it cannot read are skipped, and it says which and why.
- {{ui:Add this takeoff's items}} copies every item of the open takeoff into the library, with its rates and assembly (not its marks).
- The estimate CSV TakeoffCraft exports ([Export the estimate](topic:export-estimate)) imports as it is: last job's prices seed the next one.

- {{ui:Trade packs…}} installs free assemblies for a trade, such as drywall, electrical or concrete, without prices. See [Trade packs](topic:trade-packs).

{{ui:Export CSV}} saves the library as a CSV, to keep a copy, to edit it in a spreadsheet or to give it to a colleague. {{ui:Clear}} empties it (click twice).

:::note
The library lives in this browser's storage. Another browser, another computer or a private window has its own (or none). Export it to move it.
:::

## Use it in a takeoff

- Tick items (type in {{ui:Find in the library}} to narrow the list) and choose {{ui:Add to takeoff}}. They are added with their assemblies in one step that {{key:Mod+Z}} takes back. A name already in the takeoff gets a number, like `Carpet (2)`.
- {{ui:Update prices}} gives the takeoff's items the library's waste and rates, for every item whose name and type match a library item, and the same for assembly components of the same name. Heights, units and formulas stay as they are. One {{key:Mod+Z}} puts all the old prices back.

## The CSV columns

The first row names the columns, in any order; other columns are ignored.

| Column | What goes in it |
|---|---|
| Item (or Name) | The item's name. Required. |
| Type | Linear, Area or Count (LF, SF and EA work too). Left empty, the unit decides. |
| Unit | LF or m; SF, SY or m²; EA. Empty: the type's usual unit. |
| Waste % | `10` or `10%`. |
| Material per unit, Labor per unit | Rates like `2.10` or `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, or `2.7` for metric units. |
| Component, Formula | A row with a Component name (or the Type `Component`) is part of the assembly of the item above it. Its Unit, Waste and rates are its own; its Formula uses the item's letters, see [Assemblies and formulas](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Commas, semicolons or tabs between columns all work.
