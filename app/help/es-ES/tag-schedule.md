---
title: Importar un cuadro de etiquetas como cantidades
summary: Un cuadro de etiquetas exportado desde el modelo del edificio (CSV) se convierte en cantidades tipificadas en la cuantificación, una por etiqueta, de modo que los recuentos y áreas del modelo quedan junto a lo que usted midió.
keywords: etiquetas, cuadro de etiquetas, modelo del edificio, bimcraft, ifc, cantidades, csv, cuadro, importar, cantidad tipificada
from: a60c19b6
---

{{ui:Etiquetas}} en la barra de herramientas importa un cuadro de etiquetas que BimCraft guardó como archivo CSV. Cada etiqueta distinta se convierte en una cantidad tipificada, del mismo tipo que resultan el desmonte y el terraplén de CivilCraft.

1. En BimCraft, prepare el cuadro de etiquetas que desee y guárdelo como CSV.
2. Elija {{ui:Etiquetas}} y seleccione el archivo.
3. Indique qué columna da nombre a la línea ({{ui:Nombrar la línea según}}, normalmente la etiqueta) y cuál contiene el número ({{ui:Cantidad de}}). Con {{ui:Contar las filas}}, cada fila cuenta como una.
4. Elija la unidad. Una longitud en milímetros pasa a metros con {{ui:Multiplicar por}} 0.001.
5. {{ui:Añadir las cantidades}}.

Las filas con la misma etiqueta se suman. Una celda que no es un número se omite y se cuenta en el resumen. Si vuelve a importar el mismo cuadro, se actualizan las cantidades que ya tiene en lugar de añadir más; sus nombres, tarifas y desperdicio se mantienen.

## Conviene saber

Una cantidad tipificada no se mide en una hoja, así que no tiene marcas. No se envía nada a ningún sitio; el archivo se lee aquí.
