---
title: Unități
summary: Unitățile în care poate raporta un articol, unitățile variabilelor formulei sale și modul în care se amestecă imperialul cu metricul.
keywords: unități, lf, sf, sy, sq, iarzi pătrați, pătrate de acoperiș, acri, hectare, metri, metri pătrați, ea, fiecare, metric, imperial, conversie, unitate implicită
from: b7bf0528
---

## Unitățile articolului

| Tip de articol | Unitate | Nume |
|---|---|---|
| Liniar | LF | picioare liniare (implicit) |
| Liniar | m | metri |
| Arie | SF | picioare pătrate (implicit) |
| Arie | SY | iarzi pătrați |
| Arie | SQ | pătrate de acoperiș (100 de picioare pătrate) |
| Arie | ac | acri |
| Arie | m² | metri pătrați |
| Arie | ha | hectare |
| Numărare | EA | fiecare |

Schimbați-o cu {{ui:UM}} din editorul de articole oricând, chiar și după măsurare; cantitatea se convertește imediat.

Lista {{ui:UM}} arată unitățile activate în {{ui:Setări}} › {{ui:General}} › {{ui:Unități}} și mereu unitatea proprie a articolului. Un articol nou pornește în unitatea de lungime sau de arie marcată acolo, dacă este una dintre unitățile articolului; altfel în LF sau SF. Vezi [Unități, valori tastate și listele de unități](common:unit-lists).

## Unitățile variabilelor formulei

| Unitatea articolului | L, P, H | A |
|---|---|---|
| LF | picioare | picioare pătrate (suprafața peretelui) |
| m | metri | metri pătrați (suprafața peretelui) |
| SF | picioare | picioare pătrate |
| SY | picioare | iarzi pătrați |
| SQ | picioare | pătrate |
| ac | picioare | acri |
| m² | metri | metri pătrați |
| ha | metri | hectare |

Pentru articolele SY, `A` este în iarzi pătrați, în timp ce `P` și `H` rămân în picioare. Un volum dintr-un articol SY este `A * 9 * H / 27` iarzi cubi; pentru plăci, folosirea SF este mai simplă.

## Unde unitățile sunt fixe

Unele afișaje folosesc mereu picioare:

- afișajul live din bara de stare la desenare (picioare-țoli, SF),
- **Marcă selectată** (picioare-țoli, LF și SF),
- rezultatul verificării (picioare-țoli, cu picioare zecimale și metri),
- lungimile segmentelor și perimetrele din foaia Marcaje a tabelului (picioare-țoli).

Totalurile articolelor, tabelul {{ui:Cantități}}, formulele și foaia Deviz folosesc unitatea proprie a articolului.

## Scările și unitățile sunt separate

Scara unei foi spune cât de mare este desenul; unitatea unui articol spune cum se raportează. Un desen metric la `1:100` poate fi antemăsurat în LF, iar unul imperial în m². Calibrarea acceptă orice unitate: `24'-6"`, `7.5 m`, `7500 mm`.

## Precizie

TakeoffCraft măsoară exact din punctele pe care le dați clic, inclusiv lungimile și suprafețele reale ale arcelor, și nu rotunjește cantitățile. Afișarea rotunjește lungimile la 1/16 de țol și zecimalele la două cifre. Banii sunt rotunjiți doar la sumele extinse, până la ban.
