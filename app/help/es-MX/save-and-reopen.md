---
title: Guardar y reabrir una cuantificación
summary: Guarde la cuantificación como un proyecto .takeoff.json, reábrala con los mismos PDF, y vea qué pasa cuando falta un PDF o cuando cambió.
keywords: cuantificación dentro del PDF, incrustar, adjunto, guardar, abrir, reabrir, proyecto, takeoff.json, reanudar, continuar, PDF revisado, PDF cambiado, PDF faltante, respaldo, autoguardado, recuperar, fallo
from: bd5080a6
---

Una cuantificación se guarda como un pequeño archivo de proyecto, `(nombre).takeoff.json`. Contiene sus partidas, conjuntos, tarifas, la escala de cada hoja y cada marca. **No** contiene los PDF; los vuelve a encontrar por su contenido.

## Guardar

1. Elija {{ui:Save takeoff}} en el grupo {{ui:File}}, o pulse {{key:Mod+S}}.
   Su navegador descarga `(nombre).takeoff.json`. La barra de estado dice "Guardado (nombre).takeoff.json. Se reabre sobre los mismos PDF (se comparan por su contenido)."
2. Mueva el archivo junto a los PDF de la obra, para que los dos queden juntos.

Cada guardado descarga un archivo nuevo. Su navegador puede llamar al segundo `(nombre) (1).takeoff.json`; conserve el más reciente.

El nombre viene del primer PDF que abrió en esta cuantificación.

:::note
Guardar la cuantificación sigue siendo la única forma de conservarla como archivo. Mientras trabaja, TakeoffCraft también guarda una copia de recuperación en este navegador (vea abajo), y el guardado en la nube todavía no está disponible. Si intenta cerrar la pestaña con cambios sin guardar, el navegador pregunta si desea salir.
:::

## Conservar la cuantificación dentro del PDF

{{ui:Export}} › {{ui:PDF with the takeoff inside}} descarga una copia de cada PDF abierto, con un nombre como `Planos (con cuantificación).pdf`, que lleva toda la cuantificación como adjunto: partidas, marcas, escalas, áreas de licitación, todo lo que contiene el `.takeoff.json`. Sus páginas no cambian, así que se ven e imprimen igual que el original, y otros lectores de PDF muestran la cuantificación entre sus adjuntos.

Abra ese PDF en TakeoffCraft (de cualquier forma en que abra PDF) y preguntará **Este PDF tiene una cuantificación dentro**: elija {{ui:Open the takeoff}} para recuperarla, o {{ui:Just the PDF}} para abrir solo el plano. La copia representa el PDF del que se hizo, así que un `.takeoff.json` guardado desde cualquiera de los dos se abre en ambos.

Con varios PDF, cada copia lleva toda la cuantificación; ábralas juntas. Si vuelve a guardar desde una copia, se reemplaza la cuantificación que contiene, no se agrega una segunda. El `.takeoff.json` sigue siendo el archivo que debe conservar: es pequeño y es lo que escriben el autoguardado y la aplicación de escritorio.

## Si la pestaña o el navegador se detienen

Unos segundos después de cada cambio, TakeoffCraft guarda una copia de la cuantificación en el almacenamiento propio de este navegador, junto con sus PDF cuando suman 64 MB o menos. No se sube nada. Al guardar la cuantificación, iniciar una nueva o abrir otro proyecto, la copia se elimina.

Si la pestaña falla, el navegador o la computadora se detienen, o sale con cambios sin guardar, la próxima vez que abra TakeoffCraft preguntará **¿Recuperar su trabajo?** y mostrará la cuantificación por nombre. Elija **Recuperar** para recuperarla: las partidas, marcas y escalas regresan, y sus PDF se vuelven a abrir si se conservaron. La barra de estado dice "Recuperado (nombre). Todavía no está guardado en un archivo: Guardar la cuantificación lo conserva." Cuando los PDF eran demasiado grandes para conservarse, ábralos de nuevo; las marcas aparecen en sus hojas. Más: [Recuperar su trabajo](common:recover).

## Reabrir

1. Abra TakeoffCraft.
2. Suelte el archivo `.takeoff.json` y sus PDF en la página juntos. O elija {{ui:Open plans}} para los PDF y {{ui:Open takeoff}} para el proyecto, en cualquier orden.
   La barra de estado dice "Abierto (nombre): 12 partidas, 340 marcas." Cada hoja recupera su escala y las marcas aparecen en sus hojas.

El orden de los PDF no importa, ni sus nombres de archivo ni sus carpetas. TakeoffCraft reconoce cada PDF por una huella de su contenido.

Si abre un proyecto mientras la cuantificación actual tiene cambios sin guardar, TakeoffCraft pregunta antes: **Cancelar**, **Descartar cambios** o **Guardar la cuantificación primero**. Abrir un proyecto reemplaza las partidas y marcas actuales; los PDF que ya estaban abiertos siguen abiertos.

## Cuando falta un PDF

Si abre el proyecto sin todos sus PDF, la barra de estado agrega "Abra sus PDF para ver las marcas (listados debajo de Hojas)." Debajo de la lista de hojas, una nota dice:

"Esta cuantificación también abarca PDF que no están abiertos. Sus cantidades se cuentan; ábralos para ver y editar sus marcas:"

seguido de los nombres de archivo y sus tamaños. Sus marcas siguen contando en todos los totales y exportaciones, con las escalas con que se midieron. Abra esos PDF para ver y editar las marcas.

## Cuando un PDF cambió

Un PDF que fue revisado, o que otro programa volvió a guardar, tiene contenido distinto, así que para TakeoffCraft es un **archivo diferente**, aunque tenga el mismo nombre. En la nota debajo de la lista de hojas, ese archivo dice "un archivo con este nombre está abierto, pero su contenido es distinto".

- Las marcas siguen unidas a la versión anterior. Siguen contando, en sus posiciones y escalas anteriores.
- El PDF revisado se abre como hojas nuevas, sin escala y sin marcas.

Para pasar la cuantificación a la revisión, abra ambos PDF y use {{ui:Compare}} en la hoja nueva: [Compare una hoja revisada y mueva la cuantificación](topic:compare-revisions).

## Un archivo dañado o ajeno

TakeoffCraft revisa cada archivo de proyecto antes de usarlo. Mensajes que puede ver:

- "(archivo) no es un proyecto de TakeoffCraft (no es JSON válido)."
- "Este no es un archivo de proyecto de TakeoffCraft."
- "Este proyecto lo guardó una versión más nueva de TakeoffCraft. Ábralo ahí."
- "3 marcas estaban dañadas y se omitieron." (el resto se abre)

## Historial de deshacer

El historial de deshacer empieza de cero al abrir un proyecto. Guardar no lo borra.
