---
title: Tetti e pendenze
summary: Assegnare a un'area la sua pendenza per misurare la superficie del tetto dalla pianta, e misurare sfondati, displuvi e compluvi lungo la loro inclinazione.
keywords: tetto, pendenza, inclinazione, fattore di pendenza, altezza, proiezione, 6:12, sfondato, displuvio, compluvio, timpano, copertura, squadre, superficie inclinata, lunghezza reale, area in pianta
from: 38225b60
---

Una pianta del tetto mostra ogni falda piana, vista dall'alto. Il tetto vero è più grande: una falda al 6:12 ha circa il 12% di superficie in più rispetto alla sua pianta, e i suoi bordi inclinati sono più lunghi di quanto appaiano. Assegnare alla voce la sua pendenza e TakeoffCraft misura lungo l'inclinazione.

## Digitare una pendenza

La pendenza è l'altezza per ogni 12 di proiezione, come nei simboli di pendenza della pianta del tetto. Digitarla come `6:12`, `6/12` oppure solo `6`; funziona anche un'altra proiezione (`4:10` equivale a 4.8:12). Un angolo funziona con il simbolo dei gradi: `26.57°`. Vuoto oppure `0` indica una falda piana.

## Aree dei tetti

1. Creare una voce di area per la copertura, oppure aprire quella esistente.
2. Nelle sue impostazioni, digitare la **Pendenza**, per esempio `6:12`.
3. Tracciare il contorno di ogni falda sulla pianta con {{ui:Area}}, come di consueto.

Ogni falda conta la sua area in pianta moltiplicata per il fattore di pendenza: √(1 + (altezza ÷ 12)²), cioè 1.118 al 6:12 e 1.414 al 12:12. Selezionare una falda per vedere la sua **Area** (sull'inclinazione), la sua **Area in pianta** e il **Fattore di pendenza**.

Falde con un'altra pendenza: selezionare la falda e digitare la sua **Pendenza** nel suo pannello. Lasciarla vuota per usare quella della voce. La vista di controllo 3D, le composizioni (`A` è la superficie inclinata), i costi e l'esportazione usano tutti la superficie inclinata. Le detrazioni su una falda inclinata, come i lucernari, vengono sottratte alla stessa pendenza.

Il perimetro (`P`) resta il perimetro in pianta. Misurare gronde, sfondati, displuvi e compluvi come tratti (vedere sotto).

## Sfondati, displuvi e compluvi

1. Creare una voce lineare, per esempio "Sfondato" oppure "Displuvi".
2. Impostare il suo **Tipo di pendenza** su **Sfondato** (un bordo inclinato, come quello di un timpano) oppure su **Displuvio o compluvio** (la linea in cui si incontrano due falde), e digitare la **Pendenza** delle falde.
3. Disegnare i tratti sulla pianta con {{ui:Lineare}}.

Uno sfondato conta la sua lunghezza in pianta moltiplicata per il fattore di pendenza. Un displuvio o compluvio corre a 45° attraverso la pianta tra due falde della stessa pendenza, quindi la sua lunghezza reale è la lunghezza in pianta moltiplicata per √(1 + (altezza ÷ 12)² ÷ 2): 1.061 al 6:12, 1.225 al 12:12.

Un tratto può combinare entrambi i tipi. Selezionarlo: ogni segmento nel suo pannello ha un elenco di tipo di pendenza — **Della voce** (l'impostazione della voce), **Piano**, **Sfondato** oppure **Displuvio o compluvio** — e la sua lunghezza lungo l'inclinazione. La **Pendenza** di un tratto nel pannello sostituisce quella della voce per tutti i suoi segmenti. Il pannello mostra anche la **Lunghezza in pianta**, e le etichette sulla tavola indicano le lunghezze lungo l'inclinazione.

Le detrazioni continuano a funzionare: un segmento detratto non conta nulla, inclinato o no.

:::note
Displuvi e compluvi presuppongono che entrambe le falde abbiano la stessa pendenza. Per falde con pendenze diverse, misurare il displuvio con la sua lunghezza reale altrove, oppure disegnarlo come sfondato con una pendenza equivalente.
:::
