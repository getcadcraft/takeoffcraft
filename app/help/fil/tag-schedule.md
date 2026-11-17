---
title: Ipasok ang tag schedule bilang dami
summary: Ang tag schedule na na-export mula sa building model (CSV) ay nagiging typed quantities sa takeoff, isa bawat tag, para katabi ng bilang at lawak ng model ang mga sinukat mo.
keywords: tags, tag schedule, building model, bimcraft, ifc, dami, csv, iskedyul, import, typed quantity
from: a60c19b6
---

{{ui:Tags}} sa toolbar ang nagpapasok ng tag schedule na sine-save ng BimCraft bilang CSV file. Bawat natatanging tag ay nagiging typed quantity, ang parehong uri ng nagiging cut at fill ng CivilCraft.

1. Sa BimCraft, gawin ang tag schedule na gusto mo at i-save ito bilang CSV.
2. Piliin ang {{ui:Tags}} at piliin ang file.
3. Sabihin kung aling column ang magpapangalan sa linya ({{ui:Name the line by}}, karaniwang tag) at alin ang may numero ({{ui:Quantity from}}). Sa {{ui:Count the rows}}, binibilang na isa ang bawat row.
4. Piliin ang unit. Nagiging metro ang haba sa milimetro sa pamamagitan ng {{ui:Multiply by}} 0.001.
5. {{ui:Add the quantities}}.

Pinagsasama ang mga row na may parehong tag. Hindi isinasama ang cell na hindi numero at binibilang ito sa buod. Kapag inulit mo ang pagpasok ng parehong schedule, ina-update nito ang mga dami na mayroon ka na sa halip na magdagdag pa; mananatili sa iyo ang kanilang mga pangalan, rate at waste.

## Mabuting malaman

Ang typed quantity ay hindi sinusukat sa sheet, kaya walang mark ito. Walang ipinapadala kahit saan; binabasa dito ang file.
