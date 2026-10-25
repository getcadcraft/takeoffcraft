---
title: Send a package for bids
summary: Email a bid package to subcontractors, let them type prices on a page that needs no account, keep the prices sealed until the opening time, and pull them into the leveling sheet.
section: tasks
order: 103
keywords: send for bids, invitation, bid invitation, bidder, subcontractor, invite, email, price request, sealed bids, bid opening, bid day, late bid, due date, reminder, subcontractor records, insurance, qualification, csv, connect, sheets pdf
---

{{ui:Export}} › {{ui:Bid packages and leveling…}} › {{ui:Send for bids…}} sends one package to the people you choose. The website emails each of them a link; they open a page, see the scope and type a price for every line. You see the prices in the leveling sheet, ready to compare ([Bid packages and bid leveling](topic:bid-leveling)).

:::note
Sending is **not open to everyone yet.** While the feature is being tested it works for accounts the CadCraft team has enabled; if yours is not, the dialog says so. The bidder's page works for every invitation that was sent.
:::

## Before you send

- You need a CadCraft account with a verified email address. TakeoffCraft in the browser asks you to **Connect**: a tab opens on getcadcraft.com, you press Connect, and that tab gets a sign-in that works for 30 days, for bid packages only, until you close the TakeoffCraft tab. You can remove it any time on your security page. A Studio window cannot send yet.
- Give each item a CSI number: a package is the items of one CSI division ([Create takeoff items](topic:create-items)).
- Scale the sheets the package's marks are on, so the quantities the bidders see are measured.

## Send a package

1. Choose {{ui:Send for bids…}} under the package.
2. Fill in the title, project and an optional message, and the **due time** in your own time zone.
3. Leave **Keep prices sealed** ticked to hide every price until the **opening time** (not before the due time), or untick it to see prices as they arrive.
4. Leave the sheets box ticked to send a PDF of the sheets that hold the package's marks, with the marks drawn in. Prices of yours are never in what is sent: only item names, CSI numbers, quantities, units and sheet names.
5. Type the people to invite, one per line, as `Name <name@company.com>` or just the address, or tick people from your subcontractor records. Up to 60 at a time, 100 per package.
6. Choose {{ui:Send invitations}}. Each person gets one plain email with your name and email address, the due time and the link; replies go to you.

The dialog tells you how many were sent and names anyone skipped: already invited to this package, asked not to get bid invitations, not a valid address, or over a sending limit.

## What the bidder sees

A page at a long private link, with no sign-in. It shows who invited them, the due time, whether prices are sealed, your message and the sheets PDF, then every line with its quantity. For each line they type a price or tick **Not included**, and may add a note; they add notes for the whole package and up to 3 files (a quote, a scope letter, a certificate). They can save again and change their prices until the opening, or **decline**, with a box to ask that CadCraft not send them bid invitations again.

## Sealed bids and the opening

Before the opening time **nobody** sees a price, a note or a file: not you, not in TakeoffCraft, not on your Bid packages page. You see who was invited and whether they answered. At the opening time every bid shows at once. A bid saved after the due time is accepted and marked **late**; the leveling still lists it, and lateness is a mark, not a ruling. After the opening a bidder cannot change a price. With no sealing, a bid is final once it is due.

## Get the prices

{{ui:Get prices}} asks the website and adds each answer to the package as a bid, flagged **web**. TakeoffCraft also asks quietly each time you open the dialog while it is connected. A bid whose bidder saved a new version is updated in place; a bid you edited stays as you left it until they send a new version. Each pull is one step that {{key:Mod+Z}} undoes. Left-out lines come across as the scope the bid leaves out, so leveling fills them at your own cost.

## On the website

Your account has two more pages once you can send: **Bid packages** lists what you sent, who answered, the late bids and the files, lets you send a reminder (a fresh link; the old one stops working), close, reopen or cancel a package; **Subcontractors** keeps a record for each company: contacts, trades, qualification answers (years in business, bonding capacity, EMR, safety record, union or open shop, references), license and insurance expiry dates, flagged once past or within 30 days, and their past bids. Import and export the records as CSV: one row per contact, with the columns the export shows; a company you already have is updated, never repeated.

## Who sees what, and how long

A bidder's prices, notes and files go to you and to the CadCraft team, who run the page. They are kept for 24 months after the due date, the files for 180 days; then they are deleted. The bidder's email address is the one you entered; it is used only to send the invitation and any reminder for it. One address gets at most 3 invitations a day from everyone together, and you can send up to 200 a day.

## Not built yet

Addenda, award letters, a signed-off scope sheet per bidder and automatic reminders before an insurance date runs out are not built. See [Not built yet](topic:not-built-yet).
