---
title: Teclado y ratón
summary: Todas las teclas, acciones del ratón, del panel táctil y táctiles de TakeoffCraft, agrupadas, con las diferencias entre plataformas.
keywords: teclas, atajos, teclas de acceso rápido, teclado, ratón, panel táctil, táctil, desplazar, zoom, rueda, clic derecho, doble clic, espacio, Shift, copiar, pegar, cortar, duplicar, seleccionar todo
from: 6f2c441d
---

Las teclas de letras funcionan cuando el puntero está en cualquier parte de la página y no está escribiendo en un campo. Mientras un cuadro de diálogo está abierto, se aplican sus propias teclas. Las letras funcionan con o sin {{key:Shift}}.

## Herramientas

| Tecla | Herramienta |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:L}} | {{ui:Lineal}} |
| {{key:A}} | {{ui:Área}} |
| {{key:O}} | {{ui:Círculo}} |
| {{key:B}} | {{ui:Sala}} (rellena una sala con un clic) |
| {{key:R}} | {{ui:Arco}} activado o desactivado (en Lineal, Área y Recorte) |
| {{key:E}} | {{ui:Descontar}} activado o desactivado: los siguientes segmentos de un tramo se dibujan pero no se cuentan |
| Un dígito, `@` o `#` mientras dibuja | Abre el cuadro {{ui:Escribir}}: escriba una longitud o coordenadas; {{key:Enter}} coloca el punto ([Medir tramos lineales](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Recorte}} (seleccione antes un área) |
| {{key:C}} | {{ui:Recuento}} |
| {{key:S}} | {{ui:Autorrecuento}} |
| {{key:K}} | {{ui:Calibrar}} |
| {{key:D}} | {{ui:Comprobar}} la escala |

## Mientras dibuja

| Tecla o acción | Qué hace |
|---|---|
| Clic | Coloca un punto (un punto, con Recuento). |
| {{key:P}} | Trayectoria: elige toda la trayectoria conectada de una línea del PDF, o el contorno alrededor de un clic ([Elegir las líneas del PDF](topic:pick-the-lines)). |
| {{key:F3}} | Ajustar a las líneas del plano activado o desactivado ([Ajustar a las líneas del plano](topic:snap-to-the-drawing)). |
| Mantenga pulsado {{key:Shift}} mientras hace clic | Ajusta el segmento a 0°, 45°, 90° o 135° desde el último punto. No sirve para puntos de arco ni para círculos. |
| Doble clic | Termina un tramo, o cierra un área o un recorte. |
| {{key:Enter}} | Termina un tramo, o cierra un área o un recorte. |
| Clic derecho (sin mover) | Termina un tramo, o cierra un área o un recorte. |
| Clic en el primer punto | Cierra un área o un recorte (a partir del tercer punto). |
| {{key:Backspace}} o {{key:Delete}} | Elimina el último punto (primero, el punto de arco pendiente). |
| {{key:Esc}} | Descarta el punto de arco pendiente; después, cancela la marca sin terminar; después, vuelve a {{ui:Seleccionar}}. |

## Selección y edición

| Tecla o acción | Qué hace |
|---|---|
| Clic en una marca (herramienta Seleccionar) | La selecciona y hace actual su partida. |
| {{key:Shift}} + clic en una marca | La añade a la selección, o la quita. |
| {{key:Mod+A}} | Selecciona todas las marcas de la hoja abierta. |
| Arrastre un tirador de esquina | Mueve ese punto ({{key:Shift}} ajusta a 45°). Funciona cuando hay una marca seleccionada. |
| {{key:Delete}} o {{key:Backspace}} | Borra las marcas seleccionadas (cuando no está dibujando). |
| {{key:Esc}} | No selecciona nada: borra la selección y la línea de comprobación. |
| {{key:Mod+Z}} | Deshacer. |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer. |

## Copiar y pegar

