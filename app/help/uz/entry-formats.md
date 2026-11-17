---
title: Uzunlik, stavka va foizni kiritish
summary: Masofalar, balandliklar, pul stavkalari va chiqindi foizlari uchun nima kiritish mumkinligi, misollar hamda TakeoffCraft oʻqiy olmagan kirish uchun xabarlar.
keywords: kiritish, format, futlar dyuymlar, kasrlar, oʻnlik fut, metrik, metrlar, millimetrlar, stavka, pul, dollar, foiz, chiqindi, yozish
from: 215bbf4d
---

## Uzunliklar

Foydalaniladi: {{ui:Calibrate}} ichidagi **Haqiqiy masofa** va element tahrirlagichidagi {{ui:Height}} hamda {{ui:Depth}}.

| Kiritasiz | Bu degani |
|---|---|
| `24'-0"` | 24 fut |
| `24'-6 1/2"` | 24 fut 6½ dyuym |
| `12' 6 1/2"` | 12 fut 6½ dyuym (chiziqcha oʻrniga boʻshliq) |
| `12'-6-1/2"` | 12 fut 6½ dyuym (qismlar orasidagi chiziqchalar) |
| `24'` | 24 fut |
| `30"` | 30 dyuym |
| `6 1/2"` | 6½ dyuym |
| `3/4"` | ¾ dyuym |
| `24 ft 6 in` | 24 fut 6 dyuym (shuningdek `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 standart birlikda (quyida) |
| `24.5'` | 24.5 fut |
| `7.5 m` | 7.5 metr |
| `750 cm` | 750 santimetr |
| `7500 mm` | 7,500 millimetr |

- Oddiy son **kalibrlash** uchun va LF, SF yoki SY dagi elementlar uchun **futlarda**, m yoki m² dagi elementlar uchun **metrlarda** hisoblanadi.
- Soʻz protsessorlaridan kelgan egri qoʻshtirnoqlar va tuzatish belgilari (′ ″ ’ ”) `'` va `"` kabi ishlaydi. Ikkita apostrof `''` `"` deb hisoblanadi.
- Vergullar eʼtiborga olinmaydi: `1,200 mm` bu 1200 mm.
- Kasrlarda ikki tomonda ham butun sonlar boʻlishi kerak: `6 1/2"` ishlaydi, `6.5 1/2"` ishlamaydi.
- Nol va manfiy masofalar qabul qilinmaydi.

Xabarlar:

- "Masofani kiriting, masalan 24'-0" yoki 7.5 m." (maydon boʻsh)
- "Noldan katta masofani kiriting."
- "Futlar va dyuymlar (24'-6 1/2"), oʻnlik futlar, m, cm yoki mm dan foydalaning." (nomaʼlum birlik)
- "Bu masofani oʻqib boʻlmadi. 24'-6 1/2" yoki 24.5 kabi kiritib koʻring."

Element balandligini yoki chuqurligini tozalash uchun maydonni boʻshating.

### Hisoblash

Har bir uzunlik maydoni, shuningdek chizish paytidagi kiritish qutisi `+`, `-`, `*`, `/` va qavslar bilan hisoblashni ham qabul qiladi:
`4+7/16` (standart birlikda 4.4375 dyuym), `12'6" + 3/4"`, `(24'-0")/3` (8 fut), `2*450mm`.

- Uzunlikka yozilgan chiziqcha hamon uning bir qismi: `24'-6"` bu 24 fut 6 dyuym, `6-1/2` esa 6½. Ayirish uchun chiziqcha atrofiga boʻshliq qoʻying: `24' - 6"` bu 23'-6".
- Oddiy son uzunlikni son sifatida koʻpaytiradi yoki boʻladi; uzunlikka qoʻshilsa, standart birlikda hisoblanadi.
- `abs`, `round`, `ceil` va `floor` ham ishlaydi. Oʻqib boʻlmaydigan hisoblash, xato qayerda yuz berganini koʻrsatib, rad etiladi.

## Uzunliklar qanday koʻrsatiladi

Uzunliklar futlar, dyuymlar va 1/16 dyuymlarda koʻrsatiladi: `12'-6 1/2"`, `0'-0 3/4"`. Qiymatlar koʻrsatish uchun eng yaqin 1/16 dyuymgacha yaxlitlanadi; miqdorlarning oʻzi yaxlitlanmaydi. Oʻnlik qiymatlar ikki oʻnlik xona va minglik ajratgichlar bilan koʻrsatiladi, masalan `1,234.50 LF`.

## Stavkalar (material va mehnat birlik narxi)

| Kiritasiz | Bu degani |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (toʻrt oʻnlik xonagacha; undan koʻpi yaxlitlanadi) |
| (boʻsh) | $0 |

Xabar: "Miqdorni 12.50 kabi kiriting." yoki "Bu miqdor juda katta." Manfiy stavkalar qabul qilinmaydi.

Hisoblangan summalar (material, mehnat, jami) sentgacha hisoblanadi: chiqindili miqdor × stavka, nolidan uzoqqa qarab yarim yaxlitlanadi, xuddi elektron jadvaldagi `ROUND(x, 2)` kabi.

## Chiqindi foizi

| Kiritasiz | Bu degani |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (boʻsh) | 0% |

Ikki oʻnlik xonagacha, 0% dan 1000% gacha. Xabarlar: "Foizni 10 yoki 7.5 kabi kiriting." yoki "1000% dan katta chiqindiga ruxsat berilmaydi."

## Nomlar va birliklar

- Element va komponent nomlari: 200 belgigacha.
- Komponentning {{ui:Unit}}i: 20 belgigacha istalgan matn, masalan `EA`, `sheets`, `CY`, `gal`. Bu faqat belgi; TakeoffCraft uni aylantirmaydi.

## Formulalar

Yigʻma formulalarining oʻz qoidalari bor: [Formula tili](topic:formulas) ga qarang.
