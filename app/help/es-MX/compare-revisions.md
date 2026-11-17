---
title: Comparar una hoja revisada y mover la cuantificación
summary: Superponga la hoja anterior sobre su revisión, alinéelas, vea qué cambió y mueva la cuantificación a la hoja nueva con las marcas por comprobar señaladas.
keywords: revisión, revisado, comparar, superponer, anterior, nuevo, cambios, adenda, boletín, reemisión, mover cuantificación, transferir, trasladar, alinear, señalado, comprobar
from: 3a1d9fe0
---

Cuando se reemite una hoja, no tiene que volver a cuantificarla. Abra el PDF anterior y el nuevo, compare las dos hojas y mueva la cuantificación de una a otra. TakeoffCraft señala cada marca donde el dibujo cambió, para que usted revise esas y conserve el resto.

## Comparar

1. Abra ambos PDF: el juego anterior y el revisado ({{ui:Abrir planos}}; pueden estar en un solo archivo o en varios).
2. Muestre la hoja **nueva**.
3. Elija {{ui:Comparar}} en la barra de la hoja, debajo del dibujo.
4. Seleccione la hoja anterior en la lista. TakeoffCraft sugiere la hoja con el mismo número en el otro PDF, o la misma página. Elija **Comparar**.

El dibujo anterior queda ahora sobre el nuevo, en rojo. Donde coinciden, las líneas rojas quedan sobre las negras; donde difieren, ve líneas rojas solas (eliminadas) y líneas negras solas (agregadas). Una barra en la parte inferior de la hoja contiene los pasos siguientes; {{key:Esc}} o {{ui:Cerrar}} termina la comparación.

## Alinearlas

Las hojas reemitidas suelen trazarse un poco desfasadas: movidas en la página o con un tamaño ligeramente distinto. Si el dibujo rojo no coincide con el negro, elija **Alinear por dos puntos** y haga clic cuatro veces:

1. un punto del dibujo anterior (rojo), como el centro de una columna o una esquina del edificio,
2. el mismo punto en el dibujo nuevo (negro),
3. un segundo punto en el dibujo rojo, lejos del primero,
4. el mismo punto en el dibujo negro.

El dibujo rojo se mueve, gira y escala sobre el negro. La barra de estado indica cuánto más grande es el dibujo nuevo ("tamaño × 1.000" cuando es igual). Acerque el zoom para hacer las selecciones: cuanto más cerca haga clic, mejor será el ajuste.

## Encontrar lo que cambió

Elija **Buscar cambios**. TakeoffCraft compara la tinta de los dos dibujos: la tinta solo presente en la hoja anterior se vuelve roja, la tinta solo presente en la hoja nueva se vuelve azul, y la barra de estado las cuenta. Las líneas que se movieron un poco (un retrazado) no se cuentan como cambios.

También revisa cada marca de la hoja anterior y cuenta las que están donde cambió el dibujo:

- un tramo o un área cuando el dibujo cambió en uno de sus extremos o esquinas, o a lo largo de al menos una sexta parte de su longitud;
- un conteo cuando algo cambió justo al lado.

## Mover la cuantificación

Elija **Mover la cuantificación aquí**. Cada marca de la hoja anterior se mueve a la nueva, a través de la alineación, en un solo paso para deshacer. Las que están junto a un cambio se señalan: se dibujan con un halo naranja, y la barra de la hoja muestra "(n) por comprobar".

Si la hoja nueva no tenía escala, toma la escala de la hoja anterior (ajustada cuando los dibujos tuvieron que escalarse para alinearse). Si ya tenía una escala distinta, TakeoffCraft pregunta primero: las marcas movidas se miden con la escala de la hoja nueva.

## Compruebe las marcas señaladas

1. Elija "(n) por comprobar" en la barra de la hoja. Hace zoom a la siguiente marca señalada y la selecciona; su panel indica por qué está señalada.
2. Corrija la marca si el dibujo cambió debajo (arrastre sus esquinas, agregue o elimine marcas, o vuelva a cuantificarla).
3. Elija **Comprobado** en su panel. La señal desaparece y el conteo de la barra de la hoja baja.

Las señales se guardan con la cuantificación, para que pueda comprobarlas más tarde.

:::note
Comparar funciona tanto con PDF vectoriales como con escaneos, porque compara lo que está dibujado. Un escaneo torcido o estirado puede alinearse solo de forma aproximada con dos puntos; en ese caso compruebe más marcas a simple vista.
:::
