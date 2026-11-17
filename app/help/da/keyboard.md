---
title: Tastatur og mus
summary: Alle taster, mus-, touchpad- og berøringshandlinger i TakeoffCraft, grupperet, med forskellene mellem platforme.
keywords: taster, genveje, hurtigtaster, tastatur, mus, touchpad, berøring, panorér, zoom, hjul, højreklik, dobbeltklik, space, shift, kopiér, sæt ind, klip, duplikér, vælg alle
from: 6f2c441d
---

Bogstavtaster virker, når markøren er hvor som helst på siden, og du ikke skriver i et felt. Mens en dialogboks er åben, gælder dens egne taster. Bogstaverne virker med eller uden {{key:Shift}}.

## Værktøjer

| Tast | Værktøj |
|---|---|
| {{key:V}} | {{ui:Vælg}} |
| {{key:L}} | {{ui:Lineær}} |
| {{key:A}} | {{ui:Areal}} |
| {{key:O}} | {{ui:Cirkel}} |
| {{key:B}} | {{ui:Rum}} (udfyld et rum med ét klik) |
| {{key:R}} | {{ui:Bue}} til eller fra (i Lineær, Areal og Udsparing) |
| {{key:E}} | {{ui:Fradrag}} til eller fra: de næste segmenter i et forløb tegnes, men tælles ikke |
| Et ciffer, `@` eller `#` under tegning | Åbn feltet {{ui:Skriv}}: skriv en længde eller koordinater, {{key:Enter}} placerer punktet ([Mål lineære forløb](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Udsparing}} (vælg først et område) |
| {{key:C}} | {{ui:Tæl}} |
| {{key:S}} | {{ui:Auto-tælling}} |
| {{key:K}} | {{ui:Kalibrér}} |
| {{key:D}} | {{ui:Kontrollér}} målestokken |

## Mens du tegner

