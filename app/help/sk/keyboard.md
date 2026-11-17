---
title: Klávesnica a myš
summary: Každý kláves, myš, touchpad a dotykové gesto v TakeoffCraft, zoskupené, s rozdielmi medzi platformami.
keywords: klávesy, skratky, klávesové skratky, klávesnica, myš, touchpad, dotyk, posun, zväčšenie, koliesko, pravé tlačidlo, dvojklik, medzerník, shift, kopírovať, prilepiť, vystrihnúť, duplikovať, vybrať všetko
from: 6f2c441d
---

Písmenové klávesy fungujú, keď je ukazovateľ kdekoľvek na strane a nepíšete do poľa. Keď je otvorené dialógové okno, platia jeho vlastné klávesy. Písmená fungujú so {{key:Shift}} aj bez neho.

## Nástroje

| Kláves | Nástroj |
|---|---|
| {{key:V}} | {{ui:Vybrať}} |
| {{key:L}} | {{ui:Lineárne}} |
| {{key:A}} | {{ui:Plocha}} |
| {{key:O}} | {{ui:Kružnica}} |
| {{key:B}} | {{ui:Miestnosť}} (vyplní miestnosť jedným kliknutím) |
| {{key:R}} | {{ui:Oblúk}} zapnutý alebo vypnutý (v Lineárne, Plocha a Výrez) |
| {{key:E}} | {{ui:Odpočet}} zapnutý alebo vypnutý: ďalšie segmenty úseku sa nakreslia, ale nepočítajú sa |
| Číslica, `@` alebo `#` počas kreslenia | Otvorí pole {{ui:Zadať}}: zadajte dĺžku alebo súradnice, {{key:Enter}} umiestni bod ([Merať lineárne úseky](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Výrez}} (najprv vyberte plochu) |
| {{key:C}} | {{ui:Počet}} |
| {{key:S}} | {{ui:Automatický počet}} |
| {{key:K}} | {{ui:Kalibrovať}} |
| {{key:D}} | {{ui:Kontrola}} mierky |

## Počas kreslenia

| Kláves alebo akcia | Čo robí |
|---|---|
| Kliknutie | Umiestni bod (bodka, pri nástroji Počet). |
| {{key:P}} | Cesta: vyberte celú súvislú cestu čiary z PDF alebo obrys okolo kliknutia ([Vybrať čiary PDF](topic:pick-the-lines)). |
| {{key:F3}} | Prichytávanie na čiary výkresu zapnuté alebo vypnuté ([Prichytávanie na čiary výkresu](topic:snap-to-the-drawing)). |
| {{key:Shift}} podržané pri kliknutí | Prichytí segment na 0°, 45°, 90° alebo 135° od posledného bodu. Nepoužíva sa pri bodoch oblúka ani kružníc. |
| Dvojklik | Dokončí úsek alebo uzavrie plochu či výrez. |
| {{key:Enter}} | Dokončí úsek alebo uzavrie plochu či výrez. |
| Pravé tlačidlo (bez pohybu) | Dokončí úsek alebo uzavrie plochu či výrez. |
| Kliknutie na prvý bod | Uzavrie plochu alebo výrez (od tretieho bodu). |
| {{key:Backspace}} alebo {{key:Delete}} | Odstráni posledný bod (najprv čakajúci bod oblúka). |
| {{key:Esc}} | Zahodí čakajúci bod oblúka; potom zruší nedokončenú značku; potom sa vráti na {{ui:Vybrať}}. |

## Výber a úpravy

| Kláves alebo akcia | Čo robí |
|---|---|
| Kliknutie na značku (nástroj Vybrať) | Vyberie ju a jej položku nastaví ako aktuálnu. |
| {{key:Shift}} + kliknutie na značku | Pridá ju do výberu alebo ju z výberu odoberie. |
| {{key:Mod+A}} | Vyberie každú značku na otvorenom liste. |
| Potiahnutie rohovej rúčky | Presunie ten bod ({{key:Shift}} prichytáva na 45°). Funguje, keď je vybraná jedna značka. |
| {{key:Delete}} alebo {{key:Backspace}} | Zmaže vybrané značky (keď nekreslíte). |
| {{key:Esc}} | Zruší výber: vymaže výber a kontrolnú čiaru. |
| {{key:Mod+Z}} | Späť. |
| {{key:Mod+Y}} alebo {{key:Mod+Shift+Z}} | Znova. |

