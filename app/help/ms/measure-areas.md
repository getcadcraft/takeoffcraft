---
title: Ukur luas dengan potongan
summary: Lakar lantai, siling dan papak, potong lubang daripadanya, tambah tepi melengkung, bulatan dan potongan bulat, dan baca luas dan perimeter.
keywords: isi bilik, isi banjir, baldi cat, klik dalam bilik, luas auto, back-out, backout, tiang, aci, tolak daripada beberapa item, luas, poligon, garis luar, kaki persegi, sf, potongan, lubang, tolak, bulatan, bulat, lengkok, perimeter, lantai, siling, papak
from: 34648db7
---

Item luas mengukur luas yang tertutup. Setiap garis luar boleh mempunyai lubang yang dipotong daripadanya (aci, tiang, pasu), dan tepinya boleh lurus atau melengkung.

Sebelum anda mula: lembaran memerlukan skala ([Tetapkan skala](topic:set-the-scale)) dan anda memerlukan item luas ([Cipta item takeoff](topic:create-items)).

## Lakar satu kawasan

1. Klik item luas di bawah {{ui:Item}}.
2. Pilih {{ui:Luas}} pada bar alat, atau tekan {{key:A}}.
3. Klik setiap sudut bilik atau papak secara bergilir. Tahan {{key:Shift}} untuk tepi 0°, 45° dan 90°.
   Dari titik ketiga, garis luar mula diisi dan bar status memaparkan "Luas" dan "perimeter". Satu gelang kecil muncul di sekeliling titik pertama.
4. Tutup garis luar: klik titik pertama (di dalam gelangnya), tekan {{key:Enter}}, klik dua kali, atau klik kanan.
   Kawasan itu diisi dengan warna sedikit mengikut warna item, dilabelkan dengan kaki persegi, dan menjadi tanda yang dipilih.

{{key:Backspace}} mengalih keluar sudut terakhir; {{key:Esc}} membuang garis luar.

Garis luar yang bersilang sendiri ditolak: "Garis luar bersilang sendiri, jadi luasnya akan salah. Lukis semula tanpa bersilang." Lukis bentuk angka lapan sebagai dua kawasan.

## Tepi melengkung

Semasa melakar garis luar, hidupkan mod lengkok ({{ui:Lengkok}} atau {{key:R}}). Selepas satu sudut, klik satu titik sepanjang lengkung, kemudian di tempat lengkung itu berakhir. Untuk menutup garis luar dengan lengkung, buat klik terakhir itu pada titik pertama. Luas dan perimeter menggunakan lengkung yang tepat. Tekan {{key:R}} sekali lagi untuk tepi lurus. Untuk menukar lengkung selepas itu, pilih kawasan dan seret pemegang bulat di tengah lengkok. Lihat [Ukur larian linear](topic:measure-linear#arcs-and-curved-walls).

## Bulatan

1. Dengan item luas, pilih {{ui:Bulatan}} atau tekan {{key:O}}.
2. Klik pusat.
3. Klik sebarang titik pada tepi.
   Semasa anda bergerak, bar status memaparkan jejari dan luas. Bulatan ditambah sebagai tanda kawasan dengan luas dan perimeter yang tepat.

## Isi bilik dengan satu klik

Apabila bilik dilukis sebagai dinding tertutup, {{ui:Bilik}} ({{key:B}}) mengambil lantai dengan satu klik:

1. Pilih item luas (contohnya kemasan lantai) dan berikan lembaran skalanya.
2. Pilih {{ui:Bilik}} dalam kumpulan {{ui:Takeoff}}, atau tekan {{key:B}}.
3. Klik di dalam bilik, di lantai terbuka (bukan pada garisan atau label).

TakeoffCraft membaca garisan lembaran, mencari ruang di sekeliling klik dan menggariskannya sepanjang muka dalam dinding, sebagai kawasan item semasa. Bukaan pintu sehingga **4'-0"** dianggap tertutup, jadi garis luar berjalan lurus merentasi ambang; **Tetapan › TakeoffCraft › Isi bilik menutup bukaan sehingga** menukar lebar itu (3'-0" hingga 8'-0"). Nama bilik, perabot dan lengkapan di dalam bilik tidak membentuk lubang.

Ia menolak, dengan menyatakan sebab, apabila:

- klik berada pada garisan ("Itu berada pada garisan");
- ruang tidak tertutup: bukaan yang lebih lebar daripada tetapan membolehkannya keluar ke tepi lembaran. Naikkan tetapan, atau lakar bilik itu dengan tangan menggunakan {{ui:Luas}};
- ruang itu terlalu kecil (simbol, bukan bilik).

Apabila pintu lebih lebar daripada tetapan, isian itu masuk ke bilik seterusnya dan melakar kedua-duanya bersama: {{key:Mod+Z}} buat asal, naikkan tetapan, dan klik semula. Semak garis luar seperti mana-mana kawasan: seret sudutnya untuk membetulkannya. Lembaran imbasan berfungsi dengan cara yang sama, tetapi garisannya mesti cukup gelap; garisan kelabu muda mungkin tidak menghentikan isian.

## Potong lubang daripada kawasan

