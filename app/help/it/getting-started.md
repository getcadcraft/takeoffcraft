---
title: Primi passi con TakeoffCraft
summary: Che cosa fa TakeoffCraft, dove funziona e la prima voce misurata e valorizzata a partire da un set di tavole in PDF.
keywords: inizio, primo computo, avvio rapido, introduzione, preventivo, computo metrico, set di tavole, pdf
from: 3b9da1fb
---

TakeoffCraft misura set di tavole, PDF e disegni DWG o DXF, e trasforma le misure in un preventivo valorizzato. Si aprono i file (un disegno viene conteggiato direttamente dai suoi blocchi: vedere [Aprire un disegno DWG o DXF](topic:open-a-drawing)), si assegna una scala a ogni tavola (un disegno porta la propria), si creano le **voci** (un tipo di muro, una finitura del pavimento, un apparecchio) e si fa clic sulle tavole per rilevarle. Quantità, costi e totale del lavoro si aggiornano mentre si procede. Il preventivo si può esportare come foglio di calcolo, insieme a una copia dei PDF con il computo disegnato sopra.

Chi ha già fatto computi con altri programmi può leggere subito [Se si proviene da altri software di computo](topic:coming-from). Alcune cose qui funzionano in modo diverso.

## Dove funziona

TakeoffCraft funziona nel browser. Aprendo TakeoffCraft la schermata è subito pronta; non c'è nulla da installare.

- **I PDF restano sul computer.** Vengono aperti dal browser e non vengono mai caricati. Salvare significa scaricare un file.
- Funziona con le versioni correnti di Chrome, Edge, Firefox e Safari. Vedere [Browser e computer](common:browsers).
- Funziona senza connessione a internet dopo aver scelto {{ui:Salva per l'uso offline}} nella barra dell'app, quando compare {{ui:Pronto per l'uso offline}}. Vedere [Lavorare offline](common:offline).
- Il salvataggio nel cloud non è ancora disponibile. Per un'app desktop, TakeoffCraft è incluso in CadCraft Studio, insieme alle altre sette app.

## Il primo computo in dieci passaggi

Questa guida misura un tipo di muro e lo valorizza. Richiede pochi minuti su qualsiasi tavola a disposizione.

1. Scegliere {{ui:Apri PDF}} nel gruppo {{ui:File}} della barra degli strumenti (oppure premere {{key:Mod+O}}), selezionare uno o più PDF e scegliere Apri. I PDF si possono anche trascinare in un punto qualsiasi della pagina.
   Le tavole compaiono a sinistra e la prima si apre al centro.
2. Trovare la scala stampata della tavola nel cartiglio o sotto il titolo di un disegno.
3. Aprire l'elenco {{ui:Predefinita}} nel gruppo {{ui:Scala}} e scegliere quella scala, per esempio `1/4" = 1'-0"`.
   La barra in fondo alla tavola ora riporta "Scala 1/4" = 1'-0"".
4. Scegliere {{ui:Verifica}} (oppure premere {{key:D}}) e fare clic sulle due estremità di una quota stampata nel disegno.
   Il valore letto nella barra di stato in basso a sinistra deve coincidere con la quota stampata. In caso contrario, vedere [Impostare la scala](topic:set-the-scale).
5. Nel pannello {{ui:Voci}} a destra scegliere {{ui:Nuova voce}}, digitare un nome come `Muro interno tipo A`, lasciare il tipo su {{ui:Lineare (lunghezza)}} e scegliere {{ui:Aggiungi}}.
6. Scegliere {{ui:Lineare}} nella barra degli strumenti (oppure premere {{key:L}}).
7. Fare clic sull'inizio di un muro, poi su ogni angolo lungo il suo percorso. Fare doppio clic, premere {{key:Enter}} o fare clic con il pulsante destro per terminare il tratto.
   Il tratto viene disegnato con il colore della voce e la sua lunghezza compare accanto alla voce.
8. Nell'editor della voce sotto {{ui:Voci}}, digitare `9'-0"` in {{ui:Altezza}}, `0.85` in {{ui:Materiali $/LF}} e `1.20` in {{ui:Manodopera $/LF}}.
   La tabella {{ui:Quantità}} in basso mostra la lunghezza, i costi estesi di materiali e manodopera e il {{ui:Totale del lavoro}}.
9. Scegliere {{ui:Salva computo}} (oppure premere {{key:Mod+S}}).
   Il browser scarica un file `.takeoff.json`. Contiene voci, scale e segni, e si riapre sugli stessi PDF.
10. Aprire il menu {{ui:Esporta}} nella barra degli strumenti e scegliere {{ui:XLSX}} per scaricare il preventivo come foglio di calcolo.

:::tip
Premere {{key:Esc}} per interrompere qualsiasi operazione e tornare allo strumento {{ui:Seleziona}}. {{key:Mod+Z}} annulla qualsiasi modifica.
:::

## Che cosa leggere dopo

- [La schermata di TakeoffCraft](topic:workspace) dà il nome a ogni parte della finestra.
- [Avviare un computo e aprire un set di tavole](topic:open-plan-set) spiega come usare più PDF e l'elenco delle tavole.
- [Creare le voci di computo](topic:create-items) spiega tipi, unità, sfrido e prezzi.
- [Composizioni e formule](topic:assemblies) trasforma una misura in montanti, lastre e altro.
- [Tastiera e mouse](topic:keyboard) elenca tutti i tasti.
