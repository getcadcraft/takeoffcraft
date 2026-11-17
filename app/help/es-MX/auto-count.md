---
title: Conteo automático de un símbolo
summary: Dibuje un recuadro alrededor de un símbolo, deje que TakeoffCraft busque los demás en esta hoja o en todas las hojas abiertas, revise las coincidencias con el control deslizante y agréguelas en un solo paso.
keywords: cualquier ángulo, girado, rotado, otra escala, escala diferente, conteo automático, conteo automatico, búsqueda de símbolos, buscar símbolos, patrón, plantilla, coincidencia, detectar, herramienta de conteo
from: fa68a6c1
---

{{ui:Auto count}} encuentra cada copia de un símbolo después de que usted dibuja un recuadro alrededor de uno. Luego revise las coincidencias en la hoja y agregue las que acepte como marcas de conteo. Es una ayuda, no una garantía: revise siempre antes de agregar.

## Buscar los símbolos

1. Cree o elija una partida de conteo en {{ui:Items}}.
2. Abra una hoja donde aparezca el símbolo.
3. Elija {{ui:Auto count}} en la barra de herramientas, o pulse {{key:S}}.
   Aparece una barra en la parte superior de la hoja: "Arrastre un recuadro alrededor de un símbolo en esta hoja."
4. Para buscar en todas las hojas abiertas, no solo en esta, marque {{ui:Search all open sheets}}.
5. Acerque el zoom para que el símbolo se vea bien y arrastre un recuadro ajustado alrededor de una copia. Incluya el símbolo completo; el papel en blanco alrededor se recorta.
   La barra muestra "Buscando…" con una barra de progreso y un botón {{ui:Cancel}}. La página sigue respondiendo: puede hacer zoom, encuadrar y cambiar de hoja. Si elige otra herramienta o pulsa {{key:Esc}}, la búsqueda se cancela.
6. Al terminar, las coincidencias aparecen en la hoja como recuadros del color de la partida, y la barra muestra un resumen como "22 coincidencias, 19 para agregar (3 ya contadas). Haga clic en un recuadro para rechazarlo o restaurarlo."

En {{ui:Auto count}}, arrastrar sobre la hoja dibuja un recuadro en lugar de encuadrar. Para encuadrar, mantenga pulsada {{key:Space}} y arrastre, o arrastre con el botón central.

## Revisar las coincidencias

- **Haga clic en un recuadro** para rechazarlo. Un recuadro rechazado aparece con línea discontinua y tachado. Haga clic de nuevo para restaurarlo.
- **Mueva el control deslizante {{ui:Match}}** (de 50 % a 95 %, que empieza en 75 %). Un valor más alto muestra solo las coincidencias muy cercanas; uno más bajo muestra las más flexibles. El control solo filtra lo encontrado; no vuelve a buscar.
- **Ya contadas**: las coincidencias en un punto que ya tiene una marca de conteo de esta partida empiezan rechazadas, para que no cuente nada dos veces.
- **Otras hojas**: si buscó en todas las hojas abiertas, cambie de hoja con la lista de hojas o con {{key:PageDown}} y revise cada una. El resumen indica cuántas hojas tienen coincidencias.

## Agregarlas

Elija {{ui:Add}}. El botón indica cuántas son, por ejemplo "Agregar 19 marcas".
Las marcas de conteo se agregan en el centro de cada recuadro aceptado: "Se agregaron 19 marcas de conteo a "Tomacorriente dúplex". Ctrl+Z las elimina todas."

Todo el lote es un solo paso de deshacer, así que un {{key:Mod+Z}} lo elimina.

Para descartar la revisión sin agregar nada, elija {{ui:Discard}} o pulse {{key:Esc}}. Elegir otra herramienta también la descarta.

## Qué encuentra y qué no

TakeoffCraft compara el dibujo, como píxeles, con el símbolo que usted encerró en el recuadro.

- Encuentra el símbolo girado 0°, 90°, 180° y 270°. Marque {{ui:Any angle (slower)}} en la barra de conteo automático antes de dibujar el recuadro para encontrarlo también en cualquier ángulo: prueba cada 15° y luego ajusta cada hallazgo a grado y medio. Esto tarda unas seis veces más. No encuentra un símbolo reflejado (a menos que el símbolo se vea igual reflejado).
- Con {{ui:Search all open sheets}} marcado, una hoja en otra escala se busca al tamaño que tiene el símbolo en esa hoja: un accesorio dibujado a escala en un plano de 1/8" tiene la mitad del tamaño que en un plano de 1/4", y aun así se encuentra. Esa hoja también se busca al tamaño propio del recuadro, para etiquetas y símbolos impresos con un mismo tamaño en todas las hojas. Esto requiere una escala en ambas hojas; una hoja sin escala se busca solo al tamaño del recuadro.
- Símbolos muy parecidos pueden coincidir entre sí: un tomacorriente dúplex y uno cuádruple, o dos etiquetas de luminaria que difieren en una letra. Suba el control hasta que solo queden los correctos y rechace los demás a mano.
- Un símbolo cruzado por otras líneas, sombreados o textos obtiene una puntuación más baja y puede necesitar un valor más bajo en el control.
- Los recuadros muy pequeños se rechazan: "Ese recuadro es demasiado pequeño. Dibújelo alrededor del símbolo completo." Un recuadro vacío también se rechaza: "Ese recuadro está casi vacío. Dibújelo alrededor de un símbolo."
- Una hoja que sería muy grande al tamaño necesario para este símbolo se omite, y el resumen dice "1 hoja era demasiado grande para buscar con este tamaño de símbolo". Dibuje un recuadro de un símbolo más grande, o cuente esa hoja a mano.

Si no se encuentra nada, la barra de estado dice "Sin coincidencias. Baje el control de coincidencia o dibuje el recuadro más ajustado al símbolo."

## Velocidad y navegadores

La búsqueda se ejecuta en un proceso en segundo plano, así que la página sigue respondiendo y puede cancelarla en cualquier momento. Cada hoja primero se dibuja al tamaño de trabajo en la propia página, lo que puede hacer que una hoja muy grande se detenga un momento. Funciona en las versiones actuales de Chrome, Edge, Firefox y Safari. Buscar en muchas hojas tarda más; la barra de progreso avanza hoja por hoja. Sin conexión, el conteo automático funciona cuando la barra de la aplicación muestra {{ui:Offline ready}}: {{ui:Save for offline}} también guarda el proceso en segundo plano. Vea [Trabajar sin conexión](common:offline).
