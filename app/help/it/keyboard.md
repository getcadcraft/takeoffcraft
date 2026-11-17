---
title: Tastiera e mouse
summary: Ogni tasto, azione del mouse, trackpad e tocco in TakeoffCraft, raggruppati, con le differenze tra piattaforme.
keywords: tasti, scorciatoie, tasti di scelta rapida, tastiera, mouse, trackpad, tocco, pan, zoom, rotella, clic destro, doppio clic, spazio, shift, copia, incolla, taglia, duplica, seleziona tutto
from: 6f2c441d
---

I tasti lettera funzionano quando il puntatore si trova in un punto qualsiasi della pagina e non si sta digitando in un campo. Mentre una finestra di dialogo è aperta, si applicano i suoi tasti. Le lettere funzionano con o senza {{key:Shift}}.

## Strumenti

| Tasto | Strumento |
|---|---|
| {{key:V}} | {{ui:Seleziona}} |
| {{key:L}} | {{ui:Lineare}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Cerchio}} |
| {{key:B}} | {{ui:Locale}} (riempie un locale con un clic) |
| {{key:R}} | {{ui:Arco}} attivo o disattivo (in Lineare, Area e Vuoto) |
| {{key:E}} | {{ui:Detrai}} attivo o disattivo: i segmenti successivi di un tratto vengono disegnati ma non conteggiati |
| Una cifra, `@` o `#` durante il disegno | Apre la casella {{ui:Digita}}: digitare una lunghezza o delle coordinate, {{key:Enter}} posiziona il punto ([Misurare tratti lineari](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Vuoto}} (selezionare prima un'area) |
| {{key:C}} | {{ui:Conteggio}} |
| {{key:S}} | {{ui:Conteggio automatico}} |
| {{key:K}} | {{ui:Calibra}} |
| {{key:D}} | {{ui:Verifica}} della scala |

## Mentre si disegna

| Tasto o azione | Cosa fa |
|---|---|
| Clic | Posiziona un punto (un pallino, con Conteggio). |
| {{key:P}} | Percorso: seleziona l'intero percorso collegato di una linea del PDF, oppure il contorno attorno al clic ([Scegliere le linee del PDF](topic:pick-the-lines)). |
| {{key:F3}} | Attiva o disattiva l'aggancio alle linee del disegno ([Agganciare alle linee del disegno](topic:snap-to-the-drawing)). |
| {{key:Shift}} tenuto premuto mentre si fa clic | Aggancia il segmento a 0°, 45°, 90° o 135° dall'ultimo punto. Non vale per i punti degli archi o per i cerchi. |
| Doppio clic | Termina un tratto, oppure chiude un'area o un vuoto. |
| {{key:Enter}} | Termina un tratto, oppure chiude un'area o un vuoto. |
| Clic destro (senza spostarsi) | Termina un tratto, oppure chiude un'area o un vuoto. |
| Clic sul primo punto | Chiude un'area o un vuoto (dal terzo punto in poi). |
| {{key:Backspace}} o {{key:Delete}} | Rimuove l'ultimo punto (prima il punto d'arco in sospeso). |
| {{key:Esc}} | Scarta il punto d'arco in sospeso; poi annulla il segno non terminato; poi torna a {{ui:Seleziona}}. |

## Selezione e modifica

| Tasto o azione | Cosa fa |
|---|---|
| Clic su un segno (strumento Seleziona) | Seleziona il segno e rende corrente la sua voce. |
| {{key:Shift}} + clic su un segno | Lo aggiunge alla selezione, oppure lo toglie. |
| {{key:Mod+A}} | Seleziona ogni segno della tavola aperta. |
| Trascinare un quadratino d'angolo | Sposta quel punto ({{key:Shift}} aggancia a 45°). Funziona quando è selezionato un solo segno. |
| {{key:Delete}} o {{key:Backspace}} | Elimina i segni selezionati (quando non si sta disegnando). |
| {{key:Esc}} | Deseleziona tutto: cancella la selezione e la linea di verifica. |
| {{key:Mod+Z}} | Annulla. |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Ripristina. |

