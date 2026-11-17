---
title: Isticmaal TakeoffCraft kaaliye AI ah
summary: Ogolow kaaliyahaaga AI ama qoraalkaaga inuu akhriyo qadarrada iyo qiyaasha xisaabinta, uuna ku daro walxaha iyo calaamadaha, tiriyo oo cabbiro DWG ama DXF, uuna dhoofiyo: ogolaansho, ku xidhid CadCraft Studio, iyo diiwaanka waxqabadka.
keywords: ai, kaaliye, wakiil, mcp, model context protocol, qoraal, otomaatig, qadarro, qiyaas, ogolaansho, ka jar, waxqabad
from: 7fa62ec6
---

## Waxa aad baran doontid

Sida loo ogolaado kaaliye AI (ama qoraal aad qortay) inuu la shaqeeyo TakeoffCraft, iyo sida loo go'aamiyo waxa uu samayn karo.

TakeoffCraft **ma lahan AI gaar ah** mana dirto wax meel. Adigu keenta kaaliyaha: barnaamij kasta oo ku hadla Model Context Protocol (MCP). TakeoffCraft wuxuu siinayaa qalab kaliya, adiguna waad doortaa.

## Bilow

1. Fur {{ui:Settings}} (giraanta qalabka sare, ama {{key:Mod+,}}) oo tag tabka {{ui:TakeoffCraft}}.
2. Hoosta {{ui:Assistants}}, calaamadi **Ogolow kaaliyayaasha AI iyo qoraallada inay isticmaalaan TakeoffCraft**. Waa la demiyay ilaa aad samayso.
3. Dooro waxa ay sameyn karto: **Akhri** waa la calaamadiyay bilowga; calaamadi **Tafatir**, **Kaydi** ama **Dhoofin** kaliya marka aad u baahan tahay.

Qalabka aan ku calaamadin awoodda looma soo bandhigo kaaliyaha. Haddii uu si kastaba u weydiisto, TakeoffCraft wuu diidaa oo wuxuu ku qoraa diiwaanka waxqabadka. Demidda badhanka waxay joojisaa dhammaan xidhiidhyada hal mar; {{ui:Dib u deji dejinta TakeoffCraft}} wuu demaa sidoo kale.

## Ku xidh kaaliyahaaga

Kaaliyayaashu waxay ku xidhmaan **CadCraft Studio** kombiyuutarkaaga: Studio wuxuu socodsiiyaa server yar oo kaliya kombiyuutarkan gaari karo, oo ilaalinaya token uu sameeyo mar kasta oo bilowdo. Studio dhexdiisa, dooro {{ui:Ku xidh kaaliye}} oo koobiyee cinwaanka iyo tokanka ku dhaji kaaliyahaaga (Studio wuxuu tusayaa dejinta saxda ah ee lagu dhejiyo). Ha wadaagin tokanka.

:::note
Tab browser ma furi karo xidhiid kaaliye: barnaamijyada browserka ee switch-ku ma saameeyo ilaa aad isticmaasho CadCraft Studio kombiyuutarkaaga.
:::

## Adigu waad maamushaa

- **Isbeddel kasta waa hal tallaabo oo dib loo celin karo**, oo lagu magacaabay magaca kaaliyaha (tusaale "Kaaliye: …"). {{key:Mod+Z}} wuxuu dib u qaadaa isbeddelka ugu dambeeya ee kaaliyaha oo dhan.
- **Waad ogaataa marka mid la xidhay.** Badhanka qalabka sare wuxuu magacaabaa kaaliyaha inta uu xidhan yahay; riix si aad u aragto waxa uu samayn karo, ama si aad **uga jartid**.
- **Waxqabadka.** {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Assistants}} › {{ui:Activity}} wuxuu liis gareeyaa wac kasta: goorta, qalabka, dhammaatay ama la diiday. {{ui:Save the log}} wuxuu hayaa nuqul.

## Waxa kaaliye uu weydiisan karo

