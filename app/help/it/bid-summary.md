---
title: Riepilogo offerta e proposta
summary: Aggiungi oneri sul lavoro, imposta sulle vendite, spese generali, utile e garanzia alla stima, scrivi inclusioni ed esclusioni e scarica un PDF della proposta da inviare.
keywords: offerta, oneri sul lavoro, oneri, buste paga, proposta, preventivo, spese generali, utile, ricarico, margine, imposta sulle vendite, garanzia, inclusioni, esclusioni, condizioni, firma, committente, prezzo
from: 3208a561
---

La stima prezza ciò che è stato computato. Il **riepilogo offerta** lo trasforma in un prezzo: aggiunge imposta sulle vendite, spese generali, utile e garanzia, e produce una **proposta in PDF** con le inclusioni ed esclusioni.

Aprirlo da {{ui:Esporta}} › {{ui:Riepilogo offerta e proposta…}}. Tutto ciò è salvato con il computo, e ogni modifica può essere annullata.

## I ricarichi

Scrivere una percentuale in uno dei cinque (lasciare gli altri a 0). Vengono calcolati in quest'ordine, ciascuno sopra ciò che lo precede:

| Riga | Calcolata come |
|---|---|
| Materiali, Manodopera | I totali della stima (l'offerta base quando il computo ha [varianti](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Oneri sul lavoro | % oneri × manodopera: contributi, assicurazioni e benefit sui salari delle squadre. |
| **Costo** | Materiali + manodopera + oneri sul lavoro. |
| Imposta sulle vendite sui materiali | % imposta × materiali. |
| Spese generali | % spese generali × (costo + imposta). |
| Utile | % utile × (costo + imposta + spese generali). |
| Garanzia | % garanzia × tutto ciò che sta sopra. |
| **Offerta** | La somma delle righe. |

Ogni riga è arrotondata al centesimo. La cartella di lavoro mostra le stesse righe sotto il totale del foglio Preventivo, con formule attive. Il riepilogo si aggiorna mentre si scrive: con {{key:Enter}} si applica la percentuale. Ogni variante è mostrata con gli stessi ricarichi sul proprio costo, così il committente vede cosa cambia davvero scegliendola.

## La proposta

Compilare ciò che la proposta deve dire:

- **Progetto** (il nome del computo se vuoto), **A** (il committente) e **Da** (la propria azienda).
- **Inclusioni** ed **Esclusioni**: una per riga; un trattino o un punto elenco iniziale va bene.
- **Condizioni**: testo libero, per esempio "Valida per 30 giorni."
- **Elenca voci e quantità**: l'ambito, voce per voce, con quantità e senza prezzi. Deselezionare per una proposta a corpo.

Scegliere {{ui:PDF della proposta}}. Il PDF (`<takeoff> - proposal.pdf`) riporta la data, il blocco prezzi con ciascun ricarico e l'offerta, le varianti, l'ambito, le inclusioni ed esclusioni, le condizioni, e le righe per firmare e datare. Se alcune quantità non si potevano misurare (una tavola senza scala), lo indica sotto il prezzo.

## Nelle esportazioni

Una volta che il computo ha un riepilogo offerta, il CSV termina con esso e la cartella di lavoro ottiene un foglio **Riepilogo offerta**, con ogni riga, la sua percentuale e il suo importo. Vedere [Esportare il preventivo](topic:export-estimate).
