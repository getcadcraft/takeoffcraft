---
title: Simpan dan buka kembali takeoff
summary: Simpan takeoff sebagai file proyek .takeoff.json, buka kembali bersama PDF yang sama, serta apa yang terjadi jika sebuah PDF hilang atau berubah.
keywords: takeoff di dalam pdf, sematkan, lampiran, simpan, buka, buka kembali, proyek, takeoff.json, lanjutkan, pdf revisi, pdf berubah, pdf hilang, cadangan, simpan otomatis, pulihkan, crash
from: bd5080a6
---

Takeoff disimpan sebagai file proyek kecil, `(name).takeoff.json`. File ini berisi item, rakitan, harga satuan, skala setiap lembar, dan setiap tanda. File ini **tidak** berisi PDF; PDF ditemukan kembali berdasarkan isinya.

## Simpan

1. Pilih {{ui:Simpan takeoff}} di grup {{ui:File}}, atau tekan {{key:Mod+S}}.
   Browser Anda mengunduh `(name).takeoff.json`. Bilah status menampilkan "Saved (name).takeoff.json. It reopens on top of the same PDFs (they are matched by their contents)."
2. Pindahkan file itu ke sebelah PDF pekerjaan, agar keduanya tetap bersama.

Setiap penyimpanan mengunduh file baru. Browser Anda mungkin memberi nama file kedua `(name) (1).takeoff.json`; simpan yang terbaru.

Nama diambil dari PDF pertama yang Anda buka dalam takeoff ini.

:::note
Simpan takeoff tetap satu-satunya cara menyimpan takeoff sebagai file. Selama Anda bekerja, TakeoffCraft juga menyimpan salinan pemulihan di browser ini (lihat di bawah), dan penyimpanan cloud belum tersedia. Jika Anda mencoba menutup tab dengan perubahan yang belum disimpan, browser akan menanyakan apakah Anda ingin keluar.
:::

## Simpan takeoff di dalam PDF

{{ui:Ekspor}} › {{ui:PDF berisi takeoff}} mengunduh salinan setiap PDF yang terbuka, dinamai seperti `Plans (with takeoff).pdf`, yang membawa seluruh takeoff sebagai lampiran: item, tanda, skala, area penawaran, dan semua yang ada di `.takeoff.json`. Halamannya tidak diubah, sehingga tampilan dan hasil cetaknya sama dengan aslinya, dan pembaca PDF lain mencantumkan takeoff itu di bawah lampirannya.

Buka PDF itu di TakeoffCraft (dengan cara apa pun Anda membuka PDF), dan aplikasi akan bertanya **PDF ini berisi takeoff**: pilih {{ui:Buka takeoff}} untuk mengambilnya kembali, atau {{ui:PDF-nya saja}} untuk hanya membuka gambarnya. Salinan itu mewakili PDF tempat ia dibuat, sehingga `.takeoff.json` yang disimpan dari salah satunya dapat dibuka di keduanya.

Dengan beberapa PDF, setiap salinan membawa seluruh takeoff; bukalah bersama-sama. Menyimpan lagi dari sebuah salinan akan menggantikan takeoff di dalamnya, bukan menambah takeoff kedua. `.takeoff.json` tetap menjadi file yang harus disimpan: ukurannya kecil, dan itulah yang ditulis oleh simpan otomatis dan aplikasi desktop.

## Jika tab atau browser berhenti

Beberapa detik setelah setiap perubahan, TakeoffCraft menyimpan salinan takeoff di penyimpanan browser ini, bersama PDF-nya jika totalnya 64 MB atau kurang. Tidak ada yang diunggah. Saat Anda menyimpan takeoff, memulai takeoff baru, atau membuka proyek lain, salinan itu dihapus.

Jika tab mengalami crash, browser atau komputer berhenti, atau Anda keluar dengan perubahan yang belum disimpan, saat membuka TakeoffCraft berikutnya aplikasi akan bertanya **Pulihkan pekerjaan Anda?** dan mendaftar takeoff berdasarkan namanya. Pilih **Pulihkan** untuk mengembalikannya: item, tanda, dan skala kembali, serta PDF-nya dibuka lagi jika disimpan. Bilah status menampilkan "Recovered (name). It is not saved to a file yet: Save takeoff keeps it." Jika PDF terlalu besar untuk disimpan, buka kembali; tanda akan muncul di lembarnya. Selengkapnya: [Pulihkan pekerjaan Anda](common:recover).

## Buka kembali

1. Buka TakeoffCraft.
2. Seret file `.takeoff.json` dan PDF-nya ke halaman bersamaan. Atau pilih {{ui:Buka denah}} untuk PDF dan {{ui:Buka takeoff}} untuk proyek, dalam urutan apa pun.
   Bilah status menampilkan "Opened (name): 12 items, 340 marks." Setiap lembar mendapatkan kembali skalanya, dan tanda muncul di lembarnya.

Urutan PDF tidak penting, begitu pula nama file atau foldernya. TakeoffCraft mengenali setiap PDF dari sidik jari isinya.

Jika Anda membuka proyek saat takeoff yang sedang berjalan memiliki perubahan yang belum disimpan, TakeoffCraft akan bertanya terlebih dahulu: **Batal**, **Buang perubahan**, atau **Simpan takeoff terlebih dahulu**. Membuka proyek menggantikan item dan tanda saat ini; PDF yang sudah terbuka tetap terbuka.

## Saat PDF hilang

Jika Anda membuka proyek tanpa semua PDF-nya, bilah status menambahkan "Open its PDFs to see the marks (listed under Sheets)." Di bawah daftar lembar, sebuah catatan berbunyi:

"This takeoff also covers PDFs that are not open. Their quantities are counted; open them to see and edit their marks:"

diikuti nama file dan ukurannya. Tanda mereka tetap dihitung dalam setiap total dan ekspor, dengan skala saat diukur. Buka PDF tersebut untuk melihat dan mengedit tandanya.

## Saat PDF berubah

PDF yang direvisi, atau baru saja disimpan ulang oleh program lain, memiliki isi yang berbeda, sehingga bagi TakeoffCraft itu adalah **file yang berbeda**, meskipun namanya sama. Di catatan bawah daftar lembar, file seperti itu tertulis "a file with this name is open, but its contents differ".

- Tanda tetap melekat pada versi lama. Tanda terus dihitung, pada posisi dan skala lamanya.
- PDF yang direvisi terbuka sebagai lembar baru tanpa skala dan tanpa tanda.

Untuk memindahkan takeoff ke revisi, buka kedua PDF dan gunakan {{ui:Bandingkan}} pada lembar baru: [Bandingkan lembar revisi dan pindahkan takeoff](topic:compare-revisions).

## File rusak atau file asing

TakeoffCraft memeriksa setiap file proyek sebelum menggunakannya. Pesan yang mungkin muncul:

- "(file) is not a TakeoffCraft project (it is not valid JSON)."
- "This is not a TakeoffCraft project file."
- "This project was saved by a newer TakeoffCraft. Open it there."
- "3 marks were damaged and left out." (sisanya tetap terbuka)

## Riwayat urungkan

Riwayat urungkan dimulai dari awal saat Anda membuka proyek. Menyimpan tidak menghapusnya.
