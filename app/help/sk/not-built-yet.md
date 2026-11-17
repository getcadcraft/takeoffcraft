---
title: Čo ešte nie je hotové
summary: Funkcie výkazu výmer, ktoré táto verzia nemá, a čo robiť namiesto nich dnes.
keywords: obmedzenia, chýbajúce, zatiaľ nie, plán vývoja, plánované, náhrada, podľa úseku, cloud, počítač
from: 94ff90d0
---

TakeoffCraft je vo vývoji. Tento zoznam obsahuje to, čo táto verzia nerobí, a ako aj tak dokončiť prácu.

## Meranie

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Vloženie bodu do stredu úseku alebo obrysu | Zmažte značku a nakreslite ju znova. |
| Výber oknom (box) | {{key:Shift}} + kliknutie na každú značku, alebo {{key:Mod+A}} pre všetky značky na liste. Pozri [Kopírovanie, prilepenie a duplikovanie značiek](topic:copy-paste). |
| Otáčanie, zrkadlenie alebo zmena mierky prilepenej kópie | Prilepte na list pri rovnakej mierke a orientácii; zvyšok nakreslite ručne. |
| Čítanie mierky z naskenovaného listu alebo z grafickej mierky | Vyberte predvoľbu, alebo kalibrujte podľa dĺžky mierkovej lišty. |
| Viac než jedna mierka na liste (detaily, zväčšené pôdorysy) | Zmerajte časť v mierke listu a detail zarátajte na jeho vlastnom zväčšenom liste, ak ho súbor má. |

## Položky a oceňovanie

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Vzorce zostáv, ktoré používajú iné druhy značiek položky (dvere položky miestnosti vo vzorcoch jej podlažia) | Vzorce používajú súčty hlavného typu; iné druhy oceňte na vlastných riadkoch. |
| Vzorce zostáv počítané úsek po úseku | Vzorce používajú súčty položky; na dodatočné prírastky na úsek použite `N`. |
| Vzorce, ktoré používajú množstvá inej položky | Zopakujte meranie v tej položke, alebo ho vypočítajte v exporte do tabuľky. |
| Partie na komponentoch zostavy alebo pracovný deň iný ako 8 hodín | Partiu priraďte k položke; dni partie pri inej dĺžke dňa čítajte ako hodiny partie ÷ váš deň. |
| Poznámky k iným značkám než poznámky, oblaky a zvýraznenia (šípky, kóty, pečiatky), alebo odpovede na poznámku | Napíšte to do textu poznámky a keď sa vec vyrieši, zmeňte jej stav. |
| Cenová knižnica zdieľaná tímom alebo uchovávaná s vaším účtom | Knižnica sa uchováva v tomto prehliadači: exportujte ju ako CSV a na druhom počítači importujte. |
| Balíky remesiel preverené praktizujúcimi odhadcami | Každý balík je východiskový: pred oceňovaním overte jeho predpoklady podľa vašej zákazky a vašich výrobkov. Pozri [Balíky remesiel](topic:trade-packs). |
| Ceny v balíkoch remesiel | Balíky obsahujú iba zostavy: nastavte si vlastné sadzby, alebo importujte svoj cenník ako CSV. |
| Premenovanie výkazu | Názov sa berie z prvého PDF; premenujte stiahnuté súbory. |
| Ručné pomenovanie listov | Listy sa pomenúvajú podľa označení strán v PDF; hľadajte podľa názvu súboru a strany. |

## Výkresy (DWG a DXF)

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Tabuľky štýlov vykreslenia, priradenia pier a súbory CTB na listoch výkresu | Výkres sa kreslí čiernou, alebo vo svojich farbách stmavených pre papier; hrúbky čiar pochádzajú z výkresu. |
| Otvorenie binárneho DXF alebo DWG staršieho ako AutoCAD 2000 | Uložte ho ako ASCII DXF alebo novší DWG. |
| Hľadanie pripojeného výkresu (xref) podľa priečinka, v ktorom leží | Otvorte aj súbor pripojeného výkresu spolu s hlavným: nájde sa podľa názvu súboru medzi otvorenými súbormi. |
| Meranie 3D polylínií, sietí, telies a oblastí | Spočítajte ich podľa hladiny a typu, alebo zmerajte pôdorys nástrojmi Lineárne a Plocha. |
| Text v označenom PDF z výkresu v iných než latinských písmach | Znaky, ktoré písmo Helvetica nemá, sa v označenom PDF vytlačia ako „?“; výkres na obrazovke sa nemení. |
| Odovzdanie výkresu inej aplikácii z lišty listu | Otvorte rovnaký súbor v tej aplikácii. |
| Výkres, ktorý nesie výkaz výmer vo vnútri, ako to robí {{ui:PDF with the takeoff inside}} pre PDF | {{ui:Save takeoff}}: súbor `.takeoff.json` sa znova otvorí na rovnakom výkrese, nájde sa podľa obsahu. |
| Podkladové PDF, obrázky a objekty OLE vložené do výkresu, kreslené alebo počítané | Obrázky sa zobrazia iba ako rámček. Otvorte samotné podkladové PDF ako list. |

