---
title: Fang til tegningens linjer
summary: Punkter springer over til PDF'ens egne linjer, mens du måler eller kalibrerer: ender, midtpunkter, krydsninger eller et vilkårligt sted på en linje, med en markør der viser hvilken.
keywords: fang, objektfang, endepunkt, midtpunkt, skæringspunkt, nærmeste, vektor, linjetegning, linjer, præcis, nøjagtig, F3, magnet, hjørne
from: 41d29e9b
---

De fleste plansæt er vektor-PDF'er: væggene og kanterne er rigtige linjer, ikke pixels. Mens du måler, fanger TakeoffCraft dine klik på disse linjer, så et forløb starter præcis i en vægs hjørne, og en kalibrering læser det mål tegneren har tegnet, ikke den pixel du rammer.

Fang er slået til, når du starter. Slå det til og fra med {{ui:Fang}} i statuslinjen eller {{key:F3}}; indstillingen gemmes i denne browser (den findes også under [Indstillinger](topic:settings)).

## Hvad det fanger til

Når markøren kommer inden for ca. 10 skærmpixels fra en linje, viser en markør hvor klikket lander, med dens navn:

| Markør | Navn | Hvor |
|---|---|---|
| Kvadrat | **Ende** | Enden af en linje, eller et hjørne hvor linjer mødes. Begge ender på en kurve tæller; punkterne langs den gør ikke. |
| Trekant | **Midtpunkt** | Midten af en lige linje. |
| Kryds | **Skæringspunkt** | Hvor to linjer krydser, eller hvor den ene ender på en anden. |
| Timeglas | **På linjen** | Det nærmeste punkt på en linje, når intet ende-, midt- eller skæringspunkt er tæt på. |

Det nærmeste ende-, midt- eller skæringspunkt vinder. Kun når ingen er tæt på, lander punktet på selve linjen. Zoom ind for at vælge mellem punkter, der ligger tæt sammen: de 10 pixels er skærmpixels, så ved højere zoom dækker de mindre af arket.

## Hvor det virker

Fang virker i {{ui:Lineær}}, {{ui:Areal}}, {{ui:Cirkel}}, {{ui:Udsparing}}, {{ui:Kalibrér}} og {{ui:Kontrollér}}, og når du trækker i hjørnet på et valgt mærke. Det placerer også bue-punkter. {{ui:Tæl}}, {{ui:Auto-tælling}} og indsættelse fanges ikke.

Et fanget punkt vinder over 45°-fanget fra {{key:Shift}}: for at tegne i 45° væk fra linjerne, skal du først slå Fang fra med {{key:F3}}.

:::tip
Kalibrér med Fang slået til. Klik tæt på de to ender af en målelinje eller en væg, du kender: begge punkter lander præcist på tegningen, og målestokken bliver nøjagtig (statuslinjen navngiver så den forudindstilling, den passer til).
:::

## Ark, som den ikke kan fange på

- **Scannede ark** er billeder uden linjer at fange til. Statuslinjen siger »Dette ark har ingen linjer at fange til (en scannet side er et billede).« og punkterne går dér, du klikker.
- **Meget store tegninger**: fangning læser op til 400,000 linjesegmenter pr. ark. På et ark med flere siger den det og fanger kun til de første.
- **Tekst** fanges ikke til, medmindre PDF'en tegner bogstaverne som linjer (nogle plottere gør det).

Arkets linjer læses første gang du åbner det, i baggrunden; et stort ark kan tage et sekund, før markørerne vises.
