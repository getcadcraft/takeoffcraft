---
title: Klaviatura va sichqoncha
summary: TakeoffCraft dagi har bir tugma, sichqoncha, sensorli panel va sensorli ekran harakati, guruhlangan holda, platformalar farqlari bilan.
keywords: tugmalar, yorliqlar, tezkor tugmalar, klaviatura, sichqoncha, sensorli panel, sensorli ekran, surish, kattalashtirish, gʻildirak, oʻng tugma, ikki marta bosish, Space, Shift, nusxalash, qoʻyish, kesish, dublikat, hammasini tanlash
from: 6f2c441d
---

Harf tugmalari kursor sahifaning istalgan joyida boʻlganda va siz maydonga matn kiritmayotganingizda ishlaydi. Dialog oynasi ochiq boʻlsa, uning oʻz tugmalari ishlaydi. Harflar {{key:Shift}} bilan yoki unisiz ishlaydi.

## Asboblar

| Tugma | Asbob |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Circle}} |
| {{key:B}} | {{ui:Room}} (xonani bitta bosish bilan toʻldirish) |
| {{key:R}} | {{ui:Arc}} yoqish yoki oʻchirish ({{ui:Linear}}, {{ui:Area}} va {{ui:Cut-out}} da) |
| {{key:E}} | {{ui:Deduct}} yoqish yoki oʻchirish: yoʻlning keyingi kesmalari chiziladi, lekin hisobga olinmaydi |
| Chizish paytida raqam, `@` yoki `#` | {{ui:Type}} maydonini oching: uzunlik yoki koordinatalarni yozing, {{key:Enter}} nuqtani qoʻyadi ([Chiziqli yoʻllarni oʻlchash](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Cut-out}} (avval maydonni tanlang) |
| {{key:C}} | {{ui:Count}} |
| {{key:S}} | {{ui:Auto count}} |
| {{key:K}} | {{ui:Calibrate}} |
| {{key:D}} | Masshtabni {{ui:Check}} |

## Chizish paytida

| Tugma yoki harakat | Vazifasi |
|---|---|
| Bosish | Nuqta qoʻyish (sanash bilan nuqta). |
| {{key:P}} | Yoʻl: PDF chizigʻining butun ulangan yoʻlini yoki bosilgan joy atrofidagi konturni tanlang ([PDF chiziqlarini tanlash](topic:pick-the-lines)). |
| {{key:F3}} | Chizma chiziqlariga tortishni yoqish yoki oʻchirish ([Chizma chiziqlariga tortish](topic:snap-to-the-drawing)). |
| {{key:Shift}} bosib turilganda bosish | Kesmani oxirgi nuqtadan 0°, 45°, 90° yoki 135° ga tortadi. Yoy nuqtalari va aylanalar uchun emas. |
| Ikki marta bosish | Yoʻlni tugatish, yoki maydon yoki kesikni yopish. |
| {{key:Enter}} | Yoʻlni tugatish, yoki maydon yoki kesikni yopish. |
| Oʻng tugma bosish (siljitmasdan) | Yoʻlni tugatish, yoki maydon yoki kesikni yopish. |
| Birinchi nuqtani bosish | Maydon yoki kesikni yopish (uchinchi nuqtadan boshlab). |
| {{key:Backspace}} yoki {{key:Delete}} | Oxirgi nuqtani olib tashlash (avval kutilayotgan yoy nuqtasi). |
| {{key:Esc}} | Kutilayotgan yoy nuqtasini tashlash; keyin tugallanmagan belgini bekor qilish; keyin {{ui:Select}} ga qaytish. |

## Tanlash va tahrirlash

| Tugma yoki harakat | Vazifasi |
|---|---|
| Belgini bosish ({{ui:Select}} asbobi) | Uni tanlash va uning elementini joriy qilish. |
| Belgini {{key:Shift}} + bosish | Tanlovga qoʻshish yoki undan olib tashlash. |
| {{key:Mod+A}} | Ochiq varaqdagi har bir belgini tanlash. |
| Burchak dastagini sudrash | Shu nuqtani siljitish ({{key:Shift}} 45° ga tortadi). Bitta belgi tanlanganda ishlaydi. |
| {{key:Delete}} yoki {{key:Backspace}} | Tanlangan belgilarni oʻchirish (chizmayotganda emas). |
| {{key:Esc}} | Hech narsani tanlamaslik: tanlovni va tekshiruv chizigʻini tozalash. |
| {{key:Mod+Z}} | Ortga qaytarish. |
| {{key:Mod+Y}} yoki {{key:Mod+Shift+Z}} | Qayta bajarish. |

## Nusxalash va qoʻyish

