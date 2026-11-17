---
title: Ajustes de TakeoffCraft
summary: Muestre pulgadas al 1/16, 1/8 o 1/4, empiece las partidas nuevas con un porcentaje de desperdicio, elija dónde empieza el deslizador de Autorrecuento, ajuste a las líneas del dibujo o a 45° sin mantener Shift, defina el ancho de puerta que cierra el relleno de sala y elija el indicador de esquina de la vista 3D.
keywords: ajustes, preferencias, opciones, precisión, fracciones, pulgadas, redondeo, desperdicio, desperdicio predeterminado, autorrecuento, umbral, coincidencia, deslizador, ajustar, 45, ángulo, shift, cubo de vista, icono de ejes, indicador de esquina, 3d
from: bca3f0ed
---

Abra {{ui:Ajustes}} con el engranaje de la barra de aplicaciones o con {{key:Mod+,}}. La primera pestaña, {{ui:Medición}}, contiene los ajustes propios de esta aplicación; {{ui:General}} contiene los que comparten todas las aplicaciones de CadCraft (tema, paneles, barra de herramientas). Los ajustes de TakeoffCraft existen solo en la aplicación: se cambian aquí, y este navegador los recuerda. Restablecer los ajustes de TakeoffCraft los devuelve a su estado inicial.

## Pies y pulgadas

Muestre las longitudes con aproximación a **1/16"** (el inicial), **1/8"** o **1/4"**. Esto cambia cómo se leen las longitudes en la hoja, en los paneles, en las cantidades y en la barra de estado.

Solo se redondea la visualización. Las cantidades, los costes y las exportaciones se calculan a partir de las longitudes exactas, y las exportaciones siempre muestran 1/16".

## Desperdicio inicial

El porcentaje de desperdicio con el que empieza cada partida nueva: 0% (el inicial), 2%, 3%, 5%, 7.5%, 10%, 15% o 20%. Puede escribir otro desperdicio para cada partida, en el editor de partidas o directamente en la tabla de cantidades. Las partidas que ya tiene conservan su propio desperdicio.

## Autorrecuento: dónde empieza el deslizador de coincidencia

Dónde se sitúa el deslizador {{ui:Coincidencia}} cuando termina una búsqueda de [Autorrecuento](topic:auto-count), entre 50% y 95%; 75% es el inicial. Un valor más bajo ofrece más parecidos que rechazar; uno más alto, menos. Puede seguir moviendo el deslizador durante cada revisión.

## Ajustar a las líneas propias del dibujo

Activado al inicio. Mientras mide o calibra, un punto cerca de una línea del PDF salta a su extremo, a su punto medio, a un cruce o al punto más cercano sobre ella. {{key:F3}} y {{ui:Ajustar}} en la barra de estado también lo activan y desactivan. Más: [Ajustar a las líneas del dibujo](topic:snap-to-the-drawing).

## Relleno de sala: el ancho de hueco que cierra

{{ui:El relleno de sala cierra huecos de hasta}} define el ancho de un hueco de puerta o de una separación que la herramienta {{ui:Sala}} considera cerrado: de 3'-0" a 8'-0", 4'-0" al inicio. Un valor mayor que su puerta más ancha deja que una sala invada la siguiente; uno menor que una puerta deja la sala abierta. Véase [Rellenar una sala con un clic](topic:measure-areas#fill-a-room-with-one-click).

## Ajustar a 45° sin mantener Shift

Desactivado al inicio. Cuando está activado, los tramos, contornos, recortes y esquinas arrastradas van a 0°, 45°, 90° o 135° desde el último punto sin mantener {{key:Shift}}; mantenga {{key:Shift}} para hacer clic en cualquier ángulo. La barra de estado indica entonces "Ajusta a 45°; Shift libera el ángulo". El punto donde hace clic sobre la curva de un arco y los círculos nunca se ajustan; el extremo de un arco sí.

## Tamaño del marcador de recuento

Tamaño de los puntos de recuento: {{ui:Muy pequeño}}, {{ui:Pequeño}}, {{ui:Mediano}} (el inicial: el tamaño que siempre tuvieron los puntos) o {{ui:Grande}}. El tamaño se mantiene en pantalla a cualquier zoom, y el PDF marcado dibuja cada punto con el mismo tamaño sobre el papel, sea cual sea el tamaño de la hoja, de modo que el PDF al 100% se ve como la pantalla. Más: [Recuento a mano](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicador de esquina

Solo para la [vista 3D de comprobación](topic:check-in-3d): {{ui:Cubo de vista}} (el inicial: un cubo arriba a la derecha para hacer clic, arrastrar y girar), {{ui:Icono de ejes}} (un pequeño marcador X, Y, Z abajo a la derecha) o {{ui:Ninguno}}. Cambia al momento y se guarda en este navegador. La hoja plana nunca muestra ninguno.

## Herramienta de trazado: la mayor separación que une

{{ui:Herramienta de trazado: separación máxima para unir}} es lo separados que pueden estar dos extremos de línea y seguir contando como un solo trazado, en puntos de PDF (de 0.05 a 60; 1.5 al inicio). Las líneas de un dibujo suelen quedarse un pelo cortas entre sí. Un valor mayor une más; uno menor mantiene las líneas separadas. {{key:[}} y {{key:]}} lo cambian mientras elige, y este campo lo sigue. Véase [Elegir las líneas](topic:pick-the-lines).
