---
title: Tallenna määrälaskenta ja avaa se uudelleen
summary: Tallenna määrälaskenta .takeoff.json-projektina, avaa se uudelleen samoilla PDF-tiedostoilla, ja katso mitä tapahtuu, kun PDF puuttuu tai on muuttunut.
keywords: määrälaskenta PDF:n sisällä, upottaminen, liite, tallenna, avaa, avaa uudelleen, projekti, takeoff.json, jatka, korjattu PDF, muuttunut PDF, puuttuva PDF, varmuuskopio, automaattitallennus, palauta, kaatuminen
from: bd5080a6
---

Määrälaskenta tallennetaan pieneksi projektitiedostoksi, `(name).takeoff.json`. Se sisältää nimikkeet, yhdistelmät, hinnat, jokaisen arkin mittakaavan ja jokaisen merkinnän. Se **ei** sisällä PDF-tiedostoja; se löytää ne uudelleen niiden sisällön perusteella.

## Tallennus

1. Valitse {{ui:Save takeoff}} ryhmästä {{ui:File}} tai paina {{key:Mod+S}}.
   Selain lataa tiedoston `(name).takeoff.json`. Tilarivillä lukee "Tallennettu (name).takeoff.json. Se avautuu uudelleen samojen PDF-tiedostojen päälle (ne tunnistetaan sisällön perusteella)."
2. Siirrä tiedosto työn PDF-tiedostojen viereen, jotta ne pysyvät yhdessä.

Jokainen tallennus lataa uuden tiedoston. Selain voi nimetä toisen tiedoston `(name) (1).takeoff.json`; säilytä uusin.

Nimi tulee ensimmäisestä PDF-tiedostosta, jonka avasit tässä määrälaskennassa.

:::note
Tallenna määrälaskenta on edelleen ainoa tapa säilyttää määrälaskenta tiedostona. Työn aikana TakeoffCraft säilyttää myös palautuskopiota tämän selaimen tallennustilassa (katso alla), eikä pilvitallennus ole vielä käytettävissä. Jos yrität sulkea välilehden tallentamattomilla muutoksilla, selain kysyy, haluatko poistua.
:::

## Pidä määrälaskenta PDF-tiedoston sisällä

{{ui:Export}} › {{ui:PDF with the takeoff inside}} lataa kopion jokaisesta avoimesta PDF-tiedostosta, nimettynä esimerkiksi `Plans (with takeoff).pdf`. Kopio sisältää koko määrälaskennan liitteenä: nimikkeet, merkinnät, mittakaavat, tarjousalueet, kaiken, minkä `.takeoff.json` sisältää. Sivut ovat koskemattomia, joten se näyttää ja tulostuu kuten alkuperäinen, ja muut PDF-lukijat listaavat määrälaskennan liitteinään.

Avaa tämä PDF TakeoffCraftissa (millä tahansa tavalla avaatkin PDF-tiedostoja), ja se kysyy **Tässä PDF:ssä on määrälaskenta**. Valitse {{ui:Open the takeoff}} saadaksesi määrälaskennan takaisin, tai {{ui:Just the PDF}} avataksesi vain piirustuksen. Kopio edustaa PDF-tiedostoa, josta se tehtiin, joten kumpaankin tallennettu `.takeoff.json` avautuu molemmista.

Useammalla PDF-tiedostolla jokainen kopio sisältää koko määrälaskennan; avaa ne yhdessä. Uudelleen tallentaminen kopiosta korvaa sen sisällä olevan määrälaskennan, se ei lisää toista. `.takeoff.json` on edelleen tiedosto, joka kannattaa säilyttää: se on pieni, ja sen automaattitallennus ja työpöytäsovellus kirjoittavat juuri sen.

## Jos välilehti tai selain pysähtyy

Muutaman sekunnin kuluttua jokaisesta muutoksesta TakeoffCraft säilyttää kopion määrälaskennasta tämän selaimen omaan tallennustilaan, yhdessä PDF-tiedostojen kanssa, kun ne ovat yhteensä enintään 64 Mt. Mitään ei lähetetä. Kun tallennat määrälaskennan, aloitat uuden tai avaat toisen projektin, kopio poistuu.

