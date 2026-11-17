---
title: Aprire un disegno DWG o DXF
summary: Aprire un file di disegno come tavole (spazio modello e ogni layout), partire dalla scala indicata dal disegno, mostrare o nascondere i suoi layer e importare i disegni collegati.
keywords: dwg, dxf, cad, disegno, aprire un disegno, layout, spazio modello, spazio carta, tavole, unità, insunits, scala della viewport, xref, disegno collegato, layer, congelato, senza pdf, stampa, senza stampare
from: d8c3f504
---

TakeoffCraft apre un disegno DWG o DXF come apre un PDF: non occorre stamparlo prima in PDF. Il conteggio dal disegno stesso è esatto, perché il disegno sa cos'è ogni oggetto. Vedere [Contare da un disegno](topic:count-from-a-drawing).

## Aprire il disegno

1. Scegliere {{ui:Apri PDF}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+O}}.
2. Selezionare il file DWG o DXF. Se ne possono selezionare più d'uno, anche insieme ai PDF.
3. Scegliere Apri.

Si possono anche trascinare i file di disegno su TakeoffCraft, come i PDF. Nulla viene caricato: il browser legge il file sul computer.

TakeoffCraft legge DWG da AutoCAD 2000 a 2018 e DXF ASCII da R12 a 2018. Rifiuta un DXF binario (salvarlo come ASCII, o come DWG) e un file che non è né l'uno né l'altro, e ne spiega il motivo. Un file danneggiato si apre con ciò che è stato possibile leggere, e un messaggio lo segnala; i suoi conteggi possono essere incompleti.

## Tavole

- **Modello** è lo spazio modello del disegno.
- **Ogni layout** (scheda dello spazio carta) è una tavola, nominata dalla sua scheda, nell'ordine delle schede. Un layout mostra il modello attraverso le sue viewport, come viene stampato.

Zoom, pan, snap alle linee dello stesso disegno, segni, note, {{ui:Calibra}} e il resto funzionano come su un PDF. Le tavole di un disegno sono salvate nel computo con il nome del file e un'impronta del suo contenuto, come un PDF: riaprendo lo stesso file, i segni sono ancora sulle sue tavole.

## La scala

Una tavola parte dalla scala che indica il disegno:

- **Un layout** prende la scala della sua viewport più grande. Una scala come 1/2" = 1'-0" è nominata come la predefinita corrispondente; qualunque altra è mostrata come "Dalla viewport del disegno: 1" = 2.5'". Se un layout ha viewport a scale diverse, la più grande fissa la scala della tavola: verificare le altre con {{ui:Verifica}}.
- **Modello** prende come scala le unità del disegno (pollici, millimetri, piedi…), come "Unità del disegno (pollici)".
- **Un disegno senza unità** (il disegno non dice se un'unità è un pollice o un millimetro) non ha scala: la tavola dice "Nessuna scala", e la misura su di essa è rifiutata, come su un PDF senza scala. Il conteggio non richiede scala. Assegnarne una con {{ui:Calibra}}.

{{ui:Calibra}}, {{ui:Verifica}} e l'elenco {{ui:Predefinita}} cambiano la scala in ogni momento e prevalgono su quella del disegno. L'elenco delle predefinite è disattivato su Modello, che non ha un formato carta.

## Layer

{{ui:Layer}} nella barra delle tavole elenca i layer del disegno con quanti oggetti ciascuno ha su questa tavola. I layer che il file ha spento o congelato partono nascosti. Deselezionare un layer per nasconderlo, oppure selezionarne uno nascosto per mostrarlo: la tavola si ridisegna, e ciò che è nascosto viene escluso dai conteggi e dagli oggetti proposti a {{ui:Misura disegno}}, a meno che si chieda di contare anche i layer nascosti. {{ui:Mostra tutti}} mostra ogni layer; {{ui:Torna ai layer del file}} annulla le modifiche. Le scelte sui layer valgono per questa sessione, non per il file del computo.

## Disegni collegati (xref)

Un disegno che collega altri disegni li mostra dove sono inseriti. TakeoffCraft trova un disegno collegato tra i **file aperti**, per nome file: aprire il disegno principale e il disegno collegato insieme (oppure uno dopo l'altro). Finché non lo si fa, la barra di stato indica quanti disegni collegati non sono stati trovati, che cosa disegnano manca, e i conteggi lo segnalano.

## Limiti

- Gli oggetti che TakeoffCraft non può leggere o posizionare (oggetti proxy, classi sconosciute) sono elencati per tipo nella finestra di conteggio; non vengono mai eliminati senza avviso.
- I disegni molto grandi sono disegnati in parte, e i conteggi si fermano a un limite, dichiarandolo. Aprire invece un PDF stampato di tale disegno.
- Un disegno è disegnato in nero e nei propri colori, scuriti per la carta bianca. Le tabelle degli stili di stampa e le assegnazioni di penna non vengono applicate.
