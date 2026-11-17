---
title: Jelölések másolása, beillesztése és kettőzése
summary: Másolja a jelöléseket a tételeikkel együtt, illessze be oda, ahová kattint, vagy egy másik lap ugyanazon helyére, kettőzze, vágja ki, törölje és jelölje ki mindet; mindegyik egy lépésben visszavonható.
keywords: másolás, beillesztés, kivágás, kettőzés, helyben beillesztés, vágólap, összes kijelölése, kijelölés megszüntetése, több jelölés, tipikus emelet, ismétlés, ugyanaz a terv, másik lap, tétel másolása, tétel kettőzése
from: e20e9024
---

A {{ui:Szerkesztés}} csoport az eszköztáron tartalmazza a {{ui:Visszavonás}}, {{ui:Ismétlés}}, {{ui:Másolás}} és {{ui:Beillesztés}} gombokat. A {{ui:Továbbiak}} menüben van a többi, mindegyik a billentyűparancsával: {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés}}, {{ui:Törlés}}, {{ui:Összes kijelölése}} és {{ui:Kijelölés megszüntetése}}. Mindegyik egy lépésben visszavonható a {{key:Mod+Z}} billentyűvel.

## A jelölések kijelölése

1. Válassza a {{ui:Kijelölés}} ({{key:V}}) eszközt, és kattintson egy jelölésre.
2. Tartsa lenyomva a {{key:Shift}} billentyűt, és kattintson további jelölésekre a hozzáadáshoz. A {{key:Shift}} + kattintás egy már kijelölt jelölésen kiveszi azt.
3. Vagy nyomja meg a {{key:Mod+A}} billentyűt ({{ui:Összes kijelölése}}), hogy kijelölje az összes jelölést a megnyitott lapon.

Több jelölés kijelölésekor a jobb oldali panel a **Kijelölt jelölések** részt mutatja: tételenként, hány darab van, a {{ui:Másolás}}, {{ui:Kettőzés}}, {{ui:Kivágás}} és {{ui:Jelölések törlése}} gombokkal. A sarokfogók csak akkor látszanak, ha egyetlen jelölés van kijelölve. A {{key:Esc}} ({{ui:Kijelölés megszüntetése}}) törli a kijelölést.

## Másolás és beillesztés kattintással

1. Jelölje ki a jelöléseket, és nyomja meg a {{key:Mod+C}} billentyűt ({{ui:Másolás}}). A jelölések a tételeikkel együtt másolódnak, beleértve az egyes tételek összetett tételét, hulladékát és költségeit.
2. Menjen arra a lapra, ahová szeretné őket (lehet ugyanaz a lap is).
3. Nyomja meg a {{key:Mod+V}} billentyűt ({{ui:Beillesztés}}). A másolat szaggatott vonallal követi a mutatót.
4. Kattintson oda, ahová kerülnie kell. A másolt jelölések közepe a mutatóhoz kerül.

Az {{key:Esc}} megszakítja, és semmit nem ad hozzá. A beillesztett jelölések utána ki vannak jelölve, így a {{key:Delete}} vagy a {{key:Mod+Z}} újra eltávolítja őket.

Ugyanabban a mennyiségkimutatásban a beillesztett jelölések **ugyanazokhoz a tételekhez** kerülnek, így mennyiségük hozzáadódik azokhoz. Másik mennyiségkimutatásban (másik lap, vagy az {{ui:Új}} után) az azonos nevű és típusú tétel használódik; különben a tétel az összetett tételével együtt hozzáadódik. Ha a nevet más típusú tétel foglalja el, a hozzáadott tétel neve „(név) (másolat)” lesz.

A beillesztett jelölések a {{ui:Tételek}} panel tetején kiválasztott ajánlati területre kerülnek (vagy egyikbe sem). Lásd: [Ajánlati területek](topic:bid-areas).

## Beillesztés helyben

{{key:Mod+Shift+V}} ({{ui:Beillesztés helyben}}) a másolatot pontosan ugyanarra a helyre teszi a megnyitott lapon, az oldalon elfoglalt helye szerint. Tipikus emeletnél használja: mérje fel a 2. szintet, másoljon, nyissa meg a 3. szintet, és illessze be helyben.

A helyben beillesztéshez a másolt lappal **azonos méretű** lap kell. Más méretű lapon a TakeoffCraft jelzi, és nem illeszt be semmit; helyette használja a {{ui:Beillesztés}} parancsot, és kattintson. Azon a lapon, ahonnan másolt, a másolat az eredeti jelölések tetejére kerül.

## A méretaránynak egyeznie kell

A hosszak és területek a lap méretarányától függnek. Egy 10' hosszúságú szakasz 1/4" = 1'-0" méretarány mellett 20'-nek mérődne egy 1/8" = 1'-0" méretarányú lapon. Ezért a TakeoffCraft csak olyan lapra illeszti be a szakaszokat és területeket, amelynek **ugyanaz a méretaránya**, mint annak a lapnak, ahonnan származnak, és ezt egyértelműen közli, ha nem:

- A megnyitott lapnak még nincs méretaránya: előbb adjon neki egyet ([Méretarány beállítása](topic:set-the-scale)), aztán illessze be.
- A megnyitott lap másik méretarányú: az üzenet mindkét méretarányt megnevezi. Illessze be olyan lapra, amelynek azonos a méretaránya.
- A darabszámokhoz nincs szükség méretarányra: a másolt darabszámok bárhová beilleszthetők.

## Kettőzés

{{key:Mod+D}} ({{ui:Kettőzés}}) lemásolja a kijelölt jelöléseket, és azonnal a mutatóra helyezi a másolatot; kattintson oda, ahová kerülnie kell. Semmi nem adódik hozzá, amíg nem kattint, és az {{key:Esc}} nem hagy semmit. A kettőzés nem változtatja meg, mit illeszt be a {{ui:Beillesztés}}.

## Kivágás és törlés

- {{key:Mod+X}} ({{ui:Kivágás}}) lemásolja a kijelölt jelöléseket, és törli azokat. Illessze be, ahová valók, vagy vonja vissza a kivágást.
- {{key:Delete}} vagy {{key:Backspace}} ({{ui:Törlés}}) törli a kijelölt jelöléseket másolás nélkül.

## Tétel másolása

A tételszerkesztő (a **Tételek** alatt) ezekkel végződik:

- {{ui:Tétel másolása}}: a tételt összetett tételével, hulladékával és költségeivel másolja, jelölések nélkül. A {{ui:Beillesztés}} ezután egy másolatot ad hozzá ehhez a mennyiségkimutatáshoz, vagy egy másikhoz.
- {{ui:Tétel kettőzése}}: azonnal ad hozzá egy másolatot „(név) (másolat)” névvel.

:::tip
A másolat ezen a számítógépen marad: ebben a lapban és a böngésző tárolójában őrződik meg, így egy másik TakeoffCraft-lap is beillesztheti. Semmi nem töltődik fel, és a rendszer vágólapja nincs használatban, így jelöléseket nem tud más programokba beilleszteni.
:::

:::note
A másolat egyszerre egy lapról származik. A jelöléseket változtatás nélkül illeszti be: a másolat elforgatása vagy tükrözése még nem lehetséges.
:::
