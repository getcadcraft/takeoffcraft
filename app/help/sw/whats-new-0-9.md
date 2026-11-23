---
title: Nini kipya katika 0.9 (cha awali)
summary: Soma urefu kwa mita, sentimita au milimita, maeneo ya metriki kwa m2 pamoja na eneo la ukuta, mipangilio ya kipimo 1:75 na 1:150, vitengo vya uzito na halijoto, Tao lenye mbinu kumi, pamoja na viashiria vya moja kwa moja, Fuata na orodha ya watu.
keywords: nini kipya 0.9, toleo la awali, nini kipya, maelezo ya toleo, rekodi ya mabadiliko, 0.9, onyesha urefu kama, mita, sentimita, milimita, metriki, fuata global, vitengo, vitengo vya kuonyesha, m2, mita za mraba, eneo la ukuta, mipangilio ya kipimo, 1:75, 1:150, uzito, kilogramu, kg, tani, ton, lb, halijoto, selsiasi, fahrenheit, tao, mbinu za tao, tao la pointi 3, radius, moja kwa moja, viashiria, fuata, orodha ya watu, darasa, vidokezo, mpangilio, 0.8, 0.8.1, toleo, vipengele vipya, hesabu kila kitu, alama ya hadithi, seti nzima, kumbukumbu ya bei, kazi za awali, kazi ya mwisho, bei ya kawaida, msambazaji, stoo, muda wa kuletwa, oda iliyosubiri, orodha ya kuagiza, upungufu, paneli ya matatizo, msaidizi, lugha, vifaa vya kuingiza, safu za upau wa zana, dwg
from: f4322ba2
---

Hii ndiyo iliyobadilika katika TakeoffCraft 0.9, ikilinganishwa na 0.8.1. Ni toleo dogo kwa programu hii: urefu sasa unaweza kusomwa kwa mita, sentimita au milimita, maeneo na kipimo vinafuata kazi ya metriki ipasavyo, na Tao lina njia kumi za kuchora. Vipindi vya moja kwa moja pia vinaonyesha nani yuko wapi.

## Mpya

### Soma urefu kwa mita, sentimita au milimita

- **Onyesha urefu kama.** {{ui:Mipangilio}} › {{ui:TakeoffCraft}} ina {{ui:Onyesha urefu kama}} pamoja na {{ui:Fuata Global}}, {{ui:Futi-inchi}}, m, cm na mm. {{ui:Fuata Global}} hutumia kitengo cha urefu wa metriki ulichoweka nyota katika {{ui:Mipangilio}} › {{ui:Kimataifa}} › {{ui:Vitengo}}, na futi-inchi pale ambapo hakuna kilichowekwa nyota. Hubadilisha jinsi urefu unavyosomeka kwenye karatasi, kwenye upau wa hali na kwenye paneli, ikiwa ni pamoja na urefu, kina, unene na viwango. Nambari tupu iliyoandikwa kwenye sehemu ya urefu husomwa kwa kitengo kinachoonyeshwa.
- **Ni kuonyesha tu.** Kiasi, gharama na mauzo ya nje vinahesabiwa kutoka urefu halisi. Chaguo la 1/16, 1/8 na 1/4 ya inchi linaonekana kwa futi-inchi tu. Tazama [Onyesha urefu kwa mita](topic:show-lengths-in-meters).
- **Vitengo vya uzito.** Kipengee cha {{ui:Kiasi kilichoandikwa (hakuna mchoro)}} sasa kinaweza kuwa katika lb, TON, kg au t, na kupangiwa bei kwa kila kitengo.
- **Halijoto.** Kila kipengee kina sehemu ya hiari ya {{ui:Halijoto}} katika kihariri cha vipengee, iliyoandikwa kwa nyuzi C au F. {{ui:Onyesha halijoto kama}} katika {{ui:Mipangilio}} › {{ui:TakeoffCraft}} inatoa {{ui:Fuata Global}}, °C au °F.

### Maeneo na vipimo kwa kazi ya metriki

