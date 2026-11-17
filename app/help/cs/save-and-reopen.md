---
title: Uložení a znovuotevření výkazu
summary: Uložte výkaz jako projektový soubor .takeoff.json, znovu jej otevřete se stejnými PDF a zjistěte, co se stane, když PDF chybí nebo se změnilo.
keywords: výkaz v PDF, vložit, příloha, uložit, otevřít, znovu otevřít, projekt, takeoff.json, pokračovat, revidované PDF, změněné PDF, chybějící PDF, záloha, automatické ukládání, obnovit, pád
from: bd5080a6
---

Výkaz se ukládá jako malý projektový soubor `(name).takeoff.json`. Obsahuje vaše položky, sestavy, jednotkové ceny, měřítko každého listu a každou značku. PDF **neobsahuje**; najde je znovu podle jejich obsahu.

## Uložení

1. Zvolte {{ui:Uložit výkaz}} ve skupině {{ui:Soubor}}, nebo stiskněte {{key:Mod+S}}.
   Váš prohlížeč stáhne `(name).takeoff.json`. Stavový řádek říká "Soubor (name).takeoff.json byl uložen. Znovu se otevře nad stejnými PDF (páruje se podle jejich obsahu)."
2. Přesuňte soubor vedle PDF zakázky, aby zůstaly pohromadě.

Každé uložení stáhne nový soubor. Váš prohlížeč může druhý pojmenovat `(name) (1).takeoff.json`; ponechte nejnovější.

Název se odvodí od prvního PDF, které jste v tomto výkazu otevřeli.

:::note
{{ui:Uložit výkaz}} je stále jediný způsob, jak uchovat výkaz jako soubor. Během práce TakeoffCraft také ukládá záložní kopii v tomto prohlížeči (viz níže) a ukládání do cloudu zatím není k dispozici. Pokud se pokusíte zavřít kartu s neuloženými změnami, prohlížeč se zeptá, zda chcete odejít.
:::

## Uložení výkazu uvnitř PDF

{{ui:Export}} › {{ui:PDF s výkazem uvnitř}} stáhne kopii každého otevřeného PDF, pojmenovanou například `Plans (with takeoff).pdf`, která nese celý výkaz jako přílohu: položky, značky, měřítka, oblasti nabídek, prostě vše, co obsahuje `.takeoff.json`. Stránky zůstávají nedotčeny, takže vypadají a tisknou se jako originál, a jiné čtečky PDF uvádějí výkaz mezi přílohami.

Otevřete toto PDF v TakeoffCraftu (jakkoli otevíráte PDF) a zeptá se **Toto PDF obsahuje výkaz**: zvolte {{ui:Otevřít výkaz}}, abyste ho získali zpět, nebo {{ui:Jen PDF}}, abyste otevřeli jen výkres. Kopie představuje PDF, ze kterého vznikla, takže `.takeoff.json` uložený z kterékoli z nich se otevře u obou.

Při několika PDF nese každá kopie celý výkaz; otevřete je společně. Opětovné uložení z kopie nahradí výkaz uvnitř ní, nepřidá druhý. `.takeoff.json` je stále soubor, který si máte nechat: je malý a zapisuje ho automatické ukládání i desktopová aplikace.

## Když se karta nebo prohlížeč zastaví

Pár sekund po každé změně si TakeoffCraft uloží kopii výkazu do vlastního úložiště tohoto prohlížeče, spolu s PDF, pokud jejich velikost nepřesahuje 64 MB. Nic se nenahrává na server. Když výkaz uložíte, začnete nový nebo otevřete jiný projekt, kopie zmizí.

Pokud karta spadne, prohlížeč nebo počítač se zastaví, nebo odejdete s neuloženými změnami, při příštím otevření TakeoffCraftu se zeptá **Obnovit práci?** a vypíše výkaz podle názvu. Zvolte **Obnovit**, aby se vrátil: položky, značky a měřítka se obnoví a jeho PDF se znovu otevřou, pokud byla uchována. Stavový řádek říká "Obnoveno (name). Ještě není uloženo do souboru; {{ui:Uložit výkaz}} ho uloží." Pokud byla PDF příliš velká na uchování, otevřete je znovu; značky se objeví na jejich listech. Více: [Obnovit práci](common:recover).

## Znovuotevření

1. Otevřete TakeoffCraft.
2. Přetáhněte soubor `.takeoff.json` a jeho PDF na stránku společně. Nebo zvolte {{ui:Otevřít plány}} pro PDF a {{ui:Otevřít výkaz}} pro projekt, v libovolném pořadí.
   Stavový řádek říká "Otevřeno (name): 12 položek, 340 značek." Každý list získá zpět své měřítko a značky se objeví na svých listech.

Pořadí PDF nehraje roli, stejně jako nehrají roli jejich názvy nebo složky. TakeoffCraft každé PDF rozpozná podle otisku jeho obsahu.

Pokud otevřete projekt, zatímco aktuální výkaz má neuložené změny, TakeoffCraft se nejdřív zeptá: **Zrušit**, **Zahodit změny**, nebo **Nejdřív uložit výkaz**. Otevření projektu nahradí aktuální položky a značky; PDF, která jsou už otevřená, zůstanou otevřená.

## Když chybí PDF

Pokud otevřete projekt bez všech jeho PDF, stavový řádek doplní "Otevřete jeho PDF, abyste viděli značky (uvedeno v seznamu listů)." Pod seznamem listů poznámka říká:

"Tento výkaz zahrnuje také PDF, která nejsou otevřena. Jejich množství se započítává; otevřete je, abyste viděli a upravili jejich značky:"

následované názvy souborů a velikostmi. Jejich značky se stále počítají do všech součtů a exportů, s měřítky, při kterých byly naměřeny. Otevřete tato PDF, abyste viděli a upravili značky.

## Když se PDF změnilo

PDF, které bylo revidováno, nebo jen znovu uloženo jiným programem, má jiný obsah, takže je pro TakeoffCraft **jiným souborem**, i když má stejný název. V poznámce pod seznamem listů takový soubor říká "soubor s tímto názvem je otevřen, ale jeho obsah se liší".

- Značky zůstanou připojeny ke staré verzi. Dál se počítají, na svých starých pozicích a měřítkách.
- Revidované PDF se otevře jako nové listy bez měřítka a bez značek.

Chcete-li přenést výkaz na revizi, otevřete obě PDF a na novém listu použijte {{ui:Porovnat}}: [Porovnání revidovaného listu a přenesení výkazu](topic:compare-revisions).

## Poškozený nebo cizí soubor

TakeoffCraft zkontroluje každý projektový soubor, než ho použije. Můžete vidět tato hlášení:

- "(file) není projekt TakeoffCraftu (není platný JSON)."
- "Toto není projektový soubor TakeoffCraftu."
- "Tento projekt uložil novější TakeoffCraft. Otevřete ho tam."
- "3 značky byly poškozeny a vynechány." (zbytek se otevře)

## Historie zpět

Historie zpět začíná od nuly, když otevřete projekt. Uložení ji nemaže.
