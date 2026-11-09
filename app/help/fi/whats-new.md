---
title: Mitä uutta versioissa 0.8 ja 0.8.1
summary: Laske koko symbolien selite kaikilta avoimilta arkeilta yhdellä ajolla, hinnoittele nimikkeet aiempien töidesi hinnoista ja tarkista määrälaskenta toimittajan varastoa ja toimitusaikoja vastaan. Kaikille kolmelle on uusia tekoälyavustajan työkaluja. Mukana ovat myös yhteiset muutokset versiossa 0.8 ja DWG-tiedostojen korjaus versiossa 0.8.1.
keywords: mitä uutta, mitä uutta versiossa, julkaisutiedot, muutosloki, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, laske kaikki, selite, symbolien selite, koko sarja, hintamuisti, aiemmat työt, viimeisin työ, tyypillinen hinta, toimittaja, varasto, toimitusaika, takatilaus, tilauslista, puute, Ongelmat-paneeli, avustaja, kielet, syöttölaitteet, työkalurivin rivit, DWG
from: a04adef6
---

Tässä on, mitä muuttui TakeoffCraftissa versioon 0.7 verrattuna versioihin 0.8 (julkaistu 2026-11-01) ja 0.8.1 (2026-11-02). Symbolien selitteen voi nyt laskea koko sarjasta kerralla, uusi määrälaskenta voi lähteä liikkeelle aiempien töiden hinnoista, ja määrälaskennan voi tarkistaa toimittajan varastoa vasten. Versio 0.8.1 on korjausjulkaisu.

## Uutta

### Laske kaikki sarjasta

- **Rajaa selite kerran.** {{ui:Laske kaikki}} työkalurivillä lukee symbolien selitteen: vedä laatikko symbolien ympärille ja piirrettyjen nimien ympärille. Jokainen symboli luetellaan kuvansa ja nimensä kanssa, ja nimestä tulee nimikkeen nimi. Poista rastit kohdista, joita et halua, ja valitse sitten {{ui:Laske N arkilta}}. Palkki näyttää arkin, jota etsitään, {{ui:Peruuta}} pysäyttää ajon, ja sivu pysyy käytettävissä.
- **Kaikki arkit yhdellä ajolla.** Jokainen symboli lasketaan jokaiselta avoimelta arkilta. Arkki, joka on piirretty toisessa mittakaavassa, haetaan sen mittakaavan mukaan, ja symbolit löytyvät käännettyinä missä tahansa suorassa kulmassa. Selitteen omia symboleja ei lasketa sen omalta arkilta.
- **Tarkista ennen lisäämistä.** Jokaisella kokonaissummalla on linkki arkkikohtaisesti (”E-103: 4”), joka vie kyseiselle arkille. Napsauta osumaa laatikosta jättääksesi sen pois, ja napsauta uudelleen palauttaaksesi sen. Vastaavuustaso (50 % – 100 %) vain suodattaa löydettyjä osumia; mitään ei etsitä uudelleen.
- **Yksi kumoamisvaihe.** {{ui:Lisää N merkintää}} luo laskentanimikkeen jokaiselle symbolille ja merkinnän jokaiseen osumaan. Nimi, joka on jo sinun laskentanimikkeesi, käytetään uudelleen. {{key:Ctrl+Z}} kumoaa kaikki nimikkeet ja merkinnät. Hyväksymäsi kohteet tallentuvat myös kohtaan {{ui:Opittu}}.
- **Symbolit missä tahansa kulmassa.** Ruksita ennen laskentaa {{ui:Symbolit missä tahansa kulmassa}}, jotta löydetään myös symbolit, jotka on käännetty muussa kuin suorassa kulmassa. Haku kääntää silloin jokaista symbolia 15 asteen välein, ja symboli, joka ei ole pyöreä, voi viedä jopa kuusi kertaa kauemmin.
- **Mitä se on.** Tavallista symbolien vertailua omilla arkeillasi, ilman koulutettua mallia. Mikään ei lähde koneeltasi. Kuvitellulla 200 arkin sarjalla kokonaisuus kesti 9,4 sekuntia Chromessa nopealla pöytäkoneella; todelliset piirustussarjat ovat hitaampia. Katso [Laske kaikki sarjasta](topic:count-everything).

