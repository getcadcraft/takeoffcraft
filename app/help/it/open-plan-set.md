---
title: Iniziare un computo e aprire un set di tavole
summary: Aprire uno o più PDF come set di tavole, orientarsi tra le tavole e passare da una all'altra.
keywords: apri, set di tavole, più pdf, file multipli, tavole, disegni, etichette di pagina, elenco tavole, navigare, trascinare, passaggio, apri in un'altra app, annotazione
from: ed434468
---

Un set di tavole è spesso composto da più PDF: architettonico, strutturale, meccanico. TakeoffCraft li apre affiancati come un unico elenco di tavole, e un solo computo può coprirli tutti.

## Aprire i PDF

1. Scegliere {{ui:Apri PDF}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+O}}. (Gli altri stili di menu la chiamano {{ui:Apri PDF…}}.)
2. Nella finestra di selezione dei file, selezionare ogni PDF del set. Tenere premuto {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} per sceglierne più d'uno, oppure {{key:Shift}} per un intervallo.
3. Scegliere Apri.
   Mentre ogni file viene letto compare il messaggio "Apertura di (nome)…". Poi ogni pagina compare sotto {{ui:Tavole}} e si apre la prima pagina del primo PDF nuovo.

Si possono anche trascinare i PDF da {{pick:mac=Finder|windows=Esplora file|linux=il gestore di file}} e rilasciarli in un punto qualsiasi di TakeoffCraft. Mentre si trascina compare la cornice "Trascina qui PDF, disegni DWG o DXF, oppure un .takeoff.json".

Per aggiungere altri PDF in seguito, ripetere la stessa operazione. I PDF già aperti vengono saltati.

La schermata iniziale elenca anche i PDF e i computi aperti di recente, nei browser che permettono a una pagina di riaprire un file (Chrome ed Edge). Fare clic su uno per aprirlo; il browser può chiedere prima l'autorizzazione. Vedere [I propri file](common:your-files).

:::note
Nulla viene caricato. Il browser legge i PDF sul computer, e vengono rimossi da TakeoffCraft quando si chiude la scheda o si sceglie {{ui:Nuovo}}.
:::

## Disegni accanto ai PDF

{{ui:Apri PDF}} accetta anche disegni DWG e DXF, da soli o insieme ai PDF: lo spazio modello e i layout di ogni disegno diventano tavole nello stesso elenco. Vedere [Aprire un disegno DWG o DXF](topic:open-a-drawing), poi [Contare da un disegno](topic:count-from-a-drawing).

## Un PDF passato da un'altra app

Un'altra app della suite può passare il PDF che ha aperto: apre TakeoffCraft in una nuova scheda e il PDF si apre lì come se fosse stato trascinato. La barra di stato dice "Aperto (nome), passato da (app). Il file originale è invariato." Nulla viene caricato; il file passa dalla memoria del browser e ne viene rimosso appena si apre.

Se la barra di stato dice che il PDF "non è arrivato", la scheda ha atteso troppo oppure il PDF era già aperto in un'altra scheda: aprirlo con {{ui:Apri PDF}}.

Nel verso opposto, quando MarkupCraft è attivo dove si lavora e può ricevere un file, la barra delle tavole sotto il disegno ha un pulsante {{ui:MarkupCraft}}: apre il PDF della tavola a schermo in MarkupCraft, in una nuova scheda, per rivederlo e annotarlo.

## Trovare una tavola

- Scorrere l'elenco {{ui:Tavole}} a sinistra e fare clic su una tavola.
- Scrivere in **Cerca tavole**, in cima all'elenco, per filtrare per numero di tavola, nome del file o etichetta di pagina. Il conteggio accanto a {{ui:Tavole}} mostra "3 di 40" mentre un filtro è attivo.
- Premere {{key:PageDown}} per la tavola successiva e {{key:PageUp}} per la precedente. Seguono l'elenco così come è filtrato.

:::mac
Su una tastiera Mac senza i tasti Page Up e Page Down, premere fn con la freccia su o giù.
:::

## Come sono nominate le tavole

- Una pagina che il PDF etichetta, come `A-101`, prende il nome da quell'etichetta.
- Una pagina senza etichetta (o con un'etichetta che è solo il suo numero di pagina) è nominata "(nome file), pagina (n)".
- Con più PDF aperti, le tavole etichettate riportano anche il nome del file: "A-101 — Architectural".

Per ora i nomi delle tavole non si possono scrivere a mano.

## Muoversi in una tavola

- Girare la rotellina del mouse per ingrandire nel punto del puntatore.
- Trascinare con il pulsante sinistro o centrale per spostarsi. Con {{ui:Conteggio automatico}}, oppure quando si parte dall'angolo di un segno, tenere premuto {{key:Space}} mentre si trascina, oppure trascinare con il pulsante centrale.
- Premere {{key:F}} o scegliere {{ui:Adatta alla pagina}} per vedere l'intera tavola; {{key:W}} o {{ui:Adatta alla larghezza}} ne adatta la larghezza.
- Premere {{key:Plus}} o {{key:=}} per ingrandire e {{key:Minus}} per rimpicciolire, attorno al centro della vista.

Ogni tavola ricorda il proprio zoom e la propria posizione finché resta aperta.

## Prossimo passo

Prima di poter misurare una tavola, le serve una scala: [Impostare la scala](topic:set-the-scale).
