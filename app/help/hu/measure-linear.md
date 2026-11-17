---
title: Vonalas futások mérése
summary: Falak, csővezetékek, díszlécek és egyéb hosszúságok felvétele futásokként, egyenes szakaszokkal, ívekkel és a Shift 45 fokos fogásával.
keywords: vonalas, hossz, futás, polivonal, falak, lf, lineáris láb, ív, görbe, 45 fok, ortogonális, fogás, szakaszok, polyhossz, levonás, nyílás, ajtó, rés, beírás, beírt, koordináták, távolság, közvetlen távolság, polár
from: c669deff
---

A vonalas tétel hosszt mér. Minden futás pontok láncolata: egyenes szakaszok, és ívek, ha bekapcsolja az ív módot. Egy tételnek tetszőleges számú futása lehet, tetszőleges számú lapon.

Mielőtt elkezdi: a lapnak méretarány kell ([Méretarány beállítása](topic:set-the-scale)), és egy vonalas tétel ([Mennyiségkimutatás-tételek létrehozása](topic:create-items)).

Vektoros PDF-en a kattintásai a rajz saját vonalaira illeszkednek: végpontokra, felezőpontokra és metszéspontokra ([Fogás a rajz vonalaihoz](topic:snap-to-the-drawing); az {{key:F3}} kikapcsolja).

## Futás rajzolása

1. Kattintson a {{ui:Tételek}} alatt lévő vonalas tételre.
2. Válassza az eszköztárban a {{ui:Vonalas}} lehetőséget, vagy nyomja meg az {{key:L}} billentyűt.
3. Kattintson a futás kezdőpontjára.
4. Kattintson minden sarokra a mentén.
   Az állapotsor mutatja a „Hossz” értéket (az eddigi futás a mutatóig) és a „szakasz” értéket (a rajzolt szakasz), láb és hüvelyk szerint.
5. Fejezze be a futást: kattintson duplán az utolsó ponton, nyomja meg az {{key:Enter}} billentyűt, vagy kattintson jobb gombbal.
   A futás a tétel színével rajzolódik meg, és ez lesz a kijelölt jelölés. A {{ui:Tételek}} listában és a {{ui:Mennyiségek}} táblában a tétel hossza nő.

Az eszköz {{ui:Vonalas}} marad, így rögtön kezdhet a következő futást. Az {{key:Esc}} billentyűvel visszatér a {{ui:Kijelölés}} eszközre.

Rajzolás közben:

- A {{key:Backspace}} (vagy a {{key:Delete}}) eltávolítja az utolsó pontot.
- Az {{key:Esc}} eldobja a befejezetlen futást.
- Húzással a lap eltolódik, a görgővel lehet nagyítani, pont hozzáadása nélkül.

:::mac
Mac érintőpadon a jobb klikk kétujjas kattintás (kapcsolja be a másodlagos kattintást a Rendszerbeállításokban, az Érintőpad alatt). A TakeoffCraft csak a másodlagos gombot olvassa, így a Control-kattintás egyszerű kattintásnak számíthat, és pontot ad hozzá. A dupla kattintás vagy az {{key:Enter}} mindig befejez.
:::

