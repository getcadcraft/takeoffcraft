---
title: Kopírovanie, prilepenie a duplikovanie značiek
summary: Kopírujte značky spolu s ich položkami, prilepte ich tam, kam kliknete, alebo na rovnaké miesto na inom liste, duplikujte, vystrihnite, zmažte a vyberte všetko, každé s jedným krokom späť.
keywords: kopírovať, prilepiť, vystrihnúť, duplikovať, prilepiť na rovnaké miesto, schránka, vybrať všetko, zrušiť výber, viac značiek, typické podlažie, opakovať, rovnaký plán, iný list, kopírovať položku, duplikovať položku
from: e20e9024
---

Skupina {{ui:Úpravy}} na paneli nástrojov obsahuje {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}} a {{ui:Prilepiť}}. Jeho ponuka {{ui:Viac}} obsahuje ostatné, každé so svojou klávesou: {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať}}, {{ui:Zmazať}}, {{ui:Vybrať všetko}} a {{ui:Zrušiť výber}}. Každá z nich je jeden krok späť s {{key:Mod+Z}}.

## Výber značiek

1. Vyberte {{ui:Vybrať}} ({{key:V}}) a kliknite na značku.
2. Podržte {{key:Shift}} a kliknite na ďalšie značky, aby ste ich pridali. {{key:Shift}} + kliknutie na vybranú značku ju zase odoberie.
3. Alebo stlačte {{key:Mod+A}} ({{ui:Vybrať všetko}}) a vyberte všetky značky na otvorenom liste.

Pri viacerých vybraných značkách pravý panel ukáže **Vybrané značky**: koľko je každej položky, s tlačidlami {{ui:Kopírovať}}, {{ui:Duplikovať}}, {{ui:Vystrihnúť}} a {{ui:Zmazať značky}}. Rohové úchyty sa ukážu, len keď je vybraná jedna značka. {{key:Esc}} ({{ui:Zrušiť výber}}) výber zruší.

## Kopírovanie a prilepenie tam, kam kliknete

1. Vyberte značky a stlačte {{key:Mod+C}} ({{ui:Kopírovať}}). Značky sa skopírujú spolu s ich položkami, vrátane zostavy, odpadu a nákladov každej položky.
2. Prejdite na list, kam ich chcete (môže to byť aj ten istý list).
3. Stlačte {{key:Mod+V}} ({{ui:Prilepiť}}). Prerušovaná kópia sa pohybuje za ukazovateľom.
4. Kliknite, kam má ísť. Stred skopírovaných značiek pristane pri ukazovateli.

{{key:Esc}} zruší a nepridá nič. Prilepené značky sú potom vybrané, takže {{key:Delete}} alebo {{key:Mod+Z}} ich odstráni.

V tom istom výkaze výmer sa prilepené značky dajú na **tie isté položky**, takže ich množstvá sa pripočítajú k týmto položkám. V inom výkaze výmer (inej karte alebo po {{ui:Nový}}) sa použije položka s rovnakým názvom a typom; inak sa položka pridá so svojou zostavou. Ak názov už obsadila položka iného typu, pridaná položka sa volá „(názov) (kópia)“.

Prilepené značky idú do oblasti ponuky vybranej hore v paneli {{ui:Položky}} (alebo do žiadnej). Pozri [Oblasti ponuky](topic:bid-areas).

## Prilepenie na rovnaké miesto

{{key:Mod+Shift+V}} ({{ui:Prilepiť na rovnaké miesto}}) položí kópiu presne na to isté miesto na otvorenom liste, podľa jej pozície na strane. Použite to pri typickom podlaží: odmerajte úroveň 2, skopírujte, otvorte úroveň 3 a prilepte na rovnaké miesto.

Prilepenie na rovnaké miesto potrebuje list **rovnakej veľkosti** ako ten, z ktorého ste kopírovali. Na liste inej veľkosti to TakeoffCraft oznámi a nič neprilepí; použite namiesto toho {{ui:Prilepiť}} a kliknite. Na liste, z ktorého ste kopírovali, kópia pristane navrch originálov.

## Mierka sa musí zhodovať

Dĺžky a plochy závisia od mierky listu. Úsek, ktorý meria 10' pri 1/4" = 1'-0", by na liste 1/8" = 1'-0" meral 20'. Preto TakeoffCraft prilepí úseky a plochy len na list s **rovnakou mierkou** ako list, z ktorého pochádzajú, a jasne to oznámi, keď nie:

- Otvorený list ešte nemá mierku: najprv mu ju nastavte ([Nastavenie mierky](topic:set-the-scale)), potom prilepte.
- Otvorený list má inú mierku: hlásenie uvedie obe mierky. Prilepte na list s rovnakou mierkou.
- Počty nepotrebujú mierku: skopírované počty sa prilepia kamkoľvek.

## Duplikovanie

{{key:Mod+D}} ({{ui:Duplikovať}}) skopíruje vybrané značky a kópiu hneď položí na ukazovateľ; kliknite, kam má ísť. Nič sa nepridá, kým neklíknete, a {{key:Esc}} nenechá nič. Duplikovanie nemení to, čo {{ui:Prilepiť}} prilepí.

## Vystrihnutie a zmazanie

- {{key:Mod+X}} ({{ui:Vystrihnúť}}) skopíruje vybrané značky a zmaže ich. Prilepte ich tam, kam patria, alebo vystrihnutie vráťte späť.
- {{key:Delete}} alebo {{key:Backspace}} ({{ui:Zmazať}}) zmaže vybrané značky bez kopírovania.

## Kopírovanie položky

Editor položky (pod **Položky**) končí:

- {{ui:Kopírovať položku}}: skopíruje položku so zostavou, odpadom a nákladmi, bez značiek. {{ui:Prilepiť}} potom pridá jej kópiu do tohto výkazu výmer alebo do iného.
- {{ui:Duplikovať položku}}: hneď pridá kópiu, pomenovanú „(názov) (kópia)“.

:::tip
Kópia zostáva na tomto počítači: uchováva sa na tejto karte a v úložisku prehliadača, takže ju môže prilepiť aj iná karta TakeoffCraft. Nič sa neodosiela a systémová schránka sa nepoužíva, takže značky nemôžete prilepiť do iných programov.
:::

:::note
Kópia pochádza z jedného listu naraz. Značky sa prilepia tak, ako sú: zatiaľ nie je možné kópiu otáčať ani zrkadliť.
:::
