---
title: Kontrola merania v 3D
summary: Pozrite steny, dosky a počty otvoreného listu postavené nad výkresom, otáčajte ich dookola a kliknutím na jeden z nich vyberte jeho značku.
keywords: png, obrázok, fotka, snímka obrazovky, zásobník, podlažia, úrovne, pohľad, glb, gltf, export 3d, hrúbka steny, výška základne, otvor, nadpražie dverí, 3d, tri d, kontrola, zobrazenie, steny, výška steny, doska, hĺbka, objem, otáčanie, model, výber, izometria, perspektíva
from: fb16b4f7
---

Zobrazenie 3D je kontrola, nie druhý výkres: postaví meranie listu na obrazovke priamo na samotný list, takže chýbajúca stena, zdvojená doska alebo zabudovaný počet sa ukážu na prvý pohľad.

Pred začiatkom: list potrebuje mierku ([Nastavenie mierky](topic:set-the-scale)). Výšky a hĺbky vyžadujú skutočné stopy, takže pri liste bez mierky {{ui:3D}} to oznámi a ostane na plochom liste.

## Otvorenie zobrazenia 3D

1. Zobrazte list, ktorý chcete skontrolovať.
2. Vyberte {{ui:3D}} na lište, ktorá zobrazuje názov a mierku listu, alebo stlačte {{key:3}}.
   Prvýkrát sa zobrazenie 3D načítava chvíľu. List je nakreslený na zemi a meranie na ňom stojí vo farbe každej položky.
3. Späť sa vrátite výberom {{ui:3D}} znova, {{ui:Späť na list}} alebo stlačením {{key:3}}. Výber nástroja na kreslenie (Lineárny, Plošný, Počet a podobne) tiež vráti späť, pretože značky sa kreslia na plochom liste.

Zobrazuje list na obrazovke; listy zmeníte v zozname listov alebo pomocou {{key:PageDown}} a {{key:PageUp}} a zobrazenie 3D nasleduje. Ak chcete vidieť naraz viac podlaží, zoraďte ich na seba (nižšie).

## Čo vidíte

| Značka | V 3D |
|---|---|
| Lineárny úsek, položka s výškou | Stena tejto výšky pozdĺž úseku. Zakrivené úseky sledujú krivku. |
| Lineárny úsek, položka bez výšky | Čiara na liste. Dajte položke výšku v časti **Položka**, aby stála. |
| Plocha, položka s hĺbkou | Doska tejto hĺbky s otvorenými výrezmi. |
| Plocha, položka bez hĺbky | Tenká 2" doska, aby bola stále viditeľná. |
| Počet | Malý stĺpik na každom spočítanom bode. |

Výška je pole {{ui:Výška}} lineárnej položky a hĺbka je pole {{ui:Hĺbka}} plošnej položky, v časti **Položka** (pozri [Vytvorenie položiek merania](topic:create-items)). Zmeňte ho a zobrazenie 3D sa hneď aktualizuje. Poznámka pod názvom listu hovorí, čo list obsahuje, napríklad "Tento list v 3D: 2 steny, 1 doska, 3 počty", a koľko úsekov alebo plôch nemá výšku alebo hĺbku. Kliknutia prechádzajú cez ňu do zobrazenia.

Čísla sa v 3D nemenia: plocha steny je jej presná dĺžka krát výška a objem dosky je jej čistá plocha (obrys mínus výrezy, krivky presne) krát hĺbka. Krivky sa na obrazovke kreslia len ako krátke rovné úseky.

## Obzeranie sa

| Akcia | Čo robí |
|---|---|
| Ťahanie alebo ťahanie prostredným tlačidlom | Obieha okolo merania. |
| {{key:Shift}} + ťahanie, alebo ťahanie pravým tlačidlom | Posun. |
| Koliesko myši | Priblíženie a oddialenie pri ukazovateli. |
| Dvojprstový posun na touchpade | Obieha ({{key:Shift}} posúva). Štipnutie priblíži. |
| {{ui:Izometria}}, {{ui:Zhora}}, {{ui:Spredu}}, {{ui:Zozadu}}, {{ui:Zľava}}, {{ui:Sprava}}, {{ui:Zdola}} | Štandardné pohľady, zarámované na meranie. Zobrazenie 3D sa otvorí v {{ui:Izometria}}. |
| {{ui:Perspektíva}} | Perspektíva zapnutá alebo vypnutá (paralelná, ak je vypnutá). |
| {{ui:Zoom na rozsah}} alebo {{key:F}} | Celý list. |
| {{ui:List}} | Zobrazí alebo skryje výkres na zemi. |
| Kocka pohľadu, vpravo hore | Kliknite na stenu, hranu alebo roh a pozrite sa odtiaľ; ťahaním ju obiehate; ťahaním jej kruhu s kompasom otáčate; tlačidlo domčeka vráti na {{ui:Izometria}}. |

