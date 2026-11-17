---
title: Bahasa rumus
summary: Aturan untuk rumus kuantitas assembly - variabel, operator, fungsi, pembulatan, dan setiap pesan kesalahan.
keywords: rumus, ekspresi, sintaks, fungsi, ceil, floor, round, min, max, abs, variabel, operator, perhitungan
from: 4da14575
---

Komponen assembly mendapatkan kuantitasnya dari rumus. Rumus adalah ekspresi aritmetika kecil atas nilai terukur item. Lihat [Assembly dan rumus](topic:assemblies) untuk contoh yang dikerjakan.

## Variabel

| Tipe item | Variabel | Arti |
|---|---|---|
| Linear | `L` | Total panjang |
| Linear | `H` | Tinggi item |
| Linear | `A` | Luas dinding, L × H, dikurangi bukaan dari run yang membawanya (takeoff dari BimCraft). Bila takeoff itu menyebutkan metode pengukuran, `A` diukur dengannya: bukaan yang tidak lebih besar dari ukuran terkecil metode tetap dihitung, dan yang diambil metode di tempat dinding bertemu dihilangkan. Catatan di bawah item menyebutkan metodenya |
| Linear | `N` | Jumlah run |
| Area | `A` | Total luas bersih (garis luar dikurangi potongan) |
| Area | `P` | Total keliling, termasuk tepi potongan |
| Area | `H` | Kedalaman atau ketebalan item |
| Area | `N` | Jumlah area |
| Count | `N` | Jumlah hitungan |

- Variabel berada dalam satuan item: lihat [Satuan](topic:units).
- Huruf besar dan kecil sama: `l` sama dengan `L`.
- Hanya variabel dari tipe item itu sendiri yang bekerja. `P` pada item linear memberi `"P" bukan nilai terukur di sini. Gunakan L, H, A, N.`
- Tinggi atau kedalaman yang kosong dihitung sebagai 0.

## Operator

| Tulis | Arti |
|---|---|
| `+` | Tambah |
| `-` atau `−` | Kurang, atau nilai negatif |
| `*` atau `×` | Kali |
| `/` atau `÷` | Bagi |
| `( )` | Kelompok |

Kali dan bagi didahulukan sebelum tambah dan kurang: `L * 2 + 4` adalah (L × 2) + 4. Gunakan tanda kurung bila ragu.

Angka boleh memiliki desimal (`1.333`, `.5`) dan eksponen (`1e3` = 1000). Spasi diabaikan.

## Fungsi

| Fungsi | Hasil | Contoh |
|---|---|---|
| `ceil(x)` | Bulatkan ke atas menjadi bilangan bulat | `ceil(67.5)` = 68 |
| `floor(x)` | Bulatkan ke bawah menjadi bilangan bulat | `floor(67.5)` = 67 |
| `round(x)` | Bulatkan ke bilangan bulat terdekat, nilai tengah menjauhi nol | `round(2.5)` = 3 |
| `round(x, d)` | Bulatkan ke d desimal (0 sampai 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Nilai terkecil | `min(N, 10)` |
| `max(a, b, …)` | Nilai terbesar | `max(1, ceil(N / 12))` |
| `abs(x)` | Nilai tanpa tanda | `abs(-3)` = 3 |

`ceil` dan `floor` mengabaikan derau pembulatan kecil komputer, sehingga nilai yang seharusnya tepat 1 tidak pernah dibulatkan ke atas menjadi 2.

## Kesalahan

Rumus yang tidak dapat dibaca atau dihitung menampilkan kesalahannya di bawah kolom, dan komponen itu dibiarkan keluar dari total (header {{ui:Kuantitas}} berbunyi "Tidak lengkap"). Pesan:

| Pesan | Perbaikan |
|---|---|
| Ketik rumus, seperti L atau ceil(L / 1.333) + 1. | Rumusnya kosong. |
| "X" bukan nilai terukur di sini. Gunakan … | Gunakan salah satu variabel yang tercantum. |
| "X" bukan fungsi di sini. Gunakan ceil, floor, round, min, max, abs. | Gunakan salah satu fungsi tersebut. |
| "#" tidak diizinkan dalam rumus. | Hapus karakter itu (satuan, `%`, `$`, dan `=` tidak diizinkan). |
| Tanda ")" hilang. / Ada ")" tanpa "(" pasangannya. | Seimbangkan tanda kurung. |
| Nilai hilang sebelum ")". | Seperti `max(1, )`: isi nilainya. |
| Rumus berakhir terlalu cepat. | Seperti `L *`: lengkapi. |
| Tidak diharapkan "…". Apakah operator hilang? | Dua nilai berdampingan, seperti `2L`: tulis `2 * L`. |
| ceil() menerima 1 nilai. | Berikan fungsi jumlah nilai yang benar. |
| round(x, digits) memerlukan digit bilangan bulat dari 0 sampai 10. | Gunakan jumlah desimal bilangan bulat. |
| Rumus membagi dengan nol. | Biasanya H bernilai 0: atur tinggi atau kedalaman item. |
| Rumus tidak menghasilkan angka. | Hasilnya terlalu besar untuk menjadi angka. |
| Rumus itu terlalu panjang (paling banyak 500 karakter). | Persingkat. |

## Aman sejak rancangan

Rumus hanya bisa melakukan aritmetika dengan variabel dan fungsi di atas. Ia tidak bisa menjalankan kode atau membaca hal lain, sehingga rumus dalam berkas proyek yang dikirim seseorang kepada Anda tidak berbahaya.
