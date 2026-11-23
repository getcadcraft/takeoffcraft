---
title: Sidestørrelser og papirnavn
summary: Se størrelsen til hvert ark i millimeter og tommer, og papirnavnet (A-, B- og C-serien, ANSI, ARCH), og grupper et blandet sett etter størrelse for å finne de avvikende arkene.
keywords: sidestørrelse, papirstørrelse, papirnavn, a0, a1, a2, a3, a4, b-serien, c-serien, ansi, arch, arkitektonisk, mm, tommer, egendefinert størrelse, etter størrelse, avvikende størrelse, blandet sett, målestokk, tegningssett, mediabox, rotasjon
from: 9c061c07
---

En målestokk betyr bare noe på riktig papir. {{ui:TakeoffCraft}} leser størrelsen til hvert PDF-ark og navngir papiret, slik at du kan se et ark som er skrevet ut i en annen størrelse, før du stoler på en måling på det.

## Hva du gjør

Se på størrelsen til det åpne arket, og grupper deretter hele settet etter størrelse.

## Trinn

1. Åpne tegningene ({{ui:Åpne tegninger}}).
2. Arklinjen over tegningen viser det åpne arkets papirnavn og størrelse, for eksempel «A1 · 594 × 841 mm».
3. Hver rad i listen {{ui:Ark}} har en størrelseslinje under arknavnet.
4. Velg {{ui:Etter størrelse}} i overskriften til {{ui:Ark}}. Listen samler arkene under én overskrift per størrelse, den største gruppen først, og markerer en størrelse med bare noen få ark som avvikende.
5. Velg {{ui:Etter størrelse}} igjen for å gå tilbake til settets egen rekkefølge.

Et DWG- eller DXF-ark har ikke papir, så der vises ingen størrelse.

## Slik velges navnet

- Størrelsen kommer fra sidens boks i PDF-filen, med rotasjonen brukt.
- Navnene er A- og B-serien (ISO 216), C-serien (ISO 269), ANSI A til E og ARCH A til E.
- En side innenfor 2 mm av en navngitt størrelse får det navnet. Alle andre sider sier egendefinert, med nærmeste navngitte størrelse og hvor langt unna den er.

## I kalkylen

Kalkylearbeidsboken har et regneark {{ui:Sidestørrelser}} med antallet av hver størrelse.

:::note
ANSI- og ARCH-verdiene i tommer ble skrevet inn fra de publiserte tabellene og er ikke sammenlignet med de trykte standardene.
:::
