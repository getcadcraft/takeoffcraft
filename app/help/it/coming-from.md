---
title: Passare da altro software di computo
summary: Come le abitudini dei programmi dedicati al computo e degli strumenti di annotazione PDF corrispondono a TakeoffCraft, e le differenze che creano problemi.
keywords: passaggio, migrazione, condizioni, voci, parti, strumenti di misura, elenco annotazioni, collegamento quantità, abitudini di computo, differenze, confronta
from: 12004ce5
---

Chi ha già eseguito un computo con PlanSwift o con gli strumenti di misura di Bluebeam Revu troverà gran parte di TakeoffCraft familiare: un insieme di tavole, una scala per tavola, gli elementi da misurare e un totale valorizzato. Il modo in cui i pezzi si incastrano è diverso in alcuni punti, che sono descritti qui sotto.

Se si conosce PlanSwift o On-Screen Takeoff, scegliere lo stile di menu {{ui:Scrivania del computo}} in {{ui:Impostazioni}} › {{ui:TakeoffCraft}} › {{ui:Menu, tasti e mouse}}: una barra dei menu con File, {{ui:Modifica}}, Visualizza, {{ui:Scala}}, {{ui:Computo}}, {{ui:Voci}}, {{ui:Annotazioni}} ed {{ui:Esporta}} sopra una riga di strumenti di computo, con le predefinite di scala sulla barra della tavola. Consultare [Menu, tasti e mouse](topic:menus-keys-and-mouse).

## Abitudini a confronto

| Ciò che si conosce già | In TakeoffCraft |
|---|---|
| Aprire un lavoro o un progetto che archivia i piani (PlanSwift) | Aprire i PDF e il progetto `.takeoff.json` affiancati. Il progetto memorizza solo il computo; i PDF restano file propri. |
| Un elenco di annotazioni con note, nuvole ed evidenziazioni (Bluebeam) | {{ui:Annotazioni}} sulla barra della tavola: note, nuvole ed evidenziazioni con uno stato (Aperta, Risposta, Chiusa), elencate sotto **Annotazioni**, disegnate nel PDF segnato. Consultare [Note, nuvole ed evidenziazioni](topic:markups). |
| Misure salvate come annotazioni dentro il PDF (Bluebeam) | Il computo vive nel file `.takeoff.json`. {{ui:PDF segnato}} scrive una copia con il computo disegnato, per la condivisione; {{ui:PDF con il computo incorporato}} scrive una copia che contiene il computo, da riaprire in TakeoffCraft. |
| Voci di computo (PlanSwift), strumenti di misura personalizzati salvati nel Tool Chest (Bluebeam) | **Voci** sotto {{ui:Voci}}: nome, tipo, colore, unità, altezza o profondità, sfrido, tariffe. |
| Parti e composizioni con formule (PlanSwift) | La {{ui:Composizione}} della voce: componenti con una formula che usa le variabili `L H A N P`. |
| Impostare la scala della pagina, o calibrarla (entrambi) | Elenco {{ui:Predefinita}} oppure {{ui:Calibra}} nel gruppo {{ui:Scala}}, per tavola. {{ui:Verifica}} misura una quota nota. |
| Applicare una scala a un intervallo di pagine | Non ancora: impostare ogni tavola. |
| Viewport con scale diverse su una stessa tavola (Bluebeam) | Non ancora: una scala per tavola. |
| Strumenti di polilunghezza e area (Bluebeam), computo lineare e per area (PlanSwift) | {{ui:Lineare}} ({{key:L}}) e {{ui:Area}} ({{key:A}}). |
| Tenere premuto Shift per le linee rette | {{key:Shift}} aggancia a passi di 45°, la stessa idea. |
| Agganciarsi alle linee del disegno | Attivo per impostazione predefinita: estremi, punti medi, intersezioni e il punto più vicino su una linea, con {{key:F3}} per disattivarlo, come nei programmi CAD. |
| Strumento conteggio (entrambi) | {{ui:Conteggio}} ({{key:C}}). |
| Ricerca visiva dei simboli (Bluebeam) | {{ui:Conteggio automatico}} ({{key:S}}): racchiudere un simbolo, verificare, aggiungere. |
| Vuoti o detrazioni nelle aree | {{ui:Vuoto}} ({{key:X}}) su un'area selezionata, e vuoti circolari. |
| Detrazioni su tratti lineari | Disegnare il tratto dritto attraverso l'apertura e premere {{key:E}} ({{ui:Detrai}}). Consultare [Misurare i tratti lineari](topic:measure-linear). |
| Segmenti ad arco in una polilinea | {{ui:Arco}} ({{key:R}}): fare clic su un punto della curva, poi sul suo estremo. |
| L'elenco delle annotazioni con colonne di quantità (Bluebeam) | La tabella {{ui:Quantità}}, {{ui:Per voce}} o {{ui:Per tavola}}. |
| Griglia di stima con prezzi (PlanSwift) | La stessa tabella: sfrido, materiale e manodopera per unità, totali estesi, {{ui:Totale del lavoro}}. |
| Esportazione in Excel | {{ui:XLSX}} con formule attive, oppure {{ui:CSV}}. |
| Esc per fermare uno strumento | {{key:Esc}} annulla e torna a {{ui:Seleziona}}. |
| Clic destro per terminare | Anche qui il clic destro termina un tratto o chiude un'area. Non esiste un menu di clic destro. |

