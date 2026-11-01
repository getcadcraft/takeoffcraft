---
title: TakeoffCraft ekrani
summary: Oynaning ekrandagi nomlari boʻyicha koʻrik, asboblar paneli, varaqlar roʻyxati, varaq, Elementlar paneli, Miqdorlar jadvali va holat paneli.
keywords: ekran, joylashuv, joylashuvlar, lenta, loyiha brauzeri, asboblar qutisi, axborot qutisi, asboblar paneli, varaqlar roʻyxati, elementlar paneli, miqdorlar, holat paneli, koʻrik, interfeys
from: ab1115e0
---

TakeoffCraft CadCraft ilova paneli ostida brauzer oynasini toʻldiradi. Tepadan pastga va chapdan oʻngga:

| Qism | Joylashuvi | Vazifasi |
|---|---|---|
| Ilova paneli | Eng tepada | Ilova nomi, versiya, {{ui:TakeoffCraft haqida}}, {{ui:Yordam}} ({{key:F1}}), {{ui:Oflayn uchun saqlash}}, {{ui:Sozlamalar}} ({{key:Mod+,}}), {{ui:Toʻliq ekran}} tugmasi va {{ui:Qogʻoz}} / {{ui:Model}} mavzu almashtirgichi. |
| Asboblar paneli | Ilova paneli ostida | Har bir buyruq guruhlarda: {{ui:Fayl}}, {{ui:Eksport}}, {{ui:Masshtab}}, {{ui:Hajmlarni hisoblash}}, {{ui:Tahrirlash}}, {{ui:Koʻrinish}}. |
| Varaqlar | Chapda | Har bir ochiq PDF ning har bir sahifasi, kichik rasmi, masshtabi va belgilar soni. |
| Varaq | Oʻrtada | Ochiq sahifa. Oʻlchash shu yerda. |
| Elementlar | Oʻngda | Hajm elementlaringiz, tanlangan elementning sozlamalari va tanlangan belgi. |
| Miqdorlar | Pastda | Element yoki varaq boʻyicha miqdorlar va xarajatlar hamda umumiy jami. |
| Holat paneli | Eng pastda | Jonli oʻlchov, xabarlar, 45° maslahati va kattalashtirish. |

## Asboblar paneli

Har qanday tugma ustiga sichqonchani olib borsangiz, u nima qilishini va tugmasini koʻrasiz.

| Guruh | Tugmalar |
|---|---|
| {{ui:Fayl}} | {{ui:Yangi}} (boʻsh hajm), PDF ochish ({{key:Mod+O}}), {{ui:Hajmlarni ochish}} (`.takeoff.json` loyihasi), {{ui:Hajmlarni saqlash}} ({{key:Mod+S}}) |
| {{ui:Eksport}} | Bitta menyu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Belgilangan PDF}} |
| {{ui:Masshtab}} | {{ui:Kalibrlash}} ({{key:K}}), {{ui:Tekshirish}} ({{key:D}}) va {{ui:Oldindan oʻrnatilgan}} roʻyxati |
| {{ui:Hajmlarni hisoblash}} | {{ui:Tanlash}} ({{key:V}}), {{ui:Chiziqli}} ({{key:L}}), {{ui:Maydon}} ({{key:A}}), {{ui:Aylana}} ({{key:O}}), {{ui:Yoy}} ({{key:R}}, yoqish va oʻchirish kaliti), {{ui:Ayirish}} ({{key:E}}, yoqish va oʻchirish kaliti), {{ui:Kesib olish}} ({{key:X}}), {{ui:Sanash}} ({{key:C}}), {{ui:Avtosanash}} ({{key:S}}) |
| {{ui:Tahrirlash}} | {{ui:Ortga qaytarish}} ({{key:Mod+Z}}), {{ui:Qayta bajarish}} ({{key:Mod+Y}}), {{ui:Nusxalash}} ({{key:Mod+C}}), {{ui:Qoʻyish}} ({{key:Mod+V}}) va {{ui:Qoʻshimcha}}: {{ui:Kesish}}, {{ui:Nusxalash}}, {{ui:Qoʻyish}}, {{ui:Joyida qoʻyish}}, {{ui:Nusxa olish}}, {{ui:Oʻchirish}}, {{ui:Hammasini tanlash}}, {{ui:Tanlovni bekor qilish}} |
| {{ui:Koʻrinish}} | {{ui:Sahifaga moslash}} ({{key:F}}), {{ui:Kenglikka moslash}} ({{key:W}}) |

Foydalanayotgan asbob bosilgan koʻrinishda koʻrsatiladi. {{ui:Yoy}} va {{ui:Ayirish}} tugmalari yoqilgan paytda bosilgan holatda qoladi.

