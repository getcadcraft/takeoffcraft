---
title: Formuletaal
summary: Die reëls vir samestellings-hoeveelheidsformules: veranderlikes, operateurs, funksies, afronding en elke foutboodskap.
keywords: formule, uitdrukking, sintaksis, funksies, ceil, floor, round, min, max, abs, veranderlikes, operateurs, berekening
from: 4da14575
---

Samestellingskomponente kry hul hoeveelheid uit 'n formule. 'n Formule is 'n klein rekenkundige uitdrukking oor die item se gemete waardes. Sien [Samestellings en formules](topic:assemblies) vir uitgewerkte voorbeelde.

## Veranderlikes

| Itemtipe | Veranderlike | Betekenis |
|---|---|---|
| Lineêr | `L` | Totale lengte |
| Lineêr | `H` | Die item se hoogte |
| Lineêr | `A` | Muuroppervlakte, L × H, min die openings van lope wat hulle dra (uit 'n hoeveelheidsopname van BimCraft). Wanneer daardie hoeveelheidsopname 'n meetmetode noem, word `A` deur daardie metode gemeet: openings nie groter as die metode se kleinste grootte bly in nie, en wat die metode waar mure ontmoet opmeet, word weggelaat. Die nota onder die item noem die metode |
| Lineêr | `N` | Aantal lope |
| Oppervlakte | `A` | Totale netto-oppervlakte (buitelyne min uitsnedes) |
| Oppervlakte | `P` | Totale omtrek, insluitend uitsnede-rande |
| Oppervlakte | `H` | Die item se diepte of dikte |
| Oppervlakte | `N` | Aantal oppervlaktes |
| Tel | `N` | Die telling |

- Veranderlikes is in die item se eenhede: sien [Eenhede](topic:units).
- Hoofletters en kleinletters is dieselfde: `l` is `L`.
- Slegs die veranderlikes van die item se eie tipe werk. `P` op 'n lineêre item gee `"P" is nie 'n gemete waarde hier nie. Gebruik L, H, A, N.`
- 'n Leë hoogte of diepte is 0.

## Operateurs

| Skryf | Betekenis |
|---|---|
| `+` | Tel op |
| `-` of `−` | Trek af, of 'n negatiewe waarde |
| `*` of `×` | Vermenigvuldig |
| `/` of `÷` | Deel |
| `( )` | Groepeer |

Vermenigvuldig en deel gaan voor optel en aftrek: `L * 2 + 4` is (L × 2) + 4. Gebruik hakies wanneer jy twyfel.

Getalle kan desimale hê (`1.333`, `.5`) en eksponente (`1e3` = 1000). Spasies word geïgnoreer.

## Funksies

| Funksie | Resultaat | Voorbeeld |
|---|---|---|
| `ceil(x)` | Rond op na 'n heelgetal | `ceil(67.5)` = 68 |
| `floor(x)` | Rond af na 'n heelgetal | `floor(67.5)` = 67 |
| `round(x)` | Rond af na die naaste heelgetal, halwe waardes weg van nul | `round(2.5)` = 3 |
| `round(x, d)` | Rond af na d desimale (0 tot 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Die kleinste waarde | `min(N, 10)` |
| `max(a, b, …)` | Die grootste waarde | `max(1, ceil(N / 12))` |
| `abs(x)` | Die waarde sonder sy teken | `abs(-3)` = 3 |

`ceil` en `floor` ignoreer klein rekenaar-afrondingsgeraas, so 'n waarde wat presies 1 moet wees, word nooit na 2 opgerond nie.

## Foute

'n Formule wat nie gelees of uitgewerk kan word nie, wys sy fout onder die veld, en die komponent word uit die totale weggelaat (die {{ui:Hoeveelhede}}-kopskrif sê "Onvolledig"). Boodskappe:

| Boodskap | Herstel |
|---|---|
| Tik 'n formule, soos L of ceil(L / 1.333) + 1. | Die formule is leeg. |
| "X" is nie 'n gemete waarde hier nie. Gebruik … | Gebruik een van die gelyste veranderlikes. |
| "X" is nie 'n funksie hier nie. Gebruik ceil, floor, round, min, max, abs. | Gebruik een van daardie funksies. |
| "#" is nie toegelaat in 'n formule nie. | Verwyder daardie karakter (eenhede, `%`, `$` en `=` is nie toegelaat nie). |
| 'n ")" ontbreek. / Daar is 'n ")" sonder sy "(". | Balanseer die hakies. |
| 'n Waarde ontbreek voor ")". | Iets soos `max(1, )`: vul die waarde in. |
| Die formule eindig te vroeg. | Iets soos `L *`: voltooi dit. |
| Onverwags "…". Ontbreek 'n operateur? | Twee waardes langs mekaar, soos `2L`: skryf `2 * L`. |
| ceil() neem 1 waarde. | Gee die funksie die regte aantal waardes. |
| round(x, digits) benodig heelgetal-desimale van 0 tot 10. | Gebruik 'n heelgetal van desimale. |
| Die formule deel deur nul. | Gewoonlik is H 0: stel die item se hoogte of diepte. |
| Die formule gee nie 'n getal nie. | Die resultaat is te groot om 'n getal te wees. |
| Daardie formule is te lank (hoogstens 500 karakters). | Verkort dit. |

## Veilig by ontwerp

'n Formule kan net rekenkunde doen met die veranderlikes en funksies hierbo. Dit kan geen kode uitvoer of iets anders lees nie, so 'n formule in 'n projeklêer wat iemand vir jou stuur, is onskadelik.
