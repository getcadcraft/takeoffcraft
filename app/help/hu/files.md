---
title: A TakeoffCraft által megnyitott és mentett fájlok
summary: PDF be, mennyiségkimutatási projektfájl, táblázatok és jelölt PDF-ek ki - mit tartalmaz mindegyik, hová kerül, és mi változik online, offline és a böngészők között.
keywords: fájlok, formátumok, pdf, takeoff.json, projektfájl, xlsx, csv, jelölt pdf, letöltés, mentés, megnyitás, offline
from: 1bf9be65
---

## Amit megnyit

| Fájl | Hogyan | Megjegyzések |
|---|---|---|
| PDF (`.pdf`) | {{ui:Tervek megnyitása}}, {{key:Mod+O}}, vagy húzza az oldalra | Egyszerre több is. Minden oldal egy rajzlap lesz. |
| Mennyiségkimutatási projekt (`.takeoff.json`) | {{ui:Mennyiségkimutatás megnyitása}}, vagy húzza az oldalra | A tételei, méretarányai és jelölései. A PDF-jeivel együtt is behúzhatja. |

Az oldalra húzott más fájlokat kihagyja, és az állapotsor megnevezi őket.

- A **jelszóval védett PDF-ek** nem nyílnak meg: „(név) jelszóval védett. Nyisson meg egy védelem nélküli másolatot.”
- Az **ugyanaz a PDF kétszer** csak egyszer nyílik meg: „(név) már meg van nyitva.” A TakeoffCraft a fájlokat a tartalmuk alapján ismeri, nem a nevük alapján.
- A **beolvasott PDF-ek** megnyílnak és mérhetők, mint bármelyik másik; a TakeoffCraftnak nincs szüksége a PDF szövegére.
- **Nagy tervkészletek**: minden PDF-et teljes egészében beolvas megnyitáskor (az ujjlenyomatához), így egy nagyon nagy fájl egy kis időt vesz igénybe. A bélyegképek görgetés közben, egyenként rajzolódnak.

## Amit ment

Minden mentés letöltés. Semmi sem íródik vissza a PDF-jeibe.

| Amit választ | Amit kap | Mi van benne |
|---|---|---|
| {{ui:Mennyiségkimutatás mentése}} | `(név).takeoff.json` | Tételek, összetett tételek, egységárak, rajzlapok méretarányai és minden jelölés, minden PDF-hez a tartalma alapján kötve. Nincsenek PDF-oldalak. |
| {{ui:XLSX}} | `(név).xlsx` | Négy munkalap: Költségvetés (élő képletekkel), Rajzlaponként, Jelölések, Méretarányok. |
| {{ui:CSV}} | `(név).csv` | A költségvetés egyszerű értékekként, tételenként és összetevőnként egy sor. |
| {{ui:Jelölt PDF}} | `(PDF neve) (takeoff).pdf` | A jelöléseket tartalmazó megnyitott PDF-ek másolata, az oldalaira rajzolt mennyiségkimutatással és jelmagyarázattal. PDF-enként egy fájl. |

A név az ebben a mennyiségkimutatásban elsőként megnyitott PDF-ből származik. Átnevezési mező még nincs: nevezze át a letöltött fájlt, ha más nevet szeretne.

Lásd [A költségvetés és egy jelölt PDF exportálása](topic:export-estimate) és [Exportoszlopok](topic:export-columns).

## Hová kerülnek a letöltések

A böngészője oda menti őket, ahová minden letöltést, általában a Letöltések mappába. Keresse meg itt: {{pick:mac=Finder|windows=Fájlkezelő|linux=a fájlkezelő}}. Ha a böngészője úgy van beállítva, hogy minden fájlnál rákérdezzen a helyre, rákérdez.

:::chromium
A több jelölt PDF-fel végzett {{ui:Jelölt PDF}} egyszerre több fájlt tölt le. A Chrome és az Edge egyszer megkérdezheti, hogy ez az oldal letölthet-e több fájlt. Válassza az Engedélyezés lehetőséget.
:::

:::safari
A Safari a Letöltések mappába ment, hacsak nem módosította a letöltés helyét a Safari Beállításaiban, az Általános alatt.
:::

## Miért külön a projektfájl és a PDF-ek

A `.takeoff.json` fájl csak a mennyiségkimutatását tartalmazza. A PDF-jeit a tartalmuk alapján (az egyes fájlok ujjlenyomata) találja meg újra, ezért:

- Egy PDF átnevezése vagy áthelyezése nem számít.
- Az a PDF, amelyet egy másik program módosított vagy újra elmentett, más fájlnak számít, még ugyanazzal a névvel is.
- A nem megnyitott PDF-eken lévő jelölések is beleszámítanak az összesenekbe.

Lásd [Mennyiségkimutatás mentése és újranyitása](topic:save-and-reopen).

## Online és offline

A PDF-jei és a mennyiségkimutatásai sosem hagyják el a számítógépét, sem online, sem offline. A kapcsolat csak magának a TakeoffCraftnak a betöltéséhez számít.

Hogy kapcsolat nélkül is dolgozhasson, előbb mentse el az alkalmazást, amíg online van:

1. Válassza a {{ui:Mentés offline használatra}} gombot a felső alkalmazássávban.
   A gomb számol mentés közben: „Mentés: 12 / 40”.
2. Várja meg az {{ui:Offline használatra kész}} feliratot.

A TakeoffCraft mentése megőrzi az alkalmazást, ezt a súgót, a PDF-olvasót, a {{ui:Jelölt PDF}} által használt PDF-írót és az automatikus darabszám munkafolyamatát a böngészőben, körülbelül 6 MB-ot. Amint az {{ui:Offline használatra kész}} feliratot írja, minden működik offline: a PDF-ek megnyitása, a mérés, az {{ui:Automatikus darabszám}}, a {{ui:Mennyiségkimutatás mentése}}, az {{ui:XLSX}}, a {{ui:CSV}} és a {{ui:Jelölt PDF}}.

| A gomb azt írja | Jelentés |
|---|---|
| {{ui:Mentés offline használatra}} | Még nincs elmentve ebben a böngészőben. Válassza a mentéshez. |
| Mentés: (n) / (m) | Éppen ment. |
| {{ui:Offline használatra kész}} | Elmentve. Válassza a {{ui:Mentés újra (a legújabb verzió beszerzése)}} vagy az {{ui:Az offline másolat eltávolítása}} lehetőségért. |
| {{ui:Nem sikerült menteni}} | Egyes fájlok nem töltődtek le. Ellenőrizze a kapcsolatot, és válassza újra. |
| {{ui:Az offline mód nem érhető el}} | Ez a böngészőablak nem tud offline másolatot tartani (a privát ablakok és egyes felügyelt számítógépek tiltják). |

További információ, azt is beleértve, mennyi ideig marad meg a mentett másolat az egyes böngészőkben: [Offline munka](common:offline).

:::offline
Offline van. Ha az alkalmazássáv az {{ui:Offline használatra kész}} feliratot mutatja, minden működik. Ha nem, azok a részek, amelyeket a TakeoffCraft ebben a lapban még nem töltött be (a PDF-író a {{ui:Jelölt PDF}} számára, az automatikus darabszám munkafolyamata), most nem tölthetők be, és a {{ui:Jelölt PDF}} ezzel áll le: „A jelölt PDF nem írható meg”. A mennyiségkimutatása mindkét esetben biztonságban van: a {{ui:Mennyiségkimutatás mentése}}, az {{ui:XLSX}} és a {{ui:CSV}} nem igényel kapcsolatot. Ne töltse újra a lapot, amíg nem kapcsolódik újra.
:::

:::online
Online van. Egy építkezési látogatás vagy egy repülés előtt válassza a {{ui:Mentés offline használatra}} gombot, és várja meg az {{ui:Offline használatra kész}} feliratot.
:::

## Táblázatok

Az XLSX megtartja az élő képleteket, így a táblázatkezelő program újraszámolja a költségvetést a fájl megnyitásakor, és helyesen tartja, ha ott módosít egy egységárat vagy a hulladékot. A munkafüzetet LibreOffice Calcban ellenőriztük, amely minden összeget ugyanarra a centre újraszámolt. Excelben még nem nyitottuk meg.

A CSV egyszerű érték, bájtsorrend-jellel, így a táblázatkezelő programok helyesen olvassák az olyan karaktereket, mint az m².

## Asztali és felhő

:::desktop
A 0.5-től az asztali alkalmazás a CadCraft Studio: a TakeoffCraft és a másik hét alkalmazás egyetlen telepítésben. Külön TakeoffCraft-telepítő nincs.
:::

A felhőbe mentés még nem érhető el. Tartsa a `.takeoff.json` fájljait a munka PDF-jei mellett, és készítsen róluk biztonsági másolatot, mint bármelyik másik fájlról. Lásd [Hová kerülnek a fájljai](common:your-files).
