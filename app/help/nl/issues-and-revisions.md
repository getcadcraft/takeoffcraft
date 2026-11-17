---
title: Issues, revisies en het tekenwijzigingslogboek
summary: Houd één issuegeschiedenis bij met het model van de architect: lees de issues in, leg bouwplaatsinstructies, werkplaatstekeningen en gekoppelde modellen vast bij een issue, en lees het tekenwijzigingslogboek.
keywords: issue, revisie, revisies, wijzigingslogboek, tekenwijzigingslogboek, tekenregister, bouwplaatsinstructie, werkplaatstekening, gekoppeld model, aanbesteding, bouw, issuegeschiedenis, hoeveelheidsstaat, opmeting
from: 8d8f6e68
---

## Wat u gaat doen

Werk met dezelfde issuegeschiedenis als de rest van het team. Zie welke bladen in welke revisie zijn uitgegeven, en houd wat er op de bouwplaats gebeurt bij het issue waar het bij hoort.

## Stappen

1. Open **Issues en revisies**.
2. Kies **Een issuegeschiedenis inlezen** en kies het `.issues.json`-bestand dat is opgeslagen vanuit BimCraft of een andere app. De issues en records ervan worden aan uw geschiedenis toegevoegd. Er wordt niets vervangen.
3. Kies **Een record toevoegen** voor een bouwplaatsinstructie, een werkplaatstekening, een markupset, een gekoppeld model of een notitie. Kies het issue waar het bij hoort en zijn status. Een bestand dat u kiest, wordt vastgelegd op naam, grootte en SHA-256; het bestand blijft waar het is.
4. **Tekenwijzigingslogboek** toont één rij voor elk blad en één kolom voor elk issue. Een revisie tussen haakjes is opnieuw uitgegeven zonder wijziging.
5. **Het wijzigingslogboek downloaden (CSV)** slaat de issues, de bladentabel en de records op. **De issuegeschiedenis opslaan** schrijft een bestand dat de andere apps lezen.

## Goed om te weten

- **Een issue vastleggen** zet uw opgemeten bladen als issue, bijvoorbeeld bij een hoeveelheidsstaat. **Wijzigingen sinds** laat dan zien welke bladen na dat issue opnieuw zijn opgemeten.
- De geschiedenis wordt bewaard in het opmetingsbestand. Elke wijziging is één keer ongedaan maken.
- Het twee keer inlezen van hetzelfde bestand voegt niets dubbel toe. Wanneer twee kopieën hetzelfde record bevatten, wordt het nieuwste bewaard.
