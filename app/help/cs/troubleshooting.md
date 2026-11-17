---
title: Řešení potíží
summary: Příznaky, příčiny a opravy hlášení a překvapení, na která můžete v TakeoffCraftu narazit, citované tak, jak je app zobrazuje.
keywords: problémy, chyby, nefunguje, oprava, nápověda, odmítnuto, nezměří, bez měřítka, chybějící značky, export selhal, offline, dotyk
from: cd319c9b
---

TakeoffCraft vysvětluje většinu odmítnutí ve stavovém řádku dole v okně. Najděte zprávu níže.

## Otevírání souborů

| Zpráva nebo příznak | Příčina | Oprava |
|---|---|---|
| PDF prohlížeč nemohl načíst. Obnovte stránku a zkuste to znovu. | PDF prohlížeč aplikace se nenačetl, obvykle proto, že jste offline a aplikace nebyla nikdy uložena pro práci offline. | Připojte se a stránku obnovte. Pak zvolte {{ui:Uložit pro offline}} a počkejte na {{ui:Připraveno offline}}; viz [Práce offline](common:offline). |
| (název) je chráněn heslem. Otevřete kopii bez hesla. | PDF pro otevření vyžaduje heslo. | Požádejte o kopii bez hesla, nebo heslo odstraňte v programu pro PDF, kterému důvěřujete. |
| (název) nelze načíst jako PDF (…) | Soubor je poškozený, nebo to ve skutečnosti není PDF. | Stáhněte jej znovu, nebo jej znovu uložte z programu, který jej vytvořil. |
| (název) je již otevřen. | Stejné PDF (stejný obsah) je už otevřené. | Nic není třeba dělat. |
| TakeoffCraft otevírá PDF a projekty .takeoff.json. Přeskočeno: … | Ostatní typy souborů byly vynechány. | Nejprve převeďte výkresy do PDF. |
| Když přetáhnu soubory, nic se nestane | Soubory byly přetaženy mimo okno prohlížeče, nebo prohlížeč otevřel PDF v nové záložce. | Přetáhněte je na samotnou stránku TakeoffCraftu; rámeček "Přetáhněte PDF nebo .takeoff.json" ukáže, kdy to bude fungovat. |
| Otevření velké sady trvá dlouho | Každé PDF se celé načte, aby se získal jeho otisk. | Počkejte, až zmizí zpráva "Otevírání (název)…". Náhledy se doplní při posouvání. |

## Měření

