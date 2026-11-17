---
title: Útflutningsdálkar
summary: Hvert vinnublað og dálkur í XLSX-útflutningnum og CSV-skránni, með formúlunum sem kostnaðaráætlunarvinnublaðið hefur.
keywords: útflutningur, dálkar, xlsx, csv, vinnublað, kostnaðaráætlunarblað, eftir blaði, merki, mælikvarðar, formúlur, reitir
from: fed07851
---

## Kostnaðaráætlun (XLSX-vinnublað og CSV)

Ein röð fyrir hvern lið, og síðan ein röð fyrir hvern íhlut í samsetningu hans (inndregið). Þá kemur tóm röð og heildarsumma verksins.

| Dálkur | Innihald | Í XLSX |
|---|---|---|
| A Liður | Heiti liðar (feitletrað) eða heiti íhluta (inndregið) | Texti |
| B Tegund | Línulegt, Flatarmál, Talning eða Íhlutur | Texti |
| C Eining | LF, m, SF, SY, m², EA, eða eining íhlutarins | Texti |
| D Magn | Heildarmagn sem mælt var, eða niðurstaða formúlu | Tala |
| E Úrgangur % | Úrgangur | Prósenta (0.10 = 10%) |
| F Magn með úrgangi | Magn × (1 + úrgangur) | Formúla `D*(1+E)` |
| G Efni á einingu | Efnisverð | Tala |
| H Vinna á einingu | Vinnutaxti | Tala |
| I Efni | Reiknað efni | Formúla `ROUND(F*G,2)` |
| J Vinna | Reiknuð vinna | Formúla `ROUND(F*H,2)` |
| K Samtals | Efni + vinna | Formúla `I+J` |
| L Athugasemdir | Formúla sem var notuð, villa í formúlu, merki á blöðum án mælikvarða, veggflötur, ummál | Texti |

Samtölurow verksins: `SUM` yfir dálka I, J og K í öllum röðum hér að ofan, og „Ófullkomið: sjá athugasemdirnar hér að ofan“ í Athugasemdum þegar eitthvað var skilið eftir.

Röð með villu í formúlu hefur hvorki magn né upphæðir; athugasemdin lýsir villunni. Hausröðin er föst.

Í CSV-skránni innihalda sömu dálkar venjuleg gildi, Úrgangur % er tala prósentna (10 fyrir 10%), og peningar eru í dollurum með tveimur aukastöfum. Texti sem töflureiknir gætu tekið fyrir formúlu (byrjar á `=`, `+`, `-` eða `@`) fær `'` fremst, svo hann haldist texti.

## Eftir blaði (aðeins XLSX)

| Dálkur | Innihald |
|---|---|
| Blað | Heiti blaðs (með heiti PDF-skjalsins þegar það er ekki opið) |
| Liður | Heiti liðar |
| Magn | Magn þess liðar á þessu blaði, í einingu hans |
| Eining | Eining liðarins |
| Merki | Fjöldi merkja |

## Merki (aðeins XLSX)

Ein röð fyrir hvert merki.

| Dálkur | Innihald |
|---|---|
| Blað | Heiti blaðs |
| Liður | Heiti liðar |
| Tegund | Línulegt, Flatarmál eða Talning |
| Magn | Lengd, nettóflatarmál, eða 1 |
| Eining | LF eða m; SF, SY eða m²; EA |
| Nánar | Línulegt: lengdir hluta, frádregnir hlutar merktir „(frádráttur)“ og „dregur frá (lengd) af (lengd) teiknaðri“. Flatarmál: brúttó- og útskurðarflatarmál þegar eru útskurðir, og ummálið. „Blað hefur engan mælikvarða“ fyrir merki án mælikvarða. |
| Tilboðssvæði | Aðeins þegar magntakan hefur tilboðssvæði: flatarmál merkisins, eða „Ekkert tilboðssvæði“ |

## Eftir tilboðssvæði (aðeins XLSX, þegar magntakan hefur tilboðssvæði)

| Dálkur | Hvað |
|---|---|
| Tilboðssvæði | Heiti svæðisins, eða „Ekkert tilboðssvæði“ |
| Liður | Liðurinn, eða inndreginn íhlutur undir honum |
| Eining | Eining liðarins eða íhlutarins |
| Magn | Mælt á þessu svæði (íhlutir: formúlan á heildum svæðisins) |
| Magn með úrgangi | Magn × (1 + úrgangur) |
| Efni, Vinna, Samtals | Reiknað að sentinu, eins og á Kostnaðaráætlun |
| Athugasemdir | Formúla, villur og merki án mælikvarða, eins og á Kostnaðaráætlun |

Hvert svæði endar á röð „(heiti) millisamtala“ þar sem kostnaðurinn eru `SUM`-formúlur yfir raðirnar þess; síðasta röðin, **Öll tilboðssvæði**, leggur millisamtölurnar saman. Vinnublaðið **Merki** fær þá sjöunda dálkinn, **Tilboðssvæði**.

## Mælikvarðar (aðeins XLSX)

Ein röð fyrir hvert blað sem hefur mælikvarða eða merki.

| Dálkur | Innihald |
|---|---|
| Blað | Heiti blaðs |
| Mælikvarði | Heiti forstillingarinnar, kvarðaði mælikvarðinn, eða „Enginn mælikvarði“ |
| Hvernig | „Forstilling“, eða „Kvarðað á (fjarlægðinni sem þú slóst inn)“ |
| Fet á hverja PDF-einingu | Nákvæmi mælikvarðastuðullinn sem TakeoffCraft notar |

## Skráarheiti

- `(heiti).xlsx` og `(heiti).csv`, þar sem heitið kemur frá fyrsta PDF-skjalinu sem var opnað í magntökunni.
- CSV-skráin er UTF-8 með BOM-merki (byte order mark) og Windows-línuskilum, sem töflureiknar á öllum stýrikerfum lesa.
