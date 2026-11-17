---
title: Maydonlarni kesiklar bilan oʻlchash
summary: Pollar, shiftlar va plitalarning konturini chizing, ulardan teshiklarni kesib oling, egri chekkalar, aylanalar va dumaloq kesiklar qoʻshing, maydon va perimetrni oʻqing.
keywords: xona toʻldirish, oqim toʻldirish, boʻyoq chelagi, xonani bosish, avtomaydon, orqaga ayirish, backout, ustun, shaxta, bir nechta elementdan ayirish, maydon, kontur, kvadrat fut, sf, kesik, teshik, ayirish, aylana, dumaloq, yoy, perimetr, pol, shift, plita
from: 34648db7
---

Maydon elementi yopiq maydonni oʻlchaydi. Har bir kontur undan kesib olingan teshiklarga ega boʻlishi mumkin (shaxta, ustun, gulzor), va uning chekkalari toʻgʻri yoki egri boʻlishi mumkin.

Boshlashdan oldin: varaqqa masshtab kerak ([Masshtabni oʻrnatish](topic:set-the-scale)) va maydon elementi kerak ([Hajm elementlarini yaratish](topic:create-items)).

## Maydon konturini chizish

1. {{ui:Items}} ostidagi maydon elementini bosing.
2. Asboblar panelida {{ui:Area}} ni tanlang yoki {{key:A}} ni bosing.
3. Xona yoki plitaning har bir burchagini ketma-ket bosing. 0°, 45° va 90° chekkalar uchun {{key:Shift}} ni ushlab turing.
   Uchinchi nuqtadan boshlab kontur toʻladi va holat satrida "Maydon" hamda "perimetr" koʻrinadi. Birinchi nuqta atrofida kichik halqa paydo boʻladi.
4. Konturni yoping: birinchi nuqtani (uning halqasi ichida) bosing, {{key:Enter}} ni bosing, ikki marta bosing yoki oʻng tugmani bosing. Maydon elementining rangida yengil toʻldiriladi, kvadrat futlarda belgilanadi va tanlangan belgiga aylanadi.

{{key:Backspace}} oxirgi burchakni olib tashlaydi; {{key:Esc}} konturni tashlab yuboradi.

Oʻzini kesib oʻtgan kontur rad etiladi: "Kontur oʻzini kesib oʻtadi, shuning uchun uning maydoni notoʻgʻri boʻladi. Uni kesishmasdan qayta chizing." Sakkizsimon shaklni ikki maydon sifatida chizing.

## Egri chekkalar

Kontur chizayotganda yoy rejimini yoqing ({{ui:Arc}} yoki {{key:R}}). Burchakdan keyin egri chiziq boʻylab nuqtani, soʻng egri tugaydigan joyni bosing. Konturni egri bilan yopish uchun oxirgi bosishni birinchi nuqtada qiling. Maydon va perimetr aniq egri chiziqdan hisoblanadi. Toʻgʻri chekkalar uchun yana {{key:R}} ni bosing. Keyinchalik egrini oʻzgartirish uchun maydonni tanlang va yoy oʻrtasidagi dumaloq dastakni sudrang. Qarang: [Chiziqli yoʻllarni oʻlchash](topic:measure-linear#arcs-and-curved-walls).

## Aylana

1. Maydon elementi bilan {{ui:Circle}} ni tanlang yoki {{key:O}} ni bosing.
2. Markazni bosing.
3. Chekkadagi istalgan nuqtani bosing. Siz harakatlanayotganda holat satri radius va maydonni koʻrsatadi. Aylana aniq maydon va perimetrli maydon belgisi sifatida qoʻshiladi.

## Xonani bitta bosish bilan toʻldirish

Xonalar yopiq devorlar sifatida chizilgan boʻlsa, {{ui:Room}} ({{key:B}}) bitta bosishda pol maydonini oladi:

1. Maydon elementini tanlang (masalan, pol qoplamasi) va varaqqa masshtab bering.
2. {{ui:Takeoff}} guruhida {{ui:Room}} ni tanlang yoki {{key:B}} ni bosing.
3. Xona ichida, ochiq polda bosing (chiziq yoki yorliq ustida emas).

TakeoffCraft varaqning chiziqlarini oʻqiydi, bosish atrofidagi boʻshliqni topadi va uni devorlarning ichki yuzlari boʻylab joriy elementning maydoni sifatida konturlaydi. **4'-0"** gacha boʻlgan eshik teshiklari yopiq deb hisoblanadi, shuning uchun kontur eshik ogʻzi boʻylab toʻgʻri oʻtadi; **Sozlamalar › TakeoffCraft › Xona toʻldirish ochiqliklarni yopish chegarasi** bu kenglikni oʻzgartiradi (3'-0" dan 8'-0" gacha). Xona nomlari, mebel va jihozlar xonada teshik hosil qilmaydi.

