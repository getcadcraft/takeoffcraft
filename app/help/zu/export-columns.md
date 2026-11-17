---
title: Amakholomu okuthumela
summary: Yonke ishidi lomsebenzi namakholomu e-XLSX export ne-CSV, nezifomula ishidi le-Estimate eziyibambile.
keywords: thumela, amakholomu, xlsx, csv, ishidi lomsebenzi, ishidi lesilinganiso, ngeshidi, imaki, izikali, izifomula, izinkambu
from: fed07851
---

## Estimate (ishidi le-XLSX ne-CSV)

Umugqa owodwa ngento ngayinye, ulandelwe ngomugqa ngamunye wekhomponenti yokuhlanganiswa kwayo (ingenile). Bese kuba umugqa ongenalutho nesamba sephrojekthi.

| Ikholomu | Okuqukethwe | Ku-XLSX |
|---|---|---|
| A Item | Igama lento (elimnyama) noma igama lekhomponenti (elingenile) | Umbhalo |
| B Type | Okomugqa, Indawo, Ukubala noma Ingxenye | Umbhalo |
| C Unit | LF, m, SF, SY, m², EA, noma iyunithi yekhomponenti | Umbhalo |
| D Quantity | Isamba esilinganisiwe, noma umphumela wesifomula | Inombolo |
| E Waste % | Udoti | Iphesenti (0.10 = 10%) |
| F Qty with waste | Inani × (1 + udoti) | Ifomula `D*(1+E)` |
| G Material per unit | Irethi yempahla | Inombolo |
| H Labor per unit | Irethi lomsebenzi | Inombolo |
| I Material | Impahla eqoqiwe | Ifomula `ROUND(F*G,2)` |
| J Labor | Umsebenzi oqoqiwe | Ifomula `ROUND(F*H,2)` |
| K Total | Impahla + umsebenzi | Ifomula `I+J` |
| L Notes | Ifomula esetshenziswe, iphutha lesifomula, amaemaki emashidini angenasikali, indawo yodonga, umjikelo | Umbhalo |

Umugqa wesamba sephrojekthi: `SUM` yamakholomu I, J no K kuzo zonke izimugqa ezingenhla, kanye ne-"Incomplete: see the notes above" ku-Notes uma kukhona okushiyiwe.

Umugqa onephutha lesifomula awunanani noma amasamba; inothi yawo inikeza iphutha. Umugqa wenhloko umisiwe endaweni.

Ku-CSV, amakholomu afanayo anamanani avamile, i-Waste % iyinombolo yamaphesenti (10 uma kungu-10%), futhi imali ingamadola anezinsimbo ezimbili zamadesimali. Umbhalo ongathathwa yi-spreadsheet njengefomula (uqala nge `=`, `+`, `-` noma `@`) uthola `'` phambili ukuze uhlale umbhalo.

## By sheet (i-XLSX kuphela)

| Ikholomu | Okuqukethwe |
|---|---|
| Sheet | Igama leshidi (negama le-PDF uma lingavulekile) |
| Item | Igama lento |
| Quantity | Inani lalento kuleshidi, ngeyunithi yalo |
| Unit | Iyunithi yento |
| Marks | Inani lemaki |

## Marks (i-XLSX kuphela)

Umugqa owodwa ngemaki ngayinye.

| Ikholomu | Okuqukethwe |
|---|---|
| Sheet | Igama leshidi |
| Item | Igama lento |
| Type | Okomugqa, Indawo noma Ukubala |
| Quantity | Ubude, indawo esele, noma 1 |
| Unit | LF noma m; SF, SY noma m²; EA |
| Detail | Okomugqa: ubude bezingxenye, ezikhishiwe zimakwe ngokuthi "(deduct)", kanye ne-"deducts (length) of (length) drawn". Indawo: izindawo ezigcwele nezikhishiwe uma kukhona izikhishwa, kanye nomjikelo. "Sheet has no scale" kumaemaki angenasikali. |
| Bid area | Kuphela uma ukubala kunezindawo zethenda: indawo yemaki, noma "No bid area" |

## By bid area (i-XLSX kuphela, uma ukubala kunezindawo zethenda)

| Ikholomu | Kuyini |
|---|---|
| Bid area | Igama lendawo, noma "No bid area" |
| Item | Into, noma ikhomponenti engenile ngaphansi kwayo |
| Unit | Iyunithi yento noma yekhomponenti |
| Quantity | Ilinganiswe kuleyo ndawo (amakhomponenti: ifomula ezamba zendawo) |
| Qty with waste | Inani × (1 + udoti) |
| Material, Labor, Total | Iqoqwe kuya kusenti, njengakwi-Estimate |
| Notes | Ifomula, amaphutha namaemaki angenasikali, njengakwi-Estimate |

Ingxenye ngayinye iphela ngomugqa we-"(name) subtotal" ohlala izindleko zawo zifaka `SUM` phezu kwemigqa yawo; umugqa wokugcina, **All bid areas**, wengeza izamba ezingaphansi. Ishidi lo-**Marks** bese linekholomu yesikhombisa, **Bid area**.

## Scales (i-XLSX kuphela)

Umugqa owodwa ngeshidi elinesikali noma amaemaki.

| Ikholomu | Okuqukethwe |
|---|---|
| Sheet | Igama leshidi |
| Scale | Igama lesethingi, noma isikali esilinganisiwe, noma "No scale" |
| How | "Preset", noma "Calibrated on (the distance you typed)" |
| Feet per PDF unit | Isilinganiso esinembile i-TakeoffCraft esisetshenzisa |

## Amagama amafayela

- `(name).xlsx` ne `(name).csv`, lapho igama livela ku-PDF yokuqala evulwe ekubaleni.
- I-CSV iyi-UTF-8 nobuhlobo bokuqala bebhayithi kanye nemigqa yeWindows, efundwa ama-spreadsheet kuzo zonke izinhlelo.
