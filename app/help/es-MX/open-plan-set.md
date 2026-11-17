---
title: "Iniciar una cuantificación y abrir un juego de planos"
summary: "Abra uno o varios PDF como juego de planos, oriéntese entre las hojas y muévase entre ellas."
keywords: "abrir, juego de planos, varios pdf, varios archivos, hojas, dibujos, etiquetas de página, lista de hojas, navegar, soltar, entrega, abrir en otra aplicación, marcas"
from: ed434468
---

Un juego de planos suele ser varios PDF: arquitectónico, estructural, mecánico. TakeoffCraft los abre uno al lado del otro como una sola lista de hojas, y una cuantificación puede cubrirlos todos.

## Abrir los PDF

1. Elija {{ui:Abrir planos}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}. (Los otros estilos de menú lo llaman {{ui:Abrir PDF…}}.)
2. En el cuadro de diálogo de archivos, seleccione todos los PDF del juego. Mantenga pulsado {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} para elegir varios, o {{key:Shift}} para elegir un rango.
3. Elija Abrir.
   Mientras se lee cada archivo aparece un mensaje "Abriendo (nombre)…". Luego cada página aparece en {{ui:Hojas}} y se abre la primera página del primer PDF nuevo.

También puede arrastrar los PDF desde {{pick:mac=Finder|windows=File Explorer|linux=su administrador de archivos}} y soltarlos en cualquier parte de TakeoffCraft. Mientras arrastra aparece un marco que dice "Suelte PDF, dibujos DWG o DXF, o un .takeoff.json".

Para agregar más PDF después, repita lo mismo. Los PDF que ya están abiertos se omiten.

La pantalla de inicio también lista los PDF y las cuantificaciones que abrió recientemente, en los navegadores que permiten a una página volver a abrir un archivo (Chrome y Edge). Haga clic en uno para abrirlo; el navegador puede pedir permiso antes. Vea [Sus archivos](common:your-files).

:::note
No se sube nada. El navegador lee los PDF en su computadora, y se quitan de TakeoffCraft al cerrar la pestaña o al elegir {{ui:Nueva}}.
:::

## Dibujos junto con PDF

{{ui:Abrir planos}} también acepta dibujos DWG y DXF, solos o junto con PDF: el espacio modelo y las presentaciones de cada dibujo se vuelven hojas en la misma lista. Vea [Abrir un dibujo DWG o DXF](topic:open-a-drawing), y luego [Contar desde un dibujo](topic:count-from-a-drawing).

## Un PDF entregado desde otra aplicación

Otra aplicación de la familia puede entregarle el PDF que tiene abierto: abre TakeoffCraft en una pestaña nueva y el PDF se abre ahí como si lo hubiera soltado. La barra de estado dice "Abierto (nombre), entregado desde (aplicación). El archivo original no cambió." No se sube nada; el archivo pasa por el almacenamiento propio de este navegador y sale de él en cuanto se abre.

Si la barra de estado dice que el PDF "no llegó", la pestaña esperó demasiado o el PDF ya se abrió en otra pestaña: ábralo con {{ui:Abrir planos}}.

En sentido contrario, cuando MarkupCraft se ejecuta donde usted se encuentra y puede recibir un archivo, la barra de hojas bajo el dibujo tiene un botón {{ui:MarkupCraft}}: abre el PDF de la hoja en pantalla en MarkupCraft, en una pestaña nueva, para revisarlo y marcarlo.

## Buscar una hoja

- Desplace la lista {{ui:Hojas}} a la izquierda y haga clic en una hoja.
- Escriba en **Buscar hojas**, arriba de la lista, para filtrar por número de hoja, nombre de archivo o etiqueta de página. El conteo junto a {{ui:Hojas}} muestra "3 de 40" mientras hay un filtro.
- Pulse {{key:PageDown}} para la siguiente hoja y {{key:PageUp}} para la anterior. Siguen la lista tal como está filtrada.

:::mac
En un teclado Mac sin las teclas Page Up y Page Down, pulse fn con la flecha arriba o abajo.
:::

## Cómo se nombran las hojas

- Una página cuyo PDF le da una etiqueta, como `A-101`, se nombra con esa etiqueta.
- Una página sin etiqueta (o cuya etiqueta es solo su número de página) se nombra "(nombre de archivo), página (n)".
- Con varios PDF abiertos, las hojas con etiqueta también llevan el nombre del archivo: "A-101 — Arquitectónico".

Los nombres de las hojas todavía no se pueden escribir a mano.

## Recorrer una hoja

- Gire la rueda del ratón para hacer zoom en el puntero.
- Arrastre con el botón izquierdo o el central para encuadrar. Con {{ui:Conteo automático}}, o cuando empieza en la esquina de una marca, mantenga pulsado {{key:Space}} mientras arrastra, o arrastre con el botón central.
- Pulse {{key:F}} o elija {{ui:Ajustar página}} para ver la hoja completa; {{key:W}} o {{ui:Ajustar ancho}} ajusta su ancho.
- Pulse {{key:Plus}} o {{key:=}} para acercar, y {{key:Minus}} para alejar, alrededor del centro de la vista.

Cada hoja recuerda su propio zoom y su posición mientras esté abierta.

## Siguiente

Antes de medir una hoja, necesita una escala: [Definir la escala](topic:set-the-scale).
