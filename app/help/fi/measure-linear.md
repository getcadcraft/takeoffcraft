---
title: Mittaa viivaketjut
summary: Ota seinät, putket, listat ja muut pituudet viivaketjuina, joissa on suoria jänteitä, kaaria ja Shift-näppäimen 45 asteen tartunta.
keywords: viiva, pituus, viivaketju, monikulmio, seinät, lf, lineaarijalka, kaari, käyrä, 45 astetta, ortogonaali, tartunta, jänteet, polypituus, vähennys, aukko, ovi, rako, syöte, kirjoitettu, koordinaatit, etäisyys, suora etäisyys, napa
from: c669deff
---

Viivanimike mittaa pituuden. Jokainen viivaketju on pisteiden ketju: suoria jänteitä ja kaaria, kun kaaritila on päällä. Nimikkeessä voi olla mielivaltainen määrä viivaketjuja millä tahansa määrällä arkkeja.

Ennen aloittamista: arkille tarvitaan mittakaava ([Aseta mittakaava](topic:set-the-scale)) ja sinulla on oltava viivanimike ([Luo määrälaskennan nimikkeitä](topic:create-items)).

Vektori-PDF:ssä napsautuksesi tarttuvat piirustuksen omiin viivoihin: päihin, keskipisteisiin ja risteyksiin ([Tartunta piirustuksen viivoihin](topic:snap-to-the-drawing); {{key:F3}} kytkee sen pois).

## Piirrä viivaketju

1. Napsauta viivanimikettä kohdassa {{ui:Items}}.
2. Valitse työkalurivistä {{ui:Linear}} tai paina {{key:L}}.
3. Napsauta viivaketjun alkua.
4. Napsauta jokaista kulmaa sen varrella.
   Tilarivillä näkyvät "Pituus" (viivaketju tähän asti osoittimeen asti) ja "jänne" (piirrettävä jänne) jalkoina ja tuumina.
5. Viimeistele viivaketju: kaksoisnapsauta viimeistä pistettä, paina {{key:Enter}} tai napsauta hiiren oikealla painikkeella.
   Viivaketju piirretään nimikkeen värillä, ja siitä tulee valittu merkintä. Nimikkeen pituus kohdassa {{ui:Items}} ja {{ui:Quantities}}-taulukossa kasvaa.

Työkalu pysyy {{ui:Linear}}-tilassa, joten voit aloittaa seuraavan viivaketjun heti. Paina {{key:Esc}} palataksesi {{ui:Select}}-työkaluun.

Piirtäessä:

- {{key:Backspace}} (tai {{key:Delete}}) poistaa viimeisen pisteen.
- {{key:Esc}} hylkää keskeneräisen viivaketjun.
- Vetäminen panoroi arkkia ja rulla zoomaa lisäämättä pisteitä.

:::mac
Macin kosketuslevyllä hiiren oikea napsautus on kaksisormennapsautus (ota toissijainen napsautus käyttöön macOS:n Järjestelmäasetuksissa kohdassa Kosketuslevy). TakeoffCraft lukee vain toissijaisen painikkeen, joten Control-napsautus voidaan tulkita tavalliseksi napsautukseksi ja lisätä piste. Kaksoisnapsautus tai {{key:Enter}} viimeistelee aina.
:::

