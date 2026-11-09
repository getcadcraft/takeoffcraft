---
title: 0.8 va 0.8.1 dagi yangiliklar
summary: Simvol legendasining butun toʻplamini barcha ochiq varaqlarda bir yurishda sanang, narxlarni oʻtgan ishlaringiz stavkalaridan belgilang, hajmni taʼminotchining zaxirasi va yetkazib berish muddatlari bilan tekshiring, shuningdek uchalasi uchun yangi yordamchi vositalar, umumiy 0.8 oʻzgarishlari va DWG fayllari uchun 0.8.1 tuzatishi.
keywords: yangiliklar, yangilanish, reliz eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, hammasini sanash, legenda, simvol legendasi, butun toʻplam, narx xotirasi, oʻtgan ishlar, oxirgi ish, odatiy narx, taʼminotchi, zaxira, yetkazib berish muddati, buyurtma kutilmoqda, buyurtma roʻyxati, yetishmovchilik, muammolar paneli, yordamchi, tillar, kiritish qurilmalari, asboblar paneli qatorlari, dwg
from: a04adef6
---

Bu TakeoffCraft 0.7 bilan solishtirganda 0.8 (2026-11-01 da chiqarilgan) va 0.8.1 (2026-11-02) versiyalarida oʻzgargan narsalar. Endi simvol legendasini butun toʻplam boʻyicha bir vaqtda sanash mumkin, yangi hajm oʻtgan ishlaringizning narxlaridan boshlanishi mumkin va hajmni taʼminotchining zaxirasi bilan tekshirish mumkin. 0.8.1 esa tuzatish relizi.

## Yangi

### Toʻplamdagi hammasini sanash

- **Legendani bir marta belgilang.** Asboblar panelidagi {{ui:Count everything}} simvol legendasini oʻqiydi: simvollar va ularning yonidagi nomlar atrofiga ramka torting. Har bir simvol rasmi va nomi bilan roʻyxatga olinadi, nom esa element nomiga aylanadi. Kerak boʻlmaganlar belgisini olib tashlang, soʻngra {{ui:Count on N sheets}} ni tanlang. Qidirilayotgan varaqni bar koʻrsatadi, {{ui:Cancel}} jarayonni toʻxtatadi va sahifa ishlatish uchun ochiq qoladi.
- **Barcha varaqlar bir yurishda.** Har bir simvol ochiq barcha varaqlarda sanaladi. Boshqa masshtabda chizilgan varaq shu masshtabda qidiriladi, simvollar esa istalgan toʻgʻri burchakda aylantirilgan boʻlsa ham topiladi. Legendaning oʻz simvollari oʻz varagʻida sanalmaydi.
- **Qoʻshishdan oldin koʻrib chiqing.** Har bir jami qiymat uchun varaq boʻyicha havola bor (`"E-103: 4"`), u shu varaqqa olib boradi. Topilmadagi ramkani bosib uni chiqarib tashlang, yana bosib qaytaring. Moslik darajasi (50% dan 100% gacha) faqat topilganlarni filtrlaydi; hech narsa qayta qidirilmaydi.
- **Bitta bekor qilish qadami.** {{ui:Add N marks}} har bir simvol uchun sanash elementi yaratadi va har bir topilmaga belgi qoʻyadi. Nomi allaqachon sizning sanash elementingiz boʻlgan simvol uchun oʻsha element qayta ishlatiladi. {{key:Ctrl+Z}} barcha elementlar va belgilarni qaytaradi. Qabul qilganlaringiz {{ui:Learned}} boʻlimiga ham qoʻshiladi.
- **Istalgan burchakdagi simvollar.** Sanashdan oldin {{ui:Symbols at any angle}} ni belgilang, shunda toʻgʻri boʻlmagan burchakka aylantirilgan simvollar ham topiladi. Qidiruv har bir simvolni har 15 gradusda aylantiradi, dumaloq boʻlmagan simvol esa olti barobargacha koʻp vaqt olishi mumkin.
- **Bu nima.** Faqat oʻz varaqlaringizdagi oddiy simvollarni moslashtirish, oʻqitilgan model yoʻq va hech narsa kompyuteringizdan chiqmaydi. Oʻylab topilgan 200 varaqli toʻplamda tezkor desktopda Chrome orqali boshidan oxirigacha 9.4 soniya oldi; haqiqiy chizmalar toʻplamlari sekinroq boʻladi. Qarang: [Toʻplamdagi hammasini sanash](topic:count-everything).

