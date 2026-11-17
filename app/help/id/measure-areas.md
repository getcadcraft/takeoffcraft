---
title: Ukur area dengan lubang potong
summary: Buat garis tepi lantai, plafon, dan pelat, potong lubang darinya, tambahkan tepi melengkung, lingkaran, dan lubang potong bulat, lalu baca luas dan keliling.
keywords: isi ruang, flood fill, ember cat, klik di dalam ruang, area otomatis, back-out, backout, kolom, shaft, kurangi dari beberapa item, area, poligon, garis tepi, kaki persegi, SF, lubang potong, lubang, kurangi, lingkaran, bulat, busur, keliling, lantai, plafon, pelat
from: 34648db7
---

Item luas mengukur luas tertutup. Setiap garis tepi dapat memiliki lubang yang dipotong darinya (shaft, kolom, pot tanaman), dan tepinya dapat lurus atau melengkung.

Sebelum mulai: lembar memerlukan skala ([Atur skala](topic:set-the-scale)) dan Anda memerlukan item luas ([Buat item takeoff](topic:create-items)).

## Membuat garis tepi area

1. Klik item luas di bawah {{ui:Item}}.
2. Pilih {{ui:Luas}} di bilah alat, atau tekan {{key:A}}.
3. Klik setiap sudut ruangan atau pelat secara berurutan. Tahan {{key:Shift}} untuk tepi 0°, 45°, dan 90°.
   Mulai dari titik ketiga, garis tepi terisi dan bilah status menampilkan "Luas" dan "Keliling". Sebuah cincin kecil muncul di sekeliling titik pertama.
4. Tutup garis tepi: klik titik pertama (di dalam cincinnya), tekan {{key:Enter}}, klik dua kali, atau klik kanan.
   Area diisi tipis dengan warna item, diberi label dengan kaki persegi-nya, dan menjadi tanda yang dipilih.

{{key:Backspace}} menghapus sudut terakhir; {{key:Esc}} membuang garis tepi.

Garis tepi yang berpotongan dengan dirinya sendiri ditolak: "Garis tepi berpotongan dengan dirinya sendiri, sehingga luasnya akan salah. Gambar ulang tanpa berpotongan." Gambarlah bentuk angka delapan sebagai dua area.

## Tepi melengkung

Saat membuat garis tepi, aktifkan mode busur ({{ui:Busur}} atau {{key:R}}). Setelah sudut, klik satu titik sepanjang kurva, lalu di tempat kurva berakhir. Untuk menutup garis tepi dengan kurva, buat klik terakhir itu pada titik pertama. Luas dan keliling memakai kurva yang tepat. Tekan {{key:R}} lagi untuk tepi lurus. Untuk mengubah kurva kemudian, pilih area lalu seret pegangan bulat di tengah busur. Lihat [Ukur rangkaian linear](topic:measure-linear#arcs-and-curved-walls).

## Lingkaran

1. Dengan item luas, pilih {{ui:Lingkaran}} atau tekan {{key:O}}.
2. Klik pusatnya.
3. Klik sembarang titik pada tepinya.
   Saat Anda bergerak, bilah status menampilkan radius dan luas. Lingkaran ditambahkan sebagai tanda area dengan luas dan keliling yang tepat.

## Isi ruangan dengan satu klik

Saat ruangan digambar sebagai dinding tertutup, {{ui:Ruang}} ({{key:B}}) mengambil lantai dalam satu klik:

1. Pilih item luas (misalnya finishing lantai) dan beri lembar skalanya.
2. Pilih {{ui:Ruang}} di grup {{ui:Takeoff}}, atau tekan {{key:B}}.
3. Klik di dalam ruangan, di lantai terbuka (bukan pada garis atau label).

TakeoffCraft membaca garis lembar, menemukan ruang di sekitar klik, dan membuat garis tepinya mengikuti sisi dalam dinding, sebagai area dari item yang aktif. Bukaan pintu hingga **4'-0"** diperlakukan sebagai tertutup, sehingga garis tepi melintang lurus di atas ambang pintu; **Pengaturan › TakeoffCraft › Isi ruang menutup bukaan hingga** mengubah lebar itu (3'-0" hingga 8'-0"). Nama ruang, perabot, dan perlengkapan di dalam ruang tidak membuat lubang.

Ditolak, dengan menyebutkan alasannya, saat:

- klik berada pada garis ("Itu ada pada garis");
- ruang tidak tertutup: bukaan lebih lebar dari pengaturan sehingga ruang meluas ke tepi lembar. Naikkan pengaturannya, atau buat garis tepi ruang itu secara manual dengan {{ui:Luas}};
- ruang sangat kecil (simbol, bukan ruangan).

Saat pintu lebih lebar dari pengaturan, isian meluas ke ruangan berikutnya dan membuat garis tepi keduanya sekaligus: urungkan ({{key:Mod+Z}}), naikkan pengaturan, lalu klik lagi. Periksa garis tepi seperti area lainnya: seret sudutnya untuk memperbaikinya. Lembar hasil pindaian bekerja dengan cara yang sama, tetapi garisnya harus cukup gelap; garis abu-abu muda mungkin tidak menghentikan isian.

## Potong lubang dari area

