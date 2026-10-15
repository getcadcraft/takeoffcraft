---
title: Create takeoff items
summary: Make linear, area and count items and set their unit, height or depth, waste and material and labor rates.
section: tasks
order: 30
keywords: crew, production rate, crew size, wage, hours, man-hours, worker-hours, crew-days, labor hours, item, new item, condition, multi-condition, also measure, several types, room, linear, area, count, unit, height, depth, waste, material, labor, rate, color, cost
---

An **item** is one thing you measure and price: a wall type, a floor finish, a ceiling, a door, a light fixture. Every mark you draw belongs to an item. Other programs call these conditions.

Each item has a type (and can take other kinds of marks too, see [One item, several kinds of marks](topic:create-items#one-item-several-kinds-of-marks)):

| Type | You draw | It reports | Units |
|---|---|---|---|
| Linear | Runs of connected points | Length, number of runs, and wall area when it has a height | LF or m |
| Area | Closed outlines, with cut-outs | Area, perimeter, number of areas | SF, SY or m² |
| Count | One click per thing | How many | EA |

## Make an item

1. In the {{ui:Items}} panel on the right, choose {{ui:New item}}.
2. Type a name, like `Interior wall type A` or `Carpet tile`.
3. Pick the type: {{ui:Linear (length)}}, {{ui:Area}} or {{ui:Count}}.
4. Choose {{ui:Add}} (or press {{key:Enter}}).
   The item appears in the list with its own color, becomes the item you draw with, and its editor opens below the list. The status bar tells you which tool to pick next.

Press {{key:Esc}} in the form to close it without adding an item.

:::tip
If you pick a measuring tool first, TakeoffCraft uses the last item of the right type, or opens the {{ui:New item}} form with that type already chosen.
:::

## Pick the item you draw with

Click an item in the list. It becomes the item new marks go to, and its marks are highlighted on every sheet while the others fade. If the open sheet has none of its marks, TakeoffCraft jumps to a sheet that has. Click the item again to stop highlighting; it stays the item you draw with.

Clicking a mark with the {{ui:Select}} tool also makes its item the current one.

## Set up the item

The item editor (**Item: (name)**) has these fields. Each one is saved when you leave the field or press {{key:Enter}}, and each change can be undone.

| Field | What it does |
|---|---|
| {{ui:Name}} | Shown in the list, the tables and the exports. |
| {{ui:Type}} | Linear, Area or Count. It is locked once the item has marks ("An item with marks keeps its type"). |
| {{ui:Color}} | The color of its marks on screen and in the marked PDF. |
| {{ui:Unit}} | What the quantity is reported in: LF or m for linear; SF, SY or m² for area; EA for count. |
| {{ui:Also measure}} | The other kinds of marks the item takes, each with its own unit. See below. |
| {{ui:Height}} (linear) | A wall height. The item then also reports wall area (length × height). |
| {{ui:Depth}} (area) | A depth or thickness, used in assembly formulas (for example concrete volume). |
| {{ui:Waste %}} | Added to the quantity before pricing: 10 means quantity × 1.10. |
| {{ui:Material $/LF}} | Material cost per unit. The label follows the unit: $/SF, $/EA and so on. |
| {{ui:Labor $/LF}} | Labor cost per unit. |
| {{ui:CSI number}} | Its CSI MasterFormat number, like `09 21 16` (or just the division, `09`). The workbook's By division worksheet groups costs by it. Items from [trade packs](topic:trade-packs) have one already. |

Height and depth take feet and inches (`9'-0"`, `8' 6"`) or decimal feet (`9`) for imperial units, and meters (`2.7`, `2700 mm`) for metric units. Rates take amounts like `12.50` or `$1,250`, up to four decimals. See [Length, rate and percent entry](topic:entry-formats).

Below the fields, **Measured** shows the totals the item's formulas can use, with their letters: Length (L), Runs (N), Wall area (A) for linear; Area (A), Perimeter (P), Areas (N) for area; Count (N) for count.

## One item, several kinds of marks

Some things are measured more than one way: a room has a floor (an area), a base along its walls (a length) and doors (a count). Instead of three items, make one:

1. Make the item with its main type, such as an area item `Room 101`.
2. Under {{ui:Also measure}} in its editor, tick {{ui:Linear}}, {{ui:Count}} or both. Each one gets a unit next to it.
3. Draw with any tool whose kind the item takes: with `Room 101` current, {{ui:Area}} draws its floor, {{ui:Linear}} its base and {{ui:Count}} its doors. TakeoffCraft does not ask for another item.

The items list shows every quantity (`50.00 SF + 2 EA`). In the quantities table the item's row has its main quantity, and each other kind gets its own row below it, such as **Room 101 (count)**, with its own waste and material and labor rates. The exports, the per-sheet table and the marked PDF's legend list them the same way.

The main type's fields stay the main type's own: the height or depth, the pitch, back-outs and the 3D shape apply to its marks only. A base run drawn for an area item is measured plainly along the plan, and shows flat in 3D. Assembly formulas use the main type's totals.

A kind can be unticked only while the item has no marks of it; delete them, or move them to another item under **Selected mark**, first. Marks can move to any item that takes their kind.

Further down is the {{ui:Assembly}}: components such as studs or board, each with its own formula and rates. See [Assemblies and formulas](topic:assemblies).

At the bottom: {{ui:Move up}} and {{ui:Move down}} change the item's place in the list and in the exports, and {{ui:Delete item}} removes it with all its marks (after asking; you can undo it).


Area items also have **Pitch** (roof planes measured on the slope: [Roofs and slopes](topic:roofs-and-slopes)) and **Back-out** (their marks come off other items' areas: [Measure areas](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Linear items have **Slope** (Level, Rake, Hip or valley) and, for rakes and hips, **Pitch**.

## Rates in the table

You can also type {{ui:Waste %}}, material and labor rates straight into the {{ui:Quantities}} table at the bottom ({{ui:By item}}). It is the same setting as in the editor.

## How pricing works

For each item and each assembly component:

1. **With waste** = quantity × (1 + waste %).
2. **Material** = with waste × material per unit, rounded to the cent.
3. **Labor** = with waste × labor per unit, rounded to the cent.
4. **Total** = material + labor.

The {{ui:Job total}} adds every item and every component. An item can carry its own rates and an assembly at the same time; both are counted, so leave the item's rates at 0 when its components carry the cost.

## Labor by crew

Instead of a labor rate per unit, an item's labor can come from a crew: how much it puts in per hour, how many people, and what each earns. Under {{ui:Labor by crew}} in the item editor, tick {{ui:Price labor from a crew}} and fill in:

| Field | Example |
|---|---|
| {{ui:Production}} | `20` LF an hour (in the item's unit) for the whole crew |
| {{ui:Crew size}} | `2` people |
| {{ui:Wage $/hour each}} | `45` |

TakeoffCraft works out, from the quantity with waste:

- **crew-hours** = quantity ÷ production (110 LF ÷ 20 = 5.5),
- **worker-hours** = crew-hours × crew size (11),
- **crew-days** = crew-hours ÷ 8 (0.69),
- **labor** = worker-hours × wage ($495.00).

The editor shows the result and the rate it comes to ($4.50/LF). The item's own labor rate is then read-only, in the editor and in the table. The header of the {{ui:Quantities}} table adds the job's worker-hours and crew-days. The exports note each crew's hours, and in the workbook the labor cell is a formula on the crew (`ROUND(F2/20*2*45,2)`). Untick the box to go back to a rate per unit.

## Metric items

Pick m (linear) or m² (area) as the unit. Quantities, heights and formula values are then in meters. The sheet scale can be any preset or calibration; units and scales are independent.

## Next

- [Measure linear runs](topic:measure-linear)
- [Measure areas with cut-outs](topic:measure-areas)
- [Count by hand](topic:count-by-hand)
