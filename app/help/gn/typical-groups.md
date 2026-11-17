---
title: Grupos típicos
summary: Computá una unidad, ambiente o piso típico una vez y contalo tantas veces como se repite, cambiá el conteo después, y mirá qué marcas son típicas.
keywords: típico, grupo típico, repetir, cantidad de repeticiones, multiplicar, veces, unidad, habitación de hotel, departamento, piso típico, x24, copias
from: 42c3a372
---

Un edificio suele repetir: 24 habitaciones de hotel idénticas, 6 pisos típicos, 40 cocheras con la misma demarcación. Un **grupo típico** te permite computar una de ellas y contarla tantas veces como se repite, sin dibujar las copias.

## Crear un grupo típico

1. Computá una unidad: sus muros, su piso, sus tomas; cualquier ítem.
2. Seleccioná sus marcas con la herramienta {{ui:Select}}: hacé clic en una, luego {{key:Shift}} + clic en las otras ([Seleccionar las marcas](topic:copy-paste#select-the-marks)).
3. En **Marca seleccionada**, abrí {{ui:Typical}} y elegí {{ui:New typical group…}}.
4. Ponele un nombre (`Unit A`) y cuántas veces se repite (`24`), luego elegí {{ui:Make group}}.

Cada cantidad de esas marcas ahora cuenta 24 veces: un tramo de muro de 10 ft da 240 ft, un piso de 80 SF da 1,920 SF, dos tomas dan 48. Los costos se siguen, y las fórmulas de conjunto ven los totales repetidos (`N` también cuenta cada tramo 24 veces).

En la hoja, un recuadro punteado rodea las marcas del grupo con su nombre y conteo, como **Unit A ×24**.

## Cambiarlo después

Los grupos aparecen listados bajo **Grupos típicos** en el panel derecho:

- Cambiá el número después de **×** para cambiar cuántas veces cuenta (de 1 a 10,000). Todas las cantidades se actualizan.
- Renombralo en su casillero de nombre.
- El ícono de caja selecciona sus marcas (y muestra su hoja).
- El tacho elimina el grupo. Sus marcas quedan, contadas una vez.

Para agregar marcas a un grupo o sacarlas, seleccionalas y elegí el grupo (o {{ui:Not typical (×1)}}) bajo {{ui:Typical}}.

## Good to know

- Las marcas de un grupo pueden estar en varias hojas, y ser de cualquier ítem. Cada marca está en un solo grupo como máximo.
- Las copias que pegás no están en el grupo: una copia pegada de una unidad típica contaría 24 veces otra vez. Usá un grupo para "lo mismo N veces", y copiá y pegá para las copias que dibujás.
- Las marcas se dibujan una sola vez, así que la vista 3D y el PDF marcado muestran una unidad; las cantidades, las exportaciones y la tabla por hoja la cuentan ×N. La hoja **Marks** de la exportación a Excel indica qué marcas son típicas y cuántas veces cuentan.
- Con áreas de licitación, las marcas de un grupo cuentan ×N en su propia área de licitación.
