---
title: Nota TakeoffCraft með gervigreindaraðstoðarmanni
summary: Leyfðu þínum eigin gervigreindaraðstoðarmanni eða handriti að lesa magn og kostnaðaráætlun magntökunnar, bæta við liðum og merkjum, telja og mæla á DWG eða DXF og flytja út: heimildir, tenging í gegnum CadCraft Studio og atburðaskráin.
keywords: gervigreind, aðstoðarmaður, umboðsmaður, mcp, samskiptaregla fyrir samhengi líkans, handrit, sjálfvirkni, magn, kostnaðaráætlun, heimildir, aftengja, virkni
from: 7fa62ec6
---

## Hvað þú lærir

Hvernig þú leyfir gervigreindaraðstoðarmanni (eða handriti sem þú skrifaðir) að vinna með TakeoffCraft, og hvernig þú ákveður hvað hann má snerta.

TakeoffCraft hefur **enga eigin gervigreind** og sendir ekki neitt út. Þú kemur með aðstoðarmanninn: hvaða forrit sem talar Model Context Protocol (MCP). TakeoffCraft gefur honum aðeins verkfæri, og þú velur hver þau eru.

## Kveiktu á þessu

1. Opnaðu {{ui:Stillingar}} (tannhjólið í forritastikunni, eða {{key:Mod+,}}) og farðu á flipann {{ui:TakeoffCraft}}.
2. Undir {{ui:Aðstoðarmenn}} skaltu haka við **Leyfa gervigreindaraðstoðarmönnum og handritum að nota TakeoffCraft**. Rofinn er slökktur þar til þú gerir það.
3. Veldu hvað hann má gera: **Lesa** er hakað í byrjun; hakaðu við **Breyta**, **Vista** eða **Flytja út** aðeins þegar þú þarft á þeim að halda.

Verkfæri utan þeirra heimilda sem þú hakaðir við eru ekki boðin aðstoðarmanninum, og ef hann biður um eitt þeirra samt hafnar TakeoffCraft því og skrifar það í atburðaskrána. Að slökkva á rofanum lokar öllum tengingum í einu; {{ui:Endurstilla TakeoffCraft stillingar}} slekkur á honum líka.

## Tengdu aðstoðarmanninn

Aðstoðarmenn tengjast í gegnum **CadCraft Studio** á tölvunni þinni: Studio keyrir litlan netþjón sem aðeins þessi tölva nær til, varinn með auðkenni (token) sem hann býr til í hvert skipti sem hann ræsist. Í Studio skaltu velja {{ui:Tengja aðstoðarmann}} og afrita vistfangið og auðkennið yfir í aðstoðarmanninn (Studio sýnir nákvæmlega hvaða stillingar á að líma). Deildu aldrei auðkenninu.

:::note
Vafraflipi getur ekki opnað tengingu fyrir aðstoðarmann: í vafraforritunum hefur rofinn engin áhrif fyrr en þú notar CadCraft Studio á tölvunni þinni.
:::

## Þú hefur stjórnina

