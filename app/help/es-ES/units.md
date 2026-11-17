---
title: Unidades
summary: Las unidades en que puede informar una partida, las que usan las variables de sus fórmulas, y cómo se combinan el sistema imperial y el métrico.
keywords: unidades, lf, sf, sy, sq, yardas cuadradas, cuadros de cubierta, acres, hectáreas, metros, metros cuadrados, ea, cada una, métrico, imperial, conversión, unidad predeterminada
from: b7bf0528
---

## Unidades de partida

| Tipo de partida | Unidad | Nombre |
|---|---|---|
| Lineal | LF | pies lineales (por defecto) |
| Lineal | m | metros |
| Área | SF | pies cuadrados (por defecto) |
| Área | SY | yardas cuadradas |
| Área | SQ | cuadros de cubierta (100 pies cuadrados) |
| Área | ac | acres |
| Área | m² | metros cuadrados |
| Área | ha | hectáreas |
| Recuento | EA | cada una |

Cámbiela con {{ui:Unidad}} en el editor de partidas en cualquier momento, incluso después de medir; la cantidad se convierte al instante.

La lista de {{ui:Unidad}} muestra las unidades activadas en {{ui:Ajustes}} › {{ui:General}} › {{ui:Unidades}}, y siempre la propia unidad de la partida. Una partida nueva empieza con la unidad de longitud o de área marcada con estrella allí, si es una de las unidades de la partida; si no, en LF o SF. Véase [Unidades, valores escritos y las listas de unidades](common:unit-lists).

## Unidades de las variables de fórmula

| Unidad de partida | L, P, H | A |
|---|---|---|
| LF | pies | pies cuadrados (área de muro) |
| m | metros | metros cuadrados (área de muro) |
| SF | pies | pies cuadrados |
| SY | pies | yardas cuadradas |
| SQ | pies | cuadros |
| ac | pies | acres |
| m² | metros | metros cuadrados |
| ha | metros | hectáreas |

En las partidas en SY, `A` está en yardas cuadradas mientras que `P` y `H` siguen en pies. Un volumen de una partida en SY es `A * 9 * H / 27` yardas cúbicas; para losas es más sencillo usar SF.

## Dónde están fijadas las unidades

Algunas lecturas usan siempre pies:

- la lectura en directo de la barra de estado mientras dibuja (pies-pulgadas, SF),
- **Marca seleccionada** (pies-pulgadas, LF y SF),
- el resultado de la comprobación (pies-pulgadas, con pies decimales y metros),
- las longitudes de segmento y los perímetros en la hoja Marcas de la hoja de cálculo (pies-pulgadas).

Los totales de partida, la tabla de {{ui:Cantidades}}, las fórmulas y la hoja de Presupuesto usan la unidad propia de la partida.

## Escalas y unidades son independientes

La escala de una hoja indica el tamaño del dibujo; la unidad de una partida indica cómo informar de él. Un plano métrico a `1:100` puede cuantificarse en LF, y uno imperial en m². Calibrar acepta cualquier unidad: `24'-6"`, `7.5 m`, `7500 mm`.

## Precisión

TakeoffCraft mide con exactitud a partir de los puntos en los que hace clic, incluidas las longitudes y áreas reales de los arcos, y no redondea las cantidades. La visualización redondea las longitudes a 1/16 de pulgada y los decimales a dos cifras. El dinero solo se redondea en los importes totales, al céntimo.
