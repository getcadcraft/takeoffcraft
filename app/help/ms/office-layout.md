---
title: "Susun atur pejabat: pengumpulan, subjumlah, tajuk dan pengepala daripada Dasar Lalai anda"
summary: Hidupkan add-on Dasar Lalai dan anggaran, kuantiti mengikut helaian, eksport serta apa yang dibaca pembantu mengambil susun atur jadual pejabat anda, jadual yang sama diambil oleh jadual BimCraft.
keywords: standard pejabat, susun atur pejabat, dasar lalai, add-on, susun atur jadual, kumpulkan mengikut jenis, kumpulkan mengikut helaian, subjumlah, jumlah, tajuk, pengepala, huruf besar, susun atur anggaran, susun atur eksport, tetapan
from: cfd2f30a
---

## Apa yang akan anda lakukan

Minta TakeoffCraft menyusun jadualnya mengikut cara pejabat anda mengeluarkannya, tanpa menyediakannya dalam setiap pengukuran kuantiti. Susun atur ditetapkan sekali, dalam Dasar Lalai, dan berlaku untuk setiap aplikasi di komputer ini: apa yang anda tetapkan dalam BimCraft atau CadCraft ialah apa yang digunakan TakeoffCraft, dan sebaliknya.

## Langkah

1. Buka **Tetapan › Add-on** dan hidupkan **Dasar Lalai**. Ia dimatikan sehingga anda berbuat demikian; dengan ia dimatikan, atau tiada apa ditetapkan, TakeoffCraft sama seperti sebelumnya.
2. Buka **Tetapan › Global › Dasar Lalai** dan cari **Susun atur jadual (standard pejabat)**:

| Dasar | Apa yang dilakukannya dalam TakeoffCraft |
|---|---|
| Kumpulkan jadual mengikut | **Jenis** mengumpulkan anggaran mengikut jenis item (Linear, Area, Count, Typed quantity). **Aras** mengumpulkan kuantiti mengikut helaian, mengikut helaian mereka. **Bilik** dan **Tiada pengumpulan** tidak mengumpulkan kedua-duanya |
| Jumlah dalam jadual | **Subjumlah di bawah setiap kumpulan dan jumlah** menambah subjumlah di bawah setiap kumpulan. Jumlah kerja sentiasa kekal |
| Tajuk jadual | Satu baris di atas jadual, contohnya `{schedule}: office layout` |
| Pengepala lajur | Seperti ditulis, HURUF BESAR atau Dengan Huruf Besar |

3. Tutup Tetapan. Jadual berubah serta-merta.

## Apa yang menentukan susun atur

- **Kuantiti › Mengikut item** dan **Mengikut helaian**: pengepala kumpulan, subjumlah di bawah setiap kumpulan, tajuk dan jenis huruf pengepala. Satu baris di bawah tajuk menyatakan bahagian mana yang ditetapkan oleh standard pejabat anda. Barisnya tetap sama: anda masih menaip kadar dan pembaziran di dalamnya, dan klik nilai untuk memilih tandanya. Komponen atau syarat kedua kekal di bawah itemnya.
- **Anggaran yang dieksport** (CSV dan XLSX): kumpulan dan subjumlah yang sama. Dalam buku kerja, subjumlah ialah formula `SUBTOTAL` ke atas kumpulannya, dan jumlah kerja juga ialah satu, jadi tiada apa dikira dua kali.
- **Apa yang dibaca pembantu**: `takeoff_estimate` dan `takeoff_quantities` (mengikut helaian) menambah blok `layout` dengan kumpulan, baris dan subjumlah, dan menyatakan bahagian mana yang ditetapkan oleh pejabat.

## Apa yang kekal dengan sendirinya

- **Kuantiti › Mengikut kawasan** menyatakan pengumpulannya sendiri (mengikut kawasan bidaan) dan mengekalkannya.
- **Jumlah kerja**, markup bagi ringkasan bidaan dan alternatif tidak dikumpulkan semula.
- Pengumpulan yang tiada lajur dalam jadual ditinggalkan: anggaran tiada aras, dan kuantiti mengikut helaian tiada jenis.

## Perkara yang perlu diketahui

- Dasar disimpan dalam pelayar ini untuk setiap aplikasi CadCraft dan dibawa dalam fail Dasar Lalai (**Simpan ke fail** / **Muat daripada fail** di tempat yang sama), supaya sebuah pejabat berkongsi satu fail.
- Anggaran yang dieksport sebagai CSV dengan kumpulan adalah untuk dibaca. Untuk membawa anggaran kembali sebagai pustaka harga, eksportnya dengan tiada pengumpulan ditetapkan.
- Bahagian BimCraft bagi standard yang sama: jadual, persediaan dan eksport. TakeoffCraft belum mempunyai dasarnya sendiri, jadi tiada bahagian Dasar Lalai di bawah Tetapan › TakeoffCraft.
