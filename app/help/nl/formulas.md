---
title: Formuletaal
summary: De regels voor formules voor samenstellingshoeveelheden - variabelen, operatoren, functies, afronding en elke foutmelding.
keywords: formule, expressie, syntaxis, functies, ceil, floor, round, min, max, abs, variabelen, operatoren, berekening
from: 4da14575
---

Onderdelen van een samenstelling krijgen hun hoeveelheid uit een formule. Een formule is een kleine rekenkundige expressie over de gemeten waarden van het item. Zie [Samenstellingen en formules](topic:assemblies) voor uitgewerkte voorbeelden.

## Variabelen

| Itemtype | Variabele | Betekenis |
|---|---|---|
| Lineair | `L` | Totale lengte |
| Lineair | `H` | De hoogte van het item |
| Lineair | `A` | Wandoppervlak, L × H, min de openingen in de lopende meters die ze hebben (een opmeting uit BimCraft). Wanneer die opmeting een meetmethode noemt, wordt `A` daarmee gemeten: openingen niet groter dan de kleinste maat van de methode blijven erin, en wat de methode aftrekt waar wanden samenkomen, wordt weggelaten. De opmerking onder het item noemt de methode |
| Lineair | `N` | Aantal lopende meters |
| Oppervlak | `A` | Totaal netto oppervlak (omtrekken min uitsparingen) |
| Oppervlak | `P` | Totale omtrek, inclusief de randen van uitsparingen |
| Oppervlak | `H` | De diepte of dikte van het item |
| Oppervlak | `N` | Aantal oppervlakken |
| Telling | `N` | De telling |

- Variabelen zijn in de eenheden van het item: zie [Eenheden](topic:units).
- Hoofd- en kleine letters zijn hetzelfde: `l` is `L`.
- Alleen de variabelen van het eigen type van het item werken. `P` op een lineair item geeft `"P" is hier geen gemeten waarde. Gebruik L, H, A, N.`
- Een lege hoogte of diepte is 0.

## Operatoren

| Schrijf | Betekenis |
|---|---|
| `+` | Optellen |
| `-` of `−` | Aftrekken, of een negatieve waarde |
| `*` of `×` | Vermenigvuldigen |
| `/` of `÷` | Delen |
| `( )` | Groeperen |

Vermenigvuldigen en delen gaan voor optellen en aftrekken: `L * 2 + 4` is (L × 2) + 4. Gebruik haakjes als u twijfelt.

Getallen kunnen decimalen hebben (`1.333`, `.5`) en exponenten (`1e3` = 1000). Spaties worden genegeerd.

## Functies

| Functie | Resultaat | Voorbeeld |
|---|---|---|
| `ceil(x)` | Naar boven afronden op een geheel getal | `ceil(67.5)` = 68 |
| `floor(x)` | Naar beneden afronden op een geheel getal | `floor(67.5)` = 67 |
| `round(x)` | Afronden op het dichtstbijzijnde gehele getal, halve waarden van nul af | `round(2.5)` = 3 |
| `round(x, d)` | Afronden op d decimalen (0 tot 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | De kleinste waarde | `min(N, 10)` |
| `max(a, b, …)` | De grootste waarde | `max(1, ceil(N / 12))` |
| `abs(x)` | De waarde zonder teken | `abs(-3)` = 3 |

`ceil` en `floor` negeren kleine afrondingsruis van de computer, zodat een waarde die precies 1 moet zijn, nooit naar 2 wordt afgerond.

## Fouten

Een formule die niet kan worden gelezen of berekend, toont zijn fout onder het veld, en het onderdeel telt niet mee in de totalen (de kop {{ui:Hoeveelheden}} zegt "Onvolledig"). Meldingen:

| Melding | Oplossing |
|---|---|
| Voer een formule in, zoals L of ceil(L / 1.333) + 1. | De formule is leeg. |
| "X" is hier geen gemeten waarde. Gebruik … | Gebruik een van de genoemde variabelen. |
| "X" is hier geen functie. Gebruik ceil, floor, round, min, max, abs. | Gebruik een van die functies. |
| "#" is niet toegestaan in een formule. | Verwijder dat teken (eenheden, `%`, `$` en `=` zijn niet toegestaan). |
| Er ontbreekt een ")". / Er staat een ")" zonder bijbehorende "(". | Zet de haakjes in evenwicht. |
| Er ontbreekt een waarde vóór ")". | Iets zoals `max(1, )`: vul de waarde in. |
| De formule eindigt te vroeg. | Iets zoals `L *`: maak hem af. |
| Onverwacht "…". Ontbreekt er een operator? | Twee waarden naast elkaar, zoals `2L`: schrijf `2 * L`. |
| ceil() neemt 1 waarde. | Geef de functie het juiste aantal waarden. |
| round(x, digits) heeft hele cijfers nodig van 0 tot 10. | Gebruik een geheel aantal decimalen. |
| De formule deelt door nul. | Meestal is H 0: stel de hoogte of diepte van het item in. |
| De formule geeft geen getal. | Het resultaat is te groot om een getal te zijn. |
| Die formule is te lang (maximaal 500 tekens). | Maak hem korter. |

## Veilig ontworpen

Een formule kan alleen rekenen met de hierboven genoemde variabelen en functies. Hij kan geen code uitvoeren en niets anders lezen, dus een formule in een projectbestand dat iemand u stuurt, is onschadelijk.
