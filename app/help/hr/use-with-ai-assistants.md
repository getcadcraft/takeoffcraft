---
title: Korištenje TakeoffCraft s AI pomoćnikom
summary: Neka vaš vlastiti AI pomoćnik ili skripta čita količine i predračun predmjera, dodaje stavke i oznake, broji i mjeri na DWG ili DXF datoteci te izvozi: dopuštenja, povezivanje putem CadCraft Studija i dnevnik aktivnosti.
keywords: ai, pomoćnik, agent, mcp, model context protocol, skripta, automatizacija, količine, predračun, dopuštenja, prekid veze, aktivnost
from: 7fa62ec6
---

## Što ćete naučiti

Kako pustiti AI pomoćnika (ili skriptu koju ste napisali) da radi s TakeoffCraftom i kako odlučiti čega smije dotaknuti.

TakeoffCraft **nema vlastitu AI** i ništa nigdje ne šalje. Vi donosite pomoćnika: bilo koji program koji govori Model Context Protocol (MCP). TakeoffCraft mu samo daje alate, a vi birate koje.

## Uključivanje

1. Otvorite {{ui:Postavke}} (zupčanik u traci aplikacije ili {{key:Mod+,}}) i idite na karticu {{ui:TakeoffCraft}}.
2. Pod {{ui:Pomoćnici}} označite **Dopusti AI pomoćnicima i skriptama da koriste TakeoffCraft**. Dok to ne učinite, isključeno je.
3. Odredite što smije raditi: **Čitanje** je označeno na početku; označite **Uređivanje**, **Spremanje** ili **Izvoz** samo kad ih trebate.

Alati izvan dopuštenja koja ste označili ne nude se pomoćniku, a ako ih ipak zatraži, TakeoffCraft ih odbija i zapisuje u dnevnik aktivnosti. Isključivanje prekidača prekida sve veze odjednom; {{ui:Vrati zadano postavke za TakeoffCraft}} također ga isključuje.

## Povežite pomoćnika

Pomoćnici se povezuju putem **CadCraft Studija** na vašem računalu: Studio pokreće mali poslužitelj kojem može pristupiti samo ovo računalo, a zaštićen je tokenom koji izrađuje pri svakom pokretanju. U Studiju odaberite {{ui:Poveži pomoćnika}} i kopirajte adresu i token u postavke svojeg pomoćnika (Studio prikazuje točne postavke koje treba zalijepiti). Token nikada ne dijelite.

:::note
Kartica preglednika ne može otvoriti vezu za pomoćnika: u aplikacijama u pregledniku prekidač nema učinka dok ne upotrijebite CadCraft Studio na svom računalu.
:::

## Vi zadržavate kontrolu

- **Svaka promjena je jedan korak poništavanja**, označen imenom koje pomoćnik za nju koristi (npr. „Pomoćnik: …“). {{key:Mod+Z}} poništava posljednju promjenu pomoćnika u cijelosti.
- **Znate kada je povezan.** Gumb u traci aplikacije imenuje pomoćnika dok je povezan; kliknite ga da vidite što smije ili da prekinete vezu.
- **Aktivnost.** {{ui:Postavke}} › {{ui:TakeoffCraft}} › {{ui:Pomoćnici}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, izvršen ili odbijen. {{ui:Spremi zapisnik}} čuva kopiju.

## Što pomoćnik može zatražiti

| Alat | Dopuštenje | Što radi |
|---|---|---|
| `app_info`, `sheets_list` | Čitanje | Otvoreni predmjer, njegovi PDF-ovi i listovi, mjerilo i oznake svakog lista |
| `items_list` | Čitanje | Stavke s njihovim jedinicama, cijenama i formulama sklopova |
| `takeoff_quantities` | Čitanje | Količine po stavci ili po listu; oznake na listovima bez mjerila navode se, nikad se ne računaju kao nula |
| `takeoff_estimate` | Čitanje | Cijenjeni predračun kako ga računa TakeoffCraft, s ukupnim iznosima |
| `takeoff_export` | Izvoz | TakeoffCraftov vlastiti CSV ili XLSX izvoz |
| `items_add` | Uređivanje | Dodaje stavke s njihovim jedinicama, cijenama i gubitkom |
| `marks_add` | Uređivanje | Mjeri dionice, površine i brojanja na listu. Duljine i površine samo na listu s mjerilom, nikad na listu bez mjerila |
| `cad_sheets`, `cad_catalog`, `cad_count` | Čitanje | Na DWG ili DXF datoteci koju ste otvorili: njezini listovi i njihova mjerila, što se može brojati (blokovi, slojevi i tipovi, tekstovi) i točna brojanja, kako ih izrađuje {{ui:CAD brojanje}} ([Brojanje iz crteža](topic:count-from-a-drawing)) |
| `cad_count_add` | Uređivanje | Broji u crtežu i stavlja oznaku brojanja na svaki pronađeni objekt, u jednom koraku; ponovno brojanje dodaje samo ono što je novo |
| `cad_measure` | Uređivanje | Mjeri stavku linearne ili površinske vrste iz vlastitih linija, lukova, polilinija i šrafura crteža, kao što radi {{ui:Mjeri crtež}} ([Mjerenje iz crteža](topic:measure-from-a-drawing)); samo na listu s mjerilom |
| `usd_export` | Izvoz | Izmjerene dionice, površine i brojanja skaliranog lista kao 3D model za provjeru u USD formatu (`.usdz`, `.usda` ili `.usdc`), kao što ga u prikazu 3D provjere piše {{ui:USD paket (.usdz)}} ([Izvoz 3D prikaza za provjeru kao USD](topic:usd)) |

Uz označeno **Uređivanje**, pomoćnik dodaje stavke i oznake (svaki poziv je jedan korak poništavanja); ne može pomicati, mijenjati niti brisati oznake koje već postoje.

Iste količine i predračun dostupni su i bez otvaranja aplikacije TakeoffCraft: CadCraft MCP poslužitelj otvara datoteku `.takeoff.json` u mapi koju navedete (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), a `cadcraft info Job.takeoff.json` ispisuje ih u naredbenom retku. Također otvara DWG ili DXF kao novi predmjer na njegovim listovima (skaliran iz crteža kako ga TakeoffCraft skalira), broji i mjeri na njemu istim `cad_*` alatima, dodaje stavke i sprema predmjer (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` broji iz naredbenog retka.

## Ako nešto ne radi

- **Pomoćnik ne vidi alate TakeoffCrafta:** provjerite je li prekidač uključen u ovom prozoru i je li prozor otvoren u Studiju.
- **„potrebno je dopuštenje za izvoz“:** označite **Izvoz** pod {{ui:Pomoćnici}}, zatim ponovno zatražite.
- **Greške „401“ ili „token“:** token se promijenio (Studio je ponovno pokrenut ili ste odabrali {{ui:Novi token}}). Novi token kopirajte u postavke pomoćnika.

## Pogledajte i

- [Recepti za AI pomoćnike](common:assistants-recipes): primjeri koji rade, svaki s alatima koje poziva.
