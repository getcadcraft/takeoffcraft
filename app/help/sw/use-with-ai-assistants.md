---
title: Tumia TakeoffCraft pamoja na msaidizi wa AI
summary: Ruhusu msaidizi wako wa AI au hati yako isome kiasi na makadirio ya ukadiriaji, iongeze vipengee na alama, ihesabu na ipime kwenye DWG au DXF, na ihamishe: ruhusa, kuunganisha kupitia CadCraft Studio, na kumbukumbu ya shughuli.
keywords: ai, msaidizi, wakala, mcp, itifaki ya muktadha wa modeli, hati, otomatiki, kiasi, makadirio, ruhusa, kukata muunganisho, shughuli
from: 7fa62ec6
---

## Utajifunza nini

Jinsi ya kuruhusu msaidizi wa AI (au hati uliyoandika) afanye kazi na TakeoffCraft, na jinsi ya kuamua anachoruhusiwa kugusa.

TakeoffCraft **haina AI yake yenyewe** na haituma chochote popote. Wewe unaleta msaidizi: programu yoyote inayozungumza Model Context Protocol (MCP). TakeoffCraft inampa zana tu, na wewe ndiye unayechagua zipi.

## Washa

1. Fungua {{ui:Mipangilio}} (aikoni ya gia kwenye upau wa programu, au {{key:Mod+,}}) kisha nenda kwenye kichupo cha {{ui:TakeoffCraft}}.
2. Chini ya {{ui:Wasaidizi}}, weka tiki kwenye **Ruhusu wasaidizi wa AI na hati kutumia TakeoffCraft**. Imezimwa hadi ufanye hivyo.
3. Chagua wanachoweza kufanya: **Soma** imewekwa tiki tangu mwanzo; weka tiki kwenye **Hariri**, **Hifadhi** au **Hamisha** pale tu unapozihitaji.

Zana zilizo nje ya ruhusa ulizoweka tiki hazitolewi kwa msaidizi, na akiomba moja hata hivyo, TakeoffCraft inakataa na kuandika hilo kwenye kumbukumbu ya shughuli. Kuzima swichi kunamaliza miunganisho yote mara moja; {{ui:Weka upya mipangilio ya TakeoffCraft}} pia inaizima.

## Unganisha msaidizi wako

Wasaidizi wanaunganishwa kupitia **CadCraft Studio** kwenye kompyuta yako: Studio inaendesha seva ndogo ambayo kompyuta hii pekee inaweza kuifikia, na inalindwa na tokeni ambayo Studio inatengeneza kila inapoanza. Kwenye Studio, chagua {{ui:Unganisha msaidizi}} kisha nakili anwani na tokeni kwenye msaidizi wako (Studio inaonyesha mipangilio kamili ya kubandika). Usiwahi kushiriki tokeni.

:::note
Kichupo cha kivinjari hakiwezi kufungua muunganisho kwa msaidizi: kwenye programu za kivinjari swichi haina athari hadi utumie CadCraft Studio kwenye kompyuta yako.
:::

## Unabaki na udhibiti

- **Kila mabadiliko ni hatua moja ya kutendua**, yenye jina la msaidizi (kwa mfano "Msaidizi: …"). {{key:Mod+Z}} inarudisha nyuma mabadiliko ya mwisho ya msaidizi kwa ujumla wake.
- **Unajua wakati mmoja umeunganishwa.** Kitufe kwenye upau wa programu kinataja msaidizi wakati umeunganishwa; bofya ili kuona anachoweza kufanya, au kumtenganisha kwa **Tenganisha**.
- **Shughuli.** {{ui:Mipangilio}} › {{ui:TakeoffCraft}} › {{ui:Wasaidizi}} › {{ui:Shughuli}} inaorodhesha kila wito: lini, zana gani, na kama umekamilika au umekataliwa. {{ui:Hifadhi kumbukumbu}} inahifadhi nakala.

## Msaidizi anaweza kuomba nini

