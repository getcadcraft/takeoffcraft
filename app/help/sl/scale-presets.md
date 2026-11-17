---
title: Prednastavitve merila
summary: Vsaka prednastavitev v seznamu Prednastavitev, arhitekturna, inženirska in metrična, ter kaj vsaka predpostavlja o PDF-ju.
keywords: merilo, prednastavitve, arhitekturno merilo, inženirsko merilo, metrično merilo, razmerje, 1/4 inch, 1/8 inch, 1:100, polno merilo
from: 31ac0000
---

Seznam {{ui:Prednastavitev}} v skupini {{ui:Merilo}} ima 32 meril v treh skupinah. Prednastavitev nastavi merilo odprtega lista natančno.

Vsaka prednastavitev predpostavlja, da je stran PDF velikost papirja, za katero je risba narejena: en palec na strani PDF je en palec papirja (strani PDF merijo 72 točk na palec). Če je bil PDF spremenjen v velikosti, uporabite {{ui:Kalibriraj}}. Po nastavitvi katerega koli merila uporabite {{ui:Preveri}}. Glejte [Nastavitev merila](topic:set-the-scale).

## Arhitekturno

| Prednastavitev | En palec na papirju je |
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

## Inženirsko

| Prednastavitev | En palec na papirju je |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrično

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Metrično razmerje pomeni, da je ena enota na papirju toliko enot v resnici: pri `1:100` je 10 mm na strani 1 m.

## Izračunana merila

Izračunano merilo se v vrstici pod listom prikaže kot „Kalibrirano 1“ = 4.002' na 24'-6"“: prave čevlje na palec papirja in razdaljo, ki ste jo vpisali. Če je v 0.5 % prednastavitve, vrstica doda „(ujema se z 1/4" = 1'-0")“, seznam listov pa prikaže ime prednastavitve.

## Nenavadni PDF-ji

Nekateri PDF-ji naznanijo večjo enoto strani („uporabniško enoto“); TakeoffCraft jo upošteva pri prednastavitvah in pri prikazanem merilu. Strani, zasukane v PDF-ju, se merijo enako kot pokončne.
