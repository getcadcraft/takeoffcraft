---
title: Elegir las líneas del PDF
summary: Haga clic en una línea de un PDF vectorial para medir todo su trayecto conectado, o haga clic dentro de un contorno cerrado para medir su área, con la tolerancia de huecos visible y un paso de deshacer por segmento.
keywords: trayectoria, elegir, trazos, conectado, recorrido completo, trazar, contorno, perímetro, hueco, tolerancia, puente, segmentos, tab, vectorial, área desde líneas, p
from: c22526ae
---

En un PDF vectorial, los muros y los bordes son líneas reales. {{ui:Trayectoria}} ({{key:P}}) las toma tal como están dibujadas: un clic en una línea mide todo lo unido a ella, de extremo a extremo, así que no tiene que trazar un muro haciendo clic en sus esquinas. La hoja necesita una escala. Una página escaneada no tiene líneas que elegir; use [Lineal](topic:measure-linear) o [Área](topic:measure-areas) allí.

## Elegir una trayectoria o un contorno

1. Elija {{ui:Trayectoria}}. La línea bajo el puntero aparece con un contorno, y las otras trayectorias que podría ser se dibujan finas.
2. Haga clic en una línea: se elige todo el trayecto conectado. La barra bajo la barra de herramientas indica sus segmentos, su longitud, la tolerancia de huecos y cuántos huecos se salvaron. Una trayectoria que vuelve a su inicio está cerrada y además indica su perímetro.
3. O haga clic dentro de un contorno cerrado, lejos de cualquier línea: el contorno alrededor de ese punto se elige como área. Primero sale el más pequeño; {{key:Tab}} prueba el siguiente más grande.
4. Pulse {{key:Enter}} (o el botón derecho, o doble clic) para añadir las marcas. Una trayectoria elegida se convierte en una marca de una partida **lineal**, y un contorno en una marca de una partida de **área**: la partida activa si es de ese tipo; si no, la más reciente de ese tipo. Sin ninguna, se abre el formulario de nueva partida y no se añade nada hasta que vuelva a pulsar {{key:Enter}}. Todo lo elegido se añade en un solo paso de deshacer.

## La tolerancia de huecos

Los delineantes dejan pequeños huecos donde las líneas deberían encontrarse. Dos líneas se unen cuando sus extremos están más cerca que la **tolerancia de huecos**. Empieza en 1.5 puntos en la hoja (se muestra en pies y pulgadas a la escala de la hoja), y un anillo discontinuo de ese ancho sigue al puntero y se sitúa en cada extremo de la trayectoria bajo él. Cada hueco salvado se marca con un anillo naranja en una trayectoria elegida, y la barra los cuenta.

{{key:]}} hace la tolerancia más ancha, {{key:[}} más estrecha. Una trayectoria elegida se vuelve a unir de inmediato con la nueva tolerancia. En una confluencia, la trayectoria sigue recta, por donde menos se dobla, y deja la rama.

## Teclas

| Tecla o acción | Qué hace |
|---|---|
| Clic | Elige la trayectoria bajo el puntero, o el contorno que la rodea. |
| {{key:Shift}} + clic | Añade otra trayectoria o contorno a lo elegido. |
| {{key:Tab}} | Prueba la siguiente trayectoria bajo el puntero, o el siguiente contorno más grande. |
| {{key:Backspace}} o {{key:Mod+Z}} | Quita el último segmento de la última trayectoria elegida, un segmento cada vez. Una trayectoria sin segmentos se quita. Sin nada elegido, {{key:Mod+Z}} es el deshacer normal. |
| {{key:[}} y {{key:]}} | Tolerancia de huecos más estrecha y más ancha. |
| {{key:Enter}} | Añade las marcas. |
| {{key:Esc}} | Borra lo elegido. |

## Conviene saber

- Una curva del dibujo es una cadena de piezas rectas cortas, así que su longitud queda un poco por debajo del arco real. Para un arco exacto, mida el archivo propio del dibujo ([Medir desde un dibujo](topic:measure-from-a-drawing)).
- Un hueco salvado cuenta como un salto recto a través de él, así que el perímetro de un contorno cerrado lo incluye.
- Solo los trazos y los rellenos de las trayectorias propias de la página son líneas. El texto dibujado como letras y las imágenes no lo son.
