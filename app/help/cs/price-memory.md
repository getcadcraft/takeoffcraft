---
title: Paměť cen z minulých zakázek
summary: TakeoffCraft si pamatuje sazby, které jste použili ve výkazech, jen na tomto počítači, takže nový výkaz může začít od toho, co jste minule zaplatili. Zobrazte je, použijte je, zapomeňte je.
keywords: paměť cen, ceny, pamatovat si ceny, poslední zakázka, minulé zakázky, typická cena, medián, sazby, neoceněné, přeceňování, naučit se z minulého výkazu, zapomenout, knihovna
from: 7279f1a1
---

{{ui:Prices}} na panelu nástrojů (znak dolaru) otevře přehled toho, co si TakeoffCraft pamatuje o cenách, které jste použili. Je to prostý seznam: pro každý název položky sazby z vašich posledních zakázek. Je uložen v tomto prohlížeči (ve Studiu ve vlastním webovém zobrazení) vedle knihovny cen, nikdy uvnitř souboru výkazu, a nic se nikam neodesílá. Není to natrénovaný model.

## Co se pamatuje

Když uložíte výkaz, každá položka, která má cenu a je použita (má značku, nebo typované množství větší než nula), se pamatuje pod svým názvem a typem: sazba za materiál, sazba za práci, odpad a jednotka. Zakázka je soubor plánů, z nichž se výkaz odebírá, takže opětovné uložení stejného výkazu nahradí jeho vlastní ceny, místo aby přidalo další zakázku. Pro každý název se uchovává posledních 12 zakázek.

Pro začátek se svou starší prací zvolte {{ui:Learn from a past takeoff…}} a vyberte uložený výkaz (.json). Jeho oceněné, použité položky se zapamatují stejným způsobem.

Názvy se shodují, když se shodují jejich slova, bez ohledu na velikost písmen nebo interpunkci ("2x4 Stud, 8 ft" a "2x4 stud 8 FT" jsou stejné). Stejná slova pro jiný druh položky (délková položka a položka počtu) nejsou stejná cena.

## Použití na novém výkazu

1. Vytvořte položky nového výkazu.
2. Zvolte {{ui:Prices}}. Pod {{ui:This takeoff}} vidíte každou položku, která má zapamatovanou cenu, co na ní máte nyní, sazby poslední zakázky, typické sazby (střed zapamatovaných zakázek) a rozsah.
3. Zvolte {{ui:Use last}} nebo {{ui:Use typical}} u jedné položky, nebo {{ui:Price N unpriced items from memory}} pro vyplnění každé položky bez ceny ze sazeb poslední zakázky.

Každé použití je jeden krok: {{key:Ctrl+Z}} ho vrátí zpět. Položka, která má jen podobný název (jeden název je uvnitř druhého), to řekne a tlačítka použijí sazby podobného názvu. Cena zapamatovaná za kus se nikdy nedá položce za stopu: dialog řekne, že jednotky se liší, a nechá ji být.

## Zobrazit, změnit, zapomenout

{{ui:Everything remembered}} vypisuje každý název se sazbami a počtem zakázek. Tlačítko koše zapomene jeden název; {{ui:Clear all prices}} zapomene všechny. Vypněte {{ui:Remember my prices when I save a takeoff}}, abyste přestali pamatovat; co už tam je, zůstane, dokud to nezapomenete. Vaše výkazy ani knihovna cen se nikdy nedotknou.

## S vaším asistentem

Pokud v Nastavení povolíte asistenty, mohou číst, co je zapamatováno pro položky výkazu (prices_list), a oceňovat z toho položky (prices_apply, který může nejdřív ukázat náhled). Je to tentýž seznam jako v dialogu.
