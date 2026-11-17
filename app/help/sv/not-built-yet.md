---
title: Vad som inte finns ännu
summary: Mängdavtagningsfunktioner som den här versionen saknar, och vad du kan göra i stället idag.
keywords: begränsningar, saknas, inte ännu, färdplan, planerad, lösning, per sträcka, moln, skrivbord
from: 94ff90d0
---

TakeoffCraft är under utveckling. Den här listan visar vad den aktuella versionen inte gör, och hur du ändå får jobbet gjort.

## Mätning

| Finns inte ännu | I stället, idag |
|---|---|
| Att infoga en punkt mitt i en sträcka eller kontur | Radera märket och rita det igen. |
| Markering med ruta (fönster) | {{key:Shift}} + klicka på varje märke, eller {{key:Mod+A}} för alla märken på bladet. Se [Kopiera, klistra in och duplicera märken](topic:copy-paste). |
| Rotera, spegla eller ändra skala på en inklistrad kopia | Klistra in på ett blad i samma skala och i samma riktning; rita resten för hand. |
| Läsa av en skala från ett skannat blad eller från en grafisk skalstapel | Välj förval, eller kalibrera på stapelns längd. |
| Mer än en skala per blad (detaljområden, förstorade planer) | Mät delen i bladets skala, och ta av detaljen på dess egna förstorade blad om ritningssatsen har ett. |

## Poster och priser

| Finns inte ännu | I stället, idag |
|---|---|
| Kalkylsammansättningars formler som använder postens andra typer av märken (dörrarna i en rumspost i våningsplanets formler) | Formlerna använder huvudtypens summor; prissätt de andra typerna på egna rader. |
| Kalkylsammansättningars formler som räknas sträcka för sträcka | Formlerna använder postens summor; använd `N` för tillägg per sträcka. |
| Formler som använder en annan posts mängder | Upprepa mätningen i den posten, eller räkna ut det i kalkylexporten. |
| Arbetslag på kalkylsammansättningens komponenter, eller en arbetsdag som inte är 8 timmar | Ge arbetslaget till posten; läs arbetslagsdagar för en annan dagslängd som arbetslagstimmar ÷ din dag. |
| Markeringar utöver anteckningar, moln och överstrykningar (pilar, måttsättningar, stämplar), eller svar på en anteckning | Skriv det i anteckningens text; ändra dess status när det är avgjort. |
| Ett prisbibliotek som delas i ett team, eller sparas till ditt konto | Biblioteket sparas i den här webbläsaren: exportera det som CSV och importera det på den andra datorn. |
| Yrkespaket granskade av verksamma kalkylatorer | Varje paket är en startpunkt: kontrollera dess antaganden mot ditt projekt och dina produkter innan du prissätter med det. Se [Yrkespaket](topic:trade-packs). |
| Priser i yrkespaket | Paketen innehåller endast kalkylsammansättningar: ange dina egna á-priser, eller importera din prislista som CSV. |
| Att byta namn på mängdavtagningen | Namnet kommer från den första PDF-filen; byt namn på de nedladdade filerna. |
| Att namnge blad för hand | Bladen namnges efter PDF-filens sidetiketter; sök på filnamn och sida. |

## Ritningar (DWG och DXF)

| Finns inte ännu | I stället, idag |
|---|---|
| Plottstilstabeller, pennytilldelningar och CTB-filer på ritningens blad | En ritning ritas svart, eller i sina färger mörkade för papper; linjetjocklekar kommer från ritningen. |
| Att öppna en binär DXF, eller en DWG äldre än AutoCAD 2000 | Spara den som ASCII-DXF eller som en nyare DWG. |
| Att hitta en länkad ritning (xref) efter mappen den ligger i | Öppna även den länkade ritningens fil tillsammans med huvudritningen: den hittas via filnamnet bland de öppna filerna. |
| Mätning av 3D-polylinjer, nät, solider och regioner | Räkna dem per lager och typ, eller mät planvyn med verktygen Linjär och Area. |
| Text i en markerad PDF från en ritning på andra skriftsystem än latinska | Tecken som Helvetica saknar glyf för skrivs ut som ”?” i den markerade PDF-filen; ritningen på skärmen påverkas inte. |
| Överlämning av en ritning till ett annat program från bladfältet | Öppna samma fil i det programmet. |
| En ritning som bär mängdavtagningen inuti sig, som {{ui:PDF med mängdavtagningen inuti}} gör för PDF-filer | {{ui:Spara avtagning}}: `.takeoff.json` öppnas igen på samma ritning, hittad via sitt innehåll. |
| Ritning eller räkning av PDF-underlag, bilder och OLE-objekt i en ritning | Bilder visas bara som en ram. Öppna underlags-PDF:en själv som ett blad. |

