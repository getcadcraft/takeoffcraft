---
title: Ringkasan penawaran dan proposal
summary: Tambahkan beban upah, pajak penjualan, overhead, laba, dan jaminan ke estimasi, tuliskan inklusi dan eksklusi, dan unduh PDF proposal untuk dikirim.
keywords: penawaran, beban upah, beban, penggajian, proposal, kutipan, overhead, laba, markup, margin, pajak penjualan, jaminan, inklusi, eksklusi, syarat, tanda tangan, klien, harga
from: 3208a561
---

Estimasi menghargai apa yang Anda hitung volumenya. **Ringkasan penawaran** mengubahnya menjadi harga: ia menambahkan pajak penjualan, overhead, laba, dan jaminan, serta membuat **PDF proposal** dengan inklusi dan eksklusi Anda.

Buka dari {{ui:Ekspor}} › {{ui:Ringkasan penawaran & proposal…}}. Semuanya disimpan bersama perhitungan volume, dan setiap perubahan dapat dibatalkan.

## Markup

Ketik persen di salah satu dari lima (biarkan yang lain di 0). Markup dihitung dengan urutan ini, masing-masing pada apa yang ada di atasnya:

| Baris | Dihitung sebagai |
|---|---|
| Material, Upah | Total estimasi (penawaran dasar jika perhitungan volume memiliki [alternatif](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Beban upah | Persen beban × upah: pajak penggajian, asuransi, dan tunjangan atas upah kru Anda. |
| **Biaya** | Material + upah + beban upah. |
| Pajak penjualan atas material | Persen pajak × material. |
| Overhead | Persen overhead × (biaya + pajak). |
| Laba | Persen laba × (biaya + pajak + overhead). |
| Jaminan | Persen jaminan × semua yang ada di atasnya. |
| **Penawaran** | Jumlah dari baris-baris di atas. |

Setiap baris dibulatkan ke sen. Buku kerja menampilkan baris yang sama di bawah total lembar Estimasi, dengan rumus langsung. Ringkasan diperbarui saat Anda mengetik: {{key:Enter}} menerapkan persen. Setiap alternatif ditampilkan dengan markup yang sama atas biayanya sendiri, sehingga pemilik melihat apa yang sebenarnya berubah jika alternatif itu diambil.

## Proposal

Isi apa yang harus dinyatakan proposal:

- **Proyek** (nama perhitungan volume jika kosong), **Kepada** (klien), dan **Dari** (perusahaan Anda).
- **Inklusi** dan **Eksklusi**: satu per baris; tanda hubung atau butir di depan tidak masalah.
- **Syarat**: teks bebas, seperti "Berlaku 30 hari."
- **Daftar item dan kuantitas**: lingkup, item demi item, dengan kuantitas tanpa harga. Hapus centangnya untuk proposal borongan.

Pilih {{ui:PDF proposal}}. PDF (`<takeoff> - proposal.pdf`) memuat tanggal, blok harga dengan setiap markup dan penawaran, alternatif, lingkup, inklusi dan eksklusi, syarat, serta baris untuk tanda tangan dan tanggal. Jika beberapa kuantitas tidak dapat diukur (lembar tanpa skala), PDF menyatakannya di bawah harga.

## Dalam ekspor

Setelah perhitungan volume memiliki ringkasan penawaran, CSV diakhiri dengan itu, dan buku kerja mendapat lembar **Ringkasan penawaran** dengan setiap baris, persennya, dan jumlahnya. Lihat [Ekspor estimasi](topic:export-estimate).
