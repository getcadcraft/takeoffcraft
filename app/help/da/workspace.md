---
title: TakeoffCraft-skærmen
summary: En rundvisning i vinduet med de navne, der står på skærmen - værktøjslinjen, arklisten, arket, panelet Poster, tabellen Mængder og statuslinjen.
keywords: skærm, layout, layouts, bånd, projektbrowser, værktøjskasse, infoboks, værktøjslinje, paneler, arkliste, postpanel, mængder, statuslinje, rundvisning, brugerflade
from: ab1115e0
---

TakeoffCraft fylder browservinduet under CadCraft-applinjen. Oppefra og ned og fra venstre mod højre:

| Del | Hvor | Hvad den er til |
|---|---|---|
| Applinje | Allerøverst | Appens navn, versionen, {{ui:Om TakeoffCraft}}, {{ui:Hjælp}} ({{key:F1}}), {{ui:Gem til offline brug}}, {{ui:Indstillinger}} ({{key:Mod+,}}), knappen {{ui:Fuld skærm}} og temaskiftet {{ui:Papir}} / {{ui:Model}}. |
| Værktøjslinje | Under applinjen | Hver kommando, i grupper: {{ui:Fil}}, {{ui:Eksportér}}, {{ui:Målestok}}, {{ui:Mængdeudtræk}}, {{ui:Rediger}}, {{ui:Visning}}. |
| Ark | Til venstre | Hver side i hver åben PDF, med en miniature, dens målestok og dens antal markeringer. |
| Arket | Midten | Den åbne side. Du måler her. |
| Poster | Til højre | Dine mængdeudtræksposter, den valgte posts indstillinger og den valgte markering. |
| Mængder | Nederst | Mængder og omkostninger pr. post eller pr. ark samt jobbets total. |
| Statuslinje | Allernederst | Den aktuelle måling, meddelelser, 45°-tippet og zoom. |

## Værktøjslinjen

Hold markøren over en knap for at se, hvad den gør, og dens tast.

| Gruppe | Knapper |
|---|---|
| {{ui:Fil}} | {{ui:Ny}} (tomt mængdeudtræk), {{ui:Åbn tegninger}} ({{key:Mod+O}}), {{ui:Åbn mængdeudtræk}} (et `.takeoff.json`-projekt), {{ui:Gem mængdeudtræk}} ({{key:Mod+S}}) |
| {{ui:Eksportér}} | Én menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Markeret PDF}} |
| {{ui:Målestok}} | {{ui:Kalibrér}} ({{key:K}}), {{ui:Kontrollér}} ({{key:D}}) og listen {{ui:Forudindstilling}} |
| {{ui:Mængdeudtræk}} | {{ui:Vælg}} ({{key:V}}), {{ui:Lineær}} ({{key:L}}), {{ui:Areal}} ({{key:A}}), {{ui:Cirkel}} ({{key:O}}), {{ui:Bue}} ({{key:R}}, en til/fra-knap), {{ui:Fradrag}} ({{key:E}}, en til/fra-knap), {{ui:Udsparing}} ({{key:X}}), {{ui:Tæl}} ({{key:C}}), {{ui:Auto-tælling}} ({{key:S}}) |
| {{ui:Rediger}} | {{ui:Fortryd}} ({{key:Mod+Z}}), {{ui:Gentag}} ({{key:Mod+Y}}), {{ui:Kopiér}} ({{key:Mod+C}}), {{ui:Sæt ind}} ({{key:Mod+V}}) og {{ui:Mere}}: {{ui:Klip}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Sæt ind på samme sted}}, {{ui:Duplikér}}, {{ui:Slet}}, {{ui:Vælg alle}}, {{ui:Fravælg alle}} |
| {{ui:Visning}} | {{ui:Tilpas side}} ({{key:F}}), {{ui:Tilpas bredde}} ({{key:W}}) |

Det værktøj, du bruger, vises nedtrykt. Knapperne {{ui:Bue}} og {{ui:Fradrag}} forbliver nedtrykt, mens de er slået til.

## Ark (til venstre)

- **Søg i ark** filtrerer listen efter arknavn, filnavn eller sidemærkat.
- Hvert ark viser en miniature (tegnet, mens du ruller), sit navn og enten sin målestok eller **Ingen målestok**.
- Højre side af hver række viser, hvor mange markeringer arket har. Mens en post er fremhævet, viser den i stedet, hvor mange af den posts markeringer der er på arket.
- Klik på et ark for at åbne det. {{key:PageDown}} og {{key:PageUp}} flytter til næste og forrige ark på listen.
- Når et mængdeudtræk dækker PDF'er, der ikke er åbne, navngiver en note under listen dem. Se [Gem og genåbn et mængdeudtræk](topic:save-and-reopen).

Arknavne kommer fra PDF'en: en sidemærkat som `A-101` bliver arknavnet. En side uden mærkat opkaldes efter sin fil og sidenummer, som »Plans, side 3«. Med flere PDF'er åbne viser mærkede ark også filnavnet.

## Arket (midten)

