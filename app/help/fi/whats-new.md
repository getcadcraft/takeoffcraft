---
title: Mitä uutta versiossa 0.9
summary: Lue pituudet metreinä, senttimetreinä tai millimetreinä, metriset pinta-alat m2-yksikössä seinäpinta-alan kanssa, 1:75- ja 1:150-mittakaavaesiasetukset, paino- ja lämpötilayksiköt, Kaari kymmenellä menetelmällä sekä live-kursorit, seuranta ja henkilöluettelo.
keywords: mitä uutta, julkaisutiedot, muutosloki, 0.9, näytä pituudet muodossa, metriä, senttimetriä, millimetriä, metrinen, seuraa yleisasetusta, yksiköt, näyttöyksiköt, m2, neliömetriä, seinäpinta-ala, mittakaavaesiasetukset, 1:75, 1:150, paino, kilogrammaa, kg, tonni, lb, lämpötila, celsius, fahrenheit, kaari, kaarimenetelmät, 3-pisteen kaari, säde, live, kursorit, seuranta, henkilöluettelo, luokka, työkaluvihjeet, asettelu, versio, uudet ominaisuudet, laske kaikki, selite, koko sarja, hintamuisti, aiemmat työt, edellinen työ, tyypillinen hinta, toimittaja, varasto, toimitusaika, jälkitilaus, tilauslista, puute, ongelmat, avustaja, kielet, syöttölaitteet, työkalurivin rivit, dwg
from: 6182b998
---

Tämä on se, mikä muuttui TakeoffCraft 0.9:ssä versioon 0.8.1 verrattuna. Kyseessä on pieni julkaisu tälle sovellukselle: pituudet voi nyt lukea metreinä, senttimetreinä tai millimetreinä, pinta-alat ja mittakaavat seuraavat metristä työtä kunnolla, ja Kaarella on kymmenen piirtotapaa. Live-istunnoissa näkyy myös, kuka on missäkin.

## Uutta

### Lue pituudet metreinä, senttimetreinä tai millimetreinä

- **Näytä pituudet muodossa.** {{ui:Asetukset}} › {{ui:TakeoffCraft}} sisältää kohdan {{ui:Näytä pituudet muodossa}}, jossa on {{ui:Seuraa yleisasetusta}}, {{ui:Jalat ja tuumat}}, m, cm ja mm. {{ui:Seuraa yleisasetusta}} käyttää metristä pituusyksikköä, jonka olet merkinnyt tähdellä kohdassa {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Yksiköt}}, ja jalat ja tuumat, kun mitään ei ole merkitty. Se muuttaa pituuksien lukutapaa arkilla, tilarivillä ja paneeleissa, mukaan lukien korkeudet, syvyys, paksuus ja tasot. Kenttään kirjoitettu paljas luku korkeuskentässä luetaan näytetyssä yksikössä.
- **Vain näyttö.** Määrät, kustannukset ja viennit lasketaan tarkoista pituuksista. Valinta 1/16, 1/8 ja 1/4 tuumaa näkyy vain jalat ja tuumat -muodossa. Katso [Näytä pituudet metreinä](topic:show-lengths-in-meters).
- **Painoyksiköt.** {{ui:Kirjoitettu määrä (ei piirustusta)}} -nimike voi nyt olla lb-, TON-, kg- tai t-yksikössä, ja sen voi hinnoitella yksikköä kohden.
- **Lämpötila.** Jokaisella nimikkeellä on valinnainen {{ui:Lämpötila}}-kenttä nimikkeen muokkaimessa, kirjoitettuna celsius- tai fahrenheit-asteina. {{ui:Näytä lämpötilat muodossa}} kohdassa {{ui:Asetukset}} › {{ui:TakeoffCraft}} tarjoaa {{ui:Seuraa yleisasetusta}}, °C tai °F.

### Pinta-alat ja mittakaavat metrisiin töihin

