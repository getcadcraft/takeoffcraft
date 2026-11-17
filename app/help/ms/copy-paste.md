---
title: Salin, tampal dan pendua tanda
summary: Salin tanda bersama item, tampal di tempat yang anda klik atau di tempat yang sama pada helaian lain, pendua, potong, padam dan pilih semua, setiap satu boleh dibuat asal dengan satu langkah.
keywords: salin, tampal, potong, pendua, tampal di tempat yang sama, papan keratan, pilih semua, nyahpilih semua, pelbagai tanda, berulang, lantai biasa, pelan yang sama, helaian lain, salin item, pendua item
from: e20e9024
---

Kumpulan {{ui:Sunting}} pada bar alat mengandungi {{ui:Buat asal}}, {{ui:Buat semula}}, {{ui:Salin}} dan {{ui:Tampal}}. Menu {{ui:Lagi}} mempunyai yang lain, setiap satu dengan kekuncinya: {{ui:Potong}}, {{ui:Salin}}, {{ui:Tampal}}, {{ui:Tampal di tempat yang sama}}, {{ui:Pendua}}, {{ui:Padam}}, {{ui:Pilih semua}} dan {{ui:Nyahpilih semua}}. Setiap satu boleh dibuat asal dengan satu langkah menggunakan {{key:Mod+Z}}.

## Pilih tanda

1. Pilih {{ui:Pilih}} ({{key:V}}) dan klik satu tanda.
2. Tahan {{key:Shift}} dan klik lebih banyak tanda untuk menambahnya. {{key:Shift}} + klik pada tanda yang dipilih mengeluarkannya semula.
3. Atau tekan {{key:Mod+A}} ({{ui:Pilih semua}}) untuk mengambil setiap tanda pada helaian terbuka.

Dengan beberapa tanda dipilih, panel kanan menunjukkan **Tanda dipilih**: bilangan bagi setiap item, dengan {{ui:Salin}}, {{ui:Pendua}}, {{ui:Potong}} dan {{ui:Padam tanda}}. Pemegang bucu hanya muncul apabila satu tanda dipilih. {{key:Esc}} ({{ui:Nyahpilih semua}}) mengosongkan pilihan.

## Salin dan tampal di tempat anda klik

1. Pilih tanda dan tekan {{key:Mod+C}} ({{ui:Salin}}). Tanda disalin bersama item-itemnya, termasuk himpunan, pembaziran dan kos setiap item.
2. Pergi ke helaian yang anda mahu (ia boleh jadi helaian yang sama).
3. Tekan {{key:Mod+V}} ({{ui:Tampal}}). Salinan putus-putus mengikut penunjuk.
4. Klik di tempat ia patut pergi. Bahagian tengah tanda yang disalin jatuh di penunjuk.

{{key:Esc}} membatalkan dan tidak menambah apa-apa. Tanda yang ditampal kemudian dipilih, jadi {{key:Delete}} atau {{key:Mod+Z}} akan mengeluarkannya semula.

Dalam pengukuran kuantiti yang sama, tanda yang ditampal masuk ke **item yang sama**, jadi kuantitinya ditambah kepada item tersebut. Dalam pengukuran kuantiti lain (tab lain, atau selepas {{ui:Baharu}}), item dengan nama dan jenis yang sama digunakan; jika tidak, item itu ditambah bersama himpunannya. Jika nama itu sudah diambil oleh item jenis lain, item yang ditambah dinamakan "(nama) (salinan)".

Tanda yang ditampal masuk ke kawasan tawaran yang dipilih di bahagian atas panel {{ui:Item}} (atau tiada). Lihat [Kawasan tawaran](topic:bid-areas).

## Tampal di tempat yang sama

{{key:Mod+Shift+V}} ({{ui:Tampal di tempat yang sama}}) meletakkan salinan tepat di tempat yang sama pada helaian terbuka, mengikut kedudukannya pada halaman. Gunakannya untuk lantai biasa: kira tingkat 2, salin, buka tingkat 3, dan tampal di tempat yang sama.

Tampal di tempat yang sama memerlukan helaian yang **saiz sama** dengan helaian yang anda salin. Pada helaian saiz lain TakeoffCraft memberitahu dan tidak menampal apa-apa; gunakan {{ui:Tampal}} dan klik sebaliknya. Pada helaian asal yang anda salin, salinan itu jatuh di atas yang asal.

## Skala mesti sepadan

Panjang dan luas bergantung pada skala helaian. Larian yang mengukur 10' pada 1/4" = 1'-0" akan mengukur 20' pada helaian 1/8" = 1'-0". Oleh itu TakeoffCraft hanya menampal larian dan luas ke helaian dengan **skala yang sama** seperti helaian asalnya, dan memberitahu dengan jelas apabila tidak:

- Helaian terbuka belum ada skala: beri skala dahulu ([Tetapkan skala](topic:set-the-scale)), kemudian tampal.
- Helaian terbuka mempunyai skala lain: mesej menamakan kedua-dua skala. Tampal pada helaian dengan skala yang sama.
- Kiraan tidak memerlukan skala: kiraan yang disalin boleh ditampal di mana-mana.

## Pendua

{{key:Mod+D}} ({{ui:Pendua}}) menyalin tanda yang dipilih dan meletakkan salinan pada penunjuk serta-merta; klik di tempat ia patut pergi. Tiada apa ditambah sehingga anda klik, dan {{key:Esc}} tidak meninggalkan apa-apa. Pendua tidak mengubah apa yang {{ui:Tampal}} tampalkan.

## Potong dan padam

- {{key:Mod+X}} ({{ui:Potong}}) menyalin tanda yang dipilih dan memadamkannya. Tampal di tempat yang sepatutnya, atau buat asal pemotongan.
- {{key:Delete}} atau {{key:Backspace}} ({{ui:Padam}}) memadamkan tanda yang dipilih tanpa menyalinnya.

## Salin item

Editor item (di bawah **Item**) berakhir dengan:

- {{ui:Salin item}}: menyalin item bersama himpunan, pembaziran dan kosnya, tanpa tanda. {{ui:Tampal}} kemudian menambah salinannya kepada pengukuran kuantiti ini, atau kepada yang lain.
- {{ui:Pendua item}}: menambah salinan serta-merta, dinamakan "(nama) (salinan)".

:::tip
Salinan kekal di komputer ini: ia disimpan dalam tab ini dan dalam storan pelayar, jadi tab TakeoffCraft yang lain boleh menampalnya. Tiada apa dimuat naik, dan papan keratan sistem tidak digunakan, jadi anda tidak boleh menampal tanda ke dalam program lain.
:::

:::note
Salinan datang daripada satu helaian pada satu masa. Tanda ditampal seperti sedia ada: belum ada putaran atau cermin untuk salinan.
:::
