---
title: Configuración de TakeoffCraft
summary: Mostrar pulgadas a 1/16, 1/8 o 1/4, empezar los ítems nuevos con un porcentaje de desperdicio, elegir dónde empieza el deslizador de Conteo automático, ajustarse a las líneas del plano o a 45° sin mantener Shift, definir cuán ancha es la puerta que cierra el relleno de ambiente, y elegir el indicador de esquina de la vista 3D.
keywords: configuración, preferencias, opciones, precisión, fracciones, pulgadas, redondeo, desperdicio, desperdicio predeterminado, conteo automático, umbral, coincidencia, deslizador, snap, 45, ángulo, shift, cubo de vista, icono de ejes, indicador de esquina, 3d
from: bca3f0ed
---

Abrí {{ui:Configuración}} con el engranaje de la barra de la aplicación o con {{key:Mod+,}}. La primera pestaña, {{ui:TakeoffCraft}}, contiene las configuraciones propias de esta aplicación; {{ui:General}} contiene las que comparten todas las aplicaciones de CadCraft (tema, paneles, barra de herramientas). Las configuraciones de TakeoffCraft existen solo en la aplicación: las cambiás acá, y este navegador las recuerda. {{ui:Restablecer configuración de TakeoffCraft}} las devuelve a su estado inicial.

## Pies y pulgadas

Mostrá longitudes al **1/16"** más cercano (el inicial), **1/8"** o **1/4"**. Esto cambia cómo se leen las longitudes en la hoja, en los paneles, en las cantidades y en la barra de estado.

Solo se redondea la visualización. Cantidades, costos y exportaciones se calculan con las longitudes exactas, y las exportaciones siempre muestran 1/16".

## Desperdicio inicial

El porcentaje de desperdicio con el que empieza cada ítem nuevo: 0% (el inicial), 2%, 3%, 5%, 7.5%, 10%, 15% o 20%. Igual podés escribir otro desperdicio para cada ítem, en el editor de ítems o directamente en la tabla de cantidades. Los ítems que ya tenés conservan su propio desperdicio.

## Conteo automático: dónde empieza el deslizador de coincidencia

Dónde se ubica el deslizador {{ui:Coincidencia}} cuando termina una búsqueda de [Conteo automático](topic:auto-count), del 50% al 95%; 75% es el inicial. Más bajo ofrece más parecidos para que rechaces; más alto ofrece menos. Igual podés mover el deslizador durante cada revisión.

## Ajustarse a las líneas propias del plano

Activado al inicio. Mientras medís o calibrás, un punto cerca de una línea del PDF salta a su extremo, su punto medio, un cruce o el punto más cercano sobre ella. {{key:F3}} y {{ui:Snap}} en la barra de estado también lo activan y desactivan. Más: [Ajustarse a las líneas del plano](topic:snap-to-the-drawing).

## Relleno de ambiente: cuán ancha es la abertura que cierra

{{ui:El relleno de ambiente cierra aberturas de hasta}} define cuán ancha tiene que ser una abertura de puerta o un hueco para que la herramienta {{ui:Ambiente}} lo trate como cerrado: de 3'-0" a 8'-0", 4'-0" al inicio. Si es más ancho que tu puerta más ancha, un ambiente se extiende hasta el siguiente; si es más angosto que una puerta, el ambiente queda abierto. Ver [Rellenar un ambiente con un clic](topic:measure-areas#fill-a-room-with-one-click).

## Ajustarse a 45° sin mantener Shift

Desactivado al inicio. Cuando está activado, los recorridos, contornos, recortes y esquinas arrastradas van a 0°, 45°, 90° o 135° desde el último punto sin mantener {{key:Shift}}; mantené {{key:Shift}} para hacer clic en cualquier ángulo. La barra de estado dice entonces "Ajusta a 45°; Shift libera el ángulo". El punto donde hacés clic sobre la curva de un arco y los círculos nunca se ajustan; sí el extremo de un arco.

## Tamaño del marcador de conteo

Qué tan grandes son los puntos de conteo: {{ui:Muy pequeño}}, {{ui:Pequeño}}, {{ui:Mediano}} (el inicial: el tamaño que siempre tuvieron los puntos) o {{ui:Grande}}. El tamaño se mantiene en pantalla en cualquier zoom, y el PDF marcado dibuja cada punto con el mismo tamaño en papel, sea cual sea el tamaño de la hoja, así que el PDF al 100% se ve como la pantalla. Más: [Contar a mano](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicador de esquina

Solo para la [vista de chequeo 3D](topic:check-in-3d): {{ui:Cubo de vista}} (el inicial: un cubo arriba a la derecha para hacer clic, arrastrar y girar), {{ui:Icono de ejes}} (un pequeño marcador X, Y, Z abajo a la derecha) o {{ui:Ninguno}}. Cambia al instante y se guarda en este navegador. La hoja plana nunca muestra ninguno.

## Herramienta de trayectoria: el hueco más grande que une

{{ui:Herramienta de trayectoria: mayor hueco para unir}} es cuán separados pueden estar dos extremos de línea y aun contar como una sola trayectoria, en puntos de PDF (de 0.05 a 60; 1.5 al inicio). Las líneas de un plano suelen quedar a un pelo una de otra. Uniendo más une; más chico mantiene las líneas separadas. {{key:[}} y {{key:]}} lo cambian mientras elegís, y este campo lo sigue. Ver [Elegir las líneas](topic:pick-the-lines).