- **Pinta-alat m2-yksikössä piirustuksella.** Metrisellä nimikkeellä mitattu pinta-ala näyttää m2 piirustuksen merkkitunnisteessa ja merkintäpaneelissa sekä taulukossa SF-yksikön sijaan. Sääntö on: m2, kun nimike on hinnoiteltu metrisesti tai pituudet näytetään m-, cm- tai mm-yksikössä; muuten SF.
- **Seinäpinta-ala.** Lineaarinen nimike, jolla on korkeus, näyttää myös seinäpinta-alansa (pituus kertaa korkeus) nimikeluettelossa ja huomautusrivinä nimikekohtaisten määrien taulukon alla.
- **Mittakaavaesiasetukset 1:75 ja 1:150.** Ne ovat {{ui:Esiasetus}}-luettelossa {{ui:Mittakaava}}-ryhmässä, jossa on nyt 32 mittakaavaa. Katso [Mittakaavan esiasetukset](topic:scale-presets).

### Kaari kymmenellä menetelmällä

- Kun {{ui:Kaari}} on päällä (työkalurivin painike tai {{key:R}}), arkkipalkkiin ilmestyy laatikko {{ui:Kaaren menetelmä}}, jossa on nämä menetelmät: 3-piste; Alku, Keskipiste, Loppu; Alku, Keskipiste, Kulma; Alku, Keskipiste, Pituus; Alku, Loppu, Kulma; Alku, Loppu, Suunta; Alku, Loppu, Säde; Keskipiste, Alku, Loppu; Keskipiste, Alku, Kulma; ja Keskipiste, Alku, Pituus. Kulma, pituus, säde ja suunta voidaan napsauttaa tai kirjoittaa. Toiminto toimii pituuksissa, pinta-aloissa ja aukoissa. Ennen versiota 0.9 tallennetut tiedostot aukeavat samalla tavalla. Katso [Piirrä kaaria kymmenellä menetelmällä](topic:draw-arcs-ten-methods).

### Yhdessä työskentely

- **Näe toistesi kursorit.** Live-istunnossa jokaisen henkilön osoitin näkyy arkilla hänen nimensä ja värinsä kanssa, ja valittuja merkintöjä ympäröi katkoviivakehys samalla värillä. Toisella arkilla olevat henkilöt luetellaan sen arkin nimellä. Katso [Työskentele live yhdessä muiden kanssa](topic:work-live).
- **Seuraa henkilöä ja henkilöluetteloa.** Live-istunnon {{ui:Henkilöt}}-painike luettelee jokaisen henkilön, hänen käyttämänsä työkalun, arkin jolla hän on ja milloin hän muokkasi viimeksi. {{ui:Seuraa}} siirtää näkymäsi hänen näkymäänsä, ja isäntä voi käyttää {{ui:Pyydä kaikkia seuraamaan minua}} -toimintoa. Katso [Seuraa tiimikaveria Live-istunnossa](topic:follow-a-teammate).

## Kaikissa sovelluksissa

- **Työkaluvihjeet ja aloitusvihje.** Osoittimen viemisen teksti on Bootstrap-työkaluvihje, ja aloitusvihjeen voi sulkea.
- **Vierittyvät välilehtirivit.** Paneelin välilehtirivi, joka ei mahdu, vierii sen sijaan, että se leikattaisiin.
- **Välilehtien otsikot.** Selaimen välilehti näyttää `<document> - TakeoffCraft | CadCraft`.
- **Asettelu.** Asetusten asettelulista on pudotusvalikko, joka näyttää valitun asettelun.
- **Kieli.** Valitsemasi kieli ulottuu nyt sivun itsensä tulostamiin sanoihin, kuten Uusi, Avaa ja Tallenna. Muut kuin englanninkieliset kielet ovat konekäännöksiä luonnoksina, kunnes äidinkielinen puhuja on lukenut ne.

## Rehelliset rajat

