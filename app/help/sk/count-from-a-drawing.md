---
title: Počítanie z výkresu
summary: Počítajte bloky, objekty na hladine alebo text priamo z DWG alebo DXF: presne, so zanorenými blokmi, variantmi dynamických blokov a poliami blokov, v jednom kroku späť.
keywords: počítanie z výkresu, počet z CAD, počet blokov, počítať bloky, vložiť, názov bloku, zanorené bloky, dynamický blok, variant, minsert, pole, hladina, typ objektu, kružnice, text, atribút, značka, skryté hladiny, presný počet, ako, dvere, zariadenia
from: 5060e24e
---

{{ui:Počet z CAD}} na paneli listu (príkaz **Počítanie z výkresu** v ostatných štýloch ponuky) počíta to, čo DWG alebo DXF hovorí, že tam je. Kde {{ui:Automatický počet}} hľadá obrázok symbolu a môže nejaký minúť alebo nájsť falošný, toto počíta objekty: každé vloženie bloku s názvom `DOOR-36` je jedny dvere. Najprv otvorte výkres: [Otvorenie výkresu DWG alebo DXF](topic:open-a-drawing).

## Počítanie bloku

1. Otvorte list výkresu. {{ui:Počet z CAD}} je na paneli listu.
2. Vyberte ho. Okno vypíše bloky s tým, koľko ich je. Hľadajte podľa názvu a potom jeden vyberte.
3. Skontrolujte riadok pod zoznamom: „22 nájdených, 22 na pridanie.“
4. Pod {{ui:Pridať do}} vyberte položku počtu alebo nechajte {{ui:Novej položky počtu}} a zadajte názov.
5. Vyberte tlačidlo pridania, ktoré uvedie počet: {{ui:Pridať 22 značiek}}. Značky sa objavia v bodoch vloženia bloku a množstvo položky je počet.

Je to jeden krok späť: {{key:Mod+Z}} vezme značky (a novú položku) späť naraz. Odhad, tabuľka a označené PDF s touto položkou zaobchádzajú ako s ktoroukoľvek inou položkou počtu.

### Čo sa počíta

- **Každé vloženie názvu bloku**, bez ohľadu na mierku a uhol, v priestore modelu alebo v priestore papiera. Názvy blokov nerozlišujú veľké a malé písmená.
- **Polia blokov** (MINSERT): každá kópia v poli je jedna.
- **Zanorené bloky.** Blok umiestnený vnútri iného bloku sa počíta v každej úrovni hĺbky. Zoznam hovorí „6 vnútri iných blokov“; zrušte označenie {{ui:Počítať aj bloky vo vnútri iných blokov}}, aby sa počítali len vloženia priamo vo výkrese.
- **Dynamické bloky.** Dynamický blok sa počíta pod svojím názvom, nie pod anonymnými kópiami (`*U12`), ktoré súbor uchováva. Jeho stavy sú vypísané osobitne („Jednoduchý 12, Dvojitý 4“): vyberte stav, aby sa počítali len tie, alebo {{ui:Každý variant}}. Keď súbor nehovorí, aký stav kópia zobrazuje, tieto sa vypíšu ako „(stav neznámy)“.
- **Filter hladiny.** Blok na viacerých hladinách: vyberte jednu pod {{ui:Na hladine}}.

### Čo sa nepočíta

- **Skryté hladiny.** Objekt na hladine, ktorá je v súbore vypnutá alebo zmrazená (alebo ju skryjete v {{ui:Hladiny}}), sa vynechá a riadok uvedie, koľko ich je: „3 na skrytých hladinách vynechané“. Zaškrtnite {{ui:Počítať aj tieto}}, aby sa zahrnuli.
- **Prepojené výkresy, ktoré nie sú otvorené**, sa nepočítajú; okno to uvedie.
- **Objekty naukladané presne na iný objekt rovnakého druhu** sa počítajú ako dva (sú to dva objekty) a okno to uvedie: zvyčajne ide o chybu v kreslení, ktorú stojí za to skontrolovať.

## Čo zobrazuje tento list, alebo celý výkres

- **Čo zobrazuje tento list** počíta objekty, ktoré list ukazuje: na rozložení modelové objekty vnútri jeho výrezov (zmrazená hladina vo výreze sa tam nepočíta) plus vlastné objekty rozloženia.
- **Celý výkres, každý objekt raz** počíta priestor modelu raz, so značkami na karte Model, a nepočíta to, čo viaceré rozloženia zobrazujú znova.

Počítanie toho, čo ukazuje rozloženie, a počítanie toho, čo ukazuje Model, dá pre tie isté objekty rovnaké číslo; nepridávajte oboje do jednej položky.

## Opätovné počítanie

Opätovné počítanie toho istého bloku s tou istou položkou pridá len to, čo je nové: „22 už spočítaných.“ Každá značka predstavuje jeden objekt.

## Podľa hladiny a typu

Na {{ui:Podľa hladiny a typu}} vyberte hladinu a typ objektu (kružnice, lomené čiary, šrafovanie…): „všetky kružnice na E-LITE“. Zaškrtnite {{ui:Počítať aj objekty vo vnútri blokov}}, aby sa zahrnuli aj tie vnútri definícií blokov, na každom mieste, kde je blok vložený.

## Podľa textu

Na {{ui:Podľa textu}} napíšte text, napríklad `A3`, a určte, či ide o presnú zhodu, či text obsahuje, alebo či ide o celé slovo. Počítajú sa textové objekty, viacriadkový text vo viacnásobnej vynášacej čiare a **hodnoty atribútov** blokov (značkový atribút `ITEM = A3` sa nájde); vyberte {{ui:V atribúte}}, aby sa počítal len jeden atribút. Najčastejšie texty sú vypísané na kliknutie.

## Kedy použiť Automatický počet

Použite {{ui:Automatický počet}} pre PDF a pre symboly vo výkrese, ktoré nie sú bloky (nakreslené voľne alebo rozložené). Ak sú nakreslené ako bloky, počítajte ich tu.
