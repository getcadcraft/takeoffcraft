---
title: Memori harga dari pekerjaan lama Anda
summary: TakeoffCraft mengingat tarif yang Anda pakai di takeoff sebelumnya, hanya di komputer ini, sehingga takeoff baru bisa dimulai dari apa yang Anda bayar terakhir kali. Lihat, pakai, lupakan.
keywords: memori harga, harga, ingat harga, pekerjaan terakhir, pekerjaan lama, harga tipikal, median, tarif, tanpa harga, harga ulang, pelajari dari takeoff sebelumnya, lupakan, pustaka
from: 7279f1a1
---

{{ui:Prices}} di bilah alat (tanda dolar) membuka daftar tentang harga yang Anda pakai, yang diingat TakeoffCraft. Ini adalah daftar biasa: untuk setiap nama item, tarif dari pekerjaan terakhir Anda. Daftar disimpan di peramban ini (di Studio, di tampilan web tersendiri) berdampingan dengan Pustaka harga, tidak pernah di dalam file takeoff, dan tidak ada yang dikirim ke mana pun. Ini bukan model yang dilatih.

## Apa yang diingat

Saat Anda menyimpan takeoff, setiap item yang memiliki harga dan dipakai (ia punya tanda, atau kuantitas ketikan di atas nol) diingat menurut nama dan jenisnya: tarif material, tarif upah, susut dan satuan. Satu pekerjaan adalah file denah tempat takeoff dibuat, sehingga menyimpan takeoff yang sama lagi akan mengganti harganya sendiri, bukan menambahkan pekerjaan lain. Untuk setiap nama, 12 pekerjaan terakhir disimpan.

Untuk memulai dengan pekerjaan lama Anda, pilih {{ui:Learn from a past takeoff…}} dan pilih takeoff yang tersimpan (.json). Item yang berharga dan dipakai di sana akan diingat dengan cara yang sama.

Nama cocok ketika katanya cocok, tanpa memperhatikan huruf besar atau tanda baca ("2x4 Stud, 8 ft" dan "2x4 stud 8 FT" adalah sama). Kata yang sama untuk jenis item lain (item linear dan item hitungan) bukan harga yang sama.

## Pakai di takeoff baru

1. Buat item takeoff baru.
2. Pilih {{ui:Prices}}. Di bawah {{ui:This takeoff}} Anda melihat setiap item yang memiliki harga yang diingat, apa yang ada di item itu sekarang, tarif dari pekerjaan terakhir, tarif tipikal (nilai tengah dari pekerjaan yang diingat), dan rentangnya.
3. Pilih {{ui:Use last}} atau {{ui:Use typical}} pada satu item, atau {{ui:Price N unpriced items from memory}} untuk mengisi setiap item yang belum berharga dengan harga dari pekerjaan terakhir.

Setiap penggunaan adalah satu langkah: {{key:Ctrl+Z}} membatalkannya. Item yang hanya memiliki nama mirip (satu nama berada di dalam nama lain) akan diberi tahu, dan tombolnya memakai tarif dari nama yang mirip itu. Harga yang diingat per EA tidak pernah diberikan ke item per kaki: dialog menyatakan bahwa satuannya berbeda dan membiarkannya.

## Lihat, ubah, lupakan

{{ui:Everything remembered}} mencantumkan setiap nama beserta tarifnya dan jumlah pekerjaannya. Tombol tempat sampah melupakan satu nama; {{ui:Clear all prices}} melupakan semuanya. Matikan {{ui:Remember my prices when I save a takeoff}} untuk berhenti mengingat; yang sudah tersimpan tetap ada sampai Anda melupakannya. Takeoff Anda dan Pustaka harga tidak pernah tersentuh.

## Dengan asisten Anda

Jika Anda mengizinkan asisten di Pengaturan, mereka dapat membaca apa yang diingat untuk item takeoff (prices_list) dan memberi harga item darinya (prices_apply, yang dapat dipratinjau lebih dulu). Ini adalah daftar yang sama dengan dialog.
