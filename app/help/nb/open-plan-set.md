---
title: Start et mengdeuttak og åpne et plansett
summary: Åpne én eller flere PDF-er som et plansett, finn frem blant arkene, og bla mellom dem.
keywords: åpne, plansett, flere pdf-er, flere filer, ark, tegninger, sidetiketter, arkliste, navigere, slipp, overlevering, åpne i en annen app, markering
from: ed434468
---

Et plansett er ofte flere PDF-er: arkitekt, konstruksjon, rør og ventilasjon. TakeoffCraft åpner dem ved siden av hverandre som én liste med ark, og ett mengdeuttak kan dekke alle sammen.

## Åpne PDF-ene

1. Velg {{ui:Åpne tegninger}} i gruppen {{ui:Fil}}, eller trykk {{key:Mod+O}}. (De andre menystilene kaller det {{ui:Åpne PDF-er…}}.)
2. Velg hver PDF i settet i filvinduet. Hold {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} for å velge flere, eller {{key:Shift}} for å velge et område.
3. Velg Åpne.
   En melding «Åpner (navn)…» vises mens hver fil leses. Deretter vises hver side under {{ui:Ark}}, og første side i den første nye PDF-en åpnes.

Du kan også dra PDF-ene fra {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren}} og slippe dem hvor som helst på TakeoffCraft. En ramme «Slipp PDF-er, DWG- eller DXF-tegninger, eller en .takeoff.json» vises mens du drar.

Vil du legge til flere PDF-er senere, gjør du det samme igjen. PDF-er som allerede er åpne, hoppes over.

Startskjermen lister også PDF-ene og mengdeuttakene du nylig åpnet, i nettlesere som lar en side åpne en fil igjen (Chrome og Edge). Klikk på en for å åpne den; nettleseren kan be om tillatelse først. Se [Dine filer](common:your-files).

:::note
Ingenting lastes opp. Nettleseren leser PDF-ene på datamaskinen din, og de er borte fra TakeoffCraft når du lukker fanen eller velger {{ui:Ny}}.
:::

## Tegninger ved siden av PDF-er

{{ui:Åpne tegninger}} tar også DWG- og DXF-tegninger, alene eller sammen med PDF-er: hver tegnings modellrom og layouter blir ark i samme liste. Se [Åpne en DWG- eller DXF-tegning](topic:open-a-drawing), deretter [Tell fra en tegning](topic:count-from-a-drawing).

## En PDF overlevert fra en annen app

En annen app i pakken kan overlevere PDF-en den har åpen: den åpner TakeoffCraft i en ny fane, og PDF-en åpnes der som om du hadde sluppet den. Statuslinjen sier «Åpnet (navn), overlevert fra (app). Originalfilen er uendret.» Ingenting lastes opp; filen går gjennom denne nettleserens egen lagring og er borte fra den når den er åpnet.

Sier statuslinjen at PDF-en «kom ikke frem», ventet fanen for lenge, eller PDF-en var allerede åpnet i en annen fane: åpne den med {{ui:Åpne tegninger}}.

Den andre veien, når MarkupCraft kjører der du er og kan ta imot en fil, har arkfeltet under tegningen en knapp for {{ui:MarkupCraft}}: den åpner PDF-en for arket på skjermen i MarkupCraft, i en ny fane, for å gjennomgå og markere den.

## Finn et ark

- Rull gjennom listen {{ui:Ark}} til venstre, og klikk på et ark.
- Skriv i **Søk i ark** øverst i listen for å filtrere på arknummer, filnavn eller sidetikett. Tallet ved siden av {{ui:Ark}} viser «3 av 40» mens et filter er på.
- Trykk {{key:PageDown}} for neste ark og {{key:PageUp}} for forrige. De følger listen slik den er filtrert.

:::mac
På et Mac-tastatur uten tastene Page Up og Page Down trykker du fn sammen med pil opp eller pil ned.
:::

## Hvordan ark navngis

- En side som PDF-en gir en etikett, for eksempel `A-101`, navngis etter den etiketten.
- En side uten etikett (eller en etikett som bare er sidenummeret) får navnet «(filnavn), side (n)».
- Når flere PDF-er er åpne, har navngitte ark også filnavnet: «A-101 — Architectural».

Arknavn kan ikke skrives inn for hånd ennå.

## Se deg rundt på et ark

- Bruk musehjulet for å zoome der pekeren er.
- Dra med venstre eller midtre knapp for å panorere. Med {{ui:Autotelling}}, eller når du starter på hjørnet av et merke, holder du {{key:Space}} mens du drar, eller drar med midtknappen.
- Trykk {{key:F}} eller velg {{ui:Tilpass side}} for å se hele arket; {{key:W}} eller {{ui:Tilpass bredde}} tilpasser bredden.
- Trykk {{key:Plus}} eller {{key:=}} for å zoome inn og {{key:Minus}} for å zoome ut, rundt midten av visningen.

Hvert ark husker sin egen zoom og posisjon så lenge det er åpent.

## Neste

Før du kan måle på et ark, må det ha en målestokk: [Angi målestokken](topic:set-the-scale).
