---
title: Esportare il preventivo e un PDF segnato
summary: Scaricare il preventivo come cartella di lavoro XLSX con formule attive o come CSV, e copie dei PDF con il computo disegnato.
keywords: proposta, riepilogo offerta, esporta, xlsx, foglio di calcolo, cartella di lavoro, csv, pdf segnato, stampa computo, rapporto, condividi, invia, legenda
from: 334f89c7
---

Le esportazioni sono download. Vengono create sul proprio computer a partire dal computo e dai PDF aperti; non viene inviato nulla.

## Il preventivo come foglio di calcolo (XLSX)

1. Aprire il menu {{ui:Esporta}} nella barra degli strumenti e scegliere {{ui:XLSX}}.
   Il browser scarica `(nome).xlsx`. La barra di stato indica "Esportato (nome).xlsx (preventivo con formule attive, per tavola, segni, scale)." e mostra un avviso quando il preventivo è incompleto.
2. Aprirlo nel proprio programma di fogli di calcolo.

La cartella di lavoro contiene quattro fogli, più i rapporti seguenti quando si applicano:

| Foglio | Contenuto |
|---|---|
| Preventivo | Una riga per voce e per componente: quantità, sfrido, quantità con sfrido, prezzi unitari, materiale, manodopera, totale, note. Il totale del lavoro in fondo. |
| Per tavola | La quantità di ogni voce su ogni tavola, con il numero di segni. |
| Segni | Ogni segno: tavola, voce, tipo, quantità e dettaglio (lunghezze dei segmenti, superfici lorde e dei vuoti, perimetro). |
| Scale | Ogni tavola che ha una scala o dei segni: la sua scala, come è stata impostata (preimpostata, o calibrata su quale distanza), e piedi per unità PDF. |
| Riepilogo computo | Quantità di ogni voce, numero CSI, segni e tavole, senza prezzi. |
| Elenco dei materiali | Ogni parte delle composizioni sommata su tutto il computo (la stessa parte usata da più voci è una riga sola), con sfrido e costo dei materiali, e le voci che la usano. |
| Richiesta di quotazione | L'elenco dei materiali da inviare a un fornitore: quantità con sfrido, una colonna di prezzi unitari vuota, e importi e totale che si completano man mano che i prezzi vengono digitati. |
| Per divisione | Materiale, manodopera e totale per divisione CSI MasterFormat, quando le voci hanno un {{ui:Numero CSI}}. |

Con un [riepilogo dell'offerta](topic:bid-summary), il foglio Preventivo termina anche con i suoi ricarichi (onere della manodopera, IVA, spese generali, utile, cauzione e offerta), come formule attive.

Il foglio Preventivo mantiene **formule attive**: quantità con sfrido, importi arrotondati di materiale e manodopera, totale di ogni riga e totale del lavoro. I programmi di fogli di calcolo le ricalcolano, quindi si può modificare un prezzo o lo sfrido nel foglio e i totali seguono. I numeri calcolati da TakeoffCraft sono memorizzati anche nelle celle, e coincidono al centesimo.

La colonna Note elenca la formula di ogni componente, gli errori di formula, i segni su tavole senza scala, la superficie di parete e il perimetro. Quando qualcosa è stato escluso, la riga del totale del lavoro indica "Incompleto: vedere le note sopra".

La cartella di lavoro è stata verificata in LibreOffice Calc, che ha ricalcolato gli stessi totali. Non è ancora stata aperta in Excel. I dettagli colonna per colonna sono in [Colonne di esportazione](topic:export-columns).

## Il preventivo come CSV

Aprire il menu {{ui:Esporta}} e scegliere {{ui:CSV}}. Si ottiene `(nome).csv`: le stesse righe e colonne del foglio Preventivo, come valori semplici (senza formule), e il totale del lavoro. Serve per incollarlo in un altro sistema di computo o di contabilità.

Il CSV contiene solo il preventivo; per quantità per tavola ed elenco dei segni, usare XLSX. {{ui:Elenco dei materiali}} nello stesso menu salva da solo l'elenco dei materiali come CSV, per gli ordini.

## Il preventivo in Google Sheets

Sopra la tabella delle quantità, **Copia per Google Sheets** mette il preventivo negli Appunti come testo separato da tabulazioni, con le stesse righe del CSV. In un foglio Google, fare clic sulla cella A1 e incollare. TakeoffCraft non accede a Google e non invia nulla.

## Prezzi mancanti e approvazione

Una riga con una quantità e senza prezzo indica **Nessun prezzo** nelle sue Note, e l'esportazione la conta nei totali. Quando il preventivo è stato approvato, l'esportazione indica chi lo ha approvato, quando e per quale totale. Vedere [Prezzi mancanti e approvazione del preventivo](topic:sign-off-the-estimate).

## Un PDF segnato

1. Aprire i PDF di cui si vogliono disegnare i segni.
2. Aprire il menu {{ui:Esporta}} e scegliere {{ui:PDF segnato}}.
   Compare "Scrittura del PDF segnato…", poi il browser scarica un file per ogni PDF segnato, chiamato `(nome PDF) (computo).pdf`.

Nella copia:

- le corse sono disegnate come linee del colore della loro voce,
- le superfici sono riempite leggermente con un contorno continuo, e i vuoti restano aperti,
- i conteggi sono punti,
- ogni pagina con segni riceve una piccola legenda nell'angolo in basso a sinistra: colore, nome e quantità di ogni voce su quella pagina.

I PDF originali non vengono modificati.

Note:

- Vengono scritti solo i PDF aperti. I segni su PDF non aperti restano nei totali ma non vengono disegnati; aprire prima quei PDF.
- I nomi nella legenda usano un carattere PDF standard. I caratteri che non può mostrare vengono stampati come "?".
- Un PDF cifrato non può essere copiato con i segni: "Questo PDF è protetto da password o cifrato, quindi non è possibile scrivere una copia segnata. Il computo è a posto; esportare invece il foglio di calcolo."
- Il primo {{ui:PDF segnato}} in una scheda carica lo scrittore PDF. Offline, è disponibile solo se la barra dell'app mostra {{ui:Pronto per l'uso offline}}; vedere [Lavorare offline](common:offline).

:::chromium
Con più PDF segnati, Chrome ed Edge possono chiedere una volta se questo sito può scaricare più file. Scegliere Consenti, altrimenti si ottiene solo il primo file.
:::

## Niente da esportare?

- {{ui:XLSX}} e {{ui:CSV}} richiedono almeno una voce: "Nulla da esportare: creare una voce e misurarla."
- {{ui:PDF segnato}} richiede segni su un PDF aperto: "Nessun segno sui PDF aperti."

## Salvare anche il computo

Un'esportazione è un rapporto. Per continuare a lavorare sul computo in seguito, scegliere anche {{ui:Salva computo}}: vedere [Salvare e riaprire un computo](topic:save-and-reopen).

Per aggiungere spese generali, utile, imposte e cauzione e inviare una proposta, vedere [Riepilogo dell'offerta e proposta](topic:bid-summary).
