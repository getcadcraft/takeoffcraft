---
title: Gebruik TakeoffCraft met 'n KI-assistent
summary: Laat jou eie KI-assistent of skrip die hoeveelhede en beraming van die hoeveelheidsopname lees, items en merke byvoeg, op 'n DWG of DXF tel en meet, en uitvoer: toestemmings, koppeling deur CadCraft Studio, en die aktiwiteitslogboek.
keywords: ki, assistent, agent, mcp, model context protocol, skrip, outomatisering, hoeveelhede, beraming, toestemmings, ontkoppel, aktiwiteit
from: 7fa62ec6
---

## Wat jy sal leer

Hoe jy 'n KI-assistent (of 'n skrip wat jy geskryf het) met TakeoffCraft laat werk, en hoe jy besluit wat dit mag aanraak.

TakeoffCraft het **geen eie KI nie** en stuur niks iewers heen nie. Jy bring die assistent: enige program wat die Model Context Protocol (MCP) praat. TakeoffCraft gee dit net gereedskap, en jy kies watter.

## Skakel dit aan

1. Maak {{ui:Instellings}} oop (die rat in die programbalk, of {{key:Mod+,}}) en gaan na die {{ui:TakeoffCraft}}-oortjie.
2. Onder {{ui:Assistente}}, merk **Laat KI-assistente en skripte TakeoffCraft gebruik**. Dit is af totdat jy dit doen.
3. Kies wat dit mag doen: **Lees** is van die begin af gemerk; merk **Wysig**, **Stoor** of **Uitvoer** net wanneer jy dit nodig het.

Gereedskap buite die toestemmings wat jy gemerk het, word nie aan die assistent aangebied nie. As dit tog een vra, weier TakeoffCraft dit en skryf dit in die aktiwiteitslogboek. Om die skakelaar af te skakel, beëindig elke koppeling terselfdertyd; {{ui:Stel TakeoffCraft-instellings terug}} skakel dit ook af.

## Koppel jou assistent

Assistente koppel deur **CadCraft Studio** op jou rekenaar: Studio laat 'n klein bediener loop wat net hierdie rekenaar kan bereik, beskerm deur 'n token wat dit elke keer maak wanneer dit begin. In Studio, kies {{ui:Koppel 'n assistent}} en kopieer die adres en die token na jou assistent (Studio wys die presiese instellings om in te plak). Deel nooit die token nie.

:::note
'n Blaaiervenster kan nie 'n koppeling vir 'n assistent oopmaak nie: in die blaaier-programme het die skakelaar geen effek totdat jy CadCraft Studio op jou rekenaar gebruik nie.
:::

## Jy bly in beheer

- **Elke verandering is een ontdoen-stap**, met die assistent se naam daarvoor as etiket (byvoorbeeld "Assistent: …"). {{key:Mod+Z}} neem die assistent se laaste verandering as geheel terug.
- **Jy weet wanneer een gekoppel is.** 'n Knoppie in die programbalk noem die assistent solank dit gekoppel is; klik daarop om te sien wat dit mag doen, of om dit te **Ontkoppel**.
- **Aktiwiteit.** {{ui:Instellings}} › {{ui:TakeoffCraft}} › {{ui:Assistente}} › {{ui:Aktiwiteit}} lys elke oproep: wanneer, watter gereedskap, en of dit klaar is of geweier is. {{ui:Stoor die logboek}} hou 'n afskrif.

## Wat 'n assistent kan vra

| Gereedskap | Toestemming | Wat dit doen |
|---|---|---|
| `app_info`, `sheets_list` | Lees | Die oop hoeveelheidsopname, sy PDF's en blaaie, elke blad se skaal en merke |
| `items_list` | Lees | Die items met hul eenhede, tariewe en samestellingsformules |
| `takeoff_quantities` | Lees | Hoeveelhede per item of per blad; merke op blaaie sonder skaal word gelys, nooit as nul getel nie |
| `takeoff_estimate` | Lees | Die geprysde beraming soos TakeoffCraft dit bereken, met sy totale |
| `takeoff_export` | Uitvoer | TakeoffCraft se eie CSV- of XLSX-uitvoer |
| `items_add` | Wysig | Voeg items by met hul eenhede, tariewe en vermorsing |
| `marks_add` | Wysig | Meet lope, oppervlaktes en tellings op 'n blad. Lengtes en oppervlaktes net op 'n blad met 'n skaal, nooit op een sonder skaal nie |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lees | Op 'n DWG of DXF wat jy oopgemaak het: sy blaaie en hul skale, wat getel kan word (blokke, lae en tipes, tekste), en presiese tellings, soos {{ui:CAD-telling}} dit maak ([Tel vanuit 'n tekening](topic:count-from-a-drawing)) |
| `cad_count_add` | Wysig | Tel in die tekening en plaas 'n telmerk op elke voorwerp wat gevind word, in een stap; weer tel voeg net wat nuut is by |
| `cad_measure` | Wysig | Meet 'n lineêre of oppervlakte-item uit die tekening se eie lyne, boë, polilyne en arserings, soos {{ui:Meet tekening}} doen ([Meet vanuit 'n tekening](topic:measure-from-a-drawing)); net op 'n blad met 'n skaal |
| `usd_export` | Uitvoer | 'n Geskaleerde blad se gemete lope, oppervlaktes en tellings as 'n 3D-nagaanmodel in USD (`.usdz`, `.usda` of `.usdc`), soos {{ui:USD-pakket (.usdz)}} in die 3D-nagaansig dit skryf ([Voer die 3D-nagaansig uit as USD](topic:usd)) |

Met **Wysig** gemerk, voeg 'n assistent items en merke by (elke oproep is een ontdoen-stap); dit kan merke wat reeds daar is, nie skuif, verander of skrap nie.

Dieselfde hoeveelhede en beraming is beskikbaar sonder om TakeoffCraft oop te maak: die CadCraft MCP-bediener maak 'n `.takeoff.json`-lêer oop in 'n vouer wat jy noem (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), en `cadcraft info Job.takeoff.json` druk hulle op die opdragreël. Dit maak ook 'n DWG of DXF oop as 'n nuwe hoeveelheidsopname op sy blaaie (geskaleer uit die tekening soos TakeoffCraft dit skaleer), tel en meet daarop met dieselfde `cad_*`-gereedskap, voeg items by en stoor die hoeveelheidsopname (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` tel vanaf die opdragreël.

## As iets nie werk nie

- **Die assistent sien geen TakeoffCraft-gereedskap nie:** kyk dat die skakelaar in hierdie venster aan is, en dat die venster in Studio oop is.
- **"benodig die uitvoertoestemming":** merk **Uitvoer** onder {{ui:Assistente}}, en vra dan weer.
- **"401"- of "token"-foute:** die token het verander (Studio is herbegin, of {{ui:Nuwe token}}). Kopieer die nuwe een na die assistent se instellings.

## Sien ook

- [Resepte vir KI-assistente](common:assistants-recipes): uitgewerkte voorbeelde, elk met die gereedskap wat dit gebruik.
