---
title: Mitä uutta versiossa 0.9 (aiemmin)
summary: Lue pituudet metreinä, senttimetreinä tai millimetreinä, metriset pinta-alat m2-yksikössä seinäpinta-alan kanssa, mittakaavan esiasetukset 1:75 ja 1:150, paino- ja lämpötilayksiköt, Kaari kymmenellä menetelmällä sekä Live-kursorit, Seuraa ja henkilöluettelo.
keywords: mitä uutta 0.9, aiempi julkaisu, mitä uutta, julkaisutiedot, muutosloki, muutokset, 0.9, näytä pituudet muodossa, metriä, senttimetriä, millimetriä, metrinen, seuraa yleisasetusta, yksiköt, näyttöyksiköt, m2, neliömetriä, seinäpinta-ala, mittakaavan esiasetukset, 1:75, 1:150, paino, kilogrammaa, kg, tonni, ton, lb, lämpötila, celsius, fahrenheit, kaari, kaaren menetelmät, kolmen pisteen kaari, säde, live, kursorit, seuraa, henkilöluettelo, luokka, työkaluvihjeet, asettelu, 0.8, 0.8.1, versio, uudet ominaisuudet, laske kaikki, selite, symbolien selite, koko sarja, hintamuisti, aiemmat työt, viimeisin työ, tyypillinen hinta, toimittaja, varasto, toimitusaika, takatilaus, tilauslista, puute, ongelmat-paneeli, tekoälyavustaja, kielet, syöttölaitteet, työkalurivin rivit, dwg
from: f4322ba2
---

Tämä on muutokset TakeoffCraft 0.9:ssä verrattuna versioon 0.8.1. Tämä on tälle sovellukselle pieni julkaisu: pituudet voidaan nyt lukea metreinä, senttimetreinä tai millimetreinä, pinta-alat ja mittakaavat seuraavat metristä työtä kunnolla, ja Kaari voi piirtää kymmenellä tavalla. Live-istunnot näyttävät myös, kuka on missä.

## Uutta

### Lue pituudet metreinä, senttimetreinä tai millimetreinä

- **Näytä pituudet muodossa.** {{ui:Asetukset}} › {{ui:TakeoffCraft}} -kohdassa on {{ui:Näytä pituudet muodossa}}, jossa on vaihtoehdot {{ui:Seuraa yleisasetusta}}, {{ui:Jalat ja tuumat}}, m, cm ja mm. {{ui:Seuraa yleisasetusta}} käyttää metristä pituusyksikköä, jonka olet merkinnyt suosikiksi kohdassa {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Yksiköt}}, ja jalkoja ja tuumia, jos mitään ei ole merkitty. Se muuttaa pituuksien lukemista arkilla, tilarivillä ja paneeleissa, mukaan lukien korkeudet, syvyys, paksuus ja tasot. Paljas luku, joka kirjoitetaan korkeuskenttään, luetaan näytetyssä yksikössä.
- **Vain näyttö.** Määrät, kustannukset ja viennit lasketaan tarkoista pituuksista. Valinta 1/16, 1/8 ja 1/4 tuumaa näkyy vain jalat ja tuumat -tilassa. Katso [Näytä pituudet metreinä](topic:show-lengths-in-meters).
- **Painoyksiköt.** {{ui:Kirjoitettu määrä (ei piirustusta)}} -nimike voi nyt olla lb-, TON-, kg- tai t-yksikössä, ja sen voi hinnoitella yksikköä kohden.
- **Lämpötila.** Jokaisella nimikkeellä on nimike-editorissa valinnainen {{ui:Lämpötila}}-kenttä, johon kirjoitetaan °C tai °F. {{ui:Näytä lämpötilat muodossa}} kohdassa {{ui:Asetukset}} › {{ui:TakeoffCraft}} tarjoaa vaihtoehdot {{ui:Seuraa yleisasetusta}}, °C tai °F.

### Pinta-alat ja mittakaavat metriseen työhön

