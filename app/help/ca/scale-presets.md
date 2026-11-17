---
title: Predefinides d'escala
summary: Totes les predefinides de la llista Predefinida (arquitectòniques, d'enginyeria i mètriques) i què suposa cadascuna sobre el PDF.
keywords: escala, predefinides, escala arquitectònica, escala d'enginyeria, escala mètrica, raó, 1/4 polzada, 1/8 polzada, 1:100, mida real
from: 31ac0000
---

La llista {{ui:Predefinida}} del grup {{ui:Escala}} té 32 escales en tres grups. Una predefinició fixa exactament l'escala del full obert.

Totes les predefinicions suposen que la pàgina del PDF és la mida real de paper del dibuix: una polzada al PDF és una polzada de paper (les pàgines PDF mesuren 72 punts per polzada). Si el PDF s'ha redimensionat, useu {{ui:Calibra}}. Useu {{ui:Comprova}} després de definir qualsevol escala. Consulteu [Estableix l'escala](topic:set-the-scale).

## Arquitectònica

| Predefinida | Una polzada de paper és |
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

## Enginyeria

| Predefinida | Una polzada de paper és |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Mètrica

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Una raó mètrica vol dir que una unitat al paper és tantes unitats a la realitat: a `1:100`, 10 mm a la pàgina són 1 m.

## Escales calibrades

Una escala calibrada apareix com "Calibrada 1" = 4.002' sobre 24'-6"" a la barra sota el full: peus reals per polzada de paper, i la distància que heu escrit. Quan és a menys del 0.5% d'una predefinició, la barra afegeix "(coincideix amb 1/4" = 1'-0")" i la llista de fulls mostra el nom de la predefinició.

## PDF inusuals

Alguns PDF declaren una unitat de pàgina més gran (una "user unit"); TakeoffCraft la té en compte per a les predefinicions i per a l'escala mostrada. Les pàgines girades dins del PDF es mesuren de la mateixa manera que les dretes.
