---
title: Pengaturan TakeoffCraft
summary: Tampilkan inci hingga 1/16, 1/8, atau 1/4, mulai item baru dengan persentase susut, pilih tempat penggeser Hitung otomatis dimulai, snap ke garis gambar atau ke 45° tanpa menahan Shift, atur lebar pintu yang ditutup Isi ruang, serta pilih indikator sudut tampilan 3D.
keywords: pengaturan, preferensi, opsi, presisi, pecahan, inci, pembulatan, susut, susut awal, hitung otomatis, ambang, kecocokan, penggeser, snap, 45, sudut, shift, kubus tampilan, ikon sumbu, indikator sudut, 3d
from: bca3f0ed
---

Buka {{ui:Pengaturan}} dengan ikon roda gigi di bilah aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:TakeoffCraft}}, berisi pengaturan milik aplikasi ini; {{ui:Umum}} berisi pengaturan yang dipakai bersama oleh setiap aplikasi CadCraft (tema, panel, bilah alat). Pengaturan TakeoffCraft hanya ada di aplikasi ini: Anda mengubahnya di sini, dan browser ini mengingatnya. {{ui:Atur ulang pengaturan TakeoffCraft}} mengembalikannya ke awal.

## Kaki dan inci

Tampilkan panjang hingga **1/16"** terdekat (awal), **1/8"**, atau **1/4"**. Ini mengubah cara panjang terbaca di lembar, di panel, di kuantitas, dan di bilah status.

Hanya tampilannya yang dibulatkan. Kuantitas, biaya, dan ekspor dihitung dari panjang yang tepat, dan ekspor selalu menampilkan 1/16".

## Susut awal

Persentase susut yang dimiliki setiap item baru sejak awal: 0% (awal), 2%, 3%, 5%, 7.5%, 10%, 15%, atau 20%. Anda tetap dapat mengetik susut lain untuk setiap item, di editor item atau langsung di tabel kuantitas. Item yang sudah ada tetap memakai susutnya sendiri.

## Hitung otomatis: di mana penggeser kecocokan dimulai

Posisi penggeser {{ui:Kecocokan}} saat pencarian [Hitung otomatis](topic:auto-count) selesai, dari 50% hingga 95%; 75% adalah awalnya. Nilai yang lebih rendah menawarkan lebih banyak kemiripan untuk Anda tolak; nilai yang lebih tinggi menawarkan lebih sedikit. Anda tetap dapat menggeser penggeser selama setiap peninjauan.

## Snap ke garis gambar itu sendiri

Aktif sejak awal. Saat Anda mengukur atau mengkalibrasi, titik yang dekat dengan garis PDF akan melompat ke ujungnya, titik tengahnya, perpotongannya, atau titik terdekat pada garis itu. {{key:F3}} dan {{ui:Snap}} di bilah status juga menyalakan dan mematikannya. Selengkapnya: [Snap ke garis gambar](topic:snap-to-the-drawing).

## Isi ruang: seberapa lebar bukaan yang ditutupnya

{{ui:Isi ruang menutup bukaan sampai}} mengatur seberapa lebar bukaan pintu atau celah yang dianggap tertutup oleh alat {{ui:Ruang}}: 3'-0" hingga 8'-0", 4'-0" pada awalnya. Jika lebih lebar daripada pintu terlebar Anda, ruang akan meluas ke ruang sebelahnya; jika lebih sempit daripada pintu, ruang tetap terbuka. Lihat [Isi ruang dengan satu klik](topic:measure-areas#fill-a-room-with-one-click).

## Snap ke 45° tanpa menahan Shift

Mati sejak awal. Saat aktif, garis, batas area, lubang potong, dan sudut yang diseret akan mengikuti 0°, 45°, 90°, atau 135° dari titik terakhir tanpa menahan {{key:Shift}}; tahan {{key:Shift}} untuk mengklik di sudut mana pun. Bilah status kemudian menampilkan "Snaps to 45°; Shift frees the angle". Titik yang Anda klik pada lengkung busur dan lingkaran tidak pernah di-snap; ujung busur tetap di-snap.

## Ukuran penanda hitung

Seberapa besar titik hitung: {{ui:Sangat kecil}}, {{ui:Kecil}}, {{ui:Sedang}} (awal: ukuran yang selalu dimiliki titik-titik itu), atau {{ui:Besar}}. Ukurannya tetap di layar pada setiap zoom, dan PDF bertanda menggambar setiap titik dengan ukuran yang sama di kertas, berapa pun ukuran lembarnya, sehingga PDF pada 100% tampak seperti di layar. Selengkapnya: [Hitung dengan tangan](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indikator sudut

Khusus untuk [tampilan cek 3D](topic:check-in-3d): {{ui:Kubus tampilan}} (awal: kubus di kanan atas untuk diklik, diseret, dan diputar), {{ui:Ikon sumbu}} (penanda kecil X, Y, Z di kanan bawah), atau {{ui:Tidak ada}}. Perubahannya langsung berlaku dan disimpan di browser ini. Lembar datar tidak pernah menampilkan indikator.

## Alat jalur: celah terbesar yang digabungkan

{{ui:Alat jalur: celah terbesar untuk digabung}} adalah seberapa jauh dua ujung garis boleh berjarak dan tetap dihitung sebagai satu jalur, dalam poin PDF (0.05 hingga 60; 1.5 pada awalnya). Garis gambar sering berhenti sedikit sebelum saling bertemu. Nilai yang lebih besar menggabungkan lebih banyak; nilai yang lebih kecil menjaga garis tetap terpisah. {{key:[}} dan {{key:]}} mengubahnya saat Anda memilih, dan kolom ini ikut berubah. Lihat [Pilih garis](topic:pick-the-lines).
