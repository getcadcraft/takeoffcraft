---
title: Traer una planilla de etiquetas como cantidades
summary: Una planilla de etiquetas exportada desde el modelo del edificio (CSV) se convierte en cantidades tipificadas en el cómputo, una por etiqueta, para que los conteos y superficies del modelo queden junto a lo que mediste.
keywords: etiquetas, planilla de etiquetas, modelo del edificio, bimcraft, ifc, cantidades, csv, planilla, importar, cantidad tipificada
from: a60c19b6
---

{{ui:Tags}} en la barra de herramientas trae una planilla de etiquetas que BimCraft guardó como archivo CSV. Cada etiqueta distinta se convierte en una cantidad tipificada, del mismo tipo que se generan el corte y relleno de CivilCraft.

1. En BimCraft, armá la planilla de etiquetas que querés y guardala como CSV.
2. Elegí {{ui:Tags}} y seleccioná el archivo.
3. Indicá qué columna nombra la línea ({{ui:Name the line by}}, normalmente la etiqueta) y cuál tiene el número ({{ui:Quantity from}}). Con {{ui:Count the rows}}, cada fila cuenta como una.
4. Elegí la unidad. Una longitud en milímetros pasa a metros con {{ui:Multiply by}} 0.001.
5. {{ui:Add the quantities}}.

Las filas con la misma etiqueta se suman. Una celda que no es un número se omite y se cuenta en el resumen. Si volvés a traer la misma planilla, se actualizan las cantidades que ya tenés en lugar de agregar más; sus nombres, tarifas y desperdicio siguen siendo tuyos.

## Good to know

Una cantidad tipificada no se mide sobre una hoja, así que no tiene marcas. Nada se envía a ningún lado; el archivo se lee acá.
