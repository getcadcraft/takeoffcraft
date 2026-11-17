---
title: Jezik formula
summary: Pravila za formule količina sklopova - varijable, operatori, funkcije, zaokruživanje i svaka poruka o grešci.
keywords: formula, izraz, sintaksa, funkcije, ceil, floor, round, min, max, abs, varijable, operatori, računanje
from: 4da14575
---

Komponente sklopa dobijaju količinu iz formule. Formula je mali aritmetički izraz nad izmjerenim vrijednostima stavke. Vidi [Sklopovi i formule](topic:assemblies) za primjere.

## Varijable

| Vrsta stavke | Varijabla | Značenje |
|---|---|---|
| Linearna | `L` | Ukupna dužina |
| Linearna | `H` | Visina stavke |
| Linearna | `A` | Površina zida, L × H, umanjena za otvore dionica koje ih nose (predmjer iz aplikacije BimCraft). Kada predmjer navede metodu mjerenja, `A` se mjeri njome: otvori ne veći od najmanje veličine metode ostaju uključeni, a ono što metoda izostavlja tamo gdje se zidovi spajaju je izostavljeno. Napomena ispod stavke navodi metodu |
| Linearna | `N` | Broj dionica |
| Površina | `A` | Ukupna neto površina (konture umanjene za izreze) |
| Površina | `P` | Ukupni obim, uključujući ivice izreza |
| Površina | `H` | Dubina ili debljina stavke |
| Površina | `N` | Broj površina |
| Brojanje | `N` | Broj |

- Varijable su u jedinicama stavke: vidi [Jedinice](topic:units).
- Velika i mala slova su ista: `l` je `L`.
- Rade samo varijable vlastite vrste stavke. `P` na linearnoj stavci daje `"P" nije izmjerena vrijednost ovdje. Koristi L, H, A, N.`
- Prazna visina ili dubina je 0.

## Operatori

| Piše se | Značenje |
|---|---|
| `+` | Sabiranje |
| `-` ili `−` | Oduzimanje ili negativna vrijednost |
| `*` ili `×` | Množenje |
| `/` ili `÷` | Dijeljenje |
| `( )` | Grupisanje |

Množenje i dijeljenje idu prije sabiranja i oduzimanja: `L * 2 + 4` je (L × 2) + 4. Kada nisi siguran, koristi zagrade.

Brojevi mogu imati decimale (`1.333`, `.5`) i eksponente (`1e3` = 1000). Razmaci se ignorišu.

## Funkcije

| Funkcija | Rezultat | Primjer |
|---|---|---|
| `ceil(x)` | Zaokruži na gore na cijeli broj | `ceil(67.5)` = 68 |
| `floor(x)` | Zaokruži na dolje na cijeli broj | `floor(67.5)` = 67 |
| `round(x)` | Zaokruži na najbliži cijeli broj, polovine od nule | `round(2.5)` = 3 |
| `round(x, d)` | Zaokruži na d decimala (0 do 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Najmanja vrijednost | `min(N, 10)` |
| `max(a, b, …)` | Najveća vrijednost | `max(1, ceil(N / 12))` |
| `abs(x)` | Vrijednost bez predznaka | `abs(-3)` = 3 |

`ceil` i `floor` zanemaruju sitni šum računara pri zaokruživanju, pa vrijednost koja treba biti tačno 1 nikada nije zaokružena na 2.

## Greške

Formula koja se ne može pročitati ili izračunati prikazuje svoju grešku ispod polja, a komponenta je izostavljena iz ukupnih iznosa (zaglavlje {{ui:Quantities}} kaže "Nepotpuno"). Poruke:

| Poruka | Popravka |
|---|---|
| Upiši formulu, na primjer L ili ceil(L / 1.333) + 1. | Formula je prazna. |
| "X" nije izmjerena vrijednost ovdje. Koristi … | Koristi jednu od navedenih varijabli. |
| "X" nije funkcija ovdje. Koristi ceil, floor, round, min, max, abs. | Koristi jednu od tih funkcija. |
| "#" nije dozvoljeno u formuli. | Ukloni taj znak (jedinice, `%`, `$` i `=` nisu dozvoljeni). |
| Nedostaje ")". / Ima ")" bez "(". | Uravnoteži zagrade. |
| Vrijednost nedostaje prije ")". | Nešto kao `max(1, )`: upiši vrijednost. |
| Formula se završava prerano. | Nešto kao `L *`: dovrši je. |
| Neočekivano "…". Nedostaje li operator? | Dvije vrijednosti jedna pored druge, kao `2L`: napiši `2 * L`. |
| ceil() prima 1 vrijednost. | Daj funkciji tačan broj vrijednosti. |
| round(x, digits) treba cijele cifre od 0 do 10. | Koristi cijeli broj decimala. |
| Formula dijeli sa nulom. | Obično je H 0: postavi visinu ili dubinu stavke. |
| Formula ne daje broj. | Rezultat je prevelik da bi bio broj. |
| Ta formula je predugačka (najviše 500 znakova). | Skrati je. |

## Sigurno po dizajnu

Formula može raditi samo aritmetiku s navedenim varijablama i funkcijama. Ne može pokretati kod niti čitati išta drugo, pa je formula u projektnoj datoteci koju ti neko pošalje bezopasna.
