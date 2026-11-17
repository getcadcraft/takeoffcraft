---
title: Presetări de scară
summary: Fiecare presetare din lista Presetare, arhitecturală, inginerească și metrică, și ce presupune fiecare despre PDF.
keywords: scară, presetări, scară arhitecturală, scară inginerească, scară metrică, raport, 1/4 inch, 1/8 inch, 1:100, mărime reală
from: 31ac0000
---

Lista {{ui:Presetare}} din grupul {{ui:Scară}} conține 32 de scări în trei grupuri. O presetare stabilește exact scara foii deschise.

Fiecare presetare presupune că pagina PDF are dimensiunea reală de hârtie a desenului: un inch pe pagina PDF înseamnă un inch de hârtie (paginile PDF au 72 de puncte pe inch). Dacă PDF-ul a fost redimensionat, folosiți {{ui:Calibrare}}. Folosiți {{ui:Verificare}} după stabilirea oricărei scări. Vezi [Setarea scării](topic:set-the-scale).

## Arhitecturală

| Presetare | Un inch pe hârtie înseamnă |
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

## Inginerească

| Presetare | Un inch pe hârtie înseamnă |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrică

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Un raport metric înseamnă că o unitate pe hârtie reprezintă atâtea unități în realitate: la `1:100`, 10 mm pe pagină înseamnă 1 m.

## Scări calibrate

O scară calibrată apare ca „Calibrată 1” = 4.002' pe 24'-6"" în bara de sub foaie: picioare reale pe inch de hârtie și distanța pe care ați introdus-o. Când se află în limita de 0.5% față de o presetare, bara adaugă „(corespunde cu 1/4" = 1'-0")” iar lista foilor afișează numele presetării.

## PDF-uri neobișnuite

Unele PDF-uri declară o unitate de pagină mai mare („unitate utilizator”); TakeoffCraft o ia în calcul pentru presetări și pentru scara afișată. Paginile rotite în PDF sunt măsurate la fel ca cele drepte.
