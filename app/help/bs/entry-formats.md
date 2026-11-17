---
title: Unos dužina, cijena i postotaka
summary: Šta možeš upisati za udaljenosti, visine, novčane cijene i postotke otpada, s primjerima i porukama za unos koji TakeoffCraft ne može pročitati.
keywords: unos, format, stope inči, razlomci, decimalne stope, metrički, metri, milimetri, cijena, novac, dolari, postotak, otpad, kucanje
from: 215bbf4d
---

## Dužine

Koristi se za **Stvarna udaljenost** u {{ui:Calibrate}}, te za {{ui:Height}} i {{ui:Depth}} u uređivaču stavke.

| Upisuješ | Znači |
|---|---|
| `24'-0"` | 24 stope |
| `24'-6 1/2"` | 24 stope 6½ inča |
| `12' 6 1/2"` | 12 stopa 6½ inča (razmak umjesto crtice) |
| `12'-6-1/2"` | 12 stopa 6½ inča (crtice između dijelova) |
| `24'` | 24 stope |
| `30"` | 30 inča |
| `6 1/2"` | 6½ inča |
| `3/4"` | ¾ inča |
| `24 ft 6 in` | 24 stope 6 inča (također `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 u zadanoj jedinici (vidi dolje) |
| `24.5'` | 24.5 stopa |
| `7.5 m` | 7.5 metara |
| `750 cm` | 750 centimetara |
| `7500 mm` | 7,500 milimetara |

- Običan broj je u **stopama** za kalibraciju i za stavke u LF, SF ili SY, a u **metrima** za stavke u m ili m².
- Kovrčavi navodnici i oznake za prim iz tekst procesora (′ ″ ’ ”) rade kao `'` i `"`. Dva apostrofa `''` znače `"`.
- Zarezi se zanemaruju: `1,200 mm` je 1200 mm.
- Razlomci zahtijevaju cijele brojeve s obje strane: `6 1/2"` radi, `6.5 1/2"` ne.
- Nulte i negativne udaljenosti se odbijaju.

Poruke:

- "Upiši udaljenost, na primjer 24'-0" ili 7.5 m." (polje je prazno)
- "Upiši udaljenost veću od nule."
- "Koristi stope i inče (24'-6 1/2"), decimalne stope, m, cm ili mm." (nepoznata jedinica)
- "Ta udaljenost se nije mogla pročitati. Pokušaj 24'-6 1/2" ili 24.5."

Da obrišeš visinu ili dubinu stavke, isprazni polje.

### Računanje

Svako polje za dužinu, kao i polje za unos dok crtaš, prima i račun sa `+`, `-`, `*`, `/` i zagradama:
`4+7/16` (4.4375 u zadanoj jedinici), `12'6" + 3/4"`, `(24'-0")/3` (8 stopa), `2*450mm`.

- Crtica upisana u dužinu i dalje je dio nje: `24'-6"` je 24 stope 6 inča, a `6-1/2` je 6½. Stavi razmake oko crtice da oduzmeš: `24' - 6"` je 23'-6".
- Običan broj množi ili dijeli dužinu kao broj; dodan dužini znači zadanu jedinicu.
- Rade i `abs`, `round`, `ceil` i `floor`. Račun koji se ne može pročitati se odbija uz navod gdje je pogriješeno.

## Kako se dužine prikazuju

Dužine se prikazuju kao stope, inči i šesnaestine: `12'-6 1/2"`, `0'-0 3/4"`. Vrijednosti se za prikaz zaokružuju na najbližu 1/16 inča; same količine nisu zaokružene. Decimalne vrijednosti se prikazuju s dvije decimale i separatorima hiljada, na primjer `1,234.50 LF`.

## Cijene (materijal i rad po jedinici)

| Upisuješ | Znači |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (do četiri decimale; više se zaokružuje) |
| (prazno) | $0 |

Poruka: "Upiši iznos, na primjer 12.50." ili "Taj iznos je prevelik." Negativne cijene nisu prihvaćene.

Prošireni iznosi (materijal, rad, ukupno) računaju se do centa: količina s otpadom × cijena, zaokruženo na polovinu od nule, potpuno kao `ROUND(x, 2)` u tabličnom programu.

## Postotak otpada

| Upisuješ | Znači |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (prazno) | 0% |

Do dvije decimale, od 0% do 1000%. Poruke: "Upiši postotak, na primjer 10 ili 7.5." ili "Otpad iznad 1000% nije dozvoljen."

## Nazivi i jedinice

- Nazivi stavki i komponenti: do 200 znakova.
- {{ui:Unit}} komponente: bilo koji tekst do 20 znakova, na primjer `EA`, `listovi`, `CY`, `gal`. To je samo oznaka; TakeoffCraft je ne pretvara.

## Formule

Formule sklopova imaju svoja pravila: vidi [Jezik formula](topic:formulas).
