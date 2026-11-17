---
title: Meten vanuit een tekening
summary: Lengtes en oppervlakten nemen uit de eigen lijnen, bogen, polylijnen en arceringen van de tekening door ze te kiezen, met exacte bogen en gaten, in plaats van over te tekenen met klikken.
keywords: tekening meten, geometrie, polylijn, boog, cirkel, arcering, bolling, exacte lengte, exacte oppervlakte, kiezen, venster, overtrekken, uit cad, lineair, oppervlakte
from: fd734246
---

{{ui:Tekening meten}} op de bladbalk van een DWG- of DXF-blad neemt de eigen objecten van de tekening als markeringen, zodat u ze niet met klikken hoeft over te tekenen. De lengte van een polylijn, de lengte van een boog, de oppervlakte van een cirkel en de oppervlakte van een arcering met haar gaten komen exact uit dezelfde rekenmethode die de opmeting voor elke markering gebruikt.

## Objecten nemen als lineaire of oppervlaktepost

1. Maak of klik op een **lineaire** of **oppervlakte**-post onder {{ui:Posten}}. Het blad heeft een schaal nodig.
2. Kies {{ui:Tekening meten}}.
3. Klik op de objecten op het blad om ze te kiezen, of sleep er een venster omheen: alles dat er volledig binnen ligt, wordt gekozen. {{key:Shift}} voegt een venster toe aan wat al gekozen is; klik op een gekozen object nogmaals om het los te laten. De balk toont het totaal: "6 reeksen: 108'-9 1/8" in totaal."
4. Kies de toevoegknop, die het aantal en de post noemt, zoals {{ui:6 toevoegen aan Edge}} (of druk op {{key:Enter}}). Elk object wordt één markering van de post, in één stap ongedaan maken. {{key:Esc}} wist wat u hebt gekozen.

## Wat elk type post neemt

- Een **lineaire** post neemt lijnen, bogen, polylijnen, cirkels en splines op lengte. Een gesloten vorm telt op zijn omtrek. Een arcering blijft buiten beschouwing: die heeft een oppervlakte, geen lengte, en de balk zegt dat.
- Een **oppervlakte**-post neemt gesloten vormen: gesloten polylijnen, cirkels, 2D-volumes en arceringen met hun gaten. Open reeksen blijven buiten beschouwing, en de balk zegt dat.

## Exact, en bijna exact

Lijnen, bogen (elke bolling), polylijnen met bollingen en cirkels zijn exact: lengtes en oppervlakten gebruiken de straal en de boogomvang, niet een beeld ervan. Ellipsen, splines en arceringen waarvan de begrenzing uit randen bestaat, worden gemeten in koorden van één graad of fijner, wat binnen een honderdste procent ligt voor ellipsen en een tiende voor de rest. De balk zegt hoeveel van wat u hebt gekozen zulke krommen zijn.

## Waar het vandaan komt

- **Model**: objecten in de modelruimte. **Een indeling**: de eigen lijnen, en de modelobjecten binnen een viewport, geschaald via die viewport. Een object dat over de rand van een viewport steekt, wordt niet aangeboden (het wordt afgeknipt geplot); een object dat twee viewports allebei tonen, wordt één keer genomen.
- Alleen lagen die het blad toont. Blokken worden geteld, niet gemeten: zie [Tellen vanuit een tekening](topic:count-from-a-drawing). 3D-polylijnen, meshes, volumes en regio's worden niet aangeboden.
