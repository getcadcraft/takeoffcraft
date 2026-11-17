---
title: Avaa DWG- tai DXF-piirustus
summary: Avaa piirustustiedosto arkkeina (mallitila ja jokainen asettelu), aloita piirustuksen antamasta mittakaavasta, näytä tai piilota sen tasot ja tuo linkitetyt piirustukset.
keywords: dwg, dxf, cad, piirustus, avaa piirustus, asettelut, mallitila, paperitila, arkit, yksiköt, insunits, näkymäruudun mittakaava, xref, linkitetty piirustus, tasot, jäädytetty, ei pdf, plottaus, ilman plottausta
from: d8c3f504
---

TakeoffCraft avaa DWG- tai DXF-piirustuksen samalla tavalla kuin PDF:n: sitä ei tarvitse plottaa ensin PDF:ksi. Laskenta itse piirustuksesta on tarkka, koska piirustus tietää, mikä kukin kohde on. Katso [Laske piirustuksesta](topic:count-from-a-drawing).

## Avaa piirustus

1. Valitse {{ui:Avaa piirustukset}} ryhmästä {{ui:Tiedosto}}, tai paina {{key:Mod+O}}.
2. Valitse DWG- tai DXF-tiedosto. Voit valita useita, ja PDF-tiedostoja niiden kanssa.
3. Valitse Avaa.

Voit myös pudottaa piirustustiedostoja TakeoffCraftiin, kuten PDF-tiedostoja. Mitään ei lähetetä: selain lukee tiedoston tietokoneeltasi.

TakeoffCraft lukee DWG-tiedostot AutoCAD 2000:sta 2018:aan ja ASCII-DXF-tiedostot versiosta R12 versioon 2018. Se hylkää binaarisen DXF:n (tallenna se ASCII-muodossa tai DWG-tiedostona) ja tiedoston, joka ei ole kumpaakaan, ja kertoo syyn. Vioittunut tiedosto avautuu sillä, mikä voitiin lukea, ja viesti kertoo siitä; sen laskennat voivat olla puutteellisia.

## Arkit

- **Malli** on piirustuksen mallitila.
- **Jokainen asettelu** (paperitilan välilehti) on arkki, jonka nimi on sen välilehti, välilehtien järjestyksessä. Asettelu näyttää mallin näkymäruutujensa kautta, niin kuin se plotataan.

Zoomaus, panorointi, tarttuminen piirustuksen omiin viivoihin, merkit, huomautukset, {{ui:Kalibroi}} ja muu toimivat kuten PDF:ssä. Piirustuksen arkit tallentuvat määrälaskentaan tiedoston nimellä ja sen sisällön tunnisteella, kuten PDF:ssä: avaa sama tiedosto uudelleen, niin merkit ovat sen arkeilla.

## Mittakaava

Arkki alkaa piirustuksen antamalla mittakaavalla:

- **Asettelu** ottaa suurimman näkymäruudun mittakaavan. Mittakaava, kuten 1/2" = 1'-0", nimetään esiasetuksena, jonka se on; muu näytetään muodossa ”Piirustuksen näkymäruudusta: 1" = 2.5'”. Jos asettelussa on näkymäruutuja muilla mittakaavoilla, suurin määrää arkin mittakaavan: tarkista muut painikkeella {{ui:Tarkista}}.
- **Malli** ottaa piirustuksen yksiköt (tuumat, millimetrit, jalat…) mittakaavakseen: ”Piirustuksen yksiköt (tuumat)”.
- **Piirustus ilman yksiköitä** (piirustus ei koskaan kertonut, onko yksikkö tuuma vai millimetri) ei ole mittakaavaa: arkki sanoo ”Ei mittakaavaa”, eikä sillä voi mitata, kuten PDF:llä ilman mittakaavaa. Laskeminen ei vaadi mittakaavaa. Anna sille mittakaava painikkeella {{ui:Kalibroi}}.

{{ui:Kalibroi}}, {{ui:Tarkista}} ja {{ui:Esiasetus}}-luettelo muuttavat mittakaavaa milloin tahansa, ja ne ohittavat piirustuksen mittakaavan. Esiasetusluettelo on pois käytöstä Mallissa, jolla ei ole paperikokoa.

## Tasot

{{ui:Tasot}}-painike arkkipalkissa luettelee piirustuksen tasot ja sen, kuinka monta kohdetta kullakin tasolla on tällä arkilla. Tasot, jotka tiedosto kytki pois tai jäädytti, alkavat piilotettuina. Poista rasti tasolta piilottaaksesi sen, tai valitse piilotettu taso näyttääksesi sen: arkki piirtyy uudelleen, ja piilotettu jätetään pois laskennoista ja kohteista, jotka tarjotaan kohtaan {{ui:Mittaa piirustus}}, ellet pyydä laskemaan myös piilotettuja tasoja. {{ui:Näytä kaikki}} näyttää kaikki tasot; {{ui:Takaisin tiedoston tasoihin}} kumoaa muutoksesi. Tasovalinnat kuuluvat tähän istuntoon, eivät määrälaskennan tiedostoon.

## Linkitetyt piirustukset (xref)

Piirustus, joka linkittää muita piirustuksia, näyttää ne siellä, mihin ne on lisätty. TakeoffCraft löytää linkitetyn piirustuksen **avoimista tiedostoista** tiedostonimen perusteella: avaa isäntäpiirustus ja sen linkitetty piirustus yhdessä (tai toinen toisensa jälkeen). Siihen asti tilarivi kertoo, kuinka monta linkitettyä piirustusta ei löytynyt, mitä ne piirtävät puuttuu, ja laskennat kertovat sen.

## Rajoitukset

- Kohteet, joita TakeoffCraft ei voi lukea tai sijoittaa (välityskohteet, tuntemattomat luokat), luetellaan laskentaikkunassa tyypin mukaan; niitä ei koskaan jätetä pois ilman mainintaa.
- Hyvin suuret piirustukset piirretään osittain, ja laskennat pysähtyvät rajaan, josta ilmoitetaan. Avaa sellaisen piirustuksen PDF-plotti sen sijaan.
- Piirustus piirretään mustana ja omilla väreillään, tummennettuna valkoiselle paperille. Plottaustyylitaulukoita ja kynäasetuksia ei sovelleta.
