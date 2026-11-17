---
title: Szimbólum automatikus darabszámlálása
summary: Jelöljön be egy szimbólumot, a TakeoffCraft megkeresi a többit ezen a lapon vagy az összes megnyitott lapon, a csúszkával átnézheti az egyezéseket, majd egy lépésben hozzáadhatja őket.
keywords: bármilyen szög, elforgatott, elfordított, más méretarány, eltérő méretarány, automatikus darabszám, automatikus számlálás, szimbólumkeresés, szimbólumok keresése, minta, sablon, egyezés, észlelés, darabszámláló eszköz
from: fa68a6c1
---

{{ui:Automatikus darabszám}} megkeresi a szimbólum minden példányát, miután bejelölt egyet. Ezután átnézheti a lapon talált egyezéseket, és az elfogadottakat darabszámjelként hozzáadhatja. Ez segédeszköz, nem garancia: hozzáadás előtt mindig ellenőrizze őket.

## A szimbólumok megkeresése

1. Készítsen vagy válasszon ki egy darabszám-tételt a {{ui:Tételek}} alatt.
2. Nyisson meg egy lapot, amelyen a szimbólum megjelenik.
3. Válassza az {{ui:Automatikus darabszám}} gombot az eszköztárban, vagy nyomja meg az {{key:S}} billentyűt.
   A lap tetején megjelenik egy sáv: „Húzzon egy keretet egyetlen szimbólum köré ezen a lapon.”
4. Ha nem csak ezt a lapot, hanem az összes megnyitott lapot szeretné átkeresni, jelölje be a {{ui:Keresés az összes megnyitott lapon}} négyzetet.
5. Nagyítson rá, hogy a szimbólum jól látható legyen, majd húzzon szorosan egy keretet egy példánya köré. Vegye bele az egész szimbólumot; a körülötte lévő üres papírt a program levágja.
   A sáv a „Keresés…” szöveget, egy folyamatjelzőt és a {{ui:Mégse}} gombot mutatja. A lap továbbra is reagál: nagyíthat, eltolhat és lapok között válthat. Másik eszköz választása vagy az {{key:Esc}} megnyomása megszakítja a keresést.
6. Ha végzett, az egyezések a lapon dobozként jelennek meg a tétel színében, a sáv pedig összegzést mutat, például: „22 egyezés, 19 hozzáadandó (3 már számlálva). Kattintson egy dobozra az elvetéséhez vagy visszaállításához.”

Az {{ui:Automatikus darabszám}} sávban a lapon húzva keret rajzolódik, nem eltolás történik. Az eltoláshoz tartsa lenyomva a {{key:Space}} billentyűt és húzzon, vagy húzzon a középső gombbal.

## Az egyezések áttekintése

- **Kattintson egy dobozra** az elvetéséhez. Az elvetett doboz szaggatott és át van húzva. Újra kattintva visszaállítható.
- **Mozgassa a {{ui:Egyezés}} csúszkát** (50%-tól 95%-ig, alapértelmezésben 75%-on). Magasabb értéknél csak a közeli egyezések látszanak, alacsonyabbnál a lazább találatok is. A csúszka csak a talált elemeket szűri; nem keres újra.
- **Már számlálva**: az olyan egyezések, amelyek ennek a tételnek már meglévő darabszámjelén helyezkednek el, elvetve indulnak, így semmit sem számlál kétszer.
- **Más lapok**: ha az összes megnyitott lapon keresett, a lapok listájával vagy a {{key:PageDown}} billentyűvel lépjen a lapok között, és mindegyiket nézze át. Az összegzés megmondja, hány lapon van egyezés.

## Hozzáadás

Válassza a {{ui:Hozzáadás}} gombot. A gomb megmutatja, hányat ad hozzá, például: „19 jel hozzáadása”.
A darabszámjelek minden elfogadott doboz közepére kerülnek: „19 darabszámjel hozzáadva a(z) „Kettős dugalj” tételhez. A Ctrl+Z mindet eltávolítja.”

A teljes köteg egyetlen visszavonási lépés, így egy {{key:Mod+Z}} billentyű-lenyomással eltávolítható.

Az áttekintés hozzáadás nélküli elvetéséhez válassza a {{ui:Elvetés}} gombot, vagy nyomja meg az {{key:Esc}} billentyűt. Másik eszköz választása is elveti.

## Mit talál meg és mit nem

A TakeoffCraft a rajzot pixelenként hasonlítja össze a kijelölt szimbólummal.

- A szimbólumot 0°, 90°, 180° és 270°-os elforgatásban találja meg. Ha bármilyen szögben is meg akarja találni, jelölje be az automatikus darabszám sávban a {{ui:Bármilyen szög (lassabb)}} négyzetet még a keret megrajzolása előtt: 15°-onként próbálkozik, majd minden találatot másfél fokos pontosságra finomít. Ez körülbelül hatszor annyi ideig tart. A tükrözött szimbólumot nem találja meg (kivéve, ha a szimbólum tükrözve is ugyanúgy néz ki).
- Ha az {{ui:Keresés az összes megnyitott lapon}} be van jelölve, a más méretarányú lapon a szimbólum ott érvényes méretében keres: az 1/8"-es alaprajzon léptékhelyesen rajzolt berendezés fele akkora, mint az 1/4"-es alaprajzon, és így is megtalálja. Az ilyen lapon a keret saját méretében is keres, a címkékhez és minden lapon azonos méretben nyomtatott szimbólumokhoz. Ehhez mindkét lapon kell méretarány; méretarány nélküli lapon csak a keret méretében keres.
- Nagyon hasonló szimbólumok egymással is egyezhetnek: például a kettős és a négyes dugalj, vagy két olyan berendezéscímke, amely csak egy betűben tér el. Emelje a csúszkát, amíg csak a helyesek maradnak, a többit pedig kézzel vesse el.
- Más vonalakkal, sraffozással vagy szöveggel keresztezett szimbólum gyengébb pontszámot kap, ezért lehet, hogy alacsonyabb csúszkaállás kell hozzá.
- A nagyon kis kereteket a program nem fogadja el: „A keret túl kicsi. Rajzolja az egész szimbólum köré.” Az üres keretet szintén nem fogadja el: „A keret majdnem üres. Rajzoljon egy szimbólum köré.”
- Az a lap, amely ennek a szimbólumnak a méretében túl nagy lenne a kereséshez, kimarad, az összegzés pedig ezt írja: „1 lap túl nagy ahhoz, hogy ezzel a szimbólummérettel keressen.” Jelöljön be nagyobb szimbólumot, vagy számolja meg a lapot kézzel.

Ha nincs találat, az állapotsor ezt írja: „Nincs egyezés. Csökkentse az egyezés csúszkát, vagy szűkebben jelölje ki a szimbólumot.”

## Sebesség és böngészők

A keresés háttérfolyamatban fut, így a lap közben is reagál, és bármikor megszakítható. Minden lapot először a munkaméretben rajzol ki maga az oldal, ami nagyon nagy lapnál egy pillanatra megakaszthatja. Működik a legújabb Chrome, Edge, Firefox és Safari böngészőben. Több lap átkeresése tovább tart; a folyamatjelző lapról lapra halad. Offline módban az automatikus darabszám akkor működik, ha az alkalmazássáv a {{ui:Offline használatra kész}} jelzést mutatja: a {{ui:Mentés offline használatra}} gomb a keresőfolyamatot is megtartja. Lásd: [Munka offline](common:offline).
