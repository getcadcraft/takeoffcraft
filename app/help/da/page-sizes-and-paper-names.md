---
title: Sidestørrelser og papirnavne
summary: Se hvert arks størrelse i millimeter og tommer og dets papirnavn (A-, B- og C-serien, ANSI, ARCH), og gruppér et blandet sæt efter størrelse for at finde de usædvanlige ark.
keywords: sidestørrelse, papirstørrelse, papirnavn, a0, a1, a2, a3, a4, b-serie, c-serie, ansi, arch, arkitektonisk, mm, tommer, brugerdefineret størrelse, efter størrelse, usædvanlig størrelse, blandet sæt, målestok, tegningssæt, mediabox, rotation
from: 9c061c07
---

En målestok betyder kun noget på det rigtige papir. {{ui:TakeoffCraft}} læser størrelsen på hvert PDF-ark og navngiver papiret, så du kan se et ark, der er udskrevet i en anden størrelse, før du stoler på en måling på det.

## Hvad du skal gøre

Se på størrelsen af det åbne ark, og gruppér derefter hele sættet efter størrelse.

## Trin

1. Åbn tegningerne ({{ui:Open plans}}).
2. Arkbjælken over tegningen viser det åbne arks papirnavn og størrelse, for eksempel »A1 · 594 × 841 mm«.
3. Hver række i listen {{ui:Sheets}} har en størrelseslinje under arknavnet.
4. Vælg {{ui:By size}} i overskriften til {{ui:Sheets}}. Listen samler arkene under én overskrift pr. størrelse, med den største gruppe først, og markerer en størrelse med kun få ark som en undtagelse.
5. Vælg {{ui:By size}} igen for at gå tilbage til sættets egen rækkefølge.

Et DWG- eller DXF-ark har ikke et papir, så der vises ingen størrelse for det.

## Sådan vælges navnet

- Størrelsen kommer fra sidens boks i PDF-filen, med rotationen anvendt.
- Navnene er A- og B-serien (ISO 216), C-serien (ISO 269), ANSI A til E og ARCH A til E.
- En side inden for 2 mm af en navngiven størrelse får det navn. Enhver anden side kaldes brugerdefineret, med den nærmeste navngivne størrelse og hvor meget den afviger.

## I kalkulationen

Kalkulationsregnearket har arket {{ui:Page sizes}} med antallet af hver størrelse.

:::note
De tommeværdier, der er brugt til ANSI og ARCH, er indtastet fra de udgivne tabeller og er ikke sammenlignet med de trykte standarder.
:::
