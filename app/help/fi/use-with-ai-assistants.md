---
title: Käytä TakeoffCraftia tekoälyavustajan kanssa
summary: Anna omalle tekoälyavustajallesi tai skriptillesi lukea määrälaskennan määrät ja kustannusarvio, lisätä nimikkeitä ja merkintöjä, laskea ja mitata DWG- tai DXF-piirustuksesta sekä viedä tietoja: oikeudet, yhdistäminen CadCraft Studion kautta ja toimintaloki.
keywords: tekoälyavustaja, avustaja, agentti, mcp, mallin kontekstiprotokolla, skripti, automaatio, määrät, kustannusarvio, oikeudet, katkaise yhteys, toiminta
from: 7fa62ec6
---

## Mitä opit

Miten annetaan tekoälyavustajalle (tai itse kirjoittamallesi skriptille) mahdollisuus työskennellä TakeoffCraftin kanssa ja miten päätetään, mihin se saa koskea.

TakeoffCraftissa ei ole omaa tekoälyä, eikä se lähetä mitään minnekään. Avustaja tuodaan itse: mikä tahansa ohjelma, joka puhuu Model Context Protocol (MCP) -protokollaa. TakeoffCraft antaa sille vain työkaluja, ja valitaan itse, mitkä.

## Ota käyttöön

1. Avaa {{ui:Asetukset}} (vaihde sovelluspalkissa tai {{key:Mod+,}}) ja siirry {{ui:TakeoffCraft}}-välilehdelle.
2. Kohdassa {{ui:Avustajat}} rastitetaan **Anna tekoälyavustajien ja skriptien käyttää TakeoffCraftia**. Kytkin on pois päältä, kunnes se otetaan käyttöön.
3. Valitaan, mitä avustaja saa tehdä: **Lue** on valittuna alussa; **Muokkaa**, **Tallenna** tai **Vie** rastitetaan vain tarvittaessa.

Oikeuksiin kuulumattomia työkaluja ei tarjota avustajalle. Jos avustaja pyytää sellaista silti, TakeoffCraft evää pyynnön ja kirjaa sen toimintalokiin. Kytkimen sammuttaminen katkaisee kaikki yhteydet kerralla; {{ui:Palauta TakeoffCraft-asetukset}} sammuttaa sen myös.

## Yhdistä avustaja

Avustajat yhdistyvät **CadCraft Studion** kautta omalla tietokoneella. Studio käynnistää pienen palvelimen, johon vain tämä tietokone pääsee, ja sitä suojaa tunnus, jonka Studio luo joka käynnistyksellä. Studiossa valitaan {{ui:Yhdistä avustaja}}, ja osoite ja tunnus kopioidaan avustajaan (Studio näyttää tarkat liitettävät asetukset). Tunnusta ei koskaan jaeta.

:::note
Selaimen välilehti ei voi avata yhteyttä avustajalle: selainsovelluksissa kytkin ei vaikuta, ennen kuin käytetään CadCraft Studiota omalla tietokoneella.
:::

## Hallinta pysyy sinulla

- **Jokainen muutos on yksi kumoamisvaihe**, ja sen nimenä on avustajan nimi (esimerkiksi "Avustaja: …"). {{key:Mod+Z}} palauttaa avustajan viimeisimmän muutoksen kokonaisuudessaan.
- **Näet, kun avustaja on yhdistetty.** Sovelluspalkin painike nimeää avustajan yhteyden ajan; napsauttamalla sitä näet, mitä avustaja saa tehdä, tai voit katkaista yhteyden painikkeella **Katkaise yhteys**.
- **Toiminta.** {{ui:Asetukset}} › {{ui:TakeoffCraft}} › {{ui:Avustajat}} › {{ui:Toiminta}} luettelee jokaisen kutsun: milloin, mikä työkalu ja onnistuiko vai evättiinkö. {{ui:Tallenna loki}} tallentaa kopion.

## Mitä avustaja voi pyytää

