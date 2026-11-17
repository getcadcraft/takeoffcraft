---
title: 0.9 versiyasidagi yangiliklar
summary: Uzunliklarni metr, santimetr yoki millimetrda oʻqish, metrik maydonlarni m2 da devor maydoni bilan, 1:75 va 1:150 masshtab oldindan sozlamalari, vazn va harorat birliklari, oʻnta usulli Yoy, jonli kursorlar, Kuzatish va ishtirokchilar roʻyxati.
keywords: yangiliklar, nima yangi, reliz eslatmalari, oʻzgarishlar jurnali, 0.9, koʻrsatish birliklari, uzunliklarni koʻrsatish, metr, santimetr, millimetr, metrik, global kuzatish, birliklar, m2, kvadrat metr, devor maydoni, masshtab oldindan sozlamalari, 1:75, 1:150, vazn, kilogramm, kg, tonna, ton, lb, harorat, selsiy, farengeyt, yoy, yoy usullari, 3 nuqtali yoy, radius, jonli, kursorlar, kuzatish, ishtirokchilar roʻyxati, sinf, maslahatlar, joylashuv, reliz eslatmalari, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, hammasini sanash, legenda, belgilar legendasi, butun toʻplam, narx xotirasi, oʻtgan ishlar, oxirgi ish, odatiy narx, yetkazib beruvchi, zaxira, yetkazish muddati, orqaga buyurtma, kamomad, buyurtma roʻyxati, muammolar paneli, yordamchi, tillar, kiritish qurilmalari, asboblar paneli qatorlari, dwg
from: 6182b998
---

Bu TakeoffCraft 0.9 versiyasida 0.8.1 bilan solishtirganda nima oʻzgargani. Bu bu ilova uchun kichik reliz: uzunliklarni endi metr, santimetr yoki millimetrda oʻqish mumkin, maydonlar va masshtablar metrik ishda toʻgʻri ishlaydi, Yoy esa chizishning oʻnta usuliga ega. Jonli seanslarda ham kim qayerdaligi koʻrinadi.

## Yangi

### Uzunliklarni metr, santimetr yoki millimetrda oʻqish

