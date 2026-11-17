---
title: Mittaa piirustuksesta
summary: Ota pituudet ja pinta-alat piirustuksen omista viivoista, kaarista, monikulmioista ja viivoituksista valitsemalla ne, tarkoilla kaarilla ja aukoilla, napsauttamisen sijaan.
keywords: mittaa piirustus, geometria, monikulmio, kaari, ympyrä, viivoitus, pullistuma, tarkka pituus, tarkka pinta-ala, valitse, ikkuna, jäljitä, CAD:stä, viiva, pinta-ala
from: fd734246
---

{{ui:Measure drawing}} DWG- tai DXF-arkin arkkipalkissa ottaa piirustuksen omat kohteet merkinnöiksi, joten sinun ei tarvitse jäljittää niitä napsautuksin. Monikulmion pituus, kaaren pituus, ympyrän pinta-ala ja viivoituksen pinta-ala reikineen saadaan tarkkoina samasta laskennasta, jota määrälaskenta käyttää kaikille merkinnöille.

## Ota kohteet viivana tai pinta-alana

1. Luo tai napsauta **viiva**- tai **pinta-ala**-nimiketta kohdassa {{ui:Items}}. Arkilla on oltava mittakaava.
2. Valitse {{ui:Measure drawing}}.
3. Napsauta kohteita arkilla valitaksesi ne tai vedä ikkuna niiden ympärille: kaikki, mikä on kokonaan sen sisällä, valitaan. {{key:Shift}} lisää ikkunan valittuihin; napsauta valittua kohdetta uudelleen poistaaksesi sen. Palkki näyttää yhteissumman: "6 runs: 108'-9 1/8" in all." on suomeksi "6 viivaketjua: 108'-9 1/8" yhteensä."
4. Valitse lisäyspainike, joka nimeää määrän ja nimikkeen, esimerkiksi {{ui:Add 6 to Edge}} (tai paina {{key:Enter}}). Jokaisesta kohteesta tulee yksi nimikkeen merkintä yhdellä kumoamisaskeleella. {{key:Esc}} tyhjentää valintasi.

## Mitä kukin nimiketyyppi ottaa

- **Viiva**-nimike ottaa viivat, kaaret, monikulmiot, ympyrät ja splinet pituuden mukaan. Suljettu muoto lasketaan piirinsä mukaan. Viivoitus jätetään pois: sillä on pinta-ala, ei pituutta, ja palkki kertoo sen.
- **Pinta-ala**-nimike ottaa suljetut muodot: suljetut monikulmiot, ympyrät, 2D-kiintokappaleet ja viivoitukset reikineen. Avoimet viivaketjut jätetään pois, ja palkki kertoo sen.

## Tarkka ja lähes tarkka

Viivat, kaaret (mikä tahansa pullistuma), pullistumilla varustetut monikulmiot ja ympyrät ovat tarkkoja: pituudet ja pinta-alat käyttävät kaaren sädettä ja kulmaa, eivät kuvaa siitä. Ellipsit, splinet ja viivoitukset, joiden reuna koostuu viivoista, mitataan jänteinä, joiden kulma on yhden asteen tai tarkempi. Virhe on ellipseillä alle sadasosaprosentti ja muilla alle kymmenesosaprosentti. Palkki kertoo, kuinka monta valitsemaasi kohdetta on tämäntyyppisiä käyriä.

## Mistä se ottaa

- **Malli**: kohteet mallitilasta. **Asettelu**: sen omat viivat sekä näkymäruudun sisällä olevat mallin kohteet, skaalattuina sen kautta. Kohde, joka ylittää näkymäruudun reunan, ei ole tarjolla (se tulostuu leikattuna); kohde, jonka kaksi näkymäruutua näyttää, otetaan kerran.
- Vain tasot, jotka arkki näyttää. Lohkoja lasketaan, ei mitata: katso [Laske piirustuksesta](topic:count-from-a-drawing). 3D-polylinjat, verkot, kiintokappaleet ja alueet eivät ole tarjolla.
