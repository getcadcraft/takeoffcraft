---
title: Traer una tabla de etiquetas como cantidades
summary: Una tabla de etiquetas exportada desde el modelo del edificio (CSV) se convierte en cantidades de tipo en la cuantificación, una por etiqueta, para que los conteos y áreas del modelo queden junto a lo que midió.
keywords: etiquetas, tabla de etiquetas, modelo del edificio, bimcraft, ifc, cantidades, csv, tabla, importar, cantidad de tipo
from: a60c19b6
---

{{ui:Etiquetas}} en la barra de herramientas trae una tabla de etiquetas que BimCraft guardó como archivo CSV. Cada etiqueta distinta se convierte en una cantidad de tipo, del mismo tipo que se obtienen con el corte y relleno de CivilCraft.

1. En BimCraft, cree la tabla de etiquetas que desee y guárdela como CSV.
2. Elija {{ui:Etiquetas}} y seleccione el archivo.
3. Indique qué columna da nombre a la línea ({{ui:Nombrar la línea por}}, normalmente la etiqueta) y cuál contiene el número ({{ui:Cantidad de}}). Con {{ui:Contar las filas}}, cada fila cuenta como una.
4. Elija la unidad. Una longitud en milímetros se convierte en metros con {{ui:Multiplicar por}} 0.001.
5. {{ui:Agregar las cantidades}}.

Las filas con la misma etiqueta se suman. Una celda que no es un número se omite y se cuenta en el resumen. Si vuelve a traer la misma tabla, se actualizan las cantidades que ya tiene en lugar de agregar más; sus nombres, tarifas y desperdicio se conservan.

## Conviene saber

Una cantidad de tipo no se mide en una hoja, así que no tiene marcas. Nada se envía a ningún lugar; el archivo se lee aquí.