- **Maeneo kwa m2 kwenye mchoro.** Eneo lililopimwa kwa kipengee cha metriki sasa linasema m2 kwenye lebo ya mchoro na kwenye paneli ya alama, pamoja na jedwali, badala ya SF. Kanuni ni m2 kipengee kinapopangiwa bei kwa metriki au urefu unapoonyeshwa kwa m, cm au mm, na SF vinginevyo.
- **Eneo la ukuta.** Kipengee cha mstari chenye urefu pia kinaonyesha eneo lake la ukuta (urefu mara kimo) kwenye orodha ya Vipengee na kama safu ya maelezo chini ya jedwali la kiasi kwa kila kipengee.
- **Vipimo vilivyowekwa 1:75 na 1:150.** Viko kwenye orodha ya {{ui:Kipimo kilichowekwa}} ndani ya kikundi cha {{ui:Kipimo}}, ambacho sasa kina vipimo 32. Tazama [Vipimo vilivyowekwa](topic:scale-presets).

### Tao lenye mbinu kumi

- Wakati {{ui:Tao}} imewashwa (kitufe cha upau wa zana au {{key:R}}), kisanduku cha {{ui:Mbinu ya tao}} kinaonekana kwenye upau wa karatasi: Pointi 3, Mwanzo, Kituo, Mwisho; Mwanzo, Kituo, Pembe; Mwanzo, Kituo, Urefu; Mwanzo, Mwisho, Pembe; Mwanzo, Mwisho, Mwelekeo; Mwanzo, Mwisho, Radius; Kituo, Mwanzo, Mwisho; Kituo, Mwanzo, Pembe; na Kituo, Mwanzo, Urefu. Pembe, urefu, radius na mwelekeo vinaweza kubofywa au kuandikwa. Inafanya kazi kwenye mistari, maeneo na sehemu zilizokatwa. Mafaili yaliyohifadhiwa kabla ya 0.9 yanafunguka vile vile. Tazama [Chora matao kwa mbinu kumi](topic:draw-arcs-ten-methods).

### Kufanya kazi pamoja

- **Ona viashiria vya kila mmoja.** Katika kipindi cha moja kwa moja, kiashiria cha kila mtu kinaonekana kwenye karatasi pamoja na jina lake na rangi yake, pamoja na kisanduku chenye mistari nukta kuzunguka alama alizochagua. Watu walio kwenye karatasi nyingine wanaorodheshwa kwa jina la karatasi hiyo. Tazama [Fanya kazi moja kwa moja na wengine](topic:work-live).
- **Mfuate mtu, na orodha ya watu.** Kitufe cha {{ui:Watu}} katika kipindi cha moja kwa moja kinaorodhesha kila mtu pamoja na zana anayotumia, karatasi aliyopo na wakati alipohariri mara ya mwisho. {{ui:Fuata}} husogeza mwonekano wako pamoja na wake, na mwenyeji anaweza kutumia {{ui:Waambie wote wanifuate}}. Tazama [Mfuate mwenzako katika kipindi cha moja kwa moja](topic:follow-a-teammate).

## Katika kila programu

- **Vidokezo vya kipanya na kidokezo cha kuanza.** Maandishi yanayoonekana unapoelekeza kipanya ni kidokezo cha Bootstrap, na kidokezo cha kuanza kinaweza kufungwa.
- **Mistari ya vichupo inayosogea.** Mstari wa vichupo wa paneli usiotoshea unasogea badala ya kukatwa.
- **Vichwa vya vichupo.** Kichupo cha kivinjari kinasomeka `<hati> - TakeoffCraft | CadCraft`.
- **Mpangilio.** Orodha ya mpangilio katika {{ui:Mipangilio}} ni orodha kunjuzi inayoonyesha mpangilio uliochaguliwa.
- **Lugha.** Lugha utakayochagua sasa inafika kwenye maneno ambayo ukurasa wenyewe unachapisha, kama New, {{ui:Wazi}} na Save. Lugha nyingine isipokuwa Kiingereza ni rasimu za mashine hadi mzawa wa lugha hiyo aisome.

## Mipaka ya kweli

