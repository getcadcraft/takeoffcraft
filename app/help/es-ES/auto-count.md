---
title: Autorrecuento de un símbolo
summary: Dibuje un recuadro alrededor de un símbolo, deje que TakeoffCraft busque los demás en esta hoja o en todas las hojas abiertas, revise las coincidencias con el control deslizante y añádalas en un solo paso.
keywords: cualquier ángulo, girado, rotado, otra escala, escala distinta, autorrecuento, recuento automático, búsqueda de símbolos, buscar símbolos, patrón, plantilla, coincidencia, detectar, herramienta de recuento
from: fa68a6c1
---

{{ui:Autorrecuento}} busca todas las copias de un símbolo después de que dibuje un recuadro alrededor de uno. Después, revise las coincidencias en la hoja y añada las que acepte como marcas de recuento. Es una ayuda, no una garantía: revise siempre antes de añadir.

## Buscar los símbolos

1. Cree o haga clic en una partida de recuento en {{ui:Partidas}}.
2. Abra una hoja donde aparezca el símbolo.
3. Elija {{ui:Autorrecuento}} en la barra de herramientas, o pulse {{key:S}}.
   Aparece una barra en la parte superior de la hoja: "Arrastre un recuadro alrededor de un símbolo en esta hoja."
4. Para buscar en todas las hojas abiertas, y no solo en esta, marque {{ui:Buscar en todas las hojas abiertas}}.
5. Acerque la vista para ver bien el símbolo y arrastre un recuadro ajustado alrededor de una copia. Incluya el símbolo completo; el papel en blanco que lo rodea se recorta.
   La barra muestra "Buscando…" con una barra de progreso y un botón {{ui:Cancelar}}. La página sigue respondiendo: puede acercar, desplazar y pasar entre hojas. Al elegir otra herramienta, o pulsar {{key:Esc}}, se cancela la búsqueda.
6. Cuando termina, las coincidencias aparecen en la hoja como recuadros del color de la partida, y la barra muestra un resumen como "22 coincidencias, 19 para añadir (3 ya contadas). Haga clic en un recuadro para descartarlo o restaurarlo".

En {{ui:Autorrecuento}}, arrastrar sobre la hoja dibuja un recuadro en lugar de desplazarla. Para desplazarla, mantenga pulsado {{key:Space}} y arrastre, o arrastre con el botón central.

## Revisar las coincidencias

- **Haga clic en un recuadro** para descartarlo. Un recuadro descartado aparece discontinuo y tachado. Haga clic de nuevo para restaurarlo.
- **Mueva el control deslizante de {{ui:Coincidencia}}** (del 50% al 95%, empezando en 75%). Un valor más alto muestra solo las coincidencias cercanas; uno más bajo muestra coincidencias más flexibles. El control solo filtra lo encontrado; no vuelve a buscar.
- **Ya contados**: las coincidencias en un punto que ya tiene una marca de recuento de esta partida empiezan descartadas, para que no cuente nada dos veces.
- **Otras hojas**: cuando buscó en todas las hojas abiertas, pase de una hoja a otra con la lista de hojas o con {{key:PageDown}} y revise cada una. El resumen indica cuántas hojas tienen coincidencias.

## Añadirlas

Elija {{ui:Añadir}}. El botón indica cuántas, por ejemplo "Añadir 19 marcas".
Las marcas de recuento se añaden en el centro de cada recuadro aceptado: "Se han añadido 19 marcas de recuento a "Toma de corriente doble". Ctrl+Z las elimina todas".

Todo el lote es un solo paso de deshacer, así que una pulsación de {{key:Mod+Z}} lo elimina.

Para descartar la revisión sin añadir nada, elija {{ui:Descartar}} o pulse {{key:Esc}}. Elegir otra herramienta también la descarta.

## Qué encuentra y qué no

TakeoffCraft compara el dibujo, como píxeles, con el símbolo delimitado con el recuadro.

- Encuentra el símbolo girado 0°, 90°, 180° y 270°. Marque {{ui:Cualquier ángulo (más lento)}} en la barra de autorrecuento antes de dibujar el recuadro para encontrarlo también en cualquier ángulo: prueba cada 15° y, después, ajusta cada hallazgo al grado y medio. Tarda unas seis veces más. No encuentra un símbolo reflejado (salvo que el símbolo tenga el mismo aspecto reflejado).
- Con {{ui:Buscar en todas las hojas abiertas}} marcado, una hoja a otra escala se busca al tamaño que tiene el símbolo en esa hoja: una luminaria dibujada a escala en un plano a 1/8" es la mitad de grande que en un plano a 1/4", y aun así se encuentra. Esa hoja también se busca al tamaño del propio recuadro, para etiquetas y símbolos impresos con un tamaño fijo en todas las hojas. Esto requiere una escala en ambas hojas; una hoja sin escala se busca solo al tamaño del recuadro.
- Los símbolos muy parecidos pueden coincidir entre sí: una toma doble y una cuádruple, o dos etiquetas de luminaria que difieren en una letra. Suba el control hasta que solo queden las correctas, y descarte el resto a mano.
- Un símbolo cruzado por otras líneas, rayados o textos puntúa más bajo y puede necesitar un valor más bajo del control.
- Los recuadros muy pequeños se rechazan: "Ese recuadro es demasiado pequeño. Dibújelo alrededor de todo el símbolo." Un recuadro vacío también se rechaza: "Ese recuadro está casi vacío. Dibújelo alrededor de un símbolo".
- Una hoja que sería muy grande al tamaño necesario para este símbolo se omite, y el resumen indica "1 hoja era demasiado grande para buscar con este tamaño de símbolo." Delimite un símbolo más grande o cuente esa hoja a mano.

Si no se encuentra nada, la barra de estado indica: "Sin coincidencias. Baje el control de coincidencia o delimite el símbolo con más precisión."

## Velocidad y navegadores

La búsqueda se ejecuta en un proceso en segundo plano, así que la página sigue respondiendo y puede cancelarla en cualquier momento. Cada hoja se dibuja primero al tamaño de trabajo en la propia página, lo que puede hacer que una hoja muy grande se detenga un momento. Funciona en las versiones actuales de Chrome, Edge, Firefox y Safari. Buscar en muchas hojas tarda más; la barra de progreso avanza hoja a hoja. Sin conexión, el autorrecuento funciona cuando la barra de la aplicación muestra {{ui:Listo sin conexión}}: {{ui:Guardar para uso sin conexión}} mantiene también el proceso en segundo plano. Véase [Trabajar sin conexión](common:offline).
