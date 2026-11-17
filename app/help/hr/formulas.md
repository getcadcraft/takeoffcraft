---
title: Jezik formula
summary: Pravila za formule količina sklopova: varijable, operatori, funkcije, zaokruživanje i svaka poruka o greškama.
keywords: formula, izraz, sintaksa, funkcije, ceil, floor, round, min, max, abs, varijable, operatori, račun
from: 4da14575
---

Komponente sklopova dobivaju količinu iz formule. Formula je mali aritmetički izraz nad izmjerenim vrijednostima stavke. Za radne primjere vidi [Sklopovi i formule](topic:assemblies).

## Varijable

| Vrsta stavke | Varijabla | Značenje |
|---|---|---|
| Linearna | `L` | Ukupna duljina |
| Linearna | `H` | Visina stavke |
| Linearna | `A` | Površina zida, L × H, umanjena za otvore dionica koje ih imaju (predmjer iz programa BimCraft). Kad taj predmjer navodi metodu mjerenja, `A` se mjeri njome: otvori ne veći od najmanje veličine metode ostaju uračunati, a ono što metoda oduzima na spojevima zidova izostavlja se. Napomena ispod stavke navodi metodu |
| Linearna | `N` | Broj dionica |
| Površina | `A` | Ukupna neto površina (konture minus izrezi) |
| Površina | `P` | Ukupni opseg, uključujući rubove izreza |
| Površina | `H` | Dubina ili debljina stavke |
| Površina | `N` | Broj površina |
| Broj | `N` | Broj |

- Varijable su u jedinicama stavke: vidi [Jedinice](topic:units).
- Velika i mala slova su ista: `l` je `L`.
- Rade samo varijable vrste same stavke. `P` kod linearne stavke daje `"P" ovdje nije izmjerena vrijednost. Upotrijebite L, H, A, N.`
- Prazna visina ili dubina je 0.

## Operatori

| Upišete | Značenje |
|---|---|
| `+` | Zbrajanje |
| `-` ili `−` | Oduzimanje ili negativna vrijednost |
| `*` ili `×` | Množenje |
| `/` ili `÷` | Dijeljenje |
| `( )` | Grupiranje |

Množenje i dijeljenje imaju prednost pred zbrajanjem i oduzimanjem: `L * 2 + 4` je (L × 2) + 4. Kad niste sigurni, koristite zagrade.

Brojevi mogu imati decimale (`1.333`, `.5`) i eksponente (`1e3` = 1000). Razmaci se zanemaruju.

## Funkcije

| Funkcija | Rezultat | Primjer |
|---|---|---|
| `ceil(x)` | Zaokruži na više do cijelog broja | `ceil(67.5)` = 68 |
| `floor(x)` | Zaokruži na niže do cijelog broja | `floor(67.5)` = 67 |
| `round(x)` | Zaokruži na najbliži cijeli broj, polovine od nule | `round(2.5)` = 3 |
| `round(x, d)` | Zaokruži na d decimala (0 do 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Najmanja vrijednost | `min(N, 10)` |
| `max(a, b, …)` | Najveća vrijednost | `max(1, ceil(N / 12))` |
| `abs(x)` | Vrijednost bez predznaka | `abs(-3)` = 3 |

`ceil` i `floor` zanemaruju sitni šum zaokruživanja računala, pa vrijednost koja treba biti točno 1 nikad ne postaje 2.

## Greške

Formula koja se ne može pročitati ili izračunati prikazuje svoju grešku ispod polja, a komponenta se ne uračunava u zbrojeve (zaglavlje {{ui:Količine}} piše „Nepotpuno“). Poruke:

| Poruka | Ispravak |
|---|---|
| Upišite formulu, npr. L ili ceil(L / 1.333) + 1. | Formula je prazna. |
| „X“ ovdje nije izmjerena vrijednost. Upotrijebite … | Upotrijebite jednu od navedenih varijabli. |
| „X“ ovdje nije funkcija. Upotrijebite ceil, floor, round, min, max, abs. | Upotrijebite jednu od tih funkcija. |
| „#“ nije dopušten u formuli. | Uklonite taj znak (jedinice, `%`, `$` i `=` nisu dopušteni). |
| Nedostaje „)“. / Postoji „)“ bez svoje „(“. | Uravnotežite zagrade. |
| Pred „)“ nedostaje vrijednost. | Nešto poput `max(1, )`: upišite vrijednost. |
| Formula završava prerano. | Nešto poput `L *`: dovršite je. |
| Neočekivano „…“. Nedostaje li operator? | Dvije vrijednosti jedna uz drugu, poput `2L`: napišite `2 * L`. |
| ceil() prima 1 vrijednost. | Dajte funkciji ispravan broj vrijednosti. |
| round(x, digits) treba cijele decimale od 0 do 10. | Upotrijebite cijeli broj decimala. |
| Formula dijeli s nulom. | Obično je H 0: postavite visinu ili dubinu stavke. |
| Formula ne daje broj. | Rezultat je prevelik da bi bio broj. |
| Ta formula je predugačka (najviše 500 znakova). | Skratite je. |

## Sigurno po zamisli

Formula može obavljati samo aritmetiku s gore navedenim varijablama i funkcijama. Ne može pokretati kod niti čitati išta drugo, pa je formula u projektnoj datoteci koju vam netko pošalje bezopasna.