- **Pinta-alat m2-yksikössä piirustuksella.** Metrisellä nimikkeellä mitattu pinta-ala lukee m2 piirustuksen tunnisteessa ja merkintäpaneelissa sekä taulukossa, SF-yksikön sijaan. Sääntö on m2, kun nimike hinnoitellaan metrisesti tai pituudet näytetään m-, cm- tai mm-yksikössä, ja muuten SF.
- **Seinäpinta-ala.** Pituusnimike, jolla on korkeus, näyttää myös seinäpinta-alansa (pituus kertaa korkeus) nimikeluettelossa ja nimikekohtaisten määrien taulukon alla huomautusrivinä.
- **Mittakaavan esiasetukset 1:75 ja 1:150.** Ne ovat {{ui:Esiasetus}}-luettelossa {{ui:Mittakaava}}-ryhmässä, jossa on nyt 32 mittakaavaa. Katso [Mittakaavan esiasetukset](topic:scale-presets).

### Kaari kymmenellä menetelmällä

- Kun {{ui:Kaari}} on päällä (työkalurivin painike tai {{key:R}}), arkkipalkkiin ilmestyy {{ui:Kaaren menetelmä}} -ruutu: 3 pistettä, Alku, Keskipiste, Loppu, Alku, Keskipiste, Kulma, Alku, Keskipiste, Pituus, Alku, Loppu, Kulma, Alku, Loppu, Suunta, Alku, Loppu, Säde, Keskipiste, Alku, Loppu, Keskipiste, Alku, Kulma ja Keskipiste, Alku, Pituus. Kulman, pituuden, säteen ja suunnan voi napsauttaa tai kirjoittaa. Se toimii viivajaksoissa, pinnoissa ja aukoissa. Versiota 0.9 ennen tallennetut tiedostot avautuvat samoin. Katso [Piirrä kaaria kymmenellä menetelmällä](topic:draw-arcs-ten-methods).

### Yhteistyö

- **Näe toistensa kursorit.** Live-istunnossa jokaisen henkilön osoitin näkyy arkilla nimen ja värin kanssa, ja henkilön valitsemien merkintöjen ympärillä on katkoviivalaatikko. Toisella arkilla olevat henkilöt luetellaan sen arkin nimen kanssa. Katso [Työskentele Live-tilassa muiden kanssa](topic:work-live).
- **Seuraa henkilöä ja henkilöluetteloa.** {{ui:Ihmiset}}-painike Live-istunnossa luettelee jokaisen henkilön työkalun, arkin, jolla hän on, ja ajan, jolloin hän muokkasi viimeksi. {{ui:Seuraa}} siirtää näkymäsi heidän näkymänsä mukana, ja isäntä voi käyttää {{ui:Pyydä kaikkia seuraamaan minua}} -toimintoa. Katso [Seuraa työtoveria Live-istunnossa](topic:follow-a-teammate).

## Kaikissa sovelluksissa

- **Työkaluvihjeet ja aloitusvihje.** Kohdistusteksti on Bootstrap-työkaluvihje, ja aloitusvihjeen voi sulkea.
- **Vierivät välilehtipalkit.** Paneelin välilehtipalkki, joka ei mahdu, vierittyy eikä leikkaudu.
- **Välilehtien otsikot.** Selaimen välilehti näyttää `<document> - TakeoffCraft | CadCraft`.
- **Asettelu.** {{ui:Asetukset}}-kohdan asetteluluettelo on pudotusvalikko, joka näyttää valitun asettelun.
- **Kieli.** Valitsemasi kieli ulottuu nyt sivun itse tulostamiin sanoihin, kuten Uusi, Avaa ja Tallenna. Muut kielet kuin englanti ovat konekäännöksiä, kunnes äidinkielinen puhuja on lukenut ne.

## Rajoitukset

