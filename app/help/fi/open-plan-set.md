---
title: Aloita määrälaskenta ja avaa piirustussarja
summary: Avaa yksi tai useampi PDF piirustussarjana, löydä tiesi arkkien välillä ja siirry niiden välillä.
keywords: avaa, piirustussarja, useita PDF-tiedostoja, useita tiedostoja, arkit, piirustukset, sivutunnisteet, arkkiluettelo, siirtyminen, pudota, luovutus, avaa toisessa sovelluksessa, merkintä
from: ed434468
---

Piirustussarja on usein useita PDF-tiedostoja: arkkitehtuuri-, rakenne- ja LVI-piirustuksia. TakeoffCraft avaa ne rinnakkain yhtenä arkkilistana, ja yksi määrälaskenta voi kattaa kaikki.

## Avaa PDF-tiedostot

1. Valitse {{ui:Avaa piirustukset}} ryhmästä {{ui:Tiedosto}}, tai paina {{key:Mod+O}}. (Muut valikkotyylit kutsuvat sitä nimellä {{ui:Avaa PDF-tiedostoja…}}.)
2. Valitse tiedostoikkunasta jokainen sarjan PDF. Pidä {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} pohjassa valitaksesi useita, tai {{key:Shift}} valitaksesi alueen.
3. Valitse Avaa.
   Viesti ”Avataan (nimi)…” näkyy, kun kukin tiedosto luetaan. Sitten jokainen sivu ilmestyy kohtaan {{ui:Arkit}}, ja ensimmäisen uuden PDF:n ensimmäinen sivu avautuu.

Voit myös vetää PDF-tiedostot kohteesta {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}} ja pudottaa ne minne tahansa TakeoffCraftiin. Vetäessäsi ilmestyy kehys ”Pudota PDF-tiedostoja, DWG- tai DXF-piirustuksia tai .takeoff.json-tiedosto”.

Lisätäksesi PDF-tiedostoja myöhemmin, toimi samoin uudelleen. Jo avoimet PDF-tiedostot ohitetaan.

Aloitusnäytössä luetellaan myös äskettäin avaamasi PDF-tiedostot ja määrälaskennat selaimissa, jotka antavat sivun avata tiedoston uudelleen (Chrome ja Edge). Napsauta yhtä avataksesi sen; selain voi ensin pyytää lupaa. Katso [Tiedostosi](common:your-files).

:::note
Mitään ei lähetetä. Selain lukee PDF-tiedostot tietokoneeltasi, ja ne poistuvat TakeoffCraftista, kun suljet välilehden tai valitset {{ui:Uusi}}.
:::

## Piirustukset PDF-tiedostojen rinnalla

{{ui:Avaa piirustukset}} ottaa myös DWG- ja DXF-piirustuksia, yksinään tai PDF-tiedostojen kanssa: jokaisen piirustuksen mallitila ja asettelut tulevat arkeiksi samaan luetteloon. Katso [Avaa DWG- tai DXF-piirustus](topic:open-a-drawing), ja sen jälkeen [Laske piirustuksesta](topic:count-from-a-drawing).

## PDF, joka on siirretty toisesta sovelluksesta

Jokin muu sovellus tästä sarjasta voi luovuttaa sinulle avoinna olevan PDF:n: se avaa TakeoffCraftin uudessa välilehdessä, ja PDF avautuu siellä ikään kuin olisit pudottanut sen. Tilarivi kertoo ”Avattu (nimi), luovutettu sovelluksesta (sovellus). Alkuperäinen tiedosto on muuttumaton.” Mitään ei lähetetä; tiedosto kulkee tämän selaimen oman tallennuksen kautta ja poistuu siitä, kun se on avattu.

Jos tilarivi sanoo, että PDF ”ei saapunut”, välilehti odotti liian kauan tai PDF oli jo avattu toisessa välilehdessä: avaa se valinnalla {{ui:Avaa piirustukset}}.

Päinvastoin: kun MarkupCraft on käynnissä siellä, missä olet, ja voi ottaa tiedoston vastaan, piirustuksen alla olevassa arkkipalkissa on {{ui:MarkupCraft}}-painike: se avaa näytöllä olevan arkin PDF:n MarkupCraftissa uudessa välilehdessä tarkastettavaksi ja merkittäväksi.

## Etsi arkki

- Vieritä vasemmalla olevaa {{ui:Arkit}}-luetteloa ja napsauta arkkia.
- Kirjoita luettelon yläreunassa olevaan kenttään **Hae arkkeja** suodattaaksesi arkkinumeron, tiedostonimen tai sivutunnisteen mukaan. {{ui:Arkit}}-otsikon vieressä oleva luku näyttää ”3 / 40” suodattimen ollessa päällä.
- Paina {{key:PageDown}} seuraavaan arkkiin ja {{key:PageUp}} edelliseen. Ne seuraavat luetteloa suodatettuna.

:::mac
Macin näppäimistössä ilman Page Up- ja Page Down -näppäimiä paina fn-näppäintä yhdessä ylä- tai alanuolen kanssa.
:::

## Arkkien nimeäminen

- Sivu, jolle PDF antaa tunnisteen, kuten `A-101`, saa nimekseen tuon tunnisteen.
- Sivu ilman tunnistetta (tai tunniste on pelkkä sivunumero) saa nimen ”(tiedostonimi), sivu (n)”.
- Kun useita PDF-tiedostoja on auki, tunnisteelliset arkit kantavat myös tiedostonimen: ”A-101 — Architectural”.

Arkkien nimiä ei vielä voi kirjoittaa käsin.

## Tutki arkkia

- Käännä hiiren rullaa zoomataksesi osoittimen kohdalla.
- Vedä vasemmalla tai keskipainikkeella panoroidaksesi. Automaattilaskennan aikana tai kun aloitat merkin kulmasta, pidä {{key:Space}} pohjassa vetäessäsi, tai vedä keskipainikkeella.
- Paina {{key:F}} tai valitse {{ui:Sovita sivu}} nähdäksesi koko arkin; {{key:W}} tai {{ui:Sovita leveys}} sovittaa sen leveyden.
- Paina {{key:Plus}} tai {{key:=}} zoomataksesi sisään ja {{key:Minus}} ulos näkymän keskikohdan ympärillä.

Jokainen arkki muistaa oman zoominsa ja sijaintinsa, kun se pysyy auki.

## Seuraavaksi

Ennen kuin voit mitata arkin, sille tarvitaan mittakaava: [Aseta mittakaava](topic:set-the-scale).
