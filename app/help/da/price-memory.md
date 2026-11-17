---
title: Prishukommelse fra dine tidligere job
summary: TakeoffCraft husker de satser, du brugte i tidligere mængdeudtræk, kun på denne computer, så et nyt mængdeudtræk kan starte fra det, du betalte sidst. Se det, brug det, glem det.
keywords: prishukommelse, priser, husk priser, sidste job, tidligere job, typisk pris, median, satser, upriset, omprisning, lær af et tidligere mængdeudtræk, glem, bibliotek
from: 7279f1a1
---

{{ui:Priser}} på værktøjslinjen (dollartegnet) åbner det, TakeoffCraft husker om de priser, du har brugt. Det er en almindelig liste: for hvert postnavn satserne fra dine seneste job. Den gemmes i denne browser (i Studio, i sin egen webvisning) ved siden af prisbiblioteket, aldrig inde i en mængdeudtrækfil, og intet sendes nogen steder hen. Det er ikke en trænet model.

## Hvad der gemmes

Når du gemmer et mængdeudtræk, huskes hver post, der har en pris og er brugt (den har en markering, eller en skrevet mængde over nul), under sit navn og sin type: materialesats, lønsats, spild og enhed. Et job er de tegningsfiler, mængdeudtrækket er lavet ud fra, så gemmer du det samme mængdeudtræk igen, erstattes dets egne priser i stedet for at tilføje endnu et job. De seneste 12 job gemmes for hvert navn.

Vælg {{ui:Lær af et tidligere mængdeudtræk…}} for at starte med dit ældre arbejde, og vælg et gemt mængdeudtræk (.json). Dets prissatte og brugte poster huskes på samme måde.

Navne matcher, når deres ord matcher, uanset store og små bogstaver eller tegnsætning (»2x4 Stud, 8 ft« og »2x4 stud 8 FT« er det samme). Samme ord for en anden type post (en lineær post og en antalspost) er ikke den samme pris.

## Brug det på et nyt mængdeudtræk

1. Lav posterne i det nye mængdeudtræk.
2. Vælg {{ui:Priser}}. Under {{ui:Dette mængdeudtræk}} ser du hver post, der har en huskede pris, hvad du har på den nu, sidste jobs satser, de typiske satser (midten af de huskede job) og spændet.
3. Vælg {{ui:Brug sidste}} eller {{ui:Brug typisk}} på en post, eller {{ui:Prisæt N poster uden pris fra hukommelsen}} for at udfylde hver post uden pris endnu med sidste job.

Hver brug er ét trin: {{key:Ctrl+Z}} fortryder den. En post, der kun har et lignende navn (et navn inde i et andet), siger det, og knapperne bruger det lignende navns satser. En pris, der huskes pr. stk., sættes aldrig på en post pr. fod: dialogen siger, at enhederne er forskellige, og lader den være.

## Se det, ændr det, glem det

{{ui:Alt husket}} lister hvert navn med dets satser og antallet af job. Papirkurvsknappen glemmer ét navn; {{ui:Ryd alle priser}} glemmer dem alle. Slå {{ui:Husk mine priser, når jeg gemmer et mængdeudtræk}} fra for at holde op med at huske; det, der allerede er gemt, bliver liggende, indtil du glemmer det. Dine mængdeudtræk og prisbiblioteket røres aldrig.

## Med din assistent

Hvis du tillader assistenter i Indstillinger, kan de læse, hvad der huskes for mængdeudtrækkets poster (prices_list), og prisætte poster ud fra det (prices_apply, som kan vise en forhåndsvisning først). Det er den samme liste som i dialogen.
