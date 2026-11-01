---
title: La pantalla de TakeoffCraft
summary: Un recorrido por la ventana según los nombres en pantalla - la barra de herramientas, la lista de hojas, la hoja, el panel Partidas, la tabla Cantidades y la barra de estado.
keywords: pantalla, diseño, diseños, cinta, explorador de proyecto, caja de herramientas, cuadro de información, barra de herramientas, paneles, lista de hojas, panel de partidas, cantidades, barra de estado, recorrido, interfaz
from: ab1115e0
---

TakeoffCraft llena la ventana del navegador bajo la barra de aplicación de CadCraft. De arriba abajo y de izquierda a derecha:

| Parte | Dónde | Para qué sirve |
|---|---|---|
| Barra de la aplicación | Hasta arriba | El nombre de la aplicación, la versión, {{ui:Acerca de TakeoffCraft}}, {{ui:Ayuda}} ({{key:F1}}), {{ui:Guardar para usar sin conexión}}, {{ui:Configuración}} ({{key:Mod+,}}), el botón {{ui:Pantalla completa}} y el selector de tema {{ui:Papel}} / {{ui:Modelo}}. |
| Barra de herramientas | Bajo la barra de la aplicación | Todos los comandos, en grupos: {{ui:Archivo}}, {{ui:Exportar}}, {{ui:Escala}}, {{ui:Cuantificación}}, {{ui:Edición}}, {{ui:Vista}}. |
| Hojas | Izquierda | Todas las páginas de todos los PDF abiertos, con miniatura, su escala y su número de marcas. |
| La hoja | Centro | La página abierta. Aquí es donde mide. |
| Partidas | Derecha | Sus partidas de cuantificación, la configuración de la partida seleccionada y la marca seleccionada. |
| Cantidades | Abajo | Cantidades y costos por partida o por hoja, y el total de la obra. |
| Barra de estado | Hasta abajo | La medición en vivo, los mensajes, la sugerencia de 45° y el zoom. |

## La barra de herramientas

Apunte a cualquier botón para ver qué hace y su tecla.

| Grupo | Botones |
|---|---|
| {{ui:Archivo}} | {{ui:Nueva}} (cuantificación vacía), {{ui:Abrir PDF}} ({{key:Mod+O}}), {{ui:Abrir cuantificación}} (un proyecto `.takeoff.json`), {{ui:Guardar cuantificación}} ({{key:Mod+S}}) |
| {{ui:Exportar}} | Un menú: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF marcado}} |
| {{ui:Escala}} | {{ui:Calibrar}} ({{key:K}}), {{ui:Comprobar}} ({{key:D}}) y la lista {{ui:Predefinida}} |
| {{ui:Cuantificación}} | {{ui:Seleccionar}} ({{key:V}}), {{ui:Lineal}} ({{key:L}}), {{ui:Área}} ({{key:A}}), {{ui:Círculo}} ({{key:O}}), {{ui:Arco}} ({{key:R}}, un interruptor), {{ui:Deducir}} ({{key:E}}, un interruptor), {{ui:Recorte}} ({{key:X}}), {{ui:Conteo}} ({{key:C}}), {{ui:Conteo automático}} ({{key:S}}) |
| {{ui:Edición}} | {{ui:Deshacer}} ({{key:Mod+Z}}), {{ui:Rehacer}} ({{key:Mod+Y}}), {{ui:Copiar}} ({{key:Mod+C}}), {{ui:Pegar}} ({{key:Mod+V}}) y {{ui:Más}}: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}}, {{ui:No seleccionar nada}} |
| {{ui:Vista}} | {{ui:Ajustar página}} ({{key:F}}), {{ui:Ajustar ancho}} ({{key:W}}) |

La herramienta que está usando se muestra presionada. Los botones {{ui:Arco}} y {{ui:Deducir}} se quedan presionados mientras están activados.

## Hojas (izquierda)

- **Buscar hojas** filtra la lista por nombre de hoja, nombre de archivo o etiqueta de página.
- Cada hoja muestra una miniatura (se dibuja conforme se desplaza), su nombre y su escala o **Sin escala**.
- El lado derecho de cada fila muestra cuántas marcas tiene la hoja. Mientras una partida está resaltada, muestra en su lugar cuántas marcas de esa partida hay en la hoja.
- Haga clic en una hoja para abrirla. {{key:PageDown}} y {{key:PageUp}} pasan a la hoja siguiente y a la anterior de la lista.
- Cuando una cuantificación abarca PDF que no están abiertos, una nota bajo la lista los nombra. Vea [Guardar y volver a abrir una cuantificación](topic:save-and-reopen).

Los nombres de las hojas vienen del PDF: una etiqueta de página como `A-101` se vuelve el nombre de la hoja. Una página sin etiqueta se nombra con su archivo y número de página, como "Planos, página 3". Con varios PDF abiertos, las hojas con etiqueta muestran también el nombre del archivo.

## La hoja (centro)

- La barra bajo la hoja muestra el nombre de la hoja y su escala, o "Aún sin escala: escoja una predefinida o calibre". Sus botones: {{ui:MarkupCraft}} (cuando esa aplicación puede tomar el PDF; vea [Iniciar una cuantificación y abrir un juego de planos](topic:open-plan-set)), {{ui:Comparar}} (una versión anterior de la hoja sobre esta: [Comparar una hoja revisada](topic:compare-revisions)), "(n) por revisar" (marcas señaladas, cuando las hay) y {{ui:3D}} (la [vista de revisión en 3D](topic:check-in-3d)).
- Antes de abrir cualquier PDF, el centro muestra una breve guía de cinco pasos.
- La rueda hace zoom en el puntero. Arrastre para hacer encuadre. Vea [Teclado y mouse](topic:keyboard).
- Mientras usa {{ui:Conteo automático}}, aparece una barra con sus controles en la parte superior de la hoja.

