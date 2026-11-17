---
title: Hent inn en merkeliste som mengder
summary: En merkeliste eksportert fra bygningsmodellen (CSV) blir til typede mengder i mengdeuttaket, én per merke, slik at modellens antall og arealer står ved siden av det du målte.
keywords: merker, merkeliste, bygningsmodell, bimcraft, ifc, mengder, csv, liste, import, typet mengde
from: a60c19b6
---

{{ui:Merker}} på verktøylinjen henter inn en merkeliste som BimCraft har lagret som en CSV-fil. Hvert ulike merke blir en typet mengde, av samme slag som CivilCrafts skjæring og fylling blir til.

1. I BimCraft lager du merkelisten du vil ha, og lagrer den som CSV.
2. Velg {{ui:Merker}} og velg filen.
3. Si hvilken kolonne som gir linjen navn ({{ui:Gi linjen navn etter}}, vanligvis merket), og hvilken som har tallet ({{ui:Mengde fra}}). Med {{ui:Tell radene}} teller hver rad som én.
4. Velg enheten. En lengde i millimeter blir til meter med {{ui:Gang med}} 0.001.
5. {{ui:Legg til mengdene}}.

Rader med samme merke legges sammen. En celle som ikke er et tall, utelates og telles i oppsummeringen. Henter du inn samme liste igjen, oppdateres mengdene du allerede har, i stedet for at det kommer flere; navnene, prisene og svinnet deres er fortsatt dine.

## Greit å vite

En typet mengde måles ikke på et ark, så den har ingen markeringer. Ingenting sendes noe sted; filen leses her.
