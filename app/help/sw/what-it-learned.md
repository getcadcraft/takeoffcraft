---
title: Kilichojifunzwa kutoka kwenye ukadiriaji wako
summary: TakeoffCraft huweka alama ulizothibitisha kwa Hesabu otomatiki, seti zako za masharti, mikusanyiko unayotumia zaidi na mifumo unayorudia kwenye kila ukurasa, yote ndani ya faili la ukadiriaji lenyewe. Ione, itumie, ifute.
keywords: jifunze, kilichojifunzwa, kujifunza, msaidizi, kumbuka, alama, violezo, sawa na kazi iliyopita, kazi iliyopita, seti ya masharti, masharti, tumia tena, mikusanyiko, inayotumika zaidi, mapendekezo, rudia kwenye kila ukurasa, kila ukurasa, kichwa cha mchoro, mfumo, futa zote, sahau, faragha
from: 54d99e99
---

TakeoffCraft inakuwa haraka zaidi kadiri unavyofanya ukadiriaji nayo. Inajifunza **kutoka kwa unachokubali pekee**:

- alama ulizozungushia kisanduku kwa [Hesabu otomatiki](topic:auto-count) kisha ukaziongeza,
- seti za masharti unazozihifadhi,
- mikusanyiko unayotumia (mara moja kwa kila kazi),
- mifumo ya alama unazorudia kwenye kila ukurasa.

