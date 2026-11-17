---
title: Áreas de oferta
summary: Marcá marcas por edificio, piso o fase, computá en un área por vez y leé cantidades y costos de cada área.
keywords: agregar alternativa, deducir alternativa, oferta base, alternativas, área de oferta, área, edificio, piso, nivel, fase, zona, alternativa, desglose, dividir, piso típico, subtotal, por área
from: 64f3d41c
---

Un área de oferta es una parte de la obra que se presupuesta por separado: un edificio, un piso, una fase, un ala. Cada marca puede estar en un área de oferta. Las cantidades y el presupuesto pueden leerse entonces por área, con un subtotal para cada una, mientras el total de la obra sigue siendo la suma de todo.

## Crear un área de oferta

1. En la parte superior del panel {{ui:Ítems}}, abrí la lista {{ui:Área de oferta}}.
2. Elegí **Nueva área de oferta…**, escribí un nombre como "Edificio A" o "Nivel 2", y elegí **Crearla**.
   La nueva área pasa a ser la actual. La barra de estado dice "Las marcas nuevas van en (nombre). Las marcas de otras áreas de oferta se atenúan."

## Computar en un área

Mientras un área de oferta está elegida en la lista, cada marca nueva va en ella: tramos, áreas, círculos, conteos, las marcas que agrega {{ui:Conteo automático}}, y lo que pegues. Las marcas de otras áreas, y las que no tienen área, se atenúan en la hoja para que veas qué pertenece a dónde.

Elegí **Sin área de oferta** en la lista para computar sin área; entonces no se atenúa nada.

:::tip
Pisos típicos: computá el Nivel 2, seleccioná sus marcas ({{key:Mod+A}} en la hoja), copialas, elegí Nivel 3 en la lista y pegá. Las copias van en el Nivel 3. Cuando los pisos son iguales y no hace falta separarlos, un [grupo típico](topic:typical-groups) cuenta un piso varias veces.
:::

## Mover marcas a otra área

Seleccioná una marca o varias ({{key:Shift}} + clic, o {{key:Mod+A}}). Debajo de **Marca seleccionada** (o **Marcas seleccionadas**), elegí el área en el campo {{ui:Área de oferta}}. La barra de estado dice "3 marcas movidas a Nivel 2." Es un solo paso de deshacer.

## Renombrar, reordenar o eliminar

Elegí **Administrar áreas de oferta…** en la lista. Escribí encima de un nombre para renombrarla, usá las flechas para cambiar el orden (las tablas y el libro de cálculo lo siguen), o eliminá una con el cesto. Eliminar un área de oferta conserva sus marcas: quedan sin área de oferta. {{key:Mod+Z}} deshace cada cambio.

## Leer las cantidades por área

En la tabla {{ui:Cantidades}}, elegí {{ui:Por área}} (aparece cuando el cómputo tiene un área de oferta). Cada área lista los ítems que contiene, con su cantidad, unidad y total, y luego una fila de subtotal. Las marcas sin área de oferta van al final, como **Sin área de oferta**. Hacé clic en la fila de un ítem para resaltarlo y hacer de esa área la actual.

Los conjuntos se calculan para cada área a partir de los totales de esa área. Una fórmula que redondea hacia arriba, como `ceil(L / 4)`, puede dar un poco más en la suma de las áreas que para la obra completa, como pasaría en una oferta presupuestada área por área.

## Alternativas: oferta base más agregados y deducciones

Un área de oferta puede ser una **alternativa**: trabajo que el propietario puede agregar a la oferta, o quitar de ella. En **Administrar áreas de oferta…**, cada área tiene una lista junto a su nombre:

| Opción | Qué hace |
|---|---|
| {{ui:Oferta base}} | En la oferta, como de costumbre. |
| {{ui:Agregar alternativa}} | Presupuestada por separado y **excluida de la oferta base**: una mejora de alfombra, un toldo extra. |
| {{ui:Deducir alternativa}} | En la oferta base, y ofrecida como deducción: "eliminar el toldo". |

Computá el trabajo de una alternativa en su área de oferta como cualquier otra área. Cuando el cómputo tiene una alternativa:

- El encabezado de la tabla {{ui:Cantidades}} dice **Oferta base** en lugar de {{ui:Total de la obra}}: todo el cómputo sin las alternativas agregadas.
- {{ui:Por área}} termina con la oferta base y una fila por alternativa: **+$300.00** por un agregado, **−$1,050.00** por una deducción.
- Una alternativa presupuesta solo los ítems que tienen marcas en ella, con sus conjuntos, para que una parte de conjunto de otro ítem no se cuele.

En las exportaciones, el CSV termina con la oferta base y las alternativas, y el libro de cálculo recibe una hoja **Alternativas**: la oferta base, los ítems de cada alternativa y su cambio, y la oferta base con todas las alternativas agregadas quitadas.

## En la exportación

{{ui:XLSX}} agrega una hoja **Por área de oferta**: los ítems y componentes de cada área con cantidad, cantidad con desperdicio, material, mano de obra y total, un subtotal por área (una fórmula `SUM`) y **Todas las áreas de oferta** al final. La hoja **Marcas** recibe una columna **Área de oferta**. Un cómputo sin áreas de oferta se exporta como antes. Ver [Columnas de exportación](topic:export-columns).

Las áreas de oferta se guardan en el archivo del proyecto junto con las marcas.
