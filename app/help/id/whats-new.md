---
title: Yang baru di 0.7
summary: Gambar DWG dan DXF terbuka sebagai lembar dengan skalanya sendiri, hitungan dan panjang tepat dari gambar itu sendiri, penawaran subkontraktor terpilih sebagai harga paket, undangan penawaran dengan harga tersegel, alat asisten untuk gambar, dan USD dari tampilan periksa 3D.
keywords: yang baru, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, dwg, dxf, gambar, layout, ruang model, skala gambar, hitung dari gambar, hitung cad, blok, blok dinamis, atribut, layer, xref, gambar tertaut, ukur gambar, polyline, hatch, pdf bertanda, penawaran terpilih, pakai penawaran, kirim untuk penawaran, undangan penawaran, penawaran tersegel, pembukaan penawaran, penawaran terlambat, catatan subkontraktor, csv, asisten, mcp, usd, usdz, satuan, daftar satuan, padat, panel, dialog, portugis
from: ad4f0df1
---

Ini yang berubah di TakeoffCraft 0.7 dibandingkan dengan 0.6. Gambar kini terbuka apa adanya, tanpa plot ke PDF lebih dulu, dan paket penawaran dapat dikirim ke subkontraktor lalu kembali dengan harga.

## Baru

### Gambar DWG dan DXF

