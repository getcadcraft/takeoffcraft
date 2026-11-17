---
title: Ringkasan bidaan dan cadangan
summary: Tambah beban upah, cukai jualan, overhead, keuntungan dan bon pada anggaran, tulis perkara termasuk dan dikecualikan, dan muat turun PDF cadangan untuk dihantar.
keywords: bidaan, beban upah, beban, gaji, cadangan, sebut harga, overhead, keuntungan, markup, margin, cukai jualan, bon, perkara termasuk, perkara dikecualikan, terma, tandatangan, pelanggan, harga
from: 3208a561
---

Anggaran menghargai apa yang anda ukur. **Ringkasan bidaan** menukarnya kepada harga: ia menambah cukai jualan, overhead, keuntungan dan bon, dan membuat **PDF cadangan** dengan perkara termasuk dan dikecualikan anda.

Buka dari {{ui:Export}} › {{ui:Bid summary & proposal…}}. Semua dalam ringkasan disimpan bersama pengukuran kuantiti, dan setiap perubahan boleh dibuat asal.

## Markup

Taip peratus dalam mana-mana lima (biarkan yang lain pada 0). Ia dikira mengikut susunan ini, setiap satu berdasarkan apa yang ada di atasnya:

| Baris | Dikira sebagai |
|---|---|
| Bahan, Upah | Jumlah anggaran (bidaan asas apabila pengukuran kuantiti mempunyai [alternatif](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Beban upah | % Beban × upah: cukai gaji, insurans dan faedah ke atas gaji krew anda. |
| **Kos** | Bahan + upah + beban upah. |
| Cukai jualan ke atas bahan | % Cukai × bahan. |
| Overhead | % Overhead × (kos + cukai). |
| Keuntungan | % Keuntungan × (kos + cukai + overhead). |
| Bon | % Bon × semua yang di atas. |
| **Bidaan** | Hasil tambah baris. |

Setiap baris dibundarkan kepada sen terdekat. Buku kerja menunjukkan baris yang sama di bawah jumlah helaian Anggaran, dengan formula langsung. Ringkasan dikemas kini semasa anda menaip: {{key:Enter}} menerima peratus. Setiap alternatif ditunjukkan dengan markup yang sama pada kosnya sendiri, supaya pemilik nampak apa yang sebenarnya berubah jika alternatif itu diambil.

## Cadangan

Isi apa yang patut dinyatakan oleh cadangan:

- **Project** (nama pengukuran kuantiti apabila kosong), **To** (pelanggan) dan **From** (syarikat anda).
- **Perkara termasuk** dan **Perkara dikecualikan**: satu setiap baris; sengkang atau bullet di depan tidak mengapa.
- **Terma**: teks bebas, seperti "Sah selama 30 hari."
- **Senaraikan item dan kuantiti**: skop, item demi item, dengan kuantiti dan tanpa harga. Nyahtanda untuk cadangan jumlah sekaligus.

Pilih {{ui:Proposal PDF}}. PDF (`<takeoff> - proposal.pdf`) mempunyai tarikh, blok harga dengan setiap markup dan bidaan, alternatif, skop, perkara termasuk dan dikecualikan, terma, dan baris untuk tandatangan dan tarikh. Jika sesetengah kuantiti tidak dapat diukur (helaian tanpa skala), ia menyatakannya di bawah harga.

## Dalam eksport

Apabila pengukuran kuantiti mempunyai ringkasan bidaan, CSV berakhir dengan ia dan buku kerja mendapat helaian **Ringkasan bidaan**, dengan setiap baris, peratusnya dan jumlahnya. Lihat [Eksport anggaran](topic:export-estimate).
