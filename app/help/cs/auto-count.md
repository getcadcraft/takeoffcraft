---
title: Automatické počítání symbolu
summary: Označte jeden symbol, nechte TakeoffCraft najít ostatní na tomto listu nebo na všech otevřených listech, shody zkontrolujte posuvníkem a přidejte je jedním krokem.
keywords: libovolný úhel, pootočený, otočený, jiné měřítko, jiné měřítko, automatické počítání, automatický počet, hledání symbolů, najít symboly, vzor, šablona, shoda, detekce, nástroj počítání
from: fa68a6c1
---

{{ui:Automatické počítání}} najde každou kopii symbolu poté, co označíte jednu. Shody na listu pak zkontrolujete a ty, které přijmete, přidáte jako značky počtu. Je to pomocník, ne záruka: před přidáním vždy zkontrolujte.

## Najděte symboly

1. Vytvořte nebo vyberte položku počtu v seznamu {{ui:Položky}}.
2. Otevřete list, na kterém se symbol objevuje.
3. Na panelu nástrojů zvolte {{ui:Automatické počítání}}, nebo stiskněte {{key:S}}.
   Nahoře na listu se objeví lišta: „Přetáhněte rámeček kolem jednoho symbolu na tomto listu.“
4. Chcete-li hledat na všech otevřených listech, a ne jen na tomto, zaškrtněte {{ui:Hledat na všech otevřených listech}}.
5. Přiblížte tak, aby byl symbol dobře vidět, a pak přetáhněte rámeček těsně kolem jedné jeho kopie. Zahrňte celý symbol; prázdný papír kolem něj se ořízne.
   Lišta ukáže „Hledání…“ s ukazatelem průběhu a tlačítkem {{ui:Zrušit}}. Stránka zůstává pohotová: můžete přibližovat, posouvat a přecházet mezi listy. Výběr jiného nástroje nebo {{key:Esc}} hledání zruší.
6. Po dokončení se shody zobrazí na listu jako rámečky v barvě položky a lišta ukáže souhrn, například „22 shod, 19 k přidání (3 už započteny). Kliknutím na rámeček jej odmítnete nebo obnovíte.“

V {{ui:Automatické počítání}} tažení po listu kreslí rámeček místo posouvání. Chcete-li posouvat, podržte {{key:Space}} a táhněte, nebo táhněte prostředním tlačítkem.

## Zkontrolujte shody

- **Klikněte na rámeček**, chcete-li jej odmítnout. Odmítnutý rámeček je čárkovaný a přeškrtnutý. Klikněte na něj znovu, chcete-li jej obnovit.
- **Posuňte posuvník {{ui:Shoda}}** (50 % až 95 %, začíná na 75 %). Vyšší hodnota ukáže jen těsné shody, nižší volnější. Posuvník jen filtruje nalezené; nehledá znovu.
- **Již započítané**: shody na místě, které už má značku počtu této položky, jsou zpočátku odmítnuty, takže nic nepočítáte dvakrát.
- **Ostatní listy**: pokud jste hledali na všech otevřených listech, přecházejte mezi nimi seznamem listů nebo klávesou {{key:PageDown}} a každý zkontrolujte. Souhrn říká, na kolika listech jsou shody.

## Přidejte je

Zvolte {{ui:Přidat}}. Tlačítko říká, kolik jich je, například „Přidat 19 značek počtu“.
Značky počtu se přidají do středu každého přijatého rámečku: "Přidáno 19 značek počtu k "Duplex receptacle". Ctrl+Z je všechny odebere."

Celá dávka je jeden krok zpět, takže jedno {{key:Mod+Z}} ji odebere.

Chcete-li kontrolu zahodit bez přidání čehokoli, zvolte {{ui:Zahodit}} nebo stiskněte {{key:Esc}}. Výběr jiného nástroje ji také zahodí.

## Co najde a co přehlédne

TakeoffCraft porovnává výkres po bodech (pixelech) s rámečkem kolem symbolu, který jste označili.

- Najde symbol pootočený o 0°, 90°, 180° a 270°. Chcete-li jej najít i v libovolném úhlu, zaškrtněte před nakreslením rámečku na liště automatického počítání políčko {{ui:Libovolný úhel (pomaleji)}}: zkouší každých 15° a pak každý nález doladí na stupeň a půl. Trvá to asi šestkrát déle. Zrcadlený symbol nenajde (pokud nevypadá stejně i zrcadleně).
- Je-li zaškrtnuto {{ui:Hledat na všech otevřených listech}}, hledá se na listu v jiném měřítku ve velikosti, kterou má symbol na tomto listu: svítidlo nakreslené v měřítku na půdorysu 1/8" má poloviční velikost oproti půdorysu 1/4" a stále je nalezeno. Takový list se prohledá také ve velikosti samotného rámečku, pro štítky a symboly vytištěné na každém listu v jedné velikosti. To vyžaduje měřítko na obou listech; list bez měřítka se prohledá jen ve velikosti rámečku.
- Velmi podobné symboly se mohou shodovat navzájem: dvojitá a čtyřnásobná zásuvka nebo dva štítky svítidel, které se liší jedním písmenem. Zvyšujte posuvník, dokud nezůstanou jen správné, a zbytek odmítněte ručně.
- Symbol, který protínají jiné čáry, šrafy nebo text, dosáhne nižší shody a může potřebovat nižší nastavení posuvníku.
- Příliš malé rámečky se odmítnou: "Rámeček je příliš malý. Nakreslete ho kolem celého symbolu." Prázdný rámeček se odmítne také: "Rámeček je téměř prázdný. Nakreslete ho kolem symbolu."
- List, který by byl při velikosti potřebné pro tento symbol velmi velký, se přeskočí a souhrn napíše "1 list byl pro hledání u této velikosti symbolu příliš velký." Označte větší symbol, nebo ten list spočítejte ručně.

Pokud se nic nenajde, stavový řádek napíše: "Žádné shody. Snižte posuvník {{ui:Shoda}}, nebo označte symbol těsněji."

## Rychlost a prohlížeče

Hledání běží na pozadí, takže stránka zůstává pohotová a můžete je kdykoli zrušit. Každý list se nejprve vykreslí v pracovní velikosti přímo na stránce, takže velmi velký list může na chvíli zamrznout. Funguje v aktuálních prohlížečích Chrome, Edge, Firefox a Safari. Hledání na mnoha listech trvá déle; ukazatel průběhu postupuje list po listu. Offline funguje automatické počítání, když lišta aplikace zobrazuje {{ui:Připraveno offline}}: {{ui:Uložit pro offline}} zachová i pracovní proces na pozadí. Viz [Práce offline](common:offline).
