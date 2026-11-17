---
title: Medir áreas con recortes
summary: Trace pisos, plafones y losas, quite huecos de ellos, agregue bordes curvos, círculos y recortes redondos, y lea el área y el perímetro.
keywords: relleno de cuarto, relleno por inundación, cubeta de pintura, clic dentro de un cuarto, área automática, descuento, back-out, backout, columna, ducto, deducir de varias partidas, área, polígono, contorno, pies cuadrados, sf, recorte, hueco, deducir, círculo, redondo, arco, perímetro, piso, plafón, losa
from: 34648db7
---

Una partida de área mide el área encerrada. Cada contorno puede tener huecos recortados (un ducto, una columna, una jardinera), y sus bordes pueden ser rectos o curvos.

Antes de empezar: la hoja necesita una escala ([Asignar la escala](topic:set-the-scale)) y necesita una partida de área ([Crear partidas de cuantificación](topic:create-items)).

## Trazar un contorno de área

1. Haga clic en la partida de área bajo {{ui:Items}}.
2. Elija {{ui:Area}} en la barra de herramientas, o pulse {{key:A}}.
3. Haga clic en cada esquina del cuarto o la losa, en orden. Mantenga {{key:Shift}} para bordes de 0°, 45° y 90°.
   Desde el tercer punto, el contorno se rellena y la barra de estado muestra "Área" y "perímetro". Aparece un anillo pequeño alrededor del primer punto.
4. Cierre el contorno: haga clic en el primer punto (dentro de su anillo), pulse {{key:Enter}}, haga doble clic o haga clic derecho.
   El área se rellena ligeramente con el color de la partida, se rotula con sus pies cuadrados y se convierte en la marca seleccionada.

{{key:Backspace}} elimina la última esquina; {{key:Esc}} descarta el contorno.

Un contorno que se cruza a sí mismo se rechaza: "El contorno se cruza a sí mismo, así que su área sería incorrecta. Vuelva a dibujarlo sin cruzarlo." En su lugar, dibuje una figura en forma de ocho como dos áreas.

## Bordes curvos

Mientras traza el contorno, active el modo de arco ({{ui:Arc}} o {{key:R}}). Después de una esquina, haga clic en un punto a lo largo de la curva, y luego donde termina la curva. Para cerrar el contorno con una curva, haga ese último clic en el primer punto. El área y el perímetro usan la curva exacta. Pulse {{key:R}} otra vez para bordes rectos. Para cambiar una curva después, seleccione el área y arrastre el controlador redondo en medio del arco. Vea [Medir tramos lineales](topic:measure-linear#arcs-and-curved-walls).

## Un círculo

1. Con una partida de área, elija {{ui:Circle}} o pulse {{key:O}}.
2. Haga clic en el centro.
3. Haga clic en cualquier punto del borde.
   Mientras mueve el puntero, la barra de estado muestra el radio y el área. El círculo se agrega como marca de área, con área y perímetro exactos.

## Rellenar un cuarto con un clic

Cuando los cuartos están dibujados como muros cerrados, {{ui:Room}} ({{key:B}}) toma un piso con un solo clic:

1. Elija una partida de área (un acabado de piso, por ejemplo) y asigne a la hoja su escala.
2. Elija {{ui:Room}} en el grupo {{ui:Takeoff}}, o pulse {{key:B}}.
3. Haga clic dentro de un cuarto, en el piso abierto (no sobre una línea ni una etiqueta).

TakeoffCraft lee las líneas de la hoja, encuentra el espacio alrededor del clic y lo contornea por las caras interiores de los muros, como un área de la partida actual. Las aberturas de puerta de hasta **4'-0"** se consideran cerradas, así que el contorno cruza recto la puerta; **Configuración › TakeoffCraft › Relleno de cuarto cierra aberturas de hasta** cambia ese ancho (de 3'-0" a 8'-0"). Los nombres de cuartos, muebles y accesorios dentro del cuarto no crean huecos.

Se rechaza, indicando por qué, cuando:

- el clic está sobre una línea ("Eso está sobre una línea");
- el espacio no está cerrado: una abertura más ancha que la configuración deja escapar el relleno hasta el borde de la hoja. Aumente la configuración, o contornee ese cuarto a mano con {{ui:Area}};
- el espacio es muy pequeño (un símbolo, no un cuarto).

Cuando una puerta es más ancha que la configuración, el relleno pasa al siguiente cuarto y contornea ambos juntos: deshaga ({{key:Mod+Z}}), aumente la configuración y haga clic otra vez. Revise el contorno como cualquier área: arrastre sus esquinas para corregirlo. Una hoja escaneada funciona igual, pero sus líneas deben ser lo bastante oscuras; las líneas gris claro pueden no detener el relleno.

