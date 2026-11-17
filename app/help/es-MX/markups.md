---
title: Notas, nubes y resaltados
summary: Marque preguntas y cambios en las hojas con notas, nubes de revisión y resaltados; siga el estado de cada uno como abierto, respondido o cerrado, y envíelos en el PDF marcado.
keywords: marca, marcas, nota, comentario, pregunta, rfi, nube, nube de revisión, resaltado, estado, abierta, respondida, cerrada, revisión, lista de marcas
from: 2b395c13
---

Las marcas sirven para lo que necesita recordar o preguntar mientras cuantifica: "confirmar el tipo de base", una nube de revisión alrededor de un muro modificado, una nota resaltada en el plano. Están sobre la hoja con un estado, se listan en un solo lugar e imprimen en el PDF marcado. **Nunca se cuentan**: no tienen cantidad ni costo.

## Agregar una

Abra {{ui:Markup}} en la barra sobre la hoja y elija:

| Tipo | Cómo |
|---|---|
| {{ui:Note}} | Haga clic donde debe ir, escriba la nota y elija {{ui:Add}}. Se muestra como un alfiler redondo con su primera línea a un lado. |
| {{ui:Cloud}} | Haga clic en una esquina, luego en la opuesta, y escriba una nota (o déjela vacía). Una nube de revisión festoneada rodea el cuadro. |
| {{ui:Highlight}} | Haga clic en dos esquinas: un cuadro amarillo translúcido, con una nota si lo desea. |

{{key:Esc}} después de la primera esquina cancela. La herramienta sigue activa para la siguiente; {{key:V}} regresa a {{ui:Select}}.

## Estado y edición

Haga clic en una marca con {{ui:Select}} para seleccionarla. El panel derecho muestra **Revisión**: su tipo y hoja, su **Estado** — Abierta, Respondida o Cerrada — y su texto, que puede cambiar. {{key:Delete}} (o {{ui:Delete}}) la elimina; {{key:Mod+Z}} la recupera.

El alfiler de una nota es naranja mientras está abierta, azul cuando se responde y gris al cerrarla; una nube cerrada se vuelve gris.

## La lista

**Marcas** en el panel derecho enumera todas las marcas de la cuantificación con su estado, e indica cuántas siguen abiertas. Marque **Solo abiertas** para ver lo que falta resolver. Haga clic en una fila para ir a su hoja y seleccionarla.

## Compartirlas

- {{ui:Marked PDF}} las dibuja en las páginas: resaltados, nubes y alfileres, cada uno con un recuadro que indica su estado en mayúsculas (ABIERTA, RESPONDIDA, CERRADA) y su texto. También se incluye una página que tiene marcas aunque no tenga marcas de cuantificación.
- {{ui:XLSX}} agrega una hoja de cálculo **Marcas**: hoja, tipo, estado y texto, una fila por marca.
- Se guardan en el `.takeoff.json` y en un [PDF con la cuantificación dentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
