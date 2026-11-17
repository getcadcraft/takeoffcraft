---
title: Tangentbord och mus
summary: Varje tangent, mus-, styrplatte- och pekåtgärd i TakeoffCraft, grupperade, med skillnaderna mellan plattformarna.
keywords: tangenter, genvägar, snabbtangenter, tangentbord, mus, styrplatta, touch, panorera, zooma, hjul, högerklick, dubbelklick, space, shift, kopiera, klistra in, klipp ut, duplicera, markera allt
from: 6f2c441d
---

Bokstavstangenterna fungerar när pekaren är var som helst på sidan och du inte skriver i ett fält. Medan en dialogruta är öppen gäller dess egna tangenter. Bokstäver fungerar med eller utan {{key:Shift}}.

## Verktyg

| Tangent | Verktyg |
|---|---|
| {{key:V}} | {{ui:Markera}} |
| {{key:L}} | {{ui:Linjär}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Cirkel}} |
| {{key:B}} | {{ui:Rum}} (fyll ett rum med ett klick) |
| {{key:R}} | {{ui:Båge}} på eller av (i {{ui:Linjär}}, {{ui:Area}} och {{ui:Urtag}}) |
| {{key:E}} | {{ui:Avdrag}} på eller av: nästa segment i en sträcka ritas men räknas inte |
| En siffra, `@` eller `#` under ritning | Öppna rutan {{ui:Ange}}: skriv en längd eller koordinater, {{key:Enter}} placerar punkten ([Mät linjära sträckor](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Urtag}} (markera en yta först) |
| {{key:C}} | {{ui:Räkna}} |
| {{key:S}} | {{ui:Autoräkna}} |
| {{key:K}} | {{ui:Kalibrera}} |
| {{key:D}} | {{ui:Kontrollera}} skalan |

## Under ritning

| Tangent eller åtgärd | Vad den gör |
|---|---|
| Klicka | Placera en punkt (en prick, med {{ui:Räkna}}). |
| {{key:P}} | Sökväg: välj hela den sammanhängande sökvägen för en PDF-linje, eller konturen runt ett klick ([Välj PDF:ens linjer](topic:pick-the-lines)). |
| {{key:F3}} | Fångst mot ritningens linjer på eller av ([Fånga mot ritningens linjer](topic:snap-to-the-drawing)). |
| {{key:Shift}} hållen vid klick | Fångar segmentet till 0°, 45°, 90° eller 135° från den senaste punkten. Inte för bågpunkter eller cirklar. |
| Dubbelklicka | Avsluta en sträcka, eller stäng en yta eller ett urtag. |
| {{key:Enter}} | Avsluta en sträcka, eller stäng en yta eller ett urtag. |
| Högerklicka (utan att flytta) | Avsluta en sträcka, eller stäng en yta eller ett urtag. |
| Klicka på första punkten | Stäng en yta eller ett urtag (från tredje punkten). |
| {{key:Backspace}} eller {{key:Delete}} | Ta bort den sista punkten (först den väntande bågpunkten). |
| {{key:Esc}} | Släpp den väntande bågpunkten; avbryt sedan den ofärdiga markeringen; gå sedan tillbaka till {{ui:Markera}}. |

## Markera och redigera

| Tangent eller åtgärd | Vad den gör |
|---|---|
| Klicka på en markering (verktyget Markera) | Markera den och gör dess post aktuell. |
| {{key:Shift}} + klicka på en markering | Lägg till den i markeringen, eller ta bort den. |
| {{key:Mod+A}} | Markera varje markering på det öppna bladet. |
| Dra ett hörnhandtag | Flytta den punkten ({{key:Shift}} fångar till 45°). Fungerar när en markering är vald. |
| {{key:Delete}} eller {{key:Backspace}} | Ta bort de markerade markeringarna (när du inte ritar). |
| {{key:Esc}} | Markera inget: rensa markeringen och kontrolllinjen. |
| {{key:Mod+Z}} | Ångra. |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gör om. |

