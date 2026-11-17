---
title: Salin, tempel, dan duplikat tanda
summary: Salin tanda beserta item-nya, tempel di tempat yang Anda klik atau di tempat yang sama di lembar lain, duplikat, potong, hapus, dan pilih semua, masing-masing satu langkah untuk diurungkan.
keywords: salin, tempel, potong, duplikat, tempel di tempat yang sama, papan klip, pilih semua, batalkan pilihan, beberapa tanda, berulang, lantai tipikal, denah yang sama, lembar lain, salin item, duplikat item
from: e20e9024
---

Grup {{ui:Edit}} pada bilah alat memuat {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} dan {{ui:Paste}}. Menu {{ui:More}}-nya memuat sisanya, masing-masing dengan tombolnya: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} dan {{ui:Select none}}. Masing-masing dapat diurungkan dalam satu langkah dengan {{key:Mod+Z}}.

## Pilih tanda

1. Pilih {{ui:Select}} ({{key:V}}) dan klik sebuah tanda.
2. Tahan {{key:Shift}} dan klik lebih banyak tanda untuk menambahkannya. {{key:Shift}} + klik pada tanda yang sudah dipilih akan mengeluarkannya lagi.
3. Atau tekan {{key:Mod+A}} ({{ui:Select all}}) untuk memilih setiap tanda di lembar yang terbuka.

Dengan beberapa tanda dipilih, panel kanan menampilkan **Tanda terpilih**: jumlah setiap item, dengan {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} dan {{ui:Delete marks}}. Pegangan sudut hanya muncul saat satu tanda dipilih. {{key:Esc}} ({{ui:Select none}}) menghapus pilihan.

## Salin dan tempel di tempat yang Anda klik

1. Pilih tanda dan tekan {{key:Mod+C}} ({{ui:Copy}}). Tanda disalin beserta item-nya, termasuk rakitan, susut, dan biaya masing-masing item.
2. Buka lembar tempat Anda ingin menempelkannya (boleh lembar yang sama).
3. Tekan {{key:Mod+V}} ({{ui:Paste}}). Salinan putus-putus mengikuti penunjuk.
4. Klik tempat tujuannya. Titik tengah tanda yang disalin mendarat di penunjuk.

{{key:Esc}} membatalkan dan tidak menambahkan apa pun. Tanda yang ditempel kemudian dipilih, sehingga {{key:Delete}} atau {{key:Mod+Z}} menghapusnya kembali.

Dalam takeoff yang sama, tanda yang ditempel masuk ke **item yang sama**, sehingga kuantitasnya bertambah pada item tersebut. Dalam takeoff lain (tab lain, atau setelah {{ui:New}}), item dengan nama dan tipe yang sama dipakai; jika tidak, item ditambahkan beserta rakitannya. Jika nama sudah dipakai oleh item dengan tipe lain, item yang ditambahkan dinamai "(nama) (salinan)".

Tanda yang ditempel masuk ke area penawaran yang dipilih di bagian atas panel {{ui:Items}} (atau tidak ada). Lihat [Area penawaran](topic:bid-areas).

## Tempel di tempat yang sama

{{key:Mod+Shift+V}} ({{ui:Paste in place}}) menempatkan salinan tepat di titik yang sama pada lembar yang terbuka, sesuai posisinya di halaman. Gunakan untuk lantai tipikal: hitung lantai 2, salin, buka lantai 3, tempel di tempat yang sama.

Tempel di tempat yang sama memerlukan lembar dengan **ukuran yang sama** seperti lembar tempat Anda menyalin. Pada lembar berukuran lain, TakeoffCraft memberitahukannya dan tidak menempel apa pun; gunakan {{ui:Paste}} dan klik sebagai gantinya. Pada lembar tempat Anda menyalin, salinan jatuh di atas aslinya.

## Skala harus sama

Panjang dan luas bergantung pada skala lembar. Lintasan yang mengukur 10' pada 1/4" = 1'-0" akan mengukur 20' pada lembar dengan 1/8" = 1'-0". Karena itu TakeoffCraft hanya menempel lintasan dan area ke lembar dengan **skala yang sama** seperti lembar asalnya, dan menyatakan dengan jelas jika tidak:

- Lembar yang terbuka belum memiliki skala: beri skala terlebih dahulu ([Atur skala](topic:set-the-scale)), lalu tempel.
- Lembar yang terbuka memiliki skala lain: pesannya menyebutkan kedua skala. Tempel pada lembar dengan skala yang sama.
- Hitungan tidak memerlukan skala: hitungan yang disalin dapat ditempel di mana saja.

## Duplikat

{{key:Mod+D}} ({{ui:Duplicate}}) menyalin tanda yang dipilih dan langsung meletakkan salinannya pada penunjuk; klik di tempat tujuannya. Tidak ada yang ditambahkan sampai Anda klik, dan {{key:Esc}} tidak meninggalkan apa pun. Duplikat tidak mengubah apa yang ditempel oleh {{ui:Paste}}.

## Potong dan hapus

- {{key:Mod+X}} ({{ui:Cut}}) menyalin tanda yang dipilih dan menghapusnya. Tempel di tempat yang seharusnya, atau urungkan pemotongan.
- {{key:Delete}} atau {{key:Backspace}} ({{ui:Delete}}) menghapus tanda yang dipilih tanpa menyalinnya.

## Salin item

Editor item (di bawah **Item**) diakhiri dengan:

- {{ui:Copy item}}: menyalin item beserta rakitan, susut, dan biayanya, tanpa tanda. {{ui:Paste}} kemudian menambahkan salinannya ke takeoff ini, atau ke takeoff lain.
- {{ui:Duplicate item}}: langsung menambahkan salinan, dinamai "(nama) (salinan)".

:::tip
Salinan tetap berada di komputer ini: disimpan di tab ini dan di penyimpanan peramban, sehingga tab TakeoffCraft lain bisa menempelkannya. Tidak ada yang diunggah, dan papan klip sistem tidak digunakan, sehingga Anda tidak dapat menempel tanda ke program lain.
:::

:::note
Salinan berasal dari satu lembar pada satu waktu. Tanda ditempel apa adanya: belum ada fitur memutar atau mencerminkan salinan.
:::
