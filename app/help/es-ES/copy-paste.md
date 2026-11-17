---
title: Copiar, pegar y duplicar marcas
summary: Copie marcas con sus partidas, péguelas donde haga clic o en el mismo lugar de otra hoja, dúpliquelas, corte, borre y seleccione todo, cada una con un paso para deshacer.
keywords: copiar, pegar, cortar, duplicar, pegar en el mismo lugar, portapapeles, seleccionar todo, no seleccionar nada, varias marcas, planta tipo, repetir, mismo plano, otra hoja, copiar partida, duplicar partida
from: e20e9024
---

El grupo {{ui:Editar}} de la barra de herramientas contiene {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}} y {{ui:Pegar}}. Su menú {{ui:Más}} tiene el resto, cada una con su tecla: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Borrar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}. Cada una de ellas es un paso para deshacer con {{key:Mod+Z}}.

## Seleccionar las marcas

1. Elija {{ui:Seleccionar}} ({{key:V}}) y haga clic en una marca.
2. Mantenga pulsado {{key:Shift}} y haga clic en más marcas para añadirlas. {{key:Shift}} + clic sobre una marca seleccionada la quita de nuevo.
3. O pulse {{key:Mod+A}} ({{ui:Seleccionar todo}}) para seleccionar todas las marcas de la hoja abierta.

Con varias marcas seleccionadas, el panel derecho muestra **Marcas seleccionadas**: cuántas hay de cada partida, con {{ui:Copiar}}, {{ui:Duplicar}}, {{ui:Cortar}} y {{ui:Borrar marcas}}. Los controladores de las esquinas solo aparecen cuando hay una marca seleccionada. {{key:Esc}} ({{ui:No seleccionar nada}}) borra la selección.

## Copiar y pegar donde haga clic

1. Seleccione las marcas y pulse {{key:Mod+C}} ({{ui:Copiar}}). Las marcas se copian con sus partidas, incluidos el conjunto de cada partida, el desperdicio y los costes.
2. Vaya a la hoja donde las quiere (puede ser la misma hoja).
3. Pulse {{key:Mod+V}} ({{ui:Pegar}}). Una copia discontinua sigue al puntero.
4. Haga clic donde debe ir. El centro de las marcas copiadas cae en el puntero.

{{key:Esc}} cancela y no añade nada. Las marcas pegadas quedan seleccionadas después, así que {{key:Delete}} o {{key:Mod+Z}} las quitan de nuevo.

En la misma medición, las marcas pegadas van a las **mismas partidas**, así que sus cantidades se suman a esas partidas. En otra medición (otra pestaña, o tras {{ui:Nueva}}), se usa una partida con el mismo nombre y tipo; si no, la partida se añade con su conjunto. Si el nombre lo tiene una partida de otro tipo, la partida añadida se llama «(nombre) (copia)».

Las marcas pegadas van al área de licitación elegida en la parte superior del panel {{ui:Partidas}} (o a ninguna). Consulte [Áreas de licitación](topic:bid-areas).

## Pegar en el mismo lugar

{{key:Mod+Shift+V}} ({{ui:Pegar en el mismo lugar}}) coloca la copia exactamente en el mismo punto de la hoja abierta, según su posición en la página. Úselo para una planta tipo: mida el nivel 2, copie, abra el nivel 3 y pegue en el mismo lugar.

Pegar en el mismo lugar necesita una hoja del **mismo tamaño** que aquella desde la que copió. En una hoja de otro tamaño, TakeoffCraft lo indica y no pega nada; use {{ui:Pegar}} y haga clic. En la hoja de la que copió, la copia cae encima de los originales.

## La escala debe coincidir

Las longitudes y áreas dependen de la escala de la hoja. Un tramo que mide 10' a 1/4" = 1'-0" mediría 20' en una hoja a 1/8" = 1'-0". Por eso TakeoffCraft pega tramos y áreas solo en una hoja con la **misma escala** que la hoja de origen, y lo dice claramente cuando no es así:

- La hoja abierta todavía no tiene escala: asígnele una primero ([Fijar la escala](topic:set-the-scale)), y luego pegue.
- La hoja abierta tiene otra escala: el mensaje indica ambas escalas. Pegue en una hoja con la misma escala.
- Los recuentos no necesitan escala: los recuentos copiados se pegan en cualquier parte.

## Duplicar

{{key:Mod+D}} ({{ui:Duplicar}}) copia las marcas seleccionadas y pone la copia en el puntero de inmediato; haga clic donde debe ir. No se añade nada hasta que haga clic, y {{key:Esc}} no deja nada. Duplicar no cambia lo que pega {{ui:Pegar}}.

## Cortar y borrar

- {{key:Mod+X}} ({{ui:Cortar}}) copia las marcas seleccionadas y las borra. Péguelas donde corresponden, o deshaga el corte.
- {{key:Delete}} o {{key:Backspace}} ({{ui:Borrar}}) borra las marcas seleccionadas sin copiarlas.

## Copiar una partida

El editor de partidas (bajo **Partidas**) termina con:

- {{ui:Copiar partida}}: copia la partida con su conjunto, desperdicio y costes, sin marcas. {{ui:Pegar}} añade entonces una copia a esta medición, o a otra.
- {{ui:Duplicar partida}}: añade una copia al instante, con el nombre «(nombre) (copia)».

:::tip
La copia se queda en este equipo: se guarda en esta pestaña y en el almacenamiento del navegador, así que otra pestaña de TakeoffCraft puede pegarla. No se sube nada, y no se usa el portapapeles del sistema, así que no puede pegar marcas en otros programas.
:::

:::note
Una copia procede de una hoja cada vez. Las marcas se pegan tal cual: todavía no hay rotación ni reflejo de una copia.
:::
