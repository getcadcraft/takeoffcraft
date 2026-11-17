---
title: Vie kustannusarvio ja merkitty PDF
summary: Lataa kustannusarvio XLSX-taulukkona, jossa on toimivat kaavat, tai CSV-tiedostona, sekä kopiot PDF-tiedostoistasi, joihin määrälaskenta on piirretty.
keywords: tarjous, tarjousyhteenveto, vienti, xlsx, taulukko, työkirja, csv, merkitty pdf, tulosta määrälaskenta, raportti, jakaminen, lähetys, selite
from: 334f89c7
---

Viennit ovat latauksia. Ne tehdään tietokoneellasi määrälaskennasta ja avoimista PDF-tiedostoista; mitään ei lähetetä minnekään.

## Kustannusarvio taulukkona (XLSX)

1. Avaa työkalurivin {{ui:Vie}}-valikko ja valitse {{ui:XLSX}}.
   Selain lataa tiedoston `(nimi).xlsx`. Tilarivi kertoo: "Viety (nimi).xlsx (kustannusarvio toimivilla kaavoilla, arkeittain, merkinnät, mittakaavat)." ja antaa varoituksen, jos kustannusarvio on epätäydellinen.
2. Avaa se taulukkolaskentaohjelmassasi.

Työkirjassa on neljä taulukkoa ja alla olevat raportit, kun ne koskevat sitä:

| Taulukko | Sisältö |
|---|---|
| Kustannusarvio | Rivi nimikettä ja osaa kohden: määrä, hukka, määrä hukkineen, hinnat, materiaali, työ, yhteensä ja huomautukset. Kokonaissumma alareunassa. |
| Arkeittain | Jokaisen nimikkeen määrä kullakin arkilla merkintöjen lukumäärineen. |
| Merkinnät | Jokainen merkintä: arkki, nimike, tyyppi, määrä ja tiedot (osien pituudet, brutto- ja aukkopinta-alat, kehä). |
| Mittakaavat | Jokainen arkki, jolla on mittakaava tai merkintöjä: sen mittakaava, miten se asetettiin (esiasetus tai mistä etäisyydestä kalibroitu) ja jalkaa PDF-yksikköä kohti. |
| Määrälaskennan yhteenveto | Jokaisen nimikkeen määrä, CSI-numero, merkinnät ja arkit ilman hintoja. |
| Materiaaliluettelo | Kaikki kokoonpanon osat laskettuina yhteen koko määrälaskennasta (sama osa usealle nimikkeelle on yksi rivi), hukalla ja materiaalikustannuksella sekä nimikkeet, jotka sitä käyttävät. |
| Tarjouspyyntö | Toimittajalle lähetettävä materiaaliluettelo: määrät hukkineen, tyhjä yksikköhinta-sarake sekä rivisummat ja kokonaissumma, jotka täyttyvät hintoja kirjoitettaessa. |
| CSI-jaoksittain | Materiaali, työ ja yhteensä CSI MasterFormat -jaoksittain, kun nimikkeillä on {{ui:CSI-numero}}. |

Kun käytössä on [tarjousyhteenveto](topic:bid-summary), Kustannusarvio-taulukko päättyy myös sen lisäyksiin (työkustannuslisä, myyntivero, yleiskustannukset, voitto, takuu ja tarjous) toimivina kaavoina.

Kustannusarvio-taulukko säilyttää **toimivat kaavat**: määrä hukkineen, pyöristetyt materiaali- ja työsummat sekä rivin ja kokonaissumman. Taulukkolaskentaohjelmat laskevat ne uudelleen, joten voit muuttaa hintaa tai hukkaa taulukossa ja summat seuraavat. TakeoffCraftin laskemat luvut ovat myös soluissa, ja ne täsmäävät sentin tarkkuudella.

Huomautussarake luettelee kunkin osan kaavan, kaavavirheet, merkinnät arkeilla ilman mittakaavaa, seinäpinta-alan ja kehän. Kun jotain on jätetty pois, kokonaissummarivi sanoo "Epätäydellinen: katso yllä olevat huomautukset".

Työkirja on tarkistettu LibreOffice Calcissa, joka laski sen uudelleen samoihin summiin. Sitä ei ole vielä avattu Excelissä. Sarake sarakkeelta -tiedot ovat kohdassa [Vientisarakkeet](topic:export-columns).

## Kustannusarvio CSV:nä

