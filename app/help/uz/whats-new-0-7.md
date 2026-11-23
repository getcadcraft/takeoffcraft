---
title: 0.7 versiyasidagi yangiliklar (avvalgi)
summary: DWG va DXF chizmalar oʻz masshtabi bilan varaqlar sifatida ochiladi, chizmaning oʻzidan aniq sanashlar va uzunliklar, tanlangan subpudratchi taklifi paket narxi sifatida, narxlari muhrlangan taklif taklifnomalari, chizmalar uchun yordamchi asboblar va 3D tekshiruv koʻrinishidan USD.
keywords: 0.7 yangiliklari, oldingi reliz, reliz eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.7, versiya, yangi funksiyalar, dwg, dxf, chizma, maket, model fazosi, chizma masshtabi, chizmadan sanash, cad sanash, bloklar, dinamik bloklar, atributlar, qatlamlar, xref, bogʻlangan chizma, chizmani oʻlchash, polichiziq, shtrixlash, belgilangan pdf, tanlangan taklif, taklifni qoʻllash, takliflar uchun yuborish, taklif taklifnomasi, muhrlangan takliflar, taklifni ochish, kech taklif, subpudratchi yozuvlari, csv, yordamchi, mcp, usd, usdz, birliklar, birlik roʻyxatlari, ixcham, panellar, dialoglar, portugalcha
from: 0e3a424f
---

TakeoffCraft 0.7 da 0.6 bilan solishtirganda nima oʻzgargani. Chizmalar endi PDF'ga chizmasdan, oʻz holatida ochiladi va taklif paketini subpudratchilarga yuborib, narxlangan holda qaytarish mumkin.

## Yangi

### DWG va DXF chizmalar

