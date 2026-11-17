---
title: Vianmääritys
summary: Oireet, syyt ja ratkaisut viesteihin ja yllätyksiin, joita TakeoffCraftissa voi kohdata, lainattuina siinä muodossa kuin sovellus ne näyttää.
keywords: ongelmat, virheet, ei toimi, korjaus, ohje, hylätty, ei mittaa, ei mittakaavaa, puuttuvat merkinnät, vienti epäonnistui, offline, kosketus
from: cd319c9b
---

TakeoffCraft selittää useimmat hylkäykset ikkunan alareunan tilarivillä. Etsi viesti alta.

## Tiedostojen avaaminen

| Viesti tai oire | Syy | Ratkaisu |
|---|---|---|
| PDF-lukijaa ei voitu ladata. Lataa sivu uudelleen ja yritä uudelleen. | Sovelluksen PDF-lukija ei latautunut, yleensä siksi, että olet offline-tilassa eikä sovellusta ole koskaan tallennettu offline-käyttöön. | Yhdistä uudelleen ja lataa sivu uudelleen. Valitse sitten {{ui:Tallenna offline-käyttöön}} ja odota, kunnes näkyy {{ui:Offline valmis}}; katso [Työskentely offline-tilassa](common:offline). |
| (nimi) on suojattu salasanalla. Avaa suojaamaton kopio. | PDF vaatii salasanan avautuakseen. | Pyydä suojaamaton kopio tai poista salasana luotettavalla PDF-ohjelmalla. |
| (nimi) ei voitu lukea PDF-tiedostona (…) | Tiedosto on vioittunut tai se ei ole oikeasti PDF. | Lataa se uudelleen tai tallenna se uudelleen ohjelmasta, jolla se tehtiin. |
| (nimi) on jo auki. | Sama PDF (sama sisältö) on jo auki. | Ei tarvetta toimia. |
| TakeoffCraft avaa PDF-tiedostoja ja .takeoff.json-projekteja. Ohitettu: … | Muut tiedostotyypit jätettiin pois. | Muunna piirustukset ensin PDF-muotoon. |
| Tiedostojen pudottaminen ei tee mitään | Tiedostot pudotettiin selainikkunan ulkopuolelle, tai selain avasi PDF:n uuteen välilehteen. | Pudota tiedostot TakeoffCraft-sivulle itse; kehys ”Pudota PDF-tiedostoja tai .takeoff.json” näyttää, milloin pudottaminen toimii. |
| Suuren sarjan avaaminen kestää | Jokainen PDF luetaan kokonaan sen tunnistamiseksi. | Odota, kunnes viesti ”Avataan (nimi)…” katoaa. Pikkukuvat täyttyvät vierittäessä. |

## Mittaaminen

