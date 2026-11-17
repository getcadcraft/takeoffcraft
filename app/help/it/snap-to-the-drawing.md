---
title: Snap alle linee del disegno
summary: I punti si agganciano alle linee vettoriali del PDF mentre si misura o si calibra, su estremità, punti medi, incroci o un punto qualsiasi di una linea, con un segno che indica quale sia.
keywords: snap, snap a oggetto, osnap, punto finale, punto medio, intersezione, punto più vicino, vettoriale, linee, tratti, preciso, esatto, f3, magnete, angolo
from: 41d29e9b
---

Il PDF di una serie di piante è in genere vettoriale: i muri e i bordi sono linee vere, non pixel. Durante la misurazione TakeoffCraft aggancia i clic a quelle linee, così una misura inizia esattamente nell'angolo di un muro e una calibrazione legge la quota disegnata dal progettista, non il pixel che si è toccato.

Snap è attivo all'avvio. Per attivarlo o disattivarlo usare {{ui:Snap}} nella barra di stato oppure {{key:F3}}; l'impostazione viene mantenuta in questo browser (si trova anche in [Impostazioni](topic:settings)).

## A che cosa si aggancia

Quando il puntatore si trova a circa 10 pixel dello schermo da una linea, compare un segno che indica dove atterrerà il clic, con il suo nome:

| Segno | Nome | Dove |
|---|---|---|
| Quadrato | **Punto finale** | L'estremità di una linea, o un angolo in cui le linee si incontrano. Contano le due estremità di una curva; i punti lungo di essa no. |
| Triangolo | **Punto medio** | Il centro di una linea retta. |
| Croce | **Intersezione** | Dove due linee si incrociano, o dove una termina su un'altra. |
| Clessidra | **Sulla linea** | Il punto più vicino su una linea, quando nessun punto finale, punto medio o intersezione è vicino. |

Vince il punto finale, il punto medio o l'intersezione più vicini. Solo se nessuno è vicino, il punto cade sulla linea stessa. Ingrandire per scegliere tra punti molto vicini tra loro: i 10 pixel sono pixel dello schermo, quindi a uno zoom maggiore coprono una porzione minore del foglio.

## Dove funziona

Snap funziona in {{ui:Lineare}}, {{ui:Area}}, {{ui:Cerchio}}, {{ui:Vuoto}}, {{ui:Calibra}} e {{ui:Verifica}}, e quando si trascina l'angolo di un segno selezionato. Aggancia anche i punti degli archi. {{ui:Conteggio}}, {{ui:Conteggio automatico}} e l'incolla non vengono agganciati.

Un punto agganciato prevale sullo snap a 45° di {{key:Shift}}: per disegnare a 45° lontano dalle linee, disattivare prima Snap con {{key:F3}}.

:::tip
Calibrare con Snap attivo. Fare clic vicino alle due estremità di una linea di quota o di un muro di cui si conosce la misura: entrambi i punti cadono esattamente sul disegno e la scala risulta esatta (la barra di stato indica poi il preset corrispondente).
:::

## Fogli su cui non è possibile agganciarsi

- **I fogli scansionati** sono immagini senza linee a cui agganciarsi. La barra di stato indica "Questo foglio non ha linee a cui agganciarsi (una pagina scansionata è un'immagine)." e i punti vanno dove si fa clic.
- **Disegni molto grandi**: lo snap legge fino a 400.000 segmenti di linea per foglio. Su un foglio con più segmenti, lo indica e si aggancia solo ai primi.
- **Il testo** non viene agganciato, a meno che il PDF non disegni le lettere come linee (alcuni plotter lo fanno).

Le linee del foglio vengono lette la prima volta che lo si apre, in background; un foglio grande può richiedere un secondo prima che compaiano i segni.
