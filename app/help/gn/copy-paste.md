---
title: Copiar, pegar y duplicar marcas
summary: Copiá marcas con sus ítems, pegalas donde hacés clic o en el mismo lugar de otra hoja, duplicalas, cortá, eliminá y seleccioná todo, cada una con un paso para deshacer.
keywords: copiar, pegar, cortar, duplicar, pegar en el lugar, portapapeles, seleccionar todo, no seleccionar nada, varias marcas, piso típico, repetir, mismo plano, otra hoja, copiar ítem, duplicar ítem
from: e20e9024
---

El grupo {{ui:Edit}} de la barra de herramientas tiene {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} y {{ui:Paste}}. Su menú {{ui:More}} tiene el resto, cada uno con su tecla: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} y {{ui:Select none}}. Cada una es un paso para deshacer con {{key:Mod+Z}}.

## Seleccionar las marcas

1. Elegí {{ui:Select}} ({{key:V}}) y hacé clic en una marca.
2. Mantené {{key:Shift}} y hacé clic en más marcas para agregarlas. {{key:Shift}} + clic en una marca seleccionada la saca otra vez.
3. O presioná {{key:Mod+A}} ({{ui:Select all}}) para tomar todas las marcas de la hoja abierta.

Con varias marcas seleccionadas, el panel derecho muestra **Selected marks**: cuántas hay de cada ítem, con {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} y {{ui:Delete marks}}. Los controles de esquina aparecen solo si hay una marca seleccionada. {{key:Esc}} ({{ui:Select none}}) limpia la selección.

## Copiar y pegar donde hacés clic

1. Seleccioná las marcas y presioná {{key:Mod+C}} ({{ui:Copy}}). Las marcas se copian con sus ítems, incluidos el conjunto, el desperdicio y los costos de cada ítem.
2. Andá a la hoja donde las querés (puede ser la misma hoja).
3. Presioná {{key:Mod+V}} ({{ui:Paste}}). Una copia punteada sigue al puntero.
4. Hacé clic donde va. El centro de las marcas copiadas cae en el puntero.

{{key:Esc}} cancela y no agrega nada. Las marcas pegadas quedan seleccionadas, así que {{key:Delete}} o {{key:Mod+Z}} las quita de nuevo.

En el mismo cómputo, las marcas pegadas van a los **mismos ítems**, y sus cantidades se suman a esos ítems. En otro cómputo (otra pestaña, o después de {{ui:New}}), se usa un ítem con el mismo nombre y tipo; si no, el ítem se agrega con su conjunto. Si el nombre lo tiene un ítem de otro tipo, el ítem agregado se llama "(nombre) (copy)".

Las marcas pegadas van al área de oferta elegida arriba del panel {{ui:Items}} (o a ninguna). Ehecha [Áreas de oferta](topic:bid-areas).

## Pegar en el lugar

{{key:Mod+Shift+V}} ({{ui:Paste in place}}) pone la copia exactamente en el mismo lugar de la hoja abierta, según su posición en la página. Usalo para un piso típico: tomá el nivel 2, copiá, abrí el nivel 3 y pegá en el lugar.

Pegar en el lugar necesita una hoja del **mismo tamaño** que la de origen. En una hoja de otro tamaño, TakeoffCraft lo indica y no pega nada; usá {{ui:Paste}} y hacé clic. En la hoja de origen, la copia cae encima de los originales.

## La escala debe coincidir

Longitudes y áreas dependen de la escala de la hoja. Un tramo que mide 10' a 1/4" = 1'-0" mediría 20' en una hoja a 1/8" = 1'-0". Por eso TakeoffCraft pega tramos y áreas solo en una hoja con la **misma escala** que la hoja de origen, y lo dice claramente cuando no:

- La hoja abierta no tiene escala: fijala primero ([Establecer la escala](topic:set-the-scale)), y después pegá.
- La hoja abierta tiene otra escala: el mensaje nombra las dos escalas. Pegá en una hoja a la misma escala.
- Los conteos no necesitan escala: los conteos copiados pegan en cualquier lugar.

## Duplicar

{{key:Mod+D}} ({{ui:Duplicate}}) copia las marcas seleccionadas y pone la copia en el puntero de inmediato; hacé clic donde va. No se agrega nada hasta que hagas clic, y {{key:Esc}} no deja nada. Duplicar no cambia lo que {{ui:Paste}} pega.

## Cortar y eliminar

- {{key:Mod+X}} ({{ui:Cut}}) copia las marcas seleccionadas y las elimina. Pegalas donde corresponden, o deshacé el corte.
- {{key:Delete}} o {{key:Backspace}} ({{ui:Delete}}) elimina las marcas seleccionadas sin copiarlas.

## Copiar un ítem

El editor de ítems (bajo **Items**) termina con:

- {{ui:Copy item}}: copia el ítem con su conjunto, desperdicio y costos, sin marcas. {{ui:Paste}} luego agrega una copia a este cómputo, o a otro.
- {{ui:Duplicate item}}: agrega una copia de una vez, llamada "(nombre) (copy)".

:::tip
La copia queda en esta computadora: se guarda en esta pestaña y en el almacenamiento del navegador, así que otra pestaña de TakeoffCraft puede pegarla. No se sube nada, y no se usa el portapapeles del sistema, así que no podés pegar marcas en otros programas.
:::

:::note
Una copia viene de una hoja a la vez. Las marcas se pegan tal como están: todavía no hay rotación ni espejo de una copia.
:::
