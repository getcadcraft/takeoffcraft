---
title: Mål fra en tegning
summary: Tag længder og arealer fra tegningens egne linjer, buer, polylinjer og skraveringer ved at vælge dem, med præcise buer og huller, i stedet for at tegne dem efter med klik.
keywords: mål tegning, geometri, polylinje, bue, cirkel, skravering, bulge, præcis længde, præcist areal, vælg, vindue, spor, fra cad, lineær, areal
from: fd734246
---

{{ui:Mål tegning}} på arkets linje for et DWG- eller DXF-ark tager tegningens egne objekter som mærker, så du ikke skal tegne dem efter med klik. En polylinjes længde, en buens længde, en cirkels areal og en skraverings areal med dets huller kommer ud præcist, ud fra den regneoperation, mængdeudtrækket bruger for hvert mærke.

## Tag objekter som en lineær eller areal post

1. Opret eller klik på en **lineær** eller en **areal**post under {{ui:Poster}}. Arket skal have en målestok.
2. Vælg {{ui:Mål tegning}}.
3. Klik på objekterne på arket for at vælge dem, eller træk et vindue om dem: alt, der ligger helt inde i det, vælges. {{key:Shift}} føjer et vindue til det valgte; klik på et valgt objekt igen for at fravælge det. Linjen viser totalen: "6 forløb: 108'-9 1/8" i alt."
4. Vælg tilføjelsesknappen, der angiver antallet og posten, fx {{ui:Tilføj 6 til Edge}} (eller tryk {{key:Enter}}). Hvert objekt bliver ét mærke på posten, i ét fortrydelsestrin. {{key:Esc}} rydder det, du har valgt.

## Hvad hver type post tager

- En **lineær** post tager linjer, buer, polylinjer, cirkler og splines efter længde. En lukket figur tæller med sin omkreds. En skravering udelades: den har et areal, ikke en længde, og linjen siger det.
- En **areal**post tager lukkede figurer: lukkede polylinjer, cirkler, 2D-faste legemer og skraveringer med deres huller. Åbne forløb udelades, og linjen siger det.

## Præcist, og næsten præcist

Linjer, buer (enhver bulge), polylinjer med bulges og cirkler er præcise: længder og arealer bruger buens radius og vinkel, ikke et billede af den. Ellipser, splines og skraveringer, hvis rand er lavet af kanter, måles i korder på en grad eller finere, hvilket ligger inden for en hundrededel procent for ellipser og en tiendedel for resten; linjen siger, hvor mange af det du valgte, der er kurver af denne slags.

## Hvad den tager, og hvorfra

- **Model**: objekter i modelrummet. **En layout**: dens egne linjer og modelobjekterne inde i en viewport, skaleret gennem den. Et objekt, der krydser en viewports kant, tilbydes ikke (det plottes beskåret); et objekt, som to viewports begge viser, tages kun én gang.
- Kun de lag, arket viser. Blokke tælles, de måles ikke: se [Tæl fra en tegning](topic:count-from-a-drawing). 3D-polylinjer, net, faste legemer og regioner tilbydes ikke.