| Tecla | Qué hace |
|---|---|
| {{key:Mod+C}} | Copia las marcas seleccionadas, con sus partidas. |
| {{key:Mod+X}} | Cortar: copia las marcas seleccionadas y después las borra. |
| {{key:Mod+V}} | Pegar: la copia sigue al puntero; haga clic donde debe ir. |
| {{key:Mod+Shift+V}} | Pegar en su sitio: el mismo lugar de la hoja abierta. |
| {{key:Mod+D}} | Duplicar las marcas seleccionadas: la copia sigue al puntero; haga clic donde debe ir. |
| {{key:Esc}} | No deja nada: cancela un pegado o un duplicado que está en el puntero. |

Las letras por sí solas siguen eligiendo herramientas ({{key:C}} es {{ui:Recuento}}, {{key:D}} es {{ui:Comprobar}}, {{key:X}} es {{ui:Recorte}}, {{key:V}} es {{ui:Seleccionar}}, {{key:A}} es {{ui:Área}}); solo {{key:Mod}} junto con ellas copia y pega. En un campo de texto, estas teclas copian y pegan texto como de costumbre. Consulte [Copiar, pegar y duplicar marcas](topic:copy-paste).

:::warning
{{key:Backspace}} borra la marca seleccionada cuando no está dibujando. Si ocurre por accidente, {{key:Mod+Z}} la recupera.
:::

## Archivos

| Tecla | Qué hace |
|---|---|
| {{key:Mod+O}} | {{ui:Abrir PDF}} |
| {{key:Mod+S}} | {{ui:Guardar medición}} |

Estas dos funcionan incluso mientras escribe en un campo.

## Vista y hojas

| Tecla o acción | Qué hace |
|---|---|
| Rueda del ratón | Acerca y aleja en el puntero. |
| Arrastre (botón izquierdo, central o derecho) | Desplaza la hoja. En {{ui:Autorrecuento}}, un arrastre con el botón izquierdo dibuja el cuadro de búsqueda. |
| {{key:Space}} mantenido + arrastre | Desplaza, con cualquier herramienta. |
| {{key:F}} | {{ui:Ajustar página}} |
| {{key:W}} | {{ui:Ajustar ancho}} |
| {{key:Plus}} o {{key:=}} | Acerca en el centro de la vista. |
| {{key:Minus}} | Aleja en el centro de la vista. |
| {{key:PageDown}} / {{key:PageUp}} | Hoja siguiente o anterior en la lista de hojas. |
| {{key:Ctrl+Shift+F}} | Cambia entre los modos de pantalla completa (Control en todas las plataformas, también en Mac). |
| {{key:F1}} | Abre o cierra esta ayuda, un panel lateral. |
| {{key:3}} | Vista de comprobación 3D de la hoja, activada o desactivada. |

## Vista 3D

| Tecla o acción | Qué hace |
|---|---|
| Arrastre, o arrastre con el botón central | Orbita. |
| {{key:Shift}} + arrastre, o arrastre con el botón derecho | Desplaza. |
| Rueda del ratón | Acerca en el puntero. En un panel táctil, deslizar con dos dedos orbita y un pellizco acerca. |
| Clic | Selecciona la marca bajo el puntero ({{key:Shift}} + clic la añade o la quita). |
| {{key:F}} o {{key:W}} | Zoom de extensión. |
| {{key:3}} | Vuelve a la hoja plana. |

Consulte [Comprobar la medición en 3D](topic:check-in-3d).

## Autorrecuento

| Tecla o acción | Qué hace |
|---|---|
| Arrastre un cuadro | Enmarca el símbolo que buscar (inicia la búsqueda). |
| Clic en un cuadro de coincidencia | Lo rechaza o lo restaura. |
| {{key:Esc}} | Cancela una búsqueda en curso, o descarta la revisión. |

## Ayuda

