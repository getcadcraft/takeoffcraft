---
title: TakeoffCraft'ni AI yordamchi bilan ishlatish
summary: Oʻz AI yordamchingiz yoki skriptingiz hajmning miqdorlari va smetasini oʻqishi, elementlar va belgilar qoʻshishi, DWG yoki DXF'da sanashi va oʻlchashi hamda eksport qilishi mumkin: ruxsatlar, CadCraft Studio orqali ulanish va faollik jurnali.
keywords: ai, yordamchi, agent, mcp, model context protocol, skript, avtomatlashtirish, miqdorlar, smeta, ruxsatlar, uzish, faollik
from: 7fa62ec6
---

## Nima oʻrganasiz

AI yordamchi (yoki siz yozgan skript) bilan TakeoffCraft'da qanday ishlashni va unga nimalarga tegishga ruxsat berishni qanday hal qilishni.

TakeoffCraft'da **oʻz AI yoʻq** va hech narsani hech qayerga yubormaydi. Yordamchini siz olib kelasiz: Model Context Protocol (MCP) bilan ishlaydigan har qanday dastur. TakeoffCraft unga faqat asboblar beradi, qaysilarini esa siz tanlaysiz.

## Yoqish

1. {{ui:Sozlamalar}} ni oching (ilova panelidagi tishli belgi yoki {{key:Mod+,}}) va {{ui:TakeoffCraft}} yorligʻiga oʻting.
2. {{ui:Yordamchilar}} ostida **AI yordamchilar va skriptlarga TakeoffCraft'dan foydalanishga ruxsat berish** katagini belgilang. Siz buni qilmaguncha u oʻchiq turadi.
3. Unga nima qilishga ruxsat berilishini tanlang: **Oʻqish** dastlab belgilangan; **Tahrirlash**, **Saqlash** yoki **Eksport** ni faqat kerak boʻlganda belgilang.

Siz belgilagan ruxsatlarga kirmaydigan asboblar yordamchiga taklif qilinmaydi va u baribir soʻrasa, TakeoffCraft uni rad etadi hamda buni faollik jurnaliga yozadi. Kalitni oʻchirish barcha ulanishlarni bir vaqtda tugatadi; {{ui:TakeoffCraft sozlamalarini tiklash}} uni ham oʻchiradi.

## Yordamchingizni ulash

Yordamchilar kompyuteringizdagi **CadCraft Studio** orqali ulanadi: Studio faqat shu kompyuterga yetib boradigan kichik server ishga tushiradi va u har safar ishga tushganda yaratadigan token bilan himoyalangan. Studio'da {{ui:Yordamchini ulash}} ni tanlang va manzil hamda tokenni yordamchingizga nusxalang (Studio qoʻyish kerak boʻlgan aniq sozlamalarni koʻrsatadi). Tokenni hech kimga bermang.

:::note
Brauzer oynasi yordamchi uchun ulanish ocha olmaydi: brauzer ilovalarida kalit hech qanday taʼsir qilmaydi, faqat kompyuteringizdagi CadCraft Studio'dan foydalanganingizda ishlaydi.
:::

## Siz nazoratda qolasiz

- **Har bir oʻzgarish bitta ortga qaytarish qadami** boʻladi va yordamchi nomi bilan belgilanadi (masalan, "Yordamchi: …"). {{key:Mod+Z}} yordamchining oxirgi oʻzgarishini butunlay qaytaradi.
- **Ulanganini bilasiz.** Ilova panelidagi tugma ulangan paytda yordamchi nomini koʻrsatadi; uning nima qila olishini koʻrish yoki uni **Uzish** uchun bosing.
- **Faollik.** {{ui:Sozlamalar}} › {{ui:TakeoffCraft}} › {{ui:Yordamchilar}} › {{ui:Faollik}} har bir chaqiruvni koʻrsatadi: qachon, qaysi asbob, bajarildi yoki rad etildi. {{ui:Jurnalni saqlash}} nusxa saqlaydi.

## Yordamchi nimalarni soʻrashi mumkin