1. Pilih {{ui:Pilih}} ({{key:V}}) dan klik kawasan itu. Ia menunjukkan pemegang persegi di sudutnya.
2. Pilih {{ui:Potongan}} pada bar alat (atau tekan {{key:X}}), atau {{ui:Tambah potongan}} di bawah **Tanda dipilih**.
3. Klik sudut lubang, di dalam kawasan. Mod lengkok turut berfungsi di sini.
4. Tutupnya seperti kawasan: klik titik pertamanya, tekan {{key:Enter}}, klik dua kali atau klik kanan.
   Lubang dibiarkan tidak diisi, dan bar status menyatakan "Potongan ditambah. Lukis yang lain, atau tekan Esc."
5. Lukis lebih banyak lubang dalam kawasan yang sama, atau tekan {{key:Esc}}.

Untuk lubang bulat, pilih {{ui:Tambah potongan bulat}} di bawah **Tanda dipilih**, klik pusatnya, kemudian satu titik pada tepinya.

Potongan mesti berada sepenuhnya di dalam kawasan dan tidak boleh bertindih dengan potongan lain. Jika tidak, TakeoffCraft menolaknya: "Potongan mesti berada sepenuhnya di dalam kawasan." atau "Potongan tidak boleh bertindih antara satu sama lain."

Untuk mengeluarkan semula lubang terakhir, pilih {{ui:Alih keluar potongan terakhir}}.

## Back-out: tiang, aci dan bukaan yang diambil daripada beberapa item

Potongan tergolong kepada satu tanda kawasan. **Back-out** dilukis sekali dan keluar daripada setiap kawasan yang bertindih dengannya, untuk item yang anda pilih: lukis tiang sekali, dan ia keluar daripada kemasan lantai, siling dan papak secara serentak.

1. Buat item luas untuknya, seperti "Tiang".
2. Dalam tetapan item, tandakan **Back-out: tandanya mengambil luasnya daripada item lain**. Senarai item luas anda yang lain muncul, semuanya ditandakan: nyahtandakan yang tidak sepatutnya disentuh oleh back-out (contohnya cat pada dinding).
3. Ukur tiang dengan {{ui:Luas}} atau {{ui:Bulatan}}, seperti biasa. Setiap satu dilukis putus-putus.

Setiap tanda kawasan bagi item yang ditandakan pada lembaran yang sama kehilangan bahagian yang dilindungi back-out: keseluruhan back-out apabila ia berada di dalam, hanya bahagian bertindih apabila ia merentasi tepi, dan tiada apa-apa di dalam potongan. Panel kawasan yang dipilih memaparkan **Back-out** dan luas yang tinggal. Kuantiti item, formula himpunannya, kos, paparan semakan 3D dan eksport semuanya menggunakan luas yang tinggal; nota anggaran menyatakan berapa banyak back-out telah diambil. Item back-out itu sendiri mengira luasnya sendiri (biarkan kosnya sifar jika anda tidak menilainya).

Back-out mesti **cembung**: segi empat tepat, bulatan atau mana-mana garis luar tanpa sudut ke dalam. TakeoffCraft menolak untuk melukis yang tidak begitu; lukis aci berbentuk L sebagai dua back-out. Back-out tidak boleh mempunyai potongan, dan dua back-out yang bertindih antara satu sama lain kedua-duanya dikira.

Perimeter (`P`) tidak berubah: back-out hanya mengambil luas.

## Baca luas

Pilih kawasan itu. **Tanda dipilih** memaparkan:

| Baris | Maksud |
|---|---|
| Luas | Luas bersih: garis luar tolak potongan. Inilah yang dikira oleh item. |
| Garis luar | Luas kasar di dalam garis luar (dipaparkan apabila ada potongan). |
| Potongan | Berapa banyak lubang, dan jumlah luasnya. |
| Perimeter | Panjang tepi garis luar, **tambah** tepi setiap potongan ("dengan potongan"). |

Perimeter menyertakan tepi potongan dengan sengaja, untuk perkara seperti acuan tepi atau tapak yang berjalan mengelilingi lubang. Jika anda hanya memerlukan tepi luar, simpan lubang daripada item itu atau ukur tepi luar sebagai larian linear.

{{ui:Unit}} item menentukan cara jumlahnya dilaporkan: SF, SY atau m². Panel **Tanda dipilih** dan bar status sentiasa memaparkan kaki persegi.

## Betulkan kawasan

- **Alih sudut**: pilih kawasan dan seret pemegang sudut (lubang juga mempunyai pemegang). Jika bentuk baharu akan bersilang sendiri atau menolak lubang keluar, sudut itu dikembalikan: "Titik itu dikembalikan."
- **Alih ke item lain**: pilih item luas lain dalam senarai **Item** di bawah **Tanda dipilih**.
- **Padam**: {{key:Delete}}, {{ui:Padam}} pada bar alat dalam menu {{ui:Lagi}}, atau {{ui:Padam tanda}}.

## Kedalaman untuk isipadu

Berikan item luas {{ui:Kedalaman}} (contohnya `0'-4"` untuk papak) dan gunakan `A * H / 27` dalam komponen himpunan untuk mendapatkan ela padu. Lihat [Himpunan dan formula](topic:assemblies).
