---
title: Területek mérése kivágásokkal
summary: Padlók, mennyezetek és födémek körvonalazása, lyukak kivágása belőlük, ívelt élek, körök és kerek kivágások hozzáadása, a terület és a kerület leolvasása.
keywords: helyiségkitöltés, elárasztásos kitöltés, festékesvödör, kattintás a helyiségen belül, automatikus terület, visszalevonás, backout, oszlop, akna, levonás több tételből, terület, sokszög, körvonal, négyzetláb, sf, kivágás, lyuk, levonás, kör, kerek, ív, kerület, padló, mennyezet, födém
from: 34648db7
---

A területtétel zárt terület mérését végzi. Minden körvonalból ki lehet vágni lyukakat (akna, oszlop, virágláda), és az élei lehetnek egyenesek vagy ívesek.

Mielőtt elkezdi: a lapnak méretarányra van szüksége ([Méretarány beállítása](topic:set-the-scale)), és egy területtételre ([Mennyiségkimutatás-tételek létrehozása](topic:create-items)).

## Terület körvonalazása

1. Kattintson a {{ui:Tételek}} alatt lévő területtételre.
2. Válassza az eszköztárban a {{ui:Terület}} lehetőséget, vagy nyomja meg az {{key:A}} billentyűt.
3. Kattintson sorban minden sarokra a helyiségnél vagy a födémnél. A {{key:Shift}} billentyűt nyomva tartva 0°-os, 45°-os és 90°-os éleket kap. A harmadik ponttól kezdve a körvonal kitöltődik, az állapotsorban pedig a „Terület” és a „kerület” jelenik meg. Az első pont körül egy kis gyűrű látszik.
4. Zárja le a körvonalat: kattintson az első pontra (a gyűrűjén belül), nyomja meg az {{key:Enter}} billentyűt, kattintson duplán, vagy kattintson jobb gombbal.
   A terület a tétel színével halványan kitöltődik, a négyzetlábat mutató felirattal jelenik meg, és ez lesz a kijelölt jelölés.

A {{key:Backspace}} eltávolítja az utolsó sarkot; az {{key:Esc}} eldobja a körvonalat.

Az önmagát metsző körvonalat a rendszer elutasítja: „A körvonal metszi önmagát, ezért a terület hibás lenne. Rajzolja újra metszés nélkül.” Nyolcas alakzatot rajzoljon két területként.

## Ívelt élek

A körvonalazás közben kapcsolja be az ív módot ({{ui:Ív}} vagy {{key:R}}). Egy sarok után kattintson egy pontra a görbe mentén, majd arra a pontra, ahol a görbe véget ér. Ha a körvonalat görbével szeretné lezárni, az utolsó kattintás az első ponton legyen. A terület és a kerület a pontos görbét használja. Az egyenes élekhez nyomja meg újra az {{key:R}} billentyűt. Egy görbe utólagos módosításához jelölje ki a területet, és húzza az ív közepén lévő kerek fogantyút. Lásd: [Vonalas futások mérése](topic:measure-linear#arcs-and-curved-walls).

## Kör

1. Egy területtétellel válassza a {{ui:Kör}} lehetőséget, vagy nyomja meg az {{key:O}} billentyűt.
2. Kattintson a középpontra.
3. Kattintson a szél egy pontjára.
   Mozgatás közben az állapotsor mutatja a sugarat és a területet. A kör pontos területtel és kerülettel, területjelölésként kerül be.

## Helyiség kitöltése egy kattintással

Ha a helyiségek zárt falakként vannak megrajzolva, a {{ui:Helyiség}} ({{key:B}}) egy kattintással veszi fel a padlót:

1. Válasszon egy területtételt (például padlóburkolatot), és adja meg a lap méretarányát.
2. Válassza a **Mennyiségkimutatás** csoport {{ui:Helyiség}} lehetőségét, vagy nyomja meg a {{key:B}} billentyűt.
3. Kattintson egy helyiségen belül, a nyitott padlón (ne vonalra vagy feliratra).

A TakeoffCraft beolvassa a lap vonalait, megtalálja a kattintás körüli teret, és a falak belső oldala mentén körvonalazza, a jelenlegi tétel területeként. A legfeljebb **4'-0"** széles ajtónyílásokat zártnak tekinti, így a körvonal egyenesen átfut az ajtónyíláson. A **Beállítások › TakeoffCraft › A helyiségkitöltés zárja a nyílásokat, legfeljebb** ezt a szélességet módosítja (3'-0" és 8'-0" között). A helyiségen belüli nevek, bútorok és berendezések nem hoznak létre lyukat.

Az alábbi esetekben elutasítja, és megmondja, miért:

- a kattintás vonalon van („Ez egy vonalon van”);
- a tér nincs lezárva: a nyílás szélesebb a beállításnál, így a tér a lap széléig kifut. Növelje a beállítást, vagy rajzolja meg kézzel a helyiséget a {{ui:Terület}} eszközzel;
- a tér túl kicsi (jelkép, nem helyiség).

Ha az ajtó szélesebb a beállításnál, a kitöltés átfut a következő helyiségbe, és mindkettőt együtt körvonalazza: vonja vissza ({{key:Mod+Z}}), növelje a beállítást, és kattintson újra. Ellenőrizze a körvonalat, mint minden területet: a sarkainak húzásával igazíthat rajta. Beolvasott lap ugyanígy működik, de a vonalainak elég sötéteknek kell lenniük; a világosszürke vonalak lehet, hogy nem állítják meg a kitöltést.

## Lyuk kivágása egy területből

