---
title: Bid packages and bid leveling
summary: Split the estimate into packages by trade, send each package's scope to subcontractors, compare the bids that come back on the same scope, and use the chosen bid as the package's price.
section: tasks
order: 102
keywords: bid leveling, leveling, bid package, subcontractor, sub bid, scope, plug, trade, csi division, compare bids, low bid, bid tab, bidder, award, chosen bid, use a bid, subcontract price
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

## Use a bid as the package's price

Choose {{ui:Use}} on a bid and it becomes the price of the whole package in your estimate: the package's own pricing (the items, their second conditions and assembly parts) drops out of the job total, the items stay as quantities with your own rates for reference, and one line, **Chosen bid**, carries the bid's amount. Items the bid leaves out stay at your own cost, which is what leveling already counted as the plug. Choose another bid, or choose the same one again to take it back; each is one step that {{key:Mod+Z}} undoes.

In the bid summary the sub bids are one line inside the cost: overhead, profit and bond are added on top of them like any other cost; sales tax (on material only) and labor burden (on labor) are not. The workbook's Estimate sheet carries the chosen bid as its own row and the markups block adds it, with live formulas. The material list leaves out an awarded package's material, because the subcontractor supplies it.

A package inside an alternate's bid area is not repriced: alternates and bid-area subtotals still use your own prices.

## Bids that come back by email

You do not have to type the bids in. {{ui:Send for bids…}} under a package emails each subcontractor a link to a page where they type a price for every line; {{ui:Get prices}} pulls what they sent into this table. See [Send a package for bids](topic:bid-invitations).

:::note
Typing a bid in by hand still works, and a hand-typed bid and one from the site sit side by side. Bids that came back from the site are flagged **web** (or **web, late** when they arrived after the due time); their price changes only when the bidder sends a new version, so your own edits to it stay until then.
:::
