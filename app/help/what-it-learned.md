---
title: What it learned from your takeoffs
summary: TakeoffCraft keeps the symbols you confirmed with Auto count, your condition sets, the assemblies you use most and patterns you repeat on every page, all inside the takeoff's own file. See it, use it, delete it.
section: tasks
order: 72
keywords: learn, learned, learning, assistant, remember, symbols, templates, same as last job, last job, condition set, conditions, reuse, assemblies, most used, suggestions, repeat on every page, every page, title block, pattern, clear all, forget, privacy
---

TakeoffCraft gets quicker the more takeoffs you do with it. It learns **only from what you accept**:

- the symbols you boxed with [Auto count](topic:auto-count) and then added,
- the condition sets you save,
- the assemblies you use (once per job),
- the patterns of marks you repeat on every page.

It is plain matching on your own sheets, the same search Auto count runs. It is not a trained model. Everything it learns is kept **in this takeoff's file** (`.takeoff.json`), and nothing is sent anywhere. To carry it to the next job, use [Same as last job](topic:what-it-learned#same-as-last-job).

Choose {{ui:Learned}} on the toolbar (the light bulb, next to {{ui:Auto count}}) to see all of it.

## Symbols

When you box a symbol with {{ui:Auto count}} and choose {{ui:Add}}, the symbol you boxed is kept, with the match level you accepted.

- In {{ui:Learned}}, choose {{ui:Find on this sheet}} or {{ui:Find on every sheet}}. The usual Auto count review opens: click a box to leave it out, move the slider, then add them. Nothing is added until you do.
- When you open a sheet that has none of a learned symbol yet, a bar at the top offers {{ui:Find …}} for it. {{ui:Not now}} hides it for that sheet.
- If the takeoff has no item of that name, adding the marks also adds the item (one undo step).
- Adding the same item's symbol again counts toward the one it knows; a different-looking symbol is kept as a second one.
- Like Auto count, it finds the symbol at right angles and on sheets at another scale.

## Condition sets

A set keeps a takeoff's conditions (items with their units, rates, waste and assemblies), without marks.

1. In {{ui:Learned}}, choose {{ui:Save this takeoff's conditions as a set…}} and give it a name. A set with the same name is replaced.
2. In a takeoff that has the set, {{ui:Add}} puts in the conditions it does not have yet. Conditions with the same name and type are left alone. It is one undo step.

## Same as last job

Your last job's file holds what it learned. To start a new job from it:

1. Open the new plans, then choose {{ui:Learned}} › {{ui:Same as last job…}}.
2. Pick the last job's `.takeoff.json`.
3. Tick what to bring in: its conditions (only the ones this takeoff does not have), and what it learned (symbols, sets, assemblies, patterns). Then {{ui:Bring them in}}.

Its conditions are also kept as a set named after that job. Its marks and quantities stay in its own file. The whole thing is one undo step.

## Assemblies you use most

An item that has an assembly counts as used once per job when it has a quantity and you save the takeoff. A job is the set of plan files it is taken off, so saving the same takeoff again does not count twice. The list under {{ui:Assemblies you use most}} puts the ones you use most first. It leaves out the ones this takeoff already has. {{ui:Add}} puts one in as you last used it, with all its parts.

## Repeat on every page

For marks that are the same on every page of a set, like a title block count or a typical detail:

1. Select the marks on one sheet ([Select the marks](topic:copy-paste#select-the-marks)).
2. In {{ui:Learned}}, choose {{ui:Repeat the selected marks on every page…}}, name the pattern and confirm.

They go on every other open page **of the same size**, at the same place, in one undo step. Lengths and areas only go on pages with the same scale; counts go on any page of that size. A page that already has them is skipped. The pattern is kept, so pages you open later get the offer in the bar, or use {{ui:Repeat on every page}} in the list.

## See it, delete it

Everything learned is listed in {{ui:Learned}}. The bin deletes one thing. {{ui:Clear all}} deletes everything learned and leaves your items and marks alone. Both can be undone until you close the takeoff, and both are saved with the takeoff.

To stop learning in one takeoff, clear {{ui:Learn from this takeoff}}. Nothing new is learned, and what is listed stays until you delete it.

## Good to know

- Older versions of TakeoffCraft open a file with learned things normally. They ignore that part, and drop it if they save the file again.
- A learned symbol is a small picture of what you boxed, kept in the file (a few kilobytes each).
- Learned symbols are searched like Auto count searches, so the same limits apply: [Auto count a symbol](topic:auto-count).
