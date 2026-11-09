---
title: La pantalla de TakeoffCraft
summary: Un recorrido por la ventana según el nombre en pantalla - la barra, la lista de hojas, la hoja, el panel de Ítems, la tabla de Cantidades y la barra de estado.
keywords: pantalla, diseño, disposiciones, cinta, explorador de proyecto, caja de herramientas, cuadro de información, barra, paneles, lista de hojas, panel de ítems, cantidades, barra de estado, recorrido, interfaz
from: ab1115e0
---

TakeoffCraft llena la ventana del navegador debajo de la barra de aplicación de CadCraft. De arriba abajo e izquierda a derecha:

| Parte | Dónde | Para qué sirve |
|---|---|---|
| Barra de aplicación | Arriba de todo | El nombre de la aplicación, la versión, {{ui:About TakeoffCraft}}, {{ui:Help}} ({{key:F1}}), {{ui:Save for offline}}, {{ui:Settings}} ({{key:Mod+,}}), el botón {{ui:Full screen}} y el selector de tema {{ui:Paper}} / {{ui:Model}}. |
| Barra de herramientas | Debajo de la barra de aplicación | Cada comando, por grupos: {{ui:File}}, {{ui:Export}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Edit}}, {{ui:View}}. |
| Hojas | Izquierda | Cada página de cada PDF abierto, con miniatura, su escala y su cantidad de marcas. |
| La hoja | Centro | La página abierta. Mides aquí. |
| Ítems | Derecha | Tus ítems de cómputo, la configuración del ítem seleccionado y la marca seleccionada. |
| Cantidades | Abajo | Cantidades y costos por ítem o por hoja, y el total de la obra. |
| Barra de estado | Abajo de todo | La medición en vivo, mensajes, la pista de 45° y el zoom. |

## La barra de herramientas

Pasa el puntero sobre cualquier botón para ver qué hace y su tecla.

| Grupo | Botones |
|---|---|
| {{ui:File}} | {{ui:New}} (cómputo vacío), {{ui:Open PDFs}} ({{key:Mod+O}}), {{ui:Open takeoff}} (un proyecto `.takeoff.json`), {{ui:Save takeoff}} ({{key:Mod+S}}) |
| {{ui:Export}} | Un menú: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Marked PDF}} |
| {{ui:Scale}} | {{ui:Calibrate}} ({{key:K}}), {{ui:Check}} ({{key:D}}), y la lista {{ui:Preset}} |
| {{ui:Takeoff}} | {{ui:Select}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Area}} ({{key:A}}), {{ui:Circle}} ({{key:O}}), {{ui:Arc}} ({{key:R}}, un interruptor), {{ui:Deduct}} ({{key:E}}, un interruptor), {{ui:Cut-out}} ({{key:X}}), {{ui:Count}} ({{key:C}}), {{ui:Auto count}} ({{key:S}}) |
| {{ui:Edit}} | {{ui:Undo}} ({{key:Mod+Z}}), {{ui:Redo}} ({{key:Mod+Y}}), {{ui:Copy}} ({{key:Mod+C}}), {{ui:Paste}} ({{key:Mod+V}}), y {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |
| {{ui:View}} | {{ui:Fit page}} ({{key:F}}), {{ui:Fit width}} ({{key:W}}) |

La herramienta que usas se muestra presionada. Los botones {{ui:Arc}} y {{ui:Deduct}} quedan presionados mientras estén activados.

## Hojas (izquierda)

- **Buscar hojas** filtra la lista por nombre de hoja, nombre de archivo o etiqueta de página.
- Cada hoja muestra una miniatura (dibujada al desplazarte), su nombre, y su escala o **No scale**.
- El lado derecho de cada fila muestra cuántas marcas tiene la hoja. Mientras un ítem está resaltado, muestra en cambio cuántas marcas de ese ítem hay en la hoja.
- Haz clic en una hoja para abrirla. {{key:PageDown}} y {{key:PageUp}} pasan a la hoja siguiente y anterior de la lista.
- Cuando un cómputo cubre PDF que no están abiertos, una nota debajo de la lista los nombra. Ver [Guardar y reabrir un cómputo](topic:save-and-reopen).

Los nombres de hoja vienen del PDF: una etiqueta de página como `A-101` se convierte en el nombre de la hoja. Una página sin etiqueta toma el nombre de su archivo y su número de página, como "Plans, page 3". Con varios PDF abiertos, las hojas con etiqueta también muestran el nombre del archivo.

## La hoja (centro)

- La barra debajo de la hoja muestra el nombre de la hoja y su escala, o "No scale yet: pick a preset or calibrate". Sus botones: {{ui:MarkupCraft}} (cuando esa aplicación puede tomar el PDF; ver [Iniciar un cómputo y abrir un juego de planos](topic:open-plan-set)), {{ui:Compare}} (una versión anterior de la hoja encima de esta: [Comparar una hoja revisada](topic:compare-revisions)), "(n) to check" (marcas señaladas, cuando hay), y {{ui:3D}} (la [vista de verificación 3D](topic:check-in-3d)).
- Antes de abrir cualquier PDF, el centro muestra una guía corta de cinco pasos.
- La rueda hace zoom en el puntero. Arrastra para desplazarte. Ver [Teclado y ratón](topic:keyboard).
- Mientras usas {{ui:Auto count}}, aparece una barra con sus controles en la parte superior de la hoja.

## Ítems (derecha)

Arriba, la lista {{ui:Bid area}}: el edificio, piso o fase donde van las marcas nuevas ([Áreas de oferta](topic:bid-areas)).

- {{ui:New item}} abre un pequeño formulario: un nombre, un tipo ({{ui:Linear (length)}}, {{ui:Area}} o {{ui:Count}}) y {{ui:Add}}.
- La lista muestra el color de cada ítem, su icono de tipo, nombre y cantidad. Haz clic en un ítem para dibujar con él y resaltar sus marcas en cada hoja. Haz clic otra vez para dejar de resaltar.
- Debajo de la lista, **Item: (name)** es el editor de ítem: nombre, tipo, color, unidad, altura o profundidad, desperdicio, tarifas de material y mano de obra, los valores medidos, y el {{ui:Assembly}}. Ver [Crear ítems de cómputo](topic:create-items).
- **Selected mark** aparece cuando seleccionas una marca: a qué ítem pertenece, su hoja, sus mediciones, y botones como {{ui:Add a cut-out}} y {{ui:Delete mark}}. Con varias marcas seleccionadas se convierte en **Selected marks**: cuántas de cada ítem, y {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} y {{ui:Delete marks}}.
- El editor de ítem termina con {{ui:Copy item}} y {{ui:Duplicate item}}: un ítem con su conjunto y costos, sin marcas. Ver [Copiar, pegar y duplicar marcas](topic:copy-paste).

## Cantidades (abajo)

- {{ui:By item}} lista cada ítem y sus componentes de conjunto con cantidad, desperdicio, tarifas y costos extendidos. Puedes escribir desperdicio y tarifas directamente en la tabla.
- {{ui:By sheet}} lista la cantidad de cada ítem en cada hoja.
- Aparece un aviso que empieza con **Incomplete:** cuando algo queda fuera de los totales.
- {{ui:Job total}} está a la derecha del encabezado.
- El botón de flecha en el extremo derecho oculta o muestra la tabla para dar más espacio a la hoja.

Ver [Leer cantidades y el presupuesto](topic:read-quantities).

## Barra de estado (abajo)

De izquierda a derecha: la medición en vivo mientras dibujas (longitud, área, radio o resultado de verificación), la casilla {{ui:Type}} mientras escribes una longitud, mensajes de TakeoffCraft, el recordatorio "Shift snaps to 45°" (o "Snaps to 45°; Shift frees the angle" cuando eso está activado en [Configuración](topic:settings)), el botón {{ui:Snap}} (ajuste a las líneas del plano, activado cuando está resaltado; {{key:F3}}), y el porcentaje de zoom.

:::tip
Lee la barra de estado cuando algo no pase. TakeoffCraft explica ahí por qué rechazó un clic, por ejemplo "This sheet has no scale yet".
:::

## Otras disposiciones

Todo lo de arriba es la disposición {{ui:CadCraft classic}}, la de inicio. {{ui:Settings}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Layout}} ofrece dos más; las mismas herramientas y teclas funcionan en las tres, y elegir {{ui:CadCraft classic}} otra vez devuelve cada control a su lugar.

