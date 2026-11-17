---
title: Atap dan kemiringan
summary: Berikan kemiringan pada sebuah area untuk mengukur permukaan atap dari denah, dan ukur rake, hip, serta valley sepanjang kemiringannya.
keywords: atap, kemiringan, faktor kemiringan, kenaikan, run, 6:12, rake, hip, valley, pelana, pemasangan atap, squares, luas miring, panjang sebenarnya, luas denah
from: 38225b60
---

Denah atap menampilkan setiap bidang atap secara datar, seperti terlihat dari atas. Atap yang sebenarnya lebih luas: bidang dengan kemiringan 6:12 memiliki permukaan sekitar 12% lebih luas daripada denahnya, dan tepi miringnya lebih panjang daripada yang terlihat. Beri item kemiringannya, dan TakeoffCraft mengukur sepanjang kemiringan tersebut.

## Mengetik kemiringan

Kemiringan adalah kenaikan per 12 satuan horizontal (run), seperti pada simbol kemiringan di denah atap. Ketik sebagai `6:12`, `6/12`, atau cukup `6`; rasio lain juga bisa (`4:10` sama dengan 4.8:12). Sudut bekerja dengan tanda derajat: `26.57°`. Kosong atau `0` berarti datar.

## Luas atap

1. Buat item luas untuk atap, atau buka item yang sudah ada.
2. Di pengaturannya, ketik **Kemiringan** (Pitch), misalnya `6:12`.
3. Garis tepi setiap bidang atap pada denah dengan {{ui:Luas}}, seperti biasa.

Setiap bidang dihitung sebagai luas denahnya dikali faktor kemiringan: √(1 + (kenaikan ÷ 12)²), yaitu 1.118 pada 6:12 dan 1.414 pada 12:12. Pilih sebuah bidang untuk melihat **Luas** (pada kemiringan), **Luas denah**, dan **Faktor kemiringan**.

Untuk bidang dengan kemiringan lain: pilih bidang itu dan ketik **Kemiringan** miliknya di panelnya. Biarkan kosong untuk memakai kemiringan item. Tampilan cek 3D, rakitan (`A` adalah luas miring), biaya, dan ekspor semuanya memakai luas miring. Pengurang luas pada bidang miring, seperti skylight, juga dikurangi pada kemiringan yang sama.

Keliling (`P`) tetap keliling denah. Ukur tritisan, rake, hip, dan valley sebagai lintasan (lihat di bawah).

## Rake, hip, dan valley

1. Buat item linear, misalnya "Tepi rake" atau "Hip".
2. Atur **Tipe miring** ke **Rake** (tepi miring, seperti pada pelana) atau **Hip or valley** (garis tempat dua bidang bertemu), dan ketik **Kemiringan** (Pitch) dari bidang atap.
3. Gambar lintasan pada denah dengan {{ui:Linear}}.

Rake dihitung sebagai panjang denahnya dikali faktor kemiringan. Hip atau valley berjalan dengan sudut 45° melintasi denah di antara dua bidang dengan kemiringan yang sama, sehingga panjang sebenarnya adalah panjang denahnya dikali √(1 + (kenaikan ÷ 12)² ÷ 2): 1.061 pada 6:12 dan 1.225 pada 12:12.

Satu lintasan dapat mencampur keduanya. Pilih lintasan itu: setiap segmen di panelnya memiliki daftar tipe miring — **Milik item** (pengaturan item), **Level**, **Rake**, atau **Hip or valley** — serta panjangnya sepanjang kemiringan. **Kemiringan** lintasan di panel menggantikan kemiringan item untuk semua segmennya. Panel juga menampilkan **Panjang denah**, dan label pada lembar menampilkan panjang sepanjang kemiringan.

Pengurangan tetap berfungsi: segmen yang dikurangkan tidak dihitung apa pun, miring maupun tidak.

:::note
Hip dan valley mengasumsikan kedua bidangnya memiliki kemiringan yang sama. Untuk bidang dengan kemiringan berbeda, ukur hip berdasarkan panjang sebenarnya di tempat lain, atau gambar sebagai rake dengan kemiringan yang setara.
:::