Avaa {{ui:Vie}}-valikko ja valitse {{ui:CSV}}. Saat tiedoston `(nimi).csv`: samat rivit ja sarakkeet kuin Kustannusarvio-taulukossa, tavallisina arvoina (ei kaavoja), sekä kokonaissumman. Käytä sitä liittääksesi tiedot toiseen kustannuslaskenta- tai kirjanpitojärjestelmään.

CSV sisältää vain kustannusarvion; määrät arkeittain ja merkintäluettelon saat XLSX-muodossa. {{ui:Materiaaliluettelo}} samassa valikossa tallentaa pelkän materiaaliluettelon CSV-tiedostoksi tilaamista varten.

## Kustannusarvio Google Sheetsissä

Määrätaulukon yläpuolella **Kopioi Google Sheetsiin** vie kustannusarvion leikepöydälle sarkaineroteltuna tekstinä, samoilla riveillä kuin CSV. Avaa Google Sheet, napsauta solua A1 ja liitä. TakeoffCraft ei kirjaudu Googleen eikä lähetä sinne mitään.

## Puuttuvat hinnat ja hyväksyntä

Rivi, jolla on määrä mutta ei hintaa, saa huomautukseensa **Ei hintaa**, ja vienti laskee sen mukaan summiin. Kun kustannusarvio on hyväksytty, vienti nimeää hyväksyjän, ajankohdan ja kokonaissumman, jolle hyväksyntä annettiin. Katso [Puuttuvat hinnat ja kustannusarvion hyväksyminen](topic:sign-off-the-estimate).

## Merkitty PDF

1. Avaa PDF-tiedostot, joiden merkinnät haluat piirtää.
2. Avaa {{ui:Vie}}-valikko ja valitse {{ui:Merkitty PDF}}.
   Näkyviin tulee "Kirjoitetaan merkittyä PDF:ää…", minkä jälkeen selain lataa yhden tiedoston jokaista merkittyä PDF:ää kohden, nimettynä `(PDF-nimi) (määrälaskenta).pdf`.

Kopiossa:

- juoksut piirretään viivoina nimikkeensä värillä,
- pinta-alat täytetään kevyesti yhtenäisellä reunalla, ja aukot jätetään auki,
- lukumäärät ovat pisteitä,
- jokaiseen merkityn sivun alanurkkaan tulee pieni selite: kunkin nimikkeen väri, nimi ja määrä sivulla.

Alkuperäisiä PDF-tiedostojasi ei muuteta.

Huomautuksia:

- Vain avoimet PDF-tiedostot kirjoitetaan. Merkinnät muilla kuin avoimilla PDF-tiedostoilla jäävät summiin, mutta niitä ei piirretä; avaa ne ensin.
- Selitteen nimet käyttävät vakio-PDF-fonttia. Kirjaimet, joita se ei pysty näyttämään, tulostuvat merkkinä "?".
- Salasanasuojattua tai salattua PDF-tiedostoa ei voi kopioida merkintöineen: ”Tämä PDF on salasanasuojattu tai salattu, joten merkittyä kopiota ei voi kirjoittaa. Määrälaskenta itsessään on kunnossa; vie taulukko sen sijaan.”
- Ensimmäinen {{ui:Merkitty PDF}} välilehdellä lataa PDF-kirjoittimen. Offline-tilassa se on käytettävissä vain, jos sovelluspalkissa näkyy {{ui:Offline valmis}}; katso [Työskentely offline-tilassa](common:offline).

:::chromium
Useita merkittyjä PDF-tiedostoja vietäessä Chrome ja Edge voivat kysyä kerran, saako tämä sivusto ladata useita tiedostoja. Valitse Salli, muuten saat vain ensimmäisen tiedoston.
:::

## Ei vietävää?

- {{ui:XLSX}} ja {{ui:CSV}} tarvitsevat vähintään yhden nimikkeen: ”Ei vietävää vielä: tee nimike ja mittaa se.”
- {{ui:Merkitty PDF}} tarvitsee merkintöjä avoimella PDF-tiedostolla: ”Avoimilla PDF-tiedostoilla ei ole vielä merkintöjä.”

## Tallenna myös määrälaskenta

Vienti on raportti. Jos haluat jatkaa määrälaskennan työstämistä myöhemmin, valitse myös {{ui:Tallenna määrälaskenta}}: katso [Tallenna ja avaa määrälaskenta uudelleen](topic:save-and-reopen).

Jos haluat lisätä yleiskustannukset, voiton, veron ja takuun ja lähettää tarjouksen, katso [Tarjousyhteenveto ja tarjous](topic:bid-summary).
