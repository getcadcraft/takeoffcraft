---
title: Moviment de terres i cotes puntuals
summary: Marqueu cotes puntuals en un plànol de situació, passeu-les a CivilCraft per a la superfície i el desmunt i terraplè, i calculeu aquí les quantitats d'excavació senzilla.
keywords: moviment de terres, excavació, desmunt, terraplè, desmunt i terraplè, anivellament, cota puntual, cotes, topo, superfície, triangulació, civilcraft, punts, pnezd, rasa
from: a898e508
---

TakeoffCraft mesura el que està dibuixat en un full. El moviment de terres necessita una superfície del terreny, de manera que es comparteix amb CivilCraft, que construeix superfícies a partir de punts, les anivella i calcula el desmunt, el terraplè i el transport.

## Excavació senzilla

Per a una empremta excavada a una sola profunditat, n'hi ha prou amb una partida d'àrea amb una **profunditat**: el volum és àrea × profunditat. El [paquet de gremi](topic:trade-packs) de contractista general té una partida d'excavació en massa (volum en banc, volum solt i càrregues de camió) i una partida de rasa de serveis (excavació, llit de sorra i reblert per longitud i profunditat).

## Cotes puntuals per a CivilCraft

1. Definiu l'escala del full del terreny.
2. Creeu una partida de **Recompte**, per exemple «Terreny actual», i feu clic a cada cota puntual del full.
3. Seleccioneu una marca i escriviu la seva {{ui:Cota}} al tauler de la marca seleccionada: `102.5`, `102'-6"` o `31.24 m`. Les cotes negatives i zero són vàlides.
4. Obriu el menú {{ui:Exporta}} i trieu {{ui:Cotes puntuals}}. Obteniu un fitxer de punts (`.csv`) amb les columnes Point, Northing, Easting, Elevation i Description, una fila per cada punt marcat del full obert.
5. Obriu aquest fitxer a CivilCraft (vegeu [Importa punts](app:civilcraft/import-points)). Construeix la superfície a partir dels punts ([Construeix una superfície](app:civilcraft/build-surface)); a partir d'aquí compara superfícies i dona el desmunt i el terraplè ([Volums](app:civilcraft/volumes)).

Northing i Easting són les coordenades pròpies del full, en peus, mesurades des de la cantonada de la pàgina a la seva escala: les distàncies i els volums entre els punts són correctes, però no són les coordenades topogràfiques del terreny. Traslladeu-les a les coordenades del terreny a CivilCraft quan calgui.

:::note
Els punts de fulls diferents no comparteixen coordenades, de manera que l'exportació només pren el full obert. Les cotes es desen amb l'amidament i es porten amb copiar i enganxar.
:::

## Desmunt i terraplè des de CivilCraft

El moviment de terres de CivilCraft torna en forma de dues partides que podeu valorar:

1. A CivilCraft, anivelleu les plataformes i els corredors i trieu {{ui:Envia a TakeoffCraft}} sota **Moviment de terres** ([Volums de moviment de terres](app:civilcraft/volumes)). Desa un fitxer de quantitats (`.quantities.json`).
2. A TakeoffCraft, obriu-lo amb {{ui:Obre amidament}}, o deixeu-lo anar sobre l'aplicació. L'amidament es manté obert: el fitxer afegeix **Moviment de terres: desmunt** i **Moviment de terres: terraplè** com a [quantitats tipades](topic:create-items#typed-quantities-no-drawing) en iardes cúbiques (CY) per a un projecte en peus, o en metres cúbics (m³) per a un projecte en metres. És un sol pas: {{key:Mod+Z}} ho desfà.
3. Reanomeneu-les i establiu la pèrdua, els preus unitaris i els preus descomposts com vulgueu.

Quan canvi el disseny, torneu a enviar des de CivilCraft i obriu el fitxer nou: les mateixes dues partides rebran les quantitats noves. Els seus noms, preus unitaris, pèrdua i preus descomposts es mantenen tal com els heu establert. Si ha canviat la unitat del projecte, la barra d'estat ho indica: reviseu els preus unitaris. Un fitxer d'un altre projecte de CivilCraft afegeix les seves pròpies dues partides.

Les quantitats són volums en banc, tal com els ha mesurat CivilCraft (mètode de quadrícula): sense contracció ni expansió. Afegiu-ho com a pèrdua, o amb una fórmula com `Q * 1.25` per al volum solt. L'editor de partides mostra d'on ve cada una i quan; la columna de notes del pressupost també ho indica.

:::note
El fitxer de quantitats és JSON senzill (`"format": "cadcraft-quantities"`), de manera que un script o un altre programa també en pot escriure un: un nom d'aplicació, un projecte, i partides amb una clau, un nom, una unitat i una quantitat.
:::
