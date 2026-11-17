---
title: Hämta mängder från en IFC 4.3-fil
summary: Öppna en IFC 4.3-fil för en väg, järnväg, bro eller jordarbete och få en räkning per klass, med de längder, areor och volymer filen anger, som typade mängder.
keywords: ifc, ifc4x3, ifc 4.3, väg, järnväg, bro, beläggning, kantsten, vägskikt, jordarbeten, upplager, infrastruktur, mängder, bim, anläggning, typade mängder
from: 6b08c2c4
---

En IFC 4.3-fil kan innehålla vägar, järnvägar, broar, marina arbeten och de delar de består av: beläggningar, vägskikt, kantstenar, räls, jordarbeten, upplager, pålar med mera. TakeoffCraft läser dessa och gör dem till typade mängder som du kan prissätta.

## Öppna filen

1. Välj {{ui:Öppna ritningar}} i gruppen {{ui:Fil}}, eller tryck på {{key:Mod+O}}.
2. Markera IFC-filen (du kan markera den tillsammans med PDF-filer), eller släpp den på TakeoffCraft.

En typad mängd skapas för varje klass och fördefinierad typ, till exempel ”Beläggning (flexibel): antal”, och, när filen anger dem, ”längd” i m, ”area” i m² och ”volym” i m³. Noteringen på varje post anger hur många element som räknats och hur många som inte angav någon mängd. Om du öppnar en nyare fil med samma namn uppdateras dessa mängder i stället för att fler läggs till.

## Vad den inte gör

- Den läser mängdsuppsättningarna (IfcElementQuantity) som filen innehåller. Den mäter inte 3D-formerna, så ett element utan mängdsuppsättning räknas men lägger inte till någon längd, area eller volym.
- Endast infrastrukturklasserna i IFC 4.3 läses. En byggnadsfil (väggar, dörrar, bjälklag) omvandlas inte till mängder här; en fil som inte är IFC 4.3 säger det och hämtar inget.
- Enheterna är filens egna, omräknade till meter.
