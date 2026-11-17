---
title: Eenheden
summary: De eenheden waarin een post kan rapporteren, de eenheden die de formulevariabelen gebruiken, en hoe imperiaal en metrisch samengaan.
keywords: eenheden, lf, sf, sy, sq, vierkante yards, dakvierkanten, acres, hectare, meter, vierkante meter, ea, elk, metrisch, imperiaal, omrekening, standaardeenheid
from: b7bf0528
---

## Eenheden van posten

| Type post | Eenheid | Naam |
|---|---|---|
| Lineair | LF | lineaire feet (standaard) |
| Lineair | m | meter |
| Oppervlakte | SF | vierkante feet (standaard) |
| Oppervlakte | SY | vierkante yards |
| Oppervlakte | SQ | dakvierkanten (100 vierkante feet) |
| Oppervlakte | ac | acres |
| Oppervlakte | m² | vierkante meter |
| Oppervlakte | ha | hectare |
| Telling | EA | elk |

Wijzig hem met {{ui:Eenheid}} in de postbewerker op elk moment, ook na het meten; de hoeveelheid wordt meteen omgerekend.

De lijst {{ui:Eenheid}} toont de eenheden die aan staan in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}}, en altijd de eigen eenheid van de post. Een nieuwe post begint in de lengte- of oppervlakte-eenheid die daar met een ster is aangegeven, wanneer die een eenheid van de post is; anders in LF of SF. Zie [Eenheden, ingetypte waarden en de eenheidslijsten](common:unit-lists).

## Eenheden van de formulevariabelen

| Eenheid van post | L, P, H | A |
|---|---|---|
| LF | feet | vierkante feet (wandoppervlak) |
| m | meter | vierkante meter (wandoppervlak) |
| SF | feet | vierkante feet |
| SY | feet | vierkante yards |
| SQ | feet | dakvierkanten |
| ac | feet | acres |
| m² | meter | vierkante meter |
| ha | meter | hectare |

Voor SY-posten staat `A` in vierkante yards, terwijl `P` en `H` in feet blijven. Een volume van een SY-post is `A * 9 * H / 27` kubieke yards; voor vloeren is SF eenvoudiger.

## Waar de eenheden vastliggen

Sommige weergaven gebruiken altijd feet:

- de live weergave in de statusbalk tijdens het tekenen (feet-inches, SF),
- **Geselecteerde markering** (feet-inches, LF en SF),
- het resultaat van de controle (feet-inches, met decimale feet en meter),
- segmentlengtes en omtrekken in het werkblad Markeringen van de spreadsheet (feet-inches).

Totalen per post, de tabel {{ui:Hoeveelheden}}, formules en het werkblad Raming gebruiken de eigen eenheid van de post.

## Schaal en eenheden zijn gescheiden

De schaal van een blad zegt hoe groot de tekening is; de eenheid van een post zegt hoe die gerapporteerd wordt. Een metrische tekening op `1:100` kan in LF worden opgemeten, en een imperiale tekening in m². Ijken accepteert elke eenheid: `24'-6"`, `7.5 m`, `7500 mm`.

## Nauwkeurigheid

TakeoffCraft meet exact vanuit de punten die u aanklikt, inclusief de werkelijke booglengten en oppervlakken, en rondt hoeveelheden niet af. In de weergave worden lengten afgerond op 1/16 inch en decimalen op twee decimalen. Geld wordt alleen afgerond bij de uitgewerkte bedragen, op de cent.
