---
title: Mät från en ritning
summary: Ta längder och areor från ritningens egna linjer, bågar, polylinjer och skraffering genom att välja dem, med exakta bågar och hål, i stället för att spåra med klick.
keywords: mät ritning, geometri, polylinje, båge, cirkel, skraffering, bulge, exakt längd, exakt area, välj, fönster, spåra, från cad, linjär, area
from: fd734246
---

{{ui:Mät ritning}} på bladfältet för ett DWG- eller DXF-blad tar ritningens egna objekt som markeringar, så du behöver inte spåra dem med klick. En polylinjes längd, en bågs längd, en cirkels area och en skrafferings area med dess hål blir exakta, enligt den aritmetik som avtagningen använder för varje markering.

## Ta objekt som en linjär eller area-post

1. Skapa eller klicka på en **linjär** eller en **area**-post under {{ui:Poster}}. Bladet behöver en skala.
2. Välj {{ui:Mät ritning}}.
3. Klicka på objekten på bladet för att välja dem, eller dra ett fönster runt dem: allt helt inom det väljs. {{key:Shift}} lägger till ett fönster till det valda; klicka på ett valt objekt igen för att släppa det. Fältet visar summan: ”6 sträckor: 108'-9 1/8" totalt.”
4. Välj lägg-till-knappen, som anger antalet och posten, till exempel {{ui:Lägg till 6 i Edge}} (eller tryck {{key:Enter}}). Varje objekt blir en markering av posten, i ett enda ångra-steg. {{key:Esc}} rensar det du valt.

## Vad varje sorts post tar

- En **linjär** post tar linjer, bågar, polylinjer, cirklar och splines efter längd. En sluten form räknas med sin omkrets. En skraffering utelämnas: den har en area, inte en längd, och fältet säger det.
- En **area**-post tar slutna former: slutna polylinjer, cirklar, 2D-solider och skrafferingar med sina hål. Öppna sträckor utelämnas, och fältet säger det.

## Exakt, och nästan exakt

Linjer, bågar (valfri bulge), polylinjer med bulge och cirklar är exakta: längder och areor använder bågens radie och svepvinkel, inte en bild av den. Ellipser, splines och skraffering vars gräns består av kanter mäts i korda på en grad eller finare, vilket ligger inom en hundradels procent för ellipser och en tiondel för resten; fältet säger hur många av det du valt som är kurvor av den här typen.

## Vad den tar och varifrån

- **Modell**: objekt i modellrummet. **En layout**: dess egna linjer, och modellobjekten inuti en vyport, skalade genom den. Ett objekt som korsar en vyports kant erbjuds inte (det plottas klippt); ett objekt som två vyportar båda visar tas bara en gång.
- Endast lager som bladet visar. Block räknas, de mäts inte: se [Räkna från en ritning](topic:count-from-a-drawing). 3D-polylinjer, nät, solider och regioner erbjuds inte.
