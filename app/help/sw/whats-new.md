---
title: Kilicho kipya katika 0.9
summary: Soma urefu kwa mita, sentimita au milimita, maeneo ya metriki kwa m2 pamoja na eneo la ukuta, vipimo vilivyowekwa 1:75 na 1:150, vitengo vya uzito na halijoto, Tao yenye mbinu kumi, na kielekezi cha moja kwa moja, Fuata na orodha ya watu.
keywords: nini kipya, kilicho kipya, maelezo ya toleo, mabadiliko, 0.9, onyesha urefu kama, mita, sentimita, milimita, metriki, fuata global, vitengo, m2, mita za mraba, eneo la ukuta, vipimo vilivyowekwa, 1:75, 1:150, uzito, kilo, kg, tani, lb, halijoto, selsiasi, fahrenheit, tao, mbinu za tao, tao la alama 3, radius, moja kwa moja, kielekezi, fuata, orodha ya watu, darasa, vidokezo, mpangilio, 0.8, 0.8.1, toleo, vipengele vipya, hesabu kila kitu, ufunguo wa alama, seti nzima, kumbukumbu ya bei, kazi zilizopita, kazi ya mwisho, bei ya kawaida, msambazaji, hisa, muda wa kusubiri, orodha ya kuagiza, uhaba, paneli ya matatizo, msaidizi, lugha, vifaa vya kuingiza, safu za upau wa zana, dwg
from: 6182b998
---

Hiki ndicho kilichobadilika katika TakeoffCraft 0.9, ikilinganishwa na 0.8.1. Ni toleo dogo kwa programu hii: urefu sasa unaweza kusomwa kwa mita, sentimita au milimita, maeneo na vipimo vinafuata kazi za metriki ipasavyo, na Tao ina njia kumi za kuchora. Vipindi vya moja kwa moja pia vinaonyesha yupo wapi kila mtu.

## Mpya

### Soma urefu kwa mita, sentimita au milimita

- **Onyesha urefu kama.** {{ui:Mipangilio}} › {{ui:TakeoffCraft}} ina {{ui:Onyesha urefu kama}} yenye {{ui:Fuata Global}}, {{ui:Feet-inches}}, m, cm na mm. {{ui:Fuata Global}} inatumia kitengo cha urefu cha metriki ulichoweka nyota kwenye {{ui:Mipangilio}} › {{ui:Global}} › {{ui:Vitengo}}, na futi-inchi pale kisipowekwa nyota. Inabadilisha jinsi urefu unavyosomeka kwenye karatasi, kwenye upau wa hali na kwenye paneli, ikiwemo urefu wa juu, kina, unene na ngazi. Nambari tupu iliyoandikwa kwenye sehemu ya urefu inasomwa kwa kitengo kinachoonyeshwa.
- **Kwa kuonyesha tu.** Kiasi, gharama na hamisho vinakokotolewa kutoka kwa urefu halisi. Chaguo la 1/16, 1/8 na 1/4 ya inchi linaonekana kwa futi-inchi pekee. Angalia [Onyesha urefu kwa mita](topic:show-lengths-in-meters).
- **Vitengo vya uzito.** Kipengee cha {{ui:Typed quantity (no drawing)}} sasa kinaweza kuwa kwa lb, TON, kg au t, na kupangiwa bei kwa kila kitengo.
- **Halijoto.** Kila kipengee kina sehemu ya hiari ya {{ui:Temperature}} kwenye kihariri cha kipengee, iliyoandikwa kwa digrii C au F. {{ui:Show temperatures as}} kwenye {{ui:Mipangilio}} › {{ui:TakeoffCraft}} inatoa {{ui:Fuata Global}}, °C au °F.

### Maeneo na vipimo kwa kazi za metriki

