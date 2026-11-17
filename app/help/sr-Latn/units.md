---
title: Jedinice
summary: Jedinice u kojima stavka može da prijavi rezultat, jedinice koje koriste promenljive njene formule i kako se imperijalne i metričke jedinice mešaju.
keywords: jedinice, lf, sf, sy, sq, kvadratni jardi, krovni kvadrati, akri, hektari, metri, kvadratni metri, ea, komad, metričke, imperijalne, konverzija, podrazumevana jedinica
from: b7bf0528
---

## Jedinice stavke

| Tip stavke | Jedinica | Naziv |
|---|---|---|
| Linijski | LF | linearne stope (podrazumevano) |
| Linijski | m | metri |
| Površina | SF | kvadratne stope (podrazumevano) |
| Površina | SY | kvadratni jardi |
| Površina | SQ | krovni kvadrati (100 kvadratnih stopa) |
| Površina | ac | akri |
| Površina | m² | kvadratni metri |
| Površina | ha | hektari |
| Prebrojavanje | EA | komad |

Promenite je pomoću {{ui:Jedinica}} u uređivaču stavke u bilo kom trenutku, čak i posle merenja; količina se odmah pretvara.

Lista {{ui:Jedinica}} prikazuje jedinice uključene u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}}, i uvek jedinicu same stavke. Nova stavka počinje u jedinici dužine ili površine označenoj zvezdicom tamo, kada je to jedna od jedinica stavke; inače u LF ili SF. Vidi [Jedinice, unos vrednosti i liste jedinica](common:unit-lists).

## Jedinice promenljivih formule

| Jedinica stavke | L, P, H | A |
|---|---|---|
| LF | stope | kvadratne stope (površina zida) |
| m | metri | kvadratni metri (površina zida) |
| SF | stope | kvadratne stope |
| SY | stope | kvadratni jardi |
| SQ | stope | krovni kvadrati |
| ac | stope | akri |
| m² | metri | kvadratni metri |
| ha | metri | hektari |

Za stavke u SY, `A` je u kvadratnim jardima, dok `P` i `H` ostaju u stopama. Zapremina iz stavke u SY je `A * 9 * H / 27` kubnih jardi; korišćenje SF za ploče je jednostavnije.

## Gde su jedinice fiksirane

Neki prikazi uvek koriste stope:

- uživo očitavanje u statusnoj traci dok crtate (stope-inči, SF),
- **Izabrana oznaka** (stope-inči, LF i SF),
- rezultat provere (stope-inči, sa decimalnim stopama i metrima),
- dužine segmenata i obimi na radnom listu Oznake u tabeli (stope-inči).

Ukupne vrednosti stavki, tabela {{ui:Količine}}, formule i radni list Predračun koriste jedinicu same stavke.

## Razmere i jedinice su odvojene

Razmera lista kaže koliko je crtež velik; jedinica stavke kaže kako se on prijavljuje. Metrički crtež u `1:100` može se predmeriti u LF, a imperijalni crtež u m². Kalibracija prihvata bilo koju jedinicu: `24'-6"`, `7.5 m`, `7500 mm`.

## Tačnost

TakeoffCraft meri tačno iz tačaka na koje kliknete, uključujući prave dužine lukova i površine, i ne zaokružuje količine. Prikaz zaokružuje dužine na 1/16 inča, a decimale na dve decimale. Novac se zaokružuje tek u proširenim iznosima, na cent.
