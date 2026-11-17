---
title: Eksport anggaran kos dan PDF ditanda
summary: Muat turun anggaran kos sebagai buku kerja XLSX dengan formula langsung atau sebagai CSV, dan salinan PDF anda dengan takeoff dilukis padanya.
keywords: cadangan, ringkasan bidaan, eksport, xlsx, hamparan, buku kerja, csv, pdf ditanda, cetak takeoff, laporan, kongsi, hantar, legenda
from: 334f89c7
---

Eksport ialah muat turun. Ia dibuat pada komputer anda daripada takeoff dan PDF yang dibuka; tiada apa-apa dihantar ke mana-mana.

## Anggaran kos sebagai hamparan (XLSX)

1. Buka menu {{ui:Export}} pada bar alat dan pilih {{ui:XLSX}}.
   Pelayar anda memuat turun `(name).xlsx`. Bar status menyatakan "Dieksport (name).xlsx (anggaran kos dengan formula langsung, mengikut helaian, tanda, skala)." dan menambah amaran apabila anggaran tidak lengkap.
2. Buka fail itu dalam program hamparan anda.

Buku kerja mempunyai empat hamparan, dan laporan di bawah apabila berkenaan:

| Hamparan | Kandungannya |
|---|---|
| Anggaran kos | Satu baris bagi setiap item dan setiap komponen: kuantiti, pembaziran, kuantiti dengan pembaziran, kadar, bahan, upah, jumlah dan nota. Jumlah kerja di bahagian bawah. |
| Mengikut helaian | Kuantiti setiap item pada setiap helaian, dengan bilangan tanda. |
| Tanda | Setiap tanda: helaian, item, jenis, kuantiti dan butiran (panjang segmen, luas kasar dan lubang, perimeter). |
| Skala | Setiap helaian yang mempunyai skala atau tanda: skalanya, cara ia ditetapkan (pratetap, atau ditentukur pada jarak yang mana) dan kaki setiap unit PDF. |
| Ringkasan takeoff | Kuantiti setiap item, nombor CSI, tanda dan helaian, tanpa harga. |
| Senarai bahan | Setiap bahagian himpunan kos dijumlahkan merentas takeoff (bahagian yang sama digunakan oleh beberapa item menjadi satu baris), dengan pembaziran dan kos bahan, serta item yang menggunakannya. |
| Permintaan sebut harga | Senarai bahan untuk dihantar kepada pembekal: kuantiti dengan pembaziran, lajur harga seunit kosong, dan lanjutan serta jumlah yang terisi apabila harga ditaip. |
| Mengikut bahagian | Bahan, upah dan jumlah mengikut bahagian CSI MasterFormat, apabila item mempunyai {{ui:CSI number}}. |

Dengan [ringkasan bidaan](topic:bid-summary), hamparan Anggaran kos juga berakhir dengan markupnya (beban upah, cukai jualan, overhed, untung, bon dan bidaan), sebagai formula langsung.

Hamparan Anggaran kos mengekalkan **formula langsung**: kuantiti dengan pembaziran, amaun bahan dan upah yang dibundarkan, jumlah setiap baris dan jumlah kerja. Program hamparan mengira semula, jadi anda boleh menukar kadar atau pembaziran dalam hamparan dan jumlahnya akan mengikut. Nombor yang dikira TakeoffCraft juga disimpan dalam sel, dan sepadan hingga sen.

Lajur nota menyenaraikan formula setiap komponen, ralat formula, tanda pada helaian tanpa skala, luas dinding dan perimeter. Apabila ada yang ditinggalkan, baris jumlah kerja menyatakan "Tidak lengkap: lihat nota di atas".

Buku kerja telah disemak dalam LibreOffice Calc, yang mengira semula kepada jumlah yang sama. Ia belum dibuka dalam Excel. Butiran lajur demi lajur ada dalam [Lajur eksport](topic:export-columns).

## Anggaran kos sebagai CSV

