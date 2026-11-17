---
title: Libreria dei prezzi
summary: Conservare voci, tariffe e composizioni in una libreria, importarla da un CSV o da un preventivo passato, aggiungere voci da essa a qualsiasi computo e aggiornare da essa i prezzi di un computo.
keywords: libreria, pacchetti di categoria, listino, prezziario, database dei costi, importa csv, tariffe, composizioni, riuso, voci modello, aggiorna i prezzi, riprezza
from: 37356c68
---

La **libreria dei prezzi** conserva le voci che si usano computo dopo computo: il loro tipo, unità, altezza, sfrido, tariffe di materiale e manodopera, e la loro composizione. È conservata in questo browser, separatamente da ogni computo, così ogni computo aperto qui può usarla.

Aprirla con {{ui:Libreria}} in cima al pannello {{ui:Voci}}.

## Riempire la libreria

- {{ui:Importa CSV…}} legge un foglio di calcolo salvato come CSV (vedere le colonne sotto). Le voci il cui nome e tipo sono già nella libreria vengono sostituite; le altre vengono aggiunte. Le righe che non può leggere vengono saltate, e indica quali e perché.
- {{ui:Aggiungi le voci di questo computo}} copia ogni voce del computo aperto nella libreria, con le sue tariffe e la sua composizione (non i suoi segni).
- Il CSV del preventivo che TakeoffCraft esporta ([Esportare il preventivo](topic:export-estimate)) si importa così com'è: i prezzi dell'ultimo lavoro alimentano il successivo.

- {{ui:Pacchetti di categoria…}} aggiunge composizioni gratuite per una categoria, come cartongesso, impianti elettrici o calcestruzzo, senza prezzi. Vedere [Pacchetti di categoria](topic:trade-packs).

{{ui:Esporta CSV}} salva la libreria come CSV, per conservarne una copia, modificarla in un foglio di calcolo o darla a un collega. {{ui:Svuota}} la svuota (fare clic due volte).

:::note
La libreria risiede nello spazio di archiviazione di questo browser. Un altro browser, un altro computer o una finestra in incognito ne hanno una propria (o nessuna). Esportarla per spostarla.
:::

## Usarla in un computo

- Selezionare le voci (digitare in {{ui:Cerca nella libreria}} per restringere l'elenco) e scegliere {{ui:Aggiungi al computo}}. Vengono aggiunte con le loro composizioni in un unico passo che {{key:Mod+Z}} annulla. Un nome già presente nel computo riceve un numero, come `Moquette (2)`.
- {{ui:Aggiorna i prezzi}} assegna alle voci del computo lo sfrido e le tariffe della libreria, per ogni voce il cui nome e tipo corrispondono a una voce della libreria, e lo stesso per le componenti di composizione con lo stesso nome. Altezze, unità e formule restano invariate. Un solo {{key:Mod+Z}} rimette tutti i vecchi prezzi.

## Le colonne del CSV

La prima riga dà il nome alle colonne, in qualsiasi ordine; le altre colonne vengono ignorate.

| Colonna | Cosa contiene |
|---|---|
| Item (or Name) | Il nome della voce. Obbligatorio. |
| Type | Linear, Area o Count (LF, SF ed EA funzionano comunque). Se vuoto, decide l'unità. |
| Unit | LF o m; SF, SY o m²; EA. Vuoto: l'unità abituale del tipo. |
| Waste % | `10` o `10%`. |
| Material per unit, Labor per unit | Tariffe come `2.10` o `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, oppure `2.7` per le unità metriche. |
| Component, Formula | Una riga con un nome di Component (o il Type `Component`) fa parte della composizione della voce sopra di essa. La sua Unit, lo Waste % e le tariffe sono propri; la sua Formula usa le lettere della voce, vedere [Composizioni e formule](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Virgole, punti e virgola o tabulazioni tra le colonne funzionano tutte.
