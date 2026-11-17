---
title: Baca kuantiti dan anggaran
summary: Guna jadual Kuantiti mengikut item dan mengikut helaian, jumlah kerja, penyerlahan dan amaran Tidak lengkap.
keywords: kuantiti, jumlah, mengikut item, mengikut helaian, jumlah kerja, anggaran, ringkasan, laporan, serlahan, tidak lengkap, kos
from: 069d41f1
---

Jadual {{ui:Kuantiti}} di bahagian bawah tetingkap ialah anggaran langsung anda. Ia berubah sebaik sahaja anda melukis, memadam, menskala semula atau mengedit kadar. Kuantiti tidak pernah disimpan; ia diukur semula daripada penanda setiap kali, jadi ia tidak boleh ketinggalan zaman.

## Mengikut item

Pilih {{ui:Mengikut item}} (lalai). Setiap item mempunyai satu baris, dan setiap komponen himpunannya mempunyai baris di bawahnya.

| Lajur | Maksud |
|---|---|
| Item | Nama, dengan warna item. "+(n) tanpa skala" bermaksud sebahagian penanda berada pada helaian tanpa skala. |
| Kuantiti | Jumlah yang diukur dalam unit item (komponen: hasil formula). |
| Unit | LF, m, SF, SY, m², EA, atau unit komponen. |
| Pembaziran % | Ditaip di sini atau dalam penyunting item. |
| Dengan pembaziran | Kuantiti × (1 + pembaziran). |
| Bahan/unit, Upah/unit | Kadar; anda boleh menaipnya di sini. |
| Bahan, Upah | Dengan pembaziran × kadar, dibundarkan kepada sen. |
| Jumlah | Bahan + upah. |

Baris terakhir, **Jumlah kerja**, menambah lajur bahan, upah dan jumlah. Jumlah yang sama dipaparkan di sebelah kanan pengepala jadual.

Taip dalam sel pembaziran atau kadar dan tekan {{key:Enter}} atau klik di luar untuk menggunakannya. Nilai yang TakeoffCraft tidak dapat baca digarisi merah dan bar status menyatakan sebabnya, contohnya "Taip amaun seperti 12.50."

Klik baris item untuk menyerlahkan penandanya pada setiap helaian dan melompat ke helaian yang mempunyainya (sama seperti mengkliknya di bawah {{ui:Item}}).

## Mengikut helaian

Pilih {{ui:Mengikut helaian}} untuk melihat kuantiti setiap item pada setiap helaian, beserta bilangan penanda. Klik baris untuk membuka helaian itu dengan item diserlahkan. Gunakannya untuk memastikan setiap helaian telah diukur, atau untuk membahagikan kuantiti mengikut tingkat atau kawasan kerja.

## Mengikut kawasan

Apabila pengukuran kuantiti mempunyai kawasan bidaan, {{ui:Mengikut kawasan}} menyenaraikan item setiap kawasan dan subjumlah. Lihat [Kawasan bidaan](topic:bid-areas).

## Amaran Tidak lengkap

Apabila sesuatu ditinggalkan daripada jumlah, pengepala memaparkan amaran, contohnya:

"Tidak lengkap: 1 ralat formula, 6 penanda pada helaian tanpa skala (tidak termasuk dalam jumlah)"

- **Ralat formula**: formula bagi komponen himpunan tidak dapat dikira. Barisnya berbunyi "Ralat formula: …". Lihat [Himpunan dan formula](topic:assemblies#when-a-formula-is-wrong).
- **Penanda pada helaian tanpa skala**: berikan helaian tersebut skala. Lihat [Tetapkan skala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Nota yang sama dimasukkan ke dalam hamparan yang dieksport, supaya anggaran yang tidak lengkap tidak pernah kelihatan lengkap.

## Serlahkan item

Klik item di bawah {{ui:Item}} atau dalam jadual. Penandanya kekal jelas pada setiap helaian dan yang lain pudar. Senarai helaian memaparkan "(n) diserlahkan" pada setiap helaian yang mempunyai penandanya. Klik item sekali lagi untuk berhenti menyerlahkan.

## Jumlah item dalam panel sisi

Setiap item dalam senarai {{ui:Item}} turut memaparkan kuantitinya. Blok **Diukur** dalam penyunting item menunjukkan nilai yang digunakan oleh formulanya: panjang, larian dan luas dinding; luas, perimeter dan bilangan kawasan; atau bilangan.

## Penanda pada PDF yang tidak dibuka

Pengukuran kuantiti boleh mengandungi penanda pada PDF yang belum anda buka kali ini. Penanda tersebut tetap dikira dalam setiap jumlah; senarai helaian menamakan PDF tersebut. Lihat [Simpan dan buka semula pengukuran kuantiti](topic:save-and-reopen).

## Lebih ruang

Butang anak panah di sebelah kanan pengepala {{ui:Kuantiti}} menyembunyikan jadual supaya helaian mendapat lebih ruang. Pilih sekali lagi untuk memaparkan jadual semula.
