---
title: Fail yang dibuka dan disimpan TakeoffCraft
summary: PDF masuk, fail projek pengukuran kuantiti, hamparan dan PDF ditanda keluar - apa yang dikandungnya, ke mana ia pergi, dan apa yang berubah dalam talian, luar talian dan antara pelayar.
keywords: fail, format, pdf, takeoff.json, fail projek, xlsx, csv, pdf ditanda, muat turun, simpan, buka, luar talian
from: 1bf9be65
---

## Apa yang dibukanya

| Fail | Cara | Nota |
|---|---|---|
| PDF (`.pdf`) | {{ui:Buka pelan}}, {{key:Mod+O}}, atau lepaskan pada halaman | Beberapa sekaligus. Setiap halaman menjadi helaian. |
| Projek pengukuran kuantiti (`.takeoff.json`) | {{ui:Buka takeoff}}, atau lepaskan pada halaman | Item, skala dan tanda anda. Anda boleh melepaskannya bersama PDF-nya. |

Fail lain yang dilepaskan pada halaman akan dilangkau, dan bar status menamakannya.

- **PDF yang dilindungi kata laluan** tidak dibuka: "(name) dilindungi kata laluan. Buka salinan yang tidak dilindungi."
- **PDF yang sama dua kali** dibuka sekali sahaja: "(name) sudah dibuka." TakeoffCraft mengenali fail mengikut kandungannya, bukan namanya.
- **PDF imbasan** dibuka dan diukur sama seperti yang lain; TakeoffCraft tidak memerlukan teks dalam PDF.
- **Set pelan yang besar**: setiap PDF dibaca sepenuhnya apabila dibuka (untuk cap jari), jadi fail yang sangat besar mengambil sedikit masa. Imej kecil dilukis satu demi satu semasa anda skrol.

## Apa yang disimpannya

Setiap simpanan ialah muat turun. Tiada apa-apa ditulis semula ke dalam PDF anda.

| Anda pilih | Anda dapat | Kandungannya |
|---|---|---|
| {{ui:Simpan takeoff}} | `(name).takeoff.json` | Item, himpunan, kadar, skala helaian dan setiap tanda, dikaitkan dengan setiap PDF mengikut kandungannya. Tiada halaman PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Empat hamparan: Anggaran (dengan formula langsung), Mengikut helaian, Tanda, Skala. |
| {{ui:CSV}} | `(name).csv` | Anggaran sebagai nilai biasa, satu baris bagi setiap item dan komponen. |
| {{ui:PDF ditanda}} | `(PDF name) (takeoff).pdf` | Salinan setiap PDF terbuka yang mempunyai tanda, dengan pengukuran kuantiti dilukis pada halamannya dan petunjuk. Satu fail bagi setiap PDF. |

Nama diambil daripada PDF pertama yang anda buka dalam pengukuran kuantiti ini. Belum ada kotak namakan semula: namakan semula fail yang dimuat turun jika anda mahu nama lain.

Lihat [Eksport anggaran dan PDF ditanda](topic:export-estimate) dan [Lajur eksport](topic:export-columns).

## Ke mana muat turun pergi

Pelayar anda menyimpannya di tempat ia menyimpan setiap muat turun, biasanya folder Downloads. Cari di {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}}. Jika pelayar anda ditetapkan untuk bertanya di mana hendak menyimpan setiap fail, ia akan bertanya.

:::chromium
{{ui:PDF ditanda}} dengan beberapa PDF ditanda memuat turun beberapa fail sekaligus. Chrome dan Edge mungkin bertanya sekali sama ada tapak ini dibenarkan memuat turun berbilang fail. Pilih Benarkan.
:::

:::safari
Safari menyimpan ke Downloads melainkan anda menukar lokasi muat turun dalam Tetapan Safari, di bawah Umum.
:::

## Mengapa fail projek dan PDF diasingkan

Fail `.takeoff.json` hanya memegang pengukuran kuantiti anda. Ia mencari semula PDF-nya mengikut kandungannya (cap jari bagi setiap fail), jadi:

- Menamakan semula atau mengalihkan PDF tidak menjadi masalah.
- PDF yang diubah atau disimpan semula oleh program lain dikira sebagai fail yang berbeza, walaupun namanya sama.
- Tanda pada PDF yang tidak dibuka tetap dikira dalam jumlah.

