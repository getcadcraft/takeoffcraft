---
title: Mennyiségek betöltése egy IFC 4.3 fájlból
summary: Nyisson meg egy út-, vasút-, híd- vagy földmunka IFC 4.3 fájlt, és kapjon osztályonkénti darabszámot a fájl által megadott hosszakkal, területekkel és térfogatokkal, típusos mennyiségként.
keywords: ifc, ifc4x3, ifc 4.3, út, vasút, híd, burkolat, szegély, pályaszerkezeti réteg, földmunka, támasz, cölöp, infrastruktúra, mennyiségek, bim, építőmérnöki, típusos mennyiségek
from: 6b08c2c4
---

Egy IFC 4.3 fájl tartalmazhat utakat, vasutakat, hidakat, tengeri műveket és azok részeit: burkolatokat, pályaszerkezeti rétegeket, szegélyeket, sínt, földmunkát, támaszokat, cölöpöket és még sok mást. A TakeoffCraft ezeket beolvassa, és árazható típusos mennyiségekké alakítja.

## Fájl megnyitása

1. Válassza a {{ui:Tervek megnyitása}} lehetőséget a {{ui:Fájl}} csoportban, vagy nyomja meg a {{key:Mod+O}} billentyűkombinációt.
2. Válassza ki az IFC-fájlt (a PDF-ekkel együtt is kiválaszthatja), vagy húzza a TakeoffCraftra.

Minden osztályhoz és előre meghatározott típushoz készül egy típusos mennyiség, például „Burkolat (rugalmas): darab”, és ha a fájl megadja őket, „hossz” m-ben, „terület” m²-ben és „térfogat” m³-ben. Minden tétel megjegyzése megmondja, hány elemet számoltak meg, és hányan nem adtak meg mennyiséget. Egy azonos nevű, újabb fájl megnyitása ezeket a mennyiségeket frissíti, nem ad hozzá újabbakat.

## Amit nem tesz meg

- A fájl által hordozott mennyiségkészleteket (IfcElementQuantity) olvassa be. A 3D-s alakzatokat nem méri, ezért az a elem, amelynek nincs mennyiségkészlete, megszámolódik, de hosszat, területet vagy térfogatot nem ad hozzá.
- Csak az IFC 4.3 infrastruktúra-osztályai olvashatók. Egy épületfájl (falak, ajtók, födémek) itt nem alakul mennyiséggé; ha a fájl nem IFC 4.3, a TakeoffCraft erről tájékoztat, és semmit nem hoz be.
- Az egységek a fájl saját egységei, méterre átváltva.
