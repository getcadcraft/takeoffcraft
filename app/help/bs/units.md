---
title: Jedinice
summary: Jedinice u kojima stavka može prijaviti, jedinice koje koriste varijable formule i kako se imperijalne i metričke jedinice mješaju.
keywords: jedinice, lf, sf, sy, sq, kvadratni jardi, krovni kvadrati, akri, hektari, metri, kvadratni metri, ea, svaki, metrički, imperijalni, pretvorba, zadana jedinica
from: b7bf0528
---

## Jedinice stavke

| Tip stavke | Jedinica | Naziv |
|---|---|---|
| Linijski | LF | linearne stope (zadano) |
| Linijski | m | metri |
| Površina | SF | kvadratne stope (zadano) |
| Površina | SY | kvadratni jardi |
| Površina | SQ | krovni kvadrati (100 kvadratnih stopa) |
| Površina | ac | akri |
| Površina | m² | kvadratni metri |
| Površina | ha | hektari |
| Brojanje | EA | komad |

Promijenite je sa {{ui:Jedinica}} u uređivaču stavke bilo kada, čak i nakon mjerenja; količina se odmah pretvara.

Lista {{ui:Jedinica}} prikazuje jedinice uključene u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}}, i uvijek vlastitu jedinicu stavke. Nova stavka počinje u jedinici dužine ili površine označenoj zvjezdicom, kada je to jedna od jedinica stavke; inače u LF ili SF. Vidi [Jedinice, uneseni podaci i liste jedinica](common:unit-lists).

## Jedinice varijabli formula

| Jedinica stavke | L, P, H | A |
|---|---|---|
| LF | stope | kvadratne stope (površina zida) |
| m | metri | kvadratni metri (površina zida) |
| SF | stope | kvadratne stope |
| SY | stope | kvadratni jardi |
| SQ | stope | kvadrati |
| ac | stope | akri |
| m² | metri | kvadratni metri |
| ha | metri | hektari |

Za stavke u SY, `A` je u kvadratnim jardima, dok `P` i `H` ostaju u stopama. Zapremina iz stavke u SY je `A * 9 * H / 27` kubnih jardi; korištenje SF za ploče je jednostavnije.

## Gdje su jedinice fiksne

Neka očitavanja uvijek koriste stope:

- živo očitavanje u statusnoj traci dok crtate (stope-inči, SF),
- **Odabrana oznaka** (stope-inči, LF i SF),
- rezultat provjere (stope-inči, sa decimalnim stopama i metrima),
- dužine segmenata i obimi na listu Oznake tabele (stope-inči).

Ukupni iznosi stavki, tabela {{ui:Količine}}, formule i list Procjena koriste vlastitu jedinicu stavke.

## Razmjere i jedinice su odvojene

Razmjera lista govori koliko je crtež velik; jedinica stavke govori kako se prijavljuje. Metrički crtež u `1:100` može se uzeti u LF, a imperijalni crtež u m². Kalibracija prihvata bilo koju jedinicu: `24'-6"`, `7.5 m`, `7500 mm`.

## Preciznost

TakeoffCraft mjeri tačno iz tačaka na koje kliknete, uključujući stvarne dužine i površine lukova, i ne zaokružuje količine. Prikaz zaokružuje dužine na 1/16 inča, a decimale na dva mjesta. Novac se zaokružuje tek u ukupnim iznosima, na cent.
