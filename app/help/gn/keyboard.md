---
title: Teclado y mouse
summary: Cada tecla, mouse, trackpad y acción táctil en TakeoffCraft, agrupados, con las diferencias por plataforma.
keywords: teclas, atajos, teclas rápidas, teclado, mouse, trackpad, táctil, desplazar, zoom, rueda, clic derecho, doble clic, espacio, shift, copiar, pegar, cortar, duplicar, seleccionar todo
from: 6f2c441d
---

Las teclas de letras funcionan cuando el puntero está en cualquier parte de la página y no estás escribiendo en un campo. Mientras un diálogo está abierto, aplican sus propias teclas. Las letras funcionan con o sin {{key:Shift}}.

## Herramientas

| Tecla | Herramienta |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:L}} | {{ui:Lineal}} |
| {{key:A}} | {{ui:Área}} |
| {{key:O}} | {{ui:Círculo}} |
| {{key:B}} | {{ui:Ambiente}} (rellena un ambiente con un clic) |
| {{key:R}} | {{ui:Arco}} activado o desactivado (en Lineal, Área y Recorte) |
| {{key:E}} | {{ui:Descontar}} activado o desactivado: los siguientes segmentos del tramo se dibujan pero no se cuentan |
| Un dígito, `@` o `#` mientras dibujás | Abre el cuadro {{ui:Tipo}}: escribí una longitud o coordenadas, {{key:Enter}} coloca el punto ([Medir tramos lineales](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Recorte}} (seleccioná primero un área) |
| {{key:C}} | {{ui:Contar}} |
| {{key:S}} | {{ui:Conteo automático}} |
| {{key:K}} | {{ui:Calibrar}} |
| {{key:D}} | {{ui:Verificar}} la escala |

## Mientras dibujás

| Tecla o acción | Qué hace |
|---|---|
| Clic | Coloca un punto (un punto, con Contar). |
| {{key:P}} | Trayecto: elegí todo el trayecto conectado de una línea del PDF, o el contorno alrededor de un clic ([Elegir las líneas del PDF](topic:pick-the-lines)). |
| {{key:F3}} | Ajustar a las líneas del plano activado o desactivado ([Ajustar a las líneas del plano](topic:snap-to-the-drawing)). |
| {{key:Shift}} mantenido mientras hacés clic | Ajusta el segmento a 0°, 45°, 90° o 135° desde el último punto. No aplica a puntos de arco ni a círculos. |
| Doble clic | Termina un tramo, o cierra un área o un recorte. |
| {{key:Enter}} | Termina un tramo, o cierra un área o un recorte. |
| Clic derecho (sin mover) | Termina un tramo, o cierra un área o un recorte. |
| Clic en el primer punto | Cierra un área o un recorte (desde el tercer punto). |
| {{key:Backspace}} o {{key:Delete}} | Quita el último punto (primero el punto de arco pendiente). |
| {{key:Esc}} | Descarta el punto de arco pendiente; después cancela la marca sin terminar; después vuelve a {{ui:Seleccionar}}. |

## Selección y edición

| Tecla o acción | Qué hace |
|---|---|
| Clic en una marca (herramienta Seleccionar) | La selecciona y hace actual su ítem. |
| {{key:Shift}} + clic en una marca | La agrega a la selección, o la saca. |
| {{key:Mod+A}} | Selecciona todas las marcas de la hoja abierta. |
| Arrastrar un controlador de esquina | Mueve ese punto ({{key:Shift}} ajusta a 45°). Funciona cuando hay una marca seleccionada. |
| {{key:Delete}} o {{key:Backspace}} | Elimina las marcas seleccionadas (cuando no estás dibujando). |
| {{key:Esc}} | No selecciona nada: borra la selección y la línea de verificación. |
| {{key:Mod+Z}} | Deshacer. |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer. |

## Copiar y pegar