Buka menu {{ui:Export}} dan pilih {{ui:CSV}}. Anda akan mendapat `(name).csv`: baris dan lajur yang sama seperti hamparan Anggaran kos, sebagai nilai biasa (tanpa formula), serta jumlah kerja. Gunakannya untuk tampal ke dalam sistem anggaran atau perakaunan lain.

CSV hanya mengandungi anggaran; untuk kuantiti mengikut helaian dan senarai tanda, gunakan XLSX. {{ui:Material list}} dalam menu yang sama menyimpan senarai bahan sahaja sebagai CSV, untuk pesanan.

## Anggaran kos dalam Google Sheets

Di atas jadual Kuantiti, **Salin untuk Google Sheets** meletakkan anggaran pada papan keratan anda sebagai teks dipisahkan tab, dengan baris yang sama seperti CSV. Dalam Google Sheet, klik sel A1 dan tampal. TakeoffCraft tidak log masuk ke Google dan tidak menghantar apa-apa ke sana.

## Kadar yang hilang dan pengesahan

Baris yang mempunyai kuantiti tetapi tiada kadar menyatakan **Tiada kadar** dalam Notanya, dan eksport mengira mereka dalam jumlah. Apabila anggaran telah disahkan, eksport menamakan siapa yang mengesahkannya, bila dan untuk jumlah apa. Lihat [Kadar yang hilang dan mengesahkan anggaran](topic:sign-off-the-estimate).

## PDF ditanda

1. Buka PDF yang tandanya mahu dilukis.
2. Buka menu {{ui:Export}} dan pilih {{ui:Marked PDF}}.
   "Menulis PDF ditanda…" dipaparkan, kemudian pelayar anda memuat turun satu fail bagi setiap PDF ditanda, dinamakan `(PDF name) (takeoff).pdf`.

Dalam salinan itu:

- larian dilukis sebagai garisan dalam warna itemnya,
- luas diisi ringan dengan garis luar pepejal, dan lubang dibiarkan terbuka,
- kiraan ialah titik,
- setiap halaman yang mempunyai tanda mendapat legenda kecil di sudut kiri bawahnya: warna, nama dan kuantiti setiap item pada halaman itu.

PDF asal anda tidak diubah.

Nota:

- Hanya PDF yang dibuka ditulis. Tanda pada PDF yang tidak dibuka kekal dalam jumlah tetapi tidak dilukis; buka PDF itu dahulu.
- Nama dalam legenda menggunakan fon PDF standard. Huruf yang tidak dapat dipaparkan dicetak sebagai "?".
- PDF yang disulitkan tidak dapat disalin dengan tanda: "PDF ini dilindungi kata laluan atau disulitkan, jadi salinan ditanda tidak dapat ditulis. Takeoff itu sendiri tidak terjejas; eksport hamparan sebagai ganti."
- {{ui:Marked PDF}} pertama dalam tab memuatkan penulis PDF. Di luar talian, ia hanya ada jika bar aplikasi menunjukkan {{ui:Offline ready}}; lihat [Bekerja luar talian](common:offline).

:::chromium
Dengan beberapa PDF ditanda, Chrome dan Edge mungkin bertanya sekali sama ada laman ini dibenarkan memuat turun beberapa fail. Pilih Allow, atau anda hanya mendapat fail pertama.
:::

## Tiada apa untuk dieksport?

- {{ui:XLSX}} dan {{ui:CSV}} memerlukan sekurang-kurangnya satu item: "Tiada apa untuk dieksport lagi: buat item dan ukurnya."
- {{ui:Marked PDF}} memerlukan tanda pada PDF yang dibuka: "Belum ada tanda pada PDF yang dibuka."

## Simpan takeoff juga

Eksport ialah laporan. Untuk terus bekerja pada takeoff kemudian, pilih juga {{ui:Save takeoff}}: lihat [Simpan dan buka semula takeoff](topic:save-and-reopen).

Untuk menambah overhed, untung, cukai dan bon serta menghantar cadangan, lihat [Ringkasan bidaan dan cadangan](topic:bid-summary).
