---
title: Bid summary and proposal
summary: Add sales tax, overhead, profit and bond to the estimate, write inclusions and exclusions, and download a proposal PDF to send.
section: tasks
order: 101
keywords: bid, proposal, quote, overhead, profit, markup, margin, sales tax, bond, inclusions, exclusions, terms, signature, client, price
---

The estimate prices what you took off. The **bid summary** turns it into a price: it adds sales tax, overhead, profit and bond, and makes a **proposal PDF** with your inclusions and exclusions.

Open it from {{ui:Export}} › {{ui:Bid summary & proposal…}}. Everything in it is saved with the takeoff, and each change can be undone.

## The markups

Type a percent in any of the four (leave the others at 0). They are worked out in this order, each on what is above it:

| Line | Worked out as |
|---|---|
| Material, Labor | The estimate's totals (the base bid when the takeoff has [alternates](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| **Cost** | Material + labor. |
| Sales tax on material | Tax % × material. |
| Overhead | Overhead % × (cost + tax). |
| Profit | Profit % × (cost + tax + overhead). |
| Bond | Bond % × everything above. |
| **Bid** | The sum of the lines. |

Each line is rounded to the cent. The summary updates as you type: {{key:Enter}} takes a percent. Each alternate is shown with the same markups on its own cost, so the owner sees what taking it really changes.

## The proposal

Fill in what the proposal should say:

- **Project** (the takeoff's name when empty), **To** (the client) and **From** (your company).
- **Inclusions** and **Exclusions**: one per line; a leading dash or bullet is fine.
- **Terms**: free text, such as "Valid for 30 days."
- **List the items and quantities**: the scope, item by item, with quantities and no prices. Untick it for a lump-sum proposal.

Choose {{ui:Proposal PDF}}. The PDF (`<takeoff> - proposal.pdf`) has the date, the price block with each markup and the bid, the alternates, the scope, the inclusions and exclusions, the terms, and lines to sign and date. If some quantities could not be measured (a sheet without a scale), it says so under the price.

## In the exports

Once the takeoff has a bid summary, the CSV ends with it and the workbook gets a **Bid summary** sheet, with each line, its percent and its amount. See [Export the estimate](topic:export-estimate).
