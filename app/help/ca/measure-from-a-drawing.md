---
title: Mesura des d'un dibuix
summary: Preneu longituds i àrees de les pròpies línies, arcs, polilínies i trames del dibuix, seleccionant-los, amb arcs i forats exactes, en lloc de traçar-los amb clics.
keywords: mesura del dibuix, geometria, polilínia, arc, cercle, trama, bulge, longitud exacta, àrea exacta, selecciona, finestra, traça, des de cad, lineal, àrea
from: fd734246
---

{{ui:Mesura del dibuix}} a la barra del full d'un full DWG o DXF pren els objectes propis del dibuix com a marques, de manera que no els heu de traçar amb clics. La longitud d'una polilínia, la longitud d'un arc, l'àrea d'un cercle i l'àrea d'una trama amb els seus forats surten exactes, amb l'aritmètica que fa servir l'amidament per a cada marca.

## Pren objectes com a element lineal o d'àrea

1. Feu o trieu un element **lineal** o d'**àrea** sota {{ui:Elements}}. El full necessita una escala.
2. Trieu {{ui:Mesura del dibuix}}.
3. Feu clic als objectes del full per seleccionar-los, o arrossegueu una finestra al seu voltant: tot el que és totalment dins és seleccionat. {{key:Shift}} afegeix una finestra al que ja està seleccionat; feu clic de nou en un objecte seleccionat per treure'l. La barra en mostra el total: "6 trams: 108'-9 1/8" en total."
4. Trieu el botó d'afegir, que indica el nombre i l'element, com {{ui:Afegeix 6 a Vora}} (o premeu {{key:Enter}}). Cada objecte esdevé una marca de l'element, en un sol pas de desfer. {{key:Esc}} buida la selecció.

## Què pren cada tipus d'element

- Un element **lineal** pren línies, arcs, polilínies, cercles i splines per longitud. Una forma tancada es compta pel seu perímetre. Una trama queda fora: té àrea, no longitud, i la barra ho indica.
- Un element d'**àrea** pren formes tancades: polilínies tancades, cercles, sòlids 2D i trames amb els seus forats. Els trams oberts queden fora, i la barra ho indica.

## Exactes, i gairebé exactes

Les línies, els arcs (qualsevol bulge), les polilínies amb bulges i els cercles són exactes: les longituds i les àrees fan servir el radi i el sector de l'arc, no una imatge d'ells. Les el·lipses, les splines i les trames el contorn de les quals està format per arestes es mesuren en cordes d'un grau o més fines, que és dins d'una centèsima de per cent per a les el·lipses i d'una dècima per a la resta; la barra indica quants dels elements triats són corbes d'aquest tipus.

## D'on ve i què pren

- **Model**: objectes a l'espai model. **Una disposició**: les seves pròpies línies, i els objectes del model dins d'una finestra gràfica, escalats a través d'ella. Un objecte que creua la vora d'una finestra gràfica no s'ofereix (es traçaria retallat); un objecte que mostren dues finestres es pren una sola vegada.
- Només les capes que mostra el full. Els blocs es compten, no es mesuren: vegeu [Compta des d'un dibuix](topic:count-from-a-drawing). Les polilínies 3D, les malles, els sòlids i les regions no s'ofereixen.