- Linjen under arket viser arknavnet og dets målestok, eller »Ingen målestok endnu: vælg en forudindstilling eller kalibrér«. Dens knapper: MarkupCraft (når den app kan tage PDF'en; se [Start et mængdeudtræk og åbn et tegningssæt](topic:open-plan-set)), {{ui:Sammenlign}} (en ældre version af arket oven på dette: [Sammenlign et revideret ark](topic:compare-revisions)), »(n) at kontrollere« (markerede markeringer, når der er nogen) og {{ui:3D}} ([3D-kontrolvisningen](topic:check-in-3d)).
- Før nogen PDF er åben, viser midten en kort guide i fem trin.
- Hjulet zoomer ved markøren. Træk for at panorere. Se [Tastatur og mus](topic:keyboard).
- Mens du bruger {{ui:Auto-tælling}}, vises en linje med dens betjening øverst på arket.

## Poster (til højre)

Øverst listen {{ui:Tilbudsområde}}: den bygning, etage eller fase, nye markeringer havner i ([Tilbudsområder](topic:bid-areas)).

- {{ui:Ny post}} åbner en lille formular: et navn, en type ({{ui:Lineær (længde)}}, {{ui:Areal}} eller {{ui:Antal}}) og {{ui:Tilføj}}.
- Listen viser hver posts farve, typeikon, navn og mængde. Klik på en post for at tegne med den og fremhæve dens markeringer på hvert ark. Klik på den igen for at stoppe fremhævningen.
- Under listen er **Post: (name)** posteditoren: navn, type, farve, enhed, højde eller dybde, spild, materiale- og lønsatser, de målte værdier og {{ui:Kalkulationsenhed}}. Se [Opret mængdeudtræksposter](topic:create-items).
- **Valgt markering** vises, når du vælger en markering: hvilken post den hører til, dens ark, dens målinger og knapper som {{ui:Tilføj en udsparing}} og {{ui:Slet markering}}. Med flere markeringer valgt bliver den til **Valgte markeringer**: hvor mange af hver post, og {{ui:Kopiér}}, {{ui:Duplikér}}, {{ui:Klip}} og {{ui:Slet markeringer}}.
- Posteditoren ender med {{ui:Kopiér post}} og {{ui:Duplikér post}}: en post med sin kalkulationsenhed og sine omkostninger, uden markeringer. Se [Kopiér, sæt ind og duplikér markeringer](topic:copy-paste).

## Mængder (nederst)

- {{ui:Pr. post}} viser hver post og dens kalkulationsenhedskomponenter med mængde, spild, satser og udvidede omkostninger. Du kan skrive spild og satser direkte ind i tabellen.
- {{ui:Pr. ark}} viser hver posts mængde på hvert ark.
- En advarsel, der begynder med **Ufuldstændig:**, vises, når noget er udeladt af totalerne.
- {{ui:Jobtotal}} er til højre i overskriften.
- Pileknappen yderst til højre skjuler eller viser tabellen, så arket får mere plads.

Se [Læs mængder og kalkulationen](topic:read-quantities).

## Statuslinje (nederst)

Fra venstre mod højre: den aktuelle måling, mens du tegner (længde, areal, radius eller et kontrolresultat), feltet {{ui:Skriv}}, mens du skriver en længde, meddelelser fra TakeoffCraft, påmindelsen »Shift fanger til 45°« (eller »Fanger til 45°; Shift frigør vinklen«, når det er slået til i [Indstillinger](topic:settings)), knappen {{ui:Fang}} (fang til tegningens linjer, slået til, når den er fremhævet; {{key:F3}}) og zoomprocenten.

:::tip
Læs statuslinjen, når noget ikke sker. TakeoffCraft forklarer dér, hvorfor det afviste et klik, for eksempel »Dette ark har ingen målestok endnu«.
:::

## Andre layouts

Alt ovenfor er layoutet {{ui:CadCraft klassisk}}, begyndelsen. {{ui:Indstillinger}} ({{key:Mod+,}}) › {{ui:Globalt}} › {{ui:Layout}} tilbyder to til; de samme værktøjer og taster virker i alle tre, og når du vælger {{ui:CadCraft klassisk}} igen, sidder hver betjening, hvor den sad.

| Layout | I TakeoffCraft |
|---|---|
| {{ui:Bånd og projektbrowser}} | {{ui:Udtræksbånd}} hen over toppen ([Menuer, taster og mus](topic:menus-keys-and-mouse)), en linje til det værktøj, der kører, en fane for hvert ark, du åbner (en tegnings Model og layouts er også ark), med målestokforudindstillingerne og {{ui:Tilpas side}} under arket. Venstre panel rummer {{ui:Egenskaber}} (den valgte post, note eller markering) over {{ui:Udtræksbrowser}}: {{ui:Ark}} (klik på ét for at åbne det i en fane), {{ui:Betingelser}} (klik på én for at tegne med den) og {{ui:Kalkulation}} (hver posts total og jobbets total); miniaturerne er dens anden fane. |
| {{ui:Værktøjskasse og infoboks}} | Værktøjslinjen over arket, en infoboks med {{ui:Tilbudsområde}}, det værktøj, der kører, eller valget og arklinjen, en kolonne med mængdeudtræksværktøjerne til venstre, en fane for hvert ark og {{ui:Fang}} og zoom under arket. |

Mens [3D-kontrolvisningen](topic:check-in-3d) er åben, viger arkfanerne og linjen under arket; luk 3D-visningen for at måle igen. På en telefon kører altid telefonlayoutet.

## Fuld skærm og temaer

Knappen {{ui:Fuld skærm}} i applinjen, eller {{key:Ctrl+Shift+F}} (Control på alle platforme, også på en Mac), skifter mellem normal, fuld skærm og fuld skærm med linjerne skjult. Når linjerne er skjult, flytter du markøren til den øverste kant for at vise dem igen.

{{ui:Papir}} er det lyse tema og {{ui:Model}} det mørke. I {{ui:Model}} vises tegningen inverteret (lyse linjer på mørkt) kun på skærmen; eksporter ændres aldrig.