- Pituusnäyttöä, paino- ja lämpötilayksiköitä sekä uusia esiasetuksia on tarkistettu testeillä ja sivulla. Jokaista paneelia jokaisella yksiköllä ei ole tarkistettu käsin.
- Henkilöluetteloa ei ole testattu käsin todellisella opettajan ja opiskelijoiden ryhmällä.
- Muut kuin englanninkieliset kielet ovat konekäännöksiä.
- Windows-asennusohjelmia ei ole koodiallekirjoitettu (Lisätietoja, sitten Suorita silti). macOS-levykuvaa ei ole notarisoitu (napsauta hiiren oikealla, sitten Avaa).

## Aiemmin: 0.8 ja 0.8.1

Tämä on se, mikä muuttui TakeoffCraft 0.8:ssa (julkaistu 2026-11-01) ja 0.8.1:ssä (2026-11-02) versioon 0.7 verrattuna. Symbolilegenda voidaan nyt laskea koko sarjasta kerralla, uusi määrälaskenta voi alkaa aiempien töiden hinnoista, ja määrälaskentaa voi verrata toimittajan varastoon. 0.8.1 on korjausjulkaisu.

### Uutta

**Laske kaikki sarjassa**

- **Rajaa legenda kerran.** {{ui:Laske kaikki}} työkalurivillä lukee symbolilegendan: vedä laatikko symbolien ja niiden viereen painettujen nimien ympärille. Jokainen symboli luetellaan kuvansa ja nimensä kanssa, ja nimestä tulee nimikkeen nimi. Poista rasti siitä, mitä et halua, ja valitse {{ui:Laske N arkilla}}. Palkki näyttää etsittävän arkin, {{ui:Peruuta}} pysäyttää ajon, ja sivu pysyy käytettävissä.
- **Kaikki arkit yhdellä ajolla.** Jokainen symboli lasketaan jokaiselta avoimelta arkilta. Arkki, joka on piirretty toisessa mittakaavassa, etsitään sen mittakaavassa, ja symbolit löytyvät käännettyinä missä tahansa suorassa kulmassa. Legendan omia symboleja ei lasketa sen omalla arkilla.
- **Tarkista ennen kuin mitään lisätään.** Jokaisella summalla on arkkikohtainen linkki ("E-103: 4"), joka vie kyseiselle arkille. Napsauta laatikkoa löydöksessä jättääksesi sen pois, ja napsauta uudelleen palauttaaksesi sen. Vastaavuustaso (50 %–100 %) vain suodattaa löydökset; mitään ei etsitä uudelleen.
- **Yksi kumoamisvaihe.** {{ui:Lisää N merkintää}} luo laskentanimikkeen per symboli ja merkinnän jokaiseen löydökseen. Nimi, joka on jo laskentanimikkeesi, käytetään uudelleen. {{key:Ctrl+Z}} palauttaa kaikki nimikkeet ja merkinnät. Hyväksymäsi asiat syötetään myös {{ui:Opittu}}-ikkunaan.
- **Symbolit missä tahansa kulmassa.** Ruksita {{ui:Symbolit missä tahansa kulmassa}} ennen laskemista, jotta löydetään myös symbolit, jotka on käännetty muuhun kuin suoraan kulmaan. Haku kääntää silloin jokaista symbolia 15 asteen välein, ja symboli, joka ei ole pyöreä, voi kestää jopa kuusi kertaa kauemmin.
- **Mitä se on.** Yksinkertainen symbolien vastaavuus omilla arkeillasi, ilman koulutettua mallia, eikä mikään poistu tietokoneeltasi. Keinotekoisella 200 arkin sarjalla se vei 9,4 sekuntia alusta loppuun Chromessa nopealla pöytäkoneella; oikeat piirustussarjat ovat hitaampia. Katso [Laske kaikki sarjassa](topic:count-everything).

**Hintamuisti omista töistäsi**