- **Uzunliklarni koʻrsatish.** {{ui:Settings}} › {{ui:TakeoffCraft}} boʻlimida {{ui:Show lengths as}} bor, unda {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm va mm variantlari bor. {{ui:Follow Global}} {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} boʻlimida yulduzcha qoʻyilgan metrik uzunlik birligidan foydalanadi, yulduzcha qoʻyilmagan boʻlsa, fut-dyuymdan foydalanadi. Bu varaqda, holat satrida va panellarda uzunliklar qanday oʻqilishini oʻzgartiradi, shu jumladan balandliklar, chuqurlik, qalinlik va qavatlar. Balandlik maydoniga yozilgan oddiy son koʻrsatilgan birlikda oʻqiladi.
- **Faqat koʻrinish.** Miqdorlar, xarajatlar va eksportlar aniq uzunliklardan hisoblanadi. 1/16, 1/8 va 1/4 dyuym tanlovi faqat fut-dyuym uchun chiqadi. Qarang: [Uzunliklarni metrda koʻrsatish](topic:show-lengths-in-meters).
- **Vazn birliklari.** {{ui:Typed quantity (no drawing)}} elementi endi lb, TON, kg yoki t birligida boʻlishi va birlik boʻyicha narxlanishi mumkin.
- **Harorat.** Har bir elementda element tahrirlash oynasida ixtiyoriy {{ui:Temperature}} maydoni bor, u Selsiy (C) yoki Farengeyt (F) gradusida kiritiladi. {{ui:Settings}} › {{ui:TakeoffCraft}} boʻlimidagi {{ui:Show temperatures as}} {{ui:Follow Global}}, °C yoki °F ni taklif qiladi.

### Metrik ishlar uchun maydonlar va masshtablar

- **Chizmada m2 da maydonlar.** Metrik element bilan oʻlchangan maydon chizma belgisida va belgilar panelida, jadvaldagidek, SF oʻrniga m2 deb yoziladi. Qoida: element metrikda narxlansa yoki uzunliklar m, cm yoki mm da koʻrsatilsa m2, aks holda SF.
- **Devor maydoni.** Balandligi bor chiziqli element elementlar roʻyxatida va elementlar boʻyicha miqdorlar jadvali ostidagi izoh qatorida devor maydonini ham koʻrsatadi (uzunlik koʻpaytirilgan balandlik).
- **Masshtab oldindan sozlamalari 1:75 va 1:150.** Ular {{ui:Scale}} guruhidagi {{ui:Preset}} roʻyxatida. Guruhda endi 32 ta masshtab bor. Qarang: [Masshtab oldindan sozlamalari](topic:scale-presets).

### Yoy oʻnta usulda

- {{ui:Arc}} yoqilgan boʻlsa (asboblar paneli tugmasi yoki {{key:R}}), varaq panelida {{ui:Arc method}} oynasi chiqadi: 3 nuqta; Boshlanish, Markaz, Tugash; Boshlanish, Markaz, Burchak; Boshlanish, Markaz, Uzunlik; Boshlanish, Tugash, Burchak; Boshlanish, Tugash, Yoʻnalish; Boshlanish, Tugash, Radius; Markaz, Boshlanish, Tugash; Markaz, Boshlanish, Burchak; Markaz, Boshlanish, Uzunlik. Burchak, uzunlik, radius va yoʻnalishni bosish yoki yozish mumkin. Chiziqli qatorlarda, maydonlarda va kesmalarda ishlaydi. 0.9 dan oldin saqlangan fayllar xuddi shunday ochiladi. Qarang: [Yoyni oʻnta usulda chizish](topic:draw-arcs-ten-methods).

### Birga ishlash

- **Bir-biringizning kursorlarini koʻring.** Jonli seansda har bir kishining koʻrsatkichi varaqda ismi va rangi bilan koʻrinadi, tanlagan belgilari atrofida esa punktir quti boʻladi. Boshqa varaqdagi odamlar oʻsha varaqning nomi bilan roʻyxatda koʻrsatiladi. Qarang: [Boshqalar bilan jonli ishlash](topic:work-live).
- **Odamni kuzatish va ishtirokchilar roʻyxati.** Jonli seansdagi {{ui:People}} tugmasi har bir kishini u ishlatayotgan asbob, turgan varaqi va oxirgi tahrir vaqti bilan roʻyxatlaydi. {{ui:Follow}} koʻrinishingizni uniki bilan birga siljitadi, xost esa {{ui:Ask everyone to follow me}} dan foydalanishi mumkin. Qarang: [Jonli seansda jamoadoshni kuzatish](topic:follow-a-teammate).

## Har bir ilovada

- **Maslahatlar va boshlash maslahati.** Sichqoncha ustiga olib borilganda chiqadigan matn Bootstrap maslahati boʻlib, boshlash maslahatini yopish mumkin.
- **Aylanadigan yorliqlar qatori.** Panel yorliqlari qatori sigʻmasa, kesilmasdan aylanadi.
- **Yorliq sarlavhalari.** Brauzer yorligʻida `<document> - TakeoffCraft | CadCraft` yoziladi.
- **Joylashuv.** {{ui:Settings}} dagi joylashuv roʻyxati tanlangan joylashuvni koʻrsatuvchi ochiladigan roʻyxat boʻldi.
- **Til.** Tanlagan tilingiz sahifaning oʻzi chiqaradigan soʻzlarga ham taalluqli boʻladi, masalan Yangi, Ochish va Saqlash. Ingliz tilidan boshqa tillar ona tilli mutaxassis oʻqib chiqmaguncha mashina qoralamasi hisoblanadi.

## Cheklovlar

- Uzunlik koʻrinishi, vazn va harorat birliklari hamda yangi oldindan sozlamalar testlar va sahifada tekshirilgan. Har bir birlikda har bir panel qoʻlda tekshirilmagan.
- Ishtirokchilar roʻyxati haqiqiy oʻqituvchi va talabalar guruhi bilan qoʻlda tekshirilmagan.
- Ingliz tilidan boshqa tillar mashina qoralamasi.
- Windows oʻrnatuvchilari kod bilan imzolanmagan (Batafsil, keyin Baribir ishga tushirish). macOS disk tasviri notarizatsiyadan oʻtmagan (oʻng tugma, keyin Ochish).

## Oldinroq: 0.8 va 0.8.1

Bu TakeoffCraft 0.8 (2026-11-01 da chiqarilgan) va 0.8.1 (2026-11-02) versiyalarida 0.7 bilan solishtirganda nima oʻzgargani. Belgi legendasini endi bir vaqtda butun toʻplam boʻylab sanash mumkin, yangi hajm oʻtgan ishlaringiz narxlaridan boshlanishi mumkin va hajmni yetkazib beruvchi zaxirasi bilan tekshirish mumkin. 0.8.1 tuzatish relizi.

### Yangi

**Toʻplamdagi hammasini sanash**

- **Legendani bir marta belgilang.** Asboblar panelidagi {{ui:Count everything}} belgilar legendasini oʻqiydi: belgilar va ularning yonida yozilgan nomlar atrofiga quti torting. Har bir belgi rasmi va nomi bilan roʻyxatlanadi, nom esa elementning nomiga aylanadi. Kerak boʻlmaganini belgisini olib tashlang, soʻng {{ui:Count on N sheets}} ni tanlang. Panel qidirilayotgan varaqni koʻrsatadi, {{ui:Cancel}} jarayonni toʻxtatadi va sahifa ishlashda davom etadi.
- **Hamma varaq bitta yurishda.** Har bir belgi ochiq har bir varaqda sanaladi. Boshqa masshtabda chizilgan varaq shu masshtabda qidiriladi, belgilar istalgan toʻgʻri burchakka burilgan holda ham topiladi. Legendaning oʻz belgilari uning varaqida sanalmaydi.
- **Qoʻshishdan oldin koʻrib chiqish.** Har bir jami varaq boʻyicha havola bor ("E-103: 4"), u oʻsha varaqqa olib boradi. Topilmadagi qutini bosing, u chiqarib tashlanadi, yana bosing, qaytadi. Moslik darajasi (50% dan 100% gacha) faqat topilganlarni filtrlaydi; qayta qidirilmaydi.
- **Bitta bekor qilish qadami.** {{ui:Add N marks}} har bir belgi uchun hisoblash elementi yaratadi va har bir topilmaga belgi qoʻyadi. Sizda allaqachon hisoblash elementi boʻlgan nom qayta ishlatiladi. {{key:Ctrl+Z}} barcha elementlar va belgilarni qaytaradi. Qabul qilganingiz {{ui:Learned}} ga ham qoʻshiladi.
- **Istalgan burchakdagi belgilar.** Sanashdan oldin {{ui:Symbols at any angle}} ni belgilang, toʻgʻri boʻlmagan burchakka burilgan belgilar ham topiladi. Qidiruv har 15 gradusda har bir belgini buradi; doira boʻlmagan belgi olti barobargacha koʻproq vaqt olishi mumkin.
- **Bu nima.** Faqat oʻz varaqlaringizda oddiy belgi moslashtirish, oʻqitilgan model yoʻq va hech narsa kompyuteringizdan chiqmaydi. Soxta 200 varaqli toʻplamda Chrome da tez desktopda tugallanishi 9.4 soniya boʻldi; haqiqiy chizma toʻplamlari sekinroq boʻladi. Qarang: [Toʻplamdagi hammasini sanash](topic:count-everything).

**Oldingi ishlardan narx xotirasi**

- **TakeoffCraft stavkalaringizni eslab qoladi.** Hajmni saqlaganingizda, narxlangan har bir ishlatilgan element nomi va turi boʻyicha eslab qolinadi: material stavkasi, mehnat stavkasi, chiqindi va birlik. Har bir nom uchun oxirgi 12 ta ish saqlanadi. U shu kompyuterda narx kutubxonasi yonida saqlanadi, hech qachon hajm faylining ichida emas va hech qayerga yuborilmaydi.
- **Undan yangi hajm boshlash.** Asboblar panelidagi {{ui:Prices}} har bir element uchun oxirgi ish stavkalarini, odatiy stavkalarni va diapazonni koʻrsatadi. {{ui:Use last}} yoki {{ui:Use typical}} bitta elementga narx qoʻyadi, {{ui:Price N unpriced items from memory}} esa hali narxi yoʻq har bir elementni toʻldiradi. Har bir ishlatish bitta bekor qilish qadami.
- **Eski ishlar.** {{ui:Learn from a past takeoff…}} saqlangan hajmning (.json) narxlangan elementlarini eslab qoladi.
- **Koʻring, oʻzgartiring, unuting.** {{ui:Everything remembered}} har bir nomni roʻyxatlaydi; axlat qutisi tugmasi bittasini unutadi, {{ui:Clear all prices}} hammasini unutadi. Toʻxtatish uchun {{ui:Remember my prices when I save a takeoff}} ni oʻchiring. Dona uchun narx hech qachon fut boʻyicha elementga qoʻyilmaydi. Qarang: [Oʻtgan ishlardan narx xotirasi](topic:price-memory).

**Yetkazib beruvchi zaxirasi va yetkazish muddatlari**

- **Yetkazib beruvchi roʻyxati bilan tekshirish.** Asboblar panelidagi {{ui:Supply}} yetkazib beruvchining zaxira roʻyxatini ({{ui:Add a supplier file…}}) — CSV yoki elektron jadvalni olib, hajmga kerakli narsalarni chiqindi bilan birga shu roʻyxat bilan solishtiradi. Beshtagacha fayl saqlanadi. Hech narsa yuborilmaydi va hech narsa yetkazib beruvchidan soʻralmaydi: faylni siz olib kelasiz.
- **Nima deydi.** Kam elementlar birinchi chiqadi: "120 EA yetishmaydi", "Yetkazish muddati 21 kun", "Buyurtma kutilmoqda", "Birlik farq qiladi", "Zaxira raqami yoʻq" yoki "Omborda bor". {{ui:Longest wait wanted (days)}} 14 dan boshlanadi.
- **Buyurtma roʻyxati.** {{ui:Order list (CSV)}} kam elementlarni yetishmayotgan miqdor, yetkazib beruvchi va yetkazish muddati bilan yuklab oladi.
- **Narxlarni kutubxonaga kiritish.** Agar fayl narxlarni oʻz ichiga olsa, {{ui:Prices into the Library}} bir xil nom va birlikdagi har bir kutubxona yozuvining material narxini belgilaydi. Hajmga olib kelish uchun kutubxonadan qayta narxlang.
- **Muammolar panelida.** Yetishmovchilik ogohlantirish, uzoq kutish esa eslatma boʻlib, "Yetkazib beruvchi zaxirasi" ostida chiqadi. Uni sabab bilan qabul qilishingiz mumkin, sabab esa hajm ichida saqlanadi. Qarang: [Yetkazib beruvchi zaxirasi va yetkazish muddatlarini tekshirish](topic:supplier-stock).

**AI yordamchilari**

- **Uchalasi uchun vositalar.** {{ui:Settings}} da yordamchilarga ruxsat berilgan boʻlsa, yordamchi legendani oʻqiy oladi (`legend_open`), sanashni ishga tushira oladi (`legend_count_start`, keyin `legend_count_status` va `legend_count_result`) va uni qoʻshadi (`legend_count_add`, avval koʻrib chiqishi mumkin). U eslab qolingan narxlarni oʻqiy oladi (`prices_list`) va ulardan elementlarga narx qoʻya oladi (`prices_apply`, avval koʻrib chiqishi mumkin) hamda yetkazib beruvchi tekshiruvini oʻqiy oladi (`supply_check`). Yetkazib beruvchi faylini qoʻshish sizning ishingiz boʻlib qoladi. Qarang: [TakeoffCraft bilan AI yordamchilaridan foydalanish](topic:use-with-ai-assistants).

**Har bir ilovada**

- **Tillar.** Jami ellik toʻrtta til; oʻnta yangi (Litva, Latviya, Bosniya, Marathi, Telugu, Albaniya, Afrikaans, Filippin, Suahili va Oʻzbek). Ingliz tilidan boshqa tillar ona tilli mutaxassis oʻqigunga qadar mashina qoralamasi hisoblanadi.
- **Kiritish qurilmalari.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} sensorli panel, sichqonchaning yon tugmalari, qalam, 3D sichqoncha, oʻyin boshqaruvchisi yoki MIDI boshqaruvchisi nima qilishini belgilaydi, har bir ilova uchun yoki bitta ilova uchun. Qarang: [Sensorli panel, 3D sichqoncha yoki boshqaruvchidan foydalanish](common:input-devices).
- **Asboblar paneli qatorlari.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} {{ui:Wrap}} (boshlanishi), {{ui:2 rows}} va {{ui:1 row}} ni taklif qiladi; sigʻmaydigan guruhlar yon tomonga aylanadi. Qarang: [Panellarni joylashtirish](common:arrange-panels).
- **Muammolar paneli.** Ogohlantirish va eslatmalarning umumiy paneli endi yuqoridagi yetkazib beruvchi zaxirasi tekshiruvini boshqa tekshiruvlar yonida koʻrsatadi.
- **Qoʻshimchalar.** Qoʻshimchalar hisobingiz roʻyxatiga amal qiladi. Qarang: [Qoʻshimchalar va hisob roʻyxati](common:addons-basics).
- **AI ni ulang.** CadCraft Studio markaz: AI yordamchingizni bir marta sakkizta ilovaning hammasi uchun ulang. Studio oʻzining AI siga ega emas.

