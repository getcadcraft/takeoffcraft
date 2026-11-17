---
title: Předvolby měřítka
summary: Každá předvolba v seznamu Předvolba – architektonická, inženýrská a metrická – a co každá předpokládá o PDF.
keywords: měřítko, předvolby, architektonické měřítko, inženýrské měřítko, metrické měřítko, poměr, 1/4 in, 1/8 in, 1:100, skutečná velikost
from: 31ac0000
---

Seznam {{ui:Předvolba}} ve skupině {{ui:Měřítko}} obsahuje 32 měřítek ve třech skupinách. Předvolba nastaví měřítko otevřeného listu přesně.

Každá předvolba předpokládá, že stránka PDF má skutečný papírový formát výkresu: 1 in na stránce PDF je 1 in papíru (stránky PDF mají 72 bodů na palec). Pokud bylo PDF změněno velikost, použijte {{ui:Kalibrovat}}. Po nastavení jakéhokoli měřítka použijte {{ui:Kontrola}}. Viz [Nastavení měřítka](topic:set-the-scale).

## Architektonická

| Předvolba | Jeden in papíru je |
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

## Inženýrská

| Předvolba | Jeden in papíru je |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrická

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Metrický poměr znamená, že jedna jednotka na papíře odpovídá tolika jednotkám ve skutečnosti: při `1:100` odpovídá 10 mm na stránce 1 m.

## Kalibrovaná měřítka

Kalibrované měřítko se v liště pod listem zobrazí jako "Kalibrováno 1" = 4.002' na 24'-6"": skutečné ft na in papíru a vzdálenost, kterou jste zadali. Když je do 0.5% některé předvolby, lišta přidá "(odpovídá 1/4" = 1'-0")" a seznam listů ukáže název předvolby.

## Neobvyklá PDF

Některá PDF deklarují větší jednotku stránky (takzvanou uživatelskou jednotku, "user unit"); TakeoffCraft ji zohledňuje u předvoleb i u zobrazeného měřítka. Stránky otočené v PDF se měří stejně jako stránky svisle orientované.
