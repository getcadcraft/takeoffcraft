---
title: Chiziqli yoʻllarni oʻlchash
summary: Devorlar, quvurlar, bezak va boshqa uzunliklarni yoʻl sifatida oling: toʻgʻri kesmalar, yoylar va Shift bilan 45 gradusli tortish bilan.
keywords: chiziqli, uzunlik, yoʻl, polichiziq, devorlar, lf, chiziqli fut, yoy, egri, 45 gradus, ortogonal, tortish, kesmalar, polylength, ayirish, ochiqlik, eshik, boʻshliq, kiritish, kiritilgan, koordinatalar, masofa, toʻgʻri masofa, polyar
from: c669deff
---

Chiziqli element uzunlikni oʻlchaydi. Har bir yoʻl nuqtalar zanjiri: toʻgʻri kesmalar va yoy rejimini yoqqan joyda yoylar. Element istalgan sonli varaqda istalgan sonli yoʻlga ega boʻlishi mumkin.

Boshlashdan oldin: varaqqa masshtab kerak ([Masshtabni oʻrnatish](topic:set-the-scale)) va chiziqli element kerak ([Hajm elementlarini yaratish](topic:create-items)).

Vektor PDF da bosishlaringiz chizmaning oʻz chiziqlariga tortiladi: uchlari, oʻrtalari va kesishmalari ([Chizma chiziqlariga tortish](topic:snap-to-the-drawing); {{key:F3}} uni oʻchiradi).

## Yoʻlni chizish

1. {{ui:Items}} ostidagi chiziqli elementni bosing.
2. Asboblar panelida {{ui:Linear}} ni tanlang yoki {{key:L}} ni bosing.
3. Yoʻlning boshini bosing.
4. Boʻylab har bir burchakni bosing. Holat satrida "Uzunlik" (kursorgacha boʻlgan yoʻl) va "kesma" (chizayotgan kesma) fut va dyuymda koʻrinadi.
5. Yoʻlni tugating: oxirgi nuqtani ikki marta bosing, {{key:Enter}} ni bosing yoki oʻng tugmani bosing. Yoʻl element rangida chiziladi va tanlangan belgiga aylanadi. Elementning uzunligi {{ui:Items}} roʻyxatida va {{ui:Quantities}} jadvalida oshadi.

Asbob {{ui:Linear}} da qoladi, shuning uchun keyingi yoʻlni darhol boshlashingiz mumkin. {{ui:Select}} ga qaytish uchun {{key:Esc}} ni bosing.

Chizish paytida:

- {{key:Backspace}} (yoki {{key:Delete}}) oxirgi nuqtani olib tashlaydi.
- {{key:Esc}} tugallanmagan yoʻlni tashlab yuboradi.
- Sudrash varaqni suradi, gʻildirak kattalashtiradi, nuqta qoʻshmasdan.

:::mac
Mac sensorli panelida oʻng tugma — ikki barmoq bosish (Tizim sozlamalari, Trackpad boʻlimida ikkilamchi bosishni yoqing). TakeoffCraft faqat ikkilamchi tugmani oʻqiydi, shuning uchun Control-bosish oddiy bosish sifatida qabul qilinib, nuqta qoʻshishi mumkin. Ikki marta bosish yoki {{key:Enter}} har doim tugatadi.
:::

