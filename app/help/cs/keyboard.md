---
title: Klávesnice a myš
summary: Každá klávesa, myš, touchpad a dotykové gesto v TakeoffCraftu, seskupené, s rozdíly mezi platformami.
keywords: klávesy, zkratky, klávesové zkratky, klávesnice, myš, touchpad, dotyk, posun, zoom, kolečko, pravé tlačítko, dvojklik, space, shift, kopírovat, vložit, vyjmout, duplikovat, vybrat vše
from: 6f2c441d
---

Písmenové klávesy fungují, když je ukazatel kdekoli na stránce a nepíšete do pole. Dokud je otevřený dialog, platí jeho vlastní klávesy. Písmena fungují se {{key:Shift}} i bez něj.

## Nástroje

| Klávesa | Nástroj |
|---|---|
| {{key:V}} | {{ui:Vybrat}} |
| {{key:L}} | {{ui:Délková}} |
| {{key:A}} | {{ui:Plocha}} |
| {{key:O}} | {{ui:Kruh}} |
| {{key:B}} | {{ui:Místnost}} (vyplní místnost jedním kliknutím) |
| {{key:R}} | {{ui:Oblouk}} zapnuto nebo vypnuto (u Délková, Plocha a Výřez) |
| {{key:E}} | {{ui:Odpočet}} zapnuto nebo vypnuto: další úseky běhu se kreslí, ale nepočítají se |
| Číslice, `@` nebo `#` při kreslení | Otevře pole {{ui:Zadání}}: zadejte délku nebo souřadnice, {{key:Enter}} umístí bod ([Měření délkových úseků](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Výřez}} (nejprve vyberte plochu) |
| {{key:C}} | {{ui:Počet}} |
| {{key:S}} | {{ui:Automatické počítání}} |
| {{key:K}} | {{ui:Kalibrovat}} |
| {{key:D}} | {{ui:Kontrola}} měřítka |

## Při kreslení

| Klávesa nebo akce | Co dělá |
|---|---|
| Kliknutí | Umístí bod (tečku, s Počtem). |
| {{key:P}} | Cesta: vybere celou souvislou cestu čáry v PDF, nebo obrys kolem kliknutí ([Výběr čar z PDF](topic:pick-the-lines)). |
| {{key:F3}} | Přichytávání k čarám výkresu zapnuto nebo vypnuto ([Přichycení k čarám výkresu](topic:snap-to-the-drawing)). |
| {{key:Shift}} držené při kliknutí | Přichytí úsek na 0°, 45°, 90° nebo 135° od posledního bodu. Neplatí pro body oblouku ani kružnice. |
| Dvojklik | Dokončí běh, nebo uzavře plochu či výřez. |
| {{key:Enter}} | Dokončí běh, nebo uzavře plochu či výřez. |
| Pravé tlačítko (bez pohybu) | Dokončí běh, nebo uzavře plochu či výřez. |
| Kliknutí na první bod | Uzavře plochu nebo výřez (od třetího bodu). |
| {{key:Backspace}} nebo {{key:Delete}} | Odebere poslední bod (nejprve čekající bod oblouku). |
| {{key:Esc}} | Zahodí čekající bod oblouku; pak zruší nedokončenou značku; pak se vrátí k {{ui:Vybrat}}. |

## Výběr a úpravy

| Klávesa nebo akce | Co dělá |
|---|---|
| Kliknutí na značku (nástroj Vybrat) | Vybere ji a nastaví její položku jako aktuální. |
| {{key:Shift}} + kliknutí na značku | Přidá ji do výběru, nebo ji z něj vyjme. |
| {{key:Mod+A}} | Vybere každou značku na otevřeném listu. |
| Přetažení rohové úchytky | Přesune ten bod ({{key:Shift}} přichytí na 45°). Funguje, když je vybrána jedna značka. |
| {{key:Delete}} nebo {{key:Backspace}} | Smaže vybrané značky (když nekreslíte). |
| {{key:Esc}} | Zrušit výběr: vymaže výběr i kontrolní čáru. |
| {{key:Mod+Z}} | Zpět. |
| {{key:Mod+Y}} nebo {{key:Mod+Shift+Z}} | Znovu. |

