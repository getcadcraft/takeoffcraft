---
title: Taʼminotchi zaxirasi va yetkazib berish muddatlarini tekshirish
summary: Taʼminotchi zaxira roʻyxatini (CSV yoki elektron jadval) qoʻshing, va TakeoffCraft hajm talab qilgan narsani, chiqindi bilan birga, unga qarshi tekshiradi: zaxirada yetarlimi va kutish qancha. Yetishmovchiliklar va uzoq kutishlar Muammolar panelida koʻrinadi.
keywords: taʼminotchi, zaxira, zaxirada bor, yetkazib berish muddati, mavjudlik, yetishmovchilik, kechiktirilgan buyurtma, buyurtma roʻyxati, csv, sku, sotuvchi, materiallar, taʼminot, muammolar
from: f11160fb
---

{{ui:Taʼminot}} tugmasi (yuk mashinasi belgisi) hajm nimani talab qilishini taʼminotchining zaxira roʻyxati bilan tekshiradi. Kerakli taʼminotchi satrlari hajmning oʻz faylida saqlanadi. Hech narsa hech joyga yuborilmaydi va hech kim taʼminotchidan soʻramaydi: faylni siz olib kelasiz.

## Fayl

Sarlavha satri bor CSV fayl. Unda nom yoki SKU ustuni va zaxira yoki yetkazib berish muddati ustuni boʻlishi kerak. Quyidagi sarlavhalar tan olinadi (tartibi va bosh-kichik harflari ahamiyatsiz): Item, Name, Description yoki Product; SKU, Part yoki Item #; In stock, On hand, Available yoki Quantity; Lead time yoki Delivery days; Unit yoki UOM; Price yoki Cost; Supplier yoki Vendor.

- Zaxira son boʻlishi mumkin (1,200), "In stock" yoki "Out of stock".
- Yetkazib berish muddati "5 days", "2 weeks", "2-3 weeks" (uzunroq qiymat olinadi), "3 months", "same day" yoki "backorder" boʻlishi mumkin. Oddiy son sarlavhadagi birlikda boʻladi: sarlavhada hafta yoki oy aytilmagan boʻlsa, kun.
- Excel fayllari oʻqilmaydi: avval varaqni CSV sifatida saqlang.

## Hajmni tekshirish

1. {{ui:Taʼminot}} ni tanlang, soʻng {{ui:Taʼminotchi faylini qoʻshish…}} ni tanlab, CSV faylni koʻrsating. Bir nechtasini qoʻshishingiz mumkin: jami beshtagacha fayl, hammasi boʻyicha 2,000 tagacha satr saqlanadi, avvalo elementlaringizga mos keladiganlari.
2. Miqdori bor har bir element, ikkinchi shart va yigʻma qismi nom boʻyicha yoki nomidagi SKU boʻyicha satrga moslashtiriladi. Aniq nom boʻlmasa, oʻxshash nom (biri ikkinchisi ichida) ishlatiladi va bu haqda aytiladi.
3. {{ui:Hajm nimani talab qiladi}} ostida kamchiliklari bor elementlar birinchi turadi: "120 EA yetishmaydi", "Yetkazib berish 21 kun", "Kechiktirilgan buyurtmada", "Birlik farq qiladi", "Zaxira raqami yoʻq" yoki "Zaxirada bor". Talabga chiqindi kiradi. Smetadagidan farq qiladigan taʼminotchi birligi (futga qarshi tonna) haqida xabar beriladi va hech qachon solishtirilmaydi. Har bir satrda {{ui:Elementni tanlash}} bor, u elementga oʻtkazadi.
4. {{ui:Eng uzoq kutish (kunlarda)}} ni oʻrnating (standart: 14). Zaxirada boʻlmagan va undan uzoqroq kutadigan element belgilanadi, xulosada esa muhim boʻlgan eng uzoq kutish nomlanadi.
5. {{ui:Buyurtma roʻyxati (CSV)}} yetishmayotgan elementlarni, yetishmayotgan miqdori, taʼminotchisi va yetkazib berish muddati bilan yuklab oladi. {{ui:Tekshiruvdan chiqarish}} talabni tekshiruvdan chiqaradi (bu ortga qaytarish qadami).

## Elektron jadval fayllari va narxlar kutubxonasi

Taʼminotchi roʻyxati CSV bilan bir qatorda Excel ish kitobi (.xlsx) boʻlishi ham mumkin: birinchi varaq oʻqiladi, ustun nomlari xuddi shunday. Formulalar hech qachon hisoblanmaydi; oʻqiladigan narsa faylda saqlangan qiymat.

Narxlari bor fayl qoʻshilgach, dialogdagi {{ui:Narxlarni kutubxonaga kiritish}} fayl narxlagan har bir [Kutubxona](topic:price-library) yozuvining material narxini oʻrnatadi: nomi bir xil va birligi bir xil (yoki aytilmagan) boʻlsa. Mehnat, chiqindi, balandlik va yigʻmalar oʻz holicha qoladi, yozuv izohida esa narx qaysi fayldan olinganligi yoziladi. Metrdagi yozuv futdagi roʻyxat boʻyicha narxlanmaydi, mos nomi boʻlmagan yozuv esa tegilmaydi; holat satrida birlik sababli oʻtkazib yuborilganlar soni koʻrsatiladi. Yangi narxlarni shu hajmga olib kirish uchun Kutubxonadan qayta narxlang.

## Muammolar panelida

Yetishmovchilik ogohlantirish, uzoq kutish esa izoh boʻlib, umumiy Muammolar panelida ("Taʼminotchi zaxirasi") turadi, shuning uchun ular boshqa barcha tekshiruvlar bilan birga boʻladi. Sababini koʻrsatib uni qabul qilishingiz mumkin, va qabul hajmda saqlanadi.

## Yordamchingiz bilan

Agar Sozlamalar da yordamchilarga ruxsat bersangiz, ular tekshiruvni oʻqiy oladi (supply_check). Taʼminotchi faylini qoʻshish esa sizning ishingiz.

## Bilib oling

Zaxira raqamlari faqat qoʻshgan faylingiz kabi yangi boʻladi. Yangilash uchun faylni qayta qoʻshing: bir xil nomli fayl oldingisining oʻrnini bosadi.
