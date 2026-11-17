---
title: Revisar la cuantificación en 3D
summary: Vea los muros, losas y conteos de la hoja abierta de pie sobre el dibujo, gire alrededor de ellos y haga clic en uno para seleccionar su marca.
keywords: png, imagen, foto, captura, apilar, pisos, niveles, elevación, glb, gltf, exportar 3D, espesor de muro, altura base, abertura, cabecera de puerta, 3D, tres D, revisar, vista, muros, altura de muro, losa, profundidad, volumen, orbitar, modelo, selección, isométrica, perspectiva
from: fb16b4f7
---

La vista 3D es una revisión, no un segundo dibujo: coloca la cuantificación de la hoja en pantalla de pie sobre la propia hoja, así que un muro faltante, una losa duplicada o un conteo perdido se ven de inmediato.

Antes de empezar: la hoja necesita una escala ([Establecer la escala](topic:set-the-scale)). Las alturas y profundidades necesitan medidas reales, así que en una hoja sin escala {{ui:3D}} lo indica y se queda en la hoja plana.

## Abrir la vista 3D

1. Muestre la hoja que quiere revisar.
2. Elija {{ui:3D}} en la barra que muestra el nombre y la escala de la hoja, o presione {{key:3}}.
   La primera vez, la vista 3D tarda un momento en cargar. La hoja se dibuja sobre el suelo, y la cuantificación se levanta sobre ella en el color de cada partida.
3. Para volver, elija {{ui:3D}} otra vez, {{ui:Volver a la hoja}}, o presione {{key:3}}. Elegir una herramienta de dibujo (Lineal, Área, Conteo, etc.) también regresa, porque las marcas se dibujan sobre la hoja plana.

Muestra la hoja en pantalla; cambie de hoja en la lista de hojas, o con {{key:PageDown}} y {{key:PageUp}}, y la vista 3D sigue. Para ver varios pisos a la vez, apílelos (abajo).

## Lo que se ve

| Marca | En 3D |
|---|---|
| Tramo lineal, partida con altura | Un muro de esa altura a lo largo del tramo. Los tramos curvos siguen la curva. |
| Tramo lineal, partida sin altura | Una línea en la hoja. Dé a la partida una altura en **Partida** para levantarla. |
| Área, partida con profundidad | Una losa de esa profundidad, con sus recortes abiertos. |
| Área, partida sin profundidad | Una placa delgada de 2", para que se vea. |
| Conteo | Un pequeño poste en cada punto contado. |

La altura es el campo {{ui:Altura}} de una partida lineal, y la profundidad el campo {{ui:Profundidad}} de una partida de área, bajo **Partida** (vea [Crear partidas de cuantificación](topic:create-items)). Cámbielo y la vista 3D se actualiza de inmediato. La nota bajo el nombre de la hoja dice lo que contiene, por ejemplo "Esta hoja en 3D: 2 muros, 1 losa, 3 conteos", y cuántos tramos o áreas no tienen altura o profundidad. Los clics pasan a través de ella hacia la vista.

Los números no cambian en 3D: el área de un muro es su longitud exacta por su altura, y el volumen de una losa es su área neta (contorno menos recortes, curvas exactas) por su profundidad. Las curvas se dibujan como piezas rectas cortas solo en pantalla.

## Mirar alrededor

| Acción | Qué hace |
|---|---|
| Arrastrar, o arrastrar con el botón central | Orbitar alrededor de la cuantificación. |
| {{key:Shift}} + arrastrar, o arrastrar con el botón derecho | Desplazar. |
| Rueda del ratón | Acercar y alejar en el puntero. |
| Deslizar con dos dedos en un trackpad | Orbitar ({{key:Shift}} desplaza). Un pellizco acerca. |
| {{ui:Iso}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Izquierda}}, {{ui:Derecha}}, {{ui:Inferior}} | Vistas estándar, encuadradas en la cuantificación. La vista 3D se abre en {{ui:Iso}}. |
| {{ui:Perspectiva}} | Perspectiva activada o desactivada (paralela cuando está desactivada). |
| {{ui:Zoom extensión}} o {{key:F}} | Toda la hoja. |
| {{ui:Hoja}} | Muestra u oculta el dibujo en el suelo. |
| El cubo de vistas, arriba a la derecha | Haga clic en una cara, arista o esquina para mirar desde allí; arrástrelo para orbitar; arrastre su anillo de brújula para girar; el botón de casa regresa a {{ui:Iso}}. |

