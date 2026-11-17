---
title: Configuración de TakeoffCraft
summary: Muestre pulgadas hasta 1/16, 1/8 o 1/4, comience las partidas nuevas con un porcentaje de desperdicio, elija dónde empieza el control deslizante del conteo automático, ajuste a las líneas del dibujo o a 45° sin mantener Shift, defina qué tan ancha es la abertura que cierra el relleno de cuarto, y elija el indicador de esquina de la vista 3D.
keywords: configuración, preferencias, opciones, precisión, fracciones, pulgadas, redondeo, desperdicio, desperdicio predeterminado, conteo automático, umbral, coincidencia, control deslizante, forzcursor, 45, ángulo, shift, cubo de vistas, icono de ejes, indicador de esquina, 3d
from: bca3f0ed
---

Abra {{ui:Settings}} con el engrane de la barra de aplicaciones o con {{key:Mod+,}}. La primera pestaña, {{ui:TakeoffCraft}}, contiene la configuración propia de esta aplicación; {{ui:General}} contiene la que comparten todas las aplicaciones de CadCraft (tema, paneles, barra de herramientas). La configuración de TakeoffCraft existe solo en la aplicación: se cambia aquí, y este navegador la recuerda. {{ui:Restablecer la configuración de TakeoffCraft}} la devuelve al inicio.

## Pies y pulgadas

Muestre las longitudes con aproximación a **1/16"** (el inicial), **1/8"** o **1/4"**. Esto cambia cómo se leen las longitudes en la hoja, en los paneles, en las cantidades y en la barra de estado.

Solo se redondea la visualización. Las cantidades, los costos y las exportaciones se calculan con las longitudes exactas, y las exportaciones siempre muestran 1/16".

## Desperdicio inicial

El porcentaje de desperdicio con el que empieza cada partida nueva: 0% (el inicial), 2%, 3%, 5%, 7.5%, 10%, 15% o 20%. Aún puede escribir otro desperdicio para cada partida, en el editor de partidas o directamente en la tabla de cantidades. Las partidas que ya tiene conservan su propio desperdicio.

## Conteo automático: dónde empieza el control de coincidencia

Dónde se ubica el control deslizante de {{ui:Match}} cuando termina una búsqueda de [Conteo automático](topic:auto-count), de 50% a 95%; 75% es el inicial. Un valor más bajo ofrece más parecidos para que rechace; uno más alto ofrece menos. Aún puede mover el control durante cada revisión.

## Ajustar a las líneas propias del dibujo

Activado al inicio. Mientras mide o calibra, un punto cercano a una línea del PDF salta a su extremo, su punto medio, un cruce o el punto más cercano sobre ella. {{key:F3}} y {{ui:Forzcursor}} en la barra de estado también lo activan y lo desactivan. Más: [Ajustar a las líneas del dibujo](topic:snap-to-the-drawing).

## Relleno de cuarto: qué tan ancha es la abertura que cierra

{{ui:El relleno de cuarto cierra aberturas de hasta}} define qué tan ancha es una abertura de puerta o un hueco que la herramienta {{ui:Cuarto}} considera cerrado: de 3'-0" a 8'-0", 4'-0" al inicio. Si es más ancho que su puerta más ancha, un cuarto se extiende hasta el siguiente; si es más angosto que una puerta, el cuarto queda abierto. Vea [Rellenar un cuarto con un clic](topic:measure-areas#fill-a-room-with-one-click).

## Ajuste a 45° sin mantener Shift

Desactivado al inicio. Cuando está activado, las líneas, los contornos, los recortes y las esquinas arrastradas van a 0°, 45°, 90° o 135° desde el último punto, sin mantener {{key:Shift}}; mantenga {{key:Shift}} para hacer clic en cualquier ángulo. La barra de estado dice entonces "Ajusta a 45°; Shift libera el ángulo". El punto que haga clic sobre la curva de un arco y los círculos nunca se ajustan; el extremo de un arco sí.

## Tamaño del marcador de conteo

Qué tan grandes son los puntos de conteo: {{ui:Muy chico}}, {{ui:Chico}}, {{ui:Mediano}} (el inicial: el tamaño que siempre tuvieron los puntos) o {{ui:Grande}}. El tamaño se mantiene en pantalla a cualquier zoom, y el PDF marcado dibuja cada punto con el mismo tamaño en papel, sin importar el tamaño de la hoja, así que el PDF al 100% se ve igual que la pantalla. Más: [Contar a mano](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicador de esquina

Solo para la [vista de comprobación 3D](topic:check-in-3d): {{ui:Cubo de vistas}} (el inicial: un cubo arriba a la derecha para hacer clic, arrastrar y girar), {{ui:Icono de ejes}} (un pequeño marcador X, Y, Z abajo a la derecha) o {{ui:Ninguno}}. Cambia de inmediato y se conserva en este navegador. La hoja plana nunca muestra ninguno.

## Herramienta de trayectoria: la mayor separación que une

{{ui:Herramienta de trayectoria: mayor separación para unir}} indica qué tan separados pueden estar dos extremos de línea y seguir contando como una sola trayectoria, en puntos PDF (de 0.05 a 60; 1.5 al inicio). Las líneas de un dibujo a menudo se detienen un poco antes de encontrarse. Un valor mayor une más; uno menor mantiene las líneas separadas. {{key:[}} y {{key:]}} lo cambian mientras elige, y este campo se actualiza. Vea [Elegir las líneas](topic:pick-the-lines).
