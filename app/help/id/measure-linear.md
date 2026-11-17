---
title: Ukur rangkaian linear
summary: Ambil panjang dinding, perpipaan, trim, dan panjang lain sebagai rangkaian, dengan segmen lurus, busur, dan snap 45 derajat Shift.
keywords: linear, panjang, rangkaian, polyline, dinding, lf, kaki linear, busur, kurva, 45 derajat, ortho, snap, segmen, polylength, kurangi, bukaan, pintu, celah, ketik, diketik, koordinat, jarak, jarak langsung, polar
from: c669deff
---

Item linear mengukur panjang. Setiap rangkaian adalah rantai titik: segmen lurus, dan busur di tempat Anda mengaktifkan mode busur. Sebuah item dapat memiliki berapa pun rangkaian pada berapa pun lembar.

Sebelum mulai: lembar memerlukan skala ([Atur skala](topic:set-the-scale)) dan Anda memerlukan item linear ([Buat item takeoff](topic:create-items)).

Pada PDF vektor, klik Anda men-snap ke garis milik gambar: ujung, titik tengah, dan perpotongan ([Snap ke garis gambar](topic:snap-to-the-drawing); {{key:F3}} mematikannya).

## Menggambar rangkaian

1. Klik item linear di bawah {{ui:Item}}.
2. Pilih {{ui:Linear}} di bilah alat, atau tekan {{key:L}}.
3. Klik awal rangkaian.
4. Klik setiap sudut di sepanjangnya.
   Bilah status menampilkan "Panjang" (rangkaian sejauh ini, sampai ke penunjuk) dan "segmen" (segmen yang sedang Anda gambar), dalam kaki dan inci.
5. Selesaikan rangkaian: klik dua kali titik terakhir, tekan {{key:Enter}}, atau klik kanan.
   Rangkaian digambar dengan warna item dan menjadi tanda yang dipilih. Panjang item di daftar {{ui:Item}} dan tabel {{ui:Kuantitas}} bertambah.

Alat tetap pada {{ui:Linear}}, sehingga Anda dapat langsung memulai rangkaian berikutnya. Tekan {{key:Esc}} untuk kembali ke {{ui:Pilih}}.

Saat menggambar:

- {{key:Backspace}} (atau {{key:Delete}}) menghapus titik terakhir.
- {{key:Esc}} membuang rangkaian yang belum selesai.
- Menyeret menggeser lembar dan roda men-zoom, tanpa menambah titik.

:::mac
Pada trackpad Mac, klik kanan adalah klik dua jari (aktifkan klik sekunder di Pengaturan Sistem, di bawah Trackpad). TakeoffCraft hanya membaca tombol sekunder, sehingga Control-klik mungkin dianggap klik biasa dan menambahkan titik. Klik dua kali atau {{key:Enter}} selalu menyelesaikan.
:::

