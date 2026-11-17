---
title: Start et nytt mengdeuttak
summary: Fjern alt og start et tomt mengdeuttak uten å laste siden på nytt, og ta vare på arbeidet ditt først.
keywords: ny, nytt mengdeuttak, tøm, tilbakestill, start på nytt, tom, lukk PDF-er, neste jobb
from: 16d392a4
---

{{ui:New}} lukker hver PDF og starter et tomt mengdeuttak på samme side.

1. Lagre det gjeldende mengdeuttaket hvis du vil beholde det: {{ui:Save takeoff}} eller {{key:Mod+S}}.
2. Velg {{ui:New}} i gruppen {{ui:File}}.
3. Hvis det finnes ulagrede endringer, spør TakeoffCraft **Ulagret mengdeuttak**: velg {{ui:Save takeoff first}} (den laster ned prosjektet, og tømmer deretter), {{ui:Discard changes}}, eller {{ui:Cancel}}.
   Vinduet går tilbake til sin tomme tilstand: ingen PDF-er, ingen poster, ingen merker, ingen målestokker. Statuslinjen sier «Nytt mengdeuttak. Åpne PDF-er for å begynne.»

Dette tømmes:

- hver åpen PDF, dens ark og miniatyrbilder,
- poster, sammensetninger, merker og målestokker,
- hvert arks zoom og posisjon,
- angrehistorikken (du kan ikke angre {{ui:New}}),
- buemodus, og et pågående auto-telle-søk eller en gjennomgang.

Filene dine på disken berøres ikke. For å hente det gamle mengdeuttaket igjen, åpne dets `.takeoff.json` og PDF-er: se [Lagre og åpne et mengdeuttak igjen](topic:save-and-reopen).

:::note
Hvert nytt mengdeuttak starter uten poster. For å ta dem med, kopier dem først: {{ui:Copy item}} under Poster (eller kopier merker, som tar med sine poster), og deretter {{ui:Paste}} i det nye mengdeuttaket. Se [Kopier, lim inn og dupliser merker](topic:copy-paste). For poster du bruker på hver jobb, behold dem i [prisbiblioteket](topic:price-library) og legg dem til derfra, eller legg til en [fagpakke](topic:trade-packs).
:::
