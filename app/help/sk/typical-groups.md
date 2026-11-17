---
title: Typické skupiny
summary: Odmerajte typickú jednotku, miestnosť alebo podlažie raz a počítajte ju toľkokrát, koľkokrát sa opakuje, neskôr zmeňte počet a pozrite, ktoré značky sú typické.
keywords: typický, typická skupina, opakovanie, počet opakovaní, násobiť, krát, jednotka, hotelová izba, byt, typické podlažie, x24, kópie
from: 42c3a372
---

Budovy sa často opakujú: 24 identických hotelových izieb, 6 typických podlaží, 40 parkovacích miest s rovnakým značením. **Typická skupina** vám umožní odmerať jednu z nich a počítať ju toľkokrát, koľkokrát sa opakuje, bez kreslenia kópií.

## Vytvorenie typickej skupiny

1. Odmerajte jednu jednotku: jej steny, podlahu, zásuvky — akékoľvek položky.
2. Vyberte jej značky nástrojom {{ui:Select}}: kliknite na jednu, potom {{key:Shift}} + klik na ostatné ([Výber značiek](topic:copy-paste#select-the-marks)).
3. V časti **Vybraná značka** otvorte {{ui:Typical}} a vyberte {{ui:New typical group…}}.
4. Dajte jej názov (`Jednotka A`) a koľkokrát sa opakuje (`24`), potom vyberte {{ui:Make group}}.

Každé množstvo týchto značiek teraz počíta 24-krát: 10 ft stenový úsek dá 240 ft, 80 SF podlaha 1,920 SF, dve zásuvky 48. Náklady nasledujú a vzorce zostavy vidia zopakované súčty (`N` počíta každý úsek tiež 24-krát).

Na liste okolo značiek skupiny je prerušovaný rámček s jej názvom a počtom, napríklad **Jednotka A ×24**.

## Zmena neskôr

Skupiny sú uvedené pod **Typické skupiny** v pravom paneli:

- Zmeňte číslo za **×**, aby ste zmenili, koľkokrát sa počíta (1 až 10 000). Každé množstvo sa aktualizuje.
- Premenujte ju v jej poli názvu.
- Ikona boxu vyberie jej značky (a ukáže ich list).
- Kôš zmaže skupinu. Jej značky zostanú, počítané raz.

Ak chcete pridať značky do skupiny alebo ich z nej odobrať, vyberte ich a zvoľte skupinu (alebo {{ui:Not typical (×1)}}) pod {{ui:Typical}}.

## Dobre vedieť

- Značky skupiny môžu byť na viacerých listoch a z rôznych položiek. Každá značka je najviac v jednej skupine.
- Vložené kópie nie sú v skupine: vložená kópia typickej jednotky by inak počítala 24-krát znova. Skupinu používajte na „to isté N-krát“ a kopírovanie a vkladanie na kópie, ktoré nakreslíte.
- Značky sa nakreslia raz, takže 3D zobrazenie a označené PDF ukazujú jednu jednotku; množstvá, exporty a tabuľka po listoch ju počítajú ×N. List **Značky** exportu do Excelu hovorí, ktoré značky sú typické a koľkokrát sa počítajú.
- S oblasťami ponuky sa značky skupiny počítajú ×N vo svojej vlastnej oblasti ponuky.
