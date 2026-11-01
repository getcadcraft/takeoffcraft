---
title: Skrin TakeoffCraft
summary: Lawatan tetingkap mengikut nama pada skrin - bar alat, senarai helaian, helaian, panel Item, jadual Kuantiti dan bar status.
keywords: skrin, susun atur, susun atur, reben, semak imbas projek, kotak alat, kotak maklumat, bar alat, panel, senarai helaian, panel item, kuantiti, bar status, lawatan, antara muka
from: ab1115e0
---

TakeoffCraft mengisi tetingkap pelayar di bawah bar aplikasi CadCraft. Dari atas ke bawah dan kiri ke kanan:

| Bahagian | Lokasi | Untuk apa |
|---|---|---|
| Bar aplikasi | Paling atas | Nama aplikasi, versi, {{ui:Perihal TakeoffCraft}}, {{ui:Bantuan}} ({{key:F1}}), {{ui:Simpan untuk luar talian}}, {{ui:Tetapan}} ({{key:Mod+,}}), butang {{ui:Skrin penuh}} dan suis tema {{ui:Kertas}} / {{ui:Model}}. |
| Bar alat | Di bawah bar aplikasi | Setiap arahan, dalam kumpulan: {{ui:Fail}}, {{ui:Eksport}}, {{ui:Skala}}, {{ui:Takeoff}}, {{ui:Sunting}}, {{ui:Paparan}}. |
| Helaian | Kiri | Setiap halaman bagi setiap PDF terbuka, dengan imej kecil, skalanya dan bilangan tandanya. |
| Helaian yang dibuka | Tengah | Halaman yang dibuka. Anda mengukur di sini. |
| Item | Kanan | Item pengukuran kuantiti anda, tetapan item yang dipilih, dan tanda yang dipilih. |
| Kuantiti | Bawah | Kuantiti dan kos mengikut item atau mengikut helaian, serta jumlah kerja. |
| Bar status | Paling bawah | Ukuran langsung, mesej, petunjuk 45° dan zum. |

## Bar alat

Letakkan pointer di atas mana-mana butang untuk melihat fungsinya dan kekuncinya.

| Kumpulan | Butang |
|---|---|
| {{ui:Fail}} | {{ui:Baharu}} (pengukuran kuantiti kosong), {{ui:Buka PDF}} ({{key:Mod+O}}), {{ui:Buka takeoff}} (projek `.takeoff.json`), {{ui:Simpan takeoff}} ({{key:Mod+S}}) |
| {{ui:Eksport}} | Satu menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:PDF ditanda}} |
| {{ui:Skala}} | {{ui:Tentukur}} ({{key:K}}), {{ui:Semak}} ({{key:D}}), dan senarai {{ui:Pratetap}} |
| {{ui:Takeoff}} | {{ui:Pilih}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Luas}} ({{key:A}}), {{ui:Bulatan}} ({{key:O}}), {{ui:Lengkok}} ({{key:R}}, suis hidup/mati), {{ui:Tolak}} ({{key:E}}, suis hidup/mati), {{ui:Potongan}} ({{key:X}}), {{ui:Kira}} ({{key:C}}), {{ui:Kiraan auto}} ({{key:S}}) |
| {{ui:Sunting}} | {{ui:Buat asal}} ({{key:Mod+Z}}), {{ui:Buat semula}} ({{key:Mod+Y}}), {{ui:Salin}} ({{key:Mod+C}}), {{ui:Tampal}} ({{key:Mod+V}}), dan {{ui:Lagi}}: {{ui:Potong}}, {{ui:Salin}}, {{ui:Tampal}}, {{ui:Tampal di tempat yang sama}}, {{ui:Pendua}}, {{ui:Padam}}, {{ui:Pilih semua}}, {{ui:Nyahpilih semua}} |
| {{ui:Paparan}} | {{ui:Muat halaman}} ({{key:F}}), {{ui:Muat lebar}} ({{key:W}}) |

Alat yang sedang anda gunakan ditunjukkan ditekan. Butang {{ui:Lengkok}} dan {{ui:Tolak}} kekal ditekan selagi ia hidup.

