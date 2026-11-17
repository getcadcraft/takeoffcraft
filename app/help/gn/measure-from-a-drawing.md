---
title: Medir desde un plano
summary: Tomá longitudes y áreas de las líneas, arcos, polilíneas y sombreados propios del plano, eligiéndolos, con arcos y agujeros exactos, en lugar de trazarlos con clics.
keywords: medir plano, geometría, polilínea, arco, círculo, sombreado, bulge, longitud exacta, área exacta, elegir, ventana, trazar, desde cad, lineal, área
from: fd734246
---

{{ui:Medir plano}} en la barra de hoja de una hoja DWG o DXF toma los objetos propios del plano como marcas, así no los trazás con clics. La longitud de una polilínea, la longitud de un arco, el área de un círculo y el área de un sombreado con sus agujeros salen exactas, con la misma aritmética que usa el cómputo para cada marca.

## Tomar objetos como un ítem lineal o de área

1. Creá o hacé clic en un ítem **lineal** o de **área** debajo de {{ui:Ítems}}. La hoja necesita una escala.
2. Elegí {{ui:Medir plano}}.
3. Hacé clic en los objetos de la hoja para elegirlos, o arrastrá una ventana alrededor de ellos: se elige todo lo que queda totalmente dentro. {{key:Shift}} agrega una ventana a lo elegido; hacé clic otra vez en un objeto elegido para quitarlo. La barra muestra el total: "6 tramos: 108'-9 1/8" en total."
4. Elegí el botón de agregar, que indica el número y el ítem, por ejemplo {{ui:Agregar 6 a Edge}} (o presioná {{key:Enter}}). Cada objeto se convierte en una marca del ítem, en un solo paso de deshacer. {{key:Esc}} borra lo que elegiste.

## Qué toma cada tipo de ítem

- Un ítem **lineal** toma líneas, arcos, polilíneas, círculos y splines por su longitud. Una forma cerrada cuenta por su perímetro. Un sombreado queda afuera: tiene área, no longitud, y la barra lo indica.
- Un ítem de **área** toma formas cerradas: polilíneas cerradas, círculos, sólidos 2D y sombreados con sus agujeros. Los tramos abiertos quedan afuera, y la barra lo indica.

## Exacto, y casi exacto

Las líneas, los arcos (cualquier bulge), las polilíneas con bulges y los círculos son exactos: las longitudes y áreas usan el radio y el barrido del arco, no una imagen de él. Las elipses, splines y sombreados cuyo contorno está hecho de bordes se miden en cuerdas de un grado o menos, lo que da un error menor a una centésima de por ciento para elipses y a una décima para el resto; la barra indica cuántos de los elegidos son curvas de este tipo.

## De dónde toma

- **Modelo**: objetos del espacio modelo. **Una hoja de presentación**: sus propias líneas, y los objetos del modelo dentro de una ventana gráfica, escalados a través de ella. Un objeto que cruza el borde de una ventana gráfica no se ofrece (se imprimiría recortado); un objeto que dos ventanas gráficas muestran se toma una sola vez.
- Solo las capas que la hoja muestra. Los bloques se cuentan, no se miden: ver [Contar desde un plano](topic:count-from-a-drawing). Las polilíneas 3D, mallas, sólidos y regiones no se ofrecen.
