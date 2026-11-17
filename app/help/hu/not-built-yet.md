---
title: Mi még nincs elkészítve
summary: A TakeoffCraft funkciói, amelyek ebben a verzióban nincsenek meg, és mit tehet helyettük most.
keywords: korlátok, hiányzó, még nincs, útiterv, tervezett, megoldás, szakaszonként, felhő, asztali
from: 94ff90d0
---

A TakeoffCraft fejlesztés alatt áll. Ez a lista azt sorolja fel, amit a jelenlegi verzió nem tud, és hogyan végezheti el a munkát mégis.

## Mérés

| Még nincs elkészítve | Helyette most |
|---|---|
| Pont beszúrása egy szakasz vagy körvonal közepébe | Törölje a jelölést, és rajzolja meg újra. |
| Ablakos (doboz) kijelölés | {{key:Shift}} + kattintás minden jelölésre, vagy {{key:Mod+A}} a lapon lévő összes jelöléshez. Lásd: [Jelölések másolása, beillesztése és kettőzése](topic:copy-paste). |
| Beillesztett másolat forgatása, tükrözése vagy méretarányának módosítása | Illessze be a lapra ugyanazzal a méretaránnyal és tájolással; a többit kézzel rajzolja meg. |
| Méretarány beolvasása szkennelt lapról vagy grafikus léptékvonalról | Válassza ki az előbeállítást, vagy kalibrálja a léptékvonal hosszán. |
| Egynél több méretarány egy lapon (részletek, nagyított alaprajzok) | Mérje a részt a lap méretarányával, és ha a készletben van hozzá nagyított lap, a részletet azon vegye le külön. |

## Tételek és árazás

| Még nincs elkészítve | Helyette most |
|---|---|
| Összetett tétel képletei, amelyek egy tétel más jelölésfajtáit használják (egy helyiség tételének ajtói a szint képleteiben) | A képletek a fő típus összegeit használják; az egyéb fajtákat külön sorokon árazza. |
| Összetett tétel képletei szakaszonként kiszámítva | A képletek a tétel összegeit használják; szakaszonkénti pótlékokhoz írja be az `N`-t. |
| Más tétel mennyiségeit használó képletek | Ismételje meg a mérést abban a tételben, vagy számolja ki a táblázatos exportban. |
| Munkacsoportok összetett tétel-összetevőkön, vagy a 8 órától eltérő munkanap | Rendelje a munkacsoportot a tételhez; más naphosszúság esetén a munkacsoport-napokat úgy kapja meg, hogy a munkacsoport-órákat elosztja a saját munkanapjával. |
| A jegyzeteken, felhőkön és kiemeléseken kívüli jelölések (nyilak, méretek, bélyegzők), vagy jegyzetre adott válaszok | Írja a jegyzet szövegébe; az állapotát változtassa meg, ahogy rendeződik. |
| Csapat által megosztott vagy a fiókjához kötött árkönyvtár | A könyvtár ebben a böngészőben tárolódik: exportálja CSV-ként, és importálja a másik számítógépen. |
| Szakmai becslők által felülvizsgált szakági csomagok | Minden csomag kezdő csomag: ellenőrizze a feltételezéseit a munkájához és a termékeihez, mielőtt árazna vele. Lásd: [Szakági csomagok](topic:trade-packs). |
| Árak a szakági csomagokban | A csomagok csak összetett tételeket hoznak: adja meg a saját díjtételeit, vagy importálja az árlistáját CSV-ként. |
| A mennyiségkimutatás átnevezése | A név az első PDF-ből származik; a letöltött fájlokat nevezze át. |
| Lapok kézi elnevezése | A lapok neve a PDF oldalcímkéiből származik; fájlnév és oldal szerint keressen. |

## Rajzok (DWG és DXF)

| Még nincs elkészítve | Helyette most |
|---|---|
| Plot-stílustáblák, tollhozzárendelések és CTB-fájlok a rajz lapjain | A rajz feketén jelenik meg, vagy a színei papírra sötétítve; a vonalvastagságok a rajzból származnak. |
| Bináris DXF megnyitása, vagy az AutoCAD 2000-nél régebbi DWG | Mentse ASCII DXF-ként vagy újabb DWG-ként. |
| Külső hivatkozott rajz (xref) megtalálása abban a mappában, ahol van | Nyissa meg a hivatkozott rajz fájlját is a befoglaló rajzzal együtt: a nyitott fájlok között fájlnév alapján találja meg. |
| 3D-s polivonalak, hálók, testek és tartományok mérése | Számolja meg őket réteg és típus szerint, vagy mérje a alaprajzi nézetet a Linear és az Area eszközökkel. |
| Szöveg egy jelölt PDF-ben olyan rajzból, amely nem latin írásjeleket tartalmaz | A Helvetica betűtípusban nincs hozzájuk karakter, ezért a jelölt PDF-ben „?” jelenik meg; a képernyőn lévő rajz nem változik. |
| Rajz átadása egy másik alkalmazásnak a lapsávról | Nyissa meg ugyanazt a fájlt abban az alkalmazásban. |
| Olyan rajz, amely magában hordozza a mennyiségkimutatást, ahogy a {{ui:PDF a mennyiségkimutatással}} teszi a PDF-eknél | {{ui:Mennyiségkimutatás mentése}}: a `.takeoff.json` ugyanazon a rajzon nyílik meg, a tartalma alapján megtalálva. |
| PDF-alátétek, képek és OLE-objektumok rajzolása vagy számolása egy rajzban | A képek csak keretként jelennek meg. Nyissa meg magát az alátét-PDF-et lapként. |

