---
title: Unda vipengee vya ukadiriaji wa kiasi
summary: Tengeneza vipengee vya mstari, eneo na hesabu, kisha uweke kitengo, kimo au kina, upotevu, na viwango vya nyenzo na kazi.
keywords: kikundi, kiwango cha uzalishaji, ukubwa wa kikundi, mshahara, saa, saa za watu, saa za wafanyakazi, siku za kikundi, saa za kazi, kipengee, kipengee kipya, hali, hali nyingi, pima pia, aina kadhaa, chumba, mstari, eneo, hesabu, kiasi kilichoandikwa, kitengo, kimo, kina, upotevu, nyenzo, kazi, kiwango, rangi, gharama
from: 7fa5effc
---

**Kipengee** ni kitu kimoja unachopima na kukipangia bei: aina ya ukuta, umaliziaji wa sakafu, dari, mlango, kifaa cha taa. Kila alama unayochora ni ya kipengee. Programu nyingine huviita masharti.

Kila kipengee kina aina (na kinaweza kuchukua aina nyingine za alama pia, tazama [Kipengee kimoja, aina kadhaa za alama](topic:create-items#one-item-several-kinds-of-marks)):

| Andika | Unachochora | Inaripoti | Vitengo |
|---|---|---|---|
| Mstari | Mfululizo wa nukta zilizounganishwa | Urefu, idadi ya mikondo, na eneo la ukuta likiwa na kimo | LF au m |
| Eneo | Mistari funge yenye sehemu zilizokatwa | Eneo, mzunguko, idadi ya maeneo | SF, SY, SQ, ac, ha au m² |
| Hesabu | Bofya moja kwa kila kitu | Ngapi | EA |
| Kiasi kilichoandikwa | Hakuna: unaandika kiasi | Nambari uliyoandika (au moja iliyoletwa kutoka CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha au m² |

## Kiasi kilichoandikwa (bila mchoro)

Baadhi ya vitu katika makadirio hayachorwi kamwe: uhamasishaji, vibali, akiba ya dharura, mkataba mdogo wa jumla, na ukataji na ujazaji ambao CivilCraft ilihesabu. Vifanye kuwa **Kiasi kilichoandikwa**:

1. Chagua {{ui:Kipengee kipya}}, andika jina, chagua {{ui:Kiasi kilichoandikwa (hakuna mchoro)}} kisha uchague {{ui:Ongeza}}.
2. Katika kihariri cha kipengee, chagua {{ui:Kitengo}} (LS kwa jumla ya kiasi) kisha uandike {{ui:Kiasi}}: `1`, `2.5` au `1,250`.
3. Weka upotevu na viwango kama kwa kipengee kingine chochote. Fomula za mkusanyiko hutumia `Q`, yaani kiasi, kwa mfano `ceil(Q / 12)` mizigo ya malori.

Kiasi kilichoandikwa hakichukui alama kamwe, na hakifanyi makadirio kuwa hayajakamilika. Makadirio yanapokuwa na {{ui:Eneo la zabuni}}, kihariri pia kina {{ui:Eneo la zabuni}}: kiasi basi huhesabiwa katika eneo hilo, mbadala zake na jumla zake, kama vile alama ingekavyofanya hapo. Viasi vilivyoletwa kutoka programu nyingine vinaonyesha vilikotoka; tazama [Uchimbaji na pointi za mwinuko](topic:earthwork#cut-and-fill-from-civilcraft).

## Tengeneza kipengee

1. Katika paneli ya {{ui:Vipengee}} upande wa kulia, chagua {{ui:Kipengee kipya}}.
2. Andika jina, kama `Aina ya ukuta wa ndani A` au `Vigae vya zulia`.
3. Chagua aina: {{ui:Mstari (urefu)}}, {{ui:Eneo}} au {{ui:Hesabu}}.
4. Chagua {{ui:Ongeza}} (au bonyeza {{key:Enter}}).
   Kipengee kinaonekana kwenye orodha kikiwa na rangi yake, kinakuwa kipengee utakachochora nacho, na kihariri chake kinafunguka chini ya orodha. Upau wa hali unakuambia zana ya kuchagua inayofuata.

Bonyeza {{key:Esc}} kwenye fomu ili kuifunga bila kuongeza kipengee.

:::tip
Ukichagua zana ya kupima kwanza, TakeoffCraft hutumia kipengee cha mwisho cha aina sahihi, au hufungua fomu ya {{ui:Kipengee kipya}} ikiwa aina hiyo tayari imechaguliwa.
:::

## Chagua kipengee utakachochora nacho

Bofya kipengee kwenye orodha. Kinakuwa kipengee ambacho alama mpya huenda kwake, na alama zake huangaziwa kwenye kila karatasi huku vingine vikififia. Kama karatasi iliyofunguliwa haina alama zake, TakeoffCraft inaruka hadi karatasi yenye alama hizo. Bofya kipengee tena ili kusimamisha kuangazia; bado kinabaki kipengee utakachochora nacho.

Kubofya alama kwa zana ya {{ui:Chagua}} pia hufanya kipengee chake kuwa cha sasa.

## Sanidi kipengee

Kihariri cha kipengee (**Kipengee: (jina)**) kina sehemu hizi. Kila moja huhifadhiwa unapotoka kwenye sehemu hiyo au unapobonyeza {{key:Enter}}, na kila mabadiliko yanaweza kutenduliwa.

| Sehemu | Inachofanya |
|---|---|
| {{ui:Jina}} | Inaonyeshwa kwenye orodha, majedwali na mauzo ya nje. |
| {{ui:Andika}} | Mstari, Eneo au Hesabu. Imefungwa mara kipengee kikiwa na alama ("Kipengee chenye alama kinabaki na aina yake"). |
| {{ui:Rangi}} | Rangi ya alama zake kwenye skrini na kwenye PDF iliyowekewa alama. |
| {{ui:Kitengo}} | Kiasi kinaripotiwa kwa kitengo gani: LF au m kwa mstari; SF, SY, SQ, ac, ha au m² kwa eneo; EA kwa hesabu. |
| {{ui:Pima pia}} | Aina nyingine za alama ambazo kipengee kinazichukua, kila moja na kitengo chake. Tazama hapa chini. |
| {{ui:Kimo}} (mstari) | Kimo cha ukuta. Kipengee basi pia huripoti eneo la ukuta (urefu × kimo). Mikondo iliyotoka kwenye modeli ya BimCraft hubeba milango na madirisha yake: hizo hutolewa mara moja, na kipengee kinasema eneo ghafi, nafasi zilizo wazi na eneo halisi. Makadirio kutoka mradi wa BimCraft uliochagua mbinu ya kupima hupimwa kwa mbinu hiyo hapa pia (dokezo linataja mbinu, chanzo chake, na kwamba mpima viasi hajaikagua); mbinu haiwezi kubadilishwa kwenye TakeoffCraft. Matofali au vizuizi na chokaa kutoka aina ya ukuta vinafika kama vipengele viwili: vitengo vya kuagiza na ujazo wa chokaa. |
| {{ui:Kina}} (eneo) | Kina au unene, kinachotumika kwenye fomula za mkusanyiko (kwa mfano ujazo wa zege). |
| {{ui:Upotevu %}} | Kinaongezwa kwenye kiasi kabla ya kupanga bei: 10 maana yake kiasi × 1.10. |
| {{ui:Nyenzo $/LF}} | Gharama ya nyenzo kwa kila kitengo. Lebo inafuata kitengo: $/SF, $/EA na kadhalika. |
| {{ui:Kazi $/LF}} | Gharama ya kazi kwa kila kitengo. |
| {{ui:Nambari ya CSI}} | Nambari yake ya CSI MasterFormat, kama `09 21 16` (au mgawanyo tu, `09`). Laha ya kazi ya By division ya kitabu cha kazi hupanga gharama kwa nambari hiyo. Vipengee kutoka [vifurushi vya biashara](topic:trade-packs) tayari vina nambari hiyo. |

Kimo na kina hupokea futi na inchi (`9'-0"`, `8' 6"`) au futi za desimali (`9`) kwa vitengo vya kifalme, na mita (`2.7`, `2700 mm`) kwa vitengo vya metri. Viwango hupokea kiasi kama `12.50` au `$1,250`, hadi desimali nne. Tazama [Uingizaji wa urefu, kiwango na asilimia](topic:entry-formats).

Chini ya sehemu, **Imepimwa** inaonyesha jumla ambazo fomula za kipengee zinaweza kutumia, pamoja na herufi zake: Urefu (L), Mikondo (N), Eneo la ukuta (A) kwa mstari; Eneo (A), Mzunguko (P), Maeneo (N) kwa eneo; Hesabu (N) kwa hesabu.

## Aina kadhaa za alama kwa kipengee kimoja

Vitu vingine hupimwa kwa njia zaidi ya moja: chumba kina sakafu (eneo), msingi kando ya kuta zake (urefu) na milango (hesabu). Badala ya vipengee vitatu, tengeneza kimoja:

1. Tengeneza kipengee chenye aina yake kuu, kama kipengee cha eneo `Chumba 101`.
2. Chini ya {{ui:Pima pia}} kwenye kihariri chake, weka tiki {{ui:Mstari}}, {{ui:Hesabu}} au zote mbili. Kila moja hupata kitengo karibu nayo.
3. Chora kwa zana yoyote ambayo aina yake kipengee kinachukua: `Chumba 101` kikiwa cha sasa, {{ui:Eneo}} huchora sakafu yake, {{ui:Mstari}} huchora msingi wake, na {{ui:Hesabu}} huchora milango yake. TakeoffCraft haiulizi kipengee kingine.

Orodha ya vipengee inaonyesha kila kiasi (`50.00 SF + 2 EA`). Kwenye jedwali la viasi, safu ya kipengee ina kiasi chake kikuu, na kila aina nyingine ina safu yake chini yake, kama **Chumba 101 (hesabu)**, yenye upotevu wake na viwango vyake vya nyenzo na kazi. Mauzo ya nje, jedwali la kila karatasi, na maelezo ya alama ya PDF iliyowekewa alama yanayaorodhesha kwa njia hiyo hiyo.

Sehemu za aina kuu zinabaki za aina kuu: kimo au kina, mwelekeo, kurudishwa nyuma na umbo la 3D yanatumika kwa alama zake tu. Mstari wa msingi uliochorwa kwa kipengee cha eneo hupimwa moja kwa moja kando ya mpango, na huonyeshwa bapa kwenye 3D. Fomula za mkusanyiko hutumia jumla za aina kuu.

Aina inaweza kuondolewa tu wakati kipengee hakina alama zake; zifute, au kwanza zihamishe kwenye kipengee kingine chini ya **Alama iliyochaguliwa**. Alama zinaweza kuhamia kipengee chochote kinachochukua aina yao.

Zaidi chini ni {{ui:Mkusanyiko}}: vipengele kama vijiti au ubao, kila kimoja na fomula na viwango vyake. Tazama [Mikusanyiko na fomula](topic:assemblies).

Chini kabisa: {{ui:Sogeza juu}} na {{ui:Sogeza chini}} hubadilisha nafasi ya kipengee kwenye orodha na mauzo ya nje, na {{ui:Futa kipengee}} huondoa kipengee pamoja na alama zake zote (baada ya kuuliza; unaweza kutengua).

Vipengee vya eneo pia vina **Mteremko** (ndege za paa zinazopimwa kwenye mteremko: [Paa na miteremko](topic:roofs-and-slopes)) na **Kurudisha nyuma** (alama zake hutolewa kwenye maeneo ya vipengee vingine: [Pima maeneo](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Vipengee vya mstari vina **Mwelekeo** (Level, Rake, Hip au valley) na, kwa rake na hip, **Mteremko**.

## Viwango kwenye jedwali

Unaweza pia kuandika {{ui:Upotevu %}}, viwango vya nyenzo na kazi moja kwa moja kwenye jedwali la {{ui:Viasi}} chini ({{ui:Kwa kipengee}}). Ni mpangilio uleule kama kwenye kihariri.

## Bei inavyofanya kazi

Kwa kila kipengee na kila kipengele cha mkusanyiko:

1. **Pamoja na upotevu** = kiasi × (1 + upotevu %).
2. **Nyenzo** = pamoja na upotevu × nyenzo kwa kitengo, imezungushwa hadi senti.
3. **Kazi** = pamoja na upotevu × kazi kwa kitengo, imezungushwa hadi senti.
4. **Jumla** = nyenzo + kazi.

{{ui:Jumla ya kazi}} inaongeza kila kipengee na kila kipengele. Kipengee kinaweza kubeba viwango vyake na mkusanyiko kwa wakati mmoja; zote mbili zinahesabiwa, kwa hiyo acha viwango vya kipengee kuwa 0 pale vipengele vyake vinapobeba gharama.

## Kazi kwa kikundi cha wafanyakazi

Badala ya kiwango cha kazi kwa kila kitengo, kazi ya kipengee inaweza kutoka kwa kikundi: kinafanya kiasi gani kwa saa, watu wangapi, na kila mmoja analipwa kiasi gani. Chini ya {{ui:Kazi kwa kikundi cha wafanyakazi}} kwenye kihariri cha kipengee, weka tiki {{ui:Piga bei ya kazi kutoka kikundi cha wafanyakazi}} kisha ujaze:

| Sehemu | Mfano |
|---|---|
| {{ui:Uzalishaji}} | `20` LF kwa saa (katika kitengo cha kipengee) kwa kikundi kizima |
| {{ui:Ukubwa wa kikundi}} | `2` watu |
| {{ui:Mshahara $/saa kwa kila mtu}} | `45` |

TakeoffCraft inahesabu, kutoka kiasi pamoja na upotevu:

- **saa-za-kikundi** = kiasi ÷ uzalishaji (110 LF ÷ 20 = 5.5),
- **saa-za-wafanyakazi** = saa-za-kikundi × ukubwa wa kikundi (11),
- **siku-za-kikundi** = saa-za-kikundi ÷ 8 (0.69),
- **kazi** = saa-za-wafanyakazi × mshahara ($495.00).

Kihariri kinaonyesha matokeo na kiwango kinachotokana nayo ($4.50/LF). Kiwango cha kazi cha kipengee chenyewe basi kinakuwa cha kusoma tu, kwenye kihariri na kwenye jedwali. Kichwa cha jedwali la {{ui:Viasi}} kinaongeza saa-za-wafanyakazi na siku-za-kikundi za kazi nzima. Mauzo ya nje yanaonyesha saa za kila kikundi, na kwenye kitabu cha kazi seli ya kazi ni fomula kwenye kikundi (`ROUND(F2/20*2*45,2)`). Ondoa tiki kwenye kisanduku ili kurudi kwenye kiwango kwa kila kitengo.

## Vipengee vya metri

Chagua m (mstari) au m² (eneo) kama kitengo. Viasi, vimo na thamani za fomula basi ziko kwenye mita. Kiwango cha karatasi kinaweza kuwa chochote kilichowekwa awali au kilichopimwa; vitengo na viwango havitegemeani.

## Inayofuata

- [Pima mikondo ya mstari](topic:measure-linear)
- [Pima maeneo yenye sehemu zilizokatwa](topic:measure-areas)
- [Hesabu kwa mkono](topic:count-by-hand)
