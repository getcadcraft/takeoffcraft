---
title: Kolone izvoza
summary: Svaki radni list i kolona XLSX izvoza i CSV-a, sa formulama koje nosi list predračuna.
keywords: izvoz, kolone, xlsx, csv, radni list, list predračuna, po listu, oznake, razmere, formule, polja
from: fed07851
---

## Predračun (XLSX radni list i CSV)

Jedan red po stavci, a za njom red po komponenti njenog sklopa (uvučen). Zatim prazan red i ukupan zbir.

| Kolona | Sadržaj | U XLSX |
|---|---|---|
| A Stavka | Naziv stavke (podebljano) ili naziv komponente (uvučen) | Tekst |
| B Vrsta | Linearna, Površina, Brojanje ili Komponenta | Tekst |
| C Jedinica | LF, m, SF, SY, m², EA, ili jedinica komponente | Tekst |
| D Količina | Izmereni ukupan zbir ili rezultat formule | Broj |
| E Škart % | Škart | Procenat (0.10 = 10%) |
| F Količina sa škartom | Količina × (1 + škart) | Formula `D*(1+E)` |
| G Materijal po jedinici | Cena materijala | Broj |
| H Rad po jedinici | Cena rada | Broj |
| I Materijal | Prošireni iznos materijala | Formula `ROUND(F*G,2)` |
| J Rad | Prošireni iznos rada | Formula `ROUND(F*H,2)` |
| K Ukupno | Materijal + rad | Formula `I+J` |
| L Beleške | Korišćena formula, greška u formuli, oznake na listovima bez razmere, površina zida, obim | Tekst |

Red ukupnog zbira: `SUM` nad kolonama I, J i K preko svih redova iznad, a u Beleškama „Nepotpuno: vidi beleške iznad“ kada je nešto izostavljeno.

Red sa greškom u formuli nema količinu ni iznose; njegova beleška navodi grešku. Red zaglavlja je zamrznut.

U CSV-u iste kolone sadrže obične vrednosti, Škart % je broj procenata (10 za 10%), a novac je u dolarima sa dve decimale. Tekst koji tabelarni program može da shvati kao formulu (počinje sa `=`, `+`, `-` ili `@`) dobija vodeći `'` da ostane tekst.

## Po listu (samo XLSX)

| Kolona | Sadržaj |
|---|---|
| List | Naziv lista (uz naziv PDF-a kada nije otvoren) |
| Stavka | Naziv stavke |
| Količina | Količina te stavke na tom listu, u njenoj jedinici |
| Jedinica | Jedinica stavke |
| Oznake | Broj oznaka |

## Oznake (samo XLSX)

Jedan red po oznaci.

| Kolona | Sadržaj |
|---|---|
| List | Naziv lista |
| Stavka | Naziv stavke |
| Vrsta | Linearna, Površina ili Brojanje |
| Količina | Dužina, neto površina ili 1 |
| Jedinica | LF ili m; SF, SY ili m²; EA |
| Detalj | Linearna: dužine segmenata, odbijeni označeni sa „(odbijeno)“, i „odbija (dužina) od nacrtanih (dužina)“. Površina: bruto i površine otvora kada ih ima, i obim. „List nema razmeru“ za oznake bez razmere. |
| Oblast ponude | Samo kada predmer ima oblasti ponude: površina oznake ili „Nema oblasti ponude“ |

## Po oblasti ponude (samo XLSX, kada predmer ima oblasti ponude)

| Kolona | Šta |
|---|---|
| Oblast ponude | Naziv oblasti ili „Nema oblasti ponude“ |
| Stavka | Stavka, ili uvučena komponenta ispod nje |
| Jedinica | Jedinica stavke ili komponente |
| Količina | Izmereno u toj oblasti (komponente: formula nad zbirovima oblasti) |
| Količina sa škartom | Količina × (1 + škart) |
| Materijal, Rad, Ukupno | Prošireno do centa, kao na Predračunu |
| Beleške | Formula, greške i oznake bez razmere, kao na Predračunu |

Svaka oblast se završava redom „(naziv) međuzbir“ čiji su troškovi formule `SUM` nad njenim redovima; poslednji red, **Sve oblasti ponude**, sabira međuzbirove. Radni list **Oznake** tada ima sedmu kolonu, **Oblast ponude**.

## Razmere (samo XLSX)

Jedan red po listu koji ima razmeru ili oznake.

| Kolona | Sadržaj |
|---|---|
| List | Naziv lista |
| Razmera | Naziv predloška, kalibrisana razmera ili „Nema razmere“ |
| Kako | „Predložak“ ili „Kalibrisano na (rastojanje koje ste upisali)“ |
| Stope po jedinici PDF-a | Tačan faktor razmere koji TakeoffCraft koristi |

## Nazivi fajlova

- `(naziv).xlsx` i `(naziv).csv`, gde naziv dolazi od prvog PDF-a otvorenog u predmeru.
- CSV je UTF-8 sa oznakom redosleda bajtova (BOM) i Windows prelomima redova, koje tabelarni programi na svim platformama čitaju.
