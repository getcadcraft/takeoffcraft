---
title: Semak pengukuran kuantiti dalam 3D
summary: Lihat dinding, papak dan kiraan helaian yang dibuka berdiri di atas lukisan, orbit mengelilinginya, dan klik satu untuk memilih tandanya.
keywords: png, imej, gambar, tangkapan skrin, tindan, tingkat, aras, dongakan, glb, gltf, eksport 3d, ketebalan dinding, ketinggian asas, bukaan, kepala pintu, 3d, tiga dimensi, semak, paparan, dinding, ketinggian dinding, papak, kedalaman, isipadu, orbit, model, pemilihan, isometrik, perspektif
from: fb16b4f7
---

Paparan 3D ialah semakan, bukan lukisan kedua: ia menegakkan pengukuran kuantiti helaian yang dibuka di atas skrin, di atas helaian itu sendiri, supaya dinding yang hilang, papak yang berganda atau kiraan yang tersasar kelihatan sekali pandang.

Sebelum anda mula: helaian memerlukan skala ([Tetapkan skala](topic:set-the-scale)). Ketinggian dan kedalaman memerlukan kaki sebenar, jadi pada helaian tanpa skala {{ui:3D}} memberitahu dan kekal pada helaian rata.

## Buka paparan 3D

1. Paparkan helaian yang anda mahu semak.
2. Pilih {{ui:3D}} pada bar yang memaparkan nama dan skala helaian, atau tekan {{key:3}}.
   Kali pertama, paparan 3D mengambil masa seketika untuk dimuatkan. Helaian dilukis di atas tanah, dan pengukuran kuantiti berdiri di atasnya dalam warna setiap item.
3. Untuk kembali, pilih {{ui:3D}} sekali lagi, {{ui:Back to the sheet}}, atau tekan {{key:3}}. Memilih alat lukisan (Lelurus, Luas, Kiraan dan seterusnya) juga kembali, kerana tanda dilukis pada helaian rata.

Ia memaparkan helaian pada skrin; tukar helaian dalam senarai helaian, atau dengan {{key:PageDown}} dan {{key:PageUp}}, dan paparan 3D mengikutinya. Untuk melihat beberapa tingkat sekaligus, tindankannya (di bawah).

## Apa yang anda lihat

| Tanda | Dalam 3D |
|---|---|
| Larian lelurus, item dengan ketinggian | Dinding setinggi itu sepanjang larian. Larian melengkung mengikut lengkungan. |
| Larian lelurus, item tanpa ketinggian | Garisan pada helaian. Berikan item ketinggian di bawah **Item** untuk menegakkannya. |
| Luas, item dengan kedalaman | Papak setebal itu, dengan potongannya terbuka. |
| Luas, item tanpa kedalaman | Plat nipis 2" supaya ia masih kelihatan. |
| Kiraan | Tiang kecil pada setiap titik yang dikira. |

Ketinggian ialah medan {{ui:Height}} bagi item lelurus dan kedalaman ialah medan {{ui:Depth}} bagi item luas, di bawah **Item** (lihat [Cipta item pengukuran kuantiti](topic:create-items)). Ubahnya, dan paparan 3D dikemas kini serta-merta. Nota di bawah nama helaian menyatakan apa yang helaian itu pegang, contohnya "Helaian ini dalam 3D: 2 dinding, 1 papak, 3 kiraan", dan berapa banyak larian atau kawasan yang tiada ketinggian atau kedalaman. Klik melepasi nota itu ke paparan.

Angka tidak berubah dalam 3D: luas dinding ialah panjang tepatnya didarab ketinggiannya, dan isipadu papak ialah luas bersihnya (garis luar tolak potongan, lengkung tepat) didarab kedalamannya. Lengkung hanya dilukis sebagai bahagian lurus pendek pada skrin.

## Lihat sekeliling

| Tindakan | Apa yang dilakukannya |
|---|---|
| Seret, atau seret dengan butang tengah | Orbit mengelilingi pengukuran kuantiti. |
| {{key:Shift}} + seret, atau seret dengan butang kanan | Pan. |
| Roda tetikus | Zum masuk dan keluar pada penunjuk. |
| Leret dua jari pada pad sentuh | Orbit ({{key:Shift}} untuk pan). Cubit untuk zum. |
| {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}, {{ui:Bottom}} | Pandangan piawai, dibingkaikan pada pengukuran kuantiti. Paparan 3D dibuka dalam {{ui:Iso}}. |
| {{ui:Perspective}} | Perspektif hidup atau mati (selari apabila mati). |
| {{ui:Zoom extents}} atau {{key:F}} | Keseluruhan helaian. |
| {{ui:Sheet}} | Tunjuk atau sembunyikan lukisan di atas tanah. |
| ViewCube, kanan atas | Klik muka, tepi atau bucu untuk melihat dari situ; seret untuk orbit; seret gelang kompasnya untuk memusing; butang rumah kembali ke {{ui:Iso}}. |

