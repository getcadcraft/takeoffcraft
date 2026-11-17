---
title: Medir superficies con recortes
summary: Trazar pisos, teitos e laxes, cortar buratos neles, engadir bordos curvos, círculos e recortes redondos, e ler a superficie e o perímetro.
keywords: enchido de cuarto, enchido por inundación, cubo de pintura, clic dentro dun cuarto, superficie automática, contradeducción, back-out, pozo, deducir de varios elementos, superficie, polígono, contorno, pés cadrados, sf, recorte, burato, deducir, círculo, redondo, arco, perímetro, piso, teito, laxe
from: 34648db7
---

Un elemento de superficie mide a superficie encerrada. Cada contorno pode ter buratos recortados (un pozo, unha columna, unha xardineira), e os seus bordos poden ser rectos ou curvos.

Antes de empezar: a folla necesita unha escala ([Definir a escala](topic:set-the-scale)) e precisa un elemento de superficie ([Crear elementos de medición](topic:create-items)).

## Trazar unha superficie

1. Faga clic no elemento de superficie baixo {{ui:Items}}.
2. Escolla {{ui:Area}} na barra de ferramentas, ou prema {{key:A}}.
3. Faga clic en cada esquina do cuarto ou da laxe por quenda. Manteña {{key:Shift}} para bordos de 0°, 45° e 90°.
   Desde o terceiro punto en adiante, o contorno énchese e a barra de estado mostra «Superficie» e «perímetro». Aparece un pequeno anel arredor do primeiro punto.
4. Peche o contorno: faga clic no primeiro punto (dentro do seu anel), prema {{key:Enter}}, faga dobre clic ou clic dereito.
   A superficie énchese lixeiramente coa cor do elemento, etiquétase cos seus pés cadrados e convértese na marca seleccionada.

{{key:Backspace}} elimina a última esquina; {{key:Esc}} descarta o contorno.

Un contorno que se cruza a si mesmo non se acepta: «O contorno cruza a si mesmo, polo que a superficie sería incorrecta. Debúxeo de novo sen cruzamentos.» Debuxe unha figura en oito como dúas superficies.

## Bordos curvos

Mentres traza o contorno, active o modo arco ({{ui:Arc}} ou {{key:R}}). Despois dunha esquina, faga clic nun punto ao longo da curva e logo onde remata a curva. Para pechar o contorno cunha curva, faga o último clic no primeiro punto. A superficie e o perímetro usan a curva exacta. Prema de novo {{key:R}} para bordos rectos. Para cambiar unha curva despois, seleccione a superficie e arrastre o manexador redondo do centro do arco. Vexa [Medir tramos lineais](topic:measure-linear#arcs-and-curved-walls).

## Un círculo

1. Cun elemento de superficie, escolla {{ui:Circle}} ou prema {{key:O}}.
2. Faga clic no centro.
3. Faga clic en calquera punto do bordo.
   Mentres move, a barra de estado mostra o raio e a superficie. O círculo engádese como unha marca de superficie, cunha superficie e un perímetro exactos.

## Encher un cuarto cun clic

Cando os cuartos están debuxados como muros pechados, {{ui:Room}} ({{key:B}}) saca un chan dun clic:

1. Escolla un elemento de superficie (un acabado de chan, por exemplo) e dé á folla a súa escala.
2. Escolla {{ui:Room}} no grupo {{ui:Takeoff}}, ou prema {{key:B}}.
3. Faga clic dentro dun cuarto, no chan libre (non sobre unha liña nin unha etiqueta).

TakeoffCraft lee as liñas da folla, atopa o espazo arredor do clic e traza o contorno polas caras interiores dos muros, como unha superficie do elemento actual. As aberturas de porta ata **4'-0"** tómanse como pechadas, polo que o contorno pasa recto pola porta; **Configuración › TakeoffCraft › Enchido de cuartos pecha as aberturas ata** cambia ese ancho (de 3'-0" a 8'-0"). Os nomes de cuarto, o mobiliario e os accesorios dentro do cuarto non fan buratos.

Non se acepta, e di o motivo, cando:

- o clic está nunha liña («Iso está sobre unha liña»);
- o espazo non está pechado: unha abertura máis ancha que o axuste deixa que o espazo se estenda ata o bordo da folla. Suba o axuste, ou trace ese cuarto a man con {{ui:Area}};
- o espazo é moi pequeno (un símbolo, non un cuarto).

Cando unha porta é máis ancha que o axuste, o enchido pasa ao cuarto seguinte e traza os dous xuntos: desfaga ({{key:Mod+Z}}), suba o axuste e faga clic de novo. Revise o contorno como calquera superficie: arrastre as súas esquinas para corrixilo. Unha folla escaneada funciona igual, pero as súas liñas deben ser bastante escuras; as liñas en gris claro poden non deter o enchido.

