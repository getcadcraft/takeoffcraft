---
title: Medir desde un debuxo
summary: Tomar lonxitudes e superficies das propias liñas, arcos, polilíneas e tramas do debuxo escolléndoos, con arcos e buratos exactos, en vez de trazar con clics.
keywords: medir debuxo, xeometría, polilínea, arco, círculo, trama, abultamento, lonxitude exacta, superficie exacta, escoller, xanela, trazar, desde cad, lineal, superficie
from: fd734246
---

{{ui:Measure drawing}} na barra de folla dunha folla DWG ou DXF toma os propios obxectos do debuxo como marcas, así que non os debe trazar con clics. A lonxitude dunha polilínea, a lonxitude dun arco, a superficie dun círculo e a superficie dunha trama cos seus buratos saen exactas, coa aritmética que usa a medición para cada marca.

## Tomar obxectos como elemento lineal ou de superficie

1. Cree ou faga clic nun elemento **lineal** ou de **superficie** baixo {{ui:Items}}. A folla necesita unha escala.
2. Escolla {{ui:Measure drawing}}.
3. Faga clic nos obxectos da folla para escollelos, ou arrastre unha xanela ao seu redor: colle todo o que está enteiramente dentro dela. {{key:Shift}} engade unha xanela ao escollido; faga clic de novo nun obxecto escollido para quitalo. A barra mostra o total: «6 tramos: 108'-9 1/8" en total».
4. Escolla o botón de engadir, que indica o número e o elemento, como {{ui:Add 6 to Edge}} (ou prema {{key:Enter}}). Cada obxecto convértese nunha marca do elemento, nun só paso de desfacer. {{key:Esc}} borra o que escolleu.

## Que toma cada tipo de elemento

- Un elemento **lineal** toma liñas, arcos, polilíneas, círculos e splines pola súa lonxitude. Unha forma pechada conta polo seu perímetro. Unha trama queda fóra: ten superficie, non lonxitude, e a barra así o indica.
- Un elemento de **superficie** toma formas pechadas: polilíneas pechadas, círculos, sólidos 2D e tramas cos seus buratos. Os tramos abertos quedan fóra, e a barra así o indica.

## Exactos, e case exactos

As liñas, os arcos (con calquera abultamento), as polilíneas con abultamentos e os círculos son exactos: as lonxitudes e superficies usan o raio e o barrido do arco, non unha imaxe del. As elipses, as splines e as tramas cuxo contorno está formado por bordos mídense en cordas dun grao ou máis finas, o que queda dentro dunha centésima por cento nas elipses e dunha décima no resto; a barra indica cantos dos obxectos escollidos son curvas deste tipo.

## De onde toma

- **Modelo**: obxectos no espazo modelo. **Unha disposición**: as súas propias liñas e os obxectos do modelo dentro dunha área de visualización, escalados a través dela. Un obxecto que cruza o bordo dunha área de visualización non se ofrece (sairía recortado ao imprimir); un obxecto que amosan dúas áreas de visualización cóllese unha vez.
- Só as capas que mostra a folla. Os bloques contanse, non se miden: vexa [Contar desde un debuxo](topic:count-from-a-drawing). Non se ofrecen as polilíneas 3D, as mallas, os sólidos nin as rexións.
