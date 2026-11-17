---
title: Množství a rozpočet
summary: Použijte tabulku Množství podle položky a podle listu, celkový součet zakázky, zvýrazňování a upozornění Neúplné.
keywords: množství, součty, podle položky, podle listu, celkem zakázky, rozpočet, souhrn, přehled, zvýraznění, neúplné, náklady
from: 069d41f1
---

Tabulka {{ui:Množství}} ve spodní části okna je vaším živým rozpočtem. Změní se ihned, jakmile nakreslíte, smažete, změníte měřítko nebo upravíte jednotkovou cenu. Množství se nikdy neukládají; pokaždé se znovu změří ze značek, takže nemohou zastarat.

## Podle položky

Zvolte {{ui:Podle položky}} (výchozí). Každá položka má řádek a každá její komponenta sestavy má řádek pod ní.

| Sloupec | Význam |
|---|---|
| Položka | Název s barvou položky. "+(n) bez měřítka" znamená, že některé značky jsou na listech bez měřítka. |
| Množství | Naměřený součet v jednotce položky (u komponent: výsledek vzorce). |
| Jednotka | LF, m, SF, SY, m², EA nebo jednotka komponenty. |
| Odpad % | Zadáno zde nebo v editoru položky. |
| S odpadem | Množství × (1 + odpad). |
| Materiál/jednotka, Práce/jednotka | Jednotkové ceny; můžete je zadat zde. |
| Materiál, Práce | S odpadem × jednotková cena, zaokrouhleno na haléře. |
| Celkem | Materiál + práce. |

Poslední řádek, **Celkem zakázky**, sečte sloupce materiálu, práce a celkem. Stejný součet se zobrazí vpravo v záhlaví tabulky.

Zapište hodnotu do buňky odpadu nebo ceny a stiskněte {{key:Enter}}, nebo klikněte mimo ni, čímž ji použijete. Hodnotu, kterou TakeoffCraft nedokáže přečíst, zvýrazní červený obrys a stavový řádek vysvětlí proč, například "Zadejte částku, například 12.50."

Klikněte na řádek položky, čímž zvýrazníte její značky na všech listech a přejdete na list, který je obsahuje (stejně jako kliknutím pod {{ui:Položky}}).

## Podle listu

Zvolte {{ui:Podle listu}} a uvidíte množství každé položky na každém listu s počtem značek. Klikněte na řádek a otevře se daný list se zvýrazněnou položkou. Použijte to ke kontrole, zda byl každý list vyměřen, nebo k rozdělení množství podle podlaží nebo oblasti prací.

## Podle oblasti

Pokud výkaz obsahuje oblasti nabídek, {{ui:Podle oblasti}} vypíše položky každé oblasti a mezisoučet. Viz [Oblasti nabídek](topic:bid-areas).

## Upozornění na neúplnost

Pokud něco zůstane mimo součty, záhlaví zobrazí upozornění, například:

"Neúplné: 1 chyba vzorce, 6 značek na listech bez měřítka (nezahrnuto do součtů)"

- **Chyby vzorce**: vzorec komponenty sestavy nelze vypočítat. Jeho řádek říká "Chyba vzorce: …". Viz [Sestavy a vzorce](topic:assemblies#when-a-formula-is-wrong).
- **Značky na listech bez měřítka**: těmto listům nastavte měřítko. Viz [Nastavení měřítka](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Stejné poznámky se dostanou do exportované tabulky, takže neúplný rozpočet nikdy nevypadá kompletně.

## Zvýraznění položky

Klikněte na položku pod {{ui:Položky}}, nebo v tabulce. Její značky zůstanou plně výrazné na všech listech a ostatní zeslábnou. Seznam listů u každého listu s jeho značkami ukáže "(n) zvýrazněno". Dalším kliknutím na položku zvýraznění zrušíte.

## Součty položek v postranním panelu

Každá položka v seznamu {{ui:Položky}} ukazuje také své množství. Blok **Naměřeno** v editoru položky zobrazuje hodnoty, se kterými pracují její vzorce: délku, úseky a plochu stěn; plochu, obvod a počet ploch; nebo počet.

## Značky na PDF, která nejsou otevřena

Výkaz může obsahovat značky na PDF, která jste tentokrát neotevřeli. Stále se počítají do všech součtů; seznam listů tato PDF uvádí jménem. Viz [Uložení a znovuotevření výkazu](topic:save-and-reopen).

## Více místa

Šipka vpravo v záhlaví {{ui:Množství}} tabulku skryje, aby list získal více místa. Stisknutím ji znovu tabulku vrátíte.