| Zana | Ruhusa | Inachofanya |
|---|---|---|
| `app_info`, `sheets_list` | Soma | Ukadiriaji uliofunguliwa, PDF zake na karatasi zake, kipimo cha kila karatasi na alama zake |
| `items_list` | Soma | Vipengee vyenye vitengo vyake, viwango na fomula za mikusanyiko |
| `takeoff_quantities` | Soma | Kiasi kwa kila kipengee au kwa kila karatasi; alama kwenye karatasi zisizo na kipimo zinaorodheshwa, kamwe hazihesabiwi kama sifuri |
| `takeoff_estimate` | Soma | Makadirio yenye bei kama TakeoffCraft inavyoyakokotoa, pamoja na jumla zake |
| `takeoff_export` | Hamisha | Hamisho la CSV au XLSX la TakeoffCraft yenyewe |
| `items_add` | Hariri | Huongeza vipengee vyenye vitengo, viwango na upotevu |
| `marks_add` | Hariri | Hupima mistari ya kukimbia, maeneo na hesabu kwenye karatasi. Urefu na maeneo kwenye karatasi yenye kipimo pekee, kamwe kwenye isiyo na kipimo |
| `cad_sheets`, `cad_catalog`, `cad_count` | Soma | Kwenye DWG au DXF uliyofungua: karatasi zake na vipimo vyake, kinachoweza kuhesabiwa (bloku, tabaka na aina, maandishi), na hesabu sahihi, kama {{ui:Hesabu ya CAD}} inavyozitengeneza ([Hesabu kutoka kwenye mchoro](topic:count-from-a-drawing)) |
| `cad_count_add` | Hariri | Huhesabu kwenye mchoro na kuweka alama ya hesabu kwenye kila kitu kilichopatikana, kwa hatua moja; kuhesabu tena kunaongeza vilivyo vipya pekee |
| `cad_measure` | Hariri | Hupima kipengee cha mstari au eneo kutoka kwenye mistari, matao, polilaini na michoro ya kujaza ya mchoro wenyewe, kama {{ui:Pima mchoro}} inavyofanya ([Pima kutoka kwenye mchoro](topic:measure-from-a-drawing)); kwenye karatasi yenye kipimo pekee |
| `usd_export` | Hamisha | Mistari ya kukimbia, maeneo na hesabu zilizopimwa za karatasi yenye kipimo kama modeli ya ukaguzi wa 3D katika USD (`.usdz`, `.usda` au `.usdc`), kama {{ui:Kifurushi cha USD (.usdz)}} kwenye mwonekano wa ukaguzi wa 3D inavyoiandika ([Hamisha mwonekano wa ukaguzi wa 3D kama USD](topic:usd)) |

Ukiwa umeweka tiki kwenye **Hariri**, msaidizi anaongeza vipengee na alama (kila wito ni hatua moja ya kutendua); hawezi kusogeza, kubadilisha wala kufuta alama ambazo tayari zipo.

Kiasi na makadirio hayo hayo yanapatikana bila kufungua TakeoffCraft: seva ya CadCraft MCP inafungua faili la `.takeoff.json` kwenye folda unayoitaja (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), na `cadcraft info Job.takeoff.json` inayaonyesha kwenye mstari wa amri. Pia inafungua DWG au DXF kama ukadiriaji mpya kwenye karatasi zake (zikipimwa kutoka kwenye mchoro kama TakeoffCraft inavyozipima), inahesabu na kupima juu yake kwa zana zile zile za `cad_*`, inaongeza vipengee na kuhifadhi ukadiriaji (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` inahesabu kutoka kwenye mstari wa amri.

## Ikiwa kitu hakifanyi kazi

- **Msaidizi haoni zana zozote za TakeoffCraft:** angalia kwamba swichi imewashwa kwenye dirisha hili, na kwamba dirisha liko wazi kwenye Studio.
- **"inahitaji ruhusa ya Hamisha":** weka tiki kwenye **Hamisha** chini ya {{ui:Wasaidizi}}, kisha uulize tena.
- **Hitilafu za "401" au "token":** tokeni imebadilika (Studio imeanzishwa upya, au {{ui:Tokeni mpya}}). Nakili mpya kwenye mipangilio ya msaidizi.

## Tazama pia

- [Mapishi kwa wasaidizi wa AI](common:assistants-recipes): mifano iliyofanyiwa kazi, kila moja ikiwa na zana inazoita.
