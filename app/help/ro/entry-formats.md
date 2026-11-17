---
title: Introducerea lungimilor, tarifelor și procentelor
summary: Ce puteți scrie pentru distanțe, înălțimi, tarife în bani și procente de pierderi, cu exemple și mesajele pentru datele pe care TakeoffCraft nu le poate citi.
keywords: introducere, format, picioare și inci, fracții, picioare zecimale, metric, metri, milimetri, tarif, bani, dolari, procent, pierderi, scriere
from: 215bbf4d
---

## Lungimi

Folosit de **Distanța reală** din {{ui:Calibrare}} și de {{ui:Înălțime}} și {{ui:Adâncime}} din editorul de articol.

| Scrieți | Înseamnă |
|---|---|
| `24'-0"` | 24 de picioare |
| `24'-6 1/2"` | 24 de picioare și 6½ inci |
| `12' 6 1/2"` | 12 picioare și 6½ inci (un spațiu în loc de liniuță) |
| `12'-6-1/2"` | 12 picioare și 6½ inci (liniuțe între părți) |
| `24'` | 24 de picioare |
| `30"` | 30 de inci |
| `6 1/2"` | 6½ inci |
| `3/4"` | ¾ de inci |
| `24 ft 6 in` | 24 de picioare și 6 inci (și `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 în unitatea implicită (vezi mai jos) |
| `24.5'` | 24.5 picioare |
| `7.5 m` | 7.5 metri |
| `750 cm` | 750 de centimetri |
| `7500 mm` | 7,500 de milimetri |

- Un număr simplu este în **picioare** pentru calibrare și pentru articolele în LF, SF sau SY, și în **metri** pentru articolele în m sau m².
- Ghilimelele curbe și semnele de prim din procesoarele de text (′ ″ ’ ”) funcționează ca `'` și `"`. Două apostrofuri `''` contează ca `"`.
- Virgulele sunt ignorate: `1,200 mm` este 1200 mm.
- Fracțiile au nevoie de numere întregi pe ambele părți: `6 1/2"` funcționează, `6.5 1/2"` nu.
- Distanțele zero și negative sunt refuzate.

Mesaje:

- "Scrieți o distanță, de exemplu 24'-0" sau 7.5 m." (câmpul este gol)
- "Scrieți o distanță mai mare decât zero."
- "Folosiți picioare și inci (24'-6 1/2"), picioare zecimale, m, cm sau mm." (unitate necunoscută)
- "Distanța nu a putut fi citită. Încercați 24'-6 1/2" sau 24.5."

Pentru a șterge înălțimea sau adâncimea unui articol, goliți câmpul.

### Aritmetică

Fiecare câmp de lungime, precum și caseta de introducere în timpul desenării, acceptă și un calcul cu `+`, `-`, `*`, `/` și paranteze:
`4+7/16` (4.4375 în unitatea implicită), `12'6" + 3/4"`, `(24'-0")/3` (8 picioare), `2*450mm`.

- O liniuță scrisă într-o lungime face parte din ea: `24'-6"` înseamnă 24 de picioare și 6 inci, iar `6-1/2` este 6½. Puneți spații în jurul liniuței pentru a scădea: `24' - 6"` este 23'-6".
- Un număr simplu înmulțește sau împarte o lungime ca număr; adăugat la o lungime, este în unitatea implicită.
- `abs`, `round`, `ceil` și `floor` funcționează și ele. Un calcul care nu poate fi citit este refuzat, cu indicarea locului unde a greșit.

## Cum sunt afișate lungimile

Lungimile apar ca picioare, inci și șaisprezecimi: `12'-6 1/2"`, `0'-0 3/4"`. Valorile sunt rotunjite la cel mai apropiat 1/16 de inch pentru afișare; cantitățile în sine nu sunt rotunjite. Valorile zecimale apar cu două zecimale și separatori de mii, ca `1,234.50 LF`.

## Tarife (material și manoperă pe unitate)

| Scrieți | Înseamnă |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (până la patru zecimale; cele în plus sunt rotunjite) |
| (gol) | $0 |

Mesaj: "Scrieți o sumă, de exemplu 12.50." sau "Suma este prea mare." Tarifele negative nu sunt acceptate.

Sumele extinse (material, manoperă, totaluri) sunt calculate la nivel de ban: cantitatea cu pierderi × tarif, rotunjite la jumătate, în sensul depărtării de zero, exact ca `ROUND(x, 2)` dintr-un program de calcul tabelar.

## Procent de pierderi

| Scrieți | Înseamnă |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (gol) | 0% |

Până la două zecimale, de la 0% la 1000%. Mesaje: "Scrieți un procent, de exemplu 10 sau 7.5." sau "Pierderile peste 1000% nu sunt permise."

## Nume și unități

- Nume de articole și componente: până la 200 de caractere.
- {{ui:UM}} a unei componente: orice text de până la 20 de caractere, precum `EA`, `foi`, `CY`, `gal`. Este doar o etichetă; TakeoffCraft nu o convertește.

## Formule

Formulele articolelor compuse au regulile lor: vezi [Limbajul formulelor](topic:formulas).
