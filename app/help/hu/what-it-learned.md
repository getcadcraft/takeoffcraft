---
title: Amit a mennyiségkimutatásaiból megtanult
summary: A TakeoffCraft megőrzi az Automatikus darabszámmal megerősített szimbólumokat, a feltételkészleteit, a leggyakrabban használt összetett tételeket és a minden lapon ismétlődő mintákat, mindezt a mennyiségkimutatás saját fájljában. Megnézheti, használhatja és törölheti.
keywords: tanulás, tanult, tanulás, asszisztens, emlékezés, szimbólumok, sablonok, ugyanaz, mint az előző munka, előző munka, feltételkészlet, feltételek, újrafelhasználás, összetett tételek, leggyakrabban használt, javaslatok, ismétlés minden oldalon, minden oldal, rajzfej, minta, összes törlése, elfelejtés, adatvédelem
from: 54d99e99
---

A TakeoffCraft annál gyorsabb lesz, minél több mennyiségkimutatást készít vele. **Csak azokból tanul, amelyeket Ön elfogad**:

- az [Automatikus darabszám](topic:auto-count) segítségével bekeretezett és hozzáadott szimbólumok,
- a mentett feltételkészletek,
- a használt összetett tételek (munkánként egyszer),
- az minden lapon ismétlődő jelölésminták.

