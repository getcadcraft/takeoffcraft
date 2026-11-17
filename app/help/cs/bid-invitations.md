---
title: Odeslání balíku k nabídkám
summary: Pošlete e-mailem balík nabídek subdodavatelům, nechte je zadávat ceny na stránce bez přihlášení, držte ceny utajené do času otevření a přeneste je do srovnávacího listu.
keywords: odeslat k nabídkám, pozvánka, pozvánka k nabídce, uchazeč, subdodavatel, pozvat, e-mail, žádost o cenu, utajené nabídky, otevření nabídek, den nabídek, pozdní nabídka, termín, připomínka, záznamy subdodavatelů, pojištění, kvalifikace, csv, připojit, listy PDF
from: fb314b2c
---

{{ui:Export}} › {{ui:Balíky nabídek a srovnání…}} › {{ui:Odeslat k nabídkám…}} pošle jeden balík vybraným lidem. Web každému pošle e-mailem odkaz; otevřou stránku, uvidí rozsah a zadají cenu za každý řádek. Ceny uvidíte v srovnávacím listu, připravené k porovnání ([Balíky nabídek a srovnání nabídek](topic:bid-leveling)).

:::note
Odesílání **zatím není otevřeno všem.** Dokud je funkce testována, funguje pro účty, které tým CadCraft zapnul; pokud Váš není, dialog to řekne. Stránka uchazeče funguje u každé odeslané pozvánky.
:::

## Před odesláním

- Potřebujete účet CadCraft s ověřenou e-mailovou adresou. TakeoffCraft v prohlížeči vás vyzve k **Připojit**: otevře se karta na getcadcraft.com, stisknete Připojit a ta karta dostane přihlášení platné 30 dní, jen pro balíky nabídek, až do zavření karty TakeoffCraft. Můžete je kdykoli odebrat na své stránce zabezpečení. Okno Studio zatím odeslat nemůže.
- Každé položce přiřaďte číslo CSI: balík jsou položky jedné divize CSI ([Vytvoření položek výkazu](topic:create-items)).
- Nastavte měřítko listů, na kterých jsou značky balíku, aby množství, která uchazeč vidí, byla změřena.

## Odeslání balíku

1. Pod balíkem vyberte {{ui:Odeslat k nabídkám…}}.
2. Vyplňte název, projekt, volitelnou zprávu a **termín** ve vašem časovém pásmu.
3. Nechte zaškrtnuté **Držet ceny utajené**, aby byla každá cena skrytá až do **času otevření** (ne dříve než termín), nebo jej odškrtněte, abyste viděli ceny, jak přicházejí.
4. Nechte zaškrtnuté políčko listů, aby se odeslalo PDF listů s značkami balíku, s vykreslenými značkami. Vaše ceny nikdy nejsou v odeslaném obsahu: jen názvy položek, čísla CSI, množství, jednotky a názvy listů.
5. Napište pozvané lidi, každého na řádek, jako `Name <name@company.com>` nebo jen adresu, nebo zaškrtněte lidi ze záznamů subdodavatelů. Až 60 najednou, 100 na balík.
6. Vyberte {{ui:Odeslat pozvánky}}. Každý dostane jeden prostý e-mail s vaším jménem a e-mailovou adresou, termínem a odkazem; odpovědi přijdou Vám.

Dialog ukáže, kolik pozvánek bylo odesláno, a uvede, koho jste přeskočili: už pozvaný do tohoto balíku, požádal, aby mu nebyly posílány pozvánky k nabídkám, neplatná adresa, nebo překročený limit odesílání.

## Co vidí uchazeč

Stránka na dlouhém soukromém odkazu bez přihlášení. Ukáže, kdo ho pozval, termín, zda jsou ceny utajené, Vaši zprávu a PDF listů, pak každý řádek s množstvím. U každého řádku zadá cenu nebo zaškrtne **Nezahrnuto**, a může přidat poznámku; poznámky může přidat k celému balíku a až 3 soubory (nabídku, rozsahový dopis, certifikát). Může znovu uložit a měnit ceny až do otevření, nebo **odmítnout**, s políčkem, kterým požádá CadCraft, aby mu už nezasílal pozvánky k nabídkám.

## Utajené nabídky a otevření

Před časem otevření **nikdo** nevidí cenu, poznámku ani soubor: ani Vy, ani v TakeoffCraft, ani na stránce Balíky nabídek. Vidíte, kdo byl pozván a zda odpověděl. V čase otevření se všechny nabídky ukážou najednou. Nabídka uložená po termínu se přijme a označí jako **pozdní**; srovnání ji stále uvádí a pozdnost je označení, ne rozhodnutí. Po otevření uchazeč nemůže změnit cenu. Bez utajení je nabídka po termínu konečná.

## Získání cen

{{ui:Získat ceny}} se zeptá webu a každou odpověď přidá do balíku jako nabídku označenou **web**. TakeoffCraft se také tiše ptá pokaždé, když otevřete dialog, je-li připojen. Nabídka, jejíž uchazeč uložil novou verzi, se aktualizuje na místě; nabídka, kterou jste upravili, zůstane tak, jak jste ji nechali, dokud neodešle novou verzi. Každé stažení je jeden krok, který vrátí {{key:Mod+Z}}. Řádky vynechané nabídkou se přenesou jako rozsah, který nabídka nechává mimo, takže srovnání je doplní na Vaše náklady.

## Na webu

Váš účet má po odeslání ještě dvě stránky: **Balíky nabídek** vypisuje, co jste odeslali, kdo odpověděl, pozdní nabídky a soubory, umožňuje poslat připomínku (nový odkaz; starý přestane fungovat), uzavřít, znovu otevřít nebo zrušit balík. **Subdodavatelé** vede záznam pro každou firmu: kontakty, obory, kvalifikační odpovědi (roky na trhu, kapacita záruk, EMR, bezpečnostní záznam, odborová nebo firma bez odborů, reference), data platnosti licence a pojištění, označená, jakmile uplynou nebo jsou do 30 dnů, a jejich dřívější nabídky. Záznamy importujete a exportujete jako CSV: jeden řádek na kontakt, se sloupci, které export ukazuje; firma, kterou už máte, se aktualizuje a nikdy se neopakuje.

## Kdo co vidí a jak dlouho

Ceny, poznámky a soubory uchazeče jdou Vám a týmu CadCraft, který stránku provozuje. Uchovávají se 24 měsíců po termínu, soubory 180 dní; pak se smažou. E-mailová adresa uchazeče je ta, kterou jste zadali; slouží jen k odeslání pozvánky a případné připomínky. Jedna adresa dostane nejvýše 3 pozvánky denně od všech dohromady a Vy můžete odeslat až 200 denně.

## Zatím nehotovo

Dodatky, oznámení o přidělení, podepsaný rozsahový list pro každého uchazeče a automatické připomínky před vypršením pojištění ještě nejsou hotové. Viz [Ještě není hotovo](topic:not-built-yet).
