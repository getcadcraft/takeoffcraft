---
title: Tiedostot, jotka TakeoffCraft avaa ja tallentaa
summary: PDF-tiedostot sisään, määrälaskentaprojektitiedosto, taulukot ja merkityt PDF-tiedostot ulos; mitä kukin sisältää, minne se menee ja mikä muuttuu online-, offline-tilassa ja selainten välillä.
keywords: tiedostot, muodot, pdf, takeoff.json, projektitiedosto, xlsx, csv, merkitty pdf, lataa, tallenna, avaa, offline
from: 1bf9be65
---

## Mitä se avaa

| Tiedosto | Miten | Huomautukset |
|---|---|---|
| PDF (`.pdf`) | {{ui:Avaa piirustukset}}, {{key:Mod+O}} tai pudota sivulle | Useita kerralla. Jokaisesta sivusta tulee arkki. |
| Määrälaskentaprojekti (`.takeoff.json`) | {{ui:Avaa määrälaskenta}} tai pudota sivulle | Nimikkeesi, mittakaavat ja merkinnät. Voit pudottaa sen yhdessä sen PDF-tiedostojen kanssa. |

Muut sivulle pudotetut tiedostot ohitetaan, ja tilarivi nimeää ne.

- **Salasanasuojatut PDF-tiedostot** eivät aukea: ”(name) on salasanasuojattu. Avaa suojaamaton kopio.”
- **Sama PDF kahdesti** avataan vain kerran: ”(name) on jo auki.” TakeoffCraft tunnistaa tiedostot sisällön, ei nimen perusteella.
- **Skannatut PDF-tiedostot** aukeavat ja mitataan kuten muutkin; TakeoffCraft ei tarvitse PDF:n tekstiä.
- **Suuret piirustussarjat**: jokainen PDF luetaan kokonaan avattaessa (sormenjäljen ottamiseksi), joten hyvin suuri tiedosto vie hetken. Pikkukuvat piirretään yksi kerrallaan vieritettäessä.

## Mitä se tallentaa

Jokainen tallennus on lataus. Mitään ei kirjoiteta takaisin PDF-tiedostoihisi.

| Valitset | Saat | Mitä siinä on |
|---|---|---|
| {{ui:Tallenna määrälaskenta}} | `(name).takeoff.json` | Nimikkeet, yhdistelmät, hinnat, arkkien mittakaavat ja jokainen merkintä, sidottuna kuhunkin PDF:ään sen sisällön perusteella. Ei PDF-sivuja. |
| {{ui:XLSX}} | `(name).xlsx` | Neljä työarkkia: Kustannusarvio (elävine kaavoineen), Arkeittain, Merkinnät, Mittakaavat. |
| {{ui:CSV}} | `(name).csv` | Kustannusarvio pelkkinä arvoina, yksi rivi nimikettä ja osaa kohti. |
| {{ui:Merkitty PDF}} | `(PDF name) (takeoff).pdf` | Kopio jokaisesta avoimesta PDF:stä, jossa on merkintöjä, määrälaskenta piirrettynä sen sivuille ja selite. Yksi tiedosto PDF:ää kohti. |

Nimi otetaan ensimmäisestä tässä määrälaskennassa avaamastasi PDF:stä. Uudelleennimeämisruutua ei ole vielä: nimeä ladattu tiedosto uudelleen, jos haluat toisen nimen.

Katso [Kustannusarvion ja merkityn PDF:n vienti](topic:export-estimate) ja [Vientisarakkeet](topic:export-columns).

## Minne lataukset menevät

Selaimesi tallentaa ne sinne, minne se tallentaa kaikki lataukset, yleensä Lataukset-kansioon. Löydät sen kohteesta {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}}. Jos selaimesi on asetettu kysymään, minne kukin tiedosto tallennetaan, se kysyy.

:::chromium
{{ui:Merkitty PDF}} usealla merkityllä PDF:llä lataa useita tiedostoja kerralla. Chrome ja Edge saattavat kysyä kerran, saako tämä sivusto ladata useita tiedostoja. Valitse Salli.
:::

:::safari
Safari tallentaa Lataukset-kansioon, ellet ole muuttanut latauspaikkaa Safarin asetuksissa, kohdassa Yleiset.
:::

## Miksi projektitiedosto ja PDF-tiedostot ovat erillisiä

`.takeoff.json`-tiedosto sisältää vain määrälaskentasi. Se löytää PDF-tiedostonsa uudelleen niiden sisällön perusteella (kunkin tiedoston sormenjäljen), joten:

- PDF:n uudelleennimeämisellä tai siirtämisellä ei ole väliä.
- PDF, jota on muutettu tai joka on tallennettu uudelleen toisella ohjelmalla, lasketaan eri tiedostoksi, vaikka nimi olisi sama.
- Merkinnät PDF-tiedostoissa, joita ei ole auki, lasketaan yhä mukaan summiin.

Katso [Määrälaskennan tallennus ja uudelleenavaus](topic:save-and-reopen).

## Online ja offline

PDF-tiedostosi ja määrälaskentasi eivät koskaan poistu tietokoneeltasi, online tai offline. Yhteydellä on merkitystä vain TakeoffCraftin itsensä lataamisessa.

Jos haluat työskennellä ilman yhteyttä, tallenna sovellus ensin, kun olet online:

1. Valitse {{ui:Tallenna offline-käyttöön}} ylhäällä olevassa sovelluspalkissa.
   Painike laskee ylöspäin, ”Tallennetaan 12 / 40”, tallennuksen aikana.
2. Odota, kunnes näkyviin tulee {{ui:Offline valmis}}.

TakeoffCraftin tallennus säilyttää selaimessasi sovelluksen, tämän ohjeen, PDF-lukijan, {{ui:Merkitty PDF}} -toiminnon käyttämän PDF-kirjoittimen ja automaattilaskennan työntekijän, noin 6 MB. Kun siinä lukee {{ui:Offline valmis}}, kaikki toimii offline: PDF-tiedostojen avaaminen, mittaus, {{ui:Automaattilaskenta}}, {{ui:Tallenna määrälaskenta}}, {{ui:XLSX}}, {{ui:CSV}} ja {{ui:Merkitty PDF}}.

| Painikkeessa lukee | Merkitys |
|---|---|
| {{ui:Tallenna offline-käyttöön}} | Ei vielä tallennettu tähän selaimeen. Valitse se tallentaaksesi. |
| Tallennetaan (n) / (m) | Tallennetaan parhaillaan. |
| {{ui:Offline valmis}} | Tallennettu. Valitse se saadaksesi {{ui:Tallenna uudelleen (hae uusin versio)}} tai {{ui:Poista offline-kopio}}. |
| {{ui:Tallennus ei onnistunut}} | Kaikkia tiedostoja ei ladattu. Tarkista yhteys ja valitse se uudelleen. |
| {{ui:Offline ei käytettävissä}} | Tämä selainikkuna ei voi säilyttää offline-kopiota (yksityiset ikkunat ja jotkin hallitut tietokoneet estävät sen). |

Lisää, myös siitä, kuinka kauan tallennettu kopio kestää kussakin selaimessa: [Offline-työskentely](common:offline).

:::offline
Olet offline. Jos sovelluspalkissa lukee {{ui:Offline valmis}}, kaikki toimii. Jos ei lue, osat, joita TakeoffCraft ei ole vielä ladannut tässä välilehdessä (PDF-kirjoitin {{ui:Merkitty PDF}} -toimintoa varten, automaattilaskennan työntekijä), eivät voi latautua nyt, ja {{ui:Merkitty PDF}} pysähtyy viestiin ”Merkittyä PDF-tiedostoa ei voitu kirjoittaa”. Määrälaskentasi on turvassa kummassakin tapauksessa: {{ui:Tallenna määrälaskenta}}, {{ui:XLSX}} ja {{ui:CSV}} eivät tarvitse yhteyttä. Älä lataa välilehteä uudelleen ennen kuin olet taas online-tilassa.
:::

:::online
Olet online. Ennen työmaakäyntiä tai lentoa valitse {{ui:Tallenna offline-käyttöön}} ja odota, kunnes lukee {{ui:Offline valmis}}.
:::

## Taulukot

XLSX säilyttää elävät kaavat, joten taulukko-ohjelma laskee kustannusarvion uudelleen avatessaan tiedoston ja pitää sen oikeana, kun muutat hintaa tai hukkaa siellä. Työkirja on tarkistettu LibreOffice Calcissa, joka laski jokaisen summan uudelleen samaan senttiin. Sitä ei ole vielä avattu Excelissä.

CSV on pelkkiä arvoja tavujärjestysmerkillä, joten taulukko-ohjelmat lukevat merkit, kuten m², oikein.

## Työpöytä ja pilvi

:::desktop
Versiosta 0.5 alkaen työpöytäsovellus on CadCraft Studio: TakeoffCraft ja muut seitsemän sovellusta yhdessä asennuksessa. Erillistä TakeoffCraft-asennusohjelmaa ei ole.
:::

Pilvitallennus ei ole vielä käytettävissä. Säilytä `.takeoff.json`-tiedostosi työn PDF-tiedostojen kanssa ja tee niistä varmuuskopiot kuten muistakin tiedostoista. Katso [Minne tiedostosi päätyvät](common:your-files).