Ez egyszerű egyeztetés az Ön saját lapjain, ugyanaz a keresés, amelyet az Automatikus darabszám is futtat. Nem betanított modell. Mindent, amit megtanul, **ebben a mennyiségkimutatás fájljában** (`.takeoff.json`) tárol, és semmit sem küld sehova. A következő munkába a [Mint az előző munkánál](topic:what-it-learned#same-as-last-job) segítségével viheti át.

Az eszköztáron válassza a {{ui:Tanult}} lehetőséget (a villanykörte, az {{ui:Automatikus darabszám}} mellett), hogy mindent lássa.

## Szimbólumok

Ha az {{ui:Automatikus darabszám}} segítségével bekeretez egy szimbólumot, és a {{ui:Hozzáadás}} lehetőséget választja, a bekeretezett szimbólum megmarad az Ön által elfogadott egyezési szinttel együtt.

- A {{ui:Tanult}} alatt válassza a {{ui:Keresés ezen a lapon}} vagy a {{ui:Keresés minden lapon}} lehetőséget. Megnyílik a szokásos Automatikus darabszám-áttekintés: kattintson egy keretre, hogy kihagyja, mozgassa a csúszkát, majd adja hozzá őket. Addig semmi sem kerül hozzáadásra, amíg Ön nem teszi.
- Ha olyan lapot nyit meg, amelyen még nincs meg egy megtanult szimbólum, a tetején lévő sáv felajánlja a {{ui:Keresés …}} lehetőséget. A {{ui:Most nem}} elrejti a sávot az adott lapon.
- Ha a mennyiségkimutatásban nincs olyan nevű tétel, a jelölések hozzáadása a tételt is hozzáadja (egy visszavonási lépés).
- Ha ugyanannak a tételnek a szimbólumát újra hozzáadja, az a már ismerthez számít; egy másképp kinéző szimbólum második szimbólumként marad meg.
- Az Automatikus darabszámhoz hasonlóan derékszögben elforgatva és más méretarányú lapokon is megtalálja a szimbólumot.

## Feltételkészletek

A készlet a mennyiségkimutatás feltételeit (a tételeket a mértékegységükkel, egységáraikkal, hulladékukkal és összetett tételeikkel) tárolja, jelölések nélkül.

1. A {{ui:Tanult}} alatt válassza a {{ui:A mennyiségkimutatás feltételeinek mentése készletként…}} lehetőséget, és adjon nevet neki. Az azonos nevű készlet felülíródik.
2. Olyan mennyiségkimutatásban, amelyben van a készlet, a {{ui:Hozzáadás}} beteszi azokat a feltételeket, amelyek még nincsenek meg. Az azonos nevű és típusú feltételek érintetlenek maradnak. Egy visszavonási lépés.

## Mint az előző munkánál

Az előző munka fájlja tartalmazza, amit tanult. Új munka indításához:

1. Nyissa meg az új terveket, és válassza a {{ui:Tanult}} › {{ui:Mint az előző munkánál…}} lehetőséget.
2. Válassza ki az előző munka `.takeoff.json` fájlját.
3. Jelölje be, mit vigyen át: a feltételeit (csak azokat, amelyek ebben a mennyiségkimutatásban még nincsenek meg), és amit tanult (szimbólumok, készletek, összetett tételek, minták). Ezután válassza a {{ui:Behozatal}} lehetőséget.

A feltételei egy, az adott munka nevét viselő készletként is megmaradnak. Jelölései és mennyiségei a saját fájljában maradnak. Az egész egy visszavonási lépés.

## A leggyakrabban használt összetett tételek

Az összetett tétellel rendelkező tétel munkánként egyszer számít használtnak, ha van mennyisége, és Ön menti a mennyiségkimutatást. A munka azon tervfájlok halmaza, amelyekről a mennyiségkimutatás készül, ezért ugyanannak a mennyiségkimutatásnak az újbóli mentése nem számít kétszer. A {{ui:A leggyakrabban használt összetett tételek}} alatti lista a leggyakrabban használtakat teszi elöl. Kihagyja azokat, amelyek már megvannak ebben a mennyiségkimutatásban. A {{ui:Hozzáadás}} az utoljára használt formájában, minden részével együtt beteszi az összetett tételt.

## Ismétlés minden oldalon

Olyan jelölésekre, amelyek egy készlet minden oldalán azonosak, például egy rajzfej-darabszámra vagy egy tipikus részletre:

1. Jelölje ki a jelöléseket egy lapon ([Jelölések kijelölése](topic:copy-paste#select-the-marks)).
2. A {{ui:Tanult}} alatt válassza az {{ui:Az kijelölt jelölések ismétlése minden oldalon…}} lehetőséget, nevezze el a mintát, majd erősítse meg.

A jelölések minden más nyitott oldalra kerülnek, **azonos méretűre**, ugyanazon a helyen, egy visszavonási lépésben. A futóhosszak és területek csak azonos méretarányú oldalakra kerülnek; a darabszámok bármely azonos méretű oldalra. Ahol már vannak ilyen jelölések, azt az oldalt átugorja. A minta megmarad, így a később megnyitott oldalakon a sáv felajánlja, vagy a listában az {{ui:Ismétlés minden oldalon}} használható.

## Megnézni, törölni

Mindent, amit megtanult, a {{ui:Tanult}} listázza. A kuka egy elemet töröl. Az {{ui:Összes törlése}} mindent töröl, amit megtanult, a tételeit és jelöléseit érintetlenül hagyja. Mindkettő visszavonható, amíg be nem zárja a mennyiségkimutatást, és mindkettő a mennyiségkimutatással együtt mentődik.

Ha egy mennyiségkimutatásban meg akarja állítani a tanulást, törölje a jelölést a {{ui:Tanulás ebből a mennyiségkimutatásból}} mellől. Új dolgot nem tanul meg, a listában lévők pedig addig maradnak, amíg Ön nem törli őket.

## Jó tudni

- A TakeoffCraft régebbi verziói normálisan megnyitják a megtanultakat tartalmazó fájlt. Ezt a részt figyelmen kívül hagyják, és ha újra mentik a fájlt, eldobják.
- A megtanult szimbólum a bekeretezett szimbólum kis képe, amely a fájlban tárolódik (egyenként néhány kilobájt).
- A megtanult szimbólumokra ugyanaz a keresés fut, mint az Automatikus darabszámra, így ugyanazok a korlátok érvényesek: [Szimbólum automatikus darabszámlálása](topic:auto-count).
