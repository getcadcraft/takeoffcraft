---
title: Merať plochy s výrezmi
summary: Obrysujte podlahy, stropy a dosky, vyrežte z nich diery, pridajte zakrivené hrany, kružnice a okrúhle výrezy a čítajte plochu a obvod.
keywords: vyplnenie miestnosti, záplavové vyplnenie, výplň, kliknutie vnútri miestnosti, automatická plocha, spätný odpočet, back-out, stĺp, šachta, odpočet z viacerých položiek, plocha, mnohouholník, obrys, štvorcové stopy, sf, výrez, diera, odpočet, kružnica, okrúhly, oblúk, obvod, podlaha, strop, doska
from: 34648db7
---

Položka plochy meria uzavretú plochu. Každý obrys môže mať z neho vyrezané diery (šachta, stĺp, záhon) a jeho hrany môžu byť rovné alebo zakrivené.

Predtým než začnete: list potrebuje mierku ([Nastaviť mierku](topic:set-the-scale)) a potrebujete položku plochy ([Vytvoriť položky výkazu](topic:create-items)).

## Obrysovanie plochy

1. Kliknite na položku plochy pod {{ui:Položky}}.
2. Zvoľte {{ui:Plocha}} na paneli nástrojov alebo stlačte {{key:A}}.
3. Kliknite na každý roh miestnosti alebo dosky postupne. Podržte {{key:Shift}} pre hrany 0°, 45° a 90°.
   Od tretieho bodu sa obrys vyplní a stavový riadok zobrazí "Plocha" a "obvod". Okolo prvého bodu sa objaví malý krúžok.
4. Uzavrite obrys: kliknite na prvý bod (vnútri jeho krúžku), stlačte {{key:Enter}}, dvakrát kliknite alebo kliknite pravým tlačidlom.
   Plocha sa jemne vyplní farbou položky, označí sa v štvorcových stopách a stane sa vybranou značkou.

{{key:Backspace}} odstráni posledný roh; {{key:Esc}} zahodí obrys.

Obrys, ktorý sa pretína sám so sebou, sa odmietne: "Obrys sa pretína sám so sebou, takže by plocha bola nesprávna. Nakreslite ho znova bez pretínania." Tvar ósmičky nakreslite namiesto toho ako dve plochy.

## Zakrivené hrany

Počas obrysovania zapnite režim oblúka ({{ui:Oblúk}} alebo {{key:R}}). Po rohu kliknite na bod pozdĺž krivky a potom tam, kde krivka končí. Ak chcete obrys uzavrieť krivkou, urobte posledné kliknutie na prvý bod. Plocha a obvod používajú presnú krivku. Pre rovné hrany stlačte {{key:R}} znova. Ak chcete krivku zmeniť dodatočne, vyberte plochu a potiahnite okrúhlu rúčku v strede oblúka. Pozrite si [Merať lineárne úseky](topic:measure-linear#arcs-and-curved-walls).

## Kružnica

1. S položkou plochy zvoľte {{ui:Kružnica}} alebo stlačte {{key:O}}.
2. Kliknite na stred.
3. Kliknite na ľubovoľný bod na okraji.
   Pri pohybe stavový riadok zobrazuje polomer a plochu. Kružnica sa pridá ako značka plochy s presnou plochou a obvodom.

## Vyplniť miestnosť jedným kliknutím

Keď sú miestnosti nakreslené ako uzavreté steny, {{ui:Miestnosť}} ({{key:B}}) odoberie podlahu jedným kliknutím:

1. Vyberte položku plochy (napríklad podlahovú úpravu) a zadajte mierku listu.
2. Zvoľte {{ui:Miestnosť}} v skupine {{ui:Výkaz výmer}} alebo stlačte {{key:B}}.
3. Kliknite vnútri miestnosti, do voľnej podlahy (nie na čiaru alebo popisok).

TakeoffCraft prečíta čiary listu, nájde priestor okolo kliknutia a obrysuje ho pozdĺž vnútorných povrchov stien ako plochu aktuálnej položky. Dverové otvory až do **4'-0"** sa považujú za uzavreté, takže obrys ide rovno cez dvere. **Nastavenia › TakeoffCraft › Vyplnenie miestnosti uzavrie otvory do** mení túto šírku (3'-0" až 8'-0"). Názvy miestností, nábytok a zariadenia vnútri miestnosti nevytvárajú diery.

Odmietne a povie prečo, keď:

- kliknutie je na čiare ("Je to na čiare");
- priestor nie je uzavretý: otvor širší než nastavenie nechá vyplnenie vybehnúť na okraj listu. Zvýšte nastavenie alebo obrysujte túto miestnosť ručne pomocou {{ui:Plocha}};
- priestor je malý (symbol, nie miestnosť).

Keď je dvere širšie než nastavenie, vyplnenie prejde do ďalšej miestnosti a obrysuje obe spolu. Vráťte to ({{key:Mod+Z}}), zvýšte nastavenie a kliknite znova. Obrys skontrolujte ako každú plochu: opravte ho potiahnutím jeho rohov. Skenovaný list funguje rovnako, ale jeho čiary musia byť dosť tmavé; svetlo sivé čiary môžu vyplnenie nezastaviť.

## Vyrezanie diery z plochy

