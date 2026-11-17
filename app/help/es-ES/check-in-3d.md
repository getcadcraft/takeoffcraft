---
title: Comprobar la medición en 3D
summary: Vea los muros, losas y recuentos de la hoja abierta sobre el plano, gire alrededor de ellos y haga clic en uno para seleccionar su marca.
keywords: png, imagen, foto, captura, apilar, plantas, niveles, alzado, glb, gltf, exportar 3D, espesor de muro, altura de base, hueco, dintel de puerta, 3d, tres d, comprobar, vista, muros, altura de muro, losa, profundidad, volumen, orbitar, modelo, selección, isométrica, perspectiva
from: fb16b4f7
---

La vista 3D es una comprobación, no un segundo dibujo: levanta sobre la propia hoja la medición de la hoja abierta en pantalla, así que un muro que falta, una losa duplicada o un recuento perdido se ven de un vistazo.

Antes de empezar: la hoja necesita una escala ([Fijar la escala](topic:set-the-scale)). Las alturas y profundidades necesitan medidas reales (en pies), así que en una hoja sin escala {{ui:3D}} lo indica y se queda en la hoja plana.

## Abrir la vista 3D

1. Muestre la hoja que quiere comprobar.
2. Elija {{ui:3D}} en la barra que muestra el nombre y la escala de la hoja, o pulse {{key:3}}.
   La primera vez, la vista 3D tarda un momento en cargarse. La hoja se dibuja en el suelo, y la medición se levanta sobre ella en el color de cada partida.
3. Para volver, elija {{ui:3D}} de nuevo, {{ui:Volver a la hoja}}, o pulse {{key:3}}. Elegir una herramienta de dibujo (Lineal, Superficie, Recuento, etc.) también vuelve, porque las marcas se dibujan sobre la hoja plana.

Muestra la hoja en pantalla; cambie de hoja en la lista de hojas, o con {{key:PageDown}} y {{key:PageUp}}, y la vista 3D la sigue. Para ver varias plantas a la vez, apílelas (abajo).

## Lo que ve

| Marca | En 3D |
|---|---|
| Tramo lineal, partida con altura | Un muro de esa altura a lo largo del tramo. Los tramos curvos siguen la curva. |
| Tramo lineal, partida sin altura | Una línea en la hoja. Dé a la partida una altura en **Partida** para levantarla. |
| Superficie, partida con profundidad | Una losa de esa profundidad, con sus huecos abiertos. |
| Superficie, partida sin profundidad | Una placa fina de 2" para que siga viéndose. |
| Recuento | Un pequeño poste en cada punto contado. |

La altura es el campo {{ui:Altura}} de una partida lineal, y la profundidad el campo {{ui:Profundidad}} de una partida de superficie, bajo **Partida** (consulte [Crear partidas de medición](topic:create-items)). Si la cambia, la vista 3D se actualiza al instante. La nota bajo el nombre de la hoja indica lo que contiene, por ejemplo "Esta hoja en 3D: 2 muros, 1 losa, 3 recuentos", y cuántos tramos o superficies no tienen altura o profundidad. Los clics pasan a través de ella hasta la vista.

Los números no cambian en 3D: la superficie de un muro es su longitud exacta por su altura, y el volumen de una losa es su superficie neta (contorno menos huecos, curvas exactas) por su profundidad. Las curvas se dibujan como tramos rectos cortos solo en pantalla.

## Mirar alrededor

| Acción | Qué hace |
|---|---|
| Arrastrar, o arrastrar con el botón central | Orbitar alrededor de la medición. |
| {{key:Shift}} + arrastrar, o arrastrar con el botón derecho | Desplazar. |
| Rueda del ratón | Acercar y alejar en el puntero. |
| Deslizar con dos dedos en un trackpad | Orbitar ({{key:Shift}} desplaza). Un pellizco amplía. |
| {{ui:Isométrica}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Izquierda}}, {{ui:Derecha}}, {{ui:Inferior}} | Vistas estándar, encuadradas sobre la medición. La vista 3D se abre en {{ui:Isométrica}}. |
| {{ui:Perspectiva}} | Perspectiva activada o desactivada (paralela cuando está desactivada). |
| {{ui:Ajustar a todo}} o {{key:F}} | Toda la hoja. |
| {{ui:Hoja}} | Muestra u oculta el plano en el suelo. |
| El cubo de vista, arriba a la derecha | Haga clic en una cara, arista o esquina para mirar desde allí; arrástrelo para orbitar; arrastre su anillo de brújula para girar; el botón de inicio vuelve a {{ui:Isométrica}}. |