| Tugma | Vazifasi |
|---|---|
| {{key:Mod+C}} | Tanlangan belgilarni elementlari bilan nusxalash. |
| {{key:Mod+X}} | Kesish: tanlangan belgilarni nusxalash, soʻng ularni oʻchirish. |
| {{key:Mod+V}} | Qoʻyish: nusxa kursorga ergashadi; joyini bosing. |
| {{key:Mod+Shift+V}} | Joyida qoʻyish: ochiq varaqdagi oʻsha joyga. |
| {{key:Mod+D}} | Tanlangan belgilarni dublikatlash: nusxa kursorga ergashadi; joyini bosing. |
| {{key:Esc}} | Hech narsa qoʻymaslik: kursorda turgan qoʻyish yoki dublikatni bekor qilish. |

Harflarning oʻzi hamon asboblarni tanlaydi ({{key:C}} — {{ui:Count}}, {{key:D}} — {{ui:Check}}, {{key:X}} — {{ui:Cut-out}}, {{key:V}} — {{ui:Select}}, {{key:A}} — {{ui:Area}}); faqat ular bilan {{key:Mod}} nusxalaydi va qoʻyadi. Matn maydonida bu tugmalar odatdagidek matnni nusxalaydi va qoʻyadi. Qarang: [Belgilarni nusxalash, qoʻyish va dublikatlash](topic:copy-paste).

:::warning
Chizmayotganingizda {{key:Backspace}} tanlangan belgini oʻchiradi. Tasodifan shunday boʻlsa, {{key:Mod+Z}} uni qaytaradi.
:::

## Fayllar

| Tugma | Vazifasi |
|---|---|
| {{key:Mod+O}} | {{ui:Open plans}} |
| {{key:Mod+S}} | {{ui:Save takeoff}} |

Bu ikkisi maydonga yozayotganingizda ham ishlaydi.

## Koʻrinish va varaqlar

| Tugma yoki harakat | Vazifasi |
|---|---|
| Sichqoncha gʻildiragi | Kursor joyida kattalashtirish va kichraytirish. |
| Sudrash (chap, oʻrta yoki oʻng tugma) | Surish. {{ui:Auto count}} da chapdan sudrash oʻrniga qidiruv oynasini chizadi. |
| {{key:Space}} bosib turib sudrash | Istalgan asbobda surish. |
| {{key:F}} | {{ui:Fit page}} |
| {{key:W}} | {{ui:Fit width}} |
| {{key:Plus}} yoki {{key:=}} | Koʻrinish oʻrtasida kattalashtirish. |
| {{key:Minus}} | Koʻrinish oʻrtasida kichraytirish. |
| {{key:PageDown}} / {{key:PageUp}} | Varaqlar roʻyxatida keyingi yoki oldingi varaq. |
| {{key:Ctrl+Shift+F}} | Toʻliq ekran rejimlarini almashtirish (har bir platformada Control, Mac da ham). |
| {{key:F1}} | Bu yordamni ochish yoki yopish, yon panel. |
| {{key:3}} | Varaqning 3D tekshiruv koʻrinishi, yoqish yoki oʻchirish. |

## 3D koʻrinish

| Tugma yoki harakat | Vazifasi |
|---|---|
| Sudrash yoki oʻrta tugma bilan sudrash | Aylantirish. |
| {{key:Shift}} + sudrash yoki oʻng tugma bilan sudrash | Surish. |
| Sichqoncha gʻildiragi | Kursor joyida kattalashtirish. Sensorli panelda ikki barmoq surish aylantiradi, chimdish kattalashtiradi. |
| Bosish | Kursor ostidagi belgini tanlash ({{key:Shift}} + bosish qoʻshadi yoki olib tashlaydi). |
| {{key:F}} yoki {{key:W}} | Hammasini koʻrsatish. |
| {{key:3}} | Yassi varaqqa qaytish. |

Qarang: [Hajmlarni 3D da tekshirish](topic:check-in-3d).

## Avtosanash

| Tugma yoki harakat | Vazifasi |
|---|---|
| Quti sudrash | Qidiriladigan belgini quti bilan belgilash (qidiruvni boshlaydi). |
| Moslik qutisini bosish | Uni rad etish yoki tiklash. |
| {{key:Esc}} | Ishlayotgan qidiruvni bekor qilish yoki koʻrib chiqishni bekor qilish. |

## Yordam

