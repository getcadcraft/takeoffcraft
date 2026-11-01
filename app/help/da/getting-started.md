---
title: Kom i gang med TakeoffCraft
summary: Hvad TakeoffCraft gør, hvor det kører, og din første målte og prissatte post fra et PDF-tegningssæt.
keywords: start, første mængdeudtræk, hurtig start, introduktion, kalkulation, mængdeudtræk, tegningssæt, pdf
from: 3b9da1fb
---

TakeoffCraft måler tegningssæt, PDF'er og DWG- eller DXF-tegninger og gør målingerne til en prissat kalkulation. Du åbner filerne (en tegning tæller direkte ud fra sine blokke: se [Åbn en DWG- eller DXF-tegning](topic:open-a-drawing)), giver hvert ark en målestok (en tegning har sin egen med), laver **poster** (en vægtype, en gulvbelægning, et inventarstykke) og klikker på arkene for at tage dem af. Mængder, omkostninger og jobbets total opdateres undervejs. Du kan eksportere kalkulationen som et regneark og en kopi af PDF'erne med dit mængdeudtræk tegnet ind.

Hvis du har lavet mængdeudtræk i andre programmer, så læs [Hvis du kommer fra andet mængdeudtræksprogram](topic:coming-from) næste gang. Nogle ting fungerer anderledes her.

## Hvor det kører

TakeoffCraft kører i din webbrowser. Åbn TakeoffCraft, og skærmen er klar med det samme; der er intet at installere.

- **Dine PDF'er bliver på din computer.** De åbnes af browseren og uploades aldrig. At gemme er en download.
- Det virker i aktuelle Chrome, Edge, Firefox og Safari. Se [Browsere og computere](common:browsers).
- Det virker uden internetforbindelse, når du har valgt {{ui:Gem til offline brug}} i applinjen, og der står {{ui:Klar offline}}. Se [Arbejd offline](common:offline).
- Skygemning findes ikke endnu. Til en desktopapp kommer TakeoffCraft i CadCraft Studio, med de syv andre apps.

## Dit første mængdeudtræk i ti trin

Denne gennemgang måler én vægtype og prissætter den. Det tager et par minutter på en vilkårlig tegning, du har.

1. Vælg {{ui:Åbn tegninger}} i gruppen {{ui:Fil}} på værktøjslinjen (eller tryk {{key:Mod+O}}), vælg en eller flere PDF'er, og vælg Åbn. Du kan også slippe PDF'erne et vilkårligt sted på siden.
   Arkene vises til venstre, og det første ark åbnes i midten.
2. Find arkets trykte målestok i dets tegningshoved eller under en tegningstitel.
3. Åbn listen {{ui:Forudindstilling}} i gruppen {{ui:Målestok}} og vælg den målestok, for eksempel `1/4" = 1'-0"`.
   Linjen nederst på arket siger nu »Målestok 1/4" = 1'-0"«.
4. Vælg {{ui:Kontrollér}} (eller tryk {{key:D}}) og klik på de to ender af et mål, der er trykt på tegningen.
   Udlæsningen i statuslinjen nederst til venstre skal svare til det trykte mål. Hvis den ikke gør, så se [Angiv målestokken](topic:set-the-scale).
5. I panelet {{ui:Poster}} til højre vælger du {{ui:Ny post}}, skriver et navn som `Indervæg type A`, lader typen stå på {{ui:Lineær (længde)}} og vælger {{ui:Tilføj}}.
6. Vælg {{ui:Lineær}} på værktøjslinjen (eller tryk {{key:L}}).
7. Klik på starten af en væg og derefter på hvert hjørne langs den. Dobbeltklik, tryk {{key:Enter}} eller højreklik for at afslutte forløbet.
   Forløbet tegnes i postens farve, og dets længde vises ved siden af posten.
8. I posteditoren under {{ui:Poster}} skriver du `9'-0"` i {{ui:Højde}}, `0.85` i {{ui:Materiale $/LF}} og `1.20` i {{ui:Løn $/LF}}.
   Tabellen {{ui:Mængder}} nederst viser længden, det udvidede materiale og den udvidede løn samt {{ui:Jobtotal}}.
9. Vælg {{ui:Gem mængdeudtræk}} (eller tryk {{key:Mod+S}}).
   Din browser downloader en `.takeoff.json`-fil. Den rummer dine poster, målestokke og markeringer og åbnes igen oven på de samme PDF'er.
10. Åbn menuen {{ui:Eksportér}} på værktøjslinjen og vælg {{ui:XLSX}} for at downloade kalkulationen som et regneark.

:::tip
Tryk {{key:Esc}} for at stoppe det, du er i gang med, og gå tilbage til værktøjet {{ui:Vælg}}. {{key:Mod+Z}} fortryder enhver ændring.
:::

## Hvad du skal læse næste gang

- [TakeoffCraft-skærmen](topic:workspace) navngiver hver del af vinduet.
- [Start et mængdeudtræk og åbn et tegningssæt](topic:open-plan-set) dækker flere PDF'er og arklisten.
- [Opret mængdeudtræksposter](topic:create-items) forklarer typer, enheder, spild og satser.
- [Kalkulationsenheder og formler](topic:assemblies) gør én måling til stolper, plader og mere.
- [Tastatur og mus](topic:keyboard) viser hver tast.
