---
title: Medir tramos lineales
summary: Tome muros, tuberías, cenefas y otras longitudes como tramos, con segmentos rectos, arcos y el ajuste de 45 grados con Shift.
keywords: lineal, longitud, tramo, polilínea, muros, lf, pies lineales, arco, curva, 45 grados, orto, forzcursor, segmentos, longitud de polilínea, deducir, abertura, puerta, hueco, escribir, coordenadas, distancia, distancia directa, polar
from: c669deff
---

Una partida lineal mide longitud. Cada tramo es una cadena de puntos: segmentos rectos, y arcos donde active el modo de arco. Una partida puede tener cualquier número de tramos en cualquier número de hojas.

Antes de empezar: la hoja necesita una escala ([Asignar la escala](topic:set-the-scale)) y necesita una partida lineal ([Crear partidas de cuantificación](topic:create-items)).

En un PDF vectorial, sus clics se ajustan a las propias líneas del dibujo: extremos, puntos medios y cruces ([Forzcursor a las líneas del dibujo](topic:snap-to-the-drawing); {{key:F3}} lo desactiva).

## Trazar un tramo

1. Haga clic en la partida lineal bajo {{ui:Items}}.
2. Elija {{ui:Linear}} en la barra de herramientas, o pulse {{key:L}}.
3. Haga clic en el inicio del tramo.
4. Haga clic en cada esquina a lo largo de él.
   La barra de estado muestra "Longitud" (el tramo hasta ahora, hasta el puntero) y "segmento" (el segmento que está dibujando), en pies y pulgadas.
5. Termine el tramo: haga doble clic en el último punto, pulse {{key:Enter}} o haga clic derecho.
   El tramo se dibuja en el color de la partida y se convierte en la marca seleccionada. La longitud de la partida en la lista de {{ui:Items}} y en la tabla de {{ui:Quantities}} aumenta.

La herramienta sigue en {{ui:Linear}}, así que puede empezar el siguiente tramo de inmediato. Pulse {{key:Esc}} para volver a {{ui:Select}}.

Mientras dibuja:

- {{key:Backspace}} (o {{key:Delete}}) elimina el último punto.
- {{key:Esc}} descarta el tramo sin terminar.
- Arrastrar encuadra la hoja, y la rueda hace zoom, sin agregar puntos.

:::mac
En un panel táctil de Mac, el clic derecho es un clic con dos dedos (active el clic secundario en Configuración del Sistema, en Trackpad). TakeoffCraft lee solo el botón secundario, así que un Control-clic puede tomarse como clic simple y agregar un punto. Doble clic o {{key:Enter}} siempre terminan.
:::