| Viesti tai oire | Syy | Ratkaisu |
|---|---|---|
| Avaa ensin PDF. | Arkkia ei ole auki. | Avaa PDF. |
| Tällä arkilla ei ole vielä mittakaavaa, joten sitä ei voi mitata. Valitse esiasetettu mittakaava tai kalibroi ensin (lukumäärät toimivat ilman). | Viiva-, pinta-ala-, ympyrä- ja aukkotyökalut tarvitsevat mittakaavan. | [Aseta mittakaava](topic:set-the-scale). |
| Tee ensin viivanimike (anna sille nimi kohdassa {{ui:Nimikkeet}}), ja napsauta sitten arkkia. | Tyyppiä vastaavaa nimikettä ei ole. | Täytä avautuva {{ui:Uusi nimike}}-lomake ja valitse {{ui:Lisää}}. |
| Valitse ensin määrälaskennan nimike ({{ui:Nimikkeet}}-paneeli). | Nykyinen nimike on poistettu. | Napsauta nimikettä kohdassa {{ui:Nimikkeet}}. |
| Viiva tarvitsee vähintään kaksi pistettä. | Lopetit yhden napsautuksen jälkeen. | Napsauta vähintään kahta pistettä. |
| Pinta-ala tarvitsee vähintään kolme pistettä. | Kulmia on liian vähän. | Napsauta vähintään kolmea kulmaa. |
| Ääriviiva leikkaa itsensä, joten sen pinta-ala olisi väärä. Piirrä se uudelleen ilman leikkauksia. | Kahdeksikon muotoinen kuvio. | Piirrä se kahtena pinta-alana tai kierrä reuna järjestyksessä. |
| Nuo pisteet eivät rajaa pinta-alaa. | Kaikki pisteet ovat yhdellä suoralla. | Napsauta kulmia, jotka rajaavat tilan. |
| Valitse ensin pinta-alamerkintä ({{ui:Valitse}}-työkalu), valitse sitten {{ui:Aukko}} ja piirrä aukko sen sisään. | {{ui:Aukko}} vaatii valitun pinta-alan. | Paina {{key:V}}, napsauta pinta-alaa ja paina sitten {{key:X}}. |
| Aukon on oltava kokonaan pinta-alan sisällä. | Aukko leikkaa tai ylittää ääriviivan. | Piirrä aukko pinta-alan sisään. |
| Aukot eivät voi mennä päällekkäin. | Kaksi aukkoa menee päällekkäin. | Piirrä yksi aukko molempien ympärille tai pidä ne erillään. |
| … Piste palautettiin. | Vedetty kulma saisi ääriviivan leikkaamaan itsensä tai työntäisi aukon ulos. | Vedä paikkaan, joka pitää muodon kelvollisena. |
| Napsauta ympyrän reunalla olevaa pistettä, kauempana keskipisteestä. | Toinen napsautus oli liian lähellä keskipistettä. | Napsauta kauempana ulospäin. |
| Napsautukset siirtävät arkkia pisteiden lisäämisen sijaan | Osoitin liikkui painikkeen ollessa alhaalla enemmän kuin muutaman pikselin; se lasketaan vetämiseksi. | Napsauta liikkumatta, erityisesti kosketuslevyllä. |
| {{key:Shift}} ei tartu | Asetat pistettä kaarelle tai piirrät ympyrää. | 45 asteen tartunta koskee vain suoria osuuksia. |
| Pisteet hyppäävät läheiselle viivalle | {{ui:Tartunta}} piirustuksen viivoihin on päällä. | Zoomaa lähemmäs, jotta voit napsauttaa viivojen väliin, tai paina {{key:F3}} kytkeäksesi tartunnan pois. |
| Tartuntamerkki ei näy | Tartunta on pois päältä, arkki on skannaus, tai työkalu ei tartu ({{ui:Lukumäärä}}, {{ui:Automaattilaskenta}}, liittäminen). | Paina {{key:F3}}; skannauksessa ei ole viivoja, joihin tarttua. |
| Pituus on väärä | Mittakaava on väärä (usein muokattu PDF esiasetuksella). | Käytä {{ui:Tarkista}}-toimintoa tunnetulla mitalla ja sitten {{ui:Kalibroi}}. |

## Mittakaava

| Viesti tai oire | Syy | Ratkaisu |
|---|---|---|
| Valitse kaksi pistettä kauempana toisistaan. | Kalibrointipisteet ovat melkein päällekkäin. | Kalibroi pitemmällä mitalla. |
| Kalibrointidialogin viesti, kuten ”Etäisyyttä ei voitu lukea” | Etäisyys on muodossa, jota TakeoffCraft ei osaa lukea. | Katso [Pituuden, hinnan ja prosentin syöttö](topic:entry-formats). |
| Tällä arkilla ei ole vielä mittakaavaa, joten tarkistettavaa ei ole. Kalibroi se tai valitse esiasetus. | {{ui:Tarkista}} mittakaavattomalla arkilla. | Aseta ensin mittakaava. |
| {{ui:Esiasetus}}-luettelo on harmaana | Arkkia ei ole auki. | Avaa PDF. |

## Määrät ja kaavat

