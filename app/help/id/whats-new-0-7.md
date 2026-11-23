---
title: Yang baru di 0.7 (sebelumnya)
summary: Gambar DWG dan DXF terbuka sebagai lembar dengan skala sendiri, hitungan dan panjang yang persis dari gambar itu sendiri, penawaran subkontraktor terpilih sebagai harga paket, undangan penawaran dengan harga tersegel, alat asisten untuk gambar, dan USD dari tampilan cek 3D.
keywords: yang baru 0.7, rilis sebelumnya, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, dwg, dxf, gambar, layout, ruang model, skala gambar, hitung dari gambar, hitung CAD, blok, blok dinamis, atribut, layer, xref, gambar tertaut, ukur gambar, polyline, hatch, PDF bertanda, penawaran terpilih, pakai penawaran, kirim untuk penawaran, undangan penawaran, penawaran tersegel, pembukaan penawaran, penawaran terlambat, catatan subkontraktor, csv, asisten, mcp, usd, usdz, satuan, daftar satuan, padat, panel, dialog, portugis
from: 0e3a424f
---

Ini yang berubah di TakeoffCraft 0.7, dibandingkan dengan 0.6. Gambar kini terbuka apa adanya, tanpa dicetak ke PDF lebih dulu, dan sebuah paket penawaran dapat dikirim ke subkontraktor dan kembali dalam bentuk harga.

## Baru

### Gambar DWG dan DXF

