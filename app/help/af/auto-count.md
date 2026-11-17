---
title: Outo-tel ’n simbool
summary: Merk een simbool af, laat TakeoffCraft die ander op hierdie blad of elke oop blad vind, hersien die passings met die skuifbalk, en voeg hulle in een stap by.
keywords: enige hoek, geroteer, gedraai, ander skaal, verskillende skaal, outo-tel, outomatiese telling, simboolsoektog, vind simbole, patroon, sjabloon, passing, herken, telhulpmiddel
from: fa68a6c1
---

{{ui:Outo-tel}} vind elke kopie van ’n simbool nadat jy een omkader het. Jy hersien dan die passings op die blad en voeg die wat jy aanvaar as telmerke by. Dit is ’n hulpmiddel, nie ’n waarborg nie: hersien altyd voordat jy byvoeg.

## Vind die simbole

1. Maak ’n telitem onder {{ui:Items}} of klik op een.
2. Maak ’n blad oop waar die simbool voorkom.
3. Kies {{ui:Outo-tel}} in die nutsbalk, of druk {{key:S}}.
   ’n Balk verskyn bo-aan die blad: "Sleep ’n boks om een simbool op hierdie blad."
4. Om elke oop blad te deursoek, nie net hierdie een nie, merk {{ui:Soek alle oop blaaie}}.
5. Zoem in sodat die simbool maklik sigbaar is, en sleep dan ’n boks noukeurig om een kopie daarvan. Sluit die hele simbool in; leë papier rondom word afgesny.
   Die balk wys "Soek…" met ’n vorderingsbalk en ’n {{ui:Kanselleer}}-knoppie. Die bladsy bly reageer: jy kan zoem, pan en tussen blaaie beweeg. Kies ’n ander nutsding, of {{key:Esc}}, kanselleer die soektog.
6. Wanneer dit klaar is, verskyn die passings op die blad as bokse in die item se kleur, en die balk wys ’n opsomming soos "22 passings, 19 om by te voeg (3 reeds getel). Klik op ’n boks om dit te verwerp of te herstel."

In {{ui:Outo-tel}} trek sleep op die blad ’n boks in plaas van om te pan. Om te pan, hou {{key:Space}} vas en sleep, of sleep met die middelknoppie.

## Hersien die passings

- **Klik op ’n boks** om dit te verwerp. ’n Verwerpte boks is gestippel en deurgestreep. Klik weer om dit te herstel.
- **Skuif die {{ui:Passing}}-skuifbalk** (50% tot 95%, begin by 75%). Hoër wys slegs noue passings; laer wys losser een. Die skuifbalk filter net wat gevind is; dit soek nie weer nie.
- **Reeds getel**: passings op ’n plek wat reeds ’n telmerk van hierdie item het, begin verwerp, sodat jy niks dubbel tel nie.
- **Ander blaaie**: wanneer jy elke oop blad deurgesoek het, beweeg tussen blaaie met die bladlys of {{key:PageDown}} en hersien elkeen. Die opsomming sê hoeveel blaaie passings het.

## Voeg hulle by

Kies {{ui:Voeg by}}. Die knoppie sê hoeveel, byvoorbeeld "Voeg 19 merke by".
Die telmerke word by die middel van elke aanvaarde boks gevoeg: "19 telmerke by "Dupleks-kontak" gevoeg. Ctrl+Z verwyder hulle almal."

Die hele groep is een ontdoenstap, so een {{key:Mod+Z}} verwyder dit.

Om die hersiening te laat vaar sonder om iets by te voeg, kies {{ui:Gooi weg}} of druk {{key:Esc}}. As jy ’n ander nutsding kies, word dit ook weggegooi.

## Wat dit vind, en wat dit mis

TakeoffCraft vergelyk die tekening, as pixels, met die simbool wat jy omkader het.

- Dit vind die simbool wat 0°, 90°, 180° en 270° gedraai is. Merk {{ui:Enige hoek (stadiger)}} op die outo-tel-balk voordat jy die boks trek, om dit ook in enige hoek te vind: dit probeer elke 15°, en stel dan elke vondste fyn af tot op die graad en ’n halwe graad. Dit neem ongeveer ses keer so lank. Dit vind nie ’n gespieëlde simbool nie (tensy die simbool gespieël dieselfde lyk).
- Met {{ui:Soek alle oop blaaie}} gemerk, word ’n blad op ’n ander skaal deursoek by die grootte wat die simbool daar het: ’n armatuur wat op ’n 1/8"-plan volgens skaal geteken is, is die helfte van die grootte op ’n 1/4"-plan, en word steeds gevind. So ’n blad word ook by die boks se eie grootte deursoek, vir etikette en simbole wat op elke blad in een grootte gedruk is. Dit vereis ’n skaal op albei blaaie; ’n blad sonder skaal word net by die boks se grootte deursoek.
- Baie soortgelyke simbole kan mekaar pas: ’n dupleks- en ’n kwadrupleks-kontak, of twee armatuuretikette wat met een letter verskil. Skuif die skuifbalk hoër tot net die regte oorbly, en verwerp die res met die hand.
- ’n Simbool wat deur ander lyne, arsering of teks gekruis word, tel laer en benodig dalk ’n laer skuifbalkinstelling.
- Baie klein bokse word geweier: "Die boks is te klein. Trek dit om die hele simbool." ’n Leë boks word ook geweier: "Die boks is amper leeg. Trek dit om ’n simbool."
- ’n Blad wat baie groot sou wees by die grootte wat vir hierdie simbool nodig is, word oorgeslaan, en die opsomming sê "1 blad was te groot om by hierdie simboolgrootte te soek." Omkader ’n groter simbool, of tel daardie blad met die hand.

As niks gevind word nie, sê die statusbalk: "Geen passings. Verlaag die passingskuifbalk, of omkader die simbool noukeuriger."

## Spoed en blaaiers

Die soektog loop in ’n agtergrondwerker, sodat die bladsy reageer en jy enige tyd kan kanselleer. Elke blad word eers op die bladsy self by die werkgrootte geteken, wat ’n baie groot blad ’n oomblik kan laat stilstaan. Dit werk in huidige Chrome, Edge, Firefox en Safari. Soektogte oor baie blaaie duur langer; die vorderingsbalk beweeg blad vir blad. Vanlyn werk outo-tel wanneer die app-balk {{ui:Vanlyn gereed}} wys: {{ui:Stoor vir vanlyn}} hou die werker ook. Sien [Werk vanlyn](common:offline).
