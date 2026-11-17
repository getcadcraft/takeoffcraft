---
title: Unidades
summary: Las unidades en que puede informar un ítem, las unidades de sus variables de fórmula, y cómo se mezclan el sistema imperial y el métrico.
keywords: unidades, lf, sf, sy, sq, yardas cuadradas, cuadros de techado, acres, hectáreas, metros, metros cuadrados, ea, cada uno, métrico, imperial, conversión, unidad predeterminada
from: b7bf0528
---

## Unidades de ítem

| Tipo de ítem | Unidad | Nombre |
|---|---|---|
| Lineal | LF | pies lineales (predeterminada) |
| Lineal | m | metros |
| Área | SF | pies cuadrados (predeterminada) |
| Área | SY | yardas cuadradas |
| Área | SQ | cuadros de techado (100 pies cuadrados) |
| Área | ac | acres |
| Área | m² | metros cuadrados |
| Área | ha | hectáreas |
| Conteo | EA | cada uno |

Cambiala con {{ui:Unit}} en el editor de ítems en cualquier momento, incluso después de medir; la cantidad se convierte de inmediato.

La lista {{ui:Unit}} muestra las unidades activadas en {{ui:Settings}} › {{ui:General}} › {{ui:Units}}, y siempre la propia unidad del ítem. Un ítem nuevo empieza en la unidad de longitud o de área marcada allí con estrella, cuando es una de las unidades del ítem; si no, en LF o SF. Ver [Unidades, valores escritos y listas de unidades](common:unit-lists).

## Unidades de las variables de fórmula

| Unidad del ítem | L, P, H | A |
|---|---|---|
| LF | pies | pies cuadrados (superficie de muro) |
| m | metros | metros cuadrados (superficie de muro) |
| SF | pies | pies cuadrados |
| SY | pies | yardas cuadradas |
| SQ | pies | cuadros |
| ac | pies | acres |
| m² | metros | metros cuadrados |
| ha | metros | hectáreas |

Para los ítems SY, `A` está en yardas cuadradas mientras `P` y `H` quedan en pies. Un volumen de un ítem SY es `A * 9 * H / 27` yardas cúbicas; usar SF para losas es más simple.

## Dónde las unidades están fijas

Algunas lecturas siempre usan pies:

- la lectura en vivo de la barra de estado mientras dibujás (pies-pulgadas, SF),
- **Marca seleccionada** (pies-pulgadas, LF y SF),
- el resultado de la verificación (pies-pulgadas, con pies decimales y metros),
- longitudes de segmento y perímetros en la hoja Marks de la planilla (pies-pulgadas).

Los totales de ítems, la tabla {{ui:Quantities}}, las fórmulas y la hoja Estimate usan la propia unidad del ítem.

## La escala y las unidades son independientes

La escala de una hoja indica qué tan grande es el dibujo; la unidad de un ítem indica cómo informarlo. Un plano métrico a `1:100` puede computarse en LF, y un plano imperial en m². Calibrar acepta cualquier unidad: `24'-6"`, `7.5 m`, `7500 mm`.

## Precisión

TakeoffCraft mide exactamente desde los puntos que hacés clic, incluidas las longitudes y áreas reales de arcos, y no redondea las cantidades. La visualización redondea las longitudes a 1/16 de pulgada y los decimales a dos lugares. El dinero se redondea solo en los importes extendidos, al centavo.
