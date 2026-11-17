---
title: Otvorenie výkresu DWG alebo DXF
summary: Otvorte súbor výkresu ako listy (priestor modelu a každé rozloženie), začnite s mierkou, ktorú výkres udáva, zobrazte alebo skryte jeho hladiny a pripojte odkazované výkresy.
keywords: dwg, dxf, cad, výkres, otvoriť výkres, rozloženia, priestor modelu, priestor papiera, listy, jednotky, insunits, mierka výrezu, xref, pripojený výkres, hladiny, zmrazené, bez pdf, vykreslenie, bez vykreslenia
from: d8c3f504
---

TakeoffCraft otvára výkres DWG alebo DXF rovnako ako PDF: nemusíte ho najprv vykresliť do PDF. Počítanie priamo z výkresu je presné, lebo výkres pozná, čím je každý objekt. Pozri [Počítanie z výkresu](topic:count-from-a-drawing).

## Otvorenie výkresu

1. Vyberte {{ui:Open plans}} v skupine {{ui:File}} alebo stlačte {{key:Mod+O}}.
2. Vyberte súbor DWG alebo DXF. Môžete vybrať viac súborov a spolu s nimi aj PDF.
3. Kliknite na Otvoriť.

Súbory výkresov môžete tiež presunúť na TakeoffCraft, rovnako ako PDF. Nič sa nenahráva: prehliadač číta súbor vo vašom počítači.

TakeoffCraft číta DWG od AutoCAD 2000 po 2018 a ASCII DXF od R12 po 2018. Binárny DXF odmietne (uložte ho ako ASCII alebo ako DWG) a rovnako súbor, ktorý nie je ani jedno, a povie prečo. Poškodený súbor sa otvorí s tým, čo sa dalo prečítať, a správa to povie; jeho počty môžu byť neúplné.

## Listy

- **Model** je priestor modelu výkresu.
- **Každé rozloženie** (karta priestoru papiera) je list pomenovaný podľa karty, v poradí kariet. Rozloženie zobrazuje model cez svoje výrezy, ako sa vykresľuje.

Priblíženie, posun, uchopenie k čiaram výkresu, značky, poznámky, {{ui:Calibrate}} a ostatné fungujú ako pri PDF. Listy výkresu sa ukladajú vo výkaze podľa názvu súboru a odtlačku jeho obsahu, ako PDF: otvorte ten istý súbor znova a značky sú na jeho listoch.

## Mierka

List začína mierkou, ktorú výkres udáva:

- **Rozloženie** prevezme mierku svojho najväčšieho výrezu. Mierka ako 1/2" = 1'-0" sa pomenuje ako predvoľba, ktorou je; každá iná sa zobrazí ako „Z výrezu výkresu: 1" = 2.5'". Ak má rozloženie výrezy v iných mierkach, najväčšia určí mierku listu: ostatné skontrolujte pomocou {{ui:Check}}.
- **Model** prevezme jednotky výkresu (palce, milimetre, stopy…) ako mierku: „Jednotky výkresu (palce)".
- **Výkres bez jednotiek** (výkres nikdy nepovedal, či jednotka je palec alebo milimeter) nemá mierku: list hovorí „Bez mierky" a meranie na ňom sa odmietne, ako pri PDF bez mierky. Počítanie mierku nepotrebuje. Dajte mu ju pomocou {{ui:Calibrate}}.

{{ui:Calibrate}}, {{ui:Check}} a zoznam {{ui:Preset}} menia mierku kedykoľvek a majú prednosť pred mierkou výkresu. Zoznam predvolieb je pri Modeli vypnutý, lebo model nemá formát papiera.

## Hladiny

{{ui:Layers}} na lište listu vypíše hladiny výkresu s počtom objektov, ktoré každá má na tomto liste. Hladiny, ktoré súbor vypol alebo zmrazil, sa spustia skryté. Odškrtnutím hladinu skryjete, zaškrtnutím skrytú zobrazíte: list sa znova prekreslí a skryté objekty sa vynechajú z počtov aj z objektov ponúkaných pre {{ui:Measure drawing}}, pokiaľ nepožiadate o počítanie skrytých hladín. {{ui:Show all}} zobrazí všetky hladiny; {{ui:Back to the file's layers}} vráti vaše zmeny späť. Voľby hladín patria tejto relácii, nie súboru výkazu.

## Pripojené výkresy (xref)

Výkres, ktorý odkazuje na iné výkresy, ich zobrazí tam, kde sú vložené. TakeoffCraft nájde pripojený výkres medzi **otvorenými súbormi** podľa názvu súboru: otvorte hlavný výkres a pripojený spolu (alebo jeden po druhom). Dovtedy stavový riadok hovorí, koľko pripojených výkresov sa nenašlo, čo kreslia, chýba, a počty to uvedú.

## Obmedzenia

- Objekty, ktoré TakeoffCraft nevie prečítať alebo umiestniť (proxy objekty, neznáme triedy), sú vypísané v okne počítania podľa typu; nikdy sa nevynechajú bez upozornenia.
- Veľmi veľké výkresy sa kreslia po častiach a počty sa zastavia pri limite, čo sa povie. Otvorte namiesto toho PDF vykreslenie takého výkresu.
- Výkres sa kreslí čiernou a vlastnými farbami stmavenými pre biely papier. Tabuľky štýlov vykreslenia a priradenia pier sa neuplatňujú.
