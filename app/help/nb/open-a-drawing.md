---
title: Åpne en DWG- eller DXF-tegning
summary: Åpne en tegningsfil som ark (modellrom og alle layouter), start med målestokken tegningen angir, vis eller skjul layerne, og hent inn eksterne tegninger.
keywords: dwg, dxf, cad, tegning, åpne en tegning, layouter, modellrom, papirrom, ark, enheter, insunits, målestokk for visningsområde, xref, ekstern tegning, layer, frosset, ingen pdf, plott, uten plotting
from: d8c3f504
---

TakeoffCraft åpner en DWG- eller DXF-tegning på samme måte som en PDF: du må ikke plotte den til PDF først. Telling fra selve tegningen er nøyaktig, fordi tegningen vet hva hvert objekt er. Se [Tell fra en tegning](topic:count-from-a-drawing).

## Åpne tegningen

1. Velg {{ui:Åpne tegninger}} i gruppen {{ui:Fil}}, eller trykk {{key:Mod+O}}.
2. Velg DWG- eller DXF-filen. Du kan velge flere, og PDF-er sammen med dem.
3. Velg Åpne.

Du kan også slippe tegningsfiler på TakeoffCraft, slik som PDF-er. Ingenting lastes opp: nettleseren leser filen på datamaskinen din.

TakeoffCraft leser DWG fra AutoCAD 2000 til 2018 og ASCII-DXF fra R12 til 2018. Den avviser en binær DXF (lagre den som ASCII, eller som DWG) og en fil som ikke er noen av delene, og sier hvorfor. En skadet fil åpnes med det som kunne leses, og en melding sier fra om det; tellingene kan være ufullstendige.

## Ark

- **Modell** er tegningens modellrom.
- **Hver layout** (fanen i papirrom) er et ark, navngitt etter fanen, i fanerekkefølge. En layout viser modellen gjennom sine visningsområder, slik den plottes.

Zoom, panorering, feste til tegningens egne linjer, merker, notater, {{ui:Kalibrer}} og resten fungerer som på en PDF. Tegningens ark lagres i mengdeuttaket etter filnavnet og et fingeravtrykk av innholdet, som for en PDF: åpner du den samme filen igjen, ligger merkene på arkene sine.

## Målestokken

Et ark starter med målestokken tegningen angir:

- **En layout** tar målestokken til sitt største visningsområde. En målestokk som 1/2" = 1'-0" får navnet på forvalget den tilsvarer; enhver annen vises som «Fra tegningens visningsområde: 1" = 2.5'». Har en layout visningsområder i andre målestokker, bestemmer den største målestokken arket: kontroller de andre med {{ui:Kontroller}}.
- **Modell** tar tegningens enheter (tommer, millimeter, fot …) som målestokk: «Tegningsenheter (tommer)».
- **En tegning uten enheter** (tegningen har aldri sagt om en enhet er en tomme eller en millimeter) har ingen målestokk: arket sier «Ingen målestokk», og måling på det avvises, slik som på en PDF uten målestokk. Telling trenger ingen målestokk. Gi den en med {{ui:Kalibrer}}.

{{ui:Kalibrer}}, {{ui:Kontroller}} og listen {{ui:Forvalg}} endrer målestokken når som helst, og går foran tegningens. Forvalgslisten er av for Modell, som ikke har papirformat.

## Layers

{{ui:Layers}} på arkfeltet lister tegningens layere med hvor mange objekter hver har på dette arket. Layere som filen har slått av eller frosset starter skjult. Fjern haken for å skjule et layer, eller sett haken på et skjult for å vise det: arket tegnes på nytt, og det som er skjult, utelates fra tellinger og fra objektene som tilbys til {{ui:Mål tegning}}, med mindre du ber om å telle skjulte layere også. {{ui:Vis alle}} viser alle layerne; {{ui:Tilbake til filens layer}} angrer endringene dine. Layervalg hører til denne økten, ikke til mengdeuttaksfilen.

## Eksterne tegninger (xrefs)

En tegning som lenker til andre tegninger, viser dem der de er satt inn. TakeoffCraft finner en ekstern tegning blant de **åpne filene**, etter filnavnet: åpne vertstegningen og den eksterne tegningen sammen (eller den ene etter den andre). Inntil da sier statuslinjen hvor mange eksterne tegninger som ikke ble funnet, og hva de tegner som mangler; tellingene sier fra om det.

## Begrensninger

- Objekter TakeoffCraft ikke kan lese eller plassere (proxy-objekter, ukjente klasser) listes i telle-vinduet etter type; de fjernes aldri uten et ord.
- Svært store tegninger tegnes delvis, og tellinger stopper ved en grense, med beskjed om det. Åpne i stedet en PDF-plott av en slik tegning.
- En tegning tegnes i svart og i sine egne farger, mørkere for hvitt papir. Plottstiltabeller og pennetilordninger brukes ikke.
