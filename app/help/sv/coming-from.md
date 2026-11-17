---
title: Övergång från annan mängdavtagningsprogramvara
summary: Hur vanorna i dedikerade mängdavtagningsprogram och PDF-markeringsverktyg motsvaras i TakeoffCraft, och de skillnader som lurar folk.
keywords: växla, migrera, villkor, delar, mätverktyg, markeringslista, mängdlänk, mängdavtagningsvanor, skillnader, jämför
from: 12004ce5
---

Om du har gjort mängdavtagning i PlanSwift eller med mätverktygen i Bluebeam Revu känns största delen av TakeoffCraft igen: en ritningssats, en skala per blad, saker du mäter och ett prissatt totalbelopp. Hur delarna hänger ihop skiljer sig på vissa ställen, och de ställena finns nedan.

Om du känner till PlanSwift eller On-Screen Takeoff väljer du menystilen {{ui:Avtagningsbord}} under {{ui:Inställningar}} › {{ui:TakeoffCraft}} › {{ui:Menyer, tangenter och mus}}: en menyrad med Fil, Redigera, Visa, Skala, Mängdavtagning, Poster, Markering och Exportera ovanför en rad med mängdavtagningsverktygen, med skalförvalen på bladraden. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse).

## Vanor som motsvaras

| Du är van vid | I TakeoffCraft |
|---|---|
| Att öppna ett jobb eller projekt som lagrar ritningarna (PlanSwift) | Öppna PDF-filerna och `.takeoff.json`-projektet sida vid sida. Projektet lagrar bara mängdavtagningen; PDF-filerna förblir dina egna filer. |
| En markeringslista med anteckningar, moln och överstrykningar (Bluebeam) | {{ui:Markering}} på bladraden: anteckningar, moln och överstrykningar med en status (Öppen, Besvarad, Stängd), listade under **Markeringar** och ritade i den markerade PDF:en. Se [Anteckningar, moln och överstrykningar](topic:markups). |
| Mätningar sparade som markeringar i PDF:en (Bluebeam) | Mängdavtagningen finns i `.takeoff.json`-filen. {{ui:Markerad PDF}} skriver en kopia med mängdavtagningen ritad i, för delning; {{ui:PDF med mängdavtagningen inuti}} skriver en kopia som bär mängdavtagningen, för att öppna igen i TakeoffCraft. |
| Mängdposter (PlanSwift), egna mätverktyg sparade i verktygslådan (Bluebeam) | **Poster** under {{ui:Poster}}: namn, typ, färg, enhet, höjd eller djup, spill och priser. |
| Delar och sammansättningar med formler (PlanSwift) | Postens {{ui:Sammansättning}}: komponenter med en formel som använder `L H A N P`. |
| Att ställa in sidans skala, eller kalibrera (båda) | {{ui:Förval}}-listan eller {{ui:Kalibrera}} i gruppen {{ui:Skala}}, per blad. {{ui:Kontrollera}} mäter ett känt mått. |
| Att använda en skala på ett sidintervall | Inte än: ställ in varje blad. |
| Visningsfönster med olika skalor på ett blad (Bluebeam) | Inte än: en skala per blad. |
| Polylängd- och ytverktyg (Bluebeam), linjär och ytmängdavtagning (PlanSwift) | {{ui:Linjär}} ({{key:L}}) och {{ui:Area}} ({{key:A}}). |
| Att hålla ned Shift för raka linjer | {{key:Shift}} fångar till 45°-steg, samma idé. |
| Att fånga till ritningens linjer | På som standard: ändpunkter, mittpunkter, skärningar och närmaste punkt på en linje, med {{key:F3}} för att stänga av, som i CAD-program. |
| Räkneverktyget (båda) | {{ui:Räkna}} ({{key:C}}). |
| Visuell sökning efter symboler (Bluebeam) | {{ui:Autoräkna}} ({{key:S}}): rama in en symbol, granska, lägg till. |
| Urtag eller avdrag i ytor | {{ui:Urtag}} ({{key:X}}) på en markerad yta, och runda urtag. |
| Avdrag på linjära sträckor | Dra sträckan rakt igenom och tryck {{key:E}} ({{ui:Avdrag}}) för öppningen. Se [Mät linjära sträckor](topic:measure-linear). |
| Bågsegment i en polylinje | {{ui:Båge}} ({{key:R}}): klicka en punkt på kurvan, sedan dess slutpunkt. |
| Markeringslistan med kvantitetskolumner (Bluebeam) | Tabellen {{ui:Mängder}}, {{ui:Per post}} eller {{ui:Per blad}}. |
| Kalkyleringsrutnät med priser (PlanSwift) | Samma tabell: spill, material och arbete per enhet, uträknade summor, {{ui:Jobbets summa}}. |
| Export till Excel | {{ui:XLSX}} med levande formler, eller {{ui:CSV}}. |
| Escape för att stoppa ett verktyg | {{key:Esc}} avbryter och återgår till {{ui:Markera}}. |
| Högerklick för att avsluta | Högerklick avslutar en sträcka eller stänger en yta även här. Det finns ingen högerklicksmeny. |

