---
title: Wika ng formula
summary: Ang mga patakaran para sa quantity formula ng assembly: mga variable, operator, function, rounding at bawat mensahe ng error.
keywords: formula, expression, syntax, functions, ceil, floor, round, min, max, abs, variables, operators, kalkulasyon
from: 4da14575
---

Ang mga component ng assembly ay nakukuha ang quantity nila mula sa formula. Ang formula ay maliit na arithmetic expression sa mga sinukat na value ng item. Tingnan ang [Mga assembly at formula](topic:assemblies) para sa mga halimbawang detalyado.

## Mga variable

| Uri ng item | Variable | Kahulugan |
|---|---|---|
| Linear | `L` | Kabuuang haba |
| Linear | `H` | Taas ng item |
| Linear | `A` | Wall area, L × H, bawas ang mga opening ng mga run na may dala nito (takeoff mula sa BimCraft). Kapag may pinangalanang paraan ng pagsukat ang takeoff na iyon, sinusukat ito ayon doon: ang mga opening na hindi lalampas sa pinakamaliit na sukat ng paraan ay nananatili, at ang aalisin ng paraan sa mga pinagtatagpuan ng pader ay hindi isinasama. Sinasabi ng note sa ilalim ng item ang paraan |
| Linear | `N` | Bilang ng mga run |
| Area | `A` | Kabuuang net area (mga outline bawas ang mga cut-out) |
| Area | `P` | Kabuuang perimeter, kasama ang mga gilid ng cut-out |
| Area | `H` | Lalim o kapal ng item |
| Area | `N` | Bilang ng mga area |
| Count | `N` | Ang bilang |

- Ang mga variable ay nasa mga unit ng item: tingnan ang [Mga unit](topic:units).
- Pareho ang upper at lower case: ang `l` ay `L`.
- Tanging ang mga variable ng sarili nilang uri ng item ang gumagana. Ang `P` sa linear item ay nagbibigay ng `"P" ay hindi sinukat na value dito. Gamitin ang L, H, A, N.`
- Ang walang lamang taas o lalim ay 0.

## Mga operator

| Isulat | Kahulugan |
|---|---|
| `+` | Idagdag |
| `-` o `−` | Ibawas, o negatibong value |
| `*` o `×` | I-multiply |
| `/` o `÷` | Hatiin |
| `( )` | I-group |

Nauuna ang multiply at divide kaysa add at subtract: ang `L * 2 + 4` ay (L × 2) + 4. Gumamit ng parentheses kapag hindi sigurado.

Maaaring may decimal ang mga numero (`1.333`, `.5`) at exponent (`1e3` = 1000). Hindi pinapansin ang espasyo.

## Mga function

| Function | Resulta | Halimbawa |
|---|---|---|
| `ceil(x)` | Round pataas sa buong numero | `ceil(67.5)` = 68 |
| `floor(x)` | Round pababa sa buong numero | `floor(67.5)` = 67 |
| `round(x)` | Round sa pinakamalapit na buong numero, ang halfway ay palayo sa zero | `round(2.5)` = 3 |
| `round(x, d)` | Round sa d decimal (0 hanggang 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Ang pinakamaliit na value | `min(N, 10)` |
| `max(a, b, …)` | Ang pinakamalaking value | `max(1, ceil(N / 12))` |
| `abs(x)` | Ang value nang walang sign | `abs(-3)` = 3 |

Hindi pinapansin ng `ceil` at `floor` ang maliliit na computer rounding noise, kaya ang value na dapat ay eksaktong 1 ay hindi nagiging 2.

## Mga error

Ang formula na hindi mabasa o hindi makuwenta ay nagpapakita ng error nito sa ilalim ng field, at ang component ay hindi isinasama sa mga total (nagsasabing "Hindi kumpleto" ang header na {{ui:Dami}}). Mga mensahe:

| Mensahe | Ayusin |
|---|---|
| I-type ang formula, gaya ng L o ceil(L / 1.333) + 1. | Walang laman ang formula. |
| "X" ay hindi sinukat na value dito. Gamitin ang … | Gumamit ng isa sa mga nakalistang variable. |
| "X" ay hindi function dito. Gamitin ang ceil, floor, round, min, max, abs. | Gumamit ng isa sa mga iyon. |
| Hindi pinapayagan ang "#" sa formula. | Alisin ang character na iyon (hindi pinapayagan ang units, `%`, `$` at `=`). |
| Kulang ang ")". / May ")" na walang katapat na "(". | Balansehin ang parentheses. |
| May kulang na value bago ang ")". | Gaya ng `max(1, )`: punan ang value. |
| Masyadong maagang natapos ang formula. | Gaya ng `L *`: tapusin ito. |
| Hindi inaasahang "…". May kulang bang operator? | Dalawang value na magkatabi, gaya ng `2L`: isulat ang `2 * L`. |
| Isang value lang ang tinatanggap ng ceil(). | Bigyan ang function ng tamang bilang ng value. |
| Ang round(x, digits) ay nangangailangan ng buong digit mula 0 hanggang 10. | Gumamit ng buong bilang ng decimal. |
| Hinahati ng formula sa zero. | Kadalasan ay 0 ang H: itakda ang taas o lalim ng item. |
| Hindi nagbibigay ng numero ang formula. | Masyadong malaki ang resulta para maging numero. |
| Masyadong mahaba ang formula na iyon (500 character sa pinakamarami). | Paikliin ito. |

## Ligtas sa disenyo

Ang formula ay nakakapag-arithmetic lamang gamit ang mga variable at function sa itaas. Hindi ito makapagpapatakbo ng code o makababasa ng iba pa, kaya ligtas ang formula sa project file na ipinadala sa iyo ng iba.
