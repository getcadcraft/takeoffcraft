---
title: Mät linjära sträckor
summary: Ta av väggar, rör, lister och andra längder som sträckor, med raka segment, bågar och 45-gradersfångsten med Shift.
keywords: linjär, längd, sträcka, polylinje, väggar, lf, linjära fot, båge, kurva, 45 grader, ortho, fångst, segment, polylängd, avdrag, öppning, dörr, lucka, typ, skriven, koordinater, avstånd, direkt avstånd, polär
from: c669deff
---

En linjär post mäter längd. Varje sträcka är en kedja av punkter: raka segment, och bågar där du slår på bågläget. En post kan ha valfritt antal sträckor på valfritt antal blad.

Innan du börjar: bladet behöver en skala ([Ange skalan](topic:set-the-scale)) och du behöver en linjär post ([Skapa avtagningsposter](topic:create-items)).

På en vektor-PDF fångas dina klick mot ritningens egna linjer: ändpunkter, mittpunkter och korsningar ([Fånga mot ritningens linjer](topic:snap-to-the-drawing); {{key:F3}} stänger av det).

## Rita en sträcka

1. Klicka på den linjära posten under {{ui:Poster}}.
2. Välj {{ui:Linjär}} i verktygsfältet, eller tryck {{key:L}}.
3. Klicka på sträckans start.
4. Klicka på varje hörn längs den.
   Statusfältet visar "Längd" (sträckan hittills, till pekaren) och "segment" (segmentet du ritar), i fot och tum.
5. Avsluta sträckan: dubbelklicka på sista punkten, tryck {{key:Enter}} eller högerklicka.
   Sträckan ritas i postens färg och blir den markerade markeringen. Postens längd i listan {{ui:Poster}} och tabellen {{ui:Mängder}} ökar.

Verktyget är kvar på {{ui:Linjär}}, så du kan börja nästa sträcka direkt. Tryck {{key:Esc}} för att gå tillbaka till {{ui:Markera}}.

Under ritning:

- {{key:Backspace}} (eller {{key:Delete}}) tar bort den sista punkten.
- {{key:Esc}} kastar bort den ofärdiga sträckan.
- Dra panorerar bladet och hjulet zoomar, utan att lägga till punkter.

:::mac
På en Mac-styrplatta är högerklick en tvåfingersklick (slå på sekundärklick i Systeminställningar, under Styrplatta). TakeoffCraft läser bara sekundärknappen, så en Ctrl-klick kan tolkas som ett vanligt klick och lägga till en punkt. Dubbelklick eller {{key:Enter}} avslutar alltid.
:::

