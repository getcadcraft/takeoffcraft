---
title: Fijar la escala
summary: Dar a cada hoja una escala con una predeterminada o calibrando sobre una dimensión conocida, verificarla, y entender por qué las hojas sin escala quedan afuera de los totales.
keywords: detectar escala, leer escala, escala desde el texto, todas las hojas, escala, calibrar, predeterminada, verificar escala, verificar, dimensión conocida, sin escala, razón, fijar escala
from: 8f0148e6
---

Cada hoja tiene su propia escala. La fijás vos, o dejás que TakeoffCraft la lea del texto de las hojas (abajo), y la verificás. Hasta que una hoja tenga una, {{ui:Lineal}}, {{ui:Área}}, {{ui:Círculo}} y {{ui:Recorte}} se niegan a medir sobre ella. {{ui:Contar}} y {{ui:Conteo automático}} funcionan sin escala.

La lista de hojas muestra la escala de cada hoja, o **Sin escala**. La barra bajo la hoja abierta dice lo mismo.

## Usar una predeterminada (cuando el PDF está impreso en tamaño natural)

1. Abrí la hoja.
2. Abrí la lista {{ui:Predeterminada}} en el grupo {{ui:Escala}}.
3. Elegí la escala impresa en el plano, por ejemplo `1/8" = 1'-0"` en Arquitectónica.
   La barra de estado dice "Escala para esta hoja: 1/8" = 1'-0"."
4. Verificala (abajo).

Una predeterminada supone que el PDF tiene el tamaño de papel real para el que se hizo el plano. Si alguien hizo el PDF con "ajustar a la página", o es un juego a mitad de tamaño, la predeterminada está mal. Calibrá en su lugar.

La lista completa está en [Escalas predeterminadas](topic:scale-presets).

## Leer las escalas del texto de las hojas

La mayoría de los planos dicen su escala: `SCALE: 1/4" = 1'-0"` en el cajetín, `1:100` debajo de una vista. TakeoffCraft puede leerla y fijar todas las hojas de una vez.

1. Abrí la lista {{ui:Predeterminada}} y elegí **Desde el texto de las hojas…** (arriba).
2. La lista muestra cada hoja: su escala actual, y lo que dice su texto — **Dice 1/4" = 1'-0"**, **Sin escala en su texto**, o **Dice no a escala** (NTS).
3. Las hojas sin escala que sí dicen una quedan marcadas. Marcá o desmarcá cualquiera, y después elegí {{ui:Configurar las escalas marcadas}}. Un {{key:Mod+Z}} las devuelve todas.
4. Verificá una dimensión en cada hoja con {{ui:Verificar}} (abajo): una predeterminada solo es correcta si el PDF se imprimió a tamaño natural.

Lee notaciones arquitectónicas (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), de ingeniería (`1" = 20'`) y métricas (`1:50`) que coinciden con una [predeterminada](topic:scale-presets). Cuando una hoja dice más de una escala (un plano con detalles ampliados), toma la que más veces dice, y la escrita después de la palabra SCALE cuenta doble; las demás se muestran en rojo para que las verifiques. Una hoja escaneada no tiene texto: fijá su escala a mano.

## Calibrar sobre una dimensión conocida

Usalo cuando no hay una escala impresa en la que confíes, el juego fue redimensionado, o la hoja dice "no a escala" pero tiene cotas.

1. Abrí la hoja y acercate a una dimensión larga que conozcas, como el espaciado de una línea de ejes o una dimensión total del edificio. Cuanto más larga, más exacta.
2. Elegí {{ui:Calibrar}} en el grupo {{ui:Escala}}, o presioná {{key:K}}.
3. Hacé clic en un extremo de la dimensión. Acercate a cada extremo para mayor precisión; podés hacer zoom y desplazarte entre los clics.
4. Hacé clic en el otro extremo. Mantené {{key:Shift}} para que la línea quede a 0°, 45° o 90°.
   Se abre el diálogo **Calibrar esta hoja**.
5. Escribí la distancia real en **Distancia real**, por ejemplo `24'-6 1/2"`, `24.5` (pies decimales), `30"` o `7.5 m`. Ver [Formatos de longitud, tarifa y porcentaje](topic:entry-formats).
6. Elegí {{ui:Fijar la escala}}.
   La barra de estado muestra la escala como "1" = (n)'", y cuando está dentro del 0.5% de una predeterminada dice cuál, por ejemplo "que coincide con 1/4" = 1'-0" (elegí esa predeterminada para una escala exacta)".
   TakeoffCraft vuelve a la herramienta {{ui:Seleccionar}}.

Cuando la calibración coincide con una predeterminada, elegir esa predeterminada da una escala exacta en lugar de una que depende de dónde hiciste clic.

## Verificar la escala

Verificá siempre una escala nueva con una segunda dimensión.

1. Elegí {{ui:Verificar}} en el grupo {{ui:Escala}}, o presioná {{key:D}}.
2. Hacé clic en ambos extremos de una dimensión impresa en el plano.
   La barra de estado muestra "Verificar: 12'-6"" con la misma longitud en pies decimales y metros, y la línea de verificación queda en la hoja con su longitud.
3. Compará con la cota impresa. Si no coincide, calibrá sobre una dimensión más larga.

Presioná {{key:Esc}} para borrar la línea de verificación.

## Cambiar una escala

Elegí otra predeterminada o calibrá de nuevo. Si la hoja ya tiene mediciones, TakeoffCraft pregunta **¿Cambiar la escala de esta hoja?** y dice cuántas mediciones se volverán a medir. Elegí {{ui:Cambiar la escala}}. Cada tramo y área de la hoja se vuelve a medir con la nueva escala. Podés deshacerlo con {{key:Mod+Z}}.

## Por qué las hojas sin escala no cuentan como cero

Una marca en una hoja sin escala no tiene longitud ni área reales. TakeoffCraft nunca la cuenta como cero, lo que haría que tu presupuesto quedara demasiado bajo sin que lo notes. En cambio:

- deja esas marcas fuera de los totales,
- muestra "+(n) sin escala" junto al ítem en {{ui:Cantidades}},
- muestra "Incompleto: (n) marcas en hojas sin escala (fuera de los totales)" en el encabezado de la tabla,
- escribe la cantidad en la columna de notas de la planilla exportada.

Esto puede pasar cuando abrís un proyecto cuyas escalas nunca se fijaron. Dale escala a la hoja y las marcas se cuentan de inmediato. Las marcas de conteo siempre se cuentan; no necesitan escala.

## Consejos

- Fijá la escala de cada hoja que vas a medir antes de empezar. Buscá **Sin escala** en la lista de hojas para encontrar las que faltan (el cuadro de búsqueda mira los nombres de las hojas, no las escalas).
- Los detalles y planos ampliados en la misma hoja suelen usar otra escala. TakeoffCraft tiene una escala por hoja; ver [Lo que todavía no está hecho](topic:not-built-yet).
- Planos métricos: elegí una predeterminada métrica como `1:100`, o calibrá con una distancia métrica como `6000 mm`.
