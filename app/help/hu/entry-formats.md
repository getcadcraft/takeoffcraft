---
title: Hossz-, egységár- és százalékbevitel
summary: Mit írhat be távolságokhoz, magasságokhoz, pénzbeli egységárakhoz és hulladékszázalékokhoz, példákkal és azokkal az üzenetekkel, amelyeket a TakeoffCraft nem tud értelmezni.
keywords: bevitel, formátum, láb és hüvelyk, törtek, tizedes láb, metrikus, méter, milliméter, egységár, pénz, dollár, százalék, hulladék, gépelés
from: 215bbf4d
---

## Hosszúságok

A **Valós távolság** mezőt a {{ui:Kalibrálás}} ablakban használja, valamint a tételszerkesztő {{ui:Magasság}} és {{ui:Mélység}} mezőit.

| Beírt érték | Jelentése |
|---|---|
| `24'-0"` | 24 láb |
| `24'-6 1/2"` | 24 láb 6½ hüvelyk |
| `12' 6 1/2"` | 12 láb 6½ hüvelyk (szóköz a kötőjel helyett) |
| `12'-6-1/2"` | 12 láb 6½ hüvelyk (kötőjelek a részek között) |
| `24'` | 24 láb |
| `30"` | 30 hüvelyk |
| `6 1/2"` | 6½ hüvelyk |
| `3/4"` | ¾ hüvelyk |
| `24 ft 6 in` | 24 láb 6 hüvelyk (ugyanígy: `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24,5 az alapértelmezett mértékegységben (lásd lent) |
| `24.5'` | 24,5 láb |
| `7.5 m` | 7,5 méter |
| `750 cm` | 750 centiméter |
| `7500 mm` | 7 500 milliméter |

- Egy egyszerű szám **lábat** jelent kalibráláskor, valamint az LF, SF vagy SY mértékegységű tételeknél, és **métert** az m vagy m² mértékegységű tételeknél.
- A szövegszerkesztőkből származó görbe idézőjelek és vesszőjelek (′ ″ ’ ”) ugyanúgy működnek, mint a `'` és a `"`. A két aposztróf `''` a `"` jellel egyenértékű.
- A vesszők figyelmen kívül maradnak: a `1,200 mm` 1200 mm.
- A törtekhez egész számok kellenek mindkét oldalon: a `6 1/2"` működik, a `6.5 1/2"` nem.
- A nulla és a negatív távolságok nem elfogadottak.

Üzenetek:

- „Adja meg a távolságot, például 24'-0" vagy 7.5 m.” (a mező üres)
- „Adjon meg nullánál nagyobb távolságot.”
- „Használjon láb és hüvelyk formátumot (24'-6 1/2"), tizedes lábat, m, cm vagy mm mértékegységet.” (ismeretlen mértékegység)
- „Ezt a távolságot nem lehetett értelmezni. Próbálja a 24'-6 1/2" vagy 24.5 formátumot.”

A tétel magasságának vagy mélységének törléséhez ürítse ki a mezőt.

### Számítás

Minden hosszmező, valamint a rajzolás közben használt beírómező elfogadja a `+`, `-`, `*`, `/` jelekkel és zárójelekkel írt számításokat:
`4+7/16` (4,4375 az alapértelmezett mértékegységben), `12'6" + 3/4"`, `(24'-0")/3` (8 láb), `2*450mm`.

- A hosszba írt kötőjel a hossz része: a `24'-6"` 24 láb 6 hüvelyk, a `6-1/2` pedig 6½. Kivonáshoz tegyen szóközt a kötőjel köré: a `24' - 6"` 23'-6".
- Egy egyszerű szám számként szorozza vagy osztja a hosszt; hosszhoz adva az alapértelmezett mértékegységben értendő.
- Az `abs`, `round`, `ceil` és `floor` is működik. Az olvashatatlan számítást a hiba helyével együtt elutasítja.

## Hogyan jelennek meg a hosszak

A hosszak láb, hüvelyk és tizenhatod formában jelennek meg: `12'-6 1/2"`, `0'-0 3/4"`. Az értékek megjelenítéskor a legközelebbi 1/16 hüvelykre kerekítődnek; maguk a mennyiségek nincsenek kerekítve. A tizedes értékek két tizedesjeggyel és ezres elválasztóval jelennek meg, például `1,234.50 LF`.

## Egységárak (anyag és munkadíj egységenként)

| Beírt érték | Jelentése |
|---|---|
| `12.5` | 12,50 $ |
| `$12.50` | 12,50 $ |
| `1,250` | 1 250,00 $ |
| `0.385` | 0,385 $ (legfeljebb négy tizedesjegy; a többi kerekítve) |
| (üres) | 0 $ |

Üzenet: „Adjon meg összeget, például 12.50.” vagy „Ez az összeg túl nagy.” A negatív egységárakat nem fogadja el.

A kiterjesztett összegek (anyag, munkadíj, összesen) cent pontossággal számítódnak: mennyiség hulladékkal × egységár, a felezések a nullától távolabb kerekítve, pontosan úgy, mint a táblázatkezelő `ROUND(x, 2)` függvénye.

## Hulladékszázalék

| Beírt érték | Jelentése |
|---|---|
| `10` | 10% |
| `7.5%` | 7,5% |
| (üres) | 0% |

Legfeljebb két tizedesjegy, 0% és 1000% között. Üzenetek: „Adjon meg százalékot, például 10 vagy 7.5.” vagy „1000% fölötti hulladék nem megengedett.”

## Nevek és mértékegységek

- Tétel- és összetevőnevek: legfeljebb 200 karakter.
- Egy összetevő {{ui:Egység}} mezője: legfeljebb 20 karakter bármilyen szöveg, például `EA`, `sheets`, `CY`, `gal`. Ez csak címke; a TakeoffCraft nem váltja át.

## Képletek

Az összetevőképletekre külön szabályok vonatkoznak: lásd [Képletnyelv](topic:formulas).
