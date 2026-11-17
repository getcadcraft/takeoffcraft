---
title: Teclado y ratón
summary: Cada tecla, acción del ratón, del panel táctil y de la pantalla táctil en TakeoffCraft, agrupadas, con las diferencias por plataforma.
keywords: teclas, atajos, teclas de acceso rápido, teclado, ratón, panel táctil, pantalla táctil, encuadre, zoom, rueda, clic derecho, doble clic, espacio, shift, copiar, pegar, cortar, duplicar, seleccionar todo
from: 6f2c441d
---

Las teclas de letra funcionan cuando el puntero está en cualquier parte de la página y usted no escribe en un campo. Mientras un cuadro de diálogo está abierto, se aplican sus propias teclas. Las letras funcionan con o sin {{key:Shift}}.

## Herramientas

| Tecla | Herramienta |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Circle}} |
| {{key:B}} | {{ui:Room}} (rellena un cuarto con un clic) |
| {{key:R}} | {{ui:Arc}} activado o desactivado (en Lineal, Área y Recorte) |
| {{key:E}} | {{ui:Deduct}} activado o desactivado: los siguientes segmentos de un tramo se dibujan, pero no se cuentan |
| Un dígito, `@` o `#` mientras dibuja | Abre el cuadro {{ui:Type}}: escriba una longitud o coordenadas; {{key:Enter}} coloca el punto ([Medir tramos lineales](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Cut-out}} (seleccione antes un área) |
| {{key:C}} | {{ui:Count}} |
| {{key:S}} | {{ui:Auto count}} |
| {{key:K}} | {{ui:Calibrate}} |
| {{key:D}} | {{ui:Check}} la escala |

## Mientras dibuja

| Tecla o acción | Qué hace |
|---|---|
| Clic | Coloca un punto (un punto, con Conteo). |
| {{key:P}} | Trayectoria: elige la trayectoria conectada completa de una línea del PDF, o el contorno alrededor de un clic ([Elegir las líneas del PDF](topic:pick-the-lines)). |
| {{key:F3}} | Activa o desactiva el forzcursor a las líneas del dibujo ([Forzcursor a las líneas del dibujo](topic:snap-to-the-drawing)). |
| {{key:Shift}} mantenida al hacer clic | Ajusta el segmento a 0°, 45°, 90° o 135° desde el último punto. No aplica a puntos de arco ni a círculos. |
| Doble clic | Termina un tramo, o cierra un área o un recorte. |
| {{key:Enter}} | Termina un tramo, o cierra un área o un recorte. |
| Clic derecho (sin mover) | Termina un tramo, o cierra un área o un recorte. |
| Clic en el primer punto | Cierra un área o un recorte (desde el tercer punto). |
| {{key:Backspace}} o {{key:Delete}} | Elimina el último punto (primero el punto de arco pendiente). |
| {{key:Esc}} | Descarta el punto de arco pendiente; luego cancela la marca sin terminar; luego vuelve a {{ui:Select}}. |

## Selección y edición

| Tecla o acción | Qué hace |
|---|---|
| Clic en una marca (con {{ui:Select}}) | Seleccionarla y hacer actual su partida. |
| {{key:Shift}} + clic en una marca | Agregarla a la selección, o quitarla. |
| {{key:Mod+A}} | Seleccionar todas las marcas de la hoja abierta. |
| Arrastrar un controlador de esquina | Mover ese punto ({{key:Shift}} ajusta a 45°). Funciona cuando hay una marca seleccionada. |
| {{key:Delete}} o {{key:Backspace}} | Eliminar las marcas seleccionadas (cuando no está dibujando). |
| {{key:Esc}} | No seleccionar nada: borrar la selección y la línea de comprobación. |
| {{key:Mod+Z}} | Deshacer. |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer. |

## Copiar y pegar

