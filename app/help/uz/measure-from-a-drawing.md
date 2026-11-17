---
title: Chizmadan oʻlchash
summary: Uzunliklar va maydonlarni chizmaning oʻz chiziqlari, yoylari, polichiziqlari va shtrixlaridan tanlash orqali oling, aniq yoylar va teshiklar bilan, nuqtalar bilan iz chizmasdan.
keywords: chizmani oʻlchash, geometriya, polichiziq, yoy, aylana, shtrixlash, bulge, aniq uzunlik, aniq maydon, tanlash, oyna, iz, CAD dan, chiziqli, maydon
from: fd734246
---

DWG yoki DXF varagʻining varaq panelidagi {{ui:Measure drawing}} chizmaning oʻz obyektlarini belgilar sifatida oladi, shuning uchun ularni bosish bilan iz chizmaysiz. Polichiziqning uzunligi, yoyning uzunligi, aylananing maydoni va teshiklari bilan shtrixlashning maydoni aniq chiqadi: hajmlarni hisoblash har bir belgi uchun ishlatadigan arifmetikadan foydalanadi.

## Obyektlarni chiziqli yoki maydon elementi sifatida olish

1. {{ui:Items}} ostida **chiziqli** yoki **maydon** elementini yarating yoki bosing. Varaqqa masshtab kerak.
2. {{ui:Measure drawing}} ni tanlang.
3. Varaqdagi obyektlarni bosib tanlang yoki atrofidan oyna sudrang: uning ichida toʻliq joylashgan hammasi tanlanadi. {{key:Shift}} tanlanganga oyna qoʻshadi; tanlangan obyektni yana bossangiz, u chiqadi. Panelda jami koʻrsatiladi: "6 ta yoʻl: jami 108'-9 1/8"".
4. Qoʻshish tugmasini tanlang, u sonni va elementni nomlaydi, masalan {{ui:Edge ga 6 ta qoʻshish}} (yoki {{key:Enter}} ni bosing). Har bir obyekt elementning bitta belgisiga aylanadi, bitta ortga qaytarish qadamida. {{key:Esc}} tanlaganingizni tozalaydi.

## Har bir element turi nimani oladi

- **Chiziqli** element chiziqlar, yoylar, polichiziqlar, aylanalar va splaynlarni uzunligi boʻyicha oladi. Yopiq shakl perimetri boʻyicha hisoblanadi. Shtrixlash chetda qoladi: u uzunlikka emas, maydonga ega, va panel buni aytadi.
- **Maydon** elementi yopiq shakllarni oladi: yopiq polichiziqlar, aylanalar, 2D jismlar va teshiklari bilan shtrixlashlar. Ochiq yoʻllar chetda qoladi, va panel buni aytadi.

## Aniq va deyarli aniq

Chiziqlar, yoylar (istalgan bulge), bulge bilan polichiziqlar va aylanalar aniq: uzunliklar va maydonlar yoyning radiusi va burchagidan hisoblanadi, uning rasmidan emas. Ellipslar, splaynlar va chegarasi chekkalardan iborat shtrixlashlar bir gradus yoki undan maydaroq vatarlar bilan oʻlchanadi; bu ellipslar uchun foizning yuzdan birida, qolganlari uchun oʻndan birida aniqlik beradi. Panel tanlaganingizdan qanchasi shu turdagi egri ekanligini koʻrsatadi.

## Qayerdan nimani oladi

- **Model**: model fazosidagi obyektlar. **Layout**: uning oʻz chiziqlari va koʻrinish oynasi (viewport) ichidagi model obyektlari, u orqali masshtablangan. Koʻrinish oynasi chetini kesib oʻtgan obyekt taklif qilinmaydi (u kesilgan holda chop etiladi); ikkita koʻrinish oynasi ikkalasi koʻrsatgan obyekt bir marta olinadi.
- Faqat varaq koʻrsatgan qatlamlar. Bloklar sanaladi, oʻlchanmaydi: qarang: [Chizmadan sanash](topic:count-from-a-drawing). 3D polichiziqlar, toʻrlar, jismlar va mintaqalar taklif qilinmaydi.
