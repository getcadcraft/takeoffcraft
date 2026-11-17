---
title: Áreas de licitación
summary: Etiquete las marcas por edificio, planta o fase, mida en un área cada vez y lea las cantidades y los costes de cada área.
keywords: añadir alternativa, deducir alternativa, oferta base, alternativas, área de licitación, área, edificio, planta, nivel, fase, zona, desglose, dividir, planta típica, subtotal, por área
from: 64f3d41c
---

Un área de licitación es una parte de la obra que se valora por separado: un edificio, una planta, una fase, un ala. Cada marca puede estar en un área de licitación. Las cantidades y el presupuesto pueden leerse entonces por área, con un subtotal para cada una, mientras que el total de la obra sigue siendo la suma de todo.

## Crear un área de licitación

1. En la parte superior del panel {{ui:Partidas}}, abra la lista {{ui:Área de licitación}}.
2. Elija **Nueva área de licitación…**, escriba un nombre como "Edificio A" o "Nivel 2", y elija **Crear**.
   El área nueva pasa a ser la actual. La barra de estado dice "Las marcas nuevas irán en (nombre). Las marcas de otras áreas de licitación aparecen atenuadas."

## Medir en un área

Mientras un área de licitación esté elegida en la lista, cada marca nueva irá en ella: tramos, superficies, círculos, recuentos, las marcas que añade {{ui:Autorrecuento}} y lo que pegue. Las marcas de otras áreas de licitación, y las que no tienen ninguna, aparecen atenuadas en la hoja para que vea qué pertenece a cada sitio.

Elija **Sin área de licitación** en la lista para medir sin ninguna; entonces no se atenúa nada.

:::tip
Plantas típicas: mida el Nivel 2, seleccione sus marcas ({{key:Mod+A}} en la hoja), cópielas, elija Nivel 3 en la lista y péguelas. Las copias irán en el Nivel 3. Cuando las plantas sean iguales y no necesite separarlas, un [grupo típico](topic:typical-groups) cuenta una planta varias veces.
:::

## Mover marcas a otra área

Seleccione una marca o varias ({{key:Shift}} + clic, o {{key:Mod+A}}). En **Marca seleccionada** (o **Marcas seleccionadas**), elija el área en el campo {{ui:Área de licitación}}. La barra de estado dice "3 marcas movidas a Nivel 2." Es un solo paso de deshacer.

## Renombrar, reordenar o eliminar

Elija **Gestionar áreas de licitación…** en la lista. Escriba sobre un nombre para cambiarlo, use las flechas para cambiar el orden (las tablas y el libro lo siguen), o elimine una con el icono de papelera. Eliminar un área de licitación conserva sus marcas: quedan entonces sin área. {{key:Mod+Z}} deshace cada cambio.

## Leer las cantidades por área

En la tabla {{ui:Cantidades}}, elija {{ui:Por área}} (aparece cuando la medición tiene un área de licitación). Cada área enumera las partidas que contiene, con su cantidad, unidad y total, y después una fila de subtotal. Las marcas sin área de licitación van al final, como **Sin área de licitación**. Haga clic en una fila de partida para resaltarla y hacer de esa área la actual.

Los conjuntos se calculan para cada área a partir de los totales propios de esa área. Una fórmula que redondea hacia arriba, como `ceil(L / 4)`, puede dar entonces un poco más sumando las áreas que para la obra completa, como ocurriría en una oferta valorada área por área.

## Alternativas: oferta base más adiciones y deducciones

Un área de licitación puede ser una **alternativa**: un trabajo que el propietario puede añadir a la oferta, o quitar de ella. En **Gestionar áreas de licitación…**, cada área tiene una lista junto a su nombre:

| Opción | Qué hace |
|---|---|
| {{ui:Oferta base}} | En la oferta, como de costumbre. |
| {{ui:Alternativa a añadir}} | Se valora por separado y se **deja fuera de la oferta base**: una mejora de moqueta, una marquesina extra. |
| {{ui:Alternativa a deducir}} | En la oferta base, y se ofrece como deducción: "eliminar la marquesina". |

Mida el trabajo de una alternativa en su área de licitación como cualquier otra área. Una vez que la medición tiene una alternativa:

- El encabezado de la tabla {{ui:Cantidades}} dice **Oferta base** en lugar de Total de la obra: toda la medición sin las alternativas de adición.
- {{ui:Por área}} termina con la oferta base y una fila por alternativa: **+$300.00** para una adición, **−$1,050.00** para una deducción.
- Una alternativa valora solo las partidas que tienen marcas en ella, con sus conjuntos, para que una parte de conjunto de otra partida no se cuele.

En las exportaciones, el CSV termina con la oferta base y las alternativas, y el libro tiene una hoja **Alternativas**: la oferta base, las partidas de cada alternativa y su variación, y la oferta base sin ninguna alternativa de adición.

## En la exportación

{{ui:XLSX}} añade una hoja **Por área de licitación**: las partidas y componentes de cada área con cantidad, cantidad con desperdicio, material, mano de obra y total, un subtotal por área (una fórmula `SUM`) y **Todas las áreas de licitación** al final. La hoja **Marcas** tiene una columna **Área de licitación**. Una medición sin áreas se exporta como antes. Consulte [Columnas de exportación](topic:export-columns).

Las áreas de licitación se guardan en el archivo del proyecto junto con las marcas.