La esquina muestra un cubo de vista, un pequeño icono de ejes X, Y, Z, o nada: elija en {{ui:Ajustes}}, en la pestaña TakeoffCraft, bajo **Indicador de esquina** ([Ajustes de TakeoffCraft](topic:settings)). La hoja plana no tiene indicador de esquina.

:::touch
Un dedo orbita; dos dedos pellizcan para acercar y se desplazan para mover. Un toque selecciona.
:::

## Muros con espesor, base y huecos

Una partida lineal con altura se levanta como una tira fina. Para verla como un muro real, dé a la partida su forma en **En 3D** en sus ajustes:

- **Espesor de muro** (8", 0.2 m): el muro se convierte en un sólido, centrado en la línea que dibujó, con esquinas a inglete.
- **Altura de base**: el muro empieza a esa distancia por encima del suelo (un sofito, una fila de armarios altos). Las partidas de superficie también la tienen: un techo a 9'-0".
- **Dintel del hueco**: un segmento deducido (una puerta, [Deducir una parte de un tramo](topic:measure-linear#deduct-a-part-of-a-run)) mantiene el muro por encima de esa altura, así que una puerta se ve como puerta. Sin él, un segmento deducido deja un hueco hasta arriba.

Estos valores solo dan forma a la vista 3D: las cantidades (longitud, superficie del muro, costes) siguen igual.

## Apilar las plantas

1. Abra los PDF de cada planta.
2. En la vista 3D, elija {{ui:Niveles…}} y escriba la cota de cada planta, como `0` para la planta baja y `12'` para la siguiente. Un campo en blanco deja una hoja fuera.
3. Elija {{ui:Apilar}}. Cada hoja con un nivel muestra su medición a su altura; la hoja en pantalla queda bajo su propia planta, y las demás se perfilan. La nota indica cuántas plantas están apiladas.

Las hojas se alinean según su posición en la página, así que esto funciona para plantas dibujadas de la misma manera (mismo tamaño y posición de hoja). Una hoja con nivel pero sin escala se deja fuera, y la nota lo indica. Elija {{ui:Apilar}} de nuevo para una hoja a la vez. Los niveles se guardan con la medición.

## Guardar la vista 3D como imagen

Elija {{ui:PNG}} en la barra 3D para obtener una imagen de la vista tal como está en pantalla (`… 3D.png`); {{key:Shift}} + clic en {{ui:PNG}} la hace el doble de grande (`… 3D@2x.png`), para imprimir.

## Guardar la vista 3D como modelo

Elija {{ui:GLB}} en la barra 3D. Obtendrá un archivo `.glb` (glTF, binario) de lo que muestra la vista —la planta en pantalla, o todas las plantas apiladas— que otros programas 3D pueden abrir: un objeto por marca, con el nombre de su partida, en el color de la partida, en metros y con Y hacia arriba. La propia hoja y los perfiles no están incluidos.

## Seleccionar una marca desde 3D

Haga clic en un muro, losa, placa o poste. Su marca pasa a ser la marca seleccionada, exactamente como si hubiera hecho clic en ella en la hoja: aparece bajo **Marca seleccionada**, su partida pasa a ser la actual, y la barra de estado indica su longitud y altura, o su superficie, profundidad y yardas cúbicas. {{key:Shift}} + clic añade marcas a la selección o las quita. {{key:Delete}} elimina las marcas seleccionadas y {{key:Mod+Z}} las devuelve; {{key:Esc}} no deja ninguna seleccionada. De vuelta en la hoja, las mismas marcas siguen seleccionadas.

:::tip
El plano sigue el tema: en Modelo, la hoja en el suelo se oscurece como la vista plana.
:::
