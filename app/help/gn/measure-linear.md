---
title: Medir tramos lineales
summary: Tomá muros, cañerías, zócalos y otras longitudes como tramos, con segmentos rectos, arcos y el ajuste de 45 grados con Shift.
keywords: lineal, longitud, tramo, polilínea, muros, lf, pies lineales, arco, curva, 45 grados, ortogonal, ajuste, segmentos, longitud de polilínea, descontar, abertura, puerta, hueco, tipo, escrito, coordenadas, distancia, distancia directa, polar
from: c669deff
---

Un ítem lineal mide longitud. Cada tramo es una cadena de puntos: segmentos rectos, y arcos cuando activás el modo arco. Un ítem puede tener cualquier cantidad de tramos en cualquier cantidad de hojas.

Antes de empezar: la hoja necesita una escala ([Fijar la escala](topic:set-the-scale)) y necesitás un ítem lineal ([Crear ítems de cómputo](topic:create-items)).

En un PDF vectorial, tus clics se ajustan a las propias líneas del plano: extremos, puntos medios e intersecciones ([Ajustar a las líneas del plano](topic:snap-to-the-drawing); {{key:F3}} lo desactiva).

## Dibujar un tramo

1. Hacé clic en el ítem lineal debajo de {{ui:Ítems}}.
2. Elegí {{ui:Lineal}} en la barra de herramientas, o presioná {{key:L}}.
3. Hacé clic en el inicio del tramo.
4. Hacé clic en cada esquina a lo largo del tramo.
   La barra de estado muestra "Longitud" (el tramo hasta ahora, hasta el puntero) y "segmento" (el segmento que estás dibujando), en pies y pulgadas.
5. Terminá el tramo: hacé doble clic en el último punto, presioná {{key:Enter}} o hacé clic derecho.
   El tramo se dibuja con el color del ítem y pasa a ser la marca seleccionada. La longitud del ítem en la lista de {{ui:Ítems}} y en la tabla de {{ui:Cantidades}} aumenta.

La herramienta sigue en {{ui:Lineal}}, así podés empezar el siguiente tramo enseguida. Presioná {{key:Esc}} para volver a {{ui:Seleccionar}}.

Mientras dibujás:

- {{key:Backspace}} (o {{key:Delete}}) quita el último punto.
- {{key:Esc}} descarta el tramo sin terminar.
- Arrastrar desplaza la hoja y la rueda hace zoom, sin agregar puntos.

:::mac
En un trackpad de Mac, el clic derecho es un clic con dos dedos (activá el clic secundario en Configuración del sistema, en Trackpad). TakeoffCraft lee solo el botón secundario, así que un Control-clic puede tomarse como clic simple y agregar un punto. Doble clic o {{key:Enter}} siempre terminan.
:::

