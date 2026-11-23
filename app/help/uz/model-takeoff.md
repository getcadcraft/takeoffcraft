---
title: Bino modelidan miqdorlarni hisoblash
summary: Arxitektorning IFC modelini oching, uni 3D da koʻring, devor, pol, eshik va boshqa elementlarni turi, materiali, qatlami yoki oʻlchami boʻyicha tanlang va ularning sonini, uzunligini, maydonini va hajmini hisobga qoʻshing. Modelning yangi nusxasi bir xil miqdorlarni yangilaydi.
keywords: model, model boʻyicha hisoblash, 3D koʻrinish, qismni bosish, qatorni topish, material, qatlam, devor qatlamlari, gipskarton, izolyatsiya, eshik oʻlchamlari, deraza oʻlchamlari, teshiklar jadvali, csv, 3d, bim, ifc, rvt, bino modeli, miqdorlar, devorlar, pollar, eshiklar, derazalar, ustunlar, xonalar, turi boʻyicha, sath boʻyicha, yangilash, yangi model, loyihalashning rivojlanish bosqichi
from: 8c4c12c9
---

Keyingi chizmalar toʻplamini kutishingiz shart emas. Arxitektor bino modelini yuborganda, uni shu yerda oching va miqdorlarni toʻgʻridan-toʻgʻri undan oling. Model sizning kompyuteringizda oʻqiladi; hech narsa hech qayerga yuborilmaydi.

## Qadamlar

1. Asboblar panelida {{ui:Model}} ni tanlang va modelning `.ifc` faylini belgilang, yoki uni xuddi boshqa fayl kabi {{ui:Open plans}} orqali oching.
2. {{ui:Model takeoff}} oynasi har bir kategoriya va tur uchun bitta qator bilan ochiladi: devorlar devor turi boʻyicha, pollar pol turi boʻyicha, eshiklar eshik turi boʻyicha va hokazo. Har bir qatorda uning soni va shu kategoriya qaysi birlikda oʻlchanishi koʻrsatiladi.
3. Tez yakuniy natija uchun {{ui:Group by}} ni {{ui:Category}} ga oʻrnating, yoki har bir turni qavatlar boʻyicha ajratish uchun {{ui:Category, type and level}} ni tanlang.
4. Kerak boʻlmagan qatorlardan belgini olib tashlang. {{ui:Find}} roʻyxatni toraytiradi. Qator belgisini olib tashlash uning qismlarini 3D tasvirdan ham yashiradi.
5. Modelga butun ish davomida saqlab qoladigan {{ui:Model name}} bering, masalan, loyiha nomini.
6. {{ui:Add to the takeoff}} ni tanlang. Har bir miqdor elementlar roʻyxatida turlangan miqdorga aylanadi. Uni nomlang, narxlang va boshqa har qanday element kabi yigʻmalarni biriktiring.

## Modelni 3D da koʻrish

{{ui:Show the model in 3D}} modelni jadval ustida chizadi, har bir qator uchun bitta rang bilan (qator nomi yonidagi rang belgisi). Burish uchun torting, siljitish uchun {{key:Shift}} ni bosib turib torting, kattalashtirish uchun gʻildiragidan foydalaning, qaytish uchun {{ui:Fit}} yoki {{ui:Reset}} ni tanlang.

- **Tasvirdagi qismni bosing.** Jadvalda uning qatori tanlanadi, shu qatorning barcha qismlari yoritiladi, qolganlari xira boʻladi. Xuddi shu qismni yana bosing va agar u bir nechta qatorda boʻlsa (devor qatlamlarida boʻlgani kabi), keyingi qator tanlanadi.
- **Jadvaldagi qatorni bosing**, uning qismlari yoritiladi. Uni yana bosing yoki tasvirdagi boʻsh joyni bosing, yoritish olib tashlanadi.
- Xonalar chizilmaydi, chunki xonaning hajmi binoni yopib qoʻyadi.
- Juda katta model baʼzi qismlar uchun faqat quti saqlaydi, toki xotiraga sigʻsin; panelda bu necha qism ekani koʻrsatiladi. Raqamlar oʻzgarmaydi.

Agar bu kompyuter 3D ni chiza olmasa, jadval avvalgidek ishlaydi.

## Material, qatlam yoki oʻlcham boʻyicha guruhlash

{{ui:Group by}} da yana uchta tanlov bor:

