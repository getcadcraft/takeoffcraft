---
title: Tastatur og mus
summary: Alle taster, mus-, styreflate- og berøringshandlinger i TakeoffCraft, gruppert, med forskjellene mellom plattformene.
keywords: taster, snarveier, hurtigtaster, tastatur, mus, styreflate, berøring, panorer, zoom, hjul, høyreklikk, dobbeltklikk, mellomrom, shift, kopier, lim inn, klipp ut, dupliser, velg alle
from: 6f2c441d
---

Bokstavtastene virker når pekeren er hvor som helst på siden, og du ikke skriver i et felt. Mens en dialogboks er åpen, gjelder dens egne taster. Bokstavene virker med eller uten {{key:Shift}}.

## Verktøy

| Tast | Verktøy |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Circle}} |
| {{key:B}} | {{ui:Room}} (fyll et rom med ett klikk) |
| {{key:R}} | {{ui:Arc}} på eller av (i Linjær, Areal og Utsparing) |
| {{key:E}} | {{ui:Deduct}} på eller av: de neste segmentene i en strekning tegnes, men telles ikke |
| Et siffer, `@` eller `#` mens du tegner | Åpner boksen {{ui:Type}}: skriv en lengde eller koordinater, {{key:Enter}} plasserer punktet ([Mål lineære strekninger](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Cut-out}} (velg et område først) |
| {{key:C}} | {{ui:Count}} |
| {{key:S}} | {{ui:Auto count}} |
| {{key:K}} | {{ui:Calibrate}} |
| {{key:D}} | {{ui:Check}} målestokken |

## Mens du tegner

| Tast eller handling | Hva den gjør |
|---|---|
| Klikk | Plasserer et punkt (en prikk, med Tell). |
| {{key:P}} | Sti: velg hele den sammenhengende stien til en PDF-linje, eller omrisset rundt et klikk ([Velg PDF-ens linjer](topic:pick-the-lines)). |
| {{key:F3}} | Fest til tegningens linjer på eller av ([Fest til tegningens linjer](topic:snap-to-the-drawing)). |
| {{key:Shift}} holdt mens du klikker | Fester segmentet til 0°, 45°, 90° eller 135° fra forrige punkt. Gjelder ikke buepunkter eller sirkler. |
| Dobbeltklikk | Avslutter en strekning, eller lukker et areal eller en utsparing. |
| {{key:Enter}} | Avslutter en strekning, eller lukker et areal eller en utsparing. |
| Høyreklikk (uten å flytte) | Avslutter en strekning, eller lukker et areal eller en utsparing. |
| Klikk det første punktet | Lukker et areal eller en utsparing (fra det tredje punktet). |
| {{key:Backspace}} eller {{key:Delete}} | Fjerner siste punkt (først det ventende buepunktet). |
| {{key:Esc}} | Forkaster det ventende buepunktet; deretter avbryter den ufullstendige markeringen; deretter tilbake til {{ui:Select}}. |

## Velge og redigere

| Tast eller handling | Hva den gjør |
|---|---|
| Klikk på et merke (Velg-verktøyet) | Velger det og gjør postet til den aktive posten. |
| {{key:Shift}} + klikk på et merke | Legger det til utvalget, eller tar det ut. |
| {{key:Mod+A}} | Velger alle merker på det åpne arket. |
| Dra et hjørnehåndtak | Flytter punktet ({{key:Shift}} fester til 45°). Virker når ett merke er valgt. |
| {{key:Delete}} eller {{key:Backspace}} | Sletter de valgte merkene (når du ikke tegner). |
| {{key:Esc}} | Velg ingenting: fjerner utvalget og kontrolllinjen. |
| {{key:Mod+Z}} | Angre. |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gjør om. |

## Kopier og lim inn

| Tast | Hva den gjør |
|---|---|
| {{key:Mod+C}} | Kopierer de valgte merkene, med postene deres. |
| {{key:Mod+X}} | Klipp ut: kopierer de valgte merkene, og sletter dem deretter. |
| {{key:Mod+V}} | Lim inn: kopien følger pekeren; klikk der den skal. |
| {{key:Mod+Shift+V}} | Lim inn på samme sted: samme sted på det åpne arket. |
| {{key:Mod+D}} | Dupliser de valgte merkene: kopien følger pekeren; klikk der den skal. |
| {{key:Esc}} | Legg ned ingenting: avbryter en innliming eller duplisering som ligger på pekeren. |

Bokstavene alene velger fortsatt verktøy ({{key:C}} er {{ui:Count}}, {{key:D}} er {{ui:Check}}, {{key:X}} er {{ui:Cut-out}}, {{key:V}} er {{ui:Select}}, {{key:A}} er {{ui:Area}}); bare {{key:Mod}} sammen med dem kopierer og limer inn. I et tekstfelt kopierer og limer disse tastene inn tekst som vanlig. Se [Kopier, lim inn og dupliser merker](topic:copy-paste).

:::warning
{{key:Backspace}} sletter det valgte merket når du ikke tegner. Hvis det skjer ved et uhell, henter {{key:Mod+Z}} det tilbake.
:::

## Filer

| Tast | Hva den gjør |
|---|---|
| {{key:Mod+O}} | {{ui:Open plans}} |
| {{key:Mod+S}} | {{ui:Save takeoff}} |

Disse to virker selv når du skriver i et felt.

## Visning og ark

