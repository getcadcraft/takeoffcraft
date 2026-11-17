---
title: Yrkespaket
summary: Lägg till kostnadsfria kalkylsammansättningar för ett yrke i ditt prisbibliotek, ta bort dem i ett steg och dela ditt eget bibliotek som ett paket.
keywords: yrkespaket, paket, kalkylsammansättningar, mallar, startposter, el, gips, reglar, målning, betong, golv, murning, takläggning, fasad, snickeri, VVS, hvac, isolering, landskap, däck, generalentreprenör, csi, masterformat, cc0, lägg till, ta bort, dela
from: d3c036be
---

Ett **yrkespaket** är en uppsättning färdiga poster för ett yrke: var och en med sin enhet, sin höjd eller djup, sitt spill och sin **kalkylsammansättning**, de delar och formler som gör om en mätt sträcka, yta eller räkning till material. En gipsvägg tar till exempel med sig sin skena, reglar, skivor, skruvar, tejp och spackel.

Paketen läggs till i ditt [prisbibliotek](topic:price-library), och därifrån lägger du till deras poster i valfri mängdavtagning.

## Lägg till ett paket

1. Öppna {{ui:Bibliotek}} överst i {{ui:Poster}}-panelen och sedan {{ui:Yrkespaket…}}.
2. Välj {{ui:Enheter}}: imperiska (LF, SF), metriska (m, m²) eller båda. Varje kalkylsammansättning finns i båda systemen.
3. Välj {{ui:Lägg till}} bredvid ett paket.

Paketets poster visas i biblioteket, märkta med paketets namn. För att använda dem markerar du dem i biblioteket och väljer {{ui:Lägg till i mängdavtagningen}}.

:::note
**Ett paket medför inga priser.** Dess poster visar "ange ditt pris" i biblioteket. Priserna är dina: skriv in dem i biblioteket eller postredigeraren, eller importera din prislista som en CSV och använd {{ui:Uppdatera priser}}.
:::

Om du redan har en post med samma namn och typ i ditt bibliotek lämnar paketet din kvar som den är. Om du lägger till ett paket igen ersätts dess egna poster med den nya versionen.

## Ta bort ett paket

I {{ui:Yrkespaket…}} väljer du {{ui:Ta bort}} bredvid ett paket du lagt till, och sedan en gång till för att bekräfta. Varje post som kom från det lämnar biblioteket i ett steg. Poster du redan lagt till i en mängdavtagning finns kvar i den mängdavtagningen.

## Vad som finns i ett paket

Välj {{ui:Källor och detaljer}} under ett paket för att se vad varje kalkylsammansättning skrevs utifrån: byggregler, standarder och branschorganisationers monteringsanvisningar. I biblioteket, håll pekaren över en post för att läsa dess källor och antaganden, till exempel reglaravstånd eller en färgs täckning per liter. Kontrollera dem mot ditt jobb och dina produkters datablad, och ändra formlerna där de skiljer sig (se [Kalkylsammansättningar och formler](topic:assemblies)).

Varje paket är markerat **Startpaket: ännu inte granskat av en kalkylator** tills yrkesverksamma kalkylatorer har granskat det.

Varje post har också sitt CSI MasterFormat-nummer, till exempel `09 21 16`.

## Dela ditt bibliotek som ett paket

{{ui:Exportera som paket…}} i biblioteket sparar det som en paketfil (`.ccpack.json`) som vem som helst kan lägga till med {{ui:Öppna en paketfil…}}. Som standard lämnas de poster bort som kommer från paket du lagt till, och inga priser följer med. Markera {{ui:Ta med mina priser som exempelpriser}} för att skicka med dina priser också: de går ut märkta med region och det datum du anger, och den som lägger till paketet väljer om de ska användas.

Paketfiler är ren data, aldrig program. TakeoffCraft kontrollerar varje del av en paketfil innan den används och lämnar bort allt den inte kan läsa.
