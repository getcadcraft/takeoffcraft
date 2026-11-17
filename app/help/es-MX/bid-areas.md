---
title: Áreas de licitación
summary: Marque las marcas por edificio, piso o fase, cuantifique en una área a la vez y lea las cantidades y costos de cada área.
keywords: alternativa aditiva, alternativa deductiva, propuesta base, alternativas, área de licitación, área, edificio, piso, nivel, fase, zona, alternativa, desglose, dividir, piso típico, subtotal, por área
from: 64f3d41c
---

Un área de licitación es una parte de la obra que se presupuesta por separado: un edificio, un piso, una fase, un ala. Cada marca puede estar en una área de licitación. Las cantidades y el presupuesto se pueden leer por cada área, con un subtotal para cada una, mientras que el total de la obra sigue siendo la suma de todo.

## Crear un área de licitación

1. En la parte superior del panel {{ui:Partidas}}, abra la lista {{ui:Área de licitación}}.
2. Elija **Nueva área de licitación…**, escriba un nombre como "Edificio A" o "Nivel 2", y elija **Crearla**.
   La nueva área se vuelve la actual. La barra de estado dice "Las nuevas marcas van en (nombre). Las marcas de otras áreas de licitación se atenúan."

## Cuantificar en un área

Mientras un área de licitación esté elegida en la lista, cada marca nueva va en ella: tramos, áreas, círculos, conteos, las marcas que agrega {{ui:Conteo automático}} y lo que pegue. Las marcas de otras áreas, y las de ninguna, se atenúan en la hoja para que vea qué pertenece a dónde.

Elija **Sin área de licitación** en la lista para cuantificar sin una; entonces no se atenúa nada.

:::tip
Pisos típicos: cuantifique el Nivel 2, seleccione sus marcas ({{key:Mod+A}} en la hoja), cópielas, elija Nivel 3 en la lista y pegue. Las copias van en el Nivel 3. Cuando los pisos son iguales y no necesita separarlos, un [grupo típico](topic:typical-groups) cuenta un piso varias veces en su lugar.
:::

## Mover marcas a otra área

Seleccione una marca o varias ({{key:Shift}} + clic, o {{key:Mod+A}}). Bajo **Marca seleccionada** (o **Marcas seleccionadas**), elija el área en el campo {{ui:Área de licitación}}. La barra de estado dice "3 marcas movidas a Nivel 2." Es un solo paso de deshacer.

## Renombrar, reordenar o eliminar

Elija **Administrar áreas de licitación…** en la lista. Escriba sobre un nombre para cambiarlo, use las flechas para cambiar el orden (las tablas y el libro lo siguen), o elimine una con el ícono de papelera. Eliminar un área de licitación conserva sus marcas: quedan en ninguna área de licitación. {{key:Mod+Z}} deshace cada cambio.

## Leer las cantidades por área

En la tabla {{ui:Cantidades}}, elija {{ui:Por área}} (aparece cuando la cuantificación tiene un área de licitación). Cada área enumera las partidas que contiene, con su cantidad, unidad y total, y luego una fila de subtotal. Las marcas en ninguna área de licitación van al final, como **Sin área de licitación**. Haga clic en una fila de partida para resaltarla y hacer de esa área la actual.

Los conjuntos se calculan para cada área a partir de los totales propios de esa área. Una fórmula que redondea hacia arriba, como `ceil(L / 4)`, puede entonces dar un poco más en la suma de las áreas que para toda la obra, como ocurriría en una propuesta presupuestada área por área.

## Alternativas: propuesta base, más aditivas y deductivas

Un área de licitación puede ser una **alternativa**: trabajo que el propietario puede agregar a la propuesta, o quitar de ella. En **Administrar áreas de licitación…**, cada área tiene una lista junto a su nombre:

| Opción | Qué hace |
|---|---|
| {{ui:Propuesta base}} | En la propuesta, como de costumbre. |
| {{ui:Alternativa aditiva}} | Presupuestada por separado y **excluida de la propuesta base**: una mejora de alfombra, un toldo extra. |
| {{ui:Alternativa deductiva}} | En la propuesta base, y ofrecida como deducción: "elimine el toldo". |

Cuantifique el trabajo de una alternativa en su área de licitación como cualquier otra área. Una vez que la cuantificación tiene una alternativa:

- El encabezado de la tabla {{ui:Cantidades}} dice **Propuesta base** en vez de Total de la obra: toda la cuantificación sin las alternativas aditivas.
- {{ui:Por área}} termina con la propuesta base y una fila por alternativa: **+$300.00** para una aditiva, **−$1,050.00** para una deductiva.
- Una alternativa presupuesta solo las partidas que tienen marcas en ella, con sus conjuntos, así que una pieza de conjunto de otra partida no se cuela.

En las exportaciones, el CSV termina con la propuesta base y las alternativas, y el libro obtiene una hoja **Alternativas**: la propuesta base, las partidas de cada alternativa y su cambio, y la propuesta base con todas las alternativas aditivas quitadas.

## En la exportación

{{ui:XLSX}} agrega una hoja **Por área de licitación**: las partidas y componentes de cada área con cantidad, cantidad con desperdicio, material, mano de obra y total, un subtotal por área (una fórmula `SUM`) y **Todas las áreas de licitación** al final. La hoja **Marcas** obtiene una columna **Área de licitación**. Una cuantificación sin áreas de licitación se exporta como antes. Vea [Columnas de exportación](topic:export-columns).

Las áreas de licitación se guardan en el archivo del proyecto junto con las marcas.
