---
title: Nastavení měřítka
summary: Přiřaďte každému listu měřítko pomocí předvolby nebo kalibrací na známý rozměr, zkontrolujte ho a pochopte, proč listy bez měřítka nejsou v součtech.
keywords: zjistit měřítko, číst měřítko, měřítko z textu, všechny listy, měřítko, kalibrovat, předvolba, kontrola měřítka, ověřit, známý rozměr, bez měřítka, žádné měřítko, poměr, nastavit měřítko
from: 8f0148e6
---

Každý list má vlastní měřítko. Nastavíte ho buď vy, nebo ho nechte TakeoffCraft přečíst z textu listů (níže), a zkontrolujte ho. Dokud list měřítko nemá, nástroje {{ui:Délková}}, {{ui:Plocha}}, {{ui:Kruh}} a {{ui:Výřez}} na něm odmítnou měřit. {{ui:Počet}} a {{ui:Automatické počítání}} fungují bez měřítka.

Seznam listů ukazuje měřítko každého listu, nebo **Bez měřítka**. Lišta pod otevřeným listem říká totéž.

## Použití předvolby (když je PDF vytištěno v plné velikosti)

1. Otevřete list.
2. Otevřete seznam {{ui:Předvolba}} ve skupině {{ui:Měřítko}}.
3. Vyberte měřítko vytištěné na výkresu, například `1/8" = 1'-0"` v části Architektonická.
   Stavový řádek říká "Měřítko pro tento list: 1/8" = 1'-0"."
4. Zkontrolujte ho (níže).

Předvolba předpokládá, že PDF má skutečný papírový formát, pro který byl výkres vytvořen. Pokud někdo vytvořil PDF s možností "přizpůsobit stránce", nebo jde o sadu v poloviční velikosti, předvolba je špatně. Místo toho kalibrujte.

Úplný seznam je v [Předvolby měřítka](topic:scale-presets).

## Čtení měřítek z textu listů

Většina výkresů uvádí své měřítko: `SCALE: 1/4" = 1'-0"` v razítku, `1:100` pod pohledem. TakeoffCraft ho umí přečíst a nastavit každý list najednou.

1. Otevřete seznam {{ui:Předvolba}} a zvolte {{ui:Ze textu listů…}} (nahoře).
2. Seznam ukazuje každý list: jeho aktuální měřítko a co říká jeho text — **Uvádí 1/4" = 1'-0"**, **V textu není měřítko**, nebo **Uvádí, že se nemá měřit** (NTS).
3. Listy bez měřítka, které nějaké uvádějí, jsou zaškrtnuty. Zaškrtněte nebo odškrtněte libovolný a zvolte {{ui:Nastavit zaškrtnutá měřítka}}. Jedno {{key:Mod+Z}} je vrátí všechna zpět.
4. Zkontrolujte jeden rozměr na každém listu pomocí {{ui:Kontrola}} (níže): předvolba je správná, jen když je PDF vytištěno v plné velikosti.

Čte zápisy architektonické (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inženýrské (`1" = 20'`) a metrické (`1:50`), které odpovídají [předvolbě](topic:scale-presets). Pokud list uvádí více měřítek (půdorys se zvětšenými detaily), vezme to, které uvádí nejčastěji, a to napsané za slovem SCALE se počítá dvakrát; ostatní se zobrazí červeně, abyste je zkontrolovali. Naskenovaný list nemá text: měřítko nastavte ručně.

## Kalibrace na známý rozměr

Použijte to, když neexistuje žádné vytištěné měřítko, kterému věříte, sada byla změněna velikostí, nebo list říká "not to scale", ale má kóty.

1. Otevřete list a přibližte dlouhý rozměr, který znáte, například rozestup os nebo celkový rozměr budovy. Čím delší, tím přesnější.
2. Zvolte {{ui:Kalibrovat}} ve skupině {{ui:Měřítko}}, nebo stiskněte {{key:K}}.
3. Klikněte na jeden konec rozměru. Pro přesnost přibližte každý konec; mezi kliknutími můžete přibližovat a posouvat.
4. Klikněte na druhý konec. Podržte {{key:Shift}}, aby čára zůstala na 0°, 45° nebo 90°.
   Otevře se dialog **Kalibrovat tento list**.
5. Do pole **Skutečná vzdálenost** zadejte skutečnou vzdálenost, například `24'-6 1/2"`, `24.5` (desetinné stopy), `30"` nebo `7.5 m`. Viz [Zadávání délek, cen a procent](topic:entry-formats).
6. Zvolte {{ui:Nastavit měřítko}}.
   Stavový řádek ukáže měřítko jako "1" = (n)'" a pokud je do 0.5% některé předvolby, řekne, které, například "což odpovídá 1/4" = 1'-0" (pro přesné měřítko vyberte tuto předvolbu)".
   TakeoffCraft se vrátí k nástroji {{ui:Vybrat}}.

Když kalibrace odpovídá předvolbě, výběr této předvolby dá přesné měřítko namísto takového, které závisí na tom, kam jste klikli.

## Kontrola měřítka

Nové měřítko vždy ověřte na druhém rozměru.

1. Zvolte {{ui:Kontrola}} ve skupině {{ui:Měřítko}}, nebo stiskněte {{key:D}}.
2. Klikněte na oba konce rozměru vytištěného na výkresu.
   Stavový řádek ukáže "Kontrola: 12'-6"" se stejnou délkou v desetinných stopách a metrech a kontrolní čára zůstane na listu i s délkou.
3. Porovnejte ji s vytištěným rozměrem. Pokud nesedí, kalibrujte na delším rozměru.

Stisknutím {{key:Esc}} kontrolní čáru smažete.

## Změna měřítka

Vyberte jinou předvolbu, nebo kalibrujte znovu. Pokud list už má měření, TakeoffCraft se zeptá **Změnit měřítko tohoto listu?** a řekne, kolik měření bude přepočítáno. Zvolte {{ui:Změnit měřítko}}. Každý úsek a plocha na listu se přepočítá v novém měřítku. Můžete to vrátit pomocí {{key:Mod+Z}}.

## Proč listy bez měřítka nejsou počítány jako nula

Značka na listu bez měřítka nemá skutečnou délku ani plochu. TakeoffCraft ji nikdy nepočítá jako nulu, což by tiše udělalo rozpočet příliš nízký. Místo toho:

- tyto značky vynechá ze součtů,
- u položky v {{ui:Množství}} ukáže "+(n) bez měřítka",
- v záhlaví tabulky ukáže "Neúplné: (n) značek na listech bez měřítka (nezahrnuto do součtů)",
- zapíše počet do sloupce poznámek tabulkového exportu.

To se může stát, když otevřete projekt, jehož měřítka nikdy nebyla nastavena. Dejte listu měřítko a značky se hned započítají. Značky počtu se počítají vždy; měřítko nepotřebují.

## Tipy

- Před začátkem měření nastavte měřítko na každém listu, který budete měřit. Projděte seznam listů a hledejte **Bez měřítka**, abyste našli zbylé (vyhledávací pole hledá v názvech listů, ne v měřítkách).
- Detaily a zvětšené půdorysy na stejném listu často používají jiné měřítko. TakeoffCraft má na list jedno měřítko; viz [Co ještě není hotovo](topic:not-built-yet).
- Metrické výkresy: vyberte metrickou předvolbu, například `1:100`, nebo kalibrujte metrickou vzdáleností, například `6000 mm`.
