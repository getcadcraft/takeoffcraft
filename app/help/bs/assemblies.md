---
title: Sklopovi i formule
summary: Dodajte komponente stavci i pustite formule da pretvore njenu dužinu, površinu ili broj u stubove, podrmice, ploče, beton i okov, uz primjer zida.
keywords: sklop, komponente, formula, stubovi, gips-karton, ploče, podrmice, beton, cubic yards, okov, recept, tipično, dijelovi stavke
from: 12891a21
---

**Sklop** stavke je popis komponenti, a svaka ima svoju formulu količine te vlastiti otpad i stope. Formula koristi izmjerene ukupne vrijednosti stavke, pa jedno mjerenje zida daje stubove, podrmice i ploče odjednom, a one se ažuriraju dok mjerite.

## Varijable koje možete koristiti

| Vrsta stavke | Varijable |
|---|---|
| Linijska | `L` dužina, `H` visina, `A` površina zida (L × H), `N` broj trasa |
| Površinska | `A` površina, `P` obim (kontura + izrezi), `H` dubina ili debljina, `N` broj površina |
| Brojana | `N` broj |

Vrijednosti su u jedinicama same stavke: feet i square feet za stavke LF i SF, meters i square meters za stavke m i m². Za stavku SY, `A` je u square yards, dok `P` i `H` ostaju u feet.

Formule koriste `+ - * /` (ili × ÷), zagrade, brojeve i funkcije `ceil`, `floor`, `round`, `min`, `max` i `abs`. Potpuna pravila su u [Jezik formula](topic:formulas).

## Primjer: unutrašnji zid

Recimo da ste predmjerili **Unutrašnji zid tip A** kao linijsku stavku: 4 trase ukupno 120 LF, uz {{ui:Visina}} postavljenu na `9'-0"`. Njegove **izmjerene** vrijednosti su L = 120, N = 4, A = 1,080 (SF zida, jedna strana).

1. Odaberite stavku pod {{ui:Stavke}}.
2. U {{ui:Sklop}}, izaberite {{ui:Dodaj komponentu}}.
   Pojavljuje se komponenta pod nazivom "Komponenta", s formulom `L` i rezultatom ispod.
3. Upišite `Stubovi na 16 inches o.c.` u {{ui:Naziv}} i `EA` u {{ui:Jedinica}}.
4. U {{ui:Formula količine}}, upišite `ceil(L * 12 / 16) + N`.
   Rezultat se ažurira dok kucate: "= 94 EA". To je jedan stub na svakih 16 inches duž 120 feet (90), plus jedan dodatni da zatvori svaku od 4 trase.
5. Ponovo izaberite {{ui:Dodaj komponentu}} za podrmice: naziv `Podrmice gore i dolje`, jedinica `LF`, formula `L * 2`. Rezultat: 240 LF.
6. Dodajte ploče: naziv `Gips-karton 4x8, s obje strane`, jedinica `listovi`, formula `ceil(A * 2 / 32)`. Rezultat: 68 listova (2,160 SF ploča ÷ 32 SF po listu = 67.5, zaokruženo naviše).
7. Popunite {{ui:Otpad %}}, {{ui:Materijal $}} i {{ui:Rad $}} za svaku komponentu.
   Svaka komponenta dobija svoj red ispod stavke u {{ui:Količine}}, cijenjen kao stavka, a {{ui:Ukupno za posao}} je uključuje.

Ako je cijena zida u potpunosti u komponentama, ostavite vlastite stope materijala i rada stavke na 0, inače se računa dvaput.

:::tip
Otpad se primjenjuje nakon formule i nije zaokružen: 68 listova uz 10% otpada iznosi 74.8 listova. Da naručite cijele listove, stavite otpad unutar formule, npr. `ceil(A * 2 / 32 * 1.1)`, i ostavite otpad komponente na 0.
:::

## Još formula

| Šta | Stavka | Formula |
|---|---|---|
| Stubovi na 24 inches od osi do osi | Linijska | `ceil(L / 2) + N` |
| Izolacioni paneli, SF | Linijska s visinom | `A` |
| Boja, s obje strane, gallons na 350 SF | Linijska s visinom | `ceil(A * 2 / 350)` |
| Kartoni pločica na 15 SF, 10% viška | Površinska | `ceil(A * 1.1 / 15)` |
| Podna ili rubna letvica, LF | Površinska | `P` |
| Beton, cubic yards | Površinska s dubinom | `A * H / 27` |
| Beton zaokružen naviše na quarter yard | Površinska s dubinom | `ceil(A * H / 27 * 4) / 4` |
| Šarke, tri po vratima | Brojana | `N * 3` |
| Najmanje jedna kutija, jedna na 12 | Brojana | `max(1, ceil(N / 12))` |

## Kada je formula pogrešna

Red ispod formule pretvara se u poruku o grešci, na primjer `"X" nije izmjerena vrijednost ovdje. Koristite L, H, A, N.` ili `Nedostaje ")".` Komponenta tada nema količine, njen red u {{ui:Količine}} prikazuje "Greška u formuli: …", a zaglavlje kaže "Nepotpuno: 1 greška u formuli (nije u ukupnim vrijednostima)". Ispravite formulu i ukupne vrijednosti se ažuriraju.

Formula koja dijeli nulom je također greška ("Formula dijeli sa nulom."), na primjer `A / H` na stavci bez dubine.

## Ograničenja

- Formule se računaju na **ukupnim vrijednostima** stavke, a ne trasu po trasu. `ceil(L * 12 / 16) + N` dodaje jedan stub po trasi; zaokruživanje po trasi još nije dostupno.
- Formula može koristiti samo varijable svoje stavke, a ne varijable druge stavke.
- Do 50 komponenti po stavci, 500 znakova po formuli.

## Uklanjanje komponente

Izaberite {{ui:Ukloni komponentu}} ispod nje. Možete je poništiti sa {{key:Mod+Z}}.