## Partidas (derecha)

Arriba, la lista {{ui:Área de licitación}}: el edificio, el piso o la fase donde van las marcas nuevas ([Áreas de licitación](topic:bid-areas)).

- {{ui:Nueva partida}} abre un formulario pequeño: un nombre, un tipo ({{ui:Lineal (longitud)}}, {{ui:Área}} o {{ui:Conteo}}) y {{ui:Agregar}}.
- La lista muestra el color, el icono de tipo, el nombre y la cantidad de cada partida. Haga clic en una partida para dibujar con ella y resaltar sus marcas en todas las hojas. Haga clic otra vez para dejar de resaltar.
- Bajo la lista, **Partida: (nombre)** es el editor de partidas: nombre, tipo, color, unidad, altura o profundidad, desperdicio, precios de material y mano de obra, los valores medidos y el {{ui:Conjunto}}. Vea [Crear partidas de cuantificación](topic:create-items).
- **Marca seleccionada** aparece cuando selecciona una marca: a qué partida pertenece, su hoja, sus mediciones y botones como {{ui:Agregar un recorte}} y {{ui:Eliminar marca}}. Con varias marcas seleccionadas se vuelve **Marcas seleccionadas**: cuántas hay de cada partida, y {{ui:Copiar}}, {{ui:Duplicar}}, {{ui:Cortar}} y {{ui:Eliminar marcas}}.
- El editor de partidas termina con {{ui:Copiar partida}} y {{ui:Duplicar partida}}: una partida con su conjunto y sus costos, sin marcas. Vea [Copiar, pegar y duplicar marcas](topic:copy-paste).

## Cantidades (abajo)

- {{ui:Por partida}} enumera cada partida y los componentes de su conjunto con cantidad, desperdicio, precios y costos extendidos. Puede escribir el desperdicio y los precios directamente en la tabla.
- {{ui:Por hoja}} enumera la cantidad de cada partida en cada hoja.
- Aparece una advertencia que empieza con **Incompleto:** cuando algo queda fuera de los totales.
- {{ui:Total de la obra}} está a la derecha del encabezado.
- El botón de flecha del extremo derecho oculta o muestra la tabla para dar más espacio a la hoja.

Vea [Leer las cantidades y el presupuesto](topic:read-quantities).

## Barra de estado (abajo)

De izquierda a derecha: la medición en vivo mientras dibuja (longitud, área, radio o el resultado de una comprobación), el cuadro {{ui:Escriba}} mientras escribe una longitud, los mensajes de TakeoffCraft, el recordatorio "Shift ajusta a 45°" (o "Ajusta a 45°; Shift libera el ángulo" cuando eso está activado en [Configuración](topic:settings)), el botón {{ui:Forzcursor}} (ajuste a las líneas del dibujo, activado cuando está resaltado; {{key:F3}}) y el porcentaje de zoom.

:::tip
Lea la barra de estado cuando algo no ocurra. TakeoffCraft explica allí por qué rechazó un clic, por ejemplo "Esta hoja aún no tiene escala".
:::

## Otros diseños

Todo lo anterior es el diseño {{ui:CadCraft clásico}}, el inicial. {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Diseño}} ofrece dos más; las mismas herramientas y teclas funcionan en los tres, y volver a elegir {{ui:CadCraft clásico}} devuelve cada control a donde estaba.

| Diseño | En TakeoffCraft |
|---|---|
| {{ui:Cinta y navegador de proyecto}} | La {{ui:Cinta de cuantificación}} en la parte superior ([Menús, teclas y mouse](topic:menus-keys-and-mouse)), una barra para la herramienta en uso, una pestaña por cada hoja que abre (el Modelo y las presentaciones de un dibujo también son hojas) con las escalas predefinidas y {{ui:Ajustar página}} bajo la hoja. El panel izquierdo contiene {{ui:Propiedades}} (la partida, nota o marca seleccionada) sobre el {{ui:Explorador de la cuantificación}}: {{ui:Hojas}} (haga clic en una para abrirla en una pestaña), {{ui:Condiciones}} (haga clic en una para dibujar con ella) y {{ui:Presupuesto}} (el total de cada partida y el total de la obra); las miniaturas están en su segunda pestaña. |
| {{ui:Caja de herramientas y cuadro de información}} | La barra de herramientas sobre la hoja, un cuadro de información con el {{ui:Área de licitación}}, la herramienta en uso o la selección y la barra de la hoja, una columna con las herramientas de cuantificación a la izquierda, una pestaña por cada hoja, y {{ui:Forzcursor}} y el zoom bajo la hoja. |

Mientras la [vista de revisión en 3D](topic:check-in-3d) está abierta, las pestañas de hojas y la barra bajo la hoja se apartan; cierre la vista 3D para volver a medir. En un teléfono siempre se usa el diseño para teléfono.

## Pantalla completa y temas

El botón {{ui:Pantalla completa}} de la barra de la aplicación, o {{key:Ctrl+Shift+F}} (Control en todas las plataformas, también en una Mac), recorre normal, pantalla completa y pantalla completa con las barras ocultas. Con las barras ocultas, mueva el puntero al borde superior para mostrarlas de nuevo.

{{ui:Papel}} es el tema claro y {{ui:Modelo}} el oscuro. En {{ui:Modelo}} el dibujo se muestra invertido (líneas claras sobre fondo oscuro) solo en pantalla; las exportaciones nunca cambian.
