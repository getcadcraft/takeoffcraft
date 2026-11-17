---
title: Bahasa formula
summary: Peraturan untuk formula kuantiti himpunan kos - pembolehubah, operator, fungsi, pembundaran dan setiap mesej ralat.
keywords: formula, ungkapan, sintaks, fungsi, ceil, floor, round, min, max, abs, pembolehubah, operator, pengiraan
from: 4da14575
---

Komponen himpunan kos mendapat kuantitinya daripada formula. Formula ialah ungkapan aritmetik kecil ke atas nilai yang diukur bagi item itu. Lihat [Himpunan kos dan formula](topic:assemblies) untuk contoh yang dikerjakan.

## Pembolehubah

| Jenis item | Pembolehubah | Maksud |
|---|---|---|
| Linear | `L` | Jumlah panjang |
| Linear | `H` | Ketinggian item |
| Linear | `A` | Luas dinding, L × H, tolak bukaan larian yang membawanya (takeoff daripada BimCraft). Apabila takeoff itu menamakan kaedah ukuran, `A` diukur mengikutnya: bukaan yang tidak lebih besar daripada saiz terkecil kaedah itu kekal, dan apa yang kaedah itu ambil di tempat dinding bertemu ditinggalkan. Nota di bawah item menamakan kaedah itu |
| Linear | `N` | Bilangan larian |
| Area | `A` | Jumlah luas bersih (garis luar tolak lubang) |
| Area | `P` | Jumlah perimeter, termasuk tepi lubang |
| Area | `H` | Kedalaman atau ketebalan item |
| Area | `N` | Bilangan luas |
| Count | `N` | Kiraan |

- Pembolehubah adalah dalam unit item: lihat [Unit](topic:units).
- Huruf besar dan kecil adalah sama: `l` ialah `L`.
- Hanya pembolehubah bagi jenis item itu sendiri yang berfungsi. `P` pada item linear memberi `"P" bukan nilai yang diukur di sini. Guna L, H, A, N.`
- Ketinggian atau kedalaman yang kosong ialah 0.

## Operator

| Tulis | Maksud |
|---|---|
| `+` | Tambah |
| `-` atau `−` | Tolak, atau nilai negatif |
| `*` atau `×` | Darab |
| `/` atau `÷` | Bahagi |
| `( )` | Kumpulkan |

Darab dan bahagi didahulukan daripada tambah dan tolak: `L * 2 + 4` ialah (L × 2) + 4. Gunakan kurungan apabila ragu-ragu.

Nombor boleh mempunyai perpuluhan (`1.333`, `.5`) dan eksponen (`1e3` = 1000). Ruang diabaikan.

## Fungsi

| Fungsi | Hasil | Contoh |
|---|---|---|
| `ceil(x)` | Bundarkan ke atas kepada nombor bulat | `ceil(67.5)` = 68 |
| `floor(x)` | Bundarkan ke bawah kepada nombor bulat | `floor(67.5)` = 67 |
| `round(x)` | Bundarkan kepada nombor bulat terdekat, separuh menjauhi sifar | `round(2.5)` = 3 |
| `round(x, d)` | Bundarkan kepada d titik perpuluhan (0 hingga 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Nilai terkecil | `min(N, 10)` |
| `max(a, b, …)` | Nilai terbesar | `max(1, ceil(N / 12))` |
| `abs(x)` | Nilai tanpa tandanya | `abs(-3)` = 3 |

`ceil` dan `floor` mengabaikan hingar pembundaran komputer yang kecil, jadi nilai yang sepatutnya tepat 1 tidak pernah dibundarkan ke atas kepada 2.

## Ralat

Formula yang tidak dapat dibaca atau dikira menunjukkan ralatnya di bawah medan, dan komponen itu ditinggalkan daripada jumlah (pengepala {{ui:Quantities}} menyatakan "Tidak lengkap"). Mesej:

| Mesej | Pembetulan |
|---|---|
| Taip formula, seperti L atau ceil(L / 1.333) + 1. | Formula kosong. |
| "X" bukan nilai yang diukur di sini. Guna … | Guna salah satu pembolehubah yang disenaraikan. |
| "X" bukan fungsi di sini. Guna ceil, floor, round, min, max, abs. | Guna salah satu fungsi itu. |
| "#" tidak dibenarkan dalam formula. | Buang aksara itu (unit, `%`, `$` dan `=` tidak dibenarkan). |
| ")" hilang. / Terdapat ")" tanpa "(" yang sepadan. | Seimbangkan kurungan. |
| Nilai hilang sebelum ")". | Seperti `max(1, )`: isikan nilainya. |
| Formula tamat terlalu awal. | Seperti `L *`: lengkapkannya. |
| Tidak dijangka "…". Operator hilang? | Dua nilai bersebelahan, seperti `2L`: tulis `2 * L`. |
| ceil() mengambil 1 nilai. | Beri fungsi bilangan nilai yang betul. |
| round(x, digits) memerlukan digit nombor bulat dari 0 hingga 10. | Guna bilangan perpuluhan nombor bulat. |
| Formula membahagi dengan sifar. | Biasanya H ialah 0: tetapkan ketinggian atau kedalaman item. |
| Formula tidak memberi nombor. | Hasilnya terlalu besar untuk menjadi nombor. |
| Formula itu terlalu panjang (500 aksara paling banyak). | Pendekkannya. |

## Selamat mengikut reka bentuk

Formula hanya boleh melakukan aritmetik dengan pembolehubah dan fungsi di atas. Ia tidak boleh menjalankan kod atau membaca apa-apa lain, jadi formula dalam fail projek yang seseorang hantar kepada anda tidak berbahaya.
