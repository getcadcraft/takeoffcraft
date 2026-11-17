---
title: Yhdistelmät ja kaavat
summary: Lisää komponentteja nimikkeeseen ja anna kaavojen muuttaa sen pituus, pinta-ala tai lukumäärä runkotolpiksi, päätypuiksi, levyiksi, betoniksi ja kiinnikkeiksi, esimerkkinä seinä.
keywords: yhdistelmä, komponentit, kaava, runkotolpat, kipsilevy, levyt, päätypuut, betoni, cubic yards, kiinnikkeet, resepti, tyypillinen, nimikkeen osat
from: 12891a21
---

Nimikkeen **yhdistelmä** on luettelo komponenteista, joilla kullakin on oma määräkaava sekä oma hukka- ja hintatieto. Kaava käyttää nimikkeen mitattuja kokonaisarvoja, joten yksi seinän mittaus antaa runkotolpat, päätypuut ja levyt yhtä aikaa, ja ne päivittyvät mittauksen mukana.

## Käytettävät muuttujat

| Kohdetyyppi | Muuttujat |
|---|---|
| Viiva | `L` pituus, `H` korkeus, `A` seinän pinta-ala (L × H), `N` osuuksien määrä |
| Pinta | `A` pinta-ala, `P` piiri (ulkoreuna + aukot), `H` syvyys tai paksuus, `N` alueiden määrä |
| Lukumäärä | `N` lukumäärä |

Arvot ovat nimikkeen omissa yksiköissä: jalkoina ja neliöjalkoina LF- ja SF-nimikkeillä, metreinä ja neliömetreinä m- ja m²-nimikkeillä. SY-nimikkeellä `A` on neliöjaardeina, kun taas `P` ja `H` pysyvät jalkoina.

Kaavoissa käytetään merkkejä `+ - * /` (tai × ÷), sulkuja, lukuja ja funktioita `ceil`, `floor`, `round`, `min`, `max` ja `abs`. Täydelliset säännöt ovat kohdassa [Kaavakieli](topic:formulas).

## Esimerkki: sisäseinä

Oletetaan, että olet mitannut **Sisäseinä tyyppi A** viivanimikkeenä: 4 osuutta, yhteensä 120 LF, ja {{ui:Korkeus}}-kentän arvo on `9'-0"`. Sen **Mitatut** arvot ovat L = 120, N = 4, A = 1,080 (SF seinää, yksi pinta).

1. Valitse nimike kohdan {{ui:Nimikkeet}} alta.
2. Valitse {{ui:Yhdistelmä}}-kohdasta {{ui:Lisää komponentti}}.
   Näkyviin tulee komponentti nimeltä ”Komponentti”, jonka kaava on `L` ja tulos sen alla.
3. Kirjoita kenttään {{ui:Nimi}} `Runkotolpat 16 in o.c.` ja kenttään {{ui:Yksikkö}} `EA`.
4. Kirjoita kenttään {{ui:Määräkaava}} `ceil(L * 12 / 16) + N`.
   Tulos päivittyy kirjoittaessasi: ”= 94 EA”. Se on yksi runkotolppa 16 tuuman välein 120 jalan matkalla (90), plus yksi lisää sulkemaan kaikki 4 osuutta.
5. Valitse {{ui:Lisää komponentti}} uudelleen ja lisää ylä- ja alajuoksut: nimi `Ylä- ja alajuoksu`, yksikkö `LF`, kaava `L * 2`. Tulos: 240 LF.
6. Lisää levy: nimi `Kipsilevy 4x8, molemmat puolet`, yksikkö `levy`, kaava `ceil(A * 2 / 32)`. Tulos: 68 levyä (2,160 SF ÷ 32 SF levyä kohti = 67.5, pyöristettynä ylöspäin).
7. Täytä kunkin komponentin {{ui:Hukka %}}, {{ui:Materiaali $}} ja {{ui:Työ $}}.
   Kukin komponentti saa oman rivinsä nimikkeen alle kohdassa {{ui:Määrät}}, hinnoiteltuna kuin nimike, ja {{ui:Työn kokonaissumma}} sisältää sen.

Jos seinän kustannus on kokonaan komponenteissa, jätä nimikkeen oman materiaali- ja työhinnan arvot nollaan, muuten se lasketaan kahteen kertaan.

:::tip
Hukka lasketaan kaavan jälkeen eikä sitä pyöristetä: 68 levyä 10 %:n hukalla on 74.8 levyä. Jos haluat tilata kokonaisia levyjä, lisää hukka kaavaan, esimerkiksi `ceil(A * 2 / 32 * 1.1)`, ja jätä komponentin hukka arvoon 0.
:::

## Lisää kaavoja

| Mitä | Nimike | Kaava |
|---|---|---|
| Runkotolpat 24 tuuman välein | Viiva | `ceil(L / 2) + N` |
| Eristevillalevyt, SF | Viiva korkeudella | `A` |
| Maali, molemmat puolet, gallonaa 350 SF:lle | Viiva korkeudella | `ceil(A * 2 / 350)` |
| Laattapakkaukset 15 SF, 10 % lisää | Pinta | `ceil(A * 1.1 / 15)` |
| Lista tai reunalista, LF | Pinta | `P` |
| Betoni, cubic yards | Pinta syvyydellä | `A * H / 27` |
| Betoni pyöristettynä ylöspäin neljännes-cubic yardiin | Pinta syvyydellä | `ceil(A * H / 27 * 4) / 4` |
| Saranat, kolme ovea kohti | Lukumäärä | `N * 3` |
| Vähintään yksi laatikko, yksi 12:ta kohden | Lukumäärä | `max(1, ceil(N / 12))` |

## Kun kaava on virheellinen

Kaavan alla oleva rivi muuttuu virheilmoitukseksi, esimerkiksi `"X" ei ole mitattu arvo tässä. Käytä L, H, A, N.` tai `Sulkumerkki ")" puuttuu.` Komponentilla ei silloin ole määriä, sen rivi kohdassa {{ui:Määrät}} näyttää ”Kaavavirhe: …”, ja otsikossa lukee ”Keskeneräinen: 1 kaavavirhe (ei mukana summissa)”. Korjaa kaava, niin summat päivittyvät.

Kaava, joka jakaa nollalla, on myös virhe („Kaava jakaa nollalla.”), esimerkiksi `A / H` nimikkeellä, jolla ei ole syvyyttä.

## Rajoitukset

- Kaavat lasketaan nimikkeen **kokonaisarvoista**, ei osuus osuudelta. `ceil(L * 12 / 16) + N` lisää yhden tolpan osuutta kohti; osuuskohtaista pyöristystä ei ole vielä.
- Kaava voi käyttää vain oman nimikkeensä muuttujia, ei toisen nimikkeen.
- Enintään 50 komponenttia nimikettä kohti, 500 merkkiä kaavaa kohti.

## Poista komponentti

Valitse sen alta {{ui:Poista komponentti}}. Voit kumota sen painamalla {{key:Mod+Z}}.
