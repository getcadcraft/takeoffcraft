---
title: Vertaa tarkistettua arkkia ja siirrä määrälaskenta
summary: Aseta vanha arkki sen tarkistetun version päälle, kohdista ne, näe mitä muuttui ja siirrä määrälaskenta uudelle arkille, jolloin muutettuun kohtaan osuvat merkinnät on merkitty tarkistettaviksi.
keywords: tarkistus, tarkistettu, vertailu, päällekkäin, vanha, uusi, muutokset, lisäys, tiedote, uudelleenjulkaisu, siirrä määrälaskenta, siirto, kopioi, kohdistus, merkitty, tarkista
from: 3a1d9fe0
---

Kun arkki julkaistaan uudelleen, sitä ei tarvitse mitata alusta. Avaa vanha PDF ja uusi, vertaa kahta arkkia ja siirrä määrälaskenta niiden välillä. TakeoffCraft merkitsee jokaisen merkinnän, jonka kohdalla piirustus muuttui, joten tarkistat ne ja säilytät muut.

## Vertaa

1. Avaa molemmat PDF:t: vanha sarja ja tarkistettu ({{ui:Avaa piirustukset}}; ne voivat olla yhdessä tiedostossa tai useissa).
2. Näytä **uusi** arkki.
3. Valitse arkkipalkista piirustuksen alta {{ui:Vertaa}}.
4. Valitse vanha arkki luettelosta. TakeoffCraft ehdottaa arkkia, jolla on sama numero toisessa PDF:ssä, tai samaa sivua. Valitse **Vertaa**.

Vanha piirustus näkyy nyt uuden päällä punaisena. Missä kaksi piirustusta ovat samat, punaiset viivat osuvat mustien päälle; missä ne eroavat, näet pelkät punaiset viivat (poistettu) ja pelkät mustat viivat (lisätty). Arkin alareunan palkki sisältää alla olevat vaiheet; {{key:Esc}} tai {{ui:Sulje}} lopettaa vertailun.

## Kohdista

Tarkistetut arkit on usein piirretty hieman väärin: ne ovat siirtyneet sivulla tai ovat hieman eri kokoisia. Jos punainen piirustus ei asetu mustan päälle, valitse **{{ui:Kohdista kahdella pisteellä}}** ja napsauta neljä kertaa:

1. piste vanhassa (punaisessa) piirustuksessa, kuten pilarin keskipiste tai rakennuksen kulma,
2. sama piste uudessa (mustassa) piirustuksessa,
3. toinen piste punaisessa piirustuksessa, kaukana ensimmäisestä,
4. sama piste mustassa piirustuksessa.

Punainen piirustus siirtyy, kääntyy ja skaalautuu mustan päälle. Tilarivi kertoo, kuinka paljon uusi piirustus on suurempi ("koko × 1.000", kun se on sama). Zoomaa lähemmäs valintoja varten: mitä tarkemmin napsautat, sitä parempi sovitus.

## Etsi muutokset

Valitse **{{ui:Etsi muutokset}}**. TakeoffCraft vertaa kahden piirustuksen mustetta: pelkästään vanhalla arkilla oleva muste muuttuu punaiseksi, pelkästään uudella arkilla oleva siniseksi, ja tilarivi laskee ne. Viivat, jotka siirtyivät hiukan (uudelleenpiirto), eivät ole muutoksia.

Se tarkistaa myös jokaisen vanhan arkin merkinnän ja laskee ne, jotka osuvat kohtiin, joissa piirustus muuttui:

- viiva tai alue, kun piirustus muuttui sen päässä tai kulmassa, tai vähintään noin kuudesosan sen pituudesta;
- lukumäärä, kun jotain muuttui aivan sen vieressä.

## Siirrä määrälaskenta

Valitse **{{ui:Siirrä määrälaskenta tähän}}**. Jokainen vanhan arkin merkintä siirtyy uudelle arkille kohdistuksen kautta yhdellä kumoamisaskeleella. Muutosten viereen osuneet merkinnät merkitään: ne piirretään oranssilla hehkulla, ja arkkipalkki näyttää "(n) tarkistettavaa".

Jos uudella arkilla ei ollut mittakaavaa, se ottaa vanhan arkin mittakaavan (muokattuna, jos piirustukset piti skaalata kohdistusta varten). Jos sillä oli jo eri mittakaava, TakeoffCraft kysyy ensin: siirretyt merkinnät mitataan uuden arkin mittakaavassa.

## Tarkista merkityt merkinnät

1. Valitse arkkipalkista "(n) tarkistettavaa". Näkymä zoomaa seuraavaan merkittyyn merkintään ja valitsee sen; sen paneelissa lukee, miksi se on merkitty.
2. Korjaa merkintä, jos piirustus muuttui sen alla (vedä sen kulmia, lisää tai poista merkintöjä tai poista se kokonaan).
3. Valitse paneelissa **Tarkistettu**. Merkki poistuu, ja arkkipalkin lukumäärä laskee.

Merkinnät tallennetaan määrälaskennan mukana, joten voit tarkistaa ne myöhemmin.

:::note
Vertailu toimii sekä vektori-PDF:ille että skannauksille, koska se vertaa piirrettyä sisältöä. Vino tai venynyt skannaus voi kohdistua vain karkeasti kahdella pisteellä; tarkista silloin lisää merkintöjä silmämääräisesti.
:::
