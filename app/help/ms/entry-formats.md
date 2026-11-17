---
title: Kemasukan panjang, kadar dan peratus
summary: Apa yang boleh anda taip untuk jarak, ketinggian, kadar wang dan peratusan pembaziran, dengan contoh serta mesej untuk input yang TakeoffCraft tidak dapat baca.
keywords: input, format, kaki inci, pecahan, kaki perpuluhan, metrik, meter, milimeter, kadar, wang, dolar, peratus, pembaziran, menaip
from: 215bbf4d
---

## Panjang

Digunakan oleh **Jarak sebenar** dalam {{ui:Calibrate}}, dan oleh {{ui:Height}} serta {{ui:Depth}} dalam penyunting item.

| Anda taip | Maksudnya |
|---|---|
| `24'-0"` | 24 kaki |
| `24'-6 1/2"` | 24 kaki 6½ inci |
| `12' 6 1/2"` | 12 kaki 6½ inci (ruang digunakan dan bukan sengkang) |
| `12'-6-1/2"` | 12 kaki 6½ inci (sengkang di antara bahagian) |
| `24'` | 24 kaki |
| `30"` | 30 inci |
| `6 1/2"` | 6½ inci |
| `3/4"` | ¾ inci |
| `24 ft 6 in` | 24 kaki 6 inci (juga `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 dalam unit lalai (lihat di bawah) |
| `24.5'` | 24.5 kaki |
| `7.5 m` | 7.5 meter |
| `750 cm` | 750 sentimeter |
| `7500 mm` | 7,500 milimeter |

- Nombor biasa ialah dalam **kaki** untuk penentukuran dan untuk item dalam LF, SF atau SY, dan dalam **meter** untuk item dalam m atau m².
- Tanda petik kerinting dan tanda prima daripada pemproses perkataan (′ ″ ’ ”) berfungsi seperti `'` dan `"`. Dua tanda apostrof `''` dikira sebagai `"`.
- Koma diabaikan: `1,200 mm` ialah 1200 mm.
- Pecahan memerlukan nombor bulat di kedua-dua belah: `6 1/2"` berfungsi, `6.5 1/2"` tidak.
- Jarak sifar dan negatif ditolak.

Mesej:

- "Taip jarak, seperti 24'-0" atau 7.5 m." (medan kosong)
- "Taip jarak yang lebih besar daripada sifar."
- "Gunakan kaki dan inci (24'-6 1/2"), kaki perpuluhan, m, cm atau mm." (unit tidak diketahui)
- "Jarak itu tidak dapat dibaca. Cuba 24'-6 1/2" atau 24.5."

Untuk mengosongkan ketinggian atau kedalaman item, kosongkan medan.

### Pengiraan

Setiap medan panjang, dan kotak taip semasa anda melukis, juga menerima pengiraan dengan `+`, `-`, `*`, `/` dan kurungan:
`4+7/16` (4.4375 dalam unit lalai), `12'6" + 3/4"`, `(24'-0")/3` (8 kaki), `2*450mm`.

- Sengkang yang ditulis dalam panjang tetap sebahagian daripadanya: `24'-6"` ialah 24 kaki 6 inci dan `6-1/2` ialah 6½. Letakkan ruang di sekeliling sengkang untuk menolak: `24' - 6"` ialah 23'-6".
- Nombor biasa mendarab atau membahagi panjang sebagai nombor; apabila ditambah kepada panjang, ia dalam unit lalai.
- `abs`, `round`, `ceil` dan `floor` juga berfungsi. Pengiraan yang tidak dapat dibaca ditolak, dengan menyatakan di mana kesilapannya.

## Cara panjang dipaparkan

Panjang dipaparkan sebagai kaki, inci dan per enam belas: `12'-6 1/2"`, `0'-0 3/4"`. Nilai dibundarkan kepada 1/16 inci terdekat untuk paparan; kuantiti itu sendiri tidak dibundarkan. Nilai perpuluhan dipaparkan dengan dua titik perpuluhan dan pemisah ribuan, seperti `1,234.50 LF`.

## Kadar (bahan dan upah setiap unit)

| Anda taip | Maksudnya |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (sehingga empat titik perpuluhan; lebihannya dibundarkan) |
| (kosong) | $0 |

Mesej: "Taip amaun, seperti 12.50." atau "Amaun itu terlalu besar." Kadar negatif tidak diterima.

Amaun lanjutan (bahan, upah, jumlah) dikira hingga sen: kuantiti dengan pembaziran × kadar, dibundarkan separuh menjauhi sifar, sama seperti `ROUND(x, 2)` dalam hamparan.

## Peratus pembaziran

| Anda taip | Maksudnya |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (kosong) | 0% |

Sehingga dua titik perpuluhan, dari 0% hingga 1000%. Mesej: "Taip peratusan, seperti 10 atau 7.5." atau "Pembaziran melebihi 1000% tidak dibenarkan."

## Nama dan unit

- Nama item dan komponen: sehingga 200 aksara.
- {{ui:Unit}} komponen: sebarang teks sehingga 20 aksara, seperti `EA`, `helaian`, `CY`, `gal`. Ia label sahaja; TakeoffCraft tidak menukarnya.

## Formula

Formula himpunan kos mempunyai peraturan sendiri: lihat [Bahasa formula](topic:formulas).
