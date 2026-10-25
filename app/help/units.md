---
title: Units
summary: The units an item can report in, the units its formula variables use, and how imperial and metric mix.
section: reference
order: 50
keywords: units, lf, sf, sy, sq, square yards, roofing squares, acres, hectares, meters, square meters, ea, each, metric, imperial, conversion, default unit
---

## Item units

| Item type | Unit | Name |
|---|---|---|
| Linear | LF | linear feet (default) |
| Linear | m | meters |
| Area | SF | square feet (default) |
| Area | SY | square yards |
| Area | SQ | roofing squares (100 square feet) |
| Area | ac | acres |
| Area | m² | square meters |
| Area | ha | hectares |
| Count | EA | each |

Change it with {{ui:Unit}} in the item editor at any time, even after measuring; the quantity is converted at once.

The {{ui:Unit}} list shows the units turned on in {{ui:Settings}} › {{ui:General}} › {{ui:Units}}, and always the item's own unit. A new item starts in the length or area unit starred there, when it is one of the item's units; otherwise in LF or SF. See [Units, typed values and the unit lists](common:unit-lists).

## Units of the formula variables

| Item unit | L, P, H | A |
|---|---|---|
| LF | feet | square feet (wall area) |
| m | meters | square meters (wall area) |
| SF | feet | square feet |
| SY | feet | square yards |
| SQ | feet | squares |
| ac | feet | acres |
| m² | meters | square meters |
| ha | meters | hectares |

For SY items, `A` is in square yards while `P` and `H` stay in feet. A volume from an SY item is `A * 9 * H / 27` cubic yards; using SF for slabs is simpler.

## Where units are fixed

Some readouts always use feet:

- the live readout in the status bar while drawing (feet-inches, SF),
- **Selected mark** (feet-inches, LF and SF),
- the check result (feet-inches, with decimal feet and meters),
- segment lengths and perimeters in the spreadsheet's Marks worksheet (feet-inches).

Item totals, the {{ui:Quantities}} table, formulas and the Estimate worksheet use the item's own unit.

## Scales and units are separate

A sheet's scale says how big the drawing is; an item's unit says how to report it. A metric drawing at `1:100` can be taken off in LF, and an imperial drawing in m². Calibrating accepts any unit: `24'-6"`, `7.5 m`, `7500 mm`.

## Precision

TakeoffCraft measures exactly from the points you click, including true arc lengths and areas, and does not round quantities. Display rounds lengths to 1/16 inch and decimals to two places. Money is rounded only at the extended amounts, to the cent.
