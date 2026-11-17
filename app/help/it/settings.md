---
title: Impostazioni di TakeoffCraft
summary: Mostrare i pollici fino a 1/16, 1/8 o 1/4, iniziare le nuove voci con una percentuale di sfrido, scegliere da dove parte il cursore del Conteggio automatico, agganciare alle linee del disegno o a 45° senza tenere premuto Shift, impostare la larghezza di una porta che il Riempimento locale chiude, e scegliere l'indicatore d'angolo della vista 3D.
keywords: impostazioni, preferenze, opzioni, precisione, frazioni, pollici, arrotondamento, sfrido, sfrido predefinito, conteggio automatico, soglia, corrispondenza, cursore, snap, 45, angolo, shift, ViewCube, icona degli assi, indicatore d'angolo, 3d
from: bca3f0ed
---

Aprire {{ui:Impostazioni}} con l'icona a ingranaggio nella barra dell'app oppure con {{key:Mod+,}}. La prima scheda, {{ui:TakeoffCraft}}, contiene le impostazioni proprie di questa app; {{ui:Generali}} contiene quelle condivise da tutte le app CadCraft (tema, pannelli, barra degli strumenti). Le impostazioni di TakeoffCraft esistono solo nell'app: si modificano qui, e questo browser le ricorda. Ripristina impostazioni di TakeoffCraft le riporta allo stato iniziale.

## Piedi e pollici

Mostrare le lunghezze fino al **1/16"** (predefinito), **1/8"** o **1/4"**. Questo cambia la lettura delle lunghezze sulla tavola, nei pannelli, nelle quantità e nella barra di stato.

Solo la visualizzazione viene arrotondata. Quantità, costi ed esportazioni sono calcolati dalle lunghezze esatte, e le esportazioni mostrano sempre 1/16".

## Sfrido iniziale

La percentuale di sfrido con cui parte ogni nuova voce: 0% (predefinito), 2%, 3%, 5%, 7.5%, 10%, 15% o 20%. È comunque possibile digitare un altro sfrido per ogni voce, nell'editor della voce o direttamente nella tabella delle quantità. Le voci già esistenti mantengono il proprio sfrido.

## Conteggio automatico: da dove parte il cursore di corrispondenza

Dove si trova il cursore {{ui:Corrispondenza}} quando termina una ricerca di [Conteggio automatico](topic:auto-count), da 50% a 95%; 75% è il valore iniziale. Un valore più basso propone più elementi simili da scartare; uno più alto ne propone meno. È comunque possibile spostare il cursore durante ogni verifica.

## Agganciare alle linee del disegno

Attivo all'inizio. Mentre si misura o si calibra, un punto vicino a una linea del PDF scatta alla sua estremità, al suo punto medio, a un incrocio o al punto più vicino su di essa. {{key:F3}} e {{ui:Snap}} nella barra di stato attivano e disattivano anche questa funzione. Altro: [Agganciare alle linee del disegno](topic:snap-to-the-drawing).

## Riempimento locale: quanto è larga un'apertura che chiude

{{ui:Il riempimento del locale chiude aperture fino a}} imposta la larghezza di un'apertura di porta o di uno spazio che lo strumento {{ui:Locale}} considera chiuso: da 3'-0" a 8'-0", 4'-0" all'inizio. Se è più larga della porta più grande, un locale si estende nel successivo; se è più stretta di una porta, il locale resta aperto. Vedere [Riempire un locale con un clic](topic:measure-areas#fill-a-room-with-one-click).

## Agganciare a 45° senza tenere premuto Shift

Disattivato all'inizio. Quando è attivo, linee, contorni, vuoti e angoli trascinati si dispongono a 0°, 45°, 90° o 135° rispetto all'ultimo punto senza tenere premuto {{key:Shift}}; tenere premuto {{key:Shift}} per fare clic a qualsiasi angolo. La barra di stato indica allora "Aggancio a 45°; Shift libera l'angolo". Il punto su cui si fa clic sulla curva di un arco e i cerchi non vengono mai agganciati; lo è l'estremità di un arco.

## Dimensione del marcatore di conteggio

Dimensione dei punti di conteggio: {{ui:Extra piccola}}, {{ui:Piccola}}, {{ui:Media}} (predefinita: la dimensione che i punti hanno sempre avuto) oppure {{ui:Grande}}. La dimensione resta la stessa sullo schermo a ogni zoom, e il PDF con i segni disegna ogni punto alla stessa dimensione sulla carta, qualunque sia la dimensione della tavola, quindi il PDF al 100% appare come lo schermo. Altro: [Conteggio manuale](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicatore d'angolo

Solo per la [vista di controllo 3D](topic:check-in-3d): {{ui:ViewCube}} (predefinito: un cubo in alto a destra da cliccare, trascinare e ruotare), {{ui:Icona degli assi}} (un piccolo marcatore X, Y, Z in basso a destra) oppure {{ui:Nessuno}}. Cambia subito e viene ricordato in questo browser. La tavola piatta non ne mostra mai uno.

## Strumento percorso: lo spazio massimo che unisce

{{ui:Strumento percorso: spazio massimo da unire}} è la distanza massima tra due estremi di linea perché contino ancora come un unico percorso, in punti PDF (da 0.05 a 60; 1.5 all'inizio). Le linee di un disegno spesso si fermano un soffio prima di toccarsi. Un valore più grande unisce di più; uno più piccolo mantiene le linee separate. {{key:[}} e {{key:]}} lo cambiano durante la selezione, e questo campo lo segue. Vedere [Scegliere le linee](topic:pick-the-lines).
