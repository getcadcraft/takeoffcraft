---
title: Samestellings en formules
summary: Voeg komponente by 'n item en laat formules sy lengte, oppervlakte of telling omskakel in penne, plate, plate bord, beton en beslag, met 'n uitgewerkte muurvoorbeeld.
keywords: samestelling, komponente, formule, penne, gipsbord, plate, beton, cubic yards, beslag, resep, tipies, itemdele
from: 12891a21
---

'n Item se **samestelling** is 'n lys komponente, elk met 'n hoeveelheidsformule en sy eie afval- en tariefkoerse. Die formule gebruik die item se gemete totale, so een hoeveelheidsopname van 'n muur gee jou penne, plate en bord tegelyk, en hulle word opgedateer soos jy meet.

## Veranderlikes wat jy kan gebruik

| Itemtipe | Veranderlikes |
|---|---|
| Lineêr | `L` lengte, `H` hoogte, `A` muuroppervlakte (L × H), `N` aantal lope |
| Oppervlakte | `A` oppervlakte, `P` perimeter (buitelyn + uitsnydings), `H` diepte of dikte, `N` aantal oppervlaktes |
| Telling | `N` telling |

Waardes is in die item se eie eenhede: voet en vierkante voet vir LF- en SF-items, meter en vierkante meter vir m- en m²-items. Vir 'n SY-item is `A` in vierkante yards, terwyl `P` en `H` in voet bly.

Formules gebruik `+ - * /` (of × ÷), hakies, getalle, en die funksies `ceil`, `floor`, `round`, `min`, `max` en `abs`. Die volledige reëls is in [Formuletaal](topic:formulas).

## Uitgewerkte voorbeeld: 'n binnemuur

Stel jy het **Binnemuur tipe A** as 'n lineêre item opgemeet: 4 lope wat altesaam 120 LF is, met {{ui:Hoogte}} op `9'-0"`. Die **Gemete**-waardes lees L = 120, N = 4, A = 1,080 (SF muur, een kant).

1. Kies die item onder {{ui:Items}}.
2. In {{ui:Samestelling}}, kies {{ui:Voeg komponent by}}.
   'n Komponent genaamd "Komponent" verskyn, met die formule `L` en sy resultaat daaronder.
3. Tik `Penne 16 in o.c.` in {{ui:Naam}} en `EA` in {{ui:Eenheid}}.
4. In {{ui:Hoeveelheidsformule}}, tik `ceil(L * 12 / 16) + N`.
   Die resultaat werk op soos jy tik: "= 94 EA". Dit is een pen elke 16 duim langs 120 voet (90), plus een ekstra om elk van die 4 lope af te sluit.
5. Kies weer {{ui:Voeg komponent by}} vir die plate: naam `Plate, bo en onder`, eenheid `LF`, formule `L * 2`. Resultaat: 240 LF.
6. Voeg die bord by: naam `Gipsbord 4x8, albei kante`, eenheid `plate`, formule `ceil(A * 2 / 32)`. Resultaat: 68 plate (2,160 SF bord ÷ 32 SF per plaat = 67.5, opwaarts afgerond).
7. Vul elke komponent se {{ui:Afval %}}, {{ui:Materiaal $}} en {{ui:Arbeid $}} in.
   Elke komponent kry sy eie ry onder die item in {{ui:Hoeveelhede}}, geprys soos 'n item, en die {{ui:Projektotaal}} sluit dit in.

As die muur se koste almal in die komponente is, laat die item se eie materiaal- en arbeidskoerse op 0, anders word dit twee keer getel.

:::tip
Afval word na die formule toegepas en word nie afgerond nie: 68 plate met 10% afval is 74.8 plate. Om hele plate te bestel, plaas die afval binne die formule, soos `ceil(A * 2 / 32 * 1.1)`, en laat die komponent se afval op 0.
:::

## Meer formules

| Wat | Item | Formule |
|---|---|---|
| Penne op 24 duim hart-tot-hart | Lineêr | `ceil(L / 2) + N` |
| Isolasiedeke, SF | Lineêr met hoogte | `A` |
| Verf, albei kante, gallon by 350 SF | Lineêr met hoogte | `ceil(A * 2 / 350)` |
| Teëlkartonne by 15 SF, 10% ekstra | Oppervlakte | `ceil(A * 1.1 / 15)` |
| Plint of randafwerking, LF | Oppervlakte | `P` |
| Beton, cubic yards | Oppervlakte met diepte | `A * H / 27` |
| Beton afgerond op 'n kwart yard | Oppervlakte met diepte | `ceil(A * H / 27 * 4) / 4` |
| Skarniere, drie per deur | Telling | `N * 3` |
| Minstens een boks, een per 12 | Telling | `max(1, ceil(N / 12))` |

## Wanneer 'n formule verkeerd is

Die lyn onder die formule word 'n foutboodskap, byvoorbeeld `"X" is nie 'n gemete waarde hier nie. Gebruik L, H, A, N.` of `A ")" ontbreek.` Die komponent het dan geen bedrae nie, sy ry in {{ui:Hoeveelhede}} wys "Formulefout: …", en die kop sê "Onvolledig: 1 formulefout (nie in die totale nie)". Regstel die formule en die totale werk op.

'n Formule wat deur nul deel, is ook 'n fout ("Die formule deel deur nul."), byvoorbeeld `A / H` op 'n item sonder diepte.

## Beperkings

- Formules loop op die item se **totale**, nie lopie vir lopie nie. `ceil(L * 12 / 16) + N` voeg een pen per loop by; daar is nog geen afronding per loop nie.
- 'n Formule kan net die veranderlikes van sy eie item gebruik, nie dié van 'n ander item nie.
- Tot 50 komponente per item, 500 karakters per formule.

## Verwyder 'n komponent

Kies {{ui:Verwyder komponent}} onder dit. Jy kan dit met {{key:Mod+Z}} ontdoen.
