---
title: Koristi TakeoffCraft sa AI asistentom
summary: Dozvolite svom AI asistentu ili skripti da čita količine i predračun predmjera, dodaje stavke i oznake, broji i mjeri na DWG ili DXF, te izvozi: dozvole, povezivanje kroz CadCraft Studio i dnevnik aktivnosti.
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, količine, predračun, dozvole, prekid veze, aktivnost
from: 7fa62ec6
---

## Šta ćete naučiti

Kako dozvoliti AI asistentu (ili skripti koju ste napisali) da radi sa TakeoffCraft-om, i kako odlučiti čega sme da se dotakne.

TakeoffCraft **nema vlastitu AI** i ništa ne šalje nigdje. Vi dovodite asistenta: bilo koji program koji govori Model Context Protocol (MCP). TakeoffCraft mu samo daje alate, a vi birate koje.

## Uključite ga

1. Otvorite {{ui:Postavke}} (zupčanik u traci aplikacije, ili {{key:Mod+,}}) i idite na karticu {{ui:TakeoffCraft}}.
2. Pod {{ui:Asistenti}} označite **Dozvoli AI asistentima i skriptama da koriste TakeoffCraft**. Isključeno je dok to ne uradite.
3. Odaberite šta smije da radi: **Čitanje** je označeno na početku; označite **Uređivanje**, **Spasi** ili **Izvoz** samo kad su vam potrebni.

Alati izvan dozvola koje ste označili ne nude se asistentu, a ako ga ipak zatraži, TakeoffCraft ga odbija i zapisuje u dnevnik aktivnosti. Isključivanjem prekidača odmah se prekidaju sve veze; {{ui:Vrati TakeoffCraft postavke}} ga takođe isključuje.

## Povežite asistenta

Asistenti se povezuju kroz **CadCraft Studio** na vašem računaru: Studio pokreće mali server kojem može pristupiti samo ovaj računar, zaštićen tokenom koji pravi svaki put kad se pokrene. U Studiju izaberite {{ui:Poveži asistenta}} i kopirajte adresu i token u svog asistenta (Studio prikazuje tačne postavke koje treba zalijepiti). Nikad ne dijelite token.

:::note
Pregledač ne može otvoriti vezu za asistenta: u aplikacijama u pregledaču prekidač nema efekta dok ne koristite CadCraft Studio na svom računaru.
:::

## Vi ostajete na čelu

- **Svaka promjena je jedan korak poništavanja**, označen imenom asistenta (na primjer „Asistent: …”). {{key:Mod+Z}} vraća cijelu posljednju promjenu asistenta.
- **Znate kad je asistent povezan.** Dugme u traci aplikacije imenuje asistenta dok je povezan; kliknite ga da vidite šta smije, ili da ga {{ui:Prekini vezu}}.
- **Aktivnost.** {{ui:Postavke}} › {{ui:TakeoffCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, urađeno ili odbijeno. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može zatražiti

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `sheets_list` | Čitanje | Otvoreni predmjer, njegovi PDF-ovi i listovi, razmjera i oznake svakog lista |
| `items_list` | Čitanje | Stavke sa jedinicama, cijenama i formulama sklopova |
| `takeoff_quantities` | Čitanje | Količine po stavci ili po listu; oznake na listovima bez razmjere se navode, nikad se ne broje kao nula |
| `takeoff_estimate` | Čitanje | Predračun s cijenama kako ga TakeoffCraft računa, sa ukupnim iznosima |
| `takeoff_export` | Izvoz | TakeoffCraft-ov vlastiti CSV ili XLSX izvoz |
| `items_add` | Uređivanje | Dodaje stavke sa jedinicama, cijenama i otpadom |
| `marks_add` | Uređivanje | Mjeri linijske dionice, površine i brojanja na listu. Dužine i površine samo na listu sa razmjerom, nikad na listu bez razmjere |
| `cad_sheets`, `cad_catalog`, `cad_count` | Čitanje | Na DWG ili DXF koji ste otvorili: njegovi listovi i razmjere, šta se može brojati (blokovi, slojevi i tipovi, tekstovi) i tačni brojevi, onako kako ih pravi {{ui:Brojanje CAD-a}} ([Brojanje iz crteža](topic:count-from-a-drawing)) |
| `cad_count_add` | Uređivanje | Broji u crtežu i stavlja oznaku brojanja na svaki pronađeni objekat, u jednom koraku; ponovno brojanje dodaje samo ono što je novo |
| `cad_measure` | Uređivanje | Mjeri linearnu ili površinsku stavku iz vlastitih linija, lukova, polilinija i šrafura crteža, kao što to radi {{ui:Izmjeri crtež}} ([Mjerenje iz crteža](topic:measure-from-a-drawing)); samo na listu sa razmjerom |
| `usd_export` | Izvoz | Izmjerene linijske dionice, površine i brojanja razmjernog lista kao 3D model za provjeru u USD formatu (`.usdz`, `.usda` ili `.usdc`), kako ga zapisuje {{ui:USD paket (.usdz)}} u prikazu 3D provjere ([Izvoz prikaza 3D provjere kao USD](topic:usd)) |

Sa označenim **Uređivanje**, asistent dodaje stavke i oznake (svaki poziv je jedan korak poništavanja); ne može pomjerati, mijenjati ni brisati oznake koje već postoje.

Iste količine i predračun dostupni su i bez otvaranja TakeoffCraft-a: CadCraft MCP server otvara datoteku `.takeoff.json` u fascikli koju navedete (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), a `cadcraft info Job.takeoff.json` ispisuje ih u komandnoj liniji. Također može otvoriti DWG ili DXF kao novi predmjer na njegovim listovima (razmjere se preuzimaju iz crteža kao što ih TakeoffCraft preuzima), brojati i mjeriti na njemu istim `cad_*` alatima, dodavati stavke i čuvati predmjer (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` broji iz komandne linije.

## Ako nešto ne radi

- **Asistent ne vidi TakeoffCraft alate:** provjerite je li prekidač uključen u ovom prozoru i je li prozor otvoren u Studiju.
- **„treba dozvola za izvoz”:** označite **Izvoz** pod {{ui:Asistenti}}, pa ponovo zatražite.
- **Greške „401” ili „token”:** token se promijenio (Studio je ponovo pokrenut ili je izabrano {{ui:Novi token}}). Kopirajte novi token u postavke asistenta.

## Pogledajte i

- [Recepti za AI asistente](common:assistants-recipes): primjeri koji rade, svaki sa alatima koje poziva.
