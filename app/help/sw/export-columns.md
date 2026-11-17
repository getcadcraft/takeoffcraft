---
title: Safu za hamisha
summary: Kila karatasi ya kazi na safu ya hamisha ya XLSX na CSV, pamoja na fomula ambazo karatasi ya Estimate hubeba.
keywords: hamisha, safu, xlsx, csv, karatasi ya kazi, kwa karatasi, alama, skeli, fomula, sehemu, makadirio
from: fed07851
---

## Estimate (karatasi ya kazi ya XLSX na CSV)

Safu moja kwa kila kipengee, ikifuatiwa na safu moja kwa kila kipengele cha mkusanyiko wake (kimeingizwa). Kisha safu tupu na jumla ya kazi.

| Column | Yaliyomo | Katika XLSX |
|---|---|---|
| A Item | Jina la kipengee (nzito) au jina la kipengele (lililoingizwa) | Maandishi |
| B Type | Linear, Area, Count au Component | Maandishi |
| C Unit | LF, m, SF, SY, m², EA, au kitengo cha kipengele | Maandishi |
| D Quantity | Jumla iliyopimwa, au matokeo ya fomula | Nambari |
| E Waste % | Upotevu | Asilimia (0.10 = 10%) |
| F Qty with waste | Kiasi × (1 + upotevu) | Fomula `D*(1+E)` |
| G Material per unit | Kiwango cha nyenzo | Nambari |
| H Labor per unit | Kiwango cha kazi | Nambari |
| I Material | Nyenzo iliyopanuliwa | Fomula `ROUND(F*G,2)` |
| J Labor | Kazi iliyopanuliwa | Fomula `ROUND(F*H,2)` |
| K Total | Nyenzo + kazi | Fomula `I+J` |
| L Notes | Fomula iliyotumika, hitilafu ya fomula, alama kwenye karatasi zisizo na skeli, eneo la ukuta, mzunguko | Maandishi |

Safu ya jumla ya kazi: `SUM` ya safu I, J na K juu ya kila safu, na "Incomplete: see the notes above" kwenye Notes wakati kitu kimeachwa.

Safu yenye hitilafu ya fomula haina kiasi wala kiasi cha fedha; maelezo yake yanatoa hitilafu. Safu ya kichwa imegandishwa.

Kwenye CSV, safu hizo hizo zina thamani tupu, Waste % ni nambari ya asilimia (10 kwa 10%), na fedha ziko kwa dola zenye desimali mbili. Maandishi ambayo lahajedwali inaweza kuchukua kama fomula (yanayoanza na `=`, `+`, `-` au `@`) hupewa `'` mbele ili yabaki maandishi.

## By sheet (XLSX pekee)

| Column | Yaliyomo |
|---|---|
| Sheet | Jina la karatasi (pamoja na jina la PDF isipokuwa halijafunguliwa) |
| Item | Jina la kipengee |
| Quantity | Kiasi cha kipengee hicho kwenye karatasi hiyo, katika kitengo chake |
| Unit | Kitengo cha kipengee |
| Marks | Idadi ya alama |

## Marks (XLSX pekee)

Mstari mmoja kwa kila alama.

| Column | Yaliyomo |
|---|---|
| Sheet | Jina la karatasi |
| Item | Jina la kipengee |
| Type | Linear, Area au Count |
| Quantity | Urefu, eneo wavu, au 1 |
| Unit | LF au m; SF, SY au m²; EA |
| Detail | Linear: urefu wa sehemu, sehemu zilizotolewa zimewekwa alama "(deduct)", na "deducts (length) of (length) drawn". Area: maeneo ya jumla na yaliyokatwa wakati kuna mikato, pamoja na mzunguko. "Sheet has no scale" kwa alama zisizo na skeli. |
| Bid area | Ni kwenye ukadiriaji wenye maeneo ya zabuni pekee: eneo la alama, au "No bid area" |

## By bid area (XLSX pekee, ukadiriaji ukiwa na maeneo ya zabuni)

| Column | Yaliyomo |
|---|---|
| Bid area | Jina la eneo, au "No bid area" |
| Item | Kipengee, au kipengele kilichoingizwa chini yake |
| Unit | Kitengo cha kipengee au kipengele |
| Quantity | Kilichopimwa katika eneo hilo (vipengele: fomula kwenye jumla za eneo) |
| Qty with waste | Kiasi × (1 + upotevu) |
| Material, Labor, Total | Zimepanuliwa hadi senti, kama kwenye Estimate |
| Notes | Fomula, hitilafu na alama zisizo na skeli, kama kwenye Estimate |

Kila eneo linamalizika kwa safu ya "(jina) subtotal" ambayo gharama zake ni fomula za `SUM` juu ya safu zake; safu ya mwisho, **All bid areas**, inajumlisha subtotals. Karatasi ya **Marks** basi ina safu ya saba, **Bid area**.

## Scales (XLSX pekee)

Mstari mmoja kwa kila karatasi yenye skeli au alama.

| Column | Yaliyomo |
|---|---|
| Sheet | Jina la karatasi |
| Scale | Jina la mpangilio uliowekwa, au skeli iliyorekebishwa, au "No scale" |
| How | "Preset", au "Calibrated on (the distance you typed)" |
| Feet per PDF unit | Kipengele halisi cha skeli ambacho TakeoffCraft inakitumia |

## Majina ya faili

- `(name).xlsx` na `(name).csv`, ambapo jina linatoka kwenye PDF ya kwanza iliyofunguliwa kwenye ukadiriaji.
- CSV ni UTF-8 yenye alama ya mpangilio wa baiti na mwisho wa mistari wa Windows, ambayo programu za lahajedwali kwenye kila mfumo zinaisoma.
