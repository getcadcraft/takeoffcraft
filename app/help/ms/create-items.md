---
title: Cipta item pengukuran kuantiti
summary: Buat item linear, luas dan kiraan, dan tetapkan unit, ketinggian atau kedalaman, pembaziran serta kadar bahan dan buruh.
keywords: krew, kadar pengeluaran, saiz krew, upah, jam, jam orang, jam pekerja, hari krew, jam buruh, item, item baharu, keadaan, pelbagai keadaan, juga ukur, beberapa jenis, bilik, linear, luas, kiraan, unit, ketinggian, kedalaman, pembaziran, bahan, buruh, kadar, warna, kos
from: 7fa5effc
---

Sebuah **item** ialah satu perkara yang anda ukur dan beri harga: jenis dinding, kemasan lantai, siling, pintu, sebuah perkakas lampu. Setiap penanda yang anda lukis tergolong dalam satu item. Program lain memanggilnya keadaan.

Setiap item mempunyai jenis (dan boleh menerima jenis penanda lain juga, lihat [Satu item, beberapa jenis penanda](topic:create-items#one-item-several-kinds-of-marks)):

| Taip | Anda lukis | Ia melaporkan | Unit |
|---|---|---|---|
| Linear | Rangkaian titik bersambung | Panjang, bilangan rangkaian, dan luas dinding apabila ia mempunyai ketinggian | LF atau m |
| Luas | Garis bentuk tertutup, dengan potongan | Luas, perimeter, bilangan kawasan | SF, SY, SQ, ac, ha atau m² |
| Kiraan | Satu klik bagi setiap satu | Berapa banyak | EA |
| Kuantiti ditaip | Tiada: anda menaip kuantiti | Nombor yang anda taip (atau yang dibawa masuk dari CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha atau m² |

## Kuantiti ditaip (tiada lukisan)

Sesetengah perkara dalam anggaran tidak pernah dilukis: mobilisasi, permit, peruntukan luar jangka, subkontrak jumlah pukal, dan potongan serta tambakan yang dikira oleh CivilCraft. Jadikannya **Kuantiti ditaip**:

1. Pilih {{ui:New item}}, taip nama, pilih {{ui:Typed quantity (no drawing)}} dan pilih {{ui:Add}}.
2. Dalam penyunting item, pilih {{ui:Unit}} (LS untuk jumlah pukal) dan taip {{ui:Quantity}}: `1`, `2.5` atau `1,250`.
3. Tetapkan pembaziran dan kadar seperti bagi mana-mana item lain. Formula himpunan menggunakan `Q`, kuantiti, contohnya `ceil(Q / 12)` muatan lori.

Kuantiti ditaip tidak mengambil penanda dan tidak sekali-kali menjadikan anggaran tidak lengkap. Apabila pengukuran kuantiti mempunyai kawasan tawaran, penyunting juga mempunyai {{ui:Bid area}}: kuantiti kemudian dikira dalam kawasan itu, alternatifnya dan jumlahnya, sama seperti penanda di situ. Kuantiti yang dibawa masuk dari aplikasi lain memberitahu dari mana ia datang, lihat [Kerja tanah dan aras titik](topic:earthwork#cut-and-fill-from-civilcraft).

## Buat item

1. Dalam panel {{ui:Items}} di sebelah kanan, pilih {{ui:New item}}.
2. Taip nama, seperti `Jenis dinding dalaman A` atau `Jubin karpet`.
3. Pilih jenis: {{ui:Linear (length)}}, {{ui:Area}} atau {{ui:Count}}.
4. Pilih {{ui:Add}} (atau tekan {{key:Enter}}).
   Item muncul dalam senarai dengan warnanya sendiri, menjadi item yang anda lukis dengannya, dan penyuntingnya dibuka di bawah senarai. Bar status memberitahu anda alat yang perlu dipilih seterusnya.

Tekan {{key:Esc}} dalam borang untuk menutupnya tanpa menambah item.

:::tip
Jika anda memilih alat ukur dahulu, TakeoffCraft menggunakan item terakhir bagi jenis yang betul, atau membuka borang {{ui:New item}} dengan jenis itu sudah dipilih.
:::

## Pilih item yang anda lukis dengannya

Klik item dalam senarai. Ia menjadi item tempat penanda baharu pergi, dan penanda-penandanya diserlahkan pada setiap helaian manakala yang lain pudar. Jika helaian yang dibuka tidak mempunyai sebarang penanda daripadanya, TakeoffCraft melompat ke helaian yang mempunyainya. Klik item sekali lagi untuk berhenti menyerlahkan; ia kekal sebagai item yang anda lukis dengannya.

Klik penanda dengan alat {{ui:Select}} juga menjadikan item penandanya sebagai item semasa.

## Tetapkan item

Penyunting item (**Item: (nama)**) mempunyai medan berikut. Setiap satu disimpan apabila anda meninggalkan medan atau menekan {{key:Enter}}, dan setiap perubahan boleh dibuat asal.

| Medan | Fungsinya |
|---|---|
| {{ui:Name}} | Dipaparkan dalam senarai, jadual dan eksport. |
| {{ui:Type}} | Linear, Luas atau Kiraan. Ia dikunci apabila item mempunyai penanda ("Item dengan penanda mengekalkan jenisnya"). |
| {{ui:Color}} | Warna penandanya pada skrin dan dalam PDF bertanda. |
| {{ui:Unit}} | Unit kuantiti dilaporkan: LF atau m untuk linear; SF, SY, SQ, ac, ha atau m² untuk luas; EA untuk kiraan. |
| {{ui:Also measure}} | Jenis penanda lain yang diterima item, setiap satu dengan unitnya sendiri. Lihat di bawah. |
| {{ui:Height}} (linear) | Ketinggian dinding. Item kemudian juga melaporkan luas dinding (panjang × ketinggian). Rangkaian yang datang dari model BimCraft membawa pintu dan tingkapnya: ini dikeluarkan sekali, dan item menyatakan luas kasar, bukaan dan luas bersih. Pengukuran kuantiti dari projek BimCraft yang memilih kaedah pengukuran diukur dengan kaedah itu juga di sini (nota menamakannya, dengan sumbernya, dan menyatakan ia belum disemak oleh juruukur bahan); kaedah itu tidak boleh ditukar dalam TakeoffCraft. Bata atau blok dan mortar daripada jenis dinding tiba sebagai dua komponen: unit untuk dipesan dan isipadu mortar. |
| {{ui:Depth}} (luas) | Kedalaman atau ketebalan, digunakan dalam formula himpunan (contohnya isipadu konkrit). |
| {{ui:Waste %}} | Ditambah kepada kuantiti sebelum harga: 10 bermaksud kuantiti × 1.10. |
| Bahan $/LF | Kos bahan bagi setiap unit. Label mengikut unit: $/SF, $/EA dan seterusnya. |
| Buruh $/LF | Kos buruh bagi setiap unit. |
| {{ui:CSI number}} | Nombor CSI MasterFormat, seperti `09 21 16` (atau hanya bahagian, `09`). Lembaran kerja By division bagi buku kerja mengelompokkan kos mengikutnya. Item dari [pek perdagangan](topic:trade-packs) sudah mempunyainya. |

Ketinggian dan kedalaman menerima kaki dan inci (`9'-0"`, `8' 6"`) atau kaki perpuluhan (`9`) untuk unit imperial, dan meter (`2.7`, `2700 mm`) untuk unit metrik. Kadar menerima jumlah seperti `12.50` atau `$1,250`, sehingga empat titik perpuluhan. Lihat [Kemasukan panjang, kadar dan peratus](topic:entry-formats).

Di bawah medan, **Diukur** menunjukkan jumlah yang boleh digunakan oleh formula item, dengan huruf mereka: Panjang (L), Bilangan rangkaian (N), Luas dinding (A) untuk linear; Luas (A), Perimeter (P), Bilangan kawasan (N) untuk luas; Kiraan (N) untuk kiraan.

## Satu item, beberapa jenis penanda

Sesetengah perkara diukur lebih daripada satu cara: sebuah bilik mempunyai lantai (luas), tepi di sepanjang dindingnya (panjang) dan pintu (kiraan). Daripada tiga item, buat satu:

1. Buat item dengan jenis utamanya, seperti item luas `Bilik 101`.
2. Di bawah {{ui:Also measure}} dalam penyuntingnya, tandakan {{ui:Linear}}, {{ui:Count}} atau kedua-duanya. Setiap satu mendapat unit di sebelahnya.
3. Lukis dengan mana-mana alat yang jenisnya diterima item: dengan `Bilik 101` semasa, {{ui:Area}} melukis lantainya, {{ui:Linear}} tepinya dan {{ui:Count}} pintunya. TakeoffCraft tidak meminta item lain.

Senarai item memaparkan setiap kuantiti (`50.00 SF + 2 EA`). Dalam jadual kuantiti, baris item mempunyai kuantiti utamanya, dan setiap jenis lain mendapat baris sendiri di bawahnya, seperti **Bilik 101 (kiraan)**, dengan pembaziran serta kadar bahan dan buruhnya sendiri. Eksport, jadual setiap helaian dan legenda PDF bertanda menyenaraikannya dengan cara yang sama.

Medan jenis utama kekal milik jenis utama: ketinggian atau kedalaman, kecerunan bumbung, pengurangan dan bentuk 3D hanya terpakai pada penandanya. Larian tepi yang dilukis untuk item luas diukur secara biasa sepanjang pelan, dan ditunjukkan rata dalam 3D. Formula himpunan menggunakan jumlah jenis utama.

Sesuatu jenis hanya boleh dinyahtandakan apabila item tidak mempunyai penanda jenis itu; padamkannya, atau alihkannya ke item lain di bawah **Penanda dipilih**, dahulu. Penanda boleh dialihkan ke mana-mana item yang menerima jenisnya.

Lebih ke bawah ialah {{ui:Assembly}}: komponen seperti kayu kecil atau papan, setiap satu dengan formula dan kadarnya sendiri. Lihat [Himpunan dan formula](topic:assemblies).

Di bahagian bawah: {{ui:Move up}} dan {{ui:Move down}} menukar kedudukan item dalam senarai dan eksport, dan {{ui:Delete item}} mengeluarkannya bersama semua penandanya (selepas bertanya; anda boleh membuat asal).

Item luas juga mempunyai **Kecerunan** (satah bumbung diukur pada cerun: [Bumbung dan cerun](topic:roofs-and-slopes)) dan **Pengurangan luas** (penandanya ditolak daripada luas item lain: [Ukur luas](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Item linear mempunyai **Cerun** (Aras, Rake, Hip atau valley) dan, untuk rake dan hip, **Kecerunan**.

## Kadar dalam jadual

Anda juga boleh menaip {{ui:Waste %}}, kadar bahan dan buruh terus ke dalam jadual {{ui:Quantities}} di bahagian bawah ({{ui:By item}}). Ia tetapan yang sama seperti dalam penyunting.

## Cara harga berfungsi

Bagi setiap item dan setiap komponen himpunan:

1. **Dengan pembaziran** = kuantiti × (1 + pembaziran %).
2. **Bahan** = dengan pembaziran × bahan bagi setiap unit, dibundarkan kepada sen.
3. **Buruh** = dengan pembaziran × buruh bagi setiap unit, dibundarkan kepada sen.
4. **Jumlah** = bahan + buruh.

{{ui:Job total}} menambah setiap item dan setiap komponen. Item boleh membawa kadarnya sendiri dan himpunan pada masa yang sama; kedua-duanya dikira, jadi biarkan kadar item pada 0 apabila komponennya membawa kos.

## Buruh mengikut krew

Daripada kadar buruh bagi setiap unit, buruh item boleh datang daripada krew: berapa banyak ia hasilkan sejam, berapa ramai orang, dan berapa setiap seorang dibayar. Di bawah {{ui:Labor by crew}} dalam penyunting item, tandakan {{ui:Price labor from a crew}} dan isikan:

| Medan | Contoh |
|---|---|
| Pengeluaran | `20` LF sejam (dalam unit item) untuk keseluruhan krew |
| {{ui:Crew size}} | `2` orang |
| {{ui:Wage $/hour each}} | `45` |

TakeoffCraft mengira, daripada kuantiti dengan pembaziran:

- **jam krew** = kuantiti ÷ pengeluaran (110 LF ÷ 20 = 5.5),
- **jam pekerja** = jam krew × saiz krew (11),
- **hari krew** = jam krew ÷ 8 (0.69),
- **buruh** = jam pekerja × upah ($495.00).

Penyunting menunjukkan hasilnya dan kadar yang dicapainya ($4.50/LF). Kadar buruh item itu kemudian hanya boleh dibaca, dalam penyunting dan dalam jadual. Pengepala jadual {{ui:Quantities}} menambah jam pekerja dan hari krew bagi kerja itu. Eksport mencatat jam setiap krew, dan dalam buku kerja sel buruh ialah formula pada krew (`ROUND(F2/20*2*45,2)`). Nyahtandakan kotak untuk kembali kepada kadar bagi setiap unit.

## Item metrik

Pilih m (linear) atau m² (luas) sebagai unit. Kuantiti, ketinggian dan nilai formula kemudian dalam meter. Skala helaian boleh mana-mana pratetap atau penentukuran; unit dan skala adalah bebas antara satu sama lain.

## Seterusnya

- [Ukur larian linear](topic:measure-linear)
- [Ukur luas dengan potongan](topic:measure-areas)
- [Kira secara manual](topic:count-by-hand)
