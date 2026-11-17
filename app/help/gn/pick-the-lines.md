---
title: Elegir las líneas del PDF
summary: Haga clic en una línea de un PDF vectorial para medir todo su trayecto conectado, o haga clic dentro de un contorno cerrado para su área, con la tolerancia de huecos a la vista y un deshacer por segmento.
keywords: trayecto, elegir, líneas, trazo, conectado, tramo completo, calcar, contorno, perímetro, hueco, tolerancia, puente, segmentos, tab, vectorial, área desde líneas, p
from: c22526ae
---

En un PDF vectorial, los muros y los bordes son líneas reales. {{ui:Path}} ({{key:P}}) las toma tal como están dibujadas: un clic en una línea mide todo lo unido a ella, de extremo a extremo, así que no hace falta calcar un muro haciendo clic en sus esquinas. La hoja necesita una escala. Una página escaneada no tiene líneas que elegir; use [Lineal](topic:measure-linear) o [Área](topic:measure-areas) allí.

## Elegir un trayecto o un contorno

1. Elija {{ui:Path}}. La línea bajo el puntero se resalta, junto con los otros trayectos que podría ser, dibujados finos.
2. Haga clic en una línea: se elige todo el trayecto conectado. La barra bajo la barra de herramientas indica sus segmentos, su longitud, la tolerancia de huecos y cuántos huecos se salvaron. Un trayecto que vuelve a su inicio está cerrado y además informa su perímetro.
3. O haga clic dentro de un contorno cerrado, lejos de cualquier línea: el contorno alrededor de ese punto se elige como área. Se toma primero el más pequeño; {{key:Tab}} prueba el siguiente más grande.
4. Presione {{key:Enter}} (o clic derecho, o doble clic) para agregar las marcas. Un trayecto elegido se vuelve una marca de un ítem **lineal**, y un contorno una marca de un ítem de **área**: el ítem activo si es de ese tipo, si no el más nuevo de ese tipo. Si no hay ninguno, se abre el formulario de nuevo ítem y no se agrega nada hasta que vuelva a presionar {{key:Enter}}. Todo lo elegido se agrega en un solo paso de deshacer.

## La tolerancia de huecos

Los dibujantes dejan pequeños huecos donde las líneas deberían encontrarse. Dos líneas se unen cuando sus extremos están más cerca que la **tolerancia de huecos**. Empieza en 1.5 puntos en la hoja (se muestra en pies y pulgadas a la escala de la hoja), y un anillo punteado de ese ancho sigue al puntero y se ubica en cada extremo del trayecto bajo él. Cada hueco salvado se marca con un anillo naranja en un trayecto elegido, y la barra los cuenta.

{{key:]}} ensancha la tolerancia, {{key:[}} la achica. Un trayecto elegido se vuelve a unir de inmediato con la nueva tolerancia. En una unión, el trayecto sigue recto, por donde menos se dobla, y deja la rama.

## Teclas

| Tecla o acción | Qué hace |
|---|---|
| Clic | Elige el trayecto bajo el puntero, o el contorno alrededor de él. |
| {{key:Shift}} + clic | Agrega otro trayecto o contorno a lo elegido. |
| {{key:Tab}} | Prueba el siguiente trayecto bajo el puntero, o el siguiente contorno más grande. |
| {{key:Backspace}} o {{key:Mod+Z}} | Quita el último segmento del último trayecto elegido, un segmento por vez. Un trayecto sin segmentos se borra. Sin nada elegido, {{key:Mod+Z}} es el deshacer común. |
| {{key:[}} y {{key:]}} | Tolerancia de huecos más estrecha y más ancha. |
| {{key:Enter}} | Agrega las marcas. |
| {{key:Esc}} | Quita la selección. |

## Bueno saberlo

- Una curva del plano es una cadena de piezas rectas cortas, así que su longitud queda apenas por debajo del arco real. Para un arco exacto, mida el archivo propio del plano ([Medir desde un plano](topic:measure-from-a-drawing)).
- Un hueco salvado cuenta como un salto recto a través de él, así que el perímetro de un contorno cerrado lo incluye.
- Solo los trazos y rellenos de los trayectos propios de la página son líneas. El texto escrito con letras y las imágenes no lo son.
