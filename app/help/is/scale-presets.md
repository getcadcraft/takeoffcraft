---
title: Forstillingar mælikvarða
summary: Hver forstilling í listanum Forstilling — byggingarlistar-, verkfræði- og metramælikvarðar — og hvað hver þeirra gerir ráð fyrir um PDF-skjalið.
keywords: mælikvarði, forstillingar, byggingarlistarmælikvarði, verkfræðimælikvarði, metramælikvarði, hlutfall, 1/4 tomma, 1/8 tomma, 1:100, fullur mælikvarði
from: 31ac0000
---

Listinn {{ui:Preset}} í hópnum {{ui:Scale}} hefur 32 mælikvarða í þremur hópum. Forstilling stillir mælikvarða opna blaðsins nákvæmlega.

Hver forstilling gerir ráð fyrir að PDF-síðan sé raunveruleg pappírsstærð teikningarinnar: ein tomma á PDF-síðunni er ein tomma af pappír (PDF-síður mælast 72 punkta á tommu). Ef PDF-skjalið var stærðarbreytt, notaðu {{ui:Calibrate}}. Notaðu {{ui:Check}} eftir að þú stillir hvaða mælikvarða sem er. Sjá [Stilla mælikvarðann](topic:set-the-scale).

## Byggingarlist

| Forstilling | Ein pappírstomma er |
|---|---|
| `1/16" = 1'-0"` | 16 ft |
| `3/32" = 1'-0"` | 10 ft 8 in |
| `1/8" = 1'-0"` | 8 ft |
| `3/16" = 1'-0"` | 5 ft 4 in |
| `1/4" = 1'-0"` | 4 ft |
| `3/8" = 1'-0"` | 2 ft 8 in |
| `1/2" = 1'-0"` | 2 ft |
| `3/4" = 1'-0"` | 1 ft 4 in |
| `1" = 1'-0"` | 1 ft |
| `1 1/2" = 1'-0"` | 8 in |
| `3" = 1'-0"` | 4 in |

## Verkfræði

| Forstilling | Ein pappírstomma er |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metramælikvarði

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Metrahlutfall þýðir að ein eining á pappír er svo margar einingar í raunveruleikanum: við `1:100` eru 10 mm á síðunni 1 m.

## Kvarðaðir mælikvarðar

Kvarðaður mælikvarði birtist sem „Kvarðaður 1" = 4.002' á 24'-6"" á stikunni undir blaðinu: raunverulegir fetar á pappírstommu, og fjarlægðin sem þú slóst inn. Þegar hann er innan 0,5% af forstillingu bætir stikan við „(samsvarar 1/4" = 1'-0")“ og listi blaðanna sýnir nafn forstillingarinnar.

## Óvenjuleg PDF-skjöl

Sum PDF-skjöl gefa upp stærri síðueiningu („user unit“); TakeoffCraft tekur hana með í reikninginn fyrir forstillingar og fyrir mælikvarðann sem birtist. Síður sem eru snúnar í PDF-skjalinu eru mældar á sama hátt og réttar síður.
