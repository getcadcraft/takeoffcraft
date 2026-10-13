---
title: Roofs and slopes
summary: Give an area its pitch to measure the roof surface from the plan, and measure rakes, hips and valleys along their slope.
section: tasks
order: 55
keywords: roof, pitch, slope, slope factor, rise, run, 6:12, rake, hip, valley, gable, roofing, squares, sloped area, true length, plan area
---

A roof plan shows each roof plane flat, as seen from above. The roof itself is bigger: a plane at 6:12 has about 12% more surface than its plan, and its sloped edges are longer than they look. Give the item its pitch and TakeoffCraft measures along the slope.

## Typing a pitch

A pitch is the rise per 12 of run, as on the roof plan's pitch symbols. Type it as `6:12`, `6/12` or just `6`; another run works too (`4:10` is 4.8:12). An angle works with a degree sign: `26.57°`. Blank or `0` is flat.

## Roof areas

1. Make an area item for the roofing, or open the one you have.
2. In its settings, type the **Pitch**, such as `6:12`.
3. Outline each roof plane on the plan with {{ui:Area}}, as usual.

Each plane counts its plan area times the slope factor: √(1 + (rise ÷ 12)²), 1.118 at 6:12 and 1.414 at 12:12. Select a plane to see its **Area** (on the slope), its **Plan area** and the **Slope factor**.

Planes with another pitch: select the plane and type its own **Pitch** in its panel. Leave it blank to use the item's. The 3D check view, the assemblies (`A` is the sloped area), the costs and the export all use the sloped area. Back-outs on a pitched plane, such as skylights, come off at the same slope.

The perimeter (`P`) stays the plan perimeter. Measure eaves, rakes, hips and valleys as runs (below).

## Rakes, hips and valleys

1. Make a linear item, such as "Rake edge" or "Hips".
2. Set its **Slope** to **Rake** (a sloped edge, like a gable's) or **Hip or valley** (the line where two planes meet), and type the **Pitch** of the roof planes.
3. Draw the runs on the plan with {{ui:Linear}}.

A rake counts its plan length times the slope factor. A hip or valley runs at 45° across the plan between two planes of the same pitch, so its true length is its plan length times √(1 + (rise ÷ 12)² ÷ 2): 1.061 at 6:12, 1.225 at 12:12.

One run can mix them. Select it: each segment in its panel has a slope list — **Item's** (the item's setting), **Level**, **Rake** or **Hip or valley** — and its length along the slope. A run's own **Pitch** in the panel replaces the item's for all its segments. The panel also shows the **Plan length**, and the labels on the sheet show the lengths along the slope.

Deducts still work: a deducted segment counts nothing, sloped or not.

:::note
Hips and valleys assume both planes have the same pitch. For planes of different pitches, measure the hip by its true length elsewhere, or draw it as a rake with an equivalent pitch.
:::
