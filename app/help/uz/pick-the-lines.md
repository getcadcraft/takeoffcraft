---
title: "PDF chiziqlarini tanlash"
summary: "Vektor PDF ning chizigʻini bosing — uning butun ulangan yoʻlini oʻlchang yoki yopiq kontur ichiga bosib uning maydonini oling; boʻshliq chegarasi koʻrsatiladi va har bir segment uchun bitta bekor qilish."
keywords: yoʻl, tanlash, chiziqlar, ulangan, butun yoʻl, kuzatish, kontur, perimetr, boʻshliq, chegara, koʻprik, segmentlar, Tab, vektor, chiziqlardan maydon, p
from: c22526ae
---

Vektor PDF da devorlar va chekkalar haqiqiy chiziqlardir. {{ui:Yoʻl}} ({{key:P}}) ularni chizilgani kabi oladi: chiziqdagi bitta bosish unga ulangan hamma narsani uchidan uchigacha oʻlchaydi, shuning uchun devorni burchaklarini bosib kuzatish shart emas. Varaqda masshtab boʻlishi kerak. Skanerlangan sahifada tanlanadigan chiziqlar yoʻq; u yerda [Linear](topic:measure-linear) yoki [Area](topic:measure-areas) dan foydalaning.

## Yoʻl yoki kontur tanlash

1. {{ui:Yoʻl}} ni tanlang. Kursor ostidagi chiziq konturlanadi, u boshqa mumkin boʻlgan yoʻllar bilan birga ingichka chizilishi mumkin.
2. Chiziqni bosing: butun ulangan yoʻl tanlanadi. Asboblar paneli ostidagi satr uning segmentlarini, uzunligini, boʻshliq chegarasini va nechta boʻshliq koʻprik qilinganini beradi. Boshiga qaytib kelgan yoʻl yopiq hisoblanadi va uning perimetrini ham koʻrsatadi.
3. Yoki yopiq kontur ichiga, chiziqlardan uzoqroq bosing: shu nuqta atrofidagi kontur maydon sifatida tanlanadi. Eng kichigi birinchi keladi; {{key:Tab}} navbatdagi kattaroqini sinab koʻradi.
4. Belgilarni qoʻshish uchun {{key:Enter}} ni bosing (yoki oʻng tugma, yoki ikki marta bosish). Tanlangan yoʻl **Linear** elementining belgisiga, kontur **Area** elementining belgisiga aylanadi: agar faol element shu turga ega boʻlsa oʻsha, aks holda shu turdagi eng yangisi. Bunday element boʻlmasa, yangi element shakli ochiladi va {{key:Enter}} ni yana bosmaguningizcha hech narsa qoʻshilmaydi. Tanlangan hamma narsa bitta bekor qilish qadamida qoʻshiladi.

## Boʻshliq chegarasi

Chizmachilar chiziqlar uchrashishi kerak boʻlgan joylarda kichik teshiklar qoldiradi. Ikki chiziq uchlari **boʻshliq chegarasi**dan yaqinroq boʻlsa birlashadi. U varaqda 1.5 nuqtadan boshlanadi (masshtabda futlar va dyuymlarda koʻrsatiladi); shu kenglikdagi punktirli halqa kursorni kuzatadi va ostidagi yoʻlning har bir uchida turadi. Koʻprik qilingan har bir teshik tanlangan yoʻlda toʻq sariq rang bilan halqalanadi, va satr ularni sanaydi.

{{key:]}} chegarani kengaytiradi, {{key:[}} kichikroq qiladi. Tanlangan yoʻl yangi chegarada darhol qayta ulanadi. Tutashuv joyida yoʻl eng kam buriladigan tarzda toʻgʻri davom etadi va tarmoqni qoldiradi.

## Tugmalar

| Tugma yoki amal | Nima qiladi |
|---|---|
| Bosish | Kursor ostidagi yoʻlni yoki uning atrofidagi konturni tanlaydi. |
| {{key:Shift}} + bosish | Tanlanganga yana yoʻl yoki kontur qoʻshadi. |
| {{key:Tab}} | Kursor ostidagi navbatdagi yoʻlni yoki navbatdagi kattaroq konturni sinab koʻradi. |
| {{key:Backspace}} yoki {{key:Mod+Z}} | Oxirgi tanlangan yoʻldan oxirgi segmentni olib tashlaydi, bir vaqtda bitta segment. Segmentlari qolmagan yoʻl ham yoʻqoladi. Hech narsa tanlanmagan boʻlsa, {{key:Mod+Z}} oddiy bekor qilishdir. |
| {{key:[}} va {{key:]}} | Boʻshliq chegarasini kichikroq va kengroq qiladi. |
| {{key:Enter}} | Belgilarni qoʻshadi. |
| {{key:Esc}} | Tanlanganlarni tozalaydi. |

## Bilib qoʻyish foydali

- Chizmadagi egri chiziq qisqa toʻgʻri boʻlaklar zanjiri, shuning uchun uning uzunligi haqiqiy yoy uzunligidan bir oz kam. Aniq yoy uchun chizmaning oʻz faylini oʻlchang ([Chizmadan oʻlchash](topic:measure-from-a-drawing)).
- Koʻprik qilingan boʻshliq uni kesib oʻtuvchi toʻgʻri sakrash hisoblanadi, shuning uchun yopiq konturning perimetriga u kiradi.
- Faqat sahifaning oʻz yoʻllaridagi chiziqlar va toʻldirishlar chiziq hisoblanadi. Harf sifatida chizilgan matn va rasmlar emas.
