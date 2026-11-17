---
title: Medir áreas con recortes
summary: Trace los contornos de suelos, techos y losas, recorte huecos en ellos, añada bordes curvos, círculos y recortes redondos, y lea el área y el perímetro.
keywords: relleno de sala, relleno por inundación, cubo de pintura, clic dentro de una sala, área automática, sustracción, columna, patinillo, hueco, descontar de varias partidas, área, polígono, contorno, pies cuadrados, sf, recorte, agujero, descontar, círculo, redondo, arco, perímetro, suelo, techo, losa
from: 34648db7
---

Una partida de área mide la superficie cerrada. Cada contorno puede tener huecos recortados (un patinillo, un pilar, una jardinera), y sus bordes pueden ser rectos o curvos.

Antes de empezar: la hoja necesita una escala ([Definir la escala](topic:set-the-scale)) y necesita una partida de área ([Crear partidas de medición](topic:create-items)).

## Trazar un área

1. Haga clic en la partida de área bajo {{ui:Partidas}}.
2. Elija {{ui:Área}} en la barra de herramientas, o pulse {{key:A}}.
3. Haga clic en cada esquina de la sala o de la losa, en orden. Mantenga pulsado {{key:Shift}} para bordes de 0°, 45° y 90°.
   Desde el tercer punto, el contorno se rellena y la barra de estado muestra "Área" y "perímetro". Aparece un pequeño anillo alrededor del primer punto.
4. Cierre el contorno: haga clic en el primer punto (dentro de su anillo), pulse {{key:Enter}}, haga doble clic o clic derecho.
   El área se rellena ligeramente con el color de la partida, se rotula con sus pies cuadrados y pasa a ser la marca seleccionada.

{{key:Backspace}} elimina la última esquina; {{key:Esc}} descarta el contorno.

Un contorno que se cruza consigo mismo se rechaza: «El contorno se cruza consigo mismo, así que su área sería incorrecta. Dibújelo de nuevo sin cruzarlo.» En su lugar, dibuje una figura en forma de ocho como dos áreas.

## Bordes curvos

Mientras traza el contorno, active el modo de arco ({{ui:Arco}} o {{key:R}}). Tras una esquina, haga clic en un punto de la curva y después donde termina la curva. Para cerrar el contorno con una curva, haga ese último clic en el primer punto. El área y el perímetro usan la curva exacta. Pulse {{key:R}} de nuevo para volver a los bordes rectos. Para cambiar una curva después, seleccione el área y arrastre el tirador redondo del centro del arco. Consulte [Medir tramos lineales](topic:measure-linear#arcs-and-curved-walls).

## Un círculo

1. Con una partida de área, elija {{ui:Círculo}} o pulse {{key:O}}.
2. Haga clic en el centro.
3. Haga clic en cualquier punto del borde.
   Mientras mueve el puntero, la barra de estado muestra el radio y el área. El círculo se añade como una marca de área con área y perímetro exactos.

## Rellenar una sala con un clic

Cuando las salas están dibujadas como muros cerrados, {{ui:Sala}} ({{key:B}}) calcula un suelo con un solo clic:

1. Elija una partida de área (un acabado de suelo, por ejemplo) y asigne la escala a la hoja.
2. Elija {{ui:Sala}} en el grupo {{ui:Medición}}, o pulse {{key:B}}.
3. Haga clic dentro de una sala, en el suelo libre (no sobre una línea ni sobre una etiqueta).

TakeoffCraft lee las líneas de la hoja, encuentra el espacio alrededor del clic y lo traza siguiendo las caras interiores de los muros, como un área de la partida actual. Las aberturas de puerta de hasta **4'-0"** se consideran cerradas, de modo que el contorno cruza la puerta en línea recta; **Ajustes › Medición › Room fill closes openings up to** cambia esa anchura (de 3'-0" a 8'-0"). Los nombres de sala, muebles y accesorios dentro de la sala no hacen huecos.

Rechaza el relleno y explica por qué cuando:

- el clic está sobre una línea («Eso está sobre una línea»);
- el espacio no está cerrado: una abertura más ancha que el ajuste deja que el relleno se escape hasta el borde de la hoja. Suba el ajuste, o trace esa sala a mano con {{ui:Área}};
- el espacio es diminuto (un símbolo, no una sala).

Cuando una puerta es más ancha que el ajuste, el relleno pasa a la sala contigua y traza ambas juntas: deshaga ({{key:Mod+Z}}), suba el ajuste y haga clic de nuevo. Compruebe el contorno como cualquier área: arrastre sus esquinas para corregirlo. Una hoja escaneada funciona igual, pero sus líneas deben ser lo bastante oscuras; las líneas gris claro pueden no detener el relleno.

