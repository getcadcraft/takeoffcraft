---
title: Hajmni saqlash va qayta ochish
summary: Hajmni .takeoff.json loyiha fayli sifatida saqlang, uni oʻsha PDF lar bilan qayta oching va PDF yoʻqolganda yoki oʻzgarganda nima boʻlishini bilib oling.
keywords: hajm, PDF ichida, joylash, biriktirma, saqlash, ochish, qayta ochish, loyiha, takeoff.json, davom ettirish, qayta koʻrib chiqilgan PDF, oʻzgargan PDF, yoʻqolgan PDF, zaxira, avtosaqlash, tiklash, nosozlik
from: bd5080a6
---

Hajm kichik loyiha fayli sifatida saqlanadi: `(name).takeoff.json`. Unda elementlaringiz, yigʻmalaringiz, stavkalaringiz, har bir varaqning masshtabi va har bir belgi saqlanadi. PDF fayllar **saqlanmaydi**; ular mazmuni boʻyicha qayta topiladi.

## Saqlash

1. {{ui:Fayl}} guruhidagi {{ui:Hajmlarni saqlash}} ni tanlang yoki {{key:Mod+S}} ni bosing.
   Brauzeringiz `(name).takeoff.json` ni yuklab oladi. Holat satrida yoziladi: "Saqlandi: (name).takeoff.json. U oʻsha PDF lar ustida qayta ochiladi (ular mazmuni boʻyicha moslashtiriladi)."
2. Faylni ish PDF lari yoniga qoʻying, ikkalasi birga tursin.

Har bir saqlash yangi fayl yuklaydi. Brauzer ikkinchisini `(name) (1).takeoff.json` deb nomlashi mumkin; eng yangisini saqlang.

Nom hajmda ochilgan birinchi PDF dan olinadi.

:::note
{{ui:Hajmlarni saqlash}} hajmni fayl sifatida saqlashning yagona yoʻli boʻlib qolmoqda. Ishlayotganingizda TakeoffCraft shu brauzerda tiklash nusxasini ham saqlaydi (quyida qarang), bulutli saqlash hozircha mavjud emas. Saqlanmagan oʻzgarishlar bilan oynani yopmoqchi boʻlsangiz, brauzer chiqib ketishni soʻraydi.
:::

## Hajmni PDF ichida saqlash

{{ui:Eksport}} › {{ui:Hajmlar ichiga joylangan PDF}} har bir ochiq PDF nusxasini yuklaydi, nomi `Plans (with takeoff).pdf` kabi boʻladi; u butun hajmni biriktirma sifatida saqlaydi: elementlar, belgilar, masshtablar, taklif maydonlari — `.takeoff.json` da bor hamma narsa. Sahifalari oʻzgarmaydi, shuning uchun u asl nusxa kabi koʻrinadi va chop etiladi, boshqa PDF oʻquvchilar esa hajmni biriktirmalari ichida koʻrsatadi.

Bu PDF ni TakeoffCraft da oching (PDF larni qanday ochsangiz ham) — u **Bu PDF ichida hajm bor** deb soʻraydi: hajmni qaytarish uchun {{ui:Hajmni ochish}} ni, faqat chizmani ochish uchun {{ui:Faqat PDF}} ni tanlang. Nusxa uni yaratilgan PDF ni ifodalaydi, shuning uchun ikkalasidan saqlangan `.takeoff.json` ikkalasida ham ochiladi.

Bir nechta PDF bilan har bir nusxa butun hajmni olib yuradi; ularni birga oching. Nusxadan qayta saqlash ichidagi hajmni almashtiradi, ikkinchisini qoʻshmaydi. Saqlanadigan asosiy fayl hali ham `.takeoff.json`: u kichik va avtosaqlash hamda ish stoli ilovasi uni yozadi.

## Agar yorliq yoki brauzer toʻxtasa

Har bir oʻzgarishdan bir necha soniya keyin TakeoffCraft hajmning nusxasini shu brauzerning oʻz xotirasida saqlaydi — agar PDF lari 64 MB yoki undan kam boʻlsa, ular bilan birga. Hech narsa yuklanmaydi. Hajmni saqlasangiz, yangisini boshlasangiz yoki boshqa loyihani ochsangiz, nusxa oʻchadi.

