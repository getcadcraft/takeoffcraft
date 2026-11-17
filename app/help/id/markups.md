---
title: Catatan, awan, dan sorotan
summary: Tandai pertanyaan dan perubahan pada lembar dengan catatan, awan revisi, dan sorotan, lacak setiap item sebagai terbuka, dijawab, atau ditutup, dan kirim dalam PDF bertanda.
keywords: markup, markups, catatan, komentar, pertanyaan, rfi, awan, awan revisi, sorotan, status, terbuka, dijawab, ditutup, tinjauan, daftar markup
from: 2b395c13
---

Markup dipakai untuk hal yang perlu Anda ingat atau tanyakan saat melakukan takeoff: "konfirmasi tipe dasar", awan revisi di sekeliling dinding yang berubah, atau catatan yang disorot pada denah. Markup berada di atas lembar dengan status, dicantumkan di satu tempat, dan tercetak dalam PDF bertanda. Markup **tidak pernah dihitung**: tidak ada kuantitas, tidak ada biaya.

## Tambah satu

Buka {{ui:Markup}} di bilah di atas lembar lalu pilih:

| Markup | Caranya |
|---|---|
| {{ui:Catatan}} | Klik tempat catatan akan diletakkan, ketik catatannya, pilih {{ui:Tambah}}. Catatan tampil sebagai pin bulat dengan baris pertamanya di sampingnya. |
| {{ui:Awan}} | Klik satu sudut, lalu sudut yang berlawanan, dan ketik catatan (atau biarkan kosong). Awan revisi berlekuk-lekuk mengelilingi kotak. |
| {{ui:Sorotan}} | Klik dua sudut: kotak kuning tembus pandang, dengan catatan jika Anda mau. |

{{key:Esc}} setelah sudut pertama membatalkan. Alat tetap aktif untuk berikutnya; {{key:V}} kembali ke {{ui:Pilih}}.

## Status dan penyuntingan

Klik markup dengan {{ui:Pilih}} untuk memilihnya. Panel kanan menampilkan **Markup**: jenis dan lembarnya, **Status**-nya — Terbuka, Dijawab, atau Ditutup — dan teksnya, yang dapat Anda ubah. {{key:Delete}} (atau {{ui:Hapus}}) menghapusnya; {{key:Mod+Z}} mengembalikannya.

Pin catatan berwarna oranye saat terbuka, biru setelah dijawab, dan abu-abu saat ditutup; awan yang ditutup berubah menjadi abu-abu.

## Daftar

**Markup** di panel kanan mencantumkan setiap markup dalam takeoff beserta statusnya, dan menyebutkan berapa yang masih terbuka. Centang **Hanya yang terbuka** untuk melihat apa yang masih perlu diselesaikan. Klik sebuah baris untuk pergi ke lembarnya dan memilihnya.

## Bagikan

- {{ui:PDF bertanda}} menggambarnya pada halaman: sorotan, awan, dan pin, masing-masing dengan kotak yang menunjukkan statusnya dengan huruf kapital (TERBUKA, DIJAWAB, DITUTUP) dan teksnya. Halaman yang hanya memiliki markup tanpa tanda takeoff juga disertakan.
- {{ui:XLSX}} menambahkan lembar kerja **Markup**: lembar, jenis, status, dan teks, satu baris masing-masing.
- Markup disimpan dalam `.takeoff.json` dan dalam [PDF dengan takeoff di dalamnya](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
