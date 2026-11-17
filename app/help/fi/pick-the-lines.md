---
title: Valitse PDF:n viivat
summary: Napsauta vektori-PDF:n viivaa mitataksesi koko siihen yhdistyneen polun, tai napsauta suljetun ääriviivan sisältä sen pinta-alaa. Aukkotoleranssi näytetään, ja jokaisesta segmentistä voi kumota yhden askeleen.
keywords: polku, valitse, viivat, yhdistetty, koko ajo, jäljitä, ääriviiva, piiri, aukko, toleranssi, silta, segmentit, sarkain, vektori, pinta-ala viivoista, p
from: c22526ae
---

Vektori-PDF:ssä seinät ja reunat ovat oikeita viivoja. {{ui:Polku}} ({{key:P}}) ottaa ne sellaisina kuin ne on piirretty: yksi napsautus viivaan mittaa kaiken siihen yhdistyneen, päästä päähän, joten et jäljitä seinää napsauttamalla sen kulmia. Arkilla täytyy olla mittakaava. Skannattu sivu ei sisällä viivoja, joita voisi valita; käytä siellä [Pituus](topic:measure-linear) tai [Pinta-ala](topic:measure-areas).

## Valitse polku tai ääriviiva

1. Valitse {{ui:Polku}}. Osoittimen alla oleva viiva hahmotellaan, ja muut mahdolliset polut piirretään ohuesti.
2. Napsauta viivaa: koko yhdistetty polku valitaan. Työkalurivin alla oleva palkki kertoo sen segmentit, pituuden, aukkotoleranssin ja sen, kuinka monta aukkoa silloitettiin. Polku, joka palaa lähtöpisteeseensä, on suljettu ja raportoi myös piirinsä.
3. Tai napsauta suljetun ääriviivan sisältä, kaukana mistään viivasta: ääriviiva sen pisteen ympärillä valitaan alueena. Pienin tulee ensin; {{key:Tab}} kokeilee seuraavaa suurempaa.
4. Paina {{key:Enter}} (tai napsauta hiiren oikealla painikkeella, tai kaksoisnapsauta) lisätäksesi merkit. Valittu polku tulee **lineaarisen** nimikkeen merkiksi, ääriviiva **pinta-alanimikkeen** merkiksi: aktiivinen nimike, jos sillä on sama tyyppi, muuten uusin tämäntyyppinen. Jos sellaista ei ole, avautuu uuden nimikkeen lomake, eikä mitään lisätä ennen kuin painat {{key:Enter}} uudelleen. Kaikki valittu lisätään yhdellä kumoamisaskeleella.

## Aukkotoleranssi

Piirtäjät jättävät pieniä aukkoja, joissa viivojen pitäisi kohdata. Kaksi viivaa liittyvät yhteen, kun niiden päät ovat lähempänä kuin **aukkotoleranssi**. Se alkaa 1.5 pisteestä arkilla (näytetään jalkoina ja tuumina arkin mittakaavalla), ja yhtä leveä katkoviivarengas seuraa osoitinta ja asettuu kunkin alla olevan polun päähän. Jokainen silloitettu aukko on ympyröity oranssilla valitulla polulla, ja palkki laskee ne.

{{key:]}} leventää toleranssia, {{key:[}} kapentaa sitä. Valittu polku yhdistetään heti uudelleen uudella toleranssilla. Risteyksessä polku jatkuu suoraan, sitä tietä, jossa taipuma on pienin, ja jättää haaran.

## Näppäimet

| Näppäin tai toiminto | Mitä se tekee |
|---|---|
| Napsautus | Valitse osoittimen alla oleva polku tai sen ympärillä oleva ääriviiva. |
| {{key:Shift}} + napsautus | Lisää toinen polku tai ääriviiva valintaan. |
| {{key:Tab}} | Kokeile seuraavaa polkua osoittimen alla tai seuraavaa suurempaa ääriviivaa. |
| {{key:Backspace}} tai {{key:Mod+Z}} | Poista viimeinen segmentti viimeksi valitulta polulta, yksi segmentti kerrallaan. Polku, jossa ei ole enää segmenttejä, poistuu. Kun mitään ei ole valittu, {{key:Mod+Z}} on tavallinen kumoaminen. |
| {{key:[}} ja {{key:]}} | Kapeampi ja leveämpi aukkotoleranssi. |
| {{key:Enter}} | Lisää merkit. |
| {{key:Esc}} | Tyhjennä valinta. |

## Hyvä tietää

- Piirustuksen kaari on sarja lyhyitä suoria paloja, joten sen pituus on hiukan todellisen kaaren alle. Tarkan kaaren saat mittaamalla piirustuksen oman tiedoston ([Mittaa piirustuksesta](topic:measure-from-a-drawing)).
- Silloitettu aukko lasketaan suorana hyppynä yli sen, joten suljetun ääriviivan piiri sisältää sen.
- Vain sivun omien polkujen viivat ja täytöt ovat viivoja. Kirjaimina piirretty teksti ja kuvat eivät ole.
