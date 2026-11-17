---
title: Mennyiségek és a költségvetés olvasása
summary: A Mennyiségek táblázat használata tételenként és lapok szerint, a teljes összeg, a kiemelés és a Hiányos figyelmeztetés.
keywords: mennyiségek, összegek, tételenként, lapok szerint, teljes összeg, költségvetés, összesítés, jelentés, kiemelés, hiányos, költségek
from: 069d41f1
---

A rajz alján lévő {{ui:Mennyiségek}} táblázat az élő költségvetése. Azonnal változik, amint rajzol, töröl, átméretez vagy egységárat módosít. A mennyiségeket a program nem tárolja; minden alkalommal újra a jelölésekből számítja ki, így nem avulhatnak el.

## Tételenként

Válassza a {{ui:Tételenként}} lehetőséget (ez az alapértelmezett). Minden tételnek van egy sora, az összetevőinek pedig egy-egy sor a tétel alatt.

| Oszlop | Jelentés |
|---|---|
| Tétel | Név, a tétel színével. A „+(n) méretarány nélkül” azt jelenti, hogy néhány jelölés méretarány nélküli lapon van. |
| Mennyiség | A mért összeg a tétel mértékegységében (összetevőknél: a képlet eredménye). |
| Mértékegység | LF, m, SF, SY, m², EA, vagy az összetevő mértékegysége. |
| Hulladék % | Itt vagy a tételszerkesztőben írható be. |
| Hulladékkal együtt | Mennyiség × (1 + hulladék). |
| Anyag/egység, Munkadíj/egység | Egységárak; itt is beírhatók. |
| Anyag, Munkadíj | Hulladékkal együtt × egységár, centre kerekítve. |
| Összesen | Anyag + munkadíj. |

Az utolsó sor, a **Teljes összeg**, összeadja az anyag-, munkadíj- és összesen oszlopot. Ugyanez az összeg látszik a táblázat fejlécének jobb oldalán.

Írjon be egy hulladék- vagy egységárcellába, majd nyomja meg az {{key:Enter}} billentyűt, vagy kattintson máshova, hogy alkalmazza. A TakeoffCraft számára olvashatatlan értéket piros keret jelöli, az állapotsor pedig megmondja az okát, például: „Írjon be egy összeget, például 12,50.”

Kattintson egy tétel sorára, hogy kiemelje a jelöléseit minden lapon, és a jelöléseket tartalmazó lapra ugorjon. (Ugyanaz, mint a {{ui:Tételek}} alatti kattintás.)

## Lapok szerint

Válassza a {{ui:Lapok szerint}} lehetőséget, hogy lapon-ként lássa minden tétel mennyiségét, a jelölések számával együtt. Kattintson egy sorra: megnyílik az adott lap a kiemelt tétellel. Használja arra, hogy ellenőrizze, minden lapot felmértek-e, vagy hogy a mennyiségeket szintenként vagy munkaterületenként bontsa.

## Területenként

Ha a mennyiségkimutatásban vannak ajánlati területek, a {{ui:Területenként}} lista minden terület tételeit és részösszegét mutatja. Lásd: [Ajánlati területek](topic:bid-areas).

## A Hiányos figyelmeztetés

Ha valami kimarad az összegekből, a fejléc figyelmeztetést jelenít meg, például:

„Hiányos: 1 képleti hiba, 6 jelölés méretarány nélküli lapon (nincs az összegben)”

- **Képleti hibák**: egy összetevő képletét nem lehet kiszámítani. Sorában ez áll: „Képlethiba: …”. Lásd: [Összetevők és képletek](topic:assemblies#when-a-formula-is-wrong).
- **Jelölések méretarány nélküli lapon**: adjon méretarányt ezeknek a lapoknak. Lásd: [A méretarány beállítása](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Ugyanezek a megjegyzések bekerülnek az exportált táblázatba, így a hiányos költségvetés sosem tűnik teljesnek.

## Tétel kiemelése

Kattintson egy tételre a {{ui:Tételek}} listában vagy a táblázatban. Jelölései teljes erővel maradnak minden lapon, a többi halványabb lesz. A lapok listája minden érintett lapnál megmutatja: „(n) kiemelve”. A kiemelés megszüntetéséhez kattintson újra a tételre.

## Tételösszegek az oldalsávban

A {{ui:Tételek}} lista minden tételénél szintén látszik a mennyiség. A tételszerkesztő **Mért** blokkja azokat az értékeket mutatja, amelyeket a képletei használnak: hosszúság, futások és falfelület; terület, kerület és területek száma; vagy darabszám.

## Nem megnyitott PDF-ek jelölései

A mennyiségkimutatás tartalmazhat olyan PDF-ek jelöléseit is, amelyeket ezúttal nem nyitott meg. Ezek is beleszámítanak minden összegbe; a lapok listája nevezi meg ezeket a PDF-eket. Lásd: [A mennyiségkimutatás mentése és újranyitása](topic:save-and-reopen).

## Több hely

A {{ui:Mennyiségek}} fejlécének jobb oldalán lévő nyílgomb elrejti a táblázatot, hogy a lap több helyet kapjon. A táblázat visszahozásához nyomja meg újra.