| Tecla | Qué hace |
|---|---|
| {{key:Mod+C}} | Copia las marcas seleccionadas, con sus ítems. |
| {{key:Mod+X}} | Cortar: copia las marcas seleccionadas y después las elimina. |
| {{key:Mod+V}} | Pegar: la copia sigue al puntero; hacé clic donde debe ir. |
| {{key:Mod+Shift+V}} | Pegar en el mismo lugar: en el mismo punto de la hoja abierta. |
| {{key:Mod+D}} | Duplicar las marcas seleccionadas: la copia sigue al puntero; hacé clic donde debe ir. |
| {{key:Esc}} | No deja nada: cancela un pegado o duplicado que está en el puntero. |

Las letras solas siguen eligiendo herramientas ({{key:C}} es {{ui:Contar}}, {{key:D}} es {{ui:Verificar}}, {{key:X}} es {{ui:Recorte}}, {{key:V}} es {{ui:Seleccionar}}, {{key:A}} es {{ui:Área}}); solo {{key:Mod}} con ellas copia y pega. En un campo de texto estas teclas copian y pegan texto como de costumbre. Ver [Copiar, pegar y duplicar marcas](topic:copy-paste).

:::warning
{{key:Backspace}} elimina la marca seleccionada cuando no estás dibujando. Si pasa por error, {{key:Mod+Z}} la devuelve.
:::

## Archivos

| Tecla | Qué hace |
|---|---|
| {{key:Mod+O}} | {{ui:Abrir planos}} |
| {{key:Mod+S}} | {{ui:Guardar cómputo}} |

Estas dos funcionan aunque estés escribiendo en un campo.

## Vista y hojas

| Tecla o acción | Qué hace |
|---|---|
| Rueda del mouse | Acerca y aleja en el puntero. |
| Arrastrar (botón izquierdo, central o derecho) | Desplaza. En {{ui:Conteo automático}}, un arrastre con el izquierdo dibuja el cuadro de búsqueda. |
| {{key:Space}} mantenido + arrastrar | Desplaza, en cualquier herramienta. |
| {{key:F}} | {{ui:Ajustar página}} |
| {{key:W}} | {{ui:Ajustar ancho}} |
| {{key:Plus}} o {{key:=}} | Acerca en el centro de la vista. |
| {{key:Minus}} | Aleja en el centro de la vista. |
| {{key:PageDown}} / {{key:PageUp}} | Hoja siguiente o anterior en la lista de hojas. |
| {{key:Ctrl+Shift+F}} | Cambia entre los modos de pantalla completa (Control en todas las plataformas, también en Mac). |
| {{key:F1}} | Abre o cierra esta ayuda, un panel al costado. |
| {{key:3}} | La vista 3D de verificación de la hoja, activada o desactivada. |

## Vista 3D

| Tecla o acción | Qué hace |
|---|---|
| Arrastrar, o arrastrar con el botón central | Orbitar. |
| {{key:Shift}} + arrastrar, o arrastrar con el botón derecho | Desplazar. |
| Rueda del mouse | Acerca en el puntero. En un trackpad, deslizar con dos dedos orbita y pellizcar acerca. |
| Clic | Selecciona la marca bajo el puntero ({{key:Shift}} + clic la agrega o la saca). |
| {{key:F}} o {{key:W}} | Zoom a la extensión. |
| {{key:3}} | Vuelve a la hoja plana. |

Ver [Verificar el cómputo en 3D](topic:check-in-3d).

## Conteo automático

| Tecla o acción | Qué hace |
|---|---|
| Arrastrar un cuadro | Encierra el símbolo a buscar (inicia la búsqueda). |
| Clic en un cuadro de coincidencia | Lo rechaza, o lo restaura. |
| {{key:Esc}} | Cancela una búsqueda en curso, o descarta la revisión. |

## Ayuda