- Pituuksien näyttö, paino- ja lämpötilayksiköt sekä uudet esiasetukset on tarkistettu testeillä ja sivulla. Jokaista paneelia jokaisella yksiköllä ei ole tarkistettu käsin.
- Henkilöluetteloa ei ole tarkistettu käsin oikealla opettajien ja opiskelijoiden luokalla.
- Muut kielet kuin englanti ovat konekäännöksiä.
- Windows-asennusohjelmia ei ole allekirjoitettu koodilla (Lisätietoja, sitten Suorita silti). macOS-levykuvaa ei ole notarisoitu (napsauta hiiren kakkospainikkeella, valitse sitten Avoin).

## Aiemmin: 0.8 ja 0.8.1

Tämä on muutokset TakeoffCraft 0.8:ssa (julkaistu 2026-11-01) ja 0.8.1:ssä (2026-11-02) verrattuna versioon 0.7. Symbolien selite voidaan nyt laskea koko sarjasta kerralla, uusi määrälaskenta voi alkaa aiempien töidesi hinnoista, ja määrälaskentaa voidaan verrata toimittajan varastoon. 0.8.1 on korjausjulkaisu.

### Uutta

**Laske kaikki sarjasta**

- **Rajaa selite kerran.** {{ui:Laske kaikki}} työkalurivillä lukee symbolien selitteen: vedä laatikko symbolien ympärille ja niiden viereen painettujen nimien ympärille. Jokainen symboli luetellaan kuvansa ja nimensä kanssa, ja nimestä tulee nimikkeen nimi. Poista valinta niistä, joita et halua, ja valitse sitten {{ui:Laske N arkilla}}. Palkki näyttää haettavan arkin, {{ui:Peruuta}} pysäyttää ajon, ja sivu pysyy käytettävissä.
- **Kaikki arkit yhdessä ajossa.** Jokainen symboli lasketaan jokaiselta avoimelta arkilta. Arkki, joka on piirretty toisessa mittakaavassa, haetaan siinä mittakaavassa, ja symbolit löytyvät käännettyinä missä tahansa suorassa kulmassa. Selitteen omia symboleja ei lasketa selitteen arkilla.
- **Tarkista ennen kuin mitään lisätään.** Jokaisessa kokonaissummassa on linkki arkkikohtaisesti (”E-103: 4”), joka vie kyseiselle arkille. Napsauta löydöksen laatikkoa jättääksesi sen pois, ja napsauta uudelleen palauttaaksesi sen. Osumatarkkuus (50 %–100 %) vain suodattaa löydetyt; mitään ei haeta uudelleen.
- **Yksi kumoamisvaihe.** {{ui:Lisää N merkintää}} luo laskentanimikkeen jokaiselle symbolille ja merkinnän jokaiseen löytöön. Nimi, joka on jo laskentanimike, käytetään uudelleen. {{key:Ctrl+Z}} kumoaa kaikki nimikkeet ja merkinnät. Hyväksymäsi tiedot syötetään myös {{ui:Opittu}}-kohtaan.
- **Symbolit missä tahansa kulmassa.** Valitse {{ui:Symbolit missä tahansa kulmassa}} ennen laskentaa, jotta löydät myös symbolit, jotka on käännetty muussa kuin suorassa kulmassa. Haku kääntää silloin jokaista symbolia 15 asteen välein, ja symboli, joka ei ole pyöreä, voi kestää jopa kuusi kertaa kauemmin.
- **Mitä se on.** Pelkkä symbolien vertailu omilla arkeillasi ilman koulutettua mallia, eikä mitään lähde tietokoneeltasi. Keksityllä 200 arkin sarjalla se kesti 9.4 sekuntia alusta loppuun Chromessa nopealla pöytäkoneella; todelliset piirustussarjat ovat hitaampia. Katso [Laske kaikki sarjasta](topic:count-everything).

**Hintamuisti aiemmista töistä**

