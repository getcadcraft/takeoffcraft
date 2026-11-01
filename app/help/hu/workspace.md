---
title: A TakeoffCraft képernyője
summary: Bemutató az ablakról a képernyőn látható nevek szerint: az eszköztár, a rajzlaplista, a rajzlap, a Tételek panel, a Mennyiségek táblázat és az állapotsor.
keywords: képernyő, elrendezés, elrendezések, szalag, projektböngésző, eszközkészlet, infódoboz, eszköztár, panelek, rajzlaplista, tételek panel, mennyiségek, állapotsor, bemutató, felület
from: ab1115e0
---

A TakeoffCraft kitölti a böngészőablakot a CadCraft alkalmazássáv alatt. Fentről lefelé és balról jobbra:

| Rész | Hol | Mire való |
|---|---|---|
| Alkalmazássáv | Legfelül | Az alkalmazás neve, a verzió, az {{ui:A(z) TakeoffCraft névjegye}}, a {{ui:Súgó}} ({{key:F1}}), a {{ui:Mentés offline használatra}}, a {{ui:Beállítások}} ({{key:Mod+,}}), a {{ui:Teljes képernyő}} gomb és a {{ui:Papír}} / {{ui:Modell}} témakapcsoló. |
| Eszköztár | Az alkalmazássáv alatt | Minden parancs, csoportokban: {{ui:Fájl}}, {{ui:Exportálás}}, {{ui:Méretarány}}, {{ui:Mennyiségkimutatás}}, {{ui:Szerkesztés}}, {{ui:Nézet}}. |
| Lapok | Balra | Minden megnyitott PDF minden oldala, bélyegképpel, méretarányával és jelöléseinek számával. |
| A rajzlap | Középen | A megnyitott oldal. Itt mér. |
| Tételek | Jobbra | A mennyiségkimutatási tételei, a kijelölt tétel beállításai és a kijelölt jelölés. |
| Mennyiségek | Alul | Mennyiségek és költségek tételenként vagy rajzlaponként, és a munka összege. |
| Állapotsor | Legalul | Az élő mérés, üzenetek, a 45°-os tipp és a nagyítás. |

## Az eszköztár

Tartsa a mutatót egy gomb fölött, hogy lássa, mit csinál, és mi a billentyűje.

| Csoport | Gombok |
|---|---|
| {{ui:Fájl}} | {{ui:Új}} (üres mennyiségkimutatás), {{ui:Tervek megnyitása}} ({{key:Mod+O}}), {{ui:Mennyiségkimutatás megnyitása}} (`.takeoff.json` projekt), {{ui:Mennyiségkimutatás mentése}} ({{key:Mod+S}}) |
| {{ui:Exportálás}} | Egy menü: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Jelölt PDF}} |
| {{ui:Méretarány}} | {{ui:Kalibrálás}} ({{key:K}}), {{ui:Ellenőrzés}} ({{key:D}}) és az {{ui:Előbeállítás}} lista |
| {{ui:Mennyiségkimutatás}} | {{ui:Kijelölés}} ({{key:V}}), {{ui:Vonalas}} ({{key:L}}), {{ui:Terület}} ({{key:A}}), {{ui:Kör}} ({{key:O}}), {{ui:Ív}} ({{key:R}}, be/ki kapcsoló), {{ui:Levonás}} ({{key:E}}, be/ki kapcsoló), {{ui:Kivágás}} ({{key:X}}), {{ui:Darabszám}} ({{key:C}}), {{ui:Automatikus darabszám}} ({{key:S}}) |
| {{ui:Szerkesztés}} | {{ui:Visszavonás}} ({{key:Mod+Z}}), {{ui:Ismétlés}} ({{key:Mod+Y}}), {{ui:Másolás}} ({{key:Mod+C}}), {{ui:Beillesztés}} ({{key:Mod+V}}), és a {{ui:Továbbiak}}: {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés}}, {{ui:Törlés}}, {{ui:Összes kijelölése}}, {{ui:Kijelölés megszüntetése}} |
| {{ui:Nézet}} | {{ui:Oldal illesztése}} ({{key:F}}), {{ui:Szélesség illesztése}} ({{key:W}}) |

Az éppen használt eszköz benyomottan látszik. Az {{ui:Ív}} és a {{ui:Levonás}} gomb benyomva marad, amíg be vannak kapcsolva.

