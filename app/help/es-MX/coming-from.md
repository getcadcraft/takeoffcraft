---
title: Viene de otro software de cuantificación
summary: Cómo se corresponden los hábitos de los programas especializados en cuantificación y de las herramientas de marcado de PDF con TakeoffCraft, y las diferencias que suelen causar confusión.
keywords: cambiar, migrar, condiciones, partes, herramientas de medición, lista de marcas, vínculo de cantidad, hábitos de cuantificación, diferencias, comparar
from: 12004ce5
---

Si ha hecho cuantificación en PlanSwift o con las herramientas de medición de Bluebeam Revu, la mayor parte de TakeoffCraft le resultará familiar: un juego de planos, una escala por hoja, los elementos que mide y un total con precio. La forma en que encajan las piezas es diferente en algunos puntos, y esos puntos se explican a continuación.

Si conoce PlanSwift o On-Screen Takeoff, elija el estilo de menú {{ui:Mesa de cuantificación}} en {{ui:Configuración}} › {{ui:TakeoffCraft}} › {{ui:Menús, teclas y ratón}}: una barra de menús con Archivo, Edición, Vista, Escala, Cuantificación, Partidas, Revisión y Exportar, sobre una fila de herramientas de cuantificación, con los valores predefinidos de escala en la barra de la hoja. Consulte [Menús, teclas y ratón](topic:menus-keys-and-mouse).

## Hábitos equivalentes

| Está acostumbrado a | En TakeoffCraft |
|---|---|
| Abrir una obra o proyecto que guarda los planos (PlanSwift) | Abra los PDF y el archivo `.takeoff.json` del proyecto uno junto al otro. El proyecto guarda solo la cuantificación; los PDF siguen siendo sus archivos. |
| Una lista de marcas con notas, nubes y resaltados (Bluebeam) | {{ui:Revisión}} en la barra de la hoja: notas, nubes y resaltados con un estado (Abierto, Respondido, Cerrado), listados en **Marcas** y dibujados en el PDF marcado. Consulte [Notas, nubes y resaltados](topic:markups). |
| Mediciones guardadas como marcas dentro del PDF (Bluebeam) | La cuantificación vive en el archivo `.takeoff.json`. {{ui:PDF marcado}} escribe una copia con la cuantificación dibujada, para compartir; {{ui:PDF con la cuantificación dentro}} escribe una copia que lleva la cuantificación, para reabrirla en TakeoffCraft. |
| Partidas de cuantificación (PlanSwift), herramientas de medición personalizadas guardadas en el Tool Chest (Bluebeam) | **Partidas** bajo {{ui:Partidas}}: nombre, tipo, color, unidad, altura o profundidad, desperdicio y tarifas. |
| Piezas y conjuntos con fórmulas (PlanSwift) | El {{ui:Conjunto}} de la partida: componentes con una fórmula que usa `L H A N P`. |
| Fijar la escala de la página, o calibrarla (ambos) | Lista {{ui:Predefinida}} o {{ui:Calibrar}} en el grupo {{ui:Escala}}, por hoja. {{ui:Comprobar}} mide una dimensión conocida. |
| Aplicar una sola escala a un rango de páginas | Todavía no: fije cada hoja. |
| Ventanas gráficas con escalas distintas en una misma hoja (Bluebeam) | Todavía no: una escala por hoja. |
| Herramientas de polilínea y de área (Bluebeam), cuantificación lineal y de área (PlanSwift) | {{ui:Lineal}} ({{key:L}}) y {{ui:Área}} ({{key:A}}). |
| Mantener Shift para líneas rectas | {{key:Shift}} ajusta a pasos de 45°, la misma idea. |
| Ajuste a las líneas del dibujo | Activado de forma predeterminada: extremos, puntos medios, intersecciones y el punto más cercano de una línea, con {{key:F3}} para desactivarlo, como en los programas CAD. |
| Herramienta de conteo (ambos) | {{ui:Conteo}} ({{key:C}}). |
| Búsqueda visual de símbolos (Bluebeam) | {{ui:Conteo automático}} ({{key:S}}): enmarque un símbolo, revise y agregue. |
| Recortes o deducciones en áreas | {{ui:Recorte}} ({{key:X}}) sobre un área seleccionada, y recortes circulares. |
| Deducciones en tramos lineales | Dibuje el tramo de frente y pulse {{key:E}} ({{ui:Deducir}}) para la abertura. Consulte [Medir tramos lineales](topic:measure-linear). |
| Segmentos de arco en una polilínea | {{ui:Arco}} ({{key:R}}): haga clic en un punto de la curva y después en su extremo. |
| La lista de marcas con columnas de cantidad (Bluebeam) | La tabla {{ui:Cantidades}}, {{ui:Por partida}} o {{ui:Por hoja}}. |
| Hoja de estimación con precios (PlanSwift) | La misma tabla: desperdicio, material y mano de obra por unidad, totales extendidos y {{ui:Total de la obra}}. |
| Exportar a Excel | {{ui:XLSX}} con fórmulas activas, o {{ui:CSV}}. |
| Escape para detener una herramienta | {{key:Esc}} cancela y regresa a {{ui:Seleccionar}}. |
| Clic derecho para terminar | Aquí también el clic derecho termina un tramo o cierra un área. No hay menú contextual de clic derecho. |