## Copia e incolla

| Tasto | Cosa fa |
|---|---|
| {{key:Mod+C}} | Copia i segni selezionati, con le loro voci. |
| {{key:Mod+X}} | Taglia: copia i segni selezionati, poi li elimina. |
| {{key:Mod+V}} | Incolla: la copia segue il puntatore; fare clic dove va. |
| {{key:Mod+Shift+V}} | Incolla nella stessa posizione: nello stesso punto della tavola aperta. |
| {{key:Mod+D}} | Duplica i segni selezionati: la copia segue il puntatore; fare clic dove va. |
| {{key:Esc}} | Non posa nulla: annulla un incolla o una duplicazione in corso sul puntatore. |

I tasti lettera da soli continuano a scegliere gli strumenti ({{key:C}} è {{ui:Conteggio}}, {{key:D}} è {{ui:Verifica}}, {{key:X}} è {{ui:Vuoto}}, {{key:V}} è {{ui:Seleziona}}, {{key:A}} è {{ui:Area}}); solo {{key:Mod}} insieme a essi copia e incolla. In un campo di testo questi tasti copiano e incollano il testo come di consueto. Vedere [Copiare, incollare e duplicare segni](topic:copy-paste).

:::warning
{{key:Backspace}} elimina il segno selezionato quando non si sta disegnando. Se accade per errore, {{key:Mod+Z}} lo riporta indietro.
:::

## File

| Tasto | Cosa fa |
|---|---|
| {{key:Mod+O}} | {{ui:Apri PDF}} |
| {{key:Mod+S}} | {{ui:Salva computo}} |

Questi due funzionano anche mentre si digita in un campo.

## Vista e tavole

| Tasto o azione | Cosa fa |
|---|---|
| Rotella del mouse | Ingrandisce e riduce nel punto del puntatore. |
| Trascinare (pulsante sinistro, centrale o destro) | Sposta la vista (pan). In {{ui:Conteggio automatico}}, un trascinamento con il pulsante sinistro disegna invece la casella di ricerca. |
| {{key:Space}} tenuto premuto + trascinare | Sposta la vista, in qualsiasi strumento. |
| {{key:F}} | {{ui:Adatta alla pagina}} |
| {{key:W}} | {{ui:Adatta alla larghezza}} |
| {{key:Plus}} o {{key:=}} | Ingrandisce al centro della vista. |
| {{key:Minus}} | Riduce al centro della vista. |
| {{key:PageDown}} / {{key:PageUp}} | Tavola successiva o precedente nell'elenco delle tavole. |
| {{key:Ctrl+Shift+F}} | Scorre le modalità a schermo intero (Control su ogni piattaforma, anche su Mac). |
| {{key:F1}} | Apre o chiude questa guida, un pannello laterale. |
| {{key:3}} | La vista 3D di verifica della tavola, attiva o disattiva. |

## Vista 3D

| Tasto o azione | Cosa fa |
|---|---|
| Trascinare, oppure trascinare con il pulsante centrale | Orbita. |
| {{key:Shift}} + trascinare, oppure trascinare con il pulsante destro | Sposta la vista. |
| Rotella del mouse | Zoom nel punto del puntatore. Con il trackpad, lo scorrimento a due dita orbita e il pizzico ingrandisce. |
| Clic | Seleziona il segno sotto il puntatore ({{key:Shift}} + clic aggiunge o toglie). |
| {{key:F}} o {{key:W}} | Zoom estensione. |
| {{key:3}} | Torna alla tavola piatta. |

Vedere [Verificare il computo in 3D](topic:check-in-3d).

## Conteggio automatico

| Tasto o azione | Cosa fa |
|---|---|
| Trascinare una casella | Racchiude il simbolo da cercare (avvia la ricerca). |
| Clic su una casella di corrispondenza | La scarta, oppure la ripristina. |
| {{key:Esc}} | Annulla una ricerca in corso, oppure scarta la revisione. |

## Guida

