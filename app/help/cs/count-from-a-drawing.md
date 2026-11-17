---
title: Počítání z výkresu
summary: Počítejte bloky, objekty na vrstvě nebo text přímo z DWG nebo DXF: přesně, včetně vnořených bloků, variant dynamických bloků a polí bloků, v jednom kroku zpět.
keywords: počítat z výkresu, počet z CAD, počet bloků, počítat bloky, vložit, název bloku, vnořené bloky, dynamický blok, varianta, minsert, pole, vrstva, typ entity, kružnice, text, atribut, štítek, skryté vrstvy, přesný počet, jak na to, dveře, armatury
from: 5060e24e
---

{{ui:Počet z CAD}} na liště listu (příkaz **Počítat z výkresu** v ostatních stylech nabídek) spočítá to, co DWG nebo DXF uvádí, že tam je. Kde {{ui:Automatické počítání}} hledá obrázek symbolu a může jeden přehlédnout nebo najít falešný, toto počítá objekty: každé vložení bloku s názvem `DOOR-36` je jedny dveře. Nejprve otevřete výkres: [Otevření výkresu DWG nebo DXF](topic:open-a-drawing).

## Počítání bloku

1. Otevřete list výkresu. {{ui:Počet z CAD}} je na liště listu.
2. Zvolte jej. Okno vypíše bloky s počtem každého z nich. Hledejte podle názvu a pak vyberte jeden.
3. Zkontrolujte řádek pod seznamem: „22 nalezeno, 22 k přidání.“
4. Pod {{ui:Přidat do}} vyberte položku počtu, nebo ponechte {{ui:Nová položka počtu}} a zadejte název.
5. Zvolte tlačítko přidání, které uvádí počet: {{ui:Přidat 22 značek}}. Značky se objeví v bodech vložení bloku a množství položky je počet.

Je to jeden krok zpět: {{key:Mod+Z}} odebere značky (a novou položku) společně. Odhad, tabulka i označené PDF s položkou zacházejí jako s jakoukoli jinou položkou počtu.

### Co se počítá

- **Každé vložení názvu bloku**, bez ohledu na měřítko a úhel, v prostoru modelu i v prostoru papíru. Názvy bloků nerozlišují velká a malá písmena.
- **Pole bloků** (MINSERT): každá kopie v poli je jeden kus.
- **Vnořené bloky.** Blok umístěný uvnitř jiného bloku se počítá v každé hloubce. Seznam píše „6 uvnitř jiných bloků“; odškrtněte {{ui:Počítat i bloky uvnitř jiných bloků}}, abyste počítali jen vložení umístěná přímo ve výkresu.
- **Dynamické bloky.** Dynamický blok se počítá pod svým vlastním názvem, ne pod anonymními kopiemi (`*U12`), které soubor uchovává. Jeho stavy jsou uvedeny zvlášť („Single 12, Double 4“): vyberte stav, aby se počítaly jen ty, nebo {{ui:Každá varianta}}. Pokud soubor neuvádí, který stav kopie zobrazuje, jsou uvedeny jako „(stav není znám)“.
- **Filtr vrstvy.** Blok na několika vrstvách: vyberte jednu pod {{ui:Na vrstvě}}.

### Co se nepočítá

- **Skryté vrstvy.** Objekt na vrstvě, která je v souboru vypnuta nebo zmrazena (nebo kterou jste skryli v {{ui:Vrstvy}}), se vynechá a řádek uvede, kolik jich je: „3 na skrytých vrstvách vynechány“. Zaškrtněte {{ui:Počítat i je}}, abyste je zahrnuli.
- **Propojené výkresy, které nejsou otevřeny**, se nepočítají; okno to uvede.
- **Objekty naskládané přesně na jiný objekt stejného druhu** se počítají jako dva (jsou to dva objekty) a okno to uvede: obvykle jde o kreslířský přehmat, který stojí za kontrolu.

## Co ukazuje tento list, nebo celý výkres

- **Co ukazuje tento list** počítá objekty, které list zobrazuje: na rozvržení objekty modelu uvnitř jeho výřezů (vrstva zmrazená ve výřezu se tam nepočítá) plus vlastní objekty rozvržení.
- **Celý výkres, každý objekt jednou** počítá prostor modelu jednou, se značkami na listu Model, a nepočítá to, co několik rozvržení zobrazuje znovu.

Počítání toho, co ukazuje rozvržení, a počítání toho, co ukazuje Model, dá pro tytéž objekty stejné číslo; nepřidávejte obojí do jedné položky.

## Počítání počtů znovu

Počítání stejného bloku znovu se stejnou položkou přidá jen to, co je nové: „22 již započítáno.“ Každá značka představuje jeden objekt.

## Podle vrstvy a typu

Na {{ui:Podle vrstvy a typu}} vyberte vrstvu a typ objektu (kružnice, mnohočáry, šrafy…): „všechny kružnice na E-LITE“. Zaškrtněte {{ui:Počítat i objekty uvnitř bloků}}, abyste zahrnuli i ty uvnitř definic bloků, na každém místě, kde je blok vložen.

## Podle textu

Na {{ui:Podle textu}} napište text, například `A3`, a určete, zda má být přesně takový, zda jej obsahuje, nebo zda jde o celé slovo. Textové objekty, víceúrovňový text a **hodnoty atributů** bloků se počítají všechny (štítek atributu `ITEM = A3` se najde); vyberte {{ui:V atributu}}, abyste počítali jen jeden atribut. Nejčastější texty jsou vypsány ke kliknutí.

## Kdy místo toho použít Automatické počítání

Použijte {{ui:Automatické počítání}} pro PDF a pro symboly ve výkresu, které nejsou bloky (nakreslené volně nebo rozložené). Nakreslené jako bloky počítejte zde.
