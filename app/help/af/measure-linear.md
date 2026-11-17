---
title: Meet lineêre reekse
summary: Neem mure, pypwerk, afwerking en ander lengtes as reekse, met reguit segmente, boë en die Shift-vasvang van 45 grade.
keywords: lineêr, lengte, reeks, polilyn, mure, lf, lineêre voet, boog, kromme, 45 grade, ortho, vasvang, segmente, polylengte, aftrek, opening, deur, gaping, tik, getik, koördinate, afstand, direkte afstand, polêr
from: c669deff
---

’n Lineêre item meet lengte. Elke reeks is ’n ketting punte: reguit segmente, en boë waar jy boogmodus aanskakel. ’n Item kan enige aantal reekse op enige aantal blaaie hê.

Voordat jy begin: die blad benodig ’n skaal ([Stel die skaal](topic:set-the-scale)) en jy benodig ’n lineêre item ([Skep hoeveelheidsopname-items](topic:create-items)).

Op ’n vektor-PDF vasvang jou klikke aan die tekening se eie lyne: eindpunte, middelpunte en kruisings ([Vasvang aan die tekening se lyne](topic:snap-to-the-drawing); {{key:F3}} skakel dit af).

## Teken ’n reeks

1. Klik die lineêre item onder {{ui:Items}}.
2. Kies {{ui:Lineêr}} op die gereedskapsbalk, of druk {{key:L}}.
3. Klik die begin van die reeks.
4. Klik elke hoek langs die reeks.
   Die statusbalk wys "Lengte" (die reeks tot dusver, tot die wyser) en "segment" (die segment wat jy teken), in voet en duim.
5. Voltooi die reeks: dubbelklik die laaste punt, druk {{key:Enter}}, of regsklik.
   Die reeks word in die item se kleur geteken en word die gekose merk. Die item se lengte in die lys {{ui:Items}} en die tabel {{ui:Hoeveelhede}} gaan op.

Die gereedskap bly op {{ui:Lineêr}}, sodat jy die volgende reeks dadelik kan begin. Druk {{key:Esc}} om terug na {{ui:Kies}} te gaan.

Terwyl jy teken:

- {{key:Backspace}} (of {{key:Delete}}) verwyder die laaste punt.
- {{key:Esc}} gooi die onvoltooide reeks weg.
- Sleep beweeg die blad, en die muiswiel zoem, sonder om punte by te voeg.

:::mac
Op ’n Mac-raakplaat is regsklik ’n tweevinger-klik (skakel sekondêre klik aan in System Settings, onder Trackpad). TakeoffCraft lees net die sekondêre knoppie, so ’n Control-klik kan as ’n gewone klik geneem word en ’n punt byvoeg. Dubbelklik of {{key:Enter}} voltooi altyd.
:::

