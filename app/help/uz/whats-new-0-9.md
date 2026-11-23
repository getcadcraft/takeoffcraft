---
title: 0.9 versiyasidagi yangiliklar (oldingi)
summary: Uzunliklarni metrda, santimetrda yoki millimetrda oʻqish, metrik maydonlarni m2 da va devor maydoni bilan, 1:75 va 1:150 masshtab oldindan sozlamalari, vazn va harorat birliklari, oʻnta usul bilan Yoy, jonli kursorlar, Kuzatish va ishtirokchilar roʻyxati.
keywords: 0.9 yangiliklari, oldingi reliz, yangiliklar, nima yangi, relizlar tarixi, oʻzgarishlar jurnali, 0.9, uzunliklarni koʻrsatish, metr, santimetr, millimetr, metrik, global boʻyicha, birliklar, koʻrsatish birliklari, m2, kvadrat metr, devor maydoni, masshtab oldindan sozlamalari, 1:75, 1:150, vazn, kilogramm, kg, tonna, t, lb, harorat, selsiy, farengeyt, yoy, yoy usullari, 3 nuqtali yoy, radius, jonli, kursorlar, kuzatish, ishtirokchilar roʻyxati, sinf, maslahat matnlari, joylashuv, 0.8, 0.8.1, versiya, yangi imkoniyatlar, hammasini sanash, legenda, belgi legendasi, butun toʻplam, narx xotirasi, oʻtgan ishlar, oxirgi ish, odatiy narx, taʼminotchi, zaxira, yetkazib berish muddati, buyurtma roʻyxati, yetishmovchilik, muammolar paneli, yordamchi, tillar, kiritish qurilmalari, asboblar paneli qatorlari, dwg
from: f4322ba2
---

Bu TakeoffCraft 0.9 versiyasida oldingi 0.8.1 bilan solishtirganda nima oʻzgargani. Bu ushbu ilova uchun kichik reliz: uzunliklarni metrda, santimetrda yoki millimetrda oʻqish mumkin, maydonlar va masshtablar metrik ishda toʻgʻri ishlaydi va Yoy oʻnta usulda chizilishi mumkin. Jonli seanslarda ham kim qayerdaligi koʻrinadi.

## Yangi

### Uzunliklarni metrda, santimetrda yoki millimetrda oʻqish

