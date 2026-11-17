---
title: Sebenzisa i-TakeoffCraft nomsizi we-AI
summary: Vumela umsizi wakho we-AI noma uhlelo lwakho lufunde izinani nesilinganiso sokubalwa, lungeze izinto nezimaki, lubale futhi lulinganise kwi-DWG noma i-DXF, futhi lukhiphe: izimvume, ukuxhuma nge-CadCraft Studio, nelogi yomsebenzi.
keywords: ai, umsizi, ijenti, mcp, model context protocol, iskripthi, ukuzenzakalela, izinani, isilinganiso, izimvume, ukunqamula, umsebenzi
from: 7fa62ec6
---

## Okuzofunda

Indlela yokuvumela umsizi we-AI (noma iskripthi osibhalile) asebenze ne-TakeoffCraft, nokuthi unquume kanjani okungathintwa yiwo.

I-TakeoffCraft **ayinayo i-AI yayo** futhi ayithumeli lutho noma kuphi. Wena uletha umsizi: noma yiluphi uhlelo oluxoxa nge-Model Context Protocol (MCP). I-TakeoffCraft inikeza amathuluzi kuphela, wena ukhetha awathandayo.

## Yivule

1. Vula {{ui:Settings}} (igiya esitolibheni esiphezulu, noma {{key:Mod+,}}) bese uya kwithebhu ye-{{ui:TakeoffCraft}}.
2. Ngaphansi kwe-{{ui:Assistants}}, thika **Vumela abasizi be-AI nezikripthi basebenzise i-TakeoffCraft**. Icishiwe kuze wenze lokho.
3. Khetha okungenziwa yiwo: **Read** uthikiwe ekuqaleni; thika **Edit**, **Save** noma **Export** kuphela uma uwadinga.

Amathuluzi angaphandle kwezimvume ozithikile awanikezwa umsizi, futhi uma ecela enye noma kunjalo, i-TakeoffCraft iyayenqaba ibhale lokho kulogi yomsebenzi. Ukucima iswishi kuqeda wonke amaxhumanisi ngesikhathi esisodwa; {{ui:Setha kabusha izilungiselelo ze-TakeoffCraft}} nayo iyicima.

## Xhuma umsizi wakho

Abasizi baxhuma nge-**CadCraft Studio** ekhompyutheni yakho: i-Studio iqalisa iseva encane ekufinyeleleka yilo lolu khompyutha kuphela, evikelwe ithokheni eyenzelwa yona njalo lapho iqala. Ku-Studio, khetha {{ui:Xhuma umsizi}} bese ukopisha ikheli nethokheni kumsizi wakho (i-Studio ibonisa izilungiselelo ezicacile okufanele uzinamathisele). Ungalokothi wabelane ngethokheni.

:::note
Ithebhu yesiphequluli ayikwazi ukuvula uxhumo lomsizi: kuma-app esiphequluli iswishi ayinamthelelaize usebenzise i-CadCraft Studio ekhompyutheni yakho.
:::

## Wena ulawula

- **Yonke inguquko iyisinyathelo esisodwa sokuhlehlisa**, ibhalwe ngegama lomsizi ngale nto (isibonelo "Umsizi: …"). {{key:Mod+Z}} ithatha kabusha inguquko yokugcina yomsizi yonke ngesikhathi esisodwa.
- **Uyazi lapho kuxhunyiwe.** Inkinobho esitolibheni esiphezulu iveza igama lomsizi lapho exhunyiwe; yichofoze ukuze ubone ayingenza, noma ukuze **uyinqamule**.
- **Umsebenzi.** {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Assistants}} › {{ui:Activity}} ibala yonke imibizo: nini, yiliphi ithuluzi, iqedile noma inqatshiwe. {{ui:Save the log}} igcina ikhophi.

## Okungacelwa umsizi

