---
title: Tegn buer med ti metoder
summary: Velg hvordan en bue tegnes: tre punkter, eller start, senter, slutt, vinkel, lengde, retning eller radius.
keywords: bue, buer, kurve, buet vegg, 3-punkt, radius, vinkel, kordelengde, retning, senter, start, slutt, buemetode
from: 5e3e0db6
---

## Hva du gjør

Tegn en buet kant i en lineær strekning, et område eller en utsparing, med buemetoden som passer dimensjonene du har.

## Trinn

1. Start en strekning, en kontur eller en utsparing og plasser punktet der kurven starter.
2. Slå på {{ui:Bue}} på verktøylinjen, eller trykk {{key:R}}.
3. Åpne {{ui:Buemetode}} på arkelinjen. Den vises bare mens Bue er på. Velg 3-punkt, Start, Senter, Slutt, Start, Senter, Vinkel, Start, Senter, Lengde, Start, Slutt, Vinkel, Start, Slutt, Retning, Start, Slutt, Radius, Senter, Start, Slutt, Senter, Start, Vinkel eller Senter, Start, Lengde.
4. Følg statuslinjen. Den sier hva buen venter på: senteret, sluttpunktet, vinkelen, lengden, retningen eller radiusen. Klikk et punkt, eller skriv inn tallet (vinkel, lengde, radius og retning).
5. Når siste verdi er gitt, legges buen til strekningen. {{key:Esc}} avbryter buen, {{key:Backspace}} tar tilbake det siste trinnet, og {{key:R}} slår av Bue.

## Merknader

- En bue avvises, med en melding i statuslinjen, når punktene faller sammen eller ligger på en linje, eller når radiusen ikke kan nå sluttpunktet.
- Lengden er den eksakte buelengden, og eldre filer åpnes likt. Mer: [Mål lineære strekninger](topic:measure-linear#arcs-and-curved-walls).
