---
title: 0.7 versiyasidagi yangiliklar
summary: DWG va DXF chizmalar oʻz masshtabi bilan varaq sifatida ochiladi, chizmaning oʻzidan aniq sanash va uzunliklar, tanlangan subpudratchi taklifi paket narxi sifatida, yopiq narxli taklifnomalar, chizmalar uchun yordamchi vositalar va 3D tekshirish koʻrinishidan USD.
keywords: yangiliklar, nima yangi, relizlar, oʻzgarishlar, versiya, 0.7, yangi imkoniyatlar, dwg, dxf, chizma, joylashuvlar, model fazosi, chizma masshtabi, chizmadan sanash, cad sanash, bloklar, dinamik bloklar, atributlar, qatlamlar, xref, bogʻlangan chizma, chizmani oʻlchash, polichiziq, shtrixlash, belgilangan pdf, tanlangan taklif, taklifni qoʻllash, taklif uchun yuborish, yopiq takliflar, taklifnoma, kechikkan taklif, subpudratchi yozuvlari, csv, yordamchi, mcp, usd, usdz, birliklar, birlik roʻyxatlari, ixcham, panellar, dialoglar, portugalcha
from: ad4f0df1
---

Bu TakeoffCraft 0.6 bilan solishtirganda 0.7 da nima oʻzgarganini bildiradi. Endi chizmalar avval PDF ga chop etilmasdan, qanday boʻlsa shundayligicha ochiladi va taklif paketi subpudratchilarga yuborilib, narxi bilan qaytishi mumkin.

## Yangi

### DWG va DXF chizmalar

