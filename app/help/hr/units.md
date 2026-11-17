---
title: Jedinice
summary: Jedinice u kojima stavka može prijaviti, jedinice varijabli formule i kako se imperijalne i metričke jedinice miješaju.
keywords: jedinice, lf, sf, sy, sq, kvadratni jardi, krovni kvadrati, akri, hektari, metri, kvadratni metri, ea, svaki, metrički, imperijalni, pretvorba, zadana jedinica
from: b7bf0528
---

## Jedinice stavke

| Vrsta stavke | Jedinica | Naziv |
|---|---|---|
| Linearno | LF | linearne stope (zadano) |
| Linearno | m | metri |
| Površina | SF | kvadratne stope (zadano) |
| Površina | SY | kvadratni jardi |
| Površina | SQ | krovni kvadrati (100 kvadratnih stopa) |
| Površina | ac | akri |
| Površina | m² | kvadratni metri |
| Površina | ha | hektari |
| Brojanje | EA | svaki |

Promijenite je pomoću {{ui:Jedinica}} u uređivaču stavke u bilo kojem trenutku, čak i nakon mjerenja; količina se odmah pretvara.

Popis {{ui:Jedinica}} prikazuje jedinice uključene u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}}, i uvijek jedinicu same stavke. Nova stavka počinje u jedinici duljine ili površine označenoj zvjezdicom, ako je ona jedna od jedinica stavke; inače u LF ili SF. Vidi [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).

## Jedinice varijabli formule

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

Za stavke u SY, `A` je u kvadratnim jardima, dok `P` i `H` ostaju u stopama. Volumen iz stavke u SY je `A * 9 * H / 27` kubičnih jardi; za ploče je jednostavnije koristiti SF.

## Gdje su jedinice fiksne

Neki očitci uvijek koriste stope:

- uživo očitanje u statusnoj traci dok crtate (stope-palci, SF),
- **Odabrana oznaka** (stope-palci, LF i SF),
- rezultat provjere (stope-palci, s decimalnim stopama i metrima),
- duljine segmenata i opsezi na listu Oznake proračunske tablice (stope-palci).

Ukupne vrijednosti stavki, tablica {{ui:Količine}}, formule i list Procjena koriste jedinicu same stavke.

## Mjerila i jedinice su odvojeni

Mjerilo lista kaže koliko je crtež velik; jedinica stavke kaže kako ga prijaviti. Metrički crtež u `1:100` može se predmjeriti u LF, a imperijalni crtež u m². Kalibracija prihvaća bilo koju jedinicu: `24'-6"`, `7.5 m`, `7500 mm`.

## Preciznost

TakeoffCraft mjeri točno iz točaka na koje kliknete, uključujući stvarne duljine lukova i površine, i ne zaokružuje količine. Prikaz zaokružuje duljine na 1/16 in, a decimale na dva mjesta. Novac se zaokružuje tek kod proširenih iznosa, na cent.
