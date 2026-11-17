---
title: Guna TakeoffCraft dengan pembantu AI
summary: Benarkan pembantu AI anda sendiri atau skrip membaca kuantiti dan anggaran pengukuran kuantiti, menambah item dan tanda, mengira dan mengukur pada DWG atau DXF, serta mengeksport: kebenaran, menyambung melalui CadCraft Studio, dan log aktiviti.
keywords: ai, pembantu, ejen, mcp, model context protocol, skrip, automasi, kuantiti, anggaran, kebenaran, putus sambungan, aktiviti
from: 7fa62ec6
---

## Apa yang akan anda pelajari

Cara membenarkan pembantu AI (atau skrip yang anda tulis) bekerja dengan TakeoffCraft, dan cara menentukan perkara yang boleh disentuhnya.

TakeoffCraft **tidak mempunyai AI sendiri** dan tidak menghantar apa-apa ke mana-mana. Anda membawa pembantu anda sendiri: mana-mana program yang menggunakan Model Context Protocol (MCP). TakeoffCraft hanya memberinya alat, dan andalah yang memilih alat mana.

## Hidupkannya

1. Buka {{ui:Tetapan}} (gear dalam bar aplikasi, atau {{key:Mod+,}}) dan pergi ke tab {{ui:TakeoffCraft}}.
2. Di bawah {{ui:Pembantu}}, tandakan **Benarkan pembantu AI dan skrip menggunakan TakeoffCraft**. Ia dimatikan sehingga anda berbuat demikian.
3. Pilih apa yang boleh dilakukannya: **Baca** sudah ditandakan pada mulanya; tandakan **Sunting**, **Simpan** atau **Eksport** hanya apabila anda memerlukannya.

Alat di luar kebenaran yang anda tandakan tidak ditawarkan kepada pembantu, dan jika ia memintanya juga, TakeoffCraft menolak dan mencatatkannya dalam log aktiviti. Mematikan suis menamatkan setiap sambungan serta-merta; {{ui:Tetapkan semula tetapan TakeoffCraft}} turut mematikannya.

## Sambungkan pembantu anda

Pembantu bersambung melalui **CadCraft Studio** pada komputer anda: Studio menjalankan pelayan kecil yang hanya boleh dicapai oleh komputer ini, dilindungi oleh token yang dibuatnya setiap kali ia dimulakan. Dalam Studio, pilih {{ui:Sambung pembantu}} dan salin alamat serta token ke dalam pembantu anda (Studio menunjukkan tetapan tepat untuk ditampal). Jangan sekali-kali kongsi token.

:::note
Tab pelayar tidak boleh membuka sambungan untuk pembantu: dalam aplikasi pelayar, suis tidak memberi kesan sehingga anda menggunakan CadCraft Studio pada komputer anda.
:::

## Anda kekal bertanggungjawab

- **Setiap perubahan ialah satu langkah buat asal**, dilabelkan dengan nama yang diberikan pembantu kepadanya (contohnya "Pembantu: …"). {{key:Mod+Z}} membatalkan perubahan terakhir pembantu secara keseluruhan.
- **Anda tahu apabila satu pembantu disambungkan.** Butang dalam bar aplikasi menamakan pembantu itu semasa ia bersambung; klik untuk melihat apa yang dibenarkannya, atau untuk **Putus sambungan**.
- **Aktiviti.** {{ui:Tetapan}} › {{ui:TakeoffCraft}} › {{ui:Pembantu}} › {{ui:Aktiviti}} menyenaraikan setiap panggilan: bila, alat yang mana, dan sama ada selesai atau ditolak. {{ui:Simpan log}} menyimpan salinan.

## Apa yang boleh diminta oleh pembantu

| Alat | Kebenaran | Fungsinya |
|---|---|---|
| `app_info`, `sheets_list` | Baca | Pengukuran kuantiti yang dibuka, PDF dan helaiannya, skala dan tanda bagi setiap helaian |
| `items_list` | Baca | Item dengan unitnya, kadar dan formula himpunan |
| `takeoff_quantities` | Baca | Kuantiti mengikut item atau mengikut helaian; tanda pada helaian tanpa skala disenaraikan, tidak sekali-kali dikira sebagai sifar |
| `takeoff_estimate` | Baca | Anggaran berharga seperti yang dikira oleh TakeoffCraft, dengan jumlahnya |
| `takeoff_export` | Eksport | Eksport CSV atau XLSX TakeoffCraft sendiri |
| `items_add` | Sunting | Menambah item dengan unit, kadar dan pembaziran |
| `marks_add` | Sunting | Mengukur larian, luas dan kiraan pada helaian. Panjang dan luas hanya pada helaian yang ada skala, tidak sekali-kali pada helaian tanpa skala |
| `cad_sheets`, `cad_catalog`, `cad_count` | Baca | Pada DWG atau DXF yang anda buka: helaiannya dan skalanya, apa yang boleh dikira (blok, lapisan dan jenis, teks), dan kiraan tepat, seperti yang dihasilkan oleh {{ui:Kiraan CAD}} ([Kira daripada lukisan](topic:count-from-a-drawing)) |
| `cad_count_add` | Sunting | Mengira dalam lukisan dan meletakkan tanda kiraan pada setiap objek yang dijumpai, dalam satu langkah; mengira semula hanya menambah yang baharu |
| `cad_measure` | Sunting | Mengukur item linear atau item luas daripada garisan, lengkok, polygaris dan hatch lukisan itu sendiri, seperti yang dilakukan oleh {{ui:Ukur lukisan}} ([Ukur daripada lukisan](topic:measure-from-a-drawing)); hanya pada helaian yang ada skala |
| `usd_export` | Eksport | Larian, luas dan kiraan yang diukur bagi helaian berskala sebagai model semakan 3D dalam USD (`.usdz`, `.usda` atau `.usdc`), seperti yang ditulis oleh {{ui:Pakej USD (.usdz)}} dalam paparan semakan 3D ([Eksport paparan semakan 3D sebagai USD](topic:usd)) |

Dengan **Sunting** ditandakan, pembantu menambah item dan tanda (setiap panggilan ialah satu langkah buat asal); ia tidak boleh mengalih, menukar atau memadam tanda yang sudah sedia ada.

Kuantiti dan anggaran yang sama juga boleh didapati tanpa membuka TakeoffCraft: pelayan MCP CadCraft membuka fail `.takeoff.json` dalam folder yang anda namakan (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), dan `cadcraft info Job.takeoff.json` mencetaknya pada baris arahan. Ia juga membuka DWG atau DXF sebagai pengukuran kuantiti baharu pada helaiannya (diskalakan daripada lukisan seperti yang TakeoffCraft lakukan), mengira dan mengukur padanya dengan alat `cad_*` yang sama, menambah item dan menyimpan pengukuran kuantiti (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` mengira daripada baris arahan.

## Jika ada yang tidak berfungsi

- **Pembantu tidak nampak alat TakeoffCraft:** semak bahawa suis dihidupkan dalam tetingkap ini, dan tetingkap itu dibuka dalam Studio.
- **"memerlukan kebenaran eksport":** tandakan **Eksport** di bawah {{ui:Pembantu}}, kemudian minta sekali lagi.
- **Ralat "401" atau "token":** token telah berubah (Studio dimulakan semula, atau {{ui:Token baharu}}). Salin token baharu ke dalam tetapan pembantu.

## Lihat juga

- [Resipi untuk pembantu AI](common:assistants-recipes): contoh yang dikerjakan, setiap satu dengan alat yang dipanggilnya.
