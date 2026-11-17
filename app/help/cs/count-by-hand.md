---
title: Počítání ručně
summary: Klikněte na každé dveře, armaturu nebo zařízení, abyste je spočítali, zkontrolujte počty a opravte chyby.
keywords: počet, EA, dveře, armatury, zařízení, symboly, čárkování, počítání kliknutím, ruční počet
from: 594f2980
---

Položka počtu počítá věci: dveře, svítidla, zásuvky, sanitární armatury. Každé kliknutí na list přidá jednu značku počtu. Počítání nepotřebuje měřítko.

## Počítání

1. Vytvořte nebo vyberte položku počtu pod {{ui:Položky}} (typ {{ui:Počet}}).
2. Zvolte {{ui:Počet}} na panelu nástrojů, nebo stiskněte {{key:C}}.
3. Klikněte na každý kus na listu.
   Každé kliknutí dá tečku v barvě položky a počet položky se zvýší o jedna.
4. Přejděte na další list ({{key:PageDown}}) a počítejte dál. Nástroj zůstává na {{ui:Počet}}.
5. Až budete hotovi, stiskněte {{key:Esc}}. TakeoffCraft se vrátí na {{ui:Vybrat}}.

Tažení stále posouvá a kolečko přibližuje i během počítání, takže se po listu můžete pohybovat bez přidávání teček.

:::tip
Klikněte na položku počtu, aby se zvýraznily její tečky na každém listu. Seznam listů pak ukazuje, kolik jich je na každém listu, což pomáhá najít listy, které jste ještě nespočítali.
:::

## Oprava počtu

- **Odstranění tečky**: zvolte {{ui:Vybrat}} ({{key:V}}), klikněte na tečku a stiskněte {{key:Delete}}, nebo zvolte {{ui:Smazat značku}}. Nebo stiskněte {{key:Mod+Z}} hned po chybném kliknutí.
- **Přesun tečky**: vyberte ji a přetáhněte.
- **Započítáno pod špatnou položkou**: vyberte tečku a v seznamu **Položka** pod **Vybraná značka** zvolte správnou položku počtu.

## Velikost teček na obrazovce a v PDF

Tečky mají stejnou velikost na obrazovce, ať přibližujete jakkoli. Chcete-li ji změnit, otevřete {{ui:Nastavení}}, kartu TakeoffCraft, a zvolte **Velikost značky počtu**: Extra malá, Malá, Střední (výchozí) nebo Velká.

Export do PDF ({{ui:Export}} › označené PDF) kreslí každou tečku na papíře stejně velkou, bez ohledu na velikost listu: prohlížeč, který zobrazí PDF na 100 %, ukáže tečky tak velké, jak jsou na obrazovce. Pokud by se tečky na listu ještě dotýkaly, export zmenší tečky na tom listu, aby šlo každou přečíst.

## Mnoho stejných symbolů

Pro symbol, který se na listu opakuje mnohokrát, zkuste [Automatické počítání](topic:auto-count): označte jeden, prohlédněte nálezy a přidejte je všechny jedním krokem.

## Použití počtů ve vzorcích

Množství položky počtu je **N**. Komponenty sestavy je mohou používat, například závěsy `N * 3` pro dveře. Viz [Sestavy a vzorce](topic:assemblies).
