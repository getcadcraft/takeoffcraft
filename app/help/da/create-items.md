---
title: Opret mængdeudtrækposter
summary: Opret lineære, areal- og tælleposter og angiv deres enhed, højde eller dybde, spild samt materiale- og lønsatser.
keywords: hold, produktionsrate, holdstørrelse, timeløn, timer, mandetimer, arbejdstimer, holddage, lønarbejdstimer, post, ny post, betingelse, flere betingelser, også mål, flere typer, rum, lineær, areal, tæl, enhed, højde, dybde, spild, materiale, løn, sats, farve, omkostning
from: 7fa5effc
---

En **post** er noget, du måler og prissætter: en vægtype, en gulvbelægning, et loft, en dør, et lysarmatur. Hvert mærke, du tegner, hører til en post. Andre programmer kalder disse betingelser.

Hver post har en type (og kan også tage andre slags mærker, se [Én post, flere slags mærker](topic:create-items#one-item-several-kinds-of-marks)):

| Skriv | Du tegner | Den rapporterer | Enheder |
|---|---|---|---|
| Lineær | Serier af forbundne punkter | Længde, antal serier og vægareal, når den har en højde | LF eller m |
| Areal | Lukkede konturer, med udsparinger | Areal, omkreds, antal områder | SF, SY, SQ, ac, ha eller m² |
| Tæl | Ét klik pr. ting | Hvor mange | EA |
| Indtastet mængde | Intet: du skriver mængden | Det tal du skrev (eller et hentet fra CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha eller m² |

## Indtastede mængder (ingen tegning)

Nogle ting i et overslag tegnes aldrig: mobilisering, tilladelser, en reserve, en kontrakt til en fast sum, det afgravnings- og opfyldningsarbejde CivilCraft har beregnet. Gør dem til en **indtastet mængde**:

1. Vælg {{ui:Ny post}}, skriv et navn, vælg {{ui:Indtastet mængde (ingen tegning)}} og vælg {{ui:Tilføj}}.
2. I postredigeringen vælger du {{ui:Enhed}} (LS for en fast sum) og skriver {{ui:Mængde}}: `1`, `2.5` eller `1,250`.
3. Angiv spild og satser som for enhver anden post. En kalkulationsenheds formler bruger `Q`, mængden, for eksempel `ceil(Q / 12)` lastbilslæs.

En indtastet mængde tager ingen mærker og gør aldrig overslaget ufuldstændigt. Når mængdeudtrækket har tilbudsområder, har redigeringen også {{ui:Tilbudsområde}}: mængden tæller så i det område, dets alternativer og dets totaler, ligesom et mærke der ville gøre. Mængder hentet fra et andet program oplyser, hvor de kommer fra; se [Jordarbejde og koteangivelser](topic:earthwork#cut-and-fill-from-civilcraft).

## Opret en post

1. I panelet {{ui:Poster}} til højre vælger du {{ui:Ny post}}.
2. Skriv et navn, som `Indvendig væg type A` eller `Tæppeflise`.
3. Vælg typen: {{ui:Lineær (længde)}}, {{ui:Areal}} eller {{ui:Tæl}}.
4. Vælg {{ui:Tilføj}} (eller tryk {{key:Enter}}).
   Posten vises på listen med sin egen farve, bliver den post du tegner med, og dens redigering åbnes under listen. Statuslinjen fortæller dig, hvilket værktøj du skal vælge næste.

Tryk {{key:Esc}} i formularen for at lukke den uden at tilføje en post.

:::tip
Hvis du vælger et måleværktøj først, bruger TakeoffCraft den sidste post af den rigtige type, eller åbner formularen {{ui:Ny post}} med den type allerede valgt.
:::

## Vælg den post du tegner med

Klik på en post på listen. Den bliver den post nye mærker går til, og dens mærker fremhæves på alle ark, mens de andre fortoner sig. Hvis det åbne ark ikke har nogen af dens mærker, springer TakeoffCraft til et ark, der har. Klik på posten igen for at stoppe fremhævningen; den forbliver den post du tegner med.

Klik på et mærke med værktøjet {{ui:Vælg}} gør også dets post til den aktuelle.

## Konfigurer posten

Postredigeringen (**Post: (navn)**) har disse felter. Hvert felt gemmes, når du forlader det eller trykker {{key:Enter}}, og hver ændring kan fortrydes.

| Felt | Hvad det gør |
|---|---|
| {{ui:Navn}} | Vist på listen, i tabellerne og i eksporterne. |
| {{ui:Skriv}} | Lineær, Areal eller Tæl. Den er låst, når posten har mærker ("En post med mærker beholder sin type"). |
| {{ui:Farve}} | Farven på dens mærker på skærmen og i den markerede PDF. |
| {{ui:Enhed}} | Hvilken enhed mængden rapporteres i: LF eller m for lineær; SF, SY, SQ, ac, ha eller m² for areal; EA for tæl. |
| {{ui:Mål også}} | De andre slags mærker posten tager, hver med sin egen enhed. Se nedenfor. |
| {{ui:Højde}} (lineær) | En vægs højde. Posten rapporterer så også vægareal (længde × højde). Serier, der stammer fra en BimCraft-model, medbringer deres døre og vinduer: de trækkes fra én gang, og posten angiver bruttoareal, åbningerne og nettoarealet. Et mængdeudtræk fra et BimCraft-projekt, der valgte en opmålingsmetode, måles også med den metode her (noten nævner den med dens kilde og siger, at en mængdekonsulent ikke har kontrolleret den); metoden kan ikke ændres i TakeoffCraft. Mursten eller blokke og mørtel fra en vægtype kommer som to komponenter: de enheder, der skal bestilles, og mørtelvolumenet. |
| {{ui:Dybde}} (areal) | En dybde eller tykkelse, brugt i kalkulationsenhedens formler (for eksempel betonvolumen). |
| {{ui:Spild %}} | Lægges til mængden før prissætning: 10 betyder mængde × 1.10. |
| {{ui:Materiale $/LF}} | Materialeomkostning pr. enhed. Etiketten følger enheden: $/SF, $/EA og så videre. |
| {{ui:Løn $/LF}} | Lønomkostning pr. enhed. |
| {{ui:CSI-nummer}} | Dets CSI MasterFormat-nummer, som `09 21 16` (eller blot afdelingen, `09`). Arket "By division" i arbejdsbogen grupperer omkostninger efter det. Poster fra [fagpakker](topic:trade-packs) har et allerede. |

Højde og dybde tager fod og tommer (`9'-0"`, `8' 6"`) eller decimalfod (`9`) for britiske enheder og meter (`2.7`, `2700 mm`) for metriske enheder. Satser tager beløb som `12.50` eller `$1,250`, op til fire decimaler. Se [Indtastning af længde, sats og procent](topic:entry-formats).

Under felterne viser **Målt** de totaler, postens formler kan bruge, med deres bogstaver: Længde (L), Serier (N), Vægareal (A) for lineær; Areal (A), Omkreds (P), Områder (N) for areal; Antal (N) for tæl.

## Én post, flere slags mærker

Nogle ting måles på mere end én måde: et rum har et gulv (et areal), en fodliste langs sine vægge (en længde) og døre (et antal). I stedet for tre poster laver du én:

1. Opret posten med sin hovedtype, for eksempel en arealpost `Rum 101`.
2. Under {{ui:Mål også}} i dens redigering sætter du flueben i {{ui:Lineær}}, {{ui:Tæl}} eller begge. Hver får en enhed ved siden af sig.
3. Tegn med ethvert værktøj, hvis slags posten tager: med `Rum 101` aktuel tegner {{ui:Areal}} dens gulv, {{ui:Lineær}} dens fodliste og {{ui:Tæl}} dens døre. TakeoffCraft spørger ikke efter en anden post.

Posten på listen viser alle mængder (`50.00 SF + 2 EA`). I mængdetabellen har postens række sin hovedmængde, og hver anden slags får sin egen række under den, som **Rum 101 (tæl)**, med egne spild-, materiale- og lønsatser. Eksporterne, tabellen pr. ark og den markerede PDFs signaturforklaring lister dem på samme måde.

Hovedtypens felter forbliver hovedtypens egne: højden eller dybden, hældningen, fradragsarealerne og 3D-formen gælder kun for dens mærker. En fodlistestrækning tegnet for en arealpost måles simpelt langs planen og vises fladt i 3D. Kalkulationsenhedens formler bruger hovedtypens totaler.

En slags kan kun fravælges, mens posten ikke har mærker af den; slet dem, eller flyt dem til en anden post under **Valgt mærke**, først. Mærker kan flyttes til enhver post, der tager deres slags.

Længere nede ligger {{ui:Kalkulationsenhed}}: komponenter som stænderne eller plader, hver med sin egen formel og satser. Se [Kalkulationsenheder og formler](topic:assemblies).

Nederst: {{ui:Flyt op}} og {{ui:Flyt ned}} ændrer postens plads på listen og i eksporterne, og {{ui:Slet post}} fjerner den med alle dens mærker (efter at have spurgt; du kan fortryde det).

Areal-poster har også **Taghældning** (tagplaner målt på skråningen: [Tage og skråninger](topic:roofs-and-slopes)) og **Fradragsareal** (deres mærker trækkes fra andre posters arealer: [Mål arealer](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Lineære poster har **Hældning** (Plan, Gavl, Valm eller render) og, for gavle og valme, **Taghældning**.

## Satser i tabellen

Du kan også skrive {{ui:Spild %}}, materiale- og lønsatser direkte ind i tabellen {{ui:Mængder}} nederst ({{ui:Pr. post}}). Det er den samme indstilling som i redigeringen.

## Sådan virker prissætningen

For hver post og hver kalkulationsenhedskomponent:

1. **Med spild** = mængde × (1 + spild %).
2. **Materiale** = med spild × materiale pr. enhed, afrundet til øre.
3. **Løn** = med spild × løn pr. enhed, afrundet til øre.
4. **Total** = materiale + løn.

{{ui:Jobtotal}} lægger hver post og hver komponent sammen. En post kan have sine egne satser og en kalkulationsenhed samtidig; begge tælles med, så lad postens satser være 0, når dens komponenter bærer omkostningen.

## Løn efter hold

I stedet for en lønsats pr. enhed kan en posts løn komme fra et hold: hvor meget det udfører pr. time, hvor mange mennesker, og hvad hver tjener. Under {{ui:Løn pr. hold}} i postredigeringen sætter du flueben i {{ui:Pris løn ud fra et hold}} og udfylder:

| Felt | Eksempel |
|---|---|
| {{ui:Produktion}} | `20` LF i timen (i postens enhed) for hele holdet |
| {{ui:Holdstørrelse}} | `2` personer |
| {{ui:Timeløn $/time pr. person}} | `45` |

TakeoffCraft beregner ud fra mængden med spild:

- **holdtimer** = mængde ÷ produktion (110 LF ÷ 20 = 5.5),
- **arbejdstimer** = holdtimer × holdstørrelse (11),
- **holddage** = holdtimer ÷ 8 (0.69),
- **løn** = arbejdstimer × timeløn ($495.00).

Redigeringen viser resultatet og den sats, det giver ($4.50/LF). Postens egen lønsats er så skrivebeskyttet, både i redigeringen og i tabellen. Overskriften på tabellen {{ui:Mængder}} lægger jobbets arbejdstimer og holddage til. Eksporterne noterer hvert holds timer, og i arbejdsbogen er lønfeltet en formel på holdet (`ROUND(F2/20*2*45,2)`). Fjern fluebenet for at gå tilbage til en sats pr. enhed.

## Metriske poster

Vælg m (lineær) eller m² (areal) som enhed. Mængder, højder og formelværdier er så i meter. Arkets målestok kan være en hvilken som helst forudindstilling eller kalibrering; enheder og målestokke er uafhængige.

## Næste

- [Mål lineære strækninger](topic:measure-linear)
- [Mål arealer med udsparinger](topic:measure-areas)
- [Tæl manuelt](topic:count-by-hand)
