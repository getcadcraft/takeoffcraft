---
title: Pacchetti d'offerta e comparazione delle offerte
summary: Dividi il computo in pacchetti per lavorazione, invia l'ambito di ogni pacchetto ai subappaltatori, confronta le offerte che tornano sullo stesso ambito e usa l'offerta scelta come prezzo del pacchetto.
keywords: comparazione offerte, comparazione, pacchetto d'offerta, subappaltatore, offerta di subappalto, ambito, integrazione, lavorazione, divisione CSI, confronta offerte, offerta più bassa, prospetto delle offerte, offerente, aggiudicazione, offerta scelta, usa un'offerta, prezzo di subappalto
from: 856b3088
---

Un appaltatore generale invia l'ambito di ogni lavorazione ai subappaltatori e confronta ciò che torna. TakeoffCraft fa entrambe le cose dal computo: aprire {{ui:Esporta}} › {{ui:Pacchetti d'offerta e comparazione…}}.

## Pacchetti

C'è un pacchetto per ogni divisione CSI usata dalle voci (le prime due cifre del {{ui:Numero CSI}} di una voce, vedere [Creare voci di computo](topic:create-items)). Le voci senza numero formano un pacchetto a sé. Ogni pacchetto mostra le sue voci, quante tavole contengono i suoi segni e il costo proprio di esso (materiali e manodopera prima dei ricarichi, dall'offerta base).

Scegliere {{ui:CSV dell'ambito}} per scaricare ciò da inviare a un subappaltatore: ogni voce con il suo numero CSI, quantità, unità e le tavole su cui si trova. Non contiene prezzi. Per i fornitori di materiali, la cartella di lavoro ha la richiesta di preventivo con l'elenco delle parti (vedere [Esportare il preventivo](topic:export-estimate)).

## Inserire le offerte

1. Nella riga vuota sotto il pacchetto, scrivere il nome dell'offerente e l'importo dell'offerta, poi scegliere {{ui:Aggiungi l'offerta}}.
2. Se un'offerta esclude parte dell'ambito, aprire il suo elenco {{ui:Escluso}} e spuntare quelle voci.
3. Per correggere un nome o un importo, scriverci sopra nella tabella; il pulsante × elimina un'offerta.

Ogni modifica è un passo che {{key:Mod+Z}} annulla, e le offerte vengono salvate con il computo.

## Come vengono comparate le offerte

Le offerte raramente coprono lo stesso ambito. La comparazione aggiunge a ogni voce esclusa un'**integrazione** al costo proprio, così ogni offerta viene confrontata sull'intero pacchetto:

**Comparata = l'offerta + le integrazioni**

L'offerta comparata più bassa è contrassegnata **Più bassa**; in caso di parità, quella inserita per prima. **Rispetto al nostro costo** è l'offerta comparata meno il costo proprio del pacchetto: negativo significa sotto di esso. Un'offerta che sembra la più bassa può perdere una volta contato l'ambito mancante.

La cartella di lavoro ottiene un foglio **Comparazione offerte** con ogni pacchetto che ha offerte: la stima propria, ogni offerta, le sue integrazioni, il totale comparato e la differenza, come formule attive, e cosa ha escluso ogni offerta.

## Usare un'offerta come prezzo del pacchetto

Scegliere {{ui:Usa}} su un'offerta e diventa il prezzo dell'intero pacchetto nella stima: la prezzatura propria del pacchetto (le voci, le loro condizioni accessorie e le parti di composizione) esce dal totale dei lavori, le voci restano come quantità con le proprie tariffe per riferimento, e una riga, **Offerta scelta**, riporta l'importo dell'offerta. Le voci che l'offerta esclude restano al costo proprio, che è ciò che la comparazione aveva già contato come integrazione. Scegliere un'altra offerta, oppure scegliere di nuovo la stessa per toglierla; ciascuna è un passo che {{key:Mod+Z}} annulla.

Nel riepilogo offerta le offerte di subappalto sono una riga dentro il costo: spese generali, utile e garanzia si aggiungono sopra di esse come ogni altro costo; imposta sulle vendite (solo sui materiali) e oneri sul lavoro (sulla manodopera) no. Il foglio Preventivo della cartella di lavoro riporta l'offerta scelta in una riga propria, e il blocco dei ricarichi la somma, con formule attive. L'elenco dei materiali esclude il materiale di un pacchetto aggiudicato, perché lo fornisce il subappaltatore.

Un pacchetto dentro l'area di offerta di una variante non viene riprezzato: varianti e subtotali delle aree usano ancora i prezzi propri.

## Offerte che tornano via email

Non occorre digitare le offerte. {{ui:Invia per le offerte…}} sotto un pacchetto invia a ciascun subappaltatore un link a una pagina dove digita un prezzo per ogni riga; {{ui:Ottieni i prezzi}} porta in questa tabella ciò che hanno inviato. Vedere [Inviare un pacchetto per le offerte](topic:bid-invitations).

:::note
Digitare un'offerta a mano funziona ancora, e un'offerta digitata a mano e una dal sito stanno una accanto all'altra. Le offerte arrivate dal sito sono contrassegnate **web** (o **web, in ritardo** se arrivate dopo la scadenza); il loro prezzo cambia solo quando l'offerente invia una nuova versione, quindi le modifiche fatte a mano restano fino ad allora.
:::