## Differenze che creano problemi

**Il computo non sta dentro il PDF.** Nessuna operazione modifica i PDF. Salvare il file `.takeoff.json` e conservarlo insieme ai disegni. Inviare a qualcuno il PDF segnato non equivale a inviare un computo modificabile: inviare il file di progetto e i PDF originali, oppure un [PDF con il computo incorporato](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**I PDF sono abbinati per contenuto, non per nome.** Una tavola rivista salvata con il vecchio nome di file è, per TakeoffCraft, un file nuovo, senza scala e senza segni. I vecchi segni restano sulla vecchia versione e continuano a contare. Consultare [Salvare e riaprire un computo](topic:save-and-reopen#when-a-pdf-has-changed).

**I segni senza scala sono esclusi, non contati come zero.** Se una tavola non ha scala, i suoi tratti e le sue aree non vengono conteggiati e la tabella riporta "Incompleto". In molti programmi si vedrebbe solo 0. Consultare [Impostare la scala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Nessuna stima delle dimensioni del foglio.** Le predefinite presuppongono che il PDF sia stampato a grandezza naturale. Un PDF a metà scala o "adatta alla pagina" richiede {{ui:Calibra}}. Usare sempre {{ui:Verifica}}.

**Una voce, un tipo principale, altri se richiesti.** Una voce è lineare, ad area o a conteggio, e il suo tipo si blocca quando ha dei segni. Una condizione che dà sia un'area sia il suo perimetro è una voce ad area: il suo perimetro è la variabile `P`. Un muro con sia lunghezza sia area è una voce lineare con un'altezza. Per una voce a più condizioni, come una stanza con pavimento, zoccolino e porte, selezionare gli altri tipi sotto {{ui:Misura anche}}: ciascuno viene valorizzato su una riga propria. Consultare [Una voce, più tipi di segni](topic:create-items#one-item-several-kinds-of-marks).

**Le formule lavorano sui totali.** Le formule delle composizioni usano i totali della voce su tutte le tavole, non ogni tratto separatamente. `N` (il numero di tratti o di aree) serve per gli extra per tratto, come un montante in più per ciascun muro.

**Il perimetro include i vuoti.** La `P` di un'area aggiunge i bordi dei suoi fori. Consultare [Misurare le aree con vuoti](topic:measure-areas#read-the-area).

**Il trascinamento sposta la vista.** Il trascinamento con il pulsante sinistro sulla tavola sposta la vista (pan), in ogni strumento tranne {{ui:Conteggio automatico}}. Non serve mai passare a uno strumento di spostamento. La rotella ingrandisce; non scorre la pagina.

**Una copia di ripristino, non un cloud.** TakeoffCraft conserva una copia del lavoro in questo browser e la offre al ritorno dopo un arresto anomalo ([Se la scheda o il browser si blocca](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), ma il computo va salvato manualmente: {{key:Mod+S}}. Il salvataggio su cloud non è ancora disponibile.

**Tutto è nel browser.** Non c'è nulla da installare e i piani non vengono mai caricati. Per un'app desktop, TakeoffCraft è disponibile in CadCraft Studio, insieme alle altre sette app.

## Non ancora disponibili

Le regioni di scala per tavola non sono ancora implementate. Consultare [Cosa non è ancora implementato](topic:not-built-yet) per l'elenco completo e per cosa fare nel frattempo.