### Oʻz ishlaringizdan narx xotirasi

- **TakeoffCraft stavkalaringizni eslab qoladi.** Hajmni saqlaganingizda, ishlatilgan har bir narxlangan element nomi va turi boʻyicha eslab qolinadi: material stavkasi, mehnat stavkasi, chiqindi va oʻlchov birligi. Har bir nom uchun oxirgi 12 ta ish saqlanadi. U shu kompyuterda narx Kutubxonasi yonida saqlanadi, hajm faylining ichida emas va hech narsa hech qayerga yuborilmaydi.
- **Undan yangi hajmni boshlang.** Asboblar panelidagi {{ui:Prices}} har bir element uchun oxirgi ish stavkalarini, odatiy stavkalarni va diapazonni koʻrsatadi. {{ui:Use last}} yoki {{ui:Use typical}} bitta elementga narx qoʻyadi, {{ui:Price N unpriced items from memory}} esa hali narxi yoʻq har bir elementni toʻldiradi. Har bir qoʻllash bitta bekor qilish qadami boʻladi.
- **Eski ishlar.** {{ui:Learn from a past takeoff…}} saqlangan hajmdagi (.json) narxlangan elementlarni eslab qoladi.
- **Koʻring, oʻzgartiring, unuting.** {{ui:Everything remembered}} har bir nomni roʻyxatlaydi; axlat qutisi tugmasi bittasini unutadi, {{ui:Clear all prices}} esa hammasini unutadi. Toʻxtatish uchun {{ui:Remember my prices when I save a takeoff}} ni oʻchiring. Dona boʻyicha narx hech qachon fut boʻyicha elementga qoʻyilmaydi. Qarang: [Oʻtgan ishlaringizdan narx xotirasi](topic:price-memory).

### Taʼminotchi zaxirasi va yetkazib berish muddatlari

- **Taʼminotchi roʻyxati bilan tekshiring.** Asboblar panelidagi {{ui:Supply}} taʼminotchining zaxira roʻyxatini ({{ui:Add a supplier file…}}) — CSV yoki elektron jadvalni qabul qiladi va hajmga kerak boʻlgan narsalarni, chiqindi bilan birga, shu roʻyxat bilan solishtiradi. Beshtagacha fayl saqlanadi. Hech narsa yuborilmaydi va taʼminotchidan hech narsa soʻralmaydi: faylni siz olib kelasiz.
- **Nima deydi.** Kam qolgan elementlar birinchi chiqadi: "120 EA yetishmaydi", "Yetkazib berish 21 kun", "Buyurtma kutilmoqda", "Oʻlchov birligi boshqacha", "Zaxira raqami yoʻq" yoki "Omborda bor". {{ui:Longest wait wanted (days)}} 14 dan boshlanadi.
- **Buyurtma roʻyxati.** {{ui:Order list (CSV)}} kam elementlarni yetishmayotgan miqdor, taʼminotchi va yetkazib berish muddati bilan yuklab oladi.
- **Narxlar Kutubxonaga.** Agar faylda narxlar boʻlsa, {{ui:Prices into the Library}} bir xil nom va oʻlchov birligiga ega har bir Kutubxona yozuvining material narxini belgilaydi. Hajmga olish uchun Kutubxonadan qayta narxlang.
- **Muammolar panelida.** Yetishmovchilik ogohlantirish, uzoq kutish esa eslatma boʻlib, "Supplier stock" ostida chiqadi. Siz sababi bilan qabul qilishingiz mumkin, sabab hajmda saqlanadi. Qarang: [Taʼminotchi zaxirasi va yetkazib berish muddatlarini tekshirish](topic:supplier-stock).

### AI yordamchilari

- **Uchalasi uchun vositalar.** {{ui:Settings}} da yordamchilarga ruxsat berilganda, yordamchi legendani oʻqiy oladi (`legend_open`), sanashni ishga tushiradi (`legend_count_start`, soʻngra `legend_count_status` va `legend_count_result`) va uni qoʻshadi (`legend_count_add`, u avval koʻrib chiqishi mumkin). U saqlangan narxlarni oʻqiy oladi (`prices_list`) va ulardan elementlarga narx qoʻya oladi (`prices_apply`, u avval koʻrib chiqishi mumkin), hamda taʼminotchi tekshiruvini oʻqiy oladi (`supply_check`). Taʼminotchi faylini qoʻshish esa hali ham sizning ishingiz. Qarang: [TakeoffCraft ni AI yordamchilari bilan ishlatish](topic:use-with-ai-assistants).

