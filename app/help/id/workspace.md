---
title: Layar TakeoffCraft
summary: Tur jendela menurut nama di layar - bilah alat, daftar lembar, lembar, panel Item, tabel Kuantitas, dan bilah status.
keywords: layar, tata letak, pita, peramban proyek, kotak alat, kotak info, bilah alat, panel, daftar lembar, panel item, kuantitas, bilah status, tur, antarmuka
from: ab1115e0
---

TakeoffCraft memenuhi jendela peramban di bawah bilah aplikasi CadCraft. Dari atas ke bawah dan kiri ke kanan:

| Bagian | Tempat | Gunanya |
|---|---|---|
| Bilah aplikasi | Paling atas | Nama aplikasi, versi, {{ui:Tentang TakeoffCraft}}, {{ui:Bantuan}} ({{key:F1}}), {{ui:Simpan untuk offline}}, {{ui:Pengaturan}} ({{key:Mod+,}}), tombol {{ui:Layar penuh}}, dan sakelar tema {{ui:Kertas}} / {{ui:Model}}. |
| Bilah alat | Di bawah bilah aplikasi | Setiap perintah, dalam grup: {{ui:File}}, {{ui:Ekspor}}, {{ui:Skala}}, {{ui:Takeoff}}, {{ui:Edit}}, {{ui:Tampilan}}. |
| Lembar | Kiri | Setiap halaman dari setiap PDF yang terbuka, dengan gambar mini, skala, dan jumlah tandanya. |
| Lembar aktif | Tengah | Halaman yang terbuka. Anda mengukur di sini. |
| Item | Kanan | Item takeoff Anda, pengaturan item yang dipilih, dan tanda yang dipilih. |
| Kuantitas | Bawah | Kuantitas dan biaya per item atau per lembar, dan total pekerjaan. |
| Bilah status | Paling bawah | Ukuran langsung, pesan, petunjuk 45°, dan zoom. |

## Bilah alat

Arahkan penunjuk ke tombol mana pun untuk melihat fungsinya dan tombol pintasnya.

| Grup | Tombol |
|---|---|
| {{ui:File}} | {{ui:Baru}} (takeoff kosong), {{ui:Buka PDF}} ({{key:Mod+O}}), {{ui:Buka takeoff}} (proyek `.takeoff.json`), {{ui:Simpan takeoff}} ({{key:Mod+S}}) |
| {{ui:Ekspor}} | Satu menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF bertanda}} |
| {{ui:Skala}} | {{ui:Kalibrasi}} ({{key:K}}), {{ui:Periksa}} ({{key:D}}), dan daftar {{ui:Preset}} |
| {{ui:Takeoff}} | {{ui:Pilih}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Luas}} ({{key:A}}), {{ui:Lingkaran}} ({{key:O}}), {{ui:Busur}} ({{key:R}}, sakelar nyala/mati), {{ui:Kurangi}} ({{key:E}}, sakelar nyala/mati), {{ui:Lubang potong}} ({{key:X}}), {{ui:Hitung}} ({{key:C}}), {{ui:Hitung otomatis}} ({{key:S}}) |
| {{ui:Edit}} | {{ui:Urungkan}} ({{key:Mod+Z}}), {{ui:Ulangi}} ({{key:Mod+Y}}), {{ui:Salin}} ({{key:Mod+C}}), {{ui:Tempel}} ({{key:Mod+V}}), dan {{ui:Lainnya}}: {{ui:Potong}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Tempel di tempat yang sama}}, {{ui:Duplikat}}, {{ui:Hapus}}, {{ui:Pilih semua}}, {{ui:Batalkan pilihan}} |
| {{ui:Tampilan}} | {{ui:Paskan halaman}} ({{key:F}}), {{ui:Paskan lebar}} ({{key:W}}) |

Alat yang sedang Anda pakai tampak tertekan. Tombol {{ui:Busur}} dan {{ui:Kurangi}} tetap tertekan selama keduanya menyala.

