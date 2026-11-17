---
title: Conteggio a mano
summary: Fare clic su ogni porta, apparecchio o dispositivo per contarlo, verificare i conteggi e correggere gli errori.
keywords: conteggio, ea, apparecchi, porte, dispositivi, simboli, conta, conteggio con clic, conteggio manuale
from: 594f2980
---

Una voce di conteggio conta gli elementi: porte, apparecchi di illuminazione, prese, apparecchi idraulici. Ogni clic sulla tavola aggiunge un segno di conteggio. Il conteggio non richiede una scala.

## Contare

1. Creare o scegliere una voce di conteggio sotto {{ui:Voci}} (tipo {{ui:Conteggio}}).
2. Scegliere {{ui:Conteggio}} nella barra degli strumenti, oppure premere {{key:C}}.
3. Fare clic su ciascun elemento sulla tavola.
   Ogni clic mette un punto del colore della voce, e il conteggio della voce aumenta di uno.
4. Passare alla tavola successiva ({{key:PageDown}}) e continuare a contare. Lo strumento resta su {{ui:Conteggio}}.
5. Premere {{key:Esc}} quando si è finito. TakeoffCraft torna su {{ui:Seleziona}}.

Il trascinamento continua a spostare la vista e la rotella continua a ingrandire mentre si conta, così ci si può spostare sulla tavola senza aggiungere punti.

:::tip
Fare clic sulla voce di conteggio per evidenziarne i punti su ogni tavola. L'elenco delle tavole mostra quanti ce ne sono su ciascuna, il che aiuta a trovare le tavole non ancora contate.
:::

## Correggere un conteggio

- **Rimuovere un punto**: scegliere {{ui:Seleziona}} ({{key:V}}), fare clic sul punto e premere {{key:Delete}} oppure scegliere {{ui:Elimina segno}}. Oppure premere {{key:Mod+Z}} subito dopo un clic sbagliato.
- **Spostare un punto**: selezionarlo, poi trascinarlo.
- **Contato sotto la voce sbagliata**: selezionare il punto e scegliere la voce di conteggio giusta nell'elenco **Voce** sotto **Segno selezionato**.

## Dimensione dei punti, a schermo e nel PDF

I punti mantengono la stessa dimensione a schermo, qualunque sia lo zoom. Per cambiarla, aprire {{ui:Impostazioni}}, la scheda TakeoffCraft, e scegliere **Dimensione del segno di conteggio**: Extra piccolo, Piccolo, Medio (predefinito) o Grande.

L'esportazione PDF ({{ui:Esporta}} › il PDF segnato) disegna ogni punto alla stessa dimensione sulla carta, qualunque sia la dimensione della tavola: un visualizzatore che mostra il PDF al 100% mostra i punti grandi quanto sono a schermo. Dove i punti di una tavola si toccherebbero ancora, l'esportazione li rende più piccoli su quella tavola, così ognuno resta leggibile.

## Molti simboli identici

Per un simbolo che si ripete molte volte su una tavola, provare il [Conteggio automatico](topic:auto-count): racchiudere un esempio, verificare cosa trova e aggiungerli tutti in un unico passo.

## Usare i conteggi nelle formule

La quantità di una voce di conteggio è **N**. Le componenti di una composizione possono usarla, per esempio cerniere `N * 3` per le porte. Consultare [Composizioni e formule](topic:assemblies).