- Onyesho la urefu, vitengo vya uzito na halijoto, na vipimo vipya vilikaguliwa kwa majaribio na kwenye ukurasa. Kila paneli katika kila kitengo haijakaguliwa kwa mkono.
- Orodha ya watu haijakaguliwa kwa mkono na darasa halisi la mwalimu na wanafunzi.
- Lugha nyingine isipokuwa Kiingereza ni rasimu za mashine.
- Visakinishi vya Windows havijasainiwa kidijitali (More info, kisha Run anyway). Picha ya diski ya macOS haijathibitishwa na Apple (bonyeza kulia, kisha Open).

## Awali: 0.8 na 0.8.1

Hii ndiyo iliyobadilika katika TakeoffCraft 0.8 (iliyotolewa 2026-11-01) na 0.8.1 (2026-11-02), ikilinganishwa na 0.7. Alama ya hadithi sasa inaweza kuhesabiwa kwa seti nzima mara moja, kazi mpya inaweza kuanza kutoka bei za kazi zako za awali, na ukadiriaji unaweza kukaguliwa dhidi ya stoo ya msambazaji. 0.8.1 ni toleo la marekebisho.

### Mpya

**Hesabu kila kitu katika seti**

- **Zungushia hadithi mara moja.** {{ui:Hesabu kila kitu}} kwenye upau wa zana husoma alama ya hadithi: buruta kisanduku kuzunguka alama na majina yaliyochapishwa karibu nazo. Kila alama inaorodheshwa pamoja na picha na jina lake, na jina hilo linakuwa jina la kipengee. Ondoa tiki kwenye usichotaka, kisha chagua {{ui:Hesabu kwenye karatasi N}}. Upau unaonyesha karatasi inayotafutwa, {{ui:Ghairi}} inasimamisha zoezi, na ukurasa unabaki ukitumika.
- **Karatasi zote kwa zoezi moja.** Kila alama inahesabiwa kwenye kila karatasi iliyofunguliwa. Karatasi iliyochorwa kwa kipimo kingine inatafutwa kwa kipimo hicho, na alama zinapatikana zikigeuzwa pembe yoyote ya kulia. Alama za hadithi yenyewe hazihesabiwi kwenye karatasi yake.
- **Kagua kabla ya kuongeza chochote.** Kila jumla ina kiungo kwa kila karatasi ("E-103: 4") kinachokupeleka kwenye karatasi hiyo. Bofya kisanduku kwenye matokeo ili kukiacha, na bofya tena ili kukirudisha. Kiwango cha kulinganisha (50% hadi 100%) kinachuja tu kilichopatikana; hakuna utafutaji upya.
- **Hatua moja ya kutendua.** {{ui:Ongeza alama N}} hutengeneza kipengee cha hesabu kwa kila alama, chenye alama kwenye kila matokeo. Jina ambalo tayari ni kipengee chako cha hesabu hutumika tena. {{key:Ctrl+Z}} huondoa vipengee na alama zote. Unachokubali pia hulisha {{ui:Imejifunza}}.
- **Alama katika pembe yoyote.** Weka tiki kwenye {{ui:Alama katika pembe yoyote}} kabla ya kuhesabu ili pia kupata alama zilizogeuzwa kwa pembe isiyo ya kulia. Utafutaji kisha unageuza kila alama kila digrii 15, na alama isiyo ya duara inaweza kuchukua hadi mara sita zaidi.
- **Kinachofanya.** Ulinganishaji rahisi wa alama kwenye karatasi zako mwenyewe, bila modeli iliyofunzwa, na hakuna kinachotoka kwenye kompyuta yako. Kwenye seti ya kubuni ya karatasi 200, ilichukua sekunde 9.4 kutoka mwanzo hadi mwisho katika Chrome kwenye kompyuta ya haraka; seti halisi za michoro zitakuwa polepole zaidi. Tazama [Hesabu kila kitu katika seti](topic:count-everything).

**Kumbukumbu ya bei kutoka kazi zako**

