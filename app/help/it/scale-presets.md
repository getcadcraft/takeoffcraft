---
title: Scale predefinite
summary: Ogni predefinita nell'elenco Predefinita (architettonica, ingegneristica e metrica) e cosa presuppone su PDF.
keywords: scala, predefinite, scala architettonica, scala ingegneristica, scala metrica, rapporto, 1/4 di pollice, 1/8 di pollice, 1:100, grandezza naturale
from: 31ac0000
---

L'elenco {{ui:Predefinita}} nel gruppo {{ui:Scala}} contiene 32 scale in tre gruppi. Una predefinita imposta esattamente la scala della tavola aperta.

Ogni predefinita presuppone che la pagina PDF abbia le dimensioni reali della carta per cui è stato fatto il disegno: un pollice sulla pagina PDF equivale a un pollice di carta (le pagine PDF misurano 72 punti per pollice). Se il PDF è stato ridimensionato, usare {{ui:Calibra}}. Usare {{ui:Verifica}} dopo aver impostato una scala. Vedere [Imposta la scala](topic:set-the-scale).

## Architettonica

| Predefinita | Un pollice di carta equivale a |
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

## Ingegneristica

| Predefinita | Un pollice di carta equivale a |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrica

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Un rapporto metrico significa che un'unità sulla carta corrisponde a tante unità nella realtà: a `1:100`, 10 mm sulla pagina sono 1 m.

## Scale calibrate

Una scala calibrata compare come "Calibrata 1" = 4.002' su 24'-6"" nella barra sotto la tavola: piedi reali per pollice di carta, e la distanza digitata. Quando è entro lo 0.5% da una predefinita, la barra aggiunge "(corrisponde a 1/4" = 1'-0")" e l'elenco delle tavole mostra il nome della predefinita.

## PDF particolari

Alcuni PDF dichiarano un'unità di pagina più grande (una "user unit"); TakeoffCraft la considera per le predefinite e per la scala mostrata. Le pagine ruotate nel PDF vengono misurate allo stesso modo di quelle dritte.
