---
title: Salvare e riaprire un computo
summary: Salvare il computo come progetto .takeoff.json, riaprirlo con gli stessi PDF, e cosa succede quando un PDF manca o è stato modificato.
keywords: computo nel PDF, incorpora, allegato, salva, apri, riapri, progetto, takeoff.json, riprendi, continua, PDF rivisto, PDF modificato, PDF mancante, backup, salvataggio automatico, recupera, arresto anomalo
from: bd5080a6
---

Un computo viene salvato come un piccolo file di progetto, `(name).takeoff.json`. Contiene le voci, le composizioni, le tariffe, la scala di ogni tavola e ogni segno. **Non** contiene i PDF; li ritrova in base al loro contenuto.

## Salvare

1. Scegliere {{ui:Salva computo}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+S}}.
   Il browser scarica `(name).takeoff.json`. La barra di stato indica "Salvato (name).takeoff.json. Si riapre sopra gli stessi PDF (sono abbinati in base al loro contenuto)."
2. Spostare il file accanto ai PDF della commessa, in modo che i due restino insieme.

Ogni salvataggio scarica un nuovo file. Il browser potrebbe chiamare il secondo `(name) (1).takeoff.json`; conservare il più recente.

Il nome deriva dal primo PDF aperto in questo computo.

:::note
Salva computo resta l'unico modo per conservare un computo come file. Mentre si lavora, TakeoffCraft conserva anche una copia di ripristino in questo browser (vedere sotto), e il salvataggio nel cloud non è ancora disponibile. Se si tenta di chiudere la scheda con modifiche non salvate, il browser chiede se uscire.
:::

## Conservare il computo dentro il PDF

{{ui:Esporta}} › {{ui:PDF con il computo incorporato}} scarica una copia di ciascun PDF aperto, denominata come `Plans (with takeoff).pdf`, che contiene l'intero computo come allegato: voci, segni, scale, aree di offerta, tutto ciò che è contenuto in `.takeoff.json`. Le sue pagine non cambiano, quindi appare e si stampa come l'originale, e gli altri lettori PDF elencano il computo tra i loro allegati.

Aprire quel PDF in TakeoffCraft (in qualsiasi modo si aprano i PDF) e compare la domanda **Questo PDF ha un computo incorporato**: scegliere {{ui:Apri il computo}} per recuperarlo, oppure {{ui:Solo il PDF}} per aprire soltanto il disegno. La copia rappresenta il PDF da cui è stata creata, quindi un `.takeoff.json` salvato da uno dei due si apre su entrambi.

Con più PDF, ogni copia contiene l'intero computo; aprirle insieme. Salvare di nuovo da una copia sostituisce il computo al suo interno, non ne aggiunge un secondo. Il `.takeoff.json` resta il file da conservare: è piccolo, ed è quello che scrivono il salvataggio automatico e l'app desktop.

## Se la scheda o il browser si interrompono

Qualche secondo dopo ogni modifica, TakeoffCraft conserva una copia del computo nella memoria di questo browser, insieme ai suoi PDF quando non superano i 64 MB. Non viene caricato nulla. Quando si salva il computo, si avvia un nuovo computo o si apre un altro progetto, la copia viene eliminata.

Se la scheda va in crash, il browser o il computer si arrestano, oppure si esce con modifiche non salvate, alla successiva apertura di TakeoffCraft compare la domanda **Recuperare il lavoro?** che elenca il computo per nome. Scegliere **Recupera** per riaverlo: voci, segni e scale tornano, e i suoi PDF si riaprono se sono stati conservati. La barra di stato indica "Recuperato (name). Non è ancora salvato in un file: Salva computo lo conserva." Quando i PDF erano troppo grandi per essere conservati, aprirli di nuovo; i segni compaiono sulle loro tavole. Altro: [Recuperare il lavoro](common:recover).

## Riaprire

1. Aprire TakeoffCraft.
2. Trascinare nella pagina il file `.takeoff.json` insieme ai suoi PDF. Oppure scegliere {{ui:Apri PDF}} per i PDF e {{ui:Apri computo}} per il progetto, in un ordine qualsiasi.
   La barra di stato indica "Aperto (name): 12 voci, 340 segni." Ogni tavola recupera la sua scala e i segni compaiono sulle tavole.

L'ordine dei PDF non conta, e nemmeno i loro nomi di file o cartelle. TakeoffCraft riconosce ogni PDF tramite un'impronta del suo contenuto.

Se si apre un progetto mentre il computo attuale ha modifiche non salvate, TakeoffCraft chiede prima: **Annulla**, **Scarta le modifiche** oppure **Prima salva computo**. Aprire un progetto sostituisce le voci e i segni attuali; i PDF già aperti restano aperti.

## Quando manca un PDF

Se si apre il progetto senza tutti i suoi PDF, la barra di stato aggiunge "Aprire i suoi PDF per vedere i segni (elencati in Tavole)." Sotto l'elenco delle tavole, una nota dice:

"Questo computo copre anche PDF non aperti. Le loro quantità sono conteggiate; aprirli per vedere e modificare i loro segni:"

seguito dai nomi dei file e dalle dimensioni. I loro segni continuano a contare in ogni totale ed esportazione, con le scale con cui sono stati misurati. Aprire quei PDF per vedere e modificare i segni.

## Quando un PDF è cambiato

Un PDF che è stato rivisto, o semplicemente salvato di nuovo da un altro programma, ha contenuti diversi, quindi per TakeoffCraft è un **file diverso**, anche con lo stesso nome. Nella nota sotto l'elenco delle tavole, un file del genere riporta "è aperto un file con questo nome, ma il contenuto è diverso".

- I segni restano collegati alla versione precedente. Continuano a contare, nelle loro posizioni e scale originarie.
- Il PDF rivisto si apre come nuove tavole, senza scala e senza segni.

Per spostare il computo sulla revisione, aprire entrambi i PDF e usare {{ui:Confronta}} sulla nuova tavola: [Confrontare una tavola revisionata e spostare il computo](topic:compare-revisions).

## Un file danneggiato o estraneo

TakeoffCraft verifica ogni file di progetto prima di usarlo. Messaggi che si possono vedere:

- "(file) non è un progetto di TakeoffCraft (non è JSON valido)."
- "Questo non è un file di progetto di TakeoffCraft."
- "Questo progetto è stato salvato da una versione più recente di TakeoffCraft. Aprirlo lì."
- "3 segni sono danneggiati e sono stati esclusi." (il resto si apre)

## Cronologia annullamenti

La cronologia degli annullamenti ricomincia da zero quando si apre un progetto. Il salvataggio non la cancella.
