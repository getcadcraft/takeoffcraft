---
title: Árak memóriája a korábbi munkáiból
summary: A TakeoffCraft megjegyzi a korábbi mennyiségkimutatásokban használt díjtételeket, csak ezen a számítógépen, hogy egy új mennyiségkimutatás onnan indulhasson, amit legutóbb kifizetett. Lássa, használja, felejtse el.
keywords: árak memóriája, árak, árak megjegyzése, utolsó munka, korábbi munkák, tipikus ár, medián, díjtételek, ár nélküli, újraárazás, tanulás korábbi mennyiségkimutatásból, elfelejtés, könyvtár
from: 7279f1a1
---

Az {{ui:Árak}} az eszköztáron (a dollárjel) megnyitja azt, amit a TakeoffCraft a használt árakról megjegyzett. Ez egy egyszerű lista: minden tételnévhez a legutóbbi munkáiból származó díjtételek tartoznak. Ebben a böngészőben tárolódik (a Studióban a saját webnézetében), az árkönyvtár mellett, soha nem a mennyiségkimutatás fájlban, és semmi sem küldődik el sehová. Nem betanított modell.

## Mit jegyez meg

Amikor mennyiségkimutatást ment, minden olyan tétel, amelynek van ára és használt (van jelölése, vagy nullánál nagyobb beírt mennyisége), a nevével és típusával együtt megjegyződik: anyagdíj, munkadíj, hulladék és mértékegység. Egy munka az a tervfájl-készlet, amelyből a mennyiségkimutatás készült, így ugyanazt a mennyiségkimutatást újra mentve a saját árait cseréli, nem ad hozzá újabb munkát. Minden névhez az utolsó 12 munka marad meg.

A korábbi munkáiból való induláshoz válassza a {{ui:Tanulás egy korábbi mennyiségkimutatásból…}} lehetőséget, és válasszon ki egy mentett mennyiségkimutatást (.json). Annak árazott, használt tételei ugyanígy megjegyződnek.

A nevek akkor egyeznek, ha a szavaik egyeznek, bármilyen kis- vagy nagybetűvel vagy írásjellel („2x4 Stud, 8 ft” és „2x4 stud 8 FT” ugyanaz). Ugyanazok a szavak más fajtájú tételnél (egy lineáris tételnél és egy darabszámos tételnél) nem azonos árat jelentenek.

## Használat új mennyiségkimutatásban

1. Hozza létre az új mennyiségkimutatás tételeit.
2. Válassza az {{ui:Árak}} lehetőséget. Az {{ui:Ez a mennyiségkimutatás}} alatt minden olyan tételt lát, amelynek van megjegyzett ára, azt, ami rajta most van, az utolsó munka díjtételeit, a tipikus díjtételeket (a megjegyzett munkák közepét) és a tartományt.
3. Válassza az {{ui:Az utolsó használata}} vagy a {{ui:A tipikus használata}} lehetőséget egy tételnél, vagy a {{ui:N ár nélküli tétel árazása a memóriából}} lehetőséget, hogy minden még ár nélküli tételt kitöltsön az utolsó munkából.

Minden használat egy lépés: a {{key:Ctrl+Z}} visszavonja. Ha egy tételnek csak hasonló neve van (az egyik név a másikban van), ezt jelzi, és a gombok a hasonló név díjtételeit használják. Egy darabonkénti (EA) megjegyzett ár soha nem kerül lábankénti tételre: a párbeszédpanel jelzi, hogy a mértékegységek eltérnek, és nem nyúl hozzá.

## Megnézni, megváltoztatni, elfelejteni

A {{ui:Minden megjegyzett}} minden nevet felsorol a díjtételeivel és a munkák számával. A kuka gomb egy nevet felejt el; a {{ui:Minden ár törlése}} mindet elfelejti. Vegye ki a jelölést a {{ui:Jegyezze meg az áraimat, amikor mennyiségkimutatást mentek}} lehetőségnél, ha már nem szeretne megjegyezni; ami már ott van, marad, amíg el nem felejti. A mennyiségkimutatásai és az árkönyvtár soha nem módosul.

## Az asszisztenssel

Ha az asszisztenseket a Beállításokban engedélyezi, azok olvashatják, mi van megjegyezve a mennyiségkimutatás tételeihez (prices_list), és árazhatnak belőle (prices_apply, amely előbb előnézetet is adhat). Ugyanaz a lista, mint a párbeszédpanelen.
