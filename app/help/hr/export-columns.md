---
title: Stupci izvoza
summary: Svaki radni list i stupac XLSX izvoza te CSV, s formulama koje radni list Predračun sadrži.
keywords: izvoz, stupci, xlsx, csv, radni list, predračun, po listu, oznake, mjerila, formule, polja
from: fed07851
---

## Predračun (radni list XLSX i CSV)

Jedan redak po stavci, a zatim redak po komponenti njezina sklopa (uvučen). Zatim prazan redak i ukupni zbroj posla.

| Stupac | Sadržaj | U XLSX-u |
|---|---|---|
| A Stavka | Naziv stavke (podebljano) ili naziv komponente (uvučen) | Tekst |
| B Vrsta | Linearna, Površina, Broj ili Komponenta | Tekst |
| C Jedinica | LF, m, SF, SY, m², EA ili jedinica komponente | Tekst |
| D Količina | Izmjereni zbroj ili rezultat formule | Broj |
| E Gubitak % | Gubitak | Postotak (0.10 = 10%) |
| F Količina s gubitkom | Količina × (1 + gubitak) | Formula `D*(1+E)` |
| G Materijal po jedinici | Cijena materijala | Broj |
| H Rad po jedinici | Cijena rada | Broj |
| I Materijal | Prošireni iznos materijala | Formula `ROUND(F*G,2)` |
| J Rad | Prošireni iznos rada | Formula `ROUND(F*H,2)` |
| K Ukupno | Materijal + rad | Formula `I+J` |
| L Napomene | Korištena formula, greška formule, oznake na listovima bez mjerila, površina zida, opseg | Tekst |

Redak ukupnog zbroja posla: `SUM` nad stupcima I, J i K za svaki redak iznad, a u Napomenama „Nepotpuno: vidi napomene iznad“ kad je nešto izostavljeno.

Redak s greškom formule nema količinu ni iznose; njegova napomena navodi grešku. Redak zaglavlja je zamrznut.

U CSV-u isti stupci sadrže obične vrijednosti, Gubitak % je broj postotka (10 za 10%), a novac je u dolarima s dvije decimale. Tekst koji proračunska tablica može shvatiti kao formulu (počinje s `=`, `+`, `-` ili `@`) dobiva vodeći `'` da ostane tekst.

## Po listu (samo XLSX)

| Stupac | Sadržaj |
|---|---|
| List | Naziv lista (uz naziv PDF-a kad nije otvoren) |
| Stavka | Naziv stavke |
| Količina | Količina te stavke na tom listu, u njezinoj jedinici |
| Jedinica | Jedinica stavke |
| Oznake | Broj oznaka |

## Oznake (samo XLSX)

Jedan redak po oznaci.

| Stupac | Sadržaj |
|---|---|
| List | Naziv lista |
| Stavka | Naziv stavke |
| Vrsta | Linearna, Površina ili Broj |
| Količina | Duljina, neto površina ili 1 |
| Jedinica | LF ili m; SF, SY ili m²; EA |
| Pojedinosti | Linearna: duljine dionica, oduzete označene „(oduzeto)“ i „oduzima (duljina) od nacrtane (duljine)“. Površina: bruto i izrezane površine kad postoje izrezi, te opseg. „List nema mjerilo“ za oznake bez mjerila. |
| Područje ponude | Samo kad predmjer ima područja ponude: područje oznake ili „Nema područja ponude“ |

## Po području ponude (samo XLSX, kad predmjer ima područja ponude)

| Stupac | Sadržaj |
|---|---|
| Područje ponude | Naziv područja ili „Nema područja ponude“ |
| Stavka | Stavka ili komponenta uvučena ispod nje |
| Jedinica | Jedinica stavke ili komponente |
| Količina | Izmjereno u tom području (komponente: formula nad zbrojevima područja) |
| Količina s gubitkom | Količina × (1 + gubitak) |
| Materijal, Rad, Ukupno | Prošireno do centa, kao u Predračunu |
| Napomene | Formula, greške i neizmjerena mjerila, kao u Predračunu |

Svako područje završava retkom „(naziv) međuzbroj“ čiji su troškovi formule `SUM` nad njegovim recima. Posljednji redak, **Sva područja ponude**, zbraja međuzbrojeve. Radni list **Oznake** tada ima sedmi stupac, **Područje ponude**.

## Mjerila (samo XLSX)

Jedan redak po listu koji ima mjerilo ili oznake.

| Stupac | Sadržaj |
|---|---|
| List | Naziv lista |
| Mjerilo | Naziv predloška, kalibrirano mjerilo ili „Nema mjerila“ |
| Kako | „Predložak“ ili „Kalibrirano prema udaljenosti koju ste upisali“ |
| Stope po jedinici PDF-a | Točan faktor mjerila koji TakeoffCraft koristi |

## Nazivi datoteka

- `(name).xlsx` i `(name).csv`, gdje naziv dolazi od prvog PDF-a otvorenog u predmjeru.
- CSV je UTF-8 s oznakom redoslijeda bajtova (BOM) i Windows završecima redaka, što čitaju programi za proračunske tablice na svim platformama.