## Diferencias que confunden a la gente

**La cuantificación no está dentro de su PDF.** Nada de lo que hace modifica sus PDF. Guarde el archivo `.takeoff.json` y consérvelo junto con los planos. Enviar a alguien el PDF marcado no le envía una cuantificación editable: envíe el archivo del proyecto y los PDF originales, o un [PDF con la cuantificación dentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**Los PDF se asocian por su contenido, no por su nombre.** Una hoja revisada guardada sobre el nombre de archivo anterior es un archivo nuevo para TakeoffCraft, sin escala y sin marcas. Sus marcas anteriores siguen en la versión anterior y siguen contando. Consulte [Guardar y reabrir una cuantificación](topic:save-and-reopen#when-a-pdf-has-changed).

**Las marcas sin escala se dejan fuera, no se cuentan como cero.** Si una hoja no tiene escala, sus tramos y áreas no cuentan, y la tabla dice "Incompleto". En muchos programas solo vería 0. Consulte [Fijar la escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**No hay que adivinar el tamaño de la página.** Los valores predefinidos suponen que el PDF está impreso a tamaño completo. Un PDF a mitad de tamaño o "ajustado a la página" necesita {{ui:Calibrar}}. Use siempre {{ui:Comprobar}}.

**Una partida, un tipo principal, y más si lo pide.** Una partida es lineal, de área o de conteo, y su tipo se bloquea cuando tiene marcas. Una condición que da a la vez un área y su perímetro es una partida de área: su perímetro es la variable `P`. Un muro con longitud y área es una partida lineal con altura. Para una partida con varias condiciones, como un cuarto con piso, zoclo y puertas, marque los otros tipos en {{ui:Medir también}}: cada uno se valúa en su propia fila. Consulte [Una partida, varios tipos de marcas](topic:create-items#one-item-several-kinds-of-marks).

**Las fórmulas usan totales.** Las fórmulas de conjunto usan los totales de la partida en todas las hojas, no cada tramo por separado. `N` (el número de tramos o áreas) sirve para extras por tramo, como un poste extra por muro.

**El perímetro incluye los recortes.** El `P` de un área suma los bordes de sus huecos. Consulte [Medir áreas con recortes](topic:measure-areas#read-the-area).

**Arrastrar encuadra la vista.** Arrastrar con el botón izquierdo sobre la hoja encuadra en todas las herramientas, excepto {{ui:Conteo automático}}. Nunca necesita cambiar a una herramienta de encuadre. La rueda hace zoom; no desplaza.

**Una copia de recuperación, no una nube.** TakeoffCraft guarda una copia de su trabajo en este navegador y la ofrece de nuevo después de un fallo ([Si la pestaña o el navegador se detienen](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), pero la cuantificación debe guardarla usted: {{key:Mod+S}}. El guardado en la nube todavía no está disponible.

**Todo está en el navegador.** No hay nada que instalar, y los planos nunca se suben. Para una app de escritorio, TakeoffCraft viene en CadCraft Studio, junto con las otras siete apps.

## Todavía no disponible

Las regiones de escala por hoja todavía no están construidas. Consulte [Lo que todavía no está disponible](topic:not-built-yet) para la lista completa y para saber qué hacer en su lugar.
