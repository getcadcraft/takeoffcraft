---
title: Grupos típicos
summary: Cuantifique una vez una unidad, habitación o piso típico y cuéntelo tantas veces como se repita, cambie el conteo después y vea qué marcas son típicas.
keywords: típico, grupo típico, repetir, conteo de repetición, multiplicar, veces, unidad, habitación de hotel, departamento, piso típico, x24, copias
from: 42c3a372
---

Un edificio suele repetir: 24 habitaciones de hotel idénticas, 6 pisos típicos, 40 cajones de estacionamiento con el mismo pintado. Un **grupo típico** le permite cuantificar una de ellas y contarla tantas veces como se repita, sin dibujar las copias.

## Crear un grupo típico

1. Cuantifique una unidad: sus muros, su piso, sus contactos — cualquier partida.
2. Seleccione sus marcas con la herramienta {{ui:Seleccionar}}: haga clic en una, luego {{key:Shift}} + clic en las demás ([Seleccione las marcas](topic:copy-paste#select-the-marks)).
3. Bajo **Marca seleccionada**, abra {{ui:Típico}} y elija {{ui:Nuevo grupo típico…}}.
4. Asígnele un nombre (`Unidad A`) y cuántas veces se repite (`24`), luego elija {{ui:Crear grupo}}.

Cada cantidad de esas marcas ahora cuenta 24 veces: un tramo de muro de 10 ft da 240 ft, un piso de 80 SF da 1,920 SF, dos contactos dan 48. Los costos siguen, y las fórmulas de conjunto ven los totales repetidos (`N` también cuenta cada tramo 24 veces).

En la hoja, un recuadro punteado rodea las marcas del grupo con su nombre y conteo, como **Unidad A ×24**.

## Cámbielo después

Los grupos aparecen bajo **Grupos típicos** en el panel derecho:

- Cambie el número después de **×** para cambiar cuántas veces cuenta (de 1 a 10,000). Todas las cantidades se actualizan.
- Cámbiele el nombre en su campo de nombre.
- El icono de recuadro selecciona sus marcas (y muestra su hoja).
- El bote de basura elimina el grupo. Sus marcas se quedan, contadas una vez.

Para agregar marcas a un grupo o quitarlas, selecciónelas y elija el grupo (o {{ui:No típico (×1)}}) bajo {{ui:Típico}}.

## Conviene saber

- Las marcas de un grupo pueden estar en varias hojas y ser de cualquier partida. Cada marca está en un grupo como máximo.
- Las copias que pegue no están en el grupo: de otro modo una copia pegada de una unidad típica contaría 24 veces de nuevo. Use un grupo para "lo mismo N veces", y copiar y pegar para las copias que dibuje.
- Las marcas se dibujan una vez, así que la vista 3D y el PDF marcado muestran una unidad; las cantidades, las exportaciones y la tabla por hoja la cuentan ×N. La hoja **Marks** de la exportación a Excel indica qué marcas son típicas y cuántas veces cuentan.
- Con áreas de licitación, las marcas de un grupo cuentan ×N en su propia área de licitación.
