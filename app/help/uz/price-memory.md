---
title: "Oʻtgan ishlaringizdan narxlar xotirasi"
summary: "TakeoffCraft oʻtgan hajmlarda ishlatgan stavkalaringizni faqat shu kompyuterda eslab qoladi, shuning uchun yangi hajm oxirgi safar toʻlagan narxingizdan boshlanishi mumkin. Uni koʻring, ishlating, unuting."
keywords: narxlar xotirasi, narxlar, narxlarni eslab qolish, oxirgi ish, oʻtgan ishlar, odatiy narx, mediana, stavkalar, narxsiz, qayta narxlash, oʻtgan hajmdan oʻrganish, unutish, kutubxona
from: 7279f1a1
---

{{ui:Narxlar}} asboblar panelida (dollar belgisi) ochiladi va TakeoffCraft ishlatgan narxlaringiz haqida eslab qolgan narsalarni koʻrsatadi. Bu oddiy roʻyxat: har bir element nomi uchun oxirgi ishlaringizdagi stavkalar. U shu brauzerda saqlanadi (Studio da — uning oʻz veb-koʻrinishida), narxlar kutubxonasi yonida, hech qachon hajm faylida emas, va hech narsa hech qayerga yuborilmaydi. Bu oʻrgatilgan model emas.

## Nimalar eslab qolinadi

Hajmni saqlaganingizda, narxi bor va ishlatilgan har bir element (uning belgisi bor yoki nolidan katta tipli miqdori bor) nomi va turi boʻyicha eslab qolinadi: material stavkasi, mehnat stavkasi, chiqindi va birlik. Ish — bu olingan reja fayllari, shuning uchun bir xil hajmni qayta saqlash yangi ish qoʻshmasdan, oʻz narxlarini almashtiradi. Har bir nom uchun oxirgi 12 ta ish saqlanadi.

Eski ishlaringizdan boshlash uchun {{ui:Oʻtgan hajmdan oʻrganish…}} ni tanlang va saqlangan hajmni (.json) tanlang. Uning narxlangan, ishlatilgan elementlari xuddi shunday eslab qolinadi.

Nomlar soʻzlari mos kelganda mos keladi, harf registri yoki tinish belgilaridan qat'i nazar (“2x4 Stud, 8 ft” va “2x4 stud 8 FT” bir xil). Boshqa tur elementidagi bir xil soʻzlar (Linear va Count elementlari) bir xil narx emas.

## Yangi hajmda ishlatish

1. Yangi hajmning elementlarini yarating.
2. {{ui:Narxlar}} ni tanlang. {{ui:Shu hajm}} ostida eslab qolingan narxi bor har bir elementni, uning hozirgi qiymatini, oxirgi ish stavkalarini, odatiy stavkalarni (eslab qolingan ishlarning oʻrtasi) va oraliqni koʻrasiz.
3. Bitta elementda {{ui:Oxirgi ishni ishlatish}} yoki {{ui:Odatiyni ishlatish}} ni tanlang, yoki {{ui:Xotiradan narxi yoʻq N ta elementga narx qoʻyish}} ni tanlang — oxirgi ishdan hali narxi yoʻq har bir elementni toʻldirish uchun.

Har bir ishlatish bitta qadam: uni {{key:Ctrl+Z}} bilan bekor qilasiz. Faqat oʻxshash nomga ega element (bir nom ikkinchisi ichida) buni aytadi va tugmalar oʻxshash nomning stavkalarini ishlatadi. Har bir dona uchun eslab qolingan narx hech qachon futiga hisoblanadigan elementga qoʻyilmaydi: dialog birliklar farq qilishini aytadi va uni tegmaydi.

## Koʻring, oʻzgartiring, unuting

{{ui:Hammasi eslab qolingan}} har bir nomni uning stavkalari va ishlar soni bilan koʻrsatadi. Oʻchirish tugmasi (axlat qutisi) bitta nomni unutadi; {{ui:Barcha narxlarni tozalash}} hammasini unutadi. Eslab qolishni toʻxtatish uchun {{ui:Hajmni saqlaganimda narxlarimni eslab qolish}} ni oʻchiring; allaqachon bor narsa siz uni unutguningizcha qoladi. Hajmlaringiz va narxlar kutubxonasi hech qachon tegilmaydi.

## Yordamchingiz bilan

Agar Sozlamalarda yordamchilarga ruxsat bersangiz, ular hajm elementlari uchun eslab qolingan narsalarni oʻqishi (prices_list) va undan elementlarga narx qoʻyishi mumkin (prices_apply, avval oldindan koʻrish mumkin). Bu dialogdagi bilan bir xil roʻyxat.
