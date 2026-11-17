---
title: Enote
summary: Enote, v katerih lahko postavka poroča, enote spremenljivk njene formule in kako se angleške in metrične enote mešajo.
keywords: enote, lf, sf, sy, sq, kvadratni jardi, kritine, akri, hektari, metri, kvadratni metri, ea, kos, metrično, angleško, pretvorba, privzeta enota
from: b7bf0528
---

## Enote postavke

| Vrsta postavke | Enota | Ime |
|---|---|---|
| Linijsko | LF | linearni čevlji (privzeto) |
| Linijsko | m | metri |
| Površina | SF | kvadratni čevlji (privzeto) |
| Površina | SY | kvadratni jardi |
| Površina | SQ | kritine (100 kvadratnih čevljev) |
| Površina | ac | akri |
| Površina | m² | kvadratni metri |
| Površina | ha | hektari |
| Štetje | EA | kos |

Spremenite jo z {{ui:Enota}} v urejevalniku postavke kadarkoli, tudi po merjenju; količina se takoj pretvori.

Seznam {{ui:Enota}} prikaže enote, vklopljene v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}}, in vedno enoto same postavke. Nova postavka se začne v dolžinski ali površinski enoti, ki je tam označena z zvezdico, če je to ena od enot postavke; sicer v LF ali SF. Glejte [Enote, vneseni podatki in seznami enot](common:unit-lists).

## Enote spremenljivk formule

| Enota postavke | L, P, H | A |
|---|---|---|
| LF | čevlji | kvadratni čevlji (površina stene) |
| m | metri | kvadratni metri (površina stene) |
| SF | čevlji | kvadratni čevlji |
| SY | čevlji | kvadratni jardi |
| SQ | čevlji | kritine |
| ac | čevlji | akri |
| m² | metri | kvadratni metri |
| ha | metri | hektari |

Pri postavkah SY je `A` v kvadratnih jardih, medtem ko `P` in `H` ostaneta v čevljih. Prostornina iz postavke SY je `A * 9 * H / 27` kubičnih jardov; za plošče je preprosteje uporabiti SF.

## Kje so enote določene

Nekateri prikazi vedno uporabljajo čevlje:

- vrstica stanja med risanjem v živo (čevlji in palci, SF),
- **Izbrana oznaka** (čevlji in palci, LF in SF),
- rezultat preverjanja (čevlji in palci, z decimalnimi čevlji in metri),
- dolžine odsekov in obsegi v listu Oznake preglednice (čevlji in palci).

Vsote postavk, tabela {{ui:Količine}}, formule in list Ocena uporabljajo enoto postavke.

## Merilo in enote sta ločena

Merilo lista pove, kako velika je risba; enota postavke pove, kako jo poročati. Metrično risbo v `1:100` je mogoče izmeriti v LF, angleško risbo pa v m². Kalibracija sprejme poljubno enoto: `24'-6"`, `7.5 m`, `7500 mm`.

## Natančnost

TakeoffCraft meri natančno iz točk, na katere kliknete, vključno z dejanskimi dolžinami in površinami lokov, in količin ne zaokrožuje. Prikaz zaokroži dolžine na 1/16 palca in decimalna mesta na dve. Denar se zaokroži le pri končnih zneskih, na cent.
