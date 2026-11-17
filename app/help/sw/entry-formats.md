---
title: Uingizaji wa urefu, viwango na asilimia
summary: Unachoweza kuandika kwa umbali, vimo, viwango vya fedha na asilimia za upotevu, pamoja na mifano na ujumbe wa ingizo ambalo TakeoffCraft haliwezi kulisoma.
keywords: ingizo, muundo, futi inchi, sehemu, futi za desimali, metriki, mita, milimita, kiwango, fedha, dola, asilimia, upotevu, kuandika
from: 215bbf4d
---

## Urefu

Hutumiwa na **Umbali halisi** katika {{ui:Rekebisha}}, na na {{ui:Kimo}} na {{ui:Kina}} katika mhariri wa kipengee.

| Unaandika | Maana yake |
|---|---|
| `24'-0"` | futi 24 |
| `24'-6 1/2"` | futi 24 na inchi 6½ |
| `12' 6 1/2"` | futi 12 na inchi 6½ (nafasi badala ya kistari) |
| `12'-6-1/2"` | futi 12 na inchi 6½ (vistari kati ya sehemu) |
| `24'` | futi 24 |
| `30"` | inchi 30 |
| `6 1/2"` | inchi 6½ |
| `3/4"` | inchi ¾ |
| `24 ft 6 in` | futi 24 na inchi 6 (pia `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 katika kitengo chaguo-msingi (tazama hapa chini) |
| `24.5'` | futi 24.5 |
| `7.5 m` | mita 7.5 |
| `750 cm` | sentimita 750 |
| `7500 mm` | milimita 7,500 |

- Nambari tupu inamaanisha **futi** kwa urekebishaji na kwa vipengee katika LF, SF au SY, na **mita** kwa vipengee katika m au m².
- Nukuu zilizopinda na alama za prime kutoka kwa programu za kuchapa (′ ″ ’ ”) hufanya kazi kama `'` na `"`. Apostrofi mbili `''` zinahesabiwa kama `"`.
- Koma hazizingatiwi: `1,200 mm` ni 1200 mm.
- Sehemu zinahitaji nambari nzima pande zote mbili: `6 1/2"` inafanya kazi, `6.5 1/2"` haifanyi kazi.
- Umbali wa sifuri na hasi unakataliwa.

Ujumbe:

- "Andika umbali, kama 24'-0" au 7.5 m." (sehemu ni tupu)
- "Andika umbali mkubwa kuliko sifuri."
- "Tumia futi na inchi (24'-6 1/2"), futi za desimali, m, cm au mm." (kitengo kisichojulikana)
- "Umbali huo haukuweza kusomwa. Jaribu 24'-6 1/2" au 24.5."

Ili kufuta urefu au kina cha kipengee, futa sehemu.

### Hesabu

Kila sehemu ya urefu, pamoja na kisanduku cha kuandika wakati unachora, pia hukubali hesabu kwa `+`, `-`, `*`, `/` na mabano:
`4+7/16` (4.4375 katika kitengo chaguo-msingi), `12'6" + 3/4"`, `(24'-0")/3` (futi 8), `2*450mm`.

- Kistari kilichoandikwa ndani ya urefu bado ni sehemu yake: `24'-6"` ni futi 24 na inchi 6, na `6-1/2` ni 6½. Weka nafasi kuzunguka kistari ili kutoa: `24' - 6"` ni 23'-6".
- Nambari tupu huzidisha au kugawanya urefu kama nambari; ikiongezwa kwa urefu, iko katika kitengo chaguo-msingi.
- `abs`, `round`, `ceil` na `floor` pia zinafanya kazi. Hesabu isiyoweza kusomwa inakataliwa, pamoja na mahali ilipokosea.

## Jinsi urefu unavyoonyeshwa

Urefu huonyeshwa kama futi, inchi na sehemu za kumi na sita: `12'-6 1/2"`, `0'-0 3/4"`. Thamani hupigwa mviringo hadi 1/16 ya inchi iliyo karibu zaidi kwa kuonyesha; viasi vyenyewe havipigwi mviringo. Thamani za desimali huonyeshwa kwa desimali mbili na vitenganishi vya maelfu, kama `1,234.50 LF`.

## Viwango (vya nyenzo na kazi kwa kila kitengo)

| Unaandika | Maana yake |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (hadi desimali nne; zaidi zinapigwa mviringo) |
| (tupu) | $0 |

Ujumbe: "Andika kiasi kama 12.50." au "Kiasi hicho ni kikubwa mno." Viwango hasi havikubaliwi.

Kiasi kilichopanuliwa (nyenzo, kazi, jumla) kinakokotolewa hadi senti: kiasi chenye upotevu × kiwango, kikipigwa mviringo nusu mbali na sifuri, kama `ROUND(x, 2)` ya lahajedwali.

## Asilimia ya upotevu

| Unaandika | Maana yake |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (tupu) | 0% |

Hadi desimali mbili, kutoka 0% hadi 1000%. Ujumbe: "Andika asilimia kama 10 au 7.5." au "Upotevu zaidi ya 1000% hauruhusiwi."

## Majina na vitengo

- Majina ya vipengee na vipengele: hadi herufi 200.
- {{ui:Kitengo}} cha kipengele: maandishi yoyote hadi herufi 20, kama `EA`, `karatasi`, `CY`, `gal`. Ni lebo tu; TakeoffCraft haibadilishi kitengo.

## Fomula

Fomula za mkusanyiko zina kanuni zake: tazama [Lugha ya fomula](topic:formulas).
