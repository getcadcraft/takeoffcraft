---
title: Embodied carbon and a 5D price table
summary: Carbon adds up the embodied carbon of the takeoff from each item's quantity and an open factor table, and sends the takeoff's rates to BimCraft as a price table for 5D costs.
section: tasks
order: 76
keywords: carbon, embodied carbon, kgco2e, co2, factors, a1-a3, transport, waste, 5d, price table, cost, bimcraft, epd
---

{{ui:Carbon}} on the toolbar adds up the embodied carbon of what you have measured, and turns your rates into a price table the building model can use. It is an estimate, not an assessment.

## Embodied carbon

Each item's quantity, with its waste, is multiplied by a row of the factor table. A row is matched by the words of the item's name ("concrete slab" finds a row with the keyword concrete). The table is the same open table BimCraft uses, so a file you load here works there. **The rows that come with the program are starter values: generic, unchecked and not from any database.** The dialog says so beside the figures; replace them with your own source before you rely on a number.

1. Choose {{ui:Carbon}}. The counted items are listed with their kilograms of CO2e; the total is above.
2. Tick {{ui:A4 transport}} or {{ui:A5 site waste}} to count those stages too, for the rows that give a figure for them. The product stage is always counted.
3. To use another row for an item, or none, use the list on its line.
4. {{ui:Factors from a file…}} loads a factor table (JSON or CSV) made from your own source; its rows replace the starter rows with the same id. {{ui:Factors (JSON)}} saves yours.

A factor is per metre, square metre, cubic metre, item or kilogram. A line measured in feet or square feet is converted. A kilogram factor needs a volume (cubic yards or metres) and the row's density. An item whose factor needs a quantity it does not measure is listed under {{ui:Left out}} with the reason, never guessed. The running total in the status bar shows the same figure.

Your factor rows, your choices and the stages you count are saved in the takeoff's file.

## A price table for 5D costs

{{ui:5D prices (JSON)}} and {{ui:5D prices (CSV)}} save the takeoff's rates as a price table: one row per priced item with its material and labour rate per unit and its waste. Load it in BimCraft's cost pane (Embodied carbon and 5D cost) to price the building model's tasks with the same rates that made the bid. Items measured in a unit the table does not have, and items with no rate, are left out.

## With your assistant

If you allow assistants in Settings, they can read the carbon (carbon_check). Loading factors is yours to do.

## Good to know

Nothing is sent anywhere. The figures are only as good as the factors you load.
