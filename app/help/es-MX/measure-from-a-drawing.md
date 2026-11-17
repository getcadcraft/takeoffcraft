---
title: Medir desde un dibujo
summary: Tome longitudes y áreas de las propias líneas, arcos, polilíneas y sombreados del dibujo, eligiéndolos, con arcos y huecos exactos, en lugar de trazar con clics.
keywords: medir dibujo, geometría, polilínea, arco, círculo, sombreado, bulge, longitud exacta, área exacta, elegir, ventana, trazar, desde CAD, lineal, área
from: fd734246
---

{{ui:Measure drawing}} en la barra de la hoja de una hoja DWG o DXF toma los objetos propios del dibujo como marcas, así que no los traza con clics. La longitud de una polilínea, la longitud de un arco, el área de un círculo y el área de un sombreado con sus huecos salen exactas, con la misma aritmética que la cuantificación usa para cada marca.

## Tomar objetos como partida lineal o de área

1. Cree o haga clic en una partida **lineal** o de **área** bajo {{ui:Items}}. La hoja necesita una escala.
2. Elija {{ui:Measure drawing}}.
3. Haga clic en los objetos de la hoja para elegirlos, o arrastre una ventana alrededor de ellos: se eligen todos los que quedan completamente dentro. {{key:Shift}} agrega una ventana a lo elegido; haga clic otra vez en un objeto elegido para quitarlo. La barra muestra el total: "6 tramos: 108'-9 1/8" en total."
4. Elija el botón de agregar, que indica el número y la partida, como {{ui:Add 6 to Edge}} (o pulse {{key:Enter}}). Cada objeto se convierte en una marca de la partida, en un solo paso de deshacer. {{key:Esc}} borra lo que eligió.

## Qué toma cada tipo de partida

- Una partida **lineal** toma líneas, arcos, polilíneas, círculos y splines por longitud. Una forma cerrada cuenta por su perímetro. Un sombreado se omite: tiene área, no longitud, y la barra lo indica.
- Una partida de **área** toma formas cerradas: polilíneas cerradas, círculos, sólidos 2D y sombreados con sus huecos. Los tramos abiertos se omiten, y la barra lo indica.

## Exactos, y casi exactos

Las líneas, los arcos (cualquier bulge), las polilíneas con bulges y los círculos son exactos: las longitudes y las áreas usan el radio y el barrido del arco, no una imagen de él. Las elipses, los splines y los sombreados cuyo contorno está hecho de aristas se miden en cuerdas de un grado o menos, lo que queda dentro del 0.01 % en elipses y del 0.1 % en el resto. La barra indica cuántos de los objetos elegidos son curvas de este tipo.

## De dónde toma cada cosa

- **Modelo**: objetos del espacio modelo. **Una presentación**: sus propias líneas, y los objetos del modelo dentro de una ventana gráfica, escalados a través de ella. Un objeto que cruza el borde de una ventana gráfica no se ofrece (se trazaría recortado); un objeto que dos ventanas gráficas muestran se toma una sola vez.
- Solo las capas que la hoja muestra. Los bloques se cuentan, no se miden: vea [Contar desde un dibujo](topic:count-from-a-drawing). Las polilíneas 3D, las mallas, los sólidos y las regiones no se ofrecen.
