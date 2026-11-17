---
title: Nashrlar, qayta koʻrib chiqishlar va chizmalar oʻzgarishlar jurnali
summary: Architektor modeli bilan bitta nashrlar tarixini saqlang: nashrlarni oʻqing, obyekt koʻrsatmalarini, ishlab chiqarish chizmalarini va bogʻlangan modellarni nashrga qarab yozing hamda chizmalar oʻzgarishlar jurnalini oʻqing.
keywords: nashr, qayta koʻrib chiqish, qayta koʻrib chiqishlar, oʻzgarishlar jurnali, chizmalar oʻzgarishlar jurnali, chizmalar reyestri, obyekt koʻrsatmasi, ishlab chiqarish chizmasi, bogʻlangan model, taklif, qurilish, nashrlar tarixi, miqdorlar hisobi, hajmlarni hisoblash
from: 8d8f6e68
---

## Nimalarni bajarasiz

Architektor bilan bir xil nashrlar tarixida ishlang. Qaysi varaqlar qaysi qayta koʻrib chiqishda chiqqanini koʻring va obyektda sodir boʻlgan ishlarni ularga tegishli nashr bilan bogʻlab turing.

## Qadamlar

1. **Nashrlar va qayta koʻrib chiqishlar** ni oching.
2. **Nashrlar tarixini oʻqish** ni tanlang va BimCraft yoki boshqa ilovadan saqlangan `.issues.json` faylini tanlang. Uning nashrlari va yozuvlari sizning tarixingizga qoʻshiladi. Hech narsa almashtirilmaydi.
3. Obyekt koʻrsatmasi, ishlab chiqarish chizmasi, belgilashlar toʻplami, bogʻlangan model yoki izoh uchun **Yozuv qoʻshish** ni tanlang. Unga tegishli nashrni va holatini tanlang. Tanlangan fayl nomi, hajmi va SHA-256 boʻyicha yoziladi; fayl oʻz joyida qoladi.
4. **Chizmalar oʻzgarishlar jurnali** har bir varaq uchun bitta qator va har bir nashr uchun bitta ustun koʻrsatadi. Qavs ichidagi qayta koʻrib chiqish oʻzgarishsiz qayta chiqarilgan.
5. **Oʻzgarishlar jurnalini yuklab olish (CSV)** nashrlarni, varaqlar jadvalini va yozuvlarni saqlaydi. **Nashrlar tarixini saqlash** boshqa ilovalar oʻqiydigan faylni yozadi.

## Yaxshi bilish kerak

- **Nashrni qayd etish** oʻlchangan varaqlaringizni nashr qiladi, masalan miqdorlar hisobi bilan. **Shundan beri oʻzgarishlar** shu nashrdan keyin qaysi varaqlar qayta oʻlchanganini koʻrsatadi.
- Tarix hajmlar hisobi faylida saqlanadi. Har bir oʻzgarish bitta **Ortga qaytarish** qadami.
- Bir faylni ikki marta oʻqish hech narsani ikki marta qoʻshmaydi. Ikki nusxada bir xil yozuv boʻlsa, yangisi saqlanadi.
