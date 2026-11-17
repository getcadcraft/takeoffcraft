---
title: Eksport ustunlari
summary: XLSX eksportining va CSV ning har bir varagʻi hamda ustuni, Estimate varagʻi olib boradigan formulalar bilan.
keywords: eksport, ustunlar, xlsx, csv, varaq, smeta varagʻi, varaq boʻyicha, belgilar, masshtablar, formulalar, maydonlar
from: fed07851
---

## Estimate (XLSX varagʻi va CSV)

Har bir element uchun bitta qator, undan keyin uning yigʻmasidagi har bir komponent uchun qator (surilgan). Soʻngra boʻsh qator va umumiy jami.

| Ustun | Mazmuni | XLSX da |
|---|---|---|
| A Item | Element nomi (qalin) yoki komponent nomi (surilgan) | Matn |
| B Type | Linear, Area, Count yoki Component | Matn |
| C Unit | LF, m, SF, SY, m², EA yoki komponentning birligi | Matn |
| D Quantity | Oʻlchangan jami yoki formula natijasi | Son |
| E Waste % | Chiqindi | Foiz (0.10 = 10%) |
| F Qty with waste | Miqdor × (1 + chiqindi) | Formula `D*(1+E)` |
| G Material per unit | Material stavkasi | Son |
| H Labor per unit | Mehnat stavkasi | Son |
| I Material | Hisoblangan material | Formula `ROUND(F*G,2)` |
| J Labor | Hisoblangan mehnat | Formula `ROUND(F*H,2)` |
| K Total | Material + mehnat | Formula `I+J` |
| L Notes | Qoʻllangan formula, formula xatosi, masshtabsiz varaqdagi belgilar, devor maydoni, perimetr | Matn |

Umumiy jami qatori: yuqoridagi barcha qatorlar boʻyicha I, J va K ustunlarining `SUM` yigʻindisi, agar biror narsa chiqarib tashlangan boʻlsa, Notes ustunida "Incomplete: see the notes above" (Toʻliq emas: yuqoridagi izohlarga qarang).

Formula xatosi boʻlgan qatorda miqdor yoki summa boʻlmaydi; uning izohida xato yoziladi. Sarlavha qatori qotirilgan.

CSV da xuddi shu ustunlarda oddiy qiymatlar turadi: Waste % foiz soni (10 = 10%), pul esa dollarda ikki oʻnlik xona bilan. Elektron jadval dasturi formula deb qabul qilishi mumkin boʻlgan matn (`=`, `+`, `-` yoki `@` bilan boshlanadigan) matn boʻlib qolishi uchun oldiga `'` qoʻyiladi.

## Varaq boʻyicha (faqat XLSX)

| Ustun | Mazmuni |
|---|---|
| Sheet | Varaq nomi (PDF nomi bilan, agar u ochiq boʻlmasa) |
| Item | Element nomi |
| Quantity | Oʻsha elementning shu varaqdagi miqdori, uning birligida |
| Unit | Elementning birligi |
| Marks | Belgilar soni |

## Belgilar (faqat XLSX)

Har bir belgi uchun bitta qator.

| Ustun | Mazmuni |
|---|---|
| Sheet | Varaq nomi |
| Item | Element nomi |
| Type | Linear, Area yoki Count |
| Quantity | Uzunlik, sof maydon yoki 1 |
| Unit | LF yoki m; SF, SY yoki m²; EA |
| Detail | Linear: segment uzunliklari, ayrilganlar "(deduct)" bilan belgilangan va "(uzunlik) ayirildi, (uzunlik) chizildi". Area: kesiklar boʻlsa yalpi va kesik maydonlar hamda perimetr. Masshtabsiz belgilar uchun "Varaqda masshtab yoʻq". |
| Bid area | Faqat hajmlarda taklif hududlari boʻlganda: belgining maydoni yoki "Taklif hududi yoʻq" |

## Taklif hududi boʻyicha (faqat XLSX, agar hajmlarda taklif hududlari boʻlsa)

| Ustun | Mazmuni |
|---|---|
| Bid area | Hudud nomi yoki "Taklif hududi yoʻq" |
| Item | Element, yoki uning ostidagi surilgan komponent |
| Unit | Element yoki komponentning birligi |
| Quantity | Shu hududda oʻlchangan (komponentlar: hudud jamlari boʻyicha formula) |
| Qty with waste | Miqdor × (1 + chiqindi) |
| Material, Labor, Total | Estimate varagʻidagidek sentgacha hisoblangan |
| Notes | Estimate varagʻidagidek formula, xatolar va masshtabsiz belgilar |

Har bir hudud "(nom) subtotal" qatori bilan tugaydi, uning xarajatlari shu qatorlar ustidagi `SUM` formulalaridir; oxirgi qator, **All bid areas**, subtotallarni qoʻshadi. **Marks** varagʻida keyin ettinchi ustun, **Bid area**, boʻladi.

## Masshtablar (faqat XLSX)

Masshtabi yoki belgilari bor har bir varaq uchun bitta qator.

| Ustun | Mazmuni |
|---|---|
| Sheet | Varaq nomi |
| Scale | Preset nomi, kalibrlangan masshtab yoki "No scale" |
| How | "Preset" yoki "Calibrated on (the distance you typed)" (kalibrlangan, siz kiritgan masofada) |
| Feet per PDF unit | TakeoffCraft ishlatadigan aniq masshtab koeffitsiyenti |

## Fayl nomlari

- `(name).xlsx` va `(name).csv`, bunda nom hajmlarda ochilgan birinchi PDF dan olinadi.
- CSV UTF-8 kodlashda, baytlar tartibi belgisi (BOM) va Windows qator tugashlari bilan boʻladi; bu har qanday platformadagi elektron jadval dasturlari oʻqiy oladi.
