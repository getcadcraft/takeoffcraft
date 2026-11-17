---
title: Comparar una hoja revisada y trasladar la medición
summary: Superponga la hoja antigua a su revisión, alinéelas, vea qué ha cambiado y traslade la medición a la hoja nueva con las marcas a revisar señaladas.
keywords: revisión, revisado, comparar, superposición, antiguo, nuevo, cambios, adenda, boletín, reemisión, trasladar medición, transferir, llevar, alinear, señalado, comprobar
from: 3a1d9fe0
---

Cuando una hoja se vuelve a emitir, no tiene que volver a medirla. Abra el PDF antiguo y el nuevo, compare las dos hojas y traslade la medición. TakeoffCraft señala cada marca donde el dibujo ha cambiado; usted revisa esas y conserva el resto.

## Comparar

1. Abra los dos PDF: el juego antiguo y el revisado ({{ui:Abrir PDF}}; pueden estar en un archivo o en varios).
2. Muestre la hoja **nueva**.
3. Elija {{ui:Comparar}} en la barra de la hoja, bajo el dibujo.
4. Elija la hoja antigua en la lista. TakeoffCraft sugiere la hoja con el mismo número en el otro PDF, o la misma página. Elija **Comparar**.

El dibujo antiguo se superpone ahora al nuevo en rojo. Donde coinciden, las líneas rojas quedan sobre las negras; donde difieren, ve solo líneas rojas (eliminadas) y solo líneas negras (añadidas). Una barra en la parte inferior de la hoja contiene los pasos siguientes; {{key:Esc}} o {{ui:Cerrar}} termina la comparación.

## Alinearlas

Las hojas revisadas suelen trazarse un poco desplazadas: movidas en la página, o a un tamaño ligeramente distinto. Si el dibujo rojo no coincide con el negro, elija **Alinear por dos puntos** y haga clic cuatro veces:

1. un punto del dibujo antiguo (rojo), como el centro de un pilar o una esquina del edificio,
2. el mismo punto en el dibujo nuevo (negro),
3. un segundo punto del dibujo rojo, lejos del primero,
4. el mismo punto en el dibujo negro.

El dibujo rojo se mueve, gira y escala sobre el negro. La barra de estado indica cuánto más grande es el dibujo nuevo («tamaño × 1.000» cuando es el mismo). Acerque el zoom para las selecciones: cuanto más cerca haga clic, mejor será el ajuste.

## Buscar qué ha cambiado

Elija **Buscar cambios**. TakeoffCraft compara la tinta de los dos dibujos: la tinta solo de la hoja antigua pasa a rojo, la tinta solo de la hoja nueva pasa a azul, y la barra de estado las cuenta. Las líneas que se han movido un pelo (un retrazado) no se cuentan como cambios.

También examina cada marca de la hoja antigua y cuenta las que están donde el dibujo ha cambiado:

- un tramo o un área cuando el dibujo ha cambiado en uno de sus extremos o esquinas, o a lo largo de al menos una sexta parte de su longitud;
- un recuento cuando algo ha cambiado justo al lado.

## Trasladar la medición

Elija **Mover medición aquí**. Cada marca de la hoja antigua se traslada a la nueva, a través de la alineación, en un solo paso de deshacer. Las que están junto a un cambio quedan señaladas: se dibujan con un halo naranja, y la barra de la hoja muestra «(n) por revisar».

Si la hoja nueva no tenía escala, toma la escala de la hoja antigua (ajustada cuando los dibujos hubo que escalarlos para alinearlos). Si ya tenía otra escala distinta, TakeoffCraft pregunta primero: las marcas trasladadas se miden a la escala de la hoja nueva.

## Revisar las marcas señaladas

1. Elija «(n) por revisar» en la barra de la hoja. Hace zoom a la siguiente marca señalada y la selecciona; su panel indica por qué está señalada.
2. Corrija la marca si el dibujo ha cambiado debajo (arrastre sus esquinas, añada o borre marcas, o quítela de nuevo).
3. Elija **Revisada** en su panel. La señal desaparece y baja el recuento de la barra de la hoja.

Las señales se guardan con la medición, así que puede revisarlas más tarde.

:::note
Comparar funciona igual con PDF vectoriales que con escaneos, porque compara lo que está dibujado. Un escaneo torcido o estirado puede alinearse solo de forma aproximada con dos puntos; en ese caso, revise más marcas a ojo.
:::
