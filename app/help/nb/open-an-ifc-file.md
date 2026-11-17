---
title: Hent inn mengder fra en IFC 4.3-fil
summary: Åpne en IFC 4.3-fil for en vei, jernbane, bru eller jordarbeider, og få en telling per klasse, med lengdene, arealene og volumene filen angir, som typede mengder.
keywords: ifc, ifc4x3, ifc 4.3, vei, jernbane, bru, dekke, kantstein, lag, jordarbeider, opplager, infrastruktur, mengder, bim, anlegg, typede mengder
from: 6b08c2c4
---

En IFC 4.3-fil kan inneholde veier, jernbaner, broer, marine konstruksjoner og delene de består av: dekker, lag, kantsteiner, skinner, jordarbeider, opplagre, peler og mer. TakeoffCraft leser dem og gjør dem om til typede mengder du kan prise.

## Åpne filen

1. Velg {{ui:Åpne tegninger}} i gruppen {{ui:Fil}}, eller trykk {{key:Mod+O}}.
2. Velg IFC-filen (du kan velge den sammen med PDF-er), eller slipp den på TakeoffCraft.

Én typet mengde lages for hver klasse og forhåndsdefinert type, for eksempel «Dekke (fleksibelt): antall», og, når filen angir dem, «lengde» i m, «areal» i m² og «volum» i m³. Notatet på hvert element sier hvor mange elementer som ble talt, og hvor mange som ikke oppga en mengde. Åpner du en nyere fil med samme navn, oppdateres disse mengdene i stedet for at det legges til flere.

## Hva den ikke gjør

- Den leser mengdesettene (IfcElementQuantity) filen har. Den måler ikke 3D-formene, så et element uten mengdesett telles, men gir ingen lengde, areal eller volum.
- Bare infrastrukturklassene i IFC 4.3 leses. En bygningsfil (vegger, dører, dekker) gjøres ikke om til mengder her; en fil som ikke er IFC 4.3 sier fra om det og henter ikke inn noe.
- Enhetene er filens egne, omregnet til meter.
