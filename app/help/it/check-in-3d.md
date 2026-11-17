---
title: Verificare il computo in 3D
summary: Vedere i muri, i solai e i conteggi della tavola aperta che stanno in piedi sul disegno, ruotarli attorno e cliccarne uno per selezionarne il segno.
keywords: png, immagine, figura, screenshot, impila, piani, livelli, prospetto, glb, gltf, esporta 3d, spessore muro, altezza base, apertura, altezza architrave, 3d, verifica, vista, muri, altezza muro, solaio, profondità, volume, orbita, modello, selezione, isometrica, prospettiva
from: fb16b4f7
---

La vista 3D è una verifica, non un secondo disegno: pone il computo della tavola in piedi sulla tavola stessa, così un muro mancante, un solaio duplicato o un conteggio sbagliato si vedono a colpo d'occhio.

Prima di iniziare: la tavola deve avere una scala ([Impostare la scala](topic:set-the-scale)). Altezze e profondità richiedono piedi reali, quindi su una tavola senza scala {{ui:3D}} lo segnala e resta sulla tavola piana.

## Aprire la vista 3D

1. Mostrare la tavola da verificare.
2. Scegliere {{ui:3D}} sulla barra che mostra il nome e la scala della tavola, oppure premere {{key:3}}.
   La prima volta, la vista 3D impiega un momento a caricarsi. La tavola è disegnata a terra, e il computo vi sta sopra con il colore di ciascuna voce.
3. Per tornare indietro, scegliere di nuovo {{ui:3D}}, {{ui:Torna alla tavola}}, oppure premere {{key:3}}. Scegliere uno strumento di disegno (Lineare, Area, Conteggio e così via) riporta anch'esso alla vista piana, perché i segni sono disegnati sulla tavola piana.

La vista mostra la tavola a schermo; per cambiare tavola si usa l'elenco delle tavole, oppure {{key:PageDown}} e {{key:PageUp}}, e la vista 3D segue. Per vedere più piani insieme, impilarli (sotto).

## Cosa si vede

| Segno | In 3D |
|---|---|
| Tratto lineare, voce con altezza | Un muro di quell'altezza lungo il tratto. I tratti curvi seguono la curva. |
| Tratto lineare, voce senza altezza | Una linea sulla tavola. Assegnare un'altezza alla voce in **Voce** per farla stare in piedi. |
| Area, voce con profondità | Un solaio di quella profondità, con i suoi vuoti aperti. |
| Area, voce senza profondità | Una lastra sottile di 2" così resta visibile. |
| Conteggio | Un piccolo palo su ogni punto conteggiato. |

L'altezza è il campo {{ui:Altezza}} di una voce lineare e la profondità il campo {{ui:Profondità}} di una voce area, sotto **Voce** (vedere [Creare voci di computo](topic:create-items)). Cambiandola, la vista 3D si aggiorna subito. La nota sotto il nome della tavola indica cosa contiene la tavola, per esempio "Questa tavola in 3D: 2 muri, 1 solaio, 3 conteggi", e quanti tratti o aree non hanno altezza o profondità. I clic attraversano la nota e raggiungono la vista.

I numeri non cambiano in 3D: l'area di un muro è la sua lunghezza esatta per l'altezza, e il volume di un solaio è la sua area netta (contorno meno vuoti, curve esatte) per la profondità. Le curve sono disegnate come brevi tratti rettilinei solo a schermo.

## Guardarsi intorno

| Azione | Cosa fa |
|---|---|
| Trascinare, oppure trascinare con il pulsante centrale | Ruota attorno al computo. |
| {{key:Shift}} + trascinamento, oppure trascinare con il pulsante destro | Sposta la vista. |
| Rotellina del mouse | Ingrandisce e riduce nel punto del puntatore. |
| Scorrimento a due dita sul trackpad | Ruota ({{key:Shift}} sposta). Un pizzico ingrandisce. |
| {{ui:Iso}}, {{ui:Sopra}}, {{ui:Anteriore}}, {{ui:Posteriore}}, {{ui:Sinistra}}, {{ui:Destra}}, {{ui:Sotto}} | Viste standard, inquadrate sul computo. La vista 3D si apre in {{ui:Iso}}. |
| {{ui:Prospettiva}} | Prospettiva attiva o disattiva (parallela quando disattiva). |
| {{ui:Zoom estensione}} oppure {{key:F}} | L'intera tavola. |
| {{ui:Tavola}} | Mostra o nasconde il disegno a terra. |
| Il cubo di vista, in alto a destra | Fare clic su una faccia, uno spigolo o un vertice per guardare da lì; trascinarlo per ruotare; trascinare il suo anello della bussola per girare; il pulsante casa riporta a {{ui:Iso}}. |

