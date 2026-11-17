---
title: Contar desde un debuxo
summary: Conte bloques, obxectos dunha capa ou texto directamente dun DWG ou DXF: exacto, con bloques anidados, variantes de bloques dinámicos e matrices de bloques tratadas, nun só paso para desfacer.
keywords: contar desde debuxo, contaxe CAD, contar bloques, contaxe de bloques, inserción, nome do bloque, bloques anidados, bloque dinámico, variante, minsert, matriz, capa, tipo de entidade, círculos, texto, atributo, etiqueta, capas ocultas, contaxe exacta, como, portas, accesorios
from: 5060e24e
---

{{ui:Contaxe CAD}} na barra da folla (o comando **Contar desde o debuxo** nos outros estilos de menú) conta o que un DWG ou DXF di que hai. Onde {{ui:Contaxe automática}} busca unha imaxe dun símbolo e pode perder un ou atopar un falso, esta conta os obxectos: cada inserción dun bloque chamado `DOOR-36` é unha porta. Abra primeiro o debuxo: [Abrir un debuxo DWG ou DXF](topic:open-a-drawing).

## Contar un bloque

1. Abra unha folla do debuxo. {{ui:Contaxe CAD}} está na barra da folla.
2. Escóllao. A xanela lista os bloques con cantos hai de cada un. Busque por nome e escolla un.
3. Comprobe a liña debaixo da lista: «22 atopados, 22 por engadir».
4. Baixo {{ui:Engadir a}}, escolla un elemento de contaxe, ou deixe {{ui:Unha nova partida de contaxe}} e déelle un nome.
5. Escolla o botón de engadir, que indica o número: {{ui:Engadir 22 marcas}}. As marcas aparecen nos puntos de inserción do bloque, e a cantidade do elemento é a contaxe.

É un só paso para desfacer: {{key:Mod+Z}} retira as marcas (e un elemento novo) xuntos. A estimación, a folla de cálculo e o PDF marcado tratan o elemento como calquera outro elemento de contaxe.

### Que conta

- **Cada inserción do nome do bloque**, sexa cal sexa a súa escala e ángulo, no espazo modelo ou no espazo de papel. Os nomes de bloque non distinguen maiúsculas.
- **Matrices de bloques** (MINSERT): cada copia da matriz conta como unha.
- **Bloques anidados.** Un bloque colocado dentro doutro bloque cóntase a cada profundidade. A lista di «6 dentro doutros bloques»; desmarque {{ui:Contar tamén os bloques dentro doutros bloques}} para contar só as inserciones colocadas directamente no debuxo.
- **Bloques dinámicos.** Un bloque dinámico conta baixo o seu propio nome, non baixo as copias anónimas (`*U12`) que garda o ficheiro. Os seus estados listanse por separado («Simple 12, Dobre 4»): escolla un estado para contar só esos, ou {{ui:Todas as variantes}}. Cando un ficheiro non indica que estado mostra unha copia, esas listanse como «(estado descoñecido)».
- **Filtro de capa.** Un bloque en varias capas: escolla unha en {{ui:Na capa}}.

### Que non

- **Capas ocultas.** Un obxecto nunha capa que está apagada ou conxelada no ficheiro (ou que vostede ocultou en {{ui:Capas}}) déixase fóra, e a liña indica cantos: «3 en capas ocultas, deixados fóra». Marque {{ui:Contalos tamén}} para incluílos.
- **Debuxos ligados que non están abertos** non se contan; a xanela di iso.
- **Obxectos apilados exactamente sobre outro do mesmo tipo** contanse como dous (son dous obxectos), e a xanela di iso: adoita ser un erro de debuxo que merece unha ollada.

## O que mostra esta folla, ou o debuxo completo

- **O que mostra esta folla** conta os obxectos que mostra a folla: nunha presentación, os obxectos do modelo dentro das súas vistas (unha capa conxelada nunha vista non se conta alí) máis os propios da presentación.
- **O debuxo completo, cada obxecto unha vez** conta o espazo modelo unha vez, coas marcas na folla Modelo, e non conta o que varias presentacións mostran de novo.

Contar o que mostra unha presentación e contar o que mostra Modelo dan o mesmo número para os mesmos obxectos; non engada ambos a un mesmo elemento.

## Contar de novo

Contar o mesmo bloque de novo co mesmo elemento engade só o que é novo: «22 xa contados». Cada marca representa un obxecto.

## Por capa e tipo

En {{ui:Por capa e tipo}} escolla unha capa e un tipo de obxecto (círculos, polilíneas, trazados…): «todos os círculos en E-LITE». Marque {{ui:Contar tamén os obxectos dentro de bloques}} para incluír os que están dentro das definicións de bloque, en cada lugar onde se insire o bloque.

## Por texto

En {{ui:Por texto}} escriba o texto, como `A3`, e indique se é exactamente ese, se o contén, ou se o ten como palabra completa. Contan os obxectos de texto, o texto de multiliña e os **valores de atributo** dos bloques (un atributo de etiqueta `ITEM = A3` atópase); escolla {{ui:En atributo}} para contar só un atributo. Os textos máis comúns aparecen listados para facer clic.

## Cando usar Contaxe automática

Use {{ui:Contaxe automática}} para PDF e para símbolos dun debuxo que non son bloques (debuxados soltos, ou explotados). Se están debuxados como bloques, cóntos aquí.