Agar yorliq ishdan chiqsa, brauzer yoki kompyuter toʻxtasa yoki saqlanmagan oʻzgarishlar bilan chiqsangiz, TakeoffCraft keyingi ochilishda **Ishingizni tiklaysizmi?** deb soʻraydi va hajmni nomi bilan koʻrsatadi. Qaytarish uchun **Tiklash** ni bosing: elementlar, belgilar va masshtablar qaytadi, PDF lar esa saqlangan boʻlsa qayta ochiladi. Holat satrida yoziladi: "Tiklandi: (name). U hali faylga saqlanmagan: Hajmlarni saqlash uni saqlab qoladi." Agar PDF lar juda katta boʻlib saqlanmagan boʻlsa, ularni qayta oching; belgilar oʻz varaqlarida paydo boʻladi. Qoʻshimcha: [Ishingizni tiklash](common:recover).

## Qayta ochish

1. TakeoffCraft ni oching.
2. `.takeoff.json` faylini va uning PDF larini birga sahifaga tashlang. Yoki PDF lar uchun {{ui:Rejalarni ochish}} ni, loyiha uchun {{ui:Hajmlarni ochish}} ni tanlang — ikkalasining tartibi ixtiyoriy.
   Holat satrida yoziladi: "Ochildi (name): 12 ta element, 340 ta belgi." Har bir varaq oʻz masshtabini qaytarib oladi va belgilar varaqlarda paydo boʻladi.

PDF larning tartibi ahamiyatga ega emas, ularning fayl nomlari yoki papkalari ham. TakeoffCraft har bir PDF ni uning mazmuni barmoq izi boʻyicha taniydi.

Agar joriy hajmda saqlanmagan oʻzgarishlar boʻlsa va siz loyihani ochsangiz, TakeoffCraft avval soʻraydi: **Bekor qilish**, **Oʻzgarishlarni tashlab yuborish** yoki **Avval hajmni saqlash**. Loyihani ochish joriy elementlar va belgilarni almashtiradi; allaqachon ochiq PDF lar ochiq qoladi.

## Agar PDF yoʻq boʻlsa

Agar loyihani hamma PDF lari boʻlmasdan ochsangiz, holat satriga qoʻshiladi: "Uning belgilarini koʻrish uchun PDF larini oching (Varaqlar boʻyicha roʻyxatda)." Varaqlar roʻyxati ostida izoh shunday deydi:

"Bu hajm ochiq boʻlmagan PDF larni ham qamrab oladi. Ularning miqdorlari hisoblanadi; belgilarini koʻrish va tahrirlash uchun ularni oching:"

Keyin fayl nomlari va hajmlari keladi. Ularning belgilari hamma jamida va eksportda baribir hisobga olinadi, oʻlchangan masshtablar bilan. Belgilarni koʻrish va tahrirlash uchun bu PDF larni oching.

## Agar PDF oʻzgargan boʻlsa

Qayta koʻrib chiqilgan yoki boshqa dastur tomonidan qayta saqlangan PDF mazmuni boshqacha, shuning uchun TakeoffCraft uchun u **boshqa fayl** — nomi bir xil boʻlsa ham. Varaqlar roʻyxati ostidagi izohda bunday fayl shunday deyiladi: "bu nomdagi fayl ochiq, lekin mazmuni farq qiladi".

- Belgilar eski versiyaga biriktirilgan boʻlib qoladi. Ular eski oʻrinlari va masshtablari boʻyicha hisoblanishda davom etadi.
- Qayta koʻrib chiqilgan PDF yangi varaqlar sifatida masshtabsiz va belgilarsiz ochiladi.

Hajmni revizyonga koʻchirish uchun ikkala PDF ni oching va yangi varaqda {{ui:Solishtirish}} dan foydalaning: [Qayta koʻrib chiqilgan varaqni solishtirish va hajmni koʻchirish](topic:compare-revisions).

## Zarar koʻrgan yoki begona fayl

TakeoffCraft har bir loyiha faylini ishlatishdan oldin tekshiradi. Koʻrishingiz mumkin boʻlgan xabarlar:

- "(file) TakeoffCraft loyihasi emas (u yaroqli JSON emas)."
- "Bu TakeoffCraft loyiha fayli emas."
- "Bu loyiha yangiroq TakeoffCraft bilan saqlangan. Uni oʻsha yerda oching."
- "3 ta belgi shikastlangan va chiqarib tashlandi." (qolgani ochiladi)

## Ortga qaytarish tarixi

Ortga qaytarish tarixi loyiha ochilganda yangidan boshlanadi. Saqlash uni tozalamaydi.
