---
title: Koristi TakeoffCraft sa AI asistentom
summary: Neka tvoj AI asistent ili skripta čita količine i predračun predmera, dodaje stavke i oznake, broji i meri na DWG ili DXF crtežu i izvozi: dozvole, povezivanje preko CadCraft Studija i dnevnik aktivnosti.
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, količine, predračun, dozvole, prekid veze, aktivnost
from: 7fa62ec6
---

## Šta ćeš naučiti

Kako da pustiš AI asistenta (ili skriptu koju si sam napisao) da radi sa TakeoffCraft-om i kako da odlučiš čega sme da se dotakne.

TakeoffCraft **nema sopstvenu AI** i ništa ne šalje nigde. Ti dovodiš asistenta: bilo koji program koji govori Model Context Protocol (MCP). TakeoffCraft mu samo daje alate, a ti biraš koje.

## Uključi

1. Otvori {{ui:Podešavanja}} (zupčanik u traci aplikacije ili {{key:Mod+,}}) i idi na karticu {{ui:TakeoffCraft}}.
2. Pod {{ui:Asistenti}} označi **Dozvoli AI asistentima i skriptama da koriste TakeoffCraft**. Isključeno je dok to ne uradiš.
3. Izaberi šta sme da radi: **Čitanje** je označeno na početku; označi **Izmena**, **Čuvanje** ili **Izvoz** samo kada ti zatreba.

Alati koji nisu u dozvolama koje si označio ne nude se asistentu, a ako ipak zatraži jedan, TakeoffCraft ga odbija i to upisuje u dnevnik aktivnosti. Isključivanje prekidača odmah prekida sve veze; {{ui:Vrati TakeoffCraft podešavanja}} ga takođe isključuje.

## Poveži asistenta

Asistenti se povezuju preko **CadCraft Studija** na tvom računaru: Studio pokreće mali server koji samo ovaj računar može da dosegne, zaštićen tokenom koji pravi svaki put kad se pokrene. U Studiju izaberi {{ui:Poveži asistenta}}, pa kopiraj adresu i token u svog asistenta (Studio prikazuje tačna podešavanja za unos). Nikad ne deli token.

:::note
Kartica pregledača ne može da otvori vezu za asistenta: u aplikacijama u pregledaču prekidač nema efekta dok ne koristiš CadCraft Studio na računaru.
:::

## Ti i dalje kontrolišeš

- **Svaka izmena je jedan korak opozivanja**, obeležen imenom asistenta za nju (na primer „Asistent: …“). {{key:Mod+Z}} vraća poslednju izmenu asistenta u celini.
- **Znaš kada je neko povezan.** Dugme u traci aplikacije imenuje asistenta dok je povezan; klikni na njega da vidiš šta sme ili da ga {{ui:Prekini vezu}}.
- **Aktivnost.** {{ui:Podešavanja}} › {{ui:TakeoffCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, urađen ili odbijen. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može da zatraži

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `sheets_list` | Čitanje | Otvoreni predmer, njegove PDF datoteke i listovi, razmera i oznake svakog lista |
| `items_list` | Čitanje | Stavke sa jedinicama, cenama i formulama sklopova |
| `takeoff_quantities` | Čitanje | Količine po stavki ili po listu; oznake na listovima bez razmere se navode, nikad se ne računaju kao nula |
| `takeoff_estimate` | Čitanje | Ocenjeni predračun kako ga TakeoffCraft računa, sa zbirovima |
| `takeoff_export` | Izvoz | TakeoffCraft-ov sopstveni CSV ili XLSX izvoz |
| `items_add` | Izmena | Dodaje stavke sa jedinicama, cenama i otpadom |
| `marks_add` | Izmena | Meri dužine, površine i brojeve na listu. Dužine i površine samo na listu sa razmerom, nikad na listu bez razmere |
| `cad_sheets`, `cad_catalog`, `cad_count` | Čitanje | Na DWG ili DXF crtežu koji si otvorio: njegovi listovi i njihove razmere, šta može da se broji (blokovi, slojevi i tipovi, tekstovi) i tačni brojevi, kako ih pravi {{ui:Brojanje CAD-a}} ([Brojanje iz crteža](topic:count-from-a-drawing)) |
| `cad_count_add` | Izmena | Broji u crtežu i stavlja oznaku brojanja na svaki pronađeni objekat, u jednom koraku; ponovno brojanje dodaje samo ono što je novo |
| `cad_measure` | Izmena | Meri linijsku ili površinsku stavku iz sopstvenih linija, lukova, polilinija i šrafura crteža, kao što to radi {{ui:Izmeri crtež}} ([Merenje iz crteža](topic:measure-from-a-drawing)); samo na listu sa razmerom |
| `usd_export` | Izvoz | Izmerene dužine, površine i brojevi skaliranog lista kao model za 3D proveru u USD formatu (`.usdz`, `.usda` ili `.usdc`), kako ga {{ui:USD paket (.usdz)}} u prikazu 3D provere upisuje ([Izvoz prikaza 3D provere u USD](topic:usd)) |

Uz označeno **Izmena**, asistent dodaje stavke i oznake (svaki poziv je jedan korak opozivanja); ne može da pomeri, promeni ili izbriše oznake koje već postoje.

Iste količine i predračun dostupni su i bez otvaranja TakeoffCraft-a: CadCraft MCP server otvara `.takeoff.json` datoteku u fascikli koju navedeš (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), a `cadcraft info Job.takeoff.json` ih ispisuje u komandnoj liniji. Takođe otvara DWG ili DXF kao novi predmer na njegovim listovima (skaliran iz crteža kao što ga TakeoffCraft skalira), broji i meri na njemu istim `cad_*` alatima, dodaje stavke i čuva predmer (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` broji iz komandne linije.

## Ako nešto ne radi

- **Asistent ne vidi TakeoffCraft alate:** proveri da li je prekidač uključen u ovom prozoru i da li je prozor otvoren u Studiju.
- **„potrebna je dozvola za izvoz”:** označi **Izvoz** pod {{ui:Asistenti}}, pa pitaj ponovo.
- **Greške „401” ili „token”:** token se promenio (Studio je ponovo pokrenut ili je napravljen {{ui:Novi token}}). Kopiraj novi u podešavanja asistenta.

## Pogledaj i

- [Recepti za AI asistente](common:assistants-recipes): radni primeri, svaki sa alatima koje poziva.