## Kopiera och klistra in

| Tangent | Vad den gör |
|---|---|
| {{key:Mod+C}} | Kopiera de markerade markeringarna, med sina poster. |
| {{key:Mod+X}} | Klipp ut: kopiera de markerade markeringarna och ta sedan bort dem. |
| {{key:Mod+V}} | Klistra in: kopian följer pekaren; klicka där den ska placeras. |
| {{key:Mod+Shift+V}} | Klistra in på plats: samma ställe på det öppna bladet. |
| {{key:Mod+D}} | Duplicera de markerade markeringarna: kopian följer pekaren; klicka där den ska placeras. |
| {{key:Esc}} | Släpp ingenting: avbryt en inklistring eller duplicering som sitter på pekaren. |

Bokstäverna på egen hand väljer fortfarande verktyg ({{key:C}} är {{ui:Räkna}}, {{key:D}} är {{ui:Kontrollera}}, {{key:X}} är {{ui:Urtag}}, {{key:V}} är {{ui:Markera}}, {{key:A}} är {{ui:Area}}); bara {{key:Mod}} tillsammans med dem kopierar och klistrar in. I ett textfält kopierar och klistrar dessa tangenter in text som vanligt. Se [Kopiera, klistra in och duplicera markeringar](topic:copy-paste).

:::warning
{{key:Backspace}} tar bort den markerade markeringen när du inte ritar. Om det sker av misstag, för tillbaka den med {{key:Mod+Z}}.
:::

## Filer

| Tangent | Vad den gör |
|---|---|
| {{key:Mod+O}} | {{ui:Öppna ritningar}} |
| {{key:Mod+S}} | {{ui:Spara avtagning}} |

Dessa två fungerar även när du skriver i ett fält.

## Visning och blad

| Tangent eller åtgärd | Vad den gör |
|---|---|
| Mushjul | Zooma in och ut vid pekaren. |
| Dra (vänster, mitten eller höger knapp) | Panorera. I {{ui:Autoräkna}} ritar ett vänsterdrag sökrutan i stället. |
| {{key:Space}} hållen + dra | Panorera, i vilket verktyg som helst. |
| {{key:F}} | {{ui:Anpassa sida}} |
| {{key:W}} | {{ui:Anpassa bredd}} |
| {{key:Plus}} eller {{key:=}} | Zooma in mitt i vyn. |
| {{key:Minus}} | Zooma ut mitt i vyn. |
| {{key:PageDown}} / {{key:PageUp}} | Nästa eller föregående blad i bladlistan. |
| {{key:Ctrl+Shift+F}} | Växla mellan helskärmslägen (Ctrl på alla plattformar, även på Mac). |
| {{key:F1}} | Öppna eller stäng den här hjälpen, en panel i sidan. |
| {{key:3}} | 3D-kontrollvyn av bladet, på eller av. |

## 3D-vy

| Tangent eller åtgärd | Vad den gör |
|---|---|
| Dra, eller dra med mittenknappen | Kretsa. |
| {{key:Shift}} + dra, eller dra med högerknappen | Panorera. |
| Mushjul | Zooma vid pekaren. På en styrplatta kretsar en tvåfingersvep och en nypning zoomar. |
| Klicka | Markera markeringen under pekaren ({{key:Shift}} + klicka lägger till eller tar bort). |
| {{key:F}} eller {{key:W}} | Zooma till utsträckning. |
| {{key:3}} | Tillbaka till det platta bladet. |

Se [Kontrollera avtagningen i 3D](topic:check-in-3d).

## Autoräkna

| Tangent eller åtgärd | Vad den gör |
|---|---|
| Dra en ruta | Rama in symbolen att söka efter (startar sökningen). |
| Klicka på en träffruta | Avvisa den, eller återställ den. |
| {{key:Esc}} | Avbryt en pågående sökning, eller kassera granskningen. |

## Hjälp