Sudut menunjukkan ViewCube, ikon paksi X, Y, Z kecil, atau tiada: pilih dalam {{ui:Settings}}, pada tab TakeoffCraft, di bawah **Penunjuk sudut** ([Tetapan TakeoffCraft](topic:settings)). Helaian rata tiada penunjuk sudut.

:::touch
Satu jari untuk orbit; dua jari cubit untuk zum dan gerak untuk pan. Ketik untuk memilih.
:::

## Dinding dengan ketebalan, tapak dan bukaan

Item lelurus dengan ketinggian berdiri sebagai jalur nipis. Untuk melihatnya sebagai dinding sebenar, berikan item bentuknya di bawah **In 3D** dalam tetapannya:

- **Ketebalan dinding** (8", 0.2 m): dinding menjadi pepejal, berpusat pada garisan yang anda lukis, dengan sudut mitred.
- **Ketinggian asas**: dinding bermula setinggi itu di atas lantai (soffit, deretan kabinet atas). Item luas juga mempunyainya: siling pada 9'-0".
- **Kepala bukaan**: segmen yang ditolak (pintu, [Tolak sebahagian larian](topic:measure-linear#deduct-a-part-of-a-run)) mengekalkan dinding di atas ketinggian itu, supaya pintu kelihatan sebagai pintu. Tanpanya, segmen yang ditolak meninggalkan jurang ke bahagian atas.

Ini hanya membentuk paparan 3D: kuantiti (panjang, luas dinding, kos) kekal seperti sediakala.

## Tindankan tingkat

1. Buka PDF setiap tingkat.
2. Dalam paparan 3D, pilih {{ui:Levels…}} dan taip ketinggian setiap tingkat, seperti `0` untuk tingkat bawah dan `12'` untuk yang seterusnya. Kosong meninggalkan helaian keluar.
3. Pilih {{ui:Stack}}. Setiap helaian dengan aras menunjukkan pengukuran kuantitinya pada ketinggiannya; helaian yang dipaparkan berada di bawah tingkatnya sendiri, dan yang lain digaris luar. Nota menyatakan berapa tingkat yang ditindankan.

Helaian sejajar mengikut kedudukannya pada halaman, jadi ini berfungsi untuk pelan tingkat yang diplot sama (saiz dan kedudukan helaian yang sama). Helaian dengan aras tetapi tanpa skala ditinggalkan, dan nota menyatakannya. Pilih {{ui:Stack}} sekali lagi untuk satu helaian pada satu masa. Aras disimpan bersama pengukuran kuantiti.

## Simpan paparan 3D sebagai imej

Pilih {{ui:PNG}} pada bar 3D untuk gambar paparan seperti yang ada di skrin (`… 3D.png`); {{key:Shift}} + klik {{ui:PNG}} menjadikannya dua kali ganda saiz (`… 3D@2x.png`), untuk cetakan.

## Simpan paparan 3D sebagai model

Pilih {{ui:GLB}} pada bar 3D. Anda mendapat fail `.glb` (glTF, binari) bagi apa yang dipaparkan: lantai pada skrin, atau setiap tingkat yang ditindankan. Ia boleh dibuka oleh program 3D lain: satu objek bagi setiap tanda, dinamakan mengikut itemnya, dalam warna item, dalam meter dengan Y ke atas. Helaian itu sendiri dan garis luar tidak termasuk di dalamnya.

## Pilih tanda daripada 3D

Klik dinding, papak, plat atau tiang. Tandanya menjadi tanda yang dipilih, sama seperti jika anda mengkliknya pada helaian: ia dipaparkan di bawah **Tanda dipilih**, itemnya menjadi semasa, dan bar status memberikan panjang dan ketinggiannya, atau luas, kedalaman dan yard padu. {{key:Shift}} + klik menambah tanda kepada pilihan atau mengeluarkannya. {{key:Delete}} memadam tanda yang dipilih dan {{key:Mod+Z}} membawanya kembali; {{key:Esc}} tidak memilih apa-apa. Kembali pada helaian, tanda yang sama kekal dipilih.

:::tip
Lukisan mengikut tema: dalam tema Model, helaian di atas tanah menjadi gelap seperti paparan rata.
:::
