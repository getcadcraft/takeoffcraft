---
title: Kilicho kipya katika 0.7 (cha awali)
summary: Michoro ya DWG na DXF inafunguka kama karatasi zenye kipimo chake, hesabu na urefu sahihi kutoka kwenye mchoro wenyewe, zabuni ya kisubuni iliyochaguliwa kama bei ya kifurushi, mialiko ya zabuni yenye bei zilizofungwa, zana za wasaidizi kwa michoro, na USD kutoka mwonekano wa ukaguzi wa 3D.
keywords: nini kipya 0.7, toleo la awali, maelezo ya toleo, mabadiliko, orodha ya mabadiliko, 0.7, toleo, vipengele vipya, dwg, dxf, mchoro, mipangilio ya karatasi, nafasi ya modeli, kipimo cha mchoro, hesabu kutoka mchoro, hesabu ya CAD, bloku, bloku zenye nguvu, sifa, tabaka, xref, mchoro uliounganishwa, pima mchoro, polilaini, kujaza, PDF yenye alama, zabuni iliyochaguliwa, tumia zabuni, tuma kwa zabuni, mwaliko wa zabuni, zabuni zilizofungwa, zabuni iliyochelewa, rekodi za wakandarasi wadogo, csv, msaidizi, mcp, usd, usdz, vitengo, orodha za vitengo, kubana, paneli, mazungumzo, kireno
from: 0e3a424f
---

Hiki ndicho kilichobadilika katika TakeoffCraft 0.7, ikilinganishwa na 0.6. Michoro sasa inafunguka kama ilivyo, bila kuchapishwa kuwa PDF kwanza, na kifurushi cha zabuni kinaweza kutumwa kwa wakandarasi wadogo na kurudi kikiwa na bei.

## Mpya

### Michoro ya DWG na DXF

