---
title: Ajánlati összesítő és ajánlat
summary: Adjon a költségvetéshez munkadíj-terhet, áfát, rezsit, nyereséget és kezességet, írja meg a tartalmat és a kizárásokat, és töltse le az elküldhető ajánlat PDF-jét.
keywords: ajánlat, munkadíj-teher, teher, bérköltség, árajánlat, rezsi, nyereség, felár, árrés, áfa, kezesség, tartalom, kizárások, feltételek, aláírás, megrendelő, ár
from: 3208a561
---

A költségvetés azt árazza, amit felmért. Az **ajánlati összesítő** árrá alakítja: hozzáadja az áfát, a rezsit, a nyereséget és a kezességet, és **ajánlat PDF**-et készít a tartalmával és kizárásaival.

Nyissa meg a {{ui:Exportálás}} › {{ui:Ajánlati összesítő és ajánlat…}} menüpontból. Minden benne lévő adat a méréssel együtt mentődik, és minden változtatás visszavonható.

## A felárak

Írjon be egy százalékot az öt közül bármelyikbe (a többit hagyja 0-n). Ezeket ebben a sorrendben számítjuk ki, mindegyik a fölötte lévő összegre:

| Sor | Számítás |
|---|---|
| Anyag, munkadíj | A költségvetés összegei (az alapajánlat, ha a mérésnek vannak [változatai](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Munkadíj-teher | Teher % × munkadíj: a csapata bérére eső bérterhek, biztosítás és juttatások. |
| **Költség** | Anyag + munkadíj + munkadíj-teher. |
| Áfa az anyagra | Áfa % × anyag. |
| Rezsi | Rezsi % × (költség + adó). |
| Nyereség | Nyereség % × (költség + adó + rezsi). |
| Kezesség | Kezesség % × mindaz, ami fent van. |
| **Ajánlat** | A sorok összege. |

Minden sor fillérre kerekítve. A munkafüzet ugyanezeket a sorokat mutatja a Becslés munkalap összege alatt, élő képletekkel. Az összesítő gépelés közben frissül: az {{key:Enter}} rögzíti a százalékot. Minden változat ugyanazokkal a felárakkal jelenik meg a saját költségén, így a megrendelő látja, mit változtat valójában.

## Az ajánlat

Töltse ki, mit tartalmazzon az ajánlat:

- **Projekt** (üresen hagyva a mérés neve), **Címzett** (a megrendelő) és **Feladó** (a cég).
- **Tartalmazza** és **Nem tartalmazza**: soronként egy; a kezdő kötőjel vagy felsorolásjel is megfelel.
- **Feltételek**: szabad szöveg, például „30 napig érvényes.”
- **Tételek és mennyiségek felsorolása**: a terjedelem tételenként, mennyiségekkel és ár nélkül. Vegye ki a jelölést átalányárú ajánlat esetén.

Válassza az {{ui:Ajánlat PDF}} lehetőséget. A PDF (`<takeoff> - proposal.pdf`) tartalmazza a dátumot, az árblokkot minden felárral és az ajánlattal, a változatokat, a terjedelmet, a tartalmat és kizárásokat, a feltételeket, valamint az aláírás- és dátumsorokat. Ha egyes mennyiségeket nem lehetett mérni (lépték nélküli lap), ezt az ár alatt jelzi.

## Az exportban

Ha a mérésnek van ajánlati összesítője, a CSV ezzel végződik, a munkafüzet pedig egy **Ajánlati összesítő** munkalapot kap, minden sorral, a százalékával és összegével. Lásd: [A költségvetés exportálása](topic:export-estimate).
