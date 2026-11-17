---
title: Bruk TakeoffCraft med en KI-assistent
summary: La din egen KI-assistent eller et skript lese mengdene og kalkylen i mengdeuttaket, legge til poster og markeringer, telle og måle på en DWG eller DXF, og eksportere: tillatelser, tilkobling via CadCraft Studio og aktivitetsloggen.
keywords: ki, assistent, agent, mcp, model context protocol, skript, automatisering, mengder, kalkyle, tillatelser, koble fra, aktivitet
from: 7fa62ec6
---

## Hva du lærer

Hvordan du lar en KI-assistent (eller et skript du har skrevet) arbeide med TakeoffCraft, og hvordan du bestemmer hva den har lov til å endre.

TakeoffCraft har **ingen egen KI** og sender ingenting noe sted. Du tar med assistenten: et hvilket som helst program som snakker Model Context Protocol (MCP). TakeoffCraft gir den bare verktøy, og du velger hvilke.

## Slå den på

1. Åpne {{ui:Settings}} (tannhjulet i programlinjen, eller {{key:Mod+,}}) og gå til fanen {{ui:TakeoffCraft}}.
2. Under {{ui:Assistants}}, kryss av for **La KI-assistenter og skript bruke TakeoffCraft**. Den er av til du gjør dette.
3. Velg hva den får gjøre: **Les** er avkrysset fra start; kryss av for **Rediger**, **Lagre** eller **Eksporter** bare når du trenger dem.

Verktøy utenfor tillatelsene du har krysset av for, tilbys ikke assistenten. Hvis den likevel ber om et, avviser TakeoffCraft det og skriver det i aktivitetsloggen. Å slå av bryteren avslutter alle tilkoblinger med én gang; {{ui:Tilbakestill innstillinger for TakeoffCraft}} slår den også av.

## Koble til assistenten

Assistenter kobles til via **CadCraft Studio** på datamaskinen din. Studio kjører en liten server som bare denne datamaskinen kan nå, beskyttet av en token som den lager hver gang den starter. I Studio velger du {{ui:Koble til en assistent}}, og kopierer adressen og tokenet over til assistenten din (Studio viser de nøyaktige innstillingene som skal limes inn). Del aldri tokenet.

:::note
En nettleserfane kan ikke åpne en tilkobling for en assistent: i nettleserversjonene har bryteren ingen effekt før du bruker CadCraft Studio på datamaskinen din.
:::

## Du har kontroll

- **Hver endring er ett angretrinn**, merket med assistentens navn for den (for eksempel «Assistent: …»). {{key:Mod+Z}} tar tilbake assistentens siste endring som helhet.
- **Du vet når en assistent er tilkoblet.** En knapp i programlinjen viser navnet på assistenten mens den er tilkoblet. Klikk på den for å se hva den har lov til, eller for å **koble fra** den.
- **Aktivitet.** {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Assistants}} › {{ui:Activity}} lister hvert kall: når, hvilket verktøy, og om det ble utført eller avvist. {{ui:Save the log}} lagrer en kopi.

## Hva en assistent kan be om

| Verktøy | Tillatelse | Hva det gjør |
|---|---|---|
| `app_info`, `sheets_list` | Les | Mengdeuttaket som er åpent, PDF-ene og arkene, hvert arks målestokk og markeringer |
| `items_list` | Les | Postene med enheter, enhetspriser og formler for sammensatte poster |
| `takeoff_quantities` | Les | Mengder per post eller per ark; markeringer på ark uten målestokk listes, og telles aldri som null |
| `takeoff_estimate` | Les | Kalkylen med priser slik TakeoffCraft regner den, med sumene |
| `takeoff_export` | Eksporter | TakeoffCrafts egen CSV- eller XLSX-eksport |
| `items_add` | Rediger | Legger til poster med enheter, enhetspriser og svinn |
| `marks_add` | Rediger | Måler løpemeter, arealer og tellinger på et ark. Lengder og arealer bare på et ark med målestokk, aldri på et uskalert ark |
| `cad_sheets`, `cad_catalog`, `cad_count` | Les | På en DWG eller DXF du har åpnet: arkene og deres målestokker, det som kan telles (blokker, layers og typer, tekster), og nøyaktige tellinger, slik {{ui:CAD count}} gjør dem ([Tell fra en tegning](topic:count-from-a-drawing)) |
| `cad_count_add` | Rediger | Teller i tegningen og setter en tellemarkering på hvert funnet objekt, i ett trinn; teller man på nytt, legges bare det nye til |
| `cad_measure` | Rediger | Måler en lineær eller arealpost fra tegningens egne linjer, buer, polylinjer og skravurer, slik {{ui:Measure drawing}} gjør ([Mål fra en tegning](topic:measure-from-a-drawing)); bare på et ark med målestokk |
| `usd_export` | Eksporter | Et skalert arks målte løpemeter, arealer og tellinger som en 3D-kontrollmodell i USD (`.usdz`, `.usda` eller `.usdc`), slik {{ui:USD package (.usdz)}} i 3D-kontrollvisningen skriver den ([Eksporter 3D-kontrollvisningen som USD](topic:usd)) |

Med **Rediger** avkrysset legger en assistent til poster og markeringer (hvert kall er ett angretrinn). Den kan ikke flytte, endre eller slette markeringer som allerede finnes.

De samme mengdene og kalkylen er tilgjengelige uten at TakeoffCraft er åpnet: CadCraft MCP-serveren åpner en `.takeoff.json`-fil i en mappe du oppgir (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), og `cadcraft info Job.takeoff.json` skriver dem ut på kommandolinjen. Den åpner også en DWG eller DXF som et nytt mengdeuttak på arkene (skalert fra tegningen slik TakeoffCraft skalerer dem), teller og måler på den med de samme `cad_*`-verktøyene, legger til poster og lagrer mengdeuttaket (`takeoff_save`). `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` teller fra kommandolinjen.

## Hvis noe ikke fungerer

- **Assistenten ser ingen TakeoffCraft-verktøy:** kontroller at bryteren er på i dette vinduet, og at vinduet er åpent i Studio.
- **«needs the export permission»:** kryss av for **Eksporter** under {{ui:Assistants}}, og spør igjen.
- **Feil «401» eller «token»:** tokenet har endret seg (Studio ble startet på nytt, eller du valgte {{ui:New token}}). Kopier det nye tokenet inn i assistentens innstillinger.

## Se også

- [Oppskrifter for KI-assistenter](common:assistants-recipes): arbeidseksempler, hver med verktøyene den kaller.
