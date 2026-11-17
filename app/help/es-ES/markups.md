---
title: Notas, nubes y resaltados
summary: Marque dudas y cambios en las hojas con notas, nubes de revisión y resaltados; siga el estado de cada uno como abierto, respondido o cerrado, y envíelos en el PDF anotado.
keywords: anotación, anotaciones, nota, comentario, pregunta, rfi, nube, nube de revisión, resaltado, estado, abierto, respondido, cerrado, revisión, lista de anotaciones
from: 2b395c13
---

Las anotaciones sirven para lo que necesita recordar o consultar al medir: «confirme el tipo de base», una nube de revisión alrededor de un muro modificado, una nota resaltada en el plano. Se colocan sobre la hoja con un estado, aparecen en una sola lista y se imprimen en el PDF anotado. Nunca se cuentan: no tienen cantidad ni coste.

## Añadir una

Abra {{ui:Anotación}} en la barra sobre la hoja y elija:

| Anotación | Cómo |
|---|---|
| {{ui:Nota}} | Haga clic donde debe ir, escriba la nota y elija {{ui:Añadir}}. Se muestra como un alfiler redondo con su primera línea junto a él. |
| {{ui:Nube}} | Haga clic en una esquina, después en la opuesta, y escriba una nota (o déjela vacía). Una nube de revisión festoneada rodea el cuadro. |
| {{ui:Resaltar}} | Haga clic en dos esquinas: un cuadro amarillo transparente, con una nota si lo desea. |

{{key:Esc}} tras la primera esquina cancela. La herramienta sigue activa para la siguiente; {{key:V}} vuelve a {{ui:Seleccionar}}.

## Estado y edición

Haga clic en una anotación con {{ui:Seleccionar}} para seleccionarla. El panel derecho muestra **Anotación**: su tipo y hoja, su **Estado** —Abierto, Respondido o Cerrado— y su texto, que puede cambiar. {{key:Delete}} (o {{ui:Borrar}}) la elimina; {{key:Mod+Z}} la recupera.

El alfiler de una nota es naranja mientras está abierto, azul una vez respondido y gris cuando está cerrado; una nube cerrada se vuelve gris.

## La lista

**Anotaciones** en el panel derecho enumera todas las anotaciones de la medición con su estado, e indica cuántas siguen abiertas. Marque **Solo abiertas** para ver lo que queda por resolver. Haga clic en una fila para ir a su hoja y seleccionarla.

## Compartirlas

- {{ui:PDF anotado}} las dibuja en las páginas: resaltados, nubes y alfileres, cada uno con un recuadro que indica su estado en mayúsculas (ABIERTO, RESPONDIDO, CERRADO) y su texto. También se incluye una página con anotaciones pero sin marcas de medición.
- {{ui:XLSX}} añade una hoja de cálculo **Anotaciones**: hoja, tipo, estado y texto, una fila por cada una.
- Se guardan en el `.takeoff.json` y en un [PDF con la medición incluida](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
