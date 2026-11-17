---
title: Meet oppervlaktes met uitsnydings
summary: Omlyn vloere, plafonne en blaaie, sny gate daaruit, voeg geboë rande, sirkels en ronde uitsnydings by, en lees oppervlakte en omtrek.
keywords: vertrekvul, vloeivul, verfemmer, klik binne ’n vertrek, outo-oppervlakte, terugtrekking, back-out, kolom, skag, aftrek van verskeie items, oppervlakte, veelhoek, buitelyn, vierkante voet, sf, uitsnyding, gat, aftrek, sirkel, rond, boog, omtrek, vloer, plafon, blad
from: 34648db7
---

’n Oppervlakte-item meet ingeslote oppervlakte. Elke buitelyn kan gate daaruit gesny hê (’n skag, ’n kolom, ’n plantbak), en sy rande kan reguit of geboë wees.

Voordat jy begin: die blad benodig ’n skaal ([Stel die skaal](topic:set-the-scale)) en jy benodig ’n oppervlakte-item ([Skep hoeveelheidsopname-items](topic:create-items)).

## Omlyn ’n oppervlakte

1. Klik die oppervlakte-item onder {{ui:Items}}.
2. Kies {{ui:Oppervlakte}} op die gereedskapsbalk, of druk {{key:A}}.
3. Klik elke hoek van die vertrek of blad om die beurt. Hou {{key:Shift}} vir rande van 0°, 45° en 90°.
   Vanaf die derde punt vul die buitelyn in, en die statusbalk wys "Oppervlakte" en "omtrek". ’n Klein ring verskyn om die eerste punt.
4. Sluit die buitelyn: klik die eerste punt (binne sy ring), druk {{key:Enter}}, dubbelklik, of regsklik.
   Die oppervlakte word ligtelik in die item se kleur gevul, met sy vierkante voet daarop, en word die gekose merk.

{{key:Backspace}} verwyder die laaste hoek; {{key:Esc}} gooi die buitelyn weg.

’n Buitelyn wat homself kruis, word geweier: "Die buitelyn kruis homself, so sy oppervlakte sou verkeerd wees. Teken dit weer sonder om te kruis." Teken ’n agt-vormige figuur as twee oppervlaktes.

## Geboë rande

Skakel boogmodus aan terwyl jy omlyn ({{ui:Boog}} of {{key:R}}). Ná ’n hoek klik jy ’n punt langs die kromme, en dan waar die kromme eindig. Om die buitelyn met ’n kromme te sluit, maak daardie laaste klik op die eerste punt. Oppervlakte en omtrek gebruik die presiese kromme. Druk {{key:R}} weer vir reguit rande. Om ’n kromme daarna te verander, kies die oppervlakte en sleep die ronde handvatsel in die middel van die boog. Sien [Meet lineêre reekse](topic:measure-linear#arcs-and-curved-walls).

## ’n Sirkel

1. Met ’n oppervlakte-item, kies {{ui:Sirkel}} of druk {{key:O}}.
2. Klik die middelpunt.
3. Klik enige punt op die rand.
   Terwyl jy beweeg, wys die statusbalk die radius en oppervlakte. Die sirkel word as ’n oppervlaktemerk met ’n presiese oppervlakte en omtrek bygevoeg.

## Vul ’n vertrek met een klik

Wanneer die vertrekke as geslote mure geteken is, neem {{ui:Vertrek}} ({{key:B}}) ’n vloer in een klik af:

1. Kies ’n oppervlakte-item (’n vloerafwerking, byvoorbeeld) en gee die blad sy skaal.
2. Kies {{ui:Vertrek}} in die {{ui:Hoeveelheidsopname}}-groep, of druk {{key:B}}.
3. Klik binne ’n vertrek, in die oop vloer (nie op ’n lyn of ’n etiket nie).

TakeoffCraft lees die blad se lyne, vind die ruimte rondom die klik en omlyn dit langs die muurs se binnekante, as ’n oppervlakte van die huidige item. Deuropeninge tot **4'-0"** word as gesluit behandel, sodat die buitelyn reguit oor die deuropening loop; **Instellings › TakeoffCraft › Vertrekvul sluit openings tot** verander daardie wydte (3'-0" tot 8'-0"). Vertreknaam, meubels en toerusting binne die vertrek maak nie gate nie.

Dit weier, en sê waarom, wanneer:

- die klik op ’n lyn is ("Dit is op ’n lyn");
- die ruimte nie gesluit is nie: ’n opening wat wyer is as die instelling laat dit tot die rand van die blad loop. Verhoog die instelling, of omlyn daardie vertrek met die hand met {{ui:Oppervlakte}};
- die ruimte klein is (’n simbool, nie ’n vertrek nie).

Wanneer ’n deur wyer is as die instelling, loop die vulling in die volgende vertrek in en omlyn albei saam: ontdoen ({{key:Mod+Z}}), verhoog die instelling, en klik weer. Kontroleer die buitelyn soos enige oppervlakte: sleep sy hoeke om dit reg te maak. ’n Ingeskandeerde blad werk op dieselfde manier, maar sy lyne moet donker genoeg wees; ligte grys lyne stop dalk nie die vulling nie.

## ’n Gat uit ’n oppervlakte sny