- **Chizmani varaqlar sifatida oching.** Fayl guruhidagi {{ui:Rejalarni ochish}} ({{key:Mod+O}} yoki fayllarni tashlang) DWG va DXF chizmalarni PDF lar bilan birga qabul qiladi. Model fazosi va har bir joylashuv {{ui:Varaqlar}} roʻyxatidagi varaqlarga aylanadi, hajm esa chizmalar va PDF larni birga qamrab olishi mumkin. Hech narsa yuklanmaydi. Qarang: [DWG yoki DXF chizmani ochish](topic:open-a-drawing).
- **Masshtab chizmadan olinadi.** Joylashuv eng katta koʻrinish oynasining masshtabidan boshlanadi; agar shunday boʻlsa, oldindan oʻrnatilgan nomi bilan, masalan 1/2" = 1'-0". Model chizmaning birliklaridan boshlanadi. Birliklari boʻlmagan chizma kalibrlanmaguncha "Masshtab yoʻq" deydi. {{ui:Kalibrlash}}, {{ui:Tekshirish}} va {{ui:Oldindan oʻrnatilgan}} hali ham ustunlikka ega. Qarang: [Masshtab](topic:open-a-drawing#the-scale).
- **Qatlamlar va bogʻlangan chizmalar.** {{ui:Qatlamlar}} varaq panelida chizmaning qatlamlarini koʻrsatadi yoki yashiradi. Fayl oʻchirib qoʻygan yoki muzlatgan qatlamlar dastlab yashirin boʻladi va siz tanlamasangiz sanalmaydi. Bogʻlangan chizma (xref) yonida ochilganda oʻz joyida chiziladi va sanaladi; ochilmaguncha holat paneli nima yetishmayotganini koʻrsatadi. Qarang: [Qatlamlar](topic:open-a-drawing#layers).
- **Belgilangan PDF chizmadan ishlaydi.** {{ui:Eksport}} › {{ui:Belgilangan PDF}} chizmaning belgilangan varaqlarini avval PDF sifatida chizadi, shuning uchun nusxada belgilaringiz va izoh jadvali chop etish bosqichisiz koʻrinadi. U qora yoki chizmaning ranglarida chiziladi, chop etish uslubi jadvallarisiz. Qarang: [Belgilangan PDF](topic:export-estimate#a-marked-pdf).

### Chizmadan aniq sanash va uzunliklar

- **Chizmada koʻrsatilgan narsalarni sanang.** {{ui:CAD sanash}} varaq panelida blokni nomi boʻyicha sanaydi (ichki bloklar, dinamik blok holatlari va blok massivlari bilan birga), bir qatlamdagi bir turdagi hamma narsani yoki matn yoki atribut qiymatini. U varaqda koʻrsatilganini yoki butun chizmani bir marta sanaydi. Belgilarni qoʻshish bitta ortga qaytarish bosqichi boʻladi va qayta sanash faqat yangisini qoʻshadi. {{ui:Avtosanash}} PDF lar va blok boʻlmagan belgilar uchun qoladi. Qarang: [Chizmadan sanash](topic:count-from-a-drawing).
- **Chizmaning oʻz chiziqlaridan oʻlchang.** {{ui:Chizmani oʻlchash}} bosgan yoki oynaga olib tanlagan chiziqlar, yoylar, polichiziqlar, aylanalar, shtrixlashlar va yaxlit shakllarni chiziqli yoki maydon elementining belgisi sifatida oladi. Yoylar, egilishlar va shtrixlashdagi teshiklar aniq chiqadi; ellipslar va splaynlar mayda vatarlar bilan oʻlchanadi va panelda bu aytiladi. Qarang: [Chizmadan oʻlchash](topic:measure-from-a-drawing).

### Taklif

- **Subpudratchi taklifini paket narxi sifatida ishlating.** {{ui:Eksport}} › {{ui:Taklif paketlari va tenglashtirish…}} boʻlimida taklifda {{ui:Qoʻllash}} ni tanlang. Paket elementlari miqdor sifatida qoladi, bitta **Tanlangan taklif** qatori narxni olib boradi, taklif qoldirgan elementlar sizning xarajatingizda qoladi va umumiy xarajat, foyda hamda kafolat unga qoʻllanadi. Taklifni almashtirish bitta ortga qaytarish qadami; ish kitobi va taklif xulosasi buni olib yuradi. Qarang: [Taklifni paket narxi sifatida qoʻllash](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Paketni taklifga yuboring.** Paket ostidagi {{ui:Taklif uchun yuborish…}} har bir subpudratchiga elektron pochta orqali hisob talab qilmaydigan sahifa havolasini yuboradi: ular koʻlamni va varaqlarni PDF sifatida koʻradi, har bir qatorga narx yozadi yoki "kiritilmagan" deb belgilaydi, izoh va uchtagacha fayl qoʻshadi yoki rad etadi. {{ui:Narxlarni olish}} qaytganlarini tenglashtirish varagʻiga **veb** belgisi bilan oladi. Yuborish faqat CadCraft jamoasi sinovdan oʻtkazish davomida yoqqan hisoblar uchun ochiq (quyida qarang). Qarang: [Paketni taklifga yuborish](topic:bid-invitations).
- **Yopiq narxlar ochilguncha.** Narxlar siz belgilagan ochilish vaqtigacha yopiq qolishi mumkin: shu vaqtgacha hech kim narxni koʻrmaydi, siz ham. Ochilishda har bir taklif bir vaqtda koʻrinadi, belgilangan muddatdan keyin kelgan taklif esa kechikkan deb belgilanadi. Qarang: [Yopiq takliflar va ochilish](topic:bid-invitations#sealed-bids-and-the-opening).
- **Subpudratchi yozuvlari.** getcadcraft.com dagi hisobingiz har bir kompaniyaning aloqa maʼlumotlarini, sohalarini, malaka savollariga javoblarini va sugʻurta hamda litsenziya sanalarini (oʻtib ketgan yoki 30 kun ichida boʻlsa bir marta belgilanadi) oʻtgan takliflari bilan birga saqlaydi. Ularni CSV sifatida import va eksport qilishingiz hamda paket yuborganda tanlashingiz mumkin. Qarang: [Veb-saytda](topic:bid-invitations#on-the-website).

### AI yordamchilari

- **Yordamchilar hajmga qoʻshishi mumkin.** **Tahrirlash** belgilangan boʻlsa, sizning yordamchingiz elementlar qoʻshishi (`items_add`) va varaqda yoʻllar, maydonlar va sanashni oʻlchashi (`marks_add`; uzunlik va maydon faqat masshtabli varaqda) mumkin. Har bir chaqiruv bitta ortga qaytarish qadami.
- **Chizmalar uchun yordamchi vositalar.** Ochiq DWG yoki DXF da yordamchi uning varaqlarini va sanash mumkin boʻlgan narsalarni roʻyxatlaydi, aniq sanaydi, sanash belgilarini qoʻshadi va chizma geometriyasidan oʻlchaydi. TakeoffCraft ochiq boʻlmaganda CadCraft MCP serveri chizmani yangi hajm sifatida ochadi va saqlaydi, `cadcraft count` esa buyruq satridan sanaydi. Qarang: [Yordamchi nimani soʻrashi mumkin](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D tekshirish koʻrinishi USD sifatida.** 3D tekshirish koʻrinishidagi {{ui:USD paket (.usdz)}} {{ui:GLB}} yonida har bir devor, plita, plastina, sanash ustuni va yoʻlni oʻz elementi nomi bilan alohida obyekt sifatida yozadi va miqdorini metrda saqlaydi. Yordamchi ham uni eksport qilishi mumkin (`usd_export`). Qarang: [3D tekshirish koʻrinishini USD sifatida eksport qilish](topic:usd).

## Har bir ilovada

- **Birliklar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} boʻlimida uzunlik, maydon, hajm, burchak va qiyalik uchun alohida roʻyxat bor, birliklar taʼriflari bergan aniq oʻlchamlar bilan (AQSh geodezik futi oʻz birligi). Ishlatmaydigan birliklarni oʻchirib qoʻying, ular birlik roʻyxatlaridan chiqadi; yulduzcha qoʻysangiz, yangi ish shu birlikda boshlanadi. Fayl doim oʻz birligini saqlaydi. TakeoffCraft da elementning {{ui:Birlik}} roʻyxatlari kalitlarga ergashadi, yangi element yulduzcha qoʻyilgan uzunlik yoki maydon birligida boshlanadi, tom qoplamasi kvadratlari (SQ), akr va gektar yangi maydon birliklari boʻladi, uzunlik katagi esa istalgan birlikning belgisini qabul qiladi, masalan `3 yd`. Qarang: [Birliklar, kiritilgan qiymatlar va birlik roʻyxatlari](common:unit-lists).
- **Ixcham tartib va yigʻiladigan panellar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Tartib zichligi}} › {{ui:Ixcham}} ekranga koʻproq sigʻdiradi (sensorli ekranlar va telefonlar katta tugmalarini saqlaydi). Har bir yon panelda ingichka sarlavha paneli bor: uni sudrab qoʻyish yoki suzdirish, boshqa panel sarlavhasi ustiga tashlab bitta ramkani yorliqlar sifatida ulashish, chetga siljishi uchun mahkamlash yoki yashirib, chetdan qaytarish mumkin. Qarang: [Panellarni joylashtirish](common:arrange-panels#make-the-layout-denser).
- **Dialoglar siljiydi.** Dialogni sarlavha paneli boʻyicha sudrab chizmadan chetga suring; u qoldirilgan joyga qaytadi. Markazga qaytarish uchun sarlavha panelini ikki marta bosing. Qarang: [Dialogni siljitish](common:arrange-panels#move-a-dialog).
- **Yordamchilar uchun retseptlar.** Yordamchingiz uchun oʻnta ishlangan soʻrov (chizmani tartibga keltirish, toʻplamni chop etish, chizmalarni tekshirish, modelga savol berish, hajmni jamlash, detal variantini sinash…), har biri chaqiradigan vositalar va kerakli ruxsatlar bilan. Ularning har biri bizning testlarimizda qayta ijro etiladi. Ilovalarda AI yoʻq. Qarang: [Yordamchilar uchun retseptlar](common:assistants-recipes).
- **Tillar.** **Português (Portugal)** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Til}} boʻlimida yangi. U, **Português (Brasil)**, **Español (México)** va **Bahasa Indonesia** endi ilovaning har bir soʻzi bilan mavjud, ammo ona tilida tekshirilmagan qoralamalar sifatida. Yordam mavzulari ingliz tilida.
- **CadCraft Studio** yangilanishni tekshirish nega muvaffaqiyatsiz boʻlganini aytadi (tizim uchun hali fayl yoʻq, tarmoq yoʻq, notoʻgʻri imzo) "Tayyor" oʻrniga va siz yopgan Yangi nima bor kartasini yangi reliz chiqmaguncha qaytarmaydi.

## Bu versiyada hali yoʻq

- **0.7 kod bilan imzolanmagan.** Imzolash va Microsoft Store paketi 0.8 ga oʻtdi, chunki sertifikat tekshiruvi hali kelmadi. getcadcraft.com/download sahifasida har bir fayl yonidagi SHA-256 ni tekshiring. Windows da SmartScreen oʻrnatuvchini toʻxtatsa, {{ui:Batafsil}} ni, soʻng {{ui:Baribir ishga tushirish}} ni tanlang. Mac da birinchi marta CadCraft Studio ustiga oʻng tugmani bosib {{ui:Ochiq}} ni tanlang. CadCraft Studio hali ilova doʻkonida yoʻq va iPad yoki iPhone versiyasi hali yoʻq.
- {{ui:Birliklar}} ichidagi burchak va qiyalik roʻyxatlari saqlanadi, ammo hali hech bir katak ularni oʻqimaydi.
- **Taklifnomalar koʻpchilik hisoblar uchun oʻchirilgan.** Funksiya sinovdan oʻtayotgan paytda tashqi taklif beruvchilarga pochta faqat CadCraft jamoasi yoqqan hisoblardan yuboriladi. Allaqachon yuborilgan barcha taklifnomalar uchun taklif beruvchilar sahifalari ishlaydi. Boshqa barcha hisoblar: {{ui:Doira CSV}} ni yuklab oling, oʻzingiz elektron pochta bilan yuboring va takliflarni qoʻlda kiriting.
- CadCraft Studio oynasi hali taklifnoma yubora olmaydi: u brauzerdagi TakeoffCraft dan foydalanishni aytadi. Yuborilgan soʻrovlari bor hajmni ochish, tenglashtirish va taklifni tanlash Studio da ishlaydi.
- Qoʻshimchalar, tanlov xatlari, har bir taklif beruvchi tasdiqlaydigan koʻlam varagʻi va sugʻurta sanasi tugashidan oldingi avtomatik eslatmalar hali qurilmagan. Tanlangan taklif muqobil taklifning hisob maydonini qayta narxlamaydi.
- Chizmalar: chop etish uslubi jadvallari va CTB fayllar qoʻllanmaydi, ikkilik DXF rad etiladi (ASCII DXF yoki DWG sifatida saqlang), bogʻlangan chizmalar faqat ochiq fayllar orasida fayl nomi boʻyicha topiladi, chizmadagi PDF tagliklar, rasmlar va OLE obyektlar esa chizilmaydi va sanalmaydi. Sanashlar va masshtablar namunaviy chizmalarda tekshirilgan, ammo hali ularni yaratgan dasturda ochilgan haqiqiy ish chizmalarida emas.
- Yordamchi elementlar va belgilar qoʻsha oladi, ammo allaqachon mavjud belgilarni koʻchira, oʻzgartira yoki oʻchira olmaydi.

Qolgan hamma narsa [Hali qurilmagan](topic:not-built-yet) boʻlimida.