| Asbob | Ruxsat | Nima qiladi |
|---|---|---|
| `app_info`, `sheets_list` | Oʻqish | Ochiq hajm, uning PDF'lari va varaqlari, har bir varaqning masshtabi va belgilari |
| `items_list` | Oʻqish | Birliklari, stavkalari va yigʻma formulalari bilan elementlar |
| `takeoff_quantities` | Oʻqish | Har bir element yoki varaq boʻyicha miqdorlar; masshtabsiz varaqdagi belgilar roʻyxatga olinadi, hech qachon nol deb sanalmaydi |
| `takeoff_estimate` | Oʻqish | TakeoffCraft hisoblagan narxlangan smeta va uning jami |
| `takeoff_export` | Eksport | TakeoffCraft'ning oʻz CSV yoki XLSX eksporti |
| `items_add` | Tahrirlash | Birliklari, stavkalari va chiqindisi bilan elementlar qoʻshadi |
| `marks_add` | Tahrirlash | Varaqda yoʻllar, maydonlar va sanashlarni oʻlchaydi. Uzunlik va maydonlar faqat masshtabli varaqda, masshtabsiz varaqda hech qachon |
| `cad_sheets`, `cad_catalog`, `cad_count` | Oʻqish | Ochgan DWG yoki DXF'ida: uning varaqlari va masshtablari, nimalarni sanash mumkinligi (bloklar, qatlamlar va turlar, matnlar) hamda {{ui:CAD sanash}} qilgandek aniq sanashlar ([Chizmadan sanash](topic:count-from-a-drawing)) |
| `cad_count_add` | Tahrirlash | Chizmada sanaydi va topilgan har bir obyektga sanash belgisi qoʻyadi, bir qadamda; qayta sanash faqat yangisini qoʻshadi |
| `cad_measure` | Tahrirlash | Chizmaning oʻz chiziqlari, yoylari, polichiziqlari va shtrixlaridan chiziqli yoki maydon elementini oʻlchaydi, {{ui:Chizmani oʻlchash}} qilgandek ([Chizmadan oʻlchash](topic:measure-from-a-drawing)); faqat masshtabli varaqda |
| `usd_export` | Eksport | Masshtabli varaqning oʻlchangan yoʻllari, maydonlari va sanashlarini USD'da 3D tekshiruv modeli sifatida (`.usdz`, `.usda` yoki `.usdc`), 3D tekshiruv koʻrinishidagi {{ui:USD paket (.usdz)}} yozgandek ([3D tekshiruv koʻrinishini USD sifatida eksport qilish](topic:usd)) |

**Tahrirlash** belgilangan boʻlsa, yordamchi elementlar va belgilar qoʻshadi (har bir chaqiruv bitta ortga qaytarish qadami); mavjud belgilarni koʻchira, oʻzgartira yoki oʻchira olmaydi.

TakeoffCraft'ni ochmasdan ham xuddi shu miqdorlar va smeta mavjud: CadCraft MCP serveri siz nomlagan papkadagi `.takeoff.json` faylini ochadi (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), `cadcraft info Job.takeoff.json` esa ularni buyruq satrida chop etadi. U shuningdek DWG yoki DXF'ni varaqlari bilan yangi hajm sifatida ochadi (TakeoffCraft masshtablagandek masshtablangan), xuddi shu `cad_*` asboblari bilan sanaydi va oʻlchaydi, elementlar qoʻshadi va hajmni saqlaydi (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` buyruq satridan sanaydi.

## Agar biror narsa ishlamasa

- **Yordamchi TakeoffCraft asboblarini koʻrmaydi:** shu oynada kalit yoqilganini va oyna Studio'da ochiqligini tekshiring.
- **"Eksport ruxsati kerak":** {{ui:Yordamchilar}} ostida **Eksport** ni belgilang, soʻng qayta soʻrang.
- **"401" yoki "token" xatolari:** token oʻzgargan (Studio qayta ishga tushgan yoki {{ui:Yangi token}}). Yangi tokenni yordamchi sozlamalariga nusxalang.

## Shuningdek qarang

- [AI yordamchilar uchun retseptlar](common:assistants-recipes): asboblarini koʻrsatgan ishlangan misollar.