| Tast eller handling | Hva den gjør |
|---|---|
| Mushjul | Zoomer inn og ut ved pekeren. |
| Dra (venstre, midterste eller høyre knapp) | Panorerer. I {{ui:Auto count}} tegner et venstre drag søkeboksen i stedet. |
| {{key:Space}} holdt + dra | Panorerer, i alle verktøy. |
| {{key:F}} | {{ui:Fit page}} |
| {{key:W}} | {{ui:Fit width}} |
| {{key:Plus}} eller {{key:=}} | Zoomer inn midt i visningen. |
| {{key:Minus}} | Zoomer ut midt i visningen. |
| {{key:PageDown}} / {{key:PageUp}} | Neste eller forrige ark i arklisten. |
| {{key:Ctrl+Shift+F}} | Bytter mellom fullskjermmodi (Control på alle plattformer, også på en Mac). |
| {{key:F1}} | Åpner eller lukker denne hjelpen, et panel på siden. |
| {{key:3}} | 3D-kontrollvisningen av arket, på eller av. |

## 3D-visning

| Tast eller handling | Hva den gjør |
|---|---|
| Dra, eller dra med midterste knapp | Kretser rundt. |
| {{key:Shift}} + dra, eller dra med høyre knapp | Panorerer. |
| Mushjul | Zoomer ved pekeren. På en styreflate kretser et tofingersveip, og et klyp zoomer. |
| Klikk | Velger merket under pekeren ({{key:Shift}} + klikk legger til eller tar ut). |
| {{key:F}} eller {{key:W}} | Zoom utstrekning. |
| {{key:3}} | Tilbake til det flate arket. |

Se [Kontroller mengdeuttaket i 3D](topic:check-in-3d).

## Auto count

| Tast eller handling | Hva den gjør |
|---|---|
| Dra en boks | Omslutt symbolet du søker etter (starter søket). |
| Klikk på en treffboks | Avviser den, eller gjenoppretter den. |
| {{key:Esc}} | Avbryt et pågående søk, eller forkast gjennomgangen. |

## Hjelp

| Tast | Hva den gjør |
|---|---|
| {{key:F1}} | Åpner eller lukker hjelpepanelet (også knappen {{ui:Help}} i programlinjen). Virker i alle verktøy, selv mens du skriver i et felt. |
| {{key:Esc}} | Lukker hjelpepanelet. I søkeboksen tømmer den første Esc søket. Mens panelet er åpent, lukker en Esc trykket etter å ha klikket på arket panelet først; trykk én gang til for å avbryte i TakeoffCraft. |

:::mac
På mange Mac-tastaturer styrer den øverste raden lysstyrke og lyd. Trykk fn med F1, eller slå på «Bruk F1, F2 osv. som standard funksjonstaster» i Systeminnstillinger, under Tastatur.
:::

## Dialoger og felt

| Tast | Hva den gjør |
|---|---|
| {{key:Enter}} | I et felt: bruker verdien. I kalibreringsdialogen: {{ui:Set the scale}}. |
| {{key:Esc}} | Lukker en dialog (som {{ui:Cancel}}); lukker skjemaet {{ui:New item}}. |
| {{key:Tab}} | Flytter til neste felt. |

## Plattformmerknader

:::mac
- {{key:Mod}} er Command-tasten: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Fullskjerm er unntaket: Control+Shift+F.
- Høyreklikk er et tofingerklikk på styreflaten, når sekundærklikk er på i Systeminnstillinger, under Styreflate. TakeoffCraft leser bare sekundærknappen; et Control-klikk kan telle som et vanlig klikk og legge til et punkt.
- Tofingersrulling på styreflaten zoomer arket (den ruller det ikke). For å panorere trykker og drar du, eller holder inne Space og drar.
- Page Up og Page Down er fn med piltastene opp og ned på tastaturer uten dem.
- Backspace er tasten som er merket delete.
:::

:::windows
- {{key:Mod}} er Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- På en styreflate på en bærbar PC zoomer tofingerrulling arket. For å panorere trykker og drar du.
:::

:::linux
- {{key:Mod}} er Ctrl. Noen skrivebord har egne snarveier med Ctrl+Alt eller Super; TakeoffCraft bruker ingen av dem.
- På en styreflate zoomer tofingerrulling arket. For å panorere trykker og drar du.
:::

:::touch
TakeoffCraft leser berøring som én peker:

- Trykk plasserer et punkt, velger et merke eller legger til en tellingsprikk.
- Dra med ett finger panorerer arket (i {{ui:Auto count}} tegner det søkeboksen).
- Klyp for å zoome støttes ikke ennå. Bruk {{ui:Fit page}} og {{ui:Fit width}}, eller {{key:Plus}} og {{key:Minus}} på et tastatur.
- For å lukke et areal trykker du på det første punktet. For å avslutte en strekning dobbelttrykker du der nettleseren gjør et dobbelttrykk om til et dobbeltklikk, eller trykker {{key:Enter}} på et tastatur.
- Det finnes ingen levende lengdeavlesning før du trykker, fordi det ikke finnes sveving.

Et tastatur og en mus eller styreflate er i dag den bedre måten å gjøre mengdeuttak på.
:::

## Taster nettleseren beholder

Nettlesere beholder noen snarveier for seg selv, og en side kan ikke bruke dem: å lukke fanen ({{key:Mod+W}}), ny fane eller nytt vindu ({{key:Mod+T}}, {{key:Mod+N}}) og nettleserzoom ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Derfor zoomer TakeoffCraft arket med hjulet og de rene tastene {{key:Plus}} og {{key:Minus}}. Hvis du trykker {{key:Mod+Plus}} ved et uhell, vokser hele siden; {{key:Mod+0}} setter den tilbake. Se [Taster, mus og styreflater](common:keys).

## Hvor Flytt er

Det finnes ingen kommando for Flytt: velg en tellingsprikk og dra den, eller velg et areal eller en linje og dra hjørnehåndtakene.
