---
title: Teulades i pendents
summary: Doneu a una àrea el seu pendent per mesurar la superfície de la teulada des del plànol, i mesureu els vora de frontó, les llimes i les valls al llarg de la seva inclinació.
keywords: teulada, pendent, inclinació, factor d'inclinació, alçada, recorregut, vora de frontó, llima, vall, frontó, coberta, quadres, àrea inclinada, longitud real, àrea en planta
from: 38225b60
---

Un plànol de coberta mostra cada pla de teulada pla, vist des de dalt. La coberta real és més gran: un pla al 6:12 té uns 12% més de superfície que la seva planta, i les seves vores inclinades són més llargues del que semblen. Doneu a la partida el seu pendent i TakeoffCraft mesura al llarg de la inclinació.

## Escriure un pendent

Un pendent és l'alçada per cada 12 de recorregut, com als símbols de pendent del plànol de coberta. Escriviu-lo com `6:12`, `6/12` o només `6`; també serveix un altre recorregut (`4:10` equival a 4.8:12). Un angle funciona amb el símbol de grau: `26.57°`. En blanc o `0` és pla.

## Àrees de coberta

1. Creeu una partida d'àrea per a la coberta, o obriu la que ja teniu.
2. A la seva configuració, escriviu el **Pendent**, com `6:12`.
3. Dibuixeu el contorn de cada pla de teulada al plànol amb {{ui:Àrea}}, com de costum.

Cada pla compta la seva àrea en planta multiplicada pel factor d'inclinació: √(1 + (alçada ÷ 12)²), 1.118 al 6:12 i 1.414 al 12:12. Seleccioneu un pla per veure la seva **Àrea** (sobre la inclinació), la seva **Àrea en planta** i el **Factor d'inclinació**.

Plans amb un altre pendent: seleccioneu el pla i escriviu-hi el seu propi **Pendent** al seu panell. Deixeu-lo en blanc per usar el de la partida. La vista de comprovació 3D, els preus descomposts (`A` és l'àrea inclinada), els costos i l'exportació usen tots l'àrea inclinada. Les deduccions en un pla amb pendent, com les claraboies, es resten amb la mateixa inclinació.

El perímetre (`P`) es queda com el perímetre en planta. Mesureu els beirats, els vora de frontó, les llimes i les valls com a recorreguts (a continuació).

## Vores de frontó, llimes i valls

1. Creeu una partida lineal, com "Vora de frontó" o "Llimes".
2. Establiu la seva **Inclinació** a **Vora de frontó** (una vora inclinada, com la d'un frontó) o **Llima o vall** (la línia on es troben dos plans), i escriviu el **Pendent** dels plans de la teulada.
3. Dibuixeu els recorreguts al plànol amb {{ui:Lineal}}.

Una vora de frontó compta la seva longitud en planta multiplicada pel factor d'inclinació. Una llima o una vall va a 45° pel plànol entre dos plans del mateix pendent, de manera que la seva longitud real és la seva longitud en planta multiplicada per √(1 + (alçada ÷ 12)² ÷ 2): 1.061 al 6:12, 1.225 al 12:12.

Un mateix recorregut pot barrejar-los. Seleccioneu-lo: cada segment al seu panell té una llista d'inclinació — **De la partida** (la configuració de la partida), **Nivell**, **Vora de frontó** o **Llima o vall** — i la seva longitud al llarg de la inclinació. El **Pendent** del recorregut al seu panell substitueix el de la partida per a tots els seus segments. El panell també mostra la **Longitud en planta**, i les etiquetes del plànol mostren les longituds al llarg de la inclinació.

Les deduccions continuen funcionant: un segment deduït no compta res, tant si és inclinat com si no.

:::note
Les llimes i les valls suposen que els dos plans tenen el mateix pendent. Per a plans de pendents diferents, mesureu la llima per la seva longitud real en un altre lloc, o dibuixeu-la com a vora de frontó amb un pendent equivalent.
:::
