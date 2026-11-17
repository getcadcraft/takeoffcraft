---
title: "Ofis maketi: guruhlash, oraliq jamilar, sarlavha va sarlavhalar Standart qoidalardan"
summary: "Standart qoidalar qoʻshimchasini yoqing: smeta, varaqlar boʻyicha miqdorlar, eksportlar va yordamchi oʻqiydigan narsalar ofisingizning jadval maketini oladi — BimCraft jadvallari olgan xuddi shu maketni."
keywords: ofis standarti, ofis maketi, standart qoidalar, qoʻshimcha, jadval maketi, tur boʻyicha guruhlash, varaq boʻyicha guruhlash, oraliq jami, jami, sarlavha, sarlavhalar, bosh harflar, smeta maketi, eksport maketi, sozlamalar
from: cfd2f30a
---

## Nima qilasiz

TakeoffCraft jadvallarini ofisingiz qanday chiqarsa, shunday joylashtiring — har bir hajmda alohida sozlamasdan. Maket bir marta Standart qoidalar da belgilanadi va bu kompyuterdagi barcha ilovalar uchun amal qiladi: BimCraft yoki CadCraft da sozlagan narsangiz TakeoffCraft uchun ham ishlaydi, va aksincha.

## Qadamlar

1. **Sozlamalar › Qoʻshimchalar** ni oching va **Standart qoidalar** ni yoqing. U siz yoqmaguningizcha oʻchiq turadi; oʻchiq boʻlsa yoki hech narsa sozlanmagan boʻlsa, TakeoffCraft oldingidek ishlaydi.
2. **Sozlamalar › Umumiy › Standart qoidalar** ni oching va **Jadval maketi (ofis standarti)** ni toping:

| Qoida | TakeoffCraft da nima qiladi |
|---|---|
| Jadvallarni guruhlash | **Tur** smetani element turi boʻyicha guruhlaydi (Linear, Area, Count, Typed quantity). **Sath** miqdorlarni ularning varaqlari boʻyicha guruhlaydi. **Xona** va **Guruhlashsiz** ikkalasini ham guruhlamaydi |
| Jadvaldagi jamilar | **Har bir guruh ostida oraliq jami va jami** har bir guruh ostida oraliq jami qoʻshadi. Ish boʻyicha umumiy jami doim qoladi |
| Jadval sarlavhasi | Jadval ustidagi qator, masalan `{schedule}: office layout` |
| Ustun sarlavhalari | Yozilganidek, KATTA HARFLARDA yoki Bosh Harflar bilan |

3. Sozlamalarni yoping. Jadvallar darhol shunga moslashadi.

## Maket nimalarga taalluqli

- **Miqdorlar › Element boʻyicha** va **Varaq boʻyicha**: guruh sarlavhalari, har bir guruh ostidagi oraliq jami, sarlavha va sarlavha yozuvi. Sarlavha ostidagi qator ofisingiz standarti qaysi qismlarni belgilaganini koʻrsatadi. Qatorlar bir xil: stavka va chiqindilarni hali ham ularga yozasiz va belgilarini tanlash uchun raqamlarni bosasiz. Tarkibiy qism yoki ikkinchi shart oʻz elementi ostida qoladi.
- **Eksport qilingan smeta** (CSV va XLSX): xuddi shu guruhlar va oraliq jamilar. Ish kitobida oraliq jami uning guruhi ustidagi `SUBTOTAL` formulasi, ish umumiy jamisi ham formula, shuning uchun hech narsa ikki marta hisoblanmaydi.
- **Yordamchi oʻqiydigan narsa**: `takeoff_estimate` va `takeoff_quantities` (varaq boʻyicha) guruhlar, qatorlar va oraliq jamilar bilan `layout` blokini qoʻshadi va ofis qaysi qismlarni belgilaganini aytadi.

## Oʻz holicha qoladigan narsalar

- **Miqdorlar › Maydon boʻyicha** oʻz guruhlashini (taklif maydoni boʻyicha) koʻrsatadi va uni saqlab qoladi.
- **Ish umumiy jami**, taklif xulosasidagi belgilashlar va muqobillar qayta guruhlanmaydi.
- Jadvalda ustuni yoʻq guruhlash chiqarib tashlanadi: smetada sath yoʻq, varaq boʻyicha miqdorlarda tur yoʻq.

## Bilib qoʻyish foydali

- Qoidalar bu brauzerda barcha CadCraft ilovalari uchun saqlanadi va Standart qoidalar faylida koʻchadi (xuddi shu joyda **Faylga saqlash** / **Fayldan yuklash**), shuning uchun ofis bitta faylni ulashadi.
- Guruhlari bor CSV sifatida eksport qilingan smeta oʻqish uchun moʻljallangan. Smetani narxlar kutubxonasi sifatida qaytarib kiritish uchun, uni guruhlashsiz eksport qiling.
- Xuddi shu standartning BimCraft tomoni: jadvallar, tuzilmalar va eksportlar. TakeoffCraft da hali oʻz qoidalari yoʻq, shuning uchun Sozlamalar › TakeoffCraft ostida Standart qoidalar boʻlimi yoʻq.