## Helaian (kiri)

- **Cari helaian** menapis senarai mengikut nama helaian, nama fail atau label halaman.
- Setiap helaian menunjukkan imej kecil (dilukis semasa anda skrol), namanya, dan sama ada skalanya atau **Tiada skala**.
- Di sebelah kanan setiap baris ditunjukkan berapa banyak tanda yang ada pada helaian. Semasa item disorot, ia menunjukkan berapa banyak tanda item itu pada helaian.
- Klik helaian untuk membukanya. {{key:PageDown}} dan {{key:PageUp}} bergerak ke helaian seterusnya dan sebelumnya dalam senarai.
- Apabila pengukuran kuantiti meliputi PDF yang tidak dibuka, nota di bawah senarai menamakannya. Lihat [Simpan dan buka semula pengukuran kuantiti](topic:save-and-reopen).

Nama helaian diambil daripada PDF: label halaman seperti `A-101` menjadi nama helaian. Halaman tanpa label dinamakan mengikut fail dan nombor halamannya, seperti "Plans, page 3". Apabila beberapa PDF terbuka, helaian berlabel juga menunjukkan nama fail.

## Helaian yang dibuka (tengah)

- Bar di bawah helaian menunjukkan nama helaian dan skalanya, atau "Belum ada skala: pilih pratetap atau tentukur". Butangnya: {{ui:MarkupCraft}} (apabila aplikasi itu boleh menerima PDF; lihat [Mula pengukuran kuantiti dan buka set pelan](topic:open-plan-set)), {{ui:Banding}} (versi lama helaian di atas helaian ini: [Bandingkan helaian yang disemak](topic:compare-revisions)), "(n) untuk semak" (tanda yang dibendera, apabila ada) dan {{ui:3D}} ([paparan semakan 3D](topic:check-in-3d)).
- Sebelum sebarang PDF dibuka, bahagian tengah menunjukkan panduan ringkas lima langkah.
- Roda tetikus men-zum pada kedudukan pointer. Seret untuk menggerakkan paparan. Lihat [Papan kekunci dan tetikus](topic:keyboard).
- Semasa anda menggunakan {{ui:Kiraan auto}}, bar dengan kawalannya muncul di bahagian atas helaian.

## Item (kanan)

Di bahagian atas, senarai {{ui:Kawasan tawaran}}: bangunan, tingkat atau fasa tempat tanda baharu dimasukkan ([Kawasan tawaran](topic:bid-areas)).

- {{ui:Item baharu}} membuka borang kecil: nama, jenis ({{ui:Linear (panjang)}}, {{ui:Luas}} atau {{ui:Kira}}) dan {{ui:Tambah}}.
- Senarai menunjukkan warna setiap item, ikon jenisnya, nama dan kuantiti. Klik item untuk melukis dengannya dan menyorot tandanya pada setiap helaian. Klik sekali lagi untuk berhenti menyorot.
- Di bawah senarai, **Item: (nama)** ialah penyunting item: nama, jenis, warna, unit, ketinggian atau kedalaman, pembaziran, kadar bahan dan upah, nilai yang diukur, dan {{ui:Himpunan}}. Lihat [Cipta item pengukuran kuantiti](topic:create-items).
- **Tanda yang dipilih** muncul apabila anda memilih tanda: item yang dimilikinya, helaiannya, ukurannya, dan butang seperti {{ui:Tambah lubang}} dan {{ui:Padam tanda}}. Dengan beberapa tanda dipilih ia menjadi **Tanda yang dipilih**: berapa banyak setiap item, dan {{ui:Salin}}, {{ui:Pendua}}, {{ui:Potong}} dan {{ui:Padam tanda}}.
- Penyunting item diakhiri dengan {{ui:Salin item}} dan {{ui:Pendua item}}: item dengan himpunan dan kosnya, tanpa tanda. Lihat [Salin, tampal dan pendua tanda](topic:copy-paste).

## Kuantiti (bawah)

