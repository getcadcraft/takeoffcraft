---
title: Venir de otro software de mediciones
summary: Cómo se trasladan los hábitos de los programas especializados en mediciones y de las herramientas de anotación de PDF a TakeoffCraft, y las diferencias que más confunden.
keywords: cambiar, migrar, condiciones, piezas, herramientas de medición, lista de anotaciones, vínculo de cantidad, hábitos de medición, diferencias, comparar
from: 12004ce5
---

Si ha hecho mediciones con PlanSwift o con las herramientas de medición de Bluebeam Revu, la mayor parte de TakeoffCraft le resultará familiar: un juego de planos, una escala por hoja, elementos que se miden y un total valorado. La forma en que encajan las piezas es distinta en algunos puntos, y esos puntos se describen a continuación.

Si conoce PlanSwift o On-Screen Takeoff, elija el estilo de menú {{ui:Mesa de medición}} en {{ui:Ajustes}} › {{ui:Medición}} › {{ui:Menús, teclas y ratón}}: una barra de menús con Archivo, Editar, Ver, Escala, Medición, Partidas, Anotación y Exportar sobre una fila de las herramientas de medición, con los preajustes de escala en la barra de la hoja. Consulte [Menús, teclas y ratón](topic:menus-keys-and-mouse).

## Hábitos equivalentes

| Lo que está acostumbrado a hacer | En TakeoffCraft |
|---|---|
| Abrir un trabajo o proyecto que guarda los planos (PlanSwift) | Abra los PDF y el proyecto `.takeoff.json` uno junto al otro. El proyecto guarda solo la medición; los PDF siguen siendo sus archivos. |
| Una lista de anotaciones con notas, nubes y resaltados (Bluebeam) | {{ui:Anotación}} en la barra de la hoja: notas, nubes y resaltados con un estado (Abierta, Respondida, Cerrada), listados en **Anotaciones** y dibujados en el PDF anotado. Consulte [Notas, nubes y resaltados](topic:markups). |
| Mediciones guardadas como anotaciones dentro del PDF (Bluebeam) | La medición vive en el archivo `.takeoff.json`. {{ui:PDF anotado}} escribe una copia con la medición dibujada, para compartir; {{ui:PDF con la medición dentro}} escribe una copia que lleva la medición, para volver a abrirla en TakeoffCraft. |
| Partidas de medición (PlanSwift), herramientas de medición personalizadas guardadas en el Tool Chest (Bluebeam) | **Partidas** bajo {{ui:Partidas}}: nombre, tipo, color, unidad, altura o profundidad, desperdicio y tarifas. |
| Partidas y conjuntos con fórmulas (PlanSwift) | El {{ui:Conjunto}} de la partida: componentes con una fórmula que usa `L H A N P`. |
| Fijar la escala de la página, o calibrar (ambos) | Lista de {{ui:Preajuste}} o {{ui:Calibrar}} en el grupo {{ui:Escala}}, por hoja. {{ui:Comprobar}} mide una cota conocida. |
| Aplicar una escala a un rango de páginas | Todavía no: fije cada hoja. |
| Ventanas gráficas con escalas distintas en una misma hoja (Bluebeam) | Todavía no: una escala por hoja. |
| Herramientas de polilínea y de área (Bluebeam), medición lineal y de área (PlanSwift) | {{ui:Lineal}} ({{key:L}}) y {{ui:Área}} ({{key:A}}). |
| Mantener Shift para líneas rectas | {{key:Shift}} ajusta a pasos de 45°, la misma idea. |
| Ajustarse a las líneas del plano | Activado por defecto: extremos, puntos medios, intersecciones y el punto más cercano de una línea, con {{key:F3}} para desactivarlo, como en los programas CAD. |
| Herramienta de recuento (ambos) | {{ui:Recuento}} ({{key:C}}). |
| Búsqueda visual de símbolos (Bluebeam) | {{ui:Autorrecuento}} ({{key:S}}): enmarque un símbolo, revise y añada. |
| Recortes o descuentos en áreas | {{ui:Recorte}} ({{key:X}}) sobre un área seleccionada, y recortes circulares. |
| Descuentos en tramos lineales | Dibuje el tramo de lado a lado y pulse {{key:E}} ({{ui:Descontar}}) para la abertura. Consulte [Medir tramos lineales](topic:measure-linear). |
| Segmentos de arco en una polilínea | {{ui:Arco}} ({{key:R}}): haga clic en un punto de la curva y luego en su final. |
| La lista de anotaciones con columnas de cantidad (Bluebeam) | La tabla de {{ui:Cantidades}}, {{ui:Por partida}} o {{ui:Por hoja}}. |
| Cuadro de estimación con precios (PlanSwift) | La misma tabla: desperdicio, material y mano de obra por unidad, totales extendidos, {{ui:Total de la obra}}. |
| Exportar a Excel | {{ui:XLSX}} con fórmulas activas, o {{ui:CSV}}. |
| Escape para detener una herramienta | {{key:Esc}} cancela y vuelve a {{ui:Seleccionar}}. |
| Clic derecho para terminar | Aquí también el clic derecho termina un tramo o cierra un área. No hay menú contextual del clic derecho. |

