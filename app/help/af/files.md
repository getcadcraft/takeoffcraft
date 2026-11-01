---
title: Lêers wat TakeoffCraft oopmaak en stoor
summary: PDF's in, 'n hoeveelheidsopname-projeklêer, sigblaaie en gemerkte PDF's uit - wat elk bevat, waarheen dit gaan, en wat verander aanlyn, vanlyn en tussen blaaiers.
keywords: lêers, formate, pdf, takeoff.json, projeklêer, xlsx, csv, gemerkte pdf, aflaai, stoor, maak oop, vanlyn
from: 1bf9be65
---

## Wat dit oopmaak

| Lêer | Hoe | Notas |
|---|---|---|
| PDF (`.pdf`) | {{ui:Maak planne oop}}, {{key:Mod+O}}, of laat val op die bladsy | Verskeie tegelyk. Elke bladsy word 'n blad. |
| Hoeveelheidsopname-projek (`.takeoff.json`) | {{ui:Maak hoeveelheidsopname oop}}, of laat val op die bladsy | Jou items, skale en merke. Jy kan dit saam met sy PDF's laat val. |

Ander lêers wat op die bladsy laat val word, word oorgeslaan, en die statusbalk noem hulle.

- **PDF's met 'n wagwoord** maak nie oop nie: "(naam) is met 'n wagwoord beskerm. Maak 'n ongeskermde afskrif oop."
- **Dieselfde PDF twee keer** word een keer oopgemaak: "(naam) is alreeds oop." TakeoffCraft ken lêers aan hul inhoud, nie aan hul name nie.
- **Ingeskandeerde PDF's** maak oop en word net soos enige ander gemeet; TakeoffCraft het nie die teks in die PDF nodig nie.
- **Groot planstelle**: elke PDF word heeltemal gelees wanneer dit oopmaak (om 'n vingerafdruk te maak), so 'n baie groot lêer neem 'n oomblik. Miniatuurbeelde word een op 'n slag geteken terwyl jy rol.

## Wat dit stoor

Elke stoor is 'n aflaai. Niks word terug in jou PDF's geskryf nie.

| Jy kies | Jy kry | Wat daarin is |
|---|---|---|
| {{ui:Stoor hoeveelheidsopname}} | `(naam).takeoff.json` | Items, samestellings, tariewe, bladskale en elke merk, gekoppel aan elke PDF volgens sy inhoud. Geen PDF-bladsye nie. |
| {{ui:XLSX}} | `(naam).xlsx` | Vier werkblaaie: Estimate (met lewendige formules), By sheet, Marks, Scales. |
| {{ui:CSV}} | `(naam).csv` | Die beraming as gewone waardes, een ry per item en komponent. |
| {{ui:Gemerkte PDF}} | `(PDF-naam) (takeoff).pdf` | 'n Afskrif van elke oop PDF wat merke het, met die hoeveelheidsopname op sy bladsye geteken en 'n legende. Een lêer per PDF. |

Die naam word geneem van die eerste PDF wat jy in hierdie hoeveelheidsopname oopgemaak het. Daar is nog geen hernoem-blokkie nie: hernoem die afgelaaide lêer as jy 'n ander naam wil hê.

Sien [Voer die beraming en 'n gemerkte PDF uit](topic:export-estimate) en [Uitvoerkolomme](topic:export-columns).

## Waar afgelaaide lêers heen gaan

Jou blaaier stoor hulle waar dit elke aflaai stoor, gewoonlik die Downloads-vouer. Vind dit in {{pick:mac=Finder|windows=Lêerverkenner|linux=jou lêerbestuurder}}. As jou blaaier ingestel is om elke keer te vra waar 'n lêer gestoor moet word, vra dit.

:::chromium
{{ui:Gemerkte PDF}} met verskeie gemerkte PDF's laai verskeie lêers tegelyk af. Chrome en Edge vra dalk een keer of hierdie webwerf verskeie lêers mag aflaai. Kies Laat toe.
:::

:::safari
Safari stoor na Downloads tensy jy die aflaai-ligging in Safari-instellings onder Algemeen verander het.
:::

## Waarom die projeklêer en die PDF's apart is

Die `.takeoff.json`-lêer hou net jou hoeveelheidsopname. Dit vind sy PDF's weer deur hul inhoud ('n vingerafdruk van elke lêer), dus:

- Hernoem of skuif 'n PDF maak nie saak nie.
- 'n PDF wat deur 'n ander program verander of weer gestoor is, tel as 'n ander lêer, selfs met dieselfde naam.
- Merke op PDF's wat nie oop is nie, tel steeds in die totale.

Sien [Stoor en heropen 'n hoeveelheidsopname](topic:save-and-reopen).

## Aanlyn en vanlyn

Jou PDF's en hoeveelheidsopnames verlaat nooit jou rekenaar nie, aanlyn of vanlyn. Die verbinding maak net saak vir die laai van TakeoffCraft self.

Om sonder verbinding te werk, stoor die program eers, terwyl jy aanlyn is:

1. Kies {{ui:Stoor vir vanlyn}} in die programbalk bo.
   Die knoppie tel op, "Stoor 12 van 40", terwyl dit stoor.
2. Wag vir {{ui:Vanlyn gereed}}.

Die stoor van TakeoffCraft hou die program, hierdie hulp, die PDF-leser, die PDF-skrywer wat {{ui:Gemerkte PDF}} gebruik en die outo-tel-werker in jou blaaier, ongeveer 6 MB. Sodra dit {{ui:Vanlyn gereed}} sê, werk alles vanlyn: PDF's oopmaak, meet, {{ui:Outo-tel}}, {{ui:Stoor hoeveelheidsopname}}, {{ui:XLSX}}, {{ui:CSV}} en {{ui:Gemerkte PDF}}.

| Die knoppie sê | Betekenis |
|---|---|
| {{ui:Stoor vir vanlyn}} | Nog nie in hierdie blaaier gestoor nie. Kies dit om te stoor. |
| Stoor (n) van (m) | Stoor nou. |
| {{ui:Vanlyn gereed}} | Gestoor. Kies dit vir {{ui:Stoor weer (kry die nuutste weergawe)}} of {{ui:Verwyder die vanlyn-kopie}}. |
| {{ui:Kon nie stoor nie}} | Sommige lêers is nie afgelaai nie. Kontroleer jou verbinding en kies dit weer. |
| {{ui:Vanlyn nie beskikbaar nie}} | Hierdie blaaiervenster kan nie 'n vanlyn-afskrif hou nie (privaatvensters en sommige bestuurde rekenaars blokkeer dit). |

Meer, insluitend hoe lank 'n gestoorde afskrif in elke blaaier duur: [Werk vanlyn](common:offline).

:::offline
Jy is vanlyn. As die programbalk {{ui:Vanlyn gereed}} wys, werk alles. As nie, kan die dele wat TakeoffCraft nog nie in hierdie oortjie gelaai het nie (die PDF-skrywer vir {{ui:Gemerkte PDF}}, die outo-tel-werker) nie nou laai nie, en {{ui:Gemerkte PDF}} stop met "Die gemerkte PDF kon nie geskryf word nie". Jou hoeveelheidsopname is in albei gevalle veilig: {{ui:Stoor hoeveelheidsopname}}, {{ui:XLSX}} en {{ui:CSV}} het geen verbinding nodig nie. Moenie die oortjie herlaai voordat jy weer aanlyn is nie.
:::

:::online
Jy is aanlyn. Voor 'n terreinbesoek of 'n vlug, kies {{ui:Stoor vir vanlyn}} en wag vir {{ui:Vanlyn gereed}}.
:::

## Sigblaaie

Die XLSX hou lewende formules, so 'n sigblad-program herbereken die beraming wanneer dit die lêer oopmaak, en hou dit korrek wanneer jy 'n tarief of afval daar verander. Die werkboek is in LibreOffice Calc nagegaan, wat elke totaal tot dieselfde sent herbereken het. Dit is nog nie in Excel oopgemaak nie.

Die CSV is gewone waardes met 'n greep-volgordemerk, sodat sigblad-programme karakters soos m² korrek lees.

## Rekenaar en wolk

:::desktop
Vanaf 0.5 is die rekenaarprogram CadCraft Studio: TakeoffCraft en die ander sewe programme in een installasie. Daar is nie 'n aparte TakeoffCraft-installeerder nie.
:::

Wolkstoor is nog nie beskikbaar nie. Hou jou `.takeoff.json`-lêers saam met die werk se PDF's, en rugsteun hulle soos enige ander lêer. Sien [Waar jou lêers heen gaan](common:your-files).
