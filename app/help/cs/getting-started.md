---
title: Začínáme s TakeoffCraftem
summary: Co TakeoffCraft dělá, kde běží a vaše první změřená a oceněná položka ze sady výkresů v PDF.
keywords: start, první výkaz, rychlý start, úvod, rozpočet, výkaz výměr, sada výkresů, pdf
from: 3b9da1fb
---

TakeoffCraft měří sady výkresů, soubory PDF a výkresy DWG či DXF a mění měření na oceněný rozpočet. Otevřete soubory (výkres se počítá přímo ze svých bloků: viz [Otevření výkresu DWG nebo DXF](topic:open-a-drawing)), dáte každému listu měřítko (výkres si přináší vlastní), vytvoříte **položky** (typ stěny, povrchovou úpravu podlahy, zařizovací předmět) a klikáním na listy je odečtete. Množství, náklady a celková cena zakázky se aktualizují průběžně. Rozpočet můžete exportovat jako tabulku a kopii souborů PDF s vykresleným výkazem.

Pokud jste výkazy výměr dělali v jiných programech, přečtěte si dále [Pokud přecházíte z jiného programu pro výkazy](topic:coming-from). Některé věci tu fungují jinak.

## Kde běží

TakeoffCraft běží ve vašem webovém prohlížeči. Otevřete TakeoffCraft a obrazovka je hned připravena; nic se neinstaluje.

- **Vaše soubory PDF zůstávají ve vašem počítači.** Otevírá je prohlížeč a nikdy se nenahrávají. Uložení je stažení.
- Funguje v aktuálních prohlížečích Chrome, Edge, Firefox a Safari. Viz [Prohlížeče a počítače](common:browsers).
- Funguje bez připojení k internetu, jakmile v liště aplikace zvolíte {{ui:Uložit pro offline}} a zobrazí se {{ui:Připraveno offline}}. Viz [Práce offline](common:offline).
- Ukládání do cloudu zatím není k dispozici. Jako desktopová aplikace se TakeoffCraft dodává v CadCraft Studiu spolu s dalšími sedmi aplikacemi.

## Váš první výkaz v deseti krocích

Tento postup změří jeden typ stěny a ocení jej. Zabere pár minut na jakékoli sadě výkresů, kterou máte.

1. Zvolte {{ui:Otevřít plány}} ve skupině {{ui:Soubor}} na panelu nástrojů (nebo stiskněte {{key:Mod+O}}), vyberte jeden nebo více souborů PDF a zvolte Otevřít. Soubory PDF můžete také pustit kamkoli na stránku.
   Listy se objeví vlevo a první list se otevře uprostřed.
2. Najděte vytištěné měřítko listu v razítku nebo pod názvem výkresu.
3. Otevřete seznam {{ui:Předvolba}} ve skupině {{ui:Měřítko}} a vyberte toto měřítko, například `1/4" = 1'-0"`.
   Lišta dole na listu nyní říká „Měřítko 1/4" = 1'-0"“.
4. Zvolte {{ui:Kontrola}} (nebo stiskněte {{key:D}}) a klikněte na dva konce rozměru vytištěného na výkresu.
   Údaj ve stavovém řádku vlevo dole by měl odpovídat vytištěnému rozměru. Pokud ne, viz [Nastavení měřítka](topic:set-the-scale).
5. V panelu {{ui:Položky}} vpravo zvolte {{ui:Nová položka}}, napište název, například `Interior wall type A`, ponechte typ {{ui:Délková (délka)}} a zvolte {{ui:Přidat}}.
6. Zvolte {{ui:Délková}} na panelu nástrojů (nebo stiskněte {{key:L}}).
7. Klikněte na začátek stěny a pak na každý roh podél ní. Dvojitým kliknutím, stisknutím {{key:Enter}} nebo kliknutím pravým tlačítkem úsek dokončíte.
   Úsek se nakreslí barvou položky a jeho délka se objeví vedle položky.
8. V editoru položky pod {{ui:Položky}} napište `9'-0"` do {{ui:Výška}}, `0.85` do {{ui:Materiál $/LF}} a `1.20` do {{ui:Práce $/LF}}.
   Tabulka {{ui:Množství}} dole ukazuje délku, rozšířený materiál a práci a {{ui:Celkem za zakázku}}.
9. Zvolte {{ui:Uložit výkaz}} (nebo stiskněte {{key:Mod+S}}).
   Prohlížeč stáhne soubor `.takeoff.json`. Obsahuje vaše položky, měřítka a značky a znovu se otevře nad stejnými soubory PDF.
10. Otevřete nabídku {{ui:Export}} na panelu nástrojů a zvolte {{ui:XLSX}}, abyste rozpočet stáhli jako tabulku.

:::tip
Stisknutím {{key:Esc}} zastavíte, co právě děláte, a vrátíte se k nástroji {{ui:Vybrat}}. {{key:Mod+Z}} vezme zpět jakoukoli změnu.
:::

## Co číst dál

- [Obrazovka TakeoffCraftu](topic:workspace) pojmenovává každou část okna.
- [Založení výkazu a otevření sady výkresů](topic:open-plan-set) pokrývá více souborů PDF a seznam listů.
- [Vytváření položek výkazu](topic:create-items) vysvětluje typy, jednotky, odpad a sazby.
- [Sestavy a vzorce](topic:assemblies) mění jedno měření na sloupky, desky a další.
- [Klávesnice a myš](topic:keyboard) uvádí každou klávesu.
