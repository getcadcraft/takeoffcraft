---
title: Bid areas
summary: Tag marks by building, floor or phase, take off into one area at a time, and read quantities and costs for each area.
section: tasks
order: 85
keywords: add alternate, deduct alternate, base bid, alternates, bid area, area, building, floor, level, phase, zone, alternate, breakdown, split, typical floor, subtotal, by area
---

A bid area is a part of the job you price on its own: a building, a floor, a phase, a wing. Each mark can be in one bid area. The quantities and the estimate can then be read for each area, with a subtotal for each, while the job total stays the sum of everything.

## Make a bid area

1. At the top of the {{ui:Items}} panel, open the {{ui:Bid area}} list.
2. Choose **New bid area…**, type a name such as "Building A" or "Level 2", and choose **Make it**.
   The new area becomes the current one. The status bar says "New marks go in (name). Marks in other bid areas are dimmed."

## Take off into an area

While a bid area is chosen in the list, every new mark goes in it: runs, areas, circles, counts, the marks {{ui:Auto count}} adds, and what you paste. Marks in other bid areas, and marks in none, are dimmed on the sheet so you can see what belongs where.

Choose **No bid area** in the list to take off without one; nothing is dimmed then.

:::tip
Typical floors: take off Level 2, select its marks ({{key:Mod+A}} on the sheet), copy them, choose Level 3 in the list and paste. The copies go in Level 3. When the floors are the same and you do not need them apart, a [typical group](topic:typical-groups) counts one floor several times instead.
:::

## Move marks to another area

Select one mark or several ({{key:Shift}} + click, or {{key:Mod+A}}). Under **Selected mark** (or **Selected marks**), pick the area in the {{ui:Bid area}} field. The status bar says "3 marks moved to Level 2." It is one undo step.

## Rename, reorder or delete

Choose **Manage bid areas…** in the list. Type over a name to rename it, use the arrows to change the order (the tables and the workbook follow it), or delete one with the bin. Deleting a bid area keeps its marks: they are then in no bid area. {{key:Mod+Z}} undoes each change.

## Read the quantities by area

In the {{ui:Quantities}} table, choose {{ui:By area}} (it shows once the takeoff has a bid area). Each area lists the items it holds, with their quantity, unit and total, then a subtotal row. Marks in no bid area come last, as **No bid area**. Click an item row to highlight the item and make that area the current one.

Assemblies are worked out for each area from that area's own totals. A formula that rounds up, such as `ceil(L / 4)`, can then give a little more in the areas together than for the whole job, as it would on a bid priced area by area.

## Alternates: base bid plus adds and deducts

A bid area can be an **alternate**: work the owner may add to the bid, or take out of it. In **Manage bid areas…**, each area has a list next to its name:

| Choice | What it does |
|---|---|
| {{ui:Base bid}} | In the bid, as usual. |
| {{ui:Add alternate}} | Priced on its own and **left out of the base bid**: a carpet upgrade, an extra canopy. |
| {{ui:Deduct alternate}} | In the base bid, and offered as a deduction: "delete the canopy". |

Take off an alternate's work into its bid area like any other area. Once the takeoff has an alternate:

- The header of the {{ui:Quantities}} table says **Base bid** instead of Job total: the whole takeoff without the add alternates.
- {{ui:By area}} ends with the base bid and one row per alternate: **+$300.00** for an add, **−$1,050.00** for a deduct.
- An alternate prices only the items that have marks in it, with their assemblies, so an assembly part of another item does not creep in.

In the exports, the CSV ends with the base bid and the alternates, and the workbook gets an **Alternates** worksheet: the base bid, each alternate's items and its change, and the base bid with every add alternate taken.

## In the export

{{ui:XLSX}} adds a **By bid area** worksheet: each area's items and components with quantity, quantity with waste, material, labor and total, a subtotal per area (a `SUM` formula) and **All bid areas** at the end. The **Marks** worksheet gets a **Bid area** column. A takeoff without bid areas exports as before. See [Export columns](topic:export-columns).

The bid areas are saved in the project file with the marks.
