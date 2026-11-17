---
title: Iniciar una medición y abrir un juego de planos
summary: Abra uno o varios PDF como juego de planos, muévase entre sus hojas y pase de una a otra.
keywords: abrir, juego de planos, varios pdf, varios archivos, hojas, dibujos, etiquetas de página, lista de hojas, navegar, soltar, entrega, abrir en otra aplicación, anotación
from: ed434468
---

Un juego de planos suele ser varios PDF: arquitectónicos, estructurales, mecánicos. TakeoffCraft los abre uno junto a otro como una sola lista de hojas, y una misma medición puede cubrirlos todos.

## Abrir los PDF

1. Elija {{ui:Abrir PDF}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}. (Los otros estilos de menú la llaman {{ui:Abrir PDF…}}.)
2. En el cuadro de diálogo de archivos, seleccione todos los PDF del juego. Mantenga pulsado {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} para elegir varios, o {{key:Shift}} para elegir un intervalo.
3. Elija Abrir.
   Se muestra un mensaje "Abriendo (nombre)…" mientras se lee cada archivo. Después aparece cada página bajo {{ui:Hojas}}, y se abre la primera página del primer PDF nuevo.

También puede arrastrar los PDF desde {{pick:mac=Finder|windows=File Explorer|linux=su gestor de archivos}} y soltarlos en cualquier parte de TakeoffCraft. Mientras arrastra, aparece un marco "Suelte PDF, dibujos DWG o DXF, o un .takeoff.json".

Para añadir más PDF después, repita lo mismo. Los PDF que ya están abiertos se omiten.

La pantalla de inicio también muestra los PDF y las mediciones que abrió recientemente, en los navegadores que permiten a una página volver a abrir un archivo (Chrome y Edge). Haga clic en uno para abrirlo; el navegador puede pedir permiso antes. Consulte [Sus archivos](common:your-files).

:::note
No se sube nada. El navegador lee los PDF en su ordenador, y dejan de estar en TakeoffCraft al cerrar la pestaña o al elegir {{ui:Nueva}}.
:::

## Dibujos junto a PDF

{{ui:Abrir PDF}} también admite dibujos DWG y DXF, solos o junto con PDF: el espacio modelo y las presentaciones de cada dibujo se convierten en hojas de la misma lista. Consulte [Abrir un dibujo DWG o DXF](topic:open-a-drawing) y después [Contar desde un dibujo](topic:count-from-a-drawing).

## Un PDF entregado desde otra aplicación

Otra aplicación de la gama puede entregarle el PDF que tiene abierto: abre TakeoffCraft en una pestaña nueva, y el PDF se abre allí como si lo hubiera soltado. La barra de estado dice "Abierto (nombre), entregado desde (aplicación). El archivo original no ha cambiado." No se sube nada; el archivo pasa por el almacenamiento propio de este navegador, y deja de estar en él una vez abierto.

Si la barra de estado dice que el PDF "no llegó", la pestaña esperó demasiado o el PDF ya estaba abierto en otra pestaña: ábralo con {{ui:Abrir PDF}}.

Al revés, cuando MarkupCraft se ejecuta donde usted está y puede recibir un archivo, la barra de hojas bajo el dibujo tiene un botón {{ui:MarkupCraft}}: abre el PDF de la hoja en pantalla en MarkupCraft, en una pestaña nueva, para revisarlo y anotarlo.

## Buscar una hoja

- Desplace la lista {{ui:Hojas}} a la izquierda y haga clic en una hoja.
- Escriba en **Buscar hojas** en la parte superior de la lista para filtrar por número de hoja, nombre de archivo o etiqueta de página. El recuento junto a {{ui:Hojas}} muestra "3 de 40" mientras hay un filtro activo.
- Pulse {{key:PageDown}} para la hoja siguiente y {{key:PageUp}} para la anterior. Siguen la lista tal como está filtrada.

:::mac
En un teclado de Mac sin las teclas Re Pág y Av Pág, pulse fn con la flecha arriba o abajo.
:::

## Cómo se nombran las hojas

- Una página a la que su PDF da una etiqueta, como `A-101`, se nombra con esa etiqueta.
- Una página sin etiqueta (o cuya etiqueta es solo su número de página) se nombra "(nombre de archivo), página (n)".
- Con varios PDF abiertos, las hojas con etiqueta también llevan el nombre del archivo: "A-101 — Arquitectura".

Los nombres de las hojas todavía no se pueden escribir a mano.

## Recorrer una hoja

- Gire la rueda del ratón para hacer zoom en el puntero.
- Arrastre con el botón izquierdo o el central para desplazarse. Con {{ui:Recuento automático}}, o cuando empieza en la esquina de una marca, mantenga pulsada {{key:Space}} mientras arrastra, o arrastre con el botón central.
- Pulse {{key:F}} o elija {{ui:Ajustar página}} para ver la hoja completa; {{key:W}} o {{ui:Ajustar ancho}} ajusta su ancho.
- Pulse {{key:Plus}} o {{key:=}} para acercar, y {{key:Minus}} para alejar, alrededor del centro de la vista.

Cada hoja recuerda su propio zoom y su posición mientras esté abierta.

## Siguiente

Antes de medir una hoja, necesita una escala: [Definir la escala](topic:set-the-scale).
