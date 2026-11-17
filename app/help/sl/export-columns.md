---
title: Izvozni stolpci
summary: Vsak delovni list in stolpec izvoza XLSX ter CSV, s formulami, ki jih nosi delovni list Estimate.
keywords: izvoz, stolpci, xlsx, csv, delovni list, delovni list estimate, po listih, oznake, merila, formule, polja
from: fed07851
---

## Estimate (delovni list XLSX in CSV)

Ena vrstica za vsako postavko, za njo vrstica za vsako komponento njenega sestava (zamaknjena). Nato prazna vrstica in skupna vsota.

| Stolpec | Vsebina | V XLSX |
|---|---|---|
| A Item | Ime postavke (krepko) ali ime komponente (zamaknjeno) | Besedilo |
| B Type | Linear, Area, Count ali Component | Besedilo |
| C Unit | LF, m, SF, SY, m², EA ali enota komponente | Besedilo |
| D Quantity | Izmerjeni seštevek ali rezultat formule | Število |
| E Waste % | Odpadek | Odstotek (0.10 = 10%) |
| F Qty with waste | Količina × (1 + odpadek) | Formula `D*(1+E)` |
| G Material per unit | Cena materiala na enoto | Število |
| H Labor per unit | Cena dela na enoto | Število |
| I Material | Razširjeni material | Formula `ROUND(F*G,2)` |
| J Labor | Razširjeno delo | Formula `ROUND(F*H,2)` |
| K Total | Material + delo | Formula `I+J` |
| L Notes | Uporabljena formula, napaka v formuli, oznake na listih brez merila, površina sten, obseg | Besedilo |

Vrstica skupne vsote: `SUM` stolpcev I, J in K v vseh zgornjih vrsticah ter „Nepopolno: glejte zgornje opombe“ v stolpcu Notes, kadar je kaj izpuščeno.

Vrstica z napako v formuli nima količine ali zneskov; njena opomba navaja napako. Vrstica z naslovi stolpcev je zamrznjena.

V CSV isti stolpci vsebujejo navadne vrednosti: stolpec Waste % je število odstotkov (10 za 10 %), denar pa je v dolarjih z dvema decimalkama. Besedilo, ki ga preglednica lahko vzame za formulo (začne se z `=`, `+`, `-` ali `@`), dobi vodilni `'`, da ostane besedilo.

## Po listih (samo XLSX)

| Stolpec | Vsebina |
|---|---|
| Sheet | Ime lista (z imenom PDF, kadar ni odprt) |
| Item | Ime postavke |
| Quantity | Količina te postavke na tem listu v njeni enoti |
| Unit | Enota postavke |
| Marks | Število oznak |

## Oznake (samo XLSX)

Ena vrstica na oznako.

| Stolpec | Vsebina |
|---|---|
| Sheet | Ime lista |
| Item | Ime postavke |
| Type | Linear, Area ali Count |
| Quantity | Dolžina, neto površina ali 1 |
| Unit | LF ali m; SF, SY ali m²; EA |
| Detail | Linearna: dolžine odsekov, odbiti odseki, označeni z „(deduct)“, in „deducts (length) of (length) drawn“. Površina: bruto in izrezane površine, kadar so izrezi, ter obseg. „Sheet has no scale“ za oznake brez merila. |
| Bid area | Samo kadar ima predizmera območja ponudbe: površina oznake ali „No bid area“ |

## Po območjih ponudbe (samo XLSX, kadar ima predizmera območja ponudbe)

| Stolpec | Vsebina |
|---|---|
| Bid area | Ime območja ali „No bid area“ |
| Item | Postavka ali komponenta, zamaknjena pod njo |
| Unit | Enota postavke ali komponente |
| Quantity | Izmerjeno na tem območju (komponente: formula na seštevkih območja) |
| Qty with waste | Količina × (1 + odpadek) |
| Material, Labor, Total | Razširjeno do centa, kot na Estimate |
| Notes | Formule, napake in neizmerjene oznake, kot na Estimate |

Vsako območje se konča z vrstico „(ime) vmesna vsota“, katere stroški so formule `SUM` nad njegovimi vrsticami. Zadnja vrstica, **All bid areas**, sešteje vmesne vsote. Delovni list Marks nato dobi sedmi stolpec **Bid area**.

## Merila (samo XLSX)

Ena vrstica na list, ki ima merilo ali oznake.

| Stolpec | Vsebina |
|---|---|
| Sheet | Ime lista |
| Scale | Ime prednastavitve, kalibrirano merilo ali „Brez merila“ |
| How | „Preset“ ali „Calibrated on (the distance you typed)“ |
| Feet per PDF unit | Točen faktor merila, ki ga uporablja TakeoffCraft |

## Imena datotek

- `(name).xlsx` in `(name).csv`, kjer ime pride iz prvega PDF, odprtega v predizmeri.
- CSV je v kodiranju UTF-8 z oznako zaporedja bajtov (BOM) in Windows končnicami vrstic, ki jih preglednice na vseh platformah berejo.
