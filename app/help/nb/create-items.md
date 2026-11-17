---
title: Opprett poster for mengdeuttak
summary: Lag lineære poster, områdeposter og telle-poster, og sett enhet, høyde eller dybde, svinn og satser for materiell og arbeid.
keywords: mannskap, produksjonsrate, lagstørrelse, lønn, timer, mannstimer, arbeidstimer, lagdager, arbeidstimer, post, ny post, betingelse, flere betingelser, også måle, flere typer, rom, lineær, areal, tell, enhet, høyde, dybde, svinn, materiell, arbeid, sats, farge, kostnad
from: 7fa5effc
---

En **post** er én ting du måler og prissetter: en veggtype, et gulvbelegg, et himling, en dør, et lysarmatur. Hver markering du tegner tilhører en post. Andre programmer kaller dette betingelser.

Hver post har en type (og kan ta andre typer markeringer også, se [Én post, flere typer markeringer](topic:create-items#one-item-several-kinds-of-marks)):

| Skriv | Du tegner | Den rapporterer | Enheter |
|---|---|---|---|
| Linjær | Løpende sammenhengende punkter | Lengde, antall løp, og veggareal når den har en høyde | LF eller m |
| Areal | Lukkede omriss, med utsparinger | Areal, omkrets, antall områder | SF, SY, SQ, ac, ha eller m² |
| Tell | Ett klikk per ting | Hvor mange | EA |
| Oppgitt mengde | Ingenting: du skriver inn mengden | Tallet du skrev inn (eller et hentet fra CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha eller m² |

## Oppgitte mengder (ingen tegning)

Noe i et kalkyle tegnes aldri: mobilisering, tillatelser, en reserve, en underentreprise til fast pris, eller skjæring og fylling som CivilCraft har beregnet. Lag dem som en **Oppgitt mengde**:

1. Velg {{ui:Ny post}}, skriv inn et navn, velg {{ui:Oppgitt mengde (ingen tegning)}} og velg {{ui:Legg til}}.
2. I postredigeringen velger du {{ui:Enhet}} (LS for en fast sum) og skriver inn {{ui:Mengde}}: `1`, `2.5` eller `1,250`.
3. Sett svinn og satser som for alle andre poster. En sammensatt posts formler bruker `Q`, mengden, for eksempel `ceil(Q / 12)` lastebillass.

En oppgitt mengde tar ingen markeringer og gjør aldri kalkylen ufullstendig. Når mengdeuttaket har tilbudsområder, har redigeringen også {{ui:Tilbudsområde}}: mengden teller da i det området, dets alternativer og sine summer, akkurat som en markering der ville gjort. Mengder hentet fra et annet program sier hvor de kom fra, se [Jordarbeid og kotehøyder](topic:earthwork#cut-and-fill-from-civilcraft).

## Lag en post

1. I panelet {{ui:Poster}} til høyre velger du {{ui:Ny post}}.
2. Skriv et navn, for eksempel `Innervegg type A` eller `Teppefliser`.
3. Velg typen: {{ui:Linjær (lengde)}}, {{ui:Areal}} eller {{ui:Tell}}.
4. Velg {{ui:Legg til}} (eller trykk {{key:Enter}}). Posten vises i listen med sin egen farge, blir posten du tegner med, og redigeringen åpnes under listen. Statuslinjen forteller hvilket verktøy du skal velge neste.

Trykk {{key:Esc}} i skjemaet for å lukke det uten å legge til en post.

:::tip
Velger du et måleverktøy først, bruker TakeoffCraft siste post av riktig type, eller åpner skjemaet for {{ui:Ny post}} med den typen allerede valgt.
:::

## Velg posten du tegner med

Klikk på en post i listen. Den blir posten nye markeringer legges til i, og markeringene dens fremheves på alle ark mens de andre blekner. Hvis det åpne arket ikke har noen av markeringene, hopper TakeoffCraft til et ark som har. Klikk på posten igjen for å slutte å fremheve; den forblir posten du tegner med.

Klikker du på en markering med verktøyet {{ui:Velg}}, blir også dens post den gjeldende.

## Sett opp posten

Postredigeringen (**Post: (navn)**) har disse feltene. Hvert felt lagres når du forlater det eller trykker {{key:Enter}}, og hver endring kan angres.

| Felt | Hva det gjør |
|---|---|
| {{ui:Navn}} | Vises i listen, tabellene og eksportene. |
| {{ui:Skriv}} | Linjær, Areal eller Tell. Den er låst når posten har markeringer («En post med markeringer beholder sin type»). |
| {{ui:Farge}} | Fargen på markeringene på skjermen og i den merkede PDF-en. |
| {{ui:Enhet}} | Enheten mengden rapporteres i: LF eller m for linjær; SF, SY, SQ, ac, ha eller m² for areal; EA for tell. |
| {{ui:Mål også}} | De andre typene markeringer posten tar, hver med sin egen enhet. Se nedenfor. |
| {{ui:Høyde}} (linjær) | En veggshøyde. Posten rapporterer da også veggareal (lengde × høyde). Løp som kommer fra en BimCraft-modell har med seg dørene og vinduene sine: de trekkes fra én gang, og posten oppgir brutto areal, åpningene og netto. En mengde fra et BimCraft-prosjekt som valgte en målemetode, måles etter den metoden også her (merknaden nevner den, med kilden, og sier at den ikke er kontrollert av en mengdemåler); metoden kan ikke endres i TakeoffCraft. Murstein eller blokker og mørtel fra en veggtype kommer som to komponenter: enhetene å bestille og mørteltvolumet. |
| {{ui:Dybde}} (areal) | En dybde eller tykkelse, brukt i formlene for sammensatte poster (for eksempel betongvolum). |
| {{ui:Svinn %}} | Legges til mengden før prising: 10 betyr mengde × 1.10. |
| {{ui:Materiell $/LF}} | Materialkostnad per enhet. Etiketten følger enheten: $/SF, $/EA og så videre. |
| {{ui:Arbeid $/LF}} | Arbeidskostnad per enhet. |
| {{ui:CSI-nummer}} | CSI MasterFormat-nummeret, for eksempel `09 21 16` (eller bare divisjonen, `09`). Arket «Etter divisjon» i regnearket grupperer kostnadene etter det. Poster fra [fagpakker](topic:trade-packs) har et allerede. |

Høyde og dybde tar fot og tommer (`9'-0"`, `8' 6"`) eller desimalfot (`9`) for imperiske enheter, og meter (`2.7`, `2700 mm`) for metriske enheter. Satser tar beløp som `12.50` eller `$1,250`, med opptil fire desimaler. Se [Lengde-, sats- og prosentinntasting](topic:entry-formats).

Under feltene viser **Målt** summene formlene til posten kan bruke, med bokstavene sine: Lengde (L), Løp (N), Veggareal (A) for linjær; Areal (A), Omkrets (P), Områder (N) for areal; Tell (N) for tell.

## Én post, flere typer markeringer

Noe måles på mer enn én måte: et rom har et gulv (et areal), en fotlist langs veggene (en lengde) og dører (en tell). I stedet for tre poster, lag én:

1. Lag posten med hovedtypen, for eksempel en arealpost `Rom 101`.
2. Under {{ui:Mål også}} i redigeringen krysser du av for {{ui:Linjær}}, {{ui:Tell}} eller begge. Hver får en enhet ved siden av seg.
3. Tegn med ethvert verktøy hvis type posten tar: med `Rom 101` gjeldende tegner {{ui:Areal}} gulvet, {{ui:Linjær}} fotlisten og {{ui:Tell}} dørene. TakeoffCraft spør ikke etter en annen post.

Postlisten viser hver mengde (`50.00 SF + 2 EA`). I mengdetabellen har postens rad hovedmengden, og hver annen type får sin egen rad under, som **Rom 101 (tell)**, med egne satser for svinn, materiell og arbeid. Eksportene, tabellen per ark og forklaringen i den merkede PDF-en viser dem på samme måte.

Hovedtypens felt tilhører hovedtypen: høyde eller dybde, stigning, tilbakekutt og 3D-formen gjelder bare dens markeringer. En fotlistelinje tegnet for en arealpost måles rett langs planen og vises flatt i 3D. Formlene for sammensatte poster bruker hovedtypens summer.

En type kan bare fjernes så lenge posten ikke har markeringer av den; slett dem, eller flytt dem til en annen post under **Valgt markering**, først. Markeringer kan flyttes til hvilken som helst post som tar deres type.

Lenger ned er {{ui:Sammensatt post}}: komponenter som stendere eller plater, hver med sin egen formel og satser. Se [Sammensatte poster og formler](topic:assemblies).

Nederst: {{ui:Flytt opp}} og {{ui:Flytt ned}} endrer postens plass i listen og i eksportene, og {{ui:Slett post}} fjerner den med alle markeringene sine (etter å ha spurt; du kan angre).

Areal-poster har også **Stigning** (takplan målt på skrå: [Tak og skråninger](topic:roofs-and-slopes)) og **Tilbakekutt** (markeringene deres trekkes fra andre posters areal: [Mål areal](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Linjære poster har **Helning** (Flat, Gavl, Valm eller renne) og, for gavler og valmer, **Stigning**.

## Satser i tabellen

Du kan også skrive {{ui:Svinn %}}, materialsatser og arbeidssatser direkte inn i tabellen {{ui:Mengder}} nederst ({{ui:Etter post}}). Det er den samme innstillingen som i redigeringen.

## Slik prises det

For hver post og hver komponent i en sammensatt post:

1. **Med svinn** = mengde × (1 + svinn %).
2. **Materiell** = med svinn × materiell per enhet, avrundet til øre.
3. **Arbeid** = med svinn × arbeid per enhet, avrundet til øre.
4. **Sum** = materiell + arbeid.

{{ui:Jobbsum}} legger sammen hver post og hver komponent. En post kan ha sine egne satser og en sammensatt post samtidig; begge telles, så la postens satser stå på 0 når komponentene bærer kostnaden.

## Arbeid etter arbeidslag

I stedet for en arbeidssats per enhet kan postens arbeid komme fra et arbeidslag: hvor mye det produserer per time, hvor mange folk, og hva hver tjener. Under {{ui:Arbeid etter arbeidslag}} i postredigeringen krysser du av for {{ui:Pris arbeid ut fra et arbeidslag}} og fyller ut:

| Felt | Eksempel |
|---|---|
| {{ui:Produksjon}} | `20` LF per time (i postens enhet) for hele laget |
| {{ui:Lagstørrelse}} | `2` personer |
| {{ui:Lønn $/time hver}} | `45` |

TakeoffCraft regner ut, fra mengden med svinn:

- **lagtimer** = mengde ÷ produksjon (110 LF ÷ 20 = 5.5),
- **arbeidertimer** = lagtimer × lagstørrelse (11),
- **lagdager** = lagtimer ÷ 8 (0.69),
- **arbeid** = arbeidertimer × lønn ($495.00).

Redigeringen viser resultatet og satsen det blir ($4.50/LF). Postens egen arbeidssats er da skrivebeskyttet, i redigeringen og i tabellen. Overskriften i tabellen {{ui:Mengder}} legger til jobbens arbeidertimer og lagdager. Eksportene noterer hvert lags timer, og i regnearket er arbeidscellen en formel på laget (`ROUND(F2/20*2*45,2)`). Fjern haken for å gå tilbake til en sats per enhet.

## Metriske poster

Velg m (lineær) eller m² (areal) som enhet. Mengder, høyder og formelverdier er da i meter. Målestokken på arket kan være en hvilken som helst forhåndsinnstilling eller kalibrering; enheter og målestokker er uavhengige av hverandre.

## Neste

- [Mål lineære løp](topic:measure-linear)
- [Mål areal med utsparinger](topic:measure-areas)
- [Tell for hånd](topic:count-by-hand)
