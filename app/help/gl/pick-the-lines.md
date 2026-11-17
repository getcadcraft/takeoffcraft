---
title: Escoller as liñas do PDF
summary: Prema unha liña dun PDF vectorial para medir todo o seu percorrido conectado, ou prema dentro dun contorno pechado para a súa superficie, coa tolerancia de oco visible e unha acción de Desfacer por segmento.
keywords: ruta, escoller, liñas, conectado, percorrido completo, trazar, contorno, perímetro, oco, tolerancia, ponte, segmentos, tab, vectorial, superficie desde liñas, p
from: c22526ae
---

Nun PDF vectorial as paredes e os bordos son liñas reais. {{ui:Ruta}} ({{key:P}}) tómaas tal como se debuxan: un clic nunha liña mide todo o que está unido a ela, de extremo a extremo, así que non ten que seguir un muro premendo nas súas esquinas. A folla precisa unha escala. Unha páxina escaneada non ten liñas que escoller; use [Lineal](topic:measure-linear) ou [Superficie](topic:measure-areas) nela.

## Escoller unha ruta ou un contorno

1. Escolla {{ui:Ruta}}. A liña baixo o punteiro aparece perfilada, e as outras rutas que podería ser debuxadas en fino.
2. Prema unha liña: escóllese toda a ruta conectada. A barra baixo a barra de ferramentas indica os seus segmentos, a lonxitude, a tolerancia de oco e cantos ocos se uniron. Unha ruta que volve ao seu inicio está pechada e tamén indica o seu perímetro.
3. Ou prema dentro dun contorno pechado, lonxe de calquera liña: o contorno arredor dese punto escóllese como superficie. Escóllese primeiro o máis pequeno; {{key:Tab}} proba o seguinte máis grande.
4. Prema {{key:Enter}} (ou o botón dereito, ou faga dobre clic) para engadir as marcas. Unha ruta escollida convértese nunha marca dun elemento **lineal**, e un contorno nunha marca dun elemento de **superficie**: o elemento activo se ten ese tipo, se non o máis novo dese tipo. Sen ningún, ábrese o formulario de novo elemento e non se engade nada ata que volva premer {{key:Enter}}. Todo o escollido engádese nun só paso de desfacer.

## A tolerancia de oco

Os debuxantes deixan pequenos ocos onde as liñas deberían encontrarse. Dúas liñas únense cando os seus extremos están máis preto que a **tolerancia de oco**. Comeza en 1,5 puntos sobre a folla (indicada en pés e polgadas á escala da folla), e un anel de trazos desa largura segue o punteiro e sitúase en cada extremo da ruta baixo el. Cada oco salvado márcase cun anel laranxa nunha ruta escollida, e a barra conta os ocos.

{{key:]}} fai a tolerancia máis ampla, {{key:[}} máis estreita. Unha ruta escollida únese de novo ao instante coa nova tolerancia. Nunha unión, a ruta segue recta, polo camiño que menos se dobra, e deixa a rama.

## Teclas

| Tecla ou acción | Que fai |
|---|---|
| Clic | Escolle a ruta baixo o punteiro, ou o contorno arredor dela. |
| {{key:Shift}} + clic | Engade outra ruta ou contorno ao escollido. |
| {{key:Tab}} | Proba a seguinte ruta baixo o punteiro, ou o seguinte contorno máis grande. |
| {{key:Backspace}} ou {{key:Mod+Z}} | Quita o último segmento da última ruta escollida, un a un. Unha ruta sen segmentos desaparece. Sen nada escollido, {{key:Mod+Z}} é o desfacer normal. |
| {{key:[}} e {{key:]}} | Tolerancia de oco máis estreita e máis ampla. |
| {{key:Enter}} | Engade as marcas. |
| {{key:Esc}} | Borra o escollido. |

## Cousas que convén saber

- Unha curva do debuxo é unha cadea de anacos rectos curtos, así que a súa lonxitude é un pouco menor que a do arco verdadeiro. Para un arco exacto, mida o propio ficheiro do debuxo ([Medir desde un debuxo](topic:measure-from-a-drawing)).
- Un oco salvado conta como un salto recto a través del, así que o perímetro dun contorno pechado o inclúe.
- Só os trazos e recheos dos propios camiños da páxina son liñas. O texto debuxado como letras, e as imaxes, non.
