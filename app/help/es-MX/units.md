---
title: Unidades
summary: Las unidades en que puede reportar una partida, las unidades que usan sus variables de fórmula y cómo se combinan las imperiales y métricas.
keywords: unidades, lf, sf, sy, sq, yardas cuadradas, cuadros de techado, acres, hectáreas, metros, metros cuadrados, ea, cada uno, métrico, imperial, conversión, unidad predeterminada
from: b7bf0528
---

## Unidades de partida

| Tipo de partida | Unidad | Nombre |
|---|---|---|
| Lineal | LF | pies lineales (predeterminado) |
| Lineal | m | metros |
| Área | SF | pies cuadrados (predeterminado) |
| Área | SY | yardas cuadradas |
| Área | SQ | cuadros de techado (100 pies cuadrados) |
| Área | ac | acres |
| Área | m² | metros cuadrados |
| Área | ha | hectáreas |
| Conteo | EA | cada uno |

Cámbiela con {{ui:Unidad}} en el editor de partidas en cualquier momento, incluso después de medir; la cantidad se convierte de inmediato.

La lista de {{ui:Unidad}} muestra las unidades activadas en {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}}, y siempre la unidad propia de la partida. Una partida nueva empieza con la unidad de longitud o área marcada con estrella allí, cuando es una de las unidades de la partida; si no, en LF o SF. Vea [Unidades, valores escritos y listas de unidades](common:unit-lists).

## Unidades de las variables de fórmula

| Unidad de la partida | L, P, H | A |
|---|---|---|
| LF | pies | pies cuadrados (área de muro) |
| m | metros | metros cuadrados (área de muro) |
| SF | pies | pies cuadrados |
| SY | pies | yardas cuadradas |
| SQ | pies | cuadros |
| ac | pies | acres |
| m² | metros | metros cuadrados |
| ha | metros | hectáreas |

Para partidas en SY, `A` está en yardas cuadradas mientras `P` y `H` siguen en pies. Un volumen de una partida en SY es `A * 9 * H / 27` yardas cúbicas; usar SF para losas es más sencillo.

## Dónde las unidades están fijas

Algunas lecturas siempre usan pies:

- la lectura en vivo de la barra de estado mientras dibuja (pies-pulgadas, SF),
- **Marca seleccionada** (pies-pulgadas, LF y SF),
- el resultado de la comprobación (pies-pulgadas, con pies decimales y metros),
- las longitudes de segmentos y perímetros en la hoja Marks del libro de cálculo (pies-pulgadas).

Los totales de partidas, la tabla de {{ui:Cantidades}}, las fórmulas y la hoja Estimate usan la unidad propia de la partida.

## Escalas y unidades son independientes

La escala de una hoja indica qué tan grande es el dibujo; la unidad de una partida indica cómo reportarlo. Un dibujo métrico a `1:100` puede cuantificarse en LF, y un dibujo imperial en m². Calibrar acepta cualquier unidad: `24'-6"`, `7.5 m`, `7500 mm`.

## Precisión

TakeoffCraft mide exactamente a partir de los puntos en los que hace clic, incluidas las longitudes y áreas reales de arcos, y no redondea las cantidades. La visualización redondea las longitudes a 1/16 de pulgada y los decimales a dos posiciones. El dinero se redondea solo en los importes extendidos, al centavo.