:::touch
På en pekskärm: tryck för att placera punkter, dra med ett finger för att panorera och nyp med två för att zooma. Avsluta med ett långt tryck, ett dubbeltryck eller {{ui:Klar}} i fältet under bladet ({{ui:Baksida}} tar tillbaka den sista punkten). Se [Felsökning](topic:troubleshooting#touch-screens).
:::

## Raka linjer i 45°-steg

Håll {{key:Shift}} medan du placerar en punkt. Segmentet från den senaste punkten fångas till närmaste riktning 0°, 45°, 90° eller 135°, och behåller den längd du drog längs den. Statusfältet påminner dig: ”Shift fångar till 45°”.

I bågläget gäller det där en båge slutar: bågens korda går i 45°-steg från där den börjar. Punkten du klickar på kurvan fångas aldrig.

## Bågar och böjda väggar

1. Medan du ritar en sträcka placerar du punkten där kurvan börjar.
2. Slå på bågläget: välj {{ui:Båge}} i verktygsfältet eller tryck {{key:R}}. Knappen förblir intryckt.
3. Klicka på valfri punkt på kurvan, någonstans mitt på den.
   Statusfältet lägger till "(båge: klicka där den slutar)" och förhandsvisningen böjer sig genom din punkt.
4. Klicka där kurvan slutar.
   Bågen läggs till. Dess längd är den exakta bågens längd, inte en rad korta kordor.
5. Klicka på en annan punkt på nästa kurva och dess slut för att fortsätta rita bågar, eller tryck {{key:R}} igen för att gå tillbaka till raka segment.

{{key:Backspace}} eller {{key:Esc}} släpper först den väntande punkten på kurvan; tryck igen för att ta bort punkter som vanligt.

## Skriv längder och koordinater

Efter första punkten kan du skriva var nästa ska gå i stället för att klicka. Skriv en siffra, `@` eller `#`: en ruta {{ui:Ange}} öppnas i statusfältet med det du skrev. Tryck {{key:Enter}} för att placera punkten; rutan är kvar öppen för nästa.

| Skriv | Nästa punkt går |
|---|---|
| `12'6"` | 12'-6" från den senaste punkten, mot pekaren (peka åt det hållet och skriv sedan längden) |
| `12'6"<45` | 12'-6" i 45°, räknat moturs från skärmens högerkant (`<90` är upp, `<-90` är ner) |
| `@6',-4'` | 6' åt höger och 4' nedåt från den senaste punkten |
| `6',4'` (eller `#6',4'`) | 6' åt höger och 4' uppåt från denna sträckas första punkt |

Längder skrivs som överallt i TakeoffCraft ([Inmatningsformat](topic:entry-formats)): `12'-6 1/2"`, `12.5` (fot), `30"`, `3.2 m`. ”Höger” och ”upp” är som du ser bladet, även när PDF-sidan är vriden.

{{key:Enter}} i en tom ruta avslutar sträckan, precis som {{key:Enter}} på bladet; {{key:Esc}} stänger rutan och låter sträckan fortsätta. Inskrivna punkter följer samma regler som klick: avdrag, bågar och att stänga en yta fungerar alla. Samma ruta fungerar i {{ui:Area}} och {{ui:Urtag}}; efter en cirkels mitt tar den radien.

## Dra av en del av en sträcka

En väggsträcka som passerar en dörr eller ett skyltfönster kan ritas rakt igenom och ändå räkna endast väggen: segmenten över öppningen är **avdrag**. De ritas streckade och tunna, och räknas inte.

Under ritning:

1. Placera punkten där öppningen börjar.
2. Välj {{ui:Avdrag}} i verktygsfältet eller tryck {{key:E}}. Knappen förblir intryckt och statusfältet säger att nästa segment är avdrag.
3. Klicka där öppningen slutar. Segmentet ritas streckat; "Längd" i statusfältet utelämnar det.
4. Tryck {{key:E}} igen och fortsätt längs väggen.

Efter ritning: markera sträckan. Under **Vald markering** har varje segment en ruta {{ui:Avdrag}}: bocka i den för att dra av segmentet, avbocka den för att räkna det igen. Varje ändring är ett ångra-steg.

En sträcka behåller alltid minst ett segment som räknas. Panelen visar då **Avdrag** (den avdragna längden) och **Ritad** (hela sträckan); **Längd**, postens mängd, väggarean och kostnaderna använder alla längden utan avdragen. 3D-kontrollvyn lämnar en lucka i väggen, den markerade PDF:en ritar avdragen streckade och det exporterade bladet **Markeringar** listar dem.

Att flytta ett hörn behåller avdragen. Att lägga till eller ta bort punkter (genom att rita sträckan igen) börjar utan dem.

## Titta på en sträckas detaljer

Välj {{ui:Markera}} ({{key:V}}) och klicka på sträckan. **Vald markering** till höger visar:

- posten den tillhör (välj en annan linjär post i listan för att flytta sträckan dit),
- bladet,
- **Längd** i fot och tum och i LF,
- antalet **Segment**, och **Väggarea** när posten har en höjd,
- varje segments längd, med "(båge)" efter bågar, och dess ruta {{ui:Avdrag}}.

På bladet märks varje segment i den markerade sträckan med sin längd.

## Rätta en sträcka

- **Flytta en punkt**: markera sträckan och dra ett av dess kvadratiska hörnhandtag. Håll {{key:Shift}} för att fånga det flyttade segmentet till 45°-steg. En båge behåller sin krökning.
- **Böj en båge**: en markerad sträcka visar ett runt handtag mitt på varje båge. Dra det: bågen går genom den punkt där du släpper, så den bukar mer, mindre eller åt andra hållet. Dras den till den raka linjen mellan dess ändar blir den ett rakt segment. {{key:Mod+Z}} ångrar det ("Böj båge").
- **Ta bort en sträcka**: markera den och tryck {{key:Delete}}, välj {{ui:Ta bort}} i verktygsfältets menyn {{ui:Mer}}, eller {{ui:Ta bort markering}} i panelen.
- **Ångra**: {{key:Mod+Z}}; gör om med {{key:Mod+Y}}.

Du kan ännu inte infoga en punkt mitt i en sträcka. Ta bort sträckan och rita den igen.

## Väggarea

Ge den linjära posten en {{ui:Höjd}} (till exempel `9'-0"`). Den redovisar då **Väggarea (A)** = längd × höjd, i SF (eller m² för en metrisk post), och väggarean hamnar i noteringskolumnen i kalkylbladsexporten. Använd den i sammansättningar för skivor, målning eller isolering: se [Sammansättningar och formler](topic:assemblies).