## Kopírování a vkládání

| Klávesa | Co dělá |
|---|---|
| {{key:Mod+C}} | Kopíruje vybrané značky i s jejich položkami. |
| {{key:Mod+X}} | Vyjmout: zkopíruje vybrané značky a pak je smaže. |
| {{key:Mod+V}} | Vložit: kopie se pohybuje za ukazatelem; kliknutím ji umístěte. |
| {{key:Mod+Shift+V}} | Vložit na stejné místo: stejné místo na otevřeném listu. |
| {{key:Mod+D}} | Duplikovat vybrané značky: kopie se pohybuje za ukazatelem; kliknutím ji umístěte. |
| {{key:Esc}} | Nic nepokládat: zruší vložení nebo duplikování, které je u ukazatele. |

Samotná písmena stále vybírají nástroje ({{key:C}} je {{ui:Počet}}, {{key:D}} je {{ui:Kontrola}}, {{key:X}} je {{ui:Výřez}}, {{key:V}} je {{ui:Vybrat}}, {{key:A}} je {{ui:Plocha}}); kopírují a vkládají až s {{key:Mod}}. V textovém poli tyto klávesy kopírují a vkládají text jako obvykle. Viz [Kopírování, vložení a duplikování značek](topic:copy-paste).

:::warning
{{key:Backspace}} smaže vybranou značku, když nekreslíte. Pokud se to stane omylem, {{key:Mod+Z}} ji vrátí.
:::

## Soubory

| Klávesa | Co dělá |
|---|---|
| {{key:Mod+O}} | {{ui:Otevřít plány}} |
| {{key:Mod+S}} | {{ui:Uložit výkaz}} |

Tyto dvě fungují, i když píšete do pole.

## Zobrazení a listy

| Klávesa nebo akce | Co dělá |
|---|---|
| Kolečko myši | Přiblížení a oddálení u ukazatele. |
| Přetažení (levým, prostředním nebo pravým tlačítkem) | Posun. V {{ui:Automatické počítání}} levé přetažení místo toho nakreslí rámeček hledání. |
| {{key:Space}} držené + přetažení | Posun v jakémkoli nástroji. |
| {{key:F}} | {{ui:Přizpůsobit stránku}} |
| {{key:W}} | {{ui:Přizpůsobit šířku}} |
| {{key:Plus}} nebo {{key:=}} | Přiblížení uprostřed zobrazení. |
| {{key:Minus}} | Oddálení uprostřed zobrazení. |
| {{key:PageDown}} / {{key:PageUp}} | Další nebo předchozí list v seznamu listů. |
| {{key:Ctrl+Shift+F}} | Přepíná režimy celé obrazovky (Control na každé platformě, i na Macu). |
| {{key:F1}} | Otevře nebo zavře tuto nápovědu, panel na straně. |
| {{key:3}} | 3D kontrolní pohled listu, zapnuto nebo vypnuto. |

## 3D pohled

| Klávesa nebo akce | Co dělá |
|---|---|
| Přetažení, nebo přetažení prostředním tlačítkem | Otáčení. |
| {{key:Shift}} + přetažení, nebo přetažení pravým tlačítkem | Posun. |
| Kolečko myši | Přiblížení u ukazatele. Na touchpadu dvouprstový tah otáčí a stažení prsty přibližuje. |
| Kliknutí | Vybere značku pod ukazatelem ({{key:Shift}} + kliknutí přidá, nebo z výběru vyjme). |
| {{key:F}} nebo {{key:W}} | Přizpůsobit na rozsah. |
| {{key:3}} | Zpět na plochý list. |

Viz [Kontrola výkazu ve 3D](topic:check-in-3d).

## Automatické počítání

| Klávesa nebo akce | Co dělá |
|---|---|
| Přetažení rámečku | Ohraničí symbol, který se má hledat (spustí hledání). |
| Kliknutí na rámeček shody | Odmítne jej, nebo obnoví. |
| {{key:Esc}} | Zruší probíhající hledání, nebo zahodí revizi. |

## Nápověda

