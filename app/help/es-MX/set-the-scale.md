---
title: Asignar la escala
summary: Asigne a cada hoja una escala con una predefinida o calibrando con una medida conocida, compruébela, y entienda por qué las hojas sin escala quedan fuera de los totales.
keywords: detectar escala, leer escala, escala desde el texto, todas las hojas, escala, calibrar, predefinida, comprobar escala, verificar, medida conocida, sin escala, razón, asignar escala
from: 8f0148e6
---

Cada hoja tiene su propia escala. Usted la asigna, o deja que TakeoffCraft la lea del texto de las hojas (abajo), y luego la comprueba. Mientras una hoja no tenga escala, {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} y {{ui:Cut-out}} se niegan a medir en ella. {{ui:Count}} y {{ui:Auto count}} funcionan sin escala.

La lista de hojas muestra la escala de cada hoja, o **Sin escala**. La barra bajo la hoja abierta dice lo mismo.

## Usar una predefinida (cuando el PDF está impreso a tamaño real)

1. Abra la hoja.
2. Abra la lista {{ui:Preset}} en el grupo {{ui:Scale}}.
3. Elija la escala impresa en el dibujo, por ejemplo `1/8" = 1'-0"` en Arquitectónica.
   La barra de estado dice "Escala para esta hoja: 1/8" = 1'-0"."
4. Compruébela (abajo).

Una predefinida supone que el PDF tiene el tamaño de papel real para el que se hizo el dibujo. Si alguien hizo el PDF con "ajustar a la página", o es un juego a media escala, la predefinida está mal. Calibre en su lugar.

La lista completa está en [Escalas predefinidas](topic:scale-presets).

## Leer las escalas del texto de las hojas

La mayoría de los dibujos indican su escala: `SCALE: 1/4" = 1'-0"` en el cajetín, `1:100` bajo una vista. TakeoffCraft puede leerla y asignar todas las hojas de una vez.

1. Abra la lista {{ui:Preset}} y elija {{ui:Desde el texto de las hojas…}} (arriba).
2. La lista muestra cada hoja: su escala actual, y lo que dice su texto — **Dice 1/4" = 1'-0"**, **Sin escala en su texto** o **Dice no a escala** (NTS).
3. Las hojas sin escala que sí indican una aparecen marcadas. Marque o desmarque las que quiera, y elija {{ui:Set the ticked scales}}. Un {{key:Mod+Z}} las deshace todas.
4. Compruebe una dimensión en cada hoja con {{ui:Check}} (abajo): una predefinida solo es correcta si el PDF está impreso a tamaño real.

Lee notaciones arquitectónicas (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), de ingeniería (`1" = 20'`) y métricas (`1:50`) que coinciden con una [predefinida](topic:scale-presets). Cuando una hoja indica más de una escala (un plano con detalles ampliados), toma la que más se repite, y la escrita después de la palabra SCALE cuenta doble; las demás se muestran en rojo para que las revise. Una hoja escaneada no tiene texto: asígnele la escala a mano.

## Calibrar con una medida conocida

Use esto cuando no hay una escala impresa en la que confíe, cuando el juego se redimensionó, o cuando la hoja dice "no a escala" pero tiene cotas.

1. Abra la hoja y acérquese a una cota larga que conozca, como el espaciado de una línea de ejes o una cota total del edificio. Cuanto más larga, más precisa.
2. Elija {{ui:Calibrate}} en el grupo {{ui:Scale}}, o pulse {{key:K}}.
3. Haga clic en un extremo de la cota. Acérquese a cada extremo para mayor precisión; puede hacer zoom y encuadre entre los clics.
4. Haga clic en el otro extremo. Mantenga pulsada {{key:Shift}} para dejar la línea a 0°, 45° o 90°.
   Se abre el cuadro **Calibrar esta hoja**.
5. Escriba la distancia real en **Distancia real**, por ejemplo `24'-6 1/2"`, `24.5` (pies decimales), `30"` o `7.5 m`. Vea [Formatos de longitud, tarifa y porcentaje](topic:entry-formats).
6. Elija {{ui:Set the scale}}.
   La barra de estado muestra la escala como "1" = (n)'", y cuando está dentro de 0.5% de una predefinida dice cuál, por ejemplo "que coincide con 1/4" = 1'-0" (elija esa predefinida para una escala exacta)".
   TakeoffCraft vuelve a la herramienta {{ui:Select}}.

Cuando la calibración coincide con una predefinida, elegir esa predefinida da una escala exacta, en lugar de una que depende de dónde hizo clic.

## Comprobar la escala

Compruebe siempre una escala nueva con una segunda dimensión.

1. Elija {{ui:Check}} en el grupo {{ui:Scale}}, o pulse {{key:D}}.
2. Haga clic en ambos extremos de una dimensión impresa en el dibujo.
   La barra de estado muestra "Comprobación: 12'-6"" con la misma longitud en pies decimales y en metros, y la línea de comprobación queda en la hoja con su longitud.
3. Compárela con la dimensión impresa. Si no coincide, calibre con una dimensión más larga.

Pulse {{key:Esc}} para borrar la línea de comprobación.

## Cambiar una escala

Elija otra predefinida o calibre de nuevo. Si la hoja ya tiene mediciones, TakeoffCraft pregunta **¿Cambiar la escala de esta hoja?** e indica cuántas mediciones se volverán a medir. Elija {{ui:Change the scale}}. Cada tramo y cada área de la hoja se vuelve a medir a la nueva escala. Puede deshacerlo con {{key:Mod+Z}}.

## Por qué las hojas sin escala no cuentan como cero

Una marca en una hoja sin escala no tiene longitud ni área reales. TakeoffCraft nunca la cuenta como cero, porque eso haría que su presupuesto quedara demasiado bajo sin que usted lo notara. En su lugar:

- deja esas marcas fuera de los totales,
- muestra "+(n) sin escala" junto a la partida en {{ui:Quantities}},
- muestra "Incompleto: (n) marcas en hojas sin escala (no incluidas en los totales)" en el encabezado de la tabla,
- escribe el conteo en la columna de notas de la exportación a hoja de cálculo.

Esto puede pasar cuando abre un proyecto cuyas escalas nunca se asignaron. Asigne una escala a la hoja y las marcas se cuentan de inmediato. Las marcas de conteo siempre se cuentan; no necesitan escala.

## Consejos

- Asigne la escala a cada hoja que va a medir antes de empezar. Revise la lista de hojas en busca de **Sin escala** para encontrar las que faltan (el cuadro de búsqueda revisa nombres de hoja, no escalas).
- Los detalles y las plantas ampliadas en la misma hoja suelen usar otra escala. TakeoffCraft tiene una escala por hoja; vea [Lo que aún no está construido](topic:not-built-yet).
- Dibujos métricos: elija una predefinida métrica como `1:100`, o calibre con una distancia métrica como `6000 mm`.
