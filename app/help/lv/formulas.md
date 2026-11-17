---
title: Formulu valoda
summary: Noteikumi mezglu daudzumu formulām: mainīgie, operatori, funkcijas, noapaļošana un visi kļūdu ziņojumi.
keywords: formula, izteiksme, sintakse, funkcijas, ceil, floor, round, min, max, abs, mainīgie, operatori, aprēķins
from: 4da14575
---

Mezglu komponentu daudzumu iegūst no formulas. Formula ir neliela aritmētiska izteiksme pār vienuma izmērītajām vērtībām. Praktiskus piemērus skatiet sadaļā [Mezgli un formulas](topic:assemblies).

## Mainīgie

| Vienuma veids | Mainīgais | Nozīme |
|---|---|---|
| Lineārs | `L` | Kopējais garums |
| Lineārs | `H` | Vienuma augstums |
| Lineārs | `A` | Sienas laukums, L × H, mīnus to joslu atvērumi, kurām tie ir (apjomu aprēķins no BimCraft). Kad šis apjomu aprēķins nosauc mērīšanas metodi, `A` tiek mērīts ar to: atvērumi, kas nav lielāki par metodes mazāko izmēru, paliek iekšā, un tas, ko metode ņem apjomā, kur sienas saskaras, tiek izlaists. Vienuma zem piezīmes norādīta metode |
| Lineārs | `N` | Joslu skaits |
| Laukums | `A` | Kopējais neto laukums (kontūras mīnus izgriezumi) |
| Laukums | `P` | Kopējais perimetrs, ieskaitot izgriezumu malas |
| Laukums | `H` | Vienuma dziļums vai biezums |
| Laukums | `N` | Laukumu skaits |
| Skaits | `N` | Skaits |

- Mainīgie ir vienuma mērvienībās: skatiet [Mērvienības](topic:units).
- Lielie un mazie burti ir vienādi: `l` ir `L`.
- Darbojas tikai paša vienuma veida mainīgie. `P` lineārajam vienumam dod: `"P" šeit nav izmērīta vērtība. Izmantojiet L, H, A, N.`
- Tukšs augstums vai dziļums ir 0.

## Operatori

| Raksta | Nozīme |
|---|---|
| `+` | Saskaitīt |
| `-` vai `−` | Atņemt vai negatīva vērtība |
| `*` vai `×` | Reizināt |
| `/` vai `÷` | Dalīt |
| `( )` | Grupēt |

Reizināšana un dalīšana notiek pirms saskaitīšanas un atņemšanas: `L * 2 + 4` ir (L × 2) + 4. Ja šaubāties, lietojiet iekavas.

Skaitļiem var būt decimāldaļas (`1.333`, `.5`) un eksponenti (`1e3` = 1000). Atstarpes tiek ignorētas.

## Funkcijas

| Funkcija | Rezultāts | Piemērs |
|---|---|---|
| `ceil(x)` | Noapaļo uz augšu līdz veselam skaitlim | `ceil(67.5)` = 68 |
| `floor(x)` | Noapaļo uz leju līdz veselam skaitlim | `floor(67.5)` = 67 |
| `round(x)` | Noapaļo līdz tuvākajam veselam skaitlim, pusi, tālāk no nulles | `round(2.5)` = 3 |
| `round(x, d)` | Noapaļo līdz d decimāldaļām (0 līdz 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Mazākā vērtība | `min(N, 10)` |
| `max(a, b, …)` | Lielākā vērtība | `max(1, ceil(N / 12))` |
| `abs(x)` | Vērtība bez zīmes | `abs(-3)` = 3 |

`ceil` un `floor` ignorē sīkus datora noapaļošanas troksni, tāpēc vērtība, kurai jābūt tieši 1, nekad netiek noapaļota uz 2.

## Kļūdas

Formula, ko nevar nolasīt vai aprēķināt, rāda savu kļūdu zem lauka, un komponents tiek izlaists no kopsummām (virsraksts {{ui:Quantities}} rāda "Nepilnīgs"). Ziņojumi:

| Ziņojums | Labojums |
|---|---|
| Ievadiet formulu, piemēram, L vai ceil(L / 1.333) + 1. | Formula ir tukša. |
| "X" šeit nav izmērīta vērtība. Izmantojiet … | Izmantojiet kādu no uzskaitītajiem mainīgajiem. |
| "X" šeit nav funkcija. Izmantojiet ceil, floor, round, min, max, abs. | Izmantojiet kādu no šīm funkcijām. |
| "#" formulā nav atļauts. | Noņemiet šo rakstzīmi (mērvienības, `%`, `$` un `=` nav atļauti). |
| Trūkst ")". / Ir ")" bez "(". | Līdziniet iekavas. |
| Pirms ")" trūkst vērtības. | Kaut kas kā `max(1, )`: ievadiet vērtību. |
| Formula beidzas pārāk agri. | Kaut kas kā `L *`: pabeidziet to. |
| Neparedzēts "…". Vai trūkst operatora? | Divas vērtības blakus, piemēram, `2L`: rakstiet `2 * L`. |
| ceil() pieņem 1 vērtību. | Dodiet funkcijai pareizo vērtību skaitu. |
| round(x, digits) vajag veselus ciparus no 0 līdz 10. | Izmantojiet veselu decimāldaļu skaitu. |
| Formula dala ar nulli. | Parasti H ir 0: iestatiet vienuma augstumu vai dziļumu. |
| Formula nedod skaitli. | Rezultāts ir par lielu, lai būtu skaitlis. |
| Formula ir pārāk gara (ne vairāk kā 500 rakstzīmes). | Saīsiniet to. |

## Drošs pēc dizaina

Formula var veikt tikai aritmētiku ar iepriekš minētajiem mainīgajiem un funkcijām. Tā nevar palaist kodu vai nolasīt ko citu, tāpēc formula projekta failā, ko kāds jums nosūta, ir nekaitīga.
