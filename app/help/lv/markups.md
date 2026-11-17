---
title: Piezīmes, mākoņi un izcēlumi
summary: Atzīmējiet jautājumus un izmaiņas lapās ar piezīmēm, revīziju mākoņiem un izcēlumiem, sekojiet katram kā atvērtam, atbildētam vai slēgtam un nosūtiet tos atzīmētajā PDF.
keywords: atzīme, atzīmes, piezīme, komentārs, jautājums, rfi, mākonis, revīzijas mākonis, izcēlums, statuss, atvērts, atbildēts, slēgts, pārskatīšana, atzīmju saraksts
from: 2b395c13
---

Atzīmes ir tam, kas jums jāatceras vai jāpajautā, kamēr veicat apjomu aprēķinu: "apstiprināt pamata tipu", revīzijas mākonis ap mainītu sienu, izcelta piezīme plānā. Tās atrodas uz lapas ar statusu, ir uzskaitītas vienuviet un tiek drukātas atzīmētajā PDF. Tās **nekad netiek skaitītas**: nav ne daudzuma, ne izmaksu.

## Pievienot vienu

Atveriet {{ui:Atzīmes}} joslā virs lapas un izvēlieties:

| Atzīme | Kā |
|---|---|
| {{ui:Piezīme}} | Noklikšķiniet, kur tai jāatrodas, ierakstiet piezīmi un izvēlieties {{ui:Pievienot}}. Tā parādās kā apaļa adata ar pirmo rindu blakus. |
| {{ui:Mākonis}} | Noklikšķiniet uz viena stūra, tad uz pretējā, un ierakstiet piezīmi (vai atstājiet to tukšu). Ap lodziņu parādās viļņains revīziju mākonis. |
| {{ui:Iezīmējums}} | Noklikšķiniet uz diviem stūriem: caurspīdīgs dzeltens lodziņš, ar piezīmi, ja vēlaties. |

{{key:Esc}} pēc pirmā stūra atceļ. Rīks paliek ieslēgts nākamajai atzīmei; {{key:V}} atgriež {{ui:Atlasīt}}.

## Statuss un rediģēšana

Noklikšķiniet uz atzīmes ar {{ui:Atlasīt}}, lai to atlasītu. Labajā panelī redzams **Atzīme**: tās veids un lapa, tās **Statuss** — Atvērts, Atbildēts vai Slēgts — un tās teksts, ko var mainīt. {{key:Delete}} (vai {{ui:Dzēst}}) to noņem; {{key:Mod+Z}} to atjauno.

Piezīmes adata ir oranža, kamēr tā ir atvērta, zila, kad atbildēta, un pelēka, kad slēgta; slēgts mākonis kļūst pelēks.

## Saraksts

**Atzīmes** labajā panelī uzskaita katru TakeoffCraft atzīmi ar tās statusu un parāda, cik vēl ir atvērtas. Atzīmējiet **Tikai atvērtās**, lai redzētu, kas vēl jāatrisina. Noklikšķiniet uz rindas, lai pārietu uz tās lapu un to atlasītu.

## Kopīgot tās

- {{ui:Atzīmētais PDF}} zīmē tās uz lapām: izcēlumus, mākoņus un adatas, katru ar kārbu, kurā lielajiem burtiem norādīts statuss (ATVĒRTS, ATBILDĒTS, SLĒGTS) un tā teksts. Lapa, kurai ir atzīmes, bet nav apjomu aprēķina atzīmju, arī tiek iekļauta.
- {{ui:XLSX}} pievieno darblapu **Atzīmes**: lapa, veids, statuss un teksts, pa vienai rindai katrai atzīmei.
- Tās tiek saglabātas `.takeoff.json` failā un [PDF failā ar apjomu aprēķinu iekšā](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
