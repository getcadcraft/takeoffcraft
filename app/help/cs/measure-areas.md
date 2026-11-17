---
title: Měření ploch s výřezy
summary: Obkreslete podlahy, stropy a desky, vyřízněte z nich otvory, přidejte zakřivené hrany, kružnice a kulaté výřezy a čtěte plochu a obvod.
keywords: vyplnění místnosti, záplavové vyplnění, malířské vědro, klik uvnitř místnosti, automatická plocha, odečtení, odpočet zpět, sloup, šachta, odpočet z více položek, plocha, mnohoúhelník, obrys, čtvereční stopy, sf, výřez, otvor, odpočet, kružnice, kulatý, oblouk, obvod, podlaha, strop, deska
from: 34648db7
---

Položka plochy měří uzavřenou plochu. Každý obrys může mít vyříznuté otvory (šachtu, sloup, květináč) a jeho hrany mohou být přímé, nebo zakřivené.

Předem: list potřebuje měřítko ([Nastavit měřítko](topic:set-the-scale)) a potřebujete položku plochy ([Vytvoření položek výkazu](topic:create-items)).

## Obkreslení plochy

1. Klikněte na položku plochy pod {{ui:Položky}}.
2. Zvolte {{ui:Plocha}} na panelu nástrojů, nebo stiskněte {{key:A}}.
3. Klikněte postupně na každý roh místnosti nebo desky. Držte {{key:Shift}} pro hrany 0°, 45° a 90°.
   Od třetího bodu se obrys vyplní a stavový řádek ukáže "Plocha" a "obvod". Kolem prvního bodu se objeví malý kroužek.
4. Uzavřete obrys: klikněte na první bod (uvnitř jeho kroužku), stiskněte {{key:Enter}}, dvakrát klikněte, nebo klikněte pravým tlačítkem.
   Plocha se lehce vyplní barvou položky, popíše se svou plochou ve čtverečních stopách a stane se vybranou značkou.

{{key:Backspace}} odebere poslední roh; {{key:Esc}} obrys zahodí.

Obrys, který se protíná sám se sebou, se nepřijme: "The outline crosses itself, so its area would be wrong. Draw it again without crossing." Osmičku nakreslete jako dvě plochy.

## Zakřivené hrany

Během obkreslování zapněte režim oblouku ({{ui:Oblouk}} nebo {{key:R}}). Po rohu klikněte na bod podél křivky a pak tam, kde křivka končí. Chcete-li obrys uzavřít obloukem, udělejte poslední klik na první bod. Plocha a obvod používají přesnou křivku. Stisknutím {{key:R}} znovu přepnete na přímé hrany. Pro pozdější změnu křivky vyberte plochu a přetáhněte kulatou úchytku uprostřed oblouku. Viz [Měření délkových úseků](topic:measure-linear#arcs-and-curved-walls).

## Kružnice

1. U položky plochy zvolte {{ui:Kruh}} nebo stiskněte {{key:O}}.
2. Klikněte na střed.
3. Klikněte na libovolný bod na okraji.
   Při pohybu stavový řádek ukazuje poloměr a plochu. Kružnice se přidá jako značka plochy s přesnou plochou a obvodem.

## Vyplnění místnosti jedním kliknutím

Když jsou místnosti nakresleny jako uzavřené stěny, {{ui:Místnost}} ({{key:B}}) odebere podlahu jedním kliknutím:

1. Vyberte položku plochy (například povrchovou úpravu podlahy) a nastavte listu měřítko.
2. Zvolte {{ui:Místnost}} ve skupině {{ui:Výkaz}}, nebo stiskněte {{key:B}}.
3. Klikněte uvnitř místnosti, na volnou podlahu (ne na čáru nebo popisek).

TakeoffCraft přečte čáry listu, najde prostor kolem kliknutí a obrysuje jej podle vnitřních ploch stěn jako plochu aktuální položky. Dveřní otvory až do šířky **4'-0"** se berou jako uzavřené, takže obrys vede rovně přes dveře; **Nastavení › TakeoffCraft › Vyplnění místnosti uzavírá otvory do** tuto šířku mění (3'-0" až 8'-0"). Názvy místností, nábytek a zařizovací předměty uvnitř místnosti otvory nedělají.

Odmítne to a řekne proč, když:

- klik je na čáře ("That is on a line");
- prostor není uzavřen: otvor širší, než nastavení dovolí, nechá vyplnění vyběhnout k okraji listu. Zvyšte nastavení, nebo obkreslete místnost ručně nástrojem {{ui:Plocha}};
- prostor je malý (symbol, ne místnost).

Když jsou dveře širší než nastavení, vyplnění přeteče do další místnosti a obrysuje obě dohromady: vraťte se zpět ({{key:Mod+Z}}), zvyšte nastavení a klikněte znovu. Obrys zkontrolujte jako každou plochu: přetažením rohů jej opravte. Skenovaný list funguje stejně, ale jeho čáry musí být dost tmavé; světle šedé linky vyplnění nemusí zastavit.

## Vyříznutí otvoru z plochy

