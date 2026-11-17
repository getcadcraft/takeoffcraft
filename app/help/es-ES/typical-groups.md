---
title: Grupos típicos
summary: Cuantifique una vez una unidad, sala o planta típica y cuéntela tantas veces como se repita, cambie el recuento después y vea qué marcas son típicas.
keywords: típico, grupo típico, repetición, número de repeticiones, multiplicar, veces, unidad, habitación de hotel, apartamento, planta típica, x24, copias
from: 42c3a372
---

Un edificio suele repetir elementos: 24 habitaciones de hotel idénticas, 6 plantas típicas, 40 plazas de aparcamiento con el mismo pintado. Un **grupo típico** le permite cuantificar una de ellas y contarla tantas veces como se repite, sin dibujar las copias.

## Crear un grupo típico

1. Cuantifique una unidad: sus muros, su suelo, sus tomas de corriente — cualquier partida.
2. Seleccione sus marcas con la herramienta {{ui:Seleccionar}}: haga clic en una y después {{key:Shift}} + clic en las demás ([Seleccionar las marcas](topic:copy-paste#select-the-marks)).
3. En **Marca seleccionada**, abra {{ui:Típico}} y elija {{ui:Nuevo grupo típico…}}.
4. Indique un nombre (`Unit A`) y cuántas veces se repite (`24`), y después elija {{ui:Crear grupo}}.

Ahora cada cantidad de esas marcas cuenta 24 veces: un tramo de muro de 10 ft da 240 ft, un suelo de 80 SF da 1,920 SF, dos tomas dan 48. Los costes se actualizan, y las fórmulas de los ensamblajes ven los totales repetidos (`N` también cuenta cada tramo 24 veces).

En la hoja, un recuadro discontinuo rodea las marcas del grupo con su nombre y su recuento, como **Unit A ×24**.

## Cambiarlo después

Los grupos aparecen en **Grupos típicos** en el panel derecho:

- Cambie el número tras **×** para modificar cuántas veces cuenta (de 1 a 10,000). Todas las cantidades se actualizan.
- Renómbrelo en su cuadro de nombre.
- El icono de recuadro selecciona sus marcas (y muestra su hoja).
- La papelera elimina el grupo. Sus marcas se mantienen, contadas una vez.

Para añadir marcas a un grupo o quitarlas, selecciónelas y elija el grupo (o {{ui:No típica (×1)}}) bajo {{ui:Típico}}.

## Conviene saber

- Las marcas de un grupo pueden estar en varias hojas y ser de cualquier partida. Cada marca pertenece como máximo a un grupo.
- Las copias que pegue no están en el grupo: una copia pegada de una unidad típica contaría otra vez 24 veces. Use un grupo para «lo mismo N veces», y copiar y pegar para las copias que dibuje.
- Las marcas se dibujan una sola vez, así que la vista 3D y el PDF anotado muestran una unidad; las cantidades, las exportaciones y la tabla por hoja la cuentan ×N. La hoja **Marcas** de la exportación a Excel indica qué marcas son típicas y cuántas veces cuentan.
- Con áreas de licitación, las marcas de un grupo cuentan ×N en su propia área de licitación.