- **Uzunliklarni koʻrsatish.** {{ui:Settings}} › {{ui:TakeoffCraft}} da {{ui:Show lengths as}} bor, unda {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm va mm tanlovlari bor. {{ui:Follow Global}} {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} da yulduzcha bilan belgilagan metrik uzunlik birligini oladi, agar hech narsa belgilanmagan boʻlsa, fut-dyuym. Bu uzunliklar chizmada, holat satrida va panellarda, shu jumladan balandliklar, chuqurlik, qalinlik va sathlarda qanday oʻqilishini oʻzgartiradi. Balandlik maydoniga yozilgan yalang raqam koʻrsatilgan birlikda oʻqiladi.
- **Faqat koʻrinish uchun.** Miqdorlar, xarajatlar va eksportlar aniq uzunliklardan hisoblanadi. 1/16, 1/8 va 1/4 dyuym tanlovi faqat fut-dyuym uchun chiqadi. Qarang: [Uzunliklarni metrda koʻrsatish](topic:show-lengths-in-meters).
- **Vazn birliklari.** {{ui:Typed quantity (no drawing)}} elementi endi lb, TON, kg yoki t da boʻlishi va birligi boʻyicha narxlanishi mumkin.
- **Harorat.** Har bir elementda elementlar muharririda ixtiyoriy {{ui:Temperature}} maydoni bor, u gradus C yoki F da kiritiladi. {{ui:Settings}} › {{ui:TakeoffCraft}} dagi {{ui:Show temperatures as}} {{ui:Follow Global}}, °C yoki °F ni taklif qiladi.

### Metrik ish uchun maydonlar va masshtablar

- **Chizmada m2 da maydonlar.** Metrik element bilan oʻlchangan maydon chizma belgisida va belgilash panelida ham, jadvalda boʻlgani kabi, SF emas, m2 deb yoziladi. Qoida: element metrikda narxlansa yoki uzunliklar m, cm yoki mm da koʻrsatilsa m2, aks holda SF.
- **Devor maydoni.** Balandlikli chiziqli element Elementlar roʻyxatida va har bir element boʻyicha miqdorlar jadvali ostidagi izoh qatorida ham devor maydonini (uzunlik koʻpaytirilgan balandlik) koʻrsatadi.
- **Masshtab oldindan sozlamalari 1:75 va 1:150.** Ular {{ui:Scale}} guruhidagi {{ui:Preset}} roʻyxatida, hozir guruhda 32 ta masshtab bor. Qarang: [Masshtab oldindan sozlamalari](topic:scale-presets).

### Oʻnta usul bilan Yoy

- {{ui:Arc}} yoqilgan boʻlsa (asboblar paneli tugmasi yoki {{key:R}}), varaq panelida {{ui:Arc method}} qutisi paydo boʻladi: 3 nuqta; Boshlanish, Markaz, Tugash; Boshlanish, Markaz, Burchak; Boshlanish, Markaz, Uzunlik; Boshlanish, Tugash, Burchak; Boshlanish, Tugash, Yoʻnalish; Boshlanish, Tugash, Radius; Markaz, Boshlanish, Tugash; Markaz, Boshlanish, Burchak; Markaz, Boshlanish, Uzunlik. Burchak, uzunlik, radius va yoʻnalishni bosish yoki kiritish mumkin. U chiziqli yoʻllarda, maydonlarda va teshiklarda ishlaydi. 0.9 dan oldin saqlangan fayllar xuddi shunday ochiladi. Qarang: [Oʻnta usul bilan yoy chizish](topic:draw-arcs-ten-methods).

### Birgalikda ishlash

- **Bir-birining kursorini koʻring.** Jonli seansda har bir kishining koʻrsatkichi varaqda uning nomi va rangi bilan koʻrinadi, tanlagan belgilari atrofida esa punktir quti bor. Boshqa varaqdagi odamlar oʻsha varaq nomi bilan roʻyxatga olinadi. Qarang: [Boshqalar bilan jonli ishlash](topic:work-live).
- **Odamni kuzatish va ishtirokchilar roʻyxati.** Jonli seansdagi {{ui:People}} tugmasi har bir kishini ishlatayotgan asbob, turgan varaqi va oxirgi tahrirlash vaqti bilan roʻyxatga oladi. {{ui:Follow}} koʻrinishingizni ularnikiga koʻchiradi, xost esa {{ui:Ask everyone to follow me}} dan foydalanishi mumkin. Qarang: [Jonli seansda hamkasbni kuzatish](topic:follow-a-teammate).

## Barcha ilovalarda

- **Maslahat matnlari va boshlash maslahati.** Sichqoncha ustida turganda chiqadigan matn Bootstrap maslahat oynasi boʻladi, boshlash maslahatini esa yopish mumkin.
- **Surilanuvchi yorliq qatorlari.** Panel yorliqlari qatori sigʻmasa, u kesilmaydi, balki surilib boradi.
- **Yorliq sarlavhalari.** Brauzer yorligʻi `<document> - TakeoffCraft | CadCraft` deb yozadi.
- **Joylashuv.** {{ui:Settings}} dagi joylashuv roʻyxati endi tanlangan joylashuvni koʻrsatuvchi ochiladigan roʻyxat.
- **Til.** Endi tanlagan til sahifaning oʻzi chiqaradigan soʻzlarga ham taalluqli, masalan Yangi, Ochish va Saqlash. Ingliz tilidan boshqa tillar ona tilida soʻzlovchi kishi oʻqib chiqquncha mashina qoralamasi boʻlib qoladi.

## Haqiqiy cheklovlar

- Uzunlik koʻrinishi, vazn va harorat birliklari hamda yangi oldindan sozlamalar testlar va sahifada tekshirildi. Har bir birlikdagi har bir panel qoʻlda tekshirilmagan.
- Ishtirokchilar roʻyxati haqiqiy oʻqituvchi va talabalar sinfi bilan qoʻlda tekshirilmagan.
- Ingliz tilidan boshqa tillar mashina qoralamalari.
- Windows oʻrnatuvchilari raqamli imzolanmagan (Batafsil maʼlumot, soʻng Baribir ishga tushirish). macOS disk tasviri notarizatsiyadan oʻtmagan (sichqonchaning oʻng tugmasi, soʻng Ochish).

## Oldinroq: 0.8 va 0.8.1

Bu TakeoffCraft 0.8 (2026-11-01 da chiqarilgan) va 0.8.1 (2026-11-02) da 0.7 bilan solishtirganda nima oʻzgargani. Belgi legendasini butun toʻplam boʻyicha bir vaqtda sanash mumkin, yangi hisob oʻtgan ishlaringizdagi narxlardan boshlanishi mumkin va hisobni taʼminotchi zaxirasiga qarshi tekshirish mumkin. 0.8.1 tuzatish reliz.

### Yangi

**Toʻplamdagi hammasini sanash**

- **Legendani bir marta quti bilan belgilang.** {{ui:Count everything}} asboblar panelida belgi legendasini oʻqiydi: belgilar va ularning yonidagi nomlar atrofida quti torting. Har bir belgi rasmi va nomi bilan roʻyxatga olinadi, nom element nomiga aylanadi. Kerak boʻlmaganlarning belgisini olib tashlang, soʻng {{ui:Count on N sheets}} ni tanlang. Qidiruv qaysi varaq ekanini bar koʻrsatadi, {{ui:Cancel}} ishni toʻxtatadi, sahifa esa ishlatishga yaroqli qoladi.
- **Bitta yurishda har bir varaq.** Har bir belgi ochiq har bir varaqda sanaladi. Boshqa masshtabda chizilgan varaq shu masshtabda qidiriladi, belgilar esa istalgan toʻgʻri burchakda aylantirilgan holda topiladi. Legendaning oʻz belgilari oʻz varaqida sanalmaydi.
- **Qoʻshishdan oldin koʻrib chiqing.** Har bir jami uchun har bir varaqqa havola bor ("E-103: 4"), u oʻsha varaqqa olib boradi. Topilmani chiqarib tashlash uchun uning qutisini bosing, qaytarish uchun yana bosing. Moslik darajasi (50% dan 100% gacha) faqat topilganlarni filtrlaydi; hech narsa qayta qidirilmaydi.
- **Bitta qaytarish qadami.** {{ui:Add N marks}} har bir belgi uchun hisoblash elementi yaratadi va har bir topilmaga belgi qoʻyadi. Sizda allaqachon hisoblash elementi boʻlgan nom qayta ishlatiladi. {{key:Ctrl+Z}} barcha elementlar va belgilarni qaytaradi. Qabul qilganingiz {{ui:Learned}} ga ham uzatiladi.
- **Istalgan burchakdagi belgilar.** Sanashdan oldin {{ui:Symbols at any angle}} ni belgilang, toki toʻgʻri burchak boʻlmagan burchakka aylantirilgan belgilar ham topilsin. Qidiruv har bir belgini har 15 gradusda aylantiradi, dumaloq boʻlmagan belgi esa oltigacha koʻp vaqt olishi mumkin.
- **Bu nima.** Oʻqitilgan modelsiz, oddiy belgi moslashtirish sizning varaqlaringizda bajariladi va hech narsa kompyuteringizdan chiqmaydi. Soxta 200 varaqli toʻplamda u Chrome da tez desktopda boshidan oxirigacha 9.4 soniyada tugadi; haqiqiy chizmalar toʻplami sekinroq boʻladi. Qarang: [Toʻplamdagi hammasini sanash](topic:count-everything).

**Oʻtgan ishlardan narx xotirasi**

- **TakeoffCraft stavkalaringizni eslab qoladi.** Hisobni saqlaganingizda, ishlatilgan har bir narxlangan element nomi va turi boʻyicha eslab qolinadi: material stavkasi, ish stavkasi, chiqindi va birlik. Har bir nom uchun oxirgi 12 ta ish saqlanadi. U shu kompyuterda narx Kutubxonasi yonida saqlanadi, hech qachon hisob faylida emas, va hech narsa hech qayerga yuborilmaydi.
- **Yangi hisobni shundan boshlang.** Asboblar panelidagi {{ui:Prices}} har bir element uchun oxirgi ish stavkalarini, odatiy stavkalarni va diapazonni koʻrsatadi. {{ui:Use last}} yoki {{ui:Use typical}} bitta elementni narxlaydi, {{ui:Price N unpriced items from memory}} esa hali narxi yoʻq har bir elementni toʻldiradi. Har bir ishlatish bitta qaytarish qadami.
- **Eski ishlar.** {{ui:Learn from a past takeoff…}} saqlangan hisobning narxlangan elementlarini eslab qoladi (.json).
- **Koʻring, oʻzgartiring, unuting.** {{ui:Everything remembered}} har bir nomni roʻyxatga oladi; oʻchirish tugmasi bitta nomni unutadi, {{ui:Clear all prices}} esa hammasini unutadi. Toʻxtatish uchun {{ui:Remember my prices when I save a takeoff}} ni oʻchiring. Dona boʻyicha narx hech qachon fut boʻyicha elementga qoʻyilmaydi. Qarang: [Oʻtgan ishlaringizdan narx xotirasi](topic:price-memory).

**Taʼminotchi zaxirasi va yetkazib berish muddati**

- **Taʼminotchi roʻyxati bilan tekshiring.** Asboblar panelidagi {{ui:Supply}} taʼminotchining zaxira roʻyxatini ({{ui:Add a supplier file…}}) — CSV yoki elektron jadval — oladi va hisob chiqindi bilan birga nima kerakligini zaxiraga qarshi tekshiradi. Beshtagacha fayl saqlanadi. Hech narsa yuborilmaydi va hech narsa taʼminotchidan soʻralmaydi: faylni siz olib kelasiz.
- **Nima deydi.** Kam boʻlgan elementlar birinchi turadi: "120 EA kam", "Yetkazib berish 21 kun", "Buyurtma kutilmoqda", "Birlik boshqacha", "Zaxira raqami yoʻq" yoki "Omborda bor". {{ui:Longest wait wanted (days)}} 14 dan boshlanadi.
- **Buyurtma roʻyxati.** {{ui:Order list (CSV)}} kam elementlarni, yetishmayotgan miqdor, taʼminotchi va yetkazib berish muddati bilan yuklab oladi.
- **Narxlar Kutubxonaga.** Agar faylda narxlar boʻlsa, {{ui:Prices into the Library}} har bir Kutubxona yozuvining material narxini bir xil nom va birlik boʻyicha oʻrnatadi. Ularni hisobga olish uchun Kutubxonadan qayta narxlang.
- **Muammolar panelida.** Yetishmovchilik ogohlantirish, uzoq kutish esa izoh sifatida "Taʼminotchi zaxirasi" ostida chiqadi. Siz bitta yetishmovchilikni sabab bilan qabul qilishingiz mumkin, sabab hisobda saqlanadi. Qarang: [Taʼminotchi zaxirasi va yetkazib berish muddatini tekshirish](topic:supplier-stock).

**AI yordamchilar**

- **Uchalasi uchun asboblar.** {{ui:Settings}} da yordamchilarga ruxsat berilgan boʻlsa, yordamchi legendani oʻqiy oladi (`legend_open`), sanashni ishga tushira oladi (`legend_count_start`, soʻng `legend_count_status` va `legend_count_result`) va uni qoʻshadi (`legend_count_add`, u avval koʻrib chiqishi mumkin). U eslab qolingan narxlarni oʻqiy oladi (`prices_list`), ulardan elementlarga narx qoʻya oladi (`prices_apply`, u avval koʻrib chiqishi mumkin) va taʼminotchi tekshiruvini oʻqiy oladi (`supply_check`). Taʼminotchi faylini qoʻshish sizning oʻzingizda qoladi. Qarang: [TakeoffCraft ni AI yordamchilar bilan ishlatish](topic:use-with-ai-assistants).

**Barcha ilovalarda**

- **Tillar.** Jami ellik toʻrtta til bor; oʻntasi yangi (litva, latish, bosniy, marathi, telugu, alban, afrikaans, filippin, suahili va oʻzbek). Ingliz tilidan boshqa tillar ona tilida soʻzlovchi kishi oʻqib chiqquncha mashina qoralamasi boʻladi.
- **Kiritish qurilmalari.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} sensorli panel, sichqonchaning yon tugmalari, qalam, 3D sichqoncha, oʻyin boshqaruvchisi yoki MIDI boshqaruvchisi nima qilishini hamma ilova uchun yoki bittasi uchun belgilaydi. Qarang: [Sensorli panel, 3D sichqoncha yoki boshqaruvchidan foydalanish](common:input-devices).
- **Asboblar paneli qatorlari.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} da {{ui:Wrap}} (boshida), {{ui:2 rows}} va {{ui:1 row}} taklif qilinadi; sigʻmaydigan guruhlar yon tomonga suriladi. Qarang: [Panellarni joylashtirish](common:arrange-panels).
- **Muammolar paneli.** Ogohlantirish va izohlarning umumiy paneli endi yuqoridagi taʼminotchi zaxirasi tekshiruvini boshqa tekshiruvlar yonida olib yuradi.
- **Qoʻshimchalar.** Qoʻshimchalar hisobingizdagi roʻyxatga ergashadi. Qarang: [Qoʻshimchalar va hisob roʻyxati](common:addons-basics).
- **AI ni ulang.** CadCraft Studio markaz: yordamchingizni bir marta ulang, sakkizta ilovaning hammasi uchun. Studio oʻzining AI ga ega emas.

