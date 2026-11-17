---
title: DWG vagy DXF rajz megnyitása
summary: Nyissa meg a rajzfájlt lapként (modelltér és minden elrendezés), kezdjen a rajz által megadott méretaránnyal, jelenítse meg vagy rejtse el a rétegeit, és hozzon be külső hivatkozott rajzokat.
keywords: dwg, dxf, cad, rajz, rajz megnyitása, elrendezések, modelltér, papírtér, lapok, mértékegységek, insunits, nézetablak méretaránya, xref, külső hivatkozás, rétegek, befagyasztva, pdf nélkül, plottolás, plottolás nélkül
from: d8c3f504
---

A TakeoffCraft úgy nyitja meg a DWG vagy DXF rajzot, mint egy PDF-et: nem kell előbb PDF-be plottolnia. A rajzból való számolás pontos, mert a rajz tudja, mi milyen objektum. Lásd: [Számolás rajzból](topic:count-from-a-drawing).

## A rajz megnyitása

1. Válassza a {{ui:Tervek megnyitása}} lehetőséget a {{ui:Fájl}} csoportban, vagy nyomja meg a {{key:Mod+O}} billentyűkombinációt.
2. Válassza ki a DWG vagy DXF fájlt. Kijelölhet többet is, és PDF-ekkel együtt is.
3. Válassza a Megnyitás gombot.

A rajzfájlokat a PDF-ekhez hasonlóan a TakeoffCraftra is húzhatja. Semmit nem tölt fel a rendszer: a böngésző a számítógépén olvassa be a fájlt.

A TakeoffCraft az AutoCAD 2000-től 2018-ig terjedő DWG-t, és az R12-től 2018-ig terjedő ASCII DXF-et olvassa. Bináris DXF-et nem fogad el (mentse ASCII-ként vagy DWG-ként), és olyan fájlt sem, amely egyik sem, és megmondja, miért. A sérült fájl azzal nyílik meg, amit ki lehetett olvasni, és erről üzenet tájékoztat; a számlálások hiányosak lehetnek.

## Lapok

- A **Modell** a rajz modelltere.
- **Minden elrendezés** (papírtér-lap) egy lap. A neve a saját lapfülének neve, a lapfülek sorrendjében. Az elrendezés a modellt a nézetablakain keresztül mutatja, ahogy plottoláskor megjelenne.

A nagyítás, az eltolás, a fogás a rajz saját vonalaihoz, a jelölések, a jegyzetek, a {{ui:Kalibrálás}} és a többi ugyanúgy működik, mint PDF-en. A rajz lapjai a fájl nevével és tartalmának ujjlenyomatával mentődnek a mennyiségkimutatásba, a PDF-hez hasonlóan: ha ugyanazt a fájlt újra megnyitja, a jelölések a lapjain lesznek.

## A méretarány

A lap azzal a méretaránnyal indul, amelyet a rajz megad:

- **Az elrendezés** a legnagyobb nézetablakának méretarányát veszi át. Az olyan méretarány, mint a 1/2" = 1'-0", a saját nevén szerepel az előbeállítások között; minden más így jelenik meg: „A rajz nézetablakából: 1" = 2.5'”. Ha egy elrendezésnek más méretarányú nézetablakai is vannak, a legnagyobb határozza meg a lap méretarányát: a többit az {{ui:Ellenőrzés}} segítségével ellenőrizze.
- **A Modell** a rajz mértékegységét (hüvelyk, milliméter, láb…) veszi méretaránynak: „Rajzegységek (hüvelyk)”.
- **Mértékegység nélküli rajz** (a rajz nem mondja meg, hogy az egység hüvelyk vagy milliméter) nem rendelkezik méretaránnyal: a lapon „Nincs méretarány” áll, és a mérés elutasított, mint méretarány nélküli PDF-en. A számláláshoz nincs szükség méretarányra. Adjon egyet a {{ui:Kalibrálás}} segítségével.

A {{ui:Kalibrálás}}, az {{ui:Ellenőrzés}} és az {{ui:Előbeállítás}} lista bármikor megváltoztatja a méretarányt, és felülírja a rajzét. Az előbeállítás-lista a Modellnél ki van kapcsolva, mert ott nincs papírméret.

## Rétegek

A {{ui:Rétegek}} a lapsávon felsorolja a rajz rétegeit, és megmutatja, hány objektum van mindegyikben ezen a lapon. A fájl által kikapcsolt vagy befagyasztott rétegek elrejtve indulnak. Vegye ki a jelölést egy rétegről az elrejtéséhez, vagy jelöljön be egy elrejtettet a megjelenítéshez: a lap újra rajzolódik, és az elrejtett objektumok kimaradnak a számlálásból és a {{ui:Rajz mérése}} számára felajánlott objektumok közül, hacsak nem kéri az elrejtett rétegek számlálását is. A {{ui:Összes megjelenítése}} minden réteget megjelenít; a {{ui:Vissza a fájl rétegeihez}} visszavonja a módosításait. A réteg-beállítások ehhez a munkamenethez tartoznak, nem a mennyiségkimutatás fájljához.

## Külső hivatkozott rajzok (xref)

Egy másik rajzokat hivatkozó rajz ott mutatja őket, ahol be vannak szúrva. A TakeoffCraft a külső hivatkozott rajzot a **megnyitott fájlok** között keresi, fájlnév alapján: nyissa meg a befoglaló rajzot és a hivatkozott rajzot együtt (vagy egymás után). Addig az állapotsor azt mutatja, hány külső hivatkozott rajz nem található, a hiányzó rajzolt tartalmat pedig a számlálások is jelzik.

## Korlátok

- Az olyan objektumok, amelyeket a TakeoffCraft nem tud beolvasni vagy elhelyezni (proxy-objektumok, ismeretlen osztályok), a számlálási ablakban típusuk szerint szerepelnek; soha nem tűnnek el szó nélkül.
- A nagyon nagy rajzok részben rajzolódnak, a számlálás pedig egy határnál megáll, és ezt jelzi. Ilyen esetben nyissa meg a rajz PDF-plotját.
- A rajz fehér papírhoz sötétítve, a saját színeivel és feketével rajzolódik. A plotstílus-táblák és a tollhozzárendelések nem alkalmazódnak.
