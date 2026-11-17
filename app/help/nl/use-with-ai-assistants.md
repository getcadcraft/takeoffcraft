---
title: TakeoffCraft gebruiken met een AI-assistent
summary: Laat uw eigen AI-assistent of script de hoeveelheden en de raming van de opmeting lezen, posten en markeringen toevoegen, tellen en meten op een DWG of DXF, en exporteren: toestemmingen, verbinden via CadCraft Studio en het activiteitenlogboek.
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, hoeveelheden, raming, toestemmingen, verbreken, activiteit
from: 7fa62ec6
---

## Wat u leert

Hoe u een AI-assistent (of een script dat u zelf schreef) met TakeoffCraft laat werken, en hoe u bepaalt wat die mag aanraken.

TakeoffCraft heeft **geen eigen AI** en stuurt niets ergens heen. U brengt de assistent mee: elk programma dat het Model Context Protocol (MCP) spreekt. TakeoffCraft geeft die alleen tools, en u kiest welke.

## Inschakelen

1. Open {{ui:Instellingen}} (het tandwiel in de appbalk, of {{key:Mod+,}}) en ga naar het tabblad {{ui:TakeoffCraft}}.
2. Vink onder {{ui:Assistenten}} **AI-assistenten en scripts TakeoffCraft laten gebruiken** aan. Die staat uit tot u dat doet.
3. Kies wat die mag doen: **Lezen** staat vanaf het begin aan; vink **Bewerken**, **Opslaan** of **Exporteren** alleen aan wanneer u die nodig hebt.

Tools die buiten de toestemmingen vallen die u hebt aangevinkt, worden de assistent niet aangeboden. Vraagt de assistent er toch om, dan weigert TakeoffCraft en schrijft dat in het activiteitenlogboek. Door de schakelaar uit te zetten, worden alle verbindingen meteen beëindigd; {{ui:TakeoffCraft-instellingen opnieuw instellen}} zet hem ook uit.

## Uw assistent verbinden

Assistenten maken verbinding via **CadCraft Studio** op uw computer: Studio draait een kleine server die alleen deze computer kan bereiken, beveiligd met een token dat het elke keer bij het starten maakt. Kies in Studio {{ui:Assistent verbinden}} en kopieer het adres en het token naar uw assistent (Studio toont de precieze instellingen om te plakken). Deel het token nooit.

:::note
Een browsertabblad kan geen verbinding openen voor een assistent: in de browserapps heeft de schakelaar geen effect totdat u CadCraft Studio op uw computer gebruikt.
:::

## U houdt de controle

- **Elke wijziging is één stap voor ongedaan maken**, met de naam van de assistent erbij (bijvoorbeeld "Assistent: …"). {{key:Mod+Z}} draait de laatste wijziging van de assistent in zijn geheel terug.
- **U ziet wanneer er een is verbonden.** Een knop in de appbalk noemt de assistent zolang die is verbonden; klik erop om te zien wat die mag doen, of om de verbinding te **verbreken**.
- **Activiteit.** {{ui:Instellingen}} › {{ui:TakeoffCraft}} › {{ui:Assistenten}} › {{ui:Activiteit}} toont elke aanroep: wanneer, welke tool, en of die is uitgevoerd of geweigerd. {{ui:Het logboek opslaan}} bewaart een kopie.

## Wat een assistent kan vragen

| Tool | Toestemming | Wat het doet |
|---|---|---|
| `app_info`, `sheets_list` | Lezen | De geopende opmeting, de pdf's en bladen, de schaal en markeringen van elk blad |
| `items_list` | Lezen | De posten met hun eenheden, tarieven en samenstellingsformules |
| `takeoff_quantities` | Lezen | Hoeveelheden per post of per blad; markeringen op bladen zonder schaal worden vermeld, nooit als nul geteld |
| `takeoff_estimate` | Lezen | De geprijsde raming zoals TakeoffCraft die berekent, met de totalen |
| `takeoff_export` | Exporteren | De eigen CSV- of XLSX-export van TakeoffCraft |
| `items_add` | Bewerken | Voegt posten toe met hun eenheden, tarieven en verlies |
| `marks_add` | Bewerken | Meet lopende meters, oppervlakten en tellingen op een blad. Lengten en oppervlakten alleen op een blad met schaal, nooit op een blad zonder schaal |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lezen | Bij een geopende DWG of DXF: de bladen en hun schalen, wat er geteld kan worden (blokken, lagen en typen, teksten), en exacte aantallen, zoals {{ui:CAD-telling}} die maakt ([Tellen vanuit een tekening](topic:count-from-a-drawing)) |
| `cad_count_add` | Bewerken | Telt in de tekening en zet in één stap een telmarkering op elk gevonden object; opnieuw tellen voegt alleen het nieuwe toe |
| `cad_measure` | Bewerken | Meet een lineaire of oppervlakte-post aan de hand van de eigen lijnen, bogen, polylijnen en arceringen van de tekening, zoals {{ui:Tekening meten}} doet ([Meten vanuit een tekening](topic:measure-from-a-drawing)); alleen op een blad met schaal |
| `usd_export` | Exporteren | De gemeten lopende meters, oppervlakten en tellingen van een blad met schaal als 3D-controlemodel in USD (`.usdz`, `.usda` of `.usdc`), zoals {{ui:USD-pakket (.usdz)}} in de 3D-controleweergave ze schrijft ([De 3D-controleweergave exporteren als USD](topic:usd)) |

Met **Bewerken** aangevinkt voegt een assistent posten en markeringen toe (elke aanroep is één stap ongedaan maken); markeringen die er al zijn, kan hij niet verplaatsen, wijzigen of verwijderen.

Dezelfde hoeveelheden en raming zijn beschikbaar zonder TakeoffCraft te openen: de CadCraft MCP-server opent een `.takeoff.json`-bestand in een map die u opgeeft (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), en `cadcraft info Job.takeoff.json` drukt ze af op de opdrachtregel. Ook opent die een DWG of DXF als nieuwe opmeting op zijn bladen (geschaald uit de tekening, zoals TakeoffCraft schaalt), telt en meet erop met dezelfde `cad_*`-tools, voegt posten toe en slaat de opmeting op (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` telt vanaf de opdrachtregel.

## Als iets niet werkt

- **De assistent ziet geen TakeoffCraft-tools:** controleer of de schakelaar in dit venster aan staat, en of het venster open is in Studio.
- **"heeft de exporttoestemming nodig":** vink onder {{ui:Assistenten}} **Exporteren** aan en vraag het opnieuw.
- **Fouten "401" of "token":** het token is veranderd (Studio is opnieuw gestart, of {{ui:Nieuw token}}). Kopieer het nieuwe token naar de instellingen van de assistent.

## Zie ook

- [Recepten voor AI-assistenten](common:assistants-recipes): uitgewerkte voorbeelden, elk met de tools die het aanroept.
