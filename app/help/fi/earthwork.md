---
title: Maansiirto ja korkopisteet
summary: Merkitse korkopisteet asemapiirrokseen, vie ne CivilCraftiin pinnan sekä leikkauksen ja penkereen laskemiseen ja laske tässä yksinkertaiset kaivumäärät.
keywords: maansiirto, kaivu, leikkaus, penger, leikkaus ja penger, tasaus, korkopiste, korkeus, topo, pinta, kolmiointi, civilcraft, pisteet, pnezd, kaivanto
from: a898e508
---

TakeoffCraft mittaa sen, mikä on piirretty arkille. Maansiirto tarvitsee maanpinnan, joten se on yhteinen CivilCraftin kanssa. CivilCraft rakentaa pintoja pisteistä, tasaa ne ja laskee leikkauksen, penkereen ja siirtomatkan.

## Yksinkertainen kaivu tässä

Kun pohja kaivetaan yhteen syvyyteen, riittää pinta-alanimike, jolla on **syvyys**: tilavuus on pinta-ala × syvyys. Yleisurakoitsijan [työlajipaketissa](topic:trade-packs) on massakaivunimike (luonnontilavuus, löyhä tilavuus ja kuorma-autoerät) sekä johtokaivannon nimike (kaivu, alusta ja täyttö pituuden ja syvyyden mukaan).

## Korkopisteet CivilCraftille

1. Aseta sitepiirroksen mittakaava.
2. Tee **Lukumäärä**-nimike, esimerkiksi "Nykyinen maanpinta", ja napsauta jokaista korkopistettä arkilla.
3. Valitse merkintä ja kirjoita sen {{ui:Korko}} Valitun merkinnän paneeliin: `102.5`, `102'-6"` tai `31.24 m`. Negatiiviset ja nollakorkeudet käyvät.
4. Avaa {{ui:Vie}}-valikko ja valitse {{ui:Korkopisteet}}. Saat pisteitä sisältävän tiedoston (`.csv`), jossa ovat Point, Northing, Easting, Elevation ja Description, yksi rivi avoimen arkin merkittyä pistettä kohden.
5. Avaa tiedosto CivilCraftissa (katso [Tuo pisteet](app:civilcraft/import-points)). Sovellus rakentaa pinnan pisteistä ([Rakenna pinta](app:civilcraft/build-surface)); sen jälkeen se vertaa pintoja ja antaa leikkauksen ja penkereen ([Tilavuudet](app:civilcraft/volumes)).

Pohjoinen- ja itäkoordinaatit ovat arkin omia koordinaatteja jalkoina, mitattuna sivun kulmasta sen mittakaavassa: pisteiden väliset etäisyydet ja tilavuudet pitävät paikkansa, mutta ne eivät ole kohteen mittauskoordinaatteja. Siirrä ne kohteen koordinaatteihin CivilCraftissa, kun tarvitset niitä.

:::note
Eri arkeilla olevat pisteet eivät jaa koordinaatteja, joten vienti ottaa vain avoimen arkin. Korkeudet tallentuvat määrälaskentaan ja siirtyvät kopioinnilla ja liittämisellä.
:::

## Leikkaus ja penger CivilCraftista

CivilCraftin maansiirto palaa kahtena hinnoiteltavana nimikkeenä:

1. Tasaa CivilCraftissa alustat ja käytävät ja valitse **Maansiirto**-kohdasta {{ui:Lähetä TakeoffCraft-sovellukseen}} ([Maansiirron tilavuudet](app:civilcraft/volumes)). Se tallentaa määrätiedoston (`.quantities.json`).
2. Avaa TakeoffCraftissa tiedosto {{ui:Avaa määrälaskenta}}-painikkeella tai pudota se sovellukseen. Määrälaskenta pysyy auki: tiedosto lisää **Maansiirto: leikkaus** ja **Maansiirto: penger** [kirjoitettuina määrinä](topic:create-items#typed-quantities-no-drawing) kuutiojaardeina (CY) jalkayksikköiselle projektille tai kuutiometreinä (m³) metriyksikköiselle projektille. Se on yksi vaihe: {{key:Mod+Z}} kumoaa sen.
3. Nimeä ne uudelleen ja aseta hukka, hinnat ja kokoonpanot haluamallasi tavalla.

Kun suunnitelma muuttuu, lähetä uudelleen CivilCraftista ja avaa uusi tiedosto: samat kaksi nimikettä saavat uudet määrät. Niiden nimet, hinnat, hukka ja kokoonpanot säilyvät. Jos projektin yksikkö on vaihtunut, tilarivi kertoo siitä: tarkista hinnat. Toisesta CivilCraft-projektista tuleva tiedosto lisää omat kaksi nimikettään.

Määrät ovat CivilCraftin mittaamia luonnontilavuuksia (ruudukkomenetelmä): ei kutistumaa eikä paisumaa. Lisää ne hukkana tai kaavalla, kuten `Q * 1.25`, löyhää tilavuutta varten. Nimikkeen muokkausikkuna näyttää, mistä kukin on peräisin ja milloin; kustannusarvion huomautussarake kertoo sen myös.

:::note
Määrätiedosto on tavallista JSON-muotoa (`"format": "cadcraft-quantities"`), joten myös skripti tai toinen ohjelma voi kirjoittaa sellaisen: sovelluksen nimi, projekti sekä nimikkeet, joissa on avain, nimi, yksikkö ja määrä.
:::