## Lapok (balra)

- A **Lapok keresése** a rajzlap neve, a fájlnév vagy az oldalfelirat szerint szűri a listát.
- Minden rajzlap mutat egy bélyegképet (görgetés közben rajzolódik), a nevét, valamint a méretarányát vagy azt, hogy **Nincs méretarány**.
- Minden sor jobb oldala mutatja, hány jelölése van a rajzlapnak. Amíg egy tétel ki van emelve, ehelyett azt mutatja, hány jelölése van annak a tételnek a rajzlapon.
- Kattintson egy rajzlapra a megnyitásához. A {{key:PageDown}} és a {{key:PageUp}} a lista következő és előző rajzlapjára lép.
- Ha a mennyiségkimutatás olyan PDF-eket is érint, amelyek nincsenek megnyitva, a lista alatti megjegyzés megnevezi őket. Lásd [Mennyiségkimutatás mentése és újranyitása](topic:save-and-reopen).

A rajzlapnevek a PDF-ből származnak: egy oldalfelirat, például `A-101`, lesz a rajzlap neve. Az oldal, amelynek nincs felirata, a fájlja és az oldalszáma után kapja a nevét, például „Plans, page 3”. Több megnyitott PDF-nél a feliratos rajzlapok a fájlnevet is mutatják.

## A rajzlap (középen)

- A rajzlap alatti sáv mutatja a rajzlap nevét és méretarányát, vagy ezt: „Még nincs méretarány: válasszon előbeállítást, vagy kalibráljon”. A gombjai: {{ui:MarkupCraft}} (ha az alkalmazás tudja fogadni a PDF-et; lásd [Mennyiségkimutatás indítása és tervkészlet megnyitása](topic:open-plan-set)), {{ui:Összehasonlítás}} (a rajzlap régebbi változata ezen felül: [Átdolgozott rajzlap összehasonlítása](topic:compare-revisions)), „(n) ellenőrzendő” (megjelölt jelölések, ha vannak) és {{ui:3D}} (a [3D ellenőrző nézet](topic:check-in-3d)).
- Mielőtt bármilyen PDF meg van nyitva, a közepén egy rövid ötlépéses útmutató áll.
- A görgő a mutatónál nagyít. A húzás eltol. Lásd [Billentyűzet és egér](topic:keyboard).
- Az {{ui:Automatikus darabszám}} használata közben a rajzlap tetején megjelenik egy sáv a vezérlőivel.

## Tételek (jobbra)

Legfelül az {{ui:Ajánlati terület}} lista: az épület, szint vagy ütem, amelybe az új jelölések kerülnek ([Ajánlati területek](topic:bid-areas)).

- Az {{ui:Új tétel}} egy kis űrlapot nyit: név, típus ({{ui:Vonalas (hossz)}}, {{ui:Terület}} vagy {{ui:Darabszám}}) és {{ui:Hozzáadás}}.
- A lista minden tételnek mutatja a színét, típusikonját, nevét és mennyiségét. Kattintson egy tételre, hogy vele rajzoljon, és kiemelje a jelöléseit minden rajzlapon. Kattintson rá újra a kiemelés leállításához.
- A lista alatt a **Tétel: (név)** a tételszerkesztő: név, típus, szín, mértékegység, magasság vagy mélység, hulladék, anyag- és munkadíj-egységárak, a mért értékek és az {{ui:Összetett tétel}}. Lásd [Mennyiségkimutatási tételek létrehozása](topic:create-items).
- A **Kijelölt jelölés** akkor jelenik meg, ha kijelöl egy jelölést: melyik tételhez tartozik, a rajzlapja, a mérései, és gombok, például {{ui:Kivágás hozzáadása}} és {{ui:Jelölés törlése}}. Több kijelölt jelölésnél **Kijelölt jelölések** lesz belőle: hányat tételenként, valamint {{ui:Másolás}}, {{ui:Kettőzés}}, {{ui:Kivágás}} és {{ui:Jelölések törlése}}.
- A tételszerkesztő a {{ui:Tétel másolása}} és a {{ui:Tétel kettőzése}} gombbal végződik: egy tétel az összetett tételével és költségeivel, jelölések nélkül. Lásd [Jelölések másolása, beillesztése és kettőzése](topic:copy-paste).

## Mennyiségek (alul)