- **TakeoffCraft muistaa hintasi.** Kun tallennat määrälaskennan, jokainen käytetty hinnoiteltu nimike muistetaan nimen ja tyypin mukaan: materiaalihinta, työhinta, hukka ja yksikkö. Viimeiset 12 työtä säilytetään kullekin nimelle. Se säilytetään tässä tietokoneessa hintakirjaston vieressä, ei koskaan määrälaskentatiedostossa, eikä mitään lähetetä minnekään.
- **Aloita uusi määrälaskenta sen pohjalta.** {{ui:Hinnat}} työkalurivillä näyttää kullekin nimikkeelle edellisen työn hinnat, tyypilliset hinnat ja vaihteluvälin. {{ui:Käytä viimeisintä}} tai {{ui:Käytä tyypillistä}} hinnoittelee yhden nimikkeen, ja {{ui:Hinnoittele N hinnoittelematonta nimikettä muistista}} täyttää jokaisen nimikkeen, jolla ei vielä ole hintaa. Jokainen käyttökerta on yksi kumoamisvaihe.
- **Vanhemmat työt.** {{ui:Opi aiemmasta määrälaskennasta…}} muistaa tallennetun määrälaskennan hinnoitellut nimikkeet (.json).
- **Näe, muuta, unohda.** {{ui:Kaikki muistettu}} luettelee jokaisen nimen; roskakorin painike unohtaa yhden, ja {{ui:Tyhjennä kaikki hinnat}} unohtaa kaikki. Lopeta muistaminen kytkemällä pois {{ui:Muista hintani, kun tallennan määrälaskennan}}. Kappalehintaa ei koskaan aseteta nimikkeelle, joka on jalkayksikössä. Katso [Hintamuisti aiemmista töistäsi](topic:price-memory).

**Toimittajan varasto ja toimitusajat**

- **Tarkista toimittajan luettelo vastaan.** {{ui:Toimitus}} työkalurivillä ottaa toimittajan varastoluettelon ({{ui:Lisää toimittajan tiedosto…}}), CSV-tiedoston tai taulukon, ja tarkistaa, mitä määrälaskenta tarvitsee hukka mukaan lukien, sitä vasten. Enintään viisi tiedostoa säilytetään. Mitään ei lähetetä, eikä mikään pyydä toimittajaa: tiedoston tuo aina käyttäjä itse.
- **Mitä se kertoo.** Vähäiset nimikkeet tulevat ensin: "Puutteessa 120 EA", "Toimitusaika 21 päivää", "Jälkitilauksessa", "Yksikkö eroaa", "Ei varastolukua" tai "Varastossa". {{ui:Pisin hyväksyttävä odotus (päivää)}} alkaa arvosta 14.
- **Tilauslista.** {{ui:Tilauslista (CSV)}} lataa vähäiset nimikkeet puutteen määrän, toimittajan ja toimitusajan kanssa.
- **Hinnat kirjastoon.** Jos tiedostossa on hintoja, {{ui:Hinnat kirjastoon}} asettaa kirjastomerkinnän materiaalihinnan jokaiselle samannimiselle ja -yksikköiselle merkinnälle. Hinnoittele uudelleen kirjastosta, jotta hinnat tulevat määrälaskentaan.
- **Ongelmat-paneelissa.** Puute on varoitus ja pitkä odotus huomautus, kohdassa "Toimittajan varasto". Voit hyväksyä yhden syyn kanssa, ja syy tallennetaan määrälaskentaan. Katso [Tarkista toimittajan varasto ja toimitusajat](topic:supplier-stock).

**AI-avustajat**

- **Työkalut kaikille kolmelle.** Kun avustajat on sallittu {{ui:Asetukset}}-kohdassa, avustaja voi lukea legendan (`legend_open`), suorittaa laskennan (`legend_count_start`, sitten `legend_count_status` ja `legend_count_result`) ja lisätä sen (`legend_count_add`, joka voi esikatsella ensin). Se voi lukea muistetut hinnat (`prices_list`) ja hinnoitella nimikkeet niistä (`prices_apply`, joka voi esikatsella ensin) sekä lukea toimittajatarkistuksen (`supply_check`). Toimittajatiedoston lisääminen tehdään aina käsin. Katso [Käytä TakeoffCraftia tekoälyavustajien kanssa](topic:use-with-ai-assistants).

