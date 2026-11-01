---
title: File yang dibuka dan disimpan TakeoffCraft
summary: PDF masuk, file proyek takeoff, spreadsheet, dan PDF bertanda keluar - isi masing-masing, ke mana perginya, dan apa yang berubah saat online, offline, dan antarperamban.
keywords: file, format, pdf, takeoff.json, file proyek, xlsx, csv, pdf bertanda, unduh, simpan, buka, offline
from: 1bf9be65
---

## Yang dibuka

| File | Cara | Catatan |
|---|---|---|
| PDF (`.pdf`) | {{ui:Buka denah}}, {{key:Mod+O}}, atau jatuhkan di halaman | Beberapa sekaligus. Setiap halaman menjadi satu lembar. |
| Proyek takeoff (`.takeoff.json`) | {{ui:Buka takeoff}}, atau jatuhkan di halaman | Item, skala, dan tanda Anda. Anda dapat menjatuhkannya bersama PDF-nya. |

File lain yang dijatuhkan di halaman dilewati, dan bilah status menyebutkan namanya.

- **PDF yang dilindungi kata sandi** tidak terbuka: "(name) dilindungi kata sandi. Buka salinan yang tidak dilindungi."
- **PDF yang sama dua kali** hanya dibuka sekali: "(name) sudah terbuka." TakeoffCraft mengenali file dari isinya, bukan namanya.
- **PDF hasil pindai** terbuka dan diukur seperti yang lain; TakeoffCraft tidak memerlukan teks di dalam PDF.
- **Set gambar besar**: setiap PDF dibaca penuh saat dibuka (untuk membuat sidik jarinya), sehingga file yang sangat besar perlu waktu. Gambar mini digambar satu per satu saat Anda menggulir.

## Yang disimpan

Setiap penyimpanan adalah unduhan. Tidak ada yang ditulis kembali ke PDF Anda.

| Anda memilih | Anda mendapat | Isinya |
|---|---|---|
| {{ui:Simpan takeoff}} | `(name).takeoff.json` | Item, rakitan biaya, harga satuan, skala lembar, dan setiap tanda, dikaitkan dengan setiap PDF menurut isinya. Tanpa halaman PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Empat lembar kerja: Estimasi (dengan rumus hidup), Per lembar, Tanda, Skala. |
| {{ui:CSV}} | `(name).csv` | Estimasi sebagai nilai biasa, satu baris per item dan komponen. |
| {{ui:PDF bertanda}} | `(PDF name) (takeoff).pdf` | Salinan setiap PDF terbuka yang punya tanda, dengan takeoff digambar di halamannya dan legenda. Satu file per PDF. |

Namanya diambil dari PDF pertama yang Anda buka di takeoff ini. Belum ada kotak ganti nama: ganti nama file yang diunduh jika Anda ingin nama lain.

Lihat [Ekspor estimasi dan PDF bertanda](topic:export-estimate) dan [Kolom ekspor](topic:export-columns).

## Ke mana unduhan pergi

Peramban Anda menyimpannya di tempat ia menyimpan setiap unduhan, biasanya folder Downloads. Temukan di {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}}. Jika peramban Anda diatur untuk menanyakan tempat menyimpan setiap file, ia bertanya.

:::chromium
{{ui:PDF bertanda}} dengan beberapa PDF bertanda mengunduh beberapa file sekaligus. Chrome dan Edge mungkin bertanya sekali apakah situs ini boleh mengunduh beberapa file. Pilih Izinkan.
:::

:::safari
Safari menyimpan ke Downloads kecuali Anda mengubah lokasi unduhan di Pengaturan Safari, di bawah Umum.
:::

## Mengapa file proyek dan PDF terpisah

File `.takeoff.json` hanya berisi takeoff Anda. Ia menemukan kembali PDF-nya menurut isinya (sidik jari setiap file), sehingga:

- Mengganti nama atau memindahkan PDF tidak masalah.
- PDF yang diubah atau disimpan ulang oleh program lain dianggap file yang berbeda, meskipun namanya sama.
- Tanda pada PDF yang tidak terbuka tetap dihitung dalam total.

