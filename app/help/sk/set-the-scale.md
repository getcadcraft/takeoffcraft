---
title: Nastavenie mierky
summary: Priraďte každému listu mierku pomocou predvoľby alebo kalibrácie na známom rozmere, skontrolujte ju a pochopte, prečo listy bez mierky nie sú v súčtoch.
keywords: zistiť mierku, čítať mierku, mierka z textu, všetky listy, mierka, kalibrovať, predvoľba, skontrolovať mierku, overiť, známy rozmer, bez mierky, žiadna mierka, pomer, nastaviť mierku
from: 8f0148e6
---

Každý list má vlastnú mierku. Nastavíte ju vy alebo ju nechajte prečítať z textu listov (pozri nižšie) a skontrolujte ju. Kým list mierku nemá, {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} a {{ui:Cut-out}} na ňom nemerajú. {{ui:Count}} a {{ui:Auto count}} fungujú aj bez mierky.

Zoznam listov zobrazuje mierku každého listu alebo **Bez mierky**. Lišta pod otvoreným listom hovorí to isté.

## Použitie predvoľby (keď je PDF vytlačené v skutočnej veľkosti)

1. Otvorte list.
2. Otvorte zoznam {{ui:Preset}} v skupine {{ui:Scale}}.
3. Vyberte mierku vytlačenú na výkrese, napríklad `1/8" = 1'-0"` v časti Architektonické.
   Stavový riadok zobrazí "Mierka pre tento list: 1/8" = 1'-0"."
4. Skontrolujte ju (nižšie).

Predvoľba predpokladá, že PDF má skutočný formát papiera, pre ktorý bol výkres navrhnutý. Ak niekto vytvoril PDF s "prispôsobiť stránke" alebo ide o sadu v polovičnej veľkosti, predvoľba je nesprávna. Namiesto nej kalibrujte.

Úplný zoznam nájdete v [Predvoľby mierky](topic:scale-presets).

## Čítanie mierok z textu listov

Väčšina výkresov uvádza svoju mierku: `SCALE: 1/4" = 1'-0"` v popisovom poli, `1:100` pod pohľadom. TakeoffCraft ju dokáže prečítať a nastaviť všetky listy naraz.