| Klávesa | Co dělá |
|---|---|
| {{key:F1}} | Otevře nebo zavře panel nápovědy (také tlačítko {{ui:Nápověda}} na liště aplikace). Funguje ve všech nástrojích, i když píšete do pole. |
| {{key:Esc}} | Zavře panel nápovědy. V jeho hledacím poli první Esc vymaže hledání. Když je panel otevřený, Esc stisknutý po kliknutí na list nejprve zavře panel; stisknutím znovu zrušíte v TakeoffCraftu. |

:::mac
Na mnoha klávesnicích Macu řádek nahoře ovládá jas a zvuk. Stiskněte fn spolu s F1, nebo zapněte "Použít klávesy F1, F2 atd. jako standardní funkční klávesy" v Nastavení systému v části Klávesnice.
:::

## Dialogy a pole

| Klávesa | Co dělá |
|---|---|
| {{key:Enter}} | V poli: použije hodnotu. V dialogu kalibrace: {{ui:Nastavit měřítko}}. |
| {{key:Esc}} | Zavře dialog (jako {{ui:Zrušit}}); zavře formulář {{ui:Nová položka}}. |
| {{key:Tab}} | Přesune na další pole. |

## Poznámky k platformám

:::mac
- {{key:Mod}} je klávesa Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Výjimkou je celá obrazovka: Control+Shift+F.
- Pravé tlačítko je dvouprstové klepnutí na touchpadu, pokud je v Nastavení systému v části Trackpad zapnuto sekundární kliknutí. TakeoffCraft čte jen sekundární tlačítko; klik s Control se může počítat jako obyčejný klik a přidat bod.
- Dva prsty posouvající po touchpadu přibližují list (neposouvají ho). Pro posun stiskněte a táhněte, nebo držte {{key:Space}} a táhněte.
- Page Up a Page Down jsou fn se šipkami nahoru a dolů na klávesnicích, které je nemají.
- Backspace je klávesa označená delete.
:::

:::windows
- {{key:Mod}} je Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Na touchpadu notebooku dvouprstový posun přibližuje list. Pro posun stiskněte a táhněte.
:::

:::linux
- {{key:Mod}} je Ctrl. Některá prostředí používají vlastní zkratky Ctrl+Alt nebo Super; TakeoffCraft žádnou z nich nepoužívá.
- Na touchpadu dvouprstový posun přibližuje list. Pro posun stiskněte a táhněte.
:::

:::touch
TakeoffCraft čte dotyk jako jediný ukazatel:

- Klepnutí umístí bod, vybere značku nebo přidá tečku počtu.
- Tažení jedním prstem posouvá list (v {{ui:Automatické počítání}} nakreslí rámeček hledání).
- Sevření prsty pro přiblížení zatím není podporováno. Použijte {{ui:Přizpůsobit stránku}} a {{ui:Přizpůsobit šířku}}, nebo {{key:Plus}} a {{key:Minus}} na klávesnici.
- Pro uzavření plochy klepněte na její první bod. Pro dokončení běhu dvakrát rychle klepněte tam, kde prohlížeč změní dvojité klepnutí na dvojklik, nebo stiskněte {{key:Enter}} na klávesnici.
- Délka se nezobrazí, dokud neklepnete, protože není žádné najetí ukazatelem.

Pro výkaz dnes je lepší klávesnice a myš, nebo touchpad.
:::

## Klávesy, které si ponechává prohlížeč

Prohlížeč si některé zkratky ponechává a stránka je nemůže použít: zavření karty ({{key:Mod+W}}), nová karta nebo okno ({{key:Mod+T}}, {{key:Mod+N}}) a zoom prohlížeče ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Proto TakeoffCraft přibližuje list kolečkem a samotnými klávesami {{key:Plus}} a {{key:Minus}}. Pokud omylem stisknete {{key:Mod+Plus}}, zvětší se celá stránka; {{key:Mod+0}} ji vrátí zpět. Viz [Klávesy, myši a touchpady](common:keys).

## Kde je příkaz Přesunout

Příkaz Přesunout neexistuje: vyberte tečku počtu a přetáhněte ji, nebo vyberte plochu či čáru a přetáhněte jejich rohové úchytky.
