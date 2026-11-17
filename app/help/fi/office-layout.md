---
title: "Toimistoasettelu: ryhmittely, välisummat, otsikko ja sarakeotsikot Default Policies -asetuksistasi"
summary: Ota Default Policies -lisäosa käyttöön, niin arvio, määrät arkeittain, viennit ja avustajan lukema tieto noudattavat toimistosi taulukkoasettelua, sama jota BimCraftin taulukot käyttävät.
keywords: toimistostandardi, toimistoasettelu, default policies, lisäosa, taulukkoasettelu, ryhmittely tyypin mukaan, ryhmittely arkin mukaan, välisumma, summat, otsikko, sarakeotsikot, isot kirjaimet, arvion asettelu, viennin asettelu, asetukset
from: cfd2f30a
---

## Mitä teet

Anna TakeoffCraftin asetella taulukkonsa niin kuin toimistosi ne julkaisee, ilman asetusten tekemistä jokaisessa määrälaskennassa. Asettelu määritetään kerran, Default Policies -kohdassa, ja se pätee kaikkiin tämän tietokoneen sovelluksiin: BimCraftissa tai CadCraftissa asettamasi on TakeoffCraftin käytössä, ja päinvastoin.

## Vaiheet

1. Avaa **Asetukset › Lisäosat** ja ota **Default Policies** käyttöön. Se on pois päältä, kunnes teet niin; kun se on pois päältä tai mitään ei ole asetettu, TakeoffCraft toimii täsmälleen kuten ennen.
2. Avaa **Asetukset › Yleiset › Default Policies** ja etsi **Taulukkoasettelu (toimistostandardi)**:

| Käytäntö | Mitä se tekee TakeoffCraftissa |
|---|---|
| Ryhmittele taulukot | **Tyyppi** ryhmittelee arvion nimiketyypin mukaan (Linear, Area, Count, Typed quantity). **Kerros** ryhmittelee määrät arkeittain niiden arkin mukaan. **Huone** ja **Ei ryhmittelyä** eivät ryhmittele kumpaakaan. |
| Taulukoiden summat | **Välisumma kunkin ryhmän alla ja kokonaissumma** lisää välisumman jokaisen ryhmän alle. Työn kokonaissumma säilyy aina. |
| Taulukon otsikko | Rivi taulukon yläpuolella, esimerkiksi `{schedule}: office layout` |
| Sarakeotsikot | Sellaisenaan, ISOT KIRJAIMET tai Alkukirjaimet isoina |

3. Sulje Asetukset. Taulukot seuraavat heti.

## Mitä asettelu koskee

- **Määrät › Nimikkeittäin** ja **Arkeittain**: ryhmäotsikot, välisumma kunkin ryhmän alla, otsikko ja sarakeotsikoiden kirjoitustapa. Rivi otsikon alla kertoo, mitkä osat toimistostandardisi asetti. Rivit ovat samat rivit: kirjoitat yhä niihin yksikköhinnat ja hukan, ja napsauttamalla lukuja valitset niiden merkit. Komponentti tai toinen ehto pysyy nimikkeensä alla.
- **Viety arvio** (CSV ja XLSX): samat ryhmät ja välisummat. Työkirjassa välisumma on `SUBTOTAL`-kaava sen ryhmästä, ja kokonaissumma on myös sellainen, joten mitään ei lasketa kahdesti.
- **Mitä avustaja lukee**: `takeoff_estimate` ja `takeoff_quantities` (arkeittain) lisäävät `layout`-lohkon, jossa ovat ryhmät, rivit ja välisummat, ja kertovat, mitkä osat toimisto asetti.

## Mikä säilyttää oman asetuksensa

- **Määrät › Alueittain** määrittää oman ryhmittelynsä (tarjousalueen mukaan) ja säilyttää sen.
- **Työn kokonaissumma**, tarjousyhteenvedon lisät ja vaihtoehdot eivät ryhmity uudelleen.
- Ryhmittelyä, jolle taulukossa ei ole saraketta, ei käytetä: arviossa ei ole kerrosta, ja arkeittaisissa määrissä ei ole tyyppiä.

## Hyvä tietää

- Käytännöt säilytetään tässä selaimessa kaikille CadCraft-sovelluksille, ja ne kulkevat Default Policies -tiedostossa (**Tallenna tiedostoon** / **Lataa tiedostosta** samassa kohdassa), joten toimisto jakaa yhden tiedoston.
- CSV-muodossa viety arvio, jossa on ryhmät, on tarkoitettu luettavaksi. Jos haluat tuoda arvion takaisin hintakirjastoksi, vie se ilman ryhmittelyä.
- BimCraftin puoli samasta standardista: taulukot, asetukset ja viennit. TakeoffCraftilla ei ole vielä omia käytäntöjä, joten Asetukset › TakeoffCraft -kohdassa ei ole Default Policies -osiota.