### Har bir ilovada

- **Tillar.** Jami 54 ta til; oʻnta yangisi: litva, latviy, bosniy, marathi, telugu, alban, afrikaans, filippin, suahili va oʻzbek. Ingliz tilidan boshqa tillar, ona tilida gapiradigan mutaxassis oʻqib chiqmaguncha, mashina qoralamasi hisoblanadi.
- **Kiritish qurilmalari.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} trackpad, sichqonchaning yon tugmalari, qalam, 3D sichqoncha, oʻyin boshqaruvchisi yoki MIDI boshqaruvchisi nima qilishini barcha ilovalar uchun yoki bittasi uchun belgilaydi. Qarang: [Trackpad, 3D sichqoncha yoki boshqaruvchidan foydalanish](common:input-devices).
- **Asboblar paneli qatorlari.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} bandida {{ui:Wrap}} (boshlanish), {{ui:2 rows}} va {{ui:1 row}} mavjud; sigʻmaydigan guruhlar yon tomonga surilib koʻriladi. Qarang: [Panellarni joylashtirish](common:arrange-panels).
- **Muammolar paneli.** Ogohlantirish va eslatmalarning umumiy paneli endi yuqoridagi taʼminotchi zaxirasi tekshiruvini ham oʻz ichiga oladi, boshqa tekshiruvlar yonida.
- **Qoʻshimchalar.** Qoʻshimchalar hisobingizdagi roʻyxatga ergashadi. Qarang: [Qoʻshimchalar va hisob roʻyxati](common:addons-basics).
- **AI ni ulang.** CadCraft Studio markaz: yordamchingizni sakkizta ilovaning hammasi uchun bir marta ulang. Studio oʻzining AI ga ega emas.

## 0.8.1 da tuzatilgan

- **DWG sinflar boʻlimi.** DWG faylining sinflar boʻlimi notoʻgʻri turda oʻqilardi. Bu TakeoffCraft da va yana toʻrtta ilovada tuzatildi.
- **Studio ishlayotgan vaqtda tilni oʻzgartira oladi.** Oldin Studio va uning paketli nashrlari faqat ingliz tilida edi. Bu desktop nashrida barcha platformalarda sinab koʻrilmagan; til oʻzgarmasa, bizga xabar bering.

## Bu versiyada hali yoʻq

- **Kod bilan imzolanmagan.** Windows ogohlantirishi mumkin, Mac da birinchi marta sichqonchaning oʻng tugmasini bosib {{ui:Open}} ni tanlang. Doʻkon nashrlari (Microsoft Store, Google Play, App Store) toʻxtatilgan, iPad va iPhone nashri 0.8.1 uchun qayta yigʻilmagan.
- **Studio yangilanishlari.** Windows oʻrnatuvchisi va Linux paketlari kuniga bir marta tekshiradi va avval soʻraydi. Portativ zip faqat xabar beradi; macOS va APK oʻzini yangilamaydi. 0.8 uchun macOS .dmg fayli relizga ergashadi.
- **AI ni ulang.** Studio ichida bir tugma bilan ulanish, brauzerdagi AI uchun joylashtirilgan ulagich, Studio ichidagi oʻz API kalitingiz va nashr etilgan MCP paketi bu versiyada vaʼda qilinmagan.
- **Hammasini sanash.** Unga legendadagi kabi chizilgan simvollar kerak, devor yoki uzun chiziq oʻtgan simvol oʻtkazib yuborilishi mumkin. Aks ettirilgan simvollar topilmaydi, masshtabi boʻlmagan va boshqa oʻlchamda chizilgan varaq legendaning oʻlchamida qidiriladi. Qolganiga ishonishdan oldin birinchi varaqdagi topilmalarni tekshiring.
- **Taʼminotchi zaxirasi.** Zaxira raqamlari faqat siz qoʻshgan fayl kabi yangi boʻladi. Tekshiruv hech qachon taʼminotchidan soʻramaydi.
- **Tillar.** Tamil ilovasining yuqori paneli toʻlib ketadi.

Qolganlari: [Hali qurilmagan](topic:not-built-yet). Bundan oldingi reliz uchun qarang: [0.7 dagi yangiliklar](topic:whats-new-0-7).
