---
title: Načtení množství ze souboru IFC 4.3
summary: Otevřete soubor IFC 4.3 silnice, železnice, mostu nebo zemních prací a získejte počet podle třídy s délkami, plochami a objemy, které soubor uvádí, jako typovaná množství.
keywords: ifc, ifc4x3, ifc 4.3, silnice, železnice, most, vozovka, vrstva, obrubník, zemní práce, ložisko, infrastruktura, množství, typovaná množství, bim, civil
from: 6b08c2c4
---

Soubor IFC 4.3 může obsahovat silnice, železnice, mosty, vodní stavby a jejich části: vozovky, vrstvy, obrubníky, kolejnice, zemní práce, ložiska, piloty a další. TakeoffCraft je čte a převádí na typovaná množství, která můžete oceňovat.

## Otevření souboru

1. Zvolte {{ui:Open plans}} ve skupině {{ui:File}}, nebo stiskněte {{key:Mod+O}}.
2. Vyberte soubor IFC (můžete ho vybrat spolu s PDF), nebo ho přetáhněte na TakeoffCraft.

Pro každou třídu a předdefinovaný typ se vytvoří jedno typované množství, například "Vozovka (pružná): počet", a pokud je soubor uvádí, také "délka" v m, "plocha" v m² a "objem" v m³. Poznámka u každé položky říká, kolik prvků bylo spočítáno a kolik nemělo uvedené množství. Otevření novějšího souboru se stejným názvem tato množství aktualizuje, místo aby přidávalo další.

## Co to nedělá

- Čte sady množství (IfcElementQuantity), které soubor obsahuje. Netrasuje 3D tvary, takže prvek bez sady množství se započítá, ale nepřidá délku, plochu ani objem.
- Čtou se jen infrastrukturní třídy IFC 4.3. Budovový soubor (stěny, dveře, stropy) se zde na množství nepřevádí; soubor, který není IFC 4.3, to oznámí a nic nenačte.
- Jednotky jsou vlastní jednotky souboru, převedené na metry.
