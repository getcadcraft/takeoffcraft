---
title: Smetani va belgilangan PDF ni eksport qilish
summary: Smetani jonli formulalari bilan XLSX ish kitobi yoki CSV sifatida hamda PDF fayllaringizning hajmlar chizilgan nusxalarini yuklab oling.
keywords: taklif, taklif xulosasi, eksport, xlsx, elektron jadval, ish kitobi, csv, belgilangan pdf, hajmlarni chop etish, hisobot, ulashish, yuborish, legenda
from: 334f89c7
---

Eksportlar yuklab olishlardir. Ular hajmlar va ochiq PDF lardan kompyuteringizda tayyorlanadi; hech narsa hech qayerga yuborilmaydi.

## Smeta elektron jadval sifatida (XLSX)

1. Asboblar panelidagi {{ui:Export}} menyusini oching va {{ui:XLSX}} ni tanlang.
   Brauzeringiz `(name).xlsx` ni yuklab oladi. Holat satrida "Eksport qilindi: (name).xlsx (jonli formulali smeta, varaq boʻyicha, belgilar, masshtablar)." deb yoziladi va smeta toʻliq boʻlmasa ogohlantirish qoʻshiladi.
2. Uni elektron jadval dasturida oching.

Ish kitobida toʻrtta varaq bor va quyidagi hisobotlar tegishli boʻlganda qoʻshiladi:

| Varaq | Nimani saqlaydi |
|---|---|
| Estimate | Har bir element va komponent uchun qator: miqdor, chiqindi, chiqindili miqdor, stavkalar, material, mehnat, jami, izohlar. Pastda umumiy jami. |
| By sheet | Har bir elementning har bir varagʻidagi miqdori, belgilar soni bilan. |
| Marks | Har bir belgi: varaq, element, turi, miqdori va tafsilot (segment uzunliklari, yalpi va kesik maydonlar, perimetr). |
| Scales | Masshtabi yoki belgilari bor har bir varaq: masshtabi, qanday oʻrnatilgani (preset yoki qaysi masofada kalibrlangani) va PDF birligiga fut. |
| Takeoff summary | Har bir elementning miqdori, CSI raqami, belgilari va varaqlari, narxlarsiz. |
| Material list | Hajmlar boʻyicha har bir yigʻma qismi jamlangan (bir nechta elementda ishlatilgan bir xil qism bitta qator), chiqindi va material narxi hamda uni ishlatadigan elementlar bilan. |
| Quote request | Yetkazib beruvchiga yuboriladigan material roʻyxati: chiqindili miqdorlar, boʻsh birlik narxi ustuni, narxlar kiritilganda toʻladigan hisoblar va jami. |
| By division | CSI MasterFormat boʻlimlari boʻyicha material, mehnat va jami, elementlarda {{ui:CSI number}} boʻlganda. |

[Taklif xulosasi](topic:bid-summary) bilan Estimate varagʻi ham oʻz belgilashlari (mehnat yuki, savdo soligʻi, umumiy xarajatlar, foyda, kafolat va taklif) bilan tugaydi, jonli formulalar sifatida.

Estimate varagʻi **jonli formulalarni** saqlaydi: chiqindili miqdor, yaxlitlangan material va mehnat summalari, har bir qatorning jami va umumiy jami. Elektron jadval dasturlari ularni qayta hisoblaydi, shuning uchun elektron jadvalda stavka yoki chiqindini oʻzgartirsangiz, jamilar oʻzgaradi. TakeoffCraft hisoblagan raqamlar ham katakchalarda saqlanadi va sentgacha mos keladi.

Izohlar ustunida har bir komponentning formulasi, formula xatolari, masshtabsiz varaqdagi belgilar, devor maydoni va perimetr koʻrsatiladi. Biror narsa chiqarib tashlangan boʻlsa, umumiy jami qatorida "Incomplete: see the notes above" (Toʻliq emas: yuqoridagi izohlarga qarang) yoziladi.

Ish kitobi LibreOffice Calc da tekshirilgan, u bir xil jamilarni qayta hisoblagan. U hali Excel da ochilmagan. Ustun boʻyicha batafsil maʼlumot: [Eksport ustunlari](topic:export-columns).

## Smeta CSV sifatida

