---
title: Medir tramos lineales
summary: Tome muros, tuberías, remates y otras longitudes como tramos, con segmentos rectos, arcos y el ajuste de 45 grados con Shift.
keywords: lineal, longitud, tramo, polilínea, muros, lf, pies lineales, arco, curva, 45 grados, orto, ajuste, segmentos, longitud de polilínea, descontar, abertura, puerta, hueco, escribir, coordenadas, distancia, distancia directa, polar
from: c669deff
---

Una partida lineal mide longitud. Cada tramo es una cadena de puntos: segmentos rectos, y arcos cuando activa el modo de arco. Una partida puede tener cualquier número de tramos en cualquier número de hojas.

Antes de empezar: la hoja necesita una escala ([Definir la escala](topic:set-the-scale)) y necesita una partida lineal ([Crear partidas de medición](topic:create-items)).

En un PDF vectorial, sus clics se ajustan a las propias líneas del plano: extremos, puntos medios y cruces ([Ajustar a las líneas del plano](topic:snap-to-the-drawing); {{key:F3}} lo desactiva).

## Dibujar un tramo

1. Haga clic en la partida lineal bajo {{ui:Partidas}}.
2. Elija {{ui:Lineal}} en la barra de herramientas, o pulse {{key:L}}.
3. Haga clic en el inicio del tramo.
4. Haga clic en cada esquina a lo largo de él.
   La barra de estado muestra "Longitud" (el tramo hasta el puntero) y "segmento" (el segmento que está dibujando), en pies y pulgadas.
5. Termine el tramo: haga doble clic en el último punto, pulse {{key:Enter}} o haga clic derecho.
   El tramo se dibuja con el color de la partida y pasa a ser la marca seleccionada. La longitud de la partida en la lista {{ui:Partidas}} y en la tabla {{ui:Cantidades}} aumenta.

La herramienta sigue en {{ui:Lineal}}, así que puede empezar el siguiente tramo enseguida. Pulse {{key:Esc}} para volver a {{ui:Seleccionar}}.

Mientras dibuja:

- {{key:Backspace}} (o {{key:Delete}}) elimina el último punto.
- {{key:Esc}} descarta el tramo sin terminar.
- Arrastrar desplaza la hoja, y la rueda amplía, sin añadir puntos.

:::mac
En un panel táctil de Mac, el clic derecho es un clic con dos dedos (active el clic secundario en Ajustes del Sistema, en Trackpad). TakeoffCraft lee solo el botón secundario, así que un Control-clic puede tomarse como un clic normal y añadir un punto. El doble clic o {{key:Enter}} siempre terminan.
:::

