---
title: Importar un cadro de etiquetas como cantidades
summary: Un cadro de etiquetas exportado do modelo do edificio (CSV) convértese en cantidades tipadas na medición, unha por etiqueta, para que os recontos e as superficies do modelo estean xunto ao que mediches.
keywords: etiquetas, cadro de etiquetas, modelo do edificio, bimcraft, ifc, cantidades, csv, cadro, importar, cantidade tipada
from: a60c19b6
---

{{ui:Etiquetas}} na barra de ferramentas importa un cadro de etiquetas que BimCraft gardou como ficheiro CSV. Cada etiqueta distinta convértese nunha cantidade tipada, do mesmo tipo en que se converten o desmonte e o recheo de CivilCraft.

1. En BimCraft, crea o cadro de etiquetas que queres e gárdao como CSV.
2. Escolle {{ui:Etiquetas}} e selecciona o ficheiro.
3. Indica que columna nomea a liña ({{ui:Nomear a liña por}}, normalmente a etiqueta) e cal contén o número ({{ui:Cantidade de}}). Con {{ui:Contar as filas}} cada fila conta como unha.
4. Escolle a unidade. Unha lonxitude en milímetros convértese en metros con {{ui:Multiplicar por}} 0.001.
5. {{ui:Engadir as cantidades}}.

As filas coa mesma etiqueta súmanse. Unha celda que non é un número déixase fóra e conta no resumo. Ao importar de novo o mesmo cadro, actualízanse as cantidades que xa tes en vez de engadir máis; os seus nomes, tarifas e desperdicio seguen sendo teus.

## Bo que saber

Unha cantidade tipada non se mide nunha folla, así que non ten marcas. Non se envía nada a ningún lado; o ficheiro lese aquí.
