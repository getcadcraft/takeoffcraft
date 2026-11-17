---
title: Satuan
summary: Satuan yang dapat dilaporkan sebuah item, satuan yang digunakan variabel rumusnya, dan cara satuan imperial serta metrik bercampur.
keywords: satuan, lf, sf, sy, sq, yard persegi, squares atap, acre, hektar, meter, meter persegi, ea, setiap, metrik, imperial, konversi, satuan bawaan
from: b7bf0528
---

## Satuan item

| Jenis item | Satuan | Nama |
|---|---|---|
| Linear | LF | kaki linear (bawaan) |
| Linear | m | meter |
| Area | SF | kaki persegi (bawaan) |
| Area | SY | yard persegi |
| Area | SQ | squares atap (100 kaki persegi) |
| Area | ac | acre |
| Area | m² | meter persegi |
| Area | ha | hektar |
| Count | EA | setiap |

Ubah dengan {{ui:Satuan}} di penyunting item kapan saja, bahkan setelah mengukur; kuantitasnya langsung dikonversi.

Daftar {{ui:Satuan}} menampilkan satuan yang diaktifkan di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}}, dan selalu menampilkan satuan item itu sendiri. Item baru dimulai dengan satuan panjang atau luas yang diberi bintang di sana, jika satuan itu termasuk satuan item; jika tidak, dimulai dengan LF atau SF. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).

## Satuan variabel rumus

| Satuan item | L, P, H | A |
|---|---|---|
| LF | kaki | kaki persegi (luas dinding) |
| m | meter | meter persegi (luas dinding) |
| SF | kaki | kaki persegi |
| SY | kaki | yard persegi |
| SQ | kaki | squares |
| ac | kaki | acre |
| m² | meter | meter persegi |
| ha | meter | hektar |

Untuk item SY, `A` dalam yard persegi sedangkan `P` dan `H` tetap dalam kaki. Volume dari item SY adalah `A * 9 * H / 27` yard kubik; menggunakan SF untuk pelat lantai lebih sederhana.

## Di mana satuan ditetapkan

Beberapa tampilan selalu menggunakan kaki:

- pembacaan langsung di bilah status saat menggambar (kaki-inci, SF),
- **Tanda terpilih** (kaki-inci, LF dan SF),
- hasil pemeriksaan (kaki-inci, dengan kaki desimal dan meter),
- panjang segmen dan keliling di lembar Marks spreadsheet (kaki-inci).

Total item, tabel {{ui:Kuantitas}}, rumus, dan lembar Estimate menggunakan satuan item itu sendiri.

## Skala dan satuan terpisah

Skala sebuah lembar menyatakan seberapa besar gambarnya; satuan sebuah item menyatakan cara melaporkannya. Gambar metrik pada `1:100` dapat diambil volumenya dalam LF, dan gambar imperial dalam m². Kalibrasi menerima satuan apa pun: `24'-6"`, `7.5 m`, `7500 mm`.

## Presisi

TakeoffCraft mengukur tepat dari titik yang Anda klik, termasuk panjang dan luas busur yang sebenarnya, dan tidak membulatkan kuantitas. Tampilan membulatkan panjang ke 1/16 in dan desimal ke dua tempat. Uang hanya dibulatkan pada jumlah akhir, sampai sen.