## Cortar un burato dunha superficie

1. Escolla {{ui:Select}} ({{key:V}}) e faga clic na superficie. Mostra manexadores cadrados nas súas esquinas.
2. Escolla {{ui:Cut-out}} na barra de ferramentas (ou prema {{key:X}}), ou {{ui:Add a cut-out}} baixo **Marca seleccionada**.
3. Faga clic nas esquinas do burato, dentro da superficie. O modo arco tamén funciona aquí.
4. Péchao como unha superficie: faga clic no seu primeiro punto, prema {{key:Enter}}, faga dobre clic ou clic dereito.
   O burato queda sen encher, e a barra de estado di «Recorte engadido. Debuxe outro ou prema Esc.»
5. Debuxe máis buratos na mesma superficie, ou prema {{key:Esc}}.

Para un burato redondo, escolla {{ui:Add a round cut-out}} baixo **Marca seleccionada**, faga clic no seu centro e despois nun punto do seu bordo.

Un recorte debe estar completamente dentro da superficie e non se pode solapar con outro recorte. Se non, TakeoffCraft non o acepta: «O recorte ten que estar completamente dentro da superficie.» ou «Os recortes non se poden solapar entre si.»

Para quitar de novo o último burato, escolla {{ui:Remove last cut-out}}.

## Contradeduccións: columnas, pozos e aberturas quitadas de varios elementos

Un recorte pertence a unha marca de superficie. Unha **contradeducción** debúxase unha vez e sae de cada superficie que solapa, para os elementos que escolla: debuxe as columnas unha vez e saen do acabado de chan, do teito e da laxe ao mesmo tempo.

1. Cree un elemento de superficie para elas, como «Columnas».
2. Nos seus axustes de elemento, marque **Contradeducción: as súas marcas quitan a súa superficie doutros elementos**. Aparece unha lista dos seus outros elementos de superficie, todos marcados: desmarque os que as contradeduccións non deben tocar (a pintura dos muros, por exemplo).
3. Trace as columnas con {{ui:Area}} ou {{ui:Circle}}, como de costume. Cada unha debúxase con trazos discontinuos.

Cada marca de superficie dun elemento marcado da mesma folla perde a parte que cobre unha contradeducción: a contradeducción completa cando está dentro, só a parte solapada cando cruza o bordo, e nada dentro dun recorte. O panel da superficie seleccionada mostra **Contradeduccións** e a superficie restante. A cantidade do elemento, as súas fórmulas de montaxe, os custos, a vista de comprobación 3D e a exportación usan a superficie restante; as notas do orzamento indican canto quitaron as contradeduccións. O propio elemento de contradeducción conta a súa superficie (deixe os seus custos a cero se non o valora).

Unha contradeducción ten que ser **convexa**: un rectángulo, un círculo ou calquera contorno sen esquina interior. TakeoffCraft non a debuxa se non o é; debuxe un pozo en forma de L como dúas contradeduccións. As contradeduccións non poden ter recortes, e dúas contradeduccións que se solapan entre si contan as dúas.

O perímetro (`P`) non cambia: as contradeduccións quitan só superficie.

## Ler a superficie

Seleccione a superficie. **Marca seleccionada** mostra:

| Liña | Significado |
|---|---|
| Superficie | A superficie neta: contorno menos recortes. É o que conta o elemento. |
| Contorno | A superficie bruta dentro do contorno (mostrada cando hai recortes). |
| Recortes | Cantos buratos hai e a súa superficie total. |
| Perímetro | A lonxitude do contorno, **máis** os bordos de cada recorte («con recortes»). |

O perímetro inclúe os bordos dos recortes a propósito, para cousas como encofrados de bordo ou zócalos que tamén rodean un burato. Se só necesita o bordo exterior, deixe os buratos fóra dese elemento ou meza o bordo exterior como un tramo lineal.

A {{ui:Unit}} do elemento decide como se informa o total: SF, SY ou m². O panel de **Marca seleccionada** e a barra de estado mostran sempre pés cadrados.

## Corrixir unha superficie

- **Mover unha esquina**: seleccione a superficie e arrastre un manexador de esquina (os buratos tamén os teñen). Se a nova forma se cruzase ou empurrase un burato fóra, a esquina devólvese: «O punto volveu á súa posición.»
- **Mover a outro elemento**: escolla outro elemento de superficie na lista **Elemento** baixo **Marca seleccionada**.
- **Eliminar**: {{key:Delete}}, {{ui:Delete}} na barra de ferramentas, no menú {{ui:More}}, ou {{ui:Delete mark}}.

## Profundidade para volumes

Dé ao elemento de superficie unha {{ui:Depth}} (por exemplo `0'-4"` para unha laxe) e use `A * H / 27` nun compoñente de montaxe para obter iardas cúbicas. Vexa [Conxuntos e fórmulas](topic:assemblies).
