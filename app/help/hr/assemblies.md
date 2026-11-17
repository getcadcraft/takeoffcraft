---
title: Sklopovi i formule
summary: Dodajte komponente stavci i neka formule pretvore njezinu duljinu, površinu ili broj u stupove, pragove, listove ploča, beton i okov, uz primjer zida.
keywords: sklop, komponente, formula, stupovi, gipskarton, listovi, pragovi, beton, kubni jardi, okov, recept, tipično, dijelovi stavke
from: 12891a21
---

Sklop stavke **sklop** je popis komponenti, a svaka ima formulu količine te vlastiti gubitak i jedinične cijene. Formula koristi izmjerene ukupne vrijednosti stavke, pa jedno mjerenje zida daje stupove, pragove i ploče odjednom, a sve se ažurira kako mjerite.

## Varijable koje možete koristiti

| Vrsta stavke | Varijable |
|---|---|
| Linearna | `L` duljina, `H` visina, `A` površina zida (L × H), `N` broj dionica |
| Površina | `A` površina, `P` opseg (obris + izrezi), `H` dubina ili debljina, `N` broj površina |
| Brojanje | `N` broj |

Vrijednosti su u vlastitim jedinicama stavke: stope i kvadratne stope za stavke u LF i SF, metri i kvadratni metri za stavke u m i m². Za stavku u SY, `A` je u kvadratnim jardima, dok `P` i `H` ostaju u stopama.

Formule koriste `+ - * /` (ili × ÷), zagrade, brojeve i funkcije `ceil`, `floor`, `round`, `min`, `max` i `abs`. Potpuna pravila nalaze se u [Jezik formula](topic:formulas).

## Primjer: unutarnji zid

Pretpostavimo da ste izmjerili **Unutarnji zid tip A** kao linearnu stavku: 4 dionice ukupno 120 LF, s {{ui:Visina}} postavljenom na `9'-0"`. Njegove **izmjerene** vrijednosti glase L = 120, N = 4, A = 1,080 (SF zida, jedna strana).

1. Odaberite stavku pod {{ui:Stavke}}.
2. U {{ui:Sklop}} odaberite {{ui:Dodaj komponentu}}.
   Pojavljuje se komponenta pod nazivom „Komponenta“, s formulom `L` i rezultatom ispod nje.
3. Upišite `Stupovi 16 in o.c.` u {{ui:Naziv}} i `EA` u {{ui:Jedinica}}.
4. U {{ui:Formula količine}} upišite `ceil(L * 12 / 16) + N`.
   Rezultat se mijenja dok tipkate: „= 94 EA“. To je jedan stup svakih 16 inča duž 120 stopa (90), plus jedan dodatni za zatvaranje svake od 4 dionice.
5. Ponovno odaberite {{ui:Dodaj komponentu}} za pragove: naziv `Pragovi, gore i dolje`, jedinica `LF`, formula `L * 2`. Rezultat: 240 LF.
6. Dodajte ploče: naziv `Gipskartonska ploča 4x8, obje strane`, jedinica `listovi`, formula `ceil(A * 2 / 32)`. Rezultat: 68 listova (2,160 SF ploča ÷ 32 SF po listu = 67.5, zaokruženo naviše).
7. Ispunite {{ui:Gubitak %}}, {{ui:Materijal $}} i {{ui:Rad $}} za svaku komponentu.
   Svaka komponenta dobiva vlastiti redak ispod stavke u {{ui:Količine}}, cijenjen kao stavka, a {{ui:Ukupno za posao}} je uključuje.

Ako je trošak zida u potpunosti u komponentama, ostavite vlastite stope materijala i rada stavke na 0, inače će se brojati dvaput.

:::tip
Gubitak se primjenjuje nakon formule i ne zaokružuje se: 68 listova uz 10 % gubitka iznosi 74.8 listova. Da naručite cijele listove, stavite gubitak unutar formule, npr. `ceil(A * 2 / 32 * 1.1)`, a gubitak komponente ostavite na 0.
:::

## Još formula

| Što | Stavka | Formula |
|---|---|---|
| Stupovi na razmaku 24 in (o.c.) | Linearna | `ceil(L / 2) + N` |
| Izolacijski paneli, SF | Linearna s visinom | `A` |
| Boja, obje strane, galoni na 350 SF | Linearna s visinom | `ceil(A * 2 / 350)` |
| Kutije pločica po 15 SF, 10 % viška | Površina | `ceil(A * 1.1 / 15)` |
| Podna ili rubna lajsna, LF | Površina | `P` |
| Beton, kubni jardi | Površina s dubinom | `A * H / 27` |
| Beton zaokružen naviše na četvrtinu jarda | Površina s dubinom | `ceil(A * H / 27 * 4) / 4` |
| Šarke, tri po vratima | Brojanje | `N * 3` |
| Najmanje jedna kutija, jedna na 12 | Brojanje | `max(1, ceil(N / 12))` |

## Kada je formula pogrešna

Redak ispod formule pretvara se u poruku o pogrešci, na primjer `„X“ nije izmjerena vrijednost ovdje. Koristite L, H, A, N.` ili `Nedostaje „)“.` Komponenta tada nema iznose, njezin redak u {{ui:Količine}} prikazuje „Pogreška u formuli: …“, a zaglavlje glasi „Nepotpuno: 1 pogreška u formuli (nije u ukupnima)“. Ispravite formulu i ukupni iznosi se ažuriraju.

Formula koja dijeli s nulom također je pogreška („Formula dijeli s nulom.“), na primjer `A / H` na stavci bez dubine.

## Ograničenja

- Formule se računaju na **ukupnim** vrijednostima stavke, a ne dionicu po dionicu. `ceil(L * 12 / 16) + N` dodaje jedan stup po dionici; zaokruživanje po dionici zasad ne postoji.
- Formula može koristiti samo varijable vlastite stavke, a ne varijable druge stavke.
- Do 50 komponenti po stavci, 500 znakova po formuli.

## Uklanjanje komponente

Odaberite {{ui:Ukloni komponentu}} ispod nje. Možete je vratiti s {{key:Mod+Z}}.
