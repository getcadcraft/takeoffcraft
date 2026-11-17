---
title: Revisar el cómputo en 3D
summary: Mirá los muros, losas y conteos de la hoja abierta parados sobre el plano, girá alrededor de ellos y hacé clic en uno para seleccionar su marca.
keywords: png, imagen, foto, captura, apilar, pisos, niveles, elevación, glb, gltf, exportar 3D, espesor de muro, altura base, abertura, dintel de puerta, 3D, tres D, revisar, vista, muros, altura de muro, losa, profundidad, volumen, girar, modelo, selección, isométrica, perspectiva
from: fb16b4f7
---

La vista 3D es una revisión, no un segundo plano: pone el cómputo de la hoja en pantalla parado sobre la propia hoja, así que un muro que falta, una losa duplicada o un conteo suelto se ven de un vistazo.

Antes de empezar: la hoja necesita una escala ([Fijar la escala](topic:set-the-scale)). Las alturas y profundidades necesitan pies reales, así que en una hoja sin escala {{ui:3D}} lo indica y se queda en la hoja plana.

## Abrir la vista 3D

1. Mostrá la hoja que querés revisar.
2. Elegí {{ui:3D}} en la barra que muestra el nombre y la escala de la hoja, o presioná {{key:3}}.
   La primera vez, la vista 3D tarda un momento en cargarse. La hoja se dibuja en el suelo, y el cómputo se para sobre ella en el color de cada ítem.
3. Para volver, elegí {{ui:3D}} de nuevo, {{ui:Volver a la hoja}}, o presioná {{key:3}}. Elegir una herramienta de dibujo (Lineal, Área, Conteo y demás) también vuelve, ya que las marcas se dibujan en la hoja plana.

Muestra la hoja en pantalla; cambiá de hoja en la lista de hojas, o con {{key:PageDown}} y {{key:PageUp}}, y la vista 3D la sigue. Para ver varios pisos a la vez, apilalos (más abajo).

## Qué ves

| Marca | En 3D |
|---|---|
| Tramo lineal, ítem con altura | Un muro de esa altura a lo largo del tramo. Los tramos curvos siguen la curva. |
| Tramo lineal, ítem sin altura | Una línea en la hoja. Dale al ítem una altura en **Ítem** para ponerla de pie. |
| Área, ítem con profundidad | Una losa de esa profundidad, con sus aberturas abiertas. |
| Área, ítem sin profundidad | Una placa delgada de 2" para que igual se vea. |
| Conteo | Un pequeño poste en cada punto contado. |

La altura es el campo {{ui:Altura}} de un ítem lineal y la profundidad es el campo {{ui:Profundidad}} de un ítem de área, debajo de **Ítem** (ver [Crear ítems de cómputo](topic:create-items)). Cambialo, y la vista 3D se actualiza de inmediato. La nota debajo del nombre de la hoja dice qué contiene, por ejemplo "Esta hoja en 3D: 2 muros, 1 losa, 3 conteos", y cuántos tramos o áreas no tienen altura o profundidad. Los clics atraviesan la nota y llegan a la vista.

Las cifras no cambian en 3D: la superficie de un muro es su longitud exacta por su altura, y el volumen de una losa es su superficie neta (contorno menos aberturas, curvas exactas) por su profundidad. Las curvas se dibujan como trozos rectos cortos solo en pantalla.

## Girar alrededor

| Acción | Qué hace |
|---|---|
| Arrastrar, o arrastrar con el botón del medio | Girar alrededor del cómputo. |
| {{key:Shift}} + arrastrar, o arrastrar con el botón derecho | Desplazar. |
| Rueda del mouse | Acercar y alejar en el puntero. |
| Deslizar con dos dedos en el trackpad | Girar ({{key:Shift}} desplaza). Un pellizco hace zoom. |
| {{ui:Iso}}, {{ui:Arriba}}, {{ui:Frente}}, {{ui:Atrás}}, {{ui:Izquierda}}, {{ui:Derecha}}, {{ui:Abajo}} | Vistas estándar, encuadradas en el cómputo. La vista 3D se abre en {{ui:Iso}}. |
| {{ui:Perspectiva}} | Perspectiva activada o desactivada (paralela cuando está desactivada). |
| {{ui:Zoom a todo}} o {{key:F}} | Toda la hoja. |
| {{ui:Hoja}} | Muestra u oculta el plano en el suelo. |
| El cubo de vista, arriba a la derecha | Hacé clic en una cara, arista o esquina para mirar desde allí; arrastralo para girar; arrastrá su anillo de brújula para rotar; el botón de casa vuelve a {{ui:Iso}}. |