:::touch
Pada layar sentuh, ketuk untuk menempatkan titik, seret dengan satu jari untuk menggeser, dan cubit dengan dua jari untuk zoom. Selesaikan dengan tekan lama, ketuk dua kali, atau {{ui:Finish}} di bilah di bawah lembar ({{ui:Back}} mengembalikan titik terakhir). Lihat [Pemecahan masalah](topic:troubleshooting#touch-screens).
:::

## Garis lurus dengan langkah 45°

Tahan {{key:Shift}} saat Anda menempatkan titik. Segmen dari titik terakhir di-snap ke arah 0°, 45°, 90°, atau 135° terdekat, dengan mempertahankan panjang yang Anda seret di sepanjangnya. Bilah status mengingatkan Anda: "Shift men-snap ke 45°".

Dalam mode busur, ini berlaku pada tempat busur berakhir: tali busur berjalan dengan langkah 45° dari tempat ia dimulai. Titik yang Anda klik pada kurva tidak pernah di-snap.

## Busur dan dinding melengkung

1. Saat menggambar rangkaian, tempatkan titik tempat kurva dimulai.
2. Aktifkan mode busur: pilih {{ui:Busur}} di bilah alat atau tekan {{key:R}}. Tombolnya tetap tertekan.
3. Klik sembarang titik pada kurva, di suatu tempat di sepanjang tengahnya.
   Bilah status menambahkan "(busur: klik tempat berakhirnya)" dan pratinjau melengkung melalui titik Anda.
4. Klik tempat kurva berakhir.
   Busur ditambahkan. Panjangnya adalah panjang busur yang tepat, bukan rangkaian tali busur pendek.
5. Klik titik lain pada kurva berikutnya dan ujungnya untuk terus menggambar busur, atau tekan {{key:R}} lagi untuk kembali ke segmen lurus.

{{key:Backspace}} atau {{key:Esc}} pertama-tama membuang titik kurva yang tertunda; tekan lagi untuk menghapus titik seperti biasa.

## Ketik panjang dan koordinat

Setelah titik pertama, Anda dapat mengetik ke mana titik berikutnya pergi, alih-alih mengklik. Ketik angka, `@`, atau `#`: kotak {{ui:Ketik}} terbuka di bilah status dengan apa yang Anda ketik. Tekan {{key:Enter}} untuk menempatkan titik; kotak tetap terbuka untuk yang berikutnya.

| Ketik | Titik berikutnya pergi |
|---|---|
| `12'6"` | 12'-6" dari titik terakhir, menuju penunjuk (tunjuk arahnya, lalu ketik panjangnya) |
| `12'6"<45` | 12'-6" pada 45°, dihitung berlawanan arah jarum jam dari kanan layar (`<90` ke atas, `<-90` ke bawah) |
| `@6',-4'` | 6' ke kanan dan 4' ke bawah dari titik terakhir |
| `6',4'` (atau `#6',4'`) | 6' ke kanan dan 4' ke atas dari titik pertama rangkaian ini |

Panjang diketik seperti di mana pun di TakeoffCraft ([Format entri](topic:entry-formats)): `12'-6 1/2"`, `12.5` (kaki), `30"`, `3.2 m`. "Kanan" dan "atas" sesuai dengan yang Anda lihat pada lembar, juga saat halaman PDF diputar.

{{key:Enter}} pada kotak kosong menyelesaikan rangkaian, seperti {{key:Enter}} pada lembar; {{key:Esc}} menutup kotak dan membiarkan rangkaian berjalan. Titik yang diketik mengikuti aturan yang sama dengan klik: pengurangan, busur, dan penutupan area semuanya berfungsi. Kotak yang sama berfungsi di {{ui:Luas}} dan {{ui:Lubang potong}}; setelah pusat lingkaran, kotak ini mengambil radius.

## Kurangi sebagian rangkaian

Rangkaian dinding yang melewati pintu atau etalase dapat digambar lurus menembusnya dan tetap hanya menghitung dinding: segmen yang melintasi bukaan adalah **pengurangan**. Segmen itu digambar putus-putus dan tipis, dan tidak dihitung.

Saat menggambar:

1. Tempatkan titik tempat bukaan dimulai.
2. Pilih {{ui:Kurangi}} di bilah alat atau tekan {{key:E}}. Tombol tetap tertekan dan bilah status menyatakan segmen berikutnya adalah pengurangan.
3. Klik tempat bukaan berakhir. Segmen digambar putus-putus; "Panjang" di bilah status tidak menghitungnya.
4. Tekan {{key:E}} lagi dan lanjutkan di sepanjang dinding.

Setelah menggambar: pilih rangkaian. Di bawah **Tanda yang dipilih**, setiap segmen memiliki kotak {{ui:Kurangi}}: centang untuk mengurangi segmen itu, hilangkan centang untuk menghitungnya lagi. Setiap perubahan adalah satu langkah urungkan.

Sebuah rangkaian selalu menyisakan setidaknya satu segmen yang dihitung. Panel kemudian menampilkan **Pengurangan** (panjang yang dikurangkan) dan **Digambar** (seluruh rangkaian); **Panjang**, kuantitas item, luas dinding, dan biaya semuanya memakai panjang tanpa pengurangan. Tampilan cek 3D menyisakan celah di dinding, PDF bertanda menggambar pengurangan dengan garis putus-putus, dan lembar **Tanda** yang diekspor mencantumkannya.

Memindahkan sudut mempertahankan pengurangan. Menambah atau menghapus titik (dengan menggambar ulang rangkaian) dimulai tanpa pengurangan.

## Melihat detail rangkaian

Pilih {{ui:Pilih}} ({{key:V}}) lalu klik rangkaian. **Tanda yang dipilih** di sebelah kanan menampilkan:

- item tempat ia berada (pilih item linear lain di daftar untuk memindahkan rangkaian ke sana),
- lembar,
- **Panjang** dalam kaki dan inci serta dalam LF,
- jumlah **Segmen**, dan **Luas dinding** saat item memiliki tinggi,
- panjang setiap segmen, dengan "(busur)" setelah busur, dan kotak {{ui:Kurangi}}-nya.

Pada lembar, setiap segmen dari rangkaian yang dipilih diberi label dengan panjangnya.

## Memperbaiki rangkaian

- **Memindahkan titik**: pilih rangkaian, lalu seret salah satu pegangan sudutnya yang persegi. Tahan {{key:Shift}} untuk men-snap segmen yang dipindahkan ke langkah 45°. Busur mempertahankan bulge-nya.
- **Melengkungkan busur**: rangkaian yang dipilih menampilkan pegangan bulat di tengah setiap busur. Seret: busur melewati tempat Anda melepasnya, sehingga ia melengkung lebih, kurang, atau ke arah sebaliknya. Jika diseret ke garis lurus di antara ujungnya, ia menjadi segmen lurus. {{key:Mod+Z}} membatalkannya ("Lengkungkan busur").
- **Hapus rangkaian**: pilih lalu tekan {{key:Delete}}, pilih {{ui:Hapus}} di menu {{ui:Lainnya}} pada bilah alat, atau {{ui:Hapus tanda}} di panel.
- **Urungkan**: {{key:Mod+Z}}; ulangi dengan {{key:Mod+Y}}.

Anda belum dapat menyisipkan titik di tengah rangkaian. Hapus rangkaian dan gambar ulang.

## Luas dinding

Beri item linear {{ui:Tinggi}} (misalnya `9'-0"`). Ia kemudian melaporkan **Luas dinding (A)** = panjang × tinggi, dalam SF (atau m² untuk item metrik), dan luas dinding masuk ke kolom catatan ekspor spreadsheet. Gunakan di rakitan untuk papan, cat, atau insulasi: lihat [Rakitan dan rumus](topic:assemblies).
