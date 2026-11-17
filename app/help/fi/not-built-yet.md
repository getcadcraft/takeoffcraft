---
title: Mitä ei ole vielä toteutettu
summary: TakeoffCraft-ominaisuudet, joita tämä versio ei tee, ja mitä tehdä niiden sijaan tänään.
keywords: rajoitukset, puuttuu, ei vielä, tiekartta, suunniteltu, kiertotie, ajokohtainen, pilvi, työpöytä
from: 94ff90d0
---

TakeoffCraft on kehitteillä. Tämä luettelo kertoo, mitä nykyinen versio ei tee, ja miten työ silti saadaan tehtyä.

## Mittaaminen

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Pisteen lisääminen linjan tai ääriviivan keskelle | Poista merkki ja piirrä se uudelleen. |
| Laatikkovalinta (ikkuna) | {{key:Shift}} + napsauta jokaista merkkiä, tai {{key:Mod+A}} kaikille arkin merkeille. Katso [Kopioi, liitä ja monista merkit](topic:copy-paste). |
| Liitetyn kopion kiertäminen, peilaaminen tai skaalaaminen | Liitä arkille samassa mittakaavassa ja samassa suunnassa; piirrä loput käsin. |
| Mittakaavan lukeminen skannatulta arkilta tai graafisesta mittakaavapalkista | Valitse esiasetus, tai kalibroi palkin pituuden mukaan. |
| Useampi mittakaava arkilla (detaljialueet, suurennetut pohjakuvat) | Mittaa osa arkin mittakaavassa, ja laske detalji omalta suurennetulta arkiltaan, jos sarjassa sellainen on. |

## Nimikkeet ja hinnoittelu

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Yhdistelmäkaavat, jotka käyttävät nimikkeen muita merkkityyppejä (huoneen nimikkeen ovet sen lattian kaavoissa) | Kaavat käyttävät päätyypin summia; hinnoittele muut tyypit omilla riveillään. |
| Yhdistelmäkaavat laskettuna ajo kerrallaan | Kaavat käyttävät nimikkeen summia; käytä `N`:ää ajokohtaisiin lisiin. |
| Kaavat, jotka käyttävät toisen nimikkeen määriä | Toista mittaus siinä nimikkeessä, tai laske se taulukkolaskentavienissä. |
| Työryhmät yhdistelmän osissa tai työpäivä, joka on muu kuin 8 tuntia | Anna työryhmä nimikkeelle; laske muun pituisen päivän työryhmäpäivät työryhmätunnit ÷ oma päiväsi. |
| Muut merkinnät kuin huomautukset, pilvet ja korostukset (nuolet, mitoitukset, leimat), tai vastaukset huomautukseen | Kirjoita se huomautuksen tekstiin; muuta sen tilaa sitä mukaa kuin asia ratkeaa. |
| Tiimin yhteinen hintakirjasto tai tilillesi tallennettu kirjasto | Kirjasto säilytetään tässä selaimessa: vie se CSV-tiedostona ja tuo se toiseen tietokoneeseen. |
| Kustannusarvioijien tarkistamat ammattipaketit | Jokainen paketti on lähtökohta: tarkista sen oletukset omaa työtäsi ja tuotteitasi vastaan ennen kuin hinnoittelet sillä. Katso [Ammattipaketit](topic:trade-packs). |
| Ammattipakettien hinnat | Paketit tuovat vain yhdistelmät: aseta omat yksikköhintasi, tai tuo hinnastosi CSV-tiedostona. |
| Määrälaskennan nimeäminen uudelleen | Nimi tulee ensimmäisestä PDF:stä; nimeä ladatut tiedostot uudelleen. |
| Arkkien nimeäminen käsin | Arkit nimetään PDF:n sivutunnisteiden mukaan; hae tiedostonimen ja sivun perusteella. |

## Piirustukset (DWG ja DXF)

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Plottaustyylitaulukot, kynäasetukset ja CTB-tiedostot piirustuksen arkeilla | Piirustus piirretään mustana tai sen väreinä tummennettuna paperille; viivanpaksuudet tulevat piirustuksesta. |
| Binaarisen DXF:n tai AutoCAD 2000:ta vanhemman DWG:n avaaminen | Tallenna se ASCII-DXF:nä tai uudempana DWG:nä. |
| Linkitetyn piirustuksen (xref) löytäminen kansion perusteella, jossa se on | Avaa myös linkitetyn piirustuksen tiedosto isäntäpiirustuksen kanssa: se löytyy avoimien tiedostojen joukosta tiedostonimen perusteella. |
| 3D-murtoviivojen, verkkojen, kiintokappaleiden ja alueiden mittaaminen | Laske ne tason ja tyypin mukaan, tai mittaa pohjanäkymä Pituus- ja Pinta-ala -työkaluilla. |
| Merkityn PDF:n teksti piirustuksesta muilla kirjoitusjärjestelmillä kuin latinalaisilla | Merkit, joita Helvetica ei tue, tulostuvat merkityssä PDF:ssä muodossa ”?”; näytöllä oleva piirustus ei muutu. |
| Piirustuksen siirtäminen toiseen sovellukseen arkkipalkista | Avaa sama tiedosto kyseisessä sovelluksessa. |
| Piirustus, jonka sisään määrälaskenta on tallennettu, niin kuin {{ui:PDF, jonka sisällä on määrälaskenta}} tekee PDF-tiedostoille | {{ui:Tallenna määrälaskenta}}: `.takeoff.json` avautuu samaan piirustukseen, joka tunnistetaan sisällöstä. |
| PDF-taustakuvien, kuvien ja OLE-objektien piirtäminen tai laskeminen piirustukseen sijoitettuina | Kuvat näkyvät vain kehyksinä. Avaa taustakuvana oleva PDF itse arkkina. |

