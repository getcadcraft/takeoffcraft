---
title: "Il layout dell'ufficio: raggruppamento, subtotali, titolo e intestazioni da Default Policies"
summary: Attivare il componente Default Policies: il preventivo, le quantità per tavola, le esportazioni e ciò che legge un assistente adottano il layout degli abachi del proprio ufficio, lo stesso degli abachi di BimCraft.
keywords: standard dell'ufficio, layout dell'ufficio, default policies, add-on, layout degli abachi, raggruppa per tipo, raggruppa per tavola, subtotale, totali, titolo, intestazioni, maiuscole, layout del preventivo, layout dell'esportazione, impostazioni
from: cfd2f30a
---

## Cosa si ottiene

Fare in modo che TakeoffCraft disponga le sue tabelle come le emette il proprio ufficio, senza impostarlo in ogni computo. Il layout si imposta una volta sola, in Default Policies, e vale per ogni app su questo computer: ciò che si imposta in BimCraft o in CadCraft è usato da TakeoffCraft, e viceversa.

## Passaggi

1. Aprire **Impostazioni › Add-on** e attivare **Default Policies**. È disattivato finché non lo si attiva; se è disattivato, o senza impostazioni, TakeoffCraft resta com'era.
2. Aprire **Impostazioni › Globali › Default Policies** e individuare **Layout degli abachi (lo standard dell'ufficio)**:

| Policy | Cosa fa in TakeoffCraft |
|---|---|
| Raggruppa abachi per | **Tipo** raggruppa il preventivo per tipo di voce (Lineare, Area, Conteggio, Quantità tipizzata). **Livello** raggruppa le quantità per tavola in base alla loro tavola. **Locale** e **Nessun raggruppamento** non raggruppano nessuno dei due |
| Totali negli abachi | **Un subtotale sotto ogni gruppo e un totale** aggiunge un subtotale sotto ogni gruppo. Il totale complessivo resta sempre |
| Titolo dell'abaco | Una riga sopra la tabella, per esempio `{schedule}: layout dell'ufficio` |
| Intestazioni di colonna | Come scritte, IN MAIUSCOLO o Con Maiuscole Iniziali |

3. Chiudere Impostazioni. Le tabelle si aggiornano subito.

## Cosa applica il layout

- **Quantità › Per voce** e **Per tavola**: intestazioni di gruppo, un subtotale sotto ogni gruppo, il titolo e il formato delle intestazioni. Una riga sotto il titolo indica quali parti lo standard dell'ufficio ha impostato. Le righe restano le stesse: si inseriscono ancora tariffe e sfrido e si fa clic sulle cifre per selezionarne i segni. Una componente o una seconda condizione resta sotto la sua voce.
- **Il preventivo esportato** (CSV e XLSX): gli stessi gruppi e subtotali. Nella cartella di lavoro un subtotale è una formula `SUBTOTAL` sul suo gruppo, e anche il totale complessivo lo è, così nulla viene contato due volte.
- **Ciò che legge un assistente**: `takeoff_estimate` e `takeoff_quantities` (per tavola) aggiungono un blocco `layout` con gruppi, righe e subtotali, e indicano quali parti l'ufficio ha impostato.

## Cosa mantiene il proprio layout

- **Quantità › Per area** dichiara il proprio raggruppamento (per area di offerta) e lo mantiene.
- Il **totale complessivo**, i ricarichi del riepilogo offerta e le varianti non vengono raggruppati di nuovo.
- Un raggruppamento per cui la tabella non ha colonna viene omesso: il preventivo non ha il livello, e le quantità per tavola non hanno il tipo.

## Da sapere

- Le politiche sono conservate in questo browser per ogni app di CadCraft e viaggiano nel file Default Policies (**Salva su file** / **Carica da file** nello stesso punto), così un ufficio condivide un solo file.
- Un preventivo esportato come CSV con raggruppamenti è pensato per la lettura. Per riportarlo come libreria dei prezzi, esportarlo senza raggruppamento impostato.
- Il lato BimCraft dello stesso standard: abachi, impostazioni ed esportazioni. TakeoffCraft non ha ancora politiche proprie, quindi non c'è una sezione Default Policies in Impostazioni › TakeoffCraft.