- **Maeneo kwa m2 kwenye mchoro.** Eneo lililopimwa kwa kipengee cha metriki sasa linasema m2 kwenye lebo ya mchoro na kwenye paneli ya alama pia, pamoja na jedwali, badala ya SF. Kanuni ni m2 kipengee kikiwa na bei ya metriki au urefu ukionyeshwa kwa m, cm au mm, na SF vinginevyo.
- **Eneo la ukuta.** Kipengee cha mstari chenye urefu pia kinaonyesha eneo lake la ukuta (urefu mara kimo) kwenye orodha ya Vipengee na kama safu ya maelezo chini ya jedwali la kiasi kwa kipengee.
- **Vipimo vilivyowekwa 1:75 na 1:150.** Vipo kwenye orodha ya {{ui:Preset}} kwenye kundi la {{ui:Scale}}, ambalo sasa lina vipimo 32. Angalia [Vipimo vilivyowekwa](topic:scale-presets).

### Tao yenye mbinu kumi

- Wakati {{ui:Arc}} imewashwa (kitufe cha upau wa zana au {{key:R}}), kisanduku cha {{ui:Arc method}} kinaonekana kwenye upau wa karatasi, na mbinu kumi zinapatikana: Alama 3; Mwanzo, Kituo, Mwisho; Mwanzo, Kituo, Pembe; Mwanzo, Kituo, Urefu; Mwanzo, Mwisho, Pembe; Mwanzo, Mwisho, Mwelekeo; Mwanzo, Mwisho, Radius; Kituo, Mwanzo, Mwisho; Kituo, Mwanzo, Pembe; na Kituo, Mwanzo, Urefu. Pembe, urefu, radius na mwelekeo vinaweza kubofya au kuandikwa. Inafanya kazi kwenye mistari ya kukimbia, maeneo na sehemu zilizokatwa. Faili lililohifadhiwa kabla ya 0.9 linafunguka kwa njia ile ile. Angalia [Chora matao kwa mbinu kumi](topic:draw-arcs-ten-methods).

### Kufanya kazi pamoja

- **Ona vielekezi vya kila mmoja.** Kwenye kipindi cha Moja kwa moja, kielekezi cha kila mtu kinaonekana kwenye karatasi pamoja na jina lake na rangi yake, pamoja na kisanduku chenye mistari nukta kuzunguka alama walizozichagua. Watu walio kwenye karatasi nyingine wanaorodheshwa kwa jina la karatasi hiyo. Angalia [Fanya kazi moja kwa moja na wengine](topic:work-live).
- **Fuata mtu, na orodha ya watu.** Kitufe cha {{ui:People}} kwenye kipindi cha Moja kwa moja kinaorodhesha kila mtu pamoja na zana anayotumia, karatasi aliyopo na wakati alipohariri mara ya mwisho. {{ui:Follow}} inasogeza mwonekano wako pamoja na wake, na mwenyeji anaweza kutumia {{ui:Ask everyone to follow me}}. Angalia [Fuata mwenzako kwenye kipindi cha Moja kwa moja](topic:follow-a-teammate).

## Katika kila programu

- **Vidokezo vya kuelea na kidokezo cha kuanza.** Maandishi yanayoonekana unapoelekeza kipanya ni kidokezo cha Bootstrap, na kidokezo cha kuanza kinaweza kufungwa.
- **Mistari ya vichupo inayosogea.** Mstari wa vichupo wa paneli usiotoshea unasogea kando badala ya kukatwa.
- **Majina ya vichupo.** Kichupo cha kivinjari kinasoma `<document> - TakeoffCraft | CadCraft`.
- **Mpangilio.** Orodha ya mpangilio kwenye {{ui:Mipangilio}} ni menyu kunjuzi inayoonyesha mpangilio uliochaguliwa.
- **Lugha.** Lugha utakayochagua sasa inafika kwenye maneno ambayo ukurasa wenyewe unachapisha, kama Mpya, Wazi na Hifadhi. Lugha zisizo za Kiingereza ni rasimu za mashine hadi mzungumzaji wa asili azisome.

## Ukweli wa mipaka

