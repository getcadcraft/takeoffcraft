---
title: Forzcursor a las líneas del dibujo
summary: Los puntos saltan a los propios trazos del PDF mientras mide o calibra: extremos, puntos medios, cruces o cualquier punto de una línea, con una marca que indica cuál es.
keywords: forzcursor, referencia a objetos, osnap, punto final, punto medio, intersección, cercano, vector, trazos, líneas, preciso, exacto, f3, imán, esquina
from: 41d29e9b
---

La mayoría de los juegos de planos son PDF vectoriales: sus muros y bordes son líneas reales, no píxeles. Mientras mide, TakeoffCraft ajusta sus clics a esas líneas, así que un tramo empieza exactamente en la esquina de un muro y una calibración toma la cota que dibujó el dibujante, no el píxel en el que hizo clic.

El {{ui:Forzcursor}} está activado al iniciar. Actívelo y desactívelo con {{ui:Forzcursor}} en la barra de estado o con {{key:F3}}; la configuración se guarda en este navegador (también está en [Configuración](topic:settings)).

## A qué se ajusta

Cuando el puntero se acerca a unos 10 píxeles de pantalla de una línea, una marca muestra dónde caerá el clic, con su nombre:

| Marca | Nombre | Dónde |
|---|---|---|
| Cuadrado | **Punto final** | El extremo de una línea, o una esquina donde se unen líneas. Los dos extremos de una curva cuentan; los puntos a lo largo de ella no. |
| Triángulo | **Punto medio** | El centro de una línea recta. |
| Cruz | **Intersección** | Donde se cruzan dos líneas, o donde una termina sobre otra. |
| Reloj de arena | **Sobre la línea** | El punto más cercano sobre una línea, cuando no hay ningún punto final, punto medio o intersección cerca. |

Gana el punto final, punto medio o intersección más cercano. Solo cuando ninguno está cerca, el punto cae sobre la línea misma. Haga zoom para elegir entre puntos muy juntos: los 10 píxeles son píxeles de pantalla, así que con más zoom cubren menos de la hoja.

## Dónde funciona

El forzcursor funciona en {{ui:Lineal}}, {{ui:Área}}, {{ui:Círculo}}, {{ui:Recorte}}, {{ui:Calibrar}} y {{ui:Comprobar}}, y al arrastrar la esquina de una marca seleccionada. También coloca puntos de arco. {{ui:Conteo}}, {{ui:Conteo automático}} y pegar no se ajustan.

Un punto ajustado tiene prioridad sobre el ajuste de 45° de {{key:Shift}}: para dibujar a 45° alejándose de las líneas, desactive primero el forzcursor con {{key:F3}}.

:::tip
Calibre con el forzcursor activado. Haga clic cerca de los dos extremos de una línea de cota o de un muro que conozca: ambos puntos caen exactamente sobre el dibujo y la escala sale exacta (la barra de estado indica entonces la escala predefinida que coincide).
:::

## Hojas en las que no puede ajustar

- **Las hojas escaneadas** son imágenes sin líneas a las que ajustarse. La barra de estado dice "Esta hoja no tiene líneas a las que ajustarse (una página escaneada es una imagen)." y los puntos caen donde haga clic.
- **Dibujos muy grandes**: el forzcursor lee hasta 400,000 segmentos de línea por hoja. En una hoja con más, lo indica y solo se ajusta a los primeros.
- **El texto** no se ajusta, a menos que el PDF dibuje sus letras como líneas (algunos trazadores lo hacen).

Las líneas de la hoja se leen la primera vez que la abre, en segundo plano; una hoja grande puede tardar un segundo antes de que aparezcan las marcas.
