---
title: Spara och öppna en avtagning igen
summary: Spara avtagningen som projektfilen .takeoff.json, öppna den igen med samma PDF-filer, och vad som händer när en PDF saknas eller har ändrats.
keywords: avtagning i pdf, bädda in, bilaga, spara, öppna, öppna igen, projekt, takeoff.json, fortsätt, återuppta, reviderad pdf, ändrad pdf, saknad pdf, säkerhetskopia, spara automatiskt, återställ, krasch
from: bd5080a6
---

En avtagning sparas som en liten projektfil, `(name).takeoff.json`. Den innehåller dina poster, kalkylsammansättningar, á-priser, varje blads skala och varje markering. Den innehåller **inte** PDF-filerna; den hittar dem igen via deras innehåll.

## Spara

1. Välj {{ui:Spara avtagning}} i gruppen {{ui:Fil}}, eller tryck på {{key:Mod+S}}.
   Webbläsaren laddar ner `(name).takeoff.json`. Statusfältet säger "Sparade (name).takeoff.json. Den öppnas igen ovanpå samma PDF-filer (de matchas via sitt innehåll)."
2. Flytta filen bredvid jobbets PDF-filer, så att de två hålls ihop.

Varje sparning laddar ner en ny fil. Webbläsaren kan kalla den andra `(name) (1).takeoff.json`; behåll den senaste.

Namnet kommer från den första PDF-filen du öppnade i den här avtagningen.

:::note
Spara avtagning är fortfarande det enda sättet att behålla en avtagning som fil. Medan du arbetar sparar TakeoffCraft också en återställningskopia i den här webbläsaren (se nedan), och molnsparning finns inte ännu. Om du försöker stänga fliken med osparade ändringar frågar webbläsaren om du vill lämna.
:::

## Behåll avtagningen i PDF-filen

{{ui:Exportera}} › {{ui:PDF med mängdavtagningen inuti}} laddar ner en kopia av varje öppen PDF, namngiven som `Plans (with takeoff).pdf`, som bär hela avtagningen som en bilaga: poster, markeringar, skalor, anbudsområden, allt som `.takeoff.json` innehåller. Sidorna är orörda, så den ser ut och skrivs ut som originalet, och andra PDF-läsare listar avtagningen bland sina bilagor.

Öppna den PDF-filen i TakeoffCraft (på vilket sätt du än öppnar PDF-filer) så frågar den **Den här PDF-filen har en avtagning inuti**: välj {{ui:Öppna mängdavtagningen}} för att få tillbaka den, eller {{ui:Bara PDF-filen}} för att bara öppna ritningen. Kopian står för PDF-filen den gjordes av, så en `.takeoff.json` som sparats från endera öppnas på båda.

Med flera PDF-filer bär varje kopia hela avtagningen; öppna dem tillsammans. Om du sparar igen från en kopia ersätts avtagningen inuti den, den läggs inte till en andra. `.takeoff.json` är fortfarande filen att behålla: den är liten, och det är den som funktionen Spara automatiskt och skrivbordsappen skriver.

## Om fliken eller webbläsaren stannar

Några sekunder efter varje ändring sparar TakeoffCraft en kopia av avtagningen i den här webbläsarens egna lagring, tillsammans med dess PDF-filer när de är 64 MB eller mindre tillsammans. Inget laddas upp. När du sparar avtagningen, startar en ny eller öppnar ett annat projekt, tas kopian bort.

Om fliken kraschar, webbläsaren eller datorn stannar, eller du lämnar med osparade ändringar, frågar TakeoffCraft nästa gång du öppnar det **Återställ ditt arbete?** och listar avtagningen med namn. Välj **Återställ** för att få tillbaka den: poster, markeringar och skalor kommer tillbaka, och dess PDF-filer öppnas igen om de sparades. Statusfältet säger "Återställde (name). Den är ännu inte sparad till en fil: Spara avtagning sparar den." När PDF-filerna var för stora för att behållas, öppna dem igen; markeringarna dyker upp på sina blad. Mer: [Återställ ditt arbete](common:recover).

## Öppna igen

1. Öppna TakeoffCraft.
2. Släpp `.takeoff.json`-filen och dess PDF-filer på sidan samtidigt. Eller välj {{ui:Öppna ritningar}} för PDF-filerna och {{ui:Öppna avtagning}} för projektet, i valfri ordning.
   Statusfältet säger "Öppnade (name): 12 poster, 340 markeringar." Varje blad får tillbaka sin skala, och markeringarna dyker upp på sina blad.

Ordningen på PDF-filerna spelar ingen roll, och inte heller deras filnamn eller mappar. TakeoffCraft känner igen varje PDF-fil via ett fingeravtryck av dess innehåll.

Om du öppnar ett projekt medan den aktuella avtagningen har osparade ändringar frågar TakeoffCraft först: **Avbryt**, **Kasta ändringarna** eller **Spara avtagningen först**. Att öppna ett projekt ersätter de aktuella posterna och markeringarna; PDF-filer som redan är öppna förblir öppna.

## När en PDF saknas

Om du öppnar projektet utan alla dess PDF-filer lägger statusfältet till "Öppna dess PDF-filer för att se markeringarna (listade under Blad)." Under bladlistan står en anteckning:

"Den här avtagningen omfattar även PDF-filer som inte är öppna. Deras mängder räknas; öppna dem för att se och redigera deras markeringar:"

följt av filnamnen och storlekarna. Deras markeringar räknas fortfarande i alla summor och exporter, med de skalor de mättes med. Öppna dessa PDF-filer för att se och redigera markeringarna.

## När en PDF har ändrats

En PDF som reviderats, eller bara sparats igen av ett annat program, har ett annat innehåll, så den är en **annan fil** för TakeoffCraft, även med samma namn. I anteckningen under bladlistan säger en sådan fil "en fil med det här namnet är öppen, men innehållet skiljer sig".

- Markeringarna är kvar på den gamla versionen. De fortsätter att räknas, på sina gamla positioner och skalor.
- Den reviderade PDF-filen öppnas som nya blad utan skala och utan markeringar.

För att flytta avtagningen till revisionen, öppna båda PDF-filerna och använd {{ui:Jämför}} på det nya bladet: [Jämför ett reviderat blad och flytta avtagningen](topic:compare-revisions).

## En skadad eller främmande fil

TakeoffCraft kontrollerar varje projektfil innan den används. Meddelanden du kan se:

- "(file) är inte ett TakeoffCraft-projekt (det är inte giltig JSON)."
- "Det här är inte en TakeoffCraft-projektfil."
- "Projektet sparades av en nyare TakeoffCraft. Öppna det där."
- "3 markeringar var skadade och lämnades utanför." (resten öppnas)

## Ångrahistorik

Ångrahistoriken börjar om när du öppnar ett projekt. Att spara rensar den inte.
