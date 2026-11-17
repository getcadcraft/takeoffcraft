---
title: Unaprijed zadane razmjere
summary: Svaka unaprijed zadana razmjera na listi Unaprijed zadana — arhitektonska, inženjerska i metrička — i šta svaka pretpostavlja o PDF-u.
keywords: razmjera, unaprijed zadana, arhitektonska razmjera, inženjerska razmjera, metrička razmjera, odnos, 1/4 inča, 1/8 inča, 1:100, puna veličina
from: 31ac0000
---

Lista {{ui:Unaprijed zadana}} u grupi {{ui:Razmjera}} ima 32 razmjere u tri grupe. Unaprijed zadana razmjera postavlja razmjeru otvorenog lista tačno.

Svaka unaprijed zadana razmjera pretpostavlja da je stranica PDF-a stvarna veličina papira za koji je crtež napravljen: jedan inč na stranici PDF-a je jedan inč papira (stranice PDF-a imaju 72 tačke po inču). Ako je PDF promijenjene veličine, koristi {{ui:Kalibriraj}}. Koristi {{ui:Provjeri}} nakon postavljanja bilo koje razmjere. Pogledaj [Postavi razmjeru](topic:set-the-scale).

## Arhitektonska

| Unaprijed zadana | Jedan inč papira iznosi |
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

## Inženjerska

| Unaprijed zadana | Jedan inč papira iznosi |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrička

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Metrički odnos znači da je jedna jedinica na papiru toliko jedinica u stvarnosti: kod `1:100`, 10 mm na stranici je 1 m.

## Kalibrirane razmjere

Kalibrirana razmjera se u traci ispod lista prikazuje kao "Kalibrirano 1" = 4.002' na 24'-6"": realne stope po inču papira i razdaljina koju si upisao. Kad je unutar 0.5% od unaprijed zadane, traka dodaje "(odgovara 1/4" = 1'-0")", a spisak listova prikazuje naziv unaprijed zadane.

## Neobični PDF-ovi

Neki PDF-ovi deklariraju veću jedinicu stranice („user unit“); TakeoffCraft je uzima u obzir za unaprijed zadane razmjere i za prikazanu razmjeru. Stranice zarotirane u PDF-u mjere se isto kao uspravne.
