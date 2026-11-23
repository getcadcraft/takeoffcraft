---
title: Määrälaskenta rakennusmallista
summary: Avaa arkkitehdin IFC-malli, näe se 3D:nä, valitse seinät, lattiat, ovet ja muut tyypin, materiaalin, tason tai koon mukaan ja tuo niiden lukumäärät, pituudet, pinta-alat ja tilavuudet määrälaskentaan. Mallin uudempi kopio päivittää samat määrät.
keywords: malli, mallipohjainen määrälaskenta, 3D-näkymä, napsauta osaa, etsi rivi, materiaali, taso, seinätasot, kipsilevy, eriste, oven koot, ikkunan koot, aukkoluettelo, csv, 3d, bim, ifc, rvt, rakennusmalli, määrät, seinät, lattiat, ovet, ikkunat, pilarit, huoneet, tyypin mukaan, kerroksen mukaan, päivitys, uudempi malli, suunnittelun kehitysvaihe
from: 8c4c12c9
---

Sinun ei tarvitse odottaa seuraavaa piirustussarjaa. Kun arkkitehti lähettää rakennusmallin, avaa se tässä ja ota määrät suoraan siitä. Malli luetaan omalla tietokoneellasi, eikä mitään lähetetä minnekään.

## Vaiheet

1. Valitse työkalurivillä {{ui:Malli}} ja valitse mallin `.ifc`-tiedosto, tai avaa se {{ui:Avaa piirustukset}}-toiminnolla kuten mikä tahansa muu tiedosto.
2. {{ui:Mallipohjainen määrälaskenta}} avautuu, ja siinä on yksi rivi luokkaa ja tyyppiä kohden: seinät seinätyypeittäin, lattiat lattiatyypeittäin, ovet ovityypeittäin ja niin edelleen. Jokaisella rivillä näkyy sen lukumäärä ja se, mitä kyseinen luokka mitataan.
3. Aseta {{ui:Ryhmittele}} arvoon {{ui:Luokka}} nopeaa kokonaissummaa varten, tai arvoon {{ui:Luokka, tyyppi ja kerros}} jakaaksesi jokaisen tyypin kerroksittain.
4. Poista valinta riveiltä, joita et halua. {{ui:Etsi}} rajaa luetteloa. Rivin valinnan poistaminen piilottaa myös sen osat 3D-kuvasta.
5. Anna mallille {{ui:Mallin nimi}}, jonka säilytät koko työn ajan, esimerkiksi projektin nimi.
6. Valitse {{ui:Lisää määräluetteloon}}. Jokainen määrä muuttuu kirjoitetuksi määräksi nimikeluettelossa. Nimeä se, hinnoittele se ja liitä siihen yhdistelmät kuten mihin tahansa muuhun nimikkeeseen.

## Näytä malli 3D:nä

{{ui:Näytä malli 3D:nä}} piirtää mallin taulukon yläpuolelle, yhden värin kullekin riville (rivin nimen vieressä oleva värilaatta). Vedä kääntääksesi, pidä {{key:Shift}} pohjassa ja vedä siirtääksesi, käytä rullaa zoomaukseen ja valitse {{ui:Sovita}} tai {{ui:Palauta}} palataksesi.

- **Napsauta osaa** kuvassa, ja sen rivi valitaan taulukosta; rivin kaikki osat valaistaan ja muut himmennetään. Napsauta samaa osaa uudelleen, ja jos se kuuluu useaan riviin (seinä tasoineen), seuraava rivi valitaan.
- **Napsauta riviä** taulukossa valaistaksesi sen osat. Napsauta uudelleen tai tyhjää kohtaa kuvassa tyhjentääksesi valinnan.
- Huoneita ei piirretä, koska huoneen tilavuus peittäisi rakennuksen.
- Hyvin suuri malli säilyttää joistakin osista vain laatikon, jotta se mahtuu muistiin. Paneeli kertoo, kuinka monta. Luvut eivät muutu.

Jos tämä tietokone ei pysty piirtämään 3D-kuvaa, taulukko toimii kuten ennenkin.

## Ryhmittely materiaalin, tason tai koon mukaan

{{ui:Ryhmittele}}-kohdassa on kolme lisävaihtoehtoa:

- {{ui:Luokka ja materiaali}}: tasoista koostuva seinä, lattia tai katto saa kunkin tason materiaalin oman rivin, joten kipsilevy, runkotolpat ja eriste voidaan hinnoitella erikseen. Rakennuksen osa, jossa on yksi materiaali, saa sen materiaalin rivin, ja osa ilman materiaalia jää riville nimeltä ”Ei nimettyä materiaalia”.
- {{ui:Luokka ja taso}}: sama, mutta rivillä on tason paksuus (”Eriste, 100 mm”).
- {{ui:Luokka, tyyppi ja ovien tai ikkunoiden koko}}: ovet ja ikkunat jaetaan leveyden ja korkeuden mukaan (esimerkiksi 3'-0" × 6'-8" tai 914 × 2,032 mm).

Tasolle pinta-ala on seinän oma pinta (tai lattian tai katon pohja- tai pinta-ala), ja tilavuus on tämä pinta-ala kerrottuna tason paksuudella. Rivin huomautus kertoo, kuinka monta lukua tuli tasosta. Seinän tasojen tilavuudet yhteensä vastaavat mallin ilmoittamaa tilavuutta.

## Tallenna rivit tai aukot CSV-tiedostona

{{ui:Tallenna rivit CSV-tiedostona}} tallentaa valitsemasi rivit, ja jokaisen otsikon yksiköt näkyvät, taulukkolaskentaa varten. {{ui:Tallenna aukkoluettelo CSV-tiedostona}} (vain kun mallissa on ovia tai ikkunoita) tallentaa jokaisen oven ja ikkunan tyypin, kerroksen ja koon mukaan lukumäärineen.

## Mitä mitataan

| Luokka | Määrät |
|---|---|
| Seinät | lukumäärä, pituus, seinäpinta-ala (yksi pinta, aukot vähennettyinä), tilavuus |
| Lattiat, laatat, alakatot ja muut pinnoitteet | lukumäärä, pohjapinta-ala, tilavuus |
| Katot | lukumäärä, pohjapinta-ala, kattopinta, tilavuus |
| Perustukset | lukumäärä, pohjapinta-ala, tilavuus |
| Pilarit, palkit ja sauvat | lukumäärä, pituus sauvan suunnassa, tilavuus |
| Kaiteet, putket, kanavat ja kaapelireitit | lukumäärä, pituus |
| Portaat | lukumäärä, tilavuus |
| Huoneet | lukumäärä, lattiapinta-ala, tilavuus |
| Ovet, ikkunat ja muu | lukumäärä |

Jos mallin laatija on ilmoittanut määrän tiedostossa, käytetään sitä lukua. Muuten luku mitataan osan muodosta. Jokainen määrä säilyttää huomautuksen, joka kertoo kumpi on käytetty ja kuinka monta osaa antoi luvun.

:::note
Osan muodosta mitattu seinän pituus kulkee päästä päähän, joten kulmassa päällekkäiset kaksi seinää sisältävät molemmat kulman. Tilavuus vaatii suljetun muodon: osa, jonka muoto ei ole suljettu, lasketaan mukaan, mutta sille ei anneta tilavuutta. Kaareva tai kulmikas seinäosa mitataan puolena kaikista sen pystypinnoista, ja sen huomautus kertoo tämän.
:::

## Kun uudempi malli saapuu

Avaa uudempi tiedosto ja kirjoita sama {{ui:Mallin nimi}}. Ennen kuin lisäät mitään, paneeli kertoo, kuinka monta määrää on uutta, kuinka monta on muuttunut ja mistä mihin, sekä mitkä aiemman kopion määrät eivät enää ole mallissa. Valitse {{ui:Lisää määräluetteloon}}: muuttuneet määrät saavat uudet lukunsa, ja nimesi, hintasi, hukkasi ja yhdistelmäsi säilyvät. Määrät, jotka eivät enää ole mallissa, säilyttävät vanhat lukunsa. Poista ne itse, jos suunnittelu on jättänyt ne pois.

Tyypin ja tason nimet ovat se, miten määrä tunnistetaan. Jos arkkitehti nimeää seinätyypin uudelleen, se tulee uutena määränä, ja vanha luetellaan poistuneena.

## Tiedostot, jotka tämä lukee

IFC-tiedostot (IFC2x3, IFC4 ja IFC4.3). IFC-tiedosto, jossa on teitä, raiteita tai siltoja, tuo edelleen infrastruktuurimääränsä suoraan kuten ennenkin.

TakeoffCraft ei lue `.rvt`-tiedostoja tässä julkaisussa. Jos arkkitehti työskentelee Revitillä, pyydä mallista IFC-vienti (Tiedosto, Vie, IFC) ja avaa se.

Yksi malli voi tuoda kerralla enintään 500 määrää. Jos niitä on enemmän, poista rivien valinta tai ryhmittele luokittain.
