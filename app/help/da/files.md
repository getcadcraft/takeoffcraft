---
title: Filer, som TakeoffCraft åbner og gemmer
summary: PDF'er ind, en mængdeudtræksprojektfil, regneark og markerede PDF'er ud - hvad hver rummer, hvor den havner, og hvad der ændrer sig online, offline og mellem browsere.
keywords: filer, formater, pdf, takeoff.json, projektfil, xlsx, csv, markeret pdf, download, gem, åbn, offline
from: 1bf9be65
---

## Hvad det åbner

| Fil | Sådan | Bemærkninger |
|---|---|---|
| PDF (`.pdf`) | {{ui:Åbn tegninger}}, {{key:Mod+O}}, eller slip på siden | Flere ad gangen. Hver side bliver et ark. |
| Mængdeudtræksprojekt (`.takeoff.json`) | {{ui:Åbn mængdeudtræk}}, eller slip på siden | Dine poster, målestokke og markeringer. Du kan slippe den sammen med dens PDF'er. |

Andre filer, der slippes på siden, springes over, og statuslinjen nævner dem.

- **Adgangskodebeskyttede PDF'er** åbnes ikke: »(name) er beskyttet med adgangskode. Åbn en ubeskyttet kopi.«
- **Den samme PDF to gange** åbnes én gang: »(name) er allerede åben.« TakeoffCraft kender filer på deres indhold, ikke deres navne.
- **Scannede PDF'er** åbnes og måles som alle andre; TakeoffCraft behøver ikke teksten i PDF'en.
- **Store tegningssæt:** hver PDF læses fuldt ud, når den åbnes (for at tage dens fingeraftryk), så en meget stor fil tager et øjeblik. Miniaturer tegnes én ad gangen, mens du ruller.

## Hvad det gemmer

Hver gemning er en download. Der skrives ikke noget tilbage i dine PDF'er.

| Du vælger | Du får | Hvad der er i den |
|---|---|---|
| {{ui:Gem mængdeudtræk}} | `(name).takeoff.json` | Poster, kalkulationsenheder, satser, arkenes målestokke og hver markering, knyttet til hver PDF via dens indhold. Ingen PDF-sider. |
| {{ui:XLSX}} | `(name).xlsx` | Fire regneark: Kalkulation (med levende formler), Pr. ark, Markeringer, Målestokke. |
| {{ui:CSV}} | `(name).csv` | Kalkulationen som rene værdier, én række pr. post og komponent. |
| {{ui:Markeret PDF}} | `(PDF name) (takeoff).pdf` | En kopi af hver åben PDF, der har markeringer, med mængdeudtrækket tegnet på siderne og en signaturforklaring. Én fil pr. PDF. |

Navnet tages fra den første PDF, du åbnede i dette mængdeudtræk. Der er endnu ingen omdøbningsboks: omdøb den downloadede fil, hvis du vil have et andet navn.

Se [Eksportér kalkulationen og en markeret PDF](topic:export-estimate) og [Eksportkolonner](topic:export-columns).

## Hvor downloads havner

Din browser gemmer dem, hvor den gemmer alle downloads, som regel mappen Downloads. Find den i {{pick:mac=Finder|windows=Filutforskeren|linux=din filhåndtering}}. Hvis din browser er indstillet til at spørge, hvor hver fil skal gemmes, spørger den.

:::chromium
{{ui:Markeret PDF}} med flere markerede PDF'er downloader flere filer på én gang. Chrome og Edge kan spørge én gang, om dette websted må downloade flere filer. Vælg Tillad.
:::

:::safari
Safari gemmer i Downloads, medmindre du har ændret downloadplaceringen i Safari-indstillingerne, under Generelt.
:::

## Hvorfor projektfilen og PDF'erne er adskilt

Filen `.takeoff.json` rummer kun dit mængdeudtræk. Den finder sine PDF'er igen via deres indhold (et fingeraftryk af hver fil), så:

- Det gør ikke noget at omdøbe eller flytte en PDF.
- En PDF, der er ændret eller gemt igen af et andet program, tæller som en anden fil, selv med samme navn.
- Markeringer på PDF'er, der ikke er åbne, tæller stadig med i totalerne.

Se [Gem og genåbn et mængdeudtræk](topic:save-and-reopen).

## Online og offline

Dine PDF'er og mængdeudtræk forlader aldrig din computer, hverken online eller offline. Forbindelsen betyder kun noget for at indlæse selve TakeoffCraft.

For at arbejde uden forbindelse gemmer du først appen, mens du er online:

1. Vælg {{ui:Gem til offline brug}} i applinjen øverst.
   Knappen tæller op, »Gemmer 12 af 40«, mens den gemmer.
2. Vent på {{ui:Klar offline}}.

Når du gemmer TakeoffCraft, beholdes appen, denne hjælp, PDF-læseren, PDF-skriveren, som {{ui:Markeret PDF}} bruger, og auto-tællings-workeren i din browser, ca. 6 MB. Når der står {{ui:Klar offline}}, virker alt offline: at åbne PDF'er, måle, {{ui:Auto-tælling}}, {{ui:Gem mængdeudtræk}}, {{ui:XLSX}}, {{ui:CSV}} og {{ui:Markeret PDF}}.

| Knappen siger | Betydning |
|---|---|
| {{ui:Gem til offline brug}} | Ikke gemt i denne browser endnu. Vælg den for at gemme. |
| Gemmer (n) af (m) | Gemmer nu. |
| {{ui:Klar offline}} | Gemt. Vælg den for {{ui:Gem igen (hent den nyeste version)}} eller {{ui:Fjern offlinekopien}}. |
| {{ui:Kunne ikke gemme}} | Nogle filer blev ikke downloadet. Kontrollér din forbindelse og vælg den igen. |
| {{ui:Offline er ikke tilgængelig}} | Dette browservindue kan ikke beholde en offlinekopi (private vinduer og nogle administrerede computere blokerer det). |

Mere, herunder hvor længe en gemt kopi holder i hver browser: [Arbejd offline](common:offline).

:::offline
Du er offline. Hvis applinjen viser {{ui:Klar offline}}, virker alt. Hvis den ikke gør, kan de dele, TakeoffCraft endnu ikke har indlæst i denne fane (PDF-skriveren til {{ui:Markeret PDF}}, auto-tællings-workeren), ikke indlæses nu, og {{ui:Markeret PDF}} stopper med »Den markerede PDF kunne ikke skrives«. Dit mængdeudtræk er i sikkerhed i begge tilfælde: {{ui:Gem mængdeudtræk}}, {{ui:XLSX}} og {{ui:CSV}} kræver ingen forbindelse. Genindlæs ikke fanen, før du er online igen.
:::

:::online
Du er online. Før et besøg på pladsen eller en flyvetur skal du vælge {{ui:Gem til offline brug}} og vente på {{ui:Klar offline}}.
:::

## Regneark

XLSX'en beholder levende formler, så et regnearksprogram genberegner kalkulationen, når det åbner filen, og holder den rigtig, når du ændrer en sats eller spild dér. Projektmappen er kontrolleret i LibreOffice Calc, som genberegnede hver total til samme øre. Den er endnu ikke åbnet i Excel.

CSV'en er rene værdier med et byte order mark, så regnearksprogrammer læser tegn som m² rigtigt.

## Desktop og sky

:::desktop
Fra 0.5 er desktopappen CadCraft Studio: TakeoffCraft og de syv andre apps i én installation. Der er ikke noget separat TakeoffCraft-installationsprogram.
:::

Skygemning findes ikke endnu. Opbevar dine `.takeoff.json`-filer sammen med jobbets PDF'er, og tag sikkerhedskopier af dem som af enhver anden fil. Se [Hvor dine filer havner](common:your-files).