## Diferencias que confunden

**La medición no está dentro de su PDF.** Nada de lo que haga cambia sus PDF. Guarde el archivo `.takeoff.json` y téngalo junto a los planos. Si envía el PDF anotado a alguien, no le envía una medición editable: envíe el archivo del proyecto y los PDF originales, o un [PDF con la medición dentro](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**Los PDF se emparejan por su contenido, no por el nombre.** Una hoja revisada guardada con el nombre de archivo antiguo es un archivo nuevo para TakeoffCraft, sin escala y sin marcas. Sus marcas antiguas se quedan en la versión antigua y siguen contando. Consulte [Guardar y volver a abrir una medición](topic:save-and-reopen#when-a-pdf-has-changed).

**Las marcas sin escala se dejan fuera, no se cuentan como cero.** Si una hoja no tiene escala, sus tramos y áreas no cuentan, y la tabla dice «Incompleto». En muchos programas vería simplemente 0. Consulte [Fijar la escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**No se adivina el tamaño de página.** Los preajustes suponen que el PDF se imprime a tamaño real. Un PDF a media escala o «ajustado a la página» necesita {{ui:Calibrar}}. Use siempre {{ui:Comprobar}}.

**Una partida, un tipo principal, más si lo pide.** Una partida es lineal, de área o de recuento, y su tipo se bloquea en cuanto tiene marcas. Una condición que da a la vez un área y su perímetro es una partida de área: su perímetro es la variable `P`. Un muro con longitud y área es una partida lineal con una altura. Para una partida con varias condiciones, como una habitación con suelo, zócalo y puertas, marque los otros tipos en **Medir también**: cada uno se valora en su propia fila. Consulte [Una partida, varios tipos de marcas](topic:create-items#one-item-several-kinds-of-marks).

**Las fórmulas operan sobre totales.** Las fórmulas del conjunto usan los totales de la partida en todas las hojas, no cada tramo por separado. `N` (el número de tramos o áreas) sirve para extras por tramo, como un montante extra por muro.

**El perímetro incluye los recortes.** El `P` de un área suma los bordes de sus huecos. Consulte [Medir áreas con recortes](topic:measure-areas#read-the-area).

**Arrastrar desplaza.** Un arrastre con el botón izquierdo sobre la hoja la desplaza, en todas las herramientas excepto {{ui:Autorrecuento}}. Nunca necesita cambiar a una herramienta de desplazamiento. La rueda hace zoom; no desplaza.

**Una copia de recuperación, no una nube.** TakeoffCraft guarda una copia de su trabajo en este navegador y la ofrece de nuevo tras un fallo ([Si la pestaña o el navegador se detienen](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), pero la medición debe guardarla usted: {{key:Mod+S}}. El guardado en la nube todavía no está disponible.

**Todo está en el navegador.** No hay nada que instalar, y los planos nunca se suben. Para una aplicación de escritorio, TakeoffCraft llega en CadCraft Studio, junto con las otras siete aplicaciones.

## Todavía no disponible

Las regiones de escala por hoja todavía no están implementadas. Consulte [Lo que aún no está hecho](topic:not-built-yet) para la lista completa y qué hacer en su lugar.