Ni ulinganishaji rahisi kwenye karatasi zako mwenyewe, utafutaji uleule ambao Hesabu otomatiki inaufanya. Si modeli iliyofunzwa. Kila kitu inachojifunza kinahifadhiwa **kwenye faili la ukadiriaji huu** (`.takeoff.json`), na hakuna kinachotumwa popote. Ili kukipeleka kwenye kazi inayofuata, tumia [Sawa na kazi iliyopita](topic:what-it-learned#same-as-last-job).

Chagua {{ui:Imejifunza}} kwenye upau wa zana (balbu ya taa, karibu na {{ui:Hesabu otomatiki}}) ili kuona yote.

## Alama

Unapozungushia alama kisanduku kwa {{ui:Hesabu otomatiki}} na kuchagua {{ui:Ongeza}}, alama uliyozungushia inahifadhiwa, pamoja na kiwango cha ulinganifu ulichokubali.

- Kwenye {{ui:Imejifunza}}, chagua {{ui:Tafuta kwenye karatasi hii}} au {{ui:Tafuta kwenye karatasi zote}}. Ukaguzi wa kawaida wa Hesabu otomatiki unafunguka: bofya kisanduku ili kukiacha, sogeza kitelezi, kisha uziongeze. Hakuna kinachoongezwa hadi ufanye hivyo.
- Unapofungua karatasi isiyo na alama yoyote kati ya zilizojifunzwa, upau wa juu unatoa {{ui:Tafuta …}} kwa ajili yake. {{ui:Si sasa}} inaificha kwa karatasi hiyo.
- Ikiwa ukadiriaji hauna kipengee chenye jina hilo, kuongeza alama pia kunaongeza kipengee (hatua moja ya kutendua).
- Kuongeza tena alama ya kipengee kile kile kunahesabiwa kwenye kile kinachojulikana; alama inayoonekana tofauti inahifadhiwa kama ya pili.
- Kama Hesabu otomatiki, inapata alama iliyogeuzwa kwa pembe za kulia na kwenye karatasi zenye kipimo tofauti.

## Seti za masharti

Seti inahifadhi masharti ya ukadiriaji (vipengee vyenye vitengo, viwango, upotevu na mikusanyiko), bila alama.

1. Kwenye {{ui:Imejifunza}}, chagua {{ui:Hifadhi masharti ya ukadiriaji huu kama seti…}} kisha upe jina. Seti yenye jina lile lile inabadilishwa.
2. Kwenye ukadiriaji ulio na seti, {{ui:Ongeza}} inaweka masharti ambayo bado hayapo. Masharti yenye jina na aina ile ile yanaachwa. Ni hatua moja ya kutendua.

## Sawa na kazi iliyopita

Faili la kazi yako ya mwisho lina kilichojifunza. Ili kuanza kazi mpya kutoka kwake:

1. Fungua mipango mipya, kisha chagua {{ui:Imejifunza}} › {{ui:Sawa na kazi iliyopita…}}.
2. Chagua `.takeoff.json` ya kazi ya mwisho.
3. Chagua kile cha kuleta: masharti yake (yale tu ambayo ukadiriaji huu hauna), na kilichojifunza (alama, seti, mikusanyiko, mifumo). Kisha {{ui:Ziingize}}.

Masharti yake pia yanahifadhiwa kama seti yenye jina la kazi hiyo. Alama na kiasi chake vinabaki kwenye faili lake lenyewe. Yote kwa pamoja ni hatua moja ya kutendua.

## Mikusanyiko unayotumia zaidi

Kipengee chenye mkusanyiko kinahesabiwa kuwa kimetumika mara moja kwa kila kazi, kinapokuwa na kiasi na unapohifadhi ukadiriaji. Kazi ni seti ya faili za mipango ambayo ukadiriaji unachukuliwa kutoka kwake, kwa hiyo kuhifadhi ukadiriaji huo tena hakuhesabiwi mara mbili. Orodha iliyo chini ya {{ui:Mikusanyiko unayotumia zaidi}} inaweka zile unazotumia zaidi juu. Inaacha zile ambazo ukadiriaji huu tayari unazo. {{ui:Ongeza}} inaweka moja kama ulivyoitumia mara ya mwisho, pamoja na sehemu zake zote.

## Rudia kwenye kila ukurasa

Kwa alama zinazofanana kwenye kila ukurasa wa seti, kama hesabu ya kichwa cha mchoro au maelezo ya kawaida:

1. Chagua alama kwenye karatasi moja ([Chagua alama](topic:copy-paste#select-the-marks)).
2. Kwenye {{ui:Imejifunza}}, chagua {{ui:Rudia alama zilizochaguliwa kwenye kila ukurasa…}}, upe mfumo jina, kisha uthibitishe.

Zinawekwa kwenye kila ukurasa mwingine uliofunguliwa **wa ukubwa uleule**, mahali pale pale, kwa hatua moja ya kutendua. Urefu na maeneo yanawekwa kwenye kurasa zenye kipimo kile kile pekee; hesabu zinawekwa kwenye ukurasa wowote wa ukubwa huo. Ukurasa ambao tayari unazo unaruka. Mfumo unahifadhiwa, kwa hiyo kurasa utakazozifungua baadaye zitapata pendekezo kwenye upau, au unaweza kutumia {{ui:Rudia kwenye kila ukurasa}} kwenye orodha.

## Ione, ifute

Kila kitu kilichojifunzwa kimeorodheshwa kwenye {{ui:Imejifunza}}. Pipa linafuta kitu kimoja. {{ui:Futa zote}} inafuta kila kilichojifunzwa na kuacha vipengee na alama zako vilivyo. Zote mbili zinaweza kutenduliwa hadi ufunge ukadiriaji, na zote mbili zinahifadhiwa pamoja na ukadiriaji.

Ili kuacha kujifunza kwenye ukadiriaji mmoja, ondoa tiki kwenye {{ui:Jifunze kutoka kwa ukadiriaji huu}}. Hakuna kinachojifunzwa kipya, na kilichoorodheshwa kinabaki hadi ukifute.

## Vizuri kujua

- Matoleo ya zamani ya TakeoffCraft yanafungua faili lenye mambo yaliyojifunzwa kawaida. Yanapuuza sehemu hiyo, na yanaiondoa yakihifadhi faili tena.
- Alama iliyojifunzwa ni picha ndogo ya ulichozungushia kisanduku, inayohifadhiwa kwenye faili (kilobaiti chache kila moja).
- Alama zilizojifunzwa zinatafutwa kama Hesabu otomatiki inavyotafuta, kwa hiyo mipaka ile ile inatumika: [Hesabu otomatiki ya alama](topic:auto-count).
