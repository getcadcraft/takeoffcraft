---
title: Kalkulationsenheder og formler
summary: Tilføj komponenter til en post, og lad formler omregne dens længde, areal eller antal til regler, remme, plader, beton og beslag, med et gennemregnet eksempel for en væg.
keywords: kalkulationsenhed, komponenter, formel, regler, remme, plader, gipsplader, beton, cubic yards, beslag, opskrift, typisk, postdele
from: 12891a21
---

En posts **kalkulationsenhed** er en liste over komponenter, hver med en mængdeformel og egne spild- og satsværdier. Formlen bruger postens målte totaler, så ét mængdeudtræk af en væg giver dig regler, remme og plader på én gang, og de opdateres, når du måler.

## Variabler du kan bruge

| Posttype | Variabler |
|---|---|
| Lineær | `L` længde, `H` højde, `A` vægareal (L × H), `N` antal forløb |
| Areal | `A` areal, `P` omkreds (kontur + udsparinger), `H` dybde eller tykkelse, `N` antal arealer |
| Tælling | `N` antal |

Værdierne er i postens egne enheder: fod og kvadratfod for LF- og SF-poster, meter og kvadratmeter for m- og m²-poster. For en SY-post er `A` i kvadratyard, mens `P` og `H` forbliver i fod.

Formler bruger `+ - * /` (eller × ÷), parenteser, tal og funktionerne `ceil`, `floor`, `round`, `min`, `max` og `abs`. De fulde regler står i [Formelsprog](topic:formulas).

## Gennemregnet eksempel: en indvendig væg

Antag, at du har målt **Indvendig væg type A** som en lineær post: 4 forløb, samlet 120 LF, med {{ui:Højde}} sat til `9'-0"`. Dens **Målt**-værdier er L = 120, N = 4, A = 1,080 (SF væg, én side).

1. Vælg posten under {{ui:Poster}}.
2. Under {{ui:Kalkulationsenhed}} vælger du {{ui:Tilføj komponent}}.
   En komponent ved navn »Komponent« vises med formlen `L` og resultatet under den.
3. Skriv `Regler 16 in o.c.` i {{ui:Navn}} og `EA` i {{ui:Enhed}}.
4. I {{ui:Mængdeformel}} skriver du `ceil(L * 12 / 16) + N`.
   Resultatet opdateres, mens du skriver: »= 94 EA«. Det er én regel hver 16. tomme langs 120 fod (90), plus én ekstra for at lukke hvert af de 4 forløb.
5. Vælg {{ui:Tilføj komponent}} igen til remmene: navn `Remme, top og bund`, enhed `LF`, formel `L * 2`. Resultat: 240 LF.
6. Tilføj pladerne: navn `Gipsplade 4x8, begge sider`, enhed `plader`, formel `ceil(A * 2 / 32)`. Resultat: 68 plader (2,160 SF plade ÷ 32 SF pr. plade = 67.5, afrundet opad).
7. Udfyld hver komponents {{ui:Spild %}}, {{ui:Materiale $}} og {{ui:Løn $}}.
   Hver komponent får sin egen række under posten i {{ui:Mængder}}, prissat som en post, og {{ui:Jobtotal}} inkluderer den.

Hvis væggens omkostning ligger helt i komponenterne, så lad postens egne materiale- og lønsatser stå på 0, ellers tælles den to gange.

:::tip
Spild lægges til efter formlen og afrundes ikke: 68 plader med 10 % spild er 74.8 plader. For at bestille hele plader skal du lægge spildet ind i formlen, fx `ceil(A * 2 / 32 * 1.1)`, og lade komponentens spild stå på 0.
:::

## Flere formler

| Hvad | Post | Formel |
|---|---|---|
| Regler med 24 in centerafstand | Lineær | `ceil(L / 2) + N` |
| Isoleringsmåtter, SF | Lineær med højde | `A` |
| Maling, begge sider, gallons à 350 SF | Lineær med højde | `ceil(A * 2 / 350)` |
| Flisekartoner à 15 SF, 10 % ekstra | Areal | `ceil(A * 1.1 / 15)` |
| Fodlister eller kantlister, LF | Areal | `P` |
| Beton, cubic yards | Areal med dybde | `A * H / 27` |
| Beton afrundet opad til en kvart yard | Areal med dybde | `ceil(A * H / 27 * 4) / 4` |
| Hængsler, tre pr. dør | Tælling | `N * 3` |
| Mindst én æske, én pr. 12 | Tælling | `max(1, ceil(N / 12))` |

## Når en formel er forkert

Linjen under formlen bliver til en fejlmeddelelse, fx `"X" er ikke en målt værdi her. Brug L, H, A, N.` eller `A ")" mangler.` Komponenten har så ingen mængder, dens række i {{ui:Mængder}} viser »Formelfejl: …«, og overskriften siger »Ufuldstændig: 1 formelfejl (ikke med i totalerne)«. Ret formlen, så opdateres totalerne.

En formel, der dividerer med nul, er også en fejl (»Formlen dividerer med nul.«), fx `A / H` på en post uden dybde.

## Begrænsninger

- Formler kører på postens **totaler**, ikke forløb for forløb. `ceil(L * 12 / 16) + N` lægger én regel til pr. forløb; der er endnu ingen afrunding pr. forløb.
- En formel kan kun bruge sin egen posts variabler, ikke en anden posts.
- Op til 50 komponenter pr. post og 500 tegn pr. formel.

## Fjern en komponent

Vælg {{ui:Fjern komponent}} under den. Du kan fortryde det med {{key:Mod+Z}}.
