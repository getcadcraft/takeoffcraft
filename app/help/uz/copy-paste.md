---
title: Belgilarni nusxalash, qoʻyish va dublikatlash
summary: Belgilarni elementlari bilan nusxalang, bosgan joyingizga yoki boshqa varaqda xuddi shu joyga qoʻying, dublikatlang, kesing, oʻchiring va hammasini tanlang; har biri bir qadam bilan qaytariladi.
keywords: nusxalash, qoʻyish, kesish, dublikat, joyida qoʻyish, bufer, hammasini tanlash, tanlovni bekor qilish, bir nechta belgi, tipik qavat, takrorlash, xuddi shu reja, boshqa varaq, elementni nusxalash, elementni dublikatlash
from: e20e9024
---

Asboblar panelining {{ui:Edit}} guruhida {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} va {{ui:Paste}} bor. Uning {{ui:More}} menyusida qolganlari, har biri oʻz tugmasi bilan: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} va {{ui:Select none}}. Ularning har biri {{key:Mod+Z}} bilan bir qadam qaytariladi.

## Belgilarni tanlash

1. {{ui:Select}} ({{key:V}}) ni tanlang va belgini bosing.
2. Yana belgilar qoʻshish uchun {{key:Shift}} ni ushlab turing va bosing. Tanlangan belgida {{key:Shift}} + bosish uni yana olib tashlaydi.
3. Yoki ochiq varaqdagi barcha belgilarni olish uchun {{key:Mod+A}} ({{ui:Select all}}) ni bosing.

Bir nechta belgi tanlanganda oʻng panelda **Selected marks** koʻrsatiladi: har bir elementdan nechtadan, hamda {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} va {{ui:Delete marks}} tugmalari bilan. Burchak tutqichlari faqat bitta belgi tanlanganda koʻrinadi. {{key:Esc}} ({{ui:Select none}}) tanlovni tozalaydi.

## Bosgan joyingizga nusxalash va qoʻyish

1. Belgilarni tanlang va {{key:Mod+C}} ({{ui:Copy}}) ni bosing. Belgilar elementlari bilan nusxalanadi, shu jumladan har bir elementning yigʻmasi, chiqindisi va narxlari bilan.
2. Ularni kerakli varaqqa oʻting (bu xuddi shu varaq boʻlishi mumkin).
3. {{key:Mod+V}} ({{ui:Paste}}) ni bosing. Koʻrsatkichga shtrixli nusxa biriktiriladi.
4. Qayerga borishini bosing. Nusxalangan belgilarning markazi koʻrsatkichga tushadi.

{{key:Esc}} bekor qiladi va hech narsa qoʻshmaydi. Qoʻyilgan belgilar keyin tanlanadi, shuning uchun ularni {{key:Delete}} yoki {{key:Mod+Z}} bilan yana olib tashlash mumkin.

Xuddi shu hajmda qoʻyilgan belgilar **bir xil elementlarga** tushadi, shuning uchun ularning miqdorlari shu elementlarga qoʻshiladi. Boshqa hajmda (boshqa yorliqda yoki {{ui:New}} dan keyin) bir xil nomli va turdagi element ishlatiladi; aks holda element oʻz yigʻmasi bilan qoʻshiladi. Agar nom boshqa turdagi element tomonidan band boʻlsa, qoʻshilgan element "(name) (copy)" deb ataladi.

Qoʻyilgan belgilar {{ui:Items}} panelining yuqorisida tanlangan hisob maydoniga tushadi (yoki hech biriga). Qarang: [Hisob maydonlari](topic:bid-areas).

## Joyida qoʻyish

{{key:Mod+Shift+V}} ({{ui:Paste in place}}) nusxani ochiq varaqda sahifadagi oʻz oʻrniga aynan koʻchiradi. Tipik qavat uchun foydalaning: 2-qavatni hisoblang, nusxalang, 3-qavatni oching, joyida qoʻying.

Joyida qoʻyish nusxa olingan varaq bilan **bir xil oʻlchamdagi** varaqni talab qiladi. Boshqa oʻlchamdagi varaqda TakeoffCraft buni aytadi va hech narsa qoʻymaydi; buning oʻrniga {{ui:Paste}} dan foydalaning va bosing. Nusxa olingan varaqda nusxa asllarning ustiga tushadi.

## Masshtab mos kelishi kerak

Uzunliklar va maydonlar varaqning masshtabiga bogʻliq. 1/4" = 1'-0" masshtabda 10' oʻlchaydigan chiziq 1/8" = 1'-0" varaqda 20' boʻladi. Shuning uchun TakeoffCraft chiziqlar va maydonlarni faqat ular kelgan varaq bilan **bir xil masshtabli** varaqqa qoʻyadi va buni ochiq aytadi:

- Ochiq varaqda hali masshtab yoʻq: avval unga masshtab bering ([Masshtabni belgilash](topic:set-the-scale)), keyin qoʻying.
- Ochiq varaqda boshqa masshtab bor: xabarda ikkala masshtab ham aytiladi. Bir xil masshtabli varaqqa qoʻying.
- Sanashlar masshtabni talab qilmaydi: nusxalangan sanashlar istalgan joyga qoʻyiladi.

## Dublikatlash

{{key:Mod+D}} ({{ui:Duplicate}}) tanlangan belgilarni nusxalaydi va nusxani darhol koʻrsatkichga qoʻyadi; qayerga borishini bosing. Bosmaguningizcha hech narsa qoʻshilmaydi va {{key:Esc}} hech narsa qoldirmaydi. Dublikatlash {{ui:Paste}} qoʻyadigan narsani oʻzgartirmaydi.

## Kesish va oʻchirish

- {{key:Mod+X}} ({{ui:Cut}}) tanlangan belgilarni nusxalaydi va oʻchiradi. Ularni kerakli joyga qoʻying yoki kesishni qaytaring.
- {{key:Delete}} yoki {{key:Backspace}} ({{ui:Delete}}) tanlangan belgilarni nusxalamasdan oʻchiradi.

## Elementni nusxalash

Element muharriri (**Items** ostida) quyidagilar bilan tugaydi:

- {{ui:Copy item}}: elementni yigʻmasi, chiqindisi va narxlari bilan nusxalaydi, belgilarsiz. Keyin {{ui:Paste}} uning nusxasini shu hajmga yoki boshqasiga qoʻshadi.
- {{ui:Duplicate item}}: nusxani darhol "(name) (copy)" nomi bilan qoʻshadi.

:::tip
Nusxa shu kompyuterda qoladi: u shu yorliqda va brauzer xotirasida saqlanadi, shuning uchun boshqa TakeoffCraft yorligʻi ham uni qoʻyishi mumkin. Hech narsa yuklanmaydi va tizim buferi ishlatilmaydi, shuning uchun belgilarni boshqa dasturlarga qoʻyib boʻlmaydi.
:::

:::note
Nusxa bir vaqtda bitta varaqdan olinadi. Belgilar qanday boʻlsa, shundayligicha qoʻyiladi: nusxani aylantirish yoki aks ettirish hali mumkin emas.
:::