La esquina muestra un cubo de vistas, un pequeño ícono de ejes X, Y, Z, o nada: elija en {{ui:Configuración}}, en la pestaña TakeoffCraft, bajo **Indicador de esquina** ([Configuración de TakeoffCraft](topic:settings)). La vista plana no tiene indicador de esquina.

:::touch
Un dedo orbita; dos dedos pellizcan para acercar y se mueven para desplazar. Un toque selecciona.
:::

## Muros con espesor, base y aberturas

Una partida lineal con altura se levanta como una tira delgada. Para verla como un muro real, dele su forma bajo **En 3D** en su configuración:

- **Espesor de muro** (8", 0.2 m): el muro se vuelve un sólido, centrado en la línea que dibujó, con esquinas a inglete.
- **Altura base**: el muro empieza esa distancia sobre el piso (un plafón, una hilera de gabinetes superiores). Las partidas de área también la tienen: un techo a 9'-0".
- **Cabecera de abertura**: un segmento descontado (una puerta, [Descontar una parte de un tramo](topic:measure-linear#deduct-a-part-of-a-run)) mantiene el muro sobre esa altura, así una puerta se ve como puerta. Sin ella, un segmento descontado deja un hueco hasta arriba.

Estos solo dan forma a la vista 3D: las cantidades (longitud, área de muro, costos) se quedan como estaban.

## Apilar los pisos

1. Abra los PDF de cada piso.
2. En la vista 3D, elija {{ui:Niveles…}} y escriba la elevación de cada piso, como `0` para la planta baja y `12'` para el siguiente. Un campo vacío deja una hoja fuera.
3. Elija {{ui:Apilar}}. Cada hoja con nivel muestra su cuantificación a su altura; la hoja en pantalla queda bajo su propio piso, y las demás se ven con contorno. La nota dice cuántos pisos están apilados.

Las hojas se alinean por su lugar en la página, así que esto funciona para plantas trazadas igual (mismo tamaño y posición de hoja). Una hoja con nivel pero sin escala se deja fuera, y la nota lo dice. Elija {{ui:Apilar}} otra vez para una hoja a la vez. Los niveles se guardan con la cuantificación.

## Guardar la vista 3D como imagen

Elija {{ui:PNG}} en la barra 3D para una imagen de la vista tal como está en pantalla (`… 3D.png`); {{key:Shift}} + clic en {{ui:PNG}} la hace al doble de tamaño (`… 3D@2x.png`), para impresión.

## Guardar la vista 3D como modelo

Elija {{ui:GLB}} en la barra 3D. Obtiene un archivo `.glb` (glTF, binario) de lo que muestra la vista —el piso en pantalla, o todos los pisos apilados— que otros programas 3D abren: un objeto por marca, con el nombre de su partida, en el color de la partida, en metros con Y hacia arriba. La hoja en sí y los contornos no van incluidos.

## Seleccionar una marca desde 3D

Haga clic en un muro, losa, placa o poste. Su marca se vuelve la marca seleccionada, exactamente como si hubiera hecho clic en la hoja: aparece bajo **Marca seleccionada**, su partida se vuelve la actual, y la barra de estado muestra su longitud y altura, o su área, profundidad y yardas cúbicas. {{key:Shift}} + clic agrega marcas a la selección o las quita. {{key:Delete}} borra las marcas seleccionadas y {{key:Mod+Z}} las regresa; {{key:Esc}} no deja ninguna seleccionada. De vuelta en la hoja, las mismas marcas siguen seleccionadas.

:::tip
El dibujo sigue el tema: en Modelo, la hoja en el suelo se oscurece igual que la vista plana.
:::
