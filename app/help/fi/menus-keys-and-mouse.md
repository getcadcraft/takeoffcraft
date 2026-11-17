---
title: Valikot, näppäimet ja hiiri
summary: Valitse valikkotyyli, joka vastaa tapaasi työskennellä, anna mille tahansa komennolle oma näppäin, siirrä komentoja valikoiden välillä ja määritä, mitä rulla ja hiiren painikkeet tekevät.
keywords: valikkotyyli, valikot, valikkopalkki, valintanauha, valintanauhan välilehdet, työkalurivi, pikanäppäimet, näppäimet, mukauta, uudelleenmääritys, hiiri, rulla, käännä, zoomauksen suunta, keskipainike, oikea painike, panoroi, vienti, tuonti, vaihtaminen, tuttu, määrälaskentapöytä, ehdot
from: f01f0d6d
---

TakeoffCraftin komennot ovat samat, mistä tahansa niitä käyttää. **Valikkotyyli** päättää vain, missä ne näkyvät näytöllä, mitä niitä kutsutaan siellä ja mitkä näppäimet ne käynnistävät. Valitse se kohdasta {{ui:Settings}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}. Muutos on heti voimassa, ja tämä selain muistaa sen.

## Kolme tyyliä

| Tyyli | Mitä saat |
|---|---|
| {{ui:TakeoffCraft}} | TakeoffCraftin oma työkalurivi: Tiedosto, Vie, Mittakaava, Määrälaskenta, Muokkaa ja Näytä, yksikirjaimisin työkalunäppäimin. Lähtökohta. |
| {{ui:Takeoff desk}} | Valikkopalkki ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Items}}, {{ui:Markup}}, {{ui:Export}}) yhden rivin määrälaskentatyökalujen yläpuolella, niin kuin näytöllä toimivat määrälaskentaohjelmat ne asettelevat. Nimikkeitä kutsutaan rivillä ehdoiksi. Samat näppäimet, ja lisäksi {{key:N}} uutta nimikettä varten. Mittakaavan esiasetukset siirtyvät arkkipalkkiin arkin mittakaavan viereen. |
| {{ui:Takeoff ribbon}} | Valintanauhan välilehdet, nimetty työn mukaan: {{ui:Takeoff}} (mittaa, muoto, mittakaava, piirustuksesta, ehdot), {{ui:Edit}}, {{ui:View}}, {{ui:Markup}} ja {{ui:Estimate}} (työkirja, merkityt PDF-tiedostot, tarjous), sekä {{ui:File}}-valikko ja pikarivi avaamiseen, tallentamiseen, kumoamiseen ja uudelleen tekemiseen. Päivittäin käytettävät työkalut ovat isoja, niiden naapurit pieniä ja pinottuina. Samat näppäimet; mittakaavan esiasetukset siirtyvät arkkipalkkiin. |

Kaikki kolme tyyliä säilyttävät TakeoffCraftin näppäimet: {{key:V}} valitse, {{key:L}} viiva, {{key:A}} pinta-ala, {{key:O}} ympyrä, {{key:B}} huone, {{key:P}} polku (valitse PDF:n viivat), {{key:X}} aukko, {{key:C}} lukumäärä, {{key:S}} automaattilaskenta, {{key:K}} kalibroi, {{key:D}} tarkista, {{key:R}} kaaritila, {{key:E}} vähennystila, {{key:F}} ja {{key:W}} sovittamiseen, {{key:3}} 3D-tarkastusnäkymä, {{key:F3}} tartunta sekä {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} ja {{key:Mod+A}}.

Arkkipalkin työkalut (huomautukset, pilvet, korostukset, Vertaa ja 3D) odottavat, että PDF on auki; jos valitset ne ennen sitä, tilarivi kertoo siitä.

