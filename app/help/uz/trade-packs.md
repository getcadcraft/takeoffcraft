---
title: Soha paketlari
summary: Soha uchun bepul yigʻmalarni narxlar kutubxonangizga qoʻshing, ularni bir qadamda olib tashlang va oʻz kutubxonangizni paket sifatida ulashing.
keywords: soha paketi, paket, yigʻmalar, shablonlar, boshlangʻich elementlar, elektr, gipsokarton, karkas, boʻyash, beton, pol qoplamasi, gʻishtkorlik, tom qoplamasi, tashqi qoplama, duradgorlik, santexnika, hvac, izolyatsiya, landshaft, dekking, bosh pudratchi, csi, masterformat, cc0, qoʻshish, olib tashlash, ulashish
from: d3c036be
---

**Soha paketi** bu bitta soha uchun tayyor elementlar toʻplami: har biri oʻz birligi, balandligi yoki chuqurligi, chiqindisi va **yigʻmasi** bilan, ya'ni oʻlchangan chiziq, maydon yoki sanoqni materialga aylantiradigan qismlar va formulalar bilan. Masalan, gipsokarton devor oʻz yoʻnaltiruvchi profilini, karkas profillarini, listlarni, vintlarni, lentani va shpaklyovkani olib keladi.

Paketlar [narxlar kutubxonasi](topic:price-library) ga qoʻshiladi, u yerdan esa elementlarini istalgan hajmga qoʻshishingiz mumkin.

## Paket qoʻshish

1. {{ui:Elementlar}} panelining yuqorisidagi {{ui:Kutubxona}} ni oching, soʻng {{ui:Soha paketlari…}} ni oching.
2. {{ui:Birliklar}} ni tanlang: imperial (LF, SF), metrik (m, m²) yoki ikkalasi. Har bir yigʻma ikkala tizimda ham keladi.
3. Paket yonidagi {{ui:Qoʻshish}} ni tanlang.

Paket elementlari kutubxonada paydo boʻladi, paket nomi bilan belgilangan. Ulardan foydalanish uchun ularni kutubxonada belgilang va {{ui:Hajmga qoʻshish}} ni tanlang.

:::note
**Paket narx olib kelmaydi.** Uning elementlari kutubxonada "stavkani belgilang" deb koʻrinadi. Stavkalar sizniki: ularni kutubxonada yoki element tahrirlovchisida kiriting, yoki narxlar roʻyxatingizni CSV sifatida import qilib, {{ui:Narxlarni yangilash}} ni ishlating.
:::

Agar kutubxonangizda bir xil nom va turdagi element allaqachon boʻlsa, paket sizniki oʻz holicha qoldiradi. Paketni qayta qoʻshish uning oʻz elementlarini yangi versiya bilan almashtiradi.

## Paketni olib tashlash

{{ui:Soha paketlari…}} da qoʻshgan paketingiz yonidagi {{ui:Olib tashlash}} ni tanlang, soʻng tasdiqlash uchun yana bir marta. Undan kelgan har bir element bir qadamda kutubxonadan chiqadi. Siz hajmga allaqachon qoʻshgan elementlar oʻsha hajmda qoladi.

## Paket tarkibi

Har bir yigʻma qaysi manbalardan yozilganini koʻrish uchun paket ostida {{ui:Manbalar va tafsilotlar}} ni tanlang: qurilish normalari, standartlar va soha birlashmalarining oʻrnatish qoʻllanmalari. Kutubxonada elementning manbalari va taxminlarini, masalan karkas profillari oraligʻi yoki boʻyoqning sarflanish meʼyorini oʻqish uchun element ustiga kursorni olib boring. Ularni ishingiz va mahsulotlaringiz texnik maʼlumotlari bilan solishtiring va farq qilgan joyda formulalarni oʻzgartiring (qarang: [Yigʻmalar va formulalar](topic:assemblies)).

Har bir paket, amaliy smetachilar uni koʻrib chiqquncha **Boshlangʻich: hali smetachi tomonidan koʻrib chiqilmagan** deb belgilanadi.

Har bir elementda, masalan `09 21 16`, CSI MasterFormat raqami ham bor.

## Kutubxonangizni paket sifatida ulashish

Kutubxonadagi {{ui:Paket sifatida eksport…}} uni paket fayli (`.ccpack.json`) sifatida saqlaydi, uni istalgan kishi {{ui:Paket faylini ochish…}} bilan qoʻshishi mumkin. Odatiy holda, qoʻshgan paketlaringizdan kelgan elementlar chiqarib tashlanadi va unda stavkalar boʻlmaydi. Stavkalaringizni ham yuborish uchun {{ui:Stavkalarimni namunaviy stavka sifatida qoʻshish}} ni belgilang: ular siz bergan hudud va sana bilan belgilanib chiqadi, paketni qoʻshgan kishi ulardan foydalanish-foydalanmaslikni tanlaydi.

Paket fayllari oddiy maʼlumotlar, hech qachon dasturlar emas. TakeoffCraft ulardan foydalanishdan oldin har bir qismini tekshiradi va oʻqiy olmaydigan narsalarni chiqarib tashlaydi.
