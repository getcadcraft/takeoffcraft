---
title: Ilgio, normos ir procentų įvedimas
summary: Ką galite įvesti atstumams, aukščiams, pinigų normoms ir atliekų procentams, su pavyzdžiais ir pranešimais apie įvestis, kurių TakeoffCraft negali perskaityti.
keywords: įvestis, formatas, pėdos ir coliai, trupmenos, dešimtainės pėdos, metrinė sistema, metrai, milimetrai, norma, kaina, doleriai, procentas, atliekos, rašymas
from: 215bbf4d
---

## Ilgiai

Naudojama **Tikras atstumas** lange {{ui:Kalibruoti}} ir {{ui:Aukštis}} bei {{ui:Gylis}} elemento redaktoriuje.

| Jūs įvedate | Tai reiškia |
|---|---|
| `24'-0"` | 24 pėdos |
| `24'-6 1/2"` | 24 pėdos 6½ colio |
| `12' 6 1/2"` | 12 pėdų 6½ colio (tarpas vietoj brūkšnio) |
| `12'-6-1/2"` | 12 pėdų 6½ colio (brūkšniai tarp dalių) |
| `24'` | 24 pėdos |
| `30"` | 30 colių |
| `6 1/2"` | 6½ colio |
| `3/4"` | ¾ colio |
| `24 ft 6 in` | 24 pėdos 6 coliai (taip pat `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 pagal numatytąjį vienetą (žr. žemiau) |
| `24.5'` | 24.5 pėdos |
| `7.5 m` | 7.5 metro |
| `750 cm` | 750 centimetrų |
| `7500 mm` | 7,500 milimetrų |

- Paprastas skaičius kalibravimui ir elementams LF, SF ar SY reiškia **pėdas**, o elementams m ar m² – **metrus**.
- Kreivos kabutės ir apostrofai iš tekstų rengyklių (′ ″ ’ ”) veikia kaip `'` ir `"`. Du apostrofai `''` yra laikomi `"`.
- Kableliai ignoruojami: `1,200 mm` yra 1200 mm.
- Trupmenos reikalauja sveikųjų skaičių abiejose pusėse: `6 1/2"` tinka, `6.5 1/2"` – ne.
- Nulinių ir neigiamų atstumų programa nepriima.

Pranešimai:

- „Įveskite atstumą, pavyzdžiui 24'-0" arba 7.5 m.“ (laukas tuščias)
- „Įveskite atstumą, didesnį už nulį.“
- „Naudokite pėdas ir colius (24'-6 1/2"), dešimtaines pėdas, m, cm arba mm.“ (nežinomas vienetas)
- „Atstumo nepavyko perskaityti. Pabandykite 24'-6 1/2" arba 24.5.“

Norėdami išvalyti elemento aukštį ar gylį, ištuštinkite lauką.

### Skaičiavimai

Kiekviename ilgio lauke, taip pat įvedimo laukelyje braižant, galima atlikti skaičiavimą su `+`, `-`, `*`, `/` ir skliaustais:
`4+7/16` (4.4375 pagal numatytąjį vienetą), `12'6" + 3/4"`, `(24'-0")/3` (8 pėdos), `2*450mm`.

- Brūkšnys, įrašytas į ilgį, vis dar yra jo dalis: `24'-6"` yra 24 pėdos 6 coliai, o `6-1/2` yra 6½. Norėdami atimti, rašykite tarpus aplink brūkšnį: `24' - 6"` yra 23'-6".
- Paprastas skaičius dauginamas ar dalijamas iš ilgio kaip skaičius; pridėtas prie ilgio, jis laikomas pagal numatytąjį vienetą.
- Veikia ir `abs`, `round`, `ceil` ir `floor`. Skaičiavimas, kurio negalima perskaityti, atmetamas, nurodant, kur įvyko klaida.

## Kaip rodomi ilgiai

Ilgiai rodomi pėdomis, coliais ir šešioliktosiomis: `12'-6 1/2"`, `0'-0 3/4"`. Rodomos reikšmės suapvalinamos iki artimiausios 1/16 colio; patys kiekiai nėra suapvalinami. Dešimtainės reikšmės rodomos su dviem skaitmenimis po skyriklio ir tūkstančių skyrikliais, pavyzdžiui `1,234.50 LF`.

## Normos (medžiagų ir darbo kaina už vienetą)

| Jūs įvedate | Tai reiškia |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (iki keturių skaitmenų po skyriklio; daugiau suapvalinama) |
| (tuščia) | $0 |

Pranešimas: „Įveskite sumą, pavyzdžiui 12.50.“ arba „Ši suma per didelė.“ Neigiamos normos nepriimamos.

Išvestinės sumos (medžiagos, darbas, bendros sumos) skaičiuojamos iki cento: kiekis su atliekomis × norma, suapvalinta pusė nuo nulio, lygiai kaip skaičiuoklės `ROUND(x, 2)`.

## Atliekų procentas

| Jūs įvedate | Tai reiškia |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (tuščia) | 0% |

Iki dviejų skaitmenų po skyriklio, nuo 0% iki 1000%. Pranešimai: „Įveskite procentą, pavyzdžiui 10 arba 7.5.“ arba „Atliekos virš 1000% neleidžiamos.“

## Pavadinimai ir vienetai

- Elementų ir komponentų pavadinimai: iki 200 simbolių.
- Komponento {{ui:Vienetas}}: bet koks tekstas iki 20 simbolių, pavyzdžiui `EA`, `lapai`, `CY`, `gal`. Tai tik žymė; TakeoffCraft jos nekonvertuoja.

## Formulės

Sudėties formulės turi savas taisykles: žr. [Formulių kalba](topic:formulas).
