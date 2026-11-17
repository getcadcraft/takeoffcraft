---
title: Mikusanyiko na fomula
summary: Ongeza sehemu kwenye kipengee na acha fomula zibadilishe urefu, eneo au idadi yake kuwa vijiti, bamba, karatasi za bodi, zege na vifaa, pamoja na mfano wa ukuta uliokamilika.
keywords: mkusanyiko, sehemu, fomula, vijiti, ukuta wa bodi, karatasi, bamba, zege, yadi za ujazo, vifaa vya kufungia, mapishi, kawaida, sehemu za kipengee
from: 12891a21
---

**Mkusanyiko** wa kipengee ni orodha ya sehemu, kila moja ikiwa na fomula yake ya kiasi pamoja na upotevu na viwango vyake. Fomula hutumia jumla zilizopimwa za kipengee, kwa hiyo ukadiriaji mmoja wa ukuta hukupa vijiti, bamba na bodi kwa wakati mmoja, na hujisasisha unapopima.

## Vigezo unavyoweza kutumia

| Aina ya kipengee | Vigezo |
|---|---|
| Mstari | `L` urefu, `H` kimo, `A` eneo la ukuta (L × H), `N` idadi ya mistari |
| Eneo | `A` eneo, `P` mzingo (mpaka + matundu yaliyokatwa), `H` kina au unene, `N` idadi ya maeneo |
| Hesabu | `N` hesabu |

Thamani ziko katika vitengo vya kipengee chenyewe: futi na futi za mraba kwa vipengee vya LF na SF, mita na mita za mraba kwa vipengee vya m na m². Kwa kipengee cha SY, `A` iko katika yadi za mraba huku `P` na `H` zikibaki katika futi.

Fomula hutumia `+ - * /` (au × ÷), mabano, nambari, na vitendakazi `ceil`, `floor`, `round`, `min`, `max` na `abs`. Kanuni kamili ziko katika [Lugha ya fomula](topic:formulas).

## Mfano uliokamilika: ukuta wa ndani

Chukulia umepima **Interior wall type A** kama kipengee cha mstari: mistari 4 yenye jumla ya LF 120, na {{ui:Kimo}} imewekwa `9'-0"`. Thamani zake za **Measured** zinasomeka L = 120, N = 4, A = 1,080 (SF ya ukuta, uso mmoja).

1. Chagua kipengee chini ya {{ui:Vipengee}}.
2. Katika {{ui:Mkusanyiko}}, chagua {{ui:Ongeza sehemu}}.
   Sehemu inayoitwa "Kijenzi" inaonekana, yenye fomula `L` na matokeo yake chini yake.
3. Andika `Studs 16 in o.c.` katika {{ui:Jina}} na `EA` katika {{ui:Kitengo}}.
4. Katika {{ui:Fomula ya kiasi}}, andika `ceil(L * 12 / 16) + N`.
   Matokeo yanajisasisha unapoandika: "= 94 EA". Hiyo ni kijiti kimoja kila inchi 16 kwenye urefu wa futi 120 (90), pamoja na kimoja cha ziada cha kufunga kila mstari kati ya 4.
5. Chagua {{ui:Ongeza sehemu}} tena kwa bamba: taja `Plates, top and bottom`, kitengo `LF`, fomula `L * 2`. Matokeo: 240 LF.
6. Ongeza bodi: jina `Gypsum board 4x8, both sides`, kitengo `sheets`, fomula `ceil(A * 2 / 32)`. Matokeo: karatasi 68 (SF 2,160 za bodi ÷ SF 32 kwa karatasi = 67.5, ikazungushwa juu).
7. Jaza {{ui:Upotevu %}}, {{ui:Nyenzo $}} na {{ui:Kazi $}} ya kila sehemu.
   Kila sehemu hupata safu yake chini ya kipengee katika {{ui:Viasi}}, inawekwa bei kama kipengee, na {{ui:Jumla ya kazi}} inaijumuisha.

Ikiwa gharama yote ya ukuta iko kwenye sehemu, acha viwango vya nyenzo na kazi vya kipengee chenyewe kuwa 0, la sivyo itahesabiwa mara mbili.

:::tip
Upotevu hutumika baada ya fomula na haukuzungushwa: karatasi 68 zenye upotevu wa 10% ni karatasi 74.8. Ili kuagiza karatasi nzima, weka upotevu ndani ya fomula, kama `ceil(A * 2 / 32 * 1.1)`, na acha upotevu wa sehemu uwe 0.
:::

## Fomula zaidi

| Nini | Kipengee | Fomula |
|---|---|---|
| Vijiti vya inchi 24 katikati | Mstari | `ceil(L / 2) + N` |
| Blanketi za insulation, SF | Mstari wenye kimo | `A` |
| Rangi, pande zote mbili, galoni kwa SF 350 | Mstari wenye kimo | `ceil(A * 2 / 350)` |
| Katoni za vigae kwa SF 15, ziada 10% | Eneo | `ceil(A * 1.1 / 15)` |
| Ukingo wa msingi au pembezoni, LF | Eneo | `P` |
| Zege, yadi za ujazo | Eneo lenye kina | `A * H / 27` |
| Zege iliyozungushwa juu hadi robo yadi | Eneo lenye kina | `ceil(A * H / 27 * 4) / 4` |
| Bawaba, tatu kwa mlango | Hesabu | `N * 3` |
| Angalau kisanduku kimoja, kimoja kwa kila 12 | Hesabu | `max(1, ceil(N / 12))` |

## Fomula inapokuwa si sahihi

Mstari chini ya fomula hugeuka kuwa ujumbe wa hitilafu, kwa mfano `"X" is not a measured value here. Use L, H, A, N.` au `A ")" is missing.` Sehemu hiyo basi haina kiasi, safu yake katika {{ui:Viasi}} inaonyesha "Hitilafu ya fomula: …", na kichwa kinasema "Haijakamilika: hitilafu 1 ya fomula (haimo kwenye jumla)". Rekebisha fomula na jumla zitasasishwa.

Fomula inayogawanya kwa sifuri nayo ni hitilafu ("Fomula inagawanya kwa sifuri."), kwa mfano `A / H` kwenye kipengee kisicho na kina.

## Mipaka

- Fomula hufanya kazi kwenye **jumla** za kipengee, si mstari kwa mstari. `ceil(L * 12 / 16) + N` huongeza kijiti kimoja kwa kila mstari; bado hakuna kuzungusha kwa kila mstari.
- Fomula inaweza kutumia vigezo vya kipengee chake yenyewe tu, si vya kipengee kingine.
- Hadi sehemu 50 kwa kipengee, herufi 500 kwa fomula.

## Ondoa sehemu

Chagua {{ui:Ondoa kijenzi}} chini yake. Unaweza kuitendua kwa {{key:Mod+Z}}.