- Onyesho la urefu, vitengo vya uzito na halijoto, na vipimo vipya vilikaguliwa kwa majaribio na kwenye ukurasa. Kila paneli kwa kila kitengo haijakaguliwa kwa mkono.
- Orodha ya watu haijakaguliwa kwa mkono kwa darasa halisi la mwalimu na wanafunzi.
- Lugha zisizo za Kiingereza ni rasimu za mashine.
- Visakinishi vya Windows havijasainiwa kwa msimbo (Maelezo zaidi, kisha Endesha hata hivyo). Picha ya diski ya macOS haijathibitishwa rasmi na Apple (bofya kulia, kisha Wazi).

## Awali: 0.8 na 0.8.1

Hiki ndicho kilichobadilika katika TakeoffCraft 0.8 (kilichotolewa 2026-11-01) na 0.8.1 (2026-11-02), ikilinganishwa na 0.7. Ufunguo wa alama sasa unaweza kuhesabiwa kwa seti yote mara moja, ukadiriaji mpya unaweza kuanza kutoka bei za kazi zako za awali, na ukadiriaji unaweza kukaguliwa dhidi ya hisa ya msambazaji. 0.8.1 ni toleo la kurekebisha.

### Mpya

**Hesabu kila kitu kwenye seti**

- **Zungushia ufunguo mara moja.** {{ui:Count everything}} kwenye upau wa zana inasoma ufunguo wa alama: buruta kisanduku kuzunguka alama na majina yaliyoandikwa karibu nazo. Kila alama inaorodheshwa pamoja na picha yake na jina lake, na jina hilo linakuwa jina la kipengee. Ondoa tiki ulichokitaka kisiwepo, kisha chagua {{ui:Hesabu kwenye karatasi N}}. Upau unaonyesha karatasi inayotafutwa, {{ui:Ghairi}} inasimamisha, na ukurasa unabaki unatumika.
- **Karatasi zote katika mzunguko mmoja.** Kila alama inahesabiwa kwenye kila karatasi iliyo wazi. Karatasi iliyochorwa kwa kipimo kingine inatafutwa kwa kipimo chake, na alama zinapatikana zikigeuzwa kwa pembe yoyote ya kulia. Alama za ufunguo zenyewe hazihesabiwi kwenye karatasi yake.
- **Kagua kabla ya kuongeza chochote.** Kila jumla ina kiungo kwa kila karatasi ("E-103: 4") kinachokupeleka kwenye karatasi hiyo. Bofya kisanduku kwenye matokeo ili kukiacha, na ubofye tena kukirudisha. Kiwango cha ulinganifu (50% hadi 100%) kinachuja tu kilichopatikana; hakuna utafutaji mwingine unaofanyika.
- **Hatua moja ya kutendua.** {{ui:Add N marks}} huunda kipengee cha hesabu kwa kila alama, pamoja na alama kwenye kila kilichopatikana. Jina ambalo tayari ni kipengee chako cha hesabu linatumika tena. {{key:Ctrl+Z}} inarudisha kila kipengee na alama. Unachokubali pia kinaingia kwenye {{ui:Learned}}.
- **Alama katika pembe yoyote.** Weka tiki {{ui:Symbols at any angle}} kabla ya kuhesabu ili pia kupata alama zilizogeuzwa kwa pembe isiyo ya kulia. Utafutaji kisha unageuza kila alama kila digrii 15, na alama isiyo ya duara inaweza kuchukua hadi mara sita zaidi ya muda.
- **Ni nini.** Ulinganishaji rahisi wa alama kwenye karatasi zako mwenyewe, bila modeli iliyofunzwa, na hakuna kinachoondoka kwenye kompyuta yako. Kwenye seti ya kubuni ya karatasi 200, ilichukua sekunde 9.4 kuanzia mwanzo hadi mwisho kwenye Chrome kwenye kompyuta ya mezani yenye kasi; seti halisi za mipango zitakuwa polepole zaidi. Angalia [Hesabu kila kitu kwenye seti](topic:count-everything).

**Kumbukumbu ya bei kutoka kazi zako mwenyewe**