- {{ui:Mengikut item}} menyenaraikan setiap item dan komponen himpunannya dengan kuantiti, pembaziran, kadar dan kos yang dilanjutkan. Anda boleh menaip pembaziran dan kadar terus dalam jadual.
- {{ui:Mengikut helaian}} menyenaraikan kuantiti setiap item pada setiap helaian.
- Amaran yang bermula dengan **Tidak lengkap:** muncul apabila sesuatu tertinggal daripada jumlah.
- {{ui:Jumlah kerja}} berada di sebelah kanan pengepala.
- Butang anak panah di hujung kanan menyembunyi atau menunjukkan jadual untuk memberi lebih ruang kepada helaian.

Lihat [Baca kuantiti dan anggaran](topic:read-quantities).

## Bar status (bawah)

Dari kiri ke kanan: ukuran langsung semasa anda melukis (panjang, luas, jejari atau hasil semakan), kotak {{ui:Jenis}} semasa anda menaip panjang, mesej daripada TakeoffCraft, peringatan "Shift snaps to 45°" (atau "Snaps to 45°; Shift frees the angle" apabila itu dihidupkan dalam [Tetapan](topic:settings)), butang {{ui:Snap}} (melekap pada garisan lukisan, hidup apabila disorot; {{key:F3}}), dan peratusan zum.

:::tip
Baca bar status apabila sesuatu tidak berlaku. TakeoffCraft menerangkan di situ mengapa ia menolak klik, contohnya "Helaian ini belum ada skala".
:::

## Susun atur lain

Semua yang di atas ialah susun atur {{ui:Klasik CadCraft}}, permulaannya. {{ui:Tetapan}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Susun atur}} menawarkan dua lagi; alat dan kekunci yang sama berfungsi dalam ketiga-tiganya, dan memilih {{ui:Klasik CadCraft}} semula meletakkan setiap kawalan kembali ke tempat asalnya.

| Susun atur | Dalam TakeoffCraft |
|---|---|
| {{ui:Reben dan semak imbas projek}} | {{ui:Reben pengukuran kuantiti}} di bahagian atas ([Menu, kekunci dan tetikus](topic:menus-keys-and-mouse)), bar untuk alat yang berjalan, tab bagi setiap helaian yang dibuka (Model dan susun atur lukisan juga ialah helaian) dengan pratetap skala dan {{ui:Muat halaman}} di bawah helaian. Panel kiri memegang {{ui:Sifat}} (item, nota atau tanda yang dipilih) di atas {{ui:Pelayar pengukuran kuantiti}}: {{ui:Helaian}} (klik satu untuk membukanya dalam tab), {{ui:Keadaan}} (klik satu untuk melukis dengannya) dan {{ui:Anggaran}} (jumlah setiap item dan jumlah kerja); imej kecil ialah tab keduanya. |
| {{ui:Kotak alat dan kotak maklumat}} | Bar alat di atas helaian, kotak maklumat dengan {{ui:Kawasan tawaran}}, alat yang berjalan atau pilihan dan bar helaian, lajur alat pengukuran kuantiti di sebelah kiri, tab bagi setiap helaian, dan {{ui:Snap}} serta zum di bawah helaian. |

Semasa [paparan semakan 3D](topic:check-in-3d) dibuka, tab helaian dan bar di bawah helaian beralih ke tepi; tutup paparan 3D untuk mengukur semula. Pada telefon, susun atur telefon sentiasa berjalan.

## Skrin penuh dan tema

Butang {{ui:Skrin penuh}} dalam bar aplikasi, atau {{key:Ctrl+Shift+F}} (Control pada setiap platform, juga pada Mac), bertukar antara normal, skrin penuh, dan skrin penuh dengan bar disembunyikan. Dengan bar disembunyikan, gerakkan pointer ke tepi atas untuk menunjukkannya semula.

{{ui:Kertas}} ialah tema cerah dan {{ui:Model}} yang gelap. Dalam {{ui:Model}} lukisan ditunjukkan songsang (garisan cerah pada latar gelap) pada skrin sahaja; eksport tidak pernah diubah.