## Lembar (kiri)

- **Cari lembar** menyaring daftar menurut nama lembar, nama file, atau label halaman.
- Setiap lembar menunjukkan gambar mini (digambar saat Anda menggulir), namanya, dan skalanya atau **Tanpa skala**.
- Sisi kanan setiap baris menunjukkan berapa tanda yang dimiliki lembar. Saat sebuah item disorot, ia menunjukkan berapa tanda item itu yang ada di lembar.
- Klik lembar untuk membukanya. {{key:PageDown}} dan {{key:PageUp}} berpindah ke lembar berikutnya dan sebelumnya di daftar.
- Saat takeoff mencakup PDF yang tidak terbuka, catatan di bawah daftar menyebutkan namanya. Lihat [Simpan dan buka kembali takeoff](topic:save-and-reopen).

Nama lembar berasal dari PDF: label halaman seperti `A-101` menjadi nama lembar. Halaman tanpa label dinamai menurut file dan nomor halamannya, seperti "Plans, halaman 3". Dengan beberapa PDF terbuka, lembar berlabel juga menampilkan nama file.

## Lembar (tengah)

- Bilah di bawah lembar menunjukkan nama lembar dan skalanya, atau "Belum ada skala: pilih preset atau kalibrasi". Tombolnya: {{ui:MarkupCraft}} (jika aplikasi itu dapat menerima PDF; lihat [Mulai takeoff dan buka set gambar](topic:open-plan-set)), {{ui:Bandingkan}} (versi lama lembar di atas lembar ini: [Bandingkan lembar yang direvisi](topic:compare-revisions)), "(n) untuk diperiksa" (tanda yang diberi bendera, jika ada) dan {{ui:3D}} ([tampilan periksa 3D](topic:check-in-3d)).
- Sebelum PDF apa pun terbuka, bagian tengah menunjukkan panduan lima langkah singkat.
- Roda melakukan zoom di penunjuk. Seret untuk menggeser. Lihat [Keyboard dan mouse](topic:keyboard).
- Saat Anda memakai {{ui:Hitung otomatis}}, bilah dengan kontrolnya muncul di bagian atas lembar.

## Item (kanan)

Di bagian atas, daftar {{ui:Area penawaran}}: gedung, lantai, atau fase tempat tanda baru masuk ([Area penawaran](topic:bid-areas)).

- {{ui:Item baru}} membuka formulir kecil: nama, tipe ({{ui:Linear (panjang)}}, {{ui:Luas}} atau {{ui:Hitung}}) dan {{ui:Tambah}}.
- Daftar menunjukkan warna, ikon tipe, nama, dan kuantitas setiap item. Klik item untuk menggambar dengannya dan menyorot tandanya di setiap lembar. Klik lagi untuk berhenti menyorot.
- Di bawah daftar, **Item: (name)** adalah editor item: nama, tipe, warna, satuan, tinggi atau kedalaman, susut, harga satuan material dan upah, nilai terukur, dan {{ui:Rakitan biaya}}. Lihat [Buat item takeoff](topic:create-items).
- **Tanda terpilih** muncul saat Anda memilih tanda: item mana yang memilikinya, lembarnya, ukurannya, dan tombol seperti {{ui:Tambah lubang potong}} dan {{ui:Hapus tanda}}. Dengan beberapa tanda dipilih ia menjadi **Beberapa tanda terpilih**: berapa banyak dari setiap item, dan {{ui:Salin}}, {{ui:Duplikat}}, {{ui:Potong}} dan {{ui:Hapus tanda}}.
- Editor item diakhiri dengan {{ui:Salin item}} dan {{ui:Duplikat item}}: item beserta rakitan biaya dan biayanya, tanpa tanda. Lihat [Salin, tempel, dan duplikat tanda](topic:copy-paste).

## Kuantitas (bawah)