:::touch
Op ’n raakskerm: tik om punte te plaas, sleep een vinger om te pan en knyp met twee om te zoem. Voltooi met ’n lang druk, ’n dubbeltik, of {{ui:Voltooi}} in die balk onder die blad ({{ui:Agter}} neem die laaste punt terug). Sien [Foutoplossing](topic:troubleshooting#touch-screens).
:::

## Reguit lyne in 45°-stappe

Hou {{key:Shift}} terwyl jy ’n punt plaas. Die segment vanaf die laaste punt vasvang na die naaste rigting van 0°, 45°, 90° of 135°, en hou die lengte wat jy langs hom gesleep het. Die statusbalk herinner jou: "Shift vasvang by 45°".

In boogmodus geld dit vir waar ’n boog eindig: die boog se koord gaan in 45°-stappe vanaf waar dit begin. Die punt wat jy op die kromme klik, word nooit vasgevang nie.

## Boë en geboë mure

1. Terwyl jy ’n reeks teken, plaas die punt waar die kromme begin.
2. Skakel boogmodus aan: kies {{ui:Boog}} op die gereedskapsbalk of druk {{key:R}}. Die knoppie bly ingedruk.
3. Klik enige punt op die kromme, iewers in die middel daarvan.
   Die statusbalk voeg "(boog: klik waar dit eindig)" by, en die voorskou buig deur jou punt.
4. Klik waar die kromme eindig.
   Die boog word bygevoeg. Sy lengte is die presiese boogLengte, nie ’n reeks kort koorde nie.
5. Klik nog ’n punt op die volgende kromme en sy einde om boë te blyk te teken, of druk {{key:R}} weer om terug te gaan na reguit segmente.

{{key:Backspace}} of {{key:Esc}} laat eers die hangende punt op die kromme vaar; druk weer om punte soos gewoonlik te verwyder.

## Tik lengtes en koördinate

Ná die eerste punt kan jy tik waar die volgende een moet wees, in plaas van om te klik. Tik ’n syfer, `@` of `#`: ’n {{ui:Tik}}-boks maak oop in die statusbalk met wat jy getik het. Druk {{key:Enter}} om die punt te plaas; die boks bly oop vir die volgende een.

| Tik | Die volgende punt gaan |
|---|---|
| `12'6"` | 12'-6" vanaf die laaste punt, in die rigting van die wyser (wys die rigting, tik dan die lengte) |
| `12'6"<45` | 12'-6" teen 45°, teen-die-klok gemeet vanaf die skerm se regterkant (`<90` is op, `<-90` af) |
| `@6',-4'` | 6' regs en 4' af vanaf die laaste punt |
| `6',4'` (of `#6',4'`) | 6' regs en 4' op vanaf die eerste punt van hierdie reeks |

Lengtes word getik soos oral in TakeoffCraft ([Invoerformate](topic:entry-formats)): `12'-6 1/2"`, `12.5` (voet), `30"`, `3.2 m`. "Regs" en "op" is soos jy die blad sien, ook wanneer die PDF-bladsy gedraai word.

{{key:Enter}} op ’n leë boks voltooi die reeks, soos {{key:Enter}} op die blad; {{key:Esc}} maak die boks toe en hou die reeks aan die gang. Getikte punte volg dieselfde reëls as klikke: aftrekkings, boë en die sluiting van ’n oppervlakte werk almal. Dieselfde boks werk in {{ui:Oppervlakte}} en {{ui:Uitsnyding}}; ná ’n sirkel se middelpunt neem dit die radius.

## Trek ’n deel van ’n reeks af

’n Muurreeks wat ’n deur of ’n winkelfront verbysteek, kan reguit deurgeteken word en tel steeds net die muur: die segmente oor die opening is **aftrekkings**. Hulle word gestippel en dun geteken, en word nie getel nie.

Terwyl jy teken:

1. Plaas die punt waar die opening begin.
2. Kies {{ui:Aftrek}} op die gereedskapsbalk of druk {{key:E}}. Die knoppie bly ingedruk en die statusbalk sê die volgende segmente is aftrekkings.
3. Klik waar die opening eindig. Die segment word gestippel geteken; "Lengte" in die statusbalk laat dit weg.
4. Druk {{key:E}} weer en gaan voort langs die muur.

Ná die teken: kies die reeks. Onder **Gekose merk** het elke segment ’n {{ui:Aftrek}}-boks: merk dit om daardie segment af te trek, ontmerk dit om dit weer te tel. Elke verandering is een ongedaan-stap.

’n Reeks behou altyd ten minste een segment wat tel. Die paneel wys dan **Aftrekkings** (die afgetrekte lengte) en **Getrek** (die hele reeks); **Lengte**, die item se hoeveelheid, die muuroppervlakte en die koste gebruik almal die lengte sonder die aftrekkings. Die 3D-kontrole-aansig laat ’n gaping in die muur, die gemerkte PDF teken die aftrekkings gestippel, en die uitgevoerde blad **Merke** lys hulle.

Om ’n hoek te skuif hou die aftrekkings. Om punte by te voeg of te verwyder (deur die reeks weer te teken) begin sonder hulle.

## Kyk na ’n reeks se besonderhede

Kies {{ui:Kies}} ({{key:V}}) en klik die reeks. **Gekose merk** aan die regterkant wys:

- die item waaraan dit behoort (kies ’n ander lineêre item in die lys om die reeks daarheen te skuif),
- die blad,
- **Lengte** in voet en duim en in LF,
- die aantal **Segmente**, en die **Muuroppervlakte** wanneer die item ’n hoogte het,
- elke segment se lengte, met "(boog)" ná boë, en sy {{ui:Aftrek}}-boks.

Op die blad is elke segment van die gekose reeks met sy lengte geëtiketteer.

## Herstel ’n reeks

- **Beweeg ’n punt**: kies die reeks, en sleep dan een van sy vierkante hoekhandvatsels. Hou {{key:Shift}} om die geskuifde segment in 45°-stappe vas te vang. ’n Boog behou sy bulge.
- **Buig ’n boog**: ’n gekose reeks wys ’n ronde handvatsel in die middel van elke boog. Sleep dit: die boog gaan deur waar jy loslaat, so dit buig meer, minder, of die ander kant toe. Gesleep na die reguit lyn tussen sy eindpunte, word dit ’n reguit segment. {{key:Mod+Z}} ontdoen dit ("Buig boog").
- **Verwyder ’n reeks**: kies dit en druk {{key:Delete}}, kies {{ui:Skrap}} in die {{ui:Meer}}-menu van die gereedskapsbalk, of {{ui:Skrap merk}} in die paneel.
- **Ontdoen**: {{key:Mod+Z}}; herdoen met {{key:Mod+Y}}.

Jy kan nog nie ’n punt in die middel van ’n reeks invoeg nie. Verwyder die reeks en teken dit weer.

## Muuroppervlakte

Gee die lineêre item ’n {{ui:Hoogte}} (byvoorbeeld `9'-0"`). Dit rapporteer dan **Muuroppervlakte (A)** = lengte × hoogte, in VK (of m² vir ’n metriese item), en die muuroppervlakte gaan na die notekolom van die sigbladuitvoer. Gebruik dit in samestellings vir planke, verf of isolasie: sien [Samestellings en formules](topic:assemblies).