Jos välilehti kaatuu, selain tai tietokone pysähtyy, tai poistut tallentamattomilla muutoksilla, seuraavalla kerralla kun avaat TakeoffCraftin, se kysyy **Palautetaanko työsi?** ja listaa määrälaskennan nimen mukaan. Valitse **Palauta** saadaksesi sen takaisin: nimikkeet, merkinnät ja mittakaavat palautuvat, ja PDF-tiedostot avautuvat uudelleen, jos ne säilytettiin. Tilarivillä lukee "Palautettu (name). Sitä ei ole vielä tallennettu tiedostoon: Tallenna määrälaskenta säilyttää sen." Kun PDF-tiedostot olivat liian suuria säilytettäviksi, avaa ne uudelleen; merkinnät ilmestyvät niiden arkeille. Lisää: [Työn palauttaminen](common:recover).

## Avaa uudelleen

1. Avaa TakeoffCraft.
2. Pudota `.takeoff.json`-tiedosto ja sen PDF-tiedostot sivulle yhdessä. Tai valitse {{ui:Open plans}} PDF-tiedostoille ja {{ui:Open takeoff}} projektille, kummassa tahansa järjestyksessä.
   Tilarivillä lukee "Avattu (name): 12 nimikettä, 340 merkintää." Jokainen arkki saa mittakaavansa takaisin, ja merkinnät ilmestyvät arkeilleen.

PDF-tiedostojen järjestyksellä ei ole merkitystä, eikä niiden tiedostonimilläkään tai kansioilla. TakeoffCraft tunnistaa jokaisen PDF-tiedoston sisällön sormenjäljen perusteella.

Jos avaat projektin, kun nykyisessä määrälaskennassa on tallentamattomia muutoksia, TakeoffCraft kysyy ensin: **Peruuta**, **Hylkää muutokset** tai **Tallenna määrälaskenta ensin**. Projektin avaaminen korvaa nykyiset nimikkeet ja merkinnät; jo avoinna olevat PDF-tiedostot pysyvät auki.

## Kun PDF puuttuu

Jos avaat projektin ilman kaikkia sen PDF-tiedostoja, tilarivillä lisätään "Avaa sen PDF-tiedostot nähdäksesi merkinnät (listattu kohdassa Arkit)." Arkkiluettelon alla huomautus kertoo:

"Tämä määrälaskenta kattaa myös PDF-tiedostoja, jotka eivät ole auki. Niiden määrät lasketaan; avaa ne nähdäksesi ja muokataksesi niiden merkintöjä:"

Sen jälkeen seuraavat tiedostojen nimet ja koot. Niiden merkinnät lasketaan yhä kaikissa summissa ja vienneissä mittakaavoilla, joilla ne mitattiin. Avaa nämä PDF-tiedostot nähdäksesi ja muokataksesi merkintöjä.

## Kun PDF on muuttunut

Muokattu PDF, tai toisen ohjelman uudelleen tallentama PDF, on sisällöltään erilainen, joten TakeoffCraft pitää sitä **eri tiedostona**, vaikka nimi olisi sama. Arkkiluettelon alla olevassa huomautuksessa tällainen tiedosto sanoo "tiedosto tällä nimellä on auki, mutta sen sisältö poikkeaa".

- Merkinnät pysyvät kiinni vanhassa versiossa. Ne lasketaan yhä vanhoissa paikoissaan ja mittakaavoissaan.
- Muokattu PDF avautuu uusina arkkeina ilman mittakaavaa ja ilman merkintöjä.

Siirtääksesi määrälaskennan uuteen versioon, avaa molemmat PDF-tiedostot ja käytä {{ui:Compare}}-työkalua uudella arkilla: [Vertaa muokattua arkkia ja siirrä määrälaskenta](topic:compare-revisions).

## Vaurioitunut tai vieras tiedosto

TakeoffCraft tarkistaa jokaisen projektitiedoston ennen käyttöä. Viestejä, joita saatat nähdä:

- "(file) ei ole TakeoffCraft-projekti (se ei ole kelvollinen JSON)."
- "Tämä ei ole TakeoffCraft-projektitiedosto."
- "Tämän projektin tallensi uudempi TakeoffCraft. Avaa se siellä."
- "3 merkintää vaurioitui ja jätettiin pois." (loput avautuvat)

## Kumoushistoria

Kumoushistoria alkaa alusta, kun avaat projektin. Tallentaminen ei tyhjennä sitä.
