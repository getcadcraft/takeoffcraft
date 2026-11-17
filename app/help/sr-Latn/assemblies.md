---
title: Sklopovi i formule
summary: Dodajte komponente stavci i pustite da formule pretvore njenu dužinu, površinu ili broj u stubove, rozne grede, ploče, beton i okov, uz primer zida.
keywords: sklop, komponente, formula, stubovi, gips-karton, listovi, rozne grede, beton, kubni jardi, okov, recept, tipično, delovi stavke
from: 12891a21
---

Sklop stavke je spisak komponenti, a svaka ima formulu količine i sopstveni otpad i cene. Formula koristi izmerene zbirove stavke, pa jedan predmer zida daje stubove, rozne grede i ploče odjednom, a sve se ažurira dok merite.

## Promenljive koje možete koristiti

| Vrsta stavke | Promenljive |
|---|---|
| Linearna | `L` dužina, `H` visina, `A` površina zida (L × H), `N` broj deonica |
| Površina | `A` površina, `P` obim (kontura + isečci), `H` dubina ili debljina, `N` broj površina |
| Brojanje | `N` broj |

Vrednosti su u sopstvenim jedinicama stavke: stope i kvadratne stope za stavke u LF i SF, metri i kvadratni metri za stavke u m i m². Za stavku u SY, `A` je u kvadratnim jardima, dok `P` i `H` ostaju u stopama.

Formule koriste `+ - * /` (ili × ÷), zagrade, brojeve i funkcije `ceil`, `floor`, `round`, `min`, `max` i `abs`. Potpuna pravila su u [Jeziku formula](topic:formulas).

## Primer: unutrašnji zid

Recimo da ste izmerili **Unutrašnji zid tip A** kao linearnu stavku: 4 deonice ukupno 120 LF, sa {{ui:Visina}} postavljenom na `9'-0"`. Njene izmerene vrednosti glase L = 120, N = 4, A = 1,080 (SF zida, jedna strana).

1. Izaberite stavku pod {{ui:Stavke}}.
2. U {{ui:Sklop}} izaberite {{ui:Dodaj komponentu}}.
   Pojavljuje se komponenta pod nazivom „Komponenta“, sa formulom `L` i rezultatom ispod nje.
3. Upišite `Stubovi na 16 in o.c.` u {{ui:Naziv}} i `EA` u {{ui:Jedinica}}.
4. U {{ui:Formula količine}} upišite `ceil(L * 12 / 16) + N`.
   Rezultat se ažurira dok kucate: „= 94 EA“. To je jedan stub na svakih 16 inča duž 120 stopa (90), plus jedan dodatni da zatvori svaku od 4 deonice.
5. Ponovo izaberite {{ui:Dodaj komponentu}} za rozne grede: naziv `Rozne grede, gornja i donja`, jedinica `LF`, formula `L * 2`. Rezultat: 240 LF.
6. Dodajte ploče: naziv `Gips-ploča 4x8, obe strane`, jedinica `listova`, formula `ceil(A * 2 / 32)`. Rezultat: 68 listova (2,160 SF ploča ÷ 32 SF po listu = 67.5, zaokruženo naviše).
7. Popunite {{ui:Otpad %}}, {{ui:Materijal $}} i {{ui:Rad $}} za svaku komponentu.
   Svaka komponenta dobija sopstveni red ispod stavke u {{ui:Količine}}, ocenjen kao stavka, a {{ui:Ukupno za posao}} je uključuje.

Ako je trošak zida u potpunosti u komponentama, ostavite sopstvene stope materijala i rada stavke na 0, inače se računa dvaput.

:::tip
Otpad se primenjuje posle formule i ne zaokružuje se: 68 listova sa 10% otpada je 74.8 lista. Da biste naručili cele listove, stavite otpad unutar formule, na primer `ceil(A * 2 / 32 * 1.1)`, i ostavite otpad komponente na 0.
:::

## Još formula

| Šta | Stavka | Formula |
|---|---|---|
| Stubovi na 24 in od centra | Linearna | `ceil(L / 2) + N` |
| Izolacioni paneli, SF | Linearna sa visinom | `A` |
| Boja, obe strane, galoni na 350 SF | Linearna sa visinom | `ceil(A * 2 / 350)` |
| Kutije pločica od 15 SF, 10% više | Površina | `ceil(A * 1.1 / 15)` |
| Podnožna ili ivična letvica, LF | Površina | `P` |
| Beton, kubni jardi | Površina sa dubinom | `A * H / 27` |
| Beton zaokružen naviše na četvrt jarda | Površina sa dubinom | `ceil(A * H / 27 * 4) / 4` |
| Šarke, tri po vratima | Brojanje | `N * 3` |
| Bar jedna kutija, jedna na 12 | Brojanje | `max(1, ceil(N / 12))` |

## Kada je formula pogrešna

Linija ispod formule pretvara se u poruku o grešci, na primer `„X“ nije izmerena vrednost ovde. Koristite L, H, A, N.` ili `Nedostaje ")".` Komponenta tada nema iznose, njen red u {{ui:Količine}} prikazuje „Greška u formuli: …“, a zaglavlje kaže „Nepotpuno: 1 greška u formuli (nije u zbirovima)“. Ispravite formulu i zbirovi se ažuriraju.

Formula koja deli nulom je takođe greška („Formula deli nulom.“), na primer `A / H` na stavci bez dubine.

## Ograničenja

- Formule rade na **zbirovima** stavke, a ne deonica po deonica. `ceil(L * 12 / 16) + N` dodaje jedan stub po deonici; zaokruživanja po deonici još nema.
- Formula može koristiti samo promenljive sopstvene stavke, a ne tuđe.
- Do 50 komponenti po stavci i 500 znakova po formuli.

## Uklanjanje komponente

Izaberite {{ui:Ukloni komponentu}} ispod nje. Možete je opozvati sa {{key:Mod+Z}}.