Quyidagi hollarda u rad etadi va sababini aytadi:

- bosish chiziq ustida ("Bu chiziq ustida");
- boʻshliq yopiq emas: sozlamadagidan kengroq ochiqlik uni varaq chetiga chiqarib yuboradi. Sozlamani oshiring yoki bu xonani qoʻlda {{ui:Area}} bilan konturlang;
- boʻshliq juda kichik (belgi, xona emas).

Eshik sozlamadan kengroq boʻlsa, toʻldirish keyingi xonaga oʻtib, ikkalasini birga konturlaydi: ortga qaytaring ({{key:Mod+Z}}), sozlamani oshiring va yana bosing. Konturni boshqa maydonlardek tekshiring: tuzatish uchun burchaklarini sudrang. Skanerlangan varaq xuddi shunday ishlaydi, lekin uning chiziqlari yetarlicha qoramtir boʻlishi kerak; och kulrang chiziqlar toʻldirishni toʻxtatmasligi mumkin.

## Maydondan teshik kesib olish

1. {{ui:Select}} ({{key:V}}) ni tanlang va maydonni bosing. Uning burchaklarida kvadrat dastaklar koʻrinadi.
2. Asboblar panelida {{ui:Cut-out}} ni tanlang (yoki {{key:X}} ni bosing) yoki **Tanlangan belgi** ostida {{ui:Add a cut-out}} ni tanlang.
3. Teshik burchaklarini maydon ichida bosing. Bu yerda ham yoy rejimi ishlaydi.
4. Uni maydon kabi yoping: birinchi nuqtasini bosing, {{key:Enter}} ni bosing, ikki marta bosing yoki oʻng tugmani bosing. Teshik toʻldirilmay qoladi va holat satrida "Kesik qoʻshildi. Yana chizing yoki Esc ni bosing." yoziladi.
5. Xuddi shu maydonda yana teshiklar chizing yoki {{key:Esc}} ni bosing.

Dumaloq teshik uchun **Tanlangan belgi** ostida {{ui:Add a round cut-out}} ni tanlang, markazini, soʻng chekkasidagi nuqtani bosing.

Kesik maydon ichida toʻliq joylashishi va boshqa kesik bilan ustma-ust tushmasligi kerak. Aks holda TakeoffCraft uni rad etadi: "Kesik maydon ichida toʻliq joylashishi kerak." yoki "Kesiklar bir-biri bilan ustma-ust tushishi mumkin emas."

Oxirgi teshikni yana olib tashlash uchun {{ui:Remove last cut-out}} ni tanlang.

## Teskari ayirishlar: ustunlar, shaxtalar va bir necha elementdan ayriladigan ochiqliklar

Kesik bitta maydon belgisiga tegishli. **Teskari ayirish** bir marta chiziladi va siz tanlagan elementlar uchun u ustma-ust tushgan har bir maydondan chiqariladi: ustunlarni bir marta chizing, ular pol qoplamasi, shift va plitadan birga ayriladi.

