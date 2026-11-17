---
title: Crear partidas de medición
summary: Cree partidas lineales, de área y de recuento, y defina su unidad, altura o profundidad, desperdicio y tarifas de material y mano de obra.
keywords: cuadrilla, rendimiento de producción, tamaño de la cuadrilla, salario, horas, horas-hombre, horas de trabajador, días de cuadrilla, horas de mano de obra, partida, nueva partida, condición, multicondición, medir también, varios tipos, habitación, lineal, área, recuento, unidad, altura, profundidad, desperdicio, material, mano de obra, tarifa, color, coste
from: 7fa5effc
---

Una **partida** es algo que se mide y se valora: un tipo de muro, un acabado de suelo, un techo, una puerta o una luminaria. Cada marca que dibuja pertenece a una partida. Otros programas llaman a estas partidas condiciones.

Cada partida tiene un tipo (y puede admitir también otros tipos de marcas, véase [Una partida, varios tipos de marcas](topic:create-items#one-item-several-kinds-of-marks)):

| Tipo | Se dibuja | Muestra | Unidades |
|---|---|---|---|
| Lineal | Tramos de puntos conectados | Longitud, número de tramos y superficie de muro cuando tiene altura | LF o m |
| Área | Contornos cerrados, con huecos | Área, perímetro, número de áreas | SF, SY, SQ, ac, ha o m² |
| Recuento | Un clic por cada elemento | Cuántos hay | EA |
| Cantidad escrita | Nada: se escribe la cantidad | La cantidad escrita (o una importada de CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha o m² |

## Cantidad escrita (sin dibujo)

Algunos conceptos de un presupuesto nunca se dibujan: la movilización, los permisos, una contingencia, un subcontrato a tanto alzado o el desmonte y terraplén que calculó CivilCraft. Conviértalos en una **cantidad escrita**:

1. Elija {{ui:Nueva partida}}, escriba un nombre, seleccione {{ui:Cantidad escrita (sin dibujo)}} y elija {{ui:Añadir}}.
2. En el editor de partidas, elija la {{ui:Unidad}} (LS para un importe alzado) y escriba la {{ui:Cantidad}}: `1`, `2.5` o `1,250`.
3. Defina el desperdicio y las tarifas como en cualquier otra partida. Las fórmulas de un conjunto usan `Q`, la cantidad; por ejemplo, `ceil(Q / 12)` viajes de camión.

Una cantidad escrita no admite marcas y nunca deja incompleta la medición. Cuando la medición tiene áreas de licitación, el editor también muestra {{ui:Área de licitación}}: la cantidad cuenta entonces en esa área, en sus alternativas y en sus totales, igual que lo haría una marca allí. Las cantidades importadas de otra aplicación indican su origen; véase [Movimiento de tierras y cotas](topic:earthwork#cut-and-fill-from-civilcraft).

## Crear una partida

1. En el panel {{ui:Partidas}} de la derecha, elija {{ui:Nueva partida}}.
2. Escriba un nombre, como `Tipo de muro interior A` o `Baldosa de moqueta`.
3. Elija el tipo: {{ui:Lineal (longitud)}}, {{ui:Área}} o {{ui:Recuento}}.
4. Elija {{ui:Añadir}} (o pulse {{key:Enter}}).
   La partida aparece en la lista con su propio color, pasa a ser la partida con la que dibuja, y su editor se abre debajo de la lista. La barra de estado indica qué herramienta elegir a continuación.

Pulse {{key:Esc}} en el formulario para cerrarlo sin añadir ninguna partida.

:::tip
Si elige primero una herramienta de medición, TakeoffCraft usa la última partida del tipo correcto, o abre el formulario {{ui:Nueva partida}} con ese tipo ya elegido.
:::

## Elegir la partida con la que dibuja

Haga clic en una partida de la lista. Pasa a ser la partida a la que van las nuevas marcas, y sus marcas se resaltan en todas las hojas mientras las demás se atenúan. Si la hoja abierta no tiene ninguna de sus marcas, TakeoffCraft salta a una hoja que sí las tenga. Haga clic de nuevo en la partida para dejar de resaltarla; sigue siendo la partida con la que dibuja.

Al hacer clic en una marca con la herramienta {{ui:Seleccionar}}, su partida también pasa a ser la actual.

## Configurar la partida

El editor de partidas (**Partida: (nombre)**) tiene estos campos. Cada uno se guarda al salir del campo o al pulsar {{key:Enter}}, y cada cambio se puede deshacer.

| Campo | Qué hace |
|---|---|
| {{ui:Nombre}} | Se muestra en la lista, las tablas y las exportaciones. |
| {{ui:Escribir}} | Lineal, Área o Recuento. Se bloquea cuando la partida tiene marcas ("Una partida con marcas conserva su tipo"). |
| {{ui:Color}} | El color de sus marcas en pantalla y en el PDF marcado. |
| {{ui:Unidad}} | En qué unidad se informa la cantidad: LF o m para lineal; SF, SY, SQ, ac, ha o m² para área; EA para recuento. |
| {{ui:Medir también}} | Los otros tipos de marcas que admite la partida, cada uno con su unidad. Véase más abajo. |
| {{ui:Altura}} (lineal) | Altura de un muro. La partida informa entonces también la superficie del muro (longitud × altura). Los tramos procedentes de un modelo de BimCraft conservan sus puertas y ventanas: se descuentan una vez, y la partida indica la superficie bruta, los huecos y la neta. Una medición de un proyecto de BimCraft que eligió un método de medición se mide también con ese método aquí (la nota lo indica, con su origen, y señala que no ha sido verificada por un técnico de mediciones); el método no se puede cambiar en TakeoffCraft. Los ladrillos o bloques y el mortero de un tipo de muro llegan como dos componentes: las unidades que hay que pedir y el volumen de mortero. |
| {{ui:Profundidad}} (área) | Profundidad o espesor, usado en las fórmulas de conjuntos (por ejemplo, volumen de hormigón). |
| {{ui:Desperdicio %}} | Se suma a la cantidad antes de valorar: 10 significa cantidad × 1.10. |
| {{ui:Material $/LF}} | Coste de material por unidad. La etiqueta sigue a la unidad: $/SF, $/EA, etc. |
| {{ui:Mano de obra $/LF}} | Coste de mano de obra por unidad. |
| {{ui:Número CSI}} | Su número CSI MasterFormat, como `09 21 16` (o solo la división, `09`). La hoja Por división del libro agrupa los costes por él. Las partidas de los [paquetes de partidas](topic:trade-packs) ya lo tienen. |

La altura y la profundidad admiten pies y pulgadas (`9'-0"`, `8' 6"`) o pies decimales (`9`) para unidades imperiales, y metros (`2.7`, `2700 mm`) para unidades métricas. Las tarifas admiten importes como `12.50` o `$1,250`, hasta cuatro decimales. Véase [Introducción de longitud, tarifa y porcentaje](topic:entry-formats).

Debajo de los campos, **Medido** muestra los totales que pueden usar las fórmulas de la partida, con sus letras: Longitud (L), Tramos (N) y Superficie de muro (A) para lineal; Área (A), Perímetro (P) y Áreas (N) para área; Recuento (N) para recuento.

## Una partida, varios tipos de marcas

Algunas cosas se miden de más de una forma: una habitación tiene un suelo (un área), un zócalo a lo largo de sus muros (una longitud) y puertas (un recuento). En lugar de tres partidas, cree una:

1. Cree la partida con su tipo principal, como una partida de área `Habitación 101`.
2. Debajo de {{ui:Medir también}} en su editor, marque {{ui:Lineal}}, {{ui:Recuento}} o ambos. Cada uno recibe una unidad junto a él.
3. Dibuje con cualquier herramienta cuyo tipo admita la partida: con `Habitación 101` como actual, {{ui:Área}} dibuja su suelo, {{ui:Lineal}} su zócalo y {{ui:Recuento}} sus puertas. TakeoffCraft no pide otra partida.

La lista de partidas muestra cada cantidad (`50.00 SF + 2 EA`). En la tabla de cantidades, la fila de la partida tiene su cantidad principal, y cada otro tipo tiene su propia fila debajo, como **Habitación 101 (recuento)**, con su propio desperdicio y sus tarifas de material y mano de obra. Las exportaciones, la tabla por hoja y la leyenda del PDF marcado las listan de la misma forma.

Los campos del tipo principal siguen siendo suyos: la altura o profundidad, la pendiente, los descuentos y la forma 3D se aplican solo a sus marcas. Un tramo de zócalo dibujado para una partida de área se mide en planta sin más y se muestra plano en 3D. Las fórmulas de conjuntos usan los totales del tipo principal.

Un tipo solo se puede desmarcar mientras la partida no tenga marcas de ese tipo: bórrelas o, antes, muévalas a otra partida en **Marca seleccionada**. Las marcas pueden pasar a cualquier partida que admita su tipo.

Más abajo está el {{ui:Conjunto}}: componentes como montantes o tableros, cada uno con su propia fórmula y tarifas. Véase [Conjuntos y fórmulas](topic:assemblies).

Al final, {{ui:Subir}} y {{ui:Bajar}} cambian el lugar de la partida en la lista y en las exportaciones, y {{ui:Borrar partida}} la elimina con todas sus marcas (tras preguntar; puede deshacerlo).

Las partidas de área también tienen **Inclinación** (planos de cubierta medidos sobre la pendiente: [Cubiertas y pendientes](topic:roofs-and-slopes)) y **Descuento** (sus marcas se restan de las áreas de otras partidas: [Medir áreas](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Las partidas lineales tienen **Pendiente** (Horizontal, Rake, Limahoya o Valle) y, para rakes y limahoyas, **Inclinación**.

## Tarifas en la tabla

También puede escribir el {{ui:Desperdicio %}} y las tarifas de material y mano de obra directamente en la tabla {{ui:Cantidades}}, en la parte inferior ({{ui:Por partida}}). Es el mismo ajuste que en el editor.

## Cómo se calcula el precio

Para cada partida y cada componente de conjunto:

1. **Con desperdicio** = cantidad × (1 + desperdicio %).
2. **Material** = con desperdicio × material por unidad, redondeado al céntimo.
3. **Mano de obra** = con desperdicio × mano de obra por unidad, redondeado al céntimo.
4. **Total** = material + mano de obra.

{{ui:Total de la obra}} suma cada partida y cada componente. Una partida puede tener sus propias tarifas y un conjunto a la vez; ambos se cuentan, así que deje las tarifas de la partida en 0 cuando sus componentes ya llevan el coste.

## Mano de obra por cuadrilla

En lugar de una tarifa de mano de obra por unidad, la mano de obra de una partida puede venir de una cuadrilla: cuánto rinde por hora, cuántas personas son y cuánto gana cada una. Debajo de {{ui:Mano de obra por cuadrilla}} en el editor de partidas, marque {{ui:Valorar la mano de obra por cuadrilla}} y rellene:

| Campo | Ejemplo |
|---|---|
| {{ui:Producción}} | `20` LF por hora (en la unidad de la partida) para toda la cuadrilla |
| {{ui:Tamaño de la cuadrilla}} | `2` personas |
| {{ui:Salario $/hora cada uno}} | `45` |

TakeoffCraft calcula, a partir de la cantidad con desperdicio:

- **horas de cuadrilla** = cantidad ÷ producción (110 LF ÷ 20 = 5.5),
- **horas-hombre** = horas de cuadrilla × tamaño de la cuadrilla (11),
- **días de cuadrilla** = horas de cuadrilla ÷ 8 (0.69),
- **mano de obra** = horas-hombre × salario ($495.00).

El editor muestra el resultado y la tarifa que resulta ($4.50/LF). La tarifa de mano de obra propia de la partida pasa entonces a ser de solo lectura, en el editor y en la tabla. El encabezado de la tabla {{ui:Cantidades}} añade las horas-hombre y los días de cuadrilla de la obra. Las exportaciones indican las horas de cada cuadrilla, y en el libro la celda de mano de obra es una fórmula sobre la cuadrilla (`ROUND(F2/20*2*45,2)`). Desmarque la casilla para volver a una tarifa por unidad.

## Partidas métricas

Elija m (lineal) o m² (área) como unidad. Las cantidades, alturas y valores de fórmula se expresan entonces en metros. La escala de la hoja puede ser cualquier preajuste o calibración; las unidades y las escalas son independientes.

## Siguiente

- [Medir tramos lineales](topic:measure-linear)
- [Medir áreas con huecos](topic:measure-areas)
- [Contar a mano](topic:count-by-hand)
