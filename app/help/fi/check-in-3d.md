---
title: Tarkista laskenta 3D:ssä
summary: Näe avoimen arkin seinät, laatat ja lukumäärät piirustuksen päällä, kiertele niiden ympärillä ja napsauta yhtä valitaksesi sen merkinnän.
keywords: png, kuva, kuvakaappaus, pino, kerrokset, tasot, korkeus, glb, gltf, vie 3D, seinän paksuus, pohjakorkeus, aukko, oven yläreuna, 3d, kolmiulotteinen, tarkistus, näkymä, seinät, seinän korkeus, laatta, syvyys, tilavuus, kiertäminen, malli, valinta, isometrinen, perspektiivi
from: fb16b4f7
---

3D-näkymä on tarkistus, ei toinen piirustus: se pystyttää arkin laskennan näytölle itse arkin päälle, joten puuttuva seinä, kaksinkertainen laatta tai eksynyt lukumäärä näkyy heti.

Ennen aloitusta: arkilla on oltava mittakaava ([Aseta mittakaava](topic:set-the-scale)). Korkeudet ja syvyydet tarvitsevat oikeat jalkamitat, joten arkilla ilman mittakaavaa {{ui:3D}} kertoo sen ja pysyy tasaisella arkilla.

## Avaa 3D-näkymä

1. Näytä arkki, jonka haluat tarkistaa.
2. Valitse palkista, jossa näkyy arkin nimi ja mittakaava, {{ui:3D}}, tai paina {{key:3}}.
   Ensimmäisellä kerralla 3D-näkymän lataaminen vie hetken. Arkki piirtyy maahan, ja laskenta seisoo sen päällä kunkin nimikkeen värissä.
3. Palataksesi valitse {{ui:3D}} uudelleen, {{ui:Takaisin arkille}} tai paina {{key:3}}. Piirrustustyökalun (Viiva, Pinta, Lukumäärä ja muut) valinta vie myös takaisin, koska merkinnät piirretään tasaiselle arkille.

Näkymä näyttää arkin näytöllä. Vaihda arkkia arkkien luettelosta tai {{key:PageDown}}- ja {{key:PageUp}}-näppäimillä, ja 3D-näkymä seuraa. Nähdäksesi useita kerroksia kerralla, pinoa ne (alla).

## Mitä näet

| Merkintä | 3D:ssä |
|---|---|
| Viivaosuus, nimike jolla on korkeus | Seinä sen korkeudelta osuuden varrella. Kaarevat osuudet seuraavat kaarta. |
| Viivaosuus, nimike ilman korkeutta | Viiva arkilla. Anna nimikkeelle korkeus kohdassa **Nimike** pystyttääksesi sen. |
| Pinta, nimike jolla on syvyys | Laatta sen syvyydeltä, aukot auki. |
| Pinta, nimike ilman syvyyttä | Ohut 2" levy, jotta se näkyy. |
| Lukumäärä | Pieni pylväs jokaisessa lasketussa pisteessä. |

Korkeus on viivanimikkeen kenttä {{ui:Korkeus}} ja syvyys pintanimikkeen kenttä {{ui:Syvyys}}, kohdassa **Nimike** (ks. [Luo laskennan nimikkeet](topic:create-items)). Muuta sitä, ja 3D-näkymä päivittyy heti. Arkin nimen alla oleva huomautus kertoo, mitä arkki sisältää, esimerkiksi ”Tämä arkki 3D:nä: 2 seinää, 1 laatta, 3 lukumäärää”, ja kuinka monella osuudella tai pinnalla ei ole korkeutta tai syvyyttä. Napsautukset menevät huomautuksen läpi näkymään.

Numerot eivät muutu 3D:ssä: seinän pinta-ala on sen tarkka pituus kertaa korkeus, ja laatan tilavuus on sen nettopinta-ala (ulkoreuna miinus aukot, kaaret tarkkoina) kertaa syvyys. Kaaret piirretään lyhyinä suorina osina vain näytöllä.

## Katsele ympärillesi

| Toiminto | Mitä se tekee |
|---|---|
| Vedä tai vedä keskipainikkeella | Kiertää laskennan ympäri. |
| {{key:Shift}} + vedä tai vedä oikealla painikkeella | Panoroi. |
| Hiiren rulla | Zoomaa sisään ja ulos osoittimen kohdalta. |
| Kaksisormipyyhkäisy kosketuslevyllä | Kiertää ({{key:Shift}} panoroi). Nipistys zoomaa. |
| {{ui:Iso}}, {{ui:Ylä}}, {{ui:Etu}}, {{ui:Taka}}, {{ui:Vasen}}, {{ui:Oikea}}, {{ui:Ala}} | Vakionäkymät, kehystettynä laskentaan. 3D-näkymä avautuu {{ui:Iso}}-näkymään. |
| {{ui:Perspektiivi}} | Perspektiivi päälle tai pois (yhdensuuntainen, kun pois). |
| {{ui:Zoomaa laajuuteen}} tai {{key:F}} | Koko arkki. |
| {{ui:Arkki}} | Näyttää tai piilottaa piirustuksen maassa. |
| Näkymäkuutio oikealla ylhäällä | Napsauta sivua, reunaa tai kulmaa katsoaksesi sieltä; vedä kiertääksesi; vedä kompassirengasta kääntääksesi; talo-painike palauttaa {{ui:Iso}}-näkymään. |

