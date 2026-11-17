---
title: Co zatím není hotové
summary: Funkce výkazů výměr, které tato verze nemá, a co místo nich dělat dnes.
keywords: omezení, chybí, zatím ne, plán, plánováno, náhradní postup, na úsek, cloud, desktop
from: 94ff90d0
---

TakeoffCraft je ve vývoji. Tento seznam popisuje, co aktuální verze neumí, a jak i přesto dokončit práci.

## Měření

| Zatím není hotové | Místo toho, dnes |
|---|---|
| Vložení bodu doprostřed úseku nebo obrysu | Smažte značku a nakreslete ji znovu. |
| Výběr tažením (oknem) | {{key:Shift}} + klik na každou značku, nebo {{key:Mod+A}} pro všechny značky na listu. Viz [Kopírování, vkládání a duplikování značek](topic:copy-paste). |
| Otáčení, zrcadlení nebo změna měřítka vložené kopie | Vložte na list ve stejném měřítku a ve stejné orientaci; zbytek dokreslete ručně. |
| Čtení měřítka z naskenovaného listu nebo z grafického měřítka | Vyberte předvolbu, nebo kalibrujte podle délky úsečky. |
| Více než jedno měřítko na listu (detailní výřezy, zvětšené půdorysy) | Změřte část v měřítku listu a detail počítejte na jeho vlastním zvětšeném listu, pokud ho sada má. |

## Položky a ceny

| Zatím není hotové | Místo toho, dnes |
|---|---|
| Vzorce sestav, které používají jiné druhy značek položky (dveře místnosti ve vzorcích jejího podlaží) | Vzorce používají celkové součty hlavního typu; ostatní druhy oceňte na vlastních řádcích. |
| Vzorce sestav počítané úsek po úseku | Vzorce používají součty položky; pro přídavky na úsek použijte `N`. |
| Vzorce používající množství jiné položky | Měření zopakujte u dané položky, nebo ho vypočtěte v tabulkovém exportu. |
| Pracovní čety u komponent sestavy nebo pracovní den jiný než 8 hodin | Přiřaďte četu položce; počet četodnů pro jinou délku dne počítejte jako čethodiny ÷ váš den. |
| Označení jiná než poznámky, oblaky a zvýraznění (šipky, kóty, razítka), nebo odpovědi na poznámku | Napište to do textu poznámky a měňte její stav, jak se věc vyřeší. |
| Knihovna cen sdílená týmem nebo vedená u vašeho účtu | Knihovna je uložena v tomto prohlížeči: exportujte ji jako CSV a na druhém počítači importujte. |
| Oborové balíky ověřené zkušenými kalkulanty | Každý balík je výchozí šablona: před oceněním zkontrolujte jeho předpoklady podle své zakázky a svých výrobků. Viz [Oborové balíky](topic:trade-packs). |
| Ceny v oborových balících | Balíky obsahují jen sestavy: nastavte si vlastní sazby, nebo importujte svůj ceník jako CSV. |
| Přejmenování výkazu | Název vznikne z prvního PDF; přejmenujte stažené soubory. |
| Ruční pojmenování listů | Listy se pojmenovávají podle popisků stránek v PDF; hledejte podle názvu souboru a stránky. |

## Výkresy (DWG a DXF)

| Zatím není hotové | Místo toho, dnes |
|---|---|
| Tabulky stylů tisku, přiřazení per a soubory CTB na listech výkresu | Výkres se kreslí černě, nebo ve svých barvách ztmavených pro papír; tloušťky čar jsou převzaty z výkresu. |
| Otevření binárního DXF nebo DWG staršího než AutoCAD 2000 | Uložte jej jako ASCII DXF nebo jako novější DWG. |
| Nalezení připojeného výkresu (xref) podle složky, ve které leží | Otevřete i soubor připojeného výkresu spolu s hostitelským: najde se podle názvu souboru mezi otevřenými soubory. |
| Měření 3D polylinií, sítí, těles a oblastí | Spočítejte je podle vrstvy a typu, nebo změřte půdorysný pohled nástroji Délka a Plocha. |
| Text v označeném PDF z výkresu v jiném než latinském písmu | Znaky, pro které Helvetica nemá glyf, se v označeném PDF vytisknou jako "?"; výkres na obrazovce se nemění. |
| Předání výkresu jiné aplikaci z lišty listů | Otevřete stejný soubor v té aplikaci. |
| Výkres, který v sobě nese výkaz, jako to dělá {{ui:PDF with the takeoff inside}} u PDF | {{ui:Save takeoff}}: soubor `.takeoff.json` se znovu otevře na témže výkresu, nalezen podle obsahu. |
| Podkladová PDF, obrázky a objekty OLE vložené do výkresu | Obrázky se zobrazí jen jako rámeček. Otevřete samotné podkladové PDF jako list. |

