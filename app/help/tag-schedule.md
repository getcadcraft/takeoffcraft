---
title: Bring a tag schedule in as quantities
summary: A tag schedule exported from the building model (CSV) becomes typed quantities in the takeoff, one per tag, so the model's counts and areas sit beside what you measured.
section: tasks
order: 77
keywords: tags, tag schedule, building model, bimcraft, ifc, quantities, csv, schedule, import, typed quantity
---

{{ui:Tags}} on the toolbar brings in a tag schedule that BimCraft saved as a CSV file. Each distinct tag becomes a typed quantity, the same kind CivilCraft's cut and fill become.

1. In BimCraft, make the tag schedule you want and save it as CSV.
2. Choose {{ui:Tags}} and pick the file.
3. Say which column names the line ({{ui:Name the line by}}, usually the tag) and which holds the number ({{ui:Quantity from}}). With {{ui:Count the rows}} each row counts as one.
4. Choose the unit. A length in millimetres becomes metres with {{ui:Multiply by}} 0.001.
5. {{ui:Add the quantities}}.

Rows with the same tag are added together. A cell that is not a number is left out and counted in the summary. Bringing the same schedule again updates the quantities you already have instead of adding more; their names, rates and waste stay yours.

## Good to know

A typed quantity is not measured on a sheet, so it has no marks. Nothing is sent anywhere; the file is read here.
