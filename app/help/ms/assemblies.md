---
title: Himpunan dan formula
summary: Tambah komponen pada item dan biarkan formula menukar panjang, luas atau kiraannya kepada stud, plat, helai papan, konkrit dan perkakasan, dengan contoh kerja dinding.
keywords: himpunan, komponen, formula, stud, dinding gipsum, helai, plat, konkrit, yard padu, perkakasan, resipi, tipikal, bahagian item
from: 12891a21
---

**Himpunan** item ialah senarai komponen, setiap satu dengan formula kuantitinya sendiri serta pembazirannya dan kadarnya sendiri. Formula menggunakan jumlah ukuran item, jadi satu pengukuran kuantiti dinding memberi anda stud, plat dan papan serentak, dan nilainya dikemas kini apabila anda mengukur.

## Pembolehubah yang boleh anda guna

| Jenis item | Pembolehubah |
|---|---|
| Lelurus | `L` panjang, `H` ketinggian, `A` luas dinding (L × H), `N` bilangan larian |
| Luas | `A` luas, `P` perimeter (garis luar + potongan), `H` kedalaman atau ketebalan, `N` bilangan kawasan |
| Kiraan | `N` kiraan |

Nilai adalah dalam unit item itu sendiri: kaki dan kaki persegi untuk item LF dan SF, meter dan meter persegi untuk item m dan m². Untuk item SY, `A` dalam yard persegi manakala `P` dan `H` kekal dalam kaki.

Formula menggunakan `+ - * /` (atau × ÷), kurungan, nombor, dan fungsi `ceil`, `floor`, `round`, `min`, `max` dan `abs`. Peraturan penuh ada dalam [Bahasa formula](topic:formulas).

## Contoh kerja: dinding dalaman

Katakan anda telah mengukur **Dinding dalaman jenis A** sebagai item lelurus: 4 larian berjumlah 120 LF, dengan {{ui:Height}} ditetapkan kepada `9'-0"`. Nilai **Diukur** ialah L = 120, N = 4, A = 1,080 (SF dinding, satu muka).

1. Pilih item di bawah {{ui:Items}}.
2. Dalam {{ui:Assembly}}, pilih {{ui:Add component}}.
   Komponen bernama "Komponen" muncul, dengan formula `L` dan hasilnya di bawah.
3. Taip `Stud 16 in o.c.` dalam {{ui:Name}} dan `EA` dalam {{ui:Unit}}.
4. Dalam {{ui:Quantity formula}}, taip `ceil(L * 12 / 16) + N`.
   Hasil dikemas kini semasa anda menaip: "= 94 EA". Itu ialah satu stud setiap 16 inci sepanjang 120 kaki (90), tambah satu lagi untuk menutup setiap daripada 4 larian.
5. Pilih {{ui:Add component}} sekali lagi untuk plat: namakan `Plat atas dan bawah`, unit `LF`, formula `L * 2`. Hasil: 240 LF.
6. Tambah papan: nama `Papan gipsum 4x8, kedua-dua sisi`, unit `helai`, formula `ceil(A * 2 / 32)`. Hasil: 68 helai (2,160 SF papan ÷ 32 SF setiap helai = 67.5, dibundarkan ke atas).
7. Isi {{ui:Waste %}}, {{ui:Material $}} dan {{ui:Labor $}} bagi setiap komponen.
   Setiap komponen mendapat baris sendiri di bawah item dalam {{ui:Quantities}}, dihargai seperti item, dan {{ui:Job total}} termasuk komponen itu.

Jika kos dinding semuanya terkandung dalam komponen, biarkan kadar bahan dan upah item itu pada 0, atau ia dikira dua kali.

:::tip
Pembaziran dikenakan selepas formula dan tidak dibundarkan: 68 helai dengan 10% pembaziran ialah 74.8 helai. Untuk memesan helai penuh, letakkan pembaziran dalam formula, seperti `ceil(A * 2 / 32 * 1.1)`, dan biarkan pembaziran komponen pada 0.
:::

## Lebih banyak formula

| Perkara | Item | Formula |
|---|---|---|
| Stud pada 24 in dari pusat | Lelurus | `ceil(L / 2) + N` |
| Batt penebat, SF | Lelurus dengan ketinggian | `A` |
| Cat, kedua-dua sisi, gelen pada 350 SF | Lelurus dengan ketinggian | `ceil(A * 2 / 350)` |
| Kotak jubin pada 15 SF, 10% tambahan | Luas | `ceil(A * 1.1 / 15)` |
| Trim tapak atau pinggir, LF | Luas | `P` |
| Konkrit, yard padu | Luas dengan kedalaman | `A * H / 27` |
| Konkrit dibundarkan ke atas kepada suku yard | Luas dengan kedalaman | `ceil(A * H / 27 * 4) / 4` |
| Engsel, tiga setiap pintu | Kiraan | `N * 3` |
| Sekurang-kurangnya satu kotak, satu setiap 12 | Kiraan | `max(1, ceil(N / 12))` |

## Apabila formula salah

Baris di bawah formula bertukar menjadi mesej ralat, contohnya `"X" bukan nilai yang diukur di sini. Guna L, H, A, N.` atau `A ")" hilang.` Komponen itu kemudian tiada jumlah, barisnya dalam {{ui:Quantities}} menunjukkan "Ralat formula: …", dan pengepala berkata "Tidak lengkap: 1 ralat formula (tidak termasuk dalam jumlah)". Betulkan formula dan jumlah dikemas kini.

Formula yang membahagi dengan sifar juga ralat ("Formula membahagi dengan sifar."), contohnya `A / H` pada item tanpa kedalaman.

## Had

- Formula dijalankan pada **jumlah** item, bukan larian demi larian. `ceil(L * 12 / 16) + N` menambah satu stud setiap larian; belum ada pembundaran setiap larian.
- Formula hanya boleh menggunakan pembolehubah item sendiri, bukan item lain.
- Sehingga 50 komponen setiap item, 500 aksara setiap formula.

## Alih keluar komponen

Pilih {{ui:Remove component}} di bawahnya. Anda boleh buat asal dengan {{key:Mod+Z}}.
