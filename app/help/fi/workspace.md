---
title: TakeoffCraftin näyttö
summary: Kierros ikkunaan näytöllä näkyvien nimien mukaan: työkalurivi, arkkiluettelo, arkki, Nimikkeet-paneeli, Määrät-taulukko ja tilarivi.
keywords: näyttö, asettelu, asettelut, valintanauha, projektiselain, työkalupakki, tietoruutu, työkalurivi, paneelit, arkkiluettelo, nimikepaneeli, määrät, tilarivi, kierros, käyttöliittymä
from: ab1115e0
---

TakeoffCraft täyttää selainikkunan CadCraft-sovelluspalkin alla. Ylhäältä alas ja vasemmalta oikealle:

| Osa | Missä | Mihin se on tarkoitettu |
|---|---|---|
| Sovelluspalkki | Aivan ylhäällä | Sovelluksen nimi, versio, {{ui:Tietoja: TakeoffCraft}}, {{ui:Ohje}} ({{key:F1}}), {{ui:Tallenna offline-käyttöön}}, {{ui:Asetukset}} ({{key:Mod+,}}), {{ui:Koko näyttö}} -painike ja {{ui:Paperi}} / {{ui:Malli}} -teemakytkin. |
| Työkalurivi | Sovelluspalkin alla | Kaikki komennot ryhmiteltyinä: {{ui:Tiedosto}}, {{ui:Vie}}, {{ui:Mittakaava}}, {{ui:Määrälaskenta}}, {{ui:Muokkaa}}, {{ui:Näytä}}. |
| Arkit | Vasemmalla | Jokainen jokaisen avoimen PDF:n sivu pikkukuvineen, mittakaavoineen ja merkintämäärineen. |
| Arkki | Keskellä | Avoin sivu. Mittaat täällä. |
| Nimikkeet | Oikealla | Määrälaskentanimikkeesi, valitun nimikkeen asetukset ja valittu merkintä. |
| Määrät | Alhaalla | Määrät ja kustannukset nimikkeittäin tai arkeittain sekä työn kokonaissumma. |
| Tilarivi | Aivan alhaalla | Reaaliaikainen mittaus, viestit, 45°:n vihje ja zoomaus. |

## Työkalurivi

Vie osoitin minkä tahansa painikkeen päälle nähdäksesi, mitä se tekee, ja sen näppäimen.

| Ryhmä | Painikkeet |
|---|---|
| {{ui:Tiedosto}} | {{ui:Uusi}} (tyhjä määrälaskenta), {{ui:Avaa piirustukset}} ({{key:Mod+O}}), {{ui:Avaa määrälaskenta}} (`.takeoff.json`-projekti), {{ui:Tallenna määrälaskenta}} ({{key:Mod+S}}) |
| {{ui:Vie}} | Yksi valikko: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Merkitty PDF}} |
| {{ui:Mittakaava}} | {{ui:Kalibroi}} ({{key:K}}), {{ui:Tarkista}} ({{key:D}}) ja {{ui:Esiasetus}}-luettelo |
| {{ui:Määrälaskenta}} | {{ui:Valitse}} ({{key:V}}), {{ui:Viiva}} ({{key:L}}), {{ui:Pinta-ala}} ({{key:A}}), {{ui:Ympyrä}} ({{key:O}}), {{ui:Kaari}} ({{key:R}}, päälle/pois-kytkin), {{ui:Vähennys}} ({{key:E}}, päälle/pois-kytkin), {{ui:Aukko}} ({{key:X}}), {{ui:Lukumäärä}} ({{key:C}}), {{ui:Automaattilaskenta}} ({{key:S}}) |
| {{ui:Muokkaa}} | {{ui:Kumoa}} ({{key:Mod+Z}}), {{ui:Tee uudelleen}} ({{key:Mod+Y}}), {{ui:Kopioi}} ({{key:Mod+C}}), {{ui:Liitä}} ({{key:Mod+V}}) sekä {{ui:Lisää}}: {{ui:Leikkaa}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Liitä samaan paikkaan}}, {{ui:Monista}}, {{ui:Poista}}, {{ui:Valitse kaikki}}, {{ui:Poista valinta}} |
| {{ui:Näytä}} | {{ui:Sovita sivu}} ({{key:F}}), {{ui:Sovita leveys}} ({{key:W}}) |

Käyttämäsi työkalu näkyy painettuna. {{ui:Kaari}}- ja {{ui:Vähennys}}-painikkeet pysyvät painettuina, kun ne ovat päällä.