{{ui:Export}} menyusini oching va {{ui:CSV}} ni tanlang. Siz `(name).csv` ni olasiz: Estimate varagʻidagi bir xil qatorlar va ustunlar, oddiy qiymatlar sifatida (formulasiz), hamda umumiy jami. Uni boshqa smeta yoki buxgalteriya tizimiga joylashtirish uchun ishlating.

Bu CSV faqat smetani oʻz ichiga oladi; varaq boʻyicha miqdorlar va belgilar roʻyxati uchun XLSX dan foydalaning. Xuddi shu menyudagi {{ui:Material list}} faqat material roʻyxatini buyurtma uchun CSV sifatida saqlaydi.

## Smeta Google Sheets da

Miqdorlar jadvali ustidagi **Google Sheets uchun nusxalash** smetani tab bilan ajratilgan matn sifatida buferga qoʻyadi, CSV bilan bir xil qatorlarda. Google Sheet da A1 katakchasini bosing va qoʻying. TakeoffCraft Google ga kirmaydi va u yerga hech narsa yubormaydi.

## Yetishmayotgan stavkalar va tasdiqlash

Miqdori bor, lekin stavkasi yoʻq qator izohida **Stavka yoʻq** deb yoziladi, eksport ularni jamlarda hisobga oladi. Smeta tasdiqlangan boʻlsa, eksport kim, qachon va qaysi jami uchun tasdiqlaganini koʻrsatadi. Qarang: [Yetishmayotgan stavkalar va smetani tasdiqlash](topic:sign-off-the-estimate).

## Belgilangan PDF

1. Chizilishi kerak boʻlgan belgilari bor PDF larni oching.
2. {{ui:Export}} menyusini oching va {{ui:Marked PDF}} ni tanlang.
   "Belgilangan PDF yozilmoqda…" koʻrinadi, soʻngra brauzeringiz har bir belgilangan PDF uchun bitta faylni yuklab oladi, `(PDF name) (takeoff).pdf` nomi bilan.

Nusxada:

- uchastkalar elementning rangidagi chiziqlar sifatida chiziladi,
- maydonlar yengil toʻldirilgan va qattiq kontur bilan, kesiklar ochiq qoldirilgan,
- sanashlar nuqtalar boʻladi,
- belgilari bor har bir sahifada pastki chap burchagida kichik legenda boʻladi: shu sahifadagi har bir elementning rangi, nomi va miqdori.

Asl PDF lar oʻzgarmaydi.

Izohlar:

- Faqat ochiq PDF lar yoziladi. Ochiq boʻlmagan PDF lardagi belgilar jamlarda qoladi, lekin chizilmaydi; avval ularni oching.
- Legenda nomlari standart PDF shriftidan foydalanadi. Koʻrsata olmaydigan harflar "?" bilan chop etiladi.
- Shifrlangan PDF ni belgilar bilan nusxalab boʻlmaydi: "Bu PDF parol bilan himoyalangan yoki shifrlangan, shuning uchun belgilangan nusxa yozib boʻlmaydi. Hajmlarning oʻzi yaxshi; buning oʻrniga elektron jadvalni eksport qiling."
- Yorliqdagi birinchi {{ui:Marked PDF}} PDF yozuvchisini yuklaydi. Oflaynda u faqat ilova panelida {{ui:Offline ready}} koʻrinsa mavjud boʻladi; qarang: [Oflaynda ishlash](common:offline).

:::chromium
Bir nechta belgilangan PDF bilan Chrome va Edge bir marta soʻrashi mumkin, bu sayt bir nechta fayl yuklab olishi mumkinmi. Ruxsat berish ni tanlang, aks holda faqat birinchi fayl olinadi.
:::

## Eksport qilinadigan narsa yoʻqmi?

- {{ui:XLSX}} va {{ui:CSV}} kamida bitta elementni talab qiladi: "Eksport uchun hali hech narsa yoʻq: element yarating va uni oʻlchang."
- {{ui:Marked PDF}} ochiq PDF da belgilarni talab qiladi: "Ochiq PDF larda hali belgilar yoʻq."

## Hajmlarni ham saqlang

Eksport bu hisobot. Hajmlar ustida keyinroq ishlashni davom ettirish uchun {{ui:Save takeoff}} ni ham tanlang: [Hajmlarni saqlash va qayta ochish](topic:save-and-reopen) ga qarang.

Qoʻshimcha xarajatlar, foyda, soliq va kafolat qoʻshish hamda taklif yuborish uchun [Taklif xulosasi va taklif](topic:bid-summary) ga qarang.
