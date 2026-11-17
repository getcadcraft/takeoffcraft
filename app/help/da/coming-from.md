---
title: Fra anden mængdeudtrækssoftware
summary: Hvordan vanerne fra dedikeret mængdeudtrækssoftware og PDF-markeringsværktøjer svarer til TakeoffCraft, og de forskelle der driller folk.
keywords: skift, migrér, betingelser, dele, måleværktøjer, markeringsliste, mængdelink, udtrækvaner, forskelle, sammenlign
from: 12004ce5
---

Hvis du har lavet mængdeudtræk i PlanSwift eller med måleværktøjerne i Bluebeam Revu, vil det meste af TakeoffCraft virke bekendt: et tegningssæt, en målestok pr. ark, ting du måler og en prissat total. Måden delene hænger sammen på er forskellig de steder, og de steder står nedenfor.

Hvis du kender PlanSwift eller On-Screen Takeoff, vælg menustilen {{ui:Udtrækspult}} under {{ui:Indstillinger}} › {{ui:TakeoffCraft}} › {{ui:Menuer, taster og mus}}: en menulinje med Fil, {{ui:Rediger}}, Vis, {{ui:Målestok}}, Mængdeudtræk, {{ui:Poster}}, {{ui:Markering}} og {{ui:Eksportér}} over en række mængdeudtrækværktøjer, med målestokforvalgene på arkbjælken. Se [Menuer, taster og mus](topic:menus-keys-and-mouse).

## Vaner oversat

| Du er vant til | I TakeoffCraft |
|---|---|
| At åbne et job eller projekt der gemmer tegningerne (PlanSwift) | Åbn PDF-filerne og `.takeoff.json`-projektet side om side. Projektet gemmer kun mængdeudtrækket; PDF-filerne forbliver dine egne filer. |
| En markeringsliste med noter, skyer og fremhævninger (Bluebeam) | {{ui:Markering}} på arkbjælken: noter, skyer og fremhævninger med en status (Åben, Besvaret, Lukket), vist under **Markeringer** og tegnet i den markerede PDF. Se [Noter, skyer og fremhævninger](topic:markups). |
| Målinger gemt som markeringer inde i PDF'en (Bluebeam) | Mængdeudtrækket ligger i `.takeoff.json`-filen. {{ui:Markeret PDF}} skriver en kopi med mængdeudtrækket tegnet ind, til deling; {{ui:PDF med mængdeudtrækket indeni}} skriver en kopi der bærer mængdeudtrækket, så den kan åbnes igen i TakeoffCraft. |
| Mængdeudtrækspostere (PlanSwift), egne måleværktøjer gemt i værktøjskassen (Bluebeam) | **Poster** under {{ui:Poster}}: navn, type, farve, enhed, højde eller dybde, spild, satser. |
| Dele og samlinger med formler (PlanSwift) | Postens {{ui:Kalkulationsenhed}}: komponenter med en formel der bruger `L H A N P`. |
| At sætte sidens målestok, eller kalibrere (begge) | {{ui:Forudindstilling}}-listen eller {{ui:Kalibrér}} i gruppen {{ui:Målestok}}, pr. ark. {{ui:Kontrollér}} måler en kendt længde. |
| At anvende én målestok på et sideinterval | Ikke endnu: sæt hvert ark. |
| Viewports med forskellige målestokke på ét ark (Bluebeam) | Ikke endnu: én målestok pr. ark. |
| Polylængde- og arealværktøjer (Bluebeam), lineært og areal-mængdeudtræk (PlanSwift) | {{ui:Lineær}} ({{key:L}}) og {{ui:Areal}} ({{key:A}}). |
| At holde Shift nede for rette linjer | {{key:Shift}} fanger i 45°-trin, samme idé. |
| Fangst til tegningens linjer | Til som standard: endepunkter, midtpunkter, skæringspunkter og nærmeste punkt på en linje, med {{key:F3}} for at slå det fra, som i CAD-programmer. |
| Tælleværktøjet (begge) | {{ui:Tæl}} ({{key:C}}). |
| Visuel søgning efter symboler (Bluebeam) | {{ui:Auto-tælling}} ({{key:S}}): tegn en boks om ét symbol, gennemgå, tilføj. |
| Udsparinger eller fradrag i arealer | {{ui:Udsparing}} ({{key:X}}) på et valgt areal, og runde udsparinger. |
| Fradrag på lineære forløb | Træk forløbet lige igennem og tryk {{key:E}} ({{ui:Fradrag}}) for åbningen. Se [Mål lineære forløb](topic:measure-linear). |
| Buesegmenter i en polylinje | {{ui:Bue}} ({{key:R}}): klik et punkt på kurven og derefter dens slutpunkt. |
| Markeringslisten med mængdekolonner (Bluebeam) | Tabellen {{ui:Mængder}}, {{ui:Pr. post}} eller {{ui:Pr. ark}}. |
| Prisberegningsgitter (PlanSwift) | Samme tabel: spild, materiale og løn pr. enhed, udregnede totaler, {{ui:Jobtotal}}. |
| Eksport til Excel | {{ui:XLSX}} med levende formler, eller {{ui:CSV}}. |
| Escape for at stoppe et værktøj | {{key:Esc}} annullerer og vender tilbage til {{ui:Vælg}}. |
| Højreklik for at afslutte | Højreklik afslutter også et forløb eller lukker et areal her. Der findes ingen højreklikmenu. |

