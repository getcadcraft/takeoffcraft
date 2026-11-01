---
title: TakeoffCraft ochadigan va saqlaydigan fayllar
summary: PDF fayllar kiradi, hajmlar loyihasi fayli, jadvallar va belgilangan PDF fayllar chiqadi. Har biri nimani saqlashi, qayerga borishi va onlayn, oflayn hamda brauzerlar oʻrtasida nima oʻzgarishi.
keywords: fayllar, formatlar, pdf, takeoff.json, loyiha fayli, xlsx, csv, belgilangan pdf, yuklab olish, saqlash, ochish, oflayn
from: 1bf9be65
---

## Ochiladigan fayllar

| Fayl | Qanday | Izohlar |
|---|---|---|
| PDF (`.pdf`) | {{ui:Rejalarni ochish}}, {{key:Mod+O}} yoki sahifaga tashlash | Bir vaqtda bir nechtasi. Har bir sahifa varaqqa aylanadi. |
| Hajmlar loyihasi (`.takeoff.json`) | {{ui:Hajmlarni ochish}} yoki sahifaga tashlash | Elementlaringiz, masshtablaringiz va belgilaringiz. Uni PDF fayllari bilan birga tashlashingiz mumkin. |

Sahifaga tashlangan boshqa fayllar oʻtkazib yuboriladi, holat panelida esa ularning nomi koʻrsatiladi.

- **Parol bilan himoyalangan PDF fayllar** ochilmaydi: "(name) parol bilan himoyalangan. Himoyasiz nusxani oching."
- **Bir xil PDF ikki marta** bir marta ochiladi: "(name) allaqachon ochiq." TakeoffCraft fayllarni nomi bilan emas, mazmuni boʻyicha taniydi.
- **Skanerlangan PDF fayllar** ham boshqalari kabi ochiladi va oʻlchanadi. TakeoffCraft PDF dagi matnga muhtoj emas.
- **Katta chizmalar toʻplami**: har bir PDF ochilganda toʻliq oʻqiladi (barmoq izini olish uchun), shuning uchun juda katta fayl bir oz vaqt oladi. Kichik rasmlar siz pastga aylantirganingizda bittadan chiziladi.

## Saqlanadigan fayllar

Har bir saqlash yuklab olish hisoblanadi. PDF fayllaringizga hech narsa qayta yozilmaydi.

| Tanlaysiz | Olasiz | Ichida nima bor |
|---|---|---|
| {{ui:Hajmlarni saqlash}} | `(name).takeoff.json` | Elementlar, yigʻmalar, stavkalar, varaq masshtablari va har bir belgi, har bir PDF ga uning mazmuni boʻyicha bogʻlangan. PDF sahifalari yoʻq. |
| {{ui:XLSX}} | `(name).xlsx` | Toʻrtta ish varagʻi: Smeta (jonli formulalar bilan), Varaq boʻyicha, Belgilar, Masshtablar. |
| {{ui:CSV}} | `(name).csv` | Smeta oddiy qiymatlar sifatida, har bir element va tarkibiy qism uchun bir qator. |
| {{ui:Belgilangan PDF}} | `(PDF name) (takeoff).pdf` | Belgilari bor har bir ochiq PDF nusxasi, sahifalarida hajm chizilgan va izoh jadvali bor. Har bir PDF uchun alohida fayl. |

Nom bu hajmda birinchi ochgan PDF faylingizdan olinadi. Hozircha nomni oʻzgartirish oynasi yoʻq: boshqa nom xohlasangiz, yuklab olingan faylni qayta nomlang.

Qarang: [Smeta va belgilangan PDF ni eksport qilish](topic:export-estimate) va [Eksport ustunlari](topic:export-columns).

## Yuklab olishlar qayerga boradi

Brauzeringiz ularni har bir yuklab olishni saqlaydigan joyga saqlaydi, odatda Downloads papkasiga. Uni {{pick:mac=Finder|windows=File Explorer|linux=fayl menejeringiz}} ichidan toping. Agar brauzeringiz har bir faylni qayerga saqlashni soʻraydigan qilib sozlangan boʻlsa, u soʻraydi.

:::chromium
Bir nechta belgilangan PDF bilan {{ui:Belgilangan PDF}} bir vaqtda bir nechta fayl yuklab oladi. Chrome va Edge bu sayt bir nechta fayl yuklab olishiga ruxsat berishini bir marta soʻrashi mumkin. Ruxsat berish ni tanlang.
:::

:::safari
Agar Safari Settings ichidagi General boʻlimida yuklab olish joyini oʻzgartirmagan boʻlsangiz, Safari Downloads papkasiga saqlaydi.
:::

## Nega loyiha fayli va PDF fayllar alohida

`.takeoff.json` fayli faqat sizning hajmingizni saqlaydi. U oʻz PDF larini mazmuni boʻyicha (har bir faylning barmoq izi orqali) qayta topadi, shuning uchun:

- PDF ning nomini oʻzgartirish yoki uni boshqa joyga koʻchirish muhim emas.
- Oʻzgartirilgan yoki boshqa dastur tomonidan qayta saqlangan PDF boshqa fayl hisoblanadi, nomi bir xil boʻlsa ham.
- Ochiq boʻlmagan PDF lardagi belgilar ham jami hisobga kiradi.

Qarang: [Hajmni saqlash va qayta ochish](topic:save-and-reopen).

## Onlayn va oflayn

PDF fayllaringiz va hajmlaringiz onlayn yoki oflaynda hech qachon kompyuteringizdan chiqmaydi. Aloqa faqat TakeoffCraft ning oʻzini yuklash uchun kerak.

Aloqasiz ishlash uchun avval ilovani saqlang, onlayn boʻlgan paytda:

1. Tepadagi ilova panelida {{ui:Oflayn uchun saqlash}} ni tanlang.
   Tugma saqlash davomida "Saqlanmoqda: 12 / 40" deb hisoblaydi.
2. {{ui:Oflayn tayyor}} yozuvi chiqishini kuting.

TakeoffCraft ni saqlash ilovani, shu yordamni, {{ui:Belgilangan PDF}} uchun ishlatiladigan PDF yozuvchisini va avtosanash ishchisini brauzeringizda taxminan 6 MB joyda saqlab qoʻyadi. {{ui:Oflayn tayyor}} yozuvi chiqqach, hamma narsa oflaynda ishlaydi: PDF larni ochish, oʻlchash, {{ui:Avtosanash}}, {{ui:Hajmlarni saqlash}}, {{ui:XLSX}}, {{ui:CSV}} va {{ui:Belgilangan PDF}}.

| Tugmada yozilgani | Maʼnosi |
|---|---|
| {{ui:Oflayn uchun saqlash}} | Bu brauzerda hali saqlanmagan. Saqlash uchun tanlang. |
| Saqlanmoqda: (n) / (m) | Hozir saqlanmoqda. |
| {{ui:Oflayn tayyor}} | Saqlangan. {{ui:Qayta saqlash (eng yangi versiyani olish)}} yoki {{ui:Oflayn nusxani oʻchirish}} uchun tanlang. |
| {{ui:Saqlab boʻlmadi}} | Baʼzi fayllar yuklab olinmadi. Aloqani tekshirib, qayta tanlang. |
| {{ui:Oflayn rejim mavjud emas}} | Bu brauzer oynasi oflayn nusxani saqlay olmaydi (shaxsiy oynalar va baʼzi boshqariladigan kompyuterlar uni bloklaydi). |

Batafsil, shuningdek har bir brauzerda saqlangan nusxa qancha saqlanishi haqida: [Oflayn ishlash](common:offline).

:::offline
Siz oflaynsiz. Agar ilova panelida {{ui:Oflayn tayyor}} koʻrsatilsa, hamma narsa ishlaydi. Aks holda, bu yorliqda TakeoffCraft hali yuklamagan qismlar (ya'ni {{ui:Belgilangan PDF}} uchun PDF yozuvchisi, avtosanash ishchisi) hozir yuklanmaydi va {{ui:Belgilangan PDF}} "Belgilangan PDF yozib boʻlmadi" xabari bilan toʻxtaydi. Hajmingiz har holda xavfsiz: {{ui:Hajmlarni saqlash}}, {{ui:XLSX}} va {{ui:CSV}} aloqani talab qilmaydi. Onlayn boʻlguncha yorliqni qayta yuklamang.
:::

:::online
Siz onlaynsiz. Obyektga tashrif yoki parvozdan oldin {{ui:Oflayn uchun saqlash}} ni tanlang va {{ui:Oflayn tayyor}} yozuvini kuting.
:::

## Elektron jadvallar

XLSX jonli formulalarni saqlaydi, shuning uchun elektron jadval dasturi faylni ochganda smetani qayta hisoblaydi va u yerda stavka yoki chiqindini oʻzgartirsangiz, toʻgʻri qoladi. Kitob LibreOffice Calc da tekshirilgan, u har bir jami summani bir tiyingacha qayta hisoblagan. Hali Excel da ochilmagan.

CSV bayt tartibi belgisi (byte order mark) bilan oddiy qiymatlardan iborat, shuning uchun elektron jadval dasturlari m² kabi belgilarni toʻgʻri oʻqiydi.

## Desktop va bulut

:::desktop
0.5 versiyasidan boshlab ish stoli ilovasi CadCraft Studio boʻldi: TakeoffCraft va boshqa yetti ilova bitta oʻrnatishda. TakeoffCraft uchun alohida oʻrnatuvchi yoʻq.
:::

Bulutga saqlash hali mavjud emas. `.takeoff.json` fayllaringizni ish PDF lari bilan birga saqlang va ularni boshqa fayllar kabi zaxiralang. Qarang: [Fayllaringiz qayerga boradi](common:your-files).
