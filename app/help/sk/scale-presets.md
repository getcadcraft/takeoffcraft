---
title: Predvoľby mierky
summary: Každá predvoľba v zozname Predvoľba – architektonická, inžinierska a metrická – a čo každá predpokladá o PDF.
keywords: mierka, predvoľby, architektonická mierka, inžinierska mierka, metrická mierka, pomer, 1/4 palca, 1/8 palca, 1:100, skutočná veľkosť
from: 31ac0000
---

Zoznam {{ui:Preset}} v skupine {{ui:Scale}} obsahuje 32 mierok v troch skupinách. Predvoľba nastaví mierku otvoreného listu presne.

Každá predvoľba predpokladá, že strana PDF má skutočný formát papiera, pre ktorý bol výkres navrhnutý: jeden palec na strane PDF je jeden palec papiera (strany PDF majú 72 bodov na palec). Ak bolo PDF zmenené veľkosťou, použite {{ui:Calibrate}}. Po nastavení ľubovoľnej mierky použite {{ui:Check}}. Pozri [Nastavenie mierky](topic:set-the-scale).

## Architektonické

| Predvoľba | Jeden palec papiera je |
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

## Inžinierske

| Predvoľba | Jeden palec papiera je |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrické

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Metrický pomer znamená, že jedna jednotka na papieri zodpovedá toľkým jednotkám v skutočnosti: pri `1:100` je 10 mm na stránke 1 m.

## Kalibrované mierky

Kalibrovaná mierka sa zobrazí ako "Kalibrované 1" = 4.002' na 24'-6"" v lište pod listom: skutočné stopy na palec papiera a vzdialenosť, ktorú ste zadali. Ak je v rozmedzí 0.5 % od predvoľby, lišta pridá "(zodpovedá 1/4" = 1'-0")" a zoznam listov zobrazí názov predvoľby.

## Neobvyklé PDF

Niektoré PDF deklarujú väčšiu jednotku strany (tzv. "používateľskú jednotku"); TakeoffCraft ju zohľadní pri predvoľbách aj pri zobrazenej mierke. Strany otočené v PDF sa merajú rovnako ako vzpriamené.
