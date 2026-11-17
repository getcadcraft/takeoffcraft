---
title: Contar todo el juego
summary: Enmarque una vez la leyenda de símbolos y TakeoffCraft cuenta cada símbolo de ella en cada hoja abierta en una sola ejecución. Cada conteo es un vínculo a su hoja, y usted revisa antes de que se agregue nada.
keywords: contar todo, leyenda, leyenda de símbolos, juego completo, cada hoja, todas las hojas, cada puerta, cada accesorio, dispositivos, cédula, símbolos, conteo automático, juego de planos, 200 hojas, nivel de coincidencia, parecidos
from: adc99744
---

{{ui:Contar todo}} lee una leyenda de símbolos y después cuenta cada símbolo de ella en cada hoja abierta. Es {{ui:Conteo automático}} para toda una leyenda a la vez. Es solo coincidencia de símbolos en sus propias hojas, no un modelo entrenado, y nada sale de su computadora. Revise los conteos antes de agregarlos: es una ayuda, no una garantía.

## Contar una leyenda

1. Abra los planos. Sirve una leyenda en cualquier hoja: los símbolos con sus nombres al lado.
2. Elija {{ui:Contar todo}} en la barra de herramientas.
3. Arrastre un recuadro alrededor de la leyenda, con símbolos y nombres. Un título sin símbolo a su lado (LEYENDA DE SÍMBOLOS) se deja fuera por sí solo.
   El panel enumera cada símbolo con su imagen y el nombre impreso al lado. El nombre se convierte en el nombre de la partida, así que cámbielo aquí si lo desea.
4. Desmarque cualquier símbolo que no quiera contar. Un símbolo que no se puede buscar (demasiado pequeño, o en blanco) indica por qué.
5. Elija {{ui:Contar en N hojas}}. Una barra muestra la hoja que se busca; {{ui:Cancelar}} detiene la ejecución. La página sigue utilizable.

Los propios símbolos de la leyenda no se cuentan en su hoja. Una hoja dibujada con otra escala se busca a esa escala, y los símbolos se encuentran girados en cualquier ángulo recto.

## Revisar los conteos

- Cada símbolo muestra su total y, debajo, un vínculo por cada hoja que tenga alguno ("E-103: 4"). Haga clic en uno para ir a esa hoja. Los hallazgos se enmarcan con el color de la partida.
- **Haga clic en un recuadro** para excluir ese hallazgo. Queda punteado y tachado; haga clic de nuevo para restaurarlo.
- **Mueva el nivel de coincidencia** (de 50 % a 100 %, empezando por su nivel en Configuración). Un valor más alto conserva solo las coincidencias cercanas. El control deslizante solo filtra lo encontrado; no vuelve a buscar.
- Dos símbolos que se parecen (un contacto dúplex y uno cuádruple) pueden coincidir en el mismo lugar. La mejor coincidencia lo toma y el panel indica en cuántos lugares ocurrió, para que pueda revisarlos.
- Una hoja demasiado grande para buscar al tamaño del símbolo se omite, y el panel lo indica.

## Agregarlos

Elija {{ui:Agregar N marcas}}. Cada símbolo se convierte en una partida de conteo con una marca en cada hallazgo. Un nombre que ya es una partida de conteo suya se reutiliza (no se duplica nada donde ya marcó a mano). Toda la ejecución es un solo paso: {{key:Ctrl+Z}} quita todas las partidas y marcas.

Lo que acepta también alimenta {{ui:Aprendido}}: los símbolos se recuerdan en el archivo de la cuantificación para la próxima vez.

## Con su asistente

Si permite asistentes en Configuración, pueden leer una leyenda (legend_open), ejecutar el conteo en segundo plano (legend_count_start, luego legend_count_status), leer los conteos (legend_count_result) y agregarlos (legend_count_add, que primero puede mostrar una vista previa de lo que agregaría). Es la misma ejecución que ve en el panel.

## Símbolos en cualquier ángulo

Marque {{ui:Símbolos en cualquier ángulo}} antes de contar para encontrar también los símbolos dibujados en un ángulo que no es recto (un taquete diagonal, un accesorio girado para seguir un techo). La búsqueda gira entonces cada símbolo cada 15 grados; un símbolo redondo todavía necesita una búsqueda, y uno que no es redondo puede tardar hasta seis veces más. Déjela desactivada en planos dibujados en escuadra.

## Conviene saber

- Necesita símbolos dibujados de la misma forma que en la leyenda. Una leyenda dibujada a un tamaño distinto del de las hojas está bien cuando las escalas de las hojas están fijadas; sin escalas, los símbolos se buscan al tamaño de la leyenda.
- Un símbolo con un muro o una línea larga que lo atraviesa puede pasarse por alto, porque ya no se parece a la imagen de la leyenda. Revise los hallazgos de la primera hoja antes de confiar en el resto.
- Un escaneo sin texto también funciona: los símbolos se encuentran por sus filas, y usted escribe los nombres.