1. Zvoľte {{ui:Vybrať}} ({{key:V}}) a kliknite na plochu. Zobrazí rohové štvorcové rúčky.
2. Zvoľte {{ui:Výrez}} na paneli nástrojov (alebo stlačte {{key:X}}), alebo {{ui:Pridať výrez}} pod **Vybraná značka**.
3. Kliknite na rohy diery vnútri plochy. Režim oblúka funguje aj tu.
4. Uzavrite ju ako plochu: kliknite na jej prvý bod, stlačte {{key:Enter}}, dvakrát kliknite alebo kliknite pravým tlačidlom.
   Diera zostane nevyplnená a stavový riadok hovorí "Výrez pridaný. Nakreslite ďalší alebo stlačte Esc."
5. Nakreslite ďalšie diery v tej istej ploche, alebo stlačte {{key:Esc}}.

Pre okrúhlu dieru zvoľte {{ui:Pridať okrúhly výrez}} pod **Vybraná značka**, kliknite na jej stred a potom na bod na jej okraji.

Výrez musí byť celý vnútri plochy a nesmie sa prekrývať s iným výrezom. Inak ho TakeoffCraft odmietne: "Výrez musí byť celý vnútri plochy." alebo "Výrezy sa nemôžu navzájom prekrývať."

Posledný otvor odstránite zvolením {{ui:Odstrániť posledný výrez}}.

## Spätné odpočty: stĺpy, šachty a otvory odpočítané z viacerých položiek

Výrez patrí jednej značke plochy. **Spätný odpočet** sa nakreslí raz a odpočíta sa od každej plochy, cez ktorú prechádza, pre položky, ktoré vyberiete: nakreslite stĺpy raz a odídu z podlahovej úpravy, stropu a dosky naraz.

1. Vytvorte položku plochy pre ne, napríklad "Stĺpy".
2. V jej nastaveniach položky zaškrtnite **Spätný odpočet: jeho značky odpočítajú svoju plochu od ostatných položiek**. Objaví sa zoznam vašich ostatných položiek plochy, všetky zaškrtnuté. Odškrtnite tie, ktorých sa spätné odpočty nemajú dotýkať (napríklad náter na stenách).
3. Stĺpy zmerajte pomocou {{ui:Plocha}} alebo {{ui:Kružnica}}, ako obvykle. Každý sa nakreslí prerušovane.

Každá značka plochy zaškrtnutej položky na tom istom liste stratí časť, ktorú pokrýva spätný odpočet: celý spätný odpočet, keď leží vnútri, len prekrývajúcu sa časť, keď prechádza cez hranu, a nič vnútri výrezu. Panel vybranej plochy zobrazuje **Spätné odpočty** a zostávajúcu plochu. Množstvo položky, jej vzorce zostavy, náklady, 3D kontrolný pohľad a export používajú zostávajúcu plochu; poznámky odhadu hovoria, koľko spätné odpočty odpočítali. Samotná položka spätného odpočtu počíta svoju vlastnú plochu (ak ju neoceňujete, nechajte jej náklady na nule).

Spätný odpočet musí byť **konvexný**: obdĺžnik, kružnica alebo ľubovoľný obrys bez vnútorného rohu. TakeoffCraft odmietne nakresliť nekonvexný; šachtu v tvare L nakreslite ako dva spätné odpočty. Spätné odpočty nemôžu mať výrezy a dva spätné odpočty, ktoré sa navzájom prekrývajú, sa počítajú obidva.

Obvod (`P`) sa nemení: spätné odpočty odpočítavajú len plochu.

## Čítanie plochy

Vyberte plochu. **Vybraná značka** zobrazí:

| Riadok | Význam |
|---|---|
| Plocha | Čistá plocha: obrys mínus výrezy. Toto počíta položka. |
| Obrys | Hrubá plocha vnútri obrysu (zobrazí sa, keď sú výrezy). |
| Výrezy | Koľko je dier a ich celková plocha. |
| Obvod | Dĺžka hrany obrysu, **plus** hrany každého výrezu ("s výrezmi"). |

Obvod zahŕňa hrany výrezov zámerne, napríklad pre bednenie hrán alebo základ, ktorý obieha aj okolo diery. Ak potrebujete len vonkajšiu hranu, nechajte diery mimo tej položky alebo zmerajte vonkajšiu hranu ako lineárny úsek.

{{ui:Jednotka}} položky určuje, ako sa súčet uvádza: SF, SY alebo m². Panel **Vybraná značka** a stavový riadok vždy zobrazujú štvorcové stopy.

## Oprava plochy

- **Presun rohu**: vyberte plochu a potiahnite rohovú rúčku (diery majú tiež rúčky). Ak by nový tvar pretínal sám seba alebo vytlačil dieru von, roh sa vráti: "Bod bol vrátený."
- **Presun do inej položky**: vyberte inú položku plochy v zozname **Položka** pod **Vybraná značka**.
- **Zmazanie**: {{key:Delete}}, {{ui:Zmazať}} na paneli nástrojov v ponuke {{ui:Viac}}, alebo {{ui:Zmazať značku}}.

## Hĺbka pre objemy

Dajte položke plochy {{ui:Hĺbka}} (napríklad `0'-4"` pre dosku) a v komponente zostavy použite `A * H / 27`, aby ste dostali kubické yardy. Pozrite si [Zostavy a vzorce](topic:assemblies).