- {{ui:Category and material}}: qatlamlardan qurilgan devor, pol yoki tom har bir qatlam materiali uchun alohida qator beradi, shuning uchun gipskarton, karkas profillari va izolyatsiya alohida narxlanishi mumkin. Bitta materialli bino qismi oʻsha materialning qatoriga tushadi, materialsiz qism esa "Material nomlanmagan" nomli qatorda saqlanadi.
- {{ui:Category and layer}}: xuddi shunday, qatorda qatlam qalinligi bilan ("Izolyatsiya, 100 mm").
- {{ui:Category, type and door or window size}}: eshiklar va derazalar eni va balandligi boʻyicha ajratiladi (masalan, 3'-0" × 6'-8" yoki 914 × 2,032 mm).

Qatlam uchun maydon devorning oʻz yuzasi (yoki polning yoki tomning reja yoki sirt maydoni), hajm esa shu maydon koʻpaytirilgan qatlam qalinligidir. Qator izohi necha raqam qatlamdan olinganini aytadi. Bitta devorning qatlamlari yigʻindisi model shu devor uchun bergan hajmga teng boʻladi.

## Qatorlarni yoki teshiklarni CSV sifatida saqlash

{{ui:Save rows as CSV}} belgilangan qatorlarni, har bir sarlavhada birliklari bilan, elektron jadval uchun saqlaydi. {{ui:Save openings schedule as CSV}} (faqat modelda eshik yoki deraza boʻlsa) har bir eshik va derazani turi, sathi va oʻlchami boʻyicha soni bilan birga saqlaydi.

## Nimalar oʻlchanadi

| Kategoriya | Miqdorlar |
|---|---|
| Devorlar | soni, uzunlik, devor maydoni (bitta tomoni, teshiklar ayirilgan), hajm |
| Pollar, plitalar, shiftlar va boshqa qoplamalar | soni, reja maydoni, hajm |
| Tomlar | soni, reja maydoni, tom yuzasi, hajm |
| Poydevorlar | soni, reja maydoni, hajm |
| Ustunlar, toʻsinlar va elementlar | soni, element boʻylab uzunlik, hajm |
| Panjaralar, quvurlar, havo kanallari va kabel trassalari | soni, uzunlik |
| Zinalar | soni, hajm |
| Xonalar | soni, pol maydoni, hajm |
| Eshiklar, derazalar va qolgan hammasi | soni |

Agar model muallifi miqdorni faylda koʻrsatgan boʻlsa, oʻsha raqam ishlatiladi. Aks holda raqam elementning shaklidan oʻlchanadi. Har bir miqdor qaysi usul bilan olinganini va nechta element raqam bergani haqida izohni saqlaydi.

:::note
Shakldan oʻlchangan devor uzunligi uchidan uchigacha hisoblanadi, shuning uchun burchakda ustma-ust tushgan ikki devor burchakni ikki marta oʻz ichiga oladi. Hajm uchun shakl yopiq boʻlishi kerak: yopiq boʻlmagan shaklli element sanaladi, lekin hajm bermaydi. Egri yoki burchakli devor elementi barcha tik yuzalarining yarmi sifatida oʻlchanadi va izohida shu aytiladi.
:::

## Yangi model kelganda

Yangi faylni oching va xuddi shu {{ui:Model name}} ni kiriting. Biror narsa qoʻshishdan oldin panel necha miqdor yangi ekanini, necha tasi oʻzgarganini va qaysi qiymatdan qaysi qiymatga oʻzgarganini, hamda eski nusxadagi qaysi miqdorlar modelda endi yoʻqligini koʻrsatadi. {{ui:Add to the takeoff}} ni tanlang: oʻzgargan miqdorlar yangi raqamlarini oladi, sizning nomlaringiz, stavkalaringiz, chiqindingiz va yigʻmalaringiz esa saqlanadi. Modeldan yoʻqolgan miqdorlar eski raqamlarini saqlab qoladi; agar loyiha ularni olib tashlagan boʻlsa, ularni oʻzingiz oʻchiring.

Tur va sath nomlari miqdorni tanib olish uchun ishlatiladi. Agar arxitektor devor turini qayta nomlasa, u yangi miqdor sifatida keladi, eski esa yoʻqolgan deb roʻyxatga olinadi.

## Oʻqiladigan fayllar

IFC fayllari (IFC2x3, IFC4 va IFC4.3). Yoʻllar, relslar yoki koʻpriklar bor IFC fayl ularning infratuzilma miqdorlarini ham oldingidek toʻgʻridan-toʻgʻri keltiradi.

TakeoffCraft bu relizda `.rvt` fayllarni oʻqimaydi. Agar arxitektor Revitʼda ishlasa, undan modelning IFC eksportini soʻrang (Fayl, Eksport, IFC) va uni oching.

Bir model bir vaqtda 500 tagacha miqdor keltirishi mumkin. Koʻp boʻlsa, qatorlardan belgini olib tashlang yoki kategoriya boʻyicha guruhlang.
