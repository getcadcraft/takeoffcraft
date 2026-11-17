---
title: Tellen vanuit een tekening
summary: Tel blokken, objecten op een laag of tekst rechtstreeks uit een DWG of DXF: exact, met geneste blokken, dynamische blokvarianten en blokarrays verwerkt, in één stap ongedaan te maken.
keywords: tellen vanuit tekening, cad-telling, bloktelling, blokken tellen, invoegen, blokbenaming, geneste blokken, dynamisch blok, variant, minsert, array, laag, entiteitstype, cirkels, tekst, attribuut, tag, verborgen lagen, exacte telling, hoe, deuren, armaturen
from: 5060e24e
---

{{ui:CAD-telling}} op de bladbalk (de opdracht **Tellen vanuit de tekening** in de andere menustijlen) telt wat een DWG of DXF zegt dat er is. Waar {{ui:Automatisch tellen}} zoekt naar een afbeelding van een symbool en er één kan missen of een valse kan vinden, telt dit de objecten: elke invoeging van een blok met de naam `DOOR-36` is één deur. Open eerst de tekening: [Een DWG- of DXF-tekening openen](topic:open-a-drawing).

## Een blok tellen

1. Open een blad van de tekening. {{ui:CAD-telling}} staat op de bladbalk.
2. Kies het. Het venster toont de blokken met hoeveel er van elk zijn. Zoek op naam en kies er één.
3. Controleer de regel onder de lijst: "22 gevonden, 22 toe te voegen."
4. Kies onder {{ui:Toevoegen aan}} een telitem, of laat {{ui:Een nieuw telitem}} staan en geef het een naam.
5. Kies de toevoegknop, die het aantal benoemt: {{ui:22 markeringen toevoegen}}. De markeringen verschijnen op de invoegpunten van het blok, en de hoeveelheid van het item is de telling.

Het is één stap ongedaan: {{key:Mod+Z}} neemt de markeringen (en een nieuw item) samen weg. De raming, het spreadsheet en de gemarkeerde PDF behandelen het item als elk ander telitem.

### Wat telt mee

- **Elke invoeging van de blokbenaming**, welke schaal en hoek ook, in modelruimte of papierruimte. Blokbenamingen letten niet op hoofdletters.
- **Blokarrays** (MINSERT): elke kopie in de array telt als één.
- **Geneste blokken.** Een blok dat binnen een ander blok is geplaatst, telt op elke diepte. De lijst zegt "6 binnen andere blokken"; vink {{ui:Ook blokken binnen andere blokken tellen}} uit om alleen invoegingen die rechtstreeks in de tekening staan te tellen.
- **Dynamische blokken.** Een dynamisch blok telt onder zijn eigen naam, niet onder de anonieme kopieën (`*U12`) die het bestand bewaart. Zijn toestanden staan apart vermeld ("Enkel 12, Dubbel 4"): kies een toestand om alleen die te tellen, of {{ui:Elke variant}}. Wanneer een bestand niet zegt welke toestand een kopie toont, worden die vermeld als "(toestand onbekend)".
- **Lagenfilter.** Een blok op meerdere lagen: kies er één onder {{ui:Op laag}}.

### Wat niet telt

- **Verborgen lagen.** Een object op een laag die in het bestand is uitgezet of bevroren (of die u hebt verborgen in {{ui:Lagen}}), wordt weggelaten, en de regel zegt hoeveel: "3 op verborgen lagen weggelaten". Vink {{ui:Die ook tellen}} aan om ze mee te nemen.
- **Gekoppelde tekeningen die niet open zijn** tellen niet mee; het venster zegt dat.
- **Objecten die precies op een ander object van dezelfde soort liggen** worden als twee geteld (het zijn twee objecten), en het venster zegt dat: meestal is het een tekenfout die het bekijken waard is.

## Wat dit blad toont, of de hele tekening

- **Wat dit blad toont** telt de objecten die het blad toont: op een indeling de modelobjecten binnen de viewports ervan (een laag die in een viewport is bevroren, telt daar niet mee) plus de eigen objecten van de indeling.
- **De hele tekening, elk object één keer** telt de modelruimte één keer, met de markeringen op het blad Model, en telt niet wat meerdere indelingen opnieuw tonen.

Wat een indeling toont en wat Model toont, geven hetzelfde aantal voor dezelfde objecten; tel ze niet beide op bij één item.

## Opnieuw tellen

Dezelfde blok opnieuw tellen met hetzelfde item voegt alleen wat nieuw is toe: "22 al geteld." Elke markering staat voor één object.

## Per laag en type

Op {{ui:Per laag en type}} kiest u een laag en een objecttype (cirkels, polylijnen, arceringen…): "alle cirkels op E-LITE". Vink {{ui:Ook objecten binnen blokken tellen}} aan om die binnen blokdefinities mee te nemen, op elke plek waar het blok wordt ingevoegd.

## Per tekst

Op {{ui:Per tekst}} typt u de tekst, zoals `A3`, en zegt u of die precies moet overeenkomen, moet bevatten of als heel woord moet voorkomen. Tekstobjecten, meerregelige tekst van multileaders en blokattribuutwaarden tellen allemaal mee (een tagattribuut `ITEM = A3` wordt gevonden); kies {{ui:In attribuut}} om maar één attribuut te tellen. De meest voorkomende teksten worden vermeld om aan te klikken.

## Wanneer u in plaats daarvan Automatisch tellen gebruikt

Gebruik {{ui:Automatisch tellen}} voor PDF's en voor symbolen in een tekening die geen blokken zijn (losjes getekend, of ontbonden). Zijn ze als blokken getekend, tel ze dan hier.