Lihat [Simpan dan buka semula pengukuran kuantiti](topic:save-and-reopen).

## Dalam talian dan luar talian

PDF dan pengukuran kuantiti anda tidak pernah meninggalkan komputer anda, sama ada dalam talian atau luar talian. Sambungan hanya penting untuk memuatkan TakeoffCraft itu sendiri.

Untuk bekerja tanpa sambungan, simpan aplikasi dahulu, semasa anda dalam talian:

1. Pilih {{ui:Simpan untuk luar talian}} pada bar aplikasi di bahagian atas.
   Butang itu mengira naik, "Menyimpan 12 daripada 40", semasa ia menyimpan.
2. Tunggu sehingga {{ui:Sedia untuk luar talian}}.

Menyimpan TakeoffCraft mengekalkan aplikasi, bantuan ini, pembaca PDF, penulis PDF yang digunakan oleh {{ui:PDF ditanda}} dan pekerja kiraan auto dalam pelayar anda, kira-kira 6 MB. Apabila ia berkata {{ui:Sedia untuk luar talian}}, semuanya berfungsi luar talian: membuka PDF, mengukur, {{ui:Kiraan auto}}, {{ui:Simpan takeoff}}, {{ui:XLSX}}, {{ui:CSV}} dan {{ui:PDF ditanda}}.

| Butang berkata | Maksud |
|---|---|
| {{ui:Simpan untuk luar talian}} | Belum disimpan dalam pelayar ini. Pilih untuk menyimpan. |
| Menyimpan (n) daripada (m) | Sedang menyimpan. |
| {{ui:Sedia untuk luar talian}} | Disimpan. Pilih untuk {{ui:Simpan semula (dapatkan versi terkini)}} atau {{ui:Alih keluar salinan luar talian}}. |
| {{ui:Tidak dapat menyimpan}} | Sesetengah fail tidak dimuat turun. Semak sambungan anda dan pilih semula. |
| {{ui:Luar talian tidak tersedia}} | Tetingkap pelayar ini tidak dapat menyimpan salinan luar talian (tetingkap peribadi dan sesetengah komputer terurus menyekatnya). |

Lebih lanjut, termasuk berapa lama salinan yang disimpan kekal dalam setiap pelayar: [Bekerja luar talian](common:offline).

:::offline
Anda berada di luar talian. Jika bar aplikasi menunjukkan {{ui:Sedia untuk luar talian}}, semuanya berfungsi. Jika tidak, bahagian yang TakeoffCraft belum muatkan dalam tab ini (penulis PDF untuk {{ui:PDF ditanda}}, pekerja kiraan auto) tidak dapat dimuatkan sekarang, dan {{ui:PDF ditanda}} berhenti dengan "PDF ditanda tidak dapat ditulis". Pengukuran kuantiti anda selamat dalam kedua-dua keadaan: {{ui:Simpan takeoff}}, {{ui:XLSX}} dan {{ui:CSV}} tidak memerlukan sambungan. Jangan muat semula tab sehingga anda dalam talian semula.
:::

:::online
Anda dalam talian. Sebelum lawatan tapak atau penerbangan, pilih {{ui:Simpan untuk luar talian}} dan tunggu {{ui:Sedia untuk luar talian}}.
:::

## Hamparan

XLSX mengekalkan formula langsung, jadi program hamparan mengira semula anggaran apabila ia membuka fail dan memastikannya betul apabila anda menukar kadar atau pembaziran di situ. Buku kerja telah diperiksa dalam LibreOffice Calc, yang mengira semula setiap jumlah kepada sen yang sama. Ia belum dibuka dalam Excel.

CSV ialah nilai biasa dengan tanda susunan bait, jadi program hamparan membaca aksara seperti m² dengan betul.

## Desktop dan awan

:::desktop
Daripada 0.5, aplikasi desktop ialah CadCraft Studio: TakeoffCraft dan tujuh aplikasi lain dalam satu pemasangan. Tiada pemasang TakeoffCraft yang berasingan.
:::

Simpanan awan belum tersedia. Simpan fail `.takeoff.json` anda bersama PDF kerja itu, dan buat salinan sandarannya seperti fail lain. Lihat [Ke mana fail anda pergi](common:your-files).
