---
title: Anteckningar, revisionsmoln och överstrykningar
summary: Markera frågor och ändringar på bladen med anteckningar, revisionsmoln och överstrykningar, följ varje som öppen, besvarad eller stängd och skicka dem i den markerade PDF:en.
keywords: markering, markeringar, anteckning, kommentar, fråga, rfi, moln, revisionsmoln, överstrykning, status, öppen, besvarad, stängd, granskning, markeringslista
from: 2b395c13
---

Markeringar är till för det du behöver komma ihåg eller fråga om under avtagningen: "bekräfta grundtypen", ett revisionsmoln runt en ändrad vägg, en överstruken anteckning på planen. De ligger på bladet med en status, listas på ett ställe och skrivs ut i den markerade PDF:en. De **räknas aldrig**: ingen mängd, ingen kostnad.

## Lägg till en

Öppna {{ui:Markering}} i fältet ovanför bladet och välj:

| Markering | Så här |
|---|---|
| {{ui:Anteckning}} | Klicka där den ska, skriv anteckningen och välj {{ui:Lägg till}}. Den visas som en rund nål med första raden bredvid. |
| {{ui:Moln}} | Klicka på ett hörn, sedan det motsatta, och skriv en anteckning (eller lämna den tom). Ett taggigt revisionsmoln går runt rutan. |
| {{ui:Överstrykning}} | Klicka två hörn: en genomskinlig gul ruta, med en anteckning om du vill. |

{{key:Esc}} efter det första hörnet avbryter. Verktyget är kvar på för nästa; {{key:V}} återgår till {{ui:Markera}}.

## Status och redigering

Klicka på en markering med {{ui:Markera}} för att markera den. Den högra panelen visar **Markering**: dess typ och blad, dess **Status** — Öppen, Besvarad eller Stängd — och dess text, som du kan ändra. {{key:Delete}} (eller {{ui:Ta bort}}) tar bort den; {{key:Mod+Z}} återställer den.

En anteckningsnål är orange när den är öppen, blå när den är besvarad och grå när den är stängd; ett stängt moln blir grått.

## Listan

**Markeringar** i den högra panelen listar varje markering i avtagningen med dess status och visar hur många som fortfarande är öppna. Bocka i **Endast öppna** för att se vad som återstår att reda ut. Klicka på en rad för att gå till dess blad och markera den.

## Dela dem

- {{ui:Markerad PDF}} ritar dem på sidorna: överstrykningar, moln och nålar, var och en med en ruta som anger dess status med versaler (ÖPPEN, BESVARAD, STÄNGD) och dess text. En sida med markeringar men utan avtagningsmarkeringar tas också med.
- {{ui:XLSX}} lägger till ett kalkylblad **Markeringar**: blad, typ, status och text, en rad vardera.
- De sparas i `.takeoff.json` och i en [PDF med avtagningen inuti](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