| Zpráva nebo příznak | Příčina | Oprava |
|---|---|---|
| Nejprve otevřete PDF. | Není otevřen žádný list. | Otevřete PDF. |
| Tento list zatím nemá měřítko, takže nelze měřit. Nejprve vyberte předvolbu měřítka, nebo kalibrujte (počty fungují i bez něj). | Nástroje délka, plocha, kruh a výřez potřebují měřítko. | [Nastavte měřítko](topic:set-the-scale). |
| Nejprve vytvořte délkovou položku (pojmenujte ji v části Položky) a pak klikněte na list. | Není položka tohoto typu. | Vyplňte formulář {{ui:Nová položka}}, který se otevřel, a zvolte {{ui:Přidat}}. |
| Nejprve vyberte položku k vykázání (panel Položky). | Aktuální položka byla smazána. | Klikněte na položku pod {{ui:Položky}}. |
| Úsek potřebuje alespoň dva body. | Dokončili jste po jednom kliknutí. | Klikněte alespoň do dvou bodů. |
| Plocha potřebuje alespoň tři body. | Příliš málo rohů. | Klikněte alespoň do tří rohů. |
| Obrys se kříží sám se sebou, takže jeho plocha by byla špatně. Nakreslete jej znovu bez křížení. | Tvar osmičky. | Nakreslete jej jako dvě plochy, nebo obejděte hranu postupně. |
| Tyto body neohraničují žádnou plochu. | Všechny body leží na jedné přímce. | Klikněte na rohy, které ohraničují prostor. |
| Nejprve vyberte značku plochy (nástroj {{ui:Vybrat}}), pak zvolte {{ui:Výřez}} a nakreslete otvor uvnitř ní. | {{ui:Výřez}} potřebuje vybranou plochu. | Stiskněte {{key:V}}, klikněte na plochu, pak {{key:X}}. |
| Výřez musí být zcela uvnitř plochy. | Otvor se kříží nebo přesahuje obrys. | Nakreslete otvor uvnitř plochy. |
| Výřezy se nesmějí překrývat. | Dva otvory se překrývají. | Nakreslete jeden otvor kolem obou, nebo je udržte od sebe. |
| … Bod byl vrácen zpět. | Přetažený roh by způsobil, že se obrys zkříží sám se sebou, nebo by vytlačil otvor ven. | Přetáhněte na místo, které zachová platný tvar. |
| Klikněte na bod na okraji kruhu, mimo jeho střed. | Druhé kliknutí bylo příliš blízko středu. | Klikněte dál od středu. |
| Kliknutí posouvá list místo přidávání bodů | Ukazatel se při stisknutém tlačítku pohnul víc než o několik pixelů; to se počítá jako tažení. | Klikněte bez pohybu, zvlášť na touchpadu. |
| Shift nepřichytává | Umísťujete bod na oblouk, nebo kreslíte kruh. | Přichycení na 45° platí jen pro přímé úseky. |
| Body přeskakují na blízkou čáru | Přichycení k čárám výkresu je zapnuto. | Přibližte, abyste klikali mezi čárami, nebo stiskněte {{key:F3}} a přichycení vypněte. |
| Nezobrazuje se značka přichycení | Přichycení je vypnuto, list je sken, nebo nástroj nepřichytává (Počet, Automatické počítání, vkládání). | Stiskněte {{key:F3}}; u skenu nejsou čáry, na které by se dalo přichytit. |
| Délka je špatně | Měřítko je špatně (často u změněné velikosti PDF s předvolbou). | Použijte {{ui:Kontrola}} na známou kótu, pak {{ui:Kalibrovat}}. |

## Měřítko

| Zpráva nebo příznak | Příčina | Oprava |
|---|---|---|
| Vyberte dva body dál od sebe. | Kalibrační body leží téměř na sobě. | Kalibrujte na delší kótě. |
| Zpráva v dialogu kalibrace, například "Tuto vzdálenost nelze přečíst" | Vzdálenost je v podobě, kterou TakeoffCraft nečte. | Viz [Zadávání délek, sazeb a procent](topic:entry-formats). |
| Tento list zatím nemá měřítko, takže není co kontrolovat. Zkalibrujte jej, nebo vyberte předvolbu. | {{ui:Kontrola}} na listu bez měřítka. | Nejprve nastavte měřítko. |
| Seznam {{ui:Předvolba}} je šedý | Není otevřen žádný list. | Otevřete PDF. |

## Množství a vzorce