| Tasto | Cosa fa |
|---|---|
| {{key:F1}} | Apre o chiude il pannello della guida (anche il pulsante {{ui:Guida}} nella barra dell'app). Funziona in ogni strumento, anche mentre si digita in un campo. |
| {{key:Esc}} | Chiude il pannello della guida. Nella sua casella di ricerca, il primo Esc cancella la ricerca. Mentre il pannello è aperto, un Esc premuto dopo aver fatto clic sulla tavola chiude prima il pannello; premerlo di nuovo per annullare in TakeoffCraft. |

:::mac
Su molte tastiere Mac la riga superiore controlla luminosità e audio. Premere fn insieme a F1, oppure attivare "Usa i tasti F1, F2 ecc. come tasti funzione standard" in Impostazioni di Sistema, sotto Tastiera.
:::

## Finestre di dialogo e campi

| Tasto | Cosa fa |
|---|---|
| {{key:Enter}} | In un campo: applica il valore. Nella finestra di calibrazione: {{ui:Imposta la scala}}. |
| {{key:Esc}} | Chiude una finestra di dialogo (come {{ui:Annulla}}); chiude il modulo {{ui:Nuova voce}}. |
| {{key:Tab}} | Passa al campo successivo. |

## Note di piattaforma

:::mac
- {{key:Mod}} è il tasto Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Lo schermo intero fa eccezione: Control+Shift+F.
- Il clic destro è un clic a due dita sul trackpad, una volta attivato il clic secondario in Impostazioni di Sistema, sotto Trackpad. TakeoffCraft legge solo il pulsante secondario; un Control-clic può essere considerato un clic semplice e aggiungere un punto.
- Lo scorrimento a due dita sul trackpad ingrandisce la tavola (non la scorre). Per spostare la vista, premere e trascinare, oppure tenere premuto Space e trascinare.
- Page Up e Page Down corrispondono a fn con le frecce su e giù sulle tastiere che ne sono prive.
- Backspace è il tasto indicato come delete.
:::

:::windows
- {{key:Mod}} è Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Sul touchpad di un portatile, lo scorrimento a due dita ingrandisce la tavola. Per spostare la vista, premere e trascinare.
:::

:::linux
- {{key:Mod}} è Ctrl. Alcuni desktop usano scorciatoie proprie con Ctrl+Alt o Super; TakeoffCraft non ne usa nessuna.
- Su un touchpad, lo scorrimento a due dita ingrandisce la tavola. Per spostare la vista, premere e trascinare.
:::

:::touch
TakeoffCraft interpreta il tocco come un unico puntatore:

- Il tocco posiziona un punto, seleziona un segno o aggiunge un pallino di conteggio.
- Trascinare con un dito sposta la vista (in {{ui:Conteggio automatico}} disegna la casella di ricerca).
- Lo zoom a pizzico non è ancora supportato. Usare {{ui:Adatta alla pagina}} e {{ui:Adatta alla larghezza}}, oppure {{key:Plus}} e {{key:Minus}} su una tastiera.
- Per chiudere un'area, toccare il suo primo punto. Per terminare un tratto, toccare due volte dove il browser trasforma un doppio tocco in doppio clic, oppure premere {{key:Enter}} su una tastiera.
- Non c'è lettura della lunghezza in tempo reale finché non si tocca, perché non esiste il passaggio del puntatore.

Una tastiera con mouse o trackpad è oggi il modo migliore per fare il computo.
:::

## Tasti che il browser mantiene

I browser riservano per sé alcune scorciatoie, che una pagina non può usare: chiudere la scheda ({{key:Mod+W}}), nuova scheda o finestra ({{key:Mod+T}}, {{key:Mod+N}}) e zoom del browser ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Per questo TakeoffCraft ingrandisce la tavola con la rotella e con i soli tasti {{key:Plus}} e {{key:Minus}}. Se si preme {{key:Mod+Plus}} per errore, l'intera pagina si ingrandisce; {{key:Mod+0}} la riporta alla dimensione normale. Vedere [Tasti, mouse e trackpad](common:keys).

## Dove si trova Sposta

Non esiste un comando Sposta: selezionare un pallino di conteggio e trascinarlo, oppure selezionare un'area o una linea e trascinarne i quadratini d'angolo.