1. Zvolte {{ui:Vybrat}} ({{key:V}}) a klikněte na plochu. Zobrazí čtvercové úchytky v rozích.
2. Zvolte {{ui:Výřez}} na panelu nástrojů (nebo stiskněte {{key:X}}), případně {{ui:Přidat výřez}} pod **Vybraná značka**.
3. Klikněte na rohy otvoru uvnitř plochy. I zde funguje režim oblouku.
4. Uzavřete jej jako plochu: klikněte na první bod, stiskněte {{key:Enter}}, dvakrát klikněte, nebo klikněte pravým tlačítkem.
   Otvor zůstane nevyplněný a stavový řádek říká "Výřez přidán. Nakreslete další, nebo stiskněte Esc."
5. Nakreslete další otvory do stejné plochy, nebo stiskněte {{key:Esc}}.

Pro kulatý otvor zvolte {{ui:Přidat kruhový výřez}} pod **Vybraná značka**, klikněte na jeho střed a pak na bod na jeho okraji.

Výřez musí ležet celý uvnitř plochy a nesmí se překrývat s jiným výřezem. Jinak jej TakeoffCraft odmítne: "A cut-out has to sit fully inside the area." nebo "Cut-outs cannot overlap each other."

Chcete-li poslední otvor zase odstranit, zvolte {{ui:Odebrat poslední výřez}}.

## Odpočty zpět: sloupy, šachty a otvory odečtené z více položek

Výřez patří jedné značce plochy. **Odpočet zpět** se nakreslí jednou a odečte se od každé plochy, kterou překrývá, u položek, které zvolíte: nakreslete sloupy jednou a odečtou se od povrchové úpravy podlahy, stropu i desky najednou.

1. Vytvořte pro ně položku plochy, například "Sloupy".
2. V jejím nastavení položky zaškrtněte **Odpočet zpět: její značky odeberou svou plochu z ostatních položek**. Objeví se seznam vašich dalších položek ploch, všechny zaškrtnuté: odškrtněte ty, na které se odpočty zpět nemají vztahovat (třeba barvu na stěnách).
3. Obkreslete sloupy nástrojem {{ui:Plocha}} nebo {{ui:Kruh}}, jako obvykle. Každý je kreslen čárkovaně.

Každá značka plochy zaškrtnuté položky na stejném listu ztratí část, kterou pokrývá odpočet zpět: celý odpočet, když leží uvnitř, jen překrývající část, když přechází přes hranu, a nic uvnitř výřezu. Panel vybrané plochy ukazuje **Odpočty zpět** a zbývající plochu. Množství položky, její vzorce sestav, náklady, 3D kontrolní pohled i export používají zbývající plochu; poznámky rozpočtu říkají, kolik odpočty zpět odebraly. Samotná položka odpočtu počítá svou vlastní plochu (nechte její náklady na nule, pokud ji neoceňujete).

Odpočet zpět musí být **konvexní**: obdélník, kružnice nebo jakýkoli obrys bez vnitřního rohu. TakeoffCraft nakreslení nekonvexního tvaru odmítne; šachtu tvaru L nakreslete jako dva odpočty zpět. Odpočty zpět nemohou mít výřezy a dva odpočty zpět, které se navzájem překrývají, se počítají oba.

Obvod (`P`) se nemění: odpočty zpět odečítají jen plochu.

## Čtení plochy

Vyberte plochu. **Vybraná značka** ukazuje:

| Řádek | Význam |
|---|---|
| Plocha | Čistá plocha: obrys minus výřezy. Tuto položka počítá. |
| Obrys | Hrubá plocha uvnitř obrysu (zobrazí se, když jsou výřezy). |
| Výřezy | Kolik je otvorů a jejich celková plocha. |
| Obvod | Délka hrany obrysu **plus** hrany každého výřezu ("s výřezy"). |

Obvod záměrně zahrnuje hrany výřezů, například pro bednění hran nebo podklad, který vede i kolem otvoru. Potřebujete-li jen vnější hranu, nechte otvory z té položky pryč, nebo měřte vnější hranu jako délkový úsek.

Jednotka položky {{ui:Jednotka}} určuje, jak se celkem vykazuje: SF, SY nebo m². Panel **Vybraná značka** a stavový řádek vždy ukazují plochu v SF.

## Oprava plochy

- **Přesun rohu**: vyberte plochu a přetáhněte rohovou úchytku (i otvory mají úchytky). Pokud by nový tvar protínal sám sebe, nebo vytlačil otvor ven, roh se vrátí: "The point was put back."
- **Přesun do jiné položky**: vyberte jinou položku plochy v seznamu **Položka** pod **Vybraná značka**.
- **Smazání**: {{key:Delete}}, {{ui:Delete}} na panelu nástrojů v nabídce {{ui:Další}}, nebo {{ui:Smazat značku}}.

## Hloubka pro objemy

Dejte položce plochy {{ui:Hloubka}} (například `0'-4"` pro desku) a v komponentě sestavy použijte `A * H / 27` pro krychlové yardy. Viz [Sestavy a vzorce](topic:assemblies).
