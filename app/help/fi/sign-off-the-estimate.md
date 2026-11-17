---
title: Puuttuvat hinnat ja kustannusarvion hyväksyntä
summary: Katso, mitkä kustannusarvion rivit ovat määrällisiä ilman hintaa, hyväksy kustannusarvio nimelläsi, jotta tiedosto tallentaa kuka, milloin ja mille summalle, ja napsauta lukua valitaksesi merkinnät, joista se tuli.
keywords: kustannusarvio, hyväksyntä, hyväksyä, puuttuva hinta, ei hintaa, hinnoittamaton, hinta, kokonaissumma, määrälaskija, hyväksytty, tallenne, tarkastusjälki, valitse merkinnät, luku, jäljitys
from: 9acf71ef
---

## Mitä teet

Tarkista, että jokainen kustannusarvion rivi on hinnoiteltu, ja kirjoita sitten nimesi siihen. Määrälaskentatiedosto tallentaa, kuka hyväksyi, milloin ja mille summalle.

## Rivit ilman hintaa

Kohdassa **Määrät › Nimikkeittäin** rivi, jolla on määrä mutta ei materiaali- tai työhintaa, saa merkinnän **Ei hintaa**, ja taulukon yläpuolella oleva palkki kertoo, kuinka monta niitä on. Tällainen rivi ei lisää mitään kokonaissummaan. Nimike, jolla ei ole omaa hintaa, ei saa merkintää, kun yksi sen osista on hinnoiteltu: yhdistelmä hinnoitellaan osiensa kautta. Viety kustannusarvio kirjoittaa **Ei hintaa** jokaisen sellaisen rivin Huomautukset-sarakkeeseen ja laskee ne.

## Hyväksy kustannusarvio

1. Napsauta **Hyväksy kustannusarvio** Määrät-taulukon yläpuolella.
2. Valintaikkuna kertoo hyväksymäsi summan ja listaa rivit ilman hintaa. Kirjoita nimesi ja halutessasi roolisi.
3. Napsauta **Hyväksy**. Palkissa lukee "Hyväksynyt … … …" ja summa. Tallenna määrälaskenta, jotta hyväksyntä säilyy tiedostossa.

Hyväksyntä koskee lukuja, jotka hyväksyit. Jokainen myöhempi muutos määrään, hintaan tai riviin poistaa sen, ja TakeoffCraft kertoo siitä. Kumoa palauttaa hyväksytyn kustannusarvion ja sen hyväksynnän mukana. Rivin nimeäminen uudelleen ei ole luvun muutos. **Poista hyväksyntä** vie sen pois.

Määrälaskentatiedosto, jota on muokattu TakeoffCraftin ulkopuolella hyväksynnän jälkeen, avautuu ilman hyväksyntää, ja siinä on huomautus siitä. Viety kustannusarvio (CSV ja XLSX) mainitsee hyväksynnän summien alla.

Vain ihminen voi hyväksyä. Tekoälyavustaja voi lukea, onko kustannusarvio hyväksytty ja mistä hinnat puuttuvat; sillä ei ole keinoa hyväksyä.

## Napsauta lukua nähdäksesi, mistä se tuli

Napsauta rivin määrää tai summaa valitaksesi merkinnät, joista se mitattiin. Kun ne ovat toisella arkilla, se arkki avautuu. Napsauta **Työn kokonaissumma** -rivin lukua valitaksesi jokaisen merkinnän arkilla. Kirjoitettu määrä ei sisällä merkintöjä.

## Hyvä tietää

- Hyväksyntä tallentaa nimen kirjoitettuna. Se on tiedoston merkintä, ei sähköinen allekirjoitus.
- Kun työssä on alihankkijoille myönnettyjä urakkapaketteja tai vaihtoehtoja, hyväksytty summa on perustarjous, joka näkyy kohdassa **Työn kokonaissumma**.
