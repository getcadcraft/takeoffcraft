---
title: Spočítať všetko v sade plánov
summary: Označte raz legendu symbolov a TakeoffCraft spočíta každý symbol v nej na každom otvorenom liste v jednom behu. Každý počet je odkaz na svoj list a pred pridaním si ho skontrolujete.
keywords: spočítať všetko, legenda, legenda symbolov, celá sada, každý list, všetky listy, každé dvere, každé zariadenie, zariadenia, tabuľka, symboly, automatický počet, spočítať všetko, sada plánov, 200 listov, úroveň zhody, podobné
from: adc99744
---

{{ui:Spočítať všetko}} prečíta legendu symbolov a potom spočíta každý symbol v nej na každom otvorenom liste. Je to {{ui:Automatický počet}} pre celú legendu naraz. Je to jednoduché porovnávanie symbolov na vašich vlastných listoch, nie natrénovaný model, a nič neopúšťa váš počítač. Počty si pred pridaním skontrolujte: je to pomocník, nie záruka.

## Spočítanie legendy

1. Otvorte plány. Stačí legenda na ľubovoľnom liste: symboly s ich názvami vedľa nich.
2. Vyberte {{ui:Spočítať všetko}} na paneli nástrojov.
3. Ťahajte rámček okolo legendy, symbolov a názvov. Nadpis bez symbolu vedľa (SYMBOL LEGEND) sa vynechá sám.
   Panel vypíše každý symbol s jeho obrázkom a názvom vytlačeným vedľa. Názov sa stane názvom položky, takže ho tu môžete premenovať.
4. Zrušte označenie každého symbolu, ktorý nechcete počítať. Symbol, ktorý sa nedá vyhľadať (príliš malý alebo prázdny), uvedie dôvod.
5. Vyberte {{ui:Spočítať na N listoch}}. Lišta ukazuje list, ktorý sa prehľadáva; {{ui:Zrušiť}} zastaví beh. Strana zostane použiteľná.

Vlastné symboly legendy sa na jej liste nepočítajú. List nakreslený v inej mierke sa prehľadá v tej mierke a symboly sa nájdu otočené v ľubovoľnom pravom uhle.

## Kontrola počtov

- Každý symbol ukazuje svoj súčet a pod ním odkaz na každý list, ktorý nejaký má („E-103: 4“). Kliknutím naň prejdete na ten list. Nálezy sú orámované farbou položky.
- **Kliknite na rámček**, aby ste tento nález vylúčili. Je prerušovaný a prečiarknutý; kliknite znova, aby sa vrátil.
- **Posuňte úroveň zhody** (50 % až 100 %, začína na úrovni vo vašich Nastaveniach). Vyššia nechá len blízke zhody. Posúvač len filtruje to, čo sa našlo; nič sa neprehľadáva znova.
- Dva symboly, ktoré vyzerajú podobne (dvojitá a štvorná zásuvka), môžu zodpovedať tomu istému miestu. Lepšia zhoda ho získa a panel uvedie, koľkých miest sa to týkalo, aby ste ich mohli skontrolovať.
- List, ktorý je príliš veľký na prehľadanie pri veľkosti symbolu, sa preskočí a panel to uvedie.

## Pridanie

Vyberte {{ui:Pridať N značiek}}. Každý symbol sa stane položkou počtu so značkou na každom náleze. Názov, ktorý je už vašou položkou počtu, sa znovu použije (nič sa nezdvojí tam, kde ste už označili ručne). Celý beh je jeden krok: {{key:Ctrl+Z}} vezme späť každú položku a značku.

To, čo prijmete, sa tiež zapíše do {{ui:Naučené}}: symboly sa zapamätajú v súbore výkazu výmer pre ďalší raz.

## S vaším asistentom

Ak v Nastaveniach povolíte asistentov, môžu čítať legendu (legend_open), spustiť počítanie na pozadí (legend_count_start, potom legend_count_status), čítať počty (legend_count_result) a pridávať ich (legend_count_add, ktorý najprv môže zobraziť náhľad toho, čo by pridal). Je to ten istý beh, ktorý vidíte v paneli.

## Symboly v ľubovoľnom uhle

Zaškrtnite {{ui:Symboly pod ľubovoľným uhlom}} pred počítaním, aby ste našli aj symboly nakreslené v uhle, ktorý nie je pravý (diagonálna zátka steny, svietidlo otočené podľa strechy). Vyhľadávanie potom otáča každý symbol po 15 stupňoch; okrúhly symbol stále potrebuje jedno hľadanie a symbol, ktorý nie je okrúhly, môže trvať až šesťkrát dlhšie. Nechajte to vypnuté pre plány kreslené štvorcovo.

## Dobré vedieť

- Potrebuje symboly nakreslené rovnako ako v legende. Legenda nakreslená v inej veľkosti než listy je v poriadku, keď sú mierky listov nastavené; bez mierok sa symboly hľadajú vo veľkosti legendy.
- Symbol s múrom alebo dlhou čiarou prevedenou priamo cez neho sa môže minúť, lebo už nevyzerá ako obrázok z legendy. Pred dôverou zvyšku skontrolujte nálezy na prvom liste.
- Sken bez textu stále funguje: symboly sa nájdu podľa ich riadkov a názvy napíšete vy.
