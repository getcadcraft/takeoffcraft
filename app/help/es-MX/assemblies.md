---
title: Conjuntos y fórmulas
summary: Agregue componentes a una partida y deje que las fórmulas conviertan su longitud, área o conteo en montantes, placas, láminas de tablaroca, concreto y herrajes, con un ejemplo trabajado de muro.
keywords: conjunto, componentes, fórmula, montantes, tablaroca, láminas, placas, concreto, yardas cúbicas, herrajes, receta, típico, partes de la partida
from: 12891a21
---

El **conjunto** de una partida es una lista de componentes; cada uno tiene su propia fórmula de cantidad y sus propios porcentajes de desperdicio y tarifas. La fórmula usa los totales medidos de la partida, así que una sola cuantificación de un muro le da montantes, placas y tablaroca a la vez, y se actualizan conforme mide.

## Variables que puede usar

| Tipo de partida | Variables |
|---|---|
| Lineal | `L` longitud, `H` altura, `A` área de muro (L × H), `N` número de tramos |
| Área | `A` área, `P` perímetro (contorno + recortes), `H` profundidad o espesor, `N` número de áreas |
| Conteo | `N` conteo |

Los valores están en las unidades propias de la partida: pies y pies cuadrados para las partidas en LF y SF, metros y metros cuadrados para las partidas en m y m². En una partida en SY, `A` está en yardas cuadradas, mientras que `P` y `H` siguen en pies.

Las fórmulas usan `+ - * /` (o × ÷), paréntesis, números y las funciones `ceil`, `floor`, `round`, `min`, `max` y `abs`. Las reglas completas están en [Lenguaje de fórmulas](topic:formulas).

## Ejemplo trabajado: un muro interior

Suponga que midió **Muro interior tipo A** como partida lineal: 4 tramos que suman 120 LF, con {{ui:Altura}} en `9'-0"`. Sus valores **medidos** son L = 120, N = 4, A = 1,080 (SF de muro, una cara).

1. Seleccione la partida bajo {{ui:Partidas}}.
2. En {{ui:Conjunto}}, elija {{ui:Agregar componente}}.
   Aparece un componente llamado "Componente", con la fórmula `L` y su resultado debajo.
3. Escriba `Studs 16 in o.c.` en {{ui:Nombre}} y `EA` en {{ui:Unidad}}.
4. En {{ui:Fórmula de cantidad}}, escriba `ceil(L * 12 / 16) + N`.
   El resultado se actualiza mientras escribe: "= 94 EA". Es un montante cada 16 pulgadas a lo largo de 120 pies (90), más uno extra para cerrar cada uno de los 4 tramos.
5. Elija {{ui:Agregar componente}} de nuevo para las placas: nombre `Plates, top and bottom`, unidad `LF`, fórmula `L * 2`. Resultado: 240 LF.
6. Agregue la tablaroca: nombre `Gypsum board 4x8, both sides`, unidad `sheets`, fórmula `ceil(A * 2 / 32)`. Resultado: 68 láminas (2,160 SF de tablaroca ÷ 32 SF por lámina = 67.5, redondeado hacia arriba).
7. Llene {{ui:Desperdicio %}}, {{ui:Material $}} y {{ui:Mano de obra $}} de cada componente.
   Cada componente tiene su propia fila bajo la partida en {{ui:Cantidades}}, con precio como una partida, y el {{ui:Total de la obra}} lo incluye.

Si el costo del muro está completo en los componentes, deje en 0 las tarifas de material y de mano de obra propias de la partida; de lo contrario se contará dos veces.

:::tip
El desperdicio se aplica después de la fórmula y no se redondea: 68 láminas con 10 % de desperdicio son 74.8 láminas. Para pedir láminas completas, ponga el desperdicio dentro de la fórmula, como `ceil(A * 2 / 32 * 1.1)`, y deje en 0 el desperdicio del componente.
:::

## Más fórmulas

| Qué | Partida | Fórmula |
|---|---|---|
| Montantes a 24 in entre ejes | Lineal | `ceil(L / 2) + N` |
| Mantas de aislamiento, SF | Lineal con altura | `A` |
| Pintura, ambas caras, galones a 350 SF | Lineal con altura | `ceil(A * 2 / 350)` |
| Cajas de azulejo a 15 SF, 10 % extra | Área | `ceil(A * 1.1 / 15)` |
| Zoclo o moldura de borde, LF | Área | `P` |
| Concreto, yardas cúbicas | Área con profundidad | `A * H / 27` |
| Concreto redondeado hacia arriba a un cuarto de yarda | Área con profundidad | `ceil(A * H / 27 * 4) / 4` |
| Bisagras, tres por puerta | Conteo | `N * 3` |
| Al menos una caja, una por cada 12 | Conteo | `max(1, ceil(N / 12))` |

## Cuando una fórmula está mal

La línea bajo la fórmula se convierte en un mensaje de error, por ejemplo `"X" is not a measured value here. Use L, H, A, N.` o `A ")" is missing.` El componente entonces no tiene importes, su fila en {{ui:Cantidades}} muestra "Error de fórmula: …", y el encabezado dice "Incompleto: 1 error de fórmula (no incluido en los totales)". Corrija la fórmula y los totales se actualizan.

Una fórmula que divide entre cero también es un error ("La fórmula divide entre cero."), por ejemplo `A / H` en una partida sin profundidad.

## Límites

- Las fórmulas se calculan sobre los **totales** de la partida, no tramo por tramo. `ceil(L * 12 / 16) + N` agrega un montante por tramo; todavía no hay redondeo por tramo.
- Una fórmula solo puede usar las variables de su propia partida, no las de otra.
- Hasta 50 componentes por partida y 500 caracteres por fórmula.

## Quitar un componente

Elija {{ui:Quitar componente}} bajo él. Puede deshacerlo con {{key:Mod+Z}}.