- **Sérhver breyting er eitt afturköllunarskref**, merkt með heiti aðstoðarmannsins fyrir hana (til dæmis „Aðstoðarmaður: …"). {{key:Mod+Z}} tekur síðustu breytingu aðstoðarmannsins til baka í heild.
- **Þú veist þegar einn er tengdur.** Hnappur í forritastikunni nefnir aðstoðarmanninn meðan hann er tengdur; smelltu á hann til að sjá hvað hann má gera, eða til að **Aftengja** hann.
- **Virkni.** {{ui:Stillingar}} › {{ui:TakeoffCraft}} › {{ui:Aðstoðarmenn}} › {{ui:Virkni}} sýnir hvert kall: hvenær, hvaða verkfæri, og hvort það var framkvæmt eða hafnað. {{ui:Vista atburðaskrána}} geymir afrit.

## Hvað aðstoðarmaður getur beðið um

| Verkfæri | Heimild | Hvað það gerir |
|---|---|---|
| `app_info`, `sheets_list` | Lesa | Magntakan sem er opin, PDF-skjölin og blöðin, mælikvarði og merki hvers blaðs |
| `items_list` | Lesa | Liðirnir með einingum, töxtum og samsetningarformúlum |
| `takeoff_quantities` | Lesa | Magn eftir lið eða eftir blaði; merki á blöðum án mælikvarða eru skráð, aldrei talin sem núll |
| `takeoff_estimate` | Lesa | Verðlagða kostnaðaráætlunin eins og TakeoffCraft reiknar hana, með samtölum |
| `takeoff_export` | Flytja út | CSV- eða XLSX-útflutningur TakeoffCraft sjálfs |
| `items_add` | Breyta | Bætir við liðum með einingum, töxtum og sóun |
| `marks_add` | Breyta | Mælir hlaup, flatarmál og talningar á blaði. Lengdir og flatarmál aðeins á blaði með mælikvarða, aldrei á blaði án hans |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lesa | Á DWG- eða DXF-skrá sem þú opnaðir: blöð hennar og mælikvarðar, hvað má telja (blokkir, lög og gerðir, textar) og nákvæmar talningar, eins og {{ui:Telja úr teikningu}} gerir ([Telja úr teikningu](topic:count-from-a-drawing)) |
| `cad_count_add` | Breyta | Telur í teikningunni og setur talningarmerki á hvern hlut sem finnst, í einu skrefi; ef talið er aftur bætast aðeins við nýir hlutir |
| `cad_measure` | Breyta | Mælir lið sem er línulegur eða flatarmál út frá línum, bogum, fjöllínum og skyggingum teikningarinnar sjálfrar, eins og {{ui:Mæla teikningu}} gerir ([Mæla úr teikningu](topic:measure-from-a-drawing)); aðeins á blaði með mælikvarða |
| `usd_export` | Flytja út | Mældir hlaup, flatarmál og talningar á blaði með mælikvarða sem þrívíddarathugunarlíkan í USD (`.usdz`, `.usda` eða `.usdc`), eins og {{ui:USD pakki (.usdz)}} í þrívíddarathugunarsýninni skrifar það ([Flytja þrívíddarathugunarsýn út sem USD](topic:usd)) |

Með **Breyta** hakað bætir aðstoðarmaður við liðum og merkjum (hvert kall er eitt afturköllunarskref); hann getur ekki fært, breytt né eytt merkjum sem þegar eru til.

Sömu magntölur og kostnaðaráætlun eru aðgengilegar án þess að opna TakeoffCraft: CadCraft MCP-netþjónninn opnar `.takeoff.json`-skrá í möppu sem þú nefnir (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), og `cadcraft info Job.takeoff.json` prentar þær í skipanalínunni. Hann opnar líka DWG- eða DXF-skrá sem nýja magntöku á blöðum hennar (kvarðaðri út frá teikningunni eins og TakeoffCraft kvarðar þau), telur og mælir á henni með sömu `cad_*`-verkfærum, bætir við liðum og vistar magntökuna (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` telur úr skipanalínunni.

## Ef eitthvað virkar ekki

- **Aðstoðarmaðurinn sér engin TakeoffCraft-verkfæri:** athugaðu að rofinn sé kveiktur í þessum glugga og að glugginn sé opinn í Studio.
- **„Þarf útflutningsheimild":** hakaðu við **Flytja út** undir {{ui:Aðstoðarmenn}} og spurðu aftur.
- **Villur „401" eða „token":** auðkennið breyttist (Studio var endurræst, eða {{ui:Nýtt auðkenni}}). Afritaðu nýja auðkennið í stillingar aðstoðarmannsins.

## Sjá einnig

- [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes): unnin dæmi, hvert með þeim verkfærum sem það kallar á.