- {{ui:Per item}} mendaftar setiap item dan komponen rakitan biayanya dengan kuantitas, susut, harga satuan, dan biaya yang diperluas. Anda dapat mengetik susut dan harga satuan langsung ke tabel.
- {{ui:Per lembar}} mendaftar kuantitas setiap item pada setiap lembar.
- Peringatan yang diawali **Belum lengkap:** muncul saat ada yang tidak masuk total.
- {{ui:Total pekerjaan}} ada di kanan header.
- Tombol panah di kanan jauh menyembunyikan atau menampilkan tabel agar lembar punya lebih banyak ruang.

Lihat [Baca kuantitas dan estimasi](topic:read-quantities).

## Bilah status (bawah)

Dari kiri ke kanan: ukuran langsung saat Anda menggambar (panjang, luas, radius, atau hasil pemeriksaan), kotak {{ui:Ketik}} saat Anda mengetik panjang, pesan dari TakeoffCraft, pengingat "Shift untuk snap ke 45°" (atau "Snap ke 45°; Shift membebaskan sudut" saat itu menyala di [Pengaturan](topic:settings)), tombol {{ui:Snap}} (snap ke garis gambar, menyala saat disorot; {{key:F3}}), dan persentase zoom.

:::tip
Baca bilah status saat sesuatu tidak terjadi. TakeoffCraft menjelaskan di sana mengapa ia menolak klik, misalnya "Lembar ini belum memiliki skala".
:::

## Tata letak lain

Semua di atas adalah tata letak {{ui:CadCraft klasik}}, tata letak awal. {{ui:Pengaturan}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Tata letak}} menawarkan dua lagi; alat dan tombol yang sama berfungsi di ketiganya, dan memilih {{ui:CadCraft klasik}} lagi mengembalikan setiap kontrol ke tempatnya semula.

| Tata letak | Di TakeoffCraft |
|---|---|
| {{ui:Pita dan peramban proyek}} | {{ui:Pita takeoff}} di sepanjang atas ([Menu, tombol, dan mouse](topic:menus-keys-and-mouse)), bilah untuk alat yang berjalan, tab untuk setiap lembar yang Anda buka (Model dan layout gambar juga lembar) dengan preset skala dan {{ui:Paskan halaman}} di bawah lembar. Panel kiri berisi {{ui:Properti}} (item, catatan, atau tanda yang dipilih) di atas {{ui:Peramban takeoff}}: {{ui:Lembar}} (klik satu untuk membukanya di tab), {{ui:Kondisi}} (klik satu untuk menggambar dengannya) dan {{ui:Estimasi}} (total setiap item dan total pekerjaan); gambar mini ada di tab keduanya. |
| {{ui:Kotak alat dan kotak info}} | Bilah alat di atas lembar, kotak info dengan {{ui:Area penawaran}}, alat yang berjalan atau pilihan dan bilah lembar, kolom alat takeoff di kiri, tab untuk setiap lembar, dan {{ui:Snap}} serta zoom di bawah lembar. |

Saat [tampilan periksa 3D](topic:check-in-3d) terbuka, tab lembar dan bilah di bawah lembar menyingkir; tutup tampilan 3D untuk mengukur lagi. Di ponsel tata letak ponsel selalu berjalan.

## Layar penuh dan tema

Tombol {{ui:Layar penuh}} di bilah aplikasi, atau {{key:Ctrl+Shift+F}} (Control di semua platform, juga di Mac), bergantian melewati normal, layar penuh, dan layar penuh dengan bilah disembunyikan. Saat bilah disembunyikan, gerakkan penunjuk ke tepi atas untuk menampilkannya lagi.

{{ui:Kertas}} adalah tema terang dan {{ui:Model}} yang gelap. Di {{ui:Model}} gambar ditampilkan terbalik (garis terang di latar gelap) hanya di layar; ekspor tidak pernah diubah.
