---
title: Techos y pendientes
summary: Asigne a un área su pendiente para medir la superficie del techo a partir del plano, y mida los rake, las limatesas y las limahoyas siguiendo su inclinación.
keywords: techo, pendiente, inclinación, factor de pendiente, elevación, proyección, 6:12, rake, limatesa, limahoya, gablete, techumbre, squares, área inclinada, longitud real, área en planta
from: 38225b60
---

Un plano de techo muestra cada faldón plano, tal como se ve desde arriba. El techo real es más grande: un faldón a 6:12 tiene cerca de 12% más superficie que su planta, y sus bordes inclinados son más largos de lo que parecen. Asigne a la partida su pendiente y TakeoffCraft medirá a lo largo de la inclinación.

## Escribir una pendiente

Una pendiente es la elevación por cada 12 de proyección, como en los símbolos de pendiente del plano de techo. Escríbala como `6:12`, `6/12` o solo `6`; también funciona otra proyección (`4:10` equivale a 4.8:12). Un ángulo funciona con el signo de grado: `26.57°`. En blanco o `0` significa plano.

## Áreas de techo

1. Cree una partida de área para el techado, o abra la que ya tiene.
2. En su configuración, escriba la **Pendiente**, por ejemplo `6:12`.
3. Trace el contorno de cada faldón en el plano con {{ui:Area}}, como de costumbre.

Cada faldón cuenta su área en planta multiplicada por el factor de pendiente: √(1 + (elevación ÷ 12)²), 1.118 a 6:12 y 1.414 a 12:12. Seleccione un faldón para ver su **Área** (sobre la inclinación), su **Área en planta** y el **Factor de pendiente**.

Faldones con otra pendiente: seleccione el faldón y escriba su propia **Pendiente** en su panel. Déjela en blanco para usar la de la partida. La vista de comprobación 3D, los conjuntos (`A` es el área inclinada), los costos y la exportación usan todos el área inclinada. Las deducciones en un faldón con pendiente, como los tragaluces, se descuentan con la misma inclinación.

El perímetro (`P`) sigue siendo el perímetro en planta. Mida los aleros, los rake, las limatesas y las limahoyas como tramos (abajo).

## Rake, limatesas y limahoyas

1. Cree una partida lineal, como "Borde rake" o "Limatesas".
2. Ponga su **Inclinación** en **Rake** (un borde inclinado, como el de un gablete) o en **Limatesa o limahoya** (la línea donde se encuentran dos faldones), y escriba la **Pendiente** de los faldones.
3. Dibuje los tramos en el plano con {{ui:Linear}}.

Un rake cuenta su longitud en planta multiplicada por el factor de pendiente. Una limatesa o limahoya corre a 45° sobre el plano entre dos faldones de la misma pendiente, así que su longitud real es su longitud en planta multiplicada por √(1 + (elevación ÷ 12)² ÷ 2): 1.061 a 6:12 y 1.225 a 12:12.

Un tramo puede combinar ambos casos. Selecciónelo: cada segmento de su panel tiene una lista de inclinación — **De la partida** (la configuración de la partida), **Plano**, **Rake** o **Limatesa o limahoya** — y su longitud a lo largo de la inclinación. La **Pendiente** del tramo en su panel reemplaza la de la partida para todos sus segmentos. El panel también muestra la **Longitud en planta**, y las etiquetas de la hoja muestran las longitudes a lo largo de la inclinación.

Las deducciones siguen funcionando: un segmento deducido no cuenta nada, tenga inclinación o no.

:::note
Las limatesas y limahoyas suponen que ambos faldones tienen la misma pendiente. Para faldones de pendientes distintas, mida la limatesa por su longitud real en otra parte, o dibújela como rake con una pendiente equivalente.
:::