## Autoräkna

| Finns inte ännu | I stället, idag |
|---|---|
| Att hitta symboler på ett blad utan skala ritad i annan storlek | Ange bladets skala, eller sök på det med en ruta ritad där. |
| Att hitta spegelvända symboler | Räkna dem för hand, eller sök igen med en ruta runt en spegelvänd. |

## Filer och delning

| Finns inte ännu | I stället, idag |
|---|---|
| En PDF som både visar märkena och bär mängdavtagningen | {{ui:Markerad PDF}} för att andra ska se märkena; {{ui:PDF med mängdavtagningen inuti}} för att öppna igen i TakeoffCraft. |
| En CSV med mängder per blad eller av märkena | Använd {{ui:XLSX}}: dess arbetsblad Per blad och Märken har dem. |
| Molnsparande | Inte tillgängligt ännu. Spara projektfilerna på datorn och säkerhetskopiera dem. |
| Ett separat skrivbordsprogram för TakeoffCraft | Från 0.5 är skrivbordsprogrammet CadCraft Studio, med alla åtta programmen i ett installationspaket. TakeoffCraft körs också i webbläsaren. |

## Skärm och indata

| Finns inte ännu | I stället, idag |
|---|---|
| En högerklicksmeny (eller långtryckning) | Använd verktygsfältet, panelerna och tangenterna. Ett långt tryck avslutar en sträcka eller en kontur. |
| Att rotera vyn | Sidor som roterats i PDF-filen visas redan rätt. |

## 3D-vy

| Finns inte ännu | I stället, idag |
|---|---|
| Att rita eller redigera märken i 3D | Gå tillbaka till bladet ({{key:3}}) för att rita; markera och radera fungerar i 3D. |
| Att rikta in staplade våningsplan som är plottade på olika platser på sina sidor | Stapla våningsplan som är plottade likadant; kontrollera de övriga ett blad i taget. |
| Räkna märken dimensionerade efter det räknade objektet | Varje märke på ett blad är lika stort; det visar var en räkning görs, inte vad den gäller. |

## Anbud

| Finns inte ännu | I stället, idag |
|---|---|
| Tilläggshandlingar till ett paket som redan skickats, tilldelningsbrev, ett omfattningsblad som varje anbudsgivare signerar | Skicka ett nytt paket, och skriv tilldelningen själv. [Skicka ett paket för anbud](topic:bid-invitations) beskriver vad som finns. |
| Att skicka anbudsinbjudningar från valfritt konto: under testningen är e-post till externa anbudsgivare avstängd, utom för konton som CadCraft-teamet har aktiverat | Ladda ner {{ui:Omfattnings-CSV}}, skicka den via e-post själv och skriv in anbuden. |
| Att skicka anbudspaket från ett Studio-fönster | Skicka från TakeoffCraft i webbläsaren. |
| Att räkna om ett alternativs anbudsområde med ett valt anbud | Alternativ och delsummor per anbudsområde använder dina egna priser; justera alternativet för hand. |
| Automatiska påminnelser innan en underentreprenörs försäkrings- eller licensdatum går ut | Datumet markeras på sidan Underentreprenörer när det har passerat eller ligger inom 30 dagar; kontrollera det när du bjuder in. |

## Paneler

| Finns inte ännu | I stället, idag |
|---|---|
| Att flytta tabellen {{ui:Mängder}} | Endast panelerna {{ui:Blad}} och {{ui:Poster}} kan flyttas. Se [Ordna panelerna](common:arrange-panels). |

## Kalkylblad

Arbetsboken XLSX har kontrollerats i LibreOffice Calc, som räknade om alla summor till samma öre som TakeoffCraft. Den har ännu inte öppnats i Excel. Om ett kalkylprogram visar något oväntat innehåller CSV-exporten samma kalkyl som vanliga värden.
