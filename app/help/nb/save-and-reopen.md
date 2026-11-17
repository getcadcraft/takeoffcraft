---
title: Lagre og åpne et mengdeuttak igjen
summary: Lagre mengdeuttaket som et .takeoff.json-prosjekt, åpne det igjen sammen med de samme PDF-ene, og hva som skjer når en PDF mangler eller er endret.
keywords: mengdeuttak i pdf, innbygd, vedlegg, lagre, åpne, åpne igjen, prosjekt, takeoff.json, fortsett, gjenoppta, revidert pdf, endret pdf, manglende pdf, sikkerhetskopi, automatisk lagring, gjenopprett, krasj
from: bd5080a6
---

Et mengdeuttak lagres som en liten prosjektfil, `(navn).takeoff.json`. Den inneholder postene, de sammensatte postene, enhetsprisene, målestokken for hvert ark og hver markering. Den inneholder **ikke** PDF-ene; den finner dem igjen etter innholdet.

## Lagre

1. Velg {{ui:Lagre mengdeuttak}} i gruppen {{ui:Fil}}, eller trykk {{key:Mod+S}}.
   Nettleseren laster ned `(navn).takeoff.json`. Statuslinjen sier «Lagret (navn).takeoff.json. Den åpnes igjen oppå de samme PDF-ene (de matches etter innholdet).»
2. Flytt filen til samme mappe som jobbens PDF-er, slik at de to holdes sammen.

Hver lagring laster ned en ny fil. Nettleseren kan gi den andre navnet `(navn) (1).takeoff.json`; behold den nyeste.

Navnet kommer fra den første PDF-en du åpnet i dette mengdeuttaket.

:::note
Lagre mengdeuttak er fortsatt den eneste måten å beholde et mengdeuttak som fil. Mens du arbeider, lagrer TakeoffCraft også en gjenopprettingskopi i denne nettleseren (se under), og skylagring er ikke tilgjengelig ennå. Hvis du prøver å lukke fanen med ulagrede endringer, spør nettleseren om du vil forlate siden.
:::

## Behold mengdeuttaket inni PDF-en

{{ui:Eksporter}} › {{ui:PDF med mengdeuttaket inni}} laster ned en kopi av hver åpen PDF, med navn som `Plans (with takeoff).pdf`. Kopien har hele mengdeuttaket som vedlegg: poster, markeringer, målestokk, tilbudsområder, alt som `.takeoff.json` inneholder. Sidene er uendret, så den ser ut og skrives ut som originalen, og andre PDF-lesere viser mengdeuttaket under vedleggene sine.

Åpne den PDF-en i TakeoffCraft (på hvilken som helst måte du åpner PDF-er), og den spør **Denne PDF-en har et mengdeuttak inni**: velg {{ui:Åpne mengdeuttaket}} for å få det tilbake, eller {{ui:Bare PDF-en}} for å bare åpne tegningen. Kopien står for PDF-en den ble laget av, så en `.takeoff.json` som er lagret fra en av dem, åpnes på begge.

Med flere PDF-er inneholder hver kopi hele mengdeuttaket; åpne dem sammen. Lagrer du igjen fra en kopi, erstattes mengdeuttaket inni den; det legges ikke til et nytt. `.takeoff.json` er fortsatt filen å ta vare på: den er liten, og det er den automatisk lagring og skrivebordsappen skriver.

## Hvis fanen eller nettleseren stopper

Noen sekunder etter hver endring lagrer TakeoffCraft en kopi av mengdeuttaket i denne nettleserens egen lagring, sammen med PDF-ene når de til sammen er 64 MB eller mindre. Ingenting lastes opp. Når du lagrer mengdeuttaket, starter et nytt eller åpner et annet prosjekt, slettes kopien.

Hvis fanen krasjer, nettleseren eller datamaskinen stopper, eller du forlater med ulagrede endringer, spør TakeoffCraft neste gang du åpner den: **Gjenopprett arbeidet ditt?** og lister mengdeuttaket etter navn. Velg **Gjenopprett** for å få det tilbake: postene, markeringene og målestokkene kommer tilbake, og PDF-ene åpnes igjen hvis de ble tatt vare på. Statuslinjen sier «Gjenopprettet (navn). Den er ikke lagret til en fil ennå: Lagre mengdeuttak beholder den.» Når PDF-ene var for store til å tas vare på, åpner du dem igjen; markeringene vises på arkene deres. Mer: [Gjenopprett arbeidet ditt](common:recover).

## Åpne igjen

1. Åpne TakeoffCraft.
2. Dra `.takeoff.json`-filen og PDF-ene sammen inn på siden. Eller velg {{ui:Åpne tegninger}} for PDF-ene og {{ui:Åpne mengdeuttak}} for prosjektet, i begge rekkefølger.
   Statuslinjen sier «Åpnet (navn): 12 poster, 340 markeringer.» Hvert ark får tilbake sin målestokk, og markeringene vises på arkene.

Rekkefølgen på PDF-ene spiller ingen rolle, og heller ikke filnavnene eller mappene. TakeoffCraft gjenkjenner hver PDF på et fingeravtrykk av innholdet.

Hvis du åpner et prosjekt mens det gjeldende mengdeuttaket har ulagrede endringer, spør TakeoffCraft først: **Avbryt**, **Forkast endringer** eller **Lagre mengdeuttak først**. Å åpne et prosjekt erstatter de gjeldende postene og markeringene; PDF-er som allerede er åpne, forblir åpne.

## Når en PDF mangler

Hvis du åpner prosjektet uten alle PDF-ene, legger statuslinjen til «Åpne PDF-ene for å se markeringene (listet under Ark).» Under arkelisten står en merknad:

«Dette mengdeuttaket dekker også PDF-er som ikke er åpne. Mengdene deres telles; åpne dem for å se og redigere markeringene deres:»

etterfulgt av filnavnene og størrelsene. Markeringene deres teller fortsatt i alle summer og eksporter, med målestokkene de ble målt med. Åpne disse PDF-ene for å se og redigere markeringene.

## Når en PDF er endret

En PDF som er revidert, eller bare lagret på nytt av et annet program, har annet innhold og er derfor en **annen fil** for TakeoffCraft, selv med samme navn. I merknaden under arkelisten står det for en slik fil «en fil med dette navnet er åpen, men innholdet er annerledes».

- Markeringene forblir knyttet til den gamle versjonen. De fortsetter å telle, på sine gamle posisjoner og med sine gamle målestokker.
- Den reviderte PDF-en åpnes som nye ark uten målestokk og uten markeringer.

For å flytte mengdeuttaket over til revisjonen, åpner du begge PDF-ene og bruker {{ui:Sammenlign}} på det nye arket: [Sammenlign et revidert ark og flytt mengdeuttaket](topic:compare-revisions).

## En skadet eller fremmed fil

TakeoffCraft kontrollerer hver prosjektfil før den brukes. Meldinger du kan se:

- «(fil) er ikke et TakeoffCraft-prosjekt (den er ikke gyldig JSON).»
- «Dette er ikke en TakeoffCraft-prosjektfil.»
- «Dette prosjektet ble lagret av en nyere TakeoffCraft. Åpne det der.»
- «3 markeringer var skadet og ble utelatt.» (resten åpnes)

## Angrehistorikk

Angrehistorikken starter på nytt når du åpner et prosjekt. Lagring tømmer den ikke.
