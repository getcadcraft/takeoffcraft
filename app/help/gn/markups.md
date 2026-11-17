---
title: Notas, nubes y resaltados
summary: Marcá preguntas y cambios en las hojas con notas, nubes de revisión y resaltados, seguí cada uno como abierto, respondido o cerrado, y envialos en el PDF marcado.
keywords: anotación, anotaciones, nota, comentario, pregunta, rfi, nube, nube de revisión, resaltado, estado, abierto, respondido, cerrado, revisión, lista de anotaciones
from: 2b395c13
---

Las anotaciones sirven para lo que necesitás recordar o consultar mientras hacés el cómputo: "confirmar el tipo de base", una nube de revisión alrededor de un muro cambiado, una nota resaltada en el plano. Quedan sobre la hoja con un estado, se listan en un solo lugar e imprimen en el PDF marcado. **Nunca se cuentan**: sin cantidad, sin costo.

## Agregar una

Abrí {{ui:Anotación}} en la barra sobre la hoja y elegí:

| Anotación | Cómo |
|---|---|
| {{ui:Nota}} | Hacé clic donde va, escribí la nota y elegí {{ui:Agregar}}. Se muestra como un alfiler redondo con su primera línea al lado. |
| {{ui:Nube}} | Hacé clic en una esquina, después en la opuesta, y escribí una nota (o dejala vacía). Una nube de revisión festoneada rodea el cuadro. |
| {{ui:Resaltado}} | Hacé clic en dos esquinas: un cuadro amarillo translúcido, con una nota si querés. |

{{key:Esc}} después de la primera esquina cancela. La herramienta sigue activa para la siguiente; {{key:V}} vuelve a {{ui:Seleccionar}}.

## Estado y edición

Hacé clic en una anotación con {{ui:Seleccionar}} para seleccionarla. El panel derecho muestra **Anotación**: su tipo y hoja, su **Estado** —Abierto, Respondido o Cerrado— y su texto, que podés cambiar. {{key:Delete}} (o {{ui:Eliminar}}) la quita; {{key:Mod+Z}} la devuelve.

El alfiler de una nota es naranja mientras está abierta, azul cuando fue respondida y gris cuando está cerrada; una nube cerrada pasa a gris.

## La lista

**Anotaciones** en el panel derecho lista todas las anotaciones del cómputo con su estado, e indica cuántas siguen abiertas. Marcá **Solo abiertas** para ver lo que falta resolver. Hacé clic en una fila para ir a su hoja y seleccionarla.

## Compartirlas

- {{ui:PDF marcado}} las dibuja en las páginas: resaltados, nubes y alfileres, cada uno con un recuadro que indica su estado en mayúsculas (ABIERTO, RESPONDIDO, CERRADO) y su texto. Una página con anotaciones pero sin marcas de cómputo también se incluye.
- {{ui:XLSX}} agrega una hoja **Anotaciones**: hoja, tipo, estado y texto, una fila por cada una.
- Se guardan en el `.takeoff.json` y en un [PDF con el cómputo adentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