| Zpráva nebo příznak | Příčina | Oprava |
|---|---|---|
| Neúplné: … (není v součtech) | Chyba vzorce, nebo značky na listech bez měřítka. | Viz [Čtení množství a rozpočtu](topic:read-quantities#the-incomplete-warning). |
| +(n) bez měřítka vedle položky | Některé její značky jsou na listech bez měřítka. | Dejte těmto listům měřítko. |
| Chyba vzorce: … | Vzorec nelze vypočítat. | Viz [Jazyk vzorců](topic:formulas#errors). |
| Tato položka má značky, takže se její typ nemůže změnit. | Typ je po vzniku značek uzamčen. | Vytvořte novou položku jiného typu a značky s ní nakreslete znovu. |
| Položka potřebuje název. | Pole názvu bylo vyprázdněno. | Napište název. |
| Zadejte částku jako 12.50. / Zadejte procento jako 10 nebo 7.5. | Sazbu nebo odpad nelze přečíst. | Viz [Zadávání délek, sazeb a procent](topic:entry-formats). |
| Celkový součet je dvojnásobný | Položka má vlastní sazby a komponenty, které nesou stejné náklady. | Nastavte vlastní sazby položky na 0, když komponenty nesou náklady. |
| Značky této položky jsou na PDF, která nejsou otevřena. | Klikli jste na položku, jejíž všechny značky jsou na PDF, která jste neotevřeli. | Otevřete tato PDF; jejich názvy jsou uvedeny pod {{ui:Listy}}. |

## Automatické počítání

| Zpráva nebo příznak | Příčina | Oprava |
|---|---|---|
| Ten rámeček je příliš malý. Nakreslete jej kolem celého symbolu. | Rámeček je drobný. | Přibližte a ohraničte celý symbol. |
| Ten rámeček je téměř prázdný. Nakreslete jej kolem symbolu. | Rámeček obsahuje jen papír. | Ohraničte samotný symbol. |
| Žádné shody. Snižte posuvník {{ui:Shoda}}, nebo ohraničte symbol těsněji. | Nic nedosáhlo dost vysokého skóre. | Ohraničte symbol těsně, nebo posuňte posuvník {{ui:Shoda}} níž. |
| Příliš mnoho shod, včetně špatných symbolů | Podobné symboly mají skóre blízké skutečnému. | Zvyšte posuvník {{ui:Shoda}} a špatné rámečky odmítněte kliknutím. |
| Shody chybí na jiných listech | Tyto listy kreslí symbol v jiné velikosti, nebo v úhlu, který není krokem 90°. | Prohledejte tyto listy rámečkem nakresleným tam, nebo počítejte ručně. |
| (n) listů bylo příliš velkých na prohledání při této velikosti symbolu. | List by byl při pracovní velikosti příliš velký. | Ohraničte větší symbol, nebo ten list spočítejte ručně. |
| Hledání selhalo: … | Hledání na pozadí se zastavilo. | Zkuste to znovu; pokud se to opakuje, obnovte stránku (nejprve uložte). Offline funguje, jen když lišta aplikace zobrazí {{ui:Připraveno offline}}. |
| Tažení kreslí rámeček místo posouvání | Tak funguje {{ui:Automatické počítání}}. | Podržte {{key:Space}} a táhněte, nebo tahejte prostředním tlačítkem. |

## Ukládání a export

| Zpráva nebo příznak | Příčina | Oprava |
|---|---|---|
| Zatím není co exportovat: vytvořte položku a vykažte ji. | Nejsou žádné položky. | Nejprve vytvořte položku. |
| Na otevřených PDF zatím nejsou žádné značky. | {{ui:Označené PDF}} nemá na čem kreslit. | Otevřete PDF, která mají značky. |
| Toto PDF je chráněno heslem nebo šifrováno, takže označenou kopii nelze zapsat. … | PDF je zašifrováno. | Exportujte {{ui:XLSX}} místo toho, nebo použijte nešifrovanou kopii PDF (pak potřebuje vlastní výkaz, protože je to jiný soubor). |
| Označené PDF nelze zapsat: … | Často: offline a aplikace nebyla uložena pro práci offline, takže chybí zapisovač PDF. | Připojte se a znovu zvolte {{ui:Označené PDF}}. Aby k tomu nedošlo, zvolte {{ui:Uložit pro offline}} a počkejte na {{ui:Připraveno offline}}. |
| Stáhlo se jen jedno označené PDF | Prohlížeč zablokoval více stahování najednou. | Povolte pro tento web více stahování a exportujte znovu. |
| (soubor) není projekt TakeoffCraft (není platný JSON). / Toto není soubor projektu TakeoffCraft. | Špatný soubor, nebo poškozený. | Vyberte soubor `.takeoff.json`. |
| Tento projekt uložil novější TakeoffCraft. Otevřete jej tam. | Soubor pochází z novějšího sestavení. | Otevřete jej v novějším sestavení. |
| (n) značek bylo poškozeno a vynecháno. | Část souboru byla poškozena nebo upravena ručně. | Zbytek se otevřel. Nakreslete chybějící značky znovu, nebo otevřete starší kopii. |
| Značky chybí po znovuotevření | PDF nejsou otevřena, nebo se některé změnilo. | Viz [Uložení a znovuotevření výkazu](topic:save-and-reopen#when-a-pdf-has-changed). |
| Prohlížeč se ptá "Opustit web?" | Jsou neuložené změny. | Zůstaňte a uložte pomocí {{key:Mod+S}}. |

## Klávesy a myš

| Příznak | Příčina | Oprava |
|---|---|---|
| Klávesy písmen nedělají nic | Kurzor je v poli (hledání, editor položky, tabulka). | Klikněte na list, nebo stiskněte {{key:Tab}} a z pole vyjděte. |
| Kolečko přibližuje místo posouvání | Kolečko vždy přibližuje list. | Přetažením posouvejte. |
| Celá stránka se zvětšila nebo zmenšila | Zoom prohlížeče ({{key:Mod+Plus}} nebo {{key:Mod+Minus}}). | Stiskněte {{key:Mod+0}}. Zoom listu dělejte kolečkem, nebo samotnými {{key:Plus}} a {{key:Minus}}. |
| Značka zmizela, když jsem stiskl Backspace | Backspace smaže vybranou značku, když nekreslíte. | {{key:Mod+Z}} ji vrátí. |
| Pravé kliknutí na Macu kreslení neukončí | Kliknutí s Control se zpracuje jako obyčejné kliknutí. | Použijte dvouprstové kliknutí se zapnutým sekundárním kliknutím, nebo stiskněte {{key:Enter}}. |

## Dotykové obrazovky

Na dotykové obrazovce:

- **Klepnutí** umístí bod (nebo vybere značku pomocí {{ui:Vybrat}}). Tažení jedním prstem posouvá.
- **Dva prsty** štípnutím přibližují kolem bodu mezi nimi a posouvají, když se pohybují společně. Položení druhého prstu zruší to, co začal první, takže štípnutí nikdy nenechá bod.
- **Dokončete** úsek nebo obrys **dlouhým stiskem** (pravé kliknutí), **dvojklepnutím**, nebo {{ui:Dokončit}} na liště dole na listu. Na téže liště je {{ui:Zezadu}} (vezme poslední bod zpět) a {{ui:Zrušit}}. Plochy se uzavřou také klepnutím na první bod.
- Prsty mají větší cíle: body se přichytávají, zavírají a vybírají z dálky a úchyty rohů jsou větší.

Psaní délek potřebuje klávesnici; klávesnice na obrazovce funguje, když je aktivní pole {{ui:Zadání}}.

Na tabletu výrazně usnadní výkaz klávesnice a myš nebo touchpad.

## Práce offline

| Tlačítko nebo příznak | Příčina | Oprava |
|---|---|---|
| {{ui:Nepodařilo se uložit}} | Některé soubory aplikace se při ukládání pro práci offline nestáhly. | Zkontrolujte připojení a zvolte tlačítko znovu. |
| {{ui:Offline není dostupné}} | Privátní okna a některé spravované počítače blokují kopie pro offline. | Použijte běžné okno, nebo jiný prohlížeč. |
| "Ukládání…" nikdy nezačne | Jste offline; ukládání potřebuje připojení. | Ukládejte online. |
| Aplikace je po aktualizaci stará | Kopie pro offline je z dřívějšího dne. | Online zvolte {{ui:Připraveno offline}}, pak {{ui:Uložit znovu (získat nejnovější verzi)}}. |
| Chcete zpět místo | Kopie pro offline má asi 6 MB. | Zvolte {{ui:Připraveno offline}}, pak {{ui:Odebrat offline kopii}}. |

Viz [Práce offline](common:offline).

## Pořád nefunguje

Obnovte stránku, pokud aplikace přestane reagovat. Váš výkaz se při obnovení ztratí, pokud jste jej neuložili, takže pokud můžete, nejprve uložte pomocí {{key:Mod+S}}. Pro otázky k prohlížečům viz [Prohlížeče a počítače](common:browsers).
