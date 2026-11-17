---
title: Export rozpočtu a označeného PDF
summary: Stáhněte rozpočet jako sešit XLSX s živými vzorci nebo jako CSV a kopie vašich PDF s vykresleným výkazem.
keywords: návrh, souhrn nabídky, export, xlsx, tabulka, sešit, csv, označené pdf, tisk výkazu, přehled, sdílení, odeslání, legenda
from: 334f89c7
---

Exporty jsou stahování. Vytvářejí se ve vašem počítači z výkazu a otevřených PDF; nic se nikam neodesílá.

## Rozpočet jako tabulka (XLSX)

1. Na panelu nástrojů otevřete nabídku {{ui:Export}} a zvolte {{ui:XLSX}}.
   Prohlížeč stáhne `(name).xlsx`. Stavový řádek zobrazí "Exportováno (name).xlsx (rozpočet s živými vzorci, podle listů, značky, měřítka)." a když je rozpočet neúplný, přidá varování.
2. Otevřete jej v tabulkovém procesoru.

Sešit má čtyři listy a níže uvedené přehledy, pokud se použijí:

| List | Co obsahuje |
|---|---|
| Rozpočet | Řádek pro každou položku a komponentu: množství, odpad, množství s odpadem, sazby, materiál, práce, celkem, poznámky. Celkový součet zakázky dole. |
| Podle listu | Množství každé položky na každém listu s počtem značek. |
| Značky | Každá značka: list, položka, typ, množství a podrobnosti (délky úseků, hrubé a výřezové plochy, obvod). |
| Měřítka | Každý list, který má měřítko nebo značky: jeho měřítko, způsob nastavení (předvolba, nebo kalibrace podle zadané vzdálenosti) a stopy na jednotku PDF. |
| Souhrn výkazu | Množství každé položky, číslo CSI, značky a listy, bez cen. |
| Seznam materiálu | Každá část sestavy sečtená přes celý výkaz (stejná část použitá několika položkami je jeden řádek), s odpadem a cenou materiálu a položkami, které ji používají. |
| Žádost o nabídku | Seznam materiálu k odeslání dodavateli: množství s odpadem, prázdný sloupec jednotkových cen a součiny a celkem, které se doplní při zadávání cen. |
| Podle divizí | Materiál, práce a celkem podle divize CSI MasterFormat, pokud mají položky {{ui:Číslo CSI}}. |

S [souhrnem nabídky](topic:bid-summary) list Rozpočet končí také svými přirážkami (náklady na práci, daň z prodeje, režie, zisk, jistota a nabídková cena) jako živé vzorce.

List Rozpočet ponechává **živé vzorce**: množství s odpadem, zaokrouhlené částky za materiál a práci, celkem každého řádku a celkový součet zakázky. Tabulkové procesory je přepočítají, takže můžete v tabulce změnit sazbu nebo odpad a součty se přizpůsobí. Čísla, která vypočetl TakeoffCraft, jsou uložena také v buňkách a shodují se na cent.

Sloupec poznámek uvádí vzorec každé komponenty, chyby ve vzorcích, značky na listech bez měřítka, plochu stěn a obvod. Když něco chybí, řádek celkového součtu zakázky uvádí "Neúplné: viz poznámky výše".

Sešit byl ověřen v LibreOffice Calc, který jej přepočítal na stejné součty. V Excelu zatím otevřen nebyl. Podrobnosti sloupec po sloupci jsou v [Sloupce exportu](topic:export-columns).

## Rozpočet jako CSV

Otevřete nabídku {{ui:Export}} a zvolte {{ui:CSV}}. Dostanete `(name).csv`: stejné řádky a sloupce jako list Rozpočet, jako prosté hodnoty (bez vzorců), včetně celkového součtu zakázky. Použijte jej pro vložení do jiného rozpočtového nebo účetního systému.

CSV obsahuje pouze rozpočet; pro množství podle listů a seznam značek použijte XLSX. {{ui:Seznam materiálu}} ve stejné nabídce uloží samotný seznam materiálu jako CSV pro objednávání.

## Rozpočet v Google Sheets

Nad tabulkou Množství **Kopírovat pro Google Sheets** umístí rozpočet do schránky jako text oddělený tabulátory, se stejnými řádky jako CSV. V Google Sheet klikněte na buňku A1 a vložte. TakeoffCraft se k Google nepřihlašuje a nic tam neodesílá.

## Chybějící sazby a schválení

Řádek s množstvím a bez sazby má v poznámkách **Bez sazby** a export je započítá do součtů. Když byl rozpočet schválen, export uvede, kdo jej podepsal, kdy a na jaký celkový součet. Viz [Chybějící sazby a schválení rozpočtu](topic:sign-off-the-estimate).

## Označené PDF

1. Otevřete PDF, jejichž značky chcete vykreslit.
2. Otevřete nabídku {{ui:Export}} a zvolte {{ui:Označené PDF}}.
   Zobrazí se "Zapisování označeného PDF…", poté prohlížeč stáhne jeden soubor pro každé označené PDF, pojmenovaný `(PDF name) (takeoff).pdf`.

Na kopii:

- úseky jsou vykresleny jako čáry v barvě své položky,
- plochy jsou lehce vyplněny plnou obrysovou čárou a výřezy zůstávají otevřené,
- počty jsou tečky,
- každá stránka se značkami dostane malou legendu v levém dolním rohu: barva, název a množství každé položky na této stránce.

Vaše původní PDF se nemění.

Poznámky:

- Zapisují se pouze otevřená PDF. Značky na neotevřených PDF zůstávají v součtech, ale nejsou vykresleny; nejprve otevřete tato PDF.
- Názvy v legendě používají standardní písmo PDF. Znaky, které nelze zobrazit, se vytisknou jako "?".
- Šifrované PDF nelze zkopírovat se značkami: "Toto PDF je chráněno heslem nebo šifrováno, takže označenou kopii nelze zapsat. Samotný výkaz je v pořádku; místo toho exportujte tabulku."
- První {{ui:Označené PDF}} na kartě načte zapisovač PDF. Offline je k dispozici pouze tehdy, když lišta aplikace zobrazuje {{ui:Připraveno offline}}; viz [Práce offline](common:offline).

:::chromium
Při několika označených PDF se Chrome a Edge mohou jednou zeptat, zda tento web smí stahovat více souborů. Zvolte Povolit, jinak dostanete pouze první soubor.
:::

## Nic k exportu?

- {{ui:XLSX}} a {{ui:CSV}} potřebují alespoň jednu položku: "Zatím nic k exportu: vytvořte položku a změřte ji."
- {{ui:Označené PDF}} potřebuje značky na otevřeném PDF: "Na otevřených PDF zatím nejsou žádné značky."

## Uložte také výkaz

Export je přehled. Chcete-li později pokračovat ve výkazu, zvolte také {{ui:Uložit výkaz}}: viz [Uložení a znovuotevření výkazu](topic:save-and-reopen).

Chcete-li přidat režii, zisk, daň a jistotu a odeslat nabídku, viz [Souhrn nabídky a návrh](topic:bid-summary).