**Kaikissa sovelluksissa**

- **Kielet.** Viisikymmentäneljä kieltä yhteensä; kymmenen on uutta (liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili ja uzbek). Muut kuin englanninkieliset kielet ovat konekäännöksiä, kunnes äidinkielinen puhuja on lukenut ne.
- **Syöttölaitteet.** {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Syöttölaitteet}} määrittää, mitä kosketuslevy, hiiren sivupainikkeet, kynä, 3D-hiiri, pelikonsolin ohjain tai MIDI-ohjain tekee, kaikille sovelluksille tai yhdelle. Katso [Käytä kosketuslevyä, 3D-hiirtä tai ohjainta](common:input-devices).
- **Työkalurivin rivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} tarjoaa {{ui:Rivitä}} (alussa), {{ui:2 riviä}} ja {{ui:1 rivi}}; ryhmät, jotka eivät mahdu, vierivät sivusuunnassa. Katso [Järjestä paneelit](common:arrange-panels).
- **Ongelmat-paneeli.** Jaettu varoitusten ja huomautusten paneeli sisältää nyt yllä kuvatun toimittajan varastotarkistuksen muiden tarkistusten rinnalla.
- **Lisäosat.** Lisäosat seuraavat tilisi luetteloa. Katso [Lisäosat ja tilisi luettelo](common:addons-basics).
- **Yhdistä tekoälysi.** CadCraft Studio on keskus: yhdistä avustajasi kerran kaikille kahdeksalle sovellukselle. Studiolla ei ole omaa tekoälyä.

### Korjattu versiossa 0.8.1

- **DWG-luokkaosio.** DWG-tiedoston luokkaosio luettiin väärän tyyppisenä. Tämä on korjattu TakeoffCraftissa ja neljässä muussa sovelluksessa.
- **Studio voi vaihtaa kieltä käynnissä ollessaan.** Aiemmin Studio ja sen pakatut versiot olivat vain englanniksi. Tätä ei ole testattu työpöytäversiossa jokaisella alustalla; ilmoita, jos kieli ei vaihdu.

### Ei vielä tässä versiossa

- **Ei koodiallekirjoitettu.** Windows voi varoittaa, ja Macissa napsautat hiiren oikealla ja valitset {{ui:Avaa}} ensimmäisellä kerralla. Kauppaversiot (Microsoft Store, Google Play, App Store) ovat pidossa, eikä iPad- ja iPhone-versiota ole rakennettu uudelleen versiolle 0.8.1.
- **Studio-päivitykset.** Windows-asennusohjelma ja Linux-paketit tarkistavat kerran päivässä ja kysyvät ensin. Kannettava zip-tiedosto vain kertoo, ja macOS ja APK eivät päivity itsestään. 0.8:n macOS .dmg seuraa julkaisua.
- **Yhdistä tekoälysi.** Yhden napsautuksen yhdistäminen Studiossa, selaimen hostattu tekoälyliitin, oma API-avain Studiossa ja julkaistu MCP-paketti eivät ole luvattuja tässä versiossa.
- **Laske kaikki.** Se tarvitsee symboleja, jotka on piirretty samalla tavalla kuin legendassa, ja symboli, jonka läpi kulkee seinä tai pitkä viiva, voi jäädä huomaamatta. Peilattuja symboleja ei löydetä, ja mittakaavaton arkki, joka on piirretty toisessa koossa, haetaan legendan koossa. Tarkista ensimmäisen arkin löydökset ennen kuin luotat muuhun.
- **Toimittajan varasto.** Varastoluvut ovat vain yhtä ajantasaisia kuin lisätty tiedosto. Tarkistus ei koskaan pyydä toimittajaa.
- **Kielet.** Tamilin sovelluspalkki ylittää rajansa.

Kaikki muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet). Versiota ennen tätä koskevat tiedot ovat kohdassa [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
