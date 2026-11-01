---
title: Uutta versiossa 0.7
summary: DWG- ja DXF-piirustukset aukeavat arkkeina omalla mittakaavallaan, tarkat lukumäärät ja pituudet suoraan piirustuksesta, valittu aliurakoitsijan tarjous paketin hintana, tarjouspyynnöt suljetuin hinnoin, avustajatyökalut piirustuksille ja USD 3D-tarkistusnäkymästä.
keywords: uutta, mitä uutta, julkaisutiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, dwg, dxf, piirustus, asettelut, mallitila, piirustuksen mittakaava, laske piirustuksesta, cad-laskenta, lohkot, dynaamiset lohkot, attribuutit, tasot, xref, linkitetty piirustus, mittaa piirustus, murtoviiva, viivoitus, merkitty pdf, valittu tarjous, käytä tarjousta, lähetä tarjouspyyntö, tarjouspyyntö, suljetut tarjoukset, tarjousten avaus, myöhäinen tarjous, aliurakoitsijatiedot, csv, avustaja, mcp, usd, usdz, yksiköt, yksikköluettelot, tiivis, paneelit, valintaikkunat, portugali
from: ad4f0df1
---

Tässä on se, mikä muuttui TakeoffCraftin versiossa 0.7 verrattuna versioon 0.6. Piirustukset aukeavat nyt sellaisinaan, ilman PDF:ksi plottaamista ensin, ja tarjouspaketin voi lähettää aliurakoitsijoille ja saada takaisin hinnoiteltuna.

## Uutta

### DWG- ja DXF-piirustukset

