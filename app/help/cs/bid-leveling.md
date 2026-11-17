---
title: Balíky nabídek a srovnání nabídek
summary: Rozdělte odhad do balíků podle oboru, pošlete rozsah každého balíku subdodavatelům, porovnejte nabídky na stejném rozsahu a použijte vybranou nabídku jako cenu balíku.
keywords: srovnání nabídek, srovnání, balík nabídek, subdodavatel, subnabídka, rozsah, doplněk, obor, divize CSI, porovnat nabídky, nejnižší nabídka, tabulka nabídek, uchazeč, přidělení, vybraná nabídka, použít nabídku, cena subdodávky
from: 856b3088
---

Generální dodavatel pošle rozsah každého oboru subdodavatelům a porovná, co se vrátí. TakeoffCraft to dělá obojí z výkazu: otevřete {{ui:Export}} › {{ui:Balíky nabídek a srovnání…}}.

## Balíky

Pro každou divizi CSI, kterou vaše položky používají, je jeden balík (první dvě číslice {{ui:Číslo CSI}} položky, viz [Vytvoření položek výkazu](topic:create-items)). Položky bez čísla tvoří vlastní balík. Každý balík ukazuje své položky, na kolika listech jsou jeho značky, a naše vlastní náklady na něj (materiál a práce před přirážkami, ze základní nabídky).

Vyberte {{ui:Rozsah CSV}}, abyste stáhli, co poslat subdodavateli: každou položku s číslem CSI, množstvím, jednotkou a listy, na kterých je. Neobsahuje ceny. Pro dodavatele materiálu obsahuje poptávka sešitu seznam dílů (viz [Export odhadu](topic:export-estimate)).

## Zadání nabídek

1. Do prázdného řádku pod balíkem napište jméno uchazeče a částku nabídky, pak vyberte {{ui:Přidat nabídku}}.
2. Pokud nabídka vynechává část rozsahu, otevřete její seznam {{ui:Vynecháno}} a zaškrtněte tyto položky.
3. Chcete-li opravit jméno nebo částku, přepište je v tabulce; tlačítko × nabídku odebere.

Každá změna je jeden krok, který vrátí {{key:Mod+Z}}, a nabídky se ukládají s výkazem.

## Jak se nabídky srovnávají

Nabídky zřídka pokrývají stejný rozsah. Srovnání doplní každou vynechanou položku **doplňkem** za naše vlastní náklady na ni, takže se každá nabídka porovnává na celém balíku:

**Srovnaná = nabídka + doplňky**

Nejnižší srovnaná nabídka je označena **Nejnižší**; při shodě ta, která byla zadána jako první. **Oproti našim nákladům** je srovnaná nabídka minus naše vlastní náklady na balík: záporné číslo znamená, že je pod nimi. Nabídka, která vypadá nejnižší, může prohrát, jakmile se započítá chybějící rozsah.

Sešit dostane list **Srovnání nabídek** se všemi balíky, které mají nabídky: náš odhad, každou nabídku, její doplňky, srovnaný součet a rozdíl, jako živé vzorce, a co každá nabídka vynechala.

## Použití nabídky jako ceny balíku

Vyberte u nabídky {{ui:Použít}} a stane se cenou celého balíku ve vašem odhadu: vlastní ocenění balíku (položky, jejich doplňkové podmínky a části sestav) vypadne z celkové ceny zakázky, položky zůstanou jako množství s vašimi sazbami pro přehled, a jeden řádek, **Vybraná nabídka**, nese částku nabídky. Položky, které nabídka vynechává, zůstanou na vaše vlastní náklady, což srovnání už počítalo jako doplněk. Vyberte jinou nabídku, nebo tutéž znovu, abyste ji vzali zpět; každý výběr je jeden krok, který vrátí {{key:Mod+Z}}.

V přehledu nabídky jsou subnabídky jedním řádkem uvnitř nákladů: režie, zisk a záruka se k nim přidávají jako k jakýmkoli jiným nákladům; daň z prodeje (jen z materiálu) a mzdová zátěž (z práce) nikoli. List Odhad v sešitu nese vybranou nabídku jako vlastní řádek a blok přirážek ji přičte, s živými vzorci. Seznam materiálu vynechává materiál přiděleného balíku, protože ho dodá subdodavatel.

Balík uvnitř rozpočtové oblasti varianty se znovu neoceňuje: varianty a mezisoučty oblastí stále používají vaše vlastní ceny.

## Nabídky, které přijdou e-mailem

Nabídky nemusíte přepisovat. {{ui:Odeslat k nabídkám…}} pod balíkem pošle každému subdodavateli e-mailem odkaz na stránku, kde zadá cenu za každý řádek; {{ui:Získat ceny}} stáhne, co poslal, do této tabulky. Viz [Odeslání balíku k nabídkám](topic:bid-invitations).

:::note
Zadání nabídky ručně stále funguje a ručně zadaná nabídka i nabídka z webu jsou vedle sebe. Nabídky, které přišly z webu, jsou označeny **web** (nebo **web, pozdě**, pokud dorazily po termínu); jejich cena se změní jen tehdy, když uchazeč pošle novou verzi, takže Vaše vlastní úpravy zůstanou až do té doby.
:::
