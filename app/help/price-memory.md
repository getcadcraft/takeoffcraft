---
title: Price memory from your past jobs
summary: TakeoffCraft remembers the rates you used on past takeoffs, on this computer only, so a new takeoff can start from what you paid last time. See it, use it, forget it.
section: tasks
order: 73
keywords: price memory, prices, remember prices, last job, past jobs, typical price, median, rates, unpriced, reprice, learn from a past takeoff, forget, library
---

{{ui:Prices}} on the toolbar (the dollar sign) opens what TakeoffCraft remembers about the prices you used. It is a plain list: for each item name, the rates from your last jobs. It is kept in this browser (in Studio, its own web view) beside the price Library, never inside a takeoff file, and nothing is sent anywhere. It is not a trained model.

## What gets remembered

When you save a takeoff, each item that has a price and is used (it has a mark, or a typed quantity above zero) is remembered under its name and type: material rate, labor rate, waste and unit. A job is the plan files it is taken off, so saving the same takeoff again replaces its own prices instead of adding another job. The last 12 jobs are kept for each name.

To start with your older work, choose {{ui:Learn from a past takeoff…}} and pick a saved takeoff (.json). Its priced, used items are remembered the same way.

Names match when their words match, whatever the case or punctuation ("2x4 Stud, 8 ft" and "2x4 stud 8 FT" are the same). The same words for another kind of item (a linear item and a count item) are not the same price.

## Use it on a new takeoff

1. Make the items of the new takeoff.
2. Choose {{ui:Prices}}. Under {{ui:This takeoff}} you see every item that has a remembered price, what you have on it now, the last job's rates, the typical rates (the middle of the remembered jobs) and the range.
3. Choose {{ui:Use last}} or {{ui:Use typical}} on one item, or {{ui:Price N unpriced items from memory}} to fill every item that has no price yet from the last job.

Each use is one step: {{key:Ctrl+Z}} takes it back. An item that only has a similar name (one name inside the other) says so, and the buttons use the similar name's rates. A price remembered per each is never put on an item per foot: the dialog says the units differ and leaves it alone.

## See it, change it, forget it

{{ui:Everything remembered}} lists every name with its rates and the number of jobs. The trash button forgets one name; {{ui:Clear all prices}} forgets them all. Turn off {{ui:Remember my prices when I save a takeoff}} to stop remembering; what is already there stays until you forget it. Your takeoffs and the price Library are never touched.

## With your assistant

If you allow assistants in Settings, they can read what is remembered for the takeoff's items (prices_list) and price items from it (prices_apply, which can preview first). It is the same list as the dialog.
