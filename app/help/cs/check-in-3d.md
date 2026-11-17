---
title: Kontrola výkazu ve 3D
summary: Zobrazte stěny, desky a počty otevřeného listu stojící na výkresu, otáčejte kolem nich a kliknutím na jednu vyberte její značku.
keywords: png, obrázek, fotografie, snímek obrazovky, sklad, podlaží, patra, výška, glb, gltf, export 3D, tloušťka stěny, výška základny, otvor, nadpraží dveří, 3d, tři d, kontrola, pohled, stěny, výška stěny, deska, hloubka, objem, otáčení, model, výběr, izometrie, perspektiva
from: fb16b4f7
---

Pohled 3D není druhý výkres: postaví výkaz otevřeného listu na obrazovce přímo na list, takže chybějící stěna, zdvojená deska nebo zbloudilý počet se ukáže na první pohled.

Než začnete: list potřebuje měřítko ([Nastavení měřítka](topic:set-the-scale)). Výšky a hloubky potřebují skutečné stopy, takže u listu bez měřítka {{ui:3D}} to řekne a zůstane na plochém listu.

## Otevření pohledu 3D

1. Zobrazte list, který chcete zkontrolovat.
2. Vyberte {{ui:3D}} na liště, která ukazuje název a měřítko listu, nebo stiskněte {{key:3}}.
   Poprvé se pohled 3D chvíli načítá. List je nakreslen na zemi a výkaz na něm stojí v barvě každé položky.
3. Chcete-li se vrátit, vyberte znovu {{ui:3D}}, {{ui:Zpět na list}}, nebo stiskněte {{key:3}}. Výběr kreslicího nástroje (Úsek, Plocha, Počet a tak dále) se také vrátí, protože značky se kreslí na plochý list.

Pohled zobrazuje list na obrazovce; listy měňte v seznamu listů, nebo pomocí {{key:PageDown}} a {{key:PageUp}}, a pohled 3D je bude sledovat. Chcete-li vidět několik podlaží najednou, složte je (níže).

## Co vidíte

| Značka | Ve 3D |
|---|---|
| Úsek, položka s výškou | Stěna dané výšky podél úseku. Zakřivené úseky sledují křivku. |
| Úsek, položka bez výšky | Čára na listu. Dejte položce výšku v **Položka**, aby stála. |
| Plocha, položka s hloubkou | Deska dané hloubky, s otevřenými výřezy. |
| Plocha, položka bez hloubky | Tenká deska 2", aby byla vidět. |
| Počet | Malý sloupek na každém počítaném bodě. |

Výška je pole {{ui:Výška}} délkové položky a hloubka pole {{ui:Hloubka}} plošné položky, pod **Položka** (viz [Vytvoření položek výkazu](topic:create-items)). Změníte-li je, pohled 3D se okamžitě aktualizuje. Poznámka pod názvem listu říká, co list obsahuje, například "Tento list ve 3D: 2 stěny, 1 deska, 3 počty", a kolik úseků nebo ploch nemá výšku nebo hloubku. Kliknutí prochází k pohledu.

Čísla se ve 3D nemění: plocha stěny je její přesná délka krát výška a objem desky je její čistá plocha (obrys minus výřezy, křivky přesně) krát hloubka. Křivky se kreslí jako krátké rovné kusy jen na obrazovce.

## Rozhlížení

| Akce | Co dělá |
|---|---|
| Přetáhnout, nebo přetáhnout prostředním tlačítkem | Otáčení kolem výkazu. |
| {{key:Shift}} + přetažení, nebo přetažení pravým tlačítkem | Posun. |
| Kolečko myši | Přiblížení a oddálení u kurzoru. |
| Tah dvěma prsty na touchpadu | Otáčení ({{key:Shift}} posouvá). Stažení prsty přibližuje. |
| {{ui:Izo}}, {{ui:Shora}}, {{ui:Zepředu}}, {{ui:Zezadu}}, {{ui:Zleva}}, {{ui:Zprava}}, {{ui:Zdola}} | Standardní pohledy, vystředěné na výkaz. Pohled 3D se otevírá v {{ui:Izo}}. |
| {{ui:Perspektiva}} | Perspektiva zapnuta nebo vypnuta (rovnoběžná, je-li vypnuta). |
| {{ui:Zoom na rozsah}}, nebo {{key:F}} | Celý list. |
| {{ui:List}} | Zobrazí nebo skryje výkres na zemi. |
| Kostka pohledu, vpravo nahoře | Kliknutím na stěnu, hranu nebo roh se díváte odtud; přetažením ji otáčíte; přetažením jejího kompasového kruhu se otáčí; tlačítko domečku vrátí na {{ui:Izo}}. |

