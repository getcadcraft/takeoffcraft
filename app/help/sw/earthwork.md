---
title: Kazi za ardhi na miinuko ya nukta
summary: Weka alama za miinuko ya nukta kwenye mpango wa eneo, zipeleke CivilCraft kwa uso na ukataji na ujazaji, na chukua viasi rahisi vya uchimbaji hapa.
keywords: kazi za ardhi, uchimbaji, ukataji, ujazaji, ukataji na ujazaji, usawazishaji, miinuko ya nukta, miinuko, topo, uso, utriangulishaji, civilcraft, nukta, pnezd, mfereji
from: a898e508
---

TakeoffCraft hupima kile kilichochorwa kwenye karatasi. Kazi za ardhi zinahitaji uso wa ardhi, kwa hiyo zinashirikiwa na CivilCraft, ambayo hujenga nyuso kutoka kwa nukta, huzisawazisha na kukokotoa ukataji na ujazaji pamoja na usafirishaji.

## Uchimbaji rahisi hapa

Kwa eneo la msingi lililochimbwa kwa kina kimoja, kipengee cha eneo chenye **kina** kinatosha: ujazo ni eneo × kina. [Kifurushi cha mkandarasi mkuu](topic:trade-packs) kina kipengee cha uchimbaji wa wingi (ujazo wa ardhi asilia, ujazo uliolegea na idadi ya malori) na kipengee cha mfereji wa huduma (uchimbaji, kitanda na kujaza nyuma kwa urefu na kina).

## Miinuko ya nukta kwa CivilCraft

1. Weka skeli ya karatasi ya eneo.
2. Tengeneza kipengee cha **Hesabu**, kwa mfano "Ardhi iliyopo", kisha ubofye kila miinuko ya nukta kwenye karatasi.
3. Chagua alama na uandike {{ui:Mwinuko}} yake kwenye paneli ya Alama Zilizochaguliwa: `102.5`, `102'-6"` au `31.24 m`. Miinuko hasi na sifuri ni sawa.
4. Fungua menyu ya {{ui:Hamisha}} na uchague {{ui:Miinuko ya nukta}}. Utapata faili la nukta (`.csv`) lenye Point, Northing, Easting, Elevation na Description, safu moja kwa kila nukta iliyowekewa alama kwenye karatasi iliyofunguliwa.
5. Fungua faili hilo kwenye CivilCraft (tazama [Ingiza nukta](app:civilcraft/import-points)). Kisha hujenga uso kutoka kwa nukta ([Jenga uso](app:civilcraft/build-surface)); kutoka hapo inalinganisha nyuso na kutoa ukataji na ujazaji ([Ujazo](app:civilcraft/volumes)).

Northing na easting ni viratibu vya karatasi yenyewe katika futi, vinavyopimwa kutoka kona ya ukurasa kwa skeli yake: umbali na ujazo kati ya nukta ni sahihi, lakini si viratibu vya upimaji wa eneo lako. Hamishia kwenye viratibu vya eneo katika CivilCraft unapovihitaji.

:::note
Nukta kutoka karatasi tofauti hazishiriki viratibu, kwa hiyo hamisha huchukua karatasi iliyofunguliwa pekee. Miinuko huhifadhiwa pamoja na ukadiriaji na hubebwa kwa kunakili na kubandika.
:::

## Ukataji na ujazaji kutoka CivilCraft

Kazi za ardhi za CivilCraft hurudi kama vipengee viwili unavyoweza kupangia bei:

1. Katika CivilCraft, sawazisha pedi na korido zako, kisha uchague {{ui:Tuma kwa TakeoffCraft}} chini ya **Kazi za ardhi** ([Ujazo wa kazi za ardhi](app:civilcraft/volumes)). Hii huhifadhi faili la viasi (`.quantities.json`).
2. Katika TakeoffCraft, lifungue kwa {{ui:Fungua ukadiriaji}}, au liangushe kwenye programu. Ukadiriaji wako unabaki wazi: faili huongeza **Earthwork: cut** na **Earthwork: fill** kama [viasi vilivyoandikwa](topic:create-items#typed-quantities-no-drawing) katika yadi za ujazo (CY) kwa mradi wa futi, au mita za ujazo (m³) kwa mradi wa mita. Ni hatua moja: {{key:Mod+Z}} inairudisha.
3. Zipe majina, weka upotevu, viwango na mikusanyiko upendavyo.

Muundo ukibadilika, tuma tena kutoka CivilCraft na ufungue faili jipya: vipengee viwili vilevile vitapata viasi vipya. Majina, viwango, upotevu na mikusanyiko yao vinabaki kama ulivyoweka. Kitengo cha mradi kikibadilika, upau wa hali unaonyesha hivyo: kagua viwango. Faili kutoka mradi mwingine wa CivilCraft huongeza vipengee vyake viwili.

Viasi ni ujazo wa ardhi asilia, kama CivilCraft ulivyopima (mbinu ya gridi): hakuna kupungua wala kuvimba. Viongeze kama upotevu, au kwa fomula kama `Q * 1.25` kwa ujazo uliolegea. Mhariri wa kipengee unaonyesha kila kimoja kilitoka wapi na lini; safu ya maelezo ya makadirio pia inasema hivyo.

:::note
Faili la viasi ni JSON tupu (`"format": "cadcraft-quantities"`), kwa hiyo hati au programu nyingine pia inaweza kuandika moja: jina la programu, mradi, na vipengee vyenye ufunguo, jina, kitengo na kiasi.
:::
