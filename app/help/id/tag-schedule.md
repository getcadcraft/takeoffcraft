---
title: Impor jadwal tag sebagai kuantitas
summary: Jadwal tag yang diekspor dari model bangunan (CSV) menjadi kuantitas bertipe di takeoff, satu per tag, sehingga hitungan dan luas dari model berada di samping apa yang Anda ukur.
keywords: tag, jadwal tag, model bangunan, bimcraft, ifc, kuantitas, csv, jadwal, impor, kuantitas bertipe
from: a60c19b6
---

{{ui:Tag}} di bilah alat mengimpor jadwal tag yang disimpan BimCraft sebagai file CSV. Setiap tag yang berbeda menjadi kuantitas bertipe, jenis yang sama dengan galian dan timbunan CivilCraft.

1. Di BimCraft, buat jadwal tag yang Anda inginkan dan simpan sebagai CSV.
2. Pilih {{ui:Tag}} dan pilih file-nya.
3. Tentukan kolom mana yang menamai baris ({{ui:Namai baris dengan}}, biasanya tag) dan mana yang berisi angka ({{ui:Kuantitas dari}}). Dengan {{ui:Hitung barisnya}}, setiap baris dihitung sebagai satu.
4. Pilih satuan. Panjang dalam milimeter menjadi meter dengan {{ui:Kalikan dengan}} 0.001.
5. {{ui:Tambahkan kuantitas}}.

Baris dengan tag yang sama dijumlahkan. Sel yang bukan angka dibiarkan dan dihitung dalam ringkasan. Mengimpor jadwal yang sama lagi memperbarui kuantitas yang sudah Anda miliki, alih-alih menambah lagi; nama, harga satuan, dan susutnya tetap menjadi milik Anda.

## Yang perlu diketahui

Kuantitas bertipe tidak diukur di lembar, jadi tidak memiliki tanda. Tidak ada yang dikirim ke mana pun; file dibaca di sini.
