---
title: Misurare tratti lineari
summary: Ricavare muri, tubazioni, finiture e altre lunghezze come tratti, con segmenti rettilinei, archi e aggancio a 45 gradi con Shift.
keywords: lineare, lunghezza, tratto, polilinea, muri, lf, piedi lineari, arco, curva, 45 gradi, ortho, snap, segmenti, polylength, detrai, apertura, porta, spazio, digita, digitato, coordinate, distanza, distanza diretta, polare
from: c669deff
---

Una voce lineare misura una lunghezza. Ogni tratto è una catena di punti: segmenti rettilinei, e archi dove si attiva la modalità arco. Una voce può avere un numero qualsiasi di tratti su un numero qualsiasi di tavole.

Prima di cominciare: la tavola deve avere una scala ([Imposta la scala](topic:set-the-scale)) e serve una voce lineare ([Creare voci del computo](topic:create-items)).

Su un PDF vettoriale, i clic si agganciano alle linee del disegno: estremi, punti medi e incroci ([Agganciare alle linee del disegno](topic:snap-to-the-drawing); {{key:F3}} lo disattiva).

## Disegnare un tratto

1. Fare clic sulla voce lineare sotto {{ui:Voci}}.
2. Scegliere {{ui:Lineare}} nella barra degli strumenti, oppure premere {{key:L}}.
3. Fare clic sull'inizio del tratto.
4. Fare clic su ciascun angolo lungo il tratto.
   La barra di stato mostra "Lunghezza" (il tratto finora, fino al puntatore) e "segmento" (il segmento che si sta disegnando), in piedi e pollici.
5. Terminare il tratto: fare doppio clic sull'ultimo punto, premere {{key:Enter}}, oppure fare clic destro.
   Il tratto viene disegnato con il colore della voce e diventa il segno selezionato. La lunghezza della voce nell'elenco {{ui:Voci}} e nella tabella {{ui:Quantità}} aumenta.

Lo strumento resta su {{ui:Lineare}}, così si può iniziare subito il tratto successivo. Premere {{key:Esc}} per tornare a {{ui:Seleziona}}.

Durante il disegno:

- {{key:Backspace}} (o {{key:Delete}}) rimuove l'ultimo punto.
- {{key:Esc}} scarta il tratto non terminato.
- Trascinare sposta la vista e la rotella ingrandisce, senza aggiungere punti.

:::mac
Su un trackpad Mac, il clic destro è un clic a due dita (attivare il clic secondario in Impostazioni di Sistema, sotto Trackpad). TakeoffCraft legge solo il pulsante secondario, quindi un Control-clic può essere considerato un clic semplice e aggiungere un punto. Doppio clic o {{key:Enter}} terminano sempre.
:::

