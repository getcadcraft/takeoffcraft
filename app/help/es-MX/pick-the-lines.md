---
title: "Tomar las líneas del PDF"
summary: "Haga clic en una línea de un PDF vectorial para medir todo su trazo conectado, o dentro de un contorno cerrado para su área, con la tolerancia de huecos visible y un deshacer por segmento."
keywords: "trayectoria, tomar, líneas, trazo, conectadas, tramo completo, trazar, contorno, perímetro, hueco, tolerancia, puente, segmentos, tabulador, vectorial, área desde líneas, p"
from: c22526ae
---

En un PDF vectorial, los muros y los bordes son líneas reales. {{ui:Trayectoria}} ({{key:P}}) las toma tal como están dibujadas: un clic en una línea mide todo lo unido a ella, de extremo a extremo, así que no tiene que trazar un muro haciendo clic en sus esquinas. La hoja necesita una escala. Una página escaneada no tiene líneas que tomar; use [Lineal](topic:measure-linear) o [Área](topic:measure-areas) allí.

## Tomar una trayectoria o un contorno

1. Elija {{ui:Trayectoria}}. La línea bajo el puntero se resalta, junto con las otras trayectorias posibles, marcadas en línea delgada.
2. Haga clic en una línea: se toma toda la trayectoria conectada. La barra bajo la barra de herramientas da sus segmentos, su longitud, la tolerancia de huecos y cuántos huecos se cerraron. Una trayectoria que vuelve a su inicio está cerrada y también informa su perímetro.
3. O haga clic dentro de un contorno cerrado, lejos de cualquier línea: se toma como área el contorno alrededor de ese punto. El más pequeño va primero; {{key:Tab}} prueba el siguiente más grande.
4. Pulse {{key:Enter}} (o clic derecho, o doble clic) para agregar las marcas. Una trayectoria tomada se vuelve una marca de una partida **lineal**, y un contorno, una marca de una partida de **área**: la partida activa si tiene ese tipo; si no, la más reciente de ese tipo. Sin ninguna, se abre el formulario de nueva partida y no se agrega nada hasta que pulse {{key:Enter}} otra vez. Todo lo tomado se agrega en un solo paso de deshacer.

## La tolerancia de huecos

Los dibujantes dejan pequeños huecos donde las líneas deberían encontrarse. Dos líneas se unen cuando sus extremos están más cerca que la **tolerancia de huecos**. Empieza en 1.5 puntos sobre la hoja (se muestra en pies y pulgadas a la escala de la hoja), y un anillo punteado de ese ancho sigue al puntero y se coloca en cada extremo de la trayectoria bajo él. Cada hueco cerrado se marca con un anillo naranja en una trayectoria tomada, y la barra los cuenta.

{{key:]}} amplía la tolerancia, {{key:[}} la reduce. Una trayectoria tomada se vuelve a unir de inmediato con la nueva tolerancia. En una unión, la trayectoria sigue recta, por la rama que menos se curva, y deja la otra.

## Teclas

| Tecla o acción | Qué hace |
|---|---|
| Clic | Toma la trayectoria bajo el puntero, o el contorno que la rodea. |
| {{key:Shift}} + clic | Agrega otra trayectoria o contorno a lo tomado. |
| {{key:Tab}} | Prueba la siguiente trayectoria bajo el puntero, o el siguiente contorno más grande. |
| {{key:Backspace}} o {{key:Mod+Z}} | Quita el último segmento de la última trayectoria tomada, un segmento a la vez. Una trayectoria sin segmentos se quita. Sin nada tomado, {{key:Mod+Z}} es el deshacer normal. |
| {{key:[}} y {{key:]}} | Tolerancia de huecos más estrecha y más amplia. |
| {{key:Enter}} | Agrega las marcas. |
| {{key:Esc}} | Quita lo tomado. |

## Conviene saber

- Una curva del dibujo es una cadena de piezas rectas cortas, así que su longitud es un poco menor que la del arco real. Para un arco exacto, mida el archivo propio del dibujo ([Medir desde un dibujo](topic:measure-from-a-drawing)).
- Un hueco cerrado cuenta como un salto recto a través de él, así que el perímetro de un contorno cerrado lo incluye.
- Solo los trazos y rellenos de las trayectorias propias de la página son líneas. El texto dibujado como letras y las imágenes no lo son.
