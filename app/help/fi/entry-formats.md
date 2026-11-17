---
title: Pituuksien, hintojen ja prosenttien syöttö
summary: Mitä voit kirjoittaa etäisyyksille, korkeuksille, hinnoille ja hukkaprosenteille, esimerkkeinä sekä viesteinä syötteistä, joita TakeoffCraft ei pysty lukemaan.
keywords: syöte, muoto, jalat ja tuumat, murtoluvut, desimaalijalat, metrijärjestelmä, metrit, millimetrit, hinta, raha, dollarit, prosentti, hukka, kirjoittaminen
from: 215bbf4d
---

## Pituudet

Käytetään **Todellinen etäisyys** -kohdassa {{ui:Kalibroi}}-toiminnossa sekä nimikkeen muokkausikkunan {{ui:Korkeus}}- ja {{ui:Syvyys}}-kentissä.

| Kirjoitat | Se tarkoittaa |
|---|---|
| `24'-0"` | 24 jalkaa |
| `24'-6 1/2"` | 24 jalkaa 6½ tuumaa |
| `12' 6 1/2"` | 12 jalkaa 6½ tuumaa (väli viivan sijasta) |
| `12'-6-1/2"` | 12 jalkaa 6½ tuumaa (viivat osien välissä) |
| `24'` | 24 jalkaa |
| `30"` | 30 tuumaa |
| `6 1/2"` | 6½ tuumaa |
| `3/4"` | ¾ tuumaa |
| `24 ft 6 in` | 24 jalkaa 6 tuumaa (myös `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 oletusyksikössä (katso alla) |
| `24.5'` | 24.5 jalkaa |
| `7.5 m` | 7.5 metriä |
| `750 cm` | 750 senttimetriä |
| `7500 mm` | 7,500 millimetriä |

- Pelkkä luku on **jalkoina** kalibroinnissa ja nimikkeissä yksiköissä LF, SF tai SY, ja **metreinä** nimikkeissä yksiköissä m tai m².
- Kaarevat lainausmerkit ja tekstinkäsittelyn heittomerkit (′ ″ ’ ”) toimivat kuten `'` ja `"`. Kaksi heittomerkkiä `''` lasketaan merkiksi `"`.
- Pilkut jätetään huomiotta: `1,200 mm` on 1200 mm.
- Murtoluvuissa on oltava kokonaisluvut molemmin puolin: `6 1/2"` toimii, `6.5 1/2"` ei.
- Nolla ja negatiiviset etäisyydet hylätään.

Viestit:

- ”Kirjoita etäisyys, esimerkiksi 24'-0" tai 7.5 m.” (kenttä on tyhjä)
- ”Kirjoita etäisyys, joka on suurempi kuin nolla.”
- ”Käytä jalkoja ja tuumia (24'-6 1/2"), desimaalijalkoja, m, cm tai mm.” (tuntematon yksikkö)
- ”Etäisyyttä ei voitu lukea. Kokeile 24'-6 1/2" tai 24.5.”

Tyhjentääksesi nimikkeen korkeuden tai syvyyden, tyhjennä kenttä.

### Laskutoimitukset

Jokainen pituuskenttä sekä piirtämisen aikana oleva kirjoituskenttä hyväksyy myös laskutoimituksen merkeillä `+`, `-`, `*`, `/` ja sulkeilla:
`4+7/16` (4.4375 in oletusyksikössä), `12'6" + 3/4"`, `(24'-0")/3` (8 jalkaa), `2*450mm`.

- Pituuteen kirjoitettu viiva on yhä osa sitä: `24'-6"` on 24 jalkaa 6 tuumaa ja `6-1/2` on 6½. Vähennä välilyönnein viivan ympärillä: `24' - 6"` on 23'-6".
- Pelkkä luku kertoo tai jakaa pituuden lukuna; pituuteen lisättynä se on oletusyksikössä.
- Toimivat myös `abs`, `round`, `ceil` ja `floor`. Laskutoimitus, jota ei voi lukea, hylätään, ja virheen kohta kerrotaan.

## Miten pituudet näytetään

Pituudet näkyvät jalkoina, tuumina ja kuudestoistaosina: `12'-6 1/2"`, `0'-0 3/4"`. Arvot pyöristetään näytössä lähimpään 1/16 tuumaan; määriä itseään ei pyöristetä. Desimaaliarvot näkyvät kahdella desimaalilla ja tuhaterottimilla, kuten `1,234.50 LF`.

## Hinnat (materiaali ja työ yksikköä kohden)

| Kirjoitat | Se tarkoittaa |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (enintään neljä desimaalia; enemmät pyöristetään) |
| (tyhjä) | $0 |

Viesti: ”Kirjoita summa, esimerkiksi 12.50.” tai ”Summa on liian suuri.” Negatiivisia hintoja ei hyväksytä.

Lasketut summat (materiaali, työ, yhteensä) lasketaan sentin tarkkuudella: määrä hukkineen × hinta, puolikkaat pyöristettynä nollasta poispäin, täsmälleen kuten taulukkolaskennan `ROUND(x, 2)`.

## Hukkaprosentti

| Kirjoitat | Se tarkoittaa |
|---|---|
| `10` | 10 % |
| `7.5%` | 7.5 % |
| (tyhjä) | 0 % |

Enintään kaksi desimaalia, 0 %:sta 1000 %:iin. Viestit: ”Kirjoita prosentti, esimerkiksi 10 tai 7.5.” tai ”Hukka yli 1000 % ei ole sallittu.”

## Nimet ja yksiköt

- Nimikkeen ja osan nimi: enintään 200 merkkiä.
- Osan {{ui:Yksikkö}}: mikä tahansa teksti enintään 20 merkkiä, kuten `EA`, `sheets`, `CY`, `gal`. Se on vain nimiö; TakeoffCraft ei muunna sitä.

## Kaavat

Kokoonpanokaavoilla on omat sääntönsä: katso [Kaavakieli](topic:formulas).
