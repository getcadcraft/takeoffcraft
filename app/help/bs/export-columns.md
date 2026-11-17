---
title: Kolone izvoza
summary: Svaki radni list i kolona XLSX izvoza i CSV-a, s formulama koje radni list Predračun sadrži.
keywords: izvoz, kolone, xlsx, csv, radni list, predračun, po listu, oznake, razmjere, formule, polja
from: fed07851
---

## Predračun (radni list XLSX i CSV)

Jedan red po stavci, nakon kojeg slijedi red po komponenti njenog sklopa (uvučen). Zatim prazan red i ukupno za posao.

| Kolona | Sadržaj | U XLSX-u |
|---|---|---|
| A Stavka | Naziv stavke (podebljano) ili naziv komponente (uvučen) | Tekst |
| B Vrsta | Linearna, Površina, Brojanje ili Komponenta | Tekst |
| C Jedinica | LF, m, SF, SY, m², EA ili jedinica komponente | Tekst |
| D Količina | Izmjereni ukupno ili rezultat formule | Broj |
| E Otpad % | Otpad | Postotak (0.10 = 10%) |
| F Količina s otpadom | Količina × (1 + otpad) | Formula `D*(1+E)` |
| G Materijal po jedinici | Cijena materijala | Broj |
| H Rad po jedinici | Cijena rada | Broj |
| I Materijal | Prošireni materijal | Formula `ROUND(F*G,2)` |
| J Rad | Prošireni rad | Formula `ROUND(F*H,2)` |
| K Ukupno | Materijal + rad | Formula `I+J` |
| L Napomene | Korištena formula, greška u formuli, oznake na listovima bez razmjere, površina zida, obim | Tekst |

Red ukupno za posao: `SUM` kolona I, J i K nad svim redovima iznad, a u Napomenama "Nepotpuno: vidi napomene iznad" kada je nešto izostavljeno.

Red s greškom u formuli nema količinu ni iznose; njegova napomena navodi grešku. Zaglavlje je zamrznuto.

U CSV-u iste kolone sadrže obične vrijednosti, Otpad % je broj postotaka (10 za 10%), a novac je u dolarima s dvije decimale. Tekst koji tablični program može shvatiti kao formulu (počinje s `=`, `+`, `-` ili `@`) dobija vodeći `'` da ostane tekst.

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
| Detalji | Linearna: dužine segmenata, oduzeti označeni kao "(oduzeto)", i "oduzima (dužina) od (dužina) nacrtanih". Površina: bruto i površine izreza kada ih ima, te obim. "Nema razmjere" za oznake bez razmjere. |
| Područje ponude | Samo kada predmjer ima područja ponude: površina oznake ili "Nema područja ponude" |

## Po području ponude (samo XLSX, kada predmjer ima područja ponude)

| Kolona | Sadržaj |
|---|---|
| Područje ponude | Naziv područja, ili "Nema područja ponude" |
| Stavka | Stavka, ili komponenta uvučena ispod nje |
| Jedinica | Jedinica stavke ili komponente |
| Količina | Izmjereno u tom području (komponente: formula nad ukupnim iznosima područja) |
| Količina s otpadom | Količina × (1 + otpad) |
| Materijal, Rad, Ukupno | Prošireno do centa, kao na Predračunu |
| Napomene | Formula, greške i oznake bez razmjere, kao na Predračunu |

Svako područje završava redom "(naziv) međuzbir" čiji su troškovi formule `SUM` nad njegovim redovima; posljednji red, **Sva područja ponude**, zbraja međuzbirove. Radni list **Oznake** tada ima sedmu kolonu, **Područje ponude**.

## Razmjere (samo XLSX)

Jedan red po listu koji ima razmjeru ili oznake.

| Kolona | Sadržaj |
|---|---|
| List | Naziv lista |
| Razmjera | Naziv postavke, ili kalibrirana razmjera, ili "Nema razmjere" |
| Način | "Unaprijed podešeno", ili "Kalibrirano na (upisana udaljenost)" |
| Stope po jedinici PDF-a | Tačan faktor razmjere koji TakeoffCraft koristi |

## Nazivi datoteka

- `(name).xlsx` i `(name).csv`, gdje naziv dolazi od prvog PDF-a otvorenog u predmjeru.
- CSV je UTF-8 s oznakom redoslijeda bajtova (BOM) i Windows završecima redova, koje čitaju tablični programi na svim platformama.