1. Ular uchun maydon elementi yarating, masalan "Ustunlar".
2. Element sozlamalarida **Teskari ayirish: uning belgilari maydonini boshqa elementlardan chiqaradi** ni belgilang. Boshqa maydon elementlaringiz roʻyxati paydo boʻladi, hammasi belgilangan: teskari ayirishlar tegmasligi kerak boʻlganlarining belgisini olib tashlang (masalan, devorlardagi boʻyoq).
3. Ustunlarni odatdagidek {{ui:Area}} yoki {{ui:Circle}} bilan oʻlchang. Har biri shtrixli chiziladi.

Bir varaqdagi belgilangan elementning har bir maydon belgisi teskari ayirish qoplagan qismini yoʻqotadi: u ichida boʻlsa, butun teskari ayirish; chekkani kesib oʻtsa, faqat ustma-ust tushgan qism; kesik ichida esa hech narsa. Tanlangan maydon panelida **Teskari ayirishlar** va qolgan maydon koʻrsatiladi. Elementning miqdori, uning yigʻma formulalari, xarajatlar, 3D tekshiruv koʻrinishi va eksportning hammasi qolgan maydondan foydalanadi; smetaning izohlarida teskari ayirishlar qancha olib tashlaganligi yoziladi. Teskari ayirish elementining oʻzi oʻz maydonini hisoblaydi (agar narxlamasangiz, xarajatlarini nolga qoldiring).

Teskari ayirish **qavariq** boʻlishi kerak: toʻrtburchak, aylana yoki ichki burchagi boʻlmagan istalgan kontur. TakeoffCraft qavariq boʻlmaganini chizishni rad etadi; L shaklidagi shaxtani ikkita teskari ayirish sifatida chizing. Teskari ayirishlarda kesik boʻlishi mumkin emas; bir-biri bilan ustma-ust tushgan ikki teskari ayirishning ikkalasi ham hisobga olinadi.

Perimetr (`P`) oʻzgarmaydi: teskari ayirishlar faqat maydonni olib tashlaydi.

## Maydonni oʻqish

Maydonni tanlang. **Tanlangan belgi** quyidagilarni koʻrsatadi:

| Qator | Maʼnosi |
|---|---|
| Maydon | Sof maydon: kontur minus kesiklar. Element aynan shuni hisoblaydi. |
| Kontur | Kontur ichidagi yalpi maydon (kesiklar boʻlganda koʻrsatiladi). |
| Kesiklar | Nechta teshik va ularning umumiy maydoni. |
| Perimetr | Kontur chekkasining uzunligi, **va** har bir kesik chekkalari ("kesiklar bilan"). |

Perimetrga kesik chekkalari ataylab kiritilgan, masalan, teshik atrofidan oʻtadigan chekka qoliplari yoki poydevor uchun. Faqat tashqi chekka kerak boʻlsa, teshiklarni shu elementdan chiqarib qoʻying yoki tashqi chekkani chiziqli yoʻl sifatida oʻlchang.

Elementning {{ui:Unit}} jami qanday koʻrsatilishini belgilaydi: SF, SY yoki m². **Tanlangan belgi** paneli va holat satri doim kvadrat futlarni koʻrsatadi.

## Maydonni tuzatish

- **Burchakni siljitish**: maydonni tanlang va burchak dastagini sudrang (teshiklarda ham dastaklar bor). Agar yangi shakl oʻzini kesib oʻtsa yoki teshikni tashqariga surib chiqarsa, burchak qaytariladi: "Nuqta qaytarildi."
- **Boshqa elementga oʻtkazish**: **Tanlangan belgi** ostidagi **Element** roʻyxatidan boshqa maydon elementini tanlang.
- **Oʻchirish**: {{key:Delete}}, asboblar panelidagi {{ui:More}} menyusidagi {{ui:Delete}} yoki {{ui:Delete mark}}.

## Hajmlar uchun chuqurlik

Maydon elementiga {{ui:Depth}} bering (masalan, plita uchun `0'-4"`) va kubik yard olish uchun yigʻma tarkibiy qismida `A * H / 27` dan foydalaning. Qarang: [Yigʻmalar va formulalar](topic:assemblies).
