---
title: Formula tili
summary: Yigʻma miqdor formulalarining qoidalari — oʻzgaruvchilar, operatorlar, funksiyalar, yaxlitlash va har bir xato xabari.
keywords: formula, ifoda, sintaksis, funksiyalar, ceil, floor, round, min, max, abs, oʻzgaruvchilar, operatorlar, hisoblash
from: 4da14575
---

Yigʻma komponentlari miqdorini formuladan oladi. Formula elementning oʻlchangan qiymatlari ustidagi kichik arifmetik ifoda. Ishlangan misollar uchun [Yigʻmalar va formulalar](topic:assemblies) ga qarang.

## Oʻzgaruvchilar

| Element turi | Oʻzgaruvchi | Maʼnosi |
|---|---|---|
| Linear | `L` | Umumiy uzunlik |
| Linear | `H` | Elementning balandligi |
| Linear | `A` | Devor maydoni, L × H, ochiqliklar chiqarilgan (ularni oʻz ichiga olgan uchastkalar uchun) (BimCraft dan olingan hajm). Agar hajm oʻlchash usulini nomlasa, `A` shu usul bilan oʻlchanadi: usulning eng kichik oʻlchamidan katta boʻlmagan ochiqliklar qoladi, devorlar uchrashgan joyda usul olib tashlagan narsa chiqariladi. Element ostidagi izohda usul nomi koʻrsatiladi |
| Linear | `N` | Uchastkalar soni |
| Area | `A` | Umumiy sof maydon (konturlar minus kesiklar) |
| Area | `P` | Umumiy perimetr, kesik qirralari bilan |
| Area | `H` | Elementning chuqurligi yoki qalinligi |
| Area | `N` | Maydonlar soni |
| Count | `N` | Sanoq |

- Oʻzgaruvchilar elementning birliklarida boʻladi: [Birliklar](topic:units) ga qarang.
- Katta va kichik harflar bir xil: `l` bu `L`.
- Faqat elementning oʻz turidagi oʻzgaruvchilar ishlaydi. Chiziqli elementda `P` `"P" bu yerda oʻlchangan qiymat emas. Foydalaning: L, H, A, N.` xabarini beradi.
- Boʻsh balandlik yoki chuqurlik 0 hisoblanadi.

## Operatorlar

| Yozing | Maʼnosi |
|---|---|
| `+` | Qoʻshish |
| `-` yoki `−` | Ayirish yoki manfiy qiymat |
| `*` yoki `×` | Koʻpaytirish |
| `/` yoki `÷` | Boʻlish |
| `( )` | Guruhlash |

Koʻpaytirish va boʻlish qoʻshish va ayirishdan oldin bajariladi: `L * 2 + 4` bu (L × 2) + 4. Shubha boʻlsa, qavslardan foydalaning.

Sonlarda oʻnlik xona boʻlishi mumkin (`1.333`, `.5`) va darajalar (`1e3` = 1000). Boʻshliqlar eʼtiborga olinmaydi.

## Funksiyalar

| Funksiya | Natija | Misol |
|---|---|---|
| `ceil(x)` | Butun songacha yuqoriga yaxlitlash | `ceil(67.5)` = 68 |
| `floor(x)` | Butun songacha pastga yaxlitlash | `floor(67.5)` = 67 |
| `round(x)` | Eng yaqin butun songa yaxlitlash, yarimlar nolidan uzoqqa | `round(2.5)` = 3 |
| `round(x, d)` | d oʻnlik xonagacha yaxlitlash (0 dan 10 gacha) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Eng kichik qiymat | `min(N, 10)` |
| `max(a, b, …)` | Eng katta qiymat | `max(1, ceil(N / 12))` |
| `abs(x)` | Belgisiz qiymat | `abs(-3)` = 3 |

`ceil` va `floor` kompyuterning mayda yaxlitlash shovqinini eʼtiborga olmaydi, shuning uchun aniq 1 boʻlishi kerak boʻlgan qiymat hech qachon 2 ga yaxlitlanmaydi.

## Xatolar

Oʻqib boʻlmaydigan yoki hisoblab boʻlmaydigan formula maydon ostida oʻz xatosini koʻrsatadi va komponent jamlardan chiqarib tashlanadi ({{ui:Miqdorlar}} sarlavhasida "Incomplete" yoziladi). Xabarlar:

| Xabar | Tuzatish |
|---|---|
| Formula kiriting, masalan L yoki ceil(L / 1.333) + 1. | Formula boʻsh. |
| "X" bu yerda oʻlchangan qiymat emas. Foydalaning: … | Roʻyxatdagi oʻzgaruvchilardan birini ishlating. |
| "X" bu yerda funksiya emas. Foydalaning: ceil, floor, round, min, max, abs. | Ulardan birini ishlating. |
| "#" formulada ruxsat etilmaydi. | Bu belgini olib tashlang (birliklar, `%`, `$` va `=` ruxsat etilmaydi). |
| ")" yetishmayapti. / ")" oʻzining "(" siz turibdi. | Qavslarni tenglashtiring. |
| ")" oldida qiymat yetishmayapti. | Masalan `max(1, )`: qiymatni kiriting. |
| Formula juda erta tugaydi. | Masalan `L *`: uni tugallang. |
| Kutilmagan "…". Operator yetishmayaptimi? | Ikki qiymat yonma-yon, masalan `2L`: `2 * L` deb yozing. |
| ceil() 1 ta qiymat oladi. | Funksiyaga toʻgʻri sonli qiymat bering. |
| round(x, digits) uchun 0 dan 10 gacha butun oʻnlik xonalar kerak. | Butun sonli oʻnlik xonalar sonidan foydalaning. |
| Formula nolga boʻlinadi. | Odatda H 0: elementning balandligini yoki chuqurligini belgilang. |
| Formula son bermaydi. | Natija son boʻlish uchun juda katta. |
| Bu formula juda uzun (eng koʻpi 500 belgi). | Qisqartiring. |

## Loyihalash boʻyicha xavfsiz

Formula faqat yuqoridagi oʻzgaruvchilar va funksiyalar bilan arifmetika bajara oladi. U kod ishga tushira olmaydi va boshqa hech narsani oʻqiy olmaydi, shuning uchun kimdir sizga yuborgan loyiha faylidagi formula zararsiz.