## Skillnader som lurar folk

**Mängdavtagningen finns inte i din PDF.** Inget du gör ändrar dina PDF-filer. Spara `.takeoff.json`-filen och behåll den tillsammans med ritningarna. Om du skickar den markerade PDF:en till någon skickar du inte en redigerbar mängdavtagning: skicka projektfilen och de ursprungliga PDF-filerna, eller en [PDF med mängdavtagningen inuti](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-filer matchas efter innehåll, inte efter namn.** Ett reviderat blad sparat över det gamla filnamnet är en ny fil för TakeoffCraft, utan skala och utan markeringar. Dina gamla markeringar finns kvar på den gamla versionen och räknas fortfarande. Se [Spara och öppna en mängdavtagning igen](topic:save-and-reopen#when-a-pdf-has-changed).

**Markeringar utan skala utelämnas, de räknas inte som noll.** Om ett blad saknar skala räknas dess sträckor och ytor inte, och tabellen säger ”Ofullständig”. I många program skulle du bara se 0. Se [Ställ in skalan](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Ingen gissning av sidstorlek.** Förvalen utgår från att PDF-filen är utskriven i full storlek. En PDF i halv storlek eller ”anpassad till sida” behöver {{ui:Kalibrera}}. Använd alltid {{ui:Kontrollera}}.

**En post, en huvudtyp, fler om du vill.** En post är linjär, yta eller räkning, och dess typ låses när den har markeringar. Ett villkor som ger både en yta och dess omkrets är en ytpost: dess omkrets är variabeln `P`. En vägg med både längd och yta är en linjär post med en höjd. För en post med flera villkor, till exempel ett rum med golv, sockel och dörrar, bockar du i de andra slagen under **Mät också**: varje slag prissätts på sin egen rad. Se [En post, flera slags markeringar](topic:create-items#one-item-several-kinds-of-marks).

**Formler körs på summor.** Sammansättningsformler använder postens summor över alla blad, inte varje sträcka för sig. `N` (antalet sträckor eller ytor) finns för extra tillägg per sträcka, till exempel en extra regel per vägg.

**Omkretsen inkluderar urtag.** En yta:s `P` lägger till kanterna på dess hål. Se [Mät ytor med urtag](topic:measure-areas#read-the-area).

**Dra för att panorera.** Ett drag med vänster musknapp på bladet panorerar i alla verktyg utom {{ui:Autoräkna}}. Du behöver aldrig byta till ett panoreringsverktyg. Hjulet zoomar; det rullar inte.

**En återställningskopia, inte moln.** TakeoffCraft behåller en kopia av ditt arbete i den här webbläsaren och erbjuder den tillbaka efter en krasch ([Om fliken eller webbläsaren stannar](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), men mängdavtagningen är din att spara: {{key:Mod+S}}. Molnlagring finns inte ännu.

**Allt finns i webbläsaren.** Ingenting behöver installeras, och ritningarna laddas aldrig upp. För ett skrivbordsprogram kommer TakeoffCraft i CadCraft Studio, tillsammans med de andra sju apparna.

## Finns inte här ännu

Regioner med skala per blad är inte byggda ännu. Se [Vad som inte är byggt ännu](topic:not-built-yet) för hela listan och vad du gör i stället.
