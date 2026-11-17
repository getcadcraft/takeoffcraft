---
title: Menyer, taster og mus
summary: Velg en menystil som passer til måten du allerede arbeider på, gi en kommando din egen tast, flytt kommandoer mellom menyer, og bestem hva hjulet og musknappene gjør.
keywords: menystil, menyer, menylinje, bånd, båndfaner, verktøylinje, tastatursnarveier, hurtigtaster, taster, tilpass, endre tilordning, mus, hjul, inverter, zoomretning, midtknapp, høyreknapp, panorer, eksporter, importer, bytte, kjent, mengdeuttaksbord, poster
from: f01f0d6d
---

TakeoffCraft-kommandoene er de samme uansett hvordan du når dem. En **menystil** bestemmer bare hvor de står på skjermen, hva de heter der og hvilke taster som kjører dem. Velg en i {{ui:Settings}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}; endringen virker med en gang, og denne nettleseren husker den.

## De tre stilene

| Stil | Dette får du |
|---|---|
| {{ui:TakeoffCraft}} | TakeoffCraft sin egen verktøylinje: Fil, Eksporter, Målestokk, Mengdeuttak, Rediger og Visning, med enkeltbokstavtastene for verktøy. Utgangspunktet. |
| {{ui:Takeoff desk}} | En menylinje ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Items}}, {{ui:Markup}}, {{ui:Export}}) over én rad med mengdeuttaksverktøy, slik programmer for mengdeuttak på skjermen pleier å ordne dem. Postene heter betingelser på raden. De samme tastene, pluss {{key:N}} for en ny post. Målestokkforhåndsinnstillingene flytter til linjen over arket, ved siden av arkets målestokk. |
| {{ui:Takeoff ribbon}} | Båndfaner oppkalt etter arbeidet: {{ui:Takeoff}} (mål, form, målestokk, fra tegningen, betingelser), {{ui:Edit}}, {{ui:View}}, {{ui:Markup}} og {{ui:Estimate}} (arbeidsboken, merkede PDF-er, tilbudet), med en {{ui:File}}-meny og en hurtigrad for åpne, lagre, angre og gjør om. Verktøyene du bruker hele dagen er store, naboene er små og stablet. De samme tastene; målestokkforhåndsinnstillingene flytter til linjen over arket. |

Alle tre stilene beholder TakeoffCraft-tastene: {{key:V}} velg, {{key:L}} lineær, {{key:A}} areal, {{key:O}} sirkel, {{key:B}} rom, {{key:P}} sti (velg PDF-ens linjer), {{key:X}} utsparing, {{key:C}} tell, {{key:S}} autotelling, {{key:K}} kalibrer, {{key:D}} kontroller, {{key:R}} buemodus, {{key:E}} fradragsmodus, {{key:F}} og {{key:W}} for å tilpasse, {{key:3}} 3D-kontrollvisningen, {{key:F3}} feste, og {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Verktøyene på linjen over arket (notater, skyer, utheving, Sammenlign, 3D) venter til en PDF er åpen; valgt før det, sier statuslinjen det.

:::tip
En tast som hører til TakeoffCraft sitt eget oppsett, men som stilen din ga en annen kommando, gjør ingenting, og statuslinjen sier hvor kommandoen gikk («I Mine taster er Tell Ctrl+Alt+C»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piltastene beholder alltid sin betydning. Mens du tegner en strekning eller et omriss, limer inn eller gjennomgår en autotelling, forblir bokstavene og tallene i en skrevet lengde hos tegningen.
:::

## Gjør den til din egen

1. Velg stilen som ligner mest på det du vil ha, og klikk {{ui:Customize…}}.
2. Under {{ui:Keys and menus}} finner du en kommando (søkeboksen hjelper). Klikk {{ui:Add a key}} og trykk tasten, eller to taster etter hverandre for en tast på to bokstaver. Klikk på en tast for å fjerne den.
3. Med menylinjen flytter {{ui:Where it sits}} kommandoen til en annen meny, eller til {{ui:Keys only}}.
4. Under {{ui:Mouse}} stiller du hjulet og knappene som panorerer arket.
5. Gi den et navn og klikk {{ui:Save}}.

Å lagre en innebygd stil lager din egen kopi («Mitt mengdeuttaksbord»); den innebygde endres aldri. En tast gitt til to kommandoer vises i rødt og må rettes før du kan lagre.

## Mus

- **Mushjul**: {{ui:Scroll up zooms in}} (utgangspunktet) eller {{ui:Scroll up zooms out}}, og hvor raskt. En klypebevegelse på styreflaten zoomer alltid i den retningen fingrene beveger seg.
- **Panorer arket med**: midtknappen, høyreknappen, eller begge. Et venstre drag på tomt papir og {{key:Space}} med et drag panorerer alltid; et høyreklikk uten drag avslutter alltid en strekning eller et omriss.
- **Dra i 3D-visningene**: {{ui:Each view's own}} beholder 3D-kontrollvisningens knapper (venstre og midtre kretser, høyre panorerer). Eller sett midt- og høyreknappen til å kretse, panorere, zoome eller ingenting; {{key:Shift}} med knappen bytter kretsing og panorering. Venstreknappen kretser og velger alltid.

## Ta den med deg

{{ui:Export}} lagrer stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Import…}} legger en til, fra en annen datamaskin eller fra en kollega. En importert fil kan bare peke på TakeoffCraft sine egne kommandoer: alt annet i den utelates og telles i statuslinjen. {{ui:Delete this style}} fjerner en av dine egne.

:::note
Disse innstillingene blir i denne nettleseren. {{ui:Use this style in every app}} under stilkortene gjør at hver app åpnes i sin tilsvarende stil (egen verktøylinje, en menylinje eller et bånd), med endringene du gjorde i hver app. TakeoffCraft har ingen stil med en kommandolinje: når en er valgt for hver app, beholder TakeoffCraft sin egen verktøylinje.

{{ui:Takeoff ribbon}} er også båndet i oppsettet {{ui:Ribbon and project browser}} ({{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}): se [TakeoffCraft-skjermen](topic:workspace).
:::

Se også: [Tastatur og mus](topic:keyboard) · [TakeoffCraft-innstillinger](topic:settings) · [Kommer fra annen mengdeuttaksprogramvare](topic:coming-from)
