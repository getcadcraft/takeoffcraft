---
title: Sammansättningar och formler
summary: Lägg till komponenter till en post och låt formler omvandla dess längd, area eller antal till reglar, syllar, skivor, betong och beslag, med ett genomarbetat exempel på en vägg.
keywords: sammansättning, komponenter, formel, reglar, gipsskivor, skivor, syllar, betong, kubikyard, beslag, recept, typisk, postdelar
from: 12891a21
---

En posts **sammansättning** är en lista över komponenter, var och en med en mängdformel och egna spill och á-priser. Formeln använder postens uppmätta summor, så en mätning av en vägg ger dig reglar, syllar och skivor samtidigt, och de uppdateras när du mäter.

## Variabler du kan använda

| Postyp | Variabler |
|---|---|
| Linjär | `L` längd, `H` höjd, `A` väggarea (L × H), `N` antal sträckor |
| Area | `A` area, `P` omkrets (kontur + urtag), `H` djup eller tjocklek, `N` antal areor |
| Räkning | `N` räkning |

Värden anges i postens egna enheter: fot och kvadratfot för LF- och SF-poster, meter och kvadratmeter för m- och m²-poster. För en SY-post är `A` i kvadratyard, medan `P` och `H` förblir i fot.

Formler använder `+ - * /` (eller × ÷), parenteser, tal och funktionerna `ceil`, `floor`, `round`, `min`, `max` och `abs`. Alla regler finns i [Formelspråk](topic:formulas).

## Genomgånget exempel: en innervägg

Anta att du har mätt upp **Innervägg typ A** som en linjär post: 4 sträckor som tillsammans är 120 LF, med {{ui:Höjd}} satt till `9'-0"`. Dess **uppmätta** värden är L = 120, N = 4, A = 1,080 (SF väggyta, en sida).

1. Markera posten under {{ui:Poster}}.
2. Under {{ui:Sammansättning}} väljer du {{ui:Lägg till komponent}}.
   En komponent med namnet ”Komponent” visas, med formeln `L` och dess resultat under.
3. Skriv `Reglar 16 tum c/c` i {{ui:Namn}} och `EA` i {{ui:Enhet}}.
4. I {{ui:Mängdformel}} skriver du `ceil(L * 12 / 16) + N`.
   Resultatet uppdateras medan du skriver: ”= 94 EA”. Det är en regel var 16:e tum längs 120 fot (90), plus en extra för att avsluta vardera av de 4 sträckorna.
5. Välj {{ui:Lägg till komponent}} igen för syllarna: namn `Syllar, överst och underst`, enhet `LF`, formel `L * 2`. Resultat: 240 LF.
6. Lägg till skivorna: namn `Gipsskiva 4x8, båda sidor`, enhet `sheets`, formel `ceil(A * 2 / 32)`. Resultat: 68 sheets (2,160 SF skivyta ÷ 32 SF per skiva = 67.5, avrundat uppåt).
7. Fyll i {{ui:Spill %}}, {{ui:Material $}} och {{ui:Arbete $}} för varje komponent.
   Varje komponent får en egen rad under posten i {{ui:Mängder}}, prissatt som en post, och {{ui:Jobbets summa}} inkluderar den.

Om väggens kostnad helt ligger i komponenterna, låt postens egna material- och arbetspriser vara 0, annars räknas den två gånger.

:::tip
Spill tillämpas efter formeln och avrundas inte: 68 skivor med 10 % spill blir 74.8 skivor. För att beställa hela skivor, lägg in spillet i formeln, som `ceil(A * 2 / 32 * 1.1)`, och lämna komponentens spill på 0.
:::

## Fler formler

| Vad | Post | Formel |
|---|---|---|
| Reglar med 24 tum c/c | Linjär | `ceil(L / 2) + N` |
| Isoleringsmattor, SF | Linjär med höjd | `A` |
| Färg, båda sidor, gallon vid 350 SF | Linjär med höjd | `ceil(A * 2 / 350)` |
| Kakelkartonger om 15 SF, 10 % extra | Area | `ceil(A * 1.1 / 15)` |
| Socklar eller kantlister, LF | Area | `P` |
| Betong, kubikyard | Area med djup | `A * H / 27` |
| Betong avrundad uppåt till en kvarts kubikyard | Area med djup | `ceil(A * H / 27 * 4) / 4` |
| Gångjärn, tre per dörr | Räkning | `N * 3` |
| Minst en låda, en per 12 | Räkning | `max(1, ceil(N / 12))` |

## När en formel är fel

Raden under formeln blir ett felmeddelande, till exempel `"X" är inte ett uppmätt värde här. Använd L, H, A, N.` eller `Parentesen ")" saknas.` Komponenten får då inga belopp, dess rad i {{ui:Mängder}} visar ”Formelfel: …”, och rubriken säger ”Ofullständigt: 1 formelfel (ingår inte i summorna)”. Rätta formeln, så uppdateras summorna.

En formel som dividerar med noll är också ett fel (”Formeln dividerar med noll.”), till exempel `A / H` på en post utan djup.

## Begränsningar

- Formler körs på postens **summor**, inte körning för körning. `ceil(L * 12 / 16) + N` lägger till en regel per sträcka; det finns ännu ingen avrundning per sträcka.
- En formel kan bara använda sin egen posts variabler, inte en annan posts.
- Upp till 50 komponenter per post, 500 tecken per formel.

## Ta bort en komponent

Välj {{ui:Ta bort komponent}} under den. Du kan ångra med {{key:Mod+Z}}.