- **TakeoffCraft inakumbuka viwango vyako.** Unapohifadhi ukadiriaji, kila kipengee kilichopangiwa bei kinachotumika kinakumbukwa kwa jina na aina: kiwango cha nyenzo, kiwango cha kazi, upotevu na kitengo. Kazi 12 za mwisho zinahifadhiwa kwa kila jina. Inahifadhiwa kwenye kompyuta hii pamoja na Maktaba ya bei, kamwe si ndani ya faili la ukadiriaji, na hakuna kinachotumwa popote.
- **Anza ukadiriaji mpya kutoka humo.** {{ui:Bei}} kwenye upau wa zana inaonyesha, kwa kila kipengee, viwango vya kazi ya mwisho, viwango vya kawaida na kiwango cha juu na cha chini. {{ui:Tumia ya mwisho}} au {{ui:Tumia ya kawaida}} hupanga bei ya kipengee kimoja, na {{ui:Weka bei kwa vitu N visivyo na bei kutoka kumbukumbu}} hujaza kila kipengee ambacho bado hakina bei. Kila matumizi ni hatua moja ya kutendua.
- **Kazi za zamani.** {{ui:Jifunze kutoka ukadiriaji wa awali…}} inakumbuka vipengee vilivyopangiwa bei vya ukadiriaji uliohifadhiwa (.json).
- **Ione, ibadilishe, isahau.** {{ui:Kila kilichokumbukwa}} inaorodhesha kila jina; kitufe cha takataka kinasahau jina moja, na {{ui:Futa bei zote}} inasahau yote. Zima {{ui:Kumbuka bei zangu ninapohifadhi ukadiriaji}} ili kusimamisha. Bei ya kila kipande haiwekwi kamwe kwenye kipengee cha kwa futi. Tazama [Kumbukumbu ya bei kutoka kazi zako za awali](topic:price-memory).

**Stoo ya msambazaji na muda wa kuletwa**

- **Kagua dhidi ya orodha ya msambazaji.** {{ui:Ugavi}} kwenye upau wa zana huchukua orodha ya stoo ya msambazaji ({{ui:Ongeza faili la msambazaji…}}), CSV au lahajedwali, na kukagua kile ukadiriaji unachohitaji, pamoja na upotevu, dhidi yake. Hadi faili tano zinahifadhiwa. Hakuna kinachotumwa na hakuna kinachouliza msambazaji: wewe unaleta faili.
- **Inachosema.** Vipengee vyenye upungufu vinakuja kwanza: "Upungufu wa 120 EA", "Muda wa kuletwa siku 21", "Oda iliyosubiri", "Kitengo kinatofautiana", "Hakuna takwimu ya stoo" au "Stoo ipo". {{ui:Muda mrefu zaidi unaokubalika (siku)}} huanza kwa 14.
- **Orodha ya kuagiza.** {{ui:Orodha ya kuagiza (CSV)}} inapakua vipengee vyenye upungufu pamoja na kiasi kilichopungua, msambazaji na muda wa kuletwa.
- **Bei kwenye Maktaba.** Faili likiwa na bei, {{ui:Bei kwenye Maktaba}} huweka bei ya nyenzo ya kila ingizo la Maktaba lenye jina na kitengo sawa. Panga upya kutoka Maktaba ili kuleta bei hizo kwenye ukadiriaji.
- **Katika paneli ya Matatizo.** Upungufu ni onyo na muda mrefu wa kusubiri ni kidokezo, chini ya "Stoo ya msambazaji". Unaweza kukubali mojawapo kwa sababu, na sababu hiyo inahifadhiwa kwenye ukadiriaji. Tazama [Kagua stoo ya msambazaji na muda wa kuletwa](topic:supplier-stock).

**Wasaidizi wa AI**

- **Zana kwa wote watatu.** Wasaidizi wakiruhusiwa katika {{ui:Mipangilio}}, msaidizi anaweza kusoma alama ya hadithi (`legend_open`), kuendesha hesabu (`legend_count_start`, kisha `legend_count_status` na `legend_count_result`) na kuiongeza (`legend_count_add`, ambayo inaweza kuonyesha onyesho kwanza). Anaweza kusoma bei zilizokumbukwa (`prices_list`) na kupanga bei za vipengee kutoka kwake (`prices_apply`, ambayo inaweza kuonyesha onyesho kwanza), na kusoma ukaguzi wa msambazaji (`supply_check`). Kuongeza faili la msambazaji bado ni kazi yako. Tazama [Tumia TakeoffCraft pamoja na wasaidizi wa AI](topic:use-with-ai-assistants).

**Katika kila programu**

