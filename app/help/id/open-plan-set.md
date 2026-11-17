---
title: Mulai takeoff dan buka set gambar
summary: Buka satu atau beberapa PDF sebagai set gambar, temukan jalan Anda di antara lembar, dan berpindah di antaranya.
keywords: buka, set gambar, beberapa pdf, banyak file, lembar, gambar, label halaman, daftar lembar, navigasi, seret, serah terima, buka di aplikasi lain, markup
from: ed434468
---

Set gambar sering terdiri dari beberapa PDF: arsitektur, struktur, mekanikal. TakeoffCraft membukanya berdampingan sebagai satu daftar lembar, dan satu takeoff bisa mencakup semuanya.

## Buka PDF

1. Pilih {{ui:Open plans}} di grup {{ui:File}}, atau tekan {{key:Mod+O}}. (Gaya menu lain menyebutnya {{ui:Open PDFs…}}.)
2. Di dialog file, pilih setiap PDF dari set. Tahan {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} untuk memilih beberapa, atau {{key:Shift}} untuk memilih rentang.
3. Pilih Buka.
   Pesan "Membuka (nama)…" muncul selama setiap file dibaca. Lalu setiap halaman muncul di bawah {{ui:Sheets}} dan halaman pertama dari PDF baru pertama dibuka.

Anda juga bisa menyeret PDF dari {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} dan melepaskannya di mana saja di TakeoffCraft. Bingkai "Lepaskan PDF, gambar DWG atau DXF, atau .takeoff.json" muncul saat Anda menyeret.

Untuk menambahkan PDF nanti, lakukan lagi hal yang sama. PDF yang sudah terbuka akan dilewati.

Layar awal juga mencantumkan PDF dan takeoff yang baru Anda buka, di peramban yang mengizinkan halaman membuka file lagi (Chrome dan Edge). Klik salah satunya untuk membukanya; peramban mungkin meminta izin terlebih dahulu. Lihat [File Anda](common:your-files).

:::note
Tidak ada yang diunggah. Peramban membaca PDF di komputer Anda, dan PDF itu hilang dari TakeoffCraft saat Anda menutup tab atau memilih {{ui:New}}.
:::

## Gambar di samping PDF

{{ui:Open plans}} juga menerima gambar DWG dan DXF, sendiri atau bersama PDF: ruang model dan layout setiap gambar menjadi lembar dalam daftar yang sama. Lihat [Buka gambar DWG atau DXF](topic:open-a-drawing), lalu [Hitung dari gambar](topic:count-from-a-drawing).

## PDF yang diserahkan dari aplikasi lain

Aplikasi lain dalam rangkaian ini dapat menyerahkan PDF yang sedang dibukanya: ia membuka TakeoffCraft di tab baru, dan PDF terbuka di sana seolah-olah Anda telah menyeretnya. Bilah status menulis "Dibuka (nama), diserahkan dari (aplikasi). File asli tidak berubah." Tidak ada yang diunggah; file melewati penyimpanan peramban ini dan hilang darinya begitu terbuka.

Jika bilah status menyatakan PDF "tidak sampai", tab terlalu lama menunggu atau PDF sudah dibuka di tab lain: bukalah dengan {{ui:Open plans}}.

Sebaliknya, ketika MarkupCraft berjalan di tempat Anda dan dapat menerima file, bilah lembar di bawah gambar memiliki tombol {{ui:MarkupCraft}}: tombol itu membuka PDF dari lembar yang ada di layar di MarkupCraft, di tab baru, untuk ditinjau dan diberi markup.

## Mencari lembar

- Gulir daftar {{ui:Sheets}} di sebelah kiri dan klik sebuah lembar.
- Ketik di **Cari lembar** di bagian atas daftar untuk menyaring menurut nomor lembar, nama file, atau label halaman. Jumlah di samping {{ui:Sheets}} menampilkan "3 dari 40" saat saringan aktif.
- Tekan {{key:PageDown}} untuk lembar berikutnya dan {{key:PageUp}} untuk sebelumnya. Keduanya mengikuti daftar yang sudah disaring.

:::mac
Pada keyboard Mac tanpa tombol Page Up dan Page Down, tekan fn bersama panah atas atau bawah.
:::

## Cara lembar dinamai

- Halaman yang diberi label oleh PDF, seperti `A-101`, dinamai menurut label itu.
- Halaman tanpa label (atau label yang hanya berupa nomor halamannya) dinamai "(nama file), halaman (n)".
- Jika beberapa PDF terbuka, lembar yang berlabel juga memuat nama file: "A-101 — Arsitektur".

Nama lembar belum bisa diketik secara manual.

## Melihat-lihat lembar

- Putar roda mouse untuk zoom pada posisi penunjuk.
- Seret dengan tombol kiri atau tengah untuk menggeser. Dengan {{ui:Auto count}}, atau saat Anda mulai pada sudut tanda, tahan {{key:Space}} sambil menyeret, atau seret dengan tombol tengah.
- Tekan {{key:F}} atau pilih {{ui:Fit page}} untuk melihat seluruh lembar; {{key:W}} atau {{ui:Fit width}} memaskan lebarnya.
- Tekan {{key:Plus}} atau {{key:=}} untuk zoom masuk dan {{key:Minus}} untuk zoom keluar, di sekitar tengah tampilan.

Setiap lembar mengingat zoom dan posisinya sendiri selama tetap terbuka.

## Selanjutnya

Sebelum Anda dapat mengukur lembar, lembar itu perlu skala: [Atur skala](topic:set-the-scale).