| Ithuluzi | Imvume | Lokho okwenzayo |
|---|---|---|
| `app_info`, `sheets_list` | Read | Ukubala okuvulekile, ama-PDF namashidi awo, isilinganiso nezimaki zeshidi ngalinye |
| `items_list` | Read | Izinto namayunithi, amazinga nezifomula zezinhlanganisela |
| `takeoff_quantities` | Read | Izinani ngento noma ngeshidi; izimaki emashidini angenasilinganiso ziyadwaniswa, azibalwa njengo-zero |
| `takeoff_estimate` | Read | Isilinganiso esinezindleko njengoba i-TakeoffCraft sikubala, namasamba aso |
| `takeoff_export` | Export | Ukuthumela kwe-CSV noma ye-XLSX yi-TakeoffCraft ngokwayo |
| `items_add` | Edit | Yengeza izinto namayunithi, amazinga nokulahlekelwa |
| `marks_add` | Edit | Ilinganisa imigqa, izindawo nezinani eshidini. Ubude nezindawo kuphela eshidini elinesilinganiso, hhayi elingenalo |
| `cad_sheets`, `cad_catalog`, `cad_count` | Read | Ku-DWG noma i-DXF oyivulile: amashidi ayo nezilinganiso zawo, okungabalwa (amabhulokhi, izingqimba nezinhlobo, imibhalo), nezinani ezinembile, njengoba {{ui:CAD count}} zenza ([Bala kusukela kumdwebo](topic:count-from-a-drawing)) |
| `cad_count_add` | Edit | Ibala emdwebeni futhi ibeka imaki yokubala kuyo yonke into etholakele, ngesinyathelo esisodwa; ukubala futhi kwengeza okusha kuphela |
| `cad_measure` | Edit | Ilinganisa into yomugqa noma yendawo kusukela emigqeni, emaarcini, ama-polyline nezigaba zokufiphaza zomdwebo uqobo, njengoba {{ui:Measure drawing}} yenza ([Linganisa kusukela kumdwebo](topic:measure-from-a-drawing)); kuphela eshidini elinesilinganiso |
| `usd_export` | Export | Izindlela ezilinganisiwe, izindawo nezinani zeshidi elinesilinganiso njengemodeli yokuhlola ye-3D ye-USD (`.usdz`, `.usda` noma `.usdc`), njengoba {{ui:USD package (.usdz)}} ibhala kwi-3D check view ([Thumela ukubuka kokuhlola kwe-3D njenge-USD](topic:usd)) |

Uma **Edit** ithikiwe, umsizi wengeza izinto nezimaki (ukubiza ngakunye kuyisinyathelo sokuhlehlisa esisodwa); awukwazi ukuhambisa, ukushintsha noma ukususa izimaki ezikhona ngaphambili.

Lezi zinani nesilinganiso zitholakala nangaphandle kokuvula i-TakeoffCraft: i-CadCraft MCP server ivula ifayela `.takeoff.json` kwifolda oyiqamba (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), futhi `cadcraft info Job.takeoff.json` iyazibonisa emugqeni womyalo. Ivula futhi i-DWG noma i-DXF njengokubala okusha emashidini ayo (ilinganiswa njengoba i-TakeoffCraft iyilinganisa), ibale futhi ilinganise kuyo ngamathuluzi afanayo e-`cad_*`, yengeze izinto futhi ilondoloze ukubala (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` ibala emugqeni womyalo.

## Uma into ingasebenzi

- **Umsizi awuboni amathuluzi e-TakeoffCraft:** hlola ukuthi iswishi ivuliwe kule window, nokuthi le window ivulekile ku-Studio.
- **"kudinga imvume yokuthumela":** thika **Export** ngaphansi kwe-{{ui:Assistants}}, bese ubuza futhi.
- **Amaphutha "401" noma "token":** ithokheni ishintshile (i-Studio iqalile kabusha, noma {{ui:New token}}). Kopisha eyintsha ezilungiselelweni zomsizi.

## Bona futhi

- [Izindlela zabasizi be-AI](common:assistants-recipes): izibonelo ezisebenzayo, ngayinye nethuluzi eliyibizayo.
