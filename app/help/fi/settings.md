---
title: TakeoffCraftin asetukset
summary: Näytä tuumat tarkkuudella 1/16, 1/8 tai 1/4, aloita uudet nimikkeet hukkaprosentilla, valitse mistä Automaattilaskennan liukusäädin alkaa, tartu piirustuksen omiin viivoihin tai 45°:een ilman Shift-näppäintä, aseta kuinka leveän oven Huoneen täyttö sulkee ja valitse 3D-näkymän kulmamerkki.
keywords: asetukset, mieltymykset, valinnat, tarkkuus, murtoluvut, tuumat, pyöristys, hukka, oletushukka, automaattilaskenta, kynnys, vastaavuus, liukusäädin, tartunta, 45, kulma, shift, näkymäkuutio, akselikuvake, kulmamerkki, 3d
from: bca3f0ed
---

Avaa {{ui:Settings}} sovelluspalkin rattaalla tai painamalla {{key:Mod+,}}. Ensimmäinen välilehti, {{ui:TakeoffCraft}}, sisältää tälle sovellukselle kuuluvat asetukset. {{ui:General}} sisältää ne, jotka kaikki CadCraft-sovellukset jakavat (teema, paneelit, työkalurivi). TakeoffCraftin asetukset ovat vain tässä sovelluksessa: muutat ne täällä, ja tämä selain muistaa ne. {{ui:Reset TakeoffCraft settings}} palauttaa ne lähtöarvoihinsa.

## Jalat ja tuumat

Näytä pituudet lähimpään **1/16"** (lähtöarvo), **1/8"** tai **1/4"**. Tämä muuttaa pituuksien lukemista arkilla, paneeleissa, määrissä ja tilarivillä.

Vain näyttö pyöristetään. Määrät, kustannukset ja viennit lasketaan tarkoista pituuksista, ja viennit näyttävät aina 1/16".

## Hukka alussa

Hukkaprosentti, jolla jokainen uusi nimike alkaa: 0 % (lähtöarvo), 2 %, 3 %, 5 %, 7.5 %, 10 %, 15 % tai 20 %. Voit yhä kirjoittaa jokaiselle nimikkeelle oman hukan nimikkeen muokkausikkunassa tai suoraan määrätaulukkoon. Nimikkeet, joita sinulla jo on, säilyttävät oman hukkansa.

## Automaattilaskenta: mistä vastaavuusliukusäädin alkaa

Missä {{ui:Match}}-liukusäädin on, kun automaattilaskennan [haku](topic:auto-count) päättyy, 50 %:sta 95 %:iin; lähtöarvo on 75 %. Alempi antaa enemmän samannäköisiä kohteita hylättäväksi, korkeampi antaa vähemmän. Voit yhä siirtää liukusäädintä jokaisen tarkistuksen aikana.

## Tartu piirustuksen omiin viivoihin

Päällä alussa. Kun mittaat tai kalibroit, PDF-viivan lähellä oleva piste hyppää sen päähän, keskikohtaan, risteykseen tai lähimpään kohtaan siitä. {{key:F3}} ja tilarivin {{ui:Snap}} kytkevät tartunnan myös päälle ja pois. Lisää: [Tartu piirustuksen viivoihin](topic:snap-to-the-drawing).

## Huoneen täyttö: kuinka leveän aukon se sulkee

{{ui:Room fill closes openings up to}} asettaa, kuinka leveän ovi-aukon tai raon {{ui:Room}}-työkalu käsittelee suljettuna: 3'-0"–8'-0", lähtöarvo 4'-0". Jos se on leveämpi kuin leveimmä ovesi, huone ulottuu seuraavaan; kapeampi kuin ovi jättää huoneen auki. Katso [Täytä huone yhdellä napsautuksella](topic:measure-areas#fill-a-room-with-one-click).

## Kulma 45° ilman Shift-näppäintä

Pois alussa. Kun se on päällä, viivat, ääriviivat, aukot ja vedetyt kulmat menevät 0°, 45°, 90° tai 135° kulmiin viimeisestä pisteestä ilman {{key:Shift}}-näppäintä. Pidä {{key:Shift}} pohjassa napsauttaaksesi mihin tahansa kulmaan. Tilarivillä lukee "Tartuu 45°:een; Shift vapauttaa kulman". Kaaren kaarevalla kohdalla napsautettu piste ja ympyrät eivät koskaan tartu; kaaren päätepiste tartuu.

## Lukumäärämerkin koko

Kuinka isoja lukumäärän pisteet ovat: {{ui:Extra small}}, {{ui:Small}}, {{ui:Medium}} (lähtöarvo: koko, jonka pisteet aina olivat) tai {{ui:Large}}. Koko säilyy näytöllä jokaisella zoomilla, ja merkitty PDF piirtää jokaisen pisteen samankokoisena paperille arkin koosta riippumatta, joten PDF 100 %:lla näyttää samalta kuin näyttö. Lisää: [Laskenta käsin](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Kulmamerkki

Vain [3D-tarkistusnäkymälle](topic:check-in-3d): {{ui:View cube}} (lähtöarvo: kuutio oikeassa yläkulmassa, jota napsautetaan, vedetään ja käännetään), {{ui:Axis icon}} (pieni X-, Y- ja Z-merkki oikeassa alakulmassa) tai {{ui:None}}. Muutos on heti voimassa ja tallentuu tähän selaimeen. Litteä arkki ei näytä koskaan kulmamerkkiä.

## Polkutyökalu: suurin liitettävä rako

{{ui:Path tool: largest gap to join}} on, kuinka kaukana kahden viivan päät voivat olla ja silti olla yksi polku, PDF-pisteinä (0.05–60; lähtöarvo 1.5). Piirustuksen viivat pysähtyvät usein hiuksen verran lyhyiksi toisiinsa. Suurempi liittää enemmän; pienempi pitää viivat erillään. {{key:[}} ja {{key:]}} muuttavat sitä valitessasi, ja tämä kenttä seuraa. Katso [Valitse viivat](topic:pick-the-lines).