## Arkit (vasemmalla)

- **Hae arkkeja** suodattaa luetteloa arkin nimen, tiedostonimen tai sivutunnisteen mukaan.
- Jokainen arkki näyttää pikkukuvan (piirretään vieritettäessä), nimensä ja joko mittakaavansa tai tekstin **Ei mittakaavaa**.
- Jokaisen rivin oikea puoli näyttää, kuinka monta merkintää arkilla on. Kun nimike on korostettuna, se näyttää sen sijaan, kuinka monta kyseisen nimikkeen merkintää arkilla on.
- Napsauta arkkia avataksesi sen. {{key:PageDown}} ja {{key:PageUp}} siirtyvät luettelon seuraavaan ja edelliseen arkkiin.
- Kun määrälaskenta kattaa PDF-tiedostoja, joita ei ole auki, luettelon alla oleva huomautus nimeää ne. Katso [Määrälaskennan tallennus ja uudelleenavaus](topic:save-and-reopen).

Arkkien nimet tulevat PDF:stä: sivutunniste, kuten `A-101`, tulee arkin nimeksi. Sivu, jolla ei ole tunnistetta, nimetään tiedostonsa ja sivunumeronsa mukaan, esimerkiksi ”Plans, page 3”. Kun useita PDF-tiedostoja on auki, tunnisteelliset arkit näyttävät myös tiedostonimen.

## Arkki (keskellä)

- Arkin alla oleva palkki näyttää arkin nimen ja mittakaavan tai tekstin ”Ei vielä mittakaavaa: valitse esiasetus tai kalibroi”. Sen painikkeet: {{ui:MarkupCraft}} (kun kyseinen sovellus voi ottaa PDF:n; katso [Määrälaskennan aloitus ja piirustussarjan avaaminen](topic:open-plan-set)), {{ui:Vertaa}} (arkin vanhempi versio tämän päällä: [Korjatun arkin vertailu](topic:compare-revisions)), ”(n) tarkistettavaa” (liputetut merkinnät, kun niitä on) ja {{ui:3D}} ([3D-tarkistusnäkymä](topic:check-in-3d)).
- Ennen kuin PDF on auki, keskellä on lyhyt viisivaiheinen opas.
- Rulla zoomaa osoittimen kohdalla. Vedä panoroidaksesi. Katso [Näppäimistö ja hiiri](topic:keyboard).
- Kun käytät {{ui:Automaattilaskenta}}-toimintoa, sen säätimillä varustettu palkki ilmestyy arkin yläreunaan.

## Nimikkeet (oikealla)

Ylhäällä on {{ui:Tarjousalue}}-luettelo: rakennus, kerros tai vaihe, johon uudet merkinnät menevät ([Tarjousalueet](topic:bid-areas)).

- {{ui:Uusi nimike}} avaa pienen lomakkeen: nimi, tyyppi ({{ui:Viiva (pituus)}}, {{ui:Pinta-ala}} tai {{ui:Lukumäärä}}) ja {{ui:Lisää}}.
- Luettelo näyttää kunkin nimikkeen värin, tyyppikuvakkeen, nimen ja määrän. Napsauta nimikettä piirtääksesi sillä ja korostaaksesi sen merkinnät jokaisella arkilla. Napsauta sitä uudelleen lopettaaksesi korostuksen.
- Luettelon alla **Nimike: (nimi)** on nimikemuokkain: nimi, tyyppi, väri, yksikkö, korkeus tai syvyys, hukka, materiaali- ja työhinnat, mitatut arvot ja {{ui:Yhdistelmä}}. Katso [Määrälaskentanimikkeiden luominen](topic:create-items).
- **Valittu merkintä** ilmestyy, kun valitset merkinnän: mihin nimikkeeseen se kuuluu, sen arkki, sen mitat sekä painikkeet, kuten {{ui:Lisää aukko}} ja {{ui:Poista merkintä}}. Kun useita merkintöjä on valittuna, siitä tulee **Valitut merkinnät**: kuinka monta kutakin nimikettä, sekä {{ui:Kopioi}}, {{ui:Monista}}, {{ui:Leikkaa}} ja {{ui:Poista merkinnät}}.
- Nimikemuokkain päättyy painikkeisiin {{ui:Kopioi nimike}} ja {{ui:Monista nimike}}: nimike yhdistelmineen ja kustannuksineen, ilman merkintöjä. Katso [Merkintöjen kopiointi, liittäminen ja monistus](topic:copy-paste).

