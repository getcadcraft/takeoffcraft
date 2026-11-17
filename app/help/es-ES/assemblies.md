---
title: Conjuntos y fórmulas
summary: Añada componentes a una partida y deje que las fórmulas conviertan su longitud, superficie o recuento en montantes, soleras, planchas de pladur, hormigón y herrajes, con un ejemplo de muro resuelto.
keywords: conjunto, componentes, fórmula, montantes, pladur, planchas, soleras, hormigón, yardas cúbicas, herrajes, receta, típico, partes de la partida
from: 12891a21
---

El **conjunto** de una partida es una lista de componentes, cada uno con su fórmula de cantidad y sus propios desperdicios y precios unitarios. La fórmula usa los totales medidos de la partida, así que una sola medición de un muro da montantes, soleras y placas a la vez, y se actualizan a medida que mide.

## Variables que puede usar

| Tipo de partida | Variables |
|---|---|
| Lineal | `L` longitud, `H` altura, `A` superficie de muro (L × H), `N` número de tramos |
| Superficie | `A` superficie, `P` perímetro (contorno + huecos), `H` profundidad o espesor, `N` número de superficies |
| Recuento | `N` recuento |

Los valores están en las unidades propias de la partida: pies y pies cuadrados para las partidas LF y SF, metros y metros cuadrados para las partidas m y m². En una partida SY, `A` está en yardas cuadradas, mientras que `P` y `H` siguen en pies.

Las fórmulas usan `+ - * /` (o × ÷), paréntesis, números y las funciones `ceil`, `floor`, `round`, `min`, `max` y `abs`. Las reglas completas están en [Lenguaje de fórmulas](topic:formulas).

## Ejemplo resuelto: un muro interior

Suponga que ha medido **Muro interior tipo A** como partida lineal: 4 tramos que suman 120 LF, con {{ui:Altura}} fijada en `9'-0"`. Sus valores **Medidos** son L = 120, N = 4, A = 1,080 (SF de muro, una cara).

1. Seleccione la partida en {{ui:Partidas}}.
2. En {{ui:Conjunto}}, elija {{ui:Añadir componente}}.
   Aparece un componente llamado "Componente", con la fórmula `L` y su resultado debajo.
3. Escriba `Montantes a 16 in e.e.` en {{ui:Nombre}} y `EA` en {{ui:Unidad}}.
4. En {{ui:Fórmula de cantidad}}, escriba `ceil(L * 12 / 16) + N`.
   El resultado se actualiza al escribir: "= 94 EA". Es un montante cada 16 pulgadas a lo largo de 120 pies (90), más uno adicional para cerrar cada uno de los 4 tramos.
5. Vuelva a elegir {{ui:Añadir componente}} para las soleras: nombre `Soleras superior e inferior`, unidad `LF`, fórmula `L * 2`. Resultado: 240 LF.
6. Añada la placa: nombre `Placa de yeso 4x8, ambas caras`, unidad `planchas`, fórmula `ceil(A * 2 / 32)`. Resultado: 68 planchas (2,160 SF de placa ÷ 32 SF por plancha = 67.5, redondeado hacia arriba).
7. Complete el {{ui:Desperdicio %}}, el {{ui:Material $}} y la {{ui:Mano de obra $}} de cada componente.
   Cada componente tiene su propia fila bajo la partida en {{ui:Cantidades}}, valorada como una partida, y el {{ui:Total de la obra}} lo incluye.

Si el coste del muro está todo en los componentes, deje en 0 los precios unitarios de material y de mano de obra de la propia partida, o se contará dos veces.

:::tip
El desperdicio se aplica después de la fórmula y no se redondea: 68 planchas con un 10% de desperdicio son 74.8 planchas. Para pedir planchas enteras, incluya el desperdicio dentro de la fórmula, por ejemplo `ceil(A * 2 / 32 * 1.1)`, y deje en 0 el desperdicio del componente.
:::

## Más fórmulas

| Qué | Tipo de partida | Fórmula |
|---|---|---|
| Montantes a 24 in entre ejes | Lineal | `ceil(L / 2) + N` |
| Mantas de aislamiento, SF | Lineal con altura | `A` |
| Pintura, ambas caras, botes a 350 SF | Lineal con altura | `ceil(A * 2 / 350)` |
| Cajas de azulejos a 15 SF, 10% extra | Superficie | `ceil(A * 1.1 / 15)` |
| Rodapié o remate de borde, LF | Superficie | `P` |
| Hormigón, yardas cúbicas | Superficie con profundidad | `A * H / 27` |
| Hormigón redondeado a cuarto de yarda | Superficie con profundidad | `ceil(A * H / 27 * 4) / 4` |
| Bisagras, tres por puerta | Recuento | `N * 3` |
| Al menos una caja, una por cada 12 | Recuento | `max(1, ceil(N / 12))` |

## Cuando una fórmula es errónea

La línea bajo la fórmula se convierte en un mensaje de error, por ejemplo `"X" is not a measured value here. Use L, H, A, N.` o `A ")" is missing.` El componente entonces no tiene importes, su fila en {{ui:Cantidades}} muestra "Error de fórmula: …", y el encabezado dice "Incompleto: 1 error de fórmula (no incluido en los totales)". Corrija la fórmula y los totales se actualizan.

Una fórmula que divide entre cero también es un error ("La fórmula divide entre cero."), por ejemplo `A / H` en una partida sin profundidad.

## Límites

- Las fórmulas operan sobre los **totales** de la partida, no tramo a tramo. `ceil(L * 12 / 16) + N` añade un montante por tramo; todavía no hay redondeo por tramo.
- Una fórmula solo puede usar las variables de su propia partida, no las de otra.
- Hasta 50 componentes por partida y 500 caracteres por fórmula.

## Quitar un componente

Elija {{ui:Quitar componente}} bajo él. Puede deshacerlo con {{key:Mod+Z}}.
