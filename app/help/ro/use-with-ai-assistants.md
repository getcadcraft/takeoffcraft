---
title: Utilizarea TakeoffCraft cu un asistent AI
summary: Lăsați asistentul AI sau scriptul propriu să citească cantitățile și devizul antemăsurătorii, să adauge articole și marcaje, să numere și să măsoare pe un DWG sau DXF și să exporte: permisiuni, conectarea prin CadCraft Studio și jurnalul de activitate.
keywords: ai, asistent, agent, mcp, model context protocol, script, automatizare, cantități, deviz, permisiuni, deconectare, activitate
from: 7fa62ec6
---

## Ce veți învăța

Cum să lăsați un asistent AI (sau un script scris de utilizator) să lucreze cu TakeoffCraft și cum să decideți ce are voie să atingă.

TakeoffCraft nu are **AI propriu** și nu trimite nimic nicăieri. Aduceți asistentul: orice program care vorbește Model Context Protocol (MCP). TakeoffCraft îi oferă doar unelte, iar alegeți care anume.

## Activarea

1. Deschideți {{ui:Setări}} (rotița din bara aplicației sau {{key:Mod+,}}) și treceți la fila {{ui:TakeoffCraft}}.
2. Sub {{ui:Asistenți}}, bifați **Permiteți asistenților AI și scripturilor să folosească TakeoffCraft**. Este dezactivat până o faceți.
3. Alegeți ce poate face: **Citire** este bifată de la început; bifați **Editare**, **Salvare** sau **Export** doar când aveți nevoie.

Uneltele din afara permisiunilor bifate nu sunt oferite asistentului, iar dacă acesta cere totuși una, TakeoffCraft o refuză și o notează în jurnalul de activitate. Oprirea comutatorului încheie imediat toate conexiunile; {{ui:Resetare setări TakeoffCraft}} îl oprește și pe acesta.

## Conectarea asistentului

Asistenții se conectează prin **CadCraft Studio** de pe calculator: Studio pornește un server mic, accesibil doar din acest calculator, protejat printr-un token pe care îl generează la fiecare pornire. În Studio, alegeți {{ui:Conectare asistent}} și copiați adresa și tokenul în asistent (Studio arată setările exacte de introdus). Nu partajați niciodată tokenul.

:::note
Un tab de browser nu poate deschide o conexiune pentru un asistent: în aplicațiile din browser comutatorul nu are efect până nu folosiți CadCraft Studio pe calculator.
:::

## Rămâneți la control

- **Fiecare modificare este un singur pas de anulare**, etichetat cu numele asistentului (de exemplu „Asistent: …”). {{key:Mod+Z}} anulează în întregime ultima modificare a asistentului.
- **Știți când este conectat unul.** Un buton din bara aplicației indică asistentul cât timp este conectat; faceți clic pe el ca să vedeți ce poate face sau ca să îl **Deconectați**.
- **Activitate.** {{ui:Setări}} › {{ui:TakeoffCraft}} › {{ui:Asistenți}} › {{ui:Activitate}} listează fiecare apel: când, ce unealtă, realizat sau refuzat. {{ui:Salvarea jurnalului}} păstrează o copie.

## Ce poate solicita un asistent

| Unealtă | Permisiune | Ce face |
|---|---|---|
| `app_info`, `sheets_list` | Citire | Antemăsurătoarea deschisă, PDF-urile și foile ei, scara și marcajele fiecărei foi |
| `items_list` | Citire | Articolele cu unitățile, prețurile și formulele de articole compuse |
| `takeoff_quantities` | Citire | Cantități pe articol sau pe foaie; marcajele de pe foile fără scară sunt listate, niciodată numărate drept zero |
| `takeoff_estimate` | Citire | Devizul cu prețuri, așa cum îl calculează TakeoffCraft, cu totalurile lui |
| `takeoff_export` | Export | Exportul CSV sau XLSX propriu al TakeoffCraft |
| `items_add` | Editare | Adaugă articole cu unitățile, prețurile și pierderile lor |
| `marks_add` | Editare | Măsoară tronsoane, arii și numărări pe o foaie. Lungimi și arii doar pe o foaie cu scară, niciodată pe una fără scară |
| `cad_sheets`, `cad_catalog`, `cad_count` | Citire | Pe un DWG sau DXF deschis: foile și scările lor, ce se poate număra (blocuri, straturi și tipuri, texte) și numărările exacte, așa cum le face {{ui:Numărare CAD}} ([Numărare dintr-un desen](topic:count-from-a-drawing)) |
| `cad_count_add` | Editare | Numără în desen și pune un marcaj de numărare pe fiecare obiect găsit, într-un singur pas; numărarea din nou adaugă doar ce este nou |
| `cad_measure` | Editare | Măsoară un articol liniar sau de arie din liniile, arcele, polilinile și hașurile desenului, așa cum face {{ui:Măsurare desen}} ([Măsurare dintr-un desen](topic:measure-from-a-drawing)); doar pe o foaie cu scară |
| `usd_export` | Export | Tronsoanele, ariile și numărările măsurate ale unei foi scalate, ca model de verificare 3D în USD (`.usdz`, `.usda` sau `.usdc`), așa cum le scrie {{ui:Pachet USD (.usdz)}} din vizualizarea 3D de verificare ([Exportul vizualizării 3D de verificare ca USD](topic:usd)) |

Cu **Editare** bifată, un asistent adaugă articole și marcaje (fiecare apel este un singur pas de anulare); nu poate muta, modifica sau șterge marcajele deja existente.

Aceleași cantități și devize sunt disponibile și fără să deschideți TakeoffCraft: serverul CadCraft MCP deschide un fișier `.takeoff.json` dintr-un dosar pe care îl numiți (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), iar `cadcraft info Job.takeoff.json` le afișează în linia de comandă. Deschide și un DWG sau DXF ca antemăsurătoare nouă pe foile sale (scalate din desen așa cum le scalează TakeoffCraft), numără și măsoară pe el cu aceleași unelte `cad_*`, adaugă articole și salvează antemăsurătoarea (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` numără din linia de comandă.

## Dacă ceva nu funcționează

- **Asistentul nu vede uneltele TakeoffCraft:** verificați că, în această fereastră, comutatorul este pornit și că fereastra este deschisă în Studio.
- **„needs the export permission”:** bifați **Export** sub {{ui:Asistenți}}, apoi cereți din nou.
- **Erori „401” sau „token”:** tokenul s-a schimbat (Studio a fost repornit sau ați apăsat {{ui:Token nou}}). Copiați noul token în setările asistentului.

## Vezi și

- [Rețete pentru asistenții AI](common:assistants-recipes): exemple lucrate, fiecare cu uneltele pe care le apelează.
