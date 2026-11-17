---
title: "Narxlar kutubxonasi"
summary: "Elementlaringiz, stavkalaringiz va yigʻmalaringizni kutubxonada saqlang, uni CSV yoki oʻtgan smetadan import qiling, kutubxonadan istalgan hajmga elementlar qoʻshing va hajmning narxlarini undan yangilang."
keywords: kutubxona, soha paketlari, narxlar roʻyxati, narxlar kitobi, xarajat bazasi, csv import, stavkalar, yigʻmalar, qayta ishlatish, shablon elementlar, narxlarni yangilash, qayta narxlash
from: 37356c68
---

**Narxlar kutubxonasi** har bir ishda foydalanadigan elementlarni saqlaydi: ularning turi, birligi, balandligi, chiqindisi, material va mehnat stavkalari hamda yigʻmasi. U shu brauzerda saqlanadi, har qanday hajmdan alohida, shuning uchun bu yerda ochgan har bir hajm undan foydalana oladi.

Uni {{ui:Elementlar}} panelining tepasidagi {{ui:Kutubxona}} bilan oching.

## Kutubxonani toʻldirish

- {{ui:CSV import qilish…}} CSV sifatida saqlangan elektron jadvalni oʻqiydi (quyidagi ustunlarga qarang). Nomi va turi kutubxonada allaqachon bor elementlar almashtiriladi; qolganlari qoʻshiladi. Oʻqib boʻlmaydigan qatorlar oʻtkazib yuboriladi va qaysi va nega ekanligi aytiladi.
- {{ui:Shu hajm elementlarini qoʻshish}} ochiq hajmning har bir elementini stavkalari va yigʻmasi bilan kutubxonaga nusxalaydi (belgilarini emas).
- TakeoffCraft eksport qiladigan smeta CSV ([Smetani eksport qilish](topic:export-estimate)) oʻz holicha import qilinadi: oxirgi ishning narxlari keyingisiga boshlangʻich boʻladi.

- {{ui:Soha paketlari…}} bir soha uchun, masalan gipskarton, elektr yoki beton uchun narxsiz bepul yigʻmalar qoʻshadi. Qarang: [Soha paketlari](topic:trade-packs).

{{ui:CSV eksport qilish}} kutubxonani CSV sifatida saqlaydi: nusxa saqlash, elektron jadvalda tahrirlash yoki hamkasbga berish uchun. {{ui:Tozalash}} uni boʻshatadi (ikki marta bosing).

:::note
Kutubxona bu brauzerning xotirasida yashaydi. Boshqa brauzer, boshqa kompyuter yoki maxfiy oyna oʻz kutubxonasiga ega (yoki hech qanday kutubxonaga ega emas). Uni koʻchirish uchun eksport qiling.
:::

## Hajmda foydalanish

- Elementlarni belgilang (roʻyxatni toraytirish uchun {{ui:Kutubxonadan qidirish}} ga yozing) va {{ui:Hajmga qoʻshish}} ni tanlang. Ular yigʻmalari bilan bitta qadamda qoʻshiladi, uni {{key:Mod+Z}} bekor qiladi. Hajmda allaqachon bor nom raqam oladi, masalan `Carpet (2)`.
- {{ui:Narxlarni yangilash}} hajm elementlariga kutubxonaning chiqindisi va stavkalarini beradi — nomi va turi kutubxona elementiga mos keladigan har bir element uchun, va xuddi shu nomli yigʻma tarkibiy qismlari uchun ham. Balandliklar, birliklar va formulalar oʻz holicha qoladi. Bitta {{key:Mod+Z}} barcha eski narxlarni qaytaradi.

## CSV ustunlari

Birinchi qator ustunlarni nomlaydi, istalgan tartibda; boshqa ustunlar eʼtiborga olinmaydi.

| Ustun | Unga nima yoziladi |
|---|---|
| Item (or Name) | Elementning nomi. Majburiy. |
| Type | Linear, Area yoki Count (LF, SF va EA ham ishlaydi). Boʻsh qoldirilsa, birlik hal qiladi. |
| Unit | LF yoki m; SF, SY yoki m²; EA. Boʻsh: turning odatiy birligi. |
| Waste % | `10` yoki `10%`. |
| Material per unit, Labor per unit | `2.10` yoki `$1,250` kabi stavkalar. |
| Height (or Depth) | `9'-0"`, `9`, yoki metrik birliklar uchun `2.7`. |
| Component, Formula | Component nomi bor qator (yoki Type `Component`) ustidagi elementning yigʻmasiga kiradi. Uning Unit, Waste va stavkalari oʻzinikidir; uning Formula elementning harflaridan foydalanadi, qarang: [Yigʻmalar va formulalar](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Ustunlar orasidagi vergul, nuqtali vergul yoki tabulyatsiya — hammasi ishlaydi.
