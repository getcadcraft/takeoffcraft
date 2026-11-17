---
title: Përdor TakeoffCraft me një asistent AI
summary: Lejoni asistentin tuaj AI ose skriptin të lexojë sasitë dhe preventivin e llogaritjes sasish, të shtojë artikuj dhe shenja, të numërojë dhe të masë në një DWG ose DXF, dhe të eksportojë: lejet, lidhja përmes CadCraft Studio dhe regjistri i aktivitetit.
keywords: ai, asistent, agjent, mcp, model context protocol, skript, automatizim, sasi, preventiv, leje, shkëput, aktivitet
from: 7fa62ec6
---

## Çfarë do të mësoni

Si të lejoni një asistent AI (ose një skript që keni shkruar) të punojë me TakeoffCraft, dhe si të vendosni se çfarë mund të prekë.

TakeoffCraft **nuk ka AI të vetin** dhe nuk dërgon asgjë askund. Ju sillni asistentin: çdo program që flet Model Context Protocol (MCP). TakeoffCraft i jep vetëm mjete, dhe ju zgjidhni cilat.

## Ndizeni

1. Hapni {{ui:Settings}} (ingranazhi në shiritin e aplikacionit, ose {{key:Mod+,}}) dhe shkoni te skeda {{ui:TakeoffCraft}}.
2. Te {{ui:Assistants}}, shënoni **Lejo asistentët AI dhe skriptet të përdorin TakeoffCraft**. Ajo është e fikur derisa ta bëni këtë.
3. Zgjidhni çfarë mund të bëjë: **Lexo** është e shënuar që në fillim; shënoni **Redakto**, **Ruaj** ose **Eksporto** vetëm kur keni nevojë për to.

Mjetet jashtë lejeve që keni shënuar nuk i ofrohen asistentit, dhe nëse ai kërkon ndonjë prej tyre, TakeoffCraft e refuzon dhe e shkruan në regjistrin e aktivitetit. Fikja e çelësit mbyll menjëherë çdo lidhje; {{ui:Reset TakeoffCraft settings}} e fik edhe atë.

## Lidhni asistentin tuaj

Asistentët lidhen përmes **CadCraft Studio** në kompjuterin tuaj: Studio nis një server të vogël që vetëm ky kompjuter mund ta arrijë, i mbrojtur nga një token që krijon sa herë nis. Në Studio, zgjidhni {{ui:Connect an assistant}} dhe kopjoni adresën dhe tokenin në asistentin tuaj (Studio tregon cilësimet e sakta për t'i ngjitur). Mos e ndani kurrë tokenin.

:::note
Një skedë shfletuesi nuk mund të hapë një lidhje për një asistent: te aplikacionet në shfletues çelësi nuk ka efekt derisa të përdorni CadCraft Studio në kompjuterin tuaj.
:::

## Ju mbetet kontrolli

- **Çdo ndryshim është një hap zhbërjeje**, i etiketuar me emrin e asistentit për të (për shembull "Asistent: …"). {{key:Mod+Z}} e kthen mbrapsht ndryshimin e fundit të asistentit si një tërësi.
- **Dini kur është e lidhur një.** Një buton në shiritin e aplikacionit e emërton asistentin ndërsa është i lidhur; klikoni mbi të për të parë çfarë mund të bëjë, ose për ta **Shkëputur**.
- **Aktiviteti.** {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Assistants}} › {{ui:Activity}} liston çdo thirrje: kur, cili mjet, dhe nëse u krye apo u refuzua. {{ui:Save the log}} mban një kopje.

## Çfarë mund të kërkojë një asistent

| Mjet | Leje | Çfarë bën |
|---|---|---|
| `app_info`, `sheets_list` | Lexo | Llogaritja sasish e hapur, PDF-të dhe fletët e saj, shkalla dhe shenjat e secilës fletë |
| `items_list` | Lexo | Artikujt me njësitë, tarifat dhe formulat e montimeve |
| `takeoff_quantities` | Lexo | Sasitë për artikull ose për fletë; shenjat në fletët pa shkallë listohen, kurrë nuk numërohen si zero |
| `takeoff_estimate` | Lexo | Preventivi i çmuar siç e llogarit TakeoffCraft, me totalet e tij |
| `takeoff_export` | Eksporto | Eksportimi CSV ose XLSX i vetë TakeoffCraft |
| `items_add` | Redakto | Shton artikuj me njësitë, tarifat dhe humbjen |
| `marks_add` | Redakto | Mat vargje, sipërfaqe dhe numërime në një fletë. Gjatësi dhe sipërfaqe vetëm në një fletë me shkallë, kurrë në një pa shkallë |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lexo | Në një DWG ose DXF që keni hapur: fletët dhe shkallët e tyre, çfarë mund të numërohet (blloqe, shtresa dhe lloje, tekste), dhe numërime të sakta, siç i bën {{ui:CAD count}} ([Numëro nga një vizatim](topic:count-from-a-drawing)) |
| `cad_count_add` | Redakto | Numëron në vizatim dhe vendos një shenjë numërimi në çdo objekt të gjetur, në një hap; numërimi përsëri shton vetëm ato që janë të reja |
| `cad_measure` | Redakto | Mat një artikull linear ose sipërfaqësor nga vijat, harqet, polivijat dhe vijëzimet e vetë vizatimit, siç bën {{ui:Measure drawing}} ([Mat nga një vizatim](topic:measure-from-a-drawing)); vetëm në një fletë me shkallë |
| `usd_export` | Eksporto | Vargjet, sipërfaqet dhe numërimet e matura të një fletë me shkallë si model kontrolli 3D në USD (`.usdz`, `.usda` ose `.usdc`), siç e shkruan {{ui:USD package (.usdz)}} te pamja 3D e kontrollit ([Eksporto pamjen 3D të kontrollit si USD](topic:usd)) |

Me **Redakto** të shënuar, një asistent shton artikuj dhe shenja (çdo thirrje është një hap zhbërjeje); ai nuk mund të zhvendosë, ndryshojë ose fshijë shenjat që janë tashmë atje.

Të njëjtat sasi dhe preventiv janë të disponueshme pa hapur TakeoffCraft: serveri CadCraft MCP hap një skedar `.takeoff.json` në një dosje që emëroni (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), dhe `cadcraft info Job.takeoff.json` i shfaq në rreshtin e komandave. Ai hap gjithashtu një DWG ose DXF si llogaritje sasish të re në fletët e tij (me shkallën nga vizatimi, siç i shkallëzon TakeoffCraft), numëron dhe mat mbi të me të njëjtët mjete `cad_*`, shton artikuj dhe e ruan llogaritjen (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` numëron nga rreshti i komandave.

## Nëse diçka nuk funksionon

- **Asistenti nuk sheh asnjë mjet të TakeoffCraft:** kontrolloni që çelësi është i ndezur në këtë dritare, dhe që dritarja është e hapur në Studio.
- **"duhet leja e eksportit":** shënoni **Eksporto** te {{ui:Assistants}}, pastaj pyesni përsëri.
- **Gabime "401" ose "token":** tokeni ka ndryshuar (Studio u rinis, ose {{ui:New token}}). Kopjoni tokenin e ri te cilësimet e asistentit.

## Shih edhe

- [Receta për asistentët AI](common:assistants-recipes): shembuj të punuar, secili me mjetet që thërret.
