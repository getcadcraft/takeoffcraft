---
title: Unapred podešene razmere
summary: Svaka unapred podešena razmera u spisku Unapred podešeno (arhitektonska, inženjerska i metrička) i šta svaka pretpostavlja o PDF-u.
keywords: razmera, unapred podešene, arhitektonska razmera, inženjerska razmera, metrička razmera, odnos, 1/4 inča, 1/8 inča, 1:100, puna veličina
from: 31ac0000
---

Spisak {{ui:Unapred podešeno}} u grupi {{ui:Razmera}} ima 32 razmere u tri grupe. Unapred podešena razmera tačno postavlja razmeru otvorenog lista.

Svaka unapred podešena razmera pretpostavlja da je stranica PDF-a stvarna veličina papira crteža: jedan inč na stranici PDF-a je jedan inč papira (stranice PDF-a imaju 72 tačke po inču). Ako je PDF promenjen po veličini, upotrebite {{ui:Kalibriši}}. Upotrebite {{ui:Proveri}} posle postavljanja bilo koje razmere. Pogledajte [Postavljanje razmere](topic:set-the-scale).

## Arhitektonske

| Unapred podešeno | Jedan inč papira je |
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

## Inženjerske

| Unapred podešeno | Jedan inč papira je |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metričke

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Metrički odnos znači da jedna jedinica na papiru predstavlja toliko jedinica u stvarnosti: pri `1:100`, 10 mm na stranici je 1 m.

## Kalibrisane razmere

Kalibrisana razmera se prikazuje kao „Kalibrisana 1" = 4.002' na 24'-6"" u traci ispod lista: stvarne stope po inču papira i rastojanje koje ste ukucali. Kada je u okviru 0.5% od unapred podešene razmere, traka dodaje „(odgovara 1/4" = 1'-0")”, a spisak listova prikazuje naziv unapred podešene razmere.

## Neobični PDF-ovi

Neki PDF-ovi navode veću jedinicu stranice (takozvana „korisnička jedinica”); TakeoffCraft je uzima u obzir za unapred podešene razmere i za prikazanu razmeru. Stranice zakrenute u PDF-u mere se isto kao uspravne.