:::touch
En una pantalla táctil, toque para colocar puntos, arrastre con un dedo para encuadrar y pellizque con dos dedos para hacer zoom. Termine con una pulsación prolongada, un doble toque, o {{ui:Finish}} en la barra bajo la hoja ({{ui:Back}} regresa el último punto). Vea [Solución de problemas](topic:troubleshooting#touch-screens).
:::

## Segmentos rectos en pasos de 45°

Mantenga {{key:Shift}} mientras coloca un punto. El segmento desde el último punto se ajusta a la dirección de 0°, 45°, 90° o 135° más cercana, manteniendo la longitud que arrastró a lo largo de ella. La barra de estado lo recuerda: "Shift ajusta a 45°".

En modo de arco, se aplica a donde termina un arco: la cuerda del arco va en pasos de 45° desde donde empieza. El punto que haga clic sobre la curva nunca se ajusta.

## Arcos y muros curvos

1. Mientras dibuja un tramo, coloque el punto donde empieza la curva.
2. Active el modo de arco: elija {{ui:Arc}} en la barra de herramientas o pulse {{key:R}}. El botón queda presionado.
3. Haga clic en cualquier punto de la curva, a la mitad, más o menos.
   La barra de estado agrega "(arco: haga clic donde termina)", y la vista previa se curva por su punto.
4. Haga clic donde termina la curva.
   El arco se agrega. Su longitud es la longitud exacta del arco, no una cadena de cuerdas cortas.
5. Haga clic en otro punto de la siguiente curva y en su final para seguir dibujando arcos, o pulse {{key:R}} otra vez para volver a segmentos rectos.

{{key:Backspace}} o {{key:Esc}} primero descartan el punto pendiente en la curva; púlselos otra vez para eliminar puntos como de costumbre.

## Escribir longitudes y coordenadas

Después del primer punto, puede escribir dónde irá el siguiente en lugar de hacer clic. Escriba un dígito, `@` o `#`: se abre un cuadro {{ui:Type}} en la barra de estado con lo que escribió. Pulse {{key:Enter}} para colocar el punto; el cuadro sigue abierto para el siguiente.

| {{ui:Type}} | El siguiente punto va |
|---|---|
| `12'6"` | 12'-6" desde el último punto, hacia el puntero (señale la dirección, luego escriba la longitud) |
| `12'6"<45` | 12'-6" a 45°, contados en sentido contrario a las manecillas del reloj desde la derecha de la pantalla (`<90` es arriba, `<-90` es abajo) |
| `@6',-4'` | 6' a la derecha y 4' abajo desde el último punto |
| `6',4'` (o `#6',4'`) | 6' a la derecha y 4' arriba desde el primer punto de este tramo |

Las longitudes se escriben como en todo TakeoffCraft ([Formatos de entrada](topic:entry-formats)): `12'-6 1/2"`, `12.5` (pies), `30"`, `3.2 m`. "Derecha" y "arriba" son como usted ve la hoja, también cuando la página del PDF está girada.

{{key:Enter}} en un cuadro vacío termina el tramo, como {{key:Enter}} en la hoja; {{key:Esc}} cierra el cuadro y mantiene el tramo. Los puntos escritos siguen las mismas reglas que los clics: deducciones, arcos y cierre de áreas funcionan igual. El mismo cuadro funciona en {{ui:Area}} y {{ui:Cut-out}}; después del centro de un círculo, toma el radio.

## Deducir una parte de un tramo

Un tramo de muro que pasa por una puerta o un frente de local puede dibujarse recto a través de ella y contar solo el muro: los segmentos a través de la abertura son **deducciones**. Se dibujan punteados y delgados, y no se cuentan.

Mientras dibuja:

1. Coloque el punto donde empieza la abertura.
2. Elija {{ui:Deduct}} en la barra de herramientas o pulse {{key:E}}. El botón queda presionado y la barra de estado indica que los siguientes segmentos son deducciones.
3. Haga clic donde termina la abertura. El segmento se dibuja punteado, y "Longitud" en la barra de estado lo deja fuera.
4. Pulse {{key:E}} otra vez y continúe a lo largo del muro.

Después de dibujar: seleccione el tramo. Bajo **Marca seleccionada**, cada segmento tiene una casilla {{ui:Deduct}}: márquela para deducir ese segmento, o desmárquela para contarlo otra vez. Cada cambio es un paso de deshacer.

Un tramo siempre conserva al menos un segmento que cuenta. El panel muestra entonces **Deducciones** (la longitud deducida) y **Dibujado** (el tramo completo); **Longitud**, la cantidad de la partida, el área del muro y los costos usan la longitud sin deducciones. La vista de comprobación 3D deja un hueco en el muro, el PDF marcado dibuja las deducciones punteadas, y la hoja **Marcas** exportada las enumera.

Mover una esquina conserva las deducciones. Agregar o quitar puntos (volviendo a dibujar el tramo) empieza sin ellas.

## Ver los detalles de un tramo

Elija {{ui:Select}} ({{key:V}}) y haga clic en el tramo. **Marca seleccionada** a la derecha muestra:

- la partida a la que pertenece (elija otra partida lineal en la lista para mover el tramo allí),
- la hoja,
- **Longitud** en pies y pulgadas y en LF,
- el número de **Segmentos**, y el **Área de muro** cuando la partida tiene altura,
- la longitud de cada segmento, con "(arco)" después de los arcos, y su casilla {{ui:Deduct}}.

En la hoja, cada segmento del tramo seleccionado se rotula con su longitud.

## Corregir un tramo

- **Mover un punto**: seleccione el tramo y arrastre uno de sus controladores cuadrados de esquina. Mantenga {{key:Shift}} para ajustar el segmento movido a pasos de 45°. Un arco conserva su curvatura.
- **Doblar un arco**: un tramo seleccionado muestra un controlador redondo en medio de cada arco. Arrástrelo: el arco pasa por donde suelte, así que se curva más, menos o hacia el otro lado. Si lo arrastra hasta la línea recta entre sus extremos, se convierte en un segmento recto. {{key:Mod+Z}} lo deshace ("Doblar arco").
- **Eliminar un tramo**: selecciónelo y pulse {{key:Delete}}, elija {{ui:Delete}} en el menú {{ui:More}} de la barra de herramientas, o {{ui:Delete mark}} en el panel.
- **Deshacer**: {{key:Mod+Z}}; rehacer con {{key:Mod+Y}}.

Todavía no puede insertar un punto en medio de un tramo. Elimine el tramo y vuelva a dibujarlo.

## Área de muro

Dé a la partida lineal una {{ui:Height}} (por ejemplo `9'-0"`). Entonces informa **Área de muro (A)** = longitud × altura, en SF (o m² para una partida métrica), y el área de muro entra en la columna de notas de la exportación a hoja de cálculo. Úsela en conjuntos para tablero, pintura o aislamiento: vea [Conjuntos y fórmulas](topic:assemblies).
