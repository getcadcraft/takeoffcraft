---
title: What's new in 0.8 and 0.8.1
summary: Count a whole symbol legend across every open sheet in one run, price items from the rates of your past jobs, check the takeoff against a supplier's stock and lead times, and new assistant tools for all three, plus the shared 0.8 changes and the 0.8.1 fix for DWG files.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, count everything, legend, symbol legend, whole set, price memory, past jobs, last job, typical price, supplier, stock, lead time, backorder, order list, shortage, problems panel, assistant, languages, input devices, toolbar rows, dwg
---

This is what changed in TakeoffCraft 0.8 (released 2026-11-01) and 0.8.1 (2026-11-02), compared with 0.7. A symbol legend can now be counted across the whole set at once, a new takeoff can start from the prices of your past jobs, and the takeoff can be checked against a supplier's stock. 0.8.1 is a fix release.

## New

### Count everything in the set

- **Box the legend once.** {{ui:Count everything}} in the toolbar reads a symbol legend: drag a box around the symbols and the names printed beside them. Each symbol is listed with its picture and name, and the name becomes the item's name. Untick what you do not want, then choose {{ui:Count on N sheets}}. A bar shows the sheet being searched, {{ui:Cancel}} stops the run, and the page stays usable.
- **Every sheet in one run.** Each symbol is counted on every open sheet. A sheet drawn at another scale is searched at that scale, and symbols are found turned in any right angle. The legend's own symbols are not counted on its sheet.
- **Review before anything is added.** Each total has a link per sheet ("E-103: 4") that goes to that sheet. Click a box on a find to leave it out, and click it again to bring it back. The match level (50% to 100%) only filters what was found; nothing is searched again.
- **One undo step.** {{ui:Add N marks}} makes a count item per symbol with a mark on every find. A name that is already a count item of yours is reused. {{key:Ctrl+Z}} takes every item and mark back. What you accept also feeds {{ui:Learned}}.
- **Symbols at any angle.** Tick {{ui:Symbols at any angle}} before you count to also find symbols turned by an angle that is not a right angle. The search then turns each symbol every 15 degrees, and a symbol that is not round can take up to six times as long.
- **What it is.** Plain symbol matching on your own sheets, with no trained model, and nothing leaves your computer. On a made-up 200-sheet set it took 9.4 seconds end to end in Chrome on a fast desktop; real plan sets will be slower. See [Count everything in the set](topic:count-everything).

### Price memory from your own jobs

- **TakeoffCraft remembers your rates.** When you save a takeoff, each priced item that is used is remembered by name and type: material rate, labor rate, waste and unit. The last 12 jobs are kept for each name. It is kept on this computer beside the price Library, never inside a takeoff file, and nothing is sent anywhere.
- **Start a new takeoff from it.** {{ui:Prices}} on the toolbar shows, for each item, the last job's rates, the typical rates and the range. {{ui:Use last}} or {{ui:Use typical}} prices one item, and {{ui:Price N unpriced items from memory}} fills every item that has no price yet. Each use is one undo step.
- **Older work.** {{ui:Learn from a past takeoff…}} remembers the priced items of a saved takeoff (.json).
- **See it, change it, forget it.** {{ui:Everything remembered}} lists every name; the trash button forgets one, and {{ui:Clear all prices}} forgets all. Turn off {{ui:Remember my prices when I save a takeoff}} to stop. A price per each is never put on an item per foot. See [Price memory from your past jobs](topic:price-memory).

### Supplier stock and lead times

- **Check against a supplier's list.** {{ui:Supply}} on the toolbar takes a supplier's stock list ({{ui:Add a supplier file…}}), a CSV or a spreadsheet, and checks what the takeoff needs, with waste, against it. Up to five files are kept. Nothing is sent and nothing asks a supplier: you bring the file.
- **What it says.** Short items come first: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" or "In stock". {{ui:Longest wait wanted (days)}} starts at 14.
- **Order list.** {{ui:Order list (CSV)}} downloads the short items with the amount short, the supplier and the lead time.
- **Prices into the Library.** If the file has prices, {{ui:Prices into the Library}} sets the material price of each Library entry with the same name and unit. Reprice from the Library to bring them into the takeoff.
- **In the Problems panel.** A shortage is a warning and a long wait is a note, under "Supplier stock". You can accept one with a reason, and the reason is saved in the takeoff. See [Check supplier stock and lead times](topic:supplier-stock).

### AI assistants

- **Tools for all three.** With assistants allowed in {{ui:Settings}}, an assistant can read a legend (`legend_open`), run the count (`legend_count_start`, then `legend_count_status` and `legend_count_result`) and add it (`legend_count_add`, which can preview first). It can read the remembered prices (`prices_list`) and price items from them (`prices_apply`, which can preview first), and read the supplier check (`supply_check`). Adding a supplier file stays yours to do. See [Use TakeoffCraft with AI assistants](topic:use-with-ai-assistants).

### In every app

- **Languages.** Fifty-four languages in all; ten are new (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili and Uzbek). Languages other than English are machine drafts until a native speaker has read them.
- **Input devices.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} sets what a trackpad, a mouse's side buttons, a pen, a 3D mouse, a game controller or a MIDI controller does, for every app or for one. See [Use a trackpad, 3D mouse or controller](common:input-devices).
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} offers {{ui:Wrap}} (the start), {{ui:2 rows}} and {{ui:1 row}}; groups that do not fit scroll sideways. See [Arrange the panels](common:arrange-panels).
- **Problems panel.** The shared panel of warnings and notes now carries the supplier stock check above, beside the other checks.
- **Add-ons.** Add-ons follow your account list. See [Add-ons and your account list](common:addons-basics).
- **Connect your AI.** CadCraft Studio is the hub: connect your assistant once for all eight apps. Studio has no AI of its own.

## Fixed in 0.8.1

- **DWG classes section.** The classes section of a DWG file was read as the wrong type. This is fixed in TakeoffCraft, and in four other apps.
- **Studio can change language while it runs.** Before, Studio and its packed editions were English only. This has not been tested in the desktop build on every platform; tell us if the language does not change.

## Not in this version yet

- **Not code-signed.** Windows may warn, and on a Mac you right-click and choose {{ui:Open}} the first time. The store builds (Microsoft Store, Google Play, App Store) are on hold, and the iPad and iPhone build was not rebuilt for 0.8.1.
- **Studio updates.** The Windows installer and the Linux packages check once a day and ask first. The portable zip only tells you, and macOS and the APK do not update themselves. The 0.8 macOS .dmg follows the release.
- **Connect your AI.** One-click connect inside Studio, the hosted connector for AI in the browser, your own API key inside Studio and a published MCP package are not promised in this version.
- **Count everything.** It needs symbols drawn the same way as in the legend, and a symbol with a wall or long line through it can be missed. Mirrored symbols are not found, and a sheet with no scale that is drawn at another size is searched at the legend's size. Check the finds on the first sheet before trusting the rest.
- **Supplier stock.** Stock figures are only as current as the file you add. The check never asks a supplier.
- **Languages.** Tamil's app bar overflows.

Everything else is in [Not built yet](topic:not-built-yet). For the release before this one, see [What's new in 0.7](topic:whats-new-0-7).