Kulmassa näkyy näkymäkuutio, pieni X-, Y-, Z-akselikuvake tai ei mitään: valitse se kohdasta {{ui:Asetukset}}, TakeoffCraft-välilehdeltä, kohdasta **Kulman osoitin** ([TakeoffCraft-asetukset](topic:settings)). Tasaisella arkilla ei ole kulman osoitinta.

:::touch
Yksi sormi kiertää; kaksi sormea nipistää zoomaamiseen ja siirtyy panoroimiseen. Napautus valitsee.
:::

## Seinät, joilla on paksuus, pohja ja aukot

Viivanimike, jolla on korkeus, seisoo ohuena nauhana. Nähdäksesi sen oikeana seinänä, anna nimikkeelle sen muoto kohdassa **3D:ssä** sen asetuksissa:

- **Seinän paksuus** (8", 0.2 m): seinästä tulee kiinteä, piirretyn viivan keskelle, kulmat viistettyinä.
- **Pohjakorkeus**: seinä alkaa tuon verran lattian yläpuolelta (alakatto, yläkaappirivi). Pinta-nimikkeillä on sama: katto 9'-0":ssa.
- **Aukon yläreuna**: vähennetty osuus (ovi, [Vähennä osa osuudesta](topic:measure-linear#deduct-a-part-of-a-run)) pitää seinän tuon korkeuden yläpuolella, joten ovi näkyy ovena. Ilman sitä vähennetty osuus jättää aukon yläreunaan asti.

Nämä muokkaavat vain 3D-näkymää: määrät (pituus, seinän pinta-ala, kustannukset) pysyvät ennallaan.

## Pinoa kerrokset

1. Avaa jokaisen kerroksen PDF-tiedostot.
2. Valitse 3D-näkymässä {{ui:Korkotasot…}} ja kirjoita kunkin kerroksen korkeus, kuten `0` maantasokerrokselle ja `12'` seuraavalle. Tyhjä jättää arkin pois.
3. Valitse {{ui:Pinoa}}. Jokainen arkki, jolla on taso, näyttää laskentansa omalla korkeudellaan. Näytöllä oleva arkki on oman kerroksensa päällä, muut ovat ääriviivoina. Huomautus kertoo, kuinka monta kerrosta on pinottu.

Arkit asettuvat sivulla olevan paikkansa mukaan, joten tämä toimii samalla tavalla piirretyille pohjapiirustuksille (sama arkkikoko ja -sijainti). Arkki, jolla on taso mutta ei mittakaavaa, jätetään pois, ja huomautus kertoo sen. Valitse {{ui:Pinoa}} uudelleen nähdäksesi yhden arkin kerrallaan. Tasot tallennetaan laskennan mukana.

## Tallenna 3D-näkymä kuvana

Valitse 3D-palkista {{ui:PNG}} saadaksesi kuvan näkymästä sellaisena kuin se näytöllä on (`… 3D.png`). {{key:Shift}} + napsautus {{ui:PNG}}-painikkeeseen tekee siitä kaksi kertaa niin suuren (`… 3D@2x.png`), tulostusta varten.

## Tallenna 3D-näkymä mallina

Valitse 3D-palkista {{ui:GLB}}. Saat `.glb`-tiedoston (glTF, binäärinen) siitä, mitä näkymä näyttää: näytöllä olevan kerroksen tai kaikki pinotut kerrokset. Muut 3D-ohjelmat avaavat sen: yksi objekti per merkintä, nimetty nimikkeen mukaan, nimikkeen värissä, metreissä ja Y ylöspäin. Arkki itse ja ääriviivat eivät ole siinä mukana.

## Valitse merkintä 3D:stä

Napsauta seinää, laattaa, levyä tai pylvästä. Sen merkintä tulee valituksi täsmälleen kuten jos olisit napsauttanut sitä arkilla: se näkyy kohdassa **Valittu merkintä**, sen nimike tulee nykyiseksi, ja tilarivi antaa sen pituuden ja korkeuden tai pinta-alan, syvyyden ja kuutiojaardit. {{key:Shift}} + napsautus lisää merkintöjä valintaan tai poistaa ne. {{key:Delete}} poistaa valitut merkinnät ja {{key:Mod+Z}} palauttaa ne; {{key:Esc}} poistaa valinnan kokonaan. Takaisin arkilla samat merkinnät pysyvät valittuina.

:::tip
Piirustus seuraa teemaa: Malli-teemassa maassa oleva arkki tummenee kuten tasainen näkymä.
:::