### Hintamuisti omista töistä

- **TakeoffCraft muistaa hintasi.** Kun tallennat määrälaskennan, jokaisen käytetyn hinnoitellun nimikkeen hinnat muistetaan nimen ja tyypin mukaan: materiaalihinta, työhinta, hukka ja yksikkö. Viimeiset 12 työtä säilytetään jokaiselle nimelle. Tieto säilytetään tällä tietokoneella hinnaston rinnalla, ei koskaan määrälaskentatiedoston sisällä, eikä mitään lähetetä minnekään.
- **Aloita uusi määrälaskenta siitä.** {{ui:Hinnat}} työkalurivillä näyttää jokaiselle nimikkeelle viimeisimmän työn hinnat, tyypilliset hinnat ja vaihteluvälin. {{ui:Käytä viimeisintä}} tai {{ui:Käytä tyypillistä}} hinnoittelee yhden nimikkeen, ja {{ui:Hinnoittele N hinnoittamatonta nimikettä muistista}} täyttää kaikki nimikkeet, joilla ei vielä ole hintaa. Jokainen käyttö on yksi kumoamisvaihe.
- **Vanhempi työ.** {{ui:Opi aiemmasta määrälaskennasta…}} muistaa tallennetun määrälaskennan hinnoitellut nimikkeet (.json).
- **Näe, muuta ja unohda.** {{ui:Kaikki muistettu}} luettelee jokaisen nimen; roskakoripainike unohtaa yhden, ja {{ui:Tyhjennä kaikki hinnat}} unohtaa kaikki. Lopeta tallennus poistamalla rasti kohdasta {{ui:Muista hintani, kun tallennan määrälaskennan}}. Kappalehintaa ei koskaan aseteta metrimääräiseen nimikkeeseen. Katso [Hintamuisti aiemmista töistä](topic:price-memory).

### Toimittajan varasto ja toimitusajat

- **Tarkista toimittajan luetteloa vasten.** {{ui:Toimitus}} työkalurivillä ottaa toimittajan varastoluettelon ({{ui:Lisää toimittajan tiedosto…}}), CSV-tiedoston tai taulukon, ja vertaa siihen määrälaskennan tarvetta hukka mukaan lukien. Enintään viisi tiedostoa säilytetään. Mitään ei lähetetä, eikä mikään pyydä toimittajalta mitään: tuot tiedoston itse.
- **Mitä se kertoo.** Puutteelliset nimikkeet tulevat ensin: ”Puuttuu 120 EA”, ”Toimitusaika 21 päivää”, ”Tilauksessa”, ”Yksikkö eroaa”, ”Ei varastotietoa” tai ”Varastossa”. {{ui:Pisin hyväksyttävä odotus (päivää)}} alkaa arvosta 14.
- **Tilauslista.** {{ui:Tilauslista (CSV)}} lataa puutteelliset nimikkeet puuttuvine määrineen, toimittajineen ja toimitusaikoineen.
- **Hinnat kirjastoon.** Jos tiedostossa on hintoja, {{ui:Hinnat kirjastoon}} asettaa materiaalihinnan jokaiselle kirjastomerkinnälle, jolla on sama nimi ja yksikkö. Hinnoittele uudelleen kirjastosta, jotta hinnat siirtyvät määrälaskentaan.
- **Ongelmat-paneelissa.** Puute on varoitus ja pitkä odotus huomautus, kohdassa ”Toimittajan varasto”. Puutteen voi hyväksyä perustelun kanssa, ja perustelu tallentuu määrälaskentaan. Katso [Tarkista toimittajan varasto ja toimitusajat](topic:supplier-stock).

### Tekoälyavustajat

- **Työkalut kaikille kolmelle.** Kun avustajien käyttö on sallittu kohdassa {{ui:Asetukset}}, avustaja voi lukea selitteen (`legend_open`), suorittaa laskennan (`legend_count_start`, sen jälkeen `legend_count_status` ja `legend_count_result`) ja lisätä tulokset (`legend_count_add`, joka voi esikatsella ensin). Se voi lukea muistetut hinnat (`prices_list`) ja hinnoitella nimikkeitä niistä (`prices_apply`, joka voi esikatsella ensin) sekä lukea toimittajatarkistuksen (`supply_check`). Toimittajatiedoston lisääminen on edelleen sinun tehtäväsi. Katso [Käytä TakeoffCraftia tekoälyavustajien kanssa](topic:use-with-ai-assistants).