1. Otvorte zoznam {{ui:Preset}} a vyberte {{ui:From the sheets' text…}} (hore).
2. Zoznam zobrazí každý list: jeho aktuálnu mierku a čo hovorí jeho text — **Uvádza 1/4" = 1'-0"**, **Mierka v jeho texte nie je**, alebo **Uvádza, že sa nemá merať** (NTS).
3. Listy bez mierky, ktoré ju uvádzajú, sú zaškrtnuté. Zaškrtnite alebo zrušte ľubovoľné a potom vyberte {{ui:Set the ticked scales}}. Jedným {{key:Mod+Z}} sa všetko vráti späť.
4. Skontrolujte jeden rozmer na každom liste pomocou {{ui:Check}} (nižšie): predvoľba je správna iba vtedy, ak je PDF vytlačené v skutočnej veľkosti.

Rozpoznáva architektonický (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inžiniersky (`1" = 20'`) a metrický (`1:50`) zápis, ktorý zodpovedá [predvoľbe](topic:scale-presets). Ak list uvádza viac než jednu mierku (plán so zväčšenými detailmi), použije sa tá, ktorú uvádza najčastejšie, a tá za slovom SCALE sa počíta dvakrát; ostatné sa zobrazia červenou farbou, aby ste ich mohli skontrolovať. Naskenovaný list nemá text: jeho mierku nastavte ručne.

## Kalibrácia na známom rozmere

Použite to, keď nemáte dôveryhodnú vytlačenú mierku, sada bola zmenená veľkosťou alebo list hovorí "nie v mierke", ale obsahuje rozmery.

1. Otvorte list a priblížte dlhý rozmer, ktorý poznáte, napríklad rozstup osí alebo celkový rozmer budovy. Čím dlhší, tým presnejší.
2. Vyberte {{ui:Calibrate}} v skupine {{ui:Scale}} alebo stlačte {{key:K}}.
3. Kliknite na jeden koniec rozmeru. Pri každom konci priblížte kvôli presnosti; medzi kliknutiami môžete približovať a posúvať.
4. Kliknite na druhý koniec. Podržte {{key:Shift}}, aby čiara zostala na 0°, 45° alebo 90°.
   Otvorí sa dialógové okno **Kalibrovať tento list**.
5. Do poľa **Skutočná vzdialenosť** zadajte skutočnú dĺžku, napríklad `24'-6 1/2"`, `24.5` (desatinné stopy), `30"` alebo `7.5 m`. Pozri [Formáty zadávania dĺžky, sadzby a percenta](topic:entry-formats).
6. Vyberte {{ui:Set the scale}}.
   Stavový riadok zobrazí mierku ako "1" = (n)'" a ak je v rozmedzí 0.5 % od predvoľby, uvedie, ktorej, napríklad "čo zodpovedá 1/4" = 1'-0" (vyberte túto predvoľbu pre presnú mierku)".
   TakeoffCraft sa vráti k nástroju {{ui:Select}}.

Keď kalibrácia zodpovedá predvoľbe, výber tejto predvoľby dá presnú mierku namiesto mierky, ktorá závisí od toho, kam ste klikli.

## Kontrola mierky

Novú mierku vždy overte na druhom rozmere.

1. Vyberte {{ui:Check}} v skupine {{ui:Scale}} alebo stlačte {{key:D}}.
2. Kliknite na oba konce rozmeru vytlačeného na výkrese.
   Stavový riadok zobrazí "Kontrola: 12'-6"" s rovnakou dĺžkou v desatinných stopách a metroch a kontrolná čiara zostane na liste s dĺžkou.
3. Porovnajte ju s vytlačeným rozmerom. Ak sa líši, kalibrujte na dlhšom rozmere.

Kontrolnú čiaru zrušíte stlačením {{key:Esc}}.

## Zmena mierky

Vyberte inú predvoľbu alebo znova kalibrujte. Ak má list už merania, TakeoffCraft sa opýta **Zmeniť mierku tohto listu?** a uvedie, koľko meraní sa znova zmeria. Vyberte {{ui:Change the scale}}. Každý úsek a plocha na liste sa znova zmerajú v novej mierke. Môžete to vrátiť späť pomocou {{key:Mod+Z}}.

## Prečo listy bez mierky nie sú počítané ako nula

Značka na liste bez mierky nemá skutočnú dĺžku ani plochu. TakeoffCraft ju nikdy nepočíta ako nulu, lebo by to nenápadne znížilo váš rozpočet. Namiesto toho:

- tieto značky vynechá zo súčtov,
- pri položke v {{ui:Quantities}} zobrazí "+(n) bez mierky",
- v hlavičke tabuľky zobrazí "Neúplné: (n) značiek na listoch bez mierky (nie je v súčtoch)",
- zapíše počet do stĺpca poznámok exportovanej tabuľky.

To sa môže stať, keď otvoríte projekt, v ktorom sa mierky nikdy nenastavili. Nastavte listu mierku a značky sa hneď spočítajú. Počítané značky sa počítajú vždy; nepotrebujú mierku.

## Tipy

- Nastavte mierku na každom liste, ktorý budete merať, ešte pred začiatkom. V zozname listov vyhľadajte **Bez mierky**, aby ste našli zvyšné (vyhľadávacie pole hľadá v názvoch listov, nie v mierkach).
- Detaily a zväčšené pôdorysy na tom istom liste často používajú inú mierku. TakeoffCraft má na list jednu mierku; pozri [Čo ešte nie je hotové](topic:not-built-yet).
- Metrické výkresy: vyberte metrickú predvoľbu, napríklad `1:100`, alebo kalibrujte metrickou vzdialenosťou, napríklad `6000 mm`.
