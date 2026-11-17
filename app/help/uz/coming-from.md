---
title: Boshqa hajmlarni hisoblash dasturlaridan oʻtish
summary: How the habits of dedicated takeoff programs and PDF markup tools map to TakeoffCraft, and the differences that trip people up.
keywords: oʻtish, koʻchirish, shartlar, detallar, oʻlchash vositalari, belgilar roʻyxati, miqdor bogʻlanishi, hajm hisoblash odatlari, farqlar, solishtirish
from: 12004ce5
---

Agar PlanSwift da yoki Bluebeam Revu dasturidagi oʻlchash vositalari bilan hajmlarni hisoblagan boʻlsangiz, TakeoffCraft ning koʻp qismi tanish tuyuladi: chizmalar toʻplami, har bir varaq uchun masshtab, oʻlchanadigan narsalar va narxlangan jami. Qismlarning bir-biriga bogʻlanishi ayrim joylarda boshqacha, bu joylar quyida keltirilgan.

Agar PlanSwift yoki On-Screen Takeoff bilan tanish boʻlsangiz, {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}} boʻlimida {{ui:Takeoff desk}} menyu uslubini tanlang: File, Edit, View, Scale, Takeoff, Items, Markup va Export menyulari hamda hajm vositalari qatori joylashgan menyu paneli, varaq panelida esa masshtab tayyor sozlamalari bilan. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse).

## Odatlarning moslanishi

| Sizga tanish | TakeoffCraft da |
|---|---|
| Chizmalarni saqlaydigan ish yoki loyihani ochish (PlanSwift) | PDF lar va `.takeoff.json` loyihasini yonma-yon oching. Loyiha faqat hajmni saqlaydi; PDF lar sizning oʻz fayllaringiz boʻlib qoladi. |
| Izohlar, bulutlar va ajratmalar roʻyxati (Bluebeam) | Varaq panelidagi {{ui:Markup}}: holati (Open, Answered, Closed) bilan izohlar, bulutlar va ajratmalar, **Markups** ostida roʻyxatlangan va belgilangan PDF da chizilgan. Qarang: [Izohlar, bulutlar va ajratmalar](topic:markups). |
| PDF ichida belgi sifatida saqlangan oʻlchovlar (Bluebeam) | Hajm `.takeoff.json` faylida turadi. {{ui:Marked PDF}} ulashish uchun hajm chizilgan nusxa yozadi; {{ui:PDF with the takeoff inside}} TakeoffCraft da qayta ochish uchun hajmni oʻz ichiga olgan nusxa yozadi. |
| Hajm elementlari (PlanSwift), Tool Chest da saqlangan maxsus oʻlchov vositalari (Bluebeam) | {{ui:Items}} ostidagi **Items**: nomi, turi, rangi, birligi, balandligi yoki chuqurligi, chiqindisi, stavkalari. |
| Formulali detallar va yigʻmalar (PlanSwift) | Elementning {{ui:Assembly}} boʻlimi: `L H A N P` oʻzgaruvchilari bilan formulali tarkibiy qismlar. |
| Sahifa masshtabini belgilash yoki kalibrlash (ikkalasi ham) | {{ui:Scale}} guruhidagi {{ui:Preset}} roʻyxati yoki {{ui:Calibrate}}, har bir varaq uchun. {{ui:Check}} maʼlum oʻlchamni oʻlchaydi. |
| Bir masshtabni sahifalar oraligʻiga qoʻllash | Hali yoʻq: har bir varaqni alohida sozlang. |
| Bir varaqda turli masshtabli koʻrinish oynalari (Bluebeam) | Hali yoʻq: har bir varaq uchun bitta masshtab. |
| Polichiziq uzunligi va maydon vositalari (Bluebeam), chiziqli va maydon boʻyicha hajm (PlanSwift) | {{ui:Linear}} ({{key:L}}) va {{ui:Area}} ({{key:A}}). |
| Toʻgʻri chiziqlar uchun Shift ni ushlab turish | {{key:Shift}} 45° qadamlarga tortadi, bu xuddi shunday gʻoya. |
| Chizma chiziqlariga tutib olish | Standart holatda yoqilgan: uchlar, oʻrtalar, kesishmalar va chiziqdagi eng yaqin nuqta. CAD dasturlaridagidek, oʻchirish uchun {{key:F3}}. |
| Sanash vositasi (ikkalasi ham) | {{ui:Count}} ({{key:C}}). |
| Belgilarni vizual qidirish (Bluebeam) | {{ui:Auto count}} ({{key:S}}): bitta belgini ramkaga oling, koʻrib chiqing, qoʻshing. |
| Maydonlardagi kesib olishlar yoki ayirmalar | Tanlangan maydonda {{ui:Cut-out}} ({{key:X}}), hamda dumaloq kesib olishlar. |
| Chiziqli yoʻnalishlardagi ayirmalar | Chiziqni toʻgʻri tortib oʻting va teshik uchun {{key:E}} ({{ui:Deduct}}) ni bosing. Qarang: [Chiziqli yoʻnalishlarni oʻlchash](topic:measure-linear). |
| Polichiziqdagi yoy kesmalari | {{ui:Arc}} ({{key:R}}): egri chiziqda nuqtani, keyin uning oxirini bosing. |
| Miqdor ustunli belgilar roʻyxati (Bluebeam) | {{ui:Quantities}} jadvali, {{ui:By item}} yoki {{ui:By sheet}}. |
| Narxli smeta jadvali (PlanSwift) | Xuddi shu jadval: chiqindi, material va mehnat birlik narxi, umumiy summalar, {{ui:Job total}}. |
| Excel ga eksport | Jonli formulali {{ui:XLSX}} yoki {{ui:CSV}}. |
| Vositani toʻxtatish uchun Escape | {{key:Esc}} bekor qiladi va {{ui:Select}} ga qaytaradi. |
| Tugatish uchun oʻng tugma | Oʻng tugma bu yerda ham chiziqni tugatadi yoki maydonni yopadi. Oʻng tugma menyusi yoʻq. |