V rohu sa zobrazí kocka pohľadu, malá ikona osí X, Y, Z, alebo nič: vyberte v {{ui:Nastavenia}}, na karte TakeoffCraft, pod **Indikátor rohu** ([Nastavenia TakeoffCraft](topic:settings)). Plochý list nemá indikátor rohu.

:::touch
Jeden prst obieha; dva prsty štipnutím priblížia a posunom sa pohybujú. Klepnutie vyberie.
:::

## Steny s hrúbkou, základňou a otvormi

Lineárna položka s výškou stojí ako tenký pás. Ak ju chcete vidieť ako skutočnú stenu, dajte položke jej tvar v časti **V 3D** v jej nastaveniach:

- **Hrúbka steny** (8", 0.2 m): stena sa stane plnou, vycentrovanou na čiaru, ktorú ste nakreslili, so zrezanými rohmi.
- **Výška základne**: stena začína toľko nad podlahou (podhľad, horná skrinková zostava). Plošné položky ju tiež majú: strop vo výške 9'-0".
- **Nadpražie otvoru**: odpočítaný segment (dvere, [Odpočítanie časti úseku](topic:measure-linear#deduct-a-part-of-a-run)) nechá stenu nad touto výškou, takže dvere sa ukážu ako dvere. Bez toho odpočítaný segment nechá medzeru až po vrch.

Tieto nastavenia tvarujú len zobrazenie 3D: množstvá (dĺžka, plocha steny, náklady) ostávajú, ako boli.

## Zoradenie podlaží

1. Otvorte PDF každého podlažia.
2. V zobrazení 3D vyberte {{ui:Úrovne…}} a napíšte výšku každého podlažia, napríklad `0` pre prízemie a `12'` pre ďalšie. Prázdne pole nechá list vynechaný.
3. Vyberte {{ui:Poskladať}}. Každý list s úrovňou zobrazí svoje meranie vo svojej výške; list na obrazovke leží pod svojím podlažím, ostatné sú obrysom. Poznámka hovorí, koľko podlaží je zoradených.

Listy sa zarovnajú podľa svojho miesta na stránke, takže to funguje pre pôdorysy vykreslené rovnako (rovnaký formát listu a poloha). List s úrovňou, ale bez mierky, sa vynechá a poznámka to uvedie. Vyberte {{ui:Poskladať}} znova pre jeden list naraz. Úrovne sa uložia spolu s meraním.

## Uloženie zobrazenia 3D ako obrázka

Vyberte {{ui:PNG}} na lište 3D pre obrázok zobrazenia tak, ako je na obrazovke (`… 3D.png`); {{key:Shift}} + klik na {{ui:PNG}} ho urobí dvojnásobne veľký (`… 3D@2x.png`), pre tlač.

## Uloženie zobrazenia 3D ako modelu

Vyberte {{ui:GLB}} na lište 3D. Dostanete súbor `.glb` (glTF, binárny) toho, čo zobrazenie ukazuje — podlažie na obrazovke, alebo každé zoradené podlažie — ktorý otvoria ďalšie 3D programy: jeden objekt na značku, pomenovaný podľa svojej položky, vo farbe položky, v metroch, s osou Y smerom nahor. Samotný list a obrysy v ňom nie sú.

## Výber značky z 3D

Kliknite na stenu, dosku, podložku alebo stĺpik. Jeho značka sa stane vybranou značkou, presne ako keby ste na ňu klikli na liste: zobrazí sa pod **Vybraná značka**, jej položka sa stane aktuálnou a stavový riadok uvedie jej dĺžku a výšku, alebo plochu, hĺbku a kubické yardy. {{key:Shift}} + klik pridá značky do výberu alebo ich z neho vyberie. {{key:Delete}} zmaže vybrané značky a {{key:Mod+Z}} ich vráti; {{key:Esc}} zruší výber. Späť na liste zostanú tie isté značky vybrané.

:::tip
Výkres sa riadi motívom: v Modeli list na zemi stmavne ako plochý pohľad.
:::
