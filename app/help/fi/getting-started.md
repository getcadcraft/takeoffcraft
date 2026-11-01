---
title: TakeoffCraftin aloitusopas
summary: Mitä TakeoffCraft tekee, missä se toimii ja ensimmäinen mitattu ja hinnoiteltu nimike PDF-piirustussarjasta.
keywords: aloitus, ensimmäinen määrälaskenta, pikaopas, johdanto, kustannusarvio, määrälaskenta, piirustussarja, pdf
from: 3b9da1fb
---

TakeoffCraft mittaa piirustussarjoja, PDF- ja DWG- tai DXF-piirustuksia, ja muuttaa mittaukset hinnoitelluksi kustannusarvioksi. Avaat tiedostot (piirustus lasketaan suoraan sen lohkoista: katso [DWG- tai DXF-piirustuksen avaaminen](topic:open-a-drawing)), annat jokaiselle arkille mittakaavan (piirustus tuo omansa), teet **nimikkeitä** (seinätyyppi, lattiapinnoite, kaluste) ja napsautat arkkeja ottaaksesi ne määrälaskentaan. Määrät, kustannukset ja työn kokonaissumma päivittyvät sitä mukaa. Voit viedä kustannusarvion taulukkona ja kopion PDF-tiedostoista, joihin määrälaskentasi on piirretty.

Jos olet tehnyt määrälaskentaa muilla ohjelmilla, lue seuraavaksi [Jos tulet muista määrälaskentaohjelmista](topic:coming-from). Jotkin asiat toimivat täällä eri tavalla.

## Missä se toimii

TakeoffCraft toimii verkkoselaimessasi. Avaa TakeoffCraft ja näyttö on heti valmis; mitään ei tarvitse asentaa.

- **PDF-tiedostosi pysyvät tietokoneellasi.** Selain avaa ne eikä niitä koskaan lähetetä minnekään. Tallennus on lataus.
- Se toimii tuoreissa Chromessa, Edgessä, Firefoxissa ja Safarissa. Katso [Selaimet ja tietokoneet](common:browsers).
- Se toimii ilman internetyhteyttä, kun valitset sovelluspalkista {{ui:Tallenna offline-käyttöön}} ja siinä lukee {{ui:Offline valmis}}. Katso [Offline-työskentely](common:offline).
- Pilvitallennus ei ole vielä käytettävissä. Työpöytäsovelluksena TakeoffCraft tulee CadCraft Studiossa muiden seitsemän sovelluksen kanssa.

## Ensimmäinen määrälaskentasi kymmenessä vaiheessa

Tämä läpikäynti mittaa yhden seinätyypin ja hinnoittelee sen. Siihen menee muutama minuutti millä tahansa piirustuksella.

1. Valitse {{ui:Avaa piirustukset}} työkalurivin {{ui:Tiedosto}}-ryhmästä (tai paina {{key:Mod+O}}), valitse yksi tai useampi PDF ja valitse Avaa. Voit myös pudottaa PDF-tiedostot mihin tahansa sivulla.
   Arkit ilmestyvät vasemmalle ja ensimmäinen arkki avautuu keskelle.
2. Etsi arkin painettu mittakaava sen piirustusotsikosta tai piirustuksen otsikon alta.
3. Avaa {{ui:Esiasetus}}-luettelo {{ui:Mittakaava}}-ryhmässä ja valitse kyseinen mittakaava, esimerkiksi `1/4" = 1'-0"`.
   Arkin alareunan palkki sanoo nyt ”Mittakaava 1/4" = 1'-0"”.
4. Valitse {{ui:Tarkista}} (tai paina {{key:D}}) ja napsauta piirustukseen painetun mitan kahta päätä.
   Tilarivin vasemmassa alakulmassa oleva lukema pitäisi vastata painettua mittaa. Jos ei vastaa, katso [Mittakaavan asettaminen](topic:set-the-scale).
5. Valitse oikealla olevassa {{ui:Nimikkeet}}-paneelissa {{ui:Uusi nimike}}, kirjoita nimi, kuten `Interior wall type A`, jätä tyypiksi {{ui:Viiva (pituus)}} ja valitse {{ui:Lisää}}.
6. Valitse {{ui:Viiva}} työkaluriviltä (tai paina {{key:L}}).
7. Napsauta seinän alkua ja sitten jokaista sen varrella olevaa kulmaa. Kaksoisnapsauta, paina {{key:Enter}} tai napsauta hiiren oikealla painikkeella päättääksesi vedon.
   Veto piirretään nimikkeen värillä ja sen pituus ilmestyy nimikkeen viereen.
8. Kirjoita nimikemuokkaimessa {{ui:Nimikkeet}}-kohdan alla `9'-0"` kenttään {{ui:Korkeus}}, `0.85` kenttään {{ui:Materiaali $/LF}} ja `1.20` kenttään {{ui:Työ $/LF}}.
   Alareunan {{ui:Määrät}}-taulukko näyttää pituuden, laajennetun materiaalin ja työn sekä {{ui:Työn kokonaissumman}}.
9. Valitse {{ui:Tallenna määrälaskenta}} (tai paina {{key:Mod+S}}).
   Selaimesi lataa `.takeoff.json`-tiedoston. Se sisältää nimikkeesi, mittakaavasi ja merkintäsi, ja avautuu uudelleen samojen PDF-tiedostojen päälle.
10. Avaa työkalurivin {{ui:Vie}}-valikko ja valitse {{ui:XLSX}} ladataksesi kustannusarvion taulukkona.

:::tip
Paina {{key:Esc}} pysäyttääksesi sen, mitä olet tekemässä, ja palataksesi {{ui:Valitse}}-työkaluun. {{key:Mod+Z}} kumoaa minkä tahansa muutoksen.
:::

## Mitä lukea seuraavaksi

- [TakeoffCraftin näyttö](topic:workspace) nimeää ikkunan jokaisen osan.
- [Määrälaskennan aloitus ja piirustussarjan avaaminen](topic:open-plan-set) kattaa useat PDF-tiedostot ja arkkiluettelon.
- [Määrälaskentanimikkeiden luominen](topic:create-items) selittää tyypit, yksiköt, hukan ja hinnat.
- [Yhdistelmät ja kaavat](topic:assemblies) muuttaa yhden mittauksen tolpiksi, levyiksi ja muuksi.
- [Näppäimistö ja hiiri](topic:keyboard) luettelee jokaisen näppäimen.
