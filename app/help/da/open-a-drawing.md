---
title: Åbn en DWG- eller DXF-tegning
summary: Åbn en tegningsfil som ark (modelrum og alle layouts), start med den målestok tegningen angiver, vis eller skjul dens lag, og tilføj eksterne referencer (Xref).
keywords: dwg, dxf, cad, tegning, åbn en tegning, layouts, modelrum, papirrum, ark, enheder, insunits, målestok for viewport, xref, ekstern tegning, lag, frosne, ingen pdf, plot, uden plotning
from: d8c3f504
---

TakeoffCraft åbner en DWG- eller DXF-tegning, ligesom den åbner en PDF: du behøver ikke at plotte den til PDF først. Tælling direkte fra tegningen er nøjagtig, fordi tegningen ved, hvad hvert objekt er. Se [Tæl fra en tegning](topic:count-from-a-drawing).

## Åbn tegningen

1. Vælg {{ui:Åbn tegninger}} i gruppen {{ui:Fil}}, eller tryk på {{key:Mod+O}}.
2. Vælg DWG- eller DXF-filen. Du kan vælge flere, og PDF'er sammen med dem.
3. Vælg Åbn.

Du kan også slippe tegningsfiler på TakeoffCraft, ligesom PDF'er. Der uploades intet: browseren læser filen på din computer.

TakeoffCraft læser DWG fra AutoCAD 2000 til 2018 og ASCII-DXF fra R12 til 2018. Den afviser en binær DXF (gem den som ASCII eller som DWG) og en fil, der er ingen af delene, og siger hvorfor. En beskadiget fil åbnes med det, der kunne læses, og en meddelelse siger det; dens tællinger kan være ufuldstændige.

## Ark

- **Model** er tegningens modelrum.
- **Hvert layout** (fanen papirrum) er et ark, navngivet efter sin fane, i fanernes rækkefølge. Et layout viser modellen gennem sine viewporte, som den plottes.

Zoom, panorering, fangning til tegningens egne linjer, markeringer, noter, {{ui:Kalibrér}} og resten virker som på en PDF. Tegningens ark gemmes i mængdeudtrækket efter filens navn og et fingeraftryk af dets indhold, ligesom en PDF: åbn den samme fil igen, og markeringerne er på dets ark.

## Målestoken

Et ark starter med den målestok, tegningen angiver:

- **Et layout** tager målestoken for sin største viewport. En målestok som 1/2" = 1'-0" navngives som den forudindstilling, den er; enhver anden vises som »Fra tegningens viewport: 1" = 2.5'«. Hvis et layout har viewporte i andre målestoke, bestemmer den største arkets målestok: kontrollér de andre med {{ui:Kontrollér}}.
- **Model** tager tegningens enheder (tommer, millimeter, fod …) som målestok, »Tegningsenheder (tommer)«.
- **En tegning uden enheder** (tegningen har aldrig angivet, om en enhed er en tomme eller en millimeter) har ingen målestok: arket siger »Ingen målestok«, og måling på det afvises, som på en PDF uden målestok. Tælling kræver ingen målestok. Giv den en med {{ui:Kalibrér}}.

{{ui:Kalibrér}}, {{ui:Kontrollér}} og listen {{ui:Forudindstilling}} ændrer en målestok når som helst og vinder over tegningens. Forudindstillingslisten er slået fra på Model, som ikke har et papirformat.

## Lag

{{ui:Lag}} på arkbjælken lister tegningens lag med, hvor mange objekter hvert har på dette ark. Lag, som filen slukkede eller frøs, starter skjult. Fjern krydset ved et lag for at skjule det, eller sæt krydset ved et skjult lag for at vise det: arket tegnes igen, og det, der er skjult, udelades af tællinger og af objekterne, der tilbydes til {{ui:Mål tegning}}, medmindre du beder om at tælle skjulte lag også. {{ui:Vis alle}} viser hvert lag; {{ui:Tilbage til filens lag}} fortryder dine ændringer. Lagvalg hører til denne session, ikke til mængdeudtrækfilen.

## Eksterne tegninger (Xref)

En tegning, der linker andre tegninger, viser dem, hvor de er indsat. TakeoffCraft finder en ekstern tegning blandt de **åbne filer** ud fra filnavnet: åbn værtstegningen og dens eksterne tegning sammen (eller den ene efter den anden). Indtil da siger statuslinjen, hvor mange eksterne tegninger der ikke blev fundet, og at det, de tegner, mangler, og tællinger siger det.

## Begrænsninger

- Objekter, TakeoffCraft ikke kan læse eller placere (proxy-objekter, ukendte klasser), listes i tællevinduet efter type; de udelades aldrig uden besked.
- Meget store tegninger tegnes delvist, og tællinger stopper ved en grænse og siger det. Åbn i stedet en PDF-plot af en sådan tegning.
- En tegning tegnes i sort og i sine egne farver, mørkere for hvidt papir. Plottestiltabeller og pennetildelinger anvendes ikke.
