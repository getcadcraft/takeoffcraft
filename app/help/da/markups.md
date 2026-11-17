---
title: Noter, skyer og fremhævninger
summary: Markér spørgsmål og ændringer på arkene med noter, revisionsskyer og fremhævninger, følg hver som åben, besvaret eller lukket, og send dem i den markerede PDF.
keywords: markering, markeringer, note, kommentar, spørgsmål, rfi, sky, revisionssky, fremhævning, status, åben, besvaret, lukket, gennemgang, markeringsliste
from: 2b395c13
---

Markeringer er til det, du skal huske eller spørge om under mængdeudtrækket: "bekræft basistypen", en revisionssky rundt om en ændret væg, en fremhævet note på planen. De sidder på arket med en status, står samlet ét sted og udskrives i den markerede PDF. De **tælles aldrig**: ingen mængde, ingen pris.

## Tilføj en

Åbn {{ui:Markering}} på linjen over arket, og vælg:

| Markering | Sådan |
|---|---|
| {{ui:Notat}} | Klik, hvor den skal hen, skriv noten, og vælg {{ui:Tilføj}}. Den vises som en rund nål med sin første linje ved siden af. |
| {{ui:Revisionssky}} | Klik på ét hjørne, derefter det modsatte, og skriv en note (eller lad den være tom). En takket revisionssky går rundt om boksen. |
| {{ui:Fremhævning}} | Klik på to hjørner: en gennemsigtig gul boks, med en note hvis du vil. |

{{key:Esc}} efter det første hjørne annullerer. Værktøjet forbliver aktivt til den næste; {{key:V}} går tilbage til {{ui:Vælg}}.

## Status og redigering

Klik på en markering med {{ui:Vælg}} for at vælge den. Det højre panel viser **Markering**: dens type og ark, dens **Status** — Åben, Besvaret eller Lukket — og dens tekst, som du kan ændre. {{key:Delete}} (eller {{ui:Slet}}) fjerner den; {{key:Mod+Z}} henter den tilbage.

Nålen på en note er orange, mens den er åben, blå når den er besvaret, og grå når den er lukket; en lukket sky bliver grå.

## Listen

**Markeringer** i det højre panel lister hver markering i mængdeudtrækket med dens status, og viser hvor mange der stadig er åbne. Sæt kryds i **Kun åbne** for at se, hvad der stadig skal afklares. Klik på en række for at gå til dens ark og vælge den.

## Del dem

- {{ui:Markeret PDF}} tegner dem på siderne: fremhævninger, skyer og nåle, hver med en boks, der angiver dens status med store bogstaver (ÅBEN, BESVARET, LUKKET) og dens tekst. En side med markeringer, men uden mængdemærker, tages også med.
- {{ui:XLSX}} tilføjer et regneark **Markeringer**: ark, type, status og tekst, én række hver.
- De gemmes i `.takeoff.json` og i en [PDF med mængdeudtrækket indeni](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