:::tip
Näppäin, joka kuuluu TakeoffCraftin omaan asetteluun mutta jonka tyylisi on antanut toiselle komennolle, ei tee mitään, ja tilarivi kertoo, minne sen komento siirtyi ("In My keys, Count is Ctrl+Alt+C" on suomeksi "Omat näppäimet: Lukumäärä on Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nuolinäppäimet säilyttävät aina merkityksensä. Kun piirrät viivaketjua tai ääriviivaa, liität tai tarkistat automaattilaskennan, kirjaimet ja pituuden numerot pysyvät piirustuksen käytössä.
:::

## Tee siitä omasi

1. Valitse tyyli, joka on lähimpänä haluamaasi, ja napsauta {{ui:Customize…}}.
2. Kohdassa {{ui:Keys and menus}} etsi komento (hakukentästä on apua). Napsauta {{ui:Add a key}} ja paina näppäintä, tai kahta näppäintä peräkkäin kaksikirjaimista näppäintä varten. Napsauta näppäintä poistaaksesi sen.
3. Valikkopalkilla {{ui:Where it sits}} siirtää komennon toiseen valikkoon tai kohtaan {{ui:Keys only}}.
4. Kohdassa {{ui:Mouse}} määritä rulla ja painikkeet, jotka panoroivat arkkia.
5. Anna sille nimi ja napsauta {{ui:Save}}.

Sisäänrakennetun tyylin tallentaminen tekee oman kopion ("My Takeoff desk" on suomeksi "Oma Määrälaskentapöytä"); sisäänrakennettu tyyli ei muutu koskaan. Näppäin, joka on annettu kahdelle komennolle, näkyy punaisena, ja se on korjattava ennen tallentamista.

## Hiiri

- **Hiiren rulla**: {{ui:Scroll up zooms in}} (lähtökohta) tai {{ui:Scroll up zooms out}}, ja kuinka nopeasti. Kosketuslevyn nipistys zoomaa aina sormien liikkeen suuntaan.
- **Panoroi arkkia**: keskipainikkeella, oikealla painikkeella tai molemmilla. Vasemmalla vetäminen tyhjällä paperilla ja {{key:Space}} vetämisen kanssa panoroivat aina; oikea napsautus ilman vetämistä viimeistelee aina viivaketjun tai ääriviivan.
- **Vedä 3D-näkymissä**: {{ui:Each view's own}} säilyttää 3D-tarkastusnäkymän painikkeet (vasen ja keski kiertää, oikea panoroi). Tai aseta keski- ja oikea painike kiertämään, panoroimaan, zoomaamaan tai ei mitään; {{key:Shift}} painettuna vaihtaa kiertämisen ja panoroinnin. Vasen painike kiertää ja valitsee aina.

## Vie mukanasi

{{ui:Export}} tallentaa käytössä olevan tyylin pieneen `.ccinput.json`-tiedostoon; {{ui:Import…}} lisää sellaisen toisesta tietokoneesta tai kollegalta. Tuotu tiedosto voi viitata vain TakeoffCraftin omiin komentoihin: kaikki muu siinä jätetään pois ja lasketaan tilariville. {{ui:Delete this style}} poistaa yhden omista tyyleistäsi.

:::note
Nämä asetukset pysyvät tässä selaimessa. {{ui:Use this style in every app}} tyylikorttien alla saa jokaisen sovelluksen avautumaan vastaavassa tyylissään (oma työkalurivi, valikkopalkki tai valintanauha), jokaisen sovelluksen omilla muutoksilla. TakeoffCraftissa ei ole tyyliä, jossa on komentorivi: kun sellainen valitaan kaikille sovelluksille, TakeoffCraft säilyttää oman työkalurivinsä.

{{ui:Takeoff ribbon}} on myös {{ui:Ribbon and project browser}} -asettelun valintanauha ({{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}): katso [TakeoffCraftin näkymä](topic:workspace).
:::

Aiheeseen liittyvää: [Näppäimistö ja hiiri](topic:keyboard) · [TakeoffCraftin asetukset](topic:settings) · [Muista määrälaskentaohjelmista siirtyminen](topic:coming-from)
