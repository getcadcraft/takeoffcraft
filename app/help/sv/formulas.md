---
title: Formelspråk
summary: Reglerna för formler för mängder i kalkylsammansättningar – variabler, operatorer, funktioner, avrundning och alla felmeddelanden.
keywords: formel, uttryck, syntax, funktioner, ceil, floor, round, min, max, abs, variabler, operatorer, beräkning
from: 4da14575
---

Komponenter i en kalkylsammansättning får sin mängd från en formel. En formel är ett litet aritmetiskt uttryck över postens uppmätta värden. Se [Kalkylsammansättningar och formler](topic:assemblies) för exempel.

## Variabler

| Posttyp | Variabel | Betydelse |
|---|---|---|
| Linjär | `L` | Total längd |
| Linjär | `H` | Postens höjd |
| Linjär | `A` | Väggarea, L × H, minus öppningarna i de sträckor som har dem (en avtagning från BimCraft). När avtagningen anger en mätmetod mäts `A` med den: öppningar som inte är större än metodens minsta storlek tas med, och det metoden tar bort där väggar möts utelämnas. Noten under posten anger metoden |
| Linjär | `N` | Antal sträckor |
| Area | `A` | Total nettoarea (omkretsar minus urtag) |
| Area | `P` | Total omkrets, inklusive urtagens kanter |
| Area | `H` | Postens djup eller tjocklek |
| Area | `N` | Antal areor |
| Räkna | `N` | Antalet |

- Variablerna är i postens enheter: se [Enheter](topic:units).
- Versaler och gemener är samma: `l` är `L`.
- Bara variablerna för postens egen typ fungerar. `P` på en linjär post ger `"P" är inte ett uppmätt värde här. Använd L, H, A, N.`
- Ett tomt värde för höjd eller djup är 0.

## Operatorer

| Skriv | Betydelse |
|---|---|
| `+` | Addera |
| `-` eller `−` | Subtrahera, eller ett negativt värde |
| `*` eller `×` | Multiplicera |
| `/` eller `÷` | Dividera |
| `( )` | Gruppera |

Multiplikation och division går före addition och subtraktion: `L * 2 + 4` är (L × 2) + 4. Använd parenteser när du är osäker.

Tal kan ha decimaler (`1.333`, `.5`) och exponenter (`1e3` = 1000). Mellanslag ignoreras.

## Funktioner

| Funktion | Resultat | Exempel |
|---|---|---|
| `ceil(x)` | Avrunda uppåt till ett heltal | `ceil(67.5)` = 68 |
| `floor(x)` | Avrunda nedåt till ett heltal | `floor(67.5)` = 67 |
| `round(x)` | Avrunda till närmaste heltal, halvtal bort från noll | `round(2.5)` = 3 |
| `round(x, d)` | Avrunda till d decimaler (0 till 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Det minsta värdet | `min(N, 10)` |
| `max(a, b, …)` | Det största värdet | `max(1, ceil(N / 12))` |
| `abs(x)` | Värdet utan tecken | `abs(-3)` = 3 |

`ceil` och `floor` ignorerar små avrundningsfel i datorn, så ett värde som ska vara exakt 1 avrundas aldrig upp till 2.

## Fel

En formel som inte kan läsas eller räknas ut visar sitt fel under fältet, och komponenten utelämnas ur summorna (rubriken {{ui:Mängder}} säger ”Ofullständig”). Meddelanden:

| Meddelande | Åtgärd |
|---|---|
| Skriv en formel, till exempel L eller ceil(L / 1.333) + 1. | Formeln är tom. |
| ”X” är inte ett uppmätt värde här. Använd … | Använd en av de listade variablerna. |
| ”X” är inte en funktion här. Använd ceil, floor, round, min, max, abs. | Använd en av dessa funktioner. |
| ”#” är inte tillåtet i en formel. | Ta bort tecknet (enheter, `%`, `$` och `=` är inte tillåtna). |
| En ”)” saknas. / Det finns en ”)” utan sin ”(”. | Balansera parenteserna. |
| Ett värde saknas före ”)”. | Till exempel `max(1, )`: fyll i värdet. |
| Formeln slutar för tidigt. | Till exempel `L *`: avsluta den. |
| Oväntat ”…”. Saknas en operator? | Två värden bredvid varandra, till exempel `2L`: skriv `2 * L`. |
| ceil() tar 1 värde. | Ge funktionen rätt antal värden. |
| round(x, digits) behöver heltal från 0 till 10 för decimalerna. | Använd ett heltal av decimaler. |
| Formeln delar med noll. | Oftast är H 0: ange postens höjd eller djup. |
| Formeln ger inget tal. | Resultatet är för stort för att vara ett tal. |
| Formeln är för lång (högst 500 tecken). | Korta ner den. |

## Säker på design

En formel kan bara räkna med variablerna och funktionerna ovan. Den kan inte köra kod eller läsa något annat, så en formel i en projektfil som någon skickar till dig är ofarlig.