| Qalab | Ogolaansho | Waxa uu sameeyo |
|---|---|---|
| `app_info`, `sheets_list` | Akhri | Xisaabinta furan, PDF-yadeeda iyo xaashiyadeeda, miisaan iyo calaamadaha xaashi kasta |
| `items_list` | Akhri | Walxaha unit-kooda, qiimaha iyo qaacidooyinka isku-dhisyada |
| `takeoff_quantities` | Akhri | Qadarka shay kasta ama xaashi kasta; calaamadaha xaashiyada aan miisaan lahayn waa la liistaa, lama tiro sida eber |
| `takeoff_estimate` | Akhri | Qiyaasta qiimaysan sida TakeoffCraft u xisaabiyo, oo wadarteeda |
| `takeoff_export` | Dhoofin | Dhoofinta CSV ama XLSX ee TakeoffCraft laftiisa |
| `items_add` | Tafatir | Ku daraa walxaha unit-kooda, qiimaha iyo qashinka |
| `marks_add` | Tafatir | Cabbiraa safafka, aagga iyo tirada xaashi. Dherer iyo aag kaliya xaashi miisaan leh, marna xaashi aan miisaan lahayn |
| `cad_sheets`, `cad_catalog`, `cad_count` | Akhri | DWG ama DXF aad furtay: xaashiyadeeda iyo miisaankooda, waxa la tiri karo (bloogyo, lakabyo iyo noocyo, qoraallo), iyo tiro saxda ah, sida {{ui:Tirinta CAD}} u samayso ([Tirinta naqshadda](topic:count-from-a-drawing)) |
| `cad_count_add` | Tafatir | Wuxuu tiraa naqshadda oo calaamad tiro ku dhejiyaa shay kasta oo la helay, hal tallaabo; mar kale tirinta wuxuu ku daraa kaliya waxa cusub |
| `cad_measure` | Tafatir | Wuxuu cabbiraa walax dherer ama aag ah xariiqyada, qaansooyinka, polilaynnada iyo hatch-yada naqshadda, sida {{ui:Naqshadda ka cabbir}} u samayso ([Cabbirka naqshadda](topic:measure-from-a-drawing)); kaliya xaashi miisaan leh |
| `usd_export` | Dhoofin | Safafka, aagga iyo tirada xaashi miisaan leh oo la cabbiray, sida moodel hubin 3D ah oo USD ah (`.usdz`, `.usda` ama `.usdc`), sida {{ui:Xidhmada USD (.usdz)}} muuqaalka hubinta 3D u qoro ([Dhoofi muuqaalka hubinta 3D ee USD](topic:usd)) |

Marka **Tafatir** la calaamadiyo, kaaliye wuxuu ku daraa walxaha iyo calaamadaha (wac kasta hal tallaabo oo dib loo celin karo). Ma dhaqdhaqaajin, ma beddelin, mana tirtiri karo calaamadaha horeba u jiray.

Isla tiro iyo qiyaas waxaa laga heli karaa adigoon furin TakeoffCraft: CadCraft MCP server wuxuu furaa fayl `.takeoff.json` folder aad magacowday (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), `cadcraft info Job.takeoff.json` wuxuu ku daabacaa qoraal amarka. Wuxuu sidoo kale furaa DWG ama DXF oo xisaabin cusub ah oo xaashiyadeeda ku jira (miisaankooda laga qaatay naqshadda sida TakeoffCraft u qaato), tiraa oo cabbiraa isagoo isticmaalaya qalabka `cad_*` isku mid, ku daraa walxaha, oo kaydiyaa xisaabinta (`takeoff_save`). `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` wuxuu tiraa amarka qoraalka.

## Haddii wax aan shaqeynin

- **Kaaliyuhu ma arko qalabka TakeoffCraft:** hubi in badhanku uu daaran yahay daaqadan, iyo in daaqaddu ay furan tahay Studio.
- **"needs the export permission":** calaamadi **Dhoofin** hoosta {{ui:Assistants}}, ka dibna weydii mar kale.
- **Khaladaadka "401" ama "token":** tokanku wuu is beddelay (Studio ayaa dib u bilowday, ama {{ui:Tokan cusub}}). Koobiyee tokanka cusub dejinta kaaliyaha.

## Eeg sidoo kale

- [Tusaalooyinka kaaliyayaasha AI](common:assistants-recipes): tusaalooyin shaqo, mid kasta oo leh qalabka uu isticmaalo.
