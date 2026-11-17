---
title: Inbäddad koldioxid och en 5D-prislista
summary: Koldioxid summerar den inbäddade koldioxiden i mätningen utifrån varje posts mängd och en öppen faktortabell, och skickar mätningens priser till BimCraft som en prislista för 5D-kostnader.
keywords: koldioxid, inbäddad koldioxid, kgco2e, co2, faktorer, a1-a3, transport, spill, 5d, prislista, kostnad, bimcraft, epd
from: f4bff3b8
---

{{ui:Koldioxid}} i verktygsfältet summerar den inbäddade koldioxiden i det du har mätt upp, och gör dina priser till en prislista som byggnadsmodellen kan använda. Det är en uppskattning, inte en bedömning.

## Inbäddad koldioxid

Varje posts mängd, med dess spill, multipliceras med en rad i faktortabellen. En rad matchas mot orden i postens namn (”betongplatta” hittar en rad med nyckelordet betong). Tabellen är samma öppna tabell som BimCraft använder, så en fil du laddar här fungerar där. **Raderna som följer med programmet är startvärden: generiska, ej kontrollerade och inte från någon databas.** Dialogen säger det bredvid siffrorna; ersätt dem med din egen källa innan du litar på ett tal.

1. Välj {{ui:Koldioxid}}. De räknade posterna listas med sina kilogram CO2e; totalen står ovanför.
2. Bocka i {{ui:A4 transport}} eller {{ui:A5 spill på plats}} för att räkna med de stegen också, för de rader som anger ett värde för dem. Produktsteget räknas alltid.
3. Om du vill använda en annan rad för en post, eller ingen, använd listan på dess rad.
4. {{ui:Faktorer från en fil…}} laddar en faktortabell (JSON eller CSV) som du gjort från din egen källa; dess rader ersätter startraderna med samma id. {{ui:Faktorer (JSON)}} sparar dina.

En faktor gäller per meter, kvadratmeter, kubikmeter, styck eller kilogram. En rad som mäts i fot eller kvadratfot omvandlas. En kilogramfaktor kräver en volym (kubikyard eller kubikmeter) och radens densitet. En post vars faktor kräver en kvantitet den inte mäter listas under {{ui:Utelämnat}} med skälet, aldrig gissad. Den löpande totalen i statusfältet visar samma siffra.

Dina faktorrader, dina val och de steg du räknar sparas i mätningens fil.

## En prislista för 5D-kostnader

{{ui:5D-priser (JSON)}} och {{ui:5D-priser (CSV)}} sparar mätningens priser som en prislista: en rad per prissatt post, med dess material- och arbetspris per enhet och dess spill. Ladda den i BimCraft:s kostnadspanel (Inbäddad koldioxid och 5D-kostnad) för att prissätta byggnadsmodellens uppgifter med samma priser som gav anbudet. Poster som är mätta i en enhet tabellen saknar, och poster utan pris, utelämnas.

## Med din assistent

Om du tillåter assistenter i {{ui:Inställningar}} kan de läsa koldioxiden (carbon_check). Att ladda faktorer gör du själv.

## Bra att veta

Ingenting skickas någonstans. Siffrorna är bara så bra som de faktorer du laddar.