## Kopírovanie a prilepenie

| Kláves | Čo robí |
|---|---|
| {{key:Mod+C}} | Skopíruje vybrané značky spolu s ich položkami. |
| {{key:Mod+X}} | Vystrihnúť: skopíruje vybrané značky a potom ich zmaže. |
| {{key:Mod+V}} | Prilepiť: kópia sa pohybuje s ukazovateľom; kliknite, kam má ísť. |
| {{key:Mod+Shift+V}} | Prilepiť na rovnaké miesto: rovnaké miesto na otvorenom liste. |
| {{key:Mod+D}} | Duplikovať vybrané značky: kópia sa pohybuje s ukazovateľom; kliknite, kam má ísť. |
| {{key:Esc}} | Nič neodložiť: zruší prilepenie alebo duplikovanie, ktoré je pri ukazovateli. |

Samotné písmená stále vyberajú nástroje ({{key:C}} je {{ui:Počet}}, {{key:D}} je {{ui:Kontrola}}, {{key:X}} je {{ui:Výrez}}, {{key:V}} je {{ui:Vybrať}}, {{key:A}} je {{ui:Plocha}}); len {{key:Mod}} spolu s nimi kopíruje a prilepuje. V textovom poli tieto klávesy kopírujú a prilepujú text ako obvykle. Pozrite si [Kopírovať, prilepiť a duplikovať značky](topic:copy-paste).

:::warning
{{key:Backspace}} zmaže vybranú značku, keď nekreslíte. Ak sa to stane omylom, {{key:Mod+Z}} ju vráti.
:::

## Súbory

| Kláves | Čo robí |
|---|---|
| {{key:Mod+O}} | {{ui:Otvoriť plány}} |
| {{key:Mod+S}} | {{ui:Uložiť výkaz}} |

Tieto dve fungujú aj vtedy, keď píšete do poľa.

## Zobrazenie a listy

| Kláves alebo akcia | Čo robí |
|---|---|
| Koliesko myši | Priblíženie a oddialenie pri ukazovateli. |
| Potiahnutie (ľavé, stredné alebo pravé tlačidlo) | Posun. V {{ui:Automatický počet}} ľavé potiahnutie namiesto toho nakreslí vyhľadávacie pole. |
| {{key:Space}} podržané + potiahnutie | Posun v ľubovoľnom nástroji. |
| {{key:F}} | {{ui:Celá strana}} |
| {{key:W}} | {{ui:Na šírku}} |
| {{key:Plus}} alebo {{key:=}} | Priblíži v strede zobrazenia. |
| {{key:Minus}} | Oddiali v strede zobrazenia. |
| {{key:PageDown}} / {{key:PageUp}} | Ďalší alebo predchádzajúci list v zozname listov. |
| {{key:Ctrl+Shift+F}} | Prepína režimy celej obrazovky (Control na každej platforme, aj na Macu). |
| {{key:F1}} | Otvorí alebo zatvorí túto pomoc, panel na boku. |
| {{key:3}} | 3D kontrolný pohľad listu, zapnutý alebo vypnutý. |

## Pohľad 3D

| Kláves alebo akcia | Čo robí |
|---|---|
| Potiahnutie alebo potiahnutie stredným tlačidlom | Otáčanie. |
| {{key:Shift}} + potiahnutie alebo potiahnutie pravým tlačidlom | Posun. |
| Koliesko myši | Priblíženie pri ukazovateli. Na touchpade ťah dvoma prstami otáča a štipnutie priblíži. |
| Kliknutie | Vyberie značku pod ukazovateľom ({{key:Shift}} + kliknutie pridá alebo odoberie). |
| {{key:F}} alebo {{key:W}} | Zoom na rozsah. |
| {{key:3}} | Späť na plochý list. |

Pozrite si [Skontrolovať výkaz v 3D](topic:check-in-3d).

## Automatický počet

| Kláves alebo akcia | Čo robí |
|---|---|
| Potiahnutie rámčeka | Ohraničte symbol, ktorý chcete hľadať (spustí hľadanie). |
| Kliknutie na rámček zhody | Odmietne ho alebo obnoví. |
| {{key:Esc}} | Zruší bežiace hľadanie alebo zahodí kontrolu. |

## Pomoc

