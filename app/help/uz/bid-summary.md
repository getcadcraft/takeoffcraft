---
title: Taklif xulosasi va tijorat taklifi
summary: Smetaga ish haqi yukini, savdo soligʻini, umumiy xarajatlarni, foydani va kafolatni qoʻshing, kiritilganlar va chiqarilganlarni yozing va yuborish uchun taklif PDF ni yuklab oling.
keywords: taklif, ish haqi yuki, yuk, ish haqi fondi, tijorat taklifi, narx taklifi, umumiy xarajatlar, foyda, belgilash, marja, savdo soligʻi, kafolat, kiritilganlar, chiqarilganlar, shartlar, imzo, mijoz, narx
from: 3208a561
---

Smeta hajmlarni hisoblaganingizni narxlaydi. **Taklif xulosasi** uni narxga aylantiradi: savdo soligʻi, umumiy xarajatlar, foyda va kafolatni qoʻshadi hamda kiritilgan va chiqarilgan shartlaringiz bilan **taklif PDF** yaratadi.

Uni {{ui:Eksport}} › {{ui:Taklif xulosasi va taklif…}} dan oching. Hammasi hajmlarni hisoblash bilan birga saqlanadi va har bir oʻzgarishni bekor qilish mumkin.

## Belgilashlar

Beshtasidan istalganiga foizni kiriting (qolganlarini 0 da qoldiring). Ular shu tartibda hisoblanadi, har biri undan yuqoridagi narsaga asoslanadi:

| Qator | Qanday hisoblanadi |
|---|---|
| Material, Ish haqi | Smetaning jamilari (hajmlarda [muqobillar](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts) boʻlsa, asosiy taklif). |
| Ish haqi yuki | Yuk % × ish haqi: ishchi kuchingizning ish haqiga soliqlar, sugʻurta va imtiyozlar. |
| **Xarajat** | Material + ish haqi + ish haqi yuki. |
| Materialga savdo soligʻi | Soliq % × material. |
| Umumiy xarajatlar | Umumiy xarajatlar % × (xarajat + soliq). |
| Foyda | Foyda % × (xarajat + soliq + umumiy xarajatlar). |
| Kafolat | Kafolat % × yuqoridagi hamma narsa. |
| **Taklif** | Qatorlar yigʻindisi. |

Har bir qator tiyingacha yaxlitlanadi. Ish kitobi xuddi shu qatorlarni Smeta varagining jami ostida jonli formulalar bilan koʻrsatadi. Xulosa yozish davomida yangilanadi: {{key:Enter}} foizni qabul qiladi. Har bir muqobil oʻz xarajatida xuddi shu belgilashlar bilan koʻrsatiladi, shunda buyurtmachi uni olib tashlash haqiqatda nimani oʻzgartirishini koʻradi.

## Tijorat taklifi

Taklif nima deyishi kerakligini toʻldiring:

- **Loyiha** (boʻsh boʻlsa, hajmlarni hisoblash nomi), **Kimga** (mijoz) va **Kimdan** (sizning kompaniyangiz).
- **Kiritilganlar** va **Chiqarilganlar**: har qatorga bittadan; boshidagi chiziqcha yoki belgi ham boʻladi.
- **Shartlar**: erkin matn, masalan "30 kun davomida amal qiladi."
- **Elementlar va miqdorlarni roʻyxatga kiritish**: doira, element-element, miqdorlar bilan va narxlarsiz. Yaxlit summali taklif uchun belgini olib tashlang.

{{ui:Taklif PDF}} ni tanlang. PDF (`<takeoff> - proposal.pdf`) da sana, har bir belgilash va taklif bilan narx bloki, muqobillar, doira, kiritilganlar va chiqarilganlar, shartlar hamda imzo va sana qoʻyiladigan qatorlar boʻladi. Agar ayrim miqdorlarni oʻlchab boʻlmasa (masshtabsiz varaq), bu narx ostida aytiladi.

## Eksportda

Hajmlarni hisoblashda taklif xulosasi paydo boʻlgach, CSV uning bilan tugaydi va ish kitobiga **Taklif xulosasi** varagi qoʻshiladi: har bir qator, uning foizi va summasi bilan. Qarang: [Smetani eksport qilish](topic:export-estimate).
