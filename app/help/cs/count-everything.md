---
title: Spočítat vše v sadě
summary: Označte jednou legendu symbolů a TakeoffCraft spočítá každý symbol z ní na každém otevřeném listu jedním během. Každý počet je odkaz na svůj list a než cokoli přidáte, zkontrolujete to.
keywords: spočítat vše, legenda, legenda symbolů, celá sada, každý list, všechny listy, každé dveře, každá armatura, zařízení, rozpis, symboly, automatické počítání, počítat vše, sada plánů, 200 listů, úroveň shody, podobné symboly
from: adc99744
---

{{ui:Spočítat vše}} načte legendu symbolů a pak spočítá každý symbol z ní na každém otevřeném listu. Je to {{ui:Automatické počítání}} pro celou legendu najednou. Jde jen o prosté porovnávání symbolů na vašich vlastních listech, ne o natrénovaný model, a nic neopouští váš počítač. Počty zkontrolujte, než je přidáte: je to pomocník, ne záruka.

## Počítání legendy

1. Otevřete plány. Stačí legenda na kterémkoli listu: symboly s jejich názvy vedle nich.
2. Zvolte {{ui:Spočítat vše}} na panelu nástrojů.
3. Přetáhněte rámeček kolem legendy, symbolů a názvů. Nadpis bez symbolu vedle (SYMBOL LEGEND) se vynechá sám.
   Panel vypisuje každý symbol s jeho obrázkem a názvem vytištěným vedle. Název se stane názvem položky, takže ho zde případně přejmenujte.
4. Odškrtněte symboly, které nechcete počítat. Symbol, který nelze vyhledat (příliš malý nebo prázdný), uvede důvod.
5. Zvolte {{ui:Spočítat na N listech}}. Lišta ukazuje list, který se prohledává; {{ui:Zrušit}} zastaví běh. Stránka zůstává použitelná.

Vlastní symboly legendy se na jejím listu nepočítají. List nakreslený v jiném měřítku se prohledá v tomto měřítku a symboly se najdou otočené v jakémkoli pravém úhlu.

## Kontrola počtů

- Každý symbol ukazuje svůj součet a pod ním odkaz na každý list, který nějaké má („E-103: 4“). Kliknutím přejdete na tento list. Nalezené jsou orámovány barvou položky.
- **Klikněte na rámeček**, abyste nález vyřadili. Je přerušovaný a přeškrtnutý; kliknutím jej znovu vrátíte.
- **Posuňte úroveň shody** (50 % až 100 %, začíná na úrovni z vašeho Nastavení). Vyšší ponechá jen těsné shody. Posuvník jen filtruje, co bylo nalezeno; nic se znovu nehledá.
- Dva podobné symboly (zásuvka dvojitá a čtverná) se mohou shodovat na stejném místě. Lepší shoda místo obsadí a panel uvede, na kolika místech k tomu došlo, abyste je mohli zkontrolovat.
- List, který je příliš velký na prohledání při velikosti symbolu, se přeskočí a panel to uvede.

## Přidání

Zvolte {{ui:Přidat N značek}}. Každý symbol se stane položkou počtu se značkou na každém nálezu. Název, který už je vaší položkou počtu, se znovu použije (nic se nezdvojí tam, kde jste již označili ručně). Celý běh je jeden krok: {{key:Ctrl+Z}} vezme zpět všechny položky i značky.

To, co přijmete, se také uloží do {{ui:Naučené}}: symboly si soubor výkazu zapamatuje pro příště.

## S vaším asistentem

Pokud v Nastavení povolíte asistenty, mohou číst legendu (legend_open), spustit počítání na pozadí (legend_count_start, pak legend_count_status), číst počty (legend_count_result) a přidat je (legend_count_add, který může nejprve ukázat náhled toho, co by přidal). Je to týž běh, jaký vidíte v panelu.

## Symboly v libovolném úhlu

Zaškrtněte {{ui:Symboly v libovolném úhlu}} před počítáním, abyste našli i symboly nakreslené v úhlu, který není pravý (šikmá hmoždinka, svítidlo natočené podle střechy). Hledání pak otáčí každý symbol po 15 stupních; kulatý symbol stále potřebuje jedno hledání a symbol, který není kulatý, může trvat až šestkrát déle. U plánů kreslených kolmo to nechte vypnuté.

## Dobré vědět

- Potřebuje symboly nakreslené stejně jako v legendě. Legenda nakreslená v jiné velikosti než listy je v pořádku, když jsou měřítka listů nastavena; bez měřítek se symboly hledají ve velikosti legendy.
- Symbol, kterým prochází zeď nebo dlouhá čára, může být přehlédnut, protože už nevypadá jako obrázek v legendě. Před důvěrou ve zbytek zkontrolujte nálezy na prvním listu.
- Sken bez textu také funguje: symboly se najdou podle jejich řad a názvy napíšete vy.