:::touch
En una pantalla táctil, tocá para colocar puntos, arrastrá con un dedo para desplazar y pellizcá con dos para hacer zoom. Terminá con una pulsación larga, un doble toque, o {{ui:Terminar}} en la barra debajo de la hoja ({{ui:Atrás}} quita el último punto). Ver [Solución de problemas](topic:troubleshooting#touch-screens).
:::

## Líneas rectas en pasos de 45°

Mantené {{key:Shift}} mientras colocás un punto. El segmento desde el último punto se ajusta a la dirección de 0°, 45°, 90° o 135° más cercana, manteniendo la longitud que arrastraste. La barra de estado lo recuerda: "Shift ajusta a 45°".

En modo arco, se aplica al punto donde termina un arco: la cuerda del arco va en pasos de 45° desde donde empieza. El punto que hacés clic sobre la curva nunca se ajusta.

## Arcos y muros curvos

1. Mientras dibujás un tramo, colocá el punto donde empieza la curva.
2. Activá el modo arco: elegí {{ui:Arco}} en la barra de herramientas o presioná {{key:R}}. El botón queda presionado.
3. Hacé clic en cualquier punto de la curva, más o menos en su parte media.
   La barra de estado agrega "(arco: hacé clic donde termina)" y la vista previa se curva por tu punto.
4. Hacé clic donde termina la curva.
   El arco se agrega. Su longitud es la longitud exacta del arco, no una serie de cuerdas cortas.
5. Hacé clic en otro punto de la siguiente curva y en su final para seguir dibujando arcos, o presioná {{key:R}} otra vez para volver a segmentos rectos.

{{key:Backspace}} o {{key:Esc}} primero descartan el punto pendiente sobre la curva; presioná otra vez para quitar puntos como de costumbre.

## Escribir longitudes y coordenadas

Después del primer punto, podés escribir dónde va el siguiente en lugar de hacer clic. Escribí un dígito, `@` o `#`: se abre un cuadro {{ui:Tipo}} en la barra de estado con lo que escribiste. Presioná {{key:Enter}} para colocar el punto; el cuadro sigue abierto para el siguiente.

| Tipo | El siguiente punto va |
|---|---|
| `12'6"` | 12'-6" desde el último punto, hacia el puntero (apuntá la dirección, después escribí la longitud) |
| `12'6"<45` | 12'-6" a 45°, contados en sentido antihorario desde la derecha de la pantalla (`<90` es arriba, `<-90` abajo) |
| `@6',-4'` | 6' a la derecha y 4' abajo desde el último punto |
| `6',4'` (o `#6',4'`) | 6' a la derecha y 4' arriba desde el primer punto de este tramo |

Las longitudes se escriben como en todo TakeoffCraft ([Formatos de entrada](topic:entry-formats)): `12'-6 1/2"`, `12.5` (pies), `30"`, `3.2 m`. "Derecha" y "arriba" son como vés la hoja, también cuando la página del PDF está girada.

{{key:Enter}} en un cuadro vacío termina el tramo, igual que {{key:Enter}} sobre la hoja; {{key:Esc}} cierra el cuadro y deja el tramo en curso. Los puntos escritos siguen las mismas reglas que los clics: descuentos, arcos y cierre de áreas funcionan igual. El mismo cuadro funciona en {{ui:Área}} y {{ui:Recorte}}; después del centro de un círculo, toma el radio.

## Descontar una parte de un tramo

Un tramo de muro que pasa por una puerta o una vidriera puede dibujarse derecho y contar solo el muro: los segmentos que cruzan la abertura son **descuentos**. Se dibujan de trazos y finos, y no se cuentan.

Mientras dibujás:

1. Colocá el punto donde empieza la abertura.
2. Elegí {{ui:Descontar}} en la barra de herramientas o presioná {{key:E}}. El botón queda presionado y la barra de estado indica que los siguientes segmentos son descuentos.
3. Hacé clic donde termina la abertura. El segmento se dibuja de trazos; "Longitud" en la barra de estado lo deja afuera.
4. Presioná {{key:E}} otra vez y seguí por el muro.

Después de dibujar: seleccioná el tramo. Debajo de **Marca seleccionada**, cada segmento tiene un cuadro {{ui:Descontar}}: marcalo para descontar ese segmento, desmarcalo para volver a contarlo. Cada cambio es un paso de deshacer.

Un tramo siempre conserva al menos un segmento que cuenta. El panel muestra entonces **Descuentos** (la longitud descontada) y **Dibujado** (el tramo completo); **Longitud**, la cantidad del ítem, la superficie de muro y los costos usan la longitud sin los descuentos. La vista 3D de verificación deja un hueco en el muro, el PDF marcado dibuja los descuentos de trazos, y la hoja **Marcas** exportada los enumera.

Mover una esquina conserva los descuentos. Agregar o quitar puntos (volviendo a dibujar el tramo) empieza sin ellos.

## Ver los detalles de un tramo

Elegí {{ui:Seleccionar}} ({{key:V}}) y hacé clic en el tramo. **Marca seleccionada** a la derecha muestra:

- el ítem al que pertenece (elegí otro ítem lineal en la lista para mover el tramo allí),
- la hoja,
- **Longitud** en pies y pulgadas y en LF,
- la cantidad de **Segmentos**, y la **Superficie de muro** cuando el ítem tiene altura,
- la longitud de cada segmento, con "(arco)" después de los arcos, y su cuadro {{ui:Descontar}}.

En la hoja, cada segmento del tramo seleccionado lleva su longitud como rótulo.

## Corregir un tramo

- **Mover un punto**: seleccioná el tramo y arrastrá uno de sus controladores cuadrados de esquina. Mantené {{key:Shift}} para ajustar el segmento movido a pasos de 45°. Un arco conserva su curvatura.
- **Doblar un arco**: un tramo seleccionado muestra un controlador redondo en el medio de cada arco. Arrastralo: el arco pasa por donde soltás, así que se curva más, menos o hacia el otro lado. Si lo arrastrás hasta la línea recta entre sus extremos, pasa a ser un segmento recto. {{key:Mod+Z}} lo deshace ("Doblar arco").
- **Eliminar un tramo**: seleccionalo y presioná {{key:Delete}}, elegí {{ui:Eliminar}} en el menú {{ui:Más}} de la barra de herramientas, o {{ui:Eliminar marca}} en el panel.
- **Deshacer**: {{key:Mod+Z}}; rehacer con {{key:Mod+Y}}.

Todavía no se puede insertar un punto en medio de un tramo. Eliminá el tramo y volvé a dibujarlo.

## Superficie de muro

Dale al ítem lineal una {{ui:Altura}} (por ejemplo `9'-0"`). Entonces informa **Superficie de muro (A)** = longitud × altura, en SF (o m² para un ítem métrico), y la superficie de muro va a la columna de notas de la exportación a planilla. Usala en ensambles para tableros, pintura o aislación: ver [Ensambles y fórmulas](topic:assemblies).