- **Fungua mchoro kama karatasi.** {{ui:Fungua mipango}} chini ya kundi la {{ui:Faili}} ({{key:Mod+O}}, au dondosha faili) inapokea michoro ya DWG na DXF pamoja na PDF. Nafasi ya modeli na kila mpangilio vinakuwa karatasi kwenye orodha ya {{ui:Karatasi}}, na ukadiriaji unaweza kufunika michoro na PDF pamoja. Hakuna kinachopakiwa. Angalia [Fungua mchoro wa DWG au DXF](topic:open-a-drawing).
- **Kipimo kinatoka kwenye mchoro.** Mpangilio unaanza na kipimo cha kiwanja chake kikubwa zaidi, kikitajwa kwa jina la kipimo kilichowekwa pale kinapokuwa hivyo, kama 1/2" = 1'-0". Modeli inaanza kwenye vitengo vya mchoro. Mchoro usio na vitengo unasema "Hakuna kipimo" hadi uurekebishe. {{ui:Rekebisha}}, {{ui:Kagua}} na {{ui:Kipimo kilichowekwa}} bado vinashinda. Angalia [Kipimo](topic:open-a-drawing#the-scale).
- **Tabaka na michoro iliyounganishwa.** {{ui:Tabaka}} kwenye upau wa karatasi inaonyesha au kuficha tabaka za mchoro. Tabaka ambazo faili lilizizima au kuzigandisha zinaanza zikiwa zimefichwa na hazihesabiwi isipokuwa uchague. Mchoro uliounganishwa (xref) unaofunguliwa karibu na mwenyeji wake unachorwa na kuhesabiwa mahali unapoingizwa; hadi ufunguliwe, upau wa hali unasema kinachokosekana. Angalia [Tabaka](topic:open-a-drawing#layers).
- **PDF yenye alama inafanya kazi kutoka kwenye mchoro.** {{ui:Hamisha}} › {{ui:PDF yenye alama}} huchora karatasi zenye alama za mchoro kwanza kama PDF, kwa hiyo nakala inaonyesha alama zako na ufunguo wake bila hatua ya kuchapisha. Inachorwa kwa rangi nyeusi au rangi za mchoro, bila jedwali za mitindo ya kuchapisha. Angalia [PDF yenye alama](topic:export-estimate#a-marked-pdf).

### Hesabu kamili na urefu kutoka kwenye mchoro

- **Hesabu kile mchoro unachosema kipo.** {{ui:Hesabu ya CAD}} kwenye upau wa karatasi inahesabu bloku kwa jina (pamoja na bloku zilizomo ndani yake, hali za bloku zenye nguvu na safu za bloku), kila kitu cha aina moja kwenye tabaka, au thamani ya maandishi au sifa. Inahesabu kile karatasi inachoonyesha, au mchoro mzima mara moja. Kuongeza alama ni hatua moja ya kutendua, na kuhesabu tena kunaongeza vilivyo vipya pekee. {{ui:Hesabu otomatiki}} inabaki kwa PDF na kwa alama ambazo si bloku. Angalia [Hesabu kutoka kwenye mchoro](topic:count-from-a-drawing).
- **Pima kutoka mistari ya mchoro.** {{ui:Pima mchoro}} inachukua mistari, matao, polilaini, duara, michoro ya kujaza na yabisi unazobofya au unazozungushia dirisha kama alama za kipengee cha mstari au eneo. Matao, mikunjo na mashimo ya kujaza vinatoka sahihi; duaradufu na splaini zinapimwa kwa chords laini, na upau unasema hivyo. Angalia [Pima kutoka kwenye mchoro](topic:measure-from-a-drawing).

### Zabuni

- **Tumia zabuni ya kisubuni kama bei ya kifurushi.** Kwenye {{ui:Hamisha}} › {{ui:Vifurushi vya zabuni na usawazishaji…}}, chagua {{ui:Tumia}} kwenye zabuni. Vipengee vya kifurushi vinabaki kama kiasi, mstari mmoja wa **Zabuni iliyochaguliwa** unabeba bei, vipengee ambavyo zabuni haijumuishi vinabaki kwa gharama yako, na gharama za juu, faida na dhamana vinatumika kwake. Kubadilisha zabuni ni hatua moja ya kutendua; kitabu cha kazi na muhtasari wa zabuni vinabeba mabadiliko hayo. Angalia [Tumia zabuni kama bei ya kifurushi](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Tuma kifurushi kwa zabuni.** {{ui:Tuma kwa zabuni…}} chini ya kifurushi humtumia kila kisubuni barua pepe yenye kiungo cha ukurasa usiohitaji akaunti: wanaona upeo wa kazi na karatasi kama PDF, wanaandika bei kwenye kila mstari au kuweka alama kuwa hajajumuisha, wanaongeza maelezo na hadi faili tatu, au wanakataa. {{ui:Pata bei}} huvuta kilichorudi kwenye karatasi ya usawazishaji, kikiwekwa alama **web**. Kutuma kunapatikana tu kwa akaunti ambazo timu ya CadCraft imewezesha wakati kipengele hiki kinajaribiwa (angalia hapa chini). Angalia [Tuma kifurushi kwa zabuni](topic:bid-invitations).
- **Imefungwa hadi ufunguzi.** Bei zinaweza kubaki zimefungwa hadi muda wa ufunguzi uliouweka: hadi hapo hakuna anayeziona, pamoja nawe. Wakati wa ufunguzi zabuni zote zinaonekana mara moja, na zabuni iliyokuja baada ya muda wa mwisho inawekwa alama **imechelewa**. Angalia [Zabuni zilizofungwa na ufunguzi](topic:bid-invitations#sealed-bids-and-the-opening).
- **Rekodi za wakandarasi wadogo.** Akaunti yako kwenye getcadcraft.com huweka mawasiliano ya kila kampuni, fani zao, majibu ya sifa, na tarehe za bima na leseni (zinawekwa alama mara zikipita au zikiwa ndani ya siku 30), pamoja na zabuni zao za awali. Ziingize na kuzihamisha kama CSV, na uzichague unapotuma kifurushi. Angalia [Kwenye tovuti](topic:bid-invitations#on-the-website).

### Wasaidizi wa AI

- **Wasaidizi wanaweza kuongeza kwenye ukadiriaji.** Kwa **Hariri** iliyowekwa tiki, msaidizi wako mwenyewe anaweza kuongeza vipengee (`items_add`) na kupima urefu, maeneo na hesabu kwenye karatasi (`marks_add`; urefu na maeneo kwenye karatasi yenye kipimo pekee), kila wito ukiwa hatua moja ya kutendua.
- **Zana za wasaidizi kwa michoro.** Kwenye DWG au DXF iliyofunguliwa, msaidizi anaweza kuorodhesha karatasi zake na kinachoweza kuhesabiwa, kuhesabu kwa usahihi, kuongeza alama za hesabu, na kupima kutoka jiometri ya mchoro. Bila TakeoffCraft kufunguliwa, seva ya CadCraft MCP inafungua mchoro kama ukadiriaji mpya na kuuhifadhi, na `cadcraft count` inahesabu kutoka mstari wa amri. Angalia [Msaidizi anachoweza kuomba](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Mwonekano wa ukaguzi wa 3D kama USD.** {{ui:Kifurushi cha USD (.usdz)}} kando ya {{ui:GLB}} kwenye mwonekano wa ukaguzi wa 3D kinaandika kila ukuta, bamba, bamba la chuma, nguzo ya hesabu na mstari kama kitu chake, kikiitwa kwa jina la kipengee chake na kubeba kiasi chake, kwa mita. Msaidizi naye anaweza kuihamisha (`usd_export`). Angalia [Hamisha mwonekano wa ukaguzi wa 3D kama USD](topic:usd).

## Katika kila programu

- **Vitengo.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Vitengo}} ina orodha moja kwa kila urefu, eneo, ujazo, pembe na mteremko, zenye ukubwa halisi wa vitengo kama ufafanuzi wake unavyotoa (futi ya US survey ni kitengo chake). Zima vitengo usivyovitumia na vinaondoka kwenye orodha; weka nyota kwenye kimoja na kazi mpya inaanzia hapo. Faili daima hubaki na kitengo chake. Kwenye TakeoffCraft, orodha ya {{ui:Kitengo}} ya kipengee hufuata swichi, kipengee kipya huanza kwenye kitengo cha urefu au eneo kilichowekwa nyota, mraba wa kuezeka paa (SQ), ekari na hektari ni vitengo vipya vya eneo, na kisanduku cha urefu kinakubali alama ya kitengo chochote, kama `3 yd`. Angalia [Vitengo, thamani zilizoandikwa na orodha za vitengo](common:unit-lists).
- **Mpangilio mnene zaidi na paneli zinazojificha nadhifu.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Msongamano wa mpangilio}} › {{ui:Kubana}} inatoshea zaidi kwenye skrini (skrini za kugusa na simu zinabaki na vitufe vyake vikubwa). Kila paneli ya pembeni ina upau mwembamba wa kichwa: ivute ili iunganishwe au ielee, iangushe kwenye upau wa paneli nyingine ili kushiriki fremu moja kama vichupo, ibandike ili iteleze hadi ukingoni, au ifiche na kuirudisha kutoka ukingoni. Angalia [Panga paneli](common:arrange-panels#make-the-layout-denser).
- **Mazungumzo yanahamishika.** Vuta mazungumzo kwa upau wake wa kichwa uyaondoe njiani mwa mchoro; yanarudi pale ulipoyaacha. Bofya mara mbili upau wa kichwa ili kuyarudisha katikati. Angalia [Hamisha mazungumzo](common:arrange-panels#move-a-dialog).
- **Mapishi kwa wasaidizi wa AI.** Maombi kumi yaliyofanyiwa kazi kwa msaidizi wako mwenyewe (safisha mchoro, chapisha seti, kagua michoro, uliza modeli maswali, jumlisha ukadiriaji, jaribu toleo tofauti la sehemu…), kila moja ikiwa na zana inazoita na ruhusa inazohitaji, na kila moja ikichezwa tena na majaribio yetu. Programu hazina AI ndani yake. Angalia [Mapishi kwa wasaidizi wa AI](common:assistants-recipes).
- **Lugha.** **Português (Portugal)** ni mpya kwenye {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Lugha}}. Hiyo, **Português (Brasil)**, **Español (México)** na **Bahasa Indonesia** sasa zina kila neno la programu, kama rasimu ambazo bado hazijasomwa na mzungumzaji wa asili. Mada za msaada ziko kwa Kiingereza.
- **CadCraft Studio** inaeleza kwa nini ukaguzi wa sasisho ulishindwa (hakuna faili la mfumo wako bado, hakuna mtandao, sahihi mbaya) badala ya kusema tu "Imekamilika", na haileti tena kadi ya Kilicho kipya ambayo umeifunga hadi toleo jipya litolewe.

## Bado si katika toleo hili

- **0.7 haijasainiwa kwa msimbo.** Kusaini, na kifurushi cha Microsoft Store, vilihamia 0.8 kwa sababu uthibitishaji wa cheti bado haujafika. Angalia SHA-256 iliyo kando ya kila faili kwenye getcadcraft.com/download. Kwenye Windows, SmartScreen ikisimamisha kisakinishi, chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, mara ya kwanza, bofya kulia CadCraft Studio na uchague {{ui:Wazi}}. CadCraft Studio bado haiko kwenye duka lolote la programu, na hakuna muundo wa iPad au iPhone bado.
- Orodha za pembe na mteremko kwenye {{ui:Vitengo}} zinahifadhiwa, lakini hakuna kisanduku kinachozisoma bado.
- **Mialiko ya zabuni imezimwa kwa akaunti nyingi.** Wakati kipengele kinajaribiwa, barua kwa wazabuni wa nje inatoka tu kwenye akaunti ambazo timu ya CadCraft imewezesha. Kurasa za wazabuni zinafanya kazi kwa kila mwaliko uliokwisha kutumwa. Kwa wengine wote: pakua {{ui:Wigo CSV}}, itume kwa barua pepe mwenyewe, kisha uandike zabuni.
- Dirisha la CadCraft Studio bado haliwezi kutuma mialiko ya zabuni: linasema kutumia TakeoffCraft kwenye kivinjari. Kufungua ukadiriaji wenye maombi yaliyotumwa, usawazishaji na kuchagua zabuni vinafanya kazi kwenye Studio.
- Nyongeza, barua za tuzo, karatasi ya upeo ambayo kila mzabuni anaisaini, na vikumbusho vya kiotomatiki kabla ya tarehe ya bima kuisha havijajengwa. Zabuni iliyochaguliwa haipangi bei upya eneo la zabuni mbadala.
- Michoro: jedwali za mitindo ya kuchapisha na mafaili ya CTB hazitumiki, DXF ya binary inakataliwa (ihifadhi kama DXF ya ASCII au DWG), michoro iliyounganishwa inapatikana tu miongoni mwa faili zilizofunguliwa kwa jina la faili, na PDF za chini, picha na vitu vya OLE kwenye mchoro havichorwi wala kuhesabiwa. Hesabu na vipimo vimekaguliwa kwenye michoro ya mfano, bado si kwenye michoro kutoka kazi halisi iliyofunguliwa kwenye programu iliyoitengeneza.
- Msaidizi anaweza kuongeza vipengee na alama lakini hawezi kusogeza, kubadilisha au kufuta alama ambazo tayari zipo.

Kila kingine kiko kwenye [Bado haijajengwa](topic:not-built-yet).