### 0.8.1 da tuzatilgan

- **DWG sinflar boʻlimi.** DWG fayldagi sinflar boʻlimi notoʻgʻri turda oʻqilgan edi. Bu TakeoffCraft da va yana toʻrtta ilovada tuzatildi.
- **Studio ishlayotganda tilni oʻzgartira oladi.** Ilgari Studio va uning paketlangan nashrlari faqat ingliz tilida edi. Bu barcha platformalardagi ish stoli versiyasida sinovdan oʻtmagan; til oʻzgarmasa, xabar bering.

### Bu versiyada hali yoʻq

- **Kod bilan imzolanmagan.** Windows ogohlantirishi mumkin; Mac da birinchi marta oʻng tugmani bosib {{ui:Open}} ni tanlang. Doʻkon nashrlari (Microsoft Store, Google Play, App Store) toʻxtatilgan, iPad va iPhone nashri 0.8.1 uchun qayta qurilmagan.
- **Studio yangilanishlari.** Windows oʻrnatuvchisi va Linux paketlari kuniga bir marta tekshiradi va avval soʻraydi. Portativ zip faqat xabar beradi; macOS va APK oʻzini yangilamaydi. 0.8 macOS .dmg reliz bilan birga keladi.
- **AI ni ulash.** Studio ichida bir bosishda ulanish, brauzerdagi AI uchun xostlangan ulagich, Studio ichidagi oʻz API kaliti va chiqarilgan MCP paketi bu versiyada vaʼda qilinmagan.
- **Toʻplamdagi hammasini sanash.** Legenda bilan bir xil chizilgan belgilar kerak; devor yoki uzun chiziq oʻtgan belgi topilmasligi mumkin. Aks ettirilgan belgilar topilmaydi, masshtabsiz va boshqa oʻlchamda chizilgan varaq legendaning oʻlchamida qidiriladi. Ishonishdan oldin birinchi varaqdagi topilmalarni tekshiring.
- **Yetkazib beruvchi zaxirasi.** Zaxira raqamlari faqat qoʻshgan faylingiz kabi yangi. Tekshiruv hech qachon yetkazib beruvchidan soʻramaydi.
- **Tillar.** Tamil tilida ilova paneli toshib ketadi.

Qolgan hamma narsa: [Hali qurilmagan](topic:not-built-yet). Oldingi 0.7 reliz uchun qarang: [0.7 dagi yangiliklar](topic:whats-new-0-7).