## Forskelle der giver problemer

**Mængdeudtrækket er ikke inde i din PDF.** Intet du gør ændrer dine PDF-filer. Gem `.takeoff.json`-filen og behold den sammen med tegningerne. At sende nogen den markerede PDF sender dem ikke et redigerbart mængdeudtræk: send projektfilen og de originale PDF-filer, eller en [PDF med mængdeudtrækket indeni](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-filer matches efter indhold, ikke efter navn.** Et revideret ark gemt over det gamle filnavn er en ny fil for TakeoffCraft, uden målestok og uden markeringer. Dine gamle markeringer bliver på den gamle version og tæller stadig. Se [Gem og genåbn et mængdeudtræk](topic:save-and-reopen#when-a-pdf-has-changed).

**Umålsatte markeringer udelades, de tælles ikke som nul.** Hvis et ark ikke har en målestok, tæller dets forløb og arealer ikke, og tabellen siger "Ufuldstændig". I mange programmer ville du bare se 0. Se [Angiv målestokken](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Der gættes ikke på sidestørrelse.** Forudindstillinger antager at PDF'en er udskrevet i fuld størrelse. En PDF i halv størrelse eller "tilpas til side" kræver {{ui:Kalibrér}}. Brug altid {{ui:Kontrollér}}.

**Én post, én hovedtype, flere hvis du vil.** En post er lineær, areal eller antal, og dens type låses når den har markeringer. En betingelse der giver både et areal og dets omkreds er en arealpost: dens omkreds er variablen `P`. En væg med både længde og areal er en lineær post med en højde. For en flerbetingelsespost, som et rum med gulv, sokkel og døre, sæt flueben ved de andre slags under **Mål også**: hver prissættes på sin egen række. Se [Én post, flere slags markeringer](topic:create-items#one-item-several-kinds-of-marks).

**Formler kører på totaler.** Kalkulationsformler bruger postens totaler på tværs af alle ark, ikke hvert forløb for sig. `N` (antallet af forløb eller arealer) er der til ekstra pr. forløb, som én ekstra stolpe pr. væg.

**Omkreds inkluderer udsparinger.** Et areals `P` lægger kanterne af dets huller til. Se [Mål arealer med udsparinger](topic:measure-areas#read-the-area).

**Træk for at panorere.** Et træk med venstre museknap på arket panorerer, i alle værktøjer undtagen {{ui:Auto-tælling}}. Du behøver aldrig skifte til et panoreringsværktøj. Hjulet zoomer; det scroller ikke.

**En gendannelseskopi, ikke en sky.** TakeoffCraft gemmer en kopi af dit arbejde i denne browser og tilbyder den tilbage efter et nedbrud ([Hvis fanen eller browseren stopper](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), men mængdeudtrækket er din at gemme: {{key:Mod+S}}. Gemning i skyen er ikke tilgængelig endnu.

**Alt er i browseren.** Der er intet at installere, og planerne uploades aldrig. Til en desktop-app kommer TakeoffCraft i CadCraft Studio, sammen med de andre syv apps.

## Ikke her endnu

Målestokområder pr. ark er ikke lavet endnu. Se [Hvad er ikke lavet endnu](topic:not-built-yet) for hele listen og hvad du gør i stedet.