### Kaikissa sovelluksissa

- **Kielet.** Kieliä on yhteensä viisikymmentäneljä; kymmenen on uutta (liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filippiino, swahili ja uzbekki). Muut kuin englannin kielet ovat koneellisia luonnoksia, kunnes äidinkielinen puhuja on lukenut ne.
- **Syöttölaitteet.** {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Syöttölaitteet}} määrittää, mitä kosketuslevy, hiiren sivupainikkeet, kynä, 3D-hiiri, peliohjain tai MIDI-ohjain tekee, kaikille sovelluksille tai yhdelle. Katso [Käytä kosketuslevyä, 3D-hiirtä tai ohjainta](common:input-devices).
- **Työkalurivin rivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} tarjoaa vaihtoehdot {{ui:Rivitä}} (aloitus), {{ui:2 riviä}} ja {{ui:1 rivi}}; ryhmät, jotka eivät mahdu, vierittyvät sivuttain. Katso [Järjestä paneelit](common:arrange-panels).
- **Ongelmat-paneeli.** Yhteinen varoitusten ja huomautusten paneeli sisältää nyt yllä kuvatun toimittajan varastotarkistuksen muiden tarkistusten rinnalla.
- **Lisäosat.** Lisäosat seuraavat tilisi luetteloa. Katso [Lisäosat ja tilisi luettelo](common:addons-basics).
- **Yhdistä tekoälysi.** CadCraft Studio on keskus: yhdistä avustajasi kerran kaikille kahdeksalle sovellukselle. Studiolla ei ole omaa tekoälyä.

## Korjattu versiossa 0.8.1

- **DWG-tiedoston luokkaosio.** DWG-tiedoston luokkaosio luettiin väärän tyyppiseksi. Tämä on korjattu TakeoffCraftissa ja neljässä muussa sovelluksessa.
- **Studio voi vaihtaa kieltä käynnin aikana.** Aiemmin Studio ja sen pakatut versiot olivat vain englanninkielisiä. Tätä ei ole testattu työpöytäversiossa kaikilla alustoilla; kerro meille, jos kieli ei vaihdu.

## Ei vielä tässä versiossa

- **Ei koodiallekirjoitusta.** Windows voi varoittaa, ja Macissa napsautat ensimmäisellä kerralla hiiren kakkospainikkeella ja valitset {{ui:Avoin}}. Kaupan versiot (Microsoft Store, Google Play, App Store) ovat pidossa, eikä iPad- ja iPhone-versiota ole rakennettu uudelleen versiolle 0.8.1.
- **Studion päivitykset.** Windows-asennusohjelma ja Linux-paketit tarkistavat päivityksiä kerran päivässä ja kysyvät ensin. Portable-zip vain ilmoittaa päivityksistä, eikä macOS eikä APK päivity itsestään. Version 0.8 macOS .dmg seuraa julkaisua.
- **Yhdistä tekoälysi.** Yhden napsautuksen yhdistäminen Studiossa, selaimessa toimiva tekoälyn hostattu liitin, oma API-avain Studiossa ja julkaistu MCP-paketti eivät ole tässä versiossa luvattuja.
- **Laske kaikki.** Se tarvitsee symboleja, jotka on piirretty samalla tavalla kuin selitteessä, ja symboli, jonka läpi kulkee seinä tai pitkä viiva, voi jäädä huomaamatta. Peilattuja symboleja ei löydetä, ja arkki ilman mittakaavaa, joka on piirretty toisessa koossa, haetaan selitteen koossa. Tarkista ensimmäisen arkin osumat ennen kuin luotat loppuihin.
- **Toimittajan varasto.** Varastotiedot ovat vain niin ajantasaisia kuin lisäämäsi tiedosto. Tarkistus ei koskaan kysy toimittajalta.
- **Kielet.** Tamilin sovelluspalkki ylittyy.

Kaikki muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet). Edellisen julkaisun tiedot löytyvät kohdasta [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
