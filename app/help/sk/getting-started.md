---
title: Začíname s TakeoffCraft
summary: Čo TakeoffCraft robí, kde beží a Vaša prvá zmeraná a oceňená položka zo sady plánov vo formáte PDF.
keywords: začíname, prvý výkaz výmer, rýchly štart, úvod, rozpočet, výkaz množstiev, sada plánov, pdf
from: 3b9da1fb
---

TakeoffCraft meria sady plánov, súbory PDF a výkresy DWG alebo DXF a mení merania na oceňený rozpočet. Otvoríte súbory (výkres sa počíta priamo z jeho blokov: pozrite [Otvorenie výkresu DWG alebo DXF](topic:open-a-drawing)), každému listu dáte mierku (výkres si prináša vlastnú), vytvoríte **položky** (typ múru, povrchovú úpravu podlahy, zariadenie) a klikaním na listy ich odmeriate. Množstvá, náklady a celková suma zákazky sa aktualizujú priebežne. Rozpočet môžete exportovať ako tabuľku a kópiu súborov PDF s nakresleným výkazom výmer.

Ak ste robili výkaz výmer v iných programoch, prečítajte si ďalej [Ak prichádzate z iného softvéru na výkaz výmer](topic:coming-from). Niektoré veci tu fungujú inak.

## Kde beží

TakeoffCraft beží vo Vašom webovom prehliadači. Otvorte TakeoffCraft a obrazovka je hneď pripravená; nič sa neinštaluje.

- **Vaše súbory PDF zostávajú vo Vašom počítači.** Otvára ich prehliadač a nikdy sa nenahrávajú. Uloženie je stiahnutie.
- Funguje v aktuálnych Chrome, Edge, Firefox a Safari. Pozrite [Prehliadače a počítače](common:browsers).
- Funguje bez pripojenia na internet, keď vyberiete {{ui:Uložiť na offline použitie}} v paneli aplikácie a hlási {{ui:Pripravené offline}}. Pozrite [Práca offline](common:offline).
- Ukladanie do cloudu zatiaľ nie je k dispozícii. Aplikácia pre počítač: TakeoffCraft je v CadCraft Studio, spolu so ďalšími siedmimi aplikáciami.

## Váš prvý výkaz výmer v desiatich krokoch

Tento postup zmeria jeden typ múru a ocení ho. Zaberie pár minút na ľubovoľnom pláne, ktorý máte.

1. Vyberte {{ui:Otvoriť plány}} v skupine {{ui:Súbor}} na paneli nástrojov (alebo stlačte {{key:Mod+O}}), vyberte jedno alebo viac PDF a zvoľte Otvoriť. Súbory PDF môžete aj pustiť kamkoľvek na stranu.
   Listy sa objavia vľavo a prvý list sa otvorí v strede.
2. Nájdite vytlačenú mierku listu v jeho popisovom poli alebo pod názvom výkresu.
3. Otvorte zoznam {{ui:Predvoľba}} v skupine {{ui:Mierka}} a vyberte túto mierku, napríklad `1/4" = 1'-0"`.
   Panel dole pod listom teraz hlási „Mierka 1/4" = 1'-0"“.
4. Vyberte {{ui:Kontrola}} (alebo stlačte {{key:D}}) a kliknite na dva konce rozmeru vytlačeného na výkrese.
   Údaj v stavovom riadku vľavo dole by sa mal zhodovať s vytlačeným rozmerom. Ak nie, pozrite [Nastavenie mierky](topic:set-the-scale).
5. V paneli {{ui:Položky}} vpravo vyberte {{ui:Nová položka}}, napíšte názov ako `Interior wall type A`, ponechajte typ na {{ui:Lineárna (dĺžka)}} a vyberte {{ui:Pridať}}.
6. Vyberte {{ui:Lineárne}} na paneli nástrojov (alebo stlačte {{key:L}}).
7. Kliknite na začiatok múru, potom na každý roh pozdĺž neho. Úsek dokončíte dvojitým kliknutím, stlačením {{key:Enter}} alebo kliknutím pravým tlačidlom.
   Úsek sa nakreslí farbou položky a jeho dĺžka sa objaví vedľa položky.
8. V editore položky pod {{ui:Položky}} napíšte `9'-0"` do {{ui:Výška}}, `0.85` do poľa Materiál $/LF a `1.20` do poľa Práca $/LF.
   Tabuľka {{ui:Množstvá}} dole ukazuje dĺžku, rozšírený materiál a prácu a {{ui:Spolu za zákazku}}.
9. Vyberte {{ui:Uložiť výkaz}} (alebo stlačte {{key:Mod+S}}).
   Prehliadač stiahne súbor `.takeoff.json`. Obsahuje Vaše položky, mierky a značky a znova sa otvorí nad tými istými súbormi PDF.
10. Otvorte ponuku {{ui:Export}} na paneli nástrojov a vyberte {{ui:XLSX}}, aby ste stiahli rozpočet ako tabuľku.

:::tip
Stlačením {{key:Esc}} zastavíte, čo robíte, a vrátite sa k nástroju {{ui:Vybrať}}. {{key:Mod+Z}} vráti ľubovoľnú zmenu.
:::

## Čo čítať ďalej

- [Obrazovka TakeoffCraft](topic:workspace) pomenúva každú časť okna.
- [Začiatok výkazu výmer a otvorenie sady plánov](topic:open-plan-set) pokrýva viac súborov PDF a zoznam listov.
- [Vytváranie položiek výkazu](topic:create-items) vysvetľuje typy, jednotky, odpad a sadzby.
- [Zostavy a vzorce](topic:assemblies) mení jedno meranie na stĺpiky, dosky a ďalšie.
- [Klávesnica a myš](topic:keyboard) uvádza každý kláves.