- **Chizmani varaqlar sifatida oching.** {{ui:Fayl}} guruhidagi {{ui:Rejalarni ochish}} ({{key:Mod+O}}, yoki fayllarni tashlang) DWG va DXF chizmalarni PDF'lar bilan birga qabul qiladi. Model fazosi va har bir maket {{ui:Varaqlar}} roʻyxatida varaq boʻladi va hajm chizmalar hamda PDF'larni birga qamrab olishi mumkin. Hech narsa yuklanmaydi. Qarang: [DWG yoki DXF chizmani ochish](topic:open-a-drawing).
- **Masshtab chizmadan olinadi.** Maket eng katta koʻrinish oynasining masshtabidan boshlanadi; u oldindan oʻrnatilgan boʻlsa, nomi bilan, masalan 1/2" = 1'-0". Model chizmaning birliklarida boshlanadi. Birligi boʻlmagan chizma kalibrlanmaguncha "Masshtab yoʻq" deydi. {{ui:Kalibrlash}}, {{ui:Tekshirish}} va {{ui:Oldindan oʻrnatilgan}} hali ham ustun turadi. Qarang: [Masshtab](topic:open-a-drawing#the-scale).
- **Qatlamlar va bogʻlangan chizmalar.** Varaq panelidagi {{ui:Qatlamlar}} chizmaning qatlamlarini koʻrsatadi yoki yashiradi. Fayl oʻchirgan yoki muzlatgan qatlamlar yashirin holda boshlanadi va siz tanlamaguncha sanalmaydi. Bogʻlangan chizma (xref) oʻziga kiritilgan joyida chiziladi va sanaladi; u ochilmaguncha holat satri nima yetishmayotganini koʻrsatadi. Qarang: [Qatlamlar](topic:open-a-drawing#layers).
- **Belgilangan PDF chizmadan ishlaydi.** {{ui:Eksport}} › {{ui:Belgilangan PDF}} avval chizmaning belgilangan varaqlarini PDF sifatida chizadi, shuning uchun nusxada belgilaringiz va afsonangiz chizish bosqichisiz koʻrinadi. U qora rangda yoki chizmaning ranglarida chiziladi, chizish uslubi jadvallarisiz. Qarang: [Belgilangan PDF](topic:export-estimate#a-marked-pdf).

### Chizmadan aniq sanashlar va uzunliklar

- **Chizmada bor narsani sanang.** Varaq panelidagi {{ui:CAD sanash}} blokni nomi boʻyicha sanaydi (ichki bloklar, dinamik blok holatlari va blok massivlari bilan birga), qatlamdagi bir turdagi hamma narsani yoki matn yoki atribut qiymatini. U varaq koʻrsatgan narsani yoki butun chizmani bir marta sanaydi. Belgilarni qoʻshish bitta ortga qaytarish qadami, qayta sanash esa faqat yangisini qoʻshadi. {{ui:Avtosanash}} PDF'lar va bloklar boʻlmagan simvollar uchun qoladi. Qarang: [Chizmadan sanash](topic:count-from-a-drawing).
- **Chizmaning oʻz chiziqlaridan oʻlchang.** {{ui:Chizmani oʻlchash}} bosgan yoki oynaga olgan chiziqlar, yoylar, polichiziqlar, aylanalar, shtrixlar va qattiq jismlarni chiziqli yoki maydon elementining belgilari sifatida oladi. Yoylar, bulgʻalar va shtrixning teshiklari aniq chiqadi; ellipslar va splaynlar mayda vatarlar bilan oʻlchanadi va panel buni aytadi. Qarang: [Chizmadan oʻlchash](topic:measure-from-a-drawing).

### Takliflar

- **Subpudratchi taklifini paket narxi sifatida ishlating.** {{ui:Eksport}} › {{ui:Taklif paketlari va tenglashtirish…}} da taklif ustida {{ui:Qoʻllash}} ni tanlang. Paket elementlari miqdor sifatida qoladi, bitta **Tanlangan taklif** qatori narxni olib boradi, taklif qamrab olmagan elementlar oʻz narxingizda qoladi va unga ustama, foyda hamda kafolat qoʻllanadi. Takliflarni almashtirish bitta ortga qaytarish qadami; ish kitobi va taklif xulosasi buni oʻz ichiga oladi. Qarang: [Taklifni paket narxi sifatida qoʻllash](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Paketni takliflar uchun yuboring.** Paket ostidagi {{ui:Taklif uchun yuborish…}} har bir subpudratchiga hisob talab qilmaydigan sahifa havolasini elektron pochta orqali yuboradi: ular doiradagi ishni va varaqlarni PDF sifatida koʻradi, har bir qatorga narx yozadi yoki "kiritilmagan" deb belgilaydi, izoh va uchtagacha fayl qoʻshadi yoki rad etadi. {{ui:Narxlarni olish}} qaytib kelganlarini tenglashtirish varagʻiga **veb** belgisi bilan oladi. Yuborish faqat CadCraft jamoasi sinov davomida yoqqan hisoblarda ochiq (quyida qarang). Qarang: [Paketni takliflar uchun yuborish](topic:bid-invitations).
- **Ochilishgacha muhrlangan.** Narxlar siz belgilagan ochilish vaqtigacha muhrlangan boʻlishi mumkin: shu vaqtgacha hech kim narxni koʻrmaydi, siz ham. Ochilishda har bir taklif birdaniga koʻrinadi va muddatdan keyin kelgan taklif kech deb belgilanadi. Qarang: [Muhrlangan takliflar va ochilish](topic:bid-invitations#sealed-bids-and-the-opening).
- **Subpudratchi yozuvlari.** getcadcraft.com dagi hisobingiz har bir kompaniyaning aloqalarini, sohalarini, malaka javoblarini, sugʻurta va litsenziya sanalarini (muddati oʻtgan yoki 30 kun ichida tugaydiganlar belgilanadi) oʻtgan takliflari bilan birga saqlaydi. Ularni CSV sifatida import va eksport qiling, paket yuborganda tanlang. Qarang: [Veb-saytda](topic:bid-invitations#on-the-website).

### AI yordamchilari

- **Yordamchilar hajmga qoʻshishi mumkin.** **Tahrirlash** belgilanganda, sizning yordamchingiz elementlar qoʻshishi (`items_add`) va varaqda yoʻllar, maydonlar hamda sanashlarni oʻlchashi mumkin (`marks_add`; uzunlik va maydonlar faqat masshtabli varaqda). Har bir chaqiruv bitta ortga qaytarish qadami.
- **Chizmalar uchun yordamchi asboblar.** Ochiq DWG yoki DXF'da yordamchi uning varaqlarini va nimalarni sanash mumkinligini roʻyxatlay oladi, aniq sanaydi, sanash belgilarini qoʻshadi va chizma geometriyasidan oʻlchaydi. TakeoffCraft ochiq boʻlmaganda CadCraft MCP serveri chizmani yangi hajm sifatida ochadi va saqlaydi, `cadcraft count` esa buyruq satridan sanaydi. Qarang: [Yordamchi nimalarni soʻrashi mumkin](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D tekshiruv koʻrinishi USD sifatida.** 3D tekshiruv koʻrinishidagi {{ui:GLB}} yonidagi {{ui:USD paket (.usdz)}} har bir devor, plita, plastina, sanash ustuni va yoʻlni oʻz obyekti sifatida yozadi, uni elementi nomi bilan ataydi va miqdorini metrda olib yuradi. Yordamchi ham uni eksport qila oladi (`usd_export`). Qarang: [3D tekshiruv koʻrinishini USD sifatida eksport qilish](topic:usd).

## Hamma ilovalarda

- **Birliklar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} da uzunlik, maydon, hajm, burchak va qiyalik uchun alohida roʻyxat bor, birliklarning taʼriflari bergan aniq oʻlchamlar bilan (AQSh survey foot oʻz birligi). Ishlatmaydigan birliklarni oʻchiring — ular birlik roʻyxatidan chiqadi; yulduzcha qoʻysangiz, yangi ish shu birlikda boshlanadi. Fayl doim oʻz birligini saqlaydi. TakeoffCraft'da element {{ui:Birlik}} roʻyxatlari kalitlarga amal qiladi, yangi element yulduzcha qoʻyilgan uzunlik yoki maydon birligida boshlanadi, tom kvadratlari (SQ), akr va gektarlar yangi maydon birliklari boʻldi, uzunlik maydoni esa istalgan birlik belgisini qabul qiladi, masalan `3 yd`. Qarang: [Birliklar, yozilgan qiymatlar va birlik roʻyxatlari](common:unit-lists).
- **Zich maket va yigʻiladigan panellar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Tartib zichligi}} › {{ui:Ixcham}} ekranga koʻproq sigʻdiradi (sensorli ekranlar va telefonlar katta tugmalarini saqlaydi). Har bir yon panelda ingichka sarlavha paneli bor: uni sudrab panelni biriktiring yoki suzdiring, boshqa panel sarlavhasiga tashlab bitta ramkani yorliqlar sifatida ulashing, chetga surilishi uchun mahkamlang yoki yashirib, chetdan qaytaring. Qarang: [Panellarni joylashtirish](common:arrange-panels#make-the-layout-denser).
- **Dialoglar koʻchadi.** Dialogni sarlavha paneli boʻyicha sudrab chizmadan chetga suring; u qoldirgan joyiga qaytadi. Sarlavha paneliga ikki marta bossangiz, u yana markazga keladi. Qarang: [Dialogni koʻchirish](common:arrange-panels#move-a-dialog).
- **AI yordamchilar uchun retseptlar.** Sizning yordamchingiz uchun oʻnta ishlangan soʻrov (chizmani tartibga solish, rejalar toʻplamini chizish, chizmalarni tekshirish, modelga savol berish, hajmni jamlash, detal variantini sinash va boshqalar), har biri chaqiradigan asboblar va kerakli ruxsatlar bilan. Har biri bizning testlarimizda qayta ijro etiladi. Ilovalarda AI yoʻq. Qarang: [AI yordamchilar uchun retseptlar](common:assistants-recipes).
- **Tillar.** **Português (Portugal)** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Til}} da yangi. U, **Português (Brasil)**, **Español (México)** va **Bahasa Indonesia** endi ilovalarning har bir soʻziga ega, ammo ona tili soʻzlovchi tomonidan hali koʻrib chiqilmagan qoralamalar sifatida. Yordam mavzulari inglizcha.
- **CadCraft Studio** yangilanishni tekshirish nima uchun muvaffaqiyatsiz boʻlganini aytadi (tizim uchun hali fayl yoʻq, tarmoq yoʻq, notoʻgʻri imzo) — oddiy "Tayyor" oʻrniga — va siz yopgan Yangiliklar kartochkasini yangiroq reliz chiqmaguncha qaytarmaydi.

## Hali bu versiyada yoʻq

- **0.7 kod bilan imzolanmagan.** Imzolash va Microsoft Store paketi 0.8 ga koʻchirildi, chunki sertifikat tekshiruvi hali tugamadi. Har bir fayl yonidagi SHA-256 ni getcadcraft.com/download sahifasida tekshiring. Windows'da SmartScreen oʻrnatuvchini toʻxtatsa, {{ui:Batafsil}} ni, soʻng {{ui:Baribir ishga tushirish}} ni tanlang. Mac'da birinchi marta CadCraft Studio'ni oʻng tugma bilan bosib {{ui:Ochiq}} ni tanlang. CadCraft Studio hali ilova doʻkonida emas va iPad yoki iPhone versiyasi hali yoʻq.
- {{ui:Birliklar}} dagi burchak va qiyalik roʻyxatlari saqlanadi, lekin hali hech qaysi katak ularni oʻqimaydi.
- **Taklif taklifnomalari koʻpchilik hisoblar uchun oʻchiq.** Sinov davomida tashqi taklif beruvchilarga pochta faqat CadCraft jamoasi yoqqan hisoblardan yuboriladi. Taklif beruvchilarning sahifalari allaqachon yuborilgan har bir taklifnoma uchun ishlaydi. Qolganlar: {{ui:Doira CSV}} ni yuklab oling, oʻzingiz elektron pochta orqali yuboring va takliflarni qoʻlda kiriting.
- CadCraft Studio oynasi hali taklif taklifnomalarini yubora olmaydi: u brauzerdagi TakeoffCraft'dan foydalanishni aytadi. Yuborilgan soʻrovli hajmni ochish, tenglashtirish va taklifni tanlash Studio'da ishlaydi.
- Qoʻshimcha hujjatlar (addenda), shartnoma xatlari, har bir taklif beruvchi imzolaydigan doira varagʻi va sugʻurta sanasi tugashidan oldingi avtomatik eslatmalar qurilmagan. Tanlangan taklif qoʻshimcha taklifning hudud narxini qayta hisoblamaydi.
- Chizmalar: chizish uslubi jadvallari va CTB fayllari qoʻllanmaydi, ikkilik DXF rad etiladi (ASCII DXF yoki DWG sifatida saqlang), bogʻlangan chizmalar faqat ochiq fayllar orasidan fayl nomi boʻyicha topiladi, chizmadagi PDF tagliklari, rasmlar va OLE obyektlari chizilmaydi va sanalmaydi. Sanashlar va masshtablar namunaviy chizmalarda tekshirilgan, haqiqiy ishdagi chizmalarda, ularni yaratgan dasturda hali emas.
- Yordamchi elementlar va belgilar qoʻsha oladi, lekin mavjud belgilarni koʻchira, oʻzgartira yoki oʻchira olmaydi.

Qolgan hamma narsa [Hali qurilmagan](topic:not-built-yet) boʻlimida.
