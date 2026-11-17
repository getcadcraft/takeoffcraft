---
title: Öppna en DWG- eller DXF-ritning
summary: Öppna en ritningsfil som blad (modellrum och varje layout), börja med den skala ritningen anger, visa eller dölj dess lager och ta in länkade ritningar.
keywords: dwg, dxf, cad, ritning, öppna en ritning, layouter, modellrum, pappersrum, blad, enheter, insunits, vyportsskala, xref, länkad ritning, lager, frysta, ingen pdf, plotta, utan plottning
from: d8c3f504
---

TakeoffCraft öppnar en DWG- eller DXF-ritning på samma sätt som en PDF: du behöver inte plotta den till PDF först. Att räkna direkt från ritningen är exakt, eftersom ritningen vet vad varje objekt är. Se [Räkna från en ritning](topic:count-from-a-drawing).

## Öppna ritningen

1. Välj {{ui:Öppna ritningar}} i gruppen {{ui:Fil}}, eller tryck på {{key:Mod+O}}.
2. Markera DWG- eller DXF-filen. Du kan markera flera, och PDF-filer tillsammans med dem.
3. Välj Öppna.

Du kan också släppa ritningsfiler på TakeoffCraft, precis som PDF-filer. Inget laddas upp: webbläsaren läser filen på din dator.

TakeoffCraft läser DWG från AutoCAD 2000 till 2018 och ASCII-DXF från R12 till 2018. Den vägrar en binär DXF (spara den som ASCII, eller som DWG) och en fil som är ingetdera, och säger varför. En skadad fil öppnas med det som kunde läsas, och ett meddelande säger det; dess räkningar kan vara ofullständiga.

## Blad

- **Modell** är ritningens modellrum.
- **Varje layout** (flik i pappersrummet) är ett blad, namngivet efter sin flik, i fliksordning. En layout visar modellen genom sina vyportar, så som den plottas.

Zoom, panorering, fångst mot ritningens egna linjer, märken, anteckningar, {{ui:Kalibrera}} och resten fungerar som på en PDF. En ritnings blad sparas i mängdavtagningen efter filens namn och ett fingeravtryck av innehållet, precis som en PDF: öppna samma fil igen så finns märkena på dess blad.

## Skalan

Ett blad börjar med den skala ritningen anger:

- **En layout** tar skalan från dess största vyport. En skala som 1/2" = 1'-0" namnges som den förval den är; alla andra visas som ”Från ritningens vyport: 1" = 2.5'”. Om en layout har vyportar i andra skalor avgör den största bladets skala: kontrollera de övriga med {{ui:Kontrollera}}.
- **Modell** tar ritningens enheter (tum, millimeter, fot…) som skala: ”Ritningsenheter (tum)”.
- **En ritning utan enheter** (ritningen anger aldrig om en enhet är en tum eller en millimeter) har ingen skala: bladet säger ”Ingen skala”, och mätning på det vägras, precis som på en PDF utan skala. Att räkna kräver ingen skala. Ge den en med {{ui:Kalibrera}}.

{{ui:Kalibrera}}, {{ui:Kontrollera}} och listan {{ui:Förval}} ändrar en skala när som helst och vinner över ritningens. Förvallistan är avstängd för Modell, som saknar pappersstorlek.

## Lager

{{ui:Lager}} på bladfältet listar ritningens lager med hur många objekt varje har på det här bladet. Lager som filen stängde av eller frös börjar dolda. Avmarkera ett lager för att dölja det, eller markera ett dolt för att visa det: bladet ritas om, och det som är dolt utelämnas från räkningar och från objekten som erbjuds för {{ui:Mät ritning}}, om du inte ber om att räkna dolda lager också. {{ui:Visa alla}} visar alla lager; {{ui:Tillbaka till filens lager}} ångrar dina ändringar. Lagerval gäller för den här sessionen, inte för mängdavtagningsfilen.

## Länkade ritningar (xrefs)

En ritning som länkar andra ritningar visar dem där de infogats. TakeoffCraft hittar en länkad ritning bland de **öppna filerna**, efter dess filnamn: öppna värdritningen och den länkade ritningen tillsammans (eller den ena efter den andra). Tills dess säger statusfältet hur många länkade ritningar som inte hittades och att det som de ritar saknas, och räkningarna säger det.

## Begränsningar

- Objekt som TakeoffCraft inte kan läsa eller placera (proxyobjekt, okända klasser) listas i räknefönstret efter typ; de tas aldrig bort utan ett ord.
- Mycket stora ritningar ritas delvis, och räkningar stannar vid en gräns och säger det. Öppna en PDF-plot av en sådan ritning i stället.
- En ritning ritas i svart och i sina egna färger, mörkade för vitt papper. Plottstilstabeller och pennytilldelningar tillämpas inte.
