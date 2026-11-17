---
title: Ammattipaketit
summary: Lisää ammattialan ilmaisia kokoonpanoja hintakirjastoosi, poista ne yhdellä askeleella ja jaa oma kirjastosi pakettina.
keywords: ammattipaketti, paketti, kokoonpanot, mallipohjat, aloitusnimikkeet, sähkö, kipsilevy, runko, maalaus, betoni, lattia, muuraus, katto, vaneriverhous, puuseppä, putki, lvi, eristys, piha, terassi, pääurakoitsija, csi, masterformat, cc0, lisää, poista, jaa
from: d3c036be
---

**Ammattipaketti** on joukko valmiita nimikkeitä yhtä ammattialaa varten: jokaisella on oma yksikkö, korkeus tai syvyys, hukka ja sen **kokoonpano**, eli osat ja kaavat, jotka muuttavat mitatun pituuden, pinta-alan tai lukumäärän materiaaleiksi. Kipsilevyseinä tuo esimerkiksi mukanaan ulokkeen, runkotolpat, levyt, ruuvit, teipin ja saumamassan.

Paketit lisätään [hintakirjastoosi](topic:price-library), ja sieltä voit lisätä niiden nimikkeet mihin tahansa määrälaskentaan.

## Lisää paketti

1. Avaa {{ui:Kirjasto}} {{ui:Nimikkeet}}-paneelin yläosasta ja sitten {{ui:Ammattipaketit…}}.
2. Valitse {{ui:Yksiköt}}: imperiaaliset (LF, SF), metriset (m, m²) tai molemmat. Jokainen kokoonpano tulee molemmissa järjestelmissä.
3. Valitse paketin vierestä {{ui:Lisää}}.

Paketin nimikkeet näkyvät kirjastossa, merkittyinä paketin nimellä. Käyttääksesi niitä, valitse ne kirjastosta ja valitse {{ui:Lisää määrälaskentaan}}.

:::note
**Paketti ei tuo hintoja.** Sen nimikkeissä lukee kirjastossa ”aseta hintasi”. Hinnat ovat omiasi: kirjoita ne kirjastoon tai nimikkeen muokkaimeen, tai tuo hinnastosi CSV-tiedostona ja käytä {{ui:Päivitä hinnat}}.
:::

Jos kirjastossasi on jo nimike samalla nimellä ja tyypillä, paketti jättää omasi ennalleen. Paketin lisääminen uudelleen korvaa sen omat nimikkeet uudella versiolla.

## Poista paketti

Valitse {{ui:Ammattipaketit…}}-dialogissa lisäämäsi paketin vierestä {{ui:Poista}} ja vahvista sitten vielä kerran. Jokainen paketista tullut nimike poistuu kirjastosta yhdellä askeleella. Määrälaskentoihin jo lisätyt nimikkeet pysyvät siinä määrälaskennassa.

## Mitä paketissa on

Valitse paketin alta {{ui:Lähteet ja tiedot}} nähdäksesi, mistä kukin kokoonpano on kirjoitettu: rakennusmääräykset, standardit ja alan yhdistysten asennusohjeet. Kirjastossa nimikkeen päälle viemällä osoittimen näet sen lähteet ja oletukset, kuten runkotolppavälin tai maalin levityksen. Tarkista ne työkohteesi ja tuotteidesi tietolehtiä vasten, ja muuta kaavoja, jos ne eroavat (katso [Kokoonpanot ja kaavat](topic:assemblies)).

Jokainen paketti on merkitty **Aloite: ei vielä kustannusarvioijan tarkistama**, kunnes työssä toimivat kustannusarvioijat ovat tarkistaneet sen.

Jokaisella nimikkeellä on myös CSI MasterFormat -numero, kuten `09 21 16`.

## Jaa kirjastosi pakettina

{{ui:Vie pakettina…}} kirjastossa tallentaa sen pakettitiedostona (`.ccpack.json`), jonka kuka tahansa voi lisätä kohdan {{ui:Avaa pakettitiedosto…}} kautta. Oletuksena se jättää pois lisäämiesi pakettien nimikkeet eikä sisällä hintoja. Valitse {{ui:Sisällytä hintani esimerkkihintoina}}, jos haluat lähettää hintasi mukana: ne lähtevät merkittyinä antamasi alueen ja päivämäärän kanssa, ja pakettia lisäävä päättää, käytetäänkö niitä.

Pakettitiedostot ovat pelkkää dataa, eivät ohjelmia. TakeoffCraft tarkistaa jokaisen osan ennen käyttöä ja jättää pois kaiken, mitä se ei osaa lukea.
