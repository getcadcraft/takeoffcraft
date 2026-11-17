---
title: Revisa l'amidament en 3D
summary: Vegeu els murs, les lloses i els recomptes del full obert dempeus sobre el plànol, gireu al seu voltant, i feu clic en un per seleccionar-ne la marca.
keywords: png, imatge, fotografia, captura, pila, plantes, nivells, alçat, glb, gltf, exporta 3D, gruix del mur, alçada base, obertura, capçal de porta, 3d, tres d, revisió, vista, murs, alçada del mur, llosa, profunditat, volum, òrbita, model, selecció, isomètrica, perspectiva
from: fb16b4f7
---

La vista 3D és una revisió, no un segon dibuix: aixeca sobre el mateix full l'amidament del full que es veu a la pantalla, de manera que un mur que falta, una llosa duplicada o un recompte fora de lloc es veuen d'una ullada.

Abans de començar: el full necessita una escala ([Estableix l'escala](topic:set-the-scale)). Les alçades i profunditats necessiten peus reals, així que en un full sense escala {{ui:3D}} ho indica i es queda en el full pla.

## Obrir la vista 3D

1. Mostreu el full que voleu revisar.
2. Trieu {{ui:3D}} a la barra que mostra el nom i l'escala del full, o premeu {{key:3}}.
   La primera vegada, la vista 3D triga una estona a carregar-se. El full es dibuixa a terra, i l'amidament s'alça sobre ell amb el color de cada element.
3. Per tornar, trieu {{ui:3D}} de nou, {{ui:Torna al full}}, o premeu {{key:3}}. Triar una eina de dibuix (Lineal, Àrea, Recompte i així successivament) també hi torna, ja que les marques es dibuixen al full pla.

Mostra el full a la pantalla; canvieu de full a la llista de fulls, o amb {{key:PageDown}} i {{key:PageUp}}, i la vista 3D us segueix. Per veure diverses plantes alhora, apileu-les (més avall).

## Què veieu

| Marca | En 3D |
|---|---|
| Tram lineal, element amb alçada | Un mur d'aquesta alçada al llarg del tram. Els trams corbats segueixen la corba. |
| Tram lineal, element sense alçada | Una línia al full. Doneu-li una alçada a l'element sota **Element** per aixecar-la. |
| Àrea, element amb profunditat | Una llosa d'aquesta profunditat, amb els seus retalls oberts. |
| Àrea, element sense profunditat | Una placa fina de 2", perquè es vegi igualment. |
| Recompte | Un petit pal a cada punt comptat. |

L'alçada és el camp {{ui:Alçada}} d'un element lineal, i la profunditat és el camp {{ui:Profunditat}} d'un element d'àrea, sota **Element** (vegeu [Crea elements de l'amidament](topic:create-items)). Si el canvieu, la vista 3D s'actualitza a l'instant. La nota sota el nom del full indica què conté el full, per exemple "Aquest full en 3D: 2 murs, 1 llosa, 3 recomptes", i quants trams o àrees no tenen alçada o profunditat. Els clics travessen la nota i arriben a la vista.

Els números no canvien en 3D: l'àrea d'un mur és la seva longitud exacta per la seva alçada, i el volum d'una llosa és la seva àrea neta (contorn menys retalls, corbes exactes) per la seva profunditat. Les corbes es dibuixen com a trossos rectes curts només a la pantalla.

## Mirar al voltant

| Acció | Què fa |
|---|---|
| Arrossegueu, o arrossegueu amb el botó del mig | Gireu al voltant de l'amidament. |
| {{key:Shift}} + arrossegar, o arrossegar amb el botó dret | Desplaça. |
| Roda del ratolí | Amplia i redueix al punt del ratolí. |
| Lliscament de dos dits al trackpad | Gira ({{key:Shift}} desplaça). Un pinçament amplia. |
| {{ui:Iso}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Esquerra}}, {{ui:Dreta}}, {{ui:Inferior}} | Vistes estàndard, emmarcades sobre l'amidament. La vista 3D s'obre en {{ui:Iso}}. |
| {{ui:Perspectiva}} | Perspectiva activada o desactivada (paral·lela quan està desactivada). |
| {{ui:Zoom a l'extensió}} o {{key:F}} | Tot el full. |
| {{ui:Full}} | Mostra o amaga el dibuix a terra. |
| El cub de vista, a dalt a la dreta | Feu clic en una cara, aresta o cantonada per mirar des d'allà; arrossegueu-lo per girar; arrossegueu el seu anell de brúixola per rotar; el botó de casa torna a {{ui:Iso}}. |

La cantonada mostra un cub de vista, una petita icona dels eixos X, Y, Z, o res: trieu-ho a {{ui:Configuració}}, a la pestanya TakeoffCraft, sota **Indicador de cantonada** ([Configuració de TakeoffCraft](topic:settings)). El full pla no té indicador de cantonada.

:::touch
Un dit gira; dos dits pincen per ampliar i es mouen per desplaçar. Un toc selecciona.
:::

## Murs amb gruix, base i obertures

Un element lineal amb alçada es dreça com una franja fina. Per veure'l com un mur real, doneu-li la seva forma sota **En 3D** a la seva configuració:

- **Gruix del mur** (8", 0.2 m): el mur es converteix en un sòlid, centrat a la línia que heu dibuixat, amb cantonades a inglet.
- **Alçada de base**: el mur comença aquesta distància per sobre del terra (un fals sostre, una filera d'armaris superiors). Els elements d'àrea també la tenen: un sostre a 9'-0".
- **Capçal d'obertura**: un tram deduït (una porta, [Dedueix una part d'un tram](topic:measure-linear#deduct-a-part-of-a-run)) manté el mur per sobre d'aquesta alçada, de manera que una porta es veu com una porta. Sense això, un tram deduït deixa un buit fins a dalt.

Això només dona forma a la vista 3D: les quantitats (longitud, àrea del mur, costos) es mantenen com eren.

## Apilar les plantes

1. Obriu els PDF de cada planta.
2. A la vista 3D, trieu {{ui:Nivells…}} i escriviu la cota de cada planta, com `0` per a la planta baixa i `12'` per a la següent. Si ho deixeu en blanc, el full queda fora.
3. Trieu {{ui:Apila}}. Cada full amb un nivell mostra el seu amidament a la seva alçada; el full de la pantalla queda sota la seva pròpia planta, i la resta es veuen en contorn. La nota indica quantes plantes estan apilades.

Els fulls s'alineen segons la seva posició a la pàgina, així que això funciona per a plantes dibuixades de la mateixa manera (la mateixa mida i posició de full). Un full amb nivell però sense escala queda fora, i la nota ho indica. Torneu a triar {{ui:Apila}} per tenir un full cada vegada. Els nivells es desen amb l'amidament.

## Desar la vista 3D com a imatge

Trieu {{ui:PNG}} a la barra 3D per obtenir una imatge de la vista tal com es veu a la pantalla (`… 3D.png`); {{key:Shift}} + clic a {{ui:PNG}} la fa el doble de gran (`… 3D@2x.png`), per imprimir.

## Desar la vista 3D com a model

Trieu {{ui:GLB}} a la barra 3D. Obteniu un fitxer `.glb` (glTF, binari) del que mostra la vista — la planta a la pantalla, o totes les plantes apilades — que altres programes 3D poden obrir: un objecte per cada marca, amb el nom del seu element, en el color de l'element, en metres amb Y cap amunt. El full en si i els contorns no hi són.

## Seleccionar una marca des de 3D

Feu clic en un mur, llosa, placa o pal. La seva marca passa a ser la marca seleccionada, exactament com si hagués fet clic al full: apareix sota **Marca seleccionada**, el seu element passa a ser l'actual, i la barra d'estat indica la seva longitud i alçada, o la seva àrea, profunditat i iardes cúbiques. {{key:Shift}} + clic afegeix marques a la selecció o les en treu. {{key:Delete}} suprimeix les marques seleccionades i {{key:Mod+Z}} les retorna; {{key:Esc}} no en selecciona cap. De tornada al full, les mateixes marques continuen seleccionades.

:::tip
El dibuix segueix el tema: en Model, el full a terra es fa fosc igual que la vista plana.
:::
