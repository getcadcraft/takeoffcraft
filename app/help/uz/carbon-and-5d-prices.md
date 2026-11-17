---
title: Oʻrnatilgan uglerod va 5D narx jadvali
summary: Uglerod hajmlarni hisoblashning har bir elementining miqdoridan va ochiq koeffitsientlar jadvalidan hajmlarning oʻrnatilgan uglerodini yigʻadi hamda stavkalaringizni BimCraft ga 5D xarajatlari uchun narx jadvali sifatida yuboradi.
keywords: uglerod, oʻrnatilgan uglerod, kgCO2e, co2, koeffitsientlar, A1-A3, tashish, chiqindi, 5d, narx jadvali, xarajat, bimcraft, epd
from: f4bff3b8
---

{{ui:Uglerod}} asboblar panelida oʻlchagan narsangizning oʻrnatilgan uglerodini yigʻadi va stavkalaringizni bino modeli ishlatishi mumkin boʻlgan narx jadvaliga aylantiradi. Bu taxminiy hisob, baholash emas.

## Oʻrnatilgan uglerod

Har bir elementning miqdori, chiqindisi bilan birga, koeffitsientlar jadvalining qatoriga koʻpaytiriladi. Qator element nomining soʻzlari boʻyicha mos keladi ("concrete slab" kalit soʻzi concrete boʻlgan qatorni topadi). Jadval BimCraft ishlatadigan oʻsha ochiq jadval, shuning uchun bu yerda yuklagan fayl u yerda ham ishlaydi. **Dasturga kiradigan qatorlar boshlangʻich qiymatlar: umumiy, tekshirilmagan va hech qanday maʼlumotlar bazasidan emas.** Muloqot oynasi buni raqamlar yonida aytadi; raqamga tayanishdan oldin ularni oʻz manbangiz bilan almashtiring.

1. {{ui:Uglerod}} ni tanlang. Hisoblangan elementlar kg CO2e miqdorlari bilan koʻrsatiladi; jami yuqorida.
2. Bu bosqichlarni ham hisoblash uchun {{ui:A4 tashish}} yoki {{ui:A5 qurilish chiqindisi}} ni belgilang — ularga raqam beruvchi qatorlar uchun. Mahsulot bosqichi har doim hisoblanadi.
3. Elementga boshqa qatorni yoki hech birini ishlatish uchun uning qatoridagi roʻyxatdan foydalaning.
4. {{ui:Koeffitsientlarni fayldan…}} oʻz manbangizdan tuzilgan koeffitsientlar jadvalini (JSON yoki CSV) yuklaydi; uning qatorlari bir xil id ga ega boshlangʻich qatorlarning oʻrnini egallaydi. {{ui:Koeffitsientlar (JSON)}} sizniki saqlaydi.

Koeffitsient metr, kvadrat metr, kub metr, element yoki kilogramm uchun. Futlarda yoki kvadrat futlarda oʻlchangan chiziq aylantiriladi. Kilogramm koeffitsienti hajmni (kub yard yoki metrda) va qatorning zichligini talab qiladi. Koeffitsienti oʻlchamaydigan miqdorni talab qiladigan element sababi bilan {{ui:Chetda qoldi}} ostida koʻrsatiladi, hech qachon taxmin qilinmaydi. Holat satridagi joriy jami xuddi shu raqamni koʻrsatadi.

Koeffitsient qatorlaringiz, tanlovlaringiz va hisoblaydigan bosqichlaringiz hajmlarni hisoblash faylida saqlanadi.

## 5D xarajatlari uchun narx jadvali

{{ui:5D narxlar (JSON)}} va {{ui:5D narxlar (CSV)}} hajmlarni hisoblash stavkalarini narx jadvali sifatida saqlaydi: narxlangan har bir element uchun bitta qator, uning birlik boʻyicha material va ish haqi stavkasi hamda chiqindisi bilan. Uni BimCraft xarajatlar panelida yuklang (Oʻrnatilgan uglerod va 5D xarajat), shunda bino modelining vazifalari taklifni yaratgan oʻsha stavkalar bilan narxlanadi. Jadvalda yoʻq birlikda oʻlchangan elementlar va stavkasi boʻlmagan elementlar chetda qoldiriladi.

## Yordamchingiz bilan

Agar {{ui:Sozlamalar}} da yordamchilarga ruxsat bersangiz, ular uglerodni oʻqiy oladi (carbon_check). Koeffitsientlarni yuklash sizning ishingiz.

## Bilib qoʻyish kerak

Hech narsa hech qayerga yuborilmaydi. Raqamlar siz yuklagan koeffitsientlar darajasida toʻgʻri boʻladi.
