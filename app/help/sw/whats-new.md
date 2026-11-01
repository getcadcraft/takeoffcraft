---
title: Mambo mapya katika 0.7
summary: Michoro ya DWG na DXF inafunguka kama karatasi zenye skeli yake, hesabu na urefu sahihi kutoka kwenye mchoro wenyewe, zabuni ya mkandarasi mdogo kama bei ya kifurushi, mialiko ya zabuni yenye bei zilizofungwa, zana za msaidizi kwa michoro, na USD kutoka mwonekano wa ukaguzi wa 3D.
keywords: mambo mapya, maelezo ya toleo, historia ya mabadiliko, mabadiliko, 0.7, toleo, vipengele vipya, dwg, dxf, mchoro, mipangilio ya karatasi, nafasi ya modeli, skeli ya mchoro, hesabu kutoka mchoro, cad count, bloku, bloku zinazobadilika, sifa, tabaka, xref, mchoro uliounganishwa, pima mchoro, polilaini, mistari ya kivuli, pdf yenye alama, zabuni iliyochaguliwa, tumia zabuni, tuma kwa zabuni, mwaliko wa zabuni, zabuni zilizofungwa, zabuni iliyochelewa, rekodi za wakandarasi wadogo, csv, msaidizi, mcp, usd, usdz, vitengo, orodha za vitengo, kubana, paneli, mazungumzo, kireno
from: ad4f0df1
---

Hili ndilo lililobadilika katika TakeoffCraft 0.7, ikilinganishwa na 0.6. Michoro sasa inafunguka kama ilivyo, bila kuichapisha kwanza kuwa PDF, na pakiti ya zabuni inaweza kwenda kwa wakandarasi wadogo na kurudi ikiwa na bei.

## Mpya

### Michoro ya DWG na DXF

