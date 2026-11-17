---
title: Crear partidas de cuantificación
summary: Cree partidas lineales, de área y de conteo, y defina su unidad, altura o profundidad, desperdicio y tarifas de material y de mano de obra.
keywords: cuadrilla, rendimiento de producción, integrantes de la cuadrilla, salario, horas, horas-hombre, horas-trabajador, días-cuadrilla, horas de mano de obra, partida, nueva partida, condición, multicondición, medir también, varios tipos, cuarto, lineal, área, conteo, unidad, altura, profundidad, desperdicio, material, mano de obra, tarifa, color, costo
from: 7fa5effc
---

Una **partida** es algo que usted mide y valora: un tipo de muro, un acabado de piso, un cielorraso, una puerta, una luminaria. Cada marca que dibuja pertenece a una partida. Otros programas llaman a estas condiciones.

Cada partida tiene un tipo (y también puede llevar otros tipos de marcas; vea [Una partida, varios tipos de marcas](topic:create-items#one-item-several-kinds-of-marks)):

| Tipo | Lo que dibuja | Lo que informa | Unidades |
|---|---|---|---|
| Lineal | Tramos de puntos conectados | Longitud, número de tramos y área de muro cuando tiene altura | LF o m |
| Área | Contornos cerrados, con recortes | Área, perímetro, número de áreas | SF, SY, SQ, ac, ha o m² |
| Conteo | Un clic por cada elemento | Cuántos | EA |
| Cantidad escrita | Nada: usted escribe la cantidad | El número que escribió (o uno traído de CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha o m² |

## Cantidades escritas (sin dibujo)

Hay cosas en un presupuesto que nunca se dibujan: movilización, permisos, una contingencia, un subcontrato a suma alzada, el corte y relleno que calculó CivilCraft. Conviértalas en una **Cantidad escrita**:

1. Elija {{ui:New item}}, escriba un nombre, seleccione {{ui:Typed quantity (no drawing)}} y elija {{ui:Add}}.
2. En el editor de la partida, elija la {{ui:Unit}} (LS para una suma alzada) y escriba la {{ui:Quantity}}: `1`, `2.5` o `1,250`.
3. Defina el desperdicio y las tarifas igual que en cualquier otra partida. Las fórmulas de un conjunto usan `Q`, la cantidad; por ejemplo `ceil(Q / 12)` viajes de camión.

Una cantidad escrita no lleva marcas y nunca deja incompleto el presupuesto. Cuando la cuantificación tiene áreas de licitación, el editor también tiene {{ui:Bid area}}: la cantidad entonces cuenta en esa área, sus alternativas y sus totales, igual que lo haría una marca allí. Las cantidades traídas de otra aplicación indican de dónde vienen; vea [Movimiento de tierras y cotas de punto](topic:earthwork#cut-and-fill-from-civilcraft).

## Crear una partida

1. En el panel {{ui:Items}} de la derecha, elija {{ui:New item}}.
2. Escriba un nombre, como `Pared interior tipo A` o `Loseta de alfombra`.
3. Elija el tipo: {{ui:Linear (length)}}, {{ui:Area}} o {{ui:Count}}.
4. Elija {{ui:Add}} (o pulse {{key:Enter}}).
   La partida aparece en la lista con su propio color, se convierte en la partida con la que dibuja, y su editor se abre debajo de la lista. La barra de estado le indica qué herramienta elegir después.

Pulse {{key:Esc}} en el formulario para cerrarlo sin agregar una partida.

:::tip
Si elige primero una herramienta de medición, TakeoffCraft usa la última partida del tipo correcto, o abre el formulario {{ui:New item}} con ese tipo ya seleccionado.
:::

## Elegir la partida con la que dibuja

Haga clic en una partida de la lista. Se convierte en la partida a la que van las nuevas marcas, y sus marcas se resaltan en todas las hojas mientras las demás se atenúan. Si la hoja abierta no tiene ninguna de sus marcas, TakeoffCraft salta a una hoja que sí tenga. Haga clic de nuevo en la partida para dejar de resaltarla; sigue siendo la partida con la que dibuja.

Hacer clic en una marca con la herramienta {{ui:Select}} también hace de su partida la actual.

## Configurar la partida

El editor de partidas (**Partida: (nombre)**) tiene estos campos. Cada uno se guarda al salir del campo o al pulsar {{key:Enter}}, y cada cambio puede deshacerse.

| Campo | Qué hace |
|---|---|
| {{ui:Name}} | Se muestra en la lista, en las tablas y en las exportaciones. |
| {{ui:Type}} | Lineal, Área o Conteo. Se bloquea cuando la partida tiene marcas ("Una partida con marcas conserva su tipo"). |
| {{ui:Color}} | El color de sus marcas en pantalla y en el PDF marcado. |
| {{ui:Unit}} | En qué se informa la cantidad: LF o m para lineal; SF, SY, SQ, ac, ha o m² para área; EA para conteo. |
| {{ui:Also measure}} | Los otros tipos de marcas que lleva la partida, cada uno con su propia unidad. Vea abajo. |
| {{ui:Height}} (lineal) | Una altura de muro. La partida también informa el área de muro (longitud × altura). Los tramos que vienen de un modelo de BimCraft conservan sus puertas y ventanas: estas se descuentan una vez, y la partida indica el área bruta, las aberturas y la neta. Una cuantificación de un proyecto de BimCraft que eligió un método de medición se mide aquí con ese mismo método (la nota lo indica, con su origen, y señala que un topógrafo de cantidades no lo ha verificado); el método no puede cambiarse en TakeoffCraft. Los ladrillos o bloques y el mortero de un tipo de muro llegan como dos componentes: las unidades a pedir y el volumen de mortero. |
| {{ui:Depth}} (área) | Una profundidad o espesor, usado en las fórmulas de conjuntos (por ejemplo, el volumen de concreto). |
| {{ui:Waste %}} | Se suma a la cantidad antes de valorar: 10 significa cantidad × 1.10. |
| {{ui:Material $/LF}} | Costo de material por unidad. La etiqueta sigue a la unidad: $/SF, $/EA, etc. |
| {{ui:Labor $/LF}} | Costo de mano de obra por unidad. |
| {{ui:CSI number}} | Su número de MasterFormat del CSI, como `09 21 16` (o solo la división, `09`). La hoja By division del libro agrupa los costos por este número. Las partidas de [paquetes de oficios](topic:trade-packs) ya lo tienen. |

Alto y profundidad aceptan pies y pulgadas (`9'-0"`, `8' 6"`) o pies decimales (`9`) para unidades imperiales, y metros (`2.7`, `2700 mm`) para unidades métricas. Las tarifas aceptan montos como `12.50` o `$1,250`, hasta cuatro decimales. Vea [Formatos de entrada de longitud, tarifa y porcentaje](topic:entry-formats).

Debajo de los campos, **Medido** muestra los totales que pueden usar las fórmulas de la partida, con sus letras: Longitud (L), Tramos (N), Área de muro (A) para lineal; Área (A), Perímetro (P), Áreas (N) para área; Conteo (N) para conteo.

## Una partida, varios tipos de marcas

Algunas cosas se miden de más de una forma: un cuarto tiene un piso (un área), un zócalo a lo largo de sus muros (una longitud) y puertas (un conteo). En lugar de tres partidas, cree una:

1. Cree la partida con su tipo principal, como una partida de área `Cuarto 101`.
2. En {{ui:Also measure}} de su editor, marque {{ui:Linear}}, {{ui:Count}} o ambos. Cada uno recibe una unidad junto a él.
3. Dibuje con cualquier herramienta cuyo tipo acepte la partida: con `Cuarto 101` como actual, {{ui:Area}} dibuja su piso, {{ui:Linear}} su zócalo y {{ui:Count}} sus puertas. TakeoffCraft no pide otra partida.

La lista de partidas muestra cada cantidad (`50.00 SF + 2 EA`). En la tabla de cantidades, la fila de la partida tiene su cantidad principal, y cada otro tipo tiene su propia fila debajo, como **Cuarto 101 (conteo)**, con sus propias tarifas de desperdicio, material y mano de obra. Las exportaciones, la tabla por hoja y la leyenda del PDF marcado también las listan de la misma manera.

Los campos del tipo principal siguen siendo suyos: la altura o profundidad, la pendiente, los descuentos (back-outs) y la forma 3D se aplican solo a sus marcas. Un tramo de zócalo dibujado para una partida de área se mide simplemente a lo largo del plano, y se muestra plano en 3D. Las fórmulas de conjuntos usan los totales del tipo principal.

Un tipo adicional solo puede desmarcarse mientras la partida no tenga marcas de ese tipo; elimínelas, o muévalas a otra partida en **Marca seleccionada**, primero. Las marcas pueden pasar a cualquier partida que acepte su tipo.

Más abajo está el {{ui:Assembly}}: componentes como montantes o tablero, cada uno con su propia fórmula y tarifas. Vea [Conjuntos y fórmulas](topic:assemblies).

Al final: {{ui:Move up}} y {{ui:Move down}} cambian el lugar de la partida en la lista y en las exportaciones, y {{ui:Delete item}} la elimina con todas sus marcas (después de preguntar; puede deshacerlo).

Las partidas de área también tienen **Pendiente** (planos de techo medidos sobre la inclinación: [Techos e inclinaciones](topic:roofs-and-slopes)) y **Descuento** (sus marcas se restan de las áreas de otras partidas: [Medir áreas](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Las partidas lineales tienen **Inclinación** (Nivel, Rake, Cadera o Limatesa) y, para rakes y caderas, **Pendiente**.

## Tarifas en la tabla

También puede escribir {{ui:Waste %}}, y las tarifas de material y mano de obra directamente en la tabla {{ui:Quantities}} al pie ({{ui:By item}}). Es el mismo ajuste que en el editor.

## Cómo funciona la valoración

Para cada partida y cada componente de conjunto:

1. **Con desperdicio** = cantidad × (1 + desperdicio %).
2. **Material** = con desperdicio × material por unidad, redondeado al centavo.
3. **Mano de obra** = con desperdicio × mano de obra por unidad, redondeado al centavo.
4. **Total** = material + mano de obra.

El {{ui:Job total}} suma cada partida y cada componente. Una partida puede llevar sus propias tarifas y un conjunto al mismo tiempo; se cuentan ambos, así que deje en 0 las tarifas de la partida cuando sus componentes llevan el costo.

## Mano de obra por cuadrilla

En lugar de una tarifa de mano de obra por unidad, la mano de obra de una partida puede venir de una cuadrilla: cuánto produce por hora, cuántas personas son y cuánto gana cada una. En {{ui:Labor by crew}} del editor de la partida, marque {{ui:Price labor from a crew}} y complete:

| Campo | Ejemplo |
|---|---|
| {{ui:Production}} | `20` LF por hora (en la unidad de la partida) para toda la cuadrilla |
| {{ui:Crew size}} | `2` personas |
| {{ui:Wage $/hour each}} | `45` |

TakeoffCraft calcula, a partir de la cantidad con desperdicio:

- **horas-cuadrilla** = cantidad ÷ rendimiento (110 LF ÷ 20 = 5.5),
- **horas-trabajador** = horas-cuadrilla × integrantes (11),
- **días-cuadrilla** = horas-cuadrilla ÷ 8 (0.69),
- **mano de obra** = horas-trabajador × salario ($495.00).

El editor muestra el resultado y la tarifa que resulta ($4.50/LF). La tarifa de mano de obra propia de la partida pasa entonces a solo lectura, en el editor y en la tabla. El encabezado de la tabla {{ui:Quantities}} agrega las horas-trabajador y los días-cuadrilla de la obra. Las exportaciones anotan las horas de cada cuadrilla, y en el libro la celda de mano de obra es una fórmula sobre la cuadrilla (`ROUND(F2/20*2*45,2)`). Desmarque la casilla para volver a una tarifa por unidad.

## Partidas métricas

Elija m (lineal) o m² (área) como unidad. Las cantidades, alturas y valores de fórmulas quedan entonces en metros. La escala de la hoja puede ser cualquier preajuste o calibración; las unidades y las escalas son independientes.

## Siguiente

- [Medir tramos lineales](topic:measure-linear)
- [Medir áreas con recortes](topic:measure-areas)
- [Contar a mano](topic:count-by-hand)