- **Piirustuksen avaaminen arkkeina.** {{ui:Avaa piirustukset}} {{ui:Tiedosto}}-ryhmässä ({{key:Mod+O}} tai pudota tiedostot) ottaa DWG- ja DXF-piirustukset PDF-tiedostojen rinnalle. Mallitila ja jokainen asettelu muuttuvat arkeiksi {{ui:Arkit}}-luettelossa, ja määrälaskenta voi kattaa piirustukset ja PDF-tiedostot yhdessä. Mitään ei lähetetä minnekään. Katso [DWG- tai DXF-piirustuksen avaaminen](topic:open-a-drawing).
- **Mittakaava tulee piirustuksesta.** Asettelu alkaa suurimman näkymäruutunsa mittakaavalla, nimettynä esiasetuksena, kun se sellainen on, kuten 1/2" = 1'-0". Malli alkaa piirustuksen yksiköissä. Piirustus, jolla ei ole yksiköitä, sanoo ”Ei mittakaavaa”, kunnes kalibroit sen. {{ui:Kalibroi}}, {{ui:Tarkista}} ja {{ui:Esiasetus}} voittavat silti. Katso [Mittakaava](topic:open-a-drawing#the-scale).
- **Tasot ja linkitetyt piirustukset.** {{ui:Tasot}} arkkipalkissa näyttää tai piilottaa piirustuksen tasot. Tasot, jotka tiedosto oli sammuttanut tai jäädyttänyt, alkavat piilotettuina eikä niitä lasketa, ellet valitse niin. Linkitetty piirustus (xref), joka on avattu isäntänsä rinnalla, piirretään ja lasketaan sinne, mihin se on sijoitettu; kunnes se on auki, tilarivi kertoo, mikä puuttuu. Katso [Tasot](topic:open-a-drawing#layers).
- **Merkitty PDF toimii piirustuksesta.** {{ui:Vie}} › {{ui:Merkitty PDF}} piirtää piirustuksen merkityt arkit ensin PDF:ksi, joten kopio näyttää merkintäsi ja selitteen ilman plottausvaihetta. Se piirretään mustana tai piirustuksen väreillä, ilman plottaustyylitaulukoita. Katso [Merkitty PDF](topic:export-estimate#a-marked-pdf).

### Tarkat lukumäärät ja pituudet piirustuksesta

- **Laske se, mitä piirustus sanoo olevan.** {{ui:CAD-laskenta}} arkkipalkissa laskee lohkon nimellä (sisäkkäiset lohkot, dynaamisten lohkojen tilat ja lohkomatriisit mukaan lukien), kaiken yhden tyypin tasolla tai tekstin tai attribuutin arvon. Se laskee sen, mitä arkki näyttää, tai koko piirustuksen kerran. Merkintöjen lisääminen on yksi kumoamisvaihe, ja uusi laskenta lisää vain sen, mikä on uutta. {{ui:Automaattilaskenta}} säilyy PDF-tiedostoille ja symboleille, jotka eivät ole lohkoja. Katso [Laskenta piirustuksesta](topic:count-from-a-drawing).
- **Mittaa piirustuksen omista viivoista.** {{ui:Mittaa piirustus}} ottaa napsauttamasi tai ikkunalla valitsemasi viivat, kaaret, murtoviivat, ympyrät, viivoitukset ja kiintokappaleet viiva- tai pinta-alanimikkeen merkinnöiksi. Kaaret, kaarevuudet ja viivoituksen reiät tulevat tarkkoina; ellipsit ja splinit mitataan hienoina jänteinä, ja palkki kertoo sen. Katso [Mittaus piirustuksesta](topic:measure-from-a-drawing).

### Tarjoukset

- **Käytä aliurakoitsijan tarjousta paketin hintana.** Valitse kohdassa {{ui:Vie}} › {{ui:Tarjouspaketit ja tasaus…}} tarjouksella {{ui:Käytä}}. Paketin nimikkeet pysyvät määrinä, yksi **Valittu tarjous** -rivi kantaa hinnan, nimikkeet, jotka tarjous jättää pois, pysyvät omalla kustannuksellasi, ja yleiskulut, voitto ja takuu kohdistuvat siihen. Tarjousten vaihtaminen on yksi kumoamisvaihe; työkirja ja tarjousyhteenveto kantavat sen. Katso [Tarjouksen käyttö paketin hintana](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Lähetä paketti tarjouspyyntöön.** {{ui:Lähetä tarjouspyyntö…}} paketin alla lähettää jokaiselle aliurakoitsijalle sähköpostilla linkin sivulle, joka ei vaadi tiliä: he näkevät laajuuden ja arkit PDF:nä, kirjoittavat hinnan jokaiselle riville tai merkitsevät sen ei sisältyväksi, lisäävät huomautuksia ja enintään kolme tiedostoa, tai kieltäytyvät. {{ui:Hae hinnat}} vetää takaisin tulleet tasaustaulukkoon, liputettuna **web**. Lähettäminen on avoinna vain tileille, jotka CadCraft-tiimi on ottanut käyttöön sen testauksen ajan (katso alla). Katso [Paketin lähetys tarjouspyyntöön](topic:bid-invitations).
- **Suljettu avaukseen asti.** Hinnat voivat pysyä suljettuina asettamaasi avausaikaan asti: siihen asti kukaan ei näe hintaa, et sinäkään. Avauksessa jokainen tarjous näkyy kerralla, ja määräajan jälkeen tullut tarjous merkitään myöhäiseksi. Katso [Suljetut tarjoukset ja avaus](topic:bid-invitations#sealed-bids-and-the-opening).
- **Aliurakoitsijatiedot.** getcadcraft.com-tilisi säilyttää kunkin yrityksen yhteyshenkilöt, alat, pätevyysvastaukset sekä vakuutus- ja lupapäivämäärät (liputettuna kun ne ovat menneet tai 30 päivän sisällä), sekä niiden aiemmat tarjoukset. Tuo ja vie ne CSV:nä ja valitse ne, kun lähetät paketin. Katso [Verkkosivustolla](topic:bid-invitations#on-the-website).

### Tekoälyavustajat

- **Avustajat voivat lisätä määrälaskentaan.** Kun **Muokkaus** on valittuna, oma avustajasi voi lisätä nimikkeitä (`items_add`) ja mitata vetoja, pinta-aloja ja lukumääriä arkilla (`marks_add`; pituudet ja pinta-alat vain mittakaavalliselle arkille), kukin kutsu yhtenä kumoamisvaiheena.
- **Avustajatyökalut piirustuksille.** Avoimessa DWG- tai DXF-tiedostossa avustaja voi luetella sen arkit ja sen, mitä voi laskea, laskea tarkasti, lisätä laskentamerkinnät ja mitata piirustuksen geometriasta. Kun TakeoffCraft ei ole auki, CadCraft MCP -palvelin avaa piirustuksen uutena määrälaskentana ja tallentaa sen, ja `cadcraft count` laskee komentoriviltä. Katso [Mitä avustaja voi pyytää](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-tarkistusnäkymä USD:nä.** {{ui:USD-paketti (.usdz)}} {{ui:GLB}}:n vieressä 3D-tarkistusnäkymässä kirjoittaa jokaisen seinän, laatan, levyn, lukumääräpylvään ja vedon omaksi kohteekseen, nimettynä nimikkeensä mukaan ja kantaen sen määrää, metreinä. Avustaja voi viedä sen myös (`usd_export`). Katso [3D-tarkistusnäkymän vienti USD:nä](topic:usd).

## Jokaisessa sovelluksessa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} sisältää kullekin oman luettelonsa pituudelle, pinta-alalle, tilavuudelle, kulmalle ja kaltevuudelle, täsmälleen yksiköiden määritelmien mukaisine kokoineen (Yhdysvaltain maanmittausjalka on oma yksikkönsä). Kytke pois yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista; merkitse yksi tähdellä, niin uusi työ alkaa siinä. Tiedosto säilyttää aina oman yksikkönsä. TakeoffCraftissa nimikkeen {{ui:Yksikkö}}-luettelot seuraavat kytkimiä, uusi nimike alkaa tähdellä merkityssä pituus- tai pinta-alayksikössä, kattoneliöt (SQ), eekkerit ja hehtaarit ovat uusia pinta-alayksiköitä, ja pituusruutu hyväksyy minkä tahansa yksikön tunnuksen, kuten `3 yd`. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiiviimpi asettelu ja paneelit, jotka väistyvät.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahduttaa enemmän näytölle (kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa). Jokaisella sivupaneelilla on kapea otsikkopalkki: vedä sitä kiinnittääksesi tai irrottaaksesi paneelin, pudota se toisen paneelin palkin päälle jakaaksesi yhden kehyksen välilehtinä, kiinnitä se liukumaan reunaan tai piilota se ja tuo se takaisin reunasta. Katso [Paneelien järjestäminen](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunoita voi siirtää.** Vedä valintaikkunaa otsikkopalkista pois piirustuksen tieltä; se palaa sinne, mihin sen jätit. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Valintaikkunan siirtäminen](common:arrange-panels#move-a-dialog).
- **Reseptejä tekoälyavustajille.** Kymmenen läpikäytyä pyyntöä omalle avustajallesi (piirustuksen siivous, sarjan plottaus, piirustusten tarkastus, mallia koskevat kysymykset, määrälaskennan summaus, osavaihtoehdon kokeilu …), kukin kutsumine työkaluineen ja tarvitsemineen oikeuksineen, ja kukin testeissämme toistettu. Sovellukset eivät sisällä tekoälyä. Katso [Reseptejä tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Kieli}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt sovellusten jokaisen sanan luonnoksina, joita äidinkielinen puhuja ei ole vielä tarkastanut. Ohjeaiheet ovat englanniksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (järjestelmällesi ei ole vielä tiedostoa, ei verkkoa, virheellinen allekirjoitus) pelkän ”Valmis” sijaan, eikä enää tuo takaisin sulkemaasi Uutta-korttia ennen kuin uudempi julkaisu on olemassa.

## Ei vielä tässä versiossa

- **Versiota 0.7 ei ole koodiallekirjoitettu.** Allekirjoitus ja Microsoft Store -paketti siirrettiin versioon 0.8, koska varmenteen vahvistus ei ole vielä mennyt läpi. Tarkista SHA-256 jokaisen tiedoston vieressä osoitteessa getcadcraft.com/download. Jos Windowsissa SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita kuitenkin}}. Macilla napsauta ensimmäisellä kerralla CadCraft Studiota hiiren oikealla painikkeella ja valitse {{ui:Avaa}}. CadCraft Studio ei ole vielä missään sovelluskaupassa, eikä iPad- tai iPhone-versiota ole vielä.
- Kulma- ja kaltevuusluettelot kohdassa {{ui:Yksiköt}} tallennetaan, mutta mikään ruutu ei lue niitä vielä.
- **Tarjouspyynnöt on kytketty pois useimmilta tileiltä.** Ominaisuuden testauksen ajan postit ulkopuolisille tarjoajille lähtevät vain tileiltä, jotka CadCraft-tiimi on ottanut käyttöön. Tarjoajien sivut toimivat jokaiselle jo lähetetylle kutsulle. Kaikki muut: lataa {{ui:Laajuus CSV}}, lähetä se itse sähköpostilla ja kirjoita tarjoukset käsin.
- CadCraft Studio -ikkuna ei voi vielä lähettää tarjouspyyntöjä: se kehottaa käyttämään TakeoffCraftia selaimessa. Lähetettyjä pyyntöjä sisältävän määrälaskennan avaaminen, tasaus ja tarjouksen valinta toimivat Studiossa.
- Lisäyksiä, myöntökirjeitä, laajuuslomaketta, jonka jokainen tarjoaja kuittaa, ja automaattisia muistutuksia ennen vakuutuspäivän umpeutumista ei ole toteutettu. Valittu tarjous ei hinnoittele uudelleen vaihtoehdon tarjousaluetta.
- Piirustukset: plottaustyylitaulukoita ja CTB-tiedostoja ei käytetä, binäärinen DXF hylätään (tallenna se ASCII-DXF:nä tai DWG:nä), linkitetyt piirustukset löytyvät vain avoimista tiedostoista tiedostonimen perusteella, eikä piirustuksen PDF-alustoja, kuvia ja OLE-kohteita piirretä tai lasketa. Lukumäärät ja mittakaavat on tarkistettu esimerkkipiirustuksilla, ei vielä oikean työn piirustuksilla, jotka on avattu ne tehneessä ohjelmassa.
- Avustaja voi lisätä nimikkeitä ja merkintöjä mutta ei voi siirtää, muuttaa tai poistaa jo olemassa olevia merkintöjä.

Kaikki muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet).
