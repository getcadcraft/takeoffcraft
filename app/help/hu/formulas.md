---
title: Képletnyelv
summary: Az összetevő-mennyiségi képletek szabályai: változók, műveletek, függvények, kerekítés és minden hibaüzenet.
keywords: képlet, kifejezés, szintaxis, függvények, ceil, floor, round, min, max, abs, változók, műveletek, számítás
from: 4da14575
---

Az összetevők mennyisége képletből származik. A képlet egy kis aritmetikai kifejezés a tétel mért értékein. Példákért lásd [Összetevők és képletek](topic:assemblies).

## Változók

| Tétel típusa | Változó | Jelentése |
|---|---|---|
| Lineáris | `L` | Teljes hossz |
| Lineáris | `H` | A tétel magassága |
| Lineáris | `A` | Falfelület, L × H, levonva a nyílászárókat azoknál a szakaszoknál, amelyek tartalmazzák őket (BimCraft-mennyiségkimutatásból). Ha a mennyiségkimutatás mérési módot nevez meg, az `A` ezzel mérődik: a módszer legkisebb méreténél kisebb nyílások bent maradnak, a falak találkozásánál a módszer által levont rész kimarad. A tétel alatti megjegyzés megnevezi a módszert. |
| Lineáris | `N` | A szakaszok száma |
| Terület | `A` | Teljes nettó terület (körvonalak mínusz kivágások) |
| Terület | `P` | Teljes kerület, a kivágások széleit is beleértve |
| Terület | `H` | A tétel mélysége vagy vastagsága |
| Terület | `N` | A területek száma |
| Darabszám | `N` | A darabszám |

- A változók a tétel mértékegységében vannak: lásd [Mértékegységek](topic:units).
- A kis- és nagybetű azonos: az `l` ugyanaz, mint az `L`.
- Csak a tétel saját típusának változói működnek. Lineáris tételnél a `P` ezt adja: `"P" itt nem mért érték. Használja: L, H, A, N.`
- Az üres magasság vagy mélység 0.

## Műveletek

| Írva | Jelentése |
|---|---|
| `+` | Összeadás |
| `-` vagy `−` | Kivonás, vagy negatív érték |
| `*` vagy `×` | Szorzás |
| `/` vagy `÷` | Osztás |
| `( )` | Csoportosítás |

A szorzás és az osztás az összeadás és a kivonás előtt történik: `L * 2 + 4` jelentése (L × 2) + 4. Kétség esetén használjon zárójelet.

A számok lehetnek tizedesek (`1.333`, `.5`) és kitevősek (`1e3` = 1000). A szóközöket a rendszer figyelmen kívül hagyja.

## Függvények

| Függvény | Eredmény | Példa |
|---|---|---|
| `ceil(x)` | Felfelé egész számra kerekít | `ceil(67.5)` = 68 |
| `floor(x)` | Lefelé egész számra kerekít | `floor(67.5)` = 67 |
| `round(x)` | A legközelebbi egész számra kerekít, a felezéseket a nullától távolabb | `round(2.5)` = 3 |
| `round(x, d)` | d tizedesjegyre kerekít (0-tól 10-ig) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | A legkisebb érték | `min(N, 10)` |
| `max(a, b, …)` | A legnagyobb érték | `max(1, ceil(N / 12))` |
| `abs(x)` | Az előjel nélküli érték | `abs(-3)` = 3 |

A `ceil` és a `floor` figyelmen kívül hagyja a számítógépes kerekítés apró zaját, így az egyre számított érték soha nem kerekítődik 2-re.

## Hibák

Ha a képletet nem lehet olvasni vagy kiszámolni, a hibáját a mező alatt mutatja, az összetevő pedig kimarad az összegekből (a {{ui:Mennyiségek}} fejléc „Hiányos” feliratot kap). Üzenetek:

| Üzenet | Javítás |
|---|---|
| „Adja meg a képletet, például L vagy ceil(L / 1.333) + 1.” | A képlet üres. |
| „"X" itt nem mért érték. Használja: …” | Használja az egyik felsorolt változót. |
| „"X" itt nem függvény. Használja: ceil, floor, round, min, max, abs.” | Használja ezek egyikét. |
| „A "#" nem megengedett a képletben.” | Távolítsa el a karaktert (a mértékegységek, a `%`, a `$` és az `=` nem megengedettek). |
| „Hiányzik a ")".” / „Van ")", amelynek nincs "(" párja.” | Egyensúlyba hozza a zárójeleket. |
| „Hiányzik érték a ")" előtt.” | Például `max(1, )`: adjon meg egy értéket. |
| „A képlet túl korán véget ér.” | Például `L *`: fejezze be. |
| „Váratlan "…". Hiányzik egy művelet?” | Két érték egymás mellett, például `2L`: írja `2 * L`-ként. |
| „A ceil() 1 értéket vesz.” | Adja meg a függvénynek a megfelelő számú értéket. |
| „A round(x, digits) 0 és 10 közötti egész tizedesjegyet igényel.” | Használjon egész számú tizedesjegyet. |
| „A képlet nullával oszt.” | Általában a H 0: állítsa be a tétel magasságát vagy mélységét. |
| „A képlet nem ad számot.” | Az eredmény túl nagy ahhoz, hogy szám legyen. |
| „Ez a képlet túl hosszú (legfeljebb 500 karakter).” | Rövidítse le. |

## Biztonság tervezés szerint

A képlet csak a fenti változókkal és függvényekkel végezhet számítást. Kódot nem futtathat, mást nem olvashat, ezért az a képlet, amelyet valaki egy projektfájlban küld Önnek, ártalmatlan.
