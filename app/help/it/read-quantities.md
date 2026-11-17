---
title: Leggere le quantità e il preventivo
summary: Usare la tabella Quantità per voce e per tavola, il totale del lavoro, l'evidenziazione e l'avviso Incompleto.
keywords: quantità, totali, per voce, per tavola, totale del lavoro, preventivo, riepilogo, rapporto, evidenziazione, incompleto, costi
from: 069d41f1
---

La tabella {{ui:Quantità}} in fondo alla finestra è il preventivo in tempo reale. Cambia nel momento in cui si disegna, si elimina, si riscala o si modifica una tariffa. Le quantità non vengono mai salvate: vengono misurate di nuovo dai segni ogni volta, quindi non possono diventare obsolete.

## Per voce

Scegliere {{ui:Per voce}} (l'impostazione predefinita). Ogni voce ha una riga, e ciascuno dei suoi componenti di composizione ha una riga sotto di essa.

| Colonna | Significato |
|---|---|
| Voce | Nome, con il colore della voce. "+(n) non scalata" indica che alcuni segni si trovano su tavole senza scala. |
| Quantità | Il totale misurato nell'unità della voce (componenti: il risultato della formula). |
| Unità | LF, m, SF, SY, m², EA, oppure l'unità del componente. |
| Sfrido % | Digitato qui o nell'editor della voce. |
| Con sfrido | Quantità × (1 + sfrido). |
| Materiale/unità, Manodopera/unità | Tariffe; è possibile digitarle qui. |
| Materiale, Manodopera | Con sfrido × tariffa, arrotondato al centesimo. |
| Totale | Materiale + manodopera. |

L'ultima riga, **Totale del lavoro**, somma le colonne materiale, manodopera e totale. Lo stesso totale appare a destra dell'intestazione della tabella.

Digitare in una cella di sfrido o di tariffa e premere {{key:Enter}} oppure fare clic altrove per applicarla. Un valore che TakeoffCraft non è in grado di leggere viene evidenziato in rosso e la barra di stato ne indica il motivo, per esempio "Digitare un importo come 12.50."

Fare clic sulla riga di una voce per evidenziare i suoi segni su ogni tavola e passare a una tavola che li contiene (come fare clic su di essa sotto {{ui:Voci}}).

## Per tavola

Scegliere {{ui:Per tavola}} per vedere la quantità di ogni voce su ogni tavola, con il numero di segni. Fare clic su una riga per aprire quella tavola con la voce evidenziata. Serve a verificare che ogni tavola sia stata computata, oppure a suddividere le quantità per piano o per area di lavoro.

## Per area

Quando il computo ha aree di offerta, {{ui:Per area}} elenca le voci di ogni area e un subtotale. Vedere [Aree di offerta](topic:bid-areas).

## L'avviso Incompleto

Quando qualcosa è escluso dai totali, l'intestazione mostra un avviso, per esempio:

"Incompleto: 1 errore di formula, 6 segni su tavole senza scala (esclusi dai totali)"

- **Errori di formula**: la formula di un componente di composizione non può essere calcolata. La sua riga riporta "Errore di formula: …". Vedere [Composizioni e formule](topic:assemblies#when-a-formula-is-wrong).
- **Segni su tavole senza scala**: assegnare a quelle tavole una scala. Vedere [Imposta la scala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Le stesse note vengono inserite nel foglio di calcolo esportato, così un preventivo incompleto non appare mai completo.

## Evidenziare una voce

Fare clic su una voce sotto {{ui:Voci}} oppure nella tabella. I suoi segni restano a piena intensità su ogni tavola e il resto sfuma. L'elenco delle tavole mostra "(n) evidenziati" su ogni tavola con i suoi segni. Fare di nuovo clic sulla voce per interrompere l'evidenziazione.

## Totali delle voci nel pannello laterale

Ogni voce nell'elenco {{ui:Voci}} mostra anche la sua quantità. La sezione **Misurato** dell'editor della voce mostra i valori usati dalle sue formule: lunghezza, tratti e superficie della parete; area, perimetro e numero di aree; oppure conteggio.

## Segni su PDF non aperti

Un computo può includere segni su PDF che in questa sessione non sono stati aperti. Continuano a essere conteggiati in tutti i totali; l'elenco delle tavole riporta il nome di quei PDF. Vedere [Salvare e riaprire un computo](topic:save-and-reopen).

## Più spazio

Il pulsante a freccia a destra dell'intestazione di {{ui:Quantità}} nasconde la tabella per dare più spazio alla tavola. Fare di nuovo clic per riportare la tabella.
