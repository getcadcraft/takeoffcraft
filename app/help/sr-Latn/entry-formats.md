---
title: Unos dužina, jediničnih cena i procenata
summary: Šta možete da upišete za rastojanja, visine, jedinične cene i procente škarta, sa primerima i porukama za unos koji TakeoffCraft ne može da pročita.
keywords: unos, format, stope i inči, razlomci, decimalne stope, metrički, metri, milimetri, cena, novac, dolari, procenat, škart, kucanje
from: 215bbf4d
---

## Dužine

Koristi se za **Stvarno rastojanje** u {{ui:Kalibriši}} i za {{ui:Visina}} i {{ui:Dubina}} u uređivaču stavki.

| Upišete | Znači |
|---|---|
| `24'-0"` | 24 stope |
| `24'-6 1/2"` | 24 stope i 6½ inča |
| `12' 6 1/2"` | 12 stopa i 6½ inča (razmak umesto crtice) |
| `12'-6-1/2"` | 12 stopa i 6½ inča (crtice između delova) |
| `24'` | 24 stope |
| `30"` | 30 inča |
| `6 1/2"` | 6½ inča |
| `3/4"` | ¾ inča |
| `24 ft 6 in` | 24 stope i 6 inča (takođe `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 u podrazumevanoj jedinici (vidi dole) |
| `24.5'` | 24.5 stopa |
| `7.5 m` | 7.5 metara |
| `750 cm` | 750 centimetara |
| `7500 mm` | 7,500 milimetara |

- Običan broj je u **stopama** za kalibraciju i za stavke u LF, SF ili SY, a u **metrima** za stavke u m ili m².
- Kurzivni navodnici i oznake za prim iz obrade teksta (′ ″ ’ ”) rade kao `'` i `"`. Dva apostrofa `''` važe kao `"`.
- Zarezi se ignorišu: `1,200 mm` je 1200 mm.
- Razlomci moraju imati cele brojeve s obe strane: `6 1/2"` radi, `6.5 1/2"` ne.
- Nulte i negativne distance se odbijaju.

Poruke:

- „Upišite rastojanje, na primer 24'-0" ili 7.5 m.“ (polje je prazno)
- „Upišite rastojanje veće od nule.“
- „Koristite stope i inče (24'-6 1/2"), decimalne stope, m, cm ili mm.“ (nepoznata jedinica)
- „Rastojanje nije moguće pročitati. Probajte 24'-6 1/2" ili 24.5.“

Da obrišete visinu ili dubinu stavke, ispraznite polje.

### Aritmetika

Svako polje za dužinu, kao i okvir za unos tokom crtanja, prihvata i proračun sa `+`, `-`, `*`, `/` i zagradama:
`4+7/16` (4.4375 u podrazumevanoj jedinici), `12'6" + 3/4"`, `(24'-0")/3` (8 stopa), `2*450mm`.

- Crtica napisana u dužini je i dalje deo nje: `24'-6"` je 24 stope i 6 inča, a `6-1/2` je 6½. Stavite razmake oko crtice da oduzmete: `24' - 6"` je 23'-6".
- Običan broj množi ili deli dužinu kao broj; dodat dužini znači podrazumevanu jedinicu.
- `abs`, `round`, `ceil` i `floor` takođe rade. Proračun koji se ne može pročitati se odbija, uz naznaku gde je pošlo po zlu.

## Kako se dužine prikazuju

Dužine se prikazuju kao stope, inči i šesnaestine: `12'-6 1/2"`, `0'-0 3/4"`. Vrednosti se zaokružuju na najbližu 1/16 inča za prikaz; same količine se ne zaokružuju. Decimalne vrednosti se prikazuju sa dve decimale i separatorom hiljada, kao `1,234.50 LF`.

## Jedinične cene (materijal i rad po jedinici)

| Upišete | Znači |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (do četiri decimale; više se zaokružuju) |
| (prazno) | $0 |

Poruka: „Upišite iznos, na primer 12.50.“ ili „Taj iznos je previše velik.“ Negativne cene se ne prihvataju.

Prošireni iznosi (materijal, rad, ukupno) računaju se do centa: količina sa škartom × cena, zaokruženo od nule na dalje, tačno kao `ROUND(x, 2)` u proračunskoj tabeli.

## Procenat škarta

| Upišete | Znači |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (prazno) | 0% |

Do dve decimale, od 0% do 1000%. Poruke: „Upišite procenat, na primer 10 ili 7.5.“ ili „Škart iznad 1000% nije dozvoljen.“

## Nazivi i jedinice

- Nazivi stavki i komponenti: do 200 znakova.
- {{ui:Jedinica}} komponente: bilo koji tekst do 20 znakova, na primer `EA`, `listova`, `CY`, `gal`. To je samo oznaka; TakeoffCraft je ne pretvara.

## Formule

Formule sklopova imaju svoja pravila: vidi [Jezik formula](topic:formulas).