| Viesti tai oire | Syy | Ratkaisu |
|---|---|---|
| Keskeneräinen: … (ei yhteissummissa) | Kaavavirhe, tai merkintöjä arkeilla, joilla ei ole mittakaavaa. | Katso [Lue määrät ja kustannusarvio](topic:read-quantities#the-incomplete-warning). |
| +(n) mittakaavattomana nimikkeen vieressä | Osa sen merkinnöistä on arkeilla, joilla ei ole mittakaavaa. | Anna noille arkeille mittakaava. |
| Kaavavirhe: … | Kaavaa ei voida laskea. | Katso [Kaavakieli](topic:formulas#errors). |
| Tällä nimikkeellä on merkintöjä, joten sen tyyppi ei voi muuttua. | Tyyppi lukittuu, kun merkintöjä on. | Tee uusi nimike toisella tyypillä ja piirrä merkinnät sillä uudelleen. |
| Nimikkeelle on annettava nimi. | Nimikenttä tyhjennettiin. | Kirjoita nimi. |
| Kirjoita summa, kuten 12.50. / Kirjoita prosentti, kuten 10 tai 7.5. | Hintaa tai hukkaa ei voitu lukea. | Katso [Pituuden, hinnan ja prosentin syöttö](topic:entry-formats). |
| Summa näyttää kaksinkertaiselta | Nimikkeellä on omat hinnat ja osat, jotka kantavat saman kustannuksen. | Aseta nimikkeen omat hinnat nollaan, kun sen osat kantavat kustannuksen. |
| Tämän nimikkeen merkinnät ovat PDF-tiedostoissa, jotka eivät ole auki. | Napsautit nimikettä, jonka kaikki merkinnät ovat PDF-tiedostoissa, joita et ole avannut. | Avaa nuo PDF-tiedostot; niiden nimet on lueteltu kohdassa {{ui:Arkit}}. |

## Automaattilaskenta

| Viesti tai oire | Syy | Ratkaisu |
|---|---|---|
| Tuo laatikko on liian pieni. Piirrä se koko symbolin ympärille. | Laatikko on pieni. | Zoomaa lähemmäs ja rajaa koko symboli laatikolla. |
| Tuo laatikko on lähes tyhjä. Piirrä se symbolin ympärille. | Laatikossa on vain paperia. | Rajaa itse symboli. |
| Ei osumia. Laske {{ui:Vastaavuus}}-liukusäädintä tai rajaa symboli tiukemmin. | Mikään ei saanut tarpeeksi korkeaa pistemäärää. | Rajaa symboli tiukasti tai vedä {{ui:Vastaavuus}}-liukusäädin alemmas. |
| Liikaa osumia, mukaan lukien väärät symbolit | Samankaltaiset symbolit saavat lähes saman pistemäärän kuin oikea. | Nosta {{ui:Vastaavuus}}-liukusäädintä ja napsauta vääriä laatikoita hylätäksesi ne. |
| Osumat puuttuvat muilta arkeilta | Nuo arkit piirtävät symbolin eri kokoisena tai kulmassa, joka ei ole 90 asteen askel. | Hae noilta arkeilta piirtämällä niille laatikko, tai laske käsin. |
| (n) arkkia oli liian suuria haettaviksi tällä symbolikoolla. | Arkki olisi liian suuri työkoossa. | Rajaa suurempi symboli tai laske se arkki käsin. |
| Haku epäonnistui: … | Taustahaku pysähtyi. | Yritä uudelleen; lataa sivu uudelleen, jos se toistuu (tallenna ensin). Offline-tilassa se toimii vain, kun sovelluspalkissa näkyy {{ui:Offline valmis}}. |
| Vetäminen piirtää laatikon siirtämisen sijaan | Näin {{ui:Automaattilaskenta}} toimii. | Pidä {{key:Space}}-näppäintä pohjassa ja vedä, tai vedä keskipainikkeella. |

## Tallennus ja vienti

| Viesti tai oire | Syy | Ratkaisu |
|---|---|---|
| Ei vielä vietävää: tee nimike ja laske se. | Nimikkeitä ei ole. | Tee ensin nimike. |
| Auki olevissa PDF-tiedostoissa ei ole vielä merkintöjä. | {{ui:Merkitty PDF}} ei voi piirtää mitään auki oleviin PDF-tiedostoihin. | Avaa PDF-tiedostot, joissa on merkintöjä. |
| Tämä PDF on suojattu salasanalla tai salattu, joten merkittyä kopiota ei voi kirjoittaa. … | PDF on salattu. | Vie {{ui:XLSX}} sen sijaan, tai käytä PDF:n suojaamatonta kopiota (sillä on silloin oma määrälaskentansa, koska se on eri tiedosto). |
| Merkittyä PDF:ää ei voitu kirjoittaa: … | Usein: olet offline-tilassa, eikä sovellusta ole tallennettu offline-käyttöön, joten PDF-kirjoitin puuttuu. | Yhdistä verkkoon ja valitse {{ui:Merkitty PDF}} uudelleen. Vältä tämä valitsemalla {{ui:Tallenna offline-käyttöön}} ja odottamalla, että näkyy {{ui:Offline valmis}}. |
| Vain yksi merkitty PDF latautui | Selain esti useat lataukset kerralla. | Salli useat lataukset tälle sivustolle ja vie uudelleen. |
| (tiedosto) ei ole TakeoffCraft-projekti (se ei ole kelvollinen JSON). / Tämä ei ole TakeoffCraft-projektitiedosto. | Väärä tiedosto tai vioittunut tiedosto. | Valitse `.takeoff.json`-tiedosto. |
| Tämän projektin tallensi uudempi TakeoffCraft. Avaa se siellä. | Tiedosto on uudemmasta versiosta. | Avaa se uudemmassa versiossa. |
| (n) merkintää oli vioittuneita, ja ne jätettiin pois. | Osa tiedostosta oli vioittunut tai muokattu käsin. | Loput avautuivat. Piirrä puuttuvat merkinnät uudelleen tai avaa vanhempi kopio. |
| Merkinnät puuttuvat uudelleen avaamisen jälkeen | PDF-tiedostot eivät ole auki, tai yksi niistä muuttui. | Katso [Tallenna ja avaa määrälaskenta uudelleen](topic:save-and-reopen#when-a-pdf-has-changed). |
| Selain kysyy ”Poistutaanko sivulta?” | On tallentamattomia muutoksia. | Pysy sivulla ja tallenna painamalla {{key:Mod+S}}. |

## Näppäimet ja hiiri

| Oire | Syy | Ratkaisu |
|---|---|---|
| Kirjainnäppäimet eivät tee mitään | Kohdistin on kentässä (haku, nimikkeen muokkain, taulukko). | Napsauta arkkia, tai paina {{key:Tab}} poistuaksesi kentästä. |
| Rulla zoomaa vierittämisen sijaan | Rulla zoomaa arkkia aina. | Vedä siirtääksesi arkkia. |
| Koko sivu suureni tai pieneni | Selaimen zoomaus ({{key:Mod+Plus}} tai {{key:Mod+Minus}}). | Paina {{key:Mod+0}}. Zoomaa arkkia rullalla tai pelkällä {{key:Plus}}- ja {{key:Minus}}-näppäimellä. |
| Merkintä katosi Backspace-painalluksen jälkeen | Backspace poistaa valitun merkinnän, kun et piirrä. | {{key:Mod+Z}} palauttaa sen. |
| Oikea napsautus ei lopeta Macissa | Control-napsautus tulee tavallisena napsautuksena. | Käytä kahden sormen napsautusta, kun toissijainen napsautus on päällä, tai paina {{key:Enter}}. |

## Kosketusnäytöt

Kosketusnäytössä:

- **Napauttaminen** lisää pisteen (tai valitsee merkinnän {{ui:Valitse}}-työkalulla). Yhdellä sormella vetäminen siirtää arkkia.
- **Kaksi sormea** zoomaavat nipistämällä pisteen ympärille, joka on niiden välissä, ja siirtävät, kun ne liikkuvat yhdessä. Toisen sormen laskeminen peruuttaa sen, minkä ensimmäinen aloitti, joten nipistys ei koskaan jätä pistettä.
- **Lopeta** viiva tai ääriviiva **pitkällä painalluksella** (oikea napsautus), **kaksoisnapautuksella** tai {{ui:Valmis}}-painikkeella arkin alareunan palkissa. Samassa palkissa ovat {{ui:Taka}} (ottaa viimeisen pisteen takaisin) ja {{ui:Peruuta}}. Pinta-alat sulkeutuvat myös napauttamalla ensimmäistä pistettä.
- Sormilla on isommat kohteet: pisteet tarttuvat, sulkeutuvat ja valitaan kauempaa, ja kulmakahvat ovat suurempia.

Pituuksien kirjoittaminen vaatii näppäimistön; ruutunäppäimistö toimii, kun {{ui:Syöte}}-kenttä on aktiivinen.

Tabletissa näppäimistö sekä hiiri tai kosketuslevy tekevät määrälaskennasta paljon helpomman.

## Työskentely offline-tilassa

| Painike tai oire | Syy | Ratkaisu |
|---|---|---|
| {{ui:Tallennus ei onnistunut}} | Osa sovelluksen tiedostoista ei latautunut offline-tallennuksen aikana. | Tarkista yhteys ja valitse painike uudelleen. |
| {{ui:Offline ei käytettävissä}} | Yksityiset ikkunat ja jotkin hallitut tietokoneet estävät offline-kopiot. | Käytä tavallista ikkunaa tai toista selainta. |
| ”Tallennetaan…” ei koskaan ala | Olet offline-tilassa; tallennus vaatii yhteyden. | Tallenna verkossa ollessasi. |
| Sovellus on vanha päivityksen jälkeen | Offline-kopio on aiemmalta päivältä. | Verkossa valitse {{ui:Offline valmis}} ja sitten {{ui:Tallenna uudelleen (hae uusin versio)}}. |
| Haluat tilan takaisin | Offline-kopio on noin 6 MB. | Valitse {{ui:Offline valmis}} ja sitten {{ui:Poista offline-kopio}}. |

Katso [Työskentely offline-tilassa](common:offline).

## Vielä jumissa

Lataa sivu uudelleen, jos sovellus lakkaa vastaamasta. Määrälaskentasi katoaa latauksessa, ellet tallentanut sitä, joten tallenna ensin painamalla {{key:Mod+S}}, jos voit. Selainkysymyksiin katso [Selaimet ja tietokoneet](common:browsers).
