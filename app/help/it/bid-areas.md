---
title: Aree di offerta
summary: Assegna i segni a un edificio, un piano o una fase, computa un'area alla volta e leggi quantità e costi per ciascuna area.
keywords: variante in aumento, variante in diminuzione, offerta base, varianti, area di offerta, area, edificio, piano, livello, fase, zona, variante, ripartizione, suddivisione, piano tipico, subtotale, per area
from: 64f3d41c
---

Un'**area di offerta** è una parte dei lavori che si prezza a sé: un edificio, un piano, una fase, un'ala. Ogni segno può stare in un'area di offerta. Le quantità e il computo possono quindi essere letti per ciascuna area, con un subtotale per ciascuna, mentre il totale dei lavori resta la somma di tutto.

## Creare un'area di offerta

1. In cima al pannello {{ui:Voci}}, aprire l'elenco {{ui:Area di offerta}}.
2. Scegliere **Nuova area di offerta…**, scrivere un nome come "Edificio A" o "Livello 2", e scegliere **Crea**.
   La nuova area diventa quella corrente. La barra di stato dice "I nuovi segni vanno in (nome). I segni delle altre aree di offerta sono attenuati."

## Computare in un'area

Mentre un'area di offerta è scelta nell'elenco, ogni nuovo segno vi entra: tratti, aree, cerchi, conteggi, i segni aggiunti da {{ui:Conteggio automatico}} e ciò che viene incollato. I segni nelle altre aree di offerta e quelli in nessuna area sono attenuati sulla tavola, così si vede cosa appartiene dove.

Scegliere **Nessuna area di offerta** nell'elenco per computare senza area; in quel caso nulla viene attenuato.

:::tip
Piani tipici: computare il Livello 2, selezionare i suoi segni ({{key:Mod+A}} sulla tavola), copiarli, scegliere Livello 3 nell'elenco e incollare. Le copie entrano nel Livello 3. Quando i piani sono uguali e non serve tenerli separati, un [gruppo tipico](topic:typical-groups) conta invece più volte un piano.
:::

## Spostare segni in un'altra area

Selezionare un segno o più segni ({{key:Shift}} + clic, oppure {{key:Mod+A}}). Sotto **Segno selezionato** (o **Segni selezionati**), scegliere l'area nel campo {{ui:Area di offerta}}. La barra di stato dice "3 segni spostati in Livello 2." È un solo passo di annullamento.

## Rinominare, riordinare o eliminare

Scegliere **Gestisci aree di offerta…** nell'elenco. Scrivere sopra un nome per rinominarlo, usare le frecce per cambiare l'ordine (le tabelle e la cartella di lavoro lo seguono), oppure eliminarne una con il cestino. Eliminare un'area di offerta mantiene i suoi segni, che si trovano così in nessuna area di offerta. {{key:Mod+Z}} annulla ogni modifica.

## Leggere le quantità per area

Nella tabella {{ui:Quantità}}, scegliere {{ui:Per area}} (compare quando il computo ha un'area di offerta). Ogni area elenca le voci che contiene, con quantità, unità e totale, poi una riga di subtotale. I segni in nessuna area di offerta vengono per ultimi, come **Nessuna area di offerta**. Fare clic su una riga di voce evidenzia la voce e rende quell'area quella corrente.

Le composizioni sono calcolate per ciascuna area a partire dai totali di quell'area. Una formula che arrotonda per eccesso, come `ceil(L / 4)`, può dare quindi un po' di più sommando le aree che per l'intero lavoro, come accadrebbe in un'offerta prezzata area per area.

## Varianti: offerta base più aggiunte e detrazioni

Un'area di offerta può essere una **variante**: un lavoro che il committente può aggiungere all'offerta, o togliere da essa. In **Gestisci aree di offerta…**, ogni area ha un elenco accanto al nome:

| Scelta | Cosa fa |
|---|---|
| {{ui:Offerta base}} | Nell'offerta, come di consueto. |
| {{ui:Variante in aumento}} | Prezzata a sé e **esclusa dall'offerta base**: un upgrade della moquette, una pensilina in più. |
| {{ui:Variante in diminuzione}} | Nell'offerta base, e proposta come detrazione: "elimina la pensilina". |

Computare il lavoro di una variante nella sua area di offerta come ogni altra area. Una volta che il computo ha una variante:

- L'intestazione della tabella {{ui:Quantità}} dice **Offerta base** invece di Totale del lavoro: l'intero computo senza le varianti in aumento.
- {{ui:Per area}} termina con l'offerta base e una riga per variante: **+$300.00** per un'aggiunta, **−$1,050.00** per una detrazione.
- Una variante prezza solo le voci che hanno segni in essa, con le loro composizioni, così una parte di composizione di un'altra voce non vi si infiltra.

Nelle esportazioni, il CSV termina con l'offerta base e le varianti, e la cartella di lavoro ottiene un foglio **Varianti**: l'offerta base, le voci di ciascuna variante e la sua variazione, e l'offerta base con tutte le varianti in aumento tolte.

## Nell'esportazione

{{ui:XLSX}} aggiunge un foglio **Per area di offerta**: le voci e i componenti di ciascuna area con quantità, quantità con sfrido, materiali, manodopera e totale, un subtotale per area (una formula `SUM`) e **Tutte le aree di offerta** alla fine. Il foglio **Segni** ottiene una colonna **Area di offerta**. Un computo senza aree di offerta si esporta come prima. Vedere [Colonne di esportazione](topic:export-columns).

Le aree di offerta sono salvate nel file di progetto insieme ai segni.
