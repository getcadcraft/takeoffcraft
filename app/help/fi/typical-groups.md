---
title: Tyyppiryhmät
summary: Mittaa tyypillinen yksikkö, huone tai kerros kerran ja laske se niin monta kertaa kuin se toistuu, muuta määrää myöhemmin ja näe, mitkä merkinnät ovat tyypillisiä.
keywords: tyyppi, tyyppiryhmä, toisto, toistomäärä, kerrottava, kertaa, yksikkö, hotellihuone, asunto, tyypillinen kerros, x24, kopiot
from: 42c3a372
---

Rakennus toistaa usein samaa: 24 samanlaista hotellihuonetta, 6 tyypillistä kerrosta, 40 pysäköintipaikkaa samalla maalauksella. **Tyyppiryhmä** antaa mitata yhden näistä ja laskea sen niin monta kertaa kuin se toistuu, piirtämättä kopioita.

## Luo tyyppiryhmä

1. Mittaa yksi yksikkö: sen seinät, lattia, pistorasiat, mitä tahansa nimikkeitä.
2. Valitse sen merkinnät {{ui:Valitse}}-työkalulla: napsauta yhtä ja paina {{key:Shift}} + napsauta muita ([Valitse merkinnät](topic:copy-paste#select-the-marks)).
3. Avaa **Valittu merkintä** -kohdasta {{ui:Tyyppi}} ja valitse {{ui:Uusi tyyppiryhmä…}}.
4. Anna sille nimi (`Yksikkö A`) ja kerro, kuinka monta kertaa se toistuu (`24`), ja valitse sitten {{ui:Luo ryhmä}}.

Kaikkien näiden merkintöjen määrät lasketaan nyt 24 kertaa: 10 ft seinäosuus antaa 240 ft, 80 SF lattia 1,920 SF ja kaksi pistorasiaa 48. Hinnat seuraavat, ja kaavat näkevät toistetut kokonaissummat (`N` laskee myös jokaisen viivan 24 kertaa).

Piirustuksella katkoviivalaatikko kiertää ryhmän merkinnät, ja siinä on sen nimi ja määrä, kuten **Yksikkö A ×24**.

## Muuta sitä myöhemmin

Ryhmät on lueteltu oikeanpuoleisen paneelin kohdassa **Tyyppiryhmät**:

- Muuta **×**-merkin jälkeinen luku, jos haluat muuttaa, kuinka monta kertaa se lasketaan (1 to 10,000). Kaikki määrät päivittyvät.
- Nimeä ryhmä uudelleen sen nimikentässä.
- Laatikkokuvake valitsee sen merkinnät (ja näyttää niiden arkin).
- Roskakori poistaa ryhmän. Sen merkinnät jäävät, ja ne lasketaan kerran.

Lisätäksesi merkintöjä ryhmään tai poistaaksesi niitä, valitse merkinnät ja valitse ryhmä (tai {{ui:Ei tyyppiryhmässä (×1)}}) kohdasta {{ui:Tyyppi}}.

## Hyvä tietää

- Ryhmän merkinnät voivat olla useilla arkeilla ja mitä tahansa nimikkeitä. Jokainen merkintä kuuluu enintään yhteen ryhmään.
- Liitetyt kopiot eivät kuulu ryhmään, sillä liitetty kopio tyypillisestä yksiköstä laskettaisiin muuten taas 24 kertaa. Käytä ryhmää tilanteisiin ”sama asia N kertaa”, ja kopioi ja liitä kopiot, jotka piirrät itse.
- Merkinnät piirretään kerran, joten 3D-näkymä ja merkitty PDF näyttävät yhden yksikön; määrät, viennit ja arkkikohtainen taulukko laskevat sen ×N. Excel-viennin **Merkinnät**-taulukko kertoo, mitkä merkinnät ovat tyypillisiä ja kuinka monta kertaa ne lasketaan.
- Tarjousalueiden kanssa ryhmän merkinnät lasketaan ×N omalla tarjousalueellaan.
