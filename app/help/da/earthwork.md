---
title: Jordarbejde og koteangivelser
summary: Markér koteangivelser på en situationsplan, send dem til CivilCraft for terrænet og afgravning og opfyld, og tag enkle udgravningsmængder her.
keywords: jordarbejde, udgravning, afgravning, opfyld, afgravning og opfyld, planering, koteangivelse, koter, topo, terræn, triangulering, civilcraft, punkter, pnezd, grøft
from: a898e508
---

TakeoffCraft måler det, der er tegnet på et ark. Jordarbejde kræver en terrænflade, så det deles med CivilCraft, som opbygger terrænflader ud fra punkter, planerer dem og beregner afgravning, opfyld og massetransport.

## Enkel udgravning her

Til et fodaftryk, der graves til én dybde, er en arealpost med en **dybde** nok: volumen er areal × dybde. Den generelle entreprenør-[fagpakke](topic:trade-packs) har en post for bulkudgravning (faste rumfang, løse rumfang og lastbillæs) og en post for ledningsgrøfter (udgravning, sengeleje og tilbagefyldning efter længde og dybde).

## Koteangivelser til CivilCraft

1. Angiv situationspladens målestok.
2. Opret en **Tæl**-post, f.eks. "Eksisterende terræn", og klik på hver koteangivelse på arket.
3. Vælg en markering, og skriv dens {{ui:Kote}} i panelet Valgt markering: `102.5`, `102'-6"` eller `31.24 m`. Negative koter og kote 0 er i orden.
4. Åbn menuen {{ui:Eksportér}}, og vælg {{ui:Koteangivelser}}. Du får en punktfil (`.csv`) med Punkt, Nord, Øst, Kote og Beskrivelse, én række pr. markeret punkt på det åbne ark.
5. Åbn filen i CivilCraft (se [Importér punkter](app:civilcraft/import-points)). Her opbygges terrænet ud fra punkterne ([Opret et terræn](app:civilcraft/build-surface)); derfra sammenlignes terrænflader, og afgravning og opfyld beregnes ([Volumener](app:civilcraft/volumes)).

Nord og øst er arkets egne koordinater i fod, målt fra sidens hjørne i den målestok, arket har. Afstande og volumener mellem punkterne er korrekte, men det er ikke projektets opmålingskoordinater. Flyt dem over på projektets koordinater i CivilCraft, når det er nødvendigt.

:::note
Punkter fra forskellige ark deler ikke koordinater, så eksporten tager kun det åbne ark. Koter gemmes med mængdeudtrækket og følger med ved kopiering og indsætning.
:::

## Afgravning og opfyld fra CivilCraft

CivilCraft's jordarbejde kommer tilbage som to poster, du kan prissætte:

1. I CivilCraft planeres dine byggeplateauer og korridorer, derefter vælges {{ui:Send til TakeoffCraft}} under **Jordarbejde** ([Jordarbejdsvolumener](app:civilcraft/volumes)). Den gemmer en mængdefil (`.quantities.json`).
2. I TakeoffCraft åbnes den med {{ui:Åbn mængdeudtræk}}, eller den slippes på appen. Dit mængdeudtræk forbliver åbent: filen tilføjer **Jordarbejde: afgravning** og **Jordarbejde: opfyld** som [indtastede mængder](topic:create-items#typed-quantities-no-drawing) i kubikyard (CY) for et projekt i fod, eller kubikmeter (m³) for et projekt i meter. Det er ét trin: {{key:Mod+Z}} fortryder det.
3. Omdøb dem, og angiv spild, enhedspriser og kalkulationsenheder, som du ønsker.

Når projektet ændres, sendes det igen fra CivilCraft, og den nye fil åbnes: de samme to poster får de nye mængder. Deres navne, enhedspriser, spild og kalkulationsenheder bliver, som du har angivet dem. Hvis projektets enhed er ændret, siger statuslinjen det: kontrollér enhedspriserne. En fil fra et andet CivilCraft-projekt tilføjer sine egne to poster.

Mængderne er faste rumfang, som CivilCraft har målt dem (gittermetoden): der er ingen svind eller udvidelse. Tilføj det som spild, eller med en formel som `Q * 1.25` for løst rumfang. Postredigeringen viser, hvor hver enkelt kommer fra og hvornår; kalkulationens noter-kolonne siger det også.

:::note
Mængdefilen er almindelig JSON (`"format": "cadcraft-quantities"`), så et script eller et andet program kan også skrive en: et appnavn, et projekt og poster med en nøgle, et navn, en enhed og en mængde.
:::