| Tecla | Qué hace |
|---|---|
| {{key:Mod+C}} | Copiar las marcas seleccionadas, con sus partidas. |
| {{key:Mod+X}} | Cortar: copiar las marcas seleccionadas y luego eliminarlas. |
| {{key:Mod+V}} | Pegar: la copia sigue al puntero; haga clic donde debe ir. |
| {{key:Mod+Shift+V}} | Pegar en el mismo lugar: el mismo punto de la hoja abierta. |
| {{key:Mod+D}} | Duplicar las marcas seleccionadas: la copia sigue al puntero; haga clic donde debe ir. |
| {{key:Esc}} | No colocar nada: cancelar un pegado o duplicado que está en el puntero. |

Las letras por sí solas siguen eligiendo herramientas ({{key:C}} es {{ui:Count}}, {{key:D}} es {{ui:Check}}, {{key:X}} es {{ui:Cut-out}}, {{key:V}} es {{ui:Select}}, {{key:A}} es {{ui:Area}}); solo {{key:Mod}} con ellas copia y pega. En un campo de texto, estas teclas copian y pegan texto como de costumbre. Vea [Copiar, pegar y duplicar marcas](topic:copy-paste).

:::warning
{{key:Backspace}} elimina la marca seleccionada cuando no está dibujando. Si pasa por accidente, {{key:Mod+Z}} la recupera.
:::

## Archivos

| Tecla | Qué hace |
|---|---|
| {{key:Mod+O}} | {{ui:Open plans}} |
| {{key:Mod+S}} | {{ui:Save takeoff}} |

Estas dos funcionan incluso mientras escribe en un campo.

## Vista y hojas

| Tecla o acción | Qué hace |
|---|---|
| Rueda del ratón | Hace zoom de acercar y alejar en el puntero. |
| Arrastrar (botón izquierdo, central o derecho) | Encuadrar. En {{ui:Auto count}}, arrastrar con el botón izquierdo dibuja el cuadro de búsqueda. |
| {{key:Space}} mantenida + arrastrar | Encuadrar, en cualquier herramienta. |
| {{key:F}} | {{ui:Fit page}} |
| {{key:W}} | {{ui:Fit width}} |
| {{key:Plus}} o {{key:=}} | Acercar en el centro de la vista. |
| {{key:Minus}} | Alejar en el centro de la vista. |
| {{key:PageDown}} / {{key:PageUp}} | Hoja siguiente o anterior en la lista de hojas. |
| {{key:Ctrl+Shift+F}} | Cambiar entre los modos de pantalla completa (Control en todas las plataformas, también en Mac). |
| {{key:F1}} | Abrir o cerrar esta ayuda, un panel a un lado. |
| {{key:3}} | La vista de comprobación 3D de la hoja, activada o desactivada. |

## Vista 3D

| Tecla o acción | Qué hace |
|---|---|
| Arrastrar, o arrastrar con el botón central | Orbitar. |
| {{key:Shift}} + arrastrar, o arrastrar con el botón derecho | Encuadrar. |
| Rueda del ratón | Zoom en el puntero. En un panel táctil, deslizar con dos dedos orbita y pellizcar hace zoom. |
| Clic | Seleccionar la marca bajo el puntero ({{key:Shift}} + clic agrega o quita). |
| {{key:F}} o {{key:W}} | Zoom a la extensión. |
| {{key:3}} | Volver a la hoja plana. |

Vea [Revisar la cuantificación en 3D](topic:check-in-3d).

## Conteo automático

| Tecla o acción | Qué hace |
|---|---|
| Arrastrar un cuadro | Encerrar el símbolo a buscar (inicia la búsqueda). |
| Clic en un cuadro de coincidencia | Rechazarlo, o restaurarlo. |
| {{key:Esc}} | Cancelar una búsqueda en curso, o descartar la revisión. |

## Ayuda

