---
title: A méretarány beállítása
summary: Adjon minden lapnak méretarányt előbeállítással vagy ismert méreten való kalibrálással, ellenőrizze, és értse meg, miért maradnak ki a méretarány nélküli lapok az összegekből.
keywords: méretarány felismerése, méretarány olvasása, méretarány a szövegből, összes lap, méretarány, kalibrálás, előbeállítás, méretarány ellenőrzése, ellenőrzés, ismert méret, méretarány nélküli, arány, méretarány beállítása
from: 8f0148e6
---

Minden lapnak saját méretaránya van. Ön állítja be, vagy hagyja, hogy a TakeoffCraft a lapok szövegéből olvassa ki (lent), és ellenőrizze. Amíg egy lapnak nincs méretaránya, a {{ui:Vonalas}}, {{ui:Terület}}, {{ui:Kör}} és {{ui:Kivágás}} eszközök nem mérnek rajta. A {{ui:Darabszám}} és az {{ui:Automatikus darabszám}} méretarány nélkül is működik.

A lapok listája minden lap méretarányát mutatja, vagy a **Nincs méretarány** szöveget. A megnyitott lap alatti sáv ugyanezt mutatja.

## Előbeállítás használata (ha a PDF valódi méretben van nyomtatva)

1. Nyissa meg a lapot.
2. Nyissa meg a {{ui:Előbeállítás}} listát a {{ui:Méretarány}} csoportban.
3. Válassza ki a rajzon nyomtatott méretarányt, például az építészeti csoportban az `1/8" = 1'-0"`-t.
   Az állapotsor ezt írja: „A lap méretaránya: 1/8" = 1'-0".”
4. Ellenőrizze (lent).

Az előbeállítás azt feltételezi, hogy a PDF valódi papírmérete az, amelyre a rajzot készítették. Ha valaki „oldalra illesztve” készítette a PDF-et, vagy fél méretű készletről van szó, az előbeállítás téves. Ilyenkor kalibráljon.

A teljes lista itt található: [Méretarány-előbeállítások](topic:scale-presets).

## Méretarányok olvasása a lapok szövegéből

A legtöbb rajz kimondja a méretarányát: `SCALE: 1/4" = 1'-0"` a rajzfejben, `1:100` egy nézet alatt. A TakeoffCraft ezt be tudja olvasni, és egyszerre minden lapot beállíthat.

1. Nyissa meg az {{ui:Előbeállítás}} listát, és válassza a **A lapok szövegéből…** lehetőséget (felül).
2. A lista minden lapot mutat: a jelenlegi méretarányát, és azt, amit a szövege mond — **Ez áll: 1/4" = 1'-0"**, **Nincs méretarány a szövegében**, vagy **Azt mondja: nem méretarányos** (NTS).
3. A méretarány nélküli, de méretarányt megnevező lapok be vannak pipálva. Pipáljon be vagy ki bármelyiket, majd válassza a {{ui:A bepipált méretarányok beállítása}} lehetőséget. Egy {{key:Mod+Z}} mindet visszavonja.
4. Ellenőrizzen egy méretet minden lapon a {{ui:Ellenőrzés}} eszközzel (lent): az előbeállítás csak akkor helyes, ha a PDF valódi méretben van nyomtatva.

Az építészeti (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), mérnöki (`1" = 20'`) és metrikus (`1:50`) jelöléseket olvassa, amelyek megegyeznek egy [előbeállítással](topic:scale-presets). Ha egy lap több méretarányt említ (nagyított részleteket tartalmazó alaprajz), a leggyakrabban említettet veszi, a SCALE szó után írottat pedig kétszeresen számítja; a többit pirossal jelöli, hogy ellenőrizhesse. A beszkennelt lapnak nincs szövege: méretarányát kézzel adja meg.

## Kalibrálás ismert méreten

Ezt akkor használja, ha nincs megbízható nyomtatott méretarány, a lapot átméretezték, vagy a lapon „nem méretarányos” áll, de vannak méretek.

