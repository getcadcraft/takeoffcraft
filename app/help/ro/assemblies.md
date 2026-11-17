---
title: Articole compuse și formule
summary: Adăugați componente unui articol și lăsați formulele să transforme lungimea, aria sau numărul lui în montanți, tălpi, plăci de gips-carton, beton și feronerie, cu un exemplu de perete parcurs pas cu pas.
keywords: articol compus, componente, formulă, montanți, gips-carton, plăci, tălpi, beton, cubic yards, feronerie, rețetă, tipic, părți ale articolului
from: 12891a21
---

Articolul compus al unui articol este o listă de componente, fiecare cu o formulă de cantitate și cu propriile pierderi și rate. Formula folosește totalurile măsurate ale articolului, deci o singură extragere a unui perete dă montanți, tălpi și plăci deodată, iar acestea se actualizează pe măsură ce măsurați.

## Variabile pe care le puteți folosi

| Tip de articol | Variabile |
|---|---|
| Liniar | `L` lungime, `H` înălțime, `A` aria peretelui (L × H), `N` numărul de tronsoane |
| Arie | `A` arie, `P` perimetru (contur + decupaje), `H` adâncime sau grosime, `N` numărul de arii |
| Numărare | `N` număr |

Valorile sunt în unitățile proprii ale articolului: picioare și picioare pătrate pentru articolele LF și SF, metri și metri pătrați pentru articolele m și m². Pentru un articol SY, `A` este în yarzi pătrați, iar `P` și `H` rămân în picioare.

Formulele folosesc `+ - * /` (sau × ÷), paranteze, numere și funcțiile `ceil`, `floor`, `round`, `min`, `max` și `abs`. Regulile complete sunt în [Limbajul formulelor](topic:formulas).

## Exemplu pas cu pas: un perete interior

Să presupunem că ați extras **Perete interior tip A** ca articol liniar: 4 tronsoane care totalizează 120 LF, cu {{ui:Înălțime}} setată la `9'-0"`. Valorile sale **Măsurate** sunt L = 120, N = 4, A = 1,080 (SF de perete, o față).

1. Selectați articolul din {{ui:Articole}}.
2. În {{ui:Articol compus}}, alegeți {{ui:Adăugare componentă}}.
   Apare o componentă numită „Componentă”, cu formula `L` și rezultatul ei dedesubt.
3. Scrieți `Studs 16 in o.c.` în {{ui:Nume}} și `EA` în {{ui:UM}}.
4. În {{ui:Formulă de cantitate}}, scrieți `ceil(L * 12 / 16) + N`.
   Rezultatul se actualizează pe măsură ce scrieți: „= 94 EA”. Acesta este câte un montant la fiecare 16 inci de-a lungul celor 120 de picioare (90), plus unul în plus pentru a închide fiecare dintre cele 4 tronsoane.
5. Alegeți din nou {{ui:Adăugare componentă}} pentru tălpi: cu denumirea `Plates, top and bottom`, unitatea `LF`, formula `L * 2`. Rezultat: 240 LF.
6. Adăugați placa: cu denumirea `Gypsum board 4x8, both sides`, unitatea `sheets`, formula `ceil(A * 2 / 32)`. Rezultat: 68 sheets (2,160 SF de placă ÷ 32 SF pe placă = 67.5, rotunjit în sus).
7. Completați pentru fiecare componentă {{ui:Pierderi %}}, {{ui:Materiale $}} și {{ui:Manoperă $}}.
   Fiecare componentă are propriul rând sub articol în {{ui:Cantități}}, prețuit ca un articol, iar {{ui:Total lucrare}} o include.

Dacă tot costul peretelui este în componente, lăsați ratele proprii de material și manoperă ale articolului la 0, altfel se numără de două ori.

:::tip
Pierderea se aplică după formulă și nu se rotunjește: 68 de plăci cu 10% pierderi înseamnă 74.8 plăci. Pentru a comanda plăci întregi, includeți pierderea în formulă, de exemplu `ceil(A * 2 / 32 * 1.1)`, și lăsați pierderea componentei la 0.
:::

## Alte formule

| Ce | Tip | Formulă |
|---|---|---|
| Montanți la 24 in axă la axă | Liniar | `ceil(L / 2) + N` |
| Saltele de izolație, SF | Liniar cu înălțime | `A` |
| Vopsea, ambele fețe, galoane la 350 SF | Liniar cu înălțime | `ceil(A * 2 / 350)` |
| Cutii de gresie la 15 SF, plus 10% | Arie | `ceil(A * 1.1 / 15)` |
| Plintă sau profil de margine, LF | Arie | `P` |
| Beton, cubic yards | Arie cu adâncime | `A * H / 27` |
| Beton rotunjit în sus la un sfert de yard | Arie cu adâncime | `ceil(A * H / 27 * 4) / 4` |
| Balamale, trei pe ușă | Numărare | `N * 3` |
| Cel puțin o cutie, una la 12 | Numărare | `max(1, ceil(N / 12))` |

## Când o formulă este greșită

Linia de sub formulă devine un mesaj de eroare, de exemplu `"X" is not a measured value here. Use L, H, A, N.` sau `A ")" is missing.` Componenta nu are atunci sume, rândul ei din {{ui:Cantități}} arată „Eroare de formulă: …”, iar antetul spune „Incomplet: 1 eroare de formulă (nu este inclusă în totaluri)”. Corectați formula, iar totalurile se actualizează.

O formulă care împarte la zero este de asemenea o eroare („Formula împarte la zero.”), de exemplu `A / H` pentru un articol fără adâncime.

## Limite

- Formulele se calculează pe **totalurile** articolului, nu tronson cu tronson. `ceil(L * 12 / 16) + N` adaugă un montant pe tronson; încă nu există rotunjire pe tronson.
- O formulă poate folosi doar variabilele propriului articol, nu ale altui articol.
- Până la 50 de componente pe articol, 500 de caractere pe formulă.

## Eliminarea unei componente

Alegeți {{ui:Eliminare componentă}} sub ea. Puteți anula cu {{key:Mod+Z}}.
