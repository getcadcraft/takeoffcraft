---
title: Bermula dengan TakeoffCraft
summary: Apa yang dilakukan TakeoffCraft, di mana ia berjalan, dan item pertama anda yang diukur dan dinilai daripada set pelan PDF.
keywords: mula, pengukuran kuantiti pertama, mula pantas, pengenalan, anggaran, pengukuran kuantiti, set pelan, pdf
from: 3b9da1fb
---

TakeoffCraft mengukur set pelan, PDF dan lukisan DWG atau DXF, dan menukar ukuran kepada anggaran berharga. Anda buka fail (lukisan dikira terus daripada bloknya: lihat [Buka lukisan DWG atau DXF](topic:open-a-drawing)), beri setiap helaian skala (lukisan membawa skalanya sendiri), buat **item** (jenis dinding, kemasan lantai, kelengkapan), dan klik pada helaian untuk mengambil ukuran. Kuantiti, kos dan jumlah kerja dikemas kini semasa anda bekerja. Anda boleh mengeksport anggaran sebagai hamparan dan salinan PDF dengan pengukuran kuantiti anda dilukis di dalamnya.

Jika anda pernah membuat pengukuran kuantiti dalam program lain, baca [Daripada perisian pengukuran kuantiti lain](topic:coming-from) seterusnya. Sesetengah perkara berfungsi berbeza di sini.

## Di mana ia berjalan

TakeoffCraft berjalan dalam pelayar web anda. Buka TakeoffCraft dan skrin sedia serta-merta; tiada apa-apa untuk dipasang.

- **PDF anda kekal di komputer anda.** Ia dibuka oleh pelayar dan tidak pernah dimuat naik. Menyimpan ialah muat turun.
- Ia berfungsi dalam Chrome, Edge, Firefox dan Safari semasa. Lihat [Pelayar dan komputer](common:browsers).
- Ia berfungsi tanpa sambungan internet sebaik sahaja anda pilih {{ui:Simpan untuk luar talian}} pada bar aplikasi dan ia berkata {{ui:Sedia untuk luar talian}}. Lihat [Bekerja luar talian](common:offline).
- Simpanan awan belum tersedia. Untuk aplikasi desktop, TakeoffCraft datang dalam CadCraft Studio, bersama tujuh aplikasi lain.

## Pengukuran kuantiti pertama anda dalam sepuluh langkah

Panduan ini mengukur satu jenis dinding dan menilainya. Ia mengambil masa beberapa minit pada mana-mana pelan yang anda ada.

1. Pilih {{ui:Buka pelan}} dalam kumpulan {{ui:Fail}} bar alat (atau tekan {{key:Mod+O}}), pilih satu atau lebih PDF, dan pilih Terbuka. Anda juga boleh melepaskan PDF di mana-mana sahaja pada halaman.
   Helaian muncul di sebelah kiri dan helaian pertama dibuka di tengah.
2. Cari skala bercetak helaian dalam blok tajuknya atau di bawah tajuk lukisan.
3. Buka senarai {{ui:Pratetap}} dalam kumpulan {{ui:Skala}} dan pilih skala itu, contohnya `1/4" = 1'-0"`.
   Bar di bahagian bawah helaian kini berbunyi "Skala 1/4" = 1'-0"".
4. Pilih {{ui:Semak}} (atau tekan {{key:D}}) dan klik dua hujung dimensi yang dicetak pada lukisan.
   Bacaan dalam bar status di bahagian bawah kiri sepatutnya sepadan dengan dimensi yang dicetak. Jika tidak, lihat [Tetapkan skala](topic:set-the-scale).
5. Dalam panel {{ui:Item}} di sebelah kanan, pilih {{ui:Item baharu}}, taip nama seperti `Interior wall type A`, biarkan jenis pada {{ui:Linear (panjang)}}, dan pilih {{ui:Tambah}}.
6. Pilih {{ui:Linear}} dalam bar alat (atau tekan {{key:L}}).
7. Klik pada permulaan dinding, kemudian setiap penjuru di sepanjangnya. Klik dua kali, tekan {{key:Enter}} atau klik kanan untuk menamatkan larian.
   Larian dilukis dalam warna item dan panjangnya muncul di sebelah item.
8. Dalam penyunting item di bawah {{ui:Item}}, taip `9'-0"` dalam {{ui:Ketinggian}}, `0.85` dalam {{ui:Bahan $/LF}} dan `1.20` dalam {{ui:Upah $/LF}}.
   Jadual {{ui:Kuantiti}} di bahagian bawah menunjukkan panjang, bahan dan upah yang dilanjutkan, serta {{ui:Jumlah kerja}}.
9. Pilih {{ui:Simpan takeoff}} (atau tekan {{key:Mod+S}}).
   Pelayar anda memuat turun fail `.takeoff.json`. Ia memegang item, skala dan tanda anda, dan dibuka semula di atas PDF yang sama.
10. Buka menu {{ui:Eksport}} dalam bar alat dan pilih {{ui:XLSX}} untuk memuat turun anggaran sebagai hamparan.

:::tip
Tekan {{key:Esc}} untuk berhenti daripada apa jua yang anda lakukan dan kembali ke alat {{ui:Pilih}}. {{key:Mod+Z}} membatalkan sebarang perubahan.
:::

## Apa yang perlu dibaca seterusnya

- [Skrin TakeoffCraft](topic:workspace) menamakan setiap bahagian tetingkap.
- [Mula pengukuran kuantiti dan buka set pelan](topic:open-plan-set) meliputi beberapa PDF dan senarai helaian.
- [Cipta item pengukuran kuantiti](topic:create-items) menerangkan jenis, unit, pembaziran dan kadar.
- [Himpunan dan formula](topic:assemblies) menukar satu ukuran kepada rangka, lembaran papan dan lain-lain.
- [Papan kekunci dan tetikus](topic:keyboard) menyenaraikan setiap kekunci.
