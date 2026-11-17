---
title: Uvoz količin iz datoteke IFC 4.3
summary: Odprite datoteko IFC 4.3 ceste, železnice, mostu ali zemeljskih del in dobite štetje po razredu z dolžinami, površinami in prostorninami, ki jih datoteka navede, kot vnesene količine.
keywords: ifc, ifc4x3, ifc 4.3, cesta, železnica, most, vozišče, robnik, plast, zemeljska dela, ležišče, infrastruktura, količine, bim, civil, vnesene količine
from: 6b08c2c4
---

Datoteka IFC 4.3 lahko vsebuje ceste, železnice, mostove, pomorske objekte in dele, iz katerih so narejeni: vozišča, plasti, robnike, tire, zemeljska dela, ležišča, pilote in drugo. TakeoffCraft jih prebere in jih pretvori v vnesene količine, ki jih lahko ocenite s ceno.

## Odprite datoteko

1. Izberite {{ui:Odpri načrte}} v skupini {{ui:Datoteka}} ali pritisnite {{key:Mod+O}}.
2. Izberite datoteko IFC (izberete jo lahko skupaj s PDF-ji) ali jo spustite na TakeoffCraft.

Za vsak razred in vnaprej določen tip nastane ena vnesena količina, na primer „Vozišče (fleksibilno): štetje“, in, kadar jih datoteka navede, še „dolžina“ v m, „površina“ v m² in „prostornina“ v m³. Opomba pri vsaki postavki pove, koliko elementov je bilo prešteto in koliko jih ni imelo navedene količine. Odprtje novejše datoteke z istim imenom posodobi te količine, namesto da bi jih dodalo.

## Česa ne naredi

- Bere nabore količin (IfcElementQuantity), ki jih datoteka vsebuje. Ne meri 3D oblik, zato element brez nabora količin je prešteti, vendar ne doda dolžine, površine ali prostornine.
- Berejo se samo infrastrukturni razredi IFC 4.3. Stavbna datoteka (stene, vrata, plošče) tu ni pretvorjena v količine; datoteka, ki ni IFC 4.3, to pove in ne prinese ničesar.
- Enote so enote datoteke, pretvorjene v metre.
