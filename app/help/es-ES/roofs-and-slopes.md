---
title: Cubiertas y pendientes
summary: Dé a un área su pendiente para medir la superficie de la cubierta desde el plano, y mida los aleros, los bordes inclinados, las limatesas y las limahoyas a lo largo de su pendiente.
keywords: cubierta, pendiente, inclinación, factor de pendiente, elevación, recorrido, 6:12, borde inclinado, limatesa, limahoya, a dos aguas, cuadrados, área inclinada, longitud real, área en planta
from: 38225b60
---

Un plano de cubierta muestra cada faldón plano, visto desde arriba. La cubierta en sí es mayor: un plano al 6:12 tiene alrededor de un 12% más de superficie que su planta, y sus bordes inclinados son más largos de lo que parecen. Dé a la partida su inclinación y TakeoffCraft medirá a lo largo de la pendiente.

## Introducir una inclinación

Una inclinación es la elevación por cada 12 de recorrido, como en los símbolos de pendiente del plano de cubierta. Escríbala como `6:12`, `6/12` o simplemente `6`; también vale otro recorrido (`4:10` equivale a 4.8:12). Un ángulo funciona con el signo de grado: `26.57°`. En blanco o `0` es plana.

## Áreas de cubierta

1. Cree una partida de área para la cubrición, o abra la que ya tiene.
2. En sus ajustes, escriba la **Inclinación**, como `6:12`.
3. Dibuje el contorno de cada faldón en el plano con {{ui:Área}}, como de costumbre.

Cada faldón cuenta su área en planta multiplicada por el factor de pendiente: √(1 + (elevación ÷ 12)²), 1.118 al 6:12 y 1.414 al 12:12. Seleccione un faldón para ver su **Área** (sobre la pendiente), su **Área en planta** y el **Factor de pendiente**.

Faldones con otra inclinación: seleccione el faldón y escriba su propia **Inclinación** en su panel. Déjela en blanco para usar la de la partida. La vista 3D de comprobación, los conjuntos (`A` es el área inclinada), los costes y la exportación usan todos el área inclinada. Las deducciones sobre un faldón inclinado, como los tragaluces, se restan con la misma pendiente.

El perímetro (`P`) sigue siendo el perímetro en planta. Mida los aleros, los bordes inclinados, las limatesas y las limahoyas como recorridos (abajo).

## Bordes inclinados, limatesas y limahoyas

1. Cree una partida lineal, como «Borde inclinado» o «Limatesas».
2. Ajuste su **Pendiente** en **Borde inclinado** (un borde inclinado, como el de un faldón a dos aguas) o en **Limatesa o limahoya** (la línea donde se encuentran dos faldones), y escriba la **Inclinación** de los faldones de la cubierta.
3. Dibuje los recorridos en el plano con {{ui:Lineal}}.

Un borde inclinado cuenta su longitud en planta multiplicada por el factor de pendiente. Una limatesa o limahoya va a 45° sobre la planta entre dos faldones de la misma inclinación, así que su longitud real es su longitud en planta multiplicada por √(1 + (elevación ÷ 12)² ÷ 2): 1.061 al 6:12, 1.225 al 12:12.

Un solo recorrido puede combinar ambos. Selecciónelo: cada tramo de su panel tiene una lista de pendiente —**de la partida** (el ajuste de la partida), **Horizontal**, **Borde inclinado** o **Limatesa o limahoya**— y su longitud a lo largo de la pendiente. La **Inclinación** propia de un recorrido en su panel sustituye a la de la partida para todos sus tramos. El panel también muestra la **Longitud en planta**, y las etiquetas de la hoja muestran las longitudes a lo largo de la pendiente.

Las deducciones siguen funcionando: un tramo deducido no cuenta nada, esté inclinado o no.

:::note
Las limatesas y limahoyas suponen que ambos faldones tienen la misma inclinación. Para faldones de inclinaciones distintas, mida la limatesa por su longitud real en otro lugar, o dibújela como borde inclinado con una inclinación equivalente.
:::