- **TakeoffCraft inakumbuka viwango vyako.** Unapohifadhi ukadiriaji, kila kipengee chenye bei kinachotumika kinakumbukwa kwa jina na aina: kiwango cha nyenzo, kiwango cha kazi, upotevu na kitengo. Kazi 12 za mwisho zinahifadhiwa kwa kila jina. Inahifadhiwa kwenye kompyuta hii pamoja na Maktaba ya bei, kamwe ndani ya faili la ukadiriaji, na hakuna kinachotumwa popote.
- **Anza ukadiriaji mpya kutoka kwake.** {{ui:Prices}} kwenye upau wa zana inaonyesha, kwa kila kipengee, viwango vya kazi iliyopita, viwango vya kawaida na masafa. {{ui:Use last}} au {{ui:Use typical}} hupanga bei kipengee kimoja, na {{ui:Price N unpriced items from memory}} inajaza kila kipengee ambacho bado hakina bei. Kila matumizi ni hatua moja ya kutendua.
- **Kazi za zamani.** {{ui:Learn from a past takeoff…}} inakumbuka vipengee vilivyopangiwa bei vya ukadiriaji uliohifadhiwa (.json).
- **Ione, ibadilishe, isahau.** {{ui:Everything remembered}} inaorodhesha kila jina; kitufe cha pipa kinasahau moja, na {{ui:Clear all prices}} inasahau zote. Zima {{ui:Remember my prices when I save a takeoff}} ili kusimamisha. Bei kwa kila kipande kamwe haziwekwi kwenye kipengee cha kwa kila futi. Angalia [Kumbukumbu ya bei kutoka kazi zako za awali](topic:price-memory).

**Hisa na muda wa usambazaji**

- **Kagua dhidi ya orodha ya msambazaji.** {{ui:Supply}} kwenye upau wa zana inachukua orodha ya hisa ya msambazaji ({{ui:Add a supplier file…}}), CSV au jedwali, na kukagua kile ukadiriaji unachohitaji, pamoja na upotevu, dhidi yake. Hadi faili tano zinahifadhiwa. Hakuna kinachotumwa, na hakuna kinachouliza msambazaji: wewe ndiye unayeleta faili.
- **Inachosema.** Vipengee vyenye upungufu vinakuja kwanza: "Upungufu wa 120 EA", "Muda wa kusubiri siku 21", "Imeisha stoo, inasubiri", "Kipimo kinatofautiana", "Hakuna takwimu ya hisa" au "Ipo stoo". {{ui:Longest wait wanted (days)}} inaanza kwa 14.
- **Orodha ya kuagiza.** {{ui:Order list (CSV)}} inapakua vipengee vyenye upungufu pamoja na kiasi kilichopungua, msambazaji na muda wa kusubiri.
- **Bei kwenye Maktaba.** Faili likiwa na bei, {{ui:Prices into the Library}} huweka bei ya nyenzo ya kila ingizo la Maktaba lenye jina na kitengo kile kile. Panga bei upya kutoka Maktaba ili kuziingiza kwenye ukadiriaji.
- **Kwenye paneli ya Matatizo.** Upungufu ni onyo na muda mrefu wa kusubiri ni maelezo, chini ya "Hisa ya msambazaji". Unaweza kukubali mojawapo kwa sababu, na sababu inahifadhiwa kwenye ukadiriaji. Angalia [Kagua hisa ya msambazaji na muda wa usambazaji](topic:supplier-stock).

**Wasaidizi wa AI**

- **Zana kwa vyote vitatu.** Kwa wasaidizi walioruhusiwa kwenye {{ui:Mipangilio}}, msaidizi anaweza kusoma ufunguo wa alama (`legend_open`), kuendesha hesabu (`legend_count_start`, kisha `legend_count_status` na `legend_count_result`) na kuiongeza (`legend_count_add`, ambayo inaweza kuonyesha kwanza). Anaweza kusoma bei zilizokumbukwa (`prices_list`) na kupanga bei vipengee kutoka kwazo (`prices_apply`, ambayo inaweza kuonyesha kwanza), na kusoma ukaguzi wa msambazaji (`supply_check`). Kuongeza faili la msambazaji kunabaki kuwa kazi yako. Angalia [Tumia TakeoffCraft pamoja na wasaidizi wa AI](topic:use-with-ai-assistants).

**Katika kila programu**

