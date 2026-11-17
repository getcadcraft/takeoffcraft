---
title: Configuración de TakeoffCraft
summary: Mostrar polgadas ata 1/16, 1/8 ou 1/4, comezar os elementos cunha porcentaxe de desperdicio, escoller onde comeza o control deslizante da contaxe automática, enganchar ás liñas do debuxo ou a 45° sen manter Shift, definir o ancho de porta que pecha o recheo de cuartos, e escoller o indicador de esquina da vista 3D.
keywords: configuración, preferencias, opcións, precisión, fraccións, polgadas, redondeo, desperdicio, desperdicio predeterminado, contaxe automática, limiar, coincidencia, control deslizante, enganchar, 45, ángulo, shift, cubo de vistas, icona de eixes, indicador de esquina, 3d
from: bca3f0ed
---

Abra {{ui:Settings}} coa engrenaxe da barra da aplicación ou con {{key:Mod+,}}. A primeira lapela, {{ui:TakeoffCraft}}, contén os axustes desta aplicación; {{ui:General}} contén os que comparten todas as aplicacións de CadCraft (tema, paneis, barra de ferramentas). Os axustes de TakeoffCraft existen só na aplicación: cámbiaos aquí, e este navegador lémbraos. {{ui:Reset TakeoffCraft settings}} os devolve ao inicio.

## Pés e polgadas

Mostra as lonxitudes ao 1/16" máis próximo (o inicio), 1/8" ou 1/4". Isto cambia como se len as lonxitudes na folla, nos paneis, nas cantidades e na barra de estado.

Só se redondea a visualización. As cantidades, os custos e as exportacións calcúlanse coas lonxitudes exactas, e as exportacións sempre mostran 1/16".

## Desperdicio ao inicio

A porcentaxe de desperdicio con que comeza cada elemento novo: 0% (o inicio), 2%, 3%, 5%, 7.5%, 10%, 15% ou 20%. Aínda pode escribir outro desperdicio para cada elemento, no editor do elemento ou directamente na táboa de cantidades. Os elementos que xa ten conservan o seu propio desperdicio.

## Contaxe automática: onde comeza o control deslizante de coincidencia

Onde se sitúa o control deslizante {{ui:Match}} cando remata unha busca de [contaxe automática](topic:auto-count), do 50% ao 95%; 75% é o inicio. Un valor máis baixo ofrece máis parecidos para rexeitar; un máis alto ofrece menos. Aínda pode mover o control deslizante durante cada revisión.

## Enganchar ás liñas do propio debuxo

Activado ao inicio. Mentres mide ou calibra, un punto preto dunha liña do PDF salta ao seu extremo, ao seu punto medio, a un cruce ou ao punto máis próximo sobre ela. {{key:F3}} e {{ui:Snap}} na barra de estado tamén o activan e desactivan. Máis: [Enganchar ás liñas do debuxo](topic:snap-to-the-drawing).

## Recheo de cuartos: que ancho de abertura pecha

{{ui:Room fill closes openings up to}} define a que ancho de porta ou fenda a ferramenta {{ui:Room}} considera pechada: de 3'-0" a 8'-0", 4'-0" ao inicio. Se é máis ancho que a porta máis ancha, un cuarto pasa ao seguinte; se é máis estreito que unha porta, o cuarto queda aberto. Vexa [Encher un cuarto cun clic](topic:measure-areas#fill-a-room-with-one-click).

## Enganchar a 45° sen manter Shift

Desactivado ao inicio. Cando está activado, os tramos, contornos, recortes e esquinas arrastradas van a 0°, 45°, 90° ou 135° desde o último punto sen manter {{key:Shift}}; manteña {{key:Shift}} para facer clic en calquera ángulo. A barra de estado entón di «Engancha a 45°; Shift libera o ángulo». O punto no que fai clic sobre a curva dun arco e os círculos nunca se enganchan; o extremo dun arco si.

## Tamaño do marcador de contaxe

Como de grandes son os puntos de contaxe: {{ui:Extra small}}, {{ui:Small}}, {{ui:Medium}} (o inicio: o tamaño que sempre tiveron os puntos) ou {{ui:Large}}. O tamaño mantense na pantalla a calquera zoom, e o PDF marcado debuxa cada punto co mesmo tamaño no papel, sexa cal sexa o tamaño da folla, así que o PDF ao 100% se ve como se ve na pantalla. Máis: [Contar a man](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicador de esquina

Só para a [vista de comprobación 3D](topic:check-in-3d): {{ui:View cube}} (o inicio: un cubo arriba á dereita para facer clic, arrastrar e xirar), {{ui:Axis icon}} (un pequeno marcador X, Y, Z abaixo á dereita) ou {{ui:None}}. Cambia ao momento e gárdase neste navegador. A folla plana nunca mostra ningún.

## Ferramenta de camiño: a maior fenda que une

{{ui:Path tool: largest gap to join}} é a distancia máxima entre dous extremos de liña para que conten como un só camiño, en puntos PDF (0.05 a 60; 1.5 ao inicio). As liñas dun debuxo adoitan parar un pelo antes unha da outra. Un valor maior une máis; un menor mantén as liñas separadas. {{key:[}} e {{key:]}} cámbiano mentres escolle, e este campo sígueo. Vexa [Escoller as liñas](topic:pick-the-lines).
