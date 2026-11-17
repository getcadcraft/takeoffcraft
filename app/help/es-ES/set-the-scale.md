---
title: Definir la escala
summary: Asigne a cada hoja una escala con un preajuste o calibrando sobre una cota conocida, compruébela y entienda por qué las hojas sin escala quedan fuera de los totales.
keywords: detectar escala, leer escala, escala desde el texto, todas las hojas, escala, calibrar, preajuste, comprobar escala, verificar, cota conocida, sin escala, relación, definir escala
from: 8f0148e6
---

Cada hoja tiene su propia escala. Usted la define, o deja que TakeoffCraft la lea del texto de las hojas (véase abajo), y la comprueba. Mientras una hoja no tenga escala, {{ui:Lineal}}, {{ui:Área}}, {{ui:Círculo}} y {{ui:Recorte}} se niegan a medir en ella. {{ui:Recuento}} y {{ui:Autorrecuento}} funcionan sin escala.

La lista de hojas muestra la escala de cada hoja, o **Sin escala**. La barra bajo la hoja abierta indica lo mismo.

## Usar un preajuste (cuando el PDF se imprime a tamaño real)

1. Abra la hoja.
2. Abra la lista {{ui:Preajuste}} del grupo {{ui:Escala}}.
3. Elija la escala impresa en el plano, por ejemplo `1/8" = 1'-0"` en Arquitectónica. La barra de estado indica: "Escala para esta hoja: 1/8" = 1'-0"."
4. Compruébela (abajo).

Un preajuste supone que el PDF tiene el tamaño de papel real para el que se hizo el dibujo. Si alguien creó el PDF con "ajustar a la página", o es un juego a media escala, el preajuste es incorrecto. Calibre en su lugar.

La lista completa está en [Preajustes de escala](topic:scale-presets).

## Leer las escalas del texto de las hojas

La mayoría de los planos indican su escala: `SCALE: 1/4" = 1'-0"` en el cajetín, `1:100` bajo una vista. TakeoffCraft puede leerla y fijar todas las hojas a la vez.

1. Abra la lista {{ui:Preajuste}} y elija {{ui:Desde el texto de las hojas…}} (en la parte superior).
2. La lista muestra cada hoja: su escala actual, y lo que dice su texto: **Dice 1/4" = 1'-0"**, **Sin escala en su texto** o **Dice que no está a escala** (NTS).
3. Las hojas sin escala que sí la indican aparecen marcadas. Marque o desmarque las que quiera y elija {{ui:Definir las escalas marcadas}}. Un {{key:Mod+Z}} lo deshace todo.
4. Compruebe una cota de cada hoja con {{ui:Comprobar}} (abajo): un preajuste solo es correcto si el PDF se imprime a tamaño real.

Reconoce las notaciones arquitectónicas (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), de ingeniería (`1" = 20'`) y métricas (`1:50`) que coinciden con un [preajuste](topic:scale-presets). Cuando una hoja indica más de una escala (un plano con detalles ampliados), toma la que más veces aparece, y la que va detrás de la palabra SCALE cuenta doble; las demás se muestran en rojo para que las revise. Una hoja escaneada no tiene texto: defina su escala a mano.

## Calibrar sobre una cota conocida

Use esto cuando no hay una escala impresa en la que confíe, el juego se ha redimensionado, o la hoja dice "no a escala" pero tiene cotas.

1. Abra la hoja y acérquese a una cota larga que conozca, como la separación de una línea de ejes o una cota general del edificio. Cuanto más larga, más precisa.
2. Elija {{ui:Calibrar}} en el grupo {{ui:Escala}}, o pulse {{key:K}}.
3. Haga clic en un extremo de la cota. Acérquese a cada extremo para más precisión; puede acercar y desplazar la vista entre los clics.
4. Haga clic en el otro extremo. Mantenga pulsada {{key:Shift}} para mantener la línea a 0°, 45° o 90°. Se abre el diálogo **Calibrar esta hoja**.
5. Escriba la distancia real en **Distancia real**, por ejemplo `24'-6 1/2"`, `24.5` (pies decimales), `30"` o `7.5 m`. Véase [Introducción de longitudes, tarifas y porcentajes](topic:entry-formats).
6. Elija {{ui:Definir la escala}}. La barra de estado muestra la escala como "1" = (n)'", y cuando está dentro del 0.5% de un preajuste indica cuál, por ejemplo "que coincide con 1/4" = 1'-0" (elija ese preajuste para una escala exacta)". TakeoffCraft vuelve a la herramienta {{ui:Seleccionar}}.

Cuando la calibración coincide con un preajuste, elegir ese preajuste da una escala exacta en lugar de una que depende de dónde hizo clic.

## Comprobar la escala

Compruebe siempre una nueva escala con una segunda cota.

1. Elija {{ui:Comprobar}} en el grupo {{ui:Escala}}, o pulse {{key:D}}.
2. Haga clic en los dos extremos de una cota impresa en el dibujo. La barra de estado muestra "Comprobación: 12'-6"" con la misma longitud en pies decimales y en metros, y la línea de comprobación queda en la hoja con su longitud.
3. Compárela con la cota impresa. Si no coincide, calibre sobre una cota más larga.

Pulse {{key:Esc}} para borrar la línea de comprobación.

## Cambiar una escala

Elija otro preajuste o calibre de nuevo. Si la hoja ya tiene mediciones, TakeoffCraft pregunta **¿Cambiar la escala de esta hoja?** e indica cuántas mediciones se volverán a calcular. Elija {{ui:Cambiar la escala}}. Cada tramo y área de la hoja se vuelve a medir con la nueva escala. Puede deshacerlo con {{key:Mod+Z}}.

## Por qué las hojas sin escala no cuentan como cero

Una marca en una hoja sin escala no tiene longitud ni área reales. TakeoffCraft nunca la cuenta como cero, lo que haría que su presupuesto quedara en silencio demasiado bajo. En su lugar:

- deja esas marcas fuera de los totales,
- muestra "+(n) sin escala" junto a la partida en {{ui:Cantidades}},
- muestra "Incompleto: (n) marcas en hojas sin escala (no incluidas en los totales)" en el encabezado de la tabla,
- escribe el recuento en la columna de notas de la exportación a hoja de cálculo.

Puede ocurrir al abrir un proyecto cuyas escalas nunca se definieron. Asigne una escala a la hoja y las marcas se cuentan de inmediato. Las marcas de recuento siempre se cuentan; no necesitan escala.

## Consejos

- Defina la escala de cada hoja que vaya a medir antes de empezar. Busque **Sin escala** en la lista de hojas para encontrar las que faltan (el cuadro de búsqueda mira los nombres de las hojas, no las escalas).
- Los detalles y planos ampliados de la misma hoja suelen usar otra escala. TakeoffCraft tiene una sola escala por hoja; véase [Lo que aún no está incluido](topic:not-built-yet).
- Planos métricos: elija un preajuste métrico como `1:100`, o calibre con una distancia métrica como `6000 mm`.