:::touch
En una pantalla táctil, toque para colocar puntos, arrastre con un dedo para desplazar y pellizque con dos dedos para ampliar. Termine con una pulsación prolongada, con un doble toque, o con {{ui:Terminar}} en la barra bajo la hoja ({{ui:Posterior}} quita el último punto). Consulte [Solución de problemas](topic:troubleshooting#touch-screens).
:::

## Líneas rectas en pasos de 45°

Mantenga pulsado {{key:Shift}} al colocar un punto. El segmento desde el último punto se ajusta a la dirección más cercana de 0°, 45°, 90° o 135°, conservando la longitud que arrastró a lo largo de ella. La barra de estado se lo recuerda: «Shift ajusta a 45°».

En modo de arco, se aplica al punto donde termina un arco: la cuerda del arco va en pasos de 45° desde donde empieza. El punto en el que hace clic sobre la curva nunca se ajusta.

## Arcos y muros curvos

1. Mientras dibuja un tramo, coloque el punto donde empieza la curva.
2. Active el modo de arco: elija {{ui:Arco}} en la barra de herramientas o pulse {{key:R}}. El botón queda pulsado.
3. Haga clic en cualquier punto de la curva, hacia la mitad de ella.
   La barra de estado añade "(arco: haga clic donde termina)" y la vista previa se curva a través de su punto.
4. Haga clic donde termina la curva.
   El arco se añade. Su longitud es la longitud exacta del arco, no una serie de cuerdas cortas.
5. Haga clic en el siguiente punto de la curva y en su final para seguir dibujando arcos, o pulse {{key:R}} de nuevo para volver a los segmentos rectos.

{{key:Backspace}} o {{key:Esc}} descartan primero el punto pendiente de la curva; púlselos de nuevo para quitar puntos como de costumbre.

## Escribir longitudes y coordenadas

Tras el primer punto, puede escribir dónde va el siguiente en lugar de hacer clic. Escriba un dígito, `@` o `#`: se abre en la barra de estado un cuadro {{ui:Escribir}} con lo que escribió. Pulse {{key:Enter}} para colocar el punto; el cuadro sigue abierto para el siguiente.

| Escribir | El siguiente punto va |
|---|---|
| `12'6"` | 12'-6" desde el último punto, hacia el puntero (apunte la dirección y luego escriba la longitud) |
| `12'6"<45` | 12'-6" a 45°, contados en sentido antihorario desde la derecha de la pantalla (`<90` es hacia arriba, `<-90` hacia abajo) |
| `@6',-4'` | 6' a la derecha y 4' hacia abajo desde el último punto |
| `6',4'` (o `#6',4'`) | 6' a la derecha y 4' hacia arriba desde el primer punto de este tramo |

Las longitudes se escriben como en todo TakeoffCraft ([Formatos de entrada](topic:entry-formats)): `12'-6 1/2"`, `12.5` (pies), `30"`, `3.2 m`. «Derecha» y «arriba» son como ve la hoja, también cuando se gira la página del PDF.

{{key:Enter}} en un cuadro vacío termina el tramo, igual que {{key:Enter}} en la hoja; {{key:Esc}} cierra el cuadro y mantiene el tramo abierto. Los puntos escritos siguen las mismas reglas que los clics: los descuentos, los arcos y el cierre de áreas funcionan todos. El mismo cuadro funciona en {{ui:Área}} y {{ui:Recorte}}; tras el centro de un círculo, toma el radio.

## Descontar una parte de un tramo

Un tramo de muro que pasa por una puerta o un escaparate puede dibujarse de corrido y seguir contando solo el muro: los segmentos a través de la abertura son **descuentos**. Se dibujan discontinuos y finos, y no se cuentan.

Mientras dibuja:

1. Coloque el punto donde empieza la abertura.
2. Elija {{ui:Descontar}} en la barra de herramientas o pulse {{key:E}}. El botón queda pulsado y la barra de estado indica que los siguientes segmentos son descuentos.
3. Haga clic donde termina la abertura. El segmento se dibuja discontinuo; «Longitud» en la barra de estado lo excluye.
4. Pulse {{key:E}} de nuevo y siga por el muro.

Después de dibujar: seleccione el tramo. Bajo **Marca seleccionada**, cada segmento tiene una casilla {{ui:Descontar}}: márquela para descontar ese segmento, y desmárquela para contarlo de nuevo. Cada cambio es un paso de deshacer.

Un tramo siempre conserva al menos un segmento que cuenta. El panel muestra entonces **Descuentos** (la longitud descontada) y **Dibujado** (el tramo completo); **Longitud**, la cantidad de la partida, el área de muro y los costes usan la longitud sin descuentos. La vista de comprobación 3D deja un hueco en el muro, el PDF anotado dibuja los descuentos discontinuos, y la hoja **Marcas** exportada los enumera.

Mover una esquina conserva los descuentos. Al añadir o quitar puntos (dibujando de nuevo el tramo), se empieza sin ellos.

## Ver los detalles de un tramo

Elija {{ui:Seleccionar}} ({{key:V}}) y haga clic en el tramo. **Marca seleccionada** a la derecha muestra:

- la partida a la que pertenece (elija otra partida lineal en la lista para trasladar el tramo allí),
- la hoja,
- **Longitud** en pies y pulgadas y en LF,
- el número de **Segmentos**, y el **Área de muro** cuando la partida tiene altura,
- la longitud de cada segmento, con «(arco)» tras los arcos, y su casilla {{ui:Descontar}}.

En la hoja, cada segmento del tramo seleccionado lleva su longitud como rótulo.

## Corregir un tramo

- **Mover un punto**: seleccione el tramo y arrastre uno de sus tiradores cuadrados de esquina. Mantenga pulsado {{key:Shift}} para ajustar el segmento movido a pasos de 45°. Un arco conserva su curvatura.
- **Doblar un arco**: un tramo seleccionado muestra un tirador redondo en el centro de cada arco. Arrástrelo: el arco pasa por donde suelta, así que se curva más, menos o al otro lado. Si lo arrastra hasta la línea recta entre sus extremos, pasa a ser un segmento recto. {{key:Mod+Z}} lo deshace («Doblar arco»).
- **Borrar un tramo**: selecciónelo y pulse {{key:Delete}}, elija {{ui:Borrar}} en el menú {{ui:Más}} de la barra de herramientas, o elija {{ui:Borrar marca}} en el panel.
- **Deshacer**: {{key:Mod+Z}}; rehacer con {{key:Mod+Y}}.

Todavía no puede insertar un punto en medio de un tramo. Borre el tramo y vuelva a dibujarlo.

## Área de muro

Dé a la partida lineal una {{ui:Altura}} (por ejemplo `9'-0"`). Entonces indica **Área de muro (A)** = longitud × altura, en SF (o m² para una partida métrica), y el área de muro pasa a la columna de notas de la exportación a hoja de cálculo. Úselo en las composiciones para tablero, pintura o aislamiento: consulte [Composiciones y fórmulas](topic:assemblies).
