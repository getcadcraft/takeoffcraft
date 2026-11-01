---
title: Soubory, které TakeoffCraft otevírá a ukládá
summary: Dovnitř PDF, ven soubor projektu výkazu, tabulky a označená PDF - co který obsahuje, kam míří a co se mění online, offline a mezi prohlížeči.
keywords: soubory, formáty, pdf, takeoff.json, soubor projektu, xlsx, csv, označené pdf, stáhnout, uložit, otevřít, offline
from: 1bf9be65
---

## Co otevírá

| Soubor | Jak | Poznámky |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otevřít plány}}, {{key:Mod+O}} nebo pustit na stránku | Více najednou. Každá strana se stane listem. |
| Projekt výkazu (`.takeoff.json`) | {{ui:Otevřít výkaz}} nebo pustit na stránku | Vaše položky, měřítka a značky. Můžete jej pustit spolu s jeho soubory PDF. |

Jiné soubory pustěné na stránku se přeskočí a stavový řádek je pojmenuje.

- **PDF chráněná heslem** se neotevřou: „(název) je chráněn heslem. Otevřete nechráněnou kopii.“
- **Stejné PDF dvakrát** se otevře jen jednou: „(název) je již otevřen.“ TakeoffCraft zná soubory podle obsahu, ne podle názvů.
- **Naskenovaná PDF** se otevřou a měří jako jakákoli jiná; TakeoffCraft text v PDF nepotřebuje.
- **Velké sady výkresů**: každé PDF se při otevření čte celé (aby se vytvořil jeho otisk), takže velmi velký soubor chvíli trvá. Miniatury se kreslí po jedné, jak posouváte.

## Co ukládá

Každé uložení je stažení. Do vašich souborů PDF se nic nezapisuje zpět.

| Zvolíte | Dostanete | Co je uvnitř |
|---|---|---|
| {{ui:Uložit výkaz}} | `(název).takeoff.json` | Položky, sestavy, sazby, měřítka listů a každá značka, svázané s každým PDF podle jeho obsahu. Žádné strany PDF. |
| {{ui:XLSX}} | `(název).xlsx` | Čtyři listy sešitu: Rozpočet (s živými vzorci), Podle listu, Značky, Měřítka. |
| {{ui:CSV}} | `(název).csv` | Rozpočet jako prosté hodnoty, jeden řádek na položku a komponentu. |
| {{ui:Označené PDF}} | `(název PDF) (takeoff).pdf` | Kopie každého otevřeného PDF, které má značky, s výkazem vykresleným na stranách a s legendou. Jeden soubor na PDF. |

Název se bere z prvního PDF, které jste v tomto výkazu otevřeli. Pole pro přejmenování zatím není: pokud chcete jiný název, stažený soubor přejmenujte.

Viz [Export rozpočtu a označeného PDF](topic:export-estimate) a [Sloupce exportu](topic:export-columns).

## Kam stažené soubory míří

Prohlížeč je uloží tam, kam ukládá každé stažení, obvykle do složky Stažené soubory. Najdete ji v {{pick:mac=Finderu|windows=Průzkumníku souborů|linux=správci souborů}}. Pokud je prohlížeč nastaven, aby se u každého souboru zeptal, kam uložit, zeptá se.

:::chromium
{{ui:Označené PDF}} s několika označenými PDF stáhne několik souborů najednou. Chrome a Edge se mohou jednou zeptat, zda tento web smí stahovat více souborů. Zvolte Povolit.
:::

:::safari
Safari ukládá do Stažených souborů, pokud jste v nastavení Safari v Obecné nezměnili umístění stahování.
:::

## Proč jsou soubor projektu a soubory PDF oddělené

Soubor `.takeoff.json` obsahuje jen váš výkaz. Své soubory PDF znovu najde podle obsahu (otisku každého souboru), takže:

- Nevadí přejmenování ani přesunutí PDF.
- PDF, které bylo změněno nebo znovu uloženo jiným programem, se počítá jako jiný soubor, i když má stejný název.
- Značky na neotevřených PDF se do součtů stále počítají.

Viz [Uložení a opětovné otevření výkazu](topic:save-and-reopen).

## Online a offline

Vaše soubory PDF a výkazy nikdy neopustí váš počítač, online ani offline. Připojení záleží jen při načítání samotného TakeoffCraftu.

Chcete-li pracovat bez připojení, uložte nejdřív aplikaci, dokud jste online:

1. Zvolte {{ui:Uložit pro offline}} v liště aplikace nahoře.
   Tlačítko při ukládání počítá, „Ukládání 12 z 40“.
2. Počkejte na {{ui:Připraveno offline}}.

Uložením TakeoffCraftu se v prohlížeči uchová aplikace, tato nápověda, čtečka PDF, zapisovač PDF používaný pro {{ui:Označené PDF}} a pracovní vlákno automatického počítání, celkem asi 6 MB. Jakmile říká {{ui:Připraveno offline}}, funguje offline vše: otevírání PDF, měření, {{ui:Automatické počítání}}, {{ui:Uložit výkaz}}, {{ui:XLSX}}, {{ui:CSV}} a {{ui:Označené PDF}}.

| Tlačítko říká | Význam |
|---|---|
| {{ui:Uložit pro offline}} | V tomto prohlížeči zatím neuloženo. Volbou uložíte. |
| Ukládání (n) z (m) | Právě se ukládá. |
| {{ui:Připraveno offline}} | Uloženo. Volbou získáte {{ui:Uložit znovu (získat nejnovější verzi)}} nebo {{ui:Odebrat offline kopii}}. |
| {{ui:Nepodařilo se uložit}} | Některé soubory se nestáhly. Zkontrolujte připojení a zvolte to znovu. |
| {{ui:Offline není dostupné}} | Toto okno prohlížeče nemůže offline kopii uchovat (soukromá okna a některé spravované počítače to blokují). |

Více, včetně toho, jak dlouho uložená kopie v každém prohlížeči vydrží: [Práce offline](common:offline).

:::offline
Jste offline. Pokud lišta aplikace zobrazuje {{ui:Připraveno offline}}, funguje vše. Pokud ne, části, které TakeoffCraft v této kartě ještě nenačetl (zapisovač PDF pro {{ui:Označené PDF}}, pracovní vlákno automatického počítání), se teď načíst nedají a {{ui:Označené PDF}} se zastaví se zprávou „Označené PDF nelze zapsat“. Váš výkaz je v bezpečí tak či tak: {{ui:Uložit výkaz}}, {{ui:XLSX}} a {{ui:CSV}} nepotřebují připojení. Kartu znovu nenačítejte, dokud nebudete zase online.
:::

:::online
Jste online. Před návštěvou stavby nebo letem zvolte {{ui:Uložit pro offline}} a počkejte na {{ui:Připraveno offline}}.
:::

## Tabulky

XLSX uchovává živé vzorce, takže tabulkový program rozpočet při otevření souboru přepočítá a udrží jej správně, když tam změníte sazbu nebo odpad. Sešit byl zkontrolován v LibreOffice Calc, který přepočítal každý součet na stejný haléř. V Excelu zatím otevřen nebyl.

CSV jsou prosté hodnoty se značkou pořadí bajtů, takže tabulkové programy správně přečtou znaky jako m².

## Desktop a cloud

:::desktop
Od 0.5 je desktopovou aplikací CadCraft Studio: TakeoffCraft a dalších sedm aplikací v jedné instalaci. Samostatný instalátor TakeoffCraftu neexistuje.
:::

Ukládání do cloudu zatím není k dispozici. Soubory `.takeoff.json` uchovávejte spolu se soubory PDF zakázky a zálohujte je jako jakýkoli jiný soubor. Viz [Kam míří vaše soubory](common:your-files).