V rohu se ukáže kostka pohledu, malá ikona os X, Y, Z, nebo nic: vyberte v {{ui:Nastavení}}, na kartě TakeoffCraft, pod **Indikátor rohu** ([Nastavení TakeoffCraft](topic:settings)). Plochý list indikátor rohu nemá.

:::touch
Jedním prstem otáčíte; dvěma prsty přibližujete stažením a posouváte posunem. Klepnutím vyberete.
:::

## Stěny s tloušťkou, základnou a otvory

Délková položka s výškou stojí jako tenký pás. Chcete-li ji vidět jako skutečnou stěnu, dejte položce tvar pod **Ve 3D** v jejím nastavení:

- **Tloušťka stěny** (8", 0.2 m): stěna se stane tělesem, vystředěným na čáře, kterou jste nakreslili, s zkosenými rohy.
- **Výška základny**: stěna začíná tolik nad podlahou (podhled, řada horních skříněk). I plošné položky ji mají: strop ve výšce 9'-0".
- **Horní hrana otvoru**: odečtený úsek (dveře, [Odečtení části úseku](topic:measure-linear#deduct-a-part-of-a-run)) ponechá stěnu nad touto výškou, takže dveře se ukážou jako dveře. Bez ní odečtený úsek nechá mezeru až nahoru.

Tato nastavení tvarují jen pohled 3D: množství (délka, plocha stěn, náklady) zůstávají, jaká byla.

## Složení podlaží

1. Otevřete PDF každého podlaží.
2. V pohledu 3D vyberte {{ui:Úrovně…}} a zadejte výšku každého podlaží, například `0` pro přízemí a `12'` pro další. Prázdné pole list vynechá.
3. Vyberte {{ui:Složit}}. Každý list s úrovní ukáže svůj výkaz ve své výšce; list na obrazovce leží pod svým vlastním podlažím, ostatní jsou obrysy. Poznámka říká, kolik podlaží je složeno.

Listy se zarovnávají podle svého místa na stránce, takže to funguje pro půdorysy vykreslené stejně (stejná velikost a poloha listu). List s úrovní, ale bez měřítka, se vynechá a poznámka to říká. Pro jeden list najednou vyberte {{ui:Složit}} znovu. Úrovně se ukládají s výkazem.

## Uložení pohledu 3D jako obrázku

Vyberte {{ui:PNG}} na liště 3D pro obrázek pohledu tak, jak je na obrazovce (`… 3D.png`); {{key:Shift}} + klik na {{ui:PNG}} jej udělá dvojnásobně velký (`… 3D@2x.png`), pro tisk.

## Uložení pohledu 3D jako modelu

Vyberte {{ui:GLB}} na liště 3D. Dostanete soubor `.glb` (glTF, binární) toho, co pohled ukazuje — podlaží na obrazovce, nebo všechna složená podlaží — který otevřou jiné 3D programy: jeden objekt na značku, pojmenovaný podle své položky, v barvě položky, v metrech s osou Y nahoru. List sám a obrysy v něm nejsou.

## Výběr značky z 3D

Klikněte na stěnu, desku, lištu nebo sloupek. Jeho značka se stane vybranou značkou, přesně jako byste na ni klikli na listu: ukáže se pod **Vybraná značka**, její položka se stane aktuální a stavový řádek uvede její délku a výšku, nebo plochu, hloubku a kubické yardy. {{key:Shift}} + klik přidá značky k výběru nebo je z něj odebere. {{key:Delete}} smaže vybrané značky a {{key:Mod+Z}} je vrátí; {{key:Esc}} zruší výběr. Zpět na listu zůstanou stejné značky vybrány.

:::tip
Výkres sleduje motiv: v Modelu list na zemi ztmavne jako plochý pohled.
:::
