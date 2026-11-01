---
title: Filer som TakeoffCraft öppnar och sparar
summary: PDF-filer in, en projektfil för mängdavtagning, kalkylblad och markerade PDF-filer ut - vad var och en innehåller, vart den tar vägen och vad som ändras online, offline och mellan webbläsare.
keywords: filer, format, pdf, takeoff.json, projektfil, xlsx, csv, markerad pdf, ladda ner, spara, öppna, offline
from: 1bf9be65
---

## Vad den öppnar

| Fil | Hur | Anmärkningar |
|---|---|---|
| PDF (`.pdf`) | {{ui:Öppna ritningar}}, {{key:Mod+O}} eller släpp på sidan | Flera samtidigt. Varje sida blir ett blad. |
| Projekt för mängdavtagning (`.takeoff.json`) | {{ui:Öppna avtagning}} eller släpp på sidan | Dina poster, skalor och markeringar. Du kan släppa den tillsammans med dess PDF-filer. |

Andra filer som släpps på sidan hoppas över, och statusfältet nämner dem.

- **Lösenordsskyddade PDF-filer** öppnas inte: ”(name) är lösenordsskyddad. Öppna en oskyddad kopia.”
- **Samma PDF två gånger** öppnas en gång: ”(name) är redan öppen.” TakeoffCraft känner igen filer på innehållet, inte på namnen.
- **Inskannade PDF-filer** öppnas och mäts som alla andra; TakeoffCraft behöver inte texten i PDF-filen.
- **Stora ritningsuppsättningar**: varje PDF läses i sin helhet när den öppnas (för att ta ett fingeravtryck), så en mycket stor fil tar en stund. Miniatyrer ritas en i taget medan du rullar.

## Vad den sparar

Varje sparande är en nedladdning. Ingenting skrivs tillbaka i dina PDF-filer.

| Du väljer | Du får | Vad som finns i den |
|---|---|---|
| {{ui:Spara avtagning}} | `(name).takeoff.json` | Poster, sammansättningar, priser, bladskalor och varje markering, kopplade till varje PDF via dess innehåll. Inga PDF-sidor. |
| {{ui:XLSX}} | `(name).xlsx` | Fyra kalkylblad: Kalkyl (med levande formler), Per blad, Markeringar, Skalor. |
| {{ui:CSV}} | `(name).csv` | Kalkylen som rena värden, en rad per post och komponent. |
| {{ui:Markerad PDF}} | `(PDF name) (takeoff).pdf` | En kopia av varje öppen PDF som har markeringar, med mängdavtagningen ritad på sidorna och en teckenförklaring. En fil per PDF. |

Namnet tas från den första PDF-filen du öppnade i den här mängdavtagningen. Det finns ingen ruta för att byta namn ännu: byt namn på den nedladdade filen om du vill ha ett annat namn.

Se [Exportera kalkylen och en markerad PDF](topic:export-estimate) och [Exportkolumner](topic:export-columns).

## Vart nedladdningar tar vägen

Din webbläsare sparar dem där den sparar varje nedladdning, oftast mappen Hämtade filer. Hitta den i {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}}. Om din webbläsare är inställd på att fråga var varje fil ska sparas frågar den.

:::chromium
{{ui:Markerad PDF}} med flera markerade PDF-filer laddar ner flera filer på en gång. Chrome och Edge kan fråga en gång om den här webbplatsen får ladda ner flera filer. Välj Tillåt.
:::

:::safari
Safari sparar i Hämtade filer om du inte ändrat nedladdningsplatsen i Safaris inställningar, under Allmänt.
:::

## Varför projektfilen och PDF-filerna är separata

Filen `.takeoff.json` innehåller bara din mängdavtagning. Den hittar sina PDF-filer igen på deras innehåll (ett fingeravtryck av varje fil), så:

- Det spelar ingen roll om du byter namn på eller flyttar en PDF.
- En PDF som ändrats eller sparats på nytt av ett annat program räknas som en annan fil, även med samma namn.
- Markeringar på PDF-filer som inte är öppna räknas fortfarande med i summorna.

Se [Spara och öppna en mängdavtagning igen](topic:save-and-reopen).

## Online och offline

Dina PDF-filer och mängdavtagningar lämnar aldrig din dator, varken online eller offline. Anslutningen spelar roll bara för att läsa in själva TakeoffCraft.

För att arbeta utan anslutning sparar du appen först, medan du är online:

1. Välj {{ui:Spara för offline}} i appfältet överst.
   Knappen räknar uppåt, ”Sparar 12 av 40”, medan den sparar.
2. Vänta på {{ui:Redo för offline}}.

När TakeoffCraft sparas behåller webbläsaren appen, den här hjälpen, PDF-läsaren, PDF-skrivaren som används av {{ui:Markerad PDF}} och arbetaren för autoräkning, cirka 6 MB. När det står {{ui:Redo för offline}} fungerar allt offline: öppna PDF-filer, mäta, {{ui:Autoräkna}}, {{ui:Spara avtagning}}, {{ui:XLSX}}, {{ui:CSV}} och {{ui:Markerad PDF}}.

| Knappen säger | Betydelse |
|---|---|
| {{ui:Spara för offline}} | Inte sparad i den här webbläsaren ännu. Välj den för att spara. |
| Sparar (n) av (m) | Sparar nu. |
| {{ui:Redo för offline}} | Sparad. Välj den för {{ui:Spara igen (hämta den senaste versionen)}} eller {{ui:Ta bort offlinekopian}}. |
| {{ui:Kunde inte spara}} | Vissa filer laddades inte ner. Kontrollera anslutningen och välj den igen. |
| {{ui:Offline är inte tillgängligt}} | Det här webbläsarfönstret kan inte behålla en offlinekopia (privata fönster och vissa hanterade datorer blockerar det). |

Mer, inklusive hur länge en sparad kopia håller i varje webbläsare: [Arbeta offline](common:offline).

:::offline
Du är offline. Om appfältet visar {{ui:Redo för offline}} fungerar allt. Om det inte gör det kan de delar som TakeoffCraft ännu inte läst in i den här fliken (PDF-skrivaren för {{ui:Markerad PDF}}, arbetaren för autoräkning) inte läsas in nu, och {{ui:Markerad PDF}} stoppar med ”Den markerade PDF-filen kunde inte skrivas”. Din mängdavtagning är säker i båda fallen: {{ui:Spara avtagning}}, {{ui:XLSX}} och {{ui:CSV}} behöver ingen anslutning. Ladda inte om fliken förrän du är online igen.
:::

:::online
Du är online. Före ett platsbesök eller en flygning väljer du {{ui:Spara för offline}} och väntar på {{ui:Redo för offline}}.
:::

## Kalkylblad

XLSX-filen behåller levande formler, så ett kalkylprogram räknar om kalkylen när det öppnar filen och håller den rätt när du ändrar ett pris eller spill där. Arbetsboken har kontrollerats i LibreOffice Calc, som räknade om varje summa till samma öre. Den har inte öppnats i Excel ännu.

CSV-filen är rena värden med en byteordningsmarkör, så att kalkylprogram läser tecken som m² rätt.

## Skrivbord och moln

:::desktop
Från 0.5 är skrivbordsappen CadCraft Studio: TakeoffCraft och de andra sju apparna i en installation. Det finns inget separat installationsprogram för TakeoffCraft.
:::

Molnsparande finns inte ännu. Förvara dina `.takeoff.json`-filer tillsammans med jobbets PDF-filer och ta säkerhetskopior som av andra filer. Se [Vart dina filer tar vägen](common:your-files).