| Työkalu | Oikeus | Mitä se tekee |
|---|---|---|
| `app_info`, `sheets_list` | Lue | Avoin määrälaskenta, sen PDF:t ja arkit, jokaisen arkin mittakaava ja merkinnät |
| `items_list` | Lue | Nimikkeet yksikköineen, yksikköhintoineen ja yhdistelmien kaavoineen |
| `takeoff_quantities` | Lue | Määrät nimikkeittäin tai arkeittain; merkinnät arkeilla, joilla ei ole mittakaavaa, luetellaan eikä niitä lasketa nollaksi |
| `takeoff_estimate` | Lue | TakeoffCraftin laskema hinnoiteltu kustannusarvio yhteissummineen |
| `takeoff_export` | Vie | TakeoffCraftin oma CSV- tai XLSX-vienti |
| `items_add` | Muokkaa | Lisää nimikkeitä yksikköineen, yksikköhintoineen ja hukkineen |
| `marks_add` | Muokkaa | Mittaa pituudet, pinta-alat ja lukumäärät arkilla. Pituuksia ja pinta-aloja vain mittakaavalliselle arkille, ei koskaan mittakaavattomalle |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lue | Avatulle DWG- tai DXF-tiedostolle sen arkit ja mittakaavat, mitä voi laskea (lohkot, tasot ja tyypit, tekstit) sekä tarkat lukumäärät, kuten {{ui:CAD-laskenta}} ne tekee ([Laske piirustuksesta](topic:count-from-a-drawing)) |
| `cad_count_add` | Muokkaa | Laskee piirustuksesta ja lisää laskentamerkinnän jokaiseen löytyneeseen kohteeseen yhdellä kertaa; uudelleen laskeminen lisää vain uudet |
| `cad_measure` | Muokkaa | Mittaa lineaarisen tai pinta-alanimikkeen piirustuksen omista viivoista, kaarista, murtoviivoista ja viivoituksista, kuten {{ui:Mittaa piirustus}} tekee ([Mittaa piirustuksesta](topic:measure-from-a-drawing)); vain mittakaavalliselle arkille |
| `usd_export` | Vie | Mittakaavallisen arkin mitatut pituudet, pinta-alat ja lukumäärät 3D-tarkistusmallina USD-muodossa (`.usdz`, `.usda` tai `.usdc`), kuten {{ui:USD-paketti (.usdz)}} kirjoittaa 3D-tarkistusnäkymässä ([Vie 3D-tarkistusnäkymä USD-muodossa](topic:usd)) |

Kun **Muokkaa** on rastitettu, avustaja lisää nimikkeitä ja merkintöjä (jokainen kutsu on yksi kumoamisvaihe). Jo paikoillaan olevia merkintöjä se ei voi siirtää, muuttaa eikä poistaa.

Samat määrät ja kustannusarvio ovat saatavilla myös ilman TakeoffCraftin avaamista: CadCraft MCP -palvelin avaa `.takeoff.json`-tiedoston kansiosta, jonka nimetään (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), ja `cadcraft info Job.takeoff.json` tulostaa ne komentoriville. Se avaa myös DWG- tai DXF-tiedoston uutena määrälaskentana sen arkeille (mittakaava otetaan piirustuksesta samoin kuin TakeoffCraft sen tekee), laskee ja mittaa sillä samoilla `cad_*`-työkaluilla, lisää nimikkeitä ja tallentaa määrälaskennan (`takeoff_save`). `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` laskee komentoriviltä.

## Jos jokin ei toimi

- **Avustaja ei näe TakeoffCraft-työkaluja:** tarkista, että kytkin on päällä tässä ikkunassa ja että ikkuna on auki Studiossa.
- **"needs the export permission":** rastita **Vie** kohdassa {{ui:Avustajat}} ja pyydä sitten uudelleen.
- **"401" tai "token" -virheet:** tunnus on vaihtunut (Studio käynnistettiin uudelleen tai {{ui:Uusi tunnus}}). Kopioi uusi tunnus avustajan asetuksiin.

## Katso myös

- [Reseptit tekoälyavustajille](common:assistants-recipes): toimivia esimerkkejä, joista kukin kertoo, mitä työkaluja se käyttää.