## Varaqlar (chapda)

- **Varaqlarni qidirish** roʻyxatni varaq nomi, fayl nomi yoki sahifa belgisi boʻyicha filtrlaydi.
- Har bir varaqda kichik rasm (siz aylantirganda chiziladi), uning nomi va masshtabi yoki **Masshtab yoʻq** koʻrinadi.
- Har bir qatorning oʻng tomonida varaqda nechta belgi borligi koʻrsatiladi. Element yoritilgan boʻlsa, shu varaqda shu elementning belgilari soni koʻrsatiladi.
- Varaqni ochish uchun bosing. {{key:PageDown}} va {{key:PageUp}} roʻyxatdagi keyingi va oldingi varaqqa oʻtadi.
- Hajm ochilmagan PDF larni qamrab olganda, roʻyxat ostidagi izohda ularning nomi koʻrsatiladi. Qarang: [Hajmni saqlash va qayta ochish](topic:save-and-reopen).

Varaq nomlari PDF dan olinadi: `A-101` kabi sahifa belgisi varaq nomiga aylanadi. Belgisi boʻlmagan sahifa faylning nomi va sahifa raqami boʻyicha nomlanadi, masalan "Plans, page 3". Bir nechta PDF ochiq boʻlganda, belgili varaqlarda fayl nomi ham koʻrsatiladi.

## Varaq (oʻrtada)

- Varaq ostidagi panelda varaq nomi va uning masshtabi yoki "Masshtab hali yoʻq: oldindan oʻrnatilganlardan birini tanlang yoki kalibrlang" koʻrinadi. Tugmalari: {{ui:MarkupCraft}} (agar bu ilova PDF ni qabul qila olsa, qarang: [Hajm boshlash va rejalar toʻplamini ochish](topic:open-plan-set)), {{ui:Solishtirish}} (varaqning eski versiyasi ustida: [Qayta koʻrib chiqilgan varaqni solishtirish](topic:compare-revisions)), "(n) tekshirish uchun" (belgilangan belgilar boʻlsa) va {{ui:3D}} ([3D tekshirish koʻrinishi](topic:check-in-3d)).
- Hech qanday PDF ochilmagan boʻlsa, oʻrtada besh bosqichli qisqa qoʻllanma koʻrinadi.
- Gʻildirak kursor turgan joyda kattalashtiradi. Surish uchun sudrang. Qarang: [Klaviatura va sichqoncha](topic:keyboard).
- {{ui:Avtosanash}} ishlatilganda, varaqning yuqorisida uning boshqaruvi bilan panel paydo boʻladi.

## Elementlar (oʻngda)

Yuqorida {{ui:Hisob maydoni}} roʻyxati: yangi belgilar qaysi bino, qavat yoki bosqichga tushishi ([Hisob maydonlari](topic:bid-areas)).

- {{ui:Yangi element}} kichik shakl ochadi: nom, tur ({{ui:Chiziqli (uzunlik)}}, {{ui:Maydon}} yoki {{ui:Sanash}}) va {{ui:Qoʻshish}}.
- Roʻyxatda har bir elementning rangi, tur belgisi, nomi va miqdori koʻrsatiladi. Elementni bosing, shu bilan chizasiz va uning belgilari har bir varaqda yoritiladi. Yana bossangiz, yoritish toʻxtaydi.
- Roʻyxat ostida **Element: (name)** bu element tahrirlagichi: nom, tur, rang, birlik, balandlik yoki chuqurlik, chiqindi, material va ish haqi stavkalari, oʻlchangan qiymatlar hamda {{ui:Yigʻma}}. Qarang: [Hajm elementlarini yaratish](topic:create-items).
- **Tanlangan belgi** belgini tanlaganingizda chiqadi: u qaysi elementga tegishli, uning varagʻi, oʻlchovlari va {{ui:Kesik qoʻshish}} hamda {{ui:Belgini oʻchirish}} kabi tugmalar. Bir nechta belgi tanlanganda u **Tanlangan belgilar** boʻladi: har bir elementdan nechta, va {{ui:Nusxalash}}, {{ui:Nusxa olish}}, {{ui:Kesish}} hamda {{ui:Belgilarni oʻchirish}} tugmalari.
- Element tahrirlagichi {{ui:Elementni nusxalash}} va {{ui:Elementni takrorlash}} bilan tugaydi: belgilarsiz, yigʻmasi va xarajatlari bilan element. Qarang: [Belgilarni nusxalash, qoʻyish va takrorlash](topic:copy-paste).

