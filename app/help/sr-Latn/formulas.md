---
title: Jezik formula
summary: Pravila za formule količina sklopova - promenljive, operatori, funkcije, zaokruživanje i svaka poruka o grešci.
keywords: formula, izraz, sintaksa, funkcije, ceil, floor, round, min, max, abs, promenljive, operatori, proračun
from: 4da14575
---

Komponente sklopova dobijaju količinu iz formule. Formula je mali aritmetički izraz nad izmerenim vrednostima stavke. Vidi [Sklopovi i primeri](topic:assemblies) za primere.

## Promenljive

| Vrsta stavke | Promenljiva | Značenje |
|---|---|---|
| Linearna | `L` | Ukupna dužina |
| Linearna | `H` | Visina stavke |
| Linearna | `A` | Površina zida, L × H, umanjena za otvore traka koje ih nose (predmer iz BimCraft-a). Kada predmer navodi metodu merenja, `A` se meri njome: otvori ne veći od najmanje veličine metode ostaju uračunati, a ono što metoda odbija tamo gde se zidovi sastaju se izostavlja. Beleška ispod stavke navodi metodu |
| Linearna | `N` | Broj traka |
| Površina | `A` | Ukupna neto površina (konture minus otvori) |
| Površina | `P` | Ukupan obim, uključujući ivice otvora |
| Površina | `H` | Dubina ili debljina stavke |
| Površina | `N` | Broj površina |
| Brojanje | `N` | Broj |

- Promenljive su u jedinicama stavke: vidi [Jedinice](topic:units).
- Velika i mala slova su ista: `l` je `L`.
- Rade samo promenljive vrste same stavke. `P` na linearnoj stavci daje „"P" nije izmerena vrednost ovde. Koristite L, H, A, N.“
- Prazna visina ili dubina je 0.

## Operatori

| Piše se | Znači |
|---|---|
| `+` | Sabiranje |
| `-` ili `−` | Oduzimanje, ili negativna vrednost |
| `*` ili `×` | Množenje |
| `/` ili `÷` | Deljenje |
| `( )` | Grupisanje |

Množenje i deljenje idu pre sabiranja i oduzimanja: `L * 2 + 4` je (L × 2) + 4. Kad niste sigurni, koristite zagrade.

Brojevi mogu imati decimale (`1.333`, `.5`) i eksponente (`1e3` = 1000). Razmaci se ignorišu.

## Funkcije

| Funkcija | Rezultat | Primer |
|---|---|---|
| `ceil(x)` | Zaokruživanje naviše na ceo broj | `ceil(67.5)` = 68 |
| `floor(x)` | Zaokruživanje naniže na ceo broj | `floor(67.5)` = 67 |
| `round(x)` | Zaokruživanje na najbliži ceo broj, polovine od nule | `round(2.5)` = 3 |
| `round(x, d)` | Zaokruživanje na d decimala (0 do 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Najmanja vrednost | `min(N, 10)` |
| `max(a, b, …)` | Najveća vrednost | `max(1, ceil(N / 12))` |
| `abs(x)` | Vrednost bez znaka | `abs(-3)` = 3 |

`ceil` i `floor` ignorišu sitan šum računarskog zaokruživanja, pa vrednost koja treba da bude tačno 1 nikada ne postane 2.

## Greške

Formula koja se ne može pročitati ili izračunati prikazuje svoju grešku ispod polja, a komponenta se izostavlja iz zbirova (zaglavlje {{ui:Količine}} kaže „Nepotpuno“). Poruke:

| Poruka | Popravka |
|---|---|
| „Upišite formulu, na primer L ili ceil(L / 1.333) + 1.“ | Formula je prazna. |
| „X“ nije izmerena vrednost ovde. Koristite … | Koristite jednu od navedenih promenljivih. |
| „X“ nije funkcija ovde. Koristite ceil, floor, round, min, max, abs. | Koristite jednu od tih funkcija. |
| „#“ nije dozvoljeno u formuli. | Uklonite taj znak (jedinice, `%`, `$` i `=` nisu dozvoljeni). |
| Nedostaje ‚)‘. / Postoji ‚)‘ bez ‚(‘. | Uravnotežite zagrade. |
| Nedostaje vrednost pre ‚)‘. | Nešto kao `max(1, )`: upišite vrednost. |
| Formula se završava prerano. | Nešto kao `L *`: završite je. |
| Neočekivano ‚…‘. Nedostaje operator? | Dve vrednosti jedna uz drugu, kao `2L`: napišite `2 * L`. |
| ceil() uzima 1 vrednost. | Dajte funkciji odgovarajući broj vrednosti. |
| round(x, digits) traži cele decimale od 0 do 10. | Koristite ceo broj decimala. |
| Formula deli nulom. | Obično je H 0: postavite visinu ili dubinu stavke. |
| Formula ne daje broj. | Rezultat je prevelik da bi bio broj. |
| Ta formula je predugačka (najviše 500 znakova). | Skratite je. |

## Bezbedno po dizajnu

Formula može samo da računa aritmetiku sa promenljivama i funkcijama iznad. Ne može da pokreće kod niti da čita bilo šta drugo, pa je formula u projektnom fajlu koji vam neko pošalje bezopasna.
