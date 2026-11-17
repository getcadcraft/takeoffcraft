---
title: Medir áreas con recortes
summary: Trazá pisos, cielorrasos y losas, recortá agujeros, agregá bordes curvos, círculos y recortes redondos, y leé el área y el perímetro.
keywords: relleno de ambiente, relleno por inundación, balde de pintura, clic dentro de un ambiente, área automática, retiro, back-out, columna, shaft, descontar de varios ítems, área, polígono, contorno, pies cuadrados, sf, recorte, agujero, descontar, círculo, redondo, arco, perímetro, piso, cielorraso, losa
from: 34648db7
---

Un ítem de área mide la superficie cerrada. Cada contorno puede tener agujeros recortados (un shaft, una columna, una maceta), y sus bordes pueden ser rectos o curvos.

Antes de empezar: la hoja necesita una escala ([Fijar la escala](topic:set-the-scale)) y necesitás un ítem de área ([Crear ítems de cómputo](topic:create-items)).

## Trazar un área

1. Hacé clic en el ítem de área debajo de {{ui:Ítems}}.
2. Elegí {{ui:Área}} en la barra de herramientas, o presioná {{key:A}}.
3. Hacé clic en cada esquina del ambiente o la losa, en orden. Mantené {{key:Shift}} para bordes de 0°, 45° y 90°.
   Desde el tercer punto en adelante, el contorno se rellena y la barra de estado muestra "Área" y "perímetro". Aparece un pequeño anillo alrededor del primer punto.
4. Cerrá el contorno: hacé clic en el primer punto (dentro de su anillo), presioná {{key:Enter}}, hacé doble clic o clic derecho.
   El área se rellena suavemente con el color del ítem, se rotula con sus pies cuadrados y pasa a ser la marca seleccionada.

{{key:Backspace}} quita la última esquina; {{key:Esc}} descarta el contorno.

Un contorno que se cruza a sí mismo se rechaza: "El contorno se cruza a sí mismo, así que su área sería incorrecta. Volvé a dibujarlo sin cruzarlo." Dibujá una figura de ocho como dos áreas.

## Bordes curvos

Mientras trazás el contorno, activá el modo arco ({{ui:Arco}} o {{key:R}}). Después de una esquina, hacé clic en un punto a lo largo de la curva y luego donde termina la curva. Para cerrar el contorno con una curva, hacé ese último clic en el primer punto. El área y el perímetro usan la curva exacta. Presioná {{key:R}} otra vez para bordes rectos. Para cambiar una curva después, seleccioná el área y arrastrá el controlador redondo en el medio del arco. Ver [Medir tramos lineales](topic:measure-linear#arcs-and-curved-walls).

## Un círculo

1. Con un ítem de área, elegí {{ui:Círculo}} o presioná {{key:O}}.
2. Hacé clic en el centro.
3. Hacé clic en cualquier punto del borde.
   Mientras movés el puntero, la barra de estado muestra el radio y el área. El círculo se agrega como una marca de área con área y perímetro exactos.

## Rellenar un ambiente con un clic

Cuando los ambientes están dibujados como muros cerrados, {{ui:Ambiente}} ({{key:B}}) saca un piso con un solo clic:

1. Elegí un ítem de área (un acabado de piso, por ejemplo) y dale a la hoja su escala.
2. Elegí {{ui:Ambiente}} en el grupo {{ui:Cómputo}}, o presioná {{key:B}}.
3. Hacé clic dentro de un ambiente, en el piso libre (no sobre una línea ni una etiqueta).

TakeoffCraft lee las líneas de la hoja, encuentra el espacio alrededor del clic y lo contornea por las caras interiores de los muros, como un área del ítem actual. Las aberturas de puerta de hasta **4'-0"** se toman como cerradas, así el contorno pasa recto por la puerta; **Configuración › TakeoffCraft › Cerrar vanos del ambiente hasta** cambia ese ancho (de 3'-0" a 8'-0"). Los nombres de ambiente, muebles y artefactos dentro del ambiente no hacen agujeros.

Se rechaza, indicando por qué, cuando:

- el clic está sobre una línea ("Eso está sobre una línea");
- el espacio no está cerrado: una abertura más ancha que el ajuste deja que se escape hasta el borde de la hoja. Subí el ajuste, o contorneá ese ambiente a mano con {{ui:Área}};
- el espacio es muy chico (un símbolo, no un ambiente).

Cuando una puerta es más ancha que el ajuste, el relleno pasa al ambiente siguiente y contornea los dos juntos: deshacé ({{key:Mod+Z}}), subí el ajuste y hacé clic otra vez. Verificá el contorno como cualquier área: arrastrá sus esquinas para corregirlo. Una hoja escaneada funciona igual, pero sus líneas deben ser lo bastante oscuras; las líneas gris claro pueden no detener el relleno.

