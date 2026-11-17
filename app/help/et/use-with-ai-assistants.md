---
title: TakeoffCrafti kasutamine AI-assistendiga
summary: Lase oma AI-assistendil või skriptil lugeda koguste arvestuse koguseid ja hinnangut, lisada üksusi ja märgiseid, loendada ja mõõta DWG- või DXF-joonist ning eksportida: load, ühendamine CadCraft Studio kaudu ja tegevuslogi.
keywords: ai, tehisintellekt, assistent, agent, mcp, mudeli kontekstiprotokoll, skript, automatiseerimine, kogused, hinnang, load, ühenduse katkestamine, tegevus
from: 7fa62ec6
---

## Mida õpid

Kuidas lasta AI-assistendil (või sinu kirjutatud skriptil) TakeoffCrafti kasutada ja kuidas otsustada, mida see tohib puudutada.

TakeoffCraftil **ei ole oma tehisintellekti** ja see ei saada kuhugi midagi. Assistendi toob sina: iga programm, mis räägib mudeli kontekstiprotokolli (MCP). TakeoffCraft annab sellele ainult tööriistad ja sina valid, millised.

## Lülita sisse

1. Ava {{ui:Sätted}} (rakendusriba hammasratas või {{key:Mod+,}}) ja mine vahekaardile {{ui:TakeoffCraft}}.
2. Jaotises {{ui:Assistendid}} märgi **Luba AI-assistentidel ja skriptidel TakeoffCrafti kasutada**. Kuni seda ei tee, on see välja lülitatud.
3. Vali, mida see tohib teha: **Lugemine** on algusest peale märgitud; märgi **Muutmine**, **Salvestamine** või **Eksport** ainult siis, kui neid vajad.

Load, mis jäävad väljapoole sinu märgitud lube, assistendile ei pakuta. Kui assistent ikkagi neid küsib, keeldub TakeoffCraft ja kirjutab selle tegevuslogisse. Lüliti väljalülitamine lõpetab kõik ühendused korraga; {{ui:Lähtesta TakeoffCrafti sätted}} lülitab selle samuti välja.

## Ühenda oma assistent

Assistendid ühenduvad arvutis oleva **CadCraft Studio** kaudu: Studio käivitab väikese serveri, millele pääseb ligi ainult see arvuti, ja kaitseb seda tokeniga, mille ta loob igal käivitamisel. Studios vali {{ui:Ühenda assistent}} ja kopeeri aadress ning token oma assistenti (Studio näitab täpseid sätteid, mida kleepida). Tokenit ära iial jaga.

:::note
Brauseriaken ei saa assistendi jaoks ühendust avada: brauserirakendustes ei mõju lüliti enne, kui kasutad arvutis CadCraft Studiot.
:::

## Sina jääd juhiks

- **Iga muudatus on üks tagasivõtmise samm**, mille nimi on assistendi nimega (näiteks „Assistent: …“). {{key:Mod+Z}} võtab assistendi viimase muudatuse tervikuna tagasi.
- **Näed, kui assistent on ühendatud.** Rakendusriba nupp nimetab ühendatud assistendi; klõpsa seda, et näha, mida see tohib teha, või **Katkesta ühendus**.
- **Tegevus.** {{ui:Sätted}} › {{ui:TakeoffCraft}} › {{ui:Assistendid}} › {{ui:Tegevus}} loetleb iga pöördumise: millal, millist tööriista ja kas see tehti või keelati. {{ui:Salvesta logi}} hoiab koopia alles.

## Mida assistent võib küsida

| Tööriist | Luba | Mida teeb |
|---|---|---|
| `app_info`, `sheets_list` | Lugemine | Avatud koguste arvestus, selle PDF-id ja lehed, iga lehe mõõtkava ja märgised |
| `items_list` | Lugemine | Üksused koos ühikute, määrade ja koostevalemitega |
| `takeoff_quantities` | Lugemine | Kogused üksuse või lehe kaupa; märgised lehtedel, millel mõõtkava pole, on loetletud ega lähe kunagi nulliks arvestatud |
| `takeoff_estimate` | Lugemine | Hinnastatud hinnang, nagu TakeoffCraft selle arvutab, koos kogusummadega |
| `takeoff_export` | Eksport | TakeoffCrafti enda CSV- või XLSX-eksport |
| `items_add` | Muutmine | Lisab üksused koos ühikute, määrade ja kaoga |
| `marks_add` | Muutmine | Mõõdab lehel jooksvaid pikkusi, pindu ja loendusi. Pikkusi ja pindu ainult lehel, millel on mõõtkava, mitte kunagi mõõtkavata lehel |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lugemine | Avatud DWG- või DXF-joonisel: selle lehed ja nende mõõtkavad, mida saab loendada (plokid, kihid ja tüübid, tekstid), ning täpsed loendused, nagu need teeb {{ui:CAD-loendus}} ([Loenda joonisest](topic:count-from-a-drawing)) |
| `cad_count_add` | Muutmine | Loendab joonist ja paneb iga leitud objekti juurde loendusmärgise ühe sammuga; uuesti loendades lisandub ainult uus |
| `cad_measure` | Muutmine | Mõõdab jooneid või pinna üksust joonise enda joonte, kaarte, murdjoonte ja viirutuste järgi, nagu teeb {{ui:Mõõda joonist}} ([Mõõda joonisest](topic:measure-from-a-drawing)); ainult lehel, millel on mõõtkava |
| `usd_export` | Eksport | Mõõtkavaga lehe mõõdetud jooksvad pikkused, pinnad ja loendused 3D-kontrollmudelina USD-formaadis (`.usdz`, `.usda` või `.usdc`), nagu kirjutab {{ui:USD-pakett (.usdz)}} 3D-kontrollvaates ([Ekspordi 3D-kontrollvaade USD-na](topic:usd)) |

Kui **Muutmine** on märgitud, lisab assistent üksusi ja märgiseid (iga pöördumine on üks tagasivõtmise samm). Juba olemasolevaid märgiseid ta teisaldada, muuta ega kustutada ei saa.

Samu koguseid ja hinnangut saab kätte ilma TakeoffCrafti avamata: CadCraft MCP server avab sinu nimetatud kaustas `.takeoff.json` faili (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`) ja `cadcraft info Job.takeoff.json` väljastab need käsurealt. See avab ka DWG- või DXF-faili uue koguste arvestusena selle lehtedel (mõõtkava võetakse joonisest samamoodi, nagu TakeoffCraft seda teeb), loendab ja mõõdab sellel samade `cad_*` tööriistadega, lisab üksusi ja salvestab koguste arvestuse (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` loendab käsurealt.

## Kui miski ei tööta

- **Assistent ei näe TakeoffCrafti tööriistu:** kontrolli, kas lüliti on selles aknas sisse lülitatud ja kas aken on Studios avatud.
- **„Vajab ekspordiluba“:** märgi jaotises {{ui:Assistendid}} **Eksport**, seejärel küsi uuesti.
- **Vead „401“ või „token“:** token on muutunud (Studio taaskäivitati või {{ui:Uus token}}). Kopeeri uus assistendi sätetesse.

## Vaata ka

- [Retseptid AI-assistentidele](common:assistants-recipes): töönäited, igaühel tööriistad, mida see kasutab.
