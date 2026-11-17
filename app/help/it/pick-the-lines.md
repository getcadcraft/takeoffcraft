---
title: Selezionare le linee del PDF
summary: Fare clic su una linea di un PDF vettoriale per misurarne l'intero percorso collegato, oppure dentro un contorno chiuso per la sua area, con la tolleranza degli spazi visibile e un annullamento per segmento.
keywords: percorso, selezione, linee, collegate, tratta intera, traccia, contorno, perimetro, spazio, tolleranza, ponte, segmenti, tab, vettoriale, area dalle linee, p
from: c22526ae
---

Su un PDF vettoriale muri e bordi sono linee reali. {{ui:Percorso}} ({{key:P}}) le prende come sono disegnate: un clic su una linea misura tutto ciò che le è unito, da un capo all'altro, così non occorre tracciare un muro facendo clic sui suoi angoli. La tavola richiede una scala. Una pagina scansionata non ha linee da selezionare: in quel caso usare [Lineare](topic:measure-linear) o [Area](topic:measure-areas).

## Selezionare un percorso o un contorno

1. Scegliere {{ui:Percorso}}. La linea sotto il puntatore è evidenziata, con gli altri percorsi che potrebbe formare disegnati in modo sottile.
2. Fare clic su una linea: viene selezionato l'intero percorso collegato. La barra sotto la barra degli strumenti indica i segmenti, la lunghezza, la tolleranza degli spazi e quanti spazi sono stati colmati. Un percorso che torna al suo inizio è chiuso e riporta anche il perimetro.
3. Oppure fare clic dentro un contorno chiuso, lontano da qualsiasi linea: il contorno intorno a quel punto viene selezionato come area. Il più piccolo viene per primo; {{key:Tab}} prova il successivo più grande.
4. Premere {{key:Enter}} (oppure fare clic destro, o doppio clic) per aggiungere i segni. Un percorso selezionato diventa un segno di una voce **lineare**, un contorno un segno di una voce **area**: la voce attiva se ha quel tipo, altrimenti la più recente di quel tipo. Se non ci sono voci, si apre il modulo di nuova voce e non si aggiunge nulla finché non si preme di nuovo {{key:Enter}}. Tutto ciò che è stato selezionato viene aggiunto in un solo passo di annullamento.

## La tolleranza degli spazi

I disegnatori lasciano piccoli buchi dove le linee dovrebbero incontrarsi. Due linee si uniscono quando le loro estremità sono più vicine della **tolleranza degli spazi**. Parte da 1.5 punti sulla tavola (indicata in piedi e pollici alla scala della tavola), e un anello tratteggiato di quella larghezza segue il puntatore e si posiziona su ciascuna estremità del percorso sotto di esso. Ogni buco colmato è cerchiato in arancione su un percorso selezionato, e la barra li conta.

{{key:]}} rende la tolleranza più ampia, {{key:[}} più stretta. Un percorso selezionato viene riunito subito alla nuova tolleranza. A una giunzione il percorso prosegue dritto, nel modo che piega meno, e lascia il ramo.

## Tasti

| Tasto o azione | Cosa fa |
|---|---|
| Clic | Seleziona il percorso sotto il puntatore, o il contorno intorno ad esso. |
| {{key:Shift}} + clic | Aggiunge un altro percorso o contorno alla selezione. |
| {{key:Tab}} | Prova il percorso successivo sotto il puntatore, o il contorno successivo più grande. |
| {{key:Backspace}} o {{key:Mod+Z}} | Toglie l'ultimo segmento dell'ultimo percorso selezionato, un segmento alla volta. Un percorso senza più segmenti viene rimosso. Senza nulla di selezionato, {{key:Mod+Z}} è il normale annullamento. |
| {{key:[}} e {{key:]}} | Tolleranza degli spazi più stretta e più ampia. |
| {{key:Enter}} | Aggiunge i segni. |
| {{key:Esc}} | Deseleziona tutto. |

## Da sapere

- Una curva nel disegno è una catena di brevi segmenti rettilinei, quindi la sua lunghezza è appena inferiore all'arco reale. Per un arco esatto, misurare dal file del disegno ([Misurare da un disegno](topic:measure-from-a-drawing)).
- Uno spazio colmato conta come un salto rettilineo attraverso di esso, quindi il perimetro di un contorno chiuso lo include.
- Solo i tratti e i riempimenti nei percorsi della pagina stessa sono linee. Il testo disegnato come lettere, e le immagini, non lo sono.