- A {{ui:Tételenként}} felsorol minden tételt és az összetett tételének összetevőit a mennyiséggel, hulladékkal, egységárakkal és kiterjesztett költségekkel. A hulladékot és az egységárakat közvetlenül a táblázatba írhatja.
- A {{ui:Lapok szerint}} felsorolja az egyes tételek mennyiségét az egyes rajzlapokon.
- A **Hiányos:** kezdetű figyelmeztetés akkor jelenik meg, ha valami kimaradt az összesenekből.
- A {{ui:Munka összesen}} a fejléc jobb oldalán van.
- A jobb szélső nyílgomb elrejti vagy megjeleníti a táblázatot, hogy a rajzlapnak több helye legyen.

Lásd [Mennyiségek és a költségvetés olvasása](topic:read-quantities).

## Állapotsor (alul)

Balról jobbra: az élő mérés rajzolás közben (hossz, terület, sugár vagy ellenőrzési eredmény), a {{ui:Beírás}} mező, amíg hosszt gépel, a TakeoffCraft üzenetei, az emlékeztető „A Shift 45°-ra fog” (vagy „45°-ra fog; a Shift felszabadítja a szöget”, ha ez be van kapcsolva a [Beállításokban](topic:settings)), a {{ui:Fogás}} gomb (fogás a rajz vonalaihoz, kiemelve be van kapcsolva; {{key:F3}}) és a nagyítás százaléka.

:::tip
Olvassa el az állapotsort, ha valami nem történik meg. A TakeoffCraft ott magyarázza el, miért utasított el egy kattintást, például „Ennek a lapnak még nincs méretaránya”.
:::

## Más elrendezések

Mindaz, ami fent áll, a {{ui:CadCraft klasszikus}} elrendezés, az induló. A {{ui:Beállítások}} ({{key:Mod+,}}) › {{ui:Globális}} › {{ui:Elrendezés}} még kettőt kínál; ugyanazok az eszközök és billentyűk mindháromban működnek, és a {{ui:CadCraft klasszikus}} újraválasztása minden vezérlőt visszatesz oda, ahol volt.

| Elrendezés | A TakeoffCraftban |
|---|---|
| {{ui:Szalag és projektböngésző}} | A {{ui:Mennyiségkimutatás-szalag}} felül ([Menük, billentyűk és egér](topic:menus-keys-and-mouse)), egy sáv a futó eszköznek, egy lap minden megnyitott rajzlaphoz (a rajz Modell és elrendezései is rajzlapok), a rajzlap alatt a méretarány-előbeállításokkal és az {{ui:Oldal illesztése}} gombbal. A bal oldali panel a {{ui:Tulajdonságok}} (a kijelölt tétel, megjegyzés vagy jelölés) a {{ui:Mennyiségkimutatás-böngésző}} fölött: {{ui:Lapok}} (kattintson egyre, hogy lapon nyissa meg), {{ui:Feltételek}} (kattintson egyre, hogy vele rajzoljon) és {{ui:Költségvetés}} (az egyes tételek összege és a munka összege); a bélyegképek a második lapja. |
| {{ui:Eszközkészlet és infódoboz}} | Az eszköztár a rajzlap fölött, egy infódoboz az az {{ui:Ajánlati terület}} listával, a futó eszközzel vagy a kijelöléssel és a rajzlapsávval, a mennyiségkimutatási eszközök oszlopa balra, egy lap minden rajzlaphoz, valamint a {{ui:Fogás}} és a nagyítás a rajzlap alatt. |

Amíg a [3D ellenőrző nézet](topic:check-in-3d) nyitva van, a rajzlaplapok és a rajzlap alatti sáv félreáll; zárja be a 3D nézetet, hogy újra mérjen. Telefonon mindig a telefonelrendezés fut.

## Teljes képernyő és témák

Az alkalmazássáv {{ui:Teljes képernyő}} gombja, vagy a {{key:Ctrl+Shift+F}} (Control minden platformon, Macen is) a normál, a teljes képernyő és az elrejtett sávos teljes képernyő között lép. Elrejtett sávoknál vigye a mutatót a felső szélre, hogy újra megjelenjenek.

A {{ui:Papír}} a világos téma, a {{ui:Modell}} a sötét. A {{ui:Modell}} témában a rajz invertálva (világos vonalak sötéten) látszik, csak a képernyőn; az exportok sosem változnak.