- **Buka gambar sebagai lembar.** {{ui:Buka denah}} di grup {{ui:File}} ({{key:Mod+O}}, atau jatuhkan file) menerima gambar DWG dan DXF di samping PDF. Ruang model dan setiap layout menjadi lembar di daftar {{ui:Lembar}}, dan takeoff dapat mencakup gambar dan PDF sekaligus. Tidak ada yang diunggah. Lihat [Buka gambar DWG atau DXF](topic:open-a-drawing).
- **Skala berasal dari gambar.** Layout dimulai pada skala viewport terbesarnya, dinamai sebagai preset jika memang preset, seperti 1/2" = 1'-0". Model dimulai dalam satuan gambar. Gambar yang tidak punya satuan berbunyi "Tanpa skala" sampai Anda mengkalibrasinya. {{ui:Kalibrasi}}, {{ui:Periksa}} dan {{ui:Preset}} tetap menang. Lihat [Skala](topic:open-a-drawing#the-scale).
- **Layer dan gambar tertaut.** {{ui:Layer}} di bilah lembar menampilkan atau menyembunyikan layer gambar. Layer yang dimatikan atau dibekukan file dimulai tersembunyi dan tidak dihitung kecuali Anda memilihnya. Gambar tertaut (xref) yang dibuka di samping induknya digambar dan dihitung di tempat ia disisipkan; sebelum terbuka, bilah status menyebutkan apa yang kurang. Lihat [Layer](topic:open-a-drawing#layers).
- **PDF bertanda bekerja dari gambar.** {{ui:Ekspor}} › {{ui:PDF bertanda}} lebih dulu menggambar lembar bertanda sebuah gambar sebagai PDF, sehingga salinan menunjukkan tanda dan legenda Anda tanpa langkah plot. Digambar dengan hitam atau warna gambar, tanpa tabel gaya plot. Lihat [PDF bertanda](topic:export-estimate#a-marked-pdf).

### Hitungan dan panjang tepat dari gambar

- **Hitung apa yang dikatakan gambar ada di sana.** {{ui:Hitung CAD}} di bilah lembar menghitung blok menurut nama (termasuk blok bersarang, status blok dinamis, dan array blok), semua jenis tertentu pada satu layer, atau nilai teks atau atribut. Ia menghitung apa yang ditampilkan lembar atau seluruh gambar sekali. Menambahkan tanda adalah satu langkah urungkan, dan menghitung lagi hanya menambahkan yang baru. {{ui:Hitung otomatis}} tetap untuk PDF dan simbol yang bukan blok. Lihat [Hitung dari gambar](topic:count-from-a-drawing).
- **Ukur dari garis gambar sendiri.** {{ui:Ukur gambar}} mengambil garis, busur, polyline, lingkaran, hatch, dan solid yang Anda klik atau jendela sebagai tanda item linear atau luas. Busur, bulge, dan lubang hatch keluar tepat; elips dan spline diukur dalam busur halus, dan bilah menyebutkannya. Lihat [Ukur dari gambar](topic:measure-from-a-drawing).

### Penawaran

- **Pakai penawaran subkontraktor sebagai harga paket.** Di {{ui:Ekspor}} › {{ui:Paket penawaran dan penyetaraan…}}, pilih {{ui:Pakai}} pada penawaran. Item paket tetap sebagai kuantitas, satu baris **Penawaran terpilih** membawa harga, item yang tidak dimasukkan penawaran tetap pada biaya Anda sendiri, dan overhead, laba, dan jaminan berlaku padanya. Berganti penawaran adalah satu langkah urungkan; buku kerja dan ringkasan penawaran membawanya. Lihat [Pakai penawaran sebagai harga paket](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Kirim paket untuk penawaran.** {{ui:Kirim untuk penawaran…}} di bawah paket mengirim email ke setiap subkontraktor berisi tautan ke halaman yang tidak memerlukan akun: mereka melihat lingkup dan lembar sebagai PDF, mengetik harga di setiap baris atau menandainya tidak termasuk, menambahkan catatan dan hingga tiga file, atau menolak. {{ui:Ambil harga}} menarik yang kembali ke lembar penyetaraan, ditandai **web**. Pengiriman hanya terbuka untuk akun yang diaktifkan tim CadCraft selama diuji (lihat di bawah). Lihat [Kirim paket untuk penawaran](topic:bid-invitations).
- **Tersegel sampai pembukaan.** Harga dapat tetap tersegel sampai waktu pembukaan yang Anda tentukan: sampai saat itu tidak ada yang melihat harga, termasuk Anda. Saat pembukaan setiap penawaran tampil sekaligus, dan penawaran yang masuk setelah batas waktu ditandai terlambat. Lihat [Penawaran tersegel dan pembukaan](topic:bid-invitations#sealed-bids-and-the-opening).
- **Catatan subkontraktor.** Akun Anda di getcadcraft.com menyimpan kontak, keahlian, jawaban kualifikasi, serta tanggal asuransi dan lisensi setiap perusahaan (ditandai setelah lewat atau dalam 30 hari), beserta penawaran sebelumnya. Impor dan ekspor sebagai CSV, dan pilih saat Anda mengirim paket. Lihat [Di situs web](topic:bid-invitations#on-the-website).

### Asisten AI

- **Asisten dapat menambah ke takeoff.** Dengan **Edit** dicentang, asisten Anda sendiri dapat menambah item (`items_add`) dan mengukur lintasan, luas, dan hitungan pada lembar (`marks_add`; panjang dan luas hanya pada lembar berskala), setiap panggilan satu langkah urungkan.
- **Alat asisten untuk gambar.** Pada DWG atau DXF yang terbuka, asisten dapat mendaftar lembar dan apa yang dapat dihitung, menghitung secara tepat, menambah tanda hitung, dan mengukur dari geometri gambar. Tanpa TakeoffCraft terbuka, server MCP CadCraft membuka gambar sebagai takeoff baru dan menyimpannya, dan `cadcraft count` menghitung dari baris perintah. Lihat [Yang dapat diminta asisten](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Tampilan periksa 3D sebagai USD.** {{ui:Paket USD (.usdz)}} di samping {{ui:GLB}} di tampilan periksa 3D menulis setiap dinding, pelat lantai, pelat, tiang hitung, dan lintasan sebagai objeknya sendiri, dinamai menurut itemnya dan membawa kuantitasnya, dalam meter. Asisten juga dapat mengekspornya (`usd_export`). Lihat [Ekspor tampilan periksa 3D sebagai USD](topic:usd).

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} punya satu daftar masing-masing untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran persis sesuai definisi satuannya (kaki survei AS adalah satuan tersendiri). Matikan satuan yang tidak pernah Anda pakai dan satuan itu hilang dari daftar satuan; beri bintang pada satu satuan dan pekerjaan baru dimulai dengannya. File selalu mempertahankan satuannya sendiri. Di TakeoffCraft daftar {{ui:Satuan}} item mengikuti sakelar itu, item baru dimulai dalam satuan panjang atau luas yang diberi bintang, roofing square (SQ), acre, dan hektare adalah satuan luas baru, dan kotak panjang menerima tanda satuan apa pun, seperti `3 yd`. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Tata letak yang lebih padat dan panel yang dapat disimpan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Padat}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap memakai tombol besarnya). Setiap panel samping punya bilah judul tipis: seret untuk menambatkan atau mengambangkan panel, jatuhkan di bilah panel lain agar berbagi satu bingkai sebagai tab, sematkan agar meluncur ke tepi, atau sembunyikan dan panggil kembali dari tepi. Lihat [Atur panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog pada bilah judulnya agar tidak menghalangi gambar; dialog kembali di tempat Anda meninggalkannya. Klik dua kali bilah judul untuk menengahkannya lagi. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan yang sudah dikerjakan untuk asisten Anda sendiri (merapikan gambar, mem-plot set, memeriksa gambar, bertanya kepada model, menjumlahkan takeoff, mencoba varian part…), masing-masing dengan alat yang dipanggilnya dan izin yang diperlukannya, dan masing-masing diputar ulang oleh pengujian kami. Aplikasi tidak mengandung AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru ada di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Bahasa itu, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini memiliki setiap kata aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan dalam bahasa Inggris.
- **CadCraft Studio** menjelaskan mengapa pemeriksaan pembaruan gagal (belum ada file untuk sistem Anda, tidak ada jaringan, tanda tangan buruk) alih-alih hanya "Selesai", dan berhenti memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kode.** Penandatanganan, dan paket Microsoft Store, dipindah ke 0.8 karena validasi sertifikat belum selesai. Periksa SHA-256 di samping setiap file di getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan penginstal, pilih {{ui:Info lebih lanjut}}, lalu {{ui:Tetap jalankan}}. Di Mac, pertama kali, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build untuk iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} tersimpan, tetapi belum ada kotak yang membacanya.
- **Undangan penawaran dimatikan untuk sebagian besar akun.** Selama fitur ini diuji, email ke penawar luar hanya keluar dari akun yang diaktifkan tim CadCraft. Halaman penawar berfungsi untuk setiap undangan yang sudah terkirim. Semua orang lain: unduh {{ui:CSV lingkup}}, kirim sendiri lewat email dan ketik penawarannya.
- Jendela CadCraft Studio belum dapat mengirim undangan penawaran: ia menyuruh memakai TakeoffCraft di peramban. Membuka takeoff dengan permintaan terkirim, penyetaraan, dan memilih penawaran berfungsi di Studio.
- Addendum, surat penunjukan, lembar lingkup yang ditandatangani setiap penawar, dan pengingat otomatis sebelum tanggal asuransi habis belum dibuat. Penawaran terpilih tidak menghitung ulang harga area penawaran alternatif.
- Gambar: tabel gaya plot dan file CTB tidak diterapkan, DXF biner ditolak (simpan sebagai DXF ASCII atau DWG), gambar tertaut hanya ditemukan di antara file terbuka menurut nama file, dan underlay PDF, gambar, dan objek OLE dalam gambar tidak digambar atau dihitung. Hitungan dan skala telah diperiksa pada gambar contoh, belum pada gambar dari pekerjaan sungguhan yang dibuka di program pembuatnya.
- Asisten dapat menambah item dan tanda tetapi tidak dapat memindahkan, mengubah, atau menghapus tanda yang sudah ada.

Yang lainnya ada di [Belum dibuat](topic:not-built-yet).
