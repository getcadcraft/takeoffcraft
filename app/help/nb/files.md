---
title: Filer TakeoffCraft åpner og lagrer
summary: PDF-er inn, en mengdeuttaksprosjektfil, regneark og markerte PDF-er ut - hva hver inneholder, hvor den havner, og hva som endres tilkoblet, frakoblet og mellom nettlesere.
keywords: filer, formater, pdf, takeoff.json, prosjektfil, xlsx, csv, markert pdf, nedlasting, lagre, åpne, frakoblet
from: 1bf9be65
---

## Hva den åpner

| Fil | Hvordan | Merknader |
|---|---|---|
| PDF (`.pdf`) | {{ui:Åpne tegninger}}, {{key:Mod+O}}, eller slipp på siden | Flere om gangen. Hver side blir et ark. |
| Mengdeuttaksprosjekt (`.takeoff.json`) | {{ui:Åpne mengdeuttak}}, eller slipp på siden | Postene, målestokkene og markeringene dine. Du kan slippe den sammen med PDF-ene sine. |

Andre filer som slippes på siden, hoppes over, og statuslinjen nevner dem ved navn.

- **Passordbeskyttede PDF-er** åpnes ikke: «(name) er passordbeskyttet. Åpne en ubeskyttet kopi.»
- **Den samme PDF-en to ganger** åpnes én gang: «(name) er allerede åpnet.» TakeoffCraft kjenner filer på innholdet, ikke på navnet.
- **Skannede PDF-er** åpnes og måles som alle andre; TakeoffCraft trenger ikke teksten i PDF-en.
- **Store tegningssett**: hver PDF leses fullt når den åpnes (for å ta et fingeravtrykk av den), så en veldig stor fil tar et øyeblikk. Miniatyrbilder tegnes ett om gangen mens du ruller.

## Hva den lagrer

Hver lagring er en nedlasting. Ingenting skrives tilbake i PDF-ene dine.

| Du velger | Du får | Hva den inneholder |
|---|---|---|
| {{ui:Lagre mengdeuttak}} | `(name).takeoff.json` | Poster, sammensatte poster, satser, arkmålestokker og hver markering, knyttet til hver PDF via innholdet. Ingen PDF-sider. |
| {{ui:XLSX}} | `(name).xlsx` | Fire regneark: Kalkyle (med levende formler), Etter ark, Markeringer, Målestokker. |
| {{ui:CSV}} | `(name).csv` | Kalkylen som rene verdier, én rad per post og komponent. |
| {{ui:Markert PDF}} | `(PDF name) (takeoff).pdf` | En kopi av hver åpen PDF som har markeringer, med mengdeuttaket tegnet på sidene og en tegnforklaring. Én fil per PDF. |

Navnet hentes fra den første PDF-en du åpnet i dette mengdeuttaket. Det finnes ingen boks for å endre navn ennå: gi den nedlastede filen nytt navn hvis du vil ha et annet navn.

Se [Eksporter kalkylen og en markert PDF](topic:export-estimate) og [Eksportkolonner](topic:export-columns).

## Hvor nedlastingene havner

Nettleseren din lagrer dem der den lagrer hver nedlasting, som regel mappen Nedlastinger. Finn den i {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren din}}. Hvis nettleseren er satt til å spørre hvor hver fil skal lagres, spør den.

:::chromium
{{ui:Markert PDF}} med flere markerte PDF-er laster ned flere filer på én gang. Chrome og Edge kan spørre én gang om dette nettstedet har lov til å laste ned flere filer. Velg Tillat.
:::

:::safari
Safari lagrer i Nedlastinger med mindre du har endret nedlastingsstedet i Safari-innstillingene, under Generelt.
:::

## Hvorfor prosjektfilen og PDF-ene er adskilt

Filen `.takeoff.json` inneholder bare mengdeuttaket ditt. Den finner PDF-ene sine igjen på innholdet (et fingeravtrykk av hver fil), så:

