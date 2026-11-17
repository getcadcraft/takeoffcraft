---
title: Mitä uutta versiossa 0.7 (aiemmin)
summary: DWG- ja DXF-piirustukset avautuvat arkkeina omalla mittakaavallaan, tarkat lukumäärät ja pituudet itse piirustuksesta, valittu alihankkijan tarjous paketin hintana, tarjouskutsut suljetuilla hinnoilla, avustajan työkalut piirustuksille sekä USD 3D-tarkistusnäkymästä.
keywords: mitä uutta 0.7, aiempi julkaisu, julkaisutiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, dwg, dxf, piirustus, asettelut, mallitila, piirustuksen mittakaava, laskenta piirustuksesta, cad-laskenta, lohkot, dynaamiset lohkot, attribuutit, tasot, xref, linkitetty piirustus, mittaa piirustus, polyline, viivoitus, merkitty pdf, valittu tarjous, käytä tarjousta, lähetä tarjouspyyntö, tarjouskutsu, suljetut tarjoukset, tarjousavaus, myöhässä oleva tarjous, alihankkijatiedot, csv, avustaja, mcp, usd, usdz, yksiköt, yksikkölistat, tiivis, paneelit, valintaikkunat, portugali
from: de1dca2b
---

Tämä on se, mikä muuttui TakeoffCraft 0.7:ssä versioon 0.6 verrattuna. Piirustukset avautuvat nyt sellaisinaan ilman tulostusta PDF-muotoon ensin, ja tarjouspaketti voi lähteä alihankkijoille ja palata hinnoiteltuna.

## Uutta

### DWG- ja DXF-piirustukset