## Määrät (alhaalla)

- {{ui:Nimikkeittäin}} luettelee jokaisen nimikkeen ja sen yhdistelmän osat määrineen, hukkineen, hintoineen ja laajennettuine kustannuksineen. Voit kirjoittaa hukan ja hinnat suoraan taulukkoon.
- {{ui:Arkeittain}} luettelee kunkin nimikkeen määrän kullakin arkilla.
- Varoitus, joka alkaa sanalla **Puutteellinen:**, ilmestyy, kun jotain on jätetty summien ulkopuolelle.
- {{ui:Työn kokonaissumma}} on otsikon oikeassa reunassa.
- Aivan oikealla oleva nuolipainike piilottaa tai näyttää taulukon antaakseen arkille lisää tilaa.

Katso [Määrien ja kustannusarvion lukeminen](topic:read-quantities).

## Tilarivi (alhaalla)

Vasemmalta oikealle: reaaliaikainen mittaus piirtäessäsi (pituus, pinta-ala, säde tai tarkistuksen tulos), {{ui:Syöte}}-ruutu, kun kirjoitat pituutta, TakeoffCraftin viestit, muistutus ”Shift tarttuu 45°:seen” (tai ”Tarttuu 45°:seen; Shift vapauttaa kulman”, kun se on päällä [Asetuksissa](topic:settings)), {{ui:Tartunta}}-painike (tartunta piirustuksen viivoihin, päällä kun korostettu; {{key:F3}}) ja zoomausprosentti.

:::tip
Lue tilarivi, kun jokin ei tapahdu. TakeoffCraft selittää siellä, miksi se hylkäsi napsautuksen, esimerkiksi ”Tällä arkilla ei ole vielä mittakaavaa”.
:::

## Muut asettelut

Kaikki yllä oleva on {{ui:CadCraft klassinen}} -asettelu, aloituspaikka. {{ui:Asetukset}} ({{key:Mod+,}}) › {{ui:Yleinen}} › {{ui:Asettelu}} tarjoaa kaksi muuta; samat työkalut ja näppäimet toimivat kaikissa kolmessa, ja kun valitset {{ui:CadCraft klassinen}} uudelleen, jokainen säädin palaa paikalleen.

| Asettelu | TakeoffCraftissa |
|---|---|
| {{ui:Valintanauha ja projektiselain}} | {{ui:Määrälaskennan valintanauha}} ylhäällä ([Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse)), palkki käynnissä olevalle työkalulle, välilehti jokaiselle avaamallesi arkille (piirustuksen Malli ja asettelut ovat myös arkkeja) ja mittakaavaesiasetukset sekä {{ui:Sovita sivu}} arkin alla. Vasemmassa paneelissa on {{ui:Ominaisuudet}} (valittu nimike, huomautus tai merkintä) {{ui:Määrälaskentaselain}}n päällä: {{ui:Arkit}} (napsauta yhtä avataksesi sen välilehdessä), {{ui:Ehdot}} (napsauta yhtä piirtääksesi sillä) ja {{ui:Kustannusarvio}} (kunkin nimikkeen summa ja työn kokonaissumma); pikkukuvat ovat sen toinen välilehti. |
| {{ui:Työkalupakki ja tietoruutu}} | Työkalurivi arkin päällä, tietoruutu, jossa on {{ui:Tarjousalue}}, käynnissä oleva työkalu tai valinta ja arkkipalkki, määrälaskentatyökalujen sarake vasemmalla, välilehti jokaiselle arkille sekä {{ui:Tartunta}} ja zoomaus arkin alla. |

Kun [3D-tarkistusnäkymä](topic:check-in-3d) on auki, arkkivälilehdet ja arkin alla oleva palkki väistyvät; sulje 3D-näkymä mitataksesi uudelleen. Puhelimessa puhelinasettelu on aina käytössä.

## Koko näyttö ja teemat

Sovelluspalkin {{ui:Koko näyttö}} -painike tai {{key:Ctrl+Shift+F}} (Control kaikilla alustoilla, myös Macilla) käy läpi normaalin, koko näytön ja koko näytön palkit piilotettuina. Kun palkit ovat piilossa, vie osoitin yläreunaan näyttääksesi ne uudelleen.

{{ui:Paperi}} on vaalea teema ja {{ui:Malli}} tumma. {{ui:Malli}}-teemassa piirustus näytetään käännettynä (vaaleat viivat tummalla) vain näytöllä; viennit eivät koskaan muutu.
