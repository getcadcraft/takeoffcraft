---
title: Preset skala
summary: Setiap preset dalam daftar Preset (arsitektural, teknik, dan metrik) serta asumsinya tentang PDF.
keywords: skala, preset, skala arsitektural, skala teknik, skala metrik, rasio, 1/4 inci, 1/8 inci, 1:100, ukuran penuh
from: 31ac0000
---

Daftar {{ui:Preset}} di grup {{ui:Skala}} memiliki 32 skala dalam tiga kelompok. Sebuah preset menetapkan skala lembar yang terbuka secara tepat.

Setiap preset berasumsi bahwa halaman PDF berukuran kertas asli gambar: satu inci pada halaman PDF adalah satu inci kertas (halaman PDF berukuran 72 poin per inci). Jika PDF diubah ukurannya, gunakan {{ui:Kalibrasi}}. Gunakan {{ui:Periksa}} setelah mengatur skala apa pun. Lihat [Atur skala](topic:set-the-scale).

## Arsitektural

| Preset | Satu inci kertas adalah |
|---|---|
| `1/16" = 1'-0"` | 16 ft |
| `3/32" = 1'-0"` | 10 ft 8 in |
| `1/8" = 1'-0"` | 8 ft |
| `3/16" = 1'-0"` | 5 ft 4 in |
| `1/4" = 1'-0"` | 4 ft |
| `3/8" = 1'-0"` | 2 ft 8 in |
| `1/2" = 1'-0"` | 2 ft |
| `3/4" = 1'-0"` | 1 ft 4 in |
| `1" = 1'-0"` | 1 ft |
| `1 1/2" = 1'-0"` | 8 in |
| `3" = 1'-0"` | 4 in |

## Teknik

| Preset | Satu inci kertas adalah |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrik

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Rasio metrik berarti satu satuan di kertas sama dengan sekian satuan di dunia nyata: pada `1:100`, 10 mm di halaman adalah 1 m.

## Skala terkalibrasi

Skala terkalibrasi tampil sebagai "Calibrated 1" = 4.002' pada 24'-6"" di bilah di bawah lembar: kaki sebenarnya per inci kertas, dan jarak yang Anda ketik. Jika berada dalam 0.5% dari sebuah preset, bilah menambahkan "(matches 1/4" = 1'-0")" dan daftar lembar menampilkan nama preset tersebut.

## PDF yang tidak biasa

Beberapa PDF menyatakan satuan halaman yang lebih besar (sebuah "user unit"); TakeoffCraft memperhitungkannya untuk preset dan untuk skala yang ditampilkan. Halaman yang diputar di dalam PDF diukur dengan cara yang sama seperti halaman tegak.
