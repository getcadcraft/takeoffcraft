---
title: Assemblies and formulas
summary: Add components to an item and let formulas turn its length, area or count into studs, plates, sheets of board, concrete and hardware, with a worked wall example.
section: tasks
order: 80
keywords: assembly, components, formula, studs, drywall, sheets, plates, concrete, cubic yards, hardware, recipe, typical, item parts
---

An item's **assembly** is a list of components, each with a quantity formula and its own waste and rates. The formula uses the item's measured totals, so one takeoff of a wall gives you studs, plates and board at once, and they update as you measure.

## Variables you can use

| Item type | Variables |
|---|---|
| Linear | `L` length, `H` height, `A` wall area (L × H), `N` number of runs |
| Area | `A` area, `P` perimeter (outline + cut-outs), `H` depth or thickness, `N` number of areas |
| Count | `N` count |

Values are in the item's own units: feet and square feet for LF and SF items, meters and square meters for m and m² items. For an SY item, `A` is in square yards while `P` and `H` stay in feet.

Formulas use `+ - * /` (or × ÷), parentheses, numbers, and the functions `ceil`, `floor`, `round`, `min`, `max` and `abs`. The full rules are in [Formula language](topic:formulas).

## Worked example: an interior wall

Say you have taken off **Interior wall type A** as a linear item: 4 runs totaling 120 LF, with {{ui:Height}} set to `9'-0"`. Its **Measured** values read L = 120, N = 4, A = 1,080 (SF of wall, one face).

1. Select the item under {{ui:Items}}.
2. In {{ui:Assembly}}, choose {{ui:Add component}}.
   A component called "Component" appears, with the formula `L` and its result below.
3. Type `Studs 16 in o.c.` in {{ui:Name}} and `EA` in {{ui:Unit}}.
4. In {{ui:Quantity formula}}, type `ceil(L * 12 / 16) + N`.
   The result updates as you type: "= 94 EA". That is one stud every 16 inches along 120 feet (90), plus one extra to close each of the 4 runs.
5. Choose {{ui:Add component}} again for the plates: name `Plates, top and bottom`, unit `LF`, formula `L * 2`. Result: 240 LF.
6. Add the board: name `Gypsum board 4x8, both sides`, unit `sheets`, formula `ceil(A * 2 / 32)`. Result: 68 sheets (2,160 SF of board ÷ 32 SF per sheet = 67.5, rounded up).
7. Fill in each component's {{ui:Waste %}}, {{ui:Material $}} and {{ui:Labor $}}.
   Each component gets its own row under the item in {{ui:Quantities}}, priced like an item, and the {{ui:Job total}} includes it.

If the wall cost is all in the components, leave the item's own material and labor rates at 0, or it is counted twice.

:::tip
Waste is applied after the formula and is not rounded: 68 sheets with 10% waste is 74.8 sheets. To order whole sheets, put the waste inside the formula, like `ceil(A * 2 / 32 * 1.1)`, and leave the component's waste at 0.
:::

## More formulas

| What | Item | Formula |
|---|---|---|
| Studs at 24 in on center | Linear | `ceil(L / 2) + N` |
| Insulation batts, SF | Linear with height | `A` |
| Paint, both sides, gallons at 350 SF | Linear with height | `ceil(A * 2 / 350)` |
| Tile cartons at 15 SF, 10% extra | Area | `ceil(A * 1.1 / 15)` |
| Base or edge trim, LF | Area | `P` |
| Concrete, cubic yards | Area with depth | `A * H / 27` |
| Concrete rounded up to a quarter yard | Area with depth | `ceil(A * H / 27 * 4) / 4` |
| Hinges, three per door | Count | `N * 3` |
| At least one box, one per 12 | Count | `max(1, ceil(N / 12))` |

## When a formula is wrong

The line under the formula turns into an error message, for example `"X" is not a measured value here. Use L, H, A, N.` or `A ")" is missing.` The component then has no amounts, its row in {{ui:Quantities}} shows "Formula error: …", and the header says "Incomplete: 1 formula error (not in the totals)". Fix the formula and the totals update.

A formula that divides by zero is an error too ("The formula divides by zero."), for example `A / H` on an item with no depth.

## Limits

- Formulas run on the item's **totals**, not run by run. `ceil(L * 12 / 16) + N` adds one stud per run; there is no per-run rounding yet.
- A formula can only use its own item's variables, not another item's.
- Up to 50 components per item, 500 characters per formula.

## Remove a component

Choose {{ui:Remove component}} under it. You can undo it with {{key:Mod+Z}}.