:::touch
Érintőképernyőn koppintson a pontok elhelyezéséhez, húzzon egy ujjal az eltoláshoz, és csippentsen két ujjal a nagyításhoz. Befejezéshez tartsa hosszan nyomva, koppintson duplán, vagy használja a lap alatti sávban lévő {{ui:Befejezés}} gombot ({{ui:Hátul}} visszavonja az utolsó pontot). Lásd: [Hibaelhárítás](topic:troubleshooting#touch-screens).
:::

## Egyenes vonalak 45 fokos lépésekben

Tartsa nyomva a {{key:Shift}} billentyűt, miközben pontot helyez el. Az utolsó ponttól mutató szakasz a legközelebbi 0°, 45°, 90° vagy 135°-os irányba illeszkedik, megtartva a hosszt, amelyet húzással adott meg. Az állapotsor emlékeztet: „A Shift 45°-ra illeszt”.

Ívmódban ez az ív végére vonatkozik: az ív húrja az ív kezdetétől 45°-os lépésekben halad. A görbén kattintott pont sosem illeszkedik.

## Ívek és ívelt falak

1. Futás rajzolása közben helyezze el azt a pontot, ahol a görbe kezdődik.
2. Kapcsolja be az ív módot: válassza az eszköztárban az {{ui:Ív}} lehetőséget, vagy nyomja meg az {{key:R}} billentyűt. A gomb lenyomva marad.
3. Kattintson a görbe bármelyik pontjára, valahol a közepe táján.
   Az állapotsor kiegészül: „(ív: kattintson ott, ahol véget ér)”, az előnézet pedig a megadott pont köré ívelődik.
4. Kattintson arra a helyre, ahol a görbe véget ér.
   Az ív hozzáadódik. Hossza a pontos ívhossz, nem rövid húrok sorozata.
5. Kattintson egy újabb pontra a következő görbén, majd annak végére, hogy tovább rajzoljon ívet, vagy nyomja meg újra az {{key:R}} billentyűt az egyenes szakaszokhoz való visszatéréshez.

A {{key:Backspace}} vagy az {{key:Esc}} először a görbén lévő függőben lévő pontot dobja el; újabb megnyomásra a pontokat a szokásos módon törli.

## Hosszak és koordináták beírása

Az első pont után beírhatja, hol legyen a következő pont, ahelyett, hogy kattintana. Írjon be egy számjegyet, `@`-t vagy `#`-t: az állapotsorban megnyílik a {{ui:Beírás}} mező a begépelt tartalommal. Nyomja meg az {{key:Enter}} billentyűt a pont elhelyezéséhez; a mező a következőhöz nyitva marad.

| Beírás | A következő pont ide kerül |
|---|---|
| `12'6"` | 12'-6" távolságra az utolsó ponttól, a mutató irányába (mutasson az irányba, majd írja be a hosszt) |
| `12'6"<45` | 12'-6" távolságra, 45°-ban, a képernyő jobb oldalától az óramutató-járással ellentétesen számolva (`<90` felfelé, `<-90` lefelé) |
| `@6',-4'` | 6'-tel jobbra és 4'-tel lefelé az utolsó ponttól |
| `6',4'` (vagy `#6',4'`) | 6'-tel jobbra és 4'-tel felfelé a futás első pontjától |

Hosszakat a TakeoffCraftban mindenhol úgy írjon be, ahogy a [Bevitel formátumai](topic:entry-formats) szerint: `12'-6 1/2"`, `12.5` (láb), `30"`, `3.2 m`. A „jobbra” és a „felfelé” úgy értendő, ahogy a lapot látja, akkor is, ha a PDF-oldal el van forgatva.

Üres mezőben az {{key:Enter}} befejezi a futást, ugyanúgy, mint a lapon; az {{key:Esc}} bezárja a mezőt, és a futás folytatódik. A beírt pontokra ugyanazok a szabályok vonatkoznak, mint a kattintásokra: a levonások, az ívek és a terület lezárása is működik. Ugyanez a mező működik az {{ui:Terület}} és a {{ui:Kivágás}} eszköznél is; kör középpontja után a sugarat kéri.

## Futás egy részének levonása

Egy fal-futás, amely átmegy egy ajtón vagy üzlethomlokzaton, egyenesen áthúzható, és továbbra is csak a fal számít: a nyíláson átívelő szakaszok **levonások**. Ezek szaggatottan és vékonyan rajzolódnak, és nem számítanak bele.

Rajzolás közben:

1. Helyezze el a pontot, ahol a nyílás kezdődik.
2. Válassza az eszköztárban a {{ui:Levonás}} lehetőséget, vagy nyomja meg az {{key:E}} billentyűt. A gomb lenyomva marad, és az állapotsor jelzi, hogy a következő szakaszok levonások.
3. Kattintson arra a pontra, ahol a nyílás véget ér. A szakasz szaggatottan rajzolódik; az állapotsor „Hossz” értéke kihagyja.
4. Nyomja meg újra az {{key:E}} billentyűt, és folytassa a falon.

Rajzolás után: jelölje ki a futást. A **Kijelölt jelölés** alatt minden szakasz mellett van egy {{ui:Levonás}} jelölőnégyzet: jelölje be, hogy levonja a szakaszt, vagy törölje a jelölést, hogy újra beleszámítson. Minden változtatás egy visszavonási lépés.

A futásnak mindig marad legalább egy beszámító szakasza. A panelen látszik a **Levonások** (a levont hossz) és a **Rajzolva** (a teljes futás); a **Hossz**, a tétel mennyisége, a fal területe és a költségek a levonások nélküli hosszt használják. A 3D-s ellenőrző nézet rést hagy a falban, a jelölt PDF szaggatottan rajzolja a levonásokat, az exportált **Jelölések** lap pedig felsorolja őket.

A pont mozgatása megtartja a levonásokat. Pont hozzáadása vagy eltávolítása (a futás újrarajzolásával) levonások nélkül kezdődik.

## A futás részletei

Válassza a {{ui:Kijelölés}} ({{key:V}}) lehetőséget, és kattintson a futásra. A jobb oldali **Kijelölt jelölés** mutatja:

- a tételt, amelyhez tartozik (másik vonalas tételt a listában kiválasztva át lehet helyezni),
- a lapot,
- a **Hossz** értéket láb és hüvelyk szerint, és LF-ben,
- a **Szakaszok** számát, és a **Fal területét**, ha a tételnek van magassága,
- minden szakasz hosszát, az ívek után „(ív)” jelöléssel, és a {{ui:Levonás}} jelölőnégyzetét.

A lapon a kijelölt futás minden szakasza fel van címkézve a hosszával.

## Futás javítása

- **Pont mozgatása**: jelölje ki a futást, majd húzza az egyik négyzet alakú sarokfogantyút. A {{key:Shift}} billentyűt nyomva tartva a mozgatott szakasz 45°-os lépésekre illeszkedik. Az ív megtartja a kidudorodását.
- **Ív hajlítása**: a kijelölt futás minden ívének közepén egy kerek fogantyú látszik. Húzza meg: az ív azon a ponton megy át, ahol elengedi, így jobban, kevésbé vagy az ellenkező irányba domborodik. Ha a végpontjai közötti egyenesre húzza, egyenes szakasz lesz belőle. A {{key:Mod+Z}} visszavonja („Ív hajlítása”).
- **Futás törlése**: jelölje ki, nyomja meg a {{key:Delete}} billentyűt, válassza a {{ui:Törlés}} lehetőséget az eszköztár {{ui:Továbbiak}} menüjében, vagy a panelen a {{ui:Jelölés törlése}} gombot.
- **Visszavonás**: {{key:Mod+Z}}; az ismétlés a {{key:Mod+Y}}.

Egy futás közepére még nem lehet pontot beszúrni. Törölje a futást, és rajzolja újra.

## Fal területe

Adjon a vonalas tételnek {{ui:Magasság}} értéket (például `9'-0"`). Ekkor megjeleníti a **Fal területe (A)** értéket = hossz × magasság, SF-ben (metrikus tételnél m²-ben), és a fal területe bekerül a táblázatos exportálás megjegyzés oszlopába. Összetevőkben burkolathoz, festéshez vagy szigeteléshez használja: lásd [Összetevők és képletek](topic:assemblies).
