---
title: Tipikus csoportok
summary: Egy tipikus egységet, helyiséget vagy szintet egyszer mérjen fel, és annyiszor számolja, ahányszor ismétlődik; a darabszámot később módosíthatja, és láthatja, mely jelek tipikusak.
keywords: tipikus, tipikus csoport, ismétlés, ismétlésszám, szorzás, alkalom, egység, szállodai szoba, lakás, tipikus szint, x24, példány
from: 42c3a372
---

Egy épületben gyakran ismétlődnek dolgok: 24 azonos szállodai szoba, 6 tipikus szint, 40 parkolóhely azonos festéssel. A **tipikus csoport** lehetővé teszi, hogy az egyiket egyszer mérje fel, és annyiszor számolja, ahányszor ismétlődik, a másolatok lerajzolása nélkül.

## Tipikus csoport létrehozása

1. Mérjen fel egy egységet: a falait, a padlóját, a konnektorait, bármilyen tételeit.
2. Jelölje ki a jeleit a {{ui:Select}} eszközzel: kattintson egyre, majd {{key:Shift}} + kattintás a többire ([A jelek kijelölése](topic:copy-paste#select-the-marks)).
3. A **Kijelölt jel** alatt nyissa meg a {{ui:Typical}} lehetőséget, és válassza a {{ui:New typical group…}} lehetőséget.
4. Adjon nevet (`Unit A`) és azt, hányszor ismétlődik (`24`), majd válassza a {{ui:Make group}} lehetőséget.

Ezeknek a jeleknek minden mennyisége 24-szer számít: egy 10 ft-es fal 240 ft-et ad, egy 80 SF-es padló 1 920 SF-et, két konnektor 48-at. A költségek ezt követik, az összetevő-képletek pedig az ismételt összegeket látják (az `N` is 24-szer számolja minden szakaszt).

A lapon szaggatott keret veszi körül a csoport jeleit a nevével és darabszámával, például **Unit A ×24**.

## Későbbi módosítás

A csoportok a jobb oldali panelen, a **Tipikus csoportok** alatt láthatók:

- A **×** utáni szám módosításával állítható, hányszor számít (1 és 10 000 között). Minden mennyiség frissül.
- A nevét a névmezőben módosíthatja.
- A doboz ikon kijelöli a jeleit (és megmutatja a lapjukat).
- A kuka törli a csoportot. A jelei megmaradnak, egyszer számítva.

Jelek csoporthoz adásához vagy eltávolításához jelölje ki őket, majd válassza ki a csoportot (vagy a {{ui:Not typical (×1)}} lehetőséget) a {{ui:Typical}} alatt.

## Jó tudni

- Egy csoport jelei több lapon is lehetnek, és bármilyen tételből származhatnak. Minden jel legfeljebb egy csoportban van.
- A beillesztett másolatok nincsenek a csoportban: egy tipikus egység beillesztett másolata egyébként újra 24-szer számítana. A csoportot az „ugyanaz N-szer” esetre használja, a másolást és beillesztést pedig a saját rajzolt másolatokra.
- A jeleket egyszer rajzolják meg, így a 3D-nézet és a jelölt PDF egy egységet mutat; a mennyiségek, az exportok és a lapankénti táblázat ×N-ként számolják. Az Excel-export **Jelek** lapja megmondja, mely jelek tipikusak és hányszor számítanak.
- Ajánlati területekkel a csoport jelei ×N-ként számítanak a saját ajánlati területükön.