- **Lugha.** Lugha hamsini na nne kwa jumla; kumi ni mpya (Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili na Kiuzbeki). Lugha nyingine isipokuwa Kiingereza ni rasimu za mashine hadi mzawa wa lugha hiyo aisome.
- **Vifaa vya kuingiza.** {{ui:Mipangilio}} › {{ui:Kimataifa}} › {{ui:Vifaa vya kuingiza}} huweka kile ambacho pedi ya kugusa, vitufe vya pembeni vya kipanya, kalamu, kipanya cha 3D, kidhibiti cha mchezo au kidhibiti cha MIDI kinafanya, kwa kila programu au kwa moja. Tazama [Tumia pedi ya kugusa, kipanya cha 3D au kidhibiti](common:input-devices).
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Safu za upau wa zana}} inatoa {{ui:Funga kwenye mstari}} (mwanzo), {{ui:Safu 2}} na {{ui:Safu 1}}; vikundi visivyotoshea husogea kando. Tazama [Panga paneli](common:arrange-panels).
- **Paneli ya matatizo.** Paneli ya pamoja ya maonyo na vidokezo sasa inabeba ukaguzi wa stoo ya msambazaji hapo juu, pamoja na ukaguzi mwingine.
- **Viongezi.** Viongezi vinafuata orodha ya akaunti yako. Tazama [Viongezi na orodha ya akaunti yako](common:addons-basics).
- **Unganisha AI yako.** CadCraft Studio ndiyo kitovu: unganisha msaidizi wako mara moja kwa programu zote nane. Studio haina AI yake yenyewe.

### Imerekebishwa katika 0.8.1

- **Sehemu ya madarasa ya DWG.** Sehemu ya madarasa ya faili la DWG ilisomwa kama aina isiyo sahihi. Hili limerekebishwa katika TakeoffCraft, na katika programu nyingine nne.
- **Studio inaweza kubadili lugha ikiwa inafanya kazi.** Kabla ya hapo, Studio na matoleo yake yaliyofungashwa yalikuwa kwa Kiingereza pekee. Hili halijajaribiwa katika toleo la eneo-kazi kwenye kila jukwaa; tuambie kama lugha haibadiliki.

### Bado si katika toleo hili

- **Hazijasainiwa kidijitali.** Windows inaweza kuonya, na kwenye Mac unabonyeza kulia na kuchagua {{ui:Wazi}} mara ya kwanza. Matoleo ya duka (Microsoft Store, Google Play, App Store) yamesimamishwa, na toleo la iPad na iPhone halikujengwa upya kwa 0.8.1.
- **Masasisho ya Studio.** Kisakinishi cha Windows na vifurushi vya Linux vinakagua mara moja kwa siku na kuuliza kwanza. Zip inayobebeka inakuambia tu, na macOS na APK hazijisasishi zenyewe. Faili la .dmg la macOS la 0.8 linafuata toleo.
- **Unganisha AI yako.** Kuunganisha kwa mbofyo mmoja ndani ya Studio, kiunganishi kilichopangishwa cha AI kwenye kivinjari, ufunguo wako wa API ndani ya Studio na kifurushi cha MCP kilichochapishwa hakiahidiwi katika toleo hili.
- **Hesabu kila kitu.** Inahitaji alama zilizochorwa kwa njia ile ile kama kwenye alama ya hadithi, na alama yenye ukuta au mstari mrefu unaopita ndani yake inaweza kukosekana. Alama zilizoakisiwa hazipatikani, na karatasi isiyo na kipimo iliyochorwa kwa ukubwa mwingine inatafutwa kwa ukubwa wa alama ya hadithi. Kagua matokeo kwenye karatasi ya kwanza kabla ya kuamini zilizobaki.
- **Stoo ya msambazaji.** Takwimu za stoo ni za kisasa kama faili unaloongeza tu. Ukaguzi kamwe hauulizi msambazaji.
- **Lugha.** Upau wa programu wa Kitamil unazidi nafasi yake.

Kila kitu kingine kiko katika [Bado halijajengwa](topic:not-built-yet). Kwa toleo lililotangulia hili, tazama [Nini kipya katika 0.7](topic:whats-new-0-7).