- **Lugha.** Lugha hamsini na nne kwa jumla; kumi ni mpya (Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili na Kiuzbeki). Lugha zisizo za Kiingereza ni rasimu za mashine hadi mzungumzaji wa asili azisome.
- **Vifaa vya kuingiza.** {{ui:Mipangilio}} › {{ui:Global}} › {{ui:Input devices}} huweka kile ambacho pedi ya kugusa, vitufe vya kando vya kipanya, kalamu, kipanya cha 3D, kidhibiti cha mchezo au kidhibiti cha MIDI kinafanya, kwa kila programu au kwa moja. Angalia [Tumia pedi ya kugusa, kipanya cha 3D au kidhibiti](common:input-devices).
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:General}} › {{ui:Toolbar rows}} inatoa {{ui:Wrap}} (mwanzo), {{ui:2 rows}} na {{ui:1 row}}; vikundi visivyotoshea husogea kando. Angalia [Panga paneli](common:arrange-panels).
- **Paneli ya Matatizo.** Paneli ya pamoja ya maonyo na maelezo sasa ina ukaguzi wa hisa ya msambazaji hapo juu, pamoja na ukaguzi mwingine.
- **Nyongeza.** Nyongeza hufuata orodha ya akaunti yako. Angalia [Nyongeza na orodha ya akaunti yako](common:addons-basics).
- **Unganisha AI yako.** CadCraft Studio ndicho kitovu: unganisha msaidizi wako mara moja kwa programu zote nane. Studio haina AI yake yenyewe.

### Imerekebishwa katika 0.8.1

- **Sehemu ya madarasa ya DWG.** Sehemu ya madarasa ya faili la DWG ilisomwa kama aina isiyo sahihi. Hili limerekebishwa kwenye TakeoffCraft, na kwenye programu nyingine nne.
- **Studio inaweza kubadilisha lugha ikiwa inaendelea.** Hapo awali, Studio na matoleo yake yaliyofungashwa yalikuwa kwa Kiingereza pekee. Hili halijajaribiwa kwenye toleo la eneo-kazi kwenye kila jukwaa; tuambie lugha isipobadilika.

### Bado si katika toleo hili

- **Haijasainiwa kwa msimbo.** Windows inaweza kuonya, na kwenye Mac unabofya kulia na kuchagua {{ui:Open}} mara ya kwanza. Matoleo ya maduka (Microsoft Store, Google Play, App Store) yamesimamishwa, na muundo wa iPad na iPhone haukujengwa upya kwa 0.8.1.
- **Masasisho ya Studio.** Kisakinishi cha Windows na vifurushi vya Linux vinakagua mara moja kwa siku na kuuliza kwanza. Zip inayobebeka inakuambia tu, na macOS na APK hazijisasishi zenyewe. Faili la .dmg la macOS la 0.8 litafuata toleo.
- **Unganisha AI yako.** Muunganisho wa kubofya mara moja ndani ya Studio, kiunganishi kilichopangishwa cha AI kwenye kivinjari, ufunguo wako wa API ndani ya Studio na kifurushi kilichochapishwa cha MCP hazikuahidiwa katika toleo hili.
- **Hesabu kila kitu.** Inahitaji alama zilizochorwa kwa namna ile ile kama kwenye ufunguo, na alama yenye ukuta au mstari mrefu unaopita ndani yake inaweza kukosekana. Alama zilizogeuzwa kama kioo hazipatikani, na karatasi isiyo na kipimo iliyochorwa kwa ukubwa mwingine inatafutwa kwa ukubwa wa ufunguo. Kagua matokeo kwenye karatasi ya kwanza kabla ya kuamini zilizobaki.
- **Hisa ya msambazaji.** Takwimu za hisa ni za kisasa kama faili unaloongeza. Ukaguzi kamwe hauulizi msambazaji.
- **Lugha.** Upau wa programu wa Kitamil unafurika.

Kila kingine kiko kwenye [Bado haijajengwa](topic:not-built-yet). Kwa toleo lililotangulia, angalia [Kilicho kipya katika 0.7](topic:whats-new-0-7).
