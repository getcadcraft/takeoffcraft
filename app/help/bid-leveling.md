---
title: Bid packages and bid leveling
summary: Split the estimate into packages by trade, send each package's scope to subcontractors, and compare the bids that come back on the same scope.
section: tasks
order: 102
keywords: bid leveling, leveling, bid package, subcontractor, sub bid, scope, plug, trade, csi division, compare bids, low bid, bid tab, bidder
---

A general contractor sends each trade's scope to subcontractors and compares what comes back. TakeoffCraft does both from the takeoff: open {{ui:Export}} › {{ui:Bid packages and leveling…}}.

## Packages

There is one package for each CSI division your items use (the first two digits of an item's {{ui:CSI number}}, see [Create takeoff items](topic:create-items)). Items without a number make a package of their own. Each package shows its items, how many sheets their marks are on, and our own cost of it (material and labor before markups, from the base bid).

Choose {{ui:Scope CSV}} to download what to send a subcontractor: each item with its CSI number, quantity, unit and the sheets it is on. It has no prices. For material suppliers, the workbook's quote request has the parts list (see [Export the estimate](topic:export-estimate)).

## Enter the bids

1. In the empty row under the package, type the bidder's name and the amount of the bid, then choose {{ui:Add the bid}}.
2. If a bid leaves part of the scope out, open its {{ui:Left out}} list and tick those items.
3. To correct a name or an amount, type over it in the table; the × button removes a bid.

Each change is one step that {{key:Mod+Z}} takes back, and the bids are saved with the takeoff.

## How the bids are leveled

Bids rarely cover the same scope. Leveling fills each left-out item with a **plug** at our own cost of it, so every bid is compared on the whole package:

**Leveled = the bid + the plugs**

The lowest leveled bid is marked **Low**; on a tie, the one entered first. **Against our cost** is the leveled bid minus our own cost of the package: negative means under it. A bid that looks lowest can lose once its missing scope is counted.

The workbook gets a **Bid leveling** sheet with every package that has bids: our estimate, each bid, its plugs, the leveled total and the difference, as live formulas, and what each bid left out.

:::note
TakeoffCraft does not send the invitations or collect the prices: email the scope yourself and type the bids in. The chosen bid does not replace the package's pricing in your estimate yet. See [Not built yet](topic:not-built-yet).
:::
