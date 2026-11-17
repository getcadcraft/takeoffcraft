---
title: Establir l'escala
summary: Donar a cada full una escala amb una predefinició o calibrant-la sobre una cota coneguda, comprovar-la, i entendre per què els fulls sense escala queden fora dels totals.
keywords: detectar escala, llegir escala, escala del text, tots els fulls, escala, calibrar, predefinició, comprovar escala, verificar, cota coneguda, sense escala, raó, establir escala
from: 8f0148e6
---

Cada full té la seva pròpia escala. La definiu vosaltres, o deixeu que TakeoffCraft la llegeixi del text dels fulls (a continuació), i la comproveu. Mentre un full no en tingui, {{ui:Lineal}}, {{ui:Àrea}}, {{ui:Cercle}} i {{ui:Tall}} es neguen a mesurar-hi. {{ui:Recompte}} i {{ui:Recompte automàtic}} funcionen sense escala.

La llista de fulls mostra l'escala de cada full, o **Sense escala**. La barra sota el full obert diu el mateix.

## Usar una predefinició (quan el PDF s'ha imprès a mida real)

1. Obriu el full.
2. Obriu la llista {{ui:Predefinida}} del grup {{ui:Escala}}.
3. Trieu l'escala impresa al dibuix, per exemple `1/8" = 1'-0"` a Arquitectònica.
   La barra d'estat diu "Escala d'aquest full: 1/8" = 1'-0"."
4. Comproveu-la (a continuació).

Una predefinició suposa que el PDF és la mida real de paper per a la qual es va fer el dibuix. Si algú ha fet el PDF amb "ajusta a la pàgina", o és un joc a mitja mida, la predefinició és errònia. Calibreu-la en lloc d'això.

La llista completa és a [Predefinides d'escala](topic:scale-presets).

## Llegir les escales del text dels fulls

La majoria de dibuixos diuen la seva escala: `SCALE: 1/4" = 1'-0"` al caixetí, `1:100` sota una vista. TakeoffCraft la pot llegir i definir tots els fulls alhora.

1. Obriu la llista {{ui:Predefinida}} i trieu {{ui:Des del text dels fulls…}} (a dalt).
2. La llista mostra cada full: la seva escala actual, i què diu el seu text — **Diu 1/4" = 1'-0"**, **Sense escala al text** o **Diu que no és a escala** (NTS).
3. Els fulls sense escala que en diuen una estan marcats. Marqueu o desmarqueu qualsevol, i després trieu {{ui:Defineix les escales marcades}}. Un {{key:Mod+Z}} les desfà totes.
4. Comproveu una cota de cada full amb {{ui:Comprova}} (a continuació): una predefinició només és correcta quan el PDF s'ha imprès a mida real.

Llegeix les notacions arquitectòniques (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), d'enginyeria (`1" = 20'`) i mètriques (`1:50`) que coincideixen amb una [predefinició](topic:scale-presets). Quan un full diu més d'una escala (un plànol amb detalls ampliats), en pren la que diu més sovint, i una escrita després de la paraula SCALE compta doble; les altres es mostren en vermell perquè les pugueu comprovar. Un full escanejat no té text: definiu-ne l'escala a mà.

## Calibrar sobre una cota coneguda

Useu-ho quan no hi ha una escala impresa de confiança, el joc s'ha redimensionat, o el full diu "no a escala" però té cotes.

1. Obriu el full i feu zoom sobre una cota llarga que conegueu, com l'espaiat d'una línia de graella o una cota total de l'edifici. Com més llarga, més precís.
2. Trieu {{ui:Calibra}} al grup {{ui:Escala}}, o premeu {{key:K}}.
3. Feu clic a un extrem de la cota. Feu zoom a cada extrem per precisió; podeu fer zoom i desplaçar-vos entre els clics.
4. Feu clic a l'altre extrem. Mantingueu {{key:Shift}} per mantenir la línia a 0°, 45° o 90°.
   S'obre el diàleg **Calibra aquest full**.
5. Escriviu la distància real a **Distància real**, per exemple `24'-6 1/2"`, `24.5` (peus decimals), `30"` o `7.5 m`. Consulteu [Introducció de longituds, preus i percentatges](topic:entry-formats).
6. Trieu {{ui:Estableix l'escala}}.
   La barra d'estat mostra l'escala com "1" = (n)'", i quan és a menys del 0.5% d'una predefinició diu quina, per exemple "que coincideix amb 1/4" = 1'-0" (trieu aquesta predefinició per a una escala exacta)".
   TakeoffCraft torna a l'eina {{ui:Selecciona}}.

Quan la calibració coincideix amb una predefinició, triar-la dóna una escala exacta en lloc d'una que depengui d'on heu fet clic.

## Comprovar l'escala

Comproveu sempre una escala nova sobre una segona cota.

1. Trieu {{ui:Comprova}} al grup {{ui:Escala}}, o premeu {{key:D}}.
2. Feu clic als dos extrems d'una cota impresa al dibuix.
   La barra d'estat mostra "Comprova: 12'-6"" amb la mateixa longitud en peus decimals i en metres, i la línia de comprovació es queda al full amb la seva longitud.
3. Compareu-la amb la cota impresa. Si no quadra, calibreu sobre una cota més llarga.

Premeu {{key:Esc}} per esborrar la línia de comprovació.

## Canviar una escala

Trieu una altra predefinició o torneu a calibrar. Si el full ja té mesures, TakeoffCraft pregunta **Canviar l'escala d'aquest full?** i diu quantes mesures es tornaran a mesurar. Trieu {{ui:Canvia l'escala}}. Cada recorregut i àrea del full es torna a mesurar a la nova escala. Ho podeu desfer amb {{key:Mod+Z}}.

## Per què els fulls sense escala no es compten com a zero

Una marca en un full sense escala no té longitud ni àrea reals. TakeoffCraft mai no la compta com a zero, perquè això faria que el pressupost sortís baix sense avisar. En lloc d'això:

- deixa aquestes marques fora dels totals,
- mostra "+(n) sense escala" al costat de la partida a {{ui:Quantitats}},
- mostra "Incomplet: (n) marques en fulls sense escala (no són als totals)" a la capçalera de la taula,
- escriu el recompte a la columna de notes de l'exportació del full de càlcul.

Això pot passar quan obriu un projecte les escales del qual mai no s'han definit. Doneu una escala al full i les marques es compten de seguida. Les marques de recompte sempre es comptabilitzen; no necessiten escala.

## Consells

- Definiu l'escala de cada full que vulgueu mesurar abans de començar. Cerqueu **Sense escala** a la llista de fulls per trobar els que falten (la caixa de cerca mira els noms dels fulls, no les escales).
- Els detalls i les plantes ampliades del mateix full sovint fan servir una altra escala. TakeoffCraft té una sola escala per full; consulteu [Què encara no està implementat](topic:not-built-yet).
- Dibuixos mètrics: trieu una predefinició mètrica com `1:100`, o calibreu amb una distància mètrica com `6000 mm`.
