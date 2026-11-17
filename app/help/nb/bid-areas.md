---
title: Tilbudsområder
summary: Merk poster etter bygning, etasje eller fase, ta mengdeuttak ett område om gangen, og les mengder og kostnader for hvert område.
keywords: legg til alternativ, fradragsalternativ, grunntilbud, alternativer, tilbudsområde, område, bygning, etasje, nivå, fase, sone, alternativ, oppdeling, dele opp, typisk etasje, delsum, etter område
from: 64f3d41c
---

Et tilbudsområde er en del av prosjektet du priser for seg selv: en bygning, en etasje, en fase, en fløy. Hvert merke kan ligge i ett tilbudsområde. Mengdene og kalkylen kan da leses for hvert område, med en delsum for hver, mens jobbsummen forblir summen av alt.

## Lag et tilbudsområde

1. Øverst i {{ui:Poster}}-panelet åpner du listen {{ui:Tilbudsområde}}.
2. Velg **Nytt tilbudsområde…**, skriv et navn som «Bygning A» eller «Nivå 2», og velg **Lag det**.
   Det nye området blir det gjeldende. Statuslinjen sier «Nye merker legges i (navn). Merker i andre tilbudsområder er nedtonet.»

## Mengdeuttak i et område

Mens et tilbudsområde er valgt i listen, havner hvert nytt merke i det: løp, arealer, sirkler, tellinger, merkene {{ui:Autotelling}} legger til, og det du limer inn. Merker i andre tilbudsområder, og merker i ingen, er nedtonet på arket, slik at du ser hva som hører hvor.

Velg **Ingen tilbudsområde** i listen for å ta mengdeuttak uten; da er ingenting nedtonet.

:::tip
Typiske etasjer: Ta mengdeuttak av Nivå 2, velg merkene ({{key:Mod+A}} på arket), kopier dem, velg Nivå 3 i listen og lim inn. Kopiene havner i Nivå 3. Når etasjene er like, og du ikke trenger å holde dem fra hverandre, teller en [typisk gruppe](topic:typical-groups) én etasje flere ganger i stedet.
:::

## Flytt merker til et annet område

Velg ett merke eller flere ({{key:Shift}} + klikk, eller {{key:Mod+A}}). Under **Valgt merke** (eller **Valgte merker**) velger du området i feltet {{ui:Tilbudsområde}}. Statuslinjen sier «3 merker flyttet til Nivå 2.» Det er ett angrettrinn.

## Gi nytt navn, endre rekkefølge eller slett

Velg **Administrer tilbudsområder…** i listen. Skriv over et navn for å gi det nytt, bruk pilene for å endre rekkefølgen (tabellene og arbeidsboken følger den), eller slett et med søppelbøtten. Når du sletter et tilbudsområde, beholdes merkene: de er da i ingen tilbudsområde. {{key:Mod+Z}} angrer hver endring.

## Les mengdene per område

I {{ui:Mengder}}-tabellen velger du {{ui:Etter område}} (den vises når mengdeuttaket har et tilbudsområde). Hvert område viser postene det holder, med mengde, enhet og sum, deretter en delsumrad. Merker i ingen tilbudsområde kommer sist, som **Ingen tilbudsområde**. Klikk på en postrad for å markere posten og gjøre det området til det gjeldende.

Sammensatte poster beregnes for hvert område ut fra områdets egne totaler. En formel som runder opp, for eksempel `ceil(L / 4)`, kan da gi litt mer i områdene samlet enn for hele jobben, slik den ville gjort på et tilbud som er prisatt område for område.

## Alternativer: grunntilbud pluss tillegg og fradrag

Et tilbudsområde kan være et **alternativ**: arbeid eieren kan legge til tilbudet, eller ta ut av det. I **Administrer tilbudsområder…** har hvert område en liste ved siden av navnet:

| Valg | Hva det gjør |
|---|---|
| {{ui:Grunntilbud}} | Med i tilbudet, som vanlig. |
| {{ui:Tilleggsalternativ}} | Prises for seg selv og **holdes utenfor grunntilbudet**: en gulvoppgradering, en ekstra markise. |
| {{ui:Fradragsalternativ}} | Med i grunntilbudet, og tilbys som et fradrag: «slett markisen». |

Ta mengdeuttak av et alternativs arbeid i tilbudsområdet, likt alle andre områder. Når mengdeuttaket har et alternativ:

- Overskriften i {{ui:Mengder}}-tabellen sier **Grunntilbud** i stedet for Jobbsum: hele mengdeuttaket uten tilleggsalternativene.
- {{ui:Etter område}} avsluttes med grunntilbudet og én rad per alternativ: **+$300.00** for et tillegg, **−$1,050.00** for et fradrag.
- Et alternativ priser bare postene som har merker i seg, med deres sammensatte poster, slik at en sammensatt del av en annen post ikke sniker seg med.

I eksportene avsluttes CSV-filen med grunntilbudet og alternativene, og arbeidsboken får et regneark **Alternativer**: grunntilbudet, hvert alternativs poster og endring, og grunntilbudet med alle tilleggsalternativene trukket fra.

## I eksporten

{{ui:XLSX}} legger til et regneark **Etter tilbudsområde**: hvert områdes poster og komponenter med mengde, mengde med svinn, materiell, arbeid og sum, en delsum per område (en `SUM`-formel) og **Alle tilbudsområder** til slutt. Regnearket **Merker** får en kolonne **Tilbudsområde**. Et mengdeuttak uten tilbudsområder eksporteres som før. Se [Eksportkolonner](topic:export-columns).

Tilbudsområdene lagres i prosjektfilen sammen med merkene.