- **Buka gambar sebagai lembar.** {{ui:Buka denah}} di grup {{ui:File}} ({{key:Mod+O}}, atau seret file-nya) menerima gambar DWG dan DXF di samping PDF. Ruang model dan setiap layout menjadi lembar di daftar {{ui:Lembar}}, dan takeoff dapat mencakup gambar dan PDF sekaligus. Tidak ada yang diunggah. Lihat [Buka gambar DWG atau DXF](topic:open-a-drawing).
- **Skala berasal dari gambar.** Layout dimulai pada skala viewport terbesarnya, diberi nama sebagai preset jika memang preset, misalnya 1/2" = 1'-0". Model dimulai dalam satuan gambar. Gambar yang tidak punya satuan menampilkan "No scale" sampai Anda melakukan {{ui:Kalibrasi}}. {{ui:Kalibrasi}}, {{ui:Periksa}} dan {{ui:Preset}} tetap berlaku lebih dulu. Lihat [Skala](topic:open-a-drawing#the-scale).
- **Layer dan gambar tertaut.** {{ui:Layer}} di bilah lembar menampilkan atau menyembunyikan layer gambar. Layer yang dimatikan atau dibekukan oleh file akan mulai tersembunyi dan tidak dihitung kecuali Anda memilihnya. Gambar tertaut (xref) yang dibuka di samping induknya digambar dan dihitung di tempat ia disisipkan; sampai gambar itu dibuka, bilah status menyebutkan apa yang hilang. Lihat [Layer](topic:open-a-drawing#layers).
- **PDF bertanda dari gambar.** {{ui:Ekspor}} › {{ui:PDF bertanda}} menggambar lembar bertanda dari sebuah gambar sebagai PDF lebih dulu, sehingga salinannya menampilkan tanda dan legenda Anda tanpa langkah pencetakan. Gambar dibuat dalam hitam atau warna gambar, tanpa tabel gaya plot. Lihat [PDF bertanda](topic:export-estimate#a-marked-pdf).

### Hitungan dan panjang yang persis dari gambar

- **Hitung apa yang dinyatakan gambar ada di sana.** {{ui:Hitung CAD}} di bilah lembar menghitung blok menurut nama (termasuk blok bersarang, status blok dinamis, dan larik blok), semua objek satu tipe pada satu layer, atau nilai teks atau atribut. Yang dihitung adalah apa yang ditampilkan lembar, atau seluruh gambar sekali. Menambahkan tanda adalah satu langkah urungkan, dan menghitung ulang hanya menambahkan yang baru. {{ui:Hitung otomatis}} tetap untuk PDF dan untuk simbol yang bukan blok. Lihat [Hitung dari gambar](topic:count-from-a-drawing).
- **Ukur dari garis milik gambar.** {{ui:Ukur gambar}} mengambil garis, busur, polyline, lingkaran, hatch, dan solid yang Anda klik atau pilih dengan jendela sebagai tanda untuk item linear atau luas. Busur, bulge, dan lubang hatch dihasilkan dengan persis; elips dan spline diukur dengan tali busur yang halus, dan bilah memberi tahu hal itu. Lihat [Ukur dari gambar](topic:measure-from-a-drawing).

### Penawaran

- **Pakai penawaran subkontraktor sebagai harga paket.** Di {{ui:Ekspor}} › {{ui:Paket penawaran dan penyetaraan…}}, pilih {{ui:Pakai}} pada sebuah penawaran. Item paket tetap sebagai kuantitas, satu baris **Penawaran terpilih** membawa harganya, item yang tidak dicakup penawaran tetap pada biaya Anda sendiri, dan overhead, profit, serta bond diterapkan padanya. Mengganti penawaran adalah satu langkah urungkan; buku kerja dan ringkasan penawaran ikut membawanya. Lihat [Pakai penawaran sebagai harga paket](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Kirim paket untuk penawaran.** {{ui:Kirim untuk penawaran…}} di bawah sebuah paket mengirim email kepada setiap subkontraktor berisi tautan ke halaman yang tidak memerlukan akun: mereka melihat lingkup dan lembar sebagai PDF, mengetik harga pada setiap baris atau menandainya tidak termasuk, menambahkan catatan dan hingga tiga file, atau menolak. {{ui:Ambil harga}} menarik apa yang kembali ke lembar penyetaraan, ditandai **web**. Pengiriman hanya terbuka untuk akun yang telah diaktifkan tim CadCraft selama fitur ini diuji (lihat di bawah). Lihat [Kirim paket untuk penawaran](topic:bid-invitations).
- **Tersegel sampai pembukaan.** Harga dapat tetap tersegel sampai waktu pembukaan yang Anda atur: sampai saat itu tidak seorang pun melihat harga, termasuk Anda. Saat pembukaan, setiap penawaran tampil sekaligus, dan penawaran yang masuk setelah batas waktu ditandai terlambat. Lihat [Penawaran tersegel dan pembukaan](topic:bid-invitations#sealed-bids-and-the-opening).
- **Catatan subkontraktor.** Akun Anda di getcadcraft.com menyimpan kontak setiap perusahaan, bidangnya, jawaban kualifikasi, serta tanggal asuransi dan lisensi (ditandai sekali lewat atau dalam 30 hari), beserta penawaran sebelumnya. Impor dan ekspor sebagai CSV, dan pilih saat Anda mengirim paket. Lihat [Di situs web](topic:bid-invitations#on-the-website).

### Asisten AI

- **Asisten dapat menambah ke takeoff.** Dengan **Sunting** tercentang, asisten Anda sendiri dapat menambah item (`items_add`) dan mengukur panjang, luas, dan hitungan pada lembar (`marks_add`; panjang dan luas hanya pada lembar berskala), masing-masing panggilan satu langkah urungkan.
- **Alat asisten untuk gambar.** Pada DWG atau DXF yang terbuka, asisten dapat mendaftar lembarnya dan apa yang bisa dihitung, menghitung dengan persis, menambahkan tanda hitung, dan mengukur dari geometri gambar. Tanpa TakeoffCraft terbuka, server MCP CadCraft membuka gambar sebagai takeoff baru dan menyimpannya, dan `cadcraft count` menghitung dari baris perintah. Lihat [Yang bisa diminta asisten](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Tampilan cek 3D sebagai USD.** {{ui:Paket USD (.usdz)}} di samping {{ui:GLB}} pada tampilan cek 3D menulis setiap dinding, pelat, lempeng, tiang hitungan, dan rentangan sebagai objek tersendiri, dinamai menurut itemnya dan membawa kuantitasnya, dalam meter. Asisten juga dapat mengekspornya (`usd_export`). Lihat [Ekspor tampilan cek 3D sebagai USD](topic:usd).

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} memiliki satu daftar masing-masing untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran persis sesuai definisi satuan (kaki survei AS adalah satuan tersendiri). Matikan satuan yang tidak pernah Anda pakai dan satuan itu keluar dari daftar; beri bintang pada satu satuan dan pekerjaan baru dimulai dengannya. File selalu menyimpan satuannya sendiri. Di TakeoffCraft, daftar {{ui:Satuan}} item mengikuti sakelar, item baru dimulai dengan satuan panjang atau luas yang diberi bintang, roofing squares (SQ), acre dan hektar adalah satuan luas baru, dan kotak panjang menerima tanda satuan apa pun, misalnya `3 yd`. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Tampilan lebih padat dan panel yang bisa dirapikan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Padat}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap mempertahankan tombol besarnya). Setiap panel samping memiliki bilah judul yang ramping: seret untuk menambatkan atau membuat panel mengambang, lepaskan di bilah panel lain untuk berbagi satu bingkai sebagai tab, sematkan agar meluncur ke tepi, atau sembunyikan lalu kembalikan dari tepi. Lihat [Atur panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog melalui bilah judulnya agar tidak menghalangi gambar; ia akan kembali ke tempat Anda meninggalkannya. Klik ganda bilah judul untuk memusatkannya lagi. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan yang sudah dikerjakan untuk asisten Anda sendiri (merapikan gambar, mencetak sekumpulan lembar, memeriksa gambar, bertanya kepada model, menjumlahkan takeoff, mencoba varian part, dan lainnya), masing-masing dengan alat yang dipanggilnya dan izin yang diperlukan, dan masing-masing diputar ulang oleh pengujian kami. Aplikasinya sendiri tidak memuat AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Bahasa ini, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini memiliki setiap kata dari aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan tersedia dalam bahasa Inggris.
- **CadCraft Studio** menjelaskan mengapa pemeriksaan pembaruan gagal (belum ada file untuk sistem Anda, tidak ada jaringan, tanda tangan tidak valid), alih-alih hanya "Selesai", dan tidak lagi memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kode.** Penandatanganan, dan paket Microsoft Store, dipindahkan ke 0.8 karena validasi sertifikat belum selesai. Periksa SHA-256 di samping setiap file di getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan installer, pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, untuk pertama kali, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build untuk iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} tersimpan, tetapi belum ada kotak yang membacanya.
- **Undangan penawaran dimatikan untuk sebagian besar akun.** Selama fitur ini diuji, surel kepada penawar dari luar hanya dikirim dari akun yang telah diaktifkan tim CadCraft. Halaman penawar berfungsi untuk setiap undangan yang sudah terkirim. Bagi yang lain: unduh {{ui:CSV lingkup}}, kirim surel sendiri, dan ketik penawarannya.
- Jendela CadCraft Studio belum bisa mengirim undangan penawaran: ia menyarankan memakai TakeoffCraft di peramban. Membuka takeoff yang sudah memiliki permintaan terkirim, penyetaraan, dan memilih penawaran berfungsi di Studio.
- Addenda, surat penunjukan, lembar lingkup yang ditandatangani setiap penawar, dan pengingat otomatis sebelum tanggal asuransi habis belum dibuat. Penawaran terpilih tidak menghitung ulang harga area penawaran alternatif.
- Gambar: tabel gaya plot dan file CTB tidak diterapkan, DXF biner ditolak (simpan sebagai DXF ASCII atau DWG), gambar tertaut hanya ditemukan di antara file yang terbuka berdasarkan nama file, dan underlay PDF, gambar, serta objek OLE di dalam gambar tidak digambar atau dihitung. Hitungan dan skala telah diperiksa pada gambar contoh, belum pada gambar dari pekerjaan nyata yang dibuka di program yang membuatnya.
- Asisten dapat menambah item dan tanda, tetapi tidak dapat memindahkan, mengubah, atau menghapus tanda yang sudah ada.

Yang lain ada di [Belum dibuat](topic:not-built-yet).
