---
title: Techos e inclinaciones
summary: Asignarle una inclinación a un área para medir la superficie del techo desde el plano, y medir rakes, limatesas y limahoyas a lo largo de su pendiente.
keywords: techo, inclinación, pendiente, factor de pendiente, elevación, recorrido, 6:12, rake, limatesa, limahoya, frontón, techado, squares, superficie inclinada, longitud real, área en planta
from: 38225b60
---

Un plano de techo muestra cada plano del techo plano, visto desde arriba. El techo en sí es más grande: un plano de 6:12 tiene cerca de 12% más superficie que su planta, y sus bordes inclinados son más largos de lo que parecen. Asignale la inclinación al ítem y TakeoffCraft mide a lo largo de la pendiente.

## Escribir una inclinación

Una inclinación es la elevación por cada 12 de recorrido, como en los símbolos de pendiente del plano del techo. Escribila como `6:12`, `6/12` o solo `6`; también sirve otro recorrido (`4:10` es 4.8:12). Un ángulo funciona con el signo de grado: `26.57°`. Vacío o `0` es plano.

## Áreas de techo

1. Creá un ítem de área para el techado, o abrí el que ya tenés.
2. En su configuración, escribí la **Inclinación**, como `6:12`.
3. Delineá cada plano del techo en el plano con {{ui:Área}}, como de costumbre.

Cada plano cuenta su área en planta por el factor de pendiente: √(1 + (elevación ÷ 12)²), 1.118 en 6:12 y 1.414 en 12:12. Seleccioná un plano para ver su **Área** (en la pendiente), su **Área en planta** y el **Factor de pendiente**.

Planos con otra inclinación: seleccioná el plano y escribí su propia **Inclinación** en su panel. Dejala vacía para usar la del ítem. La vista de chequeo 3D, los conjuntos (`A` es el área en pendiente), los costos y la exportación usan todos el área en pendiente. Las deducciones en un plano inclinado, como los tragaluces, se restan con la misma pendiente.

El perímetro (`P`) queda como perímetro en planta. Medí aleros, rakes, limatesas y limahoyas como recorridos (abajo).

## Rakes, limatesas y limahoyas

1. Creá un ítem lineal, como "Rake" o "Limatesas".
2. Ponele a su **Pendiente** **Rake** (un borde inclinado, como el de un frontón) o **Limatesa o limahoya** (la línea donde se encuentran dos planos), y escribí la **Inclinación** de los planos del techo.
3. Dibujá los recorridos en el plano con {{ui:Lineal}}.

Un rake cuenta su longitud en planta por el factor de pendiente. Una limatesa o limahoya corre a 45° por el plano entre dos planos de la misma inclinación, así que su longitud real es su longitud en planta por √(1 + (elevación ÷ 12)² ÷ 2): 1.061 en 6:12, 1.225 en 12:12.

Un recorrido puede mezclar tipos. Seleccionalo: cada tramo en su panel tiene una lista de pendiente — **Del ítem** (la configuración del ítem), **Nivel**, **Rake** o **Limatesa o limahoya** — y su longitud a lo largo de la pendiente. La **Inclinación** propia del recorrido en el panel reemplaza la del ítem para todos sus tramos. El panel también muestra la **Longitud en planta**, y las etiquetas en la hoja muestran las longitudes a lo largo de la pendiente.

Las deducciones siguen funcionando: un tramo deducido no cuenta nada, esté inclinado o no.

:::note
Las limatesas y limahoyas suponen que ambos planos tienen la misma inclinación. Para planos con inclinaciones distintas, medí la limatesa por su longitud real por otro medio, o dibujala como rake con una inclinación equivalente.
:::
