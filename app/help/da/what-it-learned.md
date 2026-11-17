---
title: Hvad den har lært af dine mængdeudtrækk
summary: TakeoffCraft gemmer de symboler, du har bekræftet med Auto-tælling, dine sæt af betingelser, de kalkulationsenheder du bruger mest og mønstre, du gentager på hver side, alt sammen i mængdeudtrækkets egen fil. Se det, brug det, slet det.
keywords: lær, lært, læring, assistent, husk, symboler, skabeloner, samme som sidste job, sidste job, sæt af betingelser, betingelser, genbrug, kalkulationsenheder, mest brugt, forslag, gentag på hver side, hver side, titelblok, mønster, ryd alt, glem, privatliv
from: 54d99e99
---

TakeoffCraft bliver hurtigere, jo flere mængdeudtrækk du laver med det. Det lærer **kun af det, du accepterer**:

- de symboler, du har markeret med [Auto-tælling](topic:auto-count) og derefter tilføjet,
- de sæt af betingelser, du gemmer,
- de kalkulationsenheder, du bruger (én gang pr. job),
- de mønstre af mærker, du gentager på hver side.

Det er ren matchning på dine egne ark, den samme søgning som Auto-tælling kører. Det er ikke en trænet model. Alt det, den lærer, gemmes **i dette mængdeudtrægs fil** (`.takeoff.json`), og intet sendes nogen steder. For at tage det med til det næste job, brug [Samme som sidste job](topic:what-it-learned#same-as-last-job).

Vælg {{ui:Lært}} på værktøjslinjen (pæren ved siden af {{ui:Auto-tælling}}) for at se alt.

## Symboler

Når du markerer et symbol med {{ui:Auto-tælling}} og vælger {{ui:Tilføj}}, gemmes det markerede symbol med det match-niveau, du accepterede.

- I {{ui:Lært}} vælger du {{ui:Find på dette ark}} eller {{ui:Find på alle ark}}. Den sædvanlige gennemgang af Auto-tælling åbner: klik på en boks for at udelade den, flyt skyderen, og tilføj dem derefter. Intet tilføjes, før du gør det.
- Når du åbner et ark, hvor et lært symbol endnu ikke findes, viser en bjælke øverst {{ui:Find …}} for det. {{ui:Ikke nu}} skjuler den for det ark.
- Hvis mængdeudtrækket ikke har en post med det navn, tilføjer det også posten, når du tilføjer mærkerne (ét fortrydelsestrin).
- Tilføjer du symbolet for den samme post igen, tæller det med i det, den allerede kender; et symbol med et andet udseende gemmes som et andet.
- Ligesom Auto-tælling finder den symbolet i rette vinkler og på ark i en anden målestok.

## Sæt af betingelser

Et sæt gemmer et mængdeudtrægs betingelser (poster med deres enheder, enhedspriser, spild og kalkulationsenheder) uden mærker.

1. I {{ui:Lært}} vælger du {{ui:Gem dette mængdeudtrækks betingelser som et sæt…}} og giver det et navn. Et sæt med samme navn erstattes.
2. I et mængdeudtræk, der har sættet, lægger {{ui:Tilføj}} de betingelser ind, det endnu ikke har. Betingelser med samme navn og type lades være. Det er ét fortrydelsestrin.

## Samme som sidste job

Dit sidste jobs fil indeholder det, det lærte. For at starte et nyt job ud fra den:

1. Åbn de nye tegninger, og vælg {{ui:Lært}} › {{ui:Som sidste job…}}.
2. Vælg det sidste jobs `.takeoff.json`.
3. Sæt flueben ved det, der skal hentes ind: dets betingelser (kun dem, dette mængdeudtræk ikke har), og det, det lærte (symboler, sæt, kalkulationsenheder, mønstre). Vælg derefter {{ui:Hent dem ind}}.

Dets betingelser gemmes også som et sæt, navngivet efter jobbet. Dets mærker og mængder bliver i sin egen fil. Det hele er ét fortrydelsestrin.

## Kalkulationsenheder, du bruger mest

En post med en kalkulationsenhed tæller som brugt én gang pr. job, når den har en mængde, og du gemmer mængdeudtrækket. Et job er det sæt planfiler, det tages af, så at gemme det samme mængdeudtræk igen tæller ikke to gange. Listen under {{ui:Kalkulationsenheder, du bruger mest}} sætter dem, du bruger mest, øverst. Den udelader dem, dette mængdeudtræk allerede har. {{ui:Tilføj}} lægger en ind, som du sidst brugte den, med alle dens dele.

## Gentag på hver side

For mærker, der er ens på hver side i et sæt, som en titelblokstælling eller en typisk detalje:

1. Vælg mærkerne på ét ark ([Vælg mærkerne](topic:copy-paste#select-the-marks)).
2. I {{ui:Lært}} vælger du {{ui:Gentag de valgte mærker på hver side…}}, giver mønsteret et navn og bekræfter.

De lægges på alle andre åbne sider **i samme størrelse**, på samme sted, som ét fortrydelsestrin. Længder og arealer lægges kun på sider med samme målestok; tællinger lægges på enhver side i den størrelse. En side, der allerede har dem, springes over. Mønsteret gemmes, så sider, du åbner senere, får tilbuddet i bjælken, eller du bruger {{ui:Gentag på hver side}} i listen.

## Se det, slet det

Alt det lærte er listet i {{ui:Lært}}. Papirkurven sletter ét ting. {{ui:Ryd alt}} sletter alt det lærte og lader dine poster og mærker være. Begge kan fortrydes, indtil du lukker mængdeudtrækket, og begge gemmes med mængdeudtrækket.

For at stoppe med at lære i ét mængdeudtræk, fjern flueben i {{ui:Lær af dette mængdeudtræk}}. Intet nyt læres, og det, der er listet, bliver, indtil du sletter det.

## Godt at vide

- Ældre versioner af TakeoffCraft åbner en fil med lærte ting normalt. De ignorerer den del og fjerner den, hvis de gemmer filen igen.
- Et lært symbol er et lille billede af det, du markerede, gemt i filen (nogle få kilobyte hver).
- Lærte symboler søges, ligesom Auto-tælling søger, så de samme begrænsninger gælder: [Auto-tæl et symbol](topic:auto-count).
