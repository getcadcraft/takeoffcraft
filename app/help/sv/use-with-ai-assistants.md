---
title: Använd TakeoffCraft med en AI-assistent
summary: Låt din egen AI-assistent eller ditt skript läsa mängdavtagningens mängder och kalkyl, lägga till poster och markeringar, räkna och mäta i en DWG eller DXF, och exportera: behörigheter, anslutning via CadCraft Studio och aktivitetsloggen.
keywords: ai, assistent, agent, mcp, model context protocol, skript, automatisering, mängder, kalkyl, behörigheter, koppla från, aktivitet
from: 7fa62ec6
---

## Vad du får lära dig

Hur du låter en AI-assistent (eller ett skript du har skrivit) arbeta med TakeoffCraft, och hur du avgör vad den får röra.

TakeoffCraft har **ingen egen AI** och skickar ingenting någonstans. Du tar med assistenten: vilket program som helst som talar Model Context Protocol (MCP). TakeoffCraft ger den bara verktyg, och du väljer vilka.

## Slå på den

1. Öppna {{ui:Inställningar}} (kugghjulet i programfältet, eller {{key:Mod+,}}) och gå till fliken {{ui:TakeoffCraft}}.
2. Under {{ui:Assistenter}}, markera **Låt AI-assistenter och skript använda TakeoffCraft**. Den är av tills du gör det.
3. Välj vad den får göra: **Läs** är markerad från början; markera **Redigera**, **Spara** eller **Exportera** först när du behöver dem.

Verktyg utanför de behörigheter du markerat erbjuds inte till assistenten, och om den ändå begär ett sådant vägrar TakeoffCraft och skriver det i aktivitetsloggen. När du stänger av strömbrytaren avslutas alla anslutningar på en gång; {{ui:Återställ TakeoffCraft-inställningar}} stänger av den också.

## Anslut din assistent

Assistenter ansluter via **CadCraft Studio** på din dator: Studio kör en liten server som bara den här datorn når, skyddad av en token som den skapar varje gång den startar. I Studio väljer du {{ui:Anslut en assistent}} och kopierar adressen och token till din assistent (Studio visar de exakta inställningar du ska klistra in). Dela aldrig token.

:::note
En webbläsarflik kan inte öppna en anslutning för en assistent: i webbläsarappar har strömbrytaren ingen effekt förrän du använder CadCraft Studio på din dator.
:::

## Du har kontrollen

- **Varje ändring är ett steg att ångra**, märkt med assistentens namn för den (till exempel ”Assistent: …”). {{key:Mod+Z}} tar tillbaka assistentens senaste ändring som helhet.
- **Du vet när en assistent är ansluten.** En knapp i programfältet visar assistentens namn medan den är ansluten; klicka på den för att se vad den får göra, eller för att {{ui:Koppla från}} den.
- **Aktivitet.** {{ui:Inställningar}} › {{ui:TakeoffCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} listar varje anrop: när, vilket verktyg, och om det utfördes eller vägrades. {{ui:Spara loggen}} sparar en kopia.

## Vad en assistent kan begära

| Verktyg | Behörighet | Vad det gör |
|---|---|---|
| `app_info`, `sheets_list` | Läs | Mängdavtagningen som är öppen, dess PDF:er och blad, varje blads skala och markeringar |
| `items_list` | Läs | Posterna med deras enheter, á-priser och kalkylsammansättningsformler |
| `takeoff_quantities` | Läs | Mängder per post eller per blad; markeringar på blad utan skala listas och räknas aldrig som noll |
| `takeoff_estimate` | Läs | Den prissatta kalkylen så som TakeoffCraft räknar ut den, med dess summor |
| `takeoff_export` | Exportera | TakeoffCrafts egen CSV- eller XLSX-export |
| `items_add` | Redigera | Lägger till poster med deras enheter, á-priser och spill |
| `marks_add` | Redigera | Mäter sträckor, areor och antal på ett blad. Längder och areor bara på ett blad med skala, aldrig på ett oskalat |
| `cad_sheets`, `cad_catalog`, `cad_count` | Läs | På en DWG eller DXF du öppnat: dess blad och deras skalor, vad som kan räknas (block, lager och typer, texter) och exakta antal, så som {{ui:CAD-räkning}} tar fram dem ([Räkna från en ritning](topic:count-from-a-drawing)) |
| `cad_count_add` | Redigera | Räknar i ritningen och sätter en räknemarkering på varje objekt som hittas, i ett steg; att räkna igen lägger bara till det som är nytt |
| `cad_measure` | Redigera | Mäter en linjär post eller en areapost från ritningens egna linjer, bågar, polylinjer och skraffering, så som {{ui:Mät ritning}} gör ([Mät från en ritning](topic:measure-from-a-drawing)); bara på ett blad med skala |
| `usd_export` | Exportera | Ett skalat blads uppmätta sträckor, areor och antal som en 3D-kontrollmodell i USD (`.usdz`, `.usda` eller `.usdc`), så som {{ui:USD-paket (.usdz)}} i 3D-kontrollvyn skriver den ([Exportera 3D-kontrollvyn som USD](topic:usd)) |

Med **Redigera** markerad lägger en assistent till poster och markeringar (varje anrop är ett steg att ångra); den kan inte flytta, ändra eller ta bort markeringar som redan finns.

Samma mängder och kalkyl finns tillgängliga utan att öppna TakeoffCraft: CadCraft MCP-servern öppnar en `.takeoff.json`-fil i en mapp du anger (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), och `cadcraft info Job.takeoff.json` skriver ut dem på kommandoraden. Den öppnar också en DWG eller DXF som en ny mängdavtagning på dess blad (skalad från ritningen så som TakeoffCraft skalar dem), räknar och mäter i den med samma `cad_*`-verktyg, lägger till poster och sparar mängdavtagningen (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` räknar från kommandoraden.

## Om något inte fungerar

- **Assistenten ser inga TakeoffCraft-verktyg:** kontrollera att strömbrytaren är på i det här fönstret, och att fönstret är öppet i Studio.
- **”needs the export permission”:** markera **Exportera** under {{ui:Assistenter}} och fråga sedan igen.
- **Fel med ”401” eller ”token”:** token har ändrats (Studio startades om, eller {{ui:Ny token}}). Kopiera den nya till assistentens inställningar.

## Se också

- [Recept för AI-assistenter](common:assistants-recipes): arbetade exempel, var och ett med de verktyg det anropar.