L'angolo mostra un cubo di vista, una piccola icona degli assi X, Y, Z, oppure niente: si sceglie in {{ui:Impostazioni}}, nella scheda TakeoffCraft, sotto **Indicatore d'angolo** ([Impostazioni di TakeoffCraft](topic:settings)). La tavola piana non ha indicatore d'angolo.

:::touch
Un dito ruota la vista; due dita pizzicano per ingrandire e scorrono per spostare. Un tocco seleziona.
:::

## Muri con spessore, base e aperture

Un'altezza di voce lineare sta in piedi come una striscia sottile. Per vederla come un vero muro, assegnare alla voce la sua forma in **In 3D** nelle sue impostazioni:

- **Spessore muro** (8", 0.2 m): il muro diventa un solido, centrato sulla linea tracciata, con angoli a 45°.
- **Altezza base**: il muro parte a quella distanza sopra il pavimento (un sottotrave, una fila di pensili). Anche le voci area la hanno: un soffitto a 9'-0".
- **Architrave di apertura**: un segmento detratto (una porta, [Detrarre una parte di un tratto](topic:measure-linear#deduct-a-part-of-a-run)) mantiene il muro sopra quell'altezza, così una porta si vede come porta. Senza di essa, un segmento detratto lascia un vuoto fino in cima.

Questi valori modellano solo la vista 3D: le quantità (lunghezza, area del muro, costi) restano invariate.

## Impilare i piani

1. Aprire i PDF di ogni piano.
2. Nella vista 3D, scegliere {{ui:Quote…}} e digitare la quota di ciascun piano, per esempio `0` per il piano terra e `12'` per il successivo. Lasciare vuoto un campo esclude una tavola.
3. Scegliere {{ui:Impila}}. Ogni tavola con una quota mostra il suo computo alla sua altezza; la tavola a schermo giace sotto il proprio piano, le altre sono in contorno. La nota dice quanti piani sono impilati.

Le tavole si allineano in base alla loro posizione sulla pagina, quindi questo funziona per piante stampate allo stesso modo (stessa dimensione e posizione del foglio). Una tavola con una quota ma senza scala viene esclusa, e la nota lo indica. Scegliere di nuovo {{ui:Impila}} per mostrare una tavola alla volta. Le quote sono salvate con il computo.

## Salvare la vista 3D come immagine

Scegliere {{ui:PNG}} sulla barra 3D per un'immagine della vista così com'è a schermo (`… 3D.png`); {{key:Shift}} + clic su {{ui:PNG}} la rende il doppio (`… 3D@2x.png`), per la stampa.

## Salvare la vista 3D come modello

Scegliere {{ui:GLB}} sulla barra 3D. Si ottiene un file `.glb` (glTF, binario) di ciò che mostra la vista (il piano a schermo, oppure ogni piano impilato), che altri programmi 3D aprono: un oggetto per segno, con il nome della sua voce, nel colore della voce, in metri con Y verso l'alto. La tavola stessa e i contorni non sono inclusi.

## Selezionare un segno dal 3D

Cliccare un muro, un solaio, una lastra o un palo. Il suo segno diventa il segno selezionato, come se fosse stato cliccato sulla tavola: compare sotto **Segno selezionato**, la sua voce diventa quella corrente, e la barra di stato ne indica lunghezza e altezza, oppure area, profondità e yard cubi. {{key:Shift}} + clic aggiunge segni alla selezione o li toglie. {{key:Delete}} elimina i segni selezionati e {{key:Mod+Z}} li riporta; {{key:Esc}} deseleziona tutto. Tornati sulla tavola, gli stessi segni restano selezionati.

:::tip
Il disegno segue il tema: in Modello, la tavola a terra diventa scura come la vista piana.
:::