### 0.8.1 da tuzatildi

- **DWG sinflar boʻlimi.** DWG fayldagi sinflar boʻlimi notoʻgʻri turda oʻqilgan edi. Bu TakeoffCraft da va yana toʻrtta ilovada tuzatildi.
- **Studio ishlayotganda tilni oʻzgartira oladi.** Oldin Studio va uning yigʻilgan nashrlari faqat inglizcha edi. Bu barcha platformalardagi desktop versiyada sinalmagan; til oʻzgarmasa, bizga xabar bering.

### Bu versiyada hali yoʻq

- **Kod bilan imzolanmagan.** Windows ogohlantirishi mumkin; Mac da birinchi marta sichqonchaning oʻng tugmasini bosib {{ui:Open}} ni tanlang. Doʻkon yigʻmalari (Microsoft Store, Google Play, App Store) toʻxtatilgan, iPad va iPhone yigʻmasi 0.8.1 uchun qayta yigʻilmagan.
- **Studio yangilanishlari.** Windows oʻrnatuvchisi va Linux paketlari kuniga bir marta tekshiradi va avval soʻraydi. Portativ zip faqat xabar beradi; macOS va APK oʻzi yangilanmaydi. 0.8 macOS .dmg reliz bilan birga chiqadi.
- **AI ni ulang.** Studio ichida bir bosishda ulanish, brauzerdagi AI uchun xostlangan ulagich, Studio ichida oʻz API kalitingiz va nashr etilgan MCP paketi bu versiyada vaʼda qilinmagan.
- **Belgilarni sanash.** Legendadagidek chizilgan belgilar kerak, devor yoki uzun chiziq oʻtgan belgi esa oʻtib ketishi mumkin. Aks ettirilgan belgilar topilmaydi, masshtabsiz va boshqa oʻlchamda chizilgan varaq esa legendaning oʻlchamida qidiriladi. Qolganiga ishonishdan oldin birinchi varaqdagi topilmalarni tekshiring.
- **Taʼminotchi zaxirasi.** Zaxira raqamlari siz qoʻshgan fayl kabi yangi boʻladi. Tekshiruv hech qachon taʼminotchidan soʻramaydi.
- **Tillar.** Tamil tilida ilova paneli toʻlib ketadi.

Qolgan hammasi [Hali qurilmagan](topic:not-built-yet) boʻlimida. Oldingi reliz uchun qarang: [0.7 dagi yangiliklar](topic:whats-new-0-7).