## Recortar un hueco en un área

1. Elija {{ui:Seleccionar}} ({{key:V}}) y haga clic en el área. Muestra tiradores cuadrados en sus esquinas.
2. Elija {{ui:Recorte}} en la barra de herramientas (o pulse {{key:X}}), o {{ui:Añadir un recorte}} bajo **Marca seleccionada**.
3. Haga clic en las esquinas del hueco, dentro del área. El modo de arco funciona también aquí.
4. Ciérrelo como un área: haga clic en su primer punto, pulse {{key:Enter}}, haga doble clic o clic derecho.
   El hueco queda sin relleno, y la barra de estado indica «Recorte añadido. Dibuje otro o pulse Esc.»
5. Dibuje más huecos en la misma área, o pulse {{key:Esc}}.

Para un hueco redondo, elija {{ui:Añadir un recorte redondo}} bajo **Marca seleccionada**, haga clic en su centro y luego en un punto de su borde.

Un recorte debe quedar totalmente dentro del área y no debe solaparse con otro recorte. Si no, TakeoffCraft lo rechaza: «El recorte tiene que quedar totalmente dentro del área.» o «Los recortes no pueden solaparse entre sí.»

Para quitar de nuevo el último hueco, elija {{ui:Quitar el último recorte}}.

## Sustracciones: columnas, patinillos y aberturas restadas de varias partidas

Un recorte pertenece a una marca de área. Una **sustracción** se dibuja una sola vez y se resta de cada área que solapa, en las partidas que elija: dibuje las columnas una vez, y se restan del acabado del suelo, del techo y de la losa a la vez.

1. Cree una partida de área para ellas, como «Columnas».
2. En los ajustes de la partida, marque **Sustracción: sus marcas restan su área de otras partidas**. Aparece una lista de sus otras partidas de área, todas marcadas: desmarque las que las sustracciones no deben tocar (la pintura de los muros, por ejemplo).
3. Mida las columnas con {{ui:Área}} o {{ui:Círculo}}, como de costumbre. Cada una se dibuja con trazo discontinuo.

Cada marca de área de una partida marcada, en la misma hoja, pierde la parte que cubre una sustracción: la sustracción completa cuando queda dentro, solo la parte solapada cuando cruza el borde, y nada dentro de un recorte. El panel del área seleccionada muestra **Sustracciones** y el área restante. La cantidad de la partida, sus fórmulas de composiciones, los costes, la vista de comprobación 3D y la exportación usan el área restante; las notas de la estimación indican cuánto han restado las sustracciones. La propia partida de sustracción cuenta su área (deje sus costes a cero si no la valora).

Una sustracción debe ser **convexa**: un rectángulo, un círculo o cualquier contorno sin esquinas hacia dentro. TakeoffCraft no permite dibujar una que no lo sea; dibuje un patinillo en forma de L como dos sustracciones. Las sustracciones no pueden tener recortes, y dos sustracciones que se solapan entre sí cuentan ambas.

El perímetro (`P`) no cambia: las sustracciones restan solo área.

## Leer el área

Seleccione el área. **Marca seleccionada** muestra:

| Línea | Significado |
|---|---|
| Área | El área neta: contorno menos recortes. Es lo que cuenta la partida. |
| Contorno | El área bruta dentro del contorno (se muestra cuando hay recortes). |
| Recortes | Cuántos huecos hay, y su área total. |
| Perímetro | La longitud del contorno, **más** los bordes de cada recorte («con recortes»). |

El perímetro incluye los bordes de los recortes a propósito, para cosas como encofrados de borde o zócalos que también rodean un hueco. Si necesita solo el borde exterior, mantenga los huecos fuera de esa partida, o mida el borde exterior como un tramo lineal.

La {{ui:Unidad}} de la partida decide cómo se informa el total: SF, SY o m². El panel de **Marca seleccionada** y la barra de estado muestran siempre pies cuadrados.

## Corregir un área

- **Mover una esquina**: seleccione el área y arrastre un tirador de esquina (los huecos también tienen tiradores). Si la nueva forma se cruzara consigo misma o empujara un hueco fuera, la esquina vuelve a su sitio: «El punto se ha devuelto a su posición.»
- **Pasar a otra partida**: elija otra partida de área en la lista **Partida** bajo **Marca seleccionada**.
- **Borrar**: {{key:Delete}}, {{ui:Borrar}} en la barra de herramientas, en el menú {{ui:Más}}, o {{ui:Borrar marca}}.

## Profundidad para volúmenes

Dé a la partida de área una {{ui:Profundidad}} (por ejemplo `0'-4"` para una losa) y use `A * H / 27` en un componente de composición para obtener yardas cúbicas. Consulte [Composiciones y fórmulas](topic:assemblies).
