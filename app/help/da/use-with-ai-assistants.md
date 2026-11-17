---
title: Brug TakeoffCraft med en AI-assistent
summary: Lad din egen AI-assistent eller dit script læse mængdeudtrækkets mængder og kalkulation, tilføje poster og mærker, tælle og måle på en DWG eller DXF og eksportere: tilladelser, forbindelse via CadCraft Studio og aktivitetsloggen.
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, mængder, kalkulation, tilladelser, afbryd, aktivitet
from: 7fa62ec6
---

## Hvad du lærer

Sådan lader du en AI-assistent (eller et script du selv har skrevet) arbejde med TakeoffCraft, og hvordan du bestemmer, hvad den må ændre.

TakeoffCraft har **ingen egen AI** og sender ikke noget nogen steder. Du medbringer assistenten: et hvilket som helst program, der understøtter Model Context Protocol (MCP). TakeoffCraft giver den kun værktøjer, og du vælger hvilke.

## Tænd for det

1. Åbn {{ui:Indstillinger}} (tandhjulet i appens øverste linje, eller {{key:Mod+,}}) og gå til fanen {{ui:TakeoffCraft}}.
2. Under {{ui:Assistenter}} sætter du flueben i **Lad AI-assistenter og scripts bruge TakeoffCraft**. Den er slukket, indtil du gør det.
3. Vælg hvad den må: **Læs** er med flueben fra start; sæt kun flueben i **Redigér**, **Gem** eller **Eksportér**, når du har brug for dem.

Værktøjer, der ligger uden for de tilladelser, du har sat flueben i, tilbydes ikke assistenten, og hvis den alligevel beder om et, afviser TakeoffCraft det og skriver det i aktivitetsloggen. Når du slår kontakten fra, afbrydes alle forbindelser på én gang; {{ui:Nulstil TakeoffCraft-indstillinger}} slukker den også.

## Forbind din assistent

Assistenter forbinder via **CadCraft Studio** på din computer: Studio kører en lille server, som kun denne computer kan nå, og den er beskyttet af et token, som Studio laver hver gang den starter. I Studio vælger du {{ui:Forbind en assistent}} og kopierer adressen og tokenet ind i din assistent (Studio viser de præcise indstillinger, du skal indsætte). Del aldrig tokenet.

:::note
En browserfane kan ikke åbne en forbindelse for en assistent: i browserappene har kontakten ingen virkning, før du bruger CadCraft Studio på din computer.
:::

## Du har kontrollen

- **Hver ændring er ét fortrydelsestrin**, mærket med assistentens navn for den (for eksempel "Assistent: …"). {{key:Mod+Z}} fortryder assistentens seneste ændring i sin helhed.
- **Du ved, når en er forbundet.** En knap i appens øverste linje viser assistentens navn, mens den er forbundet; klik på den for at se, hvad den må, eller for at trykke **Afbryd forbindelsen**.
- **Aktivitet.** {{ui:Indstillinger}} › {{ui:TakeoffCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} viser hvert kald: hvornår, hvilket værktøj, og om det blev udført eller afvist. {{ui:Gem loggen}} gemmer en kopi.

## Hvad en assistent kan bede om

| Værktøj | Tilladelse | Hvad det gør |
|---|---|---|
| `app_info`, `sheets_list` | Læs | Det åbne mængdeudtræk, dets PDF'er og ark, hvert arks målestok og mærker |
| `items_list` | Læs | Posterne med deres enheder, enhedspriser og kalkulationsformler |
| `takeoff_quantities` | Læs | Mængder pr. post eller pr. ark; mærker på ark uden målestok vises på listen og tælles aldrig som nul |
| `takeoff_estimate` | Læs | Kalkulationen med priser, som TakeoffCraft beregner den, med dens summer |
| `takeoff_export` | Eksportér | TakeoffCraft's egen CSV- eller XLSX-eksport |
| `items_add` | Redigér | Tilføjer poster med deres enheder, enhedspriser og spild |
| `marks_add` | Redigér | Måler længder, arealer og tællinger på et ark. Længder og arealer kun på et ark med målestok, aldrig på et uskaleret ark |
| `cad_sheets`, `cad_catalog`, `cad_count` | Læs | På en DWG eller DXF, du har åbnet: dens ark og deres målestokke, hvad der kan tælles (blokke, lag og typer, tekster), og nøjagtige tællinger, som {{ui:CAD-tælling}} laver dem ([Tæl fra en tegning](topic:count-from-a-drawing)) |
| `cad_count_add` | Redigér | Tæller i tegningen og sætter et tællemærke på hvert fundet objekt i ét trin; tæller man igen, tilføjes kun det nye |
| `cad_measure` | Redigér | Måler en lineær eller arealpost ud fra tegningens egne linjer, buer, polylinjer og skraveringer, som {{ui:Mål tegning}} gør ([Mål fra en tegning](topic:measure-from-a-drawing)); kun på et ark med målestok |
| `usd_export` | Eksportér | Målte længder, arealer og tællinger på et ark med målestok som en 3D-kontrolmodel i USD (`.usdz`, `.usda` eller `.usdc`), præcis som {{ui:USD-pakke (.usdz)}} i 3D-kontrolvisningen skriver den ([Eksportér 3D-kontrolvisningen som USD](topic:usd)) |

Med **Redigér** sat af tilføjer en assistent poster og mærker (hvert kald er ét fortrydelsestrin); den kan ikke flytte, ændre eller slette mærker, der allerede findes.

De samme mængder og kalkulationer er tilgængelige uden at åbne TakeoffCraft: CadCraft MCP-serveren åbner en `.takeoff.json`-fil i en mappe, du angiver (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), og `cadcraft info Job.takeoff.json` udskriver dem i kommandolinjen. Den åbner også en DWG eller DXF som et nyt mængdeudtræk på sine ark (med målestok fra tegningen, præcis som TakeoffCraft fastsætter den), tæller og måler på det med de samme `cad_*`-værktøjer, tilføjer poster og gemmer mængdeudtrækket (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` tæller fra kommandolinjen.

## Hvis noget ikke virker

- **Assistenten ser ingen TakeoffCraft-værktøjer:** kontrollér at kontakten er tændt i dette vindue, og at vinduet er åbent i Studio.
- **"kræver tilladelsen Eksportér":** sæt flueben i **Eksportér** under {{ui:Assistenter}}, og spørg igen.
- **Fejl med "401" eller "token":** tokenet er ændret (Studio er genstartet, eller du valgte {{ui:Nyt token}}). Kopiér det nye ind i assistentens indstillinger.

## Se også

- [Opskrifter til AI-assistenter](common:assistants-recipes): gennemarbejdede eksempler, hver med de værktøjer den kalder.
