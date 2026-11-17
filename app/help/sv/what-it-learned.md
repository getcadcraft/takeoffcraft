---
title: Vad den har lärt sig av dina mängdavtagningar
summary: TakeoffCraft sparar symbolerna du bekräftade med Autoräkna, dina villkorsuppsättningar, kalkylsammansättningarna du använder mest och mönster du upprepar på varje sida, allt i mängdavtagningens egen fil. Se det, använd det, ta bort det.
keywords: lär, inlärt, inlärning, assistent, kom ihåg, symboler, mallar, som förra jobbet, förra jobbet, villkorsuppsättning, villkor, återanvänd, kalkylsammansättningar, mest använda, förslag, upprepa på varje sida, varje sida, ritningshuvud, mönster, rensa allt, glöm, integritet
from: 54d99e99
---

TakeoffCraft blir snabbare ju fler mängdavtagningar du gör med det. Det lär sig **bara av sånt du godkänner**:

- symbolerna du markerade med [Autoräkna](topic:auto-count) och sedan lade till,
- villkorsuppsättningarna du sparar,
- kalkylsammansättningarna du använder (en gång per jobb),
- mönstren av markeringar du upprepar på varje sida.

Det är enkel matchning på dina egna blad, samma sökning som Autoräkna gör. Det är inte en tränad modell. Allt det lär sig sparas **i den här mängdavtagningens fil** (`.takeoff.json`), och ingenting skickas någonstans. För att ta med det till nästa jobb, använd [Som förra jobbet](topic:what-it-learned#same-as-last-job).

Välj {{ui:Inlärt}} i verktygsfältet (glödlampan, bredvid {{ui:Autoräkna}}) för att se allt.

## Symboler

När du markerar en symbol med {{ui:Autoräkna}} och väljer {{ui:Lägg till}}, sparas symbolen du markerade, med den matchningsnivå du godkände.

- I {{ui:Inlärt}} väljer du {{ui:Hitta på det här bladet}} eller {{ui:Hitta på alla blad}}. Den vanliga granskningen i Autoräkna öppnas: klicka på en ruta för att utesluta den, flytta reglaget och lägg sedan till dem. Ingenting läggs till förrän du gör det.
- När du öppnar ett blad som saknar någon av de inlärda symbolerna, visar en rad överst ett erbjudande {{ui:Hitta …}} för den. {{ui:Inte nu}} döljer den för det bladet.
- Om mängdavtagningen inte har någon post med det namnet, lägger tilläggen av markeringarna även till posten (ett steg att ångra).
- Om du lägger till samma postsymbol igen räknas den mot den som redan finns; en symbol som ser annorlunda ut sparas som en andra.
- Precis som Autoräkna hittar den symbolen vinklade rätt och på blad i en annan skala.

## Villkorsuppsättningar

En uppsättning sparar en mängdavtagnings villkor (poster med deras enheter, á-priser, spill och kalkylsammansättningar), utan markeringar.

1. I {{ui:Inlärt}} väljer du {{ui:Spara den här mängdavtagningens villkor som en uppsättning…}} och ger den ett namn. En uppsättning med samma namn ersätts.
2. I en mängdavtagning som har uppsättningen lägger {{ui:Lägg till}} in de villkor som den inte har än. Villkor med samma namn och typ lämnas ifred. Det är ett steg att ångra.

## Som förra jobbet

Ditt förra jobbs fil innehåller det det lärt sig. För att starta ett nytt jobb från den:

1. Öppna de nya ritningarna och välj {{ui:Inlärt}} › {{ui:Som förra jobbet…}}.
2. Välj det förra jobbets `.takeoff.json`.
3. Markera vad som ska hämtas in: dess villkor (bara de som den här mängdavtagningen inte har), och det den lärt sig (symboler, uppsättningar, kalkylsammansättningar, mönster). Välj sedan {{ui:Hämta in dem}}.

Dess villkor sparas även som en uppsättning med namn efter jobbet. Dess markeringar och mängder stannar i sin egen fil. Allt detta är ett steg att ångra.

## Kalkylsammansättningar du använder mest

En post som har en kalkylsammansättning räknas som använd en gång per jobb när den har en mängd och du sparar mängdavtagningen. Ett jobb är uppsättningen av ritningsfiler den mäts upp från, så att spara samma mängdavtagning igen räknas inte två gånger. Listan under {{ui:Kalkylsammansättningar du använder mest}} sätter de du använder mest först. Den utelämnar de som den här mängdavtagningen redan har. {{ui:Lägg till}} lägger in en som du senast använde, med alla dess delar.

## Upprepa på varje sida

För markeringar som är likadana på varje sida i en uppsättning, till exempel en räkning av ritningshuvud eller en typisk detalj:

1. Markera markeringarna på ett blad ([Markera markeringarna](topic:copy-paste#select-the-marks)).
2. I {{ui:Inlärt}}, välj {{ui:Upprepa de markerade markeringarna på varje sida…}}, ge mönstret ett namn och bekräfta.

De läggs på varje annan öppen sida **av samma storlek**, på samma plats, i ett steg att ångra. Längder och areor läggs bara på sidor med samma skala; antal läggs på alla sidor av den storleken. En sida som redan har dem hoppas över. Mönstret sparas, så sidor du öppnar senare får erbjudandet i raden, eller så använder du {{ui:Upprepa på varje sida}} i listan.

## Se det, ta bort det

Allt som lärts finns listat i {{ui:Inlärt}}. Papperskorgen tar bort en sak. {{ui:Rensa allt}} tar bort allt inlärt och lämnar dina poster och markeringar orörda. Båda kan ångras tills du stänger mängdavtagningen, och båda sparas med mängdavtagningen.

För att sluta lära i en mängdavtagning, avmarkera {{ui:Lär av den här mängdavtagningen}}. Inget nytt lärs in, och det som finns listat stannar tills du tar bort det.

## Bra att veta

- Äldre versioner av TakeoffCraft öppnar en fil med inlärda saker som vanligt. De ignorerar den delen, och tar bort den om de sparar filen igen.
- En inlärd symbol är en liten bild av det du markerade, sparad i filen (några kilobyte vardera).
- Inlärda symboler söks som Autoräkna söker, så samma begränsningar gäller: [Autoräkna en symbol](topic:auto-count).