La esquina muestra un cubo de vista, un pequeño ícono de ejes X, Y, Z, o nada: elegí en {{ui:Configuración}}, en la pestaña TakeoffCraft, bajo **Indicador de esquina** ([Configuración de TakeoffCraft](topic:settings)). La hoja plana no tiene indicador de esquina.

:::touch
Un dedo gira; dos dedos pellizcan para hacer zoom y se mueven para desplazar. Un toque selecciona.
:::

## Muros con espesor, base y aberturas

Un ítem lineal con altura se para como una franja delgada. Para verlo como un muro real, dale su forma en **En 3D** dentro de sus configuraciones:

- **Espesor de muro** (8", 0.2 m): el muro se vuelve un sólido, centrado en la línea que dibujaste, con esquinas a inglete.
- **Altura base**: el muro empieza a esa distancia por encima del piso (un soffit, un módulo de alacena alta). Los ítems de área también la tienen: un cielorraso a 9'-0".
- **Dintel de abertura**: un segmento deducido (una puerta, [Deducir una parte de un tramo](topic:measure-linear#deduct-a-part-of-a-run)) mantiene el muro por encima de esa altura, así una puerta se ve como puerta. Sin él, un segmento deducido deja un hueco hasta arriba.

Estos valores solo dan forma a la vista 3D: las cantidades (longitud, superficie del muro, costos) quedan como estaban.

## Apilar los pisos

1. Abrí los PDF de todos los pisos.
2. En la vista 3D, elegí {{ui:Niveles…}} y escribí la elevación de cada piso, como `0` para la planta baja y `12'` para el siguiente. En blanco deja una hoja afuera.
3. Elegí {{ui:Apilar}}. Cada hoja con nivel muestra su cómputo a su altura; la hoja en pantalla queda bajo su propio piso, y las demás aparecen delineadas. La nota indica cuántos pisos están apilados.

Las hojas se alinean por su posición en la página, así que esto funciona para plantas plotteadas de la misma forma (mismo tamaño y posición de hoja). Una hoja con nivel pero sin escala se deja afuera, y la nota lo indica. Elegí {{ui:Apilar}} otra vez para una sola hoja a la vez. Los niveles se guardan con el cómputo.

## Guardar la vista 3D como imagen

Elegí {{ui:PNG}} en la barra 3D para una imagen de la vista tal como está en pantalla (`… 3D.png`); {{key:Shift}} + clic en {{ui:PNG}} la hace el doble de grande (`… 3D@2x.png`), para imprimir.

## Guardar la vista 3D como modelo

Elegí {{ui:GLB}} en la barra 3D. Obtenés un archivo `.glb` (glTF, binario) de lo que muestra la vista: el piso en pantalla, o todos los pisos apilados — que otros programas 3D abren: un objeto por marca, con el nombre de su ítem, en el color del ítem, en metros con Y hacia arriba. La hoja en sí y los contornos no están incluidos.

## Seleccionar una marca desde 3D

Hacé clic en un muro, losa, placa o poste. Su marca pasa a ser la marca seleccionada, exactamente como si la hubieras clicado en la hoja: aparece en **Marca seleccionada**, su ítem pasa a ser el actual, y la barra de estado muestra su longitud y altura, o su superficie, profundidad y yardas cúbicas. {{key:Shift}} + clic agrega marcas a la selección o las saca. {{key:Delete}} elimina las marcas seleccionadas y {{key:Mod+Z}} las devuelve; {{key:Esc}} no deja ninguna seleccionada. De vuelta en la hoja, las mismas marcas siguen seleccionadas.

:::tip
El dibujo sigue el tema: en Model, la hoja en el suelo se oscurece como la vista plana.
:::