## Recortar un hueco de un área

1. Elija {{ui:Select}} ({{key:V}}) y haga clic en el área. Muestra controladores cuadrados en sus esquinas.
2. Elija {{ui:Cut-out}} en la barra de herramientas (o pulse {{key:X}}), o {{ui:Add a cut-out}} en **Marca seleccionada**.
3. Haga clic en las esquinas del hueco, dentro del área. El modo de arco también funciona aquí.
4. Ciérrelo como un área: haga clic en su primer punto, pulse {{key:Enter}}, haga doble clic o haga clic derecho.
   El hueco queda sin relleno, y la barra de estado dice "Recorte agregado. Dibuje otro, o pulse Esc."
5. Dibuje más huecos en la misma área, o pulse {{key:Esc}}.

Para un hueco redondo, elija {{ui:Add a round cut-out}} en **Marca seleccionada**, haga clic en su centro y luego en un punto de su borde.

Un recorte debe quedar completamente dentro del área y no debe superponerse con otro recorte. Si no, TakeoffCraft lo rechaza: "Un recorte tiene que quedar completamente dentro del área." o "Los recortes no pueden superponerse entre sí."

Para quitar el último hueco, elija {{ui:Remove last cut-out}}.

## Descuentos: columnas, ductos y aberturas tomados de varias partidas

Un recorte pertenece a una sola marca de área. Un **descuento** se dibuja una vez y se resta de cada área que cruza, para las partidas que elija: dibuje las columnas una vez, y se descuentan del acabado de piso, del plafón y de la losa a la vez.

1. Cree una partida de área para ellas, como "Columnas".
2. En la configuración de la partida, marque **Descuento: sus marcas restan su área de otras partidas**. Aparece una lista de sus otras partidas de área, todas marcadas: desmarque las que el descuento no debe afectar (pintura en muros, por ejemplo).
3. Cuantifique las columnas con {{ui:Area}} o {{ui:Circle}}, como de costumbre. Cada una se dibuja punteada.

Cada marca de área de una partida marcada, en la misma hoja, pierde la parte que cubre un descuento: todo el descuento cuando queda dentro, solo la parte que cruza cuando cruza el borde, y nada dentro de un recorte. El panel del área seleccionada muestra **Descuentos** y el área restante. La cantidad de la partida, sus fórmulas de conjunto, los costos, la vista de comprobación 3D y la exportación usan el área restante; las notas del presupuesto indican cuánto quitaron los descuentos. La partida de descuento en sí cuenta su propia área (deje sus costos en cero si no la valúa).

Un descuento debe ser **convexo**: un rectángulo, un círculo o cualquier contorno sin esquina hacia adentro. TakeoffCraft rechaza dibujar uno que no lo sea; dibuje un ducto en forma de L como dos descuentos. Los descuentos no pueden tener recortes, y si dos descuentos se superponen, ambos cuentan.

El perímetro (`P`) no cambia: los descuentos restan solo área.

## Leer el área

Seleccione el área. **Marca seleccionada** muestra:

| Línea | Significado |
|---|---|
| Área | El área neta: contorno menos recortes. Es lo que cuenta la partida. |
| Contorno | El área bruta dentro del contorno (se muestra cuando hay recortes). |
| Recortes | Cuántos huecos hay, y su área total. |
| Perímetro | La longitud del contorno, **más** los bordes de cada recorte ("con recortes"). |

El perímetro incluye a propósito los bordes de los recortes, para cosas como cimbras de borde o cimentación que también corren alrededor de un hueco. Si necesita solo el borde exterior, mantenga los huecos fuera de esa partida, o mida el borde exterior como un tramo lineal.

La {{ui:Unit}} de la partida decide cómo se informa el total: SF, SY o m². El panel **Marca seleccionada** y la barra de estado siempre muestran pies cuadrados.

## Corregir un área

- **Mover una esquina**: seleccione el área y arrastre un controlador de esquina (los huecos también tienen controladores). Si la nueva forma se cruzaría a sí misma o empujaría un hueco hacia afuera, la esquina regresa a su lugar: "El punto se devolvió a su lugar."
- **Mover a otra partida**: elija otra partida de área en la lista **Partida** bajo **Marca seleccionada**.
- **Eliminar**: {{key:Delete}}, {{ui:Delete}} en el menú {{ui:More}} de la barra de herramientas, o {{ui:Delete mark}}.

## Profundidad para volúmenes

Dé a la partida de área una {{ui:Depth}} (por ejemplo `0'-4"` para una losa) y use `A * H / 27` en un componente de conjunto para obtener yardas cúbicas. Vea [Conjuntos y fórmulas](topic:assemblies).
