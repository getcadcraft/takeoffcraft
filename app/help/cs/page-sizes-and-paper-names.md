---
title: Formáty stran a názvy papíru
summary: Zobrazte velikost každého listu v milimetrech a palcích a jeho název papíru (řady A, B a C, ANSI, ARCH) a seskupte smíšenou sadu podle velikosti, abyste našli odlišné listy.
keywords: velikost stránky, formát papíru, název papíru, a0, a1, a2, a3, a4, řada b, řada c, ansi, arch, architektonický, mm, palce, vlastní velikost, podle formátu, neobvyklá velikost, smíšená sada, měřítko, sada plánů, mediabox, otočení
from: 9c061c07
---

Měřítko má smysl jen na správném papíru. {{ui:TakeoffCraft}} čte velikost každého listu PDF a pojmenuje papír, takže vidíte list, který byl vytištěn v jiné velikosti, dřív než se na něm spolehnete při měření.

## Co budete dělat

Podívejte se na velikost otevřeného listu a potom seskupte celou sadu podle velikosti.

## Postup

1. Otevřete plány ({{ui:Otevřít plány}}).
2. Lišta listu nad výkresem ukazuje název papíru otevřeného listu a jeho velikost, například "A1 · 594 × 841 mm".
3. Každý řádek seznamu {{ui:Listy}} má pod názvem listu řádek s velikostí.
4. Zvolte {{ui:Podle formátu}} v záhlaví {{ui:Listy}}. Seznam seskupí listy pod jeden nadpis pro každou velikost, největší skupina je první, a velikost, u které je jen několik listů, označí jako odlišnou.
5. Zvolte {{ui:Podle formátu}} znovu a vrátíte se k původnímu pořadí sady.

List DWG nebo DXF papír nemá, takže se pro něj velikost nezobrazí.

## Jak se volí název

- Velikost pochází z rámečku stránky v PDF s uplatněným otočením.
- Názvy jsou řady A a B (ISO 216), řada C (ISO 269), ANSI A až E a ARCH A až E.
- Stránka do 2 mm od pojmenované velikosti dostane tento název. Jiná stránka se označí jako vlastní, s nejbližší pojmenovanou velikostí a odchylkou.

## V odhadu

Sešit odhadu má list {{ui:Formáty stran}} s počtem každé velikosti.

:::note
Hodnoty palců pro ANSI a ARCH byly zapsány podle publikovaných tabulek a zatím nebyly porovnány s vytištěnými normami.
:::
