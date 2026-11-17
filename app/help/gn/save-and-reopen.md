---
title: Guardar y reabrir un cómputo
summary: Guardar el cómputo como proyecto .takeoff.json, reabrirlo con los mismos PDF, y qué pasa cuando falta un PDF o cambió.
keywords: cómputo dentro del PDF, incrustar, adjunto, guardar, abrir, reabrir, proyecto, takeoff.json, retomar, continuar, PDF revisado, PDF cambiado, PDF faltante, respaldo, autoguardado, recuperar, fallo
from: bd5080a6
---

Un cómputo se guarda como un archivo de proyecto pequeño, `(nombre).takeoff.json`. Contiene tus ítems, conjuntos, tarifas, la escala de cada hoja y cada marca. **No** contiene los PDF; los vuelve a encontrar por su contenido.

## Guardar

1. Elegí {{ui:Guardar cómputo}} en el grupo {{ui:Archivo}}, o presioná {{key:Mod+S}}.
   Tu navegador descarga `(nombre).takeoff.json`. La barra de estado dice "Guardado (nombre).takeoff.json. Se reabre encima de los mismos PDF (se encuentran por su contenido)."
2. Mové el archivo junto a los PDF de la obra, para que queden juntos.

Cada guardado descarga un archivo nuevo. Tu navegador puede llamar al segundo `(nombre) (1).takeoff.json`; quedate con el más nuevo.

El nombre sale del primer PDF que abriste en este cómputo.

:::note
Guardar cómputo sigue siendo la única forma de conservar un cómputo como archivo. Mientras trabajás, TakeoffCraft también guarda una copia de recuperación en este navegador (ver abajo), y el guardado en la nube todavía no está disponible. Si intentás cerrar la pestaña con cambios sin guardar, el navegador pregunta si querés salir.
:::

## Guardar el cómputo dentro del PDF

{{ui:Exportar}} › {{ui:PDF con el cómputo adentro}} descarga una copia de cada PDF abierto, con un nombre como `Plans (with takeoff).pdf`, que lleva todo el cómputo como adjunto: ítems, marcas, escalas, áreas de oferta, todo lo que contiene el `.takeoff.json`. Sus páginas no se tocan, así que se ve y se imprime igual que el original, y otros lectores de PDF listan el cómputo entre sus adjuntos.

Abrí ese PDF en TakeoffCraft (de cualquier forma en que abras PDF) y pregunta **Este PDF tiene un cómputo adentro**: elegí {{ui:Abrir el cómputo}} para recuperarlo, o {{ui:Solo el PDF}} para abrir solo el plano. La copia representa al PDF del que se hizo, así que un `.takeoff.json` guardado desde cualquiera de los dos se abre en ambos.

Con varios PDF, cada copia lleva el cómputo completo; abrilos juntos. Guardar otra vez desde una copia reemplaza el cómputo dentro de ella, no agrega un segundo. El `.takeoff.json` sigue siendo el archivo que hay que conservar: es pequeño, y es lo que escriben el autoguardado y la aplicación de escritorio.

## Si se cierra la pestaña o el navegador

Unos segundos después de cada cambio, TakeoffCraft guarda una copia del cómputo en el almacenamiento propio de este navegador, junto con sus PDF cuando suman 64 MB o menos. No se sube nada. Cuando guardás el cómputo, empezás uno nuevo o abrís otro proyecto, la copia se borra.

Si la pestaña se cae, el navegador o la computadora se detienen, o salís con cambios sin guardar, la próxima vez que abras TakeoffCraft pregunta **¿Recuperar tu trabajo?** y lista el cómputo por su nombre. Elegí **Recuperar** para recuperarlo: los ítems, marcas y escalas vuelven, y sus PDF se abren otra vez si se conservaron. La barra de estado dice "Recuperado (nombre). Todavía no está guardado en un archivo: Guardar cómputo lo conserva." Cuando los PDF eran demasiado grandes para guardarlos, abrilos otra vez; las marcas aparecen en sus hojas. Más: [Recuperar tu trabajo](common:recover).

## Reabrir

1. Abrí TakeoffCraft.
2. Soltá el archivo `.takeoff.json` y sus PDF juntos en la página. O elegí {{ui:Abrir planos}} para los PDF y {{ui:Abrir cómputo}} para el proyecto, en cualquier orden.
   La barra de estado dice "Abierto (nombre): 12 ítems, 340 marcas." Cada hoja recupera su escala y las marcas aparecen en sus hojas.

El orden de los PDF no importa, ni sus nombres de archivo ni sus carpetas. TakeoffCraft reconoce cada PDF por una huella digital de su contenido.

Si abrís un proyecto mientras el cómputo actual tiene cambios sin guardar, TakeoffCraft pregunta primero: **Cancelar**, **Descartar cambios** o **Guardar cómputo primero**. Abrir un proyecto reemplaza los ítems y marcas actuales; los PDF que ya están abiertos siguen abiertos.

## Cuando falta un PDF

Si abrís el proyecto sin todos sus PDF, la barra de estado agrega "Abrí sus PDF para ver las marcas (listadas en Hojas)." Debajo de la lista de hojas, una nota dice:

"Este cómputo también abarca PDF que no están abiertos. Sus cantidades se cuentan; abrilos para ver y editar sus marcas:"

seguido de los nombres de archivo y sus tamaños. Sus marcas siguen contando en todos los totales y exportaciones, con las escalas con que se midieron. Abrí esos PDF para ver y editar las marcas.

## Cuando un PDF cambió

Un PDF que fue revisado, o que otro programa volvió a guardar, tiene contenido distinto, así que para TakeoffCraft es un **archivo distinto**, aunque tenga el mismo nombre. En la nota debajo de la lista de hojas, ese archivo dice "hay un archivo con este nombre abierto, pero su contenido es distinto".

- Las marcas siguen asociadas a la versión anterior. Siguen contando, en sus posiciones y escalas viejas.
- El PDF revisado se abre como hojas nuevas, sin escala y sin marcas.

Para pasar el cómputo a la revisión, abrí ambos PDF y usá {{ui:Comparar}} en la hoja nueva: [Comparar una hoja revisada y mover el cómputo](topic:compare-revisions).

## Un archivo dañado o ajeno

TakeoffCraft verifica cada archivo de proyecto antes de usarlo. Mensajes que podés ver:

- "(archivo) no es un proyecto de TakeoffCraft (no es JSON válido)."
- "Este no es un archivo de proyecto de TakeoffCraft."
- "Este proyecto fue guardado con un TakeoffCraft más nuevo. Abrilo ahí."
- "3 marcas estaban dañadas y quedaron afuera." (el resto se abre)

## Historial de deshacer

El historial de deshacer empieza de cero al abrir un proyecto. Guardar no lo borra.
