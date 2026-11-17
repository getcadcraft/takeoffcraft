---
title: Medir desde un plano
summary: Tome longitudes y áreas de las propias líneas, arcos, polilíneas y tramas del dibujo, eligiéndolos, con arcos y huecos exactos, en lugar de trazar con clics.
keywords: medir dibujo, geometría, polilínea, arco, círculo, trama, abombamiento, longitud exacta, área exacta, elegir, ventana, trazar, desde CAD, lineal, área
from: fd734246
---

{{ui:Medir dibujo}} en la barra de la hoja de una hoja DWG o DXF toma los objetos propios del dibujo como marcas, de modo que no hace falta trazarlos con clics. La longitud de una polilínea, la longitud de un arco, el área de un círculo y el área de una trama con sus huecos salen exactas, con el mismo cálculo que la medición usa para cada marca.

## Tomar objetos como partida lineal o de área

1. Cree o haga clic en una partida **lineal** o de **área** bajo {{ui:Partidas}}. La hoja necesita una escala.
2. Elija {{ui:Medir dibujo}}.
3. Haga clic en los objetos de la hoja para elegirlos, o arrastre una ventana alrededor de ellos: se elige todo lo que quede completamente dentro. {{key:Shift}} añade una ventana a lo elegido; haga clic de nuevo en un objeto elegido para quitarlo. La barra muestra el total: "6 tramos: 108'-9 1/8" en total".
4. Elija el botón de añadir, que indica la cantidad y la partida, como {{ui:Añadir 6 a Edge}} (o pulse {{key:Enter}}). Cada objeto pasa a ser una marca de la partida, en un solo paso de deshacer. {{key:Esc}} borra lo elegido.

## Qué toma cada tipo de partida

- Una partida **lineal** toma líneas, arcos, polilíneas, círculos y splines por su longitud. Una forma cerrada cuenta por su perímetro. Una trama se deja fuera: tiene área, no longitud, y la barra lo indica.
- Una partida de **área** toma formas cerradas: polilíneas cerradas, círculos, sólidos 2D y tramas con sus huecos. Los tramos abiertos se dejan fuera, y la barra lo indica.

## Exactas, y casi exactas

Las líneas, los arcos (con cualquier abombamiento), las polilíneas con abombamientos y los círculos son exactos: las longitudes y las áreas usan el radio y el barrido del arco, no una imagen de él. Las elipses, las splines y las tramas cuyo contorno está formado por bordes se miden en cuerdas de un grado o más finas, lo que queda dentro de una centésima del uno por ciento para las elipses y una décima para el resto; la barra indica cuántos de los elegidos son curvas de este tipo.

## De dónde toma cada cosa

- **Modelo**: objetos del espacio modelo. **Una presentación**: sus propias líneas, y los objetos del modelo dentro de una ventana gráfica, escalados a través de ella. Un objeto que cruza el borde de una ventana gráfica no se ofrece (se imprimiría recortado); un objeto que dos ventanas gráficas muestran se toma una sola vez.
- Solo las capas que muestra la hoja. Los bloques se cuentan, no se miden: consulte [Contar desde un plano](topic:count-from-a-drawing). No se ofrecen las polilíneas 3D, las mallas, los sólidos ni las regiones.
