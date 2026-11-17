---
title: Katot ja kaltevuudet
summary: Anna alueelle kaltevuus, niin katon pinta mitataan pohjapiirroksesta, ja mittaa päätyräystäät, aumaharjat ja laaksot niiden kaltevuutta pitkin.
keywords: katto, kaltevuus, luiskakerroin, nousu, vaakamitta, 6:12, päätyräystäs, aumaharja, laakso, harjakatto, kattomateriaali, ruutuyksikkö, kaltevan pinnan ala, todellinen pituus, pohjapinta-ala
from: 38225b60
---

Pohjapiirroksessa jokainen katto-osa näkyy litteänä, ylhäältä nähtynä. Katto itse on suurempi: 6:12-kaltevuudella olevalla tasolla on noin 12 % enemmän pintaa kuin sen pohjapiirroksessa, ja sen viistot reunat ovat pidempiä kuin miltä ne näyttävät. Anna nimikkeelle kaltevuus, niin TakeoffCraft mittaa luiskaa pitkin.

## Kaltevuuden kirjoittaminen

Kaltevuus on nousu per 12 vaakamittaa, kuten katon pohjapiirroksen kaltevuusmerkeissä. Kirjoita se muodossa `6:12`, `6/12` tai pelkkä `6`; muukin vaakamitta käy (`4:10` on 4.8:12). Kulma käy asteen merkillä: `26.57°`. Tyhjä tai `0` tarkoittaa tasaista.

## Kattopinnat

1. Tee pinta-alanimike kattomateriaalille tai avaa olemassa oleva.
2. Kirjoita sen asetuksiin **Kaltevuus**, esimerkiksi `6:12`.
3. Piirrä jokainen katto-osa pohjapiirrokseen {{ui:Area}}-työkalulla kuten tavallisesti.

Jokainen katto-osa lasketaan pohjapinta-alansa ja luiskakertoimen tulona: √(1 + (nousu ÷ 12)²), eli 1.118 kaltevuudella 6:12 ja 1.414 kaltevuudella 12:12. Valitse katto-osa nähdäksesi sen **Pinta-ala** (kaltevalla pinnalla), **Pohjapinta-ala** ja **Luiskakerroin**.

Muun kaltevuuden katto-osat: valitse katto-osa ja kirjoita sen oma **Kaltevuus** sen paneeliin. Jätä tyhjäksi, jos haluat nimikkeen kaltevuuden. Kolmiulotteinen tarkistusnäkymä, yhdistelmät (`A` on kaltevan pinnan ala), kustannukset ja vienti käyttävät kaikki kaltevaa pinta-alaa. Kaltevalla katto-osalla tehdyt vähennykset, kuten katto-ikkunat, vähennetään samalla kaltevuudella.

Kehä (`P`) on pohjapiirroksen kehä. Mittaa räystäät, päätyräystäät, aumaharjat ja laaksot viivoina (alla).

## Päätyräystäät, aumaharjat ja laaksot

1. Tee viivanimike, kuten "Päätyräystäs" tai "Aumaharjat".
2. Aseta sen **Luiska** arvoon **Päätyräystäs** (kaltevat reuna, kuten harjakaton päätyreuna) tai **Aumaharja tai laakso** (linja, jossa kaksi katto-osaa kohtaa), ja kirjoita katto-osien **Kaltevuus**.
3. Piirrä viivat pohjapiirrokseen {{ui:Linear}}-työkalulla.

Päätyräystäs lasketaan pohjapituutensa ja luiskakertoimen tulona. Aumaharja tai laakso kulkee pohjapiirroksessa 45°:n kulmassa kahden saman kaltevuuden katto-osan välissä, joten sen todellinen pituus on pohjapituus × √(1 + (nousu ÷ 12)² ÷ 2): 1.061 kaltevuudella 6:12 ja 1.225 kaltevuudella 12:12.

Yksi viiva voi sisältää molempia. Valitse se: jokaisella segmentillä on paneelissaan luiskaluettelo — **Nimikkeen** (nimikkeen asetus), **Vaakataso**, **Päätyräystäs** tai **Aumaharja tai laakso** — ja sen pituus luiskaa pitkin. Viivan oma **Kaltevuus** paneelissa korvaa nimikkeen kaltevuuden kaikilla sen segmenteillä. Paneeli näyttää myös **Pohjapituuden**, ja arkin tarrat näyttävät pituudet luiskaa pitkin.

Vähennykset toimivat edelleen: vähennetty segmentti ei laske mitään, kalteva tai ei.

:::note
Aumaharjat ja laaksot olettavat, että molemmilla katto-osilla on sama kaltevuus. Eri kaltevuuksille mittaa aumaharja muualla todellisena pituutena tai piirrä se päätyräystäänä vastaavalla kaltevuudella.
:::