## Automatické počítanie

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Hľadanie symbolov na liste bez mierky nakreslenej v inej veľkosti | Zadajte listu jeho mierku, alebo ho prehľadajte rámčekom nakresleným na tom mieste. |
| Hľadanie zrkadlovo otočených symbolov | Spočítajte ich ručne, alebo hľadajte znova rámčekom okolo zrkadlového symbolu. |

## Súbory a zdieľanie

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Jedno PDF, ktoré zobrazuje značky aj nesie výkaz výmer | {{ui:Marked PDF}} pre ľudí, ktorí majú vidieť značky; {{ui:PDF with the takeoff inside}} na opätovné otvorenie v TakeoffCraft. |
| CSV množstiev podľa listu alebo značiek | Použite {{ui:XLSX}}: jeho hárky Podľa listu a Značky ich obsahujú. |
| Ukladanie v cloude | Zatiaľ nie je dostupné. Uložte projektové súbory do počítača a zálohujte ich. |
| Samostatná stolová aplikácia TakeoffCraft | Od verzie 0.5 je stolová aplikácia CadCraft Studio so všetkými ôsmimi aplikáciami v jednej inštalácii. TakeoffCraft beží aj v prehliadači. |

## Obrazovka a vstup

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Ponuka pravým tlačidlom (alebo dlhým stlačením) | Použite panel nástrojov, panely a klávesy. Dlhé stlačenie dokončí úsek alebo obrys. |
| Otáčanie zobrazenia | Strany otočené v PDF sa už zobrazujú vzpriamene. |

## Zobrazenie 3D

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Kreslenie alebo úprava značiek v 3D | Vráťte sa na list ({{key:3}}) a kreslite tam; výber a mazanie fungujú aj v 3D. |
| Zarovnanie zložených podlaží vykreslených na rôznych miestach strán | Skladajte podlažia vykreslené rovnako; ostatné kontrolujte po jednom liste. |
| Počítanie stĺpikov s veľkosťou ako počítaný objekt | Každý stĺpik na liste má rovnakú veľkosť; označuje, kde je počet, nie čo to je. |

## Ponuky

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Dodatky k už odoslanému balíku, listy o pridelení zákazky, list rozsahu, ktorý každý uchádzač podpíše | Odošlite nový balík a list o pridelení napíšte sami. [Odoslanie balíka na ponuky](topic:bid-invitations) popisuje, čo je hotové. |
| Odosielanie pozvánok do ponuky z ľubovoľného účtu: kým sa testuje, pošta externým uchádzačom je vypnutá, okrem účtov, ktoré tím CadCraft povolil | Stiahnite {{ui:Scope CSV}}, pošlite ho e-mailom sami a ponuky zapíšte ručne. |
| Odosielanie balíkov ponúk z okna Studio | Odošlite z TakeoffCraft v prehliadači. |
| Prepočítanie oblasti ponuky alternatívy so zvolenou ponukou | Alternatívy a medzisúčty oblastí ponúk používajú vaše vlastné ceny; alternatívu upravte ručne. |
| Automatické pripomienky pred vypršaním poistenia alebo licencie subdodávateľa | Dátum sa označí na stránke Subdodávatelia, keď uplynie alebo keď zostáva do 30 dní; skontrolujte ho pri pozývaní. |

## Panely

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Presúvanie tabuľky {{ui:Quantities}} | Presúvať sa dajú iba panely {{ui:Sheets}} a {{ui:Items}}. Pozri [Usporiadanie panelov](common:arrange-panels). |

## Tabuľky

Zošit XLSX bol skontrolovaný v LibreOffice Calc, ktorý prepočítal každý súčet na rovnaký cent ako TakeoffCraft. V Exceli ešte otvorený nebol. Ak tabuľkový program zobrazí niečo neočakávané, export CSV obsahuje ten istý odhad ako čisté hodnoty.