- **TakeoffCraft muistaa hintasi.** Kun tallennat määrälaskennan, jokainen käytetty hinnoiteltu nimike muistetaan nimen ja tyypin mukaan: materiaalihinta, työhinta, hukka ja yksikkö. Viimeiset 12 työtä säilytetään kullekin nimelle. Muisti säilytetään tällä tietokoneella hintakirjaston vieressä, ei koskaan määrälaskennan tiedoston sisällä, eikä mitään lähetetä minnekään.
- **Aloita uusi määrälaskenta siitä.** {{ui:Hinnat}} työkalurivillä näyttää kunkin nimikkeen viimeisimmän työn hinnat, tyypilliset hinnat ja vaihteluvälin. {{ui:Käytä viimeisintä}} tai {{ui:Käytä tyypillistä}} hinnoittelee yhden nimikkeen, ja {{ui:Hinnoittele N hinnoittamatonta nimikettä muistista}} täyttää jokaisen nimikkeen, jolla ei vielä ole hintaa. Jokainen käyttö on yksi kumoamisvaihe.
- **Aiemmat työt.** {{ui:Opi aiemmasta määrälaskennasta…}} muistaa tallennetun määrälaskennan (.json) hinnoitellut nimikkeet.
- **Näe, muuta, unohda.** {{ui:Kaikki muistettu}} luettelee jokaisen nimen. Roskakorin painike unohtaa yhden, ja {{ui:Tyhjennä kaikki hinnat}} unohtaa kaikki. Lopeta kytkemällä pois {{ui:Muista hintani, kun tallennan määrälaskennan}}. Hintaa per kappale ei koskaan aseteta nimikkeelle, joka lasketaan per jalka. Katso [Hintamuisti aiemmista töistä](topic:price-memory).

**Toimittajan varasto ja toimitusajat**

- **Tarkista toimittajan luettelosta.** {{ui:Toimitus}} työkalurivillä ottaa toimittajan varastoluettelon ({{ui:Lisää toimittajan tiedosto…}}), CSV-tiedoston tai laskentataulukon ja tarkistaa, mitä määrälaskenta tarvitsee hukka mukaan lukien. Enintään viisi tiedostoa säilytetään. Mitään ei lähetetä, eikä toimittajalta kysytä mitään: tuot tiedoston itse.
- **Mitä se kertoo.** Lyhyet nimikkeet tulevat ensin: ”Puuttuu 120 EA”, ”Toimitusaika 21 päivää”, ”Takatilauksessa”, ”Yksikkö eroaa”, ”Ei varastolukua” tai ”Varastossa”. {{ui:Pisin hyväksyttävä odotus (päivää)}} alkaa arvosta 14.
- **Tilauslista.** {{ui:Tilauslista (CSV)}} lataa lyhyet nimikkeet puuttuvine määrineen, toimittajineen ja toimitusaikoineen.
- **Hinnat kirjastoon.** Jos tiedostossa on hintoja, {{ui:Hinnat kirjastoon}} asettaa kunkin kirjastomerkinnän materiaalihinnan saman nimen ja yksikön mukaan. Hinnoittele uudelleen kirjastosta, jotta hinnat siirtyvät määrälaskentaan.
- **Ongelmat-paneelissa.** Puute on varoitus ja pitkä odotus huomautus kohdassa ”Toimittajan varasto”. Voit hyväksyä yhden syyn kanssa, ja syy tallennetaan määrälaskentaan. Katso [Tarkista toimittajan varasto ja toimitusajat](topic:supplier-stock).

**Tekoälyavustajat**

- **Työkalut kaikille kolmelle.** Kun tekoälyavustajat ovat sallittuja {{ui:Asetukset}}-kohdassa, avustaja voi lukea selitteen (`legend_open`), suorittaa laskennan (`legend_count_start`, sitten `legend_count_status` ja `legend_count_result`) ja lisätä sen (`legend_count_add`, joka voi esikatsella ensin). Se voi lukea muistetut hinnat (`prices_list`) ja hinnoitella nimikkeitä niistä (`prices_apply`, joka voi esikatsella ensin) sekä lukea toimittajan tarkistuksen (`supply_check`). Toimittajan tiedoston lisääminen jää sinulle. Katso [Käytä TakeoffCraftia tekoälyavustajien kanssa](topic:use-with-ai-assistants).

