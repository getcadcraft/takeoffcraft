---
title: Guardar y reabrir una medición
summary: Guarde la medición como proyecto .takeoff.json, reábralo con los mismos PDF y vea qué ocurre si falta un PDF o ha cambiado.
keywords: medición dentro del PDF, incrustar, adjunto, guardar, abrir, reabrir, proyecto, takeoff.json, reanudar, continuar, PDF revisado, PDF modificado, PDF que falta, copia de seguridad, autoguardado, recuperar, fallo
from: bd5080a6
---

Una medición se guarda como un pequeño archivo de proyecto, `(nombre).takeoff.json`. Contiene sus partidas, conjuntos, tarifas, la escala de cada hoja y cada marca. **No** contiene los PDF; los vuelve a encontrar por su contenido.

## Guardar

1. Elija {{ui:Guardar medición}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+S}}.
   Su navegador descarga `(nombre).takeoff.json`. La barra de estado indica: "Guardado (nombre).takeoff.json. Se reabre sobre los mismos PDF (se identifican por su contenido)."
2. Mueva el archivo junto a los PDF de la obra, para que los dos queden juntos.

Cada guardado descarga un archivo nuevo. Su navegador puede llamar al segundo `(nombre) (1).takeoff.json`; conserve el más reciente.

El nombre procede del primer PDF que abrió en esta medición.

:::note
{{ui:Guardar medición}} sigue siendo la única forma de conservar una medición como archivo. Mientras trabaja, TakeoffCraft también guarda una copia de recuperación en este navegador (véase más abajo), y el guardado en la nube todavía no está disponible. Si intenta cerrar la pestaña con cambios sin guardar, el navegador pregunta si quiere salir.
:::

## Guardar la medición dentro del PDF

{{ui:Exportar}} › {{ui:PDF con la medición dentro}} descarga una copia de cada PDF abierto, con un nombre como `Planos (con medición).pdf`, que lleva toda la medición como adjunto: partidas, marcas, escalas, áreas de licitación, todo lo que contiene el `.takeoff.json`. Sus páginas no cambian, así que se ven e imprimen igual que el original, y otros lectores de PDF muestran la medición entre sus adjuntos.

Abra ese PDF en TakeoffCraft (de cualquier forma que abra PDF) y la aplicación le preguntará **Este PDF tiene una medición dentro**: elija {{ui:Abrir la medición}} para recuperarla, o {{ui:Solo el PDF}} para abrir solo el plano. La copia representa el PDF del que procede, así que un `.takeoff.json` guardado desde cualquiera de los dos se abre en ambos.

Con varios PDF, cada copia lleva toda la medición; ábralas juntas. Si guarda de nuevo desde una copia, la medición que contiene se reemplaza, no se añade una segunda. El `.takeoff.json` sigue siendo el archivo que conviene conservar: ocupa poco, y es el que escriben el autoguardado y la aplicación de escritorio.

## Si la pestaña o el navegador se detienen

Unos segundos después de cada cambio, TakeoffCraft guarda una copia de la medición en el almacenamiento propio de este navegador, junto con sus PDF cuando suman 64 MB o menos. No se sube nada. Al guardar la medición, empezar una nueva o abrir otro proyecto, la copia se elimina.

Si la pestaña se bloquea, el navegador o el equipo se detienen, o sale con cambios sin guardar, la próxima vez que abra TakeoffCraft preguntará **¿Recuperar su trabajo?** y mostrará la medición por su nombre. Elija **Recuperar** para recuperarla: las partidas, marcas y escalas vuelven, y sus PDF se abren de nuevo si se conservaron. La barra de estado indica: "Recuperado (nombre). Todavía no está guardado en un archivo: Guardar medición lo conserva." Cuando los PDF eran demasiado grandes para conservarlos, ábralos de nuevo; las marcas aparecen en sus hojas. Más: [Recuperar su trabajo](common:recover).

## Reabrir

1. Abra TakeoffCraft.
2. Suelte el archivo `.takeoff.json` y sus PDF juntos en la página. O elija {{ui:Abrir PDF}} para los PDF y {{ui:Abrir medición}} para el proyecto, en cualquier orden.
   La barra de estado indica: "Abierto (nombre): 12 partidas, 340 marcas." Cada hoja recupera su escala y las marcas aparecen en sus hojas.

El orden de los PDF no importa, ni tampoco sus nombres de archivo o carpetas. TakeoffCraft reconoce cada PDF por una huella de su contenido.

Si abre un proyecto mientras la medición actual tiene cambios sin guardar, TakeoffCraft pregunta primero: **Cancelar**, **Descartar cambios** o **Guardar medición primero**. Abrir un proyecto sustituye las partidas y marcas actuales; los PDF que ya están abiertos siguen abiertos.

## Cuando falta un PDF

Si abre el proyecto sin todos sus PDF, la barra de estado añade: "Abra sus PDF para ver las marcas (indicados en la lista de hojas)." Bajo la lista de hojas, una nota dice:

"Esta medición también abarca PDF que no están abiertos. Sus cantidades se cuentan; ábralos para ver y editar sus marcas:"

seguido de los nombres y tamaños de los archivos. Sus marcas siguen contando en todos los totales y exportaciones, con las escalas con las que se midieron. Abra esos PDF para ver y editar las marcas.

## Cuando un PDF ha cambiado

Un PDF revisado, o simplemente guardado de nuevo por otro programa, tiene un contenido distinto, así que para TakeoffCraft es un **archivo diferente**, aunque tenga el mismo nombre. En la nota bajo la lista de hojas, un archivo así dice "hay un archivo abierto con este nombre, pero su contenido es distinto".

- Las marcas siguen asociadas a la versión antigua. Siguen contando, en sus posiciones y escalas antiguas.
- El PDF revisado se abre como hojas nuevas, sin escala y sin marcas.

Para trasladar la medición a la revisión, abra ambos PDF y use {{ui:Comparar}} en la hoja nueva: [Comparar una hoja revisada y trasladar la medición](topic:compare-revisions).

## Archivo dañado o ajeno

TakeoffCraft comprueba cada archivo de proyecto antes de usarlo. Mensajes que puede ver:

- "(archivo) no es un proyecto de TakeoffCraft (no es JSON válido)."
- "Este no es un archivo de proyecto de TakeoffCraft."
- "Este proyecto lo guardó una versión más reciente de TakeoffCraft. Ábralo allí."
- "3 marcas estaban dañadas y se han omitido." (el resto se abre)

## Historial de deshacer

El historial de deshacer empieza de cero al abrir un proyecto. Guardar no lo borra.
