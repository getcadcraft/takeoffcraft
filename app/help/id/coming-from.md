---
title: Beralih dari perangkat lunak takeoff lain
summary: Cara kebiasaan dari program takeoff khusus dan alat markup PDF dipetakan ke TakeoffCraft, serta perbedaan yang sering membingungkan.
keywords: beralih, migrasi, kondisi, part, alat pengukuran, daftar markup, tautan kuantitas, kebiasaan takeoff, perbedaan, bandingkan
from: 12004ce5
---

Jika Anda pernah melakukan takeoff di PlanSwift atau dengan alat pengukuran di Bluebeam Revu, sebagian besar TakeoffCraft akan terasa familiar: satu set denah, skala per lembar, hal-hal yang Anda ukur, dan total yang sudah diberi harga. Cara bagian-bagiannya saling terhubung berbeda di beberapa tempat, dan tempat-tempat itu dijelaskan di bawah.

Jika Anda mengenal PlanSwift atau On-Screen Takeoff, pilih gaya menu {{ui:Takeoff desk}} di {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}: bilah menu berisi File, Edit, Tampilan, Skala, Takeoff, Item, Markup dan Ekspor di atas sederet alat takeoff, dengan preset skala di bilah lembar. Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse).

## Kebiasaan yang dipetakan

| Yang sudah Anda kenal | Di TakeoffCraft |
|---|---|
| Membuka job atau proyek yang menyimpan denah (PlanSwift) | Buka PDF dan proyek `.takeoff.json` berdampingan. Proyek hanya menyimpan takeoff; PDF tetap menjadi file Anda sendiri. |
| Daftar markup dengan catatan, awan, dan sorotan (Bluebeam) | {{ui:Markup}} di bilah lembar: catatan, awan, dan sorotan dengan status (Open, Answered, Closed), didaftar di bawah **Markup**, digambar di PDF bertanda. Lihat [Catatan, awan, dan sorotan](topic:markups). |
| Pengukuran yang disimpan sebagai markup di dalam PDF (Bluebeam) | Takeoff tersimpan di file `.takeoff.json`. {{ui:Marked PDF}} menulis salinan dengan takeoff digambar di dalamnya, untuk dibagikan; {{ui:PDF with the takeoff inside}} menulis salinan yang membawa takeoff, untuk dibuka kembali di TakeoffCraft. |
| Item takeoff (PlanSwift), alat pengukuran kustom yang disimpan di Tool Chest (Bluebeam) | **Item** di bawah {{ui:Items}}: nama, tipe, warna, satuan, tinggi atau kedalaman, susut, dan tarif. |
| Bagian dan rakitan dengan rumus (PlanSwift) | {{ui:Assembly}} dari item: komponen dengan rumus yang memakai `L H A N P`. |
| Mengatur skala halaman, atau kalibrasi (keduanya) | Daftar {{ui:Preset}} atau {{ui:Calibrate}} di grup {{ui:Scale}}, per lembar. {{ui:Check}} mengukur dimensi yang sudah diketahui. |
| Menerapkan satu skala ke rentang halaman | Belum: atur setiap lembar. |
| Viewport dengan skala berbeda pada satu lembar (Bluebeam) | Belum: satu skala per lembar. |
| Alat polyline dan luas (Bluebeam), takeoff linear dan luas (PlanSwift) | {{ui:Linear}} ({{key:L}}) dan {{ui:Area}} ({{key:A}}). |
| Menahan Shift untuk garis lurus | {{key:Shift}} menempel pada kelipatan 45°, prinsip yang sama. |
| Snap ke garis gambar | Aktif secara default: ujung, titik tengah, perpotongan, dan titik terdekat pada garis, dengan {{key:F3}} untuk mematikannya, seperti di program CAD. |
| Alat hitung (keduanya) | {{ui:Count}} ({{key:C}}). |
| Pencarian visual untuk simbol (Bluebeam) | {{ui:Auto count}} ({{key:S}}): kotak satu simbol, tinjau, lalu tambahkan. |
| Lubang potong atau pengurangan pada area | {{ui:Cut-out}} ({{key:X}}) pada area yang dipilih, dan lubang potong bulat. |
| Pengurangan pada lintasan linear | Gambar lintasan lurus melewatinya dan tekan {{key:E}} ({{ui:Deduct}}) untuk bukaan. Lihat [Ukur lintasan linear](topic:measure-linear). |
| Segmen busur dalam polyline | {{ui:Arc}} ({{key:R}}): klik titik pada kurva, lalu ujungnya. |
| Daftar Markup dengan kolom kuantitas (Bluebeam) | Tabel {{ui:Quantities}}, {{ui:By item}} atau {{ui:By sheet}}. |
| Tabel estimasi dengan harga (PlanSwift) | Tabel yang sama: susut, material dan upah per satuan, total yang diperluas, dan {{ui:Job total}}. |
| Ekspor ke Excel | {{ui:XLSX}} dengan rumus langsung, atau {{ui:CSV}}. |
| Escape untuk menghentikan alat | {{key:Esc}} membatalkan dan kembali ke {{ui:Select}}. |
| Klik kanan untuk menyelesaikan | Klik kanan juga menyelesaikan lintasan atau menutup area di sini. Tidak ada menu klik kanan. |

