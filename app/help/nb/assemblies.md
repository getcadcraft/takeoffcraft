---
title: Sammensatte poster og formler
summary: Legg til komponenter på en post og la formler gjøre lengde, areal eller antall om til stendere, svill, plater, betong og beslag, med et utarbeidet veggeksempel.
keywords: sammensatt post, komponenter, formel, stendere, gipsplater, plater, betong, kubikkyard, beslag, oppskrift, typisk, postdeler
from: 12891a21
---

En post har en **sammensatt post** som er en liste over komponenter, der hver komponent har sin egen mengdeformel og egne svinn- og enhetspriser. Formelen bruker postens målte totaler, så ett mengdeuttak av en vegg gir deg stendere, svill og plater samtidig, og de oppdateres etter hvert som du måler.

## Variabler du kan bruke

| Posttype | Variabler |
|---|---|
| Lineær | `L` lengde, `H` høyde, `A` veggareal (L × H), `N` antall løp |
| Areal | `A` areal, `P` omkrets (kontur + utsparinger), `H` dybde eller tykkelse, `N` antall arealer |
| Telling | `N` antall |

Verdiene er i postens egne enheter: fot og kvadratfot for LF- og SF-poster, meter og kvadratmeter for m- og m²-poster. For en SY-post er `A` i kvadratyard, mens `P` og `H` fortsatt er i fot.

Formler bruker `+ - * /` (eller × ÷), parenteser, tall og funksjonene `ceil`, `floor`, `round`, `min`, `max` og `abs`. Alle reglene finnes i [Formelspråk](topic:formulas).

## Eksempel: en innervegg

Anta at du har mengdeuttatt **Innervegg type A** som en lineær post: 4 løp til sammen 120 LF, med {{ui:Høyde}} satt til `9'-0"`. Verdiene under **Målt** er L = 120, N = 4, A = 1,080 (SF vegg, én side).

1. Velg posten under {{ui:Poster}}.
2. Velg {{ui:Legg til komponent}} under {{ui:Sammensatt post}}.
   En komponent som heter «Komponent» vises, med formelen `L` og resultatet under.
3. Skriv `Stendere 16 in o.c.` i {{ui:Navn}} og `EA` i {{ui:Enhet}}.
4. Skriv `ceil(L * 12 / 16) + N` i {{ui:Mengdeformel}}.
   Resultatet oppdateres mens du skriver: «= 94 EA». Det er én stender hver 16. tomme langs 120 fot (90), pluss én ekstra for å lukke hvert av de 4 løpene.
5. Velg {{ui:Legg til komponent}} igjen for svillene: navn `Svill, topp og bunn`, enhet `LF`, formel `L * 2`. Resultat: 240 LF.
6. Legg til gipsplatene: navn `Gipsplate 4x8, begge sider`, enhet `plater`, formel `ceil(A * 2 / 32)`. Resultat: 68 plater (2,160 SF gips ÷ 32 SF per plate = 67.5, avrundet opp).
7. Fyll ut {{ui:Svinn %}}, {{ui:Materiell $}} og {{ui:Arbeid $}} for hver komponent.
   Hver komponent får sin egen rad under posten i {{ui:Mengder}}, priset som en post, og {{ui:Jobbsum}} inkluderer den.

Hvis kostnaden for veggen ligger helt i komponentene, la postens egne materiell- og arbeidssatser stå på 0, ellers telles den to ganger.

:::tip
Svinn brukes etter formelen og avrundes ikke: 68 plater med 10 % svinn er 74.8 plater. For å bestille hele plater legger du svinnet inn i formelen, for eksempel `ceil(A * 2 / 32 * 1.1)`, og lar svinnet på komponenten stå på 0.
:::

## Flere formler

| Hva | Post | Formel |
|---|---|---|
| Stendere med 24 in c/c | Lineær | `ceil(L / 2) + N` |
| Isolasjonsmatter, SF | Lineær med høyde | `A` |
| Maling, begge sider, gallon per 350 SF | Lineær med høyde | `ceil(A * 2 / 350)` |
| Flisesker à 15 SF, 10 % ekstra | Areal | `ceil(A * 1.1 / 15)` |
| Sokkel eller kantlist, LF | Areal | `P` |
| Betong, kubikkyard | Areal med dybde | `A * H / 27` |
| Betong avrundet opp til kvart kubikkyard | Areal med dybde | `ceil(A * H / 27 * 4) / 4` |
| Hengsler, tre per dør | Telling | `N * 3` |
| Minst én eske, én per 12 | Telling | `max(1, ceil(N / 12))` |

## Når en formel er feil

Linjen under formelen blir en feilmelding, for eksempel «"X" er ikke en målt verdi her. Bruk L, H, A, N.» eller «A ")" mangler.» Komponenten har da ingen mengder, raden i {{ui:Mengder}} viser «Formelfeil: …», og overskriften sier «Ufullstendig: 1 formelfeil (ikke med i summene)». Rett formelen, så oppdateres summene.

En formel som deler på null, er også en feil («Formelen deler på null.»), for eksempel `A / H` på en post uten dybde.

## Begrensninger

- Formler kjøres på postens **totaler**, ikke løp for løp. `ceil(L * 12 / 16) + N` legger til én stender per løp; det finnes ingen avrunding per løp ennå.
- En formel kan bare bruke sin egen posts variabler, ikke en annen posts.
- Opptil 50 komponenter per post, 500 tegn per formel.

## Fjern en komponent

Velg {{ui:Fjern komponent}} under den. Du kan angre med {{key:Mod+Z}}.
