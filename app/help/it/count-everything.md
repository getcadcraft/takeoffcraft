---
title: Contare tutto il set
summary: Racchiudere una volta la legenda dei simboli e TakeoffCraft conta ogni simbolo in essa su ogni tavola aperta in un'unica esecuzione. Ogni conteggio è un collegamento alla sua tavola, e si verifica prima che venga aggiunto qualcosa.
keywords: conta tutto, legenda, legenda dei simboli, intero set, ogni tavola, tutte le tavole, ogni porta, ogni apparecchio, dispositivi, abaco, simboli, conteggio automatico, set di piani, 200 tavole, livello di corrispondenza, simile
from: adc99744
---

{{ui:Conta tutto}} legge una legenda dei simboli e poi conta ogni simbolo in essa su ogni tavola aperta. È il {{ui:Conteggio automatico}} per un'intera legenda in una volta. È semplice corrispondenza di simboli sulle proprie tavole, non un modello addestrato, e nulla lascia il computer. Verificare i conteggi prima di aggiungerli: è un aiuto, non una garanzia.

## Contare una legenda

1. Aprire i piani. Va bene una legenda su qualsiasi tavola: i simboli con i loro nomi accanto.
2. Scegliere {{ui:Conta tutto}} nella barra degli strumenti.
3. Trascinare un riquadro attorno alla legenda, ai simboli e ai nomi. Un titolo senza un simbolo accanto (LEGENDA SIMBOLI) viene escluso da solo.
   Il pannello elenca ogni simbolo con la sua immagine e il nome stampato accanto. Il nome diventa il nome della voce, quindi rinominarlo qui se si vuole.
4. Deselezionare i simboli che non si vogliono contare. Un simbolo che non può essere cercato (troppo piccolo, o vuoto) dice il motivo.
5. Scegliere {{ui:Conta su N tavole}}. Una barra mostra la tavola in corso di ricerca; {{ui:Annulla}} interrompe l'esecuzione. La pagina resta utilizzabile.

I simboli della legenda stessa non vengono contati sulla sua tavola. Una tavola disegnata a un'altra scala viene cercata alla sua scala, e i simboli vengono trovati anche ruotati di un angolo retto qualsiasi.

## Verificare i conteggi

- Ogni simbolo mostra il suo totale e, sotto, un collegamento per ogni tavola che ne ha ("E-103: 4"). Fare clic su uno per andare a quella tavola. I riscontri sono racchiusi in un riquadro del colore della voce.
- **Fare clic su un riquadro** per escludere quel riscontro. Viene tratteggiato e barrato; fare di nuovo clic per ripristinarlo.
- **Spostare il livello di corrispondenza** (dal 50% al 100%, partendo dal livello delle Impostazioni). Un valore più alto mantiene solo le corrispondenze precise. Il cursore filtra solo ciò che è stato trovato; nulla viene cercato di nuovo.
- Due simboli simili (una presa doppia e una quadrupla) possono corrispondere allo stesso punto. La corrispondenza migliore lo prende e il pannello indica su quanti punti è successo, così si possono verificare.
- Una tavola troppo grande per essere cercata alla dimensione del simbolo viene saltata, e il pannello lo segnala.

## Aggiungerli

Scegliere {{ui:Aggiungi N segni}}. Ogni simbolo diventa una voce di conteggio con un segno su ogni riscontro. Un nome che è già una voce di conteggio è riutilizzato (nulla viene duplicato dove si è già segnato a mano). L'intera esecuzione è un unico passo: {{key:Ctrl+Z}} rimuove tutte le voci e tutti i segni.

Ciò che si accetta alimenta anche {{ui:Appreso}}: i simboli vengono ricordati nel file del computo per la volta successiva.

## Con il proprio assistente

Se si consentono gli assistenti nelle Impostazioni, possono leggere una legenda (legend_open), eseguire il conteggio in background (legend_count_start, poi legend_count_status), leggere i conteggi (legend_count_result) e aggiungerli (legend_count_add, che può prima mostrare in anteprima cosa aggiungerebbe). È la stessa esecuzione che si vede nel pannello.

## Simboli a qualsiasi angolo

Selezionare {{ui:Simboli a qualsiasi angolo}} prima di contare per trovare anche i simboli disegnati a un angolo diverso da un angolo retto (un tassello diagonale per parete, un apparecchio ruotato per seguire un tetto). La ricerca ruota quindi ogni simbolo ogni 15 gradi; un simbolo tondo richiede ancora una sola ricerca, mentre un simbolo non tondo può richiedere fino a sei volte più tempo. Lasciarlo disattivato per i piani disegnati squadrati.

## Note utili

- Richiede simboli disegnati nello stesso modo della legenda. Una legenda disegnata a una dimensione diversa dalle tavole va bene quando le scale delle tavole sono impostate; senza scale, i simboli vengono cercati alla dimensione della legenda.
- Un simbolo attraversato da un muro o da una linea lunga può sfuggire, perché non assomiglia più al disegno della legenda. Verificare i riscontri sulla prima tavola prima di fidarsi del resto.
- Una scansione senza testo funziona comunque: i simboli vengono trovati in base alle loro righe, e i nomi si digitano a mano.
