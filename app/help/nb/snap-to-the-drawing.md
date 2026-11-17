---
title: Fang til tegningens linjer
summary: Punkter hopper til PDF-filens egne linjer mens du måler eller kalibrerer: endepunkter, midtpunkter, kryssinger eller hvor som helst på en linje, med en markør som viser hvilken.
keywords: fang, osnap, objektfang, endepunkt, midtpunkt, skjæringspunkt, nærmeste, vektor, linjeverk, linjer, presis, nøyaktig, f3, magnet, hjørne
from: 41d29e9b
---

De fleste plansett er vektor-PDF-er: veggene og kantene er ekte linjer, ikke piksler. Mens du måler, fester TakeoffCraft klikkene dine til disse linjene, slik at en strekning starter nøyaktig i en veggs hjørne, og en kalibrering leser målet tegneren har tegnet, ikke pikselen du traff.

Fang er på når du starter. Slå det av og på med {{ui:Fang}} i statuslinjen eller {{key:F3}}; innstillingen lagres i denne nettleseren (den finnes også under [Innstillinger](topic:settings)).

## Hva den fester til

Når pekeren kommer innen ca. 10 skjermpiksler fra en linje, viser en markør hvor klikket vil lande, med navnet på den:

| Markør | Navn | Hvor |
|---|---|---|
| Kvadrat | **Endepunkt** | Enden av en linje, eller et hjørne der linjer møtes. Begge endene av en kurve regnes; punktene langs den gjør det ikke. |
| Trekant | **Midtpunkt** | Midten av en rett linje. |
| Kryss | **Skjæringspunkt** | Der to linjer krysser, eller der én ender på en annen. |
| Timeglass | **På linjen** | Nærmeste punkt på en linje, når ingen ende, midtpunkt eller kryssing er nær. |

Nærmeste endepunkt, midtpunkt eller skjæringspunkt vinner. Bare når ingen av dem er nær, havner punktet på selve linjen. Zoom inn for å velge mellom punkter som ligger tett: de 10 pikslene er skjermpiksler, så ved høyere zoom dekker de mindre av arket.

## Hvor den fungerer

Fang fungerer i {{ui:Linjær}}, {{ui:Areal}}, {{ui:Sirkel}}, {{ui:Utsparing}}, {{ui:Kalibrer}} og {{ui:Kontroller}}, og når du drar hjørnet på et valgt merke. Den plasserer også buepunkter. {{ui:Tell}}, {{ui:Autotelling}} og Lim inn fester ikke.

Et festet punkt vinner over 45°-fangen til {{key:Shift}}: for å tegne i 45° vekk fra linjene, slå først av Fang med {{key:F3}}.

:::tip
Kalibrer med Fang på. Klikk nær de to endene av en målelinje eller en vegg du kjenner: begge punktene havner nøyaktig på tegningen, og skalaen blir nøyaktig (statuslinjen viser da navnet på forvalget den passer til).
:::

## Ark den ikke kan feste til

- **Skannede ark** er bilder uten linjer å feste til. Statuslinjen sier «This sheet has no lines to snap to (a scanned page is a picture).» og punktene går dit du klikker.
- **Svært store tegninger**: fang leser opptil 400 000 linjesegmenter per ark. På et ark med flere sier appen fra om det, og fester bare til de første.
- **Tekst** festes ikke til, med mindre PDF-en tegner bokstavene sine som linjer (noen plottere gjør det).

Linjene på arket leses første gang du åpner det, i bakgrunnen; et stort ark kan ta et sekund før markørene vises.
