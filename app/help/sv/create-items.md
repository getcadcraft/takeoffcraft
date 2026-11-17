---
title: Skapa mängdposter
summary: Skapa linjära, areabaserade och räknade poster och ange deras enhet, höjd eller djup, spill samt material- och arbetspriser.
keywords: arbetslag, produktionstakt, arbetslagets storlek, lön, timmar, persontimmar, arbetslagsdagar, arbetstimmar, post, ny post, villkor, flera villkor, mät också, flera typer, rum, linjär, area, räkna, enhet, höjd, djup, spill, material, arbete, pris, färg, kostnad
from: 7fa5effc
---

En **post** är något du mäter och prissätter: en väggtyp, ett golvbeläggning, ett undertak, en dörr, en armatur. Varje märke du ritar hör till en post. Andra program kallar dessa villkor.

Varje post har en typ (och kan ta emot andra slags märken också, se [En post, flera slags märken](topic:create-items#one-item-several-kinds-of-marks)):

| Ange | Du ritar | Den redovisar | Enheter |
|---|---|---|---|
| Linjär | Sträckor av sammanhängande punkter | Längd, antal sträckor och väggarea när den har en höjd | LF eller m |
| Area | Slutna konturer, med urtag | Area, omkrets, antal ytor | SF, SY, SQ, ac, ha eller m² |
| Räkna | Ett klick per sak | Hur många | EA |
| Angiven mängd | Inget: du skriver in mängden | Det tal du skrev in (eller ett som hämtats från CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha eller m² |

## Angiven mängd (ingen ritning)

Vissa saker i en kalkyl ritas aldrig: mobilisering, tillstånd, en oförutsedd post, ett fast pris för en underentreprenad, den schakt och fyllning som CivilCraft räknat ut. Gör dem till en **Angiven mängd**:

1. Välj {{ui:New item}}, skriv ett namn, välj {{ui:Typed quantity (no drawing)}} och välj {{ui:Add}}.
2. I postredigeraren väljer du {{ui:Unit}} (LS för ett fast pris) och skriver in {{ui:Quantity}}: `1`, `2.5` eller `1,250`.
3. Ange spill och priser som för alla andra poster. En sammansättnings formler använder `Q`, mängden, till exempel `ceil(Q / 12)` lastbilslass.

En angiven mängd tar inga märken och gör aldrig kalkylen ofullständig. När mängdberäkningen har anbudsområden har redigeraren även {{ui:Bid area}}: mängden räknas då i det området, i dess alternativ och i dess summor, precis som ett märke där skulle göra. Mängder som hämtats från ett annat program anger varifrån de kommer, se [Schakt och höjdkoter](topic:earthwork#cut-and-fill-from-civilcraft).

## Skapa en post

1. I panelen {{ui:Items}} till höger väljer du {{ui:New item}}.
2. Skriv ett namn, till exempel `Innervägg typ A` eller `Mattkakel`.
3. Välj typ: {{ui:Linear (length)}}, {{ui:Area}} eller {{ui:Count}}.
4. Välj {{ui:Add}} (eller tryck på {{key:Enter}}).
   Posten visas i listan med sin egen färg, blir den post du ritar med, och dess redigerare öppnas under listan. Statusfältet visar vilket verktyg du ska välja härnäst.

Tryck på {{key:Esc}} i formuläret för att stänga det utan att lägga till någon post.

:::tip
Om du först väljer ett mätverktyg använder TakeoffCraft den senast skapade posten av rätt typ, eller öppnar formuläret för {{ui:New item}} med den typen redan vald.
:::

## Välj posten du ritar med

Klicka på en post i listan. Den blir den post nya märken går till, och dess märken framhävs på varje blad medan de andra tonas ned. Om det öppna bladet inte har några av dess märken hoppar TakeoffCraft till ett blad som har dem. Klicka på posten igen för att sluta framhäva; den förblir posten du ritar med.

Att klicka på ett märke med verktyget {{ui:Select}} gör också dess post till den aktuella.

## Ställ in posten

Postredigeraren (**Post: (namn)**) har dessa fält. Varje fält sparas när du lämnar det eller trycker på {{key:Enter}}, och varje ändring kan ångras.

| Fält | Vad det gör |
|---|---|
| {{ui:Name}} | Visas i listan, tabellerna och exporten. |
| {{ui:Type}} | Linjär, Area eller Räkna. Den är låst när posten har märken (”En post med märken behåller sin typ”). |
| {{ui:Color}} | Märkenas färg på skärmen och i den markerade PDF:en. |
| {{ui:Unit}} | Vad mängden redovisas i: LF eller m för linjär; SF, SY, SQ, ac, ha eller m² för area; EA för räkna. |
| {{ui:Also measure}} | De andra slagen märken som posten tar emot, var och en med sin egen enhet. Se nedan. |
| {{ui:Height}} (linear) | En väggs höjd. Posten redovisar då även väggarea (längd × höjd). Sträckor som kommer från en BimCraft-modell bär sina dörrar och fönster: de tas bort en gång, och posten anger bruttoarea, öppningarna och nettot. En mängdavtagning från ett BimCraft-projekt som valt en mätmetod mäts med den metoden även här (noten anger metoden, med källan, och säger att den inte är granskad av en kvantitetsingenjör); metoden kan inte ändras i TakeoffCraft. Tegel eller murblock och murbruk från en väggtyp kommer som två komponenter: enheterna att beställa och murbrukets volym. |
| {{ui:Depth}} (area) | Ett djup eller en tjocklek, används i sammansättningsformler (till exempel betongvolym). |
| {{ui:Waste %}} | Läggs till mängden före prissättning: 10 betyder mängd × 1.10. |
| Material $/LF | Materialkostnad per enhet. Etiketten följer enheten: $/SF, $/EA och så vidare. |
| Arbete $/LF | Arbetskostnad per enhet. |
| {{ui:CSI number}} | Dess CSI MasterFormat-nummer, till exempel `09 21 16` (eller bara avdelningen, `09`). Arbetsbokens blad ”By division” grupperar kostnaderna efter det. Poster från [branschpaket](topic:trade-packs) har ett redan. |

Höjd och djup accepterar fot och tum (`9'-0"`, `8' 6"`) eller decimala fot (`9`) för imperialenheter, och meter (`2.7`, `2700 mm`) för metriska enheter. Priser tar belopp som `12.50` eller `$1,250`, upp till fyra decimaler. Se [Längd-, pris- och procentinmatning](topic:entry-formats).

Under fälten visar **Uppmätt** de summor som postens formler kan använda, med sina bokstäver: Längd (L), Sträckor (N), Väggarea (A) för linjär; Area (A), Omkrets (P), Ytor (N) för area; Antal (N) för räkna.

## En post, flera slags märken

Vissa saker mäts på mer än ett sätt: ett rum har ett golv (en area), en list längs väggarna (en längd) och dörrar (en räkning). I stället för tre poster, gör en:

1. Skapa posten med sin huvudtyp, till exempel en areapost `Rum 101`.
2. Under {{ui:Also measure}} i dess redigerare bockar du i {{ui:Linear}}, {{ui:Count}} eller båda. Var och en får en enhet bredvid sig.
3. Rita med vilket verktyg som helst vars slag posten tar emot: med `Rum 101` aktuell ritar {{ui:Area}} dess golv, {{ui:Linear}} dess list och {{ui:Count}} dess dörrar. TakeoffCraft frågar inte efter en annan post.

Listan över poster visar varje mängd (`50.00 SF + 2 EA`). I mängdtabellen har postens rad sin huvudmängd, och varje annat slag får en egen rad under den, till exempel **Rum 101 (räkna)**, med egna spill- och material- och arbetspriser. Exporterna, tabellen per blad och den markerade PDF:ens förklaring listar dem på samma sätt.

Huvudtypens fält förblir huvudtypens egna: höjden eller djupet, taklutningen, avdragen och 3D-formen gäller bara dess märken. En sträcka ritad för en areapost mäts helt enkelt längs planen och visas platt i 3D. Sammansättningsformler använder huvudtypens summor.

Ett slag kan bara avbockas medan posten inte har några märken av det; ta bort dem, eller flytta dem till en annan post under **Vald markering** först. Märken kan flyttas till vilken post som helst som tar emot deras slag.

Längre ned finns {{ui:Assembly}}: komponenter som reglar eller bräder, var och en med sin egen formel och sina priser. Se [Sammansättningar och formler](topic:assemblies).

Längst ned: {{ui:Move up}} och {{ui:Move down}} ändrar postens plats i listan och i exporterna, och {{ui:Delete item}} tar bort posten tillsammans med alla dess märken (efter en fråga; du kan ångra det).

Areaposter har också **Taklutning** (takplan som mäts längs lutningen: [Tak och lutningar](topic:roofs-and-slopes)) och **Avdrag** (deras märken dras av från andra posters areor: [Mät areor](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Linjära poster har **Lutning** (Plan, Gavel, Valm eller ränna) och, för gavlar och valmar, **Taklutning**.

## Priser i tabellen

Du kan också skriva {{ui:Waste %}}, material- och arbetspriser direkt i tabellen {{ui:Quantities}} längst ned ({{ui:By item}}). Det är samma inställning som i redigeraren.

## Så fungerar prissättningen

För varje post och varje sammansättningskomponent:

1. **Med spill** = mängd × (1 + spill %).
2. **Material** = med spill × material per enhet, avrundat till närmaste cent.
3. **Arbete** = med spill × arbete per enhet, avrundat till närmaste cent.
4. **Summa** = material + arbete.

{{ui:Job total}} lägger ihop varje post och varje komponent. En post kan ha egna priser och en sammansättning samtidigt; båda räknas, så lämna postens priser på 0 när dess komponenter bär kostnaden.

## Arbete per arbetslag

I stället för ett arbetspris per enhet kan postens arbete komma från ett arbetslag: hur mycket det presterar per timme, hur många personer, och vad var och en tjänar. Under {{ui:Labor by crew}} i postredigeraren bockar du i {{ui:Price labor from a crew}} och fyller i:

| Fält | Exempel |
|---|---|
| Produktion | `20` LF per timme (i postens enhet) för hela arbetslaget |
| {{ui:Crew size}} | `2` personer |
| {{ui:Wage $/hour each}} | `45` |

Utifrån mängden med spill räknar TakeoffCraft ut:

- **arbetslagstimmar** = mängd ÷ produktion (110 LF ÷ 20 = 5.5),
- **persontimmar** = arbetslagstimmar × arbetslagets storlek (11),
- **arbetslagsdagar** = arbetslagstimmar ÷ 8 (0.69),
- **arbete** = persontimmar × lön ($495.00).

Redigeraren visar resultatet och det pris det blir ($4.50/LF). Postens eget arbetspris är då skrivskyddat, både i redigeraren och i tabellen. Rubriken i tabellen {{ui:Quantities}} lägger till jobbets persontimmar och arbetslagsdagar. Exporterna anger varje arbetslags timmar, och i arbetsboken är arbetscellen en formel på arbetslaget (`ROUND(F2/20*2*45,2)`). Avmarkera rutan för att gå tillbaka till ett pris per enhet.

## Metriska poster

Välj m (linjär) eller m² (area) som enhet. Mängder, höjder och formelvärden är då i meter. Ritningens skala kan vara vilken förinställning eller kalibrering som helst; enheter och skalor är oberoende av varandra.

## Nästa

- [Mät linjära sträckor](topic:measure-linear)
- [Mät areor med urtag](topic:measure-areas)
- [Räkna för hand](topic:count-by-hand)