| Tangent | Vad den gör |
|---|---|
| {{key:F1}} | Öppna eller stäng hjälppanelen (även knappen {{ui:Hjälp}} i appfältet). Den fungerar i alla verktyg, även när du skriver i ett fält. |
| {{key:Esc}} | Stäng hjälppanelen. I dess sökruta rensar första Esc sökningen. Medan panelen är öppen stänger en Esc som trycks efter att du klickat på bladet panelen först; tryck igen för att avbryta i TakeoffCraft. |

:::mac
På många Mac-tangentbord styr översta raden ljusstyrka och ljud. Tryck fn med F1, eller slå på "Använd F1, F2 osv. som vanliga funktionstangenter" i Systeminställningar, under Tangentbord.
:::

## Dialogrutor och fält

| Tangent | Vad den gör |
|---|---|
| {{key:Enter}} | I ett fält: tillämpa värdet. I kalibreringsdialogen: {{ui:Ange skalan}}. |
| {{key:Esc}} | Stäng en dialogruta (som {{ui:Avbryt}}); stäng formuläret {{ui:Ny post}}. |
| {{key:Tab}} | Flytta till nästa fält. |

## Plattformsnoteringar

:::mac
- {{key:Mod}} är Command-tangenten: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Helskärm är undantaget: Ctrl+Shift+F.
- Högerklick är en tvåfingersklick på styrplattan, när sekundärklick är på i Systeminställningar, under Styrplatta. TakeoffCraft läser bara sekundärknappen; en Ctrl-klick kan räknas som ett vanligt klick och lägga till en punkt.
- Tvåfingersrullning på styrplattan zoomar bladet (den rullar inte bladet). För att panorera, tryck och dra, eller håll Space och dra.
- Page Up och Page Down är fn med upp- och nedpilarna på tangentbord som saknar dem.
- Backspace är tangenten märkt delete.
:::

:::windows
- {{key:Mod}} är Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- På en bärbar styrplatta zoomar en tvåfingersrullning bladet. För att panorera, tryck och dra.
:::

:::linux
- {{key:Mod}} är Ctrl. Vissa skrivbord har egna genvägar med Ctrl+Alt eller Super; TakeoffCraft använder ingen av dem.
- På en styrplatta zoomar en tvåfingersrullning bladet. För att panorera, tryck och dra.
:::

:::touch
TakeoffCraft läser touch som en enda pekare:

- Ett tryck placerar en punkt, markerar en markering eller lägger till en räkneprick.
- Dra med ett finger för att panorera bladet (i {{ui:Autoräkna}} ritar det sökrutan).
- Nypzoom stöds ännu inte. Använd {{ui:Anpassa sida}} och {{ui:Anpassa bredd}}, eller {{key:Plus}} och {{key:Minus}} på ett tangentbord.
- För att stänga en yta, tryck på dess första punkt. För att avsluta en sträcka, dubbeltryck där din webbläsare gör ett dubbeltryck till ett dubbelklick, eller tryck {{key:Enter}} på ett tangentbord.
- Det finns ingen levande längdvisning förrän du trycker, eftersom det inte finns någon hovring.

Ett tangentbord och mus eller styrplatta är idag det bättre sättet att göra avtagning.
:::

## Tangenter som webbläsaren behåller

Webbläsare behåller vissa genvägar för sig själva, och en sida kan inte använda dem: stänga fliken ({{key:Mod+W}}), ny flik eller nytt fönster ({{key:Mod+T}}, {{key:Mod+N}}) och webbläsarens zoom ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Därför zoomar TakeoffCraft bladet med hjulet och med de nakna tangenterna {{key:Plus}} och {{key:Minus}}. Om du trycker {{key:Mod+Plus}} av misstag växer hela sidan; {{key:Mod+0}} återställer den. Se [Tangenter, möss och styrplattor](common:keys).

## Flytta-funktionen

Det finns inget Flytta-kommando: markera en räkneprick och dra den, eller markera en yta eller en linje och dra dess hörnhandtag.
