---
title: Rakitan dan rumus
summary: Tambahkan komponen ke sebuah item dan biarkan rumus mengubah panjang, luas, atau jumlahnya menjadi stud, pelat, lembar papan, beton, dan perangkat keras, dengan contoh dinding yang lengkap.
keywords: rakitan, komponen, rumus, stud, drywall, lembar, pelat, beton, yard kubik, perangkat keras, resep, tipikal, bagian item
from: 12891a21
---

**Rakitan biaya** sebuah item adalah daftar komponen, masing-masing dengan rumus kuantitas dan susut serta tarifnya sendiri. Rumus memakai total hasil ukur item, sehingga satu perhitungan volume dinding memberi Anda stud, pelat, dan papan sekaligus, dan semuanya diperbarui saat Anda mengukur.

## Variabel yang dapat Anda gunakan

| Tipe item | Variabel |
|---|---|
| Linear | `L` panjang, `H` tinggi, `A` luas dinding (L × H), `N` jumlah lari |
| Area | `A` luas, `P` keliling (garis luar + potongan), `H` kedalaman atau tebal, `N` jumlah area |
| Hitung | `N` jumlah |

Nilai memakai satuan item itu sendiri: kaki dan kaki persegi untuk item LF dan SF, meter dan meter persegi untuk item m dan m². Untuk item SY, `A` dalam yard persegi, sedangkan `P` dan `H` tetap dalam kaki.

Rumus memakai `+ - * /` (atau × ÷), tanda kurung, angka, dan fungsi `ceil`, `floor`, `round`, `min`, `max`, dan `abs`. Aturan lengkapnya ada di [Bahasa rumus](topic:formulas).

## Contoh: dinding interior

Anggap Anda telah menghitung **Dinding interior tipe A** sebagai item linear: 4 lari dengan total 120 LF, dengan {{ui:Tinggi}} diatur ke `9'-0"`. Nilai **Terukur**-nya menunjukkan L = 120, N = 4, A = 1,080 (SF dinding, satu sisi).

1. Pilih item di bawah {{ui:Item}}.
2. Di {{ui:Rakitan biaya}}, pilih {{ui:Tambah komponen}}.
   Sebuah komponen bernama "Komponen" muncul, dengan rumus `L` dan hasilnya di bawah.
3. Ketik `Studs 16 in o.c.` di {{ui:Nama}} dan `EA` di {{ui:Satuan}}.
4. Di {{ui:Rumus kuantitas}}, ketik `ceil(L * 12 / 16) + N`.
   Hasilnya diperbarui saat Anda mengetik: "= 94 EA". Itu satu stud setiap 16 inci sepanjang 120 kaki (90), ditambah satu lagi untuk menutup setiap dari 4 lari.
5. Pilih {{ui:Tambah komponen}} lagi untuk pelat: beri nama `Plates, top and bottom`, satuan `LF`, rumus `L * 2`. Hasil: 240 LF.
6. Tambahkan papan: nama `Gypsum board 4x8, both sides`, satuan `sheets`, rumus `ceil(A * 2 / 32)`. Hasil: 68 sheets (2,160 SF papan ÷ 32 SF per lembar = 67.5, dibulatkan ke atas).
7. Isi {{ui:Susut %}}, {{ui:Material $}}, dan {{ui:Upah $}} untuk setiap komponen.
   Setiap komponen mendapat barisnya sendiri di bawah item pada {{ui:Kuantitas}}, dihargai seperti item, dan {{ui:Total pekerjaan}} menyertakannya.

Jika biaya dinding sepenuhnya ada di komponen, biarkan tarif material dan upah item itu sendiri di 0, atau biaya itu akan terhitung dua kali.

:::tip
Susut diterapkan setelah rumus dan tidak dibulatkan: 68 sheets dengan susut 10% adalah 74.8 sheets. Untuk memesan lembar utuh, masukkan susut ke dalam rumus, seperti `ceil(A * 2 / 32 * 1.1)`, dan biarkan susut komponen di 0.
:::

## Rumus lainnya

| Apa | Item | Rumus |
|---|---|---|
| Stud setiap 24 in | Linear | `ceil(L / 2) + N` |
| Insulasi batt, SF | Linear dengan tinggi | `A` |
| Cat, kedua sisi, galon per 350 SF | Linear dengan tinggi | `ceil(A * 2 / 350)` |
| Dus ubin per 15 SF, tambah 10% | Area | `ceil(A * 1.1 / 15)` |
| Dasar atau trim tepi, LF | Area | `P` |
| Beton, yard kubik | Area dengan kedalaman | `A * H / 27` |
| Beton dibulatkan ke atas per seperempat yard | Area dengan kedalaman | `ceil(A * H / 27 * 4) / 4` |
| Engsel, tiga per pintu | Hitung | `N * 3` |
| Setidaknya satu kotak, satu per 12 | Hitung | `max(1, ceil(N / 12))` |

## Saat rumus salah

Baris di bawah rumus berubah menjadi pesan kesalahan, misalnya `"X" bukan nilai terukur di sini. Gunakan L, H, A, N.` atau `Tanda ")" tidak ada.` Komponen itu kemudian tidak memiliki jumlah, dan barisnya di {{ui:Kuantitas}} menampilkan "Kesalahan rumus: …", sementara header menyatakan "Belum lengkap: 1 kesalahan rumus (tidak termasuk dalam total)". Perbaiki rumusnya dan total akan diperbarui.

Rumus yang membagi dengan nol juga salah ("Rumus membagi dengan nol."), misalnya `A / H` pada item tanpa kedalaman.

## Batasan

- Rumus dihitung pada **total** item, bukan lari demi lari. `ceil(L * 12 / 16) + N` menambahkan satu stud per lari; belum ada pembulatan per lari.
- Rumus hanya dapat memakai variabel item induknya sendiri, bukan variabel item lain.
- Hingga 50 komponen per item, 500 karakter per rumus.

## Buang komponen

Pilih {{ui:Buang komponen}} di bawahnya. Anda dapat membatalkannya dengan {{key:Mod+Z}}.