| Kláves | Čo robí |
|---|---|
| {{key:F1}} | Otvorí alebo zatvorí panel pomocníka (tiež tlačidlo {{ui:Pomocník}} na lište aplikácie). Funguje vo všetkých nástrojoch, aj keď píšete do poľa. |
| {{key:Esc}} | Zatvorí panel pomocníka. V jeho vyhľadávacom poli prvý Esc vymaže hľadanie. Keď je panel otvorený, Esc stlačený po kliknutí na list najprv zatvorí panel; stlačte ho znova, ak chcete zrušiť v TakeoffCraft. |

:::mac
Na mnohých klávesniciach Mac horný rad ovláda jas a zvuk. Stlačte fn spolu s F1 alebo zapnite "Používať klávesy F1, F2 atď. ako štandardné funkčné klávesy" v Systémových nastaveniach v časti Klávesnica.
:::

## Dialógové okná a polia

| Kláves | Čo robí |
|---|---|
| {{key:Enter}} | V poli: použije hodnotu. V dialógu kalibrácie: {{ui:Nastaviť mierku}}. |
| {{key:Esc}} | Zatvorí dialóg (ako {{ui:Zrušiť}}); zatvorí formulár {{ui:Nová položka}}. |
| {{key:Tab}} | Presunie na ďalšie pole. |

## Poznámky k platforme

:::mac
- {{key:Mod}} je kláves Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Výnimkou je celá obrazovka: Control+Shift+F.
- Pravé kliknutie je kliknutie dvoma prstami na trackpade, keď je sekundárne kliknutie zapnuté v Systémových nastaveniach v časti Trackpad. TakeoffCraft číta len sekundárne tlačidlo; kliknutie s Control môže byť počítané ako obyčajné kliknutie a pridať bod.
- Ťah dvoma prstami na trackpade priblíži list (neposúva ho). Ak ho chcete posunúť, stlačte a potiahnite alebo podržte Space a potiahnite.
- Page Up a Page Down sú fn so šípkami nahor a nadol na klávesniciach, ktoré ich nemajú.
- Backspace je kláves označený "delete".
:::

:::windows
- {{key:Mod}} je Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Na touchpade notebooku ťah dvoma prstami priblíži list. Ak ho chcete posunúť, stlačte a potiahnite.
:::

:::linux
- {{key:Mod}} je Ctrl. Niektoré pracovné prostredia majú vlastné skratky s Ctrl+Alt alebo Super; TakeoffCraft žiadnu z nich nepoužíva.
- Na touchpade ťah dvoma prstami priblíži list. Ak ho chcete posunúť, stlačte a potiahnite.
:::

:::touch
TakeoffCraft číta dotyk ako jeden ukazovateľ:

- Klepnutie umiestni bod, vyberie značku alebo pridá bodku počtu.
- Potiahnutie jedným prstom posúva list (v {{ui:Automatický počet}} nakreslí vyhľadávacie pole).
- Štipnutie na priblíženie zatiaľ nie je podporované. Použite {{ui:Celá strana}} a {{ui:Na šírku}}, alebo {{key:Plus}} a {{key:Minus}} na klávesnici.
- Ak chcete uzavrieť plochu, klepnite na jej prvý bod. Ak chcete dokončiť úsek, klepnite dvakrát tam, kde prehliadač mení dvojklepnutie na dvojklik, alebo stlačte {{key:Enter}} na klávesnici.
- Živé zobrazenie dĺžky nie je dostupné, kým nekliknete, lebo zariadenie nepozná prejdenie ukazovateľom.

Na prácu s výkazom výmer je dnes lepšia klávesnica a myš alebo trackpad.
:::

## Klávesy, ktoré si prehliadač necháva

Prehliadače si niektoré skratky ponechávajú pre seba a stránka ich nemôže použiť: zatvorenie karty ({{key:Mod+W}}), nová karta alebo okno ({{key:Mod+T}}, {{key:Mod+N}}) a zväčšenie v prehliadači ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Preto TakeoffCraft priblíži list kolieskom a samotnými klávesmi {{key:Plus}} a {{key:Minus}}. Ak omylom stlačíte {{key:Mod+Plus}}, celá stránka sa zväčší; {{key:Mod+0}} ju vráti späť. Pozrite si [Klávesy, myš a trackpad](common:keys).

## Kde je príkaz Presunúť

Príkaz Presunúť neexistuje: vyberte bodku počtu a potiahnite ju, alebo vyberte plochu či čiaru a potiahnite ich rohové rúčky.
