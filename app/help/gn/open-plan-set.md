---
title: Comenzar un cómputo y abrir un juego de planos
summary: Abra uno o varios PDF como juego de planos, oriéntese entre las hojas y muévase entre ellas.
keywords: abrir, juego de planos, varios pdf, varios archivos, hojas, planos, etiquetas de página, lista de hojas, navegar, soltar, entrega, abrir en otra aplicación, marcado
from: ed434468
---

Un juego de planos suele ser varios PDF: arquitectónico, estructural, mecánico. TakeoffCraft los abre lado a lado como una sola lista de hojas, y un solo cómputo puede abarcarlos a todos.

## Abrir los PDF

1. Elija {{ui:Open plans}} en el grupo {{ui:File}}, o presione {{key:Mod+O}}. (Los otros estilos de menú lo llaman {{ui:Open PDFs…}}.)
2. En el diálogo de archivos, seleccione todos los PDF del juego. Mantenga presionado {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} para elegir varios, o {{key:Shift}} para elegir un rango.
3. Elija Abrir.
   Mientras se lee cada archivo se muestra el mensaje "Abriendo (nombre)…". Luego aparece cada página bajo {{ui:Sheets}} y se abre la primera página del primer PDF nuevo.

También puede arrastrar los PDF desde {{pick:mac=Finder|windows=Explorador de archivos|linux=su administrador de archivos}} y soltarlos en cualquier parte de TakeoffCraft. Mientras arrastra aparece un marco que dice "Suelte PDF, planos DWG o DXF, o un .takeoff.json".

Para agregar más PDF después, haga lo mismo otra vez. Los PDF que ya están abiertos se omiten.

La pantalla de inicio también enumera los PDF y cómputos que abrió recientemente, en navegadores que permiten a una página abrir un archivo otra vez (Chrome y Edge). Haga clic en uno para abrirlo; el navegador puede pedir permiso antes. Vea [Sus archivos](common:your-files).

:::note
Nada se sube. El navegador lee los PDF en su computadora, y desaparecen de TakeoffCraft al cerrar la pestaña o al elegir {{ui:New}}.
:::

## Planos junto con PDF

{{ui:Open plans}} también acepta planos DWG y DXF, solos o junto con PDF: el espacio modelo y las presentaciones de cada plano se vuelven hojas en la misma lista. Vea [Abrir un plano DWG o DXF](topic:open-a-drawing), y luego [Contar desde un plano](topic:count-from-a-drawing).

## Un PDF entregado desde otra aplicación

Otra aplicación de la familia puede entregarle el PDF que tiene abierto: abre TakeoffCraft en una pestaña nueva y el PDF se abre allí como si lo hubiera soltado. La barra de estado dice "Abierto (nombre), entregado desde (aplicación). El archivo original no cambió". Nada se sube; el archivo pasa por el almacenamiento propio de este navegador y desaparece de él una vez abierto.

Si la barra de estado dice que el PDF "no llegó", la pestaña esperó demasiado o el PDF ya estaba abierto en otra pestaña: ábralo con {{ui:Open plans}}.

En sentido inverso, cuando MarkupCraft se ejecuta donde usted está y puede recibir un archivo, la barra de hojas bajo el plano tiene un botón {{ui:MarkupCraft}}: abre el PDF de la hoja en pantalla en MarkupCraft, en una pestaña nueva, para revisarlo y marcarlo.

## Buscar una hoja

- Desplácese por la lista {{ui:Sheets}} a la izquierda y haga clic en una hoja.
- Escriba en **Buscar hojas** en la parte superior de la lista para filtrar por número de hoja, nombre de archivo o etiqueta de página. El conteo junto a {{ui:Sheets}} muestra "3 de 40" mientras hay un filtro activo.
- Presione {{key:PageDown}} para la hoja siguiente y {{key:PageUp}} para la anterior. Siguen la lista tal como está filtrada.

:::mac
En un teclado de Mac sin las teclas Page Up y Page Down, presione fn con la flecha arriba o abajo.
:::

## Cómo se nombran las hojas

- Una página cuyo PDF le da una etiqueta, como `A-101`, se nombra con esa etiqueta.
- Una página sin etiqueta (o con una etiqueta que es solo su número de página) se nombra "(nombre de archivo), página (n)".
- Con varios PDF abiertos, las hojas con etiqueta también llevan el nombre del archivo: "A-101 — Arquitectónico".

Los nombres de las hojas todavía no se pueden escribir a mano.

## Recorrer una hoja

- Gire la rueda del mouse para hacer zoom en el puntero.
- Arrastre con el botón izquierdo o el central para desplazarse. Con {{ui:Auto count}}, o cuando empieza en la esquina de una marca, mantenga presionado {{key:Space}} mientras arrastra, o arrastre con el botón central.
- Presione {{key:F}} o elija {{ui:Fit page}} para ver la hoja completa; {{key:W}} o {{ui:Fit width}} ajusta su ancho.
- Presione {{key:Plus}} o {{key:=}} para acercar y {{key:Minus}} para alejar, alrededor del centro de la vista.

Cada hoja recuerda su propio zoom y posición mientras permanece abierta.

## Siguiente

Antes de medir una hoja, necesita una escala: [Fijar la escala](topic:set-the-scale).
