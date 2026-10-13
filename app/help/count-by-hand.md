---
title: Count by hand
summary: Click each door, fixture or device to count it, check your counts, and fix mistakes.
section: tasks
order: 60
keywords: count, each, ea, fixtures, doors, devices, symbols, tally, click count, manual count
---

A count item counts things: doors, light fixtures, outlets, plumbing fixtures. Each click on the sheet adds one count mark. Counting does not need a scale.

## Count

1. Make or click a count item under {{ui:Items}} ({{ui:Count}} type).
2. Choose {{ui:Count}} in the toolbar, or press {{key:C}}.
3. Click each one on the sheet.
   Each click puts a dot in the item's color, and the item's count goes up by one.
4. Move to the next sheet ({{key:PageDown}}) and keep counting. The tool stays on {{ui:Count}}.
5. Press {{key:Esc}} when you are done. TakeoffCraft goes back to {{ui:Select}}.

Dragging still pans and the wheel still zooms while you count, so you can move round the sheet without adding dots.

:::tip
Click the count item to highlight its dots on every sheet. The sheets list then shows how many are on each sheet, which helps you find the sheets you have not counted yet.
:::

## Fix a count

- **Remove a dot**: choose {{ui:Select}} ({{key:V}}), click the dot, and press {{key:Delete}} or choose {{ui:Delete mark}}. Or press {{key:Mod+Z}} straight after a wrong click.
- **Move a dot**: select it, then drag it.
- **Counted under the wrong item**: select the dot and pick the right count item in the **Item** list under **Selected mark**.

## Many identical symbols

For a symbol that repeats many times on a sheet, try [Auto count](topic:auto-count): box one, review what it finds, and add them all in one step.

## Using counts in formulas

A count item's quantity is **N**. Assembly components can use it, for example hinges `N * 3` for doors. See [Assemblies and formulas](topic:assemblies).
