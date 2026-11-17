---
title: Siirtyminen muusta määrälaskentaohjelmasta
summary: Miten erikoisohjelmien ja PDF-merkintätyökalujen tavat vastaavat TakeoffCraftia ja mitkä erot tuottavat useimmin ongelmia.
keywords: siirtyminen, siirto, ehdot, osat, mittaustyökalut, merkintäluettelo, määrälinkki, määrälaskennan tavat, erot, vertailu
from: 12004ce5
---

Jos olet tehnyt määrälaskentaa PlanSwiftillä tai Bluebeam Revun mittaustyökaluilla, suurin osa TakeoffCraftista tuntuu tutulta: piirustussarja, arkkikohtainen mittakaava, mitattavat kohteet ja hinnoiteltu yhteissumma. Osat liittyvät toisiinsa paikoin eri tavalla, ja nämä kohdat on käsitelty alla.

Jos tunnet PlanSwiftin tai On-Screen Takeoffin, valitse asetuksissa {{ui:Asetukset}} › {{ui:TakeoffCraft}} › {{ui:Valikot, näppäimet ja hiiri}} valikkotyyliksi {{ui:Määrälaskentapöytä}}: valikkorivi, jossa ovat Tiedosto, Muokkaa, Näytä, Mittakaava, Määrälaskenta, Nimikkeet, Merkintä ja Vie, ja sen alla rivi määrälaskentatyökaluja. Mittakaavaesiasetukset ovat arkkipalkissa. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse).

## Tottumukset ja vastineet

| Tottumus | TakeoffCraftissa |
|---|---|
| Projektin avaaminen, joka tallentaa piirustukset (PlanSwift) | Avaa PDF-tiedostot ja `.takeoff.json`-projekti rinnakkain. Projekti tallentaa vain määrälaskennan; PDF-tiedostot pysyvät omina tiedostoinasi. |
| Merkintäluettelo huomautuksilla, pilvillä ja korostuksilla (Bluebeam) | {{ui:Merkintä}} arkkipalkissa: huomautukset, pilvet ja korostukset tiloineen (Avoin, Vastattu, Suljettu), listattuna kohdassa **Merkinnät** ja piirrettynä merkittyyn PDF:ään. Katso [Huomautukset, pilvet ja korostukset](topic:markups). |
| Mittaukset tallennettuna PDF:n sisään merkintöinä (Bluebeam) | Määrälaskenta on `.takeoff.json`-tiedostossa. {{ui:Merkitty PDF}} kirjoittaa kopion, johon määrälaskenta on piirretty jaettavaksi; {{ui:PDF, jonka sisällä on määrälaskenta}} kirjoittaa kopion, joka sisältää määrälaskennan ja avautuu uudelleen TakeoffCraftissa. |
| Määrälaskennan kohteet (PlanSwift), omat mittaustyökalut Tool Chestissä (Bluebeam) | **Nimikkeet** kohdassa {{ui:Nimikkeet}}: nimi, tyyppi, väri, yksikkö, korkeus tai syvyys, hukka ja hinnat. |
| Osat ja yhdistelmät kaavoilla (PlanSwift) | Nimikkeen {{ui:Yhdistelmä}}: komponentit kaavoilla, joissa käytetään muuttujia `L H A N P`. |
| Sivun mittakaavan asettaminen tai kalibrointi (molemmat) | {{ui:Esiasetus}}-luettelo tai {{ui:Kalibroi}} kohdassa {{ui:Mittakaava}}, arkkikohtaisesti. {{ui:Tarkista}} mittaa tunnetun mitan. |
| Yhden mittakaavan soveltaminen sivualueelle | Ei vielä: aseta jokaiselle arkille erikseen. |
| Eri mittakaavat näkymäruuduilla yhdellä arkilla (Bluebeam) | Ei vielä: yksi mittakaava arkkia kohden. |
| Murtoviivan pituus- ja pinta-alatyökalut (Bluebeam), viiva- ja pinta-alamääräys (PlanSwift) | {{ui:Viiva}} ({{key:L}}) ja {{ui:Pinta-ala}} ({{key:A}}). |
| Shift-näppäimen pitäminen alhaalla suorille viivoille | {{key:Shift}} tarttuu 45 asteen askelin, sama idea. |
| Tarttuminen piirustuksen viivoihin | Oletuksena päällä: päätepisteet, keskikohdat, leikkauspisteet ja viivan lähin piste. {{key:F3}} kytkee tartunnan pois, kuten CAD-ohjelmissa. |
| Laskentatyökalu (molemmat) | {{ui:Lukumäärä}} ({{key:C}}). |
| Visuaalinen haku symboleille (Bluebeam) | {{ui:Automaattilaskenta}} ({{key:S}}): rajaa yksi symboli, tarkista ja lisää. |
| Aukot tai vähennykset pinta-aloissa | {{ui:Aukko}} ({{key:X}}) valitulle pinta-alalle, sekä pyöreät aukot. |
| Vähennykset viivamääräyksissä | Piirrä viiva suoraan läpi ja paina {{key:E}} ({{ui:Vähennä}}) aukolle. Katso [Mittaa viivamääriä](topic:measure-linear). |
| Kaarisegmentit murtoviivassa | {{ui:Kaari}} ({{key:R}}): napsauta käyrän piste ja sitten sen loppu. |
| Merkintäluettelo määräsarakkeilla (Bluebeam) | Taulukko {{ui:Määrät}}, {{ui:Nimikkeittäin}} tai {{ui:Arkeittain}}. |
| Hinnoiteltu arviointiruudukko (PlanSwift) | Sama taulukko: hukka, materiaali ja työ yksikköä kohden, laskennalliset summat sekä {{ui:Työn kokonaissumma}}. |
| Vienti Exceliin | {{ui:XLSX}} livekaavoilla tai {{ui:CSV}}. |
| Esc pysäyttää työkalun | {{key:Esc}} peruuttaa ja palaa tilaan {{ui:Valitse}}. |
| Oikea hiiren painike päättää | Oikea hiiren painike päättää viivan tai sulkee alueen tässäkin. Oikean painikkeen valikkoa ei ole. |

