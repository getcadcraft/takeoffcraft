---
title: Unità
summary: Le unità in cui può riportare una voce, le unità usate dalle variabili delle formule e come si mescolano il sistema imperiale e quello metrico.
keywords: unità, lf, sf, sy, sq, iarde quadrate, squadre di copertura, acri, ettari, metri, metri quadrati, ea, cadauno, metrico, imperiale, conversione, unità predefinita
from: b7bf0528
---

## Unità delle voci

| Tipo di voce | Unità | Nome |
|---|---|---|
| Lineare | LF | piedi lineari (predefinita) |
| Lineare | m | metri |
| Area | SF | piedi quadrati (predefinita) |
| Area | SY | iarde quadrate |
| Area | SQ | squadre di copertura (100 piedi quadrati) |
| Area | ac | acri |
| Area | m² | metri quadrati |
| Area | ha | ettari |
| Conteggio | EA | cadauno |

Cambiarla con {{ui:Unità}} nell'editor della voce in qualsiasi momento, anche dopo la misurazione: la quantità viene convertita subito.

La lista {{ui:Unità}} mostra le unità attivate in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}}, e sempre l'unità propria della voce. Una nuova voce parte dall'unità di lunghezza o di area contrassegnata con un asterisco, quando è una delle unità della voce; altrimenti in LF o SF. Vedere [Unità, valori digitati ed elenchi delle unità](common:unit-lists).

## Unità delle variabili delle formule

| Unità della voce | L, P, H | A |
|---|---|---|
| LF | piedi | piedi quadrati (area di parete) |
| m | metri | metri quadrati (area di parete) |
| SF | piedi | piedi quadrati |
| SY | piedi | iarde quadrate |
| SQ | piedi | squadre |
| ac | piedi | acri |
| m² | metri | metri quadrati |
| ha | metri | ettari |

Per le voci SY, `A` è in iarde quadrate mentre `P` e `H` restano in piedi. Un volume da una voce SY è `A * 9 * H / 27` iarde cubiche; per le solette è più semplice usare SF.

## Dove le unità sono fisse

Alcune letture usano sempre i piedi:

- la lettura dal vivo nella barra di stato durante il disegno (piedi-pollici, SF),
- **Segno selezionato** (piedi-pollici, LF e SF),
- il risultato della verifica (piedi-pollici, con piedi decimali e metri),
- lunghezze dei segmenti e perimetri nel foglio Segni del foglio di calcolo (piedi-pollici).

I totali delle voci, la tabella {{ui:Quantità}}, le formule e il foglio Preventivo usano l'unità propria della voce.

## Scale e unità sono separate

La scala di un foglio indica quanto è grande il disegno; l'unità di una voce indica come riportarlo. Un disegno metrico in `1:100` può essere computato in LF, e un disegno imperiale in m². La calibrazione accetta qualsiasi unità: `24'-6"`, `7.5 m`, `7500 mm`.

## Precisione

TakeoffCraft misura esattamente dai punti cliccati, incluse le vere lunghezze e aree degli archi, e non arrotonda le quantità. La visualizzazione arrotonda le lunghezze a 1/16 di pollice e i decimali a due cifre. Gli importi vengono arrotondati solo negli importi estesi, al centesimo.
