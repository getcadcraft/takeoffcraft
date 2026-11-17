---
title: Start et nyt mængdeudtræk
summary: Ryd alt, og start et tomt mængdeudtræk uden at genindlæse siden, og sikr dit arbejde først.
keywords: ny, nyt mængdeudtræk, ryd, nulstil, start forfra, tom, luk pdf'er, næste job
from: 16d392a4
---

{{ui:Ny}} lukker alle PDF'er og starter et tomt mængdeudtræk på samme side.

1. Gem det nuværende mængdeudtræk, hvis du vil beholde det: {{ui:Gem mængdeudtræk}} eller {{key:Mod+S}}.
2. Vælg {{ui:Ny}} i gruppen {{ui:Fil}}.
3. Hvis der er ikke-gemte ændringer, spørger TakeoffCraft **Ikke-gemt mængdeudtræk**: vælg {{ui:Gem mængdeudtræk først}} (det downloader projektet og rydder derefter), {{ui:Kassér ændringer}} eller {{ui:Annuller}}.
   Vinduet vender tilbage til sin tomme tilstand: ingen PDF'er, ingen poster, ingen markeringer og ingen målestokke. Statuslinjen siger "Nyt mængdeudtræk. Åbn PDF'er for at begynde."

Det ryddes:

- hver åben PDF, dens ark og miniaturer,
- poster, kalkulationsenheder, markeringer og målestokke,
- hvert arks zoom og position,
- fortrydelseshistorikken (du kan ikke fortryde {{ui:Ny}}),
- bue-tilstand og enhver søgning eller gennemgang med auto-tælling.

Dine filer på disken røres ikke. For at hente det gamle mængdeudtræk frem igen, åbn dets `.takeoff.json` og PDF'er: se [Gem og genåbn et mængdeudtræk](topic:save-and-reopen).

:::note
Hvert nyt mængdeudtræk starter uden poster. For at tage poster med, kopiér dem først: {{ui:Kopiér post}} under {{ui:Poster}} (eller kopiér markeringer, som tager deres poster med), og indsæt dem derefter med {{ui:Sæt ind}} i det nye mængdeudtræk. Se [Kopiér, sæt ind og duplikér markeringer](topic:copy-paste). Til poster du bruger på hvert job, så gem dem i dit [prisbibliotek](topic:price-library) og tilføj dem derfra, eller tilføj en [fagpakke](topic:trade-packs).
:::