| Tugma | Vazifasi |
|---|---|
| {{key:F1}} | Yordam panelini ochish yoki yopish (ilova panelidagi {{ui:Help}} tugmasi ham). U har bir asbobda ishlaydi, maydonga yozayotganda ham. |
| {{key:Esc}} | Yordam panelini yopish. Uning qidiruv oynasida birinchi {{key:Esc}} qidiruvni tozalaydi. Panel ochiq boʻlganda, varaqni bosgandan keyin bosilgan {{key:Esc}} avval panelni yopadi; TakeoffCraft da bekor qilish uchun yana bosing. |

:::mac
Koʻpgina Mac klaviaturalarida yuqori qator yorqinlik va ovozni boshqaradi. {{key:F1}} uchun fn ni bosing yoki Tizim sozlamalari boʻlimida, Keyboard ostida "Use F1, F2, etc. keys as standard function keys" ni yoqing.
:::

## Dialoglar va maydonlar

| Tugma | Vazifasi |
|---|---|
| {{key:Enter}} | Maydonda: qiymatni qoʻllash. Kalibrlash dialogida: {{ui:Set the scale}}. |
| {{key:Esc}} | Dialogni yopish ({{ui:Cancel}} kabi); {{ui:New item}} shaklini yopish. |
| {{key:Tab}} | Keyingi maydonga oʻtish. |

## Platforma izohlari

:::mac
- {{key:Mod}} — Command tugmasi: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Toʻliq ekran istisno: Control+Shift+F.
- Oʻng tugma bosish — sensorli panelda ikki barmoq bosish; buning uchun Tizim sozlamalari, Trackpad boʻlimida ikkilamchi bosish yoqilgan boʻlishi kerak. TakeoffCraft faqat ikkilamchi tugmani oʻqiydi; Control-bosish oddiy bosish sifatida hisoblanib, nuqta qoʻshishi mumkin.
- Sensorli panelda ikki barmoq aylantirish varaqni kattalashtiradi (u aylanmaydi). Surish uchun bosib sudrang yoki {{key:Space}} ni ushlab sudrang.
- Page Up va Page Down — klaviaturada boʻlmaganda fn bilan yuqori va pastki strelkalar.
- {{key:Backspace}} — delete deb yozilgan tugma.
:::

:::windows
- {{key:Mod}} — Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Noutbuk sensorli panelida ikki barmoq aylantirish varaqni kattalashtiradi. Surish uchun bosib sudrang.
:::

:::linux
- {{key:Mod}} — Ctrl. Baʼzi ish stollari oʻz Ctrl+Alt yoki Super yorliqlaridan foydalanadi; TakeoffCraft ularning hech birini ishlatmaydi.
- Sensorli panelda ikki barmoq aylantirish varaqni kattalashtiradi. Surish uchun bosib sudrang.
:::

:::touch
TakeoffCraft sensorli ekranni bitta kursor sifatida oʻqiydi:

- Teginish nuqta qoʻyadi, belgini tanlaydi yoki sanash nuqtasini qoʻshadi.
- Bitta barmoq bilan sudrash varaqni suradi ({{ui:Auto count}} da qidiruv qutisini chizadi).
- Chimdib kattalashtirish hali qoʻllab-quvvatlanmaydi. {{ui:Fit page}} va {{ui:Fit width}} dan foydalaning yoki klaviaturada {{key:Plus}} va {{key:Minus}}.
- Maydonni yopish uchun birinchi nuqtasiga teging. Yoʻlni tugatish uchun, brauzeringiz ikki marta teginishni ikki marta bosishga aylantiradigan joyda ikki marta teging yoki klaviaturada {{key:Enter}} ni bosing.
- Teginmaguncha jonli uzunlik koʻrsatkichi yoʻq, chunki kursor ustida turish yoʻq.

Hozircha hajmlarni hisoblash uchun klaviatura va sichqoncha yoki sensorli panel yaxshiroq.
:::

## Brauzer saqlaydigan tugmalar

Brauzerlar baʼzi yorliqlarni oʻzlari uchun saqlaydi, va sahifa ulardan foydalana olmaydi: yorliqni yopish ({{key:Mod+W}}), yangi yorliq yoki oyna ({{key:Mod+T}}, {{key:Mod+N}}) va brauzer kattalashtirish ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Shu sababli TakeoffCraft varaqni gʻildirak va oddiy {{key:Plus}} hamda {{key:Minus}} tugmalari bilan kattalashtiradi. Agar {{key:Mod+Plus}} ni tasodifan bossangiz, butun sahifa kattalashadi; {{key:Mod+0}} uni qaytaradi. Qarang: [Klaviatura, sichqoncha va sensorli panellar](common:keys).

## Koʻchirish buyrugʻi qayerda

Koʻchirish buyrugʻi yoʻq: sanash nuqtasini tanlab sudrang, yoki maydon yoki chiziqni tanlab, uning burchak dastaklarini sudrang.
