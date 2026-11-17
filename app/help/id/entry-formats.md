---
title: Entri panjang, tarif, dan persen
summary: Apa yang bisa Anda ketik untuk jarak, tinggi, tarif uang, dan persentase susut, dengan contoh serta pesan untuk input yang tidak dapat dibaca TakeoffCraft.
keywords: input, format, kaki inci, pecahan, kaki desimal, metrik, meter, milimeter, tarif, uang, dolar, persen, susut, mengetik
from: 215bbf4d
---

## Panjang

Dipakai oleh **Jarak nyata** di {{ui:Kalibrasi}}, serta oleh {{ui:Tinggi}} dan {{ui:Kedalaman}} di editor item.

| Anda ketik | Artinya |
|---|---|
| `24'-0"` | 24 kaki |
| `24'-6 1/2"` | 24 kaki 6½ inci |
| `12' 6 1/2"` | 12 kaki 6½ inci (spasi sebagai ganti tanda hubung) |
| `12'-6-1/2"` | 12 kaki 6½ inci (tanda hubung di antara bagian) |
| `24'` | 24 kaki |
| `30"` | 30 inci |
| `6 1/2"` | 6½ inci |
| `3/4"` | ¾ inci |
| `24 ft 6 in` | 24 kaki 6 inci (juga `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 dalam satuan default (lihat di bawah) |
| `24.5'` | 24.5 kaki |
| `7.5 m` | 7.5 meter |
| `750 cm` | 750 sentimeter |
| `7500 mm` | 7,500 milimeter |

- Angka polos berarti **kaki** untuk kalibrasi dan untuk item dalam LF, SF, atau SY, dan berarti **meter** untuk item dalam m atau m².
- Tanda kutip keriting dan tanda prima dari pengolah kata (′ ″ ’ ”) bekerja seperti `'` dan `"`. Dua tanda apostrof `''` dihitung sebagai `"`.
- Koma diabaikan: `1,200 mm` adalah 1200 mm.
- Pecahan membutuhkan bilangan bulat di kedua sisinya: `6 1/2"` bisa, `6.5 1/2"` tidak.
- Jarak nol dan negatif ditolak.

Pesan:

- "Ketik jarak, seperti 24'-0" atau 7.5 m." (kolom kosong)
- "Ketik jarak yang lebih besar dari nol."
- "Gunakan kaki dan inci (24'-6 1/2"), kaki desimal, m, cm, atau mm." (satuan tidak dikenal)
- "Jarak itu tidak dapat dibaca. Coba 24'-6 1/2" atau 24.5."

Untuk menghapus tinggi atau kedalaman item, kosongkan kolomnya.

### Aritmetika

Setiap kolom panjang, dan kotak ketik saat Anda menggambar, juga menerima perhitungan dengan `+`, `-`, `*`, `/`, dan tanda kurung:
`4+7/16` (4.4375 dalam satuan default), `12'6" + 3/4"`, `(24'-0")/3` (8 kaki), `2*450mm`.

- Tanda hubung yang ditulis dalam panjang tetap menjadi bagian darinya: `24'-6"` adalah 24 kaki 6 inci dan `6-1/2` adalah 6½. Beri spasi di sekitar tanda hubung untuk mengurangi: `24' - 6"` adalah 23'-6".
- Angka polos mengalikan atau membagi panjang sebagai angka; jika ditambahkan ke panjang, angka itu dalam satuan default.
- `abs`, `round`, `ceil`, dan `floor` juga berfungsi. Perhitungan yang tidak dapat dibaca ditolak dengan keterangan di bagian mana salahnya.

## Cara panjang ditampilkan

Panjang ditampilkan sebagai kaki, inci, dan pecahan 1/16: `12'-6 1/2"`, `0'-0 3/4"`. Nilai dibulatkan ke 1/16 inci terdekat untuk tampilan; kuantitasnya sendiri tidak dibulatkan. Nilai desimal ditampilkan dengan dua desimal dan pemisah ribuan, seperti `1,234.50 LF`.

## Tarif (material dan upah per satuan)

| Anda ketik | Artinya |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (hingga empat desimal; lebih banyak dibulatkan) |
| (kosong) | $0 |

Pesan: "Ketik jumlah seperti 12.50." atau "Jumlah itu terlalu besar." Tarif negatif tidak diterima.

Jumlah yang diperluas (material, upah, total) dihitung sampai sen: kuantitas dengan susut × tarif, dibulatkan setengah menjauhi nol, persis seperti `ROUND(x, 2)` pada spreadsheet.

## Persen susut

| Anda ketik | Artinya |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (kosong) | 0% |

Hingga dua desimal, dari 0% hingga 1000%. Pesan: "Ketik persentase seperti 10 atau 7.5." atau "Susut di atas 1000% tidak diizinkan."

## Nama dan satuan

- Nama item dan komponen: hingga 200 karakter.
- {{ui:Satuan}} komponen: teks apa pun hingga 20 karakter, seperti `EA`, `sheets`, `CY`, `gal`. Ini hanya label; TakeoffCraft tidak mengonversinya.

## Rumus

Rumus assembly punya aturannya sendiri: lihat [Bahasa rumus](topic:formulas).