- **Avaa piirustus arkkeina.** {{ui:Avaa piirustukset}} ryhmässä {{ui:Tiedosto}} ({{key:Mod+O}}, tai pudota tiedostot) ottaa DWG- ja DXF-piirustukset PDF-tiedostojen rinnalle. Mallitila ja jokainen asettelu tulevat arkeiksi {{ui:Arkit}}-luetteloon, ja määrälaskenta voi kattaa sekä piirustukset että PDF:t. Mitään ei ladata. Katso [Avaa DWG- tai DXF-piirustus](topic:open-a-drawing).
- **Mittakaava tulee piirustuksesta.** Asettelu alkaa suurimman näkymäruudun mittakaavasta, nimettynä esiasetuksena, jos se sellainen on, esimerkiksi 1/2" = 1'-0". Malli alkaa piirustuksen yksiköissä. Piirustus, jossa ei ole yksiköitä, sanoo "Ei mittakaavaa", kunnes kalibroit sen. {{ui:Kalibroi}}, {{ui:Tarkista}} ja {{ui:Esiasetus}} voittavat yhä. Katso [Mittakaava](topic:open-a-drawing#the-scale).
- **Tasot ja linkitetyt piirustukset.** {{ui:Tasot}} arkkipalkissa näyttää tai piilottaa piirustuksen tasot. Tasot, jotka tiedosto on sammuttanut tai jäädyttänyt, alkavat piilotettuina, eikä niitä lasketa, ellei valita toisin. Linkitetty piirustus (xref), joka on avattu isäntänsä rinnalle, piirretään ja lasketaan siihen kohtaan, johon se on lisätty; ennen kuin se on auki, tilarivi kertoo, mitä puuttuu. Katso [Tasot](topic:open-a-drawing#layers).
- **Merkitty PDF toimii piirustuksesta.** {{ui:Vie}} › {{ui:Merkitty PDF}} piirtää piirustuksen merkityt arkit ensin PDF-tiedostoksi, joten kopiossa näkyvät merkintäsi ja selitteesi ilman tulostusvaihetta. Se piirretään mustana tai piirustuksen väreillä, ilman tulostustyylitauluja. Katso [Merkitty PDF](topic:export-estimate#a-marked-pdf).

### Tarkat lukumäärät ja pituudet piirustuksesta

- **Laske se, mitä piirustus sanoo olevan.** {{ui:CAD-laskenta}} arkkipalkissa laskee lohkon nimen mukaan (sisäkkäiset lohkot, dynaamisten lohkojen tilat ja lohkotaulukot mukaan lukien), kaiken yhtä tyyppiä tasolla tai tekstin tai attribuutin arvon. Se laskee sen, mitä arkki näyttää, tai koko piirustuksen kerran. Merkintöjen lisääminen on yksi kumoamisvaihe, ja uudelleen laskeminen lisää vain uudet. {{ui:Automaattilaskenta}} säilyy PDF-tiedostoille ja symboleille, jotka eivät ole lohkoja. Katso [Laske piirustuksesta](topic:count-from-a-drawing).
- **Mittaa piirustuksen omista viivoista.** {{ui:Mittaa piirustus}} ottaa viivat, kaaret, murtoviivat, ympyrät, viivoitukset ja kiintokappaleet, jotka napsautat tai rajaat ikkunalla, lineaarisen tai pinta-alanimikkeen merkinnöiksi. Kaaret, pullistumat ja viivoituksen reiät tulevat tarkasti; ellipsit ja splinet mitataan hienoilla jänteillä, ja palkki kertoo sen. Katso [Mittaa piirustuksesta](topic:measure-from-a-drawing).

### Tarjoukset

- **Käytä alihankkijan tarjousta paketin hintana.** {{ui:Vie}} › {{ui:Tarjouspaketit ja tasaus…}}, valitse tarjouksesta {{ui:Käytä}}. Paketin nimikkeet pysyvät määrinä, yksi **Valittu tarjous** -rivi kantaa hinnan, nimikkeet, joita tarjous ei sisällä, pysyvät omalla hinnallasi, ja yleiskulut, voitto ja takuu koskevat sitä. Tarjouksen vaihtaminen on yksi kumoamisvaihe; työkirja ja tarjousyhteenveto kantavat sen mukanaan. Katso [Käytä tarjousta paketin hintana](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Lähetä paketti tarjouspyyntönä.** {{ui:Lähetä tarjouspyyntö…}} paketin alla lähettää jokaiselle alihankkijalle sähköpostitse linkin sivulle, johon ei tarvita tiliä: he näkevät laajuuden ja arkit PDF-tiedostona, kirjoittavat hinnan jokaiselle riville tai merkitsevät rivin ei-sisältyväksi, lisäävät huomautuksia ja enintään kolme tiedostoa, tai kieltäytyvät. {{ui:Hae hinnat}} vetää takaisin tulleet hinnat tasaustaulukkoon, merkittynä **web**. Lähettäminen on avoinna vain tileille, jotka CadCraft-tiimi on ottanut käyttöön testauksen aikana (katso alla). Katso [Lähetä paketti tarjouspyyntönä](topic:bid-invitations).
- **Suljettu avaukseen asti.** Hinnat voivat pysyä suljettuina asettamaasi avausaikaan asti: siihen asti ei kukaan näe hintaa, sinä mukaan lukien. Avauksessa kaikki tarjoukset näkyvät kerralla, ja määräajan jälkeen saapunut tarjous merkitään myöhässä olevaksi. Katso [Suljetut tarjoukset ja avaus](topic:bid-invitations#sealed-bids-and-the-opening).
- **Alihankkijatiedot.** Tilisi getcadcraft.com-sivustolla pitää kunkin yrityksen yhteystiedot, alat, pätevyysvastaukset sekä vakuutus- ja lisenssipäivät (merkitään, kun ne ovat menneet tai alle 30 päivän päässä), menneiden tarjoustensa kanssa. Tuo ja vie ne CSV-tiedostona ja valitse ne, kun lähetät paketin. Katso [Verkkosivustolla](topic:bid-invitations#on-the-website).

### AI-avustajat

- **Avustajat voivat lisätä määrälaskentaan.** Kun **Muokkaa** on rastitettu, oma avustaja voi lisätä nimikkeitä (`items_add`) ja mitata pituuksia, pinta-aloja ja lukumääriä arkilla (`marks_add`; pituudet ja pinta-alat vain mittakaavoitetulle arkille), ja kukin kutsu on yksi kumoamisvaihe.
- **Avustajan työkalut piirustuksille.** Avoimelta DWG- tai DXF-tiedostolta avustaja voi listata sen arkit ja mitä voi laskea, laskea tarkasti, lisätä laskentamerkinnät ja mitata piirustuksen geometriasta. Ilman että TakeoffCraft on auki, CadCraft MCP -palvelin avaa piirustuksen uutena määrälaskentana ja tallentaa sen, ja `cadcraft count` laskee komentoriviltä. Katso [Mitä avustaja voi pyytää](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D-tarkistusnäkymä USD-muodossa.** {{ui:USD-paketti (.usdz)}} {{ui:GLB}}:n vieressä 3D-tarkistusnäkymässä kirjoittaa jokaisen seinän, laatan, levyn, laskentapylvään ja juoksun omaksi kohteekseen, nimettynä nimikkeensä mukaan ja kantaen määräänsä metreinä. Avustaja voi viedä sen myös (`usd_export`). Katso [Vie 3D-tarkistusnäkymä USD-muodossa](topic:usd).

## Kaikissa sovelluksissa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} sisältää kukin pituudelle, pinta-alalle, tilavuudelle, kulmalle ja kaltevuudelle oman luettelonsa, tarkkoine kokoineen yksikön määritelmien mukaan (US survey foot on oma yksikkönsä). Kytke pois yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista; merkitse yksi tähdellä, niin uusi työ alkaa siitä. Tiedosto säilyttää aina oman yksikkönsä. TakeoffCraftissa nimikkeen {{ui:Yksikkö}}-luettelot seuraavat kytkimiä, uusi nimike alkaa tähdellä merkitystä pituus- tai pinta-alayksiköstä, kattoneliöt (SQ), eekkerit ja hehtaarit ovat uusia pinta-alayksiköitä, ja pituuskenttä ottaa minkä tahansa yksikön merkin, kuten `3 yd`. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiivis asettelu ja paneelit, jotka siistiytyvät pois.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahtuu ruudulle enemmän (kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa). Jokaisella sivupaneelilla on kapea otsikkopalkki: vedä se, kun haluat kiinnittää tai irrottaa paneelin; pudota se toisen paneelin palkkiin, jos haluat jakaa yhden kehyksen välilehtinä; kiinnitä se liukumaan reunaan, tai piilota ja tuo takaisin reunasta. Katso [Järjestä paneelit](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunat liikkuvat.** Vedä valintaikkunaa otsikkopalkista pois piirustuksen tieltä; se palaa siihen, mistä lähdit. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).
- **Reseptit tekoälyavustajille.** Kymmenen esimerkkipyyntöä omalle avustajallesi (piirustuksen siistiminen, sarjan tulostus, piirustusten tarkistus, kysymykset mallista, määrälaskennan yhteenveto, osan muunnelman kokeilu ja muut), kukin työkaluineen ja tarvittavine oikeuksineen, ja testimme toistavat jokaisen. Sovelluksissa ei ole tekoälyä. Katso [Reseptit tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Kieli}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt kaikki sovellusten sanat, luonnoksina, joita äidinkielinen puhuja ei ole vielä tarkistanut. Ohjeaiheet ovat englanniksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (ei vielä tiedostoa järjestelmällesi, ei verkkoa, virheellinen allekirjoitus), eikä vain sano "Valmis". Se myös lakkaa tuomasta takaisin Mitä uutta -korttia, jonka suljit, ennen kuin on uudempi julkaisu.

## Ei vielä tässä versiossa

- **0.7 ei ole koodiallekirjoitettu.** Allekirjoitus ja Microsoft Store -paketti siirrettiin versioon 0.8, koska varmenteen vahvistus ei ole vielä valmis. Tarkista SHA-256 jokaisen tiedoston vieressä osoitteessa getcadcraft.com/download. Windowsissa, jos SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa ensimmäisellä kerralla napsauta CadCraft Studiota hiiren oikealla ja valitse {{ui:Avaa}}. CadCraft Studio ei ole vielä sovelluskaupassa, eikä iPad- tai iPhone-versiota ole vielä.
- Kulma- ja kaltevuusluettelot kohdassa {{ui:Yksiköt}} tallentuvat, mutta mikään kenttä ei vielä lue niitä.
- **Tarjouskutsut on kytketty pois useimmilta tileiltä.** Testauksen aikana sähköposti ulkopuolisille tarjoajille lähtee vain tileiltä, jotka CadCraft-tiimi on ottanut käyttöön. Tarjoajien sivut toimivat jo lähetettyjen kutsujen osalta. Muut lataavat {{ui:Laajuus CSV}}-tiedoston, lähettävät sen itse sähköpostilla ja kirjoittavat tarjoukset käsin.
- CadCraft Studio -ikkuna ei vielä voi lähettää tarjouskutsuja: se pyytää käyttämään TakeoffCraftia selaimessa. Määrälaskennan avaaminen, jossa on lähetettyjä pyyntöjä, tasaus ja tarjouksen valinta toimivat Studiossa.
- Lisäykset, urakkapäätöskirjeet, allekirjoitettava laajuusluettelo jokaiselle tarjoajalle ja automaattiset muistutukset ennen vakuutuspäivän umpeutumista eivät ole valmiita. Valittu tarjous ei hinnoittele uudelleen lisätarjouksen tarjousaluetta.
- Piirustukset: tulostustyylitauluja ja CTB-tiedostoja ei sovelleta, binaarinen DXF hylätään (tallenna se ASCII DXF- tai DWG-muodossa), linkitettyjä piirustuksia löydetään vain avoimista tiedostoista tiedostonimen perusteella, ja PDF-taustakuvia, kuvia ja OLE-objekteja piirustuksessa ei piirretä eikä lasketa. Mittakaavat ja lukumäärät on tarkistettu näytepiirustuksilla, ei vielä oikean työn piirustuksilla, avattuna siinä ohjelmassa, joka ne teki.
- Avustaja voi lisätä nimikkeitä ja merkintöjä, mutta ei siirtää, muuttaa eikä poistaa jo olemassa olevia merkintöjä.

Kaikki muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet).
