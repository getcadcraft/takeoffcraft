---
title: Een tagstaat als hoeveelheden inlezen
summary: Een tagstaat die uit het gebouwmodel is geëxporteerd (CSV) wordt getypeerde hoeveelheden in de opmeting, één per tag, zodat de tellingen en oppervlakten van het model naast wat u hebt gemeten staan.
keywords: tags, tagstaat, gebouwmodel, bimcraft, ifc, hoeveelheden, csv, staat, importeren, getypeerde hoeveelheid
from: a60c19b6
---

{{ui:Tags}} op de werkbalk leest een tagstaat in die BimCraft als CSV-bestand heeft opgeslagen. Elke afzonderlijke tag wordt een getypeerde hoeveelheid, van dezelfde soort als waar CivilCraft's ontgraving en ophoging van worden.

1. Maak in BimCraft de gewenste tagstaat en sla die op als CSV.
2. Kies {{ui:Tags}} en kies het bestand.
3. Geef aan welke kolom de regel benoemt ({{ui:Regel benoemen naar}}, meestal de tag) en welke het getal bevat ({{ui:Hoeveelheid uit}}). Met {{ui:De rijen tellen}} telt elke rij als één.
4. Kies de eenheid. Een lengte in millimeter wordt met {{ui:Vermenigvuldigen met}} 0.001 meter.
5. {{ui:De hoeveelheden toevoegen}}.

Rijen met dezelfde tag worden samengeteld. Een cel die geen getal is, wordt overgeslagen en in de samenvatting geteld. Als u dezelfde staat opnieuw inleest, worden de hoeveelheden die u al hebt bijgewerkt in plaats van er meer toe te voegen; hun namen, tarieven en verlies blijven van u.

## Goed om te weten

Een getypeerde hoeveelheid wordt niet op een blad gemeten, dus heeft geen markeringen. Er wordt niets verstuurd; het bestand wordt hier gelezen.
