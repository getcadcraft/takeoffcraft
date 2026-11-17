---
title: Umtapo wezintengo
summary: Gcina izinto zakho, amazinga nezinhlanganisela emtapweni, uwungenise kusuka ku-CSV noma kusuka kwesilinganiso sangaphambili, engeze izinto kuwo kunoma iyiphi ukubala, bese ubuyekeza izintengo zokubala kuwo.
keywords: umtapo, amaphakhi wokuhweba, uhlu lwentengo, ibhuku lentengo, isiphequluli sezindleko, ngenisa i-csv, amazinga, izinhlanganisela, sebenzisa kabusha, izinto zesifanekiso, buyekeza izintengo, buyekeza intengo
from: 37356c68
---

**Umtapo wezintengo** ugcina izinto oyisebenzisa ekubaleni ngakunye: uhlobo lwazo, iyunithi, ukuphakama, ukulahleka, amazinga ezinto nezabasebenzi, kanye nenhlanganisela yazo. Igcinwa kule bhrawuza, ngaphandle kwanoma yikuphi ukubala, ngakho noma yikuphi ukubala okuvulwe lapha kungawusebenzisa.

Vula ngo-{{ui:Umtapo}} phezulu kwephaneli {{ui:Izinto}}.

## Gcwalisa umtapo

- {{ui:Ngenisa i-CSV…}} ifunda ishidi lezibalo elilondolozwe njenge-CSV (bona amakholomu angezansi). Izinto ezinegama nohlobo olufanayo esele emtapweni ziyashintshwa; ezinye ziyengezwa. Imigqa engafundeki iyadlulwa, futhi ithi yiyiphi nokuthi kungani.
- {{ui:Engeza izinto zalo kubalo}} ikopisha yonke into yokubala okuvulekile emtapweni, namazinga nenhlanganisela yayo (hhayi amamaki ayo).
- Isilinganiso se-CSV ethunyelwe yi-TakeoffCraft (bona [Thumela isilinganiso](topic:export-estimate)) siyangeniswa njengoba sinjalo: intengo yokubala kwakamuva iba yisisekelo sokubala okulandelayo.
- {{ui:Amaphakhi wokuhweba…}} engeza izinhlanganisela mahhala zomsebenzi wokuhweba, njengodonga lwe-drywall, ugesi noma ukhonkolo, ngaphandle kwentengo. Bona [Amaphakhi wokuhweba](topic:trade-packs).

{{ui:Thumela i-CSV}} ilondoloza umtapo njenge-CSV, ukuze ugcine ikhophi, uwuhlele ku-spreadsheet noma uwunikeze umngani. {{ui:Sula}} uwusula (chofoza kabili).

:::note
Umtapo uphila kwisitoreji salo sebhrawuza. Ibhrawuza elihlukile, ikhompyutha ehlukile noma iwindi eliyimfihlo linesalo layo (noma lingenalo). Wuthumele ukuze uwuhambise.
:::

## Sebenzisa kukubala

- Thikha izinto (bhala ku-{{ui:Thola kumtapo}} ukuze unciphise uhlu) bese ukhetha {{ui:Engeza kukubala}}. Zingezwa nezinhlanganisela zazo ngesinyathelo esisodwa esingahlehliswa nge-{{key:Mod+Z}}. Igama elisesele kukubala lithola inombolo, njengo `Carpet (2)`.
- {{ui:Buyekeza izintengo}} inikeza izinto zokubala amazinga nokulahleka komtapo, kuzo zonke izinto ezifana negama nohlobo nemigqa yenhlanganisela yegama elifanayo. Ukuphakama, amayunithi namafomula kuhlala njengoba kunjalo. Ukucindezela {{key:Mod+Z}} kuzibuyisela zonke izintengo ezindala.

## Amakholomu e-CSV

Umugqa wokuqala uqamba amakholomu, nganoma yiluphi uhlelo; amanye amakholomu ayanganakwa.

| Ikholomu | Okungena kuyo |
|---|---|
| Item (noma Name) | Igama lento. Kuyadingeka. |
| Type | Linear, Area noma Count (LF, SF no-EA nazo ziyasebenza). Uma kushiywe ngaphandle, iyunithi iyanquma. |
| Unit | LF noma m; SF, SY noma m²; EA. Ngaphandle: iyunithi evamile yohlobo. |
| Waste % | `10` noma `10%`. |
| Material per unit, Labor per unit | Amazinga afana no-`2.10` noma `$1,250`. |
| Height (noma Depth) | `9'-0"`, `9`, noma `2.7` kumayunithi e-metric. |
| Component, Formula | Umugqa onegama le-Component (noma uhlobo `Component`) uyingxenye yenhlanganisela yento ephezulu kuwo. Iyunithi, Waste namazinga ayo ayawo; ifomula yawo isebenzisa izinhlamvu zento, bona [Izinhlanganisela namafomula](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Amakhoma, amasemikholoni noma amathebhu kuzo zonke ayasebenza phakathi kwamakholomu.
