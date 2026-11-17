---
title: Kirim paket untuk penawaran
summary: Kirim paket penawaran lewat email ke subkontraktor, biarkan mereka mengetik harga di halaman yang tidak memerlukan akun, simpan harga tetap tertutup hingga waktu pembukaan, dan tarik harga ke lembar penyetaraan.
keywords: kirim untuk penawaran, undangan, undangan penawaran, penawar, subkontraktor, undang, email, permintaan harga, penawaran tertutup, pembukaan penawaran, hari penawaran, penawaran terlambat, tenggat, pengingat, catatan subkontraktor, asuransi, kualifikasi, csv, hubungkan, PDF lembar
from: fb314b2c
---

{{ui:Ekspor}} › {{ui:Paket penawaran dan penyetaraan…}} › {{ui:Kirim untuk penawaran…}} mengirim satu paket kepada orang-orang yang Anda pilih. Situs web mengirim setiap orang sebuah tautan melalui email; mereka membuka halaman, melihat lingkup, dan mengetik harga untuk setiap baris. Anda melihat harga di lembar penyetaraan, siap untuk dibandingkan ([Paket penawaran dan penyetaraan penawaran](topic:bid-leveling)).

:::note
**Pengiriman belum terbuka untuk semua orang.** Selama fitur ini diuji, fitur ini hanya berfungsi untuk akun yang diaktifkan tim CadCraft; jika akun Anda belum, dialog akan menyatakannya. Halaman penawar berfungsi untuk setiap undangan yang telah dikirim.
:::

## Sebelum mengirim

- Anda memerlukan akun CadCraft dengan alamat email terverifikasi. TakeoffCraft di peramban meminta Anda **Hubungkan**: sebuah tab terbuka di getcadcraft.com, Anda menekan Hubungkan, dan tab itu mendapat sesi masuk yang berlaku 30 hari, khusus untuk paket penawaran, hingga Anda menutup tab TakeoffCraft. Anda dapat menghapusnya kapan saja di halaman keamanan Anda. Jendela Studio belum dapat mengirim.
- Beri setiap item nomor CSI: sebuah paket adalah item-item dari satu divisi CSI ([Buat item perhitungan volume](topic:create-items)).
- Skalakan lembar tempat tanda paket berada, agar kuantitas yang dilihat penawar terukur.

## Kirim sebuah paket

1. Pilih {{ui:Kirim untuk penawaran…}} di bawah paket.
2. Isi judul, proyek, dan pesan opsional, serta **waktu tenggat** dalam zona waktu Anda sendiri.
3. Biarkan **Simpan harga tertutup** tercentang untuk menyembunyikan setiap harga hingga **waktu pembukaan** (bukan sebelum waktu tenggat), atau hapus centangnya untuk melihat harga saat masuk.
4. Biarkan kotak lembar tercentang untuk mengirim PDF lembar yang memuat tanda paket, dengan tanda tergambar. Harga Anda tidak pernah ada dalam yang dikirim: hanya nama item, nomor CSI, kuantitas, satuan, dan nama lembar.
5. Ketik orang yang akan diundang, satu per baris, sebagai `Name <name@company.com>` atau hanya alamatnya, atau centang orang dari catatan subkontraktor Anda. Hingga 60 sekaligus, 100 per paket.
6. Pilih {{ui:Kirim undangan}}. Setiap orang menerima satu email biasa dengan nama dan alamat email Anda, waktu tenggat, dan tautannya; balasan dikirim kepada Anda.

Dialog memberi tahu berapa banyak yang terkirim dan menyebutkan siapa pun yang dilewati: sudah diundang ke paket ini, meminta tidak menerima undangan penawaran, alamat tidak valid, atau melampaui batas pengiriman.

## Yang dilihat penawar

Halaman di tautan pribadi yang panjang, tanpa masuk. Halaman itu menunjukkan siapa yang mengundang mereka, waktu tenggat, apakah harga tertutup, pesan Anda dan PDF lembar, lalu setiap baris beserta kuantitasnya. Untuk setiap baris mereka mengetik harga atau mencentang **Tidak termasuk**, dan dapat menambahkan catatan; mereka menambahkan catatan untuk seluruh paket dan hingga 3 file (penawaran, surat lingkup, sertifikat). Mereka dapat menyimpan lagi dan mengubah harga mereka hingga waktu pembukaan, atau **menolak**, dengan kotak untuk meminta CadCraft tidak lagi mengirim undangan penawaran kepada mereka.

## Penawaran tertutup dan pembukaan

Sebelum waktu pembukaan **tidak seorang pun** melihat harga, catatan, atau file: tidak Anda, tidak di TakeoffCraft, tidak di halaman Paket penawaran Anda. Anda melihat siapa yang diundang dan apakah mereka sudah menjawab. Pada waktu pembukaan setiap penawaran tampil sekaligus. Penawaran yang disimpan setelah waktu tenggat diterima dan ditandai **terlambat**; penyetaraan tetap mencantumkannya, dan keterlambatan adalah penanda, bukan keputusan. Setelah pembukaan, penawar tidak dapat mengubah harga. Tanpa penutupan, penawaran menjadi final begitu jatuh tempo.

## Dapatkan harga

{{ui:Ambil harga}} meminta situs web dan menambahkan setiap jawaban ke paket sebagai penawaran, ditandai **web**. TakeoffCraft juga diam-diam meminta setiap kali Anda membuka dialog saat terhubung. Penawaran yang penawarnya simpan versi baru diperbarui di tempat; penawaran yang Anda edit tetap seperti yang Anda tinggalkan hingga mereka mengirim versi baru. Setiap penarikan adalah satu langkah yang dapat dibatalkan dengan {{key:Mod+Z}}. Baris yang dikecualikan ikut terbawa sebagai lingkup yang tidak dicakup penawaran, sehingga penyetaraan mengisinya dengan biaya Anda sendiri.

## Di situs web

Akun Anda memiliki dua halaman lagi setelah Anda dapat mengirim: **Paket penawaran** mencantumkan apa yang Anda kirim, siapa yang menjawab, penawaran terlambat, dan filenya, serta memungkinkan Anda mengirim pengingat (tautan baru; tautan lama berhenti berfungsi), menutup, membuka kembali, atau membatalkan paket. **Subkontraktor** menyimpan catatan untuk setiap perusahaan: kontak, bidang keahlian, jawaban kualifikasi (tahun berdiri, kapasitas jaminan, EMR, catatan keselamatan, serikat atau open shop, referensi), tanggal kedaluwarsa lisensi dan asuransi yang ditandai setelah lewat atau dalam 30 hari, serta penawaran mereka sebelumnya. Impor dan ekspor catatan sebagai CSV: satu baris per kontak, dengan kolom yang ditampilkan ekspor; perusahaan yang sudah Anda miliki diperbarui, tidak pernah diulang.

## Siapa yang melihat apa, dan berapa lama

Harga, catatan, dan file penawar dikirim kepada Anda dan tim CadCraft, yang menjalankan halaman itu. Semuanya disimpan selama 24 bulan setelah tanggal tenggat, dan file-filenya selama 180 hari; setelah itu dihapus. Alamat email penawar adalah yang Anda masukkan; alamat itu hanya digunakan untuk mengirim undangan dan pengingat untuknya. Satu alamat menerima paling banyak 3 undangan per hari dari semua pengirim sekaligus, dan Anda dapat mengirim hingga 200 per hari.

## Belum dibuat

Addendum, surat penghargaan, lembar lingkup yang disetujui per penawar, dan pengingat otomatis sebelum tanggal asuransi habis belum dibuat. Lihat [Belum dibuat](topic:not-built-yet).
