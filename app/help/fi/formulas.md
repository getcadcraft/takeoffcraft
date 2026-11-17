---
title: Kaavakieli
summary: Kokoonpanojen määräkaavojen säännöt: muuttujat, operaattorit, funktiot, pyöristys ja jokainen virheviesti.
keywords: kaava, lauseke, syntaksi, funktiot, ceil, floor, round, min, max, abs, muuttujat, operaattorit, laskenta
from: 4da14575
---

Kokoonpanon osat saavat määränsä kaavasta. Kaava on pieni aritmeettinen lauseke nimikkeen mitattujen arvojen päällä. Katso [Kokoonpanot ja kaavat](topic:assemblies) työesimerkkejä varten.

## Muuttujat

| Nimiketyyppi | Muuttuja | Merkitys |
|---|---|---|
| Lineaarinen | `L` | Kokonaispituus |
| Lineaarinen | `H` | Nimikkeen korkeus |
| Lineaarinen | `A` | Seinäpinta-ala, L × H, vähennettynä aukoilla niiden juoksuilta (BimCraft-määrälaskennasta). Kun määrälaskennassa on nimetty mittausmenetelmä, `A` mitataan sillä: menetelmän pienintä kokoa pienemmät aukot jäävät mukaan, ja se, mitä menetelmä jättää pois seinien liittymäkohdista, jätetään pois. Nimikkeen alla oleva huomautus kertoo menetelmän |
| Lineaarinen | `N` | Juoksujen lukumäärä |
| Pinta-ala | `A` | Kokonaisnettopinta-ala (ulkoreunat miinus aukot) |
| Pinta-ala | `P` | Kokonaiskehä, aukkojen reunat mukaan lukien |
| Pinta-ala | `H` | Nimikkeen syvyys tai paksuus |
| Pinta-ala | `N` | Alueiden lukumäärä |
| Lukumäärä | `N` | Lukumäärä |

- Muuttujat ovat nimikkeen yksiköissä: katso [Yksiköt](topic:units).
- Isot ja pienet kirjaimet ovat samat: `l` on `L`.
- Toimivat vain nimikkeen oman tyypin muuttujat. `P` lineaarisella nimikkeellä antaa: `"P" ei ole mitattu arvo tässä. Käytä L, H, A, N.`
- Tyhjä korkeus tai syvyys on 0.

## Operaattorit

| Kirjoita | Merkitys |
|---|---|
| `+` | Yhteenlasku |
| `-` tai `−` | Vähennyslasku tai negatiivinen arvo |
| `*` tai `×` | Kertolasku |
| `/` tai `÷` | Jakolasku |
| `( )` | Ryhmittely |

Kerto ja jako tehdään ennen yhteen- ja vähennyslaskua: `L * 2 + 4` on (L × 2) + 4. Käytä sulkeita, kun olet epävarma.

Luvuissa voi olla desimaaleja (`1.333`, `.5`) ja eksponentteja (`1e3` = 1000). Välilyönnit jätetään huomiotta.

## Funktiot

| Funktio | Tulos | Esimerkki |
|---|---|---|
| `ceil(x)` | Pyöristää ylöspäin kokonaislukuun | `ceil(67.5)` = 68 |
| `floor(x)` | Pyöristää alaspäin kokonaislukuun | `floor(67.5)` = 67 |
| `round(x)` | Pyöristää lähimpään kokonaislukuun, puolikkaat nollasta poispäin | `round(2.5)` = 3 |
| `round(x, d)` | Pyöristää d desimaaliin (0–10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Pienin arvo | `min(N, 10)` |
| `max(a, b, …)` | Suurin arvo | `max(1, ceil(N / 12))` |
| `abs(x)` | Arvo ilman etumerkkiä | `abs(-3)` = 3 |

`ceil` ja `floor` jättävät huomiotta pienet tietokoneen pyöristyskohinat, joten arvo, joka on oikeasti 1, ei koskaan pyöristy 2:ksi.

## Virheet

Kaava, jota ei voi lukea tai laskea, näyttää virheensä kentän alla, ja kokoonpanon osa jätetään summista pois (**Määrät**-otsikossa lukee "Epätäydellinen"). Viestit:

| Viesti | Korjaus |
|---|---|
| Kirjoita kaava, esimerkiksi L tai ceil(L / 1.333) + 1. | Kaava on tyhjä. |
| "X" ei ole mitattu arvo tässä. Käytä … | Käytä yhtä luetelluista muuttujista. |
| "X" ei ole funktio tässä. Käytä ceil, floor, round, min, max, abs. | Käytä yhtä noista funktioista. |
| "#" ei ole sallittu kaavassa. | Poista se merkki (yksiköt, `%`, `$` ja `=` eivät ole sallittuja). |
| Sulkeen ")" puuttuu. / Sulkeessa ")" ei ole vastinetta "(". | Tasapainota sulkeet. |
| Arvo puuttuu ennen ")" merkkiä. | Esimerkiksi `max(1, )`: täydennä arvo. |
| Kaava loppuu liian aikaisin. | Esimerkiksi `L *`: viimeistele kaava. |
| Odottamaton "…". Puuttuuko operaattori? | Kaksi arvoa vierekkäin, kuten `2L`: kirjoita `2 * L`. |
| ceil() ottaa 1 arvon. | Anna funktiolle oikea määrä arvoja. |
| round(x, digits) tarvitsee kokonaisen desimaalimäärän väliltä 0–10. | Käytä kokonaislukua desimaaleille. |
| Kaava jakaa nollalla. | Yleensä H on 0: aseta nimikkeen korkeus tai syvyys. |
| Kaava ei anna lukua. | Tulos on liian suuri ollakseen luku. |
| Kaava on liian pitkä (enintään 500 merkkiä). | Lyhennä sitä. |

## Suunniteltu turvalliseksi

Kaava voi tehdä vain laskutoimituksia yllä mainituilla muuttujilla ja funktioilla. Se ei voi suorittaa koodia eikä lukea mitään muuta, joten kaava projektitiedostossa, jonka joku lähettää sinulle, on vaaraton.
