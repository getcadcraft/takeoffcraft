---
title: Conteggio automatico di un simbolo
summary: Racchiudere un simbolo in un riquadro, far trovare a TakeoffCraft gli altri su questa tavola o su tutte le tavole aperte, rivedere le corrispondenze con il cursore e aggiungerle in un solo passaggio.
keywords: qualsiasi angolo, ruotato, girato, altra scala, scala diversa, conteggio automatico, conteggio automatizzato, ricerca simboli, trova simboli, motivo, modello, corrispondenza, rilevare, strumento di conteggio
from: fa68a6c1
---

{{ui:Auto count}} trova ogni copia di un simbolo dopo che se ne racchiude una in un riquadro. Poi si rivedono le corrispondenze sulla tavola e si aggiungono quelle accettate come segni di conteggio. È uno strumento di supporto, non una garanzia: rivedere sempre prima di aggiungere.

## Trovare i simboli

1. Creare o fare clic su una voce di conteggio in {{ui:Items}}.
2. Aprire una tavola in cui compare il simbolo.
3. Scegliere {{ui:Auto count}} nella barra degli strumenti oppure premere {{key:S}}.
   Compare una barra in alto nella tavola: "Trascina un riquadro intorno a un simbolo su questa tavola."
4. Per cercare su tutte le tavole aperte, non solo su questa, spuntare {{ui:Search all open sheets}}.
5. Ingrandire per vedere bene il simbolo, poi trascinare un riquadro stretto intorno a una copia. Includere l'intero simbolo; la carta bianca intorno viene esclusa.
   La barra mostra "Ricerca in corso…" con una barra di avanzamento e un pulsante {{ui:Cancel}}. La pagina resta reattiva: è possibile ingrandire, spostare la vista (pan) e passare da una tavola all'altra. Scegliere un altro strumento o premere {{key:Esc}} annulla la ricerca.
6. Al termine, le corrispondenze compaiono sulla tavola come riquadri nel colore della voce, e la barra mostra un riepilogo come "22 corrispondenze, 19 da aggiungere (3 già contate). Fare clic su un riquadro per rifiutarlo o ripristinarlo."

In {{ui:Auto count}}, trascinare sulla tavola disegna un riquadro invece di spostare la vista. Per spostare la vista, tenere premuto {{key:Space}} e trascinare, oppure trascinare con il pulsante centrale del mouse.

## Rivedere le corrispondenze

- **Fare clic su un riquadro** per rifiutarlo. Un riquadro rifiutato è tratteggiato e barrato. Fare di nuovo clic per ripristinarlo.
- **Spostare il cursore {{ui:Match}}** (dal 50% al 95%, partendo dal 75%). Un valore più alto mostra solo le corrispondenze precise; uno più basso mostra quelle meno precise. Il cursore filtra solo ciò che è stato trovato; non esegue una nuova ricerca.
- **Già contato**: le corrispondenze in un punto che ha già un segno di conteggio di questa voce partono come rifiutate, così nulla viene contato due volte.
- **Altre tavole**: quando si è cercato su tutte le tavole aperte, passare da una tavola all'altra con l'elenco delle tavole o con {{key:PageDown}} e rivedere ciascuna. Il riepilogo indica quante tavole hanno corrispondenze.

## Aggiungerle

Scegliere {{ui:Add}}. Il pulsante indica quante sono, per esempio "Aggiungi 19 segni".
I segni di conteggio vengono aggiunti al centro di ogni riquadro accettato: "Aggiunti 19 segni di conteggio a "Duplex receptacle". Ctrl+Z li rimuove tutti."

L'intero gruppo è un'unica azione di annullamento, quindi {{key:Mod+Z}} lo rimuove in una volta.

Per interrompere la revisione senza aggiungere nulla, scegliere {{ui:Discard}} oppure premere {{key:Esc}}. Anche scegliere un altro strumento scarta la revisione.

## Che cosa trova e che cosa non trova

TakeoffCraft confronta il disegno, come pixel, con il simbolo racchiuso nel riquadro.

- Trova il simbolo ruotato di 0°, 90°, 180° e 270°. Per trovarlo anche a qualsiasi angolo, spuntare {{ui:Any angle (slower)}} sulla barra del conteggio automatico prima di disegnare il riquadro: prova ogni 15°, poi affina ogni risultato fino a un grado e mezzo. Richiede circa sei volte più tempo. Non trova un simbolo specchiato (a meno che il simbolo non appaia uguale anche specchiato).
- Con {{ui:Search all open sheets}} spuntato, una tavola a un'altra scala viene cercata alla dimensione che il simbolo ha lì: un apparecchio disegnato in scala su una pianta 1/8" è la metà della dimensione che ha su una pianta 1/4" e viene comunque trovato. Una tale tavola viene cercata anche alla dimensione del riquadro, per le etichette e i simboli stampati alla stessa dimensione su ogni tavola. Questo richiede una scala su entrambe le tavole; una tavola senza scala viene cercata solo alla dimensione del riquadro.
- Simboli molto simili possono corrispondere tra loro: una presa duplex e una quadrupla, oppure due etichette di apparecchi che differiscono per una lettera. Spostare il cursore più in alto finché restano solo quelle giuste, e rifiutare a mano le altre.
- Un simbolo attraversato da altre linee, tratteggi o testi ottiene un punteggio più basso e può richiedere un'impostazione più bassa del cursore.
- I riquadri molto piccoli vengono rifiutati: "Questo riquadro è troppo piccolo. Disegnarlo intorno all'intero simbolo." Anche un riquadro vuoto viene rifiutato: "Questo riquadro è quasi vuoto. Disegnarlo intorno a un simbolo."
- Una tavola che sarebbe molto grande alla dimensione necessaria per questo simbolo viene saltata, e il riepilogo dice "1 tavola era troppo grande per la ricerca a questa dimensione del simbolo." Racchiudere un simbolo più grande oppure contare quella tavola a mano.

Se non viene trovato nulla, la barra di stato mostra "Nessuna corrispondenza. Abbassare il cursore Corrispondenza o racchiudere il simbolo più strettamente."

## Velocità e browser

La ricerca viene eseguita in un processo in background, quindi la pagina resta reattiva e in qualsiasi momento è possibile annullarla. Ogni tavola viene prima disegnata alla dimensione di lavoro sulla pagina stessa, il che può far bloccare la pagina per un momento con una tavola molto grande. Funziona nelle versioni attuali di Chrome, Edge, Firefox e Safari. La ricerca su molte tavole richiede più tempo; la barra di avanzamento procede tavola per tavola. Offline, il conteggio automatico funziona quando la barra dell'app mostra {{ui:Offline ready}}: {{ui:Save for offline}} mantiene attivo anche il processo in background. Vedi [Lavorare offline](common:offline).
