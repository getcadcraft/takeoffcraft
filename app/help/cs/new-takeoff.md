---
title: Začít nový výkaz
summary: Vymažte vše a začněte prázdný výkaz bez znovunačtení stránky, a nejprve si bezpečně uložte práci.
keywords: nový, nový výkaz, vymazat, obnovit, začít znovu, prázdný, zavřít PDF, další zakázka
from: 16d392a4
---

{{ui:Nový}} zavře všechna PDF a začne prázdný výkaz na téže stránce.

1. Uložte aktuální výkaz, pokud jej chcete zachovat: {{ui:Uložit výkaz}} nebo {{key:Mod+S}}.
2. Zvolte {{ui:Nový}} ve skupině {{ui:Soubor}}.
3. Pokud jsou neuložené změny, TakeoffCraft se zeptá **Neuložený výkaz**: zvolte {{ui:Nejprve uložit výkaz}} (stáhne projekt a pak vymaže), {{ui:Zahodit změny}}, nebo {{ui:Zrušit}}.
   Okno se vrátí do prázdného stavu: žádná PDF, žádné položky, žádné značky, žádná měřítka. Stavový řádek říká "Nový výkaz. Otevřete PDF a začněte."

Vymaže se:

- každé otevřené PDF, jeho listy a miniatury,
- položky, sestavy, značky a měřítka,
- přiblížení a poloha každého listu,
- historie zpět ({{ui:Nový}} nelze vrátit zpět),
- režim oblouku a jakékoli automatické hledání nebo revize.

Vaše soubory na disku se nedotknou. Chcete-li znovu otevřít starý výkaz, otevřete jeho `.takeoff.json` a PDF: viz [Uložení a znovuotevření výkazu](topic:save-and-reopen).

:::note
Každý nový výkaz začíná bez položek. Chcete-li je přenést, nejprve je zkopírujte: {{ui:Kopírovat položku}} pod {{ui:Položky}} (nebo kopírujte značky, které nesou své položky), pak {{ui:Vložit}} v novém výkazu. Viz [Kopírování, vložení a duplikování značek](topic:copy-paste). Položky, které používáte na každé zakázce, si ponechte ve svém [cenovém seznamu](topic:price-library) a přidejte je odtud, nebo přidejte [balík oborů](topic:trade-packs).
:::