:::touch
Sensorli ekranda nuqta qoʻyish uchun tegining, surish uchun bitta barmoqni sudrang, kattalashtirish uchun ikki barmoq bilan chimdiring. Uzoq bosib, ikki marta teginib yoki varaq ostidagi panelda {{ui:Finish}} ni bosib tugating ({{ui:Back}} oxirgi nuqtani qaytaradi). Qarang: [Muammolarni bartaraf etish](topic:troubleshooting#touch-screens).
:::

## 45° qadamli toʻgʻri chiziqlar

Nuqta qoʻyayotganda {{key:Shift}} ni ushlab turing. Oxirgi nuqtadan kesma eng yaqin 0°, 45°, 90° yoki 135° yoʻnalishga tortiladi va siz sudragan uzunlikni saqlaydi. Holat satri eslatadi: "Shift 45° ga tortadi".

Yoy rejimida u yoy tugaydigan joyga qoʻllanadi: yoy vatari boshlanadigan joydan 45° qadamlarda yoʻnaladi. Egri ustida bosgan nuqtangiz hech qachon tortilmaydi.

## Yoylar va egri devorlar

1. Yoʻlni chizayotganda egri boshlanadigan nuqtani qoʻying.
2. Yoy rejimini yoqing: asboblar panelida {{ui:Arc}} ni tanlang yoki {{key:R}} ni bosing. Tugma bosilgan holatda qoladi.
3. Egri ustidagi istalgan nuqtani bosing, uning oʻrtasiga yaqin. Holat satriga "(yoy: tugaydigan joyni bosing)" qoʻshiladi va koʻrinish sizning nuqtangiz orqali egiladi.
4. Egri tugaydigan joyni bosing. Yoy qoʻshiladi. Uning uzunligi aniq yoy uzunligi, qisqa vatarlar zanjiri emas.
5. Keyingi egri ustidagi boshqa nuqtani va uning oxirini bosing va yoylarni chizishda davom eting, yoki toʻgʻri kesmalarga qaytish uchun {{key:R}} ni yana bosing.

{{key:Backspace}} yoki {{key:Esc}} avval egri ustidagi kutilayotgan nuqtani tashlaydi; odatdagidek nuqtalarni olib tashlash uchun yana bosing.

## Uzunliklar va koordinatalarni kiritish

Birinchi nuqtadan keyin bosish oʻrniga keyingi nuqta qayerga borishini yozishingiz mumkin. Raqam, `@` yoki `#` yozing: holat satrida yozganingiz bilan {{ui:Type}} maydoni ochiladi. Nuqtani qoʻyish uchun {{key:Enter}} ni bosing; maydon keyingisi uchun ochiq qoladi.

| Kiritish | Keyingi nuqta boradi |
|---|---|
| `12'6"` | 12'-6" oxirgi nuqtadan, kursor tomon (yoʻnalishni koʻrsating, soʻng uzunlikni yozing) |
| `12'6"<45` | 12'-6" 45° da, ekranning oʻng tomonidan soat strelkasi teskari yoʻnalishda hisoblanadi (`<90` yuqoriga, `<-90` pastga) |
| `@6',-4'` | oxirgi nuqtadan 6' oʻngga va 4' pastga |
| `6',4'` (yoki `#6',4'`) | shu yoʻlning birinchi nuqtasidan 6' oʻngga va 4' yuqoriga |

Uzunliklar TakeoffCraft da hamma joyda boʻlgani kabi yoziladi ([Kiritish formatlari](topic:entry-formats)): `12'-6 1/2"`, `12.5` (fut), `30"`, `3.2 m`. "Oʻng" va "yuqori" varaqni qanday koʻrsangiz shunday, PDF sahifasi aylantirilgan boʻlsa ham.

Boʻsh maydonda {{key:Enter}} varaqdagidek yoʻlni tugatadi; {{key:Esc}} maydonni yopadi, lekin yoʻl davom etadi. Yozilgan nuqtalar bosishlar bilan bir xil qoidalardan oʻtadi: ayirmalar, yoylar va maydonni yopish ishlaydi. Xuddi shu maydon {{ui:Area}} va {{ui:Cut-out}} da ishlaydi; aylana markazidan keyin u radiusni oladi.

## Yoʻlning bir qismini ayirish

Eshik yoki vitrinadan oʻtadigan devor yoʻlini toʻgʻridan-toʻgʻri chizish mumkin va baribir faqat devor hisoblanadi: ochiqlik boʻylab kesmalar **ayirmalar** boʻladi. Ular shtrixli va ingichka chiziladi hamda hisobga olinmaydi.

Chizish paytida:

1. Ochiqlik boshlanadigan nuqtani qoʻying.
2. Asboblar panelida {{ui:Deduct}} ni tanlang yoki {{key:E}} ni bosing. Tugma bosilgan holatda qoladi va holat satri keyingi kesmalar ayirmalar ekanini aytadi.
3. Ochiqlik tugaydigan joyni bosing. Kesma shtrixli chiziladi; holat satridagi "Uzunlik" uni chiqarib tashlaydi.
4. {{key:E}} ni yana bosing va devor boʻylab davom eting.

Chizgandan keyin: yoʻlni tanlang. **Tanlangan belgi** ostida har bir kesmada {{ui:Deduct}} qutisi bor: kesmani ayirish uchun belgilang, uni qayta hisobga olish uchun belgisini olib tashlang. Har bir oʻzgarish bitta ortga qaytarish qadami.

Yoʻlda har doim kamida bitta hisobga olinadigan kesma qoladi. Panelda keyin **Ayirmalar** (ayirilgan uzunlik) va **Chizilgan** (butun yoʻl) koʻrinadi; **Uzunlik**, elementning miqdori, devor maydoni va xarajatlarning hammasi ayirmalarsiz uzunlikdan foydalanadi. 3D tekshiruv koʻrinishida devorda boʻshliq qoladi, belgilangan PDF ayirmalarni shtrixli chizadi va eksport qilingan **Belgilar** varagʻi ularni roʻyxatga oladi.

Burchakni siljitish ayirmalarni saqlaydi. Nuqtalarni qoʻshish yoki olib tashlash (yoʻlni qayta chizish orqali) ularsiz boshlanadi.

## Yoʻl tafsilotlarini koʻrish

{{ui:Select}} ({{key:V}}) ni tanlang va yoʻlni bosing. Oʻngdagi **Tanlangan belgi** quyidagilarni koʻrsatadi:

- u tegishli boʻlgan element (yoʻlni u yerga oʻtkazish uchun roʻyxatdan boshqa chiziqli elementni tanlang),
- varaq,
- **Uzunlik** fut va dyuymda hamda LF da,
- **Kesmalar** soni va element balandligi boʻlsa, **Devor maydoni**,
- har bir kesmaning uzunligi, yoylardan keyin "(yoy)" bilan, va uning {{ui:Deduct}} qutisi.

Varaqda tanlangan yoʻlning har bir kesmasi uzunligi bilan belgilanadi.

## Yoʻlni tuzatish

- **Nuqtani siljitish**: yoʻlni tanlang, soʻng uning kvadrat burchak dastaklaridan birini sudrang. Siljitilgan kesmani 45° qadamlarga tortish uchun {{key:Shift}} ni ushlab turing. Yoy oʻz bulge ini saqlaydi.
- **Yoyni egish**: tanlangan yoʻlda har bir yoy oʻrtasida dumaloq dastak koʻrinadi. Uni sudrang: yoy qoʻyib yuborgan joyingiz orqali oʻtadi, shuning uchun u koʻproq, kamroq yoki teskari egiladi. Uchlari orasidagi toʻgʻri chiziqqa sudrasangiz, u toʻgʻri kesmaga aylanadi. {{key:Mod+Z}} uni bekor qiladi ("Yoyni egish").
- **Yoʻlni oʻchirish**: uni tanlang va {{key:Delete}} ni bosing, asboblar panelining {{ui:More}} menyusidan {{ui:Delete}} ni tanlang yoki panelda {{ui:Delete mark}} ni tanlang.
- **Ortga qaytarish**: {{key:Mod+Z}}; qayta bajarish {{key:Mod+Y}} bilan.

Hozircha yoʻl oʻrtasiga nuqta qoʻshib boʻlmaydi. Yoʻlni oʻchiring va qayta chizing.

## Devor maydoni

Chiziqli elementga {{ui:Height}} bering (masalan, `9'-0"`). Keyin u **Devor maydoni (A)** = uzunlik × balandlik ni SF da (yoki metrik element uchun m² da) koʻrsatadi, va devor maydoni jadval eksportining izohlar ustuniga tushadi. Uni yigʻmalarda taxta, boʻyoq yoki izolyatsiya uchun ishlating: qarang: [Yigʻmalar va formulalar](topic:assemblies).
