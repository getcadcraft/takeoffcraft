---
title: Contar todo el juego
summary: Enmarque una vez la leyenda de símbolos y TakeoffCraft cuenta cada símbolo de ella en todas las hojas abiertas de una vez. Cada recuento es un enlace a su hoja, y usted revisa antes de añadir nada.
keywords: contar todo, leyenda, leyenda de símbolos, juego completo, todo el juego, todas las hojas, cada hoja, cada puerta, cada luminaria, dispositivos, cuadro, símbolos, autorrecuento, juego de planos, 200 hojas, nivel de coincidencia, parecidos
from: adc99744
---

{{ui:Contar todo}} lee una leyenda de símbolos y luego cuenta cada símbolo de ella en todas las hojas abiertas. Es {{ui:Autorrecuento}} para una leyenda completa de una vez. Es una simple coincidencia de símbolos en sus propias hojas, no un modelo entrenado, y nada sale de su equipo. Revise los recuentos antes de añadirlos: es una ayuda, no una garantía.

## Contar una leyenda

1. Abra los planos. Vale cualquier leyenda de cualquier hoja: los símbolos con sus nombres al lado.
2. Elija {{ui:Contar todo}} en la barra de herramientas.
3. Arrastre un recuadro alrededor de la leyenda, símbolos y nombres. Un título sin símbolo al lado (SYMBOL LEGEND) queda fuera por sí solo.
   El panel enumera cada símbolo con su imagen y el nombre impreso a su lado. El nombre se convierte en el nombre de la partida, así que cámbielo aquí si quiere.
4. Desmarque los símbolos que no quiera contar. Un símbolo que no se puede buscar (demasiado pequeño, o en blanco) lo indica.
5. Elija {{ui:Contar en N hojas}}. Una barra muestra la hoja que se busca; {{ui:Cancelar}} detiene la ejecución. La página sigue utilizable.

La leyenda no cuenta sus propios símbolos en su hoja. Una hoja dibujada a otra escala se busca a esa escala, y los símbolos se encuentran girados en cualquier ángulo recto.

## Revisar los recuentos

- Cada símbolo muestra su total y, debajo, un enlace por cada hoja que tenga alguno («E-103: 4»). Haga clic en uno para ir a esa hoja. Los hallazgos se enmarcan en el color de la partida.
- **Haga clic en un recuadro** para descartar ese hallazgo. Se dibuja discontinuo y tachado; haga clic de nuevo para recuperarlo.
- **Mueva el nivel de coincidencia** (del 50 % al 100 %, empezando por el nivel de sus Ajustes). Un valor más alto solo conserva las coincidencias cercanas. El control solo filtra lo encontrado; no se vuelve a buscar.
- Dos símbolos parecidos (una toma doble y una cuádruple) pueden coincidir en el mismo punto. La mejor coincidencia se queda con él y el panel indica en cuántos puntos ha pasado, para que pueda revisarlos.
- Una hoja demasiado grande para buscar al tamaño del símbolo se omite, y el panel lo indica.

## Añadirlos

Elija {{ui:Añadir N marcas}}. Cada símbolo se convierte en una partida de recuento con una marca en cada hallazgo. Un nombre que ya es una partida de recuento suya se reutiliza (nada se duplica donde ya marcó a mano). Todo el proceso es un solo paso: {{key:Ctrl+Z}} quita todas las partidas y marcas.

Lo que acepte también alimenta {{ui:Aprendido}}: los símbolos se recuerdan en el archivo de la medición para la próxima vez.

## Con su asistente

Si permite asistentes en Ajustes, pueden leer una leyenda (legend_open), ejecutar el recuento en segundo plano (legend_count_start, y luego legend_count_status), leer los recuentos (legend_count_result) y añadirlos (legend_count_add, que puede previsualizar antes lo que añadiría). Es la misma ejecución que ve en el panel.

## Símbolos en cualquier ángulo

Marque {{ui:Símbolos en cualquier ángulo}} antes de contar para encontrar también símbolos dibujados con un ángulo que no sea recto (un taco de pared en diagonal, una luminaria girada para seguir un tejado). La búsqueda entonces gira cada símbolo cada 15 grados; un símbolo redondo aún necesita una búsqueda, y uno que no es redondo puede tardar hasta seis veces más. Déjelo desmarcado para planos dibujados a escuadra.

## Conviene saber

- Necesita símbolos dibujados de la misma forma que en la leyenda. Una leyenda dibujada a un tamaño distinto de las hojas está bien cuando las escalas de las hojas están fijadas; sin escalas, los símbolos se buscan al tamaño de la leyenda.
- Un símbolo con una pared o una línea larga que lo atraviesa puede pasarse por alto, porque ya no se parece al dibujo de la leyenda. Revise los hallazgos de la primera hoja antes de fiarse del resto.
- Un escaneo sin texto también funciona: los símbolos se encuentran por sus filas, y usted escribe los nombres.
