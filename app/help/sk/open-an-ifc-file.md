---
title: Import množstiev zo súboru IFC 4.3
summary: Otvorte súbor IFC 4.3 cesty, železnice, mosta alebo zemných prác a získajte počet podľa triedy s dĺžkami, plochami a objemami, ktoré súbor uvádza, ako typované množstvá.
keywords: ifc, ifc4x3, ifc 4.3, cesta, železnica, most, vozovka, obrubník, vrstva, zemné práce, ložisko, infraštruktúra, množstvá, bim, civil, typované množstvá
from: 6b08c2c4
---

Súbor IFC 4.3 môže obsahovať cesty, železnice, mosty, vodné stavby a časti, z ktorých sú zložené: vozovky, vrstvy, obrubníky, koľajnice, zemné práce, ložiská, piloty a ďalšie. TakeoffCraft ich číta a mení na typované množstvá, ktoré môžete oceniť.

## Otvorenie súboru

1. Vyberte {{ui:Open plans}} v skupine {{ui:File}} alebo stlačte {{key:Mod+O}}.
2. Vyberte súbor IFC (môžete ho vybrať spolu s PDF), alebo ho presuňte na TakeoffCraft.

Pre každú triedu a preddefinovaný typ sa vytvorí jedno typované množstvo, napríklad „Vozovka (flexibilná): počet“, a ak ich súbor uvádza, „dĺžka“ v m, „plocha“ v m² a „objem“ v m³. Poznámka pri každej položke hovorí, koľko prvkov sa spočítalo a koľko nemalo uvedené množstvo. Otvorenie novšieho súboru s rovnakým názvom tieto množstvá aktualizuje namiesto pridávania ďalších.

## Čo nerobí

- Číta sady množstiev (IfcElementQuantity), ktoré súbor obsahuje. Netvorí 3D tvary, takže prvok bez sady množstiev sa spočíta, ale nepridá dĺžku, plochu ani objem.
- Číta sa iba infraštruktúrna trieda IFC 4.3. Súbor budovy (steny, dvere, stropy) sa sem na množstvá nepremení; súbor, ktorý nie je IFC 4.3, to povie a nič nenačíta.
- Jednotky sú vlastné jednotky súboru, prevedené na metre.