1. Pilih {{ui:Pilih}} ({{key:V}}) lalu klik area. Area menampilkan pegangan persegi di sudutnya.
2. Pilih {{ui:Lubang potong}} di bilah alat (atau tekan {{key:X}}), atau {{ui:Tambah lubang potong}} di bawah **Tanda yang dipilih**.
3. Klik sudut-sudut lubang, di dalam area. Mode busur juga berfungsi di sini.
4. Tutup seperti area: klik titik pertamanya, tekan {{key:Enter}}, klik dua kali, atau klik kanan.
   Lubang dibiarkan tidak terisi, dan bilah status menampilkan "Lubang potong ditambahkan. Gambar lagi, atau tekan Esc."
5. Gambar lebih banyak lubang di area yang sama, atau tekan {{key:Esc}}.

Untuk lubang bulat, pilih {{ui:Tambah lubang potong bulat}} di bawah **Tanda yang dipilih**, klik pusatnya, lalu sebuah titik pada tepinya.

Lubang potong harus berada sepenuhnya di dalam area dan tidak boleh tumpang tindih dengan lubang potong lain. Jika tidak, TakeoffCraft menolaknya: "Lubang potong harus berada sepenuhnya di dalam area." atau "Lubang potong tidak boleh saling tumpang tindih."

Untuk mengeluarkan lubang terakhir lagi, pilih {{ui:Buang lubang potong terakhir}}.

## Back-out: kolom, shaft, dan bukaan yang dikurangkan dari beberapa item

Lubang potong menjadi milik satu tanda area. **Back-out** digambar sekali dan dikeluarkan dari setiap area yang tumpang tindih dengannya, untuk item yang Anda pilih: gambar kolom sekali, dan kolom itu dikurangkan dari finishing lantai, plafon, dan pelat sekaligus.

1. Buat item luas untuknya, misalnya "Kolom".
2. Di pengaturan item-nya, centang **Back-out: tanda-tandanya mengambil luasnya dari item lain**. Daftar item luas Anda yang lain muncul, semuanya tercentang: hilangkan centang pada yang tidak boleh disentuh back-out (misalnya cat pada dinding).
3. Ukur kolom dengan {{ui:Luas}} atau {{ui:Lingkaran}}, seperti biasa. Masing-masing digambar dengan garis putus-putus.

Setiap tanda area dari item yang dicentang pada lembar yang sama kehilangan bagian yang ditutupi back-out: seluruh back-out saat berada di dalam, hanya bagian yang tumpang tindih saat melintasi tepi, dan tidak ada apa pun di dalam lubang potong. Panel area yang dipilih menampilkan **Back-out** dan sisa area. Kuantitas item, rumus rakitannya, biaya, tampilan cek 3D, dan ekspor semuanya memakai sisa area; catatan estimasi menyebutkan berapa yang dikurangkan back-out. Item back-out itu sendiri menghitung area miliknya sendiri (biarkan biayanya nol jika Anda tidak memberinya harga).

Back-out harus **cembung**: persegi panjang, lingkaran, atau garis tepi apa pun tanpa sudut ke dalam. TakeoffCraft menolak menggambar yang tidak demikian; gambar shaft berbentuk L sebagai dua back-out. Back-out tidak dapat memiliki lubang potong, dan dua back-out yang saling tumpang tindih keduanya dihitung.

Keliling (`P`) tidak berubah: back-out hanya mengurangi luas.

## Membaca area

Pilih area. **Tanda yang dipilih** menampilkan:

| Baris | Artinya |
|---|---|
| Area | Luas bersih: garis tepi dikurangi lubang potong. Inilah yang dihitung item. |
| Outline | Luas kotor di dalam garis tepi (ditampilkan jika ada lubang potong). |
| Cut-outs | Berapa banyak lubang, dan total luasnya. |
| Perimeter | Panjang tepi garis tepi, **ditambah** tepi setiap lubang potong ("dengan lubang potong"). |

Keliling sengaja mencakup tepi lubang potong, untuk hal seperti bekisting tepi atau alas yang juga mengelilingi lubang. Jika Anda hanya memerlukan tepi luar, jauhkan lubang dari item itu atau ukur tepi luar sebagai rangkaian linear.

{{ui:Satuan}} item menentukan cara total dilaporkan: SF, SY, atau m². Panel **Tanda yang dipilih** dan bilah status selalu menampilkan kaki persegi.

## Memperbaiki area

- **Memindahkan sudut**: pilih area lalu seret pegangan sudut (lubang juga punya pegangan). Jika bentuk baru akan berpotongan dengan dirinya sendiri atau mendorong lubang ke luar, sudut dikembalikan: "Titik dikembalikan."
- **Pindahkan ke item lain**: pilih item luas lain di daftar **Item** di bawah **Tanda yang dipilih**.
- **Hapus**: {{key:Delete}}, {{ui:Hapus}} di menu {{ui:Lainnya}} pada bilah alat, atau {{ui:Hapus tanda}}.

## Kedalaman untuk volume

Beri item luas {{ui:Kedalaman}} (misalnya `0'-4"` untuk pelat) dan gunakan `A * H / 27` pada komponen rakitan untuk mendapatkan yard kubik. Lihat [Rakitan dan rumus](topic:assemblies).