- **Fungua mchoro kama karatasi.** {{ui:Fungua mipango}} kwenye kikundi cha {{ui:Faili}} ({{key:Mod+O}}, au dondosha faili) inapokea michoro ya DWG na DXF pamoja na PDF. Nafasi ya modeli na kila mpangilio wa karatasi vinakuwa karatasi kwenye orodha ya {{ui:Karatasi}}, na ukadiriaji unaweza kufunika michoro na PDF pamoja. Hakuna kinachopakiwa. Tazama [Fungua mchoro wa DWG au DXF](topic:open-a-drawing).
- **Skeli inatoka kwenye mchoro.** Mpangilio wa karatasi unaanza na skeli ya kionyeshi chake kikubwa zaidi, ikitajwa kama {{ui:Kipimo kilichowekwa}} ikiwa ni hivyo, kama 1/2" = 1'-0". Modeli inaanza kwenye vitengo vya mchoro. Mchoro usio na vitengo unasema "Hakuna skeli" hadi uurekebishe. {{ui:Rekebisha}}, {{ui:Kagua}} na {{ui:Kipimo kilichowekwa}} bado vinashinda. Tazama [Skeli](topic:open-a-drawing#the-scale).
- **Tabaka na michoro iliyounganishwa.** {{ui:Tabaka}} kwenye upau wa karatasi inaonyesha au kuficha tabaka za mchoro. Tabaka ambazo faili imezizima au kuzigandisha zinaanza zikiwa zimefichwa na hazihesabiwi isipokuwa uchague. Mchoro uliounganishwa (xref) unaofunguliwa karibu na mwenyeji wake unachorwa na kuhesabiwa mahali unapoingizwa; mpaka ufunguliwe, upau wa hali unasema kinachokosekana. Tazama [Tabaka](topic:open-a-drawing#layers).
- **PDF yenye alama inafanya kazi kutoka kwenye mchoro.** {{ui:Hamisha}} › {{ui:PDF yenye alama}} huchora karatasi zenye alama za mchoro kwanza kama PDF, kwa hiyo nakala inaonyesha alama zako na ufunguo bila hatua ya kuchapisha. Inachorwa kwa nyeusi au rangi za mchoro, bila jedwali za mitindo ya kuchapisha. Tazama [PDF yenye alama](topic:export-estimate#a-marked-pdf).

### Hesabu na urefu sahihi kutoka kwenye mchoro

- **Hesabu kile mchoro unachosema kipo.** {{ui:CAD count}} kwenye upau wa karatasi huhesabu bloku kwa jina lake (pamoja na bloku zilizomo ndani, hali za bloku zinazobadilika na safu za bloku), kila kitu cha aina moja kwenye tabaka, au thamani ya maandishi au sifa. Huhesabu kile karatasi inaonyesha au mchoro mzima mara moja. Kuongeza alama ni hatua moja ya kutengua, na kuhesabu tena kunaongeza kile kipya tu. {{ui:Hesabu otomatiki}} inabaki kwa PDF na kwa alama zisizo bloku. Tazama [Hesabu kutoka kwenye mchoro](topic:count-from-a-drawing).
- **Pima kutoka mistari ya mchoro yenyewe.** {{ui:Pima mchoro}} huchukua mistari, tao, polilaini, duara, mistari ya kivuli na yabisi unazobofya au kuchagua kwa dirisha kama alama za kipengee cha mstari au eneo. Tao, bulge na mashimo ya mistari ya kivuli yanatoka sahihi; elipsi na spline zinapimwa kwa chords nzuri, na upau unasema hivyo. Tazama [Pima kutoka kwenye mchoro](topic:measure-from-a-drawing).

### Zabuni

- **Tumia zabuni ya mkandarasi mdogo kama bei ya kifurushi.** Katika {{ui:Hamisha}} › {{ui:Vifurushi vya zabuni na usawazishaji…}}, chagua {{ui:Tumia}} kwenye zabuni. Vipengee vya kifurushi vinabaki kama viasi, mstari mmoja wa **Zabuni iliyochaguliwa** unabeba bei, vipengee ambavyo zabuni haijumuishi vinabaki kwa gharama yako, na gharama za juu, faida na dhamana zinatumika juu yake. Kubadilisha zabuni ni hatua moja ya kutengua; kitabu cha kazi na muhtasari wa zabuni vinabeba mabadiliko hayo. Tazama [Tumia zabuni kama bei ya kifurushi](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Tuma kifurushi kwa zabuni.** {{ui:Tuma kwa zabuni…}} chini ya kifurushi humtumia kila mkandarasi mdogo barua pepe yenye kiungo cha ukurasa usiohitaji akaunti: anaona wigo na karatasi kama PDF, anaandika bei kwenye kila mstari au kuweka alama kuwa haijajumuishwa, anaongeza maelezo na hadi faili tatu, au anakataa. {{ui:Pata bei}} huvuta kile kilichorudi kwenye karatasi ya usawazishaji, kikiwekwa alama **wavuti**. Kutuma kunapatikana tu kwa akaunti ambazo timu ya CadCraft imewezesha wakati inajaribiwa (tazama hapa chini). Tazama [Tuma kifurushi kwa zabuni](topic:bid-invitations).
- **Imefungwa hadi ufunguzi.** Bei zinaweza kubaki zimefungwa hadi muda wa ufunguzi uliouweka: hadi hapo hakuna anayeona bei, pamoja nawe. Wakati wa ufunguzi zabuni zote zinaonekana mara moja, na zabuni iliyofika baada ya muda wa mwisho inaonyeshwa kuwa imechelewa. Tazama [Zabuni zilizofungwa na ufunguzi](topic:bid-invitations#sealed-bids-and-the-opening).
- **Rekodi za wakandarasi wadogo.** Akaunti yako kwenye getcadcraft.com huhifadhi wawasiliani wa kila kampuni, fani zao, majibu ya sifa, na tarehe za bima na leseni (zinaonyeshwa mara zinapopita au zikiwa ndani ya siku 30), pamoja na zabuni zao za zamani. Ziingize na kuzitoa kama CSV, na uzichague unapotuma kifurushi. Tazama [Kwenye tovuti](topic:bid-invitations#on-the-website).

### Wasaidizi wa AI

- **Wasaidizi wanaweza kuongeza kwenye ukadiriaji.** Ukiwa umechagua **Hariri**, msaidizi wako mwenyewe anaweza kuongeza vipengee (`items_add`) na kupima mistari, maeneo na hesabu kwenye karatasi (`marks_add`; urefu na maeneo tu kwenye karatasi yenye skeli), kila wito ukiwa hatua moja ya kutengua.
- **Zana za msaidizi kwa michoro.** Kwenye DWG au DXF iliyo wazi, msaidizi anaweza kuorodhesha karatasi zake na kile kinachoweza kuhesabiwa, kuhesabu kwa usahihi, kuongeza alama za hesabu, na kupima kutoka jiometri ya mchoro. Bila TakeoffCraft kuwa wazi, seva ya CadCraft MCP hufungua mchoro kama ukadiriaji mpya na kuuhifadhi, na `cadcraft count` huhesabu kutoka kwenye mstari wa amri. Tazama [Msaidizi anaweza kuomba nini](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Mwonekano wa ukaguzi wa 3D kama USD.** {{ui:Kifurushi cha USD (.usdz)}} kando ya {{ui:GLB}} kwenye mwonekano wa ukaguzi wa 3D huandika kila ukuta, bamba, bamba, nguzo ya hesabu na mstari kama kitu chake, kikipewa jina kwa kipengee chake na kubeba kiasi chake, kwa mita. Msaidizi anaweza kuihamisha pia (`usd_export`). Tazama [Hamisha mwonekano wa ukaguzi wa 3D kama USD](topic:usd).

## Katika kila programu

- **Vitengo.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Vitengo}} ina orodha moja kwa kila urefu, eneo, ujazo, pembe na mteremko, zenye ukubwa halisi kama ufafanuzi wa vitengo unavyoeleza (futi ya US survey ni kitengo chake). Zima vitengo usivyotumia na vinaondoka kwenye orodha; weka nyota moja na kazi mpya zinaanza hapo. Faili daima huweka kitengo chake. Kwenye TakeoffCraft orodha za {{ui:Kitengo}} za kipengee zinafuata swichi, kipengee kipya kinaanza na kitengo cha urefu au eneo kilichowekwa nyota, mraba wa paa (SQ), ekari na hekta ni vitengo vipya vya eneo, na kisanduku cha urefu kinakubali alama ya kitengo chochote, kama `3 yd`. Tazama [Vitengo, thamani zilizoandikwa na orodha za vitengo](common:unit-lists).
- **Mpangilio mnene zaidi na paneli zinazojipanga.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Msongamano wa mpangilio}} › {{ui:Kubana}} hutoshea zaidi kwenye skrini (skrini za kugusa na simu zinabaki na vitufe vyake vikubwa). Kila paneli ya pembeni ina upau mwembamba wa kichwa: uvute ili uitie gati au kuielea, uiachie kwenye upau wa paneli nyingine ili kushiriki fremu moja kama vichupo, ibandike ili iteleze hadi pembeni, au uifiche na kuirudisha kutoka pembeni. Tazama [Panga paneli](common:arrange-panels#make-the-layout-denser).
- **Mazungumzo yanahamishika.** Vuta mazungumzo kwa upau wa kichwa uiondoe kwenye njia ya mchoro; yanarudi pale ulipoyaacha. Bofya mara mbili upau wa kichwa ili yarudi katikati. Tazama [Hamisha mazungumzo](common:arrange-panels#move-a-dialog).
- **Mapishi kwa wasaidizi wa AI.** Mapishi kumi ya maombi yaliyofanyiwa kazi kwa msaidizi wako mwenyewe (panga mchoro, chapisha seti, kagua michoro, uliza modeli maswali, jumlisha ukadiriaji, jaribu toleo la sehemu…), kila moja ikiwa na zana inazoita na ruhusa inazohitaji, na kila moja ikijaribiwa tena na majaribio yetu. Programu zenyewe hazina AI. Tazama [Mapishi kwa wasaidizi wa AI](common:assistants-recipes).
- **Lugha.** **Português (Portugal)** ni mpya kwenye {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Lugha}}. Yenyewe, **Português (Brasil)**, **Español (México)** na **Bahasa Indonesia** sasa zina kila neno la programu, kama rasimu ambazo bado hazijakaguliwa na mzawa. Mada za msaada ziko kwa Kiingereza.
- **CadCraft Studio** inaeleza kwa nini ukaguzi wa sasisho ulishindwa (hakuna faili la mfumo wako bado, hakuna mtandao, sahihi mbaya) badala ya kusema tu "Imekamilika", na inaacha kurudisha kadi ya Mambo mapya uliyoifunga hadi kuwe na toleo jipya zaidi.

## Bado katika toleo hili

- **0.7 haijasainiwa kidijitali.** Kusaini, na kifurushi cha Microsoft Store, vimehamishwa hadi 0.8 kwa sababu uthibitishaji wa cheti bado haujafika. Angalia SHA-256 iliyo kando ya kila faili kwenye getcadcraft.com/download. Kwenye Windows, SmartScreen ikisimamisha kisakinishi, chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endelea hata hivyo}}. Kwenye Mac, mara ya kwanza, bofya kulia CadCraft Studio na uchague {{ui:Wazi}}. CadCraft Studio bado haiko kwenye duka lolote la programu, na bado hakuna toleo la iPad wala iPhone.
- Mishale ya pembe na mteremko katika {{ui:Vitengo}} huhifadhiwa, lakini hakuna kisanduku kinachozisoma bado.
- **Mialiko ya zabuni imezimwa kwa akaunti nyingi.** Wakati kipengele kinajaribiwa, barua kwa wazabuni wa nje inatoka tu kutoka kwa akaunti ambazo timu ya CadCraft imewezesha. Kurasa za wazabuni zinafanya kazi kwa kila mwaliko uliokwisha kutumwa. Wengine wote: pakua {{ui:Wigo CSV}}, itume kwa barua pepe mwenyewe na uandike zabuni.
- Dirisha la CadCraft Studio haliwezi kutuma mialiko ya zabuni bado: linasema kutumia TakeoffCraft kwenye kivinjari. Kufungua ukadiriaji wenye maombi yaliyotumwa, usawazishaji na kuchagua zabuni vinafanya kazi kwenye Studio.
- Nyongeza, barua za tuzo, karatasi ya wigo ambayo kila mzabuni anaithibitisha kwa sahihi, na vikumbusho vya kiotomatiki kabla tarehe ya bima haijaisha hazijajengwa. Zabuni iliyochaguliwa haipangi upya bei ya eneo la zabuni mbadala.
- Michoro: jedwali za mitindo ya kuchapisha na faili za CTB hazitumiki, DXF ya binary inakataliwa (ihifadhi kama DXF ya ASCII au DWG), michoro iliyounganishwa hupatikana tu miongoni mwa faili zilizo wazi kwa jina la faili, na PDF za chini, picha na vitu vya OLE kwenye mchoro havichorwi wala kuhesabiwa. Skeli na hesabu zimekaguliwa kwenye michoro ya mfano, bado si kwenye michoro kutoka kazi halisi iliyofunguliwa kwenye programu iliyoitengeneza.
- Msaidizi anaweza kuongeza vipengee na alama lakini hawezi kuhamisha, kubadilisha au kufuta alama ambazo tayari zipo.

Kila kitu kingine kiko katika [Bado hakijajengwa](topic:not-built-yet).
