---
title: Ajustar a las líneas del plano
summary: Los puntos saltan a las líneas vectoriales del propio PDF mientras mide o calibra: extremos, puntos medios, cruces o cualquier punto de una línea, con un marcador que indica cuál es.
keywords: ajustar, ajuste a objetos, osnap, extremo, punto medio, intersección, más cercano, vectorial, trazos, líneas, preciso, exacto, F3, imán, esquina
from: 41d29e9b
---

La mayoría de los juegos de planos son PDF vectoriales: sus muros y bordes son líneas reales, no píxeles. Mientras mide, TakeoffCraft ajusta sus clics a esas líneas, de modo que un tramo empieza exactamente en la esquina de un muro y una calibración toma la cota que dibujó el delineante, no el píxel en el que hizo clic.

El ajuste está activado al iniciar. Actívelo o desactívelo con {{ui:Ajustar}} en la barra de estado o con {{key:F3}}; el valor se guarda en este navegador (también está en [Ajustes](topic:settings)).

## A qué se ajusta

Cuando el puntero se acerca a unos 10 píxeles de pantalla de una línea, un marcador muestra dónde caerá el clic, con su nombre:

| Marcador | Nombre | Dónde |
|---|---|---|
| Cuadrado | **Extremo** | El extremo de una línea o una esquina donde se unen líneas. Cuentan los dos extremos de una curva; no los puntos intermedios. |
| Triángulo | **Punto medio** | El centro de una línea recta. |
| Cruz | **Intersección** | Donde se cruzan dos líneas, o donde una termina sobre otra. |
| Reloj de arena | **Sobre la línea** | El punto más cercano de una línea, cuando no hay ningún extremo, punto medio ni cruce próximo. |

Gana el extremo, punto medio o cruce más cercano. Solo si ninguno está cerca, el punto se coloca sobre la línea. Amplíe la vista para elegir entre puntos muy juntos: los 10 píxeles son de pantalla, así que con más zoom cubren menos superficie de la hoja.

## Dónde funciona

El ajuste funciona en {{ui:Lineal}}, {{ui:Área}}, {{ui:Círculo}}, {{ui:Recorte}}, {{ui:Calibrar}} y {{ui:Comprobar}}, y al arrastrar la esquina de una marca seleccionada. También coloca puntos de arco. {{ui:Recuento}}, {{ui:Autorrecuento}} y pegar no se ajustan.

Un punto ajustado tiene prioridad sobre el ajuste a 45° de {{key:Shift}}: para dibujar a 45° alejándose de las líneas, desactive primero el ajuste con {{key:F3}}.

:::tip
Calibre con el ajuste activado. Haga clic cerca de los dos extremos de una línea de cota o de un muro conocido: ambos puntos caen exactamente sobre el plano y la escala resulta exacta (la barra de estado indica entonces el preajuste que coincide).
:::

## Hojas en las que no puede ajustar

- **Las hojas escaneadas** son imágenes sin líneas a las que ajustarse. La barra de estado indica «Esta hoja no tiene líneas a las que ajustarse (una página escaneada es una imagen).» y los puntos van donde haga clic.
- **Dibujos muy grandes**: el ajuste lee hasta 400,000 segmentos de línea por hoja. En una hoja con más, lo indica y solo se ajusta a los primeros.
- **El texto** no se ajusta, salvo que el PDF dibuje sus letras como líneas (algunos trazadores lo hacen).

Las líneas de la hoja se leen la primera vez que la abre, en segundo plano; una hoja grande puede tardar un segundo en mostrar los marcadores.
