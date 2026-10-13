---
title: Typical groups
summary: Take off a typical unit, room or floor once and count it as many times as it repeats, change the count later, and see which marks are typical.
section: tasks
order: 86
keywords: typical, typical group, repeat, repeat count, multiply, times, unit, hotel room, apartment, typical floor, x24, copies
---

A building often repeats: 24 identical hotel rooms, 6 typical floors, 40 parking bays with the same striping. A **typical group** lets you take off one of them and count it as many times as it repeats, without drawing the copies.

## Make a typical group

1. Take off one unit: its walls, its floor, its outlets — any items.
2. Select its marks with the {{ui:Select}} tool: click one, then {{key:Shift}} + click the others ([Select the marks](topic:copy-paste#select-the-marks)).
3. Under **Selected mark**, open {{ui:Typical}} and choose {{ui:New typical group…}}.
4. Give it a name (`Unit A`) and how many times it repeats (`24`), then choose {{ui:Make group}}.

Every quantity of those marks now counts 24 times: a 10 ft wall run gives 240 ft, an 80 SF floor 1,920 SF, two outlets 48. Costs follow, and assembly formulas see the repeated totals (`N` counts each run 24 times too).

On the sheet, a dashed box goes round the group's marks with its name and count, like **Unit A ×24**.

## Change it later

The groups are listed under **Typical groups** in the right panel:

- Change the number after **×** to change how many times it counts (1 to 10,000). Every quantity updates.
- Rename it in its name box.
- The box icon selects its marks (and shows their sheet).
- The bin deletes the group. Its marks stay, counted once.

To add marks to a group or take them out, select them and pick the group (or {{ui:Not typical (×1)}}) under {{ui:Typical}}.

## Good to know

- A group's marks can be on several sheets, and of any items. Each mark is in one group at most.
- Copies you paste are not in the group: a pasted copy of a typical unit would otherwise count 24 times again. Use a group for "the same thing N times", and copy and paste for the copies you draw.
- The marks are drawn once, so the 3D view and the marked PDF show one unit; the quantities, the exports and the per-sheet table count it ×N. The **Marks** sheet of the Excel export says which marks are typical and how many times they count.
- With bid areas, a group's marks count ×N in their own bid area.