## Odamlarni adashtiradigan farqlar

**Hajm PDF ichida emas.** Siz qilgan hech narsa PDF laringizni oʻzgartirmaydi. `.takeoff.json` faylini saqlang va chizmalar bilan birga saqlang. Odamga belgilangan PDF ni yuborish tahrirlanadigan hajmni yubormaydi: loyiha faylini va asl PDF larni yuboring yoki [hajm ichida PDF](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf) ni yuboring.

**PDF lar nomi boʻyicha emas, mazmuni boʻyicha moslanadi.** Eski fayl nomi ustiga saqlangan qayta koʻrib chiqilgan varaq TakeoffCraft uchun yangi fayl boʻladi, masshtabsiz va belgisiz. Eski belgilaringiz eski versiyada qoladi va sanashda davom etadi. Qarang: [Hajmni saqlash va qayta ochish](topic:save-and-reopen#when-a-pdf-has-changed).

**Masshtabsiz belgilar nolga teng deb hisoblanmaydi, balki chiqarib tashlanadi.** Agar varaqda masshtab boʻlmasa, uning chiziqlari va maydonlari hisobga kirmaydi, jadvalda esa "Incomplete" yoziladi. Koʻp dasturlarda siz shunchaki 0 koʻrardingiz. Qarang: [Masshtabni belgilash](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Sahifa oʻlchamini taxmin qilish yoʻq.** Tayyor sozlamalar PDF toʻliq oʻlchamda chop etilgan deb hisoblaydi. Yarim oʻlchamdagi yoki "fit to page" PDF ga {{ui:Calibrate}} kerak. Har doim {{ui:Check}} dan foydalaning.

**Bitta element, bitta asosiy tur, xohlasangiz koʻproq.** Element chiziqli, maydon yoki sanash boʻladi va belgilari paydo boʻlgach, turi qulflanadi. Maydon va uning perimetrini beradigan shart — bu maydon elementi: uning perimetri `P` oʻzgaruvchisidir. Uzunligi va maydoni boʻlgan devor — balandligi bor chiziqli element. Poli, asosi va eshiklari boʻlgan xona kabi koʻp shartli element uchun **Also measure** ostida boshqa turlarni belgilang: har biri alohida qatorda narxlanadi. Qarang: [Bitta element, bir necha tur belgilari](topic:create-items#one-item-several-kinds-of-marks).

**Formulalar jami qiymatlar ustida ishlaydi.** Yigʻma formulalari elementning barcha varaqlar boʻyicha jami qiymatlaridan foydalanadi, har bir chiziq alohida emas. `N` (chiziqlar yoki maydonlar soni) har bir chiziq uchun qoʻshimchalar uchun xizmat qiladi, masalan har bir devor uchun bitta qoʻshimcha shtender.

**Perimetr kesib olishlarni oʻz ichiga oladi.** Maydonning `P` si uning teshiklari chetlarini qoʻshadi. Qarang: [Kesib olishli maydonlarni oʻlchash](topic:measure-areas#read-the-area).

**Sudrash koʻrinishni siljitadi.** Varaqda chap tugma bilan sudrash {{ui:Auto count}} dan tashqari har qanday vositada koʻrinishni siljitadi. Siljitish vositasiga oʻtish shart emas. Gʻildirak kattalashtiradi, aylantirmaydi.

**Tiklash nusxasi, bulut emas.** TakeoffCraft ishingizning nusxasini shu brauzerda saqlaydi va ishdan chiqqandan keyin uni qaytarib taklif qiladi ([Agar yorliq yoki brauzer toʻxtasa](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), lekin hajmni saqlash sizning ishingiz: {{key:Mod+S}}. Bulutda saqlash hali mavjud emas.

**Hammasi brauzerda.** Oʻrnatish shart emas va chizmalar hech qachon yuklanmaydi. Desktop ilova uchun TakeoffCraft boshqa yetti ilova bilan birga CadCraft Studio da keladi.

## Hali mavjud emas

Varaq boʻyicha masshtab hududlari hali tayyorlanmagan. Toʻliq roʻyxat va oʻrniga nima qilish kerakligi uchun [Hali tayyorlanmagan narsalar](topic:not-built-yet) ga qarang.
