---
title: Vientisarakkeet
summary: Jokainen XLSX-viennin taulukko ja sarake sekä CSV-tiedoston sisältö, ja kustannusarvio-taulukon kaavat.
keywords: vienti, sarakkeet, xlsx, csv, taulukko, kustannusarvio, arkki, merkinnät, mittakaavat, kaavat, kentät
from: fed07851
---

## Kustannusarvio (XLSX-taulukko ja CSV)

Yksi rivi nimikettä kohden, ja sen kokoonpanon osalle rivi kukin osa (sisennettynä). Sen jälkeen tyhjä rivi ja kokonaissumma.

| Sarake | Sisältö | XLSX-tiedostossa |
|---|---|---|
| A Nimike | Nimikkeen nimi (lihavoitu) tai osan nimi (sisennettynä) | Teksti |
| B Tyyppi | Lineaarinen, Pinta-ala, Lukumäärä tai Osa | Teksti |
| C Yksikkö | LF, m, SF, SY, m², EA tai osan yksikkö | Teksti |
| D Määrä | Mitattu kokonaismäärä tai kaavan tulos | Luku |
| E Hukka % | Hukka | Prosentti (0.10 = 10 %) |
| F Määrä hukalla | Määrä × (1 + hukka) | Kaava `D*(1+E)` |
| G Materiaali / yksikkö | Materiaalihinta | Luku |
| H Työ / yksikkö | Työhinta | Luku |
| I Materiaali | Laskettu materiaali | Kaava `ROUND(F*G,2)` |
| J Työ | Laskettu työ | Kaava `ROUND(F*H,2)` |
| K Yhteensä | Materiaali + työ | Kaava `I+J` |
| L Huomautukset | Käytetty kaava, kaavavirhe, merkinnät arkeilla ilman mittakaavaa, seinäpinta-ala ja kehä | Teksti |

Kokonaissummarivi: `SUM`-kaava sarakkeista I, J ja K kaikilla yllä olevilla riveillä. Huomautukset-sarakkeeseen tulee "Epätäydellinen: katso yllä olevat huomautukset", kun jotain on jätetty pois.

Rivi, jolla on kaavavirhe, ei sisällä määrää eikä summia; sen huomautus kertoo virheen. Otsikkorivi on lukittu näkyviin.

CSV:ssä samat sarakkeet sisältävät tavallisia arvoja. Hukka % on prosenttiluku (10 tarkoittaa 10 %), ja rahasummat ovat dollareina kahdella desimaalilla. Teksti, jonka taulukkolaskenta voisi tulkita kaavaksi (alkaa merkeillä `=`, `+`, `-` tai `@`), saa alkuunsa `'`-merkin, jotta se pysyy tekstinä.

## Arkeittain (vain XLSX)

| Sarake | Sisältö |
|---|---|
| Arkki | Arkin nimi (PDF-nimi, kun PDF ei ole auki) |
| Nimike | Nimikkeen nimi |
| Määrä | Nimikkeen määrä kyseisellä arkilla, sen yksikössä |
| Yksikkö | Nimikkeen yksikkö |
| Merkinnät | Merkintöjen lukumäärä |

## Merkinnät (vain XLSX)

Yksi rivi merkintää kohden.

| Sarake | Sisältö |
|---|---|
| Arkki | Arkin nimi |
| Nimike | Nimikkeen nimi |
| Tyyppi | Lineaarinen, Pinta-ala tai Lukumäärä |
| Määrä | Pituus, nettopinta-ala tai 1 |
| Yksikkö | LF tai m; SF, SY tai m²; EA |
| Tiedot | Lineaarinen: osien pituudet, vähennetyt merkitty "(vähennys)", ja "vähentää (pituus) piirretystä (pituus)". Pinta-ala: bruttopinta-ala ja aukkojen pinta-ala, kun aukkoja on, sekä kehä. Merkitsemättömille merkinnöille "Arkilla ei ole mittakaavaa". |
| Tarjousalue | Vain kun määrälaskennassa on tarjousalueita: merkinnän ala tai "Ei tarjousaluetta" |

## Tarjousalueittain (vain XLSX, kun määrälaskennassa on tarjousalueita)

| Sarake | Sisältö |
|---|---|
| Tarjousalue | Alueen nimi tai "Ei tarjousaluetta" |
| Nimike | Nimike tai sen alla sisennetty osa |
| Yksikkö | Nimikkeen tai osan yksikkö |
| Määrä | Mitattu kyseisellä alueella (osat: kaava alueen summiin) |
| Määrä hukalla | Määrä × (1 + hukka) |
| Materiaali, Työ, Yhteensä | Lasketaan sentin tarkkuudella, kuten Kustannusarviossa |
| Huomautukset | Kaava, virheet ja merkitsemättömät merkinnät, kuten Kustannusarviossa |

Jokainen alue päättyy riviin "(nimi) välisumma", jonka kustannukset ovat `SUM`-kaavoja sen riveistä. Viimeinen rivi, **Kaikki tarjousalueet**, laskee välisummat yhteen. **Merkinnät**-taulukossa on silloin seitsemäs sarake, **Tarjousalue**.

## Mittakaavat (vain XLSX)

Yksi rivi jokaista arkkia kohden, jolla on mittakaava tai merkintöjä.

| Sarake | Sisältö |
|---|---|
| Arkki | Arkin nimi |
| Mittakaava | Esiasetuksen nimi, kalibroitu mittakaava tai "Ei mittakaavaa" |
| Tapa | "Esiasetus" tai "Kalibroitu (etäisyys, jonka kirjoitit)" |
| Jalkaa PDF-yksikköä kohti | TakeoffCraftin käyttämä tarkka mittakaavakerroin |

## Tiedostonimet

- `(nimi).xlsx` ja `(nimi).csv`, missä nimi tulee ensimmäisestä määrälaskentaan avatusta PDF:stä.
- CSV on UTF-8-muodossa, jossa on tavujärjestysmerkki (BOM) ja Windows-rivinvaihdot; ne lukevat taulukkolaskentaohjelmat kaikilla alustoilla.
