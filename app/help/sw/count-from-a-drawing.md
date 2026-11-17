---
title: Hesabu kutoka kwenye mchoro
summary: Hesabu bloku, vitu kwenye tabaka, au maandishi moja kwa moja kutoka DWG au DXF: kwa usahihi, pamoja na bloku zilizo ndani ya bloku, tofauti za bloku zinazobadilika na safu za bloku, katika hatua moja ya kutendua.
keywords: hesabu kutoka kwenye mchoro, hesabu ya CAD, hesabu ya bloku, hesabu bloku, ingiza, jina la bloku, bloku zilizo ndani, bloku inayobadilika, tofauti, minsert, safu, aina ya kipengele, miduara, maandishi, sifa, lebo, tabaka zilizofichwa, hesabu sahihi, jinsi ya, milango, vifaa
from: 5060e24e
---

{{ui:CAD count}} kwenye upau wa karatasi (amri **Hesabu kutoka kwenye mchoro** kwenye mitindo mingine ya menyu) inahesabu kile DWG au DXF inachosema kipo. Ambapo {{ui:Auto count}} inatafuta picha ya alama na inaweza kukosa moja au kupata ya uongo, hii inahesabu vitu: kila ingizo la bloku iitwayo `DOOR-36` ni mlango mmoja. Fungua mchoro kwanza: [Fungua mchoro wa DWG au DXF](topic:open-a-drawing).

## Hesabu bloku

1. Fungua karatasi ya mchoro. {{ui:CAD count}} iko kwenye upau wa karatasi.
2. Chagua. Dirisha linaorodhesha bloku pamoja na idadi ya kila moja. Tafuta kwa jina, kisha chagua moja.
3. Angalia mstari chini ya orodha: "22 found, 22 to add." (22 zimepatikana, 22 zitaongezwa).
4. Chini ya {{ui:Add to}}, chagua kipengee cha hesabu, au acha {{ui:A new count item}} na utoe jina.
5. Chagua kitufe cha kuongeza kinachotaja idadi: {{ui:Ongeza alama 22}}. Alama zinaonekana kwenye sehemu za kuingiza za bloku, na kiasi cha kipengee ndicho hesabu.

Ni hatua moja ya kutendua: {{key:Mod+Z}} huondoa alama (na kipengee kipya) pamoja. Makadirio, lahajedwali na PDF yenye alama vinakitendea kipengee kama kipengee kingine chochote cha hesabu.

### Kinachohesabiwa

- **Kila ingizo la jina la bloku**, bila kujali kipimo na pembe yake, katika model space au paper space. Majina ya bloku hayajali herufi kubwa au ndogo.
- **Safu za bloku** (MINSERT): kila nakala kwenye safu ni moja.
- **Bloku zilizo ndani ya bloku.** Bloku iliyowekwa ndani ya bloku nyingine inahesabiwa katika kila kina. Orodha inasema "6 ndani ya bloku nyingine"; ondoa tiki kwenye {{ui:Count blocks inside other blocks too}} ili kuhesabu ingizo lililowekwa moja kwa moja kwenye mchoro pekee.
- **Bloku zinazobadilika.** Bloku inayobadilika inahesabiwa chini ya jina lake lenyewe, si chini ya nakala zisizo na jina (`*U12`) ambazo faili huzihifadhi. Hali zake zinaorodheshwa kando ("Single 12, Double 4"): chagua hali ili kuhesabu hizo peke yake, au {{ui:Every variant}}. Faili isiposema ni hali gani nakala inaonyesha, hizo zinaorodheshwa kama "(hali haijulikani)".
- **Kichujio cha tabaka.** Bloku iliyo kwenye tabaka kadhaa: chagua moja chini ya {{ui:On layer}}.

### Kisichohesabiwa

- **Tabaka zilizofichwa.** Kitu kilicho kwenye tabaka lililozimwa au kuganda kwenye faili (au ulichokificha kwenye {{ui:Layers}}) kinaachwa, na mstari unasema ni ngapi: "3 kwenye tabaka zilizofichwa zimeachwa". Weka tiki kwenye {{ui:Hesabu hizo pia}} ili kuvijumuisha.
- **Michoro iliyounganishwa ambayo haijafunguliwa** haihesabiwi; dirisha linasema hivyo.
- **Vitu vilivyowekwa juu ya kitu kingine cha aina ile ile kabisa** vinahesabiwa kama viwili (kwa kuwa ni vitu viwili), na dirisha linasema hivyo: mara nyingi ni kosa la uchoraji linalostahili kuangaliwa.

## Kile karatasi hii inaonyesha, au mchoro mzima

- **Kinachoonyeshwa na karatasi hii** kinahesabu vitu ambavyo karatasi inaonyesha: kwenye layout, vitu vya modeli ndani ya viewports zake (tabaka lililoganda kwenye viewport halihesabiwi hapo) pamoja na vya layout yenyewe.
- **Mchoro mzima, kila kitu mara moja** unahesabu model space mara moja, pamoja na alama kwenye karatasi ya Model, na haihesabu tena vitu ambavyo layout kadhaa zinaonyesha.

Kuhesabu kile layout inachoonyesha na kuhesabu kile Model inachoonyesha kunatoa namba sawa kwa vitu sawa; usiviongeze vyote kwenye kipengee kimoja.

## Hesabu tena

Kuhesabu bloku ile ile tena kwa kipengee kile kile kunaongeza kile kipya tu: "22 already counted" (22 zimeshahesabiwa). Kila alama inawakilisha kitu kimoja.

## Kwa tabaka na aina

Kwenye {{ui:By layer and type}}, chagua tabaka na aina ya kitu (miduara, polilaini, hatch…): "all circles on E-LITE" (miduara yote kwenye E-LITE). Weka tiki kwenye {{ui:Also count objects inside blocks}} ili kujumuisha vilivyo ndani ya ufafanuzi wa bloku, katika kila mahali bloku inapowekwa.

## Kwa maandishi

Kwenye {{ui:By text}} andika maandishi, kama `A3`, kisha sema kama ni hayo hasa, yana hayo, au yana hayo kama neno zima. Vitu vya maandishi, maandishi ya multileader na **thamani za sifa** za bloku vyote vinahesabiwa (sifa ya lebo `ITEM = A3` inapatikana); chagua {{ui:In attribute}} ili kuhesabu sifa moja tu. Maandishi yanayojitokeza zaidi yanaorodheshwa ili kubofya.

## Lini utumie Hesabu otomatiki

Tumia {{ui:Auto count}} kwa PDF na kwa alama kwenye mchoro ambazo si bloku (zilizochorwa peke yake, au zilizovunjwa). Zikichorwa kama bloku, zihesabu hapa.
