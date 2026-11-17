---
title: Julkaisut, revisiot ja piirustusten muutoshistoria
summary: Pidä yksi julkaisuhistoria arkkitehdin mallin kanssa: lue julkaisut sisään, kirjaa työmaaohjeet, työpiirustukset ja linkitetyt mallit julkaisun yhteyteen ja lue piirustusten muutoshistoria.
keywords: julkaisu, revisio, revisiot, muutoshistoria, piirustusten muutoshistoria, piirustusrekisteri, työmaaohje, työpiirustus, linkitetty malli, tarjouskilpailu, rakentaminen, julkaisuhistoria, määräluettelo, määrälaskenta
from: 8d8f6e68
---

## Mitä teet

Työskentele samasta julkaisuhistoriasta kuin muu tiimi. Näet, mitkä arkit lähtivät millä revisiolla, ja kirjaat työmaalla tapahtuvat asiat julkaisuun, johon ne kuuluvat.

## Vaiheet

1. Avaa **Julkaisut ja revisiot**.
2. Valitse **Lue julkaisuhistoria** ja valitse BimCraftista tai muusta sovelluksesta tallennettu `.issues.json`-tiedosto. Sen julkaisut ja tietueet lisätään omiisi. Mitään ei korvata.
3. Valitse **Lisää tietue** työmaaohjeelle, työpiirustukselle, merkintäsarjalle, linkitetylle mallille tai huomautukselle. Valitse julkaisu, johon se kuuluu, ja sen tila. Valitsemasi tiedosto kirjataan nimensä, koon ja SHA-256:n perusteella; tiedosto pysyy missä on.
4. **Piirustusten muutoshistoria** näyttää yhden rivin jokaiselle arkille ja yhden sarakkeen jokaiselle julkaisulle. Sulkeissa oleva revisio on julkaistu uudelleen muuttamattomana.
5. **Lataa muutoshistoria (CSV)** tallentaa julkaisut, arkkitaulukon ja tietueet. **Tallenna julkaisuhistoria** kirjoittaa tiedoston, jonka muut sovellukset lukevat.

## Hyvä tietää

- **Kirjaa julkaisu** julkaisee mitatut arkkisi, esimerkiksi määräluettelon kanssa. **Muutokset sen jälkeen** kertoo, mitkä arkit on mitattu uudelleen tämän julkaisun jälkeen.
- Historia tallennetaan määrälaskentatiedostoon. Jokainen muutos kumoutuu yhdellä Kumoa-askeleella.
- Saman tiedoston lukeminen kahdesti ei lisää mitään kahdesti. Kun kaksi kopiota sisältää saman tietueen, uudempi säilytetään.
