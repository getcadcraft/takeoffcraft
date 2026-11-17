---
title: Laske piirustuksesta
summary: Laske lohkoja, tason kohteita tai tekstiä suoraan DWG- tai DXF-tiedostosta: tarkasti, sisäkkäiset lohkot, dynaamisten lohkojen variantit ja lohkotaulukot huomioiden, yhdellä kumoamisaskeleella.
keywords: laske piirustuksesta, cad-laskenta, lohkolaskenta, laske lohkoja, lisäys, lohkon nimi, sisäkkäiset lohkot, dynaaminen lohko, variantti, minsert, taulukko, taso, kohdetyyppi, ympyrät, teksti, attribuutti, tunniste, piilotetut tasot, tarkka laskenta, ohje, ovet, kalusteet
from: 5060e24e
---

{{ui:CAD-laskenta}} arkkipalkissa (komento **Laske piirustuksesta** muissa valikkotyyleissä) laskee sen, minkä DWG- tai DXF-tiedosto sanoo olevan siellä. Kun {{ui:Automaattilaskenta}} etsii symbolin kuvaa ja voi jättää yhden huomaamatta tai löytää väärän, tämä laskee kohteet: jokainen lohkon `DOOR-36` lisäys on yksi ovi. Avaa piirustus ensin: [Avaa DWG- tai DXF-piirustus](topic:open-a-drawing).

## Laske lohko

1. Avaa piirustuksen arkki. {{ui:CAD-laskenta}} on arkkipalkissa.
2. Valitse se. Ikkuna listaa lohkot ja kuinka monta kutakin on. Hae nimellä ja valitse yksi.
3. Tarkista rivi listan alla: "22 löytyi, 22 lisätään."
4. Valitse kohdassa {{ui:Lisää nimikkeeseen}} lukumäärännimike, tai jätä {{ui:Uusi lukumäärännimike}} ja anna sille nimi.
5. Valitse lisäyspainike, joka kertoo määrän: {{ui:Lisää 22 merkintää}}. Merkinnät ilmestyvät lohkon lisäyskohtiin, ja nimikkeen määrä on laskenta.

Se on yksi kumoamisaskel: {{key:Mod+Z}} poistaa merkinnät (ja uuden nimikkeen) yhdessä. Arvio, laskentataulukko ja merkitty PDF käsittelevät nimikettä kuten mitä tahansa muuta lukumäärännimikettä.

### Mitä lasketaan

- **Jokainen lohkon nimen lisäys**, mittakaavasta ja kulmasta riippumatta, mallitilassa tai paperitilassa. Lohkojen nimissä kirjainkoolla ei ole merkitystä.
- **Lohkotaulukot** (MINSERT): jokainen kopio taulukossa on yksi.
- **Sisäkkäiset lohkot.** Lohko, joka on sijoitettu toisen lohkon sisään, lasketaan jokaisella syvyydellä. Lista kertoo "6 muiden lohkojen sisällä"; poista rasti kohdasta {{ui:Laske myös muiden lohkojen sisällä olevat lohkot}}, jos haluat laskea vain piirustukseen suoraan sijoitetut lisäykset.
- **Dynaamiset lohkot.** Dynaaminen lohko lasketaan omalla nimellään, ei tiedoston säilyttämien anonyymien kopioiden (`*U12`) nimillä. Sen tilat listataan erikseen ("Yksinkertainen 12, Kaksinkertainen 4"): valitse tila laskeaksesi vain ne, tai {{ui:Kaikki variantit}}. Kun tiedosto ei kerro, mitä tilaa kopio näyttää, ne listataan nimellä "(tilaa ei tunneta)".
- **Tasosuodatin.** Lohko useilla tasoilla: valitse yksi kohdassa {{ui:Tasolla}}.

### Mitä ei lasketa

- **Piilotetut tasot.** Kohde tasolla, joka on pois päältä tai jäädytetty tiedostossa (tai jonka piilotit kohdassa {{ui:Tasot}}), jätetään pois, ja rivi kertoo määrän: "3 piilotetulla tasolla jätetty pois". Rastita {{ui:Laske nekin}} sisällyttääksesi ne.
- **Linkitettyjä piirustuksia, joita ei ole avattu**, ei lasketa; ikkuna kertoo siitä.
- **Kohteet, jotka on pinottu täsmälleen toisen samantyyppisen päälle**, lasketaan kahdeksi (ne ovat kaksi kohdetta), ja ikkuna kertoo siitä. Se on yleensä piirtämisvirhe, joka kannattaa tarkistaa.

## Tämä arkki tai koko piirustus

- **Tämän arkin näkyvät** laskee kohteet, jotka arkki näyttää: asettelulla mallikohteet sen näkymäruuduissa (taso, joka on jäädytetty näkymäruudussa, ei lasketa siellä) sekä asettelun omat kohteet.
- **Koko piirustus, jokainen kohde kerran** laskee mallitilan kerran merkintöineen Malli-arkilla, eikä laske uudelleen sitä, minkä useat asettelut näyttävät.

Asettelun näyttämien kohteiden ja Mallin näyttämien kohteiden laskenta antaa saman luvun samoille kohteille; älä lisää molempia samaan nimikkeeseen.

## Laske laskenta uudelleen

Saman lohkon laskeminen uudelleen samaan nimikkeeseen lisää vain uudet: "22 jo laskettu." Jokainen merkintä vastaa yhtä kohdetta.

## Tasoittain ja tyypeittäin

Valitse kohdassa {{ui:Tasoittain ja tyypeittäin}} taso ja kohdetyyppi (ympyrät, murtoviivat, viivoitukset…): "kaikki ympyrät tasolla E-LITE". Rastita {{ui:Laske myös lohkojen sisällä olevat kohteet}}, jos haluat sisällyttää lohkomääritysten sisällä olevat kohteet jokaisessa kohdassa, johon lohko on lisätty.

## Tekstin mukaan

Kohdassa {{ui:Tekstin mukaan}} kirjoita teksti, kuten `A3`, ja kerro, onko se täsmälleen tuo, sisältääkö se sen vai onko se kokonainen sana. Tekstikohteet, monirivinen teksti ja lohkon **attribuuttiarvot** lasketaan kaikki (tunnisteattribuutti `ITEM = A3` löytyy). Valitse {{ui:Attribuutissa}}, jos haluat laskea vain yhden attribuutin. Yleisimmät tekstit listataan napsautettaviksi.

## Milloin käyttää automaattilaskentaa

Käytä {{ui:Automaattilaskenta}}-toimintoa PDF-tiedostoille ja piirustuksen symboleille, jotka eivät ole lohkoja (piirretty irrallisina tai räjäytettyinä). Jos ne on piirretty lohkoina, laske ne täällä.
