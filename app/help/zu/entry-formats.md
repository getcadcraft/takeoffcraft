---
title: Ukufaka ubude, irethi nephesenti
summary: Okungafakwa ngobude, ukuphakama, amarethi emali nephesenti lodoti, nezibonelo nemilayezo yokufaka okungafundeki yi-TakeoffCraft.
keywords: ukufaka, ifomethi, amafidi namainchi, izingxenye, amafidi ane-decimal, metric, amamitha, amamilimitha, irethi, imali, amadola, iphesenti, udoti, ukubhala
from: 215bbf4d
---

## Ubude

Kusetshenziselwa **Ibanga langempela** ku-{{ui:Linganisa}}, nakwe-{{ui:Ukuphakama}} ne-{{ui:Ukujula}} kumhleli wento.

| Uthayipha | Kusho |
|---|---|
| `24'-0"` | amafidi angu-24 |
| `24'-6 1/2"` | amafidi angu-24 nama-inchi angu-6½ |
| `12' 6 1/2"` | amafidi angu-12 nama-inchi angu-6½ (isikhala esikhundleni sedashi) |
| `12'-6-1/2"` | amafidi angu-12 nama-inchi angu-6½ (amadashi phakathi kwezingxenye) |
| `24'` | amafidi angu-24 |
| `30"` | amainchi angu-30 |
| `6 1/2"` | amainchi angu-6½ |
| `3/4"` | inchi engu-¾ |
| `24 ft 6 in` | amafidi angu-24 nama-inchi angu-6 (futhi `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 ngeyunithi ezenzakalelayo (bheka ngezansi) |
| `24.5'` | amafidi angu-24.5 |
| `7.5 m` | amamitha angu-7.5 |
| `750 cm` | amasentimitha angu-750 |
| `7500 mm` | amamilimitha angu-7,500 |

- Inani elingenalo uphawu lingamafidi ekulinganiseni nasemaitemini e-LF, SF noma SY, futhi lingamamitha kumaitemu e-m noma e-m².
- Izimpawu zokhuluma ezigobile nezimpawu zokuphrayima ezivela kuma-word processor (′ ″ ’ ”) zisebenza njengo `'` no `"`. Ama-apostrophe amabili `''` abalwa njengo `"`.
- Amakhoma ayanganakwa: `1,200 mm` ingu-1200 mm.
- Izingxenye zidinga izinombolo ezigcwele ngaphambili nangemuva: `6 1/2"` iyasebenza, `6.5 1/2"` ayisebenzi.
- Ubude be-zero nobungezansi buyenqatshwa.

Imilayezo:

- "Faka ibanga, njengo-24'-0" noma 7.5 m." (insimu ayinalutho)
- "Faka ibanga elikhulu kuno-zero."
- "Sebenzisa amafidi namainchi (24'-6 1/2"), amafidi ane-decimal, m, cm noma mm." (iyunithi engaziwa)
- "Leli banga alifundeki. Zama 24'-6 1/2" noma 24.5."

Ukuze usule ukuphakama noma ukujula kwento, khipha insimu.

### Ukubala

Insimu yobude ngayinye, nebhokisi lokuthayipha ngesikhathi udweba, nakho kuthatha ukubala nge `+`, `-`, `*`, `/` namabhulaketi:
`4+7/16` (4.4375 ngeyunithi ezenzakalelayo), `12'6" + 3/4"`, `(24'-0")/3` (amafidi angu-8), `2*450mm`.

- Idashi elibhalwe ebudeni liyingxenye yalo: `24'-6"` ingu-24 amafidi nama-inchi angu-6 futhi `6-1/2` ingu-6½. Beka izikhala ezungeze idashi ukuze ukhiphe: `24' - 6"` ingu-23'-6".
- Inani elingenalo uphawu liphindaphinda noma lihlukanise ubude njengenani; uma lengezwa kubude, liba ngeyunithi ezenzakalelayo.
- `abs`, `round`, `ceil` no `floor` nazo ziyasebenza. Ukubala okungafundeki kuyenqatshwa kanye nendawo lapho kwaphazamisa khona.

## Indlela okuboniswa ngayo ubude

Ubude buboniswa njengamafidi, amainchi nezingxenye zesi-16: `12'-6 1/2"`, `0'-0 3/4"`. Amanani azungezwa kwesiqingatha esiseduze kakhulu ukuze abonakale; amanani angokoqobo awazungezwa. Amanani e-decimal aboniswa ngamadesimali amabili namakhomba wamawaka, njengo `1,234.50 LF`.

## Amarethi (impahla nomsebenzi ngeyunithi ngayinye)

| Uthayipha | Kusho |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (kuya kumadesimali amane; okwengeziwe kuyazungezwa) |
| (empty) | $0 |

Umlayezo: "Faka inani njengo-12.50." noma "Lelo nani likhulu kakhulu." Amarethi angaphansi kuka-zero awamukelwa.

Amanani aqoqwe (impahla, umsebenzi, amasamba) abalwa kuya kusenti. Ubuningi nodoti × irethi, kuzungezwe kusuka ku-zero (isiqingatha siyanyuselwa), ngendlela efanayo nakwe-`ROUND(x, 2)` yesipredishithi.

## Iphesenti lodoti

| Uthayipha | Kusho |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (empty) | 0% |

Kuya kumadesimali amabili, kusuka ku-0% kuya ku-1000%. Imilayezo: "Faka iphesenti njengo-10 noma 7.5." noma "Udoti ophezulu kuka-1000% awuvunyelwe."

## Amagama namayunithi

- Amagama amaitemu namakhomponenti: kuya kuzinhlamvu ezingu-200.
- {{ui:Iyunithi}} yekhomponenti: noma yimuphi umbhalo kuya kuzinhlamvu ezingu-20, njengo `EA`, `sheets`, `CY`, `gal`. Iyilebula nje kuphela; i-TakeoffCraft ayiyiguquli.

## Izifomula

Izifomula zokuhlanganiswa zinemithetho yazo: bheka [Ulimi lwesifomula](topic:formulas).