- Det spiller ingen rolle om du gir en PDF nytt navn eller flytter den.
- En PDF som er endret eller lagret på nytt av et annet program, regnes som en annen fil, selv med samme navn.
- Markeringer på PDF-er som ikke er åpne, teller fortsatt med i summene.

Se [Lagre og åpne et mengdeuttak på nytt](topic:save-and-reopen).

## Tilkoblet og frakoblet

PDF-ene og mengdeuttakene dine forlater aldri datamaskinen din, verken tilkoblet eller frakoblet. Tilkoblingen betyr noe bare for å laste selve TakeoffCraft.

For å arbeide uten tilkobling lagrer du appen først, mens du er tilkoblet:

1. Velg {{ui:Lagre for frakoblet bruk}} i applinjen øverst.
   Knappen teller opp, «Lagrer 12 av 40», mens den lagrer.
2. Vent på {{ui:Klar frakoblet}}.

Å lagre TakeoffCraft beholder appen, denne hjelpen, PDF-leseren, PDF-skriveren som {{ui:Markert PDF}} bruker, og autotellingsarbeideren i nettleseren din, omtrent 6 MB. Når den sier {{ui:Klar frakoblet}}, fungerer alt frakoblet: åpne PDF-er, måle, {{ui:Autotelling}}, {{ui:Lagre mengdeuttak}}, {{ui:XLSX}}, {{ui:CSV}} og {{ui:Markert PDF}}.

| Knappen sier | Betydning |
|---|---|
| {{ui:Lagre for frakoblet bruk}} | Ikke lagret i denne nettleseren ennå. Velg den for å lagre. |
| Lagrer (n) av (m) | Lagrer nå. |
| {{ui:Klar frakoblet}} | Lagret. Velg den for {{ui:Lagre på nytt (hent nyeste versjon)}} eller {{ui:Fjern den frakoblede kopien}}. |
| {{ui:Kunne ikke lagre}} | Noen filer ble ikke lastet ned. Sjekk tilkoblingen og velg den igjen. |
| {{ui:Frakoblet bruk er ikke tilgjengelig}} | Dette nettleservinduet kan ikke beholde en frakoblet kopi (private vinduer og enkelte administrerte datamaskiner blokkerer det). |

Mer, blant annet hvor lenge en lagret kopi varer i hver nettleser: [Arbeide frakoblet](common:offline).

:::offline
Du er frakoblet. Hvis applinjen viser {{ui:Klar frakoblet}}, fungerer alt. Hvis den ikke gjør det, kan delene TakeoffCraft ennå ikke har lastet i denne fanen (PDF-skriveren for {{ui:Markert PDF}}, autotellingsarbeideren) ikke lastes nå, og {{ui:Markert PDF}} stopper med «Den markerte PDF-en kunne ikke skrives». Mengdeuttaket ditt er trygt uansett: {{ui:Lagre mengdeuttak}}, {{ui:XLSX}} og {{ui:CSV}} trenger ingen tilkobling. Ikke last fanen på nytt før du er tilkoblet igjen.
:::

:::online
Du er tilkoblet. Før en befaring eller en flyreise velger du {{ui:Lagre for frakoblet bruk}} og venter på {{ui:Klar frakoblet}}.
:::

## Regneark

XLSX-filen beholder levende formler, så et regnearkprogram regner ut kalkylen på nytt når det åpner filen, og holder den riktig når du endrer en sats eller svinn der. Arbeidsboken er kontrollert i LibreOffice Calc, som regnet ut hver sum på nytt til samme øre. Den er ikke åpnet i Excel ennå.

CSV-filen er rene verdier med en byte order mark, slik at regnearkprogrammer leser tegn som m² riktig.

## Skrivebord og sky

:::desktop
Fra 0.5 er skrivebordsappen CadCraft Studio: TakeoffCraft og de sju andre appene i én installasjon. Det finnes ikke noe eget TakeoffCraft-installasjonsprogram.
:::

Lagring i skyen er ikke tilgjengelig ennå. Oppbevar `.takeoff.json`-filene dine sammen med jobbens PDF-er, og ta sikkerhetskopi av dem som av alle andre filer. Se [Hvor filene dine havner](common:your-files).
