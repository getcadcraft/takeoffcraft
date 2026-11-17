---
title: Enganchar ás liñas do debuxo
summary: Os puntos saltan á propia liñaxe do PDF mentres mides ou calibras: extremos, puntos medios, cruces ou calquera punto dunha liña, cun marcador que indica cal é.
keywords: enganchar, osnap, enganche a obxecto, extremo, punto medio, interseción, máis próximo, vectorial, liñaxe, liñas, preciso, exacto, f3, imán, esquina
from: 41d29e9b
---

A maioría dos conxuntos de planos son PDF vectoriais: os seus muros e bordos son liñas reais, non píxeles. Mentres mides, TakeoffCraft engancha os teus clics a esas liñas, de modo que un tramo comeza exactamente na esquina dun muro e unha calibración le a cota que debuxou o delineante, non o píxel onde fas clic.

O enganche está activado ao comezar. Actívao e desactívao con {{ui:Enganchar}} na barra de estado ou con {{key:F3}}; o axuste consérvase neste navegador (tamén está en [Configuración](topic:settings)).

## A que engancha

Cando o punteiro está a uns 10 píxeles dunha liña, un marcador indica onde caerá o clic, co seu nome:

| Marcador | Nome | Onde |
|---|---|---|
| Cadrado | **Extremo** | O extremo dunha liña, ou unha esquina onde se encontran liñas. Os dous extremos dunha curva contan; os puntos ao longo dela non. |
| Triángulo | **Punto medio** | O centro dunha liña recta. |
| Cruz | **Interseción** | Onde se cruzan dúas liñas, ou onde unha termina noutra. |
| Reloxo de area | **Sobre a liña** | O punto máis próximo dunha liña, cando non hai ningún extremo, punto medio ou cruce preto. |

O extremo, punto medio ou cruce máis próximo gaña. Só cando ningún está preto, o punto cae sobre a propia liña. Achégate para escoller entre puntos moi xuntos: os 10 píxeles son píxeles da pantalla, así que a maior zoom cobren menos da folla.

## Onde funciona

O enganche funciona en {{ui:Lineal}}, {{ui:Superficie}}, {{ui:Círculo}}, {{ui:Recorte}}, {{ui:Calibrar}} e {{ui:Comprobar}}, e cando arrastras a esquina dunha marca seleccionada. Tamén coloca os puntos dos arcos. {{ui:Contar}}, {{ui:Contaxe automática}} e pegar non se enganchan.

Un punto enganchado gaña ao enganche de 45° de {{key:Shift}}: para debuxar a 45° lonxe das liñas, desactiva antes o enganche con {{key:F3}}.

:::tip
Calibra con el enganche activado. Fai clic preto dos dous extremos dunha liña de cota ou dun muro que coñezas: ambos puntos caen exactamente sobre o debuxo e a escala sae exacta (a barra de estado indica entón a predefinida que coincide).
:::

## Follas nas que non se pode enganchar

- **As follas escaneadas** son imaxes sen liñas nas que enganchar. A barra de estado di "Esta folla non ten liñas nas que enganchar (unha páxina escaneada é unha imaxe)." e os puntos van onde fas clic.
- **Debuxos moi grandes**: o enganche le ata 400.000 segmentos de liña por folla. Nunha folla con máis, avisa e engancha só aos primeiros.
- **O texto** non se engancha, a menos que o PDF debuxe as súas letras como liñas (algúns plotters fano).

As liñas da folla lense a primeira vez que a abres, en segundo plano; unha folla grande pode tardar un segundo en mostrar os marcadores.
