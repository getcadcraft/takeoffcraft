---
title: Stel die skaal
summary: Gee elke blad 'n skaal met 'n voorinstelling of deur te kalibreer op 'n bekende maat, kontroleer dit, en verstaan waarom bladsye sonder skaal uit die totale gelaat word.
keywords: bespeur skaal, lees skaal, skaal uit teks, alle bladsye, skaal, kalibreer, voorinstelling, kontroleer skaal, verifieer, bekende maat, sonder skaal, geen skaal, verhouding, stel skaal
from: 8f0148e6
---

Elke blad het sy eie skaal. Jy stel dit, of laat TakeoffCraft dit uit die bladsye se teks lees (hieronder), en kontroleer dit. Totdat 'n blad een het, weier {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} en {{ui:Cut-out}} om daarop te meet. {{ui:Count}} en {{ui:Auto count}} werk sonder 'n skaal.

Die bladlys wys elke blad se skaal, of **No scale**. Die balk onder die oop blad sê dieselfde.

## Gebruik 'n voorinstelling (wanneer die PDF op volle grootte gedruk is)

1. Maak die blad oop.
2. Maak die {{ui:Preset}}-lys in die {{ui:Scale}}-groep oop.
3. Kies die skaal wat op die tekening gedruk is, byvoorbeeld `1/8" = 1'-0"` onder Architectural.
   Die statusbalk sê "Scale for this sheet: 1/8" = 1'-0"."
4. Kontroleer dit (hieronder).

'n Voorinstelling neem aan dat die PDF die werklike papiergrootte is waarvoor die tekening gemaak is. As iemand die PDF met "fit to page" gemaak het, of dit 'n halwe-grootte stel is, is die voorinstelling verkeerd. Kalibreer eerder.

Die volledige lys is in [Skaalvoorinstellings](topic:scale-presets).

## Lees die skale uit die bladsye se teks

Die meeste tekeninge sê hul skaal: `SCALE: 1/4" = 1'-0"` in die titelblok, `1:100` onder 'n aansig. TakeoffCraft kan dit lees en elke blad op een slag stel.

1. Maak die {{ui:Preset}}-lys oop en kies {{ui:From the sheets' text…}} (bo aan).
2. Die lys wys elke blad: sy skaal nou, en wat sy teks sê — **Says 1/4" = 1'-0"**, **No scale in its text**, of **Says not to scale** (NTS).
3. Bladsye sonder skaal wat een noem, is gemerk. Merk of ontmerk enige, en kies dan {{ui:Set the ticked scales}}. Een {{key:Mod+Z}} neem hulle almal terug.
4. Kontroleer een maat op elke blad met {{ui:Check}} (hieronder): 'n voorinstelling is net korrek as die PDF op volle grootte gedruk is.

Dit lees argitektoniese (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), ingenieurs- (`1" = 20'`) en metriese notasies (`1:50`) wat by 'n [voorinstelling](topic:scale-presets) pas. As 'n blad meer as een skaal noem ('n plan met vergrote detail), neem dit die een wat dit die meeste sê, en een wat ná die woord SCALE geskryf is, tel dubbel; die ander word in rooi gewys sodat jy kan nagaan. 'n Ingeskandeerde blad het geen teks nie: stel sy skaal met die hand.

## Kalibreer op 'n bekende maat

Gebruik dit wanneer daar geen gedrukte skaal is wat jy vertrou nie, die stel is verander, of die blad sê "not to scale" maar het afmetings.

1. Maak die blad oop en zoem in op 'n lang maat wat jy ken, soos 'n rooster-lynafstand of 'n algehele gebouafmeting. Hoe langer, hoe akkurater.
2. Kies {{ui:Calibrate}} in die {{ui:Scale}}-groep, of druk {{key:K}}.
3. Klik op een punt van die maat. Zoem in op elke punt vir presisie; jy kan zoem en skuif tussen die klikke.
4. Klik op die ander punt. Hou {{key:Shift}} om die lyn op 0°, 45° of 90° te hou.
   Die **Calibrate this sheet**-dialoog open.
5. Tik die werklike afstand in **Real distance**, byvoorbeeld `24'-6 1/2"`, `24.5` (desimale voet), `30"` of `7.5 m`. Sien [Lengte-, tarief- en persentasie-invoer](topic:entry-formats).
6. Kies {{ui:Set the scale}}.
   Die statusbalk wys die skaal as "1" = (n)'", en as dit binne 0.5% van 'n voorinstelling is, sê dit watter een, byvoorbeeld "which matches 1/4" = 1'-0" (pick that preset for an exact scale)".
   TakeoffCraft gaan terug na die {{ui:Select}}-gereedskap.

Wanneer die kalibrasie by 'n voorinstelling pas, gee die kies van daardie voorinstelling 'n presiese skaal in plaas van een wat afhang van waar jy geklik het.

## Kontroleer die skaal

Kontroleer altyd 'n nuwe skaal op 'n tweede maat.

1. Kies {{ui:Check}} in die {{ui:Scale}}-groep, of druk {{key:D}}.
2. Klik op beide punte van 'n maat wat op die tekening gedruk is.
   Die statusbalk wys "Check: 12'-6"" met dieselfde lengte in desimale voet en meter, en die kontrolelyn bly op die blad met sy lengte.
3. Vergelyk dit met die gedrukte maat. As dit af is, kalibreer op 'n langer maat.

Druk {{key:Esc}} om die kontrolelyn te verwyder.

## Verander 'n skaal

Kies 'n ander voorinstelling of kalibreer weer. As die blad reeds metings het, vra TakeoffCraft **Change this sheet's scale?** en sê hoeveel metings weer gemeet sal word. Kies {{ui:Change the scale}}. Elke lynmeting en area op die blad word teen die nuwe skaal weer gemeet. Jy kan dit met {{key:Mod+Z}} ontdoen.

## Waarom bladsye sonder skaal nie as nul tel nie

'n Merk op 'n blad sonder skaal het geen werklike lengte of area nie. TakeoffCraft tel dit nooit as nul nie, wat jou beraming stilletjies te laag sou maak. In plaas daarvan:

- hou dit daardie merke uit die totale,
- wys "+(n) unscaled" langs die item in {{ui:Quantities}},
- wys "Incomplete: (n) marks on sheets with no scale (not in the totals)" in die tabelkop,
- skryf die telling in die notas-kolom van die sigbladuitvoer.

Dit kan gebeur wanneer jy 'n projek oopmaak waarvan die skale nooit gestel is nie. Gee die blad 'n skaal en die merke word dadelik getel. Telmerke word altyd getel; hulle benodig geen skaal nie.

## Wenke

- Stel die skaal op elke blad wat jy gaan meet voordat jy begin. Soek die bladlys na **No scale** om die oorblywende te vind (die soekkassie kyk na bladname, nie skale nie).
- Detail en vergrote planne op dieselfde blad gebruik dikwels 'n ander skaal. TakeoffCraft het een skaal per blad; sien [Wat nog nie gebou is nie](topic:not-built-yet).
- Metriese tekeninge: kies 'n metriese voorinstelling soos `1:100`, of kalibreer met 'n metriese afstand soos `6000 mm`.
