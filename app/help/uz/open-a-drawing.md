---
title: "DWG yoki DXF chizmasini ochish"
summary: "Chizma faylini varaqlar sifatida oching (model maydoni va har bir maket), chizma bergan masshtab bilan boshlang, uning qatlamlarini koʻrsating yoki yashiring va bogʻlangan chizmalarni kiriting."
keywords: dwg, dxf, cad, chizma, chizmani ochish, maketlar, model maydoni, qogʻoz maydoni, varaqlar, birliklar, insunits, koʻrinish oynasi masshtabi, xref, bogʻlangan chizma, qatlamlar, muzlatilgan, PDF siz, chop etish, chop etmasdan
from: d8c3f504
---

TakeoffCraft DWG yoki DXF chizmasini PDF kabi ochadi: uni avval PDF ga chop etishingiz shart emas. Chizmaning oʻzidan sanash aniq, chunki chizma har bir obyekt nima ekanligini biladi. Qarang: [Chizmadan sanash](topic:count-from-a-drawing).

## Chizmani ochish

1. {{ui:Fayl}} guruhida {{ui:Rejalarni ochish}} ni tanlang yoki {{key:Mod+O}} ni bosing.
2. DWG yoki DXF faylini tanlang. Bir nechtasini, shuningdek PDF lar bilan birga tanlashingiz mumkin.
3. Ochish ni tanlang.

Chizma fayllarini PDF lar kabi TakeoffCraft ustiga ham tashlashingiz mumkin. Hech narsa yuklanmaydi: brauzer faylni kompyuteringizdan oʻqiydi.

TakeoffCraft AutoCAD 2000 dan 2018 gacha boʻlgan DWG ni va R12 dan 2018 gacha boʻlgan ASCII DXF ni oʻqiydi. U ikkilik DXF ni (uni ASCII yoki DWG sifatida saqlang) va ikkalasi ham boʻlmagan faylni rad etadi va sababini aytadi. Shikastlangan fayl oʻqilgan qismi bilan ochiladi va xabar buni aytadi; uning sanoqlari toʻliq boʻlmasligi mumkin.

## Varaqlar

- **Model** — chizmaning model maydoni.
- **Har bir maket** (qogʻoz maydoni varaqchasi) — varaq, uning varaqchasi nomi bilan, varaqchalar tartibida. Maket modelni oʻzining koʻrinish oynalari orqali koʻrsatadi, xuddi chop etilgandek.

Kattalashtirish, surish, chizmaning oʻz chiziqlariga tutib olish, belgilar, izohlar, {{ui:Kalibrlash}} va qolganlari PDF dagidek ishlaydi. Chizmaning varaqlari hajmda fayl nomi va mazmun izi orqali PDF kabi saqlanadi: xuddi shu faylni qayta oching — belgilar oʻz varaqlarida boʻladi.

## Masshtab

Varaq chizma bergan masshtab bilan boshlanadi:

- **Maket** oʻzining eng katta koʻrinish oynasi masshtabini oladi. 1/2" = 1'-0" kabi masshtab oʻzi boʻlgan oldindan oʻrnatilgan nom bilan ataladi; boshqasi “Chizmaning koʻrinish oynasidan: 1" = 2.5'"” koʻrinishida chiqadi. Agar maketda boshqa masshtabdagi koʻrinish oynalari boʻlsa, eng kattasi varaq masshtabini belgilaydi: qolganlarini {{ui:Tekshirish}} bilan tekshiring.
- **Model** chizmaning birliklarini (dyuym, millimetr, fut…) masshtab sifatida oladi: “Chizma birliklari (dyuym)”.
- **Birliklari yoʻq chizma** (chizma birlik dyuym yoki millimetr ekanligini hech qachon aytmagan) masshtabga ega emas: varaqda “Masshtab yoʻq” yoziladi va uni oʻlchashga rad etiladi, xuddi masshtabsiz PDF dagidek. Sanash masshtabni talab qilmaydi. Unga {{ui:Kalibrlash}} bilan masshtab bering.

{{ui:Kalibrlash}}, {{ui:Tekshirish}} va {{ui:Oldindan oʻrnatilgan}} roʻyxati masshtabni istalgan vaqtda oʻzgartiradi va chizmanikidan ustun boʻladi. Oldindan oʻrnatilgan roʻyxat Model da oʻchirilgan, chunki u qogʻoz oʻlchamiga ega emas.

## Qatlamlar

Varaq panelidagi {{ui:Qatlamlar}} chizmaning qatlamlarini, har birida shu varaqda nechta obyekt borligi bilan koʻrsatadi. Fayl oʻchirgan yoki muzlatgan qatlamlar yashirin holda boshlanadi. Qatlamni yashirish uchun belgisini olib tashlang, yashirin qatlamni koʻrsatish uchun esa belgilang: varaq qayta chiziladi, yashirilgan narsalar sanoqlardan va {{ui:Chizmani oʻlchash}} uchun taklif qilinadigan obyektlardan chiqariladi, agar yashirin qatlamlarni ham sanashni soʻramasangiz. {{ui:Hammasini koʻrsatish}} har bir qatlamni koʻrsatadi; {{ui:Fayldagi qatlamlarga qaytarish}} oʻzgartirishlaringizni bekor qiladi. Qatlam tanlovlari shu seansga tegishli, hajm fayliga emas.

## Bogʻlangan chizmalar (xref)

Boshqa chizmalarni bogʻlagan chizma ularni joylashtirilgan joyda koʻrsatadi. TakeoffCraft bogʻlangan chizmani **ochiq fayllar** orasidan fayl nomi boʻyicha topadi: asosiy chizmani va uning bogʻlangan chizmasini birga (yoki ketma-ket) oching. Shunga qadar holat satri nechta bogʻlangan chizma topilmaganini koʻrsatadi, ularning chizgan narsalari yetishmaydi va sanoqlar buni aytadi.

## Cheklovlar

- TakeoffCraft oʻqiy olmaydigan yoki joylashtira olmaydigan obyektlar (proksi obyektlar, nomaʼlum sinflar) sanash oynasida tur boʻyicha roʻyxatga olinadi; ular hech qanday xabarsiz tashlanmaydi.
- Juda katta chizmalar qisman chiziladi, sanoqlar chegaraga yetganda toʻxtaydi va buni aytadi. Bunday chizmaning oʻrniga uning PDF chop etilgan nusxasini oching.
- Chizma qora rangda va oʻz ranglarida, oq qogʻoz uchun qoraytirilgan holda chiziladi. Chop etish uslubi jadvallari va qalam tayinlashlari qoʻllanmaydi.
