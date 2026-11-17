---
title: Typické skupiny
summary: Vykažte typickou jednotku, místnost nebo podlaží jednou a počítejte ji tolikrát, kolikrát se opakuje; později změňte počet a uvidíte, které značky jsou typické.
keywords: typický, typická skupina, opakování, počet opakování, násobit, krát, jednotka, hotelový pokoj, byt, typické podlaží, x24, kopie
from: 42c3a372
---

Budova se často opakuje: 24 stejných hotelových pokojů, 6 typických podlaží, 40 parkovacích stání se stejným značením. **Typická skupina** vám umožní vykázat jeden z nich a počítat jej tolikrát, kolikrát se opakuje, bez kreslení kopií.

## Vytvoření typické skupiny

1. Vykažte jednu jednotku: její stěny, podlahu, zásuvky — libovolné položky.
2. Vyberte její značky nástrojem {{ui:Vybrat}}: klikněte na jednu, pak s {{key:Shift}} + klikněte na ostatní ([Vybrat značky](topic:copy-paste#select-the-marks)).
3. Pod **Vybraná značka** otevřete {{ui:Typická}} a zvolte {{ui:Nová typická skupina…}}.
4. Zadejte název (`Unit A`) a kolikrát se opakuje (`24`), pak zvolte {{ui:Vytvořit skupinu}}.

Každé množství těchto značek se nyní počítá 24krát: úsek stěny 10 ft dá 240 ft, podlaha 80 SF dá 1,920 SF, dvě zásuvky 48. Náklady se řídí podle toho a vzorce sestav vidí opakované součty (`N` počítá každý úsek také 24krát).

Na listu obklopuje značky skupiny přerušovaný rámeček s jejím názvem a počtem, například **Unit A ×24**.

## Pozdější změna

Skupiny jsou uvedeny pod **Typické skupiny** v pravém panelu:

- Změňte číslo za **×**, čím změníte, kolikrát se počítá (1 až 10 000). Každé množství se aktualizuje.
- Přejmenujte ji v jejím poli pro název.
- Ikona krabičky vybere její značky (a ukáže jejich list).
- Koš skupinu smaže. Její značky zůstanou, počítané jednou.

Chcete-li značky do skupiny přidat nebo z ní odebrat, vyberte je a zvolte skupinu (nebo {{ui:Není typická (×1)}}) pod {{ui:Typická}}.

## Dobré vědět

- Značky skupiny mohou být na několika listech a u libovolných položek. Každá značka je nejvýše v jedné skupině.
- Kopie, které vložíte, nejsou ve skupině: vložená kopie typické jednotky by se jinak počítala znovu 24krát. Skupinu používejte pro "totéž N-krát" a kopírování a vkládání pro kopie, které nakreslíte.
- Značky jsou nakresleny jednou, takže 3D pohled a označené PDF ukazují jednu jednotku; množství, exporty a tabulka po listech ji počítají ×N. List **Značky** v exportu do Excelu říká, které značky jsou typické a kolikrát se počítají.
- U nabídkových oblastí se značky skupiny počítají ×N ve své vlastní nabídkové oblasti.
