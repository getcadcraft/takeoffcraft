---
title: Notater, skyer og utheving
summary: Merk spørsmål og endringer på arkene med notater, revisjonssky og utheving, følg hver enkelt som åpen, besvart eller lukket, og send dem i den merkede PDF-en.
keywords: markering, markeringer, notat, kommentar, spørsmål, rfi, sky, revisjonssky, utheving, status, åpen, besvart, lukket, gjennomgang, markeringsliste
from: 2b395c13
---

Markeringer er til det du må huske eller spørre om mens du gjør mengdeuttaket: «bekreft grunntypen», en revisjonssky rundt en endret vegg, et uthevet notat på planen. De ligger på arket med en status, står oppført samlet på ett sted, og skrives ut i den merkede PDF-en. De **telles aldri**: ingen mengde, ingen kostnad.

## Legg til en

Åpne {{ui:Markup}} på linjen over arket og velg:

| Markering | Slik |
|---|---|
| {{ui:Note}} | Klikk der det skal, skriv notatet, velg {{ui:Add}}. Det vises som en rund nål med første linje ved siden av. |
| {{ui:Cloud}} | Klikk ett hjørne, deretter det motsatte, og skriv et notat (eller la det stå tomt). En takket revisjonssky går rundt boksen. |
| {{ui:Highlight}} | Klikk to hjørner: en gjennomsiktig gul boks, med et notat hvis du vil. |

{{key:Esc}} etter det første hjørnet avbryter. Verktøyet forblir på for neste; {{key:V}} går tilbake til {{ui:Select}}.

## Status og redigering

Klikk på en markering med {{ui:Select}} for å velge den. Det høyre panelet viser **Markering**: type og ark, **Status** — Åpen, Besvart eller Lukket — og teksten, som du kan endre. {{key:Delete}} (eller {{ui:Delete}}) fjerner den; {{key:Mod+Z}} henter den tilbake.

Nålen til et notat er oransje mens det er åpent, blå når det er besvart og grått når det er lukket; en lukket sky blir grå.

## Listen

**Markeringer** i det høyre panelet lister hver markering i mengdeuttaket med statusen sin, og viser hvor mange som fortsatt er åpne. Kryss av **Bare åpne** for å se hva som gjenstår å avklare. Klikk på en rad for å gå til arket og velge den.

## Del dem

- {{ui:Marked PDF}} tegner dem på sidene: utheving, sky og nåler, hver med en boks som viser statusen med store bokstaver (ÅPEN, BESVART, LUKKET) og teksten. En side med markeringer, men uten mengdemerker, tas også med.
- {{ui:XLSX}} legger til et regneark **Markeringer**: ark, type, status og tekst, én rad hver.
- De lagres i `.takeoff.json` og i en [PDF med mengdeuttaket inni](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
