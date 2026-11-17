---
title: Importare quantità da un file IFC 4.3
summary: Aprire un file IFC 4.3 di una strada, ferrovia, ponte o movimento terra e ottenere un conteggio per classe, con lunghezze, aree e volumi dichiarati dal file, come quantità tipizzate.
keywords: ifc, ifc4x3, ifc 4.3, strada, ferrovia, ponte, pavimentazione, cordolo, strato, movimento terra, appoggio, infrastruttura, quantità, bim, civile, quantità tipizzate
from: 6b08c2c4
---

Un file IFC 4.3 può contenere strade, ferrovie, ponti, opere marittime e le parti che li compongono: pavimentazioni, strati, cordoli, rotaie, movimenti di terra, appoggi, pali e altro. TakeoffCraft legge questi elementi e li trasforma in quantità tipizzate che si possono prezzare.

## Aprire il file

1. Scegliere {{ui:Apri PDF}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+O}}.
2. Selezionare il file IFC (si può selezionare insieme ai PDF), oppure trascinarlo su TakeoffCraft.

Si crea una quantità tipizzata per ogni classe e tipo predefinito, per esempio "Pavimentazione (flessibile): conteggio", e, quando il file le dichiara, "lunghezza" in m, "area" in m² e "volume" in m³. La nota su ogni voce indica quanti elementi sono stati contati e quanti non dichiaravano alcuna quantità. Aprire un file più recente con lo stesso nome aggiorna queste quantità invece di aggiungerne altre.

## Cosa non fa

- Legge i set di quantità (IfcElementQuantity) che il file contiene. Non misura le forme 3D, quindi un elemento senza set di quantità viene contato ma non aggiunge lunghezza, area o volume.
- Vengono lette solo le classi infrastrutturali di IFC 4.3. Un file di edificio (muri, porte, solai) non viene trasformato in quantità qui; un file che non è IFC 4.3 lo dichiara e non importa nulla.
- Le unità sono quelle del file, convertite in metri.
