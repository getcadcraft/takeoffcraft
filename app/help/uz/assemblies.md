---
title: Yigʻmalar va formulalar
summary: Elementga komponentlar qoʻshing va formulalar uning uzunligi, maydoni yoki sonini shipaklar, plitalar, gipskarton varaqlari, beton va mahkamlagichlarga aylantirsin, devor misolida koʻrsatilgan.
keywords: yigʻma, komponentlar, formula, shipaklar, gipskarton, varaqlar, plitalar, beton, kub yard, mahkamlagichlar, retsept, odatiy, element qismlari
from: 12891a21
---

Elementning **yigʻmasi** — bu har biri miqdor formulasi hamda oʻz chiqindi va stavkalariga ega komponentlar roʻyxati. Formula elementning oʻlchangan yigʻindilaridan foydalanadi, shuning uchun devorni bir marta hajmlarni hisoblash bilan shipaklar, plitalar va varaqlarni birdan olasiz, ular oʻlchash davomida yangilanadi.

## Ishlatish mumkin boʻlgan oʻzgaruvchilar

| Element turi | Oʻzgaruvchilar |
|---|---|
| Chiziqli | `L` uzunlik, `H` balandlik, `A` devor maydoni (L × H), `N` chiziqlar soni |
| Maydon | `A` maydon, `P` perimetr (kontur + kesmalar), `H` chuqurlik yoki qalinlik, `N` maydonlar soni |
| Sanash | `N` soni |

Qiymatlar elementning oʻz birliklarida: LF va SF elementlar uchun futlar va kvadrat futlar, m va m² elementlar uchun metrlar va kvadrat metrlar. SY elementda `A` kvadrat yardlarda, `P` va `H` esa futlarda qoladi.

Formulalarda `+ - * /` (yoki × ÷), qavslar, sonlar va `ceil`, `floor`, `round`, `min`, `max` hamda `abs` funksiyalari ishlatiladi. Toʻliq qoidalar: [Formula tili](topic:formulas).

## Misol: ichki devor

Aytaylik, siz **Ichki devor turi A** elementini chiziqli element sifatida hajmlarni hisoblagansiz: jami 120 LF boʻlgan 4 ta chiziq, {{ui:Balandlik}} `9'-0"` ga oʻrnatilgan. Uning **Oʻlchangan** qiymatlari L = 120, N = 4, A = 1,080 (devor, bir tomon, SF) ni koʻrsatadi.

1. {{ui:Elementlar}} ostida elementni tanlang.
2. {{ui:Yigʻma}} boʻlimida {{ui:Komponent qoʻshish}} ni tanlang.
   "Komponent" nomli komponent paydo boʻladi, unda `L` formulasi va uning natijasi pastda koʻrinadi.
3. {{ui:Nom}} maydoniga `Studs 16 in o.c.` yozing, {{ui:Birlik}} maydoniga esa `EA` yozing.
4. {{ui:Miqdor formulasi}} maydoniga `ceil(L * 12 / 16) + N` yozing.
   Natija yozish davomida yangilanadi: "= 94 EA". Bu 120 futli chiziq boʻylab har 16 dyuymda bittadan shipak (90 ta), hamda 4 ta chiziqning har birini yopish uchun yana bittadan (4 ta) degani.
5. Plitalar uchun yana {{ui:Komponent qoʻshish}} ni tanlang: nomi `Plates, top and bottom`, birligi `LF`, formulasi `L * 2`. Natija: 240 LF.
6. Varaqlarni qoʻshing: nomi `Gypsum board 4x8, both sides`, birligi `sheets`, formulasi `ceil(A * 2 / 32)`. Natija: 68 varaq (2,160 SF gipskarton ÷ har varaqqa 32 SF = 67,5, yuqoriga yaxlitlangan).
7. Har bir komponentning {{ui:Chiqindi %}}, {{ui:Material $}} va {{ui:Ish haqi $}} maydonlarini toʻldiring.
   Har bir komponent {{ui:Miqdorlar}} boʻlimida elementi ostida oʻz qatoriga ega boʻladi, xuddi element kabi narxlanadi va {{ui:Umumiy jami}} ga kiritiladi.

Agar devor narxi toʻliq komponentlarda boʻlsa, elementning oʻz material va ish haqi stavkalarini 0 da qoldiring, aks holda u ikki marta hisobga olinadi.

:::tip
Chiqindi formuladan keyin qoʻllanadi va yaxlitlanmaydi: 10% chiqindi bilan 68 varaq 74,8 varaq boʻladi. Butun varaqlarni buyurtma qilish uchun chiqindini formula ichiga qoʻying, masalan `ceil(A * 2 / 32 * 1.1)`, va komponentning chiqindisini 0 da qoldiring.
:::

## Qoʻshimcha formulalar

| Nima | Element | Formula |
|---|---|---|
| Shipaklar markazlari orasida 24 dyuym | Chiziqli | `ceil(L / 2) + N` |
| Izolyatsiya matolari, SF | Balandlikli chiziqli | `A` |
| Boʻyoq, ikki tomon, gallon, 350 SF da | Balandlikli chiziqli | `ceil(A * 2 / 350)` |
| Plitka qutilari, 15 SF da, 10% zaxira bilan | Maydon | `ceil(A * 1.1 / 15)` |
| Tagliq yoki chekka bezak, LF | Maydon | `P` |
| Beton, kub yard | Chuqurlikli maydon | `A * H / 27` |
| Beton chorak yardgacha yuqoriga yaxlitlangan | Chuqurlikli maydon | `ceil(A * H / 27 * 4) / 4` |
| Eshik mili, har eshikka uchtadan | Sanash | `N * 3` |
| Kamida bitta quti, har 12 tadan bittadan | Sanash | `max(1, ceil(N / 12))` |

## Formula notoʻgʻri boʻlganda

Formula ostidagi qator xato xabariga aylanadi, masalan `"X" bu yerda oʻlchangan qiymat emas. Foydalaning: L, H, A, N.` yoki `A ")" yoʻq.` Shunda komponentda hech qanday summa boʻlmaydi, uning {{ui:Miqdorlar}} dagi qatorida "Formula xatosi: …" koʻrinadi va sarlavhada "Toʻliq emas: 1 ta formula xatosi (jamiga kiritilmagan)" yoziladi. Formulani tuzating, jami qiymatlar yangilanadi.

Nolga boʻlinadigan formula ham xato hisoblanadi ("Formula nolga boʻladi."), masalan chuqurligi boʻlmagan elementda `A / H`.

## Cheklovlar

- Formulalar elementning **yigʻindilari** boʻyicha hisoblanadi, har bir chiziq boʻyicha emas. `ceil(L * 12 / 16) + N` har bir chiziqqa bittadan shipak qoʻshadi; hozircha har bir chiziq boʻyicha yaxlitlash yoʻq.
- Formula faqat oʻz elementining oʻzgaruvchilaridan foydalana oladi, boshqa elementniki emas.
- Elementga 50 tagacha komponent, formulada 500 tagacha belgi.

## Komponentni olib tashlash

Uning ostida {{ui:Komponentni olib tashlash}} ni tanlang. Uni {{key:Mod+Z}} bilan bekor qilishingiz mumkin.