Lihat [Simpan dan buka kembali takeoff](topic:save-and-reopen).

## Online dan offline

PDF dan takeoff Anda tidak pernah meninggalkan komputer Anda, baik online maupun offline. Koneksi hanya penting untuk memuat TakeoffCraft sendiri.

Untuk bekerja tanpa koneksi, simpan aplikasi terlebih dahulu, selagi Anda online:

1. Pilih {{ui:Simpan untuk offline}} di bilah aplikasi di atas.
   Tombol menghitung naik, "Menyimpan 12 dari 40", selama menyimpan.
2. Tunggu {{ui:Siap offline}}.

Menyimpan TakeoffCraft menaruh aplikasi, bantuan ini, pembaca PDF, penulis PDF yang dipakai {{ui:PDF bertanda}}, dan worker hitung otomatis di peramban Anda, sekitar 6 MB. Setelah berbunyi {{ui:Siap offline}}, semuanya berfungsi offline: membuka PDF, mengukur, {{ui:Hitung otomatis}}, {{ui:Simpan takeoff}}, {{ui:XLSX}}, {{ui:CSV}}, dan {{ui:PDF bertanda}}.

| Tombol berbunyi | Artinya |
|---|---|
| {{ui:Simpan untuk offline}} | Belum disimpan di peramban ini. Pilih untuk menyimpan. |
| Menyimpan (n) dari (m) | Sedang menyimpan. |
| {{ui:Siap offline}} | Tersimpan. Pilih untuk {{ui:Simpan lagi (ambil versi terbaru)}} atau {{ui:Hapus salinan offline}}. |
| {{ui:Tidak dapat menyimpan}} | Sebagian file tidak terunduh. Periksa koneksi Anda dan pilih lagi. |
| {{ui:Offline tidak tersedia}} | Jendela peramban ini tidak dapat menyimpan salinan offline (jendela pribadi dan beberapa komputer yang dikelola memblokirnya). |

Selengkapnya, termasuk berapa lama salinan tersimpan bertahan di setiap peramban: [Bekerja offline](common:offline).

:::offline
Anda sedang offline. Jika bilah aplikasi menampilkan {{ui:Siap offline}}, semuanya berfungsi. Jika tidak, bagian yang belum dimuat TakeoffCraft di tab ini (penulis PDF untuk {{ui:PDF bertanda}}, worker hitung otomatis) tidak dapat dimuat sekarang, dan {{ui:PDF bertanda}} berhenti dengan "PDF bertanda tidak dapat ditulis". Takeoff Anda aman dalam kedua kasus: {{ui:Simpan takeoff}}, {{ui:XLSX}}, dan {{ui:CSV}} tidak memerlukan koneksi. Jangan muat ulang tab sampai Anda online lagi.
:::

:::online
Anda sedang online. Sebelum kunjungan ke lokasi atau penerbangan, pilih {{ui:Simpan untuk offline}} dan tunggu {{ui:Siap offline}}.
:::

## Spreadsheet

XLSX mempertahankan rumus hidup, sehingga program spreadsheet menghitung ulang estimasi saat membuka file dan menjaganya tetap benar saat Anda mengubah harga satuan atau susut di sana. Buku kerja ini telah diperiksa di LibreOffice Calc, yang menghitung ulang setiap total hingga sen yang sama. Belum dibuka di Excel.

CSV adalah nilai biasa dengan penanda urutan byte, sehingga program spreadsheet membaca karakter seperti m² dengan benar.

## Desktop dan cloud

:::desktop
Mulai 0.5 aplikasi desktop adalah CadCraft Studio: TakeoffCraft dan tujuh aplikasi lain dalam satu instalasi. Tidak ada penginstal TakeoffCraft tersendiri.
:::

Penyimpanan cloud belum tersedia. Simpan file `.takeoff.json` Anda bersama PDF pekerjaan itu, dan buat cadangan seperti file lain. Lihat [Ke mana file Anda pergi](common:your-files).
