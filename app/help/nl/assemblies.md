---
title: Samenstellingen en formules
summary: Voeg onderdelen toe aan een post en laat formules de lengte, oppervlakte of het aantal omzetten in stijlen, regels, platen gipsplaat, beton en beslag, met een uitgewerkt voorbeeld van een wand.
keywords: samenstelling, onderdelen, formule, stijlen, gipsplaat, platen, beton, kubieke yards, beslag, recept, typisch, postonderdelen
from: 12891a21
---

De **samenstelling** van een post is een lijst met onderdelen, elk met een hoeveelheidsformule en het eigen verlies en de eigen tarieven. De formule gebruikt de gemeten totalen van de post, dus één opmeting van een wand levert stijlen, regels en plaatmateriaal tegelijk op, en die worden bijgewerkt terwijl u meet.

## Variabelen die u kunt gebruiken

| Posttype | Variabelen |
|---|---|
| Lineair | `L` lengte, `H` hoogte, `A` wandoppervlak (L × H), `N` aantal lopen |
| Oppervlak | `A` oppervlakte, `P` omtrek (buitenlijn + uitsparingen), `H` diepte of dikte, `N` aantal oppervlakken |
| Aantal | `N` aantal |

De waarden zijn in de eigen eenheden van de post: voet en vierkante voet voor LF- en SF-posten, meter en vierkante meter voor posten in m en m². Bij een SY-post staat `A` in vierkante yards, terwijl `P` en `H` in voet blijven.

Formules gebruiken `+ - * /` (of × ÷), haakjes, getallen en de functies `ceil`, `floor`, `round`, `min`, `max` en `abs`. De volledige regels staan in [Formuletaal](topic:formulas).

## Uitgewerkt voorbeeld: een binnenwand

Stel dat u **Binnenwand type A** als lineaire post hebt opgemeten: 4 lopen met samen 120 LF, met {{ui:Hoogte}} op `9'-0"`. De **gemeten** waarden zijn L = 120, N = 4, A = 1,080 (SF wand, één zijde).

1. Selecteer de post onder {{ui:Posten}}.
2. Kies in {{ui:Samenstelling}} de optie {{ui:Onderdeel toevoegen}}.
   Er verschijnt een onderdeel met de naam "Component", met de formule `L` en het resultaat eronder.
3. Typ `Studs 16 in o.c.` in {{ui:Naam}} en `EA` in {{ui:Eenheid}}.
4. Typ in {{ui:Hoeveelheidsformule}} de formule `ceil(L * 12 / 16) + N`.
   Het resultaat wordt bijgewerkt terwijl u typt: "= 94 EA". Dat is één stijl per 16 inch langs 120 voet (90), plus één extra om elk van de 4 lopen af te sluiten.
5. Kies opnieuw {{ui:Onderdeel toevoegen}} voor de regels: naam `Plates, top and bottom`, eenheid `LF`, formule `L * 2`. Resultaat: 240 LF.
6. Voeg het plaatmateriaal toe: naam `Gypsum board 4x8, both sides`, eenheid `sheets`, formule `ceil(A * 2 / 32)`. Resultaat: 68 bladen (2,160 SF plaatmateriaal ÷ 32 SF per blad = 67.5, naar boven afgerond).
7. Vul bij elk onderdeel {{ui:Verlies %}}, {{ui:Materiaal $}} en {{ui:Arbeid $}} in.
   Elk onderdeel krijgt een eigen rij onder de post in {{ui:Hoeveelheden}}, geprijsd als een post, en het {{ui:Totaal van de opdracht}} neemt het mee.

Als de kosten van de wand volledig in de onderdelen zitten, laat u de eigen materiaal- en arbeidstarieven van de post op 0 staan, anders worden ze twee keer geteld.

:::tip
Verlies wordt na de formule toegepast en niet afgerond: 68 bladen met 10% verlies is 74.8 bladen. Om hele bladen te bestellen, zet u het verlies in de formule, zoals `ceil(A * 2 / 32 * 1.1)`, en laat u het verlies van het onderdeel op 0 staan.
:::

## Meer formules

| Wat | Post | Formule |
|---|---|---|
| Stijlen op 24 inch hart-op-hart | Lineair | `ceil(L / 2) + N` |
| Isolatiematten, SF | Lineair met hoogte | `A` |
| Verf, beide zijden, gallon per 350 SF | Lineair met hoogte | `ceil(A * 2 / 350)` |
| Tegeldozen per 15 SF, 10% extra | Oppervlak | `ceil(A * 1.1 / 15)` |
| Plint of randafwerking, LF | Oppervlak | `P` |
| Beton, kubieke yards | Oppervlak met diepte | `A * H / 27` |
| Beton, naar boven afgerond op een kwart yard | Oppervlak met diepte | `ceil(A * H / 27 * 4) / 4` |
| Scharnieren, drie per deur | Aantal | `N * 3` |
| Minstens één doos, één per 12 | Aantal | `max(1, ceil(N / 12))` |

## Wanneer een formule fout is

De regel onder de formule wordt een foutmelding, bijvoorbeeld `"X" is hier geen gemeten waarde. Gebruik L, H, A, N.` of `A ")" ontbreekt.` Het onderdeel heeft dan geen bedragen, de rij ervan in {{ui:Hoeveelheden}} toont "Formulefout: …", en de kop zegt "Onvolledig: 1 formulefout (niet in de totalen)". Corrigeer de formule en de totalen worden bijgewerkt.

Een formule die door nul deelt is ook een fout ("De formule deelt door nul."), bijvoorbeeld `A / H` bij een post zonder diepte.

## Beperkingen

- Formules werken op de **totalen** van de post, niet per loop. `ceil(L * 12 / 16) + N` voegt één stijl per loop toe; er is nog geen afronding per loop.
- Een formule kan alleen de variabelen van de eigen post gebruiken, niet die van een andere post.
- Maximaal 50 onderdelen per post, 500 tekens per formule.

## Een onderdeel verwijderen

Kies daaronder {{ui:Onderdeel verwijderen}}. U kunt dit ongedaan maken met {{key:Mod+Z}}.
