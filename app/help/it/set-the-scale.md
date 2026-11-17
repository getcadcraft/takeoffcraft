---
title: Impostare la scala
summary: Assegnare a ogni tavola una scala con una predefinita o calibrandola su una quota nota, verificarla, e capire perché le tavole senza scala sono escluse dai totali.
keywords: rileva scala, leggi scala, scala dal testo, tutte le tavole, scala, calibra, predefinita, verifica scala, verifica, quota nota, senza scala, nessuna scala, rapporto, imposta scala
from: 8f0148e6
---

Ogni tavola ha una propria scala. Si imposta, oppure si lascia che TakeoffCraft la legga dal testo delle tavole (sotto), e la si verifica. Finché una tavola non ne ha una, {{ui:Lineare}}, {{ui:Area}}, {{ui:Cerchio}} e {{ui:Vuoto}} si rifiutano di misurare su di essa. {{ui:Conteggio}} e {{ui:Conteggio automatico}} funzionano senza scala.

L'elenco delle tavole mostra la scala di ciascuna tavola, oppure **Nessuna scala**. La barra sotto la tavola aperta dice lo stesso.

## Usare una predefinita (quando il PDF è stampato in grandezza naturale)

1. Aprire la tavola.
2. Aprire l'elenco {{ui:Predefinita}} nel gruppo {{ui:Scala}}.
3. Scegliere la scala stampata sul disegno, per esempio `1/8" = 1'-0"` in Architettonica.
   La barra di stato indica "Scala per questa tavola: 1/8" = 1'-0"."
4. Verificarla (sotto).

Una predefinita presuppone che il PDF abbia la dimensione reale della carta per cui il disegno è stato fatto. Se qualcuno ha creato il PDF con "adatta alla pagina", oppure è un set in metà scala, la predefinita è sbagliata. Calibrare invece.

L'elenco completo è in [Scale predefinite](topic:scale-presets).

## Leggere le scale dal testo delle tavole

La maggior parte dei disegni indica la propria scala: `SCALA: 1/4" = 1'-0"` nel cartiglio, `1:100` sotto una vista. TakeoffCraft può leggerla e impostare tutte le tavole in una volta.

1. Aprire l'elenco {{ui:Predefinita}} e scegliere {{ui:Dal testo delle tavole…}} (in alto).
2. L'elenco mostra ogni tavola: la sua scala attuale, e cosa dice il suo testo — **Indica 1/4" = 1'-0"**, **Nessuna scala nel testo**, oppure **Indica di non scalare** (NTS).
3. Le tavole senza scala che ne indicano una sono spuntate. Spuntare o togliere la spunta a quelle che si vogliono, quindi scegliere {{ui:Imposta le scale spuntate}}. Un {{key:Mod+Z}} le annulla tutte.
4. Verificare una quota su ogni tavola con {{ui:Verifica}} (sotto): una predefinita è corretta solo quando il PDF è stampato in grandezza naturale.

Legge le notazioni architettoniche (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), ingegneristiche (`1" = 20'`) e metriche (`1:50`) che corrispondono a una [predefinita](topic:scale-presets). Quando una tavola indica più di una scala (una pianta con dettagli ingranditi), prende quella che indica più spesso, e quella scritta dopo la parola SCALA conta doppio; le altre sono mostrate in rosso perché si possano verificare. Una tavola scansionata non ha testo: impostarne la scala a mano.

## Calibrare su una quota nota

Usare questo metodo quando non c'è una scala stampata affidabile, il set è stato ridimensionato, oppure la tavola dice "non in scala" ma ha quote.

1. Aprire la tavola e ingrandire una quota lunga che si conosce, come l'interasse di una linea di griglia o una quota complessiva dell'edificio. Più è lunga, più è precisa.
2. Scegliere {{ui:Calibra}} nel gruppo {{ui:Scala}}, oppure premere {{key:K}}.
3. Fare clic su un estremo della quota. Ingrandire ogni estremo per la precisione; è possibile ingrandire e spostarsi tra i clic.
4. Fare clic sull'altro estremo. Tenere premuto {{key:Shift}} per mantenere la linea a 0°, 45° o 90°.
   Si apre la finestra **Calibra questa tavola**.
5. Digitare la distanza reale in **Distanza reale**, per esempio `24'-6 1/2"`, `24.5` (piedi decimali), `30"` oppure `7.5 m`. Vedere [Formati di lunghezza, tariffa e percentuale](topic:entry-formats).
6. Scegliere {{ui:Imposta la scala}}.
   La barra di stato mostra la scala come "1" = (n)'", e quando è entro lo 0.5% da una predefinita indica quale, per esempio "che corrisponde a 1/4" = 1'-0" (scegliere quella predefinita per una scala esatta)".
   TakeoffCraft torna allo strumento {{ui:Seleziona}}.

Quando la calibrazione corrisponde a una predefinita, sceglierla dà una scala esatta invece di una che dipende dal punto in cui si è fatto clic.

## Verificare la scala

Verificare sempre una nuova scala su una seconda quota.

1. Scegliere {{ui:Verifica}} nel gruppo {{ui:Scala}}, oppure premere {{key:D}}.
2. Fare clic su entrambi gli estremi di una quota stampata sul disegno.
   La barra di stato mostra "Verifica: 12'-6"" con la stessa lunghezza in piedi decimali e in metri, e la linea di verifica resta sulla tavola con la sua lunghezza.
3. Confrontarla con la quota stampata. Se non coincide, calibrare su una quota più lunga.

Premere {{key:Esc}} per cancellare la linea di verifica.

## Cambiare una scala

Scegliere un'altra predefinita oppure calibrare di nuovo. Se la tavola ha già misure, TakeoffCraft chiede **Cambiare la scala di questa tavola?** e indica quante misure verranno ricalcolate. Scegliere {{ui:Cambia la scala}}. Ogni tratto e area della tavola viene misurato di nuovo alla nuova scala. È possibile annullare con {{key:Mod+Z}}.

## Perché le tavole senza scala non sono conteggiate come zero

Un segno su una tavola senza scala non ha una lunghezza o un'area reali. TakeoffCraft non lo conta mai come zero, cosa che renderebbe il preventivo silenziosamente troppo basso. Invece:

- esclude quei segni dai totali,
- mostra "+(n) non scalata" accanto alla voce in {{ui:Quantità}},
- mostra "Incompleto: (n) segni su tavole senza scala (esclusi dai totali)" nell'intestazione della tabella,
- scrive il conteggio nella colonna delle note dell'esportazione del foglio di calcolo.

Può accadere quando si apre un progetto le cui scale non sono mai state impostate. Dare una scala alla tavola e i segni vengono conteggiati subito. I segni di conteggio vengono sempre conteggiati; non richiedono una scala.

## Suggerimenti

- Impostare la scala di ogni tavola che si misurerà prima di iniziare. Cercare **Nessuna scala** nell'elenco delle tavole per trovare quelle rimaste (la casella di ricerca guarda i nomi delle tavole, non le scale).
- Dettagli e piante ingrandite sulla stessa tavola spesso usano un'altra scala. TakeoffCraft ha una sola scala per tavola; vedere [Cosa non è ancora implementato](topic:not-built-yet).
- Disegni metrici: scegliere una predefinita metrica come `1:100`, oppure calibrare con una distanza metrica come `6000 mm`.
