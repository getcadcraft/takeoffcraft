---
title: Yksiköt
summary: Yksiköt, joilla nimike voi raportoida, yksiköt, joita sen kaavamuuttujat käyttävät, ja se, miten imperiaaliset ja metriset yksiköt sekoittuvat.
keywords: yksiköt, lf, sf, sy, sq, neliöjaardit, kattoneliöt, eekkerit, hehtaarit, metrit, neliömetrit, ea, kappale, metrinen, imperiaalinen, muunnos, oletusyksikkö
from: b7bf0528
---

## Nimikkeen yksiköt

| Nimikkeen tyyppi | Yksikkö | Nimi |
|---|---|---|
| Viiva | LF | lineaarijalka (oletus) |
| Viiva | m | metri |
| Pinta-ala | SF | neliöjalka (oletus) |
| Pinta-ala | SY | neliöjaardi |
| Pinta-ala | SQ | kattoneliö (100 neliöjalkaa) |
| Pinta-ala | ac | eekkeri |
| Pinta-ala | m² | neliömetri |
| Pinta-ala | ha | hehtaari |
| Lukumäärä | EA | kappale |

Vaihda se {{ui:Yksikkö}}-kentällä nimikkeen muokkaimessa milloin tahansa, myös mittaamisen jälkeen; määrä muuntuu heti.

{{ui:Yksikkö}}-luettelo näyttää yksiköt, jotka on otettu käyttöön kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}}, ja aina nimikkeen oman yksikön. Uusi nimike alkaa siitä pituus- tai pinta-alayksiköstä, joka on siellä merkitty tähdellä, jos se on nimikkeen yksikkö; muuten LF- tai SF-yksiköstä. Katso [Yksiköt, kirjoitetut arvot ja yksikkölistat](common:unit-lists).

## Kaavamuuttujien yksiköt

| Nimikkeen yksikkö | L, P, H | A |
|---|---|---|
| LF | jalkaa | neliöjalkaa (seinäpinta-ala) |
| m | metriä | neliömetriä (seinäpinta-ala) |
| SF | jalkaa | neliöjalkaa |
| SY | jalkaa | neliöjaardia |
| SQ | jalkaa | kattoneliöitä |
| ac | jalkaa | eekkereitä |
| m² | metriä | neliömetriä |
| ha | metriä | hehtaaria |

SY-nimikkeissä `A` on neliöjaardeina, kun `P` ja `H` pysyvät jalkoina. Tilavuus SY-nimikkeestä on `A * 9 * H / 27` kuutiojaardia; laatoille SF on yksinkertaisempi.

## Missä yksiköt ovat kiinteitä

Jotkin näytöt käyttävät aina jalkoja:

- tilarivin reaaliaikainen lukema piirtäessä (jalat-tuumat, SF),
- **Valittu merkintä** (jalat-tuumat, LF ja SF),
- tarkistuksen tulos (jalat-tuumat, desimaalijalat ja metrit),
- segmenttien pituudet ja piirit taulukkolaskennan Merkinnät-taulukossa (jalat-tuumat).

Nimikkeiden summat, {{ui:Määrät}}-taulukko, kaavat ja Kustannusarvio-taulukko käyttävät nimikkeen omaa yksikköä.

## Mittakaava ja yksiköt ovat erillisiä

Arkin mittakaava kertoo, kuinka suuri piirustus on; nimikkeen yksikkö kertoo, miten se raportoidaan. Metrinen piirustus mittakaavassa `1:100` voidaan laskea LF-yksiköissä, ja imperiaalinen piirustus m²-yksiköissä. Kalibrointi hyväksyy minkä tahansa yksikön: `24'-6"`, `7.5 m`, `7500 mm`.

## Tarkkuus

TakeoffCraft mittaa tarkasti napsauttamistasi pisteistä, mukaan lukien todelliset kaarien pituudet ja pinta-alat, eikä pyöristä määriä. Näyttö pyöristää pituudet 1/16 tuumaan ja desimaalit kahteen paikkaan. Rahasummat pyöristetään vasta lopullisiin summiin, senttiin.
