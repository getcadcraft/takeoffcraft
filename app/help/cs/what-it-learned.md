---
title: Co se naučilo z vašich výkazů výměr
summary: TakeoffCraft si uchovává symboly potvrzené pomocí Automatického počítání, vaše sady podmínek, sestavy, které nejčastěji používáte, a vzory značek, které opakujete na každé straně, vše uvnitř vlastního souboru výkazu. Prohlédněte si je, použijte je, smažte je.
keywords: naučit se, naučené, učení, asistent, zapamatovat, symboly, šablony, stejně jako minulá zakázka, minulá zakázka, sada podmínek, podmínky, znovupoužití, sestavy, nejpoužívanější, návrhy, opakovat na každé straně, každá strana, razítko, vzor, vymazat vše, zapomenout, soukromí
from: 54d99e99
---

TakeoffCraft se s každým výkazem výměr zrychluje. Učí se **jen z toho, co přijmete**:

- symboly, které jste označili pomocí [Automatické počítání](topic:auto-count) a pak přidali,
- sady podmínek, které uložíte,
- sestavy, které používáte (jednou za zakázku),
- vzory značek, které opakujete na každé straně.

Je to prosté porovnávání na vašich vlastních listech, stejné hledání, jaké provádí Automatické počítání. Není to natrénovaný model. Vše, co se naučí, je uloženo **v souboru tohoto výkazu** (`.takeoff.json`) a nikam se to neposílá. Chcete-li to přenést do další zakázky, použijte [Stejně jako minulá zakázka](topic:what-it-learned#same-as-last-job).

Vyberte {{ui:Naučené}} na panelu nástrojů (žárovka vedle {{ui:Automatické počítání}}) a uvidíte všechno.

## Symboly

Když označíte symbol pomocí {{ui:Automatické počítání}} a zvolíte {{ui:Přidat}}, označený symbol se uchová se zvolenou úrovní shody.

- V {{ui:Naučené}} zvolte {{ui:Najít na tomto listu}} nebo {{ui:Najít na každém listu}}. Otevře se obvyklé přezkoumání Automatického počítání: kliknutím na rámeček jej vynecháte, posuňte jezdec a pak je přidejte. Nic se nepřidá, dokud to neuděláte.
- Když otevřete list, na kterém zatím není žádný z naučených symbolů, nahoře se objeví lišta, která nabídne {{ui:Najít …}} pro něj. {{ui:Teď ne}} ji pro tento list skryje.
- Pokud výkaz nemá položku s tímto názvem, přidání značek přidá i položku (jeden krok zpět).
- Přidání symbolu stejné položky se počítá k tomu, který už zná; symbol s jiným vzhledem se uchová jako druhý.
- Stejně jako Automatické počítání najde symbol pootočený o pravý úhel a na listech v jiném měřítku.

## Sady podmínek

Sada uchovává podmínky výkazu (položky s jejich jednotkami, sazbami, odpadem a sestavami), bez značek.

1. V {{ui:Naučené}} zvolte {{ui:Uložit podmínky tohoto výkazu výměr jako sadu…}} a zadejte jméno. Sada se stejným jménem se nahradí.
2. Ve výkazu, který sadu obsahuje, {{ui:Přidat}} vloží podmínky, které ještě nemá. Podmínky se stejným názvem a typem se nechají být. Je to jeden krok zpět.

## Stejně jako minulá zakázka

Soubor minulé zakázky obsahuje to, co se naučila. Chcete-li novou zakázku založit z něj:

1. Otevřete nové plány a zvolte {{ui:Naučené}} › {{ui:Stejně jako minulá zakázka…}}.
2. Vyberte `.takeoff.json` minulé zakázky.
3. Zaškrtněte, co převzít: její podmínky (jen ty, které tento výkaz ještě nemá) a to, co se naučila (symboly, sady, sestavy, vzory). Pak zvolte {{ui:Přinést je}}.

Její podmínky se také uloží jako sada pojmenovaná podle té zakázky. Její značky a množství zůstávají v jejím vlastním souboru. Celé to je jeden krok zpět.

## Sestavy, které nejčastěji používáte

Položka, která má sestavu, se počítá jako použitá jednou za zakázku, když má množství a výkaz uložíte. Zakázka je soubor plánů, z nichž se výkaz odečítá, takže opětovné uložení téhož výkazu se nepočítá dvakrát. Seznam pod {{ui:Nejčastěji používané sestavy}} řadí ty, které používáte nejvíc, nahoře. Vynechává ty, které tento výkaz už má. {{ui:Přidat}} vloží jednu tak, jak jste ji naposledy použili, se všemi jejími částmi.

## Opakovat na každé straně

U značek, které jsou stejné na každé straně sady, jako počet na razítku nebo typický detail:

1. Vyberte značky na jednom listu ([Výběr značek](topic:copy-paste#select-the-marks)).
2. V {{ui:Naučené}} zvolte {{ui:Opakovat vybrané značky na každé straně…}}, pojmenujte vzor a potvrďte.

Objeví se na každé další otevřené straně **stejné velikosti**, na stejném místě, v jednom kroku zpět. Délky a plochy se dávají jen na strany se stejným měřítkem; počty na kteroukoli stranu dané velikosti. Strana, která je už má, se přeskočí. Vzor se uchová, takže strany, které otevřete později, dostanou nabídku na liště, nebo použijete {{ui:Opakovat na každé straně}} v seznamu.

## Prohlédnout si, smazat

Všechno, co se naučilo, je vypsáno v {{ui:Naučené}}. Koš smaže jednu věc. {{ui:Vymazat vše}} smaže vše, co se naučilo, a vaše položky a značky nechá být. Obojí lze vzít zpět, dokud výkaz nezavřete, a obojí se ukládá spolu s výkazem.

Chcete-li přestat se učit v jednom výkazu, zrušte zaškrtnutí {{ui:Učit se z tohoto výkazu výměr}}. Nic nového se nenaučí a to, co je vypsáno, zůstává, dokud to nesmažete.

## Dobré vědět

- Starší verze TakeoffCraft otevřou soubor s naučenými věcmi normálně. Tuto část ignorují a při dalším uložení souboru ji zahodí.
- Naučený symbol je malý obrázek toho, co jste označili, uložený v souboru (každý několik kilobajtů).
- Naučené symboly se hledají stejně jako v Automatickém počítání, takže platí stejná omezení: [Automatické počítání symbolu](topic:auto-count).
