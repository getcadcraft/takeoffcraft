---
title: Kopioi, liitä ja monista merkinnät
summary: Kopioi merkinnät nimikkeineen, liitä ne siihen kohtaan, johon napsautat, tai samaan paikkaan toiselle arkille, monista, leikkaa, poista ja valitse kaikki, kukin yhdellä kumoamisaskeleella.
keywords: kopioi, liitä, leikkaa, monista, liitä samaan paikkaan, leikepöytä, valitse kaikki, poista valinta, useita merkintöjä, tyypillinen kerros, toista, sama piirustus, toinen arkki, kopioi nimike, monista nimike
from: e20e9024
---

Työkalurivin {{ui:Muokkaa}}-ryhmässä ovat {{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}} ja {{ui:Liitä}}. Sen {{ui:Lisää}}-valikossa on loput, kukin pikanäppäimineen: {{ui:Leikkaa}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Liitä samaan paikkaan}}, {{ui:Monista}}, {{ui:Poista}}, {{ui:Valitse kaikki}} ja {{ui:Poista valinta}}. Jokainen niistä on yhden askeleen kumottavissa näppäimellä {{key:Mod+Z}}.

## Valitse merkinnät

1. Valitse {{ui:Valitse}} ({{key:V}}) ja napsauta merkintää.
2. Lisää merkintöjä pitämällä {{key:Shift}} pohjassa ja napsauttamalla. {{key:Shift}} + napsautus valitussa merkinnässä poistaa sen valinnasta.
3. Tai paina {{key:Mod+A}} ({{ui:Valitse kaikki}}) ottaaksesi kaikki merkinnät avoimelta arkilta.

Kun useita merkintöjä on valittu, oikea paneeli näyttää **Valitut merkinnät**: kunkin nimikkeen määrän sekä painikkeet {{ui:Kopioi}}, {{ui:Monista}}, {{ui:Leikkaa}} ja {{ui:Poista merkinnät}}. Kulmakahvat näkyvät vain, kun yksi merkintä on valittu. {{key:Esc}} ({{ui:Poista valinta}}) tyhjentää valinnan.

## Kopioi ja liitä napsautettuun kohtaan

1. Valitse merkinnät ja paina {{key:Mod+C}} ({{ui:Kopioi}}). Merkinnät kopioidaan nimikkeineen, mukaan lukien kunkin nimikkeen yhdistelmä, hukka ja kustannukset.
2. Siirry arkille, jolle haluat ne (se voi olla sama arkki).
3. Paina {{key:Mod+V}} ({{ui:Liitä}}). Katkoviivainen kopio seuraa osoitinta.
4. Napsauta kohtaa, johon ne menevät. Kopioitujen merkintöjen keskikohta osuu osoittimeen.

{{key:Esc}} peruuttaa eikä lisää mitään. Liitetyt merkinnät valitaan sen jälkeen, joten {{key:Delete}} tai {{key:Mod+Z}} poistaa ne.

Saman määrälaskennan sisällä liitetyt merkinnät kuuluvat **samoihin nimikkeisiin**, joten niiden määrät lisätään niille. Toisessa määrälaskennassa (toisella välilehdellä tai {{ui:Uusi}}-toiminnon jälkeen) käytetään nimikettä, jolla on sama nimi ja tyyppi; muuten nimike lisätään yhdistelmineen. Jos nimi on jo toisentyyppisen nimikkeen käytössä, lisätty nimike saa nimen "(nimi) (kopio)".

Liitetyt merkinnät menevät tarjousalueeseen, joka on valittu {{ui:Nimikkeet}}-paneelin yläosassa (tai ei mihinkään). Katso [Tarjousalueet](topic:bid-areas).

## Liitä samaan paikkaan

{{key:Mod+Shift+V}} ({{ui:Liitä samaan paikkaan}}) asettaa kopion täsmälleen samaan kohtaan avoimella arkilla, sijaintinsa mukaan sivulla. Käytä sitä tyypillisille kerroksille: määritä kerros 2, kopioi, avaa kerros 3 ja liitä samaan paikkaan.

Liitä samaan paikkaan vaatii arkin, jonka **koko on sama** kuin kopioidun arkin. Eri kokoisella arkilla TakeoffCraft kertoo sen eikä liitä mitään; käytä sen sijaan {{ui:Liitä}}-toimintoa ja napsauta. Arkilla, josta kopioit, kopio osuu alkuperäisten päälle.

## Mittakaavan on täsmättävä

Pituudet ja pinta-alat riippuvat arkin mittakaavasta. Viiva, joka mittaa 10' mittakaavassa 1/4" = 1'-0", mittaisi 20' arkilla mittakaavassa 1/8" = 1'-0". Siksi TakeoffCraft liittää viivat ja pinta-alat vain arkille, jonka **mittakaava on sama** kuin arkilla, josta ne tulivat, ja sanoo selvästi, jos ei ole:

- Avoimella arkilla ei ole vielä mittakaavaa: anna sille ensin mittakaava ([Aseta mittakaava](topic:set-the-scale)), liitä sitten.
- Avoimella arkilla on eri mittakaava: viesti nimeää molemmat mittakaavat. Liitä arkille, jolla on sama mittakaava.
- Lukumäärät eivät tarvitse mittakaavaa: kopioidut lukumäärät liitetään mihin tahansa.

## Monista

{{key:Mod+D}} ({{ui:Monista}}) kopioi valitut merkinnät ja asettaa kopion heti osoittimen kohdalle; napsauta, mihin se menee. Mitään ei lisätä ennen kuin napsautat, ja {{key:Esc}} ei jätä mitään. Monistaminen ei muuta sitä, mitä {{ui:Liitä}} liittää.

## Leikkaa ja poista

- {{key:Mod+X}} ({{ui:Leikkaa}}) kopioi valitut merkinnät ja poistaa ne. Liitä ne sinne, minne ne kuuluvat, tai kumoa leikkaus.
- {{key:Delete}} tai {{key:Backspace}} ({{ui:Poista}}) poistaa valitut merkinnät kopioimatta niitä.

## Kopioi nimike

Nimikkeen muokkausikkuna (kohdassa **{{ui:Nimikkeet}}**) päättyy kohtiin:

- {{ui:Kopioi nimike}}: kopioi nimikkeen yhdistelmineen, hukkineen ja kustannuksineen ilman merkintöjä. {{ui:Liitä}} lisää sitten kopion tähän määrälaskentaan tai toiseen.
- {{ui:Monista nimike}}: lisää kopion heti nimellä "(nimi) (kopio)".

:::tip
Kopio pysyy tällä tietokoneella: se säilytetään tässä välilehdessä ja selaimen tallennustilassa, joten toinen TakeoffCraft-välilehti voi liittää sen. Mitään ei lähetetä, eikä järjestelmän leikepöytää käytetä, joten merkintöjä ei voi liittää muihin ohjelmiin.
:::

:::note
Kopio tulee kerrallaan yhdeltä arkilta. Merkinnät liitetään sellaisina kuin ne ovat: kopiota ei voi vielä kiertää tai peilata.
:::