## Erot, jotka hämmentävät

**Määrälaskenta ei ole PDF:n sisällä.** Mikään tekemäsi ei muuta PDF-tiedostojasi. Tallenna `.takeoff.json`-tiedosto ja säilytä se piirustusten kanssa. Kun lähetät jollekulle merkityn PDF:n, et lähetä muokattavaa määrälaskentaa: lähetä projektitiedosto ja alkuperäiset PDF:t, tai [PDF, jonka sisällä on määrälaskenta](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF:t tunnistetaan sisällön, ei nimen perusteella.** Tarkistettu arkki, joka on tallennettu vanhan tiedostonimen päälle, on TakeoffCraftille uusi tiedosto, jossa ei ole mittakaavaa eikä merkintöjä. Vanhat merkintäsi jäävät vanhaan versioon ja laskevat edelleen. Katso [Tallenna määrälaskenta ja avaa se uudelleen](topic:save-and-reopen#when-a-pdf-has-changed).

**Ilman mittakaavaa olevat merkinnät jätetään pois, eikä niitä lasketa nollina.** Jos arkilla ei ole mittakaavaa, sen viivat ja pinta-alat eivät lasketa, ja taulukossa lukee "Keskeneräinen". Monessa ohjelmassa näkisit vain 0. Katso [Aseta mittakaava](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Sivukokoa ei arvata.** Esiasetukset olettavat, että PDF on tulostettu täysikokoisena. Puolikokoinen tai "sovita sivulle" -PDF tarvitsee {{ui:Kalibroi}}-toiminnon. Käytä aina {{ui:Tarkista}}-toimintoa.

**Yksi nimike, yksi pääasiallinen tyyppi, lisää jos pyydät.** Nimike on viiva-, pinta-ala- tai lukumäärätyyppinen, ja sen tyyppi lukittuu, kun siinä on merkintöjä. Ehto, joka antaa sekä pinta-alan että sen kehän, on pinta-alanimike: kehä on muuttuja `P`. Seinä, jolla on sekä pituus että pinta-ala, on viivanimike korkeudella. Monen ehdon nimikkeelle, kuten huoneelle, jolla on lattia, lattialista ja ovet, valitse muut tyypit kohdasta **{{ui:Mittaa myös}}**: kukin hinnoitellaan omalle rivilleen. Katso [Yksi nimike, useita merkintätyyppejä](topic:create-items#one-item-several-kinds-of-marks).

**Kaavat lasketaan kokonaissummista.** Yhdistelmäkaavat käyttävät nimikkeen summia kaikilta arkeilta, eivät kutakin viivaa erikseen. `N` (viivojen tai alueiden määrä) on olemassa lisäkohtia varten, kuten yksi ylimääräinen runko seinää kohden.

**Kehä sisältää aukot.** Pinta-alan `P` lisää myös aukkojensa reunat. Katso [Mittaa pinta-alat aukoilla](topic:measure-areas#read-the-area).

**Vetäminen panoroi.** Vasemman painikkeen vetäminen arkilla panoroi kaikissa työkaluissa paitsi {{ui:Automaattilaskenta}}ssa. Panorointityökalua ei tarvitse koskaan vaihtaa. Rulla zoomaa; se ei vieritä.

**Palautuskopio, ei pilvi.** TakeoffCraft säilyttää kopion työstäsi tässä selaimessa ja tarjoaa sen takaisin kaatumisen jälkeen ([Jos välilehti tai selain pysähtyy](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), mutta määrälaskennan tallentaminen on sinun vastuullasi: {{key:Mod+S}}. Pilvitallennus ei ole vielä käytettävissä.

**Kaikki on selaimessa.** Mitään ei tarvitse asentaa, eikä piirustuksia lähetetä koskaan. Työpöytäsovelluksena TakeoffCraft tulee CadCraft Studion mukana muiden seitsemän sovelluksen kanssa.

## Ei vielä toteutettu

Arkkikohtaiset mittakaava-alueet eivät ole vielä toteutettuja. Katso [Mitä ei ole vielä toteutettu](topic:not-built-yet) koko luettelo ja mitä tehdä sen sijaan.
