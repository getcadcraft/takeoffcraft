---
title: Misurare da un disegno
summary: Ricavare lunghezze e aree dalle linee, archi, polilinee e tratteggi del disegno stesso, selezionandoli, con archi e fori esatti, invece di tracciare con i clic.
keywords: misura disegno, geometria, polilinea, arco, cerchio, tratteggio, bulge, lunghezza esatta, area esatta, seleziona, finestra, traccia, da CAD, lineare, area
from: fd734246
---

{{ui:Misura disegno}} sulla barra della tavola di una tavola DWG o DXF prende gli oggetti del disegno come segni, così non occorre tracciarli con i clic. La lunghezza di una polilinea, la lunghezza di un arco, l'area di un cerchio e l'area di un tratteggio con i suoi fori risultano esatte, dalla stessa aritmetica usata per ogni segno del computo.

## Prendere oggetti come voce lineare o di area

1. Creare o fare clic su una voce **lineare** o di **area** sotto {{ui:Voci}}. La tavola deve avere una scala.
2. Scegliere {{ui:Misura disegno}}.
3. Fare clic sugli oggetti della tavola per selezionarli, oppure trascinare una finestra attorno a essi: vengono selezionati tutti quelli interamente contenuti. {{key:Shift}} aggiunge una finestra a quanto è già selezionato; fare di nuovo clic su un oggetto selezionato lo deseleziona. La barra mostra il totale: "6 tratti: 108'-9 1/8" in totale."
4. Scegliere il pulsante di aggiunta, che indica il numero e la voce, come {{ui:Aggiungi 6 a Edge}} (oppure premere {{key:Enter}}). Ogni oggetto diventa un segno della voce, in un'unica operazione di annullamento. {{key:Esc}} cancella ciò che è stato selezionato.

## Cosa prende ciascun tipo di voce

- Una voce **lineare** prende linee, archi, polilinee, cerchi e spline in base alla lunghezza. Una forma chiusa conta per il suo perimetro. Un tratteggio viene escluso: ha un'area, non una lunghezza, e la barra lo segnala.
- Una voce di **area** prende forme chiuse: polilinee chiuse, cerchi, solidi 2D e tratteggi con i loro fori. I tratti aperti vengono esclusi, e la barra lo segnala.

## Esatto, e quasi esatto

Linee, archi (con qualsiasi bulge), polilinee con bulge e cerchi sono esatti: lunghezze e aree usano il raggio e l'ampiezza dell'arco, non una sua rappresentazione. Ellissi, spline e tratteggi il cui contorno è composto da spigoli vengono misurati per corde di un grado o meno, che è entro un centesimo di percento per le ellissi e un decimo per il resto; la barra indica quanti degli oggetti selezionati sono curve di questo tipo.

## Da dove viene

- **Modello**: oggetti nello spazio modello. **Un layout**: le sue linee e gli oggetti del modello dentro una viewport, scalati attraverso di essa. Un oggetto che attraversa il bordo di una viewport non viene proposto (verrebbe stampato tagliato); un oggetto mostrato da due viewport viene preso una volta sola.
- Solo i layer visibili nella tavola. I blocchi vengono contati, non misurati: vedere [Contare da un disegno](topic:count-from-a-drawing). Polilinee 3D, mesh, solidi e regioni non vengono proposti.
