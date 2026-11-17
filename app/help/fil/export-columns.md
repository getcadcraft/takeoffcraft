---
title: Mga column ng export
summary: Bawat worksheet at column ng XLSX export at ng CSV, kasama ang mga formula na dala ng Estimate worksheet.
keywords: export, columns, xlsx, csv, worksheet, estimate sheet, ayon sa sheet, marks, scales, formulas, field
from: fed07851
---

## Estimate (XLSX worksheet at CSV)

Isang row bawat item, sinusundan ng row bawat component ng assembly nito (naka-indent). Pagkatapos ay isang walang lamang row at ang kabuuan ng job.

| Column | Nilalaman | Sa XLSX |
|---|---|---|
| A Item | Pangalan ng item (bold) o pangalan ng component (naka-indent) | Text |
| B Type | Linear, Area, Count o Component | Text |
| C Unit | LF, m, SF, SY, m², EA, o ang unit ng component | Text |
| D Quantity | Kabuuang sinukat, o resulta ng formula | Number |
| E Waste % | Waste | Porsyento (0.10 = 10%) |
| F Qty with waste | Quantity × (1 + waste) | Formula `D*(1+E)` |
| G Material per unit | Rate ng material | Number |
| H Labor per unit | Rate ng labor | Number |
| I Material | Pinalawak na material | Formula `ROUND(F*G,2)` |
| J Labor | Pinalawak na labor | Formula `ROUND(F*H,2)` |
| K Total | Material + labor | Formula `I+J` |
| L Notes | Ginamit na formula, error sa formula, mga mark sa sheet na walang scale, wall area, perimeter | Text |

Row ng kabuuan ng job: `SUM` ng mga column I, J at K sa lahat ng row sa itaas, at "Incomplete: see the notes above" sa Notes kapag may naiwan.

Ang row na may error sa formula ay walang quantity o halaga; ang note nito ang nagbibigay ng error. Naka-freeze ang header row.

Sa CSV, ang parehong column ay may plain values, ang Waste % ay numero ng porsyento (10 para sa 10%), at ang pera ay nasa dollars na may dalawang decimal. Ang text na maaaring kunin ng spreadsheet bilang formula (nagsisimula sa `=`, `+`, `-` o `@`) ay may nangunguna na `'` para manatili itong text.

## Ayon sa sheet (XLSX lamang)

| Column | Nilalaman |
|---|---|
| Sheet | Pangalan ng sheet (kasama ang pangalan ng PDF kapag hindi ito bukas) |
| Item | Pangalan ng item |
| Quantity | Quantity ng item na iyon sa sheet na iyon, sa unit nito |
| Unit | Unit ng item |
| Marks | Bilang ng mark |

## Marks (XLSX lamang)

Isang row bawat mark.

| Column | Nilalaman |
|---|---|
| Sheet | Pangalan ng sheet |
| Item | Pangalan ng item |
| Type | Linear, Area o Count |
| Quantity | Haba, net area, o 1 |
| Unit | LF o m; SF, SY o m²; EA |
| Detail | Linear: ang haba ng mga segment, ang mga binawas na minarkahang "(deduct)", at "deducts (length) of (length) drawn". Area: gross at cut-out areas kapag may cut-outs, at ang perimeter. "Sheet has no scale" para sa mga mark na walang scale. |
| Bid area | Lamang kapag may bid areas ang takeoff: ang area ng mark, o "No bid area" |

## Ayon sa bid area (XLSX lamang, kapag may bid areas ang takeoff)

| Column | Ano ito |
|---|---|
| Bid area | Pangalan ng area, o "No bid area" |
| Item | Ang item, o component na naka-indent sa ilalim nito |
| Unit | Unit ng item o component |
| Quantity | Sinukat sa area na iyon (component: ang formula sa mga total ng area) |
| Qty with waste | Quantity × (1 + waste) |
| Material, Labor, Total | Pinalawak hanggang sentimo, gaya sa Estimate |
| Notes | Formula, mga error at mga hindi naka-scale na mark, gaya sa Estimate |

Nagtatapos ang bawat area sa row na "(name) subtotal" na ang mga gastos ay `SUM` na formula ng mga row nito; ang huling row, **All bid areas**, ay nagdadagdag ng mga subtotal. Ang worksheet na **Marks** ay may ikapitong column, **Bid area**.

## Scales (XLSX lamang)

Isang row bawat sheet na may scale o marks.

| Column | Nilalaman |
|---|---|
| Sheet | Pangalan ng sheet |
| Scale | Pangalan ng preset, ang calibrated scale, o "No scale" |
| How | "Preset", o "Calibrated on (the distance you typed)" |
| Feet per PDF unit | Ang eksaktong scale factor na ginagamit ng TakeoffCraft |

## Mga pangalan ng file

- `(name).xlsx` at `(name).csv`, kung saan ang pangalan ay galing sa unang PDF na binuksan sa takeoff.
- Ang CSV ay UTF-8 na may byte order mark at Windows line endings, na nababasa ng spreadsheet programs sa lahat ng platform.
