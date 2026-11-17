---
title: Carbonio incorporato e una tabella prezzi 5D
summary: Carbonio somma il carbonio incorporato del computo a partire dalla quantità di ogni voce e da una tabella di fattori aperta, e invia le tariffe del computo a BimCraft come tabella prezzi per i costi 5D.
keywords: carbonio, carbonio incorporato, kgco2e, co2, fattori, A1-A3, trasporto, sfrido, 5d, tabella prezzi, costo, bimcraft, EPD
from: f4bff3b8
---

{{ui:Carbonio}} nella barra degli strumenti somma il carbonio incorporato di ciò che è stato misurato, e trasforma le tariffe in una tabella prezzi che il modello dell'edificio può usare. È una stima, non una valutazione.

## Carbonio incorporato

La quantità di ogni voce, con il suo sfrido, viene moltiplicata per una riga della tabella dei fattori. Una riga viene abbinata in base alle parole del nome della voce ("soletta in calcestruzzo" trova una riga con la parola chiave calcestruzzo). La tabella è la stessa tabella aperta usata da BimCraft, quindi un file caricato qui funziona anche là. **Le righe incluse nel programma sono valori di partenza: generici, non verificati e non provenienti da alcuna banca dati.** La finestra lo indica accanto alle cifre; sostituirle con una fonte propria prima di fare affidamento su un numero.

1. Scegliere {{ui:Carbonio}}. Le voci conteggiate sono elencate con i loro chilogrammi di CO2e; il totale è in alto.
2. Spuntare {{ui:A4 trasporto}} o {{ui:A5 scarti di cantiere}} per conteggiare anche quelle fasi, per le righe che ne danno un valore. La fase di produzione è sempre conteggiata.
3. Per usare un'altra riga per una voce, o nessuna, usare l'elenco sulla sua riga.
4. {{ui:Fattori da un file…}} carica una tabella di fattori (JSON o CSV) fatta con una fonte propria; le sue righe sostituiscono le righe di partenza con lo stesso id. {{ui:Fattori (JSON)}} salva la tabella corrente.

Un fattore è per metro, metro quadrato, metro cubo, elemento o chilogrammo. Una misura in piedi o piedi quadrati viene convertita. Un fattore a chilogrammi richiede un volume (yard cubi o metri cubi) e la densità della riga. Una voce la cui misura richiede una quantità che non viene misurata è elencata sotto {{ui:Escluso}} con il motivo, senza essere stimata. Il totale parziale nella barra di stato mostra la stessa cifra.

Le righe dei fattori, le scelte e le fasi conteggiate sono salvate nel file del computo.

## Una tabella prezzi per i costi 5D

{{ui:Prezzi 5D (JSON)}} e {{ui:Prezzi 5D (CSV)}} salvano le tariffe del computo come tabella prezzi: una riga per voce prezzata, con la sua tariffa di materiale e di manodopera per unità e il suo sfrido. Caricarla nel pannello dei costi di BimCraft (Carbonio incorporato e costo 5D) per prezzare le attività del modello dell'edificio con le stesse tariffe che hanno prodotto l'offerta. Le voci misurate in un'unità che la tabella non ha, e le voci senza tariffa, vengono escluse.

## Con l'assistente

Se si consentono gli assistenti in {{ui:Impostazioni}}, possono leggere il carbonio (carbon_check). Il caricamento dei fattori va eseguito manualmente.

## Da sapere

Non viene inviato nulla. Le cifre valgono quanto i fattori caricati.