| Tecla | Qué hace |
|---|---|
| {{key:F1}} | Abre o cierra el panel de ayuda (también el botón {{ui:Ayuda}} de la barra de la app). Funciona en todas las herramientas, aunque estés escribiendo en un campo. |
| {{key:Esc}} | Cierra el panel de ayuda. En su cuadro de búsqueda, el primer Esc borra la búsqueda. Con el panel abierto, un Esc pulsado después de hacer clic en la hoja cierra primero el panel; pulsalo otra vez para cancelar en TakeoffCraft. |

:::mac
En muchos teclados de Mac la fila superior controla el brillo y el sonido. Presioná fn con F1, o activá "Usar las teclas F1, F2, etc. como teclas de función estándar" en Configuración del sistema, en Teclado.
:::

## Diálogos y campos

| Tecla | Qué hace |
|---|---|
| {{key:Enter}} | En un campo: aplica el valor. En el diálogo de calibrar: {{ui:Fijar la escala}}. |
| {{key:Esc}} | Cierra un diálogo (como {{ui:Cancelar}}); cierra el formulario {{ui:Nuevo ítem}}. |
| {{key:Tab}} | Pasa al siguiente campo. |

## Notas por plataforma

:::mac
- {{key:Mod}} es la tecla Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Pantalla completa es la excepción: Control+Shift+F.
- El clic derecho es un clic con dos dedos en el trackpad, una vez activado el clic secundario en Configuración del sistema, en Trackpad. TakeoffCraft lee solo el botón secundario; un Control-clic puede contar como clic simple y agregar un punto.
- Desplazarse con dos dedos en el trackpad hace zoom en la hoja (no la desplaza). Para desplazar, mantené presionado y arrastrá, o mantené Space y arrastrá.
- Page Up y Page Down son fn con las flechas arriba y abajo en teclados que no las tienen.
- Backspace es la tecla que dice delete.
:::

:::windows
- {{key:Mod}} es Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- En el touchpad de una laptop, desplazarse con dos dedos hace zoom en la hoja. Para desplazar, mantené presionado y arrastrá.
:::

:::linux
- {{key:Mod}} es Ctrl. Algunos escritorios usan atajos propios con Ctrl+Alt o Super; TakeoffCraft no usa ninguno de ellos.
- En un touchpad, desplazarse con dos dedos hace zoom en la hoja. Para desplazar, mantené presionado y arrastrá.
:::

:::touch
TakeoffCraft lee el táctil como un solo puntero:

- Tocar coloca un punto, selecciona una marca o agrega un punto de conteo.
- Arrastrar con un dedo desplaza la hoja (en {{ui:Conteo automático}} dibuja el cuadro de búsqueda).
- El pellizco para hacer zoom todavía no está disponible. Usá {{ui:Ajustar página}} y {{ui:Ajustar ancho}}, o {{key:Plus}} y {{key:Minus}} en un teclado.
- Para cerrar un área, tocá su primer punto. Para terminar un tramo, tocá dos veces donde el navegador convierta el doble toque en doble clic, o presioná {{key:Enter}} en un teclado.
- No hay lectura de longitud en vivo hasta que tocás, porque no hay puntero que pase por encima.

Hoy, un teclado con mouse o trackpad es la mejor forma de hacer el cómputo.
:::

## Teclas que el navegador se reserva

Los navegadores se reservan algunos atajos y una página no puede usarlos: cerrar la pestaña ({{key:Mod+W}}), nueva pestaña o ventana ({{key:Mod+T}}, {{key:Mod+N}}) y el zoom del navegador ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Por eso TakeoffCraft hace zoom en la hoja con la rueda y con las teclas sueltas {{key:Plus}} y {{key:Minus}}. Si presionás {{key:Mod+Plus}} por error, toda la página se agranda; {{key:Mod+0}} la vuelve a su tamaño. Ver [Teclas, mouse y trackpads](common:keys).

## Dónde está Mover

No hay un comando Mover: seleccioná un punto de conteo y arrastralo, o seleccioná un área o una línea y arrastrá sus controladores de esquina.
