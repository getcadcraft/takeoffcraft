---
title: Stoor en heropen 'n hoeveelheidsopname
summary: Stoor die hoeveelheidsopname as 'n .takeoff.json-projek, heropen dit met dieselfde PDF's, en wat gebeur as 'n PDF ontbreek of verander het.
keywords: hoeveelheidsopname in pdf, insluit, aanhegsel, stoor, maak oop, heropen, projek, takeoff.json, hervat, voortsit, hersiene pdf, veranderde pdf, ontbrekende pdf, rugsteun, outostoor, herstel, ineenstorting
from: bd5080a6
---

'n Hoeveelheidsopname word gestoor as 'n klein projeklêer, `(naam).takeoff.json`. Dit hou jou items, samestellings, tariewe, elke blad se skaal en elke merk. Dit hou **nie** die PDF's nie; dit vind hulle weer aan die hand van hul inhoud.

## Stoor

1. Kies {{ui:Save takeoff}} in die {{ui:File}}-groep, of druk {{key:Mod+S}}.
   Jou blaaier laai `(naam).takeoff.json` af. Die statusbalk sê "Saved (name).takeoff.json. It reopens on top of the same PDFs (they are matched by their contents)."
2. Skuif die lêer langs die werk se PDF's, sodat die twee saam bly.

Elke stoor laai 'n nuwe lêer af. Jou blaaier noem die tweede moontlik `(naam) (1).takeoff.json`; hou die nuutste.

Die naam kom van die eerste PDF wat jy in hierdie hoeveelheidsopname oopgemaak het.

:::note
Save takeoff is steeds die enigste manier om 'n hoeveelheidsopname as 'n lêer te bewaar. Terwyl jy werk, hou TakeoffCraft ook 'n herstelkopie in hierdie blaaier (sien hieronder), en wolkstoor is nog nie beskikbaar nie. As jy die oortjie met ongestoorde veranderinge probeer sluit, vra die blaaier of jy wil weggaan.
:::

## Hou die hoeveelheidsopname binne die PDF

{{ui:Export}} › {{ui:PDF with the takeoff inside}} laai 'n afskrif van elke oop PDF af, genoem soos `Plans (with takeoff).pdf`, wat die hele hoeveelheidsopname as 'n aanhegsel dra: items, merke, skale, tenderareas, alles wat die `.takeoff.json` hou. Die bladsye word nie verander nie, so dit lyk en druk soos die oorspronklike, en ander PDF-lesers lys die hoeveelheidsopname onder hul aanhegsels.

Maak daardie PDF in TakeoffCraft oop (enige manier waarop jy PDF's oopmaak) en dit vra **This PDF has a takeoff inside**: kies {{ui:Open the takeoff}} om dit terug te kry, of {{ui:Just the PDF}} om net die tekening oop te maak. Die afskrif staan vir die PDF waaruit dit gemaak is, dus open 'n `.takeoff.json` wat van enige een gestoor is, op albei.

Met verskeie PDF's dra elke afskrif die hele hoeveelheidsopname; maak hulle saam oop. As jy weer stoor vanaf 'n afskrif, vervang dit die hoeveelheidsopname binne in plaas van 'n tweede een by te voeg. Die `.takeoff.json` is steeds die lêer om te hou: dit is klein, en dit is wat outostoor en die desktop-program skryf.

## As die oortjie of die blaaier stop

'n Paar sekondes ná elke verandering hou TakeoffCraft 'n afskrif van die hoeveelheidsopname in hierdie blaaier se eie stoorplek, saam met sy PDF's as hulle 64 MB of minder beslaan. Niks word opgelaai nie. Wanneer jy die hoeveelheidsopname stoor, 'n nuwe begin of 'n ander projek oopmaak, verdwyn die afskrif.

As die oortjie ineenstort, die blaaier of rekenaar stop, of jy weggaan met ongestoorde veranderinge, vra TakeoffCraft die volgende keer wat jy dit oopmaak **Recover your work?** en lys die hoeveelheidsopname volgens naam. Kies **Recover** om dit terug te kry: die items, merke en skale keer terug, en sy PDF's maak weer oop as hulle bewaar is. Die statusbalk sê "Recovered (name). It is not saved to a file yet: Save takeoff keeps it." As die PDF's te groot was om te bewaar, maak hulle weer oop; die merke verskyn op hul bladsye. Meer: [Herstel jou werk](common:recover).

## Heropen

1. Maak TakeoffCraft oop.
2. Sleep die `.takeoff.json`-lêer en sy PDF's saam op die bladsy. Of kies {{ui:Open plans}} vir die PDF's en {{ui:Open takeoff}} vir die projek, in enige volgorde.
   Die statusbalk sê "Opened (name): 12 items, 340 marks." Elke blad kry sy skaal terug en die merke verskyn op hul bladsye.

Die volgorde van die PDF's maak nie saak nie, en ook nie hul lêernaams of vouers nie. TakeoffCraft herken elke PDF aan 'n vingerafdruk van sy inhoud.

As jy 'n projek oopmaak terwyl die huidige hoeveelheidsopname ongestoorde veranderinge het, vra TakeoffCraft eers: **Cancel**, **Discard changes**, of **Save takeoff first**. Om 'n projek oop te maak vervang die huidige items en merke; PDF's wat reeds oop is, bly oop.

## Wanneer 'n PDF ontbreek

As jy die projek oopmaak sonder al sy PDF's, voeg die statusbalk "Open its PDFs to see the marks (listed under Sheets)." by. Onder die bladlys sê 'n notas:

"This takeoff also covers PDFs that are not open. Their quantities are counted; open them to see and edit their marks:"

gevolg deur die lêernaame en groottes. Hulle merke tel steeds in elke totaal en uitvoer, met die skale waarteen hulle gemeet is. Maak daardie PDF's oop om die merke te sien en te wysig.

## Wanneer 'n PDF verander het

'n PDF wat hersien, of net weer deur 'n ander program gestoor is, het ander inhoud, so dit is 'n **ander lêer** vir TakeoffCraft, selfs met dieselfde naam. In die notas onder die bladlys sê so 'n lêer "a file with this name is open, but its contents differ".

- Die merke bly aan die ou weergawe geheg. Hulle bly tel, op hul ou posisies en skale.
- Die hersiene PDF maak as nuwe bladsye oop met geen skaal en geen merke nie.

Om die hoeveelheidsopname na die hersiening te skuif, maak albei PDF's oop en gebruik {{ui:Compare}} op die nuwe blad: [Vergelyk 'n hersiene blad en skuif die hoeveelheidsopname](topic:compare-revisions).

## 'n Beskadigde of vreemde lêer

TakeoffCraft kontroleer elke projeklêer voordat dit gebruik word. Boodskappe wat jy dalk sien:

- "(file) is not a TakeoffCraft project (it is not valid JSON)."
- "This is not a TakeoffCraft project file."
- "This project was saved by a newer TakeoffCraft. Open it there."
- "3 marks were damaged and left out." (die res maak oop)

## Ontdoen-geskiedenis

Die ontdoen-geskiedenis begin vars wanneer jy 'n projek oopmaak. Stoor maak dit nie skoon nie.
