---
title: Tarjouspaketit ja tarjousten tasaus
summary: Jaa arvio paketeiksi alan mukaan, lähetä kunkin paketin laajuus aliurakoitsijoille, vertaa palautuvia tarjouksia samaan laajuuteen ja käytä valittua tarjousta paketin hintana.
keywords: tarjousten tasaus, tasaus, tarjouspaketti, aliurakoitsija, aliurakkatarjous, laajuus, paikkaus, ala, CSI-jako, vertaa tarjouksia, alin tarjous, tarjousvertailu, tarjoaja, hankinta, valittu tarjous, käytä tarjousta, aliurakan hinta
from: 856b3088
---

Yleisurakoitsija lähettää kunkin alan laajuuden aliurakoitsijoille ja vertaa palautuvia tarjouksia. TakeoffCraft tekee molemmat laskennasta: avaa {{ui:Vie}} › {{ui:Tarjouspaketit ja tasaus…}}.

## Paketit

Jokaista CSI-jaota, jota nimikkeesi käyttävät, kohti on yksi paketti (nimikkeen {{ui:CSI-numero}}-kentän kaksi ensimmäistä numeroa, ks. [Luo laskennan nimikkeet](topic:create-items)). Ilman numeroa olevat nimikkeet muodostavat oman pakettinsa. Kukin paketti näyttää nimikkeensä, kuinka monella arkilla sen merkinnät ovat, ja oman kustannuksemme siitä (materiaali ja työ ennen lisäyksiä, perustarjouksesta).

Valitse {{ui:Laajuus CSV}} ladataksesi lähetettäväksi aliurakoitsijalle: jokainen nimike CSI-numeroineen, määrineen, yksikköineen ja arkkeineen. Siinä ei ole hintoja. Materiaalitoimittajille työkirjan tarjouspyynnössä on osaluettelo (ks. [Vie arvio](topic:export-estimate)).

## Syötä tarjoukset

1. Kirjoita paketin alla olevaan tyhjään riviin tarjoajan nimi ja tarjouksen summa, ja valitse {{ui:Lisää tarjous}}.
2. Jos tarjous jättää osan laajuudesta pois, avaa sen {{ui:Pois jätetty}}-luettelo ja rastita nämä nimikkeet.
3. Nimen tai summan korjaamiseksi kirjoita sen päälle taulukossa; ×-painike poistaa tarjouksen.

Jokainen muutos on yksi vaihe, jonka {{key:Mod+Z}} kumoaa, ja tarjoukset tallennetaan laskennan mukana.

## Miten tarjoukset tasataan

Tarjoukset harvoin kattavat saman laajuuden. Tasaus täyttää jokaisen pois jätetyn nimikkeen **paikkauksella** omaan kustannukseemme, joten jokainen tarjous vertaillaan koko paketilla:

**Tasattu = tarjous + paikkaukset**

Alin tasattu tarjous merkitään **Alin**; tasatessa ratkaisee aikaisemmin syötetty. **Meidän kustannustamme vastaan** on tasattu tarjous miinus oma kustannuksemme paketista: negatiivinen tarkoittaa alle sen. Tarjous, joka näyttää alimmalta, voi hävitä, kun sen puuttuva laajuus lasketaan mukaan.

Työkirjaan tulee **Tarjousten tasaus** -taulukko, jossa on jokainen tarjouksia sisältävä paketti: oma arvio, jokainen tarjous, sen paikkaukset, tasattu yhteissumma ja ero live-kaavoina, sekä mitä kukin tarjous jätti pois.

## Käytä tarjousta paketin hintana

Valitse tarjouksesta {{ui:Käytä}}, ja se muuttuu koko paketin hinnaksi arviossasi: paketin oma hinnoittelu (nimikkeet, niiden lisäehdot ja yhdistelmien osat) poistuu työn kokonaissummasta, nimikkeet pysyvät määrinä omilla hinnoillamme viitteeksi, ja yksi rivi, **Valittu tarjous**, kantaa tarjouksen summan. Tarjouksen ulkopuolelle jääneet nimikkeet pysyvät omassa kustannuksessamme, mikä on se paikkaus, jonka tasaus jo laski. Valitse toinen tarjous tai sama uudelleen palauttaaksesi; jokainen on yksi vaihe, jonka {{key:Mod+Z}} kumoaa.

Yhteenvedossa aliurakkatarjoukset ovat yksi rivi kustannusten sisällä: yleiskulut, voitto ja takaus lisätään niiden päälle kuten muihin kustannuksiin, mutta myyntiveroa (vain materiaalista) ja työnantajan sivukuluja (työstä) ei lisätä. Työkirjan Arvio-taulukko kantaa valitun tarjouksen omana rivinään, ja lisäyslohko lisää sen live-kaavoilla. Materiaalilistasta jää pois valitun paketin materiaali, koska aliurakoitsija toimittaa sen.

Paketti vaihtoehdon tarjousalueella ei hinnoitella uudelleen: vaihtoehdot ja tarjousalueiden välisummat käyttävät yhä omia hintojamme.

## Tarjoukset, jotka palautuvat sähköpostilla

Tarjouksia ei tarvitse kirjoittaa käsin. {{ui:Lähetä tarjouspyyntö…}} paketin alla lähettää kullekin aliurakoitsijalle linkin sivulle, jossa hän kirjoittaa hinnan jokaiselle riville; {{ui:Hae hinnat}} hakee lähetetyt tähän taulukkoon. Katso [Lähetä tarjouspaketti tarjouspyyntönä](topic:bid-invitations).

:::note
Tarjouksen kirjoittaminen käsin toimii edelleen, ja käsin syötetty tarjous ja sivustolta tullut ovat rinnakkain. Sivustolta palautuneet tarjoukset on merkitty **web** (tai **web, myöhässä**, jos ne saapuivat eräpäivän jälkeen). Niiden hinta muuttuu vain, kun tarjoaja lähettää uuden version, joten omat muokkauksesi siihen säilyvät siihen asti.
:::
