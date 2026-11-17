---
title: Nastavení aplikace TakeoffCraft
summary: Zobrazit palce na 1/16, 1/8 nebo 1/4, začínat nové položky s procentem odpadu, zvolit, kde začíná posuvník Automatického počítání, přichytávat k čarám výkresu nebo k 45° bez držení Shiftu, nastavit, jak široké dveře uzavírá Vyplnění místnosti, a zvolit indikátor rohu 3D pohledu.
keywords: nastavení, předvolby, možnosti, přesnost, zlomky, palce, zaokrouhlení, odpad, výchozí odpad, automatické počítání, práh, shoda, posuvník, přichytit, 45, úhel, shift, kostka pohledu, ikona os, indikátor rohu, 3d
from: bca3f0ed
---

Otevřete {{ui:Nastavení}} ozubeným kolečkem v horní liště nebo klávesovou zkratkou {{key:Mod+,}}. První karta, {{ui:TakeoffCraft}}, obsahuje nastavení patřící této aplikaci; {{ui:Obecné}} obsahuje ta, která sdílejí všechny aplikace CadCraftu (motiv, panely, panel nástrojů). Nastavení TakeoffCraftu existují jen v této aplikaci: měníte je tady a tento prohlížeč si je pamatuje. {{ui:Obnovit nastavení TakeoffCraftu}} je vrátí do výchozího stavu.

## Stopy a palce

Zobrazit délky na nejbližší **1/16"** (výchozí), **1/8"** nebo **1/4"**. Změní se, jak délky vypadají na listu, v panelech, v množstvích i ve stavovém řádku.

Zaokrouhluje se jen zobrazení. Množství, náklady a exporty se počítají z přesných délek a exporty vždy ukazují 1/16".

## Odpad na začátek

Procento odpadu, se kterým každá nová položka začne: 0% (výchozí), 2%, 3%, 5%, 7.5%, 10%, 15% nebo 20%. Pro každou položku můžete stále zadat jiný odpad, v editoru položky nebo přímo v tabulce množství. Položky, které už máte, si ponechají svůj odpad.

## Automatické počítání: kde začíná posuvník shody

Kde je posuvník {{ui:Shoda}} na konci hledání [Automatické počítání](topic:auto-count), od 50% do 95%; výchozí je 75%. Nižší hodnota nabídne více podobných objektů k odmítnutí; vyšší jich nabídne méně. Posuvník můžete během každé kontroly stále posunout.

## Přichytit k čarám výkresu

Zapnuto ve výchozím stavu. Když měříte nebo kalibrujete, bod blízko čáry PDF přeskočí na její konec, střed, průsečík nebo nejbližší bod na ní. {{key:F3}} a {{ui:Přichytit}} ve stavovém řádku je také zapínají a vypínají. Více: [Přichycení k čarám výkresu](topic:snap-to-the-drawing).

## Vyplnění místnosti: jak široký otvor uzavírá

{{ui:Vyplnění místnosti uzavírá otvory až do šířky}} nastavuje, jak široký dveřní otvor nebo mezeru nástroj {{ui:Místnost}} považuje za uzavřený: od 3'-0" do 8'-0", výchozí 4'-0". Širší než vaše nejširší dveře nechá místnost přejít do další; užší než dveře nechá místnost otevřenou. Viz [Vyplnění místnosti jedním kliknutím](topic:measure-areas#fill-a-room-with-one-click).

## Přichytit pod úhlem 45° bez držení Shiftu

Ve výchozím stavu vypnuto. Když je zapnuto, úsečky, obrysy, výřezy a tažené rohy jdou pod 0°, 45°, 90° nebo 135° od posledního bodu bez držení {{key:Shift}}; držte {{key:Shift}}, abyste klikli pod libovolným úhlem. Stavový řádek pak říká "Přichytává k 45°; Shift uvolní úhel". Bod, na který kliknete na křivce oblouku, a kružnice se nikdy nepřichytávají; konec oblouku ano.

## Velikost značek počtu

Jak velké jsou tečky počtu: {{ui:Extra malá}}, {{ui:Malá}}, {{ui:Střední}} (výchozí: velikost, jakou tečky vždy měly), nebo {{ui:Velká}}. Velikost se na obrazovce drží při každém přiblížení a označené PDF kreslí každou tečku na papíře stejně velkou, bez ohledu na velikost listu, takže PDF při 100% vypadá jako obrazovka. Více: [Počítání ručně](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indikátor rohu

Jen pro [3D kontrolní pohled](topic:check-in-3d): {{ui:Kostka pohledu}} (výchozí: kostka vpravo nahoře, na kterou klikáte, tažením ji otáčíte), {{ui:Ikona os}} (malá značka X, Y, Z vpravo dole), nebo {{ui:Žádný}}. Změní se okamžitě a je uchován v tomto prohlížeči. Plochý list jej nikdy nezobrazuje.

## Nástroj cesty: největší mezera, kterou spojí

{{ui:Nástroj cesty: největší mezera ke spojení}} určuje, jak daleko od sebe mohou být dva konce čar a stále se počítat jako jedna cesta, v bodech PDF (0.05 až 60; výchozí 1.5). Čáry výkresu často končí kousek od sebe. Větší hodnota spojuje více; menší ponechá čáry odděleně. {{key:[}} a {{key:]}} ji mění při výběru a toto pole to sleduje. Viz [Výběr čar](topic:pick-the-lines).
