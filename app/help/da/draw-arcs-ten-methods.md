---
title: Tegn buer med ti metoder
summary: Vælg hvordan en bue tegnes: tre punkter, eller start, centrum, slut, vinkel, længde, retning eller radius.
keywords: bue, buer, kurve, buet væg, 3-punkts, radius, vinkel, korde-længde, retning, centrum, start, slut, buemetode
from: 5e3e0db6
---

## Hvad du gør

Tegn en buet kant i et lineært forløb, et areal eller en udsparing, med den buemetode der passer til de mål du har.

## Trin

1. Start et forløb, en kontur eller en udsparing og placer punktet hvor kurven starter.
2. Slå {{ui:Bue}} til på værktøjslinjen eller tryk {{key:R}}.
3. Åbn {{ui:Bue-metode}} på arkbjælken. Den vises kun mens Bue er til. Vælg 3-punkt, Start, Centrum, Slut, Start, Centrum, Vinkel, Start, Centrum, Længde, Start, Slut, Vinkel, Start, Slut, Retning, Start, Slut, Radius, Centrum, Start, Slut, Centrum, Start, Vinkel eller Centrum, Start, Længde.
4. Følg statuslinjen. Den siger hvad buen venter på: dens centrum, slutpunkt, vinkel, længde, retning eller radius. Klik et punkt, eller skriv tallet (vinkel, længde, radius og retning).
5. Når det sidste input er givet, føjes buen til forløbet. {{key:Esc}} annullerer buen, {{key:Backspace}} tager dens sidste trin tilbage, og {{key:R}} slår Bue fra.

## Noter

- En bue afvises, med en meddelelse i statuslinjen, når dens punkter falder sammen eller ligger på en linje, eller når radius ikke kan nå slutpunktet.
- Dens længde er den præcise buelængde, og gamle filer åbnes ens. Mere: [Mål lineære forløb](topic:measure-linear#arcs-and-curved-walls).