| Disposición | En TakeoffCraft |
|---|---|
| {{ui:Ribbon and project browser}} | La {{ui:Takeoff ribbon}} arriba ([Menús, teclas y ratón](topic:menus-keys-and-mouse)), una barra para la herramienta en uso, una pestaña para cada hoja abierta (el Model y los diseños de un plano también son hojas) con los preajustes de escala y {{ui:Fit page}} debajo de la hoja. El panel izquierdo tiene {{ui:Properties}} (el ítem, nota o marca seleccionada) sobre el {{ui:Takeoff browser}}: {{ui:Sheets}} (haz clic en una para abrirla en una pestaña), {{ui:Conditions}} (haz clic en una para dibujar con ella) y {{ui:Estimate}} (el total de cada ítem y el total de la obra); las miniaturas son su segunda pestaña. |
| {{ui:Toolbox and info box}} | La barra de herramientas sobre la hoja, un cuadro de información con el {{ui:Bid area}}, la herramienta en uso o la selección y la barra de la hoja, una columna de herramientas de cómputo a la izquierda, una pestaña para cada hoja, y {{ui:Snap}} y el zoom debajo de la hoja. |

Mientras la [vista de verificación 3D](topic:check-in-3d) está abierta, las pestañas de hojas y la barra debajo de la hoja se apartan; cierra la vista 3D para medir otra vez. En un teléfono siempre se usa la disposición para teléfono.

## Pantalla completa y temas

El botón {{ui:Full screen}} en la barra de aplicación, o {{key:Ctrl+Shift+F}} (Control en todas las plataformas, también en Mac), recorre normal, pantalla completa y pantalla completa con las barras ocultas. Con las barras ocultas, mueve el puntero al borde superior para volver a mostrarlas.

{{ui:Paper}} es el tema claro y {{ui:Model}} el oscuro. En {{ui:Model}} el plano se muestra invertido (líneas claras sobre fondo oscuro) solo en pantalla; las exportaciones nunca cambian.