| Tast eller handling | Hvad den gør |
|---|---|
| Klik | Placér et punkt (en prik, med Tæl). |
| {{key:P}} | Sti: vælg en PDF-linjes hele sammenhængende sti, eller konturen omkring et klik ([Vælg PDF'ens linjer](topic:pick-the-lines)). |
| {{key:F3}} | Fang til tegningens linjer til eller fra ([Fang til tegningens linjer](topic:snap-to-the-drawing)). |
| {{key:Shift}} holdt nede ved klik | Fang segmentet til 0°, 45°, 90° eller 135° fra det sidste punkt. Ikke for bue-punkter eller cirkler. |
| Dobbeltklik | Afslut et forløb, eller luk et areal eller en udsparing. |
| {{key:Enter}} | Afslut et forløb, eller luk et areal eller en udsparing. |
| Højreklik (uden at flytte) | Afslut et forløb, eller luk et areal eller en udsparing. |
| Klik på første punkt | Luk et areal eller en udsparing (fra tredje punkt). |
| {{key:Backspace}} eller {{key:Delete}} | Fjern det sidste punkt (først det afventende bue-punkt). |
| {{key:Esc}} | Kassér det afventende bue-punkt; annullér derefter den ufærdige markering; gå derefter tilbage til {{ui:Vælg}}. |

## Valg og redigering

| Tast eller handling | Hvad den gør |
|---|---|
| Klik på en markering (værktøjet Vælg) | Vælg den, og gør dens post aktuel. |
| {{key:Shift}} + klik på en markering | Tilføj den til valget, eller fjern den. |
| {{key:Mod+A}} | Vælg alle markeringer på det åbne ark. |
| Træk et hjørnegreb | Flyt det punkt ({{key:Shift}} fanger til 45°). Virker når én markering er valgt. |
| {{key:Delete}} eller {{key:Backspace}} | Slet de valgte markeringer (når du ikke tegner). |
| {{key:Esc}} | Fravælg alt: ryd valget og kontrollinjen. |
| {{key:Mod+Z}} | Fortryd. |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gentag. |

## Kopiér og sæt ind

| Tast | Hvad den gør |
|---|---|
| {{key:Mod+C}} | Kopiér de valgte markeringer, med deres poster. |
| {{key:Mod+X}} | Klip: kopiér de valgte markeringer, og slet dem derefter. |
| {{key:Mod+V}} | Sæt ind: kopien følger markøren; klik, hvor den skal hen. |
| {{key:Mod+Shift+V}} | Sæt ind på samme sted: det samme sted på det åbne ark. |
| {{key:Mod+D}} | Duplikér de valgte markeringer: kopien følger markøren; klik, hvor den skal hen. |
| {{key:Esc}} | Læg intet fra dig: annullér et indsæt eller en duplikering, der sidder på markøren. |

Bogstaverne alene vælger stadig værktøjer ({{key:C}} er {{ui:Tæl}}, {{key:D}} er {{ui:Kontrollér}}, {{key:X}} er {{ui:Udsparing}}, {{key:V}} er {{ui:Vælg}}, {{key:A}} er {{ui:Areal}}); kun {{key:Mod}} sammen med dem kopierer og sætter ind. I et tekstfelt kopierer og sætter disse taster tekst ind som sædvanligt. Se [Kopiér, sæt ind og duplikér markeringer](topic:copy-paste).

:::warning
{{key:Backspace}} sletter den valgte markering, når du ikke tegner. Sker det ved en fejl, henter {{key:Mod+Z}} den tilbage.
:::

## Filer

| Tast | Hvad den gør |
|---|---|
| {{key:Mod+O}} | {{ui:Åbn tegninger}} |
| {{key:Mod+S}} | {{ui:Gem mængdeudtræk}} |

Disse to virker, selv mens du skriver i et felt.

## Visning og ark

| Tast eller handling | Hvad den gør |
|---|---|
| Musehjul | Zoom ind og ud ved markøren. |
| Træk (venstre, midterste eller højre knap) | Panorér. I {{ui:Auto-tælling}} tegner et venstretræk søgefeltet i stedet. |
| {{key:Space}} holdt nede + træk | Panorér, i ethvert værktøj. |
| {{key:F}} | {{ui:Tilpas side}} |
| {{key:W}} | {{ui:Tilpas bredde}} |
| {{key:Plus}} eller {{key:=}} | Zoom ind midt i visningen. |
| {{key:Minus}} | Zoom ud midt i visningen. |
| {{key:PageDown}} / {{key:PageUp}} | Næste eller forrige ark i arkelisten. |
| {{key:Ctrl+Shift+F}} | Skift mellem fuld skærm-tilstande (Control på alle platforme, også på en Mac). |
| {{key:F1}} | Åbn eller luk denne hjælp, et panel i siden. |
| {{key:3}} | 3D-kontrolvisningen af arket, til eller fra. |

## 3D-visning

| Tast eller handling | Hvad den gør |
|---|---|
| Træk, eller træk med midterknappen | Kredse rundt. |
| {{key:Shift}} + træk, eller træk med højre knap | Panorér. |
| Musehjul | Zoom ved markøren. På et touchpad kredser et tofingersvip, og et knib zoomer. |
| Klik | Vælg markeringen under markøren ({{key:Shift}} + klik tilføjer eller fjerner). |
| {{key:F}} eller {{key:W}} | Zoom til alt. |
| {{key:3}} | Tilbage til det flade ark. |

Se [Kontrollér mængdeudtrækket i 3D](topic:check-in-3d).

## Auto-tælling

| Tast eller handling | Hvad den gør |
|---|---|
| Træk en boks | Omkrds det symbol, der skal søges efter (starter søgningen). |
| Klik på en matchboks | Afvis den, eller gendan den. |
| {{key:Esc}} | Annullér en kørende søgning, eller kassér gennemgangen. |

## Hjælp

| Tast | Hvad den gør |
|---|---|
| {{key:F1}} | Åbn eller luk hjælpepanelet (også knappen {{ui:Hjælp}} i appbjælken). Den virker i alle værktøjer, også mens du skriver i et felt. |
| {{key:Esc}} | Luk hjælpepanelet. I dets søgefelt rydder det første Esc søgningen. Mens panelet er åbent, lukker et Esc efter klik på arket først panelet; tryk igen for at annullere i TakeoffCraft. |

:::mac
På mange Mac-tastaturer styrer den øverste række lysstyrke og lyd. Tryk fn sammen med F1, eller slå "Brug F1, F2 osv. som standard funktionstaster" til i Systemindstillinger, under Tastatur.
:::

## Dialogbokse og felter

| Tast | Hvad den gør |
|---|---|
| {{key:Enter}} | I et felt: anvend værdien. I kalibreringsdialogen: {{ui:Angiv målestokken}}. |
| {{key:Esc}} | Luk en dialogboks (som {{ui:Annuller}}); luk formularen {{ui:Ny post}}. |
| {{key:Tab}} | Flyt til næste felt. |

## Platformsnoter

:::mac
- {{key:Mod}} er Command-tasten: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Fuld skærm er undtagelsen: Control+Shift+F.
- Højreklik er et tofingerklik på et touchpad, når sekundærklik er slået til under Systemindstillinger, Touchpad. TakeoffCraft læser kun sekundærknappen; et Control-klik kan tælle som et almindeligt klik og tilføje et punkt.
- Rulning med to fingre på et touchpad zoomer arket i stedet for at rulle det. Panorér ved at trykke og trække, eller hold {{key:Space}} nede og træk.
- Page Up og Page Down er fn sammen med piletasterne op og ned på tastaturer uden dem.
- Backspace er tasten, der er mærket delete.
:::

:::windows
- {{key:Mod}} er Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- På et bærbart touchpad zoomer rulning med to fingre arket. Panorér ved at trykke og trække.
:::

:::linux
- {{key:Mod}} er Ctrl. Nogle skrivebordsmiljøer har egne genveje med Ctrl+Alt eller Super; TakeoffCraft bruger ingen af dem.
- På et touchpad zoomer rulning med to fingre arket. Panorér ved at trykke og trække.
:::

:::touch
TakeoffCraft læser berøring som én markør:

- Et tryk placerer et punkt, vælger en markering eller tilføjer en tællingsprik.
- Træk med én finger panorerer arket (i {{ui:Auto-tælling}} tegner det søgefeltet).
- Knib for at zoome understøttes endnu ikke. Brug {{ui:Tilpas side}} og {{ui:Tilpas bredde}}, eller {{key:Plus}} og {{key:Minus}} på et tastatur.
- For at lukke et areal trykker du på dets første punkt. For at afslutte et forløb dobbelttrykker du, hvor din browser gør et dobbelttryk til et dobbeltklik, eller trykker {{key:Enter}} på et tastatur.
- Der er ingen løbende længdeangivelse, før du trykker, for der findes ingen svæveposition.

Et tastatur og en mus eller et touchpad er i dag den bedste måde at lave mængdeudtræk på.
:::

## Taster browseren beholder

Browsere beholder nogle genveje for sig selv, og en side kan ikke bruge dem: lukning af fanen ({{key:Mod+W}}), ny fane eller nyt vindue ({{key:Mod+T}}, {{key:Mod+N}}) og browserzoom ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Derfor zoomer TakeoffCraft arket med hjulet og de bare taster {{key:Plus}} og {{key:Minus}}. Trykker du {{key:Mod+Plus}} ved en fejl, vokser hele siden; {{key:Mod+0}} gendanner den. Se [Taster, mus og touchpads](common:keys).

## Hvor Flyt findes

Der er ingen kommando Flyt: vælg en tællingsprik og træk den, eller vælg et areal eller en linje og træk dens hjørnegreb.