**Kaikissa sovelluksissa**

- **Kielet.** Viisikymmentäneljä kieltä yhteensä; kymmenen on uutta (liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, suahili ja uzbek). Muut kielet kuin englanti ovat konekäännöksiä, kunnes äidinkielinen puhuja on lukenut ne.
- **Syöttölaitteet.** {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Syöttölaitteet}} määrittää, mitä kosketuslevy, hiiren sivupainikkeet, kynä, 3D-hiiri, peliohjain tai MIDI-ohjain tekee, kaikille sovelluksille tai yhdelle. Katso [Käytä kosketuslevyä, 3D-hiirtä tai ohjainta](common:input-devices).
- **Työkalurivin rivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} tarjoaa {{ui:Rivitä}} (aloitus), {{ui:2 riviä}} ja {{ui:1 rivi}}. Ryhmät, jotka eivät mahdu, vierivät sivusuunnassa. Katso [Järjestä paneelit](common:arrange-panels).
- **Ongelmat-paneeli.** Yhteinen varoitusten ja huomautusten paneeli sisältää nyt yllä olevan toimittajan varastotarkistuksen muiden tarkistusten rinnalla.
- **Lisäosat.** Lisäosat seuraavat tilisi lisäosaluetteloa. Katso [Lisäosat ja tilisi lisäosaluettelo](common:addons-basics).
- **Yhdistä tekoälysi.** CadCraft Studio on keskus: yhdistä avustajasi kerran kaikille kahdeksalle sovellukselle. Studiolla ei ole omaa tekoälyä.

### Korjattu versiossa 0.8.1

- **DWG-luokkien osio.** DWG-tiedoston luokkaosio luettiin väärän tyyppisenä. Tämä on korjattu TakeoffCraftissa ja neljässä muussa sovelluksessa.
- **Studio voi vaihtaa kieltä ajon aikana.** Aiemmin Studio ja sen pakatut versiot olivat vain englanniksi. Tätä ei ole testattu työpöytäversiossa jokaisella alustalla; kerro meille, jos kieli ei vaihdu.

### Ei tässä versiossa vielä

- **Ei koodin allekirjoitusta.** Windows voi varoittaa, ja Macissa napsautat hiiren kakkospainikkeella ja valitset {{ui:Avoin}} ensimmäisellä kerralla. Kauppaversiot (Microsoft Store, Google Play, App Store) ovat odotustilassa, eikä iPad- ja iPhone-versiota ole rakennettu uudelleen versiolle 0.8.1.
- **Studion päivitykset.** Windows-asennusohjelma ja Linux-paketit tarkistavat kerran päivässä ja kysyvät ensin. Siirrettävä zip-tiedosto vain kertoo päivityksestä, eikä macOS eikä APK päivity itsestään. 0.8:n macOS .dmg seuraa julkaisua.
- **Yhdistä tekoälysi.** Yhden napsautuksen yhdistäminen Studion sisällä, selaimessa toimiva tekoälyliitin, oma API-avaimesi Studiossa ja julkaistu MCP-paketti eivät ole luvattuja tässä versiossa.
- **Laske kaikki.** Se tarvitsee symboleja, jotka on piirretty samalla tavalla kuin selitteessä, ja symboli, jonka läpi kulkee seinä tai pitkä viiva, voi jäädä huomaamatta. Peilattuja symboleja ei löydetä, ja arkki ilman mittakaavaa, joka on piirretty toisessa koossa, haetaan selitteen koossa. Tarkista ensimmäisen arkin löydökset ennen kuin luotat muihin.
- **Toimittajan varasto.** Varastoluvut ovat vain yhtä ajantasaisia kuin lisäämäsi tiedosto. Tarkistus ei koskaan kysy toimittajalta.
- **Kielet.** Tamilin sovelluspalkki ylittyy.

Kaikki muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet). Edellistä julkaisua koskevat tiedot ovat kohdassa [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