| Tecla | Qué hace |
|---|---|
| {{key:F1}} | Abre o cierra el panel de ayuda (también el botón {{ui:Ayuda}} de la barra de aplicación). Funciona con todas las herramientas, incluso mientras escribe en un campo. |
| {{key:Esc}} | Cierra el panel de ayuda. En su cuadro de búsqueda, el primer Esc borra la búsqueda. Con el panel abierto, un Esc pulsado después de hacer clic en la hoja cierra primero el panel; púlselo de nuevo para cancelar en TakeoffCraft. |

:::mac
En muchos teclados de Mac, la fila superior controla el brillo y el sonido. Pulse fn con F1, o active «Usar las teclas F1, F2, etc. como teclas de función estándar» en Ajustes del Sistema, en Teclado.
:::

## Cuadros de diálogo y campos

| Tecla | Qué hace |
|---|---|
| {{key:Enter}} | En un campo: aplica el valor. En el cuadro de calibrar: {{ui:Definir la escala}}. |
| {{key:Esc}} | Cierra un cuadro de diálogo (como {{ui:Cancelar}}); cierra el formulario de {{ui:Nueva partida}}. |
| {{key:Tab}} | Pasa al campo siguiente. |

## Notas por plataforma

:::mac
- {{key:Mod}} es la tecla Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. La pantalla completa es la excepción: Control+Shift+F.
- El clic derecho es un clic con dos dedos en el panel táctil, una vez activado el clic secundario en Ajustes del Sistema, en Trackpad. TakeoffCraft lee solo el botón secundario; un Control-clic puede contar como un clic normal y añadir un punto.
- Deslizar con dos dedos en el panel táctil amplía la hoja (no la desplaza). Para desplazarla, pulse y arrastre, o mantenga pulsado Espacio y arrastre.
- Re Pág y Av Pág son fn con las flechas arriba y abajo en los teclados que no las tienen.
- {{key:Backspace}} es la tecla con la etiqueta «delete».
:::

:::windows
- {{key:Mod}} es Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- En un panel táctil de portátil, deslizar con dos dedos amplía la hoja. Para desplazarla, pulse y arrastre.
:::

:::linux
- {{key:Mod}} es Ctrl. Algunos escritorios tienen atajos propios con Ctrl+Alt o Super; TakeoffCraft no usa ninguno de ellos.
- En un panel táctil, deslizar con dos dedos amplía la hoja. Para desplazarla, pulse y arrastre.
:::

:::touch
TakeoffCraft lee el tacto como un único puntero:

- Un toque coloca un punto, selecciona una marca o añade un punto de recuento.
- Arrastrar con un dedo desplaza la hoja (en {{ui:Autorrecuento}} dibuja el cuadro de búsqueda).
- El pellizco para ampliar todavía no es compatible. Utilice {{ui:Ajustar página}} y {{ui:Ajustar ancho}}, o {{key:Plus}} y {{key:Minus}} en un teclado.
- Para cerrar un área, toque su primer punto. Para terminar un tramo, toque dos veces donde el navegador convierte un doble toque en doble clic, o pulse {{key:Enter}} en un teclado.
- No hay lectura de longitud en vivo hasta que toque, porque no hay un puntero que sobrevuele la hoja.

Hoy, para medir, es mejor un teclado con ratón o con panel táctil.
:::

## Teclas que conserva el navegador

Los navegadores reservan algunos atajos para sí mismos, y una página no puede usarlos: cerrar la pestaña ({{key:Mod+W}}), nueva pestaña o ventana ({{key:Mod+T}}, {{key:Mod+N}}) y el zoom del navegador ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Por eso TakeoffCraft amplía la hoja con la rueda y con las teclas {{key:Plus}} y {{key:Minus}} solas. Si pulsa {{key:Mod+Plus}} por error, crece toda la página; {{key:Mod+0}} la devuelve a su tamaño. Consulte [Teclas, ratones y paneles táctiles](common:keys).

## Dónde está Mover

No existe un comando Mover: seleccione un punto de recuento y arrástrelo, o seleccione un área o una línea y arrastre sus tiradores de esquina.