## Automatické počítání

| Zatím není hotové | Místo toho, dnes |
|---|---|
| Hledání symbolů na listu, na kterém je měřítko nakresleno v jiné velikosti | Nastavte listu jeho měřítko, nebo hledejte s rámečkem nakresleným na tom místě. |
| Hledání zrcadlených symbolů | Spočítejte je ručně, nebo hledejte znovu s rámečkem kolem zrcadleného. |

## Soubory a sdílení

| Zatím není hotové | Místo toho, dnes |
|---|---|
| Jedno PDF, které zobrazuje značky i nese výkaz | {{ui:Marked PDF}} pro lidi, kteří mají značky vidět; {{ui:PDF with the takeoff inside}} pro znovuotevření v TakeoffCraftu. |
| CSV množství podle listu nebo značek | Použijte {{ui:XLSX}}: jeho listy By sheet a Marks je obsahují. |
| Cloudové ukládání | Zatím není k dispozici. Ukládejte projektové soubory do počítače a zálohujte je. |
| Samostatná desktopová aplikace TakeoffCraft | Od verze 0.5 je desktopová aplikací CadCraft Studio, se všemi osmi aplikacemi v jedné instalaci. TakeoffCraft běží i v prohlížeči. |

## Obrazovka a vstup

| Zatím není hotové | Místo toho, dnes |
|---|---|
| Nabídka po pravém kliku (nebo dlouhém stisku) | Použijte panel nástrojů, panely a klávesy. Dlouhý stisk dokončí úsek nebo obrys. |
| Otáčení zobrazení | Stránky otočené v PDF se už zobrazují vzpřímeně. |

## Zobrazení 3D

| Zatím není hotové | Místo toho, dnes |
|---|---|
| Kreslení nebo úprava značek ve 3D | Vraťte se na list ({{key:3}}) a kreslete tam; výběr a mazání fungují i ve 3D. |
| Zarovnání podlaží vykreslených na různých místech stránek | Skládejte podlaží vykreslená stejně; ostatní kontrolujte list po listu. |
| Počítání sloupků podle velikosti počítaného objektu | Každý sloupek na listu má stejnou velikost; označuje, kde je počet, ne co to je. |

## Nabídky

| Zatím není hotové | Místo toho, dnes |
|---|---|
| Dodatky k balíku, který už byl odeslán, zadávací dopisy, list rozsahu, který každý uchazeč podepisuje | Odešlete nový balík a zadávací dopis napište sami. [Odeslání balíku k nabídkám](topic:bid-invitations) popisuje, co je hotové. |
| Odesílání pozvánek k nabídkám z libovolného účtu: během testování je pošta externím uchazečům vypnutá, s výjimkou účtů, které tým CadCraftu zapnul | Stáhněte {{ui:Scope CSV}}, pošlete jej e-mailem sami a nabídky zapište ručně. |
| Odesílání balíků k nabídkám z okna Studia | Odešlete z TakeoffCraftu v prohlížeči. |
| Přeceňování plochy varianty podle zvolené nabídky | Varianty a mezisoučty oblastí nabídky používají vaše vlastní ceny; variantu upravte ručně. |
| Automatické připomínky před vypršením pojištění nebo licence subdodavatele | Datum se označí na stránce Subdodavatelé, jakmile je po termínu nebo do 30 dnů; zkontrolujte ho při pozvání. |

## Panely

| Zatím není hotové | Místo toho, dnes |
|---|---|
| Přesun tabulky {{ui:Quantities}} | Pohybovat se dají jen panely {{ui:Sheets}} a {{ui:Items}}. Viz [Uspořádání panelů](common:arrange-panels). |

## Tabulky

Sešit XLSX byl ověřen v LibreOffice Calc, který přepočítal každý součet na stejný cent jako TakeoffCraft. V Excelu zatím otevřen nebyl. Pokud tabulkový program ukáže něco neočekávaného, export CSV obsahuje stejný odhad jako prosté hodnoty.
