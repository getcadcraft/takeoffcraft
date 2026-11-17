---
title: Mindent megszámol a tervkészletben
summary: Jelöljön be egyszer egy szimbólumjegyzéket, és a TakeoffCraft egy futtatással megszámolja az összes benne lévő szimbólumot minden megnyitott lapon. Minden darabszám hivatkozás a lapjára, és hozzáadás előtt Ön átnézi.
keywords: mindent megszámol, jegyzék, szimbólumjegyzék, teljes tervkészlet, minden lap, összes lap, minden ajtó, minden berendezés, eszközök, ütemezés, szimbólumok, automatikus darabszám, összes számolása, 200 lap, egyezési szint, hasonló
from: adc99744
---

{{ui:Mindent megszámol}} beolvas egy szimbólumjegyzéket, majd minden benne lévő szimbólumot megszámol minden megnyitott lapon. Ez az {{ui:Automatikus darabszám}} egy egész jegyzékre egyszerre. Egyszerű szimbólumegyezés a saját lapjain, nem betanított modell, és semmi nem hagyja el a számítógépét. A darabszámokat adja hozzá előtt nézze át: ez segéd, nem garancia.

## Jegyzék számolása

1. Nyissa meg a terveket. Bármely lapon lévő jegyzék megfelel: a szimbólumok a nevükkel együtt.
2. Válassza a {{ui:Mindent megszámol}} lehetőséget az eszköztáron.
3. Húzzon egy keretet a jegyzék köré: a szimbólumok és a nevek. A cím, amely mellett nincs szimbólum (SZIMBÓLUMJEGYZÉK), magától kimarad.
   A panel minden szimbólumot felsorol a képével és a mellette nyomtatott nevével. A név lesz a tétel neve; itt átnevezheti, ha szeretné.
4. Vegye ki a pipát azokról a szimbólumokról, amelyeket nem akar számolni. A kereshetetlen szimbólum (túl kicsi vagy üres) megmondja, miért.
5. Válassza a {{ui:Számolás N lapon}} lehetőséget. Egy sáv mutatja, melyik lapot keresi; a {{ui:Mégse}} leállítja a futtatást. Az oldal közben használható marad.

A jegyzék saját szimbólumait a lapján nem számolja. Más méretarányú lapot az adott méretarányon keres, a szimbólumokat pedig bármely derékszögben elforgatva is megtalálja.

## Darabszámok átnézése

- Minden szimbólum megmutatja az összesítését, alatta lapononként egy hivatkozással, ahol van találat („E-103: 4”). Kattintson rá, hogy arra a lapra ugorjon. A találatok a tétel színével keretezettek.
- **Kattintson egy keretre**, hogy kihagyja ezt a találatot. Szaggatottá és áthúzottá válik; újabb kattintással visszahozza.
- **Mozgassa az egyezési szintet** (50%-tól 100%-ig, a Beállításokban megadott szinttől kezdve). A magasabb csak a közeli egyezéseket tartja meg. A csúszka csak a talált elemeket szűri; nem keres újra.
- Két egymáshoz hasonló szimbólum (kettős és négyes csatlakozó) ugyanarra a helyre illeszkedhet. A jobb egyezés nyeri, a panel pedig megmondja, hány ilyen hely volt, így ellenőrizheti őket.
- Az a lap, amely túl nagy ahhoz, hogy a szimbólum méretében átkeressék, kimarad, és a panel ezt jelzi.

## Hozzáadás

Válassza a {{ui:N jelölés hozzáadása}} lehetőséget. Minden szimbólum darabszám-tétellé válik, minden találatnál jelöléssel. Egy név, amely már az Ön darabszám-tétele, újra felhasználódik (a kézzel már jelölt helyek nem duplázódnak). Az egész futtatás egy lépés: a {{key:Ctrl+Z}} minden tételt és jelölést visszavesz.

Amit elfogad, az a {{ui:Tanult}} listába is bekerül: a szimbólumok a mennyiségkimutatás fájljában megmaradnak a következő alkalomra.

## Asszisztensével

Ha engedélyezi az asszisztenseket a Beállításokban, képesek beolvasni egy jegyzéket (legend_open), a számolást a háttérben futtatni (legend_count_start, majd legend_count_status), olvasni a darabszámokat (legend_count_result), és hozzáadni őket (legend_count_add, amely előbb megmutathatja, mit adna hozzá). Ugyanaz a futtatás, amelyet a panelben lát.

## Bármilyen szögben lévő szimbólumok

Jelölje be a {{ui:Szimbólumok bármilyen szögben}} lehetőséget a számolás előtt, hogy a derékszögtől eltérő szögben rajzolt szimbólumokat is megtalálja (átlós falcsatlakozó, a tetőhöz igazított berendezés). A keresés ekkor 15 fokonként forgatja a szimbólumokat; a kerek szimbólumhoz továbbra is egy keresés kell, a nem kerek szimbólum pedig akár hatszor annyi ideig is tarthat. Derékszögben rajzolt terveknél hagyja kikapcsolva.

## Tudnivalók

- Olyan szimbólumokat igényel, amelyeket ugyanúgy rajzoltak, mint a jegyzékben. A jegyzék eltérő méretben rajzolása a lapokhoz rendben van, ha a lapok méretaránya be van állítva; méretarány nélkül a szimbólumokat a jegyzék méretében keresi.
- Egy szimbólum, amelyen fal vagy hosszú vonal megy át, kimaradhat, mert már nem hasonlít a jegyzék képére. Az első lapon nézze át a találatokat, mielőtt a többiben megbízna.
- Szöveg nélküli szkennelt lap is működik: a szimbólumokat a soraik alapján találja meg, a neveket pedig Ön gépeli be.