## Automatikus darabszám

| Még nincs elkészítve | Helyette most |
|---|---|
| Szimbólumok keresése olyan lapon, amelyen a méretarány más méretben van rajzolva | Adja meg a lapnak a méretarányát, vagy keressen rá egy ott rajzolt dobozzal. |
| Tükrözött szimbólumok keresése | Számolja meg őket kézzel, vagy keressen újra egy tükrözött szimbólum köré rajzolt dobozzal. |

## Fájlok és megosztás

| Még nincs elkészítve | Helyette most |
|---|---|
| Egy PDF, amely egyszerre mutatja a jelöléseket és hordozza a mennyiségkimutatást | {{ui:Jelölt PDF}}, hogy mások lássák a jelöléseket; {{ui:PDF a mennyiségkimutatással}}, hogy újra megnyissa a TakeoffCraftban. |
| Mennyiségek CSV-je lapok szerint vagy a jelölések szerint | Használja a {{ui:XLSX}} fájlt: annak Lapok szerint és Jelölések munkalapja tartalmazza ezeket. |
| Felhőmentés | Még nem érhető el. Mentse a projektfájlokat a számítógépére, és készítsen róluk biztonsági másolatot. |
| Külön TakeoffCraft asztali alkalmazás | A 0.5-ös verziótól az asztali alkalmazás a CadCraft Studio, amely egy telepítésben tartalmazza mind a nyolc alkalmazást. A TakeoffCraft böngészőben is fut. |

## Képernyő és bevitel

| Még nincs elkészítve | Helyette most |
|---|---|
| Jobb kattintásos (vagy hosszú nyomásos) menü | Használja az eszköztárat, a paneleket és a billentyűket. A hosszú nyomás befejez egy szakaszt vagy körvonalat. |
| A nézet forgatása | A PDF-ben elforgatott oldalak már egyenesen jelennek meg. |

## 3D nézet

| Még nincs elkészítve | Helyette most |
|---|---|
| Jelölések rajzolása vagy szerkesztése 3D-ben | Lépjen vissza a lapra ({{key:3}}) a rajzoláshoz; a kijelölés és a törlés 3D-ben is működik. |
| Különböző helyre rajzolt lapokon lévő, egymásra helyezett szintek igazítása | Ugyanúgy rajzolt szinteket helyezzen egymásra; a többit lapról lapra ellenőrizze. |
| A számlált objektummal azonos méretű karók számlálása | A lapon minden karó azonos méretű; a számlálás helyét jelöli, nem azt, hogy mi van ott. |

## Ajánlattétel

| Még nincs elkészítve | Helyette most |
|---|---|
| Egy már elküldött csomag kiegészítései, megrendelési levelek, minden ajánlattevő által aláírt terjedelmi lap | Küldjön új csomagot, és írja meg a megrendelést maga. A [Ajánlati csomag küldése](topic:bid-invitations) bemutatja, mi van megvalósítva. |
| Ajánlati meghívók küldése bármely fiókból: amíg tesztelés alatt áll, a külső ajánlattevőknek küldött levelek ki vannak kapcsolva, kivéve a CadCraft csapata által engedélyezett fiókokat | Töltse le a {{ui:Terjedelem CSV}} fájlt, küldje el maga e-mailben, és írja be az ajánlatokat. |
| Ajánlati csomagok küldése egy Studio-ablakból | Küldje a TakeoffCraftból, böngészőben. |
| Egy alternatíva ajánlati területének újraárazása kiválasztott ajánlattal | Az alternatívák és az ajánlati területek részösszegei a saját árait használják; az alternatívát kézzel igazítsa. |
| Automatikus emlékeztetők az alvállalkozó biztosítási vagy engedélyezési dátuma előtt | A dátum az Alvállalkozók oldalon meg van jelölve, ha már lejárt vagy 30 napon belül jár le; a meghívásnál ellenőrizze. |

## Panelek

| Még nincs elkészítve | Helyette most |
|---|---|
| A {{ui:Mennyiségek}} táblázat áthelyezése | Csak a {{ui:Lapok}} és a {{ui:Tételek}} panel mozgatható. Lásd: [A panelek elrendezése](common:arrange-panels). |

## Táblázatkezelők

Az XLSX munkafüzetet a LibreOffice Calcban ellenőrizték, amely minden összeget a TakeoffCraft-tal pontosan megegyező eredményre számított újra. Excelben még nem nyitották meg. Ha egy táblázatkezelő valami váratlant mutat, a CSV-export ugyanazt a becslést tartalmazza egyszerű értékekként.
