---
title: Llenguatge de fórmules
summary: Les regles per a les fórmules de quantitat dels preus descomposts: variables, operadors, funcions, arrodoniment i tots els missatges d'error.
keywords: fórmula, expressió, sintaxi, funcions, ceil, floor, round, min, max, abs, variables, operadors, càlcul
from: 4da14575
---

Els components d'un preu descompost obtenen la quantitat d'una fórmula. Una fórmula és una petita expressió aritmètica sobre els valors mesurats de la partida. Vegeu [Preus descomposts i fórmules](topic:assemblies) per veure'n exemples resolts.

## Variables

| Tipus de partida | Variable | Significat |
|---|---|---|
| Lineal | `L` | Longitud total |
| Lineal | `H` | L'alçada de la partida |
| Lineal | `A` | Àrea del mur, L × H, menys les obertures dels recorreguts que en tenen (un amidament de BimCraft). Quan aquest amidament indica un mètode de mesurament, `A` es mesura amb ell: les obertures no més grans que la mida mínima del mètode es mantenen, i el que el mètode descompta on es troben els murs no s'hi inclou. La nota sota la partida n'indica el mètode |
| Lineal | `N` | Nombre de recorreguts |
| Àrea | `A` | Àrea neta total (contorns menys retalls) |
| Àrea | `P` | Perímetre total, inclosos els costats dels retalls |
| Àrea | `H` | La profunditat o gruix de la partida |
| Àrea | `N` | Nombre d'àrees |
| Recompte | `N` | El recompte |

- Les variables són en les unitats de la partida: vegeu [Unitats](topic:units).
- Les majúscules i minúscules són iguals: `l` és `L`.
- Només funcionen les variables del tipus de la pròpia partida. `P` en una partida lineal dóna `"P" no és un valor mesurat aquí. Useu L, H, A, N.`
- Una alçada o profunditat buida és 0.

## Operadors

| Escriviu | Significat |
|---|---|
| `+` | Suma |
| `-` o `−` | Resta, o un valor negatiu |
| `*` o `×` | Multiplica |
| `/` o `÷` | Divideix |
| `( )` | Agrupa |

Multiplicar i dividir van abans que sumar i restar: `L * 2 + 4` és (L × 2) + 4. Useu parèntesis si hi ha dubte.

Els nombres poden tenir decimals (`1.333`, `.5`) i exponents (`1e3` = 1000). Els espais s'ignoren.

## Funcions

| Funció | Resultat | Exemple |
|---|---|---|
| `ceil(x)` | Arrodoneix cap amunt a un nombre enter | `ceil(67.5)` = 68 |
| `floor(x)` | Arrodoneix cap avall a un nombre enter | `floor(67.5)` = 67 |
| `round(x)` | Arrodoneix al nombre enter més proper, les meitats allunyades de zero | `round(2.5)` = 3 |
| `round(x, d)` | Arrodoneix a d decimals (de 0 a 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | El valor més petit | `min(N, 10)` |
| `max(a, b, …)` | El valor més gran | `max(1, ceil(N / 12))` |
| `abs(x)` | El valor sense signe | `abs(-3)` = 3 |

`ceil` i `floor` ignoren els petits errors d'arrodoniment de l'ordinador, de manera que un valor que hauria de ser exactament 1 mai no s'arrodoneix cap amunt a 2.

## Errors

Una fórmula que no es pot llegir o calcular mostra el seu error sota el camp, i el component es deixa fora dels totals (la capçalera de {{ui:Quantitats}} diu "Incomplet"). Missatges:

| Missatge | Solució |
|---|---|
| Escriviu una fórmula, com L o ceil(L / 1.333) + 1. | La fórmula és buida. |
| "X" no és un valor mesurat aquí. Useu … | Useu una de les variables de la llista. |
| "X" no és una funció aquí. Useu ceil, floor, round, min, max, abs. | Useu una d'aquestes funcions. |
| "#" no es permet en una fórmula. | Traieu aquest caràcter (les unitats, `%`, `$` i `=` no es permeten). |
| Falta un ")". / Hi ha un ")" sense el seu "(". | Equilibreu els parèntesis. |
| Falta un valor abans del ")". | Per exemple `max(1, )`: afegiu-hi el valor. |
| La fórmula acaba abans d'hora. | Per exemple `L *`: acabeu-la. |
| "…" inesperat. Falta un operador? | Dos valors un al costat de l'altre, com `2L`: escriviu `2 * L`. |
| ceil() accepta 1 valor. | Doneu a la funció el nombre correcte de valors. |
| round(x, digits) necessita dígits enters de 0 a 10. | Useu un nombre enter de decimals. |
| La fórmula divideix per zero. | Normalment H és 0: definiu l'alçada o la profunditat de la partida. |
| La fórmula no dona un nombre. | El resultat és massa gran per ser un nombre. |
| Aquesta fórmula és massa llarga (500 caràcters com a màxim). | Escurceu-la. |

## Segur per disseny

Una fórmula només pot fer aritmètica amb les variables i funcions de dalt. No pot executar codi ni llegir res més, de manera que una fórmula en un fitxer de projecte que us envia algú és inofensiva.