| Tecla | Qué hace |
|---|---|
| {{key:F1}} | Abrir o cerrar el panel de ayuda (también el botón {{ui:Help}} de la barra de aplicaciones). Funciona en todas las herramientas, incluso mientras escribe en un campo. |
| {{key:Esc}} | Cerrar el panel de ayuda. En su cuadro de búsqueda, el primer Esc borra la búsqueda. Con el panel abierto, un Esc pulsado después de hacer clic en la hoja cierra primero el panel; púlselo otra vez para cancelar en TakeoffCraft. |

:::mac
En muchos teclados de Mac, la fila superior controla el brillo y el sonido. Pulse fn con F1, o active "Usar las teclas F1, F2, etc. como teclas de función estándar" en Configuración del Sistema, en Teclado.
:::

## Cuadros de diálogo y campos

| Tecla | Qué hace |
|---|---|
| {{key:Enter}} | En un campo: aplicar el valor. En el cuadro de diálogo de {{ui:Calibrate}}: {{ui:Set the scale}}. |
| {{key:Esc}} | Cerrar un cuadro de diálogo (como {{ui:Cancel}}); cerrar el formulario {{ui:New item}}. |
| {{key:Tab}} | Pasar al siguiente campo. |

## Notas por plataforma

:::mac
- {{key:Mod}} es la tecla Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Pantalla completa es la excepción: Control+Shift+F.
- El clic derecho es un clic con dos dedos en el panel táctil, una vez activado el clic secundario en Configuración del Sistema, en Trackpad. TakeoffCraft lee solo el botón secundario; un Control-clic puede contar como clic simple y agregar un punto.
- Deslizar con dos dedos en el panel táctil hace zoom en la hoja (no la desplaza). Para encuadrar, mantenga pulsado y arrastre, o mantenga {{key:Space}} y arrastre.
- Page Up y Page Down son fn con las flechas arriba y abajo en teclados que no las tienen.
- Backspace es la tecla marcada como delete.
:::

:::windows
- {{key:Mod}} es Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- En un panel táctil de portátil, deslizar con dos dedos hace zoom en la hoja. Para encuadrar, mantenga pulsado y arrastre.
:::

:::linux
- {{key:Mod}} es Ctrl. Algunos escritorios usan atajos propios con Ctrl+Alt o Super; TakeoffCraft no usa ninguno de ellos.
- En un panel táctil, deslizar con dos dedos hace zoom en la hoja. Para encuadrar, mantenga pulsado y arrastre.
:::

:::touch
TakeoffCraft lee el tacto como un solo puntero:

- Tocar coloca un punto, selecciona una marca o agrega un punto de conteo.
- Arrastrar con un dedo encuadra la hoja (en {{ui:Auto count}} dibuja el cuadro de búsqueda).
- El pellizco para hacer zoom todavía no es compatible. Use {{ui:Fit page}} y {{ui:Fit width}}, o {{key:Plus}} y {{key:Minus}} en un teclado.
- Para cerrar un área, toque su primer punto. Para terminar un tramo, toque dos veces donde su navegador convierte un doble toque en doble clic, o pulse {{key:Enter}} en un teclado.
- No hay lectura de longitud en vivo hasta que toque, porque no hay forma de pasar el puntero sin tocar.

Hoy, la mejor forma de cuantificar es con teclado y ratón o panel táctil.
:::

## Teclas que reserva el navegador

Los navegadores reservan algunos atajos para sí mismos, y una página no puede usarlos: cerrar la pestaña ({{key:Mod+W}}), nueva pestaña o ventana ({{key:Mod+T}}, {{key:Mod+N}}) y zoom del navegador ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Por eso TakeoffCraft hace zoom en la hoja con la rueda y con las teclas {{key:Plus}} y {{key:Minus}} solas. Si pulsa {{key:Mod+Plus}} por error, crece toda la página; {{key:Mod+0}} la regresa. Vea [Teclas, ratones y paneles táctiles](common:keys).

## Dónde está Desplazar

No hay comando Desplazar: seleccione un punto de conteo y arrástrelo, o seleccione un área o una línea y arrastre sus controladores de esquina.
