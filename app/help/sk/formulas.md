---
title: Jazyk vzorcov
summary: Pravidlá pre vzorce množstiev zostáv - premenné, operátory, funkcie, zaokrúhľovanie a všetky chybové hlásenia.
keywords: vzorec, výraz, syntax, funkcie, ceil, floor, round, min, max, abs, premenné, operátory, výpočet
from: 4da14575
---

Komponenty zostáv získavajú množstvo z vzorca. Vzorec je malý aritmetický výraz nad nameranými hodnotami položky. Príklady nájdete v [Zostavy a vzorce](topic:assemblies).

## Premenné

| Typ položky | Premenná | Význam |
|---|---|---|
| Dĺžka | `L` | Celková dĺžka |
| Dĺžka | `H` | Výška položky |
| Dĺžka | `A` | Plocha steny, L × H, bez otvorov úsekov, ktoré ich obsahujú (výkaz z BimCraft). Ak výkaz uvádza metódu merania, `A` sa meria podľa nej: otvory nie väčšie ako najmenšia veľkosť metódy zostávajú zarátané a to, čo metóda odpočíta v mieste styku stien, sa vynecháva. Poznámka pod položkou uvádza metódu |
| Dĺžka | `N` | Počet úsekov |
| Plocha | `A` | Celková čistá plocha (obrysy mínus výrezy) |
| Plocha | `P` | Celkový obvod vrátane hrán výrezov |
| Plocha | `H` | Hĺbka alebo hrúbka položky |
| Plocha | `N` | Počet plôch |
| Počet | `N` | Počet |

- Premenné sú v jednotkách položky: pozri [Jednotky](topic:units).
- Veľké a malé písmená sú rovnaké: `l` je `L`.
- Fungujú iba premenné vlastného typu položky. `P` pri dĺžkovej položke dá `"P" tu nie je nameraná hodnota. Použite L, H, A, N.`
- Prázdna výška alebo hĺbka je 0.

## Operátory

| Zapíšte | Význam |
|---|---|
| `+` | Sčítanie |
| `-` alebo `−` | Odčítanie alebo záporná hodnota |
| `*` alebo `×` | Násobenie |
| `/` alebo `÷` | Delenie |
| `( )` | Zoskupenie |

Násobenie a delenie sa vykonajú pred sčítaním a odčítaním: `L * 2 + 4` je (L × 2) + 4. Ak si nie ste istí, použite zátvorky.

Čísla môžu mať desatinné miesta (`1.333`, `.5`) a exponenty (`1e3` = 1000). Medzery sa ignorujú.

## Funkcie

| Funkcia | Výsledok | Príklad |
|---|---|---|
| `ceil(x)` | Zaokrúhli nahor na celé číslo | `ceil(67.5)` = 68 |
| `floor(x)` | Zaokrúhli nadol na celé číslo | `floor(67.5)` = 67 |
| `round(x)` | Zaokrúhli na najbližšie celé číslo, polovice od nuly | `round(2.5)` = 3 |
| `round(x, d)` | Zaokrúhli na d desatinných miest (0 až 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Najmenšia hodnota | `min(N, 10)` |
| `max(a, b, …)` | Najväčšia hodnota | `max(1, ceil(N / 12))` |
| `abs(x)` | Hodnota bez znamienka | `abs(-3)` = 3 |

`ceil` a `floor` ignorujú malé zaokrúhľovacie chyby počítača, takže hodnota, ktorá má byť presne 1, sa nikdy nezaokrúhli nahor na 2.

## Chyby

Vzorec, ktorý sa nedá prečítať alebo vypočítať, zobrazí svoju chybu pod poľom a komponent sa vynechá zo súčtov (hlavička {{ui:Množstvá}} uvedie „Neúplné“). Hlásenia:

| Hlásenie | Náprava |
|---|---|
| Zadajte vzorec, napríklad L alebo ceil(L / 1.333) + 1. | Vzorec je prázdny. |
| „X“ tu nie je nameraná hodnota. Použite … | Použite jednu z uvedených premenných. |
| „X“ tu nie je funkcia. Použite ceil, floor, round, min, max, abs. | Použite jednu z týchto funkcií. |
| „#“ nie je vo vzorci povolené. | Odstráňte tento znak (jednotky, `%`, `$` a `=` nie sú povolené). |
| Chýba „)“. / Je tu „)“ bez svojej „(“. | Vyvážte zátvorky. |
| Pred „)“ chýba hodnota. | Napríklad `max(1, )`: doplňte hodnotu. |
| Vzorec končí predčasne. | Napríklad `L *`: dokončite ho. |
| Neočakávané „…“. Chýba operátor? | Dve hodnoty vedľa seba, napríklad `2L`: napíšte `2 * L`. |
| ceil() berie 1 hodnotu. | Funkcii zadajte správny počet hodnôt. |
| round(x, digits) potrebuje celé číslice od 0 do 10. | Použite celý počet desatinných miest. |
| Vzorec delí nulou. | Zvyčajne H je 0: nastavte výšku alebo hĺbku položky. |
| Vzorec nedáva číslo. | Výsledok je príliš veľký na to, aby bol číslom. |
| Tento vzorec je príliš dlhý (najviac 500 znakov). | Skráťte ho. |

## Bezpečný návrh

Vzorec môže vykonávať iba aritmetiku s premennými a funkciami uvedenými vyššie. Nemôže spúšťať kód ani čítať nič iné, takže vzorec v projektovom súbore, ktorý vám niekto pošle, je neškodný.
