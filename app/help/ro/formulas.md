---
title: Limbajul formulelor
summary: Regulile pentru formulele cantităților din ansambluri - variabile, operatori, funcții, rotunjire și fiecare mesaj de eroare.
keywords: formulă, expresie, sintaxă, funcții, ceil, floor, round, min, max, abs, variabile, operatori, calcul
from: 4da14575
---

Componentele ansamblurilor își iau cantitatea dintr-o formulă. O formulă este o expresie aritmetică mică peste valorile măsurate ale articolului. Vezi [Ansambluri și formule](topic:assemblies) pentru exemple lucrate.

## Variabile

| Tip de articol | Variabilă | Sens |
|---|---|---|
| Liniar | `L` | Lungimea totală |
| Liniar | `H` | Înălțimea articolului |
| Liniar | `A` | Aria peretelui, L × H, minus golurile traseelor care le au (o antemăsurătoare din BimCraft). Când antemăsurătoarea denumește o metodă de măsurare, `A` este măsurată prin ea: golurile nu mai mari decât cea mai mică dimensiune a metodei rămân incluse, iar ce ia metoda la intersecția pereților este exclus. Nota de sub articol denumește metoda |
| Liniar | `N` | Numărul de trasee |
| Arie | `A` | Aria netă totală (contururi minus decupaje) |
| Arie | `P` | Perimetrul total, inclusiv marginile decupajelor |
| Arie | `H` | Adâncimea sau grosimea articolului |
| Arie | `N` | Numărul de arii |
| Numărare | `N` | Numărul |

- Variabilele sunt în unitățile articolului: vezi [Unități](topic:units).
- Literele mari și cele mici sunt la fel: `l` este `L`.
- Funcționează doar variabilele propriului tip de articol. `P` pe un articol liniar dă `"P" nu este o valoare măsurată aici. Folosiți L, H, A, N.`
- O înălțime sau o adâncime goală este 0.

## Operatori

| Scrieți | Sens |
|---|---|
| `+` | Adunare |
| `-` sau `−` | Scădere sau o valoare negativă |
| `*` sau `×` | Înmulțire |
| `/` sau `÷` | Împărțire |
| `( )` | Grupare |

Înmulțirea și împărțirea merg înaintea adunării și scăderii: `L * 2 + 4` este (L × 2) + 4. Folosiți paranteze când aveți dubii.

Numerele pot avea zecimale (`1.333`, `.5`) și exponenți (`1e3` = 1000). Spațiile sunt ignorate.

## Funcții

| Funcție | Rezultat | Exemplu |
|---|---|---|
| `ceil(x)` | Rotunjire în sus la un număr întreg | `ceil(67.5)` = 68 |
| `floor(x)` | Rotunjire în jos la un număr întreg | `floor(67.5)` = 67 |
| `round(x)` | Rotunjire la cel mai apropiat număr întreg, jumătățile departe de zero | `round(2.5)` = 3 |
| `round(x, d)` | Rotunjire la d zecimale (0 până la 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Cea mai mică valoare | `min(N, 10)` |
| `max(a, b, …)` | Cea mai mare valoare | `max(1, ceil(N / 12))` |
| `abs(x)` | Valoarea fără semn | `abs(-3)` = 3 |

`ceil` și `floor` ignoră zgomotul mic de rotunjire al calculatorului, deci o valoare care ar trebui să fie exact 1 nu este niciodată rotunjită în sus la 2.

## Erori

O formulă care nu poate fi citită sau calculată își arată eroarea sub câmp, iar componenta este lăsată din totaluri (antetul {{ui:Cantități}} spune "Incomplet"). Mesaje:

| Mesaj | Remediere |
|---|---|
| Scrieți o formulă, de exemplu L sau ceil(L / 1.333) + 1. | Formula este goală. |
| "X" nu este o valoare măsurată aici. Folosiți … | Folosiți una dintre variabilele listate. |
| "X" nu este o funcție aici. Folosiți ceil, floor, round, min, max, abs. | Folosiți una dintre acestea. |
| "#" nu este permis într-o formulă. | Eliminați acel caracter (unitățile, `%`, `$` și `=` nu sunt permise). |
| Lipsește un ")". / Există un ")" fără "(". | Echilibrați parantezele. |
| Lipsește o valoare înainte de ")". | Ceva ca `max(1, )`: completați valoarea. |
| Formula se termină prea devreme. | Ceva ca `L *`: terminați-o. |
| Neașteptat "…". Lipsește un operator? | Două valori una lângă alta, ca `2L`: scrieți `2 * L`. |
| ceil() primește 1 valoare. | Dați funcției numărul corect de valori. |
| round(x, digits) are nevoie de un număr întreg de zecimale de la 0 la 10. | Folosiți un număr întreg de zecimale. |
| Formula împarte la zero. | De obicei H este 0: setați înălțimea sau adâncimea articolului. |
| Formula nu dă un număr. | Rezultatul este prea mare pentru a fi un număr. |
| Formula este prea lungă (cel mult 500 de caractere). | Scurtați-o. |

## Sigură prin concepție

O formulă poate face doar calcule aritmetice cu variabilele și funcțiile de mai sus. Nu poate rula cod și nu poate citi altceva, deci o formulă dintr-un fișier de proiect trimis de altcineva este inofensivă.