## Perbedaan yang sering membingungkan

**Takeoff tidak berada di dalam PDF Anda.** Tidak ada yang Anda lakukan mengubah PDF Anda. Simpan file `.takeoff.json` dan simpan bersama gambar-gambarnya. Mengirim PDF bertanda kepada seseorang tidak mengirimkan takeoff yang bisa disunting: kirim file proyek dan PDF asli, atau [PDF berisi takeoff](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF dicocokkan berdasarkan isi, bukan nama.** Lembar revisi yang disimpan menimpa nama file lama dianggap file baru oleh TakeoffCraft, tanpa skala dan tanpa tanda. Tanda lama tetap berada di versi lama dan tetap dihitung. Lihat [Simpan dan buka kembali takeoff](topic:save-and-reopen#when-a-pdf-has-changed).

**Tanda tanpa skala dikeluarkan, tidak dihitung sebagai nol.** Jika sebuah lembar tidak memiliki skala, lintasan dan area-nya tidak dihitung, dan tabel menampilkan "Tidak lengkap". Di banyak program, Anda hanya akan melihat 0. Lihat [Atur skala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Tidak ada tebakan ukuran halaman.** Preset mengasumsikan PDF dicetak pada ukuran penuh. PDF berukuran setengah atau "paskan ke halaman" memerlukan {{ui:Calibrate}}. Selalu gunakan {{ui:Check}}.

**Satu item, satu tipe utama, lebih jika Anda minta.** Item berupa linear, luas, atau hitung, dan tipenya terkunci begitu sudah memiliki tanda. Kondisi yang memberi Anda luas sekaligus kelilingnya adalah item luas: kelilingnya adalah variabel `P`. Dinding yang memiliki panjang sekaligus luas adalah item linear dengan tinggi. Untuk item multi-kondisi, seperti ruangan dengan lantai, base, dan pintu, centang jenis lain di bawah **Ukur juga**: masing-masing diberi harga di barisnya sendiri. Lihat [Satu item, beberapa jenis tanda](topic:create-items#one-item-several-kinds-of-marks).

**Rumus dihitung dari total.** Rumus rakitan memakai total item di semua lembar, bukan setiap lintasan secara terpisah. `N` (jumlah lintasan atau area) tersedia untuk tambahan per lintasan, misalnya satu stud ekstra per dinding.

**Keliling termasuk lubang potong.** `P` sebuah area menambahkan tepi lubangnya. Lihat [Ukur area dengan lubang potong](topic:measure-areas#read-the-area).

**Menyeret menggeser tampilan.** Seret dengan tombol kiri pada lembar akan menggeser, di setiap alat kecuali {{ui:Auto count}}. Anda tidak perlu beralih ke alat geser. Roda mouse melakukan zoom; roda tidak menggulir.

**Salinan pemulihan, bukan cloud.** TakeoffCraft menyimpan salinan pekerjaan Anda di peramban ini dan menawarkannya kembali setelah crash ([Jika tab atau peramban berhenti](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), tetapi takeoff tetap harus Anda simpan sendiri: {{key:Mod+S}}. Penyimpanan cloud belum tersedia.

**Semuanya berjalan di peramban.** Tidak ada yang perlu dipasang, dan denah tidak pernah diunggah. Untuk aplikasi desktop, TakeoffCraft tersedia di CadCraft Studio, bersama tujuh aplikasi lainnya.

## Belum tersedia di sini

Wilayah skala per lembar belum dibuat. Lihat [Yang belum dibuat](topic:not-built-yet) untuk daftar lengkap dan apa yang bisa dilakukan sebagai gantinya.
