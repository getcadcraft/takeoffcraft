---
title: Kopírování, vkládání a duplikování značek
summary: Kopírujte značky s jejich položkami, vkládejte je tam, kam kliknete, nebo na stejné místo na jiném listu, duplikujte, vyjměte, smažte a vyberte vše; každý krok lze vrátit zpět.
keywords: kopírovat, vložit, vyjmout, duplikovat, vložit na stejné místo, schránka, vybrat vše, zrušit výběr, více značek, typické patro, opakovat, stejný plán, jiný list, kopírovat položku, duplikovat položku
from: e20e9024
---

Skupina {{ui:Úpravy}} na panelu nástrojů obsahuje {{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}} a {{ui:Vložit}}. Její nabídka {{ui:Další}} obsahuje zbytek, každý se svou klávesou: {{ui:Vyjmout}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Vložit na stejné místo}}, {{ui:Duplikovat}}, {{ui:Smazat}}, {{ui:Vybrat vše}} a {{ui:Zrušit výběr}}. Každý z nich lze jedním krokem vrátit zpět pomocí {{key:Mod+Z}}.

## Výběr značek

1. Zvolte {{ui:Vybrat}} ({{key:V}}) a klikněte na značku.
2. Podržte {{key:Shift}} a klikněte na další značky, abyste je přidali. {{key:Shift}} + klik na vybranou značku ji zase odebere.
3. Nebo stiskněte {{key:Mod+A}} ({{ui:Vybrat vše}}) pro výběr všech značek na otevřeném listu.

Při výběru více značek ukazuje pravý panel **Vybrané značky**: kolik je každé položky, s tlačítky {{ui:Kopírovat}}, {{ui:Duplikovat}}, {{ui:Vyjmout}} a {{ui:Smazat značky}}. Rohové úchyty se zobrazí jen tehdy, je-li vybrána jedna značka. {{key:Esc}} ({{ui:Zrušit výběr}}) výběr zruší.

## Kopírování a vložení tam, kam kliknete

1. Vyberte značky a stiskněte {{key:Mod+C}} ({{ui:Kopírovat}}). Značky se zkopírují s jejich položkami, včetně sestavy, odpadu a nákladů každé položky.
2. Přejděte na list, kam je chcete (může to být týž list).
3. Stiskněte {{key:Mod+V}} ({{ui:Vložit}}). Přerušovaná kopie se pohybuje za ukazatelem.
4. Klikněte, kam má jít. Střed zkopírovaných značek dopadne na ukazatel.

{{key:Esc}} zruší a nic nepřidá. Vložené značky jsou pak vybrány, takže je {{key:Delete}} nebo {{key:Mod+Z}} zase odstraní.

Ve stejném výkazu jdou vložené značky na **stejné položky**, takže se jejich množství přičte k těmto položkám. V jiném výkazu (jiná karta, nebo po {{ui:Nový}}) se použije položka se stejným názvem a typem; jinak se položka přidá i se sestavou. Pokud je název obsazen položkou jiného typu, přidaná položka se jmenuje „(název) (kopie)“.

Vložené značky jdou do rozpočtové oblasti zvolené nahoře na panelu {{ui:Položky}} (nebo do žádné). Viz [Rozpočtové oblasti](topic:bid-areas).

## Vložit na stejné místo

{{key:Mod+Shift+V}} ({{ui:Vložit na stejné místo}}) umístí kopii přesně na stejné místo na otevřeném listu, podle její polohy na stránce. Použijte to pro typické patro: vyberte půdorys 2. patra, zkopírujte, otevřete 3. patro a vložte na stejné místo.

Vložit na stejné místo vyžaduje list **stejné velikosti**, jako byl ten, ze kterého jste kopírovali. Na listu jiné velikosti TakeoffCraft to oznámí a nic nevloží; místo toho použijte {{ui:Vložit}} a klikněte. Na listu, ze kterého jste kopírovali, kopie dopadne přes originály.

## Měřítko musí souhlasit

Délky a plochy závisí na měřítku listu. Úsek naměřený 10' při 1/4" = 1'-0" by na listu 1/8" = 1'-0" měřil 20'. Proto TakeoffCraft vkládá úseky a plochy jen na list se **stejným měřítkem**, jaké měl list, odkud pocházejí, a jasně to oznámí, když tomu tak není:

- Otevřený list ještě nemá měřítko: nejprve mu ho nastavte ([Nastavení měřítka](topic:set-the-scale)), pak vložte.
- Otevřený list má jiné měřítko: zpráva uvede obě měřítka. Vložte na list se stejným měřítkem.
- Počty měřítko nepotřebují: zkopírované počty se vloží kamkoli.

## Duplikování

{{key:Mod+D}} ({{ui:Duplikovat}}) zkopíruje vybrané značky a kopii hned umístí na ukazatel; klikněte, kam má jít. Nic se nepřidá, dokud nekliknete, a {{key:Esc}} nezanechá nic. Duplikování nemění, co {{ui:Vložit}} vloží.

## Vyjmout a smazat

- {{key:Mod+X}} ({{ui:Vyjmout}}) zkopíruje vybrané značky a smaže je. Vložte je tam, kam patří, nebo vyjmutí vraťte zpět.
- {{key:Delete}} nebo {{key:Backspace}} ({{ui:Smazat}}) smaže vybrané značky bez kopírování.

## Kopírovat položku

Editor položky (pod **Položky**) končí:

- {{ui:Kopírovat položku}}: zkopíruje položku se sestavou, odpadem a náklady, bez značek. {{ui:Vložit}} pak přidá její kopii do tohoto výkazu, nebo do jiného.
- {{ui:Duplikovat položku}}: přidá kopii hned, pojmenovanou „(název) (kopie)“.

:::tip
Kopie zůstává na tomto počítači: je uložena v této kartě a v úložišti prohlížeče, takže ji může vložit i jiná karta TakeoffCraft. Nic se nenahrává a systémová schránka se nepoužívá, takže značky nelze vkládat do jiných programů.
:::

:::note
Kopie pochází vždy z jednoho listu. Značky se vkládají tak, jak jsou: kopii zatím nelze otočit ani zrcadlit.
:::