## Automaattilaskenta

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Symbolien etsiminen arkilta, jolla ei ole mittakaavaa ja jonka symbolit on piirretty toisenkokoisina | Anna arkille sen mittakaava, tai etsi se piirtämällä siihen laatikko. |
| Peilattujen symbolien etsiminen | Laske ne käsin, tai etsi uudelleen piirtämällä laatikko peilatun symbolin ympärille. |

## Tiedostot ja jakaminen

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Yksi PDF, joka sekä näyttää merkit että sisältää määrälaskennan | {{ui:Merkitty PDF}} merkkien katseltavaksi ihmisille; {{ui:PDF, jonka sisällä on määrälaskenta}} avattavaksi uudelleen TakeoffCraftissa. |
| Määrien CSV arkeittain tai merkeittäin | Käytä {{ui:XLSX}}-tiedostoa: sen By sheet- ja Marks-taulukoissa ne ovat. |
| Pilvitallennus | Ei vielä saatavilla. Tallenna projektitiedostot tietokoneellesi ja varmuuskopioi ne. |
| Erillinen TakeoffCraft-työpöytäsovellus | Versiosta 0.5 alkaen työpöytäsovellus on CadCraft Studio, jossa ovat kaikki kahdeksan sovellusta yhdessä asennuksessa. TakeoffCraft toimii myös selaimessa. |

## Näyttö ja syöte

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Hiiren oikean painikkeen (tai pitkän painalluksen) valikko | Käytä työkalurivia, paneeleja ja näppäimiä. Pitkä painallus viimeistelee ajon tai ääriviivan. |
| Näkymän kiertäminen | PDF:ssä jo kierretyt sivut näkyvät pystyssä. |

## 3D-näkymä

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Merkkien piirtäminen tai muokkaaminen 3D:ssä | Palaa arkille ({{key:3}}) piirtämistä varten; valinta ja poisto toimivat 3D:ssä. |
| Päällekkäisten kerrosten kohdistaminen, kun ne on plotattu sivuillaan eri kohtiin | Pinoa kerrokset, jotka on plotattu samalla tavalla; tarkista muut yksi arkki kerrallaan. |
| Laskettavan kohteen kokoisten pylväiden laskeminen | Jokainen pylväs arkilla on samankokoinen; se merkitsee, missä laskenta on, ei sitä, mikä kohde on. |

## Tarjouskilpailu

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Lisäykset jo lähetettyyn pakettiin, hankintapäätöskirjeet ja laajuusarkki, jonka kukin tarjoaja hyväksyy | Lähetä uusi paketti ja kirjoita hankintapäätös itse. [Lähetä paketti tarjouksia varten](topic:bid-invitations) kertoo, mitä on toteutettu. |
| Tarjouskutsujen lähettäminen mistä tahansa tililtä: testauksen ajan sähköposti ulkopuolisille tarjoajille on pois päältä, paitsi CadCraft-tiimin sallimille tileille | Lataa {{ui:Laajuus CSV}}, lähetä se itse sähköpostilla ja kirjoita tarjoukset sisään käsin. |
| Tarjouspakettien lähettäminen Studio-ikkunasta | Lähetä TakeoffCraftista selaimessa. |
| Vaihtoehdon tarjousalueen uudelleenhinnoittelu valitulla tarjouksella | Vaihtoehdot ja tarjousalueiden välisummat käyttävät omia hintojasi; säädä vaihtoehto käsin. |
| Automaattiset muistutukset ennen aliurakoitsijan vakuutuksen tai lisenssin päättymispäivää | Päivämäärä merkitään Aliurakoitsijat-sivulla, kun se on mennyt umpeen tai on 30 päivän sisällä; tarkista se kutsuessasi. |

## Paneelit

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| {{ui:Määrät}}-taulukon siirtäminen | Vain {{ui:Arkit}}- ja {{ui:Nimikkeet}}-paneelit voi siirtää. Katso [Järjestä paneelit](common:arrange-panels). |

## Taulukkolaskenta

XLSX-työkirja on tarkistettu LibreOffice Calcissa, joka laski uudelleen jokaisen summan samaan senttiin kuin TakeoffCraft. Sitä ei ole vielä avattu Excelissä. Jos taulukkolaskentaohjelma näyttää jotain odottamatonta, CSV-vienti sisältää saman arvion yksinkertaisina arvoina.
