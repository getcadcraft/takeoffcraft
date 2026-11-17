---
title: Luqadda qaacidada
summary: Xeerarka qaacidooyinka tirada isku-dhiska - doorsoomayaasha, hawlaha, shaqooyinka, wareejinta iyo dhammaan fariimaha khaladka.
keywords: qaacid, muujin, syntax, shaqooyin, ceil, floor, round, min, max, abs, doorsoomayaal, hawlo, xisaab
from: 4da14575
---

Qaybaha isku-dhisku tirada ay ka helaan waxay ka imanayaan qaacidda. Qaacidda waa muujin yar oo xisaab ah oo ku saleysan qiyamka shayga la cabbiray. Eeg [Isku-dhisyada iyo qaacidooyinka](topic:assemblies) tusaalooyin dhamaystiran.

## Doorsoomayaasha

| Nooca shayga | Doorsoomaha | Macnaha |
|---|---|---|
| Linear | `L` | Dherer wadar ah |
| Linear | `H` | Joogta shayga |
| Linear | `A` | Aagga darbiga, L × H, oo laga jaray furitaanada socdaalada ee giraan (qadar ka yimid BimCraft). Marka qadarkaas uu magacaabo habka cabbirka, `A` waxa cabbira habkaas: furitaanada aan ka weynayn cabbirka ugu yar ee habka way ku jiraan, wixii darbiyada ku kulma waa laga reebaa. Qoraalka hoosta shayga wuxuu magacaabaa habka |
| Linear | `N` | Tirada socdaalada |
| Area | `A` | Aagga net-ka oo dhan (dhinacyada ka jarnaan) |
| Area | `P` | Perimeter-ka oo dhan, oo ku daraan cidhifyada jarista |
| Area | `H` | Qotada ama qaroka shayga |
| Area | `N` | Tirada aagagga |
| Count | `N` | Tirada |

- Doorsoomayaashu waxay ku jiraan unugyada shayga: eeg [Unugyada](topic:units).
- Xarfaha weyn iyo kuwa yar isku mid ayay yihiin: `l` waa `L`.
- Doorsoomayaasha nooca shayga keliya ayaa shaqeeya. `P` shay linear ah wuxuu siinayaa `"P" ma aha qiime la cabbiray halkan. Isticmaal L, H, A, N.`
- Joog ama qoto madhan waa 0.

## Hawlaha

| Qor | Macnaha |
|---|---|
| `+` | Ku dar |
| `-` ama `−` | Ka jar, ama qiime taban |
| `*` ama `×` | Dhufo |
| `/` ama `÷` | Qaybi |
| `( )` | Kooxee |

Dhufashada iyo qaybinta waxay ka horreeyaan ku darka iyo jaridda: `L * 2 + 4` waa (L × 2) + 4. Isticmaal qaw-qaw marka aad shakiso.

Tirooyinku waxay leeyihiin meelo jajab ah (`1.333`, `.5`) iyo tilmaamo (`1e3` = 1000). Meelaha bannaan waa la iska dhaafaa.

## Shaqooyinka

| Shaqada | Natiijada | Tusaale |
|---|---|---|
| `ceil(x)` | U kor-wareeji tiro oo dhan | `ceil(67.5)` = 68 |
| `floor(x)` | U hoos-wareeji tiro oo dhan | `floor(67.5)` = 67 |
| `round(x)` | Ugu dhow tiro oo dhan, badhaha fogaanta eber | `round(2.5)` = 3 |
| `round(x, d)` | U wareeji d tobanle (0 ilaa 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Qiimaha ugu yar | `min(N, 10)` |
| `max(a, b, …)` | Qiimaha ugu weyn | `max(1, ceil(N / 12))` |
| `abs(x)` | Qiimaha aan calaamadiisa lahayn | `abs(-3)` = 3 |

`ceil` iyo `floor` waxay iska dhaafaan dhawaaqa wareejinta yar ee kombiyuutarka, sidaas darteed qiime u dhow 1 weligeed lama kor-wareejin 2.

## Khaladaadka

Qaacidda aan la akhriyi karin ama aan la xisaabin karin waxay muujisaa khaladkeeda hoosta goobta, qaybtana waa laga reebaa wadarta (header-ka {{ui:Tirooyinka}} wuxuu leeyahay "Dhammaystirnayn ma aha"). Fariimaha:

| Fariinta | Sax |
|---|---|
| Ku qor qaacid, sida L ama ceil(L / 1.333) + 1. | Qaacidda waa madhan. |
| "X" ma aha qiime la cabbiray halkan. Isticmaal … | Isticmaal mid ka mid ah doorsoomayaasha la sheegay. |
| "X" ma aha shaqo halkan. Isticmaal ceil, floor, round, min, max, abs. | Isticmaal mid ka mid ah shaqooyinkaas. |
| "#" lama oggola qaacidda gudaheeda. | Ka saar jilaacaddaas (unugyada, `%`, `$` iyo `=` lama oggola). |
| Waxaa maqan ")". / Waxaa jira ")" aan "(" lahayn. | Isku dheelli qawsiga. |
| Qiime waa maqan ka hor ")", sida `max(1, )`. | Ku dar qiimaha. |
| Qaacidda si degdeg ah ayay u dhammaatay, sida `L *`. | Dhammaystir. |
| Ka yaab leh "…". Operator ma maqan yahay? | Laba qiime oo isku xiga, sida `2L`: qor `2 * L`. |
| ceil() wuxuu qaataa 1 qiime. | Siiso shaqada tirada saxda ah ee qiimaha. |
| round(x, digits) wuxuu u baahan yahay tiro oo tobanle oo dhammaystiran 0 ilaa 10. | Isticmaal tiro oo tobanle oo dhammaystiran. |
| Qaacidda waxay u qaybinaysaa eber. | Inta badan H waa 0: deji joogta ama qotada shayga. |
| Qaacidda ma siiso tiro. | Natiijadu aad bay u weyn tahay si ay u noqoto tiro. |
| Qaacidaas aad bay u dheer tahay (ugu badnaan 500 xaraf). | Gaabi. |

## Amaan ahaan naqshadda

Qaacidda waxay samayn kartaa oo keliya xisaab iyada oo la adeegsanayo doorsoomayaasha iyo shaqooyinka kor ku qoran. Ma fulin karto code, mana akhrin wax kale, sidaas darteed qaacidda ku jirta faylka mashruuc uu kuu soo diro qof kale waa wax aan waxyeello lahayn.