1. Nyissa meg a lapot, és nagyítson egy hosszú, ismert méretre, például egy tengelytávra vagy az egész épület méretére. Minél hosszabb, annál pontosabb.
2. Válassza a {{ui:Kalibrálás}} lehetőséget a {{ui:Méretarány}} csoportban, vagy nyomja meg a {{key:K}} billentyűt.
3. Kattintson a méret egyik végére. A pontossághoz nagyítson mindkét végén; a kattintások között nagyíthat és eltolhat.
4. Kattintson a másik végére. Tartsa lenyomva a {{key:Shift}} billentyűt, hogy a vonal 0°, 45° vagy 90° maradjon.
   Megnyílik az **A lap kalibrálása** párbeszédpanel.
5. Írja be a valós távolságot a **Valós távolság** mezőbe, például `24'-6 1/2"`, `24.5` (tizedes láb), `30"` vagy `7.5 m`. Lásd: [Hossz-, egységár- és százalékbevitel](topic:entry-formats).
6. Válassza a {{ui:Méretarány beállítása}} lehetőséget.
   Az állapotsor a méretarányt „1" = (n)'” alakban mutatja, és ha 0,5%-on belül van egy előbeállítástól, megmondja, melyikhez: például „ez megegyezik az 1/4" = 1'-0" értékkel (a pontos méretarányhoz ezt az előbeállítást válassza)”.
   A TakeoffCraft visszatér a {{ui:Kijelölés}} eszközre.

Ha a kalibrálás megegyezik egy előbeállítással, annak kiválasztása pontos méretarányt ad, nem olyat, amely attól függ, hová kattintott.

## Méretarány ellenőrzése

Új méretarányt mindig egy második méreten ellenőrizzen.

1. Válassza az {{ui:Ellenőrzés}} lehetőséget a {{ui:Méretarány}} csoportban, vagy nyomja meg a {{key:D}} billentyűt.
2. Kattintson a rajzon nyomtatott méret mindkét végére.
   Az állapotsor így jelenik meg: „Ellenőrzés: 12'-6"”, ugyanazzal a hosszúsággal tizedes lábban és méterben, az ellenőrző vonal pedig a hosszával együtt a lapon marad.
3. Hasonlítsa össze a nyomtatott mérettel. Ha eltér, kalibráljon egy hosszabb méreten.

Az ellenőrző vonal törléséhez nyomja meg az {{key:Esc}} billentyűt.

## Méretarány módosítása

Válasszon másik előbeállítást, vagy kalibráljon újra. Ha a lapon már vannak mérések, a TakeoffCraft megkérdezi: **Módosítja ennek a lapnak a méretarányát?**, és megmondja, hány mérést mérnek újra. Válassza a {{ui:Méretarány módosítása}} lehetőséget. A lap minden futását és területét az új méretarányon mérjük újra. A {{key:Mod+Z}} billentyűvel visszavonhatja.

## Miért nem számítanak nullának a méretarány nélküli lapok

A méretarány nélküli lapon lévő jelölésnek nincs valódi hossza vagy területe. A TakeoffCraft soha nem számolja nullának, mert az csendben túl alacsonnyá tenné a költségvetést. Ehelyett:

- kihagyja ezeket a jelöléseket az összegekből,
- a {{ui:Mennyiségek}} táblázatban a tétel mellett megjeleníti: „+(n) méretarány nélkül”,
- a táblázat fejlécében megjeleníti: „Hiányos: (n) jelölés méretarány nélküli lapon (nincs az összegben)”,
- a darabszámot beírja az exportált táblázat Megjegyzés oszlopába.

Ez akkor fordulhat elő, ha olyan projektet nyit meg, amelynek méretarányait soha nem állították be. Adjon a lapnak méretarányt, és a jelöléseket azonnal beszámítjuk. A darabszám-jelöléseket mindig beszámítjuk; ezekhez nincs szükség méretarányra.

## Tippek

- Mielőtt elkezdi, állítsa be a méretarányt minden olyan lapon, amelyet mérni fog. A lapok listájában keresse a **Nincs méretarány** szöveget, hogy megtalálja a hátralévőket (a keresőmező a lapneveket nézi, nem a méretarányokat).
- A részletek és nagyított alaprajzok ugyanazon a lapon gyakran más méretarányt használnak. A TakeoffCraft laponként egy méretarányt ismer; lásd: [Még nincs elkészítve](topic:not-built-yet).
- Metrikus rajzok: válasszon metrikus előbeállítást, például `1:100`-at, vagy kalibráljon metrikus távolsággal, például `6000 mm` értékkel.