1. Kies {{ui:Kies}} ({{key:V}}) en klik die oppervlakte. Dit wys vierkantige handvatsels by sy hoeke.
2. Kies {{ui:Uitsnyding}} op die gereedskapsbalk (of druk {{key:X}}), of {{ui:Voeg ’n uitsnit by}} onder **Gekose merk**.
3. Klik die hoeke van die gat, binne die oppervlakte. Boogmodus werk hier ook.
4. Sluit dit soos ’n oppervlakte: klik sy eerste punt, druk {{key:Enter}}, dubbelklik of regsklik.
   Die gat word onversadig gelaat, en die statusbalk sê "Uitsnyding bygevoeg. Teken nog een, of druk Esc."
5. Teken meer gate in dieselfde oppervlakte, of druk {{key:Esc}}.

Vir ’n ronde gat, kies {{ui:Voeg ’n ronde uitsnit by}} onder **Gekose merk**, klik die middelpunt, en dan ’n punt op sy rand.

’n Uitsnyding moet heeltemal binne die oppervlakte lê en mag nie ’n ander uitsnyding oorvleuel nie. Andersins weier TakeoffCraft dit: "’n Uitsnyding moet heeltemal binne die oppervlakte lê." of "Uitsnydings mag nie mekaar oorvleuel nie."

Om die laaste gat weer te verwyder, kies {{ui:Verwyder laaste uitsnit}}.

## Terugtrekkings: kolomme, skagte en openings wat uit verskeie items geneem word

’n Uitsnyding behoort aan een oppervlaktemerk. ’n **Terugtrekking** word een keer geteken en word uit elke oppervlakte geneem wat dit oorvleuel, vir die items wat jy kies: teken die kolomme een keer, en hulle word saam van die vloerafwerking, die plafon en die blad afgehaal.

1. Maak ’n oppervlakte-item vir hulle, soos "Kolomme".
2. Merk in sy item-instellings **Terugtrekking: sy merke neem hul oppervlakte uit ander items**. ’n Lys van jou ander oppervlakte-items verskyn, almal gemerk: ontmerk die items wat die terugtrekkings nie moet raak nie (verf op die mure, byvoorbeeld).
3. Neem die kolomme af met {{ui:Oppervlakte}} of {{ui:Sirkel}}, soos gewoonlik. Elkeen word gestippel geteken.

Elke oppervlaktemerk van ’n gemerkte item op dieselfde blad verloor die deel wat ’n terugtrekking dek: die hele terugtrekking wanneer dit binne lê, net die oorvleuelende deel wanneer dit die rand kruis, en niks binne ’n uitsnyding nie. Die paneel van die gekose oppervlakte wys **Terugtrekkings** en die oppervlakte wat oorbly. Die item se hoeveelheid, sy samestellingsformules, die koste, die 3D-kontrole-aansig en die uitvoer gebruik almal die oorblywende oppervlakte; die beraming se notas sê hoeveel terugtrekkings afgeneem het. Die terugtrekkingsitem self tel sy eie oppervlakte (laat sy koste op nul as jy dit nie prys nie).

’n Terugtrekking moet **konveks** wees: ’n reghoek, ’n sirkel, of enige buitelyn sonder ’n binnekantse hoek. TakeoffCraft weier om een te teken wat nie so is nie; teken ’n L-vormige skag as twee terugtrekkings. Terugtrekkings kan nie uitsnydings hê nie, en twee terugtrekkings wat mekaar oorvleuel, tel albei.

Die omtrek (`P`) verander nie: terugtrekkings neem slegs oppervlakte af.

## Lees die oppervlakte

Kies die oppervlakte. **Gekose merk** wys:

| Lyn | Betekenis |
|---|---|
| Oppervlakte | Die netto oppervlakte: buitelyn minus uitsnydings. Dit is wat die item tel. |
| Buitelyn | Die bruto oppervlakte binne die buitelyn (wat wys wanneer daar uitsnydings is). |
| Uitsnydings | Hoeveel gate, en hul totale oppervlakte. |
| Omtrek | Die buitelyn se randlengte, **plus** die rande van elke uitsnyding ("met uitsnydings"). |

Die omtrek sluit uitsnyding-rande met opset in, vir dinge soos randvorms of fondasie wat ook om ’n gat loop. As jy net die buitenste rand nodig het, hou gate uit daardie item, of meet die buitenste rand as ’n lineêre reeks.

Die item se {{ui:Eenheid}} bepaal hoe die totaal gerapporteer word: VK, SY of m². Die paneel **Gekose merk** en die statusbalk wys altyd vierkante voet.

## Herstel ’n oppervlakte

- **Beweeg ’n hoek**: kies die oppervlakte en sleep ’n hoekhandvatsel (gate het ook handvatsels). As die nuwe vorm homself sou kruis of ’n gat buite sit, word die hoek teruggesit: "Die punt is teruggesit."
- **Skuif na ’n ander item**: kies ’n ander oppervlakte-item in die lys **Item** onder **Gekose merk**.
- **Skrap**: {{key:Delete}}, {{ui:Skrap}} in die {{ui:Meer}}-menu van die gereedskapsbalk, of {{ui:Skrap merk}}.

## Diepte vir volumes

Gee die oppervlakte-item ’n {{ui:Diepte}} (byvoorbeeld `0'-4"` vir ’n blad) en gebruik `A * H / 27` in ’n samestellingskomponent om kubieke verf te kry. Sien [Samestellings en formules](topic:assemblies).
