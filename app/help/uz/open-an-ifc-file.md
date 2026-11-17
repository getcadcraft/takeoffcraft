---
title: "IFC 4.3 faylidan miqdorlarni olish"
summary: "Yoʻl, temir yoʻl, koʻprik yoki yer ishlari IFC 4.3 faylini oching va har bir klass boʻyicha sanoqni hamda fayl bayon qilgan uzunlik, maydon va hajmlarni tipli miqdorlar sifatida oling."
keywords: ifc, ifc4x3, ifc 4.3, yoʻl, temir yoʻl, koʻprik, yoʻl qoplamasi, bordyur, qatlam, yer ishlari, tayanch, infratuzilma, miqdorlar, bim, fuqarolik, tipli miqdorlar
from: 6b08c2c4
---

IFC 4.3 fayli yoʻllar, temir yoʻllar, koʻpriklar, dengiz inshootlari va ularning qismlarini saqlashi mumkin: qoplamalar, qatlamlar, bordyurlar, relslar, yer ishlari, tayanchlar, qoziqlar va boshqalar. TakeoffCraft ularni oʻqiydi va narxlash mumkin boʻlgan tipli miqdorlarga aylantiradi.

## Faylni ochish

1. {{ui:Fayl}} guruhida {{ui:Rejalarni ochish}} ni tanlang yoki {{key:Mod+O}} ni bosing.
2. IFC faylini tanlang (uni PDF lar bilan birga tanlashingiz mumkin) yoki uni TakeoffCraft ustiga tashlang.

Har bir klass va oldindan belgilangan tur uchun bitta tipli miqdor yaratiladi, masalan “Yoʻl qoplamasi (egiluvchan): sanoq”, va fayl ularni bayon qilganda — “uzunlik” m da, “maydon” m² da va “hajm” m³ da. Har bir elementdagi izoh nechta element sanalganini va nechtasi miqdor bermaganini aytadi. Xuddi shu nomli yangiroq faylni ochish bu miqdorlarni yangilaydi, yangilarini qoʻshmaydi.

## Nima qilmaydi

- U fayl olib yuradigan miqdorlar toʻplamlarini (IfcElementQuantity) oʻqiydi. U 3D shakllarni oʻlchamaydi, shuning uchun miqdorlar toʻplami boʻlmagan element sanaladi, lekin uzunlik, maydon yoki hajm qoʻshmaydi.
- Faqat IFC 4.3 ning infratuzilma klasslari oʻqiladi. Bino fayli (devorlar, eshiklar, plitalar) bu yerda miqdorlarga aylantirilmaydi; IFC 4.3 boʻlmagan fayl buni aytadi va hech narsa olib kirmaydi.
- Birliklar faylning oʻz birliklari boʻlib, metrga aylantiriladi.
