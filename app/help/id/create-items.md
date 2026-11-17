---
title: Buat item perhitungan volume
summary: Buat item linear, luas, dan hitung, lalu atur satuannya, tinggi atau kedalaman, susut, serta tarif material dan upah.
keywords: regu, laju produksi, ukuran regu, upah, jam, jam-orang, jam-pekerja, hari-regu, jam upah, item, item baru, kondisi, multi-kondisi, juga ukur, beberapa jenis, ruangan, linear, luas, hitung, satuan, tinggi, kedalaman, susut, material, upah, tarif, warna, biaya
from: 7fa5effc
---

Sebuah **item** adalah satu hal yang Anda ukur dan beri harga: jenis dinding, finishing lantai, plafon, pintu, armatur lampu. Setiap tanda yang Anda gambar termasuk ke dalam sebuah item. Program lain menyebutnya kondisi.

Setiap item memiliki jenis (dan juga dapat menerima jenis tanda lain, lihat [Satu item, beberapa jenis tanda](topic:create-items#one-item-several-kinds-of-marks)):

| Jenis | Yang Anda gambar | Yang dilaporkan | Satuan |
|---|---|---|---|
| Linear | Rangkaian titik yang terhubung | Panjang, jumlah rangkaian, dan luas dinding jika memiliki tinggi | LF atau m |
| Luas | Garis tepi tertutup, dengan lubang potong | Luas, keliling, jumlah area | SF, SY, SQ, ac, ha atau m² |
| Hitung | Satu klik per benda | Jumlahnya | EA |
| Kuantitas diketik | Tidak ada: Anda mengetik kuantitasnya | Angka yang Anda ketik (atau yang dibawa dari CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha atau m² |

## Kuantitas diketik (tanpa gambar)

Beberapa hal dalam estimasi tidak pernah digambar: mobilisasi, izin, kontingensi, subkontrak borongan, atau galian dan timbunan yang dihitung CivilCraft. Jadikan itu **Kuantitas diketik**:

1. Pilih {{ui:Item baru}}, ketik nama, pilih {{ui:Kuantitas diketik (tanpa gambar)}}, lalu pilih {{ui:Tambah}}.
2. Di editor item, pilih {{ui:Satuan}} (LS untuk borongan) dan ketik {{ui:Kuantitas}}: `1`, `2.5`, atau `1,250`.
3. Atur susut dan tarif seperti untuk item lain. Rumus rakitan menggunakan `Q`, yaitu kuantitas, misalnya `ceil(Q / 12)` untuk jumlah truk muatan.

Kuantitas diketik tidak menerima tanda dan tidak pernah membuat estimasi menjadi tidak lengkap. Saat perhitungan volume memiliki area penawaran, editor juga memiliki {{ui:Area penawaran}}: kuantitas kemudian dihitung di area itu, alternatifnya, dan totalnya, sama seperti tanda di sana. Kuantitas yang dibawa dari aplikasi lain menyebutkan asalnya, lihat [Galian dan timbunan serta elevasi titik](topic:earthwork#cut-and-fill-from-civilcraft).

## Buat item

1. Di panel {{ui:Item}} di sebelah kanan, pilih {{ui:Item baru}}.
2. Ketik nama, misalnya `Dinding interior tipe A` atau `Ubin karpet`.
3. Pilih jenisnya: {{ui:Linear (panjang)}}, {{ui:Luas}}, atau {{ui:Hitung}}.
4. Pilih {{ui:Tambah}} (atau tekan {{key:Enter}}).
   Item muncul di daftar dengan warnanya sendiri, menjadi item yang Anda gambar, dan editornya terbuka di bawah daftar. Bilah status memberi tahu alat mana yang dipilih berikutnya.

Tekan {{key:Esc}} di formulir untuk menutupnya tanpa menambahkan item.

:::tip
Jika Anda memilih alat ukur terlebih dahulu, TakeoffCraft menggunakan item terakhir dengan jenis yang sesuai, atau membuka formulir {{ui:Item baru}} dengan jenis itu sudah dipilih.
:::

## Pilih item yang Anda gambar

Klik item di daftar. Item itu menjadi item tempat tanda baru masuk, dan tandanya disorot di setiap lembar sementara yang lain memudar. Jika lembar yang terbuka tidak memiliki tandanya, TakeoffCraft melompat ke lembar yang memilikinya. Klik item lagi untuk berhenti menyorot; item itu tetap menjadi item yang Anda gambar.

Mengklik tanda dengan alat {{ui:Pilih}} juga menjadikan item tandanya sebagai item saat ini.

## Atur item

Editor item (**Item: (nama)**) memiliki kolom-kolom berikut. Setiap kolom disimpan saat Anda meninggalkan kolom isian atau menekan {{key:Enter}}, dan setiap perubahan dapat diurungkan.

| Kolom | Fungsinya |
|---|---|
| {{ui:Nama}} | Ditampilkan di daftar, tabel, dan ekspor. |
| {{ui:Ketik}} | Linear, Luas, atau Hitung. Terkunci setelah item memiliki tanda ("An item with marks keeps its type"). |
| {{ui:Warna}} | Warna tandanya di layar dan di PDF yang diberi tanda. |
| {{ui:Satuan}} | Satuan kuantitas yang dilaporkan: LF atau m untuk linear; SF, SY, SQ, ac, ha, atau m² untuk luas; EA untuk hitung. |
| {{ui:Ukur juga}} | Jenis tanda lain yang diterima item, masing-masing dengan satuannya sendiri. Lihat di bawah. |
| {{ui:Tinggi}} (linear) | Tinggi dinding. Item kemudian juga melaporkan luas dinding (panjang × tinggi). Rangkaian yang berasal dari model BimCraft membawa pintu dan jendelanya: bukaan tersebut dikurangkan sekali, dan item menyebutkan luas kotor, bukaan, dan luas bersih. Perhitungan volume dari proyek BimCraft yang memilih metode pengukuran juga diukur dengan metode itu di sini (catatan menyebut metodenya beserta sumbernya, dan menyatakan bahwa belum diperiksa oleh surveyor kuantitas); metode itu tidak dapat diubah di TakeoffCraft. Bata atau blok dan mortar dari tipe dinding masuk sebagai dua komponen: satuan yang dipesan dan volume mortar. |
| {{ui:Kedalaman}} (luas) | Kedalaman atau ketebalan, digunakan dalam rumus rakitan (misalnya volume beton). |
| {{ui:Susut %}} | Ditambahkan ke kuantitas sebelum penetapan harga: 10 berarti kuantitas × 1.10. |
| Material $/LF | Biaya material per satuan. Label mengikuti satuan: $/SF, $/EA, dan seterusnya. |
| Upah $/LF | Biaya upah per satuan. |
| {{ui:Nomor CSI}} | Nomor CSI MasterFormat-nya, seperti `09 21 16` (atau hanya divisinya, `09`). Lembar By division pada buku kerja mengelompokkan biaya menurut nomor ini. Item dari [paket keahlian](topic:trade-packs) sudah memilikinya. |

Tinggi dan kedalaman menerima kaki dan inci (`9'-0"`, `8' 6"`) atau kaki desimal (`9`) untuk satuan imperial, dan meter (`2.7`, `2700 mm`) untuk satuan metrik. Tarif menerima nilai seperti `12.50` atau `$1,250`, hingga empat desimal. Lihat [Entri panjang, tarif, dan persen](topic:entry-formats).

Di bawah kolom-kolom, **Diukur** menampilkan total yang dapat digunakan rumus item, dengan hurufnya: Panjang (L), Rangkaian (N), Luas dinding (A) untuk linear; Luas (A), Keliling (P), Jumlah area (N) untuk luas; Hitung (N) untuk hitung.

## Satu item, beberapa jenis tanda

Beberapa hal diukur dengan lebih dari satu cara: sebuah ruangan memiliki lantai (luas), dasar di sepanjang dindingnya (panjang), dan pintu (hitung). Alih-alih tiga item, buat satu:

1. Buat item dengan jenis utamanya, seperti item luas `Ruang 101`.
2. Di bawah {{ui:Ukur juga}} pada editornya, centang {{ui:Linear}}, {{ui:Hitung}}, atau keduanya. Setiap jenis mendapat satuan di sebelahnya.
3. Gambar dengan alat apa pun yang jenisnya diterima item: dengan `Ruang 101` aktif, {{ui:Luas}} menggambar lantainya, {{ui:Linear}} menggambar dasarnya, dan {{ui:Hitung}} menghitung pintunya. TakeoffCraft tidak meminta item lain.

Daftar item menampilkan setiap kuantitas (`50.00 SF + 2 EA`). Di tabel kuantitas, baris item memiliki kuantitas utamanya, dan setiap jenis lain mendapat barisnya sendiri di bawahnya, seperti **Ruang 101 (hitung)**, dengan susut serta tarif material dan upahnya sendiri. Ekspor, tabel per lembar, dan legenda PDF yang diberi tanda mencantumkannya dengan cara yang sama.

Pengaturan jenis utama tetap milik jenis utama: tinggi atau kedalaman, kemiringan, pengurang luas, dan bentuk 3D hanya berlaku untuk tandanya. Rangkaian dasar yang digambar untuk item luas diukur datar sepanjang denah dan tampil rata di 3D. Rumus rakitan menggunakan total jenis utama.

Sebuah jenis hanya dapat dihapus centangnya selama item belum memiliki tandanya; hapus tandanya, atau pindahkan ke item lain di bawah **Selected mark**, terlebih dahulu. Tanda dapat dipindahkan ke item mana pun yang menerima jenisnya.

Lebih ke bawah ada {{ui:Rakitan biaya}}: komponen seperti stud atau papan, masing-masing dengan rumus dan tarifnya sendiri. Lihat [Rakitan dan rumus](topic:assemblies).

Di bagian bawah: {{ui:Pindahkan ke atas}} dan {{ui:Pindahkan ke bawah}} mengubah posisi item di daftar dan ekspor, dan {{ui:Hapus item}} menghapusnya beserta semua tandanya (setelah meminta konfirmasi; Anda dapat mengurungkannya).

Item luas juga memiliki **Pitch** (bidang atap yang diukur pada kemiringan: [Atap dan kemiringan](topic:roofs-and-slopes)) dan **Back-out** (tandanya dikurangkan dari luas item lain: [Ukur luas](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Item linear memiliki **Slope** (Level, Rake, Hip or valley) dan, untuk rake dan hip, **Pitch**.

## Tarif di tabel

Anda juga dapat mengetik {{ui:Susut %}}, tarif material, dan tarif upah langsung ke tabel {{ui:Kuantitas}} di bagian bawah ({{ui:Per item}}). Ini pengaturan yang sama dengan di editor.

## Cara penetapan harga

Untuk setiap item dan setiap komponen rakitan:

1. **Dengan susut** = kuantitas × (1 + susut %).
2. **Material** = dengan susut × material per satuan, dibulatkan ke sen.
3. **Upah** = dengan susut × upah per satuan, dibulatkan ke sen.
4. **Total** = material + upah.

{{ui:Total pekerjaan}} menjumlahkan setiap item dan setiap komponen. Item dapat membawa tarifnya sendiri sekaligus rakitan; keduanya dihitung, jadi biarkan tarif item di 0 jika komponennya sudah membawa biaya.

## Upah per regu

Alih-alih tarif upah per satuan, upah item dapat berasal dari regu: berapa yang dikerjakan per jam, berapa orang, dan berapa upah masing-masing. Di bawah {{ui:Upah per regu}} di editor item, centang {{ui:Hitung upah dari regu}} dan isi:

| Kolom | Contoh |
|---|---|
| {{ui:Produksi}} | `20` LF per jam (dalam satuan item) untuk seluruh regu |
| {{ui:Jumlah anggota regu}} | `2` orang |
| {{ui:Upah $/jam per orang}} | `45` |

TakeoffCraft menghitung, dari kuantitas dengan susut:

- **jam regu** = kuantitas ÷ produksi (110 LF ÷ 20 = 5.5),
- **jam pekerja** = jam regu × jumlah anggota regu (11),
- **hari regu** = jam regu ÷ 8 (0.69),
- **upah** = jam pekerja × upah ($495.00).

Editor menampilkan hasilnya dan tarif yang dihasilkan ($4.50/LF). Tarif upah item itu kemudian hanya-baca, di editor maupun di tabel. Header tabel {{ui:Kuantitas}} menambahkan jam pekerja dan hari regu pekerjaan. Ekspor mencatat jam setiap regu, dan di workbook sel upah berupa rumus pada regu (`ROUND(F2/20*2*45,2)`). Hapus centang kotak untuk kembali ke tarif per satuan.

## Item metrik

Pilih m (linear) atau m² (luas) sebagai satuan. Kuantitas, tinggi, dan nilai rumus kemudian dalam meter. Skala lembar dapat berupa preset atau kalibrasi apa pun; satuan dan skala tidak bergantung satu sama lain.

## Selanjutnya

- [Ukur rangkaian linear](topic:measure-linear)
- [Ukur luas dengan lubang potong](topic:measure-areas)
- [Hitung secara manual](topic:count-by-hand)
