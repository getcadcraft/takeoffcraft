---
title: Chizmadan sanash
summary: DWG yoki DXF dan toʻgʻridan-toʻgʻri bloklar, qatlamdagi obyektlar yoki matnni sanang: aniq, ichki bloklar, dinamik blok variantlari va blok massivlari hisobga olinadi, bir qadamda qaytariladi.
keywords: chizmadan sanash, cad sanash, blok sanash, bloklarni sanash, qoʻyish, blok nomi, ichki bloklar, dinamik blok, variant, minsert, massiv, qatlam, obyekt turi, doiralar, matn, atribut, teg, yashirin qatlamlar, aniq sanash, qanday qilish, eshiklar, asboblar
from: 5060e24e
---

Varaq panelidagi {{ui:CAD count}} (boshqa menyu uslublarida **Count from the drawing** buyrugʻi) DWG yoki DXF da nima borligini sanaydi. {{ui:Auto count}} belgining rasmini qidiradi va bitta narsani qoldirishi yoki soxta narsani topishi mumkin; bu esa obyektlarni sanaydi: `DOOR-36` nomli blokning har bir qoʻyilishi bitta eshik. Avval chizmani oching: [DWG yoki DXF chizmasini ochish](topic:open-a-drawing).

## Blokni sanash

1. Chizmaning varagʻini oching. {{ui:CAD count}} varaq panelida.
2. Uni tanlang. Oyna bloklar roʻyxatini va har biridan nechtasi borligini koʻrsatadi. Nomi boʻyicha qidiring, soʻng birini tanlang.
3. Roʻyxat ostidagi qatorni tekshiring: "22 found, 22 to add."
4. {{ui:Add to}} ostida sanash elementini tanlang yoki {{ui:A new count item}} ni qoldirib, unga nom bering.
5. Sonni koʻrsatuvchi qoʻshish tugmasini bosing: {{ui:22 ta belgi qoʻshish}}. Belgilar blokning qoʻyilish nuqtalarida paydo boʻladi va elementning miqdori sanoq boʻladi.

Bu bitta qaytarish bosqichi: {{key:Mod+Z}} belgilarni (va yangi elementni) birga olib tashlaydi. Hisob-kitob, elektron jadval va belgilangan PDF elementni boshqa sanash elementi kabi koʻradi.

### Nima sanaladi

- **Blok nomining har bir qoʻyilishi**, masshtabi va burchagidan qatʼi nazar, model fazosida yoki qogʻoz fazosida. Blok nomlari registrga bogʻliq emas.
- **Blok massivlari** (MINSERT): massivdagi har bir nusxa bitta hisoblanadi.
- **Ichki bloklar.** Boshqa blok ichiga qoʻyilgan blok har qanday chuqurlikda sanaladi. Roʻyxatda "6 inside other blocks" yoziladi; faqat chizmaga toʻgʻridan-toʻgʻri qoʻyilganlarni sanash uchun {{ui:Count blocks inside other blocks too}} ni belgisini olib tashlang.
- **Dinamik bloklar.** Dinamik blok oʻz nomi ostida sanaladi, fayl saqlaydigan anonim nusxalar (`*U12`) ostida emas. Uning holatlari alohida roʻyxatlanadi ("Single 12, Double 4"): faqat ularni sanash uchun holatni tanlang yoki {{ui:Every variant}}. Fayl nusxa qaysi holatni koʻrsatishini aytmasa, ular "(state not known)" deb roʻyxatlanadi.
- **Qatlam filtri.** Bir nechta qatlamdagi blok: {{ui:On layer}} ostida bittasini tanlang.

### Nima sanalmaydi

- **Yashirin qatlamlar.** Faylda oʻchiq yoki muzlatilgan qatlamdagi obyekt (yoki siz {{ui:Layers}} da yashirgan obyekt) chiqarib tashlanadi va qatorda nechtasi ekani aytiladi: "3 on hidden layers left out". Ularni ham kiritish uchun {{ui:Count them too}} ni belgilang.
- **Ochilmagan bogʻlangan chizmalar** sanalmaydi; oyna buni aytadi.
- **Xuddi shunday turdagi boshqa obyekt ustiga aynan qoʻyilgan obyektlar** ikkita hisoblanadi (ular ikkita obyekt) va oyna buni aytadi: odatda chizma xatosi boʻlib, koʻzdan kechirish kerak.

## Bu varaq koʻrsatadigan yoki butun chizma

- **Bu varaq koʻrsatadigan** sanash sahifa koʻrsatgan obyektlarni sanaydi: joylashuvda, uning koʻrinish oynalaridagi model obyektlari (koʻrinish oynasida muzlatilgan qatlam u yerda sanalmaydi) va joylashuvning oʻz obyektlari.
- **Butun chizma, har bir obyekt bir marta** model fazosini bir marta sanaydi, belgilar Model varagʻida boʻladi va bir nechta joylashuv koʻrsatgan narsani qayta sanamaydi.

Joylashuv koʻrsatgan va Model koʻrsatgan narsalarni sanash bir xil obyektlar uchun bir xil sonni beradi; bitta elementga ikkalasini qoʻshmang.

## Blokni yana sanash

Xuddi shu blokni xuddi shu element bilan yana sanash faqat yangisini qoʻshadi: "22 already counted." Har bir belgi bitta obyektni bildiradi.

## Qatlam va tur boʻyicha

{{ui:By layer and type}} da qatlam va obyekt turini tanlang (doiralar, polichiziqlar, shtrixlar...): "E-LITE dagi barcha doiralar". Blok taʼriflari ichidagilarni ham, har bir qoʻyilgan joyda, qoʻshish uchun {{ui:Also count objects inside blocks}} ni belgilang.

## Matn boʻyicha

{{ui:By text}} da matnni yozing, masalan `A3`, va u aynan shu, oʻz ichiga olgan yoki butun soʻz sifatida ekanini ayting. Matn obyektlari, multileader matni va blok **atribut qiymatlari** ham sanaladi (teg atributi `ITEM = A3` topiladi); faqat bitta atributni sanash uchun {{ui:In attribute}} ni tanlang. Eng koʻp uchraydigan matnlar bosish uchun roʻyxatlanadi.

## Avtosanashni qachon ishlatish

PDF lar uchun va blok boʻlmagan (erkin chizilgan yoki portlatilgan) chizmadagi belgilar uchun {{ui:Auto count}} dan foydalaning. Blok sifatida chizilgan boʻlsa, bu yerda sanang.
