---
title: Pikkuse, hinna ja protsendi sisestamine
summary: Mida saad sisestada vahemaadele, kõrgustele, rahasummadele, hindadele ja kaduprotsentidele, koos näidete ning sõnumitega sisendite kohta, mida TakeoffCraft ei suuda lugeda.
keywords: sisend, vorming, jalad tollid, murdarvud, kümnendjalad, meetriline, meetrid, millimeetrid, hind, raha, dollarid, protsent, kadu, sisestamine
from: 215bbf4d
---

## Pikkused

Kasutatav **Tegelik kaugus** väljal {{ui:Kalibreeri}} ning väljadel {{ui:Kõrgus}} ja {{ui:Sügavus}} kirjeredaktoris.

| Sisestad | See tähendab |
|---|---|
| `24'-0"` | 24 jalga |
| `24'-6 1/2"` | 24 jalga 6½ tolli |
| `12' 6 1/2"` | 12 jalga 6½ tolli (tühik kriipsu asemel) |
| `12'-6-1/2"` | 12 jalga 6½ tolli (kriipsud osade vahel) |
| `24'` | 24 jalga |
| `30"` | 30 tolli |
| `6 1/2"` | 6½ tolli |
| `3/4"` | ¾ tolli |
| `24 ft 6 in` | 24 jalga 6 tolli (samuti `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 vaikeühikus (vt allpool) |
| `24.5'` | 24.5 jalga |
| `7.5 m` | 7.5 meetrit |
| `750 cm` | 750 sentimeetrit |
| `7500 mm` | 7,500 millimeetrit |

- Lihtne arv on kalibreerimisel ja LF-, SF- või SY-kirjetel **jalgades**, m- või m²-kirjetel **meetrites**.
- Tekstitöötlusest pärit jutumärgid ja prime-märgid (′ ″ ’ ”) töötavad nagu `'` ja `"`. Kaks apostroofi `''` loetakse `"`-ks.
- Komad ignoreeritakse: `1,200 mm` on 1200 mm.
- Murdude mõlemal pool peavad olema täisarvud: `6 1/2"` töötab, `6.5 1/2"` ei tööta.
- Null ja negatiivsed kaugused lükatakse tagasi.

Sõnumid:

- „Sisesta kaugus, näiteks 24'-0" või 7.5 m.“ (väli on tühi)
- „Sisesta kaugus, mis on suurem kui null.“
- „Kasuta jalgu ja tolle (24'-6 1/2"), kümnendjalgu, m, cm või mm.“ (tundmatu ühik)
- „Seda kaugust ei saanud lugeda. Proovi 24'-6 1/2" või 24.5.“

Kirje kõrguse või sügavuse eemaldamiseks tühjenda väli.

### Arvutused

Iga pikkuse väli ning joonistamise ajal sisestuskast võtab vastu ka arvutuse `+`, `-`, `*`, `/` ja sulgudega:
`4+7/16` (4.4375 vaikeühikus), `12'6" + 3/4"`, `(24'-0")/3` (8 jalga), `2*450mm`.

- Pikkusesse kirjutatud kriips kuulub endiselt selle juurde: `24'-6"` on 24 jalga 6 tolli ja `6-1/2` on 6½. Lahutamiseks pane kriipsu ümber tühikud: `24' - 6"` on 23'-6".
- Lihtne arv korrutab või jagab pikkust arvuna; pikkusele liidetuna on see vaikeühikus.
- Töötavad ka `abs`, `round`, `ceil` ja `floor`. Arvutus, mida ei saa lugeda, lükatakse tagasi koos märkega, kus viga tekkis.

## Kuidas pikkused kuvatakse

Pikkused kuvatakse jalgades, tollides ja kuueteistkümnendikes: `12'-6 1/2"`, `0'-0 3/4"`. Kuvamiseks ümardatakse väärtused lähima 1/16 tollini; kogused ise ei ole ümardatud. Kümnendväärtused kuvatakse kahe kümnendkohaga ja tuhandikueraldajatega, näiteks `1,234.50 LF`.

## Hinnad (materjal ja tööjõud ühiku kohta)

| Sisestad | See tähendab |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (kuni neli kümnendkohta; rohkem ümardatakse) |
| (tühi) | $0 |

Sõnum: „Sisesta summa, näiteks 12.50.“ või „See summa on liiga suur.“ Negatiivseid hindu ei aktsepteerita.

Kogusummad (materjal, tööjõud, kokku) arvutatakse sendini: kogus koos kaduga × hind, ümardatud pooled eemale nullist, täpselt nagu tabelarvutuse `ROUND(x, 2)`.

## Kadu protsent

| Sisestad | See tähendab |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (tühi) | 0% |

Kuni kaks kümnendkohta, 0%-st kuni 1000%-ni. Sõnumid: „Sisesta protsent, näiteks 10 või 7.5.“ või „Kadu üle 1000% ei ole lubatud.“

## Nimed ja ühikud

- Kirje ja komponendi nimed: kuni 200 tähemärki.
- Komponendi {{ui:Ühik}}: mis tahes tekst kuni 20 tähemärki, näiteks `EA`, `sheets`, `CY`, `gal`. See on ainult silt; TakeoffCraft ei teisenda seda.

## Valemid

Koostevalemitel on omad reeglid: vt [Valemikeel](topic:formulas).
