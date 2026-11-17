---
title: Sammenlign et revidert ark og flytt mengdeuttaket
summary: Legg det gamle arket over revisjonen, rett dem opp, se hva som er endret, og flytt mengdeuttaket over til det nye arket med merkene som skal kontrolleres markert.
keywords: revisjon, revidert, sammenlign, overlegg, gammel, ny, endringer, tillegg, bulletin, utgi på nytt, flytt mengdeuttak, overfør, bær over, rett opp, markert, kontroller
from: 3a1d9fe0
---

Når et ark utgis på nytt, trenger du ikke ta det av igjen. Åpne den gamle PDF-en og den nye, sammenlign de to arkene, og flytt mengdeuttaket over. TakeoffCraft markerer hvert merke der tegningen er endret, så du kontrollerer dem og beholder resten.

## Sammenlign

1. Åpne begge PDF-ene: det gamle settet og det reviderte ({{ui:Åpne tegninger}}; de kan være i én fil eller flere).
2. Vis det **nye** arket.
3. Velg {{ui:Sammenlign}} på arkelinjen under tegningen.
4. Velg det gamle arket i listen. TakeoffCraft foreslår arket med samme nummer i den andre PDF-en, eller samme side. Velg **Sammenlign**.

Den gamle tegningen ligger nå over den nye i rødt. Der de to stemmer overens, ligger de røde linjene over de svarte; der de er ulike, ser du røde linjer alene (fjernet) og svarte linjer alene (lagt til). En linje nederst på arket holder trinnene nedenfor; {{key:Esc}} eller {{ui:Lukk}} avslutter sammenligningen.

## Rett dem opp

Reviderte ark plottes ofte litt skjevt: flyttet på siden, eller i litt annen størrelse. Hvis den røde tegningen ikke ligger på den svarte, velg **Rett opp etter to punkter** og klikk fire ganger:

1. et punkt på den gamle (røde) tegningen, for eksempel en søylesenter eller et bygningshjørne,
2. det samme punktet på den nye (svarte) tegningen,
3. et andre punkt på den røde tegningen, langt fra det første,
4. det samme punktet på den svarte tegningen.

Den røde tegningen flyttes, vris og skaleres over på den svarte. Statuslinjen sier hvor mye større den nye tegningen er («størrelse × 1.000» når den er lik). Zoom inn for valgene: jo nærmere du klikker, desto bedre passform.

## Finn endringene

Velg **Finn endringer**. TakeoffCraft sammenligner de to tegningenes blekk: blekk bare på det gamle arket blir rødt, blekk bare på det nye arket blir blått, og statuslinjen teller dem. Linjer som er flyttet et hårstrå (en ny plotting) telles ikke som endringer.

Den ser også på hvert merke på det gamle arket og teller dem som ligger der tegningen er endret:

- en strekning eller et område når tegningen er endret ved en av endene eller hjørnene, eller langs minst omtrent en sjettedel av lengden;
- en telling når noe er endret like ved den.

## Flytt mengdeuttaket

Velg **Flytt mengdeuttak hit**. Hvert merke på det gamle arket flyttes til det nye, via innrettingen, i ett Angre-trinn. De som ligger ved en endring markeres: de tegnes med en oransje glorie, og arkelinjen viser «(n) å kontrollere».

Hvis det nye arket ikke hadde målestokk, får det det gamle arkets målestokk (justert når tegningene måtte skaleres for å rettes opp). Hadde det allerede en annen målestokk, spør TakeoffCraft først: flyttede merker måles med det nye arkets målestokk.

## Kontroller de markerte merkene

1. Velg «(n) å kontrollere» på arkelinjen. Den zoomer til neste markerte merke og velger det; panelet sier hvorfor det er markert.
2. Rett merket hvis tegningen er endret under det (dra hjørnene, legg til eller slett merker, eller ta det av igjen).
3. Velg **Kontrollert** i panelet. Markeringen forsvinner, og tallet på arkelinjen går ned.

Markeringene lagres sammen med mengdeuttaket, så du kan kontrollere dem senere.

:::note
Sammenligning fungerer både på vektor-PDF-er og skanninger, fordi den sammenligner det som er tegnet. En skanning som er skjev eller strukket kan bare passe omtrent med to punkter; kontroller flere merker for øyet da.
:::
