---
title: Unos duljina, cijena i postotaka
summary: Što možete upisati za udaljenosti, visine, novčane cijene i postotke gubitka, s primjerima i porukama za unos koji TakeoffCraft ne može pročitati.
keywords: unos, format, stope, inči, razlomci, decimalne stope, metrički, metri, milimetri, cijena, novac, dolari, postotak, gubitak, tipkanje
from: 215bbf4d
---

## Duljine

Koriste ih **Stvarna udaljenost** u {{ui:Kalibriraj}} te {{ui:Visina}} i {{ui:Dubina}} u uređivaču stavke.

| Upišete | Znači |
|---|---|
| `24'-0"` | 24 stope |
| `24'-6 1/2"` | 24 stope i 6½ inča |
| `12' 6 1/2"` | 12 stopa i 6½ inča (razmak umjesto crtice) |
| `12'-6-1/2"` | 12 stopa i 6½ inča (crtice između dijelova) |
| `24'` | 24 stope |
| `30"` | 30 inča |
| `6 1/2"` | 6½ inča |
| `3/4"` | ¾ inča |
| `24 ft 6 in` | 24 stope i 6 inča (također `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 u zadanoj jedinici (vidi dolje) |
| `24.5'` | 24.5 stopa |
| `7.5 m` | 7.5 metara |
| `750 cm` | 750 centimetara |
| `7500 mm` | 7,500 milimetara |

- Običan broj je u **stopama** za kalibraciju i za stavke u LF, SF ili SY, a u **metrima** za stavke u m ili m².
- Kosi navodnici i oznake minuta iz tekst-procesora (′ ″ ’ ”) rade kao `'` i `"`. Dvije apostrofe `''` vrijede kao `"`.
- Zarezi se zanemaruju: `1,200 mm` je 1200 mm.
- Razlomci zahtijevaju cijele brojeve s obje strane: `6 1/2"` radi, `6.5 1/2"` ne.
- Nulte i negativne udaljenosti se odbijaju.

Poruke:

- „Upišite udaljenost, npr. 24'-0" ili 7.5 m.“ (polje je prazno)
- „Upišite udaljenost veću od nule.“
- „Upotrijebite stope i inče (24'-6 1/2"), decimalne stope, m, cm ili mm.“ (nepoznata jedinica)
- „Tu udaljenost nije moguće pročitati. Pokušajte 24'-6 1/2" ili 24.5.“

Da obrišete visinu ili dubinu stavke, ispraznite polje.

### Aritmetika

Svako polje za duljinu, kao i okvir za upis dok crtate, prihvaća i račun sa `+`, `-`, `*`, `/` i zagradama:
`4+7/16` (4.4375 u zadanoj jedinici), `12'6" + 3/4"`, `(24'-0")/3` (8 stopa), `2*450mm`.

- Crtica upisana u duljinu i dalje je njezin dio: `24'-6"` je 24 stope i 6 inča, a `6-1/2` je 6½. Za oduzimanje stavite razmake oko crtice: `24' - 6"` je 23'-6".
- Običan broj množi ili dijeli duljinu kao broj; dodan duljini, u zadanoj je jedinici.
- Rade i `abs`, `round`, `ceil` i `floor`. Račun koji se ne može pročitati odbija se uz navod gdje je pogriješeno.

## Kako se duljine prikazuju

Duljine se prikazuju u stopama, inčima i šesnaestinama: `12'-6 1/2"`, `0'-0 3/4"`. Vrijednosti se za prikaz zaokružuju na najbližu 1/16 inča; same količine nisu zaokružene. Decimalne vrijednosti prikazuju se s dvije decimale i separatorima tisućica, npr. `1,234.50 LF`.

## Cijene (materijal i rad po jedinici)

| Upišete | Znači |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (do četiri decimale; više se zaokružuje) |
| (prazno) | $0 |

Poruka: „Upišite iznos, npr. 12.50.“ ili „Taj iznos je prevelik.“ Negativne cijene se ne prihvaćaju.

Prošireni iznosi (materijal, rad, ukupni zbrojevi) izračunavaju se do centa: količina s gubitkom × cijena, zaokruženo polovine od nule, točno kao `ROUND(x, 2)` u proračunskoj tablici.

## Postotak gubitka

| Upišete | Znači |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (prazno) | 0% |

Do dvije decimale, od 0% do 1000%. Poruke: „Upišite postotak, npr. 10 ili 7.5.“ ili „Gubitak iznad 1000% nije dopušten.“

## Nazivi i jedinice

- Nazivi stavki i komponenti: do 200 znakova.
- {{ui:Jedinica}} komponente: bilo koji tekst do 20 znakova, npr. `EA`, `sheets`, `CY`, `gal`. To je samo oznaka; TakeoffCraft je ne pretvara.

## Formule

Formule sklopova imaju vlastita pravila: vidi [Jezik formula](topic:formulas).
