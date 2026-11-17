---
title: Eenhede
summary: Die eenhede waarin 'n item kan rapporteer, die eenhede wat sy formule-veranderlikes gebruik, en hoe imperiaal en metries meng.
keywords: eenhede, lf, sf, sy, sq, vierkante yard, dakvierkante, akkers, hektaar, meter, vierkante meter, ea, elk, metries, imperiaal, omskakeling, verstekeenheid
from: b7bf0528
---

## Item-eenhede

| Itemsoort | Eenheid | Naam |
|---|---|---|
| Lineêr | LF | lineêre voet (verstek) |
| Lineêr | m | meter |
| Oppervlakte | SF | vierkante voet (verstek) |
| Oppervlakte | SY | vierkante yard |
| Oppervlakte | SQ | dakvierkante (100 vierkante voet) |
| Oppervlakte | ac | akkers |
| Oppervlakte | m² | vierkante meter |
| Oppervlakte | ha | hektaar |
| Telling | EA | elk |

Verander dit met {{ui:Eenheid}} in die item-redigeerder op enige tyd, selfs ná meting; die hoeveelheid word dadelik omgeskakel.

Die {{ui:Eenheid}}-lys wys die eenhede wat in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} aangeskakel is, en altyd die item se eie eenheid. 'n Nuwe item begin in die lengte- of oppervlakte-eenheid wat daar met 'n ster gemerk is, wanneer dit een van die item se eenhede is; anders in LF of SF. Sien [Eenhede, getikte waardes en die eenheidslyste](common:unit-lists).

## Eenhede van die formule-veranderlikes

| Item-eenheid | L, P, H | A |
|---|---|---|
| LF | voet | vierkante voet (muuroppervlakte) |
| m | meter | vierkante meter (muuroppervlakte) |
| SF | voet | vierkante voet |
| SY | voet | vierkante yard |
| SQ | voet | dakvierkante |
| ac | voet | akkers |
| m² | meter | vierkante meter |
| ha | meter | hektaar |

Vir SY-items is `A` in vierkante yard terwyl `P` en `H` in voet bly. 'n Volume van 'n SY-item is `A * 9 * H / 27` kubieke yard; om SF vir plate te gebruik, is eenvoudiger.

## Waar eenhede vasgestel is

Sommige aflesings gebruik altyd voet:

- die lewendige aflesing in die statusbalk terwyl jy teken (voet-duim, SF),
- **Gekose merker** (voet-duim, LF en SF),
- die kontrole-resultaat (voet-duim, met desimale voet en meter),
- segmentlengtes en omtrekke in die sigblad se Merkers-werkblad (voet-duim).

Itemtotale, die {{ui:Hoeveelhede}}-tabel, formules en die Beraming-werkblad gebruik die item se eie eenheid.

## Skale en eenhede is afsonderlik

'n Blad se skaal sê hoe groot die tekening is; 'n item se eenheid sê hoe dit gerapporteer word. 'n Metriese tekening op `1:100` kan in LF opgemeet word, en 'n imperiale tekening in m². Kalibreer aanvaar enige eenheid: `24'-6"`, `7.5 m`, `7500 mm`.

## Presisie

TakeoffCraft meet presies vanaf die punte wat jy klik, insluitend ware boglengtes en oppervlaktes, en rond hoeveelhede nie af nie. Die vertoning rond lengtes af tot 1/16 duim en desimale tot twee plekke. Geld word slegs by die uitgebreide bedrae afgerond, tot die sent.