## Miqdorlar (pastda)

- {{ui:Element boʻyicha}} har bir elementni va uning yigʻma tarkibiy qismlarini miqdor, chiqindi, stavka va hisoblangan xarajatlar bilan roʻyxatlaydi. Chiqindi va stavkalarni jadvalga toʻgʻridan-toʻgʻri yozishingiz mumkin.
- {{ui:Varaq boʻyicha}} har bir elementning har bir varagʻidagi miqdorni roʻyxatlaydi.
- Biror narsa jamidan chiqarib qoldirilganda **Toʻliq emas:** bilan boshlanadigan ogohlantirish koʻrinadi.
- {{ui:Umumiy jami}} sarlavhaning oʻng tomonida.
- Eng oʻngdagi tugma jadvalni yashiradi yoki koʻrsatadi, varaqqa koʻproq joy berish uchun.

Qarang: [Miqdorlar va smetani oʻqish](topic:read-quantities).

## Holat paneli (pastda)

Chapdan oʻngga: chizayotganda jonli oʻlchov (uzunlik, maydon, radius yoki tekshirish natijasi), uzunlikni yozayotganda {{ui:Kiritish}} katagi, TakeoffCraft dan xabarlar, "Shift 45° ga tutib oladi" eslatmasi (yoki [Sozlamalar](topic:settings) da yoqilgan boʻlsa, "45° ga tutib olinadi; Shift burchakni erkin qoldiradi"), {{ui:Tutib olish}} tugmasi (chizma chiziqlariga tutib olish, yoqilganda ajratib koʻrsatiladi; {{key:F3}}) va kattalashtirish foizi.

:::tip
Biror narsa boʻlmasa, holat panelini oʻqing. TakeoffCraft u yerda bosishni nega rad etganini tushuntiradi, masalan: "Bu varaqda hali masshtab yoʻq".
:::

## Boshqa joylashuvlar

Yuqoridagilarning hammasi {{ui:CadCraft klassik}} joylashuvi, boshlanish nuqtasi. {{ui:Sozlamalar}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Joylashuv}} yana ikkitasini taklif qiladi; bir xil asboblar va tugmalar uchalasida ham ishlaydi, va {{ui:CadCraft klassik}} ni yana tanlasangiz, har bir boshqaruv oʻz joyiga qaytadi.

| Joylashuv | TakeoffCraft da |
|---|---|
| {{ui:Lenta va loyiha brauzeri}} | Yuqorida {{ui:Hajmlar lentasi}} ([Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse)), ishlayotgan asbob uchun panel, har bir ochgan varaq uchun yorliq (chizmaning Model va joylashuvlari ham varaq) va varaq ostida masshtab presetlari hamda {{ui:Sahifaga moslash}}. Chap panelda {{ui:Xususiyatlar}} (tanlangan element, eslatma yoki belgi) va uning ostida {{ui:Hajmlar koʻrigi}}: {{ui:Varaqlar}} (ochish uchun bosing, yorliqda ochiladi), {{ui:Shartlar}} (chizish uchun bosing) va {{ui:Smeta}} (har bir elementning jami va umumiy jami). Kichik rasmlar uning ikkinchi yorligʻi. |
| {{ui:Asboblar qutisi va axborot qutisi}} | Varaq ustidagi asboblar paneli, {{ui:Hisob maydoni}} bilan axborot qutisi, ishlayotgan asbob yoki tanlov va varaq paneli, varaqning chap tomonida hajm asboblari ustuni, har bir varaq uchun yorliq, hamda varaq ostida {{ui:Tutib olish}} va kattalashtirish. |

[3D tekshirish koʻrinishi](topic:check-in-3d) ochiq boʻlganda varaq yorliqlari va varaq ostidagi panel chetga suriladi; qayta oʻlchash uchun 3D koʻrinishni yoping. Telefonda doim telefon joylashuvi ishlaydi.

## Toʻliq ekran va mavzular

Ilova panelidagi {{ui:Toʻliq ekran}} tugmasi yoki {{key:Ctrl+Shift+F}} (Control har bir platformada, Mac da ham) oddiy, toʻliq ekran va panellari yashirilgan toʻliq ekran rejimlari boʻylab aylanadi. Panellar yashirilganda, ularni qayta koʻrsatish uchun sichqonchani yuqori chetga olib boring.

{{ui:Qogʻoz}} yorugʻ mavzu, {{ui:Model}} esa qorongʻi. {{ui:Model}} da chizma faqat ekranda teskari koʻrinadi (qorongʻi fonda yorugʻ chiziqlar); eksport hech qachon oʻzgarmaydi.
