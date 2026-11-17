---
title: Jordarbeid og kotehøyder
summary: Merk kotehøyder på et situasjonskart, gi dem til CivilCraft for terrengmodellen og for skjæring og fylling, og tell enkle utgravingsmengder her.
keywords: jordarbeid, utgraving, skjæring, fylling, skjæring og fylling, terrengforming, kotehøyde, kote, topo, terrengmodell, triangulering, civilcraft, punkter, pnezd, grøft
from: a898e508
---

TakeoffCraft måler det som er tegnet på et ark. Jordarbeid trenger en terrengmodell, og den deles derfor med CivilCraft, som bygger terrengmodeller fra punkter, former terrenget og beregner skjæring, fylling og transport.

## Enkel utgraving her

For et fotavtrykk som graves til én dybde, er en arealpost med en **dybde** nok: volumet er areal × dybde. Fagpakken for hovedentreprenører [trade pack](topic:trade-packs) har en masseutgravingspost (fast masse, løs masse og lastebillass) og en grøftpost for ledninger (utgraving, underlag og tilbakefylling etter lengde og dybde).

## Kotehøyder for CivilCraft

1. Angi målestokken for situasjonsarket.
2. Lag en **Tell**-post, for eksempel «Eksisterende terreng», og klikk på hver kotehøyde på arket.
3. Velg et merke og skriv inn dets {{ui:Elevation}} i panelet «Valgt merke»: `102.5`, `102'-6"` eller `31.24 m`. Negative og null-kotehøyder er gyldige.
4. Åpne {{ui:Export}}-menyen og velg {{ui:Spot elevations}}. Resultatet er en punktfil (`.csv`) med Point, Northing, Easting, Elevation og Description, én rad per merket punkt på det åpne arket.
5. Åpne filen i CivilCraft (se [Importer punkter](app:civilcraft/import-points)). Programmet bygger terrengmodellen fra punktene ([Bygg en terrengmodell](app:civilcraft/build-surface)); derfra sammenligner det terrengmodeller og gir skjæring og fylling ([Volumer](app:civilcraft/volumes)).

Nord og øst er arkets egne koordinater i fot, målt fra sidens hjørne i målestokken: avstander og volumer mellom punktene er riktige, men de er ikke prosjektets oppmålingskoordinater. Flytt dem over til områdets koordinater i CivilCraft når det trengs.

:::note
Punkter fra ulike ark deler ikke koordinater, så eksporten tar bare med det åpne arket. Kotehøyder lagres sammen med mengdeuttaket og følger med ved kopiering og liming.
:::

## Skjæring og fylling fra CivilCraft

CivilCraft sin jordberegning kommer tilbake som to poster som kan prises:

1. I CivilCraft former du plattformer og korridorer, og velger deretter {{ui:Send to TakeoffCraft}} under **Jordarbeid** ([Volumer for jordarbeid](app:civilcraft/volumes)). Det lagres en mengdefil (`.quantities.json`).
2. I TakeoffCraft åpnes den med {{ui:Open takeoff}}, eller den slippes på appen. Mengdeuttaket forblir åpent: filen legger til **Earthwork: cut** og **Earthwork: fill** som [typede mengder](topic:create-items#typed-quantities-no-drawing) i kubikkyard (CY) for et prosjekt i fot, eller kubikkmeter (m³) for et prosjekt i meter. Det er ett steg: {{key:Mod+Z}} angrer det.
3. Gi dem nye navn, og sett svinn, enhetspriser og sammensatte poster slik det passer.

Når konstruksjonen endres, send på nytt fra CivilCraft og åpne den nye filen: de samme to postene får de nye mengdene. Navn, enhetspriser, svinn og sammensatte poster beholdes slik de er satt. Hvis prosjektets enhet er endret, sier statuslinjen fra det: kontroller enhetsprisene. En fil fra et annet CivilCraft-prosjekt legger til sine egne to poster.

Mengdene er fast masse, slik CivilCraft har målt dem (rutenettmetoden): ingen krymping eller svell. Legg dette til som svinn, eller med en formel som `Q * 1.25` for løs masse. Postredigeringen viser hvor hver enkelt kom fra og når; merknadskolonnen i kalkylen sier det også.

:::note
Mengdefilen er vanlig JSON (`"format": "cadcraft-quantities"`), så et skript eller et annet program kan også skrive en. Den inneholder et appnavn, et prosjekt og poster med en nøkkel, et navn, en enhet og en mengde.
:::