## Recortar un agujero de un área

1. Elegí {{ui:Seleccionar}} ({{key:V}}) y hacé clic en el área. Muestra controladores cuadrados en sus esquinas.
2. Elegí {{ui:Recorte}} en la barra de herramientas (o presioná {{key:X}}), o {{ui:Agregar un recorte}} debajo de **Marca seleccionada**.
3. Hacé clic en las esquinas del agujero, dentro del área. El modo arco también funciona aquí.
4. Cerralo como un área: hacé clic en su primer punto, presioná {{key:Enter}}, hacé doble clic o clic derecho.
   El agujero queda sin relleno, y la barra de estado dice "Recorte agregado. Dibujá otro, o presioná Esc."
5. Dibujá más agujeros en la misma área, o presioná {{key:Esc}}.

Para un agujero redondo, elegí {{ui:Agregar un recorte redondo}} debajo de **Marca seleccionada**, hacé clic en su centro y luego en un punto de su borde.

Un recorte tiene que estar completamente dentro del área y no puede superponerse con otro recorte. Si no, TakeoffCraft lo rechaza: "Un recorte tiene que estar completamente dentro del área." o "Los recortes no pueden superponerse entre sí."

Para quitar el último agujero, elegí {{ui:Quitar el último recorte}}.

## Retiros: columnas, shafts y aberturas que se sacan de varios ítems

Un recorte pertenece a una sola marca de área. Un **retiro** se dibuja una vez y se descuenta de cada área que superpone, para los ítems que elijas: dibujá las columnas una vez, y se descuentan del acabado de piso, del cielorraso y de la losa a la vez.

1. Creá un ítem de área para ellas, por ejemplo "Columnas".
2. En la configuración del ítem, marcá **Retiro: sus marcas quitan su área de otros ítems**. Aparece una lista con tus otros ítems de área, todos marcados: desmarcá los que los retiros no deben tocar (pintura de muros, por ejemplo).
3. Hacé el cómputo de las columnas con {{ui:Área}} o {{ui:Círculo}}, como siempre. Cada una se dibuja de trazos.

Cada marca de área de un ítem marcado en la misma hoja pierde la parte que cubre un retiro: el retiro entero cuando está adentro, solo la parte superpuesta cuando cruza el borde, y nada dentro de un recorte. El panel del área seleccionada muestra **Retiros** y el área que queda. La cantidad del ítem, sus fórmulas de ensamble, los costos, la vista 3D de verificación y la exportación usan el área que queda; las notas del presupuesto indican cuánto quitaron los retiros. El ítem de retiro en sí cuenta su propia área (dejá sus costos en cero si no lo valorizás).

Un retiro tiene que ser **convexo**: un rectángulo, un círculo o cualquier contorno sin esquina hacia adentro. TakeoffCraft rechaza dibujar uno que no lo sea; dibujá un shaft en forma de L como dos retiros. Los retiros no pueden tener recortes, y dos retiros que se superponen entre sí cuentan los dos.

El perímetro (`P`) no cambia: los retiros quitan solo área.

## Leer el área

Seleccioná el área. **Marca seleccionada** muestra:

| Línea | Significado |
|---|---|
| Área | El área neta: contorno menos recortes. Es lo que cuenta el ítem. |
| Contorno | El área bruta dentro del contorno (se muestra cuando hay recortes). |
| Recortes | Cuántos agujeros hay, y su área total. |
| Perímetro | La longitud del borde del contorno, **más** los bordes de cada recorte ("con recortes"). |

El perímetro incluye los bordes de los recortes a propósito, por ejemplo para encofrados de borde o zócalos que rodean también un agujero. Si necesitás solo el borde exterior, dejá los agujeros fuera de ese ítem o medí el borde exterior como un tramo lineal.

La {{ui:Unidad}} del ítem define cómo se informa el total: SF, SY o m². El panel de **Marca seleccionada** y la barra de estado muestran siempre pies cuadrados.

## Corregir un área

- **Mover una esquina**: seleccioná el área y arrastrá un controlador de esquina (los agujeros también tienen controladores). Si la nueva forma se cruzaría o empujaría un agujero afuera, la esquina vuelve a su lugar: "Se devolvió el punto."
- **Pasar a otro ítem**: elegí otro ítem de área en la lista **Ítem** debajo de **Marca seleccionada**.
- **Eliminar**: {{key:Delete}}, {{ui:Eliminar}} en el menú {{ui:Más}} de la barra de herramientas, o {{ui:Eliminar marca}}.

## Profundidad para volúmenes

Dale al ítem de área una {{ui:Profundidad}} (por ejemplo `0'-4"` para una losa) y usá `A * H / 27` en un componente de ensamble para obtener yardas cúbicas. Ver [Ensambles y fórmulas](topic:assemblies).
