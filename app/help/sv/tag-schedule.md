---
title: Ta in en taggförteckning som mängder
summary: En taggförteckning exporterad från byggnadsmodellen (CSV) blir typade mängder i mängdavtagningen, en per tagg, så att modellens antal och areor står bredvid det du mätt.
keywords: taggar, taggförteckning, byggnadsmodell, bimcraft, ifc, mängder, csv, förteckning, import, typad mängd
from: a60c19b6
---

{{ui:Taggar}} i verktygsfältet tar in en taggförteckning som BimCraft sparat som en CSV-fil. Varje unik tagg blir en typad mängd, av samma slag som CivilCrafts schakt och fyllning blir.

1. I BimCraft tar du fram den taggförteckning du vill ha och sparar den som CSV.
2. Välj {{ui:Taggar}} och välj filen.
3. Ange vilken kolumn som namnger raden ({{ui:Namnge raden efter}}, vanligtvis taggen) och vilken som innehåller talet ({{ui:Mängd från}}). Med {{ui:Räkna raderna}} räknas varje rad som en.
4. Välj enheten. En längd i millimeter blir meter med {{ui:Multiplicera med}} 0.001.
5. {{ui:Lägg till mängderna}}.

Rader med samma tagg läggs ihop. En cell som inte är ett tal lämnas bort och räknas i sammanfattningen. Om du tar in samma förteckning igen uppdateras de mängder du redan har i stället för att fler läggs till; deras namn, priser och spill är kvar som dina.

## Bra att veta

En typad mängd mäts inte på ett blad, så den har inga markeringar. Ingenting skickas någonstans; filen läses här.
