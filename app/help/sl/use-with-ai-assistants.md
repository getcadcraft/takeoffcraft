---
title: Uporaba TakeoffCraft s pomočnikom AI
summary: Naj vaš lastni pomočnik AI ali skript prebere količine in predračun predizmere, doda postavke in oznake, šteje in meri na DWG ali DXF ter izvozi: dovoljenja, povezava prek CadCraft Studio in dnevnik dejavnosti.
keywords: ai, pomočnik, agent, mcp, model context protocol, skript, avtomatizacija, količine, predračun, dovoljenja, odklop, dejavnost
from: 7fa62ec6
---

## Kaj se boste naučili

Kako lahko pomočnik AI (ali skript, ki ste ga napisali) dela s TakeoffCraft in kako določite, kaj sme spreminjati.

TakeoffCraft **nima lastne AI** in ničesar ne pošilja nikamor. Pomočnika prinesete sami: vsak program, ki podpira Model Context Protocol (MCP). TakeoffCraft mu da le orodja, izbirate pa vi, katera.

## Vklop

1. Odprite {{ui:Nastavitve}} (zobnik v vrstici programa ali {{key:Mod+,}}) in pojdite na zavihek {{ui:TakeoffCraft}}.
2. Pod {{ui:Pomočniki}} označite **Dovoli pomočnikom AI in skriptom uporabo TakeoffCraft**. Dokler tega ne storite, je izklopljeno.
3. Izberite, kaj sme početi: **Branje** je na začetku označeno; **Urejanje**, **Shrani** ali **Izvoz** označite le, kadar jih potrebujete.

Orodja, ki so izven označenih dovoljenj, pomočniku niso ponujena. Če jih vseeno zahteva, ga TakeoffCraft zavrne in to zapiše v dnevnik dejavnosti. Izklop stikala takoj prekine vse povezave; {{ui:Ponastavi nastavitve TakeoffCraft}} ga prav tako izklopi.

## Povežite pomočnika

Pomočniki se povežejo prek **CadCraft Studio** na vašem računalniku: Studio zažene majhen strežnik, do katerega lahko dostopa samo ta računalnik, zaščiten z žetonom, ki ga Studio ustvari ob vsakem zagonu. V Studiu izberite {{ui:Poveži pomočnika}} in naslov ter žeton skopirajte v svojega pomočnika (Studio prikaže točne nastavitve, ki jih prilepite). Žetona nikoli ne delite.

:::note
Zavihek brskalnika ne more odpreti povezave za pomočnika: v aplikacijah v brskalniku stikalo nima učinka, dokler ne uporabite CadCraft Studio na svojem računalniku.
:::

## Vi ostanete v nadzoru

- **Vsaka sprememba je en korak razveljavitve**, označen z imenom pomočnika za to dejanje (na primer „Pomočnik: …“). {{key:Mod+Z}} vzame zadnjo spremembo pomočnika nazaj kot celoto.
- **Vedeli boste, kdaj je povezan.** Gumb v vrstici programa med povezavo navaja pomočnika; kliknite ga, da vidite, kaj sme, ali da ga **Prekinete povezavo**.
- **Dejavnost.** {{ui:Nastavitve}} › {{ui:TakeoffCraft}} › {{ui:Pomočniki}} › {{ui:Dejavnost}} navede vsak klic: kdaj, katero orodje in ali je bil opravljen ali zavrnjen. {{ui:Shrani dnevnik}} shrani kopijo.

## Kaj lahko pomočnik zahteva

| Orodje | Dovoljenje | Kaj počne |
|---|---|---|
| `app_info`, `sheets_list` | Branje | Odprta predizmera, njeni PDF-ji in listi, merilo vsakega lista in njegove oznake |
| `items_list` | Branje | Postavke z enotami, cenami in formulami sestavov |
| `takeoff_quantities` | Branje | Količine po postavki ali po listu; oznake na listih brez merila so navedene, nikoli štete kot nič |
| `takeoff_estimate` | Branje | Cenovno ovrednoten predračun, kot ga izračuna TakeoffCraft, s skupnimi zneski |
| `takeoff_export` | Izvoz | Lastni izvoz TakeoffCraft v CSV ali XLSX |
| `items_add` | Urejanje | Doda postavke z enotami, cenami in odpadkom |
| `marks_add` | Urejanje | Na listu izmeri odseke, površine in števila. Dolžine in površine samo na listu z merilom, nikoli na listu brez merila |
| `cad_sheets`, `cad_catalog`, `cad_count` | Branje | Na odprtem DWG ali DXF: njegovi listi in njihova merila, kaj je mogoče šteti (bloki, sloji in tipi, besedila) ter natančna števila, kot jih ustvari {{ui:Štetje CAD}} ([Štetje iz risbe](topic:count-from-a-drawing)) |
| `cad_count_add` | Urejanje | Šteje v risbi in na vsak najdeni objekt postavi oznako štetja v enem koraku; ponovno štetje doda samo novo |
| `cad_measure` | Urejanje | Izmeri linearno ali ploščinsko postavko iz lastnih črt, lokov, polilinij in šrafur risbe, kot to naredi {{ui:Meri risbo}} ([Merjenje iz risbe](topic:measure-from-a-drawing)); samo na listu z merilom |
| `usd_export` | Izvoz | Izmerjene odseke, površine in števila lista z merilom kot 3D model za preverjanje v USD (`.usdz`, `.usda` ali `.usdc`), kot ga v pogledu 3D preverjanja zapiše {{ui:Paket USD (.usdz)}} ([Izvoz pogleda 3D preverjanja v USD](topic:usd)) |

Ko je označeno **Urejanje**, pomočnik dodaja postavke in oznake (vsak klic je en korak razveljavitve); oznak, ki že obstajajo, ne more premikati, spreminjati ali brisati.

Enake količine in predračun so na voljo tudi brez odprtega TakeoffCraft: strežnik CadCraft MCP odpre datoteko `.takeoff.json` v mapi, ki jo navedete (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), ukaz `cadcraft info Job.takeoff.json` pa jih izpiše v ukazni vrstici. Odpre tudi DWG ali DXF kot novo predizmero na njegovih listih (merilo prevzame iz risbe, kot ga prevzame TakeoffCraft), na njem šteje in meri z enakimi orodji `cad_*`, dodaja postavke in shrani predizmero (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` šteje iz ukazne vrstice.

## Če nekaj ne deluje

- **Pomočnik ne vidi orodij TakeoffCraft:** preverite, ali je stikalo v tem oknu vklopljeno in ali je okno odprto v Studiu.
- **„potrebno je dovoljenje za izvoz“:** označite **Izvoz** pod {{ui:Pomočniki}} in vprašajte znova.
- **Napake „401“ ali „žeton“:** žeton se je spremenil (Studio se je znova zagnal ali je bil ustvarjen {{ui:Nov žeton}}). Skopirajte novega v nastavitve pomočnika.

## Glej tudi

- [Recepti za pomočnike AI](common:assistants-recipes): delovni primeri, vsak z orodji, ki jih kliče.
