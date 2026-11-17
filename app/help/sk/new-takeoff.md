---
title: Začať nový výkaz
summary: Vymažte všetko a začnite prázdny výkaz bez obnovenia stránky a najprv si bezpečne uložte prácu.
keywords: nový, nový výkaz, vymazať, obnoviť, začať od začiatku, prázdny, zatvoriť PDF, ďalšia úloha
from: 16d392a4
---

{{ui:Nový}} zatvorí všetky PDF a začne prázdny výkaz na tej istej stránke.

1. Ak chcete výkaz zachovať, uložte ho: {{ui:Uložiť výkaz}} alebo {{key:Mod+S}}.
2. Zvoľte {{ui:Nový}} v skupine {{ui:Súbor}}.
3. Ak existujú neuložené zmeny, TakeoffCraft sa spýta **Neuložený výkaz**: zvoľte {{ui:Najprv uložiť výkaz}} (stiahne projekt a potom vymaže), {{ui:Zahodiť zmeny}} alebo {{ui:Zrušiť}}.
   Okno sa vráti do prázdneho stavu: žiadne PDF, žiadne položky, žiadne značky, žiadne mierky. Stavový riadok hovorí "Nový výkaz. Otvorte PDF a začnite."

Vymaže sa:

- každé otvorené PDF, jeho listy a miniatúry,
- položky, zostavy, značky a mierky,
- priblíženie a poloha každého listu,
- história krokov späť (nemôžete vrátiť {{ui:Nový}}),
- režim oblúka a akékoľvek hľadanie alebo kontrola automatického počtu.

Súbory na disku sa nedotknú. Ak chcete znova otvoriť starý výkaz, otvorte jeho `.takeoff.json` a PDF: pozrite si [Uložiť a znova otvoriť výkaz](topic:save-and-reopen).

:::note
Každý nový výkaz začína bez položiek. Ak chcete preniesť položky, najprv ich skopírujte: {{ui:Kopírovať položku}} pod Položky (alebo kopírujte značky, ktoré nesú svoje položky), potom {{ui:Prilepiť}} v novom výkaze. Pozrite si [Kopírovať, prilepiť a duplikovať značky](topic:copy-paste). Pre položky, ktoré používate pri každej zákazke, ich nechajte vo svojom [cenníku](topic:price-library) a pridajte ich odtiaľ, alebo pridajte [balík prác](topic:trade-packs).
:::
