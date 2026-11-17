---
title: Mål fra en tegning
summary: Ta lengder og arealer fra tegningens egne linjer, buer, polylinjer og skravurer ved å velge dem, med nøyaktige buer og hull, i stedet for å tegne over med klikk.
keywords: mål tegning, geometri, polylinje, bue, sirkel, skravur, bule, nøyaktig lengde, nøyaktig areal, velg, vindu, tegn over, fra cad, lineær, areal
from: fd734246
---

{{ui:Measure drawing}} på arklinjen til et DWG- eller DXF-ark tar tegningens egne objekter som merker, så du ikke må tegne dem over med klikk. En polylinjes lengde, en buelengde, en sirkels areal og en skravurs areal med hullene sine blir nøyaktige, fra den samme beregningen som mengdeuttaket bruker for alle merker.

## Ta objekter som en lineær eller arealpost

1. Lag eller klikk en **lineær** eller en **areal**-post under {{ui:Items}}. Arket trenger en målestokk.
2. Velg {{ui:Measure drawing}}.
3. Klikk på objektene på arket for å velge dem, eller dra et vindu rundt dem: alt som ligger helt innenfor det, velges. {{key:Shift}} legger et vindu til det som er valgt; klikk et valgt objekt igjen for å fjerne det. Linjen viser totalen: «6 strekninger: 108'-9 1/8" til sammen.»
4. Velg legg-til-knappen, som sier antallet og posten, for eksempel {{ui:Legg til 6 i Edge}} (eller trykk {{key:Enter}}). Hvert objekt blir ett merke i posten, i ett angretrinn. {{key:Esc}} tømmer det du har valgt.

## Hva hver type post tar

- En **lineær** post tar linjer, buer, polylinjer, sirkler og splines etter lengde. En lukket form telles etter omkretsen. En skravur utelates: den har et areal, ikke en lengde, og linjen sier det.
- En **areal**-post tar lukkede former: lukkede polylinjer, sirkler, 2D-volumlegemer og skravurer med hullene sine. Åpne strekninger utelates, og linjen sier det.

## Nøyaktig, og nesten nøyaktig

Linjer, buer (med hvilken som helst bule), polylinjer med bule og sirkler er nøyaktige: lengder og arealer bruker buens radius og utspenning, ikke et bilde av den. Ellipser, splines og skravurer hvis grense består av kanter, måles i korder på én grad eller finere, noe som er innenfor en hundredel prosent for ellipser og en tidel for resten. Linjen sier hvor mange av det du valgte som er kurver av denne typen.

## Hvor det hentes fra

- **Modell**: objekter i modellrommet. **Et layout**: dets egne linjer, og modellobjektene inne i et visningsområde, skalert gjennom det. Et objekt som krysser et visningsområdes kant, tilbys ikke (det ville tegnes avkuttet); et objekt som to visningsområder viser, tas bare én gang.
- Bare layere som arket viser. Blokker telles, de måles ikke: se [Tell fra en tegning](topic:count-from-a-drawing). 3D-polylinjer, nett, volumlegemer og regioner tilbys ikke.