1. Válassza a {{ui:Kijelölés}} ({{key:V}}) lehetőséget, és kattintson a területre. Négyzet alakú fogantyúk jelennek meg a sarkain.
2. Válassza az eszköztárban a {{ui:Kivágás}} lehetőséget (vagy nyomja meg az {{key:X}} billentyűt), vagy a **Kijelölt jelölés** alatt a {{ui:Kivágás hozzáadása}} lehetőséget.
3. Kattintson a lyuk sarkaira, a területen belül. Az ív mód itt is működik.
4. Zárja le úgy, mint a területet: kattintson az első pontra, nyomja meg az {{key:Enter}} billentyűt, kattintson duplán, vagy kattintson jobb gombbal.
   A lyuk kitöltetlen marad, az állapotsor pedig ezt írja: „Kivágás hozzáadva. Rajzoljon másikat, vagy nyomja meg az Esc billentyűt.”
5. Rajzoljon további lyukakat ugyanabban a területben, vagy nyomja meg az {{key:Esc}} billentyűt.

Kerek lyuk esetén válassza a **Kijelölt jelölés** alatt a {{ui:Kerek kivágás hozzáadása}} lehetőséget, kattintson a középpontjára, majd a szélén egy pontra.

Egy kivágásnak teljesen a területen belül kell lennie, és nem szabad átfednie másik kivágással. Ellenkező esetben a TakeoffCraft elutasítja: „A kivágásnak teljesen a területen belül kell lennie.” vagy „A kivágások nem fedhetik egymást.”

Az utolsó lyuk eltávolításához válassza az {{ui:Utolsó kivágás eltávolítása}} lehetőséget.

## Visszalevonások: oszlopok, aknák és nyílások több tételből

Egy kivágás egy területjelöléshez tartozik. A **visszalevonás** egyszer rajzolódik meg, és minden olyan területből kivonódik, amellyel átfedésben van, a kiválasztott tételeknél. Rajzolja meg egyszer az oszlopokat, és egyszerre vonódnak le a padlóburkolatból, a mennyezetből és a födémből.

1. Hozzon létre nekik egy területtételt, például „Oszlopok” néven.
2. A tétel beállításai között jelölje be a **Visszalevonás: jelölései a területüket veszik ki más tételekből** jelölőnégyzetet. Megjelenik a többi területtétel listája, mind bejelölve: törölje a jelölést azoknál, amelyeket a visszalevonások nem érinthetnek (például a falfestés).
3. Mennyiségezze az oszlopokat a {{ui:Terület}} vagy a {{ui:Kör}} eszközzel, a szokásos módon. Mindegyik szaggatottan rajzolódik meg.

A lap minden olyan területjelölése, amelynek tétele be van jelölve, elveszíti azt a részt, amelyet egy visszalevonás lefed: teljesen, ha a visszalevonás belül van, csak az átfedő rész, ha átlép a szélen, és semmit sem a kivágáson belül. A kijelölt terület panelje a **Visszalevonások** és a megmaradt terület sorát mutatja. A tétel mennyisége, az összetevőinek képletei, a költségek, a 3D-s ellenőrző nézet és az exportálás mind a megmaradt területet használják; a költségvetés megjegyzései megmondják, mennyit vontak le a visszalevonások. A visszalevonás tétel maga a saját területét számolja (ha nem árazza, hagyja nullán a költségeit).

A visszalevonásnak **konvexnek** kell lennie: téglalapnak, körnek vagy bármilyen körvonalnak, amelynek nincs befelé mutató sarka. A TakeoffCraft elutasítja a nem konvexet; egy L alakú aknát két visszalevonásként rajzoljon. A visszalevonásoknak nem lehet kivágásuk, és két egymást átfedő visszalevonás mindkettő beleszámít.

A kerület (`P`) nem változik: a visszalevonások csak területet vonnak le.

## A terület leolvasása

Jelölje ki a területet. A **Kijelölt jelölés** mutatja:

| Sor | Jelentés |
|---|---|
| Terület | A nettó terület: a körvonal mínusz a kivágások. Ezt számolja a tétel. |
| Körvonal | A körvonalon belüli bruttó terület (kivágások esetén látszik). |
| Kivágások | Hány lyuk van, és azok összes területe. |
| Kerület | A körvonal élhossza, **plusz** minden kivágás élei („kivágásokkal”). |

A kerület szándékosan tartalmazza a kivágások éleit, például olyan élzsaluzatokhoz vagy alapozáshoz, amely egy lyuk körül is fut. Ha csak a külső élre van szüksége, tartson lyukat az adott tételből, vagy mérje a külső élt vonalas futásként.

A tétel {{ui:Egység}} beállítása határozza meg, hogy a végösszeg milyen mértékegységben jelenjen meg: SF, SY vagy m². A **Kijelölt jelölés** panel és az állapotsor mindig négyzetlábat mutat.

## Terület javítása

- **Sarok mozgatása**: jelölje ki a területet, és húzza a sarokfogantyút (a lyukaknak is vannak fogantyúi). Ha az új alak metszené önmagát, vagy kitolna egy lyukat, a sarok visszakerül: „A pont vissza lett helyezve.”
- **Áthelyezés másik tételbe**: válasszon egy másik területtételt a **Kijelölt jelölés** alatti **Tétel** listából.
- **Törlés**: {{key:Delete}}, a {{ui:Törlés}} az eszköztár {{ui:Továbbiak}} menüjében, vagy a {{ui:Jelölés törlése}}.

## Mélység térfogatokhoz

Adjon a területtételnek {{ui:Mélység}} értéket (például `0'-4"` egy födémhez), és az összetevőben az `A * H / 27` képlettel köbyardot kap. Lásd: [Összetevők és képletek](topic:assemblies).
