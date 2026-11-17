---
title: Přehled nabídky a cenová nabídka
summary: Přidejte mzdovou zátěž, daň z prodeje, režii, zisk a záruku k odhadu, napište zahrnuté a vyloučené položky a stáhněte cenovou nabídku v PDF k odeslání.
keywords: nabídka, mzdová zátěž, zátěž, mzdy, cenová nabídka, režie, zisk, přirážka, marže, daň z prodeje, záruka, zahrnuté položky, vyloučené položky, podmínky, podpis, klient, cena
from: 3208a561
---

Odhad oceňuje to, co jste změřili. **Přehled nabídky** z něj udělá cenu: přidá daň z prodeje, režii, zisk a záruku a vytvoří **cenovou nabídku v PDF** s Vašimi zahrnutými a vyloučenými položkami.

Otevřete ji přes {{ui:Export}} › {{ui:Přehled nabídky a cenová nabídka…}}. Vše v ní se ukládá s výkazem a každou změnu lze vrátit.

## Přirážky

Zadejte procento v kterékoli z pěti (ostatní nechte na 0). Počítají se v tomto pořadí, každé z toho, co je nad ním:

| Řádek | Počítá se jako |
|---|---|
| Materiál, Práce | Součty odhadu (základní nabídka, má-li výkaz [varianty](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Mzdová zátěž | Zátěž % × práce: odvody z mezd, pojištění a benefity z mezd vašich čet. |
| **Náklady** | Materiál + práce + mzdová zátěž. |
| Daň z prodeje z materiálu | Daň % × materiál. |
| Režie | Režie % × (náklady + daň). |
| Zisk | Zisk % × (náklady + daň + režie). |
| Záruka | Záruka % × vše výše. |
| **Nabídka** | Součet řádků. |

Každý řádek se zaokrouhluje na haléř. Sešit ukáže stejné řádky pod součtem listu Odhad, s živými vzorci. Přehled se aktualizuje při psaní: {{key:Enter}} procento potvrdí. Každá varianta se ukáže se stejnými přirážkami na svých vlastních nákladech, takže investor vidí, co její vyjmutí skutečně změní.

## Cenová nabídka

Vyplňte, co má cenová nabídka říkat:

- **Projekt** (název výkazu, je-li prázdný), **Pro** (klient) a **Od** (Vaše firma).
- **Zahrnuto** a **Vyloučeno**: jedna položka na řádek; úvodní pomlčka nebo odrážka je v pořádku.
- **Podmínky**: volný text, například "Platí 30 dní."
- **Vypsat položky a množství**: rozsah položku po položce, s množstvími a bez cen. Pro paušální nabídku to odškrtněte.

Vyberte {{ui:Cenová nabídka v PDF}}. PDF (`<takeoff> - proposal.pdf`) obsahuje datum, blok cen s každou přirážkou a nabídkou, varianty, rozsah, zahrnuté a vyloučené položky, podmínky a řádky k podpisu a datu. Pokud nebylo možné změřit některá množství (list bez měřítka), je to uvedeno pod cenou.

## V exportech

Jakmile má výkaz přehled nabídky, CSV na něj končí a sešit dostane list **Přehled nabídky** s každým řádkem, jeho procentem a částkou. Viz [Export odhadu](topic:export-estimate).