:::touch
Su uno schermo touch, toccare per posizionare i punti, trascinare con un dito per spostare la vista e pizzicare con due dita per ingrandire. Per terminare, tenere premuto a lungo, toccare due volte, oppure usare {{ui:Fine}} nella barra sotto la tavola ({{ui:Posteriore}} riprende l'ultimo punto). Vedere [Risoluzione dei problemi](topic:troubleshooting#touch-screens).
:::

## Linee rettilinee a passi di 45°

Tenere premuto {{key:Shift}} mentre si posiziona un punto. Il segmento dall'ultimo punto si aggancia alla direzione di 0°, 45°, 90° o 135° più vicina, mantenendo la lunghezza trascinata lungo di essa. La barra di stato lo ricorda: "Shift aggancia a 45°".

In modalità arco vale per il punto in cui termina l'arco: la corda dell'arco va a passi di 45° dal punto di partenza. Il punto che si clicca sulla curva non viene mai agganciato.

## Archi e muri curvi

1. Mentre si disegna un tratto, posizionare il punto in cui inizia la curva.
2. Attivare la modalità arco: scegliere {{ui:Arco}} nella barra degli strumenti oppure premere {{key:R}}. Il pulsante resta premuto.
3. Fare clic su un punto qualsiasi della curva, da qualche parte al centro di essa.
   La barra di stato aggiunge "(arco: fare clic dove termina)" e l'anteprima si piega attraverso il punto scelto.
4. Fare clic dove termina la curva.
   L'arco viene aggiunto. La sua lunghezza è la lunghezza esatta dell'arco, non una serie di corde brevi.
5. Fare clic su un altro punto della curva successiva e sulla sua fine per continuare a disegnare archi, oppure premere di nuovo {{key:R}} per tornare ai segmenti rettilinei.

{{key:Backspace}} o {{key:Esc}} rimuovono prima il punto in sospeso sulla curva; premere di nuovo per rimuovere punti come di consueto.

## Digitare lunghezze e coordinate

Dopo il primo punto, si può digitare dove andrà il successivo invece di fare clic. Digitare una cifra, `@` o `#`: si apre una casella {{ui:Digita}} nella barra di stato con ciò che si è digitato. Premere {{key:Enter}} per posizionare il punto; la casella resta aperta per il successivo.

| Digitazione | Il punto successivo va |
|---|---|
| `12'6"` | a 12'-6" dall'ultimo punto, verso il puntatore (indicare la direzione, poi digitare la lunghezza) |
| `12'6"<45` | a 12'-6" con un angolo di 45°, contato in senso antiorario dalla destra dello schermo (`<90` è in alto, `<-90` in basso) |
| `@6',-4'` | 6' a destra e 4' in basso dall'ultimo punto |
| `6',4'` (o `#6',4'`) | 6' a destra e 4' in alto dal primo punto di questo tratto |

Le lunghezze si digitano come ovunque in TakeoffCraft ([Formati di inserimento](topic:entry-formats)): `12'-6 1/2"`, `12.5` (piedi), `30"`, `3.2 m`. "Destra" e "in alto" sono come si vedono sulla tavola, anche quando la pagina PDF è ruotata.

{{key:Enter}} su una casella vuota termina il tratto, come {{key:Enter}} sulla tavola; {{key:Esc}} chiude la casella e mantiene il tratto in corso. I punti digitati seguono le stesse regole dei clic: detrazioni, archi e chiusura di un'area funzionano tutti. La stessa casella funziona in {{ui:Area}} e {{ui:Vuoto}}; dopo il centro di un cerchio chiede il raggio.

## Detrarre una parte di un tratto

Un tratto di muro che passa una porta o una vetrina può essere disegnato dritto attraverso e contare comunque solo il muro: i segmenti attraverso l'apertura sono **detrazioni**. Vengono disegnati tratteggiati e sottili, e non vengono contati.

Durante il disegno:

1. Posizionare il punto in cui inizia l'apertura.
2. Scegliere {{ui:Detrai}} nella barra degli strumenti oppure premere {{key:E}}. Il pulsante resta premuto e la barra di stato indica che i segmenti successivi sono detrazioni.
3. Fare clic dove termina l'apertura. Il segmento viene disegnato tratteggiato; "Lunghezza" nella barra di stato lo esclude.
4. Premere di nuovo {{key:E}} e proseguire lungo il muro.

Dopo il disegno: selezionare il tratto. Sotto **Segno selezionato**, ogni segmento ha una casella {{ui:Detrai}}: selezionarla per detrarre quel segmento, deselezionarla per contarlo di nuovo. Ogni modifica corrisponde a un'unica operazione di annullamento.

Un tratto mantiene sempre almeno un segmento che conta. Il pannello mostra quindi **Detrazioni** (la lunghezza detratta) e **Disegnato** (l'intero tratto); **Lunghezza**, la quantità della voce, l'area del muro e i costi usano la lunghezza senza le detrazioni. La vista 3D di verifica lascia un vuoto nel muro, il PDF annotato disegna le detrazioni tratteggiate, e il foglio **Segni** esportato le elenca.

Spostare un angolo mantiene le detrazioni. Aggiungere o rimuovere punti (disegnando di nuovo il tratto) parte senza di esse.

## Vedere i dettagli di un tratto

Scegliere {{ui:Seleziona}} ({{key:V}}) e fare clic sul tratto. **Segno selezionato** a destra mostra:

- la voce a cui appartiene (scegliere un'altra voce lineare nell'elenco per spostarlo lì),
- la tavola,
- **Lunghezza** in piedi e pollici e in LF,
- il numero di **Segmenti**, e l'**Area muro** quando la voce ha un'altezza,
- la lunghezza di ciascun segmento, con "(arco)" dopo gli archi, e la sua casella {{ui:Detrai}}.

Sulla tavola, ogni segmento del tratto selezionato è indicato con la sua lunghezza.

## Correggere un tratto

- **Spostare un punto**: selezionare il tratto, poi trascinare uno dei suoi quadratini d'angolo. Tenere premuto {{key:Shift}} per agganciare il segmento spostato a passi di 45°. Un arco mantiene la sua curvatura.
- **Piegare un arco**: un tratto selezionato mostra un quadratino tondo al centro di ogni arco. Trascinarlo: l'arco passa per il punto in cui si rilascia, quindi si incurva di più, di meno, o nell'altra direzione. Se viene trascinato sulla linea retta tra i suoi estremi, diventa un segmento rettilineo. {{key:Mod+Z}} lo annulla ("Piega arco").
- **Eliminare un tratto**: selezionarlo e premere {{key:Delete}}, scegliere {{ui:Elimina}} nel menu {{ui:Altro}} della barra degli strumenti, oppure {{ui:Elimina segno}} nel pannello.
- **Annullare**: {{key:Mod+Z}}; ripristinare con {{key:Mod+Y}}.

Non è ancora possibile inserire un punto a metà di un tratto. Eliminare il tratto e disegnarlo di nuovo.

## Area del muro

Assegnare alla voce lineare un'{{ui:Altezza}} (per esempio `9'-0"`). Viene così riportata l'**Area muro (A)** = lunghezza × altezza, in SF (o m² per una voce metrica), e l'area del muro entra nella colonna delle note dell'esportazione su foglio di calcolo. Usarla nelle composizioni per tavolato, pittura o isolamento: vedere [Composizioni e formule](topic:assemblies).
