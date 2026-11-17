---
title: Prisbibliotek
summary: Behåll dina poster, á-priser och kalkylsammansättningar i ett bibliotek, importera det från en CSV eller en tidigare kalkyl, lägg till poster från det i valfri mängdavtagning och uppdatera en mängdavtagnings priser från det.
keywords: bibliotek, yrkespaket, prislista, prisbok, kostnadsdatabas, importera csv, á-priser, kalkylsammansättningar, återanvändning, mallposter, uppdatera priser, räkna om
from: 37356c68
---

**Prisbiblioteket** innehåller poster du använder jobb efter jobb: deras typ, enhet, höjd, spill, material- och arbets-á-priser samt deras kalkylsammansättning. Det sparas i den här webbläsaren, skilt från alla mängdavtagningar, så att varje mängdavtagning du öppnar här kan använda det.

Öppna det med {{ui:Bibliotek}} överst i panelen {{ui:Poster}}.

## Fyll biblioteket

- {{ui:Importera CSV…}} läser ett kalkylblad sparat som CSV (se kolumnerna nedan). Poster vars namn och typ redan finns i biblioteket ersätts; resten läggs till. Rader som inte kan läsas hoppas över, och det säger vilka och varför.
- {{ui:Lägg till den här mängdavtagningens poster}} kopierar varje post i den öppna mängdavtagningen till biblioteket, med dess á-priser och kalkylsammansättning (inte dess märken).
- Kalkylens CSV som TakeoffCraft exporterar ([Exportera kalkylen](topic:export-estimate)) importeras som den är: förra jobbets priser används som utgångspunkt för nästa.

- {{ui:Yrkespaket…}} lägger till gratis kalkylsammansättningar för ett yrke, till exempel gips, el eller betong, utan priser. Se [Yrkespaket](topic:trade-packs).

{{ui:Exportera CSV}} sparar biblioteket som en CSV, för att behålla en kopia, redigera det i ett kalkylblad eller ge det till en kollega. {{ui:Töm}} tömmer det (klicka två gånger).

:::note
Biblioteket finns i den här webbläsarens lagring. En annan webbläsare, en annan dator eller ett privat fönster har sitt eget (eller inget). Exportera det för att flytta det.
:::

## Använd det i en mängdavtagning

- Markera poster (skriv i {{ui:Sök i biblioteket}} för att begränsa listan) och välj {{ui:Lägg till i mängdavtagningen}}. De läggs till med sina kalkylsammansättningar i ett steg som {{key:Mod+Z}} tar tillbaka. Ett namn som redan finns i mängdavtagningen får ett nummer, som `Carpet (2)`.
- {{ui:Uppdatera priser}} ger mängdavtagningens poster bibliotekets spill och á-priser, för varje post vars namn och typ stämmer med en bibliotekspost, och detsamma för kalkylsammansättningens komponenter med samma namn. Höjder, enheter och formler förblir oförändrade. Ett {{key:Mod+Z}} återställer alla gamla priser.

## CSV-kolumnerna

Den första raden anger kolumnerna, i valfri ordning; andra kolumner ignoreras. Kolumnrubrikerna är skrivna som importen läser dem.

| Kolumn | Vad som ska stå i den |
|---|---|
| Item (or Name) | Postens namn. Krävs. |
| Type | Linear, Area eller Count (LF, SF och EA fungerar också). Lämnas tom avgör enheten. |
| Unit | LF eller m; SF, SY eller m²; EA. Tom: typens vanliga enhet. |
| Waste % | `10` eller `10%`. |
| Material per unit, Labor per unit | Á-priser som `2.10` eller `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, eller `2.7` för metriska enheter. |
| Component, Formula | En rad med ett Component-namn (eller typen `Component`) är en del av kalkylsammansättningen för posten ovanför. Dess enhet, spill och á-priser är dess egna; dess formel använder postens bokstäver, se [Kalkylsammansättningar och formler](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Kommatecken, semikolon eller tabbar mellan kolumnerna fungerar alla.
