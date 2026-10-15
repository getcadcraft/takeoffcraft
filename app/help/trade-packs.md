---
title: Trade packs
summary: Install free assemblies for a trade into your price library, remove them in one step, and share your own library as a pack.
section: tasks
order: 83
keywords: trade pack, pack, assemblies, templates, starter items, electrical, drywall, framing, painting, concrete, flooring, masonry, roofing, siding, carpentry, plumbing, hvac, insulation, landscape, decking, general contractor, csi, masterformat, cc0, install, remove, share
---

A **trade pack** is a set of ready-made items for one trade: each with its unit, its height or depth, its waste and its **assembly**, the parts and formulas that turn a measured run, area or count into materials. A drywall partition, for example, brings its track, studs, sheets, screws, tape and compound.

Packs install into your [price library](topic:price-library), and from there you add their items to any takeoff.

## Install a pack

1. Open {{ui:Library}} at the top of the {{ui:Items}} panel, then {{ui:Trade packs…}}.
2. Choose the {{ui:Units}}: imperial (LF, SF), metric (m, m²) or both. Every assembly comes in both systems.
3. Choose {{ui:Install}} beside a pack.

The pack's items appear in the library, tagged with the pack's name. To use them, tick them in the library and choose {{ui:Add to takeoff}}.

:::note
**A pack brings no prices.** Its items show "set your rate" in the library. Rates are yours: type them in the library or the item editor, or import your price list as a CSV and use {{ui:Update prices}}.
:::

If you already have an item of the same name and type in your library, the pack leaves yours as it is. Installing a pack again replaces its own items with the new version.

## Remove a pack

In {{ui:Trade packs…}}, choose {{ui:Remove}} beside an installed pack, then once more to confirm. Every item that came from it leaves the library in one step. Items you already added to a takeoff stay in that takeoff.

## What is in a pack

Choose {{ui:Sources and details}} under a pack to see what each assembly was written from: building codes, standards and trade associations' installation guides. In the library, hold the pointer over an item to read its sources and its assumptions, such as stud spacing or a paint's spread rate. Check them against your job and your products' data sheets, and change the formulas where they differ (see [Assemblies and formulas](topic:assemblies)).

Every pack is marked **Starter: not reviewed by an estimator yet** until working estimators have reviewed it.

Each item also carries its CSI MasterFormat number, such as `09 21 16`.

## Share your library as a pack

{{ui:Export as pack…}} in the library saves it as a pack file (`.ccpack.json`) that anyone can install with {{ui:Open a pack file…}}. By default it leaves out the items that came from installed packs, and it carries no rates. Tick {{ui:Include my rates as sample rates}} to send your rates too: they go out labelled with the region and the date you give, and whoever installs the pack chooses whether to use them.

Pack files are plain data, never programs. TakeoffCraft checks every part of one before it uses it and leaves out anything it cannot read.