:::touch
Kosketusnäytöllä napauta asettaaksesi pisteitä, vedä yhdellä sormella panoroidaksesi ja nipistä kahdella sormella zoomataksesi. Viimeistele pitkällä painalluksella, kaksoisnapautuksella tai valitsemalla arkin alla olevasta palkista {{ui:Finish}} ({{ui:Back}} palauttaa viimeisen pisteen). Katso [Vianmääritys](topic:troubleshooting#touch-screens).
:::

## Suorat viivat 45 asteen askelin

Pidä {{key:Shift}} pohjassa asettaessasi pistettä. Jänne edellisestä pisteestä tarttuu lähimpään 0°-, 45°-, 90°- tai 135°-suuntaan ja säilyttää pituuden, jonka vedit sitä pitkin. Tilarivi muistuttaa: "Shift snaps to 45°" on suomeksi "Shift tartuttaa 45°:een".

Kaaritilassa tämä koskee kaaren päätepistettä: kaaren jänne menee 45 asteen askelin siitä kohdasta, josta se alkaa. Käyrällä napsauttamaasi pistettä ei koskaan tartuteta.

## Kaaret ja kaarevat seinät

1. Piirtäessäsi viivaketjua aseta piste, josta käyrä alkaa.
2. Kytke kaaritila päälle: valitse työkalurivistä {{ui:Arc}} tai paina {{key:R}}. Painike pysyy painettuna.
3. Napsauta mitä tahansa käyrän pistettä, jossain sen keskivaiheilla.
   Tilarivi lisää "(kaari: napsauta, mihin se päättyy)", ja esikatselu taipuu pisteesi kautta.
4. Napsauta kohtaa, jossa käyrä päättyy.
   Kaari lisätään. Sen pituus on tarkka kaaren pituus, ei joukko lyhyitä jänteitä.
5. Jatka kaarien piirtämistä napsauttamalla seuraavaa käyrää ja sen päätettä, tai paina {{key:R}} uudelleen palataksesi suoriin jänteisiin.

{{key:Backspace}} tai {{key:Esc}} hylkää ensin odottavan pisteen käyrällä; paina uudelleen poistaaksesi pisteitä tavalliseen tapaan.

## Kirjoita pituuksia ja koordinaatteja

Ensimmäisen pisteen jälkeen voit kirjoittaa, mihin seuraava piste menee, sen sijaan että napsauttaisit. Kirjoita numero, `@` tai `#`: tilarivillä aukeaa {{ui:Type}}-ruutu, jossa on kirjoittamasi. Paina {{key:Enter}} asettaaksesi pisteen; ruutu pysyy auki seuraavaa varten.

| Syöte | Seuraava piste menee |
|---|---|
| `12'6"` | 12'-6" edellisestä pisteestä kohti osoitinta (osoita suunta ja kirjoita sitten pituus) |
| `12'6"<45` | 12'-6" 45°:n kulmassa, laskettuna vastapäivään näytön oikeasta reunasta (`<90` on ylös, `<-90` alas) |
| `@6',-4'` | 6' oikealle ja 4' alas edellisestä pisteestä |
| `6',4'` (tai `#6',4'`) | 6' oikealle ja 4' ylös tämän viivaketjun ensimmäisestä pisteestä |

Pituudet kirjoitetaan kuten kaikkialla TakeoffCraftissa ([Syötön muodot](topic:entry-formats)): `12'-6 1/2"`, `12.5` (jalkoina), `30"`, `3.2 m`. "Oikealle" ja "ylös" tarkoittavat sitä, miten näet arkin, myös kun PDF-sivua käännetään.

{{key:Enter}} tyhjällä ruudulla viimeistelee viivaketjun kuten {{key:Enter}} arkilla; {{key:Esc}} sulkee ruudun ja pitää viivaketjun käynnissä. Kirjoitetut pisteet kulkevat samojen sääntöjen läpi kuin napsautukset: vähennykset, kaaret ja alueen sulkeminen toimivat kaikki. Sama ruutu toimii {{ui:Area}}- ja {{ui:Cut-out}}-työkaluissa; ympyrän keskipisteen jälkeen se ottaa säteen.

## Vähennä osa viivaketjusta

Seinäviivaketju, joka kulkee oven tai liikkeen julkisivun ohi, voidaan piirtää suoraan läpi, ja silti lasketaan vain seinä: aukon yli menevät jänteet ovat **vähennyksiä**. Ne piirretään ohuena katkoviivana, eikä niitä lasketa.

Piirtäessäsi:

1. Aseta piste, josta aukko alkaa.
2. Valitse työkalurivistä {{ui:Deduct}} tai paina {{key:E}}. Painike pysyy painettuna, ja tilarivi kertoo, että seuraavat jänteet ovat vähennyksiä.
3. Napsauta kohtaa, johon aukko päättyy. Jänne piirretään katkoviivalla; "Pituus" tilarivillä jättää sen pois.
4. Paina {{key:E}} uudelleen ja jatka seinää pitkin.

Piirtämisen jälkeen: valitse viivaketju. **Valittu merkintä** -kohdassa jokaisella jänteellä on {{ui:Deduct}}-ruutu: ruksaa se vähentääksesi jänteen, poista ruksi laskeaksesi sen uudelleen. Jokainen muutos on yksi kumoamisaskel.

Viivaketjussa on aina vähintään yksi laskettava jänne. Paneelissa näkyvät **Vähennykset** (vähennetty pituus) ja **Piirretty** (koko viivaketju); **Pituus**, nimikkeen määrä, seinäpinta-ala ja kustannukset käyttävät pituutta ilman vähennyksiä. 3D-tarkastusnäkymä jättää seinään aukon, merkitty PDF piirtää vähennykset katkoviivalla, ja viedyssä **Merkinnät**-taulukossa ne luetellaan.

Viivaketjun siirtäminen kulmaa siirron yhteydessä säilyttää vähennykset. Pisteiden lisääminen tai poistaminen (piirtämällä viivaketju uudelleen) aloittaa ilman niitä.

## Katso viivaketjun tiedot

Valitse {{ui:Select}} ({{key:V}}) ja napsauta viivaketjua. Oikealla **Valittu merkintä** näyttää:

- nimikkeen, johon se kuuluu (valitse toinen viivanimike luettelosta siirtääksesi viivaketjun sinne),
- arkin,
- **Pituuden** jalkoina ja tuumina sekä LF-yksikössä,
- **Jänteiden** määrän ja **Seinäpinta-alan**, kun nimikkeelle on annettu korkeus,
- jokaisen jänteen pituuden, jonka perässä on "(kaari)" kaarien kohdalla, ja sen {{ui:Deduct}}-ruudun.

Arkilla valitun viivaketjun jokainen jänne on merkitty pituudellaan.

## Korjaa viivaketju

- **Siirrä pistettä**: valitse viivaketju ja vedä yhtä neliönmuotoista kulmakahvaa. Pidä {{key:Shift}} pohjassa tartuttaaksesi siirretyn jänteen 45 asteen askeliin. Kaari säilyttää pullistumansa.
- **Taivuta kaarta**: valittu viivaketju näyttää pyöreän kahvan jokaisen kaaren keskellä. Vedä sitä: kaari kulkee kohdan kautta, johon päästät irti, joten se kaartuu enemmän, vähemmän tai toiseen suuntaan. Jos vedät sen päiden välisen suoran viivan päälle, siitä tulee suora jänne. {{key:Mod+Z}} kumoaa sen ("Bend arc" on suomeksi "Taivuta kaarta").
- **Poista viivaketju**: valitse se ja paina {{key:Delete}}, valitse {{ui:Delete}} työkalurivin {{ui:More}}-valikosta tai {{ui:Delete mark}} paneelista.
- **Kumoa**: {{key:Mod+Z}}; tee uudelleen {{key:Mod+Y}}.

Viivaketjun keskelle ei voi vielä lisätä pistettä. Poista viivaketju ja piirrä se uudelleen.

## Seinäpinta-ala

Anna viivanimikkeelle {{ui:Height}} (esimerkiksi `9'-0"`). Se raportoi sitten **Seinäpinta-alan (A)** = pituus × korkeus, SF-yksikössä (tai m² metrisessä nimikkeessä), ja seinäpinta-ala menee taulukkoviennin huomautussarakkeeseen. Käytä sitä yhdistelmissä levyille, maalille tai eristeelle: katso [Yhdistelmät ja kaavat](topic:assemblies).
