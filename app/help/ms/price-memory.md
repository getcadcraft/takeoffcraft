---
title: Ingatan harga daripada kerja lepas anda
summary: TakeoffCraft mengingati kadar yang anda guna dalam pengukuran kuantiti lepas, dalam komputer ini sahaja, supaya pengukuran kuantiti baharu boleh bermula daripada apa yang anda bayar kali terakhir. Lihat, guna, lupakan.
keywords: ingatan harga, harga, ingat harga, kerja terakhir, kerja lepas, harga biasa, median, kadar, tanpa harga, harga semula, belajar daripada pengukuran kuantiti lepas, lupa, pustaka
from: 7279f1a1
---

{{ui:Harga}} pada bar alat (tanda dolar) membuka apa yang TakeoffCraft ingat tentang harga yang anda guna. Ia senarai biasa: untuk setiap nama item, kadar daripada kerja terakhir anda. Ia disimpan dalam pelayar ini (dalam Studio, paparan webnya sendiri) bersebelahan Pustaka harga, tidak pernah di dalam fail pengukuran kuantiti, dan tiada apa dihantar ke mana-mana. Ia bukan model terlatih.

## Apa yang diingati

Apabila anda menyimpan pengukuran kuantiti, setiap item yang mempunyai harga dan digunakan (ia mempunyai tanda, atau kuantiti ditaip melebihi sifar) diingati di bawah namanya dan jenisnya: kadar bahan, kadar upah, pembaziran dan unit. Satu kerja ialah fail pelan yang diukur, jadi menyimpan pengukuran kuantiti yang sama semula menggantikan harganya sendiri dan tidak menambah kerja lain. 12 kerja terakhir disimpan untuk setiap nama.

Untuk bermula dengan kerja lama anda, pilih {{ui:Belajar daripada pengukuran kuantiti lepas…}} dan pilih pengukuran kuantiti yang disimpan (.json). Item yang berharga dan digunakan dalamnya diingati dengan cara yang sama.

Nama sepadan apabila perkataannya sepadan, tanpa mengira huruf besar atau tanda baca ("2x4 Stud, 8 ft" dan "2x4 stud 8 FT" adalah sama). Perkataan yang sama untuk jenis item lain (item linear dan item kiraan) bukan harga yang sama.

## Guna pada pengukuran kuantiti baharu

1. Buat item pengukuran kuantiti baharu.
2. Pilih {{ui:Harga}}. Di bawah {{ui:Pengukuran kuantiti ini}} anda melihat setiap item yang mempunyai harga yang diingati, apa yang anda ada padanya sekarang, kadar kerja terakhir, kadar biasa (tengah bagi kerja yang diingati) dan julatnya.
3. Pilih {{ui:Guna yang terakhir}} atau {{ui:Guna yang biasa}} pada satu item, atau {{ui:Harga N item tanpa harga daripada ingatan}} untuk mengisi setiap item yang belum berharga daripada kerja terakhir.

Setiap penggunaan ialah satu langkah: {{key:Ctrl+Z}} membatalkannya. Item yang hanya mempunyai nama yang serupa (satu nama di dalam nama lain) menyatakannya, dan butang menggunakan kadar nama serupa itu. Harga yang diingati bagi setiap each tidak pernah diletakkan pada item bagi setiap kaki: dialog menyatakan unitnya berbeza dan membiarkannya.

## Lihat, ubah, lupakan

{{ui:Semua yang diingati}} menyenaraikan setiap nama dengan kadarnya dan bilangan kerja. Butang tong sampah melupakan satu nama; {{ui:Kosongkan semua harga}} melupakan semuanya. Matikan {{ui:Ingat harga saya apabila saya simpan pengukuran kuantiti}} untuk berhenti mengingati; apa yang sudah ada kekal sehingga anda melupakannya. Pengukuran kuantiti anda dan Pustaka harga tidak pernah disentuh.

## Dengan pembantu anda

Jika anda membenarkan pembantu dalam Tetapan, mereka boleh membaca apa yang diingati untuk item pengukuran kuantiti (prices_list) dan menentukan harga item daripadanya (prices_apply, yang boleh dipratonton dahulu). Ia senarai yang sama seperti dialog.
